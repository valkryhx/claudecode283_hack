/* ==========================================================================
 * m0869.zo  ->  pipeline   [m0869_0xd12567a.js @ 75362]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
pipeline = vmWrap(async (items, ...stages) => {
  if (task.abortController?.signal.aborted) return new Promise(() => {});
  if (await assertAlive(0), !Array.isArray(items)) throw TypeError("pipeline() expects an array as the first argument");
  let list = cloneList(unwrap(items)),
    stageFns = cloneList(stages);
  if (list.length === 0) return cloneOut([]);
  assertAgentCap(), assertBudget();
  for (let Fe of stageFns) if (typeof Fe !== "function") throw TypeError("pipeline() stages must be functions: pipeline(items, item => ..., result => ...)");
  let settled = await Promise.allSettled(list.map(async (Fe, Xe) => {
      let Me = await settle(Fe);
      for (let K of stageFns) {
        if (Me.v === null) break;
        Me = await settle(call(K, Me.v, Fe, Xe));
      }
      return Me;
    })),
    dropped = 0,
    results = settled.map((Fe, Xe) => {
      if (Fe.status === "fulfilled") return Fe.value.v;
      let {
        name: Me,
        msg: K
      } = normalizeError(Fe.reason);
      if (Me === "WorkflowBudgetExceededError") return dropped++, null;
      let Ge = `pipeline[${Xe}] failed: ${K}`;
      return recordFailure(Ge, {
        log: !0
      }), null;
    });
  if (dropped > 0) failures.push(`pipeline: ${dropped} ${pluralize(dropped, "slot")} dropped \u2014 token budget exceeded`);
  return cloneOut(results);
})
