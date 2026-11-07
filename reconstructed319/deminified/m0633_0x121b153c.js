// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { xme } from "B:/~BUN/root/chunk-eev762xg.js";
import { ye } from "B:/~BUN/root/chunk-game8aqv.js";
import { TA } from "B:/~BUN/root/chunk-sc660841.js";
import { hyt as readAsHelperStarts, oFe as startHelper, Us as trustAccepted } from "B:/~BUN/root/chunk-1ks9vs37.js";
import { EN } from "B:/~BUN/root/chunk-65j2302z.js";
import { Kt } from "B:/~BUN/root/chunk-6n5g80b8.js";
import { be, Ga } from "B:/~BUN/root/chunk-7wn6n2hd.js";
import { oae, _5, TH, b5, XGn, C_ } from "B:/~BUN/root/chunk-wthaftk0.js";
import { x2r } from "B:/~BUN/root/chunk-4qtv3w5m.js";
import { Rhr } from "B:/~BUN/root/chunk-3eq12f11.js";
import { O_n } from "B:/~BUN/root/chunk-a7s9hetf.js";
import { qTt } from "B:/~BUN/root/chunk-592m52be.js";
import { Rr } from "B:/~BUN/root/chunk-4qfwb3rf.js";
var f1o = {};
Rr(f1o, {
  default: () => f1o,
  earlyCredentialsOf: () => a1o,
  hostProxyAuthConfigured: () => d1o,
  personProxyAuthHelper: () => l1o,
  proxyAgentsInstalled: () => c1o,
  sessionFactsRestored: () => qEt,
  signInRestored: () => u1o
});
function a1o(e) {
  return e?.backend !== void 0 && xme(e.configHome) ? TA(e?.backend) : void 0;
}
function l1o() {
  let e = be("policySettings")?.proxyAuthHelper,
    t = Kt("userSettings") ? be("userSettings")?.proxyAuthHelper : void 0;
  return {
    helper: e ?? t,
    fromProjectOrLocal: e === void 0 && t !== void 0 && (Ga("projectSettings")?.proxyAuthHelper === t || Ga("localSettings")?.proxyAuthHelper === t),
    trustAccepted: trustAccepted,
    sources: "personAndPolicy",
    startHelper: startHelper,
    readAsHelperStarts: readAsHelperStarts
  };
}
var s = `a proxy helper set by this project is not run by this command
`;
function d1o() {
  let e = EN(),
    r = e && Boolean(process.stderr.isTTY) && (be("projectSettings")?.proxyAuthHelper !== void 0 || be("localSettings")?.proxyAuthHelper !== void 0);
  if (e) XGn(l1o());
  if (r) process.stderr.write(s);
}
var reason = "Error: the proxy setting named above is refused.";
function c1o() {
  let e = TH(),
    r = e !== void 0 && !b5(e.value);
  return C_(), r ? {
    reason: reason,
    kind: "lasting"
  } : null;
}
function u1o(e) {
  let r = Boolean(process.stderr.isTTY) || !ye();
  return O_n(a1o(e), () => r);
}
async function qEt(e) {
  let r = await Promise.resolve().then(qTt).then(() => Promise.all([oae(), _5()])).then(Rhr).then(d1o).then(() => u1o(e)).then(() => null, x2r),
    t = await Promise.resolve().then(c1o).catch(x2r);
  return r ?? t;
}
export { a1o, l1o, d1o, c1o, u1o, qEt, f1o };