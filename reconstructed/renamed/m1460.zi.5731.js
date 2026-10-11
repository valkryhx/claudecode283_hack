/* ==========================================================================
 * m1460.zi   [m1460_0xd973957.js @ 5731]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
function zi(o) {
  if (o === void 0 || o === null) return [];
  return (typeof o === "object" && !Array.isArray(o) ? Object.entries(o) : [["input", o]]).map(([a, u]) => {
    let d;
    if (typeof u === "string") d = u;else try {
      d = b(u) ?? String(u);
    } catch {
      d = String(u);
    }
    return {
      key: a,
      ...as(d, Ui)
    };
  });
}
