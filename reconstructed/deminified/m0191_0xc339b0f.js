// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { H } from "B:/~BUN/root/chunk-dkxhwhft.js";
import { c } from "B:/~BUN/root/chunk-kks4mj3w.js";
import { P, te, l, Zd } from "B:/~BUN/root/chunk-bgthmgyc.js";
import { i } from "B:/~BUN/root/chunk-728mwbhs.js";
import { t } from "B:/~BUN/root/chunk-qe2zga5e.js";
import { _, m, p, Or } from "B:/~BUN/root/chunk-51n463p1.js";
import { p1, un, vy, Pl, Hw, uDo, Ee, le } from "B:/~BUN/root/chunk-gf53qpk6.js";
import { mt } from "B:/~BUN/root/chunk-vyq5y0zs.js";
import { an } from "B:/~BUN/root/chunk-zksmb712.js";
import { f } from "B:/~BUN/root/chunk-zv3zxqya.js";
import { d } from "B:/~BUN/root/chunk-zs3ycjed.js";
import { G } from "B:/~BUN/root/chunk-ah3egpyh.js";
import { fs } from "B:/~BUN/root/chunk-290k5gh5.js";
import { he } from "B:/~BUN/root/chunk-3rzkfay5.js";
import { Ie } from "B:/~BUN/root/chunk-sd4cj2qx.js";
import { Kr, lf, Wc, ci, pr } from "B:/~BUN/root/chunk-1rjcv085.js";
import { rp } from "B:/~BUN/root/chunk-skjrk8s1.js";
import { BDr } from "B:/~BUN/root/chunk-q77pmen1.js";
import { C, u, lp } from "B:/~BUN/root/chunk-n8qdr73v.js";
import { L } from "B:/~BUN/root/chunk-z1enakv9.js";
function Jbo(e) {
  if (e.branchDropped && e.warnMessage) {
    if (i("tengu_bridge_outcome_branch_dropped", {
      reason: c(e.branchDropped)
    }), t(e.warnMessage, {
      level: "warn"
    }), e.branchDropped === "no_evidence") console.warn(e.warnMessage);
  }
  if (e.revisionGuessUsed) i("tengu_bridge_revision_guess_used", {});
}
import { randomUUID as de } from "crypto";
var Ybo = "tengu_woven_harbor";
function vTr(e) {
  return e.githubPr == null;
}
var X = 16;
function _Un(mode, ultraplan) {
  return {
    type: "event",
    data: {
      type: "control_request",
      request_id: `set-mode-${de()}`,
      request: {
        subtype: "set_permission_mode",
        mode: mode,
        ultraplan: ultraplan
      }
    }
  };
}
function kTr(e) {
  return {
    envVars: Object.keys(e.environmentVariables ?? {}).length > 0,
    events: e.events.filter(item => !K(item)).map(ce)
  };
}
function Xbo(e) {
  let bind_attestation = e.bind_attestation;
  if (!bind_attestation) return e;
  return {
    ...e,
    bind_attestation: {
      ...bind_attestation,
      signature: "<redacted>"
    }
  };
}
var ue = new Set(["set_permission_mode", "set_mcp_permission_mode_override", "set_max_thinking_tokens", "mcp_toggle"]);
function J(e) {
  let request = e.data.request;
  return e.data.type === "control_request" && typeof request?.subtype === "string" ? request.subtype : void 0;
}
function K(e) {
  if (e.data.type === "user") return !0;
  let n = J(e);
  return n !== void 0 && ue.has(n);
}
function ce(e) {
  return J(e) ?? String(e.data.type);
}
function Enn(e) {
  let deviceBinding = e.deviceBinding,
    o = deviceBinding ? e.events.filter(item => K(item) && !(e.deferFirstPrompt && item.data.type === "user")) : e.events;
  if (deviceBinding && o.length > X) throw new P(`session create allows at most ${X} initial events, got ${o.length}`, "session create: too many initial events");
  let environment_variables = deviceBinding ? {} : e.environmentVariables ?? {},
    disallowed_tools = L([...(e.disallowedTools ?? []), ...(deviceBinding ? uDo : [])]);
  return {
    ...(e.title && {
      title: e.title
    }),
    ...e.worker,
    ...ETr(e.persistentVolume),
    events: o.map(item => ({
      payload: item.data
    })),
    ...(e.tags && {
      tags: e.tags
    }),
    ...(!deviceBinding && e.sessionGroupingId && {
      session_grouping_id: e.sessionGroupingId
    }),
    ...(!deviceBinding && e.agentId && {
      agent_id: e.agentId
    }),
    ...(Object.keys(environment_variables).length > 0 && {
      environment_variables: environment_variables
    }),
    ...(deviceBinding && {
      target_device_id: deviceBinding.deviceUUID,
      bind_attestation: {
        kid: deviceBinding.kid,
        signature: deviceBinding.signature
      },
      bind_attestation_issued_at: deviceBinding.issuedAt,
      ...(e.requestElevatedTier && {
        security_tier: "elevated"
      }),
      ...(e.repositoriesTrusted && {
        repositories_trusted: !0
      })
    }),
    config: {
      sources: e.sources.map(ge),
      outcomes: e.outcomes,
      ...(e.model && {
        model: e.model
      }),
      ...(e.cwd && {
        cwd: e.cwd
      }),
      ...(e.effortLevel && {
        effort_level: e.effortLevel
      }),
      ...(e.seedBundleFileId && {
        seed_bundle_file_id: e.seedBundleFileId
      }),
      ...(e.reuseOutcomeBranches && {
        reuse_outcome_branches: !0
      }),
      ...(e.appendSystemPrompt && {
        append_system_prompt: e.appendSystemPrompt
      }),
      ...(e.customSystemPrompt && {
        custom_system_prompt: e.customSystemPrompt
      }),
      ...(e.appendSubagentSystemPrompt && {
        append_subagent_system_prompt: e.appendSubagentSystemPrompt
      }),
      ...(e.fallbackModel && {
        fallback_model: e.fallbackModel
      }),
      ...(e.maxBudgetUsd !== void 0 && e.maxBudgetUsd > 0 && {
        max_budget_usd: e.maxBudgetUsd
      }),
      ...(e.allowedTools && e.allowedTools.length > 0 && {
        allowed_tools: e.allowedTools
      }),
      ...(e.outputSchema && {
        output_schema: e.outputSchema
      }),
      ...(!deviceBinding && e.correlationId && {
        correlation_id: e.correlationId
      }),
      ...(disallowed_tools.length > 0 && {
        disallowed_tools: disallowed_tools
      })
    }
  };
}
function ETr(e) {
  return;
}
function Tnn(e, n) {
  return e === "v1alpha2" ? n?.session : n;
}
function ge(e) {
  let {
    allow_unrestricted_git_push: allow_unrestricted_git_push,
    ...o
  } = e;
  return o;
}
function TTr(e, n) {
  if (e === 401) return `${n || "Claude login not accepted"} \xB7 Run /login, then try again`;
  return;
}
function CTr(e, n) {
  if (n?.type === "not_found_error" && n.resource_type === "session_grouping") return `Project not found: ${e}. Check the id \u2014 a Project you don't have access to looks the same as one that doesn't exist.`;
  switch (n?.reason) {
    case "public_grouping_hosted_only":
      return `${e} is a public Project, and public Projects run on Anthropic-hosted infrastructure only. Drop --environment (and any self-hosted target), or use a private Project.`;
    case "feature_disabled":
      return "Projects are not available for your organization.";
    default:
      return;
  }
}
function see(e) {
  return e?.kind === "self_hosted_pool";
}
function gF(e) {
  return e.kind === "self_hosted_pool" ? e.pool_id : e.environment_id;
}
function k3(e) {
  return e !== void 0 && e.startsWith("ccpool_");
}
var pe = ["policySettings", "flagSettings", "userSettings"];
function E3() {
  let ignoredUntrustedPool,
    n = fs();
  for (let o = n.length - 1; o >= 0; o--) {
    let source = n[o],
      id = he(source)?.remote?.defaultEnvironmentId;
    if (id === void 0) continue;
    if (k3(id) && !pe.includes(source)) {
      ignoredUntrustedPool ??= {
        id: id,
        source: source
      };
      continue;
    }
    return {
      id: id,
      source: source,
      ignoredUntrustedPool: ignoredUntrustedPool?.id === id ? void 0 : ignoredUntrustedPool
    };
  }
  return {
    id: void 0,
    source: void 0,
    ignoredUntrustedPool: ignoredUntrustedPool
  };
}
function gIt(e) {
  return e.startsWith("ccpool_") ? {
    self_hosted_runner_pool_id: e
  } : {
    environment_id: e
  };
}
var me = f(() => u({
  environments: C(lp(e => typeof e === "object" && e !== null && !Array.isArray(e)))
}));
function fe(e) {
  if (typeof e === "string" && e.trim().length === 0) return new P("The cloud environments service returned an empty response (HTTP 200 with no body). This is usually temporary \u2014 try again in a moment.", "fetchEnvironments: HTTP 200 with an empty body");
  if (typeof e === "string") return new P("The cloud environments service returned a response in an unexpected format (HTTP 200 with a non-JSON body). This is usually temporary \u2014 try again in a moment.", "fetchEnvironments: HTTP 200 with a non-JSON body");
  return new P("The cloud environments service returned a response in an unexpected format (HTTP 200 without a usable environments list). This is usually temporary \u2014 try again in a moment.", "fetchEnvironments: HTTP 200 JSON body without a valid environments array");
}
async function T3(e, n, credentials) {
  return Or("teleport_environments_list", async () => {
    if (Ie() !== "firstParty") throw Error("Remote environments are only available on the first-party Anthropic API provider.");
    let a = e ?? un()?.accessToken;
    if (!a) throw Error("Claude Code cloud sessions require authentication with a Claude.ai account. API key authentication is not sufficient. Please run /login to authenticate, or check your authentication status with /status.");
    let r = await p1();
    if (!r) throw Error("Unable to get organization UUID");
    let y = `${an().BASE_API_URL}/v1/environment_providers`;
    try {
      let h = await vy(() => mt.get(y, {
        headers: {
          ...Hw(un()?.accessToken ?? a),
          "x-organization-uuid": r
        },
        timeout: 15000
      }), {
        credentials: credentials
      });
      if (h.status !== 200) throw Error(`Failed to fetch environments: ${h.status} ${h.statusText}`);
      let v = me().safeParse(h.data);
      if (!v.success) throw fe(h.data);
      let environments = v.data.environments,
        hasRemoteEnvironment = environments.length > 0;
      if (le().hasRemoteEnvironment !== hasRemoteEnvironment) await Ee(g => g.hasRemoteEnvironment === hasRemoteEnvironment ? g : {
        ...g,
        hasRemoteEnvironment: hasRemoteEnvironment
      }, n);
      return environments;
    } catch (error) {
      let v = te(error);
      if (Zd(error)) t(`fetchEnvironments failed: ${v.message}`, {
        level: "error"
      });else d(v);
      throw v;
    }
  }, _e);
}
function _e(e) {
  return e instanceof P ? "malformed_response" : "error";
}
async function wLe(name = "Default", signal, o) {
  return Or("teleport_default_environment_create", async () => {
    if (Ie() !== "firstParty") throw Error("Remote environments are only available on the first-party Anthropic API provider.");
    let s = o ?? un()?.accessToken;
    if (!s) throw Error("No access token available");
    let a = await p1();
    if (!a) throw Error("Unable to get organization UUID");
    let r = `${an().BASE_API_URL}/v1/environment_providers/cloud/create`;
    return (await mt.post(r, {
      name: name,
      kind: "anthropic_cloud",
      description: "Default - trusted network access",
      config: {
        environment_type: "anthropic",
        cwd: "/home/user",
        init_script: null,
        environment: {},
        languages: [{
          name: "python",
          version: "3.11"
        }, {
          name: "node",
          version: "20"
        }],
        network_config: {
          allowed_hosts: [],
          allow_default_hosts: !0
        }
      }
    }, {
      headers: {
        ...Hw(s),
        "anthropic-beta": "ccr-byoc-2025-07-29",
        "x-organization-uuid": a
      },
      timeout: 15000,
      signal: signal
    })).data;
  });
}
async function Cnn(e, credentials_2) {
  {
    if (Ie() !== "firstParty") return [];
    let o = e ?? un()?.accessToken;
    if (!o) return [];
    let s = await p1();
    if (!s) return [];
    let a = `${an().BASE_API_URL}/v1/code/runners/self-hosted/pools`;
    try {
      let r = await vy(() => mt.get(a, {
        headers: {
          ...Hw(un()?.accessToken ?? o),
          "anthropic-beta": "ccr-byoc-2025-07-29",
          "x-organization-uuid": s
        },
        timeout: 15000
      }), {
        credentials: credentials_2
      });
      if (r.status !== 200) return t(`fetchSelfHostedPools: ${r.status} ${r.statusText}`, {
        level: "error"
      }), p("teleport_self_hosted_pool_list", "non_200"), [];
      return Or("teleport_self_hosted_pool_list", async () => (r.data.pools ?? []).map(item => ({
        kind: "self_hosted_pool",
        pool_id: item.pool_id,
        name: item.name,
        created_at: item.created_at,
        alive_runner_count: item.alive_runner_count ?? 0
      })));
    } catch (error) {
      let y = te(error);
      if (Zd(error)) t(`fetchSelfHostedPools failed: ${y.message}`, {
        level: "error"
      }), p("teleport_self_hosted_pool_list", "api_error");else d(y), p("teleport_self_hosted_pool_list", "unexpected");
      return [];
    }
  }
  return [];
}
async function RTr({
  environmentId: environmentId,
  title: title,
  gitRepoUrl: gitRepoUrl,
  branch: branch,
  defaultBranch: defaultBranch,
  signal: signal_2,
  baseUrl: baseUrl,
  getAccessToken: getAccessToken,
  credentials: credentials_3,
  permissionMode: permissionMode,
  tags: tags
}) {
  let {
      getClaudeAIOAuthTokens: getClaudeAIOAuthTokens,
      getClaudeAIOAuthTokensAsync: getClaudeAIOAuthTokensAsync
    } = await import("B:/~BUN/root/chunk-3vayk698.js"),
    {
      getOrganizationUUID: getOrganizationUUID
    } = await import("B:/~BUN/root/chunk-j09wrkxt.js"),
    {
      getOauthConfig: getOauthConfig
    } = await import("B:/~BUN/root/chunk-dry4g6jq.js"),
    {
      sessionsApiWire: sessionsApiWire
    } = await import("B:/~BUN/root/chunk-an75r2wp.js"),
    {
      getMainLoopModel: getMainLoopModel
    } = await import("B:/~BUN/root/chunk-f0j8d9fn.js"),
    {
      getOriginalCwd: getOriginalCwd
    } = await import("B:/~BUN/root/chunk-kyqapdq5.js"),
    {
      default: ne
    } = await import("B:/~BUN/root/chunk-acyg5hgw.js"),
    {
      isCcrV2BridgeCreateEnabled: isCcrV2BridgeCreateEnabled
    } = await import("B:/~BUN/root/chunk-5px3whmg.js"),
    O = isCcrV2BridgeCreateEnabled() ? "v1alpha2" : "v1",
    w = {
      create_endpoint: c(O)
    },
    {
      isFirstPartyProvider: isFirstPartyProvider
    } = await import("B:/~BUN/root/chunk-4qfk17be.js");
  if (!isFirstPartyProvider()) return t("[bridge] Session create skipped on non-firstParty provider"), A("bridge_session_create_3p_provider", w);
  let F = getAccessToken?.() ?? (H() && credentials_3 !== void 0 ? (await getClaudeAIOAuthTokensAsync(credentials_3))?.accessToken : getClaudeAIOAuthTokens()?.accessToken);
  if (!F) return t("[bridge] No access token for session creation"), A("bridge_session_create_no_token", w);
  let M = await getOrganizationUUID();
  if (!M) return t("[bridge] No org UUID for session creation"), A("bridge_session_create_no_org", w);
  let {
      sources: sources,
      outcomes: outcomes,
      report: report
    } = await BDr(gitRepoUrl, branch, defaultBranch),
    worker = gIt(environmentId),
    model = getMainLoopModel(),
    cwd = getOriginalCwd(),
    events = permissionMode ? [_Un(permissionMode)] : [],
    ie = O === "v1alpha2" ? Enn({
      title: title,
      worker: worker,
      events: events,
      sources: sources,
      outcomes: outcomes,
      model: model,
      cwd: cwd,
      reuseOutcomeBranches: !0,
      tags: tags?.length ? tags : void 0
    }) : {
      ...(title !== void 0 && {
        title: title
      }),
      events: events,
      session_context: {
        sources: sources,
        outcomes: outcomes,
        model: model,
        cwd: cwd,
        reuse_outcome_branches: !0
      },
      ...worker,
      source: "remote-control",
      ...(tags?.length && {
        tags: tags
      })
    },
    W = sessionsApiWire(O, baseUrl ?? getOauthConfig().BASE_API_URL, F),
    headers = {
      ...W.headers,
      "x-organization-uuid": M
    },
    k;
  try {
    k = await ne.post(W.url, ie, {
      headers: headers,
      signal: signal_2,
      validateStatus: R => R < 500
    });
  } catch (error) {
    return t(`[bridge] Session creation request failed: ${l(error)}`), A("bridge_session_create_request_failed", w);
  }
  if (!(k.status === 200 || k.status === 201)) {
    let R = rp(k.data);
    return t(`[bridge] Session creation failed with status ${k.status}${R ? `: ${R}` : ""}`), A("bridge_session_create_http_error", w);
  }
  let D = Tnn(O, k.data)?.id;
  if (typeof D !== "string" || D === "") return t("[bridge] No session ID in response"), A("bridge_session_create_bad_response", w);
  return Jbo(report), _("bridge_session_create", w), Wc(D);
}
async function hKe(e, n) {
  return (await yKe(e, n)).session;
}
async function yKe(e, n) {
  let {
      getClaudeAIOAuthTokens: getClaudeAIOAuthTokens_2,
      getClaudeAIOAuthTokensAsync: getClaudeAIOAuthTokensAsync_2
    } = await import("B:/~BUN/root/chunk-3vayk698.js"),
    {
      getOauthConfig: getOauthConfig_2
    } = await import("B:/~BUN/root/chunk-dry4g6jq.js"),
    {
      getCodeSession: getCodeSession
    } = await import("B:/~BUN/root/chunk-0njx5nf1.js"),
    {
      isCcrV2SessionCrudEnabled: isCcrV2SessionCrudEnabled
    } = await import("B:/~BUN/root/chunk-5px3whmg.js"),
    {
      isFirstPartyProvider: isFirstPartyProvider_2
    } = await import("B:/~BUN/root/chunk-4qfk17be.js");
  if (!isFirstPartyProvider_2()) return m("bridge_session_get", "bridge_session_get_3p_provider"), {
    session: null,
    notFound: !1
  };
  let v = n?.getAccessToken?.() ?? (H() && n?.credentials !== void 0 ? (await getClaudeAIOAuthTokensAsync_2(n.credentials))?.accessToken : getClaudeAIOAuthTokens_2()?.accessToken);
  if (!v) return t("[bridge] No access token for session fetch"), m("bridge_session_get", "bridge_session_get_no_token"), {
    session: null,
    notFound: !1
  };
  let useV2 = n?.useV2 ?? isCcrV2SessionCrudEnabled(),
    orgUUID;
  if (!useV2) {
    let {
      getOrganizationUUID: getOrganizationUUID_2
    } = await import("B:/~BUN/root/chunk-j09wrkxt.js");
    if (orgUUID = (await getOrganizationUUID_2()) ?? void 0, !orgUUID) return t("[bridge] No org UUID for session fetch"), m("bridge_session_get", "bridge_session_get_no_org"), {
      session: null,
      notFound: !1
    };
  }
  let g = await getCodeSession(n?.baseUrl ?? getOauthConfig_2().BASE_API_URL, v, e, 1e4, {
    useV2: useV2,
    orgUUID: orgUUID
  });
  if (typeof g !== "object") return m("bridge_session_get", g === "invalid" ? "bridge_session_get_invalid_id" : typeof g === "number" ? "bridge_session_get_http_error" : "bridge_session_get_request_failed"), {
    session: null,
    notFound: g === 404
  };
  return _("bridge_session_get"), {
    session: {
      environment_id: g.environment_id,
      title: g.title,
      status: g.status,
      created_at: g.created_at,
      updated_at: g.updated_at,
      tags: g.tags
    },
    notFound: !1
  };
}
async function N(e, n, o, s) {
  let {
      getClaudeAIOAuthTokens: getClaudeAIOAuthTokens_3,
      getClaudeAIOAuthTokensAsync: getClaudeAIOAuthTokensAsync_3
    } = await import("B:/~BUN/root/chunk-3vayk698.js"),
    {
      getOauthConfig: getOauthConfig_3
    } = await import("B:/~BUN/root/chunk-dry4g6jq.js"),
    {
      updateCodeSession: updateCodeSession
    } = await import("B:/~BUN/root/chunk-0njx5nf1.js"),
    {
      isCcrV2SessionCrudEnabled: isCcrV2SessionCrudEnabled_2
    } = await import("B:/~BUN/root/chunk-5px3whmg.js"),
    S = s?.getAccessToken?.() ?? (H() && s?.credentials !== void 0 ? (await getClaudeAIOAuthTokensAsync_3(s.credentials))?.accessToken : getClaudeAIOAuthTokens_3()?.accessToken);
  if (!S) return t(`[bridge] No access token for session ${o} update`), "failed";
  let useV2_2 = "client_metadata" in n || isCcrV2SessionCrudEnabled_2(),
    orgUUID_2;
  if (!useV2_2) {
    let {
      getOrganizationUUID: getOrganizationUUID_3
    } = await import("B:/~BUN/root/chunk-j09wrkxt.js");
    if (orgUUID_2 = (await getOrganizationUUID_3()) ?? void 0, !orgUUID_2) return t(`[bridge] No org UUID for session ${o} update`), "failed";
  }
  t(`[bridge] Updating session ${o}: ${e}`);
  let b = await updateCodeSession(s?.baseUrl ?? getOauthConfig_3().BASE_API_URL, S, e, n, 1e4, {
    useV2: useV2_2,
    orgUUID: orgUUID_2
  });
  if (b === "invalid") return m("bridge_session_patch", "bridge_session_patch_invalid_id"), "rejected";else if (typeof b !== "number") return m("bridge_session_patch", "bridge_session_patch_request_failed"), "failed";else if (b === 200) return t(`[bridge] Session ${o} updated successfully`), _("bridge_session_patch"), "landed";else return p("bridge_session_patch", "bridge_session_patch_http_error"), "failed";
}
async function ATr(e, title_2, o) {
  return N(e, {
    title: title_2
  }, "title", o);
}
async function $3o(e, n, o) {
  let title_3 = `Couldn't start \u2014 too many sessions are running \xB7 ${n}`;
  return N(e, {
    title: title_3,
    client_metadata: {
      desktop_rc_refusal: {
        title: title_3,
        reason: "capacity"
      }
    }
  }, "refusal", o);
}
var Qbo = "color:";
async function xTr(e, n, o, s) {
  let a = n === "default",
    remove_tags = o.filter(item => a || item !== n).map(item => Qbo + item),
    add_tags = a ? void 0 : [Qbo + n];
  await N(e, {
    add_tags: add_tags,
    remove_tags: remove_tags
  }, "color tag", s);
}
async function U3o(e, n, o) {
  return !1;
}
function A(e, n) {
  return m("bridge_session_create", e, n), null;
}
function jM(e) {
  return (e.type === "user" || e.type === "assistant") && e.isVirtual === !0;
}
function tz(e) {
  return e.type === "assistant" && e.isApiErrorMessage === !0 && e.message?.model === Pl;
}
function b9(e) {
  return e.type === "system" && e.subtype === "local_command";
}
function mw(e) {
  if (e.type === "api_system") return !1;
  return e.type === "progress" || e.type === "system" && !b9(e) || jM(e) || tz(e) || e.type === "attachment" && (e.attachment?.type === "thinking_drop" || e.attachment?.type === "credential_org" || e.attachment?.type === "prompt_snapshot" || e.attachment?.type === "prompt_render_point" || e.attachment?.type === "deferred_tools_record");
}
var Se = new Set(["user", "assistant", "attachment", "system"]);
function yUn(e) {
  return G(e) && typeof e.type === "string" && Se.has(e.type);
}
var Q = ["cwd", "gitBranch", "version", "userType", "entrypoint", "promptId"],
  ye = [...Q, "requestId"];
