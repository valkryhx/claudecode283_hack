// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { t, _ } from "B:/~BUN/root/chunk-2pp12te6.js";
import { Ni } from "B:/~BUN/root/chunk-ghar8fn5.js";
import { I9 } from "B:/~BUN/root/chunk-cxcakgnv.js";
function u(e) {
  if (!Array.isArray(e)) return [];
  let n = I9(),
    s = [];
  for (let o of e) {
    let i = n.safeParse(o);
    if (i.success) s.push(i.data);else t(`[SwarmPermissionPoller] Dropping malformed permissionUpdate entry: ${i.error.message}`, {
      level: "warn"
    });
  }
  return s;
}
function $tr(e) {
  Ni().swarmPermissions.pending.set(e.requestId, e), t(`[SwarmPermissionPoller] Registered callback for request ${e.requestId}`);
}
function awn(e) {
  Ni().swarmPermissions.pending.delete(e), t(`[SwarmPermissionPoller] Unregistered callback for request ${e}`);
}
function gdi(e) {
  return Ni().swarmPermissions.pending.has(e);
}
function ydi() {
  Ni().swarmPermissions.clear();
}
var d = !0;
function a(e, n) {
  let s = n.toolUseId === void 0 ? d : n.toolUseId === e.toolUseId,
    approvedRequest = n.approvedRequest,
    i = approvedRequest === void 0 ? d : approvedRequest.tool_use_id === e.toolUseId && approvedRequest.tool_name === e.toolName,
    r = approvedRequest === void 0 ? d : approvedRequest.input_digest === e.inputDigest;
  if (!s || !i) return "mismatch";
  if (!r) return "input_digest_mismatch";
  return n.toolUseId === void 0 || approvedRequest === void 0 ? "unbound" : "bound";
}
function lwn(e) {
  let pending = Ni().swarmPermissions.pending,
    s = pending.get(e.requestId);
  if (!s) return t(`[SwarmPermissionPoller] No callback registered for mailbox response ${_(e.requestId)}`), !1;
  pending.delete(e.requestId);
  let o = a(s, e);
  if (o === "mismatch" || o === "input_digest_mismatch") {
    let approvedRequest_2 = e.approvedRequest,
      r = e.decision === "approved" ? "approval" : "denial",
      l = o === "input_digest_mismatch" ? `this ${_(s.toolName)} call (${_(s.toolUseId)}), but its input digest differs` : `${approvedRequest_2 ? `${_(approvedRequest_2.tool_name)} (${_(approvedRequest_2.tool_use_id)})` : _(e.toolUseId)}, not this ${_(s.toolName)} call (${_(s.toolUseId)})`;
    return t(`[SwarmPermissionPoller] Refusing ${r} for request ${_(e.requestId)}: the leader answered ${l}`, {
      level: "warn"
    }), s.onRefuse(`The ${r} did not describe this tool call, so it was refused.`, r), !0;
  }
  if (t(`[SwarmPermissionPoller] Processing mailbox response for request ${_(e.requestId)}: ${e.decision} (${o})`), o === "unbound") s.onUnboundVerdict();
  if (e.decision === "approved") {
    let i = u(e.permissionUpdates),
      updatedInput = e.updatedInput;
    s.onAllow(updatedInput, i);
  } else s.onReject(e.feedback);
  return !0;
}
function _di(e) {
  Ni().swarmPermissions.pendingSandbox.set(e.requestId, e), t(`[SwarmPermissionPoller] Registered sandbox callback for request ${e.requestId}`);
}
function bdi(e) {
  return Ni().swarmPermissions.pendingSandbox.has(e);
}
function Sdi(e) {
  let pendingSandbox = Ni().swarmPermissions.pendingSandbox,
    s = pendingSandbox.get(e.requestId);
  if (!s) return t(`[SwarmPermissionPoller] No sandbox callback registered for request ${_(e.requestId)}`), !1;
  if (pendingSandbox.delete(e.requestId), s.host !== e.host) return t(`[SwarmPermissionPoller] Refusing sandbox ${e.allow === !0 ? "allow" : "deny"} for request ${_(e.requestId)}: the leader answered for ${_(e.host)}, not ${_(s.host)}`, {
    level: "warn"
  }), s.resolve(!1), !0;
  return t(`[SwarmPermissionPoller] Processing sandbox response for request ${_(e.requestId)}: allow=${_(e.allow)}`), s.resolve(e.allow), !0;
}
export { $tr, awn, gdi, ydi, lwn, _di, bdi, Sdi };