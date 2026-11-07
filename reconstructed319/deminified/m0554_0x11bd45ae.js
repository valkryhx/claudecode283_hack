// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { q } from "B:/~BUN/root/chunk-game8aqv.js";
import { v } from "B:/~BUN/root/chunk-1ks9vs37.js";
import { ee } from "B:/~BUN/root/chunk-2pp12te6.js";
import { tt } from "B:/~BUN/root/chunk-n8cnxns2.js";
import { p } from "B:/~BUN/root/chunk-z6138ats.js";
import { Y_t, l0r, eBt, tBt } from "B:/~BUN/root/chunk-5az22yft.js";
import { Od } from "B:/~BUN/root/chunk-8f4z6bdn.js";
import { hr } from "B:/~BUN/root/chunk-3v92y8yw.js";
import { ht } from "B:/~BUN/root/chunk-y1b1g4ac.js";
import { se } from "B:/~BUN/root/chunk-9bs2y8fc.js";
import { RLe } from "B:/~BUN/root/chunk-17caj8fw.js";
import { ec } from "B:/~BUN/root/chunk-jjs9d8eg.js";
import { D } from "B:/~BUN/root/chunk-8mqsat26.js";
import { o, u } from "B:/~BUN/root/chunk-4bfd0jkf.js";
var d = "https://claude.ai/code/artifact/",
  dNi = {
    read: null
  };
function yQt() {
  return q() && v("tengu_inked_lantern", !1) === !0;
}
function m(e) {
  return yQt() && e.some(item => ht(item, ec)) ? e.find(item => item.mcpInfo?.docsConnector === !0 && item.mcpInfo.toolName === Y_t)?.mcpInfo?.serverName : void 0;
}
function ESr(e, n) {
  return n.planDoc !== void 0 && fpt(n) === void 0 ? void 0 : m(e);
}
function fpt({
  planDoc: planDoc
}) {
  return yQt() && planDoc?.id !== void 0 ? {
    id: planDoc.id,
    title: planDoc.title
  } : void 0;
}
function cNi({
  id: id
}) {
  return `${d}${id}`;
}
function uNi(e) {
  let n = typeof e === "string" && e.startsWith(d) ? e.slice(d.length) : void 0;
  return n !== void 0 && hr.test(n) ? n : void 0;
}
function pDn({
  id: id_2,
  title: title
}) {
  return title === void 0 ? `the Claude Doc with the id ${id_2}` : `the Claude Doc "${title}"`;
}
function g(e) {
  return typeof e === "string" && e.trim() !== "" && e.length <= 200 && !/[\p{Cc}\p{Cf}\p{Zl}\p{Zp}]/u.test(e);
}
function mDn(e, n, r) {
  let {
    container: container,
    ref: ref,
    batch = []
  } = n;
  if (e.mcpInfo?.docsConnector !== !0 || r.agentId !== void 0 || !yQt() || m(r.options.tools) === void 0 || !D(container) || container.kind !== "project") return !1;
  let f = se(r);
  if (f.planDoc !== void 0) {
    let l = fpt(f);
    if (l === void 0 || !c(container, ["kind", "id"]) || container.id !== l.id) return !1;
    return e.mcpInfo.toolName === l0r ? c(n, ["container", "object", "payload", "verbose"]) && n.object === "utterance" : e.mcpInfo.toolName === eBt && c(n, ["container", "ref", "payload", "engine", "verbose"]) && D(ref) && c(ref, ["object", "id"]) && ref.object === "node";
  }
  let {
    create: create
  } = container;
  return e.mcpInfo.toolName === Y_t && c(n, ["container", "batch", "verbose"]) && Array.isArray(batch) && batch.length === 0 && c(container, ["kind", "create"]) && D(create) && c(create, ["name", "doc"]) && g(create.name) && (create.doc === void 0 || D(create.doc) && c(create.doc, ["markdown", "blocks"]));
}
function c(e, n) {
  return Object.keys(e).every(item => n.includes(item));
}
function TSr(e) {
  try {
    let n = new URL(e.url);
    return n.protocol === "https:" && Od(n.href) && n.pathname === tBt;
  } catch {
    return !1;
  }
}
function hDn(e) {
  let {
    request_id: request_id
  } = RLe(e);
  return request_id === void 0 ? {} : {
    "anthropic/requestId": request_id
  };
}
var y = new Set(["create", "update"]);
function fNi(e, n) {
  let mcpInfo = e.mcpInfo;
  if (mcpInfo === void 0 || mcpInfo.scope !== "claudeai" || !y.has(mcpInfo.toolName)) return !1;
  let t = n.find(item => item.name === mcpInfo.serverName);
  return t !== void 0 && t.config.scope === "claudeai" && t.config.type === "claudeai-proxy" && TSr(t.config);
}
var A = 65536;
function qhs(e) {
  return e.length <= A && e.includes('"frame"');
}
function pNi(e) {
  for (let n of Yhs(e)) {
    if (!qhs(n)) continue;
    let r = tt(n, `

`),
      t;
    try {
      t = ee(r);
    } catch {
      continue;
    }
    let i = C(t);
    if (i !== null) return i;
  }
  return null;
}
var _ = p(() => u({
  frame: u({
    slug: o().regex(hr)
  })
}));
function C(e) {
  let n = _().safeParse(e);
  return n.success ? n.data.frame.slug : null;
}
function* Yhs(e) {
  if (typeof e === "string") {
    yield e;
    return;
  }
  if (!Array.isArray(e)) return;
  for (let n of e) if (n !== null && typeof n === "object" && "type" in n && n.type === "text" && "text" in n && typeof n.text === "string") yield n.text;
}
export { dNi, yQt, ESr, fpt, cNi, uNi, pDn, mDn, TSr, hDn, fNi, qhs, pNi, Yhs };