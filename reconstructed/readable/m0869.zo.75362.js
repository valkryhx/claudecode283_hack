/* ==============================================================================
 * m0869.zo   [m0869_0xd12567a.js @ 75362]
 * --------------------------------------------------------------------------
 * 作用: pipeline(items,...stages)：无 barrier。每个 item 独立走完所有 stage，item 之间并行。
 * 标识: M=items  U=stages
 * 原文: claudecode283/modules/m0869_0xd12567a.js  字符偏移 75362
 * 说明: 由 tools/extract.mjs 抽取，忠实原文，仅格式化；标识符仍为 Bun 压缩名。
 * ============================================================================== */
zo = xt(async (M, ...U) => {
  if (D.abortController?.signal.aborted) return new Promise(() => {});
  if (await Q(0), !Array.isArray(M)) throw TypeError("pipeline() expects an array as the first argument");
  let ee = bVn(u(M)),
    Oe = bVn(U);
  if (ee.length === 0) return h([]);
  et(), ct();
  for (let Fe of Oe)
    if (typeof Fe !== "function") throw TypeError("pipeline() stages must be functions: pipeline(items, item => ..., result => ...)");
  let Qe = await Promise.allSettled(ee.map(async (Fe, Xe) => {
      let Me = await _e(Fe);
      for (let K of Oe) {
        if (Me.v === null) break;
        Me = await _e(ie(K, Me.v, Fe, Xe))
      }
      return Me
    })),
    pe = 0,
    ve = Qe.map((Fe, Xe) => {
      if (Fe.status === "fulfilled") return Fe.value.v;
      let {
        name: Me,
        msg: K
      } = MCe(Fe.reason);
      if (Me === "WorkflowBudgetExceededError") return pe++, null;
      let Ge = `pipeline[${Xe}] failed: ${K}`;
      return Se(Ge, {
        log: !0
      }), null
    });
  if (pe > 0) N.push(`pipeline: ${pe} ${I(pe,"slot")} dropped \u2014 token budget exceeded`);
  return h(ve)
})
