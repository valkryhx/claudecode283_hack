/* ==========================================================================
 * m1460.xs   [m1460_0xd973957.js @ 9218]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
async function xs(o, l, a) {
  ATn();
  let [{
    clearCommandMemoizationCaches: u
  }, {
    resetSentSkillNames: d
  }] = await Promise.all([import("B:/~BUN/root/chunk-41aze6gz.js"), import("B:/~BUN/root/chunk-h0jw9wg1.js")]);
  return u(), d(), _("workflow_save"), i("tengu_workflow_saved", {
    scope: c(a.scope),
    overwrite: a.overwrite,
    script_size_chars: a.script.length
  }), {
    name: o,
    path: l,
    scope: a.scope
  };
}
