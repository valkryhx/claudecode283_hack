// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  q
} from "B:/~BUN/root/chunk-game8aqv.js";
import {
  F,
  d
} from "B:/~BUN/root/chunk-y2g9f85n.js";
import {
  HBn,
  md,
  uh,
  VZe,
  Vf,
  tte,
  GS,
  ksn,
  UIs,
  Gy,
  Oh,
  pn,
  v
} from "B:/~BUN/root/chunk-1ks9vs37.js";
import {
  Nr,
  Zr
} from "B:/~BUN/root/chunk-eev762xg.js";
import {
  i
} from "B:/~BUN/root/chunk-j6pt0v41.js";
import {
  t
} from "B:/~BUN/root/chunk-2pp12te6.js";
import {
  x
} from "B:/~BUN/root/chunk-mwfggkjt.js";
import {
  Cr
} from "B:/~BUN/root/chunk-7wn6n2hd.js";
import {
  h7i,
  Kn
} from "B:/~BUN/root/chunk-gvasf6q6.js";
import {
  lSt
} from "B:/~BUN/root/chunk-c79wfkj4.js";
import {
  ur
} from "B:/~BUN/root/chunk-y5gyn2hc.js";
import {
  g_,
  $m
} from "B:/~BUN/root/chunk-79dw4seg.js";
import {
  kd
} from "B:/~BUN/root/chunk-jbjsy1k0.js";
import {
  he
} from "B:/~BUN/root/chunk-fet34rqr.js";
var AI = !0;
var n = "no hooks module loads in a claude-code-server tenant, whose process serves many people";
var O = "no hooks module loads in a tool server's daemon, which can hold the person's token and runs its caller's shell commands";

function D9() {
  if (q()) return n;
  return kd() ? O : void 0
}
var a = () => Nr() || md() || Boolean(i.ANTHROPIC_API_KEY) || Boolean(Cr()?.env?.ANTHROPIC_API_KEY) || VZe() !== null || Boolean(uh()) || Vf() || lSt() || !tte({
  envBearerFallbackFor: ksn()
}).error;
async function l() {
  if (a()) return !1;
  let [o, r] = await Promise.all([HBn(Kn(), (s) => s.claudeAiOauth !== void 0), x() !== "macos" || h7i()]);
  return r && o.every((s) => s.value === !1)
}
var e = he({
  isLifted: !1,
  lifting: void 0
}, (o) => {
  o.isLifted = !1, o.lifting = void 0
});

function f() {
  return e.lifting ??= l().then((o) => {
    e.isLifted = o
  }, (o) => {
    t(`credential stores not read strictly: ${d(o)}`)
  }), e.lifting
}
var sIn = he({
  isFollowed: !1
}, (o) => {
  o.isFollowed = !1
});
var m = new Set(["disk", "payload"]);
async function lft() {
  let o = pn(GS, AI);
  return !sIn.isFollowed && Oh() && o.value !== AI && m.has(o.source) ? f() : void 0
}
var p = () => !e.isLifted || a();

function wlo() {
  try {
    return UIs() || p()
  } catch (o) {
    return t(`GrowthBook: credential sources not read (${F(o).name})`), !0
  }
}
var u = () => !sIn.isFollowed && Oh() && m.has(pn(GS, AI).source) && !wlo();

function iIn() {
  let o = v(GS, AI),
    r = o !== AI,
    s = r && (Gy() || u());
  if (r) lft();
  return s ? AI : o
}
var Zw = () => D9() === void 0 && iIn();
var aIn = () => Zw() && !ur("hooks") && !Zr();
var $Jt = () => aIn() && !$m() && !g_();
export {
  AI,
  sIn,
  lft,
  D9,
  wlo,
  iIn,
  Zw,
  aIn,
  $Jt
};
