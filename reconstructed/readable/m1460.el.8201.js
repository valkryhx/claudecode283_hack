/* ==============================================================================
 * m1460.el   [m1460_0xd973957.js @ 8201]
 * --------------------------------------------------------------------------
 * 作用: (no note)
 * 原文: claudecode283/modules/m1460_0xd973957.js  字符偏移 8201
 * 说明: 由 tools/extract.mjs 抽取，忠实原文，仅格式化；标识符仍为 Bun 压缩名。
 * ============================================================================== */
async function el(o, l) {
  if (o === "user") return S7e();
  if (Fo() !== null) throw p("workflow_save", "project_scope_unavailable"), Error("Project-scope workflow saves are unavailable in a session started with --project-config-root");
  let a = L$t(l);
  if (a === null) return So(l, ".claude", "workflows");
  let u = (await Use("workflows", l))[0];
  if (u !== void 0) return u;
  return So(a, ".claude", "workflows")
}
