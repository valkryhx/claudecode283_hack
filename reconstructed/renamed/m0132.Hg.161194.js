/* ==========================================================================
 * m0132.Hg   [m0132_0xc24a4bb.js @ 161194]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
var Hg = (e, t) => R_({
  messages: o => {
    let r = Xa(o);
    return r !== void 0 ? Promise.reject(new De(`${e}: $.session.messages ${r}`)) : t("session.messages", Va(o));
  },
  cwd: () => t("session.cwd", {}),
  root: () => t("session.root", {}),
  model: () => t("session.model", {}),
  turns: () => t("session.turns", {}),
  id: () => t("session.id", {}),
  repo: () => t("session.repo", {}),
  surface: () => t("session.surface", {}),
  surfaces: () => t("session.surfaces", {}),
  authorize: () => t("session.authorize", {}),
  usage: o => {
    let r = qa(o);
    return r !== void 0 ? Promise.reject(new De(`${e}: $.session.usage ${r}`)) : t("session.usage", G(o) ? Ya(o) : {});
  },
  version: () => t("session.version", {}),
  send: o => {
    let r = vLr(o);
    return r !== void 0 || !G(o) ? Promise.reject(new De(`${e}: $.session.send ${r}`)) : t("session.send", za(o));
  },
  compact: o => {
    let r = G(o) ? o.instructions : void 0;
    return o !== void 0 && (!G(o) || r !== void 0 && typeof r !== "string") ? Promise.reject(new De(`${e}: $.session.compact takes { instructions } (a string) or nothing`)) : t("session.compact", typeof r === "string" ? {
      instructions: r
    } : {});
  }
});
