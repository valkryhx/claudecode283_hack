/* ==========================================================================
 * m0227.Cjn   [m0227_0xc482590.js @ 19753]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
function Cjn(e) {
  let n = k(e, Fe, {
    remaining: We
  });
  if ("reason" in n) return {
    ok: !1,
    reason: n.reason
  };
  if (n.node.type !== "object") return {
    ok: !1,
    reason: "root_not_object"
  };
  return {
    ok: !0,
    schema: {
      ...n.node,
      type: "object"
    }
  };
}
