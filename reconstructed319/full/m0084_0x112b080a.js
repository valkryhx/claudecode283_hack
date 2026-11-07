// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  c7
} from "B:/~BUN/root/chunk-j6pt0v41.js";
var uM = ["CLAUDE_CODE_USE_BEDROCK", "CLAUDE_CODE_USE_FOUNDRY", "CLAUDE_CODE_USE_ANTHROPIC_AWS", "CLAUDE_CODE_USE_ANTHROPIC_GOOGLE_CLOUD", "CLAUDE_CODE_USE_MANTLE", "CLAUDE_CODE_USE_VERTEX"];
var IAe = ["claude-3-5-haiku", "claude-3-5-sonnet", "claude-3-7-sonnet", "claude-fable-5", "claude-fable-5-1", "claude-haiku-4-5", "claude-haiku-5-5", "claude-mythos-5", "claude-mythos-5-1", "claude-opus-4-0", "claude-opus-4-1", "claude-opus-4-5", "claude-opus-4-6", "claude-opus-4-7", "claude-opus-4-8", "claude-opus-5", "claude-opus-5-5", "claude-sonnet-4-0", "claude-sonnet-4-5", "claude-sonnet-4-6", "claude-sonnet-5", "claude-sonnet-5-5"],
  HJ = ["sonnet", "opus", "haiku", "fable", "best", "sonnet[1m]", "opus[1m]", "fable[1m]", "opusplan"],
  $J = ["sonnet", "opus", "haiku", "fable"];
var ibt = "claude-mythos-preview";

function Mb(e) {
  return HJ.includes(e)
}

function MAe(e) {
  if (Mb(e)) return !0;
  let n = $t(e);
  return n !== e && $t(n) === n && Mb(n)
}

function $t(e) {
  return e.replace(/\[1m\]$/i, "")
}

function AE(e, n) {
  return $t(e).toLowerCase() === $t(n).toLowerCase()
}

function Gn(e) {
  return e.replace(/\[(1|2)m\]/gi, "")
}

function Db(e) {
  return $J.includes(e)
}

function nc(e) {
  let n = e.trim().toLowerCase();
  if (n === "" || /\s/.test(n)) return null;
  n = n.replace(/\[[12]m\]$/, "");
  let s = n.lastIndexOf("/");
  if (s !== -1) n = n.slice(s + 1);
  let o = /^(?:([a-z-]+)\.)?anthropic\.(claude-.*)$/.exec(n);
  if (o) {
    let [, a, l = ""] = o;
    if (a !== void 0 && !c7.includes(a)) return null;
    n = l
  }
  let r = d(n);
  if (!r) return null;
  let t = n.slice(r.base.length);
  if (t !== "" && !/^[-@]/.test(t)) return null;
  let i = {
    family: r.family,
    major: r.major,
    legacyVersionFirst: r.legacyVersionFirst,
    base: r.base
  };
  if (r.minor !== void 0) i.minor = r.minor;
  if (!gFs(t)) i.trailer = t;
  else {
    let a = /(?:-v\d+@|[-@])(\d{8})/.exec(t)?.[1];
    if (a !== void 0) i.date = a
  }
  return i
}

function RBt(e) {
  return e.replace(/(claude-(?:[a-z]+-)?\d{1,2})\.(?=\d)/g, "$1-")
}

function gFs(e) {
  return /^(?:-fast|-latest)?(?:-v\d{1,3}@\d{8}|[-@]\d{8})?(?:-v\d{1,3}(?::\d{1,3})?)?$/.test(e)
}

function u(e) {
  return ["experimental", "internal", "prefixlock", "preview", "prod", "snapshot", "test"].includes(e)
}

function pQi(e) {
  return /^[a-z]{1,24}((?:-[a-z0-9]{1,16}){1,6})(?:\[[12]m\])?$/.exec(e)?.[1]?.split("-").some(u) === !0
}

function mQi(e) {
  return /-v\d+(?::\d+)?$/.test(e)
}

function MR(e) {
  return e !== null && e.trailer === void 0
}

function att(e, n) {
  return e.major - n.major || (e.minor ?? 0) - (n.minor ?? 0)
}

function ABt(e, n) {
  return e.family === n.family && e.legacyVersionFirst === n.legacyVersionFirst && att(e, n) === 0
}

function Y0r(e) {
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
      return
  }
}

function hQi(e, n) {
  if (typeof e !== "string") return !1;
  let s = nc(e),
    o = nc(n);
  if (!MR(s) || !MR(o)) return !1;
  let r = Y0r(s.family),
    t = Y0r(o.family);
  if (r === void 0 || t === void 0) return !1;
  return t >= r && att(o, s) >= 0
}

function d(e) {
  let n = /^claude-([a-z]+)-(\d{1,2})(?!\d)(?:-(\d{1,2})(?!\d))?/.exec(e);
  if (n) {
    let [o, r = "", t = "", i] = n;
    return {
      family: r,
      major: Number(t),
      minor: i === void 0 ? void 0 : Number(i),
      legacyVersionFirst: !1,
      base: o
    }
  }
  let s = /^claude-(\d{1,2})(?!\d)(?:-(\d{1,2})(?!\d))?-([a-z]+)/.exec(e);
  if (s) {
    let [o, r = "", t, i = ""] = s;
    return {
      family: i,
      major: Number(r),
      minor: t === void 0 ? void 0 : Number(t),
      legacyVersionFirst: !0,
      base: o
    }
  }
  return null
}
export {
  IAe,
  HJ,
  $J,
  ibt,
  Mb,
  MAe,
  $t,
  AE,
  Gn,
  Db,
  nc,
  RBt,
  gFs,
  pQi,
  mQi,
  MR,
  att,
  ABt,
  Y0r,
  hQi,
  uM
};
