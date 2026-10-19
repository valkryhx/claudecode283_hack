// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { Ct } from "B:/~BUN/root/chunk-28dw3zbk.js";
import { Nn, Br, VTe, dye, de, gye } from "B:/~BUN/root/chunk-rpez7z7a.js";
import { of } from "B:/~BUN/root/chunk-3aez4b53.js";
import { a } from "B:/~BUN/root/chunk-yt0knyw7.js";
import { vp, ln } from "B:/~BUN/root/chunk-jpdys232.js";
import { MA, Yne, t } from "B:/~BUN/root/chunk-6za2ez23.js";
import { At, l } from "B:/~BUN/root/chunk-c09hf5e4.js";
import { i } from "B:/~BUN/root/chunk-1kfn24jp.js";
import { g, m, p } from "B:/~BUN/root/chunk-kzgf20y6.js";
import { f } from "B:/~BUN/root/chunk-frrkt2bs.js";
import { YM, i$o, Or, xe, Wun } from "B:/~BUN/root/chunk-8pmnanyd.js";
import { ip, hDe } from "B:/~BUN/root/chunk-gyr2a6wz.js";
import { z3, N1s, tWe, tt, tLr, $S, wm, qH, YK, lJ, pc, Cw, Fn, Et, Jp, lv, DDo, jNr, WNr, $zs, tUt, Uzs, Ce, ue, tLo, sUt, rLo, oLo, sLo, aLo } from "B:/~BUN/root/chunk-hb6x4e3n.js";
import { mMt } from "B:/~BUN/root/chunk-8w42v0dp.js";
import { fFs } from "B:/~BUN/root/chunk-z8fd2x5s.js";
import { Sje, Uke } from "B:/~BUN/root/chunk-j4qesy5s.js";
import { ris } from "B:/~BUN/root/chunk-hkbwgpgj.js";
import { ge, mn, Vo, ec, sr, St, hg } from "B:/~BUN/root/chunk-rm2gz7kj.js";
import { Mn } from "B:/~BUN/root/chunk-j0ghr71r.js";
import { hs } from "B:/~BUN/root/chunk-qjf8jcwq.js";
var Q = f(() => St({
  client_data: hg(ec()).nullish(),
  additional_model_options: sr(St({
    model: ge(),
    name: ge(),
    description: ge(),
    disabled_reason: ge().nullish()
  }).transform(({
    model: e,
    name: name,
    description: description,
    disabled_reason: disabled_reason
  }) => {
    let d = YM(Mn(e)),
      s = d ? wm(e) : null,
      _ = description;
    if (d && s && disabled_reason == null) {
      let y = description ? description.startsWith(s) ? description : `${s} \xB7 ${description}` : s,
        c = N1s(e);
      _ = c && !Et() && !y.includes("per Mtok") ? `${y} \xB7 ${c}` : y;
    }
    return {
      value: e,
      label: disabled_reason != null ? `${name} (disabled)` : name,
      description: disabled_reason ? _ ? `${_} \xB7 ${disabled_reason}` : disabled_reason : _,
      ...(disabled_reason != null && {
        disabled: !0
      })
    };
  })).nullish(),
  additional_model_costs: hg(St({
    input_tokens: mn(),
    output_tokens: mn(),
    prompt_cache_write_tokens: mn(),
    prompt_cache_write_1h_tokens: mn().nullish(),
    prompt_cache_read_tokens: mn(),
    web_search_requests: mn().nullish()
  }).transform(e => ({
    inputTokens: e.input_tokens,
    outputTokens: e.output_tokens,
    promptCacheWriteTokens: e.prompt_cache_write_tokens,
    ...(e.prompt_cache_write_1h_tokens != null && {
      promptCacheWrite1hTokens: e.prompt_cache_write_1h_tokens
    }),
    promptCacheReadTokens: e.prompt_cache_read_tokens,
    webSearchRequests: e.web_search_requests ?? 0.01
  }))).nullish(),
  model_access: sr(St({
    api_name: ge(),
    entitled: Vo(),
    max_effort_level: ge().nullish()
  }).transform(({
    api_name: e,
    entitled: entitled,
    max_effort_level: n
  }) => ({
    apiName: e,
    entitled: entitled,
    ...(n != null && {
      maxEffortLevel: n
    })
  }))).nullish(),
  org_model_default: St({
    name: ge(),
    updated_at: ge(),
    data_source: ge(),
    override_user_selection: Vo(),
    default_effort_level: ge().nullish(),
    override_user_effort: Vo().nullish()
  }).nullish(),
  oauth_account: St({
    account_uuid: ge().nullish(),
    account_email: ge().nullish(),
    organization_uuid: ge().nullish(),
    organization_name: ge().nullish(),
    organization_type: ge().nullish(),
    organization_rate_limit_tier: ge().nullish(),
    user_rate_limit_tier: ge().nullish(),
    seat_tier: ge().nullish()
  }).passthrough().nullish(),
  auto_compact_windows: hg(ge(), ec()).nullish(),
  narrowed: Vo().nullish()
}));
function R(e = tt()) {
  return {
    entrypoint: (Or().fetchesClientData && hDe() ? gye() : void 0) ?? ip(),
    model: Mn(e),
    ccVersion: {
      ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
      PACKAGE_URL: "@anthropic-ai/claude-code",
      README_URL: "https://code.claude.com/docs/en/overview",
      VERSION: "2.1.303",
      FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
      BUILD_TIME: "2026-10-18T20:20:57Z",
      GIT_SHA: "07df2aedd2d01d2f60907b8404acbda187b04072",
      HOOKS_WORKER_URL: "B:/~BUN/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js",
      DD_SOURCEMAP_GROUP: "win32"
    }.VERSION,
    organizationUuid: ue().oauthAccount?.organizationUuid ?? null
  };
}
function Z(e) {
  let o = Mn(e),
    mainLoopModel = tt();
  if (o === Mn(mainLoopModel)) return !0;
  let model = tLr({
    permissionMode: "plan",
    mainLoopModel: mainLoopModel
  }).model;
  if (o === Mn(model)) return !0;
  return [mainLoopModel, model].some(item => {
    let s = fFs(item);
    return s !== void 0 && o === Mn(s);
  });
}
function et() {
  tLo(e => {
    try {
      return WNr(R(e !== void 0 && Z(e) ? void 0 : e));
    } catch (error) {
      return l(error), jNr;
    }
  });
}
et();
function v() {
  return Wun();
}
function mcr() {
  try {
    rLo(() => {
      try {
        return v();
      } catch (error) {
        return l(error), !0;
      }
    }), oLo(() => {
      try {
        return v();
      } catch (error) {
        return l(error), !1;
      }
    }), sLo((e, o) => {
      try {
        return ris(e, o);
      } catch (error) {
        return l(error), e;
      }
    }), aLo(() => {
      try {
        if (!v()) return null;
        let e = R();
        return {
          entrypoint: e.entrypoint ?? null,
          model: e.model,
          org: e.organizationUuid
        };
      } catch (error) {
        return l(error), null;
      }
    });
  } catch (error) {
    l(error);
  }
}
function ot(e) {
  return {
    params: {
      entrypoint: e.entrypoint,
      model: e.model
    },
    userAgent: `claude-code/${e.ccVersion}`
  };
}
function q(e, o) {
  if (!e || !o) return e;
  if (o.account_uuid != null && o.account_uuid !== e.accountUuid) return e;
  let n = {
    organizationType: o.organization_type ?? null,
    organizationRateLimitTier: o.organization_rate_limit_tier ?? null,
    userRateLimitTier: o.user_rate_limit_tier ?? null,
    seatTier: o.seat_tier ?? null
  };
  if (o.account_email != null) n.emailAddress = o.account_email;
  if (o.organization_uuid != null) n.organizationUuid = o.organization_uuid;
  if (o.organization_name != null) n.organizationName = o.organization_name;
  return {
    ...e,
    ...n
  };
}
function nt(e) {
  if (!e?.account_uuid) return;
  VTe({
    accountUuid: e.account_uuid,
    emailAddress: de() ? void 0 : e.account_email ?? void 0,
    organizationUuid: e.organization_uuid ?? void 0
  });
}
async function rt(e, credentials) {
  if (xe() === "gateway") {
    if (!a.CLAUDE_CODE_ENABLE_GATEWAY_MODEL_DISCOVERY) return t("[Bootstrap] Skipped gateway /v1/models (CLAUDE_CODE_ENABLE_GATEWAY_MODEL_DISCOVERY not set)"), {
      response: {
        additional_model_options: []
      },
      viaScopelessOAuth: !1
    };
    let response = await it(credentials);
    return response && {
      response: response,
      viaScopelessOAuth: !1
    };
  }
  if (At()) return t("[Bootstrap] Skipped: Nonessential traffic disabled"), null;
  if (xe() !== "firstParty") return t("[Bootstrap] Skipped: 3P provider"), null;
  let {
      params: params,
      userAgent: userAgent
    } = ot(e),
    d = async (u, r) => {
      t("[Bootstrap] Fetching");
      let A = await Ct.get(`${u}/api/claude_cli/bootstrap`, {
          headers: {
            "Content-Type": "application/json",
            "User-Agent": userAgent,
            ...mMt(),
            ...r
          },
          params: params,
          timeout: 5000
        }),
        C = Q().safeParse(A.data);
      if (!C.success) return t(`[Bootstrap] Response failed validation: ${C.error.message}`), p("api_bootstrap_fetch", "parse_failed"), null;
      return t("[Bootstrap] Fetch ok"), C.data;
    },
    s = Cw();
  if (!s && pc()) try {
    let [u, r] = await Promise.all([Uke(), Sje()]);
    if (u !== null) {
      let response_2 = await d(a.ANTHROPIC_BASE_URL || r?.baseURL || ln().BASE_API_URL, {
        ...r?.extraHeaders,
        Authorization: `Bearer ${await u.getToken()}`,
        "anthropic-beta": vp
      });
      return response_2 && {
        response: response_2,
        viaScopelessOAuth: !1
      };
    }
  } catch (error) {
    return t(`[Bootstrap] WIF fetch failed: ${Ct.isAxiosError(error) ? error.response?.status ?? error.code : error instanceof Error ? error.constructor.name : "unknown"}`), p("api_bootstrap_fetch", "wif_unavailable"), null;
  }
  let _ = z3(s);
  if (!Fn()?.accessToken && !_) return t("[Bootstrap] Skipped: no usable OAuth, WIF, or API key"), null;
  if (a.ANTHROPIC_UNIX_SOCKET) return t("[Bootstrap] Skipped: unix-socket-proxied session"), p("api_bootstrap_fetch", "unix_socket_skip"), null;
  let viaScopelessOAuth = !1;
  try {
    let response_3 = await lv(async () => {
      let r = Fn()?.accessToken,
        A = Jp(),
        C;
      if (r && (A || !_)) viaScopelessOAuth = !A && !_, C = {
        Authorization: `Bearer ${r}`,
        "anthropic-beta": vp
      };else if (_) viaScopelessOAuth = !1, C = {
        "x-api-key": _
      };else return t("[Bootstrap] No auth available on retry, aborting"), null;
      return d(ln().BASE_API_URL, C);
    }, {
      gateToSessionOAuthCredential: de(),
      credentials: credentials
    });
    return response_3 && {
      response: response_3,
      viaScopelessOAuth: viaScopelessOAuth
    };
  } catch (error) {
    let r = Ct.isAxiosError(error) ? error.response?.status : void 0;
    if (viaScopelessOAuth && r === 403) return t("[Bootstrap] Skipped: 403 for OAuth token without profile scope"), p("api_bootstrap_fetch", "no_profile_scope_403"), null;
    throw t(`[Bootstrap] Fetch failed: ${Ct.isAxiosError(error) ? error.response?.status ?? error.code : "unknown"}`), m("api_bootstrap_fetch", "request_failed"), error;
  }
}
function cZr() {
  if (a.ANTHROPIC_UNIX_SOCKET) return !1;
  return Boolean(z3(Cw())) || Boolean(Fn()?.accessToken) && Jp();
}
async function Qce(e, o) {
  await v8s(e, o);
}
async function v8s(e, o, {
  keepRenderCaches = !1,
  renderedClientData: renderedClientData
} = {}) {
  mcr();
  try {
    let d = xe() === "firstParty";
    if (!d) qH(), lJ();
    let s = R(),
      _ = dye(),
      y = await rt(s, o);
    if (!y) return !1;
    let {
      response: response_4,
      viaScopelessOAuth: viaScopelessOAuth_2
    } = y;
    if (_ !== dye()) return t("[Bootstrap] Discarding response fetched under a superseded credential"), p("api_bootstrap_fetch", "superseded_credential"), !1;
    g("api_bootstrap_fetch");
    let r = ue(),
      A = response_4.narrowed ?? viaScopelessOAuth_2,
      C = A && response_4.additional_model_options == null,
      T = A && response_4.additional_model_costs == null,
      k = A && response_4.model_access == null,
      z = A && response_4.org_model_default == null,
      U = A && response_4.auto_compact_windows == null,
      data = response_4.client_data ?? null,
      additionalModelOptionsCache = C ? r.additionalModelOptionsCache ?? [] : response_4.additional_model_options ?? [],
      additionalModelCostsCache = T ? r.additionalModelCostsCache ?? {} : response_4.additional_model_costs ?? {},
      modelAccessCache = k ? r.modelAccessCache ?? [] : response_4.model_access ?? [],
      F = U ? r.autoCompactWindowsCache ?? null : response_4.auto_compact_windows ?? null;
    nt(response_4.oauth_account);
    let V = dye(),
      B = q(r.oauthAccount, response_4.oauth_account),
      orgModelDefaultCache = response_4.org_model_default ? {
        ...response_4.org_model_default,
        ...(B?.organizationUuid && {
          orgUuid: B.organizationUuid
        })
      } : z ? r.orgModelDefaultCache ?? null : null,
      E = WNr({
        ...s,
        organizationUuid: B?.organizationUuid ?? s.organizationUuid
      }),
      x = r.clientDataCacheSlots?.[E],
      S = tUt(x) ? x : void 0,
      slot_hit = S !== void 0,
      Y = Nn(B, r.oauthAccount),
      slot_stale = d && S !== void 0 && Date.now() - S.at > $zs,
      W = d && (S === void 0 || !Nn(S.data ?? null, data)),
      slot_changed = d && (renderedClientData !== void 0 ? !Nn(renderedClientData, data) : W);
    i("tengu_client_data_cache_key", {
      slot_hit: slot_hit,
      slot_changed: slot_changed,
      legacy_fallback: !slot_hit && r.clientDataCache != null,
      slot_stale: slot_stale
    });
    let H = d,
      j = typeof r.additionalModelOptionsAnsweredAt === "number",
      X = C || (H ? Array.isArray(r.additionalModelOptionsCache) && j && Nn(r.additionalModelOptionsCache, additionalModelOptionsCache) : !j && Nn(r.additionalModelOptionsCache ?? [], additionalModelOptionsCache));
    if (!W && !slot_changed && !slot_stale && X && Nn(r.additionalModelCostsCache ?? {}, additionalModelCostsCache) && Nn(r.modelAccessCache ?? [], modelAccessCache) && Nn(r.orgModelDefaultCache ?? null, orgModelDefaultCache) && (!d || Nn(r.autoCompactWindowsCache ?? null, F)) && Y) {
      if (t("[Bootstrap] Cache unchanged, skipping write"), sUt(E), !k) i$o();
      return !0;
    }
    t("[Bootstrap] Cache updated, persisting to disk");
    let K = !1;
    if (await Ce(w => {
      if (V !== dye()) return K = !0, w;
      let oauthAccount = q(w.oauthAccount, response_4.oauth_account),
        J = WNr({
          ...s,
          organizationUuid: oauthAccount?.organizationUuid ?? null
        });
      return {
        ...w,
        clientDataCacheSlots: d ? Uzs(w.clientDataCacheSlots, J, {
          data: data,
          at: Date.now(),
          entrypoint: s.entrypoint ?? null,
          model: s.model,
          org: oauthAccount?.organizationUuid ?? null
        }) : w.clientDataCacheSlots,
        ...(C ? {} : {
          additionalModelOptionsCache: additionalModelOptionsCache,
          additionalModelOptionsAnsweredAt: H ? Date.now() : void 0
        }),
        ...(T ? {} : {
          additionalModelCostsCache: additionalModelCostsCache
        }),
        ...(k ? {} : {
          modelAccessCache: modelAccessCache
        }),
        ...(z ? {} : {
          orgModelDefaultCache: orgModelDefaultCache
        }),
        autoCompactWindowsCache: d && !U ? F : w.autoCompactWindowsCache ?? null,
        oauthAccount: oauthAccount
      };
    }, e), sUt(E), K) return !1;
    if (!k) i$o();
    if (slot_changed && !keepRenderCaches) qH(), lJ();
    return !0;
  } catch (error) {
    if (of(error)) t(`[Bootstrap] fetchBootstrapData failed: ${error}`, {
      level: "error"
    });else l(error);
    return !1;
  } finally {
    DDo();
  }
}
var at = f(() => St({
  data: sr(St({
    id: ge(),
    display_name: ge().nullish(),
    description: ge().nullish()
  }))
}));
async function it(e) {
  await YK(e);
  let o = Br();
  if (!o) return null;
  try {
    let n = await Ct.get(`${o.url}/v1/models`, {
        headers: {
          Authorization: `Bearer ${o.jwt}`,
          "anthropic-version": "2023-06-01",
          "User-Agent": hs()
        },
        params: {
          limit: 1000
        },
        timeout: 5000
      }),
      h = at().safeParse(n.data);
    if (!h.success) return t(`[Bootstrap] Gateway /v1/models failed validation: ${h.error.message}`), null;
    let additional_model_options = h.data.data.filter(item => /(claude|anthropic)/i.test(item.id)).filter(item => {
      let _ = YM(item.id);
      return _ === null || tWe($S(_.firstParty));
    }).map(item => ({
      value: item.id,
      label: MA(item.display_name ?? "") || MA(item.id),
      description: Yne(item.description ?? "")
    }));
    return t(`[Bootstrap] Gateway /v1/models \u2192 ${additional_model_options.length} custom options`), {
      additional_model_options: additional_model_options
    };
  } catch (error) {
    return t(`[Bootstrap] Gateway /v1/models fetch failed: ${Ct.isAxiosError(error) ? error.response?.status ?? error.code : "unknown"}`), null;
  }
}
export { mcr, cZr, Qce, v8s };