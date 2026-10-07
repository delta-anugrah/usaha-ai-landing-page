import { palmOil } from "@/content";
import { Section } from "./section";

/** Intake flow at a mill, step by step. Numbered because it is a real sequence. */
export function PalmOil() {
  return (
    <Section id="palm-oil" title={palmOil.title} intro={palmOil.intro}>
      <ol className="glass relative grid rounded-[32px] p-3 sm:p-4 lg:grid-cols-5">
        {palmOil.steps.map((step, i) => (
          <li key={step.title} className="relative flex gap-5 p-4 sm:p-5 lg:flex-col lg:gap-0">
            {/* Connector to the next step: vertical on phones, horizontal on desktop. */}
            {i < palmOil.steps.length - 1 && (
              <span
                aria-hidden
                className="absolute left-[2.15rem] top-16 bottom-[-0.5rem] w-px bg-gradient-to-b from-accent/50 to-white/10 sm:left-[2.4rem] lg:left-16 lg:right-[-1rem] lg:top-[2.4rem] lg:bottom-auto lg:h-px lg:w-auto lg:bg-gradient-to-r"
              />
            )}
            <span className="glass relative grid size-9 shrink-0 place-items-center rounded-full text-sm font-semibold text-accent">
              {i + 1}
            </span>
            <div className="lg:mt-6">
              <span className="text-xs text-muted">{step.product}</span>
              <h3 className="mt-1 text-base font-semibold tracking-tight text-fg">{step.title}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-muted">{step.body}</p>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
