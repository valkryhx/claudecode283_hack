// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.303
import {
  b,
  c
} from "B:/~BUN/root/chunk-jthpk6wv.js";
import {
  Wt
} from "B:/~BUN/root/chunk-3aez4b53.js";
import {
  g,
  m
} from "B:/~BUN/root/chunk-kzgf20y6.js";
import {
  t
} from "B:/~BUN/root/chunk-6za2ez23.js";
import {
  Wd,
  a
} from "B:/~BUN/root/chunk-yt0knyw7.js";
import {
  I
} from "B:/~BUN/root/chunk-je1b1drr.js";
import {
  lt,
  ct
} from "B:/~BUN/root/chunk-6ft8yhc8.js";
import {
  ki
} from "B:/~BUN/root/chunk-p4t63p2q.js";
import {
  uX,
  mIs,
  gIs
} from "B:/~BUN/root/chunk-8vgph9ej.js";
import {
  $a
} from "B:/~BUN/root/chunk-m0xdacj9.js";
import {
  readdir as x,
  stat as w
} from "fs/promises";
import {
  homedir as v,
  platform as _,
  userInfo as P
} from "os";
import {
  join as u
} from "path";
var pM = `mcp__${$a}__`,
  Uq = "ClaudeInChromeDomain",
  l = {
    chrome: {
      name: "Google Chrome",
      macos: {
        appName: "Google Chrome",
        nativeMessagingPath: ["Library", "Application Support", "Google", "Chrome", "NativeMessagingHosts"]
      },
      linux: {
        binaries: ["google-chrome", "google-chrome-stable"],
        nativeMessagingPath: [".config", "google-chrome", "NativeMessagingHosts"]
      },
      windows: {
        dataPath: ["Google", "Chrome", "User Data"],
        registryKey: "HKCU\\Software\\Google\\Chrome\\NativeMessagingHosts",
        appPathsExe: "chrome.exe"
      }
    },
    brave: {
      name: "Brave",
      macos: {
        appName: "Brave Browser",
        nativeMessagingPath: ["Library", "Application Support", "BraveSoftware", "Brave-Browser", "NativeMessagingHosts"]
      },
      linux: {
        binaries: ["brave-browser", "brave"],
        nativeMessagingPath: [".config", "BraveSoftware", "Brave-Browser", "NativeMessagingHosts"]
      },
      windows: {
        dataPath: ["BraveSoftware", "Brave-Browser", "User Data"],
        registryKey: "HKCU\\Software\\BraveSoftware\\Brave-Browser\\NativeMessagingHosts",
        appPathsExe: "brave.exe"
      }
    },
    arc: {
      name: "Arc",
      macos: {
        appName: "Arc",
        nativeMessagingPath: ["Library", "Application Support", "Arc", "User Data", "NativeMessagingHosts"]
      },
      linux: {
        binaries: [],
        nativeMessagingPath: []
      },
      windows: {
        dataPath: ["Arc", "User Data"],
        registryKey: "HKCU\\Software\\ArcBrowser\\Arc\\NativeMessagingHosts"
      }
    },
    chromium: {
      name: "Chromium",
      macos: {
        appName: "Chromium",
        nativeMessagingPath: ["Library", "Application Support", "Chromium", "NativeMessagingHosts"]
      },
      linux: {
        binaries: ["chromium", "chromium-browser"],
        nativeMessagingPath: [".config", "chromium", "NativeMessagingHosts"]
      },
      windows: {
        dataPath: ["Chromium", "User Data"],
        registryKey: "HKCU\\Software\\Chromium\\NativeMessagingHosts"
      }
    },
    edge: {
      name: "Microsoft Edge",
      macos: {
        appName: "Microsoft Edge",
        nativeMessagingPath: ["Library", "Application Support", "Microsoft Edge", "NativeMessagingHosts"]
      },
      linux: {
        binaries: ["microsoft-edge", "microsoft-edge-stable"],
        nativeMessagingPath: [".config", "microsoft-edge", "NativeMessagingHosts"]
      },
      windows: {
        dataPath: ["Microsoft", "Edge", "User Data"],
        registryKey: "HKCU\\Software\\Microsoft\\Edge\\NativeMessagingHosts",
        appPathsExe: "msedge.exe"
      }
    },
    vivaldi: {
      name: "Vivaldi",
      macos: {
        appName: "Vivaldi",
        nativeMessagingPath: ["Library", "Application Support", "Vivaldi", "NativeMessagingHosts"]
      },
      linux: {
        binaries: ["vivaldi", "vivaldi-stable"],
        nativeMessagingPath: [".config", "vivaldi", "NativeMessagingHosts"]
      },
      windows: {
        dataPath: ["Vivaldi", "User Data"],
        registryKey: "HKCU\\Software\\Vivaldi\\NativeMessagingHosts",
        appPathsExe: "vivaldi.exe"
      }
    },
    opera: {
      name: "Opera",
      macos: {
        appName: "Opera",
        nativeMessagingPath: ["Library", "Application Support", "com.operasoftware.Opera", "NativeMessagingHosts"]
      },
      linux: {
        binaries: ["opera"],
        nativeMessagingPath: [".config", "opera", "NativeMessagingHosts"]
      },
      windows: {
        dataPath: ["Opera Software", "Opera Stable"],
        registryKey: "HKCU\\Software\\Opera Software\\Opera Stable\\NativeMessagingHosts",
        useRoaming: !0,
        appPathsExe: "opera.exe"
      }
    }
  },
  h = ["chrome", "brave", "arc", "edge", "chromium", "vivaldi", "opera"];

