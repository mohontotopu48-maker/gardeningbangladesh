import Image from "next/image";

export function HeaderBanner() {
  return (
    <section className="relative w-full overflow-hidden bg-brand-green-deep">
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, #ffffff 1.5px, transparent 1.5px)",
          backgroundSize: "28px 28px",
        }}
      />
      <div className="relative mx-auto max-w-7xl px-4 py-4 sm:py-6">
        <div className="relative overflow-hidden rounded-2xl shadow-brand-lg ring-1 ring-white/10">
          <Image
            src="/header-banner.png"
            alt="Gardening Bangladesh — সবুজে বাঁচি প্রতিদিন"
            width={550}
            height={606}
            priority
            className="w-full h-auto object-cover"
            sizes="100vw"
          />
        </div>
      </div>
    </section>
  );
}
