// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.303
import {
  F
} from "B:/~BUN/root/chunk-rpez7z7a.js";
import {
  qs,
  EQ,
  K5
} from "B:/~BUN/root/chunk-nggrknsv.js";
import {
  tt
} from "B:/~BUN/root/chunk-hb6x4e3n.js";
import {
  br
} from "B:/~BUN/root/chunk-g5gf7tps.js";
import {
  w
} from "B:/~BUN/root/chunk-rysqv8v1.js";
import {
  zte,
  he
} from "B:/~BUN/root/chunk-4qqgabd5.js";
import {
  mt
} from "B:/~BUN/root/chunk-pjgzz98k.js";
import {
  eyt
} from "B:/~BUN/root/chunk-htbmes7q.js";
import {
  s,
  n,
  zt,
  Go,
  ot,
  Ek,
  zCe,
  xa,
  Dr
} from "B:/~BUN/root/chunk-damrp3r8.js";
import {
  gY,
  LF
} from "B:/~BUN/root/chunk-1jz9m9yh.js";
import {
  oc
} from "B:/~BUN/root/chunk-t7y4rt40.js";
import {
  Ev
} from "B:/~BUN/root/chunk-sk7eej8z.js";
import {
  E0,
  El
} from "B:/~BUN/root/chunk-5xxjpbgm.js";
import {
  Fo
} from "B:/~BUN/root/chunk-tgzmva3g.js";
import {
  Ra
} from "B:/~BUN/root/chunk-aw9w2cra.js";
import {
  xy
} from "B:/~BUN/root/chunk-vw193yjw.js";
import {
  PI
} from "B:/~BUN/root/chunk-dwajd7kx.js";
import {
  us
} from "B:/~BUN/root/chunk-b900np4s.js";
import {
  Te
} from "B:/~BUN/root/chunk-smy4yvhm.js";
import {
  Zl
} from "B:/~BUN/root/chunk-ps74es0g.js";
import {
  q
} from "B:/~BUN/root/chunk-bf7csy4f.js";
import {
  d_
} from "B:/~BUN/root/chunk-653rvs3k.js";
import {
  ft
} from "B:/~BUN/root/chunk-jh7dpafw.js";
import {
  rt,
  on
} from "B:/~BUN/root/chunk-pw5vpw1q.js";
import {
  Se
} from "B:/~BUN/root/chunk-7dpyfa5r.js";
import {
  Uwn,
  K2t,
  Lr
} from "B:/~BUN/root/chunk-rxj6qxcq.js";
import {
  Kl
} from "B:/~BUN/root/chunk-9grc6xh0.js";
import {
  J0
} from "B:/~BUN/root/chunk-k382hx6g.js";
import {
  te
} from "B:/~BUN/root/chunk-9tx73f8x.js";
import {
  u9o
} from "B:/~BUN/root/chunk-54b5252d.js";
import {
  hS,
  Gvt
} from "B:/~BUN/root/chunk-a8k6kvgb.js";
import {
  gt
} from "B:/~BUN/root/chunk-vs438w4e.js";
import {
  Q,
  e,
  r
} from "B:/~BUN/root/chunk-x2hkxw5q.js";
import {
  Kn
} from "B:/~BUN/root/chunk-dsby0gnt.js";
import {
  mue
} from "B:/~BUN/root/chunk-tx0dq5y3.js";
import {
  S_,
  Kd,
  qt,
  Mm,
  ae,
  Ee,
  P,
  Mo,
  Jt,
  Z,
  A,
  y,
  B
} from "B:/~BUN/root/chunk-5hr2ysa5.js";
import {
  ie
} from "B:/~BUN/root/chunk-t7350kw8.js";
import {
  S
} from "B:/~BUN/root/chunk-ef0msk7r.js";
B();

function Za(t = E0) {
  let o = xa(),
    i = A(Date.now());
  return ae(() => El(o, i.current, t), [o, t])
}

function l_() {
  return A(Date.now()).current
}

function rc(t, o = E0) {
  let i = Dr(o, t);
  return {
    remountKey: i ? "settled" : "held",
    settled: i
  }
}

function G2t() {
  let [t, o] = y(0), i = ae(() => o((a) => a + 1), []);
  return {
    epoch: t,
    noteAttempt: i
  }
}

function cs() {
  let t = xa(),
    o = A(null),
    {
      epoch: i,
      noteAttempt: a
    } = G2t(),
    l = ae((c = E0) => o.current !== null && El(t, o.current, c), [t]),
    m = ae(() => {
      o.current = Date.now(), a()
    }, [a]);
  return {
    refusedWithin: l,
    noteRefused: m,
    epoch: i
  }
}
B();

function Ha(x) {
  return Mm(x) ? x.key : ""
}
var vR = "userMessageBackground";

function $Ce(t = "tint") {
  return he.level === 0 ? "inverse" : t
}
var to = qt("");

function UCe(t) {
  let o = w(14),
    i, a;
  if (o[0] !== t)({
    windowStart: a,
    ...i
  } = t), o[0] = t, o[1] = i, o[2] = a;
  else i = o[1], a = o[2];
  let l = a === void 0 ? 0 : a,
    m, c, u;
  if (o[3] !== i.children || o[4] !== l) {
    let g = S_.toArray(i.children).map(Ha);
    m = to.Provider;
    c = l;
    u = g.join();
    o[3] = i.children, o[4] = l, o[5] = m, o[6] = c, o[7] = u
  } else m = o[5], c = o[6], u = o[7];
  const d = `${c} ${u}`;
  let b;
  if (o[8] !== i) b = e(s, {
    flexDirection: "column",
    ...i
  }), o[8] = i, o[9] = b;
  else b = o[9];
  let D;
  if (o[10] !== m || o[11] !== d || o[12] !== b) D = e(m, {
    value: d,
    children: b
  }), o[10] = m, o[11] = d, o[12] = b, o[13] = D;
  else D = o[13];
  return D
}

function BVe(t) {
  let m = w(5),
    o = Ee(to),
    [i, a] = y(null),
    l = t && i === o;
  if (i !== null && !l) a(null);
  let c;
  if (m[0] !== o) c = (u) => a(u ? o : null), m[0] = o, m[1] = c;
  else c = m[1];
  let g;
  if (m[2] !== l || m[3] !== c) g = [l, c], m[2] = l, m[3] = c, m[4] = g;
  else g = m[4];
  return g
}

function kR(t) {
  let H = w(47),
    {
      isFocused: o,
      isSelected: i,
      children: a,
      description: l,
      showScrollDown: m,
      showScrollUp: c,
      styled: u,
      disabled: g,
      idle: d,
      declareCursor: b,
      onClick: D,
      hoverStyle: x,
      onHoverChange: I
    } = t,
    W = i === void 0 ? !1 : i,
    N = u === void 0 ? !0 : u,
    h = g === void 0 ? !1 : g,
    K = d === void 0 ? !1 : d,
    f = x === void 0 ? "tint" : x,
    M = !h && D !== void 0,
    C = !h && (D !== void 0 || I !== void 0),
    [O, L] = BVe(C),
    V = O && M,
    R = $Ce(f),
    v;
  if (H[0] !== I || H[1] !== L) v = (ue) => {
    L(ue), I?.(ue)
  }, H[0] = I, H[1] = L, H[2] = v;
  else v = H[2];
  let ge = v,
    G;
  if (H[3] !== h || H[4] !== K || H[5] !== o || H[6] !== W || H[7] !== N) G = function Y() {
    if (h) {
      return "inactive"
    }
    if (!N) {
      return
    }
    if (W) {
      return "success"
    }
    if (o && !K) {
      return "suggestion"
    }
  }, H[3] = h, H[4] = K, H[5] = o, H[6] = W, H[7] = N, H[8] = G;
  else G = H[8];
  let Y = G,
    Ie = Y();
  const pe = o && !h && b !== !1;
  let X;
  if (H[9] !== pe) X = {
    line: 0,
    column: 0,
    active: pe
  }, H[9] = pe, H[10] = X;
  else X = H[10];
  let T = Ek(X);
  const ve = V && R === "tint" ? vR : void 0,
    U = M ? D : void 0;
  let fe;
  if (H[11] !== C || H[12] !== ge) fe = C ? () => ge(!0) : void 0, H[11] = C, H[12] = ge, H[13] = fe;
  else fe = H[13];
  let J;
  if (H[14] !== C || H[15] !== ge) J = C ? () => ge(!1) : void 0, H[14] = C, H[15] = ge, H[16] = J;
  else J = H[16];
  const re = V && R === "pointer",
    Oe = V && R === "inverse";
  let Ve;
  if (H[17] !== h || H[18] !== K || H[19] !== o || H[20] !== m || H[21] !== c || H[22] !== re || H[23] !== Oe) Ve = e(s, {
    flexShrink: 0,
    children: e(si, {
      disabled: h,
      isFocused: o,
      idle: K,
      showScrollUp: c,
      showScrollDown: m,
      hovered: re,
      inverse: Oe
    })
  }), H[17] = h, H[18] = K, H[19] = o, H[20] = m, H[21] = c, H[22] = re, H[23] = Oe, H[24] = Ve;
  else Ve = H[24];
  let ne;
  if (H[25] !== a || H[26] !== h || H[27] !== N || H[28] !== Ie) ne = N ? e(n, {
    color: Ie,
    dimColor: h,
    wrap: "truncate-end",
    children: a
  }) : a, H[25] = a, H[26] = h, H[27] = N, H[28] = Ie, H[29] = ne;
  else ne = H[29];
  let E;
  if (H[30] !== h || H[31] !== W) E = W && !h && e(s, {
    flexShrink: 0,
    children: e(n, {
      "aria-label": "(selected)",
      color: "success",
      children: te.tick
    })
  }), H[30] = h, H[31] = W, H[32] = E;
  else E = H[32];
  let ye;
  if (H[33] !== Ve || H[34] !== ne || H[35] !== E) ye = r(s, {
    flexDirection: "row",
    gap: 1,
    children: [Ve, ne, E]
  }), H[33] = Ve, H[34] = ne, H[35] = E, H[36] = ye;
  else ye = H[36];
  let ee;
  if (H[37] !== l) ee = l && e(s, {
    paddingLeft: 2,
    children: e(n, {
      dimColor: !0,
      wrap: "truncate-end",
      children: l
    })
  }), H[37] = l, H[38] = ee;
  else ee = H[38];
  let $e;
  if (H[39] !== T || H[40] !== ve || H[41] !== U || H[42] !== fe || H[43] !== J || H[44] !== ye || H[45] !== ee) $e = r(s, {
    ref: T,
    flexDirection: "column",
    backgroundColor: ve,
    onClick: U,
    onMouseEnter: fe,
    onMouseLeave: J,
    children: [ye, ee]
  }), H[39] = T, H[40] = ve, H[41] = U, H[42] = fe, H[43] = J, H[44] = ye, H[45] = ee, H[46] = $e;
  else $e = H[46];
  return $e
}

function si(t) {
  let g = w(12),
    {
      disabled: o,
      isFocused: i,
      idle: a,
      showScrollUp: l,
      showScrollDown: m,
      hovered: c,
      inverse: u
    } = t;
  if (o) {
    let d;
    if (g[0] === S) d = e(n, {
      "aria-hidden": !0,
      children: " "
    }), g[0] = d;
    else d = g[0];
    return d
  }
  if (i) {
    const d = a ? void 0 : "suggestion";
    let b;
    if (g[1] !== a || g[2] !== u || g[3] !== d) b = e(n, {
      "aria-hidden": !0,
      color: d,
      dimColor: a,
      inverse: u,
      children: te.pointer
    }), g[1] = a, g[2] = u, g[3] = d, g[4] = b;
    else b = g[4];
    return b
  }
  if (m) {
    let d;
    if (g[5] !== u) d = e(n, {
      "aria-label": "(more below)",
      dimColor: !0,
      inverse: u,
      children: te.arrowDown
    }), g[5] = u, g[6] = d;
    else d = g[6];
    return d
  }
  if (l) {
    let d;
    if (g[7] !== u) d = e(n, {
      "aria-label": "(more above)",
      dimColor: !0,
      inverse: u,
      children: te.arrowUp
    }), g[7] = u, g[8] = d;
    else d = g[8];
    return d
  }
  if (c) {
    let d;
    if (g[9] === S) d = e(n, {
      "aria-hidden": !0,
      dimColor: !0,
      children: te.pointer
    }), g[9] = d;
    else d = g[9];
    return d
  }
  let d;
  if (g[10] !== u) d = e(n, {
    "aria-hidden": !0,
    inverse: u,
    children: " "
  }), g[10] = u, g[11] = d;
  else d = g[11];
  return d
}
B();

function Yu(kt) {
  return String(kt.value)
}

function Ju() {
  return null
}

function Xu() {
  return ""
}

function Qu() {
  return null
}

function Zu() {
  return ""
}

function ed() {
  return ""
}

function td() {
  return null
}

function nd() {
  return ""
}

function od() {
  return ""
}

function id() {
  return null
}

function sd() {
  return ""
}

function rd() {
  return null
}

function ld() {
  return null
}

function ad() {
  return ""
}

function ud(ct) {
  return ct.type !== "input"
}

function dd() {
  return ""
}

function cd() {
  return null
}

function pd(ea) {
  return String(ea.value)
}

