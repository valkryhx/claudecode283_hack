// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { zo } from "B:/~BUN/root/chunk-ekrhn4q1.js";
import { a } from "B:/~BUN/root/chunk-nkmmqnq7.js";
import { Ys, re, Ze } from "B:/~BUN/root/chunk-y04k89s2.js";
import { d } from "B:/~BUN/root/chunk-zs3ycjed.js";
import { pe } from "B:/~BUN/root/chunk-nf4z9ga7.js";
import { Jkr } from "B:/~BUN/root/chunk-6wgkxd9a.js";
import { WGt, b5 } from "B:/~BUN/root/chunk-w5s5fy4b.js";
import { ie } from "B:/~BUN/root/chunk-bpp59nyd.js";
import { f_t, $er, Uer } from "B:/~BUN/root/chunk-trcn2d68.js";
import { Ga } from "B:/~BUN/root/chunk-fszjvjk0.js";
import { ya, rhn } from "B:/~BUN/root/chunk-nfc48pcb.js";
import { basename as ue, extname as ae } from "path";
var FGt = 2000;
function uje(e, n = 0) {
  if (e.length - n <= FGt) return {
    code: e.slice(n),
    truncatedChars: 0
  };
  let t = e.slice(n, n + FGt + 1),
    code = re(t, FGt);
  return {
    code: code,
    truncatedChars: e.length - n - code.length
  };
}
function rIe(e) {
  return ` \u2026 [+${e} chars]`;
}
function de() {
  return WGt();
}
var v = "\x1B[0m",
  A = "\x1B[2m",
  z = "\x1B[22m";
function l(r_2, g_2, b_2) {
  return {
    r: r_2,
    g: g_2,
    b: b_2,
    a: 255
  };
}
function x(r_3) {
  return {
    r: r_3,
    g: 0,
    b: 0,
    a: 0
  };
}
var L = {
  r: 0,
  g: 0,
  b: 0,
  a: 1
};
function J(e) {
  if (e.includes("ansi")) return "ansi";
  return pe.level >= 3 ? "truecolor" : "color256";
}
var I = [0, 95, 135, 175, 215, 255];
function fe(e, n, t) {
  let i = h => h < 48 ? 0 : h < 115 ? 1 : h < 155 ? 2 : h < 195 ? 3 : h < 235 ? 4 : 5,
    r = i(e),
    s = i(n),
    o = i(t),
    f = 16 + 36 * r + 6 * s + o,
    c = Math.round((e + n + t) / 3);
  if (c < 5) return 16;
  if (c > 244 && r === s && s === o) return f;
  let u = Math.max(0, Math.min(23, Math.round((c - 8) / 10))),
    m = 232 + u,
    b = 8 + u * 10,
    g = I[r],
    y = I[s],
    k = I[o],
    S = (e - g) ** 2 + (n - y) ** 2 + (t - k) ** 2;
  return (e - b) ** 2 + (n - b) ** 2 + (t - b) ** 2 < S ? m : f;
}
function N(e, n, t) {
  if (e.a === 0) {
    let r = e.r;
    if (r < 8) return `\x1B[${(n ? 30 : 40) + r}m`;
    if (r < 16) return `\x1B[${(n ? 90 : 100) + (r - 8)}m`;
    return `\x1B[${n ? 38 : 48};5;${r}m`;
  }
  if (e.a === 1) return n ? "\x1B[39m" : "\x1B[49m";
  let i = n ? 38 : 48;
  if (t === "truecolor") return `\x1B[${i};2;${e.r};${e.g};${e.b}m`;
  return `\x1B[${i};5;${fe(e.r, e.g, e.b)}m`;
}
function R(e, n, t, i) {
  let r = i ? v + A : v;
  for (let [s, o] of e) {
    if (r += N(s.foreground, !0, n), !t) r += N(s.background, !1, n);
    r += o;
  }
  return r + v;
}
function ge(e) {
  if (e.includes("ansi")) return "ansi";
  if (e.includes("dark")) return "Monokai Extended";
  return "GitHub";
}
var scopes_2 = new Map([["keyword", l(249, 38, 114)], ["_storage", l(102, 217, 239)], ["built_in", l(166, 226, 46)], ["type", l(166, 226, 46)], ["literal", l(190, 132, 255)], ["number", l(190, 132, 255)], ["string", l(230, 219, 116)], ["title", l(166, 226, 46)], ["title.function", l(166, 226, 46)], ["title.class", l(166, 226, 46)], ["title.class.inherited", l(166, 226, 46)], ["params", l(253, 151, 31)], ["comment", l(117, 113, 94)], ["meta", l(117, 113, 94)], ["attr", l(166, 226, 46)], ["attribute", l(166, 226, 46)], ["variable", l(255, 255, 255)], ["variable.language", l(255, 255, 255)], ["property", l(255, 255, 255)], ["operator", l(249, 38, 114)], ["punctuation", l(248, 248, 242)], ["symbol", l(190, 132, 255)], ["regexp", l(230, 219, 116)], ["subst", l(248, 248, 242)]]),
  scopes_3 = new Map([["keyword", l(167, 29, 93)], ["_storage", l(167, 29, 93)], ["built_in", l(0, 134, 179)], ["type", l(0, 134, 179)], ["literal", l(0, 134, 179)], ["number", l(0, 134, 179)], ["string", l(24, 54, 145)], ["title", l(121, 93, 163)], ["title.function", l(121, 93, 163)], ["title.class", l(0, 0, 0)], ["title.class.inherited", l(0, 0, 0)], ["params", l(0, 134, 179)], ["comment", l(150, 152, 150)], ["meta", l(150, 152, 150)], ["attr", l(0, 134, 179)], ["attribute", l(0, 134, 179)], ["variable", l(0, 134, 179)], ["variable.language", l(0, 134, 179)], ["property", l(0, 134, 179)], ["operator", l(167, 29, 93)], ["punctuation", l(51, 51, 51)], ["symbol", l(0, 134, 179)], ["regexp", l(24, 54, 145)], ["subst", l(51, 51, 51)]]),
  he = new Set(["const", "let", "var", "function", "class", "type", "interface", "enum", "namespace", "module", "def", "fn", "func", "struct", "trait", "impl"]),
  scopes = new Map([["keyword", x(13)], ["_storage", x(14)], ["built_in", x(14)], ["type", x(14)], ["literal", x(12)], ["number", x(12)], ["string", x(10)], ["title", x(11)], ["title.function", x(11)], ["title.class", x(11)], ["comment", x(8)], ["meta", x(8)]]);
