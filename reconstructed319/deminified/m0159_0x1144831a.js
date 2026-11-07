// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { k, wr, qt } from "B:/~BUN/root/chunk-y2g9f85n.js";
import { J, we } from "B:/~BUN/root/chunk-r5zmhp23.js";
import { or, th, Oc, T0 } from "B:/~BUN/root/chunk-h4acfc9y.js";
import { H, zOo } from "B:/~BUN/root/chunk-game8aqv.js";
import { W } from "B:/~BUN/root/chunk-ppmmt0c3.js";
import { sa, ie } from "B:/~BUN/root/chunk-2pp12te6.js";
import { Q, Pa, oc, Il } from "B:/~BUN/root/chunk-n8cnxns2.js";
import { xc, tOo, VA, _h } from "B:/~BUN/root/chunk-jdtvghyw.js";
import { u7 } from "B:/~BUN/root/chunk-xrwdh0g4.js";
import { x } from "B:/~BUN/root/chunk-mwfggkjt.js";
import { kj, l$e } from "B:/~BUN/root/chunk-j6pt0v41.js";
import { $2n, ut, lt } from "B:/~BUN/root/chunk-3mm90xb6.js";
import { ct } from "B:/~BUN/root/chunk-bkfncj77.js";
import { X_t } from "B:/~BUN/root/chunk-jgwwv4gf.js";
import { Ds } from "B:/~BUN/root/chunk-3xdsa4p8.js";
import { Zn } from "B:/~BUN/root/chunk-12nc74pv.js";
import { NH, N5, SG } from "B:/~BUN/root/chunk-nxckfnqx.js";
import { readFileSync as bn, lstatSync as _n } from "fs";
import { lstat as hn, readFile as Cn } from "fs/promises";
import { posix as he } from "path";
var Ve = /[^\t\n\x20-\x7e]/,
  D = /^\p{L}$/u,
  A = /^\p{M}$/u,
  Xe = /^\p{White_Space}$/u,
  Ye = /^[\p{Emoji}\p{Extended_Pictographic}]$/u,
  se = /^\p{Extended_Pictographic}$/u,
  Ze = /^\p{Sm}$/u;
function oe(e, n) {
  let t = n.split(" ").map(item => `\\p{${e}=${item}}`).join("");
  return new RegExp(`^[${t}]$`, "u");
}
function X(e) {
  return {
    base: oe("Script", e),
    mark: oe("Script_Extensions", e)
  };
}
function F(e) {
  return {
    base: e,
    mark: e
  };
}
var ge = /^[\p{Script=Arabic}\p{Script=Hebrew}\p{Script=Syriac}\p{Script=Thaana}\p{Script=Nko}\p{Script=Samaritan}\p{Script=Mandaic}\p{Script=Adlam}\p{Script=Hanifi_Rohingya}\p{Script=Yezidi}]$/u,
  Je = /^[\p{Script=Arabic}\p{Script=Syriac}\p{Script=Thaana}\p{Script=Hanifi_Rohingya}]$/u,
  j = /^\p{Nd}$/u,
  ae = X("Arabic Syriac Nko Mongolian Devanagari Bengali Gurmukhi Gujarati Oriya Tamil Telugu Kannada Malayalam Sinhala Myanmar Khmer Tibetan"),
  qe = X("Devanagari Bengali Gurmukhi Gujarati Oriya Tamil Telugu Kannada Malayalam Sinhala Myanmar Khmer Tibetan Arabic Syriac Tifinagh"),
  Qe = X("Arabic Syriac Mongolian Nko"),
  xe = /^[\p{Script=Khmer}\p{Script=Thai}\p{Script=Lao}\p{Script=Myanmar}]$/u,
  en = F(xe),
  ue = /^[0-9]$/,
  ce = F(/^\p{Script=Mongolian}$/u),
  nn = F(/^\p{Script=Khmer}$/u),
  K = F(/^\p{Script=Egyptian_Hieroglyphs}$/u),
  de = F(/^\p{Script=Duployan}$/u),
  fe = /^\p{Script=Brahmi}$/u,
  tn = /^[\p{Script=Myanmar}\p{Script=Phags_Pa}\p{Script=Manichaean}]$/u;
function v(e) {
  if (e < 160) return e < 32 && e !== 9 && e !== 10 || e >= 127;
  if (e < 8192) return e === 173 || e === 847 || e === 1564 || e === 4447 || e === 4448 || e === 6068 || e === 6069 || e >= 6155 && e <= 6159;
  if (e < 65536) return e >= 8203 && e <= 8207 || e >= 8232 && e <= 8238 || e >= 8288 && e <= 8303 || e === 12644 || e >= 65024 && e <= 65039 || e === 65279 || e === 65440 || e >= 65520 && e <= 65531;
  return e === 69759 || e >= 78896 && e <= 78911 || e === 94180 || e >= 113824 && e <= 113827 || e >= 119155 && e <= 119162 || e >= 917504 && e <= 921599;
}
function EXi(e, n, t, r) {
  let i = [];
  for (let m of r) {
    let trimmed = m.trim();
    for (let start = m === "" ? -1 : e.indexOf(m); start !== -1; start = e.indexOf(m, start + 1)) i.push({
      start: start,
      end: start + m.length,
      trimmed: trimmed
    });
  }
  i.sort((itemA, itemB) => itemA.start - itemB.start || itemB.end - itemA.end);
  let s = new Set(),
    edited = !1,
    a = -1,
    u = 0,
    _ = 0;
  for (let {
    start: start_2,
    end: end,
    trimmed: trimmed_2
  } of i) {
    if (end <= a) continue;
    a = end;
    while (u < t.length && t[u].end <= start_2) {
      let d = t[u];
      _ += d.end - d.start - d.replacement.length, u++;
    }
    if (u === t.length || t[u].start >= end) {
      s.add(trimmed_2);
      continue;
    }
    edited = !0;
    let p = start_2 - _,
      S = end - _;
    for (let d = u; d < t.length && t[d].start < end; d++) {
      let f = t[d];
      if (f.start < start_2) p -= start_2 - f.start;
      S -= Math.min(f.end - f.start - f.replacement.length, end - f.start);
    }
    s.add(n.slice(p, S).trim());
  }
  return {
    stretches: [...s],
    edited: edited
  };
}
var rn = ["gbeng", "gbsct", "gbwls"],
  Se = 5;
