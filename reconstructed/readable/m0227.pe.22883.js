/* ==============================================================================
 * m0227.pe   [m0227_0xc482590.js @ 22883]
 * --------------------------------------------------------------------------
 * 作用: (no note)
 * 原文: claudecode283/modules/m0227_0xc482590.js  字符偏移 22883
 * 说明: 由 tools/extract.mjs 抽取，忠实原文，仅格式化；标识符仍为 Bun 压缩名。
 * ============================================================================== */
function pe(e = {}, n = () => {}) {
  return Ft({
    ...e,
    isMcp: !1,
    isEnabled() {
      return !0
    },
    isConcurrencySafe() {
      return !0
    },
    isReadOnly() {
      return !0
    },
    isOpenWorld() {
      return !1
    },
    name: bi,
    searchHint: "return the final response as structured JSON",
    backgrounding: "never",
    maxResultSizeChars: 1e5,
    async description() {
      return "Return structured output in the requested format"
    },
    async prompt() {
      return "Use this tool to return your final response in the requested structured format. You MUST call this tool exactly once at the end of your response to provide the structured output."
    },
    get inputSchema() {
      return Ke()
    },
    get outputSchema() {
      return Xe()
    },
    create() {
      return {
        async call(r) {
          return n(r), {
            data: "Structured output provided successfully",
            structured_output: r,
            endsTurn: !0
          }
        }
      }
    },
    renderToolUseMessage(r) {
      let s = Object.keys(r);
      if (s.length === 0) return null;
      if (s.length <= 3) return s.map((E) => `${E}: ${b(r[E])}`).join(", ");
      return `${s.length} fields: ${s.slice(0,3).join(", ")}\u2026`
    },
    mapToolResultToToolResultBlockParam(r, s) {
      return {
        tool_use_id: s,
        type: "tool_result",
        content: r
      }
    }
  })
}
