// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { ge, mn, Vo, sr, Dd, YO, hg, Ld } from "B:/~BUN/root/chunk-rm2gz7kj.js";
var m = Dd({
    command: ge(),
    args: sr(ge()).optional(),
    env: hg(ge(), ge()).optional()
  }),
  author = Dd({
    name: ge(),
    email: ge().email().optional(),
    url: ge().url().optional()
  }),
  y = Dd({
    type: ge(),
    url: ge().url()
  }),
  h = m.partial(),
  mcp_config = m.extend({
    platform_overrides: hg(ge(), h).optional()
  }),
  server = Dd({
    type: Ld(["python", "node", "binary"]),
    entry_point: ge(),
    mcp_config: mcp_config
  }),
  M = Dd({
    claude_desktop: ge().optional(),
    platforms: sr(Ld(["darwin", "win32", "linux"])).optional(),
    runtimes: Dd({
      python: ge().optional(),
      node: ge().optional()
    }).optional()
  }).passthrough(),
  O = Dd({
    name: ge(),
    description: ge().optional()
  }),
  S = Dd({
    name: ge(),
    description: ge().optional(),
    arguments: sr(ge()).optional(),
    text: ge()
  }),
  v = Dd({
    type: Ld(["string", "number", "boolean", "directory", "file"]),
    title: ge(),
    description: ge(),
    required: Vo().optional(),
    default: YO([ge(), mn(), Vo(), sr(ge())]).optional(),
    multiple: Vo().optional(),
    sensitive: Vo().optional(),
    min: mn().optional(),
    max: mn().optional()
  }),
  A = hg(ge(), YO([ge(), mn(), Vo(), sr(ge())])),
  k = Dd({
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
    screenshots: sr(ge()).optional(),
    server: server,
    tools: sr(O).optional(),
    tools_generated: Vo().optional(),
    prompts: sr(S).optional(),
    prompts_generated: Vo().optional(),
    keywords: sr(ge()).optional(),
    license: ge().optional(),
    privacy_policies: sr(ge()).optional(),
    compatibility: M.optional(),
    user_config: hg(ge(), v).optional()
  }).refine(t => !!(t.dxt_version || t.manifest_version), {
    message: "Either 'dxt_version' (deprecated) or 'manifest_version' must be provided"
  }),
  w = Dd({
    status: Ld(["signed", "unsigned", "self-signed"]),
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