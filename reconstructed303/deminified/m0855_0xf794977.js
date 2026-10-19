// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { w } from "B:/~BUN/root/chunk-rysqv8v1.js";
import { Uc } from "B:/~BUN/root/chunk-1jz9m9yh.js";
import { e, r } from "B:/~BUN/root/chunk-x2hkxw5q.js";
import { Z, B } from "B:/~BUN/root/chunk-5hr2ysa5.js";
import { Z9, PU } from "B:/~BUN/root/chunk-raq9cfnw.js";
import { S } from "B:/~BUN/root/chunk-ef0msk7r.js";
B();
var L = {
  default: {
    keyCase: "title",
    modCase: "lower",
    caretCtrl: !1,
    modSep: "+",
    arrowSep: "/",
    chordSep: " ",
    shiftAsCase: !1,
    charCase: "preserve",
    platform: "other"
  },
  compact: {
    keyCase: "lower",
    modCase: "lower",
    caretCtrl: !0,
    modSep: "+",
    arrowSep: "",
    chordSep: " ",
    shiftAsCase: !0,
    charCase: "preserve",
    platform: "other"
  },
  symbol: {
    keyCase: "glyph",
    modCase: "glyph",
    caretCtrl: !1,
    modSep: "",
    arrowSep: "",
    chordSep: " ",
    shiftAsCase: !0,
    charCase: "upper",
    platform: "other"
  }
};
function D(t) {
  let {
    style: style,
    ...s
  } = t;
  return {
    ...L[style ?? "default"],
    ...N(s)
  };
}
function N(t) {
  let o = {};
  for (let s in t) if (t[s] !== void 0) o[s] = t[s];
  return o;
}
function znr(t, o = {}) {
  let s = D(o),
    n = i => W(i, s),
    a = i => i.map(n).join(s.chordSep);
  if (t.length === 0) return "";
  if (t.length === 1) return a(t[0]);
  let l = t.every(item => item.length === 1) ? t.map(item => item[0]) : void 0;
  if (!l) return t.map(a).join("/");
  let p = X(l, s),
    c = l.every(item => Y.has(item.key)) && (!!p || l.every(item => g(item, s).length === 0)) ? s.arrowSep : "/";
  if (p) {
    let i = l.map(item => n({
      ...item,
      ...z
    }));
    return J(p, s) + i.join(c);
  }
  return l.map(n).join(c);
}
var _ = {
    enter: ["Enter", "enter", "\u23CE"],
    escape: ["Esc", "esc", "\u238B"],
    tab: ["Tab", "tab", "\u21E5"],
    " ": ["Space", "space", "\u2423"],
    backspace: ["Backspace", "backspace", "\u232B"],
    delete: ["Delete", "delete", "\u2326"],
    up: ["\u2191", "\u2191", "\u2191"],
    down: ["\u2193", "\u2193", "\u2193"],
    left: ["\u2190", "\u2190", "\u2190"],
    right: ["\u2192", "\u2192", "\u2192"],
    pageup: ["PageUp", "pgup", "\u21DE"],
    pagedown: ["PageDown", "pgdn", "\u21DF"],
    home: ["Home", "home", "\u2196"],
    end: ["End", "end", "\u2198"]
  },
  U = {
    title: 0,
    lower: 1,
    glyph: 2
  },
  H = {
    ctrl: {
      lower: "ctrl",
      title: "Ctrl",
      glyph: "\u2303"
    },
    shift: {
      lower: "shift",
      title: "Shift",
      glyph: "\u21E7"
    },
    alt: {
      lower: t => t === "macos" ? "opt" : "alt",
      title: t => t === "macos" ? "Opt" : "Alt",
      glyph: "\u2325"
    },
    super: {
      lower: t => t === "macos" ? "cmd" : "super",
      title: t => t === "macos" ? "Cmd" : "Super",
      glyph: "\u2318"
    }
  },
  Y = new Set(["up", "down", "left", "right"]),
  z = {
    ctrl: !1,
    alt: !1,
    shift: !1,
    meta: !1,
    super: !1
  };
