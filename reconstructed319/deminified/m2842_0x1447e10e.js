// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { b } from "B:/~BUN/root/chunk-drx9cnw1.js";
import { R } from "B:/~BUN/root/chunk-y2g9f85n.js";
import { J } from "B:/~BUN/root/chunk-r5zmhp23.js";
import { Bo } from "B:/~BUN/root/chunk-game8aqv.js";
import { TC } from "B:/~BUN/root/chunk-1g25msn4.js";
import { W } from "B:/~BUN/root/chunk-ppmmt0c3.js";
import { _ } from "B:/~BUN/root/chunk-2pp12te6.js";
import { x } from "B:/~BUN/root/chunk-mwfggkjt.js";
import { p } from "B:/~BUN/root/chunk-z6138ats.js";
import { Kgt } from "B:/~BUN/root/chunk-1ks9vs37.js";
import { Me } from "B:/~BUN/root/chunk-9kvvd0hy.js";
import { uLt, Kp } from "B:/~BUN/root/chunk-xgwmwbnb.js";
import { ZK } from "B:/~BUN/root/chunk-27h4st9h.js";
import { H0o } from "B:/~BUN/root/chunk-51n55x6w.js";
import { RWt } from "B:/~BUN/root/chunk-y4t2kdk0.js";
import { o, E, oe, C, u, He, Be, me, B, T } from "B:/~BUN/root/chunk-4bfd0jkf.js";
import { NH, XHr, N5, SG } from "B:/~BUN/root/chunk-nxckfnqx.js";
import { readdir as St, readFile as dt } from "fs/promises";
var name = "RunMonitorCommand",
  bt = "refuse_under_other_rules",
  ut = "monitor_input",
  gt = "this environment read no permission settings when it started, so it can't tell which rules apply and runs no monitor. Retrying won't help.",
  yt = "this environment was started with a permission rule that can't be fully applied to a monitor, so it runs none, whatever the command. Retrying won't help.",
  Mt = 600000,
  Rt = 4,
  Et = 1e5,
  Tt = 64,
  xt = 1024,
  at = 33554432,
  vt = 250,
  Ot = 500,
  kt = 1500,
  It = 5,
  At = p(() => He({
    command: o().min(1).max(Et).refine(TC, "command contains control characters"),
    timeout_ms: E().int().min(1000),
    deny_rules: C(o().max(xt)).max(Tt).default([]),
    [ut]: me(o(), oe()).optional(),
    [bt]: T(!0)
  })),
  ee = p(() => He({
    monitor_event: Be([He({
      started: T(!0)
    }), He({
      lines: o(),
      suppressed: E().int().positive().optional()
    })])
  })),
  ne = p(() => u({
    ended: B(["exited", "deadline", "too_much_output", "call_ended"]),
    exitCode: E(),
    finalLines: o().optional(),
    suppressed: E().int().positive().optional(),
    outputPath: o().optional()
  }));
