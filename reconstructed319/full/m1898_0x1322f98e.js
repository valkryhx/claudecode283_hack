// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  ct
} from "B:/~BUN/root/chunk-bkfncj77.js";
import {
  le
} from "B:/~BUN/root/chunk-begxsvab.js";
import {
  lO
} from "B:/~BUN/root/chunk-78494p3w.js";
import {
  bue
} from "B:/~BUN/root/chunk-ccfjrhpx.js";
import {
  Rle
} from "B:/~BUN/root/chunk-1yt8p22k.js";
import {
  TLe
} from "B:/~BUN/root/chunk-3c4vnaj4.js";
var ayn = 48;

function mga(n) {
  if (!TLe()) return null;
  let e = n.get(bue);
  return {
    subscribe: (r) => e.onRunningScriptsChange(r),
    getSnapshot: () => e.runningScripts(lO)
  }
}

function Ijo(n, e) {
  if (!le()) return null;
  let r = [...n.values()].sort((t, u) => i(t) - i(u) || t.evalId - u.evalId),
    a = r[0] === void 0 ? 0 : i(r[0]),
    o = r.map((t) => ({
      phase: i(t),
      text: Rle(t.description, e)
    })).filter(({
      text: t
    }) => t !== ""),
    s = o[0];
  if (s === void 0 || s.phase !== a) return null;
  let l = ct(s.text, ayn);
  return o.length === 1 ? l : `${l} +${o.length-1} more`
}

function Mjo(n) {
  if (!le()) return !1;
  return [...n.values()].some((e) => i(e) === 0)
}

function i(n) {
  return n.late ? 2 : n.startedAt === void 0 ? 1 : 0
}
export {
  ayn,
  mga,
  Ijo,
  Mjo
};
