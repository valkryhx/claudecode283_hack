// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { ge, Mn, ws, vr, wu, QD, v_, Ec } from "B:/~BUN/root/chunk-b3kw6jpx.js";
var m = wu({
    command: ge(),
    args: vr(ge()).optional(),
    env: v_(ge(), ge()).optional()
  }),
  author = wu({
    name: ge(),
    email: ge().email().optional(),
    url: ge().url().optional()
  }),
  y = wu({
    type: ge(),
    url: ge().url()
  }),
  h = m.partial(),
  mcp_config = m.extend({
    platform_overrides: v_(ge(), h).optional()
  }),
  server = wu({
    type: Ec(["python", "node", "binary"]),
    entry_point: ge(),
    mcp_config: mcp_config
  }),
  M = wu({
    claude_desktop: ge().optional(),
    platforms: vr(Ec(["darwin", "win32", "linux"])).optional(),
    runtimes: wu({
      python: ge().optional(),
      node: ge().optional()
    }).optional()
  }).passthrough(),
  O = wu({
    name: ge(),
    description: ge().optional()
  }),
  S = wu({
    name: ge(),
    description: ge().optional(),
    arguments: vr(ge()).optional(),
    text: ge()
  }),
  v = wu({
    type: Ec(["string", "number", "boolean", "directory", "file"]),
    title: ge(),
    description: ge(),
    required: ws().optional(),
    default: QD([ge(), Mn(), ws(), vr(ge())]).optional(),
    multiple: ws().optional(),
    sensitive: ws().optional(),
    min: Mn().optional(),
    max: Mn().optional()
  }),
  A = v_(ge(), QD([ge(), Mn(), ws(), vr(ge())])),
  k = wu({
    $schema: ge().optional(),
    dxt_version: ge().optional().describe("@deprecated Use manifest_version instead"),
    manifest_version: ge().optional(),
    name: ge(),
    display_name: ge().optional(),
    version: ge(),
    description: ge(),
    long_description: ge().optional(),
    author: author,
    repository: y.optional(),
    homepage: ge().url().optional(),
    documentation: ge().url().optional(),
    support: ge().url().optional(),
    icon: ge().optional(),
    screenshots: vr(ge()).optional(),
    server: server,
    tools: vr(O).optional(),
    tools_generated: ws().optional(),
    prompts: vr(S).optional(),
    prompts_generated: ws().optional(),
    keywords: vr(ge()).optional(),
    license: ge().optional(),
    privacy_policies: vr(ge()).optional(),
    compatibility: M.optional(),
    user_config: v_(ge(), v).optional()
  }).refine(t => !!(t.dxt_version || t.manifest_version), {
    message: "Either 'dxt_version' (deprecated) or 'manifest_version' must be provided"
  }),
  w = wu({
    status: Ec(["signed", "unsigned", "self-signed"]),
    publisher: ge().optional(),
    issuer: ge().optional(),
    valid_from: ge().optional(),
    valid_to: ge().optional(),
    fingerprint: ge().optional()
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