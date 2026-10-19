// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.303
import {
  g,
  m
} from "B:/~BUN/root/chunk-kzgf20y6.js";
import {
  _,
  J,
  t
} from "B:/~BUN/root/chunk-6za2ez23.js";
import {
  l
} from "B:/~BUN/root/chunk-c09hf5e4.js";
import {
  Ux,
  eS,
  id,
  Bx
} from "B:/~BUN/root/chunk-8v3gkznb.js";
import {
  Zw,
  yko,
  _ko,
  bko,
  Sko
} from "B:/~BUN/root/chunk-74f4ssah.js";
import {
  Oa
} from "B:/~BUN/root/chunk-v6pbq6dm.js";
import {
  Ub
} from "B:/~BUN/root/chunk-p7n9drc0.js";
import {
  createHash as b
} from "crypto";
var S = 32;

function iX(e, r) {
  return b("sha256").update(e).update("\x00").update(_(c(r))).digest("hex")
}

function c(e, r = 0) {
  if (r > S) return e;
  if (Array.isArray(e)) return e.map((n) => c(n, r + 1));
  if (typeof e === "object" && e !== null) return Object.fromEntries(Object.entries(e).sort(([n], [o]) => n < o ? -1 : n > o ? 1 : 0).map(([n, o]) => [n, c(o, r + 1)]));
  return e
}

function aDt(e, r) {
  let n = J(_(r));
  return iX(e, n)
}

function k() {
  return `perm-${Date.now()}-${Math.random().toString(36).substring(2,9)}`
}

function DWn(e) {
  let r = e.teamName || id(),
    n = e.workerId || Ux(),
    o = e.workerName || eS(),
    i = e.workerColor || Bx();
  if (!r) throw Error("Team name is required for permission requests");
  if (!n) throw Error("Worker ID is required for permission requests");
  if (!o) throw Error("Worker name is required for permission requests");
  return {
    id: k(),
    workerId: n,
    workerName: o,
    workerColor: i,
    teamName: r,
    toolName: e.toolName,
    toolUseId: e.toolUseId,
    description: e.description,
    input: e.input,
    permissionSuggestions: e.permissionSuggestions || [],
    createdAt: Date.now()
  }
}

function y(e) {
  if (!(e || id())) return !1;
  let n = Ux();
  return !n || n === "team-lead"
}

function kBe() {
  let e = id(),
    r = Ux();
  return !!e && !!r && !y()
}
async function x(e, r) {
  let n = e || id();
  if (!n) return null;
  if (!await Ub(n, r)) return t(`[PermissionSync] Team file not found for team: ${n}`), null;
  return Oa
}
async function u(e, r, n, o, i) {
  if (await Zw(e, r, n, i) === void 0) return t(`[PermissionSync] FAILED to deliver ${o}`, {
    level: "error"
  }), !1;
  return t(`[PermissionSync] Sent ${o}`), !0
}
async function LWn(e, r) {
  let n = await x(e.teamName, r);
  if (!n) return t("[PermissionSync] Cannot send permission request: leader name not found"), !1;
  try {
    let o = yko({
      request_id: e.id,
      agent_id: e.workerName,
      tool_name: e.toolName,
      tool_use_id: e.toolUseId,
      description: e.description,
      input: e.input,
      permission_suggestions: e.permissionSuggestions
    });
    return await u(n, {
      from: e.workerName,
      text: _(o),
      timestamp: new Date().toISOString(),
      color: e.workerColor
    }, e.teamName, `permission request ${_(e.id)} to leader ${_(n)} via mailbox`, r)
  } catch (o) {
    return t(`[PermissionSync] Failed to send permission request via mailbox: ${o}`), l(o), !1
  }
}
async function Zvo(e, r, n, o, i, a) {
  let d = o || id();
  if (!d) return t("[PermissionSync] Cannot send permission response: team name not found"), !1;
  try {
    let s = _ko({
      request_id: n,
      subtype: r.decision === "approved" ? "success" : "error",
      error: r.feedback,
      updated_input: r.updatedInput,
      permission_updates: r.permissionUpdates,
      tool_use_id: a,
      approved_request: r.approvedRequest
    });
    return await u(e, {
      from: Oa,
      text: _(s),
      timestamp: new Date().toISOString()
    }, d, `permission response for ${_(n)} to worker ${_(e)} via mailbox`, i)
  } catch (s) {
    return t(`[PermissionSync] Failed to send permission response via mailbox: ${s}`), l(s), !1
  }
}

function IOs() {
  return `sandbox-${Date.now()}-${Math.random().toString(36).substring(2,9)}`
}
async function MOs(e, r, n, o) {
  let i = n || id();
  if (!i) return t("[PermissionSync] Cannot send sandbox permission request: team name not found"), m("swarm_sandbox_permission_request", "no_team_name"), !1;
  let a = await x(i, o);
  if (!a) return t("[PermissionSync] Cannot send sandbox permission request: leader name not found"), m("swarm_sandbox_permission_request", "no_leader"), !1;
  let d = Ux(),
    s = eS(),
    f = Bx();
  if (!d || !s) return t("[PermissionSync] Cannot send sandbox permission request: worker ID or name not found"), m("swarm_sandbox_permission_request", "no_worker_identity"), !1;
  try {
    let p = bko({
        requestId: r,
        workerId: d,
        workerName: s,
        workerColor: f,
        host: e
      }),
      w = await u(a, {
        from: s,
        text: _(p),
        timestamp: new Date().toISOString(),
        color: f
      }, i, `sandbox permission request ${_(r)} for host ${_(e)} to leader ${_(a)} via mailbox`, o);
    if (w) g("swarm_sandbox_permission_request");
    else m("swarm_sandbox_permission_request", "mailbox_write_failed");
    return w
  } catch (p) {
    return t(`[PermissionSync] Failed to send sandbox permission request via mailbox: ${p}`), l(p), m("swarm_sandbox_permission_request", "mailbox_write_failed"), !1
  }
}
async function _Rr(e, r, n, o, i, a) {
  let d = i || id();
  if (!d) return t("[PermissionSync] Cannot send sandbox permission response: team name not found"), !1;
  try {
    let s = Sko({
      requestId: r,
      host: n,
      allow: o
    });
    return await u(e, {
      from: Oa,
      text: _(s),
      timestamp: new Date().toISOString()
    }, d, `sandbox permission response for ${_(r)} (host: ${_(n)}, allow: ${_(o)}) to worker ${_(e)} via mailbox`, a)
  } catch (s) {
    return t(`[PermissionSync] Failed to send sandbox permission response via mailbox: ${s}`), l(s), !1
  }
}
export {
  iX,
  aDt,
  DWn,
  kBe,
  LWn,
  Zvo,
  IOs,
  MOs,
  _Rr
};
