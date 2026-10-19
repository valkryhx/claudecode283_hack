// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { x } from "B:/~BUN/root/chunk-3aez4b53.js";
import { Y } from "B:/~BUN/root/chunk-89mss1tj.js";
import { z } from "B:/~BUN/root/chunk-4bx17ygx.js";
import { vo } from "B:/~BUN/root/chunk-rpez7z7a.js";
import { _ } from "B:/~BUN/root/chunk-6za2ez23.js";
import { ld } from "B:/~BUN/root/chunk-nggrknsv.js";
import { Qx } from "B:/~BUN/root/chunk-2zk4vqr8.js";
import { I } from "B:/~BUN/root/chunk-je1b1drr.js";
import { f } from "B:/~BUN/root/chunk-frrkt2bs.js";
import { We } from "B:/~BUN/root/chunk-kad4nq7y.js";
import { Ese } from "B:/~BUN/root/chunk-9grc6xh0.js";
import { VWr } from "B:/~BUN/root/chunk-qcwdfn4k.js";
import { EWt } from "B:/~BUN/root/chunk-vtmhmnh7.js";
import { AWt, QWr } from "B:/~BUN/root/chunk-bpg2qaye.js";
import { qUt } from "B:/~BUN/root/chunk-7wsxhgty.js";
import { Dn } from "B:/~BUN/root/chunk-pystvv3m.js";
import { o, v, oe, T, u, De, $e, fe, U, C } from "B:/~BUN/root/chunk-g3snhg6n.js";
import { I5, BYs, xTe, Bne } from "B:/~BUN/root/chunk-7j1crw74.js";
import { readdir as wt, readFile as st } from "fs/promises";
var name = "RunMonitorCommand",
  _t = "refuse_under_other_rules",
  at = "monitor_input",
  Ct = "this environment read no permission settings when it started, so it can't tell which rules apply and runs no monitor. Retrying won't help.",
  St = "this environment was started with a permission rule that can't be fully applied to a monitor, so it runs none, whatever the command. Retrying won't help.",
  Rt = 600000,
  bt = 4,
  gt = 2000,
  Mt = 1e5,
  Et = 64,
  yt = 1024,
  it = 33554432,
  Tt = 250,
  Ot = 500,
  vt = 1500,
  At = 5,
  xt = f(() => De({
    command: o().min(1).max(Mt).refine(Qx, "command contains control characters"),
    timeout_ms: v().int().min(1000),
    deny_rules: T(o().max(yt)).max(Et).default([]),
    [at]: fe(o(), oe()).optional(),
    [_t]: C(!0)
  })),
  te = f(() => De({
    monitor_event: $e([De({
      started: C(!0)
    }), De({
      lines: o(),
      suppressed: v().int().positive().optional()
    })])
  })),
  ee = f(() => u({
    ended: U(["exited", "deadline", "too_much_output", "call_ended"]),
    exitCode: v(),
    finalLines: o().optional(),
    suppressed: v().int().positive().optional(),
    stderrTail: o().optional()
  }));
