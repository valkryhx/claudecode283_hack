// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { Wte, uae, _1s, Fta, M2n, Hta } from "B:/~BUN/root/chunk-1w2vha2y.js";
import { P } from "B:/~BUN/root/chunk-n8cnxns2.js";
import { Sa, y1s, Dta, nY, Nta } from "B:/~BUN/root/chunk-63176a0t.js";
import { ce } from "B:/~BUN/root/chunk-w7vsj9wa.js";
import { en } from "B:/~BUN/root/chunk-mdq0dxn3.js";
import { Zn } from "B:/~BUN/root/chunk-12nc74pv.js";
var Ae = /^\[M[\x60-\x7f][\x20-\uffff]?$/,
  we = /^\x1b\]8(?:;|\r?$)/,
  _e = "\x1B]8;;\x1B\\",
  Ce = /^(?:\[(?:\d{1,2}(?:;\d{1,2})?[~^$@]|(?:1;\d{1,2})?[A-DFHa-d])|O[A-DFHa-d])/;
function Rqe(e) {
  let n = "ground",
    s = "",
    r = e?.x10Mouse ?? !1,
    t = e?.escPrefixedKeyIsAlt,
    u = e?.stringsEndAtLineFeed ?? !1,
    o = e?.intermediatesRunToFinal ?? !1;
  return {
    feed(l) {
      let d = se(l, n, s, !1, r, t?.() ?? !1, u, o);
      return n = d.state.state, s = d.state.buffer, d.tokens;
    },
    flush() {
      let l = se("", n, s, !0, r, t?.() ?? !1, u, o);
      return n = l.state.state, s = l.state.buffer, l.tokens;
    },
    reset() {
      n = "ground", s = "";
    },
    buffer() {
      return s;
    }
  };
}
function Cdn(e) {
  let n = Rqe(),
    s = n.feed(e);
  return s.push(...n.flush()), s;
}
function se(e, state, s, r, t, u, o, l) {
  let tokens = [],
    state_2 = {
      state: state,
      buffer: ""
    },
    c = s + e,
    i = 0,
    g = 0,
    p = 0,
    A = () => {
      if (i > g) {
        let value = c.slice(g, i);
        if (value) tokens.push({
          type: "text",
          value: value
        });
      }
      g = i;
    },
    b = value_2 => {
      if (value_2) tokens.push({
        type: "sequence",
        value: value_2
      });
      state_2.state = "ground", g = i;
    };
  while (i < c.length) {
    let f = c.charCodeAt(i);
    switch (state_2.state) {
      case "ground":
        if (f === Wte.ESC) A(), p = i, state_2.state = "escape", i++;else if (f === Wte.DEL) {
          if (Ae.test(c.slice(g, i))) i++;else A(), i++, tokens.push({
            type: "text",
            value: "\x7F"
          }), g = i;
        } else if (t && f < 32 && (c.length < 64 || f === Wte.BS)) {
          if (A(), i++, f === 13 && c.charCodeAt(i) === 10) i++;
          tokens.push({
            type: "text",
            value: String.fromCharCode(f)
          }), g = i;
        } else i++;
        break;
      case "escape":
        if (f === uae.CSI) state_2.state = "csi", i++;else if (f === uae.OSC) state_2.state = "osc", i++;else if (f === uae.DCS) state_2.state = "dcs", i++;else if (f === uae.APC && (!t || i + 1 >= c.length || ie(c, i + 1, i + 1))) state_2.state = "apc", i++;else if (!t && f === uae.PM) state_2.state = "pm", i++;else if (!t && (f === uae.SOS || f === 107)) state_2.state = "sos", i++;else if (t && f === 79) state_2.state = "ss3", i++;else if (t && (f === 32 || f === 13 || f === 10 || f === 9)) i++, tokens.push({
          type: "text",
          value: c.slice(p, i)
        }), state_2.state = "ground", g = i;else if (t && M2n(f)) tokens.push({
          type: "text",
          value: c.slice(p, i)
        }), state_2.state = "ground", g = i;else if (M2n(f)) state_2.state = "escapeIntermediate", i++;else if (f === Wte.DEL) i++, tokens.push({
          type: "text",
          value: c.slice(p, i)
        }), state_2.state = "ground", g = i;else if (_1s(f)) i++, b(c.slice(p, i));else if (f === Wte.ESC && u && i === p + 1 && Ce.test(c.slice(i + 1, i + 1 + 8))) i++;else if (f === Wte.ESC) b(c.slice(p, i)), p = i, state_2.state = "escape", i++;else if (f < 32) i++, tokens.push({
          type: "text",
          value: c.slice(p, i)
        }), state_2.state = "ground", g = i;else state_2.state = "ground", g = p;
        break;
      case "escapeIntermediate":
        if (l && M2n(f)) i++;else if (M2n(f) || _1s(f)) i++, b(c.slice(p, i));else state_2.state = "ground", g = p;
        break;
      case "csi":
        if (t && f === 77 && i - p === 2 && (i + 1 >= c.length || c.charCodeAt(i + 1) >= 32) && (i + 2 >= c.length || c.charCodeAt(i + 2) >= 32) && (i + 3 >= c.length || c.charCodeAt(i + 3) >= 32)) {
          if (i + 4 <= c.length) i += 4, b(c.slice(p, i));else i = c.length;
          break;
        }
        if (Hta(f)) i++, b(c.slice(p, i));else if (Fta(f) || M2n(f)) i++;else state_2.state = "ground", g = p;
        break;
      case "ss3":
        if (f >= 64 && f <= 126) i++, b(c.slice(p, i));else state_2.state = "ground", g = p;
        break;
      case "osc":
      case "dcs":
      case "apc":
      case "pm":
      case "sos":
        if (t && state_2.state === "apc" && i >= p + 2 && !ie(c, p + 2, i)) b(c.slice(p, p + 2)), g = p + 2;else if (f === Wte.BEL && state_2.state !== "pm" && state_2.state !== "sos") i++, b(c.slice(p, i));else if (f === Wte.ESC && i + 1 < c.length) {
          if (c.charCodeAt(i + 1) === uae.ST) i += 2, b(c.slice(p, i));else b(c.slice(p, i)), p = i, state_2.state = "escape", i++;
        } else if (f === Wte.CAN || f === Wte.SUB) i++, b(c.slice(p, i));else if (o && f === Wte.LF) b(we.test(c.slice(p, Math.min(i, p + 5))) ? _e : "");else i++;
        break;
    }
  }
  if (state_2.state === "ground") A();else if (r) {
    let value_3 = c.slice(p);
    if (value_3) tokens.push({
      type: "sequence",
      value: value_3
    });
    state_2.state = "ground";
  } else state_2.buffer = c.slice(p);
  return {
    tokens: tokens,
    state: state_2
  };
}
function ie(e, n, s) {
  let r = e[s],
    t = s - n;
  if (t === 0) return r === "G";
  if (t === 1) return r === "i" || r === "O" || r === "E";
  let u = e[n + 1];
  if (u === "i") return t > 2 || r === "=";
  let o = e.charCodeAt(s),
    l = o === Wte.ESC || o === Wte.BEL;
  if (u === "O") return t === 2 ? r === "K" : l;
  let d = e.indexOf(":", n + 3);
  if (d !== -1 && d < s) return !0;
  return r >= "A" && r <= "Z" || t > 2 && (r === ":" || l);
}
var uxe = 8,
  Fe = /(\t|\n)/,
  Ie = /[\x1b\x9b]/g,
  ke = /[\x90\x98\x9d-\x9f]/g,
  $e = /[\x1b\x90\x98\x9b\x9d-\x9f]/,
  Ne = /^\x1b[P\]X^_k]/,
  ve = /^\x1b[P_].*\x07$|\x9c/s;
