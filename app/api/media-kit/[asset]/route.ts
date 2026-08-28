import { readFile } from "node:fs/promises";
import path from "node:path";

const assets = {
  "white-logo": {
    source: "b1.webp",
    fileName: "Brand-Mindz-White-Logo.webp",
    contentType: "image/webp",
  },
  "white-logo-transparent": {
    source: "b2.png",
    fileName: "Brand-Mindz-White-Logo-Transparent.png",
    contentType: "image/png",
  },
  "black-logo": {
    source: "b3.webp",
    fileName: "Brand-Mindz-Black-Logo.webp",
    contentType: "image/webp",
  },
  "black-logo-transparent": {
    source: "b4.png",
    fileName: "Brand-Mindz-Black-Logo-Transparent.png",
    contentType: "image/png",
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
  const filePath = path.join(
    process.cwd(),
    "assets",
    "Footer",
    "media kit",
    selectedAsset.source
  );
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
