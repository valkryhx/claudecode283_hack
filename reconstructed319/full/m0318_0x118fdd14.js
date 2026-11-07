// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  Pe
} from "B:/~BUN/root/chunk-vz9zea4j.js";
import {
  woa,
  H,
  z,
  p4e,
  uGs,
  y$e,
  ye,
  Xr,
  w0,
  q,
  $H
} from "B:/~BUN/root/chunk-game8aqv.js";
import {
  d,
  tr,
  x0,
  Ai
} from "B:/~BUN/root/chunk-y2g9f85n.js";
import {
  we
} from "B:/~BUN/root/chunk-r5zmhp23.js";
import {
  W
} from "B:/~BUN/root/chunk-ppmmt0c3.js";
import {
  p
} from "B:/~BUN/root/chunk-z6138ats.js";
import {
  HPr,
  Rz,
  Ef,
  Rt,
  hn,
  vR,
  dr,
  ER,
  n8i,
  xA,
  pp,
  b1n,
  dH
} from "B:/~BUN/root/chunk-1ks9vs37.js";
import {
  t,
  ee
} from "B:/~BUN/root/chunk-2pp12te6.js";
import {
  i
} from "B:/~BUN/root/chunk-j6pt0v41.js";
import {
  a
} from "B:/~BUN/root/chunk-xrwdh0g4.js";
import {
  Te,
  hFs
} from "B:/~BUN/root/chunk-8f4z6bdn.js";
import {
  od,
  Jh
} from "B:/~BUN/root/chunk-1s0yt4vj.js";
import {
  yf
} from "B:/~BUN/root/chunk-65j2302z.js";
import {
  RNr
} from "B:/~BUN/root/chunk-sy1h8mf0.js";
import {
  Ct
} from "B:/~BUN/root/chunk-thn0wk2x.js";
import {
  jxo,
  dae
} from "B:/~BUN/root/chunk-1g25msn4.js";
import {
  vQe,
  ngt
} from "B:/~BUN/root/chunk-jv4ech2n.js";
import {
  tbe,
  wNe
} from "B:/~BUN/root/chunk-xfqs9tac.js";
import {
  ge,
  vr,
  Ft
} from "B:/~BUN/root/chunk-b3kw6jpx.js";
import {
  zd
} from "B:/~BUN/root/chunk-79595s9y.js";
import {
  kqe,
  sta,
  gN
} from "B:/~BUN/root/chunk-q15wjdnk.js";
import {
  Ro
} from "B:/~BUN/root/chunk-143z690c.js";
import {
  po
} from "B:/~BUN/root/chunk-67erjrg5.js";
import {
  Oe
} from "B:/~BUN/root/chunk-4qfwb3rf.js";
var y = Oe(od(), 1),
  Z = Oe(Jh(), 1);
var oe = p(() => Ft({
  sub: ge().optional().catch(void 0),
  email: ge().optional().catch(void 0),
  groups: vr(ge()).optional().catch(void 0)
}).passthrough());

function L(e) {
  let n = e.indexOf("."),
    r = e.indexOf(".", n + 1);
  if (n < 0 || r < 0) return null;
  try {
    let s = oe().safeParse(ee(Buffer.from(e.slice(n + 1, r), "base64url").toString("utf8")));
    return s.success ? s.data : null
  } catch {
    return null
  }
}

function cAr(e) {
  return w0(e) ? L(e.jwt)?.sub || void 0 : void 0
}
var b = Object.freeze({}),
  ie = new W(() => ({
    jwt: void 0,
    attrs: b
  }));

