/* ==========================================================================
 * m0242.Ms  ->  Semaphore   [m0242_0xc49e8d9.js @ 615]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
function Semaphore(limit, fn) {
  let running = 0,
    waitQueue = [];
  function acquire() {
    if (running < limit) return running++, Promise.resolve();
    return new Promise(r => waitQueue.push(r));
  }
  function release() {
    let r = waitQueue.shift();
    if (r) r();else running--;
  }
  return async (...r) => {
    await acquire();
    try {
      return await fn(...r);
    } finally {
      release();
    }
  };
}
