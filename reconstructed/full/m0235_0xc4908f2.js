// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.283
import {
  mn,
  vb,
  No,
  txe,
  JN,
  QN,
  bzr,
  tt,
  Ve
} from "B:/~BUN/root/chunk-py7yqpgt.js";
import {
  c
} from "B:/~BUN/root/chunk-kks4mj3w.js";
import {
  We,
  P,
  l
} from "B:/~BUN/root/chunk-bgthmgyc.js";
import {
  Ne,
  Me
} from "B:/~BUN/root/chunk-ekrhn4q1.js";
import {
  Dn,
  Nd,
  iM
} from "B:/~BUN/root/chunk-54p0h65d.js";
import {
  C_e,
  Mzr,
  a
} from "B:/~BUN/root/chunk-nkmmqnq7.js";
import {
  kb,
  Ode,
  So,
  q,
  Emt,
  uH,
  di,
  qe,
  we,
  Txe
} from "B:/~BUN/root/chunk-4rk7cwxz.js";
import {
  J,
  ce,
  Jhn,
  pBe,
  t
} from "B:/~BUN/root/chunk-qe2zga5e.js";
import {
  d,
  O
} from "B:/~BUN/root/chunk-zs3ycjed.js";
import {
  er,
  dNr,
  za,
  Si,
  x,
  le
} from "B:/~BUN/root/chunk-gf53qpk6.js";
import {
  _,
  m,
  p
} from "B:/~BUN/root/chunk-51n463p1.js";
import {
  R1
} from "B:/~BUN/root/chunk-bt3h0syz.js";
import {
  pg,
  oe
} from "B:/~BUN/root/chunk-shgdrs47.js";
import {
  fmn
} from "B:/~BUN/root/chunk-8hs4bwwk.js";
import {
  Lt,
  Kd,
  BWr,
  jWr,
  zWr,
  Fn,
  tS,
  zft,
  XWr,
  yt,
  S2,
  Xl,
  tE
} from "B:/~BUN/root/chunk-339q6g5w.js";
import {
  ar
} from "B:/~BUN/root/chunk-290k5gh5.js";
import {
  he
} from "B:/~BUN/root/chunk-3rzkfay5.js";
import {
  hs
} from "B:/~BUN/root/chunk-ceg1zct0.js";
import {
  da
} from "B:/~BUN/root/chunk-83yxmdy5.js";
import {
  TWr
} from "B:/~BUN/root/chunk-fct6vke8.js";
import {
  Kr
} from "B:/~BUN/root/chunk-1rjcv085.js";
import {
  mI,
  Hz
} from "B:/~BUN/root/chunk-ew8y0fm0.js";
import {
  Fst,
  cKe,
  dae,
  obo,
  Q$n,
  rIt,
  $st,
  KEr,
  oIt,
  Z$n,
  Qtn,
  Ztn
} from "B:/~BUN/root/chunk-nrrn2axm.js";
import {
  dt
} from "B:/~BUN/root/chunk-hhgrczac.js";
import {
  VIr
} from "B:/~BUN/root/chunk-196w7fz7.js";
import {
  x6,
  VF,
  Qle
} from "B:/~BUN/root/chunk-gbtzpa3e.js";
import {
  f3e,
  KPr
} from "B:/~BUN/root/chunk-9921expb.js";
import {
  XZ
} from "B:/~BUN/root/chunk-3p1f5rvt.js";
import {
  Qu,
  Hd,
  p9
} from "B:/~BUN/root/chunk-ydzwkn0c.js";
import {
  ui
} from "B:/~BUN/root/chunk-3qp6kts8.js";
import {
  Wd,
  Ad
} from "B:/~BUN/root/chunk-gsxez0fk.js";
import {
  Hm
} from "B:/~BUN/root/chunk-w5bkq1td.js";
import {
  Qr
} from "B:/~BUN/root/chunk-0bx1tycm.js";
import {
  Yr
} from "B:/~BUN/root/chunk-n0832wgz.js";

function Xe(e, n, s, r) {
  var o = -1,
    i = e == null ? 0 : e.length;
  while (++o < i) {
    var f = e[o];
    n(r, f, s(f), e)
  }
  return r
}
var re = Xe;

function Qe(e, n) {
  return function(s, r) {
    if (s == null) return s;
    if (!Ode(s)) return e(s, r);
    var o = s.length,
      i = n ? o : -1,
      f = Object(s);
    while (n ? i-- : ++i < o)
      if (r(f[i], i, f) === !1) break;
    return s
  }
}
var se = Qe;
var et = se(Emt),
  y$n = et;

function nt(e, n, s, r) {
  return y$n(e, function(o, i, f) {
    n(r, o, s(o), f)
  }), r
}
var ie = nt;

function rt(e, n) {
  return function(s, r) {
    var o = kb(s) ? re : ie,
      i = n ? n() : {};
    return o(s, e, uH(r, 2), i)
  }
}
var ae = rt;
var st = ae(function(e, n, s) {
    e[s ? 0 : 1].push(n)
  }, function() {
    return [
      [],
      []
    ]
  }),
  NT = st;

function ot() {
  return at(Hz(le().env, "globalConfig"), ar("userSettings") ? Hz(he("userSettings")?.env, "userSettings") : {}, Hz(he("flagSettings")?.env, "flagSettings"), Hz(he("policySettings")?.env, "policySettings"))
}

function M() {
  return it(mI(), ot())
}

function it(e, n) {
  let s = new Set(Object.keys(n).map((o) => o.toUpperCase())),
    r = {
      ...e
    };
  for (let o of Object.keys(r))
    if (!(o in n) && s.has(o.toUpperCase())) delete r[o];
  return Object.assign(r, n)
}

function at(...e) {
  let n = new Map;
  for (let r of e)
    for (let [o, i] of Object.entries(r)) n.set(o.toUpperCase(), {
      key: o,
      value: i
    });
  let s = {};
  for (let {
      key: r,
      value: o
    }
    of n.values()) s[r] = o;
  return s
}

function W(e) {
  let n = {};
  for (let o of ["GIT_CONFIG_GLOBAL", "GIT_CONFIG_SYSTEM"]) {
    let i = JN(e, o);
    if (i !== void 0) n[o] = i
  }
  let s = JN(e, "GIT_CONFIG_COUNT"),
    r = Number(s);
  if (s === void 0 || !Number.isInteger(r) || r <= 0) return {
    env: n,
    count: void 0
  };
  n.GIT_CONFIG_COUNT = s;
  for (let o = 0; o < r; o++) {
    let i = JN(e, `GIT_CONFIG_KEY_${o}`);
    if (i === void 0) break;
    n[`GIT_CONFIG_KEY_${o}`] = i;
    let f = JN(e, `GIT_CONFIG_VALUE_${o}`);
    if (f !== void 0) n[`GIT_CONFIG_VALUE_${o}`] = f
  }
  return {
    env: n,
    count: s
  }
}
var ut = /^http\.(?:.*\.)?(?:ssl(?:cainfo|capath|verify|version|cipherlist|backend|try)|schannel(?:checkrevoke|usesslcainfo)|pinnedpubkey|proxysslcainfo)$/i;

function lt() {
  let {
    env: e,
    count: n
  } = W(M()), s = [];
  for (let r = 0; r < Number(n ?? 0); r++) {
    let o = e[`GIT_CONFIG_KEY_${r}`],
      i = e[`GIT_CONFIG_VALUE_${r}`];
    if (o === void 0) break;
    if (i !== void 0 && ut.test(o)) s.push([o, i])
  }
  return s.length === 0 ? {} : Qr(QN(void 0, s), (r) => r !== void 0)
}

function ctn(e, n) {
  return obo(e, {
    ...lt(),
    ...n
  })
}
async function Gqe(e, n, s = {}, {
  timeout: r
} = {}) {
  let o = dae(e),
    i = await Qtn(e, {
      envPins: s,
      pin: o
    });
  if (!i.ok) return {
    stdout: "",
    stderr: `git was not run: ${oIt(i)}.
`,
    code: 1
  };
  return de(Ve, e, n, s, i.entries, {
    repository: o,
    timeout: r
  })
}

