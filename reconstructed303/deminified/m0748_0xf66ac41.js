// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { ws } from "B:/~BUN/root/chunk-rwkgcmm8.js";
import { Vt } from "B:/~BUN/root/chunk-9ka04m0y.js";
import { k, G } from "B:/~BUN/root/chunk-3aez4b53.js";
import { _, t } from "B:/~BUN/root/chunk-6za2ez23.js";
import { wr } from "B:/~BUN/root/chunk-fbyz9h0p.js";
import { pt } from "B:/~BUN/root/chunk-cqkcn3bx.js";
import { At } from "B:/~BUN/root/chunk-c09hf5e4.js";
import { f } from "B:/~BUN/root/chunk-frrkt2bs.js";
import { Or, Ma } from "B:/~BUN/root/chunk-8pmnanyd.js";
import { a } from "B:/~BUN/root/chunk-yt0knyw7.js";
import { fYn, Sln, wln, pc, Xb, jln, zC, Et, I0o, wn, pB, LD, k6n, En } from "B:/~BUN/root/chunk-hb6x4e3n.js";
import { IBn, Kct, qq, rRs, Men, MBn } from "B:/~BUN/root/chunk-dn8rakwm.js";
import { Cu } from "B:/~BUN/root/chunk-gyr2a6wz.js";
import { ide } from "B:/~BUN/root/chunk-pej55jax.js";
import { sn } from "B:/~BUN/root/chunk-zayh6xmh.js";
import { o, v, u, U, C } from "B:/~BUN/root/chunk-g3snhg6n.js";
import { st } from "B:/~BUN/root/chunk-7aw74be3.js";
import { join as l } from "path";
var version = 2,
  dcr = 3600000,
  ccr = 0.1;
