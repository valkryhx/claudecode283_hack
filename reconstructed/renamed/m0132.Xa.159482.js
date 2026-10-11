/* ==========================================================================
 * m0132.Xa   [m0132_0xc24a4bb.js @ 159482]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
function Xa(e) {
  if (e === void 0) return;
  if (!G(e)) return "takes { agentId, as } or nothing";
  let t = Object.keys(e).filter(i => i !== "agentId" && i !== "as");
  if (t.length > 0) return `takes { agentId, as } or nothing (not ${t.join(", ")})`;
  let {
      agentId: o
    } = e,
    r = e.as,
    n = o === void 0 || typeof o === "string" && o !== "",
    s = r === void 0 || r === "api";
  if (!n) return `takes agentId, a non-empty string (got ${String(o)})`;
  return s ? void 0 : `takes as "api" or none (got ${String(r)})`;
}
