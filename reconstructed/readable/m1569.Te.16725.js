/* ==============================================================================
 * m1569.Te   [m1569_0xdceb889.js @ 16725]
 * --------------------------------------------------------------------------
 * 作用: (no note)
 * 原文: claudecode283/modules/m1569_0xdceb889.js  字符偏移 16725
 * 说明: 由 tools/extract.mjs 抽取，忠实原文，仅格式化；标识符仍为 Bun 压缩名。
 * ============================================================================== */
function Te(e) {
  let r = dr().safeParse(e);
  if (r.success) return r.data;
  let n = e !== null && typeof e === "object" ? Object.keys(e).find((s) => Dr.has(s)) : void 0;
  if (n !== void 0) throw new P(`a fact may not carry \`${n}\` \u2014 the host sets it on the row`, "world: fact carries a reserved key");
  throw new P("a fact must be an object with a non-empty string `topic`", "world: not a fact")
}
