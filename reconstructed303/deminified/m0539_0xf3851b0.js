// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { d, Wt } from "B:/~BUN/root/chunk-3aez4b53.js";
import { t } from "B:/~BUN/root/chunk-6za2ez23.js";
import { zr, yI } from "B:/~BUN/root/chunk-nggrknsv.js";
import { l } from "B:/~BUN/root/chunk-c09hf5e4.js";
import { mt } from "B:/~BUN/root/chunk-pjgzz98k.js";
import { Z0 } from "B:/~BUN/root/chunk-nq10jsxs.js";
function r3o(e, n, o) {
  return e !== void 0 && e.prompt !== null && o.stdin && o.stdout && (n.outputFormat === void 0 || n.outputFormat === "text") && n.sdkUrl === void 0 && n.jsonSchema === void 0 && !n.includePartialMessages && !n.replayUserMessages && n.maxTurns === void 0 && n.maxBudgetUsd === void 0 && n.resumeSessionAt === void 0 && n.resumeDropsTurn === void 0 && n.rewindFiles === void 0 ? {
    open: e.open,
    prompt: e.prompt
  } : void 0;
}
var vGt = "Can't open \u2014 this session is running in another terminal",
  c = 60,
  p = /["\u02BA\u02EE\u05F4\u201C-\u201F\u2033\u2036\u301D-\u301F\uFF02]/g;
function Uwt(e) {
  let n = yI(zr(e)).replace(p, "'");
  return `"${mt(n, c)}"`;
}
function $ye({
  title: title,
  holder: holder,
  canFork: canFork,
  handoff: handoff
}) {
  let {
      jobId: jobId
    } = holder,
    r = title ? Uwt(title) : "That session",
    a = jobId ? `Run \`claude attach ${jobId}\` to open it, or \`claude stop ${jobId}\` first to resume it here.` : "Run `claude agents` to find it and open it, or stop it there first to resume it here.",
    u = canFork ? " Add --fork-session to branch off a copy instead." : "";
  return `${r} is running in the background${jobId ? ` (${jobId})` : ""}.${wer(handoff)} ${a}${u}`;
}
async function VQ(e, n) {
  let o = (await Z2e(e)).find(item => item.kind !== "interactive");
  if (!o) return null;
  let jobId_2 = o.jobId !== void 0 && Z0.test(o.jobId) && (await m(o.jobId, e, n)) ? o.jobId : void 0;
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
      } = await import("B:/~BUN/root/chunk-7ach19n3.js"),
      r = await readJobState(getJobDir(e), o),
      a = n.toLowerCase();
    return r !== null && (r.sessionId.toLowerCase() === a || r.resumeSessionId?.toLowerCase() === a);
  } catch (error) {
    if (Wt(error)) t(`[resume] job state unreadable: ${d(error)}`, {
      level: "warn"
    });else l(error);
    return !1;
  }
}
async function Z2e(e, n) {
  let o = n?.rejectUnreadable ? await (await import("B:/~BUN/root/chunk-epbwnycc.js")).listAllLiveSessions(void 0, {
      rejectUnreadable: !0
    }) : await import("B:/~BUN/root/chunk-epbwnycc.js").then(r => r.listAllLiveSessions()).catch(() => []),
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
function wer(e) {
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
export { r3o, vGt, Uwt, $ye, VQ, Z2e, wer };