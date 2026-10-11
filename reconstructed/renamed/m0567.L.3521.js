/* ==========================================================================
 * m0567.L   [m0567_0xcdd6311.js @ 3521]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
function L(e, s, r, o) {
  let n = null,
    a = nb(e);
  if (s.update(e, i => {
    if (i.status !== "running") return i;
    n = i, i.abortController?.abort();
    let u = Date.now(),
      w = o.terminal?.summary === void 0 ? o.terminal : {
        ...o.terminal,
        summary: Fc(o.terminal.summary)
      };
    return {
      ...i,
      ...o,
      ...(o.terminal && {
        terminal: w
      }),
      ...(o.error !== void 0 && {
        error: Fc(o.error)
      }),
      status: r,
      endTime: u,
      rateLimitWait: void 0,
      ...(ui(r) && a && {
        evictAfter: u + yR
      }),
      abortController: void 0,
      agentControllers: void 0
    };
  }), n && ui(r) && !a) lst(e, () => {
    s.update(e, i => {
      if (!ui(i.status) || i.evictAfter !== void 0) return i;
      return {
        ...i,
        evictAfter: Date.now() + yR
      };
    });
  });
  return n;
}
