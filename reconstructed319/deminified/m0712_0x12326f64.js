// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { x } from "B:/~BUN/root/chunk-mwfggkjt.js";
import { hM } from "B:/~BUN/root/chunk-3xdsa4p8.js";
import { qg } from "B:/~BUN/root/chunk-m749kjym.js";
function gQn() {
  if (x() !== "windows" || !process.stdin.isTTY) return;
  try {
    process.stdin.setRawMode(!0), process.stdin.setRawMode(!1);
  } catch {}
}
function yQn(o) {
  {
    let t = e => e.toUpperCase() === hM;
    for (let e of Object.keys(o).filter(t)) delete o[e];
    let r = qg();
    for (let e of Object.keys(r).filter(t)) o[e] = r[e];
  }
}
export { gQn, yQn };