/* ==========================================================================
 * m0869.Cr   [m0869_0xd12567a.js @ 32535]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
function Cr(e, r, s) {
  if (s?.aborted) return Promise.resolve();
  let g = new AbortController(),
    f = () => g.abort();
  return s?.addEventListener("abort", f, {
    once: !0
  }), Promise.race([e, Q(r, g.signal)]).finally(() => {
    g.abort(), s?.removeEventListener("abort", f);
  });
}
