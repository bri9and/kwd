import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Kiely Web Design - Modern Websites for Local Businesses";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: "100%",
          backgroundColor: "#00311b",
          fontFamily: "Georgia, serif",
          position: "relative",
        }}
      >
        {/* Background pattern */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "radial-gradient(ellipse at top right, rgba(0,66,37,0.8) 0%, transparent 60%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "radial-gradient(ellipse at bottom left, rgba(200,90,26,0.15) 0%, transparent 50%)",
          }}
        />

        {/* Content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
            zIndex: 10,
          }}
        >
          {/* Logo */}
          <div
            style={{
              fontSize: 72,
              fontWeight: 700,
              color: "#fafaf5",
              letterSpacing: "-2px",
              marginBottom: 16,
            }}
          >
            KWD
          </div>

          {/* Divider */}
          <div
            style={{
              width: 80,
              height: 3,
              background: "linear-gradient(90deg, transparent, #c85a1a, transparent)",
              marginBottom: 24,
            }}
          />

          {/* Tagline */}
          <div
            style={{
              fontSize: 36,
              fontWeight: 700,
              color: "#fafaf5",
              textAlign: "center",
              lineHeight: 1.2,
              marginBottom: 16,
            }}
          >
            Modern Websites for
          </div>
          <div
            style={{
              fontSize: 36,
              fontWeight: 700,
              color: "#e07020",
              textAlign: "center",
              lineHeight: 1.2,
              marginBottom: 32,
            }}
          >
            Local Businesses
          </div>

          {/* Subtitle */}
          <div
            style={{
              fontSize: 18,
              color: "rgba(250,250,245,0.5)",
              textAlign: "center",
            }}
          >
            Hand-crafted web design &bull; Drone photography &bull; Pittsburgh, PA
          </div>
        </div>

        {/* Bottom accent */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: 4,
            background: "linear-gradient(90deg, #004225, #c85a1a, #004225)",
          }}
        />
      </div>
    ),
    {
      ...size,
    }
  );
}
