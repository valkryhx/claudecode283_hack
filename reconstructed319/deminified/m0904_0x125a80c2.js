// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { v } from "B:/~BUN/root/chunk-1ks9vs37.js";
import { Nt } from "B:/~BUN/root/chunk-q78ga0zw.js";
import { i, Ar } from "B:/~BUN/root/chunk-j6pt0v41.js";
import { id } from "B:/~BUN/root/chunk-65j2302z.js";
import { zo } from "B:/~BUN/root/chunk-5az22yft.js";
import { hJi as server_3 } from "B:/~BUN/root/chunk-q8eknvfd.js";
import { gr } from "B:/~BUN/root/chunk-sy1h8mf0.js";
import { uEr } from "B:/~BUN/root/chunk-z2c6k7e2.js";
import { llt } from "B:/~BUN/root/chunk-vhw6mw44.js";
import { dR } from "B:/~BUN/root/chunk-hskja58z.js";
import { o, oe, me } from "B:/~BUN/root/chunk-4bfd0jkf.js";
function pfi() {
  return Ar.CLAUDE_CODE_ARTIFACT_MCP ?? !0;
}
function mfi() {
  return me(o().min(1).max(64), oe()).optional().describe(`Runtime capabilities this page declares, as {name: config}. The control plane is the authority on valid names and config shapes. An empty object clears any previously stored declaration; omit the field on a redeploy to carry the stored declaration forward unchanged. Before declaring any capability, load the \`${dR}\` skill for the current contract and per-capability guidance.`);
}
function d9o(s) {
  let a = new Map();
  for (let e of s) {
    if (e.mcpInfo?.scope !== "claudeai") continue;
    let serverName = e.mcpInfo.serverName,
      r = a.get(serverName);
    if (r !== void 0) {
      r.toolNames.push(e.mcpInfo.toolName);
      continue;
    }
    let server = e.mcpInfo.displayName ?? serverName;
    a.set(serverName, {
      server: server,
      toolPrefix: gr(e.name)?.serverName ?? serverName,
      toolNames: [e.mcpInfo.toolName],
      ...(uEr(server) ? {} : {
        declarable: !1
      })
    });
  }
  return [...a.values()];
}
function c9o(s) {
  let a = `mcp__${zo}__`,
    e = new Set();
  for (let t of s) {
    if (!t.name.startsWith(a)) continue;
    let r = t.name.slice(a.length),
      n = r.indexOf("__");
    if (n > 0) e.add(r.slice(0, n));
  }
  return [...e];
}
function u9o() {
  return id();
}
function d(s) {
  let a = new Map(),
    e = new Set();
  for (let r of s) {
    let mcpInfo = r.mcpInfo;
    if (mcpInfo?.serverType !== "sdk" || Nt(mcpInfo.serverName) === null) continue;
    let l = a.get(mcpInfo.serverName);
    if (l !== void 0) {
      l.toolNames.push(mcpInfo.toolName);
      continue;
    }
    if (e.has(mcpInfo.serverName)) continue;
    let server_2 = mcpInfo.serverInfoName ?? "";
    if (server_2.trim() === "" || Nt(server_2.trim()) !== null) {
      e.add(mcpInfo.serverName);
      continue;
    }
    a.set(mcpInfo.serverName, {
      server: server_2,
      toolPrefix: mcpInfo.serverName,
      toolNames: [mcpInfo.toolName],
      ...(uEr(server_2) ? {} : {
        declarable: !1
      })
    });
  }
  let t = [...a.values()];
  return {
    named: t.filter(item => item.declarable !== !1),
    unnamedIds: [...e],
    undeclarable: t.filter(item => item.declarable === !1)
  };
}
function p() {
  return v("tengu_cobalt_plinth_yew", !1);
}
function f9o(s, a) {
  let hosted = u9o() ? d(s) : null,
    t = llt(a ?? []);
  if (!t) return {
    ccrHosted: !1,
    metaConnector: null,
    hosted: hosted
  };
  let ccrHosted = i.CLAUDE_CODE_REMOTE === !0,
    n = t.name,
    l = s.find(item => item.mcpInfo?.serverName === n),
    toolPrefix = l && gr(l.name)?.serverName,
    metaConnector = toolPrefix && p() ? {
      server: server_3,
      toolPrefix: toolPrefix
    } : null;
  return {
    ccrHosted: ccrHosted,
    metaConnector: metaConnector,
    hosted: hosted
  };
}
function hfi(s, a) {
  let {
      metaConnector: metaConnector_2,
      hosted: hosted_2
    } = f9o(s, a),
    r = [...d9o(s), ...(hosted_2 === null ? [] : [...hosted_2.named, ...hosted_2.undeclarable])];
  return metaConnector_2 ? [...r, metaConnector_2] : r;
}
export { pfi, mfi, d9o, c9o, u9o, f9o, hfi };