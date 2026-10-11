// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.283
import {
  md
} from "B:/~BUN/root/chunk-4rk7cwxz.js";
import {
  Nd
} from "B:/~BUN/root/chunk-54p0h65d.js";
import {
  t
} from "B:/~BUN/root/chunk-qe2zga5e.js";
import {
  a
} from "B:/~BUN/root/chunk-nkmmqnq7.js";
import {
  O
} from "B:/~BUN/root/chunk-zs3ycjed.js";
import {
  tt
} from "B:/~BUN/root/chunk-py7yqpgt.js";
import {
  f3e
} from "B:/~BUN/root/chunk-9921expb.js";
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
  Efr = new Set(["https:", "http:", "vscode:", "vscode-insiders:", "cursor:", "windsurf:", "zed:", "jetbrains:", "idea:", "slack:", "linear:", "notion:", "figma:"]);

function h(e) {
  let r;
  try {
    r = new URL(e)
  } catch (o) {
    throw Error(`Invalid URL format: ${e}`)
  }
  if (r.protocol !== "http:" && r.protocol !== "https:") throw Error(`Invalid URL protocol: must use http:// or https://, got ${r.protocol}`)
}
async function BEt(e) {
  try {
    return await tt("explorer", [e]), !0
  } catch (r) {
    return !1
  }
}
async function y(e) {
  try {
    let r = O();
    if (r === "macos") {
      let {
        command: c,
        args: l
      } = s("macos", e), {
        code: u
      } = await tt(c, l);
      return u === 0
    }
    if (r === "windows") {
      let {
        command: c,
        args: l
      } = s("windows", e), {
        exitCode: u
      } = await tt(c, l);
      return u !== void 0
    }
    let {
      command: o,
      args: n
    } = s("linux", e), {
      code: i
    } = await tt(o, n);
    return i === 0
  } catch (r) {
    return !1
  }
}
async function jEt(e) {
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
      if (Nd(n) || f3e(n)) return !1;
      return await y(n)
    } catch {
      return !1
    }
  }
  if (!Efr.has(o)) return t(`[hyperlink] refusing to dispatch clicked link with non-allowlisted scheme ${o}`, {
    level: "warn"
  }), !1;
  return (await m(e)).ok
}

function KH() {
  if (!process.stdout.isTTY) return !0;
  if (a.BROWSER && a.BROWSER !== "true") return !1;
  if (a.SSH_CONNECTION) return !0;
  return d()
}

function d() {
  return O() === "linux" && !a.DISPLAY && !a.WAYLAND_DISPLAY
}
async function Tfr(e) {
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
async function Ko(e) {
  return (await Tfr(e)).ok
}
async function m(e) {
  try {
    let r = md()?.browser,
      o = r !== void 0 ? r ?? void 0 : a.BROWSER,
      n = "win32";
    if (!o && d()) return {
      ok: !1,
      reason: "no_display"
    };
    if (o) return f(await tt(o, [e]));
    return f(await tt("rundll32", ["url,OpenURL", e], {}))
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
  Efr,
  BEt,
  jEt,
  KH,
  Tfr,
  Ko
};