function iZr(e, r) {
  return Math.round(e * (1 + ccr * (2 * r - 1)));
}
var y = f(() => u({
  version: C(version),
  fetchedAt: v(),
  staleAt: v(),
  etag: o().refine(qq).optional(),
  organizationUuid: o().refine(r => Vt(r)?.toLowerCase() === r).optional(),
  resolution: U(MBn).optional(),
  catalog: u({
    surface: U(IBn),
    config: rRs(),
    state: Men().optional()
  }).nullable()
}).transform(r => {
  if (r.etag === void 0 || r.catalog === null || !Sln(r.catalog)) return r;
  let {
    etag: etag,
    ...i
  } = r;
  return i;
}));
function oFe(e) {
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
function gbe(e) {
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
function ucr(e, r) {
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
function Qot(e, r) {
  switch (e.kind) {
    case "account":
      return l(LD(), `${e.orgUuid}-${e.accountScope}-${r}.json`);
    case "token":
      return l(LD(), `tok-${e.tokenScope}-${r}.json`);
    case "api_key":
      return l(LD(), `key-${e.keyScope}-${r}.json`);
    case "profile":
      return l(LD(), `prof-${e.profileScope}-${r}.json`);
    case "federation":
      return l(LD(), `fed-${e.federationScope}-${r}.json`);
  }
}
function d() {
  return Or().servedCatalogByKey;
}
function T6t(e, r) {
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
function Xss(e, r) {
  return d().get(T6t(e, r)) ?? void 0;
}
var s = Kct + 4096;
async function A(e) {
  let r;
  try {
    r = await pB().readRange(e, 0, s + 1);
  } catch (error) {
    if (!G(error)) t(`[servedCatalog] cache read failed: ${k(error) ?? "unknown"}`);
    return;
  }
  if (r.length > s) return t("[servedCatalog] cache file oversized"), "invalid";
  let n = y().safeParse(pt(r.toString("utf8"), !1));
  if (!n.success) return t("[servedCatalog] cache file invalid"), "invalid";
  return n.data;
}
async function pcr(e, r) {
  let n = T6t(e, r),
    i = d().get(n);
  if (i !== void 0) return i ?? void 0;
  let c = await A(Qot(e, r));
  if (c === void 0) {
    d().set(n, null);
    return;
  }
  if (c === "invalid" || c.catalog !== null && c.catalog.surface !== r) {
    t(`[servedCatalog] cache file ${c === "invalid" ? "invalid" : "holds another surface"}, discarding`), await aZr(e, r);
    return;
  }
  return await S(n, c), c;
}
async function aZr(e, r) {
  d().set(T6t(e, r), null);
  try {
    await pB().delete(Qot(e, r));
  } catch (error) {
    if (!G(error)) t(`[servedCatalog] cache delete failed: ${k(error) ?? "unknown"}`);
  }
}
async function C6t(e, r, n) {
  await S(T6t(e, r), n);
  try {
    let i = pB();
    await i.mkdir(LD()), await i.atomicWrite(Qot(e, r), _(n), 384);
  } catch (error) {
    t(`[servedCatalog] cache write failed: ${k(error) ?? "unknown"}`);
  }
}
async function S(e, r) {
  if (O(e, r), r.catalog !== null) await k6n(fYn(r.catalog));
}
function O(e, r) {
  if (d().set(e, r), r.catalog !== null) wln(r.catalog);
}
function Jss({
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
    ...(etag_2 !== void 0 && (catalog === null || !Sln(catalog)) && {
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
function Qss(e, fetchedAt = Date.now(), n = Math.random()) {
  return {
    ...e,
    fetchedAt: fetchedAt,
    staleAt: g(fetchedAt, n)
  };
}
function g(e, r) {
  return e + iZr(dcr, r);
}
function Zot(e, r = Date.now()) {
  let n = e.fetchedAt + dcr * (1 + ccr);
  return r < e.fetchedAt || r >= e.staleAt || e.staleAt > n;
}
var F = "tengu_delegated_quail",
  R = {
    mode: "off"
  };
function hCt({
  skipEssentialTrafficGate = !1
} = {}) {
  if (ws(a.CLAUDE_CODE_MODEL_CATALOG)) return "env_off";
  if (wr()) return "bare";
  if (!skipEssentialTrafficGate && At()) return "essential_traffic";
  if (a.ANTHROPIC_UNIX_SOCKET) return "unix_socket";
  if (!Ma()) return "not_first_party";
  let r = m();
  if (r.scope === null) return r.reason;
  if (!sn("allow_model_catalog")) return "policy";
  return null;
}
function nAe() {
  if (hCt() !== null) return "off";
  return est("served");
}
function est(e) {
  let {
    value: value,
    source: source
  } = En(F, R);
  return T(value, source, e);
}
function T(e, r, n) {
  return w(e, n);
}
function w(e, r) {
  switch (I(e, r)) {
    case "shadow":
      return "shadow";
    case "primary":
      return "primary";
    default:
      return "off";
  }
}
function I(e, r) {
  if (e === null || typeof e !== "object") return;
  let n;
  if (r === "served") n = "served" in e ? e.served : void 0;else n = "published" in e ? e.published : void 0;
  if (typeof n === "string") return n;
  return "mode" in e ? e.mode : void 0;
}
function x() {
  let e = a.CLAUDE_CODE_ORGANIZATION_UUID ?? wn()?.organizationUuid;
  return Vt(e)?.toLowerCase() ?? null;
}
var h = 12;
function m() {
  if (!Et()) return L();
  let e = zC(),
    r = e === "store" ? Vt(wn()?.accountUuid) : Vt(a.CLAUDE_CODE_ACCOUNT_UUID),
    orgUuid = x();
  if (r !== null && orgUuid !== null) return {
    scope: {
      kind: "account",
      orgUuid: orgUuid,
      accountScope: st(r.toLowerCase()).slice(0, h)
    }
  };
  switch (e) {
    case "env":
    case "fd":
      {
        let i = I0o();
        if (i === null) return {
          scope: null,
          reason: "no_account"
        };
        return {
          scope: {
            kind: "token",
            tokenScope: i.slice(0, h)
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
function L() {
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
function DKe() {
  if (!Ma()) return "third_party";
  if (Et()) switch (zC()) {
    case "env":
    case "fd":
      return "host_token";
    case "store":
    case "none":
      return "claudeai_login";
  }
  if (Xb()) return "auth_token_env";
  switch (jln().source) {
    case "ANTHROPIC_API_KEY":
      return "api_key_env";
    case "/login managed key":
      return "api_key_login";
    case "apiKeyHelper":
      return "api_key_helper";
    case "none":
      return D() ?? "none";
  }
}
function D() {
  if (!pc()) return null;
  return ide() === "user_oauth" ? "profile_user_oauth" : "profile_federation";
}
function O7() {
  return m().scope;
}
function M8() {
  if (a.CLAUDE_CODE_REMOTE) return "ccr";
  if (Cu()) return "ccd";
  return "cc";
}
export { dcr, ccr, iZr, oFe, gbe, ucr, Qot, T6t, Xss, pcr, aZr, C6t, Jss, Qss, Zot, hCt, nAe, est, DKe, O7, M8 };