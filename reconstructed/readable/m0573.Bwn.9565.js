/* ==============================================================================
 * m0573.Bwn   [m0573_0xcde50bc.js @ 9565]
 * --------------------------------------------------------------------------
 * 作用: (no note)
 * 原文: claudecode283/modules/m0573_0xcde50bc.js  字符偏移 9565
 * 说明: 由 tools/extract.mjs 抽取，忠实原文，仅格式化；标识符仍为 Bun 压缩名。
 * ============================================================================== */
function Bwn(e, n = new Set) {
  for (let o of Object.values(e)) {
    if (o.status !== "running" || n.has(o.id)) continue;
    try {
      if (_p(o)) o.shellCommand?.kill(), o.shellCommand?.cleanup();
      else if (Eo()) {
        Tp(o.id);
        continue
      } else if ("abortController" in o) o.abortController?.abort();
      if (!Hd(o)) Si(o.id, "stopped", {
        toolUseId: o.toolUseId,
        summary: o.description,
        ambient: p9(o)
      });
      Tp(o.id)
    } catch (s) {
      d(s)
    }
  }
}
