/* ==========================================================================
 * m0132.Xg   [m0132_0xc24a4bb.js @ 165127]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
var Xg = (e, t) => R_({
  register: o => {
    if (!G(o) || typeof o.name !== "string" || !j6e.test(o.name)) return Promise.reject(new De(`${e}: $.tool.register takes { name, description, inputSchema? }; name is letters, digits, _ or - (up to 64)`));
    if (typeof o.description !== "string" || o.description.trim() === "") return Promise.reject(new De(`${e}: $.tool.register: ${o.name} needs a description (what the model reads)`));
    let s = o.inputSchema ?? {
      type: "object"
    };
    return G(s) ? t("tool.register", {
      name: o.name,
      description: o.description,
      inputSchema: {
        type: "object",
        ...s
      }
    }) : Promise.reject(new De(`${e}: $.tool.register: ${o.name}'s inputSchema must be a JSON schema object`));
  },
  list: () => t("tool.list", {}),
  call: async o => {
    if (!G(o)) throw new De(`${e}: $.tool.call: input must be an object`);
    if (typeof o.tool !== "string" || o.tool.length === 0) throw new De(`${e}: $.tool.call takes the event's input: { tool, ...args }`);
    return t("tool.call", o);
  },
  check: o => G(o) && typeof o.tool === "string" && o.tool.length > 0 && G(o.input) ? t("tool.check", {
    tool: o.tool,
    input: o.input
  }) : Promise.reject(new De(`${e}: $.tool.check takes { tool, input }: the tool's name and its arguments, an object`))
});
