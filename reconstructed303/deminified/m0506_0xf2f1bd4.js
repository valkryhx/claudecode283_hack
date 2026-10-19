// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { z } from "B:/~BUN/root/chunk-4bx17ygx.js";
import { a } from "B:/~BUN/root/chunk-yt0knyw7.js";
import { pn } from "B:/~BUN/root/chunk-6za2ez23.js";
import { ji, $t, Z2 } from "B:/~BUN/root/chunk-nggrknsv.js";
import { he } from "B:/~BUN/root/chunk-4qqgabd5.js";
import { WUe, RC, hfe, tg } from "B:/~BUN/root/chunk-dn8rakwm.js";
import { pw } from "B:/~BUN/root/chunk-d69870x4.js";
import { fu, x$o, P$o } from "B:/~BUN/root/chunk-8ye9n4fk.js";
import { Ev } from "B:/~BUN/root/chunk-sk7eej8z.js";
import { AFr, yA } from "B:/~BUN/root/chunk-qp0344nb.js";
import { FUr } from "B:/~BUN/root/chunk-m94tqsvv.js";
import { ur, wZe } from "B:/~BUN/root/chunk-fsp20me0.js";
import { tGe } from "B:/~BUN/root/chunk-pjgzz98k.js";
import { Hqn, Exo, fIr, Cxo } from "B:/~BUN/root/chunk-7abd7f1e.js";
import { T6 } from "B:/~BUN/root/chunk-9grc6xh0.js";
import { c$n } from "B:/~BUN/root/chunk-k382hx6g.js";
import { jw, N8r } from "B:/~BUN/root/chunk-tmxfgevx.js";
import { Kn } from "B:/~BUN/root/chunk-dsby0gnt.js";
import { iI } from "B:/~BUN/root/chunk-59tbtn9n.js";
import { ie } from "B:/~BUN/root/chunk-t7350kw8.js";
import { tc } from "B:/~BUN/root/chunk-eya7pdzx.js";
import { He } from "B:/~BUN/root/chunk-8znbjmp4.js";
var et = new Set(["iTerm.app", "vscode", "WezTerm", "WarpTerminal", "Hyper", "Tabby", "rio", "contour", "alacritty"]);
function OSn() {
  if (a.CLAUDE_CODE_FORCE_STRIKETHROUGH) return !0;
  let TERM = a.TERM;
  if (a.TERM_PROGRAM === "Apple_Terminal" || TERM === "linux") return !1;
  return et.has(a.TERM_PROGRAM ?? "") || pw.isGhostty() || pw.isMintty() || pw.isJetBrainsIdeTerminal() || a.LC_TERMINAL === "iTerm2" || !!TERM?.includes("kitty") || !!TERM?.includes("alacritty") || !!TERM?.startsWith("foot") || !!a.KITTY_WINDOW_ID || !!a.ALACRITTY_LOG || !!a.KONSOLE_VERSION || !!a.WT_SESSION || !!a.ZED_TERM || parseInt(a.VTE_VERSION ?? "", 10) >= 4400;
}
var A = 1000,
  de = 16000,
  me = 100,
  tt = 4000,
  Y = 100,
  Te = A * me,
  gfm = RC.rules.block.gfm,
  be = /\r\n?/g,
  nt = `x
`,
  rt = /^\n*/,
  st = /\n*$/,
  regExp = new RegExp(`^(?:[^\\n]+\\n){1,${Y}}? {0,3}(?:=+|-+) *(?:\\n|$)`),
  ye = /^(?:[^\n]+\n)+? {0,3}(?:=+|-+) *(?:\n|$)/;
