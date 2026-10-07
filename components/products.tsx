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
    <article className="glass group flex flex-col rounded-[28px] p-6 transition duration-300 hover:-translate-y-1 hover:brightness-110 motion-reduce:transition-none motion-reduce:hover:translate-y-0 sm:p-7">
      <div className="flex items-start justify-between gap-4">
        <span className="glass grid size-11 place-items-center rounded-2xl text-accent">
          <Icon size={19} strokeWidth={1.75} aria-hidden />
        </span>
        {product.internal && (
          <span className="glass rounded-full px-3 py-1 text-xs text-fg/80">
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
            className="rounded-full bg-white/[0.06] px-2.5 py-1 text-xs text-muted ring-1 ring-inset ring-white/10"
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
  const customerProducts = products.filter((p) => !p.internal);
  const internalPlatforms = products.filter((p) => p.internal);
  return (
    <Section id="products" title={productsSection.title} intro={productsSection.intro}>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {customerProducts.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>

      {internalPlatforms.length > 0 && (
        <>
          <h3 className="mt-16 text-lg font-semibold tracking-tight text-fg">
            {productsSection.internalTitle}
          </h3>
          <p className="mt-2 max-w-2xl text-[15px] leading-relaxed text-muted">
            {productsSection.internalIntro}
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {internalPlatforms.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </>
      )}
    </Section>
  );
}
