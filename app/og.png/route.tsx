import { ImageResponse } from "next/og";
import { hero, site } from "@/content";

// Served as /og.png. A route handler (instead of opengraph-image.tsx) keeps the
// .png extension in the static export, so hosts send the right content type.
export const dynamic = "force-static";

export function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background:
            "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(61,219,192,0.35), rgba(8,9,11,0) 70%), #08090b",
          color: "#eceef1",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18, fontSize: 34, fontWeight: 600 }}>
          <svg width="44" height="44" viewBox="0 0 32 32">
            <path d="M8 9 L24 9 L16 24 Z" fill="none" stroke="#3ddbc0" strokeWidth="1.6" opacity="0.6" />
            <circle cx="8" cy="9" r="3.4" fill="#3ddbc0" />
            <circle cx="24" cy="9" r="3.4" fill="#45b8f5" />
            <circle cx="16" cy="24" r="3.4" fill="#45b8f5" />
          </svg>
          {site.name}
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div style={{ fontSize: 76, fontWeight: 700, letterSpacing: "-0.04em", lineHeight: 1.05, maxWidth: 900 }}>
            {hero.headline}
          </div>
          <div style={{ fontSize: 30, color: "#9aa1ab", maxWidth: 920, lineHeight: 1.4 }}>
            {hero.subheadline}
          </div>
        </div>
        <div style={{ display: "flex", fontSize: 26, color: "#3ddbc0" }}>{site.domain}</div>
      </div>
    ),
    { width: 1200, height: 630 },
  );
}
