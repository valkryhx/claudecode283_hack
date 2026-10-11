/* ==========================================================================
 * m1569.Lr   [m1569_0xdceb889.js @ 15047]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
function Lr(e) {
  if (Ge(e)) {
    let r = e.$atleast;
    if (!Number.isSafeInteger(r) || r < 0) throw new P("atleast(N, pattern): N must be a non-negative integer", "world: bad threshold count");
    return {
      $atleast: r,
      of: Ce(e.of)
    };
  }
  return Ce(e);
}
