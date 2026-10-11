/* ==========================================================================
 * m1569.Zt   [m1569_0xdceb889.js @ 56261]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
Zt = f(() => Qe({
  script: o().max(Nb).refine(hI, Xt).optional().describe("Self-contained workflow script. Must begin with `export const meta = { name, description, phases }` (pure literal, no computed values) followed by the script body using agent()/parallel()/pipeline()/phase()." + (he()?.SCRIPT_DESCRIPTION_V2 ?? "")),
  name: o().refine(e => cH(e) === e, "contains control or invisible format characters").optional().describe("Name of a predefined workflow (built-in or from .claude/workflows/). Resolves to a self-contained script."),
  description: o().optional().describe("Ignored \u2014 set the workflow description in the script's `meta` block."),
  title: o().optional().describe("Ignored \u2014 set the workflow title in the script's `meta` block."),
  args: ae().optional().describe("Optional input value exposed to the script as the global `args`, verbatim. Pass arrays/objects as actual JSON values, NOT as a " + "JSON-encoded string \u2014 a stringified list breaks `args.filter`/" + "`args.map` in the script. Use for parameterized named workflows (e.g. a research question)."),
  scriptPath: o().refine(e => cH(e) === e, "contains control or invisible format characters").optional().describe("Path to a workflow script file on disk. Every Workflow invocation persists its script under the session directory and returns the path in the tool result. To iterate, edit that file with Write/Edit and re-invoke Workflow with the same `scriptPath` instead of re-sending the full script. Takes precedence over `script` and `name`."),
  resumeFromRunId: o().regex(/^wf_[a-z0-9-]{6,}$/).optional().describe(`Run ID of a prior Workflow invocation to resume from. Completed agent() calls with unchanged (prompt, opts) return their cached results instantly; only edited or new calls re-run. Same-session only. Stop the prior run first (${og}) before resuming.`),
  ...(he()?.runOpFields() ?? {}),
  ...!1
}).refine(e => e.script || e.name || e.scriptPath || e.runId, {
  message: "Must provide script, name, scriptPath, or runId"
}))
