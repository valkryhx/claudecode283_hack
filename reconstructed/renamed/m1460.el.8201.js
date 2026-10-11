/* ==========================================================================
 * m1460.el   [m1460_0xd973957.js @ 8201]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
async function el(o, l) {
  if (o === "user") return S7e();
  if (Fo() !== null) throw p("workflow_save", "project_scope_unavailable"), Error("Project-scope workflow saves are unavailable in a session started with --project-config-root");
  let a = L$t(l);
  if (a === null) return So(l, ".claude", "workflows");
  let u = (await Use("workflows", l))[0];
  if (u !== void 0) return u;
  return So(a, ".claude", "workflows");
}
