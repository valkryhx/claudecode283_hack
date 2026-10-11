// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.283
import {
  I9t,
  WIn,
  zIn,
  TT,
  K2e,
  Mwe,
  VEt,
  qEt,
  CT,
  p8,
  Dwe,
  GIn,
  dtt,
  xfr,
  Ifr
} from "B:/~BUN/root/chunk-qnvaq2fk.js";
import {
  mt
} from "B:/~BUN/root/chunk-vyq5y0zs.js";
import {
  y,
  c,
  ue,
  Cj
} from "B:/~BUN/root/chunk-kks4mj3w.js";
import {
  Ke,
  P,
  l,
  v
} from "B:/~BUN/root/chunk-bgthmgyc.js";
import {
  Q
} from "B:/~BUN/root/chunk-17wqwt36.js";
import {
  dxe
} from "B:/~BUN/root/chunk-zksmb712.js";
import {
  b,
  J,
  ce
} from "B:/~BUN/root/chunk-qe2zga5e.js";
import {
  f
} from "B:/~BUN/root/chunk-zv3zxqya.js";
import {
  a
} from "B:/~BUN/root/chunk-nkmmqnq7.js";
import {
  ne,
  O
} from "B:/~BUN/root/chunk-zs3ycjed.js";
import {
  i
} from "B:/~BUN/root/chunk-728mwbhs.js";
import {
  _,
  m,
  p
} from "B:/~BUN/root/chunk-51n463p1.js";
import {
  Ri
} from "B:/~BUN/root/chunk-vpejnsp4.js";
import {
  yi
} from "B:/~BUN/root/chunk-2ppgegpr.js";
import {
  DD,
  C$,
  Um,
  vl,
  Un
} from "B:/~BUN/root/chunk-zafy1b6k.js";
import {
  Uw,
  Dx
} from "B:/~BUN/root/chunk-2d028bdz.js";
import {
  jt
} from "B:/~BUN/root/chunk-dv435n4g.js";
import {
  Iwe
} from "B:/~BUN/root/chunk-nyjps70m.js";
import {
  w1,
  q6,
  Vte,
  el,
  ZFe,
  e$e
} from "B:/~BUN/root/chunk-gf53qpk6.js";
import {
  RP,
  I0e,
  zpe
} from "B:/~BUN/root/chunk-bxy1tk0j.js";
import {
  Df,
  stt,
  CP
} from "B:/~BUN/root/chunk-brdpd4rf.js";
import {
  M7,
  E9t,
  cw,
  vr,
  AP,
  xP
} from "B:/~BUN/root/chunk-sjxe7c01.js";
import {
  Pb
} from "B:/~BUN/root/chunk-3jyp964r.js";
import {
  _8t,
  bIn,
  SIn,
  b8t,
  Fpr
} from "B:/~BUN/root/chunk-y3a3qsdr.js";
import {
  KH,
  Ko
} from "B:/~BUN/root/chunk-v8s05yj9.js";
import {
  n_e
} from "B:/~BUN/root/chunk-p6k2cbn2.js";
import {
  o,
  u
} from "B:/~BUN/root/chunk-n8qdr73v.js";
import {
  _e
} from "B:/~BUN/root/chunk-batgyebn.js";
import {
  randomBytes as We,
  randomUUID as Ge
} from "crypto";
import {
  createServer as qe
} from "http";
import {
  join as Je
} from "path";
import {
  parse as Ve
} from "url";
var $e = 30000,
  Ne = "urn:ietf:params:oauth:grant-type:token-exchange",
  ye = "urn:ietf:params:oauth:grant-type:jwt-bearer",
  we = "urn:ietf:params:oauth:token-type:id-jag",
  Le = "urn:ietf:params:oauth:token-type:id_token";

function Te(e) {
  return (t, n) => {
    let r = AbortSignal.timeout($e),
      d = e ? AbortSignal.any([r, e]) : r;
    return fetch(t, {
      ...n,
      ...yi({
        url: String(t)
      }),
      signal: d
    }).catch((g) => xP(g, t))
  }
}
var ie = Te();

function re(e) {
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
var Fe = /"(access_token|refresh_token|id_token|assertion|subject_token|client_secret)"\s*:\s*"[^"]*"/g;

function ee(e) {
  return (typeof e === "string" ? e : b(e)).replace(Fe, (n, r) => `"${r}":"[REDACTED]"`)
}
var ze = f(() => u({
    access_token: o().optional(),
    issued_token_type: o().optional(),
    expires_in: n_e().optional(),
    scope: o().optional()
  })),
  De = f(() => u({
    access_token: o().min(1),
    token_type: o().default("Bearer"),
    expires_in: n_e().optional(),
    scope: o().optional(),
    refresh_token: o().optional()
  }));
async function Xe(e, t) {
  let n;
  try {
    n = await GIn(e, void 0, t?.fetchFn ?? ie)
  } catch (r) {
    if (Ke(r)) throw r;
    let d = r instanceof Error ? /^HTTP (\d{3}) /.exec(r.message)?.[1] : void 0;
    throw Error(`XAA: PRM discovery failed for ${vr(e)} (${d?`HTTP ${d}`:r instanceof Error?r.name:typeof r})`)
  }
  if (!n.resource || !n.authorization_servers?.[0]) throw Error("XAA: PRM discovery failed: PRM missing resource or authorization_servers");
  if (re(n.resource) !== re(e)) throw Error(`XAA: PRM discovery failed: PRM resource mismatch: expected ${vr(e)}, got ${vr(n.resource)}`);
  return {
    resource: n.resource,
    authorization_servers: n.authorization_servers
  }
}
async function He(e, t) {
  let n;
  try {
    n = await dtt(e, {
      fetchFn: t?.fetchFn ?? ie
    })
  } catch (r) {
    if (Ke(r)) throw r;
    let d = r instanceof Error ? /^HTTP (\d{3}) /.exec(r.message)?.[1] : void 0;
    throw new P(`XAA: AS metadata discovery failed (${d?`HTTP ${d}`:r instanceof Error?r.name:typeof r})`, "XAA: AS metadata discovery failed")
  }
  if (!n?.issuer || !n.token_endpoint) throw Error(`XAA: AS metadata discovery failed: no valid metadata at ${vr(e)}`);
  if (re(n.issuer) !== re(e)) throw Error(`XAA: AS metadata discovery failed: issuer mismatch: expected ${vr(e)}, got ${vr(n.issuer)}`);
  if (!URL.canParse(n.token_endpoint) || new URL(n.token_endpoint).protocol !== "https:") throw Error(`XAA: refusing non-HTTPS token endpoint: ${vr(n.token_endpoint)}`);
  return {
    issuer: n.issuer,
    token_endpoint: n.token_endpoint,
    grant_types_supported: n.grant_types_supported,
    token_endpoint_auth_methods_supported: n.token_endpoint_auth_methods_supported
  }
}
async function je(e) {
  let t = e.fetchFn ?? ie,
    n = new URLSearchParams({
      grant_type: Ne,
      requested_token_type: we,
      audience: e.audience,
      resource: e.resource,
      subject_token: e.idToken,
      subject_token_type: Le,
      client_id: e.clientId
    });
  if (e.clientSecret) n.set("client_secret", e.clientSecret);
  if (e.scope) n.set("scope", e.scope);
  let r = await t(e.tokenEndpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    },
    body: n
  });
  if (!r.ok) {
    let k = ee(await r.text()).slice(0, 200),
      h = r.status < 500;
    throw new K(`XAA: token exchange failed: HTTP ${r.status}: ${k}`, h)
  }
  let d;
  try {
    d = await r.json()
  } catch {
    throw new K(`XAA: token exchange returned non-JSON (captive portal?) at ${vr(e.tokenEndpoint)}`, !1)
  }
  let g = ze().safeParse(d);
  if (!g.success) throw new K(`XAA: token exchange response did not match expected shape: ${ee(d)}`, !0);
  let s = g.data;
  if (!s.access_token) throw new K(`XAA: token exchange response missing access_token: ${ee(s)}`, !0);
  if (s.issued_token_type !== we) throw new K(`XAA: token exchange returned unexpected issued_token_type: ${s.issued_token_type}`, !0);
  return {
    jwtAuthGrant: s.access_token,
    expiresIn: s.expires_in,
    scope: s.scope
  }
}
async function Be(e) {
  let t = e.fetchFn ?? ie,
    n = e.authMethod ?? "client_secret_basic",
    r = new URLSearchParams({
      grant_type: ye,
      assertion: e.assertion
    });
  if (e.scope) r.set("scope", e.scope);
  let d = {
    "Content-Type": "application/x-www-form-urlencoded"
  };
  if (n === "client_secret_basic") {
    let h = Buffer.from(`${encodeURIComponent(e.clientId)}:${encodeURIComponent(e.clientSecret)}`).toString("base64");
    d.Authorization = `Basic ${h}`, Df().record(h)
  } else r.set("client_id", e.clientId), r.set("client_secret", e.clientSecret);
  Df().record(e.clientSecret), Df().record(e.assertion);
  let g = await t(e.tokenEndpoint, {
    method: "POST",
    headers: d,
    body: r
  });
  if (!g.ok) {
    let h = ee(await g.text()).slice(0, 200);
    throw Error(`XAA: jwt-bearer grant failed: HTTP ${g.status}: ${h}`)
  }
  let s;
  try {
    s = await g.json()
  } catch {
    throw Error(`XAA: jwt-bearer grant returned non-JSON (captive portal?) at ${vr(e.tokenEndpoint)}`)
  }
  let k = De().safeParse(s);
  if (!k.success) throw Error(`XAA: jwt-bearer response did not match expected shape: ${ee(s)}`);
  return k.data
}
async function le(e, t, n = "xaa", r) {
  let d = Te(r);
  ne(n, `XAA: discovering PRM for ${vr(e)}`);
  let g = await Xe(e, {
    fetchFn: d
  });
  ne(n, `XAA: discovered resource=${vr(g.resource)} ASes=[${g.authorization_servers.map(vr).join(", ")}]`);
  let s, k = [];
  for (let T of g.authorization_servers) {
    let R;
    try {
      R = await He(T, {
        fetchFn: d
      })
    } catch (I) {
      if (r?.aborted) throw I;
      k.push(`${vr(T)}: ${I instanceof Error?I.message:String(I)}`);
      continue
    }
    if (R.grant_types_supported && !R.grant_types_supported.includes(ye)) {
      k.push(`${vr(T)}: does not advertise jwt-bearer grant (supported: ${R.grant_types_supported.join(", ")})`);
      continue
    }
    s = R;
    break
  }
  if (!s) throw new P(`XAA: no authorization server supports jwt-bearer. Tried: ${k.join("; ")}`, `XAA: no authorization server supports jwt-bearer (tried ${g.authorization_servers.length})`);
  let h = s.token_endpoint_auth_methods_supported,
    S = h && !h.includes("client_secret_basic") && h.includes("client_secret_post") ? "client_secret_post" : "client_secret_basic";
  ne(n, `XAA: AS issuer=${vr(s.issuer)} token_endpoint=${vr(s.token_endpoint)} auth_method=${S}`), ne(n, "XAA: exchanging id_token for ID-JAG at IdP");
  let A = await je({
    tokenEndpoint: t.idpTokenEndpoint,
    audience: s.issuer,
    resource: g.resource,
    idToken: t.idpIdToken,
    clientId: t.idpClientId,
    clientSecret: t.idpClientSecret,
    fetchFn: d
  });
  ne(n, "XAA: ID-JAG obtained"), ne(n, "XAA: exchanging ID-JAG for access_token at AS");
  let C = await Be({
    tokenEndpoint: s.token_endpoint,
    assertion: A.jwtAuthGrant,
    clientId: t.clientId,
    clientSecret: t.clientSecret,
    authMethod: S,
    fetchFn: d
  });
  return ne(n, "XAA: access_token obtained"), {
    ...C,
    authorizationServerUrl: s.issuer
  }
}
var Ye = 30000,
  Ze = 500,
  Qe = new Set([...C$, ...DD, "ETIMEDOUT"]);

