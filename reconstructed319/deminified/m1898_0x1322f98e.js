// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { ct } from "B:/~BUN/root/chunk-bkfncj77.js";
import { le } from "B:/~BUN/root/chunk-begxsvab.js";
import { lO } from "B:/~BUN/root/chunk-78494p3w.js";
import { bue } from "B:/~BUN/root/chunk-ccfjrhpx.js";
import { Rle } from "B:/~BUN/root/chunk-1yt8p22k.js";
import { TLe } from "B:/~BUN/root/chunk-3c4vnaj4.js";
var ayn = 48;
function mga(n) {
  if (!TLe()) return null;
  let e = n.get(bue);
  return {
    subscribe: r => e.onRunningScriptsChange(r),
    getSnapshot: () => e.runningScripts(lO)
  };
}
function Ijo(n, e) {
  if (!le()) return null;
  let r = [...n.values()].sort((itemA, itemB) => i(itemA) - i(itemB) || itemA.evalId - itemB.evalId),
    a = r[0] === void 0 ? 0 : i(r[0]),
    o = r.map(item => ({
      phase: i(item),
      text: Rle(item.description, e)
    })).filter(({
      text: text
    }) => text !== ""),
    s = o[0];
  if (s === void 0 || s.phase !== a) return null;
  let l = ct(s.text, ayn);
  return o.length === 1 ? l : `${l} +${o.length - 1} more`;
}
function Mjo(n) {
  if (!le()) return !1;
  return [...n.values()].some(item => i(item) === 0);
}
function i(n) {
  return n.late ? 2 : n.startedAt === void 0 ? 1 : 0;
}
export { ayn, mga, Ijo, Mjo };