// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { _, oi } from "B:/~BUN/root/chunk-2pp12te6.js";
var BVo = {
    killed: "Stopped because the workflow was stopped",
    failed: "Stopped because the workflow failed",
    completed: "Stopped because the workflow finished without waiting for it"
  },
  l = new Set(Object.values(BVo));
function NQn(o) {
  return o.endedWithRun !== void 0 || o.error !== void 0 && l.has(o.error);
}
var jVo = "error details withheld for this workflow",
  WVo = "This workflow run hides its script, and its record of that could not be read or written, so nothing was run.";
function T4r(o) {
  return o.type !== "workflow_log";
}
function zVo(o) {
  let {
      promptPreview: promptPreview,
      phaseTitle: phaseTitle,
      ...n
    } = o,
    e = phaseTitle !== void 0 && n.phaseIndex !== void 0;
  return {
    ...n,
    ...(e && {
      phaseTitle: `phase ${n.phaseIndex}`
    }),
    ...(n.error !== void 0 && {
      error: "error details withheld for this workflow"
    })
  };
}
function d(o) {
  return o.map(item => item.type === "workflow_phase" ? {
    ...item,
    title: `phase ${item.index}`
  } : zVo(item));
}
var i = 40960;
function sCt(o, t) {
  let r = o.filter(T4r);
  return t ? d(r) : r;
}
function zoi(rows) {
  if (Buffer.byteLength(_(rows)) <= i) return {
    rows: rows,
    omitted: 0
  };
  let t = rows.map(item => item.type !== "workflow_agent" ? item : {
      type: item.type,
      index: item.index,
      label: item.label,
      state: item.state,
      phaseIndex: item.phaseIndex,
      error: item.error,
      endedWithRun: item.endedWithRun,
      skipped: item.skipped,
      blocked: item.blocked,
      cached: item.cached,
      queuedAt: item.queuedAt,
      startedAt: item.startedAt,
      tokens: item.tokens,
      toolCalls: item.toolCalls,
      durationMs: item.durationMs
    }),
    r = new Set(),
    n = 2;
  for (let e of [...t.filter(item => item.type === "workflow_phase"), ...t.filter(item => item.type === "workflow_agent" && item.state === "error"), ...t.filter(item => item.type === "workflow_agent" && item.state !== "error")]) {
    let s = Buffer.byteLength(oi(e)) + 1;
    if (n + s <= i) n += s, r.add(e);
  }
  return {
    rows: t.filter(item => r.has(item)),
    omitted: t.length - r.size
  };
}
function ibn({
  startedAt: startedAt,
  queuedAt: queuedAt,
  tokens: tokens
}) {
  return startedAt !== void 0 || queuedAt === void 0 || (tokens ?? 0) > 0;
}
export { BVo, NQn, jVo, WVo, T4r, zVo, sCt, zoi, ibn };