function hwe(e, n = uxe) {
  return e.includes("\t") || c1s([e]) ? d1s([e], n).join("") : e;
}
function d1s(e, n = uxe) {
  let s = 0,
    r = "";
  return e.map((item, index) => {
    if (!Aqe(item) && !item.includes("\t")) {
      let l = item.lastIndexOf(`
`) + 1;
      if (l > 0) s = 0, r = "";
      return r += l > 0 ? item.slice(l) : item, item;
    }
    let o = "";
    for (let l of ae(item, index === e.length - 1)) {
      let d = ue(l);
      if (d === void 0) {
        o += l.value, r += l.value;
        continue;
      }
      for (let a of d.split(Fe)) if (a === "\t") {
        s += ce(r);
        let c = n - s % n;
        o += " ".repeat(c), s += c, r = "";
      } else if (a === `
`) o += a, s = 0, r = "";else o += a, r += a;
    }
    return o;
  });
}
function Aqe(e) {
  return $e.test(e);
}
function c1s(e) {
  return e.some((item, index) => Aqe(item) && ae(item, index === e.length - 1).some(item => (ue(item) ?? item.value) !== item.value));
}
function ae(value_4, n) {
  if (!Aqe(value_4)) return [{
    type: "text",
    value: value_4
  }];
  let s = Rqe(),
    r = s.feed(value_4);
  for (let [u, o] of r.entries()) if (o.type === "sequence" && o.value === "\x1B") r[u] = {
    type: "text",
    value: o.value
  };
  let value_5 = s.buffer();
  if (value_5 !== "") r.push({
    type: n && !Ne.test(value_5) ? "sequence" : "text",
    value: value_5
  });
  return r;
}
function ue(e) {
  if (e.type === "text" || e.value.includes(`
`) || ve.test(e.value)) return oe(e.value.replace(Ie, "\x18"));
  if (e.value.startsWith("\x1Bk")) return oe(`\x18${e.value.slice(2).replace(/\x9b/g, "\x18")}`);
  return;
}
function oe(e) {
  return e.replace(ke, "\uFFFD");
}
var snt = e => `\\x1b\\[[0-9${e}]*m`;
class le {
  reader = null;
  latches = null;
  registerReader(e) {
    let reader = this.reader;
    return this.reader = e, reader;
  }
  registerLatches(e) {
    let latches = this.latches;
    return this.latches = e, latches;
  }
}
var X = new le();
function Pta(e) {
  return X.registerReader(e);
}
function Ota(e) {
  return X.registerLatches(e);
}
function fe() {
  let e, n;
  try {
    let {
      reader: reader_2,
      latches: latches_2
    } = X;
    if (!reader_2 || !latches_2) return !0;
    if (e = latches_2(), e.wrapFitEnabled !== void 0) return e.wrapFitEnabled;
    n = reader_2("tengu_frolicking_nest", !0);
  } catch {
    return !0;
  }
  if (n.source !== "payload" || !n.defaultHost) return !0;
  return e.wrapFitEnabled = n.value !== !1;
}
var regExp = new RegExp(snt(";:"), "g"),
  de = /\x1b\]8;[^\x07\x1b]*(?:\x07|\x1b\\)/y,
  regExp_2 = new RegExp(`\\r((?:${snt(";:")})+)\\n`, "g"),
  V = [22, 22, 23, 23, 24, 25, 27, 28, 29, 39, 49, 54, 55, 75],
  De = /^\x1b\[[34]8;(?:5;\d+|2;\d+;\d+;\d+)m$/,
  ee = 9,
  te = 10,
  be = new Map([[1, 0], [2, 1], [3, 2], [20, 3], [4, 4], [21, 4], [5, 5], [6, 5], [7, 6], [8, 7], [9, 8], [51, 11], [52, 11], [53, 12], [73, 13], [74, 13]]);
function Hc(e, n, s) {
  if (!(n > 0)) return e;
  if (!e.includes("\x1B[")) return j(e, n, s);
  let r = e.replace(regExp, "");
  if (r.length < e.length && r.includes("\x1B") && Zn(r) !== Zn(e)) return j(e.replace(regExp_2, `$1\r
`), n, s);
  let t = j(r, n, s);
  if (t === r && !t.includes(`
`)) return e;
  let u = e.match(regExp);
  if (u === null) return t;
  let o = e.split(regExp),
    l = [];
  for (let S = 0, O = 0; S < u.length; S++) l.push(O += o[S].length);
  let d = u1s(),
    a = [],
    c = 0,
    i = 0,
    g = "",
    p = "",
    A = !0,
    b = !1,
    f = !0,
    T = 0,
    I = 0,
    x = 0,
    R = -1,
    v = -1,
    L = -1,
    H = [],
    G = [],
    m = [],
    y = [],
    W = [],
    w = [],
    U = [];
  for (;;) {
    let S = pe(r, T, y, W),
      O = pe(t, x, H, G),
      D = y[S],
      B = H[O];
    for (let h = 0; h < S; h++) w[h] = -1;
    let N = S - 1,
      _ = 0;
    for (let h = O - 1; h >= -1 && f; h--) {
      let E = h < 0 ? -1 : G[h];
      if (E === 10 || typeof E === "string") {
        m[_++] = h;
        continue;
      }
      let C = N;
      while (C >= 0 && W[C] !== E) C--;
      f = h < 0 || C >= 0;
      for (let q = 0; N > C; N--) {
        let z = W[N],
          F = z === 10 || typeof z === "string" ? q : _;
        while (F < _ && G[m[F]] !== z) F++;
        if (F < _) w[N] = m[F], q = F + 1;
      }
      if (C >= 0) w[C] = h, N = C - 1;
      _ = 0;
    }
    if (!f) break;
    let K = c,
      M = c - 1;
    for (let h = 0; l[M + 1] <= D;) {
      let E = l[++M];
      while (h < S && (y[h] < E || w[h] < 0)) h++;
      U[M - K] = E <= T ? 0 : h < S ? w[h] : O;
    }
    for (let h = 0; h <= O; h++) {
      let E = H[h],
        C = c <= M && U[c - K] <= h,
        q = h < O && G[h] === 10;
      if (b && (C || h < O && !q)) {
        if (b = !1, p !== "") a.push(t.slice(I, E), p), I = E, A = !0;
      }
      if (C) {
        a.push(t.slice(I, E)), I = E;
        while (c <= M && U[c - K] <= h) a.push(u[c++]);
        A = !0;
      }
      if (q) {
        if (i < c) {
          while (i < c) f1s(u[i++], d);
          g = "", p = "";
          let z = 0;
          for (let F = 0; F < d.length; F++) {
            if (d[F] === "") continue;
            if (p += `\x1B[${d[F]}m`, V[F] !== z) z = V[F], g = `\x1B[${z}m${g}`;
          }
        }
        if (A && g !== "") a.push(t.slice(I, E), g), I = E;
        A = !1, b = !0;
      }
    }
    if (T = D, x = B, x >= t.length) {
      f = T >= r.length;
      break;
    }
    if (b) {
      if (b = !1, p !== "") a.push(t.slice(I, x), p), I = x, A = !0;
    }
    if (R < x) R = t.indexOf(`
`, x), R = R === -1 ? t.length : R;
    if (v < x) v = t.indexOf("\x1B", x), v = v === -1 ? t.length : v;
    if (L < T) L = r.indexOf("\x1B", T), L = L === -1 ? r.length : L;
    let k = Math.min(R - x, v - x, L - T, c < l.length ? l[c] - T : t.length);
    while (k > 0 && xe(t.charCodeAt(x + k - 1))) k--;
    if (k < 1 || !r.startsWith(t.slice(x, x + k), T)) {
      if (k = 1, t.charCodeAt(x) !== r.charCodeAt(T)) {
        f = !1;
        break;
      }
    }
    T += k, x += k;
  }
  if (!f) return j(e, n, s);
  return a.push(t.slice(I)), a.join("");
}
function pe(e, n, s, r) {
  let t = 0,
    u = n;
  for (;; t++) {
    let o = e.charCodeAt(u);
    de.lastIndex = u;
    let l = o === 27 ? de.exec(e) : null;
    if (l === null && !xe(o)) break;
    s[t] = u, r[t] = l !== null ? l[0] : o === 13 ? 10 : o, u += l !== null ? l[0].length : o === 13 && e.charCodeAt(u + 1) === 10 ? 2 : 1;
  }
  return s[t] = u, t;
}
function xe(e) {
  return e === 32 || e >= 9 && e <= 13;
}
function u1s() {
  return V.map(() => "");
}
function f1s(e, n) {
  if (!e.endsWith("m")) return;
  if (De.test(e)) {
    n[e.charCodeAt(2) === 51 ? ee : te] = e.slice(2, -1);
    return;
  }
  let s = e.length === 5 ? e.charCodeAt(2) - 48 : 0,
    r = e.charCodeAt(e.length - 2) - 48;
  if ((e.length === 4 || e.length === 5) && s >= 0 && s <= 9 && r >= 0 && r <= 9) {
    ge(s * 10 + r, n);
    return;
  }
  let t = e.slice(2, -1).split(";");
  for (let u = 0; u < t.length; u++) {
    let o = t[u],
      l = o === "" ? 0 : parseInt(o, 10);
    if (l === 38 || l === 48 || l === 58) {
      let d = parseInt(t[u + 1] ?? "", 10),
        a = o.includes(":") ? 1 : d === 5 ? 3 : d === 2 ? 5 : 1;
      if (l !== 58 && (a > 1 || o.includes(":"))) {
        if (u + a <= t.length) n[l === 38 ? ee : te] = t.slice(u, u + a).join(";");
      }
      u += a - 1;
    } else if (l === 4 && o.includes(":")) n[be.get(4)] = o === "4:0" ? "" : /^4:[1-5]$/.test(o) ? o : "4";else ge(l, n);
  }
}
function ge(e, n) {
  let s = e >= 30 && e <= 37 || e >= 90 && e <= 97 ? ee : e >= 40 && e <= 47 || e >= 100 && e <= 107 ? te : be.get(e);
  if (s !== void 0) n[s] = String(e);else if (e === 0) n.fill("");else for (let r = 0; r < n.length; r++) if (V[r] === e) n[r] = "";
}
var Le = "\uDB80\uDC00",
  Me = "\uD87E\uDE1D",
  ne = /[\u{F0000}\u{2FA1D}]/gu,
  Se = /^\x1b(?:\[[0-?]*[ -/]*[@-~]|\][^\x00-\x1f\x7f-\x9f]*(?:\x07|\x1b\\))$/,
  regExp_3 = new RegExp(`^(?:${snt(";:")}$|\\x1b\\]8;)`),
  Y = /[^\x00-\u02FF\u0370-\u0482\u048A-\u052F\u2000-\u200B\u2010-\u205F\u2070-\u20CF\u2100-\u2BFF\u2E80-\u3029\u3030-\u3098\u309B-\uA4CF\uAC00-\uD7A3\uF900-\uFAFF\uFF01-\uFF9D\uFFE0-\uFFEE\u{1f000}-\u{1f1e5}\u{1f200}-\u{1f3fa}\u{1f400}-\u{1faff}]/gu;
function j(e, n, s, r = !0) {
  if (e.search(Y) === -1) return Bun.wrapAnsi(e, n, s);
  let t = "",
    u = [],
    o = [];
  for (let m of Cdn(e)) if (m.type === "sequence") u.push(m.value), o.push(t.length);else t += m.value;
  let l = {
      starts: [],
      ends: [],
      handedAs: [],
      restoredAs: []
    },
    d = Sa(),
    a = 0,
    c = !1,
    i;
  Y.lastIndex = 0;
  while ((i = Y.exec(t)) !== null) {
    let index_2 = i.index;
    while (index_2 > 0 && !he(t.charCodeAt(index_2 - 1))) index_2--;
    let index_3 = i.index;
    while (index_3 < t.length && !he(t.charCodeAt(index_3))) index_3++;
    Y.lastIndex = index_3;
    let W = t.slice(index_2, index_3);
    while (a < o.length && o[a] < index_2) a++;
    let w = a,
      U = !Aqe(W);
    while (w < o.length && o[w] <= index_3) U = Se.test(u[w]) && U, w++;
    if (!U && w > a) {
      let S = index_2;
      for (; a < o.length && o[a] < index_3; a++) if (o[a] > S) Z(t, S, o[a], l), S = o[a];
      Z(t, S, index_3, l);
      continue;
    }
    for (let {
      segment: segment,
      index: index_4
    } of d.segment(W)) {
      if (segment.length === 1) continue;
      let D = index_2 + index_4,
        B = D + segment.length,
        N = ye(segment);
      while (a < o.length && o[a] <= D) a++;
      let _ = a;
      while (_ < o.length && o[_] < B) _++;
      if (_ === a) {
        if (N !== "") re(l, D, B, N, segment);
        continue;
      }
      if (N === "" || ce(t.slice(D, o[a])) === 0) {
        for (let h = a; h <= _; h++) {
          let E = h === a ? D : o[h - 1],
            C = h === _ ? B : o[h];
          Z(t, E, C, l);
        }
        continue;
      }
      let K = N,
        M = "",
        k = D;
      for (let h = a; h < _; h++) {
        let E = u[h];
        if (M += t.slice(k, o[h]), k = o[h], r && regExp_3.test(E)) K += E, c = !0;else M += E;
      }
      re(l, D, B, K, M + t.slice(k, B));
    }
  }
  let {
    starts: starts,
    ends: ends,
    handedAs: handedAs,
    restoredAs: restoredAs
  } = l;
  if (starts.length === 0) return Q(Bun.wrapAnsi(e, n, s), e, n, s);
  let f = [],
    T = [],
    I = e.search(ne) !== -1,
    x = 0,
    R = 0;
  for (let m = 0; m <= starts.length; m++) {
    let y = m < starts.length ? starts[m] : t.length;
    for (; R < u.length && o[R] <= y; R++) {
      let w = t.slice(x, o[R]);
      me(T, f, w, I), T.push(u[R]), x = o[R];
    }
    let W = t.slice(x, y);
    if (me(T, f, W, I), m === starts.length) break;
    T.push(handedAs[m]), f.push(restoredAs[m]), x = ends[m];
    while (R < u.length && o[R] < x) R++;
  }
  let v = T.join("");
  if (c && v.split(Te).every(item => ce(item) <= n)) return j(e, n, s, !1);
  let L = Bun.wrapAnsi(v, n, s);
  if (L === v) return Q(e, e, n, s);
  let H = 0,
    G = "";
  for (let m of Cdn(L)) G += m.type === "sequence" ? m.value : m.value.replace(ne, y => f[H++] ?? y);
  return Q(G, e, n, s);
}
function Q(e, n, s, r) {
  if (!r?.hard || s < 1) return e;
  let t = e.split(`
`);
  if (t.every(item => ce(item) <= s) || !fe()) return e;
  let u = n.split(Te),
    o = [];
  for (let d of u) {
    let a = !0;
    for (let c of Cdn(d)) if (c.type === "sequence" ? !Se.test(c.value) : Aqe(c.value)) {
      a = !1;
      break;
    }
    o.push(a);
  }
  if (!o.includes(!0)) return e;
  if (o.includes(!1)) return u.map(item => j(item, s, r)).join(`
`);
  let l = [];
  for (let d of t) {
    if (ce(d) <= s) {
      l.push(d);
      continue;
    }
    Ee(d, s, !1, l);
  }
  return l.join(`
`);
}
function Ee(e, n, s, r) {
  let t = "",
    u = 0,
    o = () => {
      if (!s && ce(t) > n) Ee(t, n, !0, r);else r.push(t);
      t = "", u = 0;
    },
    l = (d, a) => {
      if (u > 0 && a > 0 && u + a > n) o();
      t += d, u += a;
    };
  for (let d of Cdn(e)) {
    if (d.type === "sequence") {
      t += d.value;
      continue;
    }
    for (let {
      segment: segment_2
    } of Sa().segment(d.value)) {
      let c = ce(segment_2);
      if (c > n && c > 2) for (let i of segment_2) {
        let g = ce(i);
        l(i, s ? Math.max(g, 1) : g);
      } else if (s) {
        let i = 0;
        for (let g of segment_2) i += Math.max(ce(g), 1);
        l(segment_2, i);
      } else l(segment_2, c);
    }
  }
  o();
}
function he(e) {
  return e === 10 || e === 13;
}
var Te = /\r\n?|\n/;
function re(e, n, s, r, t) {
  e.starts.push(n), e.ends.push(s), e.handedAs.push(r), e.restoredAs.push(t);
}
function Z(e, n, s, r) {
  let t = e.slice(n, s);
  if (t.search(Y) === -1) return;
  for (let {
    segment: segment_3,
    index: index_5
  } of Sa().segment(t)) {
    let l = ye(segment_3);
    if (l !== "") re(r, n + index_5, n + index_5 + segment_3.length, l, segment_3);
  }
}
function ye(e) {
  let n = e.codePointAt(0) > 65535 ? 2 : 1;
  if (e.length <= n) return "";
  let s = ce(e);
  return s === 1 ? Le : s === 2 ? Me : "";
}
function me(e, n, s, r) {
  if (s === "") return;
  if (r) for (let t of s.match(ne) ?? []) n.push(t);
  e.push(s);
}
function Tu(e, n) {
  if (ce(e) <= n) return e;
  if (n <= 0) return "\u2026";
  if (n < 5) return ct(e, n);
  let s = e.lastIndexOf("/"),
    r = s >= 0 ? s : e.lastIndexOf("\\"),
    t = r >= 0 ? e.slice(r) : e,
    u = r >= 0 ? e.slice(0, r) : "",
    o = ce(t);
  if (o >= n - 1) return AH(e, n);
  let l = n - 1 - o;
  return lG(u, l) + "\u2026" + t;
}
function ct(e, n) {
  if (ce(e) <= n) return e;
  if (n <= 1) return "\u2026";
  let s = 0,
    r = "";
  for (let {
    segment: segment_4
  } of Sa().segment(e)) {
    let u = ce(segment_4);
    if (s + u > n - 1) break;
    r += segment_4, s += u;
  }
  return r + "\u2026";
}
function AH(e, n) {
  if (ce(e) <= n) return e;
  if (n <= 1) return "\u2026";
  let s = n - 1,
    r = [...Sa().segment(e)],
    t = 0,
    u = r.length;
  for (let o = r.length - 1; o >= 0; o--) {
    let l = ce(r[o].segment);
    if (t + l > s) break;
    t += l, u = o;
  }
  return `\u2026${r.slice(u).map(item => item.segment).join("")}`;
}
function lG(e, n) {
  if (ce(e) <= n) return e;
  if (n <= 0) return "";
  let s = 0,
    r = "";
  for (let {
    segment: segment_5
  } of Sa().segment(e)) {
    let u = ce(segment_5);
    if (s + u > n) break;
    r += segment_5, s += u;
  }
  return r;
}
var Pe = 8,
  Ge = 40;
function wFr(e, n) {
  return ct(e, Math.max(Ge, n - Pe));
}
function Os(e, n, s = !1) {
  let r = e;
  if (s) {
    let t = e.indexOf(`
`);
    if (t !== -1) {
      if (r = e.substring(0, t), ce(r) + 1 > n) return ct(`${r}\u2026`, n);
      return `${r}\u2026`;
    }
  }
  if (ce(r) <= n) return r;
  return ct(r, n);
}
function jHe(e, n) {
  let s = [],
    r = "",
    t = 0;
  for (let {
    segment: segment_6
  } of Sa().segment(e)) {
    let o = ce(segment_6);
    if (t + o <= n) r += segment_6, t += o;else {
      if (r) s.push(r);
      r = segment_6, t = o;
    }
  }
  if (r) s.push(r);
  return s;
}
function gwe(e, n, s) {
  if (s <= 0 || n <= 0) return "";
  let r = Hc(e, n, {
    trim: !0,
    hard: !0
  }).split(`
`);
  if (r.length <= s) return r.join(`
`);
  let t = r.slice(0, s);
  return t[s - 1] = ct((t[s - 1] ?? "") + "\u2026", n), t.join(`
`);
}
function WHe(e) {
  return `${(e / 1000).toFixed(1)}s`;
}
function cn(e, n) {
  if (e < 60000) {
    if (e === 0) return "0s";
    if (e < 1) return `${(e / 1000).toFixed(1)}s`;
    return `${Math.floor(e / 1000).toString()}s`;
  }
  let s = Math.floor(e / 86400000),
    r = Math.floor(e % 86400000 / 3600000),
    t = Math.floor(e % 3600000 / 60000),
    u = Math.round(e % 60000 / 1000);
  if (u === 60) u = 0, t++;
  if (t === 60) t = 0, r++;
  if (r === 24) r = 0, s++;
  let o = n?.hideTrailingZeros;
  if (n?.mostSignificantOnly) {
    if (s > 0) return `${s}d`;
    if (r > 0) return `${r}h`;
    if (t > 0) return `${t}m`;
    return `${u}s`;
  }
  if (s > 0) {
    if (o && r === 0 && t === 0) return `${s}d`;
    if (o && t === 0) return `${s}d ${r}h`;
    return `${s}d ${r}h ${t}m`;
  }
  if (r > 0) {
    if (o && t === 0 && u === 0) return `${r}h`;
    if (o && u === 0) return `${r}h ${t}m`;
    return `${r}h ${t}m ${u}s`;
  }
  if (t > 0) {
    if (o && u === 0) return `${t}m`;
    return `${t}m ${u}s`;
  }
  return `${u}s`;
}
function Mw(e) {
  let n = e >= 60000 ? Math.round(e / 60000) * 60000 : e;
  return cn(n, {
    hideTrailingZeros: !0
  });
}
function fxe(e) {
  let n = Math.max(0, Math.floor(e / 1000));
  if (n < 60) return `${n}s`;
  let s = Math.floor(n / 60);
  if (s < 60) return `${s}m${String(n % 60).padStart(2, "0")}s`;
  let r = Math.floor(s / 60);
  if (r < 24) return `${r}h${String(s % 60).padStart(2, "0")}m`;
  return `${Math.floor(r / 24)}d${String(r % 24).padStart(2, "0")}h`;
}
var Ue = {
    notation: "compact",
    maximumFractionDigits: 1,
    minimumFractionDigits: 1
  },
  Be = {
    notation: "compact",
    maximumFractionDigits: 1,
    minimumFractionDigits: 0
  };
function pa(e) {
  let n = typeof e === "number" ? e : Number.NaN,
    s = n >= 1000;
  return Nta("en-US", s ? Ue : Be).format(n).toLowerCase();
}
function Ur(e) {
  return pa(e).replace(".0", "");
}
function qxo(e, n = 4) {
  return `$${e > 0.5 ? ze(e, 100).toFixed(2) : e.toFixed(n)}`;
}
function ze(e, n) {
  return Math.round(e * n) / n;
}
var p1s = "costs may be inaccurate due to usage of unknown models",
  m1s = "at your organization's configured rates";
function h1s(e) {
  return `${pa(e.inputTokens)} input, ${pa(e.outputTokens)} output, ${pa(e.cacheReadInputTokens)} cache read, ${pa(e.cacheCreationInputTokens)} cache write` + (e.webSearchRequests > 0 ? `, ${pa(e.webSearchRequests)} web search` : "");
}
function QV(e) {
  if (e < 20) return "< 20";
  return `~${Ur(Math.round(e / 10) * 10)}`;
}
function tY(e, n = {}) {
  let {
      style = "narrow",
      numeric = "always",
      maxUnit: maxUnit,
      now = new Date()
    } = n,
    o = e.getTime() - now.getTime(),
    l = Math.trunc(o / 1000),
    d = [{
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
    a = maxUnit ? d.filter(item => item.seconds <= 86400) : d;
  for (let {
    unit: unit,
    seconds: seconds,
    shortUnit: shortUnit
  } of a) if (Math.abs(l) >= seconds) {
    let p = Math.trunc(l / seconds);
    if (style === "narrow") return l < 0 ? `${Math.abs(p)}${shortUnit} ago` : `in ${p}${shortUnit}`;
    return y1s("long", numeric).format(p, unit);
  }
  if (style === "narrow") return l <= 0 ? "0s ago" : "in 0s";
  return y1s(style, "auto").format(0, "second");
}
function x_(e, n = {}) {
  let {
    now: now_2 = new Date(),
    ...r
  } = n;
  if (e > now_2) return tY(e, {
    ...r,
    now: now_2
  });
  return tY(e, {
    ...r,
    numeric: "always",
    now: now_2
  });
}
function I2n(e) {
  let n = e.fileSize !== void 0 ? en(e.fileSize) : `${e.messageCount} messages`,
    s = [x_(e.modified, {
      style: "short"
    }), ...(e.sessionKind === "bg" ? ["bg"] : []), ...(e.gitBranch ? [e.gitBranch] : []), n];
  if (e.tag) s.push(`#${e.tag}`);
  if (e.agentSetting) s.push(`@${e.agentSetting}`);
  if (e.prNumber) s.push(e.prRepository ? `${e.prRepository}#${e.prNumber}` : `#${e.prNumber}`);
  return s.join(" \xB7 ");
}
function Re(e, timeZone) {
  if (timeZone === void 0) return {
    minutes: e.getMinutes(),
    year: e.getFullYear()
  };
  let s = new Map(nY("en-US", {
    timeZone: timeZone,
    year: "numeric",
    minute: "numeric"
  }).formatToParts(e).map(item => [item.type, item.value]));
  return {
    minutes: Number(s.get("minute")),
    year: Number(s.get("year"))
  };
}
function lP(e, n = !1, s = !0, r = !1, timeZone_2) {
  if (!e) return;
  let date = new Date(e * 1000),
    date_2 = new Date(),
    {
      minutes: minutes,
      year: year
    } = Re(date, timeZone_2),
    a = n || timeZone_2 !== void 0 ? ` (${timeZone_2 ?? Dta()})` : "",
    c = (date.getTime() - date_2.getTime()) / 3600000;
  if (r || c > 24) {
    let g = {
      month: "short",
      day: "numeric",
      hour: s ? "numeric" : void 0,
      minute: !s || minutes === 0 ? void 0 : "2-digit",
      hour12: s ? !0 : void 0,
      timeZone: timeZone_2
    };
    if (year !== Re(date_2, timeZone_2).year) g.year = "numeric";
    return date.toLocaleString("en-US", g).replace(/[ \u202f]([AP]M)/i, (A, b) => b.toLowerCase()) + a;
  }
  return date.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: minutes === 0 ? void 0 : "2-digit",
    hour12: !0,
    timeZone: timeZone_2
  }).replace(/[ \u202f]([AP]M)/i, (g, p) => p.toLowerCase()) + a;
}
function zHe(e, n = !1, s = !0, r = !1) {
  let date_3 = new Date(e);
  return `${lP(Math.floor(date_3.getTime() / 1000), n, s, r)}`;
}
function DSt(e) {
  return Math.round(e * 1000) / 10;
}
function pxe(e) {
  return Math.min(DSt(e), 100);
}
function XU(e, n = "line") {
  if (e <= 0) return "";
  return `\u2026 +${e} ${P(e, n)}`;
}
function int(e) {
  return Math.max(1, Math.round(e / 1000));
}
export { Rqe, Cdn, uxe, hwe, d1s, Aqe, c1s, snt, Pta, Ota, Hc, u1s, f1s, Tu, ct, AH, lG, wFr, Os, jHe, gwe, WHe, cn, Mw, fxe, pa, Ur, qxo, p1s, m1s, h1s, QV, tY, x_, I2n, lP, zHe, DSt, pxe, XU, int };