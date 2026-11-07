// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { Wt } from "B:/~BUN/root/chunk-b91sxvrb.js";
import { b, f } from "B:/~BUN/root/chunk-drx9cnw1.js";
import { d } from "B:/~BUN/root/chunk-y2g9f85n.js";
import { TMs, X1n } from "B:/~BUN/root/chunk-1s0yt4vj.js";
import { l } from "B:/~BUN/root/chunk-mb9chr1y.js";
import { m, c, ao } from "B:/~BUN/root/chunk-3z3yrbk4.js";
import { bk } from "B:/~BUN/root/chunk-zn7b14jn.js";
import { ont } from "B:/~BUN/root/chunk-1g25msn4.js";
import { Nb, Jf, Ld } from "B:/~BUN/root/chunk-rr294jrm.js";
import { t } from "B:/~BUN/root/chunk-2pp12te6.js";
import { V } from "B:/~BUN/root/chunk-f9dwrymq.js";
import { St, a } from "B:/~BUN/root/chunk-xrwdh0g4.js";
import { Te } from "B:/~BUN/root/chunk-8f4z6bdn.js";
import { z_o, rRe, ZCs, y_, AD, bz, jFt } from "B:/~BUN/root/chunk-5w7xhbnh.js";
import { Fee, b2e } from "B:/~BUN/root/chunk-9hk6qhrz.js";
import { eRe, Znn } from "B:/~BUN/root/chunk-yrh147c7.js";
import { ln } from "B:/~BUN/root/chunk-3xdsa4p8.js";
import { bJs } from "B:/~BUN/root/chunk-rx1j8sk3.js";
import { ui, cb } from "B:/~BUN/root/chunk-xwsv2hvn.js";
class BridgeFatalError extends Error {
  status;
  errorType;
  suppressible;
  constructor(e, n, p, y = !1) {
    super(e);
    this.name = "BridgeFatalError", this.status = n, this.errorType = p, this.suppressible = y;
  }
}
async function M(e, n, p, y, u, v, T) {
  let h = Fee(y.data);
  if (h === void 0) return y;
  let justEnrolled = !1;
  if (b2e(h)) {
    p(`[bridge:api] ${T}: 403 untrusted_device, enrolling this computer and retrying`);
    let k = await e.recover(u);
    if (k) {
      let S = await v(n(), k),
        r = S.status === 403 ? Fee(S.data) : void 0;
      if (r === void 0) return S;
      h = r, justEnrolled = !0, p(`[bridge:api] ${T}: retry after enrollment also got untrusted_device`);
    }
  }
  throw new BridgeFatalError(`${T}: ${e.hint(h, {
    justEnrolled: justEnrolled
  })}`, 403, "untrusted_device");
}
function Y$o(e) {
  function n(r) {
    e.onDebug?.(r);
  }
  let p = 0,
    y = 100;
  async function u(r, i) {
    let o = {
        Authorization: `Bearer ${r}`,
        "Content-Type": "application/json",
        "anthropic-version": "2023-06-01",
        "anthropic-beta": TMs.header,
        "x-environment-runner-version": e.runnerVersion,
        "User-Agent": ui()
      },
      s = i ?? (await e.getTrustedDeviceToken?.());
    if (s) o["X-Trusted-Device-Token"] = s;
    return o;
  }
  function v() {
    let r = e.getAccessToken();
    if (!r) throw Error(eRe);
    return r;
  }
  async function T(r, i, o) {
    let s = o === "enroll_and_retry" ? e.untrustedDevice : void 0,
      g = s ? await e.getTrustedDeviceToken?.() : void 0,
      _ = v(),
      E = await r(_, g);
    if (E.status === 403 && s) return M(s, v, n, E, g, r, i);
    if (E.status !== 401) return E;
    if (!e.onAuth401) return n(`[bridge:api] ${i}: 401 received, no refresh handler`), E;
    if (n(`[bridge:api] ${i}: 401 received, attempting token refresh`), await e.onAuth401(_)) {
      n(`[bridge:api] ${i}: Token refreshed, retrying request`);
      let D = v(),
        P = await r(D, g);
      if (P.status === 403 && s) return M(s, v, n, P, g, r, i);
      if (P.status !== 401) return P;
      n(`[bridge:api] ${i}: Retry after refresh also got 401`);
    } else n(`[bridge:api] ${i}: Token refresh failed`);
    return E;
  }
  let h = {
    async registerBridgeEnvironment(r, signal) {
      return ao("bridge_environment_register", async () => {
        n(`[bridge:api] POST /v1/environments/bridge bridgeId=${r.bridgeId}`);
        let o,
          s = r.getToolHostAdvert?.() ?? {
            kind: "withdraw"
          };
        switch (s.kind) {
          case "advertise":
            o = {
              tool_host: "2",
              tool_host_cc_version: s.advert.cliVersion,
              tool_host_platform: s.advert.platform
            };
            break;
          case "withdraw":
            if (r.reuseEnvironmentId) o = {
              tool_host: "",
              tool_host_cc_version: "",
              tool_host_platform: "",
              tool_host_blocker: ""
            };
            break;
          case "unknown":
            break;
        }
        let g = {
            machine_name: r.machineName,
            ...(r.machineId != null && {
              machine_id: r.machineId
            }),
            directory: r.dir,
            branch: r.branch,
            git_repo_url: ont(r.gitRepoUrl),
            max_sessions: r.maxSessions,
            metadata: {
              worker_type: r.workerType,
              ...(r.machineId != null && {
                machine_id: r.machineId
              }),
              ...o
            },
            ...(r.hostProfile && {
              host: r.hostProfile
            }),
            ...(r.reuseEnvironmentId && {
              environment_id: r.reuseEnvironmentId
            })
          },
          _ = await T(async (E, w) => Wt.post(`${e.baseUrl}/v1/environments/bridge`, g, {
            headers: await u(E, w),
            timeout: 15000,
            signal: signal,
            validateStatus: D => D < 500
          }), "Registration", "enroll_and_retry");
        if (_.status === 409 && jFt(_.data) === Znn) throw new BridgeFatalError(bz(_.data) ?? "This folder is already served by another Claude Code on this device. Stop it first.", 409, Znn);
        return A(_.status, _.data, "Registration", _.headers), n(`[bridge:api] POST /v1/environments/bridge -> ${_.status} environment_id=${_.data.environment_id}`), n(`[bridge:api] >>> ${z_o({
          ...g,
          ...(g.host && {
            host: {
              tools: g.host.tools.length,
              mcp: g.host.mcp_servers?.length ?? 0
            }
          })
        })}`), n(`[bridge:api] <<< ${z_o(_.data)}`), _.data;
      }, x);
    },
    async pollForWork(r, i, signal_2, s, g) {
      Nb(r, "environmentId");
      let _ = p;
      p = 0;
      let E = {};
      if (s !== void 0) E.reclaim_older_than_ms = s;
      if (g !== void 0) E.poll_interval_ms = g;
      let w = await Wt.get(`${e.baseUrl}/v1/environments/${r}/work/poll`, {
        headers: await u(i),
        params: Object.keys(E).length > 0 ? E : void 0,
        timeout: 1e4,
        signal: signal_2,
        validateStatus: P => P < 500
      });
      if (A(w.status, w.data, "Poll", w.headers), !w.data) {
        if (p = _ + 1, p === 1 || p % y === 0) n(`[bridge:api] GET .../work/poll -> ${w.status} (no work, ${p} consecutive empty polls)`);
        return null;
      }
      let D = w.data.data?.mode;
      if (D != null) {
        let {
          id: id,
          data: data
        } = w.data;
        return n(`[bridge:api] GET .../work/poll -> ${w.status} workId=${rRe(id)} type=${ZCs(data.type)} mode=${ZCs(D)} sessionId=${rRe(data.id)}`), w.data;
      }
      return n(`[bridge:api] GET .../work/poll -> ${w.status} workId=${w.data.id} type=${w.data.data?.type}${w.data.data?.id ? ` sessionId=${w.data.data.id}` : ""}`), n(`[bridge:api] <<< ${z_o(w.data)}`), w.data;
    },
    async acknowledgeWork(r, i, o, s = i) {
      Nb(r, "environmentId"), Nb(i, "workId"), n(`[bridge:api] POST .../work/${s}/ack`);
      let g = await Wt.post(`${e.baseUrl}/v1/environments/${r}/work/${i}/ack`, {}, {
        headers: await u(o),
        timeout: 1e4,
        validateStatus: _ => _ < 500
      });
      A(g.status, g.data, "Acknowledge", g.headers), n(`[bridge:api] POST .../work/${s}/ack -> ${g.status}`);
    },
    async stopWork(r, i, o, force, g = i) {
      Nb(r, "environmentId"), Nb(i, "workId"), n(`[bridge:api] POST .../work/${g}/stop force=${force}`);
      let _ = await Wt.post(`${e.baseUrl}/v1/environments/${r}/work/${i}/stop`, {
        force: force
      }, {
        headers: await u(o),
        timeout: 1e4,
        validateStatus: E => E < 500
      });
      A(_.status, _.data, "StopWork"), n(`[bridge:api] POST .../work/${g}/stop -> ${_.status}`);
    },
    async deregisterEnvironment(r) {
      Nb(r, "environmentId"), n(`[bridge:api] DELETE /v1/environments/bridge/${r}`);
      let i = await T(async (o, s) => Wt.delete(`${e.baseUrl}/v1/environments/bridge/${r}`, {
        headers: await u(o, s),
        timeout: 1e4,
        validateStatus: g => g < 500
      }), "Deregister", "pass_through");
      A(i.status, i.data, "Deregister"), n(`[bridge:api] DELETE /v1/environments/bridge/${r} -> ${i.status}`);
    },
    async markEnvironmentOffline(r, i) {
      Nb(r, "environmentId");
      let o = `/v1/environments/bridge/${r}/offline`;
      n(`[bridge:api] POST ${o}`);
      let s = await Wt.post(`${e.baseUrl}${o}`, void 0, {
        headers: await u(i),
        timeout: 5000,
        validateStatus: g => g < 500
      });
      A(s.status, s.data, "MarkOffline"), n(`[bridge:api] POST ${o} -> ${s.status}`);
    },
    async archiveSession(r) {
      Nb(r, "sessionId");
      let i = e.useCcrV2SessionCrud?.() ? `/v1/code/sessions/${Ld(r)}/archive` : `/v1/sessions/${Jf(r)}/archive`;
      n(`[bridge:api] POST ${i}`);
      let o = await T(async (s, g) => Wt.post(`${e.baseUrl}${i}`, {}, {
        headers: await u(s, g),
        timeout: 1e4,
        validateStatus: _ => _ < 500
      }), "ArchiveSession", "pass_through");
      if (o.status === 409) {
        n(`[bridge:api] POST ${i} -> 409 (already archived)`);
        return;
      }
      A(o.status, o.data, "ArchiveSession"), n(`[bridge:api] POST ${i} -> ${o.status}`);
    },
    async reconnectSession(r, session_id, signal_3) {
      return ao("bridge_session_reconnect", async () => {
        Nb(r, "environmentId"), Nb(session_id, "sessionId"), n(`[bridge:api] POST /v1/environments/${r}/bridge/reconnect session_id=${session_id}`);
        let s = await T(async (g, _) => Wt.post(`${e.baseUrl}/v1/environments/${r}/bridge/reconnect`, {
          session_id: session_id
        }, {
          headers: await u(g, _),
          timeout: 1e4,
          signal: signal_3,
          validateStatus: E => E < 500
        }), "ReconnectSession", "enroll_and_retry");
        A(s.status, s.data, "ReconnectSession"), n(`[bridge:api] POST .../bridge/reconnect -> ${s.status}`);
      }, x);
    },
    async heartbeatWork(r, i, o) {
      Nb(r, "environmentId"), Nb(i, "workId"), n(`[bridge:api] POST .../work/${i}/heartbeat`);
      let s = await Wt.post(`${e.baseUrl}/v1/environments/${r}/work/${i}/heartbeat`, {}, {
        headers: await u(o),
        timeout: 1e4,
        validateStatus: g => g < 500
      });
      return A(s.status, s.data, "Heartbeat"), n(`[bridge:api] POST .../work/${i}/heartbeat -> ${s.status} lease_extended=${s.data.lease_extended} state=${s.data.state}`), s.data;
    }
  };
  function R(r) {
    return r instanceof Error && "status" in r && typeof r.status === "number" ? `http_${r.status}` : x(r);
  }
  h.refuseToolHost = async (r, work_id, code, signal_4) => {
    let g = `[bridge:api] POST /v1/code/sessions/${rRe(r)}/tool_hosts/refuse workId=${rRe(work_id)} code=${code}`;
    try {
      if (Te() !== "firstParty" || St() || !bk("allow_remote_control")) {
        n(`${g} not sent`);
        return;
      }
      await ao("bridge_tool_host_refuse", async () => {
        Nb(r, "sessionId"), n(g);
        let _ = await Wt.post(`${e.baseUrl}/v1/code/sessions/${Ld(r)}/tool_hosts/refuse`, {
          work_id: work_id,
          code: code
        }, {
          headers: {
            ...(await u(v())),
            "anthropic-beta": X1n.header,
            "anthropic-client-feature": "ccr"
          },
          timeout: 5000,
          signal: signal_4,
          maxRedirects: 0,
          validateStatus: E => E < 500
        });
        A(_.status, _.data, "RefuseToolHost"), n(`${g} -> ${_.status}`);
      }, R);
    } catch (error) {
      n(`${g} failed (${R(error)}); not retried`);
    }
  };
  async function k(r) {
    let {
      "anthropic-beta": i,
      ...o
    } = await u(r);
    return {
      ...o,
      "anthropic-client-platform": cb(),
      "anthropic-client-version": e.runnerVersion
    };
  }
  function S(r) {
    let i = r["retry-after"];
    return typeof i === "string" ? y_(i) : void 0;
  }
  return h.sessionsWatch = {
    async mintResumeToken(r, signal_5) {
      let {
        status: status,
        data: data_2,
        headers: headers
      } = await Wt.get(`${e.baseUrl}/v1/code/sessions?limit=1`, {
        headers: await k(r),
        timeout: 1e4,
        signal: signal_5,
        maxRedirects: 0,
        validateStatus: () => !0
      });
      n(`[bridge:api] GET /v1/code/sessions?limit=1 -> ${status}`);
      let resumeToken = data_2 !== null && typeof data_2 === "object" && "resume_token" in data_2 ? data_2.resume_token : void 0;
      return {
        status: status,
        retryAfterMs: S(headers),
        ...(typeof resumeToken === "string" && {
          resumeToken: resumeToken
        })
      };
    },
    async open(r, i, signal_6) {
      let {
        status: status_2,
        data: g,
        headers: headers_2
      } = await Wt.get(`${e.baseUrl}/v1/code/sessions/watch?include_trigger_sessions=true&exclude_tags=-`, {
        headers: {
          ...(await k(r)),
          Accept: "text/event-stream",
          "Last-Event-ID": i
        },
        responseType: "stream",
        timeout: 0,
        signal: signal_6,
        maxRedirects: 0,
        validateStatus: () => !0
      });
      n(`[bridge:api] GET /v1/code/sessions/watch -> ${status_2}`);
      let E = headers_2["content-type"];
      if (status_2 === 200 && typeof E === "string" && E.includes("text/event-stream")) return {
        status: status_2,
        body: g
      };
      return g.destroy(), {
        status: status_2,
        retryAfterMs: S(headers_2)
      };
    }
  }, h;
}
function A(status_3, n, p, y) {
  if (status_3 === 200 || status_3 === 204) return;
  let u = bz(n),
    v = B(n);
  switch (status_3) {
    case 401:
      throw new BridgeFatalError(`${p}: Authentication failed (401)${u ? `: ${u}` : ""}. ${eRe}`, 401, v);
    case 403:
      if (y2t(v)) throw new BridgeFatalError("Remote Control session expired.", 403, v);
      throw new BridgeFatalError(`${p}: Access denied (403)${u ? `: ${u}` : ""}. Check your organization permissions.`, 403, v, AD(n)?.includes("external_poll_sessions"));
    case 404:
      throw new BridgeFatalError(u ?? `${p}: Not found (404). Remote Control may not be available for this organization.`, 404, v);
    case 410:
      throw new BridgeFatalError(u ?? "Remote Control session expired.", 410, v ?? "environment_expired");
    case 429:
      {
        let retryAfterMs = y_(typeof y?.["retry-after"] === "string" ? y["retry-after"] : void 0);
        throw Object.assign(Error(`${p}: Rate limited (429). Polling too frequently.`), retryAfterMs !== void 0 ? {
          status: status_3,
          retryAfterMs: retryAfterMs
        } : {
          status: status_3
        });
      }
    default:
      throw Object.assign(Error(`${p}: Failed with status ${status_3}${u ? `: ${u}` : ""}`), {
        status: status_3
      });
  }
}
function y2t(e) {
  if (!e) return !1;
  return e.includes("expired") || e.includes("lifetime");
}
function X$o(e) {
  return e.suppressible;
}
function x(e) {
  if (e instanceof BridgeFatalError) return e.status === 401 ? "auth_failed" : "http_error";
  if (e instanceof Error) {
    if (e.message === eRe) return "no_token";
    if ("status" in e && typeof e.status === "number") return "http_error";
  }
  return "request_failed";
}
function B(e) {
  if (e && typeof e === "object") {
    if ("error" in e && e.error && typeof e.error === "object" && "type" in e.error && typeof e.error.type === "string") return e.error.type;
  }
  return;
}
var m8n = 3,
  j9s = 20,
  H = 60000,
  I = 3600000,
  U = 900000,
  j = 86400000,
  W = 0.25,
  F = 3600000;
