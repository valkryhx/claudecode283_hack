// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  Pe
} from "B:/~BUN/root/chunk-vz9zea4j.js";
import {
  f
} from "B:/~BUN/root/chunk-drx9cnw1.js";
import {
  l
} from "B:/~BUN/root/chunk-mb9chr1y.js";
import {
  _
} from "B:/~BUN/root/chunk-2pp12te6.js";
import {
  Q
} from "B:/~BUN/root/chunk-n8cnxns2.js";
import {
  TC
} from "B:/~BUN/root/chunk-1g25msn4.js";
import {
  AKe,
  H4
} from "B:/~BUN/root/chunk-7wn6n2hd.js";
import {
  nO,
  FEr,
  HEr
} from "B:/~BUN/root/chunk-j05gjqgd.js";
import {
  _Rr,
  Ayo,
  SRr
} from "B:/~BUN/root/chunk-22y97556.js";
import {
  ap
} from "B:/~BUN/root/chunk-m749kjym.js";
import {
  S$
} from "B:/~BUN/root/chunk-27h4st9h.js";
import {
  pBe,
  vQn,
  CQn,
  RQn,
  AQn
} from "B:/~BUN/root/chunk-ded5zvpt.js";
import {
  $T
} from "B:/~BUN/root/chunk-9x9jgvy9.js";
import {
  xK
} from "B:/~BUN/root/chunk-q42n6mwr.js";
import {
  OS
} from "B:/~BUN/root/chunk-kgvnwy91.js";
import {
  hj
} from "B:/~BUN/root/chunk-ww0cdpg4.js";
import {
  randomUUID as y
} from "crypto";
var a = 1e5,
  A = 4000;

function L(e) {
  let t = e.replace(/[\r\n\v\f\x1c\x1d\x1e\u0085\u2028\u2029]+/g, " ").replaceAll("remote-workflow:", "remote-workflow;");
  if (t.length > A) t = `${Q(t,A)}\u2026[truncated]`;
  return t
}

function ebn(e, t) {
  return `remote-workflow: error[${e}]: ${L(t)}`
}

function c(e) {
  let t = _(e);
  return t === void 0 ? void 0 : t.replaceAll("\x85", "\\u0085").replaceAll("\u2028", "\\u2028").replaceAll("\u2029", "\\u2029")
}

function R() {
  let e = ap();
  if (e === void 0) return Ayo();
  return Object.keys(e).some((t) => t.toUpperCase() === "CLAUDE_CODE_DISABLE_WORKFLOWS" && Pe(e[t]))
}

function x() {
  return AKe().some((e) => e.disableWorkflows === !0 || Object.entries(e.env ?? {}).some(([t, m]) => t.toUpperCase() === "CLAUDE_CODE_DISABLE_WORKFLOWS" && Pe(m)))
}
var I = "Code review did not run: workflows are turned off in this machine's managed settings (`disableWorkflows`, or `CLAUDE_CODE_DISABLE_WORKFLOWS` in its `env` block). Ask this machine's administrator to allow it.",
  M = "Code review did not run: this machine's managed settings could not be read, so whether its administrator turned workflows off is not known. Ask this machine's administrator to fix them.";

function C() {
  if (x()) return I;
  return H4() ? M : null
}

