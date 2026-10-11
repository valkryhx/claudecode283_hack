/* ==========================================================================
 * m0869.Zr  ->  makeProgressBatcher   [m0869_0xd12567a.js @ 80409]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
function makeProgressBatcher(callbacks) {
  let queue = [],
    timer,
    lastFlush = 0,
    flush = w => {
      if (timer = void 0, queue.length === 0) return;
      if (!w && !isHeadless() && shouldForceFlush()) {
        let F = lastFlush + THROTTLE_MS - Date.now();
        if (F > 0) {
          timer = setTimeout(flush, F);
          return;
        }
        lastFlush = Date.now();
      }
      let A = queue;
      if (queue = [], callbacks.onBatch(A), !isHeadless() && !shouldForceFlush()) return;
      callbacks.onSdkEmit(A);
    };
  return {
    onProgress: w => {
      if (queue.push(w), !timer) timer = setTimeout(flush, BATCH_MS);
    },
    flushNow: () => {
      if (timer) clearTimeout(timer);
      flush(!0);
    },
    cancel: () => {
      if (timer) clearTimeout(timer), timer = void 0;
      queue = [];
    }
  };
}
