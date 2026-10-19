// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { Nc, fL, Y2, c0, SDe, lS, j_ } from "B:/~BUN/root/chunk-c09hf5e4.js";
var xpt = "next";
function fX(e, s, r) {
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
var regExp = new RegExp(`^<${Nc}>\\n<${fL}>([^<]+)</${fL}>` + [Y2, c0, SDe].map(item => `(?:\\n<${item}>[^<]*</${item}>)?`).join("") + `\\n<${lS}>`);
function li({
  taskId: taskId,
  toolUseId: toolUseId,
  taskType: taskType,
  outputFile: outputFile,
  status: status,
  summary: summary,
  body: body,
  trailing: trailing
}) {
  let d = [[fL, taskId], [Y2, toolUseId], [c0, taskType], [SDe, outputFile], [lS, status], [j_, summary]],
    o = `<${Nc}>`;
  for (let [a, T] of d) if (T) o += `
<${a}>${T}</${a}>`;
  return `${o}${body ?? ""}
</${Nc}>${trailing ?? ""}`;
}
export { xpt, fX, regExp as arn, li };