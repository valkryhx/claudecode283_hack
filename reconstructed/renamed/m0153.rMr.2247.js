/* ==========================================================================
 * m0153.rMr   [m0153_0xc2a414f.js @ 2247]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
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
    return l === "userSettings" || l === "default" ? "user_setting" : "managed_settings";
  }
  return o ? "user_setting" : void 0;
}
