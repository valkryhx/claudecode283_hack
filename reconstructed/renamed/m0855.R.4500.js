/* ==========================================================================
 * m0855.R   [m0855_0xd10e439.js @ 4500]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
function R(e) {
  let t = it();
  if (!fx()) return {
    message: `Ultracode needs dynamic workflows enabled (see /config). Valid options are: ${g(t)}`
  };
  if (_he(t) && !jHe("xhigh", t)) return {
    message: `Ultracode runs at xhigh effort, which is above the effort cap for ${t} set by your settings or organization. Valid options are: ${g(t)}`
  };
  if (!fx(t)) return {
    message: `Ultracode runs at xhigh effort, which ${t} doesn't support \u2014 switch to an xhigh-capable model (${W2n}). Valid options are: ${g(t)}`
  };
  e?.({
    value: "xhigh",
    ultracode: !0
  });
  let r = p("xhigh", !0);
  i("tengu_effort_command", {
    effort: y("ultracode"),
    is_remote: lr() !== null
  });
  let n = lr() ? void 0 : $F();
  if (n !== void 0 && n !== "xhigh") return {
    message: `CLAUDE_CODE_EFFORT_LEVEL=${a.CLAUDE_CODE_EFFORT_LEVEL} overrides effort this session \u2014 clear it and ultracode takes over`,
    effortUpdate: {
      value: "xhigh",
      ultracode: !0
    }
  };
  return {
    message: `Set effort level to ultracode (this session only): xhigh + dynamic workflow orchestration${r ?? ""}`,
    effortUpdate: {
      value: "xhigh",
      ultracode: !0
    }
  };
}
