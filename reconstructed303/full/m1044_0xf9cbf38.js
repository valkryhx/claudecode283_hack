// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.303
import {
  K
} from "B:/~BUN/root/chunk-rpez7z7a.js";
import {
  ln
} from "B:/~BUN/root/chunk-jpdys232.js";
import {
  $vs
} from "B:/~BUN/root/chunk-m42n0wc9.js";
import {
  Utn
} from "B:/~BUN/root/chunk-dn8rakwm.js";
import {
  t
} from "B:/~BUN/root/chunk-6za2ez23.js";
import {
  Sr
} from "B:/~BUN/root/chunk-nggrknsv.js";
import {
  a
} from "B:/~BUN/root/chunk-yt0knyw7.js";
import {
  lt
} from "B:/~BUN/root/chunk-6ft8yhc8.js";
import {
  Rt
} from "B:/~BUN/root/chunk-vpgpdrbv.js";
import {
  av
} from "B:/~BUN/root/chunk-hb6x4e3n.js";
import {
  uX
} from "B:/~BUN/root/chunk-8vgph9ej.js";
import {
  Hs
} from "B:/~BUN/root/chunk-ac9kwvf4.js";
import {
  _h
} from "B:/~BUN/root/chunk-kad4nq7y.js";
import {
  ve
} from "B:/~BUN/root/chunk-ef0msk7r.js";
var p = ve(_h(), 1);
import {
  readdir as g
} from "fs/promises";
import {
  join as A
} from "path";
var har = "1.1.9669";

function w() {
  let e = [process.argv[1] || "", process.execPath || ""].map((o) => o.replaceAll("\\", "/")),
    n = ["/build-ant/", "/build-ant-native/", "/build-external/", "/build-external-native/"];
  return e.some((o) => n.some((r) => o.includes(r)))
}

function d(e, n, o = {}) {
  let r = new URL(`${e}://${n}`);
  for (let [i, s] of Object.entries(o)) r.searchParams.set(i, s);
  return r.toString()
}

function P(e, n) {
  switch (e.kind) {
    case "resume":
      return d(n, "resume", {
        session: e.sessionId
      });
    case "new-session":
      return `${d(n,"code/new")}?folder=${encodeURIComponent(e.folder)}`
  }
}

function v(e) {
  let n = p.coerce(e);
  return n !== null && av(n.version, har)
}
async function k(e) {
  {
    let {
      code: o
    } = await lt("reg", ["query", `HKEY_CLASSES_ROOT\\${e}`, "/ve"]);
    return o === 0
  }
  return !1
}
async function f() {
  if (w()) {
    if (await k("claude-dev")) return "claude-dev"
  }
  return await y() ? "claude" : null
}
async function Ets() {
  return await f() !== null
}
async function y() {
  return k("claude")
}
async function x() {
  {
    let n = a.LOCALAPPDATA;
    if (!n) return null;
    let o = A(n, "AnthropicClaude");
    try {
      return (await g(o)).filter((s) => s.startsWith("app-")).map((s) => s.slice(4)).filter((s) => p.coerce(s) !== null).sort((s, u) => {
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
async function aXr() {
  let e = await f();
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
    n = await x()
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
  if (!v(n)) return {
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
var C = 200;

function L(e, n) {
  let {
    code: o,
    exitCode: r,
    stderr: i,
    error: s,
    timedOut: u,
    maxBufferExceeded: c
  } = n;
  if (o === 0) return {
    opened: !0
  };
  let l = i || s;
  if (t(`Deep link opener ${e} failed: code ${o}, exitCode ${r??"undefined"}${l?`: ${l}`:""}`), u) return {
    opened: !1,
    detail: `\`${e}\` timed out`
  };
  if (c) return {
    opened: !1,
    detail: `\`${e}\` printed too much output`
  };
  let m = r === void 0 ? `\`${e}\` failed` : `\`${e}\` exited ${r}`,
    D = Rt(Sr(i.trim()) || (r === void 0 ? s : "") || "", C).replace(/\.+$/, "");
  return {
    opened: !1,
    detail: D.length === 0 ? m : `${m}: ${D}`
  }
}
async function h(e, n) {
  return t(`Opening deep link: ${e}`), L("rundll32", await lt("rundll32", ["url.dll,FileProtocolHandler", e], {
    cwd: uX()
  }));
  return {
    opened: !1,
    detail: "no deep link opener for win32"
  }
}

function aTt(e) {
  let n = ln().CLAUDE_AI_ORIGIN;
  if (!Utn(e)) return t("[desktop-deep-link] invalid claude.ai path; origin only", {
    level: "warn"
  }), n;
  return `${n}${e}`
}
async function Tts({
  webPath: e,
  desktopPath: n
}) {
  if (!Utn(e) || !Utn(n)) return "none";
  if (ln().CLAUDE_AI_ORIGIN === $vs) {
    let o = await f();
    if (o !== null && (await h(d(o, `claude.ai${n}`))).opened) return "desktop"
  }
  return await Hs(aTt(e)) ? "browser" : "none"
}
async function lXr(e) {
  let n = await aXr();
  if (n.status === "not-installed") return {
    success: !1,
    reason: "not_installed",
    error: "Claude Desktop is not installed. Install it from https://claude.ai/download"
  };
  if (n.status === "version-too-old") return {
    success: !1,
    reason: "outdated",
    error: `Claude Desktop ${n.version} is too old. Update to ${har} or later.`
  };
  let o = P(e, n.scheme),
    r = await h(o, n.macApp);
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
async function Cts() {
  return lXr({
    kind: "resume",
    sessionId: K()
  })
}
export {
  har,
  Ets,
  aXr,
  aTt,
  Tts,
  lXr,
  Cts
};
