// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  Sq,
  gIn
} from "B:/~BUN/root/chunk-apgsnbqk.js";
import {
  GPe
} from "B:/~BUN/root/chunk-dwg8my6z.js";
import {
  S
} from "B:/~BUN/root/chunk-bn4bjw9d.js";
import {
  DK,
  E3r,
  oF,
  Bqt,
  C3r
} from "B:/~BUN/root/chunk-gh4155re.js";
import {
  Ei,
  IX
} from "B:/~BUN/root/chunk-sgy380eg.js";
import {
  e
} from "B:/~BUN/root/chunk-t16eynda.js";
import {
  YOe,
  Uqt
} from "B:/~BUN/root/chunk-qed5a8pe.js";
import {
  Jt,
  ue,
  ve,
  O,
  Z,
  y,
  At,
  j
} from "B:/~BUN/root/chunk-czy5r8bc.js";
import {
  w
} from "B:/~BUN/root/chunk-4qfwb3rf.js";
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
      storageV5: r,
      credentials: n,
      children: o
    } = m,
    t;
  if (a[0] !== n || a[1] !== r) t = r === void 0 && n === void 0 ? B : {
    storageV5: r,
    credentials: n
  }, a[0] = n, a[1] = r, a[2] = t;
  else t = a[2];
  let p = t,
    N;
  if (a[3] !== o || a[4] !== p) N = e(V.Provider, {
    value: p,
    children: o
  }), a[3] = o, a[4] = p, a[5] = N;
  else N = a[5];
  return N
}

function Fe() {
  return ve(V)
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
  return Ei("theme", "dark").value
}

