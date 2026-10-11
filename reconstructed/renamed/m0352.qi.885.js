/* ==========================================================================
 * m0352.qi   [m0352_0xc63a7b9.js @ 885]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
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
  let f = [[XJ, n], [JJ, s], [Cde, r], [Fhn, e], [rT, i], [HD, t]],
    o = `<${Au}>`;
  for (let [a, T] of f) if (T) o += `
<${a}>${T}</${a}>`;
  return `${o}${u ?? ""}
</${Au}>${d ?? ""}`;
}
