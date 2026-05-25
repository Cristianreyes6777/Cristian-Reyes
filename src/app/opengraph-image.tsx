import { ImageResponse } from "next/og";

export const dynamic = "force-dynamic";
export const alt = "Cristian Reyes, CEO & Founder, Crypted";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

async function loadGoogleFont(family: string, text: string, italic = false) {
  const ital = italic ? ":ital@1" : "";
  const url = `https://fonts.googleapis.com/css2?family=${family.replace(/ /g, "+")}${ital}&text=${encodeURIComponent(text)}`;
  const css = await (await fetch(url)).text();
  const match = css.match(/src: url\((.+?)\) format\('(opentype|truetype|woff2?)'\)/);
  if (!match) throw new Error(`Could not parse font CSS for ${family}`);
  const response = await fetch(match[1]);
  if (!response.ok) throw new Error(`Failed to load ${family}`);
  return await response.arrayBuffer();
}

export default async function OpengraphImage() {
  const line1 = "Cristian Reyes,";
  const line2 = "building Crypted.";
  const sub = "CEO & Founder, Crypted · Scientist, Pfizer";
  const eyebrow = "CRISTIANREYES.IO";

  const sansChars = `${line1}${sub}${eyebrow}`;
  const serifChars = line2;

  let inter: ArrayBuffer | null = null;
  let serif: ArrayBuffer | null = null;
  try {
    [inter, serif] = await Promise.all([
      loadGoogleFont("Inter", sansChars),
      loadGoogleFont("Instrument Serif", serifChars, true),
    ]);
  } catch {
    // Fall through to system fonts if Google Fonts unreachable at build time.
  }

  const fonts = [] as { name: string; data: ArrayBuffer; style?: "normal" | "italic"; weight?: 400 | 500 | 600 | 700 }[];
  if (inter) fonts.push({ name: "Inter", data: inter, style: "normal", weight: 500 });
  if (serif) fonts.push({ name: "Instrument Serif", data: serif, style: "italic", weight: 400 });

  return new ImageResponse(
    (
      <div
        style={{
          background: "#0A0A0B",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px 88px",
          color: "#EDEDED",
          fontFamily: "Inter, sans-serif",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: -120,
            left: -120,
            width: 620,
            height: 620,
            background: "radial-gradient(closest-side, rgba(124,92,255,0.55), rgba(124,92,255,0))",
            filter: "blur(80px)",
            display: "flex",
          }}
        />
        <div
          style={{
            fontSize: 22,
            color: "#5A5A62",
            letterSpacing: "0.18em",
            display: "flex",
            zIndex: 1,
          }}
        >
          {eyebrow}
        </div>

        <div style={{ display: "flex", flexDirection: "column", zIndex: 1 }}>
          <div
            style={{
              fontSize: 116,
              lineHeight: 0.95,
              letterSpacing: "-0.035em",
              color: "#EDEDED",
              display: "flex",
              fontWeight: 500,
            }}
          >
            {line1}
          </div>
          <div
            style={{
              fontSize: 116,
              lineHeight: 1.05,
              letterSpacing: "-0.035em",
              color: "#EDEDED",
              fontFamily: "Instrument Serif, Georgia, serif",
              fontStyle: "italic",
              display: "flex",
              marginTop: 6,
            }}
          >
            {line2}
          </div>
        </div>

        <div
          style={{
            fontSize: 28,
            color: "#8A8A92",
            display: "flex",
            zIndex: 1,
          }}
        >
          {sub}
        </div>
      </div>
    ),
    { ...size, fonts: fonts.length ? fonts : undefined },
  );
}
