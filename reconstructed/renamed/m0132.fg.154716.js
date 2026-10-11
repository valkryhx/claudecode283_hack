/* ==========================================================================
 * m0132.fg   [m0132_0xc24a4bb.js @ 154716]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
var fg = (e, t) => R_({
  list: () => t("command.list", {}),
  register: o => {
    let r = G(o) ? {
        name: o.name,
        description: o.description,
        argumentHint: o.argumentHint,
        immediate: o.immediate
      } : void 0,
      n = r?.name;
    if (r === void 0 || typeof n !== "string" || !j6e.test(n)) return Promise.reject(new De(`${e}: $.command.register takes { name, description, argumentHint?, immediate? }; name is letters, digits, _ or - (up to 64)`));
    let {
      description: i,
      argumentHint: p,
      immediate: a
    } = r;
    return typeof i !== "string" || i.trim() === "" ? Promise.reject(new De(`${e}: $.command.register: ${n} needs a description (what the menu shows)`)) : t("command.register", {
      name: n,
      description: i,
      ...(p !== void 0 && {
        argumentHint: p
      }),
      ...(a !== void 0 && {
        immediate: a
      })
    });
  },
  run: o => {
    let r = G(o) ? {
        command: o.command,
        args: o.args
      } : void 0,
      n = r?.command;
    return typeof n !== "string" || n === "" ? Promise.reject(new De(`${e}: $.command.run takes { command, args? } (the command's name without the slash)`)) : t("command.run", {
      command: n,
      args: r?.args ?? ""
    });
  }
});
