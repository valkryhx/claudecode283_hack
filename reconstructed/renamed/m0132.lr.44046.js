/* ==========================================================================
 * m0132.lr   [m0132_0xc24a4bb.js @ 44046]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
function lr(e) {
  if (!G(e)) return "an updatedPermissions entry that is not an object";
  if (!(typeof e.destination === "string" && ["userSettings", "projectSettings", "localSettings", "session", "cliArg"].includes(e.destination))) return "an updatedPermissions entry with an unknown destination";
  switch (e.type) {
    case "addRules":
    case "replaceRules":
    case "removeRules":
      return (e.behavior === "allow" || e.behavior === "deny" || e.behavior === "ask") && Array.isArray(e.rules) && e.rules.every(r => G(r) && typeof r.toolName === "string" && (r.ruleContent === void 0 || typeof r.ruleContent === "string")) ? void 0 : `an updatedPermissions ${e.type} without rules and a behavior`;
    case "setMode":
      return [...UN, BN].includes(e.mode) ? void 0 : "an updatedPermissions setMode with an unknown mode";
    case "addDirectories":
    case "removeDirectories":
      return vNt(e.directories) ? void 0 : `an updatedPermissions ${e.type} without directories`;
    default:
      return "an updatedPermissions entry of an unknown type";
  }
}
