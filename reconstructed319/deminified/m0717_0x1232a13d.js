// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { d, qt } from "B:/~BUN/root/chunk-y2g9f85n.js";
import { t } from "B:/~BUN/root/chunk-2pp12te6.js";
import { Yr, DE } from "B:/~BUN/root/chunk-n8cnxns2.js";
import { a } from "B:/~BUN/root/chunk-xrwdh0g4.js";
import { ct } from "B:/~BUN/root/chunk-bkfncj77.js";
import { nD } from "B:/~BUN/root/chunk-4vcs773m.js";
function f5s(e, n, o) {
  return e !== void 0 && e.prompt !== null && o.stdin && o.stdout && (n.outputFormat === void 0 || n.outputFormat === "text") && n.sdkUrl === void 0 && n.jsonSchema === void 0 && !n.includePartialMessages && !n.replayUserMessages && n.maxTurns === void 0 && n.maxBudgetUsd === void 0 && n.resumeSessionAt === void 0 && n.resumeDropsTurn === void 0 && n.rewindFiles === void 0 ? {
    open: e.open,
    prompt: e.prompt
  } : void 0;
}
var Vpn = "Can't open \u2014 this session is running in another terminal",
  l = 60,
  p = /["\u02BA\u02EE\u05F4\u201C-\u201F\u2033\u2036\u301D-\u301F\uFF02]/g;
function oGt(e) {
  let n = DE(Yr(e)).replace(p, "'");
  return `"${ct(n, l)}"`;
}
function TPe({
  title: title,
  holder: holder,
  canFork: canFork,
  handoff: handoff
}) {
  let {
      jobId: jobId
    } = holder,
    r = title ? oGt(title) : "That session",
    u = jobId ? `Run \`claude attach ${jobId}\` to open it, or \`claude stop ${jobId}\` first to resume it here.` : "Run `claude agents` to find it and open it, or stop it there first to resume it here.",
    c = canFork ? " Add --fork-session to branch off a copy instead." : "";
  return `${r} is running in the background${jobId ? ` (${jobId})` : ""}.${Tjr(handoff)} ${u}${c}`;
}
async function t8(e, n) {
  let o = (await CPe(e)).find(item => item.kind !== "interactive");
  if (!o) return null;
  let jobId_2 = o.jobId !== void 0 && nD.test(o.jobId) && (await m(o.jobId, e, n)) ? o.jobId : void 0;
  return {
    kind: o.kind,
    jobId: jobId_2
  };
}
async function m(e, n, o) {
  try {
    let {
        getJobDir: getJobDir,
        readJobState: readJobState
      } = await import("B:/~BUN/root/chunk-9a7qj1t6.js"),
      r = await readJobState(getJobDir(e), o),
      u = n.toLowerCase();
    return r !== null && (r.sessionId.toLowerCase() === u || r.resumeSessionId?.toLowerCase() === u);
  } catch (error) {
    if (qt(error)) t(`[resume] job state unreadable: ${d(error)}`, {
      level: "warn"
    });else a(error);
    return !1;
  }
}
async function CPe(e, n) {
  let o = n?.rejectUnreadable ? await (await import("B:/~BUN/root/chunk-7g5ms3d2.js")).listAllLiveSessions(void 0, {
      rejectUnreadable: !0
    }) : await import("B:/~BUN/root/chunk-7g5ms3d2.js").then(r => r.listAllLiveSessions()).catch(() => []),
    s = e.toLowerCase(),
    i = [];
  for (let r of o) {
    if (r.sessionId?.toLowerCase() !== s || r.pid === process.pid || !r.kind) continue;
    if (r.kind === "interactive" && r.parkedJobId !== void 0) continue;
    i.push({
      kind: r.kind,
      jobId: r.jobId,
      pid: r.pid
    });
  }
  return i;
}
function Tjr(e) {
  switch (e?.reason) {
    case void 0:
    case "not_openable":
      return "";
    case "prompt_undelivered":
      return {
        queued: " Your prompt was saved and will be sent to it when you next restart it.",
        unconfirmed: ` Your prompt may not have reached it: ${e.detail}.`,
        failed: ` Your prompt was not sent to it: ${e.detail}.`
      }[e.delivery];
    case "open_failed":
      return e.promptSent ? ` Your prompt was sent to it, but it could not be opened here: ${e.detail}.` : ` It could not be opened here: ${e.detail}.`;
  }
}
export { f5s, Vpn, oGt, TPe, t8, CPe, Tjr };