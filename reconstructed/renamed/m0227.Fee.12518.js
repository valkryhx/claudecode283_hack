/* ==========================================================================
 * m0227.Fee   [m0227_0xc482590.js @ 12518]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
function Fee(e, n) {
  let r = !1;
  for (let s of e) {
    if (s.pollEvent === void 0) continue;
    r = !0, s.pollEvent.settleDropped?.(new P(`poll event discarded undelivered: ${n}`, "poll event discarded undelivered"));
  }
  if (r) m("poll_event_delivery", "discarded");
}
