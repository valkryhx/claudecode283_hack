// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.303
import {
  $Cn,
  lar,
  dar,
  OP,
  tot,
  yNe,
  i4t,
  a4t,
  IP,
  hoe,
  PRe,
  car,
  QEt,
  V9r,
  K9r
} from "B:/~BUN/root/chunk-ntnsdnjk.js";
import {
  Ct
} from "B:/~BUN/root/chunk-28dw3zbk.js";
import {
  de
} from "B:/~BUN/root/chunk-rpez7z7a.js";
import {
  b,
  c,
  pe,
  tY
} from "B:/~BUN/root/chunk-jthpk6wv.js";
import {
  Ve,
  x,
  d,
  k
} from "B:/~BUN/root/chunk-3aez4b53.js";
import {
  Y
} from "B:/~BUN/root/chunk-89mss1tj.js";
import {
  wGe
} from "B:/~BUN/root/chunk-jpdys232.js";
import {
  _,
  J,
  se
} from "B:/~BUN/root/chunk-6za2ez23.js";
import {
  a
} from "B:/~BUN/root/chunk-yt0knyw7.js";
import {
  re
} from "B:/~BUN/root/chunk-c09hf5e4.js";
import {
  I
} from "B:/~BUN/root/chunk-je1b1drr.js";
import {
  i
} from "B:/~BUN/root/chunk-1kfn24jp.js";
import {
  g,
  m,
  p
} from "B:/~BUN/root/chunk-kzgf20y6.js";
import {
  dl
} from "B:/~BUN/root/chunk-7c8rc0p5.js";
import {
  ra
} from "B:/~BUN/root/chunk-07c8fw5z.js";
import {
  wl,
  qn,
  AB,
  S2,
  yg
} from "B:/~BUN/root/chunk-245a2x6v.js";
import {
  jx,
  GD
} from "B:/~BUN/root/chunk-q4sexgb0.js";
import {
  Ft
} from "B:/~BUN/root/chunk-ejm0pmyj.js";
import {
  Ice
} from "B:/~BUN/root/chunk-hds3n5r0.js";
import {
  f
} from "B:/~BUN/root/chunk-frrkt2bs.js";
import {
  mB,
  Dte,
  Sge,
  md,
  RJe,
  AJe
} from "B:/~BUN/root/chunk-hb6x4e3n.js";
import {
  LL
} from "B:/~BUN/root/chunk-qp5mhwjf.js";
import {
  ah,
  LEt,
  DL
} from "B:/~BUN/root/chunk-jynk66qn.js";
import {
  zqe,
  ERe
} from "B:/~BUN/root/chunk-bx04wv39.js";
import {
  Nce,
  FCn,
  hT,
  to,
  NL,
  FL
} from "B:/~BUN/root/chunk-71zxaep1.js";
import {
  Ik
} from "B:/~BUN/root/chunk-9grc6xh0.js";
import {
  cTn,
  Fir,
  Hir,
  uTn,
  l9r
} from "B:/~BUN/root/chunk-61ytxz4j.js";
import {
  kRe,
  iCn,
  aCn,
  MEt,
  Pce,
  lCn,
  dCn
} from "B:/~BUN/root/chunk-0zx5qj65.js";
import {
  $G,
  Hs
} from "B:/~BUN/root/chunk-ac9kwvf4.js";
import {
  L0e
} from "B:/~BUN/root/chunk-9j3awrp0.js";
import {
  o,
  u
} from "B:/~BUN/root/chunk-g3snhg6n.js";
import {
  ye
} from "B:/~BUN/root/chunk-shj1mfyk.js";
import {
  randomBytes as Ge,
  randomUUID as qe
} from "crypto";
import {
  createServer as Je
} from "http";
import {
  join as Ye
} from "path";
import {
  parse as Ze
} from "url";
var Le = 30000,
  Fe = "urn:ietf:params:oauth:grant-type:token-exchange",
  Ce = "urn:ietf:params:oauth:grant-type:jwt-bearer",
  Te = "urn:ietf:params:oauth:token-type:id-jag",
  ze = "urn:ietf:params:oauth:token-type:id_token";

function Ue(e) {
  return (t, r) => {
    let n = AbortSignal.timeout(Le),
      l = e ? AbortSignal.any([n, e]) : n;
    return fetch(t, {
      ...r,
      ...ra({
        url: String(t)
      }),
      signal: l
    }).catch((h) => FL(h, t))
  }
}
var oe = Ue();

function ie(e) {
  try {
    return new URL(e).href.replace(/\/$/, "")
  } catch {
    return e.replace(/\/$/, "")
  }
}
class K extends Error {
  shouldClearIdToken;
  constructor(e, t) {
    super(e);
    this.name = "XaaTokenExchangeError", this.shouldClearIdToken = t
  }
}
var De = /"(access_token|refresh_token|id_token|assertion|subject_token|client_secret)"\s*:\s*"[^"]*"/g;

function te(e) {
  return (typeof e === "string" ? e : _(e)).replace(De, (r, n) => `"${n}":"[REDACTED]"`)
}
var Xe = f(() => u({
    access_token: o().optional(),
    issued_token_type: o().optional(),
    expires_in: L0e().optional(),
    scope: o().optional()
  })),
  He = f(() => u({
    access_token: o().min(1),
    token_type: o().default("Bearer"),
    expires_in: L0e().optional(),
    scope: o().optional(),
    refresh_token: o().optional()
  }));
async function je(e, t) {
  let r;
  try {
    r = await car(e, void 0, t?.fetchFn ?? oe)
  } catch (n) {
    if (Ve(n)) throw n;
    let l = n instanceof Error ? /^HTTP (\d{3}) /.exec(n.message)?.[1] : void 0;
    throw Error(`XAA: PRM discovery failed for ${to(e)} (${l?`HTTP ${l}`:n instanceof Error?n.name:typeof n})`)
  }
  if (!r.resource || !r.authorization_servers?.[0]) throw Error("XAA: PRM discovery failed: PRM missing resource or authorization_servers");
  if (ie(r.resource) !== ie(e)) throw Error(`XAA: PRM discovery failed: PRM resource mismatch: expected ${to(e)}, got ${to(r.resource)}`);
  return {
    resource: r.resource,
    authorization_servers: r.authorization_servers
  }
}
async function Be(e, t) {
  let r;
  try {
    r = await QEt(e, {
      fetchFn: t?.fetchFn ?? oe
    })
  } catch (n) {
    if (Ve(n)) throw n;
    let l = n instanceof Error ? /^HTTP (\d{3}) /.exec(n.message)?.[1] : void 0;
    throw new x(`XAA: AS metadata discovery failed (${l?`HTTP ${l}`:n instanceof Error?n.name:typeof n})`, "XAA: AS metadata discovery failed")
  }
  if (!r?.issuer || !r.token_endpoint) throw Error(`XAA: AS metadata discovery failed: no valid metadata at ${to(e)}`);
  if (ie(r.issuer) !== ie(e)) throw Error(`XAA: AS metadata discovery failed: issuer mismatch: expected ${to(e)}, got ${to(r.issuer)}`);
  if (!URL.canParse(r.token_endpoint) || new URL(r.token_endpoint).protocol !== "https:") throw Error(`XAA: refusing non-HTTPS token endpoint: ${to(r.token_endpoint)}`);
  return {
    issuer: r.issuer,
    token_endpoint: r.token_endpoint,
    grant_types_supported: r.grant_types_supported,
    token_endpoint_auth_methods_supported: r.token_endpoint_auth_methods_supported
  }
}
async function Ke(e) {
  let t = e.fetchFn ?? oe,
    r = new URLSearchParams({
      grant_type: Fe,
      requested_token_type: Te,
      audience: e.audience,
      resource: e.resource,
      subject_token: e.idToken,
      subject_token_type: ze,
      client_id: e.clientId
    });
  if (e.clientSecret) r.set("client_secret", e.clientSecret);
  if (e.scope) r.set("scope", e.scope);
  let n = await t(e.tokenEndpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    },
    body: r
  });
  if (!n.ok) {
    let S = te(await n.text()).slice(0, 200),
      v = n.status < 500;
    throw new K(`XAA: token exchange failed: HTTP ${n.status}: ${S}`, v)
  }
  let l;
  try {
    l = await n.json()
  } catch {
    throw new K(`XAA: token exchange returned non-JSON (captive portal?) at ${to(e.tokenEndpoint)}`, !1)
  }
  let h = Xe().safeParse(l);
  if (!h.success) throw new K(`XAA: token exchange response did not match expected shape: ${te(l)}`, !0);
  let s = h.data;
  if (!s.access_token) throw new K(`XAA: token exchange response missing access_token: ${te(s)}`, !0);
  if (s.issued_token_type !== Te) throw new K(`XAA: token exchange returned unexpected issued_token_type: ${s.issued_token_type}`, !0);
  return {
    jwtAuthGrant: s.access_token,
    expiresIn: s.expires_in,
    scope: s.scope
  }
}
async function We(e) {
  let t = e.fetchFn ?? oe,
    r = e.authMethod ?? "client_secret_basic",
    n = new URLSearchParams({
      grant_type: Ce,
      assertion: e.assertion
    });
  if (e.scope) n.set("scope", e.scope);
  let l = {
    "Content-Type": "application/x-www-form-urlencoded"
  };
  if (r === "client_secret_basic") {
    let v = Buffer.from(`${encodeURIComponent(e.clientId)}:${encodeURIComponent(e.clientSecret)}`).toString("base64");
    l.Authorization = `Basic ${v}`, ah().record(v)
  } else n.set("client_id", e.clientId), n.set("client_secret", e.clientSecret);
  ah().record(e.clientSecret), ah().record(e.assertion);
  let h = await t(e.tokenEndpoint, {
    method: "POST",
    headers: l,
    body: n
  });
  if (!h.ok) {
    let v = te(await h.text()).slice(0, 200);
    throw Error(`XAA: jwt-bearer grant failed: HTTP ${h.status}: ${v}`)
  }
  let s;
  try {
    s = await h.json()
  } catch {
    throw Error(`XAA: jwt-bearer grant returned non-JSON (captive portal?) at ${to(e.tokenEndpoint)}`)
  }
  let S = He().safeParse(s);
  if (!S.success) throw Error(`XAA: jwt-bearer response did not match expected shape: ${te(s)}`);
  return S.data
}
async function he(e, t, r = "xaa", n) {
  let l = Ue(n);
  re(r, `XAA: discovering PRM for ${to(e)}`);
  let h = await je(e, {
    fetchFn: l
  });
  re(r, `XAA: discovered resource=${to(h.resource)} ASes=[${h.authorization_servers.map(to).join(", ")}]`);
  let s, S = [];
  for (let y of h.authorization_servers) {
    let R;
    try {
      R = await Be(y, {
        fetchFn: l
      })
    } catch (M) {
      if (n?.aborted) throw M;
      S.push(`${to(y)}: ${M instanceof Error?M.message:String(M)}`);
      continue
    }
    if (R.grant_types_supported && !R.grant_types_supported.includes(Ce)) {
      S.push(`${to(y)}: does not advertise jwt-bearer grant (supported: ${R.grant_types_supported.join(", ")})`);
      continue
    }
    s = R;
    break
  }
  if (!s) throw new x(`XAA: no authorization server supports jwt-bearer. Tried: ${S.join("; ")}`, `XAA: no authorization server supports jwt-bearer (tried ${h.authorization_servers.length})`);
  let v = s.token_endpoint_auth_methods_supported,
    A = v && !v.includes("client_secret_basic") && v.includes("client_secret_post") ? "client_secret_post" : "client_secret_basic";
  re(r, `XAA: AS issuer=${to(s.issuer)} token_endpoint=${to(s.token_endpoint)} auth_method=${A}`), re(r, "XAA: exchanging id_token for ID-JAG at IdP");
  let w = await Ke({
    tokenEndpoint: t.idpTokenEndpoint,
    audience: s.issuer,
    resource: h.resource,
    idToken: t.idpIdToken,
    clientId: t.idpClientId,
    clientSecret: t.idpClientSecret,
    fetchFn: l
  });
  re(r, "XAA: ID-JAG obtained"), re(r, "XAA: exchanging ID-JAG for access_token at AS");
  let C = await We({
    tokenEndpoint: s.token_endpoint,
    assertion: w.jwtAuthGrant,
    clientId: t.clientId,
    clientSecret: t.clientSecret,
    authMethod: A,
    fetchFn: l
  });
  return re(r, "XAA: access_token obtained"), {
    ...C,
    authorizationServerUrl: s.issuer
  }
}
var Qe = 30000,
  et = 500,
  tt = new Set([...S2, ...AB, "ETIMEDOUT"]);