function fd() {
  return null
}

function md() {
  return null
}

function hd() {
  return ""
}

function bd() {
  return null
}

function gd() {
  return ""
}

function vd() {
  return ""
}

function xd() {
  return null
}

function Id() {
  return null
}

function yd() {
  return null
}

function Sd() {
  return ""
}

function wd() {
  return ""
}

function Cd() {
  return ""
}

function Od() {
  return ""
}

function Td() {
  return null
}

function Dd() {
  return null
}

function Vd() {
  return null
}

function Fd(os) {
  return os.type !== "input"
}

function kd() {
  return ""
}

function Rd(ta, na) {
  return ta - na
}

function Md(is) {
  return String(is + 1)
}

function Ed() {
  return null
}

function Pd() {
  return ""
}

function Ad() {
  return null
}

function Wd() {
  return null
}

function Bd() {
  return ""
}

function Nd() {
  return ""
}

function Ld(Ve) {
  return Ve.slice(0, -1)
}

function ze(t) {
  let l = w(3),
    [o, i] = y(t),
    a = A(t),
    m;
  if (l[0] === S) m = (c) => {
    a.current = c(a.current), i(a.current)
  }, l[0] = m;
  else m = l[0];
  let u = m,
    g;
  if (l[1] !== o) g = [o, a, u], l[1] = o, l[2] = g;
  else g = l[2];
  return g
}

function Zt() {
  return ze("")
}

function wo(t) {
  if (t.length <= 1) return t[0] ?? "";
  if (t.length === 2) return `${t[0]} or ${t[1]}`;
  return `${t.slice(0,-1).join(", ")}, or ${t.at(-1)}`
}
var ri = 300;

function qa(t) {
  return ` \u2026 +${t} more characters`
}

function Ps(t) {
  if (t.length <= ri) return t;
  let o = qs(t, ri);
  if (o === t) return t;
  let i = [...t].length - ri;
  return o + qa(i)
}

function Ci(t, o) {
  let m = w(18),
    i = o === void 0 ? E0 : o,
    a = xa(),
    l = Za(i),
    c;
  if (m[0] !== t || m[1] !== a || m[2] !== l || m[3] !== i) c = t === void 0 ? l : () => El(a, t, i), m[0] = t, m[1] = a, m[2] = l, m[3] = i, m[4] = c;
  else c = m[4];
  let u = c,
    {
      refusedWithin: g,
      noteRefused: d
    } = cs(),
    b;
  if (m[5] !== u || m[6] !== d || m[7] !== g || m[8] !== i) b = () => {
    if (u() || g(i)) {
      return d(), !0
    }
    return !1
  }, m[5] = u, m[6] = d, m[7] = g, m[8] = i, m[9] = b;
  else b = m[9];
  let D = b,
    x;
  if (m[10] !== u || m[11] !== d || m[12] !== g || m[13] !== i) x = () => {
    if (!u() && !g(i)) {
      return !1
    }
    return d(), !0
  }, m[10] = u, m[11] = d, m[12] = g, m[13] = i, m[14] = x;
  else x = m[14];
  let I = x,
    W;
  if (m[15] !== D || m[16] !== I) W = {
    refuse: D,
    refuseCharacter: I
  }, m[15] = D, m[16] = I, m[17] = W;
  else W = m[17];
  return W
}

function e7(t) {
  let O = w(73),
    {
      options: o,
      onChange: i,
      onFocus: a,
      onCancel: l,
      isDisabled: m,
      disableSelection: c,
      defaultValue: u,
      refuseInput: g,
      headings: d,
      drawLabels: b,
      hidePromptWhileDisabled: D
    } = t,
    x = m === void 0 ? !1 : m,
    I = c === void 0 ? !1 : c,
    W = b === void 0 ? !1 : b,
    N = D === void 0 ? !1 : D,
    [h, K, f] = Zt(),
    [M, C] = y(null),
    L;
  if (O[0] === S) L = eyt(), O[0] = L;
  else L = O[0];
  let V = L,
    [R, H, v] = ze(null),
    ue;
  if (O[1] !== o) ue = o.map(Yu).join("\x00"), O[1] = o, O[2] = ue;
  else ue = O[2];
  let ge = ue,
    [G, Y] = y(ge);
  if (G !== ge) Y(ge), v(Ju), f(Xu);
  let [Ie, pe, X] = ze(null);
  if (G !== ge && Ie !== null) X(Qu), f(Zu);
  let T = Ie !== null && o[Ie - 1]?.type === "input" ? o[Ie - 1] : null,
    ve = A(null);
  xy(ve, !x), Ra("select", !!l && !x);
  let U;
  if (O[3] !== I || O[4] !== T || O[5] !== i || O[6] !== a || O[7] !== o || O[8] !== f || O[9] !== v || O[10] !== X) U = (fe) => {
    if (I) {
      return
    }
    if (T) {
      if (fe === "" && !T.screenReaderEmptySubmit) {
        C("Enter some text, or Escape for the list.");
        return
      }
      if (i?.(T.value) === !1) {
        return
      }
      f(ed), X(td);
      return
    }
    let J = Number.parseInt(fe, 10);
    if (!Number.isFinite(J) || J < 1 || J > o.length) {
      C(o.length === 0 ? `Invalid selection "${fe}". Nothing to select.` : `Invalid selection "${fe}". Enter a number between 1 and ${o.length}.`), f(nd);
      return
    }
    let re = o[J - 1];
    if (re.disabled) {
      C(`Option ${J} is disabled.`), f(od);
      return
    }
    if (re.type === "input") {
      X(() => J), v(id);
      let Oe = re.initialValue ?? "";
      f(() => Oe), re.onChange(Oe), a?.(re.value);
      return
    }
    if (i?.(re.value) === !1) {
      return
    }
    f(sd), v(rd)
  }, O[3] = I, O[4] = T, O[5] = i, O[6] = a, O[7] = o, O[8] = f, O[9] = v, O[10] = X, O[11] = U;
  else U = O[11];
  let Ve = U,
    ne;
  if (O[12] !== K || O[13] !== I || O[14] !== H || O[15] !== T || O[16] !== pe || O[17] !== x || O[18] !== l || O[19] !== a || O[20] !== o || O[21] !== g || O[22] !== f || O[23] !== v || O[24] !== X || O[25] !== Ve) ne = (E) => {
    if (x) {
      return
    }
    if (E.key === "escape" && E.name === "escape") {
      if (E.preventDefault(), T) {
        X(ld), f(ad);
        let ye = o.find(ud) ?? o[0];
        if (ye) a?.(ye.value);
        return
      }
      l?.();
      return
    }
    if (I) {
      return
    }
    if (E.key === "return" && E.name === "return") {
      if (E.preventDefault(), g?.()) {
        return
      }
      if (T || K.current.length > 0) {
        Ve(K.current);
        return
      }
      if (V && H.current !== null) Ve(String(H.current + 1));
      return
    }
    if (E.key === "backspace" || E.key === "delete") {
      E.preventDefault();
      let ee = K.current.slice(0, -1);
      if (T && T.onChange(ee) === !1) {
        return
      }
      f(() => ee);
      return
    }
    if (V && !T && pe.current === null && (E.name === "up" || E.name === "down")) {
      if (E.preventDefault(), g?.()) {
        return
      }
      C(null), f(dd);
      let $e = o.length;
      if ($e === 0) {
        return
      }
      let we = H.current;
      let ut = we === null ? E.name === "down" ? 0 : $e - 1 : (we + (E.name === "down" ? 1 : -1) + $e) % $e;
      v(() => ut);
      let Ae = o[ut];
      if (Ae) a?.(Ae.value);
      return
    }
    if (T) {
      if (E.key.length === 1 && !E.ctrl && !E.meta) {
        E.preventDefault();
        let Wt = K.current + E.key;
        if (T.onChange(Wt) === !1) {
          return
        }
        f(() => Wt)
      }
      return
    }
    let Vt = EQ(E.key);
    if (/^[0-9]$/.test(Vt)) {
      if (E.preventDefault(), g?.()) {
        return
      }
      C(null), f((Bt) => Bt + Vt), v(cd)
    }
  }, O[12] = K, O[13] = I, O[14] = H, O[15] = T, O[16] = pe, O[17] = x, O[18] = l, O[19] = a, O[20] = o, O[21] = g, O[22] = f, O[23] = v, O[24] = X, O[25] = Ve, O[26] = ne;
  else ne = O[26];
  let Fe = ne,
    It;
  if (O[27] !== h || O[28] !== T || O[29] !== Ie || O[30] !== l || O[31] !== o.length) It = T ? `Enter text for option ${Ie} (${PI(T.label)}), or Escape for the list: ${h}` : o.length === 0 ? `Nothing to select${l?". Escape to cancel":""}: ${h}` : `Select with numbers [1-${o.length}]${V?" or up / down arrow keys":""}. Then ${wo(["Enter to submit",...l?["Escape to cancel"]:[]])}: ${h}`, O[27] = h, O[28] = T, O[29] = Ie, O[30] = l, O[31] = o.length, O[32] = It;
  else It = O[32];
  let He = It,
    ke;
  if (O[33] !== He) ke = ie(He), O[33] = He, O[34] = ke;
  else ke = O[34];
  const lt = !x && !I && R === null;
  let qe;
  if (O[35] !== ke || O[36] !== lt) qe = {
    line: 0,
    column: ke,
    active: lt,
    visible: !0
  }, O[35] = ke, O[36] = lt, O[37] = qe;
  else qe = O[37];
  let at = Ek(qe),
    dt;
  if (O[38] !== Fe || O[39] !== x) dt = x ? {} : {
    tabIndex: 0,
    onKeyDown: Fe
  }, O[38] = Fe, O[39] = x, O[40] = dt;
  else dt = O[40];
  let De;
  if (O[41] !== u || O[42] !== I || O[43] !== W || O[44] !== R || O[45] !== d || O[46] !== x || O[47] !== o) {
    let We;
    if (O[49] !== u || O[50] !== I || O[51] !== W || O[52] !== R || O[53] !== d || O[54] !== x) We = (p, Ft) => r(Kd, {
      children: [d?.get(Ft), e(Bn, {
        index: Ft + 1,
        option: p,
        selected: u !== void 0 && p.value === u,
        focused: R === Ft && !x && !I,
        drawLabel: W
      })]
    }, String(p.value)), O[49] = u, O[50] = I, O[51] = W, O[52] = R, O[53] = d, O[54] = x, O[55] = We;
    else We = O[55];
    De = o.map(We);
    O[41] = u, O[42] = I, O[43] = W, O[44] = R, O[45] = d, O[46] = x, O[47] = o, O[48] = De
  } else De = O[48];
  let We;
  if (O[56] !== d || O[57] !== o.length) We = d?.get(o.length), O[56] = d, O[57] = o.length, O[58] = We;
  else We = O[58];
  let yt;
  if (O[59] !== M) yt = M && e(n, {
    children: M
  }), O[59] = M, O[60] = yt;
  else yt = O[60];
  let Be;
  if (O[61] !== at || O[62] !== I || O[63] !== N || O[64] !== x || O[65] !== He) Be = !I && !(x && N) && e(s, {
    ref: at,
    children: e(n, {
      children: He
    })
  }), O[61] = at, O[62] = I, O[63] = N, O[64] = x, O[65] = He, O[66] = Be;
  else Be = O[66];
  let St;
  if (O[67] !== dt || O[68] !== De || O[69] !== We || O[70] !== yt || O[71] !== Be) St = r(s, {
    ref: ve,
    flexDirection: "column",
    ...dt,
    children: [De, We, yt, Be]
  }), O[67] = dt, O[68] = De, O[69] = We, O[70] = yt, O[71] = Be, O[72] = St;
  else St = O[72];
  return St
}

