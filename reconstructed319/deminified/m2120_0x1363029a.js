// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { f } from "B:/~BUN/root/chunk-drx9cnw1.js";
import { l } from "B:/~BUN/root/chunk-mb9chr1y.js";
import { g } from "B:/~BUN/root/chunk-3z3yrbk4.js";
import { jCe, t2e, wyo } from "B:/~BUN/root/chunk-6j3fjnhn.js";
import { eL, gSi, mF } from "B:/~BUN/root/chunk-27h4st9h.js";
import { c$ } from "B:/~BUN/root/chunk-x12sgt91.js";
import { hri } from "B:/~BUN/root/chunk-rgmqpj32.js";
import { BY, D_n } from "B:/~BUN/root/chunk-zh1rck2m.js";
function XGo(level, e, {
  trigger: trigger,
  offerBypass = !0
} = {}) {
  let nextMode = JGo(level, e, {
    offerBypass: offerBypass
  });
  return {
    level: level,
    currentMode: e.mode,
    nextMode: nextMode,
    context: c$(e.mode, nextMode, e, trigger)
  };
}
function JGo(o, e, {
  offerBypass: offerBypass_2 = !0
} = {}) {
  let a = wyo() !== void 0,
    t = e.mode === "plan" ? e.prePlanMode ?? "plan" : e.mode,
    i = jCe(o, {
      isAutoModeAvailable: BY(e),
      isBypassPermissionsModeAvailable: offerBypass_2 && D_n(e) && (!a || t === "bypassPermissions")
    }, e.proactivityBaseline?.mode),
    r = e.proactivityBaseline?.mode,
    s = i === "acceptEdits" && r === "acceptEdits" ? r : mF(e) ? void 0 : t;
  return t2e(o, i, s) === void 0 ? i : "default";
}
function iri(proactivityLevel, e, n, {
  offerBypass: offerBypass_3 = !0
} = {}) {
  let t;
  if (e(i => {
    if (i.proactivityLevel === proactivityLevel) return i;
    let r = XGo(proactivityLevel, i.toolPermissionContext, {
      offerBypass: offerBypass_3
    });
    return t = {
      from: i.proactivityLevel,
      toMode: r.nextMode,
      modeChanged: r.nextMode !== r.currentMode
    }, {
      ...i,
      proactivityLevel: proactivityLevel,
      toolPermissionContext: {
        ...r.context,
        mode: r.nextMode,
        startupModeDecidedByProactivityLevel: void 0
      }
    };
  }), t === void 0) return;
  if (c(proactivityLevel, n, {
    source: "sdk_host",
    from: t.from,
    toMode: t.toMode
  }), t.modeChanged || gSi(t.from, proactivityLevel)) setImmediate(() => {
    eL.emit();
  });
}
function c(o, e, {
  source: source,
  from: a,
  toMode: toMode
}) {
  hri(o, e), l("tengu_proactivity_cycle", {
    level: f(o),
    from: f(a),
    to_mode: f(toMode),
    source: f(source)
  }), g("proactivity_cycle");
}
export { XGo, JGo, iri };