function rt(e) {
  if (Ve(e)) return !0;
  if (e instanceof Error && e.name === "TimeoutError") return !0;
  let t = yg(e);
  return t !== null && tt.has(t.code)
}

function _e(e) {
  let t = e;
  return (t?.name === "ZodError" || t?.name === "$ZodError") && Array.isArray(t?.issues)
}
var nt = ["invalid_request", "invalid_client", "invalid_grant", "unauthorized_client", "unsupported_grant_type", "invalid_scope", "access_denied", "server_error", "temporarily_unavailable", "unsupported_response_type", "unsupported_token_type", "invalid_token", "method_not_allowed", "too_many_requests", "invalid_client_metadata", "insufficient_scope", "invalid_target", "authorization_pending", "expired_token", "slow_down"];

function q5s(e) {
  let t = nt.find((r) => r === e);
  return pe(t) ?? b("other")
}

function K5s(e, t) {
  let r = t instanceof Error ? `${e}
${t.message}` : e;
  if (r.includes("dynamic client registration") || t instanceof OP && t.errorCode === "invalid_client_metadata") return "dcr_failed";
  if (r.includes("trying to load") && r.includes("metadata") || r.includes("Incompatible auth server")) return "discovery_failed";
  if (t instanceof OP) return "dcr_rejected";
  let n = k(t) ?? k(t instanceof Error ? t.cause : void 0);
  if (n && AJe.has(n)) return "network_failed";
  return "sdk_auth_failed"
}
var fe = 5;

function ues(e) {
  return to(e.origin + e.pathname) + FCn(e)
}
var it = new Set(["invalid_refresh_token", "expired_refresh_token", "token_expired"]);
async function pes(e) {
  if (!e.ok) return e;
  let t = await e.text(),
    r;
  try {
    r = J(t)
  } catch {
    return new Response(t, e)
  }
  if (lar.safeParse(r).success) return new Response(t, e);
  let n = dar.safeParse(r);
  if (!n.success) return new Response(t, e);
  let l = it.has(n.data.error) ? {
    error: "invalid_grant",
    error_description: n.data.error_description ?? `Server returned non-standard error code: ${n.data.error}`
  } : n.data;
  return new Response(_(l), {
    status: 400,
    statusText: "Bad Request",
    headers: e.headers
  })
}

function hKt() {
  return async (e, t) => {
    try {
      return await Oe(e, t)
    } catch (r) {
      if (t?.signal?.aborted || !rt(r)) throw r;
      return await Y(et, t?.signal ?? void 0), await Oe(e, t)
    }
  }
}
async function Oe(e, t) {
  let r = AbortSignal.timeout(Qe),
    n = t?.method?.toUpperCase() === "POST",
    l = ra({
      url: String(e)
    });
  if (!t?.signal) {
    let v;
    try {
      v = await fetch(e, {
        ...t,
        ...l,
        signal: r
      })
    } catch (A) {
      FL(A, e)
    }
    return n ? pes(v) : v
  }
  let h = new AbortController,
    s = () => h.abort();
  t.signal.addEventListener("abort", s), r.addEventListener("abort", s);
  let S = () => {
    t.signal?.removeEventListener("abort", s), r.removeEventListener("abort", s)
  };
  if (t.signal.aborted) h.abort();
  try {
    let v = await fetch(e, {
      ...t,
      ...l,
      signal: h.signal
    });
    return S(), n ? pes(v) : v
  } catch (v) {
    S(), FL(v, e)
  }
}
async function ae(e, t, r) {
  let {
    configuredMetadataUrl: n,
    fetchFn: l,
    resourceMetadataUrl: h
  } = r ?? {}, s = l ?? hKt();
  if (n) {
    if (!n.startsWith("https://")) throw Error(`authServerMetadataUrl must use https:// (got: ${to(n)})`);
    let v = await s(n, {
      headers: {
        Accept: "application/json"
      }
    });
    if (v.ok) {
      let A;
      try {
        A = await v.json()
      } catch {
        throw Error(`Configured auth server metadata at ${to(n)} is not valid JSON`)
      }
      return $Cn.parse(A)
    }
    throw Error(`HTTP ${v.status} fetching configured auth server metadata from ${to(n)}`)
  }
  try {
    let {
      authorizationServerMetadata: v
    } = await V9r(t, {
      fetchFn: s,
      ...h && {
        resourceMetadataUrl: h
      }
    });
    if (v) return v
  } catch (v) {
    re(e, `RFC 9728 discovery failed, falling back: ${NL(v,t)}`)
  }
  let S = new URL(t);
  if (S.pathname === "/") return;
  try {
    return await QEt(S, {
      fetchFn: s
    })
  } catch (v) {
    re(e, `Path-aware auth server discovery failed: ${NL(v,t)}`);
    return
  }
}
class fes extends IP {
  serverName;
  constructor(e) {
    super("Authentication required; client registration is deferred until the user authenticates");
    this.serverName = e;
    this.name = "McpClientRegistrationDeferredError"
  }
}
class yKt extends Error {
  constructor() {
    super("Authentication was cancelled");
    this.name = "AuthenticationCancelledError"
  }
}

function me(e) {
  try {
    let t = new URL(e);
    return `${t.protocol}//${t.hostname}`
  } catch {
    return e
  }
}

function Me(e) {
  let t = me(e);
  return t === "http://127.0.0.1" || t === "http://localhost"
}

function Re(e) {
  if (!e?.clientId || !e.redirectUri || !Me(e.redirectUri)) return;
  let t = Number(new URL(e.redirectUri).port);
  return t && e.redirectUri.replace("//127.0.0.1:", "//localhost:") === zqe(t) ? t : void 0
}

function Ie() {
  return a.MCP_OAUTH_CLIENT_METADATA_URL || wGe
}

function Ee(e) {
  if (!Me(e)) return !1;
  try {
    return new URL(e).pathname === "/callback"
  } catch {
    return !1
  }
}

function st(e) {
  return e !== void 0 && (e === wGe || e === Ie())
}

function qti(e) {
  return Ft().oauthCallbackSubmitters.get(e)
}

function Kti(e, t) {
  let r = Ft().activeOAuthFlows;
  r.set(e, t), t.finally(() => {
    if (r.get(e) === t) r.delete(e)
  }).catch(() => {})
}

