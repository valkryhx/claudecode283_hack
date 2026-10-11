/* ==============================================================================
 * m1569.Ke   [m1569_0xdceb889.js @ 49697]
 * --------------------------------------------------------------------------
 * 作用: (no note)
 * 原文: claudecode283/modules/m1569_0xdceb889.js  字符偏移 49697
 * 说明: 由 tools/extract.mjs 抽取，忠实原文，仅格式化；标识符仍为 Bun 压缩名。
 * ============================================================================== */
function Ke(e) {
  if (typeof e.runId !== "string") return;
  let r = e.put !== void 0 || typeof e.retract === "number" || e.read !== void 0;
  return {
    runId: e.runId,
    ...e.put !== void 0 && {
      put: e.put
    },
    ...typeof e.retract === "number" && {
      retract: e.retract
    },
    ...e.read !== void 0 && {
      read: e.read
    },
    ...!r && typeof e.script === "string" && e.script !== "" && {
      script: e.script
    }
  }
}
