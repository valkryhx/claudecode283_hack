// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { g, m } from "B:/~BUN/root/chunk-3z3yrbk4.js";
import { t, _, ee } from "B:/~BUN/root/chunk-2pp12te6.js";
import { a } from "B:/~BUN/root/chunk-xrwdh0g4.js";
import { qD, CE, kc, RO } from "B:/~BUN/root/chunk-trd3c21n.js";
import { YE, chs, uhs, fhs, phs } from "B:/~BUN/root/chunk-k5xd4a86.js";
import { hl } from "B:/~BUN/root/chunk-xqymp2nr.js";
import { IS } from "B:/~BUN/root/chunk-98qgaht2.js";
import { createHash as b } from "crypto";
var S = 32;
function W9(e, r) {
  return b("sha256").update(e).update("\x00").update(_(f(r))).digest("hex");
}
function f(e, r = 0) {
  if (r > S) return e;
  if (Array.isArray(e)) return e.map(item => f(item, r + 1));
  if (typeof e === "object" && e !== null) return Object.fromEntries(Object.entries(e).sort(([n], [o]) => n < o ? -1 : n > o ? 1 : 0).map(([n, o]) => [n, f(o, r + 1)]));
  return e;
}
function X7t(e, r) {
  let n = ee(_(r));
  return W9(e, n);
}
function k() {
  return `perm-${Date.now()}-${Math.random().toString(36).substring(2, 9)}`;
}
function eSr(e) {
  let teamName = e.teamName || kc(),
    workerId = e.workerId || qD(),
    workerName = e.workerName || CE(),
    workerColor = e.workerColor || RO();
  if (!teamName) throw Error("Team name is required for permission requests");
  if (!workerId) throw Error("Worker ID is required for permission requests");
  if (!workerName) throw Error("Worker name is required for permission requests");
  return {
    id: k(),
    workerId: workerId,
    workerName: workerName,
    workerColor: workerColor,
    teamName: teamName,
    toolName: e.toolName,
    toolUseId: e.toolUseId,
    description: e.description,
    input: e.input,
    permissionSuggestions: e.permissionSuggestions || [],
    createdAt: Date.now()
  };
}
function y(e) {
  if (!(e || kc())) return !1;
  let n = qD();
  return !n || n === "team-lead";
}
function yze() {
  let e = kc(),
    r = qD();
  return !!e && !!r && !y();
}
async function x(e, r) {
  let n = e || kc();
  if (!n) return null;
  if (!(await IS(n, r))) return t(`[PermissionSync] Team file not found for team: ${n}`), null;
  return hl;
}
async function c(e, r, n, o, i) {
  if ((await YE(e, r, n, i)) === void 0) return t(`[PermissionSync] FAILED to deliver ${o}`, {
    level: "error"
  }), !1;
  return t(`[PermissionSync] Sent ${o}`), !0;
}
async function tSr(e, r) {
  let n = await x(e.teamName, r);
  if (!n) return t("[PermissionSync] Cannot send permission request: leader name not found"), !1;
  try {
    let o = chs({
      request_id: e.id,
      agent_id: e.workerName,
      tool_name: e.toolName,
      tool_use_id: e.toolUseId,
      description: e.description,
      input: e.input,
      permission_suggestions: e.permissionSuggestions
    });
    return await c(n, {
      from: e.workerName,
      text: _(o),
      timestamp: new Date().toISOString(),
      color: e.workerColor
    }, e.teamName, `permission request ${_(e.id)} to leader ${_(n)} via mailbox`, r);
  } catch (error) {
    return t(`[PermissionSync] Failed to send permission request via mailbox: ${error}`), a(error), !1;
  }
}
async function Kms(e, r, request_id, o, i, tool_use_id) {
  let p = o || kc();
  if (!p) return t("[PermissionSync] Cannot send permission response: team name not found"), !1;
  try {
    let s = uhs({
      request_id: request_id,
      subtype: r.decision === "approved" ? "success" : "error",
      error: r.feedback,
      updated_input: r.updatedInput,
      permission_updates: r.permissionUpdates,
      tool_use_id: tool_use_id,
      approved_request: r.approvedRequest
    });
    return await c(e, {
      from: hl,
      text: _(s),
      timestamp: new Date().toISOString()
    }, p, `permission response for ${_(request_id)} to worker ${_(e)} via mailbox`, i);
  } catch (error) {
    return t(`[PermissionSync] Failed to send permission response via mailbox: ${error}`), a(error), !1;
  }
}
function wLi() {
  return `sandbox-${Date.now()}-${Math.random().toString(36).substring(2, 9)}`;
}
async function kLi(host, requestId, n, o) {
  let i = n || kc();
  if (!i) return t("[PermissionSync] Cannot send sandbox permission request: team name not found"), m("swarm_sandbox_permission_request", "no_team_name"), !1;
  let d = await x(i, o);
  if (!d) return t("[PermissionSync] Cannot send sandbox permission request: leader name not found"), m("swarm_sandbox_permission_request", "no_leader"), !1;
  let workerId_2 = qD(),
    workerName_2 = CE(),
    l = RO();
  if (!workerId_2 || !workerName_2) return t("[PermissionSync] Cannot send sandbox permission request: worker ID or name not found"), m("swarm_sandbox_permission_request", "no_worker_identity"), !1;
  try {
    let u = fhs({
        requestId: requestId,
        workerId: workerId_2,
        workerName: workerName_2,
        workerColor: l,
        host: host
      }),
      w = await c(d, {
        from: workerName_2,
        text: _(u),
        timestamp: new Date().toISOString(),
        color: l
      }, i, `sandbox permission request ${_(requestId)} for host ${_(host)} to leader ${_(d)} via mailbox`, o);
    if (w) g("swarm_sandbox_permission_request");else m("swarm_sandbox_permission_request", "mailbox_write_failed");
    return w;
  } catch (error) {
    return t(`[PermissionSync] Failed to send sandbox permission request via mailbox: ${error}`), a(error), m("swarm_sandbox_permission_request", "mailbox_write_failed"), !1;
  }
}
async function Sco(e, requestId_2, host_2, allow, i, d) {
  let p = i || kc();
  if (!p) return t("[PermissionSync] Cannot send sandbox permission response: team name not found"), !1;
  try {
    let s = phs({
      requestId: requestId_2,
      host: host_2,
      allow: allow
    });
    return await c(e, {
      from: hl,
      text: _(s),
      timestamp: new Date().toISOString()
    }, p, `sandbox permission response for ${_(requestId_2)} (host: ${_(host_2)}, allow: ${_(allow)}) to worker ${_(e)} via mailbox`, d);
  } catch (error) {
    return t(`[PermissionSync] Failed to send sandbox permission response via mailbox: ${error}`), a(error), !1;
  }
}
export { W9, X7t, eSr, yze, tSr, Kms, wLi, kLi, Sco };