/* ==========================================================================
 * m0132.Va   [m0132_0xc24a4bb.js @ 159357]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
function Va(e) {
  let t = G(e) ? e : {},
    {
      agentId: o
    } = t,
    r = typeof o === "string",
    n = t.as === "api";
  return {
    ...(r && {
      agentId: o
    }),
    ...(n && {
      as: "api"
    })
  };
}
