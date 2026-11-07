// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  Pe
} from "B:/~BUN/root/chunk-vz9zea4j.js";
import {
  Po,
  st,
  Ee,
  Dxe,
  Qp
} from "B:/~BUN/root/chunk-game8aqv.js";
import {
  f
} from "B:/~BUN/root/chunk-drx9cnw1.js";
import {
  Ke,
  R,
  d,
  k
} from "B:/~BUN/root/chunk-y2g9f85n.js";
import {
  or,
  Sl,
  Jv,
  pB
} from "B:/~BUN/root/chunk-h4acfc9y.js";
import {
  W
} from "B:/~BUN/root/chunk-ppmmt0c3.js";
import {
  _o
} from "B:/~BUN/root/chunk-rr294jrm.js";
import {
  Ct,
  ol,
  pe
} from "B:/~BUN/root/chunk-thn0wk2x.js";
import {
  sg,
  t,
  _,
  ee,
  ie
} from "B:/~BUN/root/chunk-2pp12te6.js";
import {
  Qo,
  Dt
} from "B:/~BUN/root/chunk-n8cnxns2.js";
import {
  ib,
  jHr,
  Ewt
} from "B:/~BUN/root/chunk-jdtvghyw.js";
import {
  kj,
  l$e,
  bjs,
  i
} from "B:/~BUN/root/chunk-j6pt0v41.js";
import {
  a
} from "B:/~BUN/root/chunk-xrwdh0g4.js";
import {
  x
} from "B:/~BUN/root/chunk-mwfggkjt.js";
import {
  um,
  Iw,
  lxe,
  zBs,
  GBs,
  KBs,
  fr,
  ty,
  Sdn,
  t1s,
  Pt,
  Ute,
  Qu,
  bM
} from "B:/~BUN/root/chunk-1g25msn4.js";
import {
  cme
} from "B:/~BUN/root/chunk-nsneqfcc.js";
import {
  g,
  m,
  c
} from "B:/~BUN/root/chunk-3z3yrbk4.js";
import {
  NFr
} from "B:/~BUN/root/chunk-5xx1vfdh.js";
import {
  yn,
  fS,
  ys
} from "B:/~BUN/root/chunk-88zb3509.js";
import {
  gxe,
  NSt,
  lnt,
  eme,
  WR,
  rY,
  H2n,
  HSt,
  A1s,
  EFr,
  ut,
  lt
} from "B:/~BUN/root/chunk-3mm90xb6.js";
import {
  ldn,
  Tp,
  Gpe,
  $1t,
  ZGn,
  ddn,
  R_
} from "B:/~BUN/root/chunk-1fg2bpc3.js";
import {
  Wd
} from "B:/~BUN/root/chunk-2f1svh63.js";
import {
  dte,
  CU,
  vO,
  I9i
} from "B:/~BUN/root/chunk-1s0yt4vj.js";
import {
  w0n,
  e_s,
  t_s,
  r_s,
  k0n,
  vfo,
  o_s,
  Kwr,
  C0t,
  Hpt,
  R0t
} from "B:/~BUN/root/chunk-65j4e9bn.js";
import {
  e$t,
  lOr,
  Hn,
  SU,
  dOr,
  EPs,
  Ti,
  f6i,
  za,
  v
} from "B:/~BUN/root/chunk-1ks9vs37.js";
import {
  ln,
  Ds,
  lS,
  Cc
} from "B:/~BUN/root/chunk-3xdsa4p8.js";
import {
  le
} from "B:/~BUN/root/chunk-begxsvab.js";
import {
  ent,
  kBs
} from "B:/~BUN/root/chunk-1x03q1j7.js";
import {
  es
} from "B:/~BUN/root/chunk-0s9zh2h6.js";
import {
  Ge
} from "B:/~BUN/root/chunk-z7bs0q82.js";
import {
  rz
} from "B:/~BUN/root/chunk-j05gjqgd.js";
import {
  xSs
} from "B:/~BUN/root/chunk-xgwmwbnb.js";
import {
  wR,
  c4
} from "B:/~BUN/root/chunk-zstr1969.js";
import {
  FMt
} from "B:/~BUN/root/chunk-05q1awc0.js";
import {
  IFt,
  bCs
} from "B:/~BUN/root/chunk-dwbkkfd6.js";
import {
  jEe,
  P9e
} from "B:/~BUN/root/chunk-7q19e5st.js";
import {
  s0e
} from "B:/~BUN/root/chunk-31hh2zwx.js";
import {
  Ko
} from "B:/~BUN/root/chunk-kgvnwy91.js";
import {
  xoe
} from "B:/~BUN/root/chunk-gg9ygjtf.js";
import {
  oX
} from "B:/~BUN/root/chunk-0p5dw980.js";
import {
  dGe
} from "B:/~BUN/root/chunk-v91d7hbv.js";
import {
  Ro
} from "B:/~BUN/root/chunk-143z690c.js";
import {
  L
} from "B:/~BUN/root/chunk-5ha2avah.js";
import {
  sep as vn
} from "path";

function at(e) {
  let n = new Map;
  if (!e) return n;
  try {
    let r = ee(e);
    if (r && typeof r === "object") {
      for (let [o, s] of Object.entries(r))
        if (typeof s === "string") n.set(o, s)
    }
  } catch (r) {
    t(`[repo-checkouts] Failed to parse env map: ${d(r)}`, {
      level: "error"
    })
  }
  return n
}

function gWe() {
  if (Qp()) return new Map;
  let e = _o().repoCheckouts;
  if (e.checkouts) return e.checkouts;
  let n = i.CLAUDE_CODE_REPO_CHECKOUTS;
  if (!n) {
    let r = ol();
    return e.checkouts = new Map(r === null ? [] : [
      ["", r]
    ]), e.checkouts
  }
  if (e.checkouts = at(n), Tp()) e.checkouts = On(e.checkouts);
  return e.checkouts
}

function bPn(e) {
  if (!Tp()) return e;
  let n = $1t();
  if (!ddn(e, n) || lxe(e, n)) return null;
  let r = pB(e);
  return r !== null && ddn(r, ZGn(n)) ? r : null
}

function On(e) {
  let n = $1t(),
    r = new Map([...e].filter(([, o]) => ddn(o, n)));
  if (r.size < e.size) t(`[repo-checkouts] ignored ${e.size-r.size} declared checkout(s) whose path is not absolute or lies on another host`, {
    level: "warn"
  });
  return r
}

function Kmr() {
  return i.CLAUDE_CODE_REPO_CHECKOUTS ? gWe() : new Map
}

function dt() {
  let e = _o().repoCheckouts;
  if (e.baseRefs) return e.baseRefs;
  return e.baseRefs = at(i.CLAUDE_CODE_BASE_REFS), e.baseRefs
}

