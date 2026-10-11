/* ==========================================================================
 * m0132.ds   [m0132_0xc24a4bb.js @ 38093]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
function ds(e) {
  switch (e.type) {
    case "Managed":
      return "managed";
    case "User":
      return "user";
    case "Project":
      return "project";
    case "Local":
      return "local";
    case "AutoMem":
    case "AutoMemPinned":
      return "memory";
  }
}
