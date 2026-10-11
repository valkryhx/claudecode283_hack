/* ==========================================================================
 * m0869.tsr  ->  childWorkflowRejectStub   [m0869_0xd12567a.js @ 29905]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
function childWorkflowRejectStub() {
  return Promise.reject(Error("workflow() cannot be called from within a child workflow \u2014 nesting is limited to one level. Inline the inner script or call its agents directly."));
}
