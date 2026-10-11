/* ==============================================================================
 * m0132.u1   [m0132_0xc24a4bb.js @ 125981]
 * --------------------------------------------------------------------------
 * 作用: (no note)
 * 原文: claudecode283/modules/m0132_0xc24a4bb.js  字符偏移 125981
 * 说明: 由 tools/extract.mjs 抽取，忠实原文，仅格式化；标识符仍为 Bun 压缩名。
 * ============================================================================== */
function u1(e) {
  let t = Promise.withResolvers();
  t.promise.catch(() => {});
  let o = !1;
  async function* r() {
    let n = typeof e === "function" ? e() : e;
    try {
      let s = yield* n;
      return o = !0, t.resolve(s), s
    } catch (s) {
      throw o = !0, t.reject(s), s
    } finally {
      if (!o) t.reject(new De("the stream was closed before its result"))
    }
  }
  return Object.defineProperty(r(), "result", {
    value: t.promise,
    enumerable: !0
  })
}
