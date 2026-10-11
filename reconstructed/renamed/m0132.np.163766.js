/* ==========================================================================
 * m0132.np   [m0132_0xc24a4bb.js @ 163766]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
var np = (e, t) => ({
  tool: op,
  prompt: t,
  description: e.description ?? t.split(/\s+/).slice(0, rp).join(" "),
  run_in_background: !0,
  ...(e.model !== void 0 && {
    model: e.model
  }),
  ...(e.subagentType !== void 0 && {
    subagent_type: e.subagentType
  }),
  ...(e.name !== void 0 && {
    name: e.name
  }),
  ...(e.cwd !== void 0 && {
    cwd: e.cwd
  })
});
