/* ==========================================================================
 * m0132.qs   [m0132_0xc24a4bb.js @ 53738]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
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
    };
  }
  if (!n || o !== void 0 && r === Qe(o)) return {
    ...e,
    instructionFiles: o
  };
  if (s) kc().log("prompt.context: a hook changed the claudeMd text and the instruction files in one step; the text stands and the files read as unknown");
  return {
    ...e,
    instructionFiles: void 0
  };
}
