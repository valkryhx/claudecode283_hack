// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.303
import {
  Qi,
  En,
  E,
  yb,
  CJe,
  r5
} from "B:/~BUN/root/chunk-hb6x4e3n.js";
async function n() {
  try {
    return await yb("tengu_violin_strad")
  } catch {
    return !1
  }
}

function t() {
  try {
    return E("tengu_violin_strad", !1)
  } catch {
    return !1
  }
}
async function Cx() {
  try {
    return await yb("tengu_violin_wood")
  } catch {
    return !1
  }
}

function nm() {
  try {
    return E("tengu_violin_wood", !1)
  } catch {
    return !1
  }
}
var a = "tengu_violin_maple";
async function tHt() {
  try {
    return await Cx() || await CJe(a)
  } catch {
    return !1
  }
}

function rm() {
  try {
    return nm() || E(a, !1)
  } catch {
    return !1
  }
}
async function BH() {
  return await Cx() && await n()
}

function XU() {
  return nm() && t()
}

function zme(e) {
  return e ? null : "flag_off"
}

function Qj(e) {
  return zme(e) === null
}

function han() {
  try {
    let {
      value: e,
      source: o
    } = En("tengu_violin_wood", !1);
    return e === !1 && r5(o)
  } catch {
    return !1
  }
}

function yan() {
  return nm() && WJs("tengu_violin_wood")
}
async function $Oo() {
  let e = performance.now();
  return await Qi().catch(() => null), Math.round(performance.now() - e)
}

function WJs(e) {
  try {
    return r5(En(e, !1).source)
  } catch {
    return !1
  }
}
async function zJs() {
  try {
    return await yb("tengu_violin_amati")
  } catch {
    return !1
  }
}

function JMr() {
  try {
    return E("tengu_violin_amati", !1)
  } catch {
    return !1
  }
}

function _an() {
  return nm() && JMr()
}
async function nHt() {
  let [e, o] = await Promise.all([Cx(), zJs()]);
  return e && o
}
export {
  Cx,
  nm,
  tHt,
  rm,
  BH,
  XU,
  zme,
  Qj,
  han,
  yan,
  $Oo,
  WJs,
  zJs,
  JMr,
  _an,
  nHt
};
