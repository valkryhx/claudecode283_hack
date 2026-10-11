/* ==============================================================================
 * m0869.H7r   [m0869_0xd12567a.js @ 26286]
 * --------------------------------------------------------------------------
 * 作用: (no note)
 * 原文: claudecode283/modules/m0869_0xd12567a.js  字符偏移 26286
 * 说明: 由 tools/extract.mjs 抽取，忠实原文，仅格式化；标识符仍为 Bun 压缩名。
 * ============================================================================== */
async function H7r(e, r, s, g, f) {
  let w = await vTn(e, r, s, g, f);
  if (w.kind === "refused") return w.message;
  if (w.kind === "ready") return null;
  return w.written ??= _r(e, s, w).finally(() => f.probes.delete(e)), w.written
}
