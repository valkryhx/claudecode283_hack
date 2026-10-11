// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { ak, Wwe } from "B:/~BUN/root/chunk-ppjk9zm2.js";
var depth = 4096,
  totalOpens = 200000,
  O = 50000000,
  X = 200000,
  F = 64,
  z = new Set(["area", "base", "br", "col", "embed", "hr", "img", "input", "link", "meta", "source", "track", "wbr"]),
  BOn = new Map([["script", ak.SCRIPT_DATA], ["style", ak.RAWTEXT], ["xmp", ak.RAWTEXT], ["iframe", ak.RAWTEXT], ["noembed", ak.RAWTEXT], ["noframes", ak.RAWTEXT], ["noscript", ak.RAWTEXT], ["title", ak.RCDATA], ["textarea", ak.RCDATA], ["plaintext", ak.PLAINTEXT]]),
  q = new Set(["foreignobject", "desc", "title"]),
  H = new Set(["mi", "mo", "mn", "ms", "mtext"]),
  K = new Set(["applet", "caption", "html", "table", "td", "th", "marquee", "object", "template", "svg", "math", "foreignobject", "desc", "title", "mi", "mo", "mn", "ms", "mtext", "annotation-xml"]),
  G = new Set(["address", "applet", "area", "article", "aside", "base", "basefont", "bgsound", "blockquote", "body", "br", "button", "caption", "center", "col", "colgroup", "dd", "details", "dir", "div", "dl", "dt", "embed", "fieldset", "figcaption", "figure", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "iframe", "img", "input", "keygen", "li", "link", "listing", "main", "marquee", "menu", "meta", "nav", "noembed", "noframes", "noscript", "object", "ol", "p", "param", "plaintext", "pre", "script", "search", "section", "select", "source", "style", "summary", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "title", "tr", "track", "ul", "wbr", "xmp", "foreignobject", "desc", "mi", "mo", "mn", "ms", "mtext", "annotation-xml"]),
  V = new Set(["b", "big", "blockquote", "body", "br", "center", "code", "dd", "div", "dl", "dt", "em", "embed", "font", "h1", "h2", "h3", "h4", "h5", "h6", "head", "hr", "i", "img", "li", "listing", "menu", "meta", "nobr", "ol", "p", "pre", "ruby", "s", "small", "span", "strong", "strike", "sub", "sup", "table", "tt", "u", "ul", "var"]),
  P = new Set(["a", "b", "big", "code", "em", "font", "i", "nobr", "s", "small", "strike", "strong", "tt", "u"]),
  U = 1024,
  Y = new Map([["li", new Set(["ul", "ol"])], ["p", new Set(["button"])]]),
  J = new Set(["body", "html"]),
  Q = new Set(["caption", "col", "colgroup", "frame", "frameset", "head", "tbody", "td", "tfoot", "th", "thead", "tr", "title"]);