function Yti(e) {
  return Ft().activeOAuthFlows.get(e)
}
async function Nir(e, t) {
  let r = md(e, t),
    n = (await qn().readAsync())?.mcpOAuth?.[r];
  if (!n || n.accessToken || n.refreshToken) return;
  try {
    await qn().mutate((l) => {
      let h = l.mcpOAuth?.[r];
      if (!h || h.accessToken || h.refreshToken) return l;
      let s = {
        ...l.mcpOAuth
      };
      return delete s[r], {
        ...l,
        mcpOAuth: s
      }
    })
  } catch (l) {
    re(e, `clear tokenless stub failed: ${d(l)}`)
  }
}
async function be({
  serverName: e,
  endpoint: t,
  token: r,
  tokenTypeHint: n,
  clientId: l,
  clientSecret: h,
  accessToken: s,
  authMethod: S = "client_secret_basic",
  configuredHeaders: v
}) {
  let A = new URLSearchParams;
  A.set("token", r), A.set("token_type_hint", n);
  let w = {
      ...v,
      "Content-Type": "application/x-www-form-urlencoded"
    },
    C = Object.keys(v).length > 0 ? {
      beforeRedirect: dCn(t)
    } : {};
  if (l && h)
    if (S === "client_secret_post") A.set("client_id", l), A.set("client_secret", h);
    else {
      let y = Buffer.from(`${encodeURIComponent(l)}:${encodeURIComponent(h)}`).toString("base64");
      w.Authorization = `Basic ${y}`, ah().record(y)
    }
  else if (l) A.set("client_id", l);
  else re(e, `No client_id available for ${n} revocation - server may reject`);
  try {
    await Ct.post(t, A, {
      headers: w,
      ...C
    }), re(e, `Successfully revoked ${n}`)
  } catch (y) {
    if (Ct.isAxiosError(y) && y.response?.status === 401 && s) re(e, `Got 401, retrying ${n} revocation with Bearer auth`), A.delete("client_id"), A.delete("client_secret"), await Ct.post(t, A, {
      headers: {
        ...w,
        Authorization: `Bearer ${s}`
      },
      ...C
    }), re(e, `Successfully revoked ${n} with Bearer auth`);
    else throw y
  }
}
async function Xti(e, t) {
  let n = (await qn().readAsync())?.mcpOAuth?.[md(e, t)];
  if (!n?.accessToken && !n?.refreshToken) return;
  return {
    accessToken: n.accessToken || void 0,
    refreshToken: n.refreshToken,
    clientId: n.clientId,
    clientSecret: n.clientSecret,
    ...n.discoveryState && {
      discoveryState: kRe(n.discoveryState)
    }
  }
}
async function Pe(e, t, r) {
  let n = ah();
  n.record(r.accessToken), n.record(r.refreshToken), n.record(r.clientSecret);
  let l;
  try {
    let h = r.discoveryState?.authorizationServerUrl ?? t.url,
      s = await ae(e, h, {
        configuredMetadataUrl: t.oauth?.authServerMetadataUrl,
        fetchFn: Pce(e, t, hKt())
      });
    if (!s) re(e, "No OAuth metadata found"), l = "no_metadata";
    else {
      let S = "revocation_endpoint" in s ? s.revocation_endpoint : null;
      if (!S) re(e, "Server does not support token revocation"), l = "no_revocation_endpoint";
      else {
        let v = String(S),
          A = await lCn(e, t, v),
          w = ("revocation_endpoint_auth_methods_supported" in s ? s.revocation_endpoint_auth_methods_supported : void 0) ?? ("token_endpoint_auth_methods_supported" in s ? s.token_endpoint_auth_methods_supported : void 0),
          C = w && !w.includes("client_secret_basic") && w.includes("client_secret_post") ? "client_secret_post" : "client_secret_basic";
        if (re(e, `Revoking tokens via ${to(v)} (${C})`), r.refreshToken) try {
          await be({
            serverName: e,
            endpoint: v,
            token: r.refreshToken,
            tokenTypeHint: "refresh_token",
            clientId: r.clientId,
            clientSecret: r.clientSecret,
            accessToken: r.accessToken,
            authMethod: C,
            configuredHeaders: A
          })
        } catch (y) {
          re(e, `Failed to revoke refresh token: ${d(y)}`), l = "server_revoke_failed"
        }
        if (r.accessToken) try {
          await be({
            serverName: e,
            endpoint: v,
            token: r.accessToken,
            tokenTypeHint: "access_token",
            clientId: r.clientId,
            clientSecret: r.clientSecret,
            accessToken: r.accessToken,
            authMethod: C,
            configuredHeaders: A
          })
        } catch (y) {
          re(e, `Failed to revoke access token: ${d(y)}`), l = "server_revoke_failed"
        }
      }
    }
  } catch (h) {
    re(e, `Failed to revoke tokens: ${d(h)}`), l = "server_revoke_failed"
  }
  return l
}
async function Jti(e, t, r) {
  let n;
  try {
    let l = (await qn().readAsync())?.mcpOAuth?.[md(e, t)],
      h = {
        ...r,
        accessToken: r.accessToken && r.accessToken !== l?.accessToken ? r.accessToken : void 0,
        refreshToken: r.refreshToken && r.refreshToken !== l?.refreshToken ? r.refreshToken : void 0
      };
    if (!h.accessToken && !h.refreshToken) {
      re(e, "No replaced tokens to revoke"), g("mcp_oauth_revoke");
      return
    }
    n = await Pe(e, t, h)
  } catch (l) {
    re(e, `Failed to revoke replaced tokens: ${d(l)}`), n = "server_revoke_failed"
  }
  if (n) p("mcp_oauth_revoke", n);
  else g("mcp_oauth_revoke")
}
async function Qti(e, t, {
  preserveStepUpState: r = !1
} = {}) {
  let n = qn(),
    l = await n.readAsync();
  if (!l?.mcpOAuth) {
    g("mcp_oauth_revoke");
    return
  }
  let h = md(e, t),
    s = l.mcpOAuth[h],
    S;
  if (s?.accessToken || s?.refreshToken) S = await Pe(e, t, {
    accessToken: s.accessToken || void 0,
    refreshToken: s.refreshToken,
    clientId: s.clientId,
    clientSecret: s.clientSecret,
    ...s.discoveryState && {
      discoveryState: kRe(s.discoveryState)
    }
  });
  else re(e, "No tokens to revoke");
  try {
    if (r && s && (s.stepUpScope || s.discoveryState || s.clientId)) await n.mutate((v) => {
      let A = v.mcpOAuth?.[h];
      if (A?.accessToken !== s.accessToken || A?.clientId !== s.clientId) return v;
      return {
        ...v,
        mcpOAuth: {
          ...v.mcpOAuth,
          [h]: {
            serverName: e,
            serverUrl: t.url,
            accessToken: "",
            refreshToken: void 0,
            expiresAt: void 0,
            ...s.clientId && {
              clientId: s.clientId,
              ...s.redirectUri && {
                redirectUri: s.redirectUri
              },
              ...s.clientSecret !== void 0 && {
                clientSecret: s.clientSecret
              }
            },
            ...s.stepUpScope && {
              stepUpScope: s.stepUpScope
            },
            ...s.discoveryState && {
              discoveryState: {
                ...kRe(s.discoveryState),
                resourceMetadataUrl: s.discoveryState.resourceMetadataUrl
              }
            }
          }
        }
      }
    }), re(e, "Preserved step-up auth state across revocation");
    else await mes(e, t)
  } catch (v) {
    re(e, `clear local tokens failed: ${d(v)}`), S ??= "local_clear_failed"
  }
  if (DL(e), S) p("mcp_oauth_revoke", S);
  else g("mcp_oauth_revoke")
}
async function mes(e, t, r) {
  let n = md(e, t),
    l;
  if (await qn().mutate((h) => {
      let s = h.mcpOAuth?.[n];
      if (!s) return h;
      let S = {
        ...h.mcpOAuth
      };
      if (s.clientId && r?.preserveClientRegistration?.(s)) {
        if (!s.accessToken && !s.refreshToken) return h;
        S[n] = {
          ...s,
          accessToken: "",
          refreshToken: void 0,
          expiresAt: 0,
          scope: void 0
        }, l = "tokens"
      } else delete S[n], l = "all";
      return {
        ...h,
        mcpOAuth: S
      }
    }), l) re(e, l === "tokens" ? "Cleared stored tokens (preserved client registration)" : "Cleared stored tokens")
}

