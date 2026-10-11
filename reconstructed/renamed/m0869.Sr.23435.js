/* ==========================================================================
 * m0869.Sr   [m0869_0xd12567a.js @ 23435]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
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
    case "started":
      {
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
        } : void 0;
      }
    case "result":
      return "result" in e ? {
        type: "result",
        key: r,
        agentId: s,
        result: e.result,
        ...(e.foreignArtifactContent === !0 && {
          foreignArtifactContent: !0
        })
      } : void 0;
    case "failed":
      return {
        type: "failed",
        key: r,
        agentId: s
      };
    default:
      return;
  }
}
