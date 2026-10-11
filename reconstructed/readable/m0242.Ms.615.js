/* ==============================================================================
 * m0242.Ms   [m0242_0xc49e8d9.js @ 615]
 * --------------------------------------------------------------------------
 * 作用: 并发信号量：limit + 等待队列，acquire/release 包住异步函数。整个模块仅此一物。
 * 标识: i=limit  s=被包函数  e=在跑数  n=等待队列  o=acquire  t=release
 * 原文: claudecode283/modules/m0242_0xc49e8d9.js  字符偏移 615
 * 说明: 由 tools/extract.mjs 抽取，忠实原文，仅格式化；标识符仍为 Bun 压缩名。
 * ============================================================================== */
function Ms(i, s) {
  let e = 0,
    n = [];

  function o() {
    if (e < i) return e++, Promise.resolve();
    return new Promise((r) => n.push(r))
  }

  function t() {
    let r = n.shift();
    if (r) r();
    else e--
  }
  return async (...r) => {
    await o();
    try {
      return await s(...r)
    } finally {
      t()
    }
  }
}