function xe(e, t, r, n) {
  if (r?.success) return;
  let l = n ? "mutate_rejected" : "storage_write_failed",
    h = n ? d(n) : r?.warning ?? "storage write failed";
  re(e, `Token persist failed: ${h}`);
  let s = Ik(t);
  i("tengu_mcp_oauth_token_persist_failed", {
    transportType: c(t.type),
    ...s && {
      mcpServerBaseUrl: s
    },
    reason: c(l)
  })
}
async function ot(e, t, r, n, l) {
  if (!t.oauth?.xaa) throw Error("XAA: oauth.xaa must be set");
  let h = Dte();
  if (!h) throw Error("XAA: no IdP connection configured. Run 'claude mcp xaa setup --issuer <url> --client-id <id> --client-secret' to configure.");
  let s = t.oauth?.clientId;
  if (!s) throw Error(`XAA: server '${e}' needs an AS client_id. Re-add with --client-id.`);
  let v = (await ges(e, t))?.clientSecret;
  if (!v) {
    let y = md(e, t),
      R = Object.keys((await qn().readAsync())?.mcpOAuthClientConfig ?? {}),
      M = Nce(t.headers ?? {});
    throw re(e, `XAA: secret lookup miss. wanted=${y} have=[${R.join(", ")}] configHeaders=${_(M)}`), Error(`XAA: AS client secret not found for '${e}'. Re-add with --client-secret.`)
  }
  re(e, "XAA: starting cross-app access flow");
  let A = await Hir(h.issuer),
    w = await cTn(h.issuer) !== void 0,
    C = "idp_login";
  try {
    let y;
    try {
      y = await l9r({
        idpIssuer: h.issuer,
        idpClientId: h.clientId,
        idpClientSecret: A,
        callbackPort: h.callbackPort,
        onAuthorizationUrl: r,
        skipBrowserOpen: l,
        abortSignal: n
      })
    } catch (T) {
      if (n?.aborted) throw new yKt;
      throw T
    }
    C = "discovery";
    let R = await uTn(h.issuer);
    C = "token_exchange", ah().record(v);
    let M;
    try {
      M = await he(t.url, {
        clientId: s,
        clientSecret: v,
        idpClientId: h.clientId,
        idpClientSecret: A,
        idpIdToken: y,
        idpTokenEndpoint: R.token_endpoint
      }, e, n)
    } catch (T) {
      if (n?.aborted) throw new yKt;
      let L = d(T);
      if (T instanceof K) {
        if (T.shouldClearIdToken) await Fir(h.issuer), re(e, "XAA: cleared cached id_token after token-exchange failure")
      } else if (L.includes("PRM discovery failed") || L.includes("AS metadata discovery failed") || L.includes("no authorization server supports jwt-bearer")) C = "discovery";
      else if (L.includes("jwt-bearer")) C = "jwt_bearer";
      throw T
    }
    let U = md(e, t),
      O = ah();
    O.record(M.access_token), O.record(M.refresh_token);
    let E, H;
    try {
      E = await qn().mutate((T) => {
        let L = T.mcpOAuth?.[U];
        return {
          ...T,
          mcpOAuth: {
            ...T.mcpOAuth,
            [U]: {
              ...L,
              serverName: e,
              serverUrl: t.url,
              accessToken: M.access_token,
              refreshToken: M.refresh_token ?? L?.refreshToken,
              expiresAt: M.expires_in != null ? Date.now() + M.expires_in * 1000 : void 0,
              scope: M.scope,
              clientId: s,
              clientSecret: v,
              discoveryState: MEt({
                previous: L?.discoveryState,
                issuedBy: M.authorizationServerUrl,
                interactiveSignIn: !0
              })
            }
          }
        }
      })
    } catch (T) {
      H = T
    }
    if (E?.success) re(e, "XAA: tokens saved");
    else xe(e, t, E, H);
    i("tengu_mcp_oauth_flow_success", {
      authMethod: b("xaa"),
      idTokenCacheHit: w
    }), g("mcp_oauth_flow")
  } catch (y) {
    if (y instanceof yKt) throw y;
    throw m("mcp_oauth_flow", "mcp_oauth_xaa_failed"), i("tengu_mcp_oauth_flow_failure", {
      authMethod: b("xaa"),
      xaaFailureStage: c(C),
      idTokenCacheHit: w
    }), y
  }
}
async function Zti(e, t, r, n, l) {
  if (!URL.canParse(t.url)) {
    m("mcp_oauth_flow", "mcp_oauth_no_valid_url");
    let U = "configError" in t && typeof t.configError === "string" ? t.configError : void 0;
    throw new x(U || "This server's URL is missing or not a valid URL, so sign-in can't start. Fix the URL in its MCP config (or set the environment variable it uses) and try again.", "MCP OAuth refused: no valid server URL")
  }
  if (t.oauth?.xaa) {
    if (!mB()) throw Error(`XAA is not enabled (set CLAUDE_CODE_ENABLE_XAA=1). Remove 'oauth.xaa' from server '${e}' to use the standard consent flow.`);
    i("tengu_mcp_oauth_flow_start", {
      isOAuthFlow: !0,
      authMethod: b("xaa"),
      transportType: c(t.type),
      ...Ik(t) && {
        mcpServerBaseUrl: Ik(t)
      }
    }), await ot(e, t, r, n, l?.skipBrowserOpen);
    return
  }
  let h = qn(),
    s = md(e, t),
    S = (await h.readAsync())?.mcpOAuth?.[s],
    v = S?.stepUpScope,
    A = S?.discoveryState?.resourceMetadataUrl,
    w = Re(S),
    C;
  if (A) try {
    C = new URL(A)
  } catch {
    re(e, `Invalid cached resourceMetadataUrl: ${to(A)}`)
  }
  let y = {
      scope: v,
      resourceMetadataUrl: C
    },
    R = qe();
  i("tengu_mcp_oauth_flow_start", {
    flowAttemptId: ye(R),
    isOAuthFlow: !0,
    transportType: c(t.type),
    ...Ik(t) && {
      mcpServerBaseUrl: Ik(t)
    }
  });
  let M = !1;
  try {
    let U = t.oauth?.callbackPort,
      O = !!l?.redirectUri,
      E = O ? 0 : U ?? await ERe(w),
      H = l?.redirectUri ?? zqe(E);
    re(e, O ? `Using custom redirectUri: ${to(H)} (no localhost listener)` : `Using redirect port: ${E}${U?" (from config)":w&&E===w?" (reusing registered port)":""}`);
    try {
      await mes(e, t, {
        preserveClientRegistration: (F) => E === Re(F) || F.redirectUri === H
      })
    } catch (F) {
      re(e, `clear stored credentials failed: ${d(F)}`)
    }
    let T = Ft(),
      L = new AbortController;
    if (!O) T.oauthCallbackListeners.get(E)?.abort(), T.oauthCallbackListeners.set(E, L);
    let j = new _Kt(e, t, H, !0, r, l?.skipBrowserOpen),
      ge = Boolean(t.oauth?.scopes || t.oauth?.authServerMetadataUrl);
    if (y.scope && !ge) j.markStepUpPending(y.scope);
    let Q = Pce(e, t, hKt());
    try {
      let F = await ae(e, t.url, {
        configuredMetadataUrl: t.oauth?.authServerMetadataUrl,
        fetchFn: Q,
        resourceMetadataUrl: y.resourceMetadataUrl
      });
      if (F) j.setMetadata(F), re(e, `Fetched OAuth metadata with scope: ${hT("scope",$e(F)??"")||"NONE"}`)
    } catch (F) {
      re(e, `Failed to fetch OAuth metadata: ${NL(F,t.url)}`)
    }
    let B = await j.state(),
      P = null,
      z = null,
      W = null,
      ve = null,
      G = () => {
        if (P) P.removeAllListeners(), P.on("error", () => {}), P.close(), P = null;
        if (z) clearTimeout(z), z = null;
        if (W) n?.removeEventListener("abort", W), L.signal.removeEventListener("abort", W), W = null;
        if (T.oauthCallbackListeners.get(E) === L) T.oauthCallbackListeners.delete(E);
        if (T.oauthCallbackSubmitters.get(e) === ve) T.oauthCallbackSubmitters.delete(e);
        re(e, "MCP OAuth server cleaned up")
      },
      ke = await new Promise((F, Ne) => {
        let ne = !1,
          Se = (N) => {
            if (ne) return;
            ne = !0, F(N)
          },
          q = (N) => {
            if (ne) return;
            ne = !0, Ne(N)
          };
        if (W = () => {
            G(), q(new yKt)
          }, n?.aborted || L.signal.aborted) {
          W();
          return
        }
        n?.addEventListener("abort", W), L.signal.addEventListener("abort", W);
        {
          let N = (D) => {
            try {
              let X = new URL(D),
                Z = X.searchParams.get("code"),
                ue = X.searchParams.get("state"),
                V = X.searchParams.get("error");
              if (!Z && !V) return !1;
              if (ue !== B) return re(e, "Ignoring manual callback URL whose state belongs to a different flow"), !1;
              if (V) {
                let ee = X.searchParams.get("error_description") || "";
                return G(), q(Error(`OAuth error: ${V} - ${ee}`)), !0
              }
              if (!Z) return !1;
              return re(e, "Received auth code via manual callback URL"), G(), Se(Z), !0
            } catch {
              return !1
            }
          };
          ve = N, T.oauthCallbackSubmitters.set(e, N), l?.onWaitingForCallback?.(N, E, B)
        }
        let Ae = async () => {
          try {
            re(e, "Starting SDK auth"), re(e, `Server URL: ${to(t.url)}`);
            let N = await hoe(j, {
              serverUrl: t.url,
              scope: y.scope,
              resourceMetadataUrl: y.resourceMetadataUrl,
              fetchFn: Q
            });
            if (re(e, `Initial auth result: ${N}`), N !== "REDIRECT") re(e, `Unexpected auth result, expected REDIRECT: ${N}`)
          } catch (N) {
            re(e, `SDK auth error: ${NL(N,t.url)}`), G(), q(Object.assign(new x(`SDK auth failed: ${NL(N,t.url)}`, "SDK auth failed"), {
              cause: N
            }))
          }
        };
        if (O) Ae();
        else P = Je((N, D) => {
          let X = Ze(N.url || "", !0);
          if (X.pathname === "/callback") {
            let Z = X.query.code,
              ue = X.query.state,
              V = X.query.error,
              ee = X.query.error_description,
              we = X.query.error_uri;
            if (ue !== B) {
              D.writeHead(400, {
                "Content-Type": "text/html"
              }), D.end(LL({
                ok: !1,
                heading: "Authentication failed",
                message: "Invalid state parameter. Close this tab and try again from Claude Code."
              }));
              return
            }
            if (V) {
              D.writeHead(200, {
                "Content-Type": "text/html"
              }), D.end(LL({
                ok: !1,
                heading: "Authentication failed",
                message: "Close this tab and try again from Claude Code.",
                detail: `${String(V)}: ${ee??""}`
              })), G();
              let le = `OAuth error: ${V}`;
              if (ee) le += ` - ${ee}`;
              if (we) le += ` (See: ${we})`;
              q(Error(le));
              return
            }
            if (Z) D.writeHead(200, {
              "Content-Type": "text/html"
            }), D.end(LL({
              ok: !0,
              heading: "Authentication successful",
              message: "You can close this tab and return to Claude Code."
            })), G(), Se(Z)
          } else D.writeHead(404, {
            "Content-Type": "text/html"
          }), D.end(LL({
            ok: !1,
            heading: "Not found",
            message: `This is the Claude Code MCP OAuth callback listener. It only handles /callback. If your OAuth provider redirected here, the registered redirect_uri must be ${to(H)}.`
          }))
        }), P.on("error", (N) => {
          if (G(), N.code === "EADDRINUSE") {
            let D = I() === "windows" ? `netstat -ano | findstr :${E}` : `lsof -ti:${E} -sTCP:LISTEN`;
            q(new x(`OAuth callback port ${E} is already in use \u2014 another process may be holding it. ` + `Run \`${D}\` to find it.`, "OAuth callback port already in use"))
          } else q(new x(`OAuth callback server failed: ${N.message}`, "OAuth callback server failed"))
        }), P.listen(E, "127.0.0.1", () => void Ae()), P.unref();
        z = setTimeout((N, D) => {
          N(), D(new x("Authentication timeout", "Authentication timeout"))
        }, 300000, G, q), z.unref()
      });
    M = !0, re(e, "Completing auth flow with authorization code"), ah().record(ke);
    let ce = await hoe(j, {
      serverUrl: t.url,
      authorizationCode: ke,
      resourceMetadataUrl: y.resourceMetadataUrl,
      fetchFn: Pce(e, t, hKt())
    });
    if (re(e, `Auth result: ${ce}`), ce === "AUTHORIZED") {
      let F = await j.tokens().catch(() => {
        return
      });
      if (re(e, `Tokens after auth: ${F?"Present":"Missing"}`), F) re(e, `Token expires_in: ${F.expires_in}`);
      i("tengu_mcp_oauth_flow_success", {
        flowAttemptId: ye(R),
        transportType: c(t.type),
        ...Ik(t) && {
          mcpServerBaseUrl: Ik(t)
        }
      }), g("mcp_oauth_flow")
    } else throw new x("Unexpected auth result: " + ce, "Unexpected auth result")
  } catch (U) {
    re(e, `Error during auth completion: ${NL(U,t.url)}`);
    let O = "unknown",
      E, H, T = d(U),
      L = U instanceof Error ? U.cause : void 0;
    if (U instanceof yKt) O = "cancelled";
    else if (/AADSTS\d/.test(T)) O = "entra_specific";
    else if (/redirect[_ ]uri/i.test(T)) O = "redirect_uri_mismatch";
    else if (M && (_e(U) || _e(L))) O = "token_response_schema_rejected";
    else if (M) O = "token_exchange_failed";
    else if (T.includes("Authentication timeout")) O = "timeout";
    else if (T.includes("OAuth error:")) O = "provider_denied";
    else if (T.includes("already in use") || T.includes("EADDRINUSE") || T.includes("callback server failed") || T.includes("No available port")) O = "port_unavailable";
    else if (T.includes("SDK auth failed")) O = K5s(T, L);
    let j = (L instanceof Error ? L : U instanceof Error ? U : null)?.message.match(/^HTTP (\d{3})\b/);
    if (j) H = Number(j[1]);
    if (L instanceof OP) E = L.errorCode;
    if (U instanceof OP) {
      if (E = U.errorCode, U.errorCode === "invalid_client" || U.errorCode === "unauthorized_client") {
        let B = md(e, t);
        try {
          await qn().mutate((P) => {
            let z = P.mcpOAuth?.[B];
            if (!z) return P;
            return {
              ...P,
              mcpOAuth: {
                ...P.mcpOAuth,
                [B]: {
                  ...z,
                  clientId: void 0,
                  clientSecret: void 0
                }
              }
            }
          })
        } catch (P) {
          re(e, `clear clientId failed: ${d(P)}`)
        }
      }
    }
    if (!/^OAuth error: access_denied(?: |$)/.test(T) && (O === "timeout" || T.includes("OAuth error:"))) {
      let B = md(e, t);
      await qn().mutate((P) => {
        let z = P.mcpOAuth?.[B];
        if (!z?.clientId || z.accessToken || z.refreshToken || z.clientId !== S?.clientId) return P;
        return {
          ...P,
          mcpOAuth: {
            ...P.mcpOAuth,
            [B]: {
              ...z,
              clientId: void 0,
              clientSecret: void 0
            }
          }
        }
      }).catch((P) => re(e, `drop clientId failed: ${d(P)}`))
    }
    if (O !== "cancelled") m("mcp_oauth_flow", "mcp_oauth_flow_failed");
    i("tengu_mcp_oauth_flow_error", {
      flowAttemptId: ye(R),
      reason: c(O),
      error_code: E === void 0 ? void 0 : q5s(E),
      http_status: tY(H),
      transportType: c(t.type),
      ...Ik(t) && {
        mcpServerBaseUrl: Ik(t)
      }
    });
    let Q = NL(U, t.url);
    throw Q === d(U) ? U : Error(Q, {
      cause: U
    })
  }
}

