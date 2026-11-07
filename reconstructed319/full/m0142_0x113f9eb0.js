// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  D
} from "B:/~BUN/root/chunk-8mqsat26.js";
var An = "SendMessage",
  RWn = "ccd_session_mgmt",
  rBt = 200,
  hCo = ["type", "recipient", "recipient_kind", "content", "request_id", "approve"];

function vLs(e) {
  return "to" in e && (("message" in e) || ("notify_when_idle" in e))
}

function wan(e) {
  if (!D(e) || !vLs(e) || !hCo.some((n) => (n in e))) return;
  let o = {
    ...e
  };
  for (let n of hCo) delete o[n];
  return o
}
export {
  An,
  RWn,
  rBt,
  hCo,
  vLs,
  wan
};
