// Copy the entry image to the competition output directory.
// The source entry.png sits next to this script; the destination is
// MAKEFUN_OUTPUT_DIR (or /output as a fallback) as entry.png.

import { copyFileSync } from "node:fs";
import { join } from "node:path";

const src = new URL("./entry.png", import.meta.url);
const destDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const dest = join(destDir, "entry.png");

// Copy the PNG byte-for-byte so the judge receives identical bytes.
copyFileSync(src, dest);