function Tnr(t) {
  let b = w(91),
    {
      options: o,
      defaultValue: i,
      onChange: a,
      onSubmit: l,
      onFocus: m,
      onCancel: c,
      isDisabled: u,
      submitButtonText: g,
      refuseInput: d
    } = t,
    D;
  if (b[0] !== i) D = i === void 0 ? [] : i, b[0] = i, b[1] = D;
  else D = b[1];
  let x = D,
    I = u === void 0 ? !1 : u,
    [W, N, h] = Zt(),
    [K, f] = y(null),
    M;
  if (b[2] === S) M = eyt(), b[2] = M;
  else M = b[2];
  let C = M,
    [O, L, V] = ze(null),
    [R, H, v] = ze(null),
    ue;
  if (b[3] !== o) ue = o.map(pd).join("\x00"), b[3] = o, b[4] = ue;
  else ue = b[4];
  let ge = ue,
    [G, Y] = y(ge);
  if (G !== ge) Y(ge), V(fd), v(md), h(hd);
  let Ie;
  if (b[5] !== x || b[6] !== o) Ie = () => new Set(o.flatMap((pe, X) => !pe.disabled && x.includes(pe.value) ? [X] : [])), b[5] = x, b[6] = o, b[7] = Ie;
  else Ie = b[7];
  let T = Ie,
    [ve, U] = y(null),
    fe = A(!1),
    J = A(!1),
    re;
  if (b[8] !== l || b[9] !== ve) re = () => {
    if (ve !== null) {
      let Oe = [...ve];
      U(null), fe.current = !1, l?.(Oe)
    }
  }, b[8] = l, b[9] = ve, b[10] = re;
  else re = b[10];
  let Ve;
  if (b[11] !== ve) Ve = [ve], b[11] = ve, b[12] = Ve;
  else Ve = b[12];
  P(re, Ve);
  let [ne, E, ye] = ze(null);
  if (G !== ge && ne !== null) ye(bd), h(gd);
  let ee = ne && o[ne.index - 1]?.type === "input" ? o[ne.index - 1] : null,
    $e = A(null);
  xy($e, !I), Ra("multi-select", !!c && !I);
  let we;
  if (b[13] !== a || b[14] !== h || b[15] !== V || b[16] !== ye || b[17] !== v) we = (ut) => {
    if (fe.current = !0, a?.([...ut]) === !1) {
      fe.current = !1;
      return
    }
    U(ut), h(vd), ye(xd), V(Id), v(yd)
  }, b[13] = a, b[14] = h, b[15] = V, b[16] = ye, b[17] = v, b[18] = we;
  else we = b[18];
  let Ae = we,
    Wt;
  if (b[19] !== x || b[20] !== Ae || b[21] !== ee || b[22] !== ne || b[23] !== m || b[24] !== o || b[25] !== h || b[26] !== V || b[27] !== ye || b[28] !== v) Wt = (Vt) => {
    if (ee && ne) {
      if (Vt === "") {
        f("Enter some text, or Escape for the list.");
        return
      }
      Ae([...ne.stashed, ee.value]);
      return
    }
    let Bt = Vt.trim();
    if (Bt === "") {
      Ae(x);
      return
    }
    let Fe = Bt.split(/[\s,]+/).filter(Boolean);
    if (Fe.length === 0) {
      Ae(x);
      return
    }
    let It = new Set;
    let He = [];
    let ke = null;
    for (const lt of Fe) {
      if (!/^\d+$/.test(lt)) {
        f(`Invalid selection "${lt}". Enter numbers between 1 and ${o.length}, comma- or space-separated.`), h(Sd);
        return
      }
      let qe = Number.parseInt(lt, 10);
      if (It.has(qe)) {
        continue
      }
      if (It.add(qe), qe < 1 || qe > o.length) {
        f(`Invalid selection "${lt}". Enter numbers between 1 and ${o.length}, comma- or space-separated.`), h(wd);
        return
      }
      let at = o[qe - 1];
      if (at.disabled) {
        f(`Option ${qe} is disabled.`), h(Cd);
        return
      }
      if (at.type === "input") {
        if (ke) {
          f("Only one free-text option can be included per selection."), h(Od);
          return
        }
        ke = {
          index: qe,
          opt: at
        };
        continue
      }
      He.push(at.value)
    }
    if (ke?.opt) {
      ye(() => ({
        index: ke.index,
        stashed: He,
        raw: Bt
      })), V(Td), v(Dd);
      let dt = ke.opt.initialValue ?? "";
      h(() => dt), ke.opt.onChange(dt), m?.(ke.opt.value);
      return
    }
    Ae(He)
  }, b[19] = x, b[20] = Ae, b[21] = ee, b[22] = ne, b[23] = m, b[24] = o, b[25] = h, b[26] = V, b[27] = ye, b[28] = v, b[29] = Wt;
  else Wt = b[29];
  let De = Wt,
    We;
  if (b[30] !== N || b[31] !== T || b[32] !== Ae || b[33] !== L || b[34] !== ee || b[35] !== ne || b[36] !== E || b[37] !== I || b[38] !== c || b[39] !== m || b[40] !== o || b[41] !== d || b[42] !== h || b[43] !== V || b[44] !== ye || b[45] !== v || b[46] !== De || b[47] !== H) We = (p) => {
    if (I) {
      return
    }
    if (p.key === "escape" && p.name === "escape") {
      if (p.preventDefault(), ne) {
        let {
          raw: Ft
        } = ne;
        ye(Vd), h(() => Ft);
        let yt = o.find(Fd) ?? o[0];
        if (yt) m?.(yt.value);
        return
      }
      c?.();
      return
    }
    if (p.key === "return" && p.name === "return") {
      if (p.preventDefault(), J.current) {
        d?.(), J.current = !1, h(kd), f("Part of that entry arrived before the list was ready \u2014 enter your selection again.");
        return
      }
      if (d?.()) {
        return
      }
      if (fe.current) {
        return
      }
      if (C && !ee && N.current.length === 0 && H.current !== null) {
        let Be = [...H.current].sort(Rd);
        if (Be.length === 0) Ae([]);
        else De(Be.map(Md).join(" "));
        return
      }
      De(N.current);
      return
    }
    if (p.key === "backspace" || p.key === "delete") {
      p.preventDefault();
      let St = N.current;
      let kt = St.slice(0, -1);
      if (ee && ee.onChange(kt) === !1) {
        return
      }
      if (h(() => kt), !ee && St !== kt) v(Ed);
      return
    }
    if (C && !ee && E.current === null && (p.name === "up" || p.name === "down")) {
      if (p.preventDefault(), d?.()) {
        return
      }
      f(null), h(Pd), J.current = !1;
      let ct = o.length;
      if (ct === 0) {
        return
      }
      let rn = L.current;
      let je = rn === null ? p.name === "down" ? 0 : ct - 1 : (rn + (p.name === "down" ? 1 : -1) + ct) % ct;
      V(() => je);
      let Nt = o[je];
      if (Nt) m?.(Nt.value);
      return
    }
    if (C && !ee && E.current === null && L.current !== null && K5(p.key) === " ") {
      if (p.preventDefault(), d?.()) {
        return
      }
      let Ye = L.current;
      let ln = o[Ye];
      if (!ln) {
        return
      }
      if (ln.disabled) {
        f(`Option ${Ye+1} is disabled.`);
        return
      }
      f(null), v((Gn) => {
        let Lt = new Set(Gn ?? T());
        if (Lt.has(Ye)) Lt.delete(Ye);
        else Lt.add(Ye);
        return Lt
      });
      return
    }
    if (ee) {
      if (p.key.length === 1 && !p.ctrl && !p.meta) {
        p.preventDefault();
        let qn = N.current + p.key;
        if (ee.onChange(qn) === !1) {
          return
        }
        h(() => qn)
      }
      return
    }
    let Yn = K5(EQ(p.key)).replace("\uFF0C", ",").replace("\u3001", ",");
    if (/^[0-9, ]$/.test(Yn)) {
      if (p.preventDefault(), J.current) {
        d?.();
        return
      }
      if (d?.()) {
        J.current = !0;
        return
      }
      f(null), h((pt) => pt + Yn), V(Ad), v(Wd)
    }
  }, b[30] = N, b[31] = T, b[32] = Ae, b[33] = L, b[34] = ee, b[35] = ne, b[36] = E, b[37] = I, b[38] = c, b[39] = m, b[40] = o, b[41] = d, b[42] = h, b[43] = V, b[44] = ye, b[45] = v, b[46] = De, b[47] = H, b[48] = We;
  else We = b[48];
  let an = We,
    wt;
  if (b[49] !== W || b[50] !== x || b[51] !== ee || b[52] !== ne?.index || b[53] !== c || b[54] !== o.length || b[55] !== g || b[56] !== R) wt = ee ? `Enter text for option ${ne?.index} (${PI(ee.label)}), or Escape for the list: ${W}` : `Select with numbers [1-${o.length}] (comma- or space-separated for several)${C?" or up / down arrow keys":""}. Then ${wo([...C?["Space to toggle"]:[],`Enter to ${g??"submit"}`,...x.length>0&&R===null?["bare Enter for defaults"]:[],...c?["Escape to cancel"]:[]])}: ${W}`, b[49] = W, b[50] = x, b[51] = ee, b[52] = ne?.index, b[53] = c, b[54] = o.length, b[55] = g, b[56] = R, b[57] = wt;
  else wt = b[57];
  let Ct = wt,
    ht;
  if (b[58] !== Ct) ht = ie(Ct), b[58] = Ct, b[59] = ht;
  else ht = b[59];
  const Je = !I && O === null;
  let un;
  if (b[60] !== ht || b[61] !== Je) un = {
    line: 0,
    column: ht,
    active: Je,
    visible: !0
  }, b[60] = ht, b[61] = Je, b[62] = un;
  else un = b[62];
  let z = Ek(un),
    dn;
  if (b[63] !== x) dn = new Set(x), b[63] = x, b[64] = dn;
  else dn = b[64];
  let bt = dn,
    Ut;
  if (b[65] !== an || b[66] !== I) Ut = I ? {} : {
    tabIndex: 0,
    onKeyDown: an
  }, b[65] = an, b[66] = I, b[67] = Ut;
  else Ut = b[67];
  let cn;
  if (b[68] !== bt || b[69] !== O || b[70] !== I || b[71] !== o || b[72] !== R) {
    let Qe;
    if (b[74] !== bt || b[75] !== O || b[76] !== I || b[77] !== R) Qe = (On, pn) => e(Bn, {
      index: pn + 1,
      option: On,
      selected: R ? R.has(pn) : bt.has(On.value),
      focused: O === pn && !I
    }, String(On.value)), b[74] = bt, b[75] = O, b[76] = I, b[77] = R, b[78] = Qe;
    else Qe = b[78];
    cn = o.map(Qe);
    b[68] = bt, b[69] = O, b[70] = I, b[71] = o, b[72] = R, b[73] = cn
  } else cn = b[73];
  let Qe;
  if (b[79] !== K) Qe = K && e(n, {
    children: K
  }), b[79] = K, b[80] = Qe;
  else Qe = b[80];
  let fn;
  if (b[81] !== Ct) fn = e(n, {
    children: Ct
  }), b[81] = Ct, b[82] = fn;
  else fn = b[82];
  let Jn;
  if (b[83] !== z || b[84] !== fn) Jn = e(s, {
    ref: z,
    children: fn
  }), b[83] = z, b[84] = fn, b[85] = Jn;
  else Jn = b[85];
  let ns;
  if (b[86] !== Ut || b[87] !== cn || b[88] !== Qe || b[89] !== Jn) ns = r(s, {
    ref: $e,
    flexDirection: "column",
    ...Ut,
    children: [cn, Qe, Jn]
  }), b[86] = Ut, b[87] = cn, b[88] = Qe, b[89] = Jn, b[90] = ns;
  else ns = b[90];
  return ns
}

function Bn(t) {
  let u = w(26),
    {
      index: o,
      option: i,
      selected: a,
      focused: l,
      drawLabel: m
    } = t,
    c = m === void 0 ? !1 : m,
    g;
  if (u[0] !== l) g = {
    line: 0,
    column: 0,
    active: l,
    visible: !0
  }, u[0] = l, u[1] = g;
  else g = u[1];
  let d = Ek(g),
    b;
  if (u[2] !== i.label) b = PI(i.label), u[2] = i.label, u[3] = b;
  else b = u[3];
  let D = b,
    x = i.description ? ` \u2014 ${i.description}` : "";
  const I = `${D}${x}`;
  let W;
  if (u[4] !== I) W = Ps(I), u[4] = I, u[5] = W;
  else W = u[5];
  let N = W;
  const h = i.disabled ? "(disabled)" : null,
    K = a ? "(selected)" : null;
  let f;
  if (u[6] !== h || u[7] !== K) f = [h, K].filter(Boolean), u[6] = h, u[7] = K, u[8] = f;
  else f = u[8];
  let M = f.join(" ");
  if (c) {
    const C = M ? ` ${M}` : "";
    let O;
    if (u[9] !== o || u[10] !== C) O = r(n, {
      children: [o, ".", C]
    }), u[9] = o, u[10] = C, u[11] = O;
    else O = u[11];
    let L;
    if (u[12] !== i.description) L = i.description && r(n, {
      children: ["\u2014 ", i.description]
    }), u[12] = i.description, u[13] = L;
    else L = u[13];
    let V;
    if (u[14] !== d || u[15] !== i.label || u[16] !== O || u[17] !== L) V = r(s, {
      ref: d,
      children: [O, i.label, L]
    }), u[14] = d, u[15] = i.label, u[16] = O, u[17] = L, u[18] = V;
    else V = u[18];
    return V
  }
  const C = M ? `${M} ` : "";
  let O;
  if (u[19] !== N || u[20] !== o || u[21] !== C) O = r(n, {
    children: [o, ". ", C, N]
  }), u[19] = N, u[20] = o, u[21] = C, u[22] = O;
  else O = u[22];
  let L;
  if (u[23] !== d || u[24] !== O) L = e(s, {
    ref: d,
    children: O
  }), u[23] = d, u[24] = O, u[25] = L;
  else L = u[25];
  return L
}

