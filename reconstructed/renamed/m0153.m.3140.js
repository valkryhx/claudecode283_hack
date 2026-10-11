/* ==========================================================================
 * m0153.m   [m0153_0xc2a414f.js @ 3140]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
function m() {
  if (a.CLAUDE_CODE_WORKFLOWS === !0) {
    let o = x("tengu_workflows_enabled", !0);
    return {
      available: o,
      defaultOn: o
    };
  }
  if (a.CLAUDE_CODE_WORKFLOWS === !1) return {
    available: !1,
    defaultOn: !1
  };
  if (!x("tengu_workflows_enabled", !0)) return {
    available: !1,
    defaultOn: !1
  };
  return {
    available: !0,
    defaultOn: nr() !== "pro"
  };
}
