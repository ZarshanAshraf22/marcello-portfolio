"use client";

import { useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";

type Service = {
  id: number;
  titleLine1: string;
  titleLine2: string;
  desc: string;
  video: string;
};

const services: Service[] = [
  {
    id: 1,
    titleLine1: "Product and",
    titleLine2: "Growth Advisory",
    desc: "I help founders identify what's actually blocking growth, then build the roadmap to fix it. This means examining your product, your market positioning, and how decisions get made across.",
    video: "/media/video/seg2.mp4",
  },
  {
    id: 2,
    titleLine1: "Technology and",
    titleLine2: "Infrastructure Guidance",
    desc: "For leaders making technology decisions without a technical co-founder or full-time CTO, I provide direction on systems, architecture, and tool selection. The goal is infrastructure that supports the business you're building, not the one you have today.",
    video: "/media/video/seg2_rev.mp4",
  },
  {
    id: 3,
    titleLine1: "Brand and",
    titleLine2: "Positioning",
    desc: "I work with teams to define how they talk about what they do. This includes messaging, narrative, and how you present to investors, customers, and potential hires.",
    video: "/media/video/seg3.mp4",
  },
  {
    id: 4,
    titleLine1: "Funding",
    titleLine2: "Preparation",
    desc: "Support for early-stage founders preparing for funding or strategic growth milestones. This includes refining the story, clarifying financial structure, and positioning the business with confidence for investor conversations.",
    video: "/media/video/seg4.mp4",
  },
];

const pad = (n: number) => n.toString().padStart(2, "0");
const EASE = [0.4, 0, 0.2, 1] as const;
const EXPO_OUT = [0.16, 1, 0.3, 1] as const;

// Reserve last portion of scroll as "hold zone" so the final card stays fully visible
const HOLD_ZONE = 0.15;

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
    <div className={className}>
      <motion.div
        initial={{ y: "100%" }}
        whileInView={{ y: "0%" }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.9, ease: EXPO_OUT, delay }}
      >
        {children}
      </motion.div>
    </div>
  );
}

