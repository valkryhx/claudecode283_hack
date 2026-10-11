// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.283
import {
  amn,
  lmn,
  J$t,
  CHo,
  FBr,
  RHo,
  Hpt
} from "B:/~BUN/root/chunk-7zje4z8c.js";
import {
  execFile as c
} from "child_process";
class a {
  promise = null;
  start() {
    if (this.promise) return;
    this.promise = smn()
  }
  reset() {
    this.promise = null
  }
}
var d = new a;

function R(t) {
  if (!t) return {
    status: "ok",
    exitCode: 0,
    errno: null,
    signal: null
  };
  let e = t,
    n = typeof e.signal === "string" && e.signal ? e.signal : null;
  if (typeof e.code === "string") return {
    status: "spawn_error",
    exitCode: null,
    errno: e.code,
    signal: null
  };
  if (e.killed === !0) return {
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
    exitCode: typeof e.code === "number" ? e.code : null,
    errno: null,
    signal: null
  }
}

function m(t, e, n) {
  let s = Date.now();
  return new Promise((o) => {
    try {
      c(t, e, {
        encoding: "utf-8",
        timeout: CHo,
        windowsHide: !0,
        ...n !== void 0 && {
          maxBuffer: n
        }
      }, (r, u) => {
        o({
          stdout: u ?? "",
          ...R(r),
          durationMs: Date.now() - s
        })
      })
    } catch (r) {
      let u = r.code;
      o({
        stdout: "",
        status: "spawn_error",
        exitCode: null,
        errno: typeof u === "string" ? u : null,
        signal: null,
        durationMs: Date.now() - s
      })
    }
  })
}

function l(t) {
  return {
    status: t.status,
    exitCode: t.exitCode,
    errno: t.errno,
    signal: t.signal,
    durationMs: t.durationMs
  }
}

function f(t) {
  return t.status === "spawn_error" && t.errno === "ERR_CHILD_PROCESS_STDIO_MAXBUFFER"
}

function smn() {
  return (async () => {
    {
      let e = `${process.env.SYSTEMROOT||"C:\\Windows"}\\System32\\reg.exe`;
      return i(e)
    }
    if (Hpt()) return i(RHo);
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
async function i(t) {
  let e = (o) => m(t, ["query", o, "/v", J$t], FBr),
    [n, s] = await Promise.all([e(amn), e(lmn)]);
  return {
    plistStdouts: null,
    hklmStdout: n.status === "ok" ? n.stdout : null,
    ...f(n) && {
      hklmUnreadReason: `the value exceeds ${FBr/1048576} MiB`
    },
    hkcuStdout: s.status === "ok" ? s.stdout : null,
    outcomes: {
      hklm: l(n),
      hkcu: l(s)
    }
  }
}

function MBr() {
  d.start()
}

function DBr() {
  return d.promise
}
export {
  smn,
  MBr,
  DBr
};