function Cnr(t) {
  let h = w(43),
    {
      confirmLabel: o,
      cancelLabel: i,
      onConfirm: a,
      onCancel: l,
      refuseInput: m,
      openedAt: c,
      windowMs: u
    } = t,
    [g, d, b] = Zt(),
    [D, x] = y(null),
    I = A(null);
  xy(I, !0), Ra("select", !0);
  let {
    refuse: W,
    refuseCharacter: N
  } = Ci(c, u), K;
  if (h[0] !== m || h[1] !== W) K = function f() {
    return (m?.() ?? !1) || W()
  }, h[0] = m, h[1] = W, h[2] = K;
  else K = h[2];
  let f = K,
    M;
  if (h[3] !== m || h[4] !== N) M = function C() {
    return (m?.() ?? !1) || N()
  }, h[3] = m, h[4] = N, h[5] = M;
  else M = h[5];
  let C = M,
    O;
  if (h[6] !== l || h[7] !== a || h[8] !== f || h[9] !== b) O = (L) => {
    let V = L.trim().toLowerCase();
    if ((V === "y" || V === "yes" || V === "n" || V === "no") && f()) {
      b(Bd);
      return
    }
    if (V === "y" || V === "yes") {
      return a()
    }
    if (V === "n" || V === "no") {
      return l()
    }
    x("Please answer y or n."), b(Nd)
  }, h[6] = l, h[7] = a, h[8] = f, h[9] = b, h[10] = O;
  else O = h[10];
  let R = O,
    H;
  if (h[11] !== d || h[12] !== l || h[13] !== f || h[14] !== C || h[15] !== b || h[16] !== R) H = (v) => {
    if (v.key === "escape" && v.name === "escape") {
      if (v.preventDefault(), f()) {
        return
      }
      return l()
    }
    if (v.key === "return" && v.name === "return") {
      return v.preventDefault(), R(d.current)
    }
    if (v.key === "backspace" || v.key === "delete") {
      v.preventDefault(), b(Ld);
      return
    }
    if (v.key.length === 1 && !v.ctrl && !v.meta) {
      if (v.preventDefault(), C()) {
        return
      }
      x(null), b((ue) => ue + v.key)
    }
  }, h[11] = d, h[12] = l, h[13] = f, h[14] = C, h[15] = b, h[16] = R, h[17] = H;
  else H = h[17];
  let ge = H,
    G = `Enter y/n: ${g}`,
    Y;
  if (h[18] !== G) Y = ie(G), h[18] = G, h[19] = Y;
  else Y = h[19];
  let Ie;
  if (h[20] !== Y) Ie = {
    line: 0,
    column: Y,
    active: !0,
    visible: !0
  }, h[20] = Y, h[21] = Ie;
  else Ie = h[21];
  let pe = Ek(Ie),
    X;
  if (h[22] !== o) X = PI(o), h[22] = o, h[23] = X;
  else X = h[23];
  let T;
  if (h[24] !== X) T = r(n, {
    children: ["y. ", X]
  }), h[24] = X, h[25] = T;
  else T = h[25];
  let ve;
  if (h[26] !== i) ve = PI(i), h[26] = i, h[27] = ve;
  else ve = h[27];
  let U;
  if (h[28] !== ve) U = r(n, {
    children: ["n. ", ve]
  }), h[28] = ve, h[29] = U;
  else U = h[29];
  let fe;
  if (h[30] !== D) fe = D && e(n, {
    children: D
  }), h[30] = D, h[31] = fe;
  else fe = h[31];
  let J;
  if (h[32] !== G) J = e(n, {
    children: G
  }), h[32] = G, h[33] = J;
  else J = h[33];
  let re;
  if (h[34] !== pe || h[35] !== J) re = e(s, {
    ref: pe,
    children: J
  }), h[34] = pe, h[35] = J, h[36] = re;
  else re = h[36];
  let Oe;
  if (h[37] !== ge || h[38] !== U || h[39] !== fe || h[40] !== re || h[41] !== T) Oe = r(s, {
    ref: I,
    flexDirection: "column",
    tabIndex: 0,
    onKeyDown: ge,
    children: [T, U, fe, re]
  }), h[37] = ge, h[38] = U, h[39] = fe, h[40] = re, h[41] = T, h[42] = Oe;
  else Oe = h[42];
  return Oe
}
B();
B();

function Oo(t) {
  let g = w(15),
    {
      imageId: o,
      backgroundColor: i,
      isSelected: a
    } = t,
    l = a === void 0 ? !1 : a,
    c = Fo((m) => m.storedImagePaths.get(o) ?? null) ?? null,
    u = `[Image #${o}]`,
    d;
  if (g[0] !== c) d = c && Ev() ? J0(c) : null, g[0] = c, g[1] = d;
  else d = g[1];
  let b = d;
  if (b) {
    let D, x;
    if (g[2] !== i || g[3] !== u || g[4] !== l) D = e(n, {
      backgroundColor: i,
      inverse: l,
      children: u
    }), x = e(n, {
      backgroundColor: i,
      inverse: l,
      bold: l,
      children: u
    }), g[2] = i, g[3] = u, g[4] = l, g[5] = D, g[6] = x;
    else D = g[5], x = g[6];
    let I;
    if (g[7] !== b || g[8] !== D || g[9] !== x) I = e(zt, {
      url: b,
      fallback: D,
      children: x
    }), g[7] = b, g[8] = D, g[9] = x, g[10] = I;
    else I = g[10];
    return I
  }
  let D;
  if (g[11] !== i || g[12] !== u || g[13] !== l) D = e(n, {
    backgroundColor: i,
    inverse: l,
    children: u
  }), g[11] = i, g[12] = u, g[13] = l, g[14] = D;
  else D = g[14];
  return D
}
B();

function jvt(t) {
  let [o] = br(), i = oc(), a = Z(LF, []), l = ot();
  Uwn({
    isTerminalFocused: i,
    canPasteImages: !!t.onImagePaste
  });
  let m = u9o({
      value: t.value,
      onChange: t.onChange,
      onSubmit: t.onSubmit,
      onExit: t.onExit,
      onExitMessage: t.onExitMessage,
      onLeftArrowOnEmpty: t.onLeftArrowOnEmpty,
      leftArrowConfirmHint: t.leftArrowConfirmHint,
      onHistoryReset: t.onHistoryReset,
      onHistoryUp: t.onHistoryUp,
      onHistoryDown: t.onHistoryDown,
      focus: t.focus,
      mask: t.mask,
      multiline: t.multiline,
      disableBackslashReturn: t.disableBackslashReturn,
      clearOnSubmit: t.clearOnSubmit,
      disableCtrlCClear: t.disableCtrlCClear,
      cursorChar: t.showCursor && !a ? " " : "",
      preserveTrailingWhitespace: l,
      highlightPastedText: t.highlightPastedText,
      invert: i ? zte : (C) => C,
      themeText: Kn("text", o),
      columns: t.columns,
      leadingPill: t.leadingPill,
      maxVisibleLines: t.maxVisibleLines,
      onImagePaste: t.onImagePaste,
      disableCursorMovementForUpDownKeys: t.disableCursorMovementForUpDownKeys,
      disableEscapeDoublePress: t.disableEscapeDoublePress,
      externalOffset: t.cursorOffset,
      onOffsetChange: t.onChangeCursorOffset,
      inputFilter: t.inputFilter,
      editRelay: t.editRelay,
      commitEdit: t.commitEdit,
      virtualTexts: l ? void 0 : t.virtualTexts,
      getPastedContents: t.getPastedContents,
      getInputMode: t.getInputMode,
      onModeChange: t.onModeChange,
      onUndo: t.onUndo,
      onOpenHistorySearch: t.onOpenHistorySearch,
      onToggleHelp: t.onToggleHelp
    }),
    {
      mode: c,
      setMode: u,
      cancelPendingRemap: g,
      forgetColumn: d,
      isCommandPending: b
    } = m,
    D = A(!1),
    x = Mo(u);
  P(() => {
    let C = !D.current;
    D.current = !0;
    let O = C && (t.initialMode === "VISUAL" || t.initialMode === "VISUAL LINE") ? "NORMAL" : t.initialMode;
    if (O && O !== c) x(O)
  }, [t.initialMode, c]);
  let {
    recordInsertRef: I
  } = t, {
    recordInsert: W
  } = m;
  P(() => {
    if (!I) return;
    return I.current = W, () => {
      I.current = null
    }
  }, [I, W]);
  let {
    cancelRemapRef: N
  } = t;
  P(() => {
    if (!N) return;
    return N.current = g, () => {
      N.current = null
    }
  }, [N, g]);
  let {
    forgetColumnRef: h
  } = t;
  P(() => {
    if (!h) return;
    return h.current = d, () => {
      h.current = null
    }
  }, [h, d]);
  let {
    onEditingStateChange: K
  } = t, f = t.focus !== !1, M = c !== "NORMAL" || b;
  return Jt(() => {
    if (!K || !f) return;
    return K({
      mode: c,
      takesEscape: M
    }), () => K(null)
  }, [K, f, c, M]), e(s, {
    flexDirection: "column",
    children: e(K2t, {
      inputState: m,
      terminalFocus: i,
      highlights: t.highlights,
      ...t
    })
  })
}

function Vre(t) {
  let b = w(10),
    {
      isFocused: o,
      isSelected: i,
      children: a,
      description: l,
      shouldShowDownArrow: m,
      shouldShowUpArrow: c,
      declareCursor: u,
      onClick: g,
      hoverStyle: d
    } = t,
    D;
  if (b[0] !== a || b[1] !== u || b[2] !== l || b[3] !== d || b[4] !== o || b[5] !== i || b[6] !== g || b[7] !== m || b[8] !== c) D = e(kR, {
    isFocused: o,
    isSelected: i,
    description: l,
    showScrollDown: m,
    showScrollUp: c,
    styled: !1,
    declareCursor: u,
    onClick: g,
    hoverStyle: d,
    children: a
  }), b[0] = a, b[1] = u, b[2] = l, b[3] = d, b[4] = o, b[5] = i, b[6] = g, b[7] = m, b[8] = c, b[9] = D;
  else D = b[9];
  return D
}

function To(t) {
  return t?.name === "escape" && !t.ctrl && !t.meta
}

function hc(pn) {
  return pn.type === "image"
}

function Ur(t, o, i, a) {
  let l = 2 + o + 2;
  return Math.max(1, t - l - i - a)
}

