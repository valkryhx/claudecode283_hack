// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { Mt, zu, t2e, n2e, d, k } from "B:/~BUN/root/chunk-3aez4b53.js";
import { je } from "B:/~BUN/root/chunk-89mss1tj.js";
import { a } from "B:/~BUN/root/chunk-yt0knyw7.js";
import { vGe } from "B:/~BUN/root/chunk-jpdys232.js";
import { t } from "B:/~BUN/root/chunk-6za2ez23.js";
import { l } from "B:/~BUN/root/chunk-c09hf5e4.js";
import { bBt, Or, xe, xi } from "B:/~BUN/root/chunk-8pmnanyd.js";
import { GK, T_, Zje, yYn, Yr, Cln, sEe, It, uEe, Ce } from "B:/~BUN/root/chunk-hb6x4e3n.js";
import { Vyt, JMe, dBt, Gge } from "B:/~BUN/root/chunk-245a2x6v.js";
import { kkr, U3e, Yho } from "B:/~BUN/root/chunk-8w42v0dp.js";
import { ADn, iU } from "B:/~BUN/root/chunk-9grc6xh0.js";
import { Qce } from "B:/~BUN/root/chunk-8pa630py.js";
import { _4, the } from "B:/~BUN/root/chunk-j0ghr71r.js";
var _ = new Set(["fetch_error", "unknown", "org_level_disabled_until"]);
function b() {
  return Or().providerCache.validatedModels;
}
async function fcr(e, o) {
  let model = e.trim();
  if (!model) return {
    valid: !1,
    error: "Model name cannot be empty"
  };
  if (!Yr(model, o.skipEntitlementDenyOverlay ? {
    skipEntitlementDenyOverlay: !0
  } : void 0)) return {
    valid: !1,
    error: `Model '${model}' is not in the list of available models`,
    notAllowed: !0
  };
  if (!o.forceServerProbe) {
    let c = model.toLowerCase();
    if (_4.includes(c)) return {
      valid: !0
    };
    if (model === a.ANTHROPIC_CUSTOM_MODEL_OPTION) return {
      valid: !0
    };
    if (Yho(model) && sEe()?.picker.options.some(f => f.model.trim() === model)) return {
      valid: !0
    };
    if (b().has(model)) return {
      valid: !0
    };
  }
  let n = xe(),
    ANTHROPIC_BASE_URL = a.ANTHROPIC_BASE_URL,
    i = ANTHROPIC_BASE_URL && URL.canParse(ANTHROPIC_BASE_URL) ? new URL(ANTHROPIC_BASE_URL).hostname : void 0,
    u = xi() || i !== void 0 && (i === "anthropic.com" || i.endsWith(".anthropic.com") || vGe.some(item => new URL(item).hostname === i));
  if (!(n === "gateway" || n === "firstParty" && !u) && /[\s\p{Cc}\p{Cf}]/u.test(model)) return {
    valid: !1,
    error: `Model '${model}' not found`,
    notFound: !0
  };
  if (o.serverProbe === !1) return {
    valid: !0
  };
  try {
    return await iU({
      model: model,
      max_tokens: 1,
      maxRetries: 0,
      querySource: "model_validation",
      resendWithoutRefusedContext1m: !0,
      credentials: o.credentials,
      timeout: o.timeout,
      signal: o.signal,
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
async function g(e, o) {
  let r = Or(),
    generation = r.sessionModelDenyReprobe.generation,
    abortController = new AbortController(),
    probe = await je(fcr(e, {
      forceServerProbe: o.forceServerProbe,
      skipEntitlementDenyOverlay: o.skipEntitlementDenyOverlay,
      credentials: o.credentials,
      timeout: o.deadlineMs,
      signal: abortController.signal
    }), o.deadlineMs);
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
async function lZr(e, o, deadlineMs) {
  if (deadlineMs === void 0 || o.serverProbe === !1) return fcr(e, o);
  let {
    probe: probe_2,
    accountChanged: accountChanged_2
  } = await g(e, {
    ...o,
    deadlineMs: deadlineMs
  });
  if (probe_2 === void 0 || accountChanged_2) {
    let i = GK("model");
    return {
      valid: !1,
      error: `Couldn't confirm model "${T_(e)}" with the API. ${i ? `Try again, or run ${i} to see available models.` : "Try again."}`,
      retryable: !0
    };
  }
  return probe_2;
}
function R6t(e) {
  let o = e.toLowerCase().trim();
  return the(o);
}
function dZr(e) {
  return R6t(e) || Cln(e) ? It(e) : e;
}
async function hbe(e, o, credentials) {
  try {
    if (!Yr(e, {
      skipEntitlementDenyOverlay: !0
    })) return "denied_by_policy";
    let n = dZr(e);
    if (R6t(n)) return "denied_by_policy";
    let s = Or(),
      {
        confirmedEntitlementDenies: confirmedEntitlementDenies,
        overturnedEntitlementDenies: overturnedEntitlementDenies
      } = s.providerCache,
      p = Zje(n),
      c = confirmedEntitlementDenies.get(p);
    if (c !== void 0 && Date.now() - c < bBt) return "denied_by_server";
    let {
      probe: probe_3,
      accountChanged: accountChanged_3
    } = await g(n, {
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
      let m = Date.now();
      confirmedEntitlementDenies.set(p, m);
      for (let v of uEe()) if (yYn(v, e)) confirmedEntitlementDenies.set(Zje(v.apiName), m);
      return "denied_by_server";
    }
    confirmedEntitlementDenies.delete(p);
    let E = Date.now();
    for (let m of uEe()) if (yYn(m, e)) overturnedEntitlementDenies.set(Zje(m.apiName), E);
    try {
      await S(e, o);
    } catch (error) {
      if (k(error) !== void 0) t(`[model-access] stale-deny eviction failed: ${d(error)}`, {
        level: "warn"
      });else l(error);
    }
    return Qce(o, credentials), "overturned";
  } catch (error) {
    return l(error), "probe_failed";
  }
}
async function S(e, o) {
  await Ce(r => {
    let modelAccessCache = r.modelAccessCache;
    if (!modelAccessCache?.length) return r;
    let modelAccessCache_2 = modelAccessCache.filter(item => {
      if (item == null || typeof item !== "object" || typeof item.apiName !== "string" || typeof item.entitled !== "boolean") return !0;
      return !yYn(item, e);
    });
    return modelAccessCache_2.length === modelAccessCache.length ? r : {
      ...r,
      modelAccessCache: modelAccessCache_2
    };
  }, o);
}
function M(e, o) {
  if (e instanceof n2e) {
    let n = ADn(o),
      s = n ? `. Try '${n}' instead` : "";
    return {
      valid: !1,
      error: `Model '${o}' not found${s}`,
      notFound: !0,
      ...(JMe(e) && {
        serverRefusedModel: !0
      })
    };
  }
  if (e instanceof Mt) {
    if (e instanceof t2e) return {
      valid: !1,
      error: "Authentication failed. Please check your API credentials.",
      authFailed: !0
    };
    if (e instanceof zu) return {
      valid: !1,
      error: "Network error. Please check your internet connection.",
      retryable: !0
    };
    let n = e.error;
    if (n && typeof n === "object" && "type" in n && n.type === "not_found_error" && "message" in n && typeof n.message === "string" && n.message.includes("model:")) return {
      valid: !1,
      error: `Model '${o}' not found`,
      notFound: !0,
      serverRefusedModel: !0
    };
    if (Vyt(e)) return {
      valid: !1,
      error: `Model '${o}' isn't available for your account`,
      permissionDenied: !0,
      serverRefusedModel: !0
    };
    let s = n?.error?.details,
      i = e.status === 429 && s?.error_code === "credits_required",
      u = e.headers?.get?.(kkr),
      p = i && !u && !_.has(e.headers?.get?.(U3e) ?? s?.disabled_reason ?? "");
    return {
      valid: !1,
      error: `API error: ${Gge(e).replace(/[.!?\u2026]+$/, "")} \xB7 model not changed`,
      ...(A(e.status) && {
        retryable: !0
      }),
      ...(i && {
        creditsRequired: !0
      }),
      ...(e.status === 400 && dBt(e) && {
        sessionModeRefused: !0
      }),
      ...(e.status === 429 && !i && (u === "five_hour" || u === "seven_day") && {
        sharedLimitReached: !0
      }),
      ...(p && {
        serverRefusedModel: !0
      })
    };
  }
  return {
    valid: !1,
    error: `Unable to validate model: ${e instanceof Error ? e.message : String(e)}`,
    retryable: !0
  };
}
function A(e) {
  return e === void 0 || e === 408 || e === 429 || e >= 500;
}
export { fcr, lZr, R6t, dZr, hbe };