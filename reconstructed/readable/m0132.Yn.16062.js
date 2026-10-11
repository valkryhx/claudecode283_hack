/* ==============================================================================
 * m0132.Yn   [m0132_0xc24a4bb.js @ 16062]
 * --------------------------------------------------------------------------
 * 作用: (no note)
 * 原文: claudecode283/modules/m0132_0xc24a4bb.js  字符偏移 16062
 * 说明: 由 tools/extract.mjs 抽取，忠实原文，仅格式化；标识符仍为 Bun 压缩名。
 * ============================================================================== */
function Yn(e) {
  let t;
  try {
    t = e.length
  } catch {
    throw Error("unable to read array length across the workflow VM boundary")
  }
  if (typeof t !== "number" || !Number.isSafeInteger(t)) throw Gn("array length is not a safe integer across the workflow VM boundary");
  if (t > Sx) throw Gn(`array length ${t} exceeds the maximum of ${Sx} supported across the workflow VM boundary`);
  return t
}
