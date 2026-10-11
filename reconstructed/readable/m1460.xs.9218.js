/* ==============================================================================
 * m1460.xs   [m1460_0xd973957.js @ 9218]
 * --------------------------------------------------------------------------
 * 作用: (no note)
 * 原文: claudecode283/modules/m1460_0xd973957.js  字符偏移 9218
 * 说明: 由 tools/extract.mjs 抽取，忠实原文，仅格式化；标识符仍为 Bun 压缩名。
 * ============================================================================== */
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
  }
}
