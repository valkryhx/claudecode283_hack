// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { w } from "B:/~BUN/root/chunk-x9hkq9y1.js";
import { ac } from "B:/~BUN/root/chunk-trcn2d68.js";
import { e, r } from "B:/~BUN/root/chunk-qkvevvte.js";
import { X, N } from "B:/~BUN/root/chunk-rnj6pcz5.js";
import { ree, yB } from "B:/~BUN/root/chunk-y355pc11.js";
import { S } from "B:/~BUN/root/chunk-yv67t8hr.js";
N();
var j = {
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
function L(t) {
  let {
    style: style,
    ...s
  } = t;
  return {
    ...j[style ?? "default"],
    ...D(s)
  };
}
function D(t) {
  let o = {};
  for (let s in t) if (t[s] !== void 0) o[s] = t[s];
  return o;
}
function R(t, o = {}) {
  let s = L(o),
    n = l => z(l, s),
    a = l => l.map(n).join(s.chordSep);
  if (t.length === 0) return "";
  if (t.length === 1) return a(t[0]);
  let i = t.every(item => item.length === 1) ? t.map(item => item[0]) : void 0;
  if (!i) return t.map(a).join("/");
  let f = I(i, s),
    p = i.every(item => H.has(item.key)) && (!!f || i.every(item => h(item, s).length === 0)) ? s.arrowSep : "/";
  if (f) {
    let l = i.map(item => n({
      ...item,
      ...Y
    }));
    return G(f, s) + l.join(p);
  }
  return i.map(n).join(p);
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
  B = {
    title: 0,
    lower: 1,
    glyph: 2
  },
  U = {
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
  H = new Set(["up", "down", "left", "right"]),
  Y = {
    ctrl: !1,
    alt: !1,
    shift: !1,
    meta: !1,
    super: !1
  };
function g(t) {
  let o = [];
  if (t.ctrl) o.push("ctrl");
  if (t.shift) o.push("shift");
  if (t.alt || t.meta) o.push("alt");
  if (t.super) o.push("super");
  return o;
}
function u(t, o) {
  let s = U[t][o.modCase];
  return typeof s === "function" ? s(o.platform) : s;
}
function q(t, o) {
  let s = _[t];
  if (s) return s[B[o.keyCase]];
  return o.charCase === "upper" ? t.toUpperCase() : t;
}
function O(t) {
  return t.shift && !t.ctrl && !t.alt && !t.meta && !t.super && t.key.length === 1 && t.key >= "a" && t.key <= "z";
}
function z(t, o) {
  if (o.shiftAsCase && O(t)) return t.key.toUpperCase();
  let s = g(t),
    n = q(t.key, o);
  if (o.caretCtrl && s.length === 1 && s[0] === "ctrl") return `^${n}`;
  if (o.modCase === "glyph") return s.map(item => u(item, o)).join("") + n;
  return [...s.map(item => u(item, o)), n].join(o.modSep);
}
function I(t, o) {
  let [s, ...n] = t;
  if (!h(s, o).length) return;
  return n.every(item => W(s, item, o)) ? s : void 0;
}
function h(t, o) {
  if (o.shiftAsCase && O(t)) return [];
  return g(t);
}
function W(t, o, s) {
  let n = h(t, s),
    a = h(o, s);
  return n.length === a.length && n.every((item, index) => item === a[index]);
}
function G(t, o) {
  let s = g(t);
  if (o.caretCtrl && s.length === 1 && s[0] === "ctrl") return "^";
  if (o.modCase === "glyph") return s.map(item => u(item, o)).join("");
  return s.map(item => u(item, o)).join(o.modSep) + o.modSep;
}
function F(t) {
  let p = w(13),
    {
      chord: chord,
      action: action,
      format: format,
      parens: parens,
      bold: bold
    } = t,
    f = parens === void 0 ? !1 : parens,
    y = bold === void 0 ? !1 : bold,
    l;
  if (p[0] === S) l = b(), p[0] = l;else l = p[0];
  let P = l,
    x;
  if (p[1] !== chord || p[2] !== format) x = v(chord, format, P), p[1] = chord, p[2] = format, p[3] = x;else x = p[3];
  let children = x;
  if (!children) {
    return null;
  }
  let T;
  if (p[4] !== y || p[5] !== children) T = y ? e(ac, {
    bold: !0,
    children: children
  }) : children, p[4] = y, p[5] = children, p[6] = T;else T = p[6];
  let c = T;
  if (f) {
    let m;
    if (p[7] !== action || p[8] !== c) m = r(ac, {
      children: ["(", c, " to ", action, ")"]
    }), p[7] = action, p[8] = c, p[9] = m;else m = p[9];
    return m;
  }
  let m;
  if (p[10] !== action || p[11] !== c) m = r(ac, {
    children: [c, " to ", action]
  }), p[10] = action, p[11] = c, p[12] = m;else m = p[12];
  return m;
}
function GK({
  chord: chord_2,
  action: action_2,
  format: format_2,
  parens: parens_2 = !1
}) {
  let a = v(chord_2, format_2, b());
  if (!a) return "";
  return parens_2 ? `(${a} to ${action_2})` : `${a} to ${action_2}`;
}
function b() {
  return yB() === "macos" ? "macos" : "other";
}
function v(t, o, s) {
  let n = (typeof t === "string" ? [t] : t).filter(item => item !== "");
  return R(n.map(ree), {
    ...o,
    platform: o?.platform ?? s
  });
}
export { F, GK };