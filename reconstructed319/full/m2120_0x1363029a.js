// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  f
} from "B:/~BUN/root/chunk-drx9cnw1.js";
import {
  l
} from "B:/~BUN/root/chunk-mb9chr1y.js";
import {
  g
} from "B:/~BUN/root/chunk-3z3yrbk4.js";
import {
  jCe,
  t2e,
  wyo
} from "B:/~BUN/root/chunk-6j3fjnhn.js";
import {
  eL,
  gSi,
  mF
} from "B:/~BUN/root/chunk-27h4st9h.js";
import {
  c$
} from "B:/~BUN/root/chunk-x12sgt91.js";
import {
  hri
} from "B:/~BUN/root/chunk-rgmqpj32.js";
import {
  BY,
  D_n
} from "B:/~BUN/root/chunk-zh1rck2m.js";

function XGo(o, e, {
  trigger: n,
  offerBypass: a = !0
} = {}) {
  let t = JGo(o, e, {
    offerBypass: a
  });
  return {
    level: o,
    currentMode: e.mode,
    nextMode: t,
    context: c$(e.mode, t, e, n)
  }
}

function JGo(o, e, {
  offerBypass: n = !0
} = {}) {
  let a = wyo() !== void 0,
    t = e.mode === "plan" ? e.prePlanMode ?? "plan" : e.mode,
    i = jCe(o, {
      isAutoModeAvailable: BY(e),
      isBypassPermissionsModeAvailable: n && D_n(e) && (!a || t === "bypassPermissions")
    }, e.proactivityBaseline?.mode),
    r = e.proactivityBaseline?.mode,
    s = i === "acceptEdits" && r === "acceptEdits" ? r : mF(e) ? void 0 : t;
  return t2e(o, i, s) === void 0 ? i : "default"
}

function iri(o, e, n, {
  offerBypass: a = !0
} = {}) {
  let t;
  if (e((i) => {
      if (i.proactivityLevel === o) return i;
      let r = XGo(o, i.toolPermissionContext, {
        offerBypass: a
      });
      return t = {
        from: i.proactivityLevel,
        toMode: r.nextMode,
        modeChanged: r.nextMode !== r.currentMode
      }, {
        ...i,
        proactivityLevel: o,
        toolPermissionContext: {
          ...r.context,
          mode: r.nextMode,
          startupModeDecidedByProactivityLevel: void 0
        }
      }
    }), t === void 0) return;
  if (c(o, n, {
      source: "sdk_host",
      from: t.from,
      toMode: t.toMode
    }), t.modeChanged || gSi(t.from, o)) setImmediate(() => {
    eL.emit()
  })
}

function c(o, e, {
  source: n,
  from: a,
  toMode: t
}) {
  hri(o, e), l("tengu_proactivity_cycle", {
    level: f(o),
    from: f(a),
    to_mode: f(t),
    source: f(n)
  }), g("proactivity_cycle")
}
export {
  XGo,
  JGo,
  iri
};
