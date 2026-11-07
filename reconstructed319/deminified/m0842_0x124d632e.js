// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { ls, Jgt, ZX, Vt } from "B:/~BUN/root/chunk-1ks9vs37.js";
import { t } from "B:/~BUN/root/chunk-2pp12te6.js";
import { a } from "B:/~BUN/root/chunk-xrwdh0g4.js";
import { us } from "B:/~BUN/root/chunk-8f4z6bdn.js";
import { XXt, fA, O9, _Z, rTe, UDe, aOn, QAi, Iut, xWe, JXt, Khr, txi } from "B:/~BUN/root/chunk-cxcakgnv.js";
var h = {
  announcement: void 0,
  advisorModel: void 0,
  advisorDeferred: !1,
  advisorActive: !1
};
function Joi(e, o, {
  querySource: querySource,
  resumeActive: resumeActive,
  configuredRuntimeModel: configuredRuntimeModel,
  runtimeOptionsModel: runtimeOptionsModel,
  carrier: carrier,
  toolChangesRide: toolChangesRide
}) {
  try {
    let i = typeof toolChangesRide === "function" ? toolChangesRide : () => toolChangesRide,
      p = ls(querySource),
      v = o.getAdvisorSetting(),
      l = p === "main" ? configuredRuntimeModel : runtimeOptionsModel,
      m = i(runtimeOptionsModel),
      c = JXt(e);
    if (resumeActive || p === "auxiliary") {
      let b = carrier?.advisorHeld ?? HQn(c) ?? _(v, l, configuredRuntimeModel, i(l)),
        C = b.model === void 0 && m && !b.refused ? {
          model: A(v, l, configuredRuntimeModel),
          viaToolChange: !0
        } : b;
      return H(S(C, m), c, l, configuredRuntimeModel);
    }
    let s = carrier?.advisorHeld;
    if (s === void 0) {
      if (s = HQn(c) ?? _(v, l, configuredRuntimeModel, i(l)), carrier !== void 0) carrier.advisorHeld = s;
    } else if (s.model === void 0 && m && !s.refused) {
      let model = A(v, l, configuredRuntimeModel);
      if (model !== void 0) {
        if (s = {
          model: model,
          viaToolChange: !0
        }, carrier !== void 0) carrier.advisorHeld = s;
      }
    }
    let F = S(s, m),
      q = s.viaToolChange && !m && s.inFallback !== !0,
      announcement = x(e, v, l, configuredRuntimeModel, F, q),
      N = s.model === void 0 || c !== void 0 || T(s.model, l, configuredRuntimeModel),
      B = m ? !1 : s.inFallback === !0 || N;
    if (carrier !== void 0 && s.viaToolChange && s.inFallback === !0 !== B) {
      let {
        inFallback: inFallback,
        ...C
      } = s;
      carrier.advisorHeld = B ? {
        ...C,
        inFallback: !0
      } : C;
    }
    let O = announcement === void 0 ? c : announcement.available ? {
      available: !0,
      model: announcement.model,
      toolChange: announcement.toolChange !== void 0,
      byBase: !1
    } : {
      available: !1,
      model: announcement.model,
      toolChange: announcement.toolChange !== void 0,
      byBase: announcement.byBase === !0
    };
    return {
      ...H(F, O, l, configuredRuntimeModel),
      announcement: announcement
    };
  } catch (error) {
    return a(error), h;
  }
}
function w(advisorModel, o, r) {
  return {
    announcement: void 0,
    advisorModel: advisorModel,
    advisorDeferred: advisorModel !== void 0 && o,
    advisorActive: advisorModel !== void 0 && r
  };
}
function H(e, o, r, u) {
  if (e.model === void 0 || !T(e.model, r, u)) return h;
  if (e.viaToolChange) return w(e.model, !0, o?.available === !0);
  if (e.standby && o === void 0) return h;
  if (o !== void 0 && !o.available && o.toolChange && !o.byBase) return h;
  return w(e.model, !1, !0);
}
function S(e, o) {
  return e.viaToolChange && !o ? {
    ...e,
    viaToolChange: !1
  } : e;
}
function HQn(e) {
  if (e === void 0) return;
  return {
    model: e.model,
    viaToolChange: e.toolChange
  };
}
function _(e, o, r, viaToolChange) {
  let model_2 = A(e, o, r);
  if (model_2 !== void 0 || !viaToolChange || e) return {
    model: model_2,
    viaToolChange: viaToolChange
  };
  let model_3 = P(o, r);
  return model_3 === void 0 ? {
    model: void 0,
    viaToolChange: !0
  } : {
    model: model_3,
    viaToolChange: !0,
    standby: !0
  };
}
function P(e, o) {
  if (!us() || !fA() || !O9(e)) return;
  let r = _Z(),
    u = [...r.filter(item => !k(item)), ...r.filter(item => k(item))];
  for (let d of u) {
    let f = A(d, e, o);
    if (f === void 0 || !QAi(e, f)) continue;
    if (Jgt(f)) return f;
    t(`[AdvisorTool] No standby advisor entry - this org is not known to serve ${f}`);
    return;
  }
  return;
}
function k(e) {
  return ZX(Vt(e));
}
function x(e, o, r, u, d, f = !1) {
  let n = JXt(e),
    g = d ?? HQn(n) ?? {
      model: A(o, r, u),
      viaToolChange: !1
    },
    model_4 = g.model,
    p = Khr(e) === "add";
  if (model_4 === void 0 || !T(model_4, r, u)) {
    let c = g.viaToolChange || f,
      s = fA() && Boolean(o);
    if (n?.available !== !0) {
      if (!c || model_4 === void 0 || n === void 0) return;
      if (n.byBase && !s) return {
        type: "advisor_tool",
        available: !1,
        model: model_4,
        toolChange: "remove"
      };
      if (n.toolChange && !n.byBase && s) return {
        type: "advisor_tool",
        available: !1,
        model: model_4,
        toolChange: "remove",
        byBase: !0
      };
      return;
    }
    if (model_4 === void 0) return {
      type: "advisor_tool",
      available: !1
    };
    if (!c) return {
      type: "advisor_tool",
      available: !1,
      model: model_4,
      byBase: !0
    };
    return s ? {
      type: "advisor_tool",
      available: !1,
      model: model_4,
      toolChange: "remove",
      byBase: !0
    } : {
      type: "advisor_tool",
      available: !1,
      model: model_4,
      toolChange: "remove"
    };
  }
  let v = txi(e);
  if (g.viaToolChange) {
    if (xWe(o, r) === void 0) return p || n?.available === !0 ? {
      type: "advisor_tool",
      available: !1,
      model: model_4,
      toolChange: "remove"
    } : void 0;
    if (p && n?.available !== !1) return v ? void 0 : {
      type: "advisor_tool",
      available: !0,
      model: model_4,
      toolChange: "add"
    };
    return v ? {
      type: "advisor_tool",
      available: !0,
      model: model_4,
      abbreviated: !0,
      toolChange: "add"
    } : {
      type: "advisor_tool",
      available: !0,
      model: model_4,
      toolChange: "add"
    };
  }
  let l = {
      type: "advisor_tool",
      available: !0,
      model: model_4
    },
    m = {
      ...l,
      abbreviated: !0
    };
  if (f) {
    if (xWe(o, r) === void 0) return n?.available === !0 || n !== void 0 && n.byBase || n === void 0 && g.standby !== !0 ? {
      type: "advisor_tool",
      available: !1,
      model: model_4,
      toolChange: "remove"
    } : void 0;
    if (n?.available === !0) return v ? void 0 : l;
    return v ? m : l;
  }
  if (n === void 0) return g.standby ? void 0 : l;
  if (n.available) return v ? void 0 : l;
  if (n.toolChange && !n.byBase) return;
  return v ? m : l;
}
function T(e, o, r) {
  return XXt() && rTe(e) && O9(o) && (Iut(o, r) ? UDe(o, e) : aOn(o, e));
}
function A(e, o, r) {
  let u = xWe(e, o);
  return u !== void 0 && (Iut(o, r) || aOn(o, u)) ? u : void 0;
}
export { Joi, HQn };