function dTn(e, t) {
  return async (r, n) => {
    let l = await e(r, n);
    if (l.status === 401 || l.status === 403) t.sawAuthChallenge = !0;
    if (t.noteServerAnswer(r, l.status === 401 || l.status === 403 && PRe(l).error === "insufficient_scope"), !new Headers(n?.headers).has("authorization")) return l;
    if (l.status === 403) {
      let {
        error: h,
        scope: s
      } = PRe(l);
      if (h === "insufficient_scope" && s) t.markStepUpPending(s)
    } else if (l.status === 401) t.clearStepUpPending();
    return l
  }
}
class _Kt {
  serverName;
  serverConfig;
  redirectUri;
  handleRedirection;
  _codeVerifier;
  _authorizationUrl;
  _state;
  _scopes;
  _metadata;
  _refreshInProgress;
  _pendingStepUpScope;
  _servedOverrideAuthorizationServerUrl;
  _servedOverrideDocuments = new WeakMap;
  _discoveredAuthorizationServer;
  _lastServedClientId;
  _lastServedAccessToken;
  _lastServedRefreshToken;
  _presented;
  onAuthorizationUrlCallback;
  skipBrowserOpen;
  constructor(e, t, r = zqe(), n = !1, l, h) {
    this.serverName = e, this.serverConfig = t, this.redirectUri = r, this.handleRedirection = n, this.onAuthorizationUrlCallback = l, this.skipBrowserOpen = h ?? !1, this._presented = ah()
  }
  get redirectUrl() {
    return this.redirectUri
  }
  get authorizationUrl() {
    return this._authorizationUrl
  }
  get clientMetadata() {
    let e = {
        client_name: `Claude Code (${this.serverName})`,
        redirect_uris: [this.redirectUri],
        grant_types: ["authorization_code", "refresh_token"],
        response_types: ["code"],
        token_endpoint_auth_method: "none"
      },
      t = this.getCuratedMetadataScope();
    if (t) e.scope = t, re(this.serverName, `Using scope from metadata: ${hT("scope",e.scope)}`);
    return e
  }
  get clientMetadataUrl() {
    if (!Ee(this.redirectUri)) {
      re(this.serverName, `redirectUri ${to(this.redirectUri)} is not the document's loopback /callback: withholding CIMD client_id \u2014 registering via DCR`);
      return
    }
    let e = Ie();
    if (e !== wGe) re(this.serverName, `Using CIMD URL from env: ${e}`);
    return e
  }
  setMetadata(e) {
    this._metadata = e
  }
  getCuratedMetadataScope() {
    let e = $e(this._metadata);
    if (e !== void 0) return e;
    if (this.serverConfig.oauth?.authServerMetadataUrl && Array.isArray(this._metadata?.scopes_supported)) return this._metadata.scopes_supported.join(" ");
    return
  }
  markStepUpPending(e) {
    this._pendingStepUpScope = e, re(this.serverName, `Marked step-up pending: ${hT("scope",e)}`)
  }
  get pendingStepUpScope() {
    return this._pendingStepUpScope
  }
  clearStepUpPending() {
    this._pendingStepUpScope = void 0
  }
  clearStepUpPendingOnCredentialGone() {
    if (!this.handleRedirection) this.clearStepUpPending()
  }
  sawAuthChallenge = !1;
  authChallengeOpen = !1;
  noteServerAnswer(e, t) {
    let r = this.serverConfig.url;
    if (String(e) === (URL.canParse(r) ? new URL(r).href : r)) this.authChallengeOpen = t
  }
  registrationOfferedByDiscovery = !1;
  async readCredentialStore() {
    let e = await Sge();
    if (e === wl) throw re(this.serverName, "Credential store read failed; not reporting credentials as absent"), new RJe(this.serverName);
    return e
  }
  async state() {
    if (!this._state) this._state = Ge(32).toString("base64url"), re(this.serverName, "Generated new OAuth state");
    return this._state
  }
  async clientInformation() {
    let e = await this.resolveClientInformation();
    return this._presented.record(e?.client_secret), this._presented.record(LEt(e?.client_id, e?.client_secret)), e
  }
  async resolveClientInformation() {
    let e = await this.readCredentialStore(),
      t = md(this.serverName, this.serverConfig),
      r = e?.mcpOAuthClientConfig?.[t]?.clientSecret,
      n = this.serverConfig.oauth?.clientId,
      l = e?.mcpOAuth?.[t],
      h = this.handleRedirection && st(l?.clientId) && !Ee(this.redirectUri);
    if (h) {
      if (re(this.serverName, `Stored client_id is the CIMD document URL (loopback /callback only); current redirectUri is ${to(this.redirectUri)} \u2014 ${n?"serving the configured client":"registering via DCR"} instead`), n) await this.patchStoredClientEntry(t, {
        clientId: n,
        clientSecret: void 0,
        redirectUri: this.redirectUri
      }, "stale CIMD client_id repair")
    }
    if (l?.clientId && !h) {
      let s = l.redirectUri;
      if (this.handleRedirection && (s ? me(s) !== me(this.redirectUri) : !this.redirectUri.startsWith("http://localhost"))) {
        let S = s ? to(s) : "localhost";
        if (!n) {
          re(this.serverName, `Cached client_id was registered for ${S}; current redirectUri is ${to(this.redirectUri)} \u2014 forcing re-DCR`);
          return
        }
        if (l.clientId !== n) return re(this.serverName, `Stored client_id is stale and its redirectUri ${S} predates ${to(this.redirectUri)} \u2014 serving the configured client (no registration to redo)`), await this.patchStoredClientEntry(t, {
          clientId: n,
          clientSecret: void 0,
          redirectUri: this.redirectUri
        }, "stale client_id repair"), this._lastServedClientId = n, {
          client_id: n,
          client_secret: r
        };
        re(this.serverName, `Stored redirectUri ${S} predates ${to(this.redirectUri)}, but the client_id is the configured one \u2014 serving it (no registration to redo)`), await this.patchStoredClientEntry(t, {
          redirectUri: this.redirectUri
        }, "stored redirectUri convergence")
      }
      return re(this.serverName, "Found client info"), this._lastServedClientId = l.clientId, {
        client_id: l.clientId,
        client_secret: l.clientSecret ?? (l.clientId === n ? r : void 0)
      }
    }
    if (n) return re(this.serverName, "Using pre-configured client ID"), this._lastServedClientId = n, {
      client_id: n,
      client_secret: r
    };
    if (!this.handleRedirection && this.registrationOfferedByDiscovery && !l?.accessToken && !l?.refreshToken) throw re(this.serverName, "No client info found; deferring client registration to authentication time"), new fes(this.serverName);
    re(this.serverName, "No client info found");
    return
  }
  async patchStoredClientEntry(e, t, r) {
    try {
      if (!(await qn().mutate((l) => {
          let h = l.mcpOAuth?.[e];
          if (!h) return l;
          return {
            ...l,
            mcpOAuth: {
              ...l.mcpOAuth,
              [e]: {
                ...h,
                ...t
              }
            }
          }
        }))?.success) re(this.serverName, `${r} resolved unsuccessful`)
    } catch (n) {
      re(this.serverName, `${r} failed: ${d(n)}`)
    }
  }
  async saveClientInformation(e) {
    this._presented.record(e.client_secret), this._presented.record(LEt(e.client_id, e.client_secret));
    let t = md(this.serverName, this.serverConfig);
    try {
      if ((await qn().mutate((n) => ({
          ...n,
          mcpOAuth: {
            ...n.mcpOAuth,
            [t]: {
              ...n.mcpOAuth?.[t],
              serverName: this.serverName,
              serverUrl: this.serverConfig.url,
              clientId: e.client_id,
              clientSecret: e.client_secret,
              redirectUri: this.redirectUri,
              accessToken: n.mcpOAuth?.[t]?.accessToken || "",
              expiresAt: n.mcpOAuth?.[t]?.expiresAt
            }
          }
        })))?.success) this._lastServedClientId = e.client_id;
      else re(this.serverName, "saveClientInformation persist resolved unsuccessful")
    } catch (r) {
      re(this.serverName, `saveClientInformation persist failed: ${d(r)}`)
    }
  }
  async tokens() {
    let e = await this.readCredentialStore(),
      t = md(this.serverName, this.serverConfig),
      r = e?.mcpOAuth?.[t];
    if (mB() && this.serverConfig.oauth?.xaa && !r?.refreshToken && (!r?.accessToken || r.expiresAt != null && (r.expiresAt - Date.now()) / 1000 <= 300)) {
      if (!this._refreshInProgress) re(this.serverName, r ? "XAA: access_token expiring, attempting silent exchange" : "XAA: no access_token yet, attempting silent exchange"), this._refreshInProgress = this.xaaRefresh().finally(() => {
        this._refreshInProgress = void 0
      });
      try {
        let S = await this._refreshInProgress;
        if (S) return this._lastServedAccessToken = S.access_token, this._presented.record(S.access_token), this._presented.record(S.refresh_token), this._lastServedRefreshToken = S.refresh_token ?? this._lastServedRefreshToken, S
      } catch (S) {
        re(this.serverName, `XAA silent exchange failed: ${d(S)}`)
      }
    }
    if (!r) {
      re(this.serverName, "No token data found"), this.clearStepUpPendingOnCredentialGone();
      return
    }
    if (!r.accessToken) {
      re(this.serverName, "No access token in storage"), this.clearStepUpPendingOnCredentialGone();
      return
    }
    this._lastServedAccessToken = r.accessToken, this._presented.record(r.accessToken), this._presented.record(r.refreshToken), this._lastServedRefreshToken = r.refreshToken;
    let n = r.expiresAt != null ? (r.expiresAt - Date.now()) / 1000 : void 0,
      l = this._pendingStepUpScope,
      h = l !== void 0;
    if (h) re(this.serverName, `Step-up pending (${hT("scope",l)}), omitting refresh_token`);
    if (n != null && n <= 0 && !r.refreshToken) {
      re(this.serverName, "Token expired without refresh token"), this.clearStepUpPendingOnCredentialGone();
      return
    }
    if (n != null && n <= 300 && r.refreshToken && !h) {
      if (!this._refreshInProgress) re(this.serverName, `Token expires in ${Math.floor(n)}s, attempting proactive refresh`), this._refreshInProgress = this.refreshAuthorization(r.refreshToken).finally(() => {
        this._refreshInProgress = void 0
      });
      else re(this.serverName, "Token refresh already in progress, reusing existing promise");
      try {
        let S = await this._refreshInProgress;
        if (S) return re(this.serverName, "Token refreshed successfully"), this._lastServedAccessToken = S.access_token, this._presented.record(S.access_token), this._presented.record(S.refresh_token), this._lastServedRefreshToken = S.refresh_token ?? this._lastServedRefreshToken, S;
        re(this.serverName, "Token refresh failed, returning current tokens")
      } catch (S) {
        re(this.serverName, `Token refresh error: ${NL(S,this.serverConfig.url)}`)
      }
    }
    let s = {
      access_token: r.accessToken,
      refresh_token: h ? void 0 : r.refreshToken,
      expires_in: n,
      scope: r.scope,
      token_type: "Bearer"
    };
    return re(this.serverName, "Returning tokens"), re(this.serverName, `Has refresh token: ${!!s.refresh_token}`), re(this.serverName, n != null ? `Expires in: ${Math.floor(n)}s` : "No expiration specified"), s
  }
  async saveTokens(e) {
    if (this._presented.record(e.access_token), this._presented.record(e.refresh_token), this.handleRedirection) this._pendingStepUpScope = void 0;
    let t = md(this.serverName, this.serverConfig);
    re(this.serverName, "Saving tokens"), re(this.serverName, `Token expires in: ${e.expires_in}`), re(this.serverName, `Has refresh token: ${!!e.refresh_token}`);
    let r = this._servedOverrideAuthorizationServerUrl === void 0 ? this._discoveredAuthorizationServer : {
        authorizationServerUrl: this._servedOverrideAuthorizationServerUrl,
        oauthMetadataFound: !0
      },
      n = this.servedMetadataUrl() ?? this._discoveredAuthorizationServer?.servedMetadataUrl,
      l, h;
    try {
      l = await qn().mutate((s) => ({
        ...s,
        mcpOAuth: {
          ...s.mcpOAuth,
          [t]: {
            ...s.mcpOAuth?.[t],
            serverName: this.serverName,
            serverUrl: this.serverConfig.url,
            accessToken: e.access_token,
            refreshToken: e.refresh_token ?? s.mcpOAuth?.[t]?.refreshToken,
            expiresAt: e.expires_in != null ? Date.now() + e.expires_in * 1000 : void 0,
            scope: e.scope,
            discoveryState: aCn({
              previous: s.mcpOAuth?.[t]?.discoveryState,
              signIn: r,
              servedMetadataUrl: n,
              interactiveSignIn: this.handleRedirection
            })
          }
        }
      }))
    } catch (s) {
      h = s
    }
    if (l?.success) this._lastServedAccessToken = e.access_token, this._lastServedRefreshToken = e.refresh_token ?? this._lastServedRefreshToken;
    this.logTokenPersistFailed(l, h)
  }
  logTokenPersistFailed(e, t) {
    xe(this.serverName, this.serverConfig, e, t)
  }
  async xaaRefresh() {
    let e = Dte();
    if (!e) return;
    let t = await cTn(e.issuer);
    if (!t) {
      re(this.serverName, "XAA: id_token not cached, needs interactive re-auth");
      return
    }
    let r = this.serverConfig.oauth?.clientId,
      n = await ges(this.serverName, this.serverConfig);
    if (!r || !n?.clientSecret) {
      re(this.serverName, "XAA: missing clientId or clientSecret in config \u2014 skipping silent refresh");
      return
    }
    let l = await Hir(e.issuer),
      h;
    try {
      h = await uTn(e.issuer)
    } catch (s) {
      re(this.serverName, `XAA: OIDC discovery failed in silent refresh: ${d(s)}`);
      return
    }
    this._presented.record(n.clientSecret);
    try {
      let s = await he(this.serverConfig.url, {
          clientId: r,
          clientSecret: n.clientSecret,
          idpClientId: e.clientId,
          idpClientSecret: l,
          idpIdToken: t,
          idpTokenEndpoint: h.token_endpoint
        }, this.serverName),
        S = md(this.serverName, this.serverConfig),
        v, A;
      try {
        v = await qn().mutate((w) => {
          let C = w.mcpOAuth?.[S];
          return {
            ...w,
            mcpOAuth: {
              ...w.mcpOAuth,
              [S]: {
                ...C,
                serverName: this.serverName,
                serverUrl: this.serverConfig.url,
                accessToken: s.access_token,
                refreshToken: s.refresh_token ?? C?.refreshToken,
                expiresAt: s.expires_in != null ? Date.now() + s.expires_in * 1000 : void 0,
                scope: s.scope,
                clientId: r,
                clientSecret: n.clientSecret,
                discoveryState: MEt({
                  previous: C?.discoveryState,
                  issuedBy: s.authorizationServerUrl,
                  interactiveSignIn: !1
                })
              }
            }
          }
        })
      } catch (w) {
        A = w
      }
      return this.logTokenPersistFailed(v, A), {
        access_token: s.access_token,
        token_type: "Bearer",
        expires_in: s.expires_in,
        scope: s.scope,
        refresh_token: s.refresh_token
      }
    } catch (s) {
      if (s instanceof K && s.shouldClearIdToken) await Fir(e.issuer), re(this.serverName, "XAA: cleared id_token after exchange failure");
      throw s
    }
  }
  async redirectToAuthorization(e) {
    let t = this._pendingStepUpScope ? void 0 : this.serverConfig.oauth?.scopes || (this.serverConfig.oauth?.authServerMetadataUrl ? this.getCuratedMetadataScope() : void 0),
      r = e.searchParams.get("scope"),
      n = t ?? r;
    if (n !== r) re(this.serverName, `Overrode authorization scope from ${r?hT("scope",r):"NONE"} to configured: ${n?hT("scope",n):"NONE"}`);
    let l = n === null ? null : Y5s(n, this._metadata);
    if (l !== null && l !== r) {
      if (e.searchParams.set("scope", l), l !== t) re(this.serverName, "Appended offline_access to authorization scope")
    }
    let h = X5s(e),
      s = e.searchParams.getAll("prompt"),
      S = h ? s.filter((R) => R !== "consent") : s;
    if (S.length !== s.length || S.length > 1) {
      if (e.searchParams.delete("prompt"), S.length > 0) e.searchParams.set("prompt", S.includes("consent") ? "consent" : S.at(-1))
    }
    this._authorizationUrl = e.toString();
    let v = e.searchParams.get("scope");
    if (re(this.serverName, `Authorization URL: ${ues(e)}`), re(this.serverName, `Scopes in URL: ${v?hT("scope",v):"NOT FOUND"}`), v) this._scopes = v, re(this.serverName, `Captured scopes from authorization URL: ${hT("scope",v)}`);
    else {
      let R = this.getCuratedMetadataScope();
      if (R) this._scopes = R, re(this.serverName, `Using scopes from metadata: ${hT("scope",R)}`);
      else re(this.serverName, "No scopes available from URL or metadata")
    }
    if (this._scopes && !this.handleRedirection && this._pendingStepUpScope) {
      let R = md(this.serverName, this.serverConfig),
        M = this._scopes,
        U = !1;
      try {
        await qn().mutate((O) => {
          let E = O.mcpOAuth?.[R];
          if (!E) return O;
          return U = !0, {
            ...O,
            mcpOAuth: {
              ...O.mcpOAuth,
              [R]: {
                ...E,
                stepUpScope: M
              }
            }
          }
        })
      } catch (O) {
        re(this.serverName, `step-up scope persist failed: ${d(O)}`)
      }
      if (U) re(this.serverName, `Persisted step-up scope: ${hT("scope",M)}`)
    }
    if (!this.handleRedirection) {
      re(this.serverName, "Redirection handling is disabled, skipping redirect");
      return
    }
    let A = e.toString();
    if (!A.startsWith("http://") && !A.startsWith("https://")) throw Error("Invalid authorization URL: must use http:// or https:// scheme");
    re(this.serverName, "Redirecting to authorization URL");
    let w = ues(e);
    if (re(this.serverName, `Authorization URL: ${w}`), this.onAuthorizationUrlCallback) this.onAuthorizationUrlCallback(A);
    if (this.skipBrowserOpen) {
      re(this.serverName, `Skipping browser open (skipBrowserOpen=true). URL: ${w}`);
      return
    }
    let C = $G();
    if (C) re(this.serverName, `Skipping browser open (headless environment). URL: ${w}`);
    else re(this.serverName, `Opening authorization URL: ${w}`);
    let y = C ? !1 : await Hs(A);
    if (i("tengu_mcp_oauth_browser_open", {
        success: y,
        headless: C,
        platform: c(I())
      }), !C && !y) re(this.serverName, "Browser didn't open automatically. URL is shown in UI.")
  }
  async saveCodeVerifier(e) {
    re(this.serverName, "Saving code verifier"), this._codeVerifier = e
  }
  async codeVerifier() {
    if (!this._codeVerifier) throw re(this.serverName, "No code verifier saved"), Error("No code verifier saved");
    return re(this.serverName, "Returning code verifier"), this._presented.record(this._codeVerifier), this._codeVerifier
  }
  async invalidateCredentials(e) {
    if (e === "verifier") {
      this._codeVerifier = void 0, re(this.serverName, "Invalidated credentials (scope: verifier)");
      return
    }
    let t = e,
      r = md(this.serverName, this.serverConfig),
      n = !1;
    try {
      let l = this._lastServedClientId,
        h = this._lastServedAccessToken,
        s = this._lastServedRefreshToken;
      await qn().mutate((S) => {
        let v = S.mcpOAuth?.[r];
        if (!v) return S;
        let A = {
          ...S.mcpOAuth
        };
        switch (t) {
          case "all": {
            let w = h != null && !!v.accessToken && v.accessToken !== h,
              C = l != null && v.clientId != null && v.clientId !== l;
            if (w || C) return re(this.serverName, `invalidateCredentials('all') preserved: ${w?"foreign token":"concurrent re-registration"}`), S;
            if (!v.clientId && !v.refreshToken && v.accessToken === "") return S;
            A[r] = {
              serverName: v.serverName,
              serverUrl: v.serverUrl,
              accessToken: "",
              ...v.discoveryState && {
                discoveryState: v.discoveryState
              },
              ...v.stepUpScope && {
                stepUpScope: v.stepUpScope
              }
            };
            break
          }
          case "client":
            A[r] = {
              ...v,
              clientId: void 0,
              clientSecret: void 0
            };
            break;
          case "tokens": {
            if (s != null && v.refreshToken && v.refreshToken !== s || h != null && !!v.accessToken && v.accessToken !== h) return re(this.serverName, "invalidateCredentials('tokens') preserved: concurrent rotation"), S;
            A[r] = {
              ...v,
              accessToken: "",
              refreshToken: void 0,
              expiresAt: 0
            };
            break
          }
          case "discovery":
            A[r] = {
              ...v,
              discoveryState: v.discoveryState && kRe(v.discoveryState),
              stepUpScope: void 0
            };
            break
        }
        return n = !0, {
          ...S,
          mcpOAuth: A
        }
      })
    } catch (l) {
      re(this.serverName, `invalidateCredentials persist failed: ${d(l)}`)
    }
    if (n) re(this.serverName, `Invalidated credentials (scope: ${e})`)
  }
  async saveDiscoveryState(e) {
    let t = md(this.serverName, this.serverConfig);
    re(this.serverName, `Saving discovery state (authServer: ${to(e.authorizationServerUrl)})`);
    let r = e.authorizationServerMetadata;
    this.registrationOfferedByDiscovery = r !== void 0 && (typeof r.registration_endpoint === "string" || r.client_id_metadata_document_supported === !0 && this.clientMetadataUrl !== void 0);
    let n = {
        authorizationServerUrl: e.authorizationServerUrl,
        oauthMetadataFound: !!e.authorizationServerMetadata
      },
      l = (e.authorizationServerMetadata !== void 0 ? this._servedOverrideDocuments.get(e.authorizationServerMetadata) : void 0) ?? this.servedMetadataUrl();
    this._discoveredAuthorizationServer = {
      ...n,
      servedMetadataUrl: l
    };
    try {
      await qn().mutate((h) => {
        let s = iCn({
          previous: h.mcpOAuth?.[t]?.discoveryState,
          discovered: n,
          servedMetadataUrl: l
        });
        return {
          ...h,
          mcpOAuth: {
            ...h.mcpOAuth,
            [t]: {
              ...h.mcpOAuth?.[t],
              serverName: this.serverName,
              serverUrl: this.serverConfig.url,
              accessToken: h.mcpOAuth?.[t]?.accessToken || "",
              expiresAt: h.mcpOAuth?.[t]?.expiresAt,
              discoveryState: {
                ...s,
                resourceMetadataUrl: e.resourceMetadataUrl,
                registrationNotOfferedAt: r === void 0 ? h.mcpOAuth?.[t]?.discoveryState?.registrationNotOfferedAt : typeof r.registration_endpoint !== "string" && r.client_id_metadata_document_supported !== !0 ? Date.now() : void 0
              }
            }
          }
        }
      })
    } catch (h) {
      re(this.serverName, `saveDiscoveryState persist failed: ${d(h)}`)
    }
  }
  servedMetadataUrl() {
    return this._servedOverrideAuthorizationServerUrl === void 0 ? void 0 : this.serverConfig.oauth?.authServerMetadataUrl
  }
  async discoveryState() {
    this._servedOverrideAuthorizationServerUrl = void 0;
    let e = this.serverConfig.oauth?.authServerMetadataUrl;
    if (e) {
      re(this.serverName, `Fetching metadata from configured URL: ${to(e)}`);
      try {
        let h = await ae(this.serverName, this.serverConfig.url, {
          configuredMetadataUrl: e,
          fetchFn: Pce(this.serverName, this.serverConfig, hKt())
        });
        if (h) return this._servedOverrideAuthorizationServerUrl = h.issuer, this._servedOverrideDocuments.set(h, e), {
          authorizationServerUrl: h.issuer,
          authorizationServerMetadata: h
        }
      } catch (h) {
        re(this.serverName, `Failed to fetch from configured metadata URL: ${NL(h,this.serverConfig.url)}`)
      }
      return
    }
    let r = await qn().readAsync(),
      n = md(this.serverName, this.serverConfig),
      l = r?.mcpOAuth?.[n]?.discoveryState;
    if (l?.authorizationServerUrl) return re(this.serverName, `Returning cached discovery state (authServer: ${to(l.authorizationServerUrl)})`), {
      authorizationServerUrl: l.authorizationServerUrl,
      resourceMetadataUrl: l.resourceMetadataUrl,
      resourceMetadata: l.resourceMetadata,
      authorizationServerMetadata: l.authorizationServerMetadata
    };
    return
  }
  async refreshAuthorization(e) {
    if (de()) {
      re(this.serverName, "claude-code-server session; skipping refresh");
      return
    }
    let t = md(this.serverName, this.serverConfig),
      r = jx();
    await se().mkdir(r);
    let n = t.replace(/[^a-zA-Z0-9]/g, "_"),
      l = Ye(r, `mcp-refresh-${n}.lock`),
      h;
    for (let s = 0; s < fe; s++) try {
      re(this.serverName, `Acquiring refresh lock (attempt ${s+1})`), h = await dl(l, {
        realpath: !1,
        stale: 60000,
        update: 5000,
        onCompromised: () => {
          re(this.serverName, "Refresh lock was compromised")
        }
      }), re(this.serverName, "Acquired refresh lock");
      break
    } catch (S) {
      let v = k(S);
      if (v === "ELOCKED") {
        re(this.serverName, `Refresh lock held by another process, waiting (attempt ${s+1}/${fe})`), await Y(1000 + Math.random() * 1000);
        continue
      }
      re(this.serverName, `Failed to acquire refresh lock: ${v}; skipping refresh`);
      return
    }
    if (!h) {
      re(this.serverName, `Could not acquire refresh lock after ${fe} retries; skipping refresh`);
      return
    }
    try {
      GD();
      let v = (await qn().readAsync())?.mcpOAuth?.[t];
      if (v) {
        let A = v.expiresAt != null ? (v.expiresAt - Date.now()) / 1000 : void 0;
        if (v.accessToken && (A == null || A > 300)) return re(this.serverName, A != null ? `Another process already refreshed tokens (expires in ${Math.floor(A)}s)` : "Another process already refreshed tokens (no expiration)"), {
          access_token: v.accessToken,
          refresh_token: v.refreshToken,
          expires_in: A,
          scope: v.scope,
          token_type: "Bearer"
        };
        if (v.refreshToken) e = v.refreshToken, this._lastServedRefreshToken = v.refreshToken, this._presented.record(v.refreshToken)
      }
      return await this._doRefresh(e)
    } finally {
      if (h) try {
        await h(), re(this.serverName, "Released refresh lock")
      } catch {
        re(this.serverName, "Failed to release refresh lock")
      }
    }
  }
  async readConcurrentRefreshWinner() {
    GD();
    let t = (await qn().readAsync())?.mcpOAuth?.[md(this.serverName, this.serverConfig)],
      r = t?.expiresAt != null ? (t.expiresAt - Date.now()) / 1000 : void 0;
    if (t?.accessToken && (r == null || r > 300)) {
      re(this.serverName, "Another process landed fresh tokens; using those");
      let n = {
        access_token: t.accessToken,
        refresh_token: t.refreshToken,
        expires_in: r,
        scope: t.scope,
        token_type: "Bearer"
      };
      return {
        tokenData: t,
        freshTokens: n
      }
    }
    return {
      tokenData: t,
      freshTokens: void 0
    }
  }
  async _doRefresh(e) {
    this._presented.record(e);
    let t = 3,
      r = Ik(this.serverConfig),
      n = (l, h) => {
        i(l === "success" ? "tengu_mcp_oauth_refresh_success" : "tengu_mcp_oauth_refresh_failure", {
          transportType: c(this.serverConfig.type),
          ...r && {
            mcpServerBaseUrl: r
          },
          ...h && {
            reason: c(h)
          }
        })
      };
    for (let l = 1; l <= t; l++) {
      let h;
      try {
        re(this.serverName, "Starting token refresh");
        let s = Pce(this.serverName, this.serverConfig, hKt()),
          S = this._metadata;
        if (!S) {
          let A = await this.discoveryState();
          if (A?.authorizationServerMetadata) S = A.authorizationServerMetadata;
          else if (A?.authorizationServerUrl) re(this.serverName, `Re-discovering metadata from persisted auth server URL: ${to(A.authorizationServerUrl)}`), S = await QEt(A.authorizationServerUrl, {
            fetchFn: s
          })
        }
        if (!S) S = await ae(this.serverName, this.serverConfig.url, {
          configuredMetadataUrl: this.serverConfig.oauth?.authServerMetadataUrl,
          fetchFn: s
        });
        if (!S) {
          re(this.serverName, "Failed to discover OAuth metadata"), n("failure", "metadata_discovery_failed"), m("mcp_oauth_refresh", "mcp_oauth_refresh_metadata_failed");
          return
        }
        if (this._metadata = S, h = await this.clientInformation(), !h) {
          re(this.serverName, "No client information available"), n("failure", "no_client_info"), m("mcp_oauth_refresh", "mcp_oauth_refresh_no_client_info");
          return
        }
        let v = await K9r(new URL(this.serverConfig.url), {
          metadata: S,
          clientInformation: h,
          refreshToken: e,
          resource: new URL(this.serverConfig.url),
          fetchFn: s
        });
        if (v) return re(this.serverName, "Token refresh successful"), await this.saveTokens(v), n("success"), g("mcp_oauth_refresh"), v;
        re(this.serverName, "Token refresh returned no tokens"), n("failure", "no_tokens_returned"), m("mcp_oauth_refresh", "mcp_oauth_refresh_no_tokens");
        return
      } catch (s) {
        if (s instanceof tot) {
          re(this.serverName, `Token refresh failed with invalid_grant: ${s.message}`);
          let {
            freshTokens: y
          } = await this.readConcurrentRefreshWinner();
          if (y) return p("mcp_oauth_refresh", "mcp_oauth_refresh_concurrent_winner"), y;
          re(this.serverName, "No valid tokens in storage, clearing stored tokens"), n("failure", "invalid_grant"), m("mcp_oauth_refresh", "mcp_oauth_refresh_invalid_grant"), await this.invalidateCredentials("tokens"), Ice.emit(this.serverName);
          return
        }
        if (s instanceof OP && (s.errorCode === "invalid_client" || s.errorCode === "unauthorized_client")) {
          re(this.serverName, "Token refresh failed: DCR client expired or invalid; clearing stored client registration");
          let {
            tokenData: y,
            freshTokens: R
          } = await this.readConcurrentRefreshWinner();
          if (R) return p("mcp_oauth_refresh", "mcp_oauth_refresh_concurrent_winner"), R;
          if (y?.clientId && h && y.clientId !== h.client_id) {
            re(this.serverName, "Another process re-registered client; preserving"), n("failure", "concurrent_reregister"), p("mcp_oauth_refresh", "mcp_oauth_refresh_concurrent_reregister");
            return
          }
          n("failure", s.errorCode === "unauthorized_client" ? "unauthorized_client" : "invalid_client"), m("mcp_oauth_refresh", s.errorCode === "unauthorized_client" ? "mcp_oauth_refresh_unauthorized_client" : "mcp_oauth_refresh_invalid_client"), await this.invalidateCredentials("all"), Ice.emit(this.serverName);
          return
        }
        if (_e(s)) {
          re(this.serverName, `Token refresh failed: token response rejected by SDK schema: ${d(s)}`), n("failure", "token_response_schema_rejected"), m("mcp_oauth_refresh", "mcp_oauth_refresh_token_response_schema_rejected");
          return
        }
        let S = s instanceof RJe,
          v = s instanceof Error && /timeout|timed out|etimedout|econnreset/i.test(s.message),
          A = s instanceof yNe || s instanceof i4t || s instanceof a4t,
          w = v || A || S;
        if (!w || l >= t) {
          re(this.serverName, `Token refresh failed: ${NL(s,this.serverConfig.url)}`), n("failure", w ? "transient_retries_exhausted" : "request_failed"), m("mcp_oauth_refresh", "mcp_oauth_refresh_request_failed");
          return
        }
        let C = 1000 * Math.pow(2, l - 1);
        re(this.serverName, `Token refresh failed, retrying in ${C}ms (attempt ${l}/${t})`), await Y(C)
      }
    }
    return
  }
}
async function eni() {
  let e = process.env.MCP_CLIENT_SECRET;
  if (e) return e;
  if (!process.stdin.isTTY) throw Error("No TTY available to prompt for client secret. Set MCP_CLIENT_SECRET env var instead.");
  return new Promise((t, r) => {
    process.stderr.write("Enter OAuth client secret: "), process.stdin.setRawMode?.(!0);
    let n = "",
      l = (h) => {
        let s = h.toString();
        if (s === `
` || s === "\r") process.stdin.setRawMode?.(!1), process.stdin.removeListener("data", l), process.stderr.write(`
`), t(n);
        else if (s === "\x03") process.stdin.setRawMode?.(!1), process.stdin.removeListener("data", l), r(Error("Cancelled"));
        else if (s === "\x7F" || s === "\b") n = n.slice(0, -1);
        else n += s
      };
    process.stdin.on("data", l)
  })
}
async function tni(e, t, r) {
  let n = md(e, t);
  try {
    return await qn().mutate((l) => ({
      ...l,
      mcpOAuthClientConfig: {
        ...l.mcpOAuthClientConfig,
        [n]: {
          clientSecret: r
        }
      }
    }))
  } catch (l) {
    return {
      success: !1,
      warning: d(l)
    }
  }
}
async function nni(e, t) {
  let r = md(e, t);
  await qn().mutate((n) => {
    if (!n.mcpOAuthClientConfig?.[r]) return n;
    let l = {
      ...n.mcpOAuthClientConfig
    };
    return delete l[r], {
      ...n,
      mcpOAuthClientConfig: l
    }
  })
}
async function ges(e, t) {
  let n = await qn().readAsync(),
    l = md(e, t);
  return n?.mcpOAuthClientConfig?.[l]
}

function $e(e) {
  if (!e) return;
  if ("scope" in e && typeof e.scope === "string") return e.scope;
  if ("default_scope" in e && typeof e.default_scope === "string") return e.default_scope;
  return
}

function Y5s(e, t) {
  if (e !== null && e.split(" ").includes("offline_access")) return e;
  if (!t?.scopes_supported?.includes("offline_access")) return e;
  return e === null ? "offline_access" : `${e} offline_access`
}
var at = ["login.microsoftonline.com", "login.microsoftonline.us", "login.partner.microsoftonline.cn", "login.chinacloudapi.cn"],
  ct = [".b2clogin.com", ".ciamlogin.com"];

function X5s(e) {
  try {
    let t = (typeof e === "string" ? new URL(e) : e).hostname;
    return at.includes(t) || ct.some((r) => t.endsWith(r))
  } catch {
    return !1
  }
}
export {
  q5s,
  K5s,
  ues,
  pes,
  hKt,
  fes,
  yKt,
  qti,
  Kti,
  Yti,
  Nir,
  Xti,
  Jti,
  Qti,
  mes,
  Zti,
  dTn,
  _Kt,
  eni,
  tni,
  nni,
  ges,
  Y5s,
  X5s
};
