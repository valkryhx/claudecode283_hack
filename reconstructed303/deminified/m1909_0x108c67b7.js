// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import "B:/~BUN/root/chunk-rwkgcmm8.js";
import "B:/~BUN/root/chunk-9ka04m0y.js";
import "B:/~BUN/root/chunk-rpez7z7a.js";
import "B:/~BUN/root/chunk-hg8ngszx.js";
import "B:/~BUN/root/chunk-jthpk6wv.js";
import "B:/~BUN/root/chunk-3aez4b53.js";
import "B:/~BUN/root/chunk-89mss1tj.js";
import { z } from "B:/~BUN/root/chunk-4bx17ygx.js";
import { t } from "B:/~BUN/root/chunk-6za2ez23.js";
import { Nw } from "B:/~BUN/root/chunk-fbyz9h0p.js";
import "B:/~BUN/root/chunk-xf0m410v.js";
import "B:/~BUN/root/chunk-nggrknsv.js";
import "B:/~BUN/root/chunk-psh1mp8h.js";
import { a } from "B:/~BUN/root/chunk-yt0knyw7.js";
import "B:/~BUN/root/chunk-jpdys232.js";
import "B:/~BUN/root/chunk-c09hf5e4.js";
import { I } from "B:/~BUN/root/chunk-je1b1drr.js";
import "B:/~BUN/root/chunk-d8fk23v1.js";
import { vd } from "B:/~BUN/root/chunk-j8w5f307.js";
import "B:/~BUN/root/chunk-nxwmyxnk.js";
import "B:/~BUN/root/chunk-yw21pggd.js";
import { lt } from "B:/~BUN/root/chunk-6ft8yhc8.js";
import "B:/~BUN/root/chunk-j704adqd.js";
import "B:/~BUN/root/chunk-1kfn24jp.js";
import "B:/~BUN/root/chunk-kzgf20y6.js";
import { spawn as h } from "child_process";
import { homedir as m } from "os";
import { join as v } from "path";
var V = v(m(), ".cache", "coder-audio", "port"),
  M = v(m(), ".cache", "coder-audio", "token");
class g {
  audioNapi = null;
  audioNapiPromise = null;
  arecordProbe = null;
  linuxAlsaCardsProbe = null;
  activeRecorder = null;
  activeForwardedSocket = null;
  forwardedStartGeneration = 0;
  nativeRecordingActive = !1;
}
var l = new z(() => new g());
var w = {
  started: !0
};
var S = {
  started: !1,
  superseded: !1,
  hint: null,
  expected: !1
};
function u(e) {
  return e.audioNapiPromise ??= (async () => {
    let o = Date.now(),
      r = await import("B:/~BUN/root/chunk-x14m25h9.js");
    return r.isNativeAudioAvailable(), e.audioNapi = r, t(`[voice] audio-capture-napi loaded in ${Date.now() - o}ms`), r;
  })(), e.audioNapiPromise;
}
var k = 16000,
  x = 1,
  E = "2.0",
  b = "3%";
async function f(e) {
  return (await lt(e, ["--version"], {
    timeout: 3000,
    useCwd: !1
  })).code === 0;
}
async function A() {
  return null;
}
async function ce(e) {
  let o = l.of(e);
  if ((await u(o)).isNativeAudioAvailable()) return {
    available: !0,
    missing: [],
    installCommand: null
  };
  return {
    available: !1,
    missing: ["Voice mode requires the native audio module (not loaded)"],
    installCommand: null
  };
}
async function le(e) {
  if (!(await u(l.of(e))).isNativeAudioAvailable()) return !0;
  if ((await y(e, s => {}, () => {}, {
    silenceDetection: !1
  })).started) return C(e), !0;
  return !1;
}
async function ue(e, o = {}) {
  if (Nw() || a.CLAUDE_CODE_REMOTE) return {
    available: !1,
    reason: `Voice mode requires microphone access, but no audio device is available in this environment.

To use voice mode, run Claude Code locally instead.`
  };
  let r = l.of(e);
  if ((await u(r)).isNativeAudioAvailable()) return {
    available: !0,
    reason: null
  };
  return {
    available: !1,
    reason: "Voice recording requires the native audio module, which could not be loaded."
  };
}
async function y(e, o, r, s) {
  t("[voice] startRecording called, platform=win32");
  let n = l.of(e),
    d = await u(n),
    i = d.isNativeAudioAvailable() && !0,
    c = s?.silenceDetection !== !1;
  if (i) {
    if (n.nativeRecordingActive || d.isNativeRecordingActive()) d.stopNativeRecording(), n.nativeRecordingActive = !1;
    if (d.startNativeRecording(p => {
      o(p);
    }, () => {
      if (c) n.nativeRecordingActive = !1, r();
    })) return n.nativeRecordingActive = !0, w;
  }
  return t("[voice] Windows native recording unavailable, no fallback"), S;
}
function P(e, o, r, s) {
  let n = s?.silenceDetection !== !1,
    d = ["-q", "--buffer", "1024", "-t", "raw", "-r", String(k), "-e", "signed", "-b", "16", "-c", String(x), "-"];
  if (n) d.push("silence", "1", "0.1", b, "1", E, b);
  let i = h("rec", d, {
    stdio: ["pipe", "pipe", "pipe"],
    windowsHide: !0,
    ...vd("helper")
  });
  return e.activeRecorder = i, i.stdout?.on("data", c => {
    o(c);
  }), i.stderr?.on("data", () => {}), i.on("close", () => {
    e.activeRecorder = null, r();
  }), i.on("error", c => {
    t(`[voice] SoX rec spawn failed: ${c instanceof Error ? c.message : String(c)}`, {
      level: "error"
    }), e.activeRecorder = null, r();
  }), !0;
}
function C(e) {
  let o = l.of(e);
  if (o.nativeRecordingActive && o.audioNapi) {
    o.audioNapi.stopNativeRecording(), o.nativeRecordingActive = !1;
    return;
  }
  if (o.activeRecorder) o.activeRecorder.kill("SIGTERM"), o.activeRecorder = null;
}
export { ue as checkRecordingAvailability, ce as checkVoiceDependencies, le as requestMicrophonePermission, y as startRecording, C as stopRecording };