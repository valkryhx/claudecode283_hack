// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.303
import {
  Fe
} from "B:/~BUN/root/chunk-rwkgcmm8.js";
import {
  L,
  c3s,
  j,
  K,
  BGe,
  OGo,
  we,
  Br,
  pP,
  de,
  Nde
} from "B:/~BUN/root/chunk-rpez7z7a.js";
import {
  d,
  Fr,
  wL,
  pi
} from "B:/~BUN/root/chunk-3aez4b53.js";
import {
  je
} from "B:/~BUN/root/chunk-89mss1tj.js";
import {
  z,
  eo
} from "B:/~BUN/root/chunk-4bx17ygx.js";
import {
  f
} from "B:/~BUN/root/chunk-frrkt2bs.js";
import {
  gYn,
  hf,
  wn,
  fA,
  nzs,
  XE,
  fdn,
  BM
} from "B:/~BUN/root/chunk-hb6x4e3n.js";
import {
  nl,
  sm
} from "B:/~BUN/root/chunk-kad4nq7y.js";
import {
  _,
  J,
  t
} from "B:/~BUN/root/chunk-6za2ez23.js";
import {
  La
} from "B:/~BUN/root/chunk-nggrknsv.js";
import {
  a
} from "B:/~BUN/root/chunk-yt0knyw7.js";
import {
  l
} from "B:/~BUN/root/chunk-c09hf5e4.js";
import {
  ip
} from "B:/~BUN/root/chunk-gyr2a6wz.js";
import {
  Bs
} from "B:/~BUN/root/chunk-yw21pggd.js";
import {
  Tt
} from "B:/~BUN/root/chunk-nxwmyxnk.js";
import {
  tBr,
  sQ
} from "B:/~BUN/root/chunk-2zk4vqr8.js";
import {
  bd
} from "B:/~BUN/root/chunk-rfp1pa77.js";
import {
  Ut
} from "B:/~BUN/root/chunk-cx57tr4b.js";
import {
  X9e
} from "B:/~BUN/root/chunk-1s3ejbv6.js";
import {
  $qn,
  $X
} from "B:/~BUN/root/chunk-6n2cf80v.js";
import {
  QN,
  J6n
} from "B:/~BUN/root/chunk-4qc55bxf.js";
import {
  ge,
  sr,
  St
} from "B:/~BUN/root/chunk-rm2gz7kj.js";
import {
  z0e,
  g4s,
  iI
} from "B:/~BUN/root/chunk-59tbtn9n.js";
import {
  ve
} from "B:/~BUN/root/chunk-ef0msk7r.js";
var C = ve(nl(), 1),
  _e = ve(sm(), 1);
var Re = f(() => St({
  sub: ge().optional().catch(void 0),
  email: ge().optional().catch(void 0),
  groups: sr(ge()).optional().catch(void 0)
}).passthrough());

function G(e) {
  let n = e.indexOf("."),
    o = e.indexOf(".", n + 1);
  if (n < 0 || o < 0) return null;
  try {
    let r = Re().safeParse(J(Buffer.from(e.slice(n + 1, o), "base64url").toString("utf8")));
    return r.success ? r.data : null
  } catch {
    return null
  }
}

function Nqn(e) {
  return pP(e) ? G(e.jwt)?.sub || void 0 : void 0
}
var D = Object.freeze({}),
  Ae = new z(() => ({
    jwt: void 0,
    attrs: D
  }));

