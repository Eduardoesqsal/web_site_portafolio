import { ImageResponse } from "next/og";

export const alt = "Eduardo Esquivel Salaszar — Desarrollador de software";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        position: "relative",
        overflow: "hidden",
        background: "#101412",
        color: "white",
        padding: "76px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div
        style={{
          position: "absolute",
          width: 600,
          height: 600,
          borderRadius: 999,
          background: "rgba(16,185,129,.18)",
          filter: "blur(100px)",
          right: -160,
          top: -240,
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          opacity: 0.1,
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.35) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.35) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />
      <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", zIndex: 1 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div
            style={{
              width: 58,
              height: 58,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 16,
              background: "#fff",
              color: "#101412",
              fontWeight: 800,
              fontSize: 18,
            }}
          >
            EES
          </div>
          <div style={{ fontSize: 24, fontWeight: 700 }}>Eduardo Esquivel Salaszar</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", color: "#6ee7b7", fontSize: 19, fontWeight: 700, letterSpacing: 2 }}>
            DESARROLLADOR DE SOFTWARE
          </div>
          <div style={{ marginTop: 22, maxWidth: 900, fontSize: 72, fontWeight: 700, lineHeight: 0.98, letterSpacing: -4 }}>
            Software para el mundo real.
          </div>
        </div>
      </div>
    </div>,
    size,
  );
}