function dtn(e, n, s = {}, r = {}) {
  let o = n.find((i, f) => !i.startsWith("-") && (f === 0 || n[f - 1] !== "-c"));
  if (o === void 0 || !ft.has(o)) throw new P(`gitInOwnWorkTree runs reads only, not git ${o??"(no subcommand)"}`, "gitInOwnWorkTree called with a non-read git subcommand");
  return de(tt, e, n, s, null, r)
}
var ft = new Set(["diff", "format-patch", "log", "show"]);
async function de(e, n, s, r, o, {
  repository: i,
  ...f
}) {
  let u = await e(yt(), s, {
    ...f,
    cwd: n,
    env: No({
      ...r,
      ...pe(o === null ? [] : fe([], o, []))
    }, {
      repository: i
    }),
    stdin: "ignore"
  });
  if (u.code === 0 || u.timedOut || u.maxBufferExceeded || f.abortSignal?.aborted) return u;
  let g = i ?? dae(Fn(n) ?? n),
    h = await mt(n, r, {
      repoFiltersOff: o !== null,
      repository: g
    });
  if (!h.retry) return h.forgone === void 0 ? u : ue(u, `No lazy fetch from the promisor remote was attempted: ${h.forgone}.`);
  t(`[git] ${n} is a partial clone: retrying with a constrained lazy fetch`);
  let S = await e(h.git, s, {
    ...f,
    cwd: n,
    env: No({
      ...r,
      ...h.env
    }, {
      base: h.operatorEnv,
      repository: g
    }),
    extendEnv: !1,
    stdin: "ignore"
  });
  return S.code !== 0 && h.userUnscopedExtraHeader ? ue(S, `The lazy fetch did not send your unscoped http.extraHeader: it would go to whichever host the repository's own config names as its promisor remote, here ${h.promisorUrl===void 0?"one it does not spell out":Hm(Jhn(pBe(h.promisorUrl)),gt)}. Only if you recognize and trust that host, scope the header to it (http.<that url>.extraHeader); otherwise leave it as it is.`) : S
}
var ct = /^(?:http\..*|url\..*\.(?:insteadof|pushinsteadof)|remote\..*\.(?:proxy|proxyauthmethod|uploadpack|receivepack|vcs)|credential\..*|core\.(?:sshcommand|askpass|gitproxy|alternaterefscommand|alternaterefsprefixes)|protocol\..*|fetch\.bundleuri|transfer\.bundleuri|bundle\..*|gpg\..*|ssh\..*)$/s,
  pt = /^(?:http\.(?:postbuffer|version|lowspeedlimit|lowspeedtime|maxrequests|minsessions|maxrequestbuffer)|protocol\.version)$/s,
  gt = {
    head: 70,
    tail: 20
  };

function ue(e, n) {
  let s = e.stderr.replace(/\n*$/, "");
  return {
    ...e,
    stderr: `${s}${s===""?"":`
`}${n}
`
  }
}

function fe(e, n, s) {
  return [
    ["credential.helper", ""], ...e, ["http.extraheader", ""],
    ["core.protectNTFS", "true"],
    ["core.protectHFS", "true"], ...s, ...$st(rIt(n.map(([r]) => r)))
  ]
}

function pe(e, n) {
  return e.length === 0 ? {} : Qr(QN(n, e), (s) => s !== void 0)
}
async function mt(e, n, {
  repoFiltersOff: s,
  repository: r
}) {
  let o = await St(e, r);
  if (o === null) return {
    retry: !1
  };
  let i = kt(M()),
    f = C_e("git", i.PATH ?? "");
  if (f === null) return {
    retry: !1,
    forgone: "no git executable is on an absolute PATH entry of the environment Claude Code was launched with"
  };
  let u = process.env,
    g = JN(u, "GIT_NO_LAZY_FETCH") ?? JN(i, "GIT_NO_LAZY_FETCH");
  if ([u, i].some((E) => {
      let A = JN(E, "GIT_NO_LAZY_FETCH");
      return A !== void 0 && Ne(A)
    })) return {
    retry: !1,
    forgone: "GIT_NO_LAZY_FETCH is set"
  };
  let h = [u, i].reduce((E, A) => {
    let ne = JN(A, "GIT_ALLOW_PROTOCOL")?.split(":");
    return ne === void 0 ? E : E.filter((Ze) => ne.includes(Ze))
  }, ["https", "ssh"]);
  if (h.length === 0) return {
    retry: !1,
    forgone: "GIT_ALLOW_PROTOCOL admits neither https nor ssh"
  };
  let S = W(i),
    k = await ge(e, ["--get-regexp", "^remote\\..*\\.(uploadpack|vcs)$"], r, S.env, i);
  if (!(k.exitCode === 1 && k.error === void 0 && !k.timedOut && !k.maxBufferExceeded)) return {
    retry: !1,
    forgone: k.code === 0 ? "a remote names an upload-pack or vcs program" : "git's configuration could not be read for a remote's upload-pack or vcs program"
  };
  let y = await Qtn(e, {
    envPins: n,
    pin: r
  });
  if (!y.ok) return {
    retry: !1,
    forgone: oIt(y)
  };
  let T = y.entries.find(([E]) => {
    let A = Q$n(E);
    return ct.test(A) && !pt.test(A)
  });
  if (T !== void 0) return {
    retry: !1,
    forgone: `the repository's own git config sets ${Z$n(T[0])} (${KEr})`
  };
  let R = await Ztn(e, "^(credential\\.(.*\\.)?helper|core\\.sshcommand|http\\.extraheader)$", {
    envPins: {
      ...n,
      ...S.env
    },
    base: i,
    repository: r
  });
  if (R === null) return {
    retry: !1,
    forgone: "your own git configuration could not be read"
  };
  let [v, je] = NT(R, ([E]) => E === "core.sshcommand"), [Ke, ze] = NT(je, ([E]) => E === "http.extraheader"), Ye = j(JN(i, "GIT_SSH_COMMAND")) ?? j(v.at(-1)?.[1]), U = j(JN(i, "GIT_SSH")), Je = bzr({
    ...No({}, {
      base: i
    }),
    GIT_SSH: U,
    GIT_SSH_COMMAND: Ye ?? (U === void 0 ? "ssh" : void 0)
  }), L = await Qtn(e, {
    envPins: n,
    pin: r
  });
  if (!L.ok || !So(L.entries, y.entries)) return {
    retry: !1,
    forgone: "the repository's git config changed while it was being vetted"
  };
  return {
    retry: !0,
    operatorEnv: i,
    git: f,
    env: {
      GIT_NO_LAZY_FETCH: g ?? "0",
      GIT_ALLOW_PROTOCOL: h.join(":"),
      GIT_SSH_COMMAND: Je.GIT_SSH_COMMAND ?? Yr([U ?? "ssh"]),
      GIT_ASKPASS: n.GIT_ASKPASS ?? JN(i, "GIT_ASKPASS") ?? "",
      SSH_ASKPASS: n.SSH_ASKPASS ?? JN(i, "SSH_ASKPASS") ?? "",
      ...S.env,
      ...pe(fe(ze, s ? L.entries : [], [
        ["core.alternateRefsCommand", ":"]
      ]), S.count)
    },
    userUnscopedExtraHeader: Ke.length > 0,
    promisorUrl: L.entries.findLast(([E]) => E === `remote.${o}.url`)?.[1] ?? void 0
  }
}
var ht = /^remote\.(.*)\.(promisor|partialclonefilter)$/s;
async function St(e, n = dae(e)) {
  let s = await ge(e, ["--get-regexp", "^(extensions\\.partialclone|remote\\..*\\.(promisor|partialclonefilter))$"], n);
  if (s.code !== 0) return null;
  let r = null,
    o = null;
  for (let i of s.stdout.split("\x00")) {
    let f = i.indexOf(`
`),
      u = f === -1 ? i : i.slice(0, f),
      g = f === -1 ? "true" : i.slice(f + 1);
    if (u === "extensions.partialclone") {
      r = g === "" ? r : g;
      continue
    }
    let [, h, S] = ht.exec(u) ?? [];
    if (o === null && h !== void 0 && (S === "partialclonefilter" || !["false", "no", "off", "0", ""].includes(g.toLowerCase()))) o = h
  }
  return r ?? o
}

function ge(e, n, s, r = {}, o) {
  return Ve(yt(), [...mn, "config", "--includes", "--null", ...n], {
    cwd: e,
    env: No(r, {
      base: o,
      repository: s
    }),
    ...o !== void 0 && {
      extendEnv: !1
    },
    timeout: 5000,
    preserveOutputOnError: !1,
    stdin: "ignore"
  })
}

