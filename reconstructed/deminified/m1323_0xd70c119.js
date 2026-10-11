// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import "B:/~BUN/root/chunk-ekrhn4q1.js";
import "B:/~BUN/root/chunk-kks4mj3w.js";
import "B:/~BUN/root/chunk-bgthmgyc.js";
import "B:/~BUN/root/chunk-17wqwt36.js";
import "B:/~BUN/root/chunk-54p0h65d.js";
import "B:/~BUN/root/chunk-4p6z9qq1.js";
import "B:/~BUN/root/chunk-zv3zxqya.js";
import "B:/~BUN/root/chunk-6j6ra85q.js";
import { a } from "B:/~BUN/root/chunk-nkmmqnq7.js";
import "B:/~BUN/root/chunk-bvn0mpsk.js";
import "B:/~BUN/root/chunk-4rk7cwxz.js";
import "B:/~BUN/root/chunk-dkxhwhft.js";
import "B:/~BUN/root/chunk-zksmb712.js";
import "B:/~BUN/root/chunk-qe2zga5e.js";
import "B:/~BUN/root/chunk-0fnha6bz.js";
import "B:/~BUN/root/chunk-y04k89s2.js";
import "B:/~BUN/root/chunk-zs3ycjed.js";
import "B:/~BUN/root/chunk-zk6g628v.js";
import "B:/~BUN/root/chunk-vyq5y0zs.js";
import "B:/~BUN/root/chunk-728mwbhs.js";
import "B:/~BUN/root/chunk-51n463p1.js";
import "B:/~BUN/root/chunk-2ppgegpr.js";
import "B:/~BUN/root/chunk-e7p62566.js";
import { yr } from "B:/~BUN/root/chunk-bz2v1g65.js";
var c = 25000;
function t() {
  process.exit(0);
}
function u(o, p) {
  let n = a.CLAUDE_GATEWAY_DRAIN_TIMEOUT_MS || c,
    i = !1,
    s = r => {
      if (p(), i) yr("warn", `${r} received while shutting down: not waiting any longer, closing open requests now and exiting`), o.stop(), t();
      i = !0, yr("info", `${r} received: shutting down. Refusing new connections; open requests get up to ${n / 1000}s to finish (set by CLAUDE_GATEWAY_DRAIN_TIMEOUT_MS)`);
      let d = n + 3000;
      setTimeout(e => {
        yr("warn", `shutdown still not finished ${e / 1000}s after the signal: exiting now. Requests still open are cut and their spend may not be recorded`), t();
      }, d, d).unref(), o.drain(n).then(e => {
        yr(e === 0 ? "info" : "warn", e === 0 ? "shutdown complete: every open request finished, none was cut" : `drain window over after ${n / 1000}s: cut ${e} request(s) still open. Raise CLAUDE_GATEWAY_DRAIN_TIMEOUT_MS and the orchestrator's grace period together to give streams longer`), t();
      });
    };
  process.prependListener("SIGTERM", () => s("SIGTERM")), process.prependListener("SIGINT", () => s("SIGINT"));
}
export { u as drainOnSignal };