export default function AboutSection() {
  return (
    <section className="relative w-full" id="about">
      <div className="mx-auto max-w-7xl grid grid-cols-1 items-start gap-y-6 md:grid-cols-[117px_1fr] md:gap-0 py-20 px-5 sm:px-8 lg:px-12 xl:px-14 2xl:px-0">
        <div>
          <span
            aria-hidden
            className="block font-satoshi text-[4rem] font-medium leading-none text-[#151515]"
          >
            →
          </span>
        </div>

        <div>
          <p className="font-geist mb-6 text-[18px] font-normal text-[#151515]">
            (About Marcello Genovese)
          </p>

          <h2
            className="font-geist text-[40px] xl:text-7xl mb-10 font-normal leading-[1.4] xl:leading-[1.1] tracking-tight text-[#aba9a5]"
          >
            I&apos;ve spent the past decade building digital platforms across
            Europe and advising early-stage companies on product, technology,
            and growth.
          </h2>

          <p className="font-geist mb-12 text-3xl xl:text-[42px] font-light leading-[42px] xl:leading-[59px] text-[#4a4744]">
            My focus areas include product architecture, go-to-market
            execution, and the operational systems that separate companies
            that scale from those that stall. I&apos;ve raised capital, led
            product teams, and learned what actually moves the needle versus
            what just sounds good in a pitch deck.
          </p>

          <div className="flex flex-wrap items-start gap-4">
            <StatCard value="8+" label={"Years\nBuilding\nProducts"} />
            <StatCard value="10M+" label="Raised" />
            <StatCard value="3" label={"Companies\nScaled"} />
          </div>
        </div>
      </div>
    </section>
  );
}

function StatCard({ value, label }: { value: string; label: string }) {
  return (
    <div className="inline-flex w-fit items-center gap-8 rounded-[0.875rem] border border-black/15 bg-transparent px-5 py-[0.875rem]">
      <span className="font-geist text-[42px] font-medium leading-none tracking-tight text-[#15151580]">
        {value}
      </span>
      <span
        className="font-geist text-lg font-light leading-[1.35] tracking-tight text-[#151515B2]"
        style={{ whiteSpace: "pre-line" }}
      >
        {label}
      </span>
    </div>
  );
}
