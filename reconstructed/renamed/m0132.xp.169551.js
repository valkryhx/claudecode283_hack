/* ==========================================================================
 * m0132.xp   [m0132_0xc24a4bb.js @ 169551]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
function xp() {
  let e = {},
    t = jn({
      pluginName: "core",
      host: Be,
      hostStream: Be,
      resolvedTable: Be,
      timers: new Set(),
      unloaded: Be,
      invoke: Be,
      wrapMethod: o => o,
      signalFrom: Be,
      makeSignal: Be
    });
  for (let [o, r] of Object.entries(t)) e[o] = Object.freeze(Object.keys(r));
  return Object.freeze(e);
}
