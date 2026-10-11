// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.283
import {
  Ne
} from "B:/~BUN/root/chunk-ekrhn4q1.js";
import {
  $o,
  xn,
  nm
} from "B:/~BUN/root/chunk-54p0h65d.js";
var f = /^[a-z]{2,}(?:-[a-z0-9]+){0,4}$/i;

function l(e) {
  return !!e && f.test(e)
}

function bre(e) {
  return l(e) ? e : void 0
}
var m = /^[+-]?(\d+(\.\d*)?|\.\d+)[eE][+-]?\d+$/,
  E = /^[+-]?\d{1,3}([_,\u00A0\u202F ])\d{3}(?:\1\d{3})*$/,
  c = /[_,\u00A0\u202F ]/g;

function N(e) {
  if (e.length <= 32) {
    if (m.test(e)) {
      let n = Number(e);
      return Number.isInteger(n) ? n : NaN
    }
    if (E.test(e)) return parseInt(e.replace(c, ""), 10)
  }
  return
}

function Ic(e) {
  let n = String(e).trim();
  return N(n) ?? parseInt(n, 10)
}

function WD(e) {
  let n = Number(e);
  if (!Number.isNaN(n)) return n;
  let r = String(e).trim();
  return r.length <= 32 && E.test(r) ? parseInt(r.replace(c, ""), 10) : NaN
}
import {
  homedir as R
} from "os";
import {
  basename as D,
  dirname as O,
  join as u,
  resolve as t
} from "path";
var d = [
  ["claude-3-5-sonnet", "VERTEX_REGION_CLAUDE_3_5_SONNET"],
  ["claude-3-7-sonnet", "VERTEX_REGION_CLAUDE_3_7_SONNET"],
  ["claude-sonnet-4-5", "VERTEX_REGION_CLAUDE_4_5_SONNET"],
  ["claude-sonnet-4-6", "VERTEX_REGION_CLAUDE_4_6_SONNET"],
  ["claude-3-5-haiku", "VERTEX_REGION_CLAUDE_3_5_HAIKU"],
  ["claude-fable-5-1", "VERTEX_REGION_CLAUDE_FABLE_5_1"],
  ["claude-haiku-4-5", "VERTEX_REGION_CLAUDE_HAIKU_4_5"],
  ["claude-opus-4-1", "VERTEX_REGION_CLAUDE_4_1_OPUS"],
  ["claude-opus-4-5", "VERTEX_REGION_CLAUDE_4_5_OPUS"],
  ["claude-opus-4-6", "VERTEX_REGION_CLAUDE_4_6_OPUS"],
  ["claude-opus-4-7", "VERTEX_REGION_CLAUDE_4_7_OPUS"],
  ["claude-opus-4-8", "VERTEX_REGION_CLAUDE_4_8_OPUS"],
  ["claude-opus-5-5", "VERTEX_REGION_CLAUDE_5_5_OPUS"],
  ["claude-sonnet-4", "VERTEX_REGION_CLAUDE_4_0_SONNET"],
  ["claude-sonnet-5", "VERTEX_REGION_CLAUDE_5_SONNET"],
  ["claude-fable-5", "VERTEX_REGION_CLAUDE_FABLE_5"],
  ["claude-opus-4", "VERTEX_REGION_CLAUDE_4_0_OPUS"],
  ["claude-opus-5", "VERTEX_REGION_CLAUDE_5_OPUS"]
];

function o() {
  return process.env.CLAUDE_CONFIG_DIR
}

function Dyn(e) {
  let n = e === "CLAUDE_CONFIG_DIR" ? o() : process.env[e];
  if (n === void 0) return;
  let r = String(n).trim();
  return r ? r : void 0
}

function m9n(e) {
  return Ne(process.env[e])
}
var Se = $o(() => (o() ?? u(R(), ".claude")).normalize("NFC"), o);

function Wde(e) {
  return t(Se()) === t(e)
}

function LBe() {
  return u(Se(), "teams")
}

