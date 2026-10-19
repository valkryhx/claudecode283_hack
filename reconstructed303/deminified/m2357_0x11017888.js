// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { a } from "B:/~BUN/root/chunk-yt0knyw7.js";
import { J } from "B:/~BUN/root/chunk-6za2ez23.js";
import { tR } from "B:/~BUN/root/chunk-bsjrnca2.js";
import { f } from "B:/~BUN/root/chunk-frrkt2bs.js";
import { o, v, u } from "B:/~BUN/root/chunk-g3snhg6n.js";
function DWr(n) {
  switch (n.kind) {
    case "stdout-reader":
      return {
        authToken: void 0,
        tunnel: void 0
      };
    case "bearer-minter":
      return {
        authToken: n.authToken,
        tunnel: void 0
      };
    case "tool-container":
    case "runner":
      return {
        authToken: void 0,
        tunnel: n.tunnel
      };
  }
}
var h = f(() => u({
  runner: u({
    pid: v().int().positive(),
    proc_start: o().min(1)
  }).optional()
}));
async function OZs({
  transport: transport,
  port: port,
  line: line
}) {
  let {
      parseSessionTunnelEnvelope: parseSessionTunnelEnvelope,
      sessionTunnelRefusal: sessionTunnelRefusal
    } = await import("B:/~BUN/root/chunk-svezjvmc.js"),
    tunnel = parseSessionTunnelEnvelope(line),
    d = sessionTunnelRefusal(transport, port, tunnel);
  if (d !== void 0 || tunnel === void 0) return {
    refusal: `--session-tunnel ${d ?? "needs an envelope on standard input"}`
  };
  let t = m(line);
  if (t === "unreadable") return {
    refusal: '--session-tunnel was handed a "runner" that is not a "pid" and its "proc_start"'
  };
  if (t === void 0) return {
    kind: "tool-container",
    tunnel: tunnel
  };
  let runner = {
    pid: t.pid,
    procStart: t.proc_start
  };
  if (a.CCR_AGENT_PROXY_ENABLED) return {
    refusal: "--session-tunnel does not serve a runner whose session routes git through the agent proxy: it cannot start that relay"
  };
  let {
    isRunnerSeen: isRunnerSeen
  } = await import("B:/~BUN/root/chunk-7rrt3r0v.js");
  if (!(await isRunnerSeen(runner))) return {
    refusal: `--session-tunnel cannot see the runner that started it (process ${runner.pid}), so it could not tell when that runner is gone`
  };
  return {
    kind: "runner",
    tunnel: tunnel,
    runner: runner
  };
}
function m(n) {
  if (n === void 0) return;
  try {
    let e = h().safeParse(J(n));
    return e.success ? e.data.runner : "unreadable";
  } catch {
    return "unreadable";
  }
}
function IZs(n) {
  let e = tR.CLAUDE_CODE_MCP_SERVE_AUTH_TOKEN;
  if (tR.unset("CLAUDE_CODE_MCP_SERVE_AUTH_TOKEN"), n !== void 0) return n;
  return e === void 0 ? {
    kind: "stdout-reader"
  } : {
    kind: "bearer-minter",
    authToken: e
  };
}
export { DWr, OZs, IZs };