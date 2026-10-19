// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { b, c, pe } from "B:/~BUN/root/chunk-jthpk6wv.js";
import { x, H } from "B:/~BUN/root/chunk-3aez4b53.js";
import { t8 } from "B:/~BUN/root/chunk-9ka04m0y.js";
import { Me } from "B:/~BUN/root/chunk-rwkgcmm8.js";
import { F, at } from "B:/~BUN/root/chunk-rpez7z7a.js";
import { z } from "B:/~BUN/root/chunk-4bx17ygx.js";
import { i } from "B:/~BUN/root/chunk-1kfn24jp.js";
import { g, m, p } from "B:/~BUN/root/chunk-kzgf20y6.js";
import { bt, _, t } from "B:/~BUN/root/chunk-6za2ez23.js";
import { ne } from "B:/~BUN/root/chunk-nggrknsv.js";
import { l } from "B:/~BUN/root/chunk-c09hf5e4.js";
import { f } from "B:/~BUN/root/chunk-frrkt2bs.js";
import { ta, no } from "B:/~BUN/root/chunk-8ye9n4fk.js";
import { HT, hw } from "B:/~BUN/root/chunk-h1tq8zce.js";
import { Asn, jNt, jVn, WVn } from "B:/~BUN/root/chunk-z84amwaw.js";
import { Wc, X8e, Pp } from "B:/~BUN/root/chunk-7j5tvnqj.js";
import { JWr, Vde, qde } from "B:/~BUN/root/chunk-m3m0fcyj.js";
import { Cet, qhn } from "B:/~BUN/root/chunk-qcwdfn4k.js";
import { l7t, nSs } from "B:/~BUN/root/chunk-0bjget2c.js";
import { As } from "B:/~BUN/root/chunk-xnas864x.js";
import { Dn } from "B:/~BUN/root/chunk-pystvv3m.js";
import { N } from "B:/~BUN/root/chunk-nkxgam12.js";
import { o, v, oe, T, u, De, Jr, U, C } from "B:/~BUN/root/chunk-g3snhg6n.js";
import { U_ } from "B:/~BUN/root/chunk-7aw74be3.js";
import { randomUUID as Se } from "crypto";
var ae = 240000,
  told = 32,
  tool_use_ids = 32,
  de = f(() => De({
    seen: v().int().min(0).optional(),
    life: o().max(64).optional(),
    hold_ms: v().int().min(0).max(ae).optional(),
    told: T(o().max(64)).max(told).optional(),
    tool_use_ids: T(o().min(1).max(256)).max(tool_use_ids).optional(),
    tool_host_interface: oe().optional()
  }));
function j(e) {
  let r = {
      told: told,
      tool_use_ids: tool_use_ids
    },
    n = N(e) ? Object.entries(r).find(([s, a]) => {
      let y = no(e, s);
      return Array.isArray(y) && y.length > a;
    }) : void 0;
  if (n !== void 0) {
    let [s, a] = n;
    throw new x(`ReadCalls: ${s} has more than ${a} entries`, "ReadCalls: a list has more entries than are taken");
  }
  return de().parse(e);
}
import { randomUUID as ue } from "crypto";
var le = 1024,
  me = 1024,
  X = 32;
