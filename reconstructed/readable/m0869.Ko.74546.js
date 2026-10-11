/* ==============================================================================
 * m0869.Ko   [m0869_0xd12567a.js @ 74546]
 * --------------------------------------------------------------------------
 * 作用: parallel(thunks)：有 barrier（Promise.allSettled 等全部完成）。单个 thunk 抛错→该项 null，调用本身不 reject。
 * 标识: M=thunk 数组
 * 原文: claudecode283/modules/m0869_0xd12567a.js  字符偏移 74546
 * 说明: 由 tools/extract.mjs 抽取，忠实原文，仅格式化；标识符仍为 Bun 压缩名。
 * ============================================================================== */
Ko = xt(async (M) => {
  if (D.abortController?.signal.aborted) return new Promise(() => {});
  if (await Q(0), !Array.isArray(M)) throw TypeError("parallel() expects an array of functions");
  let U = bVn(u(M));
  if (U.length === 0) return h([]);
  et(), ct();
  for (let pe of U)
    if (typeof pe !== "function") throw TypeError("parallel() expects an array of functions, not promises. Wrap each call: () => agent(...)");
  let ee = await Promise.allSettled(U.map((pe) => {
      try {
        return _e(ie(pe))
      } catch (ve) {
        return Promise.reject(ve)
      }
    })),
    Oe = 0,
    Qe = ee.map((pe, ve) => {
      if (pe.status === "fulfilled") return pe.value.v;
      let {
        name: Fe,
        msg: Xe
      } = MCe(pe.reason);
      if (Fe === "WorkflowBudgetExceededError") return Oe++, null;
      let Me = `parallel[${ve}] failed: ${Xe}`;
      return Se(Me, {
        log: !0
      }), null
    });
  if (Oe > 0) N.push(`parallel: ${Oe} ${I(Oe,"slot")} dropped \u2014 token budget exceeded`);
  return h(Qe)
})
