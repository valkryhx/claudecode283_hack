// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { Wo } from "B:/~BUN/root/chunk-4rk7cwxz.js";
import { ep } from "B:/~BUN/root/chunk-196w7fz7.js";
import { ui } from "B:/~BUN/root/chunk-3qp6kts8.js";
import { randomBytes as n } from "crypto";
var i = new Set(["local_agent", "remote_agent", "in_process_teammate", "local_workflow"]);
function uF(t) {
  return Object.values(t).some(g$n);
}
function g$n(t) {
  return i.has(t.type) && !ui(t.status) && !(t.type === "in_process_teammate" && t.isIdle) && !(t.type === "remote_agent" && t.isLongRunning);
}
function eEr(t) {
  return Object.values(t).some(h$n);
}
function h$n(t) {
  return t.type === "local_bash" && !ui(t.status);
}
var l = {
    local_bash: "b",
    local_agent: "a",
    remote_agent: "r",
    in_process_teammate: "t",
    local_workflow: "w",
    monitor_mcp: "m",
    monitor_ws: "s",
    mcp_task: "k",
    dream: "d",
    auto_mode_scan: "e"
  },
  r = "0123456789abcdefghijklmnopqrstuvwxyz";
function _S(t) {
  let s = l[t] ?? "x",
    a = n(8),
    e = s;
  for (let o = 0; o < 8; o++) e += r[a[o] % r.length];
  return e;
}
function vm(id, type, description, toolUseId) {
  return {
    id: id,
    type: type,
    status: "pending",
    description: description,
    toolUseId: toolUseId,
    startTime: Date.now(),
    ...(!Wo() && {
      outputFile: ep(id)
    }),
    outputOffset: 0,
    notified: !1
  };
}
export { uF, g$n, eEr, h$n, _S, vm };