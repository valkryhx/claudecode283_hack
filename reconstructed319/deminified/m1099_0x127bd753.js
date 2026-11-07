// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { Wt } from "B:/~BUN/root/chunk-b91sxvrb.js";
import { z } from "B:/~BUN/root/chunk-game8aqv.js";
import { hun } from "B:/~BUN/root/chunk-y2g9f85n.js";
import { i } from "B:/~BUN/root/chunk-j6pt0v41.js";
import { $ra, vt, zA, Qjs, t, _, ie } from "B:/~BUN/root/chunk-2pp12te6.js";
import { _s } from "B:/~BUN/root/chunk-jdtvghyw.js";
import { AHr, Cjt, Bjs, Pnt, jjs } from "B:/~BUN/root/chunk-xrwdh0g4.js";
import { tn } from "B:/~BUN/root/chunk-1fg2bpc3.js";
import { YEe } from "B:/~BUN/root/chunk-gq4ywexf.js";
import { _Ki } from "B:/~BUN/root/chunk-64qg3pvz.js";
import { po } from "B:/~BUN/root/chunk-67erjrg5.js";
import { Qy } from "B:/~BUN/root/chunk-tx4kppkg.js";
import { dirname as l, join as f } from "path";
var a = po(() => Bjs(new Date()));
function d() {
  return f(Cjt.errors(), a() + ".jsonl");
}
function p(e) {
  return f(Cjt.mcpLogs(e), a() + ".jsonl");
}
function m(e) {
  let r = $ra(e);
  return {
    write(o) {
      r.write(_(o) + `
`);
    },
    flush: r.flush,
    dispose: r.dispose
  };
}
function w() {}
class c {
  writers = new Map();
  pendingWrites = Qy();
  writerFor(e) {
    let r = this.writers.get(e);
    if (!r) {
      let o = l(e),
        s = !1;
      r = m({
        writeFn: n => {
          this.pendingWrites.run(e, async () => {
            try {
              await E(o, e, n);
            } catch (error) {
              if (!s) s = !0, t(`Dropping log batch for ${e}: ${error instanceof Error ? error.message : String(error)}`);
            }
          });
        },
        flushIntervalMs: 1000,
        maxBufferSize: 50
      }), this.writers.set(e, r), vt(async () => {
        r?.dispose(), await this.pendingWrites.settle();
      }), zA(this.flushBeforeExit);
    }
    return r;
  }
  async flush() {
    for (let e of this.writers.values()) e.flush();
    await this.pendingWrites.settle();
  }
  flushBeforeExit = () => this.flush();
  async reset() {
    for (let e of this.writers.values()) e.dispose();
    await this.pendingWrites.settle(), this.writers.clear(), this.pendingWrites.clearForTest();
  }
}
async function E(e, r, o) {
  let s = ie();
  try {
    await s.appendFile(r, o);
  } catch {
    await s.mkdir(e).catch(w), await s.appendFile(r, o);
  }
}
function v(e, r, o) {
  return;
}
function h(e) {
  if (typeof e === "string") return e;
  if (e && typeof e === "object") {
    let r = e;
    if (typeof r.message === "string") return r.message;
    if (typeof r.error === "object" && r.error && "message" in r.error && typeof r.error.message === "string") return r.error.message;
  }
  return;
}
function S(e, r) {
  _Ki(r), YEe(r);
  let o = hun(r),
    s = "";
  if (Wt.isAxiosError(r) && r.config?.url) {
    let n = [`url=${r.config.url}`];
    if (r.response?.status !== void 0) n.push(`status=${r.response.status}`);
    let g = h(r.response?.data);
    if (g) n.push(`body=${g}`);
    s = `[${n.join(",")}] `;
  }
  t(`${r.name}: ${s}${o}`, {
    level: "error"
  }), v(e, d(), {
    error: `${s}${o}`
  });
}
function b(e, r, o) {
  t(`MCP server "${r}" ${o}`, {
    level: "error"
  });
  let s = p(r),
    n = o instanceof Error ? hun(o) : String(o),
    g = {
      error: _s(n),
      timestamp: new Date().toISOString(),
      sessionId: z(),
      cwd: AHr()
    };
  e.writerFor(s).write(g);
}
function u() {
  return i.CLAUDE_CODE_SKIP_MCP_DEBUG_LOG_FILES === !0 && tn();
}
function L(e, r, o) {
  if (t(`MCP server "${r}": ${o}`), u()) return;
  let s = p(r),
    n = {
      debug: _s(o),
      timestamp: new Date().toISOString(),
      sessionId: z(),
      cwd: AHr()
    };
  e.writerFor(s).write(n);
}
function w1o() {
  jjs(P(new c()));
  let droppedBeforeSink = Pnt.droppedBeforeSink;
  t(droppedBeforeSink === 0 ? "Error log sink initialized" : `Error log sink initialized; ${droppedBeforeSink} events logged before it attached were dropped`);
}
function P(e) {
  return {
    logError: r => S(e, r),
    logMCPError: (r, o) => b(e, r, o),
    logMCPDebug: (r, o) => L(e, r, o),
    keepsMCPDebug: () => !u() || Qjs("debug")
  };
}
export { w1o };