/* ==========================================================================
 * m0868.T   [m0868_0xd1234ad.js @ 4252]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
async function T(o, s) {
  try {
    return await Use("workflows", o);
  } catch (n) {
    if (as(n)) return t(`loadWorkflowsDir: project-dir walk failed: ${n.code}`, {
      level: "error"
    }), s.walkFailed = !0, [];
    throw n;
  }
}
