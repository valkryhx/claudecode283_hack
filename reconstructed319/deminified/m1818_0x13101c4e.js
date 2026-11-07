// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { Wr, In, ri, gM, uc, t1t, Tbt } from "B:/~BUN/root/chunk-3xdsa4p8.js";
import { b } from "B:/~BUN/root/chunk-drx9cnw1.js";
import { R, d } from "B:/~BUN/root/chunk-y2g9f85n.js";
import { P } from "B:/~BUN/root/chunk-n8cnxns2.js";
import { Et, Qe } from "B:/~BUN/root/chunk-2f1svh63.js";
import { t } from "B:/~BUN/root/chunk-2pp12te6.js";
import { ck } from "B:/~BUN/root/chunk-esnm3r09.js";
import { pL, SIn, EZ, hft } from "B:/~BUN/root/chunk-0s00dkj6.js";
import { wR } from "B:/~BUN/root/chunk-zstr1969.js";
import { iT } from "B:/~BUN/root/chunk-1ks9vs37.js";
import { qT, N9, Efs } from "B:/~BUN/root/chunk-ex2shtaj.js";
import { bxt, Nc, vx } from "B:/~BUN/root/chunk-27h4st9h.js";
function y3s(e) {
  let mcpServers = e.manifest.mcpServers,
    i = (typeof mcpServers === "string" ? [mcpServers] : Array.isArray(mcpServers) ? mcpServers : []).filter(item => typeof item === "string" && pL(item)),
    local = i.filter(item => SIn(item));
  return {
    local: local,
    remoteCount: i.length - local.length
  };
}
async function _3s(e, n, i) {
  let s = await Promise.all(n.map(async o => {
      if (await bxt(e, o, "mcp-servers")) return {
        spec: o,
        result: void 0
      };
      try {
        let result = await hft(o, e.path, e.repository, void 0, void 0, !0, i);
        return {
          spec: o,
          result: result
        };
      } catch (error) {
        return t(`post-install bundle read failed for ${o}: ${d(error)}`, {
          level: "warn"
        }), {
          spec: o,
          result: void 0
        };
      }
    })),
    a = new Map(),
    unreadable = [];
  for (let {
    spec: spec,
    result: result_2
  } of s) if (!result_2) unreadable.push(spec);else if ("status" in result_2) a.set(result_2.manifest.name, {
    serverName: result_2.manifest.name,
    schema: result_2.configSchema,
    existingConfig: result_2.existingConfig
  });
  return {
    bundles: [...a.values()],
    unreadable: unreadable
  };
}
async function WLo(e, n) {
  let i = SIn(n) ? await bxt(e, n, "mcp-servers") : void 0;
  return i && `${ck(i)}. This bundle can't be configured. If its path leads outside the plugin, the plugin's author needs to change it.`;
}
function z1r(e) {
  let n = e.indexOf("=");
  if (n <= 0) throw new R(`--config expects KEY=VALUE, got "${e}". Use --config key=value (repeatable).`, "--config pair has no key");
  return {
    key: e.slice(0, n),
    raw: e.slice(n + 1)
  };
}
function b3s(e, n, i, s) {
  let pluginPairs = [],
    bundlePairs = new Map();
  for (let o of e) {
    let {
      key: r,
      raw: raw
    } = z1r(o);
    if (n && Object.hasOwn(n, r)) {
      pluginPairs.push(o);
      continue;
    }
    let m = i.flatMap(({
        serverName: serverName,
        schema: schema
      }) => {
        let c = [],
          h = `${serverName}.`;
        if (r.startsWith(h) && Object.hasOwn(schema, r.slice(h.length))) c.push({
          serverName: serverName,
          field: r.slice(h.length),
          bare: !1
        });
        if (Object.hasOwn(schema, r)) c.push({
          serverName: serverName,
          field: r,
          bare: !0
        });
        return c;
      }),
      [f, ...C] = m;
    if (f && C.length === 0) {
      if (f.bare && s.unreadable.length + s.remoteCount > 0) throw new R(`--config key "${r}" must name its server, because a bundled MCP server whose keys are unknown may declare it too; use ${Et(`${f.serverName}.${f.field}`)}.` + G1r(s), "--config bare key with an unread bundled server");
      let u = bundlePairs.get(f.serverName) ?? [];
      u.push(`${f.field}=${raw}`), bundlePairs.set(f.serverName, u);
      continue;
    }
    if (f) throw new R(`--config key "${r}" is declared by more than one bundled MCP server; use ${m.map(item => Et(`${item.serverName}.${item.field}`)).join(" or ")}.`, "--config key is ambiguous between bundled servers");
    let y = [...Object.keys(n ?? {}), ...i.flatMap(({
      serverName: serverName_2,
      schema: schema_2
    }) => Object.keys(schema_2).map(item => Et(`${serverName_2}.${item}`)))];
    throw new R(`--config key "${r}" isn't declared in this plugin's userConfig` + (i.length > 0 ? " or by its bundled MCP servers." : ".") + (y.length > 0 ? ` Known keys: ${y.join(", ")}.` : "") + G1r(s), "--config key is not declared");
  }
  return {
    pluginPairs: pluginPairs,
    bundlePairs: bundlePairs
  };
}
function G1r({
  unreadable: unreadable_2,
  remoteCount: remoteCount
}) {
  let i = [];
  if (unreadable_2.length > 0) i.push(`the bundled ${unreadable_2.map(item => Qe(item)).join(", ")} could not be read, so its keys are unknown \u2014 re-run with --debug-file <path> to log why`);
  if (remoteCount > 0) i.push(`${remoteCount} bundled ${P(remoteCount, "server is", "servers are")} fetched from a URL at session start and can only be configured in Claude Code (/plugin \u2192 Installed \u2192 Configure)`);
  let s = i.join("; ");
  return s ? ` (${s[0].toUpperCase()}${s.slice(1)}.)` : "";
}
function S3s(e, n) {
  let i = EZ(e.existingConfig, e.schema);
  if (i.valid) return;
  let s = Et(e.serverName),
    a = Object.entries(e.schema).filter(([o, r]) => {
      let g = Wr(e.existingConfig, o);
      return r.required === !0 && (g === void 0 || g === "");
    }).map(([o]) => Et(`${s}.${o}`)),
    l = a.length > 0 ? `set ${a.join(", ")} with --config KEY=VALUE` : `${i.errors.map(item => Et(item)).join("; ")} \u2014 fix it with --config ${s}.KEY=VALUE`;
  return `MCP server "${Qe(e.serverName)}" needs configuration before it can start: ${l}, or in Claude Code run /plugin, select "${Qe(n)}" in the Installed tab, and choose Configure.`;
}
async function SPe(e, n, i) {
  let s = gM(e),
    {
      name: name,
      marketplace: marketplace
    } = uc(s);
  if (marketplace === In && qT().nameRegistration === void 0) await Nc(i);
  let o = N9(name, marketplace, n),
    r = t1t(marketplace);
  if (!r && marketplace !== ri && !Tbt(name, marketplace)) return o;
  let g = !1;
  try {
    g = await w(s, name, marketplace, i);
  } catch (error) {
    t(`Plugin telemetry: could not read the marketplace catalog to confirm "${e}" exists (${d(error)}); logging its name as third-party`);
  }
  return {
    ...o,
    ...(r && marketplace !== void 0 && {
      marketplace_name_redacted: Efs(marketplace)
    }),
    ...(!g && {
      plugin_name_redacted: b(iT)
    })
  };
}
async function w(e, n, i, s) {
  if (Tbt(n, i)) return !0;
  if (i === ri) return wR(n) !== void 0;
  return (await vx(e, s)) !== null;
}
export { y3s, _3s, WLo, z1r, b3s, G1r, S3s, SPe };