/* ==============================================================================
 * m0227.Fee   [m0227_0xc482590.js @ 12518]
 * --------------------------------------------------------------------------
 * 作用: (no note)
 * 原文: claudecode283/modules/m0227_0xc482590.js  字符偏移 12518
 * 说明: 由 tools/extract.mjs 抽取，忠实原文，仅格式化；标识符仍为 Bun 压缩名。
 * ============================================================================== */
function Fee(e, n) {
  let r = !1;
  for (let s of e) {
    if (s.pollEvent === void 0) continue;
    r = !0, s.pollEvent.settleDropped?.(new P(`poll event discarded undelivered: ${n}`, "poll event discarded undelivered"))
  }
  if (r) m("poll_event_delivery", "discarded")
}
