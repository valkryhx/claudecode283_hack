/* ==============================================================================
 * m0869.Sr   [m0869_0xd12567a.js @ 23435]
 * --------------------------------------------------------------------------
 * 作用: (no note)
 * 原文: claudecode283/modules/m0869_0xd12567a.js  字符偏移 23435
 * 说明: 由 tools/extract.mjs 抽取，忠实原文，仅格式化；标识符仍为 Bun 压缩名。
 * ============================================================================== */
function Sr(e) {
  if (!G(e)) return;
  if (e.type === "launched") return {
    type: "launched"
  };
  let {
    key: r,
    agentId: s
  } = e;
  if (typeof r !== "string" || !br.test(r) || typeof s !== "string" || !z_e(s)) return;
  switch (e.type) {
    case "started": {
      let {
        remoteSessionId: g
      } = e;
      if (g === void 0) return {
        type: "started",
        key: r,
        agentId: s
      };
      return typeof g === "string" && z_e(g) ? {
        type: "started",
        key: r,
        agentId: s,
        remoteSessionId: g
      } : void 0
    }
    case "result":
      return "result" in e ? {
        type: "result",
        key: r,
        agentId: s,
        result: e.result,
        ...e.foreignArtifactContent === !0 && {
          foreignArtifactContent: !0
        }
      } : void 0;
    case "failed":
      return {
        type: "failed", key: r, agentId: s
      };
    default:
      return
  }
}
