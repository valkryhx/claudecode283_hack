// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { rs } from "B:/~BUN/root/chunk-vz9zea4j.js";
import { Nt } from "B:/~BUN/root/chunk-q78ga0zw.js";
import { k, K } from "B:/~BUN/root/chunk-y2g9f85n.js";
import { t, _ } from "B:/~BUN/root/chunk-2pp12te6.js";
import { Nr } from "B:/~BUN/root/chunk-eev762xg.js";
import { et } from "B:/~BUN/root/chunk-fkr27nhj.js";
import { St } from "B:/~BUN/root/chunk-xrwdh0g4.js";
import { p } from "B:/~BUN/root/chunk-z6138ats.js";
import { pr, us } from "B:/~BUN/root/chunk-8f4z6bdn.js";
import { i } from "B:/~BUN/root/chunk-j6pt0v41.js";
import { NPr, GUn, VUn, UPr, Son, qX, SYi, YUn, BPr, Sc, Tg, WBn, kE, Rt, kyt, hn, _V, vU, TIr, pn } from "B:/~BUN/root/chunk-1ks9vs37.js";
import { id } from "B:/~BUN/root/chunk-65j2302z.js";
import { awe } from "B:/~BUN/root/chunk-c79wfkj4.js";
import { gn } from "B:/~BUN/root/chunk-f0zgv0ya.js";
import { o, E, u, B, T } from "B:/~BUN/root/chunk-4bfd0jkf.js";
import { nt } from "B:/~BUN/root/chunk-tq5dzbq9.js";
import { join as l } from "path";
var version = 2,
  A3r = 3600000,
  x3r = 0.1;
function QYo(r, e) {
  return Math.round(r * (1 + x3r * (2 * e - 1)));
}
var m = p(() => u({
  version: T(version),
  fetchedAt: E(),
  staleAt: E(),
  etag: o().refine(qX).optional(),
  organizationUuid: o().refine(e => Nt(e)?.toLowerCase() === e).optional(),
  resolution: B(BPr).optional(),
  catalog: u({
    surface: B(UPr),
    config: SYi(),
    state: YUn().optional()
  }).nullable()
}).transform(e => {
  if (e.etag === void 0 || e.catalog === null || !GUn(e.catalog)) return e;
  let {
    etag: etag,
    ...a
  } = e;
  return a;
}));
function V6e(r) {
  switch (r.kind) {
    case "account":
      return "org";
    case "token":
    case "api_key":
    case "profile":
    case "federation":
      return "orgless";
  }
}
function XOe(r) {
  switch (r.kind) {
    case "account":
    case "token":
      return "oauth";
    case "api_key":
      return "api_key";
    case "profile":
      return "profile";
    case "federation":
      return "federation";
  }
}
function P3r(r, e) {
  if (r === null || e === null) return !1;
  switch (r.kind) {
    case "account":
      return e.kind === "account" && r.orgUuid === e.orgUuid && r.accountScope === e.accountScope;
    case "token":
      return e.kind === "token" && r.tokenScope === e.tokenScope;
    case "api_key":
      return e.kind === "api_key" && r.keyScope === e.keyScope;
    case "profile":
      return e.kind === "profile" && r.profileScope === e.profileScope;
    case "federation":
      return e.kind === "federation" && r.federationScope === e.federationScope;
  }
}
function qCt(r, e) {
  switch (r.kind) {
    case "account":
      return l(vU(), `${r.orgUuid}-${r.accountScope}-${e}.json`);
    case "token":
      return l(vU(), `tok-${r.tokenScope}-${e}.json`);
    case "api_key":
      return l(vU(), `key-${r.keyScope}-${e}.json`);
    case "profile":
      return l(vU(), `prof-${r.profileScope}-${e}.json`);
    case "federation":
      return l(vU(), `fed-${r.federationScope}-${e}.json`);
  }
}
function d() {
  return pr().servedCatalogByKey;
}
function twn(r, e) {
  switch (r.kind) {
    case "account":
      return `${r.orgUuid}:${r.accountScope}:${e}`;
    case "token":
      return `tok:${r.tokenScope}:${e}`;
    case "api_key":
      return `key:${r.keyScope}:${e}`;
    case "profile":
      return `prof:${r.profileScope}:${e}`;
    case "federation":
      return `fed:${r.federationScope}:${e}`;
  }
}
function edi(r, e) {
  return d().get(twn(r, e)) ?? void 0;
}
var s = Son + 4096;
async function y(r) {
  let e;
  try {
    e = await _V().readRange(r, 0, s + 1);
  } catch (error) {
    if (!K(error)) t(`[servedCatalog] cache read failed: ${k(error) ?? "unknown"}`);
    return;
  }
  if (e.length > s) return t("[servedCatalog] cache file oversized"), "invalid";
  let n = m().safeParse(et(e.toString("utf8"), !1));
  if (!n.success) return t("[servedCatalog] cache file invalid"), "invalid";
  return n.data;
}
async function O3r(r, e) {
  let n = twn(r, e),
    a = d().get(n);
  if (a !== void 0) return a ?? void 0;
  let c = await y(qCt(r, e));
  if (c === void 0) {
    d().set(n, null);
    return;
  }
  if (c === "invalid" || c.catalog !== null && c.catalog.surface !== e) {
    t(`[servedCatalog] cache file ${c === "invalid" ? "invalid" : "holds another surface"}, discarding`), await ZYo(r, e);
    return;
  }
  return await S(n, c), c;
}
async function ZYo(r, e) {
  d().set(twn(r, e), null);
  try {
    await _V().delete(qCt(r, e));
  } catch (error) {
    if (!K(error)) t(`[servedCatalog] cache delete failed: ${k(error) ?? "unknown"}`);
  }
}
async function nwn(r, e, n) {
  await S(twn(r, e), n);
  try {
    let a = _V();
    await a.mkdir(vU()), await a.atomicWrite(qCt(r, e), _(n), 384);
  } catch (error) {
    t(`[servedCatalog] cache write failed: ${k(error) ?? "unknown"}`);
  }
}
async function S(r, e) {
  if (A(r, e), e.catalog !== null) await TIr(NPr(e.catalog));
}
function A(r, e) {
  if (d().set(r, e), e.catalog !== null) VUn(e.catalog);
}
function tdi({
  catalog: catalog,
  etag: etag_2,
  organizationUuid: organizationUuid,
  resolution: resolution,
  now: c = Date.now(),
  random = Math.random()
}) {
  return {
    version: version,
    fetchedAt: c,
    staleAt: g(c, random),
    ...(etag_2 !== void 0 && (catalog === null || !GUn(catalog)) && {
      etag: etag_2
    }),
    ...(organizationUuid !== void 0 && {
      organizationUuid: organizationUuid
    }),
    ...(resolution !== void 0 && {
      resolution: resolution
    }),
    catalog: catalog
  };
}
function ndi(r, fetchedAt = Date.now(), n = Math.random()) {
  return {
    ...r,
    fetchedAt: fetchedAt,
    staleAt: g(fetchedAt, n)
  };
}
function g(r, e) {
  return r + QYo(A3r, e);
}
function YCt(r, e = Date.now()) {
  let n = r.fetchedAt + A3r * (1 + x3r);
  return e < r.fetchedAt || e >= r.staleAt || r.staleAt > n;
}
var O = "tengu_delegated_quail",
  F = {
    mode: "off"
  };
