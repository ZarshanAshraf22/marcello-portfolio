"use client";

import Link from "next/link";
import type { Insight } from "@/data/insights";

type Props = {
  post: Insight;
  /** When provided (slider context), card uses dynamic pixel sizing for image and text. */
  slideWidth?: number;
  onClick?: (e: React.MouseEvent) => void;
};

export default function InsightCard({ post, slideWidth, onClick }: Props) {
  const useDynamic = typeof slideWidth === "number" && slideWidth > 0;

  const wrapperStyle = useDynamic
    ? { width: slideWidth, flexShrink: 0 }
    : undefined;
  const imageHeightStyle = useDynamic
    ? { height: Math.floor((slideWidth as number) * 0.88) }
    : undefined;
  const titleSizeStyle = useDynamic
    ? {
        fontSize: Math.max(
          13,
          Math.min(22, Math.floor((slideWidth as number) * 0.055)),
        ),
      }
    : undefined;
  const excerptSizeStyle = useDynamic
    ? {
        fontSize: Math.max(
          11,
          Math.min(16, Math.floor((slideWidth as number) * 0.042)),
        ),
      }
    : undefined;

  return (
    <div style={wrapperStyle} className={useDynamic ? "" : "w-full h-full"}>
      <Link
        href={`/insights/${post.slug}`}
        className="block bg-transparent rounded-xl overflow-hidden select-none  transition-[transform,shadow] duration-200"
        draggable={false}
        onClick={onClick}
      >
        {/* Image */}
        <div
          className={`relative rounded-xl border border-black/10 bg-[#c5c2bf] overflow-hidden ${
            useDynamic ? "" : "aspect-[400/352]"
          }`}
          style={imageHeightStyle}
        >
          <img
            src={post.image}
            alt={post.title}
            draggable={false}
            className="absolute inset-0 w-full h-full object-contain p-15"
            onError={(e) => {
              (e.currentTarget as HTMLImageElement).style.display = "none";
            }}
          />
        </div>

        {/* Text */}
        <div className="pt-4 pb-2 flex flex-col gap-1.5 bg-transparent">
          <h3
            className={`font-geist font-medium text-[#2a2825] leading-[1.25] line-clamp-3 ${
              useDynamic ? "" : "text-[20px] md:text-[22px]"
            }`}
            style={titleSizeStyle}
          >
            {post.title}
          </h3>
          <p
            className={`font-satoshi text-[#6b6866] leading-[1.6] line-clamp-2 mt-0.5 ${
              useDynamic ? "" : "text-[14px] md:text-[15px]"
            }`}
            style={excerptSizeStyle}
          >
            {post.excerpt}
          </p>
        </div>
      </Link>
    </div>
  );
}
