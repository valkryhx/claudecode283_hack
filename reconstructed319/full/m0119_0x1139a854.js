// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  F0r,
  H0r,
  dzn,
  Z7i,
  sFs,
  $0r,
  eQi,
  Han
} from "B:/~BUN/root/chunk-hwg4hdxm.js";
import {
  execFile as m
} from "child_process";
class d {
  promise = null;
  start() {
    if (this.promise) return;
    this.promise = N0r()
  }
  reset() {
    this.promise = null
  }
}
var c = new d;

function R(e) {
  if (!e) return {
    status: "ok",
    exitCode: 0,
    errno: null,
    signal: null
  };
  let t = e,
    n = typeof t.signal === "string" && t.signal ? t.signal : null;
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
    signal: n
  };
  if (n) return {
    status: "killed",
    exitCode: null,
    errno: null,
    signal: n
  };
  return {
    status: "exited",
    exitCode: typeof t.code === "number" ? t.code : null,
    errno: null,
    signal: null
  }
}

function f(e, t, n) {
  let s = Date.now();
  return new Promise((o) => {
    try {
      m(e, t, {
        encoding: "utf-8",
        timeout: Z7i,
        windowsHide: !0,
        ...n !== void 0 && {
          maxBuffer: n
        }
      }, (u, r, l) => {
        o({
          stdout: r ?? "",
          stderr: l ?? "",
          ...R(u),
          durationMs: Date.now() - s
        })
      })
    } catch (u) {
      let r = u.code;
      o({
        stdout: "",
        stderr: "",
        status: "spawn_error",
        exitCode: null,
        errno: typeof r === "string" ? r : null,
        signal: null,
        durationMs: Date.now() - s
      })
    }
  })
}

function i(e) {
  return {
    status: e.status,
    exitCode: e.exitCode,
    errno: e.errno,
    signal: e.signal,
    durationMs: e.durationMs,
    answered: e.status === "ok" || e.status === "exited" && e.exitCode === 1 && e.stderr.includes(eQi)
  }
}

function p(e) {
  return e.status === "spawn_error" && e.errno === "ERR_CHILD_PROCESS_STDIO_MAXBUFFER"
}

function N0r() {
  return (async () => {
    {
      let t = `${process.env.SYSTEMROOT||"C:\\Windows"}\\System32\\reg.exe`;
      return a(t)
    }
    if (Han()) return a($0r);
    return {
      plistStdouts: null,
      hklmStdout: null,
      hkcuStdout: null,
      outcomes: {
        hklm: null,
        hkcu: null
      }
    }
  })()
}
async function a(e) {
  let t = (o) => f(e, ["query", o, "/v", dzn], sFs),
    [n, s] = await Promise.all([t(F0r), t(H0r)]);
  return {
    plistStdouts: null,
    hklmStdout: n.status === "ok" ? n.stdout : null,
    ...p(n) && {
      hklmUnreadReason: `the value exceeds ${sFs/1048576} MiB`
    },
    hkcuStdout: s.status === "ok" ? s.stdout : null,
    outcomes: {
      hklm: i(n),
      hkcu: i(s)
    }
  }
}

function rFs() {
  c.start()
}

function oFs() {
  return c.promise
}
export {
  N0r,
  rFs,
  oFs
};
