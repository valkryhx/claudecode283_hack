// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  Wt
} from "B:/~BUN/root/chunk-b91sxvrb.js";
import {
  H
} from "B:/~BUN/root/chunk-game8aqv.js";
import {
  R,
  d,
  k,
  K
} from "B:/~BUN/root/chunk-y2g9f85n.js";
import {
  ga,
  J,
  we
} from "B:/~BUN/root/chunk-r5zmhp23.js";
import {
  W
} from "B:/~BUN/root/chunk-ppmmt0c3.js";
import {
  _,
  ee
} from "B:/~BUN/root/chunk-2pp12te6.js";
import {
  qHr
} from "B:/~BUN/root/chunk-15vbkr6z.js";
import {
  P,
  Pa
} from "B:/~BUN/root/chunk-n8cnxns2.js";
import {
  bz
} from "B:/~BUN/root/chunk-5w7xhbnh.js";
import {
  p
} from "B:/~BUN/root/chunk-z6138ats.js";
import {
  g,
  c
} from "B:/~BUN/root/chunk-3z3yrbk4.js";
import {
  x
} from "B:/~BUN/root/chunk-mwfggkjt.js";
import {
  bVo
} from "B:/~BUN/root/chunk-dsgmffrq.js";
import {
  Mc
} from "B:/~BUN/root/chunk-46f9vyk7.js";
import {
  au
} from "B:/~BUN/root/chunk-gq1er5y2.js";
import {
  Q1t,
  lt
} from "B:/~BUN/root/chunk-3mm90xb6.js";
import {
  Xy
} from "B:/~BUN/root/chunk-xqymp2nr.js";
import {
  Dl
} from "B:/~BUN/root/chunk-ebpsjtma.js";
import {
  nRe
} from "B:/~BUN/root/chunk-62khcyrb.js";
import {
  ube
} from "B:/~BUN/root/chunk-pj64ve92.js";
import {
  Tzn,
  _Ro,
  PQi,
  OQi
} from "B:/~BUN/root/chunk-3xdsa4p8.js";
import {
  SC
} from "B:/~BUN/root/chunk-sy1h8mf0.js";
import {
  o,
  E,
  u,
  Be
} from "B:/~BUN/root/chunk-4bfd0jkf.js";
import {
  ro
} from "B:/~BUN/root/chunk-nsneqfcc.js";
import {
  NH,
  Fnt,
  vcn,
  N5,
  SG
} from "B:/~BUN/root/chunk-nxckfnqx.js";
import {
  ui
} from "B:/~BUN/root/chunk-xwsv2hvn.js";
var gn = {
    all: [],
    "no-allow": ["allow"],
    none: Tzn
  },
  Le = 2097152,
  vqn = "CCR_AUTO_MODE_APPLY";

function qIo(e) {
  let n = e.environment_variables ?? {};
  return Object.hasOwn(n, vqn) && n[vqn] === "1"
}

function XKs(e) {
  if (!qIo(e)) return {
    allow: {
      state: "absent"
    },
    environment: {
      state: "absent"
    },
    soft_deny: {
      state: "absent"
    }
  };
  let n = e.environment_variables ?? {};
  return {
    allow: be(n, _Ro.allow),
    environment: be(n, _Ro.environment),
    soft_deny: be(n, _Ro.soft_deny)
  }
}
var tkt = "no-allow";

function JKs(e, n) {
  let r = {
      ...e
    },
    m = [];
  for (let a of gn[n]) {
    let t = e[a],
      i = t.state === "decoded" && Array.isArray(t.value) && t.value.length === 0;
    if (t.state !== "absent" && !i) m.push(a);
    r[a] = {
      state: "absent"
    }
  }
  return {
    carried: r,
    withheld: m
  }
}
var mn = "nothing on this runner needs changing; if an admin of your organization wrote the entry, a line break, some emoji or a blank rule can cause this";

function QKs(e) {
  let n = {};
  for (let s of Tzn) {
    let f = e[s];
    if (f.state !== "absent") n[s] = f.state === "decoded" ? f.value : null
  }
  let {
    rules: r,
    refused: m,
    grantsWithheld: a
  } = PQi(n), t = [], i = {
    refused_entries: 0,
    unreadable_lists: 0
  };
  for (let s of Tzn) {
    let f = e[s],
      l = m[s];
    if (f.state === "absent" || l === void 0) continue;
    if (l === "unreadable") i.unreadable_lists++;
    else i.refused_entries += l;
    t.push(l === "unreadable" ? `ignoring the server's autoMode.${s} list for this session: its ${f.carrier} value ${f.state==="decoded"?"is not an array of strings":`is not valid JSON text, or is longer than ${Le} characters`} (a server-side fault: nothing on this runner needs changing)` : `ignoring ${l} of the entries in the server's autoMode.${s} list (${f.carrier}) for this session: null, blank, or containing a control character, an invisible character or markup reserved for the auto mode classifier's prompt; ${a&&s!=="soft_deny"?"any other entries in the list are not applied either (see below)":"any other entries in the list still apply"} (${mn})`)
  }
  if (a) {
    let s = ["allow", "environment"].filter((f) => e[f].state !== "absent").map((f) => `autoMode.${f}`).join(" or ");
    t.push(`not applying any ${s} entries from the server for this session: part or all of its autoMode.environment or autoMode.soft_deny list was ignored (see above), and without it the ${s} entries could allow more than the server meant. Auto mode still works but may block more actions than usual (nothing on this runner needs changing)`)
  }
  return {
    autoMode: OQi(r),
    statusLines: t,
    grantsWithheld: a,
    refusedCounts: i
  }
}

function be(e, n) {
  let r = Object.hasOwn(e, n) ? e[n] : void 0;
  if (r === void 0 || r === "") return {
    state: "absent"
  };
  if (typeof r !== "string" || r.length > Le) return {
    state: "undecodable",
    carrier: n
  };
  try {
    return {
      state: "decoded",
      carrier: n,
      value: ee(r)
    }
  } catch {
    return {
      state: "undecodable",
      carrier: n
    }
  }
}
class Ee extends Error {
  constructor() {
    super("IssueSessionToken: response holds a tools_host that this runner cannot read");
    this.name = "UnreadableToolsHostError"
  }
}
var _n = p(() => u({
    tool_server_hosting: Be([E(), o().regex(/^\d+$/).transform(Number)]).pipe(E().int().min(1)),
    api_base_url: o().min(1),
    cwd: o().nullish().transform((e) => e || void 0)
  })),
  mrt = {
    ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
    PACKAGE_URL: "@anthropic-ai/claude-code",
    README_URL: "https://code.claude.com/docs/en/overview",
    VERSION: "2.1.319",
    FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
    BUILD_TIME: "2026-11-05T18:14:18Z",
    GIT_SHA: "fbdd7e02e8530e4c2ade8cc67d30104e53d2c8f2",
    HOOKS_WORKER_URL: "B:/~BUN/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js",
    DD_SOURCEMAP_GROUP: "win32"
  }.VERSION.replace(/^v/, "").split(/[-+]/)[0],
  bn = {
    all: "SERVER_AUTO_MODE_LISTS_ALL",
    "no-allow": "SERVER_AUTO_MODE_LISTS_NO_ALLOW",
    none: "SERVER_AUTO_MODE_LISTS_NONE"
  },
  wn = /^[a-zA-Z0-9_-]+$/,
  nUr = 1e4,
  Eqn = 15000,
  Me = 256,
  Sn = 65536;

function De(e) {
  return typeof e === "string" && e.length <= Me && wn.test(e)
}

function mne(e, n) {
  if (!De(e)) throw Error(`Invalid ${n}: contains unsafe characters or exceeds ${Me} characters`);
  return e
}

function Se(e) {
  return {
    "User-Agent": ui(),
    Authorization: `Bearer ${e}`,
    "Content-Type": "application/json",
    "anthropic-version": "2023-06-01",
    "x-self-hosted-runner-version": mrt
  }
}

function re(e) {
  return {
    "User-Agent": ui(),
    Authorization: `Bearer ${e}`,
    "Content-Type": "application/json",
    "anthropic-version": "2023-06-01",
    "x-self-hosted-runner-version": mrt
  }
}

function se(e) {
  return {
    Authorization: `Bearer ${e}`,
    "Content-Type": "application/json",
    "anthropic-version": "2023-06-01"
  }
}

function Ce(e) {
  return de(e, "type")
}

function de(e, n) {
  if (e !== null && typeof e === "object" && "error" in e && e.error !== null && typeof e.error === "object") {
    let r = Reflect.get(e.error, n);
    return typeof r === "string" ? r : void 0
  }
  return
}

function En(e) {
  let n = de(e, "reason");
  return ube(n) ? n : void 0
}

function yn(e) {
  return de(e, "resource")
}
var kn = "self_hosted_runners_disabled_by_org",
  Rn = "dispatch_token_revoked";

function z(e, n, r, m = !1) {
  if (e >= 200 && e < 300) return;
  let a = bz(n),
    t = Ce(n),
    i = {
      errorType: ube(t) ? t : void 0,
      errorReason: En(n),
      serverMessage: a
    };
  switch (e) {
    case 401:
      throw Object.assign(Error(`${r}: Authentication failed (401)${a?`: ${a}`:""}. Check your credentials.`), {
        isAuthFailure: !0,
        httpStatus: e,
        ...i
      });
    case 403: {
      let s = yn(n),
        f = s === kn,
        l = de(n, "sub_reason");
      throw Object.assign(Error(`${r}: Access denied (403)${a?`: ${a}`:""}. ${f?"The organization is not enabled for self-hosted environments.":"Token may be revoked."}`), {
        isAuthFailure: !0,
        ...m && {
          refusedByProxy: !0
        },
        ...f && {
          isSelfHostedDisabledByOrg: !0
        },
        ...s === Rn && {
          isDispatchTokenRevoked: !0,
          errorSubReason: ube(l) ? l : void 0
        },
        httpStatus: e
      })
    }
    case 404:
      throw Object.assign(Error(a ?? `${r}: Not found (404). The resource may not exist.`), {
        isNotFound: !0,
        httpStatus: e,
        errorType: Ce(n),
        resourceType: de(n, "resource_type")
      });
    case 409:
      if (i.errorType === "session_not_active") throw Object.assign(Error("Session not active (409): the session was archived or deleted."), {
        isEpochMismatch: !0,
        isSessionNotActive: !0,
        httpStatus: e,
        ...i
      });
      throw Object.assign(Error(`${r}: Epoch conflict (409)${a?`: ${a}`:""}. Another runner has taken over this session.`), {
        isEpochMismatch: !0,
        httpStatus: e,
        ...i
      });
    case 429:
      throw Object.assign(Error(`${r}: Rate limited (429). Polling too frequently.`), {
        httpStatus: e
      });
    default:
      throw Object.assign(Error(`${r}: Failed with status ${e}${a?`: ${a}`:""}`), {
        httpStatus: e,
        ...i
      })
  }
}

