/* ==============================================================================
 * m0132.Xa   [m0132_0xc24a4bb.js @ 159482]
 * --------------------------------------------------------------------------
 * 作用: (no note)
 * 原文: claudecode283/modules/m0132_0xc24a4bb.js  字符偏移 159482
 * 说明: 由 tools/extract.mjs 抽取，忠实原文，仅格式化；标识符仍为 Bun 压缩名。
 * ============================================================================== */
function Xa(e) {
  if (e === void 0) return;
  if (!G(e)) return "takes { agentId, as } or nothing";
  let t = Object.keys(e).filter((i) => i !== "agentId" && i !== "as");
  if (t.length > 0) return `takes { agentId, as } or nothing (not ${t.join(", ")})`;
  let {
    agentId: o
  } = e, r = e.as, n = o === void 0 || typeof o === "string" && o !== "", s = r === void 0 || r === "api";
  if (!n) return `takes agentId, a non-empty string (got ${String(o)})`;
  return s ? void 0 : `takes as "api" or none (got ${String(r)})`
}