function et(e) {
  if (Ke(e)) return !0;
  if (e instanceof Error && e.name === "TimeoutError") return !0;
  let t = Um(e);
  return t !== null && Qe.has(t.code)
}

function fe(e) {
  let t = e;
  return (t?.name === "ZodError" || t?.name === "$ZodError") && Array.isArray(t?.issues)
}
var tt = ["invalid_request", "invalid_client", "invalid_grant", "unauthorized_client", "unsupported_grant_type", "invalid_scope", "access_denied", "server_error", "temporarily_unavailable", "unsupported_response_type", "unsupported_token_type", "invalid_token", "method_not_allowed", "too_many_requests", "invalid_client_metadata", "insufficient_scope", "invalid_target", "authorization_pending", "expired_token", "slow_down"];

function rWo(e) {
  let t = tt.find((n) => n === e);
  return ue(t) ?? y("other")
}

function oWo(e, t) {
  let n = t instanceof Error ? `${e}
${t.message}` : e;
  if (n.includes("dynamic client registration") || t instanceof TT && t.errorCode === "invalid_client_metadata") return "dcr_failed";
  if (n.includes("trying to load") && n.includes("metadata") || n.includes("Incompatible auth server")) return "discovery_failed";
  if (t instanceof TT) return "dcr_rejected";
  let r = v(t) ?? v(t instanceof Error ? t.cause : void 0);
  if (r && e$e.has(r)) return "network_failed";
  return "sdk_auth_failed"
}
var he = 5;

function yio(e) {
  return vr(e.origin + e.pathname) + E9t(e)
}
var rt = new Set(["invalid_refresh_token", "expired_refresh_token", "token_expired"]);
async function _io(e) {
  if (!e.ok) return e;
  let t = await e.text(),
    n;
  try {
    n = J(t)
  } catch {
    return new Response(t, e)
  }
  if (WIn.safeParse(n).success) return new Response(t, e);
  let r = zIn.safeParse(n);
  if (!r.success) return new Response(t, e);
  let d = rt.has(r.data.error) ? {
    error: "invalid_grant",
    error_description: r.data.error_description ?? `Server returned non-standard error code: ${r.data.error}`
  } : r.data;
  return new Response(b(d), {
    status: 400,
    statusText: "Bad Request",
    headers: e.headers
  })
}

function yIn() {
  return async (e, t) => {
    try {
      return await Ce(e, t)
    } catch (n) {
      if (t?.signal?.aborted || !et(n)) throw n;
      return await Q(Ze, t?.signal ?? void 0), await Ce(e, t)
    }
  }
}
async function Ce(e, t) {
  let n = AbortSignal.timeout(Ye),
    r = t?.method?.toUpperCase() === "POST",
    d = yi({
      url: String(e)
    });
  if (!t?.signal) {
    let h;
    try {
      h = await fetch(e, {
        ...t,
        ...d,
        signal: n
      })
    } catch (S) {
      xP(S, e)
    }
    return r ? _io(h) : h
  }
  let g = new AbortController,
    s = () => g.abort();
  t.signal.addEventListener("abort", s), n.addEventListener("abort", s);
  let k = () => {
    t.signal?.removeEventListener("abort", s), n.removeEventListener("abort", s)
  };
  if (t.signal.aborted) g.abort();
  try {
    let h = await fetch(e, {
      ...t,
      ...d,
      signal: g.signal
    });
    return k(), r ? _io(h) : h
  } catch (h) {
    k(), xP(h, e)
  }
}
async function se(e, t, n) {
  let {
    configuredMetadataUrl: r,
    fetchFn: d,
    resourceMetadataUrl: g
  } = n ?? {}, s = d ?? yIn();
  if (r) {
    if (!r.startsWith("https://")) throw Error(`authServerMetadataUrl must use https:// (got: ${vr(r)})`);
    let h = await s(r, {
      headers: {
        Accept: "application/json"
      }
    });
    if (h.ok) {
      let S;
      try {
        S = await h.json()
      } catch {
        throw Error(`Configured auth server metadata at ${vr(r)} is not valid JSON`)
      }
      return I9t.parse(S)
    }
    throw Error(`HTTP ${h.status} fetching configured auth server metadata from ${vr(r)}`)
  }
  try {
    let {
      authorizationServerMetadata: h
    } = await xfr(t, {
      fetchFn: s,
      ...g && {
        resourceMetadataUrl: g
      }
    });
    if (h) return h
  } catch (h) {
    ne(e, `RFC 9728 discovery failed, falling back: ${AP(h,t)}`)
  }
  let k = new URL(t);
  if (k.pathname === "/") return;
  try {
    return await dtt(k, {
      fetchFn: s
    })
  } catch (h) {
    ne(e, `Path-aware auth server discovery failed: ${AP(h,t)}`);
    return
  }
}
class bio extends CT {
  serverName;
  constructor(e) {
    super("Authentication required; client registration is deferred until the user authenticates");
    this.serverName = e;
    this.name = "McpClientRegistrationDeferredError"
  }
}
class yEt extends Error {
  constructor() {
    super("Authentication was cancelled");
    this.name = "AuthenticationCancelledError"
  }
}

function pe(e) {
  try {
    let t = new URL(e);
    return `${t.protocol}//${t.hostname}`
  } catch {
    return e
  }
}

function Re(e) {
  let t = pe(e);
  return t === "http://127.0.0.1" || t === "http://localhost"
}

function Ue(e) {
  if (!e?.clientId || !e.redirectUri || !Re(e.redirectUri)) return;
  let t = Number(new URL(e.redirectUri).port);
  return t && e.redirectUri.replace("//127.0.0.1:", "//localhost:") === I0e(t) ? t : void 0
}

function be() {
  return a.MCP_OAUTH_CLIENT_METADATA_URL || dxe
}

function Oe(e) {
  if (!Re(e)) return !1;
  try {
    return new URL(e).pathname === "/callback"
  } catch {
    return !1
  }
}

function nt(e) {
  return e !== void 0 && (e === dxe || e === be())
}

function T4o(e) {
  return jt().oauthCallbackSubmitters.get(e)
}

function C4o(e, t) {
  let n = jt().activeOAuthFlows;
  n.set(e, t), t.finally(() => {
    if (n.get(e) === t) n.delete(e)
  }).catch(() => {})
}

