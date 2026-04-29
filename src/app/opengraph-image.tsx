import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt =
  "Marcello Genovese — Product Executive · Technology Strategist · Advisor";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#cecbc8",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          padding: "0 80px",
          fontFamily: "Geist, system-ui, sans-serif",
        }}
      >
        <div
          style={{
            fontSize: 88,
            color: "#151515",
            letterSpacing: "-0.02em",
            lineHeight: 1.05,
            fontWeight: 400,
          }}
        >
          Marcello Genovese
        </div>
        <div
          style={{
            width: 120,
            height: 1,
            background: "#151515",
            opacity: 0.3,
            marginTop: 40,
            marginBottom: 32,
          }}
        />
        <div
          style={{
            fontSize: 32,
            color: "#2a2825",
            lineHeight: 1.3,
            letterSpacing: "-0.01em",
          }}
        >
          Product Executive · Technology Strategist · Advisor
        </div>
      </div>
    ),
    { ...size },
  );
}
