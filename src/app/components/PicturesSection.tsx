"use client";

import Image from "next/image";
import FadeInUp from "./FadeInUp";

const images = [
  "/media/slide-1.png",
  "/media/slide-2.png",
  "/media/slide-3.png",
  "/media/slide-4.png",
  "/media/slide-5.png",
];

export default function PicturesSection() {
  const duplicatedImages = [...images, ...images];

  return (
    <section className="mx-auto max-w-7xl pt-20 pb-0 px-5 sm:px-8 lg:px-12 xl:px-14 2xl:px-0">
      {/* HEADING */}
      <div className="mb-12">
        <FadeInUp delay={0}>
          <div className="overflow-hidden">
            <h2
              className="font-geist text-[32px] sm:text-[40px] md:text-[44px] xl:text-[56px] max-w-xl font-normal leading-[1.1] tracking-tight"
              style={{
                transform: "translateY(100%)",
                animation: "clipReveal 0.9s cubic-bezier(0.16, 1, 0.3, 1) forwards",
                animationDelay: "0s",
              }}
            >
              (Pictures)
            </h2>
          </div>

          <div className="overflow-hidden">
            <h2
              className="font-geist text-[32px] sm:text-[40px] md:text-[44px] xl:text-[56px] max-w-xl font-normal leading-[1.1] tracking-tight"
              style={{
                transform: "translateY(100%)",
                animation: "clipReveal 0.9s cubic-bezier(0.16, 1, 0.3, 1) forwards",
                animationDelay: "0.08s",
              }}
            >
              Behind the Strategy
            </h2>
          </div>
        </FadeInUp>

        <FadeInUp delay={0.1}>
          <div className="overflow-hidden mt-3">
            <p
              className="font-geist text-[16px] md:text-[18px] leading-[1.65] "
              style={{
                transform: "translateY(100%)",
                animation: "clipReveal 0.9s cubic-bezier(0.16, 1, 0.3, 1) forwards",
                animationDelay: "0.16s",
              }}
            >
              Where complexity becomes clarity.
            </p>
          </div>
        </FadeInUp>
      </div>

      {/* SLIDER */}
      <div className="w-full overflow-hidden py-6 pb-12"
      style={{ maskImage: 'linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 12.5%, rgb(0, 0, 0) 87.5%, rgba(0, 0, 0, 0) 100%)',
            }}
      >
        <div className="slider-track">
          {duplicatedImages.map((src, index) => (
            <div
              key={index}
              className="flex-shrink-0 overflow-hidden rounded-2xl mr-5"
            >
              <Image
                src={src}
                alt={`picture-${index}`}
                width={280}
                height={320}
                className="object-cover w-[140px] h-[140px] sm:w-[180px] sm:h-[240px] md:w-[280px] md:h-[320px]"
                unoptimized
              />
            </div>
          ))}
        </div>
      </div>

      {/* STYLES */}
      <style>{`
        @keyframes scroll-left {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }

        @keyframes clipReveal {
          from { transform: translateY(100%); }
          to   { transform: translateY(0); }
        }

        .slider-track {
          display: flex;
          width: fit-content;
          will-change: transform;
          animation: scroll-left 30s linear infinite;
        }

        .slider-track:hover {
          animation-play-state: paused;
        }

        @media (max-width: 768px) {
          .slider-track {
            animation: scroll-left 20s linear infinite;
          }
        }
      `}</style>
    </section>
  );
}