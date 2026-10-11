/* ==============================================================================
 * m0132.TLr   [m0132_0xc24a4bb.js @ 177829]
 * --------------------------------------------------------------------------
 * 作用: (no note)
 * 原文: claudecode283/modules/m0132_0xc24a4bb.js  字符偏移 177829
 * 说明: 由 tools/extract.mjs 抽取，忠实原文，仅格式化；标识符仍为 Bun 压缩名。
 * ============================================================================== */
function TLr(e) {
  let t = new Map,
    o = new Map;
  return {
    read(r) {
      let n = t.get(gi(r));
      if (n !== void 0) return n;
      let s = o.get(r.surface) ?? e(WIo(r.surface), r.surface);
      return o.set(r.surface, s), s
    },
    store(r) {
      let n = new Map;
      t.clear();
      for (let {
          surface: s,
          component: i,
          answer: p
        }
        of r) {
        let a = n.get(p) ?? e(p, s);
        n.set(p, a), t.set(gi({
          surface: s,
          component: i
        }), a)
      }
    }
  }
}
