// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { Pe } from "B:/~BUN/root/chunk-vz9zea4j.js";
import { Po, st, Ee, Dxe, Qp } from "B:/~BUN/root/chunk-game8aqv.js";
import { f } from "B:/~BUN/root/chunk-drx9cnw1.js";
import { Ke, R, d, k } from "B:/~BUN/root/chunk-y2g9f85n.js";
import { or, Sl, Jv, pB } from "B:/~BUN/root/chunk-h4acfc9y.js";
import { W } from "B:/~BUN/root/chunk-ppmmt0c3.js";
import { _o } from "B:/~BUN/root/chunk-rr294jrm.js";
import { Ct, ol, pe } from "B:/~BUN/root/chunk-thn0wk2x.js";
import { sg, t, _, ee, ie } from "B:/~BUN/root/chunk-2pp12te6.js";
import { Qo, Dt } from "B:/~BUN/root/chunk-n8cnxns2.js";
import { ib, jHr, Ewt } from "B:/~BUN/root/chunk-jdtvghyw.js";
import { kj, l$e, bjs, i } from "B:/~BUN/root/chunk-j6pt0v41.js";
import { a } from "B:/~BUN/root/chunk-xrwdh0g4.js";
import { x } from "B:/~BUN/root/chunk-mwfggkjt.js";
import { um, Iw, lxe, zBs, GBs, KBs, fr, ty, Sdn, t1s, Pt, Ute, Qu, bM } from "B:/~BUN/root/chunk-1g25msn4.js";
import { cme } from "B:/~BUN/root/chunk-nsneqfcc.js";
import { g, m, c } from "B:/~BUN/root/chunk-3z3yrbk4.js";
import { NFr } from "B:/~BUN/root/chunk-5xx1vfdh.js";
import { yn, fS, ys } from "B:/~BUN/root/chunk-88zb3509.js";
import { gxe, NSt, lnt, eme, WR, rY, H2n, HSt, A1s, EFr, ut, lt } from "B:/~BUN/root/chunk-3mm90xb6.js";
import { ldn, Tp, Gpe, $1t, ZGn, ddn, R_ } from "B:/~BUN/root/chunk-1fg2bpc3.js";
import { Wd } from "B:/~BUN/root/chunk-2f1svh63.js";
import { dte, CU, vO, I9i } from "B:/~BUN/root/chunk-1s0yt4vj.js";
import { w0n, e_s, t_s, r_s, k0n, vfo, o_s, Kwr, C0t, Hpt, R0t } from "B:/~BUN/root/chunk-65j4e9bn.js";
import { e$t, lOr, Hn, SU, dOr, EPs, Ti, f6i, za, v } from "B:/~BUN/root/chunk-1ks9vs37.js";
import { ln, Ds, lS, Cc } from "B:/~BUN/root/chunk-3xdsa4p8.js";
import { le } from "B:/~BUN/root/chunk-begxsvab.js";
import { ent, kBs } from "B:/~BUN/root/chunk-1x03q1j7.js";
import { es } from "B:/~BUN/root/chunk-0s9zh2h6.js";
import { Ge } from "B:/~BUN/root/chunk-z7bs0q82.js";
import { rz } from "B:/~BUN/root/chunk-j05gjqgd.js";
import { xSs } from "B:/~BUN/root/chunk-xgwmwbnb.js";
import { wR, c4 } from "B:/~BUN/root/chunk-zstr1969.js";
import { FMt } from "B:/~BUN/root/chunk-05q1awc0.js";
import { IFt, bCs } from "B:/~BUN/root/chunk-dwbkkfd6.js";
import { jEe, P9e } from "B:/~BUN/root/chunk-7q19e5st.js";
import { s0e } from "B:/~BUN/root/chunk-31hh2zwx.js";
import { Ko } from "B:/~BUN/root/chunk-kgvnwy91.js";
import { xoe } from "B:/~BUN/root/chunk-gg9ygjtf.js";
import { oX } from "B:/~BUN/root/chunk-0p5dw980.js";
import { dGe } from "B:/~BUN/root/chunk-v91d7hbv.js";
import { Ro } from "B:/~BUN/root/chunk-143z690c.js";
import { L } from "B:/~BUN/root/chunk-5ha2avah.js";
import { sep as vn } from "path";
function at(e) {
  let n = new Map();
  if (!e) return n;
  try {
    let r = ee(e);
    if (r && typeof r === "object") {
      for (let [o, s] of Object.entries(r)) if (typeof s === "string") n.set(o, s);
    }
  } catch (error) {
    t(`[repo-checkouts] Failed to parse env map: ${d(error)}`, {
      level: "error"
    });
  }
  return n;
}
function gWe() {
  if (Qp()) return new Map();
  let repoCheckouts = _o().repoCheckouts;
  if (repoCheckouts.checkouts) return repoCheckouts.checkouts;
  let CLAUDE_CODE_REPO_CHECKOUTS = i.CLAUDE_CODE_REPO_CHECKOUTS;
  if (!CLAUDE_CODE_REPO_CHECKOUTS) {
    let r = ol();
    return repoCheckouts.checkouts = new Map(r === null ? [] : [["", r]]), repoCheckouts.checkouts;
  }
  if (repoCheckouts.checkouts = at(CLAUDE_CODE_REPO_CHECKOUTS), Tp()) repoCheckouts.checkouts = On(repoCheckouts.checkouts);
  return repoCheckouts.checkouts;
}
function bPn(e) {
  if (!Tp()) return e;
  let n = $1t();
  if (!ddn(e, n) || lxe(e, n)) return null;
  let r = pB(e);
  return r !== null && ddn(r, ZGn(n)) ? r : null;
}
function On(e) {
  let n = $1t(),
    r = new Map([...e].filter(([, o]) => ddn(o, n)));
  if (r.size < e.size) t(`[repo-checkouts] ignored ${e.size - r.size} declared checkout(s) whose path is not absolute or lies on another host`, {
    level: "warn"
  });
  return r;
}
function Kmr() {
  return i.CLAUDE_CODE_REPO_CHECKOUTS ? gWe() : new Map();
}
function dt() {
  let repoCheckouts_2 = _o().repoCheckouts;
  if (repoCheckouts_2.baseRefs) return repoCheckouts_2.baseRefs;
  return repoCheckouts_2.baseRefs = at(i.CLAUDE_CODE_BASE_REFS), repoCheckouts_2.baseRefs;
}
function Jso(e) {
  for (let [n, r] of gWe()) if (e === r || e.startsWith(r + vn)) return n;
  return;
}
async function gRi(e) {
  _o().repoCheckouts.onMetadataChanged = e;
  for (let [, n] of gWe()) {
    let r = bPn(n);
    if (r !== null) await zBs(r);
  }
  GBs(() => void ils());
}
async function ils() {
  let e = gWe();
  if (e.size === 0) return;
  let current_branches = {};
  for (let [o, s] of e) {
    let u = bPn(s);
    if (u === null) continue;
    let l = await KBs(u);
    if (l !== void 0) current_branches[o] = l;
  }
  let repoCheckouts_3 = _o().repoCheckouts;
  if (ln(current_branches, repoCheckouts_3.lastEmittedBranches)) return;
  repoCheckouts_3.lastEmittedBranches = current_branches, repoCheckouts_3.onMetadataChanged?.({
    current_branches: current_branches
  });
}
class ct {
  liveProcessesByAgentId = new Map();
  stopPendingAgentIds = new Set();
  everRegisteredTaskIds = new Set();
  loopsByTaskId = new Map();
  pendingEscalationsByTaskId = new Map();
  inFlightProcessSweeps = new Set();
  dispose() {
    for (let e of this.pendingEscalationsByTaskId.values()) for (let n of e.timers) clearTimeout(n);
    this.pendingEscalationsByTaskId.clear(), this.inFlightProcessSweeps.clear(), this.loopsByTaskId.clear(), this.everRegisteredTaskIds.clear(), this.liveProcessesByAgentId.clear(), this.stopPendingAgentIds.clear();
  }
}
var Pn = new W(() => new ct());
function y2() {
  return Po(Pn);
}
function zmr(e) {
  return y2().everRegisteredTaskIds.has(e);
}
function EIt(e, killController, r = {}) {
  let {
    everRegisteredTaskIds: everRegisteredTaskIds,
    loopsByTaskId: loopsByTaskId
  } = y2();
  everRegisteredTaskIds.add(e);
  let u = loopsByTaskId.get(e);
  if (u) loopsByTaskId.delete(e), ve(u);
  let l = {
    killController: killController,
    agentControllersByAgentId: new Map(),
    settleCallbacks: [],
    settleRequiresEmptyAgentAssociations: r.settleRequiresEmptyAgentAssociations ?? !1,
    chainSettled: !1
  };
  return loopsByTaskId.set(e, l), () => {
    if (loopsByTaskId.get(e) !== l) return;
    if (l.chainSettled = !0, l.settleRequiresEmptyAgentAssociations && l.agentControllersByAgentId.size > 0) return;
    loopsByTaskId.delete(e), ve(l);
  };
}
function ve(e) {
  for (let n of e.settleCallbacks) try {
    n();
  } catch (error) {
    a(error);
  }
}
function VT(e) {
  return !y2().loopsByTaskId.has(e);
}
function uut(e) {
  return y2().loopsByTaskId.get(e);
}
function gXt(e, n) {
  let r = y2().loopsByTaskId.get(e);
  if (!r) {
    try {
      n();
    } catch (error) {
      a(error);
    }
    return;
  }
  r.settleCallbacks.push(n);
}
function Gmr(e) {
  return y2().loopsByTaskId.get(e)?.killController;
}
function Vmr(e, n, r) {
  y2().loopsByTaskId.get(e)?.agentControllersByAgentId.set(n, r);
}
function hRi(e, n) {
  let {
      loopsByTaskId: loopsByTaskId_2
    } = y2(),
    o = loopsByTaskId_2.get(e);
  if (!o) return;
  if (o.agentControllersByAgentId.delete(n), o.chainSettled && o.settleRequiresEmptyAgentAssociations && o.agentControllersByAgentId.size === 0) loopsByTaskId_2.delete(e), ve(o);
}
function C9e(e) {
  let n = y2().loopsByTaskId.get(e);
  return n ? [...n.agentControllersByAgentId.keys()] : [];
}
function TIt(e) {
  let n = y2().loopsByTaskId.get(e);
  if (!n) return [];
  let r = [];
  for (let o of n.agentControllersByAgentId.values()) if (o && !o.signal.aborted) r.push(o);
  return r;
}
var Bn = {
    tryConsume() {
      return !0;
    },
    msUntilNextCall() {
      return 0;
    },
    refillsPerHour() {
      return 0;
    },
    async acquireDirectSearchSlot() {
      return () => {};
    }
  },
  mq = {
    register() {},
    update() {},
    updateTranscript() {},
    getTranscript() {
      return;
    },
    remove() {},
    evictTerminal() {},
    applyOffsetsAndEvict() {},
    get() {
      return;
    },
    all() {
      return {};
    },
    getWebSearchBudget() {
      return Bn;
    },
    resetWebSearchBudget() {},
    takeConcurrencySlot() {
      return () => {};
    },
    getConcurrentSubagents() {
      return 0;
    }
  };
function yWe(e, n) {
  return e !== void 0 && Object.hasOwn(e, n) ? e[n] : void 0;
}
import { resolve as Ln } from "path";
function yXt(e) {
  let env = {};
  for (let s of ["GIT_CONFIG_GLOBAL", "GIT_CONFIG_SYSTEM"]) {
    let u = WR(e, s);
    if (u !== void 0) env[s] = u;
  }
  let count = WR(e, "GIT_CONFIG_COUNT"),
    o = Number(count);
  if (count === void 0 || !Number.isInteger(o) || o <= 0) return {
    env: env,
    count: void 0
  };
  env.GIT_CONFIG_COUNT = count;
  for (let s = 0; s < o; s++) {
    let u = WR(e, `GIT_CONFIG_KEY_${s}`);
    if (u === void 0) break;
    env[`GIT_CONFIG_KEY_${s}`] = u;
    let l = WR(e, `GIT_CONFIG_VALUE_${s}`);
    if (l !== void 0) env[`GIT_CONFIG_VALUE_${s}`] = l;
  }
  return {
    env: env,
    count: count
  };
}
var Mn = /^http\.(?:.*\.)?(?:ssl(?:cainfo|capath|verify|version|cipherlist|backend|try)|schannel(?:checkrevoke|usesslcainfo)|pinnedpubkey|proxysslcainfo)$/i;
function Qso() {
  let {
      env: env_2,
      count: count_2
    } = yXt(oX()),
    r = [];
  for (let o = 0; o < Number(count_2 ?? 0); o++) {
    let s = env_2[`GIT_CONFIG_KEY_${o}`],
      u = env_2[`GIT_CONFIG_VALUE_${o}`];
    if (s === void 0) break;
    if (u !== void 0 && Mn.test(s)) r.push([s, u]);
  }
  return r.length === 0 ? {} : Ro(rY(void 0, r), o => o !== void 0);
}
function _Xt(e, n) {
  return I9i(e, {
    ...Qso(),
    ...n
  });
}
async function CIt(e, n, envPins = {}, {
  timeout: timeout,
  abortSignal: abortSignal,
  withoutControllingTerminal: withoutControllingTerminal,
  waitForExitAfterKill: waitForExitAfterKill,
  maxBuffer: maxBuffer,
  stripFinalNewline: stripFinalNewline,
  programs: programs,
  input: input,
  lazyFetch: lazyFetch,
  fetchesFrom: fetchesFrom,
  ownConfigAsJudged: ownConfigAsJudged,
  afterEachRead: afterEachRead,
  repository: repository
} = {}) {
  let fetchesFrom_2 = fetchesFrom === void 0 ? void 0 : Nn(fetchesFrom);
  if (fetchesFrom_2 === null) return ue("remote_name_not_plain", "the remote's name must begin with a letter or a digit and contain only letters, digits, '.', '_' and '-'");
  let O = [...n],
    ownConfigAsJudged_2 = ownConfigAsJudged?.map(([U, B]) => [U, B]);
  if (fetchesFrom_2 !== void 0 && !Gn(O, fetchesFrom_2)) throw new R(`materializeWorkTree: with fetchesFrom, the arguments must be -c pairs if any, then fetch or ls-remote, then options, then --end-of-options, then that remote's name. Each option must carry its value after '=' (--depth=1), begin with --no-, or be one of ${[...mt].join(", ")}. A fetch needs --no-recurse-submodules. No option may begin with --rec.`, "partial-clone lane called with fetchesFrom and a command that is not in the form it requires");
  let D = repository ?? vO(e),
    programs_2 = programs === void 0 ? void 0 : Wn(programs),
    N = {
      value: !1
    },
    F = await Kwr(e, {
      envPins: envPins,
      pin: D,
      ...Me(programs_2, afterEachRead, N)
    });
  if (N.value) return ue("repository_moved_between_reads", forgone);
  if (!F.ok) return ue(F.reason, k0n(F));
  if (abortSignal?.aborted) return ue("aborted", ht);
  return yt(lt, e, O, envPins, F.entries, {
    timeout: timeout,
    abortSignal: abortSignal,
    withoutControllingTerminal: withoutControllingTerminal,
    waitForExitAfterKill: waitForExitAfterKill,
    maxBuffer: maxBuffer,
    stripFinalNewline: stripFinalNewline,
    repository: D
  }, {
    programs: programs_2,
    input: input,
    lazyFetch: lazyFetch,
    fetchesFrom: fetchesFrom_2,
    ownConfigAsJudged: ownConfigAsJudged_2,
    ...(afterEachRead !== void 0 && {
      afterEachRead: afterEachRead
    })
  });
}
function qmr(e, n, r = {}, o = {}) {
  let s = n[pt(n)];
  if (s === void 0 || !Fn.has(s)) throw new R(`gitInOwnWorkTree runs reads only, not git ${s ?? "(no subcommand)"}`, "gitInOwnWorkTree called with a non-read git subcommand");
  return yt(ut, e, n, r, null, o);
}
function pt(e) {
  return e.findIndex((item, index) => !item.startsWith("-") && (index === 0 || e[index - 1] !== "-c"));
}
var Fn = new Set(["diff", "format-patch", "log", "show"]),
  gt = ["https", "ssh"];
