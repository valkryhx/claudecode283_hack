// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { _, m } from "B:/~BUN/root/chunk-51n463p1.js";
import { b, J, t } from "B:/~BUN/root/chunk-qe2zga5e.js";
import { d } from "B:/~BUN/root/chunk-zs3ycjed.js";
import { zE, cg, ca, GE } from "B:/~BUN/root/chunk-6spmd6p4.js";
import { S_, gxr, hxr, yxr, _xr } from "B:/~BUN/root/chunk-m1qtc24s.js";
import { mi } from "B:/~BUN/root/chunk-3wnb3s8p.js";
import { ay } from "B:/~BUN/root/chunk-8p6es4nr.js";
import { createHash as x } from "crypto";
var S = 32;
function H3(e, r) {
  return x("sha256").update(e).update("\x00").update(b(c(r))).digest("hex");
}
function c(e, r = 0) {
  if (r > S) return e;
  if (Array.isArray(e)) return e.map(item => c(item, r + 1));
  if (typeof e === "object" && e !== null) return Object.fromEntries(Object.entries(e).sort(([n], [o]) => n < o ? -1 : n > o ? 1 : 0).map(([n, o]) => [n, c(o, r + 1)]));
  return e;
}
function pat(e, r) {
  let n = J(b(r));
  return H3(e, n);
}
function k() {
  return `perm-${Date.now()}-${Math.random().toString(36).substring(2, 9)}`;
}
function Ssn(e) {
  let teamName = e.teamName || ca(),
    workerId = e.workerId || zE(),
    workerName = e.workerName || cg(),
    workerColor = e.workerColor || GE();
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
  if (!(e || ca())) return !1;
  let n = zE();
  return !n || n === "team-lead";
}
function qEe() {
  let e = ca(),
    r = zE();
  return !!e && !!r && !y();
}
async function w(e, r) {
  let n = e || ca();
  if (!n) return null;
  if (!(await ay(n, r))) return t(`[PermissionSync] Team file not found for team: ${n}`), null;
  return mi;
}
async function g(e, r, n, o, i) {
  if ((await S_(e, r, n, i)) === void 0) return t(`[PermissionSync] FAILED to deliver ${o}`, {
    level: "error"
  }), !1;
  return t(`[PermissionSync] Sent ${o}`), !0;
}
async function wsn(e, r) {
  let n = await w(e.teamName, r);
  if (!n) return t("[PermissionSync] Cannot send permission request: leader name not found"), !1;
  try {
    let o = gxr({
      request_id: e.id,
      agent_id: e.workerName,
      tool_name: e.toolName,
      tool_use_id: e.toolUseId,
      description: e.description,
      input: e.input,
      permission_suggestions: e.permissionSuggestions
    });
    return await g(n, {
      from: e.workerName,
      text: b(o),
      timestamp: new Date().toISOString(),
      color: e.workerColor
    }, e.teamName, `permission request ${b(e.id)} to leader ${b(n)} via mailbox`, r);
  } catch (error) {
    return t(`[PermissionSync] Failed to send permission request via mailbox: ${error}`), d(error), !1;
  }
}
async function sxr(e, r, request_id, o, i, tool_use_id) {
  let p = o || ca();
  if (!p) return t("[PermissionSync] Cannot send permission response: team name not found"), !1;
  try {
    let s = hxr({
      request_id: request_id,
      subtype: r.decision === "approved" ? "success" : "error",
      error: r.feedback,
      updated_input: r.updatedInput,
      permission_updates: r.permissionUpdates,
      tool_use_id: tool_use_id,
      approved_request: r.approvedRequest
    });
    return await g(e, {
      from: mi,
      text: b(s),
      timestamp: new Date().toISOString()
    }, p, `permission response for ${b(request_id)} to worker ${b(e)} via mailbox`, i);
  } catch (error) {
    return t(`[PermissionSync] Failed to send permission response via mailbox: ${error}`), d(error), !1;
  }
}
function zEo() {
  return `sandbox-${Date.now()}-${Math.random().toString(36).substring(2, 9)}`;
}
async function GEo(host, requestId, n, o) {
  let i = n || ca();
  if (!i) return t("[PermissionSync] Cannot send sandbox permission request: team name not found"), m("swarm_sandbox_permission_request", "no_team_name"), !1;
  let a = await w(i, o);
  if (!a) return t("[PermissionSync] Cannot send sandbox permission request: leader name not found"), m("swarm_sandbox_permission_request", "no_leader"), !1;
  let workerId_2 = zE(),
    workerName_2 = cg(),
    f = GE();
  if (!workerId_2 || !workerName_2) return t("[PermissionSync] Cannot send sandbox permission request: worker ID or name not found"), m("swarm_sandbox_permission_request", "no_worker_identity"), !1;
  try {
    let u = yxr({
        requestId: requestId,
        workerId: workerId_2,
        workerName: workerName_2,
        workerColor: f,
        host: host
      }),
      l = await g(a, {
        from: workerName_2,
        text: b(u),
        timestamp: new Date().toISOString(),
        color: f
      }, i, `sandbox permission request ${b(requestId)} for host ${b(host)} to leader ${b(a)} via mailbox`, o);
    if (l) _("swarm_sandbox_permission_request");else m("swarm_sandbox_permission_request", "mailbox_write_failed");
    return l;
  } catch (error) {
    return t(`[PermissionSync] Failed to send sandbox permission request via mailbox: ${error}`), d(error), m("swarm_sandbox_permission_request", "mailbox_write_failed"), !1;
  }
}
async function H1n(e, requestId_2, host_2, allow, i, a) {
  let p = i || ca();
  if (!p) return t("[PermissionSync] Cannot send sandbox permission response: team name not found"), !1;
  try {
    let s = _xr({
      requestId: requestId_2,
      host: host_2,
      allow: allow
    });
    return await g(e, {
      from: mi,
      text: b(s),
      timestamp: new Date().toISOString()
    }, p, `sandbox permission response for ${b(requestId_2)} (host: ${b(host_2)}, allow: ${b(allow)}) to worker ${b(e)} via mailbox`, a);
  } catch (error) {
    return t(`[PermissionSync] Failed to send sandbox permission response via mailbox: ${error}`), d(error), !1;
  }
}
export { H3, pat, Ssn, qEe, wsn, sxr, zEo, GEo, H1n };