function Mho() {
  let e = I(),
    s = v(),
    r = [];
  for (let i of h) {
    let o = l[i];
    switch (e) {
      case "macos":
        if (o.macos.nativeMessagingPath.length > 0) r.push({
          browser: i,
          path: u(s, ...o.macos.nativeMessagingPath)
        });
        break;
      case "linux":
      case "wsl":
        if (o.linux.nativeMessagingPath.length > 0) r.push({
          browser: i,
          path: u(s, ...o.linux.nativeMessagingPath)
        });
        break;
      case "windows":
        break
    }
  }
  return r
}

function Dho() {
  let e = [];
  for (let s of h) {
    let r = l[s];
    if (r.windows.registryKey) e.push({
      browser: s,
      key: r.windows.registryKey
    })
  }
  return e
}
async function _kr() {
  let e = I();
  for (let s of h) {
    let r = l[s];
    switch (e) {
      case "macos": {
        let i = `/Applications/${r.macos.appName}.app`;
        try {
          if ((await w(i)).isDirectory()) return t(`[Claude in Chrome] Detected browser: ${r.name}`), s
        } catch (o) {
          if (!Wt(o)) throw o
        }
        break
      }
      case "wsl":
      case "linux": {
        for (let i of r.linux.binaries)
          if (await Wd(i).catch(() => null)) return t(`[Claude in Chrome] Detected browser: ${r.name}`), s;
        break
      }
      case "windows": {
        let i = v();
        if (r.windows.dataPath.length > 0) {
          let o = r.windows.useRoaming ? u(i, "AppData", "Roaming") : u(i, "AppData", "Local"),
            p = u(o, ...r.windows.dataPath);
          try {
            if ((await w(p)).isDirectory()) return t(`[Claude in Chrome] Detected browser: ${r.name}`), s
          } catch (n) {
            if (!Wt(n)) throw n
          }
        }
        break
      }
    }
  }
  return null
}
var y = 200;

function Lho(e) {
  let s = ki().trackedTabIds;
  if (s.size >= y && !s.has(e)) s.clear();
  s.add(e)
}

function Nho(e) {
  return ki().trackedTabIds.has(e)
}

function d(e) {
  return {
    exec_exit_code: e.code,
    exec_failure_kind: e.exitCode !== void 0 ? b("nonzero_exit") : e.code === 127 ? b("not_found") : b("spawn_failed_or_killed")
  }
}
async function gUe(e) {
  if (!/^https?:\/\//i.test(e)) return m("chrome_open_url", "invalid_url"), !1;
  let s = I(),
    r = await _kr();
  if (!r) return t("[Claude in Chrome] No compatible browser found"), m("chrome_open_url", "no_browser"), !1;
  let i = l[r];
  switch (s) {
    case "macos": {
      let o = await lt("open", ["-a", i.macos.appName, e]);
      if (o.code === 0) return g("chrome_open_url"), !0;
      return m("chrome_open_url", "exec_failed", d(o)), !1
    }
    case "windows": {
      let o = i.windows.appPathsExe,
        p = !1;
      if (o) {
        let f = await mIs(o);
        if (f) {
          if (await gIs(f, [e])) return g("chrome_open_url", {
            open_method: b("app_paths"),
            browser: c(r)
          }), !0;
          p = !0
        }
      }
      let n = await ct("rundll32", ["url,OpenURL", e], {
        cwd: uX()
      });
      if (n.code === 0) return g("chrome_open_url", {
        open_method: p ? b("rundll32_after_spawn_fail") : o ? b("rundll32") : b("rundll32_no_app_paths_support"),
        browser: c(r)
      }), !0;
      return m("chrome_open_url", "exec_failed", {
        ...d(n),
        ...p && {
          app_paths_spawn_failed: !0
        },
        browser: c(r)
      }), !1
    }
    case "wsl":
    case "linux": {
      let o;
      for (let p of i.linux.binaries) {
        let n = await lt(p, [e], {
          useCwd: !0,
          useToolMemoryCgroup: !1
        });
        if (n.code === 0) return g("chrome_open_url"), !0;
        if (o?.exitCode === void 0 || n.exitCode !== void 0) o = n
      }
      return m("chrome_open_url", "exec_failed", o ? d(o) : void 0), !1
    }
    default:
      return m("chrome_open_url", "exec_failed"), !1
  }
}

function DZt() {
  return `/tmp/claude-mcp-browser-bridge-${M()}`
}

function LZt() {
  if (_() === "win32") return `\\\\.\\pipe\\${C()}`;
  return u(DZt(), `${process.pid}.sock`)
}
async function Fho() {
  if (_() === "win32") return [`\\\\.\\pipe\\${C()}`];
  let e = [],
    s = DZt();
  try {
    let r = await x(s);
    for (let i of r)
      if (i.endsWith(".sock")) e.push(u(s, i))
  } catch {}
  return e
}

function C() {
  return `claude-mcp-browser-bridge-${M()}`
}

function M() {
  try {
    return P().username || "default"
  } catch {
    return a.USER || a.USERNAME || "default"
  }
}
export {
  pM,
  Uq,
  Mho,
  Dho,
  _kr,
  Lho,
  Nho,
  gUe,
  DZt,
  LZt,
  Fho
};
