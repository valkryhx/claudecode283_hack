/* ==============================================================================
 * m1460.nl   [m1460_0xd973957.js @ 9580]
 * --------------------------------------------------------------------------
 * 作用: (no note)
 * 原文: claudecode283/modules/m1460_0xd973957.js  字符偏移 9580
 * 说明: 由 tools/extract.mjs 抽取，忠实原文，仅格式化；标识符仍为 Bun 压缩名。
 * ============================================================================== */
async function nl(o, l, a, u) {
  let d = await o.write(Ae.userConfigDir("workflows", [`${l}.js`]), u.script, u.overwrite ? {
    mode: 384,
    publishDiscipline: "atomic"
  } : {
    mode: 384,
    precondition: {
      type: "ifAbsent"
    }
  });
  if (!d.ok) {
    if (!u.overwrite && d.error.code === "AlreadyExists") throw p("workflow_save", "already_exists"), new P(`Dynamic workflow "${l}" already exists at ${a}. ${Be}`, "workflow name collision");
    throw m("workflow_save", "write_failed"), new P(`Workflow save failed: ${d.error.code} (${a})`, "workflow save failed")
  }
  return xs(l, a, u)
}
