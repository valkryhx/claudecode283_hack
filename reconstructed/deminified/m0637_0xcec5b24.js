// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { x9e, Axe, Te } from "B:/~BUN/root/chunk-4rk7cwxz.js";
import { Q } from "B:/~BUN/root/chunk-17wqwt36.js";
import { oe } from "B:/~BUN/root/chunk-shgdrs47.js";
import { ct } from "B:/~BUN/root/chunk-tsjnk8ma.js";
import { gt, b, t } from "B:/~BUN/root/chunk-qe2zga5e.js";
import { nn, xw, Oh, Ds } from "B:/~BUN/root/chunk-zahshfs3.js";
import { _y, _q, Tt, PHt, ps } from "B:/~BUN/root/chunk-gf53qpk6.js";
import { Y5e, oc } from "B:/~BUN/root/chunk-ah3egpyh.js";
import { fs } from "B:/~BUN/root/chunk-290k5gh5.js";
import { mC, he, Nx } from "B:/~BUN/root/chunk-3rzkfay5.js";
import { wV, ern, C9 } from "B:/~BUN/root/chunk-1mdeqc2r.js";
import { Eve, RRt, i3 } from "B:/~BUN/root/chunk-3jyp964r.js";
import { Hz, xX } from "B:/~BUN/root/chunk-ew8y0fm0.js";
import { Wgt as ambient, s1e } from "B:/~BUN/root/chunk-0zh1abnx.js";
import { ZPe } from "B:/~BUN/root/chunk-jzh8geyk.js";
import { _P as run } from "B:/~BUN/root/chunk-m2n01fyt.js";
import { Ar } from "B:/~BUN/root/chunk-h23911wn.js";
import { K6r, Qzt } from "B:/~BUN/root/chunk-xwmqqrba.js";
import { mXn, kgt, uWt } from "B:/~BUN/root/chunk-4f21bd0q.js";
import { VBe, rWt } from "B:/~BUN/root/chunk-r6e8tbtb.js";
import { Xde } from "B:/~BUN/root/chunk-c7zem10c.js";
import { hXn } from "B:/~BUN/root/chunk-trwq4y1k.js";
import { wYr } from "B:/~BUN/root/chunk-tpxmbd3b.js";
import { f2t } from "B:/~BUN/root/chunk-n8vd08cn.js";
import { e } from "B:/~BUN/root/chunk-qkvevvte.js";
import { se, R, T, g, N } from "B:/~BUN/root/chunk-rnj6pcz5.js";
import { Jt } from "B:/~BUN/root/chunk-r833zsf7.js";
async function P() {
  let {
    env: env
  } = await import("B:/~BUN/root/chunk-tk3cwcan.js");
  return env.CLAUDE_CODE_CHILD_SESSION ? s1o : void 0;
}
var s1o = "This setting cannot be changed from an editor started inside a Claude Code session. Start the editor outside the session and try again.";
async function C(o) {
  let n = [],
    i = 0,
    r = Bun.stdin.stream().getReader();
  for (;;) {
    let {
      done: done,
      value: value
    } = await r.read();
    if (done) break;
    if (i += value.byteLength, i > o) return await r.cancel(), null;
    n.push(value);
  }
  return new TextDecoder().decode(Buffer.concat(n));
}
function aXn(o, n) {
  o.command("edit-permission-rules", {
    hidden: !0
  }).allowExcessArguments(!1).description("Apply one permission-rule edit read as JSON from stdin (used by the VS Code extension)").requiredOption("--json", "Read the edit as JSON from stdin").action(n(async i => {
    if (process.stdin.isTTY) return nn("claude edit-permission-rules reads one JSON edit from stdin; it is run by the VS Code extension, not by hand");
    let r = await P();
    if (r !== void 0) return nn(r);
    let {
        runPermissionRuleEdit: runPermissionRuleEdit
      } = await import("B:/~BUN/root/chunk-w601fecz.js"),
      a = await C(2097152),
      l = a === null ? null : ct(a, !1);
    if (l === null) return nn("claude edit-permission-rules: stdin is not a JSON edit");
    let s = await runPermissionRuleEdit(l, i);
    if (!s.ok) return nn(s.error);
    return await Oh(b({
      ok: !0,
      warnings: s.warnings,
      stored: s.stored
    }) + `
`), xw();
  })), o.command("edit-memory-settings", {
    hidden: !0
  }).allowExcessArguments(!1).description("Apply one memory-settings edit read as JSON from stdin (used by the VS Code extension)").requiredOption("--json", "Read the edit as JSON from stdin").action(n(async i => {
    if (process.stdin.isTTY) return nn("claude edit-memory-settings reads one JSON edit from stdin; it is run by the VS Code extension, not by hand");
    let r = await P();
    if (r !== void 0) return nn(r);
    let {
        runMemorySettingsEdit: runMemorySettingsEdit
      } = await import("B:/~BUN/root/chunk-3bw8rdsb.js"),
      a = await C(4096),
      l = a === null ? null : ct(a, !1);
    if (l === null) return nn("claude edit-memory-settings: stdin is not a JSON edit");
    let s = await runMemorySettingsEdit(l, i);
    if (!s.ok) return nn(s.error);
    return await Oh(b({
      ok: !0,
      written: s.written
    }) + `
`), Ds(0);
  })), o.command("edit-skill-overrides", {
    hidden: !0
  }).allowExcessArguments(!1).description("Apply one skill state edit read as JSON from stdin (used by the VS Code extension)").requiredOption("--json", "Read the edit as JSON from stdin").action(n(async i => {
    if (process.stdin.isTTY) return nn("claude edit-skill-overrides reads one JSON edit from stdin; it is run by the VS Code extension, not by hand");
    let {
      env: env_2
    } = await import("B:/~BUN/root/chunk-tk3cwcan.js");
    if (env_2.CLAUDE_CODE_CHILD_SESSION) return nn("This setting cannot be changed from an editor started inside a Claude Code session. Start the editor outside the session and try again.");
    let {
        runSkillOverrideEdit: runSkillOverrideEdit
      } = await import("B:/~BUN/root/chunk-hand2d3n.js"),
      a = await C(4096),
      l = a === null ? null : ct(a, !1);
    if (l === null) return nn("claude edit-skill-overrides: stdin is not a JSON edit");
    let s = await runSkillOverrideEdit(l, oe(), i);
    if (!s.ok) return nn(s.error);
    return await Oh(b({
      ok: !0,
      written: s.written,
      changed: s.changed
    }) + `
`), xw();
  })), o.command("edit-sandbox-settings", {
    hidden: !0
  }).allowExcessArguments(!1).description("Apply one sandbox settings edit read as JSON from stdin (used by the VS Code extension)").requiredOption("--json", "Read the edit as JSON from stdin").action(async () => {
    if (process.stdin.isTTY) return nn("claude edit-sandbox-settings reads one JSON edit from stdin; it is run by the VS Code extension, not by hand");
    let i = await P();
    if (i !== void 0) return nn(i);
    let {
        runSandboxSettingsEdit: runSandboxSettingsEdit
      } = await import("B:/~BUN/root/chunk-kstnfsd9.js"),
      d = await C(4096),
      a = d === null ? null : ct(d, !1);
    if (a === null) return nn("claude edit-sandbox-settings: stdin is not a JSON edit");
    let l = await runSandboxSettingsEdit(a);
    if (!l.ok) return nn(l.error);
    return await Oh(b({
      ok: !0,
      written: l.written
    }) + `
`), Ds(0);
  }), o.command("design-login", {
    hidden: !0
  }).allowExcessArguments(!1).description("Run the Claude Design sign-in, or report its state, as JSON lines (used by the VS Code extension)").requiredOption("--json", "Write JSON lines to stdout").option("--status", "Report whether design-system access is authorized, and exit").action(n(async (i, r) => {
    if (process.stdin.isTTY) return nn("claude design-login --json is run by the VS Code extension, not by hand; use /design-login in a session");
    let {
      isSpawnedByClaudeCodeSession: isSpawnedByClaudeCodeSession
    } = await import("B:/~BUN/root/chunk-dtdjwxm0.js");
    if (isSpawnedByClaudeCodeSession()) return nn("claude design-login --json is not available from inside a Claude Code session");
    let {
      designLoginStatus: designLoginStatus,
      runDesignLoginSignIn: runDesignLoginSignIn
    } = await import("B:/~BUN/root/chunk-vqxebh26.js");
    if (r.status) return await Oh(b(await designLoginStatus()) + `
`), Ds(0);
    let abortController = new AbortController(),
      {
        markPrintModeSignalHandlersRegistered: markPrintModeSignalHandlersRegistered
      } = await import("B:/~BUN/root/chunk-kqy6dwqq.js");
    process.once("SIGTERM", () => abortController.abort()), process.once("SIGINT", () => abortController.abort()), markPrintModeSignalHandlersRegistered();
    let m = await runDesignLoginSignIn({
      stdin: process.stdin,
      write: y => Oh(y + `
`),
      signal: abortController.signal
    });
    return Ds(m.ok ? 0 : 1);
  })), o.command("edit-chrome-settings", {
    hidden: !0
  }).allowExcessArguments(!1).description("Apply one Claude in Chrome settings edit read as JSON from stdin (used by the VS Code extension)").requiredOption("--json", "Read the edit as JSON from stdin").action(n(async i => {
    if (process.stdin.isTTY) return nn("claude edit-chrome-settings reads one JSON edit from stdin; it is run by the VS Code extension, not by hand");
    let {
      env: env_3
    } = await import("B:/~BUN/root/chunk-tk3cwcan.js");
    if (env_3.CLAUDE_CODE_CHILD_SESSION) return nn("This setting cannot be changed from an editor started inside a Claude Code session. Start the editor outside the session and try again.");
    let {
        runChromeSettingsEdit: runChromeSettingsEdit
      } = await import("B:/~BUN/root/chunk-jct80172.js"),
      a = await C(4096),
      l = a === null ? null : ct(a, !1);
    if (l === null) return nn("claude edit-chrome-settings: stdin is not a JSON edit");
    let s = await runChromeSettingsEdit(l, i);
    if (!s.ok) return nn(s.error);
    return await Oh(b({
      ok: !0,
      written: s.written
    }) + `
`), xw();
  }));
}
N();
function _gt(...o) {
  return i1o(...o);
}
async function i1o(o, n, i, r) {
  let {
      AppRoot: AppRoot
    } = await import("B:/~BUN/root/chunk-wbpvjxq0.js"),
    {
      REPL: REPL
    } = await import("B:/~BUN/root/chunk-nnrq21j7.js");
  function l(p) {
    let h = Ar();
    R(() => {
      return;
    }, [h]);
    let E = T(p.commands),
      onCommandsChange = se(f => {
        E.current = f;
      }, []),
      O = T(() => {
        throw Error("engine: queryParams called before REPL registered builder");
      }),
      onQueryParamsChange = se(f => {
        O.current = f;
      }, []),
      [engine] = g(() => s1e({
        run: run,
        queryParams: async f => O.current(),
        commands: () => i3(E.current),
        models: () => C9(wV()),
        unavailableModels: () => C9(ern()),
        agents: () => RRt(h.getState().agentDefinitions.activeAgents),
        account: PHt(),
        outputStyle: Eve(),
        mcpServers: () => f2t(h.getState().mcp.clients),
        ambient: ambient,
        initialModel: () => {
          let f = h.getState();
          return Tt(f.mainLoopModelForSession ?? f.mainLoopModel ?? _y());
        },
        initialPermissionMode: () => oc(h.getState().toolPermissionContext.mode),
        hostOwnsPermissionMode: !0,
        hostOwnsModel: !0
      }));
    return R(() => () => engine.close(), [engine]), e(REPL, {
      ...p,
      engine: engine,
      onCommandsChange: onCommandsChange,
      onQueryParamsChange: onQueryParamsChange
    });
  }
  let {
      session: session,
      storageV5: storageV5,
      credentials: credentials,
      fleetNudgeStore = new ZPe({
        storageV5: storageV5
      })
    } = n,
    messageQueue = VBe(storageV5);
  await K6r({
    onHealthy: () => wYr(storageV5),
    storageV5: storageV5
  });
  let store = rWt(session, n.initialState, p => Xde(p, session, storageV5, credentials));
  try {
    await r(o, e(AppRoot, {
      session: session,
      storageV5: storageV5,
      messageQueue: messageQueue,
      store: store,
      fleetNudgeStore: fleetNudgeStore,
      sessionHooks: n.sessionHooks,
      writesExitHandoff: !0,
      getFpsMetrics: n.getFpsMetrics,
      stats: n.stats,
      keybindings: !1,
      children: e(l, {
        ...i
      })
    }), session, storageV5, credentials);
  } catch (error) {
    throw await Qzt().catch(() => !1), error;
  }
}
var q = 2000;
async function bgt(o) {
  try {
    if (hXn(o), kgt() || uWt()) await U();
  } catch {
    t("[3P telemetry] managed-settings refusal send failed", {
      level: "error"
    });
  }
}
async function Xxe(o) {
  if (o.policyUnreadable) await bgt("policy_invalid");
}
function Sgt(o) {
  if (hXn(o), Axe() === null && (kgt() || uWt())) gt(U);
}
async function U() {
  try {
    if (Axe() === null) {
      if (!ps() && !Te()) return;
      xX(), await Promise.race([mXn(), Q(q)]);
    }
    let o = x9e();
    if (o) await Promise.race([o.forceFlush(), Q(q)]);
  } catch {
    t("[3P telemetry] managed-settings refusal export failed", {
      level: "error"
    });
  }
}
function wgt(o) {
  return !1;
}
function cWt({
  model: model,
  modelCli: modelCli,
  agent: agent,
  agentSelectedByCli: agentSelectedByCli,
  agents: agents,
  effectiveModel: effectiveModel,
  initialMainLoopModel: initialMainLoopModel,
  restrictedModel: restrictedModel
}) {
  let u = modelCli === "default" || effectiveModel === void 0 && initialMainLoopModel === null;
  if (W() && (restrictedModel !== void 0 && !wgt(restrictedModel) || u && (_q().attribution === "enforced" || G()))) return "allowlist";
  if (u && _q().attribution === "env" && z("ANTHROPIC_DEFAULT_MODEL", model)) return "settings_env_default";
  let m = B(model) ? "remap" : void 0;
  if (modelCli) return m;
  if (effectiveModel !== void 0 && agent?.model && agent.model !== "inherit") {
    let c = Nx("agent"),
      p = !agentSelectedByCli && (c === null || w(c));
    return x(agent) || p ? "agent" : m;
  }
  if (effectiveModel !== void 0) return m;
  let y = !agentSelectedByCli && w(Nx("agent")) && fs().some(item => !w(item) && he(item)?.agent !== void 0),
    S = agent !== void 0 && x(agent) && agents.some(item => item.agentType === agent.agentType && !x(item) && Boolean(item.model) && item.model !== "inherit");
  if (y || S) return "agent";
  if (_("ANTHROPIC_MODEL")) return "settings_env";
  if (!u && process.env.ANTHROPIC_MODEL) return m;
  return w(Nx("model")) ? "settings" : m;
}
function p4r(o) {
  return o || !1;
}
function dWt({
  model: model_2,
  internal: internal,
  explicitMode: explicitMode,
  droppedMode = !1,
  pinnedDefault = !1,
  settingsMode: settingsMode,
  settingsModeForwardable: settingsModeForwardable,
  autoSeedable: autoSeedable,
  publicModel: publicModel,
  repositoryModel: repositoryModel,
  trustedPlanDisplaced: trustedPlanDisplaced
}) {
  let S = !droppedMode && (explicitMode === void 0 || pinnedDefault && explicitMode === "default");
  return {
    permissionMode: S ? settingsModeForwardable ? S ? settingsMode : void 0 : void 0 : explicitMode,
    action: "none"
  };
}
var Y = Y5e.filter(item => /^ANTHROPIC_DEFAULT_[A-Z]+_MODEL$/.test(item));
function B(o) {
  return v().some(item => {
    let i = he(item),
      r = k(item);
    return [...Object.values(i?.modelOverrides ?? {}), ...Y.filter(item => _(item)).flatMap(item => L(r, item))].some(item => H(item, o));
  });
}
function z(o, n) {
  return _(o) && v().some(item => L(k(item), o).some(item => H(item, n)));
}
function H(o, n) {
  return A(o) === A(n) || A(Tt(o)) === A(Tt(n));
}
function A(o) {
  return Jt(o.trim().toLowerCase()).trim();
}
function G() {
  return fs().some(item => item !== "policySettings" && he(item)?.enforceAvailableModels === !0);
}
function W() {
  return he("policySettings")?.availableModels === void 0 && v().some(item => {
    let n = he(item);
    return n?.availableModels !== void 0 || n?.enforceAvailableModels !== void 0;
  });
}
function _(o) {
  return v().some(item => D(item, o)) && !D("flagSettings", o) && !D("policySettings", o);
}
function D(o, n) {
  return L(k(o), n).length > 0;
}
function k(o) {
  return Hz(he(o)?.env, o);
}
function L(o, n) {
  return Object.entries(o).filter(([i]) => i.toUpperCase() === n).map(([, i]) => i);
}
function x(o) {
  return w(o.source) || o.source === "plugin" || o.fromAdditionalDirectory === !0;
}
function v() {
  return fs().filter(w);
}
function w(o) {
  return o === "localSettings" || o === "projectSettings" && !mC();
}
export { s1o, aXn, _gt, i1o, bgt, Xxe, Sgt, wgt, cWt, p4r, dWt };