// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.303
import {
  d
} from "B:/~BUN/root/chunk-3aez4b53.js";
import {
  je
} from "B:/~BUN/root/chunk-89mss1tj.js";
import {
  t
} from "B:/~BUN/root/chunk-6za2ez23.js";
import {
  f
} from "B:/~BUN/root/chunk-frrkt2bs.js";
import {
  lne,
  VD
} from "B:/~BUN/root/chunk-1gpjpba6.js";
import {
  zT,
  pc,
  Xa,
  Ky,
  _Me,
  Qi,
  X$t,
  jht,
  LJe
} from "B:/~BUN/root/chunk-hb6x4e3n.js";
import {
  rrt
} from "B:/~BUN/root/chunk-wztyk9xm.js";
import {
  GR,
  E3e,
  y_,
  qvr
} from "B:/~BUN/root/chunk-s6jt7ap6.js";
import {
  iPe,
  uZt,
  PXs,
  IXs,
  k3e,
  jvr
} from "B:/~BUN/root/chunk-57vwkt3t.js";
import {
  pK
} from "B:/~BUN/root/chunk-p95zaxtt.js";
import {
  o,
  oe,
  u,
  fe
} from "B:/~BUN/root/chunk-g3snhg6n.js";
import {
  Mr
} from "B:/~BUN/root/chunk-ef0msk7r.js";
var f6r = {};
Mr(f6r, {
  IS_WORKTREE_LAUNCH: () => ikn,
  SAVE_FAILURE: () => gkn,
  SIGN_IN_MARGIN_MS: () => dkn,
  default: () => f6r,
  earlyFetchVetoed: () => lkn,
  fetchRefreshesSignIn: () => ukn,
  flagClientQuieted: () => pkn,
  isSavedSwitchOf: () => mkn,
  pluginTestFormOf: () => c6r,
  pluginTestGatesOf: () => u6r,
  pluginTestRefusal: () => p6r,
  savedFlags: () => fkn,
  sessionHoldsEarlyFetch: () => akn,
  signInNearsExpiry: () => ckn,
  switchFetched: () => ykn,
  switchSaveSettled: () => hkn
});

function c6r(e) {
  let r = e[0] === "--file",
    s = e.some((i) => i.startsWith("-"));
  return r ? "file" : s ? "other" : "run"
}
var ikn = !1;
async function akn() {
  let e = VD();
  return lne() || e?.policyHelpers != null || e?.policyHelper != null || import("B:/~BUN/root/chunk-rhyvv3pf.js").then((r) => r.pendingSettingsEnvBlocksEarlyGb(ikn))
}
var lkn = () => Promise.resolve().then(akn).catch(() => !0);
var dkn = 60000;
async function ckn() {
  let e = await Xa();
  return e !== null && zT(e.expiresAt, Date.now() + dkn)
}
var ukn = () => Promise.resolve().then(() => pc() || ckn()).catch(() => !0);

function pkn() {
  if (_Me()) Qi().then(X$t, X$t)
}
var fkn = f(() => u({
  cachedGrowthBookFeatures: fe(o(), oe()).optional()
}));

function mkn(e) {
  let r = fkn().safeParse(e),
    s = r.success ? r.data.cachedGrowthBookFeatures?.[Ky] : void 0;
  return typeof s === "boolean" ? s : GR
}
var gkn = "the rollout switch was fetched, but its value could not be saved for the test files to read: the settings file is busy or cannot be written. Run the tests again";
async function hkn() {
  return await je(jht(), pK), uZt() && y_() && !jvr() && !mkn(await LJe(void 0)) ? gkn : null
}
var ykn = () => IXs().finally(pkn).then(hkn).catch((e) => (t("claude plugin test: the hold for the rollout flag failed: " + d(e), {
  level: "error"
}), null));
async function u6r({
  helperError: e,
  form: r,
  envPin: s
}) {
  if (r === "file") PXs();
  let i = e === null && r === "run",
    n = i ? (await rrt(s))?.reason ?? null : e,
    a = i && n === null && !uZt() && !await lkn() && !await ukn() ? await ykn() : null;
  return await E3e(), {
    helperError: n ?? a,
    isRolloutOn: y_(),
    isSwitchSaved: iPe(),
    canLoadUserModules: qvr()
  }
}

function p6r({
  helperError: e,
  isRolloutOn: r,
  isSwitchSaved: s,
  canLoadUserModules: i
}) {
  if (e !== null) return e;
  if (!r) return s ? `hooks modules are turned off in this process: ${k3e.saved}. Start \`claude\` once with network access, then run the tests again; if this message returns, installed mods are turned off remotely` : `hooks modules are turned off in this process: ${k3e.served}, and a plugin's tests run only while it is on`;
  return i ? void 0 : "hooks modules are turned off here (disableAllHooks, allowManagedHooksOnly or a policy)"
}
export {
  c6r,
  ikn,
  akn,
  lkn,
  dkn,
  ckn,
  ukn,
  pkn,
  fkn,
  mkn,
  gkn,
  hkn,
  ykn,
  u6r,
  p6r,
  f6r
};
