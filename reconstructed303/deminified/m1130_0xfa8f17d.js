// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { we } from "B:/~BUN/root/chunk-rpez7z7a.js";
import { g, m, p } from "B:/~BUN/root/chunk-kzgf20y6.js";
import { t } from "B:/~BUN/root/chunk-6za2ez23.js";
import { I } from "B:/~BUN/root/chunk-je1b1drr.js";
import { lt, ct } from "B:/~BUN/root/chunk-6ft8yhc8.js";
import { Nve, Gzn, Xie, GBe, hX, GDt } from "B:/~BUN/root/chunk-5ec3ghdy.js";
import { Ce, ue } from "B:/~BUN/root/chunk-hb6x4e3n.js";
import { CFt } from "B:/~BUN/root/chunk-tpg9ctbs.js";
import { homedir as o } from "os";
async function RMn() {
  if ((await lt("which", ["uv"])).code === 0) return t("[it2Setup] Found uv (will use uv tool install)"), "uvx";
  if ((await lt("which", ["pipx"])).code === 0) return t("[it2Setup] Found pipx package manager"), "pipx";
  if ((await lt("which", ["pip"])).code === 0) return t("[it2Setup] Found pip package manager"), "pip";
  if ((await lt("which", ["pip3"])).code === 0) return t("[it2Setup] Found pip3 package manager"), "pip";
  return t("[it2Setup] No Python package manager found"), null;
}
async function k() {
  return (await lt("which", ["it2"])).code === 0;
}
async function Mso(packageManager) {
  t(`[it2Setup] Installing it2 using ${packageManager}`);
  let n;
  switch (packageManager) {
    case "uvx":
      n = await ct("uv", ["tool", "install", "it2"], {
        cwd: o()
      });
      break;
    case "pipx":
      n = await ct("pipx", ["install", "it2"], {
        cwd: o()
      });
      break;
    case "pip":
      if (n = await ct("pip", ["install", "--user", "it2"], {
        cwd: o()
      }), n.code !== 0) n = await ct("pip3", ["install", "--user", "it2"], {
        cwd: o()
      });
      break;
  }
  if (n.code !== 0) {
    let error = n.stderr || "Unknown installation error";
    return t(`[it2Setup] Failed to install it2: ${error}`, {
      level: "error"
    }), m("swarm_iterm2_it2_install", `${packageManager}_install_failed`), {
      success: !1,
      error: error,
      packageManager: packageManager
    };
  }
  return t("[it2Setup] it2 installed successfully"), g("swarm_iterm2_it2_install"), {
    success: !0,
    packageManager: packageManager
  };
}
async function Dso() {
  if (t("[it2Setup] Verifying it2 setup..."), !(await k())) return m("swarm_iterm2_it2_verify", "not_installed"), {
    success: !1,
    error: "it2 CLI is not installed or not in PATH"
  };
  let n = await lt("it2", ["session", "list"]);
  if (n.code !== 0) {
    let a = n.stderr.toLowerCase();
    if (a.includes("api") || a.includes("python") || a.includes("connection refused") || a.includes("not enabled")) return t("[it2Setup] Python API not enabled in iTerm2"), p("swarm_iterm2_it2_verify", "python_api_not_enabled"), {
      success: !1,
      error: "Python API not enabled in iTerm2 preferences",
      needsPythonApiEnabled: !0
    };
    return m("swarm_iterm2_it2_verify", "communication_failed"), {
      success: !1,
      error: n.stderr || "Failed to communicate with iTerm2"
    };
  }
  return t("[it2Setup] it2 setup verified successfully"), g("swarm_iterm2_it2_verify"), {
    success: !0
  };
}
function Lso() {
  return ["Almost done! Enable the Python API in iTerm2:", "", "  iTerm2 \u2192 Settings \u2192 General \u2192 Magic \u2192 Enable Python API", "", "After enabling, you may need to restart iTerm2."];
}
function Nso(e) {
  if (ue().iterm2It2SetupComplete !== !0) Ce(a => ({
    ...a,
    iterm2It2SetupComplete: !0
  }), e), t("[it2Setup] Marked it2 setup as complete");
}
function Fso(preferTmuxOverIterm2, n) {
  if (ue().preferTmuxOverIterm2 !== preferTmuxOverIterm2) Ce(s => ({
    ...s,
    preferTmuxOverIterm2: preferTmuxOverIterm2
  }), n), t(`[it2Setup] Set preferTmuxOverIterm2 = ${preferTmuxOverIterm2}`);
}
function d() {
  return ue().preferTmuxOverIterm2 === !0;
}
async function Nfr(e = Nve) {
  if (e.backendsRegistered) return;
  let {
      TmuxBackend: TmuxBackend
    } = await import("B:/~BUN/root/chunk-0a9h6fmr.js"),
    {
      ITermBackend: ITermBackend
    } = await import("B:/~BUN/root/chunk-bpca8ftd.js");
  e.TmuxBackendClass = TmuxBackend, e.ITermBackendClass = ITermBackend, e.backendsRegistered = !0;
}
function c(e) {
  if (e.tmuxBackend) return e.tmuxBackend;
  if (!e.TmuxBackendClass) throw Error("TmuxBackend not registered. Import TmuxBackend.ts before using the registry.");
  return e.tmuxBackend = new e.TmuxBackendClass(), e.tmuxBackend;
}
function u(e) {
  if (e.itermBackend) return e.itermBackend;
  if (!e.ITermBackendClass) throw Error("ITermBackend not registered. Import ITermBackend.ts before using the registry.");
  return e.itermBackend = new e.ITermBackendClass(), e.itermBackend;
}
async function AMn(e = Nve) {
  if (await Nfr(e), e.cachedDetectionResult) return t(`[BackendRegistry] Using cached backend: ${e.cachedDetectionResult.backend.type}`), e.cachedDetectionResult;
  if (t("[BackendRegistry] Starting backend detection..."), CFt() === "iterm2") {
    if (!hX(e)) throw m("swarm_backend_detect", "iterm2_explicit_not_in_iterm2"), Error('teammateMode is set to "iterm2" but this session is not running inside iTerm2. Launch Claude from iTerm2, or change teammateMode in settings.');
    if (!(await GDt(e))) throw m("swarm_backend_detect", "iterm2_explicit_no_it2"), Error('teammateMode is set to "iterm2" but the it2 CLI is not reachable. Install it with `pip install it2` and enable the Python API in iTerm2 (Preferences > General > Magic > Enable Python API).');
    t("[BackendRegistry] Selected: iterm2 (explicit teammateMode)");
    let backend = u(e);
    return e.cachedDetectionResult = {
      backend: backend,
      isNative: !0,
      needsIt2Setup: !1
    }, g("swarm_backend_detect"), e.cachedDetectionResult;
  }
  let n = await Xie(),
    a = hX(e);
  if (t(`[BackendRegistry] Environment: insideTmux=${n}, inITerm2=${a}`), n) {
    t("[BackendRegistry] Selected: tmux (running inside tmux session)");
    let backend_2 = c(e);
    return e.cachedDetectionResult = {
      backend: backend_2,
      isNative: !0,
      needsIt2Setup: !1
    }, g("swarm_backend_detect"), e.cachedDetectionResult;
  }
  if (a) {
    let i = d();
    if (i) t("[BackendRegistry] User prefers tmux over iTerm2, skipping iTerm2 detection");else {
      let r = await GDt(e);
      if (t(`[BackendRegistry] iTerm2 detected, it2 CLI available: ${r}`), r) {
        t("[BackendRegistry] Selected: iterm2 (native iTerm2 with it2 CLI)");
        let backend_3 = u(e);
        return e.cachedDetectionResult = {
          backend: backend_3,
          isNative: !0,
          needsIt2Setup: !1
        }, g("swarm_backend_detect"), e.cachedDetectionResult;
      }
    }
    let l = await GBe();
    if (t(`[BackendRegistry] it2 not available, tmux available: ${l}`), l) {
      t("[BackendRegistry] Selected: tmux (fallback in iTerm2, it2 setup recommended)");
      let backend_4 = c(e);
      return e.cachedDetectionResult = {
        backend: backend_4,
        isNative: !1,
        needsIt2Setup: !i
      }, p("swarm_backend_detect", i ? "fallback_to_tmux" : "needs_it2_setup"), e.cachedDetectionResult;
    }
    throw t("[BackendRegistry] ERROR: iTerm2 detected but no it2 CLI and no tmux"), m("swarm_backend_detect", "iterm2_no_it2_no_tmux"), Error("iTerm2 detected but it2 CLI not installed. Install it2 with: pip install it2");
  }
  let s = await GBe();
  if (t(`[BackendRegistry] Not in tmux or iTerm2, tmux available: ${s}`), s) {
    t("[BackendRegistry] Selected: tmux (external session mode)");
    let backend_5 = c(e);
    return e.cachedDetectionResult = {
      backend: backend_5,
      isNative: !1,
      needsIt2Setup: !1
    }, g("swarm_backend_detect"), e.cachedDetectionResult;
  }
  throw t("[BackendRegistry] ERROR: No pane backend available"), m("swarm_backend_detect", "no_backend_available"), Error(x());
}
function x() {
  switch (I()) {
    case "macos":
      return `To use agent swarms, install tmux:
  brew install tmux
Then start a tmux session with: tmux new-session -s claude`;
    case "linux":
    case "wsl":
      return `To use agent swarms, install tmux:
  sudo apt install tmux    # Ubuntu/Debian
  sudo dnf install tmux    # Fedora/RHEL
Then start a tmux session with: tmux new-session -s claude`;
    case "windows":
      return `To use agent swarms, you need tmux which requires WSL (Windows Subsystem for Linux).
Install WSL first, then inside WSL run:
  sudo apt install tmux
Then start a tmux session with: tmux new-session -s claude`;
    default:
      return `To use agent swarms, install tmux using your system's package manager.
Then start a tmux session with: tmux new-session -s claude`;
  }
}
function l8t(e, n = Nve) {
  switch (e) {
    case "tmux":
      return c(n);
    case "iterm2":
      return u(n);
  }
}
function Hso(e = Nve) {
  return e.cachedDetectionResult;
}
function $so(e = Nve) {
  t("[BackendRegistry] Marking in-process fallback as active"), e.inProcessFallbackActive = !0;
}
function w() {
  return CFt();
}
function d8t(e = Nve) {
  if (we()) return t("[BackendRegistry] isInProcessEnabled: true (non-interactive session)"), !0;
  let n = w(),
    a;
  if (n === "in-process") a = !0;else if (n === "tmux" || n === "iterm2") a = !1;else {
    if (e.inProcessFallbackActive) return t("[BackendRegistry] isInProcessEnabled: true (fallback after pane backend unavailable)"), !0;
    let s = Gzn(),
      i = hX(e);
    a = !s && !i;
  }
  return t(`[BackendRegistry] isInProcessEnabled: ${a} (mode=${n}, insideTmux=${Gzn()}, inITerm2=${hX(e)})`), a;
}
function c8t(e = Nve) {
  e.cachedDetectionResult = null, e.backendsRegistered = !1, e.inProcessFallbackActive = !1;
}
export { RMn, Mso, Dso, Lso, Nso, Fso, Nfr, AMn, l8t, Hso, $so, d8t, c8t };