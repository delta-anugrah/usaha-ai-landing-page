import { hero } from "@/content";
import { ProductGraph } from "./product-graph";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div aria-hidden className="bg-grid pointer-events-none absolute inset-0" />
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-[-12rem] h-[36rem] w-[56rem] -translate-x-1/2 rounded-full opacity-30 blur-[120px]"
        style={{
          background:
            "radial-gradient(closest-side, rgb(74 163 255 / 0.55), rgb(85 208 240 / 0.25), transparent)",
        }}
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-16 px-5 pb-24 pt-36 sm:px-8 sm:pt-44 lg:grid-cols-[1.05fr_1fr] lg:gap-12 lg:pb-32">
        <div>
          <h1 className="max-w-xl text-balance text-[2.75rem] font-semibold leading-[1.02] tracking-[-0.045em] text-fg sm:text-6xl lg:text-[4.25rem]">
            {hero.headline.split(" ").map((word, i) => (
              // Keep hyphenated words like "real-world" on one line.
              <span key={i} className={word.includes("-") ? "whitespace-nowrap" : undefined}>
                {i > 0 && " "}
                {word}
              </span>
            ))}
          </h1>
          <p className="mt-6 max-w-lg text-pretty text-lg leading-relaxed text-muted">
            {hero.subheadline}
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href={hero.primaryCta.href}
              className="glass-tint inline-flex h-12 items-center rounded-full px-7 text-sm font-semibold text-[#04121f] transition-[filter,transform] duration-200 hover:brightness-110 active:scale-[0.97] motion-reduce:active:scale-100"
            >
              {hero.primaryCta.label}
            </a>
            <a
              href={hero.secondaryCta.href}
              className="glass inline-flex h-12 items-center rounded-full px-7 text-sm font-medium text-fg transition-[filter,transform] duration-200 hover:brightness-125 active:scale-[0.97] motion-reduce:active:scale-100"
            >
              {hero.secondaryCta.label}
            </a>
          </div>
        </div>

        <div className="mx-auto w-full max-w-xl lg:max-w-none">
          <ProductGraph caption={hero.diagramCaption} />
        </div>
      </div>
    </section>
  );
}
