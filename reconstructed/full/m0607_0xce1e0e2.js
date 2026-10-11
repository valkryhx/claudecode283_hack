// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.283
import {
  x
} from "B:/~BUN/root/chunk-gf53qpk6.js";
import {
  c
} from "B:/~BUN/root/chunk-kks4mj3w.js";
import {
  l,
  CKr
} from "B:/~BUN/root/chunk-bgthmgyc.js";
import {
  Nd
} from "B:/~BUN/root/chunk-54p0h65d.js";
import {
  a
} from "B:/~BUN/root/chunk-nkmmqnq7.js";
import {
  t
} from "B:/~BUN/root/chunk-qe2zga5e.js";
import {
  i
} from "B:/~BUN/root/chunk-728mwbhs.js";
import {
  bo
} from "B:/~BUN/root/chunk-846280n0.js";
import {
  L
} from "B:/~BUN/root/chunk-z1enakv9.js";
import {
  stat as p
} from "fs/promises";
import {
  homedir as u
} from "os";
import {
  join as n
} from "path";

function d() {
  switch ("win32") {
    case "darwin":
      return ["Google Chrome.app/Contents/MacOS/Google Chrome", "Chromium.app/Contents/MacOS/Chromium", "Microsoft Edge.app/Contents/MacOS/Microsoft Edge", "Brave Browser.app/Contents/MacOS/Brave Browser"].flatMap((r) => [n("/Applications", r), n(u(), "Applications", r)]);
    case "win32":
      return ["C:\\Program Files", "C:\\Program Files (x86)", n(u(), "AppData", "Local")].flatMap((r) => [n(r, "Google", "Chrome", "Application", "chrome.exe"), n(r, "Chromium", "Application", "chrome.exe"), n(r, "Microsoft", "Edge", "Application", "msedge.exe")]);
    default:
      return ["/usr/bin/google-chrome-stable", "/usr/bin/google-chrome", "/usr/bin/chromium-browser", "/usr/bin/chromium", "/usr/local/bin/chromium", "/opt/google/chrome/chrome"]
  }
}
async function v(e, r) {
  try {
    return (await p(e)).isFile() && !0
  } catch (o) {
    if (r && !CKr(o)) throw o;
    return !1
  }
}
async function w(e) {
  let r = [];
  for (let o of d()) {
    if (Nd(o)) continue;
    if (await v(o, e?.strict === !0)) r.push(o)
  }
  return r
}
var s = null;

function f() {
  return s !== null && !1
}

function Upe() {
  if (!h()) return !1;
  if (a.CLAUDE_CODE_ARTIFACT_PREVIEW === !0) return !0;
  return P() !== "none"
}

function h() {
  if (a.CLAUDE_CODE_REMOTE || !f()) return !1;
  return a.CLAUDE_CODE_ARTIFACT_PREVIEW ?? x("tengu_cobalt_plinth_aspen", !1)
}

function FIn() {
  if (s === null) throw Error("artifact preview is not compiled into this build");
  let {
    findPlaywrightChromes: e
  } = s, r = async (o) => a.BUN_CHROME_PATH ? [a.BUN_CHROME_PATH] : L([...await e(o), ...await w(o)]);
  return {
    chromeCandidates: r,
    resolveChrome: async () => (await r())[0],
    noSandbox: s.needsNoSandbox,
    installHint: s.chromeInstallHint,
    installDir: s.chromeInstallDir
  }
}

function m() {
  return `${a.BUN_CHROME_PATH??""}
${a.PLAYWRIGHT_BROWSERS_PATH??""}`
}
async function j4o() {
  let e;
  try {
    if (a.CLAUDE_CODE_ARTIFACT_PREVIEW !== void 0 || a.CLAUDE_CODE_REMOTE || !f()) return;
    let r = bo();
    if (r.artifactPreviewBrowserSearch !== void 0) return;
    e = {
      env: m(),
      state: "pending"
    }, r.artifactPreviewBrowserSearch = e
  } catch (r) {
    t(`Artifact preview: could not start the browser search: ${l(r)}`);
    return
  }
  try {
    let r = await FIn().chromeCandidates({
      strict: !0
    });
    e.state = r.length > 0 ? "found" : "none"
  } catch (r) {
    e.state = "error", t(`Artifact preview: the startup browser search failed: ${l(r)}`)
  }
}

function P() {
  let e = bo();
  if (e.artifactPreviewBrowser === void 0) e.artifactPreviewBrowser = g(e.artifactPreviewBrowserSearch), i("tengu_artifact_preview_browser", {
    verdict: c(e.artifactPreviewBrowser.verdict),
    source: c(e.artifactPreviewBrowser.source)
  });
  return e.artifactPreviewBrowser.verdict
}

function mfr() {
  return bo().artifactPreviewBrowser
}

function g(e) {
  if (e === void 0) return {
    verdict: "unknown",
    source: "not_started"
  };
  if (e.env !== m()) return {
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
  Upe,
  FIn,
  j4o,
  mfr
};
