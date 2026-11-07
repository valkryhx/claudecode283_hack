// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  Po,
  q,
  Qp
} from "B:/~BUN/root/chunk-game8aqv.js";
import {
  W
} from "B:/~BUN/root/chunk-ppmmt0c3.js";
import {
  vt,
  _,
  ie
} from "B:/~BUN/root/chunk-2pp12te6.js";
import {
  i
} from "B:/~BUN/root/chunk-j6pt0v41.js";
import {
  dirname as m
} from "path";
import {
  AsyncLocalStorage as u
} from "async_hooks";

function D2n(e, t) {
  let n = !1;
  for (let o of e) {
    let s = o.deref();
    if (s === void 0) e.delete(o);
    else if (s === t) n = !0
  }
  if (n) return !1;
  return e.add(new WeakRef(t)), !0
}

function LSt(e) {
  let t = [];
  for (let n of e) {
    let o = n.deref();
    if (o === void 0) e.delete(n);
    else t.push(o)
  }
  return t
}
var p = new u,
  l = !1;

function dG() {
  return l
}

function zte() {
  return p.getStore() !== void 0
}
var f = new W(() => new Set);

function S() {
  return Po(f)
}

function Yta() {
  let e = [];
  for (let t of LSt(S())) {
    let n = t.session?.hookRegistry;
    e.push(n ? n.holder().registeredHooks : t.registeredHooks, n ? n.mainThreadAgentHooks() : t.mainThreadAgentHooks)
  }
  return e
}

function a() {}
class c {
  pendingWrite = Promise.resolve();
  cleanupRegistered = !1;
  notStarted = [];
  appendOldest = this.appendOldestNotStarted.bind(this);
  append(e, t) {
    let n = this.notStarted.at(-1);
    if (n?.logFile === e) {
      n.lines += t;
      return
    }
    if (this.notStarted.push({
        logFile: e,
        lines: t
      }), this.pendingWrite = this.pendingWrite.then(this.appendOldest).catch(a), !this.cleanupRegistered) this.cleanupRegistered = !0, vt(() => this.flush())
  }
  async appendOldestNotStarted() {
    let e = this.notStarted.shift();
    if (e === void 0) return;
    let t = ie();
    try {
      await t.appendFile(e.logFile, e.lines)
    } catch {
      await t.mkdir(m(e.logFile)).catch(a), await t.appendFile(e.logFile, e.lines)
    }
  }
  flush() {
    return this.pendingWrite
  }
}
var h = new W(() => new c);

function g() {
  return Po(h)
}

function V(e, t, n, o = "queued") {
  let s = y();
  if (!s) return;
  let r;
  try {
    r = d(e, t, k(n))
  } catch {
    r = d(e, t, {
      diagnostics_payload_failed: !0
    })
  }
  if (o === "now") try {
    ie().appendFileSync(s, r)
  } catch {} else g().append(s, r)
}

function k(e) {
  try {
    return (typeof e === "function" ? e() : e) ?? {}
  } catch {
    return {
      diagnostics_payload_failed: !0
    }
  }
}

function d(e, t, n) {
  let o = {
    timestamp: new Date().toISOString(),
    level: e,
    event: t,
    data: n,
    cc_version: typeof {
      ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
      PACKAGE_URL: "@anthropic-ai/claude-code",
      README_URL: "https://code.claude.com/docs/en/overview",
      VERSION: "2.1.319",
      FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
      BUILD_TIME: "2026-11-05T18:14:18Z",
      GIT_SHA: "fbdd7e02e8530e4c2ade8cc67d30104e53d2c8f2",
      HOOKS_WORKER_URL: "B:/~BUN/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js",
      DD_SOURCEMAP_GROUP: "win32"
    } < "u" ? {
      ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
      PACKAGE_URL: "@anthropic-ai/claude-code",
      README_URL: "https://code.claude.com/docs/en/overview",
      VERSION: "2.1.319",
      FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
      BUILD_TIME: "2026-11-05T18:14:18Z",
      GIT_SHA: "fbdd7e02e8530e4c2ade8cc67d30104e53d2c8f2",
      HOOKS_WORKER_URL: "B:/~BUN/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js",
      DD_SOURCEMAP_GROUP: "win32"
    }.VERSION : "unknown"
  };
  return _(o) + `
`
}

function Pqe() {
  return g().flush()
}

function y() {
  return x() ? void 0 : i.CLAUDE_CODE_DIAGNOSTICS_FILE
}

function x() {
  return zte() ? q() : Qp()
}
async function J1t(e, t, n) {
  let o = Date.now();
  V("info", `${e}_started`);
  try {
    let s = await t(),
      r = n ? n(s) : {};
    return V("info", `${e}_completed`, {
      duration_ms: Date.now() - o,
      ...r
    }), s
  } catch (s) {
    throw V("error", `${e}_failed`, {
      duration_ms: Date.now() - o
    }), s
  }
}
export {
  D2n,
  LSt,
  dG,
  zte,
  Yta,
  V,
  Pqe,
  J1t
};
