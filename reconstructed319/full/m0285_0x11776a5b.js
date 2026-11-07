// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  Cy
} from "B:/~BUN/root/chunk-r5zmhp23.js";
var ZLe = "2025-11-25",
  Mue = "2026-07-28",
  H_e = "reopen_refetch",
  pht = "before_handler",
  yTr = 4096,
  iWi = 16384,
  H7e = "The tool call was interrupted before a result was received. It may or may not have completed on the server \u2014 verify before assuming it succeeded, and retry if needed.",
  aWi = 1000,
  qho = "claudecode/callMark",
  Yho = "The outcome is unknown: the call may have finished, may still be running, or may never have started. Check what it did before you repeat it.";

function _Tr(e, t) {
  return `MCP server "${e}" never answered tool "${t}". ${Yho}`
}
var lWi = "mcp_answer_stream_ended",
  dWi = "mcp_call_not_sent_again",
  bTr = "mcp_call_unanswered",
  cWi = "The server asked the user a question, and no answer came before the time limit. Do not call this tool again in this turn. Tell the user that the server's question got no answer, and wait for their reply.",
  uWi = "mcp_question_unanswered",
  Vq = 16777216,
  STr = -32070,
  Due = 5,
  _ = 1000,
  o = 30000,
  fWi = 1e4;

function wNt(e) {
  return Cy({
    attempt: e,
    baseMs: _,
    capMs: o
  })
}
var wTr = 8,
  hvs = 30000,
  pWi = 300000,
  kTr = 1e4,
  Ftn = "inode/directory";

function eNe(e) {
  return e.replace(/[^\x20-\x7e]/g, "").slice(0, 32)
}
export {
  ZLe,
  Mue,
  H_e,
  pht,
  yTr,
  iWi,
  H7e,
  aWi,
  qho,
  Yho,
  _Tr,
  lWi,
  dWi,
  bTr,
  cWi,
  uWi,
  Vq,
  STr,
  Due,
  fWi,
  wNt,
  wTr,
  hvs,
  pWi,
  kTr,
  Ftn,
  eNe
};
