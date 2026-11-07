// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  bY
} from "B:/~BUN/root/chunk-game8aqv.js";
import {
  v,
  V3
} from "B:/~BUN/root/chunk-1ks9vs37.js";
import {
  i
} from "B:/~BUN/root/chunk-j6pt0v41.js";
import {
  Af,
  yqe
} from "B:/~BUN/root/chunk-vaq2hdme.js";
import {
  xXe,
  Aps
} from "B:/~BUN/root/chunk-z5apdcem.js";
var t = 300000;

function K_r() {
  return i.CLAUDE_CODE_BRIEF || V3("tengu_kairos_brief", !1, t)
}

function oSa(e) {
  if (!e.includes(Af) && !e.includes(yqe)) return !1;
  if (xXe()) return !1;
  return K_r()
}

function LW() {
  return bY() && K_r() || Aps()
}
var r = `In brief mode, plain assistant text is hidden from the user \u2014 only ${Af} reaches them. Call it now with your substantive reply for this turn. Do not mention this reminder; the message should read as if you wrote it unprompted, addressing only what the user actually asked. If you genuinely have nothing useful to tell the user, you may end the turn without calling it.`;

function sSa() {
  let e = v("tengu_kairos_brief_stop_hook_text", "");
  return typeof e === "string" && e.length > 0 ? e : r
}
export {
  K_r,
  oSa,
  LW,
  sSa
};
