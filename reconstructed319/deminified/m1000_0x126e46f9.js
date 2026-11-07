// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { Sq, gIn } from "B:/~BUN/root/chunk-apgsnbqk.js";
import { GPe } from "B:/~BUN/root/chunk-dwg8my6z.js";
import { S } from "B:/~BUN/root/chunk-bn4bjw9d.js";
import { DK, E3r, oF, Bqt, C3r } from "B:/~BUN/root/chunk-gh4155re.js";
import { Ei, IX } from "B:/~BUN/root/chunk-sgy380eg.js";
import { e } from "B:/~BUN/root/chunk-t16eynda.js";
import { YOe, Uqt } from "B:/~BUN/root/chunk-qed5a8pe.js";
import { Jt, ue, ve, O, Z, y, At, j } from "B:/~BUN/root/chunk-czy5r8bc.js";
import { w } from "B:/~BUN/root/chunk-4qfwb3rf.js";
j();
j();
var Ue = () => ve(GPe),
  gB = Ue;
j();
var B = Object.freeze({}),
  V = Jt(B);
function o2t(m) {
  let a = S(6),
    {
      storageV5: storageV5,
      credentials: credentials,
      children: children
    } = m,
    t;
  if (a[0] !== credentials || a[1] !== storageV5) t = storageV5 === void 0 && credentials === void 0 ? B : {
    storageV5: storageV5,
    credentials: credentials
  }, a[0] = credentials, a[1] = storageV5, a[2] = t;else t = a[2];
  let value = t,
    N;
  if (a[3] !== children || a[4] !== value) N = e(V.Provider, {
    value: value,
    children: children
  }), a[3] = children, a[4] = value, a[5] = N;else N = a[5];
  return N;
}
function Fe() {
  return ve(V);
}
var E = "dark",
  i = Jt({
    themeSetting: E,
    setThemeSetting: () => {},
    setPreviewTheme: () => {},
    cancelPreview: () => {},
    currentTheme: E,
    resolvedTheme: Sq(E),
    activeThemeOverrides: void 0,
    customThemes: [],
    reloadCustomThemes: () => Promise.resolve(),
    setPreviewOverrides: () => {}
  });
