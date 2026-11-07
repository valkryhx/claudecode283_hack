// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  Wt
} from "B:/~BUN/root/chunk-b91sxvrb.js";
import {
  Xr,
  Qnt,
  Gxe,
  m2s,
  S$e,
  Znt,
  q,
  v7,
  R$e,
  Jcn
} from "B:/~BUN/root/chunk-game8aqv.js";
import {
  Im
} from "B:/~BUN/root/chunk-y2g9f85n.js";
import {
  i
} from "B:/~BUN/root/chunk-j6pt0v41.js";
import {
  Jc,
  nn
} from "B:/~BUN/root/chunk-y1kkrqy9.js";
import {
  t
} from "B:/~BUN/root/chunk-2pp12te6.js";
import {
  Tk,
  Pae
} from "B:/~BUN/root/chunk-jdtvghyw.js";
import {
  St,
  a
} from "B:/~BUN/root/chunk-xrwdh0g4.js";
import {
  l
} from "B:/~BUN/root/chunk-mb9chr1y.js";
import {
  g,
  m,
  c
} from "B:/~BUN/root/chunk-3z3yrbk4.js";
import {
  p
} from "B:/~BUN/root/chunk-z6138ats.js";
import {
  o0,
  fFs,
  pr,
  Te,
  gzn
} from "B:/~BUN/root/chunk-8f4z6bdn.js";
import {
  OA,
  zMs,
  GMs,
  VMs
} from "B:/~BUN/root/chunk-1s0yt4vj.js";
import {
  ln,
  vp
} from "B:/~BUN/root/chunk-3xdsa4p8.js";
import {
  yf,
  xC
} from "B:/~BUN/root/chunk-65j2302z.js";
import {
  Kee,
  Uwo,
  T6i,
  IZe,
  at,
  LZe,
  zy,
  jm,
  V1,
  $3,
  U3,
  Sc,
  Qa,
  $v,
  Ln,
  Rt,
  fp,
  kyt,
  vE,
  VIs,
  bEo,
  SEo,
  Z8i,
  Zsn,
  e9i,
  Le,
  fe,
  gMs,
  sin,
  _Ms,
  bMs,
  SMs,
  kMs
} from "B:/~BUN/root/chunk-1ks9vs37.js";
import {
  RUi,
  AUi,
  xUi,
  zZt
} from "B:/~BUN/root/chunk-yhafkw66.js";
import {
  yzi
} from "B:/~BUN/root/chunk-78494p3w.js";
import {
  Bgo
} from "B:/~BUN/root/chunk-fzefftbw.js";
import {
  UQe,
  PNe
} from "B:/~BUN/root/chunk-1012essb.js";
import {
  Hmi
} from "B:/~BUN/root/chunk-p1qj2aq3.js";
import {
  GFt
} from "B:/~BUN/root/chunk-sjvfdrzm.js";
import {
  ge,
  Mn,
  ws,
  qc,
  vr,
  Ft,
  v_
} from "B:/~BUN/root/chunk-b3kw6jpx.js";
import {
  Gn
} from "B:/~BUN/root/chunk-zpne314q.js";
import {
  nt
} from "B:/~BUN/root/chunk-tq5dzbq9.js";
import {
  ui
} from "B:/~BUN/root/chunk-xwsv2hvn.js";
var re = p(() => Ft({
  client_data: v_(qc()).nullish(),
  additional_model_options: vr(Ft({
    model: ge(),
    name: ge(),
    description: ge(),
    disabled_reason: ge().nullish()
  }).transform(({
    model: e,
    name: o,
    description: r,
    disabled_reason: h
  }) => {
    let u = o0(Gn(e)),
      d = u ? jm(e) : null,
      _ = r;
    if (u && d && h == null) {
      let w = r ? r.startsWith(d) ? r : `${d} \xB7 ${r}` : d,
        n = T6i(e);
      _ = n && !Rt() && !w.includes("per Mtok") ? `${w} \xB7 ${n}` : w
    }
    return {
      value: e,
      label: h != null ? `${o} (disabled)` : o,
      description: h ? _ ? `${_} \xB7 ${h}` : h : _,
      ...h != null && {
        disabled: !0
      }
    }
  })).nullish(),
  additional_model_costs: v_(Ft({
    input_tokens: Mn(),
    output_tokens: Mn(),
    prompt_cache_write_tokens: Mn(),
    prompt_cache_write_1h_tokens: Mn().nullish(),
    prompt_cache_read_tokens: Mn(),
    web_search_requests: Mn().nullish()
  }).transform((e) => ({
    inputTokens: e.input_tokens,
    outputTokens: e.output_tokens,
    promptCacheWriteTokens: e.prompt_cache_write_tokens,
    ...e.prompt_cache_write_1h_tokens != null && {
      promptCacheWrite1hTokens: e.prompt_cache_write_1h_tokens
    },
    promptCacheReadTokens: e.prompt_cache_read_tokens,
    webSearchRequests: e.web_search_requests ?? 0.01
  }))).nullish(),
  model_access: vr(Ft({
    api_name: ge(),
    entitled: ws(),
    max_effort_level: ge().nullish()
  }).transform(({
    api_name: e,
    entitled: o,
    max_effort_level: r
  }) => ({
    apiName: e,
    entitled: o,
    ...r != null && {
      maxEffortLevel: r
    }
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
  }
}

function ae(e) {
  let o = Gn(e),
    r = at();
  if (o === Gn(r)) return !0;
  let h = LZe({
    permissionMode: "plan",
    mainLoopModel: r
  }).model;
  if (o === Gn(h)) return !0;
  return [r, h].some((u) => {
    let d = yzi(u);
    return d !== void 0 && o === Gn(d)
  })
}

function ie() {
  gMs((e) => {
    try {
      return SEo(F(e !== void 0 && ae(e) ? void 0 : e))
    } catch (o) {
      return a(o), bEo
    }
  })
}
ie();

function I() {
  return gzn()
}

function rJr() {
  try {
    _Ms(() => {
      try {
        return I()
      } catch (e) {
        return a(e), !0
      }
    }), bMs(() => {
      try {
        return I()
      } catch (e) {
        return a(e), !1
      }
    }), SMs((e, o) => {
      try {
        return Hmi(e, o)
      } catch (r) {
        return a(r), e
      }
    }), kMs(() => {
      try {
        if (!I()) return null;
        let e = F();
        return {
          entrypoint: e.entrypoint ?? null,
          model: e.model,
          org: e.organizationUuid
        }
      } catch (e) {
        return a(e), null
      }
    }), GMs((e) => oJr() ? Mmi(e.storageV5, e.credentials, {
      keepRenderCaches: !0
    }) : Promise.resolve(!1))
  } catch (e) {
    a(e)
  }
}

function se(e) {
  return {
    params: {
      entrypoint: e.entrypoint,
      model: e.model
    },
    userAgent: `claude-code/${e.ccVersion}`
  }
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
  }
}

function le(e) {
  if (!e?.account_uuid) return;
  Qnt({
    accountUuid: e.account_uuid,
    emailAddress: q() ? void 0 : e.account_email ?? void 0,
    organizationUuid: e.organization_uuid ?? void 0,
    seatTier: e.seat_tier
  })
}

function L(e) {
  let o = e.oauth_account;
  return e.narrowed !== !0 && o?.account_uuid && o.organization_type ? Uwo.get(o.organization_type) : void 0
}

function ue(e, o, r) {
  if (!r) Bgo(o, L(e));
  if (o !== null && o !== kyt()) return;
  let h = e.oauth_account,
    u = L(e);
  m2s(o === null ? null : {
    bearerSha256: o,
    answeredAtMs: Date.now(),
    named: h?.organization_uuid && u !== void 0 ? {
      organizationUuid: h.organization_uuid,
      subscriptionType: u
    } : null
  })
}
async function ce(e, o) {
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
    let f = await pe(o);
    return f && {
      response: f,
      viaScopelessOAuth: !1,
      oauthBearerSha256: null,
      wasEndpointMovedAtSend: !1,
      viaOAuth: !1
    }
  }
  if (St()) return t("[Bootstrap] Skipped: Nonessential traffic disabled"), null;
  if (Te() !== "firstParty") return t("[Bootstrap] Skipped: 3P provider"), null;
  let {
    params: r,
    userAgent: h
  } = se(e), u = async (f, s) => {
    t("[Bootstrap] Fetching");
    let A = await Wt.get(`${f}/api/claude_cli/bootstrap`, {
        headers: {
          "Content-Type": "application/json",
          "User-Agent": h,
          ...zZt(),
          ...s
        },
        params: r,
        timeout: 5000,
        ...vp() && {
          proxy: !1,
          maxRedirects: 0,
          adapter: "http"
        }
      }),
      C = re().safeParse(A.data);
    if (!C.success) return t(`[Bootstrap] Response failed validation: ${C.error.message}`), c("api_bootstrap_fetch", "parse_failed"), null;
    return t("[Bootstrap] Fetch ok"), C.data
  }, d = $v();
  if (!d && Sc()) try {
    let [f, s] = await Promise.all([PNe(), UQe()]);
    if (f !== null) {
      let A = await u(i.ANTHROPIC_BASE_URL || s?.baseURL || nn().BASE_API_URL, {
        ...s?.extraHeaders,
        Authorization: `Bearer ${await f.getToken()}`,
        "anthropic-beta": Jc
      });
      return A && {
        response: A,
        viaScopelessOAuth: !1,
        oauthBearerSha256: null,
        wasEndpointMovedAtSend: !1,
        viaOAuth: !1
      }
    }
  } catch (f) {
    return t(`[Bootstrap] WIF fetch failed: ${Wt.isAxiosError(f)?f.response?.status??f.code:f instanceof Error?f.constructor.name:"unknown"}`), c("api_bootstrap_fetch", "wif_unavailable"), null
  }
  let _ = Kee(d);
  if (!Ln()?.accessToken && !_) return t("[Bootstrap] Skipped: no usable OAuth, WIF, or API key"), null;
  if (i.ANTHROPIC_UNIX_SOCKET) return t("[Bootstrap] Skipped: unix-socket-proxied session"), c("api_bootstrap_fetch", "unix_socket_skip"), null;
  let n = !1,
    B = null,
    k = !1,
    b = !1;
  try {
    let f = await vE(async () => {
      let s = Ln()?.accessToken,
        A = fp(),
        C;
      if (s && (A || !_)) n = !A && !_, B = nt(s), b = !0, C = {
        Authorization: `Bearer ${s}`,
        "anthropic-beta": Jc
      };
      else if (_) n = !1, B = null, b = !1, C = {
        "x-api-key": _
      };
      else return t("[Bootstrap] No auth available on retry, aborting"), null;
      return k = vp() && GFt(), u(nn().BASE_API_URL, C)
    }, {
      gateToSessionOAuthCredential: q(),
      credentials: o
    });
    return f && {
      response: f,
      viaScopelessOAuth: n,
      oauthBearerSha256: B,
      wasEndpointMovedAtSend: k,
      viaOAuth: b
    }
  } catch (f) {
    let s = Wt.isAxiosError(f) ? f.response?.status : void 0;
    if (n && s === 403) return t("[Bootstrap] Skipped: 403 for OAuth token without profile scope"), c("api_bootstrap_fetch", "no_profile_scope_403"), null;
    throw t(`[Bootstrap] Fetch failed: ${Wt.isAxiosError(f)?f.response?.status??f.code:"unknown"}`), m("api_bootstrap_fetch", "request_failed"), f
  }
}

function oJr() {
  if (i.ANTHROPIC_UNIX_SOCKET) return !1;
  return Boolean(Kee($v())) || Boolean(Ln()?.accessToken) && fp()
}
async function Ove(e, o) {
  await Mmi(e, o)
}
async function Mmi(e, o, {
  keepRenderCaches: r = !1,
  renderedClientData: h
} = {}) {
  rJr();
  try {
    let u = Te() === "firstParty";
    if (!u) V1(), U3();
    let d = F(),
      _ = Gxe(),
      w = await ce(d, o);
    if (!w) return !1;
    let {
      response: n,
      viaScopelessOAuth: B,
      viaOAuth: k,
      oauthBearerSha256: b,
      wasEndpointMovedAtSend: f
    } = w;
    if (_ !== Gxe()) return t("[Bootstrap] Discarding response fetched under a superseded credential"), c("api_bootstrap_fetch", "superseded_credential"), VMs({
      storageV5: e,
      credentials: o
    }), !1;
    g("api_bootstrap_fetch", vp() ? {
      bearer_plan_named: L(n) !== void 0
    } : void 0);
    let s = fe(),
      A = n.narrowed ?? B,
      C = A && n.additional_model_options == null,
      x = A && n.additional_model_costs == null,
      O = A && n.model_access == null,
      N = A && n.org_model_default == null,
      G = A && n.auto_compact_windows == null,
      M = n.client_data ?? null,
      R = C ? s.additionalModelOptionsCache ?? [] : n.additional_model_options ?? [],
      H = x ? s.additionalModelCostsCache ?? {} : n.additional_model_costs ?? {},
      T = O ? s.modelAccessCache ?? [] : n.model_access ?? [],
      W = G ? s.autoCompactWindowsCache ?? null : n.auto_compact_windows ?? null;
    if (le(n.oauth_account), !A) {
      let y = !k || Qa(),
        S = !(k && y) ? [] : n.program_use_cases === void 0 || n.program_use_cases === null ? null : RUi(n.program_use_cases),
        z = S$e(),
        D = xUi({
          serverNamed: y ? n.program_use_case_id || null : null,
          serverDefault: n.program_use_case_default_id ?? null,
          offered: S,
          mode: AUi(n.program_use_case_choice, S ?? [])
        });
      if (Znt(D), D !== null) g("api_program_use_case");
      if (D !== null && D !== z) Jcn(OA);
      zMs()
    }
    let j = Gxe();
    ue(n, b, f);
    let v = te(s.oauthAccount, n.oauth_account),
      K = n.org_model_default ? {
        ...n.org_model_default,
        ...v?.organizationUuid && {
          orgUuid: v.organizationUuid
        }
      } : N ? s.orgModelDefaultCache ?? null : null,
      P = SEo({
        ...d,
        organizationUuid: v?.organizationUuid ?? d.organizationUuid
      }),
      V = s.clientDataCacheSlots?.[P],
      E = Zsn(V) ? V : void 0,
      Y = E !== void 0,
      oe = ln(v, s.oauthAccount);
    if (j !== _ || !ln(s.modelAccessCache ?? [], T)) R$e().clear();
    let X = u && E !== void 0 && Date.now() - E.at > Z8i,
      J = u && (E === void 0 || !ln(E.data ?? null, M)),
      U = u && (h !== void 0 ? !ln(h, M) : J);
    l("tengu_client_data_cache_key", {
      slot_hit: Y,
      slot_changed: U,
      legacy_fallback: !Y && s.clientDataCache != null,
      slot_stale: X
    });
    let Q = u,
      Z = typeof s.additionalModelOptionsAnsweredAt === "number",
      ne = C || (Q ? Array.isArray(s.additionalModelOptionsCache) && Z && ln(s.additionalModelOptionsCache, R) : !Z && ln(s.additionalModelOptionsCache ?? [], R));
    if (!J && !U && !X && ne && ln(s.additionalModelCostsCache ?? {}, H) && ln(s.modelAccessCache ?? [], T) && ln(s.orgModelDefaultCache ?? null, K) && (!u || ln(s.autoCompactWindowsCache ?? null, W)) && oe) {
      if (t("[Bootstrap] Cache unchanged, skipping write"), sin(P), !O) fFs();
      return !0
    }
    t("[Bootstrap] Cache updated, persisting to disk");
    let ee = !1;
    if (await Le((y) => {
        if (j !== Gxe()) return ee = !0, y;
        let S = te(y.oauthAccount, n.oauth_account),
          z = SEo({
            ...d,
            organizationUuid: S?.organizationUuid ?? null
          });
        return {
          ...y,
          clientDataCacheSlots: u ? e9i(y.clientDataCacheSlots, z, {
            data: M,
            at: Date.now(),
            entrypoint: d.entrypoint ?? null,
            model: d.model,
            org: S?.organizationUuid ?? null
          }) : y.clientDataCacheSlots,
          ...C ? {} : {
            additionalModelOptionsCache: R,
            additionalModelOptionsAnsweredAt: Q ? Date.now() : void 0
          },
          ...x ? {} : {
            additionalModelCostsCache: H
          },
          ...O ? {} : {
            modelAccessCache: T
          },
          ...N ? {} : {
            orgModelDefaultCache: K
          },
          autoCompactWindowsCache: u && !G ? W : y.autoCompactWindowsCache ?? null,
          oauthAccount: S
        }
      }, e), sin(P), ee) return !1;
    if (!O) fFs();
    if (U && !r) V1(), U3();
    return !0
  } catch (u) {
    if (Im(u)) t(`[Bootstrap] fetchBootstrapData failed: ${u}`, {
      level: "error"
    });
    else a(u);
    return !1
  } finally {
    VIs()
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
    let u = h.data.data.filter((d) => /(claude|anthropic)/i.test(d.id)).filter((d) => {
      let _ = o0(d.id);
      return _ === null || IZe(zy(_.firstParty))
    }).map((d) => ({
      value: d.id,
      label: Tk(d.display_name ?? "") || Tk(d.id),
      description: Pae(d.description ?? "")
    }));
    return t(`[Bootstrap] Gateway /v1/models \u2192 ${u.length} custom options`), {
      additional_model_options: u
    }
  } catch (r) {
    return t(`[Bootstrap] Gateway /v1/models fetch failed: ${Wt.isAxiosError(r)?r.response?.status??r.code:"unknown"}`), null
  }
}
export {
  rJr,
  oJr,
  Ove,
  Mmi
};
