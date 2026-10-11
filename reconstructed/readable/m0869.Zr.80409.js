/* ==============================================================================
 * m0869.Zr   [m0869_0xd12567a.js @ 80409]
 * --------------------------------------------------------------------------
 * 作用: 进度批量上报：16ms 批量窗口 / 250ms 节流 / 10s 强制刷新，合并进 workflowProgress。
 * 标识: e={onBatch,onSdkEmit}
 * 原文: claudecode283/modules/m0869_0xd12567a.js  字符偏移 80409
 * 说明: 由 tools/extract.mjs 抽取，忠实原文，仅格式化；标识符仍为 Bun 压缩名。
 * ============================================================================== */
function Zr(e) {
  let r = [],
    s, g = 0,
    f = (w) => {
      if (s = void 0, r.length === 0) return;
      if (!w && !Te() && Bl()) {
        let F = g + Xr - Date.now();
        if (F > 0) {
          s = setTimeout(f, F);
          return
        }
        g = Date.now()
      }
      let A = r;
      if (r = [], e.onBatch(A), !Te() && !Bl()) return;
      e.onSdkEmit(A)
    };
  return {
    onProgress: (w) => {
      if (r.push(w), !s) s = setTimeout(f, qr)
    },
    flushNow: () => {
      if (s) clearTimeout(s);
      f(!0)
    },
    cancel: () => {
      if (s) clearTimeout(s), s = void 0;
      r = []
    }
  }
}
