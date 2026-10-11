// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.283
import {
  Pd,
  ro,
  $r
} from "B:/~BUN/root/chunk-gf53qpk6.js";
import {
  Ct,
  wn,
  Ue,
  St
} from "B:/~BUN/root/chunk-bt3h0syz.js";
import {
  F9
} from "B:/~BUN/root/chunk-0vgj9y5e.js";
import {
  at
} from "B:/~BUN/root/chunk-2h7x7bdj.js";
var e4 = Pd,
  Xj = new Set([Ue, St, at, wn, Ct, ro, $r]),
  fZr = "device_bash",
  Eoe = new Set(["sync_files"]);

function mZr(e) {
  return e.filter((o) => {
    if (o.mcpInfo?.serverName !== e4) return !0;
    let r = o.mcpInfo.toolName,
      t = F9(r);
    return !Xj.has(r) && (t === void 0 || !Xj.has(t))
  })
}

function gZr(e) {
  return e.filter((o) => o.mcpInfo?.serverName !== e4 || !Eoe.has(o.mcpInfo.toolName))
}
export {
  e4,
  Xj,
  fZr,
  Eoe,
  mZr,
  gZr
};
