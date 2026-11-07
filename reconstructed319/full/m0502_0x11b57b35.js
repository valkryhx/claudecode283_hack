// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  Bu,
  vM,
  R5,
  Ej,
  Yqe,
  av,
  M_
} from "B:/~BUN/root/chunk-xrwdh0g4.js";
var BDt = "next";

function Doe(e, s, r) {
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
var aDn = new RegExp(`^<${Bu}>\\n<${vM}>([^<]+)</${vM}>` + [R5, Ej, Yqe].map((e) => `(?:\\n<${e}>[^<]*</${e}>)?`).join("") + `\\n<${av}>`);

function zi({
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
      [vM, e],
      [R5, s],
      [Ej, r],
      [Yqe, n],
      [av, i],
      [M_, t]
    ],
    o = `<${Bu}>`;
  for (let [a, T] of d)
    if (T) o += `
<${a}>${T}</${a}>`;
  let f = (p ?? "").replaceAll(new RegExp(`<(?=\\s*/\\s*${Bu}\\b)`, "gi"), "&lt;");
  return `${o}${u??""}
</${Bu}>${f}`
}
export {
  BDt,
  Doe,
  aDn,
  zi
};