function dK(e) {
  if (e !== null && typeof e === "object") {
    let n = e;
    if (typeof n.httpStatus === "number") return n.httpStatus;
    if (typeof n.response?.status === "number") return n.response.status
  }
  return
}

function _un(e) {
  let n = e !== null && typeof e === "object" ? e : {};
  return {
    errorType: "errorType" in n && typeof n.errorType === "string" ? n.errorType : void 0,
    errorReason: "errorReason" in n && typeof n.errorReason === "string" ? n.errorReason : void 0,
    serverMessage: "serverMessage" in n && typeof n.serverMessage === "string" ? n.serverMessage : void 0
  }
}

function Qae(e) {
  if (e !== null && typeof e === "object") {
    let r = e;
    if (r.name === "AbortError" || r.code === "ERR_CANCELED") return !1
  }
  if (e instanceof Ee) return !1;
  let n = dK(e);
  return n === void 0 || n === 429 || n >= 500
}
var vn = [500, 1000, 2000],
  Tn = new Set(["ECONNRESET", "ECONNREFUSED", "EPIPE", "ERR_SOCKET_CLOSED", "ENETUNREACH", "EHOSTUNREACH", "EAI_AGAIN"]);
async function ZKs({
  release: e,
  sessionId: n,
  onStatus: r,
  stop: m,
  waitsMs: a = vn
}) {
  for (let [t, i] of a.entries()) try {
    return await e()
  } catch (s) {
    if (!Wt.isAxiosError(s) || s.response !== void 0 || s.code === void 0 || !Tn.has(s.code) || m.aborted) throw s;
    if (r(`[runner:session] ${n} ReleaseSession got no answer (${s.code}) on try ${t+1} of ${a.length+1}; trying again in ${i} ms`), await J(i, m), m.aborted) throw s
  }
  return e()
}
var rUr = ["transport", "timeout", "5xx", "429", "4xx"];

function wWt(e) {
  if (e !== null && typeof e === "object") {
    let r = e.code;
    if (r === "ECONNABORTED" || r === "ETIMEDOUT") return "timeout"
  }
  let n = dK(e);
  if (n === void 0) return "transport";
  if (n >= 500) return "5xx";
  if (n === 429) return "429";
  return "4xx"
}

function Tqn() {
  return {
    transport: 0,
    timeout: 0,
    "5xx": 0,
    "429": 0,
    "4xx": 0
  }
}

function Cqn(e) {
  function n(t) {
    e.onDebug?.(t)
  }
  let r = 0,
    m = 30,
    a = {
      "x-self-hosted-runner-capabilities": e.capabilities.join(",") || null
    };
  return {
    async registerRunner(t = {}) {
      let {
        clientLabel: i,
        lockToAccountId: s,
        useAnthropicGitProxy: f,
        serverAutoModeLists: l
      } = t;
      n("[runner:api] POST /v1/code/runners/self-hosted/runners/register");
      let b = {
        runner_version: mrt,
        capabilities: e.capabilities,
        use_anthropic_git_proxy: f ?? !1,
        server_auto_mode_lists: bn[l ?? tkt]
      };
      if (i) b.client_label = i;
      if (s) b.lock_to_account_id = s;
      let w = await Wt.post(`${e.baseUrl}/v1/code/runners/self-hosted/runners/register`, b, {
        headers: Se(e.poolSecret),
        timeout: 15000,
        validateStatus: (S) => S < 500
      });
      return z(w.status, w.data, "RegisterRunner"), mne(w.data.runner_id, "runner_id"), n(`[runner:api] RegisterRunner -> ${w.status} runner_id=${w.data.runner_id}`), w.data
    },
    async pollSpawnHints(t, i) {
      let s = await Wt.post(`${e.baseUrl}/v1/code/runners/self-hosted/spawn-hints/poll`, t, {
        headers: Se(e.poolSecret),
        timeout: 30000,
        signal: i,
        validateStatus: (S) => S < 500
      });
      z(s.status, s.data, "PollSpawnHints");
      let f = typeof s.headers?.date === "string" ? s.headers.date : null,
        l = (S) => ({
          ...S,
          session_uuid: S.session_uuid ?? "",
          attempt: S.attempt ?? 0,
          work_order_jwt: S.work_order_jwt ?? "",
          sources: S.sources ?? []
        }),
        b = s.data.slots,
        w = {
          hints: (s.data.hints ?? []).map(l),
          warm_hints: (s.data.warm_hints ?? []).map(l),
          pending_count: s.data.pending_count ?? 0,
          backing_off_count: s.data.backing_off_count ?? 0,
          circuit_broken_count: s.data.circuit_broken_count ?? 0,
          pool_pending_session_count: s.data.pool_pending_session_count ?? 0,
          pool_active_session_count: s.data.pool_active_session_count ?? 0,
          ...typeof b === "number" && Number.isInteger(b) && b >= 1 && {
            slots: b
          },
          server_date: f
        };
      return n(`[runner:api] PollSpawnHints -> ${s.status} hints=${w.hints.length} warm=${w.warm_hints.length} pending=${w.pending_count} backing_off=${w.backing_off_count} circuit_broken=${w.circuit_broken_count} slots=${w.slots??"-"}`), w
    },
    async nackSpawnHint(t, i) {
      n(`[runner:api] POST /v1/code/runners/self-hosted/spawn-hints/nack session=${t.session_uuid} attempt=${t.attempt} retryable=${t.retryable}${t.failure_kind?` cause=${t.failure_kind}`:""}`);
      let s = t.error.length > 512 ? t.error.slice(0, 512) : t.error,
        f = await Wt.post(`${e.baseUrl}/v1/code/runners/self-hosted/spawn-hints/nack`, {
          ...t,
          error: s
        }, {
          headers: Se(e.poolSecret),
          timeout: Eqn,
          signal: i,
          validateStatus: (l) => l < 500
        });
      z(f.status, f.data, "NackSpawnHint"), n(`[runner:api] NackSpawnHint -> ${f.status}`)
    },
    async pollWork(t, i, s, f, l) {
      mne(i, "runnerId");
      let b = r;
      r = 0;
      let w = await Wt.post(`${e.baseUrl}/v1/code/runners/self-hosted/runners/${i}/poll`, {
        available_capacity: s,
        ...l !== void 0 && {
          wake_source: l
        }
      }, {
        headers: re(t),
        timeout: nUr,
        signal: f,
        validateStatus: (v) => v < 500
      });
      z(w.status, w.data, "PollWork");
      let S = w.data;
      if (typeof S !== "object" || S === null || Array.isArray(S)) throw Error("PollWork: response body is not a JSON object (an intercepting proxy may have answered) \u2014 rejecting the malformed poll response");
      let A = w.data.assignment_ids;
      if (A !== void 0 && A !== null && !Array.isArray(A)) throw Error("PollWork: response assignment_ids is not an array \u2014 rejecting the malformed poll response");
      if (Array.isArray(A) && !A.every(De)) throw Error("PollWork: response assignment_ids contains a malformed session id \u2014 rejecting the malformed poll response");
      let I = w.data.assignment_ids ?? [];
      if (I.length === 0) {
        if (r = b + 1, r === 1 || r % m === 0) n(`[runner:api] PollWork -> ${w.status} (no work, ${r} consecutive empty polls)`)
      } else n(`[runner:api] PollWork -> ${w.status} assignments=${I.length}`);
      let M = w.data.lease_expires_at;
      return {
        assignment_ids: I,
        lease_expires_at: typeof M === "string" ? M : void 0,
        session_assignments: Array.isArray(w.data.session_assignments) ? w.data.session_assignments : []
      }
    },
    async issueSessionToken(t, i, s) {
      mne(i, "sessionId");
      let f = `/v1/code/runners/self-hosted/sessions/${encodeURIComponent(i)}/token`;
      n(`[runner:api] POST ${f}`);
      let l = await Wt.post(`${e.baseUrl}${f}`, {}, {
        headers: re(t),
        timeout: 15000,
        signal: s,
        validateStatus: (A) => A < 500
      });
      if (z(l.status, l.data, "IssueSessionToken"), !l.data.session_token) throw Error("IssueSessionToken: response missing session_token");
      n(`[runner:api] IssueSessionToken -> ${l.status}`);
      let {
        session_token: b,
        tools_host: w
      } = l.data;
      if (w === void 0 || w === null) return {
        session_token: b
      };
      let S = _n().safeParse(w);
      if (!S.success) throw new Ee;
      return {
        session_token: b,
        tools_host: S.data
      }
    },
    async reportSessionFailure(t, i, s, f, l) {
      mne(i, "sessionId"), n(`[runner:api] POST /v1/code/runners/self-hosted/sessions/${i}/report-failure reason=${s}${f?` kind=${f}`:""}${l?` cause=${l}`:""}`);
      let b = await Wt.post(`${e.baseUrl}/v1/code/runners/self-hosted/sessions/${i}/report-failure`, {
        reason: s,
        ...f && {
          setup_failure_kind: f
        },
        ...l && {
          failure_kind: l
        }
      }, {
        headers: re(t),
        timeout: 15000,
        validateStatus: (w) => w < 500
      });
      return z(b.status, b.data, "ReportSessionFailure"), n(`[runner:api] ReportSessionFailure -> ${b.status} excluded_count=${b.data.excluded_count} stuck=${b.data.stuck}`), b.data
    },
    async releaseSession(t, i) {
      mne(i, "sessionId"), n(`[runner:api] POST /v1/code/runners/self-hosted/sessions/${i}/release`);
      let s = await Wt.post(`${e.baseUrl}/v1/code/runners/self-hosted/sessions/${i}/release`, {}, {
        headers: re(t),
        timeout: 15000,
        validateStatus: (l) => l < 500
      });
      z(s.status, s.data, "ReleaseSession");
      let f = s.data.released ?? !0;
      return n(`[runner:api] ReleaseSession -> ${s.status} released=${f}`), {
        released: f
      }
    },
    async deregisterRunner(t, i = {}) {
      n(`[runner:api] POST /v1/code/runners/self-hosted/deregister reason=${i.reason??""}` + (i.drain_hold ? ` drain_hold=${i.drain_hold.outcome} held_ms=${i.drain_hold.held_ms} busy_at_release=${i.drain_hold.busy_session_ids_at_release.length}` : ""));
      let s = await Wt.post(`${e.baseUrl}/v1/code/runners/self-hosted/deregister`, {
        ...i.reason && {
          reason: i.reason
        },
        ...i.drain_hold && {
          drain_hold: i.drain_hold
        }
      }, {
        headers: re(t),
        timeout: 1e4,
        validateStatus: (f) => f < 500
      });
      z(s.status, s.data, "DeregisterRunner"), n(`[runner:api] DeregisterRunner -> ${s.status}`)
    },
    async refreshToken(t) {
      n("[runner:api] POST /v1/code/auth/refresh");
      let i = await Wt.post(`${e.baseUrl}/v1/code/auth/refresh`, {}, {
        headers: re(t),
        timeout: 15000,
        validateStatus: (s) => s < 500
      });
      if (z(i.status, i.data, "RefreshToken", i.status === 403 && nRe((s) => i.headers[s]) === "nonorigin_other"), !i.data.token) throw Error("RefreshToken: response missing token");
      return n(`[runner:api] RefreshToken -> ${i.status}`), i.data
    },
    async getSessionRemoteConfig(t, i, s, f) {
      mne(t, "sessionId"), n(`[runner:api] GET /v1/code/sessions/${t}/remote`);
      let l = await Wt.get(`${e.baseUrl}/v1/code/sessions/${t}/remote`, {
        headers: {
          ...f?.headers,
          ...se(i),
          "User-Agent": ui(),
          ...a
        },
        ...e.usesAgentProxyStandalone && {
          params: {
            uses_agent_proxy_standalone: !0
          }
        },
        timeout: f?.timeoutMs ?? 15000,
        signal: s,
        validateStatus: (w) => w < 500,
        ...f?.beforeParsing && {
          maxContentLength: f.beforeParsing.mostBytes,
          responseType: "text",
          transformResponse: (w, S, A) => {
            if (A !== void 0 && A >= 200 && A < 300) f.beforeParsing?.admit(w);
            else if (w.length > Sn) return w;
            try {
              return ee(w)
            } catch {
              return w
            }
          }
        }
      });
      z(l.status, l.data, "GetSessionRemoteConfig");
      let b = l.data;
      return {
        ...b,
        sources: b.sources ?? [],
        push_targets: b.push_targets ?? [],
        claude_code_args: b.claude_code_args ?? {},
        environment_variables: b.environment_variables ?? {}
      }
    },
    async registerWorker(t, i, s, f) {
      mne(i, "sessionId"), n(`[runner:api] POST ${t}/v1/code/sessions/${i}/worker/register`);
      let l = await Wt.post(`${t}/v1/code/sessions/${i}/worker/register`, {
        session_id: i
      }, {
        headers: se(s),
        timeout: 30000,
        signal: f,
        validateStatus: (w) => w < 500
      });
      z(l.status, l.data, "RegisterWorker");
      let b = parseInt(String(l.data.worker_epoch), 10);
      if (isNaN(b)) throw Error(`RegisterWorker: invalid worker_epoch in response: ${l.data.worker_epoch}`);
      return n(`[runner:api] RegisterWorker -> ${l.status} worker_epoch=${b}`), b
    },
    async postWorkerEvents(t, i, s, f, l, b) {
      mne(i, "sessionId"), n(`[runner:api] POST ${t}/v1/code/sessions/${i}/worker/events (${l.length} ${P(l.length,"event")})`);
      let w = await Wt.post(`${t}/v1/code/sessions/${i}/worker/events`, {
        worker_epoch: f,
        events: l.map((S) => ({
          payload: S
        }))
      }, {
        headers: se(s),
        timeout: 15000,
        signal: b,
        validateStatus: (S) => S < 500
      });
      z(w.status, w.data, "PostWorkerEvents"), n(`[runner:api] PostWorkerEvents -> ${w.status}`)
    },
    async updateSessionWorkerState(t, i, s, f, l, b) {
      mne(i, "sessionId"), n(`[runner:api] PUT ${t}/v1/code/sessions/${i}/worker`);
      let w = await Wt.put(`${t}/v1/code/sessions/${i}/worker`, {
        worker_epoch: f,
        ...typeof l === "string" && {
          worker_status: l
        },
        ...typeof l === "object" && {
          connection_status: l.connectionStatus
        }
      }, {
        headers: se(s),
        timeout: 15000,
        signal: b,
        validateStatus: (S) => S < 500
      });
      z(w.status, w.data, "UpdateSessionWorkerState"), n(`[runner:api] UpdateSessionWorkerState -> ${w.status}`)
    },
    async heartbeat(t, i, s, f, l) {
      mne(i, "sessionId");
      let b = await Wt.post(`${t}/v1/code/sessions/${i}/worker/heartbeat`, {
        worker_epoch: f
      }, {
        headers: se(s),
        timeout: 1e4,
        signal: l,
        validateStatus: (w) => w < 500
      });
      z(b.status, b.data, "Heartbeat")
    },
    async forwardDiagnostics(t, i, s, f, l) {
      if (mne(i, "sessionId"), l.length === 0) return;
      n(`[runner:api] POST ${t}/v1/code/sessions/${i}/worker/diagnostics (${l.length} lines)`);
      let b = await Wt.post(`${t}/v1/code/sessions/${i}/worker/diagnostics`, {
        worker_epoch: f,
        lines: l
      }, {
        headers: se(s),
        timeout: 30000,
        validateStatus: (w) => w < 500
      });
      z(b.status, b.data, "ForwardDiagnostics"), n(`[runner:api] ForwardDiagnostics -> ${b.status}`)
    }
  }
}
import {
  createServer as Pn
} from "http";
var nPe = "unknown",
  YIo = /^[A-Za-z0-9_.-]{1,64}$/;

