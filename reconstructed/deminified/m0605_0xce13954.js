// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { v, B } from "B:/~BUN/root/chunk-bgthmgyc.js";
import { en } from "B:/~BUN/root/chunk-bvn0mpsk.js";
import { zo } from "B:/~BUN/root/chunk-ekrhn4q1.js";
import { b, t } from "B:/~BUN/root/chunk-qe2zga5e.js";
import { Xr } from "B:/~BUN/root/chunk-4p6z9qq1.js";
import { It } from "B:/~BUN/root/chunk-zs3ycjed.js";
import { Qt } from "B:/~BUN/root/chunk-bpp59nyd.js";
import { ct } from "B:/~BUN/root/chunk-tsjnk8ma.js";
import { f } from "B:/~BUN/root/chunk-zv3zxqya.js";
import { Hr, Ydn, KNt, YNt, ed, P0, YNr, aC, pt, uHr, An, Ex, Yun, ia } from "B:/~BUN/root/chunk-gf53qpk6.js";
import { a } from "B:/~BUN/root/chunk-nkmmqnq7.js";
import { $l } from "B:/~BUN/root/chunk-sd4cj2qx.js";
import { Mnn, SKe, _B, lSo, hIt, Dnn } from "B:/~BUN/root/chunk-1mdeqc2r.js";
import { Kt } from "B:/~BUN/root/chunk-9fcn5kmc.js";
import { zc } from "B:/~BUN/root/chunk-snmb1kqg.js";
import { E5e } from "B:/~BUN/root/chunk-ceg1zct0.js";
import { Xt } from "B:/~BUN/root/chunk-3hjtxzqy.js";
import { o, E, u, z, A } from "B:/~BUN/root/chunk-n8qdr73v.js";
import { join as l } from "path";
var version = 2,
  IAn = 3600000,
  OAn = 0.1;