function R4o(e) {
  return jt().activeOAuthFlows.get(e)
}
async function _In(e, t) {
  let n = el(e, t),
    r = (await Un().readAsync())?.mcpOAuth?.[n];
  if (!r || r.accessToken || r.refreshToken) return;
  try {
    await Un().mutate((d) => {
      let g = d.mcpOAuth?.[n];
      if (!g || g.accessToken || g.refreshToken) return d;
      let s = {
        ...d.mcpOAuth
      };
      return delete s[n], {
        ...d,
        mcpOAuth: s
      }
    })
  } catch (d) {
    ne(e, `clear tokenless stub failed: ${l(d)}`)
  }
}
async function Ee({
  serverName: e,
  endpoint: t,
  token: n,
  tokenTypeHint: r,
  clientId: d,
  clientSecret: g,
  accessToken: s,
  authMethod: k = "client_secret_basic"
}) {
  let h = new URLSearchParams;
  h.set("token", n), h.set("token_type_hint", r);
  let S = {
    "Content-Type": "application/x-www-form-urlencoded"
  };
  if (d && g)
    if (k === "client_secret_post") h.set("client_id", d), h.set("client_secret", g);
    else {
      let A = Buffer.from(`${encodeURIComponent(d)}:${encodeURIComponent(g)}`).toString("base64");
      S.Authorization = `Basic ${A}`, Df().record(A)
    }
  else if (d) h.set("client_id", d);
  else ne(e, `No client_id available for ${r} revocation - server may reject`);
  try {
    await mt.post(t, h, {
      headers: S
    }), ne(e, `Successfully revoked ${r}`)
  } catch (A) {
    if (mt.isAxiosError(A) && A.response?.status === 401 && s) ne(e, `Got 401, retrying ${r} revocation with Bearer auth`), h.delete("client_id"), h.delete("client_secret"), await mt.post(t, h, {
      headers: {
        ...S,
        Authorization: `Bearer ${s}`
      }
    }), ne(e, `Successfully revoked ${r} with Bearer auth`);
    else throw A
  }
}
async function A4o(e, t) {
  let r = (await Un().readAsync())?.mcpOAuth?.[el(e, t)];
  if (!r?.accessToken && !r?.refreshToken) return;
  return {
    accessToken: r.accessToken || void 0,
    refreshToken: r.refreshToken,
    clientId: r.clientId,
    clientSecret: r.clientSecret,
    ...r.discoveryState && {
      discoveryState: {
        authorizationServerUrl: r.discoveryState.authorizationServerUrl
      }
    }
  }
}
async function Me(e, t, n) {
  let r = Df();
  r.record(n.accessToken), r.record(n.refreshToken), r.record(n.clientSecret);
  let d;
  try {
    let g = n.discoveryState?.authorizationServerUrl ?? t.url,
      s = await se(e, g, {
        configuredMetadataUrl: t.oauth?.authServerMetadataUrl
      });
    if (!s) ne(e, "No OAuth metadata found"), d = "no_metadata";
    else {
      let k = "revocation_endpoint" in s ? s.revocation_endpoint : null;
      if (!k) ne(e, "Server does not support token revocation"), d = "no_revocation_endpoint";
      else {
        let h = String(k),
          S = ("revocation_endpoint_auth_methods_supported" in s ? s.revocation_endpoint_auth_methods_supported : void 0) ?? ("token_endpoint_auth_methods_supported" in s ? s.token_endpoint_auth_methods_supported : void 0),
          A = S && !S.includes("client_secret_basic") && S.includes("client_secret_post") ? "client_secret_post" : "client_secret_basic";
        if (ne(e, `Revoking tokens via ${vr(h)} (${A})`), n.refreshToken) try {
          await Ee({
            serverName: e,
            endpoint: h,
            token: n.refreshToken,
            tokenTypeHint: "refresh_token",
            clientId: n.clientId,
            clientSecret: n.clientSecret,
            accessToken: n.accessToken,
            authMethod: A
          })
        } catch (C) {
          ne(e, `Failed to revoke refresh token: ${l(C)}`), d = "server_revoke_failed"
        }
        if (n.accessToken) try {
          await Ee({
            serverName: e,
            endpoint: h,
            token: n.accessToken,
            tokenTypeHint: "access_token",
            clientId: n.clientId,
            clientSecret: n.clientSecret,
            accessToken: n.accessToken,
            authMethod: A
          })
        } catch (C) {
          ne(e, `Failed to revoke access token: ${l(C)}`), d = "server_revoke_failed"
        }
      }
    }
  } catch (g) {
    ne(e, `Failed to revoke tokens: ${l(g)}`), d = "server_revoke_failed"
  }
  return d
}
async function x4o(e, t, n) {
  let r;
  try {
    let d = (await Un().readAsync())?.mcpOAuth?.[el(e, t)],
      g = {
        ...n,
        accessToken: n.accessToken && n.accessToken !== d?.accessToken ? n.accessToken : void 0,
        refreshToken: n.refreshToken && n.refreshToken !== d?.refreshToken ? n.refreshToken : void 0
      };
    if (!g.accessToken && !g.refreshToken) {
      ne(e, "No replaced tokens to revoke"), _("mcp_oauth_revoke");
      return
    }
    r = await Me(e, t, g)
  } catch (d) {
    ne(e, `Failed to revoke replaced tokens: ${l(d)}`), r = "server_revoke_failed"
  }
  if (r) p("mcp_oauth_revoke", r);
  else _("mcp_oauth_revoke")
}
async function P4o(e, t, {
  preserveStepUpState: n = !1
} = {}) {
  let r = Un(),
    d = await r.readAsync();
  if (!d?.mcpOAuth) {
    _("mcp_oauth_revoke");
    return
  }
  let g = el(e, t),
    s = d.mcpOAuth[g],
    k;
  if (s?.accessToken || s?.refreshToken) k = await Me(e, t, {
    accessToken: s.accessToken || void 0,
    refreshToken: s.refreshToken,
    clientId: s.clientId,
    clientSecret: s.clientSecret,
    ...s.discoveryState && {
      discoveryState: {
        authorizationServerUrl: s.discoveryState.authorizationServerUrl
      }
    }
  });
  else ne(e, "No tokens to revoke");
  try {
    if (n && s && (s.stepUpScope || s.discoveryState || s.clientId)) await r.mutate((h) => {
      let S = h.mcpOAuth?.[g];
      if (S?.accessToken !== s.accessToken || S?.clientId !== s.clientId) return h;
      return {
        ...h,
        mcpOAuth: {
          ...h.mcpOAuth,
          [g]: {
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
                authorizationServerUrl: s.discoveryState.authorizationServerUrl,
                resourceMetadataUrl: s.discoveryState.resourceMetadataUrl,
                oauthMetadataFound: s.discoveryState.oauthMetadataFound
              }
            }
          }
        }
      }
    }), ne(e, "Preserved step-up auth state across revocation");
    else await Sio(e, t)
  } catch (h) {
    ne(e, `clear local tokens failed: ${l(h)}`), k ??= "local_clear_failed"
  }
  if (CP(e), k) p("mcp_oauth_revoke", k);
  else _("mcp_oauth_revoke")
}
async function Sio(e, t, n) {
  let r = el(e, t),
    d;
  if (await Un().mutate((g) => {
      let s = g.mcpOAuth?.[r];
      if (!s) return g;
      let k = {
        ...g.mcpOAuth
      };
      if (s.clientId && n?.preserveClientRegistration?.(s)) {
        if (!s.accessToken && !s.refreshToken) return g;
        k[r] = {
          ...s,
          accessToken: "",
          refreshToken: void 0,
          expiresAt: 0,
          scope: void 0
        }, d = "tokens"
      } else delete k[r], d = "all";
      return {
        ...g,
        mcpOAuth: k
      }
    }), d) ne(e, d === "tokens" ? "Cleared stored tokens (preserved client registration)" : "Cleared stored tokens")
}

