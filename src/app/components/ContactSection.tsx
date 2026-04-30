import Image from "next/image";
import Link from "next/link";
import { blurDataURL } from "@/lib/imageUtils";
import FadeInUp from "./FadeInUp";

export default function ContactSection() {
  return (
    <section className="w-full bg-[#cecbc8] px-5 sm:px-8 lg:px-12 xl:px-14 2xl:px-0 py-20 sm:py-20 pt-0 md:pt-0" id="contact">
      <div className="mx-auto max-w-7xl">

        {/* Dark card with rounded corners */}
        <FadeInUp delay={0} duration={0.8} amount={0.1}>
        <div className="relative overflow-hidden rounded-[1.5rem] bg-[#141414] min-h-[100vh] sm:min-h-[420px] md:min-h-[520px]">

          {/* Person image — positioned on right side, fills card height */}
          <div className="absolute right-0 bottom-0 sm:bottom-auto top-auto sm:top-0 h-full w-[100%] sm:w-[55%] md:w-[60%]">
            <Image
              src="/media/contactBanner.webp"
              alt="Marcello Genovese"
              fill
              sizes="(max-width: 768px) 100vw, 52vw"
              className="object-cover object-[center_15%] hidden sm:block"
              priority
              placeholder="blur"
              blurDataURL={blurDataURL()}
            />

            <Image
              src="/media/contactBanner_mobile.webp"
              alt="Marcello Genovese"
              fill
              sizes="100%"
              className="object-contain object-bottom block sm:hidden"
              priority
              placeholder="blur"
              blurDataURL={blurDataURL()}
            />
            {/* Left-side gradient fade so image blends into dark bg */}
            <div
              className="absolute inset-0 hidden sm:block"
              style={{
                background:
                  "linear-gradient(to right, #141414 0%, #141414 8%, transparent 45%)",
              }}
            />
          </div>

          {/* Text content — left side, sits above image via z-index */}
          <div className="relative z-10 flex h-full flex-col justify-center px-5 sm:px-10 py-14 lg:px-16
            md:py-20 max-w-[600px]">
            <h2 className="font-geist text-[32px] sm:text-[40px] md:text-[44px] xl:text-[56px] font-normal leading-[1.1] tracking-tight text-[#CECBC8]">
              Work With
              <br />
              Marcello Genovese
            </h2>

            <p
              className="font-geist text-[20px] sm:text-[22px] md:text-[28px] xl:text-[32px] mt-5 font-light leading-[1.2] text-[#CECBC8]"
            >
              If you&apos;re working through a product problem, a growth
              question, or preparing for your next funding round, I&apos;m
              happy to have a conversation.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center border border-[#CECBC8] bg-transparent px-5 py-2.5 font-geist
                  text-lg font-normal text-[#CECBC8] transition-all duration-200 hover:bg-[#CECBC8] hover:text-[#151515]
                  active:scale-[0.97]"
              >
                Book a Call
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center font-geist text-lg text-[#CECBC8] underline decoration-white/30 decoration-1
                 underline-offset-4 transition-colors duration-200 hover:text-[#CECBC8] hover:decoration-[#CECBC8]"
              >
                Send a Message
              </Link>
            </div>
          </div>

        </div>
        </FadeInUp>
      </div>
    </section>
  );
}