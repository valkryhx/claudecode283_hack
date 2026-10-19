// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.303
import {
  Fe
} from "B:/~BUN/root/chunk-rwkgcmm8.js";
import {
  eo,
  $n,
  rf,
  BQ,
  mre
} from "B:/~BUN/root/chunk-4bx17ygx.js";
import {
  homedir as D
} from "os";
import {
  basename as O,
  dirname as C,
  join as u,
  resolve as t
} from "path";
var m = /^[a-z]{2,}(?:-[a-z0-9]+){0,4}$/i;

function N(e) {
  return !!e && m.test(e)
}

function HQ(e) {
  return N(e) ? e : void 0
}
var g = /^[+-]?(\d+(\.\d*)?|\.\d+)[eE][+-]?\d+$/,
  E = /^[+-]?\d{1,3}([_,\u00A0\u202F ])\d{3}(?:\1\d{3})*$/,
  c = /[_,\u00A0\u202F ]/g;

function pqo(e) {
  if (e.length <= 32) {
    if (g.test(e)) {
      let n = Number(e);
      return Number.isInteger(n) ? n : NaN
    }
    if (E.test(e)) return parseInt(e.replace(c, ""), 10)
  }
  return
}

function tu(e) {
  let n = String(e).trim();
  return pqo(n) ?? parseInt(n, 10)
}

function ZW(e) {
  let n = Number(e);
  if (!Number.isNaN(n)) return n;
  let r = String(e).trim();
  return r.length <= 32 && E.test(r) ? parseInt(r.replace(c, ""), 10) : NaN
}
var d = [
  ["claude-3-5-sonnet", "VERTEX_REGION_CLAUDE_3_5_SONNET"],
  ["claude-3-7-sonnet", "VERTEX_REGION_CLAUDE_3_7_SONNET"],
  ["claude-sonnet-4-5", "VERTEX_REGION_CLAUDE_4_5_SONNET"],
  ["claude-sonnet-4-6", "VERTEX_REGION_CLAUDE_4_6_SONNET"],
  ["claude-sonnet-5-5", "VERTEX_REGION_CLAUDE_5_5_SONNET"],
  ["claude-3-5-haiku", "VERTEX_REGION_CLAUDE_3_5_HAIKU"],
  ["claude-fable-5-1", "VERTEX_REGION_CLAUDE_FABLE_5_1"],
  ["claude-haiku-4-5", "VERTEX_REGION_CLAUDE_HAIKU_4_5"],
  ["claude-haiku-5-5", "VERTEX_REGION_CLAUDE_HAIKU_5_5"],
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

function rQn(e) {
  let n = e === "CLAUDE_CONFIG_DIR" ? o() : process.env[e];
  if (n === void 0) return;
  let r = String(n).trim();
  return r ? r : void 0
}

function zjr(e) {
  return Fe(process.env[e])
}
var _ = eo(() => (o() ?? u(D(), ".claude")).normalize("NFC"), o),
  Pe = Object.assign(function() {
    return mre("config_home"), _()
  }, {
    cache: _.cache
  });

function vf() {
  return BQ() ? null : Pe()
}

function lre(e) {
  let n = vf();
  return n === null || e === null ? n === e : t(n) === t(e)
}

function fet() {
  return u(Pe(), "teams")
}

function f() {
  return process.env.CLAUDE_CODE_PROJECT_DIR_NAME
}
var A = /^[A-Za-z0-9_-]{1,64}$/,
  I = /^(?:con|prn|aux|nul|com[0-9]|lpt[0-9])$/i;

function fqo(e) {
  if (!e || !A.test(e) || I.test(e)) return;
  return e
}

function T() {
  return `${BQ()}\x00${o()??""}\x00${f()??""}`
}
var fhn = eo(() => o() || BQ() ? fqo(f()) : void 0, T);

function dre(e) {
  let n = vf();
  if (n === null) return !1;
  if (t(e) === t(n)) return !0;
  return p(e) === p(n)
}

function p(e) {
  let n = t(e),
    r = C(n),
    s = rf(r) ?? r;
  return $n(u(s, O(n)))
}

function tWt(e) {
  let n = process.env.NODE_OPTIONS;
  if (!n) return !1;
  return n.split(/\s+/).includes(e)
}

function Gjr(e, n) {
  if (e === void 0) return n;
  let r = tu(e);
  return Number.isNaN(r) ? n : r
}

function f3s(e) {
  if (e !== void 0) return e;
  let n = process.env.CLAUDE_CODE_MAX_TURNS?.trim();
  if (!n) return;
  let r = ZW(n);
  if (!Number.isInteger(r) || r <= 0) throw Error(`CLAUDE_CODE_MAX_TURNS must be a positive integer; got "${n}"`);
  return r
}

function m3s(e) {
  let n = Number(e);
  return isNaN(n) || n <= 0 ? void 0 : n
}

function i(e) {
  let n = process.argv.indexOf("--");
  return (n === -1 ? process.argv : process.argv.slice(0, n)).includes(e)
}

function wr() {
  return Fe(process.env.CLAUDE_CODE_SIMPLE) || i("--bare")
}

function vr() {
  return Fe(process.env.CLAUDE_CODE_SAFE_MODE) || i("--safe-mode")
}

function cre() {
  return Fe(process.env.CLAUDE_CODE_RESTRICTED)
}

function l(e) {
  return process.env.CLAUDE_CODE_SESSION_KIND === "bg" ? "run /stop, then claude --resume from your shell" : `restart without ${e}`
}

function Ch() {
  return i("--safe-mode") ? l("--safe-mode") : "unset CLAUDE_CODE_SAFE_MODE"
}

function TSt() {
  return i("--bare") ? l("--bare") : "unset CLAUDE_CODE_SIMPLE"
}

function mhn() {
  return Fe(process.env.CLAUDE_CODE_SUPERVISED)
}

function g3s(e) {
  let n = {};
  if (e)
    for (let r of e) {
      let [s, ...a] = r.split("=");
      if (!s || a.length === 0) throw Error(`Invalid environment variable format: ${r}, environment variables should be added as: -e KEY1=value1 -e KEY2=value2`);
      n[s] = a.join("=")
    }
  return n
}

function nWt() {
  return HQ(process.env.CLOUD_ML_REGION?.trim()) || "us-east5"
}

function CSt(e) {
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

function oQn() {
  return Fe(process.env.CLAUDE_BASH_MAINTAIN_PROJECT_WORKING_DIR)
}

function Nw() {
  return !1
}

function _L() {
  return !1
}

function h3s() {
  return {
    namespace: void 0,
    cluster: void 0
  }
}

function yye(e) {
  if (e) {
    let n = d.find(([r]) => e.startsWith(r));
    if (n) return HQ(process.env[n[1]]?.trim()) || nWt()
  }
  return nWt()
}
export {
  HQ,
  pqo,
  tu,
  ZW,
  rQn,
  zjr,
  Pe,
  vf,
  lre,
  fet,
  fqo,
  fhn,
  dre,
  tWt,
  Gjr,
  f3s,
  m3s,
  wr,
  vr,
  cre,
  Ch,
  TSt,
  mhn,
  g3s,
  nWt,
  CSt,
  oQn,
  Nw,
  _L,
  h3s,
  yye
};
