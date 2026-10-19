// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.303
import {
  Nc,
  fL,
  Y2,
  c0,
  SDe,
  lS,
  j_
} from "B:/~BUN/root/chunk-c09hf5e4.js";
var xpt = "next";

function fX(e, s, r) {
  let n = !1,
    i;
  return s.update(e, (t) => {
    if (i = t, t.notified) return t;
    if (n = !0, r?.skipStampIfRunning && t.status === "running") return t;
    return {
      ...t,
      notified: !0
    }
  }), {
    claimed: n,
    task: i
  }
}
var arn = new RegExp(`^<${Nc}>\\n<${fL}>([^<]+)</${fL}>` + [Y2, c0, SDe].map((e) => `(?:\\n<${e}>[^<]*</${e}>)?`).join("") + `\\n<${lS}>`);

function li({
  taskId: e,
  toolUseId: s,
  taskType: r,
  outputFile: n,
  status: i,
  summary: t,
  body: u,
  trailing: p
}) {
  let d = [
      [fL, e],
      [Y2, s],
      [c0, r],
      [SDe, n],
      [lS, i],
      [j_, t]
    ],
    o = `<${Nc}>`;
  for (let [a, T] of d)
    if (T) o += `
<${a}>${T}</${a}>`;
  return `${o}${u??""}
</${Nc}>${p??""}`
}
export {
  xpt,
  fX,
  arn,
  li
};
