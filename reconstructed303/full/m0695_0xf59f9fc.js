// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.303
import {
  m
} from "B:/~BUN/root/chunk-kzgf20y6.js";
import {
  t
} from "B:/~BUN/root/chunk-6za2ez23.js";
import {
  oo
} from "B:/~BUN/root/chunk-k9zm82w3.js";
import {
  KOr,
  CM,
  lg,
  Sqn,
  wqn,
  DS,
  FX,
  Ame,
  K1e,
  hmt,
  zj,
  kx,
  Zee,
  _mt,
  vqn,
  Rae,
  Od,
  ww,
  nin,
  ZNt
} from "B:/~BUN/root/chunk-8y0chnnr.js";
import {
  ZAr
} from "B:/~BUN/root/chunk-1g2t7gtx.js";

function vue(e, r) {
  let o = ww(e, r);
  return typeof o === "string" ? o : null
}

function MMn(e, {
  model: r,
  getAppState: o,
  setAppState: s
}) {
  if (!ZAr()) return m("bridge_flag_settings", "disabled"), {
    ok: !1,
    error: "apply_flag_settings: effort changes over Remote Control are turned off"
  };
  let f, n, d = !1;
  if ("effortLevel" in e && !wqn(r, e.effortLevel, o())) {
    if (d = !0, e.effortLevel != null) {
      let u = zj(e.effortLevel) ?? K1e(e.effortLevel);
      if (typeof u !== "string" || !DS(u)) return m("bridge_flag_settings", "invalid_effort_level"), {
        ok: !1,
        error: "apply_flag_settings: unrecognized effortLevel"
      };
      f = u, n = FX(u, r)
    }
    let p = kx();
    if (p !== void 0 && n !== p) return m("bridge_flag_settings", "env_override"), {
      ok: !1,
      error: "apply_flag_settings: CLAUDE_CODE_EFFORT_LEVEL overrides effort for this session"
    }
  }
  let c = Ame(e.effortLevel) === "ultracode",
    a = "ultracode" in e ? e.ultracode === !0 : void 0;
  if ((a === !0 || a === void 0 && c) && !CM(r)) return m("bridge_flag_settings", "ultracode_unavailable"), {
    ok: !1,
    error: `apply_flag_settings: ultracode is not available for this session (${CM()?`${r} does not support it`:"dynamic workflows are off"})`
  };
  s((p) => {
    let u = d && !c && Sqn(r, p, f),
      i = p;
    if (d) {
      let g = _mt(n);
      if (!Rae(i.sessionEffort, g)) i = {
        ...i,
        sessionEffort: g
      }
    }
    if (a === void 0) {
      if (c) {
        if (!i.ultracode) i = {
          ...i,
          ultracode: !0
        }
      } else if (u && i.ultracode) i = {
        ...i,
        ultracode: !1
      }
    } else if ((i.ultracode ?? !1) !== a) i = {
      ...i,
      ultracode: a
    };
    return i
  });
  let l = o();
  return t(`[bridge] apply_flag_settings applied effort=${Od(l)??"auto"} ultracode=${l.ultracode===!0}`), {
    ok: !0
  }
}

function hcs(e, {
  getAppState: r,
  setAppState: o,
  latch: s
}) {
  let f = hmt(e.trim()).level,
    n = f === void 0 ? void 0 : KOr(f);
  if (n === void 0) return {
    ok: !1,
    error: "unrecognized effort"
  };
  let d = Ame(f) === "ultracode",
    c = !d && s.seedSetUltracode;
  return s.seedSetUltracode = d, o((a) => {
    let l = a;
    if (!Rae(a.sessionEffort, Zee(n))) l = {
      ...l,
      sessionEffort: Zee(n)
    };
    if (d && !l.ultracode) l = {
      ...l,
      ultracode: !0
    };
    else if (c && l.ultracode) l = {
      ...l,
      ultracode: !1
    };
    return l
  }), t(`[bridge] effort seeded effort=${Od(r())??"auto"} ultracode=${r().ultracode===!0}`), {
    ok: !0
  }
}

function bit({
  level: e,
  ultracodeActive: r,
  requestId: o
}) {
  let s = E();
  if (!s || !ZAr()) return;
  let f = oo(),
    n = {};
  if (e !== void 0) {
    if (f.lastKnownEffort = e, f.lastReportedEffort !== e) f.lastReportedEffort = e, n.effort_level = e
  }
  if (r !== void 0) {
    if (f.lastKnownUltracodeActive = r, f.lastReportedUltracodeActive !== r) f.lastReportedUltracodeActive = r, n.is_ultracode_active = r || null
  }
  if (o !== void 0) f.lastKnownEffortRequestId = o, n.effort_request_id = o;
  if (Object.keys(n).length > 0) s.reportMetadata(n)
}

function ese(e, r) {
  if (!E()) return;
  let o = nin(e, Od(r, e) ?? ZNt(e));
  bit({
    level: o === void 0 ? null : vue(e, o),
    ultracodeActive: lg(r.ultracode, e)
  })
}

function DMn(e) {
  bit({
    requestId: vqn(e)
  })
}

function E() {
  let e = oo(),
    r = e.replHandle ?? e.sdkHostedHandle;
  return r && !r.outboundOnly ? r : null
}

function ycs() {
  let e = oo();
  e.lastReportedEffort = void 0, e.lastReportedUltracodeActive = void 0, bit({
    level: e.lastKnownEffort,
    ultracodeActive: e.lastKnownUltracodeActive,
    requestId: e.lastKnownEffortRequestId
  })
}
export {
  vue,
  MMn,
  hcs,
  bit,
  ese,
  DMn,
  ycs
};
