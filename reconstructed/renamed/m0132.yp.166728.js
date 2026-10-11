/* ==========================================================================
 * m0132.yp   [m0132_0xc24a4bb.js @ 166728]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
function yp(e) {
  let t = {
    ...(e?.columns !== void 0 && {
      columns: e.columns
    }),
    ...(e?.rows !== void 0 && {
      rows: e.rows
    })
  };
  return dp(e) ? {
    requestId: e.requestId,
    key: e.key,
    cells: e.cells,
    ...t
  } : {
    requestId: e?.requestId,
    key: e?.key,
    source: e?.source,
    ...(G(e) && "cells" in e && {
      cells: e.cells
    }),
    ...t
  };
}
