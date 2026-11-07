// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  z
} from "B:/~BUN/root/chunk-game8aqv.js";
import {
  t
} from "B:/~BUN/root/chunk-2pp12te6.js";
import {
  Wn
} from "B:/~BUN/root/chunk-n8cnxns2.js";
import {
  i
} from "B:/~BUN/root/chunk-j6pt0v41.js";
import {
  ut
} from "B:/~BUN/root/chunk-3mm90xb6.js";
import {
  Et
} from "B:/~BUN/root/chunk-2f1svh63.js";
import {
  Ew
} from "B:/~BUN/root/chunk-1ks9vs37.js";
import {
  b1
} from "B:/~BUN/root/chunk-z1wt3cb2.js";
import {
  nb
} from "B:/~BUN/root/chunk-1s0yt4vj.js";
import {
  Oe
} from "B:/~BUN/root/chunk-4qfwb3rf.js";
var p = Oe(nb(), 1);
import {
  readdir as h
} from "fs/promises";
import {
  join as g
} from "path";
var Aqr = "1.1.9669";

function w() {
  let e = [process.argv[1] || "", process.execPath || ""].map((o) => o.replaceAll("\\", "/")),
    n = ["/build-ant/", "/build-ant-native/", "/build-external/", "/build-external-native/"];
  return e.some((o) => n.some((r) => o.includes(r)))
}

function m(e, n, o = {}) {
  let r = new URL(`${e}://${n}`);
  for (let [a, s] of Object.entries(o)) r.searchParams.set(a, s);
  return r.toString()
}

function v(e, n) {
  switch (e.kind) {
    case "resume":
      return m(n, "resume", {
        session: e.sessionId
      });
    case "new-session":
      return `${m(n,"code/new")}?folder=${encodeURIComponent(e.folder)}`
  }
}

function A(e) {
  let n = p.coerce(e);
  return n !== null && Ew(n.version, Aqr)
}
async function D(e) {
  {
    let {
      code: o
    } = await ut("reg", ["query", `HKEY_CLASSES_ROOT\\${e}`, "/ve"]);
    return o === 0
  }
  return !1
}
async function k() {
  if (w()) {
    if (await D("claude-dev")) return "claude-dev"
  }
  return await P() ? "claude" : null
}
async function ari() {
  return await k() !== null
}
async function P() {
  return D("claude")
}
async function y() {
  {
    let n = i.LOCALAPPDATA;
    if (!n) return null;
    let o = g(n, "AnthropicClaude");
    try {
      return (await h(o)).filter((s) => s.startsWith("app-")).map((s) => s.slice(4)).filter((s) => p.coerce(s) !== null).sort((s, u) => {
        let c = p.coerce(s),
          l = p.coerce(u);
        return c.compare(l)
      }).at(-1) ?? null
    } catch {
      return null
    }
  }
  return null
}
async function QGo() {
  let e = await k();
  if (e === null) return {
    status: "not-installed"
  };
  if (e === "claude-dev") return {
    status: "ready",
    version: "unknown",
    scheme: e
  };
  let n, o;
  try {
    n = await y()
  } catch {
    return {
      status: "ready",
      version: "unknown",
      scheme: e
    }
  }
  if (!n) return {
    status: "ready",
    version: "unknown",
    scheme: e,
    macApp: o
  };
  if (!A(n)) return {
    status: "version-too-old",
    version: n
  };
  return {
    status: "ready",
    version: n,
    scheme: e,
    macApp: o
  }
}
var x = 200;

function L(e, n) {
  let {
    code: o,
    exitCode: r,
    stderr: a,
    error: s,
    timedOut: u,
    maxBufferExceeded: c
  } = n;
  if (o === 0) return {
    opened: !0
  };
  let l = a || s;
  if (t(`Deep link opener ${e} failed: code ${o}, exitCode ${r??"undefined"}${l?`: ${l}`:""}`), u) return {
    opened: !1,
    detail: `\`${e}\` timed out`
  };
  if (c) return {
    opened: !1,
    detail: `\`${e}\` printed too much output`
  };
  let d = r === void 0 ? `\`${e}\` failed` : `\`${e}\` exited ${r}`,
    f = Et(Wn(a.trim()) || (r === void 0 ? s : "") || "", x).replace(/\.+$/, "");
  return {
    opened: !1,
    detail: f.length === 0 ? d : `${d}: ${f}`
  }
}
async function S(e, n) {
  return t(`Opening deep link: ${e}`), L("rundll32", await ut("rundll32", ["url.dll,FileProtocolHandler", e], {
    cwd: b1()
  }));
  return {
    opened: !1,
    detail: "no deep link opener for win32"
  }
}
async function ZGo(e) {
  let n = await QGo();
  if (n.status === "not-installed") return {
    success: !1,
    reason: "not_installed",
    error: "Claude Desktop is not installed. Install it from https://claude.ai/download"
  };
  if (n.status === "version-too-old") return {
    success: !1,
    reason: "outdated",
    error: `Claude Desktop ${n.version} is too old. Update to ${Aqr} or later.`
  };
  let o = v(e, n.scheme),
    r = await S(o, n.macApp);
  if (!r.opened) return {
    success: !1,
    reason: "open_failed",
    error: `Couldn't open Claude Desktop (${r.detail}). Open Claude Desktop and try again.`,
    deepLinkUrl: o
  };
  return {
    success: !0,
    deepLinkUrl: o
  }
}
async function lri() {
  return ZGo({
    kind: "resume",
    sessionId: z()
  })
}
export {
  Aqr,
  ari,
  QGo,
  ZGo,
  lri
};
