export default function Loading() {
  return (
    <main className="min-h-screen w-full bg-[#cecbc8] flex items-center justify-center">
      <p
        aria-live="polite"
        className="font-geist text-base text-[#6b6866] animate-pulse"
      >
        Loading…
      </p>
    </main>
  );
}
