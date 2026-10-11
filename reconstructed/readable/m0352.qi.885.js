/* ==============================================================================
 * m0352.qi   [m0352_0xc63a7b9.js @ 885]
 * --------------------------------------------------------------------------
 * 作用: (no note)
 * 原文: claudecode283/modules/m0352_0xc63a7b9.js  字符偏移 885
 * 说明: 由 tools/extract.mjs 抽取，忠实原文，仅格式化；标识符仍为 Bun 压缩名。
 * ============================================================================== */
function qi({
  taskId: n,
  toolUseId: s,
  taskType: r,
  outputFile: e,
  status: i,
  summary: t,
  body: u,
  trailing: d
}) {
  let f = [
      [XJ, n],
      [JJ, s],
      [Cde, r],
      [Fhn, e],
      [rT, i],
      [HD, t]
    ],
    o = `<${Au}>`;
  for (let [a, T] of f)
    if (T) o += `
<${a}>${T}</${a}>`;
  return `${o}${u??""}
</${Au}>${d??""}`
}