function BCe(t) {
  let T = w(107),
    {
      option: o,
      isFocused: i,
      isSelected: a,
      shouldShowDownArrow: l,
      shouldShowUpArrow: m,
      maxIndexWidth: c,
      index: u,
      hideIndex: g,
      inputValue: d,
      onInputChange: b,
      onSubmit: D,
      onExit: x,
      layout: I,
      children: W,
      showLabel: N,
      onOpenEditor: h,
      resetCursorOnUpdate: K,
      canPasteImage: f,
      onImagePaste: M,
      pastedContents: C,
      onRemoveImage: O,
      imagesSelected: L,
      selectedImageIndex: V,
      onImagesSelectedChange: R,
      onSelectedImageIndexChange: H,
      extraChromeWidth: v,
      onClick: ue,
      hoverStyle: ge
    } = t,
    G = g === void 0 ? !1 : g,
    Y = N === void 0 ? !1 : N,
    Ie = K === void 0 ? !1 : K,
    pe = V === void 0 ? 0 : V,
    X = v === void 0 ? 0 : v,
    ve;
  if (T[0] !== C) ve = C ? Object.values(C).filter(hc) : [], T[0] = C, T[1] = ve;
  else ve = T[1];
  let U = ve,
    fe = Y || o.showLabelWithValue === !0,
    [J, re] = y(d.length),
    Oe = A(!1),
    Ve;
  if (T[2] !== d.length || T[3] !== i || T[4] !== Ie) Ve = () => {
    if (Ie && i) {
      if (Oe.current) Oe.current = !1;
      else re(d.length)
    }
  }, T[2] = d.length, T[3] = i, T[4] = Ie, T[5] = Ve;
  else Ve = T[5];
  let ne;
  if (T[6] !== d || T[7] !== i || T[8] !== Ie) ne = [Ie, i, d], T[6] = d, T[7] = i, T[8] = Ie, T[9] = ne;
  else ne = T[9];
  P(Ve, ne);
  let E;
  if (T[10] !== d || T[11] !== b || T[12] !== h) E = () => {
    h?.(d, b)
  }, T[10] = d, T[11] = b, T[12] = h, T[13] = E;
  else E = T[13];
  const ye = i && !!h;
  let ee;
  if (T[14] !== ye) ee = {
    context: "Chat",
    isActive: ye
  }, T[14] = ye, T[15] = ee;
  else ee = T[15];
  rt("chat:externalEditor", E, ee);
  let $e;
  if (T[16] !== f || T[17] !== M) $e = () => {
    if (!M) {
      return
    }
    if (f?.() === !1) {
      return
    }
    mue(Kl(tt())).then((we) => {
      if (we) M(we.base64, {
        mediaType: we.mediaType,
        dimensions: we.dimensions
      })
    })
  }, T[16] = f, T[17] = M, T[18] = $e;
  else $e = T[18];
  const ut = i && !!M;
  let Ae;
  if (T[19] !== ut) Ae = {
    context: "Chat",
    isActive: ut
  }, T[19] = ut, T[20] = Ae;
  else Ae = T[20];
  rt("chat:imagePaste", $e, Ae);
  let Wt;
  if (T[21] !== U || T[22] !== O) Wt = () => {
    if (U.length > 0 && O) O(U.at(-1).id)
  }, T[21] = U, T[22] = O, T[23] = Wt;
  else Wt = T[23];
  const Vt = i && !L && d === "" && U.length > 0 && !!O;
  let Bt;
  if (T[24] !== Vt) Bt = {
    context: "Attachments",
    isActive: Vt
  }, T[24] = Vt, T[25] = Bt;
  else Bt = T[25];
  rt("attachments:remove", Wt, Bt);
  let Fe, It;
  if (T[26] !== U.length || T[27] !== H || T[28] !== pe) Fe = () => {
    if (U.length > 1) H?.((pe + 1) % U.length)
  }, It = () => {
    if (U.length > 1) H?.((pe - 1 + U.length) % U.length)
  }, T[26] = U.length, T[27] = H, T[28] = pe, T[29] = Fe, T[30] = It;
  else Fe = T[29], It = T[30];
  let He;
  if (T[31] !== U || T[32] !== R || T[33] !== O || T[34] !== H || T[35] !== pe) He = () => {
    let ke = U[pe];
    if (ke && O) {
      if (O(ke.id) === !1) {
        return
      }
      if (U.length <= 1) R?.(!1);
      else H?.(Math.min(pe, U.length - 2))
    }
  }, T[31] = U, T[32] = R, T[33] = O, T[34] = H, T[35] = pe, T[36] = He;
  else He = T[36];
  let lt;
  if (T[37] !== R) lt = () => {
    R?.(!1)
  }, T[37] = R, T[38] = lt;
  else lt = T[38];
  let qe;
  if (T[39] !== Fe || T[40] !== It || T[41] !== He || T[42] !== lt) qe = {
    "attachments:next": Fe,
    "attachments:previous": It,
    "attachments:remove": He,
    "attachments:exit": lt
  }, T[39] = Fe, T[40] = It, T[41] = He, T[42] = lt, T[43] = qe;
  else qe = T[43];
  const at = i && !!L;
  let dt;
  if (T[44] !== at) dt = {
    context: "Attachments",
    isActive: at
  }, T[44] = at, T[45] = dt;
  else dt = T[45];
  on(qe, dt);
  let {
    vimEditing: De
  } = o, We = De ? jvt : Lr, p = A(null), Ft, yt;
  if (T[46] !== L || T[47] !== i || T[48] !== R) Ft = () => {
    if (!i && L) R?.(!1)
  }, yt = [i, L, R], T[46] = L, T[47] = i, T[48] = R, T[49] = Ft, T[50] = yt;
  else Ft = T[49], yt = T[50];
  P(Ft, yt);
  let Be = I === "expanded" ? c + 3 : c + 4,
    {
      columns: St
    } = us(Te()),
    kt = fe && typeof o.label === "string" ? ie(o.label) + ie(o.labelValueSeparator ?? ", ") : 0,
    ct;
  if (T[51] !== St || T[52] !== X || T[53] !== kt || T[54] !== c) ct = Ur(St, c, kt, X), T[51] = St, T[52] = X, T[53] = kt, T[54] = c, T[55] = ct;
  else ct = T[55];
  let rn = ct;
  const je = De?.takesEscape ? ll : void 0,
    Nt = I === "compact" ? 0 : void 0;
  let Ye;
  if (T[56] !== G || T[57] !== u || T[58] !== c) Ye = !G && e(s, {
    flexShrink: 0,
    children: e(n, {
      dimColor: !0,
      children: `${u}.`.padEnd(c + 2)
    })
  }), T[56] = G, T[57] = u, T[58] = c, T[59] = Ye;
  else Ye = T[59];
  let ln;
  if (T[60] !== We || T[61] !== J || T[62] !== L || T[63] !== d || T[64] !== i || T[65] !== x || T[66] !== M || T[67] !== b || T[68] !== D || T[69] !== o || T[70] !== fe || T[71] !== rn || T[72] !== De?.onStateChange) ln = fe ? i ? r(Q, {
    children: [r(n, {
      color: "suggestion",
      children: [o.label, o.labelValueSeparator ?? ", "]
    }), e(We, {
      value: d,
      onChange: (Gn) => {
        if (o.onChange(Gn) === !1) {
          return
        }
        Oe.current = !0, b(Gn)
      },
      onSubmit: D,
      onExit: x,
      placeholder: o.placeholder,
      focus: !L,
      showCursor: !0,
      multiline: !0,
      cursorOffset: J,
      onChangeCursorOffset: re,
      columns: rn,
      onEditingStateChange: De?.onStateChange,
      cancelRemapRef: p,
      onImagePaste: M,
      onPaste: (Lt) => {
        p.current?.();
        let qn = d.slice(0, J);
        let Yn = d.slice(J);
        let pt = qn + Lt + Yn;
        if (o.onChange(pt) === !1) {
          return
        }
        Oe.current = !0, b(pt), re(qn.length + Lt.length)
      }
    })]
  }) : r(n, {
    children: [o.label, d ? o.labelValueSeparator ?? ", " : null, d || null]
  }) : i ? e(We, {
    value: d,
    onChange: (an) => {
      if (o.onChange(an) === !1) {
        return
      }
      Oe.current = !0, b(an)
    },
    onSubmit: D,
    onExit: x,
    placeholder: o.placeholder || (typeof o.label === "string" ? o.label : void 0),
    focus: !L,
    showCursor: !0,
    multiline: !0,
    cursorOffset: J,
    onChangeCursorOffset: re,
    columns: rn,
    onEditingStateChange: De?.onStateChange,
    cancelRemapRef: p,
    onImagePaste: M,
    onPaste: (wt) => {
      p.current?.();
      let Ct = d.slice(0, J);
      let ht = d.slice(J);
      let Je = Ct + wt + ht;
      if (o.onChange(Je) === !1) {
        return
      }
      Oe.current = !0, b(Je), re(Ct.length + wt.length)
    }
  }) : e(n, {
    color: d ? void 0 : "inactive",
    children: d || o.placeholder || o.label
  }), T[60] = We, T[61] = J, T[62] = L, T[63] = d, T[64] = i, T[65] = x, T[66] = M, T[67] = b, T[68] = D, T[69] = o, T[70] = fe, T[71] = rn, T[72] = De?.onStateChange, T[73] = ln;
  else ln = T[73];
  let un;
  if (T[74] !== W || T[75] !== Nt || T[76] !== Ye || T[77] !== ln) un = r(s, {
    flexDirection: "row",
    flexShrink: Nt,
    children: [Ye, W, ln]
  }), T[74] = W, T[75] = Nt, T[76] = Ye, T[77] = ln, T[78] = un;
  else un = T[78];
  let z;
  if (T[79] !== ge || T[80] !== i || T[81] !== a || T[82] !== ue || T[83] !== l || T[84] !== m || T[85] !== un) z = e(Vre, {
    isFocused: i,
    isSelected: a,
    shouldShowDownArrow: l,
    shouldShowUpArrow: m,
    declareCursor: !1,
    onClick: ue,
    hoverStyle: ge,
    children: un
  }), T[79] = ge, T[80] = i, T[81] = a, T[82] = ue, T[83] = l, T[84] = m, T[85] = un, T[86] = z;
  else z = T[86];
  let dn;
  if (T[87] !== Be || T[88] !== i || T[89] !== a || T[90] !== o.description || T[91] !== o.dimDescription) dn = o.description && e(s, {
    paddingLeft: Be,
    children: e(n, {
      dimColor: o.dimDescription !== !1,
      color: a ? "success" : i ? "suggestion" : void 0,
      children: o.description
    })
  }), T[87] = Be, T[88] = i, T[89] = a, T[90] = o.description, T[91] = o.dimDescription, T[92] = dn;
  else dn = T[92];
  let bt;
  if (T[93] !== Be || T[94] !== U || T[95] !== L || T[96] !== i || T[97] !== pe) bt = U.length > 0 && r(s, {
    flexDirection: "row",
    gap: 1,
    paddingLeft: Be,
    children: [U.map((Ut, cn) => e(Oo, {
      imageId: Ut.id,
      isSelected: !!L && cn === pe
    }, Ut.id)), e(s, {
      flexGrow: 1,
      justifyContent: "flex-start",
      flexDirection: "row",
      children: e(n, {
        dimColor: !0,
        children: L ? r(Se, {
          children: [U.length > 1 && r(Q, {
            children: [e(gt, {
              action: "attachments:next",
              context: "Attachments",
              fallback: "\u2192",
              description: "next"
            }), e(gt, {
              action: "attachments:previous",
              context: "Attachments",
              fallback: "\u2190",
              description: "prev"
            })]
          }), e(gt, {
            action: "attachments:remove",
            context: "Attachments",
            fallback: "backspace",
            description: "remove"
          }), e(gt, {
            action: "attachments:exit",
            context: "Attachments",
            fallback: "esc",
            description: "cancel"
          })]
        }) : i ? e(q, {
          chord: "down",
          action: "select",
          parens: !0
        }) : null
      })
    })]
  }), T[93] = Be, T[94] = U, T[95] = L, T[96] = i, T[97] = pe, T[98] = bt;
  else bt = T[98];
  let Qe;
  if (T[99] !== I) Qe = I === "expanded" && e(n, {
    children: " "
  }), T[99] = I, T[100] = Qe;
  else Qe = T[100];
  let On;
  if (T[101] !== je || T[102] !== z || T[103] !== dn || T[104] !== bt || T[105] !== Qe) On = r(s, {
    flexDirection: "column",
    flexShrink: 0,
    onKeyDown: je,
    children: [z, dn, bt, Qe]
  }), T[101] = je, T[102] = z, T[103] = dn, T[104] = bt, T[105] = Qe, T[106] = On;
  else On = T[106];
  return On
}

function ll(t) {
  if (To(t)) t.stopImmediatePropagation()
}
B();
var Fi = ({
  isDisabled: t = !1,
  disableSelection: o = !1,
  state: i,
  options: a,
  isMultiSelect: l = !1,
  onUpFromFirstItem: m,
  onDownFromLastItem: c,
  onInputModeToggle: u,
  inputValues: g,
  imagesSelected: d = !1,
  onEnterImageSelection: b,
  onExitImageSelection: D,
  hasInkFocus: x = !0
}) => {
  let {
    focusDirection: I
  } = zCe(), W = Zl();
  Ra("select", !!i.onCancel);
  let N = Z(() => a.find((M) => M.value === i.focusedValue)?.type === "input", [a, i.focusedValue]),
    h = Z(() => {
      let f = {};
      if (!N) f["select:next"] = () => {
        let M = a.at(-1);
        if (M && i.getFocusedValue() === M.value) {
          if (c) {
            c();
            return
          }
          if (I("down")) return
        }
        i.focusNextOption()
      }, f["select:previous"] = () => {
        let M = a[0];
        if (M && i.getFocusedValue() === M.value) {
          if (m) {
            m();
            return
          }
          if (I("up")) return
        }
        i.focusPreviousOption()
      }, f["select:first"] = () => {
        i.focusOption(a[0]?.value)
      }, f["select:last"] = () => {
        i.focusOption(a.at(-1)?.value)
      }, f["select:accept"] = () => {
        if (o === !0) return;
        let M = i.getFocusedValue();
        if (M === void 0) return;
        let C = a.find((O) => O.value === M);
        if (C?.disabled === !0) return;
        if (C?.type === "input") return;
        i.selectFocusedOption?.(), i.onChange?.(M)
      };
      if (i.onCancel) f["select:cancel"] = () => {
        let M = i.getFocusedValue(),
          C = a.find((O) => O.value === M);
        if (C?.type === "input" && C.vimEditing?.takesEscape && To(W?.singleKeyEvent() ?? null)) return !1;
        i.onCancel()
      };
      return f
    }, [a, i, c, m, N, o, I, W]);
  return on(h, {
    context: "Select",
    isActive: !t && x
  }), {
    handleKeyDown: (f) => {
      if (t) return;
      let M = EQ(f.key),
        C = i.getFocusedValue(),
        O = a.find((V) => V.value === C),
        L = O?.type === "input";
      if (f.key === "tab") {
        if (f.preventDefault(), u && C !== void 0) u(C);
        return
      }
      if (L) {
        if (d) {
          if (f.key === "up") f.preventDefault(), D?.();
          return
        }
        if (f.key === "down" && b?.()) {
          f.stopImmediatePropagation();
          return
        }
        if (f.key === "down" || f.ctrl && f.key === "n") {
          if (c) {
            let V = a.at(-1);
            if (V && C === V.value) {
              c(), f.stopImmediatePropagation();
              return
            }
          }
          i.focusNextOption(), f.stopImmediatePropagation();
          return
        }
        if (f.key === "up" || f.ctrl && f.key === "p") {
          if (m) {
            let V = a[0];
            if (V && C === V.value) {
              m(), f.stopImmediatePropagation();
              return
            }
          }
          i.focusPreviousOption(), f.stopImmediatePropagation();
          return
        }
        return
      }
      if (N) {
        if (f.key === "down" || f.ctrl && f.key === "n") {
          if (c) {
            let V = a.at(-1);
            if (V && C === V.value) {
              c(), f.stopImmediatePropagation();
              return
            }
          }
          i.focusNextOption(), f.stopImmediatePropagation();
          return
        }
        if (f.key === "up" || f.ctrl && f.key === "p") {
          if (m) {
            let V = a[0];
            if (V && C === V.value) {
              m(), f.stopImmediatePropagation();
              return
            }
          }
          i.focusPreviousOption(), f.stopImmediatePropagation();
          return
        }
      }
      if (f.key === "pagedown") {
        f.preventDefault(), i.focusNextPage();
        return
      }
      if (f.key === "pageup") {
        f.preventDefault(), i.focusPreviousPage();
        return
      }
      if (o !== !0) {
        if (l && K5(f.key) === " " && C !== void 0) {
          if (O?.disabled !== !0) f.preventDefault(), i.selectFocusedOption?.(), i.onChange?.(C);
          return
        }
        if (o !== "numeric" && /^[0-9]$/.test(M)) {
          f.preventDefault();
          let V = parseInt(M) - 1;
          if (V >= 0 && V < i.options.length) {
            let R = i.options[V];
            if (R.disabled === !0) return;
            if (R.type === "input") {
              if ((g?.get(R.value) ?? "").trim()) {
                i.onChange?.(R.value);
                return
              }
              if (R.allowEmptySubmitToCancel) {
                i.onChange?.(R.value);
                return
              }
              i.focusOption(R.value);
              return
            }
            i.onChange?.(R.value);
            return
          }
        }
      }
    }
  }
};
B();
B();
import {
  isDeepStrictEqual as vc
} from "util";
B();

