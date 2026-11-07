// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  f,
  de
} from "B:/~BUN/root/chunk-drx9cnw1.js";
import {
  d
} from "B:/~BUN/root/chunk-y2g9f85n.js";
import {
  Ee,
  bP,
  mo,
  ye
} from "B:/~BUN/root/chunk-game8aqv.js";
import {
  Gs,
  ae
} from "B:/~BUN/root/chunk-xrwdh0g4.js";
import {
  t
} from "B:/~BUN/root/chunk-2pp12te6.js";
import {
  Ue
} from "B:/~BUN/root/chunk-eev762xg.js";
import {
  IN
} from "B:/~BUN/root/chunk-15vbkr6z.js";
import {
  Nn
} from "B:/~BUN/root/chunk-jdtvghyw.js";
import {
  l
} from "B:/~BUN/root/chunk-mb9chr1y.js";
import {
  g,
  m,
  c
} from "B:/~BUN/root/chunk-3z3yrbk4.js";
import {
  Bs,
  Kn
} from "B:/~BUN/root/chunk-gvasf6q6.js";
import {
  yG
} from "B:/~BUN/root/chunk-j6pt0v41.js";
import {
  v,
  Bfe,
  jfe,
  HD
} from "B:/~BUN/root/chunk-1ks9vs37.js";
import {
  bt
} from "B:/~BUN/root/chunk-ja520myc.js";
import {
  KD,
  ha,
  TDs,
  l_t
} from "B:/~BUN/root/chunk-q2rjek8y.js";
import {
  Czn,
  NAe,
  Cte,
  ri,
  ob,
  di
} from "B:/~BUN/root/chunk-3xdsa4p8.js";
import {
  a6,
  X8,
  GTn
} from "B:/~BUN/root/chunk-27h4st9h.js";
import {
  zr,
  kIe
} from "B:/~BUN/root/chunk-7jbamvvk.js";
import {
  _Nt
} from "B:/~BUN/root/chunk-tdekz3md.js";
import {
  YIn
} from "B:/~BUN/root/chunk-vke7wtay.js";
import {
  Vbr
} from "B:/~BUN/root/chunk-63btkzab.js";
import {
  EF
} from "B:/~BUN/root/chunk-k3f9rj85.js";
import {
  L
} from "B:/~BUN/root/chunk-5ha2avah.js";

function qat() {
  return v("tengu_mcp_signed_out_fallback", !0)
}
var j = 604800000,
  O = 60000;

function _(e) {
  if (e === void 0) return !1;
  let r = Date.now() - e;
  return r > -O && r <= j
}

function $or(e, r, n) {
  if (!l_t(e, r, n)) return !1;
  if (!qat()) return !0;
  let i = ha(e, r),
    a = n?.[i]?.discoveryState?.tokenlessRejectedAt;
  if (a !== void 0 && _(a)) return bt().tokenlessRejections.set(i, a), !0;
  return TDs(e, r, n)
}

function Fkn(e) {
  if (e?.tokenlessRejectedAt === void 0) return e;
  let {
    tokenlessRejectedAt: r,
    ...n
  } = e;
  return n
}
var b = 60000;

function Uor(e, r) {
  let n = bt();
  n.rejectedStoredTokens.delete(e), n.tokenlessRejections.delete(e), n.savedAccessTokens.set(e, {
    accessToken: r,
    savedAt: Date.now()
  })
}

function Bor(e, r) {
  if (r?.discoveryState?.tokenlessRejectedAt !== void 0) return r.discoveryState.tokenlessRejectedAt;
  if (r?.accessToken || r?.refreshToken) return;
  let n = bt().tokenlessRejections.get(e);
  return _(n) ? n : void 0
}

