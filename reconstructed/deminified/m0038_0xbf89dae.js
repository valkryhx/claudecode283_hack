// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { st } from "B:/~BUN/root/chunk-bgthmgyc.js";
import { b, t } from "B:/~BUN/root/chunk-qe2zga5e.js";
import { d } from "B:/~BUN/root/chunk-zs3ycjed.js";
import { zI } from "B:/~BUN/root/chunk-tndjj29v.js";
function Jo(e) {
  return e.startsWith("\uFEFF") ? e.slice(1) : e;
}
function j(e, i = !1) {
  let r = e.length,
    n = 0,
    l = "",
    s = 0,
    u = 16,
    f = 0,
    o = 0,
    g = 0,
    a = 0,
    m = 0;
  function T(p, y) {
    let c = 0,
      k = 0;
    while (c < p || !y) {
      let h = e.charCodeAt(n);
      if (h >= 48 && h <= 57) k = k * 16 + h - 48;else if (h >= 65 && h <= 70) k = k * 16 + h - 65 + 10;else if (h >= 97 && h <= 102) k = k * 16 + h - 97 + 10;else break;
      n++, c++;
    }
    if (c < p) k = -1;
    return k;
  }
  function setPosition(p) {
    n = p, l = "", s = 0, u = 16, m = 0;
  }
  function A() {
    let p = n;
    if (e.charCodeAt(n) === 48) n++;else {
      n++;
      while (n < e.length && x(e.charCodeAt(n))) n++;
    }
    if (n < e.length && e.charCodeAt(n) === 46) if (n++, n < e.length && x(e.charCodeAt(n))) {
      n++;
      while (n < e.length && x(e.charCodeAt(n))) n++;
    } else return m = 3, e.substring(p, n);
    let y = n;
    if (n < e.length && (e.charCodeAt(n) === 69 || e.charCodeAt(n) === 101)) {
      if (n++, n < e.length && e.charCodeAt(n) === 43 || e.charCodeAt(n) === 45) n++;
      if (n < e.length && x(e.charCodeAt(n))) {
        n++;
        while (n < e.length && x(e.charCodeAt(n))) n++;
        y = n;
      } else m = 3;
    }
    return e.substring(p, y);
  }
  function v() {
    let p = "",
      y = n;
    while (!0) {
      if (n >= r) {
        p += e.substring(y, n), m = 2;
        break;
      }
      let c = e.charCodeAt(n);
      if (c === 34) {
        p += e.substring(y, n), n++;
        break;
      }
      if (c === 92) {
        if (p += e.substring(y, n), n++, n >= r) {
          m = 2;
          break;
        }
        switch (e.charCodeAt(n++)) {
          case 34:
            p += '"';
            break;
          case 92:
            p += "\\";
            break;
          case 47:
            p += "/";
            break;
          case 98:
            p += "\b";
            break;
          case 102:
            p += "\f";
            break;
          case 110:
            p += `
`;
            break;
          case 114:
            p += "\r";
            break;
          case 116:
            p += "\t";
            break;
          case 117:
            let h = T(4, !0);
            if (h >= 0) p += String.fromCharCode(h);else m = 4;
            break;
          default:
            m = 5;
        }
        y = n;
        continue;
      }
      if (c >= 0 && c <= 31) if (J(c)) {
        p += e.substring(y, n), m = 2;
        break;
      } else m = 6;
      n++;
    }
    return p;
  }
  function N() {
    if (l = "", m = 0, s = n, o = f, a = g, n >= r) return s = r, u = 17;
    let p = e.charCodeAt(n);
    if (H(p)) {
      do n++, l += String.fromCharCode(p), p = e.charCodeAt(n); while (H(p));
      return u = 15;
    }
    if (J(p)) {
      if (n++, l += String.fromCharCode(p), p === 13 && e.charCodeAt(n) === 10) n++, l += `
`;
      return f++, g = n, u = 14;
    }
    switch (p) {
      case 123:
        return n++, u = 1;
      case 125:
        return n++, u = 2;
      case 91:
        return n++, u = 3;
      case 93:
        return n++, u = 4;
      case 58:
        return n++, u = 6;
      case 44:
        return n++, u = 5;
      case 34:
        return n++, l = v(), u = 10;
      case 47:
        let y = n - 1;
        if (e.charCodeAt(n + 1) === 47) {
          n += 2;
          while (n < r) {
            if (J(e.charCodeAt(n))) break;
            n++;
          }
          return l = e.substring(y, n), u = 12;
        }
        if (e.charCodeAt(n + 1) === 42) {
          n += 2;
          let c = r - 1,
            k = !1;
          while (n < c) {
            let h = e.charCodeAt(n);
            if (h === 42 && e.charCodeAt(n + 1) === 47) {
              n += 2, k = !0;
              break;
            }
            if (n++, J(h)) {
              if (h === 13 && e.charCodeAt(n) === 10) n++;
              f++, g = n;
            }
          }
          if (!k) n++, m = 1;
          return l = e.substring(y, n), u = 13;
        }
        return l += String.fromCharCode(p), n++, u = 16;
      case 45:
        if (l += String.fromCharCode(p), n++, n === r || !x(e.charCodeAt(n))) return u = 16;
      case 48:
      case 49:
      case 50:
      case 51:
      case 52:
      case 53:
      case 54:
      case 55:
      case 56:
      case 57:
        return l += A(), u = 11;
      default:
        while (n < r && B(p)) n++, p = e.charCodeAt(n);
        if (s !== n) {
          switch (l = e.substring(s, n), l) {
            case "true":
              return u = 8;
            case "false":
              return u = 9;
            case "null":
              return u = 7;
          }
          return u = 16;
        }
        return l += String.fromCharCode(p), n++, u = 16;
    }
  }
  function B(p) {
    if (H(p) || J(p)) return !1;
    switch (p) {
      case 125:
      case 93:
      case 123:
      case 91:
      case 34:
      case 58:
      case 44:
      case 47:
        return !1;
    }
    return !0;
  }
  function I() {
    let p;
    do p = N(); while (p >= 12 && p <= 15);
    return p;
  }
  return {
    setPosition: setPosition,
    getPosition: () => n,
    scan: i ? I : N,
    getToken: () => u,
    getTokenValue: () => l,
    getTokenOffset: () => s,
    getTokenLength: () => n - s,
    getTokenStartLine: () => o,
    getTokenStartCharacter: () => s - a,
    getTokenError: () => m
  };
}
function H(e) {
  return e === 32 || e === 9;
}
function J(e) {
  return e === 10 || e === 13;
}
function x(e) {
  return e >= 48 && e <= 57;
}
var K;
(function (e) {
  e[e.lineFeed = 10] = "lineFeed", e[e.carriageReturn = 13] = "carriageReturn", e[e.space = 32] = "space", e[e._0 = 48] = "_0", e[e._1 = 49] = "_1", e[e._2 = 50] = "_2", e[e._3 = 51] = "_3", e[e._4 = 52] = "_4", e[e._5 = 53] = "_5", e[e._6 = 54] = "_6", e[e._7 = 55] = "_7", e[e._8 = 56] = "_8", e[e._9 = 57] = "_9", e[e.a = 97] = "a", e[e.b = 98] = "b", e[e.c = 99] = "c", e[e.d = 100] = "d", e[e.e = 101] = "e", e[e.f = 102] = "f", e[e.g = 103] = "g", e[e.h = 104] = "h", e[e.i = 105] = "i", e[e.j = 106] = "j", e[e.k = 107] = "k", e[e.l = 108] = "l", e[e.m = 109] = "m", e[e.n = 110] = "n", e[e.o = 111] = "o", e[e.p = 112] = "p", e[e.q = 113] = "q", e[e.r = 114] = "r", e[e.s = 115] = "s", e[e.t = 116] = "t", e[e.u = 117] = "u", e[e.v = 118] = "v", e[e.w = 119] = "w", e[e.x = 120] = "x", e[e.y = 121] = "y", e[e.z = 122] = "z", e[e.A = 65] = "A", e[e.B = 66] = "B", e[e.C = 67] = "C", e[e.D = 68] = "D", e[e.E = 69] = "E", e[e.F = 70] = "F", e[e.G = 71] = "G", e[e.H = 72] = "H", e[e.I = 73] = "I", e[e.J = 74] = "J", e[e.K = 75] = "K", e[e.L = 76] = "L", e[e.M = 77] = "M", e[e.N = 78] = "N", e[e.O = 79] = "O", e[e.P = 80] = "P", e[e.Q = 81] = "Q", e[e.R = 82] = "R", e[e.S = 83] = "S", e[e.T = 84] = "T", e[e.U = 85] = "U", e[e.V = 86] = "V", e[e.W = 87] = "W", e[e.X = 88] = "X", e[e.Y = 89] = "Y", e[e.Z = 90] = "Z", e[e.asterisk = 42] = "asterisk", e[e.backslash = 92] = "backslash", e[e.closeBrace = 125] = "closeBrace", e[e.closeBracket = 93] = "closeBracket", e[e.colon = 58] = "colon", e[e.comma = 44] = "comma", e[e.dot = 46] = "dot", e[e.doubleQuote = 34] = "doubleQuote", e[e.minus = 45] = "minus", e[e.openBrace = 123] = "openBrace", e[e.openBracket = 91] = "openBracket", e[e.plus = 43] = "plus", e[e.slash = 47] = "slash", e[e.formFeed = 12] = "formFeed", e[e.tab = 9] = "tab";
})(K || (K = {}));
var E = Array(20).fill(0).map((item, index) => " ".repeat(index));
var Q = {
    " ": {
      "\n": Array(200).fill(0).map((item, index) => `
` + " ".repeat(index)),
      "\r": Array(200).fill(0).map((item, index) => "\r" + " ".repeat(index)),
      "\r\n": Array(200).fill(0).map((item, index) => `\r
` + " ".repeat(index))
    },
    "\t": {
      "\n": Array(200).fill(0).map((item, index) => `
` + "\t".repeat(index)),
      "\r": Array(200).fill(0).map((item, index) => "\r" + "\t".repeat(index)),
      "\r\n": Array(200).fill(0).map((item, index) => `\r
` + "\t".repeat(index))
    }
  },
  C = [`
`, "\r", `\r
`];
function X(e, i, r) {
  let n, l, s, u, f;
  if (i) {
    u = i.offset, f = u + i.length, s = u;
    while (s > 0 && !V(e, s - 1)) s--;
    let c = f;
    while (c < e.length && !V(e, c)) c++;
    l = e.substring(s, c), n = ue(l, r);
  } else l = e, n = 0, s = 0, u = 0, f = e.length;
  let o = ce(r, e),
    g = C.includes(o),
    a = 0,
    m = 0,
    T;
  if (r.insertSpaces) T = E[r.tabSize || 4] ?? U(E[1], r.tabSize || 4);else T = "\t";
  let w = T === "\t" ? "\t" : " ",
    A = j(l, !1),
    v = !1;
  function N() {
    if (a > 1) return U(o, a) + U(T, n + m);
    let c = T.length * (n + m);
    if (!g || c > Q[w][o].length) return o + U(T, n + m);
    if (c <= 0) return o;
    return Q[w][o][c];
  }
  function B() {
    let c = A.scan();
    a = 0;
    while (c === 15 || c === 14) {
      if (c === 14 && r.keepLines) a += 1;else if (c === 14) a = 1;
      c = A.scan();
    }
    return v = c === 16 || A.getTokenError() !== 0, c;
  }
  let I = [];
  function p(content, offset, h) {
    if (!v && (!i || offset < f && h > u) && e.substring(offset, h) !== content) I.push({
      offset: offset,
      length: h - offset,
      content: content
    });
  }
  let y = B();
  if (r.keepLines && a > 0) p(U(o, a), 0, 0);
  if (y !== 17) {
    let c = A.getTokenOffset() + s,
      k = T.length * n < 20 && r.insertSpaces ? E[T.length * n] : U(T, n);
    p(k, s, c);
  }
  while (y !== 17) {
    let c = A.getTokenOffset() + A.getTokenLength() + s,
      k = B(),
      h = "",
      S = !1;
    while (a === 0 && (k === 12 || k === 13)) {
      let W = A.getTokenOffset() + s;
      p(E[1], c, W), c = A.getTokenOffset() + A.getTokenLength() + s, S = k === 12, h = S ? N() : "", k = B();
    }
    if (k === 2) {
      if (y !== 1) m--;
      if (r.keepLines && a > 0 || !r.keepLines && y !== 1) h = N();else if (r.keepLines) h = E[1];
    } else if (k === 4) {
      if (y !== 3) m--;
      if (r.keepLines && a > 0 || !r.keepLines && y !== 3) h = N();else if (r.keepLines) h = E[1];
    } else {
      switch (y) {
        case 3:
        case 1:
          if (m++, r.keepLines && a > 0 || !r.keepLines) h = N();else h = E[1];
          break;
        case 5:
          if (r.keepLines && a > 0 || !r.keepLines) h = N();else h = E[1];
          break;
        case 12:
          h = N();
          break;
        case 13:
          if (a > 0) h = N();else if (!S) h = E[1];
          break;
        case 6:
          if (r.keepLines && a > 0) h = N();else if (!S) h = E[1];
          break;
        case 10:
          if (r.keepLines && a > 0) h = N();else if (k === 6 && !S) h = "";
          break;
        case 7:
        case 8:
        case 9:
        case 11:
        case 2:
        case 4:
          if (r.keepLines && a > 0) h = N();else if ((k === 12 || k === 13) && !S) h = E[1];else if (k !== 5 && k !== 17) v = !0;
          break;
        case 16:
          v = !0;
          break;
      }
      if (a > 0 && (k === 12 || k === 13)) h = N();
    }
    if (k === 17) if (r.keepLines && a > 0) h = N();else h = r.insertFinalNewline ? o : "";
    let z = A.getTokenOffset() + s;
    p(h, c, z), y = k;
  }
  return I;
}
function U(e, i) {
  let r = "";
  for (let n = 0; n < i; n++) r += e;
  return r;
}
function ue(e, i) {
  let r = 0,
    n = 0,
    l = i.tabSize || 4;
  while (r < e.length) {
    let s = e.charAt(r);
    if (s === E[1]) n++;else if (s === "\t") n += l;else break;
    r++;
  }
  return Math.floor(n / l);
}
function ce(e, i) {
  for (let r = 0; r < i.length; r++) {
    let n = i.charAt(r);
    if (n === "\r") {
      if (r + 1 < i.length && i.charAt(r + 1) === `
`) return `\r
`;
      return "\r";
    } else if (n === `
`) return `
`;
  }
  return e && e.eol || `
`;
}
function V(e, i) {
  return `\r
`.indexOf(e.charAt(i)) !== -1;
}
var F;
(function (e) {
  e.DEFAULT = {
    allowTrailingComma: !1
  };
})(F || (F = {}));
function ee(e, i = [], r = F.DEFAULT) {
  let n = null,
    l = [],
    s = [];
  function onLiteralValue(o) {
    if (Array.isArray(l)) l.push(o);else if (n !== null) l[n] = o;
  }
  return q(e, {
    onObjectBegin: () => {
      let o = {};
      onLiteralValue(o), s.push(l), l = o, n = null;
    },
    onObjectProperty: o => {
      n = o;
    },
    onObjectEnd: () => {
      l = s.pop();
    },
    onArrayBegin: () => {
      let o = [];
      onLiteralValue(o), s.push(l), l = o, n = null;
    },
    onArrayEnd: () => {
      l = s.pop();
    },
    onLiteralValue: onLiteralValue,
    onError: (error, offset_2, length) => {
      i.push({
        error: error,
        offset: offset_2,
        length: length
      });
    }
  }, r), l[0];
}
function Z(e, i = [], r = F.DEFAULT) {
  let parent = {
    type: "array",
    offset: -1,
    length: -1,
    children: [],
    parent: void 0
  };
  function l(o) {
    if (parent.type === "property") parent.length = o - parent.offset, parent = parent.parent;
  }
  function s(o) {
    return parent.children.push(o), o;
  }
  q(e, {
    onObjectBegin: offset_3 => {
      parent = s({
        type: "object",
        offset: offset_3,
        length: -1,
        parent: parent,
        children: []
      });
    },
    onObjectProperty: (value, offset_4, length_2) => {
      parent = s({
        type: "property",
        offset: offset_4,
        length: -1,
        parent: parent,
        children: []
      }), parent.children.push({
        type: "string",
        value: value,
        offset: offset_4,
        length: length_2,
        parent: parent
      });
    },
    onObjectEnd: (o, g) => {
      l(o + g), parent.length = o + g - parent.offset, parent = parent.parent, l(o + g);
    },
    onArrayBegin: (offset_5, g) => {
      parent = s({
        type: "array",
        offset: offset_5,
        length: -1,
        parent: parent,
        children: []
      });
    },
    onArrayEnd: (o, g) => {
      parent.length = o + g - parent.offset, parent = parent.parent, l(o + g);
    },
    onLiteralValue: (value_2, offset_6, length_3) => {
      s({
        type: pe(value_2),
        offset: offset_6,
        length: length_3,
        parent: parent,
        value: value_2
      }), l(offset_6 + length_3);
    },
    onSeparator: (o, g, a) => {
      if (parent.type === "property") {
        if (o === ":") parent.colonOffset = g;else if (o === ",") l(g);
      }
    },
    onError: (error_2, offset_7, length_4) => {
      i.push({
        error: error_2,
        offset: offset_7,
        length: length_4
      });
    }
  }, r);
  let f = parent.children[0];
  if (f) delete f.parent;
  return f;
}
function R(e, i) {
  if (!e) return;
  let r = e;
  for (let n of i) if (typeof n === "string") {
    if (r.type !== "object" || !Array.isArray(r.children)) return;
    let l = !1;
    for (let s of r.children) if (Array.isArray(s.children) && s.children[0].value === n && s.children.length === 2) {
      r = s.children[1], l = !0;
      break;
    }
    if (!l) return;
  } else {
    let l = n;
    if (r.type !== "array" || l < 0 || !Array.isArray(r.children) || l >= r.children.length) return;
    r = r.children[l];
  }
  return r;
}
function q(e, i, r = F.DEFAULT) {
  let n = j(e, !1),
    l = [];
  function s(O) {
    return O ? () => O(n.getTokenOffset(), n.getTokenLength(), n.getTokenStartLine(), n.getTokenStartCharacter()) : () => !0;
  }
  function u(O) {
    return O ? () => O(n.getTokenOffset(), n.getTokenLength(), n.getTokenStartLine(), n.getTokenStartCharacter(), () => l.slice()) : () => !0;
  }
  function f(O) {
    return O ? L => O(L, n.getTokenOffset(), n.getTokenLength(), n.getTokenStartLine(), n.getTokenStartCharacter()) : () => !0;
  }
  function o(O) {
    return O ? L => O(L, n.getTokenOffset(), n.getTokenLength(), n.getTokenStartLine(), n.getTokenStartCharacter(), () => l.slice()) : () => !0;
  }
  let g = u(i.onObjectBegin),
    a = o(i.onObjectProperty),
    m = s(i.onObjectEnd),
    T = u(i.onArrayBegin),
    w = s(i.onArrayEnd),
    A = o(i.onLiteralValue),
    v = f(i.onSeparator),
    N = s(i.onComment),
    B = f(i.onError),
    I = r && r.disallowComments,
    p = r && r.allowTrailingComma;
  function y() {
    while (!0) {
      let O = n.scan();
      switch (n.getTokenError()) {
        case 4:
          c(14);
          break;
        case 5:
          c(15);
          break;
        case 3:
          c(13);
          break;
        case 1:
          if (!I) c(11);
          break;
        case 2:
          c(12);
          break;
        case 6:
          c(16);
          break;
      }
      switch (O) {
        case 12:
        case 13:
          if (I) c(10);else N();
          break;
        case 16:
          c(1);
          break;
        case 15:
        case 14:
          break;
        default:
          return O;
      }
    }
  }
  function c(O, L = [], G = []) {
    if (B(O), L.length + G.length > 0) {
      let M = n.getToken();
      while (M !== 17) {
        if (L.indexOf(M) !== -1) {
          y();
          break;
        } else if (G.indexOf(M) !== -1) break;
        M = y();
      }
    }
  }
  function k(O) {
    let L = n.getTokenValue();
    if (O) A(L);else a(L), l.push(L);
    return y(), !0;
  }
  function h() {
    switch (n.getToken()) {
      case 11:
        let O = n.getTokenValue(),
          L = Number(O);
        if (isNaN(L)) c(2), L = 0;
        A(L);
        break;
      case 7:
        A(null);
        break;
      case 8:
        A(!0);
        break;
      case 9:
        A(!1);
        break;
      default:
        return !1;
    }
    return y(), !0;
  }
  function S() {
    if (n.getToken() !== 10) return c(3, [], [2, 5]), !1;
    if (k(!1), n.getToken() === 6) {
      if (v(":"), y(), !Y()) c(4, [], [2, 5]);
    } else c(5, [], [2, 5]);
    return l.pop(), !0;
  }
  function z() {
    g(), y();
    let O = !1;
    while (n.getToken() !== 2 && n.getToken() !== 17) {
      if (n.getToken() === 5) {
        if (!O) c(4, [], []);
        if (v(","), y(), n.getToken() === 2 && p) break;
      } else if (O) c(6, [], []);
      if (!S()) c(4, [], [2, 5]);
      O = !0;
    }
    if (m(), n.getToken() !== 2) c(7, [2], []);else y();
    return !0;
  }
  function W() {
    T(), y();
    let O = !0,
      L = !1;
    while (n.getToken() !== 4 && n.getToken() !== 17) {
      if (n.getToken() === 5) {
        if (!L) c(4, [], []);
        if (v(","), y(), n.getToken() === 4 && p) break;
      } else if (L) c(6, [], []);
      if (O) l.push(0), O = !1;else l[l.length - 1]++;
      if (!Y()) c(4, [], [4, 5]);
      L = !0;
    }
    if (w(), !O) l.pop();
    if (n.getToken() !== 4) c(8, [4], []);else y();
    return !0;
  }
  function Y() {
    switch (n.getToken()) {
      case 3:
        return W();
      case 1:
        return z();
      case 10:
        return k(!0);
      default:
        return h();
    }
  }
  if (y(), n.getToken() === 17) {
    if (r.allowEmptyContent) return !0;
    return c(4, [], []), !1;
  }
  if (!Y()) return c(4, [], []), !1;
  if (n.getToken() !== 17) c(9, [], []);
  return !0;
}
function pe(e) {
  switch (typeof e) {
    case "boolean":
      return "boolean";
    case "number":
      return "number";
    case "string":
      return "string";
    case "object":
      {
        if (!e) return "null";else if (Array.isArray(e)) return "array";
        return "object";
      }
    default:
      return "null";
  }
}
function ne(e, i, r, n) {
  let l = i.slice(),
    u = Z(e, []),
    f = void 0,
    o = void 0;
  while (l.length > 0) if (o = l.pop(), f = R(u, l), f === void 0 && r !== void 0) {
    if (typeof o === "string") r = {
      [o]: r
    };else r = [r];
  } else break;
  if (!f) {
    if (r === void 0) throw Error("Can not delete in empty document");
    return _(e, {
      offset: u ? u.offset : 0,
      length: u ? u.length : 0,
      content: JSON.stringify(r)
    }, n);
  } else if (f.type === "object" && typeof o === "string" && Array.isArray(f.children)) {
    let g = R(f, [o]);
    if (g !== void 0) {
      if (r === void 0) {
        if (!g.parent) throw Error("Malformed AST");
        let a = f.children.indexOf(g.parent),
          offset_8,
          T = g.parent.offset + g.parent.length;
        if (a > 0) {
          let w = f.children[a - 1];
          offset_8 = w.offset + w.length;
        } else if (offset_8 = f.offset + 1, f.children.length > 1) T = f.children[1].offset;
        return _(e, {
          offset: offset_8,
          length: T - offset_8,
          content: ""
        }, n);
      } else return _(e, {
        offset: g.offset,
        length: g.length,
        content: JSON.stringify(r)
      }, n);
    } else {
      if (r === void 0) return [];
      let content_2 = `${JSON.stringify(o)}: ${JSON.stringify(r)}`,
        m = n.getInsertionIndex ? n.getInsertionIndex(f.children.map(item => item.children[0].value)) : f.children.length,
        T;
      if (m > 0) {
        let w = f.children[m - 1];
        T = {
          offset: w.offset + w.length,
          length: 0,
          content: "," + content_2
        };
      } else if (f.children.length === 0) T = {
        offset: f.offset + 1,
        length: 0,
        content: content_2
      };else T = {
        offset: f.offset + 1,
        length: 0,
        content: content_2 + ","
      };
      return _(e, T, n);
    }
  } else if (f.type === "array" && typeof o === "number" && Array.isArray(f.children)) {
    let g = o;
    if (g === -1) {
      let content_3 = `${JSON.stringify(r)}`,
        m;
      if (f.children.length === 0) m = {
        offset: f.offset + 1,
        length: 0,
        content: content_3
      };else {
        let T = f.children[f.children.length - 1];
        m = {
          offset: T.offset + T.length,
          length: 0,
          content: "," + content_3
        };
      }
      return _(e, m, n);
    } else if (r === void 0 && f.children.length >= 0) {
      let a = o,
        m = f.children[a],
        T;
      if (f.children.length === 1) T = {
        offset: f.offset + 1,
        length: f.length - 2,
        content: ""
      };else if (f.children.length - 1 === a) {
        let w = f.children[a - 1],
          offset_9 = w.offset + w.length,
          v = f.offset + f.length;
        T = {
          offset: offset_9,
          length: v - 2 - offset_9,
          content: ""
        };
      } else T = {
        offset: m.offset,
        length: f.children[a + 1].offset - m.offset,
        content: ""
      };
      return _(e, T, n);
    } else if (r !== void 0) {
      let a,
        content_4 = `${JSON.stringify(r)}`;
      if (!n.isArrayInsertion && f.children.length > o) {
        let T = f.children[o];
        a = {
          offset: T.offset,
          length: T.length,
          content: content_4
        };
      } else if (f.children.length === 0 || o === 0) a = {
        offset: f.offset + 1,
        length: 0,
        content: f.children.length === 0 ? content_4 : content_4 + ","
      };else {
        let T = o > f.children.length ? f.children.length : o,
          w = f.children[T - 1];
        a = {
          offset: w.offset + w.length,
          length: 0,
          content: "," + content_4
        };
      }
      return _(e, a, n);
    } else throw Error(`Can not ${r === void 0 ? "remove" : n.isArrayInsertion ? "insert" : "modify"} Array index ${g} as length is not sufficient`);
  } else throw Error(`Can not add ${typeof o !== "number" ? "index" : "property"} to parent of type ${f.type}`);
}
function _(e, i, r) {
  if (!r.formattingOptions) return [i];
  let n = D(e, i),
    offset_10 = i.offset,
    s = i.offset + i.content.length;
  if (i.length === 0 || i.content.length === 0) {
    while (offset_10 > 0 && !V(n, offset_10 - 1)) offset_10--;
    while (s < n.length && !V(n, s)) s++;
  }
  let u = X(n, {
    offset: offset_10,
    length: s - offset_10
  }, {
    ...r.formattingOptions,
    keepLines: !1
  });
  for (let o = u.length - 1; o >= 0; o--) {
    let g = u[o];
    n = D(n, g), offset_10 = Math.min(offset_10, g.offset), s = Math.max(s, g.offset + g.length), s += g.content.length - g.length;
  }
  let length_5 = e.length - (n.length - s) - offset_10;
  return [{
    offset: offset_10,
    length: length_5,
    content: n.substring(offset_10, s)
  }];
}
function D(e, i) {
  return e.substring(0, i.offset) + i.content + e.substring(i.offset + i.length);
}
var te;
(function (e) {
  e[e.None = 0] = "None", e[e.UnexpectedEndOfComment = 1] = "UnexpectedEndOfComment", e[e.UnexpectedEndOfString = 2] = "UnexpectedEndOfString", e[e.UnexpectedEndOfNumber = 3] = "UnexpectedEndOfNumber", e[e.InvalidUnicode = 4] = "InvalidUnicode", e[e.InvalidEscapeCharacter = 5] = "InvalidEscapeCharacter", e[e.InvalidCharacter = 6] = "InvalidCharacter";
})(te || (te = {}));
var re;
(function (e) {
  e[e.OpenBraceToken = 1] = "OpenBraceToken", e[e.CloseBraceToken = 2] = "CloseBraceToken", e[e.OpenBracketToken = 3] = "OpenBracketToken", e[e.CloseBracketToken = 4] = "CloseBracketToken", e[e.CommaToken = 5] = "CommaToken", e[e.ColonToken = 6] = "ColonToken", e[e.NullKeyword = 7] = "NullKeyword", e[e.TrueKeyword = 8] = "TrueKeyword", e[e.FalseKeyword = 9] = "FalseKeyword", e[e.StringLiteral = 10] = "StringLiteral", e[e.NumericLiteral = 11] = "NumericLiteral", e[e.LineCommentTrivia = 12] = "LineCommentTrivia", e[e.BlockCommentTrivia = 13] = "BlockCommentTrivia", e[e.LineBreakTrivia = 14] = "LineBreakTrivia", e[e.Trivia = 15] = "Trivia", e[e.Unknown = 16] = "Unknown", e[e.EOF = 17] = "EOF";
})(re || (re = {}));
var bft = ee;
var ie;
(function (e) {
  e[e.InvalidSymbol = 1] = "InvalidSymbol", e[e.InvalidNumberFormat = 2] = "InvalidNumberFormat", e[e.PropertyNameExpected = 3] = "PropertyNameExpected", e[e.ValueExpected = 4] = "ValueExpected", e[e.ColonExpected = 5] = "ColonExpected", e[e.CommaExpected = 6] = "CommaExpected", e[e.CloseBraceExpected = 7] = "CloseBraceExpected", e[e.CloseBracketExpected = 8] = "CloseBracketExpected", e[e.EndOfFileExpected = 9] = "EndOfFileExpected", e[e.InvalidCommentToken = 10] = "InvalidCommentToken", e[e.UnexpectedEndOfComment = 11] = "UnexpectedEndOfComment", e[e.UnexpectedEndOfString = 12] = "UnexpectedEndOfString", e[e.UnexpectedEndOfNumber = 13] = "UnexpectedEndOfNumber", e[e.InvalidUnicode = 14] = "InvalidUnicode", e[e.InvalidEscapeCharacter = 15] = "InvalidEscapeCharacter", e[e.InvalidCharacter = 16] = "InvalidCharacter";
})(ie || (ie = {}));
function YUt(e, i, r, n) {
  return ne(e, i, r, n);
}
function Egn(e, i) {
  let r = i.slice(0).sort((itemA, itemB) => {
      let u = itemA.offset - itemB.offset;
      if (u === 0) return itemA.length - itemB.length;
      return u;
    }),
    n = e.length;
  for (let l = r.length - 1; l >= 0; l--) {
    let s = r[l];
    if (s.offset + s.length <= n) e = D(e, s);else throw Error("Overlapping edit");
    n = s.offset;
  }
  return e;
}
import { open as me, readFile as ke, stat as de } from "fs/promises";
var XUt = "__unparsedToolInput";
function _Ue(e) {
  if (typeof e !== "object" || e === null || Array.isArray(e)) return !1;
  let i = Object.entries(e);
  if (i.length !== 1) return !1;
  let [r, n] = i[0];
  return r === XUt && typeof n === "object" && n !== null && typeof n.raw === "string" && typeof n.len === "number";
}
function g2(e) {
  if (typeof e !== "object" || e === null || Array.isArray(e)) return null;
  let i = Object.entries(e);
  if (i.length !== 1) return null;
  let [r, n] = i[0];
  if (r !== XUt || typeof n !== "object" || n === null) return null;
  let {
    raw: raw,
    len: len
  } = n;
  if (typeof raw !== "string" || typeof len !== "number") return null;
  return `input JSON failed to parse \u2014 ${len} bytes`;
}
var be = 8192;
function se(e, i) {
  try {
    return {
      ok: !0,
      value: JSON.parse(Jo(e))
    };
  } catch (error) {
    if (i) d(st(error, `safeParseJSON: invalid JSON (${error instanceof Error ? error.constructor.name : typeof error}, ${e.length} bytes)`));
    return {
      ok: !1
    };
  }
}
class fe {
  cached = zI(se, e => e, 50);
  cache = this.cached.cache;
  parse(e, i) {
    return this.cached(e, i);
  }
}
var le = new fe();
function Q1(e) {
  return e.trim().replace(/^```[a-zA-Z]*\s*/, "").replace(/\s*```$/, "").trim();
}
var ct = Object.assign(function (i, r = !0) {
  if (!i) return null;
  let n = i.length > be ? se(i, r) : le.parse(i, r);
  return n.ok ? n.value : null;
}, {
  cache: le.cache
});
function Jye(e) {
  if (!e) return null;
  try {
    return bft(Jo(e));
  } catch (error) {
    return t(`Failed to parse JSONC: ${error instanceof Error ? error.message : String(error)}`, {
      level: "error"
    }), null;
  }
}
function Ojr() {
  return Bun.JSONL?.parseChunk;
}
function ye(e, i) {
  let r = e.length,
    n = i(e);
  if (!n.error || n.done || n.read >= r) return n.values;
  let {
    values: values,
    read: read
  } = n;
  while (read < r) {
    let u = typeof e === "string" ? e.indexOf(`
`, read) : e.indexOf(10, read);
    if (u === -1) break;
    read = u + 1;
    let f = i(e, read);
    if (f.values.length > 0) values = values.concat(f.values);
    if (!f.error || f.done || f.read >= r) break;
    read = f.read;
  }
  return values;
}
function Te(e) {
  let i = e.length,
    r = 0;
  if (e[0] === 239 && e[1] === 187 && e[2] === 191) r = 3;
  let n = [];
  while (r < i) {
    let l = e.indexOf(10, r);
    if (l === -1) l = i;
    let s = e.toString("utf8", r, l).trim();
    if (r = l + 1, !s) continue;
    try {
      n.push(JSON.parse(s));
    } catch {}
  }
  return n;
}
function Oe(e) {
  let i = Jo(e),
    r = i.length,
    n = 0,
    l = [];
  while (n < r) {
    let s = i.indexOf(`
`, n);
    if (s === -1) s = r;
    let u = i.substring(n, s).trim();
    if (n = s + 1, !u) continue;
    try {
      l.push(JSON.parse(u));
    } catch {}
  }
  return l;
}
function bUe(e) {
  let i = Ojr();
  if (i) return ye(e, i);
  if (typeof e === "string") return Oe(e);
  return Te(e);
}
var P = 104857600;
async function C8e(e) {
  let {
    size: size
  } = await de(e);
  if (size <= P) return bUe(await ke(e));
  await using r = await me(e, "r");
  let n = Buffer.allocUnsafe(P),
    l = 0,
    s = size - P;
  while (l < P) {
    let {
      bytesRead: bytesRead
    } = await r.read(n, l, P - l, s + l);
    if (bytesRead === 0) break;
    l += bytesRead;
  }
  let u = n.indexOf(10);
  if (u !== -1 && u < l - 1) return bUe(n.subarray(u + 1, l));
  return bUe(n.subarray(0, l));
}
function Mjr(e, i, r) {
  if (!e || e.trim() === "") return b({
    [i]: r
  }, null, 4);
  let n = Jo(e);
  try {
    let l = [],
      s = bft(n, l);
    if (l.length > 0 || s === null || typeof s !== "object" || Array.isArray(s)) return e;
    let u = YUt(n, [i], r, {
      formattingOptions: {
        insertSpaces: !0,
        tabSize: 4
      }
    });
    if (!u || u.length === 0) return n;
    return Egn(n, u);
  } catch (error) {
    return t(`Failed to set JSONC property "${i}": ${error instanceof Error ? error.message : String(error)}`, {
      level: "error"
    }), e;
  }
}
function LFo(e, i) {
  try {
    if (!e || e.trim() === "") return b([i], null, 4);
    let r = Jo(e),
      n = bft(r);
    if (Array.isArray(n)) {
      let l = n.length,
        f = YUt(r, l === 0 ? [0] : [l], i, {
          formattingOptions: {
            insertSpaces: !0,
            tabSize: 4
          },
          isArrayInsertion: !0
        });
      if (!f || f.length === 0) {
        let o = [...n, i];
        return b(o, null, 4);
      }
      return Egn(r, f);
    } else return b([i], null, 4);
  } catch (error) {
    return t(`Failed to insert item into user JSONC array, falling back to overwrite: ${error instanceof Error ? error.message : String(error)}`, {
      level: "error"
    }), b([i], null, 4);
  }
}
export { Jo, bft, YUt, Egn, XUt, _Ue, g2, Q1, ct, Jye, Ojr, bUe, C8e, Mjr, LFo };