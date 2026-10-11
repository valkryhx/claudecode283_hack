/* ==========================================================================
 * m0132.OIo   [m0132_0xc24a4bb.js @ 136646]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
function OIo(e, t) {
  let o = r => k0(e((...n) => kc().log(`${t} console.${r}: ${n.map(pFe).join(" ")}`)));
  return R_({
    log: o("log"),
    info: o("info"),
    warn: o("warn"),
    error: o("error"),
    debug: o("debug")
  });
}
