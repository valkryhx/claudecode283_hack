/* ==========================================================================
 * m0132.Yy   [m0132_0xc24a4bb.js @ 153415]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
function Yy(e) {
  let t = Ny(e);
  return {
    get isFinalized() {
      return t.isFinalized;
    },
    wrap: Pa(t),
    finalize: Ca(t),
    call: (o, r, n) => {
      let s = t.own.get(o);
      if (!s) return Promise.reject(new De(`${t.pluginName} provides no interface named ${o}`));
      let i = s[r];
      return typeof i === "function" ? t.invoke(i, n, s) : Promise.reject(new De(`$.${o} (${t.pluginName}) has no method ${r}`));
    }
  };
}
