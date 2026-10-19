// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { mc } from "B:/~BUN/root/chunk-nggrknsv.js";
import { pee } from "B:/~BUN/root/chunk-dn8rakwm.js";
import { dLn } from "B:/~BUN/root/chunk-9grc6xh0.js";
import { XWn } from "B:/~BUN/root/chunk-6wyzmyt1.js";
import { posix as r } from "path";
var D = r.dirname(pee),
  l = "/mnt/user-data/working",
  mto = r.join(l, pee),
  t4e = 32,
  $oe = 524288,
  p3t = 2097152,
  gto = 200,
  E = 237,
  a = 4,
  j7 = "CLAUDE.md",
  uAe = "rules",
  n4e = "output-styles",
  nRt = "settings.json",
  e = ".md",
  p = /[\p{Cc}\p{Cf}\p{Co}\p{Cn}\p{Zl}\p{Zp}\p{Default_Ignorable_Code_Point}\u2800\u{1D159}\u2024-\u2026\u2044\u2215\u2216\u2236\u2571\u2572\u27CB\u27CD\u29F5\u29F8\u29F9\u02D0\u05C3\u0589\uA789\uFE13\uFE52\uFE55\uFE68\uFF0E\uFF0F\uFF1A\uFF3C\uFF61\u3002]|(?!\u0020)\p{Zs}/u,
  c = /^\p{M}/u;
function d(t) {
  return t !== "" && t === t.trim() && Buffer.byteLength(t, "utf8") <= E && !t.startsWith(".") && !XWn(t) && !t.includes("\\") && !p.test(t) && !c.test(t) && !t.endsWith("~") && !t.endsWith(".swp") && !t.endsWith(".tmp");
}
function u(t) {
  return t.length > e.length && t.endsWith(e);
}
function f3t(t) {
  return dLn(t);
}
function M(t) {
  return u(f3t(t));
}
function pAe(t) {
  if (t.length > gto || !mc(t) || t.normalize("NFC") !== t) return null;
  let n = t.split("/");
  if (!n.every(d)) return null;
  let [i, ...o] = n;
  if (o.length === 0) return i === j7 ? "claude_md" : null;
  let s = o.slice(0, -1),
    _ = o.at(-1) ?? "";
  if (!u(_) || s.some(M)) return null;
  if (o.length > a) return null;
  return i === uAe ? "rule" : i === n4e ? "output_style" : null;
}
function rRt(t) {
  return pAe(t) !== null;
}
function vst(destination) {
  let kind = pAe(destination);
  return kind === null ? null : {
    destination: destination,
    kind: kind
  };
}
export { mto, t4e, $oe, p3t, gto, j7, uAe, n4e, nRt, f3t, pAe, rRt, vst };