function cgr(R) {
  return Z(R, {
    depth: depth,
    totalOpens: totalOpens
  }).exceeded;
}
function Z(R, f) {
  let n = [],
    g = [],
    b = [],
    o = [],
    m = 0,
    p = 0,
    maxDepth = 0,
    totalOpens_2 = 0,
    E = 0,
    T = 0,
    d = 0,
    A = 0,
    i = 0,
    maxFmtEstimate = 0,
    formSplices = 0,
    failClosed = !1,
    S = new Map(),
    exceeded = !1;
  function h() {
    exceeded = !0, x.pause();
  }
  let u = () => {};
  function I() {
    while (n.length > 0 && o.at(-1) === "f") {
      let t = n.pop();
      if (g.pop() === !0 && T > 0) {
        if (T--, o.at(-1) === "i") o.pop();
      }
      if (t === "svg" || t === "math") {
        if (E--, b.pop(), o.at(-1) === "f") o.pop();
      } else if (t === "select" && m > 0) m--;else if (t === "frameset" && p > 0) p--;
    }
  }
  function L(t) {
    if (t === void 0) return !1;
    return t.some(item => {
      let l = item !== null && typeof item === "object" ? item.name : void 0;
      if (typeof l !== "string") return !1;
      let a = l.toLowerCase();
      return a === "color" || a === "face" || a === "size";
    });
  }
  let W = {
    onStartTag(t) {
      if (exceeded) return;
      if (d += n.length + 1 + i, A++, f !== null && (d > O || A > X)) {
        h();
        return;
      }
      let tagName = t.tagName;
      if (o.at(-1) === "f" && V.has(tagName) && (tagName !== "font" || L(t.attrs))) I();
      let l = o.length === 0 || o.at(-1) === "i",
        a = l ? BOn.get(tagName) : void 0;
      if (a !== void 0 && (p > 0 || m > 0 && tagName !== "script")) {
        failClosed = !0, h();
        return;
      }
      if (a !== void 0) x.state = a, x.lastStartTagName = tagName;
      if (z.has(tagName) && l) return;
      if (totalOpens_2++, (tagName === "svg" || tagName === "math") && t.selfClosing) return;
      if (!(t.selfClosing && !l)) {
        if (P.has(tagName)) {
          if (S.set(tagName, (S.get(tagName) ?? 0) + 1), i++, i > maxFmtEstimate) maxFmtEstimate = i;
          if (f !== null && i > U) {
            h();
            return;
          }
        }
        if (n.push(tagName), n.length > maxDepth) maxDepth = n.length;
        let s = !1;
        if (tagName === "svg" || tagName === "math") E++, b.push(tagName), o.push("f");else if (tagName === "select") m++;else if (tagName === "frameset") p++;else if (o.at(-1) === "f") {
          let c = b.at(-1);
          if (c === "svg") s = q.has(tagName);else if (c === "math") s = H.has(tagName) || tagName === "annotation-xml" && t.attrs?.some(r => r.name.toLowerCase() === "encoding" && ["text/html", "application/xhtml+xml"].includes(r.value.toLowerCase())) === !0;
          if (s) T++, o.push("i");
        }
        g.push(s);
      }
      if (f !== null && (n.length > f.depth || totalOpens_2 > f.totalOpens)) h();
    },
    onEndTag(t) {
      if (exceeded) return;
      if (d += n.length + 1 + i, A++, f !== null && (d > O || A > X)) {
        h();
        return;
      }
      let tagName_2 = t.tagName;
      if (J.has(tagName_2)) return;
      if (m > 0 && tagName_2 !== "select" && tagName_2 !== "option" && tagName_2 !== "optgroup" && tagName_2 !== "template" && tagName_2 !== "script") return;
      if (o.at(-1) === "f" && (tagName_2 === "p" || tagName_2 === "br")) I();
      let l = G.has(tagName_2),
        a = Y.get(tagName_2),
        D = Q.has(tagName_2) ? Math.max(0, n.length - 1) : Math.max(0, n.length - F);
      for (let s = n.length - 1; s >= D; s--) {
        let c = n[s];
        if (c === tagName_2) {
          if (P.has(tagName_2)) {
            let r = S.get(tagName_2) ?? 0;
            if (r > 0) {
              if (S.set(tagName_2, r - 1), i > 0) i--;
            }
          }
          if (tagName_2 === "form") {
            n.splice(s, 1), g.splice(s, 1), formSplices++;
            return;
          }
          for (let r = n.length - 1; r >= s; r--) {
            let N = n[r];
            if (g[r] === !0 && T > 0) {
              if (T--, o.at(-1) === "i") o.pop();
            }
            if (N === "svg" || N === "math") {
              if (E > 0) E--;
              if (b.pop(), o.at(-1) === "f") o.pop();
            } else if (N === "select" && m > 0) m--;else if (N === "frameset" && p > 0) p--;
          }
          n.length = s, g.length = s;
          return;
        }
        if (K.has(c) || a?.has(c) === !0) return;
        if (!l && G.has(c)) return;
      }
    },
    onComment: u,
    onDoctype: u,
    onCharacter: u,
    onNullCharacter: u,
    onWhitespaceCharacter: u,
    onEof: u,
    onParseError: u
  };
  class y extends Wwe {
    _leaveAttrName() {
      let currentToken = this.currentToken;
      if (currentToken !== null && "attrs" in currentToken) d += currentToken.attrs.length * (1 + (this.currentAttr.name.length >> 6));
      if (f !== null && d > O) {
        h();
        return;
      }
      super._leaveAttrName();
    }
  }
  let x = new y({}, W);
  return x.write(R, !0), {
    exceeded: exceeded,
    maxDepth: maxDepth,
    totalOpens: totalOpens_2,
    maxFmtEstimate: maxFmtEstimate,
    formSplices: formSplices,
    failClosed: failClosed
  };
}
export { BOn, cgr };