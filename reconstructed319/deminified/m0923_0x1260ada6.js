// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { Pe } from "B:/~BUN/root/chunk-vz9zea4j.js";
import { q } from "B:/~BUN/root/chunk-game8aqv.js";
import { k, K } from "B:/~BUN/root/chunk-y2g9f85n.js";
import { t, _ } from "B:/~BUN/root/chunk-2pp12te6.js";
import { et } from "B:/~BUN/root/chunk-fkr27nhj.js";
import { p } from "B:/~BUN/root/chunk-z6138ats.js";
import { pr, Te, Fn, cM, us } from "B:/~BUN/root/chunk-8f4z6bdn.js";
import { i } from "B:/~BUN/root/chunk-j6pt0v41.js";
import { NPr, FPr, VUn, bon, UPr, qX, won, WNe, jgt, kYi, Wgt, AYi, xYi, zgt, _V, vU, TIr } from "B:/~BUN/root/chunk-1ks9vs37.js";
import { gn } from "B:/~BUN/root/chunk-f0zgv0ya.js";
import { XOe, zqt, vtr, Fle } from "B:/~BUN/root/chunk-c1km8051.js";
import { Tar, z7o } from "B:/~BUN/root/chunk-6dms8sre.js";
import { o, E, oe, u, B, T } from "B:/~BUN/root/chunk-4bfd0jkf.js";
import { join as P } from "path";
var version = 2,
  C = 3600000,
  h = 0.1,
  A = ["hosted", "custom_url", "file"],
  R = p(() => u({
    version: T(version),
    fetchedAt: E(),
    staleAt: E(),
    etag: o().refine(qX).optional(),
    source: B(A),
    documentBytes: o(),
    sidecar: oe(),
    rootId: o(),
    document: Wgt()
  }));
function BEt(e) {
  return P(vU(), `published-${e}.json`);
}
function l() {
  return pr().publishedCatalogByKey;
}
var f = WNe * 3 + jgt + 4096;
async function w2r(e) {
  let a = l().get(e);
  if (a !== void 0) return a ?? void 0;
  let r = BEt(e),
    n;
  try {
    n = await _V().readRange(r, 0, f + 1);
  } catch (error) {
    if (!K(error)) t(`[publishedCatalog] cache read failed: ${k(error) ?? "unknown"}`);
    l().set(e, null);
    return;
  }
  let s = n.length > f ? void 0 : R().safeParse(et(n.toString("utf8"), !1));
  if (!s?.success) {
    t(`[publishedCatalog] cache file ${s === void 0 ? "oversized" : "invalid"}, discarding`), await BBo(e);
    return;
  }
  return await k2r(e, s.data, {
    verified: !1
  }), s.data;
}
async function BBo(e) {
  l().set(e, null);
  try {
    await _V().delete(BEt(e));
  } catch {}
}
function y7s(e) {
  l().set(e, null);
}
async function jBo(e, a) {
  await k2r(e, a, {
    verified: !0
  });
  try {
    let r = _V();
    await r.mkdir(vU()), await r.atomicWrite(BEt(e), _(a), 384);
  } catch (error) {
    t(`[publishedCatalog] cache write failed: ${k(error) ?? "unknown"}`);
  }
}
async function k2r(e, a, {
  verified: verified
}) {
  if (l().set(e, a), verified && a.rootId !== Tar) for (let n of m(a.document)) FPr(n);
  await WBo(a.document);
}
async function WBo(e) {
  let a = m(e);
  for (let r of a) VUn(r);
  await TIr(new Set(a.flatMap(item => [...NPr(item)])));
}
function m(e) {
  return UPr.flatMap(item => {
    let r = e.surfaces[item],
      n = r === void 0 ? null : won(r, item);
    return n === null ? [] : [n];
  });
}
function _7s({
  document: document,
  documentBytes: documentBytes,
  sidecar: sidecar,
  etag: etag,
  source: source,
  rootId: rootId,
  now: c = Date.now(),
  random = Math.random()
}) {
  return {
    version: version,
    fetchedAt: c,
    staleAt: v(c, random),
    ...(etag !== void 0 && {
      etag: etag
    }),
    source: source,
    documentBytes: Buffer.from(documentBytes).toString("base64"),
    sidecar: sidecar,
    rootId: rootId,
    document: document
  };
}
function b7s(e, fetchedAt = Date.now(), r = Math.random()) {
  return {
    ...e,
    fetchedAt: fetchedAt,
    staleAt: v(fetchedAt, r)
  };
}
function v(e, a) {
  let r = 1 + h * (2 * a - 1);
  return e + Math.round(C * r);
}
function zBo(e, a = Date.now()) {
  let r = kYi(e.expires_at);
  return r !== void 0 && a >= r;
}
function jEt(e, a = Date.now()) {
  let r = e.fetchedAt + C * (1 + h);
  return a < e.fetchedAt || a >= e.staleAt || e.staleAt > r || zBo(e.document, a);
}
function v9n() {
  let e = zqt();
  if (e === "essential_traffic" && z7o()) {
    let a = zqt({
      skipEssentialTrafficGate: !0
    });
    return b(a);
  }
  return b(e);
}
function v2r(e) {
  return e.source === "fallback" && e.credential !== void 0 && S(e.credential);
}
function x(e) {
  return e !== null && S(XOe(e));
}
function S(e) {
  switch (e) {
    case "oauth":
      return !1;
    case "api_key":
    case "profile":
    case "federation":
      return !0;
  }
}
function b(e) {
  switch (e) {
    case "env_off":
    case "bare":
    case "essential_traffic":
    case "unix_socket":
    case "policy":
      return e;
    case "not_first_party":
      return O();
    case "not_claude_ai_auth":
    case "api_key_helper":
      return gn("allow_model_catalog") ? null : "policy";
    case "no_org":
    case "no_account":
      return "served_applies";
    case null:
      if (x(Fle())) return bon()?.source === "served" ? "served_applies" : null;
      return "served_applies";
  }
}
function O() {
  let e = Te();
  if (e === "gateway") return "cloud_gateway";
  let a = cM(e),
    r = !a && Fn(),
    n = a ? "platform_flag_off" : r && !z7o() ? "gateway_flag_off" : null;
  if (n !== null && vtr("published") === "off") return n;
  if ((a || r) && !D()) return "release_off";
  if (zgt(e) && !w(e)) return "release_off";
  return null;
}
function D() {
  return xYi();
}
function w(e) {
  return AYi().includes(e) || Pe(i.CLAUDE_CODE_MODEL_CATALOG);
}
function Cgn() {
  return v9n() === null;
}
function E9n() {
  return us() && !q() && vtr("published") !== "off";
}
function T9n() {
  return Fn() || cM() ? vtr("published") : "primary";
}
function Rgn() {
  if (!Cgn()) return "off";
  return T9n();
}
export { BEt, w2r, BBo, y7s, jBo, k2r, WBo, _7s, b7s, zBo, jEt, v9n, v2r, Cgn, E9n, T9n, Rgn };