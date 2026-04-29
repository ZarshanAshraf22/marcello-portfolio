"use client";

import Link from "next/link";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to the browser console for debugging.
    // We deliberately do not surface error.message in the UI.
    console.error(error);
  }, [error]);

  return (
    <main className="min-h-screen w-full bg-[#cecbc8] flex items-center justify-center">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12 text-center">
        <p className="font-geist text-[18px] text-[#6b6866]">(Error)</p>
        <h1 className="font-geist mt-6 text-[56px] md:text-[80px] font-normal leading-[1.05] tracking-tight text-[#151515]">
          Something went wrong
        </h1>
        <p className="font-satoshi text-base md:text-lg text-[#2a2825] mt-4 max-w-xl mx-auto">
          An unexpected error occurred. You can try again or head back home.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row sm:items-center sm:justify-center gap-4">
          <button
            type="button"
            onClick={() => reset()}
            className="group font-geist inline-flex items-center justify-center border border-neutral-800 bg-transparent px-5 py-3 text-base font-light tracking-tight text-neutral-900 transition-all duration-300 hover:bg-neutral-900 hover:text-white"
          >
            Try again
            <span
              aria-hidden
              className="ml-2 inline-block transition-transform duration-300 group-hover:translate-x-1"
            >
              →
            </span>
          </button>
          <Link
            href="/"
            className="font-geist inline-flex items-center justify-center px-5 py-3 text-base font-light tracking-tight text-neutral-600 underline underline-offset-4 transition-colors hover:text-neutral-900"
          >
            Back to home
          </Link>
        </div>
      </div>
    </main>
  );
}
