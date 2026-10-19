// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { P5, lQ, mjo, q4s, iXn, K4s } from "B:/~BUN/root/chunk-nvgn0qsr.js";
import { O } from "B:/~BUN/root/chunk-nggrknsv.js";
import { k } from "B:/~BUN/root/chunk-3aez4b53.js";
import { pn } from "B:/~BUN/root/chunk-6za2ez23.js";
import { An } from "B:/~BUN/root/chunk-rvc0n7zm.js";
import { ua, fjo, z4s, HW, V4s } from "B:/~BUN/root/chunk-pp80ffk4.js";
import { Us, ie } from "B:/~BUN/root/chunk-t7350kw8.js";
import { Zt } from "B:/~BUN/root/chunk-ekswf6ps.js";
var Ae = /^\[M[\x60-\x7f][\x20-\uffff]?$/,
  ke = /^\x1b\]8(?:;|\r?$)/,
  Re = "\x1B]8;;\x1B\\",
  Ie = /^(?:\[(?:\d{1,2}(?:;\d{1,2})?[~^$@]|(?:1;\d{1,2})?[A-DFHa-d])|O[A-DFHa-d])/;
function J0e(e) {
  let t = "ground",
    n = "",
    s = e?.x10Mouse ?? !1,
    r = e?.escPrefixedKeyIsAlt,
    u = e?.stringsEndAtLineFeed ?? !1;
  return {
    feed(o) {
      let l = oe(o, t, n, !1, s, r?.() ?? !1, u);
      return t = l.state.state, n = l.state.buffer, l.tokens;
    },
    flush() {
      let o = oe("", t, n, !0, s, r?.() ?? !1, u);
      return t = o.state.state, n = o.state.buffer, o.tokens;
    },
    reset() {
      t = "ground", n = "";
    },
    buffer() {
      return n;
    }
  };
}
function rXn(e) {
  let t = J0e(),
    n = t.feed(e);
  return n.push(...t.flush()), n;
}
function oe(e, state, n, s, r, u, o) {
  let tokens = [],
    state_2 = {
      state: state,
      buffer: ""
    },
    a = n + e,
    i = 0,
    p = 0,
    d = 0,
    x = () => {
      if (i > p) {
        let value = a.slice(p, i);
        if (value) tokens.push({
          type: "text",
          value: value
        });
      }
      p = i;
    },
    b = value_2 => {
      if (value_2) tokens.push({
        type: "sequence",
        value: value_2
      });
      state_2.state = "ground", p = i;
    };
  while (i < a.length) {
    let c = a.charCodeAt(i);
    switch (state_2.state) {
      case "ground":
        if (c === P5.ESC) x(), d = i, state_2.state = "escape", i++;else if (c === P5.DEL) {
          if (Ae.test(a.slice(p, i))) i++;else x(), i++, tokens.push({
            type: "text",
            value: "\x7F"
          }), p = i;
        } else if (r && c < 32 && (a.length < 64 || c === P5.BS)) {
          if (x(), i++, c === 13 && a.charCodeAt(i) === 10) i++;
          tokens.push({
            type: "text",
            value: String.fromCharCode(c)
          }), p = i;
        } else i++;
        break;
      case "escape":
        if (c === lQ.CSI) state_2.state = "csi", i++;else if (c === lQ.OSC) state_2.state = "osc", i++;else if (c === lQ.DCS) state_2.state = "dcs", i++;else if (c === lQ.APC && (!r || i + 1 >= a.length || ae(a, i + 1, i + 1))) state_2.state = "apc", i++;else if (!r && c === lQ.PM) state_2.state = "pm", i++;else if (!r && (c === lQ.SOS || c === 107)) state_2.state = "sos", i++;else if (c === 79) state_2.state = "ss3", i++;else if (r && (c === 32 || c === 13 || c === 10 || c === 9)) i++, tokens.push({
          type: "text",
          value: a.slice(d, i)
        }), state_2.state = "ground", p = i;else if (r && iXn(c)) tokens.push({
          type: "text",
          value: a.slice(d, i)
        }), state_2.state = "ground", p = i;else if (iXn(c)) state_2.state = "escapeIntermediate", i++;else if (c === P5.DEL) i++, tokens.push({
          type: "text",
          value: a.slice(d, i)
        }), state_2.state = "ground", p = i;else if (mjo(c)) i++, b(a.slice(d, i));else if (c === P5.ESC && u && i === d + 1 && Ie.test(a.slice(i + 1, i + 1 + 8))) i++;else if (c === P5.ESC) b(a.slice(d, i)), d = i, state_2.state = "escape", i++;else if (c < 32) i++, tokens.push({
          type: "text",
          value: a.slice(d, i)
        }), state_2.state = "ground", p = i;else state_2.state = "ground", p = d;
        break;
      case "escapeIntermediate":
        if (iXn(c)) i++;else if (mjo(c)) i++, b(a.slice(d, i));else state_2.state = "ground", p = d;
        break;
      case "csi":
        if (r && c === 77 && i - d === 2 && (i + 1 >= a.length || a.charCodeAt(i + 1) >= 32) && (i + 2 >= a.length || a.charCodeAt(i + 2) >= 32) && (i + 3 >= a.length || a.charCodeAt(i + 3) >= 32)) {
          if (i + 4 <= a.length) i += 4, b(a.slice(d, i));else i = a.length;
          break;
        }
        if (K4s(c)) i++, b(a.slice(d, i));else if (q4s(c) || iXn(c)) i++;else state_2.state = "ground", p = d;
        break;
      case "ss3":
        if (c >= 64 && c <= 126) i++, b(a.slice(d, i));else state_2.state = "ground", p = d;
        break;
      case "osc":
      case "dcs":
      case "apc":
      case "pm":
      case "sos":
        if (r && state_2.state === "apc" && i >= d + 2 && !ae(a, d + 2, i)) b(a.slice(d, d + 2)), p = d + 2;else if (c === P5.BEL && state_2.state !== "pm" && state_2.state !== "sos") i++, b(a.slice(d, i));else if (c === P5.ESC && i + 1 < a.length) {
          if (a.charCodeAt(i + 1) === lQ.ST) i += 2, b(a.slice(d, i));else b(a.slice(d, i)), d = i, state_2.state = "escape", i++;
        } else if (c === P5.CAN || c === P5.SUB) i++, b(a.slice(d, i));else if (o && c === P5.LF) b(ke.test(a.slice(d, Math.min(i, d + 5))) ? Re : "");else i++;
        break;
    }
  }
  if (state_2.state === "ground") x();else if (s) {
    let value_3 = a.slice(d);
    if (value_3) tokens.push({
      type: "sequence",
      value: value_3
    });
    state_2.state = "ground";
  } else state_2.buffer = a.slice(d);
  return {
    tokens: tokens,
    state: state_2
  };
}
function ae(e, t, n) {
  let s = e[n],
    r = n - t;
  if (r === 0) return s === "G";
  if (r === 1) return s === "i" || s === "O" || s === "E";
  let u = e[t + 1];
  if (u === "i") return r > 2 || s === "=";
  let o = e.charCodeAt(n),
    l = o === P5.ESC || o === P5.BEL;
  if (u === "O") return r === 2 ? s === "K" : l;
  let f = e.indexOf(":", t + 3);
  if (f !== -1 && f < n) return !0;
  return s >= "A" && s <= "Z" || r > 2 && (s === ":" || l);
}
var Mhe = 8,
  Ce = /(\t|\n)/,
  _e = /[\x1b\x9b]/g,
  Oe = /[\x90\x98\x9d-\x9f]/g,
  Ne = /[\x1b\x90\x98\x9b\x9d-\x9f]/,
  $e = /^\x1b[P\]X^_k]/,
  ve = /^\x1b[P_].*\x07$|\x9c/s;
