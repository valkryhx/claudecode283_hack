/* ==========================================================================
 * m0132.dr   [m0132_0xc24a4bb.js @ 44975]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
function dr(e) {
  let t = e === void 0;
  if (!G(e)) return t ? void 0 : "a decision that is not an object";
  let o = e;
  if (o.behavior === "deny") return (o.message === void 0 || typeof o.message === "string") && (o.interrupt === void 0 || typeof o.interrupt === "boolean") ? void 0 : "a deny decision whose message or interrupt has the wrong type";
  if (o.behavior !== "allow") return "a decision whose behavior is not allow or deny";
  if (!(o.updatedInput === void 0 || G(o.updatedInput))) return "an allow decision whose updatedInput is not an object";
  let {
      updatedPermissions: n
    } = o,
    s = Array.isArray(n);
  return s || n === void 0 ? (s ? n : []).map(lr).find(a => a !== void 0) : "an allow decision whose updatedPermissions is not a list";
}
