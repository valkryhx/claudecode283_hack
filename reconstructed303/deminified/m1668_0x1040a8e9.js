// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { IR, uAt } from "B:/~BUN/root/chunk-2hjjs2xw.js";
var depth = 4096,
  totalOpens = 200000,
  w = 50000000,
  G = 200000,
  j = 64,
  H = new Set(["area", "base", "br", "col", "embed", "hr", "img", "input", "link", "meta", "source", "track", "wbr"]),
  Ofr = new Map([["script", IR.SCRIPT_DATA], ["style", IR.RAWTEXT], ["xmp", IR.RAWTEXT], ["iframe", IR.RAWTEXT], ["noembed", IR.RAWTEXT], ["noframes", IR.RAWTEXT], ["noscript", IR.RAWTEXT], ["title", IR.RCDATA], ["textarea", IR.RCDATA], ["plaintext", IR.PLAINTEXT]]),
  q = new Set(["foreignobject", "desc", "title"]),
  K = new Set(["mi", "mo", "mn", "ms", "mtext"]),
  V = new Set(["applet", "caption", "html", "table", "td", "th", "marquee", "object", "template", "svg", "math", "foreignobject", "desc", "title", "mi", "mo", "mn", "ms", "mtext", "annotation-xml"]),
  P = new Set(["address", "applet", "area", "article", "aside", "base", "basefont", "bgsound", "blockquote", "body", "br", "button", "caption", "center", "col", "colgroup", "dd", "details", "dir", "div", "dl", "dt", "embed", "fieldset", "figcaption", "figure", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "iframe", "img", "input", "keygen", "li", "link", "listing", "main", "marquee", "menu", "meta", "nav", "noembed", "noframes", "noscript", "object", "ol", "p", "param", "plaintext", "pre", "script", "search", "section", "select", "source", "style", "summary", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "title", "tr", "track", "ul", "wbr", "xmp", "foreignobject", "desc", "mi", "mo", "mn", "ms", "mtext", "annotation-xml"]),
  U = new Set(["b", "big", "blockquote", "body", "br", "center", "code", "dd", "div", "dl", "dt", "em", "embed", "font", "h1", "h2", "h3", "h4", "h5", "h6", "head", "hr", "i", "img", "li", "listing", "menu", "meta", "nobr", "ol", "p", "pre", "ruby", "s", "small", "span", "strong", "strike", "sub", "sup", "table", "tt", "u", "ul", "var"]),
  B = new Set(["a", "b", "big", "code", "em", "font", "i", "nobr", "s", "small", "strike", "strong", "tt", "u"]),
  Y = 1024,
  Z = new Map([["li", new Set(["ul", "ol"])], ["p", new Set(["button"])]]),
  J = new Set(["body", "html"]),
  Q = new Set(["caption", "col", "colgroup", "frame", "frameset", "head", "tbody", "td", "tfoot", "th", "thead", "tr", "title"]);
