/* ==============================================================================
 * m0132.So   [m0132_0xc24a4bb.js @ 173572]
 * --------------------------------------------------------------------------
 * 作用: (no note)
 * 原文: claudecode283/modules/m0132_0xc24a4bb.js  字符偏移 173572
 * 说明: 由 tools/extract.mjs 抽取，忠实原文，仅格式化；标识符仍为 Bun 压缩名。
 * ============================================================================== */
function So(e, t, o) {
  let r = INt(t),
    n = e.isGeneratorHook(o);
  if (r && !n) return `takes an async generator, async function* ($, e, next) { ... }: ${t} streams, its hook yields the chunks and returns the result`;
  return !r && n ? `takes ($, e, next) => result, not an async generator: only a streaming event named as itself (${YVn.join(", ")}) takes the generator form` : void 0
}
