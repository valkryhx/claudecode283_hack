// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  v
} from "B:/~BUN/root/chunk-1ks9vs37.js";
import {
  f
} from "B:/~BUN/root/chunk-drx9cnw1.js";
import {
  d,
  k,
  wr
} from "B:/~BUN/root/chunk-y2g9f85n.js";
import {
  Sl
} from "B:/~BUN/root/chunk-h4acfc9y.js";
import {
  i
} from "B:/~BUN/root/chunk-j6pt0v41.js";
import {
  t
} from "B:/~BUN/root/chunk-2pp12te6.js";
import {
  l
} from "B:/~BUN/root/chunk-mb9chr1y.js";
import {
  tn
} from "B:/~BUN/root/chunk-1fg2bpc3.js";
import {
  kr
} from "B:/~BUN/root/chunk-dm4rzkqc.js";
import {
  L
} from "B:/~BUN/root/chunk-5ha2avah.js";
import {
  stat as C
} from "fs/promises";
import {
  homedir as E
} from "os";
import {
  join as a
} from "path";

function B() {
  switch ("win32") {
    case "darwin":
      return ["Google Chrome.app/Contents/MacOS/Google Chrome", "Chromium.app/Contents/MacOS/Chromium", "Microsoft Edge.app/Contents/MacOS/Microsoft Edge", "Brave Browser.app/Contents/MacOS/Brave Browser"].flatMap((r) => [a("/Applications", r), a(E(), "Applications", r)]);
    case "win32":
      return ["C:\\Program Files", "C:\\Program Files (x86)", a(E(), "AppData", "Local")].flatMap((r) => [a(r, "Google", "Chrome", "Application", "chrome.exe"), a(r, "Chromium", "Application", "chrome.exe"), a(r, "Microsoft", "Edge", "Application", "msedge.exe")]);
    default:
      return ["/usr/bin/google-chrome-stable", "/usr/bin/google-chrome", "/usr/bin/chromium-browser", "/usr/bin/chromium", "/usr/local/bin/chromium", "/opt/google/chrome/chrome"]
  }
}
async function T(e, r) {
  try {
    return (await C(e)).isFile() && !0
  } catch (o) {
    if (r && !wr(o)) throw o;
    return !1
  }
}
async function _(e) {
  let r = [];
  for (let o of B()) {
    if (Sl(o)) continue;
    if (await T(o, e?.strict === !0)) r.push(o)
  }
  return r
}
import {
  lstatSync as O
} from "fs";
import {
  isAbsolute as R,
  join as p,
  relative as S,
  sep as h
} from "path";
var x = "/mnt/skills",
  y = "examples/artifact-emulator",
  x9o = "scripts/bootstrap.py",
  D = "tengu_cobalt_plinth_hornbeam",
  c = {
    base: x,
    ownerUid: 0
  };

function Wsr() {
  return p(c.base, y)
}

function P9o(e) {
  return "unsupported_platform"
}

function M() {
  if (!tn()) return "not_hosted";
  return P9o(p(Wsr(), x9o))
}

function P() {
  return U().on
}

function U() {
  let e = kr();
  if (e.artifactPreviewEmulator === void 0) e.artifactPreviewEmulator = I(), l("tengu_artifact_preview_emulator_gate", {
    on: e.artifactPreviewEmulator.on,
    reason: f(e.artifactPreviewEmulator.reason)
  });
  return e.artifactPreviewEmulator
}

function I() {
  let e = i.CLAUDE_CODE_ARTIFACT_PREVIEW_EMULATOR;
  if (e === !1) return {
    on: !1,
    reason: "pinned_off"
  };
  let r;
  try {
    r = M()
  } catch (o) {
    t(`Artifact preview: could not check the emulator skill's files, so the emulator stays off: ${d(o)}`), r = "unreadable"
  }
  if (r !== void 0) return {
    on: !1,
    reason: r
  };
  if (e === !0) return {
    on: !0,
    reason: "pinned_on"
  };
  return v(D, !1) === !0 ? {
    on: !0,
    reason: "flag_on"
  } : {
    on: !1,
    reason: "flag_off"
  }
}
var s = null;

function g() {
  return s !== null && !1
}

function w1e() {
  if (i.CLAUDE_CODE_ARTIFACT_PREVIEW === !1) return !1;
  if (rW() === "emulator") return !0;
  if (!V()) return !1;
  if (i.CLAUDE_CODE_ARTIFACT_PREVIEW === !0) return !0;
  return W() !== "none"
}
var F = {
  on: !1
};

function rW() {
  let e = kr();
  return e.artifactPreviewEngine ??= i.CLAUDE_CODE_ARTIFACT_PREVIEW !== !1 && F.on && H() ? "emulator" : "local_chrome", e.artifactPreviewEngine
}

function H() {
  return i.CLAUDE_CODE_REMOTE === !0 && P()
}

function V() {
  if (i.CLAUDE_CODE_REMOTE || !g()) return !1;
  return i.CLAUDE_CODE_ARTIFACT_PREVIEW ?? v("tengu_cobalt_plinth_aspen", !1)
}

function S9r() {
  if (s === null) throw Error("artifact preview is not compiled into this build");
  let {
    findPlaywrightChromes: e
  } = s, r = async (o) => i.BUN_CHROME_PATH ? [i.BUN_CHROME_PATH] : L([...await e(o), ...await _(o)]);
  return {
    chromeCandidates: r,
    resolveChrome: async () => (await r())[0],
    noSandbox: s.needsNoSandbox,
    installHint: s.chromeInstallHint,
    installDir: s.chromeInstallDir
  }
}

function b() {
  return `${i.BUN_CHROME_PATH??""}
${i.PLAYWRIGHT_BROWSERS_PATH??""}`
}
async function Y_a() {
  let e;
  try {
    if (i.CLAUDE_CODE_ARTIFACT_PREVIEW !== void 0 || i.CLAUDE_CODE_REMOTE || !g()) return;
    let r = kr();
    if (r.artifactPreviewBrowserSearch !== void 0) return;
    e = {
      env: b(),
      state: "pending"
    }, r.artifactPreviewBrowserSearch = e
  } catch (r) {
    t(`Artifact preview: could not start the browser search: ${d(r)}`);
    return
  }
  try {
    let r = await S9r().chromeCandidates({
      strict: !0
    });
    e.state = r.length > 0 ? "found" : "none"
  } catch (r) {
    e.state = "error", t(`Artifact preview: the startup browser search failed: ${d(r)}`)
  }
}

function W() {
  let e = kr();
  if (e.artifactPreviewBrowser === void 0) e.artifactPreviewBrowser = G(e.artifactPreviewBrowserSearch), l("tengu_artifact_preview_browser", {
    verdict: f(e.artifactPreviewBrowser.verdict),
    source: f(e.artifactPreviewBrowser.source)
  });
  return e.artifactPreviewBrowser.verdict
}

function O9o() {
  return kr().artifactPreviewBrowser
}

function G(e) {
  if (e === void 0) return {
    verdict: "unknown",
    source: "not_started"
  };
  if (e.env !== b()) return {
    verdict: "unknown",
    source: "stale_env"
  };
  if (e.state === "pending" || e.state === "error") return {
    verdict: "unknown",
    source: e.state
  };
  return {
    verdict: e.state,
    source: "session"
  }
}
export {
  x9o,
  Wsr,
  P9o,
  w1e,
  rW,
  S9r,
  Y_a,
  O9o
};