function BDs(e, n) {
  let t = "",
    r = n + Se + 1;
  for (let i = n + 1; i <= r && i < e.length; i++) {
    let s = e[i].codePointAt(0) ?? 0;
    if (s === 917631) return rn.includes(t) ? i : -1;
    if (s < 917601 || s > 917626) return -1;
    t += String.fromCharCode(s - 917504);
  }
  return -1;
}
function Bz(text, n) {
  let removedByClass = {
    tags: 0,
    bidi: 0,
    zeroWidth: 0,
    selectors: 0,
    other: 0
  };
  if (!Ve.test(text)) return {
    text: text,
    removedTotal: 0,
    removedByClass: removedByClass,
    keptConditional: 0
  };
  let text_2 = oc(text),
    i = [],
    s = 0,
    removedTotal = text_2 === text ? 0 : an(text);
  removedByClass.other += removedTotal;
  let a = {
      ring: Array(R).fill(0),
      next: 0,
      size: 0,
      lastWasHidden: !1,
      keptConditional: 0
    },
    u = 0,
    _,
    m;
  for (let start_3 = 0; start_3 < text_2.length;) {
    let p = text_2.codePointAt(start_3),
      end_2 = start_3 + (p > 65535 ? 2 : 1);
    if (!v(p)) {
      if (p === 10) u = end_2, _ = void 0, m = void 0;else if (p === 127988) {
        let h = Array.from(text_2.slice(start_3, start_3 + 2 * (Se + 2))),
          E = BDs(h, 0);
        if (E !== -1) {
          N(a, p, !1), start_3 = end_2;
          for (let M = 1; M <= E; M++) N(a, h[M].codePointAt(0), !0), start_3 += h[M].length;
          continue;
        }
      } else if (p === 65533 && text.charCodeAt(start_3) !== 65533) n?.push({
        start: start_3,
        end: end_2,
        replacement: "\uFFFD"
      });
      N(a, p, !1), start_3 = end_2;
      continue;
    }
    if (V(p)) {
      let h = p === 13 && text_2.charCodeAt(end_2) === 10;
      if (start_3 > s) i.push(text_2.slice(s, start_3));
      if (s = end_2, n?.push({
        start: start_3,
        end: end_2,
        replacement: h ? "" : `
`
      }), !h) i.push(`
`), removedTotal++, removedByClass.other++, N(a, 10, !1), u = end_2, _ = void 0, m = void 0;
      start_3 = end_2;
      continue;
    }
    let d = end_2 < text_2.length ? text_2.codePointAt(end_2) : void 0,
      f = T(a, 0),
      {
        lastWasHidden: lastWasHidden
      } = a,
      g = !1;
    switch (p) {
      case 8204:
      case 8205:
        {
          if (g = I(a, p === 8204 ? ae : qe), !g && p === 8205) {
            let E = f;
            if (E !== void 0 && (E === 65039 || me(E))) {
              if (E = T(a, 1), E !== void 0 && (E === 65039 || me(E))) E = T(a, 2);
            }
            g = f !== void 0 && f !== 8205 && l(se, E) && w(d, se);
          }
          if (!g && f !== void 0 && !lastWasHidden) g = p === 8204 ? L(d, ae) && !l(Xe, f) && !l(A, f) : L(d, Qe) && !l(D, f) && !l(j, f) && !l(A, f);
          break;
        }
      case 8203:
        {
          let h = Ee(a, en, !0),
            E = w(d, xe) && !l(A, d);
          g = h && (E || w(d, ue)) || E && z(a, ue);
          break;
        }
      case 65038:
      case 65039:
        g = f !== void 0 && !lastWasHidden && (f >= 169 && l(Ye, f) || on(f) && d === 8419);
        break;
      case 65024:
      case 65025:
      case 65026:
        g = f !== void 0 && !lastWasHidden && (l(K.base, f) || p === 65024 && (f >= 8704 && f <= 11007 && l(Ze, f) || l(tn, f)));
        break;
      case 8206:
      case 8207:
      case 1564:
        if (p === 1564) {
          if (m === void 0) m = le(Je, text_2, u);
          g = m;
        } else {
          if (_ === void 0) _ = le(ge, text_2, u);
          g = _;
        }
        g = g && !lastWasHidden && (d === void 0 || V(d) || !v(d) && !l(A, d)) && !sn(a, d);
        break;
      case 847:
        g = z(a, A) || !lastWasHidden && w(d, A);
        break;
      case 6068:
      case 6069:
        g = I(a, nn);
        break;
      case 6155:
      case 6156:
      case 6157:
      case 6158:
      case 6159:
        g = I(a, ce) || !lastWasHidden && L(d, ce);
        break;
      case 69759:
        g = z(a, fe) && w(d, fe);
        break;
      default:
        if (p >= 78896 && p <= 78911) g = I(a, K) || !lastWasHidden && L(d, K);else if (p >= 113824 && p <= 113827) g = I(a, de) || !lastWasHidden && L(d, de);
    }
    if (g) N(a, p, !0);else {
      if (start_3 > s) i.push(text_2.slice(s, start_3));
      s = end_2, n?.push({
        start: start_3,
        end: end_2,
        replacement: ""
      }), removedTotal++, removedByClass[un(p)]++;
    }
    start_3 = end_2;
  }
  let {
    keptConditional: keptConditional
  } = a;
  if (s === 0) return {
    text: text_2,
    removedTotal: removedTotal,
    removedByClass: removedByClass,
    keptConditional: keptConditional
  };
  return i.push(text_2.slice(s)), {
    text: i.join(""),
    removedTotal: removedTotal,
    removedByClass: removedByClass,
    keptConditional: keptConditional
  };
}
function l(e, n) {
  return n !== void 0 && e.test(String.fromCodePoint(n));
}
function Y(e, n) {
  return l(D, n) && l(e, n);
}
function le(e, n, t) {
  for (let r = t; r < n.length;) {
    let i = n.codePointAt(r);
    if (V(i)) return !1;
    if ((i >= 1424 && i <= 2303 || i >= 64285 && i <= 65023 || i >= 65136 && i <= 65279 || i >= 67584 && i <= 69631 || i >= 124928 && i <= 126975) && Y(e, i)) return !0;
    r += i > 65535 ? 2 : 1;
  }
  return !1;
}
function pe(e) {
  return e === 1600 || l(ge, e);
}
function sn(e, n) {
  let t = l(D, n);
  if (!t && !l(j, n)) return !1;
  for (let r = 0; r < e.size; r++) {
    let i = T(e, r);
    if (v(i)) return !0;
    if (l(A, i)) continue;
    return t ? l(D, i) && pe(i) === pe(n) : l(j, i);
  }
  return e.size >= R;
}
function V(e) {
  return e === 10 || e === 11 || e === 12 || e === 13 || e === 133 || e === 8232 || e === 8233;
}
var R = 16;
function N(e, n, t) {
  if (e.ring[e.next] = n, e.next = (e.next + 1) % R, e.size < R) e.size++;
  if (e.lastWasHidden = t, t) e.keptConditional++;
}
function T(e, n) {
  if (n >= e.size) return;
  return e.ring[(e.next - 1 - n + 2 * R) % R];
}
function z(e, n) {
  return e.size > 0 && !e.lastWasHidden && l(n, T(e, 0));
}
function I(e, n) {
  return Ee(e, n, !1);
}
function Ee(e, n, t) {
  if (e.lastWasHidden) return !1;
  for (let r = 0; r < e.size; r++) {
    let i = T(e, r);
    if (l(A, i)) {
      if (!l(n.mark, i)) return !1;
      continue;
    }
    return t ? l(n.base, i) : Y(n.base, i);
  }
  return !1;
}
function w(e, n) {
  return e !== void 0 && !v(e) && l(n, e);
}
function L(e, n) {
  return e !== void 0 && !v(e) && Y(n.base, e);
}
function me(e) {
  return e >= 127995 && e <= 127999;
}
function on(e) {
  return e >= 48 && e <= 57 || e === 35 || e === 42;
}
function an(e) {
  let n = 0;
  for (let t = 0; t < e.length; t++) {
    let r = e.charCodeAt(t);
    if (r >= 55296 && r <= 56319) {
      let i = e.charCodeAt(t + 1);
      if (i >= 56320 && i <= 57343) t++;else n++;
    } else if (r >= 56320 && r <= 57343) n++;
  }
  return n;
}
function un(e) {
  if (e >= 917504 && e <= 917631) return "tags";
  if (e === 1564 || e === 8206 || e === 8207 || e >= 8234 && e <= 8238 || e >= 8294 && e <= 8297) return "bidi";
  if (e >= 8203 && e <= 8205 || e === 8288 || e === 65279) return "zeroWidth";
  if (e >= 65024 && e <= 65039 || e >= 917760 && e <= 917999 || e >= 6155 && e <= 6157 || e === 6159) return "selectors";
  return "other";
}
function Fet(e, n = "review", t = "Enter") {
  let r = e === 1 ? "Removed 1 invisible character" : `Removed ${e} invisible characters`;
  switch (n) {
    case "review":
      return `${r} \xB7 review and press ${t} to send`;
    case "empty":
      return `${r} \xB7 nothing left to send`;
    case "sent":
      return `${r} from the launch prompt before sending it`;
    case "cleaned":
      return `${r} from your prompt`;
    case "pasted":
      return `${r} from the pasted text`;
  }
}
var cn = /[\x00-\x1f\x7f-\x9f\u061c\u2028\u2029\u202a-\u202e\u2066-\u2069\p{Co}\p{Cn}]/gu,
  regExp = new RegExp(String.raw`[\u200b\u200e\u200f\u2800]|[${tOo}\u{110bd}\u{110cd}](?!\p{Nd})|(?<![\p{L}\p{M}\p{Extended_Pictographic}\p{Emoji_Modifier}\ufe0f])[\u200c\u200d]|(?<!\p{M})[\u200c\u200d](?![\p{L}\p{M}\p{Extended_Pictographic}])`, "gu");