function sIr() {
  let e = Br(),
    n = pP(e) ? e.jwt : void 0,
    o = Ae.of(j().host);
  if (n === o.jwt) return o.attrs;
  if (o.jwt = n, !n) return o.attrs = D;
  let r = G(n);
  if (!r) return o.attrs = D;
  let s = {
    "identity.source": "gateway-oidc"
  };
  if (r.sub) s["user.id"] = r.sub;
  if (r.email) s["user.email"] = r.email;
  if (r.groups && r.groups.length > 0) s["user.groups"] = r.groups.join(",");
  return o.attrs = Object.freeze(s)
}
var Se = {
    OTEL_METRICS_INCLUDE_SESSION_ID: !0,
    OTEL_METRICS_INCLUDE_VERSION: !1,
    OTEL_METRICS_INCLUDE_ACCOUNT_UUID: !0,
    OTEL_METRICS_INCLUDE_ENTRYPOINT: !1,
    OTEL_METRICS_INCLUDE_RESOURCE_ATTRIBUTES: !0,
    OTEL_METRICS_INCLUDE_REPOSITORY: !1
  },
  M = "vcs.repository.url.full",
  P = "vcs.repository.name",
  N = "vcs.owner.name",
  k = "vcs.provider.name",
  Ce = "vcs.ref.head.revision",
  xe = "vcs.ref.head.name",
  Me = "vcs.ref.head.type",
  be = [M, N, P, k],
  Oe = "gitea.com",
  Ie = /^ssh:\/\/[^/?#]*:7999(?=[/?#]|$)/i;

function R(e) {
  let n = Se[e],
    o = process.env[e];
  if (o === void 0) return n;
  return Fe(o)
}

function V(e) {
  for (let n = 0; n < e.length; n++) {
    let o = e.charCodeAt(n);
    if (o < 33 || o === 44 || o === 59 || o === 92 || o > 126) return !1
  }
  return !0
}
var W = 255,
  Y = eo((e) => {
    if (!e) return {};
    let n = {};
    try {
      for (let o of e.split(",")) {
        let [r, s, ...i] = o.split("=");
        if (r === void 0 || s === void 0 || i.length > 0) continue;
        let c = r.trim(),
          p = s.trim().split(/^"|"$/).join("");
        if (c.length === 0 || c.length > W || !V(c)) throw Error("invalid resource attribute key");
        if (p.length > W || !V(p)) throw Error("invalid resource attribute value");
        n[c] = decodeURIComponent(p)
      }
    } catch {
      return {}
    }
    return n
  });

function rFt() {
  let e = BM(),
    n = K(),
    o = sIr(),
    r = Object.keys(o).length > 0,
    s = {},
    i = Y(a.OTEL_RESOURCE_ATTRIBUTES);
  if (R("OTEL_METRICS_INCLUDE_RESOURCE_ATTRIBUTES"))
    for (let [u, g] of Object.entries(i)) {
      if (r && (u.startsWith("user.") || u.startsWith("identity."))) continue;
      s[u] = g
    }
  if (s["user.id"] = e, R("OTEL_METRICS_INCLUDE_SESSION_ID")) {
    if (s["session.id"] = n, a.CLAUDE_CODE_REMOTE_SESSION_ID) s["ccr.session.id"] = a.CLAUDE_CODE_REMOTE_SESSION_ID
  }
  if (R("OTEL_METRICS_INCLUDE_VERSION")) s["app.version"] = {
    ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
    PACKAGE_URL: "@anthropic-ai/claude-code",
    README_URL: "https://code.claude.com/docs/en/overview",
    VERSION: "2.1.303",
    FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
    BUILD_TIME: "2026-10-18T20:20:57Z",
    GIT_SHA: "07df2aedd2d01d2f60907b8404acbda187b04072",
    HOOKS_WORKER_URL: "B:/~BUN/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js",
    DD_SOURCEMAP_GROUP: "win32"
  }.VERSION;
  if (R("OTEL_METRICS_INCLUDE_ENTRYPOINT")) {
    let u = ip();
    if (u) s["app.entrypoint"] = u
  }
  if (R("OTEL_METRICS_INCLUDE_REPOSITORY")) {
    let u = i[M] === void 0 ? X().attributes : void 0;
    for (let g of be) {
      let m = i[g] ?? u?.[g];
      if (m) s[g] = m
    }
  }
  let c = fA() ?? wn() ?? Le();
  if (c) {
    let u = c.organizationUuid,
      g = !de() ? c.emailAddress : X9e() ? a.CLAUDE_CODE_USER_EMAIL : void 0,
      m = c.accountUuid;
    if (u) s["organization.id"] = u;
    if (g) s["user.email"] = g;
    if (m && R("OTEL_METRICS_INCLUDE_ACCOUNT_UUID")) {
      s["user.account_uuid"] = m;
      let E = a.CLAUDE_CODE_ACCOUNT_TAGGED_ID || J6n("user", m);
      if (E) s["user.account_id"] = E
    }
  }
  Object.assign(s, o);
  let p = de() ? nzs : XE.terminal;
  if (p) s["terminal.type"] = p;
  return s
}
var De = new z(() => ({
  settled: void 0,
  attributes: void 0
}));

function X() {
  let e = De.of(j().host);
  if (e.settled === void 0 && !Tt()) e.settled = tBr().then((n) => {
    e.attributes = n ? Pe(n) : void 0
  }).catch(l);
  return e
}

function Pe(e) {
  let n = e.search(/[?#]/);
  if (n >= 0 && e.includes("@", n)) return;
  let o = sQ((n >= 0 ? e.slice(0, n) : e).replace(/\/+$/, ""));
  if (!o) return;
  let [r = "", ...s] = o.split("/"), i = z0e(r), c = s.filter((w) => w.length > 0), p = c.at(-1);
  if (!i || !p || i.includes("@") || i.includes(":") && !/^\[[0-9a-f:.]+\]$/i.test(i) || c.some((w) => w.includes("@"))) return;
  let u = iI(i),
    g = u === "other" ? i : g4s[u],
    m = u !== "other" ? u : g === Oe ? "gitea" : void 0,
    E = c.length - 3,
    y = m === void 0 && E >= 0 && c[E] === "scm",
    T = y ? [...c.slice(0, E), ...c.slice(E + 1)] : c,
    h = T.slice(0, -1),
    x = h.at(-1);
  if (m === void 0 && x !== void 0 && (y || Ie.test(e.trim()))) {
    let w = [...h.slice(0, -1), "projects", x, "repos", p];
    return {
      [M]: `https://${g}/${w.join("/")}`,
      [N]: x,
      [P]: p,
      [k]: "bitbucket"
    }
  }
  return {
    [M]: `https://${g}/${T.join("/")}`,
    ...h.length > 0 && {
      [N]: h.join("/")
    },
    [P]: p,
    ...m !== void 0 && {
      [k]: m
    }
  }
}

function SHs({
  commitId: e,
  branch: n
}) {
  return {
    [Ce]: e,
    ...n !== void 0 && {
      [xe]: n,
      [Me]: "branch"
    }
  }
}
async function wHs() {
  if (R("OTEL_METRICS_INCLUDE_REPOSITORY") && Y(a.OTEL_RESOURCE_ATTRIBUTES)[M] === void 0) await X().settled
}
var Ne = new z(() => ({
  token: void 0,
  identity: null
}));

function Le() {
  if (!a.CLAUDE_CODE_REMOTE_SESSION_ID) return null;
  let e = bd();
  if (!e) return null;
  let n = Ne.of(j().host);
  if (e === n.token) return n.identity;
  n.token = e;
  let o = QN(e.replace(/^sk-ant-[a-z0-9]+-/, ""));
  if (typeof o !== "object" || o === null) return n.identity = null;
  let r = o,
    s = (c) => typeof c === "string" && c.length > 0 ? c : void 0,
    i = r.act ?? {};
  return n.identity = {
    organizationUuid: s(r.organization_uuid),
    accountUuid: s(r.account_uuid),
    emailAddress: s(r.account_email) ?? s(i.email)
  }
}
var A = ve(nl(), 1);
var q = (e) => ["string", "number", "boolean"].includes(typeof e) || Array.isArray(e) && e.every((n) => typeof n === "string");

function Q({
  event: e,
  attributes: n,
  loggedAt: o,
  eventContext: r
}) {
  let s = A.trace.getSpanContext(r ?? A.context.active()),
    i = s !== void 0 && A.isSpanContextValid(s);
  return {
    to: "collector",
    event: e,
    attributes: Bs(n, q),
    loggedAt: o.toISOString(),
    ...i && {
      span: {
        traceId: s.traceId,
        spanId: s.spanId,
        traceFlags: s.traceFlags
      }
    }
  }
}

function Z(e, {
  entry: n,
  signal: o
}) {
  let r = () => t(`[3P telemetry] Event record dropped (${n.event}): still on the collector road when a flush stopped waiting`),
    s = (i) => t(`[3P telemetry] Event record lost (${n.event}): its raise failed: ${d(i)}`, {
      level: "warn"
    });
  return o.aborted ? r() : e.send(n, o).then(() => {
    return
  }, (i) => o.aborted ? r() : s(i))
}

function ee() {
  let e = hf(),
    n = Promise.withResolvers(),
    o = null,
    r = new AbortController,
    s = 0;
  async function i() {
    while (o !== null) await o
  }

  function c() {
    if (o === null) return;
    t("[3P telemetry] A flush stopped waiting for the collector road; records still on it are dropped"), r.abort(), r = new AbortController, o = null
  }
  return {
    setRoad: (p) => {
      if (e.set(p), p === null) n = Promise.withResolvers();
      else s = 0, n.resolve(p)
    },
    getRoad: e.get,
    route: (p) => {
      let u = e.get() === null;
      if (u && s >= c3s) return t("[3P telemetry] Event record dropped: no road installed and too many already waiting for one", {
        level: "warn"
      }), Promise.resolve();
      s += u ? 1 : 0;
      let g = {
          entry: p(),
          signal: r.signal
        },
        m = (o ?? Promise.resolve()).then(() => e.get() ?? n.promise).then((E) => Z(E, g)).catch((E) => t(`[3P telemetry] Event record dropped: ${d(E)}`, {
          level: "warn"
        }));
      return o = m, m.then(() => {
        if (o === m) o = null
      }), m
    },
    settled: i,
    settledWithin: (p) => je(i(), p).then(c)
  }
}
var bke = ee();
import {
  createHash as Ue
} from "crypto";
var ke = 8388608,
  U = 24;
class te {
  shown = new Set;
  toolTexts = new Set;
  shownChars = 0;
  toolTextChars = 0;
  dropped = !1;
  genuine = !1;
  version = 0
}
var S = new z(() => new te);

function vHs(e) {
  let n = S.of(e);
  n.dropped = !0, n.version++
}

function kHs(e) {
  S.of(e).genuine = !0
}

function iIr(e, n) {
  let o = S.of(e);
  if (n.trim() === "" || !oe(o.shown, n)) return;
  o.shownChars = ne(o, o.shown, o.shownChars + n.length), o.version++
}

function aIr(e, n) {
  let o = S.of(e);
  if (n.trim() === "" || !oe(o.toolTexts, n)) return;
  o.toolTextChars = ne(o, o.toolTexts, o.toolTextChars + n.length), o.version++
}

function EHs(e) {
  if (e === void 0) return !0;
  let n = S.of(e);
  return n.shown.size > 0 || n.toolTexts.size > 0 || n.genuine || n.dropped
}

function lIr(e) {
  return S.of(e)
}

function ne(e, n, o) {
  let r = o;
  while (r > ke && n.size > 0) {
    let s = n.values().next().value;
    n.delete(s), r -= s.length, e.dropped = !0
  }
  return r
}

function oe(e, n) {
  let o = e.delete(n);
  return e.add(n), !o
}
var re = Object.freeze({
    blocks: Object.freeze([]),
    lines: Object.freeze([]),
    unsearchable: !1,
    toolNames: new Set
  }),
  I = "[account memory text not recorded]";

function E3(e) {
  return `<${e.length} chars; not recorded>`
}

function Emt(e) {
  return `<not recorded: ${e}>`
}

function Be(e) {
  return e === "extract_memories" || e === "local_memory_import" || e === "auto_dream"
}

function oFt(e, n, o) {
  if (Be(n)) return {
    withheld: "memory_operation"
  };
  try {
    let r = e();
    if (r.unsearchable) return {
      withheld: "account_memory_text_not_identified"
    };
    return {
      value: o(r)
    }
  } catch {
    return {
      withheld: "account_memory_redaction_failed"
    }
  }
}

function Ske(e, n, o) {
  let r = e === void 0 ? {
    withheld: "account_memory_text_not_identified"
  } : oFt(e, n, (s) => sFt(o, s));
  return "withheld" in r ? Emt(r.withheld) : r.value
}
var He = /^(?:[-*+>]|\d+[.)]|#{1,6})\s+/;

function bxo({
  rendered: e,
  verbatim: n,
  toolNames: o = re.toolNames,
  unsearchable: r = !1
}) {
  let s = (y) => y.trim() !== "",
    i = L(e.map((y) => y.trim()).filter(s)),
    c = L(n.map((y) => y.trim()).filter(s));
  if (i.length === 0 && c.length === 0 && o.size === 0 && !r) return re;
  let p = (y, T) => T.length - y.length,
    u = (y) => (_(y) ?? `"${y}"`).slice(1, -1),
    g = (y) => L(y.flatMap((T) => {
      let h = Ut(T);
      return [T, h, u(T), u(h), Ut(u(T)), Ut(h), u(u(T))]
    })).sort(p),
    m = g([...i, ...c.filter((y) => y.length >= U)]),
    E = g([...i, ...c].flatMap((y) => y.split(`
`)).flatMap((y) => {
      let T = y.trim(),
        h = T.replace(He, "");
      return [T, h].filter((x) => x.length >= U)
    }));
  return {
    blocks: m,
    lines: E,
    unsearchable: r,
    toolNames: o
  }
}

function iIe(e) {
  let n = lIr(e),
    o = se.get(e);
  if (o !== void 0 && o.version === n.version) return o.keys;
  let r = bxo({
    rendered: [],
    verbatim: [...n.shown, ...n.toolTexts],
    unsearchable: n.dropped
  });
  return se.set(e, {
    version: n.version,
    keys: r
  }), r
}
var se = new WeakMap;

function sFt(e, n) {
  if (n.blocks.length === 0 && n.lines.length === 0) return e;
  let {
    blocks: o,
    lines: r
  } = Ge(n);
  return ue(ue(e, o), r)
}
var Ke = 131072,
  ze = 8,
  b = new Map,
  ie = new WeakMap;

function Ge(e) {
  let n = ie.get(e);
  if (n !== void 0) return n;
  let o = Ue("sha256").update(_([e.blocks, e.lines])).digest("hex"),
    r = b.get(o);
  if (r === void 0) {
    if (r = {
        blocks: ce(e.blocks),
        lines: ce(e.lines)
      }, b.size >= ze) b.delete(b.keys().next().value);
    b.set(o, r)
  }
  return ie.set(e, r), r
}

function ce(e) {
  let n = e.filter((i) => i !== "" && !I.includes(i)).toSorted((i, c) => c.length - i.length).map(La),
    o = [],
    r = [],
    s = 0;
  for (let i of n) {
    if (r.length > 0 && s + i.length > Ke) o.push(new RegExp(r.join("|"), "g")), r = [], s = 0;
    r.push(i), s += i.length + 1
  }
  if (r.length > 0) o.push(new RegExp(r.join("|"), "g"));
  return o
}

function ue(e, n) {
  let o = e;
  for (let r of n) o = o.replace(r, I);
  if (o === e) return e;
  for (let r = 0; n.some((s) => o.search(s) !== -1); r++) {
    if (r >= 16) throw Error("account-memory text still matched a search key after 16 replacement rounds");
    for (let s of n) o = o.replace(s, I)
  }
  return o
}

function v(e) {
  return e
}

function Fqn(e, n, o = e) {
  let r = new Set;
  for (let s of o) {
    if (s.role !== "assistant" || typeof s.content === "string") continue;
    for (let i of s.content) {
      let c = v(i).id;
      if (fe(i, n) && typeof c === "string") r.add(c)
    }
  }
  return e.map((s) => {
    let i = B(s.content, n, r);
    return i === s.content ? s : {
      ...s,
      content: i
    }
  })
}

function THs(e, n) {
  return ae(e, n, new Set)
}

function CHs(e, n) {
  return B(e, n, new Set)
}

function B(e, n, o) {
  if (typeof e === "string") return sFt(e, n);
  let r = ae(e, n, o);
  return r.every((s, i) => s === e[i]) ? e : r
}

function ae(e, n, o) {
  return e.map((r) => {
    let {
      text: s,
      thinking: i,
      input: c,
      tool_use_id: p,
      content: u
    } = v(r);
    if (r.type === "text" && typeof s === "string" || r.type === "thinking" && typeof i === "string") {
      let m = O(r, n, 0);
      return m === r ? r : m
    }
    if (r.type === "tool_use" || r.type === "server_tool_use") {
      if (fe(r, n)) return {
        ...r,
        input: {
          not_recorded: E3(le(c))
        }
      };
      let m = O(c, n, 0);
      return m === c ? r : {
        ...r,
        input: m
      }
    }
    if (r.type === "tool_result" && u !== void 0 && u !== null) {
      if (typeof p === "string" && o.has(p)) return {
        ...r,
        content: E3(typeof u === "string" ? u : le(u))
      };
      if (typeof u === "string" || Array.isArray(u)) {
        let m = B(u, n, o);
        return m === u ? r : {
          ...r,
          content: m
        }
      }
    }
    if (Ve.has(r.type) || We(r)) return r;
    let g = O(r, n, 0);
    return g === r ? r : g
  })
}
var Ve = new Set(["image", "redacted_thinking", "container_upload"]);

function We(e) {
  let {
    source: n
  } = v(e);
  return e.type === "document" && typeof n === "object" && n !== null && n.type === "base64"
}

function fe(e, n) {
  let {
    name: o
  } = v(e);
  return (e.type === "tool_use" || e.type === "server_tool_use") && typeof o === "string" && $X(o, $qn(n.toolNames), "history")
}
var Ye = 6;

function O(e, n, o) {
  if (typeof e === "string") return sFt(e, n);
  if (typeof e !== "object" || e === null) return e;
  if (o >= Ye) return I;
  if (Array.isArray(e)) {
    let i = e.map((c) => O(c, n, o + 1));
    return i.every((c, p) => c === e[p]) ? e : i
  }
  let r = !1,
    s = Object.entries(e).map(([i, c]) => {
      let p = sFt(i, n),
        u = O(c, n, o + 1);
      return r ||= u !== c || p !== i, [p, u]
    });
  return r ? Object.fromEntries(s) : e
}

function le(e) {
  try {
    return _(e) ?? ""
  } catch {
    return ""
  }
}
var F = ve(nl(), 1);
import {
  AsyncLocalStorage as $e
} from "async_hooks";
class pe {
  als = new $e;
  active() {
    return this.als.getStore() ?? F.ROOT_CONTEXT
  }
  with(e, n, o, ...r) {
    let s = o == null ? n : n.bind(o);
    return this.als.run(e, s, ...r)
  }
  enterWith(e) {
    this.als.enterWith(e)
  }
  bind(e, n) {
    if (typeof n === "function") {
      let o = (...r) => this.with(e, () => n(...r));
      return Object.defineProperty(o, "length", {
        configurable: !0,
        enumerable: !1,
        writable: !1,
        value: n.length
      }), o
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
var wke = new pe;
class me {
  current = void 0
}
var ye = new z(() => new me);

function Sxo(e) {
  ye.of(j().host).current = e
}

function wxo() {
  return ye.of(j().host).current
}

function dIr() {
  let e = wke.active();
  if (e !== F.ROOT_CONTEXT) return e;
  return wxo() ?? e
}
class Ee {
  nextSequence = 0;
  warnedNoEventLogger = !1
}
var Te = new z(() => new Ee);

function he() {
  return a.OTEL_LOG_USER_PROMPTS
}

function Xe(e) {
  return he() ? e : "<REDACTED>"
}

function RHs(e) {
  if (e === void 0) return {
    prompt: "<REDACTED>",
    prompt_text: "<REDACTED>"
  };
  let n = he() ? Ske(() => iIe(j().host), void 0, e) : Xe(e);
  return {
    prompt: n,
    prompt_text: n
  }
}

function AHs() {
  return a.OTEL_LOG_ASSISTANT_RESPONSES ?? a.OTEL_LOG_USER_PROMPTS
}
var Je = new _e.W3CTraceContextPropagator;

function qe() {
  let e = dIr(),
    n = C.trace.getSpanContext(e);
  if (n && C.isSpanContextValid(n)) return e;
  if (we() && a.TRACEPARENT) return Je.extract(e, {
    traceparent: a.TRACEPARENT,
    tracestate: a.TRACESTATE
  }, C.defaultTextMapGetter);
  return
}
async function wi(e, n = {}, o) {
  let r = Te.of(j().host),
    s = {
      ...rFt(),
      "event.name": e,
      "event.timestamp": new Date().toISOString(),
      "event.sequence": r.nextSequence++
    },
    i = Nde();
  if (i) s["prompt.id"] = i;
  let c = a.CLAUDE_CODE_WORKSPACE_HOST_PATHS;
  if (c) s["workspace.host_paths"] = c.split("|");
  Object.assign(s, fdn(o));
  for (let [g, m] of Object.entries(de() ? gYn(n) : n)) {
    let E = g === "error" && de() && !/^[a-z0-9_]+$/.test(String(m));
    if (m !== void 0 && !E) s[g] = m
  }
  let p = new Date,
    u = qe();
  await bke.route(() => Q({
    event: e,
    attributes: s,
    loggedAt: p,
    eventContext: u
  }))
}

function xHs(e, n, o, r) {
  return {
    timestamp: o,
    observedTimestamp: o,
    body: `claude_code.${e}`,
    attributes: n,
    ...r && {
      context: r
    }
  }
}

function PHs(e, n) {
  let o = BGe();
  if (o) {
    o.emit(e);
    return
  }
  let r = Te.of(j().host);
  if (!OGo(e) && !r.warnedNoEventLogger) r.warnedNoEventLogger = !0, t(`[3P telemetry] Event dropped (no event logger initialized): ${n}`, {
    level: Fe(process.env.CLAUDE_CODE_ENABLE_TELEMETRY) ? "warn" : "debug"
  })
}

function Aae(e) {
  if (e.from === e.to) return;
  wi("permission_mode_changed", {
    from_mode: e.from,
    to_mode: e.to,
    ...e.trigger && {
      trigger: e.trigger
    }
  })
}

function J1e(e) {
  wi("compaction", {
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
  })
}

function vxo(e) {
  wi("retention_sweep", {
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
var H = !1;

function OHs(e) {
  if (H) return;
  H = !0;
  try {
    let n = e.name !== "Error" ? e.name : e.constructor?.name || "Error";
    wi("internal_error", {
      error_name: wL(n) ?? "Error",
      error_code: Fr(e)
    })
  } finally {
    H = !1
  }
}

function tte(e) {
  wi("at_mention", {
    mention_type: e.mentionType,
    success: String(e.success)
  })
}

function xae(e) {
  let n = e.error !== void 0 ? pi(e.error) : null;
  wi("auth", {
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
  Nqn,
  sIr,
  rFt,
  SHs,
  wHs,
  bke,
  vHs,
  kHs,
  iIr,
  aIr,
  EHs,
  lIr,
  E3,
  Emt,
  oFt,
  Ske,
  bxo,
  iIe,
  sFt,
  Fqn,
  THs,
  CHs,
  wke,
  Sxo,
  wxo,
  dIr,
  RHs,
  AHs,
  wi,
  xHs,
  PHs,
  Aae,
  J1e,
  vxo,
  OHs,
  tte,
  xae
};
