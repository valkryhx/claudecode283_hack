// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { Lg, ia, x, Uu } from "B:/~BUN/root/chunk-gf53qpk6.js";
import { a } from "B:/~BUN/root/chunk-nkmmqnq7.js";
var t = "tengu_violin_pegbox";
function n() {
  return a.CLAUDE_CODE_ENTRYPOINT === "remote_desktop";
}
async function i() {
  try {
    return await Uu(t);
  } catch {
    return !1;
  }
}
function l() {
  try {
    return x(t, !1);
  } catch {
    return !1;
  }
}
async function u() {
  try {
    return await Uu("tengu_violin_strad");
  } catch {
    return !1;
  }
}
function s() {
  try {
    return x("tengu_violin_strad", !1);
  } catch {
    return !1;
  }
}
async function jd() {
  try {
    return (await Uu("tengu_violin_wood")) && (!n() || (await i()));
  } catch {
    return !1;
  }
}
function ts() {
  try {
    return x("tengu_violin_wood", !1) && (!n() || l());
  } catch {
    return !1;
  }
}
async function d1() {
  return (await jd()) && (await u());
}
function v6() {
  return ts() && s();
}
function k6() {
  try {
    let {
      value: value,
      source: source
    } = ia("tengu_violin_wood", !1);
    return value === !1 && r(source);
  } catch {
    return !1;
  }
}
function r(e) {
  switch (e) {
    case "payload":
    case "override":
    case "disabled":
      return !0;
    case "fallback":
      return Lg();
    case "disk":
      return !1;
  }
}
function UDr(e) {
  try {
    let {
      value: value_2,
      source: source_2
    } = ia(e, !1);
    return value_2 === !1 && r(source_2);
  } catch {
    return !1;
  }
}
function c(e) {
  return r(ia(e, !1).source);
}
function C6o(e) {
  try {
    return c(e) && (e !== "tengu_violin_wood" || !n() || c(t));
  } catch {
    return !1;
  }
}
async function T2o() {
  try {
    return await Uu("tengu_violin_amati");
  } catch {
    return !1;
  }
}
function ZGn() {
  try {
    return x("tengu_violin_amati", !1);
  } catch {
    return !1;
  }
}
function oNt() {
  return ts() && ZGn();
}
async function rdt() {
  let [e, o] = await Promise.all([jd(), T2o()]);
  return e && o;
}
export { jd, ts, d1, v6, k6, UDr, C6o, T2o, ZGn, oNt, rdt };