// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { Xo } from "B:/~BUN/root/chunk-gf53qpk6.js";
import { EY, Mn } from "B:/~BUN/root/chunk-1f9marcm.js";
import { q0 } from "B:/~BUN/root/chunk-290k5gh5.js";
import { yn as name, I_ as comments, Jf as data, jR as check, KFt as ruleContentField_2, YFt, Bt, l2, WR, En, i$t, k$e } from "B:/~BUN/root/chunk-yehxgs7w.js";
import { VMt, qp } from "B:/~BUN/root/chunk-faawr4jv.js";
import { Pm, me } from "B:/~BUN/root/chunk-fk6j5yf3.js";
import { IDt, ks, ku, rh, PR } from "B:/~BUN/root/chunk-d36ctpgs.js";
import { Gy, V3 } from "B:/~BUN/root/chunk-7d9qjs8x.js";
import { hW, cGe } from "B:/~BUN/root/chunk-116h9ckm.js";
import { cMt } from "B:/~BUN/root/chunk-y07ebhpd.js";
import { Dr as name_2, aan as ruleContentField } from "B:/~BUN/root/chunk-c4gqp24s.js";
var _ = /^([A-Za-z][A-Za-z0-9+.-]*):\/\/([^/?#]*)(.*)$/;
function P(n) {
  let e = n.match(_);
  if (!e) return n;
  let t = e[1].toLowerCase();
  if (t === "http") t = "https";
  let o = e[2].toLowerCase().replace(/:(?:443|80)$/, "").replace(/\.(?=$|:\d+$)/, "");
  return `${t}://${o}${e[3] ?? ""}`;
}
function AZe(n, e, t, o = "url") {
  if (n.size === 0) return null;
  let r = k$e(e),
    l = new Set([...i$t(e), r, `${r}/`]);
  if (typeof t === "string") l.add(l2(t).trim());
  for (let [u, a] of n) {
    let i = u.indexOf(":");
    if (i <= 0) continue;
    let s = u.slice(0, i).trim(),
      c = u.slice(i + 1).trim();
    if (s !== o || c === "") continue;
    let f = WR(c.replace(/\*$/, ""));
    if (f?.slug === e.slug && f.env === e.env) return a;
    let p = new Set([c, P(c)]);
    for (let y of p) for (let A of l) if (EY(y, A)) return a;
  }
  return null;
}
function E(n) {
  let e = Bt(n),
    t = WR(n);
  return [...(e !== null ? [e] : []), ...(t !== null && (e === null || e.slug !== t.slug || e.env !== t.env) ? [t] : [])];
}
function T(n, e) {
  if (n.size === 0 || typeof e !== "object" || e === null) return null;
  let {
      url: url,
      type_url: type_url,
      from_url: from_url,
      files: files
    } = e,
    u = typeof files === "object" && files !== null && !Array.isArray(files) ? Object.values(files).map(item => typeof item === "object" && item !== null ? item.artifact : void 0) : [],
    a = [[url, ["url"]], [type_url, ["url", "type_url"]], [from_url, ["url", "from_url"]], ...u.map(item => [item, ["url", "from_url"]])];
  for (let [i, s] of a) {
    if (typeof i !== "string") continue;
    for (let c of E(i)) for (let f of s) {
      let p = AZe(n, c, i, f);
      if (p !== null) return p;
    }
  }
  return null;
}
var k = {
  comments: comments,
  data: data,
  check: check
};
function Ize(n, e) {
  let t = e?.action,
    o = typeof t === "string" && Object.hasOwn(hW, t) ? hW[t] : void 0;
  return o === void 0 ? void 0 : {
    tool: {
      name: k[o],
      ruleContentField: n.ruleContentField
    },
    input: cGe(o, e)
  };
}
function U6t(n, e, t, o) {
  let r = Ize(e, t);
  if (r === void 0) return null;
  return (o === "deny" ? ks(n, r.tool) : ku(n, r.tool)) ?? rh(n, r.tool, r.input, o);
}
function ewe(n, e, t) {
  let o = Ize({
    name: name
  }, e)?.tool.name;
  for (let r of [name, ...(o ? [o] : [])]) {
    let l = T(PR(n, r, t), e);
    if (l !== null) return l;
  }
  return null;
}
function Icr(n, e, t, o) {
  let r = Ize(e, t);
  return rh(n, e, t, o) ?? (r === void 0 ? null : rh(n, r.tool, r.input, o));
}
var w = {
    name: name_2,
    mcpInfo: void 0,
    ruleContentField: ruleContentField
  },
  d = {
    name: name,
    mcpInfo: void 0,
    ruleContentField: ruleContentField_2
  };
function m(url_2, e, page) {
  let prompt = e ?? YFt;
  return {
    webFetch: {
      url: url_2,
      prompt: prompt
    },
    artifact: {
      action: "read",
      url: url_2,
      prompt: prompt,
      ...(page !== void 0 && {
        page: page
      })
    }
  };
}
function lAn(n, e, t, o, r) {
  let l = r === void 0 ? null : rh(n, w, m(t, r.prompt).webFetch, o);
  if (l !== null) return l;
  let u = PR(n, name_2, o);
  if (u.size === 0) return null;
  let a = new Set([new URL(En(e)).hostname, new URL(k$e(e)).hostname]);
  if (typeof t === "string") try {
    a.add(new URL(t).hostname);
  } catch {}
  for (let i of a) {
    let s = cMt(u, `domain:${i}`);
    if (s !== void 0) return s;
  }
  return null;
}
function Jh(n, e, t, o, r = {}) {
  let l = Ize({
      name: name
    }, {
      action: r.action
    })?.tool.name,
    u = lAn(n, e, t, o, r.read);
  if (u !== null) return u;
  for (let a of [name, ...(l ? [l] : [])]) {
    let i = PR(n, a, o),
      s = AZe(i, e, t) ?? (r.copySource === !0 ? AZe(i, e, t, "from_url") : null);
    if (s !== null) return s;
  }
  return null;
}
function g(n) {
  if (!IDt.some(item => (n.alwaysDenyRules[item]?.length ?? 0) > 0)) return n;
  let alwaysDenyRules = {
    ...n.alwaysDenyRules
  };
  for (let t of IDt) delete alwaysDenyRules[t];
  return {
    ...n,
    alwaysDenyRules: alwaysDenyRules
  };
}
function R(n, e, t, o) {
  let {
    action: action,
    ...l
  } = t;
  return (action === void 0 ? null : rh(g(n), e, {
    action: action
  }, o)) ?? rh(n, e, l, o);
}
function Ocr(n, e, t, o, r = {}) {
  let l = g(n);
  return (o === "deny" ? ks(l, d) : ku(l, d)) ?? R(n, d, m(t, r.prompt, r.page).artifact, o) ?? AZe(PR(n, name, o), e, t);
}
function aS(n, e, t, o, r) {
  let l = {
      ...r.fields,
      ...(r.read !== void 0 ? m(t, r.read.prompt, r.read.page).artifact : {
        ...(typeof r.action === "string" && {
          action: r.action
        }),
        url: En(e)
      })
    },
    u = Ize(d, l),
    a = g(n),
    i = s => o === "deny" ? ks(a, s) : r.wholeToolAskAnswered === !0 && s.name === name ? null : ku(a, s);
  return i(d) ?? R(n, d, l, o) ?? (u === void 0 ? null : i(u.tool) ?? R(n, u.tool, u.input, o)) ?? Jh(n, e, t, o, r);
}
function OOe(n) {
  return `the ${Mn(n.ruleValue)} deny rule from ${q0(n.source)}`;
}
var Oze = 'some tag-like sequences or line-opening turn markers in the copy below carry an inserted "\\"';
function B6t(n, e, t, read = {}) {
  let r = me(n),
    l = {
      action: "read",
      read: read
    };
  return C(n, e) && !(qp(e.slug) && !Xo(n.agentContext)) && aS(r, e, t, "deny", l) === null && aS(r, e, t, "ask", l) === null;
}
function C(n, e) {
  let {
    mode: mode
  } = me(n);
  return mode !== "plan" && (mode !== "auto" || Gy(e) || V3(e.slug));
}
function Mcr(n, e, t, o = {}) {
  return me(n).mode !== "dontAsk" && !Pm(n) && B6t(n, e, t, o);
}
function xZe(n, e, t, o = {}) {
  return VMt(n.artifactRegistries, e.slug) && B6t(n, e, t, o);
}
export { AZe, Ize, U6t, ewe, Icr, lAn, Jh, Ocr, aS, OOe, Oze, B6t, Mcr, xZe };