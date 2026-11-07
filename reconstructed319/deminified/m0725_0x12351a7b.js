// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { g, c } from "B:/~BUN/root/chunk-3z3yrbk4.js";
import { pe } from "B:/~BUN/root/chunk-thn0wk2x.js";
import { et } from "B:/~BUN/root/chunk-fkr27nhj.js";
import { _ } from "B:/~BUN/root/chunk-2pp12te6.js";
import { vn, hz, Xu, Co } from "B:/~BUN/root/chunk-wd9jb4af.js";
async function Fot(o = f) {
  let {
    env: env
  } = await import("B:/~BUN/root/chunk-c6w54kxt.js");
  return env.CLAUDE_CODE_CHILD_SESSION ? o : void 0;
}
var f = "This setting cannot be changed from an editor started inside a Claude Code session. Start the editor outside the session and try again.",
  p = "Claude Design cannot be signed in from inside a Claude Code session. Start the editor outside the session and try again.";
async function l(o) {
  let d = [],
    i = 0,
    n = Bun.stdin.stream().getReader();
  for (;;) {
    let {
      done: done,
      value: value
    } = await n.read();
    if (done) break;
    if (i += value.byteLength, i > o) return await n.cancel(), null;
    d.push(value);
  }
  return new TextDecoder().decode(Buffer.concat(d));
}
function JFo(o, d) {
  o.command("edit-permission-rules", {
    hidden: !0
  }).allowExcessArguments(!1).description("Apply one permission-rule edit read as JSON from stdin (used by the VS Code extension)").requiredOption("--json", "Read the edit as JSON from stdin").action(d(async i => {
    if (process.stdin.isTTY) return vn("claude edit-permission-rules reads one JSON edit from stdin; it is run by the VS Code extension, not by hand");
    let n = await Fot();
    if (n !== void 0) return vn(n);
    let {
        isPermissionRuleCompose: isPermissionRuleCompose,
        runPermissionRuleCompose: runPermissionRuleCompose,
        runPermissionRuleEdit: runPermissionRuleEdit
      } = await import("B:/~BUN/root/chunk-7fqgvc1n.js"),
      e = await l(2097152),
      u = e === null ? null : et(e, !1);
    if (u === null) return vn("claude edit-permission-rules: stdin is not a JSON edit");
    if (isPermissionRuleCompose(u)) {
      let m = await runPermissionRuleCompose(u);
      if (await Xu(_(m) + `
`), m.ok) g("cli_compose_permission_rule");else c("cli_compose_permission_rule", m.refusal);
      return Co(0);
    }
    let a = await runPermissionRuleEdit(u, i);
    if (!a.ok) {
      if (a.refusal !== void 0) await Xu(_({
        ok: !1,
        refusal: a.refusal
      }) + `
`);
      return vn(a.error);
    }
    return await Xu(_({
      ok: !0,
      warnings: a.warnings,
      stored: a.stored
    }) + `
`), hz();
  })), o.command("edit-memory-settings", {
    hidden: !0
  }).allowExcessArguments(!1).description("Apply one memory-settings edit read as JSON from stdin (used by the VS Code extension)").requiredOption("--json", "Read the edit as JSON from stdin").action(d(async i => {
    if (process.stdin.isTTY) return vn("claude edit-memory-settings reads one JSON edit from stdin; it is run by the VS Code extension, not by hand");
    let n = await Fot();
    if (n !== void 0) return vn(n);
    let {
        runMemorySettingsEdit: runMemorySettingsEdit
      } = await import("B:/~BUN/root/chunk-fdfc71re.js"),
      t = await l(4096),
      s = t === null ? null : et(t, !1);
    if (s === null) return vn("claude edit-memory-settings: stdin is not a JSON edit");
    let e = await runMemorySettingsEdit(s, i);
    if (!e.ok) return vn(e.error);
    return await Xu(_({
      ok: !0,
      written: e.written
    }) + `
`), Co(0);
  })), o.command("edit-skill-overrides", {
    hidden: !0
  }).allowExcessArguments(!1).description("Apply one skill state edit read as JSON from stdin (used by the VS Code extension)").requiredOption("--json", "Read the edit as JSON from stdin").action(d(async i => {
    if (process.stdin.isTTY) return vn("claude edit-skill-overrides reads one JSON edit from stdin; it is run by the VS Code extension, not by hand");
    let n = await Fot();
    if (n !== void 0) return vn(n);
    let {
        runSkillOverrideEdit: runSkillOverrideEdit
      } = await import("B:/~BUN/root/chunk-e420274s.js"),
      t = await l(4096),
      s = t === null ? null : et(t, !1);
    if (s === null) return vn("claude edit-skill-overrides: stdin is not a JSON edit");
    let e = await runSkillOverrideEdit(s, pe(), i);
    if (!e.ok) return vn(e.error);
    return await Xu(_({
      ok: !0,
      written: e.written,
      changed: e.changed
    }) + `
`), hz();
  })), o.command("edit-sandbox-settings", {
    hidden: !0
  }).allowExcessArguments(!1).description("Apply one sandbox settings edit read as JSON from stdin (used by the VS Code extension)").requiredOption("--json", "Read the edit as JSON from stdin").action(async () => {
    if (process.stdin.isTTY) return vn("claude edit-sandbox-settings reads one JSON edit from stdin; it is run by the VS Code extension, not by hand");
    let i = await Fot();
    if (i !== void 0) return vn(i);
    let {
        runSandboxSettingsEdit: runSandboxSettingsEdit
      } = await import("B:/~BUN/root/chunk-eysd6j7s.js"),
      r = await l(4096),
      t = r === null ? null : et(r, !1);
    if (t === null) return vn("claude edit-sandbox-settings: stdin is not a JSON edit");
    let s = await runSandboxSettingsEdit(t);
    if (!s.ok) return vn(s.error);
    return await Xu(_({
      ok: !0,
      written: s.written
    }) + `
`), Co(0);
  }), o.command("design-login", {
    hidden: !0
  }).allowExcessArguments(!1).description("Run the Claude Design sign-in, or report its state, as JSON lines (used by the VS Code extension)").requiredOption("--json", "Write JSON lines to stdout").option("--status", "Report whether design-system access is authorized, and exit").action(d(async (i, n) => {
    if (process.stdin.isTTY) return vn("claude design-login --json is run by the VS Code extension, not by hand; use /design-login in a session");
    let {
      isSpawnedByClaudeCodeSession: isSpawnedByClaudeCodeSession
    } = await import("B:/~BUN/root/chunk-y2a59htd.js");
    if (isSpawnedByClaudeCodeSession()) return vn(p);
    let {
      designLoginStatus: designLoginStatus,
      runDesignLoginSignIn: runDesignLoginSignIn
    } = await import("B:/~BUN/root/chunk-w42mp1pv.js");
    if (n.status) return await Xu(_(await designLoginStatus()) + `
`), Co(0);
    let abortController = new AbortController(),
      {
        markPrintModeSignalHandlersRegistered: markPrintModeSignalHandlersRegistered
      } = await import("B:/~BUN/root/chunk-yk2pgkrt.js");
    process.once("SIGTERM", () => abortController.abort()), process.once("SIGINT", () => abortController.abort()), markPrintModeSignalHandlersRegistered();
    let a = await runDesignLoginSignIn({
      stdin: process.stdin,
      write: m => Xu(m + `
`),
      signal: abortController.signal
    });
    return Co(a.ok ? 0 : 1);
  })), o.command("edit-chrome-settings", {
    hidden: !0
  }).allowExcessArguments(!1).description("Apply one Claude in Chrome settings edit read as JSON from stdin (used by the VS Code extension)").requiredOption("--json", "Read the edit as JSON from stdin").action(d(async i => {
    if (process.stdin.isTTY) return vn("claude edit-chrome-settings reads one JSON edit from stdin; it is run by the VS Code extension, not by hand");
    let n = await Fot();
    if (n !== void 0) return vn(n);
    let {
        runChromeSettingsEdit: runChromeSettingsEdit
      } = await import("B:/~BUN/root/chunk-mvjbj3a5.js"),
      t = await l(4096),
      s = t === null ? null : et(t, !1);
    if (s === null) return vn("claude edit-chrome-settings: stdin is not a JSON edit");
    let e = await runChromeSettingsEdit(s, i);
    if (!e.ok) return vn(e.error);
    return await Xu(_({
      ok: !0,
      written: e.written
    }) + `
`), hz();
  })), o.command("drop-worktree-registrations", {
    hidden: !0
  }).allowExcessArguments(!1).description("Drop deleted worktrees' git registrations named as JSON on stdin (used by the VS Code extension)").requiredOption("--json", "Read the request as JSON from stdin").action(async () => {
    if (process.stdin.isTTY) return vn("claude drop-worktree-registrations reads one JSON request from stdin; it is run by the VS Code extension, not by hand");
    let i = await Fot("claude drop-worktree-registrations cannot run from inside a Claude Code session; it is run by the VS Code extension");
    if (i !== void 0) return vn(i);
    let {
        registrationDropsLine: registrationDropsLine,
        runWorktreeRegistrationDrops: runWorktreeRegistrationDrops
      } = await import("B:/~BUN/root/chunk-y9343bzp.js"),
      t = await l(262144),
      s = t === null ? null : et(t, !1);
    if (s === null) return vn("claude drop-worktree-registrations: stdin is not a JSON request");
    let e = await runWorktreeRegistrationDrops(s);
    if (!e.ok) return vn(e.error);
    return await Xu(registrationDropsLine(e.outcomes) + `
`), hz();
  });
}
export { Fot, JFo };