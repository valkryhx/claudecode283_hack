// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { F } from "B:/~BUN/root/chunk-rpez7z7a.js";
import { qs, EQ, K5 } from "B:/~BUN/root/chunk-nggrknsv.js";
import { tt } from "B:/~BUN/root/chunk-hb6x4e3n.js";
import { br } from "B:/~BUN/root/chunk-g5gf7tps.js";
import { w } from "B:/~BUN/root/chunk-rysqv8v1.js";
import { zte, he } from "B:/~BUN/root/chunk-4qqgabd5.js";
import { mt } from "B:/~BUN/root/chunk-pjgzz98k.js";
import { eyt } from "B:/~BUN/root/chunk-htbmes7q.js";
import { s, n, zt, Go, ot, Ek, zCe, xa, Dr } from "B:/~BUN/root/chunk-damrp3r8.js";
import { gY, LF } from "B:/~BUN/root/chunk-1jz9m9yh.js";
import { oc } from "B:/~BUN/root/chunk-t7y4rt40.js";
import { Ev } from "B:/~BUN/root/chunk-sk7eej8z.js";
import { E0, El } from "B:/~BUN/root/chunk-5xxjpbgm.js";
import { Fo } from "B:/~BUN/root/chunk-tgzmva3g.js";
import { Ra } from "B:/~BUN/root/chunk-aw9w2cra.js";
import { xy } from "B:/~BUN/root/chunk-vw193yjw.js";
import { PI } from "B:/~BUN/root/chunk-dwajd7kx.js";
import { us } from "B:/~BUN/root/chunk-b900np4s.js";
import { Te } from "B:/~BUN/root/chunk-smy4yvhm.js";
import { Zl } from "B:/~BUN/root/chunk-ps74es0g.js";
import { q } from "B:/~BUN/root/chunk-bf7csy4f.js";
import { d_ } from "B:/~BUN/root/chunk-653rvs3k.js";
import { ft } from "B:/~BUN/root/chunk-jh7dpafw.js";
import { rt, on } from "B:/~BUN/root/chunk-pw5vpw1q.js";
import { Se } from "B:/~BUN/root/chunk-7dpyfa5r.js";
import { Uwn, K2t, Lr } from "B:/~BUN/root/chunk-rxj6qxcq.js";
import { Kl } from "B:/~BUN/root/chunk-9grc6xh0.js";
import { J0 } from "B:/~BUN/root/chunk-k382hx6g.js";
import { te } from "B:/~BUN/root/chunk-9tx73f8x.js";
import { u9o } from "B:/~BUN/root/chunk-54b5252d.js";
import { hS, Gvt } from "B:/~BUN/root/chunk-a8k6kvgb.js";
import { gt } from "B:/~BUN/root/chunk-vs438w4e.js";
import { Q, e, r } from "B:/~BUN/root/chunk-x2hkxw5q.js";
import { Kn } from "B:/~BUN/root/chunk-dsby0gnt.js";
import { mue } from "B:/~BUN/root/chunk-tx0dq5y3.js";
import { S_, Kd, qt, Mm, ae, Ee, P, Mo, Jt, Z, A, y, B } from "B:/~BUN/root/chunk-5hr2ysa5.js";
import { ie } from "B:/~BUN/root/chunk-t7350kw8.js";
import { S } from "B:/~BUN/root/chunk-ef0msk7r.js";
B();
function Za(t = E0) {
  let o = xa(),
    i = A(Date.now());
  return ae(() => El(o, i.current, t), [o, t]);
}
function l_() {
  return A(Date.now()).current;
}
function rc(t, o = E0) {
  let settled = Dr(o, t);
  return {
    remountKey: settled ? "settled" : "held",
    settled: settled
  };
}
function G2t() {
  let [epoch, o] = y(0),
    noteAttempt = ae(() => o(a => a + 1), []);
  return {
    epoch: epoch,
    noteAttempt: noteAttempt
  };
}
function cs() {
  let t = xa(),
    o = A(null),
    {
      epoch: epoch_2,
      noteAttempt: noteAttempt_2
    } = G2t(),
    refusedWithin = ae((c = E0) => o.current !== null && El(t, o.current, c), [t]),
    noteRefused = ae(() => {
      o.current = Date.now(), noteAttempt_2();
    }, [noteAttempt_2]);
  return {
    refusedWithin: refusedWithin,
    noteRefused: noteRefused,
    epoch: epoch_2
  };
}
B();
function Ha(x) {
  return Mm(x) ? x.key : "";
}
var vR = "userMessageBackground";
function $Ce(t = "tint") {
  return he.level === 0 ? "inverse" : t;
}
var to = qt("");
function UCe(t) {
  let o = w(14),
    i,
    windowStart;
  if (o[0] !== t) ({
    windowStart: windowStart,
    ...i
  } = t), o[0] = t, o[1] = i, o[2] = windowStart;else i = o[1], windowStart = o[2];
  let l = windowStart === void 0 ? 0 : windowStart,
    m,
    c,
    u;
  if (o[3] !== i.children || o[4] !== l) {
    let g = S_.toArray(i.children).map(Ha);
    m = to.Provider;
    c = l;
    u = g.join();
    o[3] = i.children, o[4] = l, o[5] = m, o[6] = c, o[7] = u;
  } else m = o[5], c = o[6], u = o[7];
  const value = `${c} ${u}`;
  let children;
  if (o[8] !== i) children = e(s, {
    flexDirection: "column",
    ...i
  }), o[8] = i, o[9] = children;else children = o[9];
  let D;
  if (o[10] !== m || o[11] !== value || o[12] !== children) D = e(m, {
    value: value,
    children: children
  }), o[10] = m, o[11] = value, o[12] = children, o[13] = D;else D = o[13];
  return D;
}
function BVe(t) {
  let m = w(5),
    o = Ee(to),
    [i, a] = y(null),
    l = t && i === o;
  if (i !== null && !l) a(null);
  let c;
  if (m[0] !== o) c = u => a(u ? o : null), m[0] = o, m[1] = c;else c = m[1];
  let g;
  if (m[2] !== l || m[3] !== c) g = [l, c], m[2] = l, m[3] = c, m[4] = g;else g = m[4];
  return g;
}
function kR(t) {
  let H = w(47),
    {
      isFocused: isFocused,
      isSelected: isSelected,
      children: children_2,
      description: l,
      showScrollDown: showScrollDown,
      showScrollUp: showScrollUp,
      styled: styled,
      disabled: disabled,
      idle: idle,
      declareCursor: declareCursor,
      onClick: onClick,
      hoverStyle: hoverStyle,
      onHoverChange: onHoverChange
    } = t,
    W = isSelected === void 0 ? !1 : isSelected,
    N = styled === void 0 ? !0 : styled,
    h = disabled === void 0 ? !1 : disabled,
    idle_2 = idle === void 0 ? !1 : idle,
    f = hoverStyle === void 0 ? "tint" : hoverStyle,
    M = !h && onClick !== void 0,
    C = !h && (onClick !== void 0 || onHoverChange !== void 0),
    [O, L] = BVe(C),
    V = O && M,
    R = $Ce(f),
    v;
  if (H[0] !== onHoverChange || H[1] !== L) v = ue => {
    L(ue), onHoverChange?.(ue);
  }, H[0] = onHoverChange, H[1] = L, H[2] = v;else v = H[2];
  let ge = v,
    G;
  if (H[3] !== h || H[4] !== idle_2 || H[5] !== isFocused || H[6] !== W || H[7] !== N) G = function Y() {
    if (h) {
      return "inactive";
    }
    if (!N) {
      return;
    }
    if (W) {
      return "success";
    }
    if (isFocused && !idle_2) {
      return "suggestion";
    }
  }, H[3] = h, H[4] = idle_2, H[5] = isFocused, H[6] = W, H[7] = N, H[8] = G;else G = H[8];
  let Y = G,
    color = Y();
  const active = isFocused && !h && declareCursor !== !1;
  let X;
  if (H[9] !== active) X = {
    line: 0,
    column: 0,
    active: active
  }, H[9] = active, H[10] = X;else X = H[10];
  let ref = Ek(X);
  const backgroundColor = V && R === "tint" ? vR : void 0,
    onClick_2 = M ? onClick : void 0;
  let onMouseEnter;
  if (H[11] !== C || H[12] !== ge) onMouseEnter = C ? () => ge(!0) : void 0, H[11] = C, H[12] = ge, H[13] = onMouseEnter;else onMouseEnter = H[13];
  let onMouseLeave;
  if (H[14] !== C || H[15] !== ge) onMouseLeave = C ? () => ge(!1) : void 0, H[14] = C, H[15] = ge, H[16] = onMouseLeave;else onMouseLeave = H[16];
  const hovered = V && R === "pointer",
    inverse = V && R === "inverse";
  let Ve;
  if (H[17] !== h || H[18] !== idle_2 || H[19] !== isFocused || H[20] !== showScrollDown || H[21] !== showScrollUp || H[22] !== hovered || H[23] !== inverse) Ve = e(s, {
    flexShrink: 0,
    children: e(si, {
      disabled: h,
      isFocused: isFocused,
      idle: idle_2,
      showScrollUp: showScrollUp,
      showScrollDown: showScrollDown,
      hovered: hovered,
      inverse: inverse
    })
  }), H[17] = h, H[18] = idle_2, H[19] = isFocused, H[20] = showScrollDown, H[21] = showScrollUp, H[22] = hovered, H[23] = inverse, H[24] = Ve;else Ve = H[24];
  let ne;
  if (H[25] !== children_2 || H[26] !== h || H[27] !== N || H[28] !== color) ne = N ? e(n, {
    color: color,
    dimColor: h,
    wrap: "truncate-end",
    children: children_2
  }) : children_2, H[25] = children_2, H[26] = h, H[27] = N, H[28] = color, H[29] = ne;else ne = H[29];
  let E;
  if (H[30] !== h || H[31] !== W) E = W && !h && e(s, {
    flexShrink: 0,
    children: e(n, {
      "aria-label": "(selected)",
      color: "success",
      children: te.tick
    })
  }), H[30] = h, H[31] = W, H[32] = E;else E = H[32];
  let ye;
  if (H[33] !== Ve || H[34] !== ne || H[35] !== E) ye = r(s, {
    flexDirection: "row",
    gap: 1,
    children: [Ve, ne, E]
  }), H[33] = Ve, H[34] = ne, H[35] = E, H[36] = ye;else ye = H[36];
  let ee;
  if (H[37] !== l) ee = l && e(s, {
    paddingLeft: 2,
    children: e(n, {
      dimColor: !0,
      wrap: "truncate-end",
      children: l
    })
  }), H[37] = l, H[38] = ee;else ee = H[38];
  let $e;
  if (H[39] !== ref || H[40] !== backgroundColor || H[41] !== onClick_2 || H[42] !== onMouseEnter || H[43] !== onMouseLeave || H[44] !== ye || H[45] !== ee) $e = r(s, {
    ref: ref,
    flexDirection: "column",
    backgroundColor: backgroundColor,
    onClick: onClick_2,
    onMouseEnter: onMouseEnter,
    onMouseLeave: onMouseLeave,
    children: [ye, ee]
  }), H[39] = ref, H[40] = backgroundColor, H[41] = onClick_2, H[42] = onMouseEnter, H[43] = onMouseLeave, H[44] = ye, H[45] = ee, H[46] = $e;else $e = H[46];
  return $e;
}
function si(t) {
  let g = w(12),
    {
      disabled: disabled_2,
      isFocused: isFocused_2,
      idle: a,
      showScrollUp: showScrollUp_2,
      showScrollDown: showScrollDown_2,
      hovered: hovered_2,
      inverse: inverse_2
    } = t;
  if (disabled_2) {
    let d;
    if (g[0] === S) d = e(n, {
      "aria-hidden": !0,
      children: " "
    }), g[0] = d;else d = g[0];
    return d;
  }
  if (isFocused_2) {
    const color_2 = a ? void 0 : "suggestion";
    let b;
    if (g[1] !== a || g[2] !== inverse_2 || g[3] !== color_2) b = e(n, {
      "aria-hidden": !0,
      color: color_2,
      dimColor: a,
      inverse: inverse_2,
      children: te.pointer
    }), g[1] = a, g[2] = inverse_2, g[3] = color_2, g[4] = b;else b = g[4];
    return b;
  }
  if (showScrollDown_2) {
    let d;
    if (g[5] !== inverse_2) d = e(n, {
      "aria-label": "(more below)",
      dimColor: !0,
      inverse: inverse_2,
      children: te.arrowDown
    }), g[5] = inverse_2, g[6] = d;else d = g[6];
    return d;
  }
  if (showScrollUp_2) {
    let d;
    if (g[7] !== inverse_2) d = e(n, {
      "aria-label": "(more above)",
      dimColor: !0,
      inverse: inverse_2,
      children: te.arrowUp
    }), g[7] = inverse_2, g[8] = d;else d = g[8];
    return d;
  }
  if (hovered_2) {
    let d;
    if (g[9] === S) d = e(n, {
      "aria-hidden": !0,
      dimColor: !0,
      children: te.pointer
    }), g[9] = d;else d = g[9];
    return d;
  }
  let d;
  if (g[10] !== inverse_2) d = e(n, {
    "aria-hidden": !0,
    inverse: inverse_2,
    children: " "
  }), g[10] = inverse_2, g[11] = d;else d = g[11];
  return d;
}
B();
function Yu(kt) {
  return String(kt.value);
}
function Ju() {
  return null;
}
function Xu() {
  return "";
}
function Qu() {
  return null;
}
function Zu() {
  return "";
}
function ed() {
  return "";
}
function td() {
  return null;
}
function nd() {
  return "";
}
function od() {
  return "";
}
function id() {
  return null;
}
function sd() {
  return "";
}
function rd() {
  return null;
}
function ld() {
  return null;
}
function ad() {
  return "";
}
function ud(ct) {
  return ct.type !== "input";
}
function dd() {
  return "";
}
function cd() {
  return null;
}
function pd(ea) {
  return String(ea.value);
}
function fd() {
  return null;
}
function md() {
  return null;
}
function hd() {
  return "";
}
function bd() {
  return null;
}
function gd() {
  return "";
}
function vd() {
  return "";
}
function xd() {
  return null;
}
function Id() {
  return null;
}
function yd() {
  return null;
}
function Sd() {
  return "";
}
function wd() {
  return "";
}
function Cd() {
  return "";
}
function Od() {
  return "";
}
function Td() {
  return null;
}
function Dd() {
  return null;
}
function Vd() {
  return null;
}
function Fd(os) {
  return os.type !== "input";
}
function kd() {
  return "";
}
function Rd(ta, na) {
  return ta - na;
}
function Md(is) {
  return String(is + 1);
}
function Ed() {
  return null;
}
function Pd() {
  return "";
}
function Ad() {
  return null;
}
function Wd() {
  return null;
}
function Bd() {
  return "";
}
function Nd() {
  return "";
}
function Ld(Ve) {
  return Ve.slice(0, -1);
}
function ze(t) {
  let l = w(3),
    [o, i] = y(t),
    a = A(t),
    m;
  if (l[0] === S) m = c => {
    a.current = c(a.current), i(a.current);
  }, l[0] = m;else m = l[0];
  let u = m,
    g;
  if (l[1] !== o) g = [o, a, u], l[1] = o, l[2] = g;else g = l[2];
  return g;
}
function Zt() {
  return ze("");
}
function wo(t) {
  if (t.length <= 1) return t[0] ?? "";
  if (t.length === 2) return `${t[0]} or ${t[1]}`;
  return `${t.slice(0, -1).join(", ")}, or ${t.at(-1)}`;
}
var ri = 300;
function qa(t) {
  return ` \u2026 +${t} more characters`;
}
function Ps(t) {
  if (t.length <= ri) return t;
  let o = qs(t, ri);
  if (o === t) return t;
  let i = [...t].length - ri;
  return o + qa(i);
}
function Ci(t, o) {
  let m = w(18),
    i = o === void 0 ? E0 : o,
    a = xa(),
    l = Za(i),
    c;
  if (m[0] !== t || m[1] !== a || m[2] !== l || m[3] !== i) c = t === void 0 ? l : () => El(a, t, i), m[0] = t, m[1] = a, m[2] = l, m[3] = i, m[4] = c;else c = m[4];
  let u = c,
    {
      refusedWithin: refusedWithin_2,
      noteRefused: noteRefused_2
    } = cs(),
    b;
  if (m[5] !== u || m[6] !== noteRefused_2 || m[7] !== refusedWithin_2 || m[8] !== i) b = () => {
    if (u() || refusedWithin_2(i)) {
      return noteRefused_2(), !0;
    }
    return !1;
  }, m[5] = u, m[6] = noteRefused_2, m[7] = refusedWithin_2, m[8] = i, m[9] = b;else b = m[9];
  let refuse = b,
    x;
  if (m[10] !== u || m[11] !== noteRefused_2 || m[12] !== refusedWithin_2 || m[13] !== i) x = () => {
    if (!u() && !refusedWithin_2(i)) {
      return !1;
    }
    return noteRefused_2(), !0;
  }, m[10] = u, m[11] = noteRefused_2, m[12] = refusedWithin_2, m[13] = i, m[14] = x;else x = m[14];
  let refuseCharacter = x,
    W;
  if (m[15] !== refuse || m[16] !== refuseCharacter) W = {
    refuse: refuse,
    refuseCharacter: refuseCharacter
  }, m[15] = refuse, m[16] = refuseCharacter, m[17] = W;else W = m[17];
  return W;
}
function e7(t) {
  let O = w(73),
    {
      options: options,
      onChange: onChange,
      onFocus: onFocus,
      onCancel: onCancel,
      isDisabled: isDisabled,
      disableSelection: disableSelection,
      defaultValue: defaultValue,
      refuseInput: refuseInput,
      headings: headings,
      drawLabels: drawLabels,
      hidePromptWhileDisabled: hidePromptWhileDisabled
    } = t,
    x = isDisabled === void 0 ? !1 : isDisabled,
    I = disableSelection === void 0 ? !1 : disableSelection,
    drawLabel = drawLabels === void 0 ? !1 : drawLabels,
    N = hidePromptWhileDisabled === void 0 ? !1 : hidePromptWhileDisabled,
    [h, K, f] = Zt(),
    [children_3, C] = y(null),
    L;
  if (O[0] === S) L = eyt(), O[0] = L;else L = O[0];
  let V = L,
    [R, H, v] = ze(null),
    ue;
  if (O[1] !== options) ue = options.map(Yu).join("\x00"), O[1] = options, O[2] = ue;else ue = O[2];
  let ge = ue,
    [G, Y] = y(ge);
  if (G !== ge) Y(ge), v(Ju), f(Xu);
  let [Ie, pe, X] = ze(null);
  if (G !== ge && Ie !== null) X(Qu), f(Zu);
  let T = Ie !== null && options[Ie - 1]?.type === "input" ? options[Ie - 1] : null,
    ref_3 = A(null);
  xy(ref_3, !x), Ra("select", !!onCancel && !x);
  let U;
  if (O[3] !== I || O[4] !== T || O[5] !== onChange || O[6] !== onFocus || O[7] !== options || O[8] !== f || O[9] !== v || O[10] !== X) U = fe => {
    if (I) {
      return;
    }
    if (T) {
      if (fe === "" && !T.screenReaderEmptySubmit) {
        C("Enter some text, or Escape for the list.");
        return;
      }
      if (onChange?.(T.value) === !1) {
        return;
      }
      f(ed), X(td);
      return;
    }
    let J = Number.parseInt(fe, 10);
    if (!Number.isFinite(J) || J < 1 || J > options.length) {
      C(options.length === 0 ? `Invalid selection "${fe}". Nothing to select.` : `Invalid selection "${fe}". Enter a number between 1 and ${options.length}.`), f(nd);
      return;
    }
    let re = options[J - 1];
    if (re.disabled) {
      C(`Option ${J} is disabled.`), f(od);
      return;
    }
    if (re.type === "input") {
      X(() => J), v(id);
      let Oe = re.initialValue ?? "";
      f(() => Oe), re.onChange(Oe), onFocus?.(re.value);
      return;
    }
    if (onChange?.(re.value) === !1) {
      return;
    }
    f(sd), v(rd);
  }, O[3] = I, O[4] = T, O[5] = onChange, O[6] = onFocus, O[7] = options, O[8] = f, O[9] = v, O[10] = X, O[11] = U;else U = O[11];
  let Ve = U,
    ne;
  if (O[12] !== K || O[13] !== I || O[14] !== H || O[15] !== T || O[16] !== pe || O[17] !== x || O[18] !== onCancel || O[19] !== onFocus || O[20] !== options || O[21] !== refuseInput || O[22] !== f || O[23] !== v || O[24] !== X || O[25] !== Ve) ne = E => {
    if (x) {
      return;
    }
    if (E.key === "escape" && E.name === "escape") {
      if (E.preventDefault(), T) {
        X(ld), f(ad);
        let ye = options.find(ud) ?? options[0];
        if (ye) onFocus?.(ye.value);
        return;
      }
      onCancel?.();
      return;
    }
    if (I) {
      return;
    }
    if (E.key === "return" && E.name === "return") {
      if (E.preventDefault(), refuseInput?.()) {
        return;
      }
      if (T || K.current.length > 0) {
        Ve(K.current);
        return;
      }
      if (V && H.current !== null) Ve(String(H.current + 1));
      return;
    }
    if (E.key === "backspace" || E.key === "delete") {
      E.preventDefault();
      let ee = K.current.slice(0, -1);
      if (T && T.onChange(ee) === !1) {
        return;
      }
      f(() => ee);
      return;
    }
    if (V && !T && pe.current === null && (E.name === "up" || E.name === "down")) {
      if (E.preventDefault(), refuseInput?.()) {
        return;
      }
      C(null), f(dd);
      let $e = options.length;
      if ($e === 0) {
        return;
      }
      let current = H.current;
      let ut = current === null ? E.name === "down" ? 0 : $e - 1 : (current + (E.name === "down" ? 1 : -1) + $e) % $e;
      v(() => ut);
      let Ae = options[ut];
      if (Ae) onFocus?.(Ae.value);
      return;
    }
    if (T) {
      if (E.key.length === 1 && !E.ctrl && !E.meta) {
        E.preventDefault();
        let Wt = K.current + E.key;
        if (T.onChange(Wt) === !1) {
          return;
        }
        f(() => Wt);
      }
      return;
    }
    let Vt = EQ(E.key);
    if (/^[0-9]$/.test(Vt)) {
      if (E.preventDefault(), refuseInput?.()) {
        return;
      }
      C(null), f(Bt => Bt + Vt), v(cd);
    }
  }, O[12] = K, O[13] = I, O[14] = H, O[15] = T, O[16] = pe, O[17] = x, O[18] = onCancel, O[19] = onFocus, O[20] = options, O[21] = refuseInput, O[22] = f, O[23] = v, O[24] = X, O[25] = Ve, O[26] = ne;else ne = O[26];
  let onKeyDown = ne,
    It;
  if (O[27] !== h || O[28] !== T || O[29] !== Ie || O[30] !== onCancel || O[31] !== options.length) It = T ? `Enter text for option ${Ie} (${PI(T.label)}), or Escape for the list: ${h}` : options.length === 0 ? `Nothing to select${onCancel ? ". Escape to cancel" : ""}: ${h}` : `Select with numbers [1-${options.length}]${V ? " or up / down arrow keys" : ""}. Then ${wo(["Enter to submit", ...(onCancel ? ["Escape to cancel"] : [])])}: ${h}`, O[27] = h, O[28] = T, O[29] = Ie, O[30] = onCancel, O[31] = options.length, O[32] = It;else It = O[32];
  let children_4 = It,
    column;
  if (O[33] !== children_4) column = ie(children_4), O[33] = children_4, O[34] = column;else column = O[34];
  const active_2 = !x && !I && R === null;
  let qe;
  if (O[35] !== column || O[36] !== active_2) qe = {
    line: 0,
    column: column,
    active: active_2,
    visible: !0
  }, O[35] = column, O[36] = active_2, O[37] = qe;else qe = O[37];
  let ref_2 = Ek(qe),
    dt;
  if (O[38] !== onKeyDown || O[39] !== x) dt = x ? {} : {
    tabIndex: 0,
    onKeyDown: onKeyDown
  }, O[38] = onKeyDown, O[39] = x, O[40] = dt;else dt = O[40];
  let De;
  if (O[41] !== defaultValue || O[42] !== I || O[43] !== drawLabel || O[44] !== R || O[45] !== headings || O[46] !== x || O[47] !== options) {
    let We;
    if (O[49] !== defaultValue || O[50] !== I || O[51] !== drawLabel || O[52] !== R || O[53] !== headings || O[54] !== x) We = (option, Ft) => r(Kd, {
      children: [headings?.get(Ft), e(Bn, {
        index: Ft + 1,
        option: option,
        selected: defaultValue !== void 0 && option.value === defaultValue,
        focused: R === Ft && !x && !I,
        drawLabel: drawLabel
      })]
    }, String(option.value)), O[49] = defaultValue, O[50] = I, O[51] = drawLabel, O[52] = R, O[53] = headings, O[54] = x, O[55] = We;else We = O[55];
    De = options.map(We);
    O[41] = defaultValue, O[42] = I, O[43] = drawLabel, O[44] = R, O[45] = headings, O[46] = x, O[47] = options, O[48] = De;
  } else De = O[48];
  let We;
  if (O[56] !== headings || O[57] !== options.length) We = headings?.get(options.length), O[56] = headings, O[57] = options.length, O[58] = We;else We = O[58];
  let yt;
  if (O[59] !== children_3) yt = children_3 && e(n, {
    children: children_3
  }), O[59] = children_3, O[60] = yt;else yt = O[60];
  let Be;
  if (O[61] !== ref_2 || O[62] !== I || O[63] !== N || O[64] !== x || O[65] !== children_4) Be = !I && !(x && N) && e(s, {
    ref: ref_2,
    children: e(n, {
      children: children_4
    })
  }), O[61] = ref_2, O[62] = I, O[63] = N, O[64] = x, O[65] = children_4, O[66] = Be;else Be = O[66];
  let St;
  if (O[67] !== dt || O[68] !== De || O[69] !== We || O[70] !== yt || O[71] !== Be) St = r(s, {
    ref: ref_3,
    flexDirection: "column",
    ...dt,
    children: [De, We, yt, Be]
  }), O[67] = dt, O[68] = De, O[69] = We, O[70] = yt, O[71] = Be, O[72] = St;else St = O[72];
  return St;
}
function Tnr(t) {
  let b = w(91),
    {
      options: options_2,
      defaultValue: defaultValue_2,
      onChange: onChange_2,
      onSubmit: onSubmit,
      onFocus: onFocus_2,
      onCancel: onCancel_2,
      isDisabled: isDisabled_2,
      submitButtonText: submitButtonText,
      refuseInput: refuseInput_2
    } = t,
    D;
  if (b[0] !== defaultValue_2) D = defaultValue_2 === void 0 ? [] : defaultValue_2, b[0] = defaultValue_2, b[1] = D;else D = b[1];
  let x = D,
    I = isDisabled_2 === void 0 ? !1 : isDisabled_2,
    [W, N, h] = Zt(),
    [children_5, f] = y(null),
    M;
  if (b[2] === S) M = eyt(), b[2] = M;else M = b[2];
  let C = M,
    [O, L, V] = ze(null),
    [R, H, v] = ze(null),
    ue;
  if (b[3] !== options_2) ue = options_2.map(pd).join("\x00"), b[3] = options_2, b[4] = ue;else ue = b[4];
  let ge = ue,
    [G, Y] = y(ge);
  if (G !== ge) Y(ge), V(fd), v(md), h(hd);
  let Ie;
  if (b[5] !== x || b[6] !== options_2) Ie = () => new Set(options_2.flatMap((item, index) => !item.disabled && x.includes(item.value) ? [index] : [])), b[5] = x, b[6] = options_2, b[7] = Ie;else Ie = b[7];
  let T = Ie,
    [ve, U] = y(null),
    fe = A(!1),
    J = A(!1),
    re;
  if (b[8] !== onSubmit || b[9] !== ve) re = () => {
    if (ve !== null) {
      let Oe = [...ve];
      U(null), fe.current = !1, onSubmit?.(Oe);
    }
  }, b[8] = onSubmit, b[9] = ve, b[10] = re;else re = b[10];
  let Ve;
  if (b[11] !== ve) Ve = [ve], b[11] = ve, b[12] = Ve;else Ve = b[12];
  P(re, Ve);
  let [ne, E, ye] = ze(null);
  if (G !== ge && ne !== null) ye(bd), h(gd);
  let ee = ne && options_2[ne.index - 1]?.type === "input" ? options_2[ne.index - 1] : null,
    ref_5 = A(null);
  xy(ref_5, !I), Ra("multi-select", !!onCancel_2 && !I);
  let we;
  if (b[13] !== onChange_2 || b[14] !== h || b[15] !== V || b[16] !== ye || b[17] !== v) we = ut => {
    if (fe.current = !0, onChange_2?.([...ut]) === !1) {
      fe.current = !1;
      return;
    }
    U(ut), h(vd), ye(xd), V(Id), v(yd);
  }, b[13] = onChange_2, b[14] = h, b[15] = V, b[16] = ye, b[17] = v, b[18] = we;else we = b[18];
  let Ae = we,
    Wt;
  if (b[19] !== x || b[20] !== Ae || b[21] !== ee || b[22] !== ne || b[23] !== onFocus_2 || b[24] !== options_2 || b[25] !== h || b[26] !== V || b[27] !== ye || b[28] !== v) Wt = Vt => {
    if (ee && ne) {
      if (Vt === "") {
        f("Enter some text, or Escape for the list.");
        return;
      }
      Ae([...ne.stashed, ee.value]);
      return;
    }
    let raw = Vt.trim();
    if (raw === "") {
      Ae(x);
      return;
    }
    let Fe = raw.split(/[\s,]+/).filter(Boolean);
    if (Fe.length === 0) {
      Ae(x);
      return;
    }
    let It = new Set();
    let stashed = [];
    let ke = null;
    for (const lt of Fe) {
      if (!/^\d+$/.test(lt)) {
        f(`Invalid selection "${lt}". Enter numbers between 1 and ${options_2.length}, comma- or space-separated.`), h(Sd);
        return;
      }
      let index_2 = Number.parseInt(lt, 10);
      if (It.has(index_2)) {
        continue;
      }
      if (It.add(index_2), index_2 < 1 || index_2 > options_2.length) {
        f(`Invalid selection "${lt}". Enter numbers between 1 and ${options_2.length}, comma- or space-separated.`), h(wd);
        return;
      }
      let opt = options_2[index_2 - 1];
      if (opt.disabled) {
        f(`Option ${index_2} is disabled.`), h(Cd);
        return;
      }
      if (opt.type === "input") {
        if (ke) {
          f("Only one free-text option can be included per selection."), h(Od);
          return;
        }
        ke = {
          index: index_2,
          opt: opt
        };
        continue;
      }
      stashed.push(opt.value);
    }
    if (ke?.opt) {
      ye(() => ({
        index: ke.index,
        stashed: stashed,
        raw: raw
      })), V(Td), v(Dd);
      let dt = ke.opt.initialValue ?? "";
      h(() => dt), ke.opt.onChange(dt), onFocus_2?.(ke.opt.value);
      return;
    }
    Ae(stashed);
  }, b[19] = x, b[20] = Ae, b[21] = ee, b[22] = ne, b[23] = onFocus_2, b[24] = options_2, b[25] = h, b[26] = V, b[27] = ye, b[28] = v, b[29] = Wt;else Wt = b[29];
  let De = Wt,
    We;
  if (b[30] !== N || b[31] !== T || b[32] !== Ae || b[33] !== L || b[34] !== ee || b[35] !== ne || b[36] !== E || b[37] !== I || b[38] !== onCancel_2 || b[39] !== onFocus_2 || b[40] !== options_2 || b[41] !== refuseInput_2 || b[42] !== h || b[43] !== V || b[44] !== ye || b[45] !== v || b[46] !== De || b[47] !== H) We = p => {
    if (I) {
      return;
    }
    if (p.key === "escape" && p.name === "escape") {
      if (p.preventDefault(), ne) {
        let {
          raw: raw_2
        } = ne;
        ye(Vd), h(() => raw_2);
        let yt = options_2.find(Fd) ?? options_2[0];
        if (yt) onFocus_2?.(yt.value);
        return;
      }
      onCancel_2?.();
      return;
    }
    if (p.key === "return" && p.name === "return") {
      if (p.preventDefault(), J.current) {
        refuseInput_2?.(), J.current = !1, h(kd), f("Part of that entry arrived before the list was ready \u2014 enter your selection again.");
        return;
      }
      if (refuseInput_2?.()) {
        return;
      }
      if (fe.current) {
        return;
      }
      if (C && !ee && N.current.length === 0 && H.current !== null) {
        let Be = [...H.current].sort(Rd);
        if (Be.length === 0) Ae([]);else De(Be.map(Md).join(" "));
        return;
      }
      De(N.current);
      return;
    }
    if (p.key === "backspace" || p.key === "delete") {
      p.preventDefault();
      let current_2 = N.current;
      let kt = current_2.slice(0, -1);
      if (ee && ee.onChange(kt) === !1) {
        return;
      }
      if (h(() => kt), !ee && current_2 !== kt) v(Ed);
      return;
    }
    if (C && !ee && E.current === null && (p.name === "up" || p.name === "down")) {
      if (p.preventDefault(), refuseInput_2?.()) {
        return;
      }
      f(null), h(Pd), J.current = !1;
      let ct = options_2.length;
      if (ct === 0) {
        return;
      }
      let current_3 = L.current;
      let je = current_3 === null ? p.name === "down" ? 0 : ct - 1 : (current_3 + (p.name === "down" ? 1 : -1) + ct) % ct;
      V(() => je);
      let Nt = options_2[je];
      if (Nt) onFocus_2?.(Nt.value);
      return;
    }
    if (C && !ee && E.current === null && L.current !== null && K5(p.key) === " ") {
      if (p.preventDefault(), refuseInput_2?.()) {
        return;
      }
      let current_4 = L.current;
      let ln = options_2[current_4];
      if (!ln) {
        return;
      }
      if (ln.disabled) {
        f(`Option ${current_4 + 1} is disabled.`);
        return;
      }
      f(null), v(Gn => {
        let Lt = new Set(Gn ?? T());
        if (Lt.has(current_4)) Lt.delete(current_4);else Lt.add(current_4);
        return Lt;
      });
      return;
    }
    if (ee) {
      if (p.key.length === 1 && !p.ctrl && !p.meta) {
        p.preventDefault();
        let qn = N.current + p.key;
        if (ee.onChange(qn) === !1) {
          return;
        }
        h(() => qn);
      }
      return;
    }
    let Yn = K5(EQ(p.key)).replace("\uFF0C", ",").replace("\u3001", ",");
    if (/^[0-9, ]$/.test(Yn)) {
      if (p.preventDefault(), J.current) {
        refuseInput_2?.();
        return;
      }
      if (refuseInput_2?.()) {
        J.current = !0;
        return;
      }
      f(null), h(pt => pt + Yn), V(Ad), v(Wd);
    }
  }, b[30] = N, b[31] = T, b[32] = Ae, b[33] = L, b[34] = ee, b[35] = ne, b[36] = E, b[37] = I, b[38] = onCancel_2, b[39] = onFocus_2, b[40] = options_2, b[41] = refuseInput_2, b[42] = h, b[43] = V, b[44] = ye, b[45] = v, b[46] = De, b[47] = H, b[48] = We;else We = b[48];
  let onKeyDown_2 = We,
    wt;
  if (b[49] !== W || b[50] !== x || b[51] !== ee || b[52] !== ne?.index || b[53] !== onCancel_2 || b[54] !== options_2.length || b[55] !== submitButtonText || b[56] !== R) wt = ee ? `Enter text for option ${ne?.index} (${PI(ee.label)}), or Escape for the list: ${W}` : `Select with numbers [1-${options_2.length}] (comma- or space-separated for several)${C ? " or up / down arrow keys" : ""}. Then ${wo([...(C ? ["Space to toggle"] : []), `Enter to ${submitButtonText ?? "submit"}`, ...(x.length > 0 && R === null ? ["bare Enter for defaults"] : []), ...(onCancel_2 ? ["Escape to cancel"] : [])])}: ${W}`, b[49] = W, b[50] = x, b[51] = ee, b[52] = ne?.index, b[53] = onCancel_2, b[54] = options_2.length, b[55] = submitButtonText, b[56] = R, b[57] = wt;else wt = b[57];
  let children_6 = wt,
    column_2;
  if (b[58] !== children_6) column_2 = ie(children_6), b[58] = children_6, b[59] = column_2;else column_2 = b[59];
  const active_3 = !I && O === null;
  let un;
  if (b[60] !== column_2 || b[61] !== active_3) un = {
    line: 0,
    column: column_2,
    active: active_3,
    visible: !0
  }, b[60] = column_2, b[61] = active_3, b[62] = un;else un = b[62];
  let ref_4 = Ek(un),
    dn;
  if (b[63] !== x) dn = new Set(x), b[63] = x, b[64] = dn;else dn = b[64];
  let bt = dn,
    Ut;
  if (b[65] !== onKeyDown_2 || b[66] !== I) Ut = I ? {} : {
    tabIndex: 0,
    onKeyDown: onKeyDown_2
  }, b[65] = onKeyDown_2, b[66] = I, b[67] = Ut;else Ut = b[67];
  let cn;
  if (b[68] !== bt || b[69] !== O || b[70] !== I || b[71] !== options_2 || b[72] !== R) {
    let Qe;
    if (b[74] !== bt || b[75] !== O || b[76] !== I || b[77] !== R) Qe = (option_2, pn) => e(Bn, {
      index: pn + 1,
      option: option_2,
      selected: R ? R.has(pn) : bt.has(option_2.value),
      focused: O === pn && !I
    }, String(option_2.value)), b[74] = bt, b[75] = O, b[76] = I, b[77] = R, b[78] = Qe;else Qe = b[78];
    cn = options_2.map(Qe);
    b[68] = bt, b[69] = O, b[70] = I, b[71] = options_2, b[72] = R, b[73] = cn;
  } else cn = b[73];
  let Qe;
  if (b[79] !== children_5) Qe = children_5 && e(n, {
    children: children_5
  }), b[79] = children_5, b[80] = Qe;else Qe = b[80];
  let children_7;
  if (b[81] !== children_6) children_7 = e(n, {
    children: children_6
  }), b[81] = children_6, b[82] = children_7;else children_7 = b[82];
  let Jn;
  if (b[83] !== ref_4 || b[84] !== children_7) Jn = e(s, {
    ref: ref_4,
    children: children_7
  }), b[83] = ref_4, b[84] = children_7, b[85] = Jn;else Jn = b[85];
  let ns;
  if (b[86] !== Ut || b[87] !== cn || b[88] !== Qe || b[89] !== Jn) ns = r(s, {
    ref: ref_5,
    flexDirection: "column",
    ...Ut,
    children: [cn, Qe, Jn]
  }), b[86] = Ut, b[87] = cn, b[88] = Qe, b[89] = Jn, b[90] = ns;else ns = b[90];
  return ns;
}
function Bn(t) {
  let u = w(26),
    {
      index: index_3,
      option: option_3,
      selected: selected,
      focused: l,
      drawLabel: drawLabel_2
    } = t,
    c = drawLabel_2 === void 0 ? !1 : drawLabel_2,
    g;
  if (u[0] !== l) g = {
    line: 0,
    column: 0,
    active: l,
    visible: !0
  }, u[0] = l, u[1] = g;else g = u[1];
  let ref_6 = Ek(g),
    b;
  if (u[2] !== option_3.label) b = PI(option_3.label), u[2] = option_3.label, u[3] = b;else b = u[3];
  let D = b,
    x = option_3.description ? ` \u2014 ${option_3.description}` : "";
  const I = `${D}${x}`;
  let W;
  if (u[4] !== I) W = Ps(I), u[4] = I, u[5] = W;else W = u[5];
  let N = W;
  const h = option_3.disabled ? "(disabled)" : null,
    K = selected ? "(selected)" : null;
  let f;
  if (u[6] !== h || u[7] !== K) f = [h, K].filter(Boolean), u[6] = h, u[7] = K, u[8] = f;else f = u[8];
  let M = f.join(" ");
  if (c) {
    const C = M ? ` ${M}` : "";
    let O;
    if (u[9] !== index_3 || u[10] !== C) O = r(n, {
      children: [index_3, ".", C]
    }), u[9] = index_3, u[10] = C, u[11] = O;else O = u[11];
    let L;
    if (u[12] !== option_3.description) L = option_3.description && r(n, {
      children: ["\u2014 ", option_3.description]
    }), u[12] = option_3.description, u[13] = L;else L = u[13];
    let V;
    if (u[14] !== ref_6 || u[15] !== option_3.label || u[16] !== O || u[17] !== L) V = r(s, {
      ref: ref_6,
      children: [O, option_3.label, L]
    }), u[14] = ref_6, u[15] = option_3.label, u[16] = O, u[17] = L, u[18] = V;else V = u[18];
    return V;
  }
  const C = M ? `${M} ` : "";
  let children_8;
  if (u[19] !== N || u[20] !== index_3 || u[21] !== C) children_8 = r(n, {
    children: [index_3, ". ", C, N]
  }), u[19] = N, u[20] = index_3, u[21] = C, u[22] = children_8;else children_8 = u[22];
  let L;
  if (u[23] !== ref_6 || u[24] !== children_8) L = e(s, {
    ref: ref_6,
    children: children_8
  }), u[23] = ref_6, u[24] = children_8, u[25] = L;else L = u[25];
  return L;
}
function Cnr(t) {
  let h = w(43),
    {
      confirmLabel: confirmLabel,
      cancelLabel: cancelLabel,
      onConfirm: onConfirm,
      onCancel: onCancel_3,
      refuseInput: refuseInput_3,
      openedAt: openedAt,
      windowMs: windowMs
    } = t,
    [g, d, b] = Zt(),
    [children_9, x] = y(null),
    ref_8 = A(null);
  xy(ref_8, !0), Ra("select", !0);
  let {
      refuse: refuse_2,
      refuseCharacter: refuseCharacter_2
    } = Ci(openedAt, windowMs),
    K;
  if (h[0] !== refuseInput_3 || h[1] !== refuse_2) K = function f() {
    return (refuseInput_3?.() ?? !1) || refuse_2();
  }, h[0] = refuseInput_3, h[1] = refuse_2, h[2] = K;else K = h[2];
  let f = K,
    M;
  if (h[3] !== refuseInput_3 || h[4] !== refuseCharacter_2) M = function C() {
    return (refuseInput_3?.() ?? !1) || refuseCharacter_2();
  }, h[3] = refuseInput_3, h[4] = refuseCharacter_2, h[5] = M;else M = h[5];
  let C = M,
    O;
  if (h[6] !== onCancel_3 || h[7] !== onConfirm || h[8] !== f || h[9] !== b) O = L => {
    let V = L.trim().toLowerCase();
    if ((V === "y" || V === "yes" || V === "n" || V === "no") && f()) {
      b(Bd);
      return;
    }
    if (V === "y" || V === "yes") {
      return onConfirm();
    }
    if (V === "n" || V === "no") {
      return onCancel_3();
    }
    x("Please answer y or n."), b(Nd);
  }, h[6] = onCancel_3, h[7] = onConfirm, h[8] = f, h[9] = b, h[10] = O;else O = h[10];
  let R = O,
    H;
  if (h[11] !== d || h[12] !== onCancel_3 || h[13] !== f || h[14] !== C || h[15] !== b || h[16] !== R) H = v => {
    if (v.key === "escape" && v.name === "escape") {
      if (v.preventDefault(), f()) {
        return;
      }
      return onCancel_3();
    }
    if (v.key === "return" && v.name === "return") {
      return v.preventDefault(), R(d.current);
    }
    if (v.key === "backspace" || v.key === "delete") {
      v.preventDefault(), b(Ld);
      return;
    }
    if (v.key.length === 1 && !v.ctrl && !v.meta) {
      if (v.preventDefault(), C()) {
        return;
      }
      x(null), b(ue => ue + v.key);
    }
  }, h[11] = d, h[12] = onCancel_3, h[13] = f, h[14] = C, h[15] = b, h[16] = R, h[17] = H;else H = h[17];
  let onKeyDown_3 = H,
    children_10 = `Enter y/n: ${g}`,
    column_3;
  if (h[18] !== children_10) column_3 = ie(children_10), h[18] = children_10, h[19] = column_3;else column_3 = h[19];
  let Ie;
  if (h[20] !== column_3) Ie = {
    line: 0,
    column: column_3,
    active: !0,
    visible: !0
  }, h[20] = column_3, h[21] = Ie;else Ie = h[21];
  let ref_7 = Ek(Ie),
    X;
  if (h[22] !== confirmLabel) X = PI(confirmLabel), h[22] = confirmLabel, h[23] = X;else X = h[23];
  let T;
  if (h[24] !== X) T = r(n, {
    children: ["y. ", X]
  }), h[24] = X, h[25] = T;else T = h[25];
  let ve;
  if (h[26] !== cancelLabel) ve = PI(cancelLabel), h[26] = cancelLabel, h[27] = ve;else ve = h[27];
  let U;
  if (h[28] !== ve) U = r(n, {
    children: ["n. ", ve]
  }), h[28] = ve, h[29] = U;else U = h[29];
  let fe;
  if (h[30] !== children_9) fe = children_9 && e(n, {
    children: children_9
  }), h[30] = children_9, h[31] = fe;else fe = h[31];
  let children_11;
  if (h[32] !== children_10) children_11 = e(n, {
    children: children_10
  }), h[32] = children_10, h[33] = children_11;else children_11 = h[33];
  let re;
  if (h[34] !== ref_7 || h[35] !== children_11) re = e(s, {
    ref: ref_7,
    children: children_11
  }), h[34] = ref_7, h[35] = children_11, h[36] = re;else re = h[36];
  let Oe;
  if (h[37] !== onKeyDown_3 || h[38] !== U || h[39] !== fe || h[40] !== re || h[41] !== T) Oe = r(s, {
    ref: ref_8,
    flexDirection: "column",
    tabIndex: 0,
    onKeyDown: onKeyDown_3,
    children: [T, U, fe, re]
  }), h[37] = onKeyDown_3, h[38] = U, h[39] = fe, h[40] = re, h[41] = T, h[42] = Oe;else Oe = h[42];
  return Oe;
}
B();
B();
function Oo(t) {
  let g = w(15),
    {
      imageId: imageId,
      backgroundColor: backgroundColor_2,
      isSelected: isSelected_2
    } = t,
    l = isSelected_2 === void 0 ? !1 : isSelected_2,
    c = Fo(m => m.storedImagePaths.get(imageId) ?? null) ?? null,
    children_12 = `[Image #${imageId}]`,
    d;
  if (g[0] !== c) d = c && Ev() ? J0(c) : null, g[0] = c, g[1] = d;else d = g[1];
  let url = d;
  if (url) {
    let fallback, children_13;
    if (g[2] !== backgroundColor_2 || g[3] !== children_12 || g[4] !== l) fallback = e(n, {
      backgroundColor: backgroundColor_2,
      inverse: l,
      children: children_12
    }), children_13 = e(n, {
      backgroundColor: backgroundColor_2,
      inverse: l,
      bold: l,
      children: children_12
    }), g[2] = backgroundColor_2, g[3] = children_12, g[4] = l, g[5] = fallback, g[6] = children_13;else fallback = g[5], children_13 = g[6];
    let I;
    if (g[7] !== url || g[8] !== fallback || g[9] !== children_13) I = e(zt, {
      url: url,
      fallback: fallback,
      children: children_13
    }), g[7] = url, g[8] = fallback, g[9] = children_13, g[10] = I;else I = g[10];
    return I;
  }
  let D;
  if (g[11] !== backgroundColor_2 || g[12] !== children_12 || g[13] !== l) D = e(n, {
    backgroundColor: backgroundColor_2,
    inverse: l,
    children: children_12
  }), g[11] = backgroundColor_2, g[12] = children_12, g[13] = l, g[14] = D;else D = g[14];
  return D;
}
B();
function jvt(t) {
  let [o] = br(),
    i = oc(),
    a = Z(LF, []),
    preserveTrailingWhitespace = ot();
  Uwn({
    isTerminalFocused: i,
    canPasteImages: !!t.onImagePaste
  });
  let inputState = u9o({
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
      preserveTrailingWhitespace: preserveTrailingWhitespace,
      highlightPastedText: t.highlightPastedText,
      invert: i ? zte : C => C,
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
      virtualTexts: preserveTrailingWhitespace ? void 0 : t.virtualTexts,
      getPastedContents: t.getPastedContents,
      getInputMode: t.getInputMode,
      onModeChange: t.onModeChange,
      onUndo: t.onUndo,
      onOpenHistorySearch: t.onOpenHistorySearch,
      onToggleHelp: t.onToggleHelp
    }),
    {
      mode: mode,
      setMode: setMode,
      cancelPendingRemap: cancelPendingRemap,
      forgetColumn: forgetColumn,
      isCommandPending: isCommandPending
    } = inputState,
    D = A(!1),
    x = Mo(setMode);
  P(() => {
    let C = !D.current;
    D.current = !0;
    let O = C && (t.initialMode === "VISUAL" || t.initialMode === "VISUAL LINE") ? "NORMAL" : t.initialMode;
    if (O && O !== mode) x(O);
  }, [t.initialMode, mode]);
  let {
      recordInsertRef: recordInsertRef
    } = t,
    {
      recordInsert: recordInsert
    } = inputState;
  P(() => {
    if (!recordInsertRef) return;
    return recordInsertRef.current = recordInsert, () => {
      recordInsertRef.current = null;
    };
  }, [recordInsertRef, recordInsert]);
  let {
    cancelRemapRef: cancelRemapRef
  } = t;
  P(() => {
    if (!cancelRemapRef) return;
    return cancelRemapRef.current = cancelPendingRemap, () => {
      cancelRemapRef.current = null;
    };
  }, [cancelRemapRef, cancelPendingRemap]);
  let {
    forgetColumnRef: forgetColumnRef
  } = t;
  P(() => {
    if (!forgetColumnRef) return;
    return forgetColumnRef.current = forgetColumn, () => {
      forgetColumnRef.current = null;
    };
  }, [forgetColumnRef, forgetColumn]);
  let {
      onEditingStateChange: onEditingStateChange
    } = t,
    f = t.focus !== !1,
    takesEscape = mode !== "NORMAL" || isCommandPending;
  return Jt(() => {
    if (!onEditingStateChange || !f) return;
    return onEditingStateChange({
      mode: mode,
      takesEscape: takesEscape
    }), () => onEditingStateChange(null);
  }, [onEditingStateChange, f, mode, takesEscape]), e(s, {
    flexDirection: "column",
    children: e(K2t, {
      inputState: inputState,
      terminalFocus: i,
      highlights: t.highlights,
      ...t
    })
  });
}
function Vre(t) {
  let b = w(10),
    {
      isFocused: isFocused_3,
      isSelected: isSelected_3,
      children: children_14,
      description: description,
      shouldShowDownArrow: m,
      shouldShowUpArrow: c,
      declareCursor: declareCursor_2,
      onClick: onClick_3,
      hoverStyle: hoverStyle_2
    } = t,
    D;
  if (b[0] !== children_14 || b[1] !== declareCursor_2 || b[2] !== description || b[3] !== hoverStyle_2 || b[4] !== isFocused_3 || b[5] !== isSelected_3 || b[6] !== onClick_3 || b[7] !== m || b[8] !== c) D = e(kR, {
    isFocused: isFocused_3,
    isSelected: isSelected_3,
    description: description,
    showScrollDown: m,
    showScrollUp: c,
    styled: !1,
    declareCursor: declareCursor_2,
    onClick: onClick_3,
    hoverStyle: hoverStyle_2,
    children: children_14
  }), b[0] = children_14, b[1] = declareCursor_2, b[2] = description, b[3] = hoverStyle_2, b[4] = isFocused_3, b[5] = isSelected_3, b[6] = onClick_3, b[7] = m, b[8] = c, b[9] = D;else D = b[9];
  return D;
}
function To(t) {
  return t?.name === "escape" && !t.ctrl && !t.meta;
}
function hc(pn) {
  return pn.type === "image";
}
function Ur(t, o, i, a) {
  let l = 2 + o + 2;
  return Math.max(1, t - l - i - a);
}
function BCe(t) {
  let T = w(107),
    {
      option: option_4,
      isFocused: isFocused_4,
      isSelected: isSelected_4,
      shouldShowDownArrow: shouldShowDownArrow,
      shouldShowUpArrow: shouldShowUpArrow,
      maxIndexWidth: maxIndexWidth,
      index: index_4,
      hideIndex: hideIndex,
      inputValue: d,
      onInputChange: onInputChange,
      onSubmit: onSubmit_2,
      onExit: onExit,
      layout: layout,
      children: children_15,
      showLabel: showLabel,
      onOpenEditor: onOpenEditor,
      resetCursorOnUpdate: resetCursorOnUpdate,
      canPasteImage: canPasteImage,
      onImagePaste: onImagePaste,
      pastedContents: pastedContents,
      onRemoveImage: onRemoveImage,
      imagesSelected: imagesSelected,
      selectedImageIndex: selectedImageIndex,
      onImagesSelectedChange: onImagesSelectedChange,
      onSelectedImageIndexChange: onSelectedImageIndexChange,
      extraChromeWidth: extraChromeWidth,
      onClick: onClick_4,
      hoverStyle: hoverStyle_3
    } = t,
    G = hideIndex === void 0 ? !1 : hideIndex,
    Y = showLabel === void 0 ? !1 : showLabel,
    Ie = resetCursorOnUpdate === void 0 ? !1 : resetCursorOnUpdate,
    pe = selectedImageIndex === void 0 ? 0 : selectedImageIndex,
    X = extraChromeWidth === void 0 ? 0 : extraChromeWidth,
    ve;
  if (T[0] !== pastedContents) ve = pastedContents ? Object.values(pastedContents).filter(hc) : [], T[0] = pastedContents, T[1] = ve;else ve = T[1];
  let U = ve,
    fe = Y || option_4.showLabelWithValue === !0,
    [cursorOffset, onChangeCursorOffset] = y(d.length),
    Oe = A(!1),
    Ve;
  if (T[2] !== d.length || T[3] !== isFocused_4 || T[4] !== Ie) Ve = () => {
    if (Ie && isFocused_4) {
      if (Oe.current) Oe.current = !1;else onChangeCursorOffset(d.length);
    }
  }, T[2] = d.length, T[3] = isFocused_4, T[4] = Ie, T[5] = Ve;else Ve = T[5];
  let ne;
  if (T[6] !== d || T[7] !== isFocused_4 || T[8] !== Ie) ne = [Ie, isFocused_4, d], T[6] = d, T[7] = isFocused_4, T[8] = Ie, T[9] = ne;else ne = T[9];
  P(Ve, ne);
  let E;
  if (T[10] !== d || T[11] !== onInputChange || T[12] !== onOpenEditor) E = () => {
    onOpenEditor?.(d, onInputChange);
  }, T[10] = d, T[11] = onInputChange, T[12] = onOpenEditor, T[13] = E;else E = T[13];
  const isActive = isFocused_4 && !!onOpenEditor;
  let ee;
  if (T[14] !== isActive) ee = {
    context: "Chat",
    isActive: isActive
  }, T[14] = isActive, T[15] = ee;else ee = T[15];
  rt("chat:externalEditor", E, ee);
  let $e;
  if (T[16] !== canPasteImage || T[17] !== onImagePaste) $e = () => {
    if (!onImagePaste) {
      return;
    }
    if (canPasteImage?.() === !1) {
      return;
    }
    mue(Kl(tt())).then(we => {
      if (we) onImagePaste(we.base64, {
        mediaType: we.mediaType,
        dimensions: we.dimensions
      });
    });
  }, T[16] = canPasteImage, T[17] = onImagePaste, T[18] = $e;else $e = T[18];
  const isActive_2 = isFocused_4 && !!onImagePaste;
  let Ae;
  if (T[19] !== isActive_2) Ae = {
    context: "Chat",
    isActive: isActive_2
  }, T[19] = isActive_2, T[20] = Ae;else Ae = T[20];
  rt("chat:imagePaste", $e, Ae);
  let Wt;
  if (T[21] !== U || T[22] !== onRemoveImage) Wt = () => {
    if (U.length > 0 && onRemoveImage) onRemoveImage(U.at(-1).id);
  }, T[21] = U, T[22] = onRemoveImage, T[23] = Wt;else Wt = T[23];
  const isActive_3 = isFocused_4 && !imagesSelected && d === "" && U.length > 0 && !!onRemoveImage;
  let Bt;
  if (T[24] !== isActive_3) Bt = {
    context: "Attachments",
    isActive: isActive_3
  }, T[24] = isActive_3, T[25] = Bt;else Bt = T[25];
  rt("attachments:remove", Wt, Bt);
  let Fe, It;
  if (T[26] !== U.length || T[27] !== onSelectedImageIndexChange || T[28] !== pe) Fe = () => {
    if (U.length > 1) onSelectedImageIndexChange?.((pe + 1) % U.length);
  }, It = () => {
    if (U.length > 1) onSelectedImageIndexChange?.((pe - 1 + U.length) % U.length);
  }, T[26] = U.length, T[27] = onSelectedImageIndexChange, T[28] = pe, T[29] = Fe, T[30] = It;else Fe = T[29], It = T[30];
  let He;
  if (T[31] !== U || T[32] !== onImagesSelectedChange || T[33] !== onRemoveImage || T[34] !== onSelectedImageIndexChange || T[35] !== pe) He = () => {
    let ke = U[pe];
    if (ke && onRemoveImage) {
      if (onRemoveImage(ke.id) === !1) {
        return;
      }
      if (U.length <= 1) onImagesSelectedChange?.(!1);else onSelectedImageIndexChange?.(Math.min(pe, U.length - 2));
    }
  }, T[31] = U, T[32] = onImagesSelectedChange, T[33] = onRemoveImage, T[34] = onSelectedImageIndexChange, T[35] = pe, T[36] = He;else He = T[36];
  let lt;
  if (T[37] !== onImagesSelectedChange) lt = () => {
    onImagesSelectedChange?.(!1);
  }, T[37] = onImagesSelectedChange, T[38] = lt;else lt = T[38];
  let qe;
  if (T[39] !== Fe || T[40] !== It || T[41] !== He || T[42] !== lt) qe = {
    "attachments:next": Fe,
    "attachments:previous": It,
    "attachments:remove": He,
    "attachments:exit": lt
  }, T[39] = Fe, T[40] = It, T[41] = He, T[42] = lt, T[43] = qe;else qe = T[43];
  const isActive_4 = isFocused_4 && !!imagesSelected;
  let dt;
  if (T[44] !== isActive_4) dt = {
    context: "Attachments",
    isActive: isActive_4
  }, T[44] = isActive_4, T[45] = dt;else dt = T[45];
  on(qe, dt);
  let {
      vimEditing: vimEditing
    } = option_4,
    We = vimEditing ? jvt : Lr,
    cancelRemapRef_2 = A(null),
    Ft,
    yt;
  if (T[46] !== imagesSelected || T[47] !== isFocused_4 || T[48] !== onImagesSelectedChange) Ft = () => {
    if (!isFocused_4 && imagesSelected) onImagesSelectedChange?.(!1);
  }, yt = [isFocused_4, imagesSelected, onImagesSelectedChange], T[46] = imagesSelected, T[47] = isFocused_4, T[48] = onImagesSelectedChange, T[49] = Ft, T[50] = yt;else Ft = T[49], yt = T[50];
  P(Ft, yt);
  let paddingLeft = layout === "expanded" ? maxIndexWidth + 3 : maxIndexWidth + 4,
    {
      columns: columns
    } = us(Te()),
    kt = fe && typeof option_4.label === "string" ? ie(option_4.label) + ie(option_4.labelValueSeparator ?? ", ") : 0,
    ct;
  if (T[51] !== columns || T[52] !== X || T[53] !== kt || T[54] !== maxIndexWidth) ct = Ur(columns, maxIndexWidth, kt, X), T[51] = columns, T[52] = X, T[53] = kt, T[54] = maxIndexWidth, T[55] = ct;else ct = T[55];
  let columns_2 = ct;
  const onKeyDown_4 = vimEditing?.takesEscape ? ll : void 0,
    flexShrink = layout === "compact" ? 0 : void 0;
  let Ye;
  if (T[56] !== G || T[57] !== index_4 || T[58] !== maxIndexWidth) Ye = !G && e(s, {
    flexShrink: 0,
    children: e(n, {
      dimColor: !0,
      children: `${index_4}.`.padEnd(maxIndexWidth + 2)
    })
  }), T[56] = G, T[57] = index_4, T[58] = maxIndexWidth, T[59] = Ye;else Ye = T[59];
  let ln;
  if (T[60] !== We || T[61] !== cursorOffset || T[62] !== imagesSelected || T[63] !== d || T[64] !== isFocused_4 || T[65] !== onExit || T[66] !== onImagePaste || T[67] !== onInputChange || T[68] !== onSubmit_2 || T[69] !== option_4 || T[70] !== fe || T[71] !== columns_2 || T[72] !== vimEditing?.onStateChange) ln = fe ? isFocused_4 ? r(Q, {
    children: [r(n, {
      color: "suggestion",
      children: [option_4.label, option_4.labelValueSeparator ?? ", "]
    }), e(We, {
      value: d,
      onChange: Gn => {
        if (option_4.onChange(Gn) === !1) {
          return;
        }
        Oe.current = !0, onInputChange(Gn);
      },
      onSubmit: onSubmit_2,
      onExit: onExit,
      placeholder: option_4.placeholder,
      focus: !imagesSelected,
      showCursor: !0,
      multiline: !0,
      cursorOffset: cursorOffset,
      onChangeCursorOffset: onChangeCursorOffset,
      columns: columns_2,
      onEditingStateChange: vimEditing?.onStateChange,
      cancelRemapRef: cancelRemapRef_2,
      onImagePaste: onImagePaste,
      onPaste: Lt => {
        cancelRemapRef_2.current?.();
        let qn = d.slice(0, cursorOffset);
        let Yn = d.slice(cursorOffset);
        let pt = qn + Lt + Yn;
        if (option_4.onChange(pt) === !1) {
          return;
        }
        Oe.current = !0, onInputChange(pt), onChangeCursorOffset(qn.length + Lt.length);
      }
    })]
  }) : r(n, {
    children: [option_4.label, d ? option_4.labelValueSeparator ?? ", " : null, d || null]
  }) : isFocused_4 ? e(We, {
    value: d,
    onChange: an => {
      if (option_4.onChange(an) === !1) {
        return;
      }
      Oe.current = !0, onInputChange(an);
    },
    onSubmit: onSubmit_2,
    onExit: onExit,
    placeholder: option_4.placeholder || (typeof option_4.label === "string" ? option_4.label : void 0),
    focus: !imagesSelected,
    showCursor: !0,
    multiline: !0,
    cursorOffset: cursorOffset,
    onChangeCursorOffset: onChangeCursorOffset,
    columns: columns_2,
    onEditingStateChange: vimEditing?.onStateChange,
    cancelRemapRef: cancelRemapRef_2,
    onImagePaste: onImagePaste,
    onPaste: wt => {
      cancelRemapRef_2.current?.();
      let Ct = d.slice(0, cursorOffset);
      let ht = d.slice(cursorOffset);
      let Je = Ct + wt + ht;
      if (option_4.onChange(Je) === !1) {
        return;
      }
      Oe.current = !0, onInputChange(Je), onChangeCursorOffset(Ct.length + wt.length);
    }
  }) : e(n, {
    color: d ? void 0 : "inactive",
    children: d || option_4.placeholder || option_4.label
  }), T[60] = We, T[61] = cursorOffset, T[62] = imagesSelected, T[63] = d, T[64] = isFocused_4, T[65] = onExit, T[66] = onImagePaste, T[67] = onInputChange, T[68] = onSubmit_2, T[69] = option_4, T[70] = fe, T[71] = columns_2, T[72] = vimEditing?.onStateChange, T[73] = ln;else ln = T[73];
  let children_16;
  if (T[74] !== children_15 || T[75] !== flexShrink || T[76] !== Ye || T[77] !== ln) children_16 = r(s, {
    flexDirection: "row",
    flexShrink: flexShrink,
    children: [Ye, children_15, ln]
  }), T[74] = children_15, T[75] = flexShrink, T[76] = Ye, T[77] = ln, T[78] = children_16;else children_16 = T[78];
  let z;
  if (T[79] !== hoverStyle_3 || T[80] !== isFocused_4 || T[81] !== isSelected_4 || T[82] !== onClick_4 || T[83] !== shouldShowDownArrow || T[84] !== shouldShowUpArrow || T[85] !== children_16) z = e(Vre, {
    isFocused: isFocused_4,
    isSelected: isSelected_4,
    shouldShowDownArrow: shouldShowDownArrow,
    shouldShowUpArrow: shouldShowUpArrow,
    declareCursor: !1,
    onClick: onClick_4,
    hoverStyle: hoverStyle_3,
    children: children_16
  }), T[79] = hoverStyle_3, T[80] = isFocused_4, T[81] = isSelected_4, T[82] = onClick_4, T[83] = shouldShowDownArrow, T[84] = shouldShowUpArrow, T[85] = children_16, T[86] = z;else z = T[86];
  let dn;
  if (T[87] !== paddingLeft || T[88] !== isFocused_4 || T[89] !== isSelected_4 || T[90] !== option_4.description || T[91] !== option_4.dimDescription) dn = option_4.description && e(s, {
    paddingLeft: paddingLeft,
    children: e(n, {
      dimColor: option_4.dimDescription !== !1,
      color: isSelected_4 ? "success" : isFocused_4 ? "suggestion" : void 0,
      children: option_4.description
    })
  }), T[87] = paddingLeft, T[88] = isFocused_4, T[89] = isSelected_4, T[90] = option_4.description, T[91] = option_4.dimDescription, T[92] = dn;else dn = T[92];
  let bt;
  if (T[93] !== paddingLeft || T[94] !== U || T[95] !== imagesSelected || T[96] !== isFocused_4 || T[97] !== pe) bt = U.length > 0 && r(s, {
    flexDirection: "row",
    gap: 1,
    paddingLeft: paddingLeft,
    children: [U.map((item, index) => e(Oo, {
      imageId: item.id,
      isSelected: !!imagesSelected && index === pe
    }, item.id)), e(s, {
      flexGrow: 1,
      justifyContent: "flex-start",
      flexDirection: "row",
      children: e(n, {
        dimColor: !0,
        children: imagesSelected ? r(Se, {
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
        }) : isFocused_4 ? e(q, {
          chord: "down",
          action: "select",
          parens: !0
        }) : null
      })
    })]
  }), T[93] = paddingLeft, T[94] = U, T[95] = imagesSelected, T[96] = isFocused_4, T[97] = pe, T[98] = bt;else bt = T[98];
  let Qe;
  if (T[99] !== layout) Qe = layout === "expanded" && e(n, {
    children: " "
  }), T[99] = layout, T[100] = Qe;else Qe = T[100];
  let On;
  if (T[101] !== onKeyDown_4 || T[102] !== z || T[103] !== dn || T[104] !== bt || T[105] !== Qe) On = r(s, {
    flexDirection: "column",
    flexShrink: 0,
    onKeyDown: onKeyDown_4,
    children: [z, dn, bt, Qe]
  }), T[101] = onKeyDown_4, T[102] = z, T[103] = dn, T[104] = bt, T[105] = Qe, T[106] = On;else On = T[106];
  return On;
}
function ll(t) {
  if (To(t)) t.stopImmediatePropagation();
}
B();
var Fi = ({
  isDisabled: isDisabled_3 = !1,
  disableSelection: disableSelection_2 = !1,
  state: state,
  options: options_3,
  isMultiSelect = !1,
  onUpFromFirstItem: onUpFromFirstItem,
  onDownFromLastItem: onDownFromLastItem,
  onInputModeToggle: onInputModeToggle,
  inputValues: inputValues,
  imagesSelected: imagesSelected_2 = !1,
  onEnterImageSelection: onEnterImageSelection,
  onExitImageSelection: onExitImageSelection,
  hasInkFocus = !0
}) => {
  let {
      focusDirection: focusDirection
    } = zCe(),
    W = Zl();
  Ra("select", !!state.onCancel);
  let N = Z(() => options_3.find(item => item.value === state.focusedValue)?.type === "input", [options_3, state.focusedValue]),
    h = Z(() => {
      let f = {};
      if (!N) f["select:next"] = () => {
        let M = options_3.at(-1);
        if (M && state.getFocusedValue() === M.value) {
          if (onDownFromLastItem) {
            onDownFromLastItem();
            return;
          }
          if (focusDirection("down")) return;
        }
        state.focusNextOption();
      }, f["select:previous"] = () => {
        let M = options_3[0];
        if (M && state.getFocusedValue() === M.value) {
          if (onUpFromFirstItem) {
            onUpFromFirstItem();
            return;
          }
          if (focusDirection("up")) return;
        }
        state.focusPreviousOption();
      }, f["select:first"] = () => {
        state.focusOption(options_3[0]?.value);
      }, f["select:last"] = () => {
        state.focusOption(options_3.at(-1)?.value);
      }, f["select:accept"] = () => {
        if (disableSelection_2 === !0) return;
        let M = state.getFocusedValue();
        if (M === void 0) return;
        let C = options_3.find(item => item.value === M);
        if (C?.disabled === !0) return;
        if (C?.type === "input") return;
        state.selectFocusedOption?.(), state.onChange?.(M);
      };
      if (state.onCancel) f["select:cancel"] = () => {
        let M = state.getFocusedValue(),
          C = options_3.find(item => item.value === M);
        if (C?.type === "input" && C.vimEditing?.takesEscape && To(W?.singleKeyEvent() ?? null)) return !1;
        state.onCancel();
      };
      return f;
    }, [options_3, state, onDownFromLastItem, onUpFromFirstItem, N, disableSelection_2, focusDirection, W]);
  return on(h, {
    context: "Select",
    isActive: !isDisabled_3 && hasInkFocus
  }), {
    handleKeyDown: f => {
      if (isDisabled_3) return;
      let M = EQ(f.key),
        C = state.getFocusedValue(),
        O = options_3.find(item => item.value === C),
        L = O?.type === "input";
      if (f.key === "tab") {
        if (f.preventDefault(), onInputModeToggle && C !== void 0) onInputModeToggle(C);
        return;
      }
      if (L) {
        if (imagesSelected_2) {
          if (f.key === "up") f.preventDefault(), onExitImageSelection?.();
          return;
        }
        if (f.key === "down" && onEnterImageSelection?.()) {
          f.stopImmediatePropagation();
          return;
        }
        if (f.key === "down" || f.ctrl && f.key === "n") {
          if (onDownFromLastItem) {
            let V = options_3.at(-1);
            if (V && C === V.value) {
              onDownFromLastItem(), f.stopImmediatePropagation();
              return;
            }
          }
          state.focusNextOption(), f.stopImmediatePropagation();
          return;
        }
        if (f.key === "up" || f.ctrl && f.key === "p") {
          if (onUpFromFirstItem) {
            let V = options_3[0];
            if (V && C === V.value) {
              onUpFromFirstItem(), f.stopImmediatePropagation();
              return;
            }
          }
          state.focusPreviousOption(), f.stopImmediatePropagation();
          return;
        }
        return;
      }
      if (N) {
        if (f.key === "down" || f.ctrl && f.key === "n") {
          if (onDownFromLastItem) {
            let V = options_3.at(-1);
            if (V && C === V.value) {
              onDownFromLastItem(), f.stopImmediatePropagation();
              return;
            }
          }
          state.focusNextOption(), f.stopImmediatePropagation();
          return;
        }
        if (f.key === "up" || f.ctrl && f.key === "p") {
          if (onUpFromFirstItem) {
            let V = options_3[0];
            if (V && C === V.value) {
              onUpFromFirstItem(), f.stopImmediatePropagation();
              return;
            }
          }
          state.focusPreviousOption(), f.stopImmediatePropagation();
          return;
        }
      }
      if (f.key === "pagedown") {
        f.preventDefault(), state.focusNextPage();
        return;
      }
      if (f.key === "pageup") {
        f.preventDefault(), state.focusPreviousPage();
        return;
      }
      if (disableSelection_2 !== !0) {
        if (isMultiSelect && K5(f.key) === " " && C !== void 0) {
          if (O?.disabled !== !0) f.preventDefault(), state.selectFocusedOption?.(), state.onChange?.(C);
          return;
        }
        if (disableSelection_2 !== "numeric" && /^[0-9]$/.test(M)) {
          f.preventDefault();
          let V = parseInt(M) - 1;
          if (V >= 0 && V < state.options.length) {
            let R = state.options[V];
            if (R.disabled === !0) return;
            if (R.type === "input") {
              if ((inputValues?.get(R.value) ?? "").trim()) {
                state.onChange?.(R.value);
                return;
              }
              if (R.allowEmptySubmitToCancel) {
                state.onChange?.(R.value);
                return;
              }
              state.focusOption(R.value);
              return;
            }
            state.onChange?.(R.value);
            return;
          }
        }
      }
    }
  };
};
B();
B();
import { isDeepStrictEqual as vc } from "util";
B();
function xc(t) {
  let [o] = y(() => ({
      value: bc(t) ? t() : t
    })),
    [i, a] = y(o.value),
    l = ae(c => {
      let u = gc(c) ? c(o.value) : c;
      if (Object.is(u, o.value)) return;
      o.value = u, a(() => u);
    }, [o]),
    m = ae(() => o.value, [o]);
  return [i, l, m];
}
function bc(t) {
  return typeof t === "function";
}
function gc(t) {
  return typeof t === "function";
}
class Po extends Map {
  first;
  last;
  constructor(t) {
    let o = [],
      i,
      a,
      previous,
      index_5 = 0;
    for (let c of t) {
      let u = {
        value: c.value,
        previous: previous,
        next: void 0,
        index: index_5
      };
      if (previous) previous.next = u;
      i ||= u, a = u, o.push([c.value, u]), index_5++, previous = u;
    }
    super(o);
    this.first = i, this.last = a;
  }
}
var Ic = (t, o) => {
    switch (o.type) {
      case "focus-next-option":
        {
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
          let visibleToIndex = Math.min(t.optionMap.size, t.visibleToIndex + 1),
            visibleFromIndex = visibleToIndex - t.visibleOptionCount;
          return {
            ...t,
            focusedValue: a.value,
            visibleFromIndex: visibleFromIndex,
            visibleToIndex: visibleToIndex
          };
        }
      case "focus-previous-option":
        {
          if (t.focusedValue === void 0) return t;
          let i = t.optionMap.get(t.focusedValue);
          if (!i) return t;
          let a = i.previous || t.optionMap.last;
          if (!a) return t;
          if (!i.previous && a === t.optionMap.last) {
            let visibleToIndex_2 = t.optionMap.size,
              visibleFromIndex_2 = Math.max(0, visibleToIndex_2 - t.visibleOptionCount);
            return {
              ...t,
              focusedValue: a.value,
              visibleFromIndex: visibleFromIndex_2,
              visibleToIndex: visibleToIndex_2
            };
          }
          if (!(a.index <= t.visibleFromIndex)) return {
            ...t,
            focusedValue: a.value
          };
          let visibleFromIndex_3 = Math.max(0, t.visibleFromIndex - 1),
            visibleToIndex_3 = visibleFromIndex_3 + t.visibleOptionCount;
          return {
            ...t,
            focusedValue: a.value,
            visibleFromIndex: visibleFromIndex_3,
            visibleToIndex: visibleToIndex_3
          };
        }
      case "focus-next-page":
        {
          if (t.focusedValue === void 0) return t;
          let i = t.optionMap.get(t.focusedValue);
          if (!i) return t;
          let a = Math.min(t.optionMap.size - 1, i.index + t.visibleOptionCount),
            first = t.optionMap.first;
          while (first && first.index < a) if (first.next) first = first.next;else break;
          if (!first) return t;
          let visibleToIndex_4 = Math.min(t.optionMap.size, first.index + 1),
            visibleFromIndex_4 = Math.max(0, visibleToIndex_4 - t.visibleOptionCount);
          return {
            ...t,
            focusedValue: first.value,
            visibleFromIndex: visibleFromIndex_4,
            visibleToIndex: visibleToIndex_4
          };
        }
      case "focus-previous-page":
        {
          if (t.focusedValue === void 0) return t;
          let i = t.optionMap.get(t.focusedValue);
          if (!i) return t;
          let a = Math.max(0, i.index - t.visibleOptionCount),
            first_2 = t.optionMap.first;
          while (first_2 && first_2.index < a) if (first_2.next) first_2 = first_2.next;else break;
          if (!first_2) return t;
          let visibleFromIndex_5 = Math.max(0, first_2.index),
            visibleToIndex_5 = Math.min(t.optionMap.size, visibleFromIndex_5 + t.visibleOptionCount);
          return {
            ...t,
            focusedValue: first_2.value,
            visibleFromIndex: visibleFromIndex_5,
            visibleToIndex: visibleToIndex_5
          };
        }
      case "reset":
        return o.state;
      case "scroll-viewport":
        {
          let visibleFromIndex_6 = Math.min(Math.max(0, t.optionMap.size - t.visibleOptionCount), Math.max(0, t.visibleFromIndex + o.delta));
          if (visibleFromIndex_6 === t.visibleFromIndex) return t;
          let visibleToIndex_6 = Math.min(t.optionMap.size, visibleFromIndex_6 + t.visibleOptionCount),
            l = t.focusedValue === void 0 ? void 0 : t.optionMap.get(t.focusedValue);
          while (l?.next && l.index < visibleFromIndex_6) l = l.next;
          while (l?.previous && l.index >= visibleToIndex_6) l = l.previous;
          return {
            ...t,
            focusedValue: l?.value,
            visibleFromIndex: visibleFromIndex_6,
            visibleToIndex: visibleToIndex_6
          };
        }
      case "set-focus":
        {
          if (t.focusedValue === o.value) return t;
          let i = t.optionMap.get(o.value);
          if (!i) return t;
          if (i.index >= t.visibleFromIndex && i.index < t.visibleToIndex) return {
            ...t,
            focusedValue: o.value
          };
          let visibleFromIndex_7, visibleToIndex_7;
          if (i.index < t.visibleFromIndex) visibleFromIndex_7 = i.index, visibleToIndex_7 = Math.min(t.optionMap.size, visibleFromIndex_7 + t.visibleOptionCount);else visibleToIndex_7 = Math.min(t.optionMap.size, i.index + 1), visibleFromIndex_7 = Math.max(0, visibleToIndex_7 - t.visibleOptionCount);
          return {
            ...t,
            focusedValue: o.value,
            visibleFromIndex: visibleFromIndex_7,
            visibleToIndex: visibleToIndex_7
          };
        }
    }
  },
  ul = ({
    visibleOptionCount: visibleOptionCount,
    options: options_4,
    initialFocusValue: initialFocusValue,
    currentViewport: currentViewport
  }) => {
    let visibleOptionCount_2 = typeof visibleOptionCount === "number" ? Math.min(visibleOptionCount, options_4.length) : options_4.length,
      optionMap = new Po(options_4),
      c = initialFocusValue !== void 0 && optionMap.get(initialFocusValue),
      focusedValue = c ? initialFocusValue : optionMap.first?.value,
      visibleFromIndex_8 = 0,
      visibleToIndex_8 = visibleOptionCount_2;
    if (c) {
      let index_6 = c.index;
      if (currentViewport) {
        if (index_6 >= currentViewport.visibleFromIndex && index_6 < currentViewport.visibleToIndex) {
          if (visibleFromIndex_8 = currentViewport.visibleFromIndex, visibleToIndex_8 = Math.min(optionMap.size, visibleFromIndex_8 + visibleOptionCount_2), index_6 >= visibleToIndex_8) visibleToIndex_8 = Math.min(optionMap.size, index_6 + 1), visibleFromIndex_8 = Math.max(0, visibleToIndex_8 - visibleOptionCount_2);
          if (visibleToIndex_8 - visibleFromIndex_8 < visibleOptionCount_2) visibleFromIndex_8 = Math.max(0, visibleToIndex_8 - visibleOptionCount_2);
        } else if (index_6 < currentViewport.visibleFromIndex) {
          if (visibleFromIndex_8 = index_6, visibleToIndex_8 = Math.min(optionMap.size, visibleFromIndex_8 + visibleOptionCount_2), visibleToIndex_8 - visibleFromIndex_8 < visibleOptionCount_2) visibleFromIndex_8 = Math.max(0, visibleToIndex_8 - visibleOptionCount_2);
        } else visibleToIndex_8 = Math.min(optionMap.size, index_6 + 1), visibleFromIndex_8 = Math.max(0, visibleToIndex_8 - visibleOptionCount_2);
      } else if (index_6 >= visibleOptionCount_2) visibleToIndex_8 = Math.min(optionMap.size, index_6 + 1), visibleFromIndex_8 = Math.max(0, visibleToIndex_8 - visibleOptionCount_2);
      visibleFromIndex_8 = Math.max(0, Math.min(visibleFromIndex_8, optionMap.size - 1)), visibleToIndex_8 = Math.min(optionMap.size, Math.max(visibleOptionCount_2, visibleToIndex_8));
    }
    return {
      optionMap: optionMap,
      visibleOptionCount: visibleOptionCount_2,
      focusedValue: focusedValue,
      visibleFromIndex: visibleFromIndex_8,
      visibleToIndex: visibleToIndex_8
    };
  };
