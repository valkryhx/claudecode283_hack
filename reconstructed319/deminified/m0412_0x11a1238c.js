// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { b, f } from "B:/~BUN/root/chunk-drx9cnw1.js";
import { qt } from "B:/~BUN/root/chunk-y2g9f85n.js";
import { g, m } from "B:/~BUN/root/chunk-3z3yrbk4.js";
import { t } from "B:/~BUN/root/chunk-2pp12te6.js";
import { $c, i } from "B:/~BUN/root/chunk-j6pt0v41.js";
import { x } from "B:/~BUN/root/chunk-mwfggkjt.js";
import { ut, lt } from "B:/~BUN/root/chunk-3mm90xb6.js";
import { vi } from "B:/~BUN/root/chunk-knfpag6d.js";
import { b1, OFi, IFi } from "B:/~BUN/root/chunk-z1wt3cb2.js";
import { Ta } from "B:/~BUN/root/chunk-e0q1m1z9.js";
import { readdir as P, stat as w } from "fs/promises";
import { homedir as v, platform as _, userInfo as y } from "os";
import { join as p } from "path";
var dD = `mcp__${Ta}__`,
  D2 = "ClaudeInChromeDomain",
  u = {
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
  d = ["chrome", "brave", "arc", "edge", "chromium", "vivaldi", "opera"];
function Xhs() {
  let e = x(),
    o = v(),
    a = [];
  for (let s of d) {
    let r = u[s];
    switch (e) {
      case "macos":
        if (r.macos.nativeMessagingPath.length > 0) a.push({
          path: p(o, ...r.macos.nativeMessagingPath)
        });
        break;
      case "linux":
      case "wsl":
        if (r.linux.nativeMessagingPath.length > 0) a.push({
          path: p(o, ...r.linux.nativeMessagingPath)
        });
        break;
      case "windows":
        break;
    }
  }
  return a;
}
function Jhs() {
  let e = [];
  for (let browser of d) {
    let a = u[browser];
    if (a.windows.registryKey) e.push({
      browser: browser,
      key: a.windows.registryKey
    });
  }
  return e;
}
async function Kco() {
  let e = x();
  for (let o of d) {
    let a = u[o];
    switch (e) {
      case "macos":
        {
          let s = `/Applications/${a.macos.appName}.app`;
          try {
            if ((await w(s)).isDirectory()) return t(`[Claude in Chrome] Detected browser: ${a.name}`), o;
          } catch (error) {
            if (!qt(error)) throw error;
          }
          break;
        }
      case "wsl":
      case "linux":
        {
          for (let s of a.linux.binaries) if (await $c(s).catch(() => null)) return t(`[Claude in Chrome] Detected browser: ${a.name}`), o;
          break;
        }
      case "windows":
        {
          let s = v();
          if (a.windows.dataPath.length > 0) {
            let r = a.windows.useRoaming ? p(s, "AppData", "Roaming") : p(s, "AppData", "Local"),
              c = p(r, ...a.windows.dataPath);
            try {
              if ((await w(c)).isDirectory()) return t(`[Claude in Chrome] Detected browser: ${a.name}`), o;
            } catch (error) {
              if (!qt(error)) throw error;
            }
          }
          break;
        }
    }
  }
  return null;
}
var N = 200;
function Qhs(e) {
  let trackedTabIds = vi().trackedTabIds;
  if (trackedTabIds.size >= N && !trackedTabIds.has(e)) trackedTabIds.clear();
  trackedTabIds.add(e);
}
function Zhs(e) {
  return vi().trackedTabIds.has(e);
}
function l(e) {
  return {
    exec_exit_code: e.code,
    exec_failure_kind: e.exitCode !== void 0 ? b("nonzero_exit") : e.code === 127 ? b("not_found") : b("spawn_failed_or_killed")
  };
}
async function eJe(e) {
  if (!/^https?:\/\//i.test(e)) return m("chrome_open_url", "invalid_url"), !1;
  let o = x(),
    a = await Kco();
  if (!a) return t("[Claude in Chrome] No compatible browser found"), m("chrome_open_url", "no_browser"), !1;
  let s = u[a];
  switch (o) {
    case "macos":
      {
        let r = await ut("open", ["-a", s.macos.appName, e]);
        if (r.code === 0) return g("chrome_open_url"), !0;
        return m("chrome_open_url", "exec_failed", l(r)), !1;
      }
    case "windows":
      {
        let appPathsExe = s.windows.appPathsExe,
          c = !1;
        if (appPathsExe) {
          let h = await OFi(appPathsExe);
          if (h) {
            if (await IFi(h, [e])) return g("chrome_open_url", {
              open_method: b("app_paths"),
              browser: f(a)
            }), !0;
            c = !0;
          }
        }
        let n = await lt("rundll32", ["url,OpenURL", e], {
          cwd: b1()
        });
        if (n.code === 0) return g("chrome_open_url", {
          open_method: c ? b("rundll32_after_spawn_fail") : appPathsExe ? b("rundll32") : b("rundll32_no_app_paths_support"),
          browser: f(a)
        }), !0;
        return m("chrome_open_url", "exec_failed", {
          ...l(n),
          ...(c && {
            app_paths_spawn_failed: !0
          }),
          browser: f(a)
        }), !1;
      }
    case "wsl":
    case "linux":
      {
        let r;
        for (let c of s.linux.binaries) {
          let n = await ut(c, [e], {
            useCwd: !0,
            useToolMemoryCgroup: !1
          });
          if (n.code === 0) return g("chrome_open_url"), !0;
          if (r?.exitCode === void 0 || n.exitCode !== void 0) r = n;
        }
        return m("chrome_open_url", "exec_failed", r ? l(r) : void 0), !1;
      }
    default:
      return m("chrome_open_url", "exec_failed"), !1;
  }
}
function gDn() {
  return `/tmp/claude-mcp-browser-bridge-${M()}`;
}
function yDn() {
  if (_() === "win32") return `\\\\.\\pipe\\${C()}`;
  return p(gDn(), `${process.pid}.sock`);
}
async function egs() {
  if (_() === "win32") return [`\\\\.\\pipe\\${C()}`];
  let e = [],
    o = gDn();
  try {
    let a = await P(o);
    for (let s of a) if (s.endsWith(".sock")) e.push(p(o, s));
  } catch {}
  return e;
}
function C() {
  return `claude-mcp-browser-bridge-${M()}`;
}
function M() {
  try {
    return y().username || "default";
  } catch {
    return i.USER || i.USERNAME || "default";
  }
}
export { dD, D2, Xhs, Jhs, Kco, Qhs, Zhs, eJe, gDn, yDn, egs };