function U5n() {
  return Ei("theme", "dark").value;
}
function B5n(m) {
  let t = S(45),
    {
      children: children_2,
      initialState: initialState,
      onThemeSave: onThemeSave
    } = m,
    {
      storageV5: storageV5_2
    } = Fe(),
    p;
  if (t[0] !== onThemeSave || t[1] !== storageV5_2) p = N => onThemeSave ? onThemeSave(N) : IX("theme", N, storageV5_2), t[0] = onThemeSave, t[1] = storageV5_2, t[2] = p;else p = t[2];
  let G = p,
    [themeSetting, tt] = y(initialState ?? U5n),
    [rt, I] = y(null),
    [it, setPreviewOverrides] = y(null),
    [J, st] = y(E3r),
    le;
  if (t[3] === w) le = DK(), t[3] = le;else le = t[3];
  let pluginThemes = le.pluginThemes,
    K = At(pluginThemes.subscribe, pluginThemes.getState),
    Se;
  if (t[4] !== K || t[5] !== J) Se = [...J, ...K], t[4] = K, t[5] = J, t[6] = Se;else Se = t[6];
  let customThemes = Se,
    ge;
  if (t[7] !== initialState || t[8] !== themeSetting) ge = () => (initialState ?? themeSetting) === "auto" ? YOe() : "dark", t[7] = initialState, t[8] = themeSetting, t[9] = ge;else ge = t[9];
  let [mt, f] = y(ge),
    s = rt ?? themeSetting,
    pe;
  if (t[10] !== storageV5_2) pe = () => Bqt(storageV5_2).then(st), t[10] = storageV5_2, t[11] = pe;else pe = t[11];
  let reloadCustomThemes = pe,
    fe,
    Pe;
  if (t[12] !== reloadCustomThemes) fe = () => (reloadCustomThemes(), C3r(() => void reloadCustomThemes())), Pe = [reloadCustomThemes], t[12] = reloadCustomThemes, t[13] = fe, t[14] = Pe;else fe = t[13], Pe = t[14];
  O(fe, Pe);
  let {
      internal_querier: internal_querier
    } = gB(),
    we,
    ye;
  if (t[15] !== s) we = () => {
    if (s !== "auto") {
      return;
    }
    return f(YOe()), Uqt(() => f(YOe()));
  }, ye = [s], t[15] = s, t[16] = we, t[17] = ye;else we = t[16], ye = t[17];
  O(we, ye);
  let Ce, Oe;
  if (t[18] !== s || t[19] !== internal_querier) Ce = () => {
    if (s !== "auto" || !internal_querier) {
      return;
    }
    let Ve;
    let Re = !1;
    return import("B:/~BUN/root/chunk-s62b9kyb.js").then(b => {
      let {
        watchSystemTheme: watchSystemTheme
      } = b;
      if (Re) {
        return;
      }
      Ve = watchSystemTheme(internal_querier, f);
    }), () => {
      Re = !0, Ve?.();
    };
  }, Oe = [s, internal_querier], t[18] = s, t[19] = internal_querier, t[20] = Ce, t[21] = Oe;else Ce = t[20], Oe = t[21];
  O(Ce, Oe);
  let b;
  if (t[22] !== s) b = oF(s), t[22] = s, t[23] = b;else b = t[23];
  let C = b,
    ke;
  if (t[24] !== C || t[25] !== customThemes) ke = C ? customThemes.find(item => item.slug === C) : void 0, t[24] = C, t[25] = customThemes, t[26] = ke;else ke = t[26];
  let Q = ke,
    currentTheme = Q ? Q.base : s === "auto" ? mt : C ? "dark" : s,
    activeThemeOverrides = it ?? Q?.overrides,
    xe;
  if (t[27] !== activeThemeOverrides || t[28] !== currentTheme) xe = gIn(Sq(currentTheme), activeThemeOverrides), t[27] = activeThemeOverrides, t[28] = currentTheme, t[29] = xe;else xe = t[29];
  let resolvedTheme = xe,
    _e;
  if (t[30] === w) _e = () => I(null), t[30] = _e;else _e = t[30];
  let cancelPreview = _e,
    setThemeSetting;
  if (t[31] !== G) setThemeSetting = X => {
    if (tt(X), I(null), X === "auto") f(YOe());
    G(X);
  }, t[31] = G, t[32] = setThemeSetting;else setThemeSetting = t[32];
  let setPreviewTheme;
  if (t[33] === w) setPreviewTheme = be => {
    if (I(be), be === "auto") f(YOe());
  }, t[33] = setPreviewTheme;else setPreviewTheme = t[33];
  let qe;
  if (t[34] !== activeThemeOverrides || t[35] !== currentTheme || t[36] !== customThemes || t[37] !== reloadCustomThemes || t[38] !== resolvedTheme || t[39] !== setThemeSetting || t[40] !== themeSetting) qe = {
    themeSetting: themeSetting,
    setThemeSetting: setThemeSetting,
    setPreviewTheme: setPreviewTheme,
    cancelPreview: cancelPreview,
    currentTheme: currentTheme,
    resolvedTheme: resolvedTheme,
    activeThemeOverrides: activeThemeOverrides,
    customThemes: customThemes,
    reloadCustomThemes: reloadCustomThemes,
    setPreviewOverrides: setPreviewOverrides
  }, t[34] = activeThemeOverrides, t[35] = currentTheme, t[36] = customThemes, t[37] = reloadCustomThemes, t[38] = resolvedTheme, t[39] = setThemeSetting, t[40] = themeSetting, t[41] = qe;else qe = t[41];
  let value_2 = qe,
    He;
  if (t[42] !== children_2 || t[43] !== value_2) He = e(i.Provider, {
    value: value_2,
    children: children_2
  }), t[42] = children_2, t[43] = value_2, t[44] = He;else He = t[44];
  return He;
}
function Br() {
  let n = S(3),
    {
      currentTheme: currentTheme_2,
      setThemeSetting: setThemeSetting_2
    } = ve(i),
    o;
  if (n[0] !== currentTheme_2 || n[1] !== setThemeSetting_2) o = [currentTheme_2, setThemeSetting_2], n[0] = currentTheme_2, n[1] = setThemeSetting_2, n[2] = o;else o = n[2];
  return o;
}
function fle() {
  return ve(i).themeSetting;
}
function j5n() {
  let n = S(3),
    {
      setPreviewTheme: setPreviewTheme_2,
      cancelPreview: cancelPreview_2
    } = ve(i),
    o;
  if (n[0] !== cancelPreview_2 || n[1] !== setPreviewTheme_2) o = {
    setPreviewTheme: setPreviewTheme_2,
    cancelPreview: cancelPreview_2
  }, n[0] = cancelPreview_2, n[1] = setPreviewTheme_2, n[2] = o;else o = n[2];
  return o;
}
function ow() {
  return ve(i).resolvedTheme;
}
function W5n() {
  return ve(i).activeThemeOverrides;
}
function zPe() {
  let o = S(4),
    {
      customThemes: customThemes_2,
      reloadCustomThemes: reloadCustomThemes_2,
      setPreviewOverrides: setPreviewOverrides_2
    } = ve(i),
    a;
  if (o[0] !== customThemes_2 || o[1] !== reloadCustomThemes_2 || o[2] !== setPreviewOverrides_2) a = {
    customThemes: customThemes_2,
    reloadCustomThemes: reloadCustomThemes_2,
    setPreviewOverrides: setPreviewOverrides_2
  }, o[0] = customThemes_2, o[1] = reloadCustomThemes_2, o[2] = setPreviewOverrides_2, o[3] = a;else a = o[3];
  return a;
}
export { o2t, Fe, gB, U5n, B5n, Br, fle, j5n, ow, W5n, zPe };