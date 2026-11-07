// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  wa,
  Ua,
  Q,
  Ey,
  tt,
  Yr
} from "B:/~BUN/root/chunk-n8cnxns2.js";
import {
  yWs,
  iB,
  Mae,
  O5
} from "B:/~BUN/root/chunk-09sn55yf.js";
import {
  Zn
} from "B:/~BUN/root/chunk-12nc74pv.js";
var De = /[\x00-\x1f\x7f-\x9f\u2028\u2029]/g,
  TM = 256,
  NHr = /[\x00-\x1f\x7f-\x9f\u2028\u2029<>]/;

function bt(e) {
  return e.length <= TM && !NHr.test(e)
}

function mY(e) {
  return e.length > 0 && bt(e)
}

function bwt(e) {
  return e.length <= TM && /^[A-Za-z0-9_:.-]+$/.test(e)
}

function FHr(e) {
  return e.length <= TM && /^[\p{L}\p{M}\p{N}_:.-]+$/u.test(e)
}

function xVn(e) {
  return e.length <= TM && /^(?:\/(?!\.\.?(?:\/|$))[A-Za-z0-9._+@-]+)+$/.test(e)
}

function PN(e) {
  return xc(e.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;"))
}

function xc(e) {
  return e.replace(De, (t) => `&#${t.charCodeAt(0)};`)
}

function Cj(e) {
  return e.replaceAll("<", "&lt;").replaceAll(">", "&gt;")
}

function tf(e) {
  return xc(Cj(String(e ?? "")))
}

function eOo(e) {
  return tf(e).replaceAll('"', "&quot;")
}
var Ne = 2000,
  yt = /[\p{Cf}\p{Co}\p{Cn}\p{Cs}\p{Default_Ignorable_Code_Point}\u2800]/gu,
  Tt = new RegExp(`[${Mae}]|(?![\\x00-\\x7f])[\\p{Sm}\\p{Sk}\\p{So}]`, "gu"),
  kt = new RegExp(`[${[...O5.keys()].join("")}]`, "gu"),
  It = /(?![({\u201A\u201E\u2E42])\p{Ps}/gu,
  Ct = /(?![)}])\p{Pe}/gu;

function Djt(e) {
  if (typeof e !== "string" || e.length > Ne) return null;
  let t = Cj(iB(e.replace(yt, "")).replace(De, " ").replace(Tt, " ").replace(/\s+/g, " ").replace(kt, (n) => O5.get(n) ?? n).replace(It, "(").replace(Ct, ")")).trim();
  return t === "" || t.length > Ne ? null : t
}
var Ljt = "\\p{Default_Ignorable_Code_Point}\\u2800",
  ib = `\\p{Cc}\\p{Cf}\\p{Cs}\\p{Co}\\p{Cn}\\u2028\\u2029${Ljt}`,
  t4e = String.raw`\u00ad\u034f\u061c\u115f\u1160\u17b4\u17b5\u180b-\u180f\u200b-\u200f\u202a-\u202e\u2060-\u206f\u2800\u3164\ufe00-\ufe0f\uffa0\ufff0-\ufffb\uDC00-\uDFFF\uDB40-\uDB43`,
  tOo = String.raw`\u0600-\u0605\u06dd\u070f\u0890\u0891\u08e2`,
  Swt = `[${t4e}${tOo}\\ufeff]*`,
  Bra = new RegExp(`[${t4e}${tOo}\\ufeff]`);

function Dnt(e) {
  return e.replace(/([a-z)])(?=[a-z(\[])/gi, `$1${Swt}`).replace(/\[_-\]\?/g, `(?:[_-]${Swt})?`)
}
var ie = new RegExp(`[${ib}]+`, "gu"),
  ce = "\\u200D\\uFE0E\\uFE0F",
  $t = new RegExp(`(?:(?![${ce}])[${ib}])+`, "gu"),
  Ot = new RegExp(`(?:(?![${ce}\\n])[${ib}])+`, "gu"),
  wt = new RegExp(`(?<!\\S)[${ce}]+`, "gu"),
  Lt = /\p{Cs}/gu;

function VA(e, t, n) {
  let r = Zn(e.replace(Lt, "\u200B"));
  if (n !== void 0 && "keepSpelledJoiners" in n) {
    let o = new Set;
    if (r.length <= Wt && ze.test(r)) {
      V ??= new RegExp("\\p{RGI_Emoji}", "gv");
      for (let c of [V, Me])
        for (let {
            index: u,
            0: a
          }
          of r.matchAll(c))
          for (let l = u; l < u + a.length; l++) o.add(l)
    }
    return r.replace(ie, (c, u) => {
      let a = "";
      for (let l = 0; l < c.length; l++) a += o.has(u + l) ? c.charAt(l) : a.endsWith(t) ? "" : t;
      return a
    })
  }
  let s = n?.keepNewlines === !0 || n?.keepEmojiJoiners === !0,
    i = r.replace(n?.keepNewlines ? Ot : s ? $t : ie, t);
  return s ? i.replace(wt, "") : i
}
var Nt = new RegExp(`[${ib}]`, "u"),
  Dt = /(?! )\p{Zs}|[\uFFFC\u{1D159}\u{13441}\u{13442}\u{16FE4}]|^ | $/u,
  F = "[\\p{M}\\u1160-\\u11FF\\uD7B0-\\uD7FF]",
  Ut = new RegExp(`(?<![\\p{L}\\p{N}\\p{M}])${F}|${F}{9}|\\p{Soft_Dotted}\\p{M}*\\u0307|[\\u0131\\u0237]\\p{M}|(?<=[\\p{sc=Latin}\\p{sc=Common}]${F}*)(?!\\p{sc=Inherited})${F}`, "u"),
  Mt = String.raw`\u0620\u0626\u0628\u062A-\u062E\u0633-\u063F\u0641-\u0647\u0649\u064A\u066E\u066F\u0678-\u0687\u069A-\u06BF\u06C1\u06C2\u06CC\u06CE\u06D0\u06D1\u06FA-\u06FC\u06FF\u0750-\u0758\u075C-\u076A\u076D-\u0770\u0772\u0775-\u0777\u077A-\u077F\u0886\u0889-\u088D\u088F\u08A0-\u08A9\u08AF\u08B0\u08B3-\u08B8\u08BA-\u08C8`,
  zt = String.raw`\u0620\u0622-\u063F\u0641-\u064A\u066E\u066F\u0671-\u0673\u0675-\u06D3\u06D5\u06EE\u06EF\u06FA-\u06FC\u06FF\u0750-\u077F\u0870-\u0882\u0886\u0889-\u088F\u08A0-\u08AC\u08AE-\u08C8`,
  Ft = [2304, 2432, 2688, 2816, 3072, 3200, 3328].map(Kt),
  Ue = String.raw`[\u0D9A-\u0DC6]`,
  Me = new RegExp([...Ft, `\\u200D(?<=${Ue}\\u0DCA.)(?=${Ue})`, `\\u200C(?<=[${Mt}](?:(?=[\\p{sc=Arabic}\\p{sc=Inherited}])(?!\\p{Default_Ignorable_Code_Point})\\p{Mn}){0,8}.)(?=[${zt}])`].join("|"), "gu"),
  Pt = new RegExp(`\\u20E3|\\u263A${F}`, "u"),
  ze = /[\u200C\u200D\uFE0F\u{E007F}]/u,
  V;

function Kt(e) {
  let t = `[${G(e+21)}-${G(e+57)}]`,
    n = e === 3328 ? "" : `${G(e+60)}?`;
  return `[\\u200C\\u200D](?<=${t}${n}${G(e+77)}.)(?=${t})`
}

function G(e) {
  return `\\u{${e.toString(16)}}`
}

function oe(e) {
  if (!ze.test(e)) return e;
  return V ??= new RegExp("\\p{RGI_Emoji}", "gv"), e.replace(V, "\u263A").replace(Me, "")
}
var Wt = 4096;

function cWs(e) {
  return vt(e) && !e.includes("  ") && !Ut.test(oe(e))
}

function vt(e) {
  return mY(e) && !Nt.test(oe(e)) && !Pt.test(oe(e)) && !/\uFE0F[\u{1F3FB}-\u{1F3FF}]/u.test(e) && !Dt.test(e)
}
var Bt = new RegExp(`[\\p{Cf}\\p{Co}\\p{Cn}\\u2028\\u2029\\u007F-\\u009F${Ljt}]`, "gu");

function Gt(e) {
  let t = e.replace(/[\p{Cf}\p{Co}\p{Cn}]/gu, "");
  return t = t.replace(/[\u200B-\u200F]/g, "").replace(/[\u202A-\u202E]/g, "").replace(/[\u2066-\u2069]/g, "").replace(/[\uFEFF]/g, "").replace(/[\uE000-\uF8FF]/g, ""), t
}

function _h(e) {
  let t = Ey(e);
  for (let n = 0; n < 10; n++) {
    let r = Gt(t);
    if (r === t) return t;
    t = r
  }
  return t
}
var Ht = /\p{Default_Ignorable_Code_Point}/gu;

function Dh(e) {
  return Yr(_h(e).replace(Ht, ""))
}

function uWs(e) {
  return !/[^\0-\x7f]/.test(e)
}

function wwt(e) {
  if (uWs(e)) return e;
  let t = e,
    n = "",
    r = 0,
    s = 10;
  while (t !== n && r < s) n = t, t = iB(t), t = _h(t), r++;
  if (r >= s) throw Error(`Unicode sanitization reached maximum iterations (${s}) for input: ${e.slice(0,100)}`);
  return t
}

function DH(e) {
  if (typeof e === "string") return wwt(e);
  if (Array.isArray(e)) return e.map(DH);
  if (e !== null && typeof e === "object") {
    let t = {};
    for (let [n, r] of Object.entries(e)) {
      let s = DH(n);
      if (s !== "__proto__") t[s] = DH(r)
    }
    return t
  }
  return e
}

function ju(e) {
  return kwt(e.replace(/\\(?=u[0-9a-fA-F]{4})/g, "\\u005c"))
}

function kwt(e) {
  return e.replace(/[^\x20-\x7e]/g, bG)
}

function Nn(e) {
  return e.replace(/[\p{Cc}\p{Cf}\u2028\u2029]+/gu, " ")
}

function LH(e) {
  return e.replace(Bt, (t) => Array.from({
    length: t.length
  }, (n, r) => `\\u${t.charCodeAt(r).toString(16).padStart(4,"0")}`).join(""))
}

function Sme(e) {
  return Ey(Zn(e)).replace(ie, " ")
}

function bi(e, t) {
  let n = Sme(e);
  if (t?.drop) n = n.replace(t.drop, "");
  if (n = n.replace(/\s+/g, " ").trim(), t?.maxCodeUnits !== void 0) n = Q(n, t.maxCodeUnits).trim();
  return n
}

function HHr(e, {
  maxCodeUnits: t,
  maxLines: n
}) {
  let r = e.replace(/\r\n?/g, `
`).split(`
`),
    s = r.slice(0, n).map((i) => Sme(i.replace(/\t/g, " "))).join(`
`);
  return {
    text: Q(s, t).replace(/\n+$/, ""),
    truncated: r.length > n || s.length > t
  }
}

function jra(e) {
  return bi(e) === e
}
var H = 8192;

function $Hr(e, t) {
  let n = e;
  if (e.length > H) {
    let i = e.length - H,
      o = e.slice(i).search(/[\r\n]/);
    if (o !== -1) n = e.slice(i + o + 1);
    else {
      let c = Math.max(e.lastIndexOf(`
`), e.lastIndexOf("\r")) + 1;
      n = Q(e.slice(c, c + H + 1), H)
    }
  }
  let r = n.split(/\r?\n/),
    s = [];
  for (let i = r.length - 1; i >= 0 && s.length < t; i--) {
    let o = r[i].split("\r");
    for (let c = o.length - 1; c >= 0; c--) {
      let u = bi(o[c], {
        maxCodeUnits: 512
      });
      if (u !== "") {
        s.push(u);
        break
      }
    }
  }
  return s.reverse()
}
var h7 = 255;

function Tk(e) {
  return Fe(e, h7)
}

function vwt(e) {
  return Fe(e, yWs)
}

function Fe(e, t) {
  let n = bi(e, {
    drop: /[`<>]/g
  }).replace(/\]\(/g, "] (").replace(/!\[/g, "! [").replace(/\]\[/g, "] [").replace(/\]:/g, "] :");
  return Q(n, t).trim()
}
var Njt = 2048,
  UHr = /[`\[\]<>]/g;

function Pae(e) {
  let t = bi(e).replace(/\]\(/g, "] (").replace(/!\[/g, "! [").replace(/\]\[/g, "] [").replace(/\]:/g, "] :").replace(/</g, "< ").replace(/\s+/g, " ").trim();
  return Q(t, Njt).trim()
}

function wme(e) {
  return e.replace(/[\u007F-\u009F\u2028\u2029\p{Cf}]/gu, bG)
}

function bG(e) {
  return e.split("").map((t) => "\\u" + t.charCodeAt(0).toString(16).padStart(4, "0")).join("")
}

function nK(e) {
  let t = 0;
  while (t < e.length && e.charCodeAt(t) <= 32) t++;
  let n = e.slice(t),
    r = /^([A-Za-z0-9][A-Za-z0-9+.-]*):\/\//.exec(n),
    s = r?.[1]?.toLowerCase(),
    i = r ? n.slice(r[0].length) : n,
    o = i.indexOf(":"),
    c = i.indexOf("/");
  if (!(s !== void 0 ? s !== "file" : o !== -1 && (c === -1 || o < c) && !/^[A-Za-z]:/.test(i))) {
    let x = r ? P(i) : i;
    return x.includes("@[") || x.startsWith("[")
  }
  let a = P(i),
    l = r ? /^(?:[^@/?#\\[\]]+@)?(\[[0-9A-Fa-f:.]+\])(?::\d*)?(?=\/|$)/.exec(a) : /^[^@:/[\]]+@(\[[0-9A-Fa-f:.]+\])(?=:)/.exec(a),
    g = l !== null && !!n4e(`ssh://${l[1]}/`)?.hostname;
  return /[[\]]/.test(a.slice(g ? l[0].length : 0))
}

function n4e(e) {
  try {
    return new URL(e)
  } catch {
    return null
  }
}

function P(e) {
  return e.replace(/%([0-9A-Fa-f]{2})/g, (t, n) => {
    let r = parseInt(n, 16);
    return r === 0 ? t : String.fromCharCode(r)
  })
}

function Pe(e) {
  let t = new Int32Array(e.length);
  for (let n = 0; n < e.length; n++) t[n] = n;
  return {
    text: e,
    origin: t
  }
}

function Ke(e, t, n) {
  let r = [];
  for (let s of e.text.matchAll(t)) {
    let {
      keep: i,
      insert: o,
      keepEnd: c = 0
    } = n(s), u = s.index ?? 0, a = s[0].length, l = Math.min(Math.max(i | 0, 0), a), g = Math.min(Math.max(c | 0, 0), a - l);
    r.push([u + l, u + a - g, o])
  }
  return Z(e, r)
}

function Z(e, t) {
  if (t.length === 0) return e;
  let {
    text: n,
    origin: r
  } = e, s = n.length;
  for (let [a, l, g] of t) s += g.length - (l - a);
  let i = new Int32Array(s),
    o = [],
    c = 0,
    u = 0;
  for (let [a, l, g] of t) o.push(n.slice(c, a)), i.set(r.subarray(c, a), u), u += a - c, o.push(g), i.fill(-1, u, u + g.length), u += g.length, c = l;
  return o.push(n.slice(c)), i.set(r.subarray(c), u), {
    text: o.join(""),
    origin: i
  }
}

function ae(e, t, n) {
  return {
    text: e.text.slice(t, n),
    origin: e.origin.slice(t, n)
  }
}

function Mwe(e, {
  asRewritten: t = !1
} = {}) {
  let n = e.trimStart(),
    r = /^([A-Za-z][A-Za-z0-9+.-]*):\/\//.exec(n);
  if (r) {
    let s = r[1]?.toLowerCase();
    if (s === "file") return null;
    if (s === "http" || s === "https") {
      let i = n4e(n);
      return i?.hostname ? {
        host: i.hostname,
        path: i.pathname
      } : null
    }
    return We(ycn(n.slice(r[0].length)), "/")
  }
  return We(t ? ycn(n) : n, ":")
}

function Be(e, t) {
  let n = e.indexOf("@["),
    r = n === -1 ? 0 : n + 1,
    s = e[r] === "[" ? r : -1,
    i = s === -1 ? -1 : e.indexOf("]", s + 1),
    o = e.indexOf(t, i === -1 ? 0 : i + 1);
  return {
    open: s,
    close: i,
    cut: o
  }
}

function We(e, t) {
  let {
    open: n,
    close: r,
    cut: s
  } = Be(e, t), i = n === -1 ? 0 : n, o = e.indexOf("/");
  if (t === ":" && (s === -1 || o !== -1 && o < e.indexOf(":"))) return null;
  let c = s === -1 ? "" : e.slice(t === ":" ? s + 1 : s);
  if (r !== -1) {
    let g = e.slice(r + 1, s === -1 ? e.length : s),
      x = e.slice(0, i) + e.slice(i + 1, r),
      d = ve(g) !== g ? x : ve(x),
      p = d.slice(d.lastIndexOf("@") + 1),
      E = n4e(`ssh://[${p}]/`)?.hostname;
    return p ? {
      host: E || p,
      path: c
    } : null
  }
  let u = s === -1 ? e : e.slice(0, s),
    a = u.slice(u.lastIndexOf("@") + 1);
  if (a.startsWith("[")) return null;
  let l = t === "/" ? a.replace(/:\d*$/, "") : a;
  return l ? {
    host: l,
    path: c
  } : null
}

function Ge(e) {
  let {
    text: t,
    from: n
  } = Vt(e), {
    close: r,
    cut: s
  } = Be(t, "/"), i = s === -1 ? t.length : s, o = [], c = (u, a) => {
    let l = t.lastIndexOf("@", a - 1);
    if (l >= u) o.push([n(u), n(l)])
  };
  if (r === -1) c(0, i);
  else c(0, r), c(r + 1, i);
  return o
}

function ycn(e) {
  return e.replace(/(?:%(?!00)[0-9A-Fa-f]{2})+/g, (t) => {
    try {
      return decodeURIComponent(t)
    } catch {
      return P(t)
    }
  })
}

function Vt(e) {
  if (!e.includes("%")) return {
    text: e,
    from: (s) => s
  };
  let t = [],
    n = "",
    r = 0;
  for (let s of e.matchAll(/(?:%(?!00)[0-9A-Fa-f]{2})+/g)) {
    for (let a = r; a < s.index; a++) t.push(a);
    n += e.slice(r, s.index);
    let i, o;
    try {
      i = decodeURIComponent(s[0]), o = Array.from(i, (a) => {
        let l = a.codePointAt(0);
        return l < 128 ? 1 : l < 2048 ? 2 : l < 65536 ? 3 : 4
      })
    } catch {
      i = P(s[0]), o = Array.from(i, () => 1)
    }
    let c = s.index,
      u = 0;
    for (let a of o) {
      let l = i.codePointAt(u) > 65535 ? 2 : 1;
      for (let g = 0; g < l; g++) t.push(c);
      u += l, c += 3 * a
    }
    n += i, r = s.index + s[0].length
  }
  for (let s = r; s <= e.length; s++) t.push(s);
  return {
    text: n + e.slice(r),
    from: (s) => t[s]
  }
}

function ve(e) {
  let t = e.indexOf(":"),
    n = e.slice(t + 1);
  if (t === -1 || !/^[ \t\n\v\f\r]*[+-]?\d+$/.test(n)) return e;
  let r = Number.parseInt(n.trim(), 10);
  return r >= 0 && r < 65536 ? e.slice(0, t) : e
}
var Zt = /\s/g,
  Jt = /[\n\r\u2028\u2029]/g,
  jt = /(?:@|%40)(?:\[|%5B)/gi,
  Xt = /^(?:\[|%5B)/i,
  Yt = /\]|%5D/gi,
  fWs = /(?:^|[^A-Za-z0-9+.-])(?:https?|wss?|ftps?)$/i,
  Je = /(?:^|[^A-Za-z0-9+.-])(?:ssh|git|git\+ssh|ssh\+git)$/i,
  qt = /[,;|&]/g,
  Qt = /(?:^|[^A-Za-z0-9+.-])[A-Za-z][A-Za-z0-9+.-]{0,31}$/,
  en = /["'`|,;&<>()[\]\\@/?#]|%40|%5B/i,
  tn = /["'`]/,
  nn = /[;|&\n]/g,
  rn = 64,
  sn = 2048,
  on = /[\s"'`]/g;

function ue(e) {
  let t = [],
    n = A(e, on),
    r = 0;
  for (let s = e.indexOf("://"); s !== -1;) {
    let i = s + 3;
    if (s >= r && Je.test(e.slice(Math.max(0, s - 8), s))) {
      r = Math.min(n(i), i + sn);
      for (let [o, c] of Ge(e.slice(i, r))) t.push([i + o, i + c])
    }
    s = e.indexOf("://", i)
  }
  return t
}

function Wra(e) {
  return je(e).spans
}

function je(e) {
  let t = [],
    n = [],
    r = A(e, Zt),
    s = A(e, /\//g),
    i = le(e, jt),
    o = A(e, Yt),
    c = A(e, /\//g),
    u = A(e, nn),
    a = A(e, /[/?#]/g),
    l = A(e, qt),
    g = A(e, /@/g),
    x = A(e, /%40/gi),
    d = A(e, /\[REDACTED|\*\*\*:\*\*\*/g),
    p = A(e, /[:%]/g),
    E = A(e, /["'`,;|&<>{}()]/g),
    m = Ze(e, !1),
    _ = Ze(e, !0);
  for (let h = e.indexOf("://"); h !== -1;) {
    let f = h + 3,
      C = e.indexOf("://", f),
      y = r(f),
      v = g(f),
      I;
    if (fWs.test(e.slice(Math.max(0, h - 8), h))) {
      let R = Math.min(a(f), y),
        M = Math.min(l(f), R);
      if (I = v < R ? Math.max(m(f, R), _(v, R)) : Math.max(m(f, Math.min(s(f), y)), _(f, M)), I <= f) {
        let z = Math.min(R, u(f));
        n.push({
          start: f,
          fieldEnd: Math.min(M, z),
          lastEncodedAt: _(f, z)
        })
      }
    } else {
      let R = Math.min(s(f), y),
        M = Math.min(y, C === -1 ? e.length : C),
        z = Je.test(e.slice(Math.max(0, h - 8), h)),
        B = z ? i(f) : null,
        Oe = z ? Xt.exec(e.slice(f, f + 3)) : null,
        Rt = [
          [Oe !== null ? f + Oe[0].length : -1, M],
          [B !== null && B.index < M ? B.index + B[0].length : -1, y]
        ];
      for (let [we, St] of Rt) {
        let Le = we === -1 ? y : o(we);
        if (Le < St) R = Math.max(R, Math.min(c(Le), y))
      }
      I = Math.max(m(f, R), _(f, R))
    }
    if (I > f) t.push({
      start: f,
      end: I,
      separatorEnd: I + (e[I] === "@" ? 1 : 3),
      loginEnd: v <= I ? v : Math.min(x(f), I)
    });
    else {
      let R = d(f);
      if (R > f && R < Math.min(y, s(f), E(f)) && p(f) < R) t.push({
        start: f,
        end: R,
        separatorEnd: R,
        loginEnd: R
      })
    }
    h = C
  }
  return {
    spans: t,
    hostParts: n
  }
}

function Xe(e, t) {
  let {
    spans: n,
    hostParts: r
  } = je(e);
  if (n.length === 0 && r.length === 0) return [];
  let s = A(e, /[\s"'>}|,;&`)\]]/g),
    i = A(e, /\s/g),
    o = [],
    c = [];
  for (let d of n) o.push({
    start: d.start,
    end: d.end,
    loginEnd: d.loginEnd
  }), c.push({
    ...d,
    userinfo: d
  });
  let u = J(e, t);
  for (let d of r) {
    let p = u(d.start)[0];
    if (p && p.keyStart < d.fieldEnd && e.slice(d.start, p.keyStart).includes("%")) {
      let E = d.lastEncodedAt > p.keyStart ? d.lastEncodedAt : p.valueStart;
      o.push({
        start: d.start,
        end: E,
        loginEnd: E
      }), c.push(E > p.valueStart ? {
        start: d.start,
        end: E,
        userinfo: {
          start: d.start,
          end: E,
          separatorEnd: E + 3,
          loginEnd: E
        }
      } : {
        start: d.start,
        end: E
      })
    }
  }
  if (c.length === 0) return [];
  o.sort((d, p) => d.start - p.start);
  let a = J(e, t),
    l = 0;
  for (let d = 0, p = a(d); p[0] !== void 0;) {
    let E, m = null;
    for (let h of p)
      if (m = h.valueEnd(), m !== null) {
        E = h;
        break
      } if (E === void 0 || m === null) {
      d = p[0].keyStart + 1, p = a(d);
      continue
    }
    while (l < o.length && o[l].start <= E.keyStart) l++;
    let _ = o[l];
    if (_ !== void 0 && _.start < m) {
      let h = e[E.valueStart] ?? "",
        C = (h === '"' || h === "'") && m - 1 > E.valueStart && e[m - 1] === h ? Math.max(m, _.end) : i(Math.max(m, _.end, s(_.loginEnd + 1)));
      c.push({
        start: E.valueStart,
        end: C
      })
    }
    d = m, p = a(d)
  }
  let g = {
      nextKey: J(e, t),
      plainKeys: J(e, t),
      nextLineEnd: A(e, Jt),
      span: 0,
      lineEnd: -1,
      resumeAt: 0,
      overflowEnd: un(e, () => g.lineEnd)
    },
    x = [];
  for (let d of dn(c)) {
    let p = x.at(-1);
    x.push(p !== void 0 && d.start < p.end ? Ve(e, {
      start: x.pop().start,
      end: Math.max(p.end, d.end)
    }, g) : Ve(e, d, g))
  }
  return x.map((d) => d.userinfo ? d : ln(e, d))
}
var He = new WeakMap;

function cn(e) {
  let t = He.get(e);
  if (!t) t = {
    word: new RegExp(e.word, "gi"),
    notTail: new RegExp(`(?!${e.tail})[^]`, "gi"),
    separator: new RegExp(e.separator, "iy"),
    value: new RegExp(e.value, "iy")
  }, He.set(e, t);
  return t
}

function J(e, t) {
  let n = t.map((r) => {
    let {
      word: s,
      notTail: i,
      separator: o,
      value: c
    } = cn(r), u = le(e, s), a = A(e, i), l = -1, g = -1, x = -1, d = null, p = (h) => {
      if (h !== x) x = h, c.lastIndex = h, d = c.test(e) ? c.lastIndex : null;
      return d
    }, E = (h) => {
      if (h !== l) l = h, o.lastIndex = h, g = o.test(e) ? o.lastIndex : -1;
      return g
    }, m = -1, _ = null;
    return (h) => {
      if (m !== -1 && h >= m && (_ === null || h <= _.keyStart)) return _;
      m = h, _ = null;
      for (let f = u(h); f !== null;) {
        let C = f.index + f[0].length,
          y = E(r.tail ? a(C) : C);
        if (y !== -1) {
          _ = {
            keyStart: f.index,
            valueStart: y,
            valueEnd: () => p(y)
          };
          break
        }
        f = u(f.index + 1)
      }
      return _
    }
  });
  return (r) => {
    let s = [];
    for (let i of n) {
      let o = i(r);
      if (o && (!s[0] || o.keyStart <= s[0].keyStart)) s = s[0] && o.keyStart === s[0].keyStart ? [...s, o] : [o]
    }
    return s
  }
}

function Ve(e, t, n) {
  if (t.userinfo && an(e, t.userinfo, n)) return t;
  let r = t.end;
  n.resumeAt = Math.max(n.resumeAt, t.start);
  for (let s = n.nextKey(n.resumeAt); s[0] !== void 0 && s[0].keyStart < r;) {
    let i = s[0].keyStart;
    if (i > n.lineEnd) {
      let a = n.nextLineEnd(i);
      n.span = rn * (a - n.lineEnd), n.lineEnd = a
    }
    let o = null,
      c = s[0];
    for (let a of s)
      if (o = a.valueEnd(), o !== null) {
        c = a;
        break
      } let u = o ?? c.valueStart;
    if (n.span -= u - i, n.span < 0) return {
      start: t.start,
      end: Math.max(r, n.overflowEnd(t.start))
    };
    r = Math.max(r, u), n.resumeAt = c.valueStart, s = n.nextKey(n.resumeAt)
  }
  return r === t.end ? t : {
    start: t.start,
    end: r
  }
}

function an(e, t, n) {
  if (e[t.end] !== "@" || en.test(e.slice(t.start, t.end)) || !Qt.test(e.slice(Math.max(0, t.start - 36), t.start - 3))) return !1;
  for (let r = n.plainKeys(t.start); r[0] !== void 0 && r[0].keyStart < t.end; r = n.plainKeys(r[0].keyStart + 1))
    if (r.some((s) => s.valueStart === t.end)) return !1;
  return !0
}

function un(e, t) {
  let n = A(e, /["'`]/g),
    r = -1,
    s = e.length;
  return (i) => {
    if (t() !== r) r = t(), s = n(i) < r ? e.length : r;
    return s
  }
}

function ln(e, t) {
  let n = e[t.end - 1];
  if (n === void 0 || !tn.test(n)) return t;
  return (e.slice(t.start, t.end).split(n).length - 1) % 2 === 1 ? {
    start: t.start,
    end: t.end - 1
  } : t
}

function dn(e) {
  e.sort((n, r) => n.start - r.start || r.end - n.end);
  let t = [];
  for (let n of e) {
    let r = t.at(-1);
    if (r === void 0 || n.start >= r.end) t.push(n);
    else t[t.length - 1] = {
      start: r.start,
      end: Math.max(r.end, n.end)
    }
  }
  return t
}

function A(e, t) {
  let n = le(e, t);
  return (r) => n(r)?.index ?? e.length
}

function le(e, t) {
  let n = -1,
    r = null;
  return (s) => {
    if (n === -1 || s < n || r !== null && s > r.index) t.lastIndex = s, r = t.exec(e), n = s;
    return r
  }
}

function Ze(e, t) {
  let n = null;
  return (r, s) => {
    if (n === null) {
      n = new Int32Array(e.length + 1);
      let o = -1;
      for (let c = 0; c <= e.length; c++) {
        if (t) {
          if (c >= 3 && e.startsWith("%40", c - 3)) o = c - 3
        } else if (c >= 1 && e[c - 1] === "@") o = c - 1;
        n[c] = o
      }
    }
    let i = n[Math.min(s, e.length)];
    return i >= r ? i : -1
  }
}
var me = new RegExp(Dnt(String.raw`api[_-]?key|secret|token|password|passwd|credential|bearer|authorization|auth[_-]?header|memory[_-]?request[_-]?mac|cookie|session[_-]?(?:id|key)|connection[_-]?string|(?:private|ssh|encryption|signing|access|deploy|master|license)[_-]?key|client[_-]?secret`), "i"),
  U = `[\\s\\u0085${t4e}]`,
  L = `(?:${Dnt("Bearer|Basic")})[${t4e}]*[\\s\\u0085]+`,
  Ye = "[^\\s\\u0085,;&}\\])]+",
  qe = "(?![\\w\\[({$/+=~!@%^?\\\\-])",
  q = "\\n\\r\\x0b\\x0c\\u0085\\u2028\\u2029",
  w = "[\\s\\u0085]",
  pWs = new RegExp(U),
  zra = new RegExp(`(?:[=:]|["']|\\b(?:${Dnt("bearer|basic")}))$`, "i"),
  fn = `\\\\+(?:"[^"${q}]*(?<!\\\\)(?=\\\\+")|'[^'${q}]*(?<!\\\\)(?=\\\\+'))`,
  Qe = `[^\\s\\u0085,;&})"'\\\\]+`,
  re = `"[^"${q}]*"|'[^'${q}]*'|"[^"]*"${qe}|'[^']*'${qe}|[^\\s-]{0,4}\\[REDACTED\\]['"\`]?|${L}(?:\\[REDACTED\\]|${Ye})|${Ye}`,
  gn = {
    word: "\\b(?:Bearer|Basic)",
    tail: "",
    separator: `${w}+`,
    value: "[A-Za-z0-9+/=._~-]{20,}"
  },
  pn = {
    word: `(?:${me.source})`,
    tail: "[\\w.-]",
    separator: `["']?${w}*[=:]${w}*`,
    value: re
  },
  hn = {
    word: "\\b(?:AWS|GOOGLE|GCP|GCLOUD|AZURE)_\\w",
    tail: "\\w",
    separator: `${w}*[=:]${w}*`,
    value: re
  },
  En = [pn, hn, gn],
  T = "[\\w=-]",
  k = `${T}{20,}(?:\\.[0-9a-z]{9})?`,
  xn = "[\\w.-]{0,256}(?![\\w.-])",
  ot = `${w}*(?!${w})`,
  _e = `(?:${me.source})${xn}`,
  ct = `\\b(?:${Dnt("AWS|GOOGLE|GCP|GCLOUD|AZURE")})${Swt}_\\w+`,
  pe = `${_e}(?:${Swt}["'])?${U}*[=:]${ot}(${re})`,
  he = `${ct}${U}*[=:]${w}*(${re})`,
  at = /\\["']/,
  ut = `${_e}${Swt}\\\\+["']${U}*[=:]${ot}(${fn}|${L}${Qe}|${Qe}|\\\\+["'][^\\s\\u0085,;&})"'\\\\]*)`,
  O = `[^\\s\\u0085,;&}\\])"']{0,64}?(?:${_e}|${ct})`,
  An = `(?:${L})?(?:[{[(]{0,8}(?:"${O}"|'${O}')|${O})${U}*[=:]`,
  mn = `(?:${L})?(?:[{[(]{0,8}(?:"${O}"|'${O}'|\\\\+"${O}\\\\+"|\\\\+'${O}\\\\+')|${O})${U}*[=:]`,
  lt = "\\][^\\s\"'>}|,;&`)\\]]*",
  W = "[A-Za-z0-9_-]",
  Ee = `${W}{10}${W}*`,
  et = `\\.${Ee}\\.${Ee}`,
  Re = `(?<!${W})(?=${W}+${et})(?:${W}*?-)??(eyJ${Ee}${et})`,
  dt = [{
    id: "url-userinfo",
    source: `:\\/\\/((["'])[^/@\\s]*\\2(?=@)|(?:[^/@\\s"'|,;&\`]+(?=@))|[^/@\\s"'|,;&\`]*["'|,;&\`][^/@\\s]*@)@?`,
    confidence: "low"
  }, {
    id: "gcp-service-account",
    source: "\\b([a-z0-9-]{1,64}@[a-z0-9-]+\\.iam\\.gserviceaccount\\.com)\\b",
    flags: "i",
    confidence: "low"
  }, {
    id: "loose-anthropic-key",
    source: "\\b(sk-ant-?[\\w-]{10,})",
    confidence: "low"
  }, {
    id: "http-auth-scheme",
    source: `\\b${L}([A-Za-z0-9+/=._~-]{20,})`,
    flags: "i",
    confidence: "low"
  }, {
    id: "loose-jwt",
    prefilter: /eyJ/,
    source: Re,
    confidence: "low"
  }, {
    id: "sensitive-assign",
    source: pe,
    flags: "i",
    confidence: "low"
  }, {
    id: "cloud-env-var",
    source: he,
    flags: "i",
    confidence: "low"
  }, {
    id: "url-userinfo-tail",
    source: ":\\/\\/(\\[REDACTED\\](?!@|%40[^\\s\"'>}|,;&`)\\]@/]*(?:[\\s\"'>}|,;&`)\\]/]|$))[^\\s\"'>}|,;&`)\\]]*?(?=[\\s\"'>}|,;&`)\\]]|:\\/\\/|$))",
    confidence: "low"
  }, {
    id: "url-userinfo-later-at",
    source: ":\\/\\/(\\[REDACTED\\]@(?:[^\\s:/?#\"'>}|,;&`)\\]]|:(?!\\/\\/)){0,256})(?=@|%40)",
    confidence: "low"
  }, {
    id: "url-userinfo-encoded",
    source: ":\\/\\/((?:\\[REDACTED\\]@)?(?:(?:[^/?#@\\s\"',;&<>|)\\]{}`[]*[\"'`<>{}[\\]][^/?#@\\s,;&|{}\"'`<>[\\]()]*(?=%40))|[^/?#@\\s\"',;&<>|)\\]}`[]+(?=%40)|(?=[^/?#@\\s\"',;&<>|)\\]}`[]*?(?:%|:[^/?#@\\s\"',;&<>|)\\]}`[]))[^/?#@\\s\"',;&<>|)\\]}`[]+(?=\\[REDACTED\\])))",
    confidence: "low"
  }, {
    id: "masked-value-rest",
    source: `\\[REDACTED\\](${lt})`,
    confidence: "low"
  }, {
    id: "anthropic-signed-key-rest",
    redactOnly: !0,
    prefilter: /\[REDACTED\]\.eyJ/,
    source: "\\[REDACTED\\]\\.(eyJ[\\w-]+\\.[\\w-]+)",
    confidence: "low"
  }, {
    id: "sensitive-assign-escaped",
    redactOnly: !0,
    prefilter: at,
    source: ut,
    flags: "i",
    confidence: "low"
  }, {
    id: "aws-access-token",
    source: "\\b((?:A3T[A-Z0-9]|AKIA|ASIA|ABIA|ACCA)[A-Z2-7]{16})\\b",
    confidence: "high"
  }, {
    id: "gcp-api-key",
    source: "\\b(AIza[\\w-]{35})(?![\\w-])",
    confidence: "high"
  }, {
    id: "google-oauth-client-secret",
    source: "\\bGOCSPX-[\\w-]{28}(?![\\w-])",
    confidence: "high"
  }, {
    id: "azure-ad-client-secret",
    source: `(?:^|[\\\\'"\\x60\\s>=:(,)])([a-zA-Z0-9_~.]{3}\\dQ~[a-zA-Z0-9_~.-]{31,34})(?:$|[\\\\'"\\x60\\s<),])`,
    confidence: "high"
  }, {
    id: "digitalocean-pat",
    source: `\\b(dop_v1_[a-f0-9]{64})(?:[\\x60'"\\s;]|\\\\[nr]|$)`,
    confidence: "high"
  }, {
    id: "digitalocean-access-token",
    source: `\\b(doo_v1_[a-f0-9]{64})(?:[\\x60'"\\s;]|\\\\[nr]|$)`,
    confidence: "high"
  }, {
    id: "anthropic-api-key",
    source: `\\b(sk[-]ant[-]api03-[a-zA-Z0-9_\\-]{93}AA)(?:[\\x60'"\\s;]|\\\\[nr]|$)`,
    confidence: "high"
  }, {
    id: "anthropic-admin-api-key",
    source: `\\b(sk-ant-admin01-[a-zA-Z0-9_\\-]{93}AA)(?:[\\x60'"\\s;]|\\\\[nr]|$)`,
    confidence: "high"
  }, {
    id: "anthropic-oauth-token",
    source: `\\b(sk-ant-(?:oat|ort)\\d{2}-[\\w-]{20,})(?:[\\x60'"\\s;]|\\\\[nr]|$)`,
    run: "[\\w-]",
    confidence: "high"
  }, {
    id: "openai-api-key",
    source: "sk-[A-Za-z0-9_-]{8,200}T3BlbkFJ[A-Za-z0-9_-]{8,200}",
    confidence: "high"
  }, {
    id: "openai-legacy-api-key",
    source: "\\bsk-[a-zA-Z0-9]{48}(?![a-zA-Z0-9])",
    confidence: "high"
  }, {
    id: "huggingface-access-token",
    source: `\\b(hf_[a-zA-Z]{34})(?:[\\x60'"\\s;]|\\\\[nr]|$)`,
    confidence: "high"
  }, {
    id: "supabase-secret-key",
    source: "\\bsb_secret_[A-Za-z0-9_-]{20,}",
    confidence: "high"
  }, {
    id: "supabase-access-token",
    source: "\\bsbp_[a-z0-9]{40,}",
    confidence: "high"
  }, {
    id: "github-pat",
    source: "ghp_[0-9a-zA-Z]{36}",
    confidence: "high"
  }, {
    id: "github-fine-grained-pat",
    source: "github_pat_\\w{82}",
    confidence: "high"
  }, {
    id: "github-app-token",
    source: "(?:ghu|ghs)_[0-9a-zA-Z]{36}",
    confidence: "high"
  }, {
    id: "github-oauth",
    source: "gho_[0-9a-zA-Z]{36}",
    confidence: "high"
  }, {
    id: "github-refresh-token",
    source: "ghr_[0-9a-zA-Z]{36}",
    confidence: "high"
  }, {
    id: "gitlab-pat",
    source: `glpat-${k}`,
    displayRun: T,
    confidence: "high"
  }, {
    id: "gitlab-deploy-token",
    source: `gldt-${k}`,
    displayRun: T,
    confidence: "high"
  }, {
    id: "gitlab-runner-authentication-token",
    source: `glrt-${k}`,
    displayRun: T,
    confidence: "high"
  }, {
    id: "gitlab-oauth-app-secret",
    source: `gloas-${k}`,
    displayRun: T,
    confidence: "high"
  }, {
    id: "gitlab-pipeline-trigger-token",
    source: `glptt-${k}`,
    displayRun: T,
    confidence: "high"
  }, {
    id: "gitlab-kubernetes-agent-token",
    source: `glagent-${k}`,
    displayRun: T,
    confidence: "high"
  }, {
    id: "gitlab-incoming-mail-token",
    source: `glimt-${k}`,
    displayRun: T,
    confidence: "high"
  }, {
    id: "gitlab-scim-oauth-token",
    source: `glsoat-${k}`,
    displayRun: T,
    confidence: "high"
  }, {
    id: "gitlab-ci-build-token",
    source: `glcbt-${k}`,
    displayRun: T,
    confidence: "high"
  }, {
    id: "gitlab-feed-token",
    source: `glft-${k}`,
    displayRun: T,
    confidence: "high"
  }, {
    id: "gitlab-feature-flag-client-token",
    source: `glffct-${k}`,
    displayRun: T,
    confidence: "high"
  }, {
    id: "slack-bot-token",
    source: "xoxb-[0-9]{10,13}-[0-9]{10,13}[a-zA-Z0-9-]*",
    confidence: "high"
  }, {
    id: "slack-user-token",
    source: "xox[a-z](?:-[0-9]{10,13}){3}-[a-zA-Z0-9-]{28,34}",
    confidence: "high"
  }, {
    id: "slack-rotation-token",
    source: "xoxe(?:\\.xox[a-z])?-[0-9]-[A-Za-z0-9-]{28,}",
    confidence: "high"
  }, {
    id: "slack-app-token",
    source: "xapp-\\d-[A-Z0-9]+-\\d+-[a-z0-9]+",
    flags: "i",
    confidence: "high"
  }, {
    id: "slack-workflow-token",
    source: "\\bxwfp-[a-zA-Z0-9-]{20,}",
    confidence: "high"
  }, {
    id: "slack-webhook-url",
    source: "(?:https?://)?hooks\\.slack\\.com/(?:services|workflows|triggers)/[A-Za-z0-9+/_-]{40,}",
    flags: "i",
    confidence: "high"
  }, {
    id: "twilio-api-key",
    source: "SK[0-9a-fA-F]{32}",
    confidence: "high"
  }, {
    id: "sendgrid-api-token",
    source: `\\b(SG\\.[a-zA-Z0-9=_\\-.]{66})(?:[\\x60'"\\s;]|\\\\[nr]|$)`,
    confidence: "high"
  }, {
    id: "npm-access-token",
    source: `\\b(npm_[a-zA-Z0-9]{36})(?:[\\x60'"\\s;]|\\\\[nr]|$)`,
    confidence: "high"
  }, {
    id: "pypi-upload-token",
    source: "pypi-AgEIcHlwaS5vcmc[\\w-]{50,1000}",
    confidence: "high"
  }, {
    id: "databricks-api-token",
    source: `\\b(dapi[a-f0-9]{32}(?:-\\d)?)(?:[\\x60'"\\s;]|\\\\[nr]|$)`,
    confidence: "high"
  }, {
    id: "hashicorp-tf-api-token",
    source: "[a-zA-Z0-9]{14}\\.atlasv1\\.[a-zA-Z0-9\\-_=]{60,70}",
    confidence: "high"
  }, {
    id: "pulumi-api-token",
    source: `\\b(pul-[a-f0-9]{40})(?:[\\x60'"\\s;]|\\\\[nr]|$)`,
    confidence: "high"
  }, {
    id: "postman-api-token",
    source: `\\b(PMAK-[a-fA-F0-9]{24}-[a-fA-F0-9]{34})(?:[\\x60'"\\s;]|\\\\[nr]|$)`,
    confidence: "high"
  }, {
    id: "grafana-api-key",
    source: `\\b(eyJrIjoi[A-Za-z0-9+/]{70,400}={0,3})(?:[\\x60'"\\s;]|\\\\[nr]|$)`,
    confidence: "high"
  }, {
    id: "grafana-cloud-api-token",
    source: `\\b(glc_[A-Za-z0-9+/]{32,400}={0,3})(?:[\\x60'"\\s;]|\\\\[nr]|$)`,
    confidence: "high"
  }, {
    id: "grafana-service-account-token",
    source: `\\b(glsa_[A-Za-z0-9]{32}_[A-Fa-f0-9]{8})(?:[\\x60'"\\s;]|\\\\[nr]|$)`,
    confidence: "high"
  }, {
    id: "sentry-user-token",
    source: `\\b(sntryu_[a-f0-9]{64})(?:[\\x60'"\\s;]|\\\\[nr]|$)`,
    confidence: "high"
  }, {
    id: "sentry-org-token",
    source: "\\bsntrys_eyJpYXQiO[a-zA-Z0-9+/]{10,200}(?:LCJyZWdpb25fdXJs|InJlZ2lvbl91cmwi|cmVnaW9uX3VybCI6)[a-zA-Z0-9+/]{10,200}={0,2}_[a-zA-Z0-9+/]{43}",
    confidence: "high"
  }, {
    id: "stripe-access-token",
    source: `\\b((?:sk|rk)_(?:test|live|prod)_[a-zA-Z0-9]{10,99})(?:[\\x60'"\\s;]|\\\\[nr]|$)`,
    confidence: "high"
  }, {
    id: "shopify-access-token",
    source: "shpat_[a-fA-F0-9]{32}",
    confidence: "high"
  }, {
    id: "shopify-shared-secret",
    source: "shpss_[a-fA-F0-9]{32}",
    confidence: "high"
  }],
  _n = 64;

function xe(e, t) {
  let n = /-----BEGIN[ A-Z0-9_-]{0,100}?PRIVATE KEY(?: BLOCK)?-----/gi,
    r = /-----END[ A-Z0-9_-]{0,100}?PRIVATE KEY(?: BLOCK)?-----/gi;
  n.lastIndex = t;
  let s = n.exec(e);
  if (!s) return null;
  r.lastIndex = s.index + s[0].length + _n;
  let i = r.exec(e);
  if (!i) return null;
  return {
    start: s.index,
    end: i.index + i[0].length
  }
}

function Rn(e) {
  return xe(e, 0) !== null
}

function mWs(e) {
  let t = ft(e);
  if (t.length === 0) return e;
  let n = "",
    r = 0;
  for (let s of t) n += e.slice(r, s.start) + "[REDACTED]", r = s.end;
  return n + e.slice(r)
}

function ft(e) {
  let t = e.indexOf("-----");
  while (t !== -1) {
    while (e.charCodeAt(t + 5) === 45) t++;
    if ((e.charCodeAt(t + 5) | 32) === 98 && (e.charCodeAt(t + 6) | 32) === 101 && (e.charCodeAt(t + 7) | 32) === 103 && (e.charCodeAt(t + 8) | 32) === 105 && (e.charCodeAt(t + 9) | 32) === 110) break;
    t = e.indexOf("-----", t + 5)
  }
  let n = [];
  if (t === -1) return n;
  for (let r = xe(e, t); r; r = xe(e, r.end)) n.push(r);
  return n
}
var Ae = `(?:[\\x60'"\\s;]|\\\\[nr]|$)`,
  de = "(?=[^a-zA-Z0-9_\\-+=]|$)",
  nt = "(?<![a-zA-Z0-9_\\-])";

function Sn() {
  return dt.map(({
    id: e,
    confidence: t,
    source: n,
    flags: r = "",
    displayRun: s
  }) => {
    let i = {
        id: e,
        confidence: t
      },
      o = r.replace("g", "") + "g";
    if (t !== "high") return {
      ...i,
      re: new RegExp(n, o)
    };
    let c = gt(n);
    if (s === void 0) return {
      ...i,
      re: new RegExp(nt + c + de, o)
    };
    return {
      ...i,
      prefilter: new RegExp(c, r.replace("g", "")),
      re: new RegExp(`(?<!${s})(?=${s}+${de})${s}*?${nt}(${c})${de}`, o)
    }
  })
}

function K(e) {
  return dt.map((t) => {
    let n = (t.flags ?? "").replace("g", ""),
      r = {
        id: t.id,
        confidence: t.confidence,
        ...t.redactOnly === !0 && {
          redactOnly: t.redactOnly
        },
        ...t.prefilter !== void 0 && {
          prefilter: t.prefilter
        }
      };
    if (t.run === void 0) return {
      ...r,
      re: new RegExp(t.source, e ? n + "g" : t.flags ?? "")
    };
    return {
      ...r,
      prefilter: new RegExp(gt(t.source), n),
      re: new RegExp(`(?:(?<!${t.run})|(?<=\\\\[nr]))(?=${t.run}+${Ae})${t.run}*?${t.source}`, e ? n + "g" : n)
    }
  })
}

function gt(e) {
  return e.endsWith(Ae) ? e.slice(0, -Ae.length) : e
}

function j(e, t) {
  if (typeof t !== "string") return "[REDACTED]";
  let n = t.length >= 2 && (t[0] === '"' || t[0] === "'") && t.at(-1) === t[0] ? t[0] : "",
    r = e.lastIndexOf(t);
  return `${e.slice(0,r)}${n}[REDACTED]${n}${e.slice(r+t.length)}`
}

function bn(e) {
  let t = e[1];
  if (typeof t !== "string") return {
    keep: 0,
    insert: "[REDACTED]"
  };
  let n = t.length >= 2 && (t[0] === '"' || t[0] === "'") && t.at(-1) === t[0] ? 1 : 0,
    r = e[0].lastIndexOf(t);
  return {
    keep: r + n,
    insert: "[REDACTED]",
    keepEnd: e[0].length - r - t.length + n
  }
}

function ee(e) {
  let t = Xe(e, En).map(({
      start: s,
      end: i
    }) => {
      let o = /^(["'])[^]*\1$/.test(e.slice(s, i)) ? 1 : 0;
      return [s + o, i - o]
    }),
    n = ue(e),
    r = kn(e);
  return n.length === 0 && r.length === 0 ? t : pt([...t, ...n, ...r])
}
var fe, yn = new RegExp(lt, "y"),
  Tn = 512;

function kn(e) {
  fe ??= {
    plain: {
      assign: new RegExp(`${pe}|${he}`, "gi"),
      nextKey: new RegExp(An, "iy"),
      valueWithWhitespace: new RegExp(`["']|${L}`, "iy"),
      skipsStrays: !1
    },
    escaped: {
      assign: new RegExp(`${pe}|${he}|${ut}`, "gi"),
      nextKey: new RegExp(mn, "iy"),
      valueWithWhitespace: new RegExp(`\\\\*["']|${L}`, "iy"),
      skipsStrays: !0
    }
  };
  let t = rt(e, fe.plain);
  return at.test(e) ? [...t, ...rt(e, fe.escaped)] : t
}

function rt(e, {
  assign: t,
  nextKey: n,
  valueWithWhitespace: r,
  skipsStrays: s
}) {
  let i = [],
    o, c = 0,
    u = yn;
  t.lastIndex = 0;
  for (let a = t.exec(e); a !== null; a = t.exec(e)) {
    let l = a[1] ?? a[2] ?? a[3],
      g = a.index + a[0].length,
      x = g - l.length;
    n.lastIndex = x;
    let d = l.length <= Tn && n.test(e) ? n.lastIndex : void 0;
    if (d !== void 0 && d < g) {
      if (r.lastIndex = d, !r.test(e)) d = void 0
    }
    if (s && o !== void 0 && a.index >= o && a.index < c && d === void 0) {
      o = void 0, t.lastIndex = c;
      continue
    }
    if (o !== void 0 && a.index < o) {
      let p = /^(["'])[^]*\1$/.test(l),
        E = p && c <= x ? 1 : 0;
      u.lastIndex = g, i.push([x + E, !p && u.test(e) ? u.lastIndex : g - E])
    }
    if (c = g, o = d, o !== void 0) t.lastIndex = x
  }
  return i
}

function pt(e) {
  let t = e.filter(([r, s]) => s > r).sort((r, s) => r[0] - s[0]),
    n = [];
  for (let [r, s] of t) {
    let i = n.at(-1);
    if (i !== void 0 && r <= i[1]) i[1] = Math.max(i[1], s);
    else n.push([r, s])
  }
  return n
}

function D(e, t) {
  let {
    text: n,
    origin: r
  } = e, s = [], i = 0;
  for (let o = 0; o < n.length;) {
    let c = r[o];
    while (i < t.length && t[i][1] <= c) i++;
    let u = t[i];
    if (c < 0 || u === void 0 || c < u[0]) {
      o++;
      continue
    }
    let a = o;
    while (a > 0 && r[a - 1] < 0) a--;
    while (o < n.length && (r[o] < 0 || r[o] >= u[0] && r[o] < u[1])) o++;
    let l = s.at(-1);
    if (l !== void 0 && l[1] >= a) l[1] = o;
    else s.push([a, o, "[REDACTED]"])
  }
  return Z(e, s)
}
var In = 512,
  Cn = 512;
class ht {
  testRules = null;
  redactRules = null;
  displayRules = null;
  resultCache = new Map;
  scan(e) {
    this.testRules ??= K(!1);
    let t = [];
    for (let n of this.testRules)
      if (n.confidence === "high" && n.prefilter?.test(e) !== !1 && n.re.test(e)) t.push({
        ruleId: n.id,
        label: n.id.split("-").map((r) => er[r] ?? Ua(r)).join(" ")
      });
    if (Rn(e)) t.push({
      ruleId: "private-key",
      label: "Private Key"
    });
    return t
  }
  redactContext(e, t = !1) {
    this.redactRules ??= K(!0);
    let n = mWs(e);
    for (let r of this.redactRules)
      if (r.confidence === "low" && ge(r, t, n)) n = n.replace(r.re, j);
    return n
  }
  redactTokens(e) {
    this.redactRules ??= K(!0);
    let t = e;
    for (let n of this.redactRules)
      if (n.confidence === "high" && n.prefilter?.test(t) !== !1) t = t.replace(n.re, j);
    return t
  }
  trackedByRules(e, t = !1) {
    return this.trackedTokens(this.trackedContext(e, t))
  }
  trackedContext(e, t = !1) {
    let n = Z(Pe(e), ft(e).map(({
      start: r,
      end: s
    }) => [r, s, "[REDACTED]"]));
    return this.trackedRules(n, "low", t)
  }
  redactOnlyRules(e) {
    this.redactRules ??= K(!0);
    let t = e;
    for (let n of this.redactRules)
      if (n.redactOnly === !0 && ge(n, !0, t)) t = t.replace(n.re, j);
    return t
  }
  trackedTokens(e) {
    return this.trackedRules(e, "high")
  }
  trackedRules(e, t, n = !1) {
    this.redactRules ??= K(!0);
    let r = e;
    for (let s of this.redactRules)
      if (s.confidence === t && ge(s, n, r.text)) s.re.lastIndex = 0, r = Ke(r, s.re, bn);
    return r
  }
  redactWithUrlRanges(e) {
    let t = ee(e);
    return t.length === 0 ? this.redactTokens(this.redactContext(e, !0)) : D(this.trackedByRules(e, !0), t).text
  }
  redactTracked(e) {
    return D(this.trackedByRules(e, !0), ee(e))
  }
  redact(e) {
    let t = e.length <= In;
    if (t) {
      let r = this.resultCache.get(e);
      if (r !== void 0) return r
    }
    let n = this.redactWithUrlRanges(e);
    if (t) {
      if (this.resultCache.size >= Cn) this.resultCache.delete(this.resultCache.keys().next().value);
      this.resultCache.set(e, n)
    }
    return n
  }
  redactForDisplay(e) {
    this.displayRules ??= Sn();
    let t = e;
    for (let n of this.displayRules) {
      if (n.confidence !== "high" || n.prefilter?.test(t) === !1) continue;
      t = t.replace(n.re, wn)
    }
    return t
  }
}
var S = new ht;

function r4e(e) {
  return S.scan(e)
}

function _s(e) {
  return S.redact(e)
}

function P5(e) {
  return S.redactTokens(S.redactContext(e))
}

function nOo(e) {
  return S.redactContext(e)
}

function BHr(e) {
  return S.redactTokens(e)
}
var Rr = new RegExp(Re),
  Sr = new RegExp(Re, "g");
var Lnt = 16384;

function Axe(e, t) {
  let n = ee(e);
  if (n.length === 0) return _t(S.redactContext(e, !0), t);
  let r = S.trackedContext(e, !0);
  for (let s = t + 2 * Lnt;; s *= 2) {
    if (r.text.length <= s) return D(S.trackedTokens(r), n).text;
    let i = S.trackedTokens(ae(r, 0, s)),
      o = i.text.length - Lnt;
    if (o >= t) {
      let c = Q(i.text, o).length,
        u = D(ae(i, 0, c), n);
      if (u.text.length >= t) return u.text
    }
  }
}

function Gra(e, t) {
  return _t(nOo(e), t)
}
var $n = /[$\x60|;&<>()\s]/,
  On = /[/.@:~*?\\]/;

function wn(e, t) {
  let n = typeof t === "string" ? t : e;
  if ($n.test(n) || On.test(n)) return e;
  return j(e, t)
}

function o4e(e) {
  return S.redactForDisplay(e)
}

function Oae(e, t = _s) {
  if (typeof e === "string") return t(e);
  if (Array.isArray(e)) return e.map((n) => Oae(n, t));
  if (e !== null && typeof e === "object") {
    let n = Object.create(null),
      r = Object.entries(e),
      s = t === _s ? Ln(r.map(([i]) => i)) : void 0;
    for (let [i, [o, c]] of r.entries()) {
      let u = s ? s[i] : o;
      if (typeof c === "string") {
        if (t === _s) {
          n[u] = hWs(o, c);
          continue
        }
        let a = `${o}: `,
          l = t(a + c);
        n[u] = l.startsWith(a) ? l.slice(a.length) : t(c)
      } else n[u] = Oae(c, t)
    }
    return n
  }
  return e
}

function hWs(e, t) {
  let n = `${e}: `,
    r = n + t,
    s = ee(r);
  if (s.length === 0) {
    let u = _s(r);
    if (u.startsWith(n)) return u.slice(n.length);
    let a = P5(r);
    return a.startsWith(n) ? S.redactOnlyRules(a.slice(n.length)) : _s(t)
  }
  let i = [];
  for (let [u, a] of s)
    if (a > n.length) i.push([Math.max(u, n.length), a]);
  let o = S.trackedByRules(r, !0);
  if (o.text.startsWith(n)) return D(o, i).text.slice(n.length);
  let c = S.trackedByRules(r);
  return c.text.startsWith(n) ? S.redactOnlyRules(D(c, i).text.slice(n.length)) : _s(t)
}

function Ln(e) {
  let t = e.map((s) => _s(s));
  if (t.every((s, i) => s === e[i])) return t;
  let n = new Set(t.filter((s, i) => s === e[i])),
    r = new Map;
  return t.map((s, i) => {
    if (s === e[i]) return s;
    let o = s,
      c = r.get(s) ?? 2;
    while (n.has(o)) o = `${s} (${c})`, c++;
    return r.set(s, c), n.add(o), o
  })
}

function PVn(e) {
  let t = Object.create(null);
  for (let [n, r] of Object.entries(e)) t[n] = me.test(n) ? "[REDACTED]" : r;
  return t
}
var yP = "[redacted URL]";

function st(e) {
  let t = b(e);
  if (!/%(?:40|3a|5c)/i.test(t)) return e;
  let n = /^(?:https?|wss?|ftp|file):/i.test(t);
  return t.replace(n ? /%(40|3a)/gi : /%(40|3a|5c)/gi, (r, s) => String.fromCharCode(parseInt(s, 16)))
}

function Se(e, t, n) {
  let r = t(e),
    s = st(e);
  if (r === n || s === e) return r;
  return r !== null && st(r) === t(s) ? r : n
}

function OVn(e) {
  return Se(e, Dn, null)
}

function Dn(e) {
  try {
    let t = new URL(e);
    if (!t.host || Te(e) || ye(t) || Ie(e, t) || At(e)) return null;
    return t.username = "", t.password = "", t.search = "", t.hash = "", t.toString().replace(/\/$/, "")
  } catch {
    return null
  }
}
var gWs = /[@:]|\/\//;

function rOo(e) {
  let t = OVn(e);
  if (t === null) return null;
  let {
    protocol: n,
    host: r,
    pathname: s
  } = new URL(t);
  if (!gWs.test(s)) return t;
  let i = s.replace(/@/g, "%40").replace(/:/g, "%3A").replace(/\/{2,}/g, (o) => `/${wa("%2F",o.length-1)}`);
  return `${n}//${r}${i}`
}

function jHr(e) {
  let t = [],
    n = 0;
  for (let [r, s] of pt(ue(e))) t.push(e.slice(n, r), "[REDACTED]"), n = s;
  return t.push(e.slice(n)), t.join("").replace(/:\/\/[^/?#]*(@|%40)/g, (r, s) => s === "@" ? "://" : "://[REDACTED]%40")
}

function Lw(e) {
  return Se(e, X, yP)
}

function X(e) {
  if (!e) return e;
  if (ne(e) || xt(e) || Te(e)) return yP;
  try {
    let t = new URL(e);
    if (!t.host) throw TypeError("opaque");
    if ((t.username !== "" || t.password !== "") && `${t.pathname}${t.search}${t.hash}`.includes("@") || ye(t) || Ie(e, t)) return yP;
    return t.username = "", t.password = "", t.search = "", t.hash = "", t.toString().replace(/\/$/, "")
  } catch {
    let t = b(e),
      n = Ce(t),
      r = t.slice(n),
      s = $e(r),
      i = r.search(/[?#]/);
    if (s !== -1 && i !== -1 && i < s) return yP;
    let o = s === -1 ? r : r.slice(s + 1),
      c = o.search(/[?#]/);
    if (c !== -1 && o.includes("@", c) && (s !== -1 || !jn(o, c, n !== 0))) return yP;
    let u = tt(tt(s === -1 ? t : t.slice(n + s + 1), "?"), "#"),
      a = u.lastIndexOf("@"),
      l = a === -1 ? u : u.slice(a + 1);
    return N(l) && !N(t) && !/^:\d+\/?$/.test(l.startsWith("[") ? l.slice(l.indexOf("]") + 1) : l.slice(l.indexOf(":"))) ? yP : l
  }
}
var be = /^(?:(?:file:\/\/)?[a-z]:(?:\\|\/(?!\/))|\\\\)/i;

function Jm(e) {
  return Se(e, Un, yP)
}

function Un(e) {
  if (ne(e) || Te(e)) return yP;
  if (be.test(e)) {
    let s = e.indexOf("?", e.startsWith("\\\\?\\") ? 4 : 0);
    return s === -1 ? e : e.slice(0, s)
  }
  if (xt(e) && !Jn(e)) return yP;
  let t;
  try {
    t = new URL(e)
  } catch {
    return Y(e, it(e) ? X(e) : e)
  }
  if (!t.host) return Y(e, t.search || t.hash || it(e) ? X(e) : e);
  if (Ie(e, t)) return yP;
  let n = t.username !== "" && ke(t.protocol.slice(0, -1)),
    r = t.username !== "" && !/^[^:]*:\//.test(b(e));
  return Y(e, n || r || t.password || se(t.username) || ye(t) || t.search || t.hash ? X(e) : e)
}

function Ewt(e) {
  return Y(e, Lw(e))
}

function xxe(e, t, n) {
  return t === "" || t === n ? e : e.split(t).join(n)
}

function Iae(e, t) {
  let n = typeof t === "string" || t === void 0 ? [t] : t;
  for (let r of n) {
    let s = Mn(r),
      i = r && s.length > 0 ? Jm(r) : "";
    for (let o of s) e = xxe(e, o, i)
  }
  return ew(e)
}

function Mn(e) {
  if (!e || !mt.test(e) || Jm(e) === e) return [];
  let t = [e],
    n = Ce(e),
    r = e.slice(n),
    s = r.indexOf("/");
  for (let i of new Set([r.indexOf("@"), $e(r)]))
    if (n !== 0 && i !== -1 && (s === -1 || i < s)) t.push(e.slice(0, n) + r.slice(i + 1));
  return t
}

function zn(e) {
  let t = b(e),
    n = Ce(t),
    r = n !== 0,
    s = t.indexOf("#");
  if (t.includes("?") || s !== -1 && (r || t.includes("@", s))) return !0;
  let i = t.slice(n),
    o = $e(i);
  if (o === -1) return !1;
  let c = t.slice(0, n - 3),
    u = /^(?:ftps?|wss?)$/i.test(c) ? i.slice(0, o).replace(/^[/\\]+/, "") : i.slice(0, o);
  return se(u) || r && (/https?$/i.test(c) || !u.includes("/") && ke(c))
}
var IVn = /:|%3a/i;

function ye(e) {
  return !e.hostname.startsWith("[") && /%3a/i.test(e.hostname) && `${e.pathname}${e.search}${e.hash}`.includes("@")
}

function se(e) {
  return IVn.test(e)
}

function Te(e) {
  let t = b(e),
    n = t.indexOf(":"),
    r = n === -1 ? "" : t.slice(0, n);
  if (!/^[a-z][a-z0-9+.-]*$/i.test(r) || !/(?:ssh|git\+ssh|ssh\+git|git|file)$/i.test(r) || be.test(t)) return !1;
  let s = t.slice(n + 1),
    i = tt(s.slice(/^\/*/.exec(s)[0].length), "/"),
    o = i.search(/[?#]/);
  if (!(/%40/i.test(i) || o !== -1 && i.includes("@", o))) return !1;
  let c = i.replace(/%([0-9a-f]{2})/gi, (a, l) => String.fromCharCode(parseInt(l, 16))),
    u = c.lastIndexOf("@");
  return u !== -1 && c.slice(0, u).includes(":")
}

function N(e) {
  let t = e.indexOf(":"),
    n = e.indexOf("/");
  return t > 0 && !e.includes("://") && (n === -1 || t < n)
}

function Y(e, t) {
  let n = (s, i) => {
    let o = b(s);
    return Fn(s) || /^(?:ssh|git|git\+ssh|ssh\+git|file):\/\//i.test(o) && i !== s && !i.toLowerCase().startsWith(o.slice(0, o.indexOf("://") + 3).toLowerCase()) || N(s) && (Pn(s) || /[\t\n\r]/.test(s) || Kn(s, i))
  };
  return t !== e && N(t) && !N(e) || n(e, t) || n(t, t) ? yP : t
}

function Fn(e) {
  let t = e.replace(/^[\u0000-\u0020]+/, ""),
    n = /^[a-z+\t\n\r]*:[\t\n\r]*\/[\t\n\r]*\//i.exec(t),
    r = n !== null && /^(?:ssh|git|git\+ssh|ssh\+git|file):\/\/$/i.test(n[0].replace(/[\t\n\r]/g, "")) ? n : null;
  if (!r && !N(e)) return !1;
  let s = r ? /^(?:[\w.~+-]+(?::[^@/?#%\s[\]]*)?@)?(?:\w(?:[\w.-]*\w)?|\[[\da-f]*:[\da-f.]*:[\da-f:.]*\])?(?::[\w~-]*)?(?:\/|$)/i : /^(?:[\w.~+-]+@)?(?:\w(?:[\w.-]*\w)?|\[[\da-f]*:[\da-f.]*:[\da-f:.]*\]):/i,
    i = r ? t.slice(r[0].length) : e,
    o = r ? i.slice(Math.max(i.indexOf("/"), 0)) : "";
  return !s.test(i) || /(?:@|%40)(?:\[|%5b)/i.test(o)
}

function Pn(e) {
  try {
    return new URL(e).host !== ""
  } catch {
    return !1
  }
}

function Kn(e, t) {
  let n = b(e),
    r = n.indexOf(":"),
    s = n.slice(0, r);
  if (r <= 0 || /[/?#]/.test(s) || e.includes("://")) return !1;
  let i = s.lastIndexOf("@"),
    o = n.indexOf("@["),
    c = o !== -1 ? o + 1 : n.startsWith("[") ? 0 : -1,
    u = s.slice(i + 1);
  if (c !== -1) {
    let a = n.indexOf("]", c);
    if (c !== i + 1 || n[a + 1] !== ":" || /[/?#@\\]/.test(n.slice(c + 1, a))) return !0;
    u = n.slice(c, a + 1)
  }
  return t !== e && t !== yP && !t.startsWith(`${u}:`)
}

function it(e) {
  return zn(e) || Wn(e)
}

function Wn(e) {
  let t = e.replace(/^[\u0000-\u0020]+/, ""),
    n = t.indexOf("://");
  if (n !== -1 && /[?#]/.test(t)) return !0;
  let r = tt(n === -1 ? t : t.slice(n + 3), "/"),
    s = r.lastIndexOf("@");
  return s !== -1 && (se(r.slice(0, s)) || n !== -1 && ke(t.slice(0, n)))
}

function ke(e) {
  return !/^(?:ssh|git\+ssh|ssh\+git)$/i.test(e)
}

function b(e) {
  return e.replace(/^[\u0000-\u0020]+/, "").replace(/[\t\n\r]/g, "")
}
var te = "(^|[^a-z0-9+.-]|%[0-9a-f]{2})",
  vn = "https?|wss?|ftps?",
  Et = "ssh\\+git|git\\+ssh|ssh|git",
  Bn = new RegExp(`[a-z](?:[a-z0-9+.-]{1,31}:\\/+|:\\/\\/)|(?:https?|ftps?):(?!\\/)|${te}(?:wss?|file):(?!\\/)|${te}(?:${Et}):(?!\\/)(?=[^@/?#\\s]*?(?::|%3a))`, "i");

function ne(e, {
  forDestination: t = !1
} = {}) {
  let n = b(e).replace(/\\/g, "/"),
    r = n.search(/[?#]/),
    s = r === -1 ? n : n.slice(0, r),
    i = (t ? /^[a-z][a-z0-9+.-]*:\/*/i.exec(s) : null) ?? /:\/+/.exec(s);
  if (!i) return !1;
  let o = i.index + i[0].length,
    c = (t ? Bn : /[a-z][a-z0-9+.-]{1,31}:\/+/i).exec(s.slice(o)),
    u = o + (c?.index ?? 0) + (c?.[0].length ?? 0);
  return c !== null && (n.includes("@", u) || /%40/i.test(tt(n.slice(u), "/")))
}

function xt(e) {
  let t = b(e);
  if (be.test(t) || /^file:/i.test(t)) return !1;
  return At(e)
}

function At(e) {
  let t = b(e),
    n = t.search(/[?#]/),
    s = (n === -1 ? t : t.slice(0, n)).indexOf("\\");
  return s !== -1 && t.includes("@", s)
}

function Gn(e) {
  let t = b(e),
    n = /(?:ssh|git\+ssh|ssh\+git|git):\/\//i.exec(t);
  if (!n) return !1;
  let r = t.slice(n.index + n[0].length).replace(/%40/gi, "@").replace(/%5b/gi, "["),
    s = r.search(/[/?#]/);
  return s !== -1 && r.includes("@[", s)
}

function Hn(e, t) {
  if (!/^(?:ssh|git|git\+ssh|ssh\+git):$/i.test(t.protocol)) return !1;
  let n = Mwe(b(e))?.host;
  return n !== void 0 && n.toLowerCase() !== ycn(t.hostname).toLowerCase()
}

function Ie(e, t) {
  return ne(e, {
    forDestination: !0
  }) || ne(t.href, {
    forDestination: !0
  }) || Gn(e) || Hn(e, t) || t.protocol === "file:" && Vn(e)
}

function Vn(e) {
  let t = b(e),
    n = t.search(/[?#]/),
    s = (n === -1 ? t : t.slice(0, n)).indexOf("\\"),
    i = t.lastIndexOf("@");
  return s !== -1 && i > s && /:|%3a/i.test(t.slice(s, i))
}

function Jn(e) {
  return /^[\w .+~@\\/-]*$/.test(e) && !/\\(?:[^A-Za-z0-9@]|$)| $|\.[_~+]*\.|(?:^|\/)[_~+]*\.[_~+]*$/.test(e) && !/(?:^|[^\\])@|@[^\\/ ]*(?:[/ ]|$)/.test(e)
}

function Ce(e) {
  let t = e.indexOf("://");
  return t !== -1 && /^[a-z][a-z0-9+.-]*$/i.test(e.slice(0, t)) ? t + 3 : 0
}

function $e(e) {
  let t = e.indexOf("@");
  if (t === -1) return -1;
  let n = e.search(/[?#]/);
  if (n !== -1 && n < t && e.lastIndexOf("/", n) !== -1) return -1;
  let r = e.indexOf("/", t);
  return e.lastIndexOf("@", r === -1 ? e.length : r)
}

function jn(e, t, n) {
  let r = e.indexOf("/");
  if (r <= 0 || r > t) return !1;
  let s = e.slice(0, r).replace(/^\[[^\]]*\]/, "");
  return !se(n ? s.replace(/:\d+$/, "") : s)
}
var Xn = /[a-z][a-z0-9+.-]{0,31}:\/\/[^\s'"`<>]+/gi,
  mt = /[\s'"`<>]/,
  Vra = "whitespace, quotes, backticks or angle brackets";

function Kra(e) {
  return /^https?:\/\//i.test(e) && !mt.test(e)
}
var Yn = /(^|[\s'"`<>])([^\s'"`<>]*(?:@|%40)[^\s'"`<>]*)/gi,
  qn = new RegExp(`${te}(?:${vn}):(?!\\/\\/)|${te}(?:${Et}):(?!\\/\\/)`, "gi");

function Qn(e) {
  let t = e.toLowerCase(),
    n = Math.max(t.lastIndexOf("@"), t.lastIndexOf("%40"));
  for (let r of e.matchAll(qn)) {
    let s = r.index + r[0].length;
    if (n < s) return -1;
    let i = r.index + (r[1] ?? r[2] ?? "").length;
    if (r[2] === void 0) return i;
    let o = t.indexOf(":", s),
      c = Math.min(o === -1 ? n : o, n);
    if (o !== -1 && o < n || t.slice(s, c).includes("%3a")) return i
  }
  return -1
}

function ew(e) {
  if (!e) return e;
  return e.replace(Xn, (t) => Jm(t)).replace(Yn, (t, n, r) => {
    let s = Qn(r);
    return s === -1 ? n + r : n + r.slice(0, s) + Jm(r.slice(s))
  })
}

function ge(e, t, n) {
  return (t || e.redactOnly !== !0) && (e.prefilter === void 0 || e.prefilter.test(n))
}

function _t(e, t) {
  for (let n = t + 2 * Lnt;; n *= 2) {
    if (e.length <= n) return BHr(e);
    let r = BHr(e.slice(0, n)),
      s = r.length - Lnt;
    if (s >= t) return Q(r, s)
  }
}
var er = {
  aws: "AWS",
  gcp: "GCP",
  api: "API",
  pat: "PAT",
  ad: "AD",
  tf: "TF",
  oauth: "OAuth",
  npm: "NPM",
  pypi: "PyPI",
  jwt: "JWT",
  ci: "CI",
  scim: "SCIM",
  github: "GitHub",
  gitlab: "GitLab",
  openai: "OpenAI",
  digitalocean: "DigitalOcean",
  huggingface: "HuggingFace",
  hashicorp: "HashiCorp",
  sendgrid: "SendGrid"
};
export {
  TM,
  NHr,
  mY,
  bwt,
  FHr,
  xVn,
  PN,
  xc,
  Cj,
  tf,
  eOo,
  Djt,
  Ljt,
  ib,
  t4e,
  tOo,
  Swt,
  Bra,
  Dnt,
  VA,
  cWs,
  _h,
  Dh,
  uWs,
  wwt,
  DH,
  ju,
  kwt,
  Nn,
  LH,
  Sme,
  bi,
  HHr,
  jra,
  $Hr,
  h7,
  Tk,
  vwt,
  Njt,
  UHr,
  Pae,
  wme,
  bG,
  nK,
  n4e,
  Mwe,
  ycn,
  fWs,
  Wra,
  pWs,
  zra,
  mWs,
  r4e,
  _s,
  P5,
  nOo,
  BHr,
  Lnt,
  Axe,
  Gra,
  o4e,
  Oae,
  hWs,
  PVn,
  yP,
  OVn,
  gWs,
  rOo,
  jHr,
  Lw,
  Jm,
  Ewt,
  xxe,
  Iae,
  IVn,
  Vra,
  Kra,
  ew
};
