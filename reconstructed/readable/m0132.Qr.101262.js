/* ==============================================================================
 * m0132.Qr   [m0132_0xc24a4bb.js @ 101262]
 * --------------------------------------------------------------------------
 * 作用: (no note)
 * 原文: claudecode283/modules/m0132_0xc24a4bb.js  字符偏移 101262
 * 说明: 由 tools/extract.mjs 抽取，忠实原文，仅格式化；标识符仍为 Bun 压缩名。
 * ============================================================================== */
function Qr(e) {
  let t = $e[e],
    o = fe.every((n) => t.includes(n)),
    r = t.length === 1;
  return o ? "every surface" : r ? `the ${t[0]} surface only` : `the ${t.slice(0,-1).join(", ")} and ${t.at(-1)} surfaces only`
}
