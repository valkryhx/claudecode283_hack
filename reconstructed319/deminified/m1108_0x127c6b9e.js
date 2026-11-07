// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { d } from "B:/~BUN/root/chunk-y2g9f85n.js";
import { we } from "B:/~BUN/root/chunk-r5zmhp23.js";
import { t } from "B:/~BUN/root/chunk-2pp12te6.js";
import { p } from "B:/~BUN/root/chunk-z6138ats.js";
import { _pe, yH } from "B:/~BUN/root/chunk-7wn6n2hd.js";
import { zx, Sc, Kl, GS, PVe, ms, Xsn, OVe, QRe } from "B:/~BUN/root/chunk-1ks9vs37.js";
import { qEt } from "B:/~BUN/root/chunk-qe13x650.js";
import { AI, lft, Zw, $Jt } from "B:/~BUN/root/chunk-sa4785jr.js";
import { WWe, rIn, Fda, $da, aft, _lo } from "B:/~BUN/root/chunk-ybkgfvgz.js";
import { gL } from "B:/~BUN/root/chunk-q82am8wz.js";
import { o, oe, u, me } from "B:/~BUN/root/chunk-4bfd0jkf.js";
import { Rr } from "B:/~BUN/root/chunk-4qfwb3rf.js";
var i1o = {};
Rr(i1o, {
  IS_WORKTREE_LAUNCH: () => M9n,
  SAVE_FAILURE: () => j9n,
  SIGN_IN_MARGIN_MS: () => N9n,
  default: () => i1o,
  earlyFetchVetoed: () => L9n,
  fetchRefreshesSignIn: () => H9n,
  flagClientQuieted: () => $9n,
  isSavedSwitchOf: () => B9n,
  pluginTestFormOf: () => r1o,
  pluginTestGatesOf: () => o1o,
  pluginTestRefusal: () => s1o,
  savedFlags: () => U9n,
  sessionHoldsEarlyFetch: () => D9n,
  signInNearsExpiry: () => F9n,
  switchFetched: () => z9n,
  switchSaveSettled: () => W9n
});
function r1o(e) {
  let r = e[0] === "--file",
    s = e.some(item => item.startsWith("-"));
  return r ? "file" : s ? "other" : "run";
}
var M9n = !1;
async function D9n() {
  let e = yH();
  return _pe() || e?.policyHelpers != null || e?.policyHelper != null || import("B:/~BUN/root/chunk-xh3ae06w.js").then(r => r.pendingSettingsEnvBlocksEarlyGb(M9n));
}
var L9n = () => Promise.resolve().then(D9n).catch(() => !0);
var N9n = 60000;
async function F9n() {
  let e = await Kl();
  return e !== null && zx(e.expiresAt, Date.now() + N9n);
}
var H9n = () => Promise.resolve().then(() => Sc() || F9n()).catch(() => !0);
function $9n() {
  if (PVe()) ms().then(Xsn, Xsn);
}
var U9n = p(() => u({
  cachedGrowthBookFeatures: me(o(), oe()).optional()
}));
function B9n(e) {
  let r = U9n().safeParse(e),
    s = r.success ? r.data.cachedGrowthBookFeatures?.[GS] : void 0;
  return typeof s === "boolean" ? s : AI;
}
var j9n = "the rollout switch was fetched, but its value could not be saved for the test files to read: the settings file is busy or cannot be written. Run the tests again";
async function W9n() {
  return await we(OVe(), gL), rIn() && Zw() && !_lo() && !B9n(await QRe(void 0)) ? j9n : null;
}
var z9n = () => $da().finally($9n).then(W9n).catch(e => (t("claude plugin test: the hold for the rollout flag failed: " + d(e), {
  level: "error"
}), null));
async function o1o({
  helperError: helperError,
  form: form,
  envPin: envPin
}) {
  if (form === "file") Fda();
  let i = helperError === null && form === "run",
    n = i ? (await qEt(envPin))?.reason ?? null : helperError,
    a = i && n === null && !rIn() && !(await L9n()) && !(await H9n()) ? await z9n() : null;
  return await lft(), {
    helperError: n ?? a,
    isRolloutOn: Zw(),
    isSwitchSaved: WWe(),
    canLoadUserModules: $Jt()
  };
}
function s1o({
  helperError: helperError_2,
  isRolloutOn: isRolloutOn,
  isSwitchSaved: isSwitchSaved,
  canLoadUserModules: canLoadUserModules
}) {
  if (helperError_2 !== null) return helperError_2;
  if (!isRolloutOn) return isSwitchSaved ? `hooks modules are turned off in this process: ${aft.saved}. Start \`claude\` once with network access, then run the tests again; if this message returns, installed mods are turned off remotely` : `hooks modules are turned off in this process: ${aft.served}, and a plugin's tests run only while it is on`;
  return canLoadUserModules ? void 0 : "hooks modules are turned off here (disableAllHooks, allowManagedHooksOnly or a policy)";
}
export { r1o, M9n, D9n, L9n, N9n, F9n, H9n, $9n, U9n, B9n, j9n, W9n, z9n, o1o, s1o, i1o };