function xc(t) {
  let [o] = y(() => ({
    value: bc(t) ? t() : t
  })), [i, a] = y(o.value), l = ae((c) => {
    let u = gc(c) ? c(o.value) : c;
    if (Object.is(u, o.value)) return;
    o.value = u, a(() => u)
  }, [o]), m = ae(() => o.value, [o]);
  return [i, l, m]
}

function bc(t) {
  return typeof t === "function"
}

function gc(t) {
  return typeof t === "function"
}
class Po extends Map {
  first;
  last;
  constructor(t) {
    let o = [],
      i, a, l, m = 0;
    for (let c of t) {
      let u = {
        value: c.value,
        previous: l,
        next: void 0,
        index: m
      };
      if (l) l.next = u;
      i ||= u, a = u, o.push([c.value, u]), m++, l = u
    }
    super(o);
    this.first = i, this.last = a
  }
}
var Ic = (t, o) => {
    switch (o.type) {
      case "focus-next-option": {
        if (t.focusedValue === void 0) return t;
        let i = t.optionMap.get(t.focusedValue);
        if (!i) return t;
        let a = i.next || t.optionMap.first;
        if (!a) return t;
        if (!i.next && a === t.optionMap.first) return {
          ...t,
          focusedValue: a.value,
          visibleFromIndex: 0,
          visibleToIndex: t.visibleOptionCount
        };
        if (!(a.index >= t.visibleToIndex)) return {
          ...t,
          focusedValue: a.value
        };
        let m = Math.min(t.optionMap.size, t.visibleToIndex + 1),
          c = m - t.visibleOptionCount;
        return {
          ...t,
          focusedValue: a.value,
          visibleFromIndex: c,
          visibleToIndex: m
        }
      }
      case "focus-previous-option": {
        if (t.focusedValue === void 0) return t;
        let i = t.optionMap.get(t.focusedValue);
        if (!i) return t;
        let a = i.previous || t.optionMap.last;
        if (!a) return t;
        if (!i.previous && a === t.optionMap.last) {
          let u = t.optionMap.size,
            g = Math.max(0, u - t.visibleOptionCount);
          return {
            ...t,
            focusedValue: a.value,
            visibleFromIndex: g,
            visibleToIndex: u
          }
        }
        if (!(a.index <= t.visibleFromIndex)) return {
          ...t,
          focusedValue: a.value
        };
        let m = Math.max(0, t.visibleFromIndex - 1),
          c = m + t.visibleOptionCount;
        return {
          ...t,
          focusedValue: a.value,
          visibleFromIndex: m,
          visibleToIndex: c
        }
      }
      case "focus-next-page": {
        if (t.focusedValue === void 0) return t;
        let i = t.optionMap.get(t.focusedValue);
        if (!i) return t;
        let a = Math.min(t.optionMap.size - 1, i.index + t.visibleOptionCount),
          l = t.optionMap.first;
        while (l && l.index < a)
          if (l.next) l = l.next;
          else break;
        if (!l) return t;
        let m = Math.min(t.optionMap.size, l.index + 1),
          c = Math.max(0, m - t.visibleOptionCount);
        return {
          ...t,
          focusedValue: l.value,
          visibleFromIndex: c,
          visibleToIndex: m
        }
      }
      case "focus-previous-page": {
        if (t.focusedValue === void 0) return t;
        let i = t.optionMap.get(t.focusedValue);
        if (!i) return t;
        let a = Math.max(0, i.index - t.visibleOptionCount),
          l = t.optionMap.first;
        while (l && l.index < a)
          if (l.next) l = l.next;
          else break;
        if (!l) return t;
        let m = Math.max(0, l.index),
          c = Math.min(t.optionMap.size, m + t.visibleOptionCount);
        return {
          ...t,
          focusedValue: l.value,
          visibleFromIndex: m,
          visibleToIndex: c
        }
      }
      case "reset":
        return o.state;
      case "scroll-viewport": {
        let i = Math.min(Math.max(0, t.optionMap.size - t.visibleOptionCount), Math.max(0, t.visibleFromIndex + o.delta));
        if (i === t.visibleFromIndex) return t;
        let a = Math.min(t.optionMap.size, i + t.visibleOptionCount),
          l = t.focusedValue === void 0 ? void 0 : t.optionMap.get(t.focusedValue);
        while (l?.next && l.index < i) l = l.next;
        while (l?.previous && l.index >= a) l = l.previous;
        return {
          ...t,
          focusedValue: l?.value,
          visibleFromIndex: i,
          visibleToIndex: a
        }
      }
      case "set-focus": {
        if (t.focusedValue === o.value) return t;
        let i = t.optionMap.get(o.value);
        if (!i) return t;
        if (i.index >= t.visibleFromIndex && i.index < t.visibleToIndex) return {
          ...t,
          focusedValue: o.value
        };
        let a, l;
        if (i.index < t.visibleFromIndex) a = i.index, l = Math.min(t.optionMap.size, a + t.visibleOptionCount);
        else l = Math.min(t.optionMap.size, i.index + 1), a = Math.max(0, l - t.visibleOptionCount);
        return {
          ...t,
          focusedValue: o.value,
          visibleFromIndex: a,
          visibleToIndex: l
        }
      }
    }
  },
  ul = ({
    visibleOptionCount: t,
    options: o,
    initialFocusValue: i,
    currentViewport: a
  }) => {
    let l = typeof t === "number" ? Math.min(t, o.length) : o.length,
      m = new Po(o),
      c = i !== void 0 && m.get(i),
      u = c ? i : m.first?.value,
      g = 0,
      d = l;
    if (c) {
      let b = c.index;
      if (a)
        if (b >= a.visibleFromIndex && b < a.visibleToIndex) {
          if (g = a.visibleFromIndex, d = Math.min(m.size, g + l), b >= d) d = Math.min(m.size, b + 1), g = Math.max(0, d - l);
          if (d - g < l) g = Math.max(0, d - l)
        } else if (b < a.visibleFromIndex) {
        if (g = b, d = Math.min(m.size, g + l), d - g < l) g = Math.max(0, d - l)
      } else d = Math.min(m.size, b + 1), g = Math.max(0, d - l);
      else if (b >= l) d = Math.min(m.size, b + 1), g = Math.max(0, d - l);
      g = Math.max(0, Math.min(g, m.size - 1)), d = Math.min(m.size, Math.max(l, d))
    }
    return {
      optionMap: m,
      visibleOptionCount: l,
      focusedValue: u,
      visibleFromIndex: g,
      visibleToIndex: d
    }
  };

function Rnr({
  visibleOptionCount: t = 5,
  options: o,
  onFocus: i,
  focusValue: a
}) {
  let [l, m, c] = xc(() => ul({
    visibleOptionCount: t,
    options: o,
    initialFocusValue: a
  })), u = ae((v) => {
    m((ue) => Ic(ue, v))
  }, [m]), g = Mo((v) => i?.(v)), d = A(void 0), [b, D] = y(o), [x, I] = y(t), W = o !== b && !vc(o, b), N = t !== x;
  if (W || N) {
    let v = c();
    if (u({
        type: "reset",
        state: ul({
          visibleOptionCount: t,
          options: o,
          initialFocusValue: W ? a ?? v.focusedValue : v.focusedValue ?? a,
          currentViewport: {
            visibleFromIndex: v.visibleFromIndex,
            visibleToIndex: v.visibleToIndex
          }
        })
      }), W) D(o);
    if (N) I(t)
  }
  let h = ae((v) => {
      u(v);
      let ue = ki(c().focusedValue, o);
      if (ue !== void 0 && ue !== d.current) d.current = ue, i?.(ue)
    }, [u, c, o, i]),
    K = ae(() => {
      h({
        type: "focus-next-option"
      })
    }, [h]),
    f = ae(() => {
      h({
        type: "focus-previous-option"
      })
    }, [h]),
    M = ae(() => {
      h({
        type: "focus-next-page"
      })
    }, [h]),
    C = ae(() => {
      h({
        type: "focus-previous-page"
      })
    }, [h]),
    O = ae((v) => {
      let ue = c().visibleFromIndex;
      return h({
        type: "scroll-viewport",
        delta: v
      }), c().visibleFromIndex !== ue
    }, [h, c]),
    L = ae((v) => {
      if (v !== void 0) h({
        type: "set-focus",
        value: v
      })
    }, [h]),
    V = Z(() => o.map((v, ue) => ({
      ...v,
      index: ue
    })).slice(l.visibleFromIndex, l.visibleToIndex), [o, l.visibleFromIndex, l.visibleToIndex]),
    R = Z(() => ki(l.focusedValue, o), [l.focusedValue, o]),
    H = ae(() => ki(c().focusedValue, o), [c, o]);
  return P(() => {
    if (R === void 0) {
      d.current = void 0;
      return
    }
    if (R !== d.current) d.current = R, g(R)
  }, [R]), P(() => {
    if (a !== void 0) u({
      type: "set-focus",
      value: a
    })
  }, [a, u]), {
    focusedValue: R,
    getFocusedValue: H,
    visibleFromIndex: l.visibleFromIndex,
    visibleToIndex: l.visibleToIndex,
    visibleOptions: V,
    focusNextOption: K,
    focusPreviousOption: f,
    focusNextPage: M,
    focusPreviousPage: C,
    focusOption: L,
    scrollViewport: O,
    options: o
  }
}

function ki(t, o) {
  if (t === void 0) return;
  if (o.some((i) => i.value === t)) return t;
  return o[0]?.value
}

function Ri({
  visibleOptionCount: t = 5,
  options: o,
  defaultValue: i,
  selectedValue: a,
  onChange: l,
  onCancel: m,
  onFocus: c,
  focusValue: u
}) {
  let [g, d] = y(i), b = Rnr({
    visibleOptionCount: t,
    options: o,
    onFocus: c,
    focusValue: u
  }), {
    getFocusedValue: D
  } = b, x = ae(() => {
    d(D())
  }, [D]);
  return {
    ...b,
    value: a !== void 0 ? a : g,
    selectFocusedOption: x,
    onChange: l,
    onCancel: m
  }
}
B();

function V2t({
  isDisabled: t,
  visibleFromIndex: o,
  visibleToIndex: i,
  optionCount: a,
  scrollViewport: l,
  shouldDropWheel: m
}) {
  let c = A(null);
  if (t || i - o >= a) return {
    ref: c,
    onWheel: void 0
  };
  return {
    ref: c,
    onWheel: (g) => {
      if (g.deltaY === 0 || m()) return;
      let d = c.current;
      if (d !== null && g.col !== void 0 && g.row !== void 0 && gY(d, g.col, g.row) === null) return;
      if (l(g.deltaY > 0 ? 1 : -1)) g.stopImmediatePropagation()
    }
  }
}

function qp(Wf) {
  return Wf.type === "input"
}

function Yp(Bf) {
  return Bf.description
}

function Jp(Nf) {
  return Nf.type === "image"
}

function Xp(Lf) {
  return Lf.type === "image"
}

function Qp() {
  return {
    bold: !0
  }
}

function Zp(Uf) {
  return Uf.type === "image"
}

function ef(Kf) {
  return Kf.type === "image"
}

function tf($f) {
  return $f.type === "image"
}
var Hi = Symbol("NO_COMMITTED_ROW");

function Xe(t) {
  let a = w(12);
  if (ot()) {
    const i = t.selectedValue === Hi ? t.defaultValue : t.selectedValue ?? t.defaultValue;
    let l;
    if (a[0] !== t.disableSelection || a[1] !== t.hidePromptWhileDisabled || a[2] !== t.isDisabled || a[3] !== t.onCancel || a[4] !== t.onChange || a[5] !== t.onFocus || a[6] !== t.options || a[7] !== t.refuseInput || a[8] !== i) l = e(e7, {
      options: t.options,
      onChange: t.onChange,
      onFocus: t.onFocus,
      onCancel: t.onCancel,
      isDisabled: t.isDisabled,
      disableSelection: t.disableSelection,
      refuseInput: t.refuseInput,
      hidePromptWhileDisabled: t.hidePromptWhileDisabled,
      defaultValue: i
    }), a[0] = t.disableSelection, a[1] = t.hidePromptWhileDisabled, a[2] = t.isDisabled, a[3] = t.onCancel, a[4] = t.onChange, a[5] = t.onFocus, a[6] = t.options, a[7] = t.refuseInput, a[8] = i, a[9] = l;
    else l = a[9];
    return l
  }
  let i;
  if (a[10] !== t) i = e(es, {
    ...t
  }), a[10] = t, a[11] = i;
  else i = a[11];
  return i
}