function kt(e) {
  let n = {
      ...e
    },
    s = O() === "windows";
  for (let r of Object.keys(n))
    if (r === "PATH" || s && r.toUpperCase() === "PATH") delete n[r];
  return n.PATH = Mzr(da(e, "PATH") ?? ""), n
}

function j(e) {
  return e !== void 0 && e.trim() !== "" ? e : void 0
}
class me {
  liveProcessesByAgentId = new Map;
  stopPendingAgentIds = new Set;
  everRegisteredTaskIds = new Set;
  loopsByTaskId = new Map;
  pendingEscalationsByTaskId = new Map;
  inFlightProcessSweeps = new Set;
  dispose() {
    for (let e of this.pendingEscalationsByTaskId.values())
      for (let n of e.timers) clearTimeout(n);
    this.pendingEscalationsByTaskId.clear(), this.inFlightProcessSweeps.clear(), this.loopsByTaskId.clear(), this.everRegisteredTaskIds.clear(), this.liveProcessesByAgentId.clear(), this.stopPendingAgentIds.clear()
  }
}
var bt = new q(() => new me);

function HM() {
  return di(bt)
}

function utn(e) {
  return HM().everRegisteredTaskIds.has(e)
}

function Vqe(e, n, s = {}) {
  let {
    everRegisteredTaskIds: r,
    loopsByTaskId: o
  } = HM();
  r.add(e);
  let i = o.get(e);
  if (i) o.delete(e), K(i);
  let f = {
    killController: n,
    agentControllersByAgentId: new Map,
    settleCallbacks: [],
    settleRequiresEmptyAgentAssociations: s.settleRequiresEmptyAgentAssociations ?? !1,
    chainSettled: !1
  };
  return o.set(e, f), () => {
    if (o.get(e) !== f) return;
    if (f.chainSettled = !0, f.settleRequiresEmptyAgentAssociations && f.agentControllersByAgentId.size > 0) return;
    o.delete(e), K(f)
  }
}

function K(e) {
  for (let n of e.settleCallbacks) try {
    n()
  } catch (s) {
    d(s)
  }
}

function nb(e) {
  return !HM().loopsByTaskId.has(e)
}

function QDe(e) {
  return HM().loopsByTaskId.get(e)
}

function lst(e, n) {
  let s = HM().loopsByTaskId.get(e);
  if (!s) {
    try {
      n()
    } catch (r) {
      d(r)
    }
    return
  }
  s.settleCallbacks.push(n)
}

function Uyo(e) {
  return HM().loopsByTaskId.get(e)?.killController
}

function ptn(e, n, s) {
  HM().loopsByTaskId.get(e)?.agentControllersByAgentId.set(n, s)
}

function Byo(e, n) {
  let {
    loopsByTaskId: s
  } = HM(), r = s.get(e);
  if (!r) return;
  if (r.agentControllersByAgentId.delete(n), r.chainSettled && r.settleRequiresEmptyAgentAssociations && r.agentControllersByAgentId.size === 0) s.delete(e), K(r)
}

function Dke(e) {
  let n = HM().loopsByTaskId.get(e);
  return n ? [...n.agentControllersByAgentId.keys()] : []
}

function qqe(e) {
  let n = HM().loopsByTaskId.get(e);
  if (!n) return [];
  let s = [];
  for (let r of n.agentControllersByAgentId.values())
    if (r && !r.signal.aborted) s.push(r);
  return s
}
import {
  sep as Tt
} from "path";

function Se(e) {
  let n = new Map;
  if (!e) return n;
  try {
    let s = J(e);
    if (s && typeof s === "object") {
      for (let [r, o] of Object.entries(s))
        if (typeof o === "string") n.set(r, o)
    }
  } catch (s) {
    t(`[repo-checkouts] Failed to parse env map: ${l(s)}`, {
      level: "error"
    })
  }
  return n
}

function cst() {
  let e = Kr().repoCheckouts;
  if (e.checkouts) return e.checkouts;
  let n = a.CLAUDE_CODE_REPO_CHECKOUTS;
  if (!n) {
    let s = pg();
    return e.checkouts = new Map(s === null ? [] : [
      ["", s]
    ]), e.checkouts
  }
  return e.checkouts = Se(n), e.checkouts
}

function ye() {
  let e = Kr().repoCheckouts;
  if (e.baseRefs) return e.baseRefs;
  return e.baseRefs = Se(a.CLAUDE_CODE_BASE_REFS), e.baseRefs
}

function b$n(e) {
  for (let [n, s] of cst())
    if (e === s || e.startsWith(s + Tt)) return n;
  return
}
async function jyo(e) {
  Kr().repoCheckouts.onMetadataChanged = e;
  for (let [, n] of cst()) await BWr(n);
  jWr(() => void oEr())
}
async function oEr() {
  let e = cst();
  if (e.size === 0) return;
  let n = {};
  for (let [r, o] of e) {
    let i = await zWr(o);
    if (i !== void 0) n[r] = i
  }
  let s = Kr().repoCheckouts;
  if (So(n, s.lastEmittedBranches)) return;
  s.lastEmittedBranches = n, s.onMetadataChanged?.({
    current_branches: n
  })
}
class hR extends Error {
  subtype;
  constructor(e, n) {
    super(`control_request '${e}' got no response after ${n/1000}s \u2014 the worker may still apply it`);
    this.subtype = e
  }
}
class Qie extends Error {
  subtype;
  constructor(e) {
    super("Request was not delivered to the cloud session");
    this.subtype = e
  }
}

function mB(e) {
  if (e instanceof We) return "aborted";
  if (e instanceof hR) return "timeout";
  if (e instanceof Qie) return "not_delivered";
  if (e instanceof Error && (e.message.endsWith("Disconnected") || e.message.endsWith("Connection to remote lost"))) return "disconnected";
  if (e instanceof Error && (e.message.endsWith("not connected") || e.message.includes("Cannot send:"))) return "not_connected";
  return "server_error"
}
async function Wyo(e, n) {
  try {
    let s = await n();
    return _(e), s
  } catch (s) {
    if (s instanceof We) p(e, "aborted");
    else m(e, mB(s));
    throw s
  }
}

function zyo(e) {
  if (e.subtype === "error" && typeof e.error === "string") return Error(e.error);
  let n = e.subtype === "error" ? "non-string error" : `subtype ${typeof e.subtype==="string"?"unrecognized":typeof e.subtype}`;
  return Error(`Malformed control_response from worker (${n})`)
}
var JW = {
  register() {},
  update() {},
  updateTranscript() {},
  getTranscript() {
    return
  },
  remove() {},
  evictTerminal() {},
  applyOffsetsAndEvict() {},
  get() {
    return
  },
  all() {
    return {}
  },
  incrementWebSearchCalls() {},
  getWebSearchCalls() {
    return 0
  },
  resetWebSearchCalls() {},
  takeConcurrencySlot() {
    return () => {}
  },
  getConcurrentSubagents() {
    return 0
  }
};

function I(e, n) {
  return e !== void 0 && Object.hasOwn(e, n) ? e[n] : void 0
}
import {
  access as Rt,
  lstat as Re,
  readFile as Et,
  realpath as Ee
} from "fs/promises";
import {
  basename as z,
  dirname as V,
  isAbsolute as wt,
  join as H,
  relative as xt,
  sep as vt,
  win32 as At
} from "path";
var ZDe = {
  GIT_CONFIG_GLOBAL: "/dev/null",
  GIT_CONFIG_NOSYSTEM: "1"
};
var ftn = ["--no-optional-locks", "-c", "diff.relative=false", "diff", ...XWr, vb],
  Lke = 5000,
  D = 50,
  _t = 500,
  S$n = 1e6,
  PPt = 400,
  C = 500;
async function mtn(e, n, s = "auto", r, o) {
  if (r === void 0 && !w$n()) return null;
  if (await Ae(r)) return null;
  if (s === "branch") {
    let h = await ke(e, n, !0, r, void 0, o);
    return h === "base-stats-failed" ? null : h
  }
  let i = await F("HEAD", n, r, o);
  if (i === null) return Z(n, r, o);
  if (i.stats.filesCount > C) return {
    ...i,
    hunks: new Map,
    source: {
      kind: "working-tree"
    }
  };
  if (s === "session") return await Promise.all([Ct(i, r), G(i, n, r, void 0, !0, o)]), {
    ...i,
    hunks: new Map,
    source: {
      kind: "working-tree"
    }
  };
  let f = await G(i, n, r, void 0, !1, o);
  if (s === "branch-point") return Pt(e, n, i, r, o);
  if (s === "uncommitted" || i.stats.filesCount > 0) return {
    ...i,
    hunks: new Map,
    source: {
      kind: "working-tree"
    }
  };
  let u = await ke(e, n, !1, r, f, o),
    g = {
      ...i,
      hunks: new Map,
      source: {
        kind: "working-tree"
      }
    };
  if (u === "base-stats-failed") return xe(g, r);
  if (u === null || u.stats.filesCount === 0) return g;
  return u
}

