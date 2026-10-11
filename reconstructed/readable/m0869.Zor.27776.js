/* ==============================================================================
 * m0869.Zor   [m0869_0xd12567a.js @ 27776]
 * --------------------------------------------------------------------------
 * 作用: (no note)
 * 原文: claudecode283/modules/m0869_0xd12567a.js  字符偏移 27776
 * 说明: 由 tools/extract.mjs 抽取，忠实原文，仅格式化；标识符仍为 Bun 压缩名。
 * ============================================================================== */
async function Zor(e, r) {
  let s = e.intakeClone(r);
  if (typeof s === "string") {
    let g = await e.resolveWorkflow(s, oe());
    if (!g) {
      let w = (await e.getAllWorkflows(oe())).map((A) => A.name).join(", ");
      throw Error(`workflow('${s}'): no workflow with that name. Available: ${w||"(none)"}`)
    }
    let f = Fy(g.script);
    if ("error" in f) throw Error(`workflow('${s}'): ${f.error}`);
    return {
      childName: g.name,
      scriptBody: f.scriptBody
    }
  }
  if (s && typeof s === "object" && "scriptPath" in s && typeof s.scriptPath === "string") {
    if (OWe()) throw Error("workflow({scriptPath}): this session restricts workflows to " + "named bundled workflows (CLAUDE_WORKFLOW_NAME_ONLY is set) \u2014 " + "nest with workflow('<name>') instead.");
    let g = await e.loadScriptPath(s.scriptPath);
    if ("error" in g) throw Error(`workflow({scriptPath: '${s.scriptPath}'}): ${g.error}`);
    let f = Fy(g.script);
    if ("error" in f) throw Error(`workflow({scriptPath: '${s.scriptPath}'}): ${f.error}`);
    return {
      childName: f.meta.name,
      scriptBody: f.scriptBody,
      scriptPath: s.scriptPath
    }
  }
  throw TypeError("workflow() expects a workflow name (string) or {scriptPath: string}")
}
