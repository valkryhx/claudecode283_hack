/* ==============================================================================
 * m0227._in   [m0227_0xc482590.js @ 4706]
 * --------------------------------------------------------------------------
 * 作用: (no note)
 * 原文: claudecode283/modules/m0227_0xc482590.js  字符偏移 4706
 * 说明: 由 tools/extract.mjs 抽取，忠实原文，仅格式化；标识符仍为 Bun 压缩名。
 * ============================================================================== */
function _in(e) {
  for (let n of e) {
    let r = n;
    if (r.attachment?.type === "queued_command") delete r.rendered, delete r.renderedInHumanTurn;
    if (SHr(r), r.attachment) {
      if (SHr(r.attachment), r.attachment.type === "queued_command" && r.attachment.forwardedIntent !== void 0) JDo(r.attachment)
    }
    let s = r.mcpMeta;
    if (s !== null && typeof s === "object" && s._meta !== null && typeof s._meta === "object" && mut in s._meta) delete s._meta[mut];
    if (r.classifierMetaLines !== void 0) delete r.classifierMetaLines;
    if (r.serverClassifierContext !== void 0) delete r.serverClassifierContext;
    let E = r.origin;
    if (r.type === "user" && (E == null || E.kind == null || E.kind === "human" || E.kind === "auto-continuation")) r.origin = {
      kind: "unclassified"
    };
    if (r.attachment?.type === "queued_command") {
      let l = r.attachment.origin;
      if (l == null || l.kind == null || l.kind === "human" || l.kind === "auto-continuation") r.attachment.origin = {
        kind: "unclassified"
      }
    }
    if (r.type !== "attachment" || r.attachment?.type !== "poll_events" || !Array.isArray(r.attachment.provenance)) continue;
    r.attachment.provenance = r.attachment.provenance.map((l) => l !== null && typeof l === "object" && l.authority === "human-principal" ? {
      ...l,
      authority: "human-other"
    } : l)
  }
}
