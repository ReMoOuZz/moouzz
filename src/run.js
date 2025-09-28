import { spawn } from "node:child_process";
export function run(cmd, args = [], opts = {}) {
  return new Promise((res, rej) => {
    const p = spawn(cmd, args, { stdio: "inherit", shell: process.platform === "win32", ...opts });
    p.on("close", c => c === 0 ? res() : rej(new Error(`${cmd} existed ${c}`)));
    p.on("error", rej);
  });
}
