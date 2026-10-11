// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.283
import {
  c
} from "B:/~BUN/root/chunk-kks4mj3w.js";
import {
  i
} from "B:/~BUN/root/chunk-728mwbhs.js";
import {
  re
} from "B:/~BUN/root/chunk-y04k89s2.js";
import {
  b
} from "B:/~BUN/root/chunk-qe2zga5e.js";
import {
  wJ
} from "B:/~BUN/root/chunk-ejjy06g8.js";
import {
  Nb,
  Zan,
  eln
} from "B:/~BUN/root/chunk-d36ctpgs.js";
import {
  hI
} from "B:/~BUN/root/chunk-3hjtxzqy.js";
import {
  acn,
  ccn
} from "B:/~BUN/root/chunk-xyqb4s7p.js";
import {
  Bp
} from "B:/~BUN/root/chunk-3jyp964r.js";
import {
  t7,
  HKt,
  FKt,
  kSt
} from "B:/~BUN/root/chunk-7dvkmj58.js";
import {
  LKt
} from "B:/~BUN/root/chunk-xkgts8xa.js";
import {
  Fy
} from "B:/~BUN/root/chunk-5w2ram39.js";
import {
  uO
} from "B:/~BUN/root/chunk-zfm0jkby.js";
import {
  _S
} from "B:/~BUN/root/chunk-tzzvaz2j.js";
import {
  randomUUID as A
} from "crypto";
var a = 1e5,
  W = 4000;

function D(t) {
  let o = t.replace(/[\r\n\v\f\x1c\x1d\x1e\u0085\u2028\u2029]+/g, " ").replaceAll("remote-workflow:", "remote-workflow;");
  if (o.length > W) o = `${re(o,W)}\u2026[truncated]`;
  return o
}

function _St(t, o) {
  return `remote-workflow: error[${t}]: ${D(o)}`
}

function u(t) {
  let o = b(t);
  return o === void 0 ? void 0 : o.replaceAll("\x85", "\\u0085").replaceAll("\u2028", "\\u2028").replaceAll("\u2029", "\\u2029")
}

function b7e(t) {
  if (acn()) return "dynamic workflows are disabled for this session (managed settings `disableWorkflows`).";
  if (t?.serverAuthoredCarrier && wJ()) return null;
  if (!ccn()) return "dynamic workflows are disabled for this session (org policy `allow_workflows`).";
  return null
}
async function DKt({
  script: t,
  args: o,
  telemetrySource: d,
  serverAuthoredCarrier: h = !1,
  context: p
}) {
  let s = (l, e) => ({
      ok: !1,
      layer: l,
      line: _St(l, e)
    }),
    _ = b7e({
      serverAuthoredCarrier: h
    });
  if (_) return s("policy-gate", _);
  let w = h ? Zan : Nb;
  if (t.length > w) return s("script-too-large", `workflow script exceeds ${w} bytes.`);
  if (!hI(t)) return s("control-chars", "workflow script contains disallowed control characters.");
  let n = Fy(t, {
    maxBytes: w
  });
  if ("error" in n) return s("meta-parse", `invalid workflow script: ${n.error}`);
  if (LKt(n.scriptBody)) return s("nondeterminism", "workflow scripts must be deterministic: Date.now()/Math.random()/new Date() are unavailable (breaks resume). Stamp results after the workflow returns, or pass timestamps via args.");
  let k = t7(n.scriptBody);
  if (!k.ok) return s("compile", `workflow script compile failed: ${k.error}`);
  let f = `wf_${A().slice(0,12)}`,
    y = _S("local_workflow"),
    x = eln(n.meta.name, f, t, p.storageV5),
    C = HKt(n.meta.name, void 0, !1),
    R = FKt(n.meta.description, void 0, !1);
  i("tengu_workflow_launched", {
    invocation_mode: c(d),
    workflow_source: c(d),
    phase_count: n.meta.phases?.length ?? 0,
    launched_from_subagent: !1,
    has_args: o != null,
    is_resume: !1,
    script_size_chars: t.length
  });
  let r = await new Promise((l) => {
    kSt({
      taskId: y,
      workflowRunId: f,
      script: t,
      scriptPath: x,
      args: o,
      meta: n.meta,
      vmScript: k.vmScript,
      toolUseContext: p,
      canUseTool: p.canUseTool ?? Bp,
      toolUseId: void 0,
      transcriptDir: uO(f),
      telemetry: {
        source: d,
        name: C,
        description: R,
        scriptIsVerbatimBuiltIn: !1
      },
      isResume: !1,
      onSettled: l,
      suppressCompletionNotification: !0
    })
  });
  switch (r.status) {
    case "completed": {
      let l = {
          status: "completed",
          workflowName: n.meta.name,
          runId: f,
          agentCount: r.agentCount,
          durationMs: r.durationMs,
          failures: r.failures,
          result: r.result
        },
        e = u(l);
      if (e === void 0 || e.length > a) {
        let S = e === void 0 ? "not serializable" : `${e.length} chars exceeds ${a}`,
          m = r.failures.slice(0, 20).map((g) => g.length > 500 ? `${re(g,500)}\u2026[truncated]` : g);
        if (r.failures.length > m.length) m.push(`\u2026and ${r.failures.length-m.length} more failures omitted`);
        if (e = u({
            ...l,
            failures: m
          }), e === void 0 || e.length > a) e = u({
          ...l,
          failures: [`<${r.failures.length} failures omitted: diagnostics never outrank the result payload>`]
        });
        if (e === void 0 || e.length > a) e = u({
          ...l,
          failures: m,
          result: `<result omitted: ${S}>`
        });
        if (e === void 0 || e.length > a) e = u({
          status: "completed",
          workflowName: re(String(n.meta.name), 200),
          runId: f,
          agentCount: r.agentCount,
          durationMs: r.durationMs,
          failures: [`<${r.failures.length} failures omitted: fallback exceeded ${a}>`],
          result: `<result omitted: ${S}>`
        }) ?? '{"status":"completed"}'
      }
      return {
        ok: !0,
        line: `remote-workflow: ${e}`,
        workflowName: n.meta.name
      }
    }
    case "failed":
      return s("workflow-failed", `workflow failed after ${r.durationMs}ms (${r.agentCount} agents): ${r.error}`);
    case "killed":
      return s("killed", "workflow was aborted before completion.");
    case "adopted":
    case "unknown":
      return s("unexpected-state", `workflow ended in unexpected state '${r.status}'.`)
  }
}
export {
  _St,
  b7e,
  DKt
};
