/* ==========================================================================
 * m0132.zIo   [m0132_0xc24a4bb.js @ 94977]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
function zIo(e) {
  let t = new Set();
  return o => {
    let r = o === void 0 ? tt : qz[o];
    return n => {
      if (!r.includes(n) || t.has(n)) return;
      t.add(n), kc().log(`${e}: $.ui.resolve: <${n}> was withheld by a ui.resolve hook; it draws a fragment`, "warn");
    };
  };
}
