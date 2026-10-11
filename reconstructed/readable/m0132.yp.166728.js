/* ==============================================================================
 * m0132.yp   [m0132_0xc24a4bb.js @ 166728]
 * --------------------------------------------------------------------------
 * 作用: (no note)
 * 原文: claudecode283/modules/m0132_0xc24a4bb.js  字符偏移 166728
 * 说明: 由 tools/extract.mjs 抽取，忠实原文，仅格式化；标识符仍为 Bun 压缩名。
 * ============================================================================== */
function yp(e) {
  let t = {
    ...e?.columns !== void 0 && {
      columns: e.columns
    },
    ...e?.rows !== void 0 && {
      rows: e.rows
    }
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
    ...G(e) && "cells" in e && {
      cells: e.cells
    },
    ...t
  }
}
