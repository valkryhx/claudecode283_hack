// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { L, ke, iP, so, we } from "B:/~BUN/root/chunk-rpez7z7a.js";
import { d } from "B:/~BUN/root/chunk-3aez4b53.js";
import { _n, t } from "B:/~BUN/root/chunk-6za2ez23.js";
import { Pe } from "B:/~BUN/root/chunk-fbyz9h0p.js";
import { XW } from "B:/~BUN/root/chunk-xf0m410v.js";
import { bQ } from "B:/~BUN/root/chunk-yt0knyw7.js";
import { Lo, re } from "B:/~BUN/root/chunk-c09hf5e4.js";
import { i } from "B:/~BUN/root/chunk-1kfn24jp.js";
import { gA } from "B:/~BUN/root/chunk-hb6x4e3n.js";
import { hze, Jle } from "B:/~BUN/root/chunk-8ye9n4fk.js";
import { g, m, p } from "B:/~BUN/root/chunk-kzgf20y6.js";
import { F_e } from "B:/~BUN/root/chunk-jynk66qn.js";
import { JGn } from "B:/~BUN/root/chunk-c44qc88s.js";
import { iq, aq, Slo } from "B:/~BUN/root/chunk-9grc6xh0.js";
import { AWn } from "B:/~BUN/root/chunk-1fjjnb3f.js";
function v(e) {
  try {
    let r = new URL(e);
    if (r.protocol !== "https:" && r.protocol !== "http:") return;
    return r.origin;
  } catch {
    return;
  }
}
function kRe(e) {
  return {
    authorizationServerUrl: e.authorizationServerUrl,
    oauthMetadataFound: e.oauthMetadataFound,
    authServerMetadataUrl: e.authServerMetadataUrl
  };
}
function l(e) {
  return e !== void 0 && e.authorizationServerUrl !== "";
}
function iCn({
  previous: previous,
  discovered: discovered,
  servedMetadataUrl: servedMetadataUrl
}) {
  if (l(previous) && previous.authServerMetadataUrl !== void 0) return {
    authorizationServerUrl: previous.authorizationServerUrl,
    oauthMetadataFound: previous.oauthMetadataFound,
    authServerMetadataUrl: previous.authServerMetadataUrl
  };
  if (!discovered.oauthMetadataFound || v(discovered.authorizationServerUrl) === void 0) return l(previous) ? {
    authorizationServerUrl: previous.authorizationServerUrl,
    oauthMetadataFound: previous.oauthMetadataFound
  } : {
    ...discovered
  };
  if (l(previous) && previous.oauthMetadataFound !== !0 && servedMetadataUrl !== void 0) return {
    authorizationServerUrl: previous.authorizationServerUrl,
    oauthMetadataFound: previous.oauthMetadataFound
  };
  return {
    ...discovered,
    authServerMetadataUrl: servedMetadataUrl ?? null
  };
}
function P(e, {
  servedMetadataUrl: servedMetadataUrl_2,
  interactiveSignIn: interactiveSignIn
}) {
  if (!l(e)) return e;
  let authServerMetadataUrl = servedMetadataUrl_2 ?? null;
  return (interactiveSignIn ? e.authServerMetadataUrl === authServerMetadataUrl : e.authServerMetadataUrl !== void 0) ? e : {
    ...e,
    authServerMetadataUrl: authServerMetadataUrl
  };
}
function aCn({
  previous: previous_2,
  signIn: signIn,
  servedMetadataUrl: servedMetadataUrl_3,
  interactiveSignIn: interactiveSignIn_2
}) {
  if (signIn !== void 0 && v(signIn.authorizationServerUrl) !== void 0 && (interactiveSignIn_2 || !l(previous_2))) {
    let {
      authServerMetadataUrl: authServerMetadataUrl_2,
      ...s
    } = previous_2 ?? {
      authorizationServerUrl: ""
    };
    return interactiveSignIn_2 || signIn.oauthMetadataFound ? {
      ...previous_2,
      authorizationServerUrl: signIn.authorizationServerUrl,
      oauthMetadataFound: signIn.oauthMetadataFound,
      authServerMetadataUrl: servedMetadataUrl_3 ?? null
    } : {
      ...s,
      authorizationServerUrl: signIn.authorizationServerUrl,
      oauthMetadataFound: signIn.oauthMetadataFound
    };
  }
  if (previous_2 !== void 0 && !interactiveSignIn_2 && previous_2.oauthMetadataFound !== !0 && previous_2.authServerMetadataUrl === void 0) return signIn !== void 0 && servedMetadataUrl_3 === void 0 && signIn.oauthMetadataFound && v(signIn.authorizationServerUrl) !== void 0 ? {
    ...previous_2,
    authorizationServerUrl: signIn.authorizationServerUrl,
    oauthMetadataFound: !0,
    authServerMetadataUrl: null
  } : previous_2;
  return previous_2 && P(previous_2, {
    servedMetadataUrl: servedMetadataUrl_3,
    interactiveSignIn: interactiveSignIn_2
  });
}
function MEt({
  previous: previous_3,
  issuedBy: r,
  interactiveSignIn: interactiveSignIn_3
}) {
  let a = previous_3?.authServerMetadataUrl;
  return {
    authorizationServerUrl: r,
    oauthMetadataFound: !0,
    authServerMetadataUrl: !interactiveSignIn_3 && a !== void 0 ? a : null
  };
}
import { isAbsolute as b } from "path";
function C(e) {
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
      return e;
  }
}
function F(e) {
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
      return e;
  }
}
function O(e) {
  return F(e.scope) === "repo" || e.agentSource !== void 0 && C(e.agentSource) === "repo";
}
function R(e, r) {
  if (r !== void 0) return !0;
  if (e.scope === "project") return !0;
  return e.agentSource !== void 0 && C(e.agentSource) !== "operator";
}
async function w(CLAUDE_CODE_MCP_SERVER_NAME, r) {
  if (!r.headersHelper) return null;
  let CLAUDE_PLUGIN_ROOT = typeof r.pluginPath === "string" && b(r.pluginPath) ? r.pluginPath : void 0;
  try {
    re(CLAUDE_CODE_MCP_SERVER_NAME, "Executing headersHelper to get dynamic headers");
    let isRepoResidentConfig = r.scope !== void 0 && O({
        scope: r.scope,
        agentSource: r.agentSource
      }),
      o = await AWn({
        command: r.headersHelper,
        isRepoResidentConfig: isRepoResidentConfig,
        repoResidentOrigin: r.declaredIn,
        cwd: CLAUDE_PLUGIN_ROOT ?? (isRepoResidentConfig ? so() ?? r.declaredIn ?? ke() : r.scope === "dynamic" && r.agentSource === void 0 ? so() ?? ke() : Pe()),
        scrubCredentialEnv: R(r, CLAUDE_PLUGIN_ROOT),
        env: {
          CLAUDE_CODE_MCP_SERVER_NAME: CLAUDE_CODE_MCP_SERVER_NAME,
          CLAUDE_CODE_MCP_SERVER_URL: r.url,
          ...(CLAUDE_PLUGIN_ROOT && {
            CLAUDE_PLUGIN_ROOT: CLAUDE_PLUGIN_ROOT
          })
        }
      });
    if (o.ok) return re(CLAUDE_CODE_MCP_SERVER_NAME, `Successfully retrieved ${Object.keys(o.headers).length} headers from headersHelper`), g("mcp_headers_helper"), o.headers;
    if (o.reason === "missing_trust") {
      let s = iP() ? "not available to a session rooted at the home directory without a person present (home trust is session-only): run Claude Code interactively here and accept the trust dialog for that session, or work from a project directory you have trusted" : `accept the trust dialog here once interactively, or set projects[${Slo(gA())}].hasTrustDialogAccepted in ${bQ()}`;
      if (re(CLAUDE_CODE_MCP_SERVER_NAME, `headersHelper not run: this workspace has no persisted trust; ${s}.`), we() && JGn(`mcp headersHelper ${CLAUDE_CODE_MCP_SERVER_NAME}`)) XW(`MCP server '${_n(CLAUDE_CODE_MCP_SERVER_NAME)}': headersHelper not run \u2014 this workspace has no persisted trust; ${s}.
`);
      return i("tengu_mcp_headersHelper_missing_trust", {}), p("mcp_headers_helper", "missing_trust"), null;
    }
    throw m("mcp_headers_helper", o.reason), Error(E(CLAUDE_CODE_MCP_SERVER_NAME, o.reason));
  } catch (error) {
    return Lo(CLAUDE_CODE_MCP_SERVER_NAME, `Error getting headers from headersHelper: ${d(error)}`), t(`Error getting MCP headers from headersHelper for server '${CLAUDE_CODE_MCP_SERVER_NAME}': ${d(error)}`, {
      level: "error"
    }), null;
  }
}
function E(e, r) {
  switch (r) {
    case "exec_failed":
      return `headersHelper for MCP server '${e}' did not return a valid value`;
    case "parse_failed":
      return `headersHelper for MCP server '${e}' did not return valid JSON`;
    case "non_object":
      return `headersHelper for MCP server '${e}' must return a JSON object with string key-value pairs`;
    case "non_string_value":
      return `headersHelper for MCP server '${e}' returned a non-string header value`;
  }
}
async function DEt(e, r) {
  let n = {},
    a = [],
    blankList = iq();
  for (let [M, u] of Object.entries(r.headers ?? {})) {
    let {
      expanded: expanded,
      missingVars: missingVars
    } = aq(u, void 0, void 0, {
      remoteSink: !0,
      blankList: blankList
    });
    n[M] = expanded, a.push(...missingVars);
  }
  if (a.length > 0) re(e, `Header values reference unset environment variables: ${L(a).join(", ")}`);
  let s = (await w(e, r)) || {};
  return {
    ...n,
    ...s
  };
}
var x = 5;
function Pce(e, r, n) {
  let a;
  return async (o, s) => {
    let M = (s?.method ?? "GET").toUpperCase() === "GET",
      u = o;
    for (let h = 0;; h++) {
      if (!U(r, u)) return n(u, s);
      a ??= _(e, r);
      let headers = new Headers(await a);
      new Headers(s?.headers).forEach((item, index) => headers.set(index, item));
      let c = await n(u, {
          ...s,
          headers: headers,
          redirect: "manual"
        }),
        y = c.headers.get("location");
      if (!(c.status >= 300 && c.status < 400) || !y || h === x) return c;
      let S = new URL(y, u);
      if (!(M ? S.protocol === "https:" || S.protocol === "http:" : (c.status === 307 || c.status === 308) && U(r, S))) return c;
      u = S;
    }
  };
}
async function lCn(e, r, n) {
  return U(r, n) ? Object.fromEntries(await _(e, r)) : {};
}
function dCn(e) {
  return r => {
    if (!Jle(hze(r), e)) throw Error("Refused a redirect to another origin");
  };
}
function U(e, r) {
  return (!!e.headers || !!e.headersHelper) && Jle(String(r), e.url);
}
async function _(e, r) {
  let headers_2 = new Headers();
  for (let [a, o] of Object.entries(await DEt(e, r))) headers_2.set(a, o);
  return headers_2.delete("authorization"), F_e(r.headers, Object.fromEntries(headers_2)), headers_2;
}
export { kRe, iCn, aCn, MEt, DEt, Pce, lCn, dCn };