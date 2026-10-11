/* ==========================================================================
 * m0132.Ds   [m0132_0xc24a4bb.js @ 50605]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
var Ds = {
  event: "ui.close",
  check: K("ui.close").check,
  checkArgument: (e, t) => {
    let o = bdt(e.id);
    if (o !== void 0) return `an unusable id: ${o}`;
    if (e.id !== t.id) return "a changed id (the pane being closed; next(e) passes it on)";
    if (e.origin === void 0) return "no origin (next(e) passes e.origin on; a rewrite spreads it: next({ ...e, id }))";
    return $n(e.origin) !== $n(t.origin) ? dt : void 0;
  }
};
