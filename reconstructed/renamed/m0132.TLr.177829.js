/* ==========================================================================
 * m0132.TLr   [m0132_0xc24a4bb.js @ 177829]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
function TLr(e) {
  let t = new Map(),
    o = new Map();
  return {
    read(r) {
      let n = t.get(gi(r));
      if (n !== void 0) return n;
      let s = o.get(r.surface) ?? e(WIo(r.surface), r.surface);
      return o.set(r.surface, s), s;
    },
    store(r) {
      let n = new Map();
      t.clear();
      for (let {
        surface: s,
        component: i,
        answer: p
      } of r) {
        let a = n.get(p) ?? e(p, s);
        n.set(p, a), t.set(gi({
          surface: s,
          component: i
        }), a);
      }
    }
  };
}
