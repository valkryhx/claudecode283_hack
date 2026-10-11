// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { jm, tt } from "B:/~BUN/root/chunk-py7yqpgt.js";
import { Y } from "B:/~BUN/root/chunk-4rk7cwxz.js";
import { t } from "B:/~BUN/root/chunk-qe2zga5e.js";
import { xr } from "B:/~BUN/root/chunk-y04k89s2.js";
import { sc, a } from "B:/~BUN/root/chunk-nkmmqnq7.js";
import { an } from "B:/~BUN/root/chunk-zksmb712.js";
import { w_o } from "B:/~BUN/root/chunk-1xb1enjd.js";
import { NOt } from "B:/~BUN/root/chunk-1mdeqc2r.js";
import { x_ } from "B:/~BUN/root/chunk-gf53qpk6.js";
import { Ko } from "B:/~BUN/root/chunk-v8s05yj9.js";
import { ih } from "B:/~BUN/root/chunk-bt3h0syz.js";
import { cn } from "B:/~BUN/root/chunk-w5bkq1td.js";
import { be } from "B:/~BUN/root/chunk-yv67t8hr.js";
async function epe({
  allowNetworkFallbackForOldGh: allowNetworkFallbackForOldGh
}) {
  if (!(await sc("gh"))) return {
    status: "not_installed"
  };
  try {
    let o = await jm("gh", ["auth", "token"], {
      stdout: "ignore",
      stderr: "pipe",
      timeout: 5000,
      reject: !1
    });
    if (o.exitCode === 0) return {
      status: "authenticated",
      supportsAuthTokenCommand: !0
    };
    if (o.timedOut) return {
      status: "unknown",
      error: "`gh auth token` timed out"
    };
    if (/not logged in|no oauth token/i.test(o.stderr)) return {
      status: "not_authenticated"
    };
    if (/unknown command/i.test(o.stderr) || Number.isInteger(o.exitCode) && o.stderr.trim() === "") {
      if (!allowNetworkFallbackForOldGh) return {
        status: "unknown",
        error: "this GitHub CLI version has no `gh auth token`"
      };
      let i = await jm("gh", ["auth", "status"], {
        stdout: "ignore",
        stderr: "pipe",
        timeout: 5000,
        reject: !1
      });
      if (i.exitCode === 0) return {
        status: "authenticated",
        supportsAuthTokenCommand: !1
      };
      if (i.timedOut) return {
        status: "unknown",
        error: "`gh auth status` timed out"
      };
      if (/logged in to/i.test(i.stderr)) return {
        status: "authenticated",
        supportsAuthTokenCommand: !1
      };
      if (/not logged in/i.test(i.stderr)) return {
        status: "not_authenticated"
      };
      return {
        status: "unknown",
        error: i.stderr.trim() || "`gh auth status` failed to run"
      };
    }
    return {
      status: "unknown",
      error: o.stderr.trim() || "`gh auth token` failed to run"
    };
  } catch {
    return {
      status: "not_installed"
    };
  }
}
var p = be(ih(), 1);
import { readdir as h } from "fs/promises";
import { join as g } from "path";
var dTn = "1.1.9669";
function d() {
  let n = [process.argv[1] || "", process.execPath || ""],
    e = ["/build-ant/", "/build-ant-native/", "/build-external/", "/build-external-native/"];
  return n.some(item => e.some(r => item.includes(r)));
}
function f(n, e = {}) {
  let o = d() ? "claude-dev" : "claude",
    r = new URL(`${o}://${n}`);
  for (let [i, s] of Object.entries(e)) r.searchParams.set(i, s);
  return r.toString();
}
function k(session) {
  return f("resume", {
    session: session
  });
}
function A(n) {
  let e = p.coerce(n);
  return e !== null && x_(e.version, dTn);
}
async function uTn() {
  if (d()) return !0;
  return w();
}
async function w() {
  {
    let {
      code: code
    } = await tt("reg", ["query", "HKEY_CLASSES_ROOT\\claude", "/ve"]);
    return code === 0;
  }
  return !1;
}
async function D() {
  {
    let LOCALAPPDATA = a.LOCALAPPDATA;
    if (!LOCALAPPDATA) return null;
    let o = g(LOCALAPPDATA, "AnthropicClaude");
    try {
      return (await h(o)).filter(item => item.startsWith("app-")).map(item => item.slice(4)).filter(item => p.coerce(item) !== null).sort((itemA, itemB) => {
        let l = p.coerce(itemA),
          c = p.coerce(itemB);
        return l.compare(c);
      }).at(-1) ?? null;
    } catch {
      return null;
    }
  }
  return null;
}
async function jor() {
  if (!(await uTn())) return {
    status: "not-installed"
  };
  let version, macApp;
  try {
    version = await D();
  } catch {
    return {
      status: "ready",
      version: "unknown"
    };
  }
  if (!version) return {
    status: "ready",
    version: "unknown",
    macApp: macApp
  };
  if (!A(version)) return {
    status: "version-too-old",
    version: version
  };
  return {
    status: "ready",
    version: version,
    macApp: macApp
  };
}
var P = 200;
function C(n, e) {
  let {
    code: code_2,
    exitCode: exitCode,
    stderr: stderr,
    error: error
  } = e;
  if (code_2 === 0) return {
    opened: !0
  };
  let u = stderr || error;
  t(`Deep link opener ${n} failed: code ${code_2}, exitCode ${exitCode ?? "undefined"}${u ? `: ${u}` : ""}`);
  let l = exitCode === void 0 ? `\`${n}\` failed` : `\`${n}\` exited ${exitCode}`,
    c = cn(xr(stderr.trim()) || (exitCode === void 0 ? error : "") || "", P).replace(/\.$/, "");
  return {
    opened: !1,
    detail: c.length === 0 ? l : `${l}: ${c}`
  };
}
async function m(n, e) {
  return t(`Opening deep link: ${n}`), C("cmd", await tt("cmd", ["/c", "start", "", n]));
  return {
    opened: !1,
    detail: "no deep link opener for win32"
  };
}
function SSe(n) {
  let CLAUDE_AI_ORIGIN = an().CLAUDE_AI_ORIGIN;
  if (!NOt(n)) return t("[desktop-deep-link] invalid claude.ai path; origin only", {
    level: "warn"
  }), CLAUDE_AI_ORIGIN;
  return `${CLAUDE_AI_ORIGIN}${n}`;
}
async function S7r({
  webPath: webPath,
  desktopPath: desktopPath
}) {
  if (!NOt(webPath) || !NOt(desktopPath)) return "none";
  if (an().CLAUDE_AI_ORIGIN === w_o && (await uTn()) && (await m(f(`claude.ai${desktopPath}`))).opened) return "desktop";
  return (await Ko(SSe(webPath))) ? "browser" : "none";
}
async function w7r() {
  let n = Y(),
    e = await jor();
  if (e.status === "not-installed") return {
    success: !1,
    error: "Claude Desktop is not installed. Install it from https://claude.ai/download"
  };
  if (e.status === "version-too-old") return {
    success: !1,
    error: `Claude Desktop ${e.version} is too old. Update to ${dTn} or later.`
  };
  let deepLinkUrl = k(n),
    r = await m(deepLinkUrl, e.macApp);
  if (!r.opened) return {
    success: !1,
    error: `Couldn't open Claude Desktop (${r.detail}). Open Claude Desktop and run /desktop again.`,
    deepLinkUrl: deepLinkUrl
  };
  return {
    success: !0,
    deepLinkUrl: deepLinkUrl
  };
}
export { dTn, uTn, jor, SSe, S7r, w7r, epe };