// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { Rt } from "B:/~BUN/root/chunk-54p0h65d.js";
import { a } from "B:/~BUN/root/chunk-nkmmqnq7.js";
import { q } from "B:/~BUN/root/chunk-4rk7cwxz.js";
import { Ys, tM } from "B:/~BUN/root/chunk-y04k89s2.js";
import { uv } from "B:/~BUN/root/chunk-0av24qsq.js";
import { pe } from "B:/~BUN/root/chunk-nf4z9ga7.js";
import { Eit, gee, wf } from "B:/~BUN/root/chunk-1mdeqc2r.js";
import { Md, u1r, JHo } from "B:/~BUN/root/chunk-ah3egpyh.js";
import { Ny } from "B:/~BUN/root/chunk-0rtwbec7.js";
import { d3n, qk } from "B:/~BUN/root/chunk-yehxgs7w.js";
import { wt } from "B:/~BUN/root/chunk-rwwxddqq.js";
import { LYn } from "B:/~BUN/root/chunk-fct6vke8.js";
import { ie } from "B:/~BUN/root/chunk-bpp59nyd.js";
import { Ho, s1t } from "B:/~BUN/root/chunk-y72v2pst.js";
import { Pin, qPr, qjn, YPr } from "B:/~BUN/root/chunk-9921expb.js";
import { X8 } from "B:/~BUN/root/chunk-3jyp964r.js";
import { Stn } from "B:/~BUN/root/chunk-y39emrp9.js";
import { q_ } from "B:/~BUN/root/chunk-y1h4hnnm.js";
import { Pn } from "B:/~BUN/root/chunk-106hagsg.js";
import { kC } from "B:/~BUN/root/chunk-mjdkd2h9.js";
import { pd } from "B:/~BUN/root/chunk-tndjj29v.js";
var V = new Set(["iTerm.app", "vscode", "WezTerm", "WarpTerminal", "Hyper", "Tabby", "rio", "contour", "alacritty"]);
function UGt() {
  if (a.CLAUDE_CODE_FORCE_STRIKETHROUGH) return !0;
  let TERM = a.TERM;
  if (a.TERM_PROGRAM === "Apple_Terminal" || TERM === "linux") return !1;
  return V.has(a.TERM_PROGRAM ?? "") || uv.isGhostty() || uv.isMintty() || uv.isJetBrainsIdeTerminal() || a.LC_TERMINAL === "iTerm2" || !!TERM?.includes("kitty") || !!TERM?.includes("alacritty") || !!TERM?.startsWith("foot") || !!a.KITTY_WINDOW_ID || !!a.ALACRITTY_LOG || !!a.KONSOLE_VERSION || !!a.WT_SESSION || !!a.ZED_TERM || parseInt(a.VTE_VERSION ?? "", 10) >= 4400;
}
var b = `
`,
  regExp = new RegExp(`^[${Pin}]+`, "u"),
  regExp_2 = new RegExp(`(?:^|[^${Pin}])([${Pin}]*)$`, "u");
function M(e) {
  let t = regExp_2.exec(e)?.[1]?.length ?? 0;
  return t === 0 ? e : e.slice(0, e.length - t);
}
var X = /\x1b\]8;[^;\x07\x1b]*;([^\x07\x1b]*)(?:\x07|\x1b\\)/g,
  N = e => Array.from(e).filter(item => {
    let n = item.codePointAt(0) ?? 0;
    return n !== 10697 && !qk(n);
  }).join("");
