// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import "B:/~BUN/root/chunk-rwkgcmm8.js";
import "B:/~BUN/root/chunk-jthpk6wv.js";
import "B:/~BUN/root/chunk-3aez4b53.js";
import "B:/~BUN/root/chunk-89mss1tj.js";
import "B:/~BUN/root/chunk-4bx17ygx.js";
import "B:/~BUN/root/chunk-fbyz9h0p.js";
import "B:/~BUN/root/chunk-psh1mp8h.js";
import { a } from "B:/~BUN/root/chunk-yt0knyw7.js";
import "B:/~BUN/root/chunk-9ka04m0y.js";
import "B:/~BUN/root/chunk-rpez7z7a.js";
import "B:/~BUN/root/chunk-hg8ngszx.js";
import "B:/~BUN/root/chunk-jpdys232.js";
import "B:/~BUN/root/chunk-6za2ez23.js";
import "B:/~BUN/root/chunk-xf0m410v.js";
import "B:/~BUN/root/chunk-nggrknsv.js";
import "B:/~BUN/root/chunk-c09hf5e4.js";
import "B:/~BUN/root/chunk-je1b1drr.js";
import "B:/~BUN/root/chunk-d8fk23v1.js";
import "B:/~BUN/root/chunk-28dw3zbk.js";
import "B:/~BUN/root/chunk-1kfn24jp.js";
import "B:/~BUN/root/chunk-kzgf20y6.js";
import "B:/~BUN/root/chunk-07c8fw5z.js";
import "B:/~BUN/root/chunk-j8w5f307.js";
import "B:/~BUN/root/chunk-j704adqd.js";
import { _r } from "B:/~BUN/root/chunk-ta5er8n7.js";
var c = 25000;
function t() {
  process.exit(0);
}
function u(o, p) {
  let n = a.CLAUDE_GATEWAY_DRAIN_TIMEOUT_MS || c,
    i = !1,
    s = r => {
      if (p(), i) _r("warn", `${r} received while shutting down: not waiting any longer, closing open requests now and exiting`), o.stop(), t();
      i = !0, _r("info", `${r} received: shutting down. Refusing new connections; open requests get up to ${n / 1000}s to finish (set by CLAUDE_GATEWAY_DRAIN_TIMEOUT_MS)`);
      let d = n + 3000;
      setTimeout(e => {
        _r("warn", `shutdown still not finished ${e / 1000}s after the signal: exiting now. Requests still open are cut and their spend may not be recorded`), t();
      }, d, d).unref(), o.drain(n).then(e => {
        _r(e === 0 ? "info" : "warn", e === 0 ? "shutdown complete: every open request finished, none was cut" : `drain window over after ${n / 1000}s: cut ${e} request(s) still open. Raise CLAUDE_GATEWAY_DRAIN_TIMEOUT_MS and the orchestrator's grace period together to give streams longer`), t();
      });
    };
  process.prependListener("SIGTERM", () => s("SIGTERM")), process.prependListener("SIGINT", () => s("SIGINT"));
}
export { u as drainOnSignal };