function G() {
  return hw(HT, void 0, !0);
}
var zde = new at(() => ({
  id: ue(),
  now: () => performance.now(),
  runningRuns: new Map(),
  finishedRuns: new Map(),
  barredRuns: new Map(),
  newestDropped: void 0,
  runEnded: Me(),
  readFileState: G(),
  subagentReadFileStates: new Map(),
  changedFilesPasses: new WeakMap()
}));
function gKo(e) {
  return zde.of(e).id;
}
function FWr(e, r) {
  let n = zde.of(e),
    {
      runningRuns: runningRuns,
      finishedRuns: finishedRuns,
      barredRuns: barredRuns
    } = n;
  if (barredRuns.has(r)) return "barred";
  if (runningRuns.has(r) || finishedRuns.has(r)) return "started_before";
  return runningRuns.set(r, n.now()), "claimed";
}
var K = (e, r) => e === void 0 || r === void 0 ? e ?? r : Math.max(e, r);
function Y(e, r, n, s) {
  e.set(r, s);
  let [a] = e;
  if (e.size <= n || a === void 0) return;
  return e.delete(a[0]), a[1];
}
function HWr(e, r) {
  let n = zde.of(e);
  if (!n.runningRuns.delete(r)) return;
  n.newestDropped = K(n.newestDropped, Y(n.finishedRuns, r, le, n.now())), n.runEnded.emit();
}
function W(e, r) {
  let n = zde.of(e),
    s = n.runningRuns.get(r);
  if (s !== void 0) return {
    state: "running",
    since_ms: Math.round(n.now() - s)
  };
  if (n.finishedRuns.has(r)) return {
    state: "finished"
  };
  if (!n.barredRuns.has(r)) n.newestDropped = K(n.newestDropped, Y(n.barredRuns, r, me, n.now()));
  return {
    state: "unknown",
    barred: !0
  };
}
function hKo(e, r) {
  return zde.of(e).barredRuns.has(r);
}
function Z(e, r) {
  return zde.of(e).runningRuns.has(r);
}
function J(e, r) {
  return zde.of(e).runEnded.subscribe(r);
}
function Q(e) {
  return [...zde.of(e).runningRuns.keys()];
}
function ee(e) {
  let {
    newestDropped: newestDropped,
    now: now
  } = zde.of(e);
  return newestDropped === void 0 ? void 0 : Math.round(now() - newestDropped);
}
function yKo(e, r) {
  let {
    readFileState: readFileState,
    subagentReadFileStates: subagentReadFileStates
  } = zde.of(e);
  return r === void 0 ? readFileState : subagentReadFileStates.get(r);
}
function _Ko(e, r) {
  let {
    readFileState: readFileState_2,
    subagentReadFileStates: subagentReadFileStates_2
  } = zde.of(e);
  if (r === void 0) return readFileState_2;
  let a = subagentReadFileStates_2.get(r) ?? G();
  subagentReadFileStates_2.delete(r), subagentReadFileStates_2.set(r, a);
  let [y] = subagentReadFileStates_2.keys();
  if (subagentReadFileStates_2.size > X && y !== void 0) subagentReadFileStates_2.delete(y), t(`[mcp serve] more than ${X} subagents: dropped the read record of ${y}`);
  return a;
}
var te = 128,
  ce = 16,
  fe = 256,
  _e = ["background_operator", "unresolved_shell_write"];
function bKo(e) {
  switch (e.step) {
    case "check":
      return !1;
    case "run":
      return e.approval !== void 0;
  }
}
function SKo(e) {
  switch (e.step) {
    case "check":
      return !1;
    case "run":
      return e.agent_id === void 0;
  }
}
var D = f(() => o().max(te).regex(/^[\w.:@-]+$/).regex(/[^.]/)),
  $Wr = f(() => o().refine(t8)),
  ge = f(() => T(o().max(te)).max(ce).transform(e => _e.filter(item => e.includes(item)))),
  ye = f(() => o().max(fe).regex(/^\P{Cc}+$/u)),
  UWr = f(() => o().regex(U_)),
  he = f(() => {
    let e = {
      tool_host_interface: jNt(),
      tool_use_id: D(),
      agent_id: $Wr().optional(),
      main_loop_model: ye(),
      classifier_may_approve: ge().optional(),
      agent_has_read_tool: C(!0).optional(),
      agent_effort_level: U(ta).optional(),
      permission_context: Vde()
    };
    return Jr("step", [De({
      ...e,
      step: C("check")
    }), De({
      ...e,
      step: C("run"),
      approval: De({
        ask_digest: UWr(),
        approver: U(nSs),
        permission_context: Vde()
      }).optional()
    })]);
  });
function BWr(e, r = Asn) {
  let n = Dn(e) ? e[Cet] : void 0;
  if (n === void 0) return {
    kind: "absent"
  };
  if (!qhn(n)) return {
    kind: "other_request"
  };
  let session = jVn(n.tool_host_interface);
  if (session === void 0) return {
    kind: "malformed"
  };
  switch (WVn(r, session).kind) {
    case "peer_too_old":
      return {
        kind: "session_too_old",
        session: session
      };
    case "self_too_old":
      return {
        kind: "daemon_too_old",
        session: session
      };
    case "agreed":
      break;
  }
  let a = Dn(n.approval) ? n.approval : void 0;
  if (qde(n.permission_context) || qde(a?.permission_context)) return {
    kind: "too_large"
  };
  let y = he().safeParse(n);
  if (y.success) return {
    kind: "requested",
    request: y.data
  };
  return {
    kind: JWr(n.permission_context) || JWr(a?.permission_context) ? "unlisted_restriction_on" : "malformed"
  };
}
var $Qn = "ReadCalls",
  jWr = "StopBackgroundCommand",
  ke = 3 * told,
  re = 1000,
  se = "anthropic/backgroundCommands";
