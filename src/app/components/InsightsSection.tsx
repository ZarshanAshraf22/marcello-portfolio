"use client";
import { useRef, useEffect, useState, useCallback } from "react";
import { motion, useMotionValue, animate } from "framer-motion";
import Link from "next/link";
import InsightCard from "./InsightCard";
import FadeInUp from "./FadeInUp";
import { insights as posts } from "@/data/insights";

// ─────────────────────────────────────────────────────────────────────────────
// ✅ CONFIGURE SLIDES PER VIEW — change these anytime
// ─────────────────────────────────────────────────────────────────────────────
const SLIDES_CONFIG = {
    mobile:  1,   // < 640px
    tablet:  2,   // 640px – 1023px
    desktop: 3,   // 1024px+
};

// ✅ GAP BETWEEN SLIDES (px)
const SLIDE_GAP = 20;

// ✅ AUTOPLAY DELAY (ms)
const AUTOPLAY_DELAY = 3500;
const AUTOPLAY_RESUME_AFTER_DRAG = 2500;
// ─────────────────────────────────────────────────────────────────────────────

const EXPO_OUT = [0.16, 1, 0.3, 1] as const;

// ── Helpers ──────────────────────────────────────────────────────────────────
function getSlidesPerView(): number {
    if (typeof window === "undefined") return SLIDES_CONFIG.desktop;
    if (window.innerWidth < 640)  return SLIDES_CONFIG.mobile;
    if (window.innerWidth < 1024) return SLIDES_CONFIG.tablet;
    return SLIDES_CONFIG.desktop;
}

// slideWidth fills the container exactly for n slides
// containerWidth is already the inner max-w-7xl width (no extra padding needed)
function calcSlideWidth(containerWidth: number, slidesPerView: number): number {
    const totalGaps = SLIDE_GAP * (slidesPerView - 1);
    return Math.floor((containerWidth - totalGaps) / slidesPerView);
}

// ─── Clip Reveal ─────────────────────────────────────────────────────────────
function ClipReveal({
    children,
    delay = 0,
    className = "",
}: {
    children: React.ReactNode;
    delay?: number;
    className?: string;
}) {
    return (
        <div className={className} >
            <motion.div
                initial={{ y: "100%" }}
                whileInView={{ y: "0%" }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.9, ease: EXPO_OUT, delay }}
            >
                {children}
            </motion.div>
        </div>
    );
}