function vdr(e, r) {
  return Math.round(e * (1 + OAn * (2 * r - 1)));
}
var m = f(() => u({
  version: A(version),
  fetchedAt: E(),
  staleAt: E(),
  etag: o().refine(_B).optional(),
  organizationUuid: o().refine(r => en(r)?.toLowerCase() === r).optional(),
  resolution: z(Dnn).optional(),
  catalog: u({
    surface: z(Mnn),
    config: lSo(),
    state: hIt().optional()
  }).nullable()
}).transform(r => {
  if (r.etag === void 0 || r.catalog === null || !KNt(r.catalog)) return r;
  let {
    etag: etag,
    ...i
  } = r;
  return i;
}));
function owe(e) {
  switch (e.kind) {
    case "account":
      return "org";
    case "token":
    case "api_key":
    case "profile":
    case "federation":
      return "orgless";
  }
}
function Zoe(e) {
  switch (e.kind) {
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
function MAn(e, r) {
  if (e === null || r === null) return !1;
  switch (e.kind) {
    case "account":
      return r.kind === "account" && e.orgUuid === r.orgUuid && e.accountScope === r.accountScope;
    case "token":
      return r.kind === "token" && e.tokenScope === r.tokenScope;
    case "api_key":
      return r.kind === "api_key" && e.keyScope === r.keyScope;
    case "profile":
      return r.kind === "profile" && e.profileScope === r.profileScope;
    case "federation":
      return r.kind === "federation" && e.federationScope === r.federationScope;
  }
}
function Kze(e, r) {
  switch (e.kind) {
    case "account":
      return l(Ex(), `${e.orgUuid}-${e.accountScope}-${r}.json`);
    case "token":
      return l(Ex(), `tok-${e.tokenScope}-${r}.json`);
    case "api_key":
      return l(Ex(), `key-${e.keyScope}-${r}.json`);
    case "profile":
      return l(Ex(), `prof-${e.profileScope}-${r}.json`);
    case "federation":
      return l(Ex(), `fed-${e.federationScope}-${r}.json`);
  }
}
function d() {
  return Hr().servedCatalogByKey;
}
function akt(e, r) {
  switch (e.kind) {
    case "account":
      return `${e.orgUuid}:${e.accountScope}:${r}`;
    case "token":
      return `tok:${e.tokenScope}:${r}`;
    case "api_key":
      return `key:${e.keyScope}:${r}`;
    case "profile":
      return `prof:${e.profileScope}:${r}`;
    case "federation":
      return `fed:${e.federationScope}:${r}`;
  }
}
function Yoo(e, r) {
  return d().get(akt(e, r)) ?? void 0;
}
var s = SKe + 4096;
async function y(e) {
  let r;
  try {
    r = await Qt().readRange(e, 0, s + 1);
  } catch (error) {
    if (!B(error)) t(`[servedCatalog] cache read failed: ${v(error) ?? "unknown"}`);
    return;
  }
  if (r.length > s) return t("[servedCatalog] cache file oversized"), "invalid";
  let n = m().safeParse(ct(r.toString("utf8"), !1));
  if (!n.success) return t("[servedCatalog] cache file invalid"), "invalid";
  return n.data;
}
async function DAn(e, r) {
  let n = akt(e, r),
    i = d().get(n);
  if (i !== void 0) return i ?? void 0;
  let c = await y(Kze(e, r));
  if (c === void 0) {
    d().set(n, null);
    return;
  }
  if (c === "invalid" || c.catalog !== null && c.catalog.surface !== r) {
    t(`[servedCatalog] cache file ${c === "invalid" ? "invalid" : "holds another surface"}, discarding`), await kdr(e, r);
    return;
  }
  return await S(n, c), c;
}
async function kdr(e, r) {
  d().set(akt(e, r), null);
  try {
    await Qt().delete(Kze(e, r));
  } catch (error) {
    if (!B(error)) t(`[servedCatalog] cache delete failed: ${v(error) ?? "unknown"}`);
  }
}
async function lkt(e, r, n) {
  await S(akt(e, r), n);
  try {
    let i = Qt();
    await i.mkdir(Ex()), await i.atomicWrite(Kze(e, r), b(n), 384);
  } catch (error) {
    t(`[servedCatalog] cache write failed: ${v(error) ?? "unknown"}`);
  }
}
async function S(e, r) {
  if (d().set(e, r), r.catalog !== null) YNt(r.catalog), await Yun(Ydn(r.catalog));
}
function Xoo({
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
    ...(etag_2 !== void 0 && (catalog === null || !KNt(catalog)) && {
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
function Joo(e, fetchedAt = Date.now(), n = Math.random()) {
  return {
    ...e,
    fetchedAt: fetchedAt,
    staleAt: g(fetchedAt, n)
  };
}
function g(e, r) {
  return e + vdr(IAn, r);
}
function Yze(e, r = Date.now()) {
  let n = e.fetchedAt + IAn * (1 + OAn);
  return r < e.fetchedAt || r >= e.staleAt || e.staleAt > n;
}
var k = "tengu_delegated_quail",
  O = {
    mode: "off"
  };
function QZe({
  skipEssentialTrafficGate = !1
} = {}) {
  if (zo(a.CLAUDE_CODE_MODEL_CATALOG)) return "env_off";
  if (Xr()) return "bare";
  if (!skipEssentialTrafficGate && It()) return "essential_traffic";
  if (a.ANTHROPIC_UNIX_SOCKET) return "unix_socket";
  if (!$l()) return "not_first_party";
  let r = C();
  if (r.scope === null) return r.reason;
  if (!Xt("allow_model_catalog")) return "policy";
  return null;
}
function Ape() {
  if (QZe() !== null) return "off";
  return Xze("served");
}
function Xze(e) {
  let {
    value: value,
    source: source
  } = ia(k, O);
  return F(value, source, e);
}
function F(e, r, n) {
  return R(e, n);
}
function R(e, r) {
  switch (T(e, r)) {
    case "shadow":
      return "shadow";
    case "primary":
      return "primary";
    default:
      return "off";
  }
}
function T(e, r) {
  if (e === null || typeof e !== "object") return;
  let n;
  if (r === "served") n = "served" in e ? e.served : void 0;else n = "published" in e ? e.published : void 0;
  if (typeof n === "string") return n;
  return "mode" in e ? e.mode : void 0;
}
function w() {
  let e = a.CLAUDE_CODE_ORGANIZATION_UUID ?? An()?.organizationUuid;
  return en(e)?.toLowerCase() ?? null;
}
var _ = 12;
function C() {
  if (!pt()) return I();
  let e = aC(),
    r = e === "store" ? en(An()?.accountUuid) : en(a.CLAUDE_CODE_ACCOUNT_UUID),
    orgUuid = w();
  if (r !== null && orgUuid !== null) return {
    scope: {
      kind: "account",
      orgUuid: orgUuid,
      accountScope: Kt(r.toLowerCase()).slice(0, _)
    }
  };
  switch (e) {
    case "env":
    case "fd":
      {
        let i = uHr();
        if (i === null) return {
          scope: null,
          reason: "no_account"
        };
        return {
          scope: {
            kind: "token",
            tokenScope: i.slice(0, _)
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
function I() {
  if (!1) switch (e) {
    case "none":
    case "ANTHROPIC_API_KEY":
    case "/login managed key":
  }
  return {
    scope: null,
    reason: "not_claude_ai_auth"
  };
}
function jOe() {
  if (!$l()) return "third_party";
  if (pt()) switch (aC()) {
    case "env":
    case "fd":
      return "host_token";
    case "store":
    case "none":
      return "claudeai_login";
  }
  if (P0()) return "auth_token_env";
  switch (YNr().source) {
    case "ANTHROPIC_API_KEY":
      return "api_key_env";
    case "/login managed key":
      return "api_key_login";
    case "apiKeyHelper":
      return "api_key_helper";
    case "none":
      return U() ?? "none";
  }
}
function U() {
  if (!ed()) return null;
  return E5e() === "user_oauth" ? "profile_user_oauth" : "profile_federation";
}
function _4() {
  return C().scope;
}
function _G() {
  if (a.CLAUDE_CODE_REMOTE) return "ccr";
  if (zc()) return "ccd";
  return "cc";
}
export { IAn, OAn, vdr, owe, Zoe, MAn, Kze, akt, Yoo, DAn, kdr, lkt, Xoo, Joo, Yze, QZe, Ape, Xze, jOe, _4, _G };