// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { W } from "B:/~BUN/root/chunk-ppmmt0c3.js";
import { i } from "B:/~BUN/root/chunk-j6pt0v41.js";
import { wa, Dt, L5 } from "B:/~BUN/root/chunk-n8cnxns2.js";
import { Se } from "B:/~BUN/root/chunk-x24hm796.js";
import { iTe, hq, W9e, Iy } from "B:/~BUN/root/chunk-cxcakgnv.js";
import { qE } from "B:/~BUN/root/chunk-apgsnbqk.js";
import { mp, FFs, HFs } from "B:/~BUN/root/chunk-3xdsa4p8.js";
import { TS } from "B:/~BUN/root/chunk-y781qzhe.js";
import { aCo, AO } from "B:/~BUN/root/chunk-3v92y8yw.js";
import { Cxo } from "B:/~BUN/root/chunk-1x03q1j7.js";
import { jr, jSt } from "B:/~BUN/root/chunk-46ahshhq.js";
import { snt } from "B:/~BUN/root/chunk-bkfncj77.js";
import { dAr, _Cs, i_o, SCs } from "B:/~BUN/root/chunk-dwbkkfd6.js";
import { dZ } from "B:/~BUN/root/chunk-27h4st9h.js";
import { Zmr } from "B:/~BUN/root/chunk-2fedt3ag.js";
import { ES, e2o } from "B:/~BUN/root/chunk-09wqth96.js";
import { lr } from "B:/~BUN/root/chunk-75wha2r5.js";
import { gN } from "B:/~BUN/root/chunk-q15wjdnk.js";
import { ce } from "B:/~BUN/root/chunk-w7vsj9wa.js";
import { lu } from "B:/~BUN/root/chunk-xfdxa8bd.js";
import { Zn } from "B:/~BUN/root/chunk-12nc74pv.js";
import { he } from "B:/~BUN/root/chunk-fet34rqr.js";
var Je = new Set(["iTerm.app", "vscode", "WezTerm", "WarpTerminal", "Hyper", "Tabby", "rio", "contour", "alacritty"]);
function i5n() {
  if (i.CLAUDE_CODE_FORCE_STRIKETHROUGH) return !0;
  let TERM = i.TERM;
  if (i.TERM_PROGRAM === "Apple_Terminal" || TERM === "linux") return !1;
  return Je.has(i.TERM_PROGRAM ?? "") || qE.isGhostty() || qE.isMintty() || qE.isJetBrainsIdeTerminal() || i.LC_TERMINAL === "iTerm2" || !!TERM?.includes("kitty") || !!TERM?.includes("alacritty") || !!TERM?.startsWith("foot") || !!i.KITTY_WINDOW_ID || !!i.ALACRITTY_LOG || !!i.KONSOLE_VERSION || !!i.WT_SESSION || !!i.ZED_TERM || parseInt(i.VTE_VERSION ?? "", 10) >= 4400;
}
var O = 1000,
  de = 16000,
  me = 100,
  et = 4000,
  Y = 100,
  Te = O * me,
  gfm = hq.rules.block.gfm,
  be = /\r\n?/g,
  tt = `x
`,
  nt = /^\n*/,
  rt = /\n*$/,
  regExp = new RegExp(`^(?:[^\\n]+\\n){1,${Y}}? {0,3}(?:=+|-+) *(?:\\n|$)`),
  ye = /^(?:[^\n]+\n)+? {0,3}(?:=+|-+) *(?:\n|$)/;
