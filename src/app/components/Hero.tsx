import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="heroBanner relative w-full bg-[#cecbc8]">
     
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12 xl:px-14 2xl:px-0">

        {/* ── Title + Subtitle ── */}
        <div className="titleContent pt-14 pb-16 sm:pb-5 sm:pt-16 sm:pb-6 md:pt-20 md:pb-8">
          <h1 className="titleText font-geist font-medium tracking-tight text-neutral-950">
            Marcello Genovese
          </h1>
          <p className="subTitleText font-geist mt-4 sm:mt-2">
            Product Executive . Technology Strategist . Advisor
          </p>
        </div>

        {/* ── Hero Image ── */}
        <div className="imageContent pb-12 sm:pb-14 md:pb-16 lg:pb-20">
         
          <div className="relative w-full overflow-hidden rounded-[14px] shadow-2xl shadow-neutral-900/10">

            {/* Aspect ratio sizer */}
            <div className="h-[110vh] sm:h-[auto] sm:pb-[75%] md:pb-[56.25%] lg:pb-[43.75%]" />

            {/* Desktop Image */}
            <Image
              src="/media/hero-image.png"
              alt="Marcello Genovese"
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 1280px"
              className="object-cover object-top hidden sm:block"
              priority
            />

            {/* Mobile Image */}
            <Image
              src="/media/hero-mobile.webp"
              alt="Marcello Genovese"
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 1280px"
              className="object-cover object-center block sm:hidden"
              priority
            />

            {/*
              GRADIENT DIRECTION:
              Mobile:  top-down dark  → text sits at TOP of image
              Desktop: bottom-up dark → text sits at BOTTOM of image
            */}
            <div className="pointer-events-none absolute inset-0
              bg-gradient-to-b from-neutral-900/80 via-neutral-900/25 to-transparent
              md:bg-gradient-to-t md:from-neutral-900/80 md:via-neutral-900/20 md:to-transparent"
            />

            {/*
              TEXT POSITION:
              Mobile:  top-left  (matches gradient at top)
              Desktop: bottom-left (matches gradient at bottom)
            */}
            <div className="
              absolute
              top-35 left-5 right-5
              sm:top-6 sm:left-6 sm:right-6
              md:top-auto md:bottom-10 md:left-10 md:right-auto md:max-w-[60%]
              lg:bottom-12 lg:left-12 lg:max-w-[52%]
            ">
              <p className="font-geist text-[28px] sm:text-[24px]] leading-[1.1] sm:leading-[1.6] text-[#CECBC8]
                sm:text-base md:text-lg lg:text-xl">
                I work with founders and leadership teams to build products
                that work, systems that scale, and businesses that last.
              </p>

              {/* Buttons */}
              <div className="mt-10 sm:mt-4 inline-grid sm:flex flex-col gap-3
                sm:flex-row sm:flex-wrap sm:items-center gap-6 sm:gap-4
                lg:mt-6">
                <Link
                  href="#contact"
                  className="group inline-flex items-center justify-center
                    border border-neutral-300 bg-transparent
                    px-4 py-2.5
                    font-geist text-[18px] font-light tracking-tight text-neutral-200
                    transition-all duration-300
                    hover:border-white hover:bg-white hover:text-neutral-900
                    sm:px-5 sm:py-3 md:text-base"
                >
                  Book a Discovery Call
                  <span
                    aria-hidden
                    className="ml-2 inline-block transition-transform duration-300 group-hover:translate-x-1"
                  >
                    →
                  </span>
                </Link>

                <Link
                  href="#services"
                  className="inline-flex items-center
                    font-geist text-[18px] font-light tracking-tight
                    text-neutral-300 underline underline-offset-4 decoration-neutral-400
                    transition-colors hover:text-white hover:decoration-white
                    md:text-base"
                >
                  View Services
                </Link>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}