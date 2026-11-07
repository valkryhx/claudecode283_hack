// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { td } from "B:/~BUN/root/chunk-j05gjqgd.js";
import { Pci } from "B:/~BUN/root/chunk-ydr79y0q.js";
var n = "<!-- dataviz-callout -->",
  i = () => "",
  r;
function Sni(t) {
  i = t;
}
async function s_n() {
  let {
    SKILL_MD: SKILL_MD
  } = await import("B:/~BUN/root/chunk-n8mmavn5.js");
  return r = Pci(td(SKILL_MD).content.trimStart().replace(n, () => i())), r;
}
function wni() {
  return r;
}
export { Sni, s_n, wni };