function xe(e, n) {
  return n === void 0 || e.stats.filesCount > 0 ? e : null
}
async function ke(e, n, s, r, o, i) {
  let f = await Pe(e, n, r, void 0, i);
  if (f.kind === "error") return s ? Z(n, r, i) : null;
  let u, g;
  if (f.kind !== "merge-base") {
    if (!s) return null;
    u = await F("HEAD", n, r, i), g = f.kind === "head-is-base" ? {
      kind: "branch",
      baseBranch: f.baseBranch,
      baseRef: "HEAD"
    } : {
      kind: "working-tree"
    }
  } else u = await F(f.mergeBase, n, r, i), g = {
    kind: "branch",
    baseBranch: f.baseBranch,
    baseRef: f.mergeBase
  };
  if (u === null) return f.kind === "merge-base" ? "base-stats-failed" : Z(n, r, i);
  if (u.stats.filesCount <= C) await G(u, n, r, o, !1, i);
  return {
    ...u,
    hunks: new Map,
    source: g
  }
}
async function Pt(e, n, s, r, o) {
  let i = {
      ...s,
      hunks: new Map,
      source: {
        kind: "working-tree"
      }
    },
    f = Ie(r ?? IPt());
  if (f === null) return i;
  let u = await Pe(e, n, r, f, o);
  if (u.kind !== "merge-base") return i;
  let g = await F(u.mergeBase, n, r, o, C);
  if (g === null) return xe(i, r);
  if (g.stats.filesCount === 0) return i;
  let h = {
      ...g.stats
    },
    S = new Map;
  for (let [k, b] of s.perFileStats) {
    let y = g.perFileStats.get(k);
    if (!b.isUntracked) {
      S.set(k, y ?? b);
      continue
    }
    if (S.set(k, b), y === void 0) h.filesCount += 1;
    else h.linesAdded -= y.added, h.linesRemoved -= y.removed
  }
  for (let [k, b] of g.perFileStats) {
    if (S.size >= D) break;
    if (!S.has(k)) S.set(k, b)
  }
  return {
    stats: h,
    perFileStats: S,
    hunks: new Map,
    source: {
      kind: "branch",
      baseBranch: u.baseBranch,
      baseRef: u.mergeBase
    }
  }
}
async function Ct(e, n) {
  if (e.perFileStats.size === 0) return;
  let s = n ?? IPt(),
    r = Txe();
  await Promise.all(Array.from(e.perFileStats, async ([o, i]) => {
    try {
      let f = await Re(H(s, o));
      if (Math.max(f.mtimeMs, f.ctimeMs) < r) i.preSession = !0
    } catch {}
  }))
}
async function G(e, n, s, r, o = !1, i) {
  let f = D - e.perFileStats.size;
  if (f <= 0) return null;
  let u = r !== void 0 ? r : await Gt(f, n, s, o, i);
  if (u)
    for (let [g, h] of u) {
      if (e.perFileStats.has(g)) continue;
      e.perFileStats.set(g, h), e.stats.filesCount += 1
    }
  return u
}
async function Z(e, n, s) {
  if ((await tt(yt(), ["--no-optional-locks", "rev-parse", "--verify", "--quiet", "HEAD"], {
      timeout: Lke,
      preserveOutputOnError: !1,
      abortSignal: e,
      ...B(n, s),
      cwd: n
    })).exitCode !== 1) return null;
  let o = {
      stats: {
        filesCount: 0,
        linesAdded: 0,
        linesRemoved: 0
      },
      perFileStats: new Map,
      hunks: new Map,
      source: {
        kind: "working-tree"
      },
      noCommits: !0
    },
    i = await F("--cached", e, n, s);
  if (i !== null) {
    if (o.stats = i.stats, o.perFileStats = i.perFileStats, i.stats.filesCount > C) return o;
    if (i.stats.filesCount > 0) await It(o, e, n, s)
  }
  return await G(o, e, n, void 0, !1, s), o
}
async function It(e, n, s, r) {
  let o = await ve(n, s, r);
  if (o === null) return;
  for (let [i, f] of o.perFileStats) {
    let u = e.perFileStats.get(i);
    if (u === void 0) continue;
    let g = u.isBinary || f.isBinary,
      h = g ? 0 : Math.max(0, u.added + f.added - f.removed);
    e.stats.linesAdded += h - u.added, e.perFileStats.set(i, {
      added: h,
      removed: 0,
      isBinary: g,
      isUntracked: !1
    })
  }
}
async function ve(e, n, s) {
  let r = await tt(yt(), [...ftn, "--numstat"], {
    timeout: Lke,
    preserveOutputOnError: !1,
    abortSignal: e,
    ...B(n, s),
    cwd: n
  });
  if (r.code !== 0) return null;
  return ust(r.stdout, Number.POSITIVE_INFINITY, s === void 0 ? "all" : "within-root")
}
async function F(e, n, s, r, o = D) {
  if (r === void 0) {
    let {
      stdout: g,
      code: h
    } = await N([e, "--shortstat"], n, s, r);
    if (h === 0) {
      let S = ytn(g);
      if (S && S.filesCount > C) return {
        stats: S,
        perFileStats: new Map
      }
    }
  }
  let {
    stdout: i,
    code: f
  } = await N([e, "--numstat"], n, s, r);
  if (f !== 0) return null;
  let u = ust(i, o, r === void 0 ? "all" : "within-root");
  if (r !== void 0 && u.stats.filesCount > C) return {
    stats: u.stats,
    perFileStats: new Map
  };
  return u
}

function N(e, n, s, r) {
  let o = [...ftn, ...e],
    i = {
      timeout: Lke,
      preserveOutputOnError: !1,
      abortSignal: n
    };
  if (s !== void 0) return tt(yt(), o, {
    ...i,
    ...B(s, r),
    cwd: s,
    stdin: "ignore"
  });
  return dtn(ce().cwd(), o, {}, i)
}

function gtn(e) {
  let n = cKe(e);
  return n !== null && n.workTree !== null && n.gitDir === H(n.workTree, ".git") ? n : null
}

function Ot(e) {
  return {
    env: {
      ...No(void 0, {
        base: hs(),
        repository: gtn(e) ?? {
          gitDir: Fst,
          workTree: e,
          commonDir: Fst
        }
      }),
      ...ZDe,
      ...QN(void 0, txe())
    },
    extendEnv: !1
  }
}

function Ft(e) {
  return {
    env: {
      ...No(void 0, {
        base: hs(),
        repository: {
          gitDir: Fst,
          workTree: e,
          commonDir: Fst
        }
      }),
      ...ZDe
    },
    extendEnv: !1
  }
}

function B(e, n) {
  if (e === void 0) return {
    env: No()
  };
  return n ?? Ft(e)
}

function dst(e) {
  if (e.noCommits) return "--cached";
  return e.source.kind === "branch" ? e.source.baseRef : "HEAD"
}
async function Gyo(e, n = "HEAD") {
  if (!w$n()) return null;
  if (await Ae(void 0)) return null;
  let {
    stdout: s,
    code: r
  } = await N([n, "--shortstat"], e, void 0, void 0);
  if (r === 0) {
    let u = ytn(s);
    if (u && u.filesCount > C) return {
      hunks: new Map,
      skippedLarge: new Set
    }
  }
  let {
    stdout: o,
    code: i
  } = await N([...zft, n], e, void 0, void 0);
  if (i !== 0) return null;
  let f = aEr(o);
  if (n === "--cached" && f.hunks.size > 0) {
    let u = await ve(e, void 0, void 0);
    if (u === null) return null;
    for (let g of u.perFileStats.keys()) f.hunks.delete(g)
  }
  return f
}

function Kqe() {
  return ce().cwd()
}

function w$n() {
  let e = Kqe(),
    n = Kd().diffCheckoutIsRepo,
    s = n.get(e);
  if (s !== void 0) return s;
  let r = tS(e) !== null;
  return n.set(e, r), r
}

