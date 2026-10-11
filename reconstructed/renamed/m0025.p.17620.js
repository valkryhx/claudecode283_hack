/* ==========================================================================
 * m0025.p   [m0025_0xbf5baa8.js @ 17620]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
function p() {
  return G ??= new S({
    platform: "win32",
    env: process.env,
    readProcVersionSync: U5n,
    readProcVersion: () => R("/proc/version", {
      encoding: "utf8"
    }),
    osRelease: k,
    readOsRelease: () => R("/etc/os-release", "utf8")
  });
}
