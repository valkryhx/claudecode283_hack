// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.303
import {
  Mt,
  zu,
  t2e,
  n2e,
  d,
  k
} from "B:/~BUN/root/chunk-3aez4b53.js";
import {
  je
} from "B:/~BUN/root/chunk-89mss1tj.js";
import {
  a
} from "B:/~BUN/root/chunk-yt0knyw7.js";
import {
  vGe
} from "B:/~BUN/root/chunk-jpdys232.js";
import {
  t
} from "B:/~BUN/root/chunk-6za2ez23.js";
import {
  l
} from "B:/~BUN/root/chunk-c09hf5e4.js";
import {
  bBt,
  Or,
  xe,
  xi
} from "B:/~BUN/root/chunk-8pmnanyd.js";
import {
  GK,
  T_,
  Zje,
  yYn,
  Yr,
  Cln,
  sEe,
  It,
  uEe,
  Ce
} from "B:/~BUN/root/chunk-hb6x4e3n.js";
import {
  Vyt,
  JMe,
  dBt,
  Gge
} from "B:/~BUN/root/chunk-245a2x6v.js";
import {
  kkr,
  U3e,
  Yho
} from "B:/~BUN/root/chunk-8w42v0dp.js";
import {
  ADn,
  iU
} from "B:/~BUN/root/chunk-9grc6xh0.js";
import {
  Qce
} from "B:/~BUN/root/chunk-8pa630py.js";
import {
  _4,
  the
} from "B:/~BUN/root/chunk-j0ghr71r.js";
var _ = new Set(["fetch_error", "unknown", "org_level_disabled_until"]);