function Mr(e) {
  return _h(_e(e));
}
function NFe(e) {
  let n = oc(_e(e)).replace(regExp, be),
    {
      text: text_3,
      removedTotal: removedTotal_2
    } = Bz(n);
  if (removedTotal_2 === 0) return n;
  let i = Array.from(text_3),
    s = 0,
    o = "";
  for (let a of n) if (a === i[s]) s++, o += a;else o += be(a);
  return o;
}
var Z = 160;
function IA(e) {
  return Il(Mr(e), Z);
}
function SUt(e) {
  return `Where ${IA(e)} leads on disk could not be determined (a link or directory on the way could not be examined, or the links do not resolve)`;
}
function Tie(e) {
  let n = Mr(e);
  if (n.length <= Z) return n;
  let t = Pa(n, Z);
  return `[+${n.length - t.length} chars] \u2026${t}`;
}
function wUt(e) {
  return e.split(`
`).map(item => Mr(item)).join(`
`);
}
function _e(e) {
  let n = Zn(e);
  return (n === e ? n : n + "\uFFFD").replace(cn, "\uFFFD");
}
function be(e) {
  return `\\u{${e.codePointAt(0).toString(16).toUpperCase()}}`;
}
function Jin(e, n) {
  if (n.spellings.some(item => En(item))) return `Cannot read '${xc(e)}': this path names a device or process file that this tool does not read.`;
  return n.unresolved ? `${SUt(e)}, so it cannot be told apart from a device or process file that this tool does not read.` : void 0;
}
var fn = new Set(["/dev/zero", "/dev/random", "/dev/urandom", "/dev/full", "/dev/stdin", "/dev/tty", "/dev/console", "/proc/kmsg", "/dev/stdout", "/dev/stderr", "/dev/fd/0", "/dev/fd/1", "/dev/fd/2"]),
  ln = /^\/proc\/[^/]+\/root(?=\/)/,
  pn = /^(\/proc\/[^/]+)\/task\/[^/]+(?=\/)/,
  regExp_2 = new RegExp(`^/proc/(?:self|${process.pid})/cwd(?=/)`),
  mn = /^\/proc\/[^/]+\/cwd\/|^\/proc\/[^/]+\/fd\/\d+\/|^\/dev\/fd\/\d+\/|^\/dev\/(?:stdin|stdout|stderr)\/|^\/proc\/[^/]+\/map_files(\/|$)/,
  regExp_3 = new RegExp(`^/proc/(?!self/|${process.pid}/)[^/]+/fd/\\d+$`),
  xn = /^\/dev\/(?:pts\/(?:\d+|ptmx)|ptmx|tty[^/]*)$/,
  Sn = 8;
