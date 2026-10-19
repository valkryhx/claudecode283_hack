// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { E } from "B:/~BUN/root/chunk-hb6x4e3n.js";
import { Vt } from "B:/~BUN/root/chunk-9ka04m0y.js";
import { a, or } from "B:/~BUN/root/chunk-yt0knyw7.js";
import { Cu } from "B:/~BUN/root/chunk-gyr2a6wz.js";
import { Ss } from "B:/~BUN/root/chunk-ejm0pmyj.js";
import { Z2s as server_3 } from "B:/~BUN/root/chunk-we0fhavr.js";
import { Zqn } from "B:/~BUN/root/chunk-gt1x0gdb.js";
import { m4e } from "B:/~BUN/root/chunk-0m1mwrvx.js";
import { LS } from "B:/~BUN/root/chunk-72f62gjz.js";
import { co } from "B:/~BUN/root/chunk-b0487zs4.js";
import { o, oe, fe } from "B:/~BUN/root/chunk-g3snhg6n.js";
function pls() {
  return or.CLAUDE_CODE_ARTIFACT_MCP ?? !0;
}
function fls() {
  return fe(o().min(1).max(64), oe()).optional().describe(`Runtime capabilities this page declares, as {name: config}. The control plane is the authority on valid names and config shapes. An empty object clears any previously stored declaration; omit the field on a redeploy to carry the stored declaration forward unchanged. Before declaring any capability, load the \`${LS}\` skill for the current contract and per-capability guidance.`);
}
function rno(i) {
  let s = new Map();
  for (let e of i) {
    if (e.mcpInfo?.scope !== "claudeai") continue;
    let serverName = e.mcpInfo.serverName,
      r = s.get(serverName);
    if (r !== void 0) {
      r.toolNames.push(e.mcpInfo.toolName);
      continue;
    }
    let server = e.mcpInfo.displayName ?? serverName;
    s.set(serverName, {
      server: server,
      toolPrefix: co(e.name)?.serverName ?? serverName,
      toolNames: [e.mcpInfo.toolName],
      ...(Zqn(server) ? {} : {
        declarable: !1
      })
    });
  }
  return [...s.values()];
}
function ono(i) {
  let s = `mcp__${Ss}__`,
    e = new Set();
  for (let t of i) {
    if (!t.name.startsWith(s)) continue;
    let r = t.name.slice(s.length),
      n = r.indexOf("__");
    if (n > 0) e.add(r.slice(0, n));
  }
  return [...e];
}
function sno() {
  return Cu();
}
function d(i) {
  let s = new Map(),
    e = new Set();
  for (let r of i) {
    let mcpInfo = r.mcpInfo;
    if (mcpInfo?.serverType !== "sdk" || Vt(mcpInfo.serverName) === null) continue;
    let l = s.get(mcpInfo.serverName);
    if (l !== void 0) {
      l.toolNames.push(mcpInfo.toolName);
      continue;
    }
    if (e.has(mcpInfo.serverName)) continue;
    let server_2 = mcpInfo.serverInfoName ?? "";
    if (server_2.trim() === "" || Vt(server_2.trim()) !== null) {
      e.add(mcpInfo.serverName);
      continue;
    }
    s.set(mcpInfo.serverName, {
      server: server_2,
      toolPrefix: mcpInfo.serverName,
      toolNames: [mcpInfo.toolName],
      ...(Zqn(server_2) ? {} : {
        declarable: !1
      })
    });
  }
  let t = [...s.values()];
  return {
    named: t.filter(item => item.declarable !== !1),
    unnamedIds: [...e],
    undeclarable: t.filter(item => item.declarable === !1)
  };
}
function p() {
  return E("tengu_cobalt_plinth_yew", !1);
}
function ino(i, s) {
  let hosted = sno() ? d(i) : null,
    t = m4e(s ?? []);
  if (!t) return {
    ccrHosted: !1,
    metaConnector: null,
    hosted: hosted
  };
  let ccrHosted = a.CLAUDE_CODE_REMOTE === !0,
    n = t.name,
    l = i.find(item => item.mcpInfo?.serverName === n),
    toolPrefix = l && co(l.name)?.serverName,
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
function mls(i, s) {
  let {
      metaConnector: metaConnector_2,
      hosted: hosted_2
    } = ino(i, s),
    r = [...rno(i), ...(hosted_2 === null ? [] : [...hosted_2.named, ...hosted_2.undeclarable])];
  return metaConnector_2 ? [...r, metaConnector_2] : r;
}
export { pls, fls, rno, ono, sno, ino, mls };