function b() {
  return Or().providerCache.validatedModels
}
async function fcr(e, o) {
  let r = e.trim();
  if (!r) return {
    valid: !1,
    error: "Model name cannot be empty"
  };
  if (!Yr(r, o.skipEntitlementDenyOverlay ? {
      skipEntitlementDenyOverlay: !0
    } : void 0)) return {
    valid: !1,
    error: `Model '${r}' is not in the list of available models`,
    notAllowed: !0
  };
  if (!o.forceServerProbe) {
    let c = r.toLowerCase();
    if (_4.includes(c)) return {
      valid: !0
    };
    if (r === a.ANTHROPIC_CUSTOM_MODEL_OPTION) return {
      valid: !0
    };
    if (Yho(r) && sEe()?.picker.options.some((f) => f.model.trim() === r)) return {
      valid: !0
    };
    if (b().has(r)) return {
      valid: !0
    }
  }
  let n = xe(),
    s = a.ANTHROPIC_BASE_URL,
    i = s && URL.canParse(s) ? new URL(s).hostname : void 0,
    u = xi() || i !== void 0 && (i === "anthropic.com" || i.endsWith(".anthropic.com") || vGe.some((c) => new URL(c).hostname === i));
  if (!(n === "gateway" || n === "firstParty" && !u) && /[\s\p{Cc}\p{Cf}]/u.test(r)) return {
    valid: !1,
    error: `Model '${r}' not found`,
    notFound: !0
  };
  if (o.serverProbe === !1) return {
    valid: !0
  };
  try {
    return await iU({
      model: r,
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
    }), b().add(r), {
      valid: !0
    }
  } catch (c) {
    return M(c, r)
  }
}
var h = 15000;
async function g(e, o) {
  let r = Or(),
    n = r.sessionModelDenyReprobe.generation,
    s = new AbortController,
    i = await je(fcr(e, {
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
  let u = r.sessionModelDenyReprobe.generation !== n;
  if (u) r.providerCache.validatedModels.delete(e.trim());
  return {
    probe: i,
    accountChanged: u
  }
}
async function lZr(e, o, r) {
  if (r === void 0 || o.serverProbe === !1) return fcr(e, o);
  let {
    probe: n,
    accountChanged: s
  } = await g(e, {
    ...o,
    deadlineMs: r
  });
  if (n === void 0 || s) {
    let i = GK("model");
    return {
      valid: !1,
      error: `Couldn't confirm model "${T_(e)}" with the API. ${i?`Try again, or run ${i} to see available models.`:"Try again."}`,
      retryable: !0
    }
  }
  return n
}

function R6t(e) {
  let o = e.toLowerCase().trim();
  return the(o)
}

function dZr(e) {
  return R6t(e) || Cln(e) ? It(e) : e
}
async function hbe(e, o, r) {
  try {
    if (!Yr(e, {
        skipEntitlementDenyOverlay: !0
      })) return "denied_by_policy";
    let n = dZr(e);
    if (R6t(n)) return "denied_by_policy";
    let s = Or(),
      {
        confirmedEntitlementDenies: i,
        overturnedEntitlementDenies: u
      } = s.providerCache,
      p = Zje(n),
      c = i.get(p);
    if (c !== void 0 && Date.now() - c < bBt) return "denied_by_server";
    let {
      probe: f,
      accountChanged: y
    } = await g(n, {
      credentials: r,
      deadlineMs: h,
      forceServerProbe: !0,
      skipEntitlementDenyOverlay: !0
    });
    if (f === void 0) return t("[model-access] stale-deny re-probe timed out", {
      level: "warn"
    }), "probe_failed";
    if (!f.valid && !f.notFound && !f.permissionDenied) return "probe_failed";
    if (y) return t("[model-access] stale-deny re-probe answered after the account changed; recording nothing"), f.valid ? "overturned" : "denied_by_server";
    if (!f.valid) {
      let m = Date.now();
      i.set(p, m);
      for (let v of uEe())
        if (yYn(v, e)) i.set(Zje(v.apiName), m);
      return "denied_by_server"
    }
    i.delete(p);
    let E = Date.now();
    for (let m of uEe())
      if (yYn(m, e)) u.set(Zje(m.apiName), E);
    try {
      await S(e, o)
    } catch (m) {
      if (k(m) !== void 0) t(`[model-access] stale-deny eviction failed: ${d(m)}`, {
        level: "warn"
      });
      else l(m)
    }
    return Qce(o, r), "overturned"
  } catch (n) {
    return l(n), "probe_failed"
  }
}
async function S(e, o) {
  await Ce((r) => {
    let n = r.modelAccessCache;
    if (!n?.length) return r;
    let s = n.filter((i) => {
      if (i == null || typeof i !== "object" || typeof i.apiName !== "string" || typeof i.entitled !== "boolean") return !0;
      return !yYn(i, e)
    });
    return s.length === n.length ? r : {
      ...r,
      modelAccessCache: s
    }
  }, o)
}

function M(e, o) {
  if (e instanceof n2e) {
    let n = ADn(o),
      s = n ? `. Try '${n}' instead` : "";
    return {
      valid: !1,
      error: `Model '${o}' not found${s}`,
      notFound: !0,
      ...JMe(e) && {
        serverRefusedModel: !0
      }
    }
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
      error: `API error: ${Gge(e).replace(/[.!?\u2026]+$/,"")} \xB7 model not changed`,
      ...A(e.status) && {
        retryable: !0
      },
      ...i && {
        creditsRequired: !0
      },
      ...e.status === 400 && dBt(e) && {
        sessionModeRefused: !0
      },
      ...e.status === 429 && !i && (u === "five_hour" || u === "seven_day") && {
        sharedLimitReached: !0
      },
      ...p && {
        serverRefusedModel: !0
      }
    }
  }
  return {
    valid: !1,
    error: `Unable to validate model: ${e instanceof Error?e.message:String(e)}`,
    retryable: !0
  }
}

function A(e) {
  return e === void 0 || e === 408 || e === 429 || e >= 500
}
export {
  fcr,
  lZr,
  R6t,
  dZr,
  hbe
};