function En(e) {
  let n = he.normalize(e);
  for (let t = 0;; t++) {
    if (regExp_2.test(n)) n = he.normalize(n.replace(regExp_2, () => ie().cwd()));
    if (fn.has(n) || xn.test(n) || mn.test(n) || regExp_3.test(n) || n.startsWith("/proc/") && (n.endsWith("/fd/0") || n.endsWith("/fd/1") || n.endsWith("/fd/2")) || /^\/proc\/[^/]+\/(environ|cmdline|auxv|maps|smaps|smaps_rollup|numa_maps|pagemap|mem|stat|statm|status|syscall|stack)$/.test(n)) return !0;
    let r = n.replace(ln, "").replace(pn, "$1");
    if (r === n) return !1;
    if (t >= Sn) return !0;
    n = r;
  }
}
async function yd(e, n, t) {
  try {
    let r = await hn(e);
    if (!r.isFile() || r.size > n) return t?.(), null;
    return await Cn(e, "utf8");
  } catch (error) {
    if (!wr(error)) t?.();
    return null;
  }
}
function TXi(e, n) {
  try {
    let t = _n(e);
    if (!t.isFile() || t.size > n) return null;
    return bn(e, "utf8");
  } catch {
    return null;
  }
}
async function dT(e, n, t, r) {
  let {
    verdict: verdict,
    st: st
  } = await xjn(e, n, t);
  switch (verdict) {
    case "skip":
      return r?.(st), null;
    case "empty":
      return "";
    case "read":
      return await e.readFile(n, {
        encoding: "utf8"
      });
  }
}
function CXi(e, n, t) {
  switch (jDs(e, n, t).verdict) {
    case "skip":
      return null;
    case "empty":
      return "";
    case "read":
      return e.readFileSync(n, {
        encoding: "utf8"
      });
  }
}
async function xjn(e, n, t) {
  let r = {
    leaf: await e.lstat(n)
  };
  for (;;) {
    let i = Ae(n, t, r);
    if ("verdict" in i) return i;
    try {
      switch (i.ask) {
        case "target":
          r.target = await e.stat(n);
          break;
        case "resolved":
          r.resolved = await e.realpath(n);
          break;
        case "named":
          r.named = await e.stat(i.at);
          break;
      }
    } catch (error) {
      ye(r, i.ask, error);
    }
  }
}
function jDs(e, n, t) {
  let r = {
    leaf: e.lstatSync(n)
  };
  for (;;) {
    let i = Ae(n, t, r);
    if ("verdict" in i) return i;
    try {
      switch (i.ask) {
        case "target":
          r.target = e.statSync(n);
          break;
        case "resolved":
          r.resolved = e.realpathSync(n);
          break;
        case "named":
          r.named = e.statSync(i.at);
          break;
      }
    } catch (error) {
      ye(r, i.ask, error);
    }
  }
}
var An = /^\/(?:dev|proc\/[^/]+)\/fd\/\d+$/,
  yn = / \(deleted\)$/,
  Pn = /^\/(?:proc\/(?!version$)|sys\/)/;
