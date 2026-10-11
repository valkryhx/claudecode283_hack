/* ==========================================================================
 * m0132.CLr   [m0132_0xc24a4bb.js @ 178803]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
function CLr({
  vmStream: e,
  wrapMethod: t,
  cloneIn: o
}, r = n => n) {
  let n = s => o({
    done: s.done === !0,
    value: s.value
  });
  return s => e(t(async () => n(await r(s.next()))), t(async () => n(await r(s.return(void 0)))), t(async () => o(await r(jx(s)))));
}
