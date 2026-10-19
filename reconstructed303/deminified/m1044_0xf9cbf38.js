// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { K } from "B:/~BUN/root/chunk-rpez7z7a.js";
import { ln } from "B:/~BUN/root/chunk-jpdys232.js";
import { $vs } from "B:/~BUN/root/chunk-m42n0wc9.js";
import { Utn } from "B:/~BUN/root/chunk-dn8rakwm.js";
import { t } from "B:/~BUN/root/chunk-6za2ez23.js";
import { Sr } from "B:/~BUN/root/chunk-nggrknsv.js";
import { a } from "B:/~BUN/root/chunk-yt0knyw7.js";
import { lt } from "B:/~BUN/root/chunk-6ft8yhc8.js";
import { Rt } from "B:/~BUN/root/chunk-vpgpdrbv.js";
import { av } from "B:/~BUN/root/chunk-hb6x4e3n.js";
import { uX } from "B:/~BUN/root/chunk-8vgph9ej.js";
import { Hs } from "B:/~BUN/root/chunk-ac9kwvf4.js";
import { _h } from "B:/~BUN/root/chunk-kad4nq7y.js";
import { ve } from "B:/~BUN/root/chunk-ef0msk7r.js";
var p = ve(_h(), 1);
import { readdir as g } from "fs/promises";
import { join as A } from "path";
var har = "1.1.9669";
function w() {
  let e = [process.argv[1] || "", process.execPath || ""].map(item => item.replaceAll("\\", "/")),
    n = ["/build-ant/", "/build-ant-native/", "/build-external/", "/build-external-native/"];
  return e.some(item => n.some(r => item.includes(r)));
}
function d(e, n, o = {}) {
  let r = new URL(`${e}://${n}`);
  for (let [i, s] of Object.entries(o)) r.searchParams.set(i, s);
  return r.toString();
}
function P(e, n) {
  switch (e.kind) {
    case "resume":
      return d(n, "resume", {
        session: e.sessionId
      });
    case "new-session":
      return `${d(n, "code/new")}?folder=${encodeURIComponent(e.folder)}`;
  }
}
function v(e) {
  let n = p.coerce(e);
  return n !== null && av(n.version, har);
}
async function k(e) {
  {
    let {
      code: code
    } = await lt("reg", ["query", `HKEY_CLASSES_ROOT\\${e}`, "/ve"]);
    return code === 0;
  }
  return !1;
}
async function f() {
  if (w()) {
    if (await k("claude-dev")) return "claude-dev";
  }
  return (await y()) ? "claude" : null;
}
async function Ets() {
  return (await f()) !== null;
}
async function y() {
  return k("claude");
}
async function x() {
  {
    let LOCALAPPDATA = a.LOCALAPPDATA;
    if (!LOCALAPPDATA) return null;
    let o = A(LOCALAPPDATA, "AnthropicClaude");
    try {
      return (await g(o)).filter(item => item.startsWith("app-")).map(item => item.slice(4)).filter(item => p.coerce(item) !== null).sort((itemA, itemB) => {
        let c = p.coerce(itemA),
          l = p.coerce(itemB);
        return c.compare(l);
      }).at(-1) ?? null;
    } catch {
      return null;
    }
  }
  return null;
}
async function aXr() {
  let scheme = await f();
  if (scheme === null) return {
    status: "not-installed"
  };
  if (scheme === "claude-dev") return {
    status: "ready",
    version: "unknown",
    scheme: scheme
  };
  let version, macApp;
  try {
    version = await x();
  } catch {
    return {
      status: "ready",
      version: "unknown",
      scheme: scheme
    };
  }
  if (!version) return {
    status: "ready",
    version: "unknown",
    scheme: scheme,
    macApp: macApp
  };
  if (!v(version)) return {
    status: "version-too-old",
    version: version
  };
  return {
    status: "ready",
    version: version,
    scheme: scheme,
    macApp: macApp
  };
}
var C = 200;
function L(e, n) {
  let {
    code: code_2,
    exitCode: exitCode,
    stderr: stderr,
    error: error,
    timedOut: timedOut,
    maxBufferExceeded: maxBufferExceeded
  } = n;
  if (code_2 === 0) return {
    opened: !0
  };
  let l = stderr || error;
  if (t(`Deep link opener ${e} failed: code ${code_2}, exitCode ${exitCode ?? "undefined"}${l ? `: ${l}` : ""}`), timedOut) return {
    opened: !1,
    detail: `\`${e}\` timed out`
  };
  if (maxBufferExceeded) return {
    opened: !1,
    detail: `\`${e}\` printed too much output`
  };
  let m = exitCode === void 0 ? `\`${e}\` failed` : `\`${e}\` exited ${exitCode}`,
    D = Rt(Sr(stderr.trim()) || (exitCode === void 0 ? error : "") || "", C).replace(/\.+$/, "");
  return {
    opened: !1,
    detail: D.length === 0 ? m : `${m}: ${D}`
  };
}
async function h(e, n) {
  return t(`Opening deep link: ${e}`), L("rundll32", await lt("rundll32", ["url.dll,FileProtocolHandler", e], {
    cwd: uX()
  }));
  return {
    opened: !1,
    detail: "no deep link opener for win32"
  };
}
function aTt(e) {
  let CLAUDE_AI_ORIGIN = ln().CLAUDE_AI_ORIGIN;
  if (!Utn(e)) return t("[desktop-deep-link] invalid claude.ai path; origin only", {
    level: "warn"
  }), CLAUDE_AI_ORIGIN;
  return `${CLAUDE_AI_ORIGIN}${e}`;
}
async function Tts({
  webPath: webPath,
  desktopPath: desktopPath
}) {
  if (!Utn(webPath) || !Utn(desktopPath)) return "none";
  if (ln().CLAUDE_AI_ORIGIN === $vs) {
    let o = await f();
    if (o !== null && (await h(d(o, `claude.ai${desktopPath}`))).opened) return "desktop";
  }
  return (await Hs(aTt(webPath))) ? "browser" : "none";
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
  let deepLinkUrl = P(e, n.scheme),
    r = await h(deepLinkUrl, n.macApp);
  if (!r.opened) return {
    success: !1,
    reason: "open_failed",
    error: `Couldn't open Claude Desktop (${r.detail}). Open Claude Desktop and try again.`,
    deepLinkUrl: deepLinkUrl
  };
  return {
    success: !0,
    deepLinkUrl: deepLinkUrl
  };
}
async function Cts() {
  return lXr({
    kind: "resume",
    sessionId: K()
  });
}
export { har, Ets, aXr, aTt, Tts, lXr, Cts };