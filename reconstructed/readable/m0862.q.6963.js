/* ==============================================================================
 * m0862.q   [m0862_0xd11f1fb.js @ 6963]
 * --------------------------------------------------------------------------
 * 作用: (no note)
 * 原文: claudecode283/modules/m0862_0xd11f1fb.js  字符偏移 6963
 * 说明: 由 tools/extract.mjs 抽取，忠实原文，仅格式化；标识符仍为 Bun 压缩名。
 * ============================================================================== */
function q(e) {
  let n;
  if (e.key.type === "Identifier") n = e.key.name;
  else if (e.key.type === "Literal") n = String(e.key.value);
  else throw Error(`unsupported key type in meta: ${e.key.type}`);
  if (y.has(n)) throw Error(`reserved key name not allowed in meta: ${n}`);
  return n
}
