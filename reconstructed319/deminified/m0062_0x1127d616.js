// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { L } from "B:/~BUN/root/chunk-5ha2avah.js";
function E() {
  return "prod";
}
var Txe = ["", "-staging-oauth", "-local-oauth", "-custom-oauth"];
function vj() {
  if (process.env.CLAUDE_CODE_CUSTOM_OAUTH_URL) return "-custom-oauth";
  switch (E()) {
    case "local":
      return "-local-oauth";
    case "staging":
      return "-staging-oauth";
    case "prod":
      return "";
  }
}
function Tjs() {
  return vj() === "-staging-oauth";
}
var xwe = 31536000;
var Cjs = Math.round(xwe / 86400),
  OC = "user:inference",
  uY = "user:profile",
  kVn = "user:sessions:claude_code",
  bHr = [uY, kVn],
  wjt = "user:plugins",
  SHr = "user:projects:read",
  wHr = "user:projects:write";
function lwt(t) {
  return Array.isArray(t) && t.includes(OC);
}
var c = "org:create_api_key",
  Jc = "oauth-2025-04-20",
  n = [c, uY],
  r = [uY, OC, kVn, "user:mcp_servers", "user:file_upload"];
function kjt() {
  let t = nn(),
    e = [...r];
  if (t.PLUGINS_SCOPE_REGISTERED) e.push(wjt);
  return e;
}
function zPo() {
  return L([...n, ...kjt()]);
}
var Vqe = ["user:design:read", "user:design:write"],
  S = [SHr, wHr];
function GPo(t) {
  if (!Array.isArray(t)) return [];
  let e = S;
  return t.filter(item => e.includes(item));
}
function Rjs(t) {
  return L([...kjt(), ...GPo(t)]);
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
    HYBRID_SETTINGS_SCOPE_REGISTERED: !0,
    MCP_PROXY_URL: "https://mcp-proxy.anthropic.com",
    MCP_PROXY_PATH: "/v1/mcp/{server_id}"
  },
  Ent = "https://claude.ai/oauth/claude-code-client-metadata",
  u = void 0;
function i() {
  let BASE_API_URL = process.env.CLAUDE_LOCAL_OAUTH_API_BASE?.replace(/\/$/, "") ?? "http://localhost:8000",
    CLAUDE_AI_ORIGIN = process.env.CLAUDE_LOCAL_OAUTH_APPS_BASE?.replace(/\/$/, "") ?? "http://localhost:4000",
    o = process.env.CLAUDE_LOCAL_OAUTH_CONSOLE_BASE?.replace(/\/$/, "") ?? "http://localhost:3000";
  return {
    BASE_API_URL: BASE_API_URL,
    CONSOLE_AUTHORIZE_URL: `${o}/oauth/authorize`,
    CLAUDE_AI_AUTHORIZE_URL: `${CLAUDE_AI_ORIGIN}/oauth/authorize`,
    CLAUDE_AI_ORIGIN: CLAUDE_AI_ORIGIN,
    TOKEN_URL: `${BASE_API_URL}/v1/oauth/token`,
    API_KEY_URL: `${BASE_API_URL}/api/oauth/claude_cli/create_api_key`,
    ROLES_URL: `${BASE_API_URL}/api/oauth/claude_cli/roles`,
    CONSOLE_SUCCESS_URL: `${o}/buy_credits?returnUrl=/oauth/code/success%3Fapp%3Dclaude-code`,
    CLAUDEAI_SUCCESS_URL: `${o}/oauth/code/success?app=claude-code`,
    MANUAL_REDIRECT_URL: `${o}/oauth/code/callback`,
    CLIENT_ID: "22422756-60c9-4084-8eb7-27705fd5cf9a",
    DESIGN_CLIENT_ID: "00000000-0000-4000-8000-000000000000",
    OAUTH_FILE_SUFFIX: "-local-oauth",
    PLUGINS_SCOPE_REGISTERED: !0,
    PROJECTS_SCOPES_REGISTERED: !0,
    HYBRID_SETTINGS_SCOPE_REGISTERED: !0,
    MCP_PROXY_URL: "http://localhost:8205",
    MCP_PROXY_PATH: "/v1/toolbox/shttp/mcp/{server_id}"
  };
}
var Tnt = ["https://beacon.claude-ai.staging.ant.dev", "https://claude.fedstart.com", "https://claude-staging.fedstart.com"];
function VPo() {
  switch (E()) {
    case "local":
      return i();
    case "staging":
      return u ?? a;
    case "prod":
      return a;
  }
}
function nn() {
  let t = VPo(),
    CLAUDE_CODE_CUSTOM_OAUTH_URL = process.env.CLAUDE_CODE_CUSTOM_OAUTH_URL;
  if (CLAUDE_CODE_CUSTOM_OAUTH_URL) {
    let _ = CLAUDE_CODE_CUSTOM_OAUTH_URL.replace(/\/$/, "");
    if (!Tnt.includes(_)) throw Error("CLAUDE_CODE_CUSTOM_OAUTH_URL is not an approved endpoint.");
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
      PROJECTS_SCOPES_REGISTERED: !1,
      HYBRID_SETTINGS_SCOPE_REGISTERED: !1
    };
  }
  let o = process.env.CLAUDE_CODE_OAUTH_CLIENT_ID;
  if (o) t = {
    ...t,
    CLIENT_ID: o,
    PLUGINS_SCOPE_REGISTERED: !1,
    PROJECTS_SCOPES_REGISTERED: !1,
    HYBRID_SETTINGS_SCOPE_REGISTERED: !1
  };
  return t;
}
export { Txe, vj, Tjs, xwe, Cjs, OC, uY, kVn, bHr, wjt, SHr, wHr, lwt, Jc, kjt, zPo, Vqe, GPo, Rjs, Ent, Tnt, VPo, nn };