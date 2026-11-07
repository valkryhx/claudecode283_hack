// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { Wt } from "B:/~BUN/root/chunk-b91sxvrb.js";
import { Xr, Qnt, Gxe, m2s, S$e, Znt, q, v7, R$e, Jcn } from "B:/~BUN/root/chunk-game8aqv.js";
import { Im } from "B:/~BUN/root/chunk-y2g9f85n.js";
import { i } from "B:/~BUN/root/chunk-j6pt0v41.js";
import { Jc, nn } from "B:/~BUN/root/chunk-y1kkrqy9.js";
import { t } from "B:/~BUN/root/chunk-2pp12te6.js";
import { Tk, Pae } from "B:/~BUN/root/chunk-jdtvghyw.js";
import { St, a } from "B:/~BUN/root/chunk-xrwdh0g4.js";
import { l } from "B:/~BUN/root/chunk-mb9chr1y.js";
import { g, m, c } from "B:/~BUN/root/chunk-3z3yrbk4.js";
import { p } from "B:/~BUN/root/chunk-z6138ats.js";
import { o0, fFs, pr, Te, gzn } from "B:/~BUN/root/chunk-8f4z6bdn.js";
import { OA, zMs, GMs, VMs } from "B:/~BUN/root/chunk-1s0yt4vj.js";
import { ln, vp } from "B:/~BUN/root/chunk-3xdsa4p8.js";
import { yf, xC } from "B:/~BUN/root/chunk-65j2302z.js";
import { Kee, Uwo, T6i, IZe, at, LZe, zy, jm, V1, $3, U3, Sc, Qa, $v, Ln, Rt, fp, kyt, vE, VIs, bEo, SEo, Z8i, Zsn, e9i, Le, fe, gMs, sin, _Ms, bMs, SMs, kMs } from "B:/~BUN/root/chunk-1ks9vs37.js";
import { RUi, AUi, xUi, zZt } from "B:/~BUN/root/chunk-yhafkw66.js";
import { yzi } from "B:/~BUN/root/chunk-78494p3w.js";
import { Bgo } from "B:/~BUN/root/chunk-fzefftbw.js";
import { UQe, PNe } from "B:/~BUN/root/chunk-1012essb.js";
import { Hmi } from "B:/~BUN/root/chunk-p1qj2aq3.js";
import { GFt } from "B:/~BUN/root/chunk-sjvfdrzm.js";
import { ge, Mn, ws, qc, vr, Ft, v_ } from "B:/~BUN/root/chunk-b3kw6jpx.js";
import { Gn } from "B:/~BUN/root/chunk-zpne314q.js";
import { nt } from "B:/~BUN/root/chunk-tq5dzbq9.js";
import { ui } from "B:/~BUN/root/chunk-xwsv2hvn.js";
var re = p(() => Ft({
  client_data: v_(qc()).nullish(),
  additional_model_options: vr(Ft({
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
    let u = o0(Gn(e)),
      d = u ? jm(e) : null,
      _ = description;
    if (u && d && disabled_reason == null) {
      let w = description ? description.startsWith(d) ? description : `${d} \xB7 ${description}` : d,
        n = T6i(e);
      _ = n && !Rt() && !w.includes("per Mtok") ? `${w} \xB7 ${n}` : w;
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
  additional_model_costs: v_(Ft({
    input_tokens: Mn(),
    output_tokens: Mn(),
    prompt_cache_write_tokens: Mn(),
    prompt_cache_write_1h_tokens: Mn().nullish(),
    prompt_cache_read_tokens: Mn(),
    web_search_requests: Mn().nullish()
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
  model_access: vr(Ft({
    api_name: ge(),
    entitled: ws(),
    max_effort_level: ge().nullish()
  }).transform(({
    api_name: e,
    entitled: entitled,
    max_effort_level: r
  }) => ({
    apiName: e,
    entitled: entitled,
    ...(r != null && {
      maxEffortLevel: r
    })
  }))).nullish(),
  org_model_default: Ft({
    name: ge(),
    updated_at: ge(),
    data_source: ge(),
    override_user_selection: ws(),
    default_effort_level: ge().nullish(),
    override_user_effort: ws().nullish()
  }).nullish(),
  oauth_account: Ft({
    account_uuid: ge().nullish(),
    account_email: ge().nullish(),
    organization_uuid: ge().nullish(),
    organization_name: ge().nullish(),
    organization_type: ge().nullish(),
    organization_rate_limit_tier: ge().nullish(),
    user_rate_limit_tier: ge().nullish(),
    seat_tier: ge().nullish()
  }).passthrough().nullish(),
  auto_compact_windows: v_(ge(), qc()).nullish(),
  narrowed: ws().nullish(),
  program_use_case_id: ge().nullish(),
  program_use_cases: qc().optional(),
  program_use_case_choice: qc().optional(),
  program_use_case_default_id: ge().nullish().catch(null)
}));
function F(e = at()) {
  return {
    entrypoint: (pr().fetchesClientData && xC() ? v7() : void 0) ?? yf(),
    model: Gn(e),
    ccVersion: {
      ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
      PACKAGE_URL: "@anthropic-ai/claude-code",
      README_URL: "https://code.claude.com/docs/en/overview",
      VERSION: "2.1.319",
      FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
      BUILD_TIME: "2026-11-05T18:14:18Z",
      GIT_SHA: "fbdd7e02e8530e4c2ade8cc67d30104e53d2c8f2",
      HOOKS_WORKER_URL: "B:/~BUN/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js",
      DD_SOURCEMAP_GROUP: "win32"
    }.VERSION,
    organizationUuid: fe().oauthAccount?.organizationUuid ?? null
  };
}
function ae(e) {
  let o = Gn(e),
    mainLoopModel = at();
  if (o === Gn(mainLoopModel)) return !0;
  let model = LZe({
    permissionMode: "plan",
    mainLoopModel: mainLoopModel
  }).model;
  if (o === Gn(model)) return !0;
  return [mainLoopModel, model].some(item => {
    let d = yzi(item);
    return d !== void 0 && o === Gn(d);
  });
}
function ie() {
  gMs(e => {
    try {
      return SEo(F(e !== void 0 && ae(e) ? void 0 : e));
    } catch (error) {
      return a(error), bEo;
    }
  });
}
ie();
function I() {
  return gzn();
}
function rJr() {
  try {
    _Ms(() => {
      try {
        return I();
      } catch (error) {
        return a(error), !0;
      }
    }), bMs(() => {
      try {
        return I();
      } catch (error) {
        return a(error), !1;
      }
    }), SMs((e, o) => {
      try {
        return Hmi(e, o);
      } catch (error) {
        return a(error), e;
      }
    }), kMs(() => {
      try {
        if (!I()) return null;
        let e = F();
        return {
          entrypoint: e.entrypoint ?? null,
          model: e.model,
          org: e.organizationUuid
        };
      } catch (error) {
        return a(error), null;
      }
    }), GMs(e => oJr() ? Mmi(e.storageV5, e.credentials, {
      keepRenderCaches: !0
    }) : Promise.resolve(!1));
  } catch (error) {
    a(error);
  }
}
function se(e) {
  return {
    params: {
      entrypoint: e.entrypoint,
      model: e.model
    },
    userAgent: `claude-code/${e.ccVersion}`
  };
}
function te(e, o) {
  if (!e || !o) return e;
  if (o.account_uuid != null && o.account_uuid !== e.accountUuid) return e;
  let r = {
    organizationType: o.organization_type ?? null,
    organizationRateLimitTier: o.organization_rate_limit_tier ?? null,
    userRateLimitTier: o.user_rate_limit_tier ?? null,
    seatTier: o.seat_tier ?? null
  };
  if (o.account_email != null) r.emailAddress = o.account_email;
  if (o.organization_uuid != null) r.organizationUuid = o.organization_uuid;
  if (o.organization_name != null) r.organizationName = o.organization_name;
  return {
    ...e,
    ...r
  };
}
function le(e) {
  if (!e?.account_uuid) return;
  Qnt({
    accountUuid: e.account_uuid,
    emailAddress: q() ? void 0 : e.account_email ?? void 0,
    organizationUuid: e.organization_uuid ?? void 0,
    seatTier: e.seat_tier
  });
}
function L(e) {
  let oauth_account = e.oauth_account;
  return e.narrowed !== !0 && oauth_account?.account_uuid && oauth_account.organization_type ? Uwo.get(oauth_account.organization_type) : void 0;
}
function ue(e, bearerSha256, r) {
  if (!r) Bgo(bearerSha256, L(e));
  if (bearerSha256 !== null && bearerSha256 !== kyt()) return;
  let oauth_account_2 = e.oauth_account,
    subscriptionType = L(e);
  m2s(bearerSha256 === null ? null : {
    bearerSha256: bearerSha256,
    answeredAtMs: Date.now(),
    named: oauth_account_2?.organization_uuid && subscriptionType !== void 0 ? {
      organizationUuid: oauth_account_2.organization_uuid,
      subscriptionType: subscriptionType
    } : null
  });
}
async function ce(e, credentials) {
  if (Te() === "gateway") {
    if (!i.CLAUDE_CODE_ENABLE_GATEWAY_MODEL_DISCOVERY) return t("[Bootstrap] Skipped gateway /v1/models (CLAUDE_CODE_ENABLE_GATEWAY_MODEL_DISCOVERY not set)"), {
      response: {
        additional_model_options: []
      },
      viaScopelessOAuth: !1,
      oauthBearerSha256: null,
      wasEndpointMovedAtSend: !1,
      viaOAuth: !1
    };
    let response = await pe(credentials);
    return response && {
      response: response,
      viaScopelessOAuth: !1,
      oauthBearerSha256: null,
      wasEndpointMovedAtSend: !1,
      viaOAuth: !1
    };
  }
  if (St()) return t("[Bootstrap] Skipped: Nonessential traffic disabled"), null;
  if (Te() !== "firstParty") return t("[Bootstrap] Skipped: 3P provider"), null;
  let {
      params: params,
      userAgent: userAgent
    } = se(e),
    u = async (f, s) => {
      t("[Bootstrap] Fetching");
      let A = await Wt.get(`${f}/api/claude_cli/bootstrap`, {
          headers: {
            "Content-Type": "application/json",
            "User-Agent": userAgent,
            ...zZt(),
            ...s
          },
          params: params,
          timeout: 5000,
          ...(vp() && {
            proxy: !1,
            maxRedirects: 0,
            adapter: "http"
          })
        }),
        C = re().safeParse(A.data);
      if (!C.success) return t(`[Bootstrap] Response failed validation: ${C.error.message}`), c("api_bootstrap_fetch", "parse_failed"), null;
      return t("[Bootstrap] Fetch ok"), C.data;
    },
    d = $v();
  if (!d && Sc()) try {
    let [f, s] = await Promise.all([PNe(), UQe()]);
    if (f !== null) {
      let response_2 = await u(i.ANTHROPIC_BASE_URL || s?.baseURL || nn().BASE_API_URL, {
        ...s?.extraHeaders,
        Authorization: `Bearer ${await f.getToken()}`,
        "anthropic-beta": Jc
      });
      return response_2 && {
        response: response_2,
        viaScopelessOAuth: !1,
        oauthBearerSha256: null,
        wasEndpointMovedAtSend: !1,
        viaOAuth: !1
      };
    }
  } catch (error) {
    return t(`[Bootstrap] WIF fetch failed: ${Wt.isAxiosError(error) ? error.response?.status ?? error.code : error instanceof Error ? error.constructor.name : "unknown"}`), c("api_bootstrap_fetch", "wif_unavailable"), null;
  }
  let _ = Kee(d);
  if (!Ln()?.accessToken && !_) return t("[Bootstrap] Skipped: no usable OAuth, WIF, or API key"), null;
  if (i.ANTHROPIC_UNIX_SOCKET) return t("[Bootstrap] Skipped: unix-socket-proxied session"), c("api_bootstrap_fetch", "unix_socket_skip"), null;
  let viaScopelessOAuth = !1,
    oauthBearerSha256 = null,
    wasEndpointMovedAtSend = !1,
    viaOAuth = !1;
  try {
    let response_3 = await vE(async () => {
      let s = Ln()?.accessToken,
        A = fp(),
        C;
      if (s && (A || !_)) viaScopelessOAuth = !A && !_, oauthBearerSha256 = nt(s), viaOAuth = !0, C = {
        Authorization: `Bearer ${s}`,
        "anthropic-beta": Jc
      };else if (_) viaScopelessOAuth = !1, oauthBearerSha256 = null, viaOAuth = !1, C = {
        "x-api-key": _
      };else return t("[Bootstrap] No auth available on retry, aborting"), null;
      return wasEndpointMovedAtSend = vp() && GFt(), u(nn().BASE_API_URL, C);
    }, {
      gateToSessionOAuthCredential: q(),
      credentials: credentials
    });
    return response_3 && {
      response: response_3,
      viaScopelessOAuth: viaScopelessOAuth,
      oauthBearerSha256: oauthBearerSha256,
      wasEndpointMovedAtSend: wasEndpointMovedAtSend,
      viaOAuth: viaOAuth
    };
  } catch (error) {
    let s = Wt.isAxiosError(error) ? error.response?.status : void 0;
    if (viaScopelessOAuth && s === 403) return t("[Bootstrap] Skipped: 403 for OAuth token without profile scope"), c("api_bootstrap_fetch", "no_profile_scope_403"), null;
    throw t(`[Bootstrap] Fetch failed: ${Wt.isAxiosError(error) ? error.response?.status ?? error.code : "unknown"}`), m("api_bootstrap_fetch", "request_failed"), error;
  }
}
function oJr() {
  if (i.ANTHROPIC_UNIX_SOCKET) return !1;
  return Boolean(Kee($v())) || Boolean(Ln()?.accessToken) && fp();
}
async function Ove(e, o) {
  await Mmi(e, o);
}
async function Mmi(storageV5, credentials_2, {
  keepRenderCaches = !1,
  renderedClientData: renderedClientData
} = {}) {
  rJr();
  try {
    let u = Te() === "firstParty";
    if (!u) V1(), U3();
    let d = F(),
      _ = Gxe(),
      w = await ce(d, credentials_2);
    if (!w) return !1;
    let {
      response: response_4,
      viaScopelessOAuth: viaScopelessOAuth_2,
      viaOAuth: viaOAuth_2,
      oauthBearerSha256: oauthBearerSha256_2,
      wasEndpointMovedAtSend: wasEndpointMovedAtSend_2
    } = w;
    if (_ !== Gxe()) return t("[Bootstrap] Discarding response fetched under a superseded credential"), c("api_bootstrap_fetch", "superseded_credential"), VMs({
      storageV5: storageV5,
      credentials: credentials_2
    }), !1;
    g("api_bootstrap_fetch", vp() ? {
      bearer_plan_named: L(response_4) !== void 0
    } : void 0);
    let s = fe(),
      A = response_4.narrowed ?? viaScopelessOAuth_2,
      C = A && response_4.additional_model_options == null,
      x = A && response_4.additional_model_costs == null,
      O = A && response_4.model_access == null,
      N = A && response_4.org_model_default == null,
      G = A && response_4.auto_compact_windows == null,
      data = response_4.client_data ?? null,
      additionalModelOptionsCache = C ? s.additionalModelOptionsCache ?? [] : response_4.additional_model_options ?? [],
      additionalModelCostsCache = x ? s.additionalModelCostsCache ?? {} : response_4.additional_model_costs ?? {},
      modelAccessCache = O ? s.modelAccessCache ?? [] : response_4.model_access ?? [],
      W = G ? s.autoCompactWindowsCache ?? null : response_4.auto_compact_windows ?? null;
    if (le(response_4.oauth_account), !A) {
      let y = !viaOAuth_2 || Qa(),
        offered = !(viaOAuth_2 && y) ? [] : response_4.program_use_cases === void 0 || response_4.program_use_cases === null ? null : RUi(response_4.program_use_cases),
        z = S$e(),
        D = xUi({
          serverNamed: y ? response_4.program_use_case_id || null : null,
          serverDefault: response_4.program_use_case_default_id ?? null,
          offered: offered,
          mode: AUi(response_4.program_use_case_choice, offered ?? [])
        });
      if (Znt(D), D !== null) g("api_program_use_case");
      if (D !== null && D !== z) Jcn(OA);
      zMs();
    }
    let j = Gxe();
    ue(response_4, oauthBearerSha256_2, wasEndpointMovedAtSend_2);
    let v = te(s.oauthAccount, response_4.oauth_account),
      orgModelDefaultCache = response_4.org_model_default ? {
        ...response_4.org_model_default,
        ...(v?.organizationUuid && {
          orgUuid: v.organizationUuid
        })
      } : N ? s.orgModelDefaultCache ?? null : null,
      P = SEo({
        ...d,
        organizationUuid: v?.organizationUuid ?? d.organizationUuid
      }),
      V = s.clientDataCacheSlots?.[P],
      E = Zsn(V) ? V : void 0,
      slot_hit = E !== void 0,
      oe = ln(v, s.oauthAccount);
    if (j !== _ || !ln(s.modelAccessCache ?? [], modelAccessCache)) R$e().clear();
    let slot_stale = u && E !== void 0 && Date.now() - E.at > Z8i,
      J = u && (E === void 0 || !ln(E.data ?? null, data)),
      slot_changed = u && (renderedClientData !== void 0 ? !ln(renderedClientData, data) : J);
    l("tengu_client_data_cache_key", {
      slot_hit: slot_hit,
      slot_changed: slot_changed,
      legacy_fallback: !slot_hit && s.clientDataCache != null,
      slot_stale: slot_stale
    });
    let Q = u,
      Z = typeof s.additionalModelOptionsAnsweredAt === "number",
      ne = C || (Q ? Array.isArray(s.additionalModelOptionsCache) && Z && ln(s.additionalModelOptionsCache, additionalModelOptionsCache) : !Z && ln(s.additionalModelOptionsCache ?? [], additionalModelOptionsCache));
    if (!J && !slot_changed && !slot_stale && ne && ln(s.additionalModelCostsCache ?? {}, additionalModelCostsCache) && ln(s.modelAccessCache ?? [], modelAccessCache) && ln(s.orgModelDefaultCache ?? null, orgModelDefaultCache) && (!u || ln(s.autoCompactWindowsCache ?? null, W)) && oe) {
      if (t("[Bootstrap] Cache unchanged, skipping write"), sin(P), !O) fFs();
      return !0;
    }
    t("[Bootstrap] Cache updated, persisting to disk");
    let ee = !1;
    if (await Le(y => {
      if (j !== Gxe()) return ee = !0, y;
      let oauthAccount = te(y.oauthAccount, response_4.oauth_account),
        z = SEo({
          ...d,
          organizationUuid: oauthAccount?.organizationUuid ?? null
        });
      return {
        ...y,
        clientDataCacheSlots: u ? e9i(y.clientDataCacheSlots, z, {
          data: data,
          at: Date.now(),
          entrypoint: d.entrypoint ?? null,
          model: d.model,
          org: oauthAccount?.organizationUuid ?? null
        }) : y.clientDataCacheSlots,
        ...(C ? {} : {
          additionalModelOptionsCache: additionalModelOptionsCache,
          additionalModelOptionsAnsweredAt: Q ? Date.now() : void 0
        }),
        ...(x ? {} : {
          additionalModelCostsCache: additionalModelCostsCache
        }),
        ...(O ? {} : {
          modelAccessCache: modelAccessCache
        }),
        ...(N ? {} : {
          orgModelDefaultCache: orgModelDefaultCache
        }),
        autoCompactWindowsCache: u && !G ? W : y.autoCompactWindowsCache ?? null,
        oauthAccount: oauthAccount
      };
    }, storageV5), sin(P), ee) return !1;
    if (!O) fFs();
    if (slot_changed && !keepRenderCaches) V1(), U3();
    return !0;
  } catch (error) {
    if (Im(error)) t(`[Bootstrap] fetchBootstrapData failed: ${error}`, {
      level: "error"
    });else a(error);
    return !1;
  } finally {
    VIs();
  }
}
var de = p(() => Ft({
  data: vr(Ft({
    id: ge(),
    display_name: ge().nullish(),
    description: ge().nullish()
  }))
}));
async function pe(e) {
  await $3(e);
  let o = Xr();
  if (!o) return null;
  try {
    let r = await Wt.get(`${o.url}/v1/models`, {
        headers: {
          Authorization: `Bearer ${o.jwt}`,
          "anthropic-version": "2023-06-01",
          "User-Agent": ui()
        },
        params: {
          limit: 1000
        },
        timeout: 5000
      }),
      h = de().safeParse(r.data);
    if (!h.success) return t(`[Bootstrap] Gateway /v1/models failed validation: ${h.error.message}`), null;
    let additional_model_options = h.data.data.filter(item => /(claude|anthropic)/i.test(item.id)).filter(item => {
      let _ = o0(item.id);
      return _ === null || IZe(zy(_.firstParty));
    }).map(item => ({
      value: item.id,
      label: Tk(item.display_name ?? "") || Tk(item.id),
      description: Pae(item.description ?? "")
    }));
    return t(`[Bootstrap] Gateway /v1/models \u2192 ${additional_model_options.length} custom options`), {
      additional_model_options: additional_model_options
    };
  } catch (error) {
    return t(`[Bootstrap] Gateway /v1/models fetch failed: ${Wt.isAxiosError(error) ? error.response?.status ?? error.code : "unknown"}`), null;
  }
}
export { rJr, oJr, Ove, Mmi };