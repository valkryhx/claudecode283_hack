/* ==========================================================================
 * m0025.U5n   [m0025_0xbf5baa8.js @ 15124]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
function U5n() {
  try {
    return ce().readFileSync("/proc/version", {
      encoding: "utf8"
    }).toLowerCase();
  } catch {
    return;
  }
}
