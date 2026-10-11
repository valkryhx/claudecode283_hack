/* ==========================================================================
 * m0132.Ba   [m0132_0xc24a4bb.js @ 157123]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
function Ba(e) {
  switch (e.reason) {
    case "api-error":
      return e.status !== null ? `the request failed (HTTP ${e.status}, ${e.error})` : `the request failed (${e.error})`;
    case "empty-reply":
      return "the model answered with no text";
    case "aborted":
      return "the request was aborted";
  }
}
