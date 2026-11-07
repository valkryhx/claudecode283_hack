// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  H,
  Bwt
} from "B:/~BUN/root/chunk-game8aqv.js";
import {
  W
} from "B:/~BUN/root/chunk-ppmmt0c3.js";
import {
  fe,
  q$t
} from "B:/~BUN/root/chunk-1ks9vs37.js";
import {
  Xo
} from "B:/~BUN/root/chunk-6n5g80b8.js";
import {
  wKe,
  Dan,
  _pe,
  yH,
  $4,
  NJ
} from "B:/~BUN/root/chunk-7wn6n2hd.js";
import {
  DWn,
  LWn
} from "B:/~BUN/root/chunk-f7w7sw0m.js";
import {
  SKe
} from "B:/~BUN/root/chunk-qfq22jk9.js";
import {
  tfe
} from "B:/~BUN/root/chunk-m749kjym.js";
import {
  vVi
} from "B:/~BUN/root/chunk-mvm578ts.js";
import {
  Xyo
} from "B:/~BUN/root/chunk-hhwh1mxh.js";
import {
  X
} from "B:/~BUN/root/chunk-g9pw24zp.js";
class s {
  settingsLoaded = !1;
  helperResult = null;
  claimSettingsLoad() {
    if (this.settingsLoaded) return !1;
    return this.settingsLoaded = !0, !0
  }
  beginHelperRun() {
    return this.helperResult = {
      error: null
    }, this.helperResult
  }
}
var p = new W(() => new s);

function l() {
  return p.of(H().host)
}
async function $nn(t) {
  if (!l().claimSettingsLoad()) return;
  Xyo();
  let e = X() ? t?.backend : void 0;
  if (X() && e !== void 0) {
    let [{
      seedUserSettings: o
    }, {
      primeWindowsCredManBackendEnabled: i
    }, {
      primeRemoteManagedSettingsCache: a
    }, {
      primeWorkspaceRoots: r
    }] = await Promise.all([import("B:/~BUN/root/chunk-xdjptrh9.js"), import("B:/~BUN/root/chunk-0sn8ktem.js"), import("B:/~BUN/root/chunk-k3f4g1rq.js"), import("B:/~BUN/root/chunk-gzk9mzqv.js")]);
    await r(e), await Promise.all([q$t(e), o(e, Xo())]), i(fe().cachedGrowthBookFeatures?.tengu_windows_credman === !0), await a(e)
  } else await q$t();
  if (await wKe(), DWn(), await LWn(), X() && e !== void 0) {
    let [{
      credentialsStoreFor: o
    }, {
      primeFileDescriptorCredentials: i
    }, {
      primeStoredLoginCopy: a
    }] = await Promise.all([import("B:/~BUN/root/chunk-kkxrcrpx.js"), import("B:/~BUN/root/chunk-ny6s0nvt.js"), import("B:/~BUN/root/chunk-zcjq31as.js")]), r = o(e);
    if (r !== void 0) await i(r, {
      bgAuthSnapshot: "leave"
    }), await a(r)
  }
  Bwt(SKe), tfe();
  let n = vVi();
  if (n) process.stderr.write(`${n}
`), process.exit(1)
}
async function KRr() {
  let t = l();
  if (t.helperResult) return t.helperResult.error;
  let e = t.beginHelperRun();
  if (e.error = await Dan(yH(), $4(), NJ()), _pe()) tfe();
  return e.error
}
async function GTs(t) {
  return await $nn(t), KRr()
}
export {
  $nn,
  KRr,
  GTs
};
