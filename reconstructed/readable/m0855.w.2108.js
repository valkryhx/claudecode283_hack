/* ==============================================================================
 * m0855.w   [m0855_0xd10e439.js @ 2108]
 * --------------------------------------------------------------------------
 * 作用: (no note)
 * 原文: claudecode283/modules/m0855_0xd10e439.js  字符偏移 2108
 * 说明: 由 tools/extract.mjs 抽取，忠实原文，仅格式化；标识符仍为 Bun 压缩名。
 * ============================================================================== */
async function w(e, t, r, n) {
  let s = it(),
    o = typeof e === "string" ? sq(e, s) : e,
    l = o !== e,
    f = t && !l,
    E = zHe(o);
  if (va() && E === void 0) return {
    message: `${o} is session-scoped and won't reach the remote process. Use low, medium, high, or xhigh instead.`
  };
  let m = iq(o, s, f, n);
  r?.({
    value: o,
    ultracode: !1
  });
  let u = p(E),
    h = await m;
  if (h) return {
    message: `Failed to set effort level: ${h.message}`
  };
  i("tengu_effort_command", {
    effort: typeof o === "number" ? o : c(o),
    is_remote: lr() !== null
  });
  let v = lr() ? void 0 : $F();
  if (v !== void 0 && v !== o) {
    let C = a.CLAUDE_CODE_EFFORT_LEVEL;
    if (E === void 0) return {
      message: `Not applied: CLAUDE_CODE_EFFORT_LEVEL=${C} overrides effort this session, and ${g6(o)} is session-only (nothing saved)`,
      effortUpdate: {
        value: o,
        ultracode: !1
      }
    };
    return {
      message: `CLAUDE_CODE_EFFORT_LEVEL=${C} overrides this session \u2014 clear it and ${g6(o)} takes over`,
      effortUpdate: {
        value: o,
        ultracode: !1
      }
    }
  }
  let L = eMr(o),
    _ = ocn(s),
    x = E !== void 0 && f && !lr() ? _ !== null ? ` (saved, though your organization starts new sessions on ${s} at ${_} effort)` : " (saved as your default for new sessions)" : " (this session only)";
  if (l) return {
    message: `Effort '${e}' exceeds the cap for ${s} set by your settings or organization; set to '${o}' instead${x}: ${L}${u??""}`,
    effortUpdate: {
      value: o,
      ultracode: !1
    }
  };
  return {
    message: `Set effort level to ${g6(o)}${x}: ${L}${u??""}`,
    effortUpdate: {
      value: o,
      ultracode: !1
    }
  }
}
