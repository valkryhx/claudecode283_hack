// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { JA, xn } from "B:/~BUN/root/chunk-game8aqv.js";
import { Nr } from "B:/~BUN/root/chunk-eev762xg.js";
import { i } from "B:/~BUN/root/chunk-j6pt0v41.js";
import { St } from "B:/~BUN/root/chunk-xrwdh0g4.js";
import { Te } from "B:/~BUN/root/chunk-8f4z6bdn.js";
import { IH, gVn, Ek } from "B:/~BUN/root/chunk-65j2302z.js";
import { md, rie, La } from "B:/~BUN/root/chunk-1ks9vs37.js";
import { gn } from "B:/~BUN/root/chunk-f0zgv0ya.js";
import { gKt } from "B:/~BUN/root/chunk-nzmdrz0a.js";
import { Vft } from "B:/~BUN/root/chunk-nk59bmc9.js";
var v2o = o => o.find(item => item !== !1) || void 0;
function d() {
  let {
    source: source
  } = La();
  return source === "CLAUDE_CODE_OAUTH_TOKEN" || source === "CLAUDE_CODE_OAUTH_TOKEN_FILE_DESCRIPTOR";
}
var p = () => La().source === "CCR_OAUTH_TOKEN_FILE" && JA() && md();
var u = () => gVn() && !Ek() && md() && (d() || p());
var D7n = () => rie() && !xn() && (IH() && La().source === "CLAUDE_CODE_OAUTH_TOKEN" || u());
var l = () => Vft() || D7n();
var Gri = () => i.CLAUDE_CODE_REMOTE ? "cloud-session" : "signed-out";
var L7n = () => v2o([Te() !== "firstParty" && "third-party", Nr() && "bare", St() && "traffic-off", !gn(gKt) && "policy", !l() && Gri()]);
export { v2o, D7n, Gri, L7n };