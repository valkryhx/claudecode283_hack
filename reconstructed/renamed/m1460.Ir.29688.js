/* ==========================================================================
 * m1460.Ir   [m1460_0xd973957.js @ 29688]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
function Ir(o, l) {
  let a = [];
  for (let u of o.split(`
`)) {
    if (u === "") {
      a.push("");
      continue;
    }
    for (let d of GUe(u, Math.max(1, l))) a.push(d);
  }
  return a;
}