function IPt() {
  let e = Kqe();
  return Fn(e) ?? e
}
async function htn(e, n) {
  let {
    stdout: s,
    code: r
  } = await tt(yt(), ["--no-optional-locks", "rev-parse", "--show-toplevel"], {
    timeout: Lke,
    preserveOutputOnError: !1,
    abortSignal: e,
    ...n === void 0 ? {
      env: No()
    } : Ot(n),
    cwd: n
  });
  if (r !== 0 || s.trim() === "") return null;
  return s.trim()
}

function ust(e, n = D, s = "all") {
  let r = e.trim().split(`
`).filter(Boolean),
    o = 0,
    i = 0,
    f = 0,
    u = new Map;
  for (let g of r) {
    let h = g.split("\t");
    if (h.length < 3) continue;
    let S = h.slice(2).join("\t");
    if (s === "within-root" && !v$n(S)) continue;
    f++;
    let k = h[0],
      b = h[1],
      y = k === "-" || b === "-",
      T = y ? 0 : parseInt(k ?? "0", 10) || 0,
      R = y ? 0 : parseInt(b ?? "0", 10) || 0;
    if (o += T, i += R, u.size < n) u.set(S, {
      added: T,
      removed: R,
      isBinary: y,
      isUntracked: !1
    })
  }
  return {
    stats: {
      filesCount: f,
      linesAdded: o,
      linesRemoved: i
    },
    perFileStats: u
  }
}

function v$n(e) {
  let n = Dt(e);
  return n !== null && n.every((s) => !wt(s) && !At.isAbsolute(s) && !/^[A-Za-z]:/.test(s) && s.split(/[/\\{}]/).every((r) => iEr(r) !== ".."))
}

function Dt(e) {
  if (e.startsWith('"')) {
    let u = Y(e);
    if (u === -1) return null;
    let g = pst(e.slice(1, u)),
      h = e.slice(u + 1);
    if (h === "") return [g];
    let S = h.startsWith(" => ") ? h.slice(4) : null;
    if (S === null) return null;
    if (!S.startsWith('"')) return S.includes('"') || S.includes(" => ") ? null : [g, S];
    return Y(S) === S.length - 1 ? [g, pst(S.slice(1, -1))] : null
  }
  let n = e.indexOf(" => ");
  if (n === -1) return e.includes('"') ? null : [e];
  if (e.indexOf(" => ", n + 1) !== -1) return null;
  let s = e.slice(0, n),
    r = e.slice(n + 4);
  if (s.includes('"')) return null;
  if (r.startsWith('"')) return Y(r) === r.length - 1 ? [s, pst(r.slice(1, -1))] : null;
  if (r.includes('"')) return null;
  let o = [s, r],
    i = s.indexOf("{"),
    f = r.indexOf("}");
  if (s.indexOf("{", i + 1) !== -1 || r.indexOf("}", f + 1) !== -1) return null;
  if (i !== -1 && f !== -1) {
    let u = s.slice(0, i),
      g = r.slice(f + 1);
    o.push(`${u}${s.slice(i+1)}${g}`, `${u}${r.slice(0,f)}${g}`)
  }
  return o
}

function Y(e) {
  for (let n = 1; n < e.length; n++)
    if (e[n] === "\\") n++;
    else if (e[n] === '"') return n;
  return -1
}

function iEr(e) {
  let n = e.length;
  for (;;) {
    let s = n;
    while (s > 0 && e[s - 1] === " ") s--;
    let r = e.slice(0, s);
    if (r === "." || r === "..") return r;
    let o = s;
    while (o > 0 && e[o - 1] === ".") o--;
    if (o === n) return r;
    n = o
  }
}

function pst(e) {
  let n = [],
    s = Array.from(e);
  for (let r = 0; r < s.length; r++) {
    let o = s[r];
    if (o !== "\\") {
      n.push(...Buffer.from(o, "utf8"));
      continue
    }
    let i = s[r + 1] ?? "",
      f = s.slice(r + 1, r + 4).join("");
    if (/^[0-3][0-7]{2}$/.test(f)) {
      n.push(parseInt(f, 8)), r += 3;
      continue
    }
    let g = {
      n: 10,
      t: 9,
      r: 13,
      b: 8,
      a: 7,
      f: 12,
      v: 11,
      '"': 34,
      "\\": 92
    } [i];
    if (g !== void 0) n.push(g), r += 1;
    else n.push(92)
  }
  return Buffer.from(n).toString("utf8")
}

function aEr(e) {
  let n = new Map,
    s = new Set;
  if (!e.trim()) return {
    hunks: n,
    skippedLarge: s
  };
  let r = e.split(/^diff --git /m).filter(Boolean);
  for (let o of r) {
    if (n.size + s.size >= D) break;
    let i = o.indexOf(`
`),
      f = i === -1 ? o : o.slice(0, i),
      u = f.match(/^a\/(.+) b\/\1$/),
      g = u ?? f.match(/^(?:"a\/((?:[^"\\]|\\.)*)"|a\/(.+?)) (?:"b\/((?:[^"\\]|\\.)*)"|b\/(.+))$/);
    if (!g) continue;
    let h = u ? u[1] : g[3] !== void 0 ? pst(g[3]) : g[4] ?? (g[1] !== void 0 ? pst(g[1]) : g[2] ?? "");
    if (o.length > S$n) {
      s.add(h);
      continue
    }
    let S = o.split(`
`),
      k = [],
      b = null,
      y = 0;
    for (let T = 1; T < S.length; T++) {
      let R = S[T] ?? "",
        v = R.match(/^@@ -(\d+)(?:,(\d+))? \+(\d+)(?:,(\d+))? @@/);
      if (v) {
        if (b) k.push(b);
        b = {
          oldStart: parseInt(v[1] ?? "0", 10),
          oldLines: parseInt(v[2] ?? "1", 10),
          newStart: parseInt(v[3] ?? "0", 10),
          newLines: parseInt(v[4] ?? "1", 10),
          lines: []
        };
        continue
      }
      if (b === null && (R.startsWith("index ") || R.startsWith("---") || R.startsWith("+++") || R.startsWith("new file") || R.startsWith("deleted file") || R.startsWith("old mode") || R.startsWith("new mode") || R.startsWith("Binary files"))) continue;
      if (b && (R.startsWith("+") || R.startsWith("-") || R.startsWith(" ") || R === "")) {
        if (y >= PPt) continue;
        b.lines.push("" + R), y++
      }
    }
    if (b) k.push(b);
    if (k.length > 0) n.set(h, k)
  }
  return {
    hunks: n,
    skippedLarge: s
  }
}
async function Ae(e) {
  let n = await S2(e ?? Kqe());
  if (!n) return !1;
  return (await Promise.all(["MERGE_HEAD", "REBASE_HEAD", "CHERRY_PICK_HEAD", "REVERT_HEAD"].map((o) => Rt(H(n, o)).then(() => !0).catch(() => !1)))).some(Boolean)
}
class _e {
  #e = !1;
  #t = !1;
  get baseResolveOkLogged() {
    return this.#e
  }
  get baseResolveSadLogged() {
    return this.#t
  }
  markBaseResolveOkLogged() {
    this.#e = !0
  }
  markBaseResolveSadLogged() {
    this.#t = !0
  }
}
var Bt = new q(() => new _e);
async function Pe(e, n, s, r, o) {
  let i = Bt.of(e),
    f = await Mt(n, s, r, o);
  if (f.kind === "error") {
    if (!i.baseResolveSadLogged) i.markBaseResolveSadLogged(), p("diff_base_resolve", f.reason)
  } else if (!i.baseResolveOkLogged) i.markBaseResolveOkLogged(), _("diff_base_resolve", {
    outcome: c(f.kind)
  });
  return f
}
async function Mt(e, n, s, r) {
  let o = {
      timeout: Lke,
      abortSignal: e,
      ...B(n, r)
    },
    [i, f] = await Promise.all([Xl(n, o), tE(n, o)]);
  if (!i || i === "HEAD") return {
    kind: "none"
  };
  let u = s ?? f;
  if (u.startsWith("-")) return {
    kind: "none"
  };
  if (i === u) return {
    kind: "head-is-base",
    baseBranch: u
  };
  let g = {
      ...o,
      preserveOutputOnError: !1,
      cwd: n
    },
    h = !1,
    S = await Ce(u, async (b) => {
      let y = await tt(yt(), b, g);
      if (y.exitCode === 1) h = !0;
      return y
    });
  if (!S) {
    if (h) return {
      kind: "none"
    };
    for (let b of [`refs/remotes/origin/${u}`, `refs/heads/${u}`]) {
      let y = await tt(yt(), ["--no-optional-locks", "show-ref", "--verify", "--quiet", b], g);
      if (y.exitCode === 0 || y.exitCode === void 0) return {
        kind: "error",
        reason: "merge_base_failed"
      }
    }
    return {
      kind: "none"
    }
  }
  let k = await tt(yt(), ["--no-optional-locks", "rev-parse", "HEAD"], g);
  if (k.code !== 0) return {
    kind: "error",
    reason: "head_rev_parse_failed"
  };
  if (k.stdout.trim() === S) return {
    kind: "head-is-base",
    baseBranch: u
  };
  return {
    kind: "merge-base",
    mergeBase: S,
    baseBranch: u
  }
}
async function Gt(e, n, s, r = !1, o) {
  let {
    stdout: i,
    code: f
  } = await tt(yt(), ["--no-optional-locks", "ls-files", "--others", "--exclude-standard", "--full-name"], {
    timeout: Lke,
    preserveOutputOnError: !1,
    abortSignal: n,
    ...B(s, o),
    cwd: s
  });
  if (f !== 0 || !i.trim()) return null;
  let u = i.trim().split(`
`).filter((y) => y !== "" && (o === void 0 || v$n(y)));
  if (u.length === 0) return null;
  let g = s ?? IPt(),
    h = Txe(),
    S = await Promise.all(u.slice(0, _t).map(async (y) => {
      try {
        let T = await Re(H(g, y));
        return {
          filePath: y,
          preSession: Math.max(T.mtimeMs, T.ctimeMs) < h
        }
      } catch {
        return {
          filePath: y,
          preSession: !1
        }
      }
    })),
    k = S.filter((y) => !y.preSession);
  if (r) k.push(...S.filter((y) => y.preSession));
  if (k.length === 0) return null;
  let b = new Map;
  for (let {
      filePath: y,
      preSession: T
    }
    of k.slice(0, e)) b.set(y, {
    added: 0,
    removed: 0,
    isBinary: !1,
    isUntracked: !0,
    ...T && {
      preSession: T
    }
  });
  return b
}

