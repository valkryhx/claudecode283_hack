// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.303
import {
  En,
  E,
  CJe,
  r5
} from "B:/~BUN/root/chunk-hb6x4e3n.js";
import {
  Cx,
  han,
  yan
} from "B:/~BUN/root/chunk-r4y1700s.js";
var FCe = "tengu_violin_willow";

function _wn() {
  try {
    let {
      value: e,
      source: o
    } = En(FCe, !1);
    return r5(o) ? e === !0 : void 0
  } catch {
    return
  }
}

function DVe() {
  try {
    return E(FCe, !1)
  } catch {
    return !1
  }
}

function LVe() {
  return yan() && _wn() === !0
}

function kLe({
  cloudClient: e
}) {
  if (han()) return "tengu_violin_wood";
  return e && _wn() === !1 ? FCe : void 0
}
async function PKr({
  cloudClient: e
}) {
  try {
    return await Cx() && (!e || await CJe(FCe))
  } catch {
    return !1
  }
}
export {
  FCe,
  _wn,
  DVe,
  LVe,
  kLe,
  PKr
};
