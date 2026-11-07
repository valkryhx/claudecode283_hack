// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { Bu, vM, R5, Ej, Yqe, av, M_ } from "B:/~BUN/root/chunk-xrwdh0g4.js";
var BDt = "next";
function Doe(e, s, r) {
  let claimed = !1,
    task;
  return s.update(e, t => {
    if (task = t, t.notified) return t;
    if (claimed = !0, r?.skipStampIfRunning && t.status === "running") return t;
    return {
      ...t,
      notified: !0
    };
  }), {
    claimed: claimed,
    task: task
  };
}
var regExp = new RegExp(`^<${Bu}>\\n<${vM}>([^<]+)</${vM}>` + [R5, Ej, Yqe].map(item => `(?:\\n<${item}>[^<]*</${item}>)?`).join("") + `\\n<${av}>`);
function zi({
  taskId: taskId,
  toolUseId: toolUseId,
  taskType: taskType,
  outputFile: outputFile,
  status: status,
  summary: summary,
  body: body,
  trailing: trailing
}) {
  let d = [[vM, taskId], [R5, toolUseId], [Ej, taskType], [Yqe, outputFile], [av, status], [M_, summary]],
    o = `<${Bu}>`;
  for (let [a, T] of d) if (T) o += `
<${a}>${T}</${a}>`;
  let f = (trailing ?? "").replaceAll(new RegExp(`<(?=\\s*/\\s*${Bu}\\b)`, "gi"), "&lt;");
  return `${o}${body ?? ""}
</${Bu}>${f}`;
}
export { BDt, Doe, regExp as aDn, zi };