// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { de, fn, ho, Xn, Il, JI, mg, jl } from "B:/~BUN/root/chunk-8386ms9e.js";
var m = Il({
    command: de(),
    args: Xn(de()).optional(),
    env: mg(de(), de()).optional()
  }),
  author = Il({
    name: de(),
    email: de().email().optional(),
    url: de().url().optional()
  }),
  y = Il({
    type: de(),
    url: de().url()
  }),
  h = m.partial(),
  mcp_config = m.extend({
    platform_overrides: mg(de(), h).optional()
  }),
  server = Il({
    type: jl(["python", "node", "binary"]),
    entry_point: de(),
    mcp_config: mcp_config
  }),
  M = Il({
    claude_desktop: de().optional(),
    platforms: Xn(jl(["darwin", "win32", "linux"])).optional(),
    runtimes: Il({
      python: de().optional(),
      node: de().optional()
    }).optional()
  }).passthrough(),
  O = Il({
    name: de(),
    description: de().optional()
  }),
  S = Il({
    name: de(),
    description: de().optional(),
    arguments: Xn(de()).optional(),
    text: de()
  }),
  v = Il({
    type: jl(["string", "number", "boolean", "directory", "file"]),
    title: de(),
    description: de(),
    required: ho().optional(),
    default: JI([de(), fn(), ho(), Xn(de())]).optional(),
    multiple: ho().optional(),
    sensitive: ho().optional(),
    min: fn().optional(),
    max: fn().optional()
  }),
  A = mg(de(), JI([de(), fn(), ho(), Xn(de())])),
  k = Il({
    $schema: de().optional(),
    dxt_version: de().optional().describe("@deprecated Use manifest_version instead"),
    manifest_version: de().optional(),
    name: de(),
    display_name: de().optional(),
    version: de(),
    description: de(),
    long_description: de().optional(),
    author: author,
    repository: y.optional(),
    homepage: de().url().optional(),
    documentation: de().url().optional(),
    support: de().url().optional(),
    icon: de().optional(),
    screenshots: Xn(de()).optional(),
    server: server,
    tools: Xn(O).optional(),
    tools_generated: ho().optional(),
    prompts: Xn(S).optional(),
    prompts_generated: ho().optional(),
    keywords: Xn(de()).optional(),
    license: de().optional(),
    privacy_policies: Xn(de()).optional(),
    compatibility: M.optional(),
    user_config: mg(de(), v).optional()
  }).refine(t => !!(t.dxt_version || t.manifest_version), {
    message: "Either 'dxt_version' (deprecated) or 'manifest_version' must be provided"
  }),
  w = Il({
    status: jl(["signed", "unsigned", "self-signed"]),
    publisher: de().optional(),
    issuer: de().optional(),
    valid_from: de().optional(),
    valid_to: de().optional(),
    fingerprint: de().optional()
  });
function z(t, i) {
  if (typeof t === "string") {
    let n = t;
    for (let [key, replacement] of Object.entries(i)) {
      let regExp = new RegExp(`\\$\\{${key}\\}`, "g");
      if (n.match(regExp)) if (Array.isArray(replacement)) console.warn(`Cannot replace ${key} with array value in string context: "${t}"`, {
        key: key,
        replacement: replacement
      });else n = n.replace(regExp, replacement);
    }
    return n;
  } else if (Array.isArray(t)) {
    let n = [];
    for (let e of t) if (typeof e === "string" && e.match(/^\$\{user_config\.[^}]+\}$/)) {
      let r = e.match(/^\$\{([^}]+)\}$/)?.[1];
      if (r && i[r]) {
        let o = i[r];
        if (Array.isArray(o)) n.push(...o);else n.push(o);
      } else n.push(e);
    } else n.push(z(e, i));
    return n;
  } else if (t && typeof t === "object") {
    let n = {};
    for (let [e, r] of Object.entries(t)) n[e] = z(r, i);
    return n;
  }
  return t;
}
async function R(t) {
  let {
      manifest: manifest,
      extensionPath: n,
      systemDirs: systemDirs,
      userConfig: userConfig,
      pathSeparator: pathSeparator,
      logger: logger
    } = t,
    c = manifest.server?.mcp_config;
  if (!c) return;
  let s = {
    ...c
  };
  if (c.platform_overrides) {
    if ("win32" in c.platform_overrides) {
      let win32 = c.platform_overrides.win32;
      s.command = win32.command || s.command, s.args = win32.args || s.args, s.env = win32.env || s.env;
    }
  }
  if (j({
    manifest: manifest,
    userConfig: userConfig
  })) {
    logger?.warn(`Extension ${manifest.name} has missing required configuration, skipping MCP config`);
    return;
  }
  let l = {
      __dirname: n,
      pathSeparator: pathSeparator,
      "/": pathSeparator,
      ...systemDirs
    },
    f = {};
  if (manifest.user_config) {
    for (let [p, a] of Object.entries(manifest.user_config)) if (a.default !== void 0) f[p] = a.default;
  }
  if (userConfig) Object.assign(f, userConfig);
  for (let [p, a] of Object.entries(f)) {
    let g = `user_config.${p}`;
    if (Array.isArray(a)) l[g] = a.map(String);else if (typeof a === "boolean") l[g] = a ? "true" : "false";else l[g] = String(a);
  }
  return s = z(s, l), s;
}
function u(t) {
  return t === void 0 || t === null || t === "";
}
function j({
  manifest: manifest_2,
  userConfig: userConfig_2
}) {
  if (!manifest_2.user_config) return !1;
  let n = userConfig_2 || {};
  for (let [e, r] of Object.entries(manifest_2.user_config)) if (r.required) {
    let o = n[e];
    if (u(o) || Array.isArray(o) && (o.length === 0 || o.some(u))) return !0;
  }
  return !1;
}
export { k as McpbManifestSchema, R as getMcpConfigForManifest };