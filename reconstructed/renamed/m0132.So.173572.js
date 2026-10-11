/* ==========================================================================
 * m0132.So   [m0132_0xc24a4bb.js @ 173572]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
function So(e, t, o) {
  let r = INt(t),
    n = e.isGeneratorHook(o);
  if (r && !n) return `takes an async generator, async function* ($, e, next) { ... }: ${t} streams, its hook yields the chunks and returns the result`;
  return !r && n ? `takes ($, e, next) => result, not an async generator: only a streaming event named as itself (${YVn.join(", ")}) takes the generator form` : void 0;
}
