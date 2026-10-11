// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { jOn, wXt } from "B:/~BUN/root/chunk-ppjk9zm2.js";
import "B:/~BUN/root/chunk-bvn0mpsk.js";
import "B:/~BUN/root/chunk-ekrhn4q1.js";
import "B:/~BUN/root/chunk-4rk7cwxz.js";
import "B:/~BUN/root/chunk-dkxhwhft.js";
import "B:/~BUN/root/chunk-kks4mj3w.js";
import "B:/~BUN/root/chunk-bgthmgyc.js";
import "B:/~BUN/root/chunk-17wqwt36.js";
import "B:/~BUN/root/chunk-54p0h65d.js";
import "B:/~BUN/root/chunk-qe2zga5e.js";
import "B:/~BUN/root/chunk-4p6z9qq1.js";
import "B:/~BUN/root/chunk-0fnha6bz.js";
import { re } from "B:/~BUN/root/chunk-y04k89s2.js";
import "B:/~BUN/root/chunk-rwwxddqq.js";
import "B:/~BUN/root/chunk-9xz983aj.js";
import { Mct, aq, cq } from "B:/~BUN/root/chunk-0y3bphdf.js";
import { jwe, tgr, igr, SXt, agr, Att, lgr, OTt } from "B:/~BUN/root/chunk-txj2pkcj.js";
import { cgr } from "B:/~BUN/root/chunk-szk3adaa.js";
import { rGe } from "B:/~BUN/root/chunk-8yvrhmen.js";
import { eMe, IG, p_ } from "B:/~BUN/root/chunk-3gfdp1nf.js";
import { Kt } from "B:/~BUN/root/chunk-9fcn5kmc.js";
var regExp = new RegExp(`^${jwe}$`),
  W = "http://www.w3.org/2000/svg",
  _ = "http://www.w3.org/1998/Math/MathML",
  x = 512;
function Q(e) {
  let t = new Set(),
    h = s => {
      if ((s.tagName ?? "").toLowerCase() === "script") {
        if ((p_(s, "type") ?? "").trim().toLowerCase() !== "application/json" && p_(s, "src") === void 0) t.add(Kt(y(s)));
      }
      for (let i of s.childNodes ?? []) h(i);
      for (let i of s.content?.childNodes ?? []) h(i);
    };
  return h(IG(wXt(e))), t;
}
function y(e) {
  let t = "";
  for (let h of e.childNodes ?? []) if (h.nodeName === "#text") t += h.value ?? "";
  return t;
}
var N = 117;
function o(e, t) {
  let h = t.get(e);
  if (h !== void 0) return h;
  let s = `<${e.tagName ?? e.nodeName}`,
    i = !1;
  for (let f of e.attrs ?? []) {
    if (s.length > N) {
      i = !0;
      break;
    }
    s += ` ${re(f.name, 40).replace(/[<>"'=]/g, "")}="\u2026"`;
  }
  s += i ? " \u2026>" : ">";
  let r = cq(s),
    p = (r.length > 120 ? `${re(r, N)}\u2026` : r).replace(/\s+/g, " ");
  return t.set(e, p), p;
}
var T = new Set(["href", "xlink:href", "src", "action", "formaction", "poster", "cite"]),
  M = /(^|[\t\n\f\r ])opener([\t\n\f\r ]|$)/i,
  A = new Set(["iframe", "embed", "object", "base", "form", "link", "noscript", "frameset", "frame", "plaintext"]),
  H = new Set(["xmp", "noembed", "noframes", "plaintext", "noscript"]),
  V = new Set(["animate", "set", "animatetransform", "animatecolor"]),
  O = new Set(["a", "image"]),
  P = 200;
