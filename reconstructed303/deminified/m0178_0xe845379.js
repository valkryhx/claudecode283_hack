// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { lre } from "B:/~BUN/root/chunk-fbyz9h0p.js";
import { we } from "B:/~BUN/root/chunk-rpez7z7a.js";
import { jE } from "B:/~BUN/root/chunk-psvhak2h.js";
import { Ms as trustAccepted } from "B:/~BUN/root/chunk-hb6x4e3n.js";
import { uI } from "B:/~BUN/root/chunk-gyr2a6wz.js";
import { nn } from "B:/~BUN/root/chunk-6a9s3k2y.js";
import { me } from "B:/~BUN/root/chunk-1gpjpba6.js";
import { eQ, N2, F2, H2, Sfn, wb } from "B:/~BUN/root/chunk-07c8fw5z.js";
import { por } from "B:/~BUN/root/chunk-krt3jtdp.js";
import { L$n } from "B:/~BUN/root/chunk-3d6wa55r.js";
import { wKt } from "B:/~BUN/root/chunk-8p94mdq6.js";
import { Brt } from "B:/~BUN/root/chunk-r3775t7n.js";
import { Mr } from "B:/~BUN/root/chunk-ef0msk7r.js";
var b6r = {};
Mr(b6r, {
  default: () => b6r,
  earlyCredentialsOf: () => m6r,
  hostProxyAuthConfigured: () => h6r,
  personProxyAuthHelper: () => g6r,
  proxyAgentsInstalled: () => y6r,
  sessionFactsRestored: () => rrt,
  signInRestored: () => _6r
});
function m6r(e) {
  return e?.backend !== void 0 && lre(e.configHome) ? jE(e?.backend) : void 0;
}
function g6r() {
  let e = me("policySettings")?.proxyAuthHelper,
    r = nn("userSettings") ? me("userSettings")?.proxyAuthHelper : void 0;
  return {
    helper: e ?? r,
    fromProjectOrLocal: e === void 0 && r !== void 0 && (me("projectSettings")?.proxyAuthHelper === r || me("localSettings")?.proxyAuthHelper === r),
    trustAccepted: trustAccepted,
    sources: "personAndPolicy"
  };
}
var s = `a proxy helper set by this project is not run by this command
`;
function h6r() {
  let e = uI(),
    t = e && Boolean(process.stderr.isTTY) && (me("projectSettings")?.proxyAuthHelper !== void 0 || me("localSettings")?.proxyAuthHelper !== void 0);
  if (e) Sfn(g6r());
  if (t) process.stderr.write(s);
}
var reason = "Error: the proxy setting named above is refused.";
function y6r() {
  let e = F2(),
    t = e !== void 0 && !H2(e.value);
  return wb(), t ? {
    reason: reason,
    kind: "lasting"
  } : null;
}
function _6r(e) {
  let t = Boolean(process.stderr.isTTY) || !we();
  return wKt(m6r(e), () => t);
}
async function rrt(e) {
  let t = await Promise.resolve().then(Brt).then(() => Promise.all([eQ(), N2()])).then(L$n).then(h6r).then(() => _6r(e)).then(() => null, por),
    r = await Promise.resolve().then(y6r).catch(por);
  return t ?? r;
}
export { m6r, g6r, h6r, y6r, _6r, rrt, b6r };