/* ==============================================================================
 * m0132.lr   [m0132_0xc24a4bb.js @ 44046]
 * --------------------------------------------------------------------------
 * 作用: (no note)
 * 原文: claudecode283/modules/m0132_0xc24a4bb.js  字符偏移 44046
 * 说明: 由 tools/extract.mjs 抽取，忠实原文，仅格式化；标识符仍为 Bun 压缩名。
 * ============================================================================== */
function lr(e) {
  if (!G(e)) return "an updatedPermissions entry that is not an object";
  if (!(typeof e.destination === "string" && ["userSettings", "projectSettings", "localSettings", "session", "cliArg"].includes(e.destination))) return "an updatedPermissions entry with an unknown destination";
  switch (e.type) {
    case "addRules":
    case "replaceRules":
    case "removeRules":
      return (e.behavior === "allow" || e.behavior === "deny" || e.behavior === "ask") && Array.isArray(e.rules) && e.rules.every((r) => G(r) && typeof r.toolName === "string" && (r.ruleContent === void 0 || typeof r.ruleContent === "string")) ? void 0 : `an updatedPermissions ${e.type} without rules and a behavior`;
    case "setMode":
      return [...UN, BN].includes(e.mode) ? void 0 : "an updatedPermissions setMode with an unknown mode";
    case "addDirectories":
    case "removeDirectories":
      return vNt(e.directories) ? void 0 : `an updatedPermissions ${e.type} without directories`;
    default:
      return "an updatedPermissions entry of an unknown type"
  }
}
