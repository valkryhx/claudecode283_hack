/* ==============================================================================
 * m0132.Ss   [m0132_0xc24a4bb.js @ 41402]
 * --------------------------------------------------------------------------
 * 作用: (no note)
 * 原文: claudecode283/modules/m0132_0xc24a4bb.js  字符偏移 41402
 * 说明: 由 tools/extract.mjs 抽取，忠实原文，仅格式化；标识符仍为 Bun 压缩名。
 * ============================================================================== */
function Ss(e, t, o) {
  if (e !== void 0 && !iD(e)) return "a context that is not a list of texts";
  let r = e === void 0 ? [] : iD(e) ?? [];
  if (r.some((f) => f === "")) return "a context with an empty entry";
  let s = $n(t),
    i = o.filter((f) => $n(f.result) === s),
    p = (f) => lt(r, iD(f.context) ?? []);
  return (i.length === 0 ? o : i).every(p) ? void 0 : "a context without an entry a hook below attached (a hook adds to the context its next gave it; it may not leave an entry out)"
}
