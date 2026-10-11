/* ==============================================================================
 * m0855.O   [m0855_0xd10e439.js @ 3860]
 * --------------------------------------------------------------------------
 * 作用: (no note)
 * 原文: claudecode283/modules/m0855_0xd10e439.js  字符偏移 3860
 * 说明: 由 tools/extract.mjs 抽取，忠实原文，仅格式化；标识符仍为 Bun 压缩名。
 * ============================================================================== */
async function O(e, t, r) {
  t?.({
    value: void 0,
    ultracode: !1
  });
  let n = p(void 0),
    s = await iq(void 0, it(), e, r);
  if (s) return {
    message: `Failed to set effort level: ${s.message}`
  };
  i("tengu_effort_command", {
    effort: y("auto"),
    is_remote: lr() !== null
  });
  let o = e ? "" : " (this session only)",
    l = lr() ? void 0 : $F();
  if (l !== void 0 && l !== null) {
    let f = a.CLAUDE_CODE_EFFORT_LEVEL;
    return {
      message: `${e?"Cleared effort from settings, but":"Effort set to auto for this session, but"} CLAUDE_CODE_EFFORT_LEVEL=${f} still controls this session`,
      effortUpdate: {
        value: void 0,
        ultracode: !1
      }
    }
  }
  return {
    message: `Effort level set to auto${o}${n??""}`,
    effortUpdate: {
      value: void 0,
      ultracode: !1
    }
  }
}
