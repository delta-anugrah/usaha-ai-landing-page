import { capabilities, capabilitiesSection, products } from "@/content";
import { capabilityIcons } from "./icons";
import { Section } from "./section";

export function Capabilities() {
  return (
    <Section id="ai" title={capabilitiesSection.title} intro={capabilitiesSection.intro}>
      <div className="grid gap-px overflow-hidden rounded-2xl border border-line bg-line md:grid-cols-3">
        {capabilities.map((c) => {
          const Icon = capabilityIcons[c.id];
          const usedIn = products.filter((p) => p.capabilities.includes(c.id));
          return (
            <div key={c.id} className="flex flex-col bg-bg p-7 sm:p-8">
              <Icon size={22} strokeWidth={1.6} className="text-accent" aria-hidden />
              <h3 className="mt-6 text-lg font-semibold tracking-tight text-fg">{c.title}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-muted">{c.description}</p>
              {usedIn.length > 0 && (
                <p className="mt-auto pt-8 text-sm text-muted">
                  Used in{" "}
                  <span className="text-fg">{usedIn.map((p) => p.name).join(", ")}</span>
                </p>
              )}
            </div>
          );
        })}
      </div>
    </Section>
  );
}