function Ie(e, t, n, r) {
  if (n?.success) return;
  let d = r ? "mutate_rejected" : "storage_write_failed",
    g = r ? l(r) : n?.warning ?? "storage write failed";
  ne(e, `Token persist failed: ${g}`);
  let s = Pb(t);
  i("tengu_mcp_oauth_token_persist_failed", {
    transportType: c(t.type),
    ...s && {
      mcpServerBaseUrl: s
    },
    reason: c(d)
  })
}
async function it(e, t, n, r, d) {
  if (!t.oauth?.xaa) throw Error("XAA: oauth.xaa must be set");
  let g = q6();
  if (!g) throw Error("XAA: no IdP connection configured. Run 'claude mcp xaa setup --issuer <url> --client-id <id> --client-secret' to configure.");
  let s = t.oauth?.clientId;
  if (!s) throw Error(`XAA: server '${e}' needs an AS client_id. Re-add with --client-id.`);
  let h = (await wio(e, t))?.clientSecret;
  if (!h) {
    let T = el(e, t),
      R = Object.keys((await Un().readAsync())?.mcpOAuthClientConfig ?? {}),
      I = M7(t.headers ?? {});
    throw ne(e, `XAA: secret lookup miss. wanted=${T} have=[${R.join(", ")}] configHeaders=${b(I)}`), Error(`XAA: AS client secret not found for '${e}'. Re-add with --client-secret.`)
  }
  ne(e, "XAA: starting cross-app access flow");
  let S = await SIn(g.issuer),
    A = await _8t(g.issuer) !== void 0,
    C = "idp_login";
  try {
    let T;
    try {
      T = await Fpr({
        idpIssuer: g.issuer,
        idpClientId: g.clientId,
        idpClientSecret: S,
        callbackPort: g.callbackPort,
        onAuthorizationUrl: n,
        skipBrowserOpen: d,
        abortSignal: r
      })
    } catch (w) {
      if (r?.aborted) throw new yEt;
      throw w
    }
    C = "discovery";
    let R = await b8t(g.issuer);
    C = "token_exchange", Df().record(h);
    let I;
    try {
      I = await le(t.url, {
        clientId: s,
        clientSecret: h,
        idpClientId: g.clientId,
        idpClientSecret: S,
        idpIdToken: T,
        idpTokenEndpoint: R.token_endpoint
      }, e, r)
    } catch (w) {
      if (r?.aborted) throw new yEt;
      let N = l(w);
      if (w instanceof K) {
        if (w.shouldClearIdToken) await bIn(g.issuer), ne(e, "XAA: cleared cached id_token after token-exchange failure")
      } else if (N.includes("PRM discovery failed") || N.includes("AS metadata discovery failed") || N.includes("no authorization server supports jwt-bearer")) C = "discovery";
      else if (N.includes("jwt-bearer")) C = "jwt_bearer";
      throw w
    }
    let U = el(e, t),
      E = Df();
    E.record(I.access_token), E.record(I.refresh_token);
    let M, j;
    try {
      M = await Un().mutate((w) => {
        let N = w.mcpOAuth?.[U];
        return {
          ...w,
          mcpOAuth: {
            ...w.mcpOAuth,
            [U]: {
              ...N,
              serverName: e,
              serverUrl: t.url,
              accessToken: I.access_token,
              refreshToken: I.refresh_token ?? N?.refreshToken,
              expiresAt: I.expires_in != null ? Date.now() + I.expires_in * 1000 : void 0,
              scope: I.scope,
              clientId: s,
              clientSecret: h,
              discoveryState: {
                authorizationServerUrl: I.authorizationServerUrl
              }
            }
          }
        }
      })
    } catch (w) {
      j = w
    }
    if (M?.success) ne(e, "XAA: tokens saved");
    else Ie(e, t, M, j);
    i("tengu_mcp_oauth_flow_success", {
      authMethod: y("xaa"),
      idTokenCacheHit: A
    }), _("mcp_oauth_flow")
  } catch (T) {
    if (T instanceof yEt) throw T;
    throw m("mcp_oauth_flow", "mcp_oauth_xaa_failed"), i("tengu_mcp_oauth_flow_failure", {
      authMethod: y("xaa"),
      xaaFailureStage: c(C),
      idTokenCacheHit: A
    }), T
  }
}
async function I4o(e, t, n, r, d) {
  if (!URL.canParse(t.url)) {
    m("mcp_oauth_flow", "mcp_oauth_no_valid_url");
    let U = "configError" in t && typeof t.configError === "string" ? t.configError : void 0;
    throw new P(U || "This server's URL is missing or not a valid URL, so sign-in can't start. Fix the URL in its MCP config (or set the environment variable it uses) and try again.", "MCP OAuth refused: no valid server URL")
  }
  if (t.oauth?.xaa) {
    if (!w1()) throw Error(`XAA is not enabled (set CLAUDE_CODE_ENABLE_XAA=1). Remove 'oauth.xaa' from server '${e}' to use the standard consent flow.`);
    i("tengu_mcp_oauth_flow_start", {
      isOAuthFlow: !0,
      authMethod: y("xaa"),
      transportType: c(t.type),
      ...Pb(t) && {
        mcpServerBaseUrl: Pb(t)
      }
    }), await it(e, t, n, r, d?.skipBrowserOpen);
    return
  }
  let g = Un(),
    s = el(e, t),
    k = (await g.readAsync())?.mcpOAuth?.[s],
    h = k?.stepUpScope,
    S = k?.discoveryState?.resourceMetadataUrl,
    A = Ue(k),
    C;
  if (S) try {
    C = new URL(S)
  } catch {
    ne(e, `Invalid cached resourceMetadataUrl: ${vr(S)}`)
  }
  let T = {
      scope: h,
      resourceMetadataUrl: C
    },
    R = Ge();
  i("tengu_mcp_oauth_flow_start", {
    flowAttemptId: _e(R),
    isOAuthFlow: !0,
    transportType: c(t.type),
    ...Pb(t) && {
      mcpServerBaseUrl: Pb(t)
    }
  });
  let I = !1;
  try {
    let U = t.oauth?.callbackPort,
      E = !!d?.redirectUri,
      M = E ? 0 : U ?? await zpe(A),
      j = d?.redirectUri ?? I0e(M);
    ne(e, E ? `Using custom redirectUri: ${vr(j)} (no localhost listener)` : `Using redirect port: ${M}${U?" (from config)":A&&M===A?" (reusing registered port)":""}`);
    try {
      await Sio(e, t, {
        preserveClientRegistration: (z) => M === Ue(z) || z.redirectUri === j
      })
    } catch (z) {
      ne(e, `clear stored credentials failed: ${l(z)}`)
    }
    let w = jt(),
      N = new AbortController;
    if (!E) w.oauthCallbackListeners.get(M)?.abort(), w.oauthCallbackListeners.set(M, N);
    let B = new _Et(e, t, j, !0, n, d?.skipBrowserOpen),
      me = Boolean(t.oauth?.scopes || t.oauth?.authServerMetadataUrl);
    if (T.scope && !me) B.markStepUpPending(T.scope);
    try {
      let z = await se(e, t.url, {
        configuredMetadataUrl: t.oauth?.authServerMetadataUrl,
        resourceMetadataUrl: T.resourceMetadataUrl
      });
      if (z) B.setMetadata(z), ne(e, `Fetched OAuth metadata with scope: ${cw("scope",Pe(z)??"")||"NONE"}`)
    } catch (z) {
      ne(e, `Failed to fetch OAuth metadata: ${AP(z,t.url)}`)
    }
    let V = await B.state(),
      D = null,
      L = null,
      F = null,
      ge = null,
      W = () => {
        if (D) D.removeAllListeners(), D.on("error", () => {}), D.close(), D = null;
        if (L) clearTimeout(L), L = null;
        if (F) r?.removeEventListener("abort", F), N.signal.removeEventListener("abort", F), F = null;
        if (w.oauthCallbackListeners.get(M) === N) w.oauthCallbackListeners.delete(M);
        if (w.oauthCallbackSubmitters.get(e) === ge) w.oauthCallbackSubmitters.delete(e);
        ne(e, "MCP OAuth server cleaned up")
      },
      ke = await new Promise((z, xe) => {
        let te = !1,
          ve = (x) => {
            if (te) return;
            te = !0, z(x)
          },
          G = (x) => {
            if (te) return;
            te = !0, xe(x)
          };
        if (F = () => {
            W(), G(new yEt)
          }, r?.aborted || N.signal.aborted) {
          F();
          return
        }
        r?.addEventListener("abort", F), N.signal.addEventListener("abort", F);
        {
          let x = (X) => {
            try {
              let H = new URL(X),
                Y = H.searchParams.get("code"),
                ae = H.searchParams.get("state"),
                q = H.searchParams.get("error");
              if (!Y && !q) return !1;
              if (ae !== V) return ne(e, "Ignoring manual callback URL whose state belongs to a different flow"), !1;
              if (q) {
                let Z = H.searchParams.get("error_description") || "";
                return W(), G(Error(`OAuth error: ${q} - ${Z}`)), !0
              }
              if (!Y) return !1;
              return ne(e, "Received auth code via manual callback URL"), W(), ve(Y), !0
            } catch {
              return !1
            }
          };
          ge = x, w.oauthCallbackSubmitters.set(e, x), d?.onWaitingForCallback?.(x, M, V)
        }
        let Se = async () => {
          try {
            ne(e, "Starting SDK auth"), ne(e, `Server URL: ${vr(t.url)}`);
            let x = await p8(B, {
              serverUrl: t.url,
              scope: T.scope,
              resourceMetadataUrl: T.resourceMetadataUrl,
              fetchFn: yIn()
            });
            if (ne(e, `Initial auth result: ${x}`), x !== "REDIRECT") ne(e, `Unexpected auth result, expected REDIRECT: ${x}`)
          } catch (x) {
            ne(e, `SDK auth error: ${AP(x,t.url)}`), W(), G(Object.assign(new P(`SDK auth failed: ${AP(x,t.url)}`, "SDK auth failed"), {
              cause: x
            }))
          }
        };
        if (E) Se();
        else D = qe((x, X) => {
          let H = Ve(x.url || "", !0);
          if (H.pathname === "/callback") {
            let Y = H.query.code,
              ae = H.query.state,
              q = H.query.error,
              Z = H.query.error_description,
              Ae = H.query.error_uri;
            if (ae !== V) {
              X.writeHead(400, {
                "Content-Type": "text/html"
              }), X.end(RP({
                ok: !1,
                heading: "Authentication failed",
                message: "Invalid state parameter. Close this tab and try again from Claude Code."
              }));
              return
            }
            if (q) {
              X.writeHead(200, {
                "Content-Type": "text/html"
              }), X.end(RP({
                ok: !1,
                heading: "Authentication failed",
                message: "Close this tab and try again from Claude Code.",
                detail: `${String(q)}: ${Z??""}`
              })), W();
              let de = `OAuth error: ${q}`;
              if (Z) de += ` - ${Z}`;
              if (Ae) de += ` (See: ${Ae})`;
              G(Error(de));
              return
            }
            if (Y) X.writeHead(200, {
              "Content-Type": "text/html"
            }), X.end(RP({
              ok: !0,
              heading: "Authentication successful",
              message: "You can close this tab and return to Claude Code."
            })), W(), ve(Y)
          } else X.writeHead(404, {
            "Content-Type": "text/html"
          }), X.end(RP({
            ok: !1,
            heading: "Not found",
            message: `This is the Claude Code MCP OAuth callback listener. It only handles /callback. If your OAuth provider redirected here, the registered redirect_uri must be ${vr(j)}.`
          }))
        }), D.on("error", (x) => {
          if (W(), x.code === "EADDRINUSE") {
            let X = O() === "windows" ? `netstat -ano | findstr :${M}` : `lsof -ti:${M} -sTCP:LISTEN`;
            G(new P(`OAuth callback port ${M} is already in use \u2014 another process may be holding it. ` + `Run \`${X}\` to find it.`, "OAuth callback port already in use"))
          } else G(new P(`OAuth callback server failed: ${x.message}`, "OAuth callback server failed"))
        }), D.listen(M, "127.0.0.1", () => void Se()), D.unref();
        L = setTimeout((x, X) => {
          x(), X(new P("Authentication timeout", "Authentication timeout"))
        }, 300000, W, G), L.unref()
      });
    I = !0, ne(e, "Completing auth flow with authorization code"), Df().record(ke);
    let oe = await p8(B, {
      serverUrl: t.url,
      authorizationCode: ke,
      resourceMetadataUrl: T.resourceMetadataUrl,
      fetchFn: yIn()
    });
    if (ne(e, `Auth result: ${oe}`), oe === "AUTHORIZED") {
      let z = await B.tokens().catch(() => {
        return
      });
      if (ne(e, `Tokens after auth: ${z?"Present":"Missing"}`), z) ne(e, `Token expires_in: ${z.expires_in}`);
      i("tengu_mcp_oauth_flow_success", {
        flowAttemptId: _e(R),
        transportType: c(t.type),
        ...Pb(t) && {
          mcpServerBaseUrl: Pb(t)
        }
      }), _("mcp_oauth_flow")
    } else throw new P("Unexpected auth result: " + oe, "Unexpected auth result")
  } catch (U) {
    ne(e, `Error during auth completion: ${AP(U,t.url)}`);
    let E = "unknown",
      M, j, w = l(U),
      N = U instanceof Error ? U.cause : void 0;
    if (U instanceof yEt) E = "cancelled";
    else if (/AADSTS\d/.test(w)) E = "entra_specific";
    else if (/redirect[_ ]uri/i.test(w)) E = "redirect_uri_mismatch";
    else if (I && (fe(U) || fe(N))) E = "token_response_schema_rejected";
    else if (I) E = "token_exchange_failed";
    else if (w.includes("Authentication timeout")) E = "timeout";
    else if (w.includes("OAuth error:")) E = "provider_denied";
    else if (w.includes("already in use") || w.includes("EADDRINUSE") || w.includes("callback server failed") || w.includes("No available port")) E = "port_unavailable";
    else if (w.includes("SDK auth failed")) E = oWo(w, N);
    let B = (N instanceof Error ? N : U instanceof Error ? U : null)?.message.match(/^HTTP (\d{3})\b/);
    if (B) j = Number(B[1]);
    if (N instanceof TT) M = N.errorCode;
    if (U instanceof TT) {
      if (M = U.errorCode, U.errorCode === "invalid_client" || U.errorCode === "unauthorized_client") {
        let D = el(e, t);
        try {
          await Un().mutate((L) => {
            let F = L.mcpOAuth?.[D];
            if (!F) return L;
            return {
              ...L,
              mcpOAuth: {
                ...L.mcpOAuth,
                [D]: {
                  ...F,
                  clientId: void 0,
                  clientSecret: void 0
                }
              }
            }
          })
        } catch (L) {
          ne(e, `clear clientId failed: ${l(L)}`)
        }
      }
    }
    if (!/^OAuth error: access_denied(?: |$)/.test(w) && (E === "timeout" || w.includes("OAuth error:"))) {
      let D = el(e, t);
      await Un().mutate((L) => {
        let F = L.mcpOAuth?.[D];
        if (!F?.clientId || F.accessToken || F.refreshToken || F.clientId !== k?.clientId) return L;
        return {
          ...L,
          mcpOAuth: {
            ...L.mcpOAuth,
            [D]: {
              ...F,
              clientId: void 0,
              clientSecret: void 0
            }
          }
        }
      }).catch((L) => ne(e, `drop clientId failed: ${l(L)}`))
    }
    if (E !== "cancelled") m("mcp_oauth_flow", "mcp_oauth_flow_failed");
    i("tengu_mcp_oauth_flow_error", {
      flowAttemptId: _e(R),
      reason: c(E),
      error_code: M === void 0 ? void 0 : rWo(M),
      http_status: Cj(j),
      transportType: c(t.type),
      ...Pb(t) && {
        mcpServerBaseUrl: Pb(t)
      }
    });
    let V = AP(U, t.url);
    throw V === l(U) ? U : Error(V, {
      cause: U
    })
  }
}

