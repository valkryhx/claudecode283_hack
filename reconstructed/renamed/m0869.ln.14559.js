/* ==========================================================================
 * m0869.ln   [m0869_0xd12567a.js @ 14559]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
function ln(e) {
  Kt.runInContext(`Object.defineProperty(globalThis, ${b(Qn)}, {
      value: Promise.resolve.bind(Promise),
      writable: false, enumerable: false, configurable: false,
    })`, e);
}
