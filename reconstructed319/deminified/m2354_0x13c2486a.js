// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { q } from "B:/~BUN/root/chunk-game8aqv.js";
import { $u } from "B:/~BUN/root/chunk-grwykqvw.js";
import { ONt } from "B:/~BUN/root/chunk-y1b1g4ac.js";
import { uee } from "B:/~BUN/root/chunk-s9vv4h32.js";
import { Je } from "B:/~BUN/root/chunk-9wbhv9z5.js";
var i = new Je(() => ({
  byToolUse: new Map()
}));
function qui(e, t) {
  let {
    byToolUse: byToolUse
  } = i.of(e);
  byToolUse.set(t.toolUseId, [...(byToolUse.get(t.toolUseId) ?? []), t]), ONt(e, t.toolUseId, () => {
    CIe(e, t);
  });
}
function Yui(e, t, r) {
  return i.peek(e)?.byToolUse.get(t)?.find(s => s.pathFormKey === r && (s.state === "uploading" || s.state === "pending"));
}
function bYt(e, t, r) {
  if (e === void 0 || t === void 0) return;
  if (!Array.isArray(r)) return;
  return i.peek(e)?.byToolUse.get(t)?.find(s => s.state === "pending" && s.files.length === r.length && s.files.every((item, index) => {
    let o = r[index];
    return typeof o === "object" && o !== null && !Array.isArray(o) && Object.keys(o).length === 2 && "file_id" in o && "name" in o && o.file_id === item.file_id && o.name === item.name;
  }));
}
async function CIe(e, t) {
  if (l(e, t), t.state !== "uploading" && t.state !== "pending") return;
  t.state = "deleted", await t.remove(t.files.map(item => item.file_id));
}
function psr(e, t) {
  if (l(e, t), t.state !== "deleted") t.state = "sent";
}
function l(e, t) {
  let {
      byToolUse: byToolUse_2
    } = i.of(e),
    s = (byToolUse_2.get(t.toolUseId) ?? []).filter(item => item !== t);
  if (s.length === 0) byToolUse_2.delete(t.toolUseId);else byToolUse_2.set(t.toolUseId, s);
}
var p = "refusedByCcrProxyBeforeForwarding";
function kQ(e) {
  if (typeof e === "object" && e !== null) Object.defineProperty(e, p, {
    value: !0
  });
  return e;
}
function nlt(e) {
  return typeof e === "object" && e !== null && e[p] === !0;
}
var c = "This tool call's approval was for different arguments. Ask the user to approve again \u2014 the previous approval cannot be reused.",
  g = "Nothing ran: the user's approval was stored without this call's arguments, so it could not be tied to the call.";
function msr(e) {
  return e.includes(c) || e.includes(g);
}
var a = new Je(() => ({
  byToolUse: new Map()
}));
function SYt(e, t, r) {
  a.of(e).byToolUse.set(t, r);
}
function wYt(e, t) {
  a.peek(e)?.byToolUse.delete(t);
}
function hsr(e, t) {
  if (e === void 0 || t === void 0) return;
  return a.peek(e)?.byToolUse.get(t)?.();
}
var path = "/v1/claudeai-agents/mcp",
  serverId = "f688f3fc-1d05-5bd1-9c48-9854ec083044",
  Xui = new Je(() => ({})),
  Jui = new Je(() => ({}));
function tvn(e, t) {
  let r = e.servers.get(t.name);
  return r !== void 0 && t.config.type === "http" && t.config.url === r && e.heldSinceBoot(t.name);
}
var fve = /^file_[A-Za-z0-9_-]{1,128}$/,
  rlt = "get_task";
function w3e(e) {
  return e === "start_task" || e === "update_task";
}
function y1e(e) {
  return uee(e, {
    path: path,
    serverId: serverId
  });
}
function gsr(e) {
  if (e.config.type !== "http" || !$u(e.config.url)) return !1;
  return q() ? X8r(e) : y1e(e);
}
function X8r(e) {
  if (e.config.type !== "http" || !$u(e.config.url)) return !1;
  try {
    return new URL(e.config.url).searchParams.getAll("toolbox_mcp_server_id").some(item => item.toLowerCase() === serverId);
  } catch {
    return !1;
  }
}
function kYt(e) {
  return y1e(e) || q() && X8r(e);
}
export { qui, Yui, bYt, CIe, psr, kQ, nlt, msr, SYt, wYt, hsr, Xui, Jui, tvn, fve, rlt, w3e, y1e, gsr, X8r, kYt };