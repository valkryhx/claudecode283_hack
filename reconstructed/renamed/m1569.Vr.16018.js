/* ==========================================================================
 * m1569.Vr   [m1569_0xdceb889.js @ 16018]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
function Vr(e) {
  return {
    ...e.fact,
    addr: e.addr,
    by: e.by,
    in: e.in,
    status: e.status,
    ...(e.kind === "eval" && {
      value: e.value,
      error: e.error
    })
  };
}
