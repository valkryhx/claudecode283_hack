/* ==========================================================================
 * m1569._r   [m1569_0xdceb889.js @ 60619]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
function _r(e, r) {
  return {
    get session() {
      return e.session;
    },
    get storageV5() {
      return e.storageV5;
    },
    get credentials() {
      return e.credentials;
    },
    get agentId() {
      return e.agentId;
    },
    get agentContext() {
      return e.agentContext;
    },
    get taskRegistry() {
      return e.taskRegistry;
    },
    get toolState() {
      return e.toolState;
    },
    get tools() {
      return e.tools;
    },
    get messages() {
      return e.messages;
    },
    get permissions() {
      return e.permissions;
    },
    get toolUseId() {
      return r.toolUseId;
    },
    get signal() {
      return r.signal;
    },
    get abortController() {
      return {
        signal: r.signal
      };
    }
  };
}
