/* ==============================================================================
 * m0132.Yy   [m0132_0xc24a4bb.js @ 153415]
 * --------------------------------------------------------------------------
 * 作用: (no note)
 * 原文: claudecode283/modules/m0132_0xc24a4bb.js  字符偏移 153415
 * 说明: 由 tools/extract.mjs 抽取，忠实原文，仅格式化；标识符仍为 Bun 压缩名。
 * ============================================================================== */
function Yy(e) {
  let t = Ny(e);
  return {
    get isFinalized() {
      return t.isFinalized
    },
    wrap: Pa(t),
    finalize: Ca(t),
    call: (o, r, n) => {
      let s = t.own.get(o);
      if (!s) return Promise.reject(new De(`${t.pluginName} provides no interface named ${o}`));
      let i = s[r];
      return typeof i === "function" ? t.invoke(i, n, s) : Promise.reject(new De(`$.${o} (${t.pluginName}) has no method ${r}`))
    }
  }
}
