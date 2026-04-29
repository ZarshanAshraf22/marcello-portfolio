import type { Metadata } from "next";
import InsightCard from "@/app/components/InsightCard";
import { insights } from "@/data/insights";

export const metadata: Metadata = {
  title: "Insights",
  description:
    "Clear thinking, practical wisdom, and frameworks to help founders navigate complexity, build clarity, and scale with confidence.",
};

export default function InsightsArchive() {
  const posts = insights.slice(0, 6);

  return (
    <main className="min-h-screen w-full bg-[#cecbc8] pt-16 pb-20 md:pt-20 md:pb-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12 xl:px-14 2xl:px-0">
        <div className="lg:grid md:grid-cols-[1fr_350px] gap-8 items-end mb-20">
            {/* Left: big heading */}
              <h2 className="font-geist sm:w-3/5 text-[40px] md:text-[44px] xl:text-[56px] font-normal leading-[1.1] tracking-tight">
                  <span>(Insights)</span>
                  <span>
                      {" "}Thought,That Shape Better Decisions.
                  </span>
              </h2>

            {/* Right: button + subtext */}
            <div className="flex flex-col-reverse sm:w-1/2 lg:w-auto lg:flex-col items-start 
                lg:items-end gap-6 lg:mt-0 mt-6">
                <p className="font-geist text-[22px] leading-[1.65] opacity-60">
                  Clear thinking, practical wisdom, and frameworks to help
                  founders navigate complexity, build clarity, and scale with
                  confidence.
                </p>
            </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {posts.map((post) => (
            <InsightCard key={post.slug} post={post} />
          ))}
        </div>
      </div>
    </main>
  );
}
