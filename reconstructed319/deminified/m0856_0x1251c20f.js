// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { It, lf, urt, frt, d, k } from "B:/~BUN/root/chunk-y2g9f85n.js";
import { we } from "B:/~BUN/root/chunk-r5zmhp23.js";
import { i } from "B:/~BUN/root/chunk-j6pt0v41.js";
import { Tnt } from "B:/~BUN/root/chunk-y1kkrqy9.js";
import { t } from "B:/~BUN/root/chunk-2pp12te6.js";
import { on } from "B:/~BUN/root/chunk-09sn55yf.js";
import { vwt } from "B:/~BUN/root/chunk-jdtvghyw.js";
import { a } from "B:/~BUN/root/chunk-xrwdh0g4.js";
import { Uan, pr, Te, Fn, Ci } from "B:/~BUN/root/chunk-8f4z6bdn.js";
import { rAe } from "B:/~BUN/root/chunk-1s0yt4vj.js";
import { sae } from "B:/~BUN/root/chunk-wthaftk0.js";
import { JX, pf, sVe, mBn, uo, gBn, eFe, Vt, Tg, oie, aFe, Le } from "B:/~BUN/root/chunk-1ks9vs37.js";
import { Y0t, aCe, Cbs } from "B:/~BUN/root/chunk-yhafkw66.js";
import { SJ, BVe, jVe, Gin, SSe } from "B:/~BUN/root/chunk-xgg9zsk6.js";
import { Ndr, E$ } from "B:/~BUN/root/chunk-27h4st9h.js";
import { Ove } from "B:/~BUN/root/chunk-nkakgqwa.js";
import { HJ, MAe } from "B:/~BUN/root/chunk-zpne314q.js";
var h = new Set(["fetch_error", "unknown", "org_level_disabled_until"]);
function b() {
  return pr().providerCache.validatedModels;
}
async function I3r(e, n) {
  let model = e.trim();
  if (!model) return {
    valid: !1,
    error: "Model name cannot be empty"
  };
  if (!uo(model, n.skipEntitlementDenyOverlay ? {
    skipEntitlementDenyOverlay: !0
  } : void 0)) return {
    valid: !1,
    error: `Model '${pf(model)}' is not in the list of available models`,
    notAllowed: !0
  };
  if (!n.forceServerProbe) {
    let u = model.toLowerCase();
    if (HJ.includes(u)) return {
      valid: !0
    };
    if (model === i.ANTHROPIC_CUSTOM_MODEL_OPTION) return {
      valid: !0
    };
    if (Cbs(model) && eFe()?.picker.options.some(c => c.model.trim() === model)) return {
      valid: !0
    };
    if (b().has(model)) return {
      valid: !0
    };
  }
  let s = Te(),
    ANTHROPIC_BASE_URL = i.ANTHROPIC_BASE_URL,
    o = ANTHROPIC_BASE_URL && URL.canParse(ANTHROPIC_BASE_URL) ? new URL(ANTHROPIC_BASE_URL).hostname : void 0,
    m = Ci() || o !== void 0 && (o === "anthropic.com" || o.endsWith(".anthropic.com") || Tnt.some(item => new URL(item).hostname === o));
  if (!(s === "gateway" || s === "firstParty" && !m) && /[\s\p{Cc}\p{Cf}]/u.test(model)) return {
    valid: !1,
    error: `Model '${pf(model)}' not found`,
    notFound: !0
  };
  if (n.serverProbe === !1) return {
    valid: !0
  };
  try {
    return await E$({
      model: model,
      max_tokens: 1,
      maxRetries: 0,
      querySource: "model_validation",
      resendWithoutRefusedContext1m: !0,
      credentials: n.credentials,
      timeout: n.timeout,
      signal: n.signal,
      messages: [{
        role: "user",
        content: [{
          type: "text",
          text: "Hi",
          cache_control: {
            type: "ephemeral"
          }
        }]
      }]
    }), b().add(model), {
      valid: !0
    };
  } catch (error) {
    return M(error, model);
  }
}
var deadlineMs_2 = 15000;
async function y(e, n) {
  let r = pr(),
    generation = r.sessionModelDenyReprobe.generation,
    abortController = new AbortController(),
    probe = await we(I3r(e, {
      forceServerProbe: n.forceServerProbe,
      skipEntitlementDenyOverlay: n.skipEntitlementDenyOverlay,
      credentials: n.credentials,
      timeout: n.deadlineMs,
      signal: abortController.signal
    }), n.deadlineMs);
  if (probe === void 0) return abortController.abort(), {
    probe: void 0,
    accountChanged: !1
  };
  let accountChanged = r.sessionModelDenyReprobe.generation !== generation;
  if (accountChanged) r.providerCache.validatedModels.delete(e.trim());
  return {
    probe: probe,
    accountChanged: accountChanged
  };
}
async function o6o(e, n, deadlineMs) {
  if (deadlineMs === void 0 || n.serverProbe === !1) return I3r(e, n);
  let {
    probe: probe_2,
    accountChanged: accountChanged_2
  } = await y(e, {
    ...n,
    deadlineMs: deadlineMs
  });
  if (probe_2 === void 0 || accountChanged_2) {
    let o = JX("model");
    return {
      valid: !1,
      error: `Couldn't confirm model "${pf(e)}" with the API. ${o ? `Try again, or run ${o} to see available models.` : "Try again."}`,
      retryable: !0
    };
  }
  return probe_2;
}
function rwn(e) {
  let n = e.toLowerCase().trim();
  return MAe(n);
}
function s6o(e) {
  return rwn(e) || gBn(e) ? Vt(e) : e;
}
async function JOe(e, n, credentials) {
  try {
    if (!uo(e, {
      skipEntitlementDenyOverlay: !0
    })) return "denied_by_policy";
    let s = s6o(e);
    if (rwn(s)) return "denied_by_policy";
    let l = pr(),
      {
        confirmedEntitlementDenies: confirmedEntitlementDenies,
        overturnedEntitlementDenies: overturnedEntitlementDenies
      } = l.providerCache,
      p = sVe(s),
      u = confirmedEntitlementDenies.get(p);
    if (u !== void 0 && Date.now() - u < Uan) return "denied_by_server";
    let {
      probe: probe_3,
      accountChanged: accountChanged_3
    } = await y(s, {
      credentials: credentials,
      deadlineMs: deadlineMs_2,
      forceServerProbe: !0,
      skipEntitlementDenyOverlay: !0
    });
    if (probe_3 === void 0) return t("[model-access] stale-deny re-probe timed out", {
      level: "warn"
    }), "probe_failed";
    if (!probe_3.valid && !probe_3.notFound && !probe_3.permissionDenied) return "probe_failed";
    if (accountChanged_3) return t("[model-access] stale-deny re-probe answered after the account changed; recording nothing"), probe_3.valid ? "overturned" : "denied_by_server";
    if (!probe_3.valid) {
      let f = Date.now();
      confirmedEntitlementDenies.set(p, f);
      for (let v of aFe()) if (mBn(v, e)) confirmedEntitlementDenies.set(sVe(v.apiName), f);
      return "denied_by_server";
    }
    confirmedEntitlementDenies.delete(p);
    let E = Date.now();
    for (let f of aFe()) if (mBn(f, e)) overturnedEntitlementDenies.set(sVe(f.apiName), E);
    try {
      await S(e, n);
    } catch (error) {
      if (k(error) !== void 0) t(`[model-access] stale-deny eviction failed: ${d(error)}`, {
        level: "warn"
      });else a(error);
    }
    return Ove(n, credentials), "overturned";
  } catch (error) {
    return a(error), "probe_failed";
  }
}
async function S(e, n) {
  await Le(r => {
    let modelAccessCache = r.modelAccessCache;
    if (!modelAccessCache?.length) return r;
    let modelAccessCache_2 = modelAccessCache.filter(item => {
      if (item == null || typeof item !== "object" || typeof item.apiName !== "string" || typeof item.entitled !== "boolean") return !0;
      return !mBn(item, e);
    });
    return modelAccessCache_2.length === modelAccessCache.length ? r : {
      ...r,
      modelAccessCache: modelAccessCache_2
    };
  }, n);
}
function M(e, n) {
  if (e instanceof frt) {
    let r = Ndr(n),
      s = r ? `. Try '${pf(r)}' instead` : "";
    return {
      valid: !1,
      error: `Model '${pf(n)}' not found${s}`,
      notFound: !0,
      ...(jVe(e) && {
        serverRefusedModel: !0
      })
    };
  }
  if (e instanceof It) {
    if (e instanceof urt) return {
      valid: !1,
      error: "Authentication failed. Please check your API credentials.",
      authFailed: !0
    };
    if (e instanceof lf) return {
      valid: !1,
      error: "Network error. Please check your internet connection.",
      retryable: !0
    };
    let r = e.error;
    if (r && typeof r === "object" && "type" in r && r.type === "not_found_error" && "message" in r && typeof r.message === "string" && r.message.includes("model:")) return {
      valid: !1,
      error: `Model '${pf(n)}' not found`,
      notFound: !0,
      serverRefusedModel: !0
    };
    if (BVe(e)) return {
      valid: !1,
      error: `Model '${pf(n)}' isn't available for your account`,
      permissionDenied: !0,
      serverRefusedModel: !0
    };
    let s = r?.error?.details,
      l = e.status === 429 && s?.error_code === "credits_required",
      o = e.headers?.get?.(Y0t),
      m = l && !o && !h.has(e.headers?.get?.(aCe) ?? s?.disabled_reason ?? ""),
      p = vwt(on(SSe(e))).replace(/[.!?\u2026]+$/, "");
    if (SJ(e) || e.status === 403 && rAe(e.headers?.get?.("x-amzn-errortype") ?? void 0, e.message)) return {
      valid: !1,
      error: `API error: ${p} \xB7 model not changed`,
      authFailed: !0
    };
    let u = A(e.status) || e.status === 407 && Boolean(sae()) || e.status === 403 && (i.CLAUDE_CODE_REMOTE || Fn() && !Tg() && oie());
    return {
      valid: !1,
      error: `API error: ${p} \xB7 model not changed`,
      ...(u ? {
        retryable: !0
      } : {
        rejected: !0
      }),
      ...(e.status === 429 && {
        rateLimited: !0
      }),
      ...(l && {
        creditsRequired: !0
      }),
      ...(e.status === 400 && Gin(e) && {
        sessionModeRefused: !0
      }),
      ...(e.status === 429 && !l && (o === "five_hour" || o === "seven_day") && {
        sharedLimitReached: !0
      }),
      ...(m && {
        serverRefusedModel: !0
      })
    };
  }
  return {
    valid: !1,
    error: `Unable to validate model: ${vwt(on(d(e)))}`,
    retryable: !0
  };
}
function A(e) {
  return e === void 0 || e === 408 || e === 409 || e === 429 || e >= 500;
}
export { I3r, o6o, rwn, s6o, JOe };