function nkt(e) {
  if (!e || e === "unknown" || !YIo.test(e) || e.startsWith("-") || /^\.{1,2}$/.test(e)) return;
  return e
}

function kWt(e) {
  return Array.from(e.slice(0, 128)).map((n) => /[A-Za-z0-9_.-]/.test(n) ? n : `\\u{${n.codePointAt(0).toString(16)}}`).join("")
}
var ce = [1, 2.5, 5, 10, 20, 40, 80, 160, 320, 640, 1280];

function eqs() {
  return {
    buckets: ce.map(() => 0),
    count: 0,
    sum: 0
  }
}

function tqs(e, n) {
  e.sum += n, e.count += 1;
  for (let r = 0; r < ce.length; r++)
    if (n <= ce[r]) e.buckets[r]++
}

function hne(e) {
  return e.replace(/\\/g, "\\\\").replace(/"/g, "\\\"").replace(/\n/g, "\\n")
}

function He(e) {
  return e.replace(/[^a-zA-Z0-9_]/g, "_").replace(/^[0-9]/, "_$&")
}
var Ue = "claude_code_self_hosted_runner";

function $n(e, n = Date.now()) {
  let r = e.lastPollAt > 0 ? (n - e.lastPollAt) / 1000 : 0,
    m = `runner_id="${hne(e.runnerId)}",version="${hne(e.version)}",client_label="${hne(e.clientLabel)}"`,
    a = Ue,
    t = "";
  t += `# HELP ${a}_info Self-hosted runner identity (info-style gauge; value is always 1).
`, t += `# TYPE ${a}_info gauge
`, t += `${a}_info{${m}} 1
`, t += `# HELP ${a}_capacity Max concurrent sessions this runner accepts (--capacity).
`, t += `# TYPE ${a}_capacity gauge
`, t += `${a}_capacity ${e.capacity}
`, t += `# HELP ${a}_active_sessions Sessions currently being handled by this runner.
`, t += `# TYPE ${a}_active_sessions gauge
`, t += `${a}_active_sessions ${e.activeSessions}
`;
  for (let [s, f] of [
      ["sessions_started_total", e.sessionsStarted],
      ["sessions_completed_total", e.sessionsCompleted],
      ["sessions_failed_total", e.sessionsFailed],
      ["sessions_interrupted_total", e.sessionsInterrupted]
    ]) {
    t += `# HELP ${a}_${s} ${s==="sessions_started_total"?"Session child processes spawned over the runner's lifetime. One increment per child spawn; a session that is re-spawned (runner restart, re-assignment) counts again. NOT comparable to the orchestrator's spawn_hooks_total (which counts orchestrator spawn-runner hook runs, including warm hints).":s==="sessions_completed_total"?"Session child processes that ended cleanly over the runner's lifetime: child exited 0, the server closed the session (archive/delete), or the runner released the slot as a clean handoff (idle release, startup timeout, retire / max-session-age release, server deassign). Drain/SIGTERM and the max-lifetime hard-cap kill are NOT counted (those increment sessions_interrupted_total instead).":s==="sessions_failed_total"?"Session child processes that exited with a non-zero code over the runner's lifetime (crash, OOM, spawn error). Does NOT include idle-release or a server deassign the poll loop observed first (those count as completed); a deassign the child notices first via its epoch-409 exit still lands here.":"Session child processes that were terminated for a non-session-outcome reason over its lifetime (drain/SIGTERM, max-lifetime hard-cap kill, released=false backstop, or an external signal). Watchdog and external-signal kills are additionally reported to the server as session failures. Closes the accounting: started - (completed + failed + interrupted) equals the number of session children currently running."}
`, t += `# TYPE ${a}_${s} counter
`;
    for (let [b, w] of f) t += `${a}_${s}{client_platform="${hne(b)}"} ${w}
`
  }
  if (t += `# HELP ${a}_locked_account Present (value 1) once the runner is locked to an account; absent while fungible.
`, t += `# TYPE ${a}_locked_account gauge
`, e.lockedAccountEmail !== null) t += `${a}_locked_account{email="${hne(e.lockedAccountEmail)}"} 1
`;
  t += `# HELP ${a}_last_poll_age_seconds Seconds since the last successful pollWork return.
`, t += `# TYPE ${a}_last_poll_age_seconds gauge
`, t += `${a}_last_poll_age_seconds ${r}
`, t += `# HELP ${a}_poll_errors_total PollWork request failures by error kind (transport=no HTTP response; timeout=client deadline; 5xx/429/4xx by status). All five series present from process start so rate() works and absent() means process-down.
`, t += `# TYPE ${a}_poll_errors_total counter
`;
  for (let s of rUr) t += `${a}_poll_errors_total{error_kind="${s}"} ${e.pollErrors[s]}
`;
  t += `# HELP ${a}_initializing_sessions Sessions currently in the init phase (handleSession entry to child system/init).
`, t += `# TYPE ${a}_initializing_sessions gauge
`, t += `${a}_initializing_sessions ${e.initializingSessions}
`, t += `# HELP ${a}_session_init_errors_total Sessions that exited as failed before the child reached init (checkout hook / git prep / token issue / pre-init child crash).
`, t += `# TYPE ${a}_session_init_errors_total counter
`, t += `${a}_session_init_errors_total ${e.sessionInitErrors}
`, t += `# HELP ${a}_session_init_duration_seconds Wall-clock seconds from session assignment to child init (successful inits only).
`, t += `# TYPE ${a}_session_init_duration_seconds histogram
`;
  let i = e.sessionInitDurations;
  for (let s = 0; s < ce.length; s++) t += `${a}_session_init_duration_seconds_bucket{le="${ce[s]}"} ${i.buckets[s]}
`;
  t += `${a}_session_init_duration_seconds_bucket{le="+Inf"} ${i.count}
`, t += `${a}_session_init_duration_seconds_sum ${i.sum}
`, t += `${a}_session_init_duration_seconds_count ${i.count}
`, t += `# HELP ${a}_session_start_hook_errors_total SessionStart hooks that reported an error outcome (nonzero exit, validation/spawn failure, or HTTP/MCP error; one per failing hook execution).
`, t += `# TYPE ${a}_session_start_hook_errors_total counter
`, t += `${a}_session_start_hook_errors_total ${e.sessionStartHookErrors}
`, t += `# HELP ${a}_session_idle_seconds Seconds since the session went idle (turn-end or awaiting-action); 0 while a turn is running, background work is pending, or the session is initializing. One series per active session; disappears at session end.
`, t += `# TYPE ${a}_session_idle_seconds gauge
`;
  for (let [s, f] of e.sessionIdle) {
    let l = f === null ? 0 : ((n - f) / 1000).toFixed(3),
      b = e.sessionClientPlatform.get(s) ?? nPe;
    t += `${a}_session_idle_seconds{session_id="${hne(s)}",client_platform="${hne(b)}"} ${l}
`
  }
  t += `# HELP ${a}_session_turn_state The turn state the server reports for a session whose tools this runner hosts, in the state label; the value is always 1. busy: a worker holds the session. waiting: a question is waiting for the user. rest: no worker, and the last one reported idle. lost: no worker, and the last one did not report idle, or none has started.
`, t += `# TYPE ${a}_session_turn_state gauge
`;
  for (let [s, f] of e.sessionTurnState) {
    let l = e.sessionClientPlatform.get(s) ?? nPe;
    t += `${a}_session_turn_state{session_id="${hne(s)}",client_platform="${hne(l)}",state="${f}"} 1
`
  }
  for (let [s, f] of e.childMetrics ?? []) {
    let l = f.help.replace(/\\/g, "\\\\").replace(/\n/g, "\\n");
    t += `# HELP ${s} ${l}
`, t += `# TYPE ${s} ${f.type}
`;
    for (let [b, w] of f.points) t += `${s}${b} ${w}
`
  }
  return t
}