function Hkn(e, r) {
  return qat() && bt().rejectedStoredTokens.get(e) === r
}
async function jor(e, r, n) {
  let i = n?.lastAuthRejection;
  if (i === void 0 || i.accessToken !== void 0 || r.type !== "http" && r.type !== "sse" || !qat()) return;
  let a = ha(e, r),
    s = Date.now();
  bt().tokenlessRejections.set(a, s);

  function u(o) {
    return o?.discoveryState !== void 0 && !o.refreshToken && (!o.accessToken || Hkn(a, o.accessToken)) && !_(o.discoveryState.tokenlessRejectedAt)
  }
  try {
    if (!u((await Kn().readAsync())?.mcpOAuth?.[a])) return;
    await Kn().mutate((o) => {
      let S = o.mcpOAuth?.[a];
      if (S?.discoveryState === void 0 || !u(S)) return o;
      return {
        ...o,
        mcpOAuth: {
          ...o.mcpOAuth,
          [a]: {
            ...S,
            discoveryState: {
              ...S.discoveryState,
              tokenlessRejectedAt: s
            }
          }
        }
      }
    })
  } catch (o) {
    ae(e, `Recording that the server requires a sign-in failed: ${d(o)}`)
  }
}
async function Wor({
  name: e,
  serverRef: r,
  authProvider: n,
  isRefreshPath401: i,
  needsAuth: a
}) {
  let s = n?.lastAuthRejection,
    u = s?.accessToken;
  if (s?.status !== 401 || u === void 0 || !i || n?.pendingStepUpScope !== void 0 || r.type !== "http" && r.type !== "sse" || !qat()) return;
  let o = ha(e, r),
    S = bt(),
    y = S.savedAccessTokens.get(o);
  if (y?.accessToken === u && Date.now() - y.savedAt < b) return;
  let h = await KD(),
    p = h === Bs ? void 0 : h?.mcpOAuth?.[o];
  if (h === Bs || p?.refreshToken || _(p?.discoveryState?.tokenlessRejectedAt)) return;
  S.rejectedStoredTokens.set(o, u);
  let k = {
    name: e,
    type: "needs-auth",
    config: r
  };
  return S.connectsToRedialWithoutToken.set(k, a), k
}
async function zor(e, r, n, i) {
  let a = zr(),
    s = await e(),
    u = bt();
  if (i.type !== "http" && i.type !== "sse") return s;
  let o = ha(n, i),
    S = u.connectsToRedialWithoutToken.get(s);
  if (S === void 0) {
    if (s.type === "connected") u.tokenlessRejections.delete(o);
    return s
  }
  if (!r() || zr() !== a) return u.rejectedStoredTokens.delete(o), r() ? S() : s;
  ae(n, "The server rejected the stored access token and no refresh token is stored; connecting again without a token");
  let y = await e(),
    h = u.rejectedStoredTokens.get(o);
  if (y.type !== "connected") {
    u.rejectedStoredTokens.delete(o);
    let p = y.type === "needs-auth" && !u.connectsToRedialWithoutToken.has(y);
    if (c("mcp_signed_out_fallback", p ? "sign_in_required" : "not_connected"), p) return y;
    return r() ? S() : s
  }
  ae(n, "Connected without the rejected access token"), g("mcp_signed_out_fallback"), u.tokenlessRejections.delete(o);
  try {
    await Kn().mutate((p) => {
      let k = p.mcpOAuth?.[o];
      if (k === void 0 || k.refreshToken) return p;
      let C = !!k.accessToken && k.accessToken === h,
        M = Fkn(k.discoveryState);
      if (!C && M === k.discoveryState) return p;
      return {
        ...p,
        mcpOAuth: {
          ...p.mcpOAuth,
          [o]: {
            ...k,
            ...C && {
              accessToken: "",
              expiresAt: 0
            },
            discoveryState: M
          }
        }
      }
    })
  } catch (p) {
    ae(n, `Deleting the rejected access token failed: ${d(p)}`)
  }
  return y
}
import {
  isAbsolute as H
} from "path";

function A(e) {
  switch (e) {
    case "projectSettings":
    case "localSettings":
      return "repo";
    case "plugin":
    case "additionalDirectory":
      return "thirdParty";
    case "userSettings":
    case "flagSettings":
    case "policySettings":
    case "built-in":
      return "operator";
    default:
      return e
  }
}

function w(e) {
  switch (e) {
    case "project":
    case "local":
      return "repo";
    case "user":
    case "dynamic":
    case "enterprise":
    case "claudeai":
    case "managed":
    case "agent":
      return "operator";
    default:
      return e
  }
}

function D(e) {
  return w(e.scope) === "repo" || e.agentSource !== void 0 && A(e.agentSource) === "repo"
}

function F(e, r) {
  if (r !== void 0) return !0;
  if (e.scope === "project") return !0;
  return e.agentSource !== void 0 && A(e.agentSource) !== "operator"
}
async function x(e, r) {
  if (!r.headersHelper) return null;
  let n = typeof r.pluginPath === "string" && H(r.pluginPath) ? r.pluginPath : void 0;
  try {
    ae(e, "Executing headersHelper to get dynamic headers");
    let i = r.scope !== void 0 && D({
        scope: r.scope,
        agentSource: r.agentSource
      }),
      a = await Vbr({
        command: r.headersHelper,
        isRepoResidentConfig: i,
        repoResidentOrigin: r.declaredIn,
        cwd: n ?? (i ? mo() ?? r.declaredIn ?? Ee() : r.scope === "dynamic" && r.agentSource === void 0 ? mo() ?? Ee() : Ue()),
        scrubCredentialEnv: F(r, n),
        pluginId: r.pluginSource,
        readEnvAsStarts: (s) => EF(r, s),
        env: {
          CLAUDE_CODE_MCP_SERVER_NAME: e,
          CLAUDE_CODE_MCP_SERVER_URL: r.url,
          ...n && {
            CLAUDE_PLUGIN_ROOT: n
          }
        }
      });
    if (a.ok) return ae(e, `Successfully retrieved ${Object.keys(a.headers).length} headers from headersHelper`), g("mcp_headers_helper"), a.headers;
    if (a.reason === "missing_trust") {
      let s = jfe() ? `${Bfe}, so add the server at user scope or in a managed MCP config instead` : bP() ? "not available to a session rooted at the home directory without a person present (home trust is session-only): run Claude Code interactively here and accept the trust dialog for that session, or work from a project directory you have trusted" : `accept the trust dialog here once interactively, or set projects[${YIn(HD())}].hasTrustDialogAccepted in ${yG()}`;
      if (ae(e, `headersHelper not run: this workspace has no persisted trust; ${s}.`), ye() && _Nt(`mcp headersHelper ${e}`)) IN(`MCP server '${Nn(e)}': headersHelper not run \u2014 this workspace has no persisted trust; ${s}.
`);
      return l("tengu_mcp_headersHelper_missing_trust", {}), c("mcp_headers_helper", "missing_trust"), null
    }
    throw m("mcp_headers_helper", a.reason), Error(U(e, a.reason))
  } catch (i) {
    return Gs(e, `Error getting headers from headersHelper: ${d(i)}`), t(`Error getting MCP headers from headersHelper for server '${e}': ${d(i)}`, {
      level: "error"
    }), null
  }
}