function Zso(e) {
  return gt.includes(Oe(e));
}
function Oe(e) {
  let n = /^[A-Za-z0-9][A-Za-z0-9+.-]*(?=::)/.exec(e)?.[0];
  if (n !== void 0) return n;
  let r = /^([a-z][a-z0-9+.-]*):\/\//i.exec(e)?.[1];
  if (r !== void 0) return r === "git+ssh" || r === "ssh+git" ? "ssh" : r;
  let o = e.indexOf(":"),
    s = e.indexOf("/");
  return o === -1 || s !== -1 && s < o || x() === "windows" && /^[A-Za-z]:[\\/]/.test(e) ? "file" : "ssh";
}
var Dn = /^fatal: transport '([A-Za-z][A-Za-z0-9+.-]{0,31})' not allowed$/m;
function Nn(e) {
  return /^[A-Za-z0-9][A-Za-z0-9._-]*$/.test(e) ? e : null;
}
var mt = new Set(["--stdin", "--negotiate-only", "--refs", "--heads", "--quiet"]);
function Gn(e, n) {
  let r = pt(e),
    o = e.indexOf("--end-of-options"),
    s = e.slice(r + 1, o);
  return e.slice(0, r).every((item, index) => index % 2 === 1 || item === "-c") && ["fetch", "ls-remote"].includes(e[r] ?? "") && o > r && s.every(item => /^--no-[a-z]|^--[a-z][a-z-]*=/.test(item) || mt.has(item)) && (e[r] === "ls-remote" || s.includes("--no-recurse-submodules")) && !s.some(item => item.startsWith("--rec")) && e[o + 1] === n;
}
var Un = {
    stdout: "",
    stderr: "",
    code: 1
  },
  ht = "the operation was cancelled before it started",
  forgone = "the repository's git directories changed while Claude Code read its git config";
