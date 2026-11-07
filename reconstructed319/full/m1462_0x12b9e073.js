// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  nf
} from "B:/~BUN/root/chunk-n8cnxns2.js";
import {
  WOn
} from "B:/~BUN/root/chunk-cxcakgnv.js";
import {
  rge
} from "B:/~BUN/root/chunk-f75fgfra.js";
import {
  u0t
} from "B:/~BUN/root/chunk-yscb2r3d.js";
import {
  posix as _
} from "path";
var l = "/mnt/user-data/working",
  e3o = _.join(l, rge),
  uat = 32,
  Qhe = 524288,
  hwn = 2097152,
  t3o = 200,
  a = 237,
  p = 4,
  Ule = "CLAUDE.md",
  zBe = "rules",
  fat = "output-styles",
  o4t = "settings.json",
  e = ".md",
  E = /[\p{Cc}\p{Cf}\p{Co}\p{Cn}\p{Zl}\p{Zp}\p{Default_Ignorable_Code_Point}\u2800\u{1D159}\u2024-\u2026\u2044\u2215\u2216\u2236\u2571\u2572\u27CB\u27CD\u29F5\u29F8\u29F9\u02D0\u05C3\u0589\uA789\uFE13\uFE52\uFE55\uFE68\uFF0E\uFF0F\uFF1A\uFF3C\uFF61\u3002]|(?!\u0020)\p{Zs}/u,
  c = /^\p{M}/u;

function d(t) {
  return t !== "" && t === t.trim() && Buffer.byteLength(t, "utf8") <= a && !t.startsWith(".") && !u0t(t) && !t.includes("\\") && !E.test(t) && !c.test(t) && !t.endsWith("~") && !t.endsWith(".swp") && !t.endsWith(".tmp")
}

function r(t) {
  return t.length > e.length && t.endsWith(e)
}

function gwn(t) {
  return WOn(t)
}

function M(t) {
  return r(gwn(t))
}

function GBe(t) {
  if (t.length > t3o || !nf(t) || t.normalize("NFC") !== t) return null;
  let n = t.split("/");
  if (!n.every(d)) return null;
  let [i, ...o] = n;
  if (o.length === 0) return i === Ule ? "claude_md" : null;
  let u = o.slice(0, -1),
    s = o.at(-1) ?? "";
  if (!r(s) || u.some(M)) return null;
  if (o.length > p) return null;
  return i === zBe ? "rule" : i === fat ? "output_style" : null
}

function s4t(t) {
  return GBe(t) !== null
}

function oRt(t) {
  let n = GBe(t);
  return n === null ? null : {
    destination: t,
    kind: n
  }
}
export {
  e3o,
  uat,
  Qhe,
  hwn,
  t3o,
  Ule,
  zBe,
  fat,
  o4t,
  gwn,
  GBe,
  s4t,
  oRt
};
