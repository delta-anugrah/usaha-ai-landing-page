"use client";

import { motion, useReducedMotion } from "framer-motion";
import { capabilities, products } from "@/content";

// Compact viewBox with large labels, so text stays readable when the
// diagram shrinks to phone width.
const W = 520;
const H = 420;
const CAP = { x: 2, w: 176, h: 46 };
const PROD = { x: 352, w: 144, h: 42 };

function spread(count: number, top: number, bottom: number) {
  if (count === 1) return [(top + bottom) / 2];
  const step = (bottom - top) / (count - 1);
  return Array.from({ length: count }, (_, i) => top + i * step);
}

/**
 * Hero diagram: AI capabilities on the left, products on the right, one line
 * per "product uses capability". Built from content.ts, so it stays honest
 * when products change.
 */
export function ProductGraph({ caption }: { caption: string }) {
  const reduce = useReducedMotion();

  const shown = products.filter((p) => p.capabilities.length > 0 || p.worksWith);
  const capY = spread(capabilities.length, 80, H - 80);
  const prodY = spread(shown.length, 44, H - 44);
  const capCenter = new Map(capabilities.map((c, i) => [c.id, capY[i]]));
  const prodCenter = new Map(shown.map((p, i) => [p.id, prodY[i]]));

  const edges = shown.flatMap((p) =>
    p.capabilities.map((c) => {
      const y1 = capCenter.get(c)!;
      const y2 = prodCenter.get(p.id)!;
      const x1 = CAP.x + CAP.w;
      const x2 = PROD.x;
      const mid = (x1 + x2) / 2;
      return {
        id: `${c}-${p.id}`,
        d: `M${x1},${y1} C${mid},${y1} ${mid},${y2} ${x2},${y2}`,
      };
    }),
  );

  const links = shown
    .filter((p) => p.worksWith && prodCenter.has(p.worksWith))
    .map((p) => {
      const x = PROD.x + PROD.w;
      const y1 = prodCenter.get(p.worksWith!)!;
      const y2 = prodCenter.get(p.id)!;
      return {
        id: `${p.worksWith}-${p.id}`,
        d: `M${x},${y1} C${x + 22},${y1} ${x + 22},${y2} ${x},${y2}`,
      };
    });

  const t = (delay: number) =>
    reduce ? { duration: 0 } : { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] as const };

  const summary = shown
    .map((p) => {
      const uses = p.capabilities
        .map((c) => capabilities.find((x) => x.id === c)?.title)
        .join(" and ");
      const name = p.worksWith
        ? `${p.name} works with ${products.find((x) => x.id === p.worksWith)?.name}`
        : p.name;
      return uses ? `${name} uses ${uses}` : name;
    })
    .join(". ");

  return (
    <figure className="relative">
      <svg
        viewBox={`0 0 ${W} ${H}`}
        className="h-auto w-full"
        role="img"
        aria-label={`${caption}. ${summary}.`}
      >
        <defs>
          <linearGradient id="edge-g" x1="0" x2="1" y1="0" y2="0">
            <stop offset="0" stopColor="var(--accent)" stopOpacity="0.7" />
            <stop offset="1" stopColor="var(--accent-2)" stopOpacity="0.35" />
          </linearGradient>
        </defs>

        {edges.map((e, i) => (
          <g key={e.id}>
            <motion.path
              id={`edge-${e.id}`}
              d={e.d}
              fill="none"
              stroke="url(#edge-g)"
              strokeWidth="1.25"
              initial={{ pathLength: reduce ? 1 : 0 }}
              animate={{ pathLength: 1 }}
              transition={t(0.35 + i * 0.08)}
            />
            {!reduce && (
              <circle r="2.5" fill="var(--accent)">
                <animateMotion
                  dur="3.2s"
                  begin={`${1.4 + i * 0.55}s`}
                  repeatCount="indefinite"
                  keyPoints="0;1"
                  keyTimes="0;1"
                  calcMode="linear"
                >
                  <mpath href={`#edge-${e.id}`} />
                </animateMotion>
              </circle>
            )}
          </g>
        ))}

        {links.map((l, i) => (
          <motion.path
            key={l.id}
            d={l.d}
            fill="none"
            stroke="var(--line-strong)"
            strokeWidth="1.25"
            strokeDasharray="3 4"
            initial={{ opacity: reduce ? 1 : 0 }}
            animate={{ opacity: 1 }}
            transition={t(1 + i * 0.1)}
          />
        ))}

        {capabilities.map((c, i) => (
          <motion.g
            key={c.id}
            initial={{ opacity: reduce ? 1 : 0 }}
            animate={{ opacity: 1 }}
            transition={t(i * 0.08)}
          >
            <rect
              x={CAP.x}
              y={capY[i] - CAP.h / 2}
              width={CAP.w}
              height={CAP.h}
              rx="12"
              fill="var(--surface)"
              stroke="var(--accent)"
              strokeOpacity="0.45"
            />
            <circle cx={CAP.x + 20} cy={capY[i]} r="3.5" fill="var(--accent)" />
            <text
              x={CAP.x + 36}
              y={capY[i]}
              dominantBaseline="central"
              fill="var(--fg)"
              fontSize="17"
              fontWeight="500"
            >
              {c.title}
            </text>
          </motion.g>
        ))}

        {shown.map((p, i) => (
          <motion.g
            key={p.id}
            initial={{ opacity: reduce ? 1 : 0 }}
            animate={{ opacity: 1 }}
            transition={t(0.8 + i * 0.07)}
          >
            <rect
              x={PROD.x}
              y={prodY[i] - PROD.h / 2}
              width={PROD.w}
              height={PROD.h}
              rx="10"
              fill="var(--bg)"
              stroke="var(--line-strong)"
            />
            <text
              x={PROD.x + 15}
              y={prodY[i]}
              dominantBaseline="central"
              fill="var(--fg)"
              fontSize="17"
            >
              {p.name}
            </text>
          </motion.g>
        ))}
      </svg>
      <figcaption className="mt-4 text-sm text-muted">{caption}</figcaption>
    </figure>
  );
}
