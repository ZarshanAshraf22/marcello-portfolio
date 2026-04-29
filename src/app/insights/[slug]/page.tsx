import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getInsightBySlug, insights } from "@/data/insights";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return insights.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getInsightBySlug(slug);
  if (!post) return { title: "Insight not found" };
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      type: "article",
      title: post.title,
      description: post.excerpt,
      url: `/insights/${post.slug}`,
      images: [
        {
          url: post.image,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [post.image],
    },
  };
}

export default async function InsightDetail({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const post = getInsightBySlug(slug);
  if (!post) notFound();

  return (
    <main className="min-h-screen w-full bg-[#cecbc8]">
      <article className="mx-auto max-w-7xl pt-20 pb-15 px-5 sm:px-8 lg:px-12 xl:px-14 2xl:px-0">
        <Link
          href="/insights"
          className="font-satoshi mb-6 inline-block text-sm text-[#6b6866] transition-colors hover:text-[#151515]"
        >
          ← Back to Insights
        </Link>

        <h1 className="font-geist mb-8 text-42 sm:text-[46px] md:text-[52px] lg:text-[62px] xl:text-[70px] font-normal leading-[1.15] tracking-tight text-[#151515] ">
          {post.title}
        </h1>

        <div className="relative mb-10 aspect-[16/9] w-full overflow-hidden rounded-xl bg-[#151515]">
          <Image
            src={post.image}
            alt={post.title}
            fill
            sizes="(max-width: 900px) 100vw, 900px"
            className="object-contain invert"
            priority
          />
        </div>
       
        <div className="flex flex-col ">
          {post.content.map((block, i) => {
            // Show arrow on every heading, and on the very first block if it's a paragraph
            const showArrow =
              block.type === "heading" || (i === 0 && block.type === "paragraph");

            return (
              <div
                key={i}
                className="grid grid-cols-[60px_1fr] md:grid-cols-[120px_1fr] gap-4 md:gap-6"
              >
                {/* Arrow column */}
                <div
                  aria-hidden
                  className="font-satoshi text-[2.5rem] md:text-[3rem] xl:text-[4rem] leading-none text-[#151515]"
                >
                  {showArrow ? "→" : ""}
                </div>

                {/* Content column */}
                <div className="font-geist text-[#2a2825]">
                  {block.type === "heading" ? (
                    <h2 className="sm:text-[40px] md:text-[44px] xl:text-[56px] font-medium leading-[1.2] text-[#151515] mb-4">
                      {block.text}
                    </h2>
                  ) : (
                    <p className="font-satoshi text-[22px] leading-[1.8] md:text-lg mb-12">
                      {block.text}
                    </p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </article>
    </main>
  );
}
