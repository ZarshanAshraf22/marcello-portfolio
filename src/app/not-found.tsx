import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <main className="min-h-screen w-full bg-[#cecbc8] flex items-center justify-center">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12 text-center">
        <p className="font-geist text-[18px] text-[#6b6866]">(404)</p>
        <h1 className="font-geist mt-6 text-[56px] md:text-[80px] font-normal leading-[1.05] tracking-tight text-[#151515]">
          Page not found
        </h1>
        <p className="font-satoshi text-base md:text-lg text-[#2a2825] mt-4 max-w-xl mx-auto">
          The page you&apos;re looking for doesn&apos;t exist or has been
          moved.
        </p>
        <div className="mt-10">
          <Link
            href="/"
            className="font-geist inline-block text-[15px] font-normal tracking-tight text-neutral-900 underline decoration-neutral-400 decoration-1 underline-offset-[6px] transition-colors duration-200 hover:decoration-neutral-900"
          >
            Back to home
          </Link>
        </div>
      </div>
    </main>
  );
}
