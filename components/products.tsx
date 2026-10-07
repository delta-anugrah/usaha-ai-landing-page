import { Aperture, ArrowUpRight, Link2 } from "lucide-react";
import { capabilities, products, productsSection, type Product } from "@/content";
import { productIcons } from "./icons";
import { Section } from "./section";

function ProductCard({ product }: { product: Product }) {
  const Icon = productIcons[product.id] ?? Aperture;
  const partner = product.worksWith
    ? products.find((p) => p.id === product.worksWith)
    : undefined;
  const tags = [
    ...product.capabilities.map((c) => capabilities.find((x) => x.id === c)!.title),
    ...(product.tag ? [product.tag] : []),
  ];

  return (
    <article className="group relative flex flex-col rounded-2xl border border-line bg-surface/60 p-6 transition duration-300 hover:-translate-y-0.5 hover:border-line-strong hover:shadow-[0_0_48px_-16px_rgb(61_219_192/0.35)] motion-reduce:transition-none motion-reduce:hover:translate-y-0 sm:p-7">
      <div className="flex items-start justify-between gap-4">
        <span className="grid size-10 place-items-center rounded-xl border border-line bg-bg text-accent">
          <Icon size={19} strokeWidth={1.75} aria-hidden />
        </span>
        {product.internal && (
          <span className="rounded-full border border-line-strong px-2.5 py-1 text-xs text-muted">
            Internal platform
          </span>
        )}
      </div>

      <h3 className="mt-6 text-xl font-semibold tracking-tight text-fg">
        {product.url ? (
          <a
            href={product.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 hover:text-accent"
          >
            {product.name}
            <ArrowUpRight size={16} aria-hidden />
            <span className="sr-only">(opens in a new tab)</span>
          </a>
        ) : (
          product.name
        )}
      </h3>
      <p className="mt-1 text-sm text-accent/90">{product.category}</p>
      <p className="mt-4 text-[15px] leading-relaxed text-muted">{product.summary}</p>

      {product.highlights && (
        <ul className="mt-4 space-y-2 text-[15px] leading-snug text-muted">
          {product.highlights.map((h) => (
            <li key={h} className="flex gap-3">
              <span aria-hidden className="mt-[0.55em] size-1 shrink-0 rounded-full bg-accent/70" />
              {h}
            </li>
          ))}
        </ul>
      )}

      <div className="mt-auto flex flex-wrap items-center gap-2 pt-6">
        {tags.map((t) => (
          <span
            key={t}
            className="rounded-md bg-white/[0.04] px-2 py-1 text-xs text-muted ring-1 ring-inset ring-line"
          >
            {t}
          </span>
        ))}
        {partner && (
          <span className="inline-flex items-center gap-1.5 text-xs text-muted">
            <Link2 size={13} aria-hidden />
            Works with {partner.name}
          </span>
        )}
      </div>
    </article>
  );
}

export function Products() {
  return (
    <Section id="products" title={productsSection.title} intro={productsSection.intro}>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </Section>
  );
}
