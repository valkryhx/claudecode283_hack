// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { v5 } from "B:/~BUN/root/chunk-trcn2d68.js";
import { s, n, bt, Jr, _t, Yw, Pue, ta, _r } from "B:/~BUN/root/chunk-1gn8pz4b.js";
import { io } from "B:/~BUN/root/chunk-4rk7cwxz.js";
import { qr, lH, L2 } from "B:/~BUN/root/chunk-y04k89s2.js";
import { it } from "B:/~BUN/root/chunk-gf53qpk6.js";
import { w } from "B:/~BUN/root/chunk-x9hkq9y1.js";
import { pe } from "B:/~BUN/root/chunk-nf4z9ga7.js";
import { ie, ot } from "B:/~BUN/root/chunk-bpp59nyd.js";
import { qYe } from "B:/~BUN/root/chunk-aw2zngte.js";
import { Ny } from "B:/~BUN/root/chunk-0rtwbec7.js";
import { Fj, Ol } from "B:/~BUN/root/chunk-1a6hgte8.js";
import { ys } from "B:/~BUN/root/chunk-h23911wn.js";
import { vi } from "B:/~BUN/root/chunk-prb4vytb.js";
import { Mf } from "B:/~BUN/root/chunk-9jvj58wt.js";
import { Jv } from "B:/~BUN/root/chunk-mr8gretd.js";
import { As } from "B:/~BUN/root/chunk-syke822n.js";
import { ve } from "B:/~BUN/root/chunk-cxqcvpm0.js";
import { et } from "B:/~BUN/root/chunk-zg8y1401.js";
import { ze, Wt } from "B:/~BUN/root/chunk-r2yrqvry.js";
import { F } from "B:/~BUN/root/chunk-acd2tycn.js";
import { ye } from "B:/~BUN/root/chunk-41008fhm.js";
import { Cl } from "B:/~BUN/root/chunk-1mdeqc2r.js";
import { Qn } from "B:/~BUN/root/chunk-jcnv9sfw.js";
import { Yg, zJe } from "B:/~BUN/root/chunk-vabpvk99.js";
import { Xe } from "B:/~BUN/root/chunk-parcaazx.js";
import { V, e, r } from "B:/~BUN/root/chunk-qkvevvte.js";
import { E7 } from "B:/~BUN/root/chunk-q3x7vf9d.js";
import { FM } from "B:/~BUN/root/chunk-y39emrp9.js";
import { Z } from "B:/~BUN/root/chunk-08bth2fj.js";
import { Qg, sl, Vt, Du, se, Pe, R, Gr, X, T, g, N } from "B:/~BUN/root/chunk-rnj6pcz5.js";
import { U } from "B:/~BUN/root/chunk-z1enakv9.js";
import { S } from "B:/~BUN/root/chunk-yv67t8hr.js";
N();
function Ra(I) {
  return Du(I) ? I.key : "";
}
var Xv = "userMessageBackground";
function Rue(o = "tint") {
  return pe.level === 0 ? "inverse" : o;
}
var Jn = Vt("");
function DQ(o) {
  let t = w(14),
    i,
    windowStart;
  if (t[0] !== o) ({
    windowStart: windowStart,
    ...i
  } = o), t[0] = o, t[1] = i, t[2] = windowStart;else i = t[1], windowStart = t[2];
  let l = windowStart === void 0 ? 0 : windowStart,
    d,
    f,
    p;
  if (t[3] !== i.children || t[4] !== l) {
    let b = Qg.toArray(i.children).map(Ra);
    d = Jn.Provider;
    f = l;
    p = b.join();
    t[3] = i.children, t[4] = l, t[5] = d, t[6] = f, t[7] = p;
  } else d = t[5], f = t[6], p = t[7];
  const value = `${f} ${p}`;
  let children;
  if (t[8] !== i) children = e(s, {
    flexDirection: "column",
    ...i
  }), t[8] = i, t[9] = children;else children = t[9];
  let y;
  if (t[10] !== d || t[11] !== value || t[12] !== children) y = e(d, {
    value: value,
    children: children
  }), t[10] = d, t[11] = value, t[12] = children, t[13] = y;else y = t[13];
  return y;
}
function aIe(o) {
  let d = w(5),
    t = Pe(Jn),
    [i, u] = g(null),
    l = o && i === t;
  if (i !== null && !l) u(null);
  let f;
  if (d[0] !== t) f = p => u(p ? t : null), d[0] = t, d[1] = f;else f = d[1];
  let b;
  if (d[2] !== l || d[3] !== f) b = [l, f], d[2] = l, d[3] = f, d[4] = b;else b = d[4];
  return b;
}
function tw(o) {
  let L = w(47),
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
    } = o,
    G = isSelected === void 0 ? !1 : isSelected,
    H = styled === void 0 ? !0 : styled,
    c = disabled === void 0 ? !1 : disabled,
    idle_2 = idle === void 0 ? !1 : idle,
    z = hoverStyle === void 0 ? "tint" : hoverStyle,
    m = !c && onClick !== void 0,
    D = !c && (onClick !== void 0 || onHoverChange !== void 0),
    [M, E] = aIe(D),
    _ = M && m,
    x = Rue(z),
    O;
  if (L[0] !== onHoverChange || L[1] !== E) O = he => {
    E(he), onHoverChange?.(he);
  }, L[0] = onHoverChange, L[1] = E, L[2] = O;else O = L[2];
  let J = O,
    A;
  if (L[3] !== c || L[4] !== idle_2 || L[5] !== isFocused || L[6] !== G || L[7] !== H) A = function st() {
    if (c) {
      return "inactive";
    }
    if (!H) {
      return;
    }
    if (G) {
      return "success";
    }
    if (isFocused && !idle_2) {
      return "suggestion";
    }
  }, L[3] = c, L[4] = idle_2, L[5] = isFocused, L[6] = G, L[7] = H, L[8] = A;else A = L[8];
  let st = A,
    color = st();
  const active = isFocused && !c && declareCursor !== !1;
  let Te;
  if (L[9] !== active) Te = {
    line: 0,
    column: 0,
    active: active
  }, L[9] = active, L[10] = Te;else Te = L[10];
  let ref = Yw(Te);
  const backgroundColor = _ && x === "tint" ? Xv : void 0,
    onClick_2 = m ? onClick : void 0;
  let onMouseEnter;
  if (L[11] !== D || L[12] !== J) onMouseEnter = D ? () => J(!0) : void 0, L[11] = D, L[12] = J, L[13] = onMouseEnter;else onMouseEnter = L[13];
  let onMouseLeave;
  if (L[14] !== D || L[15] !== J) onMouseLeave = D ? () => J(!1) : void 0, L[14] = D, L[15] = J, L[16] = onMouseLeave;else onMouseLeave = L[16];
  const hovered = _ && x === "pointer",
    inverse = _ && x === "inverse";
  let P;
  if (L[17] !== c || L[18] !== idle_2 || L[19] !== isFocused || L[20] !== showScrollDown || L[21] !== showScrollUp || L[22] !== hovered || L[23] !== inverse) P = e(s, {
    flexShrink: 0,
    children: e(Qo, {
      disabled: c,
      isFocused: isFocused,
      idle: idle_2,
      showScrollUp: showScrollUp,
      showScrollDown: showScrollDown,
      hovered: hovered,
      inverse: inverse
    })
  }), L[17] = c, L[18] = idle_2, L[19] = isFocused, L[20] = showScrollDown, L[21] = showScrollUp, L[22] = hovered, L[23] = inverse, L[24] = P;else P = L[24];
  let ue;
  if (L[25] !== children_2 || L[26] !== c || L[27] !== H || L[28] !== color) ue = H ? e(n, {
    color: color,
    dimColor: c,
    wrap: "truncate-end",
    children: children_2
  }) : children_2, L[25] = children_2, L[26] = c, L[27] = H, L[28] = color, L[29] = ue;else ue = L[29];
  let Ne;
  if (L[30] !== c || L[31] !== G) Ne = G && !c && e(s, {
    flexShrink: 0,
    children: e(n, {
      "aria-label": "(selected)",
      color: "success",
      children: Z.tick
    })
  }), L[30] = c, L[31] = G, L[32] = Ne;else Ne = L[32];
  let de;
  if (L[33] !== P || L[34] !== ue || L[35] !== Ne) de = r(s, {
    flexDirection: "row",
    gap: 1,
    children: [P, ue, Ne]
  }), L[33] = P, L[34] = ue, L[35] = Ne, L[36] = de;else de = L[36];
  let K;
  if (L[37] !== l) K = l && e(s, {
    paddingLeft: 2,
    children: e(n, {
      color: "inactive",
      wrap: "truncate-end",
      children: l
    })
  }), L[37] = l, L[38] = K;else K = L[38];
  let rt;
  if (L[39] !== ref || L[40] !== backgroundColor || L[41] !== onClick_2 || L[42] !== onMouseEnter || L[43] !== onMouseLeave || L[44] !== de || L[45] !== K) rt = r(s, {
    ref: ref,
    flexDirection: "column",
    backgroundColor: backgroundColor,
    onClick: onClick_2,
    onMouseEnter: onMouseEnter,
    onMouseLeave: onMouseLeave,
    children: [de, K]
  }), L[39] = ref, L[40] = backgroundColor, L[41] = onClick_2, L[42] = onMouseEnter, L[43] = onMouseLeave, L[44] = de, L[45] = K, L[46] = rt;else rt = L[46];
  return rt;
}
function Qo(o) {
  let b = w(12),
    {
      disabled: disabled_2,
      isFocused: isFocused_2,
      idle: u,
      showScrollUp: showScrollUp_2,
      showScrollDown: showScrollDown_2,
      hovered: hovered_2,
      inverse: inverse_2
    } = o;
  if (disabled_2) {
    let a;
    if (b[0] === S) a = e(n, {
      "aria-hidden": !0,
      children: " "
    }), b[0] = a;else a = b[0];
    return a;
  }
  if (isFocused_2) {
    const color_2 = u ? void 0 : "suggestion";
    let h;
    if (b[1] !== u || b[2] !== inverse_2 || b[3] !== color_2) h = e(n, {
      "aria-hidden": !0,
      color: color_2,
      dimColor: u,
      inverse: inverse_2,
      children: Z.pointer
    }), b[1] = u, b[2] = inverse_2, b[3] = color_2, b[4] = h;else h = b[4];
    return h;
  }
  if (showScrollDown_2) {
    let a;
    if (b[5] !== inverse_2) a = e(n, {
      "aria-label": "(more below)",
      dimColor: !0,
      inverse: inverse_2,
      children: Z.arrowDown
    }), b[5] = inverse_2, b[6] = a;else a = b[6];
    return a;
  }
  if (showScrollUp_2) {
    let a;
    if (b[7] !== inverse_2) a = e(n, {
      "aria-label": "(more above)",
      dimColor: !0,
      inverse: inverse_2,
      children: Z.arrowUp
    }), b[7] = inverse_2, b[8] = a;else a = b[8];
    return a;
  }
  if (hovered_2) {
    let a;
    if (b[9] === S) a = e(n, {
      "aria-hidden": !0,
      dimColor: !0,
      children: Z.pointer
    }), b[9] = a;else a = b[9];
    return a;
  }
  let a;
  if (b[10] !== inverse_2) a = e(n, {
    "aria-hidden": !0,
    inverse: inverse_2,
    children: " "
  }), b[10] = inverse_2, b[11] = a;else a = b[11];
  return a;
}
N();
function Gi(o = Fj) {
  let t = ta(),
    i = T(Date.now());
  return se(() => Ol(t, i.current, o), [t, o]);
}
function yh() {
  return T(Date.now()).current;
}
function gc(o, t = Fj) {
  let settled = _r(t, o);
  return {
    remountKey: settled ? "settled" : "held",
    settled: settled
  };
}
function e_t() {
  let [epoch, t] = g(0),
    noteAttempt = se(() => t(u => u + 1), []);
  return {
    epoch: epoch,
    noteAttempt: noteAttempt
  };
}
function rs() {
  let o = ta(),
    t = T(null),
    {
      epoch: epoch_2,
      noteAttempt: noteAttempt_2
    } = e_t(),
    refusedWithin = se((f = Fj) => t.current !== null && Ol(o, t.current, f), [o]),
    noteRefused = se(() => {
      t.current = Date.now(), noteAttempt_2();
    }, [noteAttempt_2]);
  return {
    refusedWithin: refusedWithin,
    noteRefused: noteRefused,
    epoch: epoch_2
  };
}
N();
function Nu(nn) {
  return String(nn.value);
}
function Lu() {
  return null;
}
function Uu() {
  return "";
}
function Bu() {
  return null;
}
function $u() {
  return "";
}
function ju() {
  return "";
}
function Ku() {
  return null;
}
function Hu() {
  return "";
}
function zu() {
  return "";
}
function _u() {
  return null;
}
function Gu() {
  return "";
}
function qu() {
  return null;
}
function Yu() {
  return null;
}
function Ju() {
  return "";
}
function Xu(ct) {
  return ct.type !== "input";
}
function Qu() {
  return "";
}
function Zu() {
  return null;
}
function ed(es) {
  return String(es.value);
}
function td() {
  return null;
}
function nd() {
  return null;
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
  return "";
}
function ld() {
  return null;
}
function ad() {
  return null;
}
function ud() {
  return null;
}
function dd() {
  return "";
}
function cd() {
  return "";
}
function pd() {
  return "";
}
function fd() {
  return "";
}
function md() {
  return null;
}
function hd() {
  return null;
}
function bd() {
  return null;
}
function vd(jo) {
  return jo.type !== "input";
}
function gd() {
  return "";
}
function xd(ts, Ko) {
  return ts - Ko;
}
function Id(ns) {
  return String(ns + 1);
}
function yd() {
  return null;
}
function Sd() {
  return "";
}
function wd() {
  return null;
}
function Od() {
  return null;
}
function Cd() {
  return "";
}
function Td() {
  return "";
}
function Dd(P) {
  return P.slice(0, -1);
}
function Be(o) {
  let l = w(3),
    [t, i] = g(o),
    u = T(o),
    d;
  if (l[0] === S) d = f => {
    u.current = f(u.current), i(u.current);
  }, l[0] = d;else d = l[0];
  let p = d,
    b;
  if (l[1] !== t) b = [t, u, p], l[1] = t, l[2] = b;else b = l[2];
  return b;
}
function Jt() {
  return Be("");
}
function go(o) {
  if (o.length <= 1) return o[0] ?? "";
  if (o.length === 2) return `${o[0]} or ${o[1]}`;
  return `${o.slice(0, -1).join(", ")}, or ${o.at(-1)}`;
}
var Zo = 300;
function Na(o) {
  return ` \u2026 +${o} more characters`;
}
function ks(o) {
  if (o.length <= Zo) return o;
  let t = qr(o, Zo);
  if (t === o) return o;
  let i = [...o].length - Zo;
  return t + Na(i);
}
function yi(o, t) {
  let d = w(18),
    i = t === void 0 ? Fj : t,
    u = ta(),
    l = Gi(i),
    f;
  if (d[0] !== o || d[1] !== u || d[2] !== l || d[3] !== i) f = o === void 0 ? l : () => Ol(u, o, i), d[0] = o, d[1] = u, d[2] = l, d[3] = i, d[4] = f;else f = d[4];
  let p = f,
    {
      refusedWithin: refusedWithin_2,
      noteRefused: noteRefused_2
    } = rs(),
    h;
  if (d[5] !== p || d[6] !== noteRefused_2 || d[7] !== refusedWithin_2 || d[8] !== i) h = () => {
    if (p() || refusedWithin_2(i)) {
      return noteRefused_2(), !0;
    }
    return !1;
  }, d[5] = p, d[6] = noteRefused_2, d[7] = refusedWithin_2, d[8] = i, d[9] = h;else h = d[9];
  let refuse = h,
    I;
  if (d[10] !== p || d[11] !== noteRefused_2 || d[12] !== refusedWithin_2 || d[13] !== i) I = () => {
    if (!p() && !refusedWithin_2(i)) {
      return !1;
    }
    return noteRefused_2(), !0;
  }, d[10] = p, d[11] = noteRefused_2, d[12] = refusedWithin_2, d[13] = i, d[14] = I;else I = d[14];
  let refuseCharacter = I,
    G;
  if (d[15] !== refuse || d[16] !== refuseCharacter) G = {
    refuse: refuse,
    refuseCharacter: refuseCharacter
  }, d[15] = refuse, d[16] = refuseCharacter, d[17] = G;else G = d[17];
  return G;
}
function zK(o) {
  let m = w(71),
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
      drawLabels: drawLabels
    } = o,
    y = isDisabled === void 0 ? !1 : isDisabled,
    I = disableSelection === void 0 ? !1 : disableSelection,
    drawLabel = drawLabels === void 0 ? !1 : drawLabels,
    [G, H, c] = Jt(),
    [children_3, z] = g(null),
    D;
  if (m[0] === S) D = qYe(), m[0] = D;else D = m[0];
  let M = D,
    [E, _, x] = Be(null),
    L;
  if (m[1] !== options) L = options.map(Nu).join("\x00"), m[1] = options, m[2] = L;else L = m[2];
  let O = L,
    [he, J] = g(O);
  if (he !== O) J(O), x(Lu), c(Uu);
  let [A, st, ne] = Be(null);
  if (he !== O && A !== null) ne(Bu), c($u);
  let B = A !== null && options[A - 1]?.type === "input" ? options[A - 1] : null,
    ref_3 = T(null);
  Mf(ref_3, !y), vi("select", !!onCancel && !y);
  let W;
  if (m[3] !== I || m[4] !== B || m[5] !== onChange || m[6] !== onFocus || m[7] !== options || m[8] !== c || m[9] !== x || m[10] !== ne) W = ge => {
    if (I) {
      return;
    }
    if (B) {
      if (ge === "") {
        z("Enter some text, or Escape for the list.");
        return;
      }
      if (onChange?.(B.value) === !1) {
        return;
      }
      c(ju), ne(Ku);
      return;
    }
    let j = Number.parseInt(ge, 10);
    if (!Number.isFinite(j) || j < 1 || j > options.length) {
      z(`Invalid selection "${ge}". Enter a number between 1 and ${options.length}.`), c(Hu);
      return;
    }
    let oe = options[j - 1];
    if (oe.disabled) {
      z(`Option ${j} is disabled.`), c(zu);
      return;
    }
    if (oe.type === "input") {
      ne(() => j), x(_u);
      let re = oe.initialValue ?? "";
      c(() => re), oe.onChange(re), onFocus?.(oe.value);
      return;
    }
    if (onChange?.(oe.value) === !1) {
      return;
    }
    c(Gu), x(qu);
  }, m[3] = I, m[4] = B, m[5] = onChange, m[6] = onFocus, m[7] = options, m[8] = c, m[9] = x, m[10] = ne, m[11] = W;else W = m[11];
  let Se = W,
    Oe;
  if (m[12] !== H || m[13] !== I || m[14] !== _ || m[15] !== B || m[16] !== st || m[17] !== y || m[18] !== onCancel || m[19] !== onFocus || m[20] !== options || m[21] !== refuseInput || m[22] !== c || m[23] !== x || m[24] !== ne || m[25] !== Se) Oe = P => {
    if (y) {
      return;
    }
    if (P.key === "escape" && P.name === "escape") {
      if (P.preventDefault(), B) {
        ne(Yu), c(Ju);
        let ue = options.find(Xu) ?? options[0];
        if (ue) onFocus?.(ue.value);
        return;
      }
      onCancel?.();
      return;
    }
    if (I) {
      return;
    }
    if (P.key === "return" && P.name === "return") {
      if (P.preventDefault(), refuseInput?.()) {
        return;
      }
      if (B || H.current.length > 0) {
        Se(H.current);
        return;
      }
      if (M && _.current !== null) Se(String(_.current + 1));
      return;
    }
    if (P.key === "backspace" || P.key === "delete") {
      P.preventDefault();
      let Ne = H.current.slice(0, -1);
      if (B && B.onChange(Ne) === !1) {
        return;
      }
      c(() => Ne);
      return;
    }
    if (M && !B && st.current === null && (P.name === "up" || P.name === "down")) {
      if (P.preventDefault(), refuseInput?.()) {
        return;
      }
      z(null), c(Qu);
      let de = options.length;
      if (de === 0) {
        return;
      }
      let current = _.current;
      let rt = current === null ? P.name === "down" ? 0 : de - 1 : (current + (P.name === "down" ? 1 : -1) + de) % de;
      x(() => rt);
      let mt = options[rt];
      if (mt) onFocus?.(mt.value);
      return;
    }
    if (B) {
      if (P.key.length === 1 && !P.ctrl && !P.meta) {
        P.preventDefault();
        let yt = H.current + P.key;
        if (B.onChange(yt) === !1) {
          return;
        }
        c(() => yt);
      }
      return;
    }
    let Me = lH(P.key);
    if (/^[0-9]$/.test(Me)) {
      if (P.preventDefault(), refuseInput?.()) {
        return;
      }
      z(null), c(tn => tn + Me), x(Zu);
    }
  }, m[12] = H, m[13] = I, m[14] = _, m[15] = B, m[16] = st, m[17] = y, m[18] = onCancel, m[19] = onFocus, m[20] = options, m[21] = refuseInput, m[22] = c, m[23] = x, m[24] = ne, m[25] = Se, m[26] = Oe;else Oe = m[26];
  let onKeyDown = Oe,
    St;
  if (m[27] !== G || m[28] !== B || m[29] !== A || m[30] !== onCancel || m[31] !== options.length) St = B ? `Enter text for option ${A} (${Jv(B.label)}), or Escape for the list: ${G}` : `Select with numbers [1-${options.length}]${M ? " or up / down arrow keys" : ""}. Then ${go(["Enter to submit", ...(onCancel ? ["Escape to cancel"] : [])])}: ${G}`, m[27] = G, m[28] = B, m[29] = A, m[30] = onCancel, m[31] = options.length, m[32] = St;else St = m[32];
  let children_4 = St,
    column;
  if (m[33] !== children_4) column = ie(children_4), m[33] = children_4, m[34] = column;else column = m[34];
  const active_2 = !y && !I && E === null;
  let He;
  if (m[35] !== active_2 || m[36] !== column) He = {
    line: 0,
    column: column,
    active: active_2,
    visible: !0
  }, m[35] = active_2, m[36] = column, m[37] = He;else He = m[37];
  let ref_2 = Yw(He),
    De;
  if (m[38] !== onKeyDown || m[39] !== y) De = y ? {} : {
    tabIndex: 0,
    onKeyDown: onKeyDown
  }, m[38] = onKeyDown, m[39] = y, m[40] = De;else De = m[40];
  let Le;
  if (m[41] !== defaultValue || m[42] !== I || m[43] !== drawLabel || m[44] !== E || m[45] !== headings || m[46] !== y || m[47] !== options) {
    let Ge;
    if (m[49] !== defaultValue || m[50] !== I || m[51] !== drawLabel || m[52] !== E || m[53] !== headings || m[54] !== y) Ge = (option, ht) => r(sl, {
      children: [headings?.get(ht), e(En, {
        index: ht + 1,
        option: option,
        selected: defaultValue !== void 0 && option.value === defaultValue,
        focused: E === ht && !y && !I,
        drawLabel: drawLabel
      })]
    }, String(option.value)), m[49] = defaultValue, m[50] = I, m[51] = drawLabel, m[52] = E, m[53] = headings, m[54] = y, m[55] = Ge;else Ge = m[55];
    Le = options.map(Ge);
    m[41] = defaultValue, m[42] = I, m[43] = drawLabel, m[44] = E, m[45] = headings, m[46] = y, m[47] = options, m[48] = Le;
  } else Le = m[48];
  let Ge;
  if (m[56] !== headings || m[57] !== options.length) Ge = headings?.get(options.length), m[56] = headings, m[57] = options.length, m[58] = Ge;else Ge = m[58];
  let q;
  if (m[59] !== children_3) q = children_3 && e(n, {
    children: children_3
  }), m[59] = children_3, m[60] = q;else q = m[60];
  let dt;
  if (m[61] !== ref_2 || m[62] !== I || m[63] !== children_4) dt = !I && e(s, {
    ref: ref_2,
    children: e(n, {
      children: children_4
    })
  }), m[61] = ref_2, m[62] = I, m[63] = children_4, m[64] = dt;else dt = m[64];
  let vt;
  if (m[65] !== De || m[66] !== Le || m[67] !== Ge || m[68] !== q || m[69] !== dt) vt = r(s, {
    ref: ref_3,
    flexDirection: "column",
    ...De,
    children: [Le, Ge, q, dt]
  }), m[65] = De, m[66] = Le, m[67] = Ge, m[68] = q, m[69] = dt, m[70] = vt;else vt = m[70];
  return vt;
}
function hvn(o) {
  let h = w(91),
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
    } = o,
    y;
  if (h[0] !== defaultValue_2) y = defaultValue_2 === void 0 ? [] : defaultValue_2, h[0] = defaultValue_2, h[1] = y;else y = h[1];
  let I = y,
    C = isDisabled_2 === void 0 ? !1 : isDisabled_2,
    [G, H, c] = Jt(),
    [children_5, z] = g(null),
    m;
  if (h[2] === S) m = qYe(), h[2] = m;else m = h[2];
  let D = m,
    [M, E, _] = Be(null),
    [x, L, O] = Be(null),
    he;
  if (h[3] !== options_2) he = options_2.map(ed).join("\x00"), h[3] = options_2, h[4] = he;else he = h[4];
  let J = he,
    [A, st] = g(J);
  if (A !== J) st(J), _(td), O(nd), c(od);
  let ne;
  if (h[5] !== I || h[6] !== options_2) ne = () => new Set(options_2.flatMap((item, index) => !item.disabled && I.includes(item.value) ? [index] : [])), h[5] = I, h[6] = options_2, h[7] = ne;else ne = h[7];
  let W = ne,
    [ge, j] = g(null),
    oe = T(!1),
    re = T(!1),
    Se;
  if (h[8] !== onSubmit || h[9] !== ge) Se = () => {
    if (ge !== null) {
      let Oe = [...ge];
      j(null), oe.current = !1, onSubmit?.(Oe);
    }
  }, h[8] = onSubmit, h[9] = ge, h[10] = Se;else Se = h[10];
  let P;
  if (h[11] !== ge) P = [ge], h[11] = ge, h[12] = P;else P = h[12];
  R(Se, P);
  let [ue, Ne, de] = Be(null);
  if (A !== J && ue !== null) de(id), c(sd);
  let K = ue && options_2[ue.index - 1]?.type === "input" ? options_2[ue.index - 1] : null,
    ref_5 = T(null);
  Mf(ref_5, !C), vi("multi-select", !!onCancel_2 && !C);
  let mt;
  if (h[13] !== onChange_2 || h[14] !== c || h[15] !== _ || h[16] !== de || h[17] !== O) mt = yt => {
    if (oe.current = !0, onChange_2?.([...yt]) === !1) {
      oe.current = !1;
      return;
    }
    j(yt), c(rd), de(ld), _(ad), O(ud);
  }, h[13] = onChange_2, h[14] = c, h[15] = _, h[16] = de, h[17] = O, h[18] = mt;else mt = h[18];
  let Me = mt,
    tn;
  if (h[19] !== I || h[20] !== Me || h[21] !== K || h[22] !== ue || h[23] !== onFocus_2 || h[24] !== options_2 || h[25] !== c || h[26] !== _ || h[27] !== de || h[28] !== O) tn = Re => {
    if (K && ue) {
      if (Re === "") {
        z("Enter some text, or Escape for the list.");
        return;
      }
      Me([...ue.stashed, K.value]);
      return;
    }
    let raw = Re.trim();
    if (raw === "") {
      Me(I);
      return;
    }
    let je = raw.split(/[\s,]+/).filter(Boolean);
    if (je.length === 0) {
      Me(I);
      return;
    }
    let Ke = new Set();
    let stashed = [];
    let He = null;
    for (const _e of je) {
      if (!/^\d+$/.test(_e)) {
        z(`Invalid selection "${_e}". Enter numbers between 1 and ${options_2.length}, comma- or space-separated.`), c(dd);
        return;
      }
      let index_2 = Number.parseInt(_e, 10);
      if (Ke.has(index_2)) {
        continue;
      }
      if (Ke.add(index_2), index_2 < 1 || index_2 > options_2.length) {
        z(`Invalid selection "${_e}". Enter numbers between 1 and ${options_2.length}, comma- or space-separated.`), c(cd);
        return;
      }
      let opt = options_2[index_2 - 1];
      if (opt.disabled) {
        z(`Option ${index_2} is disabled.`), c(pd);
        return;
      }
      if (opt.type === "input") {
        if (He) {
          z("Only one free-text option can be included per selection."), c(fd);
          return;
        }
        He = {
          index: index_2,
          opt: opt
        };
        continue;
      }
      stashed.push(opt.value);
    }
    if (He?.opt) {
      de(() => ({
        index: He.index,
        stashed: stashed,
        raw: raw
      })), _(md), O(hd);
      let Ge = He.opt.initialValue ?? "";
      c(() => Ge), He.opt.onChange(Ge), onFocus_2?.(He.opt.value);
      return;
    }
    Me(stashed);
  }, h[19] = I, h[20] = Me, h[21] = K, h[22] = ue, h[23] = onFocus_2, h[24] = options_2, h[25] = c, h[26] = _, h[27] = de, h[28] = O, h[29] = tn;else tn = h[29];
  let v = tn,
    ht;
  if (h[30] !== H || h[31] !== W || h[32] !== Me || h[33] !== E || h[34] !== K || h[35] !== ue || h[36] !== Ne || h[37] !== C || h[38] !== onCancel_2 || h[39] !== onFocus_2 || h[40] !== options_2 || h[41] !== refuseInput_2 || h[42] !== c || h[43] !== _ || h[44] !== de || h[45] !== O || h[46] !== v || h[47] !== L) ht = q => {
    if (C) {
      return;
    }
    if (q.key === "escape" && q.name === "escape") {
      if (q.preventDefault(), ue) {
        let {
          raw: raw_2
        } = ue;
        de(bd), c(() => raw_2);
        let vt = options_2.find(vd) ?? options_2[0];
        if (vt) onFocus_2?.(vt.value);
        return;
      }
      onCancel_2?.();
      return;
    }
    if (q.key === "return" && q.name === "return") {
      if (q.preventDefault(), re.current) {
        refuseInput_2?.(), re.current = !1, c(gd), z("Part of that entry arrived before the list was ready \u2014 enter your selection again.");
        return;
      }
      if (refuseInput_2?.()) {
        return;
      }
      if (oe.current) {
        return;
      }
      if (D && !K && H.current.length === 0 && L.current !== null) {
        let nn = [...L.current].sort(xd);
        if (nn.length === 0) Me([]);else v(nn.map(Id).join(" "));
        return;
      }
      v(H.current);
      return;
    }
    if (q.key === "backspace" || q.key === "delete") {
      q.preventDefault();
      let current_2 = H.current;
      let on = current_2.slice(0, -1);
      if (K && K.onChange(on) === !1) {
        return;
      }
      if (c(() => on), !K && current_2 !== on) O(yd);
      return;
    }
    if (D && !K && Ne.current === null && (q.name === "up" || q.name === "down")) {
      if (q.preventDefault(), refuseInput_2?.()) {
        return;
      }
      z(null), c(Sd), re.current = !1;
      let Ce = options_2.length;
      if (Ce === 0) {
        return;
      }
      let current_3 = E.current;
      let Pt = current_3 === null ? q.name === "down" ? 0 : Ce - 1 : (current_3 + (q.name === "down" ? 1 : -1) + Ce) % Ce;
      _(() => Pt);
      let Kn = options_2[Pt];
      if (Kn) onFocus_2?.(Kn.value);
      return;
    }
    if (D && !K && Ne.current === null && E.current !== null && L2(q.key) === " ") {
      if (q.preventDefault(), refuseInput_2?.()) {
        return;
      }
      let current_4 = E.current;
      let Hn = options_2[current_4];
      if (!Hn) {
        return;
      }
      if (Hn.disabled) {
        z(`Option ${current_4 + 1} is disabled.`);
        return;
      }
      z(null), O(Uo => {
        let Et = new Set(Uo ?? W());
        if (Et.has(current_4)) Et.delete(current_4);else Et.add(current_4);
        return Et;
      });
      return;
    }
    if (K) {
      if (q.key.length === 1 && !q.ctrl && !q.meta) {
        q.preventDefault();
        let lt = H.current + q.key;
        if (K.onChange(lt) === !1) {
          return;
        }
        c(() => lt);
      }
      return;
    }
    let xn = L2(lH(q.key)).replace("\uFF0C", ",").replace("\u3001", ",");
    if (/^[0-9, ]$/.test(xn)) {
      if (q.preventDefault(), re.current) {
        refuseInput_2?.();
        return;
      }
      if (refuseInput_2?.()) {
        re.current = !0;
        return;
      }
      z(null), c(At => At + xn), _(wd), O(Od);
    }
  }, h[30] = H, h[31] = W, h[32] = Me, h[33] = E, h[34] = K, h[35] = ue, h[36] = Ne, h[37] = C, h[38] = onCancel_2, h[39] = onFocus_2, h[40] = options_2, h[41] = refuseInput_2, h[42] = c, h[43] = _, h[44] = de, h[45] = O, h[46] = v, h[47] = L, h[48] = ht;else ht = h[48];
  let onKeyDown_2 = ht,
    sn;
  if (h[49] !== G || h[50] !== I || h[51] !== K || h[52] !== ue?.index || h[53] !== onCancel_2 || h[54] !== options_2.length || h[55] !== submitButtonText || h[56] !== x) sn = K ? `Enter text for option ${ue?.index} (${Jv(K.label)}), or Escape for the list: ${G}` : `Select with numbers [1-${options_2.length}] (comma- or space-separated for several)${D ? " or up / down arrow keys" : ""}. Then ${go([...(D ? ["Space to toggle"] : []), `Enter to ${submitButtonText ?? "submit"}`, ...(I.length > 0 && x === null ? ["bare Enter for defaults"] : []), ...(onCancel_2 ? ["Escape to cancel"] : [])])}: ${G}`, h[49] = G, h[50] = I, h[51] = K, h[52] = ue?.index, h[53] = onCancel_2, h[54] = options_2.length, h[55] = submitButtonText, h[56] = x, h[57] = sn;else sn = h[57];
  let children_6 = sn,
    column_2;
  if (h[58] !== children_6) column_2 = ie(children_6), h[58] = children_6, h[59] = column_2;else column_2 = h[59];
  const active_3 = !C && M === null;
  let In;
  if (h[60] !== column_2 || h[61] !== active_3) In = {
    line: 0,
    column: column_2,
    active: active_3,
    visible: !0
  }, h[60] = column_2, h[61] = active_3, h[62] = In;else In = h[62];
  let ref_4 = Yw(In),
    Nt;
  if (h[63] !== I) Nt = new Set(I), h[63] = I, h[64] = Nt;else Nt = h[64];
  let Lt = Nt,
    Ut;
  if (h[65] !== onKeyDown_2 || h[66] !== C) Ut = C ? {} : {
    tabIndex: 0,
    onKeyDown: onKeyDown_2
  }, h[65] = onKeyDown_2, h[66] = C, h[67] = Ut;else Ut = h[67];
  let rn;
  if (h[68] !== Lt || h[69] !== M || h[70] !== C || h[71] !== options_2 || h[72] !== x) {
    let Bt;
    if (h[74] !== Lt || h[75] !== M || h[76] !== C || h[77] !== x) Bt = (option_2, $o) => e(En, {
      index: $o + 1,
      option: option_2,
      selected: x ? x.has($o) : Lt.has(option_2.value),
      focused: M === $o && !C
    }, String(option_2.value)), h[74] = Lt, h[75] = M, h[76] = C, h[77] = x, h[78] = Bt;else Bt = h[78];
    rn = options_2.map(Bt);
    h[68] = Lt, h[69] = M, h[70] = C, h[71] = options_2, h[72] = x, h[73] = rn;
  } else rn = h[73];
  let Bt;
  if (h[79] !== children_5) Bt = children_5 && e(n, {
    children: children_5
  }), h[79] = children_5, h[80] = Bt;else Bt = h[80];
  let children_7;
  if (h[81] !== children_6) children_7 = e(n, {
    children: children_6
  }), h[81] = children_6, h[82] = children_7;else children_7 = h[82];
  let zn;
  if (h[83] !== ref_4 || h[84] !== children_7) zn = e(s, {
    ref: ref_4,
    children: children_7
  }), h[83] = ref_4, h[84] = children_7, h[85] = zn;else zn = h[85];
  let Zi;
  if (h[86] !== Ut || h[87] !== rn || h[88] !== Bt || h[89] !== zn) Zi = r(s, {
    ref: ref_5,
    flexDirection: "column",
    ...Ut,
    children: [rn, Bt, zn]
  }), h[86] = Ut, h[87] = rn, h[88] = Bt, h[89] = zn, h[90] = Zi;else Zi = h[90];
  return Zi;
}
function En(o) {
  let p = w(26),
    {
      index: index_3,
      option: option_3,
      selected: selected,
      focused: l,
      drawLabel: drawLabel_2
    } = o,
    f = drawLabel_2 === void 0 ? !1 : drawLabel_2,
    b;
  if (p[0] !== l) b = {
    line: 0,
    column: 0,
    active: l,
    visible: !0
  }, p[0] = l, p[1] = b;else b = p[1];
  let ref_6 = Yw(b),
    h;
  if (p[2] !== option_3.label) h = Jv(option_3.label), p[2] = option_3.label, p[3] = h;else h = p[3];
  let y = h,
    I = option_3.description ? ` \u2014 ${option_3.description}` : "";
  const C = `${y}${I}`;
  let G;
  if (p[4] !== C) G = ks(C), p[4] = C, p[5] = G;else G = p[5];
  let H = G;
  const c = option_3.disabled ? "(disabled)" : null,
    te = selected ? "(selected)" : null;
  let z;
  if (p[6] !== c || p[7] !== te) z = [c, te].filter(Boolean), p[6] = c, p[7] = te, p[8] = z;else z = p[8];
  let m = z.join(" ");
  if (f) {
    const D = m ? ` ${m}` : "";
    let M;
    if (p[9] !== index_3 || p[10] !== D) M = r(n, {
      children: [index_3, ".", D]
    }), p[9] = index_3, p[10] = D, p[11] = M;else M = p[11];
    let E;
    if (p[12] !== option_3.description) E = option_3.description && r(n, {
      children: ["\u2014 ", option_3.description]
    }), p[12] = option_3.description, p[13] = E;else E = p[13];
    let _;
    if (p[14] !== ref_6 || p[15] !== option_3.label || p[16] !== M || p[17] !== E) _ = r(s, {
      ref: ref_6,
      children: [M, option_3.label, E]
    }), p[14] = ref_6, p[15] = option_3.label, p[16] = M, p[17] = E, p[18] = _;else _ = p[18];
    return _;
  }
  const D = m ? `${m} ` : "";
  let children_8;
  if (p[19] !== H || p[20] !== index_3 || p[21] !== D) children_8 = r(n, {
    children: [index_3, ". ", D, H]
  }), p[19] = H, p[20] = index_3, p[21] = D, p[22] = children_8;else children_8 = p[22];
  let E;
  if (p[23] !== ref_6 || p[24] !== children_8) E = e(s, {
    ref: ref_6,
    children: children_8
  }), p[23] = ref_6, p[24] = children_8, p[25] = E;else E = p[25];
  return E;
}
function yvn(o) {
  let c = w(43),
    {
      confirmLabel: confirmLabel,
      cancelLabel: cancelLabel,
      onConfirm: onConfirm,
      onCancel: onCancel_3,
      refuseInput: refuseInput_3,
      openedAt: openedAt,
      windowMs: windowMs
    } = o,
    [b, a, h] = Jt(),
    [children_9, I] = g(null),
    ref_8 = T(null);
  Mf(ref_8, !0), vi("select", !0);
  let {
      refuse: refuse_2,
      refuseCharacter: refuseCharacter_2
    } = yi(openedAt, windowMs),
    te;
  if (c[0] !== refuseInput_3 || c[1] !== refuse_2) te = function z() {
    return (refuseInput_3?.() ?? !1) || refuse_2();
  }, c[0] = refuseInput_3, c[1] = refuse_2, c[2] = te;else te = c[2];
  let z = te,
    m;
  if (c[3] !== refuseInput_3 || c[4] !== refuseCharacter_2) m = function D() {
    return (refuseInput_3?.() ?? !1) || refuseCharacter_2();
  }, c[3] = refuseInput_3, c[4] = refuseCharacter_2, c[5] = m;else m = c[5];
  let D = m,
    M;
  if (c[6] !== onCancel_3 || c[7] !== onConfirm || c[8] !== z || c[9] !== h) M = E => {
    let _ = E.trim().toLowerCase();
    if ((_ === "y" || _ === "yes" || _ === "n" || _ === "no") && z()) {
      h(Cd);
      return;
    }
    if (_ === "y" || _ === "yes") {
      return onConfirm();
    }
    if (_ === "n" || _ === "no") {
      return onCancel_3();
    }
    I("Please answer y or n."), h(Td);
  }, c[6] = onCancel_3, c[7] = onConfirm, c[8] = z, c[9] = h, c[10] = M;else M = c[10];
  let x = M,
    L;
  if (c[11] !== a || c[12] !== onCancel_3 || c[13] !== z || c[14] !== D || c[15] !== h || c[16] !== x) L = O => {
    if (O.key === "escape" && O.name === "escape") {
      if (O.preventDefault(), z()) {
        return;
      }
      return onCancel_3();
    }
    if (O.key === "return" && O.name === "return") {
      return O.preventDefault(), x(a.current);
    }
    if (O.key === "backspace" || O.key === "delete") {
      O.preventDefault(), h(Dd);
      return;
    }
    if (O.key.length === 1 && !O.ctrl && !O.meta) {
      if (O.preventDefault(), D()) {
        return;
      }
      I(null), h(he => he + O.key);
    }
  }, c[11] = a, c[12] = onCancel_3, c[13] = z, c[14] = D, c[15] = h, c[16] = x, c[17] = L;else L = c[17];
  let onKeyDown_3 = L,
    children_10 = `Enter y/n: ${b}`,
    column_3;
  if (c[18] !== children_10) column_3 = ie(children_10), c[18] = children_10, c[19] = column_3;else column_3 = c[19];
  let ne;
  if (c[20] !== column_3) ne = {
    line: 0,
    column: column_3,
    active: !0,
    visible: !0
  }, c[20] = column_3, c[21] = ne;else ne = c[21];
  let ref_7 = Yw(ne),
    Te;
  if (c[22] !== confirmLabel) Te = Jv(confirmLabel), c[22] = confirmLabel, c[23] = Te;else Te = c[23];
  let W;
  if (c[24] !== Te) W = r(n, {
    children: ["y. ", Te]
  }), c[24] = Te, c[25] = W;else W = c[25];
  let ge;
  if (c[26] !== cancelLabel) ge = Jv(cancelLabel), c[26] = cancelLabel, c[27] = ge;else ge = c[27];
  let j;
  if (c[28] !== ge) j = r(n, {
    children: ["n. ", ge]
  }), c[28] = ge, c[29] = j;else j = c[29];
  let oe;
  if (c[30] !== children_9) oe = children_9 && e(n, {
    children: children_9
  }), c[30] = children_9, c[31] = oe;else oe = c[31];
  let children_11;
  if (c[32] !== children_10) children_11 = e(n, {
    children: children_10
  }), c[32] = children_10, c[33] = children_11;else children_11 = c[33];
  let Se;
  if (c[34] !== ref_7 || c[35] !== children_11) Se = e(s, {
    ref: ref_7,
    children: children_11
  }), c[34] = ref_7, c[35] = children_11, c[36] = Se;else Se = c[36];
  let Oe;
  if (c[37] !== onKeyDown_3 || c[38] !== j || c[39] !== oe || c[40] !== Se || c[41] !== W) Oe = r(s, {
    ref: ref_8,
    flexDirection: "column",
    tabIndex: 0,
    onKeyDown: onKeyDown_3,
    children: [W, j, oe, Se]
  }), c[37] = onKeyDown_3, c[38] = j, c[39] = oe, c[40] = Se, c[41] = W, c[42] = Oe;else Oe = c[42];
  return Oe;
}
N();
function Ii(o) {
  let [t] = g(() => ({
      value: Fd(o) ? o() : o
    })),
    [i, u] = g(t.value),
    l = se(f => {
      let p = Vd(f) ? f(t.value) : f;
      if (Object.is(p, t.value)) return;
      t.value = p, u(() => p);
    }, [t]),
    d = se(() => t.value, [t]);
  return [i, l, d];
}
function Fd(o) {
  return typeof o === "function";
}
function Vd(o) {
  return typeof o === "function";
}
N();
N();
function Io(o) {
  let b = w(15),
    {
      imageId: imageId,
      backgroundColor: backgroundColor_2,
      isSelected: isSelected_2
    } = o,
    l = isSelected_2 === void 0 ? !1 : isSelected_2,
    f = ys(d => d.storedImagePaths.get(imageId) ?? null) ?? null,
    children_12 = `[Image #${imageId}]`,
    a;
  if (b[0] !== f) a = f && Ny() ? FM(f) : null, b[0] = f, b[1] = a;else a = b[1];
  let url = a;
  if (url) {
    let fallback, children_13;
    if (b[2] !== backgroundColor_2 || b[3] !== children_12 || b[4] !== l) fallback = e(n, {
      backgroundColor: backgroundColor_2,
      inverse: l,
      children: children_12
    }), children_13 = e(n, {
      backgroundColor: backgroundColor_2,
      inverse: l,
      bold: l,
      children: children_12
    }), b[2] = backgroundColor_2, b[3] = children_12, b[4] = l, b[5] = fallback, b[6] = children_13;else fallback = b[5], children_13 = b[6];
    let C;
    if (b[7] !== url || b[8] !== fallback || b[9] !== children_13) C = e(bt, {
      url: url,
      fallback: fallback,
      children: children_13
    }), b[7] = url, b[8] = fallback, b[9] = children_13, b[10] = C;else C = b[10];
    return C;
  }
  let y;
  if (b[11] !== backgroundColor_2 || b[12] !== children_12 || b[13] !== l) y = e(n, {
    backgroundColor: backgroundColor_2,
    inverse: l,
    children: children_12
  }), b[11] = backgroundColor_2, b[12] = children_12, b[13] = l, b[14] = y;else y = b[14];
  return y;
}
function S5(o) {
  let h = w(10),
    {
      isFocused: isFocused_3,
      isSelected: isSelected_3,
      children: children_14,
      description: description,
      shouldShowDownArrow: d,
      shouldShowUpArrow: f,
      declareCursor: declareCursor_2,
      onClick: onClick_3,
      hoverStyle: hoverStyle_2
    } = o,
    y;
  if (h[0] !== children_14 || h[1] !== declareCursor_2 || h[2] !== description || h[3] !== hoverStyle_2 || h[4] !== isFocused_3 || h[5] !== isSelected_3 || h[6] !== onClick_3 || h[7] !== d || h[8] !== f) y = e(tw, {
    isFocused: isFocused_3,
    isSelected: isSelected_3,
    description: description,
    showScrollDown: d,
    showScrollUp: f,
    styled: !1,
    declareCursor: declareCursor_2,
    onClick: onClick_3,
    hoverStyle: hoverStyle_2,
    children: children_14
  }), h[0] = children_14, h[1] = declareCursor_2, h[2] = description, h[3] = hoverStyle_2, h[4] = isFocused_3, h[5] = isSelected_3, h[6] = onClick_3, h[7] = d, h[8] = f, h[9] = y;else y = h[9];
  return y;
}
function nc(Ut) {
  return Ut.type === "image";
}
function Er(o, t, i, u) {
  let l = 2 + t + 2;
  return Math.max(1, o - l - i - u);
}
function Aue(o) {
  let W = w(104),
    {
      option: option_4,
      isFocused: isFocused_4,
      isSelected: isSelected_4,
      shouldShowDownArrow: shouldShowDownArrow,
      shouldShowUpArrow: shouldShowUpArrow,
      maxIndexWidth: maxIndexWidth,
      index: index_4,
      hideIndex: hideIndex,
      inputValue: a,
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
    } = o,
    A = hideIndex === void 0 ? !1 : hideIndex,
    st = showLabel === void 0 ? !1 : showLabel,
    ne = resetCursorOnUpdate === void 0 ? !1 : resetCursorOnUpdate,
    B = selectedImageIndex === void 0 ? 0 : selectedImageIndex,
    Te = extraChromeWidth === void 0 ? 0 : extraChromeWidth,
    ge;
  if (W[0] !== pastedContents) ge = pastedContents ? Object.values(pastedContents).filter(nc) : [], W[0] = pastedContents, W[1] = ge;else ge = W[1];
  let j = ge,
    oe = st || option_4.showLabelWithValue === !0,
    [cursorOffset, onChangeCursorOffset] = g(a.length),
    Oe = T(!1),
    P;
  if (W[2] !== a.length || W[3] !== isFocused_4 || W[4] !== ne) P = () => {
    if (ne && isFocused_4) {
      if (Oe.current) Oe.current = !1;else onChangeCursorOffset(a.length);
    }
  }, W[2] = a.length, W[3] = isFocused_4, W[4] = ne, W[5] = P;else P = W[5];
  let ue;
  if (W[6] !== a || W[7] !== isFocused_4 || W[8] !== ne) ue = [ne, isFocused_4, a], W[6] = a, W[7] = isFocused_4, W[8] = ne, W[9] = ue;else ue = W[9];
  R(P, ue);
  let Ne;
  if (W[10] !== a || W[11] !== onInputChange || W[12] !== onOpenEditor) Ne = () => {
    onOpenEditor?.(a, onInputChange);
  }, W[10] = a, W[11] = onInputChange, W[12] = onOpenEditor, W[13] = Ne;else Ne = W[13];
  const isActive = isFocused_4 && !!onOpenEditor;
  let K;
  if (W[14] !== isActive) K = {
    context: "Chat",
    isActive: isActive
  }, W[14] = isActive, W[15] = K;else K = W[15];
  ze("chat:externalEditor", Ne, K);
  let rt;
  if (W[16] !== canPasteImage || W[17] !== onImagePaste) rt = () => {
    if (!onImagePaste) {
      return;
    }
    if (canPasteImage?.() === !1) {
      return;
    }
    E7(Cl(it())).then(mt => {
      if (mt) onImagePaste(mt.base64, {
        mediaType: mt.mediaType,
        dimensions: mt.dimensions
      });
    });
  }, W[16] = canPasteImage, W[17] = onImagePaste, W[18] = rt;else rt = W[18];
  const isActive_2 = isFocused_4 && !!onImagePaste;
  let Me;
  if (W[19] !== isActive_2) Me = {
    context: "Chat",
    isActive: isActive_2
  }, W[19] = isActive_2, W[20] = Me;else Me = W[20];
  ze("chat:imagePaste", rt, Me);
  let tn;
  if (W[21] !== j || W[22] !== onRemoveImage) tn = () => {
    if (j.length > 0 && onRemoveImage) onRemoveImage(j.at(-1).id);
  }, W[21] = j, W[22] = onRemoveImage, W[23] = tn;else tn = W[23];
  const isActive_3 = isFocused_4 && !imagesSelected && a === "" && j.length > 0 && !!onRemoveImage;
  let St;
  if (W[24] !== isActive_3) St = {
    context: "Attachments",
    isActive: isActive_3
  }, W[24] = isActive_3, W[25] = St;else St = W[25];
  ze("attachments:remove", tn, St);
  let je, Ke;
  if (W[26] !== j.length || W[27] !== onSelectedImageIndexChange || W[28] !== B) je = () => {
    if (j.length > 1) onSelectedImageIndexChange?.((B + 1) % j.length);
  }, Ke = () => {
    if (j.length > 1) onSelectedImageIndexChange?.((B - 1 + j.length) % j.length);
  }, W[26] = j.length, W[27] = onSelectedImageIndexChange, W[28] = B, W[29] = je, W[30] = Ke;else je = W[29], Ke = W[30];
  let ut;
  if (W[31] !== j || W[32] !== onImagesSelectedChange || W[33] !== onRemoveImage || W[34] !== onSelectedImageIndexChange || W[35] !== B) ut = () => {
    let He = j[B];
    if (He && onRemoveImage) {
      if (onRemoveImage(He.id) === !1) {
        return;
      }
      if (j.length <= 1) onImagesSelectedChange?.(!1);else onSelectedImageIndexChange?.(Math.min(B, j.length - 2));
    }
  }, W[31] = j, W[32] = onImagesSelectedChange, W[33] = onRemoveImage, W[34] = onSelectedImageIndexChange, W[35] = B, W[36] = ut;else ut = W[36];
  let _e;
  if (W[37] !== onImagesSelectedChange) _e = () => {
    onImagesSelectedChange?.(!1);
  }, W[37] = onImagesSelectedChange, W[38] = _e;else _e = W[38];
  let De;
  if (W[39] !== je || W[40] !== Ke || W[41] !== ut || W[42] !== _e) De = {
    "attachments:next": je,
    "attachments:previous": Ke,
    "attachments:remove": ut,
    "attachments:exit": _e
  }, W[39] = je, W[40] = Ke, W[41] = ut, W[42] = _e, W[43] = De;else De = W[43];
  const isActive_4 = isFocused_4 && !!imagesSelected;
  let Ge;
  if (W[44] !== isActive_4) Ge = {
    context: "Attachments",
    isActive: isActive_4
  }, W[44] = isActive_4, W[45] = Ge;else Ge = W[45];
  Wt(De, Ge);
  let v, ht;
  if (W[46] !== imagesSelected || W[47] !== isFocused_4 || W[48] !== onImagesSelectedChange) v = () => {
    if (!isFocused_4 && imagesSelected) onImagesSelectedChange?.(!1);
  }, ht = [isFocused_4, imagesSelected, onImagesSelectedChange], W[46] = imagesSelected, W[47] = isFocused_4, W[48] = onImagesSelectedChange, W[49] = v, W[50] = ht;else v = W[49], ht = W[50];
  R(v, ht);
  let paddingLeft = layout === "expanded" ? maxIndexWidth + 3 : maxIndexWidth + 4,
    {
      columns: columns
    } = As(ve()),
    vt = oe && typeof option_4.label === "string" ? ie(option_4.label) + ie(option_4.labelValueSeparator ?? ", ") : 0,
    nn;
  if (W[51] !== columns || W[52] !== Te || W[53] !== vt || W[54] !== maxIndexWidth) nn = Er(columns, maxIndexWidth, vt, Te), W[51] = columns, W[52] = Te, W[53] = vt, W[54] = maxIndexWidth, W[55] = nn;else nn = W[55];
  let columns_2 = nn;
  const flexShrink = layout === "compact" ? 0 : void 0;
  let Ce;
  if (W[56] !== A || W[57] !== index_4 || W[58] !== maxIndexWidth) Ce = !A && e(s, {
    flexShrink: 0,
    children: e(n, {
      dimColor: !0,
      children: `${index_4}.`.padEnd(maxIndexWidth + 2)
    })
  }), W[56] = A, W[57] = index_4, W[58] = maxIndexWidth, W[59] = Ce;else Ce = W[59];
  let wt;
  if (W[60] !== cursorOffset || W[61] !== imagesSelected || W[62] !== a || W[63] !== isFocused_4 || W[64] !== onExit || W[65] !== onImagePaste || W[66] !== onInputChange || W[67] !== onSubmit_2 || W[68] !== option_4 || W[69] !== oe || W[70] !== columns_2) wt = oe ? isFocused_4 ? r(V, {
    children: [r(n, {
      color: "suggestion",
      children: [option_4.label, option_4.labelValueSeparator ?? ", "]
    }), e(Qn, {
      value: a,
      onChange: Pt => {
        if (option_4.onChange(Pt) === !1) {
          return;
        }
        Oe.current = !0, onInputChange(Pt);
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
      onImagePaste: onImagePaste,
      onPaste: Kn => {
        let Ot = a.slice(0, cursorOffset);
        let Hn = a.slice(cursorOffset);
        let Uo = Ot + Kn + Hn;
        if (option_4.onChange(Uo) === !1) {
          return;
        }
        Oe.current = !0, onInputChange(Uo), onChangeCursorOffset(Ot.length + Kn.length);
      }
    })]
  }) : r(n, {
    children: [option_4.label, a ? option_4.labelValueSeparator ?? ", " : null, a || null]
  }) : isFocused_4 ? e(Qn, {
    value: a,
    onChange: Et => {
      if (option_4.onChange(Et) === !1) {
        return;
      }
      Oe.current = !0, onInputChange(Et);
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
    onImagePaste: onImagePaste,
    onPaste: lt => {
      let xn = a.slice(0, cursorOffset);
      let At = a.slice(cursorOffset);
      let qe = xn + lt + At;
      if (option_4.onChange(qe) === !1) {
        return;
      }
      Oe.current = !0, onInputChange(qe), onChangeCursorOffset(xn.length + lt.length);
    }
  }) : e(n, {
    color: a ? void 0 : "inactive",
    children: a || option_4.placeholder || option_4.label
  }), W[60] = cursorOffset, W[61] = imagesSelected, W[62] = a, W[63] = isFocused_4, W[64] = onExit, W[65] = onImagePaste, W[66] = onInputChange, W[67] = onSubmit_2, W[68] = option_4, W[69] = oe, W[70] = columns_2, W[71] = wt;else wt = W[71];
  let children_16;
  if (W[72] !== children_15 || W[73] !== flexShrink || W[74] !== Ce || W[75] !== wt) children_16 = r(s, {
    flexDirection: "row",
    flexShrink: flexShrink,
    children: [Ce, children_15, wt]
  }), W[72] = children_15, W[73] = flexShrink, W[74] = Ce, W[75] = wt, W[76] = children_16;else children_16 = W[76];
  let Y;
  if (W[77] !== hoverStyle_3 || W[78] !== isFocused_4 || W[79] !== isSelected_4 || W[80] !== onClick_4 || W[81] !== shouldShowDownArrow || W[82] !== shouldShowUpArrow || W[83] !== children_16) Y = e(S5, {
    isFocused: isFocused_4,
    isSelected: isSelected_4,
    shouldShowDownArrow: shouldShowDownArrow,
    shouldShowUpArrow: shouldShowUpArrow,
    declareCursor: !1,
    onClick: onClick_4,
    hoverStyle: hoverStyle_3,
    children: children_16
  }), W[77] = hoverStyle_3, W[78] = isFocused_4, W[79] = isSelected_4, W[80] = onClick_4, W[81] = shouldShowDownArrow, W[82] = shouldShowUpArrow, W[83] = children_16, W[84] = Y;else Y = W[84];
  let Ct;
  if (W[85] !== paddingLeft || W[86] !== isFocused_4 || W[87] !== isSelected_4 || W[88] !== option_4.description || W[89] !== option_4.dimDescription) Ct = option_4.description && e(s, {
    paddingLeft: paddingLeft,
    children: e(n, {
      dimColor: option_4.dimDescription !== !1,
      color: isSelected_4 ? "success" : isFocused_4 ? "suggestion" : void 0,
      children: option_4.description
    })
  }), W[85] = paddingLeft, W[86] = isFocused_4, W[87] = isSelected_4, W[88] = option_4.description, W[89] = option_4.dimDescription, W[90] = Ct;else Ct = W[90];
  let Tt;
  if (W[91] !== paddingLeft || W[92] !== j || W[93] !== imagesSelected || W[94] !== isFocused_4 || W[95] !== B) Tt = j.length > 0 && r(s, {
    flexDirection: "row",
    gap: 1,
    paddingLeft: paddingLeft,
    children: [j.map((item, index) => e(Io, {
      imageId: item.id,
      isSelected: !!imagesSelected && index === B
    }, item.id)), e(s, {
      flexGrow: 1,
      justifyContent: "flex-start",
      flexDirection: "row",
      children: e(n, {
        dimColor: !0,
        children: imagesSelected ? r(ye, {
          children: [j.length > 1 && r(V, {
            children: [e(Xe, {
              action: "attachments:next",
              context: "Attachments",
              fallback: "\u2192",
              description: "next"
            }), e(Xe, {
              action: "attachments:previous",
              context: "Attachments",
              fallback: "\u2190",
              description: "prev"
            })]
          }), e(Xe, {
            action: "attachments:remove",
            context: "Attachments",
            fallback: "backspace",
            description: "remove"
          }), e(Xe, {
            action: "attachments:exit",
            context: "Attachments",
            fallback: "esc",
            description: "cancel"
          })]
        }) : isFocused_4 ? e(F, {
          chord: "down",
          action: "select",
          parens: !0
        }) : null
      })
    })]
  }), W[91] = paddingLeft, W[92] = j, W[93] = imagesSelected, W[94] = isFocused_4, W[95] = B, W[96] = Tt;else Tt = W[96];
  let Nt;
  if (W[97] !== layout) Nt = layout === "expanded" && e(n, {
    children: " "
  }), W[97] = layout, W[98] = Nt;else Nt = W[98];
  let Lt;
  if (W[99] !== Y || W[100] !== Ct || W[101] !== Tt || W[102] !== Nt) Lt = r(s, {
    flexDirection: "column",
    flexShrink: 0,
    children: [Y, Ct, Tt, Nt]
  }), W[99] = Y, W[100] = Ct, W[101] = Tt, W[102] = Nt, W[103] = Lt;else Lt = W[103];
  return Lt;
}
N();
var Ti = ({
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
  hasInkFocus = !0,
  keysDeferred: keysDeferred
}) => {
  let {
    focusDirection: focusDirection
  } = Pue();
  vi("select", !!state.onCancel);
  let H = X(() => options_3.find(item => item.value === state.focusedValue)?.type === "input", [options_3, state.focusedValue]),
    c = X(() => {
      let m = {};
      if (!H) m["select:next"] = () => {
        let D = options_3.at(-1);
        if (D && state.getFocusedValue() === D.value) {
          if (onDownFromLastItem) {
            onDownFromLastItem();
            return;
          }
          if (focusDirection("down")) return;
        }
        state.focusNextOption();
      }, m["select:previous"] = () => {
        let D = options_3[0];
        if (D && state.getFocusedValue() === D.value) {
          if (onUpFromFirstItem) {
            onUpFromFirstItem();
            return;
          }
          if (focusDirection("up")) return;
        }
        state.focusPreviousOption();
      }, m["select:first"] = () => {
        state.focusOption(options_3[0]?.value);
      }, m["select:last"] = () => {
        state.focusOption(options_3.at(-1)?.value);
      }, m["select:accept"] = () => {
        if (disableSelection_2 === !0) return;
        let D = state.getFocusedValue();
        if (D === void 0) return;
        let M = options_3.find(item => item.value === D);
        if (M?.disabled === !0) return;
        if (M?.type === "input") return;
        state.selectFocusedOption?.(), state.onChange?.(D);
      };
      if (state.onCancel) m["select:cancel"] = () => {
        state.onCancel();
      };
      return m;
    }, [options_3, state, onDownFromLastItem, onUpFromFirstItem, H, disableSelection_2, focusDirection]),
    te = X(() => {
      if (!keysDeferred) return c;
      return io(c, m => () => {
        if (keysDeferred()) return !1;
        m();
      });
    }, [c, keysDeferred]);
  return Wt(te, {
    context: "Select",
    isActive: (!isDisabled_3 || keysDeferred !== void 0) && hasInkFocus
  }), {
    handleKeyDown: m => {
      if (isDisabled_3) return;
      let D = lH(m.key),
        M = state.getFocusedValue(),
        E = options_3.find(item => item.value === M),
        _ = E?.type === "input";
      if (m.key === "tab") {
        if (m.preventDefault(), onInputModeToggle && M !== void 0) onInputModeToggle(M);
        return;
      }
      if (_) {
        if (imagesSelected_2) {
          if (m.key === "up") m.preventDefault(), onExitImageSelection?.();
          return;
        }
        if (m.key === "down" && onEnterImageSelection?.()) {
          m.stopImmediatePropagation();
          return;
        }
        if (m.key === "down" || m.ctrl && m.key === "n") {
          if (onDownFromLastItem) {
            let x = options_3.at(-1);
            if (x && M === x.value) {
              onDownFromLastItem(), m.stopImmediatePropagation();
              return;
            }
          }
          state.focusNextOption(), m.stopImmediatePropagation();
          return;
        }
        if (m.key === "up" || m.ctrl && m.key === "p") {
          if (onUpFromFirstItem) {
            let x = options_3[0];
            if (x && M === x.value) {
              onUpFromFirstItem(), m.stopImmediatePropagation();
              return;
            }
          }
          state.focusPreviousOption(), m.stopImmediatePropagation();
          return;
        }
        return;
      }
      if (H) {
        if (m.key === "down" || m.ctrl && m.key === "n") {
          if (onDownFromLastItem) {
            let x = options_3.at(-1);
            if (x && M === x.value) {
              onDownFromLastItem(), m.stopImmediatePropagation();
              return;
            }
          }
          state.focusNextOption(), m.stopImmediatePropagation();
          return;
        }
        if (m.key === "up" || m.ctrl && m.key === "p") {
          if (onUpFromFirstItem) {
            let x = options_3[0];
            if (x && M === x.value) {
              onUpFromFirstItem(), m.stopImmediatePropagation();
              return;
            }
          }
          state.focusPreviousOption(), m.stopImmediatePropagation();
          return;
        }
      }
      if (m.key === "pagedown") {
        m.preventDefault(), state.focusNextPage();
        return;
      }
      if (m.key === "pageup") {
        m.preventDefault(), state.focusPreviousPage();
        return;
      }
      if (disableSelection_2 !== !0) {
        if (isMultiSelect && L2(m.key) === " " && M !== void 0) {
          if (E?.disabled !== !0) m.preventDefault(), state.selectFocusedOption?.(), state.onChange?.(M);
          return;
        }
        if (disableSelection_2 !== "numeric" && /^[0-9]$/.test(D)) {
          m.preventDefault();
          let x = parseInt(D) - 1;
          if (x >= 0 && x < state.options.length) {
            let L = state.options[x];
            if (L.disabled === !0) return;
            if (L.type === "input") {
              if ((inputValues?.get(L.value) ?? "").trim()) {
                state.onChange?.(L.value);
                return;
              }
              if (L.allowEmptySubmitToCancel) {
                state.onChange?.(L.value);
                return;
              }
              state.focusOption(L.value);
              return;
            }
            state.onChange?.(L.value);
            return;
          }
        }
      }
    }
  };
};
N();
N();
import { isDeepStrictEqual as oc } from "util";
class Oo extends Map {
  first;
  last;
  constructor(o) {
    let t = [],
      i,
      u,
      previous,
      index_5 = 0;
    for (let f of o) {
      let p = {
        value: f.value,
        previous: previous,
        next: void 0,
        index: index_5
      };
      if (previous) previous.next = p;
      i ||= p, u = p, t.push([f.value, p]), index_5++, previous = p;
    }
    super(t);
    this.first = i, this.last = u;
  }
}
var ic = (o, t) => {
    switch (t.type) {
      case "focus-next-option":
        {
          if (o.focusedValue === void 0) return o;
          let i = o.optionMap.get(o.focusedValue);
          if (!i) return o;
          let u = i.next || o.optionMap.first;
          if (!u) return o;
          if (!i.next && u === o.optionMap.first) return {
            ...o,
            focusedValue: u.value,
            visibleFromIndex: 0,
            visibleToIndex: o.visibleOptionCount
          };
          if (!(u.index >= o.visibleToIndex)) return {
            ...o,
            focusedValue: u.value
          };
          let visibleToIndex = Math.min(o.optionMap.size, o.visibleToIndex + 1),
            visibleFromIndex = visibleToIndex - o.visibleOptionCount;
          return {
            ...o,
            focusedValue: u.value,
            visibleFromIndex: visibleFromIndex,
            visibleToIndex: visibleToIndex
          };
        }
      case "focus-previous-option":
        {
          if (o.focusedValue === void 0) return o;
          let i = o.optionMap.get(o.focusedValue);
          if (!i) return o;
          let u = i.previous || o.optionMap.last;
          if (!u) return o;
          if (!i.previous && u === o.optionMap.last) {
            let visibleToIndex_2 = o.optionMap.size,
              visibleFromIndex_2 = Math.max(0, visibleToIndex_2 - o.visibleOptionCount);
            return {
              ...o,
              focusedValue: u.value,
              visibleFromIndex: visibleFromIndex_2,
              visibleToIndex: visibleToIndex_2
            };
          }
          if (!(u.index <= o.visibleFromIndex)) return {
            ...o,
            focusedValue: u.value
          };
          let visibleFromIndex_3 = Math.max(0, o.visibleFromIndex - 1),
            visibleToIndex_3 = visibleFromIndex_3 + o.visibleOptionCount;
          return {
            ...o,
            focusedValue: u.value,
            visibleFromIndex: visibleFromIndex_3,
            visibleToIndex: visibleToIndex_3
          };
        }
      case "focus-next-page":
        {
          if (o.focusedValue === void 0) return o;
          let i = o.optionMap.get(o.focusedValue);
          if (!i) return o;
          let u = Math.min(o.optionMap.size - 1, i.index + o.visibleOptionCount),
            first = o.optionMap.first;
          while (first && first.index < u) if (first.next) first = first.next;else break;
          if (!first) return o;
          let visibleToIndex_4 = Math.min(o.optionMap.size, first.index + 1),
            visibleFromIndex_4 = Math.max(0, visibleToIndex_4 - o.visibleOptionCount);
          return {
            ...o,
            focusedValue: first.value,
            visibleFromIndex: visibleFromIndex_4,
            visibleToIndex: visibleToIndex_4
          };
        }
      case "focus-previous-page":
        {
          if (o.focusedValue === void 0) return o;
          let i = o.optionMap.get(o.focusedValue);
          if (!i) return o;
          let u = Math.max(0, i.index - o.visibleOptionCount),
            first_2 = o.optionMap.first;
          while (first_2 && first_2.index < u) if (first_2.next) first_2 = first_2.next;else break;
          if (!first_2) return o;
          let visibleFromIndex_5 = Math.max(0, first_2.index),
            visibleToIndex_5 = Math.min(o.optionMap.size, visibleFromIndex_5 + o.visibleOptionCount);
          return {
            ...o,
            focusedValue: first_2.value,
            visibleFromIndex: visibleFromIndex_5,
            visibleToIndex: visibleToIndex_5
          };
        }
      case "reset":
        return t.state;
      case "scroll-viewport":
        {
          let visibleFromIndex_6 = Math.min(Math.max(0, o.optionMap.size - o.visibleOptionCount), Math.max(0, o.visibleFromIndex + t.delta));
          if (visibleFromIndex_6 === o.visibleFromIndex) return o;
          let visibleToIndex_6 = Math.min(o.optionMap.size, visibleFromIndex_6 + o.visibleOptionCount),
            l = o.focusedValue === void 0 ? void 0 : o.optionMap.get(o.focusedValue);
          while (l?.next && l.index < visibleFromIndex_6) l = l.next;
          while (l?.previous && l.index >= visibleToIndex_6) l = l.previous;
          return {
            ...o,
            focusedValue: l?.value,
            visibleFromIndex: visibleFromIndex_6,
            visibleToIndex: visibleToIndex_6
          };
        }
      case "set-focus":
        {
          if (o.focusedValue === t.value) return o;
          let i = o.optionMap.get(t.value);
          if (!i) return o;
          if (i.index >= o.visibleFromIndex && i.index < o.visibleToIndex) return {
            ...o,
            focusedValue: t.value
          };
          let visibleFromIndex_7, visibleToIndex_7;
          if (i.index < o.visibleFromIndex) visibleFromIndex_7 = i.index, visibleToIndex_7 = Math.min(o.optionMap.size, visibleFromIndex_7 + o.visibleOptionCount);else visibleToIndex_7 = Math.min(o.optionMap.size, i.index + 1), visibleFromIndex_7 = Math.max(0, visibleToIndex_7 - o.visibleOptionCount);
          return {
            ...o,
            focusedValue: t.value,
            visibleFromIndex: visibleFromIndex_7,
            visibleToIndex: visibleToIndex_7
          };
        }
    }
  },
  rl = ({
    visibleOptionCount: visibleOptionCount,
    options: options_4,
    initialFocusValue: initialFocusValue,
    currentViewport: currentViewport
  }) => {
    let visibleOptionCount_2 = typeof visibleOptionCount === "number" ? Math.min(visibleOptionCount, options_4.length) : options_4.length,
      optionMap = new Oo(options_4),
      f = initialFocusValue !== void 0 && optionMap.get(initialFocusValue),
      focusedValue = f ? initialFocusValue : optionMap.first?.value,
      visibleFromIndex_8 = 0,
      visibleToIndex_8 = visibleOptionCount_2;
    if (f) {
      let index_6 = f.index;
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
function _vn({
  visibleOptionCount: visibleOptionCount_3 = 5,
  options: options_5,
  onFocus: onFocus_3,
  focusValue: u
}) {
  let [l, d, f] = Ii(() => rl({
      visibleOptionCount: visibleOptionCount_3,
      options: options_5,
      initialFocusValue: u
    })),
    p = se(O => {
      d(he => ic(he, O));
    }, [d]),
    b = Gr(O => onFocus_3?.(O)),
    a = T(void 0),
    [h, y] = g(options_5),
    [I, C] = g(visibleOptionCount_3),
    G = options_5 !== h && !oc(options_5, h),
    H = visibleOptionCount_3 !== I;
  if (G || H) {
    let O = f();
    if (p({
      type: "reset",
      state: rl({
        visibleOptionCount: visibleOptionCount_3,
        options: options_5,
        initialFocusValue: G ? u ?? O.focusedValue : O.focusedValue ?? u,
        currentViewport: {
          visibleFromIndex: O.visibleFromIndex,
          visibleToIndex: O.visibleToIndex
        }
      })
    }), G) y(options_5);
    if (H) C(visibleOptionCount_3);
  }
  let c = se(O => {
      p(O);
      let he = Di(f().focusedValue, options_5);
      if (he !== void 0 && he !== a.current) a.current = he, onFocus_3?.(he);
    }, [p, f, options_5, onFocus_3]),
    focusNextOption = se(() => {
      c({
        type: "focus-next-option"
      });
    }, [c]),
    focusPreviousOption = se(() => {
      c({
        type: "focus-previous-option"
      });
    }, [c]),
    focusNextPage = se(() => {
      c({
        type: "focus-next-page"
      });
    }, [c]),
    focusPreviousPage = se(() => {
      c({
        type: "focus-previous-page"
      });
    }, [c]),
    scrollViewport = se(delta => {
      let visibleFromIndex_9 = f().visibleFromIndex;
      return c({
        type: "scroll-viewport",
        delta: delta
      }), f().visibleFromIndex !== visibleFromIndex_9;
    }, [c, f]),
    focusOption = se(value_2 => {
      if (value_2 !== void 0) c({
        type: "set-focus",
        value: value_2
      });
    }, [c]),
    visibleOptions = X(() => options_5.map((item, index_7) => ({
      ...item,
      index: index_7
    })).slice(l.visibleFromIndex, l.visibleToIndex), [options_5, l.visibleFromIndex, l.visibleToIndex]),
    focusedValue_2 = X(() => Di(l.focusedValue, options_5), [l.focusedValue, options_5]),
    getFocusedValue = se(() => Di(f().focusedValue, options_5), [f, options_5]);
  return R(() => {
    if (focusedValue_2 === void 0) {
      a.current = void 0;
      return;
    }
    if (focusedValue_2 !== a.current) a.current = focusedValue_2, b(focusedValue_2);
  }, [focusedValue_2]), R(() => {
    if (u !== void 0) p({
      type: "set-focus",
      value: u
    });
  }, [u, p]), {
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
function Di(o, t) {
  if (o === void 0) return;
  if (t.some(item => item.value === o)) return o;
  return t[0]?.value;
}
function Fi({
  visibleOptionCount: visibleOptionCount_4 = 5,
  options: options_6,
  defaultValue: defaultValue_3,
  selectedValue: selectedValue,
  onChange: onChange_3,
  onCancel: onCancel_4,
  onFocus: onFocus_4,
  focusValue: focusValue
}) {
  let [b, a] = g(defaultValue_3),
    h = _vn({
      visibleOptionCount: visibleOptionCount_4,
      options: options_6,
      onFocus: onFocus_4,
      focusValue: focusValue
    }),
    {
      getFocusedValue: getFocusedValue_2
    } = h,
    selectFocusedOption = se(() => {
      a(getFocusedValue_2());
    }, [getFocusedValue_2]);
  return {
    ...h,
    value: selectedValue !== void 0 ? selectedValue : b,
    selectFocusedOption: selectFocusedOption,
    onChange: onChange_3,
    onCancel: onCancel_4
  };
}
N();
function t_t({
  isDisabled: isDisabled_4,
  visibleFromIndex: visibleFromIndex_10,
  visibleToIndex: visibleToIndex_9,
  optionCount: optionCount,
  scrollViewport: scrollViewport_2,
  shouldDropWheel: shouldDropWheel
}) {
  let ref_9 = T(null);
  if (isDisabled_4 || visibleToIndex_9 - visibleFromIndex_10 >= optionCount) return {
    ref: ref_9,
    onWheel: void 0
  };
  return {
    ref: ref_9,
    onWheel: b => {
      if (b.deltaY === 0 || shouldDropWheel()) return;
      let current_5 = ref_9.current;
      if (current_5 !== null && b.col !== void 0 && b.row !== void 0 && v5(current_5, b.col, b.row) === null) return;
      if (scrollViewport_2(b.deltaY > 0 ? 1 : -1)) b.stopImmediatePropagation();
    }
  };
}
function Rp(If) {
  return If.type === "input";
}
function Pp(yf) {
  return yf.description;
}
function Ep(Sf) {
  return Sf.type === "image";
}
function Ap(wf) {
  return wf.type === "image";
}
function highlightedText() {
  return {
    bold: !0
  };
}
function Np(Of) {
  return Of.type === "image";
}
function Lp(Cf) {
  return Cf.type === "image";
}
function Up(Tf) {
  return Tf.type === "image";
}
var ii = Symbol("NO_COMMITTED_ROW");
function Fe(o) {
  let u = w(11);
  if (_t()) {
    const defaultValue_4 = o.selectedValue === ii ? o.defaultValue : o.selectedValue ?? o.defaultValue;
    let l;
    if (u[0] !== o.disableSelection || u[1] !== o.isDisabled || u[2] !== o.onCancel || u[3] !== o.onChange || u[4] !== o.onFocus || u[5] !== o.options || u[6] !== o.refuseInput || u[7] !== defaultValue_4) l = e(zK, {
      options: o.options,
      onChange: o.onChange,
      onFocus: o.onFocus,
      onCancel: o.onCancel,
      isDisabled: o.isDisabled,
      disableSelection: o.disableSelection,
      refuseInput: o.refuseInput,
      defaultValue: defaultValue_4
    }), u[0] = o.disableSelection, u[1] = o.isDisabled, u[2] = o.onCancel, u[3] = o.onChange, u[4] = o.onFocus, u[5] = o.options, u[6] = o.refuseInput, u[7] = defaultValue_4, u[8] = l;else l = u[8];
    return l;
  }
  let i;
  if (u[9] !== o) i = e(Xi, {
    ...o
  }), u[9] = o, u[10] = i;else i = u[10];
  return i;
}
function Xi(o) {
  let P = w(79),
    {
      isDisabled: isDisabled_5,
      hideIndexes: hideIndexes,
      visibleOptionCount: visibleOptionCount_5,
      highlightText: l,
      options: options_7,
      columnSizingOptions: columnSizingOptions,
      defaultValue: defaultValue_5,
      selectedValue: selectedValue_2,
      onCancel: a,
      onChange: onChange_4,
      onFocus: onFocus_5,
      defaultFocusValue: I,
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
      keysDeferred: keysDeferred_2,
      pointerWhileDisabled: pointerWhileDisabled
    } = o,
    isDisabled_6 = isDisabled_5 === void 0 ? !1 : isDisabled_5,
    hideIndex_2 = hideIndexes === void 0 ? !1 : hideIndexes,
    st = visibleOptionCount_5 === void 0 ? 5 : visibleOptionCount_5,
    ne = columnSizingOptions === void 0 ? options_7 : columnSizingOptions,
    B = layout_2 === void 0 ? "compact" : layout_2,
    Te = disableSelection_3 === void 0 ? !1 : disableSelection_3,
    showLabel_2 = inlineDescriptions === void 0 ? !1 : inlineDescriptions,
    extraChromeWidth_2 = inputChromeWidth === void 0 ? 0 : inputChromeWidth,
    j = pointerWhileDisabled === void 0 ? !1 : pointerWhileDisabled,
    [imagesSelected_3, onImagesSelectedChange_2] = g(!1),
    [selectedImageIndex_2, onSelectedImageIndexChange_2] = g(0),
    ue;
  if (P[0] !== options_7) ue = () => {
    let Ne = new Map();
    return options_7.forEach(item => {
      if (item.type === "input" && item.initialValue) Ne.set(item.value, item.initialValue);
    }), Ne;
  }, P[0] = options_7, P[1] = ue;else ue = P[1];
  let [inputValues_2, rt] = g(ue),
    mt;
  if (P[2] === S) mt = new Map(), P[2] = mt;else mt = P[2];
  let yt = T(mt),
    Me,
    tn;
  if (P[3] !== inputValues_2 || P[4] !== options_7) Me = () => {
    for (const Re of options_7) {
      if (Re.type === "input" && Re.initialValue !== void 0) {
        let St = yt.current.get(Re.value) ?? "";
        let je = inputValues_2.get(Re.value) ?? "";
        let initialValue = Re.initialValue;
        if (initialValue !== St && je === St) rt(ut => {
          let He = new Map(ut);
          return He.set(Re.value, initialValue), He;
        });
        yt.current.set(Re.value, initialValue);
      }
    }
  }, tn = [options_7, inputValues_2], P[3] = inputValues_2, P[4] = options_7, P[5] = Me, P[6] = tn;else Me = P[5], tn = P[6];
  R(Me, tn);
  let _e = B === "compact" && !showLabel_2 && !ne.some(Rp) && ne.some(Pp),
    {
      columns: columns_3
    } = As(ve());
  const visibleOptionCount_6 = n_t(st, _e ? "compact-vertical" : B);
  let Ge;
  if (P[7] !== I || P[8] !== defaultValue_5 || P[9] !== a || P[10] !== onChange_4 || P[11] !== onFocus_5 || P[12] !== options_7 || P[13] !== selectedValue_2 || P[14] !== visibleOptionCount_6) Ge = {
    visibleOptionCount: visibleOptionCount_6,
    options: options_7,
    defaultValue: defaultValue_5,
    selectedValue: selectedValue_2,
    onChange: onChange_4,
    onCancel: a,
    onFocus: onFocus_5,
    focusValue: I
  }, P[7] = I, P[8] = defaultValue_5, P[9] = a, P[10] = onChange_4, P[11] = onFocus_5, P[12] = options_7, P[13] = selectedValue_2, P[14] = visibleOptionCount_6, P[15] = Ge;else Ge = P[15];
  let state_2 = Fi(Ge),
    [hasInkFocus_2, q] = g(!0),
    dt = Yg(),
    shouldDropWheel_2 = zJe(),
    nn;
  if (P[16] !== Te || P[17] !== isDisabled_6 || P[18] !== j || P[19] !== dt || P[20] !== state_2) nn = ct => isDisabled_6 && !j || Te === !0 || ct.disabled === !0 ? void 0 : on => {
    if (dt(on)) {
      return;
    }
    if (ct.type === "input") state_2.focusOption(ct.value);else state_2.onChange?.(ct.value);
  }, P[16] = Te, P[17] = isDisabled_6, P[18] = j, P[19] = dt, P[20] = state_2, P[21] = nn;else nn = P[21];
  let Ce = nn;
  const disableSelection_4 = Te || (hideIndex_2 ? "numeric" : !1);
  let onEnterImageSelection_2;
  if (P[22] !== pastedContents_2) onEnterImageSelection_2 = () => {
    if (pastedContents_2 && Object.values(pastedContents_2).some(Ep)) {
      let Kn = U(Object.values(pastedContents_2), Ap);
      return onImagesSelectedChange_2(!0), onSelectedImageIndexChange_2(Kn - 1), !0;
    }
    return !1;
  }, P[22] = pastedContents_2, P[23] = onEnterImageSelection_2;else onEnterImageSelection_2 = P[23];
  let onExitImageSelection_2;
  if (P[24] === S) onExitImageSelection_2 = () => {
    onImagesSelectedChange_2(!1);
  }, P[24] = onExitImageSelection_2;else onExitImageSelection_2 = P[24];
  let Hn;
  if (P[25] !== hasInkFocus_2 || P[26] !== imagesSelected_3 || P[27] !== inputValues_2 || P[28] !== isDisabled_6 || P[29] !== keysDeferred_2 || P[30] !== onDownFromLastItem_2 || P[31] !== onInputModeToggle_2 || P[32] !== onUpFromFirstItem_2 || P[33] !== options_7 || P[34] !== state_2 || P[35] !== disableSelection_4 || P[36] !== onEnterImageSelection_2) Hn = {
    isDisabled: isDisabled_6,
    hasInkFocus: hasInkFocus_2,
    keysDeferred: keysDeferred_2,
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
  }, P[25] = hasInkFocus_2, P[26] = imagesSelected_3, P[27] = inputValues_2, P[28] = isDisabled_6, P[29] = keysDeferred_2, P[30] = onDownFromLastItem_2, P[31] = onInputModeToggle_2, P[32] = onUpFromFirstItem_2, P[33] = options_7, P[34] = state_2, P[35] = disableSelection_4, P[36] = onEnterImageSelection_2, P[37] = Hn;else Hn = P[37];
  let {
      handleKeyDown: Uo
    } = Ti(Hn),
    ref_10 = T(null);
  Mf(ref_10, !isDisabled_6);
  let lt = {
      container: () => ({
        flexDirection: "column",
        ref: ref_10,
        ...(isDisabled_6 ? {} : {
          tabIndex: 0,
          onKeyDown: Uo,
          onFocus: () => q(!0),
          onBlur: () => q(!1)
        })
      }),
      highlightedText: highlightedText
    },
    xn;
  if (P[38] !== isDisabled_6 || P[39] !== options_7.length || P[40] !== shouldDropWheel_2 || P[41] !== state_2.scrollViewport || P[42] !== state_2.visibleFromIndex || P[43] !== state_2.visibleToIndex) xn = {
    isDisabled: isDisabled_6,
    visibleFromIndex: state_2.visibleFromIndex,
    visibleToIndex: state_2.visibleToIndex,
    optionCount: options_7.length,
    scrollViewport: state_2.scrollViewport,
    shouldDropWheel: shouldDropWheel_2
  }, P[38] = isDisabled_6, P[39] = options_7.length, P[40] = shouldDropWheel_2, P[41] = state_2.scrollViewport, P[42] = state_2.visibleFromIndex, P[43] = state_2.visibleToIndex, P[44] = xn;else xn = P[44];
  let rows = t_t(xn);
  if (B === "expanded") {
    let qe;
    if (P[45] !== hideIndex_2 || P[46] !== state_2.options) qe = hideIndex_2 ? 0 : state_2.options.length.toString().length, P[45] = hideIndex_2, P[46] = state_2.options, P[47] = qe;else qe = P[47];
    let maxIndexWidth_2 = qe;
    return e(It, {
      container: lt.container(),
      rows: rows,
      children: state_2.visibleOptions.map((Y, Ct) => {
        let Tt = Y.index === state_2.visibleFromIndex;
        let In = Y.index === state_2.visibleToIndex - 1;
        let yn = state_2.visibleToIndex < options_7.length;
        let Nt = state_2.visibleFromIndex > 0;
        let index_8 = state_2.visibleFromIndex + Ct + 1;
        let isFocused_5 = !isDisabled_6 && state_2.focusedValue === Y.value;
        let isSelected_5 = state_2.value === Y.value;
        if (Y.type === "input") {
          let inputValue = inputValues_2.has(Y.value) ? inputValues_2.get(Y.value) : Y.initialValue || "";
          return e(Aue, {
            option: Y,
            onClick: Ce(Y),
            hoverStyle: hoverStyle_4,
            isFocused: isFocused_5,
            isSelected: isSelected_5,
            shouldShowDownArrow: yn && In,
            shouldShowUpArrow: Nt && Tt,
            maxIndexWidth: maxIndexWidth_2,
            index: index_8,
            hideIndex: hideIndex_2,
            extraChromeWidth: extraChromeWidth_2,
            inputValue: inputValue,
            onInputChange: Bo => {
              rt($o => {
                let Sn = new Map($o);
                return Sn.set(Y.value, Bo), Sn;
              });
            },
            onSubmit: zn => {
              let Zi = pastedContents_2 && Object.values(pastedContents_2).some(Np);
              if (zn.trim() || Zi || Y.allowEmptySubmitToCancel) onChange_4?.(Y.value);else a?.();
            },
            onExit: a,
            layout: "expanded",
            showLabel: showLabel_2,
            onOpenEditor: onOpenEditor_2,
            resetCursorOnUpdate: Y.resetCursorOnUpdate,
            canPasteImage: canPasteImage_2,
            onImagePaste: onImagePaste_2,
            pastedContents: pastedContents_2,
            onRemoveImage: onRemoveImage_2,
            imagesSelected: imagesSelected_3,
            selectedImageIndex: selectedImageIndex_2,
            onImagesSelectedChange: onImagesSelectedChange_2,
            onSelectedImageIndexChange: onSelectedImageIndexChange_2
          }, String(Y.value));
        }
        let es = Y.label;
        if (typeof Y.label === "string" && l && Y.label.includes(l)) {
          let label = Y.label;
          let ts = label.indexOf(l);
          es = r(V, {
            children: [label.slice(0, ts), e(n, {
              ...lt.highlightedText(),
              children: l
            }), label.slice(ts + l.length)]
          });
        }
        let dimColor = Y.disabled === !0;
        let color_3 = dimColor ? void 0 : isSelected_5 ? "success" : isFocused_5 ? "suggestion" : void 0;
        return r(s, {
          flexDirection: "column",
          flexShrink: 0,
          children: [e(S5, {
            isFocused: isFocused_5,
            isSelected: isSelected_5,
            shouldShowDownArrow: yn && In,
            shouldShowUpArrow: Nt && Tt,
            onClick: Ce(Y),
            hoverStyle: hoverStyle_4,
            children: e(n, {
              dimColor: dimColor,
              color: color_3,
              children: es
            })
          }), Y.description && e(s, {
            paddingLeft: 2,
            children: e(n, {
              dimColor: dimColor || Y.dimDescription !== !1,
              color: color_3,
              children: e(Jr, {
                children: Y.description
              })
            })
          }), e(n, {
            children: " "
          })]
        }, String(Y.value));
      })
    });
  }
  if (B === "compact-vertical") {
    let qe;
    if (P[48] !== hideIndex_2 || P[49] !== state_2.options) qe = hideIndex_2 ? 0 : state_2.options.length.toString().length, P[48] = hideIndex_2, P[49] = state_2.options, P[50] = qe;else qe = P[50];
    let maxIndexWidth_3 = qe;
    return e(It, {
      container: lt.container(),
      rows: rows,
      children: state_2.visibleOptions.map((ce, Bp) => {
        let Yl = ce.index === state_2.visibleFromIndex;
        let Jl = ce.index === state_2.visibleToIndex - 1;
        let Xl = state_2.visibleToIndex < options_7.length;
        let Ql = state_2.visibleFromIndex > 0;
        let index_9 = state_2.visibleFromIndex + Bp + 1;
        let isFocused_6 = !isDisabled_6 && state_2.focusedValue === ce.value;
        let isSelected_6 = state_2.value === ce.value;
        if (ce.type === "input") {
          let inputValue_2 = inputValues_2.has(ce.value) ? inputValues_2.get(ce.value) : ce.initialValue || "";
          return e(Aue, {
            option: ce,
            onClick: Ce(ce),
            hoverStyle: hoverStyle_4,
            isFocused: isFocused_6,
            isSelected: isSelected_6,
            shouldShowDownArrow: Xl && Jl,
            shouldShowUpArrow: Ql && Yl,
            maxIndexWidth: maxIndexWidth_3,
            index: index_9,
            hideIndex: hideIndex_2,
            extraChromeWidth: extraChromeWidth_2,
            inputValue: inputValue_2,
            onInputChange: jp => {
              rt(Kp => {
                let ea = new Map(Kp);
                return ea.set(ce.value, jp), ea;
              });
            },
            onSubmit: Hp => {
              let zp = pastedContents_2 && Object.values(pastedContents_2).some(Lp);
              if (Hp.trim() || zp || ce.allowEmptySubmitToCancel) onChange_4?.(ce.value);else a?.();
            },
            onExit: a,
            layout: "compact",
            showLabel: showLabel_2,
            onOpenEditor: onOpenEditor_2,
            resetCursorOnUpdate: ce.resetCursorOnUpdate,
            canPasteImage: canPasteImage_2,
            onImagePaste: onImagePaste_2,
            pastedContents: pastedContents_2,
            onRemoveImage: onRemoveImage_2,
            imagesSelected: imagesSelected_3,
            selectedImageIndex: selectedImageIndex_2,
            onImagesSelectedChange: onImagesSelectedChange_2,
            onSelectedImageIndexChange: onSelectedImageIndexChange_2
          }, String(ce.value));
        }
        let na = ce.label;
        if (typeof ce.label === "string" && l && ce.label.includes(l)) {
          let label_2 = ce.label;
          let oa = label_2.indexOf(l);
          na = r(V, {
            children: [label_2.slice(0, oa), e(n, {
              ...lt.highlightedText(),
              children: l
            }), label_2.slice(oa + l.length)]
          });
        }
        let dimColor_2 = ce.disabled === !0;
        return r(s, {
          flexDirection: "column",
          flexShrink: 0,
          children: [e(S5, {
            isFocused: isFocused_6,
            isSelected: isSelected_6,
            shouldShowDownArrow: Xl && Jl,
            shouldShowUpArrow: Ql && Yl,
            onClick: Ce(ce),
            hoverStyle: hoverStyle_4,
            children: r(V, {
              children: [!hideIndex_2 && e(n, {
                dimColor: !0,
                children: `${index_9}.`.padEnd(maxIndexWidth_3 + 1)
              }), e(n, {
                dimColor: dimColor_2,
                color: dimColor_2 ? void 0 : isSelected_6 ? "success" : isFocused_6 ? "suggestion" : void 0,
                children: na
              })]
            })
          }), ce.description && e(s, {
            paddingLeft: hideIndex_2 ? 4 : maxIndexWidth_3 + 4,
            children: e(n, {
              dimColor: dimColor_2 || ce.dimDescription !== !1,
              color: dimColor_2 ? void 0 : isSelected_6 ? "success" : isFocused_6 ? "suggestion" : void 0,
              children: e(Jr, {
                children: ce.description
              })
            })
          })]
        }, String(ce.value));
      })
    });
  }
  let qe;
  if (P[51] !== ne || P[52] !== hideIndex_2) qe = hideIndex_2 ? 0 : ne.length.toString().length, P[51] = ne, P[52] = hideIndex_2, P[53] = qe;else qe = P[53];
  let maxIndexWidth_4 = qe;
  if (_e) {
    let jt, _n;
    if (P[54] !== columns_3 || P[55] !== ne || P[56] !== hideIndex_2 || P[57] !== maxIndexWidth_4 || P[58] !== state_2.value) {
      jt = hideIndex_2 ? 0 : maxIndexWidth_4 + 2;
      let Kt;
      if (P[61] !== ne || P[62] !== jt || P[63] !== state_2.value) {
        let Dt;
        if (P[65] !== jt || P[66] !== state_2.value) Dt = ss => {
          if (ss.type === "input") {
            return 0;
          }
          let _p = state_2.value === ss.value ? 2 : 0;
          return 2 + jt + ie(Jv(ss.label)) + _p;
        }, P[65] = jt, P[66] = state_2.value, P[67] = Dt;else Dt = P[67];
        Kt = Math.max(...ne.map(Dt));
        P[61] = ne, P[62] = jt, P[63] = state_2.value, P[64] = Kt;
      } else Kt = P[64];
      _n = Math.min(Kt, Math.floor(columns_3 * Hl));
      P[54] = columns_3, P[55] = ne, P[56] = hideIndex_2, P[57] = maxIndexWidth_4, P[58] = state_2.value, P[59] = jt, P[60] = _n;
    } else jt = P[59], _n = P[60];
    let tf = state_2.visibleOptions.map((Ht, Gp) => {
      let qp = Ht.index === state_2.visibleFromIndex;
      let Yp = Ht.index === state_2.visibleToIndex - 1;
      let Jp = state_2.visibleToIndex < options_7.length;
      let Xp = state_2.visibleFromIndex > 0;
      let index_10 = state_2.visibleFromIndex + Gp + 1;
      let isFocused_7 = !isDisabled_6 && state_2.focusedValue === Ht.value;
      let isSelected_7 = state_2.value === Ht.value;
      let isOptionDisabled = Ht.disabled === !0;
      let sa = isSelected_7 ? 2 : 0;
      let Gn = Jv(Ht.label);
      let label_3 = Ht.label;
      let ra = _n - 2 - jt - sa;
      if (ie(Gn) > ra) Gn = ot(Gn, ra), label_3 = Gn;
      if (typeof label_3 === "string" && l && label_3.includes(l)) {
        let ls = label_3;
        let la = ls.indexOf(l);
        label_3 = r(V, {
          children: [ls.slice(0, la), e(n, {
            ...lt.highlightedText(),
            children: l
          }), ls.slice(la + l.length)]
        });
      }
      return {
        option: Ht,
        index: index_10,
        label: label_3,
        labelWidth: 2 + jt + ie(Gn) + sa,
        isFocused: isFocused_7,
        isSelected: isSelected_7,
        isOptionDisabled: isOptionDisabled,
        shouldShowDownArrow: Jp && Yp,
        shouldShowUpArrow: Xp && qp
      };
    });
    const container = lt.container();
    let Dt;
    if (P[68] !== Ce || P[69] !== hideIndex_2 || P[70] !== hoverStyle_4 || P[71] !== maxIndexWidth_4 || P[72] !== _n) Dt = be => {
      if (be.option.type === "input") {
        return null;
      }
      let aa = _n - be.labelWidth;
      return r(Qi, {
        isFocused: be.isFocused,
        shouldShowDownArrow: be.shouldShowDownArrow,
        shouldShowUpArrow: be.shouldShowUpArrow,
        onClick: Ce(be.option),
        hoverStyle: hoverStyle_4,
        children: [r(s, {
          flexDirection: "row",
          flexShrink: 0,
          children: [e(n, {
            children: " "
          }), r(n, {
            dimColor: be.isOptionDisabled,
            color: be.isOptionDisabled ? void 0 : be.isSelected ? "success" : be.isFocused ? "suggestion" : void 0,
            children: [!hideIndex_2 && e(n, {
              dimColor: !0,
              children: `${be.index}.`.padEnd(maxIndexWidth_4 + 2)
            }), be.label]
          }), be.isSelected && r(n, {
            children: [" ", e(et, {
              status: "success"
            })]
          }), aa > 0 && e(n, {
            children: " ".repeat(aa)
          })]
        }), e(s, {
          flexGrow: 1,
          marginLeft: 2,
          children: e(n, {
            wrap: "wrap",
            dimColor: be.option.descriptionColor === void 0 && (be.isOptionDisabled || be.option.dimDescription !== !1),
            color: be.isOptionDisabled ? be.option.descriptionColor : be.isSelected ? "success" : be.isFocused ? "suggestion" : be.option.descriptionColor,
            children: e(Jr, {
              children: be.option.description || " "
            })
          })
        })]
      }, String(be.option.value));
    }, P[68] = Ce, P[69] = hideIndex_2, P[70] = hoverStyle_4, P[71] = maxIndexWidth_4, P[72] = _n, P[73] = Dt;else Dt = P[73];
    return e(It, {
      container: container,
      rows: rows,
      children: tf.map(Dt)
    });
  }
  const as = It,
    container_2 = lt.container(),
    children_17 = state_2.visibleOptions.map((ee, ua) => {
      if (ee.type === "input") {
        let inputValue_3 = inputValues_2.has(ee.value) ? inputValues_2.get(ee.value) : ee.initialValue || "";
        let of = ee.index === state_2.visibleFromIndex;
        let sf = ee.index === state_2.visibleToIndex - 1;
        let rf = state_2.visibleToIndex < options_7.length;
        let lf = state_2.visibleFromIndex > 0;
        let index_11 = state_2.visibleFromIndex + ua + 1;
        let isFocused_8 = !isDisabled_6 && state_2.focusedValue === ee.value;
        let isSelected_8 = state_2.value === ee.value;
        return e(Aue, {
          option: ee,
          onClick: Ce(ee),
          hoverStyle: hoverStyle_4,
          isFocused: isFocused_8,
          isSelected: isSelected_8,
          shouldShowDownArrow: rf && sf,
          shouldShowUpArrow: lf && of,
          maxIndexWidth: maxIndexWidth_4,
          index: index_11,
          hideIndex: hideIndex_2,
          extraChromeWidth: extraChromeWidth_2,
          inputValue: inputValue_3,
          onInputChange: cf => {
            rt(pf => {
              let da = new Map(pf);
              return da.set(ee.value, cf), da;
            });
          },
          onSubmit: ff => {
            let mf = pastedContents_2 && Object.values(pastedContents_2).some(Up);
            if (ff.trim() || mf || ee.allowEmptySubmitToCancel) onChange_4?.(ee.value);else a?.();
          },
          onExit: a,
          layout: "compact",
          showLabel: showLabel_2,
          onOpenEditor: onOpenEditor_2,
          resetCursorOnUpdate: ee.resetCursorOnUpdate,
          canPasteImage: canPasteImage_2,
          onImagePaste: onImagePaste_2,
          pastedContents: pastedContents_2,
          onRemoveImage: onRemoveImage_2,
          imagesSelected: imagesSelected_3,
          selectedImageIndex: selectedImageIndex_2,
          onImagesSelectedChange: onImagesSelectedChange_2,
          onSelectedImageIndexChange: onSelectedImageIndexChange_2
        }, String(ee.value));
      }
      let label_4 = ee.label;
      if (typeof ee.label === "string" && l && ee.label.includes(l)) {
        let label_5 = ee.label;
        let pa = label_5.indexOf(l);
        label_4 = r(V, {
          children: [label_5.slice(0, pa), e(n, {
            ...lt.highlightedText(),
            children: l
          }), label_5.slice(pa + l.length)]
        });
      }
      let hf = ee.index === state_2.visibleFromIndex;
      let bf = ee.index === state_2.visibleToIndex - 1;
      let vf = state_2.visibleToIndex < options_7.length;
      let gf = state_2.visibleFromIndex > 0;
      let xf = state_2.visibleFromIndex + ua + 1;
      let isFocused_9 = !isDisabled_6 && state_2.focusedValue === ee.value;
      let isSelected_9 = state_2.value === ee.value;
      let dimColor_3 = ee.disabled === !0;
      return r(S5, {
        isFocused: isFocused_9,
        isSelected: isSelected_9,
        shouldShowDownArrow: vf && bf,
        shouldShowUpArrow: gf && hf,
        onClick: Ce(ee),
        hoverStyle: hoverStyle_4,
        children: [r(s, {
          flexDirection: "row",
          flexShrink: 0,
          children: [!hideIndex_2 && e(n, {
            dimColor: !0,
            children: `${xf}.`.padEnd(maxIndexWidth_4 + 2)
          }), r(n, {
            dimColor: dimColor_3,
            color: dimColor_3 ? void 0 : isSelected_9 ? "success" : isFocused_9 ? "suggestion" : void 0,
            children: [label_4, showLabel_2 && ee.description && r(n, {
              dimColor: dimColor_3 || ee.dimDescription !== !1,
              children: [" ", ee.description]
            })]
          })]
        }), !showLabel_2 && ee.description && e(s, {
          flexShrink: 99,
          marginLeft: 2,
          children: e(n, {
            wrap: "wrap-trim",
            dimColor: dimColor_3 || ee.dimDescription !== !1,
            color: dimColor_3 ? void 0 : isSelected_9 ? "success" : isFocused_9 ? "suggestion" : void 0,
            children: e(Jr, {
              children: ee.description
            })
          })
        })]
      }, String(ee.value));
    });
  let fa;
  if (P[74] !== as || P[75] !== rows || P[76] !== container_2 || P[77] !== children_17) fa = e(as, {
    container: container_2,
    rows: rows,
    children: children_17
  }), P[74] = as, P[75] = rows, P[76] = container_2, P[77] = children_17, P[78] = fa;else fa = P[78];
  return fa;
}
var Kl = 8,
  Hl = 0.6;
function n_t(o, t) {
  let i = t === void 0 ? "compact" : t,
    {
      rows: rows_2
    } = As(ve()),
    l = i === "expanded" ? 3 : i === "compact" ? 1 : 2,
    d = Math.max(1, Math.floor((rows_2 - Kl) / l));
  return Math.min(o, d);
}
function It(o) {
  let l = w(6),
    {
      container: container_3,
      rows: rows_3,
      children: children_18
    } = o,
    children_19;
  if (l[0] !== children_18 || l[1] !== rows_3) children_19 = e(DQ, {
    ...rows_3,
    children: children_18
  }), l[0] = children_18, l[1] = rows_3, l[2] = children_19;else children_19 = l[2];
  let f;
  if (l[3] !== container_3 || l[4] !== children_19) f = e(s, {
    ...container_3,
    children: children_19
  }), l[3] = container_3, l[4] = children_19, l[5] = f;else f = l[5];
  return f;
}
function Qi(o) {
  let I = w(24),
    {
      isFocused: t,
      shouldShowDownArrow: shouldShowDownArrow_2,
      shouldShowUpArrow: shouldShowUpArrow_2,
      onClick: onClick_5,
      hoverStyle: hoverStyle_5,
      children: children_20
    } = o,
    p = onClick_5 !== void 0,
    [b, a] = aIe(p),
    h = Rue(hoverStyle_5),
    inverse_3 = p && b && h === "inverse",
    C;
  if (I[0] !== t) C = {
    line: 0,
    column: 0,
    active: t
  }, I[0] = t, I[1] = C;else C = I[1];
  let ref_11 = Yw(C);
  const backgroundColor_3 = p && b && h === "tint" ? Xv : void 0;
  let onMouseEnter_2;
  if (I[2] !== p || I[3] !== a) onMouseEnter_2 = p ? () => a(!0) : void 0, I[2] = p, I[3] = a, I[4] = onMouseEnter_2;else onMouseEnter_2 = I[4];
  let onMouseLeave_2;
  if (I[5] !== p || I[6] !== a) onMouseLeave_2 = p ? () => a(!1) : void 0, I[5] = p, I[6] = a, I[7] = onMouseLeave_2;else onMouseLeave_2 = I[7];
  let z;
  if (I[8] !== p || I[9] !== h || I[10] !== b || I[11] !== inverse_3 || I[12] !== t || I[13] !== shouldShowDownArrow_2 || I[14] !== shouldShowUpArrow_2) z = e(s, {
    flexShrink: 0,
    children: t ? e(n, {
      color: "suggestion",
      inverse: inverse_3,
      children: Z.pointer
    }) : shouldShowDownArrow_2 ? e(n, {
      dimColor: !0,
      inverse: inverse_3,
      children: Z.arrowDown
    }) : shouldShowUpArrow_2 ? e(n, {
      dimColor: !0,
      inverse: inverse_3,
      children: Z.arrowUp
    }) : p && b && h === "pointer" ? e(n, {
      dimColor: !0,
      children: Z.pointer
    }) : e(n, {
      inverse: inverse_3,
      children: " "
    })
  }), I[8] = p, I[9] = h, I[10] = b, I[11] = inverse_3, I[12] = t, I[13] = shouldShowDownArrow_2, I[14] = shouldShowUpArrow_2, I[15] = z;else z = I[15];
  let m;
  if (I[16] !== children_20 || I[17] !== ref_11 || I[18] !== onClick_5 || I[19] !== backgroundColor_3 || I[20] !== onMouseEnter_2 || I[21] !== onMouseLeave_2 || I[22] !== z) m = r(s, {
    ref: ref_11,
    flexDirection: "row",
    flexShrink: 0,
    backgroundColor: backgroundColor_3,
    onClick: onClick_5,
    onMouseEnter: onMouseEnter_2,
    onMouseLeave: onMouseLeave_2,
    children: [z, children_20]
  }), I[16] = children_20, I[17] = ref_11, I[18] = onClick_5, I[19] = backgroundColor_3, I[20] = onMouseEnter_2, I[21] = onMouseLeave_2, I[22] = z, I[23] = m;else m = I[23];
  return m;
}
export { Xv, Rue, DQ, aIe, tw, Gi, yh, gc, e_t, rs, zK, hvn, yvn, S5, Aue, Ii, _vn, t_t, ii, Fe, n_t };