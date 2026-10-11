/* ==========================================================================
 * m0573.Bwn   [m0573_0xcde50bc.js @ 9565]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
function Bwn(e, n = new Set()) {
  for (let o of Object.values(e)) {
    if (o.status !== "running" || n.has(o.id)) continue;
    try {
      if (_p(o)) o.shellCommand?.kill(), o.shellCommand?.cleanup();else if (Eo()) {
        Tp(o.id);
        continue;
      } else if ("abortController" in o) o.abortController?.abort();
      if (!Hd(o)) Si(o.id, "stopped", {
        toolUseId: o.toolUseId,
        summary: o.description,
        ambient: p9(o)
      });
      Tp(o.id);
    } catch (s) {
      d(s);
    }
  }
}
