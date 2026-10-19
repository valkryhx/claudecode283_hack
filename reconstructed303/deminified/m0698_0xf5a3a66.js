// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { ce } from "B:/~BUN/root/chunk-nxwmyxnk.js";
import { pt } from "B:/~BUN/root/chunk-cqkcn3bx.js";
import { _ } from "B:/~BUN/root/chunk-6za2ez23.js";
import { Wl } from "B:/~BUN/root/chunk-8ye9n4fk.js";
import { un, NH, fp, To } from "B:/~BUN/root/chunk-z1p6g436.js";
import { Yb, It, odn } from "B:/~BUN/root/chunk-hb6x4e3n.js";
import { j9, EUn, fie, Cct } from "B:/~BUN/root/chunk-8w42v0dp.js";
import { K9t, YHe, g9 } from "B:/~BUN/root/chunk-9grc6xh0.js";
import { Vet } from "B:/~BUN/root/chunk-89b325qp.js";
import { qVt as ambient } from "B:/~BUN/root/chunk-f9ac1atx.js";
import { Ar } from "B:/~BUN/root/chunk-tgzmva3g.js";
import { ibn, l6o } from "B:/~BUN/root/chunk-x56h34kz.js";
import { UVe } from "B:/~BUN/root/chunk-nj2k6zhp.js";
import { TL as run } from "B:/~BUN/root/chunk-5c2pwbes.js";
import { bZo, jEn } from "B:/~BUN/root/chunk-y2qqz0fg.js";
import { Yhn } from "B:/~BUN/root/chunk-0k91nzq1.js";
import { Ret } from "B:/~BUN/root/chunk-w8dkkscd.js";
import { Bre } from "B:/~BUN/root/chunk-90dg0j6s.js";
import { e } from "B:/~BUN/root/chunk-x2hkxw5q.js";
import { Fkn } from "B:/~BUN/root/chunk-42k41jw0.js";
import { ae, P, A, y, B } from "B:/~BUN/root/chunk-5hr2ysa5.js";
async function XGt(d = k) {
  let {
    env: env
  } = await import("B:/~BUN/root/chunk-qfkntjr5.js");
  return env.CLAUDE_CODE_CHILD_SESSION ? d : void 0;
}
var k = "This setting cannot be changed from an editor started inside a Claude Code session. Start the editor outside the session and try again.",
  x = "Claude Design cannot be signed in from inside a Claude Code session. Start the editor outside the session and try again.";
