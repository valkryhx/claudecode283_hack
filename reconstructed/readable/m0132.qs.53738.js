/* ==============================================================================
 * m0132.qs   [m0132_0xc24a4bb.js @ 53738]
 * --------------------------------------------------------------------------
 * 作用: (no note)
 * 原文: claudecode283/modules/m0132_0xc24a4bb.js  字符偏移 53738
 * 说明: 由 tools/extract.mjs 抽取，忠实原文，仅格式化；标识符仍为 Bun 压缩名。
 * ============================================================================== */
function qs(e, t) {
  if (t.instructionFiles === void 0) return {
    ...e,
    instructionFiles: void 0
  };
  let o = e.instructionFiles ?? t.instructionFiles,
    r = Qt(e),
    n = r !== Qt(t),
    s = !br(o, t.instructionFiles);
  if (!n && s && o !== void 0) {
    let a = Or(e.blocks, Qe(o));
    return {
      ...e,
      blocks: a,
      instructionFiles: o
    }
  }
  if (!n || o !== void 0 && r === Qe(o)) return {
    ...e,
    instructionFiles: o
  };
  if (s) kc().log("prompt.context: a hook changed the claudeMd text and the instruction files in one step; the text stands and the files read as unknown");
  return {
    ...e,
    instructionFiles: void 0
  }
}