function a_o() {
  let e = Xr(),
    n = w0(e) ? e.jwt : void 0,
    r = ie.of(H().host);
  if (n === r.jwt) return r.attrs;
  if (r.jwt = n, !n) return r.attrs = b;
  let s = L(n);
  if (!s) return r.attrs = b;
  let o = {
    "identity.source": "gateway-oidc"
  };
  if (s.sub) o["user.id"] = s.sub;
  if (s.email) o["user.email"] = s.email;
  if (s.groups && s.groups.length > 0) o["user.groups"] = s.groups.join(",");
  return r.attrs = Object.freeze(o)
}
var se = new Set(["pro", "max", "team", "enterprise"]),
  ue = new Map([
    ["team_tier_1", "premium"],
    ["team_bendep_nonprofit_premium", "premium"],
    ["team_labs_premium", "premium"],
    ["enterprise_tier_1", "premium"],
    ["enterprise_bendep_premium", "premium"],
    ["team_standard", "standard"],
    ["team_bendep_nonprofit_standard", "standard"],
    ["team_labs_standard", "standard"],
    ["enterprise_standard", "standard"],
    ["enterprise_nonprofit", "standard"],
    ["enterprise_higher_ed", "standard"],
    ["enterprise_usage_based", "usage_based"],
    ["enterprise_usage_based_chat", "usage_based"],
    ["enterprise_hipaa_chat", "usage_based"],
    ["enterprise_hipaa_chat_and_code", "usage_based"],
    ["enterprise_lite", "other"],
    ["enterprise_bendep_global_access", "other"]
  ]);

