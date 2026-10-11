/* ==========================================================================
 * m0855.O   [m0855_0xd10e439.js @ 3860]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
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
      message: `${e ? "Cleared effort from settings, but" : "Effort set to auto for this session, but"} CLAUDE_CODE_EFFORT_LEVEL=${f} still controls this session`,
      effortUpdate: {
        value: void 0,
        ultracode: !1
      }
    };
  }
  return {
    message: `Effort level set to auto${o}${n ?? ""}`,
    effortUpdate: {
      value: void 0,
      ultracode: !1
    }
  };
}
