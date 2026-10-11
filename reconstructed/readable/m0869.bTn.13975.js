/* ==============================================================================
 * m0869.bTn   [m0869_0xd12567a.js @ 13975]
 * --------------------------------------------------------------------------
 * 作用: (no note)
 * 原文: claudecode283/modules/m0869_0xd12567a.js  字符偏移 13975
 * 说明: 由 tools/extract.mjs 抽取，忠实原文，仅格式化；标识符仍为 Bun 压缩名。
 * ============================================================================== */
function bTn(e) {
  let r = new Set,
    s = (f) => f();

  function g() {
    for (let f of r) clearTimeout(f);
    r.clear()
  }
  return e?.addEventListener("abort", g, {
    once: !0
  }), {
    clear: g,
    setTimeout: bI((f, w) => {
      if (e?.aborted) return 0;
      let A = typeof w === "number" ? w : typeof w === "string" ? +w || 0 : 0,
        F = Number(setTimeout(() => {
          try {
            s(f)
          } catch {}
        }, A));
      return r.add(F), F
    }),
    clearTimeout: bI((f) => {
      if (typeof f === "number" || typeof f === "string") {
        let w = typeof f === "number" ? f : +f;
        if (r.has(w)) r.delete(w), clearTimeout(w)
      }
    }),
    bindVMInvoke: (f) => {
      s = f
    }
  }
}
