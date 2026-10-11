// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.283
import {
  Ot,
  Np,
  V_e,
  q_e,
  l,
  v
} from "B:/~BUN/root/chunk-bgthmgyc.js";
import {
  nt
} from "B:/~BUN/root/chunk-17wqwt36.js";
import {
  a
} from "B:/~BUN/root/chunk-nkmmqnq7.js";
import {
  uxe
} from "B:/~BUN/root/chunk-zksmb712.js";
import {
  t
} from "B:/~BUN/root/chunk-qe2zga5e.js";
import {
  d
} from "B:/~BUN/root/chunk-zs3ycjed.js";
import {
  Ie,
  Os
} from "B:/~BUN/root/chunk-sd4cj2qx.js";
import {
  NNt,
  Hr,
  L6,
  mb,
  rRe,
  Zdn,
  Vr,
  ZNt,
  mce,
  Tt,
  bce,
  Ee
} from "B:/~BUN/root/chunk-gf53qpk6.js";
import {
  SBt,
  zne
} from "B:/~BUN/root/chunk-zafy1b6k.js";
import {
  lQt,
  EM
} from "B:/~BUN/root/chunk-3jyp964r.js";
import {
  wCr
} from "B:/~BUN/root/chunk-1mdeqc2r.js";
import {
  S7
} from "B:/~BUN/root/chunk-2jqr7z7w.js";
import {
  j1,
  G5e
} from "B:/~BUN/root/chunk-r833zsf7.js";

function g() {
  return Hr().providerCache.validatedModels
}
async function PAn(e, o) {
  let r = e.trim();
  if (!r) return {
    valid: !1,
    error: "Model name cannot be empty"
  };
  if (!Vr(r, o.skipEntitlementDenyOverlay ? {
      skipEntitlementDenyOverlay: !0
    } : void 0)) return {
    valid: !1,
    error: `Model '${r}' is not in the list of available models`,
    notAllowed: !0
  };
  if (!o.forceServerProbe) {
    let f = r.toLowerCase();
    if (j1.includes(f)) return {
      valid: !0
    };
    if (r === a.ANTHROPIC_CUSTOM_MODEL_OPTION) return {
      valid: !0
    };
    if (wCr(r) && mce()?.picker.options.some((c) => c.model.trim() === r)) return {
      valid: !0
    };
    if (g().has(r)) return {
      valid: !0
    }
  }
  let n = Ie(),
    s = a.ANTHROPIC_BASE_URL,
    i = s && URL.canParse(s) ? new URL(s).hostname : void 0,
    m = Os() || i !== void 0 && (i === "anthropic.com" || i.endsWith(".anthropic.com") || uxe.some((f) => new URL(f).hostname === i));
  if (!(n === "gateway" || n === "firstParty" && !m) && /[\s\p{Cc}\p{Cf}]/u.test(r)) return {
    valid: !1,
    error: `Model '${r}' not found`,
    notFound: !0
  };
  if (o.serverProbe === !1) return {
    valid: !0
  };
  try {
    return await EM({
      model: r,
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
    }), g().add(r), {
      valid: !0
    }
  } catch (f) {
    return _(f, r)
  }
}
var M = 15000;
async function y(e, o) {
  let r = Hr(),
    n = r.sessionModelDenyReprobe.generation,
    s = new AbortController,
    i = await nt(PAn(e, {
      forceServerProbe: o.forceServerProbe,
      skipEntitlementDenyOverlay: o.skipEntitlementDenyOverlay,
      credentials: o.credentials,
      timeout: o.deadlineMs,
      signal: s.signal
    }), o.deadlineMs);
  if (i === void 0) return s.abort(), {
    probe: void 0,
    accountChanged: !1
  };
  let m = r.sessionModelDenyReprobe.generation !== n;
  if (m) r.providerCache.validatedModels.delete(e.trim());
  return {
    probe: i,
    accountChanged: m
  }
}
async function Sdr(e, o, r) {
  if (r === void 0 || o.serverProbe === !1) return PAn(e, o);
  let {
    probe: n,
    accountChanged: s
  } = await y(e, {
    ...o,
    deadlineMs: r
  });
  if (n === void 0 || s) {
    let i = L6("model");
    return {
      valid: !1,
      error: `Couldn't confirm model "${mb(e)}" with the API. ${i?`Try again, or run ${i} to see available models.`:"Try again."}`,
      retryable: !0
    }
  }
  return n
}

function ikt(e) {
  let o = e.toLowerCase().trim();
  return G5e(o)
}

function wdr(e) {
  return ikt(e) || ZNt(e) ? Tt(e) : e
}
async function Qoe(e, o, r) {
  try {
    if (!Vr(e, {
        skipEntitlementDenyOverlay: !0
      })) return "denied_by_policy";
    let n = wdr(e);
    if (ikt(n)) return "denied_by_policy";
    let s = Hr(),
      {
        confirmedEntitlementDenies: i,
        overturnedEntitlementDenies: m
      } = s.providerCache,
      p = rRe(n),
      f = i.get(p);
    if (f !== void 0 && Date.now() - f < NNt) return "denied_by_server";
    let {
      probe: c,
      accountChanged: h
    } = await y(n, {
      credentials: r,
      deadlineMs: M,
      forceServerProbe: !0,
      skipEntitlementDenyOverlay: !0
    });
    if (c === void 0) return t("[model-access] stale-deny re-probe timed out", {
      level: "warn"
    }), "probe_failed";
    if (!c.valid && !c.notFound && !c.permissionDenied) return "probe_failed";
    if (h) return t("[model-access] stale-deny re-probe answered after the account changed; recording nothing"), c.valid ? "overturned" : "denied_by_server";
    if (!c.valid) {
      let u = Date.now();
      i.set(p, u);
      for (let b of bce())
        if (Zdn(b, e)) i.set(rRe(b.apiName), u);
      return "denied_by_server"
    }
    i.delete(p);
    let S = Date.now();
    for (let u of bce())
      if (Zdn(u, e)) m.set(rRe(u.apiName), S);
    try {
      await E(e, o)
    } catch (u) {
      if (v(u) !== void 0) t(`[model-access] stale-deny eviction failed: ${l(u)}`, {
        level: "warn"
      });
      else d(u)
    }
    return S7(o, r), "overturned"
  } catch (n) {
    return d(n), "probe_failed"
  }
}
async function E(e, o) {
  await Ee((r) => {
    let n = r.modelAccessCache;
    if (!n?.length) return r;
    let s = n.filter((i) => {
      if (i == null || typeof i !== "object" || typeof i.apiName !== "string" || typeof i.entitled !== "boolean") return !0;
      return !Zdn(i, e)
    });
    return s.length === n.length ? r : {
      ...r,
      modelAccessCache: s
    }
  }, o)
}

function _(e, o) {
  if (e instanceof q_e) {
    let n = lQt(o),
      s = n ? `. Try '${n}' instead` : "";
    return {
      valid: !1,
      error: `Model '${o}' not found${s}`,
      notFound: !0
    }
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
      error: `API error: ${zne(e).replace(/[.!?\u2026]+$/,"")} \xB7 model not changed`,
      ...P(e.status) && {
        retryable: !0
      },
      ...s && {
        creditsRequired: !0
      }
    }
  }
  return {
    valid: !1,
    error: `Unable to validate model: ${e instanceof Error?e.message:String(e)}`,
    retryable: !0
  }
}

function P(e) {
  return e === void 0 || e === 408 || e === 429 || e >= 500
}
export {
  PAn,
  Sdr,
  ikt,
  wdr,
  Qoe
};
