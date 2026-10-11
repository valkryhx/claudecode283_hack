/* ==============================================================================
 * m0132.cs   [m0132_0xc24a4bb.js @ 35831]
 * --------------------------------------------------------------------------
 * 作用: (no note)
 * 原文: claudecode283/modules/m0132_0xc24a4bb.js  字符偏移 35831
 * 说明: 由 tools/extract.mjs 抽取，忠实原文，仅格式化；标识符仍为 Bun 压缩名。
 * ============================================================================== */
function cs(e, t, o) {
  if (e === void 0) return;
  let r = iD(e);
  if (r === void 0) return "a context that is not a list of texts";
  if (r.some((a) => a === "")) return "a context with an empty entry";
  let s = o.filter((a) => a.ref !== void 0 && a.ref === t),
    i = (a) => lt(r, iD(a.context) ?? []);
  return (s.length === 0 ? o.slice(-1) : s).every(i) ? void 0 : "a context without an entry a hook below attached (a hook adds to the context its next gave it; it may not leave an entry out)"
}
