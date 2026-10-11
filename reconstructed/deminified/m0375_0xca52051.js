// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { q, j, xBe } from "B:/~BUN/root/chunk-4rk7cwxz.js";
import { H } from "B:/~BUN/root/chunk-dkxhwhft.js";
import { uRe, le, DYe } from "B:/~BUN/root/chunk-gf53qpk6.js";
import { dl } from "B:/~BUN/root/chunk-290k5gh5.js";
import { O5e, Dpt, N5e, uY, Wq, mAe } from "B:/~BUN/root/chunk-3rzkfay5.js";
import { M$t, D$t } from "B:/~BUN/root/chunk-cwzv7tgb.js";
import { xX } from "B:/~BUN/root/chunk-ew8y0fm0.js";
import { wPo } from "B:/~BUN/root/chunk-jc084a1z.js";
import { eGn } from "B:/~BUN/root/chunk-4xy52d4k.js";
class s {
  settingsLoaded = !1;
  helperResult = null;
  claimSettingsLoad() {
    if (this.settingsLoaded) return !1;
    return this.settingsLoaded = !0, !0;
  }
  beginHelperRun() {
    return this.helperResult = {
      error: null
    }, this.helperResult;
  }
}
var p = new q(() => new s());
function l() {
  return p.of(j().host);
}
async function Hct(t) {
  if (!l().claimSettingsLoad()) return;
  eGn();
  let e = H() ? t?.backend : void 0;
  if (H() && e !== void 0) {
    let [{
      seedUserSettings: seedUserSettings
    }, {
      primeWindowsCredManBackendEnabled: primeWindowsCredManBackendEnabled
    }, {
      primeRemoteManagedSettingsCache: primeRemoteManagedSettingsCache
    }, {
      primeWorkspaceRoots: primeWorkspaceRoots
    }] = await Promise.all([import("B:/~BUN/root/chunk-rqt0vznh.js"), import("B:/~BUN/root/chunk-9v3cwr7d.js"), import("B:/~BUN/root/chunk-35321sta.js"), import("B:/~BUN/root/chunk-v0w1b0jk.js")]);
    await primeWorkspaceRoots(e), await Promise.all([DYe(e), seedUserSettings(e, dl())]), primeWindowsCredManBackendEnabled(le().cachedGrowthBookFeatures?.tengu_windows_credman === !0), await primeRemoteManagedSettingsCache(e);
  } else await DYe();
  if (await O5e(), M$t(), await D$t(), H() && e !== void 0) {
    let [{
        credentialsStoreFor: credentialsStoreFor
      }, {
        primeFileDescriptorCredentials: primeFileDescriptorCredentials
      }, {
        primeStoredLoginCopy: primeStoredLoginCopy
      }] = await Promise.all([import("B:/~BUN/root/chunk-1dvh6pxa.js"), import("B:/~BUN/root/chunk-8fkdmg9c.js"), import("B:/~BUN/root/chunk-3vayk698.js")]),
      r = credentialsStoreFor(e);
    if (r !== void 0) await primeFileDescriptorCredentials(r, {
      bgAuthSnapshot: "leave"
    }), await primeStoredLoginCopy(r);
  }
  xBe(uRe), xX();
  let n = wPo();
  if (n) process.stderr.write(`${n}
`), process.exit(1);
}
async function bcn() {
  let t = l();
  if (t.helperResult) return t.helperResult.error;
  let e = t.beginHelperRun();
  if (e.error = await Dpt(uY(), Wq(), mAe()), N5e()) xX();
  return e.error;
}
async function vMr(t) {
  return await Hct(t), bcn();
}
export { Hct, bcn, vMr };