/* ==============================================================================
 * m1569._r   [m1569_0xdceb889.js @ 60619]
 * --------------------------------------------------------------------------
 * 作用: (no note)
 * 原文: claudecode283/modules/m1569_0xdceb889.js  字符偏移 60619
 * 说明: 由 tools/extract.mjs 抽取，忠实原文，仅格式化；标识符仍为 Bun 压缩名。
 * ============================================================================== */
function _r(e, r) {
  return {
    get session() {
      return e.session
    },
    get storageV5() {
      return e.storageV5
    },
    get credentials() {
      return e.credentials
    },
    get agentId() {
      return e.agentId
    },
    get agentContext() {
      return e.agentContext
    },
    get taskRegistry() {
      return e.taskRegistry
    },
    get toolState() {
      return e.toolState
    },
    get tools() {
      return e.tools
    },
    get messages() {
      return e.messages
    },
    get permissions() {
      return e.permissions
    },
    get toolUseId() {
      return r.toolUseId
    },
    get signal() {
      return r.signal
    },
    get abortController() {
      return {
        signal: r.signal
      }
    }
  }
}