function st() {
  let e = 0;
  return {
    isHeld: () => e > 0,
    during: t => {
      e += 1;
      try {
        return t();
      } finally {
        e -= 1;
      }
    }
  };
}
var ee = st();
function I8s(e, t) {
  let n = new hq(e.defaults);
  return t.includes("<") && n.lex(t), n.state.inLink || n.state.inRawBlock;
}
function DWr(e) {
  let t = e.replace(be, `
`);
  return re(A([], t, O)).length === t.length && !j(t.slice(gfm.fences.exec(t)?.[0].length));
}
function jvt(e, t) {
  let isWindowed = !DWr(t);
  return {
    tokens: isWindowed ? ee.during(() => ot(e, t)) : e.lexer(t),
    isWindowed: isWindowed
  };
}
function cHo(e) {
  let t = "tokens" in e;
  return oe(e) ? e.items : X(e) ? [...e.header, ...e.rows.flat()].flatMap(item => item.tokens) : t ? e.tokens ?? [] : [];
}
function ot(e, t) {
  let n = [],
    r = A([], t.replace(be, `
`), O);
  while (r.rest !== "") {
    r = {
      declining: r.declining,
      ...it(e, r)
    };
    for (let o of r.taken) {
      let s = n.at(-1);
      s?.type === "space" && o.type === "space" ? s.raw += o.raw : n.push(o);
    }
  }
  return n;
}
function it(e, t) {
  let n = re(t),
    {
      header = "",
      fromRow = t.rest
    } = t.declining ?? {},
    s = n.length + fromRow.length <= t.rest.length && n.startsWith(header);
  return lt(e, n) ? q(t.rest) : s ? te(e, t.rest) : ct(e, t, n);
}
function lt(e, t) {
  let r = j(t) ? new hq(e.defaults).blockTokens(t) : [],
    o = !1;
  while (!o && r.length > 0) o = r.some(item => at(item).some(j)), r = r.flatMap(cHo);
  return o;
}
function at(e) {
  let t = (se(e) || e.type === "heading" || e.type === "text") && "text" in e && typeof e.text === "string";
  return X(e) ? [e.raw] : t ? [e.text] : [];
}
function ct(e, t, n) {
  let r = e.lexer(n),
    s = n.length === t.rest.length ? r.length : bt(r, n),
    l = xe(r, s, n);
  return l > 0 ? A(r.slice(0, s), t.rest.slice(l), O) : ut(e, t, r);
}
function ut(e, t, n) {
  let [r] = n,
    o = n.length === 1,
    s = o && se(r) && !Ee(t.rest),
    l = o && X(r),
    a = LWr(r?.raw ?? ""),
    c = t.declining?.fromRow ?? t.rest,
    p = l && a.length + c.length <= t.rest.length && !ne(e, a + c.slice(0, P(c, 0, 1)));
  return s ? ke(e, t.rest) : p ? te(e, t.rest) : l ? gt(e, r, t.rest) : pt(t, n);
}
function pt(e, t) {
  let [n] = t,
    r = t.findLastIndex(Re) <= 0,
    o = r && t.some(_e),
    s = e.lines < de && !(o && se(n)),
    l = r && oe(n),
    a = r && (n?.type === "code" || o && n?.type !== "html");
  return s ? A([], e.rest, de) : l ? ft(e, n) : a ? A(t, kt(e), e.lines) : q(e.rest);
}
function ft(e, t) {
  let n = t.items.slice(0, -1),
    r = B(n);
  return r !== "" && e.rest.startsWith(r) ? A([wt(t, r, n)], e.rest.slice(r.length), e.lines) : q(e.rest);
}
function ke(e, t) {
  let n = dt(t),
    r = P(n.text, 0, et) === n.text.length && !j(n.text);
  return A([{
    ...n,
    tokens: r ? new hq(e.defaults).inlineTokens(n.text) : [we(n.text)]
  }], t.slice(n.raw.length), O);
}
var te = (e, t) => Ee(t) ? q(t) : ke(e, t);
function Ee(e) {
  return regExp.test(e) && gfm.lheading.test(e);
}
function dt(e) {
  let t = Et(),
    n = ge(e, "");
  while (n.nextLines !== "") t.text += t.raw === "" ? n.nextLines : `
${n.nextLines}`, t.raw += n.nextLines + n.lineBreak, n = ge(n.isOpen ? e.slice(t.raw.length) : "", tt);
  return t;
}
function ge(e, t) {
  let n = P(e, 0, O),
    r = e[n - 1] === `
` ? n - 1 : n,
    o = (gfm.paragraph.exec(t + e.slice(0, P(e, n, 1)))?.[0] ?? t).slice(t.length),
    nextLines = o.slice(0, r),
    isOpen = o.length > r,
    a = isOpen || gfm.newline.exec(e.slice(nextLines.length))?.[0] === `
`;
  return {
    nextLines: nextLines,
    lineBreak: a ? `
` : "",
    isOpen: isOpen
  };
}
function gt(e, t, n) {
  let r = LWr(t.raw),
    o = mt(r, n),
    s = Le(n.slice(r.length, o), O),
    l = [],
    a = !1;
  while (!a && l.length < s.length) {
    let p = ne(e, r + (s[l.length] ?? ""));
    a = p === void 0, p && l.push(p);
  }
  let c = n.slice(0, o) + (nt.exec(n.slice(o))?.[0] ?? "");
  return a ? ht(e, r, s.slice(0, l.length + 1), n) : A([xt(t, c, l.flatMap(item => item.rows))], n.slice(c.length), O);
}
function ht(e, header_2, n, r) {
  let o = te(e, r),
    s = header_2.length + n.join("").length,
    l = r.length - o.rest.length < s,
    a = l ? Le(n.at(-1) ?? "", 1) : [],
    c = Math.floor(Te / header_2.length),
    p = a.slice(0, c).findIndex(item => !ne(e, header_2 + item)),
    d = p >= 0 ? p : c < a.length ? c : 0,
    fromRow_2 = r.slice(s - a.slice(d).join("").length);
  return {
    ...o,
    declining: l ? {
      header: header_2,
      fromRow: fromRow_2
    } : void 0
  };
}
function mt(e, t) {
  let n = e.length,
    r = n < t.length;
  while (r) {
    let o = t.slice(n, P(t, n, O)),
      s = Tt(e, o);
    n += s, r = s === o.length && n < t.length;
  }
  return n;
}
function Tt(e, t) {
  let n = (gfm.table.exec(e + t)?.[0] ?? e).slice(e.length),
    r = n.replace(rt, "");
  return r !== "" && n.length > r.length ? r.length + 1 : r.length;
}
function ne(e, t) {
  let [n] = j(t) ? [] : e.lexer(t);
  return X(n) && n.raw.length === t.length ? n : void 0;
}
function Le(e, t) {
  let n = [];
  for (let r = 0; r < e.length; r = P(e, r, t)) n.push(e.slice(r, P(e, r, t)));
  return n;
}
function bt(e, t) {
  let n = yt(e),
    r = e.findLastIndex((l, a) => a < n && _e(l)) + 1,
    o = n,
    s = 0;
  for (let l = e.length - 1; l >= r && s <= Y; l--) s += Dt(e[l]?.raw ?? "", `
`), o = s <= Y ? Math.min(o, l) : o;
  return [r, o].find(item => xe(e, item, t) > 0) ?? 0;
}
function yt(e) {
  let t = e.findLastIndex(r => r.raw.trim() !== "");
  return oe(e[t]) ? t : Math.max(e.findLastIndex(Re), 0);
}
var M8s = (e, t) => B(e) === t;
function D8s(e, t, n) {
  let r = B(e.slice(0, t)),
    o = B(e.slice(t)),
    s = n.endsWith(o);
  return n.startsWith(r) ? r.length : s ? n.length - o.length : 0;
}
function xe(e, t, n) {
  let r = B(e.slice(0, t)),
    o = B(e.slice(t)),
    s = r.length + o.length === n.length || n.startsWith(r),
    l = n.endsWith(o);
  return s ? r.length : l ? n.length - o.length : 0;
}
function P(e, t, n) {
  let r = t;
  for (let o = 0; o < n && r < e.length && r - t < n * me; o++) {
    let s = e.indexOf(`
`, r);
    r = s === -1 ? e.length : s + 1;
  }
  return r;
}
function j(e) {
  let t = 0,
    n = !1;
  while (!n && t < e.length) {
    let r = e.indexOf(`
`, t),
      o = r === -1 ? e.length : r;
    n = o - t > Te, t = o + 1;
  }
  return n;
}
function re({
  rest: rest,
  lines: lines
}) {
  return rest.slice(0, P(rest, gfm.fences.exec(rest)?.[0].length ?? 0, lines));
}
function kt(e) {
  return e.rest.slice(re(e).length);
}
function LWr(e) {
  return e.slice(0, e.indexOf(`
`, e.indexOf(`
`) + 1) + 1);
}
function A(taken, rest_2, lines_2) {
  return {
    taken: taken,
    rest: rest_2,
    lines: lines_2
  };
}
function q(e) {
  return A([Lt(e)], "", O);
}
function Et() {
  return {
    type: "paragraph",
    raw: "",
    text: "",
    tokens: []
  };
}
function Lt(e) {
  return {
    type: "paragraph",
    raw: e,
    text: e,
    tokens: [we(e)]
  };
}
function we(e) {
  return {
    type: "text",
    raw: e,
    text: e,
    escaped: !1
  };
}
function xt(e, raw, rows) {
  return {
    ...e,
    raw: raw,
    rows: rows
  };
}
function wt(e, raw_2, items) {
  return {
    ...e,
    raw: raw_2,
    items: items
  };
}
function Re(e) {
  return e.type !== "space";
}
function _e(e) {
  return e.type === "space" || e.raw.endsWith(`

`);
}
function se(e) {
  return e?.type === "paragraph";
}
function oe(e) {
  return e?.type === "list";
}
function X(e) {
  return e?.type === "table";
}
function B(e) {
  return e.map(item => item.raw).join("");
}
var Rt = /^[ \t>]+/gm,
  St = /[ \t]+/g,
  _t = /\n{3,}/g;
