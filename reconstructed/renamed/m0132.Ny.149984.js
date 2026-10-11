/* ==========================================================================
 * m0132.Ny   [m0132_0xc24a4bb.js @ 149984]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
function Ny({
  engine: e,
  core: t,
  pluginName: o,
  callInterface: r,
  invoke: n,
  wrapMethod: s
}) {
  let i = e;
  return {
    engine: e,
    slots: i,
    identity: new Set(Object.keys(i)),
    local: t,
    own: new Map(),
    isFinalized: !1,
    pluginName: o,
    callInterface: r,
    invoke: n,
    wrapMethod: s
  };
}
