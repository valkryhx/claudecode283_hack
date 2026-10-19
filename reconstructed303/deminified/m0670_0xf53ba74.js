// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { Jo, Zgt, iEe, It } from "B:/~BUN/root/chunk-hb6x4e3n.js";
import { t } from "B:/~BUN/root/chunk-6za2ez23.js";
import { l } from "B:/~BUN/root/chunk-c09hf5e4.js";
import { Ma } from "B:/~BUN/root/chunk-8pmnanyd.js";
import { jMt, ME, Vq, X6, cfe, Qwe, xen, OCs, c5e, OPe, WMt, DCs } from "B:/~BUN/root/chunk-dn8rakwm.js";
var C = {
  announcement: void 0,
  advisorModel: void 0,
  advisorDeferred: !1,
  advisorActive: !1
};
function Rts(e, o, {
  querySource: querySource,
  resumeActive: resumeActive,
  configuredRuntimeModel: configuredRuntimeModel,
  runtimeOptionsModel: runtimeOptionsModel,
  carrier: carrier,
  toolChangesRide: toolChangesRide
}) {
  try {
    let r = typeof toolChangesRide === "function" ? toolChangesRide : () => toolChangesRide,
      b = Jo(querySource),
      v = o.getAdvisorSetting(),
      s = b === "main" ? configuredRuntimeModel : runtimeOptionsModel,
      m = r(runtimeOptionsModel),
      c = WMt(e);
    if (resumeActive || b === "auxiliary") {
      let p = carrier?.advisorHeld ?? XCn(c) ?? _(v, s, configuredRuntimeModel, r(s)),
        h = p.model === void 0 && m && !p.refused ? {
          model: A(v, s, configuredRuntimeModel),
          viaToolChange: !0
        } : p;
      return H(S(h, m), c, s, configuredRuntimeModel);
    }
    let a = carrier?.advisorHeld;
    if (a === void 0) {
      if (a = XCn(c) ?? _(v, s, configuredRuntimeModel, r(s)), carrier !== void 0) carrier.advisorHeld = a;
    } else if (a.model === void 0 && m && !a.refused) {
      let model = A(v, s, configuredRuntimeModel);
      if (model !== void 0) {
        if (a = {
          model: model,
          viaToolChange: !0
        }, carrier !== void 0) carrier.advisorHeld = a;
      }
    }
    let F = S(a, m),
      q = a.viaToolChange && !m && a.inFallback !== !0,
      announcement = x(e, v, s, configuredRuntimeModel, F, q),
      N = a.model === void 0 || c !== void 0 || T(a.model, s, configuredRuntimeModel),
      B = m ? !1 : a.inFallback === !0 || N;
    if (carrier !== void 0 && a.viaToolChange && a.inFallback === !0 !== B) {
      let {
        inFallback: inFallback,
        ...h
      } = a;
      carrier.advisorHeld = B ? {
        ...h,
        inFallback: !0
      } : h;
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
      ...H(F, O, s, configuredRuntimeModel),
      announcement: announcement
    };
  } catch (error) {
    return l(error), C;
  }
}
function w(advisorModel, o, i) {
  return {
    announcement: void 0,
    advisorModel: advisorModel,
    advisorDeferred: advisorModel !== void 0 && o,
    advisorActive: advisorModel !== void 0 && i
  };
}
function H(e, o, i, u) {
  if (e.model === void 0 || !T(e.model, i, u)) return C;
  if (e.viaToolChange) return w(e.model, !0, o?.available === !0);
  if (e.standby && o === void 0) return C;
  if (o !== void 0 && !o.available && o.toolChange && !o.byBase) return C;
  return w(e.model, !1, !0);
}
function S(e, o) {
  return e.viaToolChange && !o ? {
    ...e,
    viaToolChange: !1
  } : e;
}
function XCn(e) {
  if (e === void 0) return;
  return {
    model: e.model,
    viaToolChange: e.toolChange
  };
}
function _(e, o, i, viaToolChange) {
  let model_2 = A(e, o, i);
  if (model_2 !== void 0 || !viaToolChange || e) return {
    model: model_2,
    viaToolChange: viaToolChange
  };
  let model_3 = P(o, i);
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
  if (!Ma() || !ME() || !Vq(e)) return;
  let i = X6(),
    u = [...i.filter(item => !k(item)), ...i.filter(item => k(item))];
  for (let d of u) {
    let f = A(d, e, o);
    if (f === void 0 || !OCs(e, f)) continue;
    if (Zgt(f)) return f;
    t(`[AdvisorTool] No standby advisor entry - this org is not known to serve ${f}`);
    return;
  }
  return;
}
function k(e) {
  return iEe(It(e));
}
function x(e, o, i, u, d, f = !1) {
  let n = WMt(e),
    g = d ?? XCn(n) ?? {
      model: A(o, i, u),
      viaToolChange: !1
    },
    model_4 = g.model,
    b = D(e) === "add";
  if (model_4 === void 0 || !T(model_4, i, u)) {
    let c = g.viaToolChange || f,
      a = ME() && Boolean(o);
    if (n?.available !== !0) {
      if (!c || model_4 === void 0 || n === void 0) return;
      if (n.byBase && !a) return {
        type: "advisor_tool",
        available: !1,
        model: model_4,
        toolChange: "remove"
      };
      if (n.toolChange && !n.byBase && a) return {
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
    return a ? {
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
  let v = DCs(e);
  if (g.viaToolChange) {
    if (OPe(o, i) === void 0) return b || n?.available === !0 ? {
      type: "advisor_tool",
      available: !1,
      model: model_4,
      toolChange: "remove"
    } : void 0;
    if (b && n?.available !== !1) return v ? void 0 : {
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
  let s = {
      type: "advisor_tool",
      available: !0,
      model: model_4
    },
    m = {
      ...s,
      abbreviated: !0
    };
  if (f) {
    if (OPe(o, i) === void 0) return n?.available === !0 || n !== void 0 && n.byBase || n === void 0 && g.standby !== !0 ? {
      type: "advisor_tool",
      available: !1,
      model: model_4,
      toolChange: "remove"
    } : void 0;
    if (n?.available === !0) return v ? void 0 : s;
    return v ? m : s;
  }
  if (n === void 0) return g.standby ? void 0 : s;
  if (n.available) return v ? void 0 : s;
  if (n.toolChange && !n.byBase) return;
  return v ? m : s;
}
function D(e) {
  for (let o = e.length - 1; o >= 0; o--) {
    let i = e[o];
    if (i.type === "attachment" && i.attachment.type === "advisor_tool" && i.attachment.toolChange !== void 0) return i.attachment.toolChange;
  }
  return;
}
function T(e, o, i) {
  return jMt() && cfe(e) && Vq(o) && (c5e(o, i) ? Qwe(o, e) : xen(o, e));
}
function A(e, o, i) {
  let u = OPe(e, o);
  return u !== void 0 && (c5e(o, i) || xen(o, u)) ? u : void 0;
}
export { Rts, XCn };