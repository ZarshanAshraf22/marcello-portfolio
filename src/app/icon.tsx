import { ImageResponse } from "next/og";

export const runtime = "edge";

export const size = {
  width: 32,
  height: 32,
};

export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#151515",
          color: "#cecbc8",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "Geist, system-ui, sans-serif",
          fontSize: 20,
          fontWeight: 400,
          letterSpacing: "-0.02em",
          lineHeight: 1,
        }}
      >
        M
      </div>
    ),
    { ...size },
  );
}