function It() {
  let weakMap = new WeakMap(),
    isAtMaxNesting = n => (weakMap.get(n) ?? 0) >= 100;
  return {
    isAtMaxNesting: isAtMaxNesting,
    lexLevel: (n, r) => {
      if (isAtMaxNesting(n)) return;
      let s = weakMap.get(n) ?? 0;
      weakMap.set(n, s + 1);
      try {
        return r();
      } finally {
        weakMap.set(n, s);
      }
    }
  };
}
var F = It(),
  Ie = e => e.replace(Rt, t => t.replace(St, " ").trimStart()).replace(_t, `

`).trimEnd();
var Ot = 6,
  At = 16,
  H = `
`,
  ie = rows_2 => ({
    rows: rows_2,
    isDone: !1
  }),
  Ne = e => e === "" || e.endsWith(H) ? e : e + H,
  Oe = e => e === "" ? [] : [ie(e)],
  Ce = e => Zn(e).trim() !== "";
function Nt(e) {
  let t = Se.dim(HFs);
  return ie(e.split(H).map(item => Ce(item) ? `${t} ${Se.italic(item)}` : item).join(H));
}
function Ae(e) {
  let t = `${HFs} `.repeat(Math.max(0, e)).trimEnd();
  return t === "" ? "" : `${Se.dim(t)} `;
}
function Ct(e, t, n) {
  let r = Math.min(t + 1, At) - n.around,
    o = n.around === 0,
    s = Ae(o ? 1 : r),
    l = Ae(o ? r - 1 : 0),
    a = o ? Se.italic : c => c;
  return {
    rows: Ne(e).split(H).map(item => Ce(item) ? s + a(l + item) : item).join(H),
    isDone: !0
  };
}
function Pt(e) {
  let t = [],
    n = "";
  for (let r of e) if (r.isDone) t.push(...Oe(Ne(n)), r), n = "";else n += r.rows;
  return [...t, ...Oe(n)];
}
function Pe(e, t, n) {
  let o = t < Ot ? Nt : s => Ct(s, t, n);
  return Pt(e.flatMap(item => item.type === "blockquote" ? Pe(item.tokens ?? [], t + 1, n) : [ie(n.draw(item, t + 1))])).map(item => item.isDone ? item : o(item.rows));
}
var Me = (e, around, draw) => Pe(e, around, {
  around: around,
  draw: draw
}).map(item => item.rows).join("");
var le = /[\x00-\x08\x0b-\x1f\x7f-\x9f]/,
  regExp_2 = new RegExp(`(?!${snt(";:")})${le.source}`, "g"),
  NWr = e => e.replace(/\r\n?/g, `
`).replace(regExp_2, "");
function FWr(e) {
  let n = e.some(item => le.test(item.raw)) ? [e] : [];
  for (let s of n) for (let [l, a] of Object.entries(s)) {
    let c = typeof a === "string" && l !== "href";
    if (typeof a === "object" && a !== null) n.push(a);else if (c) Reflect.set(s, l, NWr(a));
  }
  let r = n.some(item => Object.entries(item).some(([l, a]) => l !== "href" && typeof a === "string" && a.includes("\x1B"))),
    o = n.filter(item => "type" in item && (item.type === "link" || item.type === "image" || item.type === "codespan"));
  for (let s of r ? o : []) Object.assign(s, {
    afterStyle: !0
  });
  return e;
}
var m = `
`,
  regExp_3 = new RegExp(`^[${dAr}]+`, "u"),
  regExp_4 = new RegExp(`(?:^|[^${dAr}])([${dAr}]*)$`, "u");