function Ae(e, n, t) {
  let r = t.leaf.isSymbolicLink();
  if (r && t.target === void 0) return {
    ask: "target"
  };
  let st_2 = t.target ?? t.leaf;
  if (!st_2.isFile() || st_2.size > n) return {
    verdict: "skip",
    st: st_2
  };
  if (x() === "windows" || !r && (st_2.size !== 0 || st_2.nlink === 0)) return {
    verdict: "read",
    st: st_2
  };
  if (t.resolved === void 0 && (r || !Oc(e))) return {
    ask: "resolved"
  };
  let at = t.resolved ?? void 0;
  if (r && at !== void 0) {
    if (!at.startsWith("/") || An.test(at)) at = void 0;else if (st_2.nlink === 0 || yn.test(at) || st_2.size === 0 && Oc(e)) {
      if (sa(st_2.ino)) at = void 0;else if (t.named === void 0) return {
        ask: "named",
        at: at
      };else if (t.named === null || t.named.ino !== st_2.ino || t.named.dev !== st_2.dev) at = void 0;
    }
  }
  if (Jin(e, {
    spellings: at === void 0 ? [e] : [e, at],
    unresolved: !1
  }) !== void 0 || at !== void 0 && Pn.test(at)) return {
    verdict: "skip",
    st: st_2
  };
  if (at !== void 0) return {
    verdict: "read",
    st: st_2
  };
  if (!r) return {
    verdict: "empty",
    st: st_2
  };
  return {
    verdict: t.resolved === null && t.noNameLeft !== !0 && st_2.size !== 0 && st_2.nlink !== 0 ? "read" : "skip",
    st: st_2
  };
}
function ye(e, n, t) {
  if (n === "target" || e.leaf.isSymbolicLink() && !qt(t)) throw t;
  if (n === "resolved") e.resolved = null, e.noNameLeft = k(t) === "ENOENT";else e.named = null;
}
import { delimiter as Re, join as Nn } from "path";
class Pe {
  #e = !1;
  get forcedUnavailable() {
    return this.#e;
  }
  forceUnavailable(e) {
    this.#e = e;
  }
}
var Tn = new Pe();
function y() {
  return !Tn.forcedUnavailable && typeof Bun < "u" && typeof Bun.ant?.windowsProcessCreationTime === "function";
}
var Rn = 116444736000000000n;
function Qin(e) {
  if (!Number.isInteger(e) || e <= 0) return;
  try {
    return Bun.ant.windowsProcessCreationTime(e) ?? void 0;
  } catch {
    return;
  }
}
function Te(e) {
  return Number((e - Rn) / 10000n);
}
async function wTo(e) {
  if (x() !== "linux" && x() !== "wsl") return;
  if (!Cie(e)) return;
  try {
    let n = await ie().readFile(`/proc/${e}/stat`, {
      encoding: "utf8"
    });
    return N5(n);
  } catch {
    return;
  }
}
async function lAe(e) {
  return SG(await wTo(e));
}
async function w_t(e) {
  if (x() !== "macos") return lAe(e);
  let {
    code: code,
    stdout: stdout
  } = await ut("ps", ["-o", "stat=", "-p", String(e)], {
    timeout: 1000
  });
  return code === 0 && stdout.trim().startsWith("Z");
}
var In = 2147483647;
function Cie(e) {
  return Number.isInteger(e) && e > 1 && e <= In;
}
function ph(e) {
  if (!Cie(e)) return !1;
  try {
    return process.kill(e, 0), !1;
  } catch (error) {
    return k(error) === "ESRCH";
  }
}
var wn = 16;
async function Het() {
  let e = x();
  if (e !== "linux" && e !== "wsl") return !0;
  let n = ie(),
    t = await n.readlink("/proc/self").catch(() => null);
  if (t === null || t !== String(process.pid)) return !1;
  let r = await n.readdir("/proc").catch(() => null);
  if (!r) return !1;
  return r.filter(item => /^\d+$/.test(item.name)).length >= wn;
}
function ipe(e, n) {
  let t = e.filter(item => Math.abs(item) > 1);
  for (let r of t) {
    try {
      process.kill(r, "SIGTERM");
    } catch {
      continue;
    }
    return setTimeout((i, s, o) => {
      if (!fDr(s, o)) return;
      try {
        process.kill(i, "SIGKILL");
      } catch {}
    }, 5000, r, Math.abs(t[0]), n).unref(), !0;
  }
  return !1;
}
async function dAe(e, n, t = "SIGTERM") {
  return !1;
}
async function Ne(e, n) {
  let t = await cAe(e);
  if (t !== void 0) return FFe(n, t) ? "same" : "other";
  try {
    return process.kill(e, 0), "other";
  } catch (error) {
    return k(error) === "ESRCH" ? "gone" : "other";
  }
}
function kUt(e) {
  return;
}
function WDs(e, n = 12) {
  return [];
}
async function zDs(e, n = 10) {
  return (await uDr(e, n)).ancestors;
}
async function uDr(e, n = 10) {
  {
    let s = `
      $currentPid = ${String(e)}
      $ancestors = @()
      for ($i = 0; $i -lt ${n}; $i++) {
        $proc = Get-CimInstance Win32_Process -Filter "ProcessId=$currentPid" -ErrorAction SilentlyContinue
        if (-not $proc -or -not $proc.ParentProcessId -or $proc.ParentProcessId -eq 0) { break }
        $currentPid = $proc.ParentProcessId
        $ancestors += $currentPid
      }
      $ancestors -join ','
    `.trim(),
      o = await lt("powershell.exe", ["-NoProfile", "-Command", s], {
        timeout: 3000
      });
    return {
      ancestors: o.code !== 0 || !o.stdout?.trim() ? [] : o.stdout.trim().split(",").filter(Boolean).map(item => parseInt(item, 10)).filter(item => !isNaN(item)),
      readFailed: !1,
      truncated: !1
    };
  }
  let t = `pid=${String(e)}; for i in $(seq 1 ${n}); do ppid=$(ps -o ppid= -p $pid 2>/dev/null | tr -d ' '); if [ -z "$ppid" ]; then echo FAIL; exit 0; fi; if [ "$ppid" = "0" ] || [ "$ppid" = "1" ]; then echo END; exit 0; fi; echo $ppid; pid=$ppid; done`,
    r = await lt("sh", ["-c", t], {
      timeout: 3000
    }),
    i = (r.stdout ?? "").trim().split(`
`).filter(Boolean);
  return {
    ancestors: i.filter(item => item !== "END" && item !== "FAIL").map(item => parseInt(item, 10)).filter(item => !isNaN(item)),
    readFailed: r.code !== 0 || i.at(-1) === "FAIL",
    truncated: r.code === 0 && i.at(-1) !== "END" && i.at(-1) !== "FAIL"
  };
}
function GDs(e) {
  try {
    let t = `powershell.exe -NoProfile -Command "(Get-CimInstance Win32_Process -Filter \\"ProcessId=${String(e)}\\").CommandLine"`,
      r = $2n(t, {
        timeout: 1000
      });
    return r ? r.trim() : null;
  } catch {
    return null;
  }
}
function $et(e) {
  try {
    if (y()) return Qin(e)?.toString();
    return $2n(`powershell.exe -NoProfile -Command "(Get-CimInstance Win32_Process -Filter \\"ProcessId=${e}\\").CreationDate.Ticks"`, {
      timeout: 1000
    })?.trim() || void 0;
  } catch {
    return;
  }
}
function fDr(e, n) {
  if (n === void 0) return !0;
  return ve(n, $et(e));
}
function FFe(e, n) {
  if (n === e) return !0;
  let t = Number(e),
    r = Number(n);
  return Number.isFinite(t) && Number.isFinite(r) && t > 300000000000000000 !== r > 300000000000000000;
}
function ve(e, n) {
  return n === void 0 || n === e || $n(e, n);
}
function $n(e, n) {
  if (!y()) return !1;
  let t = Number(e),
    r = Number(n);
  return Number.isFinite(t) && Number.isFinite(r) && t > 300000000000000000 !== r > 300000000000000000;
}
async function cT(e, n) {
  if (n === void 0) return !0;
  return ve(n, await tc(e));
}
async function Xy(e, n) {
  let t = await tc(e, {
    skipCache: !0
  });
  return t === void 0 ? void 0 : FFe(n, t);
}
class Fe {
  #e = void 0;
  get token() {
    return this.#e;
  }
  set(e) {
    return this.#e = e, e;
  }
  reset() {
    this.#e = void 0;
  }
}
var vSe = new Fe();
class Oe {
  #e = new Map();
  get(e) {
    return this.#e.get(e);
  }
  set(e, n) {
    this.#e.set(e, n);
  }
}
var Ln = new W(() => new Oe());
function ESe() {
  return vSe.token ?? vSe.set($et(process.pid));
}
var kn = 1000;
async function Rw() {
  return vSe.token ?? (await we(tc(process.pid).then(e => vSe.token ?? vSe.set(e)), kn));
}
function PU(e) {
  if (y()) return e.procStart !== void 0 ? void 0 : e.procStartFt;
  return e.procStart;
}
function ape(e) {
  return y() ? {
    procStart: void 0,
    procStartFt: e
  } : {
    procStart: e,
    procStartFt: void 0
  };
}
var vn = 60000,
  Fn = 5000;
async function tc(e, n) {
  let at_2 = Date.now(),
    r = Ln.of(H().host);
  if (n?.env !== void 0) return ke(e, n.env);
  if (!n?.skipCache) {
    let a = r.get(e),
      u = a?.miss ? Fn : vn;
    if (a && at_2 - a.at < u) return a.p;
  }
  let p_2 = ke(e),
    s = {
      at: at_2,
      p: p_2
    };
  r.set(e, s);
  let o = await p_2;
  if (o === void 0 && r.get(e) === s) s.miss = !0, s.at = Date.now();
  return o;
}
var Ie = 250,
  $e = 2500;