// ─── Main Section ─────────────────────────────────────────────────────────────
export default function InsightsSection() {
    const containerRef = useRef<HTMLDivElement>(null); // the max-w-7xl div
    const sliderRef    = useRef<HTMLDivElement>(null); // the motion track
    const x            = useMotionValue(0);
    const isDragging      = useRef(false);
    const autoTimer       = useRef<ReturnType<typeof setInterval> | null>(null);
    const resumeTimer     = useRef<ReturnType<typeof setTimeout>  | null>(null);
    const currentIndex    = useRef(0);

    const [slideWidth,    setSlideWidth]    = useState(0);
    const [slidesPerView, setSlidesPerView] = useState(SLIDES_CONFIG.desktop);

    const maxIndex = Math.max(0, posts.length - slidesPerView);

    // ── Measure container and compute slide width ───────────────────────────
    const measure = useCallback(() => {
        if (!containerRef.current) return;
        const cw  = containerRef.current.offsetWidth;
        const spv = getSlidesPerView();
        const sw  = calcSlideWidth(cw, spv);
        setSlidesPerView(spv);
        setSlideWidth(sw);
        // Clamp index on resize
        const clamped = Math.min(currentIndex.current, posts.length - spv);
        currentIndex.current = Math.max(0, clamped);
        animate(x, -(currentIndex.current * (sw + SLIDE_GAP)), { duration: 0.3 });
    }, [x]);

    useEffect(() => {
        measure();
        window.addEventListener("resize", measure);
        return () => window.removeEventListener("resize", measure);
    }, [measure]);

    // ── Snap to slide index ──────────────────────────────────────────────────
    const goToIndex = useCallback((idx: number) => {
        const clamped = Math.max(0, Math.min(idx, maxIndex));
        currentIndex.current = clamped;
        animate(x, -(clamped * (slideWidth + SLIDE_GAP)), {
            type: "spring",
            stiffness: 300,
            damping: 35,
            mass: 0.85,
        });
    }, [slideWidth, maxIndex, x]);

    // ── Autoplay ─────────────────────────────────────────────────────────────
    const stopAutoplay = useCallback(() => {
        if (autoTimer.current) { clearInterval(autoTimer.current); autoTimer.current = null; }
    }, []);

    const startAutoplay = useCallback(() => {
        if (!AUTOPLAY_DELAY) return;
        stopAutoplay();
        autoTimer.current = setInterval(() => {
            if (isDragging.current) return;
            goToIndex(currentIndex.current + 1 > maxIndex ? 0 : currentIndex.current + 1);
        }, AUTOPLAY_DELAY);
    }, [goToIndex, maxIndex, stopAutoplay]);

    useEffect(() => {
        if (slideWidth === 0) return;
        const t = setTimeout(() => startAutoplay(), 800);
        return () => { clearTimeout(t); stopAutoplay(); };
    }, [slideWidth, startAutoplay, stopAutoplay]);

    // ── Drag handlers ────────────────────────────────────────────────────────
    function handleDragStart() {
        isDragging.current = true;
        stopAutoplay();
        if (resumeTimer.current) clearTimeout(resumeTimer.current);
        (window as Window & { __sliderDelta?: number }).__sliderDelta = 0;
    }

    function handleDrag(_: unknown, info: { offset: { x: number } }) {
        (window as Window & { __sliderDelta?: number }).__sliderDelta = info.offset.x;
    }

    function handleDragEnd(_: unknown, info: { offset: { x: number }; velocity: { x: number } }) {
        isDragging.current = false;
        const { offset, velocity } = info;

        if (offset.x < -50 || velocity.x < -300)      goToIndex(currentIndex.current + 1);
        else if (offset.x > 50 || velocity.x > 300)   goToIndex(currentIndex.current - 1);
        else                                            goToIndex(currentIndex.current);

        resumeTimer.current = setTimeout(() => startAutoplay(), AUTOPLAY_RESUME_AFTER_DRAG);
    }

    return (
        <section className="w-full bg-[#cecbc8] pt-16 pb-20 md:pt-20 md:pb-24" id="insights">

            {/* ── Everything inside max-w-7xl ── */}
            <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12 xl:px-14 2xl:px-0 mb-10 md:mb-14">
                <div className="lg:grid md:grid-cols-[1fr_350px] gap-8 items-end mb-20">
                    {/* Left: big heading */}
                    <FadeInUp delay={0}>
                        <ClipReveal delay={0}>
                            <h2 className="font-geist text-[32px] sm:text-[40px] md:text-[44px] xl:text-[56px] font-normal leading-[1.1] tracking-tight">
                                <span>(Insights from a Founder)</span>
                                <span>
                                    {" "}Helping forward-thinking founders and companies break
                                    through complexity, unlock clarity, and accelerate measurable
                                    growth.
                                </span>
                            </h2>
                        </ClipReveal>
                    </FadeInUp>

                    {/* Right: button + subtext */}
                    <FadeInUp delay={0.15}>
                        <div className="flex flex-col-reverse sm:w-1/2 lg:w-auto lg:flex-col items-start
                            lg:items-end gap-6 lg:mt-0 mt-6">
                            <ClipReveal delay={0.1}>
                                <Link
                                    href="/insights"
                                    className="font-satoshi text-base inline-block border border-[#2a2825]
                                    px-3 py-1.5 text-[#151515] rounded-[0.2rem] bg-transparent
                                    hover:bg-[#2a2825] hover:text-[#cecbc8] transition-all duration-200
                                    whitespace-nowrap"
                                >
                                    View more Articles
                                </Link>
                            </ClipReveal>
                            <ClipReveal delay={0.15}>
                                <p className="font-geist text-[22px] leading-[1.65] opacity-60">
                                    Clear thinking, practical wisdom, and frameworks to help
                                    founders navigate complexity, build clarity, and scale with
                                    confidence.
                                </p>
                            </ClipReveal>
                        </div>
                    </FadeInUp>
                </div>

                {/* ── Slider — inside the same max-w-7xl container ── */}
                {/*
                    containerRef measures the available width of this div.
                    overflow-hidden clips cards that go beyond the container.
                    slideWidth is calculated from containerRef.offsetWidth so
                    exactly SLIDES_CONFIG.desktop slides fit with gaps.
                */}
                <div ref={containerRef} className="w-full overflow-hidden">
                    {slideWidth > 0 && (
                        <motion.div
                            ref={sliderRef}
                            className="flex cursor-grab active:cursor-grabbing"
                            style={{ x, gap: SLIDE_GAP }}
                            drag="x"
                            dragConstraints={containerRef}
                            dragElastic={0.08}
                            dragMomentum={false}
                            onDragStart={handleDragStart}
                            onDrag={handleDrag}
                            onDragEnd={handleDragEnd}
                        >
                            {posts.map((post, i) => (
                                <InsightCard
                                    key={post.slug + i}
                                    post={post}
                                    slideWidth={slideWidth}
                                    onClick={(e) => {
                                        if (
                                            Math.abs(
                                                (window as Window & { __sliderDelta?: number })
                                                    .__sliderDelta ?? 0,
                                            ) > 5
                                        )
                                            e.preventDefault();
                                    }}
                                />
                            ))}
                        </motion.div>
                    )}
                </div>
            </div>

        </section>
    );
}