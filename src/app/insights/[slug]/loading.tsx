export default function InsightDetailLoading() {
  return (
    <main className="min-h-screen w-full bg-[#cecbc8]">
      <article className="mx-auto max-w-7xl pt-20 pb-0 px-5 sm:px-8 lg:px-12 xl:px-14 2xl:px-0">
        {/* Back link bar */}
        <div className="mb-6 h-4 w-40 animate-pulse rounded bg-[#bcb8b4]" />

        {/* Title — three stacked bars, decreasing widths */}
        <div className="mb-8 space-y-4">
          <div className="h-12 w-[90%] animate-pulse rounded bg-[#bcb8b4]" />
          <div className="h-12 w-[75%] animate-pulse rounded bg-[#bcb8b4]" />
          <div className="h-12 w-[55%] animate-pulse rounded bg-[#bcb8b4]" />
        </div>

        {/* Hero image */}
        <div className="relative mb-10 aspect-[16/9] w-full animate-pulse overflow-hidden rounded-xl bg-[#bcb8b4]" />

        {/* Body — arrow column + content column matching the real layout */}
        <div className="grid grid-cols-[80px_1fr] md:grid-cols-[120px_1fr] gap-6">
          <div />

          <div className="space-y-10">
            {/* Paragraph block 1 */}
            <div className="space-y-3">
              <div className="h-4 w-full animate-pulse rounded bg-[#bcb8b4]" />
              <div className="h-4 w-[96%] animate-pulse rounded bg-[#bcb8b4]" />
              <div className="h-4 w-[88%] animate-pulse rounded bg-[#bcb8b4]" />
              <div className="h-4 w-[70%] animate-pulse rounded bg-[#bcb8b4]" />
            </div>

            {/* Paragraph block 2 */}
            <div className="space-y-3">
              <div className="h-4 w-[92%] animate-pulse rounded bg-[#bcb8b4]" />
              <div className="h-4 w-full animate-pulse rounded bg-[#bcb8b4]" />
              <div className="h-4 w-[78%] animate-pulse rounded bg-[#bcb8b4]" />
            </div>

            {/* Paragraph block 3 */}
            <div className="space-y-3">
              <div className="h-4 w-[85%] animate-pulse rounded bg-[#bcb8b4]" />
              <div className="h-4 w-full animate-pulse rounded bg-[#bcb8b4]" />
              <div className="h-4 w-[64%] animate-pulse rounded bg-[#bcb8b4]" />
            </div>

            {/* Paragraph block 4 */}
            <div className="space-y-3">
              <div className="h-4 w-full animate-pulse rounded bg-[#bcb8b4]" />
              <div className="h-4 w-[82%] animate-pulse rounded bg-[#bcb8b4]" />
              <div className="h-4 w-[56%] animate-pulse rounded bg-[#bcb8b4]" />
            </div>
          </div>
        </div>
      </article>
    </main>
  );
}
