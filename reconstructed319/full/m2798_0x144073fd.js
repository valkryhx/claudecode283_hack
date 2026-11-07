// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  i
} from "B:/~BUN/root/chunk-j6pt0v41.js";
import {
  ee
} from "B:/~BUN/root/chunk-2pp12te6.js";
import {
  ev
} from "B:/~BUN/root/chunk-z31ebsm2.js";
import {
  p
} from "B:/~BUN/root/chunk-z6138ats.js";
import {
  o,
  E,
  u
} from "B:/~BUN/root/chunk-4bfd0jkf.js";

function XMo(n) {
  switch (n.kind) {
    case "stdout-reader":
      return {
        authToken: void 0, tunnel: void 0
      };
    case "bearer-minter":
      return {
        authToken: n.authToken, tunnel: void 0
      };
    case "tool-container":
    case "runner":
      return {
        authToken: void 0, tunnel: n.tunnel
      }
  }
}
var h = p(() => u({
  runner: u({
    pid: E().int().positive(),
    proc_start: o().min(1)
  }).optional()
}));
async function lma({
  transport: n,
  port: e,
  line: a
}) {
  let {
    parseSessionTunnelEnvelope: l,
    sessionTunnelRefusal: c
  } = await import("B:/~BUN/root/chunk-acencvf0.js"), r = l(a), d = c(n, e, r);
  if (d !== void 0 || r === void 0) return {
    refusal: `--session-tunnel ${d??"needs an envelope on standard input"}`
  };
  let t = m(a);
  if (t === "unreadable") return {
    refusal: '--session-tunnel was handed a "runner" that is not a "pid" and its "proc_start"'
  };
  if (t === void 0) return {
    kind: "tool-container",
    tunnel: r
  };
  let s = {
    pid: t.pid,
    procStart: t.proc_start
  };
  if (i.CCR_AGENT_PROXY_ENABLED) return {
    refusal: "--session-tunnel does not serve a runner whose session routes git through the agent proxy: it cannot start that relay"
  };
  let {
    isRunnerSeen: f
  } = await import("B:/~BUN/root/chunk-s38sg6v3.js");
  if (!await f(s)) return {
    refusal: `--session-tunnel cannot see the runner that started it (process ${s.pid}), so it could not tell when that runner is gone`
  };
  return {
    kind: "runner",
    tunnel: r,
    runner: s
  }
}

function m(n) {
  if (n === void 0) return;
  try {
    let e = h().safeParse(ee(n));
    return e.success ? e.data.runner : "unreadable"
  } catch {
    return "unreadable"
  }
}

function dma(n) {
  let e = ev.CLAUDE_CODE_MCP_SERVE_AUTH_TOKEN;
  if (ev.unset("CLAUDE_CODE_MCP_SERVE_AUTH_TOKEN"), n !== void 0) return n;
  return e === void 0 ? {
    kind: "stdout-reader"
  } : {
    kind: "bearer-minter",
    authToken: e
  }
}
export {
  XMo,
  lma,
  dma
};
