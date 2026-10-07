import type { ReactNode } from "react";

export function Section({
  id,
  title,
  intro,
  children,
}: {
  id: string;
  title: string;
  intro?: string;
  children: ReactNode;
}) {
  const headingId = `${id}-heading`;
  return (
    <section id={id} aria-labelledby={headingId} className="border-t border-line">
      <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-32">
        <div className="max-w-2xl">
          <h2
            id={headingId}
            className="text-3xl font-semibold tracking-[-0.03em] text-fg sm:text-4xl"
          >
            {title}
          </h2>
          {intro && (
            <p className="mt-4 text-pretty text-lg leading-relaxed text-muted">{intro}</p>
          )}
        </div>
        <div className="mt-14">{children}</div>
      </div>
    </section>
  );
}
