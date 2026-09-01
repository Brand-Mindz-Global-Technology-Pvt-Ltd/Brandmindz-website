import { readFile } from "node:fs/promises";
import path from "node:path";

const assets = {
  "white-logo": {
    source: ["assets", "Footer", "media kit", "b1.webp"],
    fileName: "Brand-Mindz-White-Logo.webp",
    contentType: "image/webp",
  },
  "white-logo-transparent": {
    source: ["assets", "Footer", "media kit", "b2.png"],
    fileName: "Brand-Mindz-White-Logo-Transparent.png",
    contentType: "image/png",
  },
  "black-logo": {
    source: ["assets", "Footer", "media kit", "b3.webp"],
    fileName: "Brand-Mindz-Black-Logo.webp",
    contentType: "image/webp",
  },
  "black-logo-transparent": {
    source: ["assets", "Footer", "media kit", "b4.png"],
    fileName: "Brand-Mindz-Black-Logo-Transparent.png",
    contentType: "image/png",
  },
  "founder-profile": {
    source: ["output", "pdf", "Brand-Mindz-Founder-Profile.pdf"],
    fileName: "Brand-Mindz-Founder-Profile.pdf",
    contentType: "application/pdf",
  },
  "founder-formal": {
    source: ["assets", "media-kit", "founder", "founder-formal.webp"],
    fileName: "R-Vasanth-Kumar-Formal-Portrait.webp",
    contentType: "image/webp",
  },
  "founder-office": {
    source: ["assets", "media-kit", "founder", "founder-office.webp"],
    fileName: "R-Vasanth-Kumar-Office-Portrait.webp",
    contentType: "image/webp",
  },
  "founder-speaking": {
    source: ["assets", "media-kit", "founder", "founder-speaking.webp"],
    fileName: "R-Vasanth-Kumar-Speaking.webp",
    contentType: "image/webp",
  },
  "founder-podium": {
    source: ["assets", "media-kit", "founder", "founder-podium.webp"],
    fileName: "R-Vasanth-Kumar-Keynote.webp",
    contentType: "image/webp",
  },
} as const;

type AssetKey = keyof typeof assets;

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ asset: string }> }
) {
  const { asset } = await params;

  if (!(asset in assets)) {
    return new Response("Asset not found", { status: 404 });
  }

  const selectedAsset = assets[asset as AssetKey];
  const filePath = path.join(process.cwd(), ...selectedAsset.source);
  const file = await readFile(filePath);

  return new Response(file, {
    headers: {
      "Content-Type": selectedAsset.contentType,
      "Content-Disposition": `attachment; filename="${selectedAsset.fileName}"`,
      "Cache-Control": "public, max-age=86400",
      "X-Content-Type-Options": "nosniff",
    },
  });
}
