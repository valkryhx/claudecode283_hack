// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.303
import {
  $c
} from "B:/~BUN/root/chunk-rpez7z7a.js";
import {
  Ja
} from "B:/~BUN/root/chunk-4bx17ygx.js";
import {
  t
} from "B:/~BUN/root/chunk-6za2ez23.js";
import {
  a
} from "B:/~BUN/root/chunk-yt0knyw7.js";
import {
  I
} from "B:/~BUN/root/chunk-je1b1drr.js";
import {
  lt
} from "B:/~BUN/root/chunk-6ft8yhc8.js";
import {
  Tmt
} from "B:/~BUN/root/chunk-7abd7f1e.js";
import {
  fileURLToPath as g
} from "url";
import {
  pathToFileURL as w
} from "url";

function s(e, r) {
  if (e === "macos") return {
    command: "open",
    args: ["-R", "--", r]
  };
  if (e === "windows") return {
    command: "explorer",
    args: [`/select,${r}`]
  };
  return {
    command: "dbus-send",
    args: ["--session", "--print-reply", "--dest=org.freedesktop.FileManager1", "--type=method_call", "/org/freedesktop/FileManager1", "org.freedesktop.FileManager1.ShowItems", `array:string:${w(r).href.replaceAll(",","%2C")}`, "string:"]
  }
}
var p = {
    useCwd: !0,
    useToolMemoryCgroup: !1
  },
  _xo = new Set(["https:", "http:", "vscode:", "vscode-insiders:", "cursor:", "windsurf:", "zed:", "jetbrains:", "idea:", "slack:", "linear:", "notion:", "figma:"]);

function h(e) {
  let r;
  try {
    r = new URL(e)
  } catch (o) {
    throw Error(`Invalid URL format: ${e}`)
  }
  if (r.protocol !== "http:" && r.protocol !== "https:") throw Error(`Invalid URL protocol: must use http:// or https://, got ${r.protocol}`)
}
async function lin(e) {
  try {
    return await lt("explorer", [e]), !0
  } catch (r) {
    return !1
  }
}
async function y(e) {
  try {
    let r = I();
    if (r === "macos") {
      let {
        command: c,
        args: l
      } = s("macos", e), {
        code: u
      } = await lt(c, l);
      return u === 0
    }
    if (r === "windows") {
      let {
        command: c,
        args: l
      } = s("windows", e), {
        exitCode: u
      } = await lt(c, l);
      return u !== void 0
    }
    let {
      command: o,
      args: n
    } = s("linux", e), {
      code: i
    } = await lt(o, n);
    return i === 0
  } catch (r) {
    return !1
  }
}
async function din(e) {
  let r;
  try {
    r = new URL(e)
  } catch {
    return !1
  }
  let o = r.protocol;
  if (o === "file:") {
    if (r.host !== "") return !1;
    try {
      let n = g(e);
      if (Ja(n) || Tmt(n)) return !1;
      return await y(n)
    } catch {
      return !1
    }
  }
  if (!_xo.has(o)) return t(`[hyperlink] refusing to dispatch clicked link with non-allowlisted scheme ${o}`, {
    level: "warn"
  }), !1;
  return (await m(e)).ok
}

function $G() {
  if (!process.stdout.isTTY) return !0;
  if (a.BROWSER && a.BROWSER !== "true") return !1;
  if (a.SSH_CONNECTION) return !0;
  return d()
}

function d() {
  return I() === "linux" && !a.DISPLAY && !a.WAYLAND_DISPLAY
}
async function cin(e) {
  try {
    h(e)
  } catch (r) {
    return {
      ok: !1,
      reason: "invalid_url",
      detail: r instanceof Error ? r.message : String(r)
    }
  }
  return m(e)
}
async function Hs(e) {
  return (await cin(e)).ok
}
async function m(e) {
  try {
    let r = $c()?.browser,
      o = r !== void 0 ? r ?? void 0 : a.BROWSER,
      n = "win32";
    if (!o && d()) return {
      ok: !1,
      reason: "no_display"
    };
    if (o) return f(await lt(o, [e]));
    return f(await lt("rundll32", ["url,OpenURL", e], {}))
  } catch (r) {
    return {
      ok: !1,
      reason: "unknown",
      detail: r instanceof Error ? r.message : String(r)
    }
  }
}

function f(e) {
  if (e.code === 0) return {
    ok: !0
  };
  let r = e.error ?? "",
    o = e.stderr || r || `exit ${e.code}`;
  if (e.code === 127 || r.includes("ENOENT")) return {
    ok: !1,
    reason: "opener_missing",
    detail: o
  };
  if (r.includes("ETIMEDOUT") || r.includes("timed out")) return {
    ok: !1,
    reason: "timeout",
    detail: o
  };
  if (r.includes("EACCES") || r.includes("EPERM")) return {
    ok: !1,
    reason: "spawn_error",
    detail: o
  };
  if (e.code > 0) return {
    ok: !1,
    reason: "nonzero_exit",
    detail: o
  };
  return {
    ok: !1,
    reason: "unknown",
    detail: o
  }
}
export {
  _xo,
  lin,
  din,
  $G,
  cin,
  Hs
};
