// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { Au, XJ, JJ, Cde, Fhn, rT, HD } from "B:/~BUN/root/chunk-zs3ycjed.js";
var a3e = "next";
function BV(n, s, r) {
  let claimed = !1,
    task;
  return s.update(n, t => {
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
function qi({
  taskId: taskId,
  toolUseId: toolUseId,
  taskType: taskType,
  outputFile: outputFile,
  status: status,
  summary: summary,
  body: body,
  trailing: trailing
}) {
  let f = [[XJ, taskId], [JJ, toolUseId], [Cde, taskType], [Fhn, outputFile], [rT, status], [HD, summary]],
    o = `<${Au}>`;
  for (let [a, T] of f) if (T) o += `
<${a}>${T}</${a}>`;
  return `${o}${body ?? ""}
</${Au}>${trailing ?? ""}`;
}
export { a3e, BV, qi };