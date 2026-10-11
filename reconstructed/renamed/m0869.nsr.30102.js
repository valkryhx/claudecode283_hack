/* ==========================================================================
 * m0869.nsr  ->  makeChildPhaseNamer   [m0869_0xd12567a.js @ 30102]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
function makeChildPhaseNamer() {
  let counts = new Map();
  return r => {
    let s = (counts.get(r) ?? 0) + 1;
    return counts.set(r, s), `${CHILD_PHASE_PREFIX} ${r}${s > 1 ? ` #${s}` : ""}`;
  };
}