async function c(d) {
  let a = [],
    r = 0,
    s = Bun.stdin.stream().getReader();
  for (;;) {
    let {
      done: done,
      value: value
    } = await s.read();
    if (done) break;
    if (r += value.byteLength, r > d) return await s.cancel(), null;
    a.push(value);
  }
  return new TextDecoder().decode(Buffer.concat(a));
}
function hqr(d, a) {
  d.command("edit-permission-rules", {
    hidden: !0
  }).allowExcessArguments(!1).description("Apply one permission-rule edit read as JSON from stdin (used by the VS Code extension)").requiredOption("--json", "Read the edit as JSON from stdin").action(a(async r => {
    if (process.stdin.isTTY) return un("claude edit-permission-rules reads one JSON edit from stdin; it is run by the VS Code extension, not by hand");
    let s = await XGt();
    if (s !== void 0) return un(s);
    let {
        runPermissionRuleEdit: runPermissionRuleEdit
      } = await import("B:/~BUN/root/chunk-xah57whj.js"),
      n = await c(2097152),
      o = n === null ? null : pt(n, !1);
    if (o === null) return un("claude edit-permission-rules: stdin is not a JSON edit");
    let t = await runPermissionRuleEdit(o, r);
    if (!t.ok) return un(t.error);
    return await fp(_({
      ok: !0,
      warnings: t.warnings,
      stored: t.stored
    }) + `
`), NH();
  })), d.command("edit-memory-settings", {
    hidden: !0
  }).allowExcessArguments(!1).description("Apply one memory-settings edit read as JSON from stdin (used by the VS Code extension)").requiredOption("--json", "Read the edit as JSON from stdin").action(a(async r => {
    if (process.stdin.isTTY) return un("claude edit-memory-settings reads one JSON edit from stdin; it is run by the VS Code extension, not by hand");
    let s = await XGt();
    if (s !== void 0) return un(s);
    let {
        runMemorySettingsEdit: runMemorySettingsEdit
      } = await import("B:/~BUN/root/chunk-cxqdp6rd.js"),
      n = await c(4096),
      o = n === null ? null : pt(n, !1);
    if (o === null) return un("claude edit-memory-settings: stdin is not a JSON edit");
    let t = await runMemorySettingsEdit(o, r);
    if (!t.ok) return un(t.error);
    return await fp(_({
      ok: !0,
      written: t.written
    }) + `
`), To(0);
  })), d.command("edit-skill-overrides", {
    hidden: !0
  }).allowExcessArguments(!1).description("Apply one skill state edit read as JSON from stdin (used by the VS Code extension)").requiredOption("--json", "Read the edit as JSON from stdin").action(a(async r => {
    if (process.stdin.isTTY) return un("claude edit-skill-overrides reads one JSON edit from stdin; it is run by the VS Code extension, not by hand");
    let s = await XGt();
    if (s !== void 0) return un(s);
    let {
        runSkillOverrideEdit: runSkillOverrideEdit
      } = await import("B:/~BUN/root/chunk-62687sq1.js"),
      n = await c(4096),
      o = n === null ? null : pt(n, !1);
    if (o === null) return un("claude edit-skill-overrides: stdin is not a JSON edit");
    let t = await runSkillOverrideEdit(o, ce(), r);
    if (!t.ok) return un(t.error);
    return await fp(_({
      ok: !0,
      written: t.written,
      changed: t.changed
    }) + `
`), NH();
  })), d.command("edit-sandbox-settings", {
    hidden: !0
  }).allowExcessArguments(!1).description("Apply one sandbox settings edit read as JSON from stdin (used by the VS Code extension)").requiredOption("--json", "Read the edit as JSON from stdin").action(async () => {
    if (process.stdin.isTTY) return un("claude edit-sandbox-settings reads one JSON edit from stdin; it is run by the VS Code extension, not by hand");
    let r = await XGt();
    if (r !== void 0) return un(r);
    let {
        runSandboxSettingsEdit: runSandboxSettingsEdit
      } = await import("B:/~BUN/root/chunk-pa60w8at.js"),
      i = await c(4096),
      n = i === null ? null : pt(i, !1);
    if (n === null) return un("claude edit-sandbox-settings: stdin is not a JSON edit");
    let o = await runSandboxSettingsEdit(n);
    if (!o.ok) return un(o.error);
    return await fp(_({
      ok: !0,
      written: o.written
    }) + `
`), To(0);
  }), d.command("design-login", {
    hidden: !0
  }).allowExcessArguments(!1).description("Run the Claude Design sign-in, or report its state, as JSON lines (used by the VS Code extension)").requiredOption("--json", "Write JSON lines to stdout").option("--status", "Report whether design-system access is authorized, and exit").action(a(async (r, s) => {
    if (process.stdin.isTTY) return un("claude design-login --json is run by the VS Code extension, not by hand; use /design-login in a session");
    let {
      isSpawnedByClaudeCodeSession: isSpawnedByClaudeCodeSession
    } = await import("B:/~BUN/root/chunk-qnaw5295.js");
    if (isSpawnedByClaudeCodeSession()) return un(x);
    let {
      designLoginStatus: designLoginStatus,
      runDesignLoginSignIn: runDesignLoginSignIn
    } = await import("B:/~BUN/root/chunk-gbj6hvdr.js");
    if (s.status) return await fp(_(await designLoginStatus()) + `
`), To(0);
    let abortController = new AbortController(),
      {
        markPrintModeSignalHandlersRegistered: markPrintModeSignalHandlersRegistered
      } = await import("B:/~BUN/root/chunk-awz1gsaf.js");
    process.once("SIGTERM", () => abortController.abort()), process.once("SIGINT", () => abortController.abort()), markPrintModeSignalHandlersRegistered();
    let p = await runDesignLoginSignIn({
      stdin: process.stdin,
      write: S => fp(S + `
`),
      signal: abortController.signal
    });
    return To(p.ok ? 0 : 1);
  })), d.command("edit-chrome-settings", {
    hidden: !0
  }).allowExcessArguments(!1).description("Apply one Claude in Chrome settings edit read as JSON from stdin (used by the VS Code extension)").requiredOption("--json", "Read the edit as JSON from stdin").action(a(async r => {
    if (process.stdin.isTTY) return un("claude edit-chrome-settings reads one JSON edit from stdin; it is run by the VS Code extension, not by hand");
    let s = await XGt();
    if (s !== void 0) return un(s);
    let {
        runChromeSettingsEdit: runChromeSettingsEdit
      } = await import("B:/~BUN/root/chunk-y1ba7h2n.js"),
      n = await c(4096),
      o = n === null ? null : pt(n, !1);
    if (o === null) return un("claude edit-chrome-settings: stdin is not a JSON edit");
    let t = await runChromeSettingsEdit(o, r);
    if (!t.ok) return un(t.error);
    return await fp(_({
      ok: !0,
      written: t.written
    }) + `
`), NH();
  })), d.command("drop-worktree-registrations", {
    hidden: !0
  }).allowExcessArguments(!1).description("Drop deleted worktrees' git registrations named as JSON on stdin (used by the VS Code extension)").requiredOption("--json", "Read the request as JSON from stdin").action(async () => {
    if (process.stdin.isTTY) return un("claude drop-worktree-registrations reads one JSON request from stdin; it is run by the VS Code extension, not by hand");
    let r = await XGt("claude drop-worktree-registrations cannot run from inside a Claude Code session; it is run by the VS Code extension");
    if (r !== void 0) return un(r);
    let {
        registrationDropsLine: registrationDropsLine,
        runWorktreeRegistrationDrops: runWorktreeRegistrationDrops
      } = await import("B:/~BUN/root/chunk-kmmkc3zt.js"),
      n = await c(262144),
      o = n === null ? null : pt(n, !1);
    if (o === null) return un("claude drop-worktree-registrations: stdin is not a JSON request");
    let t = await runWorktreeRegistrationDrops(o);
    if (!t.ok) return un(t.error);
    return await fp(registrationDropsLine(t.outcomes) + `
`), NH();
  });
}
B();
function JGt(...d) {
  let {
    mode: mode
  } = d[1].initialState.toolPermissionContext;
  return Cct(mode), h5s(...d);
}
async function h5s(d, a, r, s) {
  let {
      AppRoot: AppRoot
    } = await import("B:/~BUN/root/chunk-pd8qyagc.js"),
    {
      REPL: REPL
    } = await import("B:/~BUN/root/chunk-etg617m5.js");
  function o(m) {
    let f = Ar();
    ibn();
    let h = A(m.commands),
      onCommandsChange = ae(l => {
        h.current = l;
      }, []),
      w = A(() => {
        throw Error("engine: queryParams called before REPL registered builder");
      }),
      onQueryParamsChange = ae(l => {
        w.current = l;
      }, []),
      [engine] = y(() => Vet({
        run: run,
        queryParams: async l => w.current(),
        commands: () => g9(h.current),
        models: () => fie(j9()),
        unavailableModels: () => fie(EUn()),
        agents: () => K9t(f.getState().agentDefinitions.activeAgents),
        account: odn(),
        outputStyle: YHe(),
        mcpServers: () => Fkn(f.getState().mcp.clients),
        ambient: ambient,
        initialModel: () => {
          let l = f.getState();
          return It(l.mainLoopModelForSession ?? l.mainLoopModel ?? Yb());
        },
        initialPermissionMode: () => Wl(f.getState().toolPermissionContext.mode),
        hostOwnsPermissionMode: !0,
        hostOwnsModel: !0
      }));
    return P(() => () => engine.close(), [engine]), e(REPL, {
      ...m,
      engine: engine,
      onCommandsChange: onCommandsChange,
      onQueryParamsChange: onQueryParamsChange
    });
  }
  let {
      session: session,
      storageV5: storageV5,
      credentials: credentials,
      fleetNudgeStore = new UVe({
        storageV5: storageV5
      })
    } = a,
    messageQueue = Ret(storageV5);
  await bZo({
    onHealthy: () => l6o(storageV5),
    storageV5: storageV5
  });
  let store = Yhn(session, a.initialState, m => Bre(m, session, storageV5, credentials));
  try {
    await s(d, e(AppRoot, {
      session: session,
      storageV5: storageV5,
      messageQueue: messageQueue,
      store: store,
      fleetNudgeStore: fleetNudgeStore,
      sessionHooks: a.sessionHooks,
      writesExitHandoff: !0,
      getFpsMetrics: a.getFpsMetrics,
      stats: a.stats,
      keybindings: !1,
      children: e(o, {
        ...r
      })
    }), session, storageV5, credentials);
  } catch (error) {
    throw await jEn().catch(() => !1), error;
  }
}
export { XGt, hqr, JGt, h5s };