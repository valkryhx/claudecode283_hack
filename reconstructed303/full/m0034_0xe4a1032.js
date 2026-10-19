// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.303
import {
  L
} from "B:/~BUN/root/chunk-rpez7z7a.js";

function s() {
  return "prod"
}
var Whe = ["", "-staging-oauth", "-local-oauth", "-custom-oauth"];

function F5() {
  if (process.env.CLAUDE_CODE_CUSTOM_OAUTH_URL) return "-custom-oauth";
  switch (s()) {
    case "local":
      return "-local-oauth";
    case "staging":
      return "-staging-oauth";
    case "prod":
      return ""
  }
}

function dWo() {
  return F5() === "-staging-oauth"
}
var zne = 31536000;
var cWo = Math.round(zne / 86400),
  IA = "user:inference",
  H5 = "user:profile",
  Lmn = "user:sessions:claude_code",
  qXn = [H5, Lmn],
  Nbt = "user:plugins",
  KXn = "user:projects:read",
  YXn = "user:projects:write";

function XXn(t) {
  return Array.isArray(t) && t.includes(IA)
}
var c = "org:create_api_key",
  vp = "oauth-2025-04-20",
  n = [c, H5],
  r = [H5, IA, Lmn, "user:mcp_servers", "user:file_upload"];

function Fbt() {
  let t = ln(),
    e = [...r];
  if (t.PLUGINS_SCOPE_REGISTERED) e.push(Nbt);
  return e
}

function uWo() {
  return L([...n, ...Fbt()])
}
var bDe = ["user:design:read", "user:design:write"],
  u = [KXn, YXn];

function t1r(t) {
  if (!Array.isArray(t)) return [];
  let e = u;
  return t.filter((o) => e.includes(o))
}

function pWo(t) {
  return L([...Fbt(), ...t1r(t)])
}
var a = {
    BASE_API_URL: "https://api.anthropic.com",
    CONSOLE_AUTHORIZE_URL: "https://platform.claude.com/oauth/authorize",
    CLAUDE_AI_AUTHORIZE_URL: "https://claude.com/cai/oauth/authorize",
    CLAUDE_AI_ORIGIN: "https://claude.ai",
    TOKEN_URL: "https://platform.claude.com/v1/oauth/token",
    API_KEY_URL: "https://api.anthropic.com/api/oauth/claude_cli/create_api_key",
    ROLES_URL: "https://api.anthropic.com/api/oauth/claude_cli/roles",
    CONSOLE_SUCCESS_URL: "https://platform.claude.com/buy_credits?returnUrl=/oauth/code/success%3Fapp%3Dclaude-code",
    CLAUDEAI_SUCCESS_URL: "https://platform.claude.com/oauth/code/success?app=claude-code",
    MANUAL_REDIRECT_URL: "https://platform.claude.com/oauth/code/callback",
    CLIENT_ID: "9d1c250a-e61b-44d9-88ed-5944d1962f5e",
    DESIGN_CLIENT_ID: "59637612-477b-4836-a601-b0589eda7704",
    OAUTH_FILE_SUFFIX: "",
    PLUGINS_SCOPE_REGISTERED: !0,
    PROJECTS_SCOPES_REGISTERED: !0,
    MCP_PROXY_URL: "https://mcp-proxy.anthropic.com",
    MCP_PROXY_PATH: "/v1/mcp/{server_id}"
  },
  wGe = "https://claude.ai/oauth/claude-code-client-metadata",
  i = void 0;

function S() {
  let t = process.env.CLAUDE_LOCAL_OAUTH_API_BASE?.replace(/\/$/, "") ?? "http://localhost:8000",
    e = process.env.CLAUDE_LOCAL_OAUTH_APPS_BASE?.replace(/\/$/, "") ?? "http://localhost:4000",
    o = process.env.CLAUDE_LOCAL_OAUTH_CONSOLE_BASE?.replace(/\/$/, "") ?? "http://localhost:3000";
  return {
    BASE_API_URL: t,
    CONSOLE_AUTHORIZE_URL: `${o}/oauth/authorize`,
    CLAUDE_AI_AUTHORIZE_URL: `${e}/oauth/authorize`,
    CLAUDE_AI_ORIGIN: e,
    TOKEN_URL: `${t}/v1/oauth/token`,
    API_KEY_URL: `${t}/api/oauth/claude_cli/create_api_key`,
    ROLES_URL: `${t}/api/oauth/claude_cli/roles`,
    CONSOLE_SUCCESS_URL: `${o}/buy_credits?returnUrl=/oauth/code/success%3Fapp%3Dclaude-code`,
    CLAUDEAI_SUCCESS_URL: `${o}/oauth/code/success?app=claude-code`,
    MANUAL_REDIRECT_URL: `${o}/oauth/code/callback`,
    CLIENT_ID: "22422756-60c9-4084-8eb7-27705fd5cf9a",
    DESIGN_CLIENT_ID: "00000000-0000-4000-8000-000000000000",
    OAUTH_FILE_SUFFIX: "-local-oauth",
    PLUGINS_SCOPE_REGISTERED: !0,
    PROJECTS_SCOPES_REGISTERED: !0,
    MCP_PROXY_URL: "http://localhost:8205",
    MCP_PROXY_PATH: "/v1/toolbox/shttp/mcp/{server_id}"
  }
}
var vGe = ["https://beacon.claude-ai.staging.ant.dev", "https://claude.fedstart.com", "https://claude-staging.fedstart.com"];

function n1r() {
  switch (s()) {
    case "local":
      return S();
    case "staging":
      return i ?? a;
    case "prod":
      return a
  }
}

function ln() {
  let t = n1r(),
    e = process.env.CLAUDE_CODE_CUSTOM_OAUTH_URL;
  if (e) {
    let _ = e.replace(/\/$/, "");
    if (!vGe.includes(_)) throw Error("CLAUDE_CODE_CUSTOM_OAUTH_URL is not an approved endpoint.");
    t = {
      ...t,
      BASE_API_URL: _,
      CONSOLE_AUTHORIZE_URL: `${_}/oauth/authorize`,
      CLAUDE_AI_AUTHORIZE_URL: `${_}/oauth/authorize`,
      CLAUDE_AI_ORIGIN: _,
      TOKEN_URL: `${_}/v1/oauth/token`,
      API_KEY_URL: `${_}/api/oauth/claude_cli/create_api_key`,
      ROLES_URL: `${_}/api/oauth/claude_cli/roles`,
      CONSOLE_SUCCESS_URL: `${_}/oauth/code/success?app=claude-code`,
      CLAUDEAI_SUCCESS_URL: `${_}/oauth/code/success?app=claude-code`,
      MANUAL_REDIRECT_URL: `${_}/oauth/code/callback`,
      OAUTH_FILE_SUFFIX: "-custom-oauth",
      PLUGINS_SCOPE_REGISTERED: !1,
      PROJECTS_SCOPES_REGISTERED: !1
    }
  }
  let o = process.env.CLAUDE_CODE_OAUTH_CLIENT_ID;
  if (o) t = {
    ...t,
    CLIENT_ID: o,
    PLUGINS_SCOPE_REGISTERED: !1,
    PROJECTS_SCOPES_REGISTERED: !1
  };
  return t
}
export {
  Whe,
  F5,
  dWo,
  zne,
  cWo,
  IA,
  H5,
  Lmn,
  qXn,
  Nbt,
  KXn,
  YXn,
  XXn,
  vp,
  Fbt,
  uWo,
  bDe,
  t1r,
  pWo,
  wGe,
  vGe,
  n1r,
  ln
};