function Jso(e) {
  for (let [n, r] of gWe())
    if (e === r || e.startsWith(r + vn)) return n;
  return
}
async function gRi(e) {
  _o().repoCheckouts.onMetadataChanged = e;
  for (let [, n] of gWe()) {
    let r = bPn(n);
    if (r !== null) await zBs(r)
  }
  GBs(() => void ils())
}
async function ils() {
  let e = gWe();
  if (e.size === 0) return;
  let n = {};
  for (let [o, s] of e) {
    let u = bPn(s);
    if (u === null) continue;
    let l = await KBs(u);
    if (l !== void 0) n[o] = l
  }
  let r = _o().repoCheckouts;
  if (ln(n, r.lastEmittedBranches)) return;
  r.lastEmittedBranches = n, r.onMetadataChanged?.({
    current_branches: n
  })
}
class ct {
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
var Pn = new W(() => new ct);

function y2() {
  return Po(Pn)
}

function zmr(e) {
  return y2().everRegisteredTaskIds.has(e)
}

function EIt(e, n, r = {}) {
  let {
    everRegisteredTaskIds: o,
    loopsByTaskId: s
  } = y2();
  o.add(e);
  let u = s.get(e);
  if (u) s.delete(e), ve(u);
  let l = {
    killController: n,
    agentControllersByAgentId: new Map,
    settleCallbacks: [],
    settleRequiresEmptyAgentAssociations: r.settleRequiresEmptyAgentAssociations ?? !1,
    chainSettled: !1
  };
  return s.set(e, l), () => {
    if (s.get(e) !== l) return;
    if (l.chainSettled = !0, l.settleRequiresEmptyAgentAssociations && l.agentControllersByAgentId.size > 0) return;
    s.delete(e), ve(l)
  }
}

function ve(e) {
  for (let n of e.settleCallbacks) try {
    n()
  } catch (r) {
    a(r)
  }
}

function VT(e) {
  return !y2().loopsByTaskId.has(e)
}

function uut(e) {
  return y2().loopsByTaskId.get(e)
}

function gXt(e, n) {
  let r = y2().loopsByTaskId.get(e);
  if (!r) {
    try {
      n()
    } catch (o) {
      a(o)
    }
    return
  }
  r.settleCallbacks.push(n)
}

function Gmr(e) {
  return y2().loopsByTaskId.get(e)?.killController
}

function Vmr(e, n, r) {
  y2().loopsByTaskId.get(e)?.agentControllersByAgentId.set(n, r)
}

function hRi(e, n) {
  let {
    loopsByTaskId: r
  } = y2(), o = r.get(e);
  if (!o) return;
  if (o.agentControllersByAgentId.delete(n), o.chainSettled && o.settleRequiresEmptyAgentAssociations && o.agentControllersByAgentId.size === 0) r.delete(e), ve(o)
}

function C9e(e) {
  let n = y2().loopsByTaskId.get(e);
  return n ? [...n.agentControllersByAgentId.keys()] : []
}

function TIt(e) {
  let n = y2().loopsByTaskId.get(e);
  if (!n) return [];
  let r = [];
  for (let o of n.agentControllersByAgentId.values())
    if (o && !o.signal.aborted) r.push(o);
  return r
}
var Bn = {
    tryConsume() {
      return !0
    },
    msUntilNextCall() {
      return 0
    },
    refillsPerHour() {
      return 0
    },
    async acquireDirectSearchSlot() {
      return () => {}
    }
  },
  mq = {
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
    getWebSearchBudget() {
      return Bn
    },
    resetWebSearchBudget() {},
    takeConcurrencySlot() {
      return () => {}
    },
    getConcurrentSubagents() {
      return 0
    }
  };

function yWe(e, n) {
  return e !== void 0 && Object.hasOwn(e, n) ? e[n] : void 0
}
import {
  resolve as Ln
} from "path";

function yXt(e) {
  let n = {};
  for (let s of ["GIT_CONFIG_GLOBAL", "GIT_CONFIG_SYSTEM"]) {
    let u = WR(e, s);
    if (u !== void 0) n[s] = u
  }
  let r = WR(e, "GIT_CONFIG_COUNT"),
    o = Number(r);
  if (r === void 0 || !Number.isInteger(o) || o <= 0) return {
    env: n,
    count: void 0
  };
  n.GIT_CONFIG_COUNT = r;
  for (let s = 0; s < o; s++) {
    let u = WR(e, `GIT_CONFIG_KEY_${s}`);
    if (u === void 0) break;
    n[`GIT_CONFIG_KEY_${s}`] = u;
    let l = WR(e, `GIT_CONFIG_VALUE_${s}`);
    if (l !== void 0) n[`GIT_CONFIG_VALUE_${s}`] = l
  }
  return {
    env: n,
    count: r
  }
}
var Mn = /^http\.(?:.*\.)?(?:ssl(?:cainfo|capath|verify|version|cipherlist|backend|try)|schannel(?:checkrevoke|usesslcainfo)|pinnedpubkey|proxysslcainfo)$/i;

function Qso() {
  let {
    env: e,
    count: n
  } = yXt(oX()), r = [];
  for (let o = 0; o < Number(n ?? 0); o++) {
    let s = e[`GIT_CONFIG_KEY_${o}`],
      u = e[`GIT_CONFIG_VALUE_${o}`];
    if (s === void 0) break;
    if (u !== void 0 && Mn.test(s)) r.push([s, u])
  }
  return r.length === 0 ? {} : Ro(rY(void 0, r), (o) => o !== void 0)
}

function _Xt(e, n) {
  return I9i(e, {
    ...Qso(),
    ...n
  })
}
async function CIt(e, n, r = {}, {
  timeout: o,
  abortSignal: s,
  withoutControllingTerminal: u,
  waitForExitAfterKill: l,
  maxBuffer: h,
  stripFinalNewline: p,
  programs: S,
  input: y,
  lazyFetch: T,
  fetchesFrom: b,
  ownConfigAsJudged: w,
  afterEachRead: E,
  repository: A
} = {}) {
  let C = b === void 0 ? void 0 : Nn(b);
  if (C === null) return ue("remote_name_not_plain", "the remote's name must begin with a letter or a digit and contain only letters, digits, '.', '_' and '-'");
  let O = [...n],
    I = w?.map(([U, B]) => [U, B]);
  if (C !== void 0 && !Gn(O, C)) throw new R(`materializeWorkTree: with fetchesFrom, the arguments must be -c pairs if any, then fetch or ls-remote, then options, then --end-of-options, then that remote's name. Each option must carry its value after '=' (--depth=1), begin with --no-, or be one of ${[...mt].join(", ")}. A fetch needs --no-recurse-submodules. No option may begin with --rec.`, "partial-clone lane called with fetchesFrom and a command that is not in the form it requires");
  let D = A ?? vO(e),
    P = S === void 0 ? void 0 : Wn(S),
    N = {
      value: !1
    },
    F = await Kwr(e, {
      envPins: r,
      pin: D,
      ...Me(P, E, N)
    });
  if (N.value) return ue("repository_moved_between_reads", St);
  if (!F.ok) return ue(F.reason, k0n(F));
  if (s?.aborted) return ue("aborted", ht);
  return yt(lt, e, O, r, F.entries, {
    timeout: o,
    abortSignal: s,
    withoutControllingTerminal: u,
    waitForExitAfterKill: l,
    maxBuffer: h,
    stripFinalNewline: p,
    repository: D
  }, {
    programs: P,
    input: y,
    lazyFetch: T,
    fetchesFrom: C,
    ownConfigAsJudged: I,
    ...E !== void 0 && {
      afterEachRead: E
    }
  })
}

function qmr(e, n, r = {}, o = {}) {
  let s = n[pt(n)];
  if (s === void 0 || !Fn.has(s)) throw new R(`gitInOwnWorkTree runs reads only, not git ${s??"(no subcommand)"}`, "gitInOwnWorkTree called with a non-read git subcommand");
  return yt(ut, e, n, r, null, o)
}

function pt(e) {
  return e.findIndex((n, r) => !n.startsWith("-") && (r === 0 || e[r - 1] !== "-c"))
}
var Fn = new Set(["diff", "format-patch", "log", "show"]),
  gt = ["https", "ssh"];

function Zso(e) {
  return gt.includes(Oe(e))
}

function Oe(e) {
  let n = /^[A-Za-z0-9][A-Za-z0-9+.-]*(?=::)/.exec(e)?.[0];
  if (n !== void 0) return n;
  let r = /^([a-z][a-z0-9+.-]*):\/\//i.exec(e)?.[1];
  if (r !== void 0) return r === "git+ssh" || r === "ssh+git" ? "ssh" : r;
  let o = e.indexOf(":"),
    s = e.indexOf("/");
  return o === -1 || s !== -1 && s < o || x() === "windows" && /^[A-Za-z]:[\\/]/.test(e) ? "file" : "ssh"
}
var Dn = /^fatal: transport '([A-Za-z][A-Za-z0-9+.-]{0,31})' not allowed$/m;

function Nn(e) {
  return /^[A-Za-z0-9][A-Za-z0-9._-]*$/.test(e) ? e : null
}
var mt = new Set(["--stdin", "--negotiate-only", "--refs", "--heads", "--quiet"]);

function Gn(e, n) {
  let r = pt(e),
    o = e.indexOf("--end-of-options"),
    s = e.slice(r + 1, o);
  return e.slice(0, r).every((u, l) => l % 2 === 1 || u === "-c") && ["fetch", "ls-remote"].includes(e[r] ?? "") && o > r && s.every((u) => /^--no-[a-z]|^--[a-z][a-z-]*=/.test(u) || mt.has(u)) && (e[r] === "ls-remote" || s.includes("--no-recurse-submodules")) && !s.some((u) => u.startsWith("--rec")) && e[o + 1] === n
}
var Un = {
    stdout: "",
    stderr: "",
    code: 1
  },
  ht = "the operation was cancelled before it started",
  St = "the repository's git directories changed while Claude Code read its git config";

function ue(e, n) {
  return {
    stdout: "",
    stderr: `git was not run: ${n}.
`,
    code: 1,
    lane: {
      kind: "not_started",
      why: e
    }
  }
}

function Wn(e) {
  return {
    base: e.base,
    buildInvocation: (n, r) => {
      let o = e.buildInvocation([...n], {
          dir: r.dir,
          env: {
            ...r.env
          }
        }),
        s = {
          file: o.file,
          args: [...o.args],
          cwd: o.cwd,
          env: {
            ...o.env
          }
        };
      if (!bjs(s.file) || eme(s.file, [], s.env) === null) throw new R("programs.buildInvocation must return an absolute path to a file named git", "partial-clone lane called with programs whose file is not an absolute path to git");
      if (![
          [],
          ["-C", r.dir],
          ["-C", Ln(r.dir)]
        ].some((u) => ln(s.args, [...u, ...n])) || Object.keys(r.env).some((u) => Object.hasOwn(s.env, u) ? s.env[u] !== r.env[u] : !/^(?:OLD)?PWD$/i.test(u)) || Object.keys(s.env).some((u) => !Object.hasOwn(r.env, u))) throw new R("programs.buildInvocation must return the environment it was handed, less at most PWD and OLDPWD, and the arguments it was handed, with nothing before them but -C and the directory it was handed; it changed the environment or the arguments", "partial-clone lane called with programs that do not keep the environment and arguments handed to them");
      return s
    }
  }
}

function Be(e, n, r, o) {
  return e === void 0 ? {
    file: n(),
    args: [...r],
    cwd: o.dir,
    env: o.env
  } : e.buildInvocation(r, o)
}

function Me(e, n, r) {
  let o = $n(e),
    s = o.run ?? o_s;
  return n === void 0 ? o : {
    ...o,
    run: async (u, l) => {
      if (r.value) return {
        code: 1,
        stdout: "",
        stderr: ""
      };
      let h = await s(u, l);
      if (!await n()) r.value = !0;
      return h
    }
  }
}

function $n(e) {
  return e === void 0 ? {} : {
    base: e.base,
    run: (n, {
      cwd: r,
      env: o,
      extendEnv: s,
      ...u
    }) => ent(e.buildInvocation(n, {
      dir: r,
      env: o
    }), {
      ...u,
      stdin: "ignore"
    })
  }
}
async function yt(e, n, r, o, s, {
  repository: u,
  ...l
}, {
  programs: h,
  input: p,
  lazyFetch: S,
  fetchesFrom: y,
  ownConfigAsJudged: T,
  afterEachRead: b
} = {}) {
  let w = p === void 0 ? {
      stdin: "ignore"
    } : {
      input: p
    },
    A = y === void 0 ? await (() => {
      let B = Be(h, Pt, r, {
        dir: n,
        env: ys({
          ...o,
          ...bt(s === null ? [] : Tt([], s, []))
        }, {
          repository: u,
          base: h?.base,
          userLocale: !0
        })
      });
      return e(B.file, B.args, {
        ...l,
        cwd: B.cwd,
        env: B.env,
        ...h !== void 0 && {
          extendEnv: !1
        },
        ...w
      })
    })() : Un;
  if (A.code === 0) return {
    ...A,
    lane: {
      kind: "first_attempt_succeeded"
    }
  };
  let C = () => y === void 0 ? {
    ...A,
    lane: {
      kind: "first_attempt_cut"
    }
  } : ue("aborted", ht);
  if (A.timedOut || A.maxBufferExceeded || l.abortSignal?.aborted || l.withoutControllingTerminal === !0 && sg()) return C();
  let O = u ?? vO(fr(n) ?? n),
    I = await Yn(n, o, {
      repoFiltersOff: s !== null,
      repository: O,
      programs: h,
      lazyFetch: S,
      fetchesFrom: y,
      ownConfigAsJudged: T,
      afterEachRead: b
    });
  if (s !== null && l.abortSignal?.aborted) return C();
  if (!I.retry) return {
    ...I.forgone === void 0 ? A : Ce(A, y === void 0 ? `No lazy fetch from the promisor remote was attempted: ${I.forgone}.` : `The remote ${y} was not contacted: ${I.forgone}.`),
    lane: {
      kind: "forgone",
      why: I.why
    }
  };
  t(y === void 0 ? `[git] ${n} is a partial clone: retrying with ${S==="off"?`lazy fetch off, over ${I.transports.join(" or ")}`:"a constrained lazy fetch"}` : `[git] ${n}: contacting the remote ${y}, over ${I.transports.join(" or ")}`);
  let D = Be(h, () => I.git, r, {
      dir: n,
      env: ys({
        ...o,
        ...I.env
      }, {
        base: I.operatorEnv,
        repository: O
      })
    }),
    P = {
      ...await e(D.file, D.args, {
        ...l,
        cwd: D.cwd,
        env: D.env,
        extendEnv: !1,
        ...w
      }),
      lane: {
        kind: "retried"
      }
    };
  if (P.code === 0) return P;
  let N = I.promisorUrl === void 0 ? void 0 : Wd(jHr(Ewt(I.promisorUrl)), Kn),
    F = P,
    U = Dn.exec(P.stderr)?.[1];
  if (U !== void 0 && !I.transports.includes(U)) {
    let B = I.transports.join(" or ");
    F = Ce(F, y === void 0 ? `Nothing was fetched: a partial clone's lazy fetch runs over ${B} only, and the promisor remote the repository's own config names, ${N??"one it does not spell out"}, is reached over ${U}${I.promisorUrl!==void 0&&I.transports.includes(Oe(I.promisorUrl))?", not the transport that URL spells \u2014 a url.<base>.insteadOf rule in your git configuration, or a second promisor URL in the repository's, would account for that":""}.` : `The remote ${y} was not contacted: this command runs over ${B} only, and the URL the repository's own config gives it, ${N??"one it does not spell out"}, is reached over ${U}${I.promisorUrl!==void 0&&I.transports.includes(Oe(I.promisorUrl))?`, not the transport that URL spells. A url.<base>.insteadOf rule, or a remote.${y}.url, in your own git configuration would account for that`:""}.`)
  }
  if (I.userUnscopedExtraHeader) F = Ce(F, y === void 0 ? `The lazy fetch did not send your unscoped http.extraHeader: it would go to whichever host the repository's own config names as its promisor remote, here ${N??"one it does not spell out"}. Only if you recognize and trust that host, scope the header to it (http.<that url>.extraHeader); otherwise leave it as it is.` : `The command did not send your unscoped http.extraHeader: it would go to whichever host the repository's own config gives for the remote ${y}, here ${N??"one it does not spell out"}. Only if you recognize and trust that host, scope the header to it (http.<that url>.extraHeader); otherwise leave it as it is.`);
  return {
    ...F,
    stderrOfGitAlone: P.stderr
  }
}
var jn = /^(?:http\..*|url\..*\.(?:insteadof|pushinsteadof)|remote\..*\.(?:proxy|proxyauthmethod|uploadpack|receivepack|vcs)|credential\..*|core\.(?:sshcommand|askpass|gitproxy|alternaterefscommand|alternaterefsprefixes)|protocol\..*|fetch\.bundleuri|transfer\.bundleuri|bundle\..*|gpg\..*|ssh\..*)$/s,
  zn = /^(?:http\.(?:postbuffer|version|lowspeedlimit|lowspeedtime|maxrequests|minsessions|maxrequestbuffer)|protocol\.version)$/s,
  Kn = {
    head: 70,
    tail: 20
  };

function Ce(e, n) {
  let r = e.stderr.replace(/\n*$/, "");
  return {
    ...e,
    stderr: `${r}${r===""?"":`
`}${n}
`
  }
}

function Tt(e, n, r) {
  return [
    ["credential.helper", ""], ...e, ["http.extraheader", ""],
    ["core.protectNTFS", "true"],
    ["core.protectHFS", "true"], ...r, ...t_s(e_s(n.map(([o]) => o)))
  ]
}

function bt(e, n) {
  return e.length === 0 ? {} : Ro(rY(n, e), (r) => r !== void 0)
}
async function Yn(e, n, {
  repoFiltersOff: r,
  repository: o,
  programs: s,
  lazyFetch: u,
  fetchesFrom: l,
  ownConfigAsJudged: h,
  afterEachRead: p
}) {
  let S = {
      value: !1
    },
    y = {
      retry: !1,
      why: "repository_moved_between_reads",
      forgone: St
    },
    T = l ?? await Xn(e, o, s);
  if (l === void 0 && p !== void 0 && !await p()) return y;
  if (T === null || T === void 0) return {
    retry: !1,
    why: T === null ? "no_promisor_remote" : "promisor_remote_unread"
  };
  let b = Zn(s?.base ?? oX()),
    w = s === void 0 ? kj("git", b.PATH ?? "") : "";
  if (w === null) return {
    retry: !1,
    why: "no_git_on_absolute_path",
    forgone: "no git executable is on an absolute PATH entry of the environment Claude Code was launched with"
  };
  let E = process.env,
    A = WR(E, "GIT_NO_LAZY_FETCH") ?? WR(b, "GIT_NO_LAZY_FETCH");
  if ([E, b].some((M) => {
      let z = WR(M, "GIT_NO_LAZY_FETCH");
      return z !== void 0 && Pe(z)
    })) return {
    retry: !1,
    why: "lazy_fetch_switched_off",
    forgone: l === void 0 ? "GIT_NO_LAZY_FETCH is set" : "GIT_NO_LAZY_FETCH is set, which switches this command off too"
  };
  let C = [E, b].reduce((M, z) => {
    let Q = WR(z, "GIT_ALLOW_PROTOCOL")?.split(":");
    return Q === void 0 ? M : M.filter((ae) => Q.includes(ae))
  }, gt);
  if (C.length === 0) return {
    retry: !1,
    why: "no_transport_admitted",
    forgone: "GIT_ALLOW_PROTOCOL admits neither https nor ssh"
  };
  let O = yXt(b),
    I = await kt(e, ["--get-regexp", l === void 0 ? "^remote\\..*\\.(uploadpack|vcs)$" : `^(remote\\..*\\.(uploadpack|vcs)|remotes\\.${Qo(l)})$`], o, O.env, b, s);
  if (p !== void 0 && !await p()) return y;
  if (!(I.exitCode === 1 && I.error === void 0 && !I.timedOut && !I.maxBufferExceeded)) {
    if (l !== void 0 && I.stdout.split("\x00").some((M) => M.startsWith("remotes."))) return ft(l);
    return {
      retry: !1,
      why: I.code === 0 ? "remote_names_a_program" : "remote_programs_unread",
      forgone: I.code === 0 ? "a remote names an upload-pack or vcs program" : "git's configuration could not be read for a remote's upload-pack or vcs program"
    }
  }
  let P = await Kwr(e, {
    envPins: n,
    pin: o,
    ...Me(s, p, S)
  });
  if (S.value) return y;
  if (!P.ok) return {
    retry: !1,
    why: P.reason,
    forgone: k0n(P)
  };
  if (h !== void 0 && ![h, [...h, ...h]].some((M) => ln(P.entries, M))) return {
    retry: !1,
    why: "config_changed_after_checks",
    forgone: "the repository's git config changed after Claude Code checked it"
  };
  let N = P.entries.find(([M]) => {
    let z = w0n(M);
    return jn.test(z) && !zn.test(z)
  });
  if (N !== void 0) return {
    retry: !1,
    why: "repository_steers_the_fetch",
    forgone: `the repository's own git config sets ${vfo(N[0])} (${r_s})`
  };
  if (l !== void 0 && P.entries.some(([M]) => w0n(M) === w0n(`remotes.${l}`))) return ft(l);
  let F = l === void 0 ? void 0 : qn(P.entries, l);
  if (F === null) return {
    retry: !1,
    why: "named_remote_without_url",
    forgone: `the repository's own git config must set remote.${l}.url, and to no empty value`
  };
  let U = await C0t(e, "^(credential\\.(.*\\.)?helper|core\\.sshcommand|ssh\\.variant|http\\.extraheader)$", {
    envPins: {
      ...n,
      ...O.env
    },
    base: b,
    repository: o,
    buildInvocation: s?.buildInvocation
  });
  if (p !== void 0 && !await p()) return y;
  if (U === null) return {
    retry: !1,
    why: "user_config_unread",
    forgone: "your own git configuration could not be read"
  };
  let [B, he] = lS(U, ([M]) => M === "core.sshcommand"), [se, G] = lS(he, ([M]) => M === "ssh.variant"), [q, K] = lS(G, ([M]) => M === "http.extraheader"), H = WR(b, "GIT_SSH_VARIANT"), j = se.at(-1)?.[1], X = H ?? j, J = EFr(H === void 0 && j !== void 0 ? {
    ...b,
    GIT_SSH_VARIANT: j
  } : b, B.at(-1)?.[1]), Y = await Kwr(e, {
    envPins: n,
    pin: o,
    ...Me(s, p, S)
  });
  if (S.value) return y;
  if (!Y.ok || !ln(Y.entries, P.entries)) return {
    retry: !1,
    why: Y.ok ? "config_changed_during_vet" : Y.reason,
    forgone: "the repository's git config changed while it was being vetted"
  };
  return {
    retry: !0,
    operatorEnv: b,
    git: w,
    transports: C,
    env: {
      GIT_NO_LAZY_FETCH: u === "off" || l !== void 0 ? "1" : A ?? "0",
      GIT_ALLOW_PROTOCOL: C.join(":"),
      GIT_SSH_COMMAND: H2n(HSt(), J.command),
      GIT_SSH_VARIANT: A1s(X, J.command),
      GIT_ASKPASS: n.GIT_ASKPASS ?? WR(b, "GIT_ASKPASS") ?? "",
      SSH_ASKPASS: n.SSH_ASKPASS ?? WR(b, "SSH_ASKPASS") ?? "",
      ...O.env,
      ...bt(Tt(K, r ? Y.entries : [], [
        ["core.alternateRefsCommand", ":"]
      ]), O.count)
    },
    userUnscopedExtraHeader: q.length > 0,
    promisorUrl: F ?? Y.entries.findLast(([M]) => M === `remote.${T}.url`)?.[1] ?? void 0
  }
}

function ft(e) {
  return {
    retry: !1,
    why: "named_remote_is_a_group",
    forgone: `git's configuration sets remotes.${e}, which makes that name a group of remotes`
  }
}

function qn(e, n) {
  let r = e.filter(([o]) => o === `remote.${n}.url`).map(([, o]) => o);
  return r.every((o) => o !== null && o !== "") ? r[0] ?? null : null
}
var Vn = /^remote\.(.*)\.(promisor|partialclonefilter)$/s;
async function Xn(e, n, r) {
  let o = await als(e, n, r);
  return o === null || o === void 0 ? o : o.extension ?? o.remotes[0] ?? null
}
async function als(e, n = vO(e), r) {
  let o = await kt(e, ["--get-regexp", "^(extensions\\.partialclone|remote\\..*\\.(promisor|partialclonefilter))$"], n, {}, r?.base, r);
  if (o.code !== 0) return o.exitCode === 1 ? null : void 0;
  let s = null,
    u = [];
  for (let l of o.stdout.split("\x00")) {
    let h = l.indexOf(`
`),
      p = h === -1 ? l : l.slice(0, h),
      S = h === -1 ? "true" : l.slice(h + 1);
    if (p === "extensions.partialclone") {
      s = S === "" ? s : S;
      continue
    }
    let [, y, T] = Vn.exec(p) ?? [];
    if (y !== void 0 && !u.includes(y) && (T === "partialclonefilter" || !["false", "no", "off", "0", ""].includes(S.toLowerCase()))) u.push(y)
  }
  return {
    extension: s,
    remotes: u
  }
}

function kt(e, n, r, o, s, u) {
  let l = Be(u, Pt, [...yn, "config", "--includes", "--null", ...n], {
    dir: e,
    env: ys(o, {
      base: s,
      repository: r
    })
  });
  return lt(l.file, l.args, {
    cwd: l.cwd,
    env: l.env,
    ...s !== void 0 && {
      extendEnv: !1
    },
    timeout: 5000,
    preserveOutputOnError: !1,
    stdin: "ignore"
  })
}

function Zn(e) {
  let n = {
      ...e
    },
    r = x() === "windows";
  for (let o of Object.keys(n))
    if (o === "PATH" || r && o.toUpperCase() === "PATH") delete n[o];
  return n.PATH = l$e(Ds(e, "PATH") ?? ""), n
}
var mut = [],
  Jn = new Set,
  vXt = {
    messages: mut,
    inProgressToolUseIDs: Jn
  };

function kPn(e, n) {
  return e.size === 0 && n.size > 0 ? {
    inProgressToolUseIDs: n,
    toolWindowStartTime: Date.now()
  } : {
    inProgressToolUseIDs: n
  }
}

function hio(e, n, r) {
  let o = e[n] ?? vXt,
    s = o.inProgressToolUseIDs,
    u;
  switch (r.action) {
    case "add": {
      u = new Set(s);
      for (let l of r.ids) u.add(l);
      break
    }
    case "remove": {
      u = new Set(s);
      for (let l of r.ids) u.delete(l);
      if (u.size === s.size) return e;
      break
    }
    case "clear":
      if (s.size === 0) return e;
      u = new Set;
      break;
    default:
      return e
  }
  return {
    ...e,
    [n]: {
      ...o,
      ...kPn(s, u)
    }
  }
}
class P$ extends Error {
  subtype;
  constructor(e, n) {
    super(`control_request '${e}' got no response after ${n/1000}s \u2014 the worker may still apply it`);
    this.subtype = e
  }
}
class ODe extends Error {
  subtype;
  constructor(e) {
    super("Request was not delivered to the cloud session");
    this.subtype = e
  }
}
class Le extends Error {}

function O$(e) {
  if (e instanceof Ke) return "aborted";
  if (e instanceof P$) return "timeout";
  if (e instanceof ODe) return "not_delivered";
  if (e instanceof Error && (e.message.endsWith("Disconnected") || e.message.endsWith("Connection to remote lost"))) return "disconnected";
  if (e instanceof Error && (e.message.endsWith("not connected") || e.message.includes("Cannot send:"))) return "not_connected";
  return "server_error"
}
async function RIt(e, n) {
  try {
    let r = await n();
    return g(e), r
  } catch (r) {
    if (r instanceof Ke) c(e, "aborted");
    else m(e, O$(r));
    throw r
  }
}

function yRi(e) {
  if (e.subtype === "error" && typeof e.error === "string") return new Le(e.error);
  let n = e.subtype === "error" ? "non-string error" : `subtype ${typeof e.subtype==="string"?"unrecognized":typeof e.subtype}`;
  return new Le(`Malformed control_response from worker (${n})`)
}

function tp(e) {
  return typeof e === "object" && e !== null && "type" in e && e.type === "in_process_teammate"
}

function _Ri(e) {
  let n = "";
  for (let r of Object.values(e))
    if (tp(r)) n += `${r.id}:${r.status};`;
  return n
}

function lls(e) {
  return e.status === "running" && !e.isIdle && e.currentWorkAbortController !== void 0
}

function eio(e) {
  if (!lls(e)) return !1;
  return e.currentWorkAbortController?.abort(), !0
}

function tio(e) {
  return e.awaitingPlanApproval || e.pendingUserMessages.length > 0
}
var nio = 50;

function fut(e, n) {
  if (e === void 0 || e.length === 0) return [n];
  if (e.length >= nio) {
    let r = e.slice(-(nio - 1));
    return r.push(n), r
  }
  return [...e, n]
}

function bRi(e, n) {
  let r = e === void 0 || e.every((o) => o.uuid !== n.uuid) ? e : e.filter((o) => o.uuid !== n.uuid);
  return fut(r, n)
}
var rio = {
  local_agent: "subagent",
  local_workflow: "workflow",
  local_bash: "shell",
  monitor_mcp: "monitor",
  monitor_ws: "monitor",
  mcp_task: "MCP task",
  in_process_teammate: "teammate",
  dream: "dream",
  auto_mode_scan: "auto-mode scan",
  local_memory_import: "memory import",
  post_turn_memory: "memory save",
  remote_agent: "cloud session"
};

function IDe(e) {
  if (le() && _We(e)) return "code";
  return rio[e] ?? e
}

function _We(e) {
  return le() && e === "local_script"
}

function pZ(e) {
  return _We(e.type)
}

function nm(e) {
  return e.type === "local_agent" && "isObserver" in e && e.isObserver === !0
}

function bXt(e, n, r, o) {
  if (o !== void 0 && "agentId" in e && typeof e.agentId === "string" && o(e.agentId)) return !1;
  let s = new Set,
    u = "parentAgentId" in e && typeof e.parentAgentId === "string" ? e.parentAgentId : void 0;
  while (u && !s.has(u)) {
    if (u === n) return !0;
    if (o?.(u)) return !1;
    s.add(u);
    let l = r[u];
    u = l !== void 0 && l.type === "local_agent" && !(("forkWorker" in l) && l.forkWorker === !0) && "parentAgentId" in l && typeof l.parentAgentId === "string" ? l.parentAgentId : void 0
  }
  return !1
}

function oio(e, n) {
  let r;
  switch (e.type) {
    case "local_agent":
      r = e.parentAgentId;
      break;
    case "local_workflow":
      r = e.spawnerAgentId;
      break;
    case "local_bash":
    case "monitor_mcp":
    case "monitor_ws":
      r = e.agentId;
      break;
    default:
      return
  }
  if (r === void 0) return;
  let o = yWe(n, r);
  return o?.type === "local_agent" && !nm(o) ? o.id : void 0
}

function M6(e) {
  if (e.type === "local_agent") return !nm(e);
  return e.type === "local_workflow"
}

function u_(e) {
  if (e.status !== "running" && e.status !== "pending") return !1;
  return !dls(e)
}

function dls(e) {
  return "isBackgrounded" in e && e.isBackgrounded === !1
}

function sio(e) {
  return e.type === "local_agent" && e.awaitedByCaller === !0
}

function BEe(e) {
  return e.type === "mcp_task" && e.parked === !0
}

function AIt(e) {
  return e.type === "mcp_task" && e.holdCapped === !0
}

function iio(e) {
  return BEe(e) || AIt(e)
}

function xIt(e) {
  return e.type === "local_bash" && e.kind === "monitor" || e.type === "monitor_mcp" || e.type === "monitor_ws" && e.ambient !== !0
}

function SRi(e) {
  return e.type === "local_bash" && e.isBackgrounded === !0 && e.kind !== "monitor" && e.agentId === void 0
}

function er(e) {
  return e.type === "monitor_ws" && e.ambient === !0 && e.frameLive?.explicit !== !0
}

function Rye(e) {
  return er(e)
}

function _2(e) {
  return e.skipTranscript === !0 || e.type === "monitor_ws" && e.ambient === !0
}

function SXt(e) {
  return e.type === "local_agent" ? e.agentType : void 0
}

function Jde(e) {
  return e.type === "in_process_teammate" && e.isIdle && !tio(e)
}

function PIt(e) {
  switch (e.type) {
    case "local_agent":
      return e.abortController?.signal.aborted === !0;
    case "in_process_teammate":
      return e.currentWorkAbortController?.signal.aborted === !0;
    default:
      return !1
  }
}

function aio(e) {
  return e?.type === "local_workflow"
}
var R9e = new Set(["local_agent", "in_process_teammate", "local_workflow", "dream", "post_turn_memory"]);
import {
  access as Qr,
  lstat as un,
  readFile as eo,
  realpath as dn
} from "fs/promises";
import {
  basename as Xe,
  dirname as Je,
  isAbsolute as cn,
  join as fe,
  relative as to,
  sep as no,
  win32 as ro
} from "path";
import {
  isAbsolute as tr
} from "path";
async function _t(e, n, r, o) {
  if (Ge.isSandboxingEnabled()) return c("self_hosted_diff_ignore_check", "sandbox_on"), null;
  let s = oX(),
    u = WR(s, "GIT_CONFIG_PARAMETERS"),
    l = {
      ...yXt(s).env,
      ...u !== void 0 && {
        GIT_CONFIG_PARAMETERS: u
      }
    };
  if ([l.GIT_CONFIG_GLOBAL, l.GIT_CONFIG_SYSTEM].some((S) => S !== void 0 && S !== "" && !tr(S))) return c("self_hosted_diff_ignore_check", "relative_operator_config"), null;
  let h = {
    GIT_CONFIG_NOSYSTEM: WR(s, "GIT_CONFIG_NOSYSTEM") ?? "0"
  };
  for (let S of Object.keys(l).length > 0 ? [h, {
      ...l,
      ...h
    }] : [h]) {
    let {
      exitCode: y,
      stdout: T,
      stderr: b
    } = await o(["--literal-pathspecs", "--no-optional-locks", "ls-files", "--others", "--exclude-standard", "-z", "--", n], {
      config: S
    });
    if (y !== 0 || T !== "" && T !== `${n}\x00` || /^warning: (?:unable to access |ignoring excessively large pattern )/m.test(b)) return c("self_hosted_diff_ignore_check", "no_answer"), null;
    if (T === "") return g("self_hosted_diff_ignore_check"), null
  }
  let p = await cme(e, r, {
    oneName: !0
  });
  if (p === null) c("self_hosted_diff_ignore_check", "file_not_read");
  else g("self_hosted_diff_ignore_check");
  return p
}
import {
  createHash as Xt
} from "crypto";
import {
  lstat as He,
  open as Zt,
  readlink as Rr
} from "fs/promises";
import {
  sep as Te
} from "path";

function Rt(e, n) {
  let r = e?.eol;
  return wt(e?.text) ?? wt(e?.crlf) ?? (r === "lf" || r === "crlf" ? "always" : n?.toLowerCase() === "input" || de(n) === !0 ? "if-text" : "never")
}

function wt(e) {
  switch (e) {
    case "set":
    case "input":
      return "always";
    case "unset":
      return "never";
    case "auto":
      return "if-text";
    default:
      return null
  }
}

function de(e) {
  switch (e?.toLowerCase()) {
    case "true":
    case "yes":
    case "on":
      return !0;
    case "false":
    case "no":
    case "off":
    case "":
      return !1;
    default: {
      let n = /^\s*[+-]?(?:0x([0-9a-f]+)|(\d+))[kmg]?$/i.exec(e ?? "");
      return n === null ? null : /[^0]/.test(n[1] ?? n[2])
    }
  }
}
var At = 13,
  Fe = 10;

function Et(e) {
  let n = 0,
    r = 0;
  for (let o = 0; o < e.length; o++) {
    let s = e[o];
    if (s === At) {
      if (e[o + 1] !== Fe) return !0;
      o++
    } else if (s === 0) return !0;
    else if (s === Fe) continue;
    else if (s === 127 || s < 32 && s !== 8 && s !== 9 && s !== 12 && s !== 27) r++;
    else n++
  }
  if (e.at(-1) === 26) r--;
  return n >> 7 < r
}

function cls(e) {
  let n = e.indexOf(`\r
`);
  if (n === -1) return null;
  let r = Buffer.allocUnsafe(e.length - 1);
  e.copy(r, 0, 0, n);
  let o = n;
  for (let s = n; s < e.length; s++)
    if (e[s] !== At || e[s + 1] !== Fe) r[o++] = e[s];
  return r.subarray(0, o)
}

function xt(e, n, r) {
  if (n === "never" || n === "if-text" && (Et(e) || r !== void 0 && r.includes(`\r
`) && !Et(r))) return null;
  return cls(e)
}

function It(e) {
  let n = e.split("\x00");
  if (n.pop() !== "" || n.length % 3 !== 0) return null;
  let r = new Map;
  for (let o = 0; o < n.length; o += 3) {
    let s = n[o],
      u = r.get(s);
    if (u === void 0) u = Object.create(null), r.set(s, u);
    u[n[o + 1]] = n[o + 2]
  }
  return r
}
import {
  createHash as Lt
} from "crypto";
var nr = 1e6,
  Ft = 67108864,
  rr = 1024,
  Se = {
    sha1: 20,
    sha256: 32
  },
  vt = 8388608,
  Ne = 12,
  sr = 8,
  ir = 20,
  ar = 24,
  ur = 36,
  De = 40,
  lr = 32768,
  dr = 16384,
  Ue = 4095,
  Ot = 16384,
  Bt = 8192,
  cr = new Map([
    [33188, "file"],
    [33261, "executable"],
    [40960, "symlink"],
    [57344, "gitlink"]
  ]),
  pr = [0, 1, 2, 3],
  V = 8,
  gr = Buffer.alloc(0),
  mr = 47,
  Mt = 46;
async function Nt(e, n, r) {
  if (r.aborted) return {
    refused: "aborted"
  };
  let o = e.length - Se[n];
  if (o < Ne || e.toString("latin1", 0, 4) !== "DIRC") return {
    refused: "malformed"
  };
  let s = e.readUInt32BE(4);
  if (s !== 2 && s !== 3 && s !== 4) return {
    refused: "unsupported"
  };
  let u = e.readUInt32BE(8);
  if (u > nr) return {
    refused: "too-large"
  };
  let l = e.subarray(0, o);
  if (!We(e, o, e.length) && !(await Er(l, n)).equals(e.subarray(o))) return {
    refused: "wrong-checksum"
  };
  if (r.aborted) return {
    refused: "aborted"
  };
  let h = [],
    p = [],
    S = [],
    y = Ne,
    T = 0;
  while (h.length < u) {
    if (h.length % rr === 0) await Gt();
    if (r.aborted) return {
      refused: "aborted"
    };
    p.push(y);
    let w = hr(l, y, s, Se[n], h.at(-1)?.pathBytes ?? gr);
    if (typeof w === "string") return {
      refused: w
    };
    if (T += w.entry.pathBytes.length, T > Ft) return {
      refused: "too-large"
    };
    h.push(w.entry), S.push(w.kept), y = w.next
  }
  let b = _r(l, y) ?? wr(l, y, p, S, n);
  if (b !== null) return {
    refused: b
  };
  return h.every((w, E) => br(w.pathBytes) && (E === 0 || kr(h[E - 1], w))) ? {
    entries: h
  } : {
    refused: "malformed"
  }
}

function hr(e, n, r, o, s) {
  let u = n + De + o;
  if (u + 4 > e.length) return "malformed";
  let l = e.readUInt16BE(u),
    h = (l & dr) !== 0,
    p = h ? e.readUInt16BE(u + 2) : 0;
  if ((p & ~(Ot | Bt)) !== 0 || h && (r === 2 || p === 0)) return "unsupported";
  let S = cr.get(e.readUInt32BE(n + ar));
  if (S === void 0 || We(e, n + De, u)) return "unsupported";
  let y = u + (h ? 4 : 2),
    T = l & Ue,
    b = r === 4 ? yr(e, y, s) : Sr(e, n, y, T);
  if (typeof b === "string") return b;
  if (Math.min(b.pathBytes.length, Ue) !== T) return "malformed";
  return {
    entry: {
      pathBytes: b.pathBytes,
      kind: S,
      id: e.toString("hex", n + De, u),
      stage: pr[l >> 12 & 3],
      isSkipWorktree: (p & Ot) !== 0,
      isIntentToAdd: (p & Bt) !== 0,
      stat: {
        changedSeconds: e.readUInt32BE(n),
        modifiedSeconds: e.readUInt32BE(n + sr),
        inode: e.readUInt32BE(n + ir),
        size: e.readUInt32BE(n + ur),
        isAssumedUnchanged: (l & lr) !== 0
      }
    },
    next: b.next,
    kept: b.kept ?? 0
  }
}

function Sr(e, n, r, o) {
  let s = o < Ue ? r + o : e.indexOf(0, r);
  if (s === -1) return "malformed";
  let u = n + (s - n + 8 & -8);
  return u <= e.length && We(e, s, u) ? {
    pathBytes: e.subarray(r, s),
    next: u
  } : "malformed"
}

function yr(e, n, r) {
  let o = Tr(e, n, r.length),
    s = o === null ? -1 : e.indexOf(0, o.next);
  if (o === null || s === -1) return "malformed";
  let u = r.length - o.value;
  if (u + s - o.next > Ft) return "too-large";
  return {
    pathBytes: Buffer.concat([r.subarray(0, u), e.subarray(o.next, s)]),
    next: s + 1,
    kept: u
  }
}

function Tr(e, n, r) {
  let o = -1;
  for (let s = n; s < e.length; s++) {
    if (o = (o + 1) * 128 + (e[s] & 127), o > r) return null;
    if ((e[s] & 128) === 0) return {
      value: o,
      next: s + 1
    }
  }
  return null
}

function br(e) {
  let n = 0;
  for (let r = 0; r <= e.length; r++)
    if (r === e.length || e[r] === mr) {
      let o = r - n;
      if (o === 0 || e[n] === Mt && (o === 1 || o === 2 && e[n + 1] === Mt)) return !1;
      n = r + 1
    } else if (e[r] === 0) return !1;
  return !0
}

function kr(e, n) {
  let r = Buffer.compare(e.pathBytes, n.pathBytes);
  return r < 0 || r === 0 && e.stage < n.stage
}

function _r(e, n) {
  let r = n;
  while (r < e.length) {
    if (r + V > e.length) return "malformed";
    if (e[r] < 65 || e[r] > 90) return "unsupported";
    r += V + e.readUInt32BE(r + 4)
  }
  return r === e.length ? null : "malformed"
}

function wr(e, n, r, o, s) {
  let u = Se[s],
    l = (O) => {
      let I = e.length - V - 4 - O;
      return I >= Ne && e.toString("latin1", I, I + 4) === "EOIE" && e.readUInt32BE(I + 4) === 4 + O
    },
    h = Object.values(Se).some((O) => O !== u && l(O)),
    p = l(u);
  if (h) return "unsupported";
  let S = [];
  for (let O = n; O < e.length;) {
    let I = e.readUInt32BE(O + 4);
    S.push({
      name: e.toString("latin1", O, O + 4),
      at: O,
      size: I
    }), O += V + I
  }
  let y = S.at(-1),
    T = e.length - V - 4 - u;
  if (p) {
    if (y?.at !== T || y.name !== "EOIE") return "unsupported";
    let O = Lt(s);
    for (let D of S.slice(0, -1)) O.update(e.subarray(D.at, D.at + V));
    let I = T + V;
    if (e.readUInt32BE(I) !== n || !O.digest().equals(e.subarray(I + 4, I + 4 + u))) return "unsupported"
  }
  let b = S.filter((O) => O.name === "IEOT");
  if (b.length === 0) return null;
  if (!p || b.length > 1) return "unsupported";
  let {
    at: w,
    size: E
  } = b[0], A = w + V;
  if (E < 4 || (E - 4) % 8 !== 0 || e.readUInt32BE(A) !== 1) return "unsupported";
  let C = 0;
  for (let O = A + 4; O < A + E; O += 8) {
    if (e.readUInt32BE(O) !== r[C] || (o[C] ?? 0) > 0) return "unsupported";
    C += e.readUInt32BE(O + 4)
  }
  return C === r.length ? null : "unsupported"
}

function We(e, n, r) {
  for (let o = n; o < r; o++)
    if (e[o] !== 0) return !1;
  return !0
}
async function Er(e, n) {
  let r = Lt(n);
  for (let o = 0; o < e.length; o += vt) r.update(e.subarray(o, o + vt)), await Gt();
  return r.digest()
}

function Gt() {
  return new Promise((e) => setImmediate(e))
}
var Ar = 268435456,
  xr = 100663296,
  Jt = 1e7,
  Qt = 67108864,
  te = 500,
  Ir = 40000000,
  vr = 200000000,
  Cr = 2000000,
  Ut = 32,
  Or = 5000000,
  Wt = 256,
  Pr = 1048576,
  Br = 8000,
  $e = 33188,
  je = 33261,
  ze = 40960,
  Ye = 57344,
  Ht = 61440,
  qe = {
    file: $e,
    executable: je,
    symlink: ze,
    gitlink: Ye
  },
  Mr = "^(core\\.(autocrlf|filemode|symlinks|trustctime|checkstat|quotepath|sparsecheckout)|sparse\\.expectfilesoutsideofpatterns|extensions\\.objectformat)$";
async function Ve(e, n, r, o, s, u = Te === "\\") {
  let l = {
      repoDir: e,
      onWindows: u,
      spawn: n,
      signal: s,
      deadline: Date.now() + o
    },
    h = $t.get(n);
  if (h === void 0) h = Fr(l), $t.set(n, h);
  let [p, S] = await Promise.all([h, r.from === "commit" ? Ur(l, r.revision) : new Map]);
  if (!p || !S) return null;
  let {
    settings: y,
    index: T
  } = p;
  if (r.to === "work-tree") p.workTree ??= Wr(l, y, T).catch(() => null);
  let b = r.to === "index" ? {
    sides: T.sides,
    unseen: new Set
  } : await p.workTree;
  if (!b) return null;
  let {
    sides: w,
    unseen: E
  } = b, A = r.from === "index" ? new Map([...T.sides, ...Array.from(T.intended).filter(([G]) => !w.has(G))].filter(([G]) => !E.has(G))) : S, C = [];
  for (let [G, q] of w) {
    let K = A.get(G);
    if (K?.mode !== q.mode || K?.id !== q.id || q.bytes !== void 0) C.push(G)
  }
  for (let G of A.keys())
    if (!w.has(G)) C.push(G);
  C.sort();
  let O = new Map;
  if ((await Promise.all(C.map((G) => tn(l.repoDir, ne(G), O, l.onWindows).catch(() => !0)))).includes(!0)) return null;
  let D = await zr(l, C);
  if (D === null) return null;
  let P = _e(Buffer.alloc(0), y.objectFormat),
    N = [],
    F = [],
    U = {
      bytes: 0
    },
    B = 0,
    he = vr,
    se = 0;
  for (let G = 0; G < C.length; G += te) {
    let q = C.slice(G, G + te);
    if (await new Promise((H) => setImmediate(H)), be(l)) B = te;
    let K = B < te ? await Kr(l, q.flatMap((H) => [A.get(H), w.get(H), T.sides.get(H)].flatMap((j) => j !== void 0 && j.mode !== Ye && !j.bytes && !j.uncounted && j.id !== P ? [j.id] : [])), U) : new Map;
    if (K === null) return null;
    K.set(P, "");
    for (let H of q) {
      let j = D.get(H),
        X = A.get(H),
        J = w.get(H),
        Y = T.sides.get(H)?.id ?? "",
        M = Yr(J, Rt(j, y.autocrlf), K.get(Y) ?? (J?.id === Y ? J.bytes?.toString("latin1") : void 0), y.objectFormat);
      if (X?.mode === M?.mode && X?.id === M?.id) continue;
      let [z, Q] = [zt(X, K), zt(M, K)], ae = Jr(H, y.quotesPaths);
      if (N.push(Lr(X, M, ae)), B >= te || z === null || Q === null || Kt(X, z, j?.diff) || Kt(M, Q, j?.diff)) {
        F.push(`-	-	${ae}`);
        continue
      }
      let xe = Math.min(Ir, he),
        Ie = {
          left: xe
        },
        {
          added: An,
          removed: xn
        } = qr(z, Q, Ie);
      if (F.push(`${An}	${xn}	${ae}`), B++, he -= xe - Math.max(0, Ie.left), se += xe - Math.max(0, Ie.left), se > Or) {
        if (se = 0, await new Promise((In) => setImmediate(In)), be(l)) B = te
      }
    }
  }
  return [...N, ...F].join(`
`)
}

function Lr(e, n, r) {
  let o = !e ? "A" : !n ? "D" : (e.mode & Ht) !== (n.mode & Ht) ? "T" : "M",
    s = (u) => (u?.mode ?? 0).toString(8).padStart(6, "0");
  return `:${s(e)} ${s(n)} 0000000 0000000 ${o}	${r}`
}
var $t = new WeakMap;
async function Fr(e) {
  let n = await Dr(e),
    r = n && await Nr(e, n.objectFormat);
  return n && r && {
    settings: n,
    index: r
  }
}

function be({
  signal: e,
  deadline: n
}) {
  return e?.aborted === !0 || Date.now() > n
}

function ce({
  repoDir: e,
  spawn: n,
  signal: r,
  deadline: o
}, s, u) {
  return lt(Pt(), ["--literal-pathspecs", ...yn, ...s], {
    ...n,
    cwd: e,
    timeout: Math.max(1, o - Date.now()),
    abortSignal: r,
    preserveOutputOnError: !1,
    maxBuffer: xr,
    encoding: "latin1",
    stripFinalNewline: !1,
    ...u === void 0 ? {
      stdin: "ignore"
    } : {
      input: u
    }
  })
}
async function Dr(e) {
  let {
    stdout: n,
    exitCode: r
  } = await ce(e, ["config", "-z", "--get-regexp", Mr]);
  if (r !== 0 && r !== 1) return null;
  let o = new Map;
  for (let s of n.split("\x00")) {
    let [u = "", l] = s.split(`
`, 2);
    o.set(u, l ?? "true")
  }
  return {
    objectFormat: o.get("extensions.objectformat") === "sha256" ? "sha256" : "sha1",
    autocrlf: o.get("core.autocrlf") ?? null,
    trustsExecutableBit: ye(o.get("core.filemode")),
    hasSymlinks: ye(o.get("core.symlinks")),
    trustsChangeTime: ye(o.get("core.trustctime")),
    checksWholeStat: o.get("core.checkstat")?.toLowerCase() !== "minimal",
    quotesPaths: ye(o.get("core.quotepath")),
    looksAtSkippedFilesThatAreThere: de(o.get("core.sparsecheckout")) === !0 && de(o.get("sparse.expectfilesoutsideofpatterns")) !== !0
  }
}

function ye(e) {
  return de(e) !== !1
}
async function Nr({
  spawn: e,
  signal: n
}, r) {
  let o = e.env.GIT_INDEX_FILE;
  if (o === void 0) return null;
  let s;
  try {
    s = await Zt(o, Cc())
  } catch (u) {
    return k(u) === "ENOENT" ? {
      entries: [],
      sides: new Map,
      intended: new Map,
      modifiedSeconds: 0
    } : null
  }
  try {
    let u = await s.stat(),
      l = await Iw(s, Ar, u.size),
      h = l.overLimit ? null : await Nt(l.bytes, r, n ?? new AbortController().signal);
    if (h === null || "refused" in h) return null;
    let p = h.entries.map((y) => ({
      path: y.pathBytes.toString("latin1"),
      entry: y,
      stat: y.stat
    }));
    if (!p.every(({
        path: y
      }) => en(y))) return null;
    let S = p.filter(({
      entry: y
    }) => y.stage === 0).map(({
      path: y,
      entry: T
    }) => ({
      isIntended: T.isIntentToAdd,
      row: [y, {
        mode: qe[T.kind],
        id: T.id
      }]
    }));
    return {
      entries: p,
      sides: new Map(S.filter((y) => !y.isIntended).map((y) => y.row)),
      intended: new Map(S.filter((y) => y.isIntended).map((y) => y.row)),
      modifiedSeconds: Math.floor(u.mtimeMs / 1000)
    }
  } catch {
    return null
  } finally {
    await s.close().catch(() => {
      return
    })
  }
}
var Gr = /^(?:\.git|git~1)[. ]*(?::|$)/i;

function en(e, n = Te === "\\") {
  if (/^\/|\/\/|\/$/.test(e)) return !1;
  if (!/\.\.|\.git|git~1|[\\:]/i.test(e)) return !0;
  let r = e.split(/[/\\]/);
  if (r.some((o) => Gr.test(o))) return !1;
  return n ? !/[:\\]/.test(e) && r.every((o) => rz(o) !== "..") : !e.split("/").includes("..")
}
async function Ur(e, n) {
  let {
    stdout: r,
    code: o
  } = await ce(e, ["ls-tree", "-r", "-z", "--full-tree", n]);
  if (o !== 0) return null;
  let s = new Map;
  for (let u of r.split("\x00")) {
    let l = /^(\d{6}) \S+ ([0-9a-f]{40,64})\t(.+)$/s.exec(u);
    if (l) s.set(l[3], {
      mode: parseInt(l[1], 8),
      id: l[2]
    })
  }
  if (![...s.keys()].every((u) => en(u))) return null;
  return s
}
async function Wr(e, n, r) {
  let {
    repoDir: o
  } = e, s = new Map, u = new Set, l = new Map([
    ["", Promise.resolve(!0)]
  ]), h = {
    bytes: 0
  }, p = [];
  for (let [S, y] of r.entries.entries()) {
    let {
      path: T,
      entry: b,
      stat: w
    } = y;
    if (b.stage === 0 && (w.isAssumedUnchanged || b.isSkipWorktree && !n.looksAtSkippedFilesThatAreThere)) s.set(T, {
      mode: qe[b.kind],
      id: b.id
    });
    else if (T !== r.entries[S - 1]?.path) p.push(y)
  }
  for (let S = 0; S < p.length; S += Wt) {
    if (be(e)) return null;
    let y = p.slice(S, S + Wt),
      T = new Map(await Promise.all(L(y.map(({
        path: E
      }) => ne(E))).map(async (E) => [E, await nn(o, E, l).catch(() => {
        return
      })])));
    if (e.onWindows && [...T.values()].includes(void 0)) return null;
    let b = await Promise.all(y.map(({
        path: E
      }) => T.get(ne(E)) === !1 ? "ENOTDIR" : T.get(ne(E)) === void 0 ? "EACCES" : He(ke(o, E)).catch(k))),
      w = await Promise.all(y.map((E, A) => Hr(E, b[A], {
        lookup: e,
        settings: n,
        indexModifiedSeconds: r.modifiedSeconds,
        held: h
      })));
    for (let [E, A] of w.entries()) {
      if (A === "cannot-tell") return null;
      if (A === "unseen") u.add(y[E].path);
      else if (A !== null) s.set(y[E].path, A)
    }
  }
  return {
    sides: s,
    unseen: u
  }
}

function Hr({
  path: e,
  entry: n,
  stat: r
}, o, s) {
  let u = {
    mode: qe[n.kind],
    id: n.id
  };
  if (o === void 0 || typeof o === "string") {
    if (o !== "ENOENT" && o !== "ENOTDIR") return "unseen";
    return n.isSkipWorktree ? u : null
  }
  if (o.isDirectory()) return n.kind === "gitlink" ? u : null;
  if (!o.isFile() && !o.isSymbolicLink()) return null;
  let {
    settings: l
  } = s, h = o.isSymbolicLink() || !l.hasSymlinks && n.kind === "symlink", p = l.trustsExecutableBit ? (o.mode & 64) !== 0 : n.kind === "executable", S = h ? ze : p ? je : $e;
  if (n.stage === 0 && S === u.mode && jr(r, o, l, s.indexModifiedSeconds)) return u;
  if (o.isSymbolicLink()) return jt(e, S, u.id, "link", s);
  let y = o.size <= Jt && s.held.bytes + o.size <= Qt ? o.size : 0;
  return s.held.bytes += y, jt(e, S, u.id, y, s)
}
async function jt(e, n, r, o, {
  lookup: s,
  settings: u,
  held: l
}) {
  let h = ke(s.repoDir, e);
  try {
    if (o === "link") {
      let S = await Rr(h, {
        encoding: "buffer"
      });
      return {
        mode: n,
        id: _e(S, u.objectFormat),
        bytes: S
      }
    }
    let p = await $r(h, n, r, s, u, o);
    if (p === null || p === "cannot-tell" || !p.bytes) l.bytes -= o;
    return p
  } catch (p) {
    l.bytes -= o === "link" ? 0 : o;
    let S = k(p);
    return S === "ENOENT" || S === "ENOTDIR" || S === "ELOOP" ? null : "cannot-tell"
  }
}
async function $r(e, n, r, o, {
  objectFormat: s
}, u) {
  let l = await Zt(e, Cc());
  try {
    let h = await l.stat();
    if (!h.isFile()) return null;
    let {
      size: p
    } = h;
    if (p > u) {
      let T = Xt(s).update(`blob ${p}\x00`),
        b = Buffer.allocUnsafe(Pr);
      for (let w = 0; w < p;) {
        if (be(o)) return "cannot-tell";
        let {
          bytesRead: E
        } = await l.read(b, 0, b.length, w);
        if (E === 0) break;
        T.update(b.subarray(0, E)), w += E
      }
      return {
        mode: n,
        id: T.digest("hex"),
        uncounted: !0
      }
    }
    let {
      bytes: S
    } = await Iw(l, p, p), y = _e(S, s);
    return y === r && !S.includes(`\r
`) ? {
      mode: n,
      id: y
    } : {
      mode: n,
      id: y,
      bytes: S
    }
  } finally {
    await l.close().catch(() => {
      return
    })
  }
}

function jr(e, n, {
  trustsChangeTime: r,
  checksWholeStat: o
}, s) {
  return e.size !== 0 && e.size === n.size % 4294967296 && e.modifiedSeconds === Math.floor(n.mtimeMs / 1000) && e.modifiedSeconds < s && (!o || (!r || e.changedSeconds === Math.floor(n.ctimeMs / 1000)) && (e.inode === 0 || e.inode === n.ino % 4294967296))
}

function ne(e) {
  return e.slice(0, Math.max(0, e.lastIndexOf("/")))
}

function tn(e, n, r, o) {
  if (n === "") return Promise.resolve(!1);
  let s = r.get(n);
  if (s === void 0) s = tn(e, ne(n), r, o).then((u) => u || He(ke(e, n)).then((l) => l.isSymbolicLink(), (l) => {
    let h = k(l);
    if (h === "ENOENT" || h === "ENOTDIR" || h === "EACCES" && !o) return !1;
    throw l
  })), r.set(n, s);
  return s
}

function nn(e, n, r) {
  let o = r.get(n);
  if (o === void 0) o = nn(e, ne(n), r).then((s) => s && He(ke(e, n)).then((u) => u.isDirectory(), (u) => {
    let l = k(u);
    if (l === "ENOENT" || l === "ENOTDIR") return !1;
    throw u
  })), r.set(n, o);
  return o
}

function ke(e, n) {
  return Buffer.byteLength(n) === n.length ? e + Te + n : Buffer.concat([Buffer.from(e + Te), Buffer.from(n, "latin1")])
}
async function zr(e, n) {
  if (n.length === 0) return new Map;
  let {
    stdout: r,
    code: o
  } = await ce(e, ["check-attr", "-z", "--stdin", "text", "crlf", "eol", "diff"], Buffer.from(n.map((s) => `${s}\x00`).join(""), "latin1"));
  return o === 0 ? It(r) : null
}
async function Kr(e, n, r) {
  let o = L(n);
  if (o.length === 0) return new Map;
  let s = await ce(e, ["cat-file", "--batch-check=%(objectname) %(objecttype) %(objectsize)"], Buffer.from(o.map((S) => `${S}
`).join("")));
  if (s.code !== 0 || / missing$/m.test(s.stdout)) return null;
  let u = s.stdout.split(`
`).flatMap((S) => {
      let y = /^([0-9a-f]{40,64}) blob (\d+)$/.exec(S),
        T = Number(y?.[2]);
      if (!y || T > Jt || r.bytes + T > Qt) return [];
      return r.bytes += T, [y[1]]
    }),
    l = new Map;
  if (u.length === 0) return l;
  let {
    stdout: h,
    code: p
  } = await ce(e, ["cat-file", "--batch"], Buffer.from(u.map((S) => `${S}
`).join("")));
  if (p !== 0) return null;
  for (let S = 0; S < h.length;) {
    let y = h.indexOf(`
`, S),
      T = /^([0-9a-f]{40,64}) blob (\d+)$/.exec(h.slice(S, y));
    if (y === -1 || !T) return null;
    let b = y + 1 + Number(T[2]);
    l.set(T[1], h.slice(y + 1, b)), S = b + 1
  }
  return l
}

function Yr(e, n, r, o) {
  if (e?.bytes === void 0 || e.mode === ze) return e;
  let s = xt(e.bytes, n, n === "if-text" && r?.includes(`\r
`) ? Buffer.from(r, "latin1") : void 0);
  return s === null ? e : {
    mode: e.mode,
    id: _e(s, o),
    bytes: s
  }
}

function _e(e, n) {
  return Xt(n).update(`blob ${e.length}\x00`).update(e).digest("hex")
}

function zt(e, n) {
  if (e === void 0) return "";
  if (e.mode === Ye) return `Subproject commit ${e.id}
`;
  if (e.uncounted) return null;
  return e.bytes?.toString("latin1") ?? n.get(e.id) ?? null
}

function Kt(e, n, r) {
  if ((e?.mode === $e || e?.mode === je) && (r === "set" || r === "unset")) return r === "unset";
  let s = n.indexOf("\x00");
  return s !== -1 && s < Br
}

function qr(e, n, r) {
  let [o, s] = Xr(e, n), u = {
    added: qt(s),
    removed: qt(o)
  };
  if (r.left -= (u.added + u.removed) * Ut, r.left < 0) return u;
  let [l, h] = [Vt(o), Vt(s)], p = {
    added: 0,
    removed: 0
  }, S = [
    [0, l.length, 0, h.length]
  ];
  for (let y = S.pop(); y !== void 0; y = S.pop()) {
    let [T = 0, b = 0, w = 0, E = 0] = y;
    while (T < b && w < E && l[T] === h[w]) T++, w++;
    while (T < b && w < E && l[b - 1] === h[E - 1]) b--, E--;
    let [A, C] = [b - T, E - w];
    if (A === 0 || C === 0) {
      p.removed += A, p.added += C;
      continue
    }
    let [O, I] = [l.slice(T, b), h.slice(w, E)], D = Yt(O, I, r, Cr);
    if (D === null) {
      r.left -= (A + C) * Ut;
      let P = r.left < 0 ? [] : Vr(O, I);
      if (P.length > 0) {
        let [N, F] = [T, w];
        for (let [U, B] of P) S.push([N, T + U, F, w + B]), N = T + U + 1, F = w + B + 1;
        S.push([N, b, F, E]);
        continue
      }
      D = Yt(O, I, r, r.left) ?? A + C
    }
    p.added += (D + C - A) / 2, p.removed += (D - C + A) / 2
  }
  return p
}

function Yt(e, n, r, o) {
  let s = Math.min(o, r.left),
    u = 0,
    l = Math.min(e.length + n.length, Math.ceil(Math.sqrt(2 * Math.max(0, s)))),
    h = new Int32Array(2 * l + 3),
    p = l + 1;
  for (let S = 0; S <= l && u <= s; S++)
    for (let y = -S; y <= S; y += 2) {
      let [T, b] = [h[p + y - 1], h[p + y + 1]], w = y === -S || y !== S && T < b ? b : T + 1, E = w;
      while (E < e.length && E - y < n.length && e[E] === n[E - y]) E++;
      if (h[p + y] = E, u += 1 + E - w, E >= e.length && E - y >= n.length) return r.left -= u, S
    }
  return r.left -= u, null
}

function Vr(e, n) {
  let o = new Map;
  for (let [p, S] of n.entries()) o.set(S, o.has(S) ? -1 : p);
  let s = new Map;
  for (let [p, S] of e.entries()) s.set(S, s.has(S) ? -1 : p);
  let u = [],
    l = [];
  for (let [p, S] of s) {
    let y = o.get(p) ?? -1;
    if (S === -1 || y === -1) continue;
    let T = 0,
      b = l.length;
    while (T < b) {
      let w = T + b >> 1;
      if (u[l[w]].newAt < y) T = w + 1;
      else b = w
    }
    u.push({
      oldAt: S,
      newAt: y,
      previous: T === 0 ? -1 : l[T - 1]
    }), l[T] = u.length - 1
  }
  let h = [];
  for (let p = l.at(-1) ?? -1; p !== -1; p = u[p].previous) h.push([u[p].oldAt, u[p].newAt]);
  return h.reverse()
}

function Xr(e, n) {
  let r = Math.min(e.length, n.length),
    o = 0;
  while (o < r && e.charCodeAt(o) === n.charCodeAt(o)) o++;
  o = o === 0 ? 0 : e.lastIndexOf(`
`, o - 1) + 1;
  let s = 0;
  while (s < r - o && e.charCodeAt(e.length - 1 - s) === n.charCodeAt(n.length - 1 - s)) s++;
  let u = e.indexOf(`
`, e.length - s);
  return s = s === 0 || u === -1 ? 0 : e.length - u - 1, [e.slice(o, e.length - s), n.slice(o, n.length - s)]
}

function qt(e) {
  let n = e === "" || e.endsWith(`
`) ? 0 : 1;
  for (let r = 0; r < e.length; r++)
    if (e.charCodeAt(r) === 10) n++;
  return n
}

function Vt(e) {
  return e === "" ? [] : e.match(/[^\n]*\n|[^\n]+$/g) ?? []
}
var Zr = new Map([
  [7, "\\a"],
  [8, "\\b"],
  [9, "\\t"],
  [10, "\\n"],
  [11, "\\v"],
  [12, "\\f"],
  [13, "\\r"],
  [34, "\\\""],
  [92, "\\\\"]
]);

function Jr(e, n) {
  if (!(n ? /[^\x20-\x7e]|["\\]/ : /[^\x20-\x7e\x80-\xff]|["\\]/).test(e)) return Buffer.from(e, "latin1").toString("utf8");
  let o = Array.from(e, (s) => {
    let u = s.charCodeAt(0);
    return Zr.get(u) ?? (u < 32 || u === 127 || n && u >= 128 ? `\\${u.toString(8).padStart(3,"0")}` : s)
  }).join("");
  return `"${Buffer.from(o,"latin1").toString("utf8")}"`
}
var tt = ["--no-optional-locks", "-c", "diff.relative=false", "diff", ...t1s, fS],
  A9 = 5000,
  me = 50,
  oo = 500,
  Ymr = 1e6,
  SPn = 400,
  Z = 500;
async function Xmr(e, n, r = "auto", o, s, u) {
  if (o === void 0 && !kXt()) return re("no-repository", u);
  if (await gn(n, o, s)) return re("repository-busy", u);
  if (r === "branch") {
    let y = await rn(e, n, !0, o, void 0, s);
    return y === null || y === "base-stats-failed" ? re("diff-failed", u) : y
  }
  let l = await ge("HEAD", n, o, s);
  if (l === null) return await Qe(n, o, s) ?? re("diff-failed", u);
  if (l.stats.filesCount > Z) return {
    ...l,
    hunks: new Map,
    source: {
      kind: "working-tree"
    }
  };
  if (r === "session") return await Promise.all([io(l, o), Re(l, n, o, void 0, !0, s)]), {
    ...l,
    hunks: new Map,
    source: {
      kind: "working-tree"
    }
  };
  let h = await Re(l, n, o, void 0, !1, s);
  if (r === "branch-point") return await so(e, n, l, o, s) ?? re("diff-failed", u);
  if (r === "uncommitted" || l.stats.filesCount > 0) return {
    ...l,
    hunks: new Map,
    source: {
      kind: "working-tree"
    }
  };
  let p = await rn(e, n, !1, o, h, s),
    S = {
      ...l,
      hunks: new Map,
      source: {
        kind: "working-tree"
      }
    };
  if (p === "base-stats-failed") return fn(S, o) ?? re("diff-failed", u);
  if (p === null || p.stats.filesCount === 0) return S;
  return p
}

function re(e, n) {
  return n?.(e), null
}

function fn(e, n) {
  return n === void 0 || e.stats.filesCount > 0 ? e : null
}
async function rn(e, n, r, o, s, u) {
  let l = await hn(e, n, o, void 0, u);
  if (l.kind === "error") return r ? Qe(n, o, u) : null;
  let h, p;
  if (l.kind !== "merge-base") {
    if (!r) return null;
    h = await ge("HEAD", n, o, u), p = l.kind === "head-is-base" ? {
      kind: "branch",
      baseBranch: l.baseBranch,
      baseRef: "HEAD"
    } : {
      kind: "working-tree"
    }
  } else h = await ge(l.mergeBase, n, o, u), p = {
    kind: "branch",
    baseBranch: l.baseBranch,
    baseRef: l.mergeBase
  };
  if (h === null) return l.kind === "merge-base" ? "base-stats-failed" : Qe(n, o, u);
  if (h.stats.filesCount <= Z) await Re(h, n, o, s, !1, u);
  return {
    ...h,
    hunks: new Map,
    source: p
  }
}
async function so(e, n, r, o, s) {
  let u = {
      ...r,
      hunks: new Map,
      source: {
        kind: "working-tree"
      }
    },
    l = Tn(o ?? put());
  if (l === null) return u;
  let h = await hn(e, n, o, l, s);
  if (h.kind !== "merge-base") return u;
  let p = await ge(h.mergeBase, n, o, s, Z);
  if (p === null) return fn(u, o);
  if (p.stats.filesCount === 0) return u;
  let S = {
      ...p.stats
    },
    y = new Map;
  for (let [T, b] of r.perFileStats) {
    let w = p.perFileStats.get(T);
    if (!b.isUntracked) {
      let {
        previousPath: E,
        newPath: A,
        ...C
      } = b;
      y.set(T, w ?? (b.previousPath === void 0 ? b : C));
      continue
    }
    if (y.set(T, b), w === void 0) S.filesCount += 1;
    else S.linesAdded -= w.added, S.linesRemoved -= w.removed
  }
  for (let [T, b] of p.perFileStats) {
    if (y.size >= me) break;
    if (!y.has(T)) y.set(T, b)
  }
  return {
    stats: S,
    perFileStats: y,
    hunks: new Map,
    source: {
      kind: "branch",
      baseBranch: h.baseBranch,
      baseRef: h.mergeBase
    }
  }
}
async function io(e, n) {
  if (e.perFileStats.size === 0) return;
  let r = n ?? put(),
    o = Dxe();
  await Promise.all(Array.from(e.perFileStats, async ([s, u]) => {
    try {
      let l = await un(fe(r, s));
      if (Math.max(l.mtimeMs, l.ctimeMs) < o) u.preSession = !0
    } catch {}
  }))
}
async function Re(e, n, r, o, s = !1, u) {
  let l = me - e.perFileStats.size;
  if (l <= 0) return null;
  let h = o !== void 0 ? o : await ho(l, n, r, s, u);
  if (h)
    for (let [p, S] of h) {
      if (e.perFileStats.has(p)) continue;
      e.perFileStats.set(p, S), e.stats.filesCount += 1
    }
  return h
}
async function Qe(e, n, r) {
  if ((await ut(Pt(), ["--no-optional-locks", "rev-parse", "--verify", "--quiet", "HEAD"], {
      timeout: A9,
      preserveOutputOnError: !1,
      abortSignal: e,
      ...oe(n, r),
      cwd: n
    })).exitCode !== 1) return null;
  let s = {
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
    u = await ge("--cached", e, n, r);
  if (u !== null) {
    if (s.stats = u.stats, s.perFileStats = u.perFileStats, u.stats.filesCount > Z) return s;
    if (u.stats.filesCount > 0) await ao(s, e, n, r)
  }
  return await Re(s, e, n, void 0, !1, r), s
}
async function ao(e, n, r, o) {
  let s = await pn(n, r, o);
  if (s === null) return;
  for (let [u, l] of s.perFileStats) {
    let h = e.perFileStats.get(u);
    if (h === void 0) continue;
    let p = h.isBinary || l.isBinary,
      S = p ? 0 : Math.max(0, h.added + l.added - l.removed);
    e.stats.linesAdded += S - h.added, e.perFileStats.set(u, {
      ...h,
      added: S,
      removed: 0,
      isBinary: p,
      ...l.status === "removed" && {
        status: "removed"
      }
    })
  }
}
async function pn(e, n, r) {
  if (nt(r)) {
    let s = n === void 0 ? null : await Ve(n, r, {
      from: "index",
      to: "work-tree"
    }, A9, e);
    return s === null ? null : Qmr(s, Number.POSITIVE_INFINITY, "within-root")
  }
  let o = await ut(Pt(), [...tt, "--raw", "--numstat"], {
    timeout: A9,
    preserveOutputOnError: !1,
    abortSignal: e,
    ...oe(n, r, {
      userLocale: !0
    }),
    cwd: n
  });
  if (o.code !== 0) return null;
  return Qmr(o.stdout, Number.POSITIVE_INFINITY, r === void 0 ? "all" : "within-root")
}

function nt(e) {
  return e !== void 0 && Gpe()
}
async function ge(e, n, r, o, s = me) {
  if (o === void 0) {
    let {
      stdout: h,
      code: p
    } = await Ae([e, "--shortstat"], n, r, o);
    if (p === 0) {
      let S = OIt(h);
      if (S && S.filesCount > Z) return {
        stats: S,
        perFileStats: new Map
      }
    }
  }
  let u;
  if (nt(o)) {
    let h = r === void 0 ? null : await Ve(r, o, e === "--cached" ? {
      from: "nothing",
      to: "index"
    } : {
      from: "commit",
      revision: e,
      to: "work-tree"
    }, A9, n);
    if (h === null) return null;
    u = h
  } else {
    let {
      stdout: h,
      code: p
    } = await Ae([e, "--raw", "--numstat"], n, r, o);
    if (p !== 0) return null;
    u = h
  }
  let l = Qmr(u, s, o === void 0 ? "all" : "within-root");
  if (o !== void 0 && l.stats.filesCount > Z) return {
    stats: l.stats,
    perFileStats: new Map
  };
  return l
}

function Ae(e, n, r, o) {
  let s = [...tt, ...e, "--"],
    u = {
      timeout: A9,
      preserveOutputOnError: !1,
      abortSignal: n
    };
  if (r !== void 0) return ut(Pt(), s, {
    ...u,
    ...oe(r, o),
    cwd: r,
    stdin: "ignore"
  });
  return qmr(ie().cwd(), s, {}, u)
}

function Jmr(e) {
  let n = CU(e);
  return n !== null && n.workTree !== null && n.gitDir === fe(n.workTree, ".git") ? n : null
}

function uo(e) {
  return {
    env: {
      ...ys(jEe, {
        base: es(),
        repository: Jmr(e) ?? {
          gitDir: dte,
          workTree: e,
          commonDir: dte
        }
      }),
      ...P9e,
      ...rY(void 0, lnt()),
      [NSt]: "1"
    },
    extendEnv: !1,
    gitStartsIn: gxe.filesystemRoot()
  }
}

function lo(e) {
  return {
    env: {
      ...ys(jEe, {
        base: es(),
        repository: {
          gitDir: dte,
          workTree: e,
          commonDir: dte
        }
      }),
      ...P9e,
      [NSt]: "1"
    },
    extendEnv: !1,
    gitStartsIn: gxe.filesystemRoot()
  }
}

function oe(e, n, {
  userLocale: r
} = {}) {
  if (e === void 0) return {
    env: ys(void 0, {
      userLocale: r
    })
  };
  return n ?? lo(e)
}

function wXt(e) {
  if (e.noCommits) return "--cached";
  return e.source.kind === "branch" ? e.source.baseRef : "HEAD"
}
async function wRi(e, n = "HEAD") {
  if (!kXt()) return null;
  if (await gn(e, void 0, void 0)) return null;
  let {
    stdout: r,
    code: o
  } = await Ae([n, "--shortstat"], e, void 0, void 0);
  if (o === 0) {
    let h = OIt(r);
    if (h && h.filesCount > Z) return {
      hunks: new Map,
      skippedLarge: new Set
    }
  }
  let {
    stdout: s,
    code: u
  } = await Ae([...Sdn, n], e, void 0, void 0);
  if (u !== 0) return null;
  let l = cio(s);
  if (n === "--cached" && l.hunks.size > 0) {
    let h = await pn(e, void 0, void 0);
    if (h === null) return null;
    for (let p of h.perFileStats.keys()) l.hunks.delete(p)
  }
  return l
}

function bWe() {
  return ie().cwd()
}

function kXt() {
  let e = bWe(),
    n = um().diffCheckoutIsRepo,
    r = n.get(e);
  if (r !== void 0) return r;
  let o = ty(e) !== null;
  return n.set(e, o), o
}

function put() {
  let e = bWe();
  return fr(e) ?? e
}
async function wPn(e, n) {
  let {
    stdout: r,
    code: o
  } = await ut(Pt(), ["--no-optional-locks", "rev-parse", "--show-toplevel"], {
    timeout: A9,
    preserveOutputOnError: !1,
    abortSignal: e,
    ...n === void 0 ? {
      env: ys()
    } : uo(n),
    cwd: n
  });
  if (o !== 0 || r.trim() === "") return null;
  return r.trim()
}

function Qmr(e, n = me, r = "all") {
  let o = e.split(`
`).filter(Boolean),
    s = o.filter((w) => w.startsWith(":")),
    u = o.filter((w) => !w.startsWith(":") && Dt(w, "\t") + 1 >= 3),
    l = s.length === u.length,
    h = new Map;
  if (!l)
    for (let [w, E] of s.entries()) {
      let [, A = "", C] = E.split("\t"), O = C === void 0 ? A : co(A, C), I = h.get(O);
      if (I === void 0) h.set(O, {
        indices: [w],
        next: 0
      });
      else I.indices.push(w)
    }
  let p = 0,
    S = 0,
    y = 0,
    T = 0,
    b = new Map;
  for (let [w, E] of u.entries()) {
    let A = E.split("\t"),
      C = A.slice(2).join("\t"),
      O = l ? s[w] : void 0,
      I = h.get(C);
    if (I !== void 0) {
      while (I.next < I.indices.length && I.indices[I.next] < p) I.next++;
      let B = I.indices[I.next];
      if (B !== void 0) I.next++, p = B + 1, O = s[B]
    }
    if (r === "within-root" && !lio(C)) continue;
    T++;
    let D = A[0],
      P = A[1],
      N = D === "-" || P === "-",
      F = N ? 0 : parseInt(D ?? "0", 10) || 0,
      U = N ? 0 : parseInt(P ?? "0", 10) || 0;
    if (S += F, y += U, b.size < n) {
      let B = b.has(C);
      b.set(C, {
        added: F,
        removed: U,
        isBinary: N,
        isUntracked: !1,
        ...O !== void 0 && po(O, B)
      })
    }
  }
  return {
    stats: {
      filesCount: T,
      linesAdded: S,
      linesRemoved: y
    },
    perFileStats: b
  }
}

function co(e, n) {
  if (e.startsWith('"') || n.startsWith('"')) return `${e} => ${n}`;
  let r = 0;
  for (let S = 0; S < e.length && S < n.length && e[S] === n[S]; S++)
    if (e[S] === "/") r = S + 1;
  let o = r === 0 ? 0 : r - 1,
    s = 0;
  for (let S = e.length - 1, y = n.length - 1; S >= o && y >= o && e[S] === n[y]; S--, y--)
    if (e[S] === "/") s = e.length - S;
  if (r + s === 0) return `${e} => ${n}`;
  let u = e.slice(0, r),
    l = e.slice(e.length - s),
    h = e.slice(r, Math.max(r, e.length - s)),
    p = n.slice(r, Math.max(r, n.length - s));
  return `${u}{${h} => ${p}}${l}`
}
var fo = {
  A: "added",
  D: "removed",
  R: "renamed",
  C: "copied"
};

function po(e, n) {
  let [r, o, s] = e.split("\t"), u = r.slice(r.lastIndexOf(" ") + 1)[0], l = fo[u] ?? "modified", h = et(s ?? o);
  if (n || h === void 0) return {
    status: l
  };
  if (s === void 0) return o.startsWith('"') ? {
    status: l,
    newPath: h
  } : {
    status: l
  };
  let p = et(o);
  return p === void 0 ? {
    status: l
  } : {
    status: l,
    previousPath: p,
    newPath: h
  }
}

function et(e) {
  let n = e.startsWith('"') ? SWe(e.slice(1, -1)) : e;
  return !xoe(n) && !dio.test(n) && !/\\|^[A-Za-z]:| => /.test(n) && !cn(n) && n.split("/").every((o) => rz(o) !== "..") ? n : void 0
}

function lio(e) {
  let n = uls(e);
  return n !== null && n.every((r) => !cn(r) && !ro.isAbsolute(r) && !/^[A-Za-z]:/.test(r) && r.split(/[/\\{}]/).every((o) => rz(o) !== ".."))
}

function uls(e) {
  if (e.startsWith('"')) {
    let h = Ze(e);
    if (h === -1) return null;
    let p = SWe(e.slice(1, h)),
      S = e.slice(h + 1);
    if (S === "") return [p];
    let y = S.startsWith(" => ") ? S.slice(4) : null;
    if (y === null) return null;
    if (!y.startsWith('"')) return y.includes('"') || y.includes(" => ") ? null : [p, y];
    return Ze(y) === y.length - 1 ? [p, SWe(y.slice(1, -1))] : null
  }
  let n = e.indexOf(" => ");
  if (n === -1) return e.includes('"') ? null : [e];
  if (e.indexOf(" => ", n + 1) !== -1) return null;
  let r = e.slice(0, n),
    o = e.slice(n + 4);
  if (r.includes('"')) return null;
  if (o.startsWith('"')) return Ze(o) === o.length - 1 ? [r, SWe(o.slice(1, -1))] : null;
  if (o.includes('"')) return null;
  let s = [r, o],
    u = r.indexOf("{"),
    l = o.indexOf("}");
  if (r.indexOf("{", u + 1) !== -1 || o.indexOf("}", l + 1) !== -1) return null;
  if (u !== -1 && l !== -1) {
    let h = r.slice(0, u),
      p = o.slice(l + 1);
    s.push(`${h}${r.slice(u+1)}${p}`, `${h}${o.slice(0,l)}${p}`)
  }
  return s
}

function Ze(e) {
  for (let n = 1; n < e.length; n++)
    if (e[n] === "\\") n++;
    else if (e[n] === '"') return n;
  return -1
}
var dio = new RegExp(`[${ib}\\uFFFD]`, "u");

function SWe(e) {
  let n = [],
    r = Array.from(e);
  for (let o = 0; o < r.length; o++) {
    let s = r[o];
    if (s !== "\\") {
      n.push(...Buffer.from(s, "utf8"));
      continue
    }
    let u = r[o + 1] ?? "",
      l = r.slice(o + 1, o + 4).join("");
    if (/^[0-3][0-7]{2}$/.test(l)) {
      n.push(parseInt(l, 8)), o += 3;
      continue
    }
    let p = {
      n: 10,
      t: 9,
      r: 13,
      b: 8,
      a: 7,
      f: 12,
      v: 11,
      '"': 34,
      "\\": 92
    } [u];
    if (p !== void 0) n.push(p), o += 1;
    else n.push(92)
  }
  return Buffer.from(n).toString("utf8")
}

function cio(e) {
  let n = new Map,
    r = new Set;
  if (!e.trim()) return {
    hunks: n,
    skippedLarge: r
  };
  let o = e.split(/^diff --git /m).filter(Boolean);
  for (let s of o) {
    if (n.size + r.size >= me) break;
    let u = s.indexOf(`
`),
      l = u === -1 ? s : s.slice(0, u),
      h = l.match(/^a\/(.+) b\/\1$/),
      p = h ?? l.match(/^(?:"a\/((?:[^"\\]|\\.)*)"|a\/(.+?)) (?:"b\/((?:[^"\\]|\\.)*)"|b\/(.+))$/);
    if (!p) continue;
    let S = h ? h[1] : p[3] !== void 0 ? SWe(p[3]) : p[4] ?? (p[1] !== void 0 ? SWe(p[1]) : p[2] ?? "");
    if (s.length > Ymr) {
      r.add(S);
      continue
    }
    let y = s.split(`
`),
      T = [],
      b = null,
      w = 0;
    for (let E = 1; E < y.length; E++) {
      let A = y[E] ?? "",
        C = A.match(/^@@ -(\d+)(?:,(\d+))? \+(\d+)(?:,(\d+))? @@/);
      if (C) {
        if (b) T.push(b);
        b = {
          oldStart: parseInt(C[1] ?? "0", 10),
          oldLines: parseInt(C[2] ?? "1", 10),
          newStart: parseInt(C[3] ?? "0", 10),
          newLines: parseInt(C[4] ?? "1", 10),
          lines: []
        };
        continue
      }
      if (b === null && (A.startsWith("index ") || A.startsWith("---") || A.startsWith("+++") || A.startsWith("new file") || A.startsWith("deleted file") || A.startsWith("old mode") || A.startsWith("new mode") || A.startsWith("Binary files"))) continue;
      if (b && (A.startsWith("+") || A.startsWith("-") || A.startsWith(" ") || A === "")) {
        if (w >= SPn) continue;
        b.lines.push("" + A), w++
      }
    }
    if (b) T.push(b);
    if (T.length > 0) n.set(S, T)
  }
  return {
    hunks: n,
    skippedLarge: r
  }
}
async function gn(e, n, r) {
  let o = await Ute(n ?? bWe());
  if (!o) return !1;
  let s = ["MERGE_HEAD", "REBASE_HEAD", "CHERRY_PICK_HEAD", "REVERT_HEAD", "rebase-merge", fe("rebase-apply", "rebasing")],
    [u, l, h, p, S, y] = await Promise.all(s.map((w) => Qr(fe(o, w)).then(() => !0).catch(() => !1))),
    T = S || y;
  if (u || h || p || l && T) return !0;
  if (nt(r)) return !1;
  let b = await R0t(o, T ? [...Hpt, "REBASE_HEAD"] : Hpt, async (w) => (await ut(Pt(), ["--no-optional-locks", ...w], {
    timeout: A9,
    preserveOutputOnError: !1,
    abortSignal: e,
    ...oe(n, r),
    cwd: n
  })).exitCode);
  return b !== null && b.size > 0
}
class mn {
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
var go = new W(() => new mn);
async function hn(e, n, r, o, s) {
  let u = go.of(e),
    l = await mo(n, r, o, s);
  if (l.kind === "error") {
    if (!u.baseResolveSadLogged) u.markBaseResolveSadLogged(), c("diff_base_resolve", l.reason)
  } else if (!u.baseResolveOkLogged) u.markBaseResolveOkLogged(), g("diff_base_resolve", {
    outcome: f(l.kind)
  });
  return l
}
async function mo(e, n, r, o) {
  let s = {
      timeout: A9,
      abortSignal: e,
      ...oe(n, o)
    },
    [u, l] = await Promise.all([Qu(n, s), bM(n, s)]);
  if (!u || u === "HEAD") return {
    kind: "none"
  };
  let h = r ?? l;
  if (h.startsWith("-") || dio.test(h) || r === void 0 && /\.\.|[\s~^:?*[\\]|@\{/.test(h)) return {
    kind: "none"
  };
  let p = {
    ...s,
    preserveOutputOnError: !1,
    cwd: n
  };
  if (o !== void 0 && Gpe()) {
    let T = await ut(Pt(), ["--no-optional-locks", "merge-base", "HEAD", `refs/remotes/origin/${h}`], p);
    if (T.code === 0 && T.stdout.trim()) return on(T.stdout.trim(), h, p)
  }
  if (u === h) return {
    kind: "head-is-base",
    baseBranch: h
  };
  let S = !1,
    y = await Sn(h, async (T) => {
      let b = await ut(Pt(), T, p);
      if (b.exitCode === 1) S = !0;
      return b
    });
  if (!y) {
    if (S) return {
      kind: "none"
    };
    for (let T of [`refs/remotes/origin/${h}`, `refs/heads/${h}`]) {
      let b = await ut(Pt(), ["--no-optional-locks", "show-ref", "--verify", "--quiet", T], p);
      if (b.exitCode === 0 || b.exitCode === void 0) return {
        kind: "error",
        reason: "merge_base_failed"
      }
    }
    return {
      kind: "none"
    }
  }
  return on(y, h, p)
}
async function on(e, n, r) {
  let o = await ut(Pt(), ["--no-optional-locks", "rev-parse", "HEAD"], r);
  if (o.code !== 0) return {
    kind: "error",
    reason: "head_rev_parse_failed"
  };
  if (o.stdout.trim() === e) return {
    kind: "head-is-base",
    baseBranch: n
  };
  return {
    kind: "merge-base",
    mergeBase: e,
    baseBranch: n
  }
}
async function ho(e, n, r, o = !1, s) {
  let {
    stdout: u,
    code: l
  } = await ut(Pt(), ["--no-optional-locks", "ls-files", "--others", "--exclude-standard", "--full-name"], {
    timeout: A9,
    preserveOutputOnError: !1,
    abortSignal: n,
    ...oe(r, s),
    cwd: r
  });
  if (l !== 0) return null;
  let h = u.split(`
`).filter((w) => w !== "" && (s === void 0 || lio(w)));
  if (h.length === 0) return null;
  let p = r ?? put(),
    S = Dxe(),
    y = await Promise.all(h.slice(0, oo).map(async (w) => {
      try {
        let E = await un(fe(p, w));
        return {
          filePath: w,
          preSession: Math.max(E.mtimeMs, E.ctimeMs) < S
        }
      } catch {
        return {
          filePath: w,
          preSession: !1
        }
      }
    })),
    T = y.filter((w) => !w.preSession);
  if (o) T.push(...y.filter((w) => w.preSession));
  if (T.length === 0) return null;
  let b = new Map;
  for (let {
      filePath: w,
      preSession: E
    }
    of T.slice(0, e)) {
    let A = w.startsWith('"') ? et(w) : void 0;
    b.set(w, {
      added: 0,
      removed: 0,
      isBinary: !1,
      isUntracked: !0,
      status: "added",
      ...A !== void 0 && {
        newPath: A
      },
      ...E && {
        preSession: E
      }
    })
  }
  return b
}

function OIt(e) {
  let n = e.match(/(\d+)\s+files?\s+changed(?:,\s+(\d+)\s+insertions?\(\+\))?(?:,\s+(\d+)\s+deletions?\(-\))?/);
  if (!n) return null;
  return {
    filesCount: parseInt(n[1] ?? "0", 10),
    linesAdded: parseInt(n[2] ?? "0", 10),
    linesRemoved: parseInt(n[3] ?? "0", 10)
  }
}
var So = 3000;

function uio({
  gitDiffRead: e
}) {
  if (!e) return !1;
  if (i.CLAUDE_CODE_REMOTE) return !0;
  return R_() && v("tengu_bridge_child_tool_diff", !0)
}
var yo = 65536;

function fio(e) {
  return Boolean(i.CLAUDE_CODE_REMOTE) || Buffer.byteLength(e.patch, "utf8") <= yo
}
async function pio(e) {
  let n = fr(Je(e));
  if (!n) return null;
  let r = await dn(n).catch(() => null);
  if (r === null) return null;
  let o = await sn(r);
  if (o === null) return null;
  let s = an(o),
    u = [Ee(), ...i.CLAUDE_CODE_REPO_CHECKOUTS ? gWe().values() : []],
    l = null;
  for (let w of u) {
    let E = bPn(w);
    if (E === null) continue;
    let A = await sn(E);
    if (A === null) continue;
    if (A === o) {
      l = A;
      break
    }
    let C = an(A);
    if (l === null && C === s) l = C
  }
  if (l === null) return null;
  let h = {
      gitDir: l,
      workTree: r
    },
    p = to(n, e).split(no).join("/"),
    S = kBs(),
    {
      code: y
    } = await we(h, ["--no-optional-locks", "ls-files", "--error-unmatch", "--", p]);
  if (y === 0) {
    let w = await bo(h, n),
      {
        stdout: E,
        code: A
      } = await we(h, [...tt, ...Sdn, w, "--", p], {
        userLocale: !0
      });
    if (A !== 0) return null;
    if (!E) return null;
    return {
      ...To(p, E, "modified"),
      repository: S
    }
  }
  let T = ldn() ? await _t(e, p, Ymr, (w, E) => we(h, w, E)) : void 0;
  if (T === null) return null;
  let b = await ko(p, e, T);
  if (!b) return null;
  return {
    ...b,
    repository: S
  }
}

function To(e, n, r) {
  let o = n.split(`
`),
    s = [],
    u = !1,
    l = 0,
    h = 0;
  for (let p of o) {
    if (p.startsWith("@@")) u = !0;
    if (u) {
      if (s.push(p), p.startsWith("+") && !p.startsWith("+++")) l++;
      else if (p.startsWith("-") && !p.startsWith("---")) h++
    }
  }
  return {
    filename: e,
    status: r,
    additions: l,
    deletions: h,
    changes: l + h,
    patch: s.join(`
`)
  }
}
async function Sn(e, n) {
  let r = [];
  for (let l of [`origin/${e}`, e]) {
    let {
      stdout: h,
      code: p
    } = await n(["--no-optional-locks", "merge-base", "HEAD", l]);
    if (p === 0 && h.trim()) r.push(h.trim())
  }
  let [o, s] = r;
  if (!o) return null;
  if (!s || o === s) return o;
  let {
    code: u
  } = await n(["--no-optional-locks", "merge-base", "--is-ancestor", o, s]);
  return u === 0 ? s : o
}
async function sn(e) {
  let n = await Ute(e);
  return n === null ? null : dn(n).catch(() => null)
}

function an(e) {
  let n = Je(e),
    r = Je(n);
  return Xe(e) !== ".git" && Xe(n) === "worktrees" && Xe(r).endsWith(".git") ? r : e
}

function we({
  gitDir: e,
  workTree: n
}, r, {
  userLocale: o,
  config: s
} = {}) {
  return lt(Pt(), [`--git-dir=${e}`, `--work-tree=${n}`, ...r], {
    cwd: n,
    timeout: So,
    env: ys(s, {
      userLocale: o
    })
  })
}

function Tn(e) {
  let n = Jso(e),
    r = (n !== void 0 ? dt().get(n) : void 0) || i.CLAUDE_CODE_BASE_REF;
  if (!r) return;
  return r.startsWith("-") ? null : r
}
async function bo(e, n) {
  let r = Tn(n);

  function o(l) {
    return we(e, l)
  }
  if (r === void 0) {
    let l = await bM();
    if (l.startsWith("-")) return "HEAD";
    return await Sn(l, o) ?? "HEAD"
  }
  let {
    stdout: s,
    code: u
  } = await o(["--no-optional-locks", "merge-base", "HEAD", r ?? "HEAD"]);
  if (u === 0 && s.trim()) return s.trim();
  return "HEAD"
}
async function ko(e, n, r) {
  try {
    if (r === void 0 && !await NFr(n, Ymr)) return null;
    let s = (r ?? await eo(n, "utf-8")).split(`
`);
    if (s.length > 0 && s.at(-1) === "") s.pop();
    let u = s.length,
      l = s.map((p) => `+${p}`).join(`
`),
      h = `@@ -0,0 +1,${u} @@
${l}`;
    return {
      filename: e,
      status: "added",
      additions: u,
      deletions: 0,
      changes: u,
      patch: h
    }
  } catch {
    return null
  }
}

function S2(e) {
  return e.type === "local_agent" && e.status === "completed" && "agentType" in e && e.agentType !== "main-session" && "isBackgrounded" in e && e.isBackgrounded === !0 && !(("isObserver" in e) && e.isObserver === !0) && !(("evictAfter" in e) && e.evictAfter === 0) && "chatEngaged" in e && e.chatEngaged === !0 && !(("chatPinForfeited" in e) && e.chatPinForfeited === !0)
}

function ehr() {
  return !Ct() && wR(s0e)?.isAvailable?.() === !0 && c4().enabled.some((e) => e.name === s0e) && FMt(s0e)
}

function x9e() {
  return !v("tengu_jazzy_ripple", !1)
}
var wo = 200,
  rt = 100,
  bn = "tengu_memoized_turtle",
  kn = 3600;

function mio() {
  return i.CLAUDE_CODE_MAX_WEB_SEARCHES_PER_SESSION ?? wo
}

function _n({
  refillsByDefault: e
}) {
  let n = i.CLAUDE_CODE_WEB_SEARCH_REFILLS_PER_HOUR;
  if (n !== void 0) return n;
  if (!e) return 0;
  let {
    getFeatureValue_CACHED_MAY_BE_STALE: r
  } = import.meta.require("B:/~BUN/root/chunk-hckxtg11.js"), o = r(bn, rt), s = typeof o === "string" && /^\d+$/.test(o) ? Number(o) : o;
  if (typeof s === "number" && Number.isInteger(s) && s >= 0 && s <= kn) return s;
  return t(`WebSearch budget: ignoring the served ${bn} value ${_(o)} (not an integer from 0 to ${kn}); using ${rt} refills per hour`, {
    level: "warn"
  }), rt
}
var Eo = 4,
  ot = 3600000;

function wn({
  refillsByDefault: e,
  now: n = () => Date.now()
}) {
  let r = 0,
    o = 0,
    s = n(),
    u = _n({
      refillsByDefault: e
    });

  function l() {
    let h = n(),
      p = _n({
        refillsByDefault: e
      }),
      S = Math.min(p, u);
    u = p;
    let y = Math.max(0, h - s);
    if (s = h, r === 0) {
      o = 0;
      return
    }
    o += y * S;
    let T = Math.floor(o / ot);
    if (T >= r) {
      r = 0, o = 0;
      return
    }
    r -= T, o -= T * ot
  }
  return {
    tryConsume() {
      if (l(), r >= mio()) return !1;
      return r++, !0
    },
    msUntilNextCall() {
      l();
      let h = r - mio();
      if (h < 0) return 0;
      if (u === 0) return 1 / 0;
      let p = (h + 1) * ot - o;
      return Math.max(1, Math.ceil(p / u))
    },
    refillsPerHour() {
      return u
    },
    acquireDirectSearchSlot: dGe(Eo).acquire
  }
}
var EXt = 3000,
  kI = 30000,
  IIt = 30000;

function vPn(e, n) {
  for (let r of Object.values(e))
    if (r.id !== n && (r.type === "in_process_teammate" || r.type === "local_agent" && r.agentType !== "main-session") && !Ko(r.status) && !r.isIdle) return !0;
  return !1
}

function uy(e, n, {
  refillWebSearchBudgetByDefault: r = !1
} = {}) {
  let o;
  return {
    register(s) {
      Bo(s, n)
    },
    update(s, u) {
      xo(s, n, u)
    },
    updateTranscript(s, u) {
      n((l) => {
        let h = yWe(l.transcripts, s) ?? vXt,
          p = u(h);
        if (p === h) return l;
        return {
          ...l,
          transcripts: {
            ...l.transcripts,
            [s]: p
          }
        }
      })
    },
    getTranscript(s) {
      return yWe(e().transcripts, s)
    },
    remove(s) {
      Hn().taskEvicted.emit(s), n((u) => {
        if (!Object.hasOwn(u.tasks, s)) return u;
        let {
          [s]: l, ...h
        } = u.tasks, p = u.transcripts ?? {}, {
          [s]: S,
          ...y
        } = p;
        return {
          ...u,
          tasks: h,
          transcripts: s in p ? y : p
        }
      })
    },
    evictTerminal(s) {
      Mo(s, n)
    },
    applyOffsetsAndEvict(s, u) {
      Lo(n, s, u)
    },
    get(s) {
      return yWe(e().tasks, s)
    },
    all() {
      return e().tasks
    },
    getWebSearchBudget() {
      return o ??= wn({
        refillsByDefault: r
      })
    },
    resetWebSearchBudget() {
      o = void 0
    },
    takeConcurrencySlot() {
      n((u) => ({
        ...u,
        runningSubagents: u.runningSubagents + 1
      }));
      let s = !1;
      return () => {
        if (s) return;
        s = !0, n((u) => {
          let l = Math.max(0, u.runningSubagents - 1);
          if (l === u.runningSubagents) return u;
          return {
            ...u,
            runningSubagents: l
          }
        })
      }
    },
    getConcurrentSubagents() {
      return e().runningSubagents
    }
  }
}

function xo(e, n, r) {
  let o = null,
    s = null,
    u = !1;
  using l = f6i();
  if (n((h) => {
      let p = yWe(h.tasks, e);
      if (!p) return h;
      let S = r(p);
      if (S === p) return h;
      if (o = Io(p, S), u = le() && pZ(S) || nm(S), !Ko(p.status) && Ko(S.status)) s = {
        status: S.status === "completed" ? "completed" : S.status === "failed" ? "failed" : "stopped",
        opts: {
          toolUseId: S.toolUseId,
          summary: S.terminal?.summary ?? S.description,
          failureKind: lOr(S.terminal),
          outputFile: "webFetchSavedFiles" in S && S.webFetchSavedFiles !== void 0 ? void 0 : S.terminal?.output_file ?? S.outputFile,
          usage: S.terminal?.usage,
          resourceLinks: S.terminal?.resource_links,
          result: S.terminal?.result,
          handback: S.terminal?.handback,
          handbackReport: S.terminal?.handback_report,
          workflowProgress: S.terminal?.workflow_progress,
          workflowProgressOmitted: S.terminal?.workflow_progress_omitted,
          skipTranscript: S.skipTranscript,
          ambient: _2(S)
        }
      };
      return {
        ...h,
        tasks: {
          ...h.tasks,
          [e]: S
        }
      }
    }), s === null) l.release();
  if (o !== null && !u) {
    let h = {
      type: "system",
      subtype: "task_updated",
      task_id: e,
      run_id: SU(e),
      patch: o
    };
    Ti(e$t(h, s?.opts?.failureKind))
  }
  if (s !== null && !u) za(e, s.status, s.opts)
}

function Io(e, n) {
  let r = {};
  if (n.status !== e.status) r.status = n.status;
  if (n.description !== e.description) r.description = n.description;
  if (n.endTime !== e.endTime) r.end_time = n.endTime;
  if (n.totalPausedMs !== e.totalPausedMs) r.total_paused_ms = n.totalPausedMs;
  let o = "error" in e ? e.error : void 0,
    s = "error" in n ? n.error : void 0;
  if (s !== o && s !== void 0) r.error = s;
  let u = "isBackgrounded" in e ? e.isBackgrounded : void 0,
    l = "isBackgrounded" in n ? n.isBackgrounded : void 0;
  if (l !== u && l !== void 0) r.is_backgrounded = l;
  return Object.keys(r).length > 0 ? r : null
}

function vo(e) {
  if (e.type === "local_bash") return "agentId" in e && e.agentId !== void 0 ? !0 : void 0;
  return
}

function Co(e, n) {
  if (e.type !== "local_agent") return !1;
  for (let r of ["parentAgentId", "ownerAgentId"]) {
    let o = r in e ? e[r] : void 0;
    if (typeof o !== "string" || !Object.hasOwn(n, o)) continue;
    if (n[o].chatPinForfeited === !0) return !0
  }
  return !1
}

function Oo(e) {
  let n = e.type === "local_agent" && "agentId" in e ? e.agentId : void 0;
  return typeof n === "string" && Hn().chatPinForfeitedAgentIds.has(n)
}

function fls(e, n) {
  return Co(e, n) || Oo(e)
}

function Bo(e, n) {
  let o = EPs(e.id) && !Ko(e.status);
  if (o || !Hn().runIds.has(e.id)) dOr(e.id);
  let s = !1,
    u = e,
    l;
  if (n((h) => {
      let p = h.tasks[e.id];
      s = p !== void 0;
      let S = p && "retain" in p ? {
        ...e,
        retain: p.retain,
        startTime: p.startTime,
        diskLoaded: p.diskLoaded,
        pendingMessages: p.pendingMessages,
        keepaliveReasons: p.keepaliveReasons,
        ownerAgentId: p.ownerAgentId,
        parentAgentId: p.parentAgentId,
        ...p.startedUnderUseCase !== e.startedUnderUseCase && {
          startedUnderUseCase: void 0
        },
        ...p.spawnDepth !== void 0 && {
          spawnDepth: p.spawnDepth
        },
        ...p.isObserver !== void 0 && {
          isObserver: p.isObserver
        },
        ...p.forkedSkillName !== void 0 && {
          forkedSkillName: p.forkedSkillName
        },
        ...p.chatEngaged !== void 0 && {
          chatEngaged: p.chatEngaged
        },
        ...p.chatPinForfeited !== void 0 && {
          chatPinForfeited: p.chatPinForfeited
        },
        ...p.userStopCount !== void 0 && {
          userStopCount: p.userStopCount
        },
        ...p.handbackRecipient !== void 0 && {
          handbackRecipient: p.handbackRecipient
        },
        ...p.status === "completed" && p.waitingNoticeRecipient !== void 0 && {
          waitingNoticeRecipient: p.waitingNoticeRecipient
        },
        ...p.ownerCanContinueAgents !== void 0 && {
          ownerCanContinueAgents: p.ownerCanContinueAgents
        },
        ...p.handbackReport !== void 0 && {
          handbackReport: p.handbackReport
        },
        ...p.webFetchSavedFiles !== void 0 && {
          webFetchSavedFiles: p.webFetchSavedFiles
        },
        ...p.spawnedSubagent !== void 0 && {
          spawnedSubagent: p.spawnedSubagent
        },
        ..."progress" in p && p.progress !== void 0 && {
          progress: p.progress
        }
      } : fls(e, h.tasks) ? {
        ...e,
        chatPinForfeited: !0
      } : e;
      return u = S, l = oio(S, h.tasks), {
        ...h,
        tasks: {
          ...h.tasks,
          [e.id]: S
        }
      }
    }), s && !o) return;
  if (le() && pZ(e) || nm(e)) return;
  if (AIt(e)) return;
  Ti({
    type: "system",
    subtype: "task_started",
    task_id: e.id,
    run_id: SU(e.id),
    owned_by_subagent: vo(e),
    tool_use_id: e.toolUseId,
    description: e.description,
    subagent_type: SXt(e),
    is_backgrounded: "isBackgrounded" in u ? u.isBackgrounded : void 0,
    ...sio(u) && {
      awaited: !0
    },
    spawn_depth: "spawnDepth" in u ? u.spawnDepth : void 0,
    parent_task_id: l,
    task_type: e.type,
    workflow_name: "workflowName" in e ? e.workflowName : void 0,
    prompt: "prompt" in e ? e.prompt : void 0,
    skip_transcript: e.skipTranscript,
    ..._2(e) && {
      ambient: !0
    }
  })
}

function Mo(e, n) {
  let r = !1;
  if (n((o) => {
      let s = yWe(o.tasks, e);
      if (!s) return o;
      if (!Ko(s.status)) return o;
      if (!s.notified) return o;
      if ("retain" in s && (s.evictAfter ?? 1 / 0) > Date.now()) return o;
      if ("retain" in s && (s.keepaliveReasons?.size ?? 0) > 0) return o;
      if (s.type === "local_workflow" && ((s.evictAfter ?? 0) > Date.now() || !VT(e))) return o;
      if (s.type === "mcp_task" && (s.endTime ?? 0) + kI > Date.now()) return o;
      r = !0;
      let {
        [e]: u, ...l
      } = o.tasks, h = o.transcripts ?? {}, {
        [e]: p,
        ...S
      } = h;
      return {
        ...o,
        tasks: l,
        transcripts: e in h ? S : h
      }
    }), r) t(`evictTerminalTask: evicted task ${e}`), Hn().taskEvicted.emit(e)
}

function Qde(e) {
  let n = e.tasks ?? {};
  return Object.values(n).filter((r) => r.status === "running")
}
async function kRi(e) {
  let n = [],
    r = {},
    o = [];
  for (let s of Object.values(e)) {
    if (s.notified) switch (s.status) {
      case "completed":
      case "failed":
      case "killed":
        if (S2(s)) continue;
        o.push(s.id);
        continue;
      case "pending":
        continue;
      case "running":
        break
    }
    if (s.status === "running" && s.outputFile !== void 0 && !(s.type === "local_bash" && s.elsewhere)) {
      let u = await xSs(s.id, s.outputOffset);
      if (u.content) r[s.id] = u.newOffset
    }
  }
  return {
    attachments: n,
    updatedTaskOffsets: r,
    evictedTaskIds: o
  }
}

function Lo(e, n, r) {
  let o = Object.keys(n);
  if (o.length === 0 && r.length === 0) return;
  let s = [];
  e((u) => {
    let l = !1,
      h = {
        ...u.tasks
      };
    for (let S of o) {
      let y = h[S];
      if (y?.status === "running") h[S] = {
        ...y,
        outputOffset: n[S]
      }, l = !0
    }
    for (let S of r) {
      let y = h[S];
      if (!y || !Ko(y.status) || !y.notified) continue;
      if ("retain" in y && (y.evictAfter ?? 1 / 0) > Date.now()) continue;
      if ("retain" in y && (y.keepaliveReasons?.size ?? 0) > 0) continue;
      if (y.type === "local_workflow" && ((y.evictAfter ?? 0) > Date.now() || !VT(S))) continue;
      if (y.type === "mcp_task" && (y.endTime ?? 0) + kI > Date.now()) continue;
      delete h[S], EPs(S), s.push(S), l = !0
    }
    if (!l) return u;
    let p;
    for (let S of s)
      if (u.transcripts && S in u.transcripts) p ??= {
        ...u.transcripts
      }, delete p[S];
    return {
      ...u,
      tasks: h,
      ...p && {
        transcripts: p
      }
    }
  });
  for (let u of s) t(`applyTaskOffsetsAndEvictions: evicted task ${u}`), Hn().taskEvicted.emit(u)
}

function Cn(e) {
  return typeof e === "object" && e !== null && "type" in e && e.type === "local_agent"
}

function rR(e) {
  return Cn(e) && e.agentType !== "main-session" && !e.forkWorker
}

function MIt(e) {
  return rR(e) && e.evictAfter !== 0
}

function pls(e, n) {
  return Cn(e) && e.status === "running" && !e.isBackgrounded && e.parentAgentId === n
}

function EPn(e) {
  return pls(e, void 0)
}

function vRi(e) {
  return EPn(e) && e.autoBackgroundArmed === !0 && e.directCall === !0
}

function A9e(e, {
  userInitiated: n = !1
} = {}) {
  if (!Cn(e)) return !1;
  if (n) return !0;
  return e.stoppedByUser !== !0 && (e.status === "running" || e.status === "completed")
}

function gio(e) {
  return Cn(e) ? e.userStopCount ?? 0 : 0
}

function TXt(e, n) {
  if (!Cn(e)) return !1;
  let r = gio(e);
  return (n ?? e.pendingMessages).some((o) => o.userInitiatedAt === r)
}
var mls = "kill-unsettled";

function ERi(e) {
  return le() ? `repl:${e}` : ""
}

function TPn(e) {
  return le() && e.startsWith("repl:")
}

function wWe(e) {
  let {
    parkedTeardowns: n,
    mainThreadContexts: r
  } = Hn();
  r.delete(e);
  let o = n.get(e);
  if (o !== void 0) n.delete(e), o()
}

function CXt(e, n) {
  let r = n.get(e);
  if (Cn(r) && lA(r).size === 0 && Ko(r.status) && r.resuming !== !0 && r.finalizing !== !0) wWe(e)
}

function lA(e) {
  return e.keepaliveReasons ?? new Set
}

function vI(e, n, r) {
  if (!e) return;
  r.update(e, (o) => {
    if (!Cn(o) || lA(o).has(n)) return o;
    return {
      ...o,
      keepaliveReasons: new Set(lA(o)).add(n)
    }
  })
}

function dA(e, n, r) {
  if (!e) return;
  let o = r.get(e),
    s = Cn(o) && lA(o).has(n);
  if (r.update(e, (u) => {
      if (!Cn(u) || !lA(u).has(n)) return u;
      let l = new Set(lA(u));
      l.delete(n);
      let h = S2(u),
        p = l.size === 0 && Ko(u.status) && !u.retain && !h;
      return {
        ...u,
        keepaliveReasons: l,
        ...l.size === 0 && h && u.quietlyParked === !0 && {
          quietlyParked: !1
        },
        ...p && u.evictAfter === void 0 && {
          evictAfter: Date.now() + kI
        }
      }
    }), s) CXt(e, r)
}

function hls(e) {
  return S2(e) ? void 0 : Date.now() + kI
}

function it(e) {
  let n = tp(e) ? e : void 0,
    r = !n && Cn(e) ? e : void 0;
  return {
    teammate: n,
    localAgent: r
  }
}

function kWe(e, n) {
  return it(e ? n[e] : void 0)
}

function TRi(e) {
  let {
    teammate: n,
    localAgent: r
  } = it(e);
  return (n ?? r)?.id ?? st()
}

function CRi({
  viewedTask: e,
  transcript: n,
  mainIsBusy: r,
  mainConversationId: o
}) {
  let {
    teammate: s,
    localAgent: u
  } = it(e), l = s ?? u;
  return {
    task: l,
    isMain: !l,
    isTeammate: !!s,
    messages: n.messages,
    inProgressToolUseIDs: n.inProgressToolUseIDs,
    conversationKey: l ? l.id : o,
    isLoading: l ? l.status === "running" && !l.isIdle : r
  }
}
import {
  isAbsolute as En,
  resolve as Rn
} from "path";
import {
  pathToFileURL as Do
} from "url";

function b2(e) {
  try {
    let n = Jv(e),
      r = Jv(Rn(n));
    if (Sl(n) || or(r) || IFt(n) || IFt(r)) return null;
    let o = Do(n);
    return o.hostname !== "" || bCs(o.href) ? null : o.href
  } catch {
    return null
  }
}

function Zmr(e) {
  let n = /^file:/i.test(e);
  if (!n) return e;
  let r = n ? e.slice(5) : e;
  if (r.startsWith("//")) {
    if (r = r.slice(2), r === "localhost") r = "/";
    else if (r.startsWith("localhost/")) r = r.slice(9)
  }
  let o = r.search(/[#?]/),
    s = o === -1 ? "" : r.slice(o),
    u = o === -1 ? r : r.slice(0, o);
  if (u === "") return null;
  try {
    u = decodeURIComponent(u)
  } catch {}
  u = No(u);
  let l = En(u) ? u : Rn(pe(), u),
    h = b2(l);
  if (h === null) return null;
  let p = h + s;
  return bCs(p) ? null : p
}

function No(e, n = En) {
  if (/^\/[A-Za-z]:(?=[\\/]|$)/.test(e) && n(e.slice(1))) return e.slice(1);
  return e
}
export {
  y2,
  zmr,
  EIt,
  VT,
  uut,
  gXt,
  Gmr,
  Vmr,
  hRi,
  C9e,
  TIt,
  gWe,
  bPn,
  Kmr,
  Jso,
  gRi,
  ils,
  yXt,
  Qso,
  _Xt,
  CIt,
  qmr,
  Zso,
  als,
  P$,
  ODe,
  O$,
  RIt,
  yRi,
  tp,
  _Ri,
  lls,
  eio,
  tio,
  nio,
  fut,
  bRi,
  mq,
  yWe,
  rio,
  IDe,
  _We,
  pZ,
  nm,
  bXt,
  oio,
  M6,
  u_,
  dls,
  sio,
  BEe,
  AIt,
  iio,
  xIt,
  SRi,
  Rye,
  _2,
  SXt,
  Jde,
  PIt,
  aio,
  R9e,
  cls,
  A9,
  Ymr,
  SPn,
  Xmr,
  Jmr,
  wXt,
  wRi,
  bWe,
  kXt,
  put,
  wPn,
  Qmr,
  lio,
  uls,
  dio,
  SWe,
  cio,
  OIt,
  uio,
  fio,
  pio,
  b2,
  Zmr,
  S2,
  mio,
  mut,
  vXt,
  kPn,
  hio,
  EXt,
  kI,
  IIt,
  vPn,
  uy,
  fls,
  Qde,
  kRi,
  Cn,
  rR,
  MIt,
  pls,
  EPn,
  vRi,
  A9e,
  gio,
  TXt,
  mls,
  ERi,
  TPn,
  wWe,
  CXt,
  lA,
  vI,
  dA,
  hls,
  ehr,
  x9e,
  kWe,
  TRi,
  CRi
};
