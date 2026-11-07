// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { Pg } from "B:/~BUN/root/chunk-r8p1hzqw.js";
import { Pe, rs } from "B:/~BUN/root/chunk-vz9zea4j.js";
import { i } from "B:/~BUN/root/chunk-j6pt0v41.js";
import { hjs, pHr } from "B:/~BUN/root/chunk-65j2302z.js";
import { rMe } from "B:/~BUN/root/chunk-27h4st9h.js";
import { wse } from "B:/~BUN/root/chunk-y1b1g4ac.js";
var zSn = "CLAUDE_CODE_RELAUNCH_PROACTIVITY_BASELINE",
  GSn = "CLAUDE_CODE_RELAUNCH_PROACTIVITY_LEVEL",
  Hqt = "CLAUDE_CODE_RELAUNCH_PROACTIVITY_DECIDED",
  VSn = "CLAUDE_CODE_RELAUNCH_PROACTIVITY_EVER_ON";
function Gli(e) {
  return e.toolPermissionContext.proactivityBaseline === void 0 ? void 0 : e;
}
function gtr({
  toolPermissionContext: toolPermissionContext
}) {
  let proactivityBaseline = toolPermissionContext.proactivityBaseline;
  return proactivityBaseline === void 0 ? {} : {
    [zSn]: proactivityBaseline.mode
  };
}
function ytr({
  proactivityLevel: proactivityLevel,
  toolPermissionContext: toolPermissionContext_2
}) {
  let n = {
    [GSn]: proactivityLevel
  };
  if (toolPermissionContext_2.startupModeDecidedByProactivityLevel !== void 0) n[Hqt] = "1";
  if (wse()) n[VSn] = "1";
  return n;
}
function Vli({
  toolPermissionContext: toolPermissionContext_3
}) {
  return toolPermissionContext_3.startupModeDecidedByProactivityLevel === void 0 ? {
    [Hqt]: "0"
  } : {};
}
function Kli(e) {
  return pHr(e) !== "fresh" || hjs(e).some(item => item === "--permission-mode" || item.startsWith("--permission-mode="));
}
function qli(e) {
  let CLAUDE_CODE_RELAUNCH_PROACTIVITY_BASELINE = i.CLAUDE_CODE_RELAUNCH_PROACTIVITY_BASELINE;
  i.unset("CLAUDE_CODE_RELAUNCH_PROACTIVITY_BASELINE");
  let n = Pg(CLAUDE_CODE_RELAUNCH_PROACTIVITY_BASELINE);
  if (n === "bypassPermissions" && !e) return;
  return n;
}
function Yli() {
  let CLAUDE_CODE_RELAUNCH_PROACTIVITY_LEVEL = i.CLAUDE_CODE_RELAUNCH_PROACTIVITY_LEVEL;
  if (i.unset("CLAUDE_CODE_RELAUNCH_PROACTIVITY_LEVEL"), rMe(CLAUDE_CODE_RELAUNCH_PROACTIVITY_LEVEL)) return CLAUDE_CODE_RELAUNCH_PROACTIVITY_LEVEL;
  i.unset("CLAUDE_CODE_RELAUNCH_PROACTIVITY_DECIDED"), i.unset("CLAUDE_CODE_RELAUNCH_PROACTIVITY_EVER_ON");
  return;
}
function Xli() {
  let CLAUDE_CODE_RELAUNCH_PROACTIVITY_EVER_ON = i.CLAUDE_CODE_RELAUNCH_PROACTIVITY_EVER_ON;
  return i.unset("CLAUDE_CODE_RELAUNCH_PROACTIVITY_EVER_ON"), Pe(CLAUDE_CODE_RELAUNCH_PROACTIVITY_EVER_ON);
}
function Jli() {
  return rMe(i.CLAUDE_CODE_RELAUNCH_PROACTIVITY_LEVEL) && Pe(i.CLAUDE_CODE_RELAUNCH_PROACTIVITY_EVER_ON);
}
function _tr() {
  let CLAUDE_CODE_RELAUNCH_PROACTIVITY_DECIDED = i.CLAUDE_CODE_RELAUNCH_PROACTIVITY_DECIDED;
  if (i.unset("CLAUDE_CODE_RELAUNCH_PROACTIVITY_DECIDED"), Pe(CLAUDE_CODE_RELAUNCH_PROACTIVITY_DECIDED)) return !0;
  if (rs(CLAUDE_CODE_RELAUNCH_PROACTIVITY_DECIDED)) return !1;
  return;
}
export { zSn, GSn, Hqt, VSn, Gli, gtr, ytr, Vli, Kli, qli, Yli, Xli, Jli, _tr };