export default function ServicesSection() {
  const stageRef = useRef<HTMLElement>(null);
  const lastIndexRef = useRef(0);
  const [activeIndex, setActiveIndex] = useState(0);

  const { scrollYProgress } = useScroll({
    target: stageRef,
    offset: ["start start", "end end"],
  });

  // Progress bar fills only across the "active" portion of scroll, then stays full during hold zone
  const progressWidth = useTransform(
    scrollYProgress,
    [0, 1 - HOLD_ZONE, 1],
    ["5%", "100%", "100%"],
  );

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    // Compress effective progress into (1 - HOLD_ZONE), reserving the tail for the last card to "hold"
    const effectiveProgress = Math.min(latest / (1 - HOLD_ZONE), 1);
    const rawIdx = effectiveProgress * services.length;

    // Hysteresis: prevent rapid back-and-forth switching at segment boundaries
    const currentIdx = lastIndexRef.current;
    let newIdx = currentIdx;

    if (rawIdx >= currentIdx + 1) {
      newIdx = Math.min(services.length - 1, Math.floor(rawIdx));
    } else if (rawIdx < currentIdx - 0.1) {
      newIdx = Math.max(0, Math.floor(rawIdx));
    }

    if (newIdx !== currentIdx) {
      lastIndexRef.current = newIdx;
      setActiveIndex(newIdx);
    }
  });

  const active = services[activeIndex];

  return (
    <>
      <div id="services">
        {/* PART 1 — Normal intro section (no sticky, no scroll pin) */}
        <section className="w-full bg-[#000] px-6 py-32 md:px-16 md:py-40 px-5 sm:px-8 lg:px-12 xl:px-14 2xl:px-0">
          <div className="mx-auto max-w-7xl grid w-full grid-cols-1 items-start gap-y-6 md:grid-cols-[160px_1fr] md:gap-0">
            <ClipReveal delay={0}>
              <span
                aria-hidden
                className="font-satoshi block text-[50px] leading-none text-[#CECBC8]"
              >
                →
              </span>
            </ClipReveal>

            <div className="flex flex-col gap-6">
              <ClipReveal delay={0.05}>
                <p className="font-geist text-lg text-[#CECBC8]">(Services)</p>
              </ClipReveal>

              <ClipReveal delay={0.1}>
                <h2 className="font-geist text-[56px] max-w-xl font-light leading-[1.1] tracking-tight text-[#CECBC8]">
                  How I Help your Business Succeed
                </h2>
              </ClipReveal>

              <ClipReveal delay={0.2}>
                <p className="font-geist max-w-[560px] text-[22px] leading-[1.65] text-[#CECBC8]">
                  Practical, strategic, and deeply personalized solutions to
                  accelerate your business.
                </p>
              </ClipReveal>
            </div>
          </div>
        </section>

        {/* PART 2 — Pinned service stage */}
        <section
          ref={stageRef}
          className="relative z-0 w-full bg-[#000] px-5 sm:px-8 lg:px-12 xl:px-14 2xl:px-0"
          style={{ height: `${(services.length + 4.5) * 100}vh` }}
          
        >
          <div className="mx-auto max-w-7xl sticky top-0 z-0 h-screen w-full overflow-hidden">
            {/* Service number */}
            <div className="pointer-events-none absolute left-auto sm:left-5 md:left-0 right-0 sm:right-auto top-6 md:top-12">
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={`num-${active.id}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.8, ease: EASE }}
                  className="font-geist block text-6xl sm:text-7xl font-light leading-none text-white/55"
                >
                  {pad(active.id)}
                </motion.span>
              </AnimatePresence>
            </div>

            {/* Progress bar */}
            <div className="pointer-events-none absolute left-60 sm:left-1/2 top-25 sm:top-20 w-[65vw] max-w-[780px] -translate-x-1/2">
              <div className="relative h-[4px] w-full bg-white/15">
                <motion.div
                  style={{
                    width: progressWidth,
                    background:
                      "linear-gradient(90deg, #000000 3.33%, #9C9C9C 100%)",
                  }}
                  className="absolute inset-y-0 left-0 bg-white/70"
                />
              </div>
            </div>

            {/* Decorative shape */}
            <div className="pointer-events-none absolute left-0 sm:left-auto sm:right-0 top-6 sm:top-10">
              <motion.div
                animate={{ y: [-8, 8, -8] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="h-[90px] w-[90px] md:h-[120px] md:w-[120px]"
              >
                <AnimatePresence mode="wait" initial={false}>
                  <motion.div
                    key={`deco-${active.id}`}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.8, ease: EASE }}
                    className="h-full w-full"
                  >
                    <DecorativeShape id={active.id} />
                  </motion.div>
                </AnimatePresence>
              </motion.div>
            </div>

            {/* Video */}
            <div className="pointer-events-none absolute left-1/2 bottom-0 -translate-x-1/2">
              <div className="relative flex items-center justify-center h-75 sm:h-[40vh] lg:h-[50vh] xl:h-[80vh]">
                <AnimatePresence initial={false}>
                  <motion.video
                    key={`video-${active.id}`}
                    src={active.video}
                    autoPlay
                    muted
                    playsInline
                    preload="auto"
                    onEnded={(e) => {
                      e.currentTarget.pause();
                    }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5, ease: EASE }}
                    className="absolute left-1/2 sm:h-full w-auto max-w-[95vw] -translate-x-1/2 object-contain"
                  />
                </AnimatePresence>
              </div>
            </div>

            {/* Title */}
            <div className="pointer-events-none absolute top-35 sm:top-auto bottom-unset left-0 right-0 sm:bottom-14 max-w-md mx-auto sm:mx-0">
              <AnimatePresence mode="wait" initial={false}>
                <motion.h3
                  key={`title-${active.id}`}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ duration: 0.8, ease: EASE }}
                  className="text-[36px] sm:text-[40px] xl:text-5xl leading-[1.2] tracking-tight"
                >
                  <span className="font-geist block font-light sm:font-normal text-white">
                    {active.titleLine1}
                  </span>
                  <span className="font-geist block font-light sm:font-light text-white/40">
                    {active.titleLine2}
                  </span>
                </motion.h3>
              </AnimatePresence>
            </div>

            {/* Description */}
            <div className="pointer-events-none absolute top-70 sm:top-auto bottom-unset left-0 right-0 max-w-md mx-auto sm:bottom-14 md:right-0 md:left-auto md:max-w-[250px] xl:max-w-[420px]">
              <AnimatePresence mode="wait" initial={false}>
                <motion.p
                  key={`desc-${active.id}`}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ duration: 0.8, ease: EASE }}
                  className="font-satoshi text-xl leading-[1.65] text-white/65"
                >
                  {active.desc}
                </motion.p>
              </AnimatePresence>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

function DecorativeShape({ id }: { id: number }) {
  if (id === 1) return <StackedSquares />;
  if (id === 2) return <StackedPlates />;
  if (id === 3) return <Dome />;
  return <GlowingSquare />;
}

function StackedSquares() {
  return (
    <svg viewBox="0 0 120 120" className="h-full w-full">
      <defs>
        <linearGradient id="sq-metal" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#e8e8e8" />
          <stop offset="55%" stopColor="#888" />
          <stop offset="100%" stopColor="#333" />
        </linearGradient>
      </defs>
      <g transform="translate(60 60)">
        <rect x="-55" y="-55" width="110" height="110" rx="3" fill="url(#sq-metal)" transform="rotate(0)" />
        <rect x="-44" y="-44" width="88" height="88" rx="3" fill="url(#sq-metal)" transform="rotate(4)" />
        <rect x="-33" y="-33" width="66" height="66" rx="3" fill="url(#sq-metal)" transform="rotate(8)" />
        <rect x="-22" y="-22" width="44" height="44" rx="2" fill="url(#sq-metal)" transform="rotate(12)" />
        <rect x="-11" y="-11" width="22" height="22" rx="2" fill="url(#sq-metal)" transform="rotate(16)" />
      </g>
    </svg>
  );
}

function StackedPlates() {
  return (
    <svg viewBox="0 0 120 120" className="h-full w-full">
      <defs>
        <linearGradient id="pl-metal" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#ededed" />
          <stop offset="50%" stopColor="#8a8a8a" />
          <stop offset="100%" stopColor="#2d2d2d" />
        </linearGradient>
      </defs>
      <g transform="translate(60 60)">
        <ellipse cx="0" cy="-26" rx="50" ry="9" fill="url(#pl-metal)" />
        <ellipse cx="0" cy="-8" rx="50" ry="9" fill="url(#pl-metal)" />
        <ellipse cx="0" cy="10" rx="50" ry="9" fill="url(#pl-metal)" />
        <ellipse cx="0" cy="28" rx="50" ry="9" fill="url(#pl-metal)" />
      </g>
    </svg>
  );
}

function Dome() {
  return (
    <svg viewBox="0 0 120 120" className="h-full w-full">
      <defs>
        <radialGradient id="dome-grad" cx="50%" cy="35%" r="65%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="55%" stopColor="#999999" />
          <stop offset="100%" stopColor="#1f1f1f" />
        </radialGradient>
      </defs>
      <path d="M 8 68 A 52 52 0 0 1 112 68 Z" fill="url(#dome-grad)" />
      <line x1="8" y1="68" x2="112" y2="68" stroke="#3a3a3a" strokeWidth="1" />
    </svg>
  );
}

function GlowingSquare() {
  return (
    <svg viewBox="0 0 120 120" className="h-full w-full">
      <defs>
        <radialGradient id="gl-grad" cx="50%" cy="50%" r="55%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="45%" stopColor="#a8a8a8" />
          <stop offset="100%" stopColor="#2a2a2a" />
        </radialGradient>
      </defs>
      <rect x="10" y="10" width="100" height="100" rx="4" fill="url(#gl-grad)" stroke="#1a1a1a" strokeWidth="1" />
    </svg>
  );
}