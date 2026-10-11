/* ==========================================================================
 * m0573.Myt   [m0573_0xcde50bc.js @ 9295]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
function Myt(e, n) {
  let o = x(e),
    s = o.shells.length > 0 || o.workflows.length > 0 || o.agents.length > 0 || o.unresumedAgents.length > 0 || o.unresumedWorkflows.length > 0 || o.frameLive.length > 0 ? E(o, n) : void 0,
    h = new Set([...o.shells, ...o.workflows, ...o.agents].map(u => u.id));
  return Bwn(e, h), s;
}
