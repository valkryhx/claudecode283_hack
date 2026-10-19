// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { c } from "B:/~BUN/root/chunk-jthpk6wv.js";
import { i } from "B:/~BUN/root/chunk-1kfn24jp.js";
import { g } from "B:/~BUN/root/chunk-kzgf20y6.js";
import { Eme, rIe, XOr } from "B:/~BUN/root/chunk-8y0chnnr.js";
import { $L, D0 } from "B:/~BUN/root/chunk-62ynkm2y.js";
import { wgs, nM } from "B:/~BUN/root/chunk-9grc6xh0.js";
import { $Zo } from "B:/~BUN/root/chunk-jsehn1zp.js";
import { _z, c4t } from "B:/~BUN/root/chunk-6azkz4wv.js";
function D8r(level, e, {
  trigger: trigger,
  offerBypass = !0
} = {}) {
  let nextMode = L8r(level, e, {
    offerBypass: offerBypass
  });
  return {
    level: level,
    currentMode: e.mode,
    nextMode: nextMode,
    context: D0(e.mode, nextMode, e, trigger)
  };
}
function L8r(o, e, {
  offerBypass: offerBypass_2 = !0
} = {}) {
  let s = XOr() !== void 0,
    t = e.mode === "plan" ? e.prePlanMode ?? "plan" : e.mode,
    r = Eme(o, {
      isAutoModeAvailable: _z(e),
      isBypassPermissionsModeAvailable: offerBypass_2 && c4t(e) && (!s || t === "bypassPermissions")
    }, e.proactivityBaseline?.mode),
    n = e.proactivityBaseline?.mode,
    d = r === "acceptEdits" && n === "acceptEdits" ? n : nM(e) ? void 0 : t;
  return rIe(o, r, d) === void 0 ? r : "default";
}
function NZo(proactivityLevel, e, a, {
  offerBypass: offerBypass_3 = !0
} = {}) {
  let t;
  if (e(r => {
    if (r.proactivityLevel === proactivityLevel) return r;
    let n = D8r(proactivityLevel, r.toolPermissionContext, {
      offerBypass: offerBypass_3
    });
    return t = {
      from: r.proactivityLevel,
      toMode: n.nextMode,
      modeChanged: n.nextMode !== n.currentMode
    }, {
      ...r,
      proactivityLevel: proactivityLevel,
      toolPermissionContext: {
        ...n.context,
        mode: n.nextMode,
        startupModeDecidedByProactivityLevel: void 0
      }
    };
  }), t === void 0) return;
  if (m(proactivityLevel, a, {
    source: "sdk_host",
    from: t.from,
    toMode: t.toMode
  }), t.modeChanged || wgs(t.from, proactivityLevel)) setImmediate(() => {
    $L.emit();
  });
}
function m(o, e, {
  source: source,
  from: s,
  toMode: toMode
}) {
  $Zo(o, e), i("tengu_proactivity_cycle", {
    level: c(o),
    from: c(s),
    to_mode: c(toMode),
    source: c(source)
  }), g("proactivity_cycle");
}
export { D8r, L8r, NZo };