/* ==========================================================================
 * m0132.Ca   [m0132_0xc24a4bb.js @ 152405]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
var Ca = e => (t, o) => {
  if (e.isFinalized) throw new De(`${e.pluginName}: $ is already built`);
  for (let [n, s] of Object.entries(t)) e.slots[n] = Pn(e, n, s);
  for (let [n, s] of Object.entries(o ?? {})) if (n !== "*" && !Object.hasOwn(t, n) && !e.identity.has(n)) e.slots[n] = Pt(n, s, e.wrapMethod);
  let r = o?.["*"];
  if (r !== void 0) Object.setPrototypeOf(e.engine, Gy(r, e.wrapMethod));
  Object.freeze(e.engine), e.isFinalized = !0;
};