function Y(e, n) {
  let t = e.includes("dark"),
    i = e.includes("ansi"),
    r = e.includes("daltonized"),
    s = n === "truecolor";
  if (i) return {
    addLine: L,
    addWord: L,
    addDecoration: x(10),
    deleteLine: L,
    deleteWord: L,
    deleteDecoration: x(9),
    foreground: t ? x(7) : x(0),
    background: L,
    scopes: scopes
  };
  if (t) {
    let foreground = l(248, 248, 242),
      deleteLine = l(61, 1, 0),
      deleteWord = l(92, 2, 0),
      deleteDecoration = l(220, 90, 90);
    if (r) return {
      addLine: s ? l(0, 27, 41) : x(17),
      addWord: s ? l(0, 48, 71) : x(24),
      addDecoration: l(81, 160, 200),
      deleteLine: deleteLine,
      deleteWord: deleteWord,
      deleteDecoration: deleteDecoration,
      foreground: foreground,
      background: L,
      scopes: scopes_2
    };
    return {
      addLine: s ? l(2, 40, 0) : x(22),
      addWord: s ? l(4, 71, 0) : x(28),
      addDecoration: l(80, 200, 80),
      deleteLine: deleteLine,
      deleteWord: deleteWord,
      deleteDecoration: deleteDecoration,
      foreground: foreground,
      background: L,
      scopes: scopes_2
    };
  }
  let foreground_2 = l(51, 51, 51),
    deleteLine_2 = l(255, 220, 220),
    deleteWord_2 = l(255, 199, 199),
    deleteDecoration_2 = l(207, 34, 46);
  if (r) return {
    addLine: l(219, 237, 255),
    addWord: l(179, 217, 255),
    addDecoration: l(36, 87, 138),
    deleteLine: deleteLine_2,
    deleteWord: deleteWord_2,
    deleteDecoration: deleteDecoration_2,
    foreground: foreground_2,
    background: L,
    scopes: scopes_3
  };
  return {
    addLine: l(220, 255, 220),
    addWord: l(178, 255, 178),
    addDecoration: l(36, 138, 61),
    deleteLine: deleteLine_2,
    deleteWord: deleteWord_2,
    deleteDecoration: deleteDecoration_2,
    foreground: foreground_2,
    background: L,
    scopes: scopes_3
  };
}
var be = new Map([["black", 0], ["red", 1], ["green", 2], ["yellow", 3], ["blue", 4], ["magenta", 5], ["cyan", 6], ["white", 7], ["blackBright", 8], ["redBright", 9], ["greenBright", 10], ["yellowBright", 11], ["blueBright", 12], ["magentaBright", 13], ["cyanBright", 14], ["whiteBright", 15]]);
function _(e) {
  if (e === void 0) return null;
  let n = /^rgb\(\s?(\d{1,3}),\s?(\d{1,3}),\s?(\d{1,3})\s?\)$/.exec(e);
  if (n) return l(Number(n[1]), Number(n[2]), Number(n[3]));
  let t = /^#([0-9a-fA-F]{6})$/.exec(e);
  if (t) {
    let s = parseInt(t[1], 16);
    return l(s >> 16, s >> 8 & 255, s & 255);
  }
  let i = /^#([0-9a-fA-F]{3})$/.exec(e);
  if (i) {
    let [s, o, f] = i[1];
    return l(parseInt(s + s, 16), parseInt(o + o, 16), parseInt(f + f, 16));
  }
  let r = /^ansi256\(\s?(\d{1,3})\s?\)$/.exec(e);
  if (r) return x(Number(r[1]));
  if (e.startsWith("ansi:")) {
    let s = be.get(e.slice(5));
    return s === void 0 ? null : x(s);
  }
  return null;
}
function ke(e, n, t) {
  let i = _((t ? n.diffAddedDimmed : void 0) ?? n.diffAdded),
    r = _((t ? n.diffRemovedDimmed : void 0) ?? n.diffRemoved),
    s = _(n.diffAddedWord),
    o = _(n.diffRemovedWord);
  return {
    ...e,
    addLine: i ?? e.addLine,
    deleteLine: r ?? e.deleteLine,
    addWord: s ?? e.addWord,
    deleteWord: o ?? e.deleteWord
  };
}
function D(e) {
  return {
    foreground: e.foreground,
    background: e.background
  };
}
function W(e, n) {
  switch (e) {
    case "+":
      return n.addLine;
    case "-":
      return n.deleteLine;
    case " ":
      return n.background;
  }
}
function ye(e, n) {
  switch (e) {
    case "+":
      return n.addWord;
    case "-":
      return n.deleteWord;
    case " ":
      return n.background;
  }
}
function V(e, n) {
  switch (e) {
    case "+":
      return n.addDecoration;
    case "-":
      return n.deleteDecoration;
    case " ":
      return n.foreground;
  }
}
var P = new Map([["Dockerfile", "dockerfile"], ["Makefile", "makefile"], ["Rakefile", "ruby"], ["Gemfile", "ruby"], ["CMakeLists", "cmake"]]);
function Q(e, n) {
  let t = ue(e),
    i = ae(e).slice(1),
    r = Ze(t, "."),
    s = P.get(t) ?? P.get(r);
  if (s) {
    let o = b5(s);
    if (o) return o;
  }
  if (i) {
    let o = b5(i);
    if (o) return o;
  }
  if (n) {
    let o = n.startsWith("\uFEFF") ? n.slice(1) : n;
    if (o.startsWith("#!")) {
      if (o.includes("bash") || o.includes("/sh")) return b5("bash");
      if (o.includes("python")) return b5("python");
      if (o.includes("node")) return b5("javascript");
      if (o.includes("ruby")) return b5("ruby");
      if (o.includes("perl")) return b5("perl");
    }
    if (o.startsWith("<?php")) return b5("php");
    if (o.startsWith("<?xml")) return b5("xml");
  }
  return null;
}
function Ce(e, n, t) {
  if (!e) return t.foreground;
  if (e === "keyword" && he.has(n.trim())) return t.scopes.get("_storage") ?? t.foreground;
  return t.scopes.get(e) ?? t.scopes.get(Ze(e, ".")) ?? t.foreground;
}
function Z(e, n, t, i) {
  let r = e.scope ?? e.kind ?? t;
  for (let s of e.children) if (typeof s === "string") {
    let foreground_3 = Ce(r, s, n);
    i.push([{
      foreground: foreground_3,
      background: n.background
    }, s]);
  } else Z(s, n, r, i);
}
function xe(e) {
  return typeof e === "object" && e !== null && "rootNode" in e && typeof e.rootNode === "object" && e.rootNode !== null && "children" in e.rootNode;
}
function ee(e, n, t) {
  let i = n + `
`;
  if (!e.lang) return [[D(t), i]];
  let r;
  try {
    r = de().highlight(i, {
      language: e.lang,
      ignoreIllegals: !0
    });
  } catch {
    return [[D(t), i]];
  }
  if (!xe(r._emitter)) {
    if (Ga().claim("color_diff_hljs_emitter_shape_error")) d(Error(`color-diff: hljs emitter shape mismatch (keys: ${Object.keys(r._emitter).join(",")}). Syntax highlighting disabled.`));
    return [[D(t), i]];
  }
  let s = [];
  return Z(r._emitter.rootNode, t, void 0, s), Se(s);
}
function Se(e) {
  let n = e.map(([, r]) => r),
    t = rhn(n);
  if (t === n) return e;
  let i = [];
  for (let r = 0; r < e.length; r++) {
    let s = t[r];
    if (s.length > 0) i.push([e[r][0], s]);
  }
  return i;
}
var Me = 0.4;
function F(e) {
  let n = [],
    t = 0;
  while (t < e.length) {
    let i = e[t];
    if (/[\p{L}\p{N}_]/u.test(i)) {
      let r = t + 1;
      while (r < e.length && /[\p{L}\p{N}_]/u.test(e[r])) r++;
      n.push(e.slice(t, r)), t = r;
    } else if (/\s/.test(i)) {
      let r = t + 1;
      while (r < e.length && /\s/.test(e[r])) r++;
      n.push(e.slice(t, r)), t = r;
    } else {
      let s = e.codePointAt(t) > 65535 ? 2 : 1;
      n.push(e.slice(t, t + s)), t += s;
    }
  }
  return n;
}
function we(e) {
  let n = [],
    t = 0;
  while (t < e.length) if (e[t] === "-") {
    let i = t,
      r = t;
    while (r < e.length && e[r] === "-") r++;
    let s = r;
    while (s < e.length && e[s] === "+") s++;
    let o = r - i,
      f = s - r;
    if (o > 0 && f > 0) {
      let c = Math.min(o, f);
      for (let u = 0; u < c; u++) n.push([i + u, r + u]);
      t = s;
    } else t = r;
  } else t++;
  return n;
}
function Te(e, n) {
  let t = F(e),
    i = F(n),
    r = Jkr(t, i),
    s = e.length + n.length,
    o = 0,
    f = [],
    c = [],
    start = 0,
    start_2 = 0;
  for (let b of r) {
    let g = b.value.reduce((acc, item) => acc + item.length, 0);
    if (b.removed) o += g, f.push({
      start: start,
      end: start + g
    }), start += g;else if (b.added) o += g, c.push({
      start: start_2,
      end: start_2 + g
    }), start_2 += g;else start += g, start_2 += g;
  }
  if (s > 0 && o / s > Me) return [[], []];
  return [f, c];
}
function ne(e) {
  e.lines = e.lines.map(item => item.flatMap(([t, i]) => i.split(`
`).filter(item => item.length > 0).map(item => [t, item])));
}
function Le(e) {
  if (e.length !== 1) return !1;
  let n = e.codePointAt(0);
  for (let [t, i] of f_t) if (n >= t && n <= i) return !0;
  return !1;
}
var te = /^[\x20-\x7e]*$/;
function U(e) {
  if (e === "\t") return 8;
  if (Le(e)) return 1;
  return ie(e);
}
function B(e) {
  if (!Uer.test(e)) return ie(e);
  let n = e.split($er),
    t = n.length - 1;
  for (let i of n) t += ie(i);
  return t;
}
function K(e) {
  return e.map(([, n]) => n).join("");
}
var Be = 256;
function oe(e, n) {
  if (te.test(n)) return n.length;
  let t = e.slice(-Be);
  return B(t + n) - B(t);
}
function Re(e, n, t) {
  return N(e.foreground, !0, n) + (t ? "" : N(e.background, !1, n));
}
function De(e, n, t) {
  let i = [],
    r = null;
  for (let [s, o] of e) {
    let f = Re(s, n, t),
      c = i.at(-1);
    if (c && f === r) i[i.length - 1] = [c[0], c[1] + o];else i.push([s, o]), r = f;
  }
  return i;
}
function Ee(e) {
  if (!e.some(([, r]) => r.includes("\t"))) return e;
  let n = "",
    t = 0,
    i = [];
  for (let [r, s] of e) {
    let o = s.split("\t"),
      f = "";
    for (let c = 0; c < o.length; c++) {
      let u = c === 0 ? o[c] : Ys(" ", 8 - t % 8) + o[c];
      t += oe(n, u), f += u, n += u;
    }
    i.push([r, f]);
  }
  return i;
}
function se(e, n, t, i, r) {
  let s = [];
  for (let o of e.lines) {
    let f = s.length,
      c = [],
      u = "",
      m = 0;
    for (let [b, g] of Ee(De(o, i, r))) {
      let y = m + oe(u, g);
      if (y <= n) {
        if (g.length > 0) c.push([b, g]), u += g, m = y;
        continue;
      }
      if (n >= 1 && te.test(g)) {
        let p = 0,
          h = n - m;
        while (g.length - p > h) {
          if (h > 0) c.push([b, g.slice(p, p + h)]), p += h;
          if (c.length > 0) s.push(c), c = [], u = "";
          m = 0, h = n;
        }
        if (p < g.length) c.push([b, g.slice(p)]), u += g.slice(p), m += g.length - p;
        continue;
      }
      let k = 0,
        S = 0;
      for (let {
        segment: segment,
        index: index
      } of ya().segment(g)) {
        let C = U(segment);
        if (m + S + C > n) {
          if (index > k) c.push([b, g.slice(k, index)]);
          if (c.length > 0) s.push(c), c = [], u = "", m = 0;
          if (k = index, S = 0, C > n) {
            s.push([[b, g.slice(index, index + segment.length)]]), k = index + segment.length;
            continue;
          }
        }
        S += C;
      }
      if (k < g.length) c.push([b, g.slice(k)]), u += g.slice(k), m = B(u);
    }
    if (c.length > 0 || s.length === f) s.push(c);
  }
  if (e.lines = s, e.lines = e.lines.map(item => {
    let f = K(item);
    if (B(f) <= n) return item;
    let c = Math.max(0, n - 1),
      u = [[0, 0, 0]],
      m = 0,
      b = 0;
    e: for (let C = 0; C < item.length; C++) {
      let M = item[C][1];
      for (let {
        segment: segment_2,
        index: index_2
      } of ya().segment(M)) {
        if (m += U(segment_2), m > c) break e;
        let T = index_2 + segment_2.length;
        u.push([C, T, b + T]);
      }
      b += M.length;
    }
    let g = 0,
      y = u.length - 1;
    while (g < y) {
      let C = g + y + 1 >> 1;
      if (B(f.slice(0, u[C][2])) <= c) g = C;else y = C - 1;
    }
    let [k, S] = u[g],
      p = item.slice(0, k);
    if (S > 0) p.push([item[k][0], item[k][1].slice(0, S)]);
    let h = p.at(-1)?.[0] ?? item[0][0];
    return p.push([h, "\u2026"]), p;
  }), e.marker && e.marker !== " ") {
    let background = W(e.marker, t),
      f = {
        foreground: t.foreground,
        background: background
      };
    for (let c of e.lines) {
      let u = B(K(c));
      if (u < n) c.push([f, Ys(" ", n - u)]);
    }
  }
}
function le(e, n, t, i) {
  let r = {
      foreground: e.marker ? V(e.marker, n) : n.foreground,
      background: e.marker ? W(e.marker, n) : n.background
    },
    s = e.marker === null || e.marker === " ";
  for (let o = 0; o < e.lines.length; o++) {
    let f = o === 0 ? ` ${String(e.lineNumber).padStart(t)} ` : " ".repeat(t + 2),
      c = s && !i ? `${A}${f}${z}` : f;
    e.lines[o].unshift([r, c]);
  }
}
function _e(e, n) {
  if (!e.marker) return;
  let t = {
    foreground: V(e.marker, n),
    background: W(e.marker, n)
  };
  for (let i of e.lines) i.unshift([t, e.marker]);
}
function Ne(e) {
  for (let n of e.lines) if (n.length > 0) {
    n[0][1] = A + n[0][1];
    let t = n.length - 1;
    n[t][1] = n[t][1] + z;
  }
}
function We(e, n) {
  if (n.length === 0) return n;
  let t = [0];
  for (let o of ya().segment(e)) t.push(o.index + o.segment.length);
  let i = o => {
      let f = 0,
        c = t.length - 1;
      while (f < c) {
        let u = f + c + 1 >> 1;
        if (t[u] <= o) f = u;else c = u - 1;
      }
      return t[f];
    },
    r = o => {
      let f = 0,
        c = t.length - 1;
      while (f < c) {
        let u = f + c >> 1;
        if (t[u] >= o) c = u;else f = u + 1;
      }
      return t[f];
    },
    s = [];
  for (let o of n) {
    let start_3 = i(Math.min(o.start, e.length)),
      end = Math.max(start_3, r(Math.min(o.end, e.length))),
      u = s.at(-1);
    if (u && start_3 <= u.end) u.end = Math.max(u.end, end);else s.push({
      start: start_3,
      end: end
    });
  }
  return s;
}
function ve(e, n, t) {
  if (!e.marker) return;
  let background_2 = W(e.marker, n),
    r = ye(e.marker, n),
    s = e.lines.map(item => item.map(([, m]) => m).join("")).join(""),
    o = We(s, t),
    f = 0,
    c = 0;
  for (let u = 0; u < e.lines.length; u++) {
    let m = [];
    for (let [b, g] of e.lines[u]) {
      let y = c,
        k = c + g.length;
      while (f < o.length && o[f].end <= y) f++;
      if (f >= o.length) {
        m.push([{
          ...b,
          background: background_2
        }, g]), c = k;
        continue;
      }
      let S = g,
        p = y;
      while (S.length > 0 && f < o.length) {
        let h = o[f],
          C = p >= h.start && p < h.end,
          M;
        if (C) M = Math.min(h.end, k);else if (h.start > p && h.start < k) M = h.start;else M = k;
        let w = M - p,
          E = S.slice(0, w);
        if (m.push([{
          ...b,
          background: C ? r : background_2
        }, E]), S = S.slice(w), p = M, p >= h.end) f++;
      }
      if (S.length > 0) m.push([{
        ...b,
        background: background_2
      }, S]);
      c = k;
    }
    e.lines[u] = m;
  }
}
function Ie(e) {
  let n = Math.max(0, e.oldStart + e.oldLines - 1),
    t = Math.max(0, e.newStart + e.newLines - 1);
  return Math.max(n, t);
}
function Ae(e) {
  return e === "+" || e === "-" ? e : " ";
}
var q = 2,
  X = 1;
