/* ==============================================================================
 * m0132.Ry   [m0132_0xc24a4bb.js @ 148532]
 * --------------------------------------------------------------------------
 * 作用: (no note)
 * 原文: claudecode283/modules/m0132_0xc24a4bb.js  字符偏移 148532
 * 说明: 由 tools/extract.mjs 抽取，忠实原文，仅格式化；标识符仍为 Bun 压缩名。
 * ============================================================================== */
var Ry = `((pull, close, result) => {
  const stream = {
    next: () => pull(),
    return: () => close(),
    throw: error => close(undefined).then(() => { throw error }),
    [Symbol.asyncIterator]() { return this },
  }
  Object.defineProperty(stream, 'result', {
    get: () => result(),
    enumerable: true,
  })
  return Object.freeze(stream)
})`;