function Pt({
  tryConsume: tryConsume,
  killAfterMs: killAfterMs,
  quietGapMs: quietGapMs,
  now: now,
  send: send,
  onFlood: onFlood
}) {
  let suppressed = 0,
    h,
    g = 0,
    y = !1;
  return {
    take: lines => {
      if (y) return;
      if (tryConsume()) {
        if (send({
          lines: lines,
          ...(suppressed > 0 && {
            suppressed: suppressed
          })
        }), suppressed = 0, now() - g > quietGapMs) h = void 0;
        return;
      }
      if (suppressed += 1, g = now(), h ??= g, g - h > killAfterMs) y = !0, onFlood();
    },
    unreported: () => suppressed
  };
}
var Lt = new W(() => ({
  running: 0
}));
async function Nt(w) {
  let f = await St("/proc").catch(() => []),
    pinned = new Map(),
    alive = 0;
  return await Promise.all(f.filter(item => /^\d+$/.test(item)).map(async item => {
    let a = await dt(`/proc/${item}/stat`, "utf8").catch(() => ""),
      n = NH(a);
    if (XHr(a) === w && n !== void 0) pinned.set(Number(item), n), alive += SG(N5(a)) ? 0 : 1;
  })), {
    pinned: pinned,
    alive: alive
  };
}
async function zt(w) {
  let pid = w.pid;
  if (pid <= 1) return;
  let t = async e => {
      if (x() !== "linux" && x() !== "wsl") try {
        return process.kill(-pid, e);
      } catch {
        return !1;
      }
      let {
          pinned: pinned_2,
          alive: alive_2
        } = await Nt(pid),
        h = pinned_2.get(pid);
      if (h !== void 0 && h !== w.startToken) return !1;
      if (e !== 0) await Kgt(pinned_2, e);
      return alive_2 > 0;
    },
    i = await t("SIGTERM");
  for (let e = Date.now() + kt; i && Date.now() < e;) await J(50), i = await t(0);
  for (let e = 0; i && e < It; e++) i = await t("SIGKILL");
}
async function wMo(w, f, t) {
  let {
      command: command,
      timeout_ms: timeout_ms,
      deny_rules: deny_rules,
      [ut]: input
    } = At().parse(w),
    h = RWt(t.meta);
  if (input !== void 0 && !h) throw Error("RunMonitorCommand was not run: its monitor_input goes with a ToolHost permission request that this server decides, and it brought none, or this server decides none. Retrying won't help.");
  if (h && (input === void 0 || deny_rules.length > 0)) throw Error("RunMonitorCommand was not run: a ToolHost permission request goes with the monitor_input it judged, and with no rules of its own. Retrying won't help.");
  let reportProgress = t.reportProgress;
  if (reportProgress === void 0) throw Error("RunMonitorCommand was not run: the call sent no progress token, so the command's output would have nowhere to go. Call again with _meta.progressToken set.");
  let launchPermissionContext = t.launchPermissionContext;
  if (launchPermissionContext === void 0) throw new R(`RunMonitorCommand was not run: ${gt}`, "RunMonitorCommand: read no launch settings");
  let K = ZK().filter(item => H0o([item]).length === 0);
  if (input === void 0 && [launchPermissionContext.alwaysDenyRules, launchPermissionContext.alwaysAskRules].flatMap(item => Object.values(item).flatMap(item => item ?? [])).some(item => !deny_rules.includes(item) && !K.includes(item))) throw new R(`RunMonitorCommand was not run: ${yt}`, "RunMonitorCommand: holds a rule that the call did not bring");
  let cwd = Bo(t.session).cwd,
    q = !1,
    lt = t.session.subscribe(() => {
      q ||= Bo(t.session).cwd !== cwd;
    }),
    m,
    N,
    cwd_2;
  try {
    if (input === void 0) m = await t.checkAsServedTool(Me, {
      command: command
    }, deny_rules);else {
      let {
          checkMonitorRun: checkMonitorRun
        } = await import("B:/~BUN/root/chunk-2ma8q72f.js"),
        c = await checkMonitorRun({
          name: name,
          meta: t.meta,
          input: input,
          command: command,
          toolUseContext: t.toolUseContext(),
          launchPermissionContext: launchPermissionContext
        });
      if (m = c, "claim" in c) N = c;
    }
    cwd_2 = "toolUseContext" in m ? Bo(m.toolUseContext.session).cwd : cwd;
  } finally {
    lt();
  }
  if ("rejection" in m && input !== void 0) throw new R(m.rejection, "RunMonitorCommand: refused by the ToolHost check");
  if ("rejection" in m) throw new R(m.rejection, "RunMonitorCommand: refused by the served Bash check");
  let {
    session: session,
    abortController: abortController
  } = m.toolUseContext;
  if (q || Bo(t.session).cwd !== cwd) throw Error("RunMonitorCommand was not run: another call changed the working directory while this one was being checked. Send it again to have it checked where it would now start.");
  let U = Lt.of(session.host);
  if (U.running >= Rt) throw Error("RunMonitorCommand was not run: this environment already runs as many monitors as it allows at once. Stop one first.");
  let V = N?.claim();
  if (V === "barred") throw Error("RunMonitorCommand was not run: this session was already told that this call had not started, so it can no longer run. Send a new call.");
  if (V === "started_before") throw Error("RunMonitorCommand was not run again: this very call was already started here once. Check what it did before you send a new call.");
  let abortController_2 = new AbortController();
  U.running += 1, abortController_2.signal.addEventListener("abort", () => {
    U.running -= 1;
  }, {
    once: !0
  });
  let Z = () => abortController.signal.aborted || t.callerGone?.aborted === !0,
    O = () => abortController_2.abort();
  abortController.signal.addEventListener("abort", O, {
    once: !0
  }), t.callerGone?.addEventListener("abort", O, {
    once: !0
  });
  let D = exitCode => ({
      summary: "stopped with its call",
      output: {
        ended: "call_ended",
        exitCode: exitCode
      }
    }),
    H,
    j;
  try {
    if (Z()) return D(-1);
    let [{
        exec: exec
      }, c, {
        logFeatureSad: logFeatureSad
      }, k, S] = await Promise.all([import("B:/~BUN/root/chunk-cqafc8xd.js"), import("B:/~BUN/root/chunk-1s893p5p.js"), import("B:/~BUN/root/chunk-frw5aym1.js"), import("B:/~BUN/root/chunk-h502dhhb.js"), import("B:/~BUN/root/chunk-6p7491dy.js")]),
      ended = "exited",
      finalLines,
      A = r => {
        if (!abortController_2.signal.aborted) ended = r, finalLines = r === "deadline" ? G.drain() : void 0, abortController_2.abort();
      },
      Q = monitor_event => {
        reportProgress(_({
          monitor_event: monitor_event
        })).catch(() => {});
      },
      tt = !1,
      et = () => {
        if (!tt) tt = !0, Q({
          started: !0
        });
      },
      send_2 = r => {
        et(), Q(r);
      },
      pt = S.createTokenBucket(S.BUCKET_CAPACITY, S.TOKEN_REFILL_MS),
      F = Pt({
        tryConsume: () => pt.tryConsume(),
        killAfterMs: k.SUSTAINED_SUPPRESSION_KILL_MS,
        quietGapMs: S.TOKEN_REFILL_MS * 3,
        now: Date.now,
        send: send_2,
        onFlood: () => A("too_much_output")
      }),
      G = k.createStreamLineBatcher(r => {
        if (!abortController_2.signal.aborted) F.take(r);
      }),
      nt = Math.min(timeout_ms, Mt),
      ot = 0,
      {
        storageV5: storageV5,
        sessionEnvVars: sessionEnvVars,
        toolUseId: wt
      } = m.toolUseContext,
      shouldUseSandbox = c.shouldUseSandbox({
        command: command
      }),
      it = c.sandboxPolicyRefusal(shouldUseSandbox, command, !1, "bash");
    if (it !== null) throw logFeatureSad("sandbox_exec", "sandbox_policy_refusal", {
      tool: b("monitor")
    }), new R(it, "RunMonitorCommand: refused by the sandbox policy");
    let s = await exec(command, abortController_2.signal, "bash", {
        session: session,
        cwd: cwd_2,
        storageV5: storageV5,
        sessionEnvVars: sessionEnvVars,
        sandboxAttributionId: wt,
        preventCwdChanges: !0,
        shouldUseSandbox: shouldUseSandbox,
        timeout: nt + 60000,
        onStdout: r => {
          if (abortController_2.signal.aborted) return;
          if (ot += r.length, ot > at) {
            A("too_much_output");
            return;
          }
          G.onData(r);
        }
      }),
      st = s.pid === void 0 ? void 0 : {
        pid: s.pid,
        startToken: NH(await dt(`/proc/${s.pid}/stat`, "utf8").catch(() => ""))
      },
      P;
    try {
      let r = s.status === "completed" ? (await s.result).preSpawnError : void 0;
      if (r !== void 0) throw new R(r, "RunMonitorCommand: the shell could not be started");
      if (s.status === "killed") return D(-1);
      et(), s.taskOutput.spillToDisk(), P = "killed", H = setTimeout(A, nt, "deadline"), j = setInterval((_t, Ct) => {
        if (_t.totalBytes > at) Ct("too_much_output");
      }, vt, s.taskOutput, A);
      let L = await s.result;
      if (clearTimeout(H), clearInterval(j), !abortController_2.signal.aborted) await Promise.race([s.outputEnded, J(Ot, abortController_2.signal)]);
      if (Z()) return D(L.code);
      if (!abortController_2.signal.aborted) finalLines = G.drain(), abortController_2.abort();
      if (ended === "exited") P = {
        exitCode: L.code
      };
      return {
        summary: ended === "exited" ? `exit ${L.code}` : ended === "deadline" ? "stopped at its time limit" : "stopped for printing too much",
        output: {
          ended: ended,
          exitCode: L.code,
          ...(finalLines !== void 0 && {
            finalLines: finalLines
          }),
          ...(F.unreported() > 0 && {
            suppressed: F.unreported()
          }),
          outputPath: s.taskOutput.path
        }
      };
    } finally {
      if (st !== void 0) await zt(st);
      if (await s.taskOutput.flush(), s.cleanup(), P !== void 0) {
        let {
          taskId: taskId
        } = s.taskOutput;
        uLt(taskId, P), await Kp(taskId);
      }
    }
  } finally {
    clearTimeout(H), clearInterval(j), abortController_2.abort(), N?.release(), abortController.signal.removeEventListener("abort", O), t.callerGone?.removeEventListener("abort", O);
  }
}
export { name as hUr, wMo };