function p() {
  return process.env.CLAUDE_CODE_PROJECT_DIR_NAME
}
var A = /^[A-Za-z0-9_-]{1,64}$/,
  C = /^(?:con|prn|aux|nul|com[0-9]|lpt[0-9])$/i;

function fKr(e) {
  if (!e || !A.test(e) || C.test(e)) return;
  return e
}

function I() {
  return `${o()??""}\x00${p()??""}`
}
var Njt = $o(() => o() ? fKr(p()) : void 0, I);

function zde(e) {
  let n = Se();
  if (t(e) === t(n)) return !0;
  return _(e) === _(n)
}

function _(e) {
  let n = t(e),
    r = O(n),
    s = nm(r) ?? r;
  return xn(u(s, D(n)))
}

function Qmt(e) {
  let n = process.env.NODE_OPTIONS;
  if (!n) return !1;
  return n.split(/\s+/).includes(e)
}

function H9e(e, n) {
  if (e === void 0) return n;
  let r = Ic(e);
  return Number.isNaN(r) ? n : r
}

function UBo(e) {
  if (e !== void 0) return e;
  let n = process.env.CLAUDE_CODE_MAX_TURNS?.trim();
  if (!n) return;
  let r = WD(n);
  if (!Number.isInteger(r) || r <= 0) throw Error(`CLAUDE_CODE_MAX_TURNS must be a positive integer; got "${n}"`);
  return r
}

function i(e) {
  let n = process.argv.indexOf("--");
  return (n === -1 ? process.argv : process.argv.slice(0, n)).includes(e)
}

function Xr() {
  return Ne(process.env.CLAUDE_CODE_SIMPLE) || i("--bare")
}

function Tr() {
  return Ne(process.env.CLAUDE_CODE_SAFE_MODE) || i("--safe-mode")
}

function YY() {
  return Ne(process.env.CLAUDE_CODE_RESTRICTED)
}

function qm() {
  return i("--safe-mode") ? "restart without --safe-mode" : "unset CLAUDE_CODE_SAFE_MODE"
}

function BBo() {
  return i("--bare") ? "restart without --bare" : "unset CLAUDE_CODE_SIMPLE"
}

function Hjt() {
  return Ne(process.env.CLAUDE_CODE_SUPERVISED)
}

function jBo(e) {
  let n = {};
  if (e)
    for (let r of e) {
      let [s, ...a] = r.split("=");
      if (!s || a.length === 0) throw Error(`Invalid environment variable format: ${r}, environment variables should be added as: -e KEY1=value1 -e KEY2=value2`);
      n[s] = a.join("=")
    }
  return n
}

function Zmt() {
  return bre(process.env.CLOUD_ML_REGION?.trim()) || "us-east5"
}

function F9e(e) {
  switch (e) {
    case "global":
      return "https://aiplatform.googleapis.com";
    case "us":
    case "eu":
      return `https://aiplatform.${e}.rep.googleapis.com`;
    default:
      return `https://${e}-aiplatform.googleapis.com`
  }
}

function WBo() {
  return Ne(process.env.CLAUDE_BASH_MAINTAIN_PROJECT_WORKING_DIR)
}

function Eb() {
  return !1
}

function tP() {
  return !1
}

function zBo() {
  return {
    namespace: void 0,
    cluster: void 0
  }
}

function Gde(e) {
  if (e) {
    let n = d.find(([r]) => e.startsWith(r));
    if (n) return bre(process.env[n[1]]?.trim()) || Zmt()
  }
  return Zmt()
}
export {
  bre,
  Ic,
  WD,
  Dyn,
  m9n,
  Se,
  Wde,
  LBe,
  fKr,
  Njt,
  zde,
  Qmt,
  H9e,
  UBo,
  Xr,
  Tr,
  YY,
  qm,
  BBo,
  Hjt,
  jBo,
  Zmt,
  F9e,
  WBo,
  Eb,
  tP,
  zBo,
  Gde
};