function An(e, n) {
  let r = e.childMetrics ??= new Map,
    m = n;
  for (let a of m.resourceMetrics ?? []) {
    let t = xe(a.resource?.attributes, "session.id"),
      i = xe(a.resource?.attributes, "client.platform");
    for (let s of a.scopeMetrics ?? [])
      for (let f of s.metrics ?? []) {
        if (typeof f.name !== "string" || f.name === "") continue;
        let l = He(f.name),
          b, w, S;
        if (f.sum) b = f.sum.isMonotonic ? "counter" : "gauge", w = f.sum.isMonotonic && !l.endsWith("_total") ? `${l}_total` : l, S = f.sum.dataPoints;
        else if (f.gauge) b = "gauge", w = l, S = f.gauge.dataPoints;
        else continue;
        if (w.startsWith(Ue)) continue;
        let A = r.get(w) ?? {
          help: f.description ?? "",
          type: b,
          points: new Map
        };
        for (let I of S ?? []) {
          let M = [],
            v = new Set;
          if (t !== void 0) M.push(["session_id", t]), v.add("session_id");
          if (i !== void 0) M.push(["client_platform", i]), v.add("client_platform");
          for (let j of I.attributes ?? []) {
            if (typeof j.key !== "string") continue;
            let X = Ge(j.value);
            if (X === void 0) continue;
            let V = He(j.key);
            if (V === "" || v.has(V)) continue;
            v.add(V), M.push([V, X])
          }
          let N = M.length > 0 ? `{${M.map(([j,X])=>`${j}="${hne(X)}"`).join(",")}}` : "",
            B = typeof I.asDouble === "number" ? I.asDouble : I.asInt !== void 0 ? Number(I.asInt) : void 0;
          if (B === void 0 || !Number.isFinite(B)) continue;
          A.points.set(N, B)
        }
        r.set(w, A)
      }
  }
}

function nqs(e, n) {
  let r = e.childMetrics;
  if (r === void 0) return;
  let m = `session_id="${hne(n)}"`;
  for (let [a, t] of r) {
    for (let i of t.points.keys())
      if (i.includes(m)) t.points.delete(i);
    if (t.points.size === 0) r.delete(a)
  }
}

function xe(e, n) {
  for (let r of e ?? [])
    if (r.key === n) return Ge(r.value);
  return
}

function Ge(e) {
  if (e === void 0) return;
  if (typeof e.stringValue === "string") return e.stringValue;
  if (e.intValue !== void 0) return String(e.intValue);
  if (typeof e.doubleValue === "number") return String(e.doubleValue);
  if (typeof e.boolValue === "boolean") return String(e.boolValue);
  return
}

function rqs(e, n, r, m, a) {
  let t = Pn((s, f) => {
    if (s.method === "POST" && s.url === "/v1/metrics") {
      if (!On(s)) {
        f.writeHead(403).end();
        return
      }
      let A = [],
        I = 0,
        M = !1;
      s.on("data", (v) => {
        if (I += v.length, I > 1048576) {
          M = !0, f.writeHead(413).end(), s.destroy();
          return
        }
        A.push(v)
      }), s.on("end", () => {
        if (M) return;
        try {
          An(n, ee(Buffer.concat(A).toString("utf8"))), f.writeHead(200).end()
        } catch (v) {
          r(`[runner:warn] /v1/metrics rejected malformed body: ${d(v)}`), f.writeHead(400).end()
        }
      });
      return
    }
    let l = void 0;
    if (s.method === "GET" && s.url === "/metrics") {
      let A = $n(n);
      f.writeHead(200, {
        "Content-Type": "text/plain; version=0.0.4; charset=utf-8",
        "Content-Length": Buffer.byteLength(A)
      }), f.end(A);
      return
    }
    if (s.method !== "GET" || s.url !== "/healthz") {
      f.writeHead(404, {
        "Content-Type": "text/plain"
      }), f.end(`not found
`);
      return
    }
    let b = Date.now(),
      w = n.lastPollAt > 0 ? b - n.lastPollAt : null,
      S = _({
        status: "ok",
        runner_id: n.runnerId,
        active_sessions: n.activeSessions,
        last_poll_at: n.lastPollAt > 0 ? new Date(n.lastPollAt).toISOString() : null,
        last_poll_age_ms: w
      });
    if (f.writeHead(200, {
        "Content-Type": "application/json",
        "Content-Length": Buffer.byteLength(S)
      }), f.end(S), n.claimVisibility !== void 0) {
      for (let A of n.claimVisibility.values())
        if (A.visibleMs === void 0) A.visibleMs = Math.max(0, b - A.pickedUpAt)
    }
  });
  t.unref();
  let i = !1;
  return t.on("error", (s) => {
    if (!t.listening) n.listeningOn = void 0;
    if (!i) i = !0, c("self_hosted_healthz_listen", "listen_failed");
    r(`[runner:warn] /healthz listener failed on port ${e}: ${s.message} \u2014 continuing without health endpoint`)
  }), t.listen(e, () => {
    if (n.listeningOn = t.address()?.port ?? e, !i) i = !0, g("self_hosted_healthz_listen");
    r(`[runner:health] /healthz and /metrics listening on :${e}`)
  }), t
}

function On(e) {
  let n = e.socket.remoteAddress;
  return n === "127.0.0.1" || n === "::1" || n === "::ffff:127.0.0.1"
}
import {
  constants as Fe,
  fstatSync as ye,
  openSync as Nn,
  writeSync as In
} from "fs";
import {
  isatty as Ln
} from "tty";
var Cn = 262144,
  ke = 5,
  Ke = 100,
  We = 500;

