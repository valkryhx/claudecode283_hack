/* ==============================================================================
 * m0025.I   [m0025_0xbf5baa8.js @ 13377]
 * --------------------------------------------------------------------------
 * 作用: (no note)
 * 原文: claudecode283/modules/m0025_0xbf5baa8.js  字符偏移 13377
 * 说明: 由 tools/extract.mjs 抽取，忠实原文，仅格式化；标识符仍为 Bun 压缩名。
 * ============================================================================== */
class I {
  recentErrors = [];
  queue = [];
  droppedBeforeSink = 0;
  sink = null;
  hardFailMode = void 0;
  remember(e) {
    if (this.recentErrors.length >= P) this.recentErrors.shift();
    this.recentErrors.push(e)
  }
  dispatch(e) {
    if (this.sink === null) {
      if (this.queue.length >= F) {
        this.droppedBeforeSink++;
        return
      }
      this.queue.push(e);
      return
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
        break
    }
  }
  attachSink(e) {
    if (this.sink !== null) return;
    this.sink = e;
    let r = this.queue;
    this.queue = [];
    for (let s of r) this.dispatch(s)
  }
  isHardFailMode() {
    return this.hardFailMode ??= process.argv.includes("--hard-fail"), this.hardFailMode
  }
  reset() {
    this.recentErrors = [], this.queue = [], this.droppedBeforeSink = 0, this.sink = null, this.hardFailMode = void 0
  }
}
