import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { parseArgs } from "./args.js";
import { copyRenderDir } from "./render.js";
import { run } from "./run.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT = path.resolve(__dirname, "..");
const TEMPLATES_DIR = path.join(ROOT, "templates");

export async function listTemplates() {
  const m = JSON.parse(await fs.readFile(path.join(TEMPLATES_DIR, "index.json"), "utf8"));
  return m.templates;
}

export async function createProject(id, name, flags = {}) {
  const tpl = (await listTemplates()).find(t => t.id === id);
  if (!tpl) throw new Error(`Unknown template: ${id}`);
  const dest = path.resolve(process.cwd(), name);
  await fs.mkdir(dest, { recursive: true });
  await copyRenderDir(path.join(TEMPLATES_DIR, tpl.path), dest, { APP_NAME: name});
  if (flags.git) { await run("git", ["init"], { cwd: dest }); await run("git", ["add", "."], { cwd: dest }); }
  console.log(`Done. cd ${name}`);
}

export async function main(argv) {
  const { cmd, pos, flags } = parseArgs(argv);
  if (!cmd || cmd === "help") return console.log("Usage: moouzz list | moouzz new <template> <name> [--git] [--no-install]");
  if (cmd === 'list') return (await listTemplates()).forEach(t => console.log(`- ${t.id}\t${t.name}`));
  if (cmd === 'new') return createProject(pos[0], pos[1], flags);
  throw new Error(`Unknown command: ${cmd}`);
}