function U() {
  let e = {
      "anthropic.provider": Te()
    },
    n = hFs();
  if (n !== void 0) e["anthropic.custom_base_url"] = n;
  if (!Rt()) return e;
  let r = dr();
  if (r && se.has(r)) e["anthropic.plan"] = r;
  let s = vR(),
    o = s ? s.seatTier : ER() ? hn()?.seatTier : void 0,
    u = o ? ue.get(o) : void 0;
  if (u) e["anthropic.seat_type"] = u;
  return e
}
var ce = {
    OTEL_METRICS_INCLUDE_SESSION_ID: !0,
    OTEL_METRICS_INCLUDE_VERSION: !1,
    OTEL_METRICS_INCLUDE_ACCOUNT_UUID: !0,
    OTEL_METRICS_INCLUDE_ENTRYPOINT: !1,
    OTEL_METRICS_INCLUDE_RESOURCE_ATTRIBUTES: !0,
    OTEL_METRICS_INCLUDE_REPOSITORY: !1
  },
  A = "vcs.repository.url.full",
  I = "vcs.repository.name",
  O = "vcs.owner.name",
  v = "vcs.provider.name",
  de = "vcs.ref.head.revision",
  ae = "vcs.ref.head.name",
  le = "vcs.ref.head.type",
  pe = [A, O, I, v],
  fe = "gitea.com",
  me = /^ssh:\/\/[^/?#]*:7999(?=[/?#]|$)/i;

function T(e) {
  let n = ce[e],
    r = process.env[e];
  if (r === void 0) return n;
  return Pe(r)
}

function M(e) {
  for (let n = 0; n < e.length; n++) {
    let r = e.charCodeAt(n);
    if (r < 33 || r === 44 || r === 59 || r === 92 || r > 126) return !1
  }
  return !0
}
var N = 255,
  F = po((e) => {
    if (!e) return {};
    let n = {};
    try {
      for (let r of e.split(",")) {
        let [s, o, ...u] = r.split("=");
        if (s === void 0 || o === void 0 || u.length > 0) continue;
        let c = s.trim(),
          l = o.trim().split(/^"|"$/).join("");
        if (c.length === 0 || c.length > N || !M(c)) throw Error("invalid resource attribute key");
        if (l.length > N || !M(l)) throw Error("invalid resource attribute value");
        n[c] = decodeURIComponent(l)
      }
    } catch {
      return {}
    }
    return n
  });

function Gnn() {
  let e = dH(),
    n = z(),
    r = a_o(),
    s = Object.keys(r).length > 0,
    o = {},
    u = F(i.OTEL_RESOURCE_ATTRIBUTES);
  if (T("OTEL_METRICS_INCLUDE_RESOURCE_ATTRIBUTES"))
    for (let [f, g] of Object.entries(u)) {
      if (s && (f.startsWith("user.") || f.startsWith("identity."))) continue;
      o[f] = g
    }
  if (o["user.id"] = e, T("OTEL_METRICS_INCLUDE_SESSION_ID")) {
    if (o["session.id"] = n, i.CLAUDE_CODE_REMOTE_SESSION_ID) o["ccr.session.id"] = i.CLAUDE_CODE_REMOTE_SESSION_ID
  }
  if (T("OTEL_METRICS_INCLUDE_VERSION")) o["app.version"] = {
    ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
    PACKAGE_URL: "@anthropic-ai/claude-code",
    README_URL: "https://code.claude.com/docs/en/overview",
    VERSION: "2.1.319",
    FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
    BUILD_TIME: "2026-11-05T18:14:18Z",
    GIT_SHA: "fbdd7e02e8530e4c2ade8cc67d30104e53d2c8f2",
    HOOKS_WORKER_URL: "B:/~BUN/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js",
    DD_SOURCEMAP_GROUP: "win32"
  }.VERSION;
  if (T("OTEL_METRICS_INCLUDE_ENTRYPOINT")) {
    let f = yf();
    if (f) o["app.entrypoint"] = f
  }
  if (T("OTEL_METRICS_INCLUDE_REPOSITORY")) {
    let f = u[A] === void 0 ? j().attributes : void 0;
    for (let g of pe) {
      let m = u[g] ?? f?.[g];
      if (m) o[g] = m
    }
  }
  let c = vR() ?? hn() ?? Se();
  if (c) {
    let f = c.organizationUuid,
      g = !q() ? c.emailAddress : vQe() ? i.CLAUDE_CODE_USER_EMAIL : void 0,
      m = c.accountUuid;
    if (f) o["organization.id"] = f;
    if (g) o["user.email"] = g;
    if (m && T("OTEL_METRICS_INCLUDE_ACCOUNT_UUID")) {
      o["user.account_uuid"] = m;
      let _ = i.CLAUDE_CODE_ACCOUNT_TAGGED_ID || RNr("user", m);
      if (_) o["user.account_id"] = _
    }
  }
  if (!q() || vQe()) Object.assign(o, U());
  Object.assign(o, r);
  let l = q() ? n8i : xA.terminal;
  if (l) o["terminal.type"] = l;
  return o
}
var _e = new W(() => ({
  settled: void 0,
  attributes: void 0
}));

function j() {
  let e = _e.of(H().host);
  if (e.settled === void 0 && !Ct()) e.settled = jxo().then((n) => {
    e.attributes = n ? Ee(n) : void 0
  }).catch(a);
  return e
}

function Ee(e) {
  let n = e.search(/[?#]/);
  if (n >= 0 && e.includes("@", n)) return;
  let r = dae((n >= 0 ? e.slice(0, n) : e).replace(/\/+$/, ""));
  if (!r) return;
  let [s = "", ...o] = r.split("/"), u = kqe(s), c = o.filter((S) => S.length > 0), l = c.at(-1);
  if (!u || !l || u.includes("@") || u.includes(":") && !/^\[[0-9a-f:.]+\]$/i.test(u) || c.some((S) => S.includes("@"))) return;
  let f = gN(u),
    g = f === "other" ? u : sta[f],
    m = f !== "other" ? f : g === fe ? "gitea" : void 0,
    _ = c.length - 3,
    E = m === void 0 && _ >= 0 && c[_] === "scm",
    k = E ? [...c.slice(0, _), ...c.slice(_ + 1)] : c,
    C = k.slice(0, -1),
    h = C.at(-1);
  if (m === void 0 && h !== void 0 && (E || me.test(e.trim()))) {
    let S = [...C.slice(0, -1), "projects", h, "repos", l];
    return {
      [A]: `https://${g}/${S.join("/")}`,
      [O]: h,
      [I]: l,
      [v]: "bitbucket"
    }
  }
  return {
    [A]: `https://${g}/${k.join("/")}`,
    ...C.length > 0 && {
      [O]: C.join("/")
    },
    [I]: l,
    ...m !== void 0 && {
      [v]: m
    }
  }
}

function fKi({
  commitId: e,
  branch: n
}) {
  return {
    [de]: e,
    ...n !== void 0 && {
      [ae]: n,
      [le]: "branch"
    }
  }
}
async function pKi() {
  if (T("OTEL_METRICS_INCLUDE_REPOSITORY") && F(i.OTEL_RESOURCE_ATTRIBUTES)[A] === void 0) await j().settled
}
var Re = new W(() => ({
  token: void 0,
  identity: null
}));

function Se() {
  if (!i.CLAUDE_CODE_REMOTE_SESSION_ID) return null;
  let e = zd();
  if (!e) return null;
  let n = Re.of(H().host);
  if (e === n.token) return n.identity;
  n.token = e;
  let r = Rz(e.replace(/^sk-ant-[a-z0-9]+-/, ""));
  if (typeof r !== "object" || r === null) return n.identity = null;
  let s = r,
    o = (c) => typeof c === "string" && c.length > 0 ? c : void 0,
    u = s.act ?? {};
  return n.identity = {
    organizationUuid: o(s.organization_uuid),
    accountUuid: o(s.account_uuid),
    emailAddress: o(s.account_email) ?? o(u.email)
  }
}
var Ae = /^a(?:[\w-]{1,63}-)?([0-9a-f]{16})$/,
  x = String.raw`[0-9a-f]{4}`,
  Ce = String.raw`[0-9a-f]{8}-${x}-${x}-${x}-[0-9a-f]{12}`,
  he = new RegExp(String.raw`^(?:hook-agent-)?${Ce}$`);

function w(e) {
  let n = Ae.exec(e),
    r = he.test(e) ? e : void 0;
  return n ? `a${n[1]}` : r
}

function i$n(e) {
  return ngt() ? w(e) : e
}

function B(e) {
  if (!e || pp(e)) return {};
  let n = w(e.agentId),
    r = w(e.parentAgentId ?? "");
  return {
    ...n !== void 0 && {
      agent_id: n
    },
    ...r !== void 0 && {
      parent_agent_id: r
    }
  }
}
var R = Oe(od(), 1);
var G = (e) => ["string", "number", "boolean"].includes(typeof e) || Array.isArray(e) && e.every((n) => typeof n === "string");

function V({
  event: e,
  attributes: n,
  loggedAt: r,
  eventContext: s
}) {
  let o = R.trace.getSpanContext(s ?? R.context.active()),
    u = o !== void 0 && R.isSpanContextValid(o);
  return {
    to: "collector",
    event: e,
    attributes: Ro(n, G),
    loggedAt: r.toISOString(),
    ...u && {
      span: {
        traceId: o.traceId,
        spanId: o.spanId,
        traceFlags: o.traceFlags
      }
    }
  }
}

function Y(e, {
  entry: n,
  signal: r,
  hookOrigin: s
}) {
  let o = () => t(`[3P telemetry] Event record dropped (${n.event}): still on the collector road when a flush stopped waiting`),
    u = (c) => t(`[3P telemetry] Event record lost (${n.event}): its raise failed: ${d(c)}`, {
      level: "warn"
    });
  return r.aborted ? o() : e.send(n, r, s).then(() => {
    return
  }, (c) => r.aborted ? o() : u(c))
}

function J() {
  let e = Ef(),
    n = Promise.withResolvers(),
    r = null,
    s = new AbortController,
    o = 0;
  async function u() {
    while (r !== null) await r
  }

  function c() {
    if (r === null) return;
    t("[3P telemetry] A flush stopped waiting for the collector road; records still on it are dropped"), s.abort(), s = new AbortController, r = null
  }
  return {
    setRoad: (l) => {
      if (e.set(l), l === null) n = Promise.withResolvers();
      else o = 0, n.resolve(l)
    },
    getRoad: e.get,
    route: (l, f) => {
      let g = e.get() === null;
      if (g && o >= woa) return t("[3P telemetry] Event record dropped: no road installed and too many already waiting for one", {
        level: "warn"
      }), Promise.resolve();
      o += g ? 1 : 0;
      let m = {
          entry: l(),
          signal: s.signal,
          hookOrigin: f
        },
        _ = (r ?? Promise.resolve()).then(() => e.get() ?? n.promise).then((E) => Y(E, m)).catch((E) => t(`[3P telemetry] Event record dropped: ${d(E)}`, {
          level: "warn"
        }));
      return r = _, _.then(() => {
        if (r === _) r = null
      }), _
    },
    isIdle: () => r === null,
    settled: u,
    settledWithin: (l) => we(u(), l).then(c)
  }
}
var J_e = J();
var D = Oe(od(), 1);
import {
  AsyncLocalStorage as be
} from "async_hooks";
class K {
  als = new be;
  active() {
    return this.als.getStore() ?? D.ROOT_CONTEXT
  }
  with(e, n, r, ...s) {
    let o = r == null ? n : n.bind(r);
    return this.als.run(e, o, ...s)
  }
  enterWith(e) {
    this.als.enterWith(e)
  }
  bind(e, n) {
    if (typeof n === "function") {
      let r = (...s) => this.with(e, () => n(...s));
      return Object.defineProperty(r, "length", {
        configurable: !0,
        enumerable: !1,
        writable: !1,
        value: n.length
      }), r
    }
    return n
  }
  enable() {
    return this
  }
  disable() {
    return this.als.disable(), this
  }
}
var SNe = new K;
class X {
  current = void 0
}
var Q = new W(() => new X);

function wCs(e) {
  Q.of(H().host).current = e
}

function kCs() {
  return Q.of(H().host).current
}

function l_o() {
  let e = SNe.active();
  if (e !== D.ROOT_CONTEXT) return e;
  return kCs() ?? e
}
class te {
  nextSequence = 0;
  warnedNoEventLogger = !1
}
var ne = new W(() => new te);

function re() {
  return i.OTEL_LOG_USER_PROMPTS
}

function Ie(e) {
  return re() ? e : "<REDACTED>"
}

function mKi(e) {
  if (e === void 0) return {
    prompt: "<REDACTED>",
    prompt_text: "<REDACTED>"
  };
  let n = re() ? tbe(() => wNe(H().host), void 0, e) : Ie(e);
  return {
    prompt: n,
    prompt_text: n
  }
}

function hKi() {
  return i.OTEL_LOG_ASSISTANT_RESPONSES ?? i.OTEL_LOG_USER_PROMPTS
}
var ve = new Z.W3CTraceContextPropagator;

function xe() {
  let e = l_o(),
    n = y.trace.getSpanContext(e);
  if (n && y.isSpanContextValid(n)) return e;
  if (ye() && i.TRACEPARENT) return ve.extract(e, {
    traceparent: i.TRACEPARENT,
    tracestate: i.TRACESTATE
  }, y.defaultTextMapGetter);
  return
}
async function da(e, n = {}, r, s) {
  let o = ne.of(H().host);
  if (o.warnedNoEventLogger && p4e() === null && !y$e() && !i.CLAUDE_CODE_DISABLE_OTEL_EVENT_SKIP && J_e.isIdle() && J_e.getRoad()?.isWatched(s) === !1) return;
  let u = {
      ...Gnn(),
      "event.name": e,
      "event.timestamp": new Date().toISOString(),
      "event.sequence": o.nextSequence++
    },
    c = $H();
  if (c) u["prompt.id"] = c;
  let l = i.CLAUDE_CODE_WORKSPACE_HOST_PATHS;
  if (l) u["workspace.host_paths"] = l.split("|");
  Object.assign(u, b1n(r));
  for (let [m, _] of Object.entries(q() ? HPr(n) : n)) {
    let E = m === "error" && q() && !/^[a-z0-9_]+$/.test(String(_));
    if (_ !== void 0 && !E) u[m] = _
  }
  try {
    Object.assign(u, B(r))
  } catch (m) {
    t(`[3P telemetry] Agent ids not stamped: ${String(m)}`, {
      level: "warn"
    })
  }
  let f = new Date,
    g = xe();
  await J_e.route(() => V({
    event: e,
    attributes: u,
    loggedAt: f,
    eventContext: g
  }), s)
}

function gKi(e, n, r, s) {
  return {
    timestamp: r,
    observedTimestamp: r,
    body: `claude_code.${e}`,
    attributes: n,
    ...s && {
      context: s
    }
  }
}

function yKi(e, n) {
  let r = p4e();
  if (r) {
    r.emit(e);
    return
  }
  let s = ne.of(H().host);
  if (!uGs(e) && !s.warnedNoEventLogger) s.warnedNoEventLogger = !0, t(`[3P telemetry] Event dropped (no event logger initialized): ${n}`, {
    level: Pe(process.env.CLAUDE_CODE_ENABLE_TELEMETRY) ? "warn" : "debug"
  })
}

function Q_e(e, n) {
  if (e.from === e.to) return;
  da("permission_mode_changed", {
    from_mode: e.from,
    to_mode: e.to,
    ...e.trigger && {
      trigger: e.trigger
    }
  }, n)
}

function kQe(e, n) {
  da("compaction", {
    trigger: e.trigger,
    success: String(e.success),
    duration_ms: String(Math.round(e.durationMs)),
    ...e.preTokens !== void 0 && {
      pre_tokens: String(e.preTokens)
    },
    ...e.postTokens !== void 0 && {
      post_tokens: String(e.postTokens)
    },
    ...e.error && {
      error: e.error
    },
    ...e.precomputeReuse && {
      precompute_reuse: e.precomputeReuse
    }
  }, n)
}

function vCs(e) {
  da("retention_sweep", {
    result: e.result,
    period_days: String(e.periodDays),
    used_default: String(e.usedDefault),
    ...e.skipReason && {
      skip_reason: e.skipReason
    },
    ...e.transcriptsDeleted !== void 0 && {
      transcripts_deleted: String(e.transcriptsDeleted)
    },
    ...e.transcriptsExemptedDesktop !== void 0 && {
      transcripts_exempted_desktop: String(e.transcriptsExemptedDesktop)
    },
    ...e.sessionFilesDeleted !== void 0 && {
      session_files_deleted: String(e.sessionFilesDeleted)
    },
    ...e.artifactsDeleted !== void 0 && {
      artifacts_deleted: String(e.artifactsDeleted)
    },
    ...e.filesRetainedFresh !== void 0 && {
      files_retained_fresh: String(e.filesRetainedFresh)
    },
    ...e.filesPastCutoff !== void 0 && {
      files_past_cutoff: String(e.filesPastCutoff)
    },
    ...e.errorCount !== void 0 && {
      error_count: String(e.errorCount)
    },
    ...e.historyEntriesPruned !== void 0 && {
      history_entries_pruned: String(e.historyEntriesPruned)
    }
  })
}
var P = !1;

function _Ki(e) {
  if (P) return;
  P = !0;
  try {
    let n = e.name !== "Error" ? e.name : e.constructor?.name || "Error";
    da("internal_error", {
      error_name: x0(n) ?? "Error",
      error_code: tr(e)
    })
  } finally {
    P = !1
  }
}

function Z_e(e) {
  da("at_mention", {
    mention_type: e.mentionType,
    success: String(e.success)
  })
}

function ebe(e) {
  let n = e.error !== void 0 ? Ai(e.error) : null;
  da("auth", {
    action: e.action,
    success: String(e.success),
    auth_method: e.authMethod,
    ...n && {
      error_category: n.kind,
      ...n.status !== void 0 && {
        status_code: String(n.status)
      }
    }
  })
}
export {
  cAr,
  a_o,
  Gnn,
  fKi,
  pKi,
  i$n,
  J_e,
  SNe,
  wCs,
  kCs,
  l_o,
  mKi,
  hKi,
  da,
  gKi,
  yKi,
  Q_e,
  kQe,
  vCs,
  _Ki,
  Z_e,
  ebe
};
