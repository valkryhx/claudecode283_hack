// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { m } from "B:/~BUN/root/chunk-3z3yrbk4.js";
import { t } from "B:/~BUN/root/chunk-2pp12te6.js";
import { _o } from "B:/~BUN/root/chunk-rr294jrm.js";
import { byo, UF, wg, dRr, cRr, Dv, xse, GCe, rQe, aFt, n4, kw, Xue, cFt, fRr, Pse, xl, Kg, kHn, pFt } from "B:/~BUN/root/chunk-6j3fjnhn.js";
import { Apo } from "B:/~BUN/root/chunk-jmka9ye7.js";
function Ave(e, r) {
  let o = Kg(e, r);
  return typeof o === "string" ? o : null;
}
function far(e, {
  model: model,
  getAppState: getAppState,
  setAppState: setAppState
}) {
  if (!Apo()) return m("bridge_flag_settings", "disabled"), {
    ok: !1,
    error: "apply_flag_settings: effort changes over Remote Control are turned off"
  };
  let f,
    n,
    d = !1;
  if ("effortLevel" in e && !cRr(model, e.effortLevel, getAppState())) {
    if (d = !0, e.effortLevel != null) {
      let u = n4(e.effortLevel) ?? rQe(e.effortLevel);
      if (typeof u !== "string" || !Dv(u)) return m("bridge_flag_settings", "invalid_effort_level"), {
        ok: !1,
        error: "apply_flag_settings: unrecognized effortLevel"
      };
      f = u, n = xse(u, model);
    }
    let p = kw();
    if (p !== void 0 && n !== p) return m("bridge_flag_settings", "env_override"), {
      ok: !1,
      error: "apply_flag_settings: CLAUDE_CODE_EFFORT_LEVEL overrides effort for this session"
    };
  }
  let c = GCe(e.effortLevel) === "ultracode",
    ultracode = "ultracode" in e ? e.ultracode === !0 : void 0;
  if ((ultracode === !0 || ultracode === void 0 && c) && !UF(model)) return m("bridge_flag_settings", "ultracode_unavailable"), {
    ok: !1,
    error: `apply_flag_settings: ultracode is not available for this session (${UF() ? `${model} does not support it` : "dynamic workflows are off"})`
  };
  setAppState(p => {
    let u = d && !c && dRr(model, p, f),
      i = p;
    if (d) {
      let sessionEffort = cFt(n);
      if (!Pse(i.sessionEffort, sessionEffort)) i = {
        ...i,
        sessionEffort: sessionEffort
      };
    }
    if (ultracode === void 0) {
      if (c) {
        if (!i.ultracode) i = {
          ...i,
          ultracode: !0
        };
      } else if (u && i.ultracode) i = {
        ...i,
        ultracode: !1
      };
    } else if ((i.ultracode ?? !1) !== ultracode) i = {
      ...i,
      ultracode: ultracode
    };
    return i;
  });
  let l = getAppState();
  return t(`[bridge] apply_flag_settings applied effort=${xl(l) ?? "auto"} ultracode=${l.ultracode === !0}`), {
    ok: !0
  };
}
function _mi(e, {
  getAppState: getAppState_2,
  setAppState: setAppState_2,
  latch: latch
}) {
  let level = aFt(e.trim()).level,
    n = level === void 0 ? void 0 : byo(level);
  if (n === void 0) return {
    ok: !1,
    error: "unrecognized effort"
  };
  let d = GCe(level) === "ultracode",
    c = !d && latch.seedSetUltracode;
  return latch.seedSetUltracode = d, setAppState_2(a => {
    let l = a;
    if (!Pse(a.sessionEffort, Xue(n))) l = {
      ...l,
      sessionEffort: Xue(n)
    };
    if (d && !l.ultracode) l = {
      ...l,
      ultracode: !0
    };else if (c && l.ultracode) l = {
      ...l,
      ultracode: !1
    };
    return l;
  }), t(`[bridge] effort seeded effort=${xl(getAppState_2()) ?? "auto"} ultracode=${getAppState_2().ultracode === !0}`), {
    ok: !0
  };
}
function jAt({
  level: level_2,
  ultracodeActive: ultracodeActive,
  requestId: requestId
}) {
  let s = E();
  if (!s || !Apo()) return;
  let f = _o(),
    n = {};
  if (level_2 !== void 0) {
    if (f.lastKnownEffort = level_2, f.lastReportedEffort !== level_2) f.lastReportedEffort = level_2, n.effort_level = level_2;
  }
  if (ultracodeActive !== void 0) {
    if (f.lastKnownUltracodeActive = ultracodeActive, f.lastReportedUltracodeActive !== ultracodeActive) f.lastReportedUltracodeActive = ultracodeActive, n.is_ultracode_active = ultracodeActive || null;
  }
  if (requestId !== void 0) f.lastKnownEffortRequestId = requestId, n.effort_request_id = requestId;
  if (Object.keys(n).length > 0) s.reportMetadata(n);
}
function tde(e, r) {
  if (!E()) return;
  let o = kHn(e, xl(r, e) ?? pFt(e));
  jAt({
    level: o === void 0 ? null : Ave(e, o),
    ultracodeActive: wg(r.ultracode, e)
  });
}
function par(e) {
  jAt({
    requestId: fRr(e)
  });
}
function E() {
  let e = _o(),
    r = e.replHandle ?? e.sdkHostedHandle;
  return r && !r.outboundOnly ? r : null;
}
function bmi() {
  let e = _o();
  e.lastReportedEffort = void 0, e.lastReportedUltracodeActive = void 0, jAt({
    level: e.lastKnownEffort,
    ultracodeActive: e.lastKnownUltracodeActive,
    requestId: e.lastKnownEffortRequestId
  });
}
export { Ave, far, _mi, jAt, tde, par, bmi };