function ae(e) {
  let t = regExp_4.exec(e)?.[1]?.length ?? 0;
  return t === 0 ? e : e.slice(0, e.length - t);
}
var Fe = /\x1b\]8;[^;\x07\x1b]*;([^\x07\x1b]*)(?:\x07|\x1b\\)/g,
  $t = /\x9d|\x1b(?!\[)/,
  Bt = /\x9d/g,
  Ht = /\x1b(?!\[)/g,
  v = e => Array.from(e).filter(item => {
    let n = item.codePointAt(0) ?? 0;
    return n !== 10697 && !AO(n);
  }).join(""),
  Ge = "\x1B[28m\x1B[39m\x1B[49m",
  z = e => "afterStyle" in e && e.afterStyle === !0 ? Ge : "",
  De = (e, t) => `${t}${v(e)}`,
  pe = (e, t, n = "") => `${t} (${v(e)}${n})`,
  fe = e => pe(e, Ge);
function We(e) {
  if (!e.includes("\x1B]8;")) return e;
  let t = [],
    n = null;
  for (let a of e.matchAll(Fe)) {
    let c = a.index + a[0].length;
    if (n !== null) t.push({
      href: n.href,
      openEnd: n.openEnd,
      closeStart: a.index,
      closeEnd: c
    }), n = null;
    let href = a[1] ?? "";
    if (href !== "") n = {
      href: href,
      openEnd: c
    };
  }
  if (n !== null) t.push({
    href: n.href,
    openEnd: n.openEnd,
    closeStart: e.length,
    closeEnd: e.length
  });
  let r = "",
    o = 0,
    s = 0,
    l = !1;
  for (let a of t) {
    let c = e.lastIndexOf("\x1B]8;", a.openEnd - 1),
      p = ae(Zn(e.slice(0, c))),
      d = s;
    s = a.closeStart;
    let b = aCo(a.href),
      S = l;
    if (l = b, !b) {
      let f = Zn(e.slice(d, c)),
        h = f.includes(mp),
        T = S && ae(f) === "";
      if (!h && !p.endsWith(mp) && !T) continue;
    } else if (!p.endsWith(mp)) continue;
    if (b) {
      let f = e.slice(a.openEnd, a.closeStart),
        h = Zn(f).startsWith(`${mp} `) ? f.indexOf(`${mp} `) : -1;
      if (h !== -1) r += e.slice(o, a.openEnd), r += f.slice(0, h), r += f.slice(h + mp.length + 1), o = a.closeStart;else {
        let T = e.slice(o, c),
          k = `${mp} `;
        if (T.endsWith(k)) {
          let g = T.slice(0, -k.length);
          if (ae(Zn(r + g)).endsWith(mp)) r += g, o = c;
        }
      }
      continue;
    }
    let y = fe(a.href),
      closeEnd = a.closeEnd;
    if (e.startsWith(y, closeEnd)) continue;
    r += e.slice(o, closeEnd) + y, o = closeEnd;
  }
  return r + e.slice(o);
}
function Bmn(e, t) {
  let n = t();
  if (!n.includes("\x1B]8;")) return n;
  let r = We(n);
  if (!n.includes(mp) && r === n) return n;
  let o = Ke(e ?? []);
  if (o.length === 0) return r;
  try {
    for (let s of o) Object.assign(s, {
      defanged: !0
    });
    return We(t());
  } finally {
    for (let s of o) Reflect.deleteProperty(s, "defanged");
  }
}
function Ke(e) {
  return e.flatMap(item => {
    if (item.type === "codespan") return !("defanged" in item && item.defanged === !0) && Ze.test(item.text) ? [item] : [];
    return "tokens" in item && Array.isArray(item.tokens) ? Ke(item.tokens) : [];
  });
}
class Qe {
  #e = !1;
  get configured() {
    return this.#e;
  }
  set() {
    this.#e = !0;
  }
  reset() {
    this.#e = !1, Iy.setOptions(Iy.getDefaults());
  }
}
var $e = he(new Qe(), e => e.reset());
class qe {
  #e = new lu({
    max: 200,
    ttl: 30000
  });
  get(e) {
    return this.#e.get(e);
  }
  record(e, t) {
    this.#e.set(e, t);
  }
}
var dr = new W(() => new qe()),
  table = iTe.prototype.table,
  blockquote = iTe.prototype.blockquote,
  list = iTe.prototype.list,
  emStrong = iTe.prototype.emStrong,
  Xe = {
    tokenizer: {
      del(e) {
        let t = /^~~(?=[^\s~])((?:\\.|[^\\])*?(?:\\.|[^\s~\\]))~~(?=[^~]|$)/.exec(e),
          text = t?.[1];
        if (!t || text === void 0) return;
        return {
          type: "del",
          raw: t[0],
          text: text,
          tokens: this.lexer.inlineTokens(text)
        };
      },
      blockquote(e) {
        return this.rules.other.blockquoteStart.test(e) ? F.lexLevel(this.lexer, () => blockquote.call(this, e)) : void 0;
      },
      list(e) {
        return this.rules.block.list.test(e) ? F.lexLevel(this.lexer, () => list.call(this, e)) : void 0;
      },
      emStrong(e, t, n) {
        return this.rules.inline.emStrongLDelim.test(e) ? F.lexLevel(this.lexer, () => emStrong.call(this, e, t, n)) : void 0;
      },
      paragraph(e) {
        let t = He(this, e);
        return t ? {
          type: "paragraph",
          ...t
        } : !1;
      },
      text(e) {
        let t = He(this, e);
        return t ? {
          type: "text",
          ...t
        } : !1;
      },
      def() {
        return;
      },
      lheading(e) {
        return (ee.isHeld() ? regExp.test(e) : ye.test(e)) ? !1 : void 0;
      },
      table(e) {
        let t = this.rules.block.table.exec(e);
        if (!t) return;
        let n = t[0],
          r = n.split(`
`).map(en),
          o = r.join(`
`),
          s = o === n ? table.call(this, e) : table.call(this, o + e.slice(n.length));
        if (s) {
          if (tn(r, s.header.length)) return;
          if (o !== n) s.raw = n;
        }
        return s;
      }
    }
  },
  Ft = {
    '"': '"',
    "'": "'",
    ")": "(",
    "]": "[",
    "}": "{",
    ">": "<"
  },
  Gt = /^\\.[\p{L}\p{N}\\*_`~]/u,
  Kt = /[\p{L}\p{N}].$/u,
  Qt = {
    extensions: [{
      name: "wrappedBackslash",
      level: "inline",
      tokenizer(e, t) {
        let n = e[1];
        if (e[0] !== "\\" || n === void 0 || this.lexer.state.inLink) return;
        let r = Ft[n],
          o = t.at(-1);
        if (r === void 0 || o?.type !== "text" || !o.raw.endsWith(r) || Kt.test(o.raw) || Gt.test(e)) return;
        let s = t.at(-2);
        if (o.raw === r && s !== void 0 && s.type !== "br" && !(s.type === "escape" && s.text === s.raw)) return;
        let l = `\\${n}`;
        return {
          type: "escape",
          raw: l,
          text: l
        };
      }
    }]
  };
function He(e, raw_3) {
  if (!F.isAtMaxNesting(e.lexer) || !(e.rules.block.list.test(raw_3) || e.rules.other.blockquoteStart.test(raw_3))) return;
  let text_2 = Ie(raw_3);
  return {
    raw: raw_3,
    text: text_2,
    tokens: e.lexer.inline(text_2)
  };
}
function MGt() {
  if ($e.configured) return;
  $e.set(), Iy.use(Xe, Qt);
}
var L8s = new W9e(Xe, {
  tokenizer: {
    emStrong(e) {
      return e.startsWith("_") ? void 0 : !1;
    },
    table() {
      return;
    },
    blockquote() {
      return;
    },
    hr() {
      return;
    },
    lheading() {
      return;
    },
    link() {
      return;
    },
    autolink() {
      return;
    },
    url() {
      return;
    },
    escape() {
      return;
    },
    br() {
      return;
    }
  }
});
function jmn(e, t, highlight = null) {
  MGt();
  let {
      tokens: tokens,
      isWindowed: o
    } = jvt(Iy, dZ(e)),
    linkCap = !o && TS();
  return FWr(tokens).map(item => VN(item, t, {
    listDepth: 0,
    orderedListNumber: null,
    parent: null,
    highlight: highlight,
    linkCap: linkCap,
    windowed: o
  })).join("").trim();
}
var qt = /\s/,
  Xt = /&(?:nbsp|#0{0,4}160|#[xX]0{0,4}[aA]0);/g,
  uHo = 32;
function Wmn(e) {
  if (!e.endsWith(`
`)) return !1;
  for (let t = e.length - 2; t >= 0; t--) {
    let n = e[t];
    if (n === `
`) return !0;
    if (!qt.test(n)) return !1;
  }
  return !1;
}
function VN(e, t, n) {
  let r = zt(e, t, n);
  return n.windowed && $t.test(r) ? r.replace(Fe, "").replace(Bt, "").replace(Ht, "") : r;
}
function zt(e, themeName, n) {
  let {
      listDepth = 0,
      orderedListNumber: o = null,
      parent = null,
      highlight: highlight_2 = null,
      glueProse = !1,
      screenReader = !1,
      listIndent = "",
      promptMode = !1,
      windowed: windowed,
      quotesAround = 0
    } = n,
    linkCap_2 = !windowed && (n.linkCap ?? TS());
  switch (e.type) {
    case "blockquote":
      return Me(e.tokens ?? [], quotesAround, (u, quotesAround_2) => VN(u, themeName, {
        listDepth: 0,
        orderedListNumber: null,
        parent: null,
        highlight: highlight_2,
        glueProse: !1,
        linkCap: linkCap_2,
        windowed: windowed,
        screenReader: screenReader,
        promptMode: promptMode,
        quotesAround: quotesAround_2
      }));
    case "code":
      {
        let u = e.lang ?? "";
        if (!u && e.codeBlockStyle !== "indented") return e.text.replace(/\S(?:.*\S)?/g, lr("permission", themeName)) + m;
        let f = u.match(/^[\w.+#-]+/)?.[0] ?? "",
          language = highlight_2 && u && highlight_2.supportsLanguage(u) ? u : highlight_2 && f && highlight_2.supportsLanguage(f) ? f : "plaintext",
          T = u && !highlight_2?.supportsLanguage(u) ? Se.dim(u) + m : "";
        if (!highlight_2) return T + e.text + m;
        return T + highlight_2.highlight(e.text, {
          language: language,
          fence: e
        }) + m;
      }
    case "codespan":
      {
        let u = lr("permission", themeName)(e.text),
          f = promptMode || parent?.type === "link" || "defanged" in e && e.defanged === !0 || "afterStyle" in e && e.afterStyle === !0;
        if (linkCap_2 && !f && Ze.test(e.text) && URL.canParse(e.text)) return ES(e.text, u, {
          themeName: themeName,
          supportsHyperlinks: !0
        });
        return u;
      }
    case "em":
      return Se.italic((e.tokens ?? []).map(item => VN(item, themeName, {
        listDepth: 0,
        orderedListNumber: null,
        parent: parent,
        highlight: highlight_2,
        glueProse: glueProse,
        linkCap: linkCap_2,
        windowed: windowed,
        promptMode: promptMode
      })).join(""));
    case "strong":
      return Se.bold((e.tokens ?? []).map(item => VN(item, themeName, {
        listDepth: 0,
        orderedListNumber: null,
        parent: parent,
        highlight: highlight_2,
        glueProse: glueProse,
        linkCap: linkCap_2,
        windowed: windowed,
        promptMode: promptMode
      })).join(""));
    case "del":
      {
        let u = (e.tokens ?? []).map(item => VN(item, themeName, {
          listDepth: 0,
          orderedListNumber: null,
          parent: parent,
          highlight: highlight_2,
          glueProse: glueProse,
          linkCap: linkCap_2,
          windowed: windowed,
          promptMode: promptMode
        })).join("");
        return i5n() && Se.level > 0 ? Se.strikethrough(u) : `~~${u}~~`;
      }
    case "heading":
      {
        let u = () => (e.tokens ?? []).map(item => VN(item, themeName, {
          listDepth: 0,
          orderedListNumber: null,
          parent: null,
          highlight: highlight_2,
          glueProse: !1,
          linkCap: linkCap_2,
          windowed: windowed,
          promptMode: promptMode
        })).join("");
        return (e.depth === 1 ? Se.bold.italic.underline : Se.bold)(Bmn(e.tokens, u)) + m + m;
      }
    case "hr":
      return "---" + m;
    case "image":
      {
        if (!e.text && !e.title) return De(e.href, z(e));
        let u = e.title ? ` "${e.title}"` : "",
          f = pe(e.href, z(e), u);
        return e.text ? `${e.text}${f}` : f.replace(" (", "(");
      }
    case "link":
      {
        let u = e.title ? ` ("${e.title}")` : "";
        if (/^mailto:/i.test(e.href)) {
          let I = e.href.replace(/^mailto:/i, ""),
            K = z(e);
          return (e.text && e.text !== v(I) ? `${e.text}${pe(I, K)}` : De(I, K)) + u;
        }
        let f = linkCap_2 ? Jt(e.href) : null,
          h = "defanged" in e && e.defanged === !0,
          supportsHyperlinks = f !== null && !h,
          shownUrlStart = z(e),
          g = supportsHyperlinks ? f : v(f ?? e.href),
          E = (e.tokens ?? []).map(item => VN(item, themeName, {
            listDepth: 0,
            orderedListNumber: null,
            parent: e,
            highlight: highlight_2,
            glueProse: !1,
            linkCap: linkCap_2,
            windowed: windowed,
            promptMode: promptMode
          })).join(""),
          L = Zn(E),
          w = aCo(e.href),
          R = Boolean(L && L !== e.href),
          _ = I => I.replace(regExp_3, "").startsWith(mp),
          M = _(L) || _(e.text ?? ""),
          x = L.includes(mp) || (e.text ?? "").includes(mp);
        if (w && R) {
          let I = Array.from(L).filter(item => {
              let Q = item.codePointAt(0) ?? 0;
              if (Q === 8205 || Q >= 65024 && Q <= 65039) return !0;
              return !AO(Q);
            }).join(""),
            K = M ? I : FFs(I);
          return ES(g, K, {
            themeName: themeName,
            supportsHyperlinks: supportsHyperlinks,
            shownUrlStart: shownUrlStart
          }) + (supportsHyperlinks && e.title ? fe(g) : "") + u;
        }
        let G = !R || e2o(g, L),
          N = supportsHyperlinks && G ? shownUrlStart : "",
          Z = N === "" ? E : v(L),
          U = R ? Z : supportsHyperlinks ? v(e.href) : g,
          C = ES(g, U, {
            themeName: themeName,
            supportsHyperlinks: supportsHyperlinks,
            shownUrlStart: shownUrlStart
          }),
          V = !w && x || Boolean(e.title);
        if (supportsHyperlinks && R && V) return N + C + fe(g) + u;
        return N + (w ? FFs(C) : C) + u;
      }
    case "list":
      return e.items.map((item, index) => VN(item, themeName, {
        listDepth: listDepth,
        orderedListNumber: e.ordered ? e.start + index : null,
        parent: e,
        highlight: highlight_2,
        glueProse: !1,
        linkCap: linkCap_2,
        windowed: windowed,
        screenReader: screenReader,
        listIndent: listIndent,
        promptMode: promptMode,
        quotesAround: quotesAround
      })).join("");
    case "list_item":
      {
        let f = (promptMode && o !== null ? /^ *(\d+[.)])/.exec(e.raw)?.[1] : void 0) ?? pHo(listDepth, o !== null && parent?.type === "list" ? {
            number: o,
            ...fHo(parent)
          } : null),
          h = listIndent + wa(" ", ce(f) + 1),
          listIndent_2 = wa(" ", Math.min(h.length, uHo)),
          parent_2 = e.tokens ? HWr(e) : e,
          g = parent_2.tokens ?? [],
          E = g.findIndex(item => item.type !== "space"),
          L = E === -1 ? [] : g.slice(E),
          w = L[0],
          R = w !== void 0 && (w.type === "code" || w.type === "blockquote" || w.type === "hr" || w.type === "table" || w.type === "list"),
          _ = !R,
          M = L.map(item => {
            let G = item.type === "blockquote" ? DGt(item, highlight_2) : void 0,
              N = VN(G ?? item, themeName, {
                listDepth: listDepth + 1,
                orderedListNumber: o,
                parent: parent_2,
                highlight: highlight_2,
                glueProse: !1,
                linkCap: linkCap_2,
                windowed: windowed,
                screenReader: screenReader,
                listIndent: listIndent_2,
                promptMode: promptMode,
                quotesAround: quotesAround
              });
            if (item.type === "code" && N === m) return "";
            if (item.type === "code" || item.type === "blockquote" || item.type === "hr" || item.type === "table" || item.type === "list" || item.type === "space") return item.type === "blockquote" && G === void 0 || item.type === "hr" || item.type === "table" ? N.replace(/^\n+/, "") : N;
            let Z = _ ? `${listIndent}${f} ` : h;
            _ = !1;
            let U = N.split(m).map((item, index) => index === 0 ? Z + item : item === "" ? item : h + item).join(m);
            return item.type === "html" && !U.endsWith(m) ? U + m : U;
          }).join("");
        return _ || R ? `${listIndent}${f}${m}${M}` : M;
      }
    case "paragraph":
      return Bmn(e.tokens, () => (e.tokens ?? []).map(item => VN(item, themeName, {
        listDepth: 0,
        orderedListNumber: null,
        parent: null,
        highlight: highlight_2,
        glueProse: !1,
        linkCap: linkCap_2,
        windowed: windowed,
        promptMode: promptMode
      })).join("")) + m;
    case "space":
      return m;
    case "br":
      return m;
    case "text":
      {
        if (parent?.type === "link") return e.text;
        let u = !promptMode && e.escaped === !1 ? e.text.replace(Xt, " ") : e.text;
        if (parent?.type === "list_item") {
          let h = e.tokens ? Bmn(e.tokens, () => (e.tokens ?? []).map(item => VN(item, themeName, {
              listDepth: listDepth,
              orderedListNumber: o,
              parent: e,
              highlight: highlight_2,
              glueProse: !0,
              linkCap: linkCap_2,
              windowed: windowed,
              promptMode: promptMode
            })).join("")) : Ue(ve(u, themeName, linkCap_2, parent, promptMode)),
            T = parent.tokens?.[0] === e;
          return `${parent.task && T ? `[${parent.checked ? "x" : " "}] ` : ""}${h}${m}`;
        }
        let f = ve(u, themeName, linkCap_2, parent, promptMode);
        return glueProse ? Ue(f) : f;
      }
    case "table":
      {
        let f = function (g) {
            return Bmn(g, () => g?.map(E => VN(E, themeName, {
              listDepth: 0,
              orderedListNumber: null,
              parent: null,
              highlight: highlight_2,
              glueProse: !1,
              linkCap: linkCap_2,
              windowed: windowed,
              promptMode: promptMode
            })).join("") ?? "");
          },
          h = function (g) {
            return Zn(f(g));
          },
          u = e;
        if (screenReader) return mHo(u.header.map(item => h(item.tokens)), u.rows.map(item => item.map(item => h(item.tokens)))) + m + m;
        let T = u.header.map((item, index) => {
            let L = ce(h(item.tokens));
            for (let w of u.rows) {
              let R = ce(h(w[index]?.tokens));
              L = Math.max(L, R);
            }
            return Math.max(L, 3);
          }),
          k = "| ";
        return u.header.forEach((item, index) => {
          let L = f(item.tokens),
            w = h(item.tokens),
            R = T[index],
            _ = u.align?.[index];
          k += $Wr(L, ce(w), R, _) + " | ";
        }), k = k.trimEnd() + m, k += "|", T.forEach(item => {
          let E = "-".repeat(item + 2);
          k += E + "|";
        }), k += m, u.rows.forEach(item => {
          k += "| ", item.forEach((item, index) => {
            let w = f(item.tokens),
              R = h(item.tokens),
              _ = T[index],
              M = u.align?.[index];
            k += $Wr(w, ce(R), _, M) + " | ";
          }), k = k.trimEnd() + m;
        }), k + m;
      }
    case "escape":
      return e.text;
    case "html":
      return e.text;
    case "def":
      return "";
  }
  return e.raw;
}
var Zt = /(^|[^\w./-])([A-Za-z0-9][\w-]*\/[A-Za-z0-9][\w.-]*)#(\d+)\b/g,
  Vt = new Set(["gitlab.com", "bitbucket.org", "codeberg.org", "gitea.com", "git.sr.ht", "dev.azure.com"]),
  ze = /^[a-z][a-z0-9+.-]*:/i,
  Ze = /^https?:\/\/[\w\-.~:/?#[\]@!$&'()*+,;=%]+$/i;
function Yt(e, t) {
  let n = ze.exec(e)?.[0];
  if (n !== void 0) return !t.has(n.slice(0, -1).toLowerCase());
  let r = e.split(/[/?#]/, 1)[0] ?? "";
  return !/^[A-Za-z0-9._~-]*$/.test(r);
}
function a5n(e, t) {
  for (let n of e) {
    if (n.type === "codespan" || n.type === "link" && Yt(n.href, t)) Object.assign(n, {
      defanged: !0
    });
    if (n.type === "table") {
      let r = n;
      for (let o of [...r.header, ...r.rows.flat()]) a5n(o.tokens, t);
    } else if (n.type === "list") for (let r of n.items) a5n(r.tokens, t);else if ("tokens" in n && Array.isArray(n.tokens)) a5n(n.tokens, t);
  }
}
function Jt(e) {
  let t = Zmr(e);
  if (t === null || L5.test(t) || regExp_3.test(t) || t !== t.trimEnd()) return null;
  if (ze.test(t)) return t;
  let n = SCs(t),
    r = n.some(item => /^file:/i.test(_Cs(item)));
  return i_o(t, n) || r ? null : t;
}
function en(e) {
  if (!e.includes("`") || !e.includes("|")) return e;
  let t = [],
    n = [];
  for (let c = 0; c < e.length;) {
    if (e[c] !== "`") {
      c++;
      continue;
    }
    let p = 0;
    while (e[c + p] === "`") p++;
    t.push(c), n.push(p), c += p;
  }
  let r = Array(t.length).fill(-1),
    o = new Map();
  for (let c = t.length - 1; c >= 0; c--) {
    let p = o.get(n[c]);
    if (p !== void 0) r[c] = p;
    o.set(n[c], c);
  }
  let s = "",
    l = 0,
    a = 0;
  while (l < e.length) {
    if (e[l] !== "`") {
      s += e[l++];
      continue;
    }
    let c = n[a],
      p = e.slice(l, l + c),
      d = r[a];
    if (d === -1) {
      s += p, l += c, a++;
      continue;
    }
    let b = t[d];
    s += p;
    let S = 0;
    for (let y = l + c; y < b; y++) {
      let u = e[y];
      if (u === "\\") {
        S++, s += u;
        continue;
      }
      if (u === "|") s += S % 2 === 0 ? "\\|" : "|";else s += u;
      S = 0;
    }
    s += p, l = b + c, a = d + 1;
  }
  return s;
}
function tn(e, t) {
  for (let n = 2; n < e.length; n++) {
    let r = nn(e[n]);
    for (let o = t; o < r.length; o++) if (r[o].trim()) return !0;
  }
  return !1;
}
function nn(e) {
  let n = e.replace(/\|/g, (r, o, s) => {
    let l = !1,
      a = o;
    while (--a >= 0 && s[a] === "\\") l = !l;
    return l ? "|" : " |";
  }).split(/ \|/);
  if (!n[0]?.trim()) n.shift();
  if (n.length > 0 && !n.at(-1)?.trim()) n.pop();
  return n;
}
function ve(e, t, n, r, o) {
  if (o) return e;
  return rn(sn(e, t, n), t, n, r);
}
function rn(e, t, n = TS(), r) {
  return e;
}
function sn(e, themeName_2, supportsHyperlinks_2 = TS()) {
  if (!supportsHyperlinks_2) return e;
  if (!e.includes("#")) return e;
  let r = Cxo(),
    o = r !== null && gN(r) === "gitlab";
  if (!o && r !== null && Vt.has(jSt(r))) return e;
  let s = r ?? jr,
    l = o ? "/-/issues/" : "/issues/";
  return e.replace(Zt, (a, c, p, d) => c + ES(`https://${s}/${p}${l}${d}`, `${p}#${d}`, {
    themeName: themeName_2,
    supportsHyperlinks: supportsHyperlinks_2
  }));
}
function on(e) {
  let t = "";
  while (e > 0) e--, t = String.fromCharCode(97 + e % 26) + t, e = Math.floor(e / 26);
  return t;
}
var ln = [[1000, "m"], [900, "cm"], [500, "d"], [400, "cd"], [100, "c"], [90, "xc"], [50, "l"], [40, "xl"], [10, "x"], [9, "ix"], [5, "v"], [4, "iv"], [1, "i"]];
function an(e) {
  let t = "";
  for (let [n, r] of ln) while (e >= n) t += r, e -= n;
  return t;
}
function Ue(e) {
  return e.replace(/ (\d{1,9}[.)])(?!\w)/g, "\xA0$1");
}
function fHo(e) {
  let first = e.start === "" ? 1 : e.start;
  return {
    first: first,
    last: first + e.items.length - 1
  };
}
function HWr(e) {
  let tokens_2 = e.tokens.map(item => {
    if (item.type !== "list" || !item.ordered) return item;
    let r = [];
    for (let s of item.items) {
      let l = /^ *(\d{1,9}[.)])/.exec(s.raw)?.[1];
      if (s.tokens.length > 0 || l === void 0) return item;
      r.push(l);
    }
    let o = r.join(`
`);
    return {
      type: "text",
      raw: o,
      text: o
    };
  });
  return tokens_2.every((item, index) => item === e.tokens[index]) ? e : {
    ...e,
    tokens: tokens_2
  };
}
function Ve(e, t) {
  switch (e.type) {
    case "space":
      return !0;
    case "code":
      return e.text === "" && (!e.lang || t?.supportsLanguage(e.lang) === !0);
    case "heading":
      return e.text === "";
    case "blockquote":
      return (e.tokens ?? []).every(item => Ve(item, t));
    default:
      return !1;
  }
}
function DGt(e, t) {
  let n = e.tokens.findIndex(item => !Ve(item, t)),
    r = e.tokens[n],
    o = r?.type === "blockquote" ? DGt(r, t) : r?.type === "code" ? r : void 0;
  return o && {
    ...e,
    tokens: [o, ...e.tokens.slice(n + 1)]
  };
}
function pHo(e, t) {
  return t === null ? "-" : `${cn(e + 1, t)}.`;
}
function cn(e, {
  number: number,
  first: first_2,
  last: last
}) {
  switch (e) {
    case 2:
      return first_2 >= 1 ? on(number) : number.toString();
    case 3:
      return first_2 >= 1 && last <= 3999 ? an(number) : number.toString();
    default:
      return number.toString();
  }
}
function $Wr(e, t, n, r) {
  let o = Math.max(0, n - t);
  if (r === "center") {
    let s = Math.floor(o / 2);
    return " ".repeat(s) + e + wa(" ", o - s);
  }
  if (r === "right") return " ".repeat(o) + e;
  return e + " ".repeat(o);
}
function mHo(e, t) {
  function n(l) {
    return l.replace(/\s+/g, " ").trim();
  }
  function r(l) {
    return /[.!?\u2026]["')\]]*$/.test(l) ? l : `${l}.`;
  }
  function o(l) {
    return l.map((item, index) => {
      let p = n(e[index] ?? ""),
        d = n(item);
      if (!p && !d) return null;
      return r(p ? `${p}: ${d}` : d);
    }).filter(item => item !== null).join(" ");
  }
  return (t.length > 0 ? t.map(o) : [e.map(n).filter(Boolean).map(r).join(" ")]).filter(item => item.length > 0).join(m);
}
export { I8s, DWr, jvt, cHo, M8s, D8s, LWr, i5n, NWr, FWr, Bmn, MGt, L8s, jmn, uHo, Wmn, VN, a5n, fHo, HWr, DGt, pHo, $Wr, mHo };