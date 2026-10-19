// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { d, k, pi } from "B:/~BUN/root/chunk-3aez4b53.js";
import { je } from "B:/~BUN/root/chunk-89mss1tj.js";
import { a } from "B:/~BUN/root/chunk-yt0knyw7.js";
import { Th, oye, ahn } from "B:/~BUN/root/chunk-rpez7z7a.js";
import { t } from "B:/~BUN/root/chunk-6za2ez23.js";
import { he } from "B:/~BUN/root/chunk-4qqgabd5.js";
import { g, m, p } from "B:/~BUN/root/chunk-kzgf20y6.js";
import { QM } from "B:/~BUN/root/chunk-8ye9n4fk.js";
import { Es } from "B:/~BUN/root/chunk-ek28wssa.js";
import { fn, me, SA, In } from "B:/~BUN/root/chunk-1gpjpba6.js";
import { GK, $o, Gg, MO, DO, JG, Zke, QG, ZG, VIe, GH, Yr, oW, sW, bYn, ljs, VH, Vg, LM, vte, Xv, Yb, rWe, xYn, Bl, qe, iJ, KK, t2, Yo, It, Px, gf, KE, Et, Gt } from "B:/~BUN/root/chunk-hb6x4e3n.js";
import { UZt, Fwe, mks, G3e, PUn } from "B:/~BUN/root/chunk-8w42v0dp.js";
import { Men } from "B:/~BUN/root/chunk-dn8rakwm.js";
import { Od } from "B:/~BUN/root/chunk-8y0chnnr.js";
import { Qce } from "B:/~BUN/root/chunk-8pa630py.js";
import { o$e, wZ, bJt, SJt, xv, jco, iw, f_, gpe, Ise, W_r } from "B:/~BUN/root/chunk-9grc6xh0.js";
import { Xss, C6t, nAe, O7, M8 } from "B:/~BUN/root/chunk-2sjr2z8k.js";
import { lZr, R6t, dZr, hbe } from "B:/~BUN/root/chunk-696tsrvt.js";
import { Md, nan, Wi } from "B:/~BUN/root/chunk-mbz8rhex.js";
import { Pt, Mn } from "B:/~BUN/root/chunk-j0ghr71r.js";
function y(e, o, i) {
  if (!Et()) return !1;
  let s = e !== null ? It(e) : Bl(),
    n = s.toLowerCase(),
    l = n.includes("opus") || n.includes("fable"),
    r = n.includes("opus-4-6"),
    c = n.includes("sonnet-4-6");
  if (o && Gg(e)) return !0;
  let u = UZt(s);
  if (u !== "pay_per_request" && u !== "included_in_plan") return !0;
  if (!gf(n)) return !1;
  if (l && i) return !1;
  return r || c;
}
function eAe(e, o, i, s) {
  let n = $o(),
    l = n && o && (!e || s?.announceKeptOn === !0),
    r = n && !!e && !o;
  return (l ? " \xB7 Fast mode ON" : "") + (y(i, o, KK()) ? " \xB7 Draws from usage credits" : "") + (r ? " \xB7 Fast mode OFF" : "");
}
function Yss(e, o, i) {
  if (!!e === o) return null;
  return o ? `Fast mode ON${y(i, !0, KK()) ? " \xB7 Draws from usage credits" : ""}` : "Fast mode OFF";
}
function Ww(e) {
  let o = iJ(e ?? Yb());
  return e === null ? `${o} (default)` : o;
}
var timeout = 5000;
async function O(e) {
  if (e === null) return w("follows_account");
  if (A(e)) return w("not_representable");
  if (nAe() !== "primary") return w("not_primary");
  if (Zke() !== "served") return w("not_served");
  let o = O7();
  if (o === null || o.kind !== "account") return w("no_account_scope");
  return T(o, M8(), e);
}
async function T(e, o, i) {
  let s = {
    model: It(i)
  };
  try {
    let n = await Gt.patch(`/api/organizations/:orgUUID/model_selector_state/${o}`, s, {
      auth: "teleport-org",
      isBackground: !0,
      timeout: timeout,
      validateStatus: () => !0
    });
    if (!n.ok) return t(`[servedCatalog] selection write (${o}) skipped: ${n.reason}`), p("model_default_server_sync", `declined_${n.reason}`), {
      status: "skipped",
      reason: "declined"
    };
    let httpStatus = n.status;
    if (httpStatus < 200 || httpStatus >= 300) return t(`[servedCatalog] selection write (${o}): HTTP ${httpStatus}`), p("model_default_server_sync", `http_${httpStatus}`), {
      status: "error",
      reason: "http_status",
      httpStatus: httpStatus
    };
    return t(`[servedCatalog] selection write (${o}) ok`), g("model_default_server_sync"), await N(e, o, n.data, s.model), {
      status: "ok",
      httpStatus: httpStatus
    };
  } catch (error) {
    let kind = pi(error).kind;
    return t(`[servedCatalog] selection write (${o}) failed: ${kind}`), p("model_default_server_sync", `network_${kind}`), {
      status: "error",
      reason: "network"
    };
  }
}
async function N(e, id, i, model) {
  let n = Xss(e, id);
  if (n === void 0 || n.catalog === null) return;
  let l = Men().safeParse(i),
    state = l.success && l.data.id === id ? l.data : {
      ...(n.catalog.state ?? {
        id: id
      }),
      model: model,
      selection_source: "user_setting"
    };
  await C6t(e, id, {
    ...n,
    staleAt: Math.min(n.staleAt, Date.now()),
    catalog: {
      ...n.catalog,
      state: state
    }
  });
}
function w(reason) {
  return t(`[servedCatalog] selection write skipped: ${reason}`), {
    status: "skipped",
    reason: reason
  };
}
function A(e) {
  let o = e.trim().toLowerCase();
  return o === "opusplan" || o === "opusplan[1m]";
}
async function tAe(e, o, credentials, s) {
  let model_2 = e === "default" ? null : e;
  if (model_2 === null) {
    let message = GH(Yb(), "switch");
    if (message !== null) return m("model_switch", "denied_by_managed_settings"), {
      ok: !1,
      message: message,
      code: "restricted_by_org"
    };
  }
  let substitutedFrom;
  if (model_2) {
    let r = B(model_2);
    if (r !== null) {
      let c = Pt(model_2.trim().toLowerCase()),
        u = GK("model");
      switch (r.kind) {
        case "disabled":
          return m("model_switch", "alias_1m_disabled"), {
            ok: !1,
            message: u ? `1M context is turned off here (CLAUDE_CODE_DISABLE_1M_CONTEXT is set), so '${model_2}' isn't available. Run ${u} ${c} instead.` : `1M context is turned off (CLAUDE_CODE_DISABLE_1M_CONTEXT is set), so '${model_2}' isn\u2019t available. Switch to ${c} instead.`,
            code: "alias_1m_disabled"
          };
        case "unsupported":
          return m("model_switch", "alias_1m_unsupported"), {
            ok: !1,
            message: u ? `${Yo(r.carrier)} doesn't have a 1M context window, so '${model_2}' isn't available. Run ${u} ${c} to use it with its standard context window.` : `${Yo(r.carrier)} doesn\u2019t have a 1M context window, so '${model_2}' isn\u2019t available. Switch to ${c} to use its standard context window.`,
            code: "alias_1m_unsupported"
          };
        case "noModeDependentVariant":
          return m("model_switch", "alias_1m_no_mode_variant"), {
            ok: !1,
            message: u ? `'${model_2}' isn't available: the ${c} setting switches models in plan mode and has no 1M form. Run ${u} ${c}, or ${u} sonnet[1m] for a 1M context window.` : `'${model_2}' isn\u2019t available, because the ${c} setting switches models in plan mode and has no 1M form. You can switch to ${c}, or to sonnet[1m] for a 1M context window.`,
            code: "alias_1m_unsupported"
          };
      }
    }
  }
  if (model_2 && QG(model_2, ZG())) {
    let r = Xv(model_2);
    if (r === null) {
      let c = await hbe(model_2, o, credentials);
      if (c !== "overturned") {
        m("model_switch", c === "probe_failed" ? "entitlement_probe_failed" : "denied_by_entitlement");
        let u = GK("model");
        return {
          ok: !1,
          message: `Model '${model_2}' is restricted by your organization's settings. ${u ? `Run ${u} to choose a different model.` : "Switch to a different model."}`,
          code: c === "probe_failed" ? "check_failed" : "restricted_by_org"
        };
      }
    } else substitutedFrom = model_2, model_2 = r;
  } else if (model_2 && !Yr(model_2)) {
    let r = Xv(model_2);
    if (r === null) return m("model_switch", W(model_2)), {
      ok: !1,
      message: `Model '${model_2}' is not available. Your organization restricts model selection.`,
      code: "restricted_by_org"
    };
    substitutedFrom = model_2, model_2 = r;
  }
  if (model_2 && oZr(model_2)) return m("model_switch", "opus_1m_unavailable"), {
    ok: !1,
    message: "Opus with 1M context is not available for your account. Learn more: https://code.claude.com/docs/en/model-config#extended-context-with-1m",
    code: "unavailable_for_account"
  };
  if (model_2 && sZr(model_2)) return m("model_switch", "sonnet_1m_unavailable"), {
    ok: !1,
    message: "Sonnet with 1M context is not available for your account. Learn more: https://code.claude.com/docs/en/model-config#extended-context-with-1m",
    code: "unavailable_for_account"
  };
  if (model_2) {
    let r = VH(model_2);
    if (r) switch (r.reason) {
      case "disabled":
        if (r.notOffered) return m("model_switch", "not_offered"), {
          ok: !1,
          message: r.minimumVersion !== void 0 ? ljs(r.minimumVersion) : bYn(model_2),
          code: "not_offered"
        };
        return m("model_switch", "disabled_by_org"), {
          ok: !1,
          message: `Model '${model_2}' is not currently available for your account${r.description ? `. ${r.description}` : "."}`,
          code: "unavailable_for_account"
        };
      case "absent":
        {
          let c = await lZr(dZr(model_2), {
              forceServerProbe: !0,
              credentials: credentials
            }, s?.deadlineMs),
            u = F(c, s);
          if (!c.valid && !u) {
            m("model_switch", c.notFound ? "fable_unavailable" : "fable_probe_failed");
            let f = GK("model");
            return {
              ok: !1,
              message: c.notFound ? `${r.displayName} isn't available for your account yet. ${f ? `Run ${f} to pick another model.` : "Switch to a different model."}` : c.error,
              ...P(c.notFound || c.permissionDenied ? "unavailable_for_account" : D(c)),
              ...(c.serverRefusedModel === !0 && substitutedFrom === void 0 && {
                serverRefusedModel: !0
              })
            };
          }
          if (c.valid) Qce(o, credentials);
          return {
            ok: !0,
            model: R6t(model_2) ? model_2.trim().toLowerCase() : model_2,
            ...(substitutedFrom !== void 0 && {
              substitutedFrom: substitutedFrom
            }),
            ...(u && {
              unconfirmed: !0
            })
          };
        }
    }
  }
  if (!model_2) return {
    ok: !0,
    model: model_2
  };
  if (R6t(model_2)) return {
    ok: !0,
    model: model_2.trim().toLowerCase()
  };
  try {
    let r = await lZr(model_2, {
        credentials: credentials,
        ...(s?.confirmWithServer === !1 && {
          serverProbe: !1
        })
      }, s?.deadlineMs),
      c = !r.valid && r.creditsRequired === !0 && s?.acceptCreditsRequired === !0 && zxn(E(model_2)),
      u = F(r, s),
      f = !r.valid && r.sharedLimitReached === !0 && s?.acceptSharedLimitRefusal === !0;
    if (!r.valid && !c && !u && !f) return m("model_switch", "invalid_model"), {
      ok: !1,
      message: r.error,
      ...P(D(r)),
      ...(r.serverRefusedModel === !0 && substitutedFrom === void 0 && {
        serverRefusedModel: !0
      })
    };
    return {
      ok: !0,
      model: E(model_2),
      ...(substitutedFrom !== void 0 && {
        substitutedFrom: substitutedFrom
      }),
      ...(!r.valid && c && {
        creditsRefusal: r.error
      }),
      ...(u && {
        unconfirmed: !0
      })
    };
  } catch (error) {
    return m("model_switch", "validate_exception"), {
      ok: !1,
      message: `Failed to validate model: ${d(error)}`,
      code: "check_failed"
    };
  }
}
function E(e) {
  return e;
}
async function yT(e, o, requestedModel, source, n = {}) {
  let l = o(),
    r = xv(l),
    c = I(l, requestedModel);
  if (c.length === 0) return {
    decision: "proceed",
    skipConfirm: !1,
    messages: []
  };
  let messages = [],
    reason_2,
    M = !1,
    skipConfirm = !0;
  for (let h of c) {
    let S = await jco(e, {
      ...h,
      requestedModel: requestedModel,
      source: source
    }, {
      signal: n.signal
    });
    if (messages.push(...S.messages), S.decision === "block") return {
      decision: "block",
      reason: S.reason,
      messages: messages
    };
    if (S.decision === "ask") M = !0, reason_2 ??= S.reason;else skipConfirm = skipConfirm && S.skipConfirm;
  }
  if (xv(o()) !== r) {
    if (n.revalidating) return {
      decision: "block",
      reason: "the session model changed while a PreModelSwitch hook was running; pick again",
      messages: messages
    };
    let h = await yT(e, o, requestedModel, source, {
      ...n,
      revalidating: !0
    });
    return {
      ...h,
      messages: [...messages, ...h.messages]
    };
  }
  return M ? {
    decision: "ask",
    reason: reason_2,
    messages: messages
  } : {
    decision: "proceed",
    skipConfirm: skipConfirm,
    messages: messages
  };
}
function I(e, o) {
  let i = SJt(e),
    mode = e.toolPermissionContext.mode,
    n = [mode, mode === "plan" ? "default" : "plan"],
    l = new Set(),
    r = [];
  for (let c of n) {
    let fromModel = bJt(i, c),
      toModel = bJt(o, c),
      M = `${fromModel}\x00${toModel}`;
    if (fromModel !== toModel && !l.has(M)) l.add(M), r.push({
      fromModel: fromModel,
      toModel: toModel
    });
  }
  return r;
}
function IKe(e) {
  return [`Model switch blocked by a PreModelSwitch hook${e.reason !== void 0 ? `: ${bu(e.reason)}` : e.decision === "ask" ? ": confirmation required, and this session cannot ask" : ""}`, ...e.messages.map(bu)].join(`
`);
}
function bu(e) {
  return Wi(Md(nan(e.trimEnd())));
}
function R1(e, o, i) {
  return [`Model switch to ${Ww(e)} was blocked by a PreModelSwitch hook${o ? `: ${bu(o)}` : ""}`, ...i.map(bu)].join(`
`);
}
async function MKe(e, mainLoopModel, i, s, n, l, r, c, u) {
  let fastMode = i().fastMode;
  if (oye(), iw(e, i(), mainLoopModel, l), s(b => ({
    ...b,
    mainLoopModel: mainLoopModel,
    mainLoopModelForSession: null
  })), r !== void 0) p("model_switch", "family_alias_stepped_down");else g("model_switch");
  let fastMode_2 = $o() ? MO(mainLoopModel, fastMode) : !!fastMode;
  if ($o()) {
    if (JG(), fastMode_2 !== !!fastMode) s(b => ({
      ...b,
      fastMode: fastMode_2
    })), DO(fastMode, fastMode_2);
  }
  let _ = n ? await mCt(mainLoopModel, c) : null;
  u?.(_);
  let h = _?.kind === "saved",
    S = `${gpe}${f_(Ww(mainLoopModel))}${h ? Ise : " for this session only"}`;
  return S += eAe(fastMode, fastMode_2, mainLoopModel, {
    announceKeptOn: !0
  }), S += gCt(_), S += (h ? nZr(mainLoopModel) : "") || rZr(mainLoopModel), S;
}
var U = 3000;
async function mCt(e, o, i = U) {
  let s = In("userSettings", {
    model: e ?? void 0
  }, void 0, o);
  s.then(l => l.error ? void 0 : O(e)).catch(() => {});
  let n = await je(s, i);
  if (n === void 0) return p("model_set_default", "unconfirmed"), {
    kind: "unconfirmed"
  };
  if (n.error) return m("model_set_default", "write_failed"), {
    kind: "failed",
    error: n.error
  };
  return g("model_set_default"), {
    kind: "saved"
  };
}
function gCt(e) {
  if (e === null || e.kind === "saved") return "";
  let o = Es(fn("userSettings") ?? "settings.json");
  switch (e.kind) {
    case "unconfirmed":
      return ` \xB7 couldn't confirm it was saved as your default (${o} is still being written)`;
    case "failed":
      {
        let cause = e.error.cause,
          s = cause instanceof Error ? `can't be written (${k(cause) ?? cause.message})` : "isn't valid JSON";
        return ` \xB7 couldn't save it as your default: ${o} ${s}`;
      }
  }
}
function nZr(e) {
  let ANTHROPIC_MODEL = a.ANTHROPIC_MODEL;
  if (!ANTHROPIC_MODEL || !Yr(ANTHROPIC_MODEL)) return "";
  if (!C(e ?? Yb(), ANTHROPIC_MODEL)) return "";
  return v("ANTHROPIC_MODEL is set to ", t2(ANTHROPIC_MODEL), " \u2014 new sessions use that while it is set");
}
function C(e, o) {
  let i = It(e),
    s = It(o);
  return LM(e) || qe(i, {
    identity: !0
  }) !== qe(s, {
    identity: !0
  }) || /\[1m\]$/i.test(i) !== /\[1m\]$/i.test(s);
}
function rZr(e) {
  let o = SA("model");
  if (o !== "projectSettings" && o !== "localSettings" && o !== "policySettings") {
    let n = rWe();
    if (n !== null && e !== null && o !== "flagSettings" && !a.ANTHROPIC_MODEL && C(e, n.model)) return x(n);
    return "";
  }
  if (o !== "policySettings") {
    let n = rWe();
    if (n !== null && !a.ANTHROPIC_MODEL) {
      if (e === null) return "";
      if (C(e, n.model)) return x(n);
      return "";
    }
  }
  let i = me(o)?.model;
  if (i === void 0 || e === i) return "";
  let s = o === "policySettings" ? "Managed settings" : QM(o);
  return v(`${s} pins `, t2(i), " \u2014 that applies on restart");
}
function v(e, o, i) {
  return `${he.dim(`
     ${e}`)}${f_(o)}${he.dim(i)}`;
}
function x(e) {
  let o = t2(e.model);
  switch (e.kind) {
    case "org":
      return v("Your organization's default (", o, ") applies on restart");
    case "standard":
      return v("Your organization's default model isn't available in this build, so the standard default (", o, ") applies on restart");
  }
}
function L(e) {
  return Pt(e.toLowerCase().trim()) === "opusplan" ? [Vg(), It(e)] : [It(e)];
}
function B(e) {
  let o = e.toLowerCase().trim(),
    i = Pt(o);
  if (i === o || !R6t(o)) return null;
  if (Px()) return {
    kind: "disabled"
  };
  let s = L(o).find(item => xYn(item));
  if (s !== void 0) return {
    kind: "unsupported",
    carrier: Pt(s)
  };
  if (LM(i) && vte(o) === null) return {
    kind: "noModeDependentVariant"
  };
  return null;
}
function oZr(e) {
  let o = e.toLowerCase();
  if (!(o.includes("opus") && o.includes("[1m]"))) return !1;
  if (L(e).every(item => KE(item))) return !1;
  return !oW() && !KK();
}
var H = new Set(["claude-sonnet-4-5", "claude-sonnet-4-0", "claude-3-7-sonnet", "claude-3-5-sonnet"]);
function sZr(e) {
  let o = e.toLowerCase();
  if (!(o.includes("sonnet") && o.includes("[1m]") || o.trim() === "opusplan[1m]")) return !1;
  if (H.has(qe(o.trim(), {
    identity: !0
  }))) return !1;
  if (KE(It(e))) return !1;
  return !sW();
}
function Jce(e) {
  return It(e ?? Yb());
}
function lcr(e, mainLoopModel_2, mainLoopModelForSession, s, n) {
  if (n === void 0) return !1;
  let l = Th();
  if (l === 0 || l === s) return !1;
  let r = Mn(Jce(e));
  if (r === Mn(Jce(wZ({
    mainLoopModel: mainLoopModel_2,
    mainLoopModelForSession: mainLoopModelForSession
  })))) return !1;
  let c = n.response?.message.model;
  return !(typeof c === "string" && (c === r || ahn(r)?.has(c) === !0));
}
function E6t(e) {
  let o = f_(Ww(e.mainLoopModel)),
    i = Od(e),
    s = i !== void 0 ? ` (effort: ${i})` : "",
    n = o$e(e.mainLoopModelForSession, e.mainLoopModel);
  if (n !== null) return `${W_r}${f_(Ww(n))} (this session only)${s}
Base model: ${o}`;
  let l = G3e(),
    r = l !== void 0 ? ` (${PUn(f_(Ww(l.previousModel)))})` : "";
  return `${W_r}${o}${r}${s}`;
}
function zxn(e) {
  let o = It(e ?? Yb());
  return mks(o);
}
function Poe(e) {
  if (e === null) return !1;
  return Fwe(It(e));
}
function F(e, o) {
  return !1;
}
function D(e) {
  if (e.notFound) return "catalog_unknown";
  if (e.permissionDenied) return "unavailable_for_account";
  if (e.notAllowed) return "restricted_by_org";
  if (e.authFailed) return "auth_failed";
  return e.retryable ? "check_failed" : void 0;
}
function P(code) {
  return code === void 0 ? {} : {
    code: code
  };
}
function W(e) {
  try {
    return VIe(e) ? "denied_by_managed_settings" : "not_allowed";
  } catch {
    return "not_allowed";
  }
}
export { eAe, Yss, Ww, tAe, yT, IKe, bu, R1, MKe, mCt, gCt, nZr, rZr, oZr, sZr, Jce, lcr, E6t, zxn, Poe };