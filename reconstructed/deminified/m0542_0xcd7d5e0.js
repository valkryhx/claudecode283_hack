// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { Ot, Np, V_e, q_e, l, v } from "B:/~BUN/root/chunk-bgthmgyc.js";
import { nt } from "B:/~BUN/root/chunk-17wqwt36.js";
import { a } from "B:/~BUN/root/chunk-nkmmqnq7.js";
import { uxe } from "B:/~BUN/root/chunk-zksmb712.js";
import { t } from "B:/~BUN/root/chunk-qe2zga5e.js";
import { d } from "B:/~BUN/root/chunk-zs3ycjed.js";
import { Ie, Os } from "B:/~BUN/root/chunk-sd4cj2qx.js";
import { NNt, Hr, L6, mb, rRe, Zdn, Vr, ZNt, mce, Tt, bce, Ee } from "B:/~BUN/root/chunk-gf53qpk6.js";
import { SBt, zne } from "B:/~BUN/root/chunk-zafy1b6k.js";
import { lQt, EM } from "B:/~BUN/root/chunk-3jyp964r.js";
import { wCr } from "B:/~BUN/root/chunk-1mdeqc2r.js";
import { S7 } from "B:/~BUN/root/chunk-2jqr7z7w.js";
import { j1, G5e } from "B:/~BUN/root/chunk-r833zsf7.js";
function g() {
  return Hr().providerCache.validatedModels;
}
async function PAn(e, o) {
  let model = e.trim();
  if (!model) return {
    valid: !1,
    error: "Model name cannot be empty"
  };
  if (!Vr(model, o.skipEntitlementDenyOverlay ? {
    skipEntitlementDenyOverlay: !0
  } : void 0)) return {
    valid: !1,
    error: `Model '${model}' is not in the list of available models`,
    notAllowed: !0
  };
  if (!o.forceServerProbe) {
    let f = model.toLowerCase();
    if (j1.includes(f)) return {
      valid: !0
    };
    if (model === a.ANTHROPIC_CUSTOM_MODEL_OPTION) return {
      valid: !0
    };
    if (wCr(model) && mce()?.picker.options.some(c => c.model.trim() === model)) return {
      valid: !0
    };
    if (g().has(model)) return {
      valid: !0
    };
  }
  let n = Ie(),
    ANTHROPIC_BASE_URL = a.ANTHROPIC_BASE_URL,
    i = ANTHROPIC_BASE_URL && URL.canParse(ANTHROPIC_BASE_URL) ? new URL(ANTHROPIC_BASE_URL).hostname : void 0,
    m = Os() || i !== void 0 && (i === "anthropic.com" || i.endsWith(".anthropic.com") || uxe.some(item => new URL(item).hostname === i));
  if (!(n === "gateway" || n === "firstParty" && !m) && /[\s\p{Cc}\p{Cf}]/u.test(model)) return {
    valid: !1,
    error: `Model '${model}' not found`,
    notFound: !0
  };
  if (o.serverProbe === !1) return {
    valid: !0
  };
  try {
    return await EM({
      model: model,
      max_tokens: 1,
      maxRetries: 0,
      querySource: "model_validation",
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
    }), g().add(model), {
      valid: !0
    };
  } catch (error) {
    return _(error, model);
  }
}
var deadlineMs_2 = 15000;
async function y(e, o) {
  let r = Hr(),
    generation = r.sessionModelDenyReprobe.generation,
    abortController = new AbortController(),
    probe = await nt(PAn(e, {
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
async function Sdr(e, o, deadlineMs) {
  if (deadlineMs === void 0 || o.serverProbe === !1) return PAn(e, o);
  let {
    probe: probe_2,
    accountChanged: accountChanged_2
  } = await y(e, {
    ...o,
    deadlineMs: deadlineMs
  });
  if (probe_2 === void 0 || accountChanged_2) {
    let i = L6("model");
    return {
      valid: !1,
      error: `Couldn't confirm model "${mb(e)}" with the API. ${i ? `Try again, or run ${i} to see available models.` : "Try again."}`,
      retryable: !0
    };
  }
  return probe_2;
}
function ikt(e) {
  let o = e.toLowerCase().trim();
  return G5e(o);
}
function wdr(e) {
  return ikt(e) || ZNt(e) ? Tt(e) : e;
}
async function Qoe(e, o, credentials) {
  try {
    if (!Vr(e, {
      skipEntitlementDenyOverlay: !0
    })) return "denied_by_policy";
    let n = wdr(e);
    if (ikt(n)) return "denied_by_policy";
    let s = Hr(),
      {
        confirmedEntitlementDenies: confirmedEntitlementDenies,
        overturnedEntitlementDenies: overturnedEntitlementDenies
      } = s.providerCache,
      p = rRe(n),
      f = confirmedEntitlementDenies.get(p);
    if (f !== void 0 && Date.now() - f < NNt) return "denied_by_server";
    let {
      probe: probe_3,
      accountChanged: accountChanged_3
    } = await y(n, {
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
      let u = Date.now();
      confirmedEntitlementDenies.set(p, u);
      for (let b of bce()) if (Zdn(b, e)) confirmedEntitlementDenies.set(rRe(b.apiName), u);
      return "denied_by_server";
    }
    confirmedEntitlementDenies.delete(p);
    let S = Date.now();
    for (let u of bce()) if (Zdn(u, e)) overturnedEntitlementDenies.set(rRe(u.apiName), S);
    try {
      await E(e, o);
    } catch (error) {
      if (v(error) !== void 0) t(`[model-access] stale-deny eviction failed: ${l(error)}`, {
        level: "warn"
      });else d(error);
    }
    return S7(o, credentials), "overturned";
  } catch (error) {
    return d(error), "probe_failed";
  }
}
async function E(e, o) {
  await Ee(r => {
    let modelAccessCache = r.modelAccessCache;
    if (!modelAccessCache?.length) return r;
    let modelAccessCache_2 = modelAccessCache.filter(item => {
      if (item == null || typeof item !== "object" || typeof item.apiName !== "string" || typeof item.entitled !== "boolean") return !0;
      return !Zdn(item, e);
    });
    return modelAccessCache_2.length === modelAccessCache.length ? r : {
      ...r,
      modelAccessCache: modelAccessCache_2
    };
  }, o);
}
function _(e, o) {
  if (e instanceof q_e) {
    let n = lQt(o),
      s = n ? `. Try '${n}' instead` : "";
    return {
      valid: !1,
      error: `Model '${o}' not found${s}`,
      notFound: !0
    };
  }
  if (e instanceof Ot) {
    if (e instanceof V_e) return {
      valid: !1,
      error: "Authentication failed. Please check your API credentials.",
      authFailed: !0
    };
    if (e instanceof Np) return {
      valid: !1,
      error: "Network error. Please check your internet connection.",
      retryable: !0
    };
    let n = e.error;
    if (n && typeof n === "object" && "type" in n && n.type === "not_found_error" && "message" in n && typeof n.message === "string" && n.message.includes("model:")) return {
      valid: !1,
      error: `Model '${o}' not found`,
      notFound: !0
    };
    if (SBt(e)) return {
      valid: !1,
      error: `Model '${o}' isn't available for your account`,
      permissionDenied: !0
    };
    let s = e.status === 429 && n?.error?.details?.error_code === "credits_required";
    return {
      valid: !1,
      error: `API error: ${zne(e).replace(/[.!?\u2026]+$/, "")} \xB7 model not changed`,
      ...(P(e.status) && {
        retryable: !0
      }),
      ...(s && {
        creditsRequired: !0
      })
    };
  }
  return {
    valid: !1,
    error: `Unable to validate model: ${e instanceof Error ? e.message : String(e)}`,
    retryable: !0
  };
}
function P(e) {
  return e === void 0 || e === 408 || e === 429 || e >= 500;
}
export { PAn, Sdr, ikt, wdr, Qoe };