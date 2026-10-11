/* ==============================================================================
 * m0132.xLr   [m0132_0xc24a4bb.js @ 183323]
 * --------------------------------------------------------------------------
 * 作用: (no note)
 * 原文: claudecode283/modules/m0132_0xc24a4bb.js  字符偏移 183323
 * 说明: 由 tools/extract.mjs 抽取，忠实原文，仅格式化；标识符仍为 Bun 压缩名。
 * ============================================================================== */
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
    loaded: (s) => JIo({
      args: e,
      context: n.context,
      intoEnvironment: n.intoEnvironment,
      stamped: s
    })
  })
}
