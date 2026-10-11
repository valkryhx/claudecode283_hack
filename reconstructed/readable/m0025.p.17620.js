/* ==============================================================================
 * m0025.p   [m0025_0xbf5baa8.js @ 17620]
 * --------------------------------------------------------------------------
 * 作用: (no note)
 * 原文: claudecode283/modules/m0025_0xbf5baa8.js  字符偏移 17620
 * 说明: 由 tools/extract.mjs 抽取，忠实原文，仅格式化；标识符仍为 Bun 压缩名。
 * ============================================================================== */
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
  })
}