function oCt(e) {
  if (R()) return "dynamic workflows are disabled for this session (the environment variable `CLAUDE_CODE_DISABLE_WORKFLOWS` was set when Claude Code started).";
  let t = e?.serverAuthoredCarrier === !0;
  if (t && e?.eventSessionOrigin === "review") return C();
  if (_Rr()) return Ayo() ? "dynamic workflows are disabled for this session (the environment variable `CLAUDE_CODE_DISABLE_WORKFLOWS`, set after Claude Code started, for example by a settings `env` block)." : "dynamic workflows are disabled for this session (the `disableWorkflows` setting).";
  if (t && e?.eventSessionOrigin === void 0 && hj()) return C();
  if (!SRr()) return "dynamic workflows are disabled for this session (org policy `allow_workflows`).";
  return null
}
async function kQn({
  script: e,
  args: t,
  telemetrySource: m,
  serverAuthoredCarrier: w = !1,
  eventSessionOrigin: v,
  context: p
}) {
  let i = (s, r) => ({
      ok: !1,
      layer: s,
      line: ebn(s, r)
    }),
    S = oCt({
      serverAuthoredCarrier: w,
      eventSessionOrigin: v
    });
  if (S) return i("policy-gate", S);
  let k = w ? FEr : nO;
  if (e.length > k) return i("script-too-large", `workflow script exceeds ${k} bytes.`);
  if (!TC(e)) return i("control-chars", "workflow script contains disallowed control characters.");
  let n = $T(e, {
    maxBytes: k
  });
  if ("error" in n) return i("meta-parse", `invalid workflow script: ${n.error}`);
  if (vQn(n.scriptBody)) return i("nondeterminism", "workflow scripts must be deterministic: Date.now()/Math.random()/new Date() are unavailable (breaks resume). Stamp results after the workflow returns, or pass timestamps via args.");
  let g = pBe(n.scriptBody);
  if (!g.ok) return i("compile", `workflow script compile failed: ${g.error}`);
  let u = `wf_${y().slice(0,12)}`,
    D = OS("local_workflow"),
    W = HEr(n.meta.name, u, e, p.storageV5),
    b = CQn(n.meta.name, void 0, !1),
    O = RQn(n.meta.description, void 0, !1);
  l("tengu_workflow_launched", {
    invocation_mode: f(m),
    workflow_source: f(m),
    phase_count: n.meta.phases?.length ?? 0,
    launched_from_subagent: !1,
    has_args: t != null,
    is_resume: !1,
    script_size_chars: e.length
  });
  let o = await new Promise((s) => {
    AQn({
      taskId: D,
      workflowRunId: u,
      script: e,
      scriptPath: W,
      args: t,
      meta: n.meta,
      vmScript: g.vmScript,
      toolUseContext: p,
      canUseTool: p.canUseTool ?? S$,
      toolUseId: void 0,
      transcriptDir: xK(u),
      telemetry: {
        source: m,
        name: b,
        description: O,
        scriptIsVerbatimBuiltIn: !1
      },
      isResume: !1,
      onSettled: s,
      suppressCompletionNotification: !0,
      withholdScriptFromSdkEvents: w
    })
  });
  switch (o.status) {
    case "completed": {
      let s = {
          status: "completed",
          workflowName: n.meta.name,
          runId: u,
          agentCount: o.agentCount,
          durationMs: o.durationMs,
          failures: o.failures,
          result: o.result
        },
        r = c(s);
      if (r === void 0 || r.length > a) {
        let E = r === void 0 ? "not serializable" : `${r.length} chars exceeds ${a}`,
          d = o.failures.slice(0, 20).map((h) => h.length > 500 ? `${Q(h,500)}\u2026[truncated]` : h);
        if (o.failures.length > d.length) d.push(`\u2026and ${o.failures.length-d.length} more failures omitted`);
        if (r = c({
            ...s,
            failures: d
          }), r === void 0 || r.length > a) r = c({
          ...s,
          failures: [`<${o.failures.length} failures omitted: diagnostics never outrank the result payload>`]
        });
        if (r === void 0 || r.length > a) r = c({
          ...s,
          failures: d,
          result: `<result omitted: ${E}>`
        });
        if (r === void 0 || r.length > a) r = c({
          status: "completed",
          workflowName: Q(String(n.meta.name), 200),
          runId: u,
          agentCount: o.agentCount,
          durationMs: o.durationMs,
          failures: [`<${o.failures.length} failures omitted: fallback exceeded ${a}>`],
          result: `<result omitted: ${E}>`
        }) ?? '{"status":"completed"}'
      }
      return {
        ok: !0,
        line: `remote-workflow: ${r}`,
        workflowName: n.meta.name
      }
    }
    case "failed":
      return i("workflow-failed", `workflow failed after ${o.durationMs}ms (${o.agentCount} agents): ${o.error}`);
    case "killed":
      return i("killed", "workflow was aborted before completion.");
    case "adopted":
    case "unknown":
      return i("unexpected-state", `workflow ended in unexpected state '${o.status}'.`)
  }
}
export {
  ebn,
  oCt,
  kQn
};
