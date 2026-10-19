// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { n8n, r8n, Hun, oqs as timeout, t$o, o8n, _Bt } from "B:/~BUN/root/chunk-k8003a0x.js";
import { execFile as c } from "child_process";
class a {
  promise = null;
  start() {
    if (this.promise) return;
    this.promise = Z5n();
  }
  reset() {
    this.promise = null;
  }
}
var d = new a();
function R(e) {
  if (!e) return {
    status: "ok",
    exitCode: 0,
    errno: null,
    signal: null
  };
  let t = e,
    signal = typeof t.signal === "string" && t.signal ? t.signal : null;
  if (typeof t.code === "string") return {
    status: "spawn_error",
    exitCode: null,
    errno: t.code,
    signal: null
  };
  if (t.killed === !0) return {
    status: "timeout",
    exitCode: null,
    errno: null,
    signal: signal
  };
  if (signal) return {
    status: "killed",
    exitCode: null,
    errno: null,
    signal: signal
  };
  return {
    status: "exited",
    exitCode: typeof t.code === "number" ? t.code : null,
    errno: null,
    signal: null
  };
}
function m(e, t, maxBuffer) {
  let s = Date.now();
  return new Promise(o => {
    try {
      c(e, t, {
        encoding: "utf-8",
        timeout: timeout,
        windowsHide: !0,
        ...(maxBuffer !== void 0 && {
          maxBuffer: maxBuffer
        })
      }, (u, r) => {
        o({
          stdout: r ?? "",
          ...R(u),
          durationMs: Date.now() - s
        });
      });
    } catch (error) {
      let r = error.code;
      o({
        stdout: "",
        status: "spawn_error",
        exitCode: null,
        errno: typeof r === "string" ? r : null,
        signal: null,
        durationMs: Date.now() - s
      });
    }
  });
}
function l(e) {
  return {
    status: e.status,
    exitCode: e.exitCode,
    errno: e.errno,
    signal: e.signal,
    durationMs: e.durationMs
  };
}
function f(e) {
  return e.status === "spawn_error" && e.errno === "ERR_CHILD_PROCESS_STDIO_MAXBUFFER";
}
function Z5n() {
  return (async () => {
    {
      let t = `${process.env.SYSTEMROOT || "C:\\Windows"}\\System32\\reg.exe`;
      return i(t);
    }
    if (_Bt()) return i(o8n);
    return {
      plistStdouts: null,
      hklmStdout: null,
      hkcuStdout: null,
      outcomes: {
        hklm: null,
        hkcu: null
      }
    };
  })();
}
async function i(e) {
  let t = o => m(e, ["query", o, "/v", Hun], t$o),
    [n, s] = await Promise.all([t(n8n), t(r8n)]);
  return {
    plistStdouts: null,
    hklmStdout: n.status === "ok" ? n.stdout : null,
    ...(f(n) && {
      hklmUnreadReason: `the value exceeds ${t$o / 1048576} MiB`
    }),
    hkcuStdout: s.status === "ok" ? s.stdout : null,
    outcomes: {
      hklm: l(n),
      hkcu: l(s)
    }
  };
}
function YHo() {
  d.start();
}
function XHo() {
  return d.promise;
}
export { Z5n, YHo, XHo };