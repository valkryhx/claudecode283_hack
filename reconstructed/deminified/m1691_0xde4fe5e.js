// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import "B:/~BUN/root/chunk-bvn0mpsk.js";
import "B:/~BUN/root/chunk-ekrhn4q1.js";
import { q } from "B:/~BUN/root/chunk-4rk7cwxz.js";
import "B:/~BUN/root/chunk-dkxhwhft.js";
import "B:/~BUN/root/chunk-kks4mj3w.js";
import "B:/~BUN/root/chunk-bgthmgyc.js";
import "B:/~BUN/root/chunk-17wqwt36.js";
import "B:/~BUN/root/chunk-54p0h65d.js";
import { t } from "B:/~BUN/root/chunk-qe2zga5e.js";
import { Eb } from "B:/~BUN/root/chunk-4p6z9qq1.js";
import "B:/~BUN/root/chunk-0fnha6bz.js";
import "B:/~BUN/root/chunk-y04k89s2.js";
import "B:/~BUN/root/chunk-zv3zxqya.js";
import "B:/~BUN/root/chunk-6j6ra85q.js";
import { a } from "B:/~BUN/root/chunk-nkmmqnq7.js";
import "B:/~BUN/root/chunk-zksmb712.js";
import { O } from "B:/~BUN/root/chunk-zs3ycjed.js";
import "B:/~BUN/root/chunk-zk6g628v.js";
import { Ea, tt } from "B:/~BUN/root/chunk-py7yqpgt.js";
import "B:/~BUN/root/chunk-shgdrs47.js";
import "B:/~BUN/root/chunk-e7p62566.js";
import "B:/~BUN/root/chunk-728mwbhs.js";
import "B:/~BUN/root/chunk-51n463p1.js";
import "B:/~BUN/root/chunk-0bx1tycm.js";
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
var l = new q(() => new g());
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
      r = await import("B:/~BUN/root/chunk-dw3qks5e.js");
    return r.isNativeAudioAvailable(), e.audioNapi = r, t(`[voice] audio-capture-napi loaded in ${Date.now() - o}ms`), r;
  })(), e.audioNapiPromise;
}
var k = 16000,
  x = 1,
  E = "2.0",
  b = "3%";
async function f(e) {
  return (await tt(e, ["--version"], {
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
  if (Eb() || a.CLAUDE_CODE_REMOTE) return {
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
    ...Ea("helper")
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