/* ==============================================================================
 * m0132.Hg   [m0132_0xc24a4bb.js @ 161194]
 * --------------------------------------------------------------------------
 * 作用: (no note)
 * 原文: claudecode283/modules/m0132_0xc24a4bb.js  字符偏移 161194
 * 说明: 由 tools/extract.mjs 抽取，忠实原文，仅格式化；标识符仍为 Bun 压缩名。
 * ============================================================================== */
var Hg = (e, t) => R_({
  messages: (o) => {
    let r = Xa(o);
    return r !== void 0 ? Promise.reject(new De(`${e}: $.session.messages ${r}`)) : t("session.messages", Va(o))
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
  usage: (o) => {
    let r = qa(o);
    return r !== void 0 ? Promise.reject(new De(`${e}: $.session.usage ${r}`)) : t("session.usage", G(o) ? Ya(o) : {})
  },
  version: () => t("session.version", {}),
  send: (o) => {
    let r = vLr(o);
    return r !== void 0 || !G(o) ? Promise.reject(new De(`${e}: $.session.send ${r}`)) : t("session.send", za(o))
  },
  compact: (o) => {
    let r = G(o) ? o.instructions : void 0;
    return o !== void 0 && (!G(o) || r !== void 0 && typeof r !== "string") ? Promise.reject(new De(`${e}: $.session.compact takes { instructions } (a string) or nothing`)) : t("session.compact", typeof r === "string" ? {
      instructions: r
    } : {})
  }
});
