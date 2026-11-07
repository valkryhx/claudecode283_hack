// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { d, k, Ai } from "B:/~BUN/root/chunk-y2g9f85n.js";
import { we } from "B:/~BUN/root/chunk-r5zmhp23.js";
import { i } from "B:/~BUN/root/chunk-j6pt0v41.js";
import { ab, Nxe, tqn } from "B:/~BUN/root/chunk-game8aqv.js";
import { t } from "B:/~BUN/root/chunk-2pp12te6.js";
import { on } from "B:/~BUN/root/chunk-09sn55yf.js";
import { Tk, vwt } from "B:/~BUN/root/chunk-jdtvghyw.js";
import { Se } from "B:/~BUN/root/chunk-x24hm796.js";
import { g, m, c } from "B:/~BUN/root/chunk-3z3yrbk4.js";
import { rP } from "B:/~BUN/root/chunk-3xdsa4p8.js";
import { Ct } from "B:/~BUN/root/chunk-thn0wk2x.js";
import { ks } from "B:/~BUN/root/chunk-d10hhz4p.js";
import { un, be, DA, qn } from "B:/~BUN/root/chunk-7wn6n2hd.js";
import { jNe, YUn, JX, $s, b_, WL, zL, L3, pf, m4, h4, XNe, G1, uo, g4, y4, Qee, eb, eH, Pfe, dC, qk, NZe, f$t, Ud, rt, tie, jbe, nM, Ps, Vt, RA, qh, uC, Rt, jt } from "B:/~BUN/root/chunk-1ks9vs37.js";
import { tLn, Xoe, tUi, hLe, Jkr } from "B:/~BUN/root/chunk-yhafkw66.js";
import { xl } from "B:/~BUN/root/chunk-6j3fjnhn.js";
import { Ove } from "B:/~BUN/root/chunk-nkakgqwa.js";
import { w8e, Rde, LRn, NRn, WT, vns, aE, dw, fEe, rye, _to } from "B:/~BUN/root/chunk-27h4st9h.js";
import { Etr } from "B:/~BUN/root/chunk-pwtt7epc.js";
import { edi, nwn, HBe, Fle, Gne } from "B:/~BUN/root/chunk-c1km8051.js";
import { o6o, rwn, s6o, JOe } from "B:/~BUN/root/chunk-njea5x8z.js";
import { dc, j$n, ma } from "B:/~BUN/root/chunk-4jfmvmew.js";
import { $t, Gn } from "B:/~BUN/root/chunk-zpne314q.js";
function y(e, o, s) {
  if (!Rt()) return !1;
  let a = e !== null ? Vt(e) : Ud(),
    n = a.toLowerCase(),
    l = n.includes("opus") || n.includes("fable"),
    r = n.includes("opus-4-6"),
    u = n.includes("sonnet-4-6");
  if (o && b_(e)) return !0;
  let f = tLn(a);
  if (f !== "pay_per_request" && f !== "included_in_plan") return !0;
  if (!qh(n)) return !1;
  if (l && s) return !1;
  return r || u;
}
function NBe(e, o, s, a) {
  let n = $s(),
    l = n && o && (!e || a?.announceKeptOn === !0),
    r = n && !!e && !o;
  return (l ? " \xB7 Fast mode ON" : "") + (y(s, o, jbe()) ? " \xB7 Draws from usage credits" : "") + (r ? " \xB7 Fast mode OFF" : "");
}
function Zli(e, o, s) {
  if (!!e === o) return null;
  return o ? `Fast mode ON${y(s, !0, jbe()) ? " \xB7 Draws from usage credits" : ""}` : "Fast mode OFF";
}
function BE(e) {
  let o = tie(e ?? qk());
  return e === null ? `${o} (default)` : o;
}
var timeout = 5000;
async function E(e) {
  if (e === null) return w("follows_account");
  if (I(e)) return w("not_representable");
  if (HBe() !== "primary") return w("not_primary");
  if (jNe() !== "served") return w("not_served");
  let o = Fle();
  if (o === null || o.kind !== "account") return w("no_account_scope");
  return N(o, Gne(), e);
}
async function N(e, o, s) {
  let a = {
    model: Vt(s)
  };
  try {
    let n = await jt.patch(`/api/organizations/:orgUUID/model_selector_state/${o}`, a, {
      auth: "teleport-org",
      isBackground: !0,
      timeout: timeout,
      validateStatus: () => !0
    });
    if (!n.ok) return t(`[servedCatalog] selection write (${o}) skipped: ${n.reason}`), c("model_default_server_sync", `declined_${n.reason}`), {
      status: "skipped",
      reason: "declined"
    };
    let httpStatus = n.status;
    if (httpStatus < 200 || httpStatus >= 300) return t(`[servedCatalog] selection write (${o}): HTTP ${httpStatus}`), c("model_default_server_sync", `http_${httpStatus}`), {
      status: "error",
      reason: "http_status",
      httpStatus: httpStatus
    };
    return t(`[servedCatalog] selection write (${o}) ok`), g("model_default_server_sync"), await A(e, o, n.data, a.model), {
      status: "ok",
      httpStatus: httpStatus
    };
  } catch (error) {
    let kind = Ai(error).kind;
    return t(`[servedCatalog] selection write (${o}) failed: ${kind}`), c("model_default_server_sync", `network_${kind}`), {
      status: "error",
      reason: "network"
    };
  }
}
async function A(e, id, s, model) {
  let n = edi(e, id);
  if (n === void 0 || n.catalog === null) return;
  let l = YUn().safeParse(s),
    state = l.success && l.data.id === id ? l.data : {
      ...(n.catalog.state ?? {
        id: id
      }),
      model: model,
      selection_source: "user_setting"
    };
  await nwn(e, id, {
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
function I(e) {
  let o = e.trim().toLowerCase();
  return o === "opusplan" || o === "opusplan[1m]";
}
async function FBe(...e) {
  let o = await U(...e);
  if (!o.ok) return {
    ...o,
    message: on(o.message)
  };
  return o.creditsRefusal === void 0 ? o : {
    ...o,
    creditsRefusal: on(o.creditsRefusal)
  };
}
async function U(e, o, credentials, a) {
  let model_2 = e === "default" ? null : e;
  if (model_2 === null) {
    let message = G1(qk(), "switch");
    if (message !== null) return m("model_switch", "denied_by_managed_settings"), {
      ok: !1,
      message: message,
      code: "restricted_by_org"
    };
  }
  let substitutedFrom;
  if (model_2) {
    let r = H(model_2);
    if (r !== null) {
      let u = $t(model_2.trim().toLowerCase()),
        f = pf(model_2),
        p = JX("model");
      switch (r.kind) {
        case "disabled":
          return m("model_switch", "alias_1m_disabled"), {
            ok: !1,
            message: p ? `1M context is turned off here (CLAUDE_CODE_DISABLE_1M_CONTEXT is set), so '${f}' isn't available. Run ${p} ${u} instead.` : `1M context is turned off (CLAUDE_CODE_DISABLE_1M_CONTEXT is set), so '${f}' isn\u2019t available. Switch to ${u} instead.`,
            code: "alias_1m_disabled"
          };
        case "unsupported":
          return m("model_switch", "alias_1m_unsupported"), {
            ok: !1,
            message: p ? `${Tk(Ps(r.carrier))} doesn't have a 1M context window, so '${f}' isn't available. Run ${p} ${u} to use it with its standard context window.` : `${Tk(Ps(r.carrier))} doesn\u2019t have a 1M context window, so '${f}' isn\u2019t available. Switch to ${u} to use its standard context window.`,
            code: "alias_1m_unsupported"
          };
        case "noModeDependentVariant":
          return m("model_switch", "alias_1m_no_mode_variant"), {
            ok: !1,
            message: p ? `'${f}' isn't available: the ${u} setting switches models in plan mode and has no 1M form. Run ${p} ${u}, or ${p} sonnet[1m] for a 1M context window.` : `'${f}' isn\u2019t available, because the ${u} setting switches models in plan mode and has no 1M form. You can switch to ${u}, or to sonnet[1m] for a 1M context window.`,
            code: "alias_1m_unsupported"
          };
      }
    }
  }
  if (model_2 && m4(model_2, h4())) {
    let r = dC(model_2);
    if (r === null) {
      let u = await JOe(model_2, o, credentials);
      if (u !== "overturned") {
        m("model_switch", u === "probe_failed" ? "entitlement_probe_failed" : "denied_by_entitlement");
        let f = JX("model");
        return {
          ok: !1,
          message: `Model '${pf(model_2)}' is restricted by your organization's settings. ${f ? `Run ${f} to choose a different model.` : "Switch to a different model."}`,
          code: u === "probe_failed" ? "check_failed" : "restricted_by_org"
        };
      }
    } else substitutedFrom = model_2, model_2 = r;
  } else if (model_2 && !uo(model_2)) {
    let r = dC(model_2);
    if (r === null) return m("model_switch", z(model_2)), {
      ok: !1,
      message: `Model '${pf(model_2)}' is not available. Your organization restricts model selection.`,
      code: "restricted_by_org"
    };
    substitutedFrom = model_2, model_2 = r;
  }
  if (model_2 && XYo(model_2)) return m("model_switch", "opus_1m_unavailable"), {
    ok: !1,
    message: "Opus with 1M context is not available for your account. Learn more: https://code.claude.com/docs/en/model-config#extended-context-with-1m",
    code: "unavailable_for_account"
  };
  if (model_2 && JYo(model_2)) return m("model_switch", "sonnet_1m_unavailable"), {
    ok: !1,
    message: "Sonnet with 1M context is not available for your account. Learn more: https://code.claude.com/docs/en/model-config#extended-context-with-1m",
    code: "unavailable_for_account"
  };
  if (model_2) {
    let r = Qee(model_2);
    if (r) switch (r.reason) {
      case "disabled":
        if (r.notOffered) return m("model_switch", "not_offered"), {
          ok: !1,
          message: `Model '${pf(model_2)}' is not available. ${vwt(r.description)}`,
          code: "not_offered"
        };
        return m("model_switch", "disabled_by_org"), {
          ok: !1,
          message: `Model '${pf(model_2)}' is not currently available for your account. ${vwt(r.description)}`.trimEnd(),
          code: "unavailable_for_account"
        };
      case "absent":
        {
          let u = await o6o(s6o(model_2), {
              forceServerProbe: !0,
              credentials: credentials
            }, a?.deadlineMs),
            f = D(u, a);
          if (!u.valid && !f) {
            m("model_switch", u.notFound ? "fable_unavailable" : "fable_probe_failed");
            let p = JX("model");
            return {
              ok: !1,
              message: u.notFound ? `${r.displayName} isn't available for your account yet. ${p ? `Run ${p} to pick another model.` : "Switch to a different model."}` : u.error,
              ...P(u.notFound || u.permissionDenied ? "unavailable_for_account" : R(u)),
              ...(u.serverRefusedModel === !0 && substitutedFrom === void 0 && {
                serverRefusedModel: !0
              })
            };
          }
          if (u.valid) Ove(o, credentials);
          return {
            ok: !0,
            model: rwn(model_2) ? model_2.trim().toLowerCase() : model_2,
            ...(substitutedFrom !== void 0 && {
              substitutedFrom: substitutedFrom
            }),
            ...(f && {
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
  if (rwn(model_2)) return {
    ok: !0,
    model: model_2.trim().toLowerCase()
  };
  try {
    let r = await o6o(model_2, {
        credentials: credentials,
        ...(a?.confirmWithServer === !1 && {
          serverProbe: !1
        })
      }, a?.deadlineMs),
      u = !r.valid && r.creditsRequired === !0 && a?.acceptCreditsRequired === !0 && ktr(x(model_2)),
      f = D(r, a),
      p = !r.valid && r.sharedLimitReached === !0 && a?.acceptSharedLimitRefusal === !0;
    if (!r.valid && !u && !f && !p) return m("model_switch", "invalid_model"), {
      ok: !1,
      message: r.error,
      ...P(R(r)),
      ...(r.serverRefusedModel === !0 && substitutedFrom === void 0 && {
        serverRefusedModel: !0
      })
    };
    return {
      ok: !0,
      model: x(model_2),
      ...(substitutedFrom !== void 0 && {
        substitutedFrom: substitutedFrom
      }),
      ...(!r.valid && u && {
        creditsRefusal: r.error
      }),
      ...(f && {
        unconfirmed: !0
      })
    };
  } catch (error) {
    return m("model_switch", "validate_exception"), {
      ok: !1,
      message: `Failed to validate model: ${vwt(d(error))}`,
      code: "check_failed"
    };
  }
}
function x(e) {
  return e;
}
async function cx(e, o, requestedModel, source, n = {}) {
  let l = o(),
    r = WT(l),
    u = B(l, requestedModel);
  if (u.length === 0) return {
    decision: "proceed",
    skipConfirm: !1,
    messages: []
  };
  let messages = [],
    reason_2,
    M = !1,
    skipConfirm = !0;
  for (let h of u) {
    let S = await vns(e, {
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
  if (WT(o()) !== r) {
    if (n.revalidating) return {
      decision: "block",
      reason: "the session model changed while a PreModelSwitch hook was running; pick again",
      messages: messages
    };
    let h = await cx(e, o, requestedModel, source, {
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
function B(e, o) {
  let s = NRn(e),
    mode = e.toolPermissionContext.mode,
    n = [mode, mode === "plan" ? "default" : "plan"],
    l = new Set(),
    r = [];
  for (let u of n) {
    let fromModel = LRn(s, u),
      toModel = LRn(o, u),
      M = `${fromModel}\x00${toModel}`;
    if (fromModel !== toModel && !l.has(M)) l.add(M), r.push({
      fromModel: fromModel,
      toModel: toModel
    });
  }
  return r;
}
function tat(e) {
  return [`Model switch blocked by a PreModelSwitch hook${e.reason !== void 0 ? `: ${xp(e.reason)}` : e.decision === "ask" ? ": confirmation required, and this session cannot ask" : ""}`, ...e.messages.map(xp)].join(`
`);
}
function xp(e) {
  return ma(dc(j$n(e.trimEnd())));
}
function LK(e, o, s) {
  return [`Model switch to ${BE(e)} was blocked by a PreModelSwitch hook${o ? `: ${xp(o)}` : ""}`, ...s.map(xp)].join(`
`);
}
async function nat(e, mainLoopModel, s, a, n, l, r, u, f) {
  let fastMode = s().fastMode;
  if (Nxe(), aE(e, s(), mainLoopModel, l), a(b => ({
    ...b,
    mainLoopModel: mainLoopModel,
    mainLoopModelForSession: null
  })), r !== void 0) c("model_switch", "family_alias_stepped_down");else g("model_switch");
  let fastMode_2 = $s() ? WL(mainLoopModel, fastMode) : !!fastMode;
  if ($s()) {
    if (L3(), fastMode_2 !== !!fastMode) a(b => ({
      ...b,
      fastMode: fastMode_2
    })), zL(fastMode, fastMode_2);
  }
  let _ = n ? await jqt(mainLoopModel, u) : null;
  f?.(_);
  let h = _?.kind === "saved",
    S = `${fEe}${dw(BE(mainLoopModel))}${h ? rye : " for this session only"}`;
  S += NBe(fastMode, fastMode_2, mainLoopModel, {
    announceKeptOn: !0
  }), S += Wqt(_), S += (h ? qYo(mainLoopModel) : "") || YYo(mainLoopModel);
  let O = Ct() ? null : Etr(qhe(mainLoopModel), s().autoCompactWindow);
  if (O !== null) S += `
${O.text}`;
  return S;
}
var W = 3000,
  wtr = 15000;
async function jqt(e, o, s = W) {
  let a = qn("userSettings", {
    model: e ?? void 0
  }, void 0, o);
  a.then(l => l.error ? void 0 : E(e)).catch(() => {});
  let n = await we(a, s);
  if (n === void 0) return c("model_set_default", "unconfirmed"), {
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
function Wqt(e) {
  if (e === null || e.kind === "saved") return "";
  let o = ks(un("userSettings") ?? "settings.json");
  switch (e.kind) {
    case "unconfirmed":
      return ` \xB7 couldn't confirm it was saved as your default (${o} is still being written)`;
    case "failed":
      {
        let cause = e.error.cause,
          a = cause instanceof Error ? `can't be written (${k(cause) ?? vwt(cause.message)})` : "isn't valid JSON";
        return ` \xB7 couldn't save it as your default: ${o} ${a}`;
      }
  }
}
function qYo(e) {
  let ANTHROPIC_MODEL = i.ANTHROPIC_MODEL;
  if (!ANTHROPIC_MODEL || !uo(ANTHROPIC_MODEL)) return "";
  if (!C(e ?? qk(), ANTHROPIC_MODEL)) return "";
  return v("ANTHROPIC_MODEL is set to ", nM(ANTHROPIC_MODEL), " \u2014 new sessions use that while it is set");
}
function C(e, o) {
  let s = Vt(e),
    a = Vt(o);
  return eH(e) || rt(s, {
    identity: !0
  }) !== rt(a, {
    identity: !0
  }) || /\[1m\]$/i.test(s) !== /\[1m\]$/i.test(a);
}
function YYo(e) {
  let o = DA("model");
  if (o !== "projectSettings" && o !== "localSettings" && o !== "policySettings") {
    let n = NZe();
    if (n !== null && e !== null && o !== "flagSettings" && !i.ANTHROPIC_MODEL && C(e, n.model)) return F(n);
    return "";
  }
  if (o !== "policySettings") {
    let n = NZe();
    if (n !== null && !i.ANTHROPIC_MODEL) {
      if (e === null) return "";
      if (C(e, n.model)) return F(n);
      return "";
    }
  }
  let s = be(o)?.model;
  if (s === void 0 || e === s) return "";
  let a = o === "policySettings" ? "Managed settings" : rP(o);
  return v(`${a} pins `, nM(s), " \u2014 that applies on restart");
}
function v(e, o, s) {
  return `${Se.dim(`
     ${e}`)}${dw(o)}${Se.dim(s)}`;
}
function F(e) {
  let o = nM(e.model);
  switch (e.kind) {
    case "org":
      return v("Your organization's default (", o, ") applies on restart");
    case "standard":
      return v("Your organization's default model isn't available in this build, so the standard default (", o, ") applies on restart");
  }
}
function L(e) {
  return $t(e.toLowerCase().trim()) === "opusplan" ? [eb(), Vt(e)] : [Vt(e)];
}
function H(e) {
  let o = e.toLowerCase().trim(),
    s = $t(o);
  if (s === o || !rwn(o)) return null;
  if (RA()) return {
    kind: "disabled"
  };
  let a = L(o).find(item => f$t(item));
  if (a !== void 0) return {
    kind: "unsupported",
    carrier: $t(a)
  };
  if (eH(s) && Pfe(o) === null) return {
    kind: "noModeDependentVariant"
  };
  return null;
}
function XYo(e) {
  let o = e.toLowerCase();
  if (!(o.includes("opus") && o.includes("[1m]"))) return !1;
  if (L(e).every(item => uC(item))) return !1;
  return !g4() && !jbe();
}
var j = new Set(["claude-sonnet-4-5", "claude-sonnet-4-0", "claude-3-7-sonnet", "claude-3-5-sonnet"]);
function JYo(e) {
  let o = e.toLowerCase();
  if (!(o.includes("sonnet") && o.includes("[1m]") || o.trim() === "opusplan[1m]")) return !1;
  if (j.has(rt(o.trim(), {
    identity: !0
  }))) return !1;
  if (uC(Vt(e))) return !1;
  return !y4();
}
function qhe(e) {
  return Vt(e ?? qk());
}
function R3r(e, mainLoopModel_2, mainLoopModelForSession, a, n) {
  if (n === void 0) return !1;
  let l = ab();
  if (l === 0 || l === a) return !1;
  let r = Gn(qhe(e));
  if (r === Gn(qhe(Rde({
    mainLoopModel: mainLoopModel_2,
    mainLoopModelForSession: mainLoopModelForSession
  })))) return !1;
  let u = n.response?.message.model;
  return !(typeof u === "string" && (u === r || tqn(r)?.has(u) === !0));
}
function ewn(e) {
  let o = dw(BE(e.mainLoopModel)),
    s = xl(e),
    a = s !== void 0 ? ` (effort: ${s})` : "",
    n = w8e(e.mainLoopModelForSession, e.mainLoopModel);
  if (n !== null) return `${_to}${dw(BE(n))} (this session only)${a}
Base model: ${o}`;
  let l = hLe(),
    r = l !== void 0 ? ` (${Jkr(dw(BE(l.previousModel)))})` : "";
  return `${_to}${o}${r}${a}`;
}
function ktr(e) {
  let o = Vt(e ?? qk());
  return tUi(o);
}
function Yhe(e) {
  if (e === null) return !1;
  return Xoe(Vt(e));
}
function D(e, o) {
  return !1;
}
function R(e) {
  if (e.notFound) return "not_found";
  if (e.permissionDenied) return "unavailable_for_account";
  if (e.notAllowed) return "restricted_by_org";
  if (e.authFailed) return "auth_failed";
  if (e.creditsRequired && e.serverRefusedModel) return "credits_required";
  if (e.rateLimited) return "rate_limit";
  if (e.retryable) return "check_failed";
  return e.rejected ? "check_rejected" : void 0;
}
function P(code) {
  return code === void 0 ? {} : {
    code: code
  };
}
function z(e) {
  try {
    return XNe(e) ? "denied_by_managed_settings" : "not_allowed";
  } catch {
    return "not_allowed";
  }
}
export { NBe, Zli, BE, FBe, cx, tat, xp, LK, nat, wtr, jqt, Wqt, qYo, YYo, XYo, JYo, qhe, R3r, ewn, ktr, Yhe };