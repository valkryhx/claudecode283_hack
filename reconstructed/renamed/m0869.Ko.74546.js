/* ==========================================================================
 * m0869.Ko  ->  parallel   [m0869_0xd12567a.js @ 74546]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
parallel = vmWrap(async thunks => {
  if (task.abortController?.signal.aborted) return new Promise(() => {});
  if (await assertAlive(0), !Array.isArray(thunks)) throw TypeError("parallel() expects an array of functions");
  let fns = cloneList(unwrap(thunks));
  if (fns.length === 0) return cloneOut([]);
  assertAgentCap(), assertBudget();
  for (let pe of fns) if (typeof pe !== "function") throw TypeError("parallel() expects an array of functions, not promises. Wrap each call: () => agent(...)");
  let settled = await Promise.allSettled(fns.map(pe => {
      try {
        return settle(call(pe));
      } catch (ve) {
        return Promise.reject(ve);
      }
    })),
    dropped = 0,
    results = settled.map((pe, ve) => {
      if (pe.status === "fulfilled") return pe.value.v;
      let {
        name: Fe,
        msg: Xe
      } = normalizeError(pe.reason);
      if (Fe === "WorkflowBudgetExceededError") return dropped++, null;
      let Me = `parallel[${ve}] failed: ${Xe}`;
      return recordFailure(Me, {
        log: !0
      }), null;
    });
  if (dropped > 0) failures.push(`parallel: ${dropped} ${pluralize(dropped, "slot")} dropped \u2014 token budget exceeded`);
  return cloneOut(results);
})
