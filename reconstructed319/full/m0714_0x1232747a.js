// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  Pg
} from "B:/~BUN/root/chunk-r8p1hzqw.js";
import {
  Pe,
  rs
} from "B:/~BUN/root/chunk-vz9zea4j.js";
import {
  i
} from "B:/~BUN/root/chunk-j6pt0v41.js";
import {
  hjs,
  pHr
} from "B:/~BUN/root/chunk-65j2302z.js";
import {
  rMe
} from "B:/~BUN/root/chunk-27h4st9h.js";
import {
  wse
} from "B:/~BUN/root/chunk-y1b1g4ac.js";
var zSn = "CLAUDE_CODE_RELAUNCH_PROACTIVITY_BASELINE",
  GSn = "CLAUDE_CODE_RELAUNCH_PROACTIVITY_LEVEL",
  Hqt = "CLAUDE_CODE_RELAUNCH_PROACTIVITY_DECIDED",
  VSn = "CLAUDE_CODE_RELAUNCH_PROACTIVITY_EVER_ON";

function Gli(e) {
  return e.toolPermissionContext.proactivityBaseline === void 0 ? void 0 : e
}

function gtr({
  toolPermissionContext: e
}) {
  let t = e.proactivityBaseline;
  return t === void 0 ? {} : {
    [zSn]: t.mode
  }
}

function ytr({
  proactivityLevel: e,
  toolPermissionContext: t
}) {
  let n = {
    [GSn]: e
  };
  if (t.startupModeDecidedByProactivityLevel !== void 0) n[Hqt] = "1";
  if (wse()) n[VSn] = "1";
  return n
}

function Vli({
  toolPermissionContext: e
}) {
  return e.startupModeDecidedByProactivityLevel === void 0 ? {
    [Hqt]: "0"
  } : {}
}

function Kli(e) {
  return pHr(e) !== "fresh" || hjs(e).some((t) => t === "--permission-mode" || t.startsWith("--permission-mode="))
}

function qli(e) {
  let t = i.CLAUDE_CODE_RELAUNCH_PROACTIVITY_BASELINE;
  i.unset("CLAUDE_CODE_RELAUNCH_PROACTIVITY_BASELINE");
  let n = Pg(t);
  if (n === "bypassPermissions" && !e) return;
  return n
}

function Yli() {
  let e = i.CLAUDE_CODE_RELAUNCH_PROACTIVITY_LEVEL;
  if (i.unset("CLAUDE_CODE_RELAUNCH_PROACTIVITY_LEVEL"), rMe(e)) return e;
  i.unset("CLAUDE_CODE_RELAUNCH_PROACTIVITY_DECIDED"), i.unset("CLAUDE_CODE_RELAUNCH_PROACTIVITY_EVER_ON");
  return
}

function Xli() {
  let e = i.CLAUDE_CODE_RELAUNCH_PROACTIVITY_EVER_ON;
  return i.unset("CLAUDE_CODE_RELAUNCH_PROACTIVITY_EVER_ON"), Pe(e)
}

function Jli() {
  return rMe(i.CLAUDE_CODE_RELAUNCH_PROACTIVITY_LEVEL) && Pe(i.CLAUDE_CODE_RELAUNCH_PROACTIVITY_EVER_ON)
}

function _tr() {
  let e = i.CLAUDE_CODE_RELAUNCH_PROACTIVITY_DECIDED;
  if (i.unset("CLAUDE_CODE_RELAUNCH_PROACTIVITY_DECIDED"), Pe(e)) return !0;
  if (rs(e)) return !1;
  return
}
export {
  zSn,
  GSn,
  Hqt,
  VSn,
  Gli,
  gtr,
  ytr,
  Vli,
  Kli,
  qli,
  Yli,
  Xli,
  Jli,
  _tr
};