function Oso(s) {
  return ee(s, {
    depth: depth,
    totalOpens: totalOpens
  }).exceeded;
}
function Iso(s, a) {
  let t = 0,
    u = !1,
    tokenizer = new M(s, a, T => {
      if (t += T, t > w) return u = !0, tokenizer.pause(), !1;
      return !0;
    });
  return {
    tokenizer: tokenizer,
    overBudget: () => u
  };
}
function ee(s, a) {
  let t = [],
    u = [],
    c = [],
    T = [],
    r = [],
    p = 0,
    x = 0,
    maxDepth = 0,
    totalOpens_2 = 0,
    b = 0,
    _ = 0,
    h = 0,
    I = new Set(),
    O = 0,
    g = 0,
    maxFmtEstimate = 0,
    formSplices = 0,
    failClosed = !1,
    v = new Map(),
    exceeded = !1;
  function l() {
    exceeded = !0, N.pause();
  }
  let S = () => {};
  function X() {
    while (t.length > 0 && r.at(-1) === "f") {
      let o = t.pop();
      if (c.pop(), u.pop() === !0 && _ > 0) {
        if (_--, r.at(-1) === "i") r.pop();
      }
      if (o === "svg" || o === "math") {
        if (b--, T.pop(), r.at(-1) === "f") r.pop();
      } else if (o === "select" && p > 0) p--;else if (o === "frameset" && x > 0) x--;
    }
  }
  function L(o) {
    if (o === void 0) return !1;
    return o.some(item => {
      let i = item !== null && typeof item === "object" ? item.name : void 0;
      if (typeof i !== "string") return !1;
      let m = i.toLowerCase();
      return m === "color" || m === "face" || m === "size";
    });
  }
  let N = new M({}, {
    onStartTag(o) {
      if (exceeded) return;
      if (h += t.length + 1 + g, O++, a !== null && (h > w || O > G)) {
        l();
        return;
      }
      let tagName = o.tagName;
      if (r.at(-1) === "f" && U.has(tagName) && (tagName !== "font" || L(o.attrs))) X();
      let i = r.length === 0 || r.at(-1) === "i";
      if (i && (tagName === "html" || tagName === "body")) {
        let n = !(t.length <= 2 && t.every(item => item === "html" || item === "head"));
        for (let f of o.attrs ?? []) I.add((tagName === "html" ? "h:" : "b:") + f.name);
        if (n) {
          if (h += 8 * I.size, a !== null && h > w) l();
          return;
        }
      }
      if (b > 0 && (tagName === "mglyph" || tagName === "malignmark") || !i && p > 0 && (tagName === "script" || tagName === "textarea") || r.at(-1) === "f" && (tagName === "svg" || tagName === "math") && T.at(-1) !== tagName) {
        failClosed = !0, l();
        return;
      }
      let m = i ? Ofr.get(tagName) : void 0;
      if (m !== void 0 && (x > 0 || p > 0 && tagName !== "script")) {
        failClosed = !0, l();
        return;
      }
      if (m !== void 0) N.state = m, N.lastStartTagName = tagName;
      if (H.has(tagName) && i) return;
      if (totalOpens_2++, (tagName === "svg" || tagName === "math") && o.selfClosing) return;
      if (!(o.selfClosing && !i)) {
        if (B.has(tagName)) {
          if (v.set(tagName, (v.get(tagName) ?? 0) + 1), g++, g > maxFmtEstimate) maxFmtEstimate = g;
          if (a !== null && g > Y) {
            l();
            return;
          }
        }
        if (t.push(tagName), t.length > maxDepth) maxDepth = t.length;
        let n = !1,
          f = r.at(-1) === "f";
        if (tagName === "svg" || tagName === "math") b++, T.push(tagName), r.push("f");else if (tagName === "select") p++;else if (tagName === "frameset") x++;else if (f) {
          let d = T.at(-1);
          if (d === "svg") n = q.has(tagName);else if (d === "math") n = K.has(tagName) || tagName === "annotation-xml" && o.attrs?.some(E => E.name.toLowerCase() === "encoding" && ["text/html", "application/xhtml+xml"].includes(E.value.toLowerCase())) === !0;
          if (n) _++, r.push("i");
        }
        u.push(n), c.push(tagName === "svg" || tagName === "math" || f && !n);
      }
      if (a !== null && (t.length > a.depth || totalOpens_2 > a.totalOpens)) l();
    },
    onEndTag(o) {
      if (exceeded) return;
      if (h += t.length + 1 + g, O++, a !== null && (h > w || O > G)) {
        l();
        return;
      }
      let tagName_2 = o.tagName;
      if (r.at(-1) === "i" && tagName_2 !== "p" && tagName_2 !== "br" && !(t.at(-1) === tagName_2 && u.at(-1) === !0)) {
        for (let n = t.length - 1; n >= 0; n--) if ((c[n] || u[n] === !0) && t[n] === tagName_2) {
          failClosed = !0, l();
          return;
        }
      }
      if (J.has(tagName_2)) {
        if (tagName_2 === "html" && b > 0) {
          for (let n = t.length - 1; n >= 0; n--) if (c[n] && t[n] === "html") {
            failClosed = !0, l();
            return;
          }
        }
        return;
      }
      if (p > 0 && r.at(-1) === "f" && (tagName_2 === "p" || tagName_2 === "br")) {
        failClosed = !0, l();
        return;
      }
      if (p > 0 && !(t.at(-1) === tagName_2 && (c.at(-1) === !0 || u.at(-1) === !0)) && tagName_2 !== "select" && tagName_2 !== "option" && tagName_2 !== "optgroup" && tagName_2 !== "template" && tagName_2 !== "script") return;
      if (r.at(-1) === "f" && (tagName_2 === "p" || tagName_2 === "br")) X();
      let i = P.has(tagName_2),
        m = Z.get(tagName_2),
        z = Q.has(tagName_2) ? Math.max(0, t.length - 1) : Math.max(0, t.length - j);
      for (let n = t.length - 1; n >= z; n--) {
        let f = t[n];
        if (f === tagName_2) {
          if (B.has(tagName_2)) {
            let d = v.get(tagName_2) ?? 0;
            if (d > 0) {
              if (v.set(tagName_2, d - 1), g > 0) g--;
            }
          }
          if (tagName_2 === "form") {
            t.splice(n, 1), u.splice(n, 1), c.splice(n, 1), formSplices++;
            return;
          }
          for (let d = t.length - 1; d >= n; d--) {
            let E = t[d];
            if (u[d] === !0 && _ > 0) {
              if (_--, r.at(-1) === "i") r.pop();
            }
            if (E === "svg" || E === "math") {
              if (b > 0) b--;
              if (T.pop(), r.at(-1) === "f") r.pop();
            } else if (E === "select" && p > 0) p--;else if (E === "frameset" && x > 0) x--;
          }
          t.length = n, u.length = n, c.length = n;
          return;
        }
        if (V.has(f) || m?.has(f) === !0) return;
        if (!i && P.has(f)) return;
      }
    },
    onComment(o) {
      if (exceeded || b === 0 || !o.data.startsWith("[CDATA[") || o.data.endsWith("]]")) return;
      let e = N.preprocessor.offset + 1,
        i = s.indexOf("]]>", e),
        m = i === -1 ? s.slice(e) : s.slice(e, i);
      if (/<[a-zA-Z!/?]/.test(m)) failClosed = !0, l();
    },
    onDoctype: S,
    onCharacter: S,
    onNullCharacter: S,
    onWhitespaceCharacter: S,
    onEof: S,
    onParseError: S
  }, o => {
    if (h += o, a !== null && h > w) return l(), !1;
    return !0;
  });
  return N.write(s, !0), {
    exceeded: exceeded,
    maxDepth: maxDepth,
    totalOpens: totalOpens_2,
    maxFmtEstimate: maxFmtEstimate,
    formSplices: formSplices,
    failClosed: failClosed
  };
}
class M extends uAt {
  #e;
  constructor(s, a, t) {
    super(s, a);
    this.#e = t;
  }
  _leaveAttrName() {
    let currentToken = this.currentToken,
      a = currentToken !== null && "attrs" in currentToken ? currentToken.attrs.length * (1 + (this.currentAttr.name.length >> 6)) : 0;
    if (this.#e(a)) super._leaveAttrName();
  }
}
export { Ofr, Oso, Iso };