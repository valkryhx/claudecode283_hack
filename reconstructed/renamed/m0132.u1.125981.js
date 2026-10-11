/* ==========================================================================
 * m0132.u1   [m0132_0xc24a4bb.js @ 125981]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
function u1(e) {
  let t = Promise.withResolvers();
  t.promise.catch(() => {});
  let o = !1;
  async function* r() {
    let n = typeof e === "function" ? e() : e;
    try {
      let s = yield* n;
      return o = !0, t.resolve(s), s;
    } catch (s) {
      throw o = !0, t.reject(s), s;
    } finally {
      if (!o) t.reject(new De("the stream was closed before its result"));
    }
  }
  return Object.defineProperty(r(), "result", {
    value: t.promise,
    enumerable: !0
  });
}
