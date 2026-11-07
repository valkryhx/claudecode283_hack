// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  VWn
} from "B:/~BUN/root/chunk-7wn6n2hd.js";
import {
  t
} from "B:/~BUN/root/chunk-2pp12te6.js";
import {
  Ds,
  ZBt
} from "B:/~BUN/root/chunk-3xdsa4p8.js";
import {
  MHe
} from "B:/~BUN/root/chunk-8998nbf3.js";
import {
  PTo,
  TJ
} from "B:/~BUN/root/chunk-0s9zh2h6.js";
import {
  k3,
  ap
} from "B:/~BUN/root/chunk-m749kjym.js";
import {
  mQt
} from "B:/~BUN/root/chunk-3v5ng1y2.js";

function lDn(n) {
  return n !== void 0 && ZBt(n)
}

function cpt(n, r) {
  if (lDn(n)) {
    if (MHe().some((l) => l.toUpperCase() === "BUN_OPTIONS")) return "--install=disable";
    let e = TJ(r, "BUN_OPTIONS"),
      i = r[e],
      o = Ds(mQt(), "BUN_OPTIONS"),
      d = Ds(ap() ?? {}, "BUN_OPTIONS"),
      a = i === void 0 || i === o || o === void 0 && (i === d || !k3(e, i)) && i !== PTo("BUN_OPTIONS"),
      s = o ?? d,
      u = a ? i : s !== void 0 && !VWn("BUN_OPTIONS", s) ? s : void 0;
    return u ? `--install=disable ${u}` : "--install=disable"
  }
  return
}

function Lhs(n, r) {
  for (let e of Object.keys(n))
    if (e.toUpperCase() === "BUN_OPTIONS") delete n[e];
  n.BUN_OPTIONS = r
}

function z6(n, r, e) {
  {
    let i = cpt(n, e);
    if (i === void 0) return;
    if (r[TJ(r, "BUN_OPTIONS")] !== e[TJ(e, "BUN_OPTIONS")]) t(`Plugin ${n} set BUN_OPTIONS for a program it starts; Claude Code replaced it, because programs of Anthropic Directory plugins run with Bun's automatic install off and must ship the packages they import`);
    Lhs(r, i)
  }
}
export {
  lDn,
  cpt,
  Lhs,
  z6
};
