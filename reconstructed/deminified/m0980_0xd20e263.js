// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { l } from "B:/~BUN/root/chunk-bgthmgyc.js";
import { ci } from "B:/~BUN/root/chunk-1rjcv085.js";
import { b, J, t } from "B:/~BUN/root/chunk-qe2zga5e.js";
import { f } from "B:/~BUN/root/chunk-zv3zxqya.js";
import { d7, zwt } from "B:/~BUN/root/chunk-brgnhyc0.js";
import { J4t, MCn } from "B:/~BUN/root/chunk-38htkcqc.js";
import { o, E, Qe, z, A } from "B:/~BUN/root/chunk-n8qdr73v.js";
var version = 1,
  d = ["flag_off", "consent_off", "not_served", "arm_slow", "arm_failed", "cancelled", "no_word"];
var c = f(() => Qe({
  version: A(version),
  kind: A("created_empty_unfilled"),
  sessionId: o().min(1).max(256),
  createdAtMs: E().int().nonnegative(),
  why: z(d)
}));
function p(s, n) {
  let e;
  try {
    e = J(s.toString("utf8"));
  } catch {
    return null;
  }
  let r = c().safeParse(e);
  return r.success && r.data.sessionId === n ? r.data : null;
}
async function S({
  recordPath: recordPath,
  v5: v5,
  markerPath: markerPath,
  sessionId: sessionId,
  why: why,
  nowMs = Date.now
}) {
  try {
    if ((await J4t(recordPath, v5)).kind !== "absent") return;
    let m = {
      version: version,
      kind: "created_empty_unfilled",
      sessionId: sessionId,
      createdAtMs: nowMs(),
      why: why
    };
    await MCn(markerPath, Buffer.from(b(m), "utf8"));
  } catch (error) {
    t(`[dirSync] created-empty marker for ${sessionId} not written: ${l(error)}; a later attach will not be warned that this session is empty`);
  }
}
async function JZr(s, n) {
  let e = await J4t(s);
  return e.kind === "ok" ? p(e.content, n) : null;
}
async function QZr({
  gitRoot: gitRoot,
  sessionId: sessionId_2,
  storageV5: storageV5,
  why: why_2
}) {
  let sessionId_3 = ci(sessionId_2);
  try {
    let a = await d7(gitRoot, sessionId_3, storageV5);
    await S({
      recordPath: a.path,
      v5: a.v5,
      markerPath: zwt(a.path, sessionId_3),
      sessionId: sessionId_3,
      why: why_2
    });
  } catch (error) {
    t(`[dirSync] created-empty marker for ${sessionId_3} not written: could not work out its path: ${l(error)}; a later attach will not be warned that this session is empty`);
  }
}
export { JZr, QZr };