function Mn(e) {
  let n = 0;
  for (let r = e.indexOf(10); r !== -1; r = e.indexOf(10, r + 1)) n++;
  return n
}
var [Re, ve, ze] = [0, 1, 2], Ye = 65536, Dn = 5000, je = ["EPIPE", "ECONNRESET", "ENXIO", "EBADF", "EIO", "ENOSPC", "EINVAL"], Hn = `
const { writeSync } = require('fs')
let fd, shared, errnos
onmessage = ({ data }) => {
  if (shared === undefined) {
    ;({ fd, shared, errnos } = data)
    Atomics.store(shared, 3, 1)
    return
  }
  let written = 0
  let errno = 0
  while (written < data.length) {
    // Whole lines of at most PIPE_BUF bytes in one write(2), so that another writer to the same
    // pipe cannot land inside one of them, as with one line per write before; a longer line alone.
    let end = Math.min(written + 4096, data.length)
    if (end < data.length) {
      const lastNewline = data.lastIndexOf(10, end - 1)
      end = lastNewline >= written ? lastNewline + 1 : data.indexOf(10, written) + 1 || data.length
    }
    try {
      written += writeSync(fd, data, written, end - written)
    } catch (e) {
      // The description may be non-blocking: in the runner, code that reads process.stderr at
      // import (the debug package) makes stderr so, and process.stdout where no terminal is
      // named in the environment; another holder may too. Then try again in 5 ms.
      if (e.code === 'EAGAIN') {
        Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, 5)
      } else if (e.code !== 'EINTR') {
        errno = errnos.indexOf(e.code) + 1 || errnos.length + 1
        break
      }
    }
  }
  Atomics.store(shared, 1, written)
  Atomics.store(shared, 2, errno)
  Atomics.store(shared, 0, ${ze})
  Atomics.notify(shared, 0)
  postMessage(0)
}
`, xn = {
  openOwn(e) {
    try {
      if (Ln(e)) {
        let r = bVo(e);
        return r.fd ?? {
          refused: `the terminal could not be opened a second time: ${r.errno??r.reason}`,
          writtenHere: x() === "windows"
        }
      }
      let n = ye(e);
      return {
        refused: n.isSocket() ? "a socket cannot be opened a second time" : "only a terminal, or a pipe on Linux, can be opened a second time",
        writtenHere: n.isFile() || n.isCharacterDevice() || x() === "windows"
      }
    } catch (n) {
      return {
        refused: `it could not be opened a second time: ${k(n)??"unknown"}`,
        writtenHere: x() === "windows"
      }
    }
  },
  sameFile(e, n) {
    try {
      let [r, m] = [ye(e), ye(n)];
      return r.dev === m.dev && r.ino === m.ino && r.rdev === m.rdev
    } catch {
      return !1
    }
  },
  writeSync: (e, n, r) => In(e, n, r),
  writeOnAThread(e, n) {
    let r = new Int32Array(new SharedArrayBuffer(16)),
      m, a, t;
    try {
      let f = URL.createObjectURL(new Blob([Hn], {
        type: "application/javascript"
      }));
      m = new Worker(f), m.unref?.(), m.onmessage = n, m.onerror = () => {
        m = void 0
      }, m.postMessage({
        fd: e,
        shared: r,
        errnos: je
      })
    } catch {
      m = void 0
    }
    let i = (f) => {
      throw Object.assign(Error("the thread did not write the bytes"), {
        code: f
      })
    };
    return {
      write: (f, l) => {
        if (t !== void 0) {
          let w = t;
          t = void 0, i(w)
        }
        let b = Atomics.load(r, 0);
        if (b === ze) {
          let [w, S] = [Atomics.load(r, 1), Atomics.load(r, 2)];
          if (Atomics.store(r, 0, Re), S > 0) {
            let A = je[S - 1] ?? "unknown";
            if (w === 0) i(A);
            t = A
          }
          return w
        }
        if (b === ve && Atomics.load(r, 3) === 0 && a !== void 0 && performance.now() - a > Dn) m?.terminate(), m = void 0, Atomics.store(r, 0, Re);
        if (m === void 0) throw Object.assign(Error("the thread could not be started"), {
          code: "NO_THREAD"
        });
        if (b === Re) Atomics.store(r, 0, ve), a = performance.now(), m.postMessage(Uint8Array.prototype.slice.call(f, l, l + Ye));
        throw Object.assign(Error("the thread has the bytes"), {
          code: "EINPROGRESS"
        })
      },
      wait(f) {
        Atomics.wait(r, 0, ve, f)
      }
    }
  },
  sleep(e) {
    Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, e)
  }
};

function Rqn(e) {
  let n = e.io ?? xn,
    r = e.clock ?? ga,
    m = (h, y) => {
      let T = n.openOwn(h),
        L = typeof T === "number" ? T : h,
        C = typeof T === "number" || T.writtenHere ? void 0 : n.writeOnAThread(h, () => q(D)),
        D = {
          name: y,
          fd: L,
          via: typeof T === "number" ? "a non-blocking descriptor" : T.writtenHere ? "the descriptor this process was given" : "the descriptor this process was given, on a thread of its own",
          because: typeof T === "number" ? void 0 : T.refused,
          write: C?.write ?? ((Q, oe) => n.writeSync(L, Q, oe)),
          waitForTheThread: C?.wait,
          waiting: [],
          waitingBytes: 0,
          gone: !1,
          unannounced: 0,
          retryMs: ke
        };
      return D
    },
    a = n.sameFile(1, 2),
    t = m(1, a ? "stdout and stderr" : "stdout"),
    i = a ? t : m(2, "stderr"),
    s = a ? [t] : [t, i],
    f = {},
    l = new Set,
    b = 0,
    w = !1,
    S = !1;

  function A(h, y) {
    h.unannouncedSinceMs ??= r.monotonicNow(), h.unannounced += y, b += y
  }

  function I(h) {
    if (h.unannounced > 0) {
      let y = h.unannounced;
      h.unannounced = 0;
      let T = Math.max(1, Math.ceil((r.monotonicNow() - (h.unannouncedSinceMs ?? 0)) / 1000)),
        L = e.stamp(`[runner:log] ${y===1?"1 log line":`${y} log lines`} to ${h.name} ${y===1?"was":"were"} dropped over ${T} s: whatever reads ${h.name} was paused or too slow`),
        C = {
          bytes: Buffer.from(L + `
`),
          offset: 0,
          lines: 0,
          announces: y
        },
        D = h.waitForTheThread === void 0 ? void 0 : M(h);
      return D === void 0 ? C : {
        bytes: Buffer.concat([C.bytes, D.bytes]),
        offset: 0,
        lines: D.lines,
        announces: y,
        notice: L
      }
    }
    return M(h)
  }

  function M(h) {
    let y = h.waiting.shift();
    if (y === void 0) return;
    if (h.waitingBytes -= y.bytes.length, h.waitForTheThread === void 0) return {
      bytes: y.bytes,
      offset: 0,
      lines: y.lines,
      announces: 0
    };
    let T = [y],
      L = y.bytes.length;
    while (h.waiting.length > 0 && L + h.waiting[0].bytes.length <= Ye) {
      let C = h.waiting.shift();
      h.waitingBytes -= C.bytes.length, L += C.bytes.length, T.push(C)
    }
    return {
      bytes: T.length === 1 ? y.bytes : Buffer.concat(T.map((C) => C.bytes), L),
      offset: 0,
      lines: T.reduce((C, D) => C + D.lines, 0),
      announces: 0
    }
  }

  function v(h, y) {
    if (y.announces > 0) {
      if (e.onOwnLine?.(y.notice ?? y.bytes.toString().trimEnd()), h.unannounced === 0) h.unannouncedSinceMs = void 0
    }
    h.retryMs = ke
  }

  function N(h, y = "stdout") {
    let T = e.stamp(h);
    if (e.onOwnLine?.(T), !S) te.write(y, T)
  }

  function B(h, y) {
    h.waiting.push(y), h.waitingBytes += y.bytes.length;
    while (h.waitingBytes > Cn && h.waiting.length > 1) {
      let T = h.waiting.shift();
      h.waitingBytes -= T.bytes.length, A(h, T.lines)
    }
  }

  function j(h) {
    h.write = (y, T) => n.writeSync(h.fd, y, T), h.waitForTheThread = void 0, h.via = "the descriptor this process was given", h.because = `${h.because??"it could not be opened a second time"}, and no thread could write to it`, N(`[runner:warn] The thread that writes this process's ${h.name} could not start, or it stopped, so this process writes there itself. If nothing reads ${h.name}, that can hold this process up. Make sure something reads it, such as the journal or a log file.`, h === t ? "stderr" : "stdout")
  }

  function X(h, y, T) {
    let L = !l.has(`${h.name} ${T}`);
    l.add(`${h.name} ${T}`);
    let C = y.offset === 0 ? y : {
      bytes: y.bytes.subarray(y.offset),
      lines: Mn(y.bytes.subarray(y.offset))
    };
    if (!qHr.has(T)) {
      if (f[T] = (f[T] ?? 0) + C.lines, L) N(`[runner:warn] A write to this process's ${h.name} failed (${T}), so some log lines are missing there. This process keeps running. If this error happens again on ${h.name}, it will not be reported.`, h === t ? "stderr" : "stdout");
      return
    }
    h.gone = !0;
    let D = [C, ...h.waiting];
    if (h.waiting = [], h.waitingBytes = 0, h.unannounced = 0, h.unannouncedSinceMs = void 0, N(`[runner:warn] Nobody can read this process's ${h.name} anymore (${T}), so nothing more is written there.` + (h === t && !i.gone ? " Status lines go to stderr from here on." : "")), h === t && !i.gone) {
      for (let Q of D)
        if (Q.lines > 0) B(i, {
          bytes: Q.bytes,
          lines: Q.lines
        });
      q(i)
    }
  }

  function V(h) {
    while (!h.gone) {
      h.head ??= I(h);
      let y = h.head;
      if (y === void 0) return;
      let T = "EAGAIN";
      try {
        let L = h.write(y.bytes, y.offset);
        if (y.offset += L, L > 0) {
          if (y.offset >= y.bytes.length) h.head = void 0, v(h, y);
          continue
        }
      } catch (L) {
        T = k(L) ?? "unknown"
      }
      if (T === "EINTR") continue;
      if (T === "NO_THREAD") {
        j(h);
        continue
      }
      if (T !== "EAGAIN" && T !== "EINPROGRESS") {
        h.head = void 0, X(h, y, T);
        continue
      }
      if (T === "EAGAIN" && y.offset === 0) {
        if (h.head = void 0, h.unannounced += y.announces, y.announces === 0) h.waiting.unshift({
          bytes: y.bytes,
          lines: y.lines
        }), h.waitingBytes += y.bytes.length
      }
      if (!w && !S && h.cancelRetry === void 0) h.cancelRetry = r.setTimeout(() => {
        h.cancelRetry = void 0, q(h)
      }, h.retryMs, {
        unref: !0
      }), h.retryMs = Math.min(h.retryMs * 2, Ke);
      return
    }
  }

  function q(h) {
    if (!w) V(h)
  }

  function ae(h) {
    let y = r.monotonicNow() + h;
    for (;;) {
      for (let D of s) q(D);
      let T = s.some((D) => D.head !== void 0 || D.waiting.length > 0),
        L = y - r.monotonicNow();
      if (!T || L <= 0) return;
      let C = s.find((D) => D.head !== void 0 && D.waitForTheThread !== void 0);
      if (C?.waitForTheThread) C.waitForTheThread(Math.min(L, Ke));
      else n.sleep(Math.min(L, ke))
    }
  }
  let Z = () => {
      S = !0, ae(We)
    },
    te = {
      write(h, y) {
        let T = h === "stdout" ? t : i,
          L = T.gone ? i : T;
        if (w || L.gone) return;
        B(L, {
          bytes: Buffer.from(y + `
`),
          lines: 1
        }), q(L)
      },
      stats: () => ({
        queuedBytes: s.reduce((h, y) => h + y.waitingBytes + (y.head ? y.head.bytes.length - y.head.offset : 0), 0),
        droppedLines: b,
        failedLines: {
          ...f
        }
      }),
      describe: () => "log lines reach " + s.map((h) => `${h.name}${a?" (same place)":""} through ${h.via}` + (h.because === void 0 ? "" : ` (because ${h.because})`)).join("; "),
      close() {
        if (w) return;
        S = !0, ae(We), w = !0, process.off("exit", Z);
        for (let h of s) h.cancelRetry?.()
      }
    };
  return process.on("exit", Z), te
}
import {
  spawn as rn
} from "child_process";
import {
  constants as Vn
} from "fs";
import {
  access as Xn,
  stat as $e
} from "fs/promises";
import {
  join as sn
} from "path";
import {
  readdirSync as Un,
  readFileSync as Ze
} from "fs";
import {
  readFile as Gn
} from "fs/promises";
var Te = 4096,
  Ve = 64;

