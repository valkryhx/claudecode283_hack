/* ==========================================================================
 * m0855.Wor   [m0855_0xd10e439.js @ 1676]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
function Wor(e, t) {
  let r = e.toLowerCase();
  if (r === "auto" || r === "unset") return {
    value: void 0
  };
  if (r === "ultracode" && fx(t)) return {
    value: "xhigh"
  };
  let n = bhe(e);
  return n ? {
    value: n
  } : null;
}
