// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { E } from "B:/~BUN/root/chunk-hb6x4e3n.js";
import { L } from "B:/~BUN/root/chunk-rpez7z7a.js";
import { c } from "B:/~BUN/root/chunk-jthpk6wv.js";
import { d, k, qi } from "B:/~BUN/root/chunk-3aez4b53.js";
import { Ja } from "B:/~BUN/root/chunk-4bx17ygx.js";
import { a } from "B:/~BUN/root/chunk-yt0knyw7.js";
import { t } from "B:/~BUN/root/chunk-6za2ez23.js";
import { i } from "B:/~BUN/root/chunk-1kfn24jp.js";
import { Ao } from "B:/~BUN/root/chunk-s6czymtt.js";
import { fr } from "B:/~BUN/root/chunk-c6mbjdcy.js";
import { stat as C } from "fs/promises";
import { homedir as _ } from "os";
import { join as s } from "path";
function B() {
  switch ("win32") {
    case "darwin":
      return ["Google Chrome.app/Contents/MacOS/Google Chrome", "Chromium.app/Contents/MacOS/Chromium", "Microsoft Edge.app/Contents/MacOS/Microsoft Edge", "Brave Browser.app/Contents/MacOS/Brave Browser"].flatMap(item => [s("/Applications", item), s(_(), "Applications", item)]);
    case "win32":
      return ["C:\\Program Files", "C:\\Program Files (x86)", s(_(), "AppData", "Local")].flatMap(item => [s(item, "Google", "Chrome", "Application", "chrome.exe"), s(item, "Chromium", "Application", "chrome.exe"), s(item, "Microsoft", "Edge", "Application", "msedge.exe")]);
    default:
      return ["/usr/bin/google-chrome-stable", "/usr/bin/google-chrome", "/usr/bin/chromium-browser", "/usr/bin/chromium", "/usr/local/bin/chromium", "/opt/google/chrome/chrome"];
  }
}
async function T(e, r) {
  try {
    return (await C(e)).isFile() && !0;
  } catch (error) {
    if (r && !qi(error)) throw error;
    return !1;
  }
}
async function v(e) {
  let r = [];
  for (let o of B()) {
    if (Ja(o)) continue;
    if (await T(o, e?.strict === !0)) r.push(o);
  }
  return r;
}
import { lstatSync as O } from "fs";
import { isAbsolute as R, join as p, relative as S, sep as h } from "path";
var base = "/mnt/skills",
  y = "examples/artifact-emulator",
  Nno = "scripts/bootstrap.py",
  D = "tengu_cobalt_plinth_hornbeam",
  f = {
    base: base,
    ownerUid: 0
  };
function uIn() {
  return p(f.base, y);
}
function Fno(e) {
  return "unsupported_platform";
}
function M() {
  if (!fr()) return "not_hosted";
  return Fno(p(uIn(), Nno));
}
function P() {
  return U().on;
}
function U() {
  let e = Ao();
  if (e.artifactPreviewEmulator === void 0) e.artifactPreviewEmulator = I(), i("tengu_artifact_preview_emulator_gate", {
    on: e.artifactPreviewEmulator.on,
    reason: c(e.artifactPreviewEmulator.reason)
  });
  return e.artifactPreviewEmulator;
}
function I() {
  let CLAUDE_CODE_ARTIFACT_PREVIEW_EMULATOR = a.CLAUDE_CODE_ARTIFACT_PREVIEW_EMULATOR;
  if (CLAUDE_CODE_ARTIFACT_PREVIEW_EMULATOR === !1) return {
    on: !1,
    reason: "pinned_off"
  };
  let reason;
  try {
    reason = M();
  } catch (error) {
    t(`Artifact preview: could not check the emulator skill's files, so the emulator stays off: ${d(error)}`), reason = "unreadable";
  }
  if (reason !== void 0) return {
    on: !1,
    reason: reason
  };
  if (CLAUDE_CODE_ARTIFACT_PREVIEW_EMULATOR === !0) return {
    on: !0,
    reason: "pinned_on"
  };
  return E(D, !1) === !0 ? {
    on: !0,
    reason: "flag_on"
  } : {
    on: !1,
    reason: "flag_off"
  };
}
var u = null;
function g() {
  return u !== null && !1;
}
function vAe() {
  if (a.CLAUDE_CODE_ARTIFACT_PREVIEW === !1) return !1;
  if (jF() === "emulator") return !0;
  if (!V()) return !1;
  if (a.CLAUDE_CODE_ARTIFACT_PREVIEW === !0) return !0;
  return W() !== "none";
}
var F = {
  on: !1
};
function jF() {
  let e = Ao();
  return e.artifactPreviewEngine ??= a.CLAUDE_CODE_ARTIFACT_PREVIEW !== !1 && F.on && H() ? "emulator" : "local_chrome", e.artifactPreviewEngine;
}
function H() {
  return a.CLAUDE_CODE_REMOTE === !0 && P();
}
function V() {
  if (a.CLAUDE_CODE_REMOTE || !g()) return !1;
  return a.CLAUDE_CODE_ARTIFACT_PREVIEW ?? E("tengu_cobalt_plinth_aspen", !1);
}
function _pr() {
  if (u === null) throw Error("artifact preview is not compiled into this build");
  let {
      findPlaywrightChromes: findPlaywrightChromes
    } = u,
    chromeCandidates = async o => a.BUN_CHROME_PATH ? [a.BUN_CHROME_PATH] : L([...(await findPlaywrightChromes(o)), ...(await v(o))]);
  return {
    chromeCandidates: chromeCandidates,
    resolveChrome: async () => (await chromeCandidates())[0],
    noSandbox: u.needsNoSandbox,
    installHint: u.chromeInstallHint,
    installDir: u.chromeInstallDir
  };
}
function b() {
  return `${a.BUN_CHROME_PATH ?? ""}
${a.PLAYWRIGHT_BROWSERS_PATH ?? ""}`;
}
async function Mri() {
  let e;
  try {
    if (a.CLAUDE_CODE_ARTIFACT_PREVIEW !== void 0 || a.CLAUDE_CODE_REMOTE || !g()) return;
    let r = Ao();
    if (r.artifactPreviewBrowserSearch !== void 0) return;
    e = {
      env: b(),
      state: "pending"
    }, r.artifactPreviewBrowserSearch = e;
  } catch (error) {
    t(`Artifact preview: could not start the browser search: ${d(error)}`);
    return;
  }
  try {
    let r = await _pr().chromeCandidates({
      strict: !0
    });
    e.state = r.length > 0 ? "found" : "none";
  } catch (error) {
    e.state = "error", t(`Artifact preview: the startup browser search failed: ${d(error)}`);
  }
}
function W() {
  let e = Ao();
  if (e.artifactPreviewBrowser === void 0) e.artifactPreviewBrowser = G(e.artifactPreviewBrowserSearch), i("tengu_artifact_preview_browser", {
    verdict: c(e.artifactPreviewBrowser.verdict),
    source: c(e.artifactPreviewBrowser.source)
  });
  return e.artifactPreviewBrowser.verdict;
}
function Hno() {
  return Ao().artifactPreviewBrowser;
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
  };
}
export { Nno, uIn, Fno, vAe, jF, _pr, Mri, Hno };