function ue(why, n) {
  return {
    stdout: "",
    stderr: `git was not run: ${n}.
`,
    code: 1,
    lane: {
      kind: "not_started",
      why: why
    }
  };
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
      if (![[], ["-C", r.dir], ["-C", Ln(r.dir)]].some(item => ln(s.args, [...item, ...n])) || Object.keys(r.env).some(item => Object.hasOwn(s.env, item) ? s.env[item] !== r.env[item] : !/^(?:OLD)?PWD$/i.test(item)) || Object.keys(s.env).some(item => !Object.hasOwn(r.env, item))) throw new R("programs.buildInvocation must return the environment it was handed, less at most PWD and OLDPWD, and the arguments it was handed, with nothing before them but -C and the directory it was handed; it changed the environment or the arguments", "partial-clone lane called with programs that do not keep the environment and arguments handed to them");
      return s;
    }
  };
}
function Be(e, n, r, o) {
  return e === void 0 ? {
    file: n(),
    args: [...r],
    cwd: o.dir,
    env: o.env
  } : e.buildInvocation(r, o);
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
      if (!(await n())) r.value = !0;
      return h;
    }
  };
}
function $n(e) {
  return e === void 0 ? {} : {
    base: e.base,
    run: (n, {
      cwd: r,
      env: env_3,
      extendEnv: extendEnv,
      ...u
    }) => ent(e.buildInvocation(n, {
      dir: r,
      env: env_3
    }), {
      ...u,
      stdin: "ignore"
    })
  };
}
async function yt(e, dir, r, o, s, {
  repository: repository_2,
  ...l
}, {
  programs: programs_3,
  input: input_2,
  lazyFetch: lazyFetch_2,
  fetchesFrom: fetchesFrom_3,
  ownConfigAsJudged: ownConfigAsJudged_3,
  afterEachRead: afterEachRead_2
} = {}) {
  let w = input_2 === void 0 ? {
      stdin: "ignore"
    } : {
      input: input_2
    },
    A = fetchesFrom_3 === void 0 ? await (() => {
      let B = Be(programs_3, Pt, r, {
        dir: dir,
        env: ys({
          ...o,
          ...bt(s === null ? [] : Tt([], s, []))
        }, {
          repository: repository_2,
          base: programs_3?.base,
          userLocale: !0
        })
      });
      return e(B.file, B.args, {
        ...l,
        cwd: B.cwd,
        env: B.env,
        ...(programs_3 !== void 0 && {
          extendEnv: !1
        }),
        ...w
      });
    })() : Un;
  if (A.code === 0) return {
    ...A,
    lane: {
      kind: "first_attempt_succeeded"
    }
  };
  let C = () => fetchesFrom_3 === void 0 ? {
    ...A,
    lane: {
      kind: "first_attempt_cut"
    }
  } : ue("aborted", ht);
  if (A.timedOut || A.maxBufferExceeded || l.abortSignal?.aborted || l.withoutControllingTerminal === !0 && sg()) return C();
  let repository_3 = repository_2 ?? vO(fr(dir) ?? dir),
    I = await Yn(dir, o, {
      repoFiltersOff: s !== null,
      repository: repository_3,
      programs: programs_3,
      lazyFetch: lazyFetch_2,
      fetchesFrom: fetchesFrom_3,
      ownConfigAsJudged: ownConfigAsJudged_3,
      afterEachRead: afterEachRead_2
    });
  if (s !== null && l.abortSignal?.aborted) return C();
  if (!I.retry) return {
    ...(I.forgone === void 0 ? A : Ce(A, fetchesFrom_3 === void 0 ? `No lazy fetch from the promisor remote was attempted: ${I.forgone}.` : `The remote ${fetchesFrom_3} was not contacted: ${I.forgone}.`)),
    lane: {
      kind: "forgone",
      why: I.why
    }
  };
  t(fetchesFrom_3 === void 0 ? `[git] ${dir} is a partial clone: retrying with ${lazyFetch_2 === "off" ? `lazy fetch off, over ${I.transports.join(" or ")}` : "a constrained lazy fetch"}` : `[git] ${dir}: contacting the remote ${fetchesFrom_3}, over ${I.transports.join(" or ")}`);
  let D = Be(programs_3, () => I.git, r, {
      dir: dir,
      env: ys({
        ...o,
        ...I.env
      }, {
        base: I.operatorEnv,
        repository: repository_3
      })
    }),
    P = {
      ...(await e(D.file, D.args, {
        ...l,
        cwd: D.cwd,
        env: D.env,
        extendEnv: !1,
        ...w
      })),
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
    F = Ce(F, fetchesFrom_3 === void 0 ? `Nothing was fetched: a partial clone's lazy fetch runs over ${B} only, and the promisor remote the repository's own config names, ${N ?? "one it does not spell out"}, is reached over ${U}${I.promisorUrl !== void 0 && I.transports.includes(Oe(I.promisorUrl)) ? ", not the transport that URL spells \u2014 a url.<base>.insteadOf rule in your git configuration, or a second promisor URL in the repository's, would account for that" : ""}.` : `The remote ${fetchesFrom_3} was not contacted: this command runs over ${B} only, and the URL the repository's own config gives it, ${N ?? "one it does not spell out"}, is reached over ${U}${I.promisorUrl !== void 0 && I.transports.includes(Oe(I.promisorUrl)) ? `, not the transport that URL spells. A url.<base>.insteadOf rule, or a remote.${fetchesFrom_3}.url, in your own git configuration would account for that` : ""}.`);
  }
  if (I.userUnscopedExtraHeader) F = Ce(F, fetchesFrom_3 === void 0 ? `The lazy fetch did not send your unscoped http.extraHeader: it would go to whichever host the repository's own config names as its promisor remote, here ${N ?? "one it does not spell out"}. Only if you recognize and trust that host, scope the header to it (http.<that url>.extraHeader); otherwise leave it as it is.` : `The command did not send your unscoped http.extraHeader: it would go to whichever host the repository's own config gives for the remote ${fetchesFrom_3}, here ${N ?? "one it does not spell out"}. Only if you recognize and trust that host, scope the header to it (http.<that url>.extraHeader); otherwise leave it as it is.`);
  return {
    ...F,
    stderrOfGitAlone: P.stderr
  };
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
    stderr: `${r}${r === "" ? "" : `
`}${n}
`
  };
}
function Tt(e, n, r) {
  return [["credential.helper", ""], ...e, ["http.extraheader", ""], ["core.protectNTFS", "true"], ["core.protectHFS", "true"], ...r, ...t_s(e_s(n.map(([o]) => o)))];
}
function bt(e, n) {
  return e.length === 0 ? {} : Ro(rY(n, e), r => r !== void 0);
}
async function Yn(e, envPins_2, {
  repoFiltersOff: repoFiltersOff,
  repository: o,
  programs: programs_4,
  lazyFetch: lazyFetch_3,
  fetchesFrom: fetchesFrom_4,
  ownConfigAsJudged: ownConfigAsJudged_4,
  afterEachRead: afterEachRead_3
}) {
  let S = {
      value: !1
    },
    y = {
      retry: !1,
      why: "repository_moved_between_reads",
      forgone: forgone
    },
    T = fetchesFrom_4 ?? (await Xn(e, o, programs_4));
  if (fetchesFrom_4 === void 0 && afterEachRead_3 !== void 0 && !(await afterEachRead_3())) return y;
  if (T === null || T === void 0) return {
    retry: !1,
    why: T === null ? "no_promisor_remote" : "promisor_remote_unread"
  };
  let b = Zn(programs_4?.base ?? oX()),
    git = programs_4 === void 0 ? kj("git", b.PATH ?? "") : "";
  if (git === null) return {
    retry: !1,
    why: "no_git_on_absolute_path",
    forgone: "no git executable is on an absolute PATH entry of the environment Claude Code was launched with"
  };
  let env_4 = process.env,
    A = WR(env_4, "GIT_NO_LAZY_FETCH") ?? WR(b, "GIT_NO_LAZY_FETCH");
  if ([env_4, b].some(item => {
    let z = WR(item, "GIT_NO_LAZY_FETCH");
    return z !== void 0 && Pe(z);
  })) return {
    retry: !1,
    why: "lazy_fetch_switched_off",
    forgone: fetchesFrom_4 === void 0 ? "GIT_NO_LAZY_FETCH is set" : "GIT_NO_LAZY_FETCH is set, which switches this command off too"
  };
  let transports = [env_4, b].reduce((acc, item) => {
    let Q = WR(item, "GIT_ALLOW_PROTOCOL")?.split(":");
    return Q === void 0 ? acc : acc.filter(item => Q.includes(item));
  }, gt);
  if (transports.length === 0) return {
    retry: !1,
    why: "no_transport_admitted",
    forgone: "GIT_ALLOW_PROTOCOL admits neither https nor ssh"
  };
  let O = yXt(b),
    I = await kt(e, ["--get-regexp", fetchesFrom_4 === void 0 ? "^remote\\..*\\.(uploadpack|vcs)$" : `^(remote\\..*\\.(uploadpack|vcs)|remotes\\.${Qo(fetchesFrom_4)})$`], o, O.env, b, programs_4);
  if (afterEachRead_3 !== void 0 && !(await afterEachRead_3())) return y;
  if (!(I.exitCode === 1 && I.error === void 0 && !I.timedOut && !I.maxBufferExceeded)) {
    if (fetchesFrom_4 !== void 0 && I.stdout.split("\x00").some(item => item.startsWith("remotes."))) return ft(fetchesFrom_4);
    return {
      retry: !1,
      why: I.code === 0 ? "remote_names_a_program" : "remote_programs_unread",
      forgone: I.code === 0 ? "a remote names an upload-pack or vcs program" : "git's configuration could not be read for a remote's upload-pack or vcs program"
    };
  }
  let P = await Kwr(e, {
    envPins: envPins_2,
    pin: o,
    ...Me(programs_4, afterEachRead_3, S)
  });
  if (S.value) return y;
  if (!P.ok) return {
    retry: !1,
    why: P.reason,
    forgone: k0n(P)
  };
  if (ownConfigAsJudged_4 !== void 0 && ![ownConfigAsJudged_4, [...ownConfigAsJudged_4, ...ownConfigAsJudged_4]].some(item => ln(P.entries, item))) return {
    retry: !1,
    why: "config_changed_after_checks",
    forgone: "the repository's git config changed after Claude Code checked it"
  };
  let N = P.entries.find(([M]) => {
    let z = w0n(M);
    return jn.test(z) && !zn.test(z);
  });
  if (N !== void 0) return {
    retry: !1,
    why: "repository_steers_the_fetch",
    forgone: `the repository's own git config sets ${vfo(N[0])} (${r_s})`
  };
  if (fetchesFrom_4 !== void 0 && P.entries.some(([M]) => w0n(M) === w0n(`remotes.${fetchesFrom_4}`))) return ft(fetchesFrom_4);
  let F = fetchesFrom_4 === void 0 ? void 0 : qn(P.entries, fetchesFrom_4);
  if (F === null) return {
    retry: !1,
    why: "named_remote_without_url",
    forgone: `the repository's own git config must set remote.${fetchesFrom_4}.url, and to no empty value`
  };
  let U = await C0t(e, "^(credential\\.(.*\\.)?helper|core\\.sshcommand|ssh\\.variant|http\\.extraheader)$", {
    envPins: {
      ...envPins_2,
      ...O.env
    },
    base: b,
    repository: o,
    buildInvocation: programs_4?.buildInvocation
  });
  if (afterEachRead_3 !== void 0 && !(await afterEachRead_3())) return y;
  if (U === null) return {
    retry: !1,
    why: "user_config_unread",
    forgone: "your own git configuration could not be read"
  };
  let [B, he] = lS(U, ([M]) => M === "core.sshcommand"),
    [se, G] = lS(he, ([M]) => M === "ssh.variant"),
    [q, K] = lS(G, ([M]) => M === "http.extraheader"),
    H = WR(b, "GIT_SSH_VARIANT"),
    GIT_SSH_VARIANT = se.at(-1)?.[1],
    X = H ?? GIT_SSH_VARIANT,
    J = EFr(H === void 0 && GIT_SSH_VARIANT !== void 0 ? {
      ...b,
      GIT_SSH_VARIANT: GIT_SSH_VARIANT
    } : b, B.at(-1)?.[1]),
    Y = await Kwr(e, {
      envPins: envPins_2,
      pin: o,
      ...Me(programs_4, afterEachRead_3, S)
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
    git: git,
    transports: transports,
    env: {
      GIT_NO_LAZY_FETCH: lazyFetch_3 === "off" || fetchesFrom_4 !== void 0 ? "1" : A ?? "0",
      GIT_ALLOW_PROTOCOL: transports.join(":"),
      GIT_SSH_COMMAND: H2n(HSt(), J.command),
      GIT_SSH_VARIANT: A1s(X, J.command),
      GIT_ASKPASS: envPins_2.GIT_ASKPASS ?? WR(b, "GIT_ASKPASS") ?? "",
      SSH_ASKPASS: envPins_2.SSH_ASKPASS ?? WR(b, "SSH_ASKPASS") ?? "",
      ...O.env,
      ...bt(Tt(K, repoFiltersOff ? Y.entries : [], [["core.alternateRefsCommand", ":"]]), O.count)
    },
    userUnscopedExtraHeader: q.length > 0,
    promisorUrl: F ?? Y.entries.findLast(([M]) => M === `remote.${T}.url`)?.[1] ?? void 0
  };
}
function ft(e) {
  return {
    retry: !1,
    why: "named_remote_is_a_group",
    forgone: `git's configuration sets remotes.${e}, which makes that name a group of remotes`
  };
}
function qn(e, n) {
  let r = e.filter(([o]) => o === `remote.${n}.url`).map(([, o]) => o);
  return r.every(item => item !== null && item !== "") ? r[0] ?? null : null;
}
var Vn = /^remote\.(.*)\.(promisor|partialclonefilter)$/s;
async function Xn(e, n, r) {
  let o = await als(e, n, r);
  return o === null || o === void 0 ? o : o.extension ?? o.remotes[0] ?? null;
}
async function als(e, n = vO(e), r) {
  let o = await kt(e, ["--get-regexp", "^(extensions\\.partialclone|remote\\..*\\.(promisor|partialclonefilter))$"], n, {}, r?.base, r);
  if (o.code !== 0) return o.exitCode === 1 ? null : void 0;
  let extension = null,
    remotes = [];
  for (let l of o.stdout.split("\x00")) {
    let h = l.indexOf(`
`),
      p = h === -1 ? l : l.slice(0, h),
      S = h === -1 ? "true" : l.slice(h + 1);
    if (p === "extensions.partialclone") {
      extension = S === "" ? extension : S;
      continue;
    }
    let [, y, T] = Vn.exec(p) ?? [];
    if (y !== void 0 && !remotes.includes(y) && (T === "partialclonefilter" || !["false", "no", "off", "0", ""].includes(S.toLowerCase()))) remotes.push(y);
  }
  return {
    extension: extension,
    remotes: remotes
  };
}
function kt(dir_2, n, repository_4, o, base, u) {
  let l = Be(u, Pt, [...yn, "config", "--includes", "--null", ...n], {
    dir: dir_2,
    env: ys(o, {
      base: base,
      repository: repository_4
    })
  });
  return lt(l.file, l.args, {
    cwd: l.cwd,
    env: l.env,
    ...(base !== void 0 && {
      extendEnv: !1
    }),
    timeout: 5000,
    preserveOutputOnError: !1,
    stdin: "ignore"
  });
}
function Zn(e) {
  let n = {
      ...e
    },
    r = x() === "windows";
  for (let o of Object.keys(n)) if (o === "PATH" || r && o.toUpperCase() === "PATH") delete n[o];
  return n.PATH = l$e(Ds(e, "PATH") ?? ""), n;
}
var messages = [],
  inProgressToolUseIDs = new Set(),
  vXt = {
    messages: messages,
    inProgressToolUseIDs: inProgressToolUseIDs
  };
function kPn(e, inProgressToolUseIDs_2) {
  return e.size === 0 && inProgressToolUseIDs_2.size > 0 ? {
    inProgressToolUseIDs: inProgressToolUseIDs_2,
    toolWindowStartTime: Date.now()
  } : {
    inProgressToolUseIDs: inProgressToolUseIDs_2
  };
}
function hio(e, n, r) {
  let o = e[n] ?? vXt,
    inProgressToolUseIDs_3 = o.inProgressToolUseIDs,
    u;
  switch (r.action) {
    case "add":
      {
        u = new Set(inProgressToolUseIDs_3);
        for (let l of r.ids) u.add(l);
        break;
      }
    case "remove":
      {
        u = new Set(inProgressToolUseIDs_3);
        for (let l of r.ids) u.delete(l);
        if (u.size === inProgressToolUseIDs_3.size) return e;
        break;
      }
    case "clear":
      if (inProgressToolUseIDs_3.size === 0) return e;
      u = new Set();
      break;
    default:
      return e;
  }
  return {
    ...e,
    [n]: {
      ...o,
      ...kPn(inProgressToolUseIDs_3, u)
    }
  };
}
class P$ extends Error {
  subtype;
  constructor(e, n) {
    super(`control_request '${e}' got no response after ${n / 1000}s \u2014 the worker may still apply it`);
    this.subtype = e;
  }
}
class ODe extends Error {
  subtype;
  constructor(e) {
    super("Request was not delivered to the cloud session");
    this.subtype = e;
  }
}
class Le extends Error {}
function O$(e) {
  if (e instanceof Ke) return "aborted";
  if (e instanceof P$) return "timeout";
  if (e instanceof ODe) return "not_delivered";
  if (e instanceof Error && (e.message.endsWith("Disconnected") || e.message.endsWith("Connection to remote lost"))) return "disconnected";
  if (e instanceof Error && (e.message.endsWith("not connected") || e.message.includes("Cannot send:"))) return "not_connected";
  return "server_error";
}
async function RIt(e, n) {
  try {
    let r = await n();
    return g(e), r;
  } catch (error) {
    if (error instanceof Ke) c(e, "aborted");else m(e, O$(error));
    throw error;
  }
}
function yRi(e) {
  if (e.subtype === "error" && typeof e.error === "string") return new Le(e.error);
  let n = e.subtype === "error" ? "non-string error" : `subtype ${typeof e.subtype === "string" ? "unrecognized" : typeof e.subtype}`;
  return new Le(`Malformed control_response from worker (${n})`);
}
function tp(e) {
  return typeof e === "object" && e !== null && "type" in e && e.type === "in_process_teammate";
}
function _Ri(e) {
  let n = "";
  for (let r of Object.values(e)) if (tp(r)) n += `${r.id}:${r.status};`;
  return n;
}
function lls(e) {
  return e.status === "running" && !e.isIdle && e.currentWorkAbortController !== void 0;
}
function eio(e) {
  if (!lls(e)) return !1;
  return e.currentWorkAbortController?.abort(), !0;
}
function tio(e) {
  return e.awaitingPlanApproval || e.pendingUserMessages.length > 0;
}
var nio = 50;
function fut(e, n) {
  if (e === void 0 || e.length === 0) return [n];
  if (e.length >= nio) {
    let r = e.slice(-(nio - 1));
    return r.push(n), r;
  }
  return [...e, n];
}
function bRi(e, n) {
  let r = e === void 0 || e.every(item => item.uuid !== n.uuid) ? e : e.filter(item => item.uuid !== n.uuid);
  return fut(r, n);
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
  return rio[e] ?? e;
}
function _We(e) {
  return le() && e === "local_script";
}
function pZ(e) {
  return _We(e.type);
}
function nm(e) {
  return e.type === "local_agent" && "isObserver" in e && e.isObserver === !0;
}
function bXt(e, n, r, o) {
  if (o !== void 0 && "agentId" in e && typeof e.agentId === "string" && o(e.agentId)) return !1;
  let s = new Set(),
    u = "parentAgentId" in e && typeof e.parentAgentId === "string" ? e.parentAgentId : void 0;
  while (u && !s.has(u)) {
    if (u === n) return !0;
    if (o?.(u)) return !1;
    s.add(u);
    let l = r[u];
    u = l !== void 0 && l.type === "local_agent" && !("forkWorker" in l && l.forkWorker === !0) && "parentAgentId" in l && typeof l.parentAgentId === "string" ? l.parentAgentId : void 0;
  }
  return !1;
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
      return;
  }
  if (r === void 0) return;
  let o = yWe(n, r);
  return o?.type === "local_agent" && !nm(o) ? o.id : void 0;
}
function M6(e) {
  if (e.type === "local_agent") return !nm(e);
  return e.type === "local_workflow";
}
function u_(e) {
  if (e.status !== "running" && e.status !== "pending") return !1;
  return !dls(e);
}
function dls(e) {
  return "isBackgrounded" in e && e.isBackgrounded === !1;
}
function sio(e) {
  return e.type === "local_agent" && e.awaitedByCaller === !0;
}
function BEe(e) {
  return e.type === "mcp_task" && e.parked === !0;
}
function AIt(e) {
  return e.type === "mcp_task" && e.holdCapped === !0;
}
function iio(e) {
  return BEe(e) || AIt(e);
}
function xIt(e) {
  return e.type === "local_bash" && e.kind === "monitor" || e.type === "monitor_mcp" || e.type === "monitor_ws" && e.ambient !== !0;
}
function SRi(e) {
  return e.type === "local_bash" && e.isBackgrounded === !0 && e.kind !== "monitor" && e.agentId === void 0;
}
function er(e) {
  return e.type === "monitor_ws" && e.ambient === !0 && e.frameLive?.explicit !== !0;
}
function Rye(e) {
  return er(e);
}
function _2(e) {
  return e.skipTranscript === !0 || e.type === "monitor_ws" && e.ambient === !0;
}
function SXt(e) {
  return e.type === "local_agent" ? e.agentType : void 0;
}
function Jde(e) {
  return e.type === "in_process_teammate" && e.isIdle && !tio(e);
}
function PIt(e) {
  switch (e.type) {
    case "local_agent":
      return e.abortController?.signal.aborted === !0;
    case "in_process_teammate":
      return e.currentWorkAbortController?.signal.aborted === !0;
    default:
      return !1;
  }
}
function aio(e) {
  return e?.type === "local_workflow";
}
var R9e = new Set(["local_agent", "in_process_teammate", "local_workflow", "dream", "post_turn_memory"]);
import { access as Qr, lstat as un, readFile as eo, realpath as dn } from "fs/promises";
import { basename as Xe, dirname as Je, isAbsolute as cn, join as fe, relative as to, sep as no, win32 as ro } from "path";
import { isAbsolute as tr } from "path";
async function _t(e, n, r, o) {
  if (Ge.isSandboxingEnabled()) return c("self_hosted_diff_ignore_check", "sandbox_on"), null;
  let s = oX(),
    GIT_CONFIG_PARAMETERS = WR(s, "GIT_CONFIG_PARAMETERS"),
    l = {
      ...yXt(s).env,
      ...(GIT_CONFIG_PARAMETERS !== void 0 && {
        GIT_CONFIG_PARAMETERS: GIT_CONFIG_PARAMETERS
      })
    };
  if ([l.GIT_CONFIG_GLOBAL, l.GIT_CONFIG_SYSTEM].some(item => item !== void 0 && item !== "" && !tr(item))) return c("self_hosted_diff_ignore_check", "relative_operator_config"), null;
  let h = {
    GIT_CONFIG_NOSYSTEM: WR(s, "GIT_CONFIG_NOSYSTEM") ?? "0"
  };
  for (let config of Object.keys(l).length > 0 ? [h, {
    ...l,
    ...h
  }] : [h]) {
    let {
      exitCode: exitCode,
      stdout: stdout,
      stderr: stderr
    } = await o(["--literal-pathspecs", "--no-optional-locks", "ls-files", "--others", "--exclude-standard", "-z", "--", n], {
      config: config
    });
    if (exitCode !== 0 || stdout !== "" && stdout !== `${n}\x00` || /^warning: (?:unable to access |ignoring excessively large pattern )/m.test(stderr)) return c("self_hosted_diff_ignore_check", "no_answer"), null;
    if (stdout === "") return g("self_hosted_diff_ignore_check"), null;
  }
  let p = await cme(e, r, {
    oneName: !0
  });
  if (p === null) c("self_hosted_diff_ignore_check", "file_not_read");else g("self_hosted_diff_ignore_check");
  return p;
}
import { createHash as Xt } from "crypto";
import { lstat as He, open as Zt, readlink as Rr } from "fs/promises";
import { sep as Te } from "path";
function Rt(e, n) {
  let r = e?.eol;
  return wt(e?.text) ?? wt(e?.crlf) ?? (r === "lf" || r === "crlf" ? "always" : n?.toLowerCase() === "input" || de(n) === !0 ? "if-text" : "never");
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
      return null;
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
    default:
      {
        let n = /^\s*[+-]?(?:0x([0-9a-f]+)|(\d+))[kmg]?$/i.exec(e ?? "");
        return n === null ? null : /[^0]/.test(n[1] ?? n[2]);
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
      o++;
    } else if (s === 0) return !0;else if (s === Fe) continue;else if (s === 127 || s < 32 && s !== 8 && s !== 9 && s !== 12 && s !== 27) r++;else n++;
  }
  if (e.at(-1) === 26) r--;
  return n >> 7 < r;
}
function cls(e) {
  let n = e.indexOf(`\r
`);
  if (n === -1) return null;
  let r = Buffer.allocUnsafe(e.length - 1);
  e.copy(r, 0, 0, n);
  let o = n;
  for (let s = n; s < e.length; s++) if (e[s] !== At || e[s + 1] !== Fe) r[o++] = e[s];
  return r.subarray(0, o);
}
function xt(e, n, r) {
  if (n === "never" || n === "if-text" && (Et(e) || r !== void 0 && r.includes(`\r
`) && !Et(r))) return null;
  return cls(e);
}
function It(e) {
  let n = e.split("\x00");
  if (n.pop() !== "" || n.length % 3 !== 0) return null;
  let r = new Map();
  for (let o = 0; o < n.length; o += 3) {
    let s = n[o],
      u = r.get(s);
    if (u === void 0) u = Object.create(null), r.set(s, u);
    u[n[o + 1]] = n[o + 2];
  }
  return r;
}
import { createHash as Lt } from "crypto";
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
  cr = new Map([[33188, "file"], [33261, "executable"], [40960, "symlink"], [57344, "gitlink"]]),
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
  let entries = [],
    p = [],
    S = [],
    y = Ne,
    T = 0;
  while (entries.length < u) {
    if (entries.length % rr === 0) await Gt();
    if (r.aborted) return {
      refused: "aborted"
    };
    p.push(y);
    let refused = hr(l, y, s, Se[n], entries.at(-1)?.pathBytes ?? gr);
    if (typeof refused === "string") return {
      refused: refused
    };
    if (T += refused.entry.pathBytes.length, T > Ft) return {
      refused: "too-large"
    };
    entries.push(refused.entry), S.push(refused.kept), y = refused.next;
  }
  let refused_2 = _r(l, y) ?? wr(l, y, p, S, n);
  if (refused_2 !== null) return {
    refused: refused_2
  };
  return entries.every((item, index) => br(item.pathBytes) && (index === 0 || kr(entries[index - 1], item))) ? {
    entries: entries
  } : {
    refused: "malformed"
  };
}
function hr(e, n, r, o, s) {
  let u = n + De + o;
  if (u + 4 > e.length) return "malformed";
  let l = e.readUInt16BE(u),
    h = (l & dr) !== 0,
    p = h ? e.readUInt16BE(u + 2) : 0;
  if ((p & ~(Ot | Bt)) !== 0 || h && (r === 2 || p === 0)) return "unsupported";
  let kind = cr.get(e.readUInt32BE(n + ar));
  if (kind === void 0 || We(e, n + De, u)) return "unsupported";
  let y = u + (h ? 4 : 2),
    T = l & Ue,
    b = r === 4 ? yr(e, y, s) : Sr(e, n, y, T);
  if (typeof b === "string") return b;
  if (Math.min(b.pathBytes.length, Ue) !== T) return "malformed";
  return {
    entry: {
      pathBytes: b.pathBytes,
      kind: kind,
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
  };
}
function Sr(e, n, r, o) {
  let s = o < Ue ? r + o : e.indexOf(0, r);
  if (s === -1) return "malformed";
  let next = n + (s - n + 8 & -8);
  return next <= e.length && We(e, s, next) ? {
    pathBytes: e.subarray(r, s),
    next: next
  } : "malformed";
}
function yr(e, n, r) {
  let o = Tr(e, n, r.length),
    s = o === null ? -1 : e.indexOf(0, o.next);
  if (o === null || s === -1) return "malformed";
  let kept = r.length - o.value;
  if (kept + s - o.next > Ft) return "too-large";
  return {
    pathBytes: Buffer.concat([r.subarray(0, kept), e.subarray(o.next, s)]),
    next: s + 1,
    kept: kept
  };
}
function Tr(e, n, r) {
  let value = -1;
  for (let s = n; s < e.length; s++) {
    if (value = (value + 1) * 128 + (e[s] & 127), value > r) return null;
    if ((e[s] & 128) === 0) return {
      value: value,
      next: s + 1
    };
  }
  return null;
}
function br(e) {
  let n = 0;
  for (let r = 0; r <= e.length; r++) if (r === e.length || e[r] === mr) {
    let o = r - n;
    if (o === 0 || e[n] === Mt && (o === 1 || o === 2 && e[n + 1] === Mt)) return !1;
    n = r + 1;
  } else if (e[r] === 0) return !1;
  return !0;
}
function kr(e, n) {
  let r = Buffer.compare(e.pathBytes, n.pathBytes);
  return r < 0 || r === 0 && e.stage < n.stage;
}
function _r(e, n) {
  let r = n;
  while (r < e.length) {
    if (r + V > e.length) return "malformed";
    if (e[r] < 65 || e[r] > 90) return "unsupported";
    r += V + e.readUInt32BE(r + 4);
  }
  return r === e.length ? null : "malformed";
}
function wr(e, n, r, o, s) {
  let u = Se[s],
    l = O => {
      let I = e.length - V - 4 - O;
      return I >= Ne && e.toString("latin1", I, I + 4) === "EOIE" && e.readUInt32BE(I + 4) === 4 + O;
    },
    h = Object.values(Se).some(item => item !== u && l(item)),
    p = l(u);
  if (h) return "unsupported";
  let S = [];
  for (let at_2 = n; at_2 < e.length;) {
    let size = e.readUInt32BE(at_2 + 4);
    S.push({
      name: e.toString("latin1", at_2, at_2 + 4),
      at: at_2,
      size: size
    }), at_2 += V + size;
  }
  let y = S.at(-1),
    T = e.length - V - 4 - u;
  if (p) {
    if (y?.at !== T || y.name !== "EOIE") return "unsupported";
    let O = Lt(s);
    for (let D of S.slice(0, -1)) O.update(e.subarray(D.at, D.at + V));
    let I = T + V;
    if (e.readUInt32BE(I) !== n || !O.digest().equals(e.subarray(I + 4, I + 4 + u))) return "unsupported";
  }
  let b = S.filter(item => item.name === "IEOT");
  if (b.length === 0) return null;
  if (!p || b.length > 1) return "unsupported";
  let {
      at: at_3,
      size: size_2
    } = b[0],
    A = at_3 + V;
  if (size_2 < 4 || (size_2 - 4) % 8 !== 0 || e.readUInt32BE(A) !== 1) return "unsupported";
  let C = 0;
  for (let O = A + 4; O < A + size_2; O += 8) {
    if (e.readUInt32BE(O) !== r[C] || (o[C] ?? 0) > 0) return "unsupported";
    C += e.readUInt32BE(O + 4);
  }
  return C === r.length ? null : "unsupported";
}
function We(e, n, r) {
  for (let o = n; o < r; o++) if (e[o] !== 0) return !1;
  return !0;
}
async function Er(e, n) {
  let r = Lt(n);
  for (let o = 0; o < e.length; o += vt) r.update(e.subarray(o, o + vt)), await Gt();
  return r.digest();
}
function Gt() {
  return new Promise(e => setImmediate(e));
}
var Ar = 268435456,
  maxBuffer_2 = 100663296,
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
  file = 33188,
  executable = 33261,
  symlink = 40960,
  gitlink = 57344,
  Ht = 61440,
  qe = {
    file: file,
    executable: executable,
    symlink: symlink,
    gitlink: gitlink
  },
  Mr = "^(core\\.(autocrlf|filemode|symlinks|trustctime|checkstat|quotepath|sparsecheckout)|sparse\\.expectfilesoutsideofpatterns|extensions\\.objectformat)$";
async function Ve(repoDir, spawn, r, o, signal, onWindows = Te === "\\") {
  let l = {
      repoDir: repoDir,
      onWindows: onWindows,
      spawn: spawn,
      signal: signal,
      deadline: Date.now() + o
    },
    h = weakMap.get(spawn);
  if (h === void 0) h = Fr(l), weakMap.set(spawn, h);
  let [p, S] = await Promise.all([h, r.from === "commit" ? Ur(l, r.revision) : new Map()]);
  if (!p || !S) return null;
  let {
    settings: settings,
    index: index_2
  } = p;
  if (r.to === "work-tree") p.workTree ??= Wr(l, settings, index_2).catch(() => null);
  let b = r.to === "index" ? {
    sides: index_2.sides,
    unseen: new Set()
  } : await p.workTree;
  if (!b) return null;
  let {
      sides: sides,
      unseen: unseen
    } = b,
    A = r.from === "index" ? new Map([...index_2.sides, ...Array.from(index_2.intended).filter(([G]) => !sides.has(G))].filter(([G]) => !unseen.has(G))) : S,
    C = [];
  for (let [G, q] of sides) {
    let K = A.get(G);
    if (K?.mode !== q.mode || K?.id !== q.id || q.bytes !== void 0) C.push(G);
  }
  for (let G of A.keys()) if (!sides.has(G)) C.push(G);
  C.sort();
  let O = new Map();
  if ((await Promise.all(C.map(item => tn(l.repoDir, ne(item), O, l.onWindows).catch(() => !0)))).includes(!0)) return null;
  let D = await zr(l, C);
  if (D === null) return null;
  let P = _e(Buffer.alloc(0), settings.objectFormat),
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
    if (await new Promise(H => setImmediate(H)), be(l)) B = te;
    let K = B < te ? await Kr(l, q.flatMap(item => [A.get(item), sides.get(item), index_2.sides.get(item)].flatMap(item => item !== void 0 && item.mode !== gitlink && !item.bytes && !item.uncounted && item.id !== P ? [item.id] : [])), U) : new Map();
    if (K === null) return null;
    K.set(P, "");
    for (let H of q) {
      let j = D.get(H),
        X = A.get(H),
        J = sides.get(H),
        Y = index_2.sides.get(H)?.id ?? "",
        M = Yr(J, Rt(j, settings.autocrlf), K.get(Y) ?? (J?.id === Y ? J.bytes?.toString("latin1") : void 0), settings.objectFormat);
      if (X?.mode === M?.mode && X?.id === M?.id) continue;
      let [z, Q] = [zt(X, K), zt(M, K)],
        ae = Jr(H, settings.quotesPaths);
      if (N.push(Lr(X, M, ae)), B >= te || z === null || Q === null || Kt(X, z, j?.diff) || Kt(M, Q, j?.diff)) {
        F.push(`-	-	${ae}`);
        continue;
      }
      let left = Math.min(Ir, he),
        Ie = {
          left: left
        },
        {
          added: added,
          removed: removed
        } = qr(z, Q, Ie);
      if (F.push(`${added}	${removed}	${ae}`), B++, he -= left - Math.max(0, Ie.left), se += left - Math.max(0, Ie.left), se > Or) {
        if (se = 0, await new Promise(In => setImmediate(In)), be(l)) B = te;
      }
    }
  }
  return [...N, ...F].join(`
`);
}
function Lr(e, n, r) {
  let o = !e ? "A" : !n ? "D" : (e.mode & Ht) !== (n.mode & Ht) ? "T" : "M",
    s = u => (u?.mode ?? 0).toString(8).padStart(6, "0");
  return `:${s(e)} ${s(n)} 0000000 0000000 ${o}	${r}`;
}
var weakMap = new WeakMap();
async function Fr(e) {
  let settings_2 = await Dr(e),
    index_3 = settings_2 && (await Nr(e, settings_2.objectFormat));
  return settings_2 && index_3 && {
    settings: settings_2,
    index: index_3
  };
}
function be({
  signal: signal_2,
  deadline: deadline
}) {
  return signal_2?.aborted === !0 || Date.now() > deadline;
}
function ce({
  repoDir: e,
  spawn: spawn_2,
  signal: r,
  deadline: deadline_2
}, s, input_3) {
  return lt(Pt(), ["--literal-pathspecs", ...yn, ...s], {
    ...spawn_2,
    cwd: e,
    timeout: Math.max(1, deadline_2 - Date.now()),
    abortSignal: r,
    preserveOutputOnError: !1,
    maxBuffer: maxBuffer_2,
    encoding: "latin1",
    stripFinalNewline: !1,
    ...(input_3 === void 0 ? {
      stdin: "ignore"
    } : {
      input: input_3
    })
  });
}
async function Dr(e) {
  let {
    stdout: stdout_2,
    exitCode: exitCode_2
  } = await ce(e, ["config", "-z", "--get-regexp", Mr]);
  if (exitCode_2 !== 0 && exitCode_2 !== 1) return null;
  let o = new Map();
  for (let s of stdout_2.split("\x00")) {
    let [u = "", l] = s.split(`
`, 2);
    o.set(u, l ?? "true");
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
  };
}
function ye(e) {
  return de(e) !== !1;
}
async function Nr({
  spawn: spawn_3,
  signal: signal_3
}, r) {
  let GIT_INDEX_FILE = spawn_3.env.GIT_INDEX_FILE;
  if (GIT_INDEX_FILE === void 0) return null;
  let s;
  try {
    s = await Zt(GIT_INDEX_FILE, Cc());
  } catch (error) {
    return k(error) === "ENOENT" ? {
      entries: [],
      sides: new Map(),
      intended: new Map(),
      modifiedSeconds: 0
    } : null;
  }
  try {
    let u = await s.stat(),
      l = await Iw(s, Ar, u.size),
      h = l.overLimit ? null : await Nt(l.bytes, r, signal_3 ?? new AbortController().signal);
    if (h === null || "refused" in h) return null;
    let entries_2 = h.entries.map(y => ({
      path: y.pathBytes.toString("latin1"),
      entry: y,
      stat: y.stat
    }));
    if (!entries_2.every(({
      path: path
    }) => en(path))) return null;
    let S = entries_2.filter(({
      entry: entry
    }) => entry.stage === 0).map(({
      path: path_2,
      entry: entry_2
    }) => ({
      isIntended: entry_2.isIntentToAdd,
      row: [path_2, {
        mode: qe[entry_2.kind],
        id: entry_2.id
      }]
    }));
    return {
      entries: entries_2,
      sides: new Map(S.filter(item => !item.isIntended).map(item => item.row)),
      intended: new Map(S.filter(item => item.isIntended).map(item => item.row)),
      modifiedSeconds: Math.floor(u.mtimeMs / 1000)
    };
  } catch {
    return null;
  } finally {
    await s.close().catch(() => {
      return;
    });
  }
}
var Gr = /^(?:\.git|git~1)[. ]*(?::|$)/i;
function en(e, n = Te === "\\") {
  if (/^\/|\/\/|\/$/.test(e)) return !1;
  if (!/\.\.|\.git|git~1|[\\:]/i.test(e)) return !0;
  let r = e.split(/[/\\]/);
  if (r.some(item => Gr.test(item))) return !1;
  return n ? !/[:\\]/.test(e) && r.every(item => rz(item) !== "..") : !e.split("/").includes("..");
}
async function Ur(e, n) {
  let {
    stdout: stdout_3,
    code: code
  } = await ce(e, ["ls-tree", "-r", "-z", "--full-tree", n]);
  if (code !== 0) return null;
  let s = new Map();
  for (let u of stdout_3.split("\x00")) {
    let l = /^(\d{6}) \S+ ([0-9a-f]{40,64})\t(.+)$/s.exec(u);
    if (l) s.set(l[3], {
      mode: parseInt(l[1], 8),
      id: l[2]
    });
  }
  if (![...s.keys()].every(item => en(item))) return null;
  return s;
}
async function Wr(lookup, settings_3, r) {
  let {
      repoDir: repoDir_2
    } = lookup,
    sides_2 = new Map(),
    unseen_2 = new Set(),
    l = new Map([["", Promise.resolve(!0)]]),
    held = {
      bytes: 0
    },
    p = [];
  for (let [S, y] of r.entries.entries()) {
    let {
      path: path_3,
      entry: entry_3,
      stat: stat
    } = y;
    if (entry_3.stage === 0 && (stat.isAssumedUnchanged || entry_3.isSkipWorktree && !settings_3.looksAtSkippedFilesThatAreThere)) sides_2.set(path_3, {
      mode: qe[entry_3.kind],
      id: entry_3.id
    });else if (path_3 !== r.entries[S - 1]?.path) p.push(y);
  }
  for (let S = 0; S < p.length; S += Wt) {
    if (be(lookup)) return null;
    let y = p.slice(S, S + Wt),
      T = new Map(await Promise.all(L(y.map(({
        path: path_4
      }) => ne(path_4))).map(async item => [item, await nn(repoDir_2, item, l).catch(() => {
        return;
      })])));
    if (lookup.onWindows && [...T.values()].includes(void 0)) return null;
    let b = await Promise.all(y.map(({
        path: path_5
      }) => T.get(ne(path_5)) === !1 ? "ENOTDIR" : T.get(ne(path_5)) === void 0 ? "EACCES" : He(ke(repoDir_2, path_5)).catch(k))),
      w = await Promise.all(y.map((item, index) => Hr(item, b[index], {
        lookup: lookup,
        settings: settings_3,
        indexModifiedSeconds: r.modifiedSeconds,
        held: held
      })));
    for (let [E, A] of w.entries()) {
      if (A === "cannot-tell") return null;
      if (A === "unseen") unseen_2.add(y[E].path);else if (A !== null) sides_2.set(y[E].path, A);
    }
  }
  return {
    sides: sides_2,
    unseen: unseen_2
  };
}
function Hr({
  path: path_6,
  entry: entry_4,
  stat: stat_2
}, o, s) {
  let u = {
    mode: qe[entry_4.kind],
    id: entry_4.id
  };
  if (o === void 0 || typeof o === "string") {
    if (o !== "ENOENT" && o !== "ENOTDIR") return "unseen";
    return entry_4.isSkipWorktree ? u : null;
  }
  if (o.isDirectory()) return entry_4.kind === "gitlink" ? u : null;
  if (!o.isFile() && !o.isSymbolicLink()) return null;
  let {
      settings: settings_4
    } = s,
    h = o.isSymbolicLink() || !settings_4.hasSymlinks && entry_4.kind === "symlink",
    p = settings_4.trustsExecutableBit ? (o.mode & 64) !== 0 : entry_4.kind === "executable",
    S = h ? symlink : p ? executable : file;
  if (entry_4.stage === 0 && S === u.mode && jr(stat_2, o, settings_4, s.indexModifiedSeconds)) return u;
  if (o.isSymbolicLink()) return jt(path_6, S, u.id, "link", s);
  let y = o.size <= Jt && s.held.bytes + o.size <= Qt ? o.size : 0;
  return s.held.bytes += y, jt(path_6, S, u.id, y, s);
}
async function jt(e, mode, r, o, {
  lookup: lookup_2,
  settings: settings_5,
  held: held_2
}) {
  let h = ke(lookup_2.repoDir, e);
  try {
    if (o === "link") {
      let bytes = await Rr(h, {
        encoding: "buffer"
      });
      return {
        mode: mode,
        id: _e(bytes, settings_5.objectFormat),
        bytes: bytes
      };
    }
    let p = await $r(h, mode, r, lookup_2, settings_5, o);
    if (p === null || p === "cannot-tell" || !p.bytes) held_2.bytes -= o;
    return p;
  } catch (error) {
    held_2.bytes -= o === "link" ? 0 : o;
    let S = k(error);
    return S === "ENOENT" || S === "ENOTDIR" || S === "ELOOP" ? null : "cannot-tell";
  }
}
async function $r(e, mode_2, r, o, {
  objectFormat: objectFormat
}, u) {
  let l = await Zt(e, Cc());
  try {
    let h = await l.stat();
    if (!h.isFile()) return null;
    let {
      size: size_3
    } = h;
    if (size_3 > u) {
      let T = Xt(objectFormat).update(`blob ${size_3}\x00`),
        b = Buffer.allocUnsafe(Pr);
      for (let w = 0; w < size_3;) {
        if (be(o)) return "cannot-tell";
        let {
          bytesRead: bytesRead
        } = await l.read(b, 0, b.length, w);
        if (bytesRead === 0) break;
        T.update(b.subarray(0, bytesRead)), w += bytesRead;
      }
      return {
        mode: mode_2,
        id: T.digest("hex"),
        uncounted: !0
      };
    }
    let {
        bytes: bytes_2
      } = await Iw(l, size_3, size_3),
      id = _e(bytes_2, objectFormat);
    return id === r && !bytes_2.includes(`\r
`) ? {
      mode: mode_2,
      id: id
    } : {
      mode: mode_2,
      id: id,
      bytes: bytes_2
    };
  } finally {
    await l.close().catch(() => {
      return;
    });
  }
}
function jr(e, n, {
  trustsChangeTime: trustsChangeTime,
  checksWholeStat: checksWholeStat
}, s) {
  return e.size !== 0 && e.size === n.size % 4294967296 && e.modifiedSeconds === Math.floor(n.mtimeMs / 1000) && e.modifiedSeconds < s && (!checksWholeStat || (!trustsChangeTime || e.changedSeconds === Math.floor(n.ctimeMs / 1000)) && (e.inode === 0 || e.inode === n.ino % 4294967296));
}
function ne(e) {
  return e.slice(0, Math.max(0, e.lastIndexOf("/")));
}
function tn(e, n, r, o) {
  if (n === "") return Promise.resolve(!1);
  let s = r.get(n);
  if (s === void 0) s = tn(e, ne(n), r, o).then(u => u || He(ke(e, n)).then(l => l.isSymbolicLink(), l => {
    let h = k(l);
    if (h === "ENOENT" || h === "ENOTDIR" || h === "EACCES" && !o) return !1;
    throw l;
  })), r.set(n, s);
  return s;
}
function nn(e, n, r) {
  let o = r.get(n);
  if (o === void 0) o = nn(e, ne(n), r).then(s => s && He(ke(e, n)).then(u => u.isDirectory(), u => {
    let l = k(u);
    if (l === "ENOENT" || l === "ENOTDIR") return !1;
    throw u;
  })), r.set(n, o);
  return o;
}
function ke(e, n) {
  return Buffer.byteLength(n) === n.length ? e + Te + n : Buffer.concat([Buffer.from(e + Te), Buffer.from(n, "latin1")]);
}
async function zr(e, n) {
  if (n.length === 0) return new Map();
  let {
    stdout: stdout_4,
    code: code_2
  } = await ce(e, ["check-attr", "-z", "--stdin", "text", "crlf", "eol", "diff"], Buffer.from(n.map(item => `${item}\x00`).join(""), "latin1"));
  return code_2 === 0 ? It(stdout_4) : null;
}
async function Kr(e, n, r) {
  let o = L(n);
  if (o.length === 0) return new Map();
  let s = await ce(e, ["cat-file", "--batch-check=%(objectname) %(objecttype) %(objectsize)"], Buffer.from(o.map(item => `${item}
`).join("")));
  if (s.code !== 0 || / missing$/m.test(s.stdout)) return null;
  let u = s.stdout.split(`
`).flatMap(item => {
      let y = /^([0-9a-f]{40,64}) blob (\d+)$/.exec(item),
        T = Number(y?.[2]);
      if (!y || T > Jt || r.bytes + T > Qt) return [];
      return r.bytes += T, [y[1]];
    }),
    l = new Map();
  if (u.length === 0) return l;
  let {
    stdout: stdout_5,
    code: code_3
  } = await ce(e, ["cat-file", "--batch"], Buffer.from(u.map(item => `${item}
`).join("")));
  if (code_3 !== 0) return null;
  for (let S = 0; S < stdout_5.length;) {
    let y = stdout_5.indexOf(`
`, S),
      T = /^([0-9a-f]{40,64}) blob (\d+)$/.exec(stdout_5.slice(S, y));
    if (y === -1 || !T) return null;
    let b = y + 1 + Number(T[2]);
    l.set(T[1], stdout_5.slice(y + 1, b)), S = b + 1;
  }
  return l;
}
function Yr(e, n, r, o) {
  if (e?.bytes === void 0 || e.mode === symlink) return e;
  let bytes_3 = xt(e.bytes, n, n === "if-text" && r?.includes(`\r
`) ? Buffer.from(r, "latin1") : void 0);
  return bytes_3 === null ? e : {
    mode: e.mode,
    id: _e(bytes_3, o),
    bytes: bytes_3
  };
}
function _e(e, n) {
  return Xt(n).update(`blob ${e.length}\x00`).update(e).digest("hex");
}
function zt(e, n) {
  if (e === void 0) return "";
  if (e.mode === gitlink) return `Subproject commit ${e.id}
`;
  if (e.uncounted) return null;
  return e.bytes?.toString("latin1") ?? n.get(e.id) ?? null;
}
function Kt(e, n, r) {
  if ((e?.mode === file || e?.mode === executable) && (r === "set" || r === "unset")) return r === "unset";
  let s = n.indexOf("\x00");
  return s !== -1 && s < Br;
}
function qr(e, n, r) {
  let [o, s] = Xr(e, n),
    u = {
      added: qt(s),
      removed: qt(o)
    };
  if (r.left -= (u.added + u.removed) * Ut, r.left < 0) return u;
  let [l, h] = [Vt(o), Vt(s)],
    p = {
      added: 0,
      removed: 0
    },
    S = [[0, l.length, 0, h.length]];
  for (let y = S.pop(); y !== void 0; y = S.pop()) {
    let [T = 0, b = 0, w = 0, E = 0] = y;
    while (T < b && w < E && l[T] === h[w]) T++, w++;
    while (T < b && w < E && l[b - 1] === h[E - 1]) b--, E--;
    let [A, C] = [b - T, E - w];
    if (A === 0 || C === 0) {
      p.removed += A, p.added += C;
      continue;
    }
    let [O, I] = [l.slice(T, b), h.slice(w, E)],
      D = Yt(O, I, r, Cr);
    if (D === null) {
      r.left -= (A + C) * Ut;
      let P = r.left < 0 ? [] : Vr(O, I);
      if (P.length > 0) {
        let [N, F] = [T, w];
        for (let [U, B] of P) S.push([N, T + U, F, w + B]), N = T + U + 1, F = w + B + 1;
        S.push([N, b, F, E]);
        continue;
      }
      D = Yt(O, I, r, r.left) ?? A + C;
    }
    p.added += (D + C - A) / 2, p.removed += (D - C + A) / 2;
  }
  return p;
}
function Yt(e, n, r, o) {
  let s = Math.min(o, r.left),
    u = 0,
    l = Math.min(e.length + n.length, Math.ceil(Math.sqrt(2 * Math.max(0, s)))),
    int32Array = new Int32Array(2 * l + 3),
    p = l + 1;
  for (let S = 0; S <= l && u <= s; S++) for (let y = -S; y <= S; y += 2) {
    let [T, b] = [int32Array[p + y - 1], int32Array[p + y + 1]],
      w = y === -S || y !== S && T < b ? b : T + 1,
      E = w;
    while (E < e.length && E - y < n.length && e[E] === n[E - y]) E++;
    if (int32Array[p + y] = E, u += 1 + E - w, E >= e.length && E - y >= n.length) return r.left -= u, S;
  }
  return r.left -= u, null;
}
function Vr(e, n) {
  let o = new Map();
  for (let [p, S] of n.entries()) o.set(S, o.has(S) ? -1 : p);
  let s = new Map();
  for (let [p, S] of e.entries()) s.set(S, s.has(S) ? -1 : p);
  let u = [],
    l = [];
  for (let [p, oldAt] of s) {
    let newAt = o.get(p) ?? -1;
    if (oldAt === -1 || newAt === -1) continue;
    let T = 0,
      b = l.length;
    while (T < b) {
      let w = T + b >> 1;
      if (u[l[w]].newAt < newAt) T = w + 1;else b = w;
    }
    u.push({
      oldAt: oldAt,
      newAt: newAt,
      previous: T === 0 ? -1 : l[T - 1]
    }), l[T] = u.length - 1;
  }
  let h = [];
  for (let p = l.at(-1) ?? -1; p !== -1; p = u[p].previous) h.push([u[p].oldAt, u[p].newAt]);
  return h.reverse();
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
  return s = s === 0 || u === -1 ? 0 : e.length - u - 1, [e.slice(o, e.length - s), n.slice(o, n.length - s)];
}
function qt(e) {
  let n = e === "" || e.endsWith(`
`) ? 0 : 1;
  for (let r = 0; r < e.length; r++) if (e.charCodeAt(r) === 10) n++;
  return n;
}
function Vt(e) {
  return e === "" ? [] : e.match(/[^\n]*\n|[^\n]+$/g) ?? [];
}
var Zr = new Map([[7, "\\a"], [8, "\\b"], [9, "\\t"], [10, "\\n"], [11, "\\v"], [12, "\\f"], [13, "\\r"], [34, "\\\""], [92, "\\\\"]]);
function Jr(e, n) {
  if (!(n ? /[^\x20-\x7e]|["\\]/ : /[^\x20-\x7e\x80-\xff]|["\\]/).test(e)) return Buffer.from(e, "latin1").toString("utf8");
  let o = Array.from(e, s => {
    let u = s.charCodeAt(0);
    return Zr.get(u) ?? (u < 32 || u === 127 || n && u >= 128 ? `\\${u.toString(8).padStart(3, "0")}` : s);
  }).join("");
  return `"${Buffer.from(o, "latin1").toString("utf8")}"`;
}
var tt = ["--no-optional-locks", "-c", "diff.relative=false", "diff", ...t1s, fS],
  timeout_2 = 5000,
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
    return y === null || y === "base-stats-failed" ? re("diff-failed", u) : y;
  }
  let l = await ge("HEAD", n, o, s);
  if (l === null) return (await Qe(n, o, s)) ?? re("diff-failed", u);
  if (l.stats.filesCount > Z) return {
    ...l,
    hunks: new Map(),
    source: {
      kind: "working-tree"
    }
  };
  if (r === "session") return await Promise.all([io(l, o), Re(l, n, o, void 0, !0, s)]), {
    ...l,
    hunks: new Map(),
    source: {
      kind: "working-tree"
    }
  };
  let h = await Re(l, n, o, void 0, !1, s);
  if (r === "branch-point") return (await so(e, n, l, o, s)) ?? re("diff-failed", u);
  if (r === "uncommitted" || l.stats.filesCount > 0) return {
    ...l,
    hunks: new Map(),
    source: {
      kind: "working-tree"
    }
  };
  let p = await rn(e, n, !1, o, h, s),
    S = {
      ...l,
      hunks: new Map(),
      source: {
        kind: "working-tree"
      }
    };
  if (p === "base-stats-failed") return fn(S, o) ?? re("diff-failed", u);
  if (p === null || p.stats.filesCount === 0) return S;
  return p;
}
function re(e, n) {
  return n?.(e), null;
}
function fn(e, n) {
  return n === void 0 || e.stats.filesCount > 0 ? e : null;
}
async function rn(e, n, r, o, s, u) {
  let l = await hn(e, n, o, void 0, u);
  if (l.kind === "error") return r ? Qe(n, o, u) : null;
  let h, source;
  if (l.kind !== "merge-base") {
    if (!r) return null;
    h = await ge("HEAD", n, o, u), source = l.kind === "head-is-base" ? {
      kind: "branch",
      baseBranch: l.baseBranch,
      baseRef: "HEAD"
    } : {
      kind: "working-tree"
    };
  } else h = await ge(l.mergeBase, n, o, u), source = {
    kind: "branch",
    baseBranch: l.baseBranch,
    baseRef: l.mergeBase
  };
  if (h === null) return l.kind === "merge-base" ? "base-stats-failed" : Qe(n, o, u);
  if (h.stats.filesCount <= Z) await Re(h, n, o, s, !1, u);
  return {
    ...h,
    hunks: new Map(),
    source: source
  };
}
async function so(e, n, r, o, s) {
  let u = {
      ...r,
      hunks: new Map(),
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
  let stats = {
      ...p.stats
    },
    perFileStats = new Map();
  for (let [T, b] of r.perFileStats) {
    let w = p.perFileStats.get(T);
    if (!b.isUntracked) {
      let {
        previousPath: previousPath,
        newPath: newPath,
        ...C
      } = b;
      perFileStats.set(T, w ?? (b.previousPath === void 0 ? b : C));
      continue;
    }
    if (perFileStats.set(T, b), w === void 0) stats.filesCount += 1;else stats.linesAdded -= w.added, stats.linesRemoved -= w.removed;
  }
  for (let [T, b] of p.perFileStats) {
    if (perFileStats.size >= me) break;
    if (!perFileStats.has(T)) perFileStats.set(T, b);
  }
  return {
    stats: stats,
    perFileStats: perFileStats,
    hunks: new Map(),
    source: {
      kind: "branch",
      baseBranch: h.baseBranch,
      baseRef: h.mergeBase
    }
  };
}
async function io(e, n) {
  if (e.perFileStats.size === 0) return;
  let r = n ?? put(),
    o = Dxe();
  await Promise.all(Array.from(e.perFileStats, async ([s, u]) => {
    try {
      let l = await un(fe(r, s));
      if (Math.max(l.mtimeMs, l.ctimeMs) < o) u.preSession = !0;
    } catch {}
  }));
}
async function Re(e, n, r, o, s = !1, u) {
  let l = me - e.perFileStats.size;
  if (l <= 0) return null;
  let h = o !== void 0 ? o : await ho(l, n, r, s, u);
  if (h) for (let [p, S] of h) {
    if (e.perFileStats.has(p)) continue;
    e.perFileStats.set(p, S), e.stats.filesCount += 1;
  }
  return h;
}
async function Qe(abortSignal_2, cwd, r) {
  if ((await ut(Pt(), ["--no-optional-locks", "rev-parse", "--verify", "--quiet", "HEAD"], {
    timeout: timeout_2,
    preserveOutputOnError: !1,
    abortSignal: abortSignal_2,
    ...oe(cwd, r),
    cwd: cwd
  })).exitCode !== 1) return null;
  let s = {
      stats: {
        filesCount: 0,
        linesAdded: 0,
        linesRemoved: 0
      },
      perFileStats: new Map(),
      hunks: new Map(),
      source: {
        kind: "working-tree"
      },
      noCommits: !0
    },
    u = await ge("--cached", abortSignal_2, cwd, r);
  if (u !== null) {
    if (s.stats = u.stats, s.perFileStats = u.perFileStats, u.stats.filesCount > Z) return s;
    if (u.stats.filesCount > 0) await ao(s, abortSignal_2, cwd, r);
  }
  return await Re(s, abortSignal_2, cwd, void 0, !1, r), s;
}
async function ao(e, n, r, o) {
  let s = await pn(n, r, o);
  if (s === null) return;
  for (let [u, l] of s.perFileStats) {
    let h = e.perFileStats.get(u);
    if (h === void 0) continue;
    let isBinary = h.isBinary || l.isBinary,
      added_2 = isBinary ? 0 : Math.max(0, h.added + l.added - l.removed);
    e.stats.linesAdded += added_2 - h.added, e.perFileStats.set(u, {
      ...h,
      added: added_2,
      removed: 0,
      isBinary: isBinary,
      ...(l.status === "removed" && {
        status: "removed"
      })
    });
  }
}
async function pn(abortSignal_3, cwd_2, r) {
  if (nt(r)) {
    let s = cwd_2 === void 0 ? null : await Ve(cwd_2, r, {
      from: "index",
      to: "work-tree"
    }, timeout_2, abortSignal_3);
    return s === null ? null : Qmr(s, Number.POSITIVE_INFINITY, "within-root");
  }
  let o = await ut(Pt(), [...tt, "--raw", "--numstat"], {
    timeout: timeout_2,
    preserveOutputOnError: !1,
    abortSignal: abortSignal_3,
    ...oe(cwd_2, r, {
      userLocale: !0
    }),
    cwd: cwd_2
  });
  if (o.code !== 0) return null;
  return Qmr(o.stdout, Number.POSITIVE_INFINITY, r === void 0 ? "all" : "within-root");
}
function nt(e) {
  return e !== void 0 && Gpe();
}
async function ge(revision, n, r, o, s = me) {
  if (o === void 0) {
    let {
      stdout: stdout_6,
      code: code_4
    } = await Ae([revision, "--shortstat"], n, r, o);
    if (code_4 === 0) {
      let stats_2 = OIt(stdout_6);
      if (stats_2 && stats_2.filesCount > Z) return {
        stats: stats_2,
        perFileStats: new Map()
      };
    }
  }
  let u;
  if (nt(o)) {
    let h = r === void 0 ? null : await Ve(r, o, revision === "--cached" ? {
      from: "nothing",
      to: "index"
    } : {
      from: "commit",
      revision: revision,
      to: "work-tree"
    }, timeout_2, n);
    if (h === null) return null;
    u = h;
  } else {
    let {
      stdout: stdout_7,
      code: code_5
    } = await Ae([revision, "--raw", "--numstat"], n, r, o);
    if (code_5 !== 0) return null;
    u = stdout_7;
  }
  let l = Qmr(u, s, o === void 0 ? "all" : "within-root");
  if (o !== void 0 && l.stats.filesCount > Z) return {
    stats: l.stats,
    perFileStats: new Map()
  };
  return l;
}
function Ae(e, abortSignal_4, cwd_3, o) {
  let s = [...tt, ...e, "--"],
    u = {
      timeout: timeout_2,
      preserveOutputOnError: !1,
      abortSignal: abortSignal_4
    };
  if (cwd_3 !== void 0) return ut(Pt(), s, {
    ...u,
    ...oe(cwd_3, o),
    cwd: cwd_3,
    stdin: "ignore"
  });
  return qmr(ie().cwd(), s, {}, u);
}
function Jmr(e) {
  let n = CU(e);
  return n !== null && n.workTree !== null && n.gitDir === fe(n.workTree, ".git") ? n : null;
}
function uo(workTree) {
  return {
    env: {
      ...ys(jEe, {
        base: es(),
        repository: Jmr(workTree) ?? {
          gitDir: dte,
          workTree: workTree,
          commonDir: dte
        }
      }),
      ...P9e,
      ...rY(void 0, lnt()),
      [NSt]: "1"
    },
    extendEnv: !1,
    gitStartsIn: gxe.filesystemRoot()
  };
}
function lo(workTree_2) {
  return {
    env: {
      ...ys(jEe, {
        base: es(),
        repository: {
          gitDir: dte,
          workTree: workTree_2,
          commonDir: dte
        }
      }),
      ...P9e,
      [NSt]: "1"
    },
    extendEnv: !1,
    gitStartsIn: gxe.filesystemRoot()
  };
}
function oe(e, n, {
  userLocale: userLocale
} = {}) {
  if (e === void 0) return {
    env: ys(void 0, {
      userLocale: userLocale
    })
  };
  return n ?? lo(e);
}
function wXt(e) {
  if (e.noCommits) return "--cached";
  return e.source.kind === "branch" ? e.source.baseRef : "HEAD";
}
async function wRi(e, n = "HEAD") {
  if (!kXt()) return null;
  if (await gn(e, void 0, void 0)) return null;
  let {
    stdout: stdout_8,
    code: code_6
  } = await Ae([n, "--shortstat"], e, void 0, void 0);
  if (code_6 === 0) {
    let h = OIt(stdout_8);
    if (h && h.filesCount > Z) return {
      hunks: new Map(),
      skippedLarge: new Set()
    };
  }
  let {
    stdout: stdout_9,
    code: code_7
  } = await Ae([...Sdn, n], e, void 0, void 0);
  if (code_7 !== 0) return null;
  let l = cio(stdout_9);
  if (n === "--cached" && l.hunks.size > 0) {
    let h = await pn(e, void 0, void 0);
    if (h === null) return null;
    for (let p of h.perFileStats.keys()) l.hunks.delete(p);
  }
  return l;
}
function bWe() {
  return ie().cwd();
}
function kXt() {
  let e = bWe(),
    diffCheckoutIsRepo = um().diffCheckoutIsRepo,
    r = diffCheckoutIsRepo.get(e);
  if (r !== void 0) return r;
  let o = ty(e) !== null;
  return diffCheckoutIsRepo.set(e, o), o;
}
function put() {
  let e = bWe();
  return fr(e) ?? e;
}
async function wPn(abortSignal_5, cwd_4) {
  let {
    stdout: stdout_10,
    code: code_8
  } = await ut(Pt(), ["--no-optional-locks", "rev-parse", "--show-toplevel"], {
    timeout: timeout_2,
    preserveOutputOnError: !1,
    abortSignal: abortSignal_5,
    ...(cwd_4 === void 0 ? {
      env: ys()
    } : uo(cwd_4)),
    cwd: cwd_4
  });
  if (code_8 !== 0 || stdout_10.trim() === "") return null;
  return stdout_10.trim();
}
function Qmr(e, n = me, r = "all") {
  let o = e.split(`
`).filter(Boolean),
    s = o.filter(item => item.startsWith(":")),
    u = o.filter(item => !item.startsWith(":") && Dt(item, "\t") + 1 >= 3),
    l = s.length === u.length,
    h = new Map();
  if (!l) for (let [w, E] of s.entries()) {
    let [, A = "", C] = E.split("\t"),
      O = C === void 0 ? A : co(A, C),
      I = h.get(O);
    if (I === void 0) h.set(O, {
      indices: [w],
      next: 0
    });else I.indices.push(w);
  }
  let p = 0,
    linesAdded = 0,
    linesRemoved = 0,
    filesCount = 0,
    perFileStats_2 = new Map();
  for (let [w, E] of u.entries()) {
    let A = E.split("\t"),
      C = A.slice(2).join("\t"),
      O = l ? s[w] : void 0,
      I = h.get(C);
    if (I !== void 0) {
      while (I.next < I.indices.length && I.indices[I.next] < p) I.next++;
      let B = I.indices[I.next];
      if (B !== void 0) I.next++, p = B + 1, O = s[B];
    }
    if (r === "within-root" && !lio(C)) continue;
    filesCount++;
    let D = A[0],
      P = A[1],
      isBinary_2 = D === "-" || P === "-",
      added_3 = isBinary_2 ? 0 : parseInt(D ?? "0", 10) || 0,
      removed_2 = isBinary_2 ? 0 : parseInt(P ?? "0", 10) || 0;
    if (linesAdded += added_3, linesRemoved += removed_2, perFileStats_2.size < n) {
      let B = perFileStats_2.has(C);
      perFileStats_2.set(C, {
        added: added_3,
        removed: removed_2,
        isBinary: isBinary_2,
        isUntracked: !1,
        ...(O !== void 0 && po(O, B))
      });
    }
  }
  return {
    stats: {
      filesCount: filesCount,
      linesAdded: linesAdded,
      linesRemoved: linesRemoved
    },
    perFileStats: perFileStats_2
  };
}
function co(e, n) {
  if (e.startsWith('"') || n.startsWith('"')) return `${e} => ${n}`;
  let r = 0;
  for (let S = 0; S < e.length && S < n.length && e[S] === n[S]; S++) if (e[S] === "/") r = S + 1;
  let o = r === 0 ? 0 : r - 1,
    s = 0;
  for (let S = e.length - 1, y = n.length - 1; S >= o && y >= o && e[S] === n[y]; S--, y--) if (e[S] === "/") s = e.length - S;
  if (r + s === 0) return `${e} => ${n}`;
  let u = e.slice(0, r),
    l = e.slice(e.length - s),
    h = e.slice(r, Math.max(r, e.length - s)),
    p = n.slice(r, Math.max(r, n.length - s));
  return `${u}{${h} => ${p}}${l}`;
}
var fo = {
  A: "added",
  D: "removed",
  R: "renamed",
  C: "copied"
};
function po(e, n) {
  let [r, o, s] = e.split("\t"),
    u = r.slice(r.lastIndexOf(" ") + 1)[0],
    status = fo[u] ?? "modified",
    newPath_2 = et(s ?? o);
  if (n || newPath_2 === void 0) return {
    status: status
  };
  if (s === void 0) return o.startsWith('"') ? {
    status: status,
    newPath: newPath_2
  } : {
    status: status
  };
  let previousPath_2 = et(o);
  return previousPath_2 === void 0 ? {
    status: status
  } : {
    status: status,
    previousPath: previousPath_2,
    newPath: newPath_2
  };
}
function et(e) {
  let n = e.startsWith('"') ? SWe(e.slice(1, -1)) : e;
  return !xoe(n) && !regExp.test(n) && !/\\|^[A-Za-z]:| => /.test(n) && !cn(n) && n.split("/").every(item => rz(item) !== "..") ? n : void 0;
}
function lio(e) {
  let n = uls(e);
  return n !== null && n.every(item => !cn(item) && !ro.isAbsolute(item) && !/^[A-Za-z]:/.test(item) && item.split(/[/\\{}]/).every(item => rz(item) !== ".."));
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
    return Ze(y) === y.length - 1 ? [p, SWe(y.slice(1, -1))] : null;
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
    s.push(`${h}${r.slice(u + 1)}${p}`, `${h}${o.slice(0, l)}${p}`);
  }
  return s;
}
function Ze(e) {
  for (let n = 1; n < e.length; n++) if (e[n] === "\\") n++;else if (e[n] === '"') return n;
  return -1;
}
var regExp = new RegExp(`[${ib}\\uFFFD]`, "u");
function SWe(e) {
  let n = [],
    r = Array.from(e);
  for (let o = 0; o < r.length; o++) {
    let s = r[o];
    if (s !== "\\") {
      n.push(...Buffer.from(s, "utf8"));
      continue;
    }
    let u = r[o + 1] ?? "",
      l = r.slice(o + 1, o + 4).join("");
    if (/^[0-3][0-7]{2}$/.test(l)) {
      n.push(parseInt(l, 8)), o += 3;
      continue;
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
    }[u];
    if (p !== void 0) n.push(p), o += 1;else n.push(92);
  }
  return Buffer.from(n).toString("utf8");
}
function cio(e) {
  let hunks = new Map(),
    skippedLarge = new Set();
  if (!e.trim()) return {
    hunks: hunks,
    skippedLarge: skippedLarge
  };
  let o = e.split(/^diff --git /m).filter(Boolean);
  for (let s of o) {
    if (hunks.size + skippedLarge.size >= me) break;
    let u = s.indexOf(`
`),
      l = u === -1 ? s : s.slice(0, u),
      h = l.match(/^a\/(.+) b\/\1$/),
      p = h ?? l.match(/^(?:"a\/((?:[^"\\]|\\.)*)"|a\/(.+?)) (?:"b\/((?:[^"\\]|\\.)*)"|b\/(.+))$/);
    if (!p) continue;
    let S = h ? h[1] : p[3] !== void 0 ? SWe(p[3]) : p[4] ?? (p[1] !== void 0 ? SWe(p[1]) : p[2] ?? "");
    if (s.length > Ymr) {
      skippedLarge.add(S);
      continue;
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
        continue;
      }
      if (b === null && (A.startsWith("index ") || A.startsWith("---") || A.startsWith("+++") || A.startsWith("new file") || A.startsWith("deleted file") || A.startsWith("old mode") || A.startsWith("new mode") || A.startsWith("Binary files"))) continue;
      if (b && (A.startsWith("+") || A.startsWith("-") || A.startsWith(" ") || A === "")) {
        if (w >= SPn) continue;
        b.lines.push("" + A), w++;
      }
    }
    if (b) T.push(b);
    if (T.length > 0) hunks.set(S, T);
  }
  return {
    hunks: hunks,
    skippedLarge: skippedLarge
  };
}
async function gn(abortSignal_6, cwd_5, r) {
  let o = await Ute(cwd_5 ?? bWe());
  if (!o) return !1;
  let s = ["MERGE_HEAD", "REBASE_HEAD", "CHERRY_PICK_HEAD", "REVERT_HEAD", "rebase-merge", fe("rebase-apply", "rebasing")],
    [u, l, h, p, S, y] = await Promise.all(s.map(item => Qr(fe(o, item)).then(() => !0).catch(() => !1))),
    T = S || y;
  if (u || h || p || l && T) return !0;
  if (nt(r)) return !1;
  let b = await R0t(o, T ? [...Hpt, "REBASE_HEAD"] : Hpt, async w => (await ut(Pt(), ["--no-optional-locks", ...w], {
    timeout: timeout_2,
    preserveOutputOnError: !1,
    abortSignal: abortSignal_6,
    ...oe(cwd_5, r),
    cwd: cwd_5
  })).exitCode);
  return b !== null && b.size > 0;
}
class mn {
  #e = !1;
  #t = !1;
  get baseResolveOkLogged() {
    return this.#e;
  }
  get baseResolveSadLogged() {
    return this.#t;
  }
  markBaseResolveOkLogged() {
    this.#e = !0;
  }
  markBaseResolveSadLogged() {
    this.#t = !0;
  }
}
var go = new W(() => new mn());
async function hn(e, n, r, o, s) {
  let u = go.of(e),
    l = await mo(n, r, o, s);
  if (l.kind === "error") {
    if (!u.baseResolveSadLogged) u.markBaseResolveSadLogged(), c("diff_base_resolve", l.reason);
  } else if (!u.baseResolveOkLogged) u.markBaseResolveOkLogged(), g("diff_base_resolve", {
    outcome: f(l.kind)
  });
  return l;
}
async function mo(abortSignal_7, cwd_6, r, o) {
  let s = {
      timeout: timeout_2,
      abortSignal: abortSignal_7,
      ...oe(cwd_6, o)
    },
    [u, l] = await Promise.all([Qu(cwd_6, s), bM(cwd_6, s)]);
  if (!u || u === "HEAD") return {
    kind: "none"
  };
  let baseBranch = r ?? l;
  if (baseBranch.startsWith("-") || regExp.test(baseBranch) || r === void 0 && /\.\.|[\s~^:?*[\\]|@\{/.test(baseBranch)) return {
    kind: "none"
  };
  let p = {
    ...s,
    preserveOutputOnError: !1,
    cwd: cwd_6
  };
  if (o !== void 0 && Gpe()) {
    let T = await ut(Pt(), ["--no-optional-locks", "merge-base", "HEAD", `refs/remotes/origin/${baseBranch}`], p);
    if (T.code === 0 && T.stdout.trim()) return on(T.stdout.trim(), baseBranch, p);
  }
  if (u === baseBranch) return {
    kind: "head-is-base",
    baseBranch: baseBranch
  };
  let S = !1,
    y = await Sn(baseBranch, async T => {
      let b = await ut(Pt(), T, p);
      if (b.exitCode === 1) S = !0;
      return b;
    });
  if (!y) {
    if (S) return {
      kind: "none"
    };
    for (let T of [`refs/remotes/origin/${baseBranch}`, `refs/heads/${baseBranch}`]) {
      let b = await ut(Pt(), ["--no-optional-locks", "show-ref", "--verify", "--quiet", T], p);
      if (b.exitCode === 0 || b.exitCode === void 0) return {
        kind: "error",
        reason: "merge_base_failed"
      };
    }
    return {
      kind: "none"
    };
  }
  return on(y, baseBranch, p);
}
async function on(mergeBase, baseBranch_2, r) {
  let o = await ut(Pt(), ["--no-optional-locks", "rev-parse", "HEAD"], r);
  if (o.code !== 0) return {
    kind: "error",
    reason: "head_rev_parse_failed"
  };
  if (o.stdout.trim() === mergeBase) return {
    kind: "head-is-base",
    baseBranch: baseBranch_2
  };
  return {
    kind: "merge-base",
    mergeBase: mergeBase,
    baseBranch: baseBranch_2
  };
}
async function ho(e, abortSignal_8, cwd_7, o = !1, s) {
  let {
    stdout: stdout_11,
    code: code_9
  } = await ut(Pt(), ["--no-optional-locks", "ls-files", "--others", "--exclude-standard", "--full-name"], {
    timeout: timeout_2,
    preserveOutputOnError: !1,
    abortSignal: abortSignal_8,
    ...oe(cwd_7, s),
    cwd: cwd_7
  });
  if (code_9 !== 0) return null;
  let h = stdout_11.split(`
`).filter(item => item !== "" && (s === void 0 || lio(item)));
  if (h.length === 0) return null;
  let p = cwd_7 ?? put(),
    S = Dxe(),
    y = await Promise.all(h.slice(0, oo).map(async w => {
      try {
        let E = await un(fe(p, w));
        return {
          filePath: w,
          preSession: Math.max(E.mtimeMs, E.ctimeMs) < S
        };
      } catch {
        return {
          filePath: w,
          preSession: !1
        };
      }
    })),
    T = y.filter(item => !item.preSession);
  if (o) T.push(...y.filter(item => item.preSession));
  if (T.length === 0) return null;
  let b = new Map();
  for (let {
    filePath: filePath,
    preSession: preSession
  } of T.slice(0, e)) {
    let newPath_3 = filePath.startsWith('"') ? et(filePath) : void 0;
    b.set(filePath, {
      added: 0,
      removed: 0,
      isBinary: !1,
      isUntracked: !0,
      status: "added",
      ...(newPath_3 !== void 0 && {
        newPath: newPath_3
      }),
      ...(preSession && {
        preSession: preSession
      })
    });
  }
  return b;
}
function OIt(e) {
  let n = e.match(/(\d+)\s+files?\s+changed(?:,\s+(\d+)\s+insertions?\(\+\))?(?:,\s+(\d+)\s+deletions?\(-\))?/);
  if (!n) return null;
  return {
    filesCount: parseInt(n[1] ?? "0", 10),
    linesAdded: parseInt(n[2] ?? "0", 10),
    linesRemoved: parseInt(n[3] ?? "0", 10)
  };
}
var timeout_3 = 3000;
function uio({
  gitDiffRead: gitDiffRead
}) {
  if (!gitDiffRead) return !1;
  if (i.CLAUDE_CODE_REMOTE) return !0;
  return R_() && v("tengu_bridge_child_tool_diff", !0);
}
var yo = 65536;
function fio(e) {
  return Boolean(i.CLAUDE_CODE_REMOTE) || Buffer.byteLength(e.patch, "utf8") <= yo;
}
async function pio(e) {
  let n = fr(Je(e));
  if (!n) return null;
  let workTree_3 = await dn(n).catch(() => null);
  if (workTree_3 === null) return null;
  let o = await sn(workTree_3);
  if (o === null) return null;
  let s = an(o),
    u = [Ee(), ...(i.CLAUDE_CODE_REPO_CHECKOUTS ? gWe().values() : [])],
    gitDir = null;
  for (let w of u) {
    let E = bPn(w);
    if (E === null) continue;
    let A = await sn(E);
    if (A === null) continue;
    if (A === o) {
      gitDir = A;
      break;
    }
    let C = an(A);
    if (gitDir === null && C === s) gitDir = C;
  }
  if (gitDir === null) return null;
  let h = {
      gitDir: gitDir,
      workTree: workTree_3
    },
    p = to(n, e).split(no).join("/"),
    repository_5 = kBs(),
    {
      code: code_10
    } = await we(h, ["--no-optional-locks", "ls-files", "--error-unmatch", "--", p]);
  if (code_10 === 0) {
    let w = await bo(h, n),
      {
        stdout: stdout_12,
        code: code_11
      } = await we(h, [...tt, ...Sdn, w, "--", p], {
        userLocale: !0
      });
    if (code_11 !== 0) return null;
    if (!stdout_12) return null;
    return {
      ...To(p, stdout_12, "modified"),
      repository: repository_5
    };
  }
  let T = ldn() ? await _t(e, p, Ymr, (w, E) => we(h, w, E)) : void 0;
  if (T === null) return null;
  let b = await ko(p, e, T);
  if (!b) return null;
  return {
    ...b,
    repository: repository_5
  };
}
function To(filename, n, status_2) {
  let o = n.split(`
`),
    s = [],
    u = !1,
    additions = 0,
    deletions = 0;
  for (let p of o) {
    if (p.startsWith("@@")) u = !0;
    if (u) {
      if (s.push(p), p.startsWith("+") && !p.startsWith("+++")) additions++;else if (p.startsWith("-") && !p.startsWith("---")) deletions++;
    }
  }
  return {
    filename: filename,
    status: status_2,
    additions: additions,
    deletions: deletions,
    changes: additions + deletions,
    patch: s.join(`
`)
  };
}
async function Sn(e, n) {
  let r = [];
  for (let l of [`origin/${e}`, e]) {
    let {
      stdout: stdout_13,
      code: code_12
    } = await n(["--no-optional-locks", "merge-base", "HEAD", l]);
    if (code_12 === 0 && stdout_13.trim()) r.push(stdout_13.trim());
  }
  let [o, s] = r;
  if (!o) return null;
  if (!s || o === s) return o;
  let {
    code: code_13
  } = await n(["--no-optional-locks", "merge-base", "--is-ancestor", o, s]);
  return code_13 === 0 ? s : o;
}
async function sn(e) {
  let n = await Ute(e);
  return n === null ? null : dn(n).catch(() => null);
}
function an(e) {
  let n = Je(e),
    r = Je(n);
  return Xe(e) !== ".git" && Xe(n) === "worktrees" && Xe(r).endsWith(".git") ? r : e;
}
function we({
  gitDir: gitDir_2,
  workTree: n
}, r, {
  userLocale: userLocale_2,
  config: config_2
} = {}) {
  return lt(Pt(), [`--git-dir=${gitDir_2}`, `--work-tree=${n}`, ...r], {
    cwd: n,
    timeout: timeout_3,
    env: ys(config_2, {
      userLocale: userLocale_2
    })
  });
}
function Tn(e) {
  let n = Jso(e),
    r = (n !== void 0 ? dt().get(n) : void 0) || i.CLAUDE_CODE_BASE_REF;
  if (!r) return;
  return r.startsWith("-") ? null : r;
}
async function bo(e, n) {
  let r = Tn(n);
  function o(l) {
    return we(e, l);
  }
  if (r === void 0) {
    let l = await bM();
    if (l.startsWith("-")) return "HEAD";
    return (await Sn(l, o)) ?? "HEAD";
  }
  let {
    stdout: stdout_14,
    code: code_14
  } = await o(["--no-optional-locks", "merge-base", "HEAD", r ?? "HEAD"]);
  if (code_14 === 0 && stdout_14.trim()) return stdout_14.trim();
  return "HEAD";
}
async function ko(filename_2, n, r) {
  try {
    if (r === void 0 && !(await NFr(n, Ymr))) return null;
    let s = (r ?? (await eo(n, "utf-8"))).split(`
`);
    if (s.length > 0 && s.at(-1) === "") s.pop();
    let u = s.length,
      l = s.map(item => `+${item}`).join(`
`),
      patch = `@@ -0,0 +1,${u} @@
${l}`;
    return {
      filename: filename_2,
      status: "added",
      additions: u,
      deletions: 0,
      changes: u,
      patch: patch
    };
  } catch {
    return null;
  }
}
function S2(e) {
  return e.type === "local_agent" && e.status === "completed" && "agentType" in e && e.agentType !== "main-session" && "isBackgrounded" in e && e.isBackgrounded === !0 && !("isObserver" in e && e.isObserver === !0) && !("evictAfter" in e && e.evictAfter === 0) && "chatEngaged" in e && e.chatEngaged === !0 && !("chatPinForfeited" in e && e.chatPinForfeited === !0);
}
function ehr() {
  return !Ct() && wR(s0e)?.isAvailable?.() === !0 && c4().enabled.some(item => item.name === s0e) && FMt(s0e);
}
function x9e() {
  return !v("tengu_jazzy_ripple", !1);
}
var wo = 200,
  rt = 100,
  bn = "tengu_memoized_turtle",
  kn = 3600;
function mio() {
  return i.CLAUDE_CODE_MAX_WEB_SEARCHES_PER_SESSION ?? wo;
}
function _n({
  refillsByDefault: refillsByDefault
}) {
  let CLAUDE_CODE_WEB_SEARCH_REFILLS_PER_HOUR = i.CLAUDE_CODE_WEB_SEARCH_REFILLS_PER_HOUR;
  if (CLAUDE_CODE_WEB_SEARCH_REFILLS_PER_HOUR !== void 0) return CLAUDE_CODE_WEB_SEARCH_REFILLS_PER_HOUR;
  if (!refillsByDefault) return 0;
  let {
      getFeatureValue_CACHED_MAY_BE_STALE: getFeatureValue_CACHED_MAY_BE_STALE
    } = import.meta.require("B:/~BUN/root/chunk-hckxtg11.js"),
    o = getFeatureValue_CACHED_MAY_BE_STALE(bn, rt),
    s = typeof o === "string" && /^\d+$/.test(o) ? Number(o) : o;
  if (typeof s === "number" && Number.isInteger(s) && s >= 0 && s <= kn) return s;
  return t(`WebSearch budget: ignoring the served ${bn} value ${_(o)} (not an integer from 0 to ${kn}); using ${rt} refills per hour`, {
    level: "warn"
  }), rt;
}
var Eo = 4,
  ot = 3600000;
function wn({
  refillsByDefault: refillsByDefault_2,
  now = () => Date.now()
}) {
  let r = 0,
    o = 0,
    s = now(),
    u = _n({
      refillsByDefault: refillsByDefault_2
    });
  function l() {
    let h = now(),
      p = _n({
        refillsByDefault: refillsByDefault_2
      }),
      S = Math.min(p, u);
    u = p;
    let y = Math.max(0, h - s);
    if (s = h, r === 0) {
      o = 0;
      return;
    }
    o += y * S;
    let T = Math.floor(o / ot);
    if (T >= r) {
      r = 0, o = 0;
      return;
    }
    r -= T, o -= T * ot;
  }
  return {
    tryConsume() {
      if (l(), r >= mio()) return !1;
      return r++, !0;
    },
    msUntilNextCall() {
      l();
      let h = r - mio();
      if (h < 0) return 0;
      if (u === 0) return 1 / 0;
      let p = (h + 1) * ot - o;
      return Math.max(1, Math.ceil(p / u));
    },
    refillsPerHour() {
      return u;
    },
    acquireDirectSearchSlot: dGe(Eo).acquire
  };
}
var EXt = 3000,
  kI = 30000,
  IIt = 30000;
function vPn(e, n) {
  for (let r of Object.values(e)) if (r.id !== n && (r.type === "in_process_teammate" || r.type === "local_agent" && r.agentType !== "main-session") && !Ko(r.status) && !r.isIdle) return !0;
  return !1;
}
function uy(e, n, {
  refillWebSearchBudgetByDefault: r = !1
} = {}) {
  let o;
  return {
    register(s) {
      Bo(s, n);
    },
    update(s, u) {
      xo(s, n, u);
    },
    updateTranscript(s, u) {
      n(l => {
        let h = yWe(l.transcripts, s) ?? vXt,
          p = u(h);
        if (p === h) return l;
        return {
          ...l,
          transcripts: {
            ...l.transcripts,
            [s]: p
          }
        };
      });
    },
    getTranscript(s) {
      return yWe(e().transcripts, s);
    },
    remove(s) {
      Hn().taskEvicted.emit(s), n(u => {
        if (!Object.hasOwn(u.tasks, s)) return u;
        let {
            [s]: l,
            ...tasks
          } = u.tasks,
          p = u.transcripts ?? {},
          {
            [s]: S,
            ...y
          } = p;
        return {
          ...u,
          tasks: tasks,
          transcripts: s in p ? y : p
        };
      });
    },
    evictTerminal(s) {
      Mo(s, n);
    },
    applyOffsetsAndEvict(s, u) {
      Lo(n, s, u);
    },
    get(s) {
      return yWe(e().tasks, s);
    },
    all() {
      return e().tasks;
    },
    getWebSearchBudget() {
      return o ??= wn({
        refillsByDefault: r
      });
    },
    resetWebSearchBudget() {
      o = void 0;
    },
    takeConcurrencySlot() {
      n(u => ({
        ...u,
        runningSubagents: u.runningSubagents + 1
      }));
      let s = !1;
      return () => {
        if (s) return;
        s = !0, n(u => {
          let runningSubagents = Math.max(0, u.runningSubagents - 1);
          if (runningSubagents === u.runningSubagents) return u;
          return {
            ...u,
            runningSubagents: runningSubagents
          };
        });
      };
    },
    getConcurrentSubagents() {
      return e().runningSubagents;
    }
  };
}
function xo(task_id, n, r) {
  let patch_2 = null,
    s = null,
    u = !1;
  using l = f6i();
  if (n(h => {
    let p = yWe(h.tasks, task_id);
    if (!p) return h;
    let S = r(p);
    if (S === p) return h;
    if (patch_2 = Io(p, S), u = le() && pZ(S) || nm(S), !Ko(p.status) && Ko(S.status)) s = {
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
        [task_id]: S
      }
    };
  }), s === null) l.release();
  if (patch_2 !== null && !u) {
    let h = {
      type: "system",
      subtype: "task_updated",
      task_id: task_id,
      run_id: SU(task_id),
      patch: patch_2
    };
    Ti(e$t(h, s?.opts?.failureKind));
  }
  if (s !== null && !u) za(task_id, s.status, s.opts);
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
  return Object.keys(r).length > 0 ? r : null;
}
function vo(e) {
  if (e.type === "local_bash") return "agentId" in e && e.agentId !== void 0 ? !0 : void 0;
  return;
}
function Co(e, n) {
  if (e.type !== "local_agent") return !1;
  for (let r of ["parentAgentId", "ownerAgentId"]) {
    let o = r in e ? e[r] : void 0;
    if (typeof o !== "string" || !Object.hasOwn(n, o)) continue;
    if (n[o].chatPinForfeited === !0) return !0;
  }
  return !1;
}
function Oo(e) {
  let n = e.type === "local_agent" && "agentId" in e ? e.agentId : void 0;
  return typeof n === "string" && Hn().chatPinForfeitedAgentIds.has(n);
}
function fls(e, n) {
  return Co(e, n) || Oo(e);
}
function Bo(e, n) {
  let o = EPs(e.id) && !Ko(e.status);
  if (o || !Hn().runIds.has(e.id)) dOr(e.id);
  let s = !1,
    u = e,
    parent_task_id;
  if (n(h => {
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
      ...(p.startedUnderUseCase !== e.startedUnderUseCase && {
        startedUnderUseCase: void 0
      }),
      ...(p.spawnDepth !== void 0 && {
        spawnDepth: p.spawnDepth
      }),
      ...(p.isObserver !== void 0 && {
        isObserver: p.isObserver
      }),
      ...(p.forkedSkillName !== void 0 && {
        forkedSkillName: p.forkedSkillName
      }),
      ...(p.chatEngaged !== void 0 && {
        chatEngaged: p.chatEngaged
      }),
      ...(p.chatPinForfeited !== void 0 && {
        chatPinForfeited: p.chatPinForfeited
      }),
      ...(p.userStopCount !== void 0 && {
        userStopCount: p.userStopCount
      }),
      ...(p.handbackRecipient !== void 0 && {
        handbackRecipient: p.handbackRecipient
      }),
      ...(p.status === "completed" && p.waitingNoticeRecipient !== void 0 && {
        waitingNoticeRecipient: p.waitingNoticeRecipient
      }),
      ...(p.ownerCanContinueAgents !== void 0 && {
        ownerCanContinueAgents: p.ownerCanContinueAgents
      }),
      ...(p.handbackReport !== void 0 && {
        handbackReport: p.handbackReport
      }),
      ...(p.webFetchSavedFiles !== void 0 && {
        webFetchSavedFiles: p.webFetchSavedFiles
      }),
      ...(p.spawnedSubagent !== void 0 && {
        spawnedSubagent: p.spawnedSubagent
      }),
      ...("progress" in p && p.progress !== void 0 && {
        progress: p.progress
      })
    } : fls(e, h.tasks) ? {
      ...e,
      chatPinForfeited: !0
    } : e;
    return u = S, parent_task_id = oio(S, h.tasks), {
      ...h,
      tasks: {
        ...h.tasks,
        [e.id]: S
      }
    };
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
    ...(sio(u) && {
      awaited: !0
    }),
    spawn_depth: "spawnDepth" in u ? u.spawnDepth : void 0,
    parent_task_id: parent_task_id,
    task_type: e.type,
    workflow_name: "workflowName" in e ? e.workflowName : void 0,
    prompt: "prompt" in e ? e.prompt : void 0,
    skip_transcript: e.skipTranscript,
    ...(_2(e) && {
      ambient: !0
    })
  });
}
function Mo(e, n) {
  let r = !1;
  if (n(o => {
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
        [e]: u,
        ...tasks_2
      } = o.tasks,
      h = o.transcripts ?? {},
      {
        [e]: p,
        ...S
      } = h;
    return {
      ...o,
      tasks: tasks_2,
      transcripts: e in h ? S : h
    };
  }), r) t(`evictTerminalTask: evicted task ${e}`), Hn().taskEvicted.emit(e);
}
function Qde(e) {
  let n = e.tasks ?? {};
  return Object.values(n).filter(item => item.status === "running");
}
async function kRi(e) {
  let attachments = [],
    updatedTaskOffsets = {},
    evictedTaskIds = [];
  for (let s of Object.values(e)) {
    if (s.notified) switch (s.status) {
      case "completed":
      case "failed":
      case "killed":
        if (S2(s)) continue;
        evictedTaskIds.push(s.id);
        continue;
      case "pending":
        continue;
      case "running":
        break;
    }
    if (s.status === "running" && s.outputFile !== void 0 && !(s.type === "local_bash" && s.elsewhere)) {
      let u = await xSs(s.id, s.outputOffset);
      if (u.content) updatedTaskOffsets[s.id] = u.newOffset;
    }
  }
  return {
    attachments: attachments,
    updatedTaskOffsets: updatedTaskOffsets,
    evictedTaskIds: evictedTaskIds
  };
}
function Lo(e, n, r) {
  let o = Object.keys(n);
  if (o.length === 0 && r.length === 0) return;
  let s = [];
  e(u => {
    let l = !1,
      tasks_3 = {
        ...u.tasks
      };
    for (let S of o) {
      let y = tasks_3[S];
      if (y?.status === "running") tasks_3[S] = {
        ...y,
        outputOffset: n[S]
      }, l = !0;
    }
    for (let S of r) {
      let y = tasks_3[S];
      if (!y || !Ko(y.status) || !y.notified) continue;
      if ("retain" in y && (y.evictAfter ?? 1 / 0) > Date.now()) continue;
      if ("retain" in y && (y.keepaliveReasons?.size ?? 0) > 0) continue;
      if (y.type === "local_workflow" && ((y.evictAfter ?? 0) > Date.now() || !VT(S))) continue;
      if (y.type === "mcp_task" && (y.endTime ?? 0) + kI > Date.now()) continue;
      delete tasks_3[S], EPs(S), s.push(S), l = !0;
    }
    if (!l) return u;
    let transcripts;
    for (let S of s) if (u.transcripts && S in u.transcripts) transcripts ??= {
      ...u.transcripts
    }, delete transcripts[S];
    return {
      ...u,
      tasks: tasks_3,
      ...(transcripts && {
        transcripts: transcripts
      })
    };
  });
  for (let u of s) t(`applyTaskOffsetsAndEvictions: evicted task ${u}`), Hn().taskEvicted.emit(u);
}
function Cn(e) {
  return typeof e === "object" && e !== null && "type" in e && e.type === "local_agent";
}
function rR(e) {
  return Cn(e) && e.agentType !== "main-session" && !e.forkWorker;
}
function MIt(e) {
  return rR(e) && e.evictAfter !== 0;
}
function pls(e, n) {
  return Cn(e) && e.status === "running" && !e.isBackgrounded && e.parentAgentId === n;
}
function EPn(e) {
  return pls(e, void 0);
}
function vRi(e) {
  return EPn(e) && e.autoBackgroundArmed === !0 && e.directCall === !0;
}
function A9e(e, {
  userInitiated = !1
} = {}) {
  if (!Cn(e)) return !1;
  if (userInitiated) return !0;
  return e.stoppedByUser !== !0 && (e.status === "running" || e.status === "completed");
}
function gio(e) {
  return Cn(e) ? e.userStopCount ?? 0 : 0;
}
function TXt(e, n) {
  if (!Cn(e)) return !1;
  let r = gio(e);
  return (n ?? e.pendingMessages).some(item => item.userInitiatedAt === r);
}
var mls = "kill-unsettled";
function ERi(e) {
  return le() ? `repl:${e}` : "";
}
function TPn(e) {
  return le() && e.startsWith("repl:");
}
function wWe(e) {
  let {
    parkedTeardowns: parkedTeardowns,
    mainThreadContexts: mainThreadContexts
  } = Hn();
  mainThreadContexts.delete(e);
  let o = parkedTeardowns.get(e);
  if (o !== void 0) parkedTeardowns.delete(e), o();
}
function CXt(e, n) {
  let r = n.get(e);
  if (Cn(r) && lA(r).size === 0 && Ko(r.status) && r.resuming !== !0 && r.finalizing !== !0) wWe(e);
}
function lA(e) {
  return e.keepaliveReasons ?? new Set();
}
function vI(e, n, r) {
  if (!e) return;
  r.update(e, o => {
    if (!Cn(o) || lA(o).has(n)) return o;
    return {
      ...o,
      keepaliveReasons: new Set(lA(o)).add(n)
    };
  });
}
function dA(e, n, r) {
  if (!e) return;
  let o = r.get(e),
    s = Cn(o) && lA(o).has(n);
  if (r.update(e, u => {
    if (!Cn(u) || !lA(u).has(n)) return u;
    let keepaliveReasons = new Set(lA(u));
    keepaliveReasons.delete(n);
    let h = S2(u),
      p = keepaliveReasons.size === 0 && Ko(u.status) && !u.retain && !h;
    return {
      ...u,
      keepaliveReasons: keepaliveReasons,
      ...(keepaliveReasons.size === 0 && h && u.quietlyParked === !0 && {
        quietlyParked: !1
      }),
      ...(p && u.evictAfter === void 0 && {
        evictAfter: Date.now() + kI
      })
    };
  }), s) CXt(e, r);
}
function hls(e) {
  return S2(e) ? void 0 : Date.now() + kI;
}
function it(e) {
  let teammate = tp(e) ? e : void 0,
    localAgent = !teammate && Cn(e) ? e : void 0;
  return {
    teammate: teammate,
    localAgent: localAgent
  };
}
function kWe(e, n) {
  return it(e ? n[e] : void 0);
}
function TRi(e) {
  let {
    teammate: teammate_2,
    localAgent: localAgent_2
  } = it(e);
  return (teammate_2 ?? localAgent_2)?.id ?? st();
}
function CRi({
  viewedTask: viewedTask,
  transcript: transcript,
  mainIsBusy: mainIsBusy,
  mainConversationId: mainConversationId
}) {
  let {
      teammate: teammate_3,
      localAgent: localAgent_3
    } = it(viewedTask),
    task = teammate_3 ?? localAgent_3;
  return {
    task: task,
    isMain: !task,
    isTeammate: !!teammate_3,
    messages: transcript.messages,
    inProgressToolUseIDs: transcript.inProgressToolUseIDs,
    conversationKey: task ? task.id : mainConversationId,
    isLoading: task ? task.status === "running" && !task.isIdle : mainIsBusy
  };
}
import { isAbsolute as En, resolve as Rn } from "path";
import { pathToFileURL as Do } from "url";
function b2(e) {
  try {
    let n = Jv(e),
      r = Jv(Rn(n));
    if (Sl(n) || or(r) || IFt(n) || IFt(r)) return null;
    let o = Do(n);
    return o.hostname !== "" || bCs(o.href) ? null : o.href;
  } catch {
    return null;
  }
}
function Zmr(e) {
  let n = /^file:/i.test(e);
  if (!n) return e;
  let r = n ? e.slice(5) : e;
  if (r.startsWith("//")) {
    if (r = r.slice(2), r === "localhost") r = "/";else if (r.startsWith("localhost/")) r = r.slice(9);
  }
  let o = r.search(/[#?]/),
    s = o === -1 ? "" : r.slice(o),
    u = o === -1 ? r : r.slice(0, o);
  if (u === "") return null;
  try {
    u = decodeURIComponent(u);
  } catch {}
  u = No(u);
  let l = En(u) ? u : Rn(pe(), u),
    h = b2(l);
  if (h === null) return null;
  let p = h + s;
  return bCs(p) ? null : p;
}
function No(e, n = En) {
  if (/^\/[A-Za-z]:(?=[\\/]|$)/.test(e) && n(e.slice(1))) return e.slice(1);
  return e;
}
export { y2, zmr, EIt, VT, uut, gXt, Gmr, Vmr, hRi, C9e, TIt, gWe, bPn, Kmr, Jso, gRi, ils, yXt, Qso, _Xt, CIt, qmr, Zso, als, P$, ODe, O$, RIt, yRi, tp, _Ri, lls, eio, tio, nio, fut, bRi, mq, yWe, rio, IDe, _We, pZ, nm, bXt, oio, M6, u_, dls, sio, BEe, AIt, iio, xIt, SRi, Rye, _2, SXt, Jde, PIt, aio, R9e, cls, timeout_2 as A9, Ymr, SPn, Xmr, Jmr, wXt, wRi, bWe, kXt, put, wPn, Qmr, lio, uls, regExp as dio, SWe, cio, OIt, uio, fio, pio, b2, Zmr, S2, mio, messages as mut, vXt, kPn, hio, EXt, kI, IIt, vPn, uy, fls, Qde, kRi, Cn, rR, MIt, pls, EPn, vRi, A9e, gio, TXt, mls, ERi, TPn, wWe, CXt, lA, vI, dA, hls, ehr, x9e, kWe, TRi, CRi };