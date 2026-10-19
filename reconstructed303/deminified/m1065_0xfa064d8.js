// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { Fe } from "B:/~BUN/root/chunk-rwkgcmm8.js";
import { c } from "B:/~BUN/root/chunk-jthpk6wv.js";
import { i } from "B:/~BUN/root/chunk-1kfn24jp.js";
import { ne } from "B:/~BUN/root/chunk-nggrknsv.js";
import { _ } from "B:/~BUN/root/chunk-6za2ez23.js";
import { Qx } from "B:/~BUN/root/chunk-2zk4vqr8.js";
import { n0e, Gle } from "B:/~BUN/root/chunk-1gpjpba6.js";
import { c5 } from "B:/~BUN/root/chunk-rfp1pa77.js";
import { DC, t2n, n2n } from "B:/~BUN/root/chunk-c44qc88s.js";
import { Rqn, rIr, xqn } from "B:/~BUN/root/chunk-pmw6knpp.js";
import { ug } from "B:/~BUN/root/chunk-429xgjya.js";
import { lU } from "B:/~BUN/root/chunk-9grc6xh0.js";
import { MRe, dRn, pRn, fRn, mRn } from "B:/~BUN/root/chunk-eshnjbqa.js";
import { Tv } from "B:/~BUN/root/chunk-431ja9am.js";
import { k1 } from "B:/~BUN/root/chunk-0eewnx21.js";
import { AE } from "B:/~BUN/root/chunk-c2nm18xm.js";
import { randomUUID as y } from "crypto";
var l = 1e5,
  A = 4000;
function L(e) {
  let t = e.replace(/[\r\n\v\f\x1c\x1d\x1e\u0085\u2028\u2029]+/g, " ").replaceAll("remote-workflow:", "remote-workflow;");
  if (t.length > A) t = `${ne(t, A)}\u2026[truncated]`;
  return t;
}
function C4t(e, t) {
  return `remote-workflow: error[${e}]: ${L(t)}`;
}
function d(e) {
  let t = _(e);
  return t === void 0 ? void 0 : t.replaceAll("\x85", "\\u0085").replaceAll("\u2028", "\\u2028").replaceAll("\u2029", "\\u2029");
}
function R() {
  let e = ug();
  if (e === void 0) return rIr();
  return Object.keys(e).some(item => item.toUpperCase() === "CLAUDE_CODE_DISABLE_WORKFLOWS" && Fe(e[item]));
}
function x() {
  return n0e().some(item => item.disableWorkflows === !0 || Object.entries(item.env ?? {}).some(([t, f]) => t.toUpperCase() === "CLAUDE_CODE_DISABLE_WORKFLOWS" && Fe(f)));
}
var I = "Code review did not run: workflows are turned off in this machine's managed settings (`disableWorkflows`, or `CLAUDE_CODE_DISABLE_WORKFLOWS` in its `env` block). Ask this machine's administrator to allow it.",
  M = "Code review did not run: this machine's managed settings could not be read, so whether its administrator turned workflows off is not known. Ask this machine's administrator to fix them.";
