// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  Pe
} from "B:/~BUN/root/chunk-vz9zea4j.js";
import {
  En,
  wh
} from "B:/~BUN/root/chunk-h4acfc9y.js";
import {
  Kae
} from "B:/~BUN/root/chunk-ppmmt0c3.js";
import {
  he
} from "B:/~BUN/root/chunk-fet34rqr.js";
import {
  homedir as D
} from "os";
import {
  basename as A,
  dirname as T,
  join as u,
  resolve as s
} from "path";
var m = /^[a-z]{2,}(?:-[a-z0-9]+){0,4}$/i;

function g(e) {
  return !!e && m.test(e)
}

function zae(e) {
  return g(e) ? e : void 0
}
var R = /^[+-]?(\d+(\.\d*)?|\.\d+)[eE][+-]?\d+$/,
  c = /^[+-]?\d{1,3}([_,\u00A0\u202F ])\d{3}(?:\1\d{3})*$/,
  d = /[_,\u00A0\u202F ]/g;

function kKs(e) {
  if (e.length <= 32) {
    if (R.test(e)) {
      let n = Number(e);
      return Number.isInteger(n) ? n : NaN
    }
    if (c.test(e)) return parseInt(e.replace(d, ""), 10)
  }
  return
}

function Qf(e) {
  let n = String(e).trim();
  return kKs(n) ?? parseInt(n, 10)
}

function K5(e) {
  let n = Number(e);
  if (!Number.isNaN(n)) return n;
  let r = String(e).trim();
  return r.length <= 32 && c.test(r) ? parseInt(r.replace(d, ""), 10) : NaN
}
var _ = [
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

function Zcn() {
  return process.env.CLAUDE_CONFIG_DIR
}

function N$r(e) {
  let n = e === "CLAUDE_CONFIG_DIR" ? Zcn() : process.env[e];
  if (n === void 0) return;
  let r = String(n).trim();
  return r ? r : void 0
}

function OIo(e) {
  return Pe(process.env[e])
}

function f(e, n) {
  let r = he(new Map, (o) => o.clear());

  function t() {
    let o = n(),
      a = r.get(o);
    if (a) return a.value;
    let E = e();
    return r.set(o, {
      value: E
    }), E
  }
  return Object.assign(t, {
    cache: r
  })
}
var Ue = f(() => (Zcn() ?? u(D(), ".claude")).normalize("NFC"), Zcn);

function af() {
  return Kae() ? null : Ue()
}

function xme(e) {
  let n = af();
  return n === null || e === null ? n === e : s(n) === s(e)
}

function drt() {
  return u(Ue(), "teams")
}

function l() {
  return process.env.CLAUDE_CODE_PROJECT_DIR_NAME
}
var C = /^[A-Za-z0-9_-]{1,64}$/,
  I = /^(?:con|prn|aux|nul|com[0-9]|lpt[0-9])$/i;

function vKs(e) {
  if (!e || !C.test(e) || I.test(e)) return;
  return e
}

function S() {
  return `${Kae()}\x00${Zcn()??""}\x00${l()??""}`
}
var aqn = f(() => Zcn() || Kae() ? vKs(l()) : void 0, S);

function Gae(e) {
  let n = af();
  if (n === null) return !1;
  if (s(e) === s(n)) return !0;
  return p(e) === p(n)
}

function p(e) {
  let n = s(e),
    r = T(n),
    t = wh(r) ?? r;
  return En(u(t, A(n)))
}

function eun(e) {
  let n = process.env.NODE_OPTIONS;
  if (!n) return !1;
  return n.split(/\s+/).includes(e)
}

function IIo(e, n) {
  if (e === void 0) return n;
  let r = Qf(e);
  return Number.isNaN(r) ? n : r
}

function voa(e) {
  if (e !== void 0) return e;
  let n = process.env.CLAUDE_CODE_MAX_TURNS?.trim();
  if (!n) return;
  let r = K5(n);
  if (!Number.isInteger(r) || r <= 0) throw Error(`CLAUDE_CODE_MAX_TURNS must be a positive integer; got "${n}"`);
  return r
}

function Eoa(e) {
  let n = Number(e);
  return isNaN(n) || n <= 0 ? void 0 : n
}

function i(e) {
  let n = process.argv,
    r = n.indexOf(e);
  if (r === -1) return !1;
  let t = n.indexOf("--");
  return t === -1 || r < t
}

function Nr() {
  return Pe(process.env.CLAUDE_CODE_SIMPLE) || i("--bare")
}

function Zr() {
  return Pe(process.env.CLAUDE_CODE_SAFE_MODE) || i("--safe-mode")
}

function Pme() {
  return Pe(process.env.CLAUDE_CODE_RESTRICTED)
}

function N(e) {
  return process.env.CLAUDE_CODE_SESSION_KIND === "bg" ? "run /stop, then claude --resume from your shell" : `restart without ${e}`
}

function N_() {
  return i("--safe-mode") ? N("--safe-mode") : "unset CLAUDE_CODE_SAFE_MODE"
}

function Vwt() {
  return i("--bare") ? N("--bare") : "unset CLAUDE_CODE_SIMPLE"
}

function Kwt() {
  return Pe(process.env.CLAUDE_CODE_SUPERVISED)
}

function Toa(e) {
  let n = {};
  if (e)
    for (let r of e) {
      let [t, ...o] = r.split("=");
      if (!t || o.length === 0) throw Error(`Invalid environment variable format: ${r}, environment variables should be added as: -e KEY1=value1 -e KEY2=value2`);
      n[t] = o.join("=")
    }
  return n
}

function tun() {
  return zae(process.env.CLOUD_ML_REGION?.trim()) || "us-east5"
}

function pWt(e) {
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

function nun() {
  return Pe(process.env.CLAUDE_BASH_MAINTAIN_PROJECT_WORKING_DIR)
}

function C7() {
  if (Pe(process.env.CLAUDE_CODE_DISABLE_FEATURE_FLAGS)) return "CLAUDE_CODE_DISABLE_FEATURE_FLAGS";
  if (Pe(process.env.DISABLE_GROWTHBOOK)) return "DISABLE_GROWTHBOOK";
  return null
}

function NE() {
  return !1
}

function uB() {
  return !1
}

function Coa() {
  return {
    namespace: void 0,
    cluster: void 0
  }
}

function Jxe(e) {
  if (e) {
    let n = _.find(([r]) => e.startsWith(r));
    if (n) return zae(process.env[n[1]]?.trim()) || tun()
  }
  return tun()
}
export {
  zae,
  kKs,
  Qf,
  K5,
  Zcn,
  N$r,
  OIo,
  Ue,
  af,
  xme,
  drt,
  vKs,
  aqn,
  Gae,
  eun,
  IIo,
  voa,
  Eoa,
  Nr,
  Zr,
  Pme,
  N_,
  Vwt,
  Kwt,
  Toa,
  tun,
  pWt,
  nun,
  C7,
  NE,
  uB,
  Coa,
  Jxe
};