function ve(e) {
  let n = e.message;
  return e.type === "assistant" && G(n) && typeof n.id === "string" && n.id.length > 0;
}
function Gbo(e) {
  if (!yUn(e)) return e;
  let n = ve(e) ? ye : Q,
    o;
  for (let s of n) if (s in e) o ??= {
    ...e
  }, delete o[s];
  return o ?? e;
}
function _nn(e, n) {
  if (!yUn(e)) return e;
  let o;
  for (let [s, a] of Object.entries(n)) if (a !== void 0 && e[s] === void 0) o ??= {
    ...e
  }, o[s] = a;
  return o ?? e;
}
function bnn(e) {
  let n = [],
    o = 0;
  while (o < e.length) {
    let s = e[o];
    if (s.type !== "assistant" || s.resumedFromIncompleteThinking !== !0) {
      o++;
      continue;
    }
    let fromIdx = o,
      r = o - 1;
    for (;;) {
      while (r >= 0 && mw(e[r])) r--;
      let S = r >= 0 ? e[r] : void 0;
      if (S?.type !== "assistant") break;
      let E = S.message.id,
        g = r;
      while (r >= 0) {
        let T = e[r];
        if (T.type === "assistant") {
          if (T.message.id === E) g = r, r--;else break;
        } else if (mw(T)) r--;else {
          let I = r;
          while (I >= 0 && (e[I].type !== "assistant" || mw(e[I]))) I--;
          let x = I >= 0 ? e[I] : void 0;
          if (x?.type === "assistant" && x.message.id === E) g = I, r = I - 1;else break;
        }
      }
      fromIdx = g;
      let b = e[g];
      if (b.type !== "assistant" || b.resumedFromIncompleteThinking !== !0) break;
    }
    let toIdx = o,
      h = s.message.id,
      v = o + 1;
    for (;;) {
      let S = v;
      while (S < e.length && mw(e[S])) S++;
      let E = S < e.length ? e[S] : void 0;
      if (E?.type === "assistant") {
        if (E.message.id === h) {
          toIdx = S, v = S + 1;
          continue;
        }
        if (E.resumedFromIncompleteThinking === !0) {
          toIdx = S, h = E.message.id, v = S + 1;
          continue;
        }
        break;
      }
      let g = S;
      while (g < e.length && (e[g].type !== "assistant" || mw(e[g]))) g++;
      let b = g < e.length ? e[g] : void 0;
      if (b?.type === "assistant" && b.message.id === h) {
        toIdx = g, v = g + 1;
        continue;
      }
      break;
    }
    n.push({
      fromIdx: fromIdx,
      toIdx: toIdx
    }), o = v > o ? v : o + 1;
  }
  return n;
}
var Snn = "auto-mode-classifier-error.txt",
  wnn = "auto-mode-dump.",
  vnn = "auto-mode-env-edit-",
  knn = "auto-mode-builtins-",
  Vbo = "auto-mode-classifier-dump",
  qbo = "auto-mode-classifier-system";
