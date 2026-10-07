import type { ReactNode } from "react";
import { MapPin } from "lucide-react";
import { about, contact, hero, nav, products, site } from "@/content";
import { Logo } from "./logo";

export function About() {
  return (
    <section id="about" aria-labelledby="about-heading" className="border-t border-line">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 pb-16 pt-24 sm:px-8 sm:pt-32 lg:grid-cols-[1fr_1.6fr] lg:gap-16">
        <div>
          <h2
            id="about-heading"
            className="text-3xl font-semibold tracking-[-0.03em] text-fg sm:text-4xl"
          >
            {about.title}
          </h2>
          <dl className="mt-8 space-y-3 text-sm">
            <div className="flex gap-3">
              <dt className="w-20 text-muted">Based in</dt>
              <dd className="text-fg">{about.location}</dd>
            </div>
            {about.foundedYear && (
              <div className="flex gap-3">
                <dt className="w-20 text-muted">Founded</dt>
                <dd className="text-fg">{about.foundedYear}</dd>
              </div>
            )}
          </dl>
        </div>
        <div className="max-w-2xl space-y-5 text-pretty text-lg leading-relaxed text-muted sm:text-xl sm:leading-relaxed">
          {about.paragraphs.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-5 pb-24 sm:px-8 sm:pb-32">
        <h3 className="text-lg font-semibold tracking-tight text-fg">{about.principlesTitle}</h3>
        <ul className="mt-6 grid gap-4 md:grid-cols-3">
          {about.principles.map((item) => (
            <li key={item.title} className="glass rounded-[28px] p-6 sm:p-7">
              <h4 className="text-base font-semibold tracking-tight text-fg">{item.title}</h4>
              <p className="mt-3 text-[15px] leading-relaxed text-muted">{item.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-heading" className="relative overflow-hidden border-t border-line">
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-[-16rem] left-1/2 h-[28rem] w-[48rem] -translate-x-1/2 rounded-full opacity-25 blur-[120px]"
        style={{
          background:
            "radial-gradient(closest-side, rgb(74 163 255 / 0.6), rgb(85 208 240 / 0.25), transparent)",
        }}
      />
      <div className="relative mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-32">
        <h2
          id="contact-heading"
          className="text-3xl font-semibold tracking-[-0.03em] text-fg sm:text-4xl"
        >
          {contact.title}
        </h2>
        <p className="mt-4 max-w-xl text-lg leading-relaxed text-muted">{contact.intro}</p>

        <div className="glass mt-10 rounded-[32px] p-7 sm:p-10">
          <a
            href={`mailto:${contact.email}`}
            className="inline-block break-all rounded-lg text-4xl font-semibold tracking-[-0.04em] text-fg underline decoration-white/20 decoration-1 underline-offset-[0.2em] transition-colors hover:decoration-accent sm:text-6xl"
          >
            {contact.email}
          </a>
          <p className="mt-6 flex items-center gap-2 text-sm text-muted">
            <MapPin size={16} aria-hidden className="text-accent" />
            {contact.location}
          </p>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  // Static export: the year is set at build time, so redeploy once a year.
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-line text-sm">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:grid-cols-2 sm:px-8 lg:grid-cols-[1.6fr_1fr_1fr_1fr]">
        <div>
          <Logo />
          <p className="mt-4 max-w-xs leading-relaxed text-muted">{hero.headline}.</p>
        </div>
        <FooterColumn title="Products">
          {products.map((p) => (
            <li key={p.id}>
              <a href="#products" className="text-muted transition-colors hover:text-fg">
                {p.name}
              </a>
            </li>
          ))}
        </FooterColumn>
        <FooterColumn title="Company">
          {nav
            .filter((item) => item.href !== "#products")
            .map((item) => (
              <li key={item.href}>
                <a href={item.href} className="text-muted transition-colors hover:text-fg">
                  {item.label}
                </a>
              </li>
            ))}
        </FooterColumn>
        <FooterColumn title="Contact">
          <li>
            <a href={`mailto:${contact.email}`} className="text-muted transition-colors hover:text-fg">
              {contact.email}
            </a>
          </li>
          <li className="text-muted">{contact.location}</li>
        </FooterColumn>
      </div>
      <div className="border-t border-line">
        <p className="mx-auto max-w-6xl px-5 py-6 text-muted sm:px-8">
          © {year} {site.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

function FooterColumn({ title, children }: { title: string; children: ReactNode }) {
  return (
    <nav aria-label={title}>
      <h2 className="font-medium text-fg">{title}</h2>
      <ul className="mt-4 space-y-2.5">{children}</ul>
    </nav>
  );
}
