// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { ms, pn, v, gk, Gyt, Vy } from "B:/~BUN/root/chunk-1ks9vs37.js";
async function t() {
  try {
    return await gk("tengu_violin_strad");
  } catch {
    return !1;
  }
}
function r() {
  try {
    return v("tengu_violin_strad", !1);
  } catch {
    return !1;
  }
}
async function mO() {
  try {
    return await gk("tengu_violin_wood");
  } catch {
    return !1;
  }
}
function xh() {
  try {
    return v("tengu_violin_wood", !1);
  } catch {
    return !1;
  }
}
var n = "tengu_violin_maple";
async function arn() {
  try {
    return (await mO()) || (await Gyt(n));
  } catch {
    return !1;
  }
}
function vg() {
  try {
    return xh() || v(n, !1);
  } catch {
    return !1;
  }
}
async function yz() {
  return (await mO()) && (await t());
}
function oV() {
  return xh() && r();
}
function tRe(e) {
  return e ? null : "flag_off";
}
function o4(e) {
  return tRe(e) === null;
}
function xQe() {
  try {
    let {
      value: value,
      source: source
    } = pn("tengu_violin_wood", !1);
    return value === !1 && Vy(source);
  } catch {
    return !1;
  }
}
function XCs() {
  return xQe() && i(n);
}
function k$n() {
  return xh() && Hca("tengu_violin_wood");
}
async function F_o() {
  let e = performance.now();
  return await ms().catch(() => null), Math.round(performance.now() - e);
}
function i(e) {
  try {
    let {
      value: value_2,
      source: source_2
    } = pn(e, !1);
    return value_2 === !1 && Vy(source_2);
  } catch {
    return !1;
  }
}
function Hca(e) {
  try {
    return Vy(pn(e, !1).source);
  } catch {
    return !1;
  }
}
async function $ca() {
  try {
    return await gk("tengu_violin_amati");
  } catch {
    return !1;
  }
}
function H_o() {
  try {
    return v("tengu_violin_amati", !1);
  } catch {
    return !1;
  }
}
function v$n() {
  return xh() && H_o();
}
async function lrn() {
  let [e, o] = await Promise.all([mO(), $ca()]);
  return e && o;
}
export { mO, xh, arn, vg, yz, oV, tRe, o4, xQe, XCs, k$n, F_o, Hca, $ca, H_o, v$n, lrn };