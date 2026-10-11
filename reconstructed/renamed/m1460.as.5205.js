/* ==========================================================================
 * m1460.as   [m1460_0xd973957.js @ 5205]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
function as(o, l) {
  let a = o.trimEnd(),
    u = a.length > l ? re(a, l) : a;
  return {
    head: u,
    lineCount: Gt(a, `
`) + 1,
    truncatedChars: a.length - u.length
  };
}
