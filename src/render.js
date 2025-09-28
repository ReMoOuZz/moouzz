import fs from "node:fs/promises";
import path from "node:path";

const BIN = new Set([".png", ".jpg", ".jpeg", ".gif", ".webp", ".ico"]);
const interpolate = (txt, vars) => txt.replace(/\{\{\s*([A-Z0-9_]+)\s*\}\}/g, (_,k) => vars[k] ?? "")

export async function copyRenderDir(src, dest, vars) {
  const entries = await fs.readdir(src, { withFileTypes: true});
  for (const e of entries) {
    const s = path.join(src, e.name)
    const name = e.name.replace(/^__dot__/, ".").replace(/__APP_NAME__/g, vars.APP_NAME);
    const d = path.join(dest, name);
    if (e.isDirectory()) { await fs.mkdir(d, { recursive: true }); await copyRenderDir(s, d, vars); }
    else {
      const ext = path.extname(name).toLowerCase();
      if (BIN.has(ext)) await fs.copyFile(s, d);
      else await fs.writeFile(d, interpolate(await fs.readFile(s, "utf8"), vars), "utf8");
    }
  }
}
