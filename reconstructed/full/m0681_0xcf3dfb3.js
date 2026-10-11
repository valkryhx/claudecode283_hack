// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.283
import {
  FL,
  aIt
} from "B:/~BUN/root/chunk-0av24qsq.js";
import {
  ioe
} from "B:/~BUN/root/chunk-e1thvnpv.js";
import {
  w
} from "B:/~BUN/root/chunk-x9hkq9y1.js";
import {
  ke
} from "B:/~BUN/root/chunk-kss0wzj5.js";
import {
  hL,
  CAn,
  rR,
  YZe,
  AAn
} from "B:/~BUN/root/chunk-tq1hs216.js";
import {
  Mo,
  s1
} from "B:/~BUN/root/chunk-4py062qg.js";
import {
  e
} from "B:/~BUN/root/chunk-qkvevvte.js";
import {
  Joe,
  KZe
} from "B:/~BUN/root/chunk-qq6w89ha.js";
import {
  Vt,
  se,
  Pe,
  R,
  X,
  g,
  At,
  N
} from "B:/~BUN/root/chunk-rnj6pcz5.js";
import {
  S
} from "B:/~BUN/root/chunk-yv67t8hr.js";
N();
var Ae = () => Pe(ioe),
  wA = Ae;
N();
var H = "dark",
  r = Vt({
    themeSetting: H,
    setThemeSetting: () => {},
    setPreviewTheme: () => {},
    savePreview: () => {},
    cancelPreview: () => {},
    currentTheme: H,
    resolvedTheme: FL(H),
    activeThemeOverrides: void 0,
    customThemes: [],
    activeCustomTheme: void 0,
    reloadCustomThemes: () => Promise.resolve(),
    setPreviewOverrides: () => {}
  });

function fVt() {
  return Mo("theme", "dark").value
}

