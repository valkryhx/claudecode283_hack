// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { m } from "B:/~BUN/root/chunk-51n463p1.js";
import { t } from "B:/~BUN/root/chunk-qe2zga5e.js";
import { Kr } from "B:/~BUN/root/chunk-1rjcv085.js";
import { j2n, fx, Lk, sq, WHe, xct, w6e, iN, $F, UF, v6e, RX, ql, Aw, scn } from "B:/~BUN/root/chunk-t1afcev5.js";
import { Njn } from "B:/~BUN/root/chunk-x8507144.js";
function ZQ(e, o) {
  let n = Aw(e, o);
  return typeof n === "string" ? n : null;
}
function yKt(e, {
  model: model,
  getAppState: getAppState,
  setAppState: setAppState
}) {
  if (!Njn()) return m("bridge_flag_settings", "disabled"), {
    ok: !1,
    error: "apply_flag_settings: effort changes over Remote Control are turned off"
  };
  let i,
    l = !1;
  if ("effortLevel" in e) {
    if (l = !0, e.effortLevel != null) {
      let r = iN(e.effortLevel) ?? xct(e.effortLevel);
      if (typeof r !== "string" || !Lk(r)) return m("bridge_flag_settings", "invalid_effort_level"), {
        ok: !1,
        error: "apply_flag_settings: unrecognized effortLevel"
      };
      i = sq(r, model);
    }
    let f = $F();
    if (f !== void 0 && i !== f) return m("bridge_flag_settings", "env_override"), {
      ok: !1,
      error: "apply_flag_settings: CLAUDE_CODE_EFFORT_LEVEL overrides effort for this session"
    };
  }
  let s = WHe(e.effortLevel) === "ultracode",
    a = "ultracode" in e ? e.ultracode === !0 : void 0;
  if ((a === !0 || a === void 0 && s) && !fx(model)) return m("bridge_flag_settings", "ultracode_unavailable"), {
    ok: !1,
    error: "apply_flag_settings: ultracode is not available for this session (dynamic workflows are off, the model does not support xhigh effort, or an effort cap set by your settings or organization excludes it)"
  };
  setAppState(f => {
    let r = f;
    if (l) {
      let sessionEffort = v6e(i);
      if (!RX(r.sessionEffort, sessionEffort)) r = {
        ...r,
        sessionEffort: sessionEffort
      };
    }
    if (a === void 0) {
      if (s) {
        if (!r.ultracode) r = {
          ...r,
          ultracode: !0
        };
      } else if (l && r.ultracode) r = {
        ...r,
        ultracode: !1
      };
    } else if (a) {
      if (!r.ultracode || ql(r) !== "xhigh") r = {
        ...r,
        ultracode: !0,
        sessionEffort: UF("xhigh")
      };
    } else if (r.ultracode) r = {
      ...r,
      ultracode: !1
    };
    return r;
  });
  let d = getAppState();
  return t(`[bridge] apply_flag_settings applied effort=${ql(d) ?? "auto"} ultracode=${d.ultracode === !0}`), {
    ok: !0
  };
}
function d7r(e, {
  getAppState: getAppState_2,
  setAppState: setAppState_2,
  latch: latch
}) {
  let level = w6e(e.trim()).level,
    l = level === void 0 ? void 0 : j2n(level);
  if (l === void 0) return {
    ok: !1,
    error: "unrecognized effort"
  };
  let s = WHe(level) === "ultracode",
    a = !s && latch.seedSetUltracode;
  return latch.seedSetUltracode = s, setAppState_2(d => {
    let f = d;
    if (!RX(d.sessionEffort, UF(l))) f = {
      ...f,
      sessionEffort: UF(l)
    };
    if (s && !f.ultracode) f = {
      ...f,
      ultracode: !0
    };else if (a && f.ultracode) f = {
      ...f,
      ultracode: !1
    };
    return f;
  }), t(`[bridge] effort seeded effort=${ql(getAppState_2()) ?? "auto"} ultracode=${getAppState_2().ultracode === !0}`), {
    ok: !0
  };
}
function p(effort_level) {
  let o = c();
  if (!o || !Njn()) return;
  let n = Kr();
  if (n.lastKnownEffort = effort_level, n.lastReportedEffort === effort_level) return;
  n.lastReportedEffort = effort_level, o.reportMetadata({
    effort_level: effort_level
  });
}
function M5(e, o) {
  if (!c()) return;
  let n = scn(e, ql(o, e));
  p(n === void 0 ? null : ZQ(e, n));
}
function c() {
  let e = Kr(),
    o = e.replHandle ?? e.sdkHostedHandle;
  return o && !o.outboundOnly ? o : null;
}
function u7r() {
  let e = Kr();
  if (e.lastReportedEffort = void 0, e.lastKnownEffort !== void 0) p(e.lastKnownEffort);
}
export { ZQ, yKt, d7r, M5, u7r };