function qe(e, n) {
  if (!Number.isInteger(e.pid) || e.pid <= 1) return Promise.resolve(void 0);
  let r = x();
  if (r === "linux" || r === "wsl") {
    let m = Bn();
    return Promise.resolve(m && Xe(e, m))
  }
  if (r === "windows") return Promise.resolve(void 0);
  return Wn(n).then((m) => m && Xe(e, m), () => {
    return
  })
}
var fe = 3000;
async function Qe(e, n) {
  let r = [...e.pinned],
    m = new Map,
    a, t = !1,
    i = x(),
    s;
  if (i === "macos") s = zn([process.pid, ...r.map(([l]) => l)], n).then((l) => {
    let b = Fn(l, process.pid, e.pinned);
    if (b === void 0) {
      t = !0;
      return
    }
    a = b.ownPgrp;
    for (let [w, S] of b.proven) m.set(w, S)
  });
  else if (i === "linux" || i === "wsl") a = Kn(), s = Je(r, async ([l, b]) => {
    let w = await Gn(`/proc/${l}/stat`, "utf8").catch(() => {
      return
    });
    if (w !== void 0 && NH(w) === b && !SG(N5(w))) m.set(l, vcn(w))
  });
  else s = Je(r, async ([l, b]) => {
    if (await Xy(l, b) === !0) m.set(l, void 0)
  });
  let f = await we(s.then(() => !0), n).catch(() => {
    return
  });
  return {
    proven: m,
    ownPgrp: a,
    incomplete: t || f !== !0
  }
}

function Fn(e, n, r) {
  let m = e.get(n);
  if (m === void 0) return;
  let a = new Map;
  for (let [t, i] of r) {
    let s = e.get(t);
    if (s !== void 0 && s.token === i) a.set(t, s.pgrp)
  }
  return {
    proven: a,
    ownPgrp: m.pgrp
  }
}
async function oUr(e, n = fe) {
  let {
    proven: r,
    incomplete: m
  } = await Qe(e, n);
  return {
    live: r.size,
    incomplete: m
  }
}
async function Aqn(e, n, r = fe) {
  let {
    proven: m,
    ownPgrp: a,
    incomplete: t
  } = await Qe(e, r), i = new Set;
  if (a !== void 0) {
    let f = new Set;
    for (let l of m.values())
      if (l !== void 0 && l > 1 && l !== e.rootPid && l !== a && l !== process.pid) f.add(l);
    for (let l of f) try {
      process.kill(-l, n), i.add(l)
    } catch {}
  }
  let s = 0;
  for (let [f, l] of m) {
    if (n !== "SIGKILL" && l !== void 0 && i.has(l)) continue;
    try {
      process.kill(f, n), s++
    } catch {}
  }
  return {
    proven: m.size,
    pids: s,
    groups: i.size,
    incomplete: t
  }
}

function Xe(e, n) {
  let r = new Map,
    m = [],
    a;
  for (let l of n.rows) {
    let b = r.get(l.ppid);
    if (b) b.push(l);
    else r.set(l.ppid, [l]);
    if (l.pid === e.pid) a = l;
    else if (l.pgrp === e.pid) m.push(l)
  }
  let t = e.alive ? a !== void 0 && e.token !== void 0 && a.token !== e.token : a !== void 0,
    i = {
      rootPid: e.pid,
      pinned: new Map,
      unpinned: 0,
      truncated: !1,
      degraded: n.degraded,
      rootRecycled: t
    };
  if (t) return i;
  let s = e.alive ? [...m, ...r.get(e.pid) ?? []] : m,
    f = new Set([e.pid]);
  while (s.length > 0) {
    let l = s.shift();
    if (l.pid <= 1 || f.has(l.pid)) continue;
    if (f.size > Te) {
      i.truncated = !0;
      break
    }
    if (f.add(l.pid), l.token === void 0) i.unpinned++;
    else i.pinned.set(l.pid, l.token);
    s.push(...r.get(l.pid) ?? [])
  }
  return i
}

function Bn() {
  let e;
  try {
    e = Un("/proc")
  } catch {
    return
  }
  let n = [];
  for (let r of e) {
    if (!/^\d+$/.test(r)) continue;
    try {
      let m = Ze(`/proc/${r}/stat`, "utf8"),
        a = Fnt(m);
      if (a === void 0 || SG(N5(m))) continue;
      let t = NH(m);
      n.push({
        pid: Number(r),
        ppid: a,
        pgrp: vcn(m),
        token: t !== void 0 && t.length > 0 ? t : void 0
      })
    } catch {}
  }
  return {
    rows: n,
    degraded: !1
  }
}

function Kn() {
  try {
    return vcn(Ze("/proc/self/stat", "utf8"))
  } catch {
    return
  }
}

function en() {
  return {
    USER_TYPE: "external",
    NODE_ENV: "production",
    LC_ALL: "C",
    TZ: "UTC"
  }
}
async function Wn(e) {
  let n = await lt("ps", ["-A", "-o", "pid=", "-o", "ppid=", "-o", "pgid=", "-o", "stat=", "-o", "lstart="], {
      timeout: e,
      env: en(),
      cwd: "/",
      stripFinalNewline: !1
    }),
    r = jn(n.stdout);
  return r.length === 0 ? void 0 : {
    rows: r,
    degraded: n.code !== 0
  }
}

function jn(e) {
  let n = [],
    r = e.slice(0, e.lastIndexOf(`
`) + 1);
  for (let m of r.split(`
`)) {
    let a = /^\s*(\d+)\s+(\d+)\s+(\d+)\s+(\S+)\s+(\S.*?)\s*$/.exec(m),
      t = a?.[4];
    if (a && t !== void 0 && !t.startsWith("Z")) n.push({
      pid: Number(a[1]),
      ppid: Number(a[2]),
      pgrp: Number(a[3]),
      token: a[5]
    })
  }
  return n
}
async function zn(e, n) {
  let r = await lt("ps", ["-o", "pid=", "-o", "pgid=", "-o", "stat=", "-o", "lstart=", "-p", e.join(",")], {
    timeout: n,
    env: en(),
    cwd: "/",
    stripFinalNewline: !1
  });
  return Yn(r.stdout)
}

function Yn(e) {
  let n = new Map,
    r = e.slice(0, e.lastIndexOf(`
`) + 1);
  for (let m of r.split(`
`)) {
    let a = /^\s*(\d+)\s+(\d+)\s+(\S+)\s+(\S.*?)\s*$/.exec(m),
      t = a?.[3],
      i = a?.[4];
    if (a && t !== void 0 && i !== void 0 && !t.startsWith("Z")) n.set(Number(a[1]), {
      pgrp: Number(a[2]),
      token: i
    })
  }
  return n
}
async function Je(e, n) {
  for (let r = 0; r < e.length; r += Ve) await Promise.all(e.slice(r, r + Ve).map(n))
}
var me = 5000;

function ie() {
  return {
    ...process.env,
    SELF_HOSTED_RUNNER_POOL_SECRET: void 0,
    SELF_HOSTED_RUNNER_ENVIRONMENT_SECRET: void 0,
    SELF_HOSTED_RUNNER_PROXY_AUTHORIZATION_COMMAND: void 0,
    SELF_HOSTED_RUNNER_PROXY_AUTHORIZATION_FILE: void 0
  }
}

function bun(e, n = "win32") {
  if (n !== "win32") return;
  switch (e) {
    case "--hooks-dir":
      throw Error("--hooks-dir is not supported on Windows: lifecycle hooks currently require a Linux or macOS host, because they are POSIX executables that the runner spawns directly (no shell, no .cmd/.ps1/.exe resolution). Run the runner on a Linux or macOS host to use hooks, or drop --hooks-dir / SELF_HOSTED_RUNNER_HOOKS_DIR to use the built-in checkout and command behavior. See docs/self-hosted-runners-guide.md \xA7 Lifecycle hooks.");
    case "orchestrator mode":
      throw Error("orchestrator mode is not supported on Windows: it is driven by the spawn-runner lifecycle hook, and lifecycle hooks currently require a Linux or macOS host because they are POSIX executables spawned directly (no shell, no .cmd/.ps1/.exe resolution). Run the orchestrator on a Linux or macOS host; the runners it provisions are unaffected. See docs/self-hosted-runners-guide.md \xA7 Lifecycle hooks.")
  }
}
async function vWt(e, n) {
  if (!e) return null;
  let r = sn(e, n);
  try {
    if (!(await Dl($e(r), me, `stat ${r}`)).isFile()) return null;
    return await Dl(Xn(r, Vn.X_OK), me, `access ${r}`), r
  } catch {
    return null
  }
}
var sUr = [
    ["core.fsmonitor", ""],
    ["core.askPass", ""],
    ["log.showSignature", "false"],
    ["tag.forceSignAnnotated", "false"],
    ["init.templateDir", ""],
    ["gpg.ssh.defaultKeyCommand", ""],
    ["push.gpgSign", "false"],
    ["protocol.ext.allow", "never"],
    ["protocol.fd.allow", "never"],
    ["protocol.git.allow", "never"],
    ["protocol.file.allow", "user"],
    ["merge.verifySignatures", "false"],
    ["core.alternateRefsCommand", Q1t],
    ["core.attributesFile", "/dev/null"]
  ],
  joa = {
    GIT_PROXY_COMMAND: "",
    GIT_ALLOW_PROTOCOL: "https:http:ssh",
    GIT_EDITOR: ":",
    GIT_SEQUENCE_EDITOR: ":",
    GIT_SSH_COMMAND: "ssh"
  };