function C() {
  if (x()) return I;
  return Gle() ? M : null;
}
function mot(e) {
  if (R()) return "dynamic workflows are disabled for this session (the environment variable `CLAUDE_CODE_DISABLE_WORKFLOWS` was set when Claude Code started).";
  let t = e?.serverAuthoredCarrier === !0;
  if (t && e?.eventSessionOrigin === "review") return C();
  if (Rqn()) return rIr() ? "dynamic workflows are disabled for this session (the environment variable `CLAUDE_CODE_DISABLE_WORKFLOWS`, set after Claude Code started, for example by a settings `env` block)." : "dynamic workflows are disabled for this session (the `disableWorkflows` setting).";
  if (t && e?.eventSessionOrigin === void 0 && c5()) return C();
  if (!xqn()) return "dynamic workflows are disabled for this session (org policy `allow_workflows`).";
  return null;
}
async function lRn({
  script: script,
  args: args,
  telemetrySource: f,
  serverAuthoredCarrier: w = !1,
  eventSessionOrigin: eventSessionOrigin,
  context: p
}) {
  let s = (layer, r) => ({
      ok: !1,
      layer: layer,
      line: C4t(layer, r)
    }),
    S = mot({
      serverAuthoredCarrier: w,
      eventSessionOrigin: eventSessionOrigin
    });
  if (S) return s("policy-gate", S);
  let maxBytes = w ? t2n : DC;
  if (script.length > maxBytes) return s("script-too-large", `workflow script exceeds ${maxBytes} bytes.`);
  if (!Qx(script)) return s("control-chars", "workflow script contains disallowed control characters.");
  let n = Tv(script, {
    maxBytes: maxBytes
  });
  if ("error" in n) return s("meta-parse", `invalid workflow script: ${n.error}`);
  if (dRn(n.scriptBody)) return s("nondeterminism", "workflow scripts must be deterministic: Date.now()/Math.random()/new Date() are unavailable (breaks resume). Stamp results after the workflow returns, or pass timestamps via args.");
  let g = MRe(n.scriptBody);
  if (!g.ok) return s("compile", `workflow script compile failed: ${g.error}`);
  let m = `wf_${y().slice(0, 12)}`,
    taskId = AE("local_workflow"),
    scriptPath = n2n(n.meta.name, m, script, p.storageV5),
    name = pRn(n.meta.name, void 0, !1),
    description = fRn(n.meta.description, void 0, !1);
  i("tengu_workflow_launched", {
    invocation_mode: c(f),
    workflow_source: c(f),
    phase_count: n.meta.phases?.length ?? 0,
    launched_from_subagent: !1,
    has_args: args != null,
    is_resume: !1,
    script_size_chars: script.length
  });
  let o = await new Promise(onSettled => {
    mRn({
      taskId: taskId,
      workflowRunId: m,
      script: script,
      scriptPath: scriptPath,
      args: args,
      meta: n.meta,
      vmScript: g.vmScript,
      toolUseContext: p,
      canUseTool: p.canUseTool ?? lU,
      toolUseId: void 0,
      transcriptDir: k1(m),
      telemetry: {
        source: f,
        name: name,
        description: description,
        scriptIsVerbatimBuiltIn: !1
      },
      isResume: !1,
      onSettled: onSettled,
      suppressCompletionNotification: !0,
      withholdScriptFromSdkEvents: w
    });
  });
  switch (o.status) {
    case "completed":
      {
        let a = {
            status: "completed",
            workflowName: n.meta.name,
            runId: m,
            agentCount: o.agentCount,
            durationMs: o.durationMs,
            failures: o.failures,
            result: o.result
          },
          r = d(a);
        if (r === void 0 || r.length > l) {
          let E = r === void 0 ? "not serializable" : `${r.length} chars exceeds ${l}`,
            failures = o.failures.slice(0, 20).map(item => item.length > 500 ? `${ne(item, 500)}\u2026[truncated]` : item);
          if (o.failures.length > failures.length) failures.push(`\u2026and ${o.failures.length - failures.length} more failures omitted`);
          if (r = d({
            ...a,
            failures: failures
          }), r === void 0 || r.length > l) r = d({
            ...a,
            failures: [`<${o.failures.length} failures omitted: diagnostics never outrank the result payload>`]
          });
          if (r === void 0 || r.length > l) r = d({
            ...a,
            failures: failures,
            result: `<result omitted: ${E}>`
          });
          if (r === void 0 || r.length > l) r = d({
            status: "completed",
            workflowName: ne(String(n.meta.name), 200),
            runId: m,
            agentCount: o.agentCount,
            durationMs: o.durationMs,
            failures: [`<${o.failures.length} failures omitted: fallback exceeded ${l}>`],
            result: `<result omitted: ${E}>`
          }) ?? '{"status":"completed"}';
        }
        return {
          ok: !0,
          line: `remote-workflow: ${r}`,
          workflowName: n.meta.name
        };
      }
    case "failed":
      return s("workflow-failed", `workflow failed after ${o.durationMs}ms (${o.agentCount} agents): ${o.error}`);
    case "killed":
      return s("killed", "workflow was aborted before completion.");
    case "adopted":
    case "unknown":
      return s("unexpected-state", `workflow ended in unexpected state '${o.status}'.`);
  }
}
export { C4t, mot, lRn };