function y8t(e, t) {
  return async (n, r) => {
    let d = await e(n, r);
    if (d.status === 401 || d.status === 403) t.sawAuthChallenge = !0;
    if (!new Headers(r?.headers).has("authorization")) return d;
    if (d.status === 403) {
      let {
        error: g,
        scope: s
      } = Dwe(d);
      if (g === "insufficient_scope" && s) t.markStepUpPending(s)
    } else if (d.status === 401) t.clearStepUpPending();
    return d
  }
}
class _Et {
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
  _lastServedClientId;
  _lastServedAccessToken;
  _lastServedRefreshToken;
  _presented;
  onAuthorizationUrlCallback;
  skipBrowserOpen;
  constructor(e, t, n = I0e(), r = !1, d, g) {
    this.serverName = e, this.serverConfig = t, this.redirectUri = n, this.handleRedirection = r, this.onAuthorizationUrlCallback = d, this.skipBrowserOpen = g ?? !1, this._presented = Df()
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
    if (t) e.scope = t, ne(this.serverName, `Using scope from metadata: ${cw("scope",e.scope)}`);
    return e
  }
  get clientMetadataUrl() {
    if (!Oe(this.redirectUri)) {
      ne(this.serverName, `redirectUri ${vr(this.redirectUri)} is not the document's loopback /callback: withholding CIMD client_id \u2014 registering via DCR`);
      return
    }
    let e = be();
    if (e !== dxe) ne(this.serverName, `Using CIMD URL from env: ${e}`);
    return e
  }
  setMetadata(e) {
    this._metadata = e
  }
  getCuratedMetadataScope() {
    let e = Pe(this._metadata);
    if (e !== void 0) return e;
    if (this.serverConfig.oauth?.authServerMetadataUrl && Array.isArray(this._metadata?.scopes_supported)) return this._metadata.scopes_supported.join(" ");
    return
  }
  markStepUpPending(e) {
    this._pendingStepUpScope = e, ne(this.serverName, `Marked step-up pending: ${cw("scope",e)}`)
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
  registrationOfferedByDiscovery = !1;
  async readCredentialStore() {
    let e = await Vte();
    if (e === vl) throw ne(this.serverName, "Credential store read failed; not reporting credentials as absent"), new ZFe(this.serverName);
    return e
  }
  async state() {
    if (!this._state) this._state = We(32).toString("base64url"), ne(this.serverName, "Generated new OAuth state");
    return this._state
  }
  async clientInformation() {
    let e = await this.resolveClientInformation();
    return this._presented.record(e?.client_secret), this._presented.record(stt(e?.client_id, e?.client_secret)), e
  }
  async resolveClientInformation() {
    let e = await this.readCredentialStore(),
      t = el(this.serverName, this.serverConfig),
      n = e?.mcpOAuthClientConfig?.[t]?.clientSecret,
      r = this.serverConfig.oauth?.clientId,
      d = e?.mcpOAuth?.[t],
      g = this.handleRedirection && nt(d?.clientId) && !Oe(this.redirectUri);
    if (g) {
      if (ne(this.serverName, `Stored client_id is the CIMD document URL (loopback /callback only); current redirectUri is ${vr(this.redirectUri)} \u2014 ${r?"serving the configured client":"registering via DCR"} instead`), r) await this.patchStoredClientEntry(t, {
        clientId: r,
        clientSecret: void 0,
        redirectUri: this.redirectUri
      }, "stale CIMD client_id repair")
    }
    if (d?.clientId && !g) {
      let s = d.redirectUri;
      if (this.handleRedirection && (s ? pe(s) !== pe(this.redirectUri) : !this.redirectUri.startsWith("http://localhost"))) {
        let k = s ? vr(s) : "localhost";
        if (!r) {
          ne(this.serverName, `Cached client_id was registered for ${k}; current redirectUri is ${vr(this.redirectUri)} \u2014 forcing re-DCR`);
          return
        }
        if (d.clientId !== r) return ne(this.serverName, `Stored client_id is stale and its redirectUri ${k} predates ${vr(this.redirectUri)} \u2014 serving the configured client (no registration to redo)`), await this.patchStoredClientEntry(t, {
          clientId: r,
          clientSecret: void 0,
          redirectUri: this.redirectUri
        }, "stale client_id repair"), this._lastServedClientId = r, {
          client_id: r,
          client_secret: n
        };
        ne(this.serverName, `Stored redirectUri ${k} predates ${vr(this.redirectUri)}, but the client_id is the configured one \u2014 serving it (no registration to redo)`), await this.patchStoredClientEntry(t, {
          redirectUri: this.redirectUri
        }, "stored redirectUri convergence")
      }
      return ne(this.serverName, "Found client info"), this._lastServedClientId = d.clientId, {
        client_id: d.clientId,
        client_secret: d.clientSecret ?? (d.clientId === r ? n : void 0)
      }
    }
    if (r) return ne(this.serverName, "Using pre-configured client ID"), this._lastServedClientId = r, {
      client_id: r,
      client_secret: n
    };
    if (!this.handleRedirection && this.registrationOfferedByDiscovery && !d?.accessToken && !d?.refreshToken) throw ne(this.serverName, "No client info found; deferring client registration to authentication time"), new bio(this.serverName);
    ne(this.serverName, "No client info found");
    return
  }
  async patchStoredClientEntry(e, t, n) {
    try {
      if (!(await Un().mutate((d) => {
          let g = d.mcpOAuth?.[e];
          if (!g) return d;
          return {
            ...d,
            mcpOAuth: {
              ...d.mcpOAuth,
              [e]: {
                ...g,
                ...t
              }
            }
          }
        }))?.success) ne(this.serverName, `${n} resolved unsuccessful`)
    } catch (r) {
      ne(this.serverName, `${n} failed: ${l(r)}`)
    }
  }
  async saveClientInformation(e) {
    this._presented.record(e.client_secret), this._presented.record(stt(e.client_id, e.client_secret));
    let t = el(this.serverName, this.serverConfig);
    try {
      if ((await Un().mutate((r) => ({
          ...r,
          mcpOAuth: {
            ...r.mcpOAuth,
            [t]: {
              ...r.mcpOAuth?.[t],
              serverName: this.serverName,
              serverUrl: this.serverConfig.url,
              clientId: e.client_id,
              clientSecret: e.client_secret,
              redirectUri: this.redirectUri,
              accessToken: r.mcpOAuth?.[t]?.accessToken || "",
              expiresAt: r.mcpOAuth?.[t]?.expiresAt
            }
          }
        })))?.success) this._lastServedClientId = e.client_id;
      else ne(this.serverName, "saveClientInformation persist resolved unsuccessful")
    } catch (n) {
      ne(this.serverName, `saveClientInformation persist failed: ${l(n)}`)
    }
  }
  async tokens() {
    let e = await this.readCredentialStore(),
      t = el(this.serverName, this.serverConfig),
      n = e?.mcpOAuth?.[t];
    if (w1() && this.serverConfig.oauth?.xaa && !n?.refreshToken && (!n?.accessToken || n.expiresAt != null && (n.expiresAt - Date.now()) / 1000 <= 300)) {
      if (!this._refreshInProgress) ne(this.serverName, n ? "XAA: access_token expiring, attempting silent exchange" : "XAA: no access_token yet, attempting silent exchange"), this._refreshInProgress = this.xaaRefresh().finally(() => {
        this._refreshInProgress = void 0
      });
      try {
        let k = await this._refreshInProgress;
        if (k) return this._lastServedAccessToken = k.access_token, this._presented.record(k.access_token), this._presented.record(k.refresh_token), this._lastServedRefreshToken = k.refresh_token ?? this._lastServedRefreshToken, k
      } catch (k) {
        ne(this.serverName, `XAA silent exchange failed: ${l(k)}`)
      }
    }
    if (!n) {
      ne(this.serverName, "No token data found"), this.clearStepUpPendingOnCredentialGone();
      return
    }
    if (!n.accessToken) {
      ne(this.serverName, "No access token in storage"), this.clearStepUpPendingOnCredentialGone();
      return
    }
    this._lastServedAccessToken = n.accessToken, this._presented.record(n.accessToken), this._presented.record(n.refreshToken), this._lastServedRefreshToken = n.refreshToken;
    let r = n.expiresAt != null ? (n.expiresAt - Date.now()) / 1000 : void 0,
      d = this._pendingStepUpScope,
      g = d !== void 0;
    if (g) ne(this.serverName, `Step-up pending (${cw("scope",d)}), omitting refresh_token`);
    if (r != null && r <= 0 && !n.refreshToken) {
      ne(this.serverName, "Token expired without refresh token"), this.clearStepUpPendingOnCredentialGone();
      return
    }
    if (r != null && r <= 300 && n.refreshToken && !g) {
      if (!this._refreshInProgress) ne(this.serverName, `Token expires in ${Math.floor(r)}s, attempting proactive refresh`), this._refreshInProgress = this.refreshAuthorization(n.refreshToken).finally(() => {
        this._refreshInProgress = void 0
      });
      else ne(this.serverName, "Token refresh already in progress, reusing existing promise");
      try {
        let k = await this._refreshInProgress;
        if (k) return ne(this.serverName, "Token refreshed successfully"), this._lastServedAccessToken = k.access_token, this._presented.record(k.access_token), this._presented.record(k.refresh_token), this._lastServedRefreshToken = k.refresh_token ?? this._lastServedRefreshToken, k;
        ne(this.serverName, "Token refresh failed, returning current tokens")
      } catch (k) {
        ne(this.serverName, `Token refresh error: ${AP(k,this.serverConfig.url)}`)
      }
    }
    let s = {
      access_token: n.accessToken,
      refresh_token: g ? void 0 : n.refreshToken,
      expires_in: r,
      scope: n.scope,
      token_type: "Bearer"
    };
    return ne(this.serverName, "Returning tokens"), ne(this.serverName, `Has refresh token: ${!!s.refresh_token}`), ne(this.serverName, r != null ? `Expires in: ${Math.floor(r)}s` : "No expiration specified"), s
  }
  async saveTokens(e) {
    if (this._presented.record(e.access_token), this._presented.record(e.refresh_token), this.handleRedirection) this._pendingStepUpScope = void 0;
    let t = el(this.serverName, this.serverConfig);
    ne(this.serverName, "Saving tokens"), ne(this.serverName, `Token expires in: ${e.expires_in}`), ne(this.serverName, `Has refresh token: ${!!e.refresh_token}`);
    let n, r;
    try {
      n = await Un().mutate((d) => ({
        ...d,
        mcpOAuth: {
          ...d.mcpOAuth,
          [t]: {
            ...d.mcpOAuth?.[t],
            serverName: this.serverName,
            serverUrl: this.serverConfig.url,
            accessToken: e.access_token,
            refreshToken: e.refresh_token ?? d.mcpOAuth?.[t]?.refreshToken,
            expiresAt: e.expires_in != null ? Date.now() + e.expires_in * 1000 : void 0,
            scope: e.scope
          }
        }
      }))
    } catch (d) {
      r = d
    }
    if (n?.success) this._lastServedAccessToken = e.access_token, this._lastServedRefreshToken = e.refresh_token ?? this._lastServedRefreshToken;
    this.logTokenPersistFailed(n, r)
  }
  logTokenPersistFailed(e, t) {
    Ie(this.serverName, this.serverConfig, e, t)
  }
  async xaaRefresh() {
    let e = q6();
    if (!e) return;
    let t = await _8t(e.issuer);
    if (!t) {
      ne(this.serverName, "XAA: id_token not cached, needs interactive re-auth");
      return
    }
    let n = this.serverConfig.oauth?.clientId,
      r = await wio(this.serverName, this.serverConfig);
    if (!n || !r?.clientSecret) {
      ne(this.serverName, "XAA: missing clientId or clientSecret in config \u2014 skipping silent refresh");
      return
    }
    let d = await SIn(e.issuer),
      g;
    try {
      g = await b8t(e.issuer)
    } catch (s) {
      ne(this.serverName, `XAA: OIDC discovery failed in silent refresh: ${l(s)}`);
      return
    }
    this._presented.record(r.clientSecret);
    try {
      let s = await le(this.serverConfig.url, {
          clientId: n,
          clientSecret: r.clientSecret,
          idpClientId: e.clientId,
          idpClientSecret: d,
          idpIdToken: t,
          idpTokenEndpoint: g.token_endpoint
        }, this.serverName),
        k = el(this.serverName, this.serverConfig),
        h, S;
      try {
        h = await Un().mutate((A) => {
          let C = A.mcpOAuth?.[k];
          return {
            ...A,
            mcpOAuth: {
              ...A.mcpOAuth,
              [k]: {
                ...C,
                serverName: this.serverName,
                serverUrl: this.serverConfig.url,
                accessToken: s.access_token,
                refreshToken: s.refresh_token ?? C?.refreshToken,
                expiresAt: s.expires_in != null ? Date.now() + s.expires_in * 1000 : void 0,
                scope: s.scope,
                clientId: n,
                clientSecret: r.clientSecret,
                discoveryState: {
                  authorizationServerUrl: s.authorizationServerUrl
                }
              }
            }
          }
        })
      } catch (A) {
        S = A
      }
      return this.logTokenPersistFailed(h, S), {
        access_token: s.access_token,
        token_type: "Bearer",
        expires_in: s.expires_in,
        scope: s.scope,
        refresh_token: s.refresh_token
      }
    } catch (s) {
      if (s instanceof K && s.shouldClearIdToken) await bIn(e.issuer), ne(this.serverName, "XAA: cleared id_token after exchange failure");
      throw s
    }
  }
  async redirectToAuthorization(e) {
    let t = this._pendingStepUpScope ? void 0 : this.serverConfig.oauth?.scopes || (this.serverConfig.oauth?.authServerMetadataUrl ? this.getCuratedMetadataScope() : void 0),
      n = e.searchParams.get("scope"),
      r = t ?? n;
    if (r !== n) ne(this.serverName, `Overrode authorization scope from ${n?cw("scope",n):"NONE"} to configured: ${r?cw("scope",r):"NONE"}`);
    let d = r === null ? null : sWo(r, this._metadata);
    if (d !== null && d !== n) {
      if (e.searchParams.set("scope", d), d !== t) ne(this.serverName, "Appended offline_access to authorization scope")
    }
    let g = iWo(e),
      s = e.searchParams.getAll("prompt"),
      k = g ? s.filter((R) => R !== "consent") : s;
    if (k.length !== s.length || k.length > 1) {
      if (e.searchParams.delete("prompt"), k.length > 0) e.searchParams.set("prompt", k.includes("consent") ? "consent" : k.at(-1))
    }
    this._authorizationUrl = e.toString();
    let h = e.searchParams.get("scope");
    if (ne(this.serverName, `Authorization URL: ${yio(e)}`), ne(this.serverName, `Scopes in URL: ${h?cw("scope",h):"NOT FOUND"}`), h) this._scopes = h, ne(this.serverName, `Captured scopes from authorization URL: ${cw("scope",h)}`);
    else {
      let R = this.getCuratedMetadataScope();
      if (R) this._scopes = R, ne(this.serverName, `Using scopes from metadata: ${cw("scope",R)}`);
      else ne(this.serverName, "No scopes available from URL or metadata")
    }
    if (this._scopes && !this.handleRedirection && this._pendingStepUpScope) {
      let R = el(this.serverName, this.serverConfig),
        I = this._scopes,
        U = !1;
      try {
        await Un().mutate((E) => {
          let M = E.mcpOAuth?.[R];
          if (!M) return E;
          return U = !0, {
            ...E,
            mcpOAuth: {
              ...E.mcpOAuth,
              [R]: {
                ...M,
                stepUpScope: I
              }
            }
          }
        })
      } catch (E) {
        ne(this.serverName, `step-up scope persist failed: ${l(E)}`)
      }
      if (U) ne(this.serverName, `Persisted step-up scope: ${cw("scope",I)}`)
    }
    if (!this.handleRedirection) {
      ne(this.serverName, "Redirection handling is disabled, skipping redirect");
      return
    }
    let S = e.toString();
    if (!S.startsWith("http://") && !S.startsWith("https://")) throw Error("Invalid authorization URL: must use http:// or https:// scheme");
    ne(this.serverName, "Redirecting to authorization URL");
    let A = yio(e);
    if (ne(this.serverName, `Authorization URL: ${A}`), this.onAuthorizationUrlCallback) this.onAuthorizationUrlCallback(S);
    if (this.skipBrowserOpen) {
      ne(this.serverName, `Skipping browser open (skipBrowserOpen=true). URL: ${A}`);
      return
    }
    let C = KH();
    if (C) ne(this.serverName, `Skipping browser open (headless environment). URL: ${A}`);
    else ne(this.serverName, `Opening authorization URL: ${A}`);
    let T = C ? !1 : await Ko(S);
    if (i("tengu_mcp_oauth_browser_open", {
        success: T,
        headless: C,
        platform: c(O())
      }), !C && !T) ne(this.serverName, "Browser didn't open automatically. URL is shown in UI.")
  }
  async saveCodeVerifier(e) {
    ne(this.serverName, "Saving code verifier"), this._codeVerifier = e
  }
  async codeVerifier() {
    if (!this._codeVerifier) throw ne(this.serverName, "No code verifier saved"), Error("No code verifier saved");
    return ne(this.serverName, "Returning code verifier"), this._presented.record(this._codeVerifier), this._codeVerifier
  }
  async invalidateCredentials(e) {
    if (e === "verifier") {
      this._codeVerifier = void 0, ne(this.serverName, "Invalidated credentials (scope: verifier)");
      return
    }
    let t = e,
      n = el(this.serverName, this.serverConfig),
      r = !1;
    try {
      let d = this._lastServedClientId,
        g = this._lastServedAccessToken,
        s = this._lastServedRefreshToken;
      await Un().mutate((k) => {
        let h = k.mcpOAuth?.[n];
        if (!h) return k;
        let S = {
          ...k.mcpOAuth
        };
        switch (t) {
          case "all": {
            let A = g != null && !!h.accessToken && h.accessToken !== g,
              C = d != null && h.clientId != null && h.clientId !== d;
            if (A || C) return ne(this.serverName, `invalidateCredentials('all') preserved: ${A?"foreign token":"concurrent re-registration"}`), k;
            if (!h.clientId && !h.refreshToken && h.accessToken === "") return k;
            S[n] = {
              serverName: h.serverName,
              serverUrl: h.serverUrl,
              accessToken: "",
              ...h.discoveryState && {
                discoveryState: h.discoveryState
              },
              ...h.stepUpScope && {
                stepUpScope: h.stepUpScope
              }
            };
            break
          }
          case "client":
            S[n] = {
              ...h,
              clientId: void 0,
              clientSecret: void 0
            };
            break;
          case "tokens": {
            if (s != null && h.refreshToken && h.refreshToken !== s || g != null && !!h.accessToken && h.accessToken !== g) return ne(this.serverName, "invalidateCredentials('tokens') preserved: concurrent rotation"), k;
            S[n] = {
              ...h,
              accessToken: "",
              refreshToken: void 0,
              expiresAt: 0
            };
            break
          }
          case "discovery":
            S[n] = {
              ...h,
              discoveryState: void 0,
              stepUpScope: void 0
            };
            break
        }
        return r = !0, {
          ...k,
          mcpOAuth: S
        }
      })
    } catch (d) {
      ne(this.serverName, `invalidateCredentials persist failed: ${l(d)}`)
    }
    if (r) ne(this.serverName, `Invalidated credentials (scope: ${e})`)
  }
  async saveDiscoveryState(e) {
    let t = el(this.serverName, this.serverConfig);
    ne(this.serverName, `Saving discovery state (authServer: ${vr(e.authorizationServerUrl)})`);
    let n = e.authorizationServerMetadata;
    this.registrationOfferedByDiscovery = n !== void 0 && (typeof n.registration_endpoint === "string" || n.client_id_metadata_document_supported === !0 && this.clientMetadataUrl !== void 0);
    try {
      await Un().mutate((r) => ({
        ...r,
        mcpOAuth: {
          ...r.mcpOAuth,
          [t]: {
            ...r.mcpOAuth?.[t],
            serverName: this.serverName,
            serverUrl: this.serverConfig.url,
            accessToken: r.mcpOAuth?.[t]?.accessToken || "",
            expiresAt: r.mcpOAuth?.[t]?.expiresAt,
            discoveryState: {
              authorizationServerUrl: e.authorizationServerUrl,
              resourceMetadataUrl: e.resourceMetadataUrl,
              oauthMetadataFound: !!e.authorizationServerMetadata,
              ...n !== void 0 && typeof n.registration_endpoint !== "string" && n.client_id_metadata_document_supported !== !0 && {
                registrationNotOfferedAt: Date.now()
              }
            }
          }
        }
      }))
    } catch (r) {
      ne(this.serverName, `saveDiscoveryState persist failed: ${l(r)}`)
    }
  }
  async discoveryState() {
    let e = this.serverConfig.oauth?.authServerMetadataUrl;
    if (e) {
      ne(this.serverName, `Fetching metadata from configured URL: ${vr(e)}`);
      try {
        let g = await se(this.serverName, this.serverConfig.url, {
          configuredMetadataUrl: e
        });
        if (g) return {
          authorizationServerUrl: g.issuer,
          authorizationServerMetadata: g
        }
      } catch (g) {
        ne(this.serverName, `Failed to fetch from configured metadata URL: ${AP(g,this.serverConfig.url)}`)
      }
      return
    }
    let n = await Un().readAsync(),
      r = el(this.serverName, this.serverConfig),
      d = n?.mcpOAuth?.[r]?.discoveryState;
    if (d?.authorizationServerUrl) return ne(this.serverName, `Returning cached discovery state (authServer: ${vr(d.authorizationServerUrl)})`), {
      authorizationServerUrl: d.authorizationServerUrl,
      resourceMetadataUrl: d.resourceMetadataUrl,
      resourceMetadata: d.resourceMetadata,
      authorizationServerMetadata: d.authorizationServerMetadata
    };
    return
  }
  async refreshAuthorization(e) {
    let t = el(this.serverName, this.serverConfig),
      n = Uw();
    await ce().mkdir(n);
    let r = t.replace(/[^a-zA-Z0-9]/g, "_"),
      d = Je(n, `mcp-refresh-${r}.lock`),
      g;
    for (let s = 0; s < he; s++) try {
      ne(this.serverName, `Acquiring refresh lock (attempt ${s+1})`), g = await Ri(d, {
        realpath: !1,
        stale: 60000,
        update: 5000,
        onCompromised: () => {
          ne(this.serverName, "Refresh lock was compromised")
        }
      }), ne(this.serverName, "Acquired refresh lock");
      break
    } catch (k) {
      let h = v(k);
      if (h === "ELOCKED") {
        ne(this.serverName, `Refresh lock held by another process, waiting (attempt ${s+1}/${he})`), await Q(1000 + Math.random() * 1000);
        continue
      }
      ne(this.serverName, `Failed to acquire refresh lock: ${h}; skipping refresh`);
      return
    }
    if (!g) {
      ne(this.serverName, `Could not acquire refresh lock after ${he} retries; skipping refresh`);
      return
    }
    try {
      Dx();
      let h = (await Un().readAsync())?.mcpOAuth?.[t];
      if (h) {
        let S = h.expiresAt != null ? (h.expiresAt - Date.now()) / 1000 : void 0;
        if (h.accessToken && (S == null || S > 300)) return ne(this.serverName, S != null ? `Another process already refreshed tokens (expires in ${Math.floor(S)}s)` : "Another process already refreshed tokens (no expiration)"), {
          access_token: h.accessToken,
          refresh_token: h.refreshToken,
          expires_in: S,
          scope: h.scope,
          token_type: "Bearer"
        };
        if (h.refreshToken) e = h.refreshToken, this._lastServedRefreshToken = h.refreshToken, this._presented.record(h.refreshToken)
      }
      return await this._doRefresh(e)
    } finally {
      if (g) try {
        await g(), ne(this.serverName, "Released refresh lock")
      } catch {
        ne(this.serverName, "Failed to release refresh lock")
      }
    }
  }
  async readConcurrentRefreshWinner() {
    Dx();
    let t = (await Un().readAsync())?.mcpOAuth?.[el(this.serverName, this.serverConfig)],
      n = t?.expiresAt != null ? (t.expiresAt - Date.now()) / 1000 : void 0;
    if (t?.accessToken && (n == null || n > 300)) {
      ne(this.serverName, "Another process landed fresh tokens; using those");
      let r = {
        access_token: t.accessToken,
        refresh_token: t.refreshToken,
        expires_in: n,
        scope: t.scope,
        token_type: "Bearer"
      };
      return {
        tokenData: t,
        freshTokens: r
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
      n = Pb(this.serverConfig),
      r = (d, g) => {
        i(d === "success" ? "tengu_mcp_oauth_refresh_success" : "tengu_mcp_oauth_refresh_failure", {
          transportType: c(this.serverConfig.type),
          ...n && {
            mcpServerBaseUrl: n
          },
          ...g && {
            reason: c(g)
          }
        })
      };
    for (let d = 1; d <= t; d++) {
      let g;
      try {
        ne(this.serverName, "Starting token refresh");
        let s = yIn(),
          k = this._metadata;
        if (!k) {
          let S = await this.discoveryState();
          if (S?.authorizationServerMetadata) k = S.authorizationServerMetadata;
          else if (S?.authorizationServerUrl) ne(this.serverName, `Re-discovering metadata from persisted auth server URL: ${vr(S.authorizationServerUrl)}`), k = await dtt(S.authorizationServerUrl, {
            fetchFn: s
          })
        }
        if (!k) k = await se(this.serverName, this.serverConfig.url, {
          configuredMetadataUrl: this.serverConfig.oauth?.authServerMetadataUrl,
          fetchFn: s
        });
        if (!k) {
          ne(this.serverName, "Failed to discover OAuth metadata"), r("failure", "metadata_discovery_failed"), m("mcp_oauth_refresh", "mcp_oauth_refresh_metadata_failed");
          return
        }
        if (this._metadata = k, g = await this.clientInformation(), !g) {
          ne(this.serverName, "No client information available"), r("failure", "no_client_info"), m("mcp_oauth_refresh", "mcp_oauth_refresh_no_client_info");
          return
        }
        let h = await Ifr(new URL(this.serverConfig.url), {
          metadata: k,
          clientInformation: g,
          refreshToken: e,
          resource: new URL(this.serverConfig.url),
          fetchFn: s
        });
        if (h) return ne(this.serverName, "Token refresh successful"), await this.saveTokens(h), r("success"), _("mcp_oauth_refresh"), h;
        ne(this.serverName, "Token refresh returned no tokens"), r("failure", "no_tokens_returned"), m("mcp_oauth_refresh", "mcp_oauth_refresh_no_tokens");
        return
      } catch (s) {
        if (s instanceof K2e) {
          ne(this.serverName, `Token refresh failed with invalid_grant: ${s.message}`);
          let {
            freshTokens: T
          } = await this.readConcurrentRefreshWinner();
          if (T) return p("mcp_oauth_refresh", "mcp_oauth_refresh_concurrent_winner"), T;
          ne(this.serverName, "No valid tokens in storage, clearing stored tokens"), r("failure", "invalid_grant"), m("mcp_oauth_refresh", "mcp_oauth_refresh_invalid_grant"), await this.invalidateCredentials("tokens"), Iwe.emit(this.serverName);
          return
        }
        if (s instanceof TT && (s.errorCode === "invalid_client" || s.errorCode === "unauthorized_client")) {
          ne(this.serverName, "Token refresh failed: DCR client expired or invalid; clearing stored client registration");
          let {
            tokenData: T,
            freshTokens: R
          } = await this.readConcurrentRefreshWinner();
          if (R) return p("mcp_oauth_refresh", "mcp_oauth_refresh_concurrent_winner"), R;
          if (T?.clientId && g && T.clientId !== g.client_id) {
            ne(this.serverName, "Another process re-registered client; preserving"), r("failure", "concurrent_reregister"), p("mcp_oauth_refresh", "mcp_oauth_refresh_concurrent_reregister");
            return
          }
          r("failure", s.errorCode === "unauthorized_client" ? "unauthorized_client" : "invalid_client"), m("mcp_oauth_refresh", s.errorCode === "unauthorized_client" ? "mcp_oauth_refresh_unauthorized_client" : "mcp_oauth_refresh_invalid_client"), await this.invalidateCredentials("all"), Iwe.emit(this.serverName);
          return
        }
        if (fe(s)) {
          ne(this.serverName, `Token refresh failed: token response rejected by SDK schema: ${l(s)}`), r("failure", "token_response_schema_rejected"), m("mcp_oauth_refresh", "mcp_oauth_refresh_token_response_schema_rejected");
          return
        }
        let k = s instanceof ZFe,
          h = s instanceof Error && /timeout|timed out|etimedout|econnreset/i.test(s.message),
          S = s instanceof Mwe || s instanceof VEt || s instanceof qEt,
          A = h || S || k;
        if (!A || d >= t) {
          ne(this.serverName, `Token refresh failed: ${AP(s,this.serverConfig.url)}`), r("failure", A ? "transient_retries_exhausted" : "request_failed"), m("mcp_oauth_refresh", "mcp_oauth_refresh_request_failed");
          return
        }
        let C = 1000 * Math.pow(2, d - 1);
        ne(this.serverName, `Token refresh failed, retrying in ${C}ms (attempt ${d}/${t})`), await Q(C)
      }
    }
    return
  }
}
async function O4o() {
  let e = process.env.MCP_CLIENT_SECRET;
  if (e) return e;
  if (!process.stdin.isTTY) throw Error("No TTY available to prompt for client secret. Set MCP_CLIENT_SECRET env var instead.");
  return new Promise((t, n) => {
    process.stderr.write("Enter OAuth client secret: "), process.stdin.setRawMode?.(!0);
    let r = "",
      d = (g) => {
        let s = g.toString();
        if (s === `
` || s === "\r") process.stdin.setRawMode?.(!1), process.stdin.removeListener("data", d), process.stderr.write(`
`), t(r);
        else if (s === "\x03") process.stdin.setRawMode?.(!1), process.stdin.removeListener("data", d), n(Error("Cancelled"));
        else if (s === "\x7F" || s === "\b") r = r.slice(0, -1);
        else r += s
      };
    process.stdin.on("data", d)
  })
}
async function M4o(e, t, n) {
  let r = el(e, t);
  try {
    return await Un().mutate((d) => ({
      ...d,
      mcpOAuthClientConfig: {
        ...d.mcpOAuthClientConfig,
        [r]: {
          clientSecret: n
        }
      }
    }))
  } catch (d) {
    return {
      success: !1,
      warning: l(d)
    }
  }
}
async function D4o(e, t) {
  let n = el(e, t);
  await Un().mutate((r) => {
    if (!r.mcpOAuthClientConfig?.[n]) return r;
    let d = {
      ...r.mcpOAuthClientConfig
    };
    return delete d[n], {
      ...r,
      mcpOAuthClientConfig: d
    }
  })
}
async function wio(e, t) {
  let r = await Un().readAsync(),
    d = el(e, t);
  return r?.mcpOAuthClientConfig?.[d]
}

function Pe(e) {
  if (!e) return;
  if ("scope" in e && typeof e.scope === "string") return e.scope;
  if ("default_scope" in e && typeof e.default_scope === "string") return e.default_scope;
  return
}

function sWo(e, t) {
  if (e !== null && e.split(" ").includes("offline_access")) return e;
  if (!t?.scopes_supported?.includes("offline_access")) return e;
  return e === null ? "offline_access" : `${e} offline_access`
}
var st = ["login.microsoftonline.com", "login.microsoftonline.us", "login.partner.microsoftonline.cn", "login.chinacloudapi.cn"],
  ot = [".b2clogin.com", ".ciamlogin.com"];

function iWo(e) {
  try {
    let t = (typeof e === "string" ? new URL(e) : e).hostname;
    return st.includes(t) || ot.some((n) => t.endsWith(n))
  } catch {
    return !1
  }
}
export {
  rWo,
  oWo,
  yio,
  _io,
  yIn,
  bio,
  yEt,
  T4o,
  C4o,
  R4o,
  _In,
  A4o,
  x4o,
  P4o,
  Sio,
  I4o,
  y8t,
  _Et,
  O4o,
  M4o,
  D4o,
  wio,
  sWo,
  iWo
};
