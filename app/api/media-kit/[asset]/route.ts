import { readFile } from "node:fs/promises";
import path from "node:path";

const assets = {
  "white-logo": { fileName: "Brand-Mindz-White-Logo.webp", contentType: "image/webp" },
  "white-logo-transparent": { fileName: "Brand-Mindz-White-Logo-Transparent.png", contentType: "image/png" },
  "black-logo": { fileName: "Brand-Mindz-Black-Logo.webp", contentType: "image/webp" },
  "black-logo-transparent": { fileName: "Brand-Mindz-Black-Logo-Transparent.png", contentType: "image/png" },
  "founder-profile": { fileName: "Brand-Mindz-Founder-Profile.pdf", contentType: "application/pdf" },
  "founder-formal": { fileName: "R-Vasanth-Kumar-Formal-Portrait.webp", contentType: "image/webp" },
  "founder-office": { fileName: "R-Vasanth-Kumar-Office-Portrait.webp", contentType: "image/webp" },
  "founder-speaking": { fileName: "R-Vasanth-Kumar-Speaking.webp", contentType: "image/webp" },
  "founder-podium": { fileName: "R-Vasanth-Kumar-Keynote.webp", contentType: "image/webp" },
} as const;

const assetFiles = {
  "white-logo": path.join(/*turbopackIgnore: true*/ process.cwd(), "assets", "Footer", "media kit", "b1.webp"),
  "white-logo-transparent": path.join(/*turbopackIgnore: true*/ process.cwd(), "assets", "Footer", "media kit", "b2.png"),
  "black-logo": path.join(/*turbopackIgnore: true*/ process.cwd(), "assets", "Footer", "media kit", "b3.webp"),
  "black-logo-transparent": path.join(/*turbopackIgnore: true*/ process.cwd(), "assets", "Footer", "media kit", "b4.png"),
  "founder-profile": path.join(/*turbopackIgnore: true*/ process.cwd(), "output", "pdf", "Brand-Mindz-Founder-Profile.pdf"),
  "founder-formal": path.join(/*turbopackIgnore: true*/ process.cwd(), "assets", "media-kit", "founder", "founder-formal.webp"),
  "founder-office": path.join(/*turbopackIgnore: true*/ process.cwd(), "assets", "media-kit", "founder", "founder-office.webp"),
  "founder-speaking": path.join(/*turbopackIgnore: true*/ process.cwd(), "assets", "media-kit", "founder", "founder-speaking.webp"),
  "founder-podium": path.join(/*turbopackIgnore: true*/ process.cwd(), "assets", "media-kit", "founder", "founder-podium.webp"),
} as const;

type AssetKey = keyof typeof assets;

export async function GET(_request: Request, { params }: { params: Promise<{ asset: string }> }) {
  const { asset } = await params;
  if (!(asset in assets)) return new Response("Asset not found", { status: 404 });
  const selectedAsset = assets[asset as AssetKey];
  const file = await readFile(assetFiles[asset as AssetKey]);
  return new Response(file, { headers: { "Content-Type": selectedAsset.contentType, "Content-Disposition": `attachment; filename="${selectedAsset.fileName}"`, "Cache-Control": "public, max-age=86400", "X-Content-Type-Options": "nosniff" } });
}
