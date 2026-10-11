/* ==========================================================================
 * m0025.I   [m0025_0xbf5baa8.js @ 13377]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
class I {
  recentErrors = [];
  queue = [];
  droppedBeforeSink = 0;
  sink = null;
  hardFailMode = void 0;
  remember(e) {
    if (this.recentErrors.length >= P) this.recentErrors.shift();
    this.recentErrors.push(e);
  }
  dispatch(e) {
    if (this.sink === null) {
      if (this.queue.length >= F) {
        this.droppedBeforeSink++;
        return;
      }
      this.queue.push(e);
      return;
    }
    switch (e.type) {
      case "error":
        this.sink.logError(e.error);
        break;
      case "mcpError":
        this.sink.logMCPError(e.serverName, e.error);
        break;
      case "mcpDebug":
        this.sink.logMCPDebug(e.serverName, e.message);
        break;
    }
  }
  attachSink(e) {
    if (this.sink !== null) return;
    this.sink = e;
    let r = this.queue;
    this.queue = [];
    for (let s of r) this.dispatch(s);
  }
  isHardFailMode() {
    return this.hardFailMode ??= process.argv.includes("--hard-fail"), this.hardFailMode;
  }
  reset() {
    this.recentErrors = [], this.queue = [], this.droppedBeforeSink = 0, this.sink = null, this.hardFailMode = void 0;
  }
}