function Kbo(e) {
  if (typeof e !== "object" || e === null || !("type" in e)) return !1;
  return e.type === "auto-mode-classifier-dump" || e.type === "auto-mode-classifier-system";
}
function Rnn(e) {
  let teleportedSessionIds = Kr().teleportedSessionIds;
  if (teleportedSessionIds.add(pr(e)), teleportedSessionIds.size > 64) {
    let o = teleportedSessionIds.values().next().value;
    if (o !== void 0) teleportedSessionIds.delete(o);
  }
}
function vk(e) {
  return Kr().teleportedSessionIds.has(pr(e));
}
function Zbo(e) {
  Kr().teleportedSessionIds.delete(pr(e));
}
var be = {
    refusal_fallback_prompt: "choose: retry on fallback model or edit prompt",
    auto_mode_server_fallback: "acknowledge the classifier billing notice (Enter continues in auto mode)",
    auto_mode_outside_reads: "choose: keep allowing reads outside the working directories, or block them"
  },
  _Ke = "dialog:mcp_elicitation";
function Ann(dialog_kind, payload, request_id, s) {
  return {
    tool_name: `dialog:${dialog_kind}`,
    display_tool_name: "Claude needs your input",
    action_description: be[dialog_kind] ?? `Respond to the ${dialog_kind} dialog to continue`,
    raw_command: void 0,
    tool_use_id: s ?? "",
    request_id: request_id,
    input: {
      dialog_kind: dialog_kind,
      payload: payload
    }
  };
}
import { randomUUID as Te } from "crypto";
function xnn(e, n, events_2, s) {
  if (lf(n, "sessionId"), !s) return {
    url: `${e}/v1/sessions/${n}/events`,
    body: {
      events: events_2
    }
  };
  let a = ci(n);
  return {
    url: `${e}/v1/code/sessions/${encodeURIComponent(a)}/events`,
    body: {
      events: events_2.map(item => ({
        payload: typeof item.uuid === "string" && item.uuid ? item : {
          ...item,
          uuid: Te()
        }
      }))
    }
  };
}
export { jM, tz, b9, mw, yUn, Gbo, _nn, bnn, Snn, wnn, vnn, knn, Vbo, qbo, Kbo, Ybo, vTr, _Un, kTr, Xbo, Enn, ETr, Tnn, TTr, CTr, see, gF, k3, E3, gIt, T3, wLe, Cnn, Jbo, RTr, hKe, yKe, ATr, $3o, Qbo, xTr, U3o, Rnn, vk, Zbo, _Ke, Ann, xnn };