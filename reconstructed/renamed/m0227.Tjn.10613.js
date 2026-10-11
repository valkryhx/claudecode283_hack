/* ==========================================================================
 * m0227.Tjn   [m0227_0xc482590.js @ 10613]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
function Tjn(e, n) {
  for (let r = Math.max(0, n); r < e.length; r++) {
    let s = e[r];
    if (s.type === "attachment" && s.attachment?.type === "poll_events") return !0;
  }
  return !1;
}