function oqs(e = ie()) {
  let n;
  for (let [r, m] of Object.entries(joa)) {
    if (e[r] !== void 0) continue;
    n ??= {
      ...e
    }, n[r] = r === "GIT_SSH_COMMAND" && e.GIT_SSH !== void 0 ? `'${e.GIT_SSH.replace(/'/g,"'\\''")}'` : m
  }
  if (Woa(e) === "handedOn") n ??= {
    ...e
  }, n.GIT_ASKPASS = e.SSH_ASKPASS;
  return n ?? e
}

function Woa(e = ie()) {
  if (e.GIT_ASKPASS !== void 0 || Goa("core.askPass", e)) return "own";
  return e.SSH_ASKPASS ? "handedOn" : "none"
}
var Jn = 256;

function zoa(e = ie()) {
  let n = /^\s*\+?(\d+)$/.exec(e.GIT_CONFIG_COUNT ?? ""),
    r = n ? parseInt(n[1], 10) : 0;
  if (!Number.isSafeInteger(r) || r === 0) return {
    count: 0,
    announced: 0
  };
  if (r > Jn) return {
    count: 0,
    discarded: "too-many",
    announced: r
  };
  if (e[`GIT_CONFIG_KEY_${r-1}`] === void 0) return {
    count: 0,
    discarded: "sparse",
    announced: r
  };
  return {
    count: r,
    announced: r
  }
}

function an(e) {
  return zoa(e).count
}

function Goa(e, n = ie()) {
  let r = an(n),
    m = e.toLowerCase();
  for (let a = 0; a < r; a++)
    if ((n[`GIT_CONFIG_KEY_${a}`] ?? "").toLowerCase() === m) return !0;
  return !1
}

function iUr(e, n) {
  let r = [
    ["gpg.program", e.gpg],
    ["gpg.openpgp.program", e.gpg],
    ["gpg.x509.program", e.gpgsm]
  ];
  if (n) r.push(["gpg.ssh.program", e.sshKeygen]);
  return r
}

function un(e, n, r) {
  if (!n?.length) return e;
  let m = an(e),
    a = {
      ...e
    },
    t = n.length;
  for (let i = 0; i < m; i++) delete a[`GIT_CONFIG_KEY_${i}`], delete a[`GIT_CONFIG_VALUE_${i}`];
  for (let i = 0; i < m; i++) {
    let s = e[`GIT_CONFIG_KEY_${i}`],
      f = e[`GIT_CONFIG_VALUE_${i}`];
    if (s !== void 0) a[`GIT_CONFIG_KEY_${t+i}`] = s;
    if (f !== void 0) a[`GIT_CONFIG_VALUE_${t+i}`] = f
  }
  if (n.forEach(([i, s], f) => {
      a[`GIT_CONFIG_KEY_${f}`] = i, a[`GIT_CONFIG_VALUE_${f}`] = s
    }), a.GIT_CONFIG_COUNT = String(t + m), r?.legacyParams) {
    let i = (l) => `'${l.replace(/'/g,"'\\''")}'`,
      s = n.map(([l, b]) => i(`${l}=${b}`)),
      f = [];
    for (let l = 0; l < m; l++) {
      let b = e[`GIT_CONFIG_KEY_${l}`];
      if (b !== void 0) f.push(i(`${b}=${e[`GIT_CONFIG_VALUE_${l}`]??""}`))
    }
    a.GIT_CONFIG_PARAMETERS = [...s, ...f, ...e.GIT_CONFIG_PARAMETERS ? [e.GIT_CONFIG_PARAMETERS] : []].join(" ")
  }
  return a
}

function dn(e, n, r) {
  let m = n?.commandScopeEntries ?? [],
    a = r && m.some(([t]) => t.includes("=")) ? [] : m;
  return [...e ?? [], ...a]
}
var he = 1000,
  nn = 1500,
  Pe = 5000,
  cn = 500,
  Zn = cn + fe,
  qn = 100,
  Ae = "a hook should `exec` or `wait` for its long-running commands, stop a command's child processes too if it stops that command early, and start a daemon with its output redirected: >/dev/null 2>&1";

function Oe(e) {
  return e.signalCode !== null ? `signal ${e.signalCode}` : `status ${e.exitCode}`
}

function tn(e) {
  return `hook exited (${Oe(e)}) but a process it started still holds its output pipes; not waiting for them to close. The runner has not stopped that process, and it may still be running (${Ae})`
}