function es(t) {
  let E = w(84),
    {
      isDisabled: o,
      hideIndexes: i,
      disablePrintableKeybindings: a,
      visibleOptionCount: l,
      hiddenBelowUnit: m,
      highlightText: c,
      options: u,
      columnSizingOptions: g,
      defaultValue: d,
      selectedValue: b,
      onCancel: D,
      onChange: x,
      onFocus: I,
      defaultFocusValue: W,
      layout: N,
      disableSelection: h,
      inlineDescriptions: K,
      hoverStyle: f,
      inputChromeWidth: M,
      onUpFromFirstItem: C,
      onDownFromLastItem: O,
      onInputModeToggle: L,
      onOpenEditor: V,
      canPasteImage: R,
      onImagePaste: H,
      pastedContents: v,
      onRemoveImage: ue,
      pointerWhileDisabled: ge
    } = t,
    G = o === void 0 ? !1 : o,
    Y = i === void 0 ? !1 : i,
    Ie = a === void 0 ? !1 : a,
    pe = l === void 0 ? 5 : l,
    X = g === void 0 ? u : g,
    T = N === void 0 ? "compact" : N,
    ve = h === void 0 ? !1 : h,
    U = K === void 0 ? !1 : K,
    fe = M === void 0 ? 0 : M,
    J = ge === void 0 ? !1 : ge,
    [re, Oe] = y(!1),
    [Ve, ne] = y(0),
    ye;
  if (E[0] !== u) ye = () => {
    let ee = new Map;
    return u.forEach(($e) => {
      if ($e.type === "input" && $e.initialValue) ee.set($e.value, $e.initialValue)
    }), ee
  }, E[0] = u, E[1] = ye;
  else ye = E[1];
  let [we, ut] = y(ye), Ae;
  if (E[2] === S) Ae = new Map, E[2] = Ae;
  else Ae = E[2];
  let Wt = A(Ae),
    Vt, Bt;
  if (E[3] !== we || E[4] !== u) Vt = () => {
    for (const Fe of u) {
      if (Fe.type === "input" && Fe.initialValue !== void 0) {
        let It = Wt.current.get(Fe.value) ?? "";
        let He = we.get(Fe.value) ?? "";
        let ke = Fe.initialValue;
        if (ke !== It && He === It) ut((lt) => {
          let qe = new Map(lt);
          return qe.set(Fe.value, ke), qe
        });
        Wt.current.set(Fe.value, ke)
      }
    }
  }, Bt = [u, we], E[3] = we, E[4] = u, E[5] = Vt, E[6] = Bt;
  else Vt = E[5], Bt = E[6];
  P(Vt, Bt);
  let at = T === "compact" && !U && !X.some(qp) && X.some(Yp),
    {
      columns: dt
    } = us(Te());
  const De = RLe(pe, at ? "compact-vertical" : T);
  let We;
  if (E[7] !== W || E[8] !== d || E[9] !== D || E[10] !== x || E[11] !== I || E[12] !== u || E[13] !== b || E[14] !== De) We = {
    visibleOptionCount: De,
    options: u,
    defaultValue: d,
    selectedValue: b,
    onChange: x,
    onCancel: D,
    onFocus: I,
    focusValue: W
  }, E[7] = W, E[8] = d, E[9] = D, E[10] = x, E[11] = I, E[12] = u, E[13] = b, E[14] = De, E[15] = We;
  else We = E[15];
  let p = Ri(We),
    [Ft, yt] = y(!0),
    Be = hS(),
    St = Gvt(),
    kt;
  if (E[16] !== ve || E[17] !== G || E[18] !== J || E[19] !== Be || E[20] !== p) kt = (ct) => G && !J || ve === !0 || ct.disabled === !0 ? void 0 : (rn) => {
    if (Be(rn)) {
      return
    }
    if (ct.type === "input") p.focusOption(ct.value);
    else p.onChange?.(ct.value)
  }, E[16] = ve, E[17] = G, E[18] = J, E[19] = Be, E[20] = p, E[21] = kt;
  else kt = E[21];
  let je = kt;
  const Nt = ve || (Y ? "numeric" : !1);
  let Ye;
  if (E[22] !== v) Ye = () => {
    if (v && Object.values(v).some(Jp)) {
      let ln = F(Object.values(v), Xp);
      return Oe(!0), ne(ln - 1), !0
    }
    return !1
  }, E[22] = v, E[23] = Ye;
  else Ye = E[23];
  let Gn;
  if (E[24] === S) Gn = () => {
    Oe(!1)
  }, E[24] = Gn;
  else Gn = E[24];
  let Lt;
  if (E[25] !== Ft || E[26] !== re || E[27] !== we || E[28] !== G || E[29] !== O || E[30] !== L || E[31] !== C || E[32] !== u || E[33] !== p || E[34] !== Nt || E[35] !== Ye) Lt = {
    isDisabled: G,
    hasInkFocus: Ft,
    disableSelection: Nt,
    state: p,
    options: u,
    isMultiSelect: !1,
    onUpFromFirstItem: C,
    onDownFromLastItem: O,
    onInputModeToggle: L,
    inputValues: we,
    imagesSelected: re,
    onEnterImageSelection: Ye,
    onExitImageSelection: Gn
  }, E[25] = Ft, E[26] = re, E[27] = we, E[28] = G, E[29] = O, E[30] = L, E[31] = C, E[32] = u, E[33] = p, E[34] = Nt, E[35] = Ye, E[36] = Lt;
  else Lt = E[36];
  let {
    handleKeyDown: qn
  } = Fi(Lt), Yn = A(null);
  xy(Yn, !G);
  let pt = {
      container: () => ({
        flexDirection: "column",
        ref: Yn,
        ...G ? {} : {
          tabIndex: 0,
          textEntry: Ie ? !0 : void 0,
          onKeyDown: qn,
          onFocus: () => yt(!0),
          onBlur: () => yt(!1)
        }
      }),
      highlightedText: Qp
    },
    an;
  if (E[37] !== m || E[38] !== u.length || E[39] !== p.visibleFromIndex || E[40] !== p.visibleToIndex) an = m !== void 0 && p.visibleToIndex - p.visibleFromIndex < u.length ? e(s, {
    paddingLeft: 3,
    height: 1,
    children: e(d_, {
      count: u.length - p.visibleToIndex,
      unit: m
    })
  }) : null, E[37] = m, E[38] = u.length, E[39] = p.visibleFromIndex, E[40] = p.visibleToIndex, E[41] = an;
  else an = E[41];
  let wt = an,
    Ct;
  if (E[42] !== G || E[43] !== u.length || E[44] !== St || E[45] !== p.scrollViewport || E[46] !== p.visibleFromIndex || E[47] !== p.visibleToIndex) Ct = {
    isDisabled: G,
    visibleFromIndex: p.visibleFromIndex,
    visibleToIndex: p.visibleToIndex,
    optionCount: u.length,
    scrollViewport: p.scrollViewport,
    shouldDropWheel: St
  }, E[42] = G, E[43] = u.length, E[44] = St, E[45] = p.scrollViewport, E[46] = p.visibleFromIndex, E[47] = p.visibleToIndex, E[48] = Ct;
  else Ct = E[48];
  let ht = V2t(Ct);
  if (T === "expanded") {
    let Je;
    if (E[49] !== Y || E[50] !== p.options) Je = Y ? 0 : p.options.length.toString().length, E[49] = Y, E[50] = p.options, E[51] = Je;
    else Je = E[51];
    let un = Je;
    return e(Dt, {
      container: pt.container(),
      rows: ht,
      hiddenBelow: wt,
      children: p.visibleOptions.map((z, dn) => {
        let bt = z.index === p.visibleFromIndex;
        let Ut = z.index === p.visibleToIndex - 1;
        let cn = p.visibleToIndex < u.length;
        let Qe = p.visibleFromIndex > 0;
        let On = p.visibleFromIndex + dn + 1;
        let pn = !G && p.focusedValue === z.value;
        let fn = p.value === z.value;
        if (z.type === "input") {
          let Jn = we.has(z.value) ? we.get(z.value) : z.initialValue || "";
          return e(BCe, {
            option: z,
            onClick: je(z),
            hoverStyle: f,
            isFocused: pn,
            isSelected: fn,
            shouldShowDownArrow: cn && Ut,
            shouldShowUpArrow: Qe && bt,
            maxIndexWidth: un,
            index: On,
            hideIndex: Y,
            extraChromeWidth: fe,
            inputValue: Jn,
            onInputChange: (ns) => {
              ut((ea) => {
                let os = new Map(ea);
                return os.set(z.value, ns), os
              })
            },
            onSubmit: (ta) => {
              let na = v && Object.values(v).some(Zp);
              if (ta.trim() || na || z.allowEmptySubmitToCancel) x?.(z.value);
              else if (!z.ignoreEmptySubmit) D?.()
            },
            onExit: D,
            layout: "expanded",
            showLabel: U,
            onOpenEditor: V,
            resetCursorOnUpdate: z.resetCursorOnUpdate,
            canPasteImage: R,
            onImagePaste: H,
            pastedContents: v,
            onRemoveImage: ue,
            imagesSelected: re,
            selectedImageIndex: Ve,
            onImagesSelectedChange: Oe,
            onSelectedImageIndexChange: ne
          }, String(z.value))
        }
        let is = z.label;
        if (typeof z.label === "string" && c && z.label.includes(c)) {
          let ss = z.label;
          let oa = ss.indexOf(c);
          is = r(Q, {
            children: [ss.slice(0, oa), e(n, {
              ...pt.highlightedText(),
              children: c
            }), ss.slice(oa + c.length)]
          })
        }
        let rs = z.disabled === !0;
        let ia = rs ? void 0 : fn ? "success" : pn ? "suggestion" : void 0;
        return r(s, {
          flexDirection: "column",
          flexShrink: 0,
          children: [e(Vre, {
            isFocused: pn,
            isSelected: fn,
            shouldShowDownArrow: cn && Ut,
            shouldShowUpArrow: Qe && bt,
            onClick: je(z),
            hoverStyle: f,
            children: e(n, {
              dimColor: rs,
              color: ia,
              children: is
            })
          }), z.description && e(s, {
            paddingLeft: 2,
            children: e(n, {
              dimColor: rs || z.dimDescription !== !1,
              color: ia,
              children: e(Go, {
                children: z.description
              })
            })
          }), e(n, {
            children: " "
          })]
        }, String(z.value))
      })
    })
  }
  if (T === "compact-vertical") {
    let Je;
    if (E[52] !== Y || E[53] !== p.options) Je = Y ? 0 : p.options.length.toString().length, E[52] = Y, E[53] = p.options, E[54] = Je;
    else Je = E[54];
    let ls = Je;
    return e(Dt, {
      container: pt.container(),
      rows: ht,
      hiddenBelow: wt,
      children: p.visibleOptions.map((le, nf) => {
        let sa = le.index === p.visibleFromIndex;
        let ra = le.index === p.visibleToIndex - 1;
        let la = p.visibleToIndex < u.length;
        let aa = p.visibleFromIndex > 0;
        let ua = p.visibleFromIndex + nf + 1;
        let Xo = !G && p.focusedValue === le.value;
        let Qo = p.value === le.value;
        if (le.type === "input") {
          let of = we.has(le.value) ? we.get(le.value) : le.initialValue || "";
          return e(BCe, {
            option: le,
            onClick: je(le),
            hoverStyle: f,
            isFocused: Xo,
            isSelected: Qo,
            shouldShowDownArrow: la && ra,
            shouldShowUpArrow: aa && sa,
            maxIndexWidth: ls,
            index: ua,
            hideIndex: Y,
            extraChromeWidth: fe,
            inputValue: of,
            onInputChange: (sf) => {
              ut((rf) => {
                let da = new Map(rf);
                return da.set(le.value, sf), da
              })
            },
            onSubmit: (lf) => {
              let af = v && Object.values(v).some(ef);
              if (lf.trim() || af || le.allowEmptySubmitToCancel) x?.(le.value);
              else if (!le.ignoreEmptySubmit) D?.()
            },
            onExit: D,
            layout: "compact",
            showLabel: U,
            onOpenEditor: V,
            resetCursorOnUpdate: le.resetCursorOnUpdate,
            canPasteImage: R,
            onImagePaste: H,
            pastedContents: v,
            onRemoveImage: ue,
            imagesSelected: re,
            selectedImageIndex: Ve,
            onImagesSelectedChange: Oe,
            onSelectedImageIndexChange: ne
          }, String(le.value))
        }
        let ca = le.label;
        if (typeof le.label === "string" && c && le.label.includes(c)) {
          let as = le.label;
          let pa = as.indexOf(c);
          ca = r(Q, {
            children: [as.slice(0, pa), e(n, {
              ...pt.highlightedText(),
              children: c
            }), as.slice(pa + c.length)]
          })
        }
        let Zo = le.disabled === !0;
        return r(s, {
          flexDirection: "column",
          flexShrink: 0,
          children: [e(Vre, {
            isFocused: Xo,
            isSelected: Qo,
            shouldShowDownArrow: la && ra,
            shouldShowUpArrow: aa && sa,
            onClick: je(le),
            hoverStyle: f,
            children: r(Q, {
              children: [!Y && e(n, {
                dimColor: !0,
                children: `${ua}.`.padEnd(ls + 1)
              }), e(n, {
                dimColor: Zo,
                color: Zo ? void 0 : Qo ? "success" : Xo ? "suggestion" : void 0,
                children: ca
              })]
            })
          }), le.description && e(s, {
            paddingLeft: Y ? 4 : ls + 4,
            children: e(n, {
              dimColor: Zo || le.dimDescription !== !1,
              color: Zo ? void 0 : Qo ? "success" : Xo ? "suggestion" : void 0,
              children: e(Go, {
                children: le.description
              })
            })
          })]
        }, String(le.value))
      })
    })
  }
  let Je;
  if (E[55] !== X || E[56] !== Y) Je = Y ? 0 : X.length.toString().length, E[55] = X, E[56] = Y, E[57] = Je;
  else Je = E[57];
  let Kt = Je;
  if (at) {
    let $t, Xn;
    if (E[58] !== dt || E[59] !== X || E[60] !== Y || E[61] !== Kt || E[62] !== p.value) {
      $t = Y ? 0 : Kt + 2;
      let Ht;
      if (E[65] !== X || E[66] !== $t || E[67] !== p.value) {
        let Rt;
        if (E[69] !== $t || E[70] !== p.value) Rt = (ds) => {
          if (ds.type === "input") {
            return 0
          }
          let uf = p.value === ds.value ? 2 : 0;
          return 2 + $t + ie(PI(ds.label)) + uf
        }, E[69] = $t, E[70] = p.value, E[71] = Rt;
        else Rt = E[71];
        Ht = Math.max(...X.map(Rt));
        E[65] = X, E[66] = $t, E[67] = p.value, E[68] = Ht
      } else Ht = E[68];
      Xn = Math.min(Ht, Math.floor(dt * ql));
      E[58] = dt, E[59] = X, E[60] = Y, E[61] = Kt, E[62] = p.value, E[63] = $t, E[64] = Xn
    } else $t = E[63], Xn = E[64];
    let vf = p.visibleOptions.map((jt, df) => {
      let cf = jt.index === p.visibleFromIndex;
      let pf = jt.index === p.visibleToIndex - 1;
      let ff = p.visibleToIndex < u.length;
      let mf = p.visibleFromIndex > 0;
      let hf = p.visibleFromIndex + df + 1;
      let bf = !G && p.focusedValue === jt.value;
      let fa = p.value === jt.value;
      let gf = jt.disabled === !0;
      let ma = fa ? 2 : 0;
      let Qn = PI(jt.label);
      let Tn = jt.label;
      let ha = Xn - 2 - $t - ma;
      if (ie(Qn) > ha) Qn = mt(Qn, ha), Tn = Qn;
      if (typeof Tn === "string" && c && Tn.includes(c)) {
        let ps = Tn;
        let ba = ps.indexOf(c);
        Tn = r(Q, {
          children: [ps.slice(0, ba), e(n, {
            ...pt.highlightedText(),
            children: c
          }), ps.slice(ba + c.length)]
        })
      }
      return {
        option: jt,
        index: hf,
        label: Tn,
        labelWidth: 2 + $t + ie(Qn) + ma,
        isFocused: bf,
        isSelected: fa,
        isOptionDisabled: gf,
        shouldShowDownArrow: ff && pf,
        shouldShowUpArrow: mf && cf
      }
    });
    const Ht = pt.container();
    let Rt;
    if (E[72] !== je || E[73] !== Y || E[74] !== f || E[75] !== Kt || E[76] !== Xn) Rt = (me) => {
      if (me.option.type === "input") {
        return null
      }
      let ga = Xn - me.labelWidth;
      return r(ts, {
        isFocused: me.isFocused,
        shouldShowDownArrow: me.shouldShowDownArrow,
        shouldShowUpArrow: me.shouldShowUpArrow,
        onClick: je(me.option),
        hoverStyle: f,
        children: [r(s, {
          flexDirection: "row",
          flexShrink: 0,
          children: [e(n, {
            children: " "
          }), r(n, {
            dimColor: me.isOptionDisabled,
            color: me.isOptionDisabled ? void 0 : me.isSelected ? "success" : me.isFocused ? "suggestion" : void 0,
            children: [!Y && e(n, {
              dimColor: !0,
              children: `${me.index}.`.padEnd(Kt + 2)
            }), me.label]
          }), me.isSelected && r(n, {
            children: [" ", e(ft, {
              status: "success"
            })]
          }), ga > 0 && e(n, {
            children: " ".repeat(ga)
          })]
        }), e(s, {
          flexGrow: 1,
          marginLeft: 2,
          children: e(n, {
            wrap: "wrap",
            dimColor: me.option.descriptionColor === void 0 && (me.isOptionDisabled || me.option.dimDescription !== !1),
            color: me.isOptionDisabled ? me.option.descriptionColor : me.isSelected ? "success" : me.isFocused ? "suggestion" : me.option.descriptionColor,
            children: e(Go, {
              children: me.option.description || " "
            })
          })
        })]
      }, String(me.option.value))
    }, E[72] = je, E[73] = Y, E[74] = f, E[75] = Kt, E[76] = Xn, E[77] = Rt;
    else Rt = E[77];
    return e(Dt, {
      container: Ht,
      rows: ht,
      hiddenBelow: wt,
      children: vf.map(Rt)
    })
  }
  const fs = Dt,
    Ht = pt.container(),
    Rt = p.visibleOptions.map((_, va) => {
      if (_.type === "input") {
        let xf = we.has(_.value) ? we.get(_.value) : _.initialValue || "";
        let If = _.index === p.visibleFromIndex;
        let yf = _.index === p.visibleToIndex - 1;
        let Sf = p.visibleToIndex < u.length;
        let wf = p.visibleFromIndex > 0;
        let Cf = p.visibleFromIndex + va + 1;
        let Of = !G && p.focusedValue === _.value;
        let Tf = p.value === _.value;
        return e(BCe, {
          option: _,
          onClick: je(_),
          hoverStyle: f,
          isFocused: Of,
          isSelected: Tf,
          shouldShowDownArrow: Sf && yf,
          shouldShowUpArrow: wf && If,
          maxIndexWidth: Kt,
          index: Cf,
          hideIndex: Y,
          extraChromeWidth: fe,
          inputValue: xf,
          onInputChange: (Df) => {
            ut((Vf) => {
              let Ia = new Map(Vf);
              return Ia.set(_.value, Df), Ia
            })
          },
          onSubmit: (Ff) => {
            let kf = v && Object.values(v).some(tf);
            if (Ff.trim() || kf || _.allowEmptySubmitToCancel) x?.(_.value);
            else if (!_.ignoreEmptySubmit) D?.()
          },
          onExit: D,
          layout: "compact",
          showLabel: U,
          onOpenEditor: V,
          resetCursorOnUpdate: _.resetCursorOnUpdate,
          canPasteImage: R,
          onImagePaste: H,
          pastedContents: v,
          onRemoveImage: ue,
          imagesSelected: re,
          selectedImageIndex: Ve,
          onImagesSelectedChange: Oe,
          onSelectedImageIndexChange: ne
        }, String(_.value))
      }
      let ya = _.label;
      if (typeof _.label === "string" && c && _.label.includes(c)) {
        let ms = _.label;
        let Sa = ms.indexOf(c);
        ya = r(Q, {
          children: [ms.slice(0, Sa), e(n, {
            ...pt.highlightedText(),
            children: c
          }), ms.slice(Sa + c.length)]
        })
      }
      let Rf = _.index === p.visibleFromIndex;
      let Mf = _.index === p.visibleToIndex - 1;
      let Ef = p.visibleToIndex < u.length;
      let Pf = p.visibleFromIndex > 0;
      let Af = p.visibleFromIndex + va + 1;
      let hs = !G && p.focusedValue === _.value;
      let bs = p.value === _.value;
      let Zn = _.disabled === !0;
      return r(Vre, {
        isFocused: hs,
        isSelected: bs,
        shouldShowDownArrow: Ef && Mf,
        shouldShowUpArrow: Pf && Rf,
        onClick: je(_),
        hoverStyle: f,
        children: [r(s, {
          flexDirection: "row",
          flexShrink: 0,
          children: [!Y && e(n, {
            dimColor: !0,
            children: `${Af}.`.padEnd(Kt + 2)
          }), r(n, {
            dimColor: Zn,
            color: Zn ? void 0 : bs ? "success" : hs ? "suggestion" : void 0,
            children: [ya, U && _.description && r(n, {
              dimColor: Zn || _.dimDescription !== !1,
              children: [" ", _.description]
            })]
          })]
        }), !U && _.description && e(s, {
          flexShrink: 99,
          marginLeft: 2,
          children: e(n, {
            wrap: "wrap-trim",
            dimColor: Zn || _.dimDescription !== !1,
            color: Zn ? void 0 : bs ? "success" : hs ? "suggestion" : void 0,
            children: e(Go, {
              children: _.description
            })
          })
        })]
      }, String(_.value))
    });
  let wa;
  if (E[78] !== fs || E[79] !== wt || E[80] !== ht || E[81] !== Ht || E[82] !== Rt) wa = e(fs, {
    container: Ht,
    rows: ht,
    hiddenBelow: wt,
    children: Rt
  }), E[78] = fs, E[79] = wt, E[80] = ht, E[81] = Ht, E[82] = Rt, E[83] = wa;
  else wa = E[83];
  return wa
}
var Gl = 8,
  ql = 0.6;

