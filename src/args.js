export function parseArgs(args) {
  const a = args.slice(2), cmd = a.shift(), flags = {}, pos = [];
  while (a.length) { const x = a.shift()
    if (x?.startsWith("--")) flags[x.replace(/^--/, "")] = true; else pos.push(x)
  }
  return { cmd, pos, flags };
}