function qyt(e) {
  if (!e.includes("\x1B]8;")) return e;
  let t = [],
    n = null;
  for (let f of e.matchAll(X)) {
    let c = f.index + f[0].length;
    if (n !== null) t.push({
      href: n.href,
      openEnd: n.openEnd,
      closeStart: f.index,
      closeEnd: c
    }), n = null;
    let href = f[1] ?? "";
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
    l = 0,
    o = !1;
  for (let f of t) {
    let c = e.lastIndexOf("\x1B]8;", f.openEnd - 1),
      d = M(wt(e.slice(0, c))),
      m = l;
    l = f.closeStart;
    let k = d3n(f.href),
      i = o;
    if (o = k, !k) {
      let y = wt(e.slice(m, c)),
        h = y.includes(Md),
        g = i && M(y) === "";
      if (!h && !d.endsWith(Md) && !g) continue;
    } else if (!d.endsWith(Md)) continue;
    if (k) {
      let y = e.slice(f.openEnd, f.closeStart),
        h = wt(y).startsWith(`${Md} `) ? y.indexOf(`${Md} `) : -1;
      if (h !== -1) r += e.slice(s, f.openEnd), r += y.slice(0, h), r += y.slice(h + Md.length + 1), s = f.closeStart;else {
        let g = e.slice(s, c),
          T = `${Md} `;
        if (g.endsWith(T)) {
          let x = g.slice(0, -T.length);
          if (M(wt(r + x)).endsWith(Md)) r += x, s = c;
        }
      }
      continue;
    }
    let p = ` (${N(f.href)})`,
      closeEnd = f.closeEnd;
    if (e.startsWith(p, closeEnd)) continue;
    r += e.slice(s, closeEnd) + p, s = closeEnd;
  }
  return r + e.slice(s);
}
class W {
  #e = !1;
  get configured() {
    return this.#e;
  }
  set() {
    this.#e = !0;
  }
  reset() {
    this.#e = !1, wf.setOptions(wf.getDefaults());
  }
}
var H = Rt(new W(), e => e.reset());
class j {
  #e = new pd({
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
var Qe = new q(() => new j()),
  table = Eit.prototype.table,
  U = {
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
      def() {
        return;
      },
      table(e) {
        let t = this.rules.block.table.exec(e);
        if (!t) return;
        let n = t[0],
          r = n.split(`
`).map(ne),
          s = r.join(`
`),
          l = s === n ? table.call(this, e) : table.call(this, s + e.slice(n.length));
        if (l) {
          if (re(r, l.header.length)) return;
          if (s !== n) l.raw = n;
        }
        return l;
      }
    }
  };
function BJe() {
  if (H.configured) return;
  H.set(), wf.use(U);
}
var P8r = new gee(U, {
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
function Kyt(e, t, highlight = null) {
  return BJe(), wf.lexer(X8(e)).map(item => uP(item, t, {
    listDepth: 0,
    orderedListNumber: null,
    parent: null,
    highlight: highlight
  })).join("").trim();
}
var Y = /\s/,
  ger = 32;
function BGt(e) {
  if (!e.endsWith(`
`)) return !1;
  for (let t = e.length - 2; t >= 0; t--) {
    let n = e[t];
    if (n === `
`) return !0;
    if (!Y.test(n)) return !1;
  }
  return !1;
}
function uP(parent_2, themeName, n = {}) {
  let {
      listDepth = 0,
      orderedListNumber: s = null,
      parent = null,
      highlight: highlight_2 = null,
      glueProse = !1,
      screenReader = !1,
      listIndent = "",
      promptMode = !1
    } = n,
    linkCap = n.linkCap ?? Ny();
  switch (parent_2.type) {
    case "blockquote":
      {
        let i = (parent_2.tokens ?? []).map(item => uP(item, themeName, {
            listDepth: 0,
            orderedListNumber: null,
            parent: null,
            highlight: highlight_2,
            glueProse: !1,
            linkCap: linkCap,
            screenReader: screenReader,
            promptMode: promptMode
          })).join(""),
          p = pe.dim(JHo);
        return i.split(b).map(item => wt(item).trim() ? `${p} ${pe.italic(item)}` : item).join(b);
      }
    case "code":
      {
        let i = parent_2.lang ?? "";
        if (!i && parent_2.codeBlockStyle !== "indented") return parent_2.text.replace(/\S(?:.*\S)?/g, Pn("permission", themeName)) + b;
        let p = i.match(/^[\w.+#-]+/)?.[0] ?? "",
          language = highlight_2 && i && highlight_2.supportsLanguage(i) ? i : highlight_2 && p && highlight_2.supportsLanguage(p) ? p : "plaintext",
          y = i && !highlight_2?.supportsLanguage(i) ? pe.dim(i) + b : "";
        if (!highlight_2) return y + parent_2.text + b;
        return y + highlight_2.highlight(parent_2.text, {
          language: language
        }) + b;
      }
    case "codespan":
      return Pn("permission", themeName)(parent_2.text);
    case "em":
      return pe.italic((parent_2.tokens ?? []).map(item => uP(item, themeName, {
        listDepth: 0,
        orderedListNumber: null,
        parent: parent,
        highlight: highlight_2,
        glueProse: glueProse,
        linkCap: linkCap,
        promptMode: promptMode
      })).join(""));
    case "strong":
      return pe.bold((parent_2.tokens ?? []).map(item => uP(item, themeName, {
        listDepth: 0,
        orderedListNumber: null,
        parent: parent,
        highlight: highlight_2,
        glueProse: glueProse,
        linkCap: linkCap,
        promptMode: promptMode
      })).join(""));
    case "del":
      {
        let i = (parent_2.tokens ?? []).map(item => uP(item, themeName, {
          listDepth: 0,
          orderedListNumber: null,
          parent: parent,
          highlight: highlight_2,
          glueProse: glueProse,
          linkCap: linkCap,
          promptMode: promptMode
        })).join("");
        return UGt() && pe.level > 0 ? pe.strikethrough(i) : `~~${i}~~`;
      }
    case "heading":
      {
        let i = (parent_2.tokens ?? []).map(item => uP(item, themeName, {
          listDepth: 0,
          orderedListNumber: null,
          parent: null,
          highlight: highlight_2,
          glueProse: !1,
          linkCap: linkCap,
          promptMode: promptMode
        })).join("");
        return (parent_2.depth === 1 ? pe.bold.italic.underline : pe.bold)(qyt(i)) + b + b;
      }
    case "hr":
      return "---" + b;
    case "image":
      {
        if (!parent_2.text && !parent_2.title) return parent_2.href;
        let i = parent_2.text ? `${parent_2.text} ` : "",
          p = parent_2.title ? ` "${parent_2.title}"` : "";
        return `${i}(${parent_2.href}${p})`;
      }
    case "link":
      {
        let i = parent_2.title ? ` ("${parent_2.title}")` : "";
        if (parent_2.href.startsWith("mailto:")) {
          let S = parent_2.href.replace(/^mailto:/, "");
          return (parent_2.text && parent_2.text !== S ? `${parent_2.text} (${S})` : S) + i;
        }
        let p = linkCap ? te(parent_2.href) : parent_2.href,
          u = "defanged" in parent_2 && parent_2.defanged === !0,
          supportsHyperlinks = linkCap && p !== null && !u,
          h = u ? N(p ?? parent_2.href) : p ?? N(parent_2.href),
          g = (parent_2.tokens ?? []).map(item => uP(item, themeName, {
            listDepth: 0,
            orderedListNumber: null,
            parent: parent_2,
            highlight: highlight_2,
            glueProse: !1,
            linkCap: linkCap,
            promptMode: promptMode
          })).join(""),
          T = wt(g),
          x = d3n(parent_2.href),
          L = Boolean(T && T !== parent_2.href),
          I = S => S.replace(regExp, "").startsWith(Md),
          R = I(T) || I(parent_2.text ?? ""),
          w = T.includes(Md) || (parent_2.text ?? "").includes(Md);
        if (x && L) {
          let S = Array.from(T).filter(item => {
              let A = item.codePointAt(0) ?? 0;
              if (A === 8205 || A >= 65024 && A <= 65039) return !0;
              return !qk(A);
            }).join(""),
            P = R ? S : u1r(S);
          return q_(h, P, {
            themeName: themeName,
            supportsHyperlinks: supportsHyperlinks
          }) + i;
        }
        let E = L ? g : supportsHyperlinks ? parent_2.href : h,
          _ = q_(h, E, {
            themeName: themeName,
            supportsHyperlinks: supportsHyperlinks
          });
        if (!x && supportsHyperlinks && L && w) return `${_} (${N(parent_2.href)})${i}`;
        return (x ? u1r(_) : _) + i;
      }
    case "list":
      return parent_2.items.map((item, index) => uP(item, themeName, {
        listDepth: listDepth,
        orderedListNumber: parent_2.ordered ? parent_2.start + index : null,
        parent: parent_2,
        highlight: highlight_2,
        glueProse: !1,
        linkCap: linkCap,
        screenReader: screenReader,
        listIndent: listIndent,
        promptMode: promptMode
      })).join("");
    case "list_item":
      {
        let p = (promptMode && s !== null ? /^ *(\d+[.)])/.exec(parent_2.raw)?.[1] : void 0) ?? yer(listDepth, s !== null && parent?.type === "list" ? {
            number: s,
            ...her(parent)
          } : null),
          u = listIndent + Ys(" ", ie(p) + 1),
          listIndent_2 = Ys(" ", Math.min(u.length, ger)),
          parent_3 = parent_2.tokens ? cvn(parent_2) : parent_2,
          g = parent_3.tokens ?? [],
          T = g.findIndex(item => item.type !== "space"),
          x = T === -1 ? [] : g.slice(T),
          L = x[0],
          I = L !== void 0 && (L.type === "code" || L.type === "blockquote" || L.type === "hr" || L.type === "table" || L.type === "list"),
          R = !I,
          w = x.map(item => {
            let _ = item.type === "blockquote" ? z(item) : void 0,
              S = uP(_ ?? item, themeName, {
                listDepth: listDepth + 1,
                orderedListNumber: s,
                parent: parent_3,
                highlight: highlight_2,
                glueProse: !1,
                linkCap: linkCap,
                screenReader: screenReader,
                listIndent: listIndent_2,
                promptMode: promptMode
              });
            if (item.type === "code" && S === b) return "";
            if (item.type === "code" || item.type === "blockquote" || item.type === "hr" || item.type === "table" || item.type === "list" || item.type === "space") return item.type === "blockquote" && _ === void 0 || item.type === "hr" || item.type === "table" ? S.replace(/^\n+/, "") : S;
            let P = R ? `${listIndent}${p} ` : u;
            R = !1;
            let C = S.split(b).map((item, index) => index === 0 ? P + item : item === "" ? item : u + item).join(b);
            return item.type === "html" && !C.endsWith(b) ? C + b : C;
          }).join("");
        return R || I ? `${listIndent}${p}${b}${w}` : w;
      }
    case "paragraph":
      return qyt((parent_2.tokens ?? []).map(item => uP(item, themeName, {
        listDepth: 0,
        orderedListNumber: null,
        parent: null,
        highlight: highlight_2,
        glueProse: !1,
        linkCap: linkCap,
        promptMode: promptMode
      })).join("")) + b;
    case "space":
      return b;
    case "br":
      return b;
    case "text":
      {
        if (parent?.type === "link") return parent_2.text;
        if (parent?.type === "list_item") {
          let p = parent_2.tokens ? qyt(parent_2.tokens.map(item => uP(item, themeName, {
              listDepth: listDepth,
              orderedListNumber: s,
              parent: parent_2,
              highlight: highlight_2,
              glueProse: !0,
              linkCap: linkCap,
              promptMode: promptMode
            })).join("")) : D(F(parent_2.text, themeName, linkCap, parent, promptMode)),
            u = parent.tokens?.[0] === parent_2;
          return `${parent.task && u ? `[${parent.checked ? "x" : " "}] ` : ""}${p}${b}`;
        }
        let i = F(parent_2.text, themeName, linkCap, parent, promptMode);
        return glueProse ? D(i) : i;
      }
    case "table":
      {
        let p = function (g) {
            return qyt(g?.map(T => uP(T, themeName, {
              listDepth: 0,
              orderedListNumber: null,
              parent: null,
              highlight: highlight_2,
              glueProse: !1,
              linkCap: linkCap,
              promptMode: promptMode
            })).join("") ?? "");
          },
          u = function (g) {
            return wt(p(g));
          },
          i = parent_2;
        if (screenReader) return _er(i.header.map(item => u(item.tokens)), i.rows.map(item => item.map(item => u(item.tokens)))) + b + b;
        let y = i.header.map((item, index) => {
            let x = ie(u(item.tokens));
            for (let L of i.rows) {
              let I = ie(u(L[index]?.tokens));
              x = Math.max(x, I);
            }
            return Math.max(x, 3);
          }),
          h = "| ";
        return i.header.forEach((item, index) => {
          let x = p(item.tokens),
            L = u(item.tokens),
            I = y[index],
            R = i.align?.[index];
          h += dvn(x, ie(L), I, R) + " | ";
        }), h = h.trimEnd() + b, h += "|", y.forEach(item => {
          let T = "-".repeat(item + 2);
          h += T + "|";
        }), h += b, i.rows.forEach(item => {
          h += "| ", item.forEach((item, index) => {
            let L = p(item.tokens),
              I = u(item.tokens),
              R = y[index],
              w = i.align?.[index];
            h += dvn(L, ie(I), R, w) + " | ";
          }), h = h.trimEnd() + b;
        }), h + b;
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
var Q = /(^|[^\w./-])([A-Za-z0-9][\w-]*\/[A-Za-z0-9][\w.-]*)#(\d+)\b/g,
  J = new Set(["gitlab.com", "bitbucket.org", "codeberg.org", "gitea.com", "git.sr.ht", "dev.azure.com"]),
  G = /^[a-z][a-z0-9+.-]*:/i;
function ee(e, t) {
  let n = G.exec(e)?.[0];
  if (n !== void 0) return !t.has(n.slice(0, -1).toLowerCase());
  let r = e.split(/[/?#]/, 1)[0] ?? "";
  return !/^[A-Za-z0-9._~-]*$/.test(r);
}
function jGt(e, t) {
  for (let n of e) {
    if (n.type === "link" && ee(n.href, t)) n.defanged = !0;
    if (n.type === "table") {
      let r = n;
      for (let s of [...r.header, ...r.rows.flat()]) jGt(s.tokens, t);
    } else if (n.type === "list") for (let r of n.items) jGt(r.tokens, t);else if ("tokens" in n && Array.isArray(n.tokens)) jGt(n.tokens, t);
  }
}
function te(e) {
  let t = Stn(e);
  if (t === null || tM.test(t) || regExp.test(t) || t !== t.trimEnd()) return null;
  if (G.test(t)) return t;
  let n = YPr(t),
    r = n.some(item => /^file:/i.test(qPr(item)));
  return qjn(t, n) || r ? null : t;
}
function ne(e) {
  if (!e.includes("`") || !e.includes("|")) return e;
  let t = [],
    n = [];
  for (let c = 0; c < e.length;) {
    if (e[c] !== "`") {
      c++;
      continue;
    }
    let d = 0;
    while (e[c + d] === "`") d++;
    t.push(c), n.push(d), c += d;
  }
  let r = Array(t.length).fill(-1),
    s = new Map();
  for (let c = t.length - 1; c >= 0; c--) {
    let d = s.get(n[c]);
    if (d !== void 0) r[c] = d;
    s.set(n[c], c);
  }
  let l = "",
    o = 0,
    f = 0;
  while (o < e.length) {
    if (e[o] !== "`") {
      l += e[o++];
      continue;
    }
    let c = n[f],
      d = e.slice(o, o + c),
      m = r[f];
    if (m === -1) {
      l += d, o += c, f++;
      continue;
    }
    let k = t[m];
    l += d;
    let i = 0;
    for (let p = o + c; p < k; p++) {
      let u = e[p];
      if (u === "\\") {
        i++, l += u;
        continue;
      }
      if (u === "|") l += i % 2 === 0 ? "\\|" : "|";else l += u;
      i = 0;
    }
    l += d, o = k + c, f = m + 1;
  }
  return l;
}
function re(e, t) {
  for (let n = 2; n < e.length; n++) {
    let r = se(e[n]);
    for (let s = t; s < r.length; s++) if (r[s].trim()) return !0;
  }
  return !1;
}
function se(e) {
  let n = e.replace(/\|/g, (r, s, l) => {
    let o = !1,
      f = s;
    while (--f >= 0 && l[f] === "\\") o = !o;
    return o ? "|" : " |";
  }).split(/ \|/);
  if (!n[0]?.trim()) n.shift();
  if (n.length > 0 && !n.at(-1)?.trim()) n.pop();
  return n;
}
function F(e, t, n, r, s) {
  if (s) return e;
  return oe(le(e, t, n), t, n, r);
}
function oe(e, t, n = Ny(), r) {
  return e;
}
function le(e, themeName_2, supportsHyperlinks_2 = Ny()) {
  if (!supportsHyperlinks_2) return e;
  if (!e.includes("#")) return e;
  let r = LYn(),
    s = r !== null && kC(r) === "gitlab";
  if (!s && r !== null && J.has(s1t(r))) return e;
  let l = r ?? Ho,
    o = s ? "/-/issues/" : "/issues/";
  return e.replace(Q, (f, c, d, m) => c + q_(`https://${l}/${d}${o}${m}`, `${d}#${m}`, {
    themeName: themeName_2,
    supportsHyperlinks: supportsHyperlinks_2
  }));
}
function ae(e) {
  let t = "";
  while (e > 0) e--, t = String.fromCharCode(97 + e % 26) + t, e = Math.floor(e / 26);
  return t;
}
var ce = [[1000, "m"], [900, "cm"], [500, "d"], [400, "cd"], [100, "c"], [90, "xc"], [50, "l"], [40, "xl"], [10, "x"], [9, "ix"], [5, "v"], [4, "iv"], [1, "i"]];
function ue(e) {
  let t = "";
  for (let [n, r] of ce) while (e >= n) t += r, e -= n;
  return t;
}
function D(e) {
  return e.replace(/ (\d{1,9}[.)])(?!\w)/g, "\xA0$1");
}
function her(e) {
  let first = e.start === "" ? 1 : e.start;
  return {
    first: first,
    last: first + e.items.length - 1
  };
}
function cvn(e) {
  let tokens = e.tokens.map(item => {
    if (item.type !== "list" || !item.ordered) return item;
    let r = [];
    for (let l of item.items) {
      let o = /^ *(\d{1,9}[.)])/.exec(l.raw)?.[1];
      if (l.tokens.length > 0 || o === void 0) return item;
      r.push(o);
    }
    let s = r.join(`
`);
    return {
      type: "text",
      raw: s,
      text: s
    };
  });
  return tokens.every((item, index) => item === e.tokens[index]) ? e : {
    ...e,
    tokens: tokens
  };
}
function z(e) {
  let t = e.tokens.findIndex(item => item.type !== "space" && !(item.type === "code" && item.text === "" && !item.lang)),
    n = e.tokens[t],
    r = n?.type === "blockquote" ? z(n) : n?.type === "code" && n.text !== "" ? n : void 0;
  return r && {
    ...e,
    tokens: [r, ...e.tokens.slice(t + 1)]
  };
}
function yer(e, t) {
  return t === null ? "-" : `${fe(e + 1, t)}.`;
}
function fe(e, {
  number: number,
  first: first_2,
  last: last
}) {
  switch (e) {
    case 2:
      return first_2 >= 1 ? ae(number) : number.toString();
    case 3:
      return first_2 >= 1 && last <= 3999 ? ue(number) : number.toString();
    default:
      return number.toString();
  }
}
function dvn(e, t, n, r) {
  let s = Math.max(0, n - t);
  if (r === "center") {
    let l = Math.floor(s / 2);
    return " ".repeat(l) + e + Ys(" ", s - l);
  }
  if (r === "right") return " ".repeat(s) + e;
  return e + " ".repeat(s);
}
function _er(e, t) {
  function n(o) {
    return o.replace(/\s+/g, " ").trim();
  }
  function r(o) {
    return /[.!?\u2026]["')\]]*$/.test(o) ? o : `${o}.`;
  }
  function s(o) {
    return o.map((item, index) => {
      let d = n(e[index] ?? ""),
        m = n(item);
      if (!d && !m) return null;
      return r(d ? `${d}: ${m}` : m);
    }).filter(item => item !== null).join(" ");
  }
  return (t.length > 0 ? t.map(s) : [e.map(n).filter(Boolean).map(r).join(" ")]).filter(item => item.length > 0).join(b);
}
export { UGt, qyt, BJe, P8r, Kyt, ger, BGt, uP, jGt, her, cvn, yer, dvn, _er };