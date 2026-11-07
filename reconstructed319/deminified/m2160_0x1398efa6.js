// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { z } from "B:/~BUN/root/chunk-game8aqv.js";
import { t } from "B:/~BUN/root/chunk-2pp12te6.js";
import { Wn } from "B:/~BUN/root/chunk-n8cnxns2.js";
import { i } from "B:/~BUN/root/chunk-j6pt0v41.js";
import { ut } from "B:/~BUN/root/chunk-3mm90xb6.js";
import { Et } from "B:/~BUN/root/chunk-2f1svh63.js";
import { Ew } from "B:/~BUN/root/chunk-1ks9vs37.js";
import { b1 } from "B:/~BUN/root/chunk-z1wt3cb2.js";
import { nb } from "B:/~BUN/root/chunk-1s0yt4vj.js";
import { Oe } from "B:/~BUN/root/chunk-4qfwb3rf.js";
var p = Oe(nb(), 1);
import { readdir as h } from "fs/promises";
import { join as g } from "path";
var Aqr = "1.1.9669";
function w() {
  let e = [process.argv[1] || "", process.execPath || ""].map(item => item.replaceAll("\\", "/")),
    n = ["/build-ant/", "/build-ant-native/", "/build-external/", "/build-external-native/"];
  return e.some(item => n.some(r => item.includes(r)));
}
function m(e, n, o = {}) {
  let r = new URL(`${e}://${n}`);
  for (let [a, s] of Object.entries(o)) r.searchParams.set(a, s);
  return r.toString();
}
function v(e, n) {
  switch (e.kind) {
    case "resume":
      return m(n, "resume", {
        session: e.sessionId
      });
    case "new-session":
      return `${m(n, "code/new")}?folder=${encodeURIComponent(e.folder)}`;
  }
}
function A(e) {
  let n = p.coerce(e);
  return n !== null && Ew(n.version, Aqr);
}
async function D(e) {
  {
    let {
      code: code
    } = await ut("reg", ["query", `HKEY_CLASSES_ROOT\\${e}`, "/ve"]);
    return code === 0;
  }
  return !1;
}
async function k() {
  if (w()) {
    if (await D("claude-dev")) return "claude-dev";
  }
  return (await P()) ? "claude" : null;
}
async function ari() {
  return (await k()) !== null;
}
async function P() {
  return D("claude");
}
async function y() {
  {
    let LOCALAPPDATA = i.LOCALAPPDATA;
    if (!LOCALAPPDATA) return null;
    let o = g(LOCALAPPDATA, "AnthropicClaude");
    try {
      return (await h(o)).filter(item => item.startsWith("app-")).map(item => item.slice(4)).filter(item => p.coerce(item) !== null).sort((itemA, itemB) => {
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
async function QGo() {
  let scheme = await k();
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
    version = await y();
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
  if (!A(version)) return {
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
var x = 200;
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
  let d = exitCode === void 0 ? `\`${e}\` failed` : `\`${e}\` exited ${exitCode}`,
    f = Et(Wn(stderr.trim()) || (exitCode === void 0 ? error : "") || "", x).replace(/\.+$/, "");
  return {
    opened: !1,
    detail: f.length === 0 ? d : `${d}: ${f}`
  };
}
async function S(e, n) {
  return t(`Opening deep link: ${e}`), L("rundll32", await ut("rundll32", ["url.dll,FileProtocolHandler", e], {
    cwd: b1()
  }));
  return {
    opened: !1,
    detail: "no deep link opener for win32"
  };
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
  let deepLinkUrl = v(e, n.scheme),
    r = await S(deepLinkUrl, n.macApp);
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
async function lri() {
  return ZGo({
    kind: "resume",
    sessionId: z()
  });
}
export { Aqr, ari, QGo, ZGo, lri };