function ytn(e) {
  let n = e.match(/(\d+)\s+files?\s+changed(?:,\s+(\d+)\s+insertions?\(\+\))?(?:,\s+(\d+)\s+deletions?\(-\))?/);
  if (!n) return null;
  return {
    filesCount: parseInt(n[1] ?? "0", 10),
    linesAdded: parseInt(n[2] ?? "0", 10),
    linesRemoved: parseInt(n[3] ?? "0", 10)
  }
}
var Nt = 3000;

function k$n() {
  if (a.CLAUDE_CODE_REMOTE) return !0;
  return R1() && x("tengu_bridge_child_tool_diff", !0)
}
var Ht = 65536;

function E$n(e) {
  return Boolean(a.CLAUDE_CODE_REMOTE) || Buffer.byteLength(e.patch, "utf8") <= Ht
}
async function T$n(e) {
  let n = Fn(V(e));
  if (!n) return null;
  let s = await Ee(n).catch(() => null);
  if (s === null) return null;
  let r = await be(s);
  if (r === null) return null;
  let o = Te(r),
    i = [we(), ...a.CLAUDE_CODE_REPO_CHECKOUTS ? cst().values() : []],
    f = null;
  for (let b of i) {
    let y = await be(b);
    if (y === null) continue;
    if (y === r) {
      f = y;
      break
    }
    let T = Te(y);
    if (f === null && T === o) f = T
  }
  if (f === null) return null;
  let u = {
      gitDir: f,
      workTree: s
    },
    g = xt(n, e).split(vt).join("/"),
    h = TWr(),
    {
      code: S
    } = await X(u, ["--no-optional-locks", "ls-files", "--error-unmatch", "--", g]);
  if (S === 0) {
    let b = await Wt(u, n),
      {
        stdout: y,
        code: T
      } = await X(u, [...ftn, ...zft, b, "--", g]);
    if (T !== 0) return null;
    if (!y) return null;
    return {
      ...Ut(g, y, "modified"),
      repository: h
    }
  }
  let k = await $t(g, e);
  if (!k) return null;
  return {
    ...k,
    repository: h
  }
}

function Ut(e, n, s) {
  let r = n.split(`
`),
    o = [],
    i = !1,
    f = 0,
    u = 0;
  for (let g of r) {
    if (g.startsWith("@@")) i = !0;
    if (i) {
      if (o.push(g), g.startsWith("+") && !g.startsWith("+++")) f++;
      else if (g.startsWith("-") && !g.startsWith("---")) u++
    }
  }
  return {
    filename: e,
    status: s,
    additions: f,
    deletions: u,
    changes: f + u,
    patch: o.join(`
`)
  }
}
async function Ce(e, n) {
  let s = [];
  for (let f of [`origin/${e}`, e]) {
    let {
      stdout: u,
      code: g
    } = await n(["--no-optional-locks", "merge-base", "HEAD", f]);
    if (g === 0 && u.trim()) s.push(u.trim())
  }
  let [r, o] = s;
  if (!r) return null;
  if (!o || r === o) return r;
  let {
    code: i
  } = await n(["--no-optional-locks", "merge-base", "--is-ancestor", r, o]);
  return i === 0 ? o : r
}
async function be(e) {
  let n = await S2(e);
  return n === null ? null : Ee(n).catch(() => null)
}

function Te(e) {
  let n = V(e),
    s = V(n);
  return z(e) !== ".git" && z(n) === "worktrees" && z(s).endsWith(".git") ? s : e
}

function X({
  gitDir: e,
  workTree: n
}, s) {
  return Ve(yt(), [`--git-dir=${e}`, `--work-tree=${n}`, ...s], {
    cwd: n,
    timeout: Nt,
    env: No()
  })
}

function Ie(e) {
  let n = b$n(e),
    s = (n !== void 0 ? ye().get(n) : void 0) || a.CLAUDE_CODE_BASE_REF;
  if (!s) return;
  return s.startsWith("-") ? null : s
}
async function Wt(e, n) {
  let s = Ie(n);

  function r(f) {
    return X(e, f)
  }
  if (s === void 0) {
    let f = await tE();
    if (f.startsWith("-")) return "HEAD";
    return await Ce(f, r) ?? "HEAD"
  }
  let {
    stdout: o,
    code: i
  } = await r(["--no-optional-locks", "merge-base", "HEAD", s ?? "HEAD"]);
  if (i === 0 && o.trim()) return o.trim();
  return "HEAD"
}
async function $t(e, n) {
  try {
    if (!await fmn(n, S$n)) return null;
    let r = (await Et(n, "utf-8")).split(`
`);
    if (r.length > 0 && r.at(-1) === "") r.pop();
    let o = r.length,
      i = r.map((u) => `+${u}`).join(`
`),
      f = `@@ -0,0 +1,${o} @@
${i}`;
    return {
      filename: e,
      status: "added",
      additions: o,
      deletions: 0,
      changes: o,
      patch: f
    }
  } catch {
    return null
  }
}
var eLe = [],
  jt = new Set,
  fst = {
    messages: eLe,
    inProgressToolUseIDs: jt
  };

function C$n(e, n, s) {
  let r = e[n] ?? fst,
    o = r.inProgressToolUseIDs,
    i;
  switch (s.action) {
    case "add": {
      i = new Set(o);
      for (let f of s.ids) i.add(f);
      break
    }
    case "remove": {
      i = new Set(o);
      for (let f of s.ids) i.delete(f);
      if (i.size === o.size) return e;
      break
    }
    case "clear":
      if (o.size === 0) return e;
      i = new Set;
      break;
    default:
      return e
  }
  return {
    ...e,
    [n]: {
      ...r,
      inProgressToolUseIDs: i
    }
  }
}
var mst = 3000,
  yR = 30000,
  Yqe = 30000;

function OPt(e, n) {
  for (let s of Object.values(e))
    if (s.id !== n && (s.type === "in_process_teammate" || s.type === "local_agent" && s.agentType !== "main-session") && !ui(s.status) && !s.isIdle) return !0;
  return !1
}