class E extends Array {
  static [Symbol.species] = Array;
  overflow = 0;
  push(...e) {
    for (let t of e) if (this.length < P) super.push(t);else this.overflow++;
    return this.length;
  }
}
function G(node, t, h, s) {
  let i = (node.tagName ?? "").toLowerCase(),
    r = node.namespaceURI === W,
    violations = t.violations;
  for (let n of node.attrs ?? []) {
    let l = n.name.toLowerCase();
    if (l.startsWith("on") && l.length > 2) {
      violations.push({
        rule: "event-handler-attribute",
        where: o(node, t.snippets),
        hint: `Remove the ${cq(re(n.name, 60))} attribute \u2014 inline event handlers are not allowed; interactivity comes only from the blessed scripts.`
      });
      continue;
    }
    if (l === "ping") {
      violations.push({
        rule: "ping-attribute",
        where: o(node, t.snippets),
        hint: "Remove the ping attribute \u2014 it is a scriptless beacon."
      });
      continue;
    }
    if (l === "referrerpolicy") {
      violations.push({
        rule: "referrerpolicy-attribute",
        where: o(node, t.snippets),
        hint: "Remove the referrerpolicy attribute \u2014 the page keeps its default referrer policy."
      });
      continue;
    }
    if (l === "rel" && M.test(n.value)) {
      violations.push({
        rule: "rel-opener-attribute",
        where: o(node, t.snippets),
        hint: 'Remove the opener token from rel \u2014 it hands the opened page a window.opener handle back to this one. rel="noopener noreferrer" is fine.'
      });
      continue;
    }
    if (l === "target") {
      if (!/^_(?:blank|self)$/i.test(n.value)) violations.push({
        rule: "target-attribute",
        where: o(node, t.snippets),
        hint: 'Only target="_blank" or target="_self" are allowed \u2014 other targets navigate outside this page.'
      });
      continue;
    }
    if (l === "data-anchor" && !tgr.test(n.value)) {
      violations.push({
        rule: "bad-anchor-value",
        where: o(node, t.snippets),
        hint: "data-anchor must be 1-120 chars of letters, digits, space, or . _ : / @ # ( ) + - (no markup or quote characters)."
      });
      continue;
    }
    if (l === "srcset") {
      for (let v of n.value.split(",")) {
        let w = v.trim().split(/\s+/)[0];
        if (w !== void 0 && w !== "" && !rGe(w)) violations.push({
          rule: "unsafe-url",
          where: o(node, t.snippets),
          hint: `srcset entry "${cq(re(w, 60))}" \u2014 only http(s), mailto, relative, or fragment URLs are allowed.`
        });
      }
      continue;
    }
    if (r && (l === "href" || l === "xlink:href")) {
      if (O.has(i)) {
        if (!rGe(n.value)) violations.push({
          rule: "unsafe-url",
          where: o(node, t.snippets),
          hint: "Only http(s), mailto, relative, or fragment URLs are allowed."
        });
      } else if (!aq(n.value).startsWith("#")) violations.push({
        rule: "svg-nonlocal-reference",
        where: o(node, t.snippets),
        hint: `<${cq(re(i, 60))}> may only reference fragments within the page (href="#\u2026").`
      });
      continue;
    }
    if (T.has(l) && !rGe(n.value)) violations.push({
      rule: "unsafe-url",
      where: o(node, t.snippets),
      hint: "Only http(s), mailto, relative, or fragment URLs are allowed."
    });
  }
  let value = p_(node, "data-ws-state");
  if (value !== void 0) t.banners.push({
    value: value,
    node: node
  });
  let f = p_(node, igr);
  if (f !== void 0) t.deliverableKinds.push(f);
  let g = !r && i === "script" && (p_(node, "type") ?? "").trim().toLowerCase() === "application/json" && p_(node, "src") === void 0 && p_(node, "id") === "ws-decisions";
  if (p_(node, "id") === "ws-decisions" && !g) t.wsIdMisuse.push(node), violations.push({
    rule: "island-id-misuse",
    where: o(node, t.snippets),
    hint: "Only the ws-decisions JSON script element may carry this id \u2014 the page script locates the island by it."
  });
  let d = s,
    c = p_(node, "data-decision-id");
  if (c !== void 0) if (d = c, !regExp.test(c)) violations.push({
    rule: "bad-decision-id",
    where: o(node, t.snippets),
    hint: "data-decision-id must match the slug grammar."
  });else {
    let n = t.items.get(c);
    if (n !== void 0) n.count++;else t.items.set(c, {
      state: p_(node, "data-decision-state") ?? "",
      resolvedChoice: p_(node, "data-resolved-choice"),
      resolvedCustom: p_(node, "data-resolved-custom"),
      leanChoice: p_(node, "data-lean-choice"),
      choices: [],
      count: 1
    });
  }
  let u = p_(node, "data-choice");
  if (u !== void 0) if (d === null) t.orphanChoices.push(node);else if (!regExp.test(u)) violations.push({
    rule: "bad-choice-token",
    where: o(node, t.snippets),
    hint: "data-choice must match the slug grammar."
  });else t.items.get(d)?.choices.push(u);
  if (i === "script") {
    if (r) return violations.push({
      rule: "svg-script",
      where: o(node, t.snippets),
      hint: "Remove it \u2014 scripts are not allowed inside SVG diagrams."
    }), d;
    if (p_(node, "src") !== void 0) {
      if (!(p_(node, "src") === Mct && (node.attrs ?? []).length === 1 && (node.childNodes ?? []).length === 0)) violations.push({
        rule: "script-src",
        where: o(node, t.snippets),
        hint: "External scripts are not allowed \u2014 the page must be self-contained."
      });
      return d;
    }
    if ((p_(node, "type") ?? "").trim().toLowerCase() === "application/json") {
      if (g) t.islands.push({
        text: y(node),
        node: node
      });else violations.push({
        rule: "unknown-data-island",
        where: o(node, t.snippets),
        hint: "Only the ws-decisions island may use a JSON script element \u2014 the session extracts the island mechanically, and a second JSON block could confuse that extraction."
      });
      return d;
    }
    let l = Kt(y(node));
    if (!h.has(l)) violations.push({
      rule: "script-not-blessed",
      where: o(node, t.snippets),
      hint: "Inline scripts must be byte-identical copies of the blessed template scripts. Re-copy the script from the template; never edit or add scripts."
    });
    return d;
  }
  if (i === "math" && node.namespaceURI === _) return violations.push({
    rule: "mathml-not-allowed",
    where: o(node, t.snippets),
    hint: "<math> is not allowed on a workshop page \u2014 MathML subtrees are serialization-hazard surfaces (mutation-XSS carriers); render formulas as text or SVG."
  }), d;
  if (r && i === "style") return violations.push({
    rule: "svg-style",
    where: o(node, t.snippets),
    hint: "Remove it \u2014 <style> inside SVG is a serialization-hazard surface (mutation-XSS carrier); use the page-level <style> block or SVG presentation attributes."
  }), d;
  if (r && H.has(i)) return violations.push({
    rule: "svg-rawtext-hazard",
    where: o(node, t.snippets),
    hint: `Remove it \u2014 <${i}> inside SVG is a serialization-hazard surface (mutation-XSS carrier); SVG diagrams need none of the rawtext-named elements.`
  }), d;
  if (r && (i === "iframe" || i === "embed" || i === "object")) return violations.push({
    rule: "refused-element",
    where: o(node, t.snippets),
    hint: `<${i}> is not allowed on a workshop page, inside or outside SVG.`
  }), d;
  if (!r && A.has(i)) return violations.push({
    rule: "refused-element",
    where: o(node, t.snippets),
    hint: i === "form" ? "Forms are not allowed (scriptless submission is an exfiltration channel). Inputs and buttons WITHOUT a form are fine for mock-ups." : i === "link" ? "Link elements are not allowed \u2014 inline styles in the <style> block instead." : i === "noscript" ? "noscript is not allowed \u2014 its contents bypass inspection (raw text to scripting-enabled parsers) yet render for JS-off viewers." : i === "frameset" || i === "frame" ? `<${i}> is not allowed \u2014 frameset documents replace the page with embedded documents.` : `<${i}> is not allowed on a workshop page.`
  }), d;
  if (!r && i === "meta" && p_(node, "http-equiv") !== void 0) return violations.push({
    rule: "meta-http-equiv",
    where: o(node, t.snippets),
    hint: "http-equiv metas (CSP/refresh) are not allowed; a charset meta is fine."
  }), d;
  if (!r && i === "meta" && ["referrer", "origin-trial"].includes((p_(node, "name") ?? "").trim().toLowerCase())) return violations.push({
    rule: "meta-behavior",
    where: o(node, t.snippets),
    hint: "referrer and origin-trial metas are not allowed; charset/viewport/description metas are fine."
  }), d;
  if (r && i === "foreignobject") return violations.push({
    rule: "svg-foreignobject",
    where: o(node, t.snippets),
    hint: "foreignObject embeds arbitrary HTML inside SVG \u2014 draw with native SVG shapes and <text> instead."
  }), d;
  if (r && V.has(i)) {
    let n = (p_(node, "attributename") ?? "").trim().toLowerCase();
    if (n.startsWith("on") || T.has(n) || n === "style" || n === "class" || n === "srcset" || n === "data-anchor" || n === "target" || n === "rel" || n === "ping" || n === "referrerpolicy") return violations.push({
      rule: "svg-smil-target",
      where: o(node, t.snippets),
      hint: "SMIL may only animate geometry and paint properties \u2014 never URL (href/src/srcset\u2026), navigation (target/rel/ping/referrerpolicy), script (on*), style/class, or workshop-surface attributes."
    }), d;
  }
  return d;
}
function b(e, t, h, s, i = !1, r = 0) {
  if (r > x) {
    if (!t.nestingTruncated) t.nestingTruncated = !0, t.violations.push({
      rule: "markup-nests-too-deeply",
      where: o(e, t.snippets),
      hint: `Markup nests deeper than ${x} elements \u2014 browsers flatten past this depth, so restructure the page with flatter markup.`
    });
    return;
  }
  let a = s;
  if (e.tagName !== void 0) {
    if (a = G(e, t, h, s), i && (p_(e, "id") === "ws-decisions" || p_(e, "data-decision-id") !== void 0 || p_(e, "data-choice") !== void 0)) t.violations.push({
      rule: "template-content-surface",
      where: o(e, t.snippets),
      hint: "Workshop surface (the island or decision markup) must not sit inside <template> content \u2014 the page script can never see it there."
    });
  }
  for (let p of e.childNodes ?? []) b(p, t, h, a, i, r + 1);
  for (let p of e.content?.childNodes ?? []) b(p, t, h, a, !0, r + 1);
}
function ee(e, t, h = "strict") {
  try {
    if (cgr(e)) return {
      ok: !1,
      violations: [{
        rule: "markup-nests-too-deeply",
        where: "(document)",
        hint: "The page has too many nested or unclosed elements to verify affordably \u2014 close open tags and restructure with flatter markup."
      }]
    };
    return z(e, t, h);
  } catch (error) {
    return {
      ok: !1,
      violations: [{
        rule: "verifier-error",
        where: "(document)",
        hint: `The verifier could not examine this page (${cq(error instanceof Error ? error.name : "error")}) \u2014 refusing rather than publishing unexamined markup; simplify the page structure.`
      }]
    };
  }
}
function z(e, t, h) {
  let s = C(e, t, h);
  if (!s.ok || !s.workshopSurface) return s;
  let i = R(e),
    r = C(i, t, "strict");
  if (!r.ok) return {
    ok: !1,
    violations: [{
      rule: "reparse-divergence",
      where: "(document)",
      hint: "The page verifies as written, but the parse\u2192serialize round trip every decision confirm republishes does not \u2014 restructure the markup flagged below so the serialized form stays within contract."
    }, ...r.violations.slice(0, 6)]
  };
  let a = R(i);
  if (a !== i) {
    let p = 0,
      f = Math.min(i.length, a.length);
    while (p < f && i[p] === a[p]) p++;
    let g = Math.max(0, p - 40),
      d = i.charCodeAt(g);
    if (d >= 56320 && d <= 57343) g++;
    let c = i.slice(g, p + 80),
      u = c.charCodeAt(c.length - 1);
    if (u >= 55296 && u <= 56319) c = c.slice(0, -1);
    return {
      ok: !1,
      violations: [{
        rule: "reparse-not-fixed-point",
        where: `(document, first divergence near "\u2026${cq(re(c, 117).replace(/\s+/g, " "))}\u2026")`,
        hint: "The page serializes to different bytes on a second parse\u2192serialize round, so each decision confirm would keep rewriting it \u2014 this indicates parser/serializer-divergent markup; simplify the construct at the quoted position."
      }]
    };
  }
  return s;
}
function R(e) {
  let t = IG(wXt(e));
  return k(t), jOn(t);
}
var j = new Set(["pre", "textarea", "listing"]);
function k(e) {
  if (j.has((e.tagName ?? "").toLowerCase()) && e.namespaceURI === eMe) {
    let t = e.childNodes?.[0];
    if (t !== void 0 && t.nodeName === "#text" && (t.value ?? "").startsWith(`
`)) t.value = `
${t.value}`;
  }
  for (let t of e.childNodes ?? []) k(t);
  for (let t of e.content?.childNodes ?? []) k(t);
}
function C(e, t, h) {
  let s = {
      violations: new E(),
      snippets: new WeakMap(),
      nestingTruncated: !1,
      islands: [],
      banners: [],
      deliverableKinds: [],
      wsIdMisuse: [],
      items: new Map(),
      orphanChoices: []
    },
    i = IG(wXt(e, {
      sourceCodeLocationInfo: !0
    }));
  b(i, s, t, null);
  let violations_2 = s.violations,
    decisionCount = 0,
    workshopState = "in-progress",
    f = Att(e, "ws-decisions").length,
    nestingTruncated = s.nestingTruncated;
  if (h === "probe" && !nestingTruncated && s.islands.length === 0 && s.wsIdMisuse.length === 0 && f === 0) return {
    ok: !0,
    workshopSurface: !1
  };
  for (let c of s.islands) {
    let u = c.node.sourceCodeLocation?.startTag;
    if (u === void 0 || u === null) {
      violations_2.push({
        rule: "island-noncanonical-spelling",
        where: o(c.node, s.snippets),
        hint: "The island element has no source location \u2014 refusing rather than skipping the canonical-spelling check."
      });
      continue;
    }
    let n = e.slice(u.startOffset, u.endOffset),
      l = Att(n, "ws-decisions");
    if (l.length !== 1 || l[0][1] !== n.length) violations_2.push({
      rule: "island-noncanonical-spelling",
      where: o(c.node, s.snippets),
      hint: `The ws-decisions island's open tag must END with the exact bytes ${agr} (double-quoted id attribute, last in the tag, as the template ships it; a page read back from the server may carry the server's own data-id after the id, nothing else) \u2014 the session's mechanical extraction scans for that sequence.`
    });
    let m = c.node.sourceCodeLocation?.endTag;
    if (m === void 0 || m === null) {
      violations_2.push({
        rule: "island-noncanonical-spelling",
        where: o(c.node, s.snippets),
        hint: "The island element has no close-tag source location \u2014 refusing rather than skipping the canonical-spelling check."
      });
      continue;
    }
    if (e.slice(m.startOffset, m.endOffset) !== "</script>") violations_2.push({
      rule: "island-noncanonical-spelling",
      where: o(c.node, s.snippets),
      hint: "The ws-decisions island's close tag must be exactly the lowercase </script> as the template ships it \u2014 case-variant or attribute-bearing closes split the island locators."
    });
  }
  let d = f;
  if (d !== s.islands.length) violations_2.push({
    rule: "island-sentinel-ambiguity",
    where: "(document)",
    hint: `The island open-tag ending ${agr} (counting the form a server read-back carries, with the server's data-id after the id) appears ${d} time(s) but ${s.islands.length} real island element(s) exist \u2014 the session's mechanical island extraction scans for exactly that sequence. Keep the island's id attribute LAST in its script tag (as the template ships it), and escape or rephrase any other text containing the sequence.`
  });
  for (let c of s.orphanChoices) violations_2.push({
    rule: "orphan-choice",
    where: o(c, s.snippets),
    hint: "data-choice elements must sit inside a data-decision-id item \u2014 a free-floating option row is a forged affordance."
  });
  if (s.islands.length > 1) violations_2.push({
    rule: "duplicate-island",
    where: o(s.islands[1].node, s.snippets),
    hint: "Exactly one ws-decisions island per page."
  });else if (s.islands.length === 0) {
    if (s.items.size > 0) violations_2.push({
      rule: "missing-island",
      where: "(document)",
      hint: "Decision items exist but there is no ws-decisions island \u2014 the session reads decisions ONLY from the island."
    });
  } else {
    let c = lgr(s.islands[0].text);
    if (c === null) violations_2.push({
      rule: "island-grammar",
      where: o(s.islands[0].node, s.snippets),
      hint: 'The ws-decisions island failed the entry grammar: one {"items":[\u2026]} object, each entry exactly {id, opts, state, choice, custom} with slug ids and opts, state open|resolved, and the resolution invariant (open: neither choice nor custom; resolved: exactly one). Re-emit the island from your decision blocks.'
    });else {
      let u = new Set(c.map(item => item.id));
      for (let n of c) {
        let l = s.items.get(n.id);
        if (l === void 0) {
          violations_2.push({
            rule: "island-markup-mismatch",
            where: `island entry "${n.id}"`,
            hint: "Every island entry needs exactly one matching data-decision-id element."
          });
          continue;
        }
        if (l.count !== 1) {
          violations_2.push({
            rule: "duplicate-decision-item",
            where: `data-decision-id "${n.id}"`,
            hint: "Each decision id may appear on exactly one element."
          });
          continue;
        }
        if (l.state !== n.state) violations_2.push({
          rule: "island-markup-mismatch",
          where: `decision "${n.id}"`,
          hint: `Island says state "${cq(n.state)}" but the markup says "${cq(re(l.state, 60))}" \u2014 flip them together.`
        });
        if (n.state === "open" && (l.resolvedChoice !== void 0 || l.resolvedCustom !== void 0)) violations_2.push({
          rule: "island-markup-mismatch",
          where: `decision "${n.id}"`,
          hint: "An open item must carry neither data-resolved-choice nor data-resolved-custom \u2014 remove the stray resolution attribute."
        });
        if (n.state === "resolved") {
          if ((l.resolvedChoice ?? null) !== n.choice) violations_2.push({
            rule: "island-markup-mismatch",
            where: `decision "${n.id}"`,
            hint: "data-resolved-choice must equal the island entry choice (and be absent for typed answers)."
          });
          if ((l.resolvedCustom ?? null) !== n.custom) violations_2.push({
            rule: "island-markup-mismatch",
            where: `decision "${n.id}"`,
            hint: "data-resolved-custom must equal the island entry custom, byte for byte (and be absent for option picks)."
          });
        }
        let m = [...l.choices].sort(),
          v = [...n.opts].sort();
        if (m.length !== v.length || m.some((item, index) => item !== v[index])) violations_2.push({
          rule: "island-markup-mismatch",
          where: `decision "${n.id}"`,
          hint: "The data-choice rows must match the island opts exactly, one row per opt."
        });
        if (l.leanChoice !== void 0 && !n.opts.includes(l.leanChoice)) violations_2.push({
          rule: "island-markup-mismatch",
          where: `decision "${n.id}"`,
          hint: "data-lean-choice must be one of the island entry opts."
        });
      }
      for (let n of s.items.keys()) if (!u.has(n)) violations_2.push({
        rule: "forged-decision-item",
        where: `data-decision-id "${n}"`,
        hint: "Every decision item must have a ws-decisions island entry \u2014 a call-item without one is a forged decision surface."
      });
      L(s, c, violations_2), decisionCount = c.length, workshopState = OTt(c);
    }
  }
  if (s.islands.length === 0) L(s, [], violations_2);
  if (violations_2.overflow > 0) violations_2[violations_2.length] = {
    rule: "violation-cap-reached",
    where: "(document)",
    hint: `${violations_2.overflow} more violations were found but not recorded \u2014 fix the violation classes listed above and re-publish.`
  };
  return violations_2.length === 0 ? {
    ok: !0,
    workshopSurface: !0,
    decisionCount: decisionCount,
    workshopState: workshopState,
    deliverables: SXt(s.deliverableKinds)
  } : {
    ok: !1,
    violations: violations_2
  };
}
var U = new Set(["in-progress", "ready", "started"]);
function L(e, t, h) {
  if (e.banners.length === 0) return;
  let s = OTt(t);
  for (let i of e.banners) if (!U.has(i.value)) h.push({
    rule: "banner-state-invalid",
    where: o(i.node, e.snippets),
    hint: "data-ws-state must be one of in-progress|ready|started."
  });else if (i.value !== s) h.push({
    rule: "banner-state-mismatch",
    where: o(i.node, e.snippets),
    hint: `data-ws-state says "${cq(i.value)}" but the island derives "${s}" \u2014 flip them together (text stays yours; the attribute is the wire contract).`
  });
}
export { Q as extractInlineScriptHashes, ee as verifyWorkshopHtml };