function mVt(n) {
  let t = w(50),
    {
      children: m,
      initialState: s,
      onThemeSave: o
    } = n,
    {
      storageV5: h
    } = ke(),
    ae;
  if (t[0] !== o || t[1] !== h) ae = (ue) => o ? o(ue) : s1("theme", ue, h), t[0] = o, t[1] = h, t[2] = ae;
  else ae = t[2];
  let u = ae,
    [a, ce] = g(s ?? fVt),
    [c, M] = g(null),
    [et, tt] = g(null),
    [J, rt] = g(CAn),
    le;
  if (t[3] === S) le = hL(), t[3] = le;
  else le = t[3];
  let de = le.pluginThemes,
    K = At(de.subscribe, de.getState),
    Se;
  if (t[4] !== K || t[5] !== J) Se = [...J, ...K], t[4] = K, t[5] = J, t[6] = Se;
  else Se = t[6];
  let l = Se,
    ge;
  if (t[7] !== s || t[8] !== a) ge = () => (s ?? a) === "auto" ? Joe() : "dark", t[7] = s, t[8] = a, t[9] = ge;
  else ge = t[9];
  let [it, V] = g(ge), i = c ?? a, pe;
  if (t[10] !== h) pe = () => YZe(h).then(rt), t[10] = h, t[11] = pe;
  else pe = t[11];
  let T = pe,
    we, fe;
  if (t[12] !== T) we = () => (T(), AAn(() => void T())), fe = [T], t[12] = T, t[13] = we, t[14] = fe;
  else we = t[13], fe = t[14];
  R(we, fe);
  let {
    internal_querier: _
  } = wA(), Ce, ye;
  if (t[15] !== i) Ce = () => {
    if (i !== "auto") {
      return
    }
    return V(Joe()), KZe(() => V(Joe()))
  }, ye = [i], t[15] = i, t[16] = Ce, t[17] = ye;
  else Ce = t[16], ye = t[17];
  R(Ce, ye);
  let Oe, Ve;
  if (t[18] !== i || t[19] !== _) Oe = () => {
    if (i !== "auto" || !_) {
      return
    }
    let _e;
    let Re = !1;
    return import("B:/~BUN/root/chunk-426980b0.js").then((A) => {
      let {
        watchSystemTheme: mt
      } = A;
      if (Re) {
        return
      }
      _e = mt(_, V)
    }), () => {
      Re = !0, _e?.()
    }
  }, Ve = [i, _], t[18] = i, t[19] = _, t[20] = Oe, t[21] = Ve;
  else Oe = t[20], Ve = t[21];
  R(Oe, Ve);
  let A;
  if (t[22] !== i) A = rR(i), t[22] = i, t[23] = A;
  else A = t[23];
  let k = A,
    qe;
  if (t[24] !== k || t[25] !== l) qe = k ? l.find((nt) => nt.slug === k) : void 0, t[24] = k, t[25] = l, t[26] = qe;
  else qe = t[26];
  let d = qe,
    p = d ? d.base : i === "auto" ? it : k ? "dark" : i,
    P = et ?? d?.overrides,
    xe;
  if (t[27] !== P || t[28] !== p) xe = aIt(FL(p), P), t[27] = P, t[28] = p, t[29] = xe;
  else xe = t[29];
  let Q = xe,
    Ue;
  if (t[30] === S) Ue = () => M(null), t[30] = Ue;
  else Ue = t[30];
  let st = Ue,
    D;
  if (t[31] !== u) D = (W) => {
    if (ce(W), M(null), W === "auto") V(Joe());
    u(W)
  }, t[31] = u, t[32] = D;
  else D = t[32];
  let be;
  if (t[33] === S) be = (Ee) => {
    if (M(Ee), Ee === "auto") V(Joe())
  }, t[33] = be;
  else be = t[33];
  let F;
  if (t[34] !== u || t[35] !== c) F = () => {
    if (c !== null) ce(c), M(null), u(c)
  }, t[34] = u, t[35] = c, t[36] = F;
  else F = t[36];
  let Ne;
  if (t[37] !== d || t[38] !== P || t[39] !== p || t[40] !== l || t[41] !== T || t[42] !== Q || t[43] !== D || t[44] !== F || t[45] !== a) Ne = {
    themeSetting: a,
    setThemeSetting: D,
    setPreviewTheme: be,
    savePreview: F,
    cancelPreview: st,
    currentTheme: p,
    resolvedTheme: Q,
    activeThemeOverrides: P,
    customThemes: l,
    activeCustomTheme: d,
    reloadCustomThemes: T,
    setPreviewOverrides: tt
  }, t[37] = d, t[38] = P, t[39] = p, t[40] = l, t[41] = T, t[42] = Q, t[43] = D, t[44] = F, t[45] = a, t[46] = Ne;
  else Ne = t[46];
  let Z = Ne,
    Me;
  if (t[47] !== m || t[48] !== Z) Me = e(r.Provider, {
    value: Z,
    children: m
  }), t[47] = m, t[48] = Z, t[49] = Me;
  else Me = t[49];
  return Me
}

function Zn() {
  let s = w(3),
    {
      currentTheme: n,
      setThemeSetting: m
    } = Pe(r),
    o;
  if (s[0] !== n || s[1] !== m) o = [n, m], s[0] = n, s[1] = m, s[2] = o;
  else o = s[2];
  return o
}

function ooe() {
  return Pe(r).themeSetting
}

function gVt() {
  let o = w(4),
    {
      setPreviewTheme: n,
      savePreview: m,
      cancelPreview: s
    } = Pe(r),
    h;
  if (o[0] !== s || o[1] !== m || o[2] !== n) h = {
    setPreviewTheme: n,
    savePreview: m,
    cancelPreview: s
  }, o[0] = s, o[1] = m, o[2] = n, o[3] = h;
  else h = o[3];
  return h
}

function gT() {
  return Pe(r).resolvedTheme
}

function hVt() {
  return Pe(r).activeThemeOverrides
}

function soe() {
  let h = w(5),
    {
      customThemes: n,
      activeCustomTheme: m,
      reloadCustomThemes: s,
      setPreviewOverrides: o
    } = Pe(r),
    t;
  if (h[0] !== m || h[1] !== n || h[2] !== s || h[3] !== o) t = {
    customThemes: n,
    activeCustomTheme: m,
    reloadCustomThemes: s,
    setPreviewOverrides: o
  }, h[0] = m, h[1] = n, h[2] = s, h[3] = o, h[4] = t;
  else t = h[4];
  return t
}
export {
  wA,
  fVt,
  mVt,
  Zn,
  ooe,
  gVt,
  gT,
  hVt,
  soe
};
