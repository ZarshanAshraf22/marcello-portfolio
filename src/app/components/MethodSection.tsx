"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "DIAGNOSE",
    desc: "I start by understanding what's actually happening, not what the last consultant told you was happening. Root causes, bottlenecks, and missed opportunities.",
    position: "md:top-[0px] md:left-[0px] xl:left-[0px]",
  },
  {
    number: "02",
    title: "DESIGN",
    desc: "A roadmap built around your model, your market, and what you can realistically execute. No frameworks for their own sake.",
    position: "md:top-[160px] md:left-[180px] xl:left-[230px]",
  },
  {
    number: "03",
    title: "BUILD",
    desc: "Execution support across teams, technology, and systems. I stay involved through implementation, not just the slide deck.",
    position: "md:top-[310px] md:left-[360px] xl:left-[460px]",
  },
  {
    number: "04",
    title: "REFINE",
    desc: "Ongoing work to improve what's working and cut what isn't.",
    position: "md:top-[460px] md:left-[540px] xl:left-[690px]",
  },
];

export default function MethodSection() {
  return (
    <section className="w-full bg-[#151515] border-b border-white/10 flex flex-col justify-center sm:h-screen xl:block 
        xl:h-auto pt-10 pb-20 sm:py-0 xl:py-50">
      <div className="xl:mx-auto max-w-7xl block lg:grid grid-cols-1 sm:grid-cols-[60px_1fr] lg:grid-cols-[120px_1fr]
          xl:grid-cols-[234px_1fr] items-start px-5 sm:px-8 lg:px-12 xl:px-14 2xl:px-0">
        {/* Arrow Column */}
        <div className="mb-6 md:mb-0">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-satoshi text-[2.5rem] md:text-[3rem] xl:text-[4rem] text-white/80"
          >
            →
          </motion.div>
        </div>

        {/* Content Column */}
        <div className="flex flex-col ">
          {/* Header */}
          <div className="mb-8 md:mb-12">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="font-geist text-[16px] md:text-[18px] font-normal mb-6 text-[#CECBC8]"
            >
              (Method)
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-geist text-[32px] sm:text-[40px] md:text-[44px] xl:text-[56px] mb-6 md:mb-10 font-normal leading-[1.1] tracking-tight text-[#CECBC8]"
            >
              How Marcello <br className="hidden xl:block" /> Genovese Works
            </motion.h2>
          </div>

          {/* Cards */}
          <div className="relative w-full flex flex-col gap-0 sm:gap-5 md:gap-0 md:h-[640px] xl:h-[75vh] md:block ">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{
                  duration: 0.7,
                  ease: [0.16, 1, 0.3, 1],
                  delay: i * 0.12,
                }}
                className={`
                  w-full sm:w-[160px] lg:w-[230px] xl:w-[250px]
                  ml-0
                  ${i === 0 ? "" : i === 1 ? "sm:ml-[8%]" : i === 2 ? "sm:ml-[16%]" : "sm:ml-[24%]"}
                  md:ml-0
                  md:absolute ${step.position}
                  border-b border-l border-[#CECBC8] rounded-bl-2xl
                  p-5 bg-[#151515]
                `}
              >
                <p className="font-geist text-base text-[#FFFFFF80] mb-1">
                  {step.number}
                </p>
                <h3 className="font-geist text-2xl font-normal uppercase tracking-[0.06em] text-white">
                  {step.title}
                </h3>
                <p className="font-geist text-base font-light leading-[20px] text-[#FFFFFF80] mt-1">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
