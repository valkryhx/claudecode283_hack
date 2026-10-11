/* ==========================================================================
 * m0132.xLr   [m0132_0xc24a4bb.js @ 183323]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
function xLr(e, t, o = {}) {
  let r = bo(e.modulePath);
  if (r) return r(e, t, o);
  let n = uLr(e.pluginRoot);
  return RLr({
    bare: n,
    args: e,
    host: t,
    bounds: o,
    isInstallingGlobals: !0,
    loaded: s => JIo({
      args: e,
      context: n.context,
      intoEnvironment: n.intoEnvironment,
      stamped: s
    })
  });
}
