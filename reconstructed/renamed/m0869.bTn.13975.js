/* ==========================================================================
 * m0869.bTn   [m0869_0xd12567a.js @ 13975]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
function bTn(e) {
  let r = new Set(),
    s = f => f();
  function g() {
    for (let f of r) clearTimeout(f);
    r.clear();
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
            s(f);
          } catch {}
        }, A));
      return r.add(F), F;
    }),
    clearTimeout: bI(f => {
      if (typeof f === "number" || typeof f === "string") {
        let w = typeof f === "number" ? f : +f;
        if (r.has(w)) r.delete(w), clearTimeout(w);
      }
    }),
    bindVMInvoke: f => {
      s = f;
    }
  };
}
