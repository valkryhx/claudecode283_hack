// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { dj, sen } from "B:/~BUN/root/chunk-d69870x4.js";
import { g_e } from "B:/~BUN/root/chunk-3md9ngvz.js";
import { w } from "B:/~BUN/root/chunk-rysqv8v1.js";
import { C1, scr, BI, fCt, acr } from "B:/~BUN/root/chunk-gyjdf492.js";
import { bs, HK } from "B:/~BUN/root/chunk-gy660jgx.js";
import { e } from "B:/~BUN/root/chunk-x2hkxw5q.js";
import { mbe, pCt } from "B:/~BUN/root/chunk-cy4hjzy6.js";
import { qt, ae, Ee, P, Z, y, Dt, B } from "B:/~BUN/root/chunk-5hr2ysa5.js";
import { S } from "B:/~BUN/root/chunk-ef0msk7r.js";
B();
B();
var Ue = () => Ee(g_e),
  T0 = Ue;
B();
var j = Object.freeze({}),
  k = qt(j);
function Xvt(o) {
  let a = w(6),
    {
      storageV5: storageV5,
      credentials: credentials,
      children: children
    } = o,
    t;
  if (a[0] !== credentials || a[1] !== storageV5) t = storageV5 === void 0 && credentials === void 0 ? j : {
    storageV5: storageV5,
    credentials: credentials
  }, a[0] = credentials, a[1] = storageV5, a[2] = t;else t = a[2];
  let value = t,
    q;
  if (a[3] !== children || a[4] !== value) q = e(k.Provider, {
    value: value,
    children: children
  }), a[3] = children, a[4] = value, a[5] = q;else q = a[5];
  return q;
}
function Oe() {
  return Ee(k);
}
var z = "dark",
  i = qt({
    themeSetting: z,
    setThemeSetting: () => {},
    setPreviewTheme: () => {},
    cancelPreview: () => {},
    currentTheme: z,
    resolvedTheme: dj(z),
    activeThemeOverrides: void 0,
    customThemes: [],
    activeCustomTheme: void 0,
    reloadCustomThemes: () => Promise.resolve(),
    setPreviewOverrides: () => {}
  });