function ge(e) {
  if (e < 1000) return `${e}ms`;
  if (e % 60000 === 0) return `${e/60000}min`;
  return e % 1000 === 0 ? `${e/1000}s` : `${(e/1000).toFixed(1)}s`
}
class R4e extends R {
  exitCode;
  constructor(e, n, r) {
    super(e, r);
    this.name = "CheckoutHookFailedError", this.exitCode = n
  }
}
class xqn extends R {
  constructor(e) {
    super(e, "checkout hook timed out");
    this.name = "CheckoutHookTimedOutError"
  }
}
async function XIo(e) {
  let r = {
      ...ie(),
      ...e.gitEnvironment?.envOverrides,
      ...!1,
      CLAUDE_RUNNER_SESSION_ID: e.sessionId.replace(/^cse_/, "session_"),
      CLAUDE_RUNNER_SESSION_UUID: SC(e.sessionId),
      CLAUDE_RUNNER_REPO_URL: e.repoUrl,
      CLAUDE_RUNNER_REPO_REF: e.repoRef ?? "",
      CLAUDE_RUNNER_CHECKOUT_PATH: e.checkoutPath,
      CLAUDE_RUNNER_API_BASE_URL: e.apiBaseUrl,
      CLAUDE_RUNNER_GIT_MOUNT_URL: e.gitMountUrl,
      CLAUDE_RUNNER_CLIENT_PLATFORM: nkt(e.clientPlatform),
      CLAUDE_CODE_SESSION_ACCESS_TOKEN: e.sessionAccessToken
    },
    m = (b) => {
      try {
        e.onStatus(b)
      } catch {}
    },
    a = (b) => {
      try {
        e.onDebug(b)
      } catch {}
    };
  m(`[runner:hook] checkout ${Mc(e.repoUrl)} -> ${e.checkoutPath} (via ${e.hookPath})`);
  let t = [],
    i = (b) => {
      try {
        e.onStderrLine?.(b)
      } catch {}
    },
    s = !1,
    f = !1;
  await new Promise((b, w) => {
    let S = rn(e.hookPath, [], {
        cwd: e.cwd,
        env: un(e.gitConfigPins?.length ? oqs(r) : r, dn(e.gitConfigPins, e.gitEnvironment, e.gitConfigLegacyParams), {
          legacyParams: e.gitConfigLegacyParams
        }),
        stdio: ["ignore", "pipe", "pipe"],
        windowsHide: !0,
        ...au("hooks")
      }),
      A = !1,
      I = [],
      M = () => {
        for (let O of I.splice(0)) clearTimeout(O)
      },
      v = "",
      N = "",
      B = (O, G) => {
        let F = O.split(`
`),
          U = F.pop() ?? "";
        for (let Y of F) {
          let ne = Mc(Y);
          if (a(`[runner:hook:checkout] ${ne}`), G) t.push(ne + `
`), i(ne)
        }
        if (G) {
          let Y = t.reduce((ne, le) => ne + le.length, 0);
          while (Y > 4096 && t.length > 1) Y -= t.shift().length
        }
        return U
      };
    S.stdout.on("data", (O) => {
      v += O.toString(), v = B(v, !1)
    }), S.stderr.on("data", (O) => {
      N += O.toString(), N = B(N, !0)
    });
    let j = (O, G) => {
        if (A) return;
        if (A = !0, M(), e.signal?.removeEventListener("abort", oe), G !== void 0) m(`[runner:hook:checkout] ${G}`), S.stdout.destroy(), S.stderr.destroy();
        if (v) a(`[runner:hook:checkout] ${Mc(v)}`);
        if (N) {
          let U = Mc(N);
          a(`[runner:hook:checkout] ${U}`), t.push(U), i(U)
        }
        let F = Pa(t.join(""), 4096);
        if (f) {
          if (F.trim() !== "") {
            let U = Mc(F);
            m(`[runner:hook:checkout] the hook's last output before the time limit: ${U.length>nn?"\u2026":""}${Pa(U,nn).trimEnd().replace(/\s*[\r\n]+\s*/g," | ").replace(/[\p{C}\p{Zl}\p{Zp}]/gu," ")}`)
          }
          w(new xqn(`checkout hook timed out after ${ge(e.timeoutMs??0)} (the runner's --checkout-hook-timeout-min limit)`))
        } else if (s) w(Error("checkout hook aborted"));
        else if (O === 0) b();
        else {
          let Y = `checkout hook failed (exit ${O}): ${F}`;
          w(O === null ? new R(Y, "checkout hook killed by signal") : new R4e(Y, O, `exited with status ${O}`))
        }
      },
      X = !1,
      V = !1,
      q = !1,
      ae = !1,
      Z = () => S.exitCode === null && S.signalCode === null,
      te, h = !1,
      y = async (O, G) => {
        let F = S.pid,
          U = [],
          Y = !1;
        if (F !== void 0 && Z()) {
          let Ie = qe({
            pid: F,
            alive: !0,
            token: void 0
          }, cn);
          te = Promise.all([te, Ie]).then(([_e, pe]) => _e === void 0 || pe === void 0 ? _e ?? pe : {
            ...pe,
            pinned: new Map([..._e.pinned, ...pe.pinned])
          });
          let ue = await Ie;
          if (Y = Z() && S.kill(O), V ||= Y, a(Y ? `[runner:hook:checkout] ${G}, sending ${O} to the hook's process tree (pid=${F})` : `[runner:hook:checkout] ${G}, but the hook process could no longer be sent ${O}; what it started still is, as far as it was listed`), ue === void 0) U.push(`the process table could not be read before ${O}`);
          else {
            if (ue.unpinned > 0) U.push(`${ue.unpinned} could not be identified`);
            if (ue.truncated) U.push(`it had more than ${Te} processes`);
            if (ue.degraded) U.push("`ps` failed part-way")
          }
        }
        let ne = await te;
        if (ne === void 0) {
          if (U.length > 0 && O === "SIGTERM") m(`[runner:hook:checkout] could not read the process table (is /proc mounted? on macOS, is \`ps\` on PATH?), so ${Y?"only the hook process was sent SIGTERM":"nothing was sent SIGTERM"}; programs the hook started, such as git, may still be running and writing to ${e.checkoutPath}`);
          return
        }
        let {
          pids: le,
          incomplete: hn
        } = await Aqn(ne, O);
        if (U.length > 0) m(`[runner:hook:checkout] may not have stopped everything the hook started: ${U.join("; ")}`);
        if (O === "SIGTERM") return;
        if (le > 0) m(`[runner:hook:checkout] ${le} program(s) the hook started were still running ${ge(Pe)} after SIGTERM and were sent SIGKILL`);
        if (hn) m("[runner:hook:checkout] could not check which of the hook's programs were still running; some may be")
      }, T = (O, G) => y(O, G).catch(() => {}), L = (O) => {
        I.push(setTimeout((G, F, U) => G(F, tn(U)), he, j, O, S))
      }, C = () => {
        if (!V && !Z() && !q) {
          ae = !0;
          return
        }
        let O = Z();
        if (O) S.unref();
        j(S.exitCode, O ? "hook process did not exit after SIGTERM and then SIGKILL (it may be stuck on a disk or network mount); abandoning it, and not waiting for its output pipes to close" : h ? `hook exited (${Oe(S)}) but programs it started may still be running, and may still write to ${e.checkoutPath}; giving up on them` : tn(S))
      }, D = () => {
        if (!A) I.push(setTimeout((O) => O(), he, C))
      }, Q = (O) => {
        if (X || A) return;
        if (!Z()) {
          m(`[runner:hook:checkout] ${O}, but the hook has already exited and there is nothing left to stop; still waiting for its output pipes to close, which a process it started may hold, and the slot stays held until then (${Ae})`);
          return
        }
        X = !0, T("SIGTERM", O), I.push(setTimeout((G, F) => void G("SIGKILL", "still running after SIGTERM").then(F), Pe, T, D), setTimeout((G) => G(), Pe + Zn + he, C))
      }, oe = () => {
        s = !0, Q("abort received")
      };
    if (e.signal?.aborted) oe();
    else e.signal?.addEventListener("abort", oe, {
      once: !0
    });
    if (e.timeoutMs !== void 0 && e.timeoutMs > 0) I.push(setTimeout((O) => {
      if (A || s) return;
      if (!Z()) return;
      f = !0, m(`[runner:hook:checkout] timed out after ${ge(O)} (--checkout-hook-timeout-min) \u2014 stopping the hook and failing this session's setup`), Q(`timed out after ${ge(O)}`)
    }, Math.min(e.timeoutMs, 2147483647), e.timeoutMs));
    S.on("error", (O) => {
      if (A) return;
      A = !0, M(), e.signal?.removeEventListener("abort", oe), w(O)
    });
    let fn, Ne = () => fn ??= (async () => {
      while (!A) {
        let O = await te;
        if (O === void 0) return;
        let {
          live: G,
          incomplete: F
        } = await oUr(O);
        if (h = G > 0 || F, !h) return;
        await J(qn)
      }
    })();
    S.on("exit", (O) => {
      Ne().then(() => {
        if (A) return;
        if (V) {
          L(O);
          return
        }
        I.push(setTimeout((G, F, U) => {
          G(`[runner:hook:checkout] hook exited (${Oe(F)}) but a process it started still holds its output pipes. ${U()?"The slot is not freed":F.exitCode===0?"The session does not start":"The hook's failure is not reported"} until that process ends or closes them. The time limit (--checkout-hook-timeout-min) does not end this wait: it stops only a hook that is still running (${Ae})`)
        }, he, m, S, () => s || f))
      })
    }), S.on("close", (O) => {
      if (q = !0, Ne().then(() => j(O)), ae) D()
    })
  });
  let l;
  try {
    l = await Dl($e(e.checkoutPath), me, `stat ${e.checkoutPath}`)
  } catch (b) {
    if (K(b)) throw new R4e(`checkout hook exited 0 but ${e.checkoutPath} does not exist`, 0, "exited 0 but did not create the checkout directory");
    throw b
  }
  if (!l.isDirectory()) throw new R4e(`checkout hook exited 0 but ${e.checkoutPath} is not a directory`, 0, "exited 0 but the checkout path is not a directory");
  if (process.env.CLAUDE_RUNNER_SKIP_GIT_VERIFY !== "1") try {
    await Dl($e(sn(e.checkoutPath, ".git")), me, `stat ${e.checkoutPath}/.git`)
  } catch (b) {
    if (K(b)) throw new R4e(`checkout hook succeeded but ${e.checkoutPath}/.git is missing (for non-git SCMs, set CLAUDE_RUNNER_SKIP_GIT_VERIFY=1 in the runner's environment)`, 0, "exited 0 but left no .git in the checkout directory");
    throw b
  }
}
var on = 2000;
class ln {
  inFlight = 0;
  increment() {
    this.inFlight++
  }
  decrement() {
    this.inFlight--
  }
}
var Qn = new W(() => new ln);

function pn() {
  return Qn.of(H().host)
}

function aUr() {
  return pn().inFlight
}
async function JIo(e) {
  let n = {
    ...ie(),
    ...e.gitEnvironment?.envOverrides,
    CLAUDE_RUNNER_SESSION_ID: e.sessionId.replace(/^cse_/, "session_"),
    CLAUDE_RUNNER_SESSION_UUID: SC(e.sessionId),
    CLAUDE_RUNNER_EXIT_REASON: e.exitReason,
    CLAUDE_RUNNER_DEBUG_LOG_PATH: e.debugLogPath,
    CLAUDE_RUNNER_WORKSPACE_PATHS: e.workspacePaths.join(":"),
    CLAUDE_RUNNER_API_BASE_URL: e.apiBaseUrl,
    CLAUDE_RUNNER_CLIENT_PLATFORM: nkt(e.clientPlatform),
    CLAUDE_CODE_SESSION_ACCESS_TOKEN: e.sessionAccessToken
  };
  e.onStatus(`[runner:hook] post-session hook starting (session exit: ${e.exitReason}, budget ${e.timeoutMs}ms, via ${e.hookPath})`);
  let r = Date.now(),
    m = () => {},
    a = new Promise((v) => {
      m = v
    }),
    t = rn(e.hookPath, [], {
      cwd: e.cwd,
      env: un(e.gitConfigPins?.length ? oqs(n) : n, dn(e.gitConfigPins, e.gitEnvironment, e.gitConfigLegacyParams), {
        legacyParams: e.gitConfigLegacyParams
      }),
      stdio: ["ignore", "pipe", "pipe"],
      windowsHide: !0,
      ...au("hooks"),
      detached: !1
    }),
    i = pn();
  i.increment();
  let s = !1,
    f = !1,
    l = [],
    b = () => {
      if (s) return;
      s = !0, i.decrement();
      for (let v of l) clearTimeout(v);
      m()
    },
    w = (v) => {
      let N = t.pid;
      t.kill(v);
      return
    },
    S = e.timeoutMs > 0 ? e.timeoutMs : 1;
  l.push(setTimeout((v, N, B, j) => {
    if (N.exitCode !== null || N.signalCode !== null) return;
    f = !0, v(`[runner:hook:post-session] timed out after ${B}ms, sending SIGTERM to the hook's process group (pgid=${N.pid})`), j("SIGTERM")
  }, S, e.onDebug, t, S, w), setTimeout((v, N, B) => {
    if (!f) return;
    v(`[runner:hook:post-session] still running after SIGTERM, sending SIGKILL to the hook's process group (pgid=${N.pid})`), B("SIGKILL")
  }, Math.min(S + on, 2147483647), e.onDebug, t, w), setTimeout((v, N, B) => {
    v(`[runner:hook:post-session] resolved without 'close' (${Date.now()-B}ms, grandchild likely holding stdio pipes; ignored)`), N()
  }, Math.min(S + on + 1000, 2147483647), e.onStatus, b, r));
  let A = "",
    I = "",
    M = (v) => {
      let N = v.split(`
`),
        B = N.pop() ?? "";
      for (let j of N) e.onDebug(`[runner:hook:post-session] ${Mc(j)}`);
      return B
    };
  return t.stdout.on("data", (v) => {
    A += v.toString(), A = M(A)
  }), t.stderr.on("data", (v) => {
    I += v.toString(), I = M(I)
  }), t.on("error", (v) => {
    e.onStatus(`[runner:hook:post-session] spawn error (ignored): ${Mc(v instanceof Error?v.message:String(v))}`), b()
  }), t.on("close", (v) => {
    if (A) e.onDebug(`[runner:hook:post-session] ${Mc(A)}`);
    if (I) e.onDebug(`[runner:hook:post-session] ${Mc(I)}`);
    let N = Date.now() - r;
    if (f) e.onStatus(`[runner:hook:post-session] killed after timeout (${N}ms, ignored)`);
    else if (v !== 0) e.onStatus(`[runner:hook:post-session] exited ${v??"via signal"} (${N}ms, ignored)`);
    else e.onStatus(`[runner:hook:post-session] done (exit 0, ${N}ms)`);
    b()
  }), a
}
export {
  vqn,
  qIo,
  XKs,
  tkt,
  JKs,
  QKs,
  mrt,
  nUr,
  Eqn,
  mne,
  dK,
  _un,
  Qae,
  ZKs,
  rUr,
  wWt,
  Tqn,
  Cqn,
  nPe,
  YIo,
  nkt,
  kWt,
  eqs,
  tqs,
  hne,
  nqs,
  rqs,
  Rqn,
  oUr,
  Aqn,
  bun,
  vWt,
  sUr,
  joa,
  oqs,
  Woa,
  zoa,
  Goa,
  iUr,
  R4e,
  xqn,
  XIo,
  aUr,
  JIo
};
