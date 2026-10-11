/* ==============================================================================
 * m0869._r   [m0869_0xd12567a.js @ 26485]
 * --------------------------------------------------------------------------
 * 作用: (no note)
 * 原文: claudecode283/modules/m0869_0xd12567a.js  字符偏移 26485
 * 说明: 由 tools/extract.mjs 抽取，忠实原文，仅格式化；标识符仍为 Bun 压缩名。
 * ============================================================================== */
async function _r(e, r, {
  entries: s,
  script: g
}) {
  if (g) {
    let w = X3e();
    try {
      await hr(w, {
        recursive: !0,
        mode: 448
      }), await A$(fo(w, g.fileName), g.script, 384)
    } catch (A) {
      if (v(A) !== "EEXIST") t(`Failed to restore a workflow script: ${A}`, {
        level: "warn"
      })
    }
  }
  if (s === void 0) return null;
  let f = new Gt(e, r);
  try {
    if (await f.restoreState() === "complete") return null;
    await f.writeRestored(s)
  } catch (w) {
    return `Could not restore the journal for workflow run ${e}: ${l(w)}`
  }
  return null
}