function Xwn() {
  return bs("theme", "dark").value;
}
function Jwn(o) {
  let t = w(46),
    {
      children: children_2,
      initialState: initialState,
      onThemeSave: onThemeSave
    } = o,
    {
      storageV5: storageV5_2
    } = Oe(),
    C;
  if (t[0] !== onThemeSave || t[1] !== storageV5_2) C = q => onThemeSave ? onThemeSave(q) : HK("theme", q, storageV5_2), t[0] = onThemeSave, t[1] = storageV5_2, t[2] = C;else C = t[2];
  let I = C,
    [themeSetting, rt] = y(initialState ?? Xwn),
    [it, J] = y(null),
    [nt, setPreviewOverrides] = y(null),
    [K, mt] = y(scr),
    ve;
  if (t[3] === S) ve = C1(), t[3] = ve;else ve = t[3];
  let pluginThemes = ve.pluginThemes,
    Q = Dt(pluginThemes.subscribe, pluginThemes.getState),
    de;
  if (t[4] !== Q || t[5] !== K) de = [...K, ...Q], t[4] = Q, t[5] = K, t[6] = de;else de = t[6];
  let customThemes = de,
    Se;
  if (t[7] !== initialState || t[8] !== themeSetting) Se = () => (initialState ?? themeSetting) === "auto" ? mbe() : "dark", t[7] = initialState, t[8] = themeSetting, t[9] = Se;else Se = t[9];
  let [ot, O] = y(Se),
    m = it ?? themeSetting,
    ge;
  if (t[10] !== storageV5_2) ge = () => fCt(storageV5_2).then(mt), t[10] = storageV5_2, t[11] = ge;else ge = t[11];
  let reloadCustomThemes = ge,
    pe,
    fe;
  if (t[12] !== reloadCustomThemes) pe = () => (reloadCustomThemes(), acr(() => void reloadCustomThemes())), fe = [reloadCustomThemes], t[12] = reloadCustomThemes, t[13] = pe, t[14] = fe;else pe = t[13], fe = t[14];
  P(pe, fe);
  let {
      internal_querier: internal_querier
    } = T0(),
    Pe,
    we;
  if (t[15] !== m) Pe = () => {
    if (m !== "auto") {
      return;
    }
    return O(mbe()), pCt(() => O(mbe()));
  }, we = [m], t[15] = m, t[16] = Pe, t[17] = we;else Pe = t[16], we = t[17];
  P(Pe, we);
  let Ce, ye;
  if (t[18] !== m || t[19] !== internal_querier) Ce = () => {
    if (m !== "auto" || !internal_querier) {
      return;
    }
    let Ve;
    let Re = !1;
    return import("B:/~BUN/root/chunk-f3rcmj7a.js").then(H => {
      let {
        watchSystemTheme: watchSystemTheme
      } = H;
      if (Re) {
        return;
      }
      Ve = watchSystemTheme(internal_querier, O);
    }), () => {
      Re = !0, Ve?.();
    };
  }, ye = [m, internal_querier], t[18] = m, t[19] = internal_querier, t[20] = Ce, t[21] = ye;else Ce = t[20], ye = t[21];
  P(Ce, ye);
  let H;
  if (t[22] !== m) H = BI(m), t[22] = m, t[23] = H;else H = t[23];
  let R = H,
    ke;
  if (t[24] !== R || t[25] !== customThemes) ke = R ? customThemes.find(item => item.slug === R) : void 0, t[24] = R, t[25] = customThemes, t[26] = ke;else ke = t[26];
  let activeCustomTheme = ke,
    currentTheme = activeCustomTheme ? activeCustomTheme.base : m === "auto" ? ot : R ? "dark" : m,
    activeThemeOverrides = nt ?? activeCustomTheme?.overrides,
    xe;
  if (t[27] !== activeThemeOverrides || t[28] !== currentTheme) xe = sen(dj(currentTheme), activeThemeOverrides), t[27] = activeThemeOverrides, t[28] = currentTheme, t[29] = xe;else xe = t[29];
  let resolvedTheme = xe,
    _e;
  if (t[30] === S) _e = () => J(null), t[30] = _e;else _e = t[30];
  let cancelPreview = _e,
    setThemeSetting;
  if (t[31] !== I) setThemeSetting = X => {
    if (rt(X), J(null), X === "auto") O(mbe());
    I(X);
  }, t[31] = I, t[32] = setThemeSetting;else setThemeSetting = t[32];
  let setPreviewTheme;
  if (t[33] === S) setPreviewTheme = be => {
    if (J(be), be === "auto") O(mbe());
  }, t[33] = setPreviewTheme;else setPreviewTheme = t[33];
  let qe;
  if (t[34] !== activeCustomTheme || t[35] !== activeThemeOverrides || t[36] !== currentTheme || t[37] !== customThemes || t[38] !== reloadCustomThemes || t[39] !== resolvedTheme || t[40] !== setThemeSetting || t[41] !== themeSetting) qe = {
    themeSetting: themeSetting,
    setThemeSetting: setThemeSetting,
    setPreviewTheme: setPreviewTheme,
    cancelPreview: cancelPreview,
    currentTheme: currentTheme,
    resolvedTheme: resolvedTheme,
    activeThemeOverrides: activeThemeOverrides,
    customThemes: customThemes,
    activeCustomTheme: activeCustomTheme,
    reloadCustomThemes: reloadCustomThemes,
    setPreviewOverrides: setPreviewOverrides
  }, t[34] = activeCustomTheme, t[35] = activeThemeOverrides, t[36] = currentTheme, t[37] = customThemes, t[38] = reloadCustomThemes, t[39] = resolvedTheme, t[40] = setThemeSetting, t[41] = themeSetting, t[42] = qe;else qe = t[42];
  let value_2 = qe,
    He;
  if (t[43] !== children_2 || t[44] !== value_2) He = e(i.Provider, {
    value: value_2,
    children: children_2
  }), t[43] = children_2, t[44] = value_2, t[45] = He;else He = t[45];
  return He;
}
function br() {
  let s = w(3),
    {
      currentTheme: currentTheme_2,
      setThemeSetting: setThemeSetting_2
    } = Ee(i),
    n;
  if (s[0] !== currentTheme_2 || s[1] !== setThemeSetting_2) n = [currentTheme_2, setThemeSetting_2], s[0] = currentTheme_2, s[1] = setThemeSetting_2, s[2] = n;else n = s[2];
  return n;
}
function r7() {
  return Ee(i).themeSetting;
}
function Qwn() {
  let s = w(3),
    {
      setPreviewTheme: setPreviewTheme_2,
      cancelPreview: cancelPreview_2
    } = Ee(i),
    n;
  if (s[0] !== cancelPreview_2 || s[1] !== setPreviewTheme_2) n = {
    setPreviewTheme: setPreviewTheme_2,
    cancelPreview: cancelPreview_2
  }, s[0] = cancelPreview_2, s[1] = setPreviewTheme_2, s[2] = n;else n = s[2];
  return n;
}
function ew() {
  return Ee(i).resolvedTheme;
}
function Zwn() {
  return Ee(i).activeThemeOverrides;
}
function f_e() {
  let a = w(5),
    {
      customThemes: customThemes_2,
      activeCustomTheme: activeCustomTheme_2,
      reloadCustomThemes: reloadCustomThemes_2,
      setPreviewOverrides: setPreviewOverrides_2
    } = Ee(i),
    t;
  if (a[0] !== activeCustomTheme_2 || a[1] !== customThemes_2 || a[2] !== reloadCustomThemes_2 || a[3] !== setPreviewOverrides_2) t = {
    customThemes: customThemes_2,
    activeCustomTheme: activeCustomTheme_2,
    reloadCustomThemes: reloadCustomThemes_2,
    setPreviewOverrides: setPreviewOverrides_2
  }, a[0] = activeCustomTheme_2, a[1] = customThemes_2, a[2] = reloadCustomThemes_2, a[3] = setPreviewOverrides_2, a[4] = t;else t = a[4];
  return t;
}
export { T0, Xvt, Oe, Xwn, Jwn, br, r7, Qwn, ew, Zwn, f_e };