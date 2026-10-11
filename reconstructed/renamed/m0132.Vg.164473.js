/* ==========================================================================
 * m0132.Vg   [m0132_0xc24a4bb.js @ 164473]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
var Vg = (e, t) => R_({
  list: () => t("agent.list", {}),
  register: o => {
    let r = ip(o);
    return r !== void 0 && typeof r.name === "string" && j6e.test(r.name) ? t("agent.register", r) : Promise.reject(new De(`${e}: $.agent.register takes { name, description, prompt, ... }; name is letters, digits, _ or - (up to 64)`));
  },
  spawn: async o => {
    let r = o?.prompt;
    if (o === void 0 || typeof r !== "string" || r.trim() === "") throw new De(`${e}: $.agent.spawn takes { prompt, ... } (a non-empty prompt)`);
    let s = await t("agent.spawn", np(o, r)),
      i = s.deny ?? (s.isError === !0 ? s.text : void 0),
      p = tp(s.result),
      a = i === void 0;
    return R_(a ? {
      model: WVn(s.result) ?? o.model ?? "inherit",
      ...(p !== void 0 && {
        agentId: p
      })
    } : {
      deny: i
    });
  }
});