function Rnr({
  visibleOptionCount: visibleOptionCount_3 = 5,
  options: options_5,
  onFocus: onFocus_3,
  focusValue: a
}) {
  let [l, m, c] = xc(() => ul({
      visibleOptionCount: visibleOptionCount_3,
      options: options_5,
      initialFocusValue: a
    })),
    u = ae(v => {
      m(ue => Ic(ue, v));
    }, [m]),
    g = Mo(v => onFocus_3?.(v)),
    d = A(void 0),
    [b, D] = y(options_5),
    [x, I] = y(visibleOptionCount_3),
    W = options_5 !== b && !vc(options_5, b),
    N = visibleOptionCount_3 !== x;
  if (W || N) {
    let v = c();
    if (u({
      type: "reset",
      state: ul({
        visibleOptionCount: visibleOptionCount_3,
        options: options_5,
        initialFocusValue: W ? a ?? v.focusedValue : v.focusedValue ?? a,
        currentViewport: {
          visibleFromIndex: v.visibleFromIndex,
          visibleToIndex: v.visibleToIndex
        }
      })
    }), W) D(options_5);
    if (N) I(visibleOptionCount_3);
  }
  let h = ae(v => {
      u(v);
      let ue = ki(c().focusedValue, options_5);
      if (ue !== void 0 && ue !== d.current) d.current = ue, onFocus_3?.(ue);
    }, [u, c, options_5, onFocus_3]),
    focusNextOption = ae(() => {
      h({
        type: "focus-next-option"
      });
    }, [h]),
    focusPreviousOption = ae(() => {
      h({
        type: "focus-previous-option"
      });
    }, [h]),
    focusNextPage = ae(() => {
      h({
        type: "focus-next-page"
      });
    }, [h]),
    focusPreviousPage = ae(() => {
      h({
        type: "focus-previous-page"
      });
    }, [h]),
    scrollViewport = ae(delta => {
      let visibleFromIndex_9 = c().visibleFromIndex;
      return h({
        type: "scroll-viewport",
        delta: delta
      }), c().visibleFromIndex !== visibleFromIndex_9;
    }, [h, c]),
    focusOption = ae(value_2 => {
      if (value_2 !== void 0) h({
        type: "set-focus",
        value: value_2
      });
    }, [h]),
    visibleOptions = Z(() => options_5.map((item, index_7) => ({
      ...item,
      index: index_7
    })).slice(l.visibleFromIndex, l.visibleToIndex), [options_5, l.visibleFromIndex, l.visibleToIndex]),
    focusedValue_2 = Z(() => ki(l.focusedValue, options_5), [l.focusedValue, options_5]),
    getFocusedValue = ae(() => ki(c().focusedValue, options_5), [c, options_5]);
  return P(() => {
    if (focusedValue_2 === void 0) {
      d.current = void 0;
      return;
    }
    if (focusedValue_2 !== d.current) d.current = focusedValue_2, g(focusedValue_2);
  }, [focusedValue_2]), P(() => {
    if (a !== void 0) u({
      type: "set-focus",
      value: a
    });
  }, [a, u]), {
    focusedValue: focusedValue_2,
    getFocusedValue: getFocusedValue,
    visibleFromIndex: l.visibleFromIndex,
    visibleToIndex: l.visibleToIndex,
    visibleOptions: visibleOptions,
    focusNextOption: focusNextOption,
    focusPreviousOption: focusPreviousOption,
    focusNextPage: focusNextPage,
    focusPreviousPage: focusPreviousPage,
    focusOption: focusOption,
    scrollViewport: scrollViewport,
    options: options_5
  };
}
function ki(t, o) {
  if (t === void 0) return;
  if (o.some(item => item.value === t)) return t;
  return o[0]?.value;
}
function Ri({
  visibleOptionCount: visibleOptionCount_4 = 5,
  options: options_6,
  defaultValue: defaultValue_3,
  selectedValue: selectedValue,
  onChange: onChange_3,
  onCancel: onCancel_4,
  onFocus: onFocus_4,
  focusValue: focusValue
}) {
  let [g, d] = y(defaultValue_3),
    b = Rnr({
      visibleOptionCount: visibleOptionCount_4,
      options: options_6,
      onFocus: onFocus_4,
      focusValue: focusValue
    }),
    {
      getFocusedValue: getFocusedValue_2
    } = b,
    selectFocusedOption = ae(() => {
      d(getFocusedValue_2());
    }, [getFocusedValue_2]);
  return {
    ...b,
    value: selectedValue !== void 0 ? selectedValue : g,
    selectFocusedOption: selectFocusedOption,
    onChange: onChange_3,
    onCancel: onCancel_4
  };
}
B();
function V2t({
  isDisabled: isDisabled_4,
  visibleFromIndex: visibleFromIndex_10,
  visibleToIndex: visibleToIndex_9,
  optionCount: optionCount,
  scrollViewport: scrollViewport_2,
  shouldDropWheel: shouldDropWheel
}) {
  let ref_9 = A(null);
  if (isDisabled_4 || visibleToIndex_9 - visibleFromIndex_10 >= optionCount) return {
    ref: ref_9,
    onWheel: void 0
  };
  return {
    ref: ref_9,
    onWheel: g => {
      if (g.deltaY === 0 || shouldDropWheel()) return;
      let current_5 = ref_9.current;
      if (current_5 !== null && g.col !== void 0 && g.row !== void 0 && gY(current_5, g.col, g.row) === null) return;
      if (scrollViewport_2(g.deltaY > 0 ? 1 : -1)) g.stopImmediatePropagation();
    }
  };
}
function qp(Wf) {
  return Wf.type === "input";
}
function Yp(Bf) {
  return Bf.description;
}
function Jp(Nf) {
  return Nf.type === "image";
}
function Xp(Lf) {
  return Lf.type === "image";
}
function highlightedText() {
  return {
    bold: !0
  };
}
function Zp(Uf) {
  return Uf.type === "image";
}
function ef(Kf) {
  return Kf.type === "image";
}
function tf($f) {
  return $f.type === "image";
}
var Hi = Symbol("NO_COMMITTED_ROW");
function Xe(t) {
  let a = w(12);
  if (ot()) {
    const defaultValue_4 = t.selectedValue === Hi ? t.defaultValue : t.selectedValue ?? t.defaultValue;
    let l;
    if (a[0] !== t.disableSelection || a[1] !== t.hidePromptWhileDisabled || a[2] !== t.isDisabled || a[3] !== t.onCancel || a[4] !== t.onChange || a[5] !== t.onFocus || a[6] !== t.options || a[7] !== t.refuseInput || a[8] !== defaultValue_4) l = e(e7, {
      options: t.options,
      onChange: t.onChange,
      onFocus: t.onFocus,
      onCancel: t.onCancel,
      isDisabled: t.isDisabled,
      disableSelection: t.disableSelection,
      refuseInput: t.refuseInput,
      hidePromptWhileDisabled: t.hidePromptWhileDisabled,
      defaultValue: defaultValue_4
    }), a[0] = t.disableSelection, a[1] = t.hidePromptWhileDisabled, a[2] = t.isDisabled, a[3] = t.onCancel, a[4] = t.onChange, a[5] = t.onFocus, a[6] = t.options, a[7] = t.refuseInput, a[8] = defaultValue_4, a[9] = l;else l = a[9];
    return l;
  }
  let i;
  if (a[10] !== t) i = e(es, {
    ...t
  }), a[10] = t, a[11] = i;else i = a[11];
  return i;
}
function es(t) {
  let E = w(84),
    {
      isDisabled: isDisabled_5,
      hideIndexes: hideIndexes,
      disablePrintableKeybindings: disablePrintableKeybindings,
      visibleOptionCount: visibleOptionCount_5,
      hiddenBelowUnit: m,
      highlightText: c,
      options: options_7,
      columnSizingOptions: columnSizingOptions,
      defaultValue: defaultValue_5,
      selectedValue: selectedValue_2,
      onCancel: D,
      onChange: onChange_4,
      onFocus: onFocus_5,
      defaultFocusValue: W,
      layout: layout_2,
      disableSelection: disableSelection_3,
      inlineDescriptions: inlineDescriptions,
      hoverStyle: hoverStyle_4,
      inputChromeWidth: inputChromeWidth,
      onUpFromFirstItem: onUpFromFirstItem_2,
      onDownFromLastItem: onDownFromLastItem_2,
      onInputModeToggle: onInputModeToggle_2,
      onOpenEditor: onOpenEditor_2,
      canPasteImage: canPasteImage_2,
      onImagePaste: onImagePaste_2,
      pastedContents: pastedContents_2,
      onRemoveImage: onRemoveImage_2,
      pointerWhileDisabled: pointerWhileDisabled
    } = t,
    isDisabled_6 = isDisabled_5 === void 0 ? !1 : isDisabled_5,
    hideIndex_2 = hideIndexes === void 0 ? !1 : hideIndexes,
    Ie = disablePrintableKeybindings === void 0 ? !1 : disablePrintableKeybindings,
    pe = visibleOptionCount_5 === void 0 ? 5 : visibleOptionCount_5,
    X = columnSizingOptions === void 0 ? options_7 : columnSizingOptions,
    T = layout_2 === void 0 ? "compact" : layout_2,
    ve = disableSelection_3 === void 0 ? !1 : disableSelection_3,
    showLabel_2 = inlineDescriptions === void 0 ? !1 : inlineDescriptions,
    extraChromeWidth_2 = inputChromeWidth === void 0 ? 0 : inputChromeWidth,
    J = pointerWhileDisabled === void 0 ? !1 : pointerWhileDisabled,
    [imagesSelected_3, onImagesSelectedChange_2] = y(!1),
    [selectedImageIndex_2, onSelectedImageIndexChange_2] = y(0),
    ye;
  if (E[0] !== options_7) ye = () => {
    let ee = new Map();
    return options_7.forEach(item => {
      if (item.type === "input" && item.initialValue) ee.set(item.value, item.initialValue);
    }), ee;
  }, E[0] = options_7, E[1] = ye;else ye = E[1];
  let [inputValues_2, ut] = y(ye),
    Ae;
  if (E[2] === S) Ae = new Map(), E[2] = Ae;else Ae = E[2];
  let Wt = A(Ae),
    Vt,
    Bt;
  if (E[3] !== inputValues_2 || E[4] !== options_7) Vt = () => {
    for (const Fe of options_7) {
      if (Fe.type === "input" && Fe.initialValue !== void 0) {
        let It = Wt.current.get(Fe.value) ?? "";
        let He = inputValues_2.get(Fe.value) ?? "";
        let initialValue = Fe.initialValue;
        if (initialValue !== It && He === It) ut(lt => {
          let qe = new Map(lt);
          return qe.set(Fe.value, initialValue), qe;
        });
        Wt.current.set(Fe.value, initialValue);
      }
    }
  }, Bt = [options_7, inputValues_2], E[3] = inputValues_2, E[4] = options_7, E[5] = Vt, E[6] = Bt;else Vt = E[5], Bt = E[6];
  P(Vt, Bt);
  let at = T === "compact" && !showLabel_2 && !X.some(qp) && X.some(Yp),
    {
      columns: columns_3
    } = us(Te());
  const visibleOptionCount_6 = RLe(pe, at ? "compact-vertical" : T);
  let We;
  if (E[7] !== W || E[8] !== defaultValue_5 || E[9] !== D || E[10] !== onChange_4 || E[11] !== onFocus_5 || E[12] !== options_7 || E[13] !== selectedValue_2 || E[14] !== visibleOptionCount_6) We = {
    visibleOptionCount: visibleOptionCount_6,
    options: options_7,
    defaultValue: defaultValue_5,
    selectedValue: selectedValue_2,
    onChange: onChange_4,
    onCancel: D,
    onFocus: onFocus_5,
    focusValue: W
  }, E[7] = W, E[8] = defaultValue_5, E[9] = D, E[10] = onChange_4, E[11] = onFocus_5, E[12] = options_7, E[13] = selectedValue_2, E[14] = visibleOptionCount_6, E[15] = We;else We = E[15];
  let state_2 = Ri(We),
    [hasInkFocus_2, yt] = y(!0),
    Be = hS(),
    shouldDropWheel_2 = Gvt(),
    kt;
  if (E[16] !== ve || E[17] !== isDisabled_6 || E[18] !== J || E[19] !== Be || E[20] !== state_2) kt = ct => isDisabled_6 && !J || ve === !0 || ct.disabled === !0 ? void 0 : rn => {
    if (Be(rn)) {
      return;
    }
    if (ct.type === "input") state_2.focusOption(ct.value);else state_2.onChange?.(ct.value);
  }, E[16] = ve, E[17] = isDisabled_6, E[18] = J, E[19] = Be, E[20] = state_2, E[21] = kt;else kt = E[21];
  let je = kt;
  const disableSelection_4 = ve || (hideIndex_2 ? "numeric" : !1);
  let onEnterImageSelection_2;
  if (E[22] !== pastedContents_2) onEnterImageSelection_2 = () => {
    if (pastedContents_2 && Object.values(pastedContents_2).some(Jp)) {
      let ln = F(Object.values(pastedContents_2), Xp);
      return onImagesSelectedChange_2(!0), onSelectedImageIndexChange_2(ln - 1), !0;
    }
    return !1;
  }, E[22] = pastedContents_2, E[23] = onEnterImageSelection_2;else onEnterImageSelection_2 = E[23];
  let onExitImageSelection_2;
  if (E[24] === S) onExitImageSelection_2 = () => {
    onImagesSelectedChange_2(!1);
  }, E[24] = onExitImageSelection_2;else onExitImageSelection_2 = E[24];
  let Lt;
  if (E[25] !== hasInkFocus_2 || E[26] !== imagesSelected_3 || E[27] !== inputValues_2 || E[28] !== isDisabled_6 || E[29] !== onDownFromLastItem_2 || E[30] !== onInputModeToggle_2 || E[31] !== onUpFromFirstItem_2 || E[32] !== options_7 || E[33] !== state_2 || E[34] !== disableSelection_4 || E[35] !== onEnterImageSelection_2) Lt = {
    isDisabled: isDisabled_6,
    hasInkFocus: hasInkFocus_2,
    disableSelection: disableSelection_4,
    state: state_2,
    options: options_7,
    isMultiSelect: !1,
    onUpFromFirstItem: onUpFromFirstItem_2,
    onDownFromLastItem: onDownFromLastItem_2,
    onInputModeToggle: onInputModeToggle_2,
    inputValues: inputValues_2,
    imagesSelected: imagesSelected_3,
    onEnterImageSelection: onEnterImageSelection_2,
    onExitImageSelection: onExitImageSelection_2
  }, E[25] = hasInkFocus_2, E[26] = imagesSelected_3, E[27] = inputValues_2, E[28] = isDisabled_6, E[29] = onDownFromLastItem_2, E[30] = onInputModeToggle_2, E[31] = onUpFromFirstItem_2, E[32] = options_7, E[33] = state_2, E[34] = disableSelection_4, E[35] = onEnterImageSelection_2, E[36] = Lt;else Lt = E[36];
  let {
      handleKeyDown: qn
    } = Fi(Lt),
    ref_10 = A(null);
  xy(ref_10, !isDisabled_6);
  let pt = {
      container: () => ({
        flexDirection: "column",
        ref: ref_10,
        ...(isDisabled_6 ? {} : {
          tabIndex: 0,
          textEntry: Ie ? !0 : void 0,
          onKeyDown: qn,
          onFocus: () => yt(!0),
          onBlur: () => yt(!1)
        })
      }),
      highlightedText: highlightedText
    },
    an;
  if (E[37] !== m || E[38] !== options_7.length || E[39] !== state_2.visibleFromIndex || E[40] !== state_2.visibleToIndex) an = m !== void 0 && state_2.visibleToIndex - state_2.visibleFromIndex < options_7.length ? e(s, {
    paddingLeft: 3,
    height: 1,
    children: e(d_, {
      count: options_7.length - state_2.visibleToIndex,
      unit: m
    })
  }) : null, E[37] = m, E[38] = options_7.length, E[39] = state_2.visibleFromIndex, E[40] = state_2.visibleToIndex, E[41] = an;else an = E[41];
  let hiddenBelow = an,
    Ct;
  if (E[42] !== isDisabled_6 || E[43] !== options_7.length || E[44] !== shouldDropWheel_2 || E[45] !== state_2.scrollViewport || E[46] !== state_2.visibleFromIndex || E[47] !== state_2.visibleToIndex) Ct = {
    isDisabled: isDisabled_6,
    visibleFromIndex: state_2.visibleFromIndex,
    visibleToIndex: state_2.visibleToIndex,
    optionCount: options_7.length,
    scrollViewport: state_2.scrollViewport,
    shouldDropWheel: shouldDropWheel_2
  }, E[42] = isDisabled_6, E[43] = options_7.length, E[44] = shouldDropWheel_2, E[45] = state_2.scrollViewport, E[46] = state_2.visibleFromIndex, E[47] = state_2.visibleToIndex, E[48] = Ct;else Ct = E[48];
  let rows = V2t(Ct);
  if (T === "expanded") {
    let Je;
    if (E[49] !== hideIndex_2 || E[50] !== state_2.options) Je = hideIndex_2 ? 0 : state_2.options.length.toString().length, E[49] = hideIndex_2, E[50] = state_2.options, E[51] = Je;else Je = E[51];
    let maxIndexWidth_2 = Je;
    return e(Dt, {
      container: pt.container(),
      rows: rows,
      hiddenBelow: hiddenBelow,
      children: state_2.visibleOptions.map((z, dn) => {
        let bt = z.index === state_2.visibleFromIndex;
        let Ut = z.index === state_2.visibleToIndex - 1;
        let cn = state_2.visibleToIndex < options_7.length;
        let Qe = state_2.visibleFromIndex > 0;
        let index_8 = state_2.visibleFromIndex + dn + 1;
        let isFocused_5 = !isDisabled_6 && state_2.focusedValue === z.value;
        let isSelected_5 = state_2.value === z.value;
        if (z.type === "input") {
          let inputValue = inputValues_2.has(z.value) ? inputValues_2.get(z.value) : z.initialValue || "";
          return e(BCe, {
            option: z,
            onClick: je(z),
            hoverStyle: hoverStyle_4,
            isFocused: isFocused_5,
            isSelected: isSelected_5,
            shouldShowDownArrow: cn && Ut,
            shouldShowUpArrow: Qe && bt,
            maxIndexWidth: maxIndexWidth_2,
            index: index_8,
            hideIndex: hideIndex_2,
            extraChromeWidth: extraChromeWidth_2,
            inputValue: inputValue,
            onInputChange: ns => {
              ut(ea => {
                let os = new Map(ea);
                return os.set(z.value, ns), os;
              });
            },
            onSubmit: ta => {
              let na = pastedContents_2 && Object.values(pastedContents_2).some(Zp);
              if (ta.trim() || na || z.allowEmptySubmitToCancel) onChange_4?.(z.value);else if (!z.ignoreEmptySubmit) D?.();
            },
            onExit: D,
            layout: "expanded",
            showLabel: showLabel_2,
            onOpenEditor: onOpenEditor_2,
            resetCursorOnUpdate: z.resetCursorOnUpdate,
            canPasteImage: canPasteImage_2,
            onImagePaste: onImagePaste_2,
            pastedContents: pastedContents_2,
            onRemoveImage: onRemoveImage_2,
            imagesSelected: imagesSelected_3,
            selectedImageIndex: selectedImageIndex_2,
            onImagesSelectedChange: onImagesSelectedChange_2,
            onSelectedImageIndexChange: onSelectedImageIndexChange_2
          }, String(z.value));
        }
        let is = z.label;
        if (typeof z.label === "string" && c && z.label.includes(c)) {
          let label = z.label;
          let oa = label.indexOf(c);
          is = r(Q, {
            children: [label.slice(0, oa), e(n, {
              ...pt.highlightedText(),
              children: c
            }), label.slice(oa + c.length)]
          });
        }
        let dimColor = z.disabled === !0;
        let color_3 = dimColor ? void 0 : isSelected_5 ? "success" : isFocused_5 ? "suggestion" : void 0;
        return r(s, {
          flexDirection: "column",
          flexShrink: 0,
          children: [e(Vre, {
            isFocused: isFocused_5,
            isSelected: isSelected_5,
            shouldShowDownArrow: cn && Ut,
            shouldShowUpArrow: Qe && bt,
            onClick: je(z),
            hoverStyle: hoverStyle_4,
            children: e(n, {
              dimColor: dimColor,
              color: color_3,
              children: is
            })
          }), z.description && e(s, {
            paddingLeft: 2,
            children: e(n, {
              dimColor: dimColor || z.dimDescription !== !1,
              color: color_3,
              children: e(Go, {
                children: z.description
              })
            })
          }), e(n, {
            children: " "
          })]
        }, String(z.value));
      })
    });
  }
  if (T === "compact-vertical") {
    let Je;
    if (E[52] !== hideIndex_2 || E[53] !== state_2.options) Je = hideIndex_2 ? 0 : state_2.options.length.toString().length, E[52] = hideIndex_2, E[53] = state_2.options, E[54] = Je;else Je = E[54];
    let maxIndexWidth_3 = Je;
    return e(Dt, {
      container: pt.container(),
      rows: rows,
      hiddenBelow: hiddenBelow,
      children: state_2.visibleOptions.map((le, nf) => {
        let sa = le.index === state_2.visibleFromIndex;
        let ra = le.index === state_2.visibleToIndex - 1;
        let la = state_2.visibleToIndex < options_7.length;
        let aa = state_2.visibleFromIndex > 0;
        let index_9 = state_2.visibleFromIndex + nf + 1;
        let isFocused_6 = !isDisabled_6 && state_2.focusedValue === le.value;
        let isSelected_6 = state_2.value === le.value;
        if (le.type === "input") {
          let of = inputValues_2.has(le.value) ? inputValues_2.get(le.value) : le.initialValue || "";
          return e(BCe, {
            option: le,
            onClick: je(le),
            hoverStyle: hoverStyle_4,
            isFocused: isFocused_6,
            isSelected: isSelected_6,
            shouldShowDownArrow: la && ra,
            shouldShowUpArrow: aa && sa,
            maxIndexWidth: maxIndexWidth_3,
            index: index_9,
            hideIndex: hideIndex_2,
            extraChromeWidth: extraChromeWidth_2,
            inputValue: of,
            onInputChange: sf => {
              ut(rf => {
                let da = new Map(rf);
                return da.set(le.value, sf), da;
              });
            },
            onSubmit: lf => {
              let af = pastedContents_2 && Object.values(pastedContents_2).some(ef);
              if (lf.trim() || af || le.allowEmptySubmitToCancel) onChange_4?.(le.value);else if (!le.ignoreEmptySubmit) D?.();
            },
            onExit: D,
            layout: "compact",
            showLabel: showLabel_2,
            onOpenEditor: onOpenEditor_2,
            resetCursorOnUpdate: le.resetCursorOnUpdate,
            canPasteImage: canPasteImage_2,
            onImagePaste: onImagePaste_2,
            pastedContents: pastedContents_2,
            onRemoveImage: onRemoveImage_2,
            imagesSelected: imagesSelected_3,
            selectedImageIndex: selectedImageIndex_2,
            onImagesSelectedChange: onImagesSelectedChange_2,
            onSelectedImageIndexChange: onSelectedImageIndexChange_2
          }, String(le.value));
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
          });
        }
        let dimColor_2 = le.disabled === !0;
        return r(s, {
          flexDirection: "column",
          flexShrink: 0,
          children: [e(Vre, {
            isFocused: isFocused_6,
            isSelected: isSelected_6,
            shouldShowDownArrow: la && ra,
            shouldShowUpArrow: aa && sa,
            onClick: je(le),
            hoverStyle: hoverStyle_4,
            children: r(Q, {
              children: [!hideIndex_2 && e(n, {
                dimColor: !0,
                children: `${index_9}.`.padEnd(maxIndexWidth_3 + 1)
              }), e(n, {
                dimColor: dimColor_2,
                color: dimColor_2 ? void 0 : isSelected_6 ? "success" : isFocused_6 ? "suggestion" : void 0,
                children: ca
              })]
            })
          }), le.description && e(s, {
            paddingLeft: hideIndex_2 ? 4 : maxIndexWidth_3 + 4,
            children: e(n, {
              dimColor: dimColor_2 || le.dimDescription !== !1,
              color: dimColor_2 ? void 0 : isSelected_6 ? "success" : isFocused_6 ? "suggestion" : void 0,
              children: e(Go, {
                children: le.description
              })
            })
          })]
        }, String(le.value));
      })
    });
  }
  let Je;
  if (E[55] !== X || E[56] !== hideIndex_2) Je = hideIndex_2 ? 0 : X.length.toString().length, E[55] = X, E[56] = hideIndex_2, E[57] = Je;else Je = E[57];
  let maxIndexWidth_4 = Je;
  if (at) {
    let $t, Xn;
    if (E[58] !== columns_3 || E[59] !== X || E[60] !== hideIndex_2 || E[61] !== maxIndexWidth_4 || E[62] !== state_2.value) {
      $t = hideIndex_2 ? 0 : maxIndexWidth_4 + 2;
      let Ht;
      if (E[65] !== X || E[66] !== $t || E[67] !== state_2.value) {
        let Rt;
        if (E[69] !== $t || E[70] !== state_2.value) Rt = ds => {
          if (ds.type === "input") {
            return 0;
          }
          let uf = state_2.value === ds.value ? 2 : 0;
          return 2 + $t + ie(PI(ds.label)) + uf;
        }, E[69] = $t, E[70] = state_2.value, E[71] = Rt;else Rt = E[71];
        Ht = Math.max(...X.map(Rt));
        E[65] = X, E[66] = $t, E[67] = state_2.value, E[68] = Ht;
      } else Ht = E[68];
      Xn = Math.min(Ht, Math.floor(columns_3 * ql));
      E[58] = columns_3, E[59] = X, E[60] = hideIndex_2, E[61] = maxIndexWidth_4, E[62] = state_2.value, E[63] = $t, E[64] = Xn;
    } else $t = E[63], Xn = E[64];
    let vf = state_2.visibleOptions.map((jt, df) => {
      let cf = jt.index === state_2.visibleFromIndex;
      let pf = jt.index === state_2.visibleToIndex - 1;
      let ff = state_2.visibleToIndex < options_7.length;
      let mf = state_2.visibleFromIndex > 0;
      let index_10 = state_2.visibleFromIndex + df + 1;
      let isFocused_7 = !isDisabled_6 && state_2.focusedValue === jt.value;
      let isSelected_7 = state_2.value === jt.value;
      let isOptionDisabled = jt.disabled === !0;
      let ma = isSelected_7 ? 2 : 0;
      let Qn = PI(jt.label);
      let label_2 = jt.label;
      let ha = Xn - 2 - $t - ma;
      if (ie(Qn) > ha) Qn = mt(Qn, ha), label_2 = Qn;
      if (typeof label_2 === "string" && c && label_2.includes(c)) {
        let ps = label_2;
        let ba = ps.indexOf(c);
        label_2 = r(Q, {
          children: [ps.slice(0, ba), e(n, {
            ...pt.highlightedText(),
            children: c
          }), ps.slice(ba + c.length)]
        });
      }
      return {
        option: jt,
        index: index_10,
        label: label_2,
        labelWidth: 2 + $t + ie(Qn) + ma,
        isFocused: isFocused_7,
        isSelected: isSelected_7,
        isOptionDisabled: isOptionDisabled,
        shouldShowDownArrow: ff && pf,
        shouldShowUpArrow: mf && cf
      };
    });
    const container = pt.container();
    let Rt;
    if (E[72] !== je || E[73] !== hideIndex_2 || E[74] !== hoverStyle_4 || E[75] !== maxIndexWidth_4 || E[76] !== Xn) Rt = me => {
      if (me.option.type === "input") {
        return null;
      }
      let ga = Xn - me.labelWidth;
      return r(ts, {
        isFocused: me.isFocused,
        shouldShowDownArrow: me.shouldShowDownArrow,
        shouldShowUpArrow: me.shouldShowUpArrow,
        onClick: je(me.option),
        hoverStyle: hoverStyle_4,
        children: [r(s, {
          flexDirection: "row",
          flexShrink: 0,
          children: [e(n, {
            children: " "
          }), r(n, {
            dimColor: me.isOptionDisabled,
            color: me.isOptionDisabled ? void 0 : me.isSelected ? "success" : me.isFocused ? "suggestion" : void 0,
            children: [!hideIndex_2 && e(n, {
              dimColor: !0,
              children: `${me.index}.`.padEnd(maxIndexWidth_4 + 2)
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
      }, String(me.option.value));
    }, E[72] = je, E[73] = hideIndex_2, E[74] = hoverStyle_4, E[75] = maxIndexWidth_4, E[76] = Xn, E[77] = Rt;else Rt = E[77];
    return e(Dt, {
      container: container,
      rows: rows,
      hiddenBelow: hiddenBelow,
      children: vf.map(Rt)
    });
  }
  const fs = Dt,
    container_2 = pt.container(),
    children_17 = state_2.visibleOptions.map((_, va) => {
      if (_.type === "input") {
        let inputValue_2 = inputValues_2.has(_.value) ? inputValues_2.get(_.value) : _.initialValue || "";
        let If = _.index === state_2.visibleFromIndex;
        let yf = _.index === state_2.visibleToIndex - 1;
        let Sf = state_2.visibleToIndex < options_7.length;
        let wf = state_2.visibleFromIndex > 0;
        let index_11 = state_2.visibleFromIndex + va + 1;
        let isFocused_8 = !isDisabled_6 && state_2.focusedValue === _.value;
        let isSelected_8 = state_2.value === _.value;
        return e(BCe, {
          option: _,
          onClick: je(_),
          hoverStyle: hoverStyle_4,
          isFocused: isFocused_8,
          isSelected: isSelected_8,
          shouldShowDownArrow: Sf && yf,
          shouldShowUpArrow: wf && If,
          maxIndexWidth: maxIndexWidth_4,
          index: index_11,
          hideIndex: hideIndex_2,
          extraChromeWidth: extraChromeWidth_2,
          inputValue: inputValue_2,
          onInputChange: Df => {
            ut(Vf => {
              let Ia = new Map(Vf);
              return Ia.set(_.value, Df), Ia;
            });
          },
          onSubmit: Ff => {
            let kf = pastedContents_2 && Object.values(pastedContents_2).some(tf);
            if (Ff.trim() || kf || _.allowEmptySubmitToCancel) onChange_4?.(_.value);else if (!_.ignoreEmptySubmit) D?.();
          },
          onExit: D,
          layout: "compact",
          showLabel: showLabel_2,
          onOpenEditor: onOpenEditor_2,
          resetCursorOnUpdate: _.resetCursorOnUpdate,
          canPasteImage: canPasteImage_2,
          onImagePaste: onImagePaste_2,
          pastedContents: pastedContents_2,
          onRemoveImage: onRemoveImage_2,
          imagesSelected: imagesSelected_3,
          selectedImageIndex: selectedImageIndex_2,
          onImagesSelectedChange: onImagesSelectedChange_2,
          onSelectedImageIndexChange: onSelectedImageIndexChange_2
        }, String(_.value));
      }
      let label_3 = _.label;
      if (typeof _.label === "string" && c && _.label.includes(c)) {
        let label_4 = _.label;
        let Sa = label_4.indexOf(c);
        label_3 = r(Q, {
          children: [label_4.slice(0, Sa), e(n, {
            ...pt.highlightedText(),
            children: c
          }), label_4.slice(Sa + c.length)]
        });
      }
      let Rf = _.index === state_2.visibleFromIndex;
      let Mf = _.index === state_2.visibleToIndex - 1;
      let Ef = state_2.visibleToIndex < options_7.length;
      let Pf = state_2.visibleFromIndex > 0;
      let Af = state_2.visibleFromIndex + va + 1;
      let isFocused_9 = !isDisabled_6 && state_2.focusedValue === _.value;
      let isSelected_9 = state_2.value === _.value;
      let dimColor_3 = _.disabled === !0;
      return r(Vre, {
        isFocused: isFocused_9,
        isSelected: isSelected_9,
        shouldShowDownArrow: Ef && Mf,
        shouldShowUpArrow: Pf && Rf,
        onClick: je(_),
        hoverStyle: hoverStyle_4,
        children: [r(s, {
          flexDirection: "row",
          flexShrink: 0,
          children: [!hideIndex_2 && e(n, {
            dimColor: !0,
            children: `${Af}.`.padEnd(maxIndexWidth_4 + 2)
          }), r(n, {
            dimColor: dimColor_3,
            color: dimColor_3 ? void 0 : isSelected_9 ? "success" : isFocused_9 ? "suggestion" : void 0,
            children: [label_3, showLabel_2 && _.description && r(n, {
              dimColor: dimColor_3 || _.dimDescription !== !1,
              children: [" ", _.description]
            })]
          })]
        }), !showLabel_2 && _.description && e(s, {
          flexShrink: 99,
          marginLeft: 2,
          children: e(n, {
            wrap: "wrap-trim",
            dimColor: dimColor_3 || _.dimDescription !== !1,
            color: dimColor_3 ? void 0 : isSelected_9 ? "success" : isFocused_9 ? "suggestion" : void 0,
            children: e(Go, {
              children: _.description
            })
          })
        })]
      }, String(_.value));
    });
  let wa;
  if (E[78] !== fs || E[79] !== hiddenBelow || E[80] !== rows || E[81] !== container_2 || E[82] !== children_17) wa = e(fs, {
    container: container_2,
    rows: rows,
    hiddenBelow: hiddenBelow,
    children: children_17
  }), E[78] = fs, E[79] = hiddenBelow, E[80] = rows, E[81] = container_2, E[82] = children_17, E[83] = wa;else wa = E[83];
  return wa;
}
var Gl = 8,
  ql = 0.6;
function RLe(t, o) {
  let i = o === void 0 ? "compact" : o,
    {
      rows: rows_2
    } = us(Te()),
    l = i === "expanded" ? 3 : i === "compact" ? 1 : 2,
    m = Math.max(1, Math.floor((rows_2 - Gl) / l));
  return Math.min(t, m);
}
function Dt(t) {
  let m = w(7),
    {
      container: container_3,
      rows: rows_3,
      hiddenBelow: hiddenBelow_2,
      children: children_18
    } = t,
    c;
  if (m[0] !== children_18 || m[1] !== rows_3) c = e(UCe, {
    ...rows_3,
    children: children_18
  }), m[0] = children_18, m[1] = rows_3, m[2] = c;else c = m[2];
  let u;
  if (m[3] !== container_3 || m[4] !== hiddenBelow_2 || m[5] !== c) u = r(s, {
    ...container_3,
    children: [c, hiddenBelow_2]
  }), m[3] = container_3, m[4] = hiddenBelow_2, m[5] = c, m[6] = u;else u = m[6];
  return u;
}
function ts(t) {
  let x = w(24),
    {
      isFocused: o,
      shouldShowDownArrow: shouldShowDownArrow_2,
      shouldShowUpArrow: shouldShowUpArrow_2,
      onClick: onClick_5,
      hoverStyle: hoverStyle_5,
      children: children_19
    } = t,
    u = onClick_5 !== void 0,
    [g, d] = BVe(u),
    b = $Ce(hoverStyle_5),
    inverse_3 = u && g && b === "inverse",
    I;
  if (x[0] !== o) I = {
    line: 0,
    column: 0,
    active: o
  }, x[0] = o, x[1] = I;else I = x[1];
  let ref_11 = Ek(I);
  const backgroundColor_3 = u && g && b === "tint" ? vR : void 0;
  let onMouseEnter_2;
  if (x[2] !== u || x[3] !== d) onMouseEnter_2 = u ? () => d(!0) : void 0, x[2] = u, x[3] = d, x[4] = onMouseEnter_2;else onMouseEnter_2 = x[4];
  let onMouseLeave_2;
  if (x[5] !== u || x[6] !== d) onMouseLeave_2 = u ? () => d(!1) : void 0, x[5] = u, x[6] = d, x[7] = onMouseLeave_2;else onMouseLeave_2 = x[7];
  let f;
  if (x[8] !== u || x[9] !== b || x[10] !== g || x[11] !== inverse_3 || x[12] !== o || x[13] !== shouldShowDownArrow_2 || x[14] !== shouldShowUpArrow_2) f = e(s, {
    flexShrink: 0,
    children: o ? e(n, {
      color: "suggestion",
      inverse: inverse_3,
      children: te.pointer
    }) : shouldShowDownArrow_2 ? e(n, {
      dimColor: !0,
      inverse: inverse_3,
      children: te.arrowDown
    }) : shouldShowUpArrow_2 ? e(n, {
      dimColor: !0,
      inverse: inverse_3,
      children: te.arrowUp
    }) : u && g && b === "pointer" ? e(n, {
      dimColor: !0,
      children: te.pointer
    }) : e(n, {
      inverse: inverse_3,
      children: " "
    })
  }), x[8] = u, x[9] = b, x[10] = g, x[11] = inverse_3, x[12] = o, x[13] = shouldShowDownArrow_2, x[14] = shouldShowUpArrow_2, x[15] = f;else f = x[15];
  let M;
  if (x[16] !== children_19 || x[17] !== ref_11 || x[18] !== onClick_5 || x[19] !== backgroundColor_3 || x[20] !== onMouseEnter_2 || x[21] !== onMouseLeave_2 || x[22] !== f) M = r(s, {
    ref: ref_11,
    flexDirection: "row",
    flexShrink: 0,
    backgroundColor: backgroundColor_3,
    onClick: onClick_5,
    onMouseEnter: onMouseEnter_2,
    onMouseLeave: onMouseLeave_2,
    children: [f, children_19]
  }), x[16] = children_19, x[17] = ref_11, x[18] = onClick_5, x[19] = backgroundColor_3, x[20] = onMouseEnter_2, x[21] = onMouseLeave_2, x[22] = f, x[23] = M;else M = x[23];
  return M;
}
export { vR, $Ce, UCe, BVe, kR, Za, l_, rc, G2t, cs, e7, Tnr, Cnr, jvt, Vre, BCe, xc, Rnr, V2t, Hi, Xe, RLe };