function It({
  tryConsume: tryConsume,
  killAfterMs: killAfterMs,
  quietGapMs: quietGapMs,
  now: now,
  send: send,
  onFlood: onFlood
}) {
  let suppressed = 0,
    s,
    S = 0,
    b = !1;
  return {
    take: lines => {
      if (b) return;
      if (tryConsume()) {
        if (send({
          lines: lines,
          ...(suppressed > 0 && {
            suppressed: suppressed
          })
        }), suppressed = 0, now() - S > quietGapMs) s = void 0;
        return;
      }
      if (suppressed += 1, S = now(), s ??= S, S - s > killAfterMs) b = !0, onFlood();
    },
    unreported: () => suppressed
  };
}
var kt = new z(() => ({
  running: 0
}));
async function Lt(m) {
  let h = await wt("/proc").catch(() => []),
    pinned = new Map(),
    alive = 0;
  return await Promise.all(h.filter(item => /^\d+$/.test(item)).map(async item => {
    let c = await st(`/proc/${item}/stat`, "utf8").catch(() => ""),
      n = I5(c);
    if (BYs(c) === m && n !== void 0) pinned.set(Number(item), n), alive += Bne(xTe(c)) ? 0 : 1;
  })), {
    pinned: pinned,
    alive: alive
  };
}
async function Pt(m) {
  let pid = m.pid;
  if (pid <= 1) return;
  let t = async e => {
      if (I() !== "linux" && I() !== "wsl") try {
        return process.kill(-pid, e);
      } catch {
        return !1;
      }
      let {
          pinned: pinned_2,
          alive: alive_2
        } = await Lt(pid),
        s = pinned_2.get(pid);
      if (s !== void 0 && s !== m.startToken) return !1;
      if (e !== 0) await qUt(pinned_2, e);
      return alive_2 > 0;
    },
    i = await t("SIGTERM");
  for (let e = Date.now() + vt; i && Date.now() < e;) await Y(50), i = await t(0);
  for (let e = 0; i && e < At; e++) i = await t("SIGKILL");
}
async function MWr(m, h, t) {
  let i = QWr(name, m, t.launchPermissionContext),
    {
      command: command,
      timeout_ms: timeout_ms,
      deny_rules: deny_rules,
      [at]: input
    } = xt().parse(i.args),
    S = EWt(t.meta);
  if (input !== void 0 && !S) throw Error("RunMonitorCommand was not run: its monitor_input goes with a ToolHost permission request that this server decides, and it brought none, or this server decides none. Retrying won't help.");
  if (S && (input === void 0 || deny_rules.length > 0 || Dn(m) && AWt in m)) throw Error("RunMonitorCommand was not run: a ToolHost permission request goes with the monitor_input it judged, and with no rules of its own. Retrying won't help.");
  let reportProgress = t.reportProgress;
  if (reportProgress === void 0) throw Error("RunMonitorCommand was not run: the call sent no progress token, so the command's output would have nowhere to go. Call again with _meta.progressToken set.");
  let launchPermissionContext = t.launchPermissionContext;
  if (launchPermissionContext === void 0) throw new x(`RunMonitorCommand was not run: ${Ct}`, "RunMonitorCommand: read no launch settings");
  let L = Ese().filter(item => VWr([item]).length === 0);
  if (input === void 0 && [launchPermissionContext.alwaysDenyRules, launchPermissionContext.alwaysAskRules].flatMap(item => Object.values(item).flatMap(item => item ?? [])).some(item => !deny_rules.includes(item) && !L.includes(item))) throw new x(`RunMonitorCommand was not run: ${St}`, "RunMonitorCommand: holds a rule that the call did not bring");
  let cwd = vo(t.session).cwd,
    q = !1,
    dt = t.session.subscribe(() => {
      q ||= vo(t.session).cwd !== cwd;
    }),
    p,
    N,
    cwd_2;
  try {
    if (input === void 0) p = await t.checkAsServedTool(We, {
      command: command
    }, deny_rules, i.rules);else {
      let {
          checkMonitorRun: checkMonitorRun
        } = await import("B:/~BUN/root/chunk-cajh6mc2.js"),
        R = await checkMonitorRun({
          name: name,
          meta: t.meta,
          input: input,
          command: command,
          toolUseContext: t.toolUseContext(),
          launchPermissionContext: launchPermissionContext
        });
      if (p = R, "claim" in R) N = R;
    }
    cwd_2 = "toolUseContext" in p ? vo(p.toolUseContext.session).cwd : cwd;
  } finally {
    dt();
  }
  if ("rejection" in p && input !== void 0) throw new x(p.rejection, "RunMonitorCommand: refused by the ToolHost check");
  if ("rejection" in p) throw new x(p.rejection, "RunMonitorCommand: refused by the served Bash check");
  let {
    session: session,
    abortController: abortController
  } = p.toolUseContext;
  if (q || vo(t.session).cwd !== cwd) throw Error("RunMonitorCommand was not run: another call changed the working directory while this one was being checked. Send it again to have it checked where it would now start.");
  let H = kt.of(session.host);
  if (H.running >= bt) throw Error("RunMonitorCommand was not run: this environment already runs as many monitors as it allows at once. Stop one first.");
  let J = N?.claim();
  if (J === "barred") throw Error("RunMonitorCommand was not run: this session was already told that this call had not started, so it can no longer run. Send a new call.");
  if (J === "started_before") throw Error("RunMonitorCommand was not run again: this very call was already started here once. Check what it did before you send a new call.");
  let abortController_2 = new AbortController();
  H.running += 1, abortController_2.signal.addEventListener("abort", () => {
    H.running -= 1;
  }, {
    once: !0
  });
  let W = () => abortController.signal.aborted || t.callerGone?.aborted === !0,
    M = () => abortController_2.abort();
  abortController.signal.addEventListener("abort", M, {
    once: !0
  }), t.callerGone?.addEventListener("abort", M, {
    once: !0
  });
  let j = exitCode => ({
      summary: "stopped with its call",
      output: {
        ended: "call_ended",
        exitCode: exitCode
      }
    }),
    F,
    G;
  try {
    if (W()) return j(-1);
    let [{
        exec: exec
      }, {
        shouldUseSandbox: shouldUseSandbox
      }, E, w] = await Promise.all([import("B:/~BUN/root/chunk-5dq0w99g.js"), import("B:/~BUN/root/chunk-gvpj2v7g.js"), import("B:/~BUN/root/chunk-c5gy5a1r.js"), import("B:/~BUN/root/chunk-t304k7s3.js")]),
      ended = "exited",
      finalLines,
      A = r => {
        if (!abortController_2.signal.aborted) ended = r, finalLines = r === "deadline" ? K.drain() : void 0, abortController_2.abort();
      },
      Z = monitor_event => {
        reportProgress(_({
          monitor_event: monitor_event
        })).catch(() => {});
      },
      Q = !1,
      tt = () => {
        if (!Q) Q = !0, Z({
          started: !0
        });
      },
      send_2 = r => {
        tt(), Z(r);
      },
      lt = w.createTokenBucket(w.BUCKET_CAPACITY, w.TOKEN_REFILL_MS),
      B = It({
        tryConsume: () => lt.tryConsume(),
        killAfterMs: E.SUSTAINED_SUPPRESSION_KILL_MS,
        quietGapMs: w.TOKEN_REFILL_MS * 3,
        now: Date.now,
        send: send_2,
        onFlood: () => A("too_much_output")
      }),
      K = E.createStreamLineBatcher(r => {
        if (!abortController_2.signal.aborted) B.take(r);
      }),
      et = Math.min(timeout_ms, Rt),
      nt = 0,
      {
        storageV5: storageV5,
        sessionEnvVars: sessionEnvVars,
        toolUseId: pt
      } = p.toolUseContext,
      l = await exec(command, abortController_2.signal, "bash", {
        session: session,
        cwd: cwd_2,
        storageV5: storageV5,
        sessionEnvVars: sessionEnvVars,
        sandboxAttributionId: pt,
        preventCwdChanges: !0,
        shouldUseSandbox: shouldUseSandbox({
          command: command
        }),
        timeout: et + 60000,
        onStdout: r => {
          if (abortController_2.signal.aborted) return;
          if (nt += r.length, nt > it) {
            A("too_much_output");
            return;
          }
          K.onData(r);
        }
      }),
      ot = l.pid === void 0 ? void 0 : {
        pid: l.pid,
        startToken: I5(await st(`/proc/${l.pid}/stat`, "utf8").catch(() => ""))
      };
    try {
      let r = l.status === "completed" ? (await l.result).preSpawnError : void 0;
      if (r !== void 0) throw new x(r, "RunMonitorCommand: the shell could not be started");
      if (l.status === "killed") return j(-1);
      tt(), F = setTimeout(A, et, "deadline"), G = setInterval((ft, ht) => {
        if (ft.totalBytes > it) ht("too_much_output");
      }, Tt, l.taskOutput, A);
      let k = await l.result;
      if (clearTimeout(F), clearInterval(G), !abortController_2.signal.aborted) await Promise.race([l.outputEnded, Y(Ot, abortController_2.signal)]);
      if (W()) return j(k.code);
      if (!abortController_2.signal.aborted) finalLines = K.drain(), abortController_2.abort();
      let stderrTail = ld(k.stderr, gt);
      return {
        summary: ended === "exited" ? `exit ${k.code}` : ended === "deadline" ? "stopped at its time limit" : "stopped for printing too much",
        output: {
          ended: ended,
          exitCode: k.code,
          ...(finalLines !== void 0 && {
            finalLines: finalLines
          }),
          ...(B.unreported() > 0 && {
            suppressed: B.unreported()
          }),
          ...(stderrTail !== "" && {
            stderrTail: stderrTail
          })
        }
      };
    } finally {
      if (l.cleanup(), ot !== void 0) await Pt(ot);
      await l.taskOutput.flush(), await l.taskOutput.deleteOutputFile();
    }
  } finally {
    clearTimeout(F), clearInterval(G), abortController_2.abort(), N?.release(), abortController.signal.removeEventListener("abort", M), t.callerGone?.removeEventListener("abort", M);
  }
}
export { name as jhn, MWr };