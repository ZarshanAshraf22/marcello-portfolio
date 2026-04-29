import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Marcello Genovese to discuss product, technology, growth, or funding.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen w-full bg-[#cecbc8]">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12 xl:px-14 2xl:px-0 pt-32 pb-24">
        <p className="font-geist text-[18px] text-[#6b6866] mb-6">(Contact)</p>
        <h1 className="font-geist text-[40px] md:text-[56px] font-normal leading-[1.1] tracking-tight text-[#151515]">
          Let&apos;s talk
        </h1>
        <p className="font-satoshi text-base md:text-lg text-[#2a2825] mt-6 max-w-2xl">
          This page is coming soon.
        </p>
      </div>
    </main>
  );
}
