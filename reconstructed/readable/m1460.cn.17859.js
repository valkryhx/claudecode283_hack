/* ==============================================================================
 * m1460.cn   [m1460_0xd973957.js @ 17859]
 * --------------------------------------------------------------------------
 * 作用: (no note)
 * 原文: claudecode283/modules/m1460_0xd973957.js  字符偏移 17859
 * 说明: 由 tools/extract.mjs 抽取，忠实原文，仅格式化；标识符仍为 Bun 压缩名。
 * ============================================================================== */
function cn(o) {
  switch (o) {
    case "done":
      return {
        glyph: Z.tick, color: "success"
      };
    case "failed":
      return {
        glyph: Z.cross, color: "error"
      };
    case "skipped":
      return {
        glyph: Z.cross, color: "subtle"
      };
    case "blocked":
      return {
        glyph: Z.cross, color: "permission"
      };
    case "queued":
    case "interrupted":
      return {
        glyph: f6n, color: "subtle"
      };
    case "running":
      return {
        glyph: Fr, color: "subtle"
      }
  }
}
