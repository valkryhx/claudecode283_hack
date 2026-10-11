/* ==============================================================================
 * m0153.rMr   [m0153_0xc2a414f.js @ 2247]
 * --------------------------------------------------------------------------
 * 作用: (no note)
 * 原文: claudecode283/modules/m0153_0xc2a414f.js  字符偏移 2247
 * 说明: 由 tools/extract.mjs 抽取，忠实原文，仅格式化；标识符仍为 Bun 压缩名。
 * ============================================================================== */
function rMr() {
  let e = acn(),
    o = e && !a.CLAUDE_CODE_DISABLE_WORKFLOWS && Mo("disableWorkflows", !1).source === "userSettings";
  if (e && !o) return "managed_settings";
  if (!ccn()) return "org_policy";
  let {
    available: t,
    defaultOn: r
  } = i();
  if (!t) return "unavailable";
  if (!(HI()?.settings.enableWorkflows ?? r)) {
    let l = Mo("enableWorkflows", r).source;
    return l === "userSettings" || l === "default" ? "user_setting" : "managed_settings"
  }
  return o ? "user_setting" : void 0
}