function I(e) {
  let r, n = {},
    i = [];
  for (let [a, s] of Object.entries(e ?? {})) {
    if (typeof s === "string" && s.includes("${")) r ??= a6();
    let {
      expanded: u,
      missingVars: o
    } = X8(s, void 0, void 0, {
      remoteSink: !0,
      blankList: r
    });
    n[a] = u, i.push(...o)
  }
  return {
    staticHeaders: n,
    missingVars: i
  }
}

function U(e, r) {
  switch (r) {
    case "exec_failed":
      return `headersHelper for MCP server '${e}' did not return a valid value`;
    case "parse_failed":
      return `headersHelper for MCP server '${e}' did not return valid JSON`;
    case "non_object":
      return `headersHelper for MCP server '${e}' must return a JSON object with string key-value pairs`;
    case "non_string_value":
      return `headersHelper for MCP server '${e}' returned a non-string header value`
  }
}
async function iYt(e, r) {
  let {
    staticHeaders: n,
    missingVars: i
  } = EF(r, () => I(r.headers));
  if (i.length > 0) ae(e, `Header values reference unset environment variables: ${L(i).join(", ")}`);
  let a = await x(e, r) || {},
    s = {
      ...n,
      ...a
    };
  if (GTn() && URL.parse(r.url)?.hostname === "api.githubcopilot.com" && !Object.keys(s).some((u) => u.toLowerCase() === "x-mcp-features")) s["X-MCP-Features"] = "mcp_apps_disable_form_deferral";
  return s
}
var K = 5;

function dve(e, r, n) {
  let i;
  return async (a, s) => {
    let u = (s?.method ?? "GET").toUpperCase() === "GET",
      o = a;
    for (let S = 0;; S++) {
      if (!T(r, o)) return n(o, s);
      i ??= R(e, r);
      let y = new Headers(await i);
      new Headers(s?.headers).forEach((E, P) => y.set(P, E));
      let h = await n(o, {
          ...s,
          headers: y,
          redirect: "manual"
        }),
        p = h.headers.get("location");
      if (!(h.status >= 300 && h.status < 400) || !p || S === K) return h;
      let C = new URL(p, o);
      if (!(u ? C.protocol === "https:" || C.protocol === "http:" : (h.status === 307 || h.status === 308) && T(r, C))) return h;
      o = C
    }
  }
}
async function Gor(e, r, n) {
  return T(r, n) ? Object.fromEntries(await R(e, r)) : {}
}

function Vor(e) {
  return (r) => {
    if (!Cte(NAe(r), e)) throw Error("Refused a redirect to another origin")
  }
}

function T(e, r) {
  return (!!e.headers || !!e.headersHelper) && Cte(String(r), e.url)
}
async function R(e, r) {
  let n = new Headers;
  for (let [i, a] of Object.entries(await iYt(e, r))) n.set(i, a);
  return n.delete("authorization"), kIe(r.headers, Object.fromEntries(n)), n
}

function Kor(e, r) {
  let n = typeof e.pluginSource === "string" ? e.pluginSource : void 0;
  return {
    scope: de(Czn().safeParse(e.scope).data),
    isPlugin: e.pluginSource !== void 0,
    plugin_marketplace_kind: de(n === void 0 ? void 0 : ob(n) ?? (di(n) === ri ? "builtin" : "marketplace")),
    has_config_client_id: Boolean(e.oauth?.clientId),
    redirect_kind: f(r ? "custom" : "loopback")
  }
}
export {
  qat,
  $or,
  Fkn,
  Uor,
  Bor,
  Hkn,
  jor,
  Wor,
  zor,
  iYt,
  dve,
  Gor,
  Vor,
  Kor
};