function UZs(life) {
  return {
    experimental: {
      [se]: {
        v: 1,
        life: life
      }
    }
  };
}
var ct = f(() => u({
  experimental: u({
    [se]: u({
      v: C(1)
    })
  })
}));
var Re = f(() => De({
  taskId: o().min(1).max(64)
}));
function be({
  interrupted: interrupted,
  code: r,
  outputFileSize: outputFileSize
}) {
  return !interrupted ? {
    state: "exited",
    exit_code: r
  } : {
    state: "killed",
    ...(outputFileSize !== void 0 && {
      reason: "output_limit"
    })
  };
}
class ie {
  life = Se();
  #t = 0;
  #e = new Map();
  #o = Me();
  #n;
  #r;
  constructor(e = () => performance.now()) {
    this.#n = e;
  }
  get version() {
    return this.#t;
  }
  starterFor(e) {
    return {
      reserve: () => {
        return;
      },
      adopt: (r, n, s) => {
        try {
          let a = this.#s(r, n, s, e);
          return g("mcp_serve_background_command"), a;
        } catch (error) {
          throw m("mcp_serve_background_command", "not_kept"), r.kill(), r.cleanup(), error;
        }
      }
    };
  }
  taskIdOf(e) {
    return [...this.#e.values()].find(({
      listed: listed
    }) => listed.tool_use_id === e)?.listed.taskId;
  }
  msSinceNewestDropped() {
    return this.#r === void 0 ? void 0 : Math.round(this.#n() - this.#r);
  }
  list() {
    let e = this.#n();
    return {
      life: this.life,
      commands_version: this.#t,
      commands: Array.from(this.#e.values(), ({
        listed: listed_2,
        startedAt: startedAt,
        ended: ended,
        unwanted: unwanted
      }) => ({
        ...listed_2,
        ...(ended ? {
          ...ended.how,
          ended_ms_ago: Math.round(e - ended.at)
        } : {
          state: "running",
          ...(unwanted && {
            told: !0
          })
        }),
        ran_ms: Math.round((ended?.at ?? e) - startedAt)
      }))
    };
  }
  forget(e) {
    let r = e.flatMap(item => this.#e.get(item) ?? []);
    r.filter(({
      ended: ended_2
    }) => ended_2).forEach(({
      listed: listed_3
    }) => this.#e.delete(listed_3.taskId)), r.filter(({
      ended: ended_3
    }) => !ended_3).forEach(item => {
      item.unwanted = !0;
    });
  }
  stop(e) {
    return this.#e.get(e)?.cut({
      state: "stopped",
      stopped_by: "session"
    }) ?? !1;
  }
  async changedSince(e, r) {
    let {
        promise: promise,
        resolve: resolve
      } = Promise.withResolvers(),
      a = () => resolve(),
      y = this.#o.subscribe(a);
    if (r.addEventListener("abort", a, {
      once: !0
    }), e !== this.#t || r.aborted) a();
    await promise, y(), r.removeEventListener("abort", a);
  }
  #s(e, r, n, s) {
    let taskId = e.taskOutput.taskId,
      output_path = Wc(taskId);
    if (!e.background(taskId)) throw Error("The command had already ended when it was to be moved to the background, and its output was not kept. Run it again without run_in_background.");
    let A = l7t(r),
      S = {
        listed: {
          taskId: taskId,
          ...(s.toolUseId !== void 0 && {
            tool_use_id: s.toolUseId
          }),
          ...(s.agentId !== void 0 && {
            agent_id: s.agentId
          }),
          command: ne(n, re),
          ...(s.description && {
            description: ne(s.description, re)
          }),
          output_path: output_path,
          limit_ms: A
        },
        startedAt: this.#n(),
        cut: d => {
          if (S.ended || e.status !== "backgrounded") return !1;
          return k(d), !0;
        }
      },
      k = how => {
        if (S.ended) return;
        if (clearTimeout(I), P(), S.ended = {
          how: how,
          at: this.#n()
        }, this.#e.delete(taskId), !S.unwanted) this.#e.set(taskId, S);
        let E = [...this.#e.values()].filter(item => item.ended);
        for (let R of E.slice(0, -ke)) this.#e.delete(R.listed.taskId), p("mcp_serve_background_command", "ending_dropped"), this.#r = R.ended?.at;
        this.#t++, this.#o.emit();
        try {
          if (e.status === "backgrounded") e.kill();
          e.cleanup(), X8e(taskId, how.state === "exited" ? `
[exited with code ${how.exit_code}]
` : `
[killed]
`), Pp(taskId), t(`mcp serve: background command ${taskId} ended: ${how.state}${how.state === "killed" && how.reason ? ` (${how.reason})` : ""}`), i("tengu_background_shell_settled", {
            elapsed_ms: Math.round(S.ended.at - S.startedAt),
            requested_timeout_ms: r ?? 0,
            deadline_ms: A,
            outcome: c(how.state !== "exited" ? "killed" : how.exit_code === 0 ? "completed" : "failed"),
            stop_cause: how.state === "time_limit" ? b("deadline") : how.state === "killed" ? pe(how.reason) : void 0,
            stopped_by: pe(how.state === "stopped" ? how.stopped_by : void 0),
            subagent_owned: s.agentId !== void 0,
            unwanted: S.unwanted === !0
          });
        } catch (error) {
          l(H(error));
        }
      },
      I = setTimeout(S.cut, A, {
        state: "time_limit"
      }).unref(),
      P = bt(() => S.cut({
        state: "killed",
        reason: "daemon_exit"
      }));
    return this.#e.set(taskId, S), e.result.then(async d => {
      await e.taskOutput.flush().catch(E => l(H(E))), k(be(d));
    }).catch(d => {
      l(H(d)), k({
        state: "killed"
      });
    }), this.#t++, this.#o.emit(), taskId;
  }
}
var Vhn = new z(() => new ie());
async function WWr(e, r, {
  session: session_2,
  callerGone: s
}) {
  let {
      seen: seen,
      life: life_2,
      hold_ms: A,
      told: told_2,
      tool_use_ids: tool_use_ids_2
    } = j(e ?? {}),
    [I, ...P] = (tool_use_ids_2 ?? []).filter(item => !D().safeParse(item).success);
  if (I !== void 0) throw new x(`ReadCalls: ${_(I)} is not a valid tool_use_id${P.length > 0 ? ` (and ${P.length} more)` : ""}. An id is 1 to 128 letters, digits or _ . : @ -, and not only dots.`, "ReadCalls: a tool_use_id is not valid");
  let d = Vhn.of(session_2.host);
  d.forget(told_2 ?? []);
  let E = () => tool_use_ids_2?.some(h => !Z(session_2, h)) ?? !1;
  if (seen !== void 0 && life_2 === d.life && A !== void 0 && !E()) {
    let abortController = new AbortController(),
      w = J(session_2, () => {
        if (E()) abortController.abort();
      }),
      O = As(r, {
        signalB: s,
        timeoutMs: A,
        refTimer: !0
      });
    try {
      await d.changedSince(seen, AbortSignal.any([O.signal, abortController.signal]));
    } finally {
      O.cleanup(), w();
    }
  }
  let calls = (tool_use_ids_2 ?? Q(session_2)).map(h => {
    let taskId_2 = d.taskIdOf(h);
    return {
      tool_use_id: h,
      ...(taskId_2 === void 0 ? W(session_2, h) : {
        state: "background",
        taskId: taskId_2
      })
    };
  });
  if (tool_use_ids_2 !== void 0 && tool_use_ids_2.length > 0) {
    let h = w => F(calls, O => O.state === w);
    i("tengu_mcp_serve_calls_read_by_id", {
      background: h("background"),
      running: h("running"),
      finished: h("finished"),
      unknown: h("unknown")
    });
  }
  let B = [d.msSinceNewestDropped(), ee(session_2)].filter(item => item !== void 0),
    output = {
      ...d.list(),
      calls: calls,
      ...(B.length > 0 && {
        dropped_ended_ms_ago: Math.min(...B)
      })
    };
  return {
    summary: `${output.commands.length} commands, ${output.calls.length} calls`,
    output: output
  };
}
async function zWr(e, r, {
  session: session_3
}) {
  let {
      taskId: taskId_3
    } = Re().parse(e),
    stopped = Vhn.of(session_3.host).stop(taskId_3);
  return {
    summary: `stopped: ${stopped}`,
    output: {
      stopped: stopped
    }
  };
}
export { zde, gKo, FWr, HWr, hKo, yKo, _Ko, bKo, SKo, $Wr, UWr, BWr, $Qn, jWr, UZs, Vhn, WWr, zWr };