function pde(e, t = Mhe) {
  return e.includes("\t") || ijo([e]) ? sjo([e], t).join("") : e;
}
function sjo(e, t = Mhe) {
  let n = 0,
    s = "";
  return e.map((item, index) => {
    if (!B1t(item) && !item.includes("\t")) {
      let l = item.lastIndexOf(`
`) + 1;
      if (l > 0) n = 0, s = "";
      return s += l > 0 ? item.slice(l) : item, item;
    }
    let o = "";
    for (let l of le(item, index === e.length - 1)) {
      let f = ce(l);
      if (f === void 0) {
        o += l.value, s += l.value;
        continue;
      }
      for (let a of f.split(Ce)) if (a === "\t") {
        n += ie(s);
        let i = t - n % t;
        o += " ".repeat(i), n += i, s = "";
      } else if (a === `
`) o += a, n = 0, s = "";else o += a, s += a;
    }
    return o;
  });
}
function B1t(e) {
  return Ne.test(e);
}
function ijo(e) {
  return e.some((item, index) => B1t(item) && le(item, index === e.length - 1).some(item => (ce(item) ?? item.value) !== item.value));
}
function le(value_4, t) {
  if (!B1t(value_4)) return [{
    type: "text",
    value: value_4
  }];
  let n = J0e(),
    s = n.feed(value_4),
    value_5 = n.buffer();
  if (value_5 !== "") s.push({
    type: t && !$e.test(value_5) ? "sequence" : "text",
    value: value_5
  });
  return s;
}
function ce(e) {
  if (e.type === "text" || e.value.includes(`
`) || ve.test(e.value)) return ue(e.value.replace(_e, "\x18"));
  if (e.value.startsWith("\x1Bk")) return ue(e.value.replace(/\x9b/g, "\x18"));
  return;
}
function ue(e) {
  return e.replace(Oe, "\uFFFD");
}
var tGe = e => `\\x1b\\[[0-9${e}]*m`;
var regExp = new RegExp(tGe(";:"), "g"),
  fe = /\x1b\]8;[^\x07\x1b]*(?:\x07|\x1b\\)/y,
  regExp_2 = new RegExp(`\\r((?:${tGe(";:")})+)\\n`, "g"),
  V = [22, 22, 23, 23, 24, 25, 27, 28, 29, 39, 49, 54, 55, 75],
  Fe = /^\x1b\[[34]8;(?:5;\d+|2;\d+;\d+;\d+)m$/,
  Z = 9,
  ee = 10,
  he = new Map([[1, 0], [2, 1], [3, 2], [20, 3], [4, 4], [21, 4], [5, 5], [6, 5], [7, 6], [8, 7], [9, 8], [51, 11], [52, 11], [53, 12], [73, 13], [74, 13]]);
function Lc(e, t, n) {
  if (!(t > 0)) return e;
  if (!e.includes("\x1B[")) return q(e, t, n);
  let s = e.replace(regExp, "");
  if (s.length < e.length && s.includes("\x1B") && pn(s) !== pn(e)) return q(e.replace(regExp_2, `$1\r
`), t, n);
  let r = q(s, t, n);
  if (r === s && !r.includes(`
`)) return e;
  let u = e.match(regExp);
  if (u === null) return r;
  let o = e.split(regExp),
    l = [];
  for (let S = 0, P = 0; S < u.length; S++) l.push(P += o[S].length);
  let f = ajo(),
    a = [],
    i = 0,
    p = 0,
    d = "",
    x = "",
    b = !0,
    c = !1,
    v = !0,
    E = 0,
    _ = 0,
    h = 0,
    T = -1,
    F = -1,
    B = -1,
    Y = [],
    U = [],
    g = [],
    w = [],
    W = [],
    A = [],
    z = [];
  for (;;) {
    let S = de(s, E, w, W),
      P = de(r, h, Y, U),
      M = w[S],
      G = Y[P];
    for (let m = 0; m < S; m++) A[m] = -1;
    let D = S - 1,
      R = 0;
    for (let m = P - 1; m >= -1 && v; m--) {
      let y = m < 0 ? -1 : U[m];
      if (y === 10 || typeof y === "string") {
        g[R++] = m;
        continue;
      }
      let I = D;
      while (I >= 0 && W[I] !== y) I--;
      v = m < 0 || I >= 0;
      for (let j = 0; D > I; D--) {
        let K = W[D],
          C = K === 10 || typeof K === "string" ? j : R;
        while (C < R && U[g[C]] !== K) C++;
        if (C < R) A[D] = g[C], j = C + 1;
      }
      if (I >= 0) A[I] = m, D = I - 1;
      R = 0;
    }
    if (!v) break;
    let H = i,
      L = i - 1;
    for (let m = 0; l[L + 1] <= M;) {
      let y = l[++L];
      while (m < S && (w[m] < y || A[m] < 0)) m++;
      z[L - H] = y <= E ? 0 : m < S ? A[m] : P;
    }
    for (let m = 0; m <= P; m++) {
      let y = Y[m],
        I = i <= L && z[i - H] <= m,
        j = m < P && U[m] === 10;
      if (c && (I || m < P && !j)) {
        if (c = !1, x !== "") a.push(r.slice(_, y), x), _ = y, b = !0;
      }
      if (I) {
        a.push(r.slice(_, y)), _ = y;
        while (i <= L && z[i - H] <= m) a.push(u[i++]);
        b = !0;
      }
      if (j) {
        if (p < i) {
          while (p < i) ljo(u[p++], f);
          d = "", x = "";
          let K = 0;
          for (let C = 0; C < f.length; C++) {
            if (f[C] === "") continue;
            if (x += `\x1B[${f[C]}m`, V[C] !== K) K = V[C], d = `\x1B[${K}m${d}`;
          }
        }
        if (b && d !== "") a.push(r.slice(_, y), d), _ = y;
        b = !1, c = !0;
      }
    }
    if (E = M, h = G, h >= r.length) {
      v = E >= s.length;
      break;
    }
    if (c) {
      if (c = !1, x !== "") a.push(r.slice(_, h), x), _ = h, b = !0;
    }
    if (T < h) T = r.indexOf(`
`, h), T = T === -1 ? r.length : T;
    if (F < h) F = r.indexOf("\x1B", h), F = F === -1 ? r.length : F;
    if (B < E) B = s.indexOf("\x1B", E), B = B === -1 ? s.length : B;
    let N = Math.min(T - h, F - h, B - E, i < l.length ? l[i] - E : r.length);
    while (N > 0 && be(r.charCodeAt(h + N - 1))) N--;
    if (N < 1 || !s.startsWith(r.slice(h, h + N), E)) {
      if (N = 1, r.charCodeAt(h) !== s.charCodeAt(E)) {
        v = !1;
        break;
      }
    }
    E += N, h += N;
  }
  if (!v) return q(e, t, n);
  return a.push(r.slice(_)), a.join("");
}
function de(e, t, n, s) {
  let r = 0,
    u = t;
  for (;; r++) {
    let o = e.charCodeAt(u);
    fe.lastIndex = u;
    let l = o === 27 ? fe.exec(e) : null;
    if (l === null && !be(o)) break;
    n[r] = u, s[r] = l !== null ? l[0] : o === 13 ? 10 : o, u += l !== null ? l[0].length : o === 13 && e.charCodeAt(u + 1) === 10 ? 2 : 1;
  }
  return n[r] = u, r;
}
function be(e) {
  return e === 32 || e >= 9 && e <= 13;
}
function ajo() {
  return V.map(() => "");
}
function ljo(e, t) {
  if (!e.endsWith("m")) return;
  if (Fe.test(e)) {
    t[e.charCodeAt(2) === 51 ? Z : ee] = e.slice(2, -1);
    return;
  }
  let n = e.length === 5 ? e.charCodeAt(2) - 48 : 0,
    s = e.charCodeAt(e.length - 2) - 48;
  if ((e.length === 4 || e.length === 5) && n >= 0 && n <= 9 && s >= 0 && s <= 9) {
    me(n * 10 + s, t);
    return;
  }
  let r = e.slice(2, -1).split(";");
  for (let u = 0; u < r.length; u++) {
    let o = r[u],
      l = o === "" ? 0 : parseInt(o, 10);
    if (l === 38 || l === 48 || l === 58) {
      let f = parseInt(r[u + 1] ?? "", 10),
        a = o.includes(":") ? 1 : f === 5 ? 3 : f === 2 ? 5 : 1;
      if (l !== 58 && (a > 1 || o.includes(":"))) {
        if (u + a <= r.length) t[l === 38 ? Z : ee] = r.slice(u, u + a).join(";");
      }
      u += a - 1;
    } else if (l === 4 && o.includes(":")) t[he.get(4)] = o === "4:0" ? "" : /^4:[1-5]$/.test(o) ? o : "4";else me(l, t);
  }
}
function me(e, t) {
  let n = e >= 30 && e <= 37 || e >= 90 && e <= 97 ? Z : e >= 40 && e <= 47 || e >= 100 && e <= 107 ? ee : he.get(e);
  if (n !== void 0) t[n] = String(e);else if (e === 0) t.fill("");else for (let s = 0; s < t.length; s++) if (V[s] === e) t[s] = "";
}
var Pe = "\uDB80\uDC00",
  Me = "\uD87E\uDE1D",
  te = /[\u{F0000}\u{2FA1D}]/gu,
  Be = /^\x1b(?:\[[0-?]*[ -/]*[@-~]|\][^\x00-\x1f\x7f-\x9f]*(?:\x07|\x1b\\))$/,
  regExp_3 = new RegExp(`^(?:${tGe(";:")}$|\\x1b\\]8;)`),
  X = /[^\x00-\u02FF\u0370-\u0482\u048A-\u052F\u2000-\u200B\u2010-\u205F\u2070-\u20CF\u2100-\u2BFF\u2E80-\u3029\u3030-\u3098\u309B-\uA4CF\uAC00-\uD7A3\uF900-\uFAFF\uFF01-\uFF9D\uFFE0-\uFFEE\u{1f000}-\u{1f1e5}\u{1f200}-\u{1f3fa}\u{1f400}-\u{1faff}]/gu;
function q(e, t, n, s = !0) {
  if (e.search(X) === -1) return Bun.wrapAnsi(e, t, n);
  let r = "",
    u = [],
    o = [];
  for (let g of rXn(e)) if (g.type === "sequence") u.push(g.value), o.push(r.length);else r += g.value;
  let l = {
      starts: [],
      ends: [],
      handedAs: [],
      restoredAs: []
    },
    f = ua(),
    a = 0,
    i = !1,
    p;
  X.lastIndex = 0;
  while ((p = X.exec(r)) !== null) {
    let index_2 = p.index;
    while (index_2 > 0 && !ge(r.charCodeAt(index_2 - 1))) index_2--;
    let index_3 = p.index;
    while (index_3 < r.length && !ge(r.charCodeAt(index_3))) index_3++;
    X.lastIndex = index_3;
    let W = r.slice(index_2, index_3);
    while (a < o.length && o[a] < index_2) a++;
    let A = a,
      z = !B1t(W);
    while (A < o.length && o[A] <= index_3) z = Be.test(u[A]) && z, A++;
    if (!z && A > a) {
      let S = index_2;
      for (; a < o.length && o[a] < index_3; a++) if (o[a] > S) Q(r, S, o[a], l), S = o[a];
      Q(r, S, index_3, l);
      continue;
    }
    for (let {
      segment: segment,
      index: index_4
    } of f.segment(W)) {
      if (segment.length === 1) continue;
      let M = index_2 + index_4,
        G = M + segment.length,
        D = xe(segment);
      while (a < o.length && o[a] <= M) a++;
      let R = a;
      while (R < o.length && o[R] < G) R++;
      if (R === a) {
        if (D !== "") ne(l, M, G, D, segment);
        continue;
      }
      if (D === "" || ie(r.slice(M, o[a])) === 0) {
        for (let m = a; m <= R; m++) {
          let y = m === a ? M : o[m - 1],
            I = m === R ? G : o[m];
          Q(r, y, I, l);
        }
        continue;
      }
      let H = D,
        L = "",
        N = M;
      for (let m = a; m < R; m++) {
        let y = u[m];
        if (L += r.slice(N, o[m]), N = o[m], s && regExp_3.test(y)) H += y, i = !0;else L += y;
      }
      ne(l, M, G, H, L + r.slice(N, G));
    }
  }
  let {
    starts: starts,
    ends: ends,
    handedAs: handedAs,
    restoredAs: restoredAs
  } = l;
  if (starts.length === 0) return Bun.wrapAnsi(e, t, n);
  let v = [],
    E = [],
    _ = e.search(te) !== -1,
    h = 0,
    T = 0;
  for (let g = 0; g <= starts.length; g++) {
    let w = g < starts.length ? starts[g] : r.length;
    for (; T < u.length && o[T] <= w; T++) {
      let A = r.slice(h, o[T]);
      pe(E, v, A, _), E.push(u[T]), h = o[T];
    }
    let W = r.slice(h, w);
    if (pe(E, v, W, _), g === starts.length) break;
    E.push(handedAs[g]), v.push(restoredAs[g]), h = ends[g];
    while (T < u.length && o[T] < h) T++;
  }
  let F = E.join("");
  if (i && F.split(We).every(item => ie(item) <= t)) return q(e, t, n, !1);
  let B = Bun.wrapAnsi(F, t, n);
  if (B === F) return e;
  let Y = 0,
    U = "";
  for (let g of rXn(B)) U += g.type === "sequence" ? g.value : g.value.replace(te, w => v[Y++] ?? w);
  return U;
}
function ge(e) {
  return e === 10 || e === 13;
}
var We = /\r\n?|\n/;
function ne(e, t, n, s, r) {
  e.starts.push(t), e.ends.push(n), e.handedAs.push(s), e.restoredAs.push(r);
}
function Q(e, t, n, s) {
  let r = e.slice(t, n);
  if (r.search(X) === -1) return;
  for (let {
    segment: segment_2,
    index: index_5
  } of ua().segment(r)) {
    let l = xe(segment_2);
    if (l !== "") ne(s, t + index_5, t + index_5 + segment_2.length, l, segment_2);
  }
}
function xe(e) {
  let t = e.codePointAt(0) > 65535 ? 2 : 1;
  if (e.length <= t) return "";
  let n = ie(e);
  return n === 1 ? Pe : n === 2 ? Me : "";
}
function pe(e, t, n, s) {
  if (n === "") return;
  if (s) for (let r of n.match(te) ?? []) t.push(r);
  e.push(n);
}
function Fd(e, t) {
  if (ie(e) <= t) return e;
  if (t <= 0) return "\u2026";
  if (t < 5) return mt(e, t);
  let n = e.lastIndexOf("/"),
    s = n >= 0 ? n : e.lastIndexOf("\\"),
    r = s >= 0 ? e.slice(s) : e,
    u = s >= 0 ? e.slice(0, s) : "",
    o = ie(r);
  if (o >= t - 1) return n0(e, t);
  let l = t - 1 - o;
  return LW(u, l) + "\u2026" + r;
}
function mt(e, t) {
  if (ie(e) <= t) return e;
  if (t <= 1) return "\u2026";
  let n = 0,
    s = "";
  for (let {
    segment: segment_3
  } of ua().segment(e)) {
    let u = ie(segment_3);
    if (n + u > t - 1) break;
    s += segment_3, n += u;
  }
  return s + "\u2026";
}
function n0(e, t) {
  if (ie(e) <= t) return e;
  if (t <= 1) return "\u2026";
  let n = t - 1,
    s = [...ua().segment(e)],
    r = 0,
    u = s.length;
  for (let o = s.length - 1; o >= 0; o--) {
    let l = ie(s[o].segment);
    if (r + l > n) break;
    r += l, u = o;
  }
  return `\u2026${s.slice(u).map(item => item.segment).join("")}`;
}
function LW(e, t) {
  if (ie(e) <= t) return e;
  if (t <= 0) return "";
  let n = 0,
    s = "";
  for (let {
    segment: segment_4
  } of ua().segment(e)) {
    let u = ie(segment_4);
    if (n + u > t) break;
    s += segment_4, n += u;
  }
  return s;
}
var Ue = 8,
  ze = 40;
function ybt(e, t) {
  return mt(e, Math.max(ze, t - Ue));
}
function es(e, t, n = !1) {
  let s = e;
  if (n) {
    let r = e.indexOf(`
`);
    if (r !== -1) {
      if (s = e.substring(0, r), ie(s) + 1 > t) return mt(`${s}\u2026`, t);
      return `${s}\u2026`;
    }
  }
  if (ie(s) <= t) return s;
  return mt(s, t);
}
function tZe(e, t) {
  let n = [],
    s = "",
    r = 0;
  for (let {
    segment: segment_5
  } of ua().segment(e)) {
    let o = ie(segment_5);
    if (r + o <= t) s += segment_5, r += o;else {
      if (s) n.push(s);
      s = segment_5, r = o;
    }
  }
  if (s) n.push(s);
  return n;
}
function oXn(e, t, n) {
  if (n <= 0 || t <= 0) return "";
  let s = Lc(e, t, {
    trim: !0,
    hard: !0
  }).split(`
`);
  if (s.length <= n) return s.join(`
`);
  let r = s.slice(0, n);
  return r[n - 1] = mt((r[n - 1] ?? "") + "\u2026", t), r.join(`
`);
}
function STe(e) {
  return `${(e / 1000).toFixed(1)}s`;
}
function rn(e, t) {
  if (e < 60000) {
    if (e === 0) return "0s";
    if (e < 1) return `${(e / 1000).toFixed(1)}s`;
    return `${Math.floor(e / 1000).toString()}s`;
  }
  let n = Math.floor(e / 86400000),
    s = Math.floor(e % 86400000 / 3600000),
    r = Math.floor(e % 3600000 / 60000),
    u = Math.round(e % 60000 / 1000);
  if (u === 60) u = 0, r++;
  if (r === 60) r = 0, s++;
  if (s === 24) s = 0, n++;
  let o = t?.hideTrailingZeros;
  if (t?.mostSignificantOnly) {
    if (n > 0) return `${n}d`;
    if (s > 0) return `${s}h`;
    if (r > 0) return `${r}m`;
    return `${u}s`;
  }
  if (n > 0) {
    if (o && s === 0 && r === 0) return `${n}d`;
    if (o && r === 0) return `${n}d ${s}h`;
    return `${n}d ${s}h ${r}m`;
  }
  if (s > 0) {
    if (o && r === 0 && u === 0) return `${s}h`;
    if (o && u === 0) return `${s}h ${r}m`;
    return `${s}h ${r}m ${u}s`;
  }
  if (r > 0) {
    if (o && u === 0) return `${r}m`;
    return `${r}m ${u}s`;
  }
  return `${u}s`;
}
function uR(e) {
  let t = e >= 60000 ? Math.round(e / 60000) * 60000 : e;
  return rn(t, {
    hideTrailingZeros: !0
  });
}
function Dhe(e) {
  let t = Math.max(0, Math.floor(e / 1000));
  if (t < 60) return `${t}s`;
  let n = Math.floor(t / 60);
  if (n < 60) return `${n}m${String(t % 60).padStart(2, "0")}s`;
  let s = Math.floor(n / 60);
  if (s < 24) return `${s}h${String(n % 60).padStart(2, "0")}m`;
  return `${Math.floor(s / 24)}d${String(s % 24).padStart(2, "0")}h`;
}
var Ge = {
    notation: "compact",
    maximumFractionDigits: 1,
    minimumFractionDigits: 1
  },
  Ke = {
    notation: "compact",
    maximumFractionDigits: 1,
    minimumFractionDigits: 0
  };
function ei(e) {
  let t = e >= 1000;
  return V4s("en-US", t ? Ge : Ke).format(e).toLowerCase();
}
function cr(e) {
  return ei(e).replace(".0", "");
}
function aBr(e, t = 4) {
  return `$${e > 0.5 ? He(e, 100).toFixed(2) : e.toFixed(t)}`;
}
function He(e, t) {
  return Math.round(e * t) / t;
}
var djo = "costs may be inaccurate due to usage of unknown models",
  cjo = "at your organization's configured rates";
function ujo(e) {
  return `${ei(e.inputTokens)} input, ${ei(e.outputTokens)} output, ${ei(e.cacheReadInputTokens)} cache read, ${ei(e.cacheCreationInputTokens)} cache write` + (e.webSearchRequests > 0 ? `, ${ei(e.webSearchRequests)} web search` : "");
}
function NW(e) {
  if (e < 20) return "< 20";
  return `~${cr(Math.round(e / 10) * 10)}`;
}
function FW(e, t = {}) {
  let {
      style = "narrow",
      numeric = "always",
      maxUnit: maxUnit,
      now = new Date()
    } = t,
    o = e.getTime() - now.getTime(),
    l = Math.trunc(o / 1000),
    f = [{
      unit: "year",
      seconds: 31536000,
      shortUnit: "y"
    }, {
      unit: "month",
      seconds: 2592000,
      shortUnit: "mo"
    }, {
      unit: "week",
      seconds: 604800,
      shortUnit: "w"
    }, {
      unit: "day",
      seconds: 86400,
      shortUnit: "d"
    }, {
      unit: "hour",
      seconds: 3600,
      shortUnit: "h"
    }, {
      unit: "minute",
      seconds: 60,
      shortUnit: "m"
    }, {
      unit: "second",
      seconds: 1,
      shortUnit: "s"
    }],
    a = maxUnit ? f.filter(item => item.seconds <= 86400) : f;
  for (let {
    unit: unit,
    seconds: seconds,
    shortUnit: shortUnit
  } of a) if (Math.abs(l) >= seconds) {
    let x = Math.trunc(l / seconds);
    if (style === "narrow") return l < 0 ? `${Math.abs(x)}${shortUnit} ago` : `in ${x}${shortUnit}`;
    return fjo("long", numeric).format(x, unit);
  }
  if (style === "narrow") return l <= 0 ? "0s ago" : "in 0s";
  return fjo(style, "auto").format(0, "second");
}
function mv(e, t = {}) {
  let {
    now: now_2 = new Date(),
    ...s
  } = t;
  if (e > now_2) return FW(e, {
    ...s,
    now: now_2
  });
  return FW(e, {
    ...s,
    numeric: "always",
    now: now_2
  });
}
function emn(e) {
  let t = e.fileSize !== void 0 ? Zt(e.fileSize) : `${e.messageCount} messages`,
    n = [mv(e.modified, {
      style: "short"
    }), ...(e.sessionKind === "bg" ? ["bg"] : []), ...(e.gitBranch ? [e.gitBranch] : []), t];
  if (e.tag) n.push(`#${e.tag}`);
  if (e.agentSetting) n.push(`@${e.agentSetting}`);
  if (e.prNumber) n.push(e.prRepository ? `${e.prRepository}#${e.prNumber}` : `#${e.prNumber}`);
  return n.join(" \xB7 ");
}
function Se(e, timeZone) {
  if (timeZone === void 0) return {
    minutes: e.getMinutes(),
    year: e.getFullYear()
  };
  let n = new Map(HW("en-US", {
    timeZone: timeZone,
    year: "numeric",
    minute: "numeric"
  }).formatToParts(e).map(item => [item.type, item.value]));
  return {
    minutes: Number(n.get("minute")),
    year: Number(n.get("year"))
  };
}
function eP(e, t = !1, n = !0, s = !1, timeZone_2) {
  if (!e) return;
  let date = new Date(e * 1000),
    date_2 = new Date(),
    {
      minutes: minutes,
      year: year
    } = Se(date, timeZone_2),
    a = t || timeZone_2 !== void 0 ? ` (${timeZone_2 ?? z4s()})` : "",
    i = (date.getTime() - date_2.getTime()) / 3600000;
  if (s || i > 24) {
    let d = {
      month: "short",
      day: "numeric",
      hour: n ? "numeric" : void 0,
      minute: !n || minutes === 0 ? void 0 : "2-digit",
      hour12: n ? !0 : void 0,
      timeZone: timeZone_2
    };
    if (year !== Se(date_2, timeZone_2).year) d.year = "numeric";
    return date.toLocaleString("en-US", d).replace(/[ \u202f]([AP]M)/i, (b, c) => c.toLowerCase()) + a;
  }
  return date.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: minutes === 0 ? void 0 : "2-digit",
    hour12: !0,
    timeZone: timeZone_2
  }).replace(/[ \u202f]([AP]M)/i, (d, x) => x.toLowerCase()) + a;
}
function _bt(e, t = !1, n = !0, s = !1) {
  let date_3 = new Date(e);
  return `${eP(Math.floor(date_3.getTime() / 1000), t, n, s)}`;
}
function nZe(e) {
  return Math.round(e * 1000) / 10;
}
function Lhe(e) {
  return Math.min(nZe(e), 100);
}
function One(e, t = "line") {
  if (e <= 0) return "";
  return `\u2026 +${e} ${O(e, t)}`;
}
function nGe(e) {
  return Math.max(1, Math.round(e / 1000));
}
import { AsyncLocalStorage as Ye } from "async_hooks";
import { constants as je } from "fs";
import { appendFile as Xe, copyFile as qe, lstat as Ve, mkdir as Je, open as ye, readdir as Ee, readFile as we, stat as Qe, unlink as Ze, writeFile as re } from "fs/promises";
class lBr {
  read(e) {
    return we(e, "utf8");
  }
  readBytes(e) {
    return we(e);
  }
  write(e, t, mode) {
    return re(e, t, {
      encoding: "utf8",
      mode: mode
    });
  }
  async mkdir(e, mode_2) {
    try {
      await Je(e, {
        recursive: !0,
        mode: mode_2
      });
    } catch (error) {
      if (k(error) !== "EEXIST") throw error;
    }
  }
  atomicWrite(e, t, n) {
    return An(e, t, n);
  }
  delete(e) {
    return Ze(e);
  }
  list(e) {
    return Ee(e);
  }
  append(e, t, mode_3) {
    return Xe(e, t, {
      encoding: "utf8",
      mode: mode_3
    });
  }
  writeExclusive(e, t, mode_4) {
    return re(e, t, {
      encoding: "utf8",
      flag: "wx",
      mode: mode_4
    });
  }
  writeBytesExclusive(e, t, mode_5) {
    return re(e, t, {
      flag: "wx",
      mode: mode_5
    });
  }
  copy(e, t) {
    return qe(e, t);
  }
  async stat(e) {
    return {
      mtimeMs: (await Qe(e)).mtimeMs
    };
  }
  async lstat(e) {
    try {
      let t = await Ve(e);
      return {
        isSymbolicLink: t.isSymbolicLink(),
        isFile: t.isFile(),
        isDirectory: t.isDirectory(),
        mtimeMs: t.mtimeMs,
        nlink: t.nlink
      };
    } catch (error) {
      if (k(error) === "ENOENT") return;
      throw error;
    }
  }
  async listEntries(e) {
    return (await Ee(e, {
      withFileTypes: !0
    })).map(item => ({
      name: item.name,
      isDirectory: item.isDirectory(),
      isFile: item.isFile()
    }));
  }
  async readRange(e, t, n) {
    se("readRange", "offset", t), se("readRange", "length", n);
    let s = await ye(e, "r");
    try {
      return await Te(s, t, n);
    } finally {
      await s.close();
    }
  }
  async readTail(path, t, n) {
    se("readTail", "maxBytes", t);
    let s = n?.noFollow ? je.O_RDONLY | Us : "r",
      r = await ye(path, s);
    try {
      let u = await r.stat();
      if (n?.noFollow && !u.isFile()) throw Object.assign(Error("ENXIO: not a regular file"), {
        code: "ENXIO",
        path: path
      });
      let {
          size: size
        } = u,
        l = Math.min(t, size);
      return await Te(r, size - l, l);
    } finally {
      await r.close();
    }
  }
}
function se(e, t, n) {
  if (!Number.isInteger(n) || n < 0) throw RangeError(`${e}: ${t} must be a non-negative integer, got ${n}`);
}
async function Te(e, t, n) {
  if (n === 0) return Buffer.alloc(0);
  let s = Buffer.alloc(n),
    r = 0;
  while (r < n) {
    let {
      bytesRead: bytesRead
    } = await e.read(s, r, n - r, t + r);
    if (bytesRead === 0) break;
    r += bytesRead;
  }
  return r === n ? s : Buffer.from(s.subarray(0, r));
}
var et = new Ye();
function gn() {
  return et.getStore() ?? new lBr();
}
export { J0e, rXn, Mhe, pde, sjo, B1t, ijo, tGe, Lc, ajo, ljo, Fd, mt, n0, LW, ybt, es, tZe, oXn, STe, rn, uR, Dhe, ei, cr, aBr, djo, cjo, ujo, NW, FW, mv, emn, eP, _bt, nZe, Lhe, One, nGe, lBr, gn };