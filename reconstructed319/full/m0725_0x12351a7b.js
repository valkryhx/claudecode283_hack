// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  g,
  c
} from "B:/~BUN/root/chunk-3z3yrbk4.js";
import {
  pe
} from "B:/~BUN/root/chunk-thn0wk2x.js";
import {
  et
} from "B:/~BUN/root/chunk-fkr27nhj.js";
import {
  _
} from "B:/~BUN/root/chunk-2pp12te6.js";
import {
  vn,
  hz,
  Xu,
  Co
} from "B:/~BUN/root/chunk-wd9jb4af.js";
async function Fot(o = f) {
  let {
    env: d
  } = await import("B:/~BUN/root/chunk-c6w54kxt.js");
  return d.CLAUDE_CODE_CHILD_SESSION ? o : void 0
}
var f = "This setting cannot be changed from an editor started inside a Claude Code session. Start the editor outside the session and try again.",
  p = "Claude Design cannot be signed in from inside a Claude Code session. Start the editor outside the session and try again.";
async function l(o) {
  let d = [],
    i = 0,
    n = Bun.stdin.stream().getReader();
  for (;;) {
    let {
      done: r,
      value: t
    } = await n.read();
    if (r) break;
    if (i += t.byteLength, i > o) return await n.cancel(), null;
    d.push(t)
  }
  return new TextDecoder().decode(Buffer.concat(d))
}

