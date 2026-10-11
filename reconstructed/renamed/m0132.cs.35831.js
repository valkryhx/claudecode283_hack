/* ==========================================================================
 * m0132.cs   [m0132_0xc24a4bb.js @ 35831]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
function cs(e, t, o) {
  if (e === void 0) return;
  let r = iD(e);
  if (r === void 0) return "a context that is not a list of texts";
  if (r.some(a => a === "")) return "a context with an empty entry";
  let s = o.filter(a => a.ref !== void 0 && a.ref === t),
    i = a => lt(r, iD(a.context) ?? []);
  return (s.length === 0 ? o.slice(-1) : s).every(i) ? void 0 : "a context without an entry a hook below attached (a hook adds to the context its next gave it; it may not leave an entry out)";
}
