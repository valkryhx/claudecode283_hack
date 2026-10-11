/* ==========================================================================
 * m0132.Ss   [m0132_0xc24a4bb.js @ 41402]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
function Ss(e, t, o) {
  if (e !== void 0 && !iD(e)) return "a context that is not a list of texts";
  let r = e === void 0 ? [] : iD(e) ?? [];
  if (r.some(f => f === "")) return "a context with an empty entry";
  let s = $n(t),
    i = o.filter(f => $n(f.result) === s),
    p = f => lt(r, iD(f.context) ?? []);
  return (i.length === 0 ? o : i).every(p) ? void 0 : "a context without an entry a hook below attached (a hook adds to the context its next gave it; it may not leave an entry out)";
}
