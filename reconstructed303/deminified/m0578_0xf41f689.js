// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { F } from "B:/~BUN/root/chunk-rpez7z7a.js";
import { _, J } from "B:/~BUN/root/chunk-6za2ez23.js";
import { O } from "B:/~BUN/root/chunk-nggrknsv.js";
import { Vs } from "B:/~BUN/root/chunk-cx57tr4b.js";
import { hFr, bW } from "B:/~BUN/root/chunk-qp0344nb.js";
import { z1e } from "B:/~BUN/root/chunk-ggdk44cm.js";
import { G8, Gw } from "B:/~BUN/root/chunk-g6bb3rr7.js";
import { randomUUID as W } from "crypto";
var P = "decision",
  j = "deliverables",
  X = /(?:`{3,}|~{3,})[ \t]*(?:decision|deliverables)/,
  NFe = "[a-z0-9][a-z0-9-]{0,63}",
  regExp = new RegExp(`^${NFe}$`),
  U = ["id", "question", "option", "lean", "resolved", "custom", "anchor"],
  regExp_2 = new RegExp(`^(${U.join("|")}):[ \\t]?(.*)$`),
  regExp_3 = new RegExp(`^(${NFe})(?:[ \\t]*\\|[ \\t]*(.+))?$`),
  V = 300,
  q = 60,
  H = 200,
  Too = /^[A-Za-z0-9 ._:/@#()+-]{1,120}$/,
  L = 2,
  R = 5,
  T = 20,
  N = 280,
  C = 1120,
  Y = 1496,
  G = /[\u0000-\u001f\u007f-\u009f\u2028\u2029]|(?![\u200C\u200D\uFE00-\uFE0F\u{E0100}-\u{E01EF}])[\p{Cf}\p{Default_Ignorable_Code_Point}]/u,
  Z = /[\u200C\u200D\uFE00-\uFE0F\u{E0100}-\u{E01EF}]/gu,
  Q = 8;
function K(e) {
  if (e.length === 0 || e !== e.trim() || [...e].length > N) return !1;
  if (G.test(e)) return !1;
  return (e.match(Z) ?? []).length <= Q;
}
var ee = /^[A-Za-z0-9+/]*={0,2}$/;
function D(e) {
  if (!K(e)) return null;
  let n = new TextEncoder().encode(e);
  if (n.length > C) return null;
  return Buffer.from(n).toString("base64");
}
function I5t(e) {
  if (e.length === 0 || e.length % 4 !== 0 || e.length > Y || !ee.test(e)) return null;
  let n = Buffer.from(e, "base64");
  if (n.length > C) return null;
  if (Buffer.from(n).toString("base64") !== e) return null;
  let t;
  try {
    t = new TextDecoder("utf-8", {
      fatal: !0
    }).decode(n);
  } catch {
    return null;
  }
  return K(t) ? t : null;
}
function w(e) {
  return e.resolved !== void 0 || e.custom !== void 0;
}
var E = "get-started",
  b = ["get-started", "keep-iterating"];
function XIn(e) {
  if (e.id !== E || e.options.length !== 2) return !1;
  if (e.custom !== void 0) return !1;
  let n = new Set(e.options.map(item => item.token));
  return b.every(item => n.has(item));
}
function B(e) {
  let n = e.find(XIn);
  if (e.some(item => item !== n && !w(item))) return "in-progress";
  if (n?.resolved === b[0]) return "started";
  if (n !== void 0 && n.resolved === void 0) return "ready";
  return "in-progress";
}
var Lds = /^<!--ws-decision-[0-9a-f]{8}(?:-[0-9a-f]{4}){3}-[0-9a-f]{12}-\d+-->\s*$/;
function ne(e) {
  let n = {},
    options = [];
  for (let l of e.split(`
`)) {
    if (l.trim() === "") continue;
    let p = l.match(regExp_2);
    if (!p) return null;
    let d = p[1],
      g = (p[2] ?? "").trim();
    if (g === "") return null;
    if (d === "option") {
      let m = g.match(regExp_3);
      if (!m) return null;
      let token = m[1],
        label = (m[2] ?? token).trim();
      if (label === "" || label.length > q) return null;
      options.push({
        token: token,
        label: label
      });
    } else {
      if (n[d] !== void 0) return null;
      n[d] = g;
    }
  }
  let {
    id: id,
    question: question,
    resolved: resolved,
    anchor: anchor,
    custom: custom
  } = n;
  if (id === void 0 || !regExp.test(id)) return null;
  if (question === void 0 || question.length > V) return null;
  if (options.length < L || options.length > R) return null;
  if (new Set(options.map(item => item.token)).size !== options.length) return null;
  let lean;
  if (n.lean !== void 0) {
    let l = n.lean.match(regExp_3);
    if (!l) return null;
    let token_2 = l[1],
      reason = l[2]?.trim();
    if (reason !== void 0 && (reason === "" || reason.length > H)) return null;
    if (!options.some(item => item.token === token_2)) return null;
    lean = {
      token: token_2,
      reason: reason
    };
  }
  if (anchor !== void 0 && !Too.test(anchor)) return null;
  if (resolved !== void 0 && !options.some(item => item.token === resolved)) return null;
  if (custom !== void 0) {
    if (resolved !== void 0) return null;
    if (id === E) return null;
    if (D(custom) === null) return null;
  }
  return {
    id: id,
    question: question,
    options: options,
    lean: lean,
    resolved: resolved,
    custom: custom,
    anchor: anchor
  };
}
function Coo(e) {
  let n = w(e),
    t = n ? "resolved" : "open",
    s = e.resolved === void 0 ? void 0 : e.options.find(item => item.token === e.resolved),
    a = e.custom === void 0 ? null : D(e.custom),
    r = `data-decision-id="${Vs(e.id)}" data-decision-state="${t}"` + (e.lean === void 0 ? "" : ` data-lean-choice="${Vs(e.lean.token)}"`) + (e.resolved === void 0 ? "" : ` data-resolved-choice="${Vs(e.resolved)}"`) + (a === null ? "" : ` data-resolved-custom="${Vs(a)}"`) + (e.anchor === void 0 ? "" : ` data-anchor="${Vs(e.anchor)}"`),
    lean_2 = e.lean,
    c = e.options.map(item => {
      let g = `<span class="option-label">${Vs(item.label)}</span>`,
        m = Vs(item.token),
        i = lean_2 !== void 0 && item.token === lean_2.token,
        u = lean_2 !== void 0 && item.token === lean_2.token && lean_2.reason !== void 0 ? `<span class="why">${Vs(lean_2.reason)}</span>` : "";
      if (n) {
        let A = item.token === e.resolved ? "option chosen" : "option dim",
          y = item.token === e.resolved && i ? u : "";
        return `<span class="${A}" data-choice="${m}">${g}${y}</span>`;
      }
      return `<span class="${i ? "option recommended" : "option"}" role="button" aria-disabled="true" title="Deciding from the page needs this Artifact to be able to update itself" data-choice="${m}">${g}${i ? '<span class="badge">Recommended</span>' : ""}${u}</span>`;
    }).join(""),
    f = e.custom !== void 0 ? `<p class="decided">Decided: ${Vs(e.custom)}</p>` : s === void 0 ? "" : `<p class="decided">Decided: ${Vs(s.label)}</p>`,
    l = e.anchor === void 0 ? "" : `<p class="anchor">Anchor: <code>${Vs(e.anchor)}</code></p>`,
    p = n || e.id === E ? "" : `<div class="custom-answer"><input class="option-input" type="text" maxlength="${N}" disabled aria-disabled="true" title="Deciding from the page needs this Artifact to be able to update itself"` + ' placeholder="Or type your own answer\u2026" aria-label="Your own answer"></div>';
  return `<div class="call-item" ${r}>` + '<span class="marker" aria-hidden="true">\u25CF</span>' + `<div class="call-body"><p><span class="q">${Vs(e.question)}</span></p>` + f + l + `<div class="options">${c}${p}</div></div></div>`;
}
var Roo = "<!--ws-decisions-island-->",
  Aoo = "<!--ws-status-banner-->",
  xoo = "<!--ws-status-footer-->";
function Nds(e) {
  if (e.length === 0) return null;
  for (let s of e) if (s.custom !== void 0 && D(s.custom) === null) return null;
  let items = e.map(item => ({
      id: item.id,
      opts: item.options.map(item => item.token),
      state: w(item) ? "resolved" : "open",
      choice: item.resolved ?? null,
      custom: item.custom === void 0 ? null : D(item.custom)
    })),
    t = _({
      items: items
    });
  for (let s of ["<", ">", "&", "'", "\\"]) if (t.includes(s)) return null;
  if (Ioo(t) === null) return null;
  return `<script type="application/json" id="ws-decisions">${t}</script>`;
}
function Fds(e) {
  let n = B(e),
    t = e.find(XIn),
    s = F(e, r => r !== t && !w(r)),
    a = n === "started" ? "Build started" : n === "ready" ? "Ready to build" : s > 0 ? `In progress \u2014 ${s} ${O(s, "decision")} open` : "In progress";
  return `<div class="ws-banner" data-ws-state="${n}">${a}</div>`;
}
function Hds(e, n) {
  let resolved_2 = e.resolved,
    s = resolved_2 === void 0 ? "open" : "resolved",
    a = `data-decision-id="${Vs(e.id)}" data-decision-state="${s}"` + (resolved_2 === void 0 ? "" : ` data-resolved-choice="${Vs(resolved_2)}"`),
    r = e.options.map(item => {
      let f = `<span class="option-label">${Vs(item.label)}</span>`,
        l = Vs(item.token);
      if (resolved_2 !== void 0) return `<span class="${item.token === resolved_2 ? "option chosen" : "option dim"}" data-choice="${l}">${f}</span>`;
      return `<span class="${item.token === b[0] ? "option cta" : "option cta-quiet"}" role="button" aria-disabled="true" title="Deciding from the page needs this Artifact to be able to update itself" data-choice="${l}">${f}</span>`;
    }).join(""),
    o = resolved_2 === b[0] ? '<span class="ws-status-note">Build started \u2014 the workshop session is on it.</span>' : resolved_2 !== void 0 ? '<span class="ws-status-note">Keeping at it \u2014 more to come.</span>' : B(n) === "ready" ? '<span class="ws-status-note">All decisions are in.</span>' : '<span class="ws-status-note">Decisions still open above.</span>';
  return `<div class="ws-status-footer" ${a}>${r}${o}</div>`;
}
var S = 10,
  M = 120,
  regExp_4 = new RegExp(`^[-*][ \\t]+\\[([^\\][\\r\\n]{1,${M}})\\]\\((\\S+)\\)$`),
  Poo = "data-ws-deliverable-kind",
  se = ["pr", "artifact", "other"],
  regExp_5 = new RegExp(`/artifact/(?:[A-Za-z0-9_-]*-)?(?:[0-9a-f]{8}-|(${hFr})(?:/|$))`);
function re(e) {
  if (/\/(?:pull|pull-requests|-\/merge_requests)\/\d+/.test(e.pathname)) return "pr";
  let n = regExp_5.exec(e.pathname);
  if (n && (n[1] === void 0 || bW(n[1]) !== null)) return "artifact";
  return "other";
}
function ie(e) {
  let n = [];
  for (let t of e.split(`
`)) {
    let s = t.trim();
    if (s === "") continue;
    let a = regExp_4.exec(s);
    if (!a) return null;
    let label_2 = a[1].trim();
    if (label_2.length === 0 || label_2.length > M) return null;
    let o;
    try {
      o = new URL(a[2]);
    } catch {
      return null;
    }
    if (o.protocol !== "https:" && o.protocol !== "http:") return null;
    if (n.length >= S) return null;
    n.push({
      label: label_2,
      url: o.toString(),
      kind: re(o)
    });
  }
  return n.length === 0 ? null : n;
}
function le(e) {
  return `<div class="ws-deliverables"><ul>${e.map(item => `<li class="ws-deliverable" ${Poo}="${item.kind}"><a href="${Vs(item.url)}" target="_blank" rel="noopener noreferrer">${Vs(item.label)}</a></li>`).join("")}</ul></div>`;
}
function JIn(e) {
  let n = e.slice(0, S),
    t = s => se.includes(s) ? s : "other";
  return {
    n: n.length,
    pr: F(n, s => t(s) === "pr"),
    artifact: F(n, s => t(s) === "artifact"),
    other: F(n, s => t(s) === "other")
  };
}
function $ds(md, n, t = Coo) {
  let s = {
    md: md,
    substitute: html => ({
      html: html,
      complete: !0
    }),
    nonceMarker: "",
    decisions: [],
    deliverables: []
  };
  if (!X.test(md)) return s;
  let a;
  try {
    a = n(md);
  } catch {
    return s;
  }
  let r = [],
    o = new Set(),
    offset = 0,
    f = 0;
  for (let i of a) {
    if (!md.startsWith(i.raw, offset)) {
      let u = md.indexOf(i.raw, offset);
      if (u === -1) break;
      offset = u;
    }
    if (i.type === "code" && "lang" in i && typeof i.lang === "string" && i.lang.trim() === P && o.size < T) {
      let decision = ne(i.text);
      if (decision !== null && !o.has(decision.id)) o.add(decision.id), r.push({
        offset: offset,
        raw: i.raw,
        decision: decision
      });
    } else if (i.type === "code" && "lang" in i && typeof i.lang === "string" && i.lang.trim() === j) {
      let deliverables = ie(i.text);
      if (deliverables !== null && f + deliverables.length <= S) f += deliverables.length, r.push({
        offset: offset,
        raw: i.raw,
        deliverables: deliverables
      });
    }
    offset += i.raw.length;
  }
  if (r.length === 0) return s;
  let l = W(),
    md_2 = "",
    d = 0,
    g = [];
  for (let [i, u] of r.entries()) {
    let ph = `<!--ws-decision-${l}-${i}-->`;
    md_2 += md.slice(d, u.offset) + `

${ph}

`, d = u.offset + u.raw.length, g.push({
      ph: ph,
      html: "decision" in u ? t(u.decision) : le(u.deliverables)
    });
  }
  md_2 += md.slice(d);
  let nonceMarker = `ws-decision-${l}`;
  return {
    md: md_2,
    nonceMarker: nonceMarker,
    substitute: i => {
      let html_3 = i,
        complete = !0;
      for (let {
        ph: ph_2,
        html: html_2
      } of g) {
        let y = html_3.split(ph_2);
        if (y.length === 1) complete = !1;
        html_3 = y.join(html_2);
      }
      if (html_3.includes(nonceMarker)) complete = !1;
      return {
        html: html_3,
        complete: complete
      };
    },
    decisions: r.flatMap(item => "decision" in item ? [item.decision] : []),
    deliverables: r.flatMap(item => "deliverables" in item ? item.deliverables : [])
  };
}
var Ooo = 'id="ws-decisions">';
function GRt(e, n) {
  let t = `id="${n}"`,
    s = [],
    a = e.indexOf(t);
  while (a !== -1) {
    let r = a + t.length,
      o = r + z1e(e, r);
    if (e.charCodeAt(o) === 62) s.push([a, o + 1]);
    a = e.indexOf(t, r);
  }
  return s;
}
var ae = 65536;
async function I(e, n) {
  try {
    let {
      nestingBudgetExceeded: nestingBudgetExceeded
    } = await import("B:/~BUN/root/chunk-m87yhsjt.js");
    if (nestingBudgetExceeded(e)) return null;
    return await ce(e, n);
  } catch {
    return null;
  }
}
async function ce(e, n) {
  let {
      parse: parse
    } = await import("B:/~BUN/root/chunk-mxehgd9s.js"),
    node = G8(parse(e, {
      sourceCodeLocationInfo: !0
    })),
    a = [],
    r = [{
      node: node,
      inTemplate: !1
    }];
  for (;;) {
    let o = r.pop();
    if (o === void 0) break;
    let {
      node: node_2,
      inTemplate: inTemplate
    } = o;
    if (node_2.tagName !== void 0) {
      if (Gw(node_2, "id") === n) a.push({
        node: node_2,
        inTemplate: inTemplate
      });
    }
    for (let node_3 of node_2.childNodes ?? []) r.push({
      node: node_3,
      inTemplate: inTemplate
    });
    for (let node_4 of node_2.content?.childNodes ?? []) r.push({
      node: node_4,
      inTemplate: !0
    });
  }
  return a;
}
async function GF(e, n) {
  if (!regExp.test(n)) return {
    ambiguous: !0
  };
  let t = GRt(e, n);
  if (t.length === 0) {
    let p = await I(e, n);
    if (p === null) return {
      ambiguous: !0
    };
    return p.length === 0 ? null : {
      ambiguous: !0
    };
  }
  if (t.length !== 1) return {
    ambiguous: !0
  };
  let [s, a] = t[0],
    r = await I(e, n);
  if (r === null || r.length !== 1 || r[0].inTemplate) return {
    ambiguous: !0
  };
  let node_5 = r[0].node,
    c = (Gw(node_5, "type") ?? "").trim().toLowerCase(),
    f = node_5.sourceCodeLocation?.startTag,
    l = node_5.sourceCodeLocation?.endTag;
  if ((node_5.tagName ?? "").toLowerCase() !== "script" || c !== "application/json" || f === void 0 || f === null || l === void 0 || l === null) return {
    ambiguous: !0
  };
  if (s < f.startOffset || a !== f.endOffset) return {
    ambiguous: !0
  };
  return {
    json: e.slice(f.endOffset, l.startOffset)
  };
}
function Ioo(e) {
  if (e.length > ae) return null;
  let n;
  try {
    n = J(e);
  } catch {
    return null;
  }
  if (n === null || typeof n !== "object" || Array.isArray(n)) return null;
  let t = Object.keys(n);
  if (t.length !== 1 || t[0] !== "items") return null;
  let items_2 = n.items;
  if (!Array.isArray(items_2) || items_2.length > T) return null;
  let a = [],
    r = new Set();
  for (let o of items_2) {
    if (o === null || typeof o !== "object" || Array.isArray(o)) return null;
    let c = Object.keys(o).sort();
    if (c.length !== 5 || c[0] !== "choice" || c[1] !== "custom" || c[2] !== "id" || c[3] !== "opts" || c[4] !== "state") return null;
    let f = o,
      id_2 = f.id;
    if (typeof id_2 !== "string" || !regExp.test(id_2) || r.has(id_2)) return null;
    r.add(id_2);
    let opts = f.opts;
    if (!Array.isArray(opts) || opts.length < L || opts.length > R || opts.some(item => typeof item !== "string" || !regExp.test(item)) || new Set(opts).size !== opts.length) return null;
    let state = f.state;
    if (state !== "open" && state !== "resolved") return null;
    let choice = f.choice;
    if (choice !== null && (typeof choice !== "string" || !opts.includes(choice))) return null;
    let custom_2 = f.custom;
    if (custom_2 !== null && (typeof custom_2 !== "string" || I5t(custom_2) === null)) return null;
    if (custom_2 !== null && id_2 === E) return null;
    if (state === "open" && (choice !== null || custom_2 !== null)) return null;
    if (state === "resolved" && choice !== null === (custom_2 !== null)) return null;
    a.push({
      id: id_2,
      opts: opts.slice(),
      state: state,
      choice: choice,
      custom: custom_2
    });
  }
  return a;
}
function ue(e) {
  return e.id === E && e.opts.length === 2 && b.every(item => e.opts.includes(item)) && e.custom === null;
}
function M5t(e) {
  let n = e.find(ue);
  if (e.some(item => item !== n && item.state === "open")) return "in-progress";
  if (n !== void 0 && n.choice === b[0]) return "started";
  if (n !== void 0 && n.state === "open") return "ready";
  return "in-progress";
}
export { NFe, Too, I5t, XIn, Lds, Coo, Roo, Aoo, xoo, Nds, Fds, Hds, Poo, JIn, $ds, Ooo, GRt, GF, Ioo, M5t };