// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { FL, aIt } from "B:/~BUN/root/chunk-0av24qsq.js";
import { ioe } from "B:/~BUN/root/chunk-e1thvnpv.js";
import { w } from "B:/~BUN/root/chunk-x9hkq9y1.js";
import { ke } from "B:/~BUN/root/chunk-kss0wzj5.js";
import { hL, CAn, rR, YZe, AAn } from "B:/~BUN/root/chunk-tq1hs216.js";
import { Mo, s1 } from "B:/~BUN/root/chunk-4py062qg.js";
import { e } from "B:/~BUN/root/chunk-qkvevvte.js";
import { Joe, KZe } from "B:/~BUN/root/chunk-qq6w89ha.js";
import { Vt, se, Pe, R, X, g, At, N } from "B:/~BUN/root/chunk-rnj6pcz5.js";
import { S } from "B:/~BUN/root/chunk-yv67t8hr.js";
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
  return Mo("theme", "dark").value;
}
function mVt(n) {
  let t = w(50),
    {
      children: children,
      initialState: initialState,
      onThemeSave: onThemeSave
    } = n,
    {
      storageV5: storageV5
    } = ke(),
    ae;
  if (t[0] !== onThemeSave || t[1] !== storageV5) ae = ue => onThemeSave ? onThemeSave(ue) : s1("theme", ue, storageV5), t[0] = onThemeSave, t[1] = storageV5, t[2] = ae;else ae = t[2];
  let u = ae,
    [themeSetting, ce] = g(initialState ?? fVt),
    [c, M] = g(null),
    [et, setPreviewOverrides] = g(null),
    [J, rt] = g(CAn),
    le;
  if (t[3] === S) le = hL(), t[3] = le;else le = t[3];
  let pluginThemes = le.pluginThemes,
    K = At(pluginThemes.subscribe, pluginThemes.getState),
    Se;
  if (t[4] !== K || t[5] !== J) Se = [...J, ...K], t[4] = K, t[5] = J, t[6] = Se;else Se = t[6];
  let customThemes = Se,
    ge;
  if (t[7] !== initialState || t[8] !== themeSetting) ge = () => (initialState ?? themeSetting) === "auto" ? Joe() : "dark", t[7] = initialState, t[8] = themeSetting, t[9] = ge;else ge = t[9];
  let [it, V] = g(ge),
    i = c ?? themeSetting,
    pe;
  if (t[10] !== storageV5) pe = () => YZe(storageV5).then(rt), t[10] = storageV5, t[11] = pe;else pe = t[11];
  let reloadCustomThemes = pe,
    we,
    fe;
  if (t[12] !== reloadCustomThemes) we = () => (reloadCustomThemes(), AAn(() => void reloadCustomThemes())), fe = [reloadCustomThemes], t[12] = reloadCustomThemes, t[13] = we, t[14] = fe;else we = t[13], fe = t[14];
  R(we, fe);
  let {
      internal_querier: internal_querier
    } = wA(),
    Ce,
    ye;
  if (t[15] !== i) Ce = () => {
    if (i !== "auto") {
      return;
    }
    return V(Joe()), KZe(() => V(Joe()));
  }, ye = [i], t[15] = i, t[16] = Ce, t[17] = ye;else Ce = t[16], ye = t[17];
  R(Ce, ye);
  let Oe, Ve;
  if (t[18] !== i || t[19] !== internal_querier) Oe = () => {
    if (i !== "auto" || !internal_querier) {
      return;
    }
    let _e;
    let Re = !1;
    return import("B:/~BUN/root/chunk-426980b0.js").then(A => {
      let {
        watchSystemTheme: watchSystemTheme
      } = A;
      if (Re) {
        return;
      }
      _e = watchSystemTheme(internal_querier, V);
    }), () => {
      Re = !0, _e?.();
    };
  }, Ve = [i, internal_querier], t[18] = i, t[19] = internal_querier, t[20] = Oe, t[21] = Ve;else Oe = t[20], Ve = t[21];
  R(Oe, Ve);
  let A;
  if (t[22] !== i) A = rR(i), t[22] = i, t[23] = A;else A = t[23];
  let k = A,
    qe;
  if (t[24] !== k || t[25] !== customThemes) qe = k ? customThemes.find(item => item.slug === k) : void 0, t[24] = k, t[25] = customThemes, t[26] = qe;else qe = t[26];
  let activeCustomTheme = qe,
    currentTheme = activeCustomTheme ? activeCustomTheme.base : i === "auto" ? it : k ? "dark" : i,
    activeThemeOverrides = et ?? activeCustomTheme?.overrides,
    xe;
  if (t[27] !== activeThemeOverrides || t[28] !== currentTheme) xe = aIt(FL(currentTheme), activeThemeOverrides), t[27] = activeThemeOverrides, t[28] = currentTheme, t[29] = xe;else xe = t[29];
  let resolvedTheme = xe,
    Ue;
  if (t[30] === S) Ue = () => M(null), t[30] = Ue;else Ue = t[30];
  let cancelPreview = Ue,
    setThemeSetting;
  if (t[31] !== u) setThemeSetting = W => {
    if (ce(W), M(null), W === "auto") V(Joe());
    u(W);
  }, t[31] = u, t[32] = setThemeSetting;else setThemeSetting = t[32];
  let setPreviewTheme;
  if (t[33] === S) setPreviewTheme = Ee => {
    if (M(Ee), Ee === "auto") V(Joe());
  }, t[33] = setPreviewTheme;else setPreviewTheme = t[33];
  let savePreview;
  if (t[34] !== u || t[35] !== c) savePreview = () => {
    if (c !== null) ce(c), M(null), u(c);
  }, t[34] = u, t[35] = c, t[36] = savePreview;else savePreview = t[36];
  let Ne;
  if (t[37] !== activeCustomTheme || t[38] !== activeThemeOverrides || t[39] !== currentTheme || t[40] !== customThemes || t[41] !== reloadCustomThemes || t[42] !== resolvedTheme || t[43] !== setThemeSetting || t[44] !== savePreview || t[45] !== themeSetting) Ne = {
    themeSetting: themeSetting,
    setThemeSetting: setThemeSetting,
    setPreviewTheme: setPreviewTheme,
    savePreview: savePreview,
    cancelPreview: cancelPreview,
    currentTheme: currentTheme,
    resolvedTheme: resolvedTheme,
    activeThemeOverrides: activeThemeOverrides,
    customThemes: customThemes,
    activeCustomTheme: activeCustomTheme,
    reloadCustomThemes: reloadCustomThemes,
    setPreviewOverrides: setPreviewOverrides
  }, t[37] = activeCustomTheme, t[38] = activeThemeOverrides, t[39] = currentTheme, t[40] = customThemes, t[41] = reloadCustomThemes, t[42] = resolvedTheme, t[43] = setThemeSetting, t[44] = savePreview, t[45] = themeSetting, t[46] = Ne;else Ne = t[46];
  let value = Ne,
    Me;
  if (t[47] !== children || t[48] !== value) Me = e(r.Provider, {
    value: value,
    children: children
  }), t[47] = children, t[48] = value, t[49] = Me;else Me = t[49];
  return Me;
}
function Zn() {
  let s = w(3),
    {
      currentTheme: currentTheme_2,
      setThemeSetting: setThemeSetting_2
    } = Pe(r),
    o;
  if (s[0] !== currentTheme_2 || s[1] !== setThemeSetting_2) o = [currentTheme_2, setThemeSetting_2], s[0] = currentTheme_2, s[1] = setThemeSetting_2, s[2] = o;else o = s[2];
  return o;
}
function ooe() {
  return Pe(r).themeSetting;
}
function gVt() {
  let o = w(4),
    {
      setPreviewTheme: setPreviewTheme_2,
      savePreview: savePreview_2,
      cancelPreview: cancelPreview_2
    } = Pe(r),
    h;
  if (o[0] !== cancelPreview_2 || o[1] !== savePreview_2 || o[2] !== setPreviewTheme_2) h = {
    setPreviewTheme: setPreviewTheme_2,
    savePreview: savePreview_2,
    cancelPreview: cancelPreview_2
  }, o[0] = cancelPreview_2, o[1] = savePreview_2, o[2] = setPreviewTheme_2, o[3] = h;else h = o[3];
  return h;
}
function gT() {
  return Pe(r).resolvedTheme;
}
function hVt() {
  return Pe(r).activeThemeOverrides;
}
function soe() {
  let h = w(5),
    {
      customThemes: customThemes_2,
      activeCustomTheme: activeCustomTheme_2,
      reloadCustomThemes: reloadCustomThemes_2,
      setPreviewOverrides: setPreviewOverrides_2
    } = Pe(r),
    t;
  if (h[0] !== activeCustomTheme_2 || h[1] !== customThemes_2 || h[2] !== reloadCustomThemes_2 || h[3] !== setPreviewOverrides_2) t = {
    customThemes: customThemes_2,
    activeCustomTheme: activeCustomTheme_2,
    reloadCustomThemes: reloadCustomThemes_2,
    setPreviewOverrides: setPreviewOverrides_2
  }, h[0] = activeCustomTheme_2, h[1] = customThemes_2, h[2] = reloadCustomThemes_2, h[3] = setPreviewOverrides_2, h[4] = t;else t = h[4];
  return t;
}
export { wA, fVt, mVt, Zn, ooe, gVt, gT, hVt, soe };