function sGr(e, n = Date.now(), p = Math.random) {
  if (typeof e !== "number" || !Number.isFinite(e) || e * 1000 < F) return;
  let y = e * 1000,
    v = Math.min(Math.max(y / 10, U), j) * (1 + W * p());
  return n + y - v;
}
var W9s = 300000,
  z9s = 3600000,
  G9s = 3,
  h8n = 5;
async function iGr({
  api: api,
  config: config,
  environmentId: p,
  activeSessions: activeSessions,
  attempt: attempt,
  trigger: trigger,
  signal: signal_7
}) {
  if (trigger === "tool_host_advert_changed") t(`[bridge:poll] What this environment advertises changed; re-registering environment ${p} (attempt ${attempt})`);else if (trigger === "proactive") t(`[bridge:poll] Environment secret expires soon; re-registering environment ${p} to renew it (attempt ${attempt})`, {
    level: "info"
  });else t(`[bridge:poll] Poll returned ${trigger === "poll_401" ? 401 : 404}; re-registering environment ${p} (attempt ${attempt}/${m8n})`, {
    level: "warn"
  });
  let h, R;
  try {
    let {
        hostProfile: hostProfile,
        ...i
      } = config,
      hostProfile_2 = await bJs(hostProfile);
    config.hostProfile = hostProfile_2;
    let s = config.getToolHostAdvert?.();
    R = s, h = await api.registerBridgeEnvironment({
      ...i,
      ...(hostProfile_2 && {
        hostProfile: hostProfile_2
      }),
      ...(s && {
        getToolHostAdvert: () => s
      }),
      reuseEnvironmentId: p
    }, signal_7);
  } catch (error) {
    let status_4 = error instanceof Error && error.message === eRe ? 401 : N(error),
      o = status_4 !== void 0;
    if (t(`[bridge:poll] Re-registration of ${p} ${o ? "rejected" : "failed transiently"}: ${d(error)}`, {
      level: o ? "error" : "warn"
    }), !o && R !== void 0 && R.kind !== "unknown" && !C(R, config.registeredToolHostAdvert)) config.registeredToolHostAdvert = "unconfirmed";
    if (signal_7.aborted) return {
      outcome: "transient"
    };
    if (l("tengu_bridge_env_reregister", {
      attempt: attempt,
      outcome: o ? b("register_rejected") : b("register_transient"),
      trigger: f(trigger)
    }), status_4 !== void 0) {
      if (trigger === "tool_host_advert_changed") c("bridge_env_reregister", "advert_register_rejected");else if (trigger === "proactive") c("bridge_env_reregister", "proactive_register_rejected");else m("bridge_env_reregister", "register_rejected");
      return {
        outcome: "fatal",
        reason: "register_rejected",
        status: status_4,
        message: d(error)
      };
    }
    return {
      outcome: "transient",
      retryAfterMs: J$o(error)
    };
  }
  if (h.environment_id !== p) {
    if (t(`[bridge:poll] Re-registration returned ${h.environment_id}, not ${p}; not adopting it`, {
      level: "warn"
    }), l("tengu_bridge_env_reregister", {
      attempt: attempt,
      outcome: b("replaced"),
      trigger: f(trigger)
    }), trigger === "tool_host_advert_changed") c("bridge_env_reregister", "advert_replaced");else if (trigger === "proactive") c("bridge_env_reregister", "proactive_replaced");else m("bridge_env_reregister", "replaced");
    return await api.deregisterEnvironment(h.environment_id).catch(r => t(`[bridge:poll] Failed to delete replacement environment ${h.environment_id}: ${d(r)}`, {
      level: "warn"
    })), {
      outcome: "fatal",
      reason: "replaced"
    };
  }
  aGr(config, R, !0);
  let k = [...activeSessions.keys()];
  if (l("tengu_bridge_env_reregister", {
    attempt: attempt,
    outcome: b("reregistered"),
    active_sessions: k.length,
    trigger: f(trigger)
  }), V("info", "bridge_env_reregistered", {
    attempt: attempt,
    active_sessions: k.length,
    trigger: trigger
  }), trigger === "proactive") return t(`[bridge:poll] Environment ${p} re-registered in place; secret renewed`, {
    level: "info"
  }), {
    outcome: "reregistered",
    environmentSecret: h.environment_secret,
    ...(h.environment_secret_expires_in !== void 0 && {
      environmentSecretExpiresIn: h.environment_secret_expires_in
    }),
    pendingRequeues: []
  };
  t(`[bridge:poll] Environment ${p} re-registered in place; re-queuing ${k.length} session(s)`, {
    level: "info"
  });
  let pendingRequeues = [];
  for (let r of k) {
    if (signal_7.aborted) break;
    if (!activeSessions.has(r)) continue;
    if ((await g8n(api, p, r, signal_7)) !== "done") pendingRequeues.push(r);
  }
  return {
    outcome: "reregistered",
    environmentSecret: h.environment_secret,
    ...(h.environment_secret_expires_in !== void 0 && {
      environmentSecretExpiresIn: h.environment_secret_expires_in
    }),
    pendingRequeues: pendingRequeues
  };
}
async function V9s({
  api: api_2,
  config: config_2,
  environmentId: environmentId,
  activeSessions: activeSessions_2,
  pacing: pacing,
  signal: signal_8
}) {
  let T;
  try {
    let R = config_2.getToolHostAdvert?.();
    if (R === void 0 || R.kind === "unknown") return;
    if (C(R, config_2.registeredToolHostAdvert)) {
      pacing.failures = 0;
      return;
    }
    let k = pacing.notBefore - Date.now();
    if (k > 0 && k <= I) return;
    T = await iGr({
      api: api_2,
      config: config_2,
      environmentId: environmentId,
      activeSessions: activeSessions_2,
      attempt: pacing.failures + 1,
      trigger: "tool_host_advert_changed",
      signal: signal_8
    });
  } catch (error) {
    if (!signal_8.aborted) a(error);
  }
  let h = T?.outcome === "reregistered" ? T : void 0;
  return pacing.failures = h ? 0 : pacing.failures + 1, pacing.notBefore = Date.now() + Math.min(H * 2 ** pacing.failures, I), h;
}
function aGr(e, n, p) {
  if (n === void 0 || n.kind === "unknown" && p) return;
  let registeredToolHostAdvert = e.registeredToolHostAdvert,
    u = n.kind === "advertise" ? {
      kind: "advertise",
      advert: n.advert
    } : {
      kind: "withdraw"
    };
  if (e.registeredToolHostAdvert = u, !C(u, registeredToolHostAdvert ?? {
    kind: "withdraw"
  })) l("tengu_bridge_tool_host_advert", {
    advertised: u.kind === "advertise"
  });
}
async function g8n(e, n, p, y) {
  try {
    return await e.reconnectSession(n, p, y), "done";
  } catch (error) {
    let v = Q$o(error);
    if (t(`[bridge:poll] reconnectSession(${p}) after re-registration ${v ? "rejected" : "failed transiently"}: ${d(error)}`, {
      level: "warn"
    }), v) return "done";
    return y.aborted ? "aborted" : "retry";
  }
}
function C(e, n) {
  if (n === void 0 || n === "unconfirmed") return !1;
  return e.kind === "advertise" && n.kind === "advertise" ? ln(e.advert, n.advert) : e.kind === n.kind;
}
function J$o(e) {
  return e && typeof e === "object" && "retryAfterMs" in e && typeof e.retryAfterMs === "number" ? e.retryAfterMs : void 0;
}
function Q$o(e) {
  return N(e) !== void 0;
}
function N(e) {
  if (e instanceof BridgeFatalError) return e.status;
  if (e && typeof e === "object" && "status" in e && typeof e.status === "number" && e.status >= 400 && e.status < 500 && e.status !== 408 && e.status !== 429) return e.status;
  return;
}
export { BridgeFatalError as aI, Y$o, y2t, X$o, m8n, j9s, sGr, W9s, z9s, G9s, h8n, iGr, V9s, aGr, g8n, J$o, Q$o };