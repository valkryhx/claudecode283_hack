// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  jxe,
  DN
} from "B:/~BUN/root/chunk-game8aqv.js";
import {
  i
} from "B:/~BUN/root/chunk-j6pt0v41.js";
import {
  gj
} from "B:/~BUN/root/chunk-1fg2bpc3.js";

function hj() {
  return i.CLAUDE_CODE_REMOTE_SESSION_ORIGIN === "review"
}

function WO() {
  return gj() && hj()
}

function gBs() {
  return WO() ? ["CLAUDE_CODE_SESSION_ACCESS_TOKEN", "CLAUDE_SESSION_INGRESS_TOKEN_FILE"] : []
}

function eta(r, e) {
  if (!WO()) return !1;
  if (r === "CLAUDE_CODE_SESSION_ACCESS_TOKEN") {
    if (e !== "") jxe(e);
    return !0
  }
  if (r === "CLAUDE_CODE_OAUTH_TOKEN") {
    if (e !== "") DN(e);
    return !0
  }
  return !1
}
export {
  hj,
  WO,
  gBs,
  eta
};