function B5n(m) {
  let t = S(45),
    {
      children: r,
      initialState: n,
      onThemeSave: o
    } = m,
    {
      storageV5: a
    } = Fe(),
    p;
  if (t[0] !== o || t[1] !== a) p = (N) => o ? o(N) : IX("theme", N, a), t[0] = o, t[1] = a, t[2] = p;
  else p = t[2];
  let G = p,
    [T, tt] = y(n ?? U5n),
    [rt, I] = y(null),
    [it, nt] = y(null),
    [J, st] = y(E3r),
    le;
  if (t[3] === w) le = DK(), t[3] = le;
  else le = t[3];
  let de = le.pluginThemes,
    K = At(de.subscribe, de.getState),
    Se;
  if (t[4] !== K || t[5] !== J) Se = [...J, ...K], t[4] = K, t[5] = J, t[6] = Se;
  else Se = t[6];
  let u = Se,
    ge;
  if (t[7] !== n || t[8] !== T) ge = () => (n ?? T) === "auto" ? YOe() : "dark", t[7] = n, t[8] = T, t[9] = ge;
  else ge = t[9];
  let [mt, f] = y(ge), s = rt ?? T, pe;
  if (t[10] !== a) pe = () => Bqt(a).then(st), t[10] = a, t[11] = pe;
  else pe = t[11];
  let h = pe,
    fe, Pe;
  if (t[12] !== h) fe = () => (h(), C3r(() => void h())), Pe = [h], t[12] = h, t[13] = fe, t[14] = Pe;
  else fe = t[13], Pe = t[14];
  O(fe, Pe);
  let {
    internal_querier: P
  } = gB(), we, ye;
  if (t[15] !== s) we = () => {
    if (s !== "auto") {
      return
    }
    return f(YOe()), Uqt(() => f(YOe()))
  }, ye = [s], t[15] = s, t[16] = we, t[17] = ye;
  else we = t[16], ye = t[17];
  O(we, ye);
  let Ce, Oe;
  if (t[18] !== s || t[19] !== P) Ce = () => {
    if (s !== "auto" || !P) {
      return
    }
    let Ve;
    let Re = !1;
    return import("B:/~BUN/root/chunk-s62b9kyb.js").then((b) => {
      let {
        watchSystemTheme: ot
      } = b;
      if (Re) {
        return
      }
      Ve = ot(P, f)
    }), () => {
      Re = !0, Ve?.()
    }
  }, Oe = [s, P], t[18] = s, t[19] = P, t[20] = Ce, t[21] = Oe;
  else Ce = t[20], Oe = t[21];
  O(Ce, Oe);
  let b;
  if (t[22] !== s) b = oF(s), t[22] = s, t[23] = b;
  else b = t[23];
  let C = b,
    ke;
  if (t[24] !== C || t[25] !== u) ke = C ? u.find((at) => at.slug === C) : void 0, t[24] = C, t[25] = u, t[26] = ke;
  else ke = t[26];
  let Q = ke,
    v = Q ? Q.base : s === "auto" ? mt : C ? "dark" : s,
    l = it ?? Q?.overrides,
    xe;
  if (t[27] !== l || t[28] !== v) xe = gIn(Sq(v), l), t[27] = l, t[28] = v, t[29] = xe;
  else xe = t[29];
  let W = xe,
    _e;
  if (t[30] === w) _e = () => I(null), t[30] = _e;
  else _e = t[30];
  let ht = _e,
    q;
  if (t[31] !== G) q = (X) => {
    if (tt(X), I(null), X === "auto") f(YOe());
    G(X)
  }, t[31] = G, t[32] = q;
  else q = t[32];
  let Ne;
  if (t[33] === w) Ne = (be) => {
    if (I(be), be === "auto") f(YOe())
  }, t[33] = Ne;
  else Ne = t[33];
  let qe;
  if (t[34] !== l || t[35] !== v || t[36] !== u || t[37] !== h || t[38] !== W || t[39] !== q || t[40] !== T) qe = {
    themeSetting: T,
    setThemeSetting: q,
    setPreviewTheme: Ne,
    cancelPreview: ht,
    currentTheme: v,
    resolvedTheme: W,
    activeThemeOverrides: l,
    customThemes: u,
    reloadCustomThemes: h,
    setPreviewOverrides: nt
  }, t[34] = l, t[35] = v, t[36] = u, t[37] = h, t[38] = W, t[39] = q, t[40] = T, t[41] = qe;
  else qe = t[41];
  let ee = qe,
    He;
  if (t[42] !== r || t[43] !== ee) He = e(i.Provider, {
    value: ee,
    children: r
  }), t[42] = r, t[43] = ee, t[44] = He;
  else He = t[44];
  return He
}

function Br() {
  let n = S(3),
    {
      currentTheme: m,
      setThemeSetting: r
    } = ve(i),
    o;
  if (n[0] !== m || n[1] !== r) o = [m, r], n[0] = m, n[1] = r, n[2] = o;
  else o = n[2];
  return o
}

function fle() {
  return ve(i).themeSetting
}

function j5n() {
  let n = S(3),
    {
      setPreviewTheme: m,
      cancelPreview: r
    } = ve(i),
    o;
  if (n[0] !== r || n[1] !== m) o = {
    setPreviewTheme: m,
    cancelPreview: r
  }, n[0] = r, n[1] = m, n[2] = o;
  else o = n[2];
  return o
}

function ow() {
  return ve(i).resolvedTheme
}

function W5n() {
  return ve(i).activeThemeOverrides
}

function zPe() {
  let o = S(4),
    {
      customThemes: m,
      reloadCustomThemes: r,
      setPreviewOverrides: n
    } = ve(i),
    a;
  if (o[0] !== m || o[1] !== r || o[2] !== n) a = {
    customThemes: m,
    reloadCustomThemes: r,
    setPreviewOverrides: n
  }, o[0] = m, o[1] = r, o[2] = n, o[3] = a;
  else a = o[3];
  return a
}
export {
  o2t,
  Fe,
  gB,
  U5n,
  B5n,
  Br,
  fle,
  j5n,
  ow,
  W5n,
  zPe
};
