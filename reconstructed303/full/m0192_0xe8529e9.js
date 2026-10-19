// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.303
import {
  j,
  cet
} from "B:/~BUN/root/chunk-rpez7z7a.js";
import {
  W
} from "B:/~BUN/root/chunk-hg8ngszx.js";
import {
  z
} from "B:/~BUN/root/chunk-4bx17ygx.js";
import {
  Wje,
  ue,
  Wht
} from "B:/~BUN/root/chunk-hb6x4e3n.js";
import {
  yi
} from "B:/~BUN/root/chunk-6a9s3k2y.js";
import {
  e_t,
  fBt,
  lne,
  VD,
  TW,
  cne
} from "B:/~BUN/root/chunk-1gpjpba6.js";
import {
  pun,
  fun
} from "B:/~BUN/root/chunk-vr6ev6st.js";
import {
  Dae
} from "B:/~BUN/root/chunk-429xgjya.js";
import {
  b$s
} from "B:/~BUN/root/chunk-x4cafbxn.js";
import {
  FIr
} from "B:/~BUN/root/chunk-aap3xx9k.js";
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
var p = new z(() => new s);

function l() {
  return p.of(j().host)
}
async function xFt(t) {
  if (!l().claimSettingsLoad()) return;
  FIr();
  let e = W() ? t?.backend : void 0;
  if (W() && e !== void 0) {
    let [{
      seedUserSettings: o
    }, {
      primeWindowsCredManBackendEnabled: i
    }, {
      primeRemoteManagedSettingsCache: a
    }, {
      primeWorkspaceRoots: r
    }] = await Promise.all([import("B:/~BUN/root/chunk-atm8ffmz.js"), import("B:/~BUN/root/chunk-x8a5phqz.js"), import("B:/~BUN/root/chunk-azzqr96e.js"), import("B:/~BUN/root/chunk-rf3q946y.js")]);
    await r(e), await Promise.all([Wht(e), o(e, yi())]), i(ue().cachedGrowthBookFeatures?.tengu_windows_credman === !0), await a(e)
  } else await Wht();
  if (await e_t(), pun(), await fun(), W() && e !== void 0) {
    let [{
      credentialsStoreFor: o
    }, {
      primeFileDescriptorCredentials: i
    }, {
      primeStoredLoginCopy: a
    }] = await Promise.all([import("B:/~BUN/root/chunk-1e521atc.js"), import("B:/~BUN/root/chunk-1a09thxp.js"), import("B:/~BUN/root/chunk-nnhd4yzs.js")]), r = o(e);
    if (r !== void 0) await i(r, {
      bgAuthSnapshot: "leave"
    }), await a(r)
  }
  cet(Wje), Dae();
  let n = b$s();
  if (n) process.stderr.write(`${n}
`), process.exit(1)
}
async function aKn() {
  let t = l();
  if (t.helperResult) return t.helperResult.error;
  let e = t.beginHelperRun();
  if (e.error = await fBt(VD(), TW(), cne()), lne()) Dae();
  return e.error
}
async function mPo(t) {
  return await xFt(t), aKn()
}
export {
  xFt,
  aKn,
  mPo
};
