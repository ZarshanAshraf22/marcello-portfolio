type Section = {
  heading: string | null;
  paragraphs: string[];
};

function parseContent(content: string): Section[] {
  const sections: Section[] = [];
  let current: Section = { heading: null, paragraphs: [] };

  const blocks = content
    .split(/\n\n+/)
    .map((b) => b.trim())
    .filter(Boolean);

  for (const block of blocks) {
    if (block.startsWith("## ")) {
      if (current.paragraphs.length || current.heading) {
        sections.push(current);
      }
      current = { heading: block.slice(3).trim(), paragraphs: [] };
    } else {
      current.paragraphs.push(block);
    }
  }

  if (current.paragraphs.length || current.heading) {
    sections.push(current);
  }

  return sections;
}

export default function BlogContent({ content }: { content: string }) {
  const sections = parseContent(content);
  return (
    <div className="flex flex-col gap-14 md:gap-20">
      {sections.map((section, i) => (
        <SectionBlock key={i} section={section} index={i} />
      ))}
    </div>
  );
}

function SectionBlock({
  section,
  index,
}: {
  section: Section;
  index: number;
}) {
  return (
    <section className="grid grid-cols-[28px_1fr] md:grid-cols-[56px_1fr] gap-x-4 md:gap-x-6">
      <span
        aria-hidden
        className="font-geist text-[1.25rem] md:text-[1.5rem] leading-none text-white/35 mt-1 md:mt-[6px] select-none"
      >
        →
      </span>
      <div className="min-w-0">
        {section.heading && (
          <h2
            className={`font-geist text-[26px] sm:text-[30px] md:text-[34px] font-normal leading-[1.2] tracking-tight text-white mb-5 md:mb-6 ${
              index === 0 ? "mt-0" : "mt-2"
            }`}
          >
            {section.heading}
          </h2>
        )}
        <div className="flex flex-col gap-5 md:gap-6">
          {section.paragraphs.map((p, i) => (
            <p
              key={i}
              className="font-satoshi text-[1.0625rem] md:text-[1.125rem] leading-[1.75] text-white/70"
            >
              {p}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
