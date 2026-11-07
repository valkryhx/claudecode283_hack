// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  sf
} from "B:/~BUN/root/chunk-game8aqv.js";
import {
  Sl
} from "B:/~BUN/root/chunk-h4acfc9y.js";
import {
  t
} from "B:/~BUN/root/chunk-2pp12te6.js";
import {
  i
} from "B:/~BUN/root/chunk-j6pt0v41.js";
import {
  x
} from "B:/~BUN/root/chunk-mwfggkjt.js";
import {
  ut
} from "B:/~BUN/root/chunk-3mm90xb6.js";
import {
  IFt
} from "B:/~BUN/root/chunk-dwbkkfd6.js";
import {
  fileURLToPath as h
} from "url";
import {
  pathToFileURL as g
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
    args: ["--session", "--print-reply", "--dest=org.freedesktop.FileManager1", "--type=method_call", "/org/freedesktop/FileManager1", "org.freedesktop.FileManager1.ShowItems", `array:string:${g(r).href.replaceAll(",","%2C")}`, "string:"]
  }
}
var p = {
    useCwd: !0,
    useToolMemoryCgroup: !1
  },
  yCs = new Set(["https:", "http:", "vscode:", "vscode-insiders:", "cursor:", "windsurf:", "zed:", "jetbrains:", "idea:", "slack:", "linear:", "notion:", "figma:"]);

function d(e) {
  let r;
  try {
    r = new URL(e)
  } catch (o) {
    throw Error(`Invalid URL format: ${e}`)
  }
  if (r.protocol !== "http:" && r.protocol !== "https:") throw Error(`Invalid URL protocol: must use http:// or https://, got ${r.protocol}`)
}

function uKi(e) {
  try {
    return d(e), !0
  } catch {
    return !1
  }
}
async function o$n(e) {
  try {
    return await ut("explorer", [e]), !0
  } catch (r) {
    return !1
  }
}
async function y(e) {
  try {
    let r = x();
    if (r === "macos") {
      let {
        command: c,
        args: l
      } = s("macos", e), {
        code: u
      } = await ut(c, l);
      return u === 0
    }
    if (r === "windows") {
      let {
        command: c,
        args: l
      } = s("windows", e), {
        exitCode: u
      } = await ut(c, l);
      return u !== void 0
    }
    let {
      command: o,
      args: n
    } = s("linux", e), {
      code: a
    } = await ut(o, n);
    return a === 0
  } catch (r) {
    return !1
  }
}
async function s$n(e) {
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
      let n = h(e);
      if (Sl(n) || IFt(n)) return !1;
      return await y(n)
    } catch {
      return !1
    }
  }
  if (!yCs.has(o)) return t(`[hyperlink] refusing to dispatch clicked link with non-allowlisted scheme ${o}`, {
    level: "warn"
  }), !1;
  return (await w(e)).ok
}

function tV() {
  if (!process.stdout.isTTY) return !0;
  if (i.BROWSER && i.BROWSER !== "true") return !1;
  if (i.SSH_CONNECTION) return !0;
  return m()
}

function m() {
  return x() === "linux" && !i.DISPLAY && !i.WAYLAND_DISPLAY
}
async function tgt(e) {
  try {
    d(e)
  } catch (r) {
    return {
      ok: !1,
      reason: "invalid_url",
      detail: r instanceof Error ? r.message : String(r)
    }
  }
  return w(e)
}
async function Zi(e) {
  return (await tgt(e)).ok
}
async function w(e) {
  try {
    let r = sf()?.browser,
      o = r !== void 0 ? r ?? void 0 : i.BROWSER,
      n = "win32";
    if (!o && m()) return {
      ok: !1,
      reason: "no_display"
    };
    if (o) return f(await ut(o, [e]));
    return f(await ut("rundll32", ["url,OpenURL", e], {}))
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
  yCs,
  uKi,
  o$n,
  s$n,
  tV,
  tgt,
  Zi
};