function JFo(o, d) {
  o.command("edit-permission-rules", {
    hidden: !0
  }).allowExcessArguments(!1).description("Apply one permission-rule edit read as JSON from stdin (used by the VS Code extension)").requiredOption("--json", "Read the edit as JSON from stdin").action(d(async (i) => {
    if (process.stdin.isTTY) return vn("claude edit-permission-rules reads one JSON edit from stdin; it is run by the VS Code extension, not by hand");
    let n = await Fot();
    if (n !== void 0) return vn(n);
    let {
      isPermissionRuleCompose: r,
      runPermissionRuleCompose: t,
      runPermissionRuleEdit: s
    } = await import("B:/~BUN/root/chunk-7fqgvc1n.js"), e = await l(2097152), u = e === null ? null : et(e, !1);
    if (u === null) return vn("claude edit-permission-rules: stdin is not a JSON edit");
    if (r(u)) {
      let m = await t(u);
      if (await Xu(_(m) + `
`), m.ok) g("cli_compose_permission_rule");
      else c("cli_compose_permission_rule", m.refusal);
      return Co(0)
    }
    let a = await s(u, i);
    if (!a.ok) {
      if (a.refusal !== void 0) await Xu(_({
        ok: !1,
        refusal: a.refusal
      }) + `
`);
      return vn(a.error)
    }
    return await Xu(_({
      ok: !0,
      warnings: a.warnings,
      stored: a.stored
    }) + `
`), hz()
  })), o.command("edit-memory-settings", {
    hidden: !0
  }).allowExcessArguments(!1).description("Apply one memory-settings edit read as JSON from stdin (used by the VS Code extension)").requiredOption("--json", "Read the edit as JSON from stdin").action(d(async (i) => {
    if (process.stdin.isTTY) return vn("claude edit-memory-settings reads one JSON edit from stdin; it is run by the VS Code extension, not by hand");
    let n = await Fot();
    if (n !== void 0) return vn(n);
    let {
      runMemorySettingsEdit: r
    } = await import("B:/~BUN/root/chunk-fdfc71re.js"), t = await l(4096), s = t === null ? null : et(t, !1);
    if (s === null) return vn("claude edit-memory-settings: stdin is not a JSON edit");
    let e = await r(s, i);
    if (!e.ok) return vn(e.error);
    return await Xu(_({
      ok: !0,
      written: e.written
    }) + `
`), Co(0)
  })), o.command("edit-skill-overrides", {
    hidden: !0
  }).allowExcessArguments(!1).description("Apply one skill state edit read as JSON from stdin (used by the VS Code extension)").requiredOption("--json", "Read the edit as JSON from stdin").action(d(async (i) => {
    if (process.stdin.isTTY) return vn("claude edit-skill-overrides reads one JSON edit from stdin; it is run by the VS Code extension, not by hand");
    let n = await Fot();
    if (n !== void 0) return vn(n);
    let {
      runSkillOverrideEdit: r
    } = await import("B:/~BUN/root/chunk-e420274s.js"), t = await l(4096), s = t === null ? null : et(t, !1);
    if (s === null) return vn("claude edit-skill-overrides: stdin is not a JSON edit");
    let e = await r(s, pe(), i);
    if (!e.ok) return vn(e.error);
    return await Xu(_({
      ok: !0,
      written: e.written,
      changed: e.changed
    }) + `
`), hz()
  })), o.command("edit-sandbox-settings", {
    hidden: !0
  }).allowExcessArguments(!1).description("Apply one sandbox settings edit read as JSON from stdin (used by the VS Code extension)").requiredOption("--json", "Read the edit as JSON from stdin").action(async () => {
    if (process.stdin.isTTY) return vn("claude edit-sandbox-settings reads one JSON edit from stdin; it is run by the VS Code extension, not by hand");
    let i = await Fot();
    if (i !== void 0) return vn(i);
    let {
      runSandboxSettingsEdit: n
    } = await import("B:/~BUN/root/chunk-eysd6j7s.js"), r = await l(4096), t = r === null ? null : et(r, !1);
    if (t === null) return vn("claude edit-sandbox-settings: stdin is not a JSON edit");
    let s = await n(t);
    if (!s.ok) return vn(s.error);
    return await Xu(_({
      ok: !0,
      written: s.written
    }) + `
`), Co(0)
  }), o.command("design-login", {
    hidden: !0
  }).allowExcessArguments(!1).description("Run the Claude Design sign-in, or report its state, as JSON lines (used by the VS Code extension)").requiredOption("--json", "Write JSON lines to stdout").option("--status", "Report whether design-system access is authorized, and exit").action(d(async (i, n) => {
    if (process.stdin.isTTY) return vn("claude design-login --json is run by the VS Code extension, not by hand; use /design-login in a session");
    let {
      isSpawnedByClaudeCodeSession: r
    } = await import("B:/~BUN/root/chunk-y2a59htd.js");
    if (r()) return vn(p);
    let {
      designLoginStatus: t,
      runDesignLoginSignIn: s
    } = await import("B:/~BUN/root/chunk-w42mp1pv.js");
    if (n.status) return await Xu(_(await t()) + `
`), Co(0);
    let e = new AbortController,
      {
        markPrintModeSignalHandlersRegistered: u
      } = await import("B:/~BUN/root/chunk-yk2pgkrt.js");
    process.once("SIGTERM", () => e.abort()), process.once("SIGINT", () => e.abort()), u();
    let a = await s({
      stdin: process.stdin,
      write: (m) => Xu(m + `
`),
      signal: e.signal
    });
    return Co(a.ok ? 0 : 1)
  })), o.command("edit-chrome-settings", {
    hidden: !0
  }).allowExcessArguments(!1).description("Apply one Claude in Chrome settings edit read as JSON from stdin (used by the VS Code extension)").requiredOption("--json", "Read the edit as JSON from stdin").action(d(async (i) => {
    if (process.stdin.isTTY) return vn("claude edit-chrome-settings reads one JSON edit from stdin; it is run by the VS Code extension, not by hand");
    let n = await Fot();
    if (n !== void 0) return vn(n);
    let {
      runChromeSettingsEdit: r
    } = await import("B:/~BUN/root/chunk-mvjbj3a5.js"), t = await l(4096), s = t === null ? null : et(t, !1);
    if (s === null) return vn("claude edit-chrome-settings: stdin is not a JSON edit");
    let e = await r(s, i);
    if (!e.ok) return vn(e.error);
    return await Xu(_({
      ok: !0,
      written: e.written
    }) + `
`), hz()
  })), o.command("drop-worktree-registrations", {
    hidden: !0
  }).allowExcessArguments(!1).description("Drop deleted worktrees' git registrations named as JSON on stdin (used by the VS Code extension)").requiredOption("--json", "Read the request as JSON from stdin").action(async () => {
    if (process.stdin.isTTY) return vn("claude drop-worktree-registrations reads one JSON request from stdin; it is run by the VS Code extension, not by hand");
    let i = await Fot("claude drop-worktree-registrations cannot run from inside a Claude Code session; it is run by the VS Code extension");
    if (i !== void 0) return vn(i);
    let {
      registrationDropsLine: n,
      runWorktreeRegistrationDrops: r
    } = await import("B:/~BUN/root/chunk-y9343bzp.js"), t = await l(262144), s = t === null ? null : et(t, !1);
    if (s === null) return vn("claude drop-worktree-registrations: stdin is not a JSON request");
    let e = await r(s);
    if (!e.ok) return vn(e.error);
    return await Xu(n(e.outcomes) + `
`), hz()
  })
}
export {
  Fot,
  JFo
};
