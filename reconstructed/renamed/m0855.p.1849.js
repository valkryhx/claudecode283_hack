/* ==========================================================================
 * m0855.p   [m0855_0xd10e439.js @ 1849]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
function p(e, t = !1) {
  if (!lr()) return null;
  if (!va()) return " (applied locally \u2014 this remote transport can\u2019t change server effort)";
  return lr()?.sendControlRequest({
    subtype: "apply_flag_settings",
    settings: {
      effortLevel: e ?? null,
      ultracode: t
    }
  }).catch(d), null;
}
