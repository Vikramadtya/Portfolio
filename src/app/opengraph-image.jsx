import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Vikramaditya Singh - Developer Portfolio";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#18181b", // zinc-900
          color: "white",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "20px",
          }}
        >
          <div
            style={{
              width: "120px",
              height: "120px",
              backgroundColor: "#fff",
              borderRadius: "24px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: "20px",
            }}
          >
            <span style={{ fontSize: "64px", color: "#000" }}>🚀</span>
          </div>
          <h1
            style={{
              fontSize: "80px",
              fontWeight: "900",
              margin: 0,
              letterSpacing: "-0.05em",
            }}
          >
            Vikramaditya Singh
          </h1>
          <p
            style={{
              fontSize: "36px",
              margin: 0,
              color: "#a1a1aa", // zinc-400
            }}
          >
            Senior Member of Technical Staff @ Oracle
          </p>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
