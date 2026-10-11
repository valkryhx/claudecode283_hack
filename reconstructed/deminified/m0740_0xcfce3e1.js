// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { mt } from "B:/~BUN/root/chunk-vyq5y0zs.js";
import { Y } from "B:/~BUN/root/chunk-4rk7cwxz.js";
import { $o } from "B:/~BUN/root/chunk-54p0h65d.js";
import { kBo, gt, AC, b, ce, qo, t } from "B:/~BUN/root/chunk-qe2zga5e.js";
import { jhn, d9e, Gzr, cBe, Vzr } from "B:/~BUN/root/chunk-zs3ycjed.js";
import { zke } from "B:/~BUN/root/chunk-2n2hx639.js";
import { zbo } from "B:/~BUN/root/chunk-88mdabet.js";
import { Fm } from "B:/~BUN/root/chunk-dfh5rt4g.js";
import { dirname as p, join as g } from "path";
var a = $o(() => Gzr(new Date()));
function l() {
  return g(d9e.errors(), a() + ".jsonl");
}
function f(e) {
  return g(d9e.mcpLogs(e), a() + ".jsonl");
}
function d(e) {
  let r = kBo(e);
  return {
    write(o) {
      r.write(b(o) + `
`);
    },
    flush: r.flush,
    dispose: r.dispose
  };
}
function u() {}
class c {
  writers = new Map();
  pendingWrites = Fm();
  writerFor(e) {
    let r = this.writers.get(e);
    if (!r) {
      let o = p(e),
        i = !1;
      r = d({
        writeFn: s => {
          this.pendingWrites.run(e, async () => {
            try {
              await m(o, e, s);
            } catch (error) {
              if (!i) i = !0, t(`Dropping log batch for ${e}: ${error instanceof Error ? error.message : String(error)}`);
            }
          });
        },
        flushIntervalMs: 1000,
        maxBufferSize: 50
      }), this.writers.set(e, r), gt(async () => {
        r?.dispose(), await this.pendingWrites.settle();
      }), AC(this.flushBeforeExit);
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
async function m(e, r, o) {
  let i = ce();
  try {
    await i.appendFile(r, o);
  } catch {
    await i.mkdir(e).catch(u), await i.appendFile(r, o);
  }
}
function w(e, r, o) {
  return;
}
function E(e) {
  if (typeof e === "string") return e;
  if (e && typeof e === "object") {
    let r = e;
    if (typeof r.message === "string") return r.message;
    if (typeof r.error === "object" && r.error && "message" in r.error && typeof r.error.message === "string") return r.error.message;
  }
  return;
}
function v(e, r) {
  zbo(r), zke(r);
  let o = r.stack || r.message,
    i = "";
  if (mt.isAxiosError(r) && r.config?.url) {
    let s = [`url=${r.config.url}`];
    if (r.response?.status !== void 0) s.push(`status=${r.response.status}`);
    let n = E(r.response?.data);
    if (n) s.push(`body=${n}`);
    i = `[${s.join(",")}] `;
  }
  t(`${r.name}: ${i}${o}`, {
    level: "error"
  }), w(e, l(), {
    error: `${i}${o}`
  });
}
function h(e, r, o) {
  t(`MCP server "${r}" ${o}`, {
    level: "error"
  });
  let i = f(r),
    s = o instanceof Error ? o.stack || o.message : String(o),
    n = {
      error: qo(s),
      timestamp: new Date().toISOString(),
      sessionId: Y(),
      cwd: jhn()
    };
  e.writerFor(i).write(n);
}
function S(e, r, o) {
  t(`MCP server "${r}": ${o}`);
  let i = f(r),
    s = {
      debug: qo(o),
      timestamp: new Date().toISOString(),
      sessionId: Y(),
      cwd: jhn()
    };
  e.writerFor(i).write(s);
}
function por() {
  Vzr(y(new c()));
  let droppedBeforeSink = cBe.droppedBeforeSink;
  t(droppedBeforeSink === 0 ? "Error log sink initialized" : `Error log sink initialized; ${droppedBeforeSink} events logged before it attached were dropped`);
}
function y(e) {
  return {
    logError: r => v(e, r),
    logMCPError: (r, o) => h(e, r, o),
    logMCPDebug: (r, o) => S(e, r, o)
  };
}
export { por };