// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import "B:/~BUN/root/chunk-vz9zea4j.js";
import "B:/~BUN/root/chunk-wt4dg253.js";
import "B:/~BUN/root/chunk-drx9cnw1.js";
import "B:/~BUN/root/chunk-y2g9f85n.js";
import "B:/~BUN/root/chunk-r5zmhp23.js";
import "B:/~BUN/root/chunk-h4acfc9y.js";
import "B:/~BUN/root/chunk-ppmmt0c3.js";
import "B:/~BUN/root/chunk-eev762xg.js";
import "B:/~BUN/root/chunk-kjwczfsg.js";
import {
  i
} from "B:/~BUN/root/chunk-j6pt0v41.js";
import "B:/~BUN/root/chunk-q78ga0zw.js";
import "B:/~BUN/root/chunk-db8vh085.js";
import "B:/~BUN/root/chunk-game8aqv.js";
import "B:/~BUN/root/chunk-y1kkrqy9.js";
import "B:/~BUN/root/chunk-2pp12te6.js";
import "B:/~BUN/root/chunk-dayhhbfr.js";
import "B:/~BUN/root/chunk-15vbkr6z.js";
import "B:/~BUN/root/chunk-n8cnxns2.js";
import "B:/~BUN/root/chunk-09sn55yf.js";
import "B:/~BUN/root/chunk-jdtvghyw.js";
import "B:/~BUN/root/chunk-xrwdh0g4.js";
import "B:/~BUN/root/chunk-mwfggkjt.js";
import "B:/~BUN/root/chunk-4jt3t3ds.js";
import "B:/~BUN/root/chunk-b91sxvrb.js";
import "B:/~BUN/root/chunk-rr294jrm.js";
import "B:/~BUN/root/chunk-nzh2qzgc.js";
import "B:/~BUN/root/chunk-65j2302z.js";
import "B:/~BUN/root/chunk-1fg2bpc3.js";
import "B:/~BUN/root/chunk-mb9chr1y.js";
import "B:/~BUN/root/chunk-3z3yrbk4.js";
import "B:/~BUN/root/chunk-thn0wk2x.js";
import "B:/~BUN/root/chunk-nsneqfcc.js";
import "B:/~BUN/root/chunk-83p1z1q5.js";
import "B:/~BUN/root/chunk-d10hhz4p.js";
import "B:/~BUN/root/chunk-0w2htvr6.js";
import "B:/~BUN/root/chunk-t4qpmjt5.js";
import "B:/~BUN/root/chunk-5xx1vfdh.js";
import "B:/~BUN/root/chunk-pwj77283.js";
import "B:/~BUN/root/chunk-wthaftk0.js";
import "B:/~BUN/root/chunk-8998nbf3.js";
import "B:/~BUN/root/chunk-gq1er5y2.js";
import {
  Tr
} from "B:/~BUN/root/chunk-as8583m8.js";
import "B:/~BUN/root/chunk-79595s9y.js";
import "B:/~BUN/root/chunk-ww0cdpg4.js";
import "B:/~BUN/root/chunk-x3gsqe09.js";
import "B:/~BUN/root/chunk-4hj5k2m3.js";
import "B:/~BUN/root/chunk-12nc74pv.js";
import "B:/~BUN/root/chunk-9wbhv9z5.js";
import "B:/~BUN/root/chunk-jbjsy1k0.js";
var c = 25000;

function t() {
  process.exit(0)
}

function u(o, p) {
  let n = i.CLAUDE_GATEWAY_DRAIN_TIMEOUT_MS || c,
    s = !1,
    r = (a) => {
      if (p(), s) Tr("warn", `${a} received while shutting down: not waiting any longer, closing open requests now and exiting`), o.stop(), t();
      s = !0, Tr("info", `${a} received: shutting down. Refusing new connections; open requests get up to ${n/1000}s to finish (set by CLAUDE_GATEWAY_DRAIN_TIMEOUT_MS)`);
      let d = n + 3000;
      setTimeout((e) => {
        Tr("warn", `shutdown still not finished ${e/1000}s after the signal: exiting now. Requests still open are cut and their spend may not be recorded`), t()
      }, d, d).unref(), o.drain(n).then((e) => {
        Tr(e === 0 ? "info" : "warn", e === 0 ? "shutdown complete: every open request finished, none was cut" : `drain window over after ${n/1000}s: cut ${e} request(s) still open. Raise CLAUDE_GATEWAY_DRAIN_TIMEOUT_MS and the orchestrator's grace period together to give streams longer`), t()
      })
    };
  process.prependListener("SIGTERM", () => r("SIGTERM")), process.prependListener("SIGINT", () => r("SIGINT"))
}
export {
  u as drainOnSignal
};
