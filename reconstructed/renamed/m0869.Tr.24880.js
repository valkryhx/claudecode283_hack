/* ==========================================================================
 * m0869.Tr   [m0869_0xd12567a.js @ 24880]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
async function Tr(e, r, s, g) {
  let f = w => ({
    kind: "refused",
    message: w
  });
  try {
    let w = (await new Gt(e, s).restoreState()) === "complete",
      A = r !== void 0 && ko(r, e) && !(await Od(En(oe(), r)));
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
    for (let W of F) if (W.type === po) {
      let H = Sr(W.entry);
      if (H !== void 0) R.push(H);
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
    };
  } catch (w) {
    return f(`Could not read the journal for workflow run ${e}: ${l(w)}`);
  }
}