function C(t) {
  let o = [];
  if (t.ctrl) o.push("ctrl");
  if (t.shift) o.push("shift");
  if (t.alt || t.meta) o.push("alt");
  if (t.super) o.push("super");
  return o;
}
function y(t, o) {
  let s = H[t][o.modCase];
  return typeof s === "function" ? s(o.platform) : s;
}
function I(t, o) {
  let s = _[t];
  if (s) return s[U[o.keyCase]];
  return o.charCase === "upper" ? t.toUpperCase() : t;
}
function R(t) {
  return t.shift && !t.ctrl && !t.alt && !t.meta && !t.super && t.key.length === 1 && t.key >= "a" && t.key <= "z";
}
function W(t, o) {
  if (o.shiftAsCase && R(t)) return t.key.toUpperCase();
  let s = C(t),
    n = I(t.key, o);
  if (o.caretCtrl && s.length === 1 && s[0] === "ctrl") return `^${n}`;
  if (o.modCase === "glyph") return s.map(item => y(item, o)).join("") + n;
  return [...s.map(item => y(item, o)), n].join(o.modSep);
}
function X(t, o) {
  let [s, ...n] = t;
  if (!g(s, o).length) return;
  return n.every(item => G(s, item, o)) ? s : void 0;
}
function g(t, o) {
  if (o.shiftAsCase && R(t)) return [];
  return C(t);
}
function G(t, o, s) {
  let n = g(t, s),
    a = g(o, s);
  return n.length === a.length && n.every((item, index) => item === a[index]);
}
function J(t, o) {
  let s = C(t);
  if (o.caretCtrl && s.length === 1 && s[0] === "ctrl") return "^";
  if (o.modCase === "glyph") return s.map(item => y(item, o)).join("");
  return s.map(item => y(item, o)).join(o.modSep) + o.modSep;
}
function q(t) {
  let f = w(15),
    {
      chord: chord,
      action: action,
      format: format,
      parens: parens,
      bold: bold,
      terse: terse
    } = t,
    E = parens === void 0 ? !1 : parens,
    c = bold === void 0 ? !1 : bold,
    i = terse === void 0 ? !1 : terse,
    x;
  if (f[0] === S) x = v(), f[0] = x;else x = f[0];
  let te = x,
    T;
  if (f[1] !== chord || f[2] !== format) T = P(chord, format, te), f[1] = chord, f[2] = format, f[3] = T;else T = f[3];
  let children = T;
  if (!children) {
    return null;
  }
  let F;
  if (f[4] !== c || f[5] !== children) F = c ? e(Uc, {
    bold: !0,
    children: children
  }) : children, f[4] = c, f[5] = children, f[6] = F;else F = f[6];
  let d = F,
    m = i ? " " : " to ";
  if (E) {
    let h;
    if (f[7] !== action || f[8] !== m || f[9] !== d) h = r(Uc, {
      children: ["(", d, m, action, ")"]
    }), f[7] = action, f[8] = m, f[9] = d, f[10] = h;else h = f[10];
    return h;
  }
  let h;
  if (f[11] !== action || f[12] !== m || f[13] !== d) h = r(Uc, {
    children: [d, m, action]
  }), f[11] = action, f[12] = m, f[13] = d, f[14] = h;else h = f[14];
  return h;
}
function MF({
  chord: chord_2,
  action: action_2,
  format: format_2,
  parens: parens_2 = !1,
  terse: terse_2 = !1
}) {
  let l = P(chord_2, format_2, v());
  if (!l) return "";
  let p = `${l}${terse_2 ? " " : " to "}${action_2}`;
  return parens_2 ? `(${p})` : p;
}
function v() {
  return PU() === "macos" ? "macos" : "other";
}
function P(t, o, s) {
  let n = (typeof t === "string" ? [t] : t).filter(item => item !== "");
  return znr(n.map(Z9), {
    ...o,
    platform: o?.platform ?? s
  });
}
export { znr, q, MF };