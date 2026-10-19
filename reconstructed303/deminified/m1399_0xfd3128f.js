// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { Ct } from "B:/~BUN/root/chunk-28dw3zbk.js";
import { b, c } from "B:/~BUN/root/chunk-jthpk6wv.js";
import { d } from "B:/~BUN/root/chunk-3aez4b53.js";
import { gLo, jdn } from "B:/~BUN/root/chunk-kad4nq7y.js";
import { Nn } from "B:/~BUN/root/chunk-rpez7z7a.js";
import { i } from "B:/~BUN/root/chunk-1kfn24jp.js";
import { m, p, po } from "B:/~BUN/root/chunk-kzgf20y6.js";
import { Rw } from "B:/~BUN/root/chunk-h9p45fg5.js";
import { Zze } from "B:/~BUN/root/chunk-2zk4vqr8.js";
import { jh, Tu, Dl } from "B:/~BUN/root/chunk-k9zm82w3.js";
import { t } from "B:/~BUN/root/chunk-6za2ez23.js";
import { At, l } from "B:/~BUN/root/chunk-c09hf5e4.js";
import { X } from "B:/~BUN/root/chunk-yrjpmz6e.js";
import { xe } from "B:/~BUN/root/chunk-8pmnanyd.js";
import { ZIr, Lme, DPo, zg, Tx, HH, Xmt } from "B:/~BUN/root/chunk-7ybsx93y.js";
import { jme, qFt } from "B:/~BUN/root/chunk-8d9x5cx1.js";
import { r9o } from "B:/~BUN/root/chunk-pk8nr568.js";
import { hs, kh } from "B:/~BUN/root/chunk-qjf8jcwq.js";
class BridgeFatalError extends Error {
  status;
  errorType;
  suppressible;
  constructor(e, n, f, h = !1) {
    super(e);
    this.name = "BridgeFatalError", this.status = n, this.errorType = f, this.suppressible = h;
  }
}
function Jqr(e) {
  function n(r) {
    e.onDebug?.(r);
  }
  let f = 0,
    h = 100;
  async function u(r) {
    let o = {
        Authorization: `Bearer ${r}`,
        "Content-Type": "application/json",
        "anthropic-version": "2023-06-01",
        "anthropic-beta": gLo.header,
        "x-environment-runner-version": e.runnerVersion,
        "User-Agent": hs()
      },
      a = await e.getTrustedDeviceToken?.();
    if (a) o["X-Trusted-Device-Token"] = a;
    return o;
  }
  function v() {
    let r = e.getAccessToken();
    if (!r) throw Error(jme);
    return r;
  }
  async function w(r, o) {
    let a = v(),
      s = await r(a);
    if (s.status !== 401) return s;
    if (!e.onAuth401) return n(`[bridge:api] ${o}: 401 received, no refresh handler`), s;
    if (n(`[bridge:api] ${o}: 401 received, attempting token refresh`), await e.onAuth401(a)) {
      n(`[bridge:api] ${o}: Token refreshed, retrying request`);
      let _ = v(),
        T = await r(_);
      if (T.status !== 401) return T;
      n(`[bridge:api] ${o}: Retry after refresh also got 401`);
    } else n(`[bridge:api] ${o}: Token refresh failed`);
    return s;
  }
  let E = {
    async registerBridgeEnvironment(r, signal) {
      return po("bridge_environment_register", async () => {
        n(`[bridge:api] POST /v1/environments/bridge bridgeId=${r.bridgeId}`);
        let a,
          s = r.getToolHostAdvert?.() ?? {
            kind: "withdraw"
          };
        switch (s.kind) {
          case "advertise":
            a = {
              tool_host: "2",
              tool_host_cc_version: s.advert.cliVersion,
              tool_host_platform: s.advert.platform
            };
            break;
          case "withdraw":
            if (r.reuseEnvironmentId) a = {
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
            git_repo_url: Zze(r.gitRepoUrl),
            max_sessions: r.maxSessions,
            metadata: {
              worker_type: r.workerType,
              ...(r.machineId != null && {
                machine_id: r.machineId
              }),
              ...a
            },
            ...(r.hostProfile && {
              host: r.hostProfile
            }),
            ...(r.reuseEnvironmentId && {
              environment_id: r.reuseEnvironmentId
            })
          },
          _ = await w(async T => Ct.post(`${e.baseUrl}/v1/environments/bridge`, g, {
            headers: await u(T),
            timeout: 15000,
            signal: signal,
            validateStatus: y => y < 500
          }), "Registration");
        if (_.status === 409 && Xmt(_.data) === qFt) throw new BridgeFatalError(HH(_.data) ?? "This folder is already served by another Claude Code on this device. Stop it first.", 409, qFt);
        return k(_.status, _.data, "Registration", _.headers), n(`[bridge:api] POST /v1/environments/bridge -> ${_.status} environment_id=${_.data.environment_id}`), n(`[bridge:api] >>> ${ZIr({
          ...g,
          ...(g.host && {
            host: {
              tools: g.host.tools.length,
              mcp: g.host.mcp_servers?.length ?? 0
            }
          })
        })}`), n(`[bridge:api] <<< ${ZIr(_.data)}`), _.data;
      }, x);
    },
    async pollForWork(r, o, signal_2, s, g) {
      jh(r, "environmentId");
      let _ = f;
      f = 0;
      let T = {};
      if (s !== void 0) T.reclaim_older_than_ms = s;
      if (g !== void 0) T.poll_interval_ms = g;
      let y = await Ct.get(`${e.baseUrl}/v1/environments/${r}/work/poll`, {
        headers: await u(o),
        params: Object.keys(T).length > 0 ? T : void 0,
        timeout: 1e4,
        signal: signal_2,
        validateStatus: P => P < 500
      });
      if (k(y.status, y.data, "Poll", y.headers), !y.data) {
        if (f = _ + 1, f === 1 || f % h === 0) n(`[bridge:api] GET .../work/poll -> ${y.status} (no work, ${f} consecutive empty polls)`);
        return null;
      }
      let O = y.data.data?.mode;
      if (O != null) {
        let {
          id: id,
          data: data
        } = y.data;
        return n(`[bridge:api] GET .../work/poll -> ${y.status} workId=${Lme(id)} type=${DPo(data.type)} mode=${DPo(O)} sessionId=${Lme(data.id)}`), y.data;
      }
      return n(`[bridge:api] GET .../work/poll -> ${y.status} workId=${y.data.id} type=${y.data.data?.type}${y.data.data?.id ? ` sessionId=${y.data.data.id}` : ""}`), n(`[bridge:api] <<< ${ZIr(y.data)}`), y.data;
    },
    async acknowledgeWork(r, o, a, s = o) {
      jh(r, "environmentId"), jh(o, "workId"), n(`[bridge:api] POST .../work/${s}/ack`);
      let g = await Ct.post(`${e.baseUrl}/v1/environments/${r}/work/${o}/ack`, {}, {
        headers: await u(a),
        timeout: 1e4,
        validateStatus: _ => _ < 500
      });
      k(g.status, g.data, "Acknowledge", g.headers), n(`[bridge:api] POST .../work/${s}/ack -> ${g.status}`);
    },
    async stopWork(r, o, a, force, g = o) {
      jh(r, "environmentId"), jh(o, "workId"), n(`[bridge:api] POST .../work/${g}/stop force=${force}`);
      let _ = await Ct.post(`${e.baseUrl}/v1/environments/${r}/work/${o}/stop`, {
        force: force
      }, {
        headers: await u(a),
        timeout: 1e4,
        validateStatus: T => T < 500
      });
      k(_.status, _.data, "StopWork"), n(`[bridge:api] POST .../work/${g}/stop -> ${_.status}`);
    },
    async deregisterEnvironment(r) {
      jh(r, "environmentId"), n(`[bridge:api] DELETE /v1/environments/bridge/${r}`);
      let o = await w(async a => Ct.delete(`${e.baseUrl}/v1/environments/bridge/${r}`, {
        headers: await u(a),
        timeout: 1e4,
        validateStatus: s => s < 500
      }), "Deregister");
      k(o.status, o.data, "Deregister"), n(`[bridge:api] DELETE /v1/environments/bridge/${r} -> ${o.status}`);
    },
    async markEnvironmentOffline(r, o) {
      jh(r, "environmentId");
      let a = `/v1/environments/bridge/${r}/offline`;
      n(`[bridge:api] POST ${a}`);
      let s = await Ct.post(`${e.baseUrl}${a}`, void 0, {
        headers: await u(o),
        timeout: 5000,
        validateStatus: g => g < 500
      });
      k(s.status, s.data, "MarkOffline"), n(`[bridge:api] POST ${a} -> ${s.status}`);
    },
    async archiveSession(r) {
      jh(r, "sessionId");
      let o = e.useCcrV2SessionCrud?.() ? `/v1/code/sessions/${Dl(r)}/archive` : `/v1/sessions/${Tu(r)}/archive`;
      n(`[bridge:api] POST ${o}`);
      let a = await w(async s => Ct.post(`${e.baseUrl}${o}`, {}, {
        headers: await u(s),
        timeout: 1e4,
        validateStatus: g => g < 500
      }), "ArchiveSession");
      if (a.status === 409) {
        n(`[bridge:api] POST ${o} -> 409 (already archived)`);
        return;
      }
      k(a.status, a.data, "ArchiveSession"), n(`[bridge:api] POST ${o} -> ${a.status}`);
    },
    async reconnectSession(r, session_id, signal_3) {
      return po("bridge_session_reconnect", async () => {
        jh(r, "environmentId"), jh(session_id, "sessionId"), n(`[bridge:api] POST /v1/environments/${r}/bridge/reconnect session_id=${session_id}`);
        let s = await w(async g => Ct.post(`${e.baseUrl}/v1/environments/${r}/bridge/reconnect`, {
          session_id: session_id
        }, {
          headers: await u(g),
          timeout: 1e4,
          signal: signal_3,
          validateStatus: _ => _ < 500
        }), "ReconnectSession");
        k(s.status, s.data, "ReconnectSession"), n(`[bridge:api] POST .../bridge/reconnect -> ${s.status}`);
      }, x);
    },
    async heartbeatWork(r, o, a) {
      jh(r, "environmentId"), jh(o, "workId"), n(`[bridge:api] POST .../work/${o}/heartbeat`);
      let s = await Ct.post(`${e.baseUrl}/v1/environments/${r}/work/${o}/heartbeat`, {}, {
        headers: await u(a),
        timeout: 1e4,
        validateStatus: g => g < 500
      });
      return k(s.status, s.data, "Heartbeat"), n(`[bridge:api] POST .../work/${o}/heartbeat -> ${s.status} lease_extended=${s.data.lease_extended} state=${s.data.state}`), s.data;
    }
  };
  function R(r) {
    return r instanceof Error && "status" in r && typeof r.status === "number" ? `http_${r.status}` : x(r);
  }
  E.refuseToolHost = async (r, work_id, code, signal_4) => {
    let g = `[bridge:api] POST /v1/code/sessions/${Lme(r)}/tool_hosts/refuse workId=${Lme(work_id)} code=${code}`;
    try {
      if (xe() !== "firstParty" || At() || !Rw("allow_remote_control")) {
        n(`${g} not sent`);
        return;
      }
      await po("bridge_tool_host_refuse", async () => {
        jh(r, "sessionId"), n(g);
        let _ = await Ct.post(`${e.baseUrl}/v1/code/sessions/${Dl(r)}/tool_hosts/refuse`, {
          work_id: work_id,
          code: code
        }, {
          headers: {
            ...(await u(v())),
            "anthropic-beta": jdn.header,
            "anthropic-client-feature": "ccr"
          },
          timeout: 5000,
          signal: signal_4,
          maxRedirects: 0,
          validateStatus: T => T < 500
        });
        k(_.status, _.data, "RefuseToolHost"), n(`${g} -> ${_.status}`);
      }, R);
    } catch (error) {
      n(`${g} failed (${R(error)}); not retried`);
    }
  };
  async function A(r) {
    let {
      "anthropic-beta": o,
      ...a
    } = await u(r);
    return {
      ...a,
      "anthropic-client-platform": kh(),
      "anthropic-client-version": e.runnerVersion
    };
  }
  function S(r) {
    let o = r["retry-after"];
    return typeof o === "string" ? zg(o) : void 0;
  }
  return E.sessionsWatch = {
    async mintResumeToken(r, signal_5) {
      let {
        status: status,
        data: data_2,
        headers: headers
      } = await Ct.get(`${e.baseUrl}/v1/code/sessions?limit=1`, {
        headers: await A(r),
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
    async open(r, o, signal_6) {
      let {
        status: status_2,
        data: g,
        headers: headers_2
      } = await Ct.get(`${e.baseUrl}/v1/code/sessions/watch?include_trigger_sessions=true&exclude_tags=-`, {
        headers: {
          ...(await A(r)),
          Accept: "text/event-stream",
          "Last-Event-ID": o
        },
        responseType: "stream",
        timeout: 0,
        signal: signal_6,
        maxRedirects: 0,
        validateStatus: () => !0
      });
      n(`[bridge:api] GET /v1/code/sessions/watch -> ${status_2}`);
      let T = headers_2["content-type"];
      if (status_2 === 200 && typeof T === "string" && T.includes("text/event-stream")) return {
        status: status_2,
        body: g
      };
      return g.destroy(), {
        status: status_2,
        retryAfterMs: S(headers_2)
      };
    }
  }, E;
}
function k(status_3, n, f, h) {
  if (status_3 === 200 || status_3 === 204) return;
  let u = HH(n),
    v = N(n);
  switch (status_3) {
    case 401:
      throw new BridgeFatalError(`${f}: Authentication failed (401)${u ? `: ${u}` : ""}. ${jme}`, 401, v);
    case 403:
      if (gvt(v)) throw new BridgeFatalError("Remote Control session expired.", 403, v);
      throw new BridgeFatalError(`${f}: Access denied (403)${u ? `: ${u}` : ""}. Check your organization permissions.`, 403, v, Tx(n)?.includes("external_poll_sessions"));
    case 404:
      throw new BridgeFatalError(u ?? `${f}: Not found (404). Remote Control may not be available for this organization.`, 404, v);
    case 410:
      throw new BridgeFatalError(u ?? "Remote Control session expired.", 410, v ?? "environment_expired");
    case 429:
      {
        let retryAfterMs = zg(typeof h?.["retry-after"] === "string" ? h["retry-after"] : void 0);
        throw Object.assign(Error(`${f}: Rate limited (429). Polling too frequently.`), retryAfterMs !== void 0 ? {
          status: status_3,
          retryAfterMs: retryAfterMs
        } : {
          status: status_3
        });
      }
    default:
      throw Object.assign(Error(`${f}: Failed with status ${status_3}${u ? `: ${u}` : ""}`), {
        status: status_3
      });
  }
}
function gvt(e) {
  if (!e) return !1;
  return e.includes("expired") || e.includes("lifetime");
}
function Qqr(e) {
  return e.suppressible;
}
function x(e) {
  if (e instanceof BridgeFatalError) return e.status === 401 ? "auth_failed" : "http_error";
  if (e instanceof Error) {
    if (e.message === jme) return "no_token";
    if ("status" in e && typeof e.status === "number") return "http_error";
  }
  return "request_failed";
}
function N(e) {
  if (e && typeof e === "object") {
    if ("error" in e && e.error && typeof e.error === "object" && "type" in e.error && typeof e.error.type === "string") return e.error.type;
  }
  return;
}
var WSn = 3,
  R5o = 20,
  B = 60000,
  D = 3600000,
  H = 900000,
  U = 86400000,
  j = 0.25,
  V = 3600000;
function Mtr(e, n = Date.now(), f = Math.random) {
  if (typeof e !== "number" || !Number.isFinite(e) || e * 1000 < V) return;
  let h = e * 1000,
    v = Math.min(Math.max(h / 10, H), U) * (1 + j * f());
  return n + h - v;
}
var A5o = 300000,
  x5o = 3600000,
  P5o = 3,
  zSn = 5;
async function Dtr({
  api: api,
  config: config,
  environmentId: f,
  activeSessions: activeSessions,
  attempt: attempt,
  trigger: trigger,
  signal: signal_7
}) {
  if (trigger === "tool_host_advert_changed") t(`[bridge:poll] What this environment advertises changed; re-registering environment ${f} (attempt ${attempt})`);else if (trigger === "proactive") t(`[bridge:poll] Environment secret expires soon; re-registering environment ${f} to renew it (attempt ${attempt})`, {
    level: "info"
  });else t(`[bridge:poll] Poll returned ${trigger === "poll_401" ? 401 : 404}; re-registering environment ${f} (attempt ${attempt}/${WSn})`, {
    level: "warn"
  });
  let E, R;
  try {
    let {
        hostProfile: hostProfile,
        ...o
      } = config,
      hostProfile_2 = await r9o(hostProfile);
    config.hostProfile = hostProfile_2;
    let s = config.getToolHostAdvert?.();
    R = s, E = await api.registerBridgeEnvironment({
      ...o,
      ...(hostProfile_2 && {
        hostProfile: hostProfile_2
      }),
      ...(s && {
        getToolHostAdvert: () => s
      }),
      reuseEnvironmentId: f
    }, signal_7);
  } catch (error) {
    let status_4 = error instanceof Error && error.message === jme ? 401 : I(error),
      a = status_4 !== void 0;
    if (t(`[bridge:poll] Re-registration of ${f} ${a ? "rejected" : "failed transiently"}: ${d(error)}`, {
      level: a ? "error" : "warn"
    }), !a && R !== void 0 && R.kind !== "unknown" && !C(R, config.registeredToolHostAdvert)) config.registeredToolHostAdvert = "unconfirmed";
    if (signal_7.aborted) return {
      outcome: "transient"
    };
    if (i("tengu_bridge_env_reregister", {
      attempt: attempt,
      outcome: a ? b("register_rejected") : b("register_transient"),
      trigger: c(trigger)
    }), status_4 !== void 0) {
      if (trigger === "tool_host_advert_changed") p("bridge_env_reregister", "advert_register_rejected");else if (trigger === "proactive") p("bridge_env_reregister", "proactive_register_rejected");else m("bridge_env_reregister", "register_rejected");
      return {
        outcome: "fatal",
        reason: "register_rejected",
        status: status_4,
        message: d(error)
      };
    }
    return {
      outcome: "transient",
      retryAfterMs: Zqr(error)
    };
  }
  if (E.environment_id !== f) {
    if (t(`[bridge:poll] Re-registration returned ${E.environment_id}, not ${f}; not adopting it`, {
      level: "warn"
    }), i("tengu_bridge_env_reregister", {
      attempt: attempt,
      outcome: b("replaced"),
      trigger: c(trigger)
    }), trigger === "tool_host_advert_changed") p("bridge_env_reregister", "advert_replaced");else if (trigger === "proactive") p("bridge_env_reregister", "proactive_replaced");else m("bridge_env_reregister", "replaced");
    return await api.deregisterEnvironment(E.environment_id).catch(r => t(`[bridge:poll] Failed to delete replacement environment ${E.environment_id}: ${d(r)}`, {
      level: "warn"
    })), {
      outcome: "fatal",
      reason: "replaced"
    };
  }
  Ltr(config, R, !0);
  let A = [...activeSessions.keys()];
  if (i("tengu_bridge_env_reregister", {
    attempt: attempt,
    outcome: b("reregistered"),
    active_sessions: A.length,
    trigger: c(trigger)
  }), X("info", "bridge_env_reregistered", {
    attempt: attempt,
    active_sessions: A.length,
    trigger: trigger
  }), trigger === "proactive") return t(`[bridge:poll] Environment ${f} re-registered in place; secret renewed`, {
    level: "info"
  }), {
    outcome: "reregistered",
    environmentSecret: E.environment_secret,
    ...(E.environment_secret_expires_in !== void 0 && {
      environmentSecretExpiresIn: E.environment_secret_expires_in
    }),
    pendingRequeues: []
  };
  t(`[bridge:poll] Environment ${f} re-registered in place; re-queuing ${A.length} session(s)`, {
    level: "info"
  });
  let pendingRequeues = [];
  for (let r of A) {
    if (signal_7.aborted) break;
    if (!activeSessions.has(r)) continue;
    if ((await GSn(api, f, r, signal_7)) !== "done") pendingRequeues.push(r);
  }
  return {
    outcome: "reregistered",
    environmentSecret: E.environment_secret,
    ...(E.environment_secret_expires_in !== void 0 && {
      environmentSecretExpiresIn: E.environment_secret_expires_in
    }),
    pendingRequeues: pendingRequeues
  };
}
async function O5o({
  api: api_2,
  config: config_2,
  environmentId: environmentId,
  activeSessions: activeSessions_2,
  pacing: pacing,
  signal: signal_8
}) {
  let w;
  try {
    let R = config_2.getToolHostAdvert?.();
    if (R === void 0 || R.kind === "unknown") return;
    if (C(R, config_2.registeredToolHostAdvert)) {
      pacing.failures = 0;
      return;
    }
    let A = pacing.notBefore - Date.now();
    if (A > 0 && A <= D) return;
    w = await Dtr({
      api: api_2,
      config: config_2,
      environmentId: environmentId,
      activeSessions: activeSessions_2,
      attempt: pacing.failures + 1,
      trigger: "tool_host_advert_changed",
      signal: signal_8
    });
  } catch (error) {
    if (!signal_8.aborted) l(error);
  }
  let E = w?.outcome === "reregistered" ? w : void 0;
  return pacing.failures = E ? 0 : pacing.failures + 1, pacing.notBefore = Date.now() + Math.min(B * 2 ** pacing.failures, D), E;
}
function Ltr(e, n, f) {
  if (n === void 0 || n.kind === "unknown" && f) return;
  let registeredToolHostAdvert = e.registeredToolHostAdvert,
    u = n.kind === "advertise" ? {
      kind: "advertise",
      advert: n.advert
    } : {
      kind: "withdraw"
    };
  if (e.registeredToolHostAdvert = u, !C(u, registeredToolHostAdvert ?? {
    kind: "withdraw"
  })) i("tengu_bridge_tool_host_advert", {
    advertised: u.kind === "advertise"
  });
}
async function GSn(e, n, f, h) {
  try {
    return await e.reconnectSession(n, f, h), "done";
  } catch (error) {
    let v = eKr(error);
    if (t(`[bridge:poll] reconnectSession(${f}) after re-registration ${v ? "rejected" : "failed transiently"}: ${d(error)}`, {
      level: "warn"
    }), v) return "done";
    return h.aborted ? "aborted" : "retry";
  }
}
function C(e, n) {
  if (n === void 0 || n === "unconfirmed") return !1;
  return e.kind === "advertise" && n.kind === "advertise" ? Nn(e.advert, n.advert) : e.kind === n.kind;
}
function Zqr(e) {
  return e && typeof e === "object" && "retryAfterMs" in e && typeof e.retryAfterMs === "number" ? e.retryAfterMs : void 0;
}
function eKr(e) {
  return I(e) !== void 0;
}
function I(e) {
  if (e instanceof BridgeFatalError) return e.status;
  if (e && typeof e === "object" && "status" in e && typeof e.status === "number" && e.status >= 400 && e.status < 500 && e.status !== 408 && e.status !== 429) return e.status;
  return;
}
export { BridgeFatalError as jA, Jqr, gvt, Qqr, WSn, R5o, Mtr, A5o, x5o, P5o, zSn, Dtr, O5o, Ltr, GSn, Zqr, eKr };