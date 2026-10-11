/* ==============================================================================
 * m0869.Tr   [m0869_0xd12567a.js @ 24880]
 * --------------------------------------------------------------------------
 * 作用: (no note)
 * 原文: claudecode283/modules/m0869_0xd12567a.js  字符偏移 24880
 * 说明: 由 tools/extract.mjs 抽取，忠实原文，仅格式化；标识符仍为 Bun 压缩名。
 * ============================================================================== */
async function Tr(e, r, s, g) {
  let f = (w) => ({
    kind: "refused",
    message: w
  });
  try {
    let w = await new Gt(e, s).restoreState() === "complete",
      A = r !== void 0 && ko(r, e) && !await Od(En(oe(), r));
    if (w && !A) return {
      kind: "ready"
    };
    let F = await mMn()?.readAgent(e, g);
    if (w && !F) return {
      kind: "ready"
    };
    if (F === void 0) return f(`The journal for workflow run ${e} is not on disk, and this session cannot fetch a remote copy, so there is nothing to resume. Fallback: Read the agent-<id>.jsonl files in ${uO(e)} and hand-author a continuation script.`);
    if (F === null) return f(`Could not fetch the journal for workflow run ${e} from the session store. Try the resume again.`);
    let R = [],
      ce;
    for (let W of F)
      if (W.type === po) {
        let H = Sr(W.entry);
        if (H !== void 0) R.push(H)
      } else if (W.type === mo && typeof W.fileName === "string" && go(W.fileName, e) && typeof W.script === "string" && W.script.length <= Nb && hI(W.script)) ce = {
      fileName: W.fileName,
      script: W.script
    };
    if (w) return ce ? {
      kind: "restore",
      entries: void 0,
      script: ce
    } : {
      kind: "ready"
    };
    if (R.length === 0) return f(`No journal found for workflow run ${e}, so there is nothing to resume. To run the workflow from the start, call Workflow again without resumeFromRunId.`);
    return {
      kind: "restore",
      entries: R,
      script: ce
    }
  } catch (w) {
    return f(`Could not read the journal for workflow run ${e}: ${l(w)}`)
  }
}