function Eg(e, n) {
  let s = 0;
  return {
    register(r) {
      qt(r, n)
    },
    update(r, o) {
      Kt(r, n, o)
    },
    updateTranscript(r, o) {
      n((i) => {
        let f = I(i.transcripts, r) ?? fst,
          u = o(f);
        if (u === f) return i;
        return {
          ...i,
          transcripts: {
            ...i.transcripts,
            [r]: u
          }
        }
      })
    },
    getTranscript(r) {
      return I(e().transcripts, r)
    },
    remove(r) {
      er().taskEvicted.emit(r), n((o) => {
        if (!Object.hasOwn(o.tasks, r)) return o;
        let {
          [r]: i, ...f
        } = o.tasks, u = o.transcripts ?? {}, {
          [r]: g,
          ...h
        } = u;
        return {
          ...o,
          tasks: f,
          transcripts: r in u ? h : u
        }
      })
    },
    evictTerminal(r) {
      Vt(r, n)
    },
    applyOffsetsAndEvict(r, o) {
      Jt(n, r, o)
    },
    get(r) {
      return I(e().tasks, r)
    },
    all() {
      return e().tasks
    },
    incrementWebSearchCalls() {
      s++
    },
    getWebSearchCalls() {
      return s
    },
    resetWebSearchCalls() {
      s = 0
    },
    takeConcurrencySlot() {
      n((o) => ({
        ...o,
        runningSubagents: o.runningSubagents + 1
      }));
      let r = !1;
      return () => {
        if (r) return;
        r = !0, n((o) => {
          let i = Math.max(0, o.runningSubagents - 1);
          if (i === o.runningSubagents) return o;
          return {
            ...o,
            runningSubagents: i
          }
        })
      }
    },
    getConcurrentSubagents() {
      return e().runningSubagents
    }
  }
}

function Kt(e, n, s) {
  let r = null,
    o = null,
    i = !1;
  if (n((f) => {
      let u = I(f.tasks, e);
      if (!u) return f;
      let g = s(u);
      if (g === u) return f;
      if (r = zt(u, g), i = Hd(g), !ui(u.status) && ui(g.status)) o = {
        status: g.status === "completed" ? "completed" : g.status === "failed" ? "failed" : "stopped",
        opts: {
          toolUseId: g.toolUseId,
          summary: g.terminal?.summary ?? g.description,
          outputFile: "webFetchSavedFiles" in g && g.webFetchSavedFiles !== void 0 ? void 0 : g.terminal?.output_file ?? g.outputFile,
          usage: g.terminal?.usage,
          resourceLinks: g.terminal?.resource_links,
          skipTranscript: g.skipTranscript,
          ambient: p9(g)
        }
      };
      return {
        ...f,
        tasks: {
          ...f.tasks,
          [e]: g
        }
      }
    }), r !== null && !i) za({
    type: "system",
    subtype: "task_updated",
    task_id: e,
    patch: r
  });
  if (o !== null && !i) Si(e, o.status, o.opts)
}

function zt(e, n) {
  let s = {};
  if (n.status !== e.status) s.status = n.status;
  if (n.description !== e.description) s.description = n.description;
  if (n.endTime !== e.endTime) s.end_time = n.endTime;
  if (n.totalPausedMs !== e.totalPausedMs) s.total_paused_ms = n.totalPausedMs;
  let r = "error" in e ? e.error : void 0,
    o = "error" in n ? n.error : void 0;
  if (o !== r && o !== void 0) s.error = o;
  let i = "isBackgrounded" in e ? e.isBackgrounded : void 0,
    f = "isBackgrounded" in n ? n.isBackgrounded : void 0;
  if (f !== i && f !== void 0) s.is_backgrounded = f;
  return Object.keys(s).length > 0 ? s : null
}

function Yt(e) {
  if (e.type === "local_bash") return "agentId" in e && e.agentId !== void 0 ? !0 : void 0;
  return
}

function qt(e, n) {
  let s = dNr(e.id),
    r = !1,
    o = e;
  n((f) => {
    let u = f.tasks[e.id];
    r = u !== void 0;
    let g = u && "retain" in u ? {
      ...e,
      retain: u.retain,
      startTime: u.startTime,
      diskLoaded: u.diskLoaded,
      pendingMessages: u.pendingMessages,
      keepaliveReasons: u.keepaliveReasons,
      ownerAgentId: u.ownerAgentId,
      parentAgentId: u.parentAgentId,
      ...u.spawnDepth !== void 0 && {
        spawnDepth: u.spawnDepth
      },
      ...u.isObserver !== void 0 && {
        isObserver: u.isObserver
      },
      ...u.forkedSkillName !== void 0 && {
        forkedSkillName: u.forkedSkillName
      },
      ...u.userStopCount !== void 0 && {
        userStopCount: u.userStopCount
      },
      ...u.handbackRecipient !== void 0 && {
        handbackRecipient: u.handbackRecipient
      },
      ...u.handbackReport !== void 0 && {
        handbackReport: u.handbackReport
      },
      ...u.webFetchSavedFiles !== void 0 && {
        webFetchSavedFiles: u.webFetchSavedFiles
      },
      ...u.spawnedSubagent !== void 0 && {
        spawnedSubagent: u.spawnedSubagent
      },
      ..."progress" in u && u.progress !== void 0 && {
        progress: u.progress
      }
    } : e;
    return o = g, {
      ...f,
      tasks: {
        ...f.tasks,
        [e.id]: g
      }
    }
  });
  let i = s && !ui(e.status);
  if (r && !i) return;
  if (Hd(e)) return;
  za({
    type: "system",
    subtype: "task_started",
    task_id: e.id,
    owned_by_subagent: Yt(e),
    tool_use_id: e.toolUseId,
    description: e.description,
    subagent_type: "agentType" in e ? e.agentType : void 0,
    is_backgrounded: "isBackgrounded" in o ? o.isBackgrounded : void 0,
    spawn_depth: "spawnDepth" in o ? o.spawnDepth : void 0,
    task_type: e.type,
    workflow_name: "workflowName" in e ? e.workflowName : void 0,
    prompt: "prompt" in e ? e.prompt : void 0,
    skip_transcript: e.skipTranscript,
    ...p9(e) && {
      ambient: !0
    }
  })
}

function Vt(e, n) {
  let s = !1;
  if (n((r) => {
      let o = I(r.tasks, e);
      if (!o) return r;
      if (!ui(o.status)) return r;
      if (!o.notified) return r;
      if ("retain" in o && (o.evictAfter ?? 1 / 0) > Date.now()) return r;
      if ("retain" in o && (o.keepaliveReasons?.size ?? 0) > 0) return r;
      if (o.type === "local_workflow" && ((o.evictAfter ?? 0) > Date.now() || !nb(e))) return r;
      if (o.type === "mcp_task" && (o.endTime ?? 0) + yR > Date.now()) return r;
      s = !0;
      let {
        [e]: i, ...f
      } = r.tasks, u = r.transcripts ?? {}, {
        [e]: g,
        ...h
      } = u;
      return {
        ...r,
        tasks: f,
        transcripts: e in u ? h : u
      }
    }), s) er().taskEvicted.emit(e)
}

function Zie(e) {
  let n = e.tasks ?? {};
  return Object.values(n).filter((s) => s.status === "running")
}
async function Vyo(e) {
  let n = [],
    s = {},
    r = [];
  for (let o of Object.values(e)) {
    if (o.notified) switch (o.status) {
      case "completed":
      case "failed":
      case "killed":
        r.push(o.id);
        continue;
      case "pending":
        continue;
      case "running":
        break
    }
    if (o.status === "running" && o.outputFile !== void 0) {
      let i = await VIr(o.id, o.outputOffset);
      if (i.content) s[o.id] = i.newOffset
    }
  }
  return {
    attachments: n,
    updatedTaskOffsets: s,
    evictedTaskIds: r
  }
}

function Jt(e, n, s) {
  let r = Object.keys(n);
  if (r.length === 0 && s.length === 0) return;
  let o = [];
  e((i) => {
    let f = !1,
      u = {
        ...i.tasks
      };
    for (let h of r) {
      let S = u[h];
      if (S?.status === "running") u[h] = {
        ...S,
        outputOffset: n[h]
      }, f = !0
    }
    for (let h of s) {
      let S = u[h];
      if (!S || !ui(S.status) || !S.notified) continue;
      if ("retain" in S && (S.evictAfter ?? 1 / 0) > Date.now()) continue;
      if ("retain" in S && (S.keepaliveReasons?.size ?? 0) > 0) continue;
      if (S.type === "local_workflow" && ((S.evictAfter ?? 0) > Date.now() || !nb(h))) continue;
      if (S.type === "mcp_task" && (S.endTime ?? 0) + yR > Date.now()) continue;
      delete u[h], dNr(h), o.push(h), f = !0
    }
    if (!f) return i;
    let g;
    for (let h of o)
      if (i.transcripts && h in i.transcripts) g ??= {
        ...i.transcripts
      }, delete g[h];
    return {
      ...i,
      tasks: u,
      ...g && {
        transcripts: g
      }
    }
  });
  for (let i of o) er().taskEvicted.emit(i)
}

