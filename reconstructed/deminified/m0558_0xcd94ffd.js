// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { Es, y0o, sh, Tt } from "B:/~BUN/root/chunk-gf53qpk6.js";
import { t } from "B:/~BUN/root/chunk-qe2zga5e.js";
import { d } from "B:/~BUN/root/chunk-zs3ycjed.js";
import { $l } from "B:/~BUN/root/chunk-sd4cj2qx.js";
import { rit, gw, SB, sz, cee, vae, PIt, KSo, PLe, Gme, sit, JSo } from "B:/~BUN/root/chunk-1mdeqc2r.js";
var C = {
  announcement: void 0,
  advisorModel: void 0,
  advisorDeferred: !1,
  advisorActive: !1
};
function Z7r(e, o, {
  querySource: querySource,
  resumeActive: resumeActive,
  configuredRuntimeModel: configuredRuntimeModel,
  runtimeOptionsModel: runtimeOptionsModel,
  carrier: carrier,
  toolChangesRide: toolChangesRide
}) {
  try {
    let r = typeof toolChangesRide === "function" ? toolChangesRide : () => toolChangesRide,
      p = Es(querySource),
      v = o.getAdvisorSetting(),
      l = p === "main" ? configuredRuntimeModel : runtimeOptionsModel,
      m = r(runtimeOptionsModel),
      c = sit(e);
    if (resumeActive || p === "auxiliary") {
      let b = carrier?.advisorHeld ?? KKt(c) ?? _(v, l, configuredRuntimeModel, r(l)),
        h = b.model === void 0 && m && !b.refused ? {
          model: A(v, l, configuredRuntimeModel),
          viaToolChange: !0
        } : b;
      return H(S(h, m), c, l, configuredRuntimeModel);
    }
    let s = carrier?.advisorHeld;
    if (s === void 0) {
      if (s = KKt(c) ?? _(v, l, configuredRuntimeModel, r(l)), carrier !== void 0) carrier.advisorHeld = s;
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
        ...h
      } = s;
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
      ...H(F, O, l, configuredRuntimeModel),
      announcement: announcement
    };
  } catch (error) {
    return d(error), C;
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
function KKt(e) {
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
  if (!$l() || !gw() || !SB(e)) return;
  let i = sz(),
    u = [...i.filter(item => !k(item)), ...i.filter(item => k(item))];
  for (let a of u) {
    let f = A(a, e, o);
    if (f === void 0 || !KSo(e, f)) continue;
    if (y0o(f)) return f;
    t(`[AdvisorTool] No standby advisor entry - this org is not known to serve ${f}`);
    return;
  }
  return;
}
function k(e) {
  return sh(Tt(e));
}
function x(e, o, i, u, a, f = !1) {
  let n = sit(e),
    g = a ?? KKt(n) ?? {
      model: A(o, i, u),
      viaToolChange: !1
    },
    model_4 = g.model,
    p = D(e) === "add";
  if (model_4 === void 0 || !T(model_4, i, u)) {
    let c = g.viaToolChange || f,
      s = gw() && Boolean(o);
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
  let v = JSo(e);
  if (g.viaToolChange) {
    if (Gme(o, i) === void 0) return p || n?.available === !0 ? {
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
    if (Gme(o, i) === void 0) return n?.available === !0 || n !== void 0 && n.byBase || n === void 0 && g.standby !== !0 ? {
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
function D(e) {
  for (let o = e.length - 1; o >= 0; o--) {
    let i = e[o];
    if (i.type === "attachment" && i.attachment.type === "advisor_tool" && i.attachment.toolChange !== void 0) return i.attachment.toolChange;
  }
  return;
}
function T(e, o, i) {
  return rit() && cee(e) && SB(o) && (PLe(o, i) ? vae(o, e) : PIt(o, e));
}
function A(e, o, i) {
  let u = Gme(e, o);
  return u !== void 0 && (PLe(o, i) || PIt(o, u)) ? u : void 0;
}
export { Z7r, KKt };