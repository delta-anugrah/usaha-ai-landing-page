import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { hero, site } from "@/content";

// Served as /og.png. A route handler (instead of opengraph-image.tsx) keeps the
// .png extension in the static export, so hosts send the right content type.
export const dynamic = "force-static";

export async function GET() {
  const png = await readFile(join(process.cwd(), "public/logo.png"));
  const logo = `data:image/png;base64,${png.toString("base64")}`;
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
            "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(0,114,220,0.45), rgba(8,9,11,0) 70%), #08090b",
          color: "#eceef1",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18, fontSize: 34, fontWeight: 600 }}>
          {/* eslint-disable-next-line @next/next/no-img-element -- ImageResponse needs a plain img */}
          <img src={logo} width={57} height={35} alt="" />
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
        <div style={{ display: "flex", fontSize: 26, color: "#4aa3ff" }}>{site.domain}</div>
      </div>
    ),
    { width: 1200, height: 630 },
  );
}
