#!/usr/bin/env node
import { main } from "../src/index.js";
main(process.argv).catch(e => { console.error(e?.stack || e); process.exit(1); })