async function cAe(e) {
  let n = Date.now() + $e,
    t = !1,
    r = await we(tc(e, {
      skipCache: !0
    }).finally(() => {
      t = !0;
    }), $e);
  if (r !== void 0 || !t) return r;
  let i = Ie + Math.floor(Math.random() * Ie),
    s = n - Date.now() - i;
  if (s <= 0) return;
  return await J(i), we(tc(e, {
    skipCache: !0
  }), s);
}
var timeout = 1e4;
function Le(e) {
  let n = l$e(Ds(e, "PATH") ?? "").split(Re),
    t = Nn(Ds(e, "SystemRoot") || "C:\\Windows", "System32", "WindowsPowerShell", "v1.0").toLowerCase();
  return n.filter(item => item.replace(/[\\/]+$/, "").toLowerCase() === t).join(Re);
}
async function ke(e, env) {
  let t = env === void 0 ? {} : {
    env: env,
    extendEnv: !1
  };
  try {
    {
      if (y()) return Qin(e)?.toString();
      let s = env === void 0 ? "powershell.exe" : kj("powershell.exe", Le(env));
      if (s === null) return;
      let o = await lt(s, ["-NoProfile", "-Command", `(Get-CimInstance Win32_Process -Filter "ProcessId=${e}").CreationDate.Ticks`], {
        timeout: timeout,
        ...t
      });
      return o.code === 0 && o.stdout?.trim() ? o.stdout.trim() : void 0;
    }
    let r = env === void 0 ? "ps" : kj("ps", Le(env));
    if (r === null) return;
    let i = await lt(r, ["-o", "lstart=", "-p", String(e)], {
      timeout: 1000,
      ...t,
      env: {
        ...(env ?? process.env),
        LC_ALL: "C",
        TZ: "UTC"
      }
    });
    return i.code === 0 && i.stdout ? i.stdout.trim() : void 0;
  } catch {
    return;
  }
}
async function HFe(e) {
  try {
    {
      if (y()) {
        let s = Qin(e);
        return s === void 0 ? null : Te(s);
      }
      let r = await lt("powershell.exe", ["-NoProfile", "-Command", `[DateTimeOffset]::new((Get-CimInstance Win32_Process -Filter "ProcessId=${e}").CreationDate).ToUnixTimeMilliseconds()`], {
          timeout: 1000
        }),
        i = Number(r.stdout?.trim());
      return r.code === 0 && Number.isFinite(i) ? i : null;
    }
    let n = await lt("ps", ["-o", "lstart=", "-p", String(e)], {
      timeout: 1000,
      env: {
        ...process.env,
        LC_ALL: "C",
        TZ: "UTC"
      }
    });
    if (n.code !== 0 || !n.stdout?.trim()) return null;
    let t = Date.parse(`${n.stdout.trim()} UTC`);
    return Number.isFinite(t) ? t : null;
  } catch {
    return null;
  }
}
var Mn = /[^\p{L}\p{N}._-]+/gu,
  Dn = /^[._-]+|[._-]+$/gu,
  Wn = /[\p{L}\p{N}]/u,
  Hn = 20;
function KS(e) {
  let n = Un(e).trim(),
    t = [...n];
  return t.length > 64 ? `${t.slice(0, 64).join("")}\u2026` : n;
}
function Un(e) {
  return e.replace(/[\p{Cf}\p{Cc}\p{Cs}\p{Zl}\p{Zp}]/gu, "");
}
function vUt(e, n = Hn) {
  let t = KS(e).replace(Mn, "-").replace(Dn, "");
  if (!Wn.test(t)) return "";
  let r = Q(t, n);
  return r === t ? t : `${r}\u2026`;
}
var kTo = 512,
  q = 4 * kTo;