class H {
  hunk;
  filePath;
  firstLine;
  prefixContent;
  constructor(e, n, t, i) {
    this.hunk = e, this.filePath = t, this.firstLine = n, this.prefixContent = i ?? null;
  }
  render(e, n, t, i) {
    let {
      rows: rows,
      mode: mode
    } = this.buildRows(e, n, t, i);
    return rows.map(item => R(item, mode, !1, t));
  }
  renderSplit(e, n, t, i) {
    let {
      rows: rows_2,
      mode: mode_2
    } = this.buildRows(e, n, t, i);
    return {
      gutters: rows_2.map(item => R(item.slice(0, q), mode_2, !1, t)),
      contents: rows_2.map(item => R(item.slice(q), mode_2, !1, t))
    };
  }
  buildRows(e, n, t, i) {
    let mode_3 = J(e),
      s = Y(e, mode_3),
      o = i ? ke(s, i, t) : s,
      c = {
        lang: Q(this.filePath, this.firstLine),
        stack: null
      };
    this.prefixContent;
    let u = String(Ie(this.hunk)).length,
      oldStart = this.hunk.oldStart,
      newStart = this.hunk.newStart,
      g = Math.max(1, n - u - 2 - 1),
      y = this.hunk.lines.map(item => {
        let marker = Ae(item.slice(0, 1)),
          {
            code: code_2,
            truncatedChars: truncatedChars
          } = uje(item, 1),
          lineNumber;
        switch (marker) {
          case "+":
            lineNumber = newStart++;
            break;
          case "-":
            lineNumber = oldStart++;
            break;
          case " ":
            lineNumber = newStart, oldStart++, newStart++;
            break;
        }
        return {
          lineNumber: lineNumber,
          marker: marker,
          code: code_2,
          truncatedChars: truncatedChars
        };
      }),
      k = y.map(() => []);
    if (!t) {
      let p = y.map(item => item.marker);
      for (let [h, C] of we(p)) {
        let [M, w] = Te(y[h].code, y[C].code);
        k[h] = M, k[C] = w;
      }
    }
    let rows_3 = [];
    for (let p = 0; p < y.length; p++) {
      let {
          lineNumber: lineNumber_2,
          marker: marker_2,
          code: code_3,
          truncatedChars: truncatedChars_2
        } = y[p],
        E = marker_2 === "-" ? [[D(o), code_3]] : ee(c, code_3, o),
        T = {
          marker: marker_2,
          lineNumber: lineNumber_2,
          lines: [E]
        };
      if (ne(T), ve(T, o, k[p]), truncatedChars_2 > 0) T.lines[0].push([D(o), rIe(truncatedChars_2)]);
      if (se(T, g, o, mode_3, !1), mode_3 === "ansi" && marker_2 === "-") Ne(T);
      _e(T, o), le(T, o, u, t), rows_3.push(...T.lines);
    }
    return {
      rows: rows_3,
      mode: mode_3
    };
  }
}
class O {
  code;
  filePath;
  constructor(e, n) {
    this.code = e, this.filePath = n;
  }
  render(e, n, t) {
    let {
      rows: rows_4,
      mode: mode_4
    } = this.buildRows(e, n, t);
    return rows_4.map(item => R(item, mode_4, !0, t));
  }
  renderSplit(e, n, t) {
    let {
      rows: rows_5,
      mode: mode_5
    } = this.buildRows(e, n, t);
    return {
      gutters: rows_5.map(item => R(item.slice(0, X), mode_5, !0, t)),
      contents: rows_5.map(item => R(item.slice(X), mode_5, !0, t))
    };
  }
  buildRows(e, n, t) {
    let mode_6 = J(e),
      r = Y(e, mode_6),
      s = this.code.split(`
`);
    if (s.at(-1) === "") s.pop();
    let o = s[0] ?? null,
      c = {
        lang: Q(this.filePath, o),
        stack: null
      },
      u = String(s.length).length,
      m = Math.max(1, n - u - 2),
      rows_6 = [];
    for (let g = 0; g < s.length; g++) {
      let {
          code: code_4,
          truncatedChars: truncatedChars_3
        } = uje(s[g]),
        S = ee(c, code_4, r);
      if (truncatedChars_3 > 0) S.push([D(r), rIe(truncatedChars_3)]);
      let p = {
        marker: null,
        lineNumber: g + 1,
        lines: [S]
      };
      ne(p), se(p, m, r, mode_6, !0), le(p, r, u, t), rows_6.push(...p.lines);
    }
    return {
      rows: rows_6,
      mode: mode_6
    };
  }
}
function ce(e) {
  return {
    theme: ge(e),
    source: null
  };
}
function Vyt() {
  if (zo(a.CLAUDE_CODE_SYNTAX_HIGHLIGHT)) return "env";
  return null;
}
function x8r() {
  return Vyt() === null ? H : null;
}
function fer() {
  return Vyt() === null ? O : null;
}
function mer(e) {
  return Vyt() === null ? ce(e) : null;
}
export { FGt, uje, rIe, Vyt, x8r, fer, mer };