function RLe(t, o) {
  let i = o === void 0 ? "compact" : o,
    {
      rows: a
    } = us(Te()),
    l = i === "expanded" ? 3 : i === "compact" ? 1 : 2,
    m = Math.max(1, Math.floor((a - Gl) / l));
  return Math.min(t, m)
}

function Dt(t) {
  let m = w(7),
    {
      container: o,
      rows: i,
      hiddenBelow: a,
      children: l
    } = t,
    c;
  if (m[0] !== l || m[1] !== i) c = e(UCe, {
    ...i,
    children: l
  }), m[0] = l, m[1] = i, m[2] = c;
  else c = m[2];
  let u;
  if (m[3] !== o || m[4] !== a || m[5] !== c) u = r(s, {
    ...o,
    children: [c, a]
  }), m[3] = o, m[4] = a, m[5] = c, m[6] = u;
  else u = m[6];
  return u
}

function ts(t) {
  let x = w(24),
    {
      isFocused: o,
      shouldShowDownArrow: i,
      shouldShowUpArrow: a,
      onClick: l,
      hoverStyle: m,
      children: c
    } = t,
    u = l !== void 0,
    [g, d] = BVe(u),
    b = $Ce(m),
    D = u && g && b === "inverse",
    I;
  if (x[0] !== o) I = {
    line: 0,
    column: 0,
    active: o
  }, x[0] = o, x[1] = I;
  else I = x[1];
  let W = Ek(I);
  const N = u && g && b === "tint" ? vR : void 0;
  let h;
  if (x[2] !== u || x[3] !== d) h = u ? () => d(!0) : void 0, x[2] = u, x[3] = d, x[4] = h;
  else h = x[4];
  let K;
  if (x[5] !== u || x[6] !== d) K = u ? () => d(!1) : void 0, x[5] = u, x[6] = d, x[7] = K;
  else K = x[7];
  let f;
  if (x[8] !== u || x[9] !== b || x[10] !== g || x[11] !== D || x[12] !== o || x[13] !== i || x[14] !== a) f = e(s, {
    flexShrink: 0,
    children: o ? e(n, {
      color: "suggestion",
      inverse: D,
      children: te.pointer
    }) : i ? e(n, {
      dimColor: !0,
      inverse: D,
      children: te.arrowDown
    }) : a ? e(n, {
      dimColor: !0,
      inverse: D,
      children: te.arrowUp
    }) : u && g && b === "pointer" ? e(n, {
      dimColor: !0,
      children: te.pointer
    }) : e(n, {
      inverse: D,
      children: " "
    })
  }), x[8] = u, x[9] = b, x[10] = g, x[11] = D, x[12] = o, x[13] = i, x[14] = a, x[15] = f;
  else f = x[15];
  let M;
  if (x[16] !== c || x[17] !== W || x[18] !== l || x[19] !== N || x[20] !== h || x[21] !== K || x[22] !== f) M = r(s, {
    ref: W,
    flexDirection: "row",
    flexShrink: 0,
    backgroundColor: N,
    onClick: l,
    onMouseEnter: h,
    onMouseLeave: K,
    children: [f, c]
  }), x[16] = c, x[17] = W, x[18] = l, x[19] = N, x[20] = h, x[21] = K, x[22] = f, x[23] = M;
  else M = x[23];
  return M
}
export {
  vR,
  $Ce,
  UCe,
  BVe,
  kR,
  Za,
  l_,
  rc,
  G2t,
  cs,
  e7,
  Tnr,
  Cnr,
  jvt,
  Vre,
  BCe,
  xc,
  Rnr,
  V2t,
  Hi,
  Xe,
  RLe
};