function pDr(e, n) {
  let t = 0;
  while (t <= e.length) {
    let r = e.indexOf(`
`, t),
      i = r === -1 ? e.length : r,
      s = i - t <= q,
      o = Q(e.slice(t, Math.min(i, t + q)), q),
      a = n(o).replace(/\s+/g, " ").trim();
    if (a !== "" || !s) {
      let u = Q(a, kTo);
      return !s || u.length < a.length ? `${u}\u2026` : u;
    }
    if (r === -1) break;
    t = r + 1;
  }
  return "";
}
function uAe(e) {
  if (typeof e !== "string") return;
  let n = KS(e.replace(/["<>]/g, ""));
  return n === "" ? void 0 : n;
}
var uH = {
    red: "red_FOR_SUBAGENTS_ONLY",
    blue: "blue_FOR_SUBAGENTS_ONLY",
    green: "green_FOR_SUBAGENTS_ONLY",
    yellow: "yellow_FOR_SUBAGENTS_ONLY",
    purple: "purple_FOR_SUBAGENTS_ONLY",
    orange: "orange_FOR_SUBAGENTS_ONLY",
    pink: "pink_FOR_SUBAGENTS_ONLY",
    cyan: "cyan_FOR_SUBAGENTS_ONLY"
  },
  qS = Object.keys(uH);
function jz(e) {
  return e !== void 0 && qS.includes(e);
}
function KVe(e) {
  return e.userOverride ?? e.agentDefinitionColor;
}
function qVe(e) {
  if (e === "general-purpose") return;
  let t = zOo().get(e);
  if (t && qS.includes(t)) return uH[t];
  return;
}
function EUt(e, n) {
  let t = zOo();
  if (!n) {
    t.delete(e);
    return;
  }
  if (qS.includes(n)) t.set(e, n);
}
var CO = 200;
function RV(e, n) {
  return `${e}@${n}`;
}
function vTo(e) {
  return e.replace(/%|[^\x20-\x7e]/gu, n => encodeURIComponent(n));
}
function mDr(e, n) {
  let t = Date.now();
  return `${e}-${t}@${n}`;
}
var hl = "team-lead",
  YVe = "user",
  TUt = "system",
  RXi = /^[A-Za-z0-9][A-Za-z0-9_-]{0,63}$/,
  hDr = "Teammates are not available in this session.",
  TSe = "claude-swarm",
  Pjn = "swarm-view",
  CSe = "tmux",
  k_t = "cat";
function Ojn() {
  return `claude-swarm-${process.pid}`;
}
var AXi = "CLAUDE_CODE_TEAMMATE_COMMAND";
function fAe(e) {
  return e !== "verified";
}
import { basename as Xn, dirname as te, resolve as P } from "path";
import { createHmac as Gn } from "crypto";
var VDs = 120;
function Ijn(e) {
  let n = pDr(e, t => VA(t, " ", {
    keepEmojiJoiners: !0
  }));
  return n === "" ? "" : ct(n, VDs);
}
var De = ["bypass", "prompting"],
  Kn = new Set(De);
function xXi(e) {
  return Kn.has(e);
}
function We(e) {
  let textEncoder = new TextEncoder();
  return e.replace(/[^A-Za-z0-9:_/.\\-]/gu, t => Array.from(textEncoder.encode(t), r => `%${r.toString(16).toUpperCase().padStart(2, "0")}`).join(""));
}
function XVe(e) {
  return `bridge:${We(e)}`;
}
function vJ(e) {
  return `uds:${We(e)}`;
}
function ee(e) {
  try {
    return decodeURIComponent(e);
  } catch {
    return e;
  }
}
var He = /^[A-Za-z0-9_-]{1,80}$/,
  Mjn = 32,
  Ue = 24;
function PXi(e, n) {
  return Gn("sha256", n).update(e).digest("hex").slice(0, Ue);
}
var U = "A-Za-z0-9%:_/.\\\\-",
  Me = `[0-9a-f]{${Ue}}`,
  zn = `${Me}(?:,${Me}){0,${Mjn - 1}}`,
  regExp_4 = new RegExp(`^${zn}$`),
  KDs = 300,
  regExp_5 = new RegExp(`^[${U}]{1,${KDs}}$`);
function qDs(e) {
  return regExp_5.test(e);
}
function gDr(e, n) {
  if (e === void 0) return;
  let t = [...e];
  if (n) t.push(n);
  if (t.length === 0) return;
  return t.length > Mjn ? t.slice(t.length - Mjn) : t;
}
function Vn(e, n, t, r, i, s) {
  let o = [];
  if (e) o.push(`from="${e}"`);
  if (t && He.test(t)) o.push(`from-session="${t}"`);
  if (r !== void 0 && r.length > 0) {
    let _ = r.join(",");
    if (regExp_4.test(_)) o.push(`hop-chain="${_}"`);
  }
  let a = n === void 0 ? void 0 : KS(n.replace(/["<>]/g, ""));
  if (a) o.push(`from-name="${a}"`);
  if (i) o.push(`from-mode="${i}"`);
  let u = s === void 0 ? void 0 : KS(s.replace(/["<>]/g, ""));
  if (u) o.push(`from-plugin="${u}"`);
  return o.length > 0 ? ` ${o.join(" ")}` : "";
}
var regExp_6 = new RegExp(`^<${u7} from="([^"]+)"`);
function CUt(e, n, t, r, i, s, o) {
  let a = Vn(e, n, r, i, s, o);
  return `<${u7}${a}>
${X_t(u7, t)}
</${u7}>`;
}
function ne(e) {
  {
    if (typeof e !== "string") return;
    let n = He.source.replace(/^\^|\$$/g, ""),
      t = regExp_4.source.replace(/^\^|\$$/g, ""),
      r = e,
      i = r.match(new RegExp(`^<${u7}(?: from="([${U}]+)")?(?: from-session="(${n})")?(?: hop-chain="(${t})")?(?: from-name="([^"<>\\n\\r]+)")?(?: from-mode="(${De.join("|")})")?(?: from-plugin="([^"<>\\n\\r]+)")?>\\n([\\s\\S]*)\\n</${u7}>$`));
    if (!i) return;
    let hopChain = i[3] !== void 0 ? i[3].split(",") : void 0,
      fromMode = i[5];
    if (CUt(i[1], i[4], i[7] ?? "", i[2], hopChain, fromMode, i[6]) !== r) return;
    return {
      ...(i[1] !== void 0 && {
        from: i[1]
      }),
      ...(i[2] !== void 0 && {
        fromSession: i[2]
      }),
      ...(hopChain !== void 0 && {
        hopChain: hopChain
      }),
      ...(i[4] !== void 0 && {
        fromName: i[4]
      }),
      ...(fromMode !== void 0 && {
        fromMode: fromMode
      }),
      ...(i[6] !== void 0 && {
        fromPlugin: i[6]
      }),
      body: i[7] ?? ""
    };
  }
  return;
}
function _Dr(e) {
  let n = ne(e);
  if (!n || n.hopChain === void 0) return e;
  return CUt(n.from, n.fromName, n.body, n.fromSession, void 0, n.fromMode, n.fromPlugin);
}
function YDs(e, n) {
  if (n === void 0) return e;
  let t = ne(e);
  if (!t || t.fromPlugin !== void 0) return e;
  return CUt(t.from, t.fromName, t.body, t.fromSession, t.hopChain, t.fromMode, n);
}
function mte(e, n, t) {
  if (e.body === void 0 || n === t) return e;
  let {
    body: body,
    ...i
  } = e;
  return i;
}
function pAe(e) {
  let n = ne(e);
  if (!n) return {};
  let name = n.fromName ? KS(n.fromName) : "";
  return {
    ...(name && {
      name: name
    }),
    ...(n.fromSession !== void 0 && {
      fromSession: n.fromSession
    }),
    ...(n.hopChain !== void 0 && {
      hopChain: n.hopChain
    }),
    ...(n.fromMode !== void 0 && {
      fromMode: n.fromMode
    }),
    body: n.body
  };
}
function OXi(e, n) {
  {
    if (typeof e !== "object" || e === null || !("kind" in e) || e.kind !== "peer") return;
    if (!("from" in e) || typeof e.from !== "string" || !qDs(e.from)) return {
      from: "unknown"
    };
    let name_2 = "name" in e ? uAe(e.name) : void 0,
      body_2 = "body" in e ? e.body : void 0;
    return {
      from: e.from,
      ...(name_2 && {
        name: name_2
      }),
      ...(typeof body_2 === "string" && VA(body_2, " ").trim() !== "" && typeof n === "string" && n.includes(body_2) && {
        body: body_2
      })
    };
  }
  return;
}
function v_t(e) {
  for (let n = e.length - 1; n >= 0; n--) {
    let t = e[n];
    if (t.type !== "user" || t.toolUseResult || t.isCompactSummary) continue;
    return t.origin?.kind === "peer" ? t.origin.hopChain ?? [] : void 0;
  }
  return;
}
var regExp_7 = new RegExp(`^(?:uds|bridge|did):[${U}]{1,200}$`);
function RSe(e) {
  return regExp_7.test(e);
}
var Jn = /^\/\S*\.sock$/,
  qn = /^[\\/]{2}[.?][\\/]pipe[\\/]/i,
  Qn = /^\/\S*\.sock/;
function XDs(e) {
  return Qn.test(e);
}
function iS(target) {
  if (target.startsWith("uds:")) return {
    scheme: "uds",
    target: ee(target.slice(4))
  };
  if (target.startsWith("bridge:")) return {
    scheme: "bridge",
    target: ee(target.slice(7))
  };
  if (target.startsWith("did:")) return {
    scheme: "did",
    target: target
  };
  if (Jn.test(target) || qn.test(target)) return {
    scheme: "uds",
    target: target
  };
  return {
    scheme: "other",
    target: target
  };
}
function bDr(e, n) {
  if (e.trim().length === 0) return "to must not be empty";
  let t = iS(e);
  if ((t.scheme === "bridge" || t.scheme === "uds") && t.target.trim().length === 0) return "address target must not be empty";
  if (!nj(t.target) || !nj(e)) return `'${e}' is not a local socket address. Use an address from ${n}.`;
  return;
}
function nj(e) {
  if (!or(e)) return !0;
  return lpe(e) !== void 0;
}
function $Fe(e, n) {
  return ze(e, n) === "same";
}
function ASe(e, n) {
  return ze(e, n) !== "different";
}
function ze(e, n) {
  let t = lpe(e),
    r = lpe(n);
  if (t !== void 0 || r !== void 0) {
    if (t === void 0 || r === void 0) return "different";
    if (ETo(t) === ETo(r)) return "same";
    return re(t) === re(r) || B(t) === B(r) ? "maybe" : "different";
  }
  if (e === n) return "same";
  if (th(e) || th(n)) return G(O(P(e))) === G(O(P(n))) ? "maybe" : "different";
  let i = O(P(e)),
    s = O(P(n));
  if (i === s) return "same";
  let o = x(),
    a = o === "macos" || o === "windows";
  return G(i) === G(s) || a && B(i) === B(s) ? "maybe" : "different";
}
function G(e) {
  let n = x();
  return n === "macos" || n === "windows" ? O(re(et(e))) : e;
}
function ETo(e) {
  return e.replace(/[A-Z]/g, n => n.toLowerCase());
}
function re(e) {
  let n = "";
  for (let t of e) {
    let r = t.toUpperCase(),
      i = Be(r) ? r : t,
      s = i.toLowerCase();
    n += Be(s) ? s : i;
  }
  return n;
}
function Be(e) {
  let n = e.codePointAt(0);
  return n !== void 0 && e.length === (n > 65535 ? 2 : 1);
}
function B(e) {
  return e.toUpperCase().toLowerCase();
}
function et(e) {
  return x() === "macos" ? e.normalize("NFC") : e;
}
function O(e) {
  if (x() !== "macos") return e;
  let n = T0(e),
    t = /^\/private(\/(?:var|tmp|etc)(?:\/.*)?)$/.exec(n);
  return t ? t[1] : n;
}
function lpe(e) {
  let n = /^[\\/]{2}[.?][\\/]pipe[\\/](?:(LOCAL)[\\/])?([^\\/]+)$/i.exec(e);
  if (n === null || n[2] === "." || n[2] === "..") return;
  if (/[. ]$/.test(n[2])) return;
  if (e.startsWith("\\\\?\\") && e.includes("/")) return;
  return n[1] === void 0 ? n[2] : `${CTo}\\${n[2]}`;
}
function JDs(e, n, t) {
  if (lpe(n) !== void 0) {
    let r = lpe(e);
    return r !== void 0 && regExp_8.test(r);
  }
  if (th(e)) return !1;
  if (te(P(e)) === te(P(n))) return e.endsWith(".sock");
  return t?.verifiedPeerPid !== void 0 && t.ownerUids !== void 0 && je(e, t.ownerUids);
}
var QDs = "reply_across_default_dirs",
  nt = [/^\/tmp\/cc-socks(?:-(0|[1-9]\d*))?$/, /^\/private\/tmp\/cc-socks(?:-(0|[1-9]\d*))?$/, /^\/run\/user\/(0|[1-9]\d*)\/cc-socks$/, /^\/data\/data\/com\.termux\/files\/usr\/tmp\/cc-socks(?:-(0|[1-9]\d*))?$/];
function je(e, n) {
  let t = P(e);
  if (!/^(\d+(-[0-9a-f]{8})?|[0-9a-f]{1,16})\.sock$/.test(Xn(t))) return !1;
  let r = te(t);
  for (let i of nt) {
    let s = i.exec(r);
    if (s) return s[1] === void 0 || n.some(item => String(item) === s[1]);
  }
  return !1;
}
function IXi(e, n, t, r = []) {
  let i = lpe(e),
    s = lpe(n);
  if (i !== void 0 && s !== void 0 && regExp_9.test(s) && !regExp_9.test(i)) return !1;
  if (JDs(e, n)) return !0;
  return (t?.includes(QDs) ?? !1) && je(e, r);
}
var TTo = "cc-msg-",
  CTo = "LOCAL",
  regExp_8 = new RegExp(`^(?:${CTo}\\\\)?${TTo}[0-9a-f]{32}$`, "i"),
  regExp_9 = new RegExp(`^${TTo}[0-9a-f]{32}$`, "i");
export { EXi, BDs, Bz, Fet, Mr, NFe, IA, SUt, Tie, wUt, Jin, yd, TXi, dT, CXi, xjn, jDs, Qin, wTo, lAe, w_t, Cie, ph, Het, ipe, dAe, kUt, WDs, zDs, uDr, GDs, $et, fDr, FFe, cT, Xy, vSe, ESe, Rw, PU, ape, tc, cAe, HFe, KS, vUt, kTo, pDr, uAe, uH, qS, jz, KVe, qVe, EUt, CO, RV, vTo, mDr, hl, YVe, TUt, RXi, hDr, TSe, Pjn, CSe, k_t, Ojn, AXi, fAe, VDs, Ijn, xXi, XVe, vJ, Mjn, PXi, KDs, qDs, gDr, regExp_6 as yDr, CUt, _Dr, YDs, mte, pAe, OXi, v_t, RSe, XDs, iS, bDr, nj, $Fe, ASe, ETo, lpe, JDs, QDs, IXi, TTo, CTo };