function In(e) {
  return typeof e === "object" && e !== null && "type" in e && e.type === "local_agent"
}

function _tn(e) {
  return In(e) && e.status === "running" && !e.isBackgrounded && e.parentAgentId === void 0
}

function gst(e, {
  userInitiated: n = !1
} = {}) {
  if (!In(e)) return !1;
  if (n) return !0;
  return e.stoppedByUser !== !0 && (e.status === "running" || e.status === "completed")
}

function A$n(e) {
  return In(e) ? e.userStopCount ?? 0 : 0
}

function hst(e, n) {
  if (!In(e)) return !1;
  let s = A$n(e);
  return (n ?? e.pendingMessages).some((r) => r.userInitiatedAt === s)
}
var lEr = "kill-unsettled";

function XP(e) {
  return e.keepaliveReasons ?? new Set
}

function VA(e, n, s) {
  if (!e) return;
  s.update(e, (r) => {
    if (!In(r) || XP(r).has(n)) return r;
    return {
      ...r,
      keepaliveReasons: new Set(XP(r)).add(n)
    }
  })
}

function _R(e, n, s) {
  if (!e) return;
  s.update(e, (r) => {
    if (!In(r) || !XP(r).has(n)) return r;
    let o = new Set(XP(r));
    o.delete(n);
    let i = o.size === 0 && ui(r.status) && !r.retain;
    return {
      ...r,
      keepaliveReasons: o,
      ...i && r.evictAfter === void 0 && {
        evictAfter: Date.now() + yR
      }
    }
  })
}

function Q(e) {
  let n = Qu(e) ? e : void 0,
    s = !n && In(e) ? e : void 0;
  return {
    teammate: n,
    localAgent: s
  }
}

function MPt(e, n) {
  return Q(e ? n[e] : void 0)
}

function qyo(e) {
  let {
    teammate: n,
    localAgent: s
  } = Q(e);
  return (n ?? s)?.id ?? qe()
}

function Kyo({
  viewedTask: e,
  transcript: n,
  mainIsBusy: s,
  mainConversationId: r
}) {
  let {
    teammate: o,
    localAgent: i
  } = Q(e), f = o ?? i;
  return {
    task: f,
    isMain: !f,
    isTeammate: !!o,
    messages: n.messages,
    inProgressToolUseIDs: n.inProgressToolUseIDs,
    conversationKey: f ? f.id : r,
    isLoading: f ? f.status === "running" && !f.isIdle : s
  }
}
var Oe = Me();
var Fe = Me();
var Zt = {
  event: "ui.render",
  component: "AskUserQuestion",
  drawnBy: "AskUserQuestionPermissionDialog"
};

function Be() {
  let e = [],
    n = [Zt],
    s = [];
  return {
    plugins: () => e,
    setPlugins: (r) => {
      e = r
    },
    renderSites: () => n,
    setRenderSites: (r) => {
      n = r
    },
    interfaces: () => s,
    setInterfaces: (r) => {
      s = r
    }
  }
}
var xPt = Be();
var rEr = Oe.subscribe;
var _$n = (e) => dt().loadedModules.find((n) => n.name === e);
var nEr = (e) => _$n(e)?.args;
var ast = Fe.emit;

function Le(e) {
  return e.owner === void 0 ? {
    name: e.name,
    methods: [...e.methods],
    suppressedBy: e.suppressedBy
  } : {
    name: e.name,
    methods: [...e.methods],
    owner: e.owner
  }
}
var ee = (e) => ({
  name: e.name,
  events: [...e.events],
  calls: [...e.calls],
  tier: e.tier,
  generation: e.generation
});
var $yo = (e) => xPt.plugins().flatMap((n) => {
  let s = n.events.find((r) => x6(r, e));
  if (s === void 0) return [];
  return [{
    plugin: n.name,
    tier: n.tier,
    hook: s,
    generation: n.generation
  }]
});
var an = () => xPt.plugins().map(ee);
var Kzo = (e) => xPt.setInterfaces(e.map(Le));

function Yzo(e) {
  xPt.setPlugins(e.map(ee)), Oe.emit(an())
}
var Xzo = (e) => xPt.setRenderSites(e.map((n) => ({
  ...n
})));
var Jzo = Fe.subscribe;
import {
  sep as He
} from "path";

function sEr(e, n) {
  let s = n.endsWith(He) ? n : n + He;
  if (O() === "windows") return e.toLowerCase().startsWith(s.toLowerCase());
  return e.startsWith(s)
}

function dn(e) {
  return e.startsWith("/") ? "/" : "\\"
}

function Jie(e, n, s) {
  let r = s ? e.toLowerCase() : e,
    o = s ? n.toLowerCase() : n;
  if (r === o) return !0;
  let i = dn(o),
    f = o.endsWith(i) ? o : o + i;
  return r.startsWith(f)
}
var fn = [Ad, Wd];

function R$n(e) {
  let n = _$n(e);
  return n !== void 0 && n.status().kind === "live" && fn.some((s) => n.args.pluginStorageId === `${e}@${s}`)
}

function btn() {
  return !Lt() && VF(XZ)?.isAvailable?.() === !0 && Qle().enabled.some((e) => e.name === XZ) && R$n(XZ)
}

function Nke() {
  return !x("tengu_jazzy_ripple", !1)
}
import {
  isAbsolute as Ue,
  resolve as $e
} from "path";
import {
  pathToFileURL as cn
} from "url";

function FM(e) {
  try {
    let n = iM(e),
      s = iM($e(n));
    if (Nd(n) || Dn(s) || f3e(n) || f3e(s)) return null;
    let r = cn(n);
    return r.hostname !== "" || KPr(r.href) ? null : r.href
  } catch {
    return null
  }
}

function Stn(e) {
  let n = /^file:/i.test(e);
  if (!n) return e;
  let s = n ? e.slice(5) : e;
  if (s.startsWith("//")) {
    if (s = s.slice(2), s === "localhost") s = "/";
    else if (s.startsWith("localhost/")) s = s.slice(9)
  }
  let r = s.search(/[#?]/),
    o = r === -1 ? "" : s.slice(r),
    i = r === -1 ? s : s.slice(0, r);
  if (i === "") return null;
  try {
    i = decodeURIComponent(i)
  } catch {}
  i = pn(i);
  let f = Ue(i) ? i : $e(oe(), i),
    u = FM(f);
  if (u === null) return null;
  let g = u + o;
  return KPr(g) ? null : g
}

function pn(e, n = Ue) {
  if (/^\/[A-Za-z]:(?=[\\/]|$)/.test(e) && n(e.slice(1))) return e.slice(1);
  return e
}
export {
  y$n,
  NT,
  _$n,
  nEr,
  xPt,
  ast,
  $yo,
  Kzo,
  Yzo,
  Xzo,
  Jzo,
  rEr,
  ctn,
  Gqe,
  dtn,
  HM,
  utn,
  Vqe,
  nb,
  QDe,
  lst,
  Uyo,
  ptn,
  Byo,
  Dke,
  qqe,
  cst,
  b$n,
  jyo,
  oEr,
  sEr,
  Jie,
  hR,
  Qie,
  mB,
  Wyo,
  zyo,
  JW,
  ZDe,
  ftn,
  Lke,
  S$n,
  PPt,
  mtn,
  gtn,
  dst,
  Gyo,
  Kqe,
  w$n,
  IPt,
  htn,
  ust,
  v$n,
  iEr,
  pst,
  aEr,
  ytn,
  k$n,
  E$n,
  T$n,
  eLe,
  fst,
  C$n,
  R$n,
  mst,
  yR,
  Yqe,
  OPt,
  Eg,
  Zie,
  Vyo,
  In,
  _tn,
  gst,
  A$n,
  hst,
  lEr,
  XP,
  VA,
  _R,
  btn,
  Nke,
  MPt,
  qyo,
  Kyo,
  FM,
  Stn
};