function zqt({
  skipEssentialTrafficGate = !1
} = {}) {
  if (rs(i.CLAUDE_CODE_MODEL_CATALOG)) return "env_off";
  if (Nr()) return "bare";
  if (!skipEssentialTrafficGate && St()) return "essential_traffic";
  if (i.ANTHROPIC_UNIX_SOCKET) return "unix_socket";
  if (!us()) return "not_first_party";
  let e = v();
  if (e.scope === null) return e.reason;
  if (!gn("allow_model_catalog")) return "policy";
  return null;
}
function HBe() {
  if (zqt() !== null) return "off";
  return vtr("served");
}
function vtr(r) {
  let {
    value: value,
    source: source
  } = pn(O, F);
  return R(value, source, r);
}
function R(r, e, n) {
  return w(r, n);
}
function w(r, e) {
  switch (I(r, e)) {
    case "shadow":
      return "shadow";
    case "primary":
      return "primary";
    case "primary_fetch":
    case "primary_keep_picker":
      return e === "published" ? "primary" : "off";
    default:
      return "off";
  }
}
function I(r, e) {
  if (r === null || typeof r !== "object") return;
  let n;
  if (e === "served") n = "served" in r ? r.served : void 0;else n = "published" in r ? r.published : void 0;
  if (typeof n === "string") return n;
  return "mode" in r ? r.mode : void 0;
}
function U() {
  let r = i.CLAUDE_CODE_ORGANIZATION_UUID ?? hn()?.organizationUuid;
  return Nt(r)?.toLowerCase() ?? null;
}
var C = 12;
function v() {
  if (!Rt()) return x();
  let r = kE(),
    e = r === "store" ? Nt(hn()?.accountUuid) : Nt(i.CLAUDE_CODE_ACCOUNT_UUID),
    orgUuid = U();
  if (e !== null && orgUuid !== null) return {
    scope: {
      kind: "account",
      orgUuid: orgUuid,
      accountScope: nt(e.toLowerCase()).slice(0, C)
    }
  };
  switch (r) {
    case "env":
    case "fd":
      {
        let a = kyt();
        if (a === null) return {
          scope: null,
          reason: "no_account"
        };
        return {
          scope: {
            kind: "token",
            tokenScope: a.slice(0, C)
          }
        };
      }
    case "store":
    case "none":
      return {
        scope: null,
        reason: orgUuid === null ? "no_org" : "no_account"
      };
  }
}
function x() {
  if (!1) switch (r) {
    case "none":
    case "ANTHROPIC_API_KEY":
    case "/login managed key":
  }
  return {
    scope: null,
    reason: "not_claude_ai_auth"
  };
}
function rat() {
  if (!us()) return "third_party";
  if (Rt()) switch (kE()) {
    case "env":
    case "fd":
      return "host_token";
    case "store":
    case "none":
      return "claudeai_login";
  }
  if (Tg()) return "auth_token_env";
  switch (WBn().source) {
    case "ANTHROPIC_API_KEY":
      return "api_key_env";
    case "/login managed key":
      return "api_key_login";
    case "apiKeyHelper":
      return "api_key_helper";
    case "none":
      return L() ?? "none";
  }
}
function L() {
  if (!Sc()) return null;
  return awe() === "user_oauth" ? "profile_user_oauth" : "profile_federation";
}
function Fle() {
  return v().scope;
}
function Gne() {
  if (i.CLAUDE_CODE_REMOTE) return "ccr";
  if (id()) return "ccd";
  return "cc";
}
export { A3r, x3r, QYo, V6e, XOe, P3r, qCt, twn, edi, O3r, ZYo, nwn, tdi, ndi, YCt, zqt, HBe, vtr, rat, Fle, Gne };