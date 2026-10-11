/* ==========================================================================
 * m1460.nl   [m1460_0xd973957.js @ 9580]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
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
    throw m("workflow_save", "write_failed"), new P(`Workflow save failed: ${d.error.code} (${a})`, "workflow save failed");
  }
  return xs(l, a, u);
}
