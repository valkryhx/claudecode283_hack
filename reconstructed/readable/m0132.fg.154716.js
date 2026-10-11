/* ==============================================================================
 * m0132.fg   [m0132_0xc24a4bb.js @ 154716]
 * --------------------------------------------------------------------------
 * 作用: (no note)
 * 原文: claudecode283/modules/m0132_0xc24a4bb.js  字符偏移 154716
 * 说明: 由 tools/extract.mjs 抽取，忠实原文，仅格式化；标识符仍为 Bun 压缩名。
 * ============================================================================== */
var fg = (e, t) => R_({
  list: () => t("command.list", {}),
  register: (o) => {
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
      ...p !== void 0 && {
        argumentHint: p
      },
      ...a !== void 0 && {
        immediate: a
      }
    })
  },
  run: (o) => {
    let r = G(o) ? {
        command: o.command,
        args: o.args
      } : void 0,
      n = r?.command;
    return typeof n !== "string" || n === "" ? Promise.reject(new De(`${e}: $.command.run takes { command, args? } (the command's name without the slash)`)) : t("command.run", {
      command: n,
      args: r?.args ?? ""
    })
  }
});