function ot() {
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
var ee = ot();
function d5o(e, t) {
  let n = new RC(e.defaults);
  return t.includes("<") && n.lex(t), n.state.inLink || n.state.inRawBlock;
}
function vtr(e) {
  let t = e.replace(be, `
`);
  return re(N([], t, A)).length === t.length && !U(t.slice(gfm.fences.exec(t)?.[0].length));
}
function Ztt(e, t) {
  let isWindowed = !vtr(t);
  return {
    tokens: isWindowed ? ee.during(() => lt(e, t)) : e.lexer(t),
    isWindowed: isWindowed
  };
}
function it(e) {
  let t = "tokens" in e;
  return oe(e) ? e.items : q(e) ? [...e.header, ...e.rows.flat()].flatMap(item => item.tokens) : t ? e.tokens ?? [] : [];
}
function lt(e, t) {
  let n = [],
    r = N([], t.replace(be, `
`), A);
  while (r.rest !== "") {
    r = {
      declining: r.declining,
      ...at(e, r)
    };
    for (let s of r.taken) {
      let o = n.at(-1);
      o?.type === "space" && s.type === "space" ? o.raw += s.raw : n.push(s);
    }
  }
  return n;
}
function at(e, t) {
  let n = re(t),
    {
      header = "",
      fromRow = t.rest
    } = t.declining ?? {},
    o = n.length + fromRow.length <= t.rest.length && n.startsWith(header);
  return ct(e, n) ? K(t.rest) : o ? te(e, t.rest) : pt(e, t, n);
}
function ct(e, t) {
  let r = U(t) ? new RC(e.defaults).blockTokens(t) : [],
    s = !1;
  while (!s && r.length > 0) s = r.some(item => ut(item).some(U)), r = r.flatMap(it);
  return s;
}
function ut(e) {
  let t = (se(e) || e.type === "heading" || e.type === "text") && "text" in e && typeof e.text === "string";
  return q(e) ? [e.raw] : t ? [e.text] : [];
}
function pt(e, t, n) {
  let r = e.lexer(n),
    o = n.length === t.rest.length ? r.length : kt(r, n),
    i = xe(r, o, n);
  return i > 0 ? N(r.slice(0, o), t.rest.slice(i), A) : ft(e, t, r);
}
function ft(e, t, n) {
  let [r] = n,
    s = n.length === 1,
    o = s && se(r) && !Le(t.rest),
    i = s && q(r),
    l = we(r?.raw ?? ""),
    c = t.declining?.fromRow ?? t.rest,
    p = i && l.length + c.length <= t.rest.length && !ne(e, l + c.slice(0, M(c, 0, 1)));
  return o ? ke(e, t.rest) : p ? te(e, t.rest) : i ? mt(e, r, t.rest) : dt(t, n);
}
function dt(e, t) {
  let [n] = t,
    r = t.findLastIndex(Re) <= 0,
    s = r && t.some(Ie),
    o = e.lines < de && !(s && se(n)),
    i = r && oe(n),
    l = r && (n?.type === "code" || s && n?.type !== "html");
  return o ? N([], e.rest, de) : i ? gt(e, n) : l ? N(t, Et(e), e.lines) : K(e.rest);
}
function gt(e, t) {
  let n = t.items.slice(0, -1),
    r = W(n);
  return r !== "" && e.rest.startsWith(r) ? N([Rt(t, r, n)], e.rest.slice(r.length), e.lines) : K(e.rest);
}
function ke(e, t) {
  let n = ht(t),
    r = M(n.text, 0, tt) === n.text.length && !U(n.text);
  return N([{
    ...n,
    tokens: r ? new RC(e.defaults).inlineTokens(n.text) : [Se(n.text)]
  }], t.slice(n.raw.length), A);
}
var te = (e, t) => Le(t) ? K(t) : ke(e, t);
function Le(e) {
  return regExp.test(e) && gfm.lheading.test(e);
}
function ht(e) {
  let t = xt(),
    n = ge(e, "");
  while (n.nextLines !== "") t.text += t.raw === "" ? n.nextLines : `
${n.nextLines}`, t.raw += n.nextLines + n.lineBreak, n = ge(n.isOpen ? e.slice(t.raw.length) : "", nt);
  return t;
}
function ge(e, t) {
  let n = M(e, 0, A),
    r = e[n - 1] === `
` ? n - 1 : n,
    s = (gfm.paragraph.exec(t + e.slice(0, M(e, n, 1)))?.[0] ?? t).slice(t.length),
    nextLines = s.slice(0, r),
    isOpen = s.length > r,
    l = isOpen || gfm.newline.exec(e.slice(nextLines.length))?.[0] === `
`;
  return {
    nextLines: nextLines,
    lineBreak: l ? `
` : "",
    isOpen: isOpen
  };
}
function mt(e, t, n) {
  let r = we(t.raw),
    s = bt(r, n),
    o = Ee(n.slice(r.length, s), A),
    i = [],
    l = !1;
  while (!l && i.length < o.length) {
    let p = ne(e, r + (o[i.length] ?? ""));
    l = p === void 0, p && i.push(p);
  }
  let c = n.slice(0, s) + (rt.exec(n.slice(s))?.[0] ?? "");
  return l ? Tt(e, r, o.slice(0, i.length + 1), n) : N([St(t, c, i.flatMap(item => item.rows))], n.slice(c.length), A);
}
function Tt(e, header_2, n, r) {
  let s = te(e, r),
    o = header_2.length + n.join("").length,
    i = r.length - s.rest.length < o,
    l = i ? Ee(n.at(-1) ?? "", 1) : [],
    c = Math.floor(Te / header_2.length),
    p = l.slice(0, c).findIndex(item => !ne(e, header_2 + item)),
    d = p >= 0 ? p : c < l.length ? c : 0,
    fromRow_2 = r.slice(o - l.slice(d).join("").length);
  return {
    ...s,
    declining: i ? {
      header: header_2,
      fromRow: fromRow_2
    } : void 0
  };
}
function bt(e, t) {
  let n = e.length,
    r = n < t.length;
  while (r) {
    let s = t.slice(n, M(t, n, A)),
      o = yt(e, s);
    n += o, r = o === s.length && n < t.length;
  }
  return n;
}
function yt(e, t) {
  let n = (gfm.table.exec(e + t)?.[0] ?? e).slice(e.length),
    r = n.replace(st, "");
  return r !== "" && n.length > r.length ? r.length + 1 : r.length;
}
function ne(e, t) {
  let [n] = U(t) ? [] : e.lexer(t);
  return q(n) && n.raw.length === t.length ? n : void 0;
}
function Ee(e, t) {
  let n = [];
  for (let r = 0; r < e.length; r = M(e, r, t)) n.push(e.slice(r, M(e, r, t)));
  return n;
}
function kt(e, t) {
  let n = Lt(e),
    r = e.findLastIndex((i, l) => l < n && Ie(i)) + 1,
    s = n,
    o = 0;
  for (let i = e.length - 1; i >= r && o <= Y; i--) o += $t(e[i]?.raw ?? "", `
`), s = o <= Y ? Math.min(s, i) : s;
  return [r, s].find(item => xe(e, item, t) > 0) ?? 0;
}
function Lt(e) {
  let t = e.findLastIndex(r => r.raw.trim() !== "");
  return oe(e[t]) ? t : Math.max(e.findLastIndex(Re), 0);
}
var c5o = (e, t) => W(e) === t;
function u5o(e, t, n) {
  let r = W(e.slice(0, t)),
    s = W(e.slice(t)),
    o = n.endsWith(s);
  return n.startsWith(r) ? r.length : o ? n.length - s.length : 0;
}
function xe(e, t, n) {
  let r = W(e.slice(0, t)),
    s = W(e.slice(t)),
    o = r.length + s.length === n.length || n.startsWith(r),
    i = n.endsWith(s);
  return o ? r.length : i ? n.length - s.length : 0;
}
function M(e, t, n) {
  let r = t;
  for (let s = 0; s < n && r < e.length && r - t < n * me; s++) {
    let o = e.indexOf(`
`, r);
    r = o === -1 ? e.length : o + 1;
  }
  return r;
}
function U(e) {
  let t = 0,
    n = !1;
  while (!n && t < e.length) {
    let r = e.indexOf(`
`, t),
      s = r === -1 ? e.length : r;
    n = s - t > Te, t = s + 1;
  }
  return n;
}
function re({
  rest: rest,
  lines: lines
}) {
  return rest.slice(0, M(rest, gfm.fences.exec(rest)?.[0].length ?? 0, lines));
}
function Et(e) {
  return e.rest.slice(re(e).length);
}
function we(e) {
  return e.slice(0, e.indexOf(`
`, e.indexOf(`
`) + 1) + 1);
}
function N(taken, rest_2, lines_2) {
  return {
    taken: taken,
    rest: rest_2,
    lines: lines_2
  };
}
function K(e) {
  return N([wt(e)], "", A);
}
function xt() {
  return {
    type: "paragraph",
    raw: "",
    text: "",
    tokens: []
  };
}
function wt(e) {
  return {
    type: "paragraph",
    raw: e,
    text: e,
    tokens: [Se(e)]
  };
}
function Se(e) {
  return {
    type: "text",
    raw: e,
    text: e,
    escaped: !1
  };
}
function St(e, raw, rows) {
  return {
    ...e,
    raw: raw,
    rows: rows
  };
}
function Rt(e, raw_2, items) {
  return {
    ...e,
    raw: raw_2,
    items: items
  };
}
function Re(e) {
  return e.type !== "space";
}
function Ie(e) {
  return e.type === "space" || e.raw.endsWith(`

`);
}
function se(e) {
  return e?.type === "paragraph";
}
function oe(e) {
  return e?.type === "list";
}
function q(e) {
  return e?.type === "table";
}
function W(e) {
  return e.map(item => item.raw).join("");
}
var It = /^[ \t>]+/gm,
  _t = /[ \t]+/g,
  At = /\n{3,}/g;
function Nt() {
  let weakMap = new WeakMap(),
    isAtMaxNesting = n => (weakMap.get(n) ?? 0) >= 100;
  return {
    isAtMaxNesting: isAtMaxNesting,
    lexLevel: (n, r) => {
      if (isAtMaxNesting(n)) return;
      let o = weakMap.get(n) ?? 0;
      weakMap.set(n, o + 1);
      try {
        return r();
      } finally {
        weakMap.set(n, o);
      }
    }
  };
}
var v = Nt(),
  _e = e => e.replace(It, t => t.replace(_t, " ").trimStart()).replace(At, `

`).trimEnd();
var Ot = 6,
  Ct = 16,
  H = `
`,
  le = rows_2 => ({
    rows: rows_2,
    isDone: !1
  }),
  Oe = e => e === "" || e.endsWith(H) ? e : e + H,
  Ae = e => e === "" ? [] : [le(e)],
  Ce = e => pn(e).trim() !== "";
function Mt(e) {
  let t = he.dim(P$o);
  return le(e.split(H).map(item => Ce(item) ? `${t} ${he.italic(item)}` : item).join(H));
}
function Ne(e) {
  let t = `${P$o} `.repeat(Math.max(0, e)).trimEnd();
  return t === "" ? "" : `${he.dim(t)} `;
}
function Pt(e, t, n) {
  let r = Math.min(t + 1, Ct) - n.around,
    s = n.around === 0,
    o = Ne(s ? 1 : r),
    i = Ne(s ? r - 1 : 0),
    l = s ? he.italic : c => c;
  return {
    rows: Oe(e).split(H).map(item => Ce(item) ? o + l(i + item) : item).join(H),
    isDone: !0
  };
}
function Dt(e) {
  let t = [],
    n = "";
  for (let r of e) if (r.isDone) t.push(...Ae(Oe(n)), r), n = "";else n += r.rows;
  return [...t, ...Ae(n)];
}
function Me(e, t, n) {
  let s = t < Ot ? Mt : o => Pt(o, t, n);
  return Dt(e.flatMap(item => item.type === "blockquote" ? Me(item.tokens ?? [], t + 1, n) : [le(n.draw(item, t + 1))])).map(item => item.isDone ? item : s(item.rows));
}
var Pe = (e, around, draw) => Me(e, around, {
  around: around,
  draw: draw
}).map(item => item.rows).join("");
var ae = /[\x00-\x08\x0b-\x1f\x7f-\x9f]/,
  regExp_2 = new RegExp(`(?!${tGe(";:")})${ae.source}`, "g"),
  ktr = e => e.replace(/\r\n?/g, `
`).replace(regExp_2, "");
function Etr(e) {
  let n = e.some(item => ae.test(item.raw)) ? [e] : [];
  for (let o of n) for (let [i, l] of Object.entries(o)) {
    let c = typeof l === "string" && i !== "href";
    if (typeof l === "object" && l !== null) n.push(l);else if (c) Reflect.set(o, i, ktr(l));
  }
  let r = n.some(item => Object.entries(item).some(([i, l]) => i !== "href" && typeof l === "string" && l.includes("\x1B"))),
    s = n.filter(item => "type" in item && (item.type === "link" || item.type === "image" || item.type === "codespan"));
  for (let o of r ? s : []) Object.assign(o, {
    afterStyle: !0
  });
  return e;
}
var m = `
`,
  regExp_3 = new RegExp(`^[${Hqn}]+`, "u"),
  regExp_4 = new RegExp(`(?:^|[^${Hqn}])([${Hqn}]*)$`, "u");
function ce(e) {
  let t = regExp_4.exec(e)?.[1]?.length ?? 0;
  return t === 0 ? e : e.slice(0, e.length - t);
}
var Ge = /\x1b\]8;[^;\x07\x1b]*;([^\x07\x1b]*)(?:\x07|\x1b\\)/g,
  Bt = /\x9d|\x1b(?!\[)/,
  jt = /\x9d/g,
  Ut = /\x1b(?!\[)/g,
  B = e => Array.from(e).filter(item => {
    let n = item.codePointAt(0) ?? 0;
    return n !== 10697 && !yA(n);
  }).join(""),
  Qe = "\x1B[28m\x1B[39m\x1B[49m",
  X = e => "afterStyle" in e && e.afterStyle === !0 ? Qe : "",
  De = (e, t) => `${t}${B(e)}`,
  pe = (e, t, n = "") => `${t} (${B(e)}${n})`,
  fe = e => pe(e, Qe);
function We(e) {
  if (!e.includes("\x1B]8;")) return e;
  let t = [],
    n = null;
  for (let l of e.matchAll(Ge)) {
    let c = l.index + l[0].length;
    if (n !== null) t.push({
      href: n.href,
      openEnd: n.openEnd,
      closeStart: l.index,
      closeEnd: c
    }), n = null;
    let href = l[1] ?? "";
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
    s = 0,
    o = 0,
    i = !1;
  for (let l of t) {
    let c = e.lastIndexOf("\x1B]8;", l.openEnd - 1),
      p = ce(pn(e.slice(0, c))),
      d = o;
    o = l.closeStart;
    let b = AFr(l.href),
      R = i;
    if (i = b, !b) {
      let f = pn(e.slice(d, c)),
        h = f.includes(fu),
        T = R && ce(f) === "";
      if (!h && !p.endsWith(fu) && !T) continue;
    } else if (!p.endsWith(fu)) continue;
    if (b) {
      let f = e.slice(l.openEnd, l.closeStart),
        h = pn(f).startsWith(`${fu} `) ? f.indexOf(`${fu} `) : -1;
      if (h !== -1) r += e.slice(s, l.openEnd), r += f.slice(0, h), r += f.slice(h + fu.length + 1), s = l.closeStart;else {
        let T = e.slice(s, c),
          k = `${fu} `;
        if (T.endsWith(k)) {
          let g = T.slice(0, -k.length);
          if (ce(pn(r + g)).endsWith(fu)) r += g, s = c;
        }
      }
      continue;
    }
    let y = fe(l.href),
      closeEnd = l.closeEnd;
    if (e.startsWith(y, closeEnd)) continue;
    r += e.slice(s, closeEnd) + y, s = closeEnd;
  }
  return r + e.slice(s);
}
function s2t(e, t) {
  let n = t();
  if (!n.includes("\x1B]8;")) return n;
  let r = We(n);
  if (!n.includes(fu) && r === n) return n;
  let s = Ke(e ?? []);
  if (s.length === 0) return r;
  try {
    for (let o of s) Object.assign(o, {
      defanged: !0
    });
    return We(t());
  } finally {
    for (let o of s) Reflect.deleteProperty(o, "defanged");
  }
}
function Ke(e) {
  return e.flatMap(item => {
    if (item.type === "codespan") return !("defanged" in item && item.defanged === !0) && Ve.test(item.text) ? [item] : [];
    return "tokens" in item && Array.isArray(item.tokens) ? Ke(item.tokens) : [];
  });
}
class qe {
  #e = !1;
  get configured() {
    return this.#e;
  }
  set() {
    this.#e = !0;
  }
  reset() {
    this.#e = !1, tg.setOptions(tg.getDefaults());
  }
}
var $e = He(new qe(), e => e.reset());
class Xe {
  #e = new tc({
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
var fr = new z(() => new Xe()),
  table = WUe.prototype.table,
  blockquote = WUe.prototype.blockquote,
  list = WUe.prototype.list,
  emStrong = WUe.prototype.emStrong,
  ze = {
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
        return this.rules.other.blockquoteStart.test(e) ? v.lexLevel(this.lexer, () => blockquote.call(this, e)) : void 0;
      },
      list(e) {
        return this.rules.block.list.test(e) ? v.lexLevel(this.lexer, () => list.call(this, e)) : void 0;
      },
      emStrong(e, t, n) {
        return this.rules.inline.emStrongLDelim.test(e) ? v.lexLevel(this.lexer, () => emStrong.call(this, e, t, n)) : void 0;
      },
      paragraph(e) {
        let t = je(this, e);
        return t ? {
          type: "paragraph",
          ...t
        } : !1;
      },
      text(e) {
        let t = je(this, e);
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
`).map(Yt),
          s = r.join(`
`),
          o = s === n ? table.call(this, e) : table.call(this, s + e.slice(n.length));
        if (o) {
          if (Jt(r, o.header.length)) return;
          if (s !== n) o.raw = n;
        }
        return o;
      }
    }
  };
function je(e, raw_3) {
  if (!v.isAtMaxNesting(e.lexer) || !(e.rules.block.list.test(raw_3) || e.rules.other.blockquoteStart.test(raw_3))) return;
  let text_2 = _e(raw_3);
  return {
    raw: raw_3,
    text: text_2,
    tokens: e.lexer.inline(text_2)
  };
}
function cvt() {
  if ($e.configured) return;
  $e.set(), tg.use(ze);
}
var p5o = new hfe(ze, {
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
function i2t(e, t, highlight = null) {
  cvt();
  let {
      tokens: tokens,
      isWindowed: s
    } = Ztt(tg, T6(e)),
    linkCap = !s && Ev();
  return Etr(tokens).map(item => EL(item, t, {
    listDepth: 0,
    orderedListNumber: null,
    parent: null,
    highlight: highlight,
    linkCap: linkCap,
    windowed: s
  })).join("").trim();
}
var Qt = /\s/,
  Kt = /&(?:nbsp|#0{0,4}160|#[xX]0{0,4}[aA]0);/g,
  Rqr = 32;
function ISn(e) {
  if (!e.endsWith(`
`)) return !1;
  for (let t = e.length - 2; t >= 0; t--) {
    let n = e[t];
    if (n === `
`) return !0;
    if (!Qt.test(n)) return !1;
  }
  return !1;
}
function EL(e, t, n) {
  let r = qt(e, t, n);
  return n.windowed && Bt.test(r) ? r.replace(Ge, "").replace(jt, "").replace(Ut, "") : r;
}
function qt(parent_2, themeName, n) {
  let {
      listDepth = 0,
      orderedListNumber: s = null,
      parent = null,
      highlight: highlight_2 = null,
      glueProse = !1,
      screenReader = !1,
      listIndent = "",
      promptMode = !1,
      windowed: windowed,
      quotesAround = 0
    } = n,
    linkCap_2 = !windowed && (n.linkCap ?? Ev());
  switch (parent_2.type) {
    case "blockquote":
      return Pe(parent_2.tokens ?? [], quotesAround, (u, quotesAround_2) => EL(u, themeName, {
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
        let u = parent_2.lang ?? "";
        if (!u && parent_2.codeBlockStyle !== "indented") return parent_2.text.replace(/\S(?:.*\S)?/g, Kn("permission", themeName)) + m;
        let f = u.match(/^[\w.+#-]+/)?.[0] ?? "",
          language = highlight_2 && u && highlight_2.supportsLanguage(u) ? u : highlight_2 && f && highlight_2.supportsLanguage(f) ? f : "plaintext",
          T = u && !highlight_2?.supportsLanguage(u) ? he.dim(u) + m : "";
        if (!highlight_2) return T + parent_2.text + m;
        return T + highlight_2.highlight(parent_2.text, {
          language: language
        }) + m;
      }
    case "codespan":
      {
        let u = Kn("permission", themeName)(parent_2.text),
          f = promptMode || parent?.type === "link" || "defanged" in parent_2 && parent_2.defanged === !0 || "afterStyle" in parent_2 && parent_2.afterStyle === !0;
        if (linkCap_2 && !f && Ve.test(parent_2.text) && URL.canParse(parent_2.text)) return jw(parent_2.text, u, {
          themeName: themeName,
          supportsHyperlinks: !0
        });
        return u;
      }
    case "em":
      return he.italic((parent_2.tokens ?? []).map(item => EL(item, themeName, {
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
      return he.bold((parent_2.tokens ?? []).map(item => EL(item, themeName, {
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
        let u = (parent_2.tokens ?? []).map(item => EL(item, themeName, {
          listDepth: 0,
          orderedListNumber: null,
          parent: parent,
          highlight: highlight_2,
          glueProse: glueProse,
          linkCap: linkCap_2,
          windowed: windowed,
          promptMode: promptMode
        })).join("");
        return OSn() && he.level > 0 ? he.strikethrough(u) : `~~${u}~~`;
      }
    case "heading":
      {
        let u = () => (parent_2.tokens ?? []).map(item => EL(item, themeName, {
          listDepth: 0,
          orderedListNumber: null,
          parent: null,
          highlight: highlight_2,
          glueProse: !1,
          linkCap: linkCap_2,
          windowed: windowed,
          promptMode: promptMode
        })).join("");
        return (parent_2.depth === 1 ? he.bold.italic.underline : he.bold)(s2t(parent_2.tokens, u)) + m + m;
      }
    case "hr":
      return "---" + m;
    case "image":
      {
        if (!parent_2.text && !parent_2.title) return De(parent_2.href, X(parent_2));
        let u = parent_2.title ? ` "${parent_2.title}"` : "",
          f = pe(parent_2.href, X(parent_2), u);
        return parent_2.text ? `${parent_2.text}${f}` : f.replace(" (", "(");
      }
    case "link":
      {
        let u = parent_2.title ? ` ("${parent_2.title}")` : "";
        if (/^mailto:/i.test(parent_2.href)) {
          let _ = parent_2.href.replace(/^mailto:/i, ""),
            G = X(parent_2);
          return (parent_2.text && parent_2.text !== B(_) ? `${parent_2.text}${pe(_, G)}` : De(_, G)) + u;
        }
        let f = linkCap_2 ? Vt(parent_2.href) : null,
          h = "defanged" in parent_2 && parent_2.defanged === !0,
          supportsHyperlinks = f !== null && !h,
          shownUrlStart = X(parent_2),
          g = supportsHyperlinks ? f : B(f ?? parent_2.href),
          L = (parent_2.tokens ?? []).map(item => EL(item, themeName, {
            listDepth: 0,
            orderedListNumber: null,
            parent: parent_2,
            highlight: highlight_2,
            glueProse: !1,
            linkCap: linkCap_2,
            windowed: windowed,
            promptMode: promptMode
          })).join(""),
          E = pn(L),
          w = AFr(parent_2.href),
          S = Boolean(E && E !== parent_2.href),
          I = _ => _.replace(regExp_3, "").startsWith(fu),
          P = I(E) || I(parent_2.text ?? ""),
          x = E.includes(fu) || (parent_2.text ?? "").includes(fu);
        if (w && S) {
          let _ = Array.from(E).filter(item => {
              let Q = item.codePointAt(0) ?? 0;
              if (Q === 8205 || Q >= 65024 && Q <= 65039) return !0;
              return !yA(Q);
            }).join(""),
            G = P ? _ : x$o(_);
          return jw(g, G, {
            themeName: themeName,
            supportsHyperlinks: supportsHyperlinks,
            shownUrlStart: shownUrlStart
          }) + (supportsHyperlinks && parent_2.title ? fe(g) : "") + u;
        }
        let F = !S || N8r(g, E),
          O = supportsHyperlinks && F ? shownUrlStart : "",
          Z = O === "" ? L : B(E),
          j = S ? Z : supportsHyperlinks ? B(parent_2.href) : g,
          C = jw(g, j, {
            themeName: themeName,
            supportsHyperlinks: supportsHyperlinks,
            shownUrlStart: shownUrlStart
          }),
          V = !w && x || Boolean(parent_2.title);
        if (supportsHyperlinks && S && V) return O + C + fe(g) + u;
        return O + (w ? x$o(C) : C) + u;
      }
    case "list":
      return parent_2.items.map((item, index) => EL(item, themeName, {
        listDepth: listDepth,
        orderedListNumber: parent_2.ordered ? parent_2.start + index : null,
        parent: parent_2,
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
        let f = (promptMode && s !== null ? /^ *(\d+[.)])/.exec(parent_2.raw)?.[1] : void 0) ?? xqr(listDepth, s !== null && parent?.type === "list" ? {
            number: s,
            ...Aqr(parent)
          } : null),
          h = listIndent + ji(" ", ie(f) + 1),
          listIndent_2 = ji(" ", Math.min(h.length, Rqr)),
          parent_3 = parent_2.tokens ? Ttr(parent_2) : parent_2,
          g = parent_3.tokens ?? [],
          L = g.findIndex(item => item.type !== "space"),
          E = L === -1 ? [] : g.slice(L),
          w = E[0],
          S = w !== void 0 && (w.type === "code" || w.type === "blockquote" || w.type === "hr" || w.type === "table" || w.type === "list"),
          I = !S,
          P = E.map(item => {
            let F = item.type === "blockquote" ? Ye(item) : void 0,
              O = EL(F ?? item, themeName, {
                listDepth: listDepth + 1,
                orderedListNumber: s,
                parent: parent_3,
                highlight: highlight_2,
                glueProse: !1,
                linkCap: linkCap_2,
                windowed: windowed,
                screenReader: screenReader,
                listIndent: listIndent_2,
                promptMode: promptMode,
                quotesAround: quotesAround
              });
            if (item.type === "code" && O === m) return "";
            if (item.type === "code" || item.type === "blockquote" || item.type === "hr" || item.type === "table" || item.type === "list" || item.type === "space") return item.type === "blockquote" && F === void 0 || item.type === "hr" || item.type === "table" ? O.replace(/^\n+/, "") : O;
            let Z = I ? `${listIndent}${f} ` : h;
            I = !1;
            let j = O.split(m).map((item, index) => index === 0 ? Z + item : item === "" ? item : h + item).join(m);
            return item.type === "html" && !j.endsWith(m) ? j + m : j;
          }).join("");
        return I || S ? `${listIndent}${f}${m}${P}` : P;
      }
    case "paragraph":
      return s2t(parent_2.tokens, () => (parent_2.tokens ?? []).map(item => EL(item, themeName, {
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
        if (parent?.type === "link") return parent_2.text;
        let u = !promptMode && parent_2.escaped === !1 ? parent_2.text.replace(Kt, " ") : parent_2.text;
        if (parent?.type === "list_item") {
          let h = parent_2.tokens ? s2t(parent_2.tokens, () => (parent_2.tokens ?? []).map(item => EL(item, themeName, {
              listDepth: listDepth,
              orderedListNumber: s,
              parent: parent_2,
              highlight: highlight_2,
              glueProse: !0,
              linkCap: linkCap_2,
              windowed: windowed,
              promptMode: promptMode
            })).join("")) : ve(Ue(u, themeName, linkCap_2, parent, promptMode)),
            T = parent.tokens?.[0] === parent_2;
          return `${parent.task && T ? `[${parent.checked ? "x" : " "}] ` : ""}${h}${m}`;
        }
        let f = Ue(u, themeName, linkCap_2, parent, promptMode);
        return glueProse ? ve(f) : f;
      }
    case "table":
      {
        let f = function (g) {
            return s2t(g, () => g?.map(L => EL(L, themeName, {
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
            return pn(f(g));
          },
          u = parent_2;
        if (screenReader) return Pqr(u.header.map(item => h(item.tokens)), u.rows.map(item => item.map(item => h(item.tokens)))) + m + m;
        let T = u.header.map((item, index) => {
            let E = ie(h(item.tokens));
            for (let w of u.rows) {
              let S = ie(h(w[index]?.tokens));
              E = Math.max(E, S);
            }
            return Math.max(E, 3);
          }),
          k = "| ";
        return u.header.forEach((item, index) => {
          let E = f(item.tokens),
            w = h(item.tokens),
            S = T[index],
            I = u.align?.[index];
          k += Ctr(E, ie(w), S, I) + " | ";
        }), k = k.trimEnd() + m, k += "|", T.forEach(item => {
          let L = "-".repeat(item + 2);
          k += L + "|";
        }), k += m, u.rows.forEach(item => {
          k += "| ", item.forEach((item, index) => {
            let w = f(item.tokens),
              S = h(item.tokens),
              I = T[index],
              P = u.align?.[index];
            k += Ctr(w, ie(S), I, P) + " | ";
          }), k = k.trimEnd() + m;
        }), k + m;
      }
    case "escape":
      return parent_2.text;
    case "html":
      return parent_2.text;
    case "def":
      return "";
  }
  return parent_2.raw;
}
var Xt = /(^|[^\w./-])([A-Za-z0-9][\w-]*\/[A-Za-z0-9][\w.-]*)#(\d+)\b/g,
  zt = new Set(["gitlab.com", "bitbucket.org", "codeberg.org", "gitea.com", "git.sr.ht", "dev.azure.com"]),
  Ze = /^[a-z][a-z0-9+.-]*:/i,
  Ve = /^https?:\/\/[\w\-.~:/?#[\]@!$&'()*+,;=%]+$/i;
function Zt(e, t) {
  let n = Ze.exec(e)?.[0];
  if (n !== void 0) return !t.has(n.slice(0, -1).toLowerCase());
  let r = e.split(/[/?#]/, 1)[0] ?? "";
  return !/^[A-Za-z0-9._~-]*$/.test(r);
}
function MSn(e, t) {
  for (let n of e) {
    if (n.type === "codespan" || n.type === "link" && Zt(n.href, t)) Object.assign(n, {
      defanged: !0
    });
    if (n.type === "table") {
      let r = n;
      for (let s of [...r.header, ...r.rows.flat()]) MSn(s.tokens, t);
    } else if (n.type === "list") for (let r of n.items) MSn(r.tokens, t);else if ("tokens" in n && Array.isArray(n.tokens)) MSn(n.tokens, t);
  }
}
function Vt(e) {
  let t = c$n(e);
  if (t === null || Z2.test(t) || regExp_3.test(t) || t !== t.trimEnd()) return null;
  if (Ze.test(t)) return t;
  let n = Cxo(t),
    r = n.some(item => /^file:/i.test(Exo(item)));
  return fIr(t, n) || r ? null : t;
}
function Yt(e) {
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
    s = new Map();
  for (let c = t.length - 1; c >= 0; c--) {
    let p = s.get(n[c]);
    if (p !== void 0) r[c] = p;
    s.set(n[c], c);
  }
  let o = "",
    i = 0,
    l = 0;
  while (i < e.length) {
    if (e[i] !== "`") {
      o += e[i++];
      continue;
    }
    let c = n[l],
      p = e.slice(i, i + c),
      d = r[l];
    if (d === -1) {
      o += p, i += c, l++;
      continue;
    }
    let b = t[d];
    o += p;
    let R = 0;
    for (let y = i + c; y < b; y++) {
      let u = e[y];
      if (u === "\\") {
        R++, o += u;
        continue;
      }
      if (u === "|") o += R % 2 === 0 ? "\\|" : "|";else o += u;
      R = 0;
    }
    o += p, i = b + c, l = d + 1;
  }
  return o;
}
function Jt(e, t) {
  for (let n = 2; n < e.length; n++) {
    let r = en(e[n]);
    for (let s = t; s < r.length; s++) if (r[s].trim()) return !0;
  }
  return !1;
}
function en(e) {
  let n = e.replace(/\|/g, (r, s, o) => {
    let i = !1,
      l = s;
    while (--l >= 0 && o[l] === "\\") i = !i;
    return i ? "|" : " |";
  }).split(/ \|/);
  if (!n[0]?.trim()) n.shift();
  if (n.length > 0 && !n.at(-1)?.trim()) n.pop();
  return n;
}
function Ue(e, t, n, r, s) {
  if (s) return e;
  return tn(nn(e, t, n), t, n, r);
}
function tn(e, t, n = Ev(), r) {
  return e;
}
function nn(e, themeName_2, supportsHyperlinks_2 = Ev()) {
  if (!supportsHyperlinks_2) return e;
  if (!e.includes("#")) return e;
  let r = FUr(),
    s = r !== null && iI(r) === "gitlab";
  if (!s && r !== null && zt.has(wZe(r))) return e;
  let o = r ?? ur,
    i = s ? "/-/issues/" : "/issues/";
  return e.replace(Xt, (l, c, p, d) => c + jw(`https://${o}/${p}${i}${d}`, `${p}#${d}`, {
    themeName: themeName_2,
    supportsHyperlinks: supportsHyperlinks_2
  }));
}
function rn(e) {
  let t = "";
  while (e > 0) e--, t = String.fromCharCode(97 + e % 26) + t, e = Math.floor(e / 26);
  return t;
}
var sn = [[1000, "m"], [900, "cm"], [500, "d"], [400, "cd"], [100, "c"], [90, "xc"], [50, "l"], [40, "xl"], [10, "x"], [9, "ix"], [5, "v"], [4, "iv"], [1, "i"]];
function on(e) {
  let t = "";
  for (let [n, r] of sn) while (e >= n) t += r, e -= n;
  return t;
}
function ve(e) {
  return e.replace(/ (\d{1,9}[.)])(?!\w)/g, "\xA0$1");
}
function Aqr(e) {
  let first = e.start === "" ? 1 : e.start;
  return {
    first: first,
    last: first + e.items.length - 1
  };
}
function Ttr(e) {
  let tokens_2 = e.tokens.map(item => {
    if (item.type !== "list" || !item.ordered) return item;
    let r = [];
    for (let o of item.items) {
      let i = /^ *(\d{1,9}[.)])/.exec(o.raw)?.[1];
      if (o.tokens.length > 0 || i === void 0) return item;
      r.push(i);
    }
    let s = r.join(`
`);
    return {
      type: "text",
      raw: s,
      text: s
    };
  });
  return tokens_2.every((item, index) => item === e.tokens[index]) ? e : {
    ...e,
    tokens: tokens_2
  };
}
function Ye(e) {
  let t = e.tokens.findIndex(item => item.type !== "space" && !(item.type === "code" && item.text === "" && !item.lang)),
    n = e.tokens[t],
    r = n?.type === "blockquote" ? Ye(n) : n?.type === "code" && n.text !== "" ? n : void 0;
  return r && {
    ...e,
    tokens: [r, ...e.tokens.slice(t + 1)]
  };
}
function xqr(e, t) {
  return t === null ? "-" : `${ln(e + 1, t)}.`;
}
function ln(e, {
  number: number,
  first: first_2,
  last: last
}) {
  switch (e) {
    case 2:
      return first_2 >= 1 ? rn(number) : number.toString();
    case 3:
      return first_2 >= 1 && last <= 3999 ? on(number) : number.toString();
    default:
      return number.toString();
  }
}
function Ctr(e, t, n, r) {
  let s = Math.max(0, n - t);
  if (r === "center") {
    let o = Math.floor(s / 2);
    return " ".repeat(o) + e + ji(" ", s - o);
  }
  if (r === "right") return " ".repeat(s) + e;
  return e + " ".repeat(s);
}
function Pqr(e, t) {
  function n(i) {
    return i.replace(/\s+/g, " ").trim();
  }
  function r(i) {
    return /[.!?\u2026]["')\]]*$/.test(i) ? i : `${i}.`;
  }
  function s(i) {
    return i.map((item, index) => {
      let p = n(e[index] ?? ""),
        d = n(item);
      if (!p && !d) return null;
      return r(p ? `${p}: ${d}` : d);
    }).filter(item => item !== null).join(" ");
  }
  return (t.length > 0 ? t.map(s) : [e.map(n).filter(Boolean).map(r).join(" ")]).filter(item => item.length > 0).join(m);
}
export { OSn, d5o, vtr, Ztt, c5o, u5o, ktr, Etr, s2t, cvt, p5o, i2t, Rqr, ISn, EL, MSn, Aqr, Ttr, xqr, Ctr, Pqr };