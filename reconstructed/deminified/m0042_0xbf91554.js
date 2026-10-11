// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { YJ } from "B:/~BUN/root/chunk-nkmmqnq7.js";
var bne = ["claude-3-5-haiku", "claude-3-5-sonnet", "claude-3-7-sonnet", "claude-fable-5", "claude-fable-5-1", "claude-haiku-4-5", "claude-mythos-5", "claude-mythos-5-1", "claude-opus-4-0", "claude-opus-4-1", "claude-opus-4-5", "claude-opus-4-6", "claude-opus-4-7", "claude-opus-4-8", "claude-opus-5", "claude-opus-5-5", "claude-sonnet-4-0", "claude-sonnet-4-5", "claude-sonnet-4-6", "claude-sonnet-5"],
  j1 = ["sonnet", "opus", "haiku", "fable", "best", "sonnet[1m]", "opus[1m]", "fable[1m]", "opusplan"],
  fY = ["sonnet", "opus", "haiku", "fable"];
var Fpt = "claude-mythos-preview";
function dg(e) {
  return j1.includes(e);
}
function G5e(e) {
  if (dg(e)) return !0;
  let n = Jt(e);
  return n !== e && Jt(n) === n && dg(n);
}
function Jt(e) {
  return e.replace(/\[1m\]$/i, "");
}
function $x(e, n) {
  return Jt(e).toLowerCase() === Jt(n).toLowerCase();
}
function Ln(e) {
  return e.replace(/\[(1|2)m\]/gi, "");
}
function L_(e) {
  return fY.includes(e);
}
function Cf(e) {
  let n = e.trim().toLowerCase();
  if (n === "" || /\s/.test(n)) return null;
  n = n.replace(/\[[12]m\]$/, "");
  let s = n.lastIndexOf("/");
  if (s !== -1) n = n.slice(s + 1);
  let t = /^(?:([a-z-]+)\.)?anthropic\.(claude-.*)$/.exec(n);
  if (t) {
    let [, a, u = ""] = t;
    if (a !== void 0 && !YJ.includes(a)) return null;
    n = u;
  }
  let r = d(n);
  if (!r) return null;
  let o = n.slice(r.base.length);
  if (o !== "" && !/^[-@]/.test(o)) return null;
  let i = {
    family: r.family,
    major: r.major,
    legacyVersionFirst: r.legacyVersionFirst,
    base: r.base
  };
  if (r.minor !== void 0) i.minor = r.minor;
  if (!WBr(o)) i.trailer = o;else {
    let a = /(?:-v\d+@|[-@])(\d{8})/.exec(o)?.[1];
    if (a !== void 0) i.date = a;
  }
  return i;
}
function WBr(e) {
  return /^(?:-fast|-latest)?(?:-v\d{1,3}@\d{8}|[-@]\d{8})?(?:-v\d{1,3}(?::\d{1,3})?)?$/.test(e);
}
function DHo(e) {
  return /-v\d+(?::\d+)?$/.test(e);
}
function HN(e) {
  return e !== null && e.trailer === void 0;
}
function V3n(e, n) {
  return e.major - n.major || (e.minor ?? 0) - (n.minor ?? 0);
}
function V5e(e, n) {
  return e.family === n.family && e.legacyVersionFirst === n.legacyVersionFirst && V3n(e, n) === 0;
}
function l(e) {
  switch (e) {
    case "haiku":
      return 0;
    case "sonnet":
      return 1;
    case "opus":
      return 2;
    case "fable":
    case "mythos":
      return 3;
    default:
      return;
  }
}
function LHo(e, n) {
  if (typeof e !== "string") return !1;
  let s = Cf(e),
    t = Cf(n);
  if (!HN(s) || !HN(t)) return !1;
  let r = l(s.family),
    o = l(t.family);
  if (r === void 0 || o === void 0) return !1;
  return o >= r && V3n(t, s) >= 0;
}
function d(e) {
  let n = /^claude-([a-z]+)-(\d{1,2})(?!\d)(?:-(\d{1,2})(?!\d))?/.exec(e);
  if (n) {
    let [base, family = "", o = "", i] = n;
    return {
      family: family,
      major: Number(o),
      minor: i === void 0 ? void 0 : Number(i),
      legacyVersionFirst: !1,
      base: base
    };
  }
  let s = /^claude-(\d{1,2})(?!\d)(?:-(\d{1,2})(?!\d))?-([a-z]+)/.exec(e);
  if (s) {
    let [base_2, r = "", o, family_2 = ""] = s;
    return {
      family: family_2,
      major: Number(r),
      minor: o === void 0 ? void 0 : Number(o),
      legacyVersionFirst: !0,
      base: base_2
    };
  }
  return null;
}
export { bne, j1, fY, Fpt, dg, G5e, Jt, $x, Ln, L_, Cf, WBr, DHo, HN, V3n, V5e, LHo };