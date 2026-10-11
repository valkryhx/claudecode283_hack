// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { Lp, yre, xjt } from "B:/~BUN/root/chunk-4rk7cwxz.js";
import { l, v, Xs } from "B:/~BUN/root/chunk-bgthmgyc.js";
import { nt } from "B:/~BUN/root/chunk-17wqwt36.js";
import { a } from "B:/~BUN/root/chunk-nkmmqnq7.js";
import { t } from "B:/~BUN/root/chunk-qe2zga5e.js";
import { pe } from "B:/~BUN/root/chunk-nf4z9ga7.js";
import { _, m, p } from "B:/~BUN/root/chunk-51n463p1.js";
import { UI } from "B:/~BUN/root/chunk-ah3egpyh.js";
import { xa } from "B:/~BUN/root/chunk-qqgpf856.js";
import { wr, he, Nx, ln } from "B:/~BUN/root/chunk-3rzkfay5.js";
import { L6, mo, Yy, sC, iC, JF, cce, QF, ZF, Khe, C0, Vr, bN, Zz, tun, $6, sh, yq, du, R0, pce, FS, _y, Zdt, lun, bl, Be, bq, g1, e2, wi, Tt, cD, Vd, Qy, pt, Dt } from "B:/~BUN/root/chunk-gf53qpk6.js";
import { hIt, aEe, SV, wae, xLe, WSo, MKe, irn } from "B:/~BUN/root/chunk-1mdeqc2r.js";
import { Za, jLt, Fs } from "B:/~BUN/root/chunk-3hjtxzqy.js";
import { fx, SLt, ql } from "B:/~BUN/root/chunk-t1afcev5.js";
import { S7 } from "B:/~BUN/root/chunk-2jqr7z7w.js";
import { Dve, K4, BRt, jRt, CM, R_r, $y, Z_, Lve, ZDn } from "B:/~BUN/root/chunk-3jyp964r.js";
import { Yoo, lkt, Ape, _4, _G } from "B:/~BUN/root/chunk-pfpays63.js";
import { Sdr, ikt, wdr, Qoe } from "B:/~BUN/root/chunk-mht1nqv1.js";
import { Jt, Ln } from "B:/~BUN/root/chunk-r833zsf7.js";
function k(e, o, r) {
  if (!pt()) return !1;
  let s = e !== null ? Tt(e) : bl(),
    n = s.toLowerCase(),
    d = n.includes("opus") || n.includes("fable"),
    i = n.includes("opus-4-6"),
    c = n.includes("sonnet-4-6");
  if (o && Yy(e)) return !0;
  if ((n.includes("fable") || $6(s)) && !SV() && (aEe() || wae())) return !0;
  if (!Vd(n)) return !1;
  if (d && r) return !1;
  return i || c;
}
function Cpe(e, o, r, s) {
  let n = mo(),
    d = n && o && (!e || s?.announceKeptOn === !0),
    i = n && !!e && !o;
  return (d ? " \xB7 Fast mode ON" : "") + (k(r, o, g1()) ? " \xB7 Draws from usage credits" : "") + (i ? " \xB7 Fast mode OFF" : "");
}
function Koo(e, o, r) {
  if (!!e === o) return null;
  return o ? `Fast mode ON${k(r, !0, g1()) ? " \xB7 Draws from usage credits" : ""}` : "Fast mode OFF";
}
var timeout = 5000;
async function C(e) {
  if (e === null) return h("follows_account");
  if (R(e)) return h("not_representable");
  if (Ape() !== "primary") return h("not_primary");
  if (cce() !== "served") return h("not_served");
  let o = _4();
  if (o === null || o.kind !== "account") return h("no_account_scope");
  return L(o, _G(), e);
}
async function L(e, o, r) {
  let s = {
    model: Tt(r)
  };
  try {
    let n = await Dt.patch(`/api/organizations/:orgUUID/model_selector_state/${o}`, s, {
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
    return t(`[servedCatalog] selection write (${o}) ok`), _("model_default_server_sync"), await T(e, o, n.data, s.model), {
      status: "ok",
      httpStatus: httpStatus
    };
  } catch (error) {
    let kind = Xs(error).kind;
    return t(`[servedCatalog] selection write (${o}) failed: ${kind}`), p("model_default_server_sync", `network_${kind}`), {
      status: "error",
      reason: "network"
    };
  }
}
async function T(e, id, r, model) {
  let n = Yoo(e, id);
  if (n === void 0 || n.catalog === null) return;
  let d = hIt().safeParse(r),
    state = d.success && d.data.id === id ? d.data : {
      ...(n.catalog.state ?? {
        id: id
      }),
      model: model,
      selection_source: "user_setting"
    };
  await lkt(e, id, {
    ...n,
    staleAt: Math.min(n.staleAt, Date.now()),
    catalog: {
      ...n.catalog,
      state: state
    }
  });
}
function h(reason) {
  return t(`[servedCatalog] selection write skipped: ${reason}`), {
    status: "skipped",
    reason: reason
  };
}
function R(e) {
  let o = e.trim().toLowerCase();
  return o === "opusplan" || o === "opusplan[1m]";
}
async function Rpe(e, o, credentials, s) {
  let model_2 = e === "default" ? null : e;
  if (model_2 === null) {
    let message = C0(_y(), "switch");
    if (message !== null) return m("model_switch", "denied_by_managed_settings"), {
      ok: !1,
      message: message,
      code: "restricted_by_org"
    };
  }
  let substitutedFrom;
  if (model_2) {
    let i = I(model_2);
    if (i !== null) {
      let c = Jt(model_2.trim().toLowerCase()),
        u = L6("model");
      switch (i.kind) {
        case "disabled":
          return m("model_switch", "alias_1m_disabled"), {
            ok: !1,
            message: u ? `1M context is turned off here (CLAUDE_CODE_DISABLE_1M_CONTEXT is set), so '${model_2}' isn't available. Run ${u} ${c} instead.` : `1M context is turned off (CLAUDE_CODE_DISABLE_1M_CONTEXT is set), so '${model_2}' isn\u2019t available. Switch to ${c} instead.`,
            code: "alias_1m_disabled"
          };
        case "unsupported":
          return m("model_switch", "alias_1m_unsupported"), {
            ok: !1,
            message: u ? `${wi(i.carrier)} doesn't have a 1M context window, so '${model_2}' isn't available. Run ${u} ${c} to use it with its standard context window.` : `${wi(i.carrier)} doesn\u2019t have a 1M context window, so '${model_2}' isn\u2019t available. Switch to ${c} to use its standard context window.`,
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
  if (model_2 && QF(model_2, ZF())) {
    let i = FS(model_2);
    if (i === null) {
      let c = await Qoe(model_2, o, credentials);
      if (c !== "overturned") {
        m("model_switch", c === "probe_failed" ? "entitlement_probe_failed" : "denied_by_entitlement");
        let u = L6("model");
        return {
          ok: !1,
          message: `Model '${model_2}' is restricted by your organization's settings. ${u ? `Run ${u} to choose a different model.` : "Switch to a different model."}`,
          code: c === "probe_failed" ? "check_failed" : "restricted_by_org"
        };
      }
    } else substitutedFrom = model_2, model_2 = i;
  } else if (model_2 && !Vr(model_2)) {
    let i = FS(model_2);
    if (i === null) return m("model_switch", B(model_2)), {
      ok: !1,
      message: `Model '${model_2}' is not available. Your organization restricts model selection.`,
      code: "restricted_by_org"
    };
    substitutedFrom = model_2, model_2 = i;
  }
  if (model_2 && _dr(model_2)) return m("model_switch", "opus_1m_unavailable"), {
    ok: !1,
    message: "Opus with 1M context is not available for your account. Learn more: https://code.claude.com/docs/en/model-config#extended-context-with-1m",
    code: "unavailable_for_account"
  };
  if (model_2 && bdr(model_2)) return m("model_switch", "sonnet_1m_unavailable"), {
    ok: !1,
    message: "Sonnet with 1M context is not available for your account. Learn more: https://code.claude.com/docs/en/model-config#extended-context-with-1m",
    code: "unavailable_for_account"
  };
  if (model_2) {
    let i = yq(model_2);
    if (i) switch (i.reason) {
      case "disabled":
        if (i.notOffered) return m("model_switch", "not_offered"), {
          ok: !1,
          message: tun(model_2),
          code: "not_offered"
        };
        return m("model_switch", "disabled_by_org"), {
          ok: !1,
          message: `Model '${model_2}' is not currently available for your account${i.description ? `. ${i.description}` : "."}`,
          code: "unavailable_for_account"
        };
      case "absent":
        {
          let c = await Sdr(wdr(model_2), {
            forceServerProbe: !0,
            credentials: credentials
          }, s?.deadlineMs);
          if (!c.valid) {
            m("model_switch", c.notFound ? "fable_unavailable" : "fable_probe_failed");
            let u = L6("model");
            return {
              ok: !1,
              message: c.notFound ? `${i.displayName} isn't available for your account yet. ${u ? `Run ${u} to pick another model.` : "Switch to a different model."}` : c.error,
              ...x(c.notFound || c.permissionDenied ? "unavailable_for_account" : E(c))
            };
          }
          return S7(o, credentials), {
            ok: !0,
            model: ikt(model_2) ? model_2.trim().toLowerCase() : model_2,
            ...(substitutedFrom !== void 0 && {
              substitutedFrom: substitutedFrom
            })
          };
        }
    }
  }
  if (!model_2) return {
    ok: !0,
    model: model_2
  };
  if (ikt(model_2)) return {
    ok: !0,
    model: model_2.trim().toLowerCase()
  };
  try {
    let i = await Sdr(model_2, {
        credentials: credentials,
        ...(s?.confirmWithServer === !1 && {
          serverProbe: !1
        })
      }, s?.deadlineMs),
      c = !i.valid && i.creditsRequired === !0 && s?.acceptCreditsRequired === !0 && RYt(F(model_2));
    if (!i.valid && !c) return m("model_switch", "invalid_model"), {
      ok: !1,
      message: i.error,
      ...x(E(i))
    };
    return {
      ok: !0,
      model: F(model_2),
      ...(substitutedFrom !== void 0 && {
        substitutedFrom: substitutedFrom
      }),
      ...(!i.valid && {
        creditsRefusal: i.error
      })
    };
  } catch (error) {
    return m("model_switch", "validate_exception"), {
      ok: !1,
      message: `Failed to validate model: ${l(error)}`,
      code: "check_failed"
    };
  }
}
function F(e) {
  return e;
}
async function sk(e, o, requestedModel, source, n = {}) {
  let d = o(),
    i = CM(d),
    c = N(d, requestedModel);
  if (c.length === 0) return {
    decision: "proceed",
    skipConfirm: !1,
    messages: []
  };
  let messages = [],
    reason_2,
    M = !1,
    skipConfirm = !0;
  for (let S of c) {
    let g = await R_r(e, {
      ...S,
      requestedModel: requestedModel,
      source: source
    }, {
      signal: n.signal
    });
    if (messages.push(...g.messages), g.decision === "block") return {
      decision: "block",
      reason: g.reason,
      messages: messages
    };
    if (g.decision === "ask") M = !0, reason_2 ??= g.reason;else skipConfirm = skipConfirm && g.skipConfirm;
  }
  if (CM(o()) !== i) {
    if (n.revalidating) return {
      decision: "block",
      reason: "the session model changed while a PreModelSwitch hook was running; pick again",
      messages: messages
    };
    let S = await sk(e, o, requestedModel, source, {
      ...n,
      revalidating: !0
    });
    return {
      ...S,
      messages: [...messages, ...S.messages]
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
function N(e, o) {
  let r = jRt(e),
    mode = e.toolPermissionContext.mode,
    n = [mode, mode === "plan" ? "default" : "plan"],
    d = new Set(),
    i = [];
  for (let c of n) {
    let fromModel = BRt(r, c),
      toModel = BRt(o, c),
      M = `${fromModel}\x00${toModel}`;
    if (fromModel !== toModel && !d.has(M)) d.add(M), i.push({
      fromModel: fromModel,
      toModel: toModel
    });
  }
  return i;
}
function UOe(e) {
  return [`Model switch blocked by a PreModelSwitch hook${e.reason !== void 0 ? `: ${Td(e.reason)}` : e.decision === "ask" ? ": confirmation required, and this session cannot ask" : ""}`, ...e.messages.map(Td)].join(`
`);
}
function Td(e) {
  return Fs(Za(jLt(e.trimEnd())));
}
function xU(e, o, r) {
  return [`Model switch to ${lS(e)} was blocked by a PreModelSwitch hook${o ? `: ${Td(o)}` : ""}`, ...r.map(Td)].join(`
`);
}
async function okt(e, mainLoopModel, r, s, n, d, i, c) {
  let fastMode = r().fastMode;
  if (yre(), $y(e, r(), mainLoopModel, d), s(g => ({
    ...g,
    mainLoopModel: mainLoopModel,
    mainLoopModelForSession: null
  })), i !== void 0) p("model_switch", "family_alias_stepped_down");else _("model_switch");
  let fastMode_2 = mo() ? sC(mainLoopModel, fastMode) : !!fastMode;
  if (mo()) {
    if (JF(), fastMode_2 !== !!fastMode) s(g => ({
      ...g,
      fastMode: fastMode_2
    })), iC(fastMode, fastMode_2);
  }
  let M = n ? await XZe(mainLoopModel, c) : null,
    w = M?.kind === "saved",
    S = `${Lve}${Z_(lS(mainLoopModel))}${w ? " and saved as your default for new sessions" : " for this session only"}`;
  return S += Cpe(fastMode, fastMode_2, mainLoopModel, {
    announceKeptOn: !0
  }), S += JZe(M), S += (w ? hdr(mainLoopModel) : "") || ydr(mainLoopModel), S;
}
var A = 3000;
async function XZe(e, o, r = A) {
  let s = ln("userSettings", {
    model: e ?? void 0
  }, void 0, o);
  s.then(d => d.error ? void 0 : C(e)).catch(() => {});
  let n = await nt(s, r);
  if (n === void 0) return p("model_set_default", "unconfirmed"), {
    kind: "unconfirmed"
  };
  if (n.error) return m("model_set_default", "write_failed"), {
    kind: "failed",
    error: n.error
  };
  return _("model_set_default"), {
    kind: "saved"
  };
}
function JZe(e) {
  if (e === null || e.kind === "saved") return "";
  let o = xa(wr("userSettings") ?? "settings.json");
  switch (e.kind) {
    case "unconfirmed":
      return ` \xB7 couldn't confirm it was saved as your default (${o} is still being written)`;
    case "failed":
      {
        let cause = e.error.cause,
          s = cause instanceof Error ? `can't be written (${v(cause) ?? cause.message})` : "isn't valid JSON";
        return ` \xB7 couldn't save it as your default: ${o} ${s}`;
      }
  }
}
function hdr(e) {
  let ANTHROPIC_MODEL = a.ANTHROPIC_MODEL;
  if (!ANTHROPIC_MODEL || !Vr(ANTHROPIC_MODEL)) return "";
  if (!y(e ?? _y(), ANTHROPIC_MODEL)) return "";
  return b("ANTHROPIC_MODEL is set to ", e2(ANTHROPIC_MODEL), " \u2014 new sessions use that while it is set");
}
function y(e, o) {
  let r = Tt(e),
    s = Tt(o);
  return R0(e) || Be(r, {
    identity: !0
  }) !== Be(s, {
    identity: !0
  }) || /\[1m\]$/i.test(r) !== /\[1m\]$/i.test(s);
}
function ydr(e) {
  let o = Nx("model");
  if (o !== "projectSettings" && o !== "localSettings" && o !== "policySettings") {
    let n = Zdt();
    if (n !== null && e !== null && o !== "flagSettings" && !a.ANTHROPIC_MODEL && y(e, n.model)) return O(n);
    return "";
  }
  if (o !== "policySettings") {
    let n = Zdt();
    if (n !== null && !a.ANTHROPIC_MODEL) {
      if (e === null) return "";
      if (y(e, n.model)) return O(n);
      return "";
    }
  }
  let r = he(o)?.model;
  if (r === void 0 || e === r) return "";
  let s = o === "policySettings" ? "Managed settings" : UI(o);
  return b(`${s} pins `, e2(r), " \u2014 that applies on restart");
}
function b(e, o, r) {
  return `${pe.dim(`
     ${e}`)}${Z_(o)}${pe.dim(r)}`;
}
function O(e) {
  let o = e2(e.model);
  switch (e.kind) {
    case "org":
      return b("Your organization's default (", o, ") applies on restart");
    case "standard":
      return b("Your organization's default model isn't available in this build, so the standard default (", o, ") applies on restart");
  }
}
function D(e) {
  return Jt(e.toLowerCase().trim()) === "opusplan" ? [du(), Tt(e)] : [Tt(e)];
}
function I(e) {
  let o = e.toLowerCase().trim(),
    r = Jt(o);
  if (r === o || !ikt(o)) return null;
  if (cD()) return {
    kind: "disabled"
  };
  let s = D(o).find(item => lun(item));
  if (s !== void 0) return {
    kind: "unsupported",
    carrier: Jt(s)
  };
  if (R0(r) && pce(o) === null) return {
    kind: "noModeDependentVariant"
  };
  return null;
}
function _dr(e) {
  let o = e.toLowerCase();
  if (!(o.includes("opus") && o.includes("[1m]"))) return !1;
  if (D(e).every(item => Qy(item))) return !1;
  return !bN() && !g1();
}
var U = new Set(["claude-sonnet-4-5", "claude-sonnet-4-0", "claude-3-7-sonnet", "claude-3-5-sonnet"]);
function bdr(e) {
  let o = e.toLowerCase();
  if (!(o.includes("sonnet") && o.includes("[1m]") || o.trim() === "opusplan[1m]")) return !1;
  if (U.has(Be(o.trim(), {
    identity: !0
  }))) return !1;
  if (Qy(Tt(e))) return !1;
  return !Zz();
}
function lS(e) {
  let o = bq(e ?? _y());
  return e === null ? `${o} (default)` : o;
}
function y4(e) {
  return Tt(e ?? _y());
}
function xAn(e, mainLoopModel_2, mainLoopModelForSession, s, n) {
  if (n === void 0) return !1;
  let d = Lp();
  if (d === 0 || d === s) return !1;
  let i = Ln(y4(e));
  if (i === Ln(y4(K4({
    mainLoopModel: mainLoopModel_2,
    mainLoopModelForSession: mainLoopModelForSession
  })))) return !1;
  let c = n.response?.message.model;
  return !(typeof c === "string" && (c === i || xjt(i)?.has(c) === !0));
}
function skt(e) {
  let o = Z_(lS(e.mainLoopModel)),
    r = ql(e),
    s = r !== void 0 ? ` (effort: ${r})` : "",
    n = Dve(e.mainLoopModelForSession, e.mainLoopModel);
  if (n !== null) return `${ZDn}${Z_(lS(n))} (this session only)${s}
Base model: ${o}`;
  let d = MKe(),
    i = d !== void 0 ? ` (${irn(Z_(lS(d.previousModel)))})` : "";
  return `${ZDn}${o}${i}${s}`;
}
function RYt(e) {
  let o = e ?? _y();
  if (!sh(Tt(o))) return !1;
  return WSo();
}
function J5(e) {
  if (e === null) return !1;
  return sh(Tt(e)) && xLe();
}
function BOe(e, level) {
  if (level === void 0) return;
  if (level !== "ultracode") return {
    level: level,
    fromUltracode: !1,
    ultracode: !1
  };
  return fx(y4(e)) ? {
    level: "xhigh",
    fromUltracode: !0,
    ultracode: !0
  } : {
    level: SLt(y4(e)),
    fromUltracode: !0,
    ultracode: !1
  };
}
function E(e) {
  if (e.notFound) return "catalog_unknown";
  if (e.permissionDenied) return "unavailable_for_account";
  if (e.notAllowed) return "restricted_by_org";
  if (e.authFailed) return "auth_failed";
  return e.retryable ? "check_failed" : void 0;
}
function x(code) {
  return code === void 0 ? {} : {
    code: code
  };
}
function B(e) {
  try {
    return Khe(e) ? "denied_by_managed_settings" : "not_allowed";
  } catch {
    return "not_allowed";
  }
}
export { Cpe, Koo, Rpe, sk, UOe, Td, xU, okt, XZe, JZe, hdr, ydr, _dr, bdr, lS, y4, xAn, skt, RYt, J5, BOe };