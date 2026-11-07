// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import "B:/~BUN/root/chunk-vz9zea4j.js";
import "B:/~BUN/root/chunk-q78ga0zw.js";
import "B:/~BUN/root/chunk-db8vh085.js";
import "B:/~BUN/root/chunk-game8aqv.js";
import "B:/~BUN/root/chunk-wt4dg253.js";
import "B:/~BUN/root/chunk-drx9cnw1.js";
import "B:/~BUN/root/chunk-y2g9f85n.js";
import "B:/~BUN/root/chunk-r5zmhp23.js";
import "B:/~BUN/root/chunk-h4acfc9y.js";
import {
  W
} from "B:/~BUN/root/chunk-ppmmt0c3.js";
import {
  t
} from "B:/~BUN/root/chunk-2pp12te6.js";
import "B:/~BUN/root/chunk-dayhhbfr.js";
import {
  NE
} from "B:/~BUN/root/chunk-eev762xg.js";
import "B:/~BUN/root/chunk-15vbkr6z.js";
import "B:/~BUN/root/chunk-n8cnxns2.js";
import "B:/~BUN/root/chunk-09sn55yf.js";
import "B:/~BUN/root/chunk-jdtvghyw.js";
import "B:/~BUN/root/chunk-kjwczfsg.js";
import {
  i
} from "B:/~BUN/root/chunk-j6pt0v41.js";
import "B:/~BUN/root/chunk-y1kkrqy9.js";
import "B:/~BUN/root/chunk-xrwdh0g4.js";
import {
  x
} from "B:/~BUN/root/chunk-mwfggkjt.js";
import "B:/~BUN/root/chunk-4jt3t3ds.js";
import {
  au
} from "B:/~BUN/root/chunk-gq1er5y2.js";
import "B:/~BUN/root/chunk-thn0wk2x.js";
import "B:/~BUN/root/chunk-88zb3509.js";
import {
  ut
} from "B:/~BUN/root/chunk-3mm90xb6.js";
import "B:/~BUN/root/chunk-83p1z1q5.js";
import "B:/~BUN/root/chunk-mb9chr1y.js";
import "B:/~BUN/root/chunk-3z3yrbk4.js";
import "B:/~BUN/root/chunk-12nc74pv.js";
import "B:/~BUN/root/chunk-9wbhv9z5.js";
import {
  spawn as h
} from "child_process";
import {
  homedir as m
} from "os";
import {
  join as v
} from "path";
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
  nativeRecordingActive = !1
}
var l = new W(() => new g);
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
      r = await import("B:/~BUN/root/chunk-9gnpzct6.js");
    return r.isNativeAudioAvailable(), e.audioNapi = r, t(`[voice] audio-capture-napi loaded in ${Date.now()-o}ms`), r
  })(), e.audioNapiPromise
}
var k = 16000,
  E = 1,
  y = "2.0",
  b = "3%";
async function f(e) {
  return (await ut(e, ["--version"], {
    timeout: 3000,
    useCwd: !1
  })).code === 0
}
async function A() {
  return null
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
  }
}
async function le(e) {
  if (!(await u(l.of(e))).isNativeAudioAvailable()) return !0;
  if ((await P(e, (s) => {}, () => {}, {
      silenceDetection: !1
    })).started) return D(e), !0;
  return !1
}
async function ue(e, o = {}) {
  if (NE() || i.CLAUDE_CODE_REMOTE) return {
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
  }
}
async function P(e, o, r, s) {
  t("[voice] startRecording called, platform=win32");
  let n = l.of(e),
    d = await u(n),
    a = d.isNativeAudioAvailable() && !0,
    c = s?.silenceDetection !== !1;
  if (a) {
    if (n.nativeRecordingActive || d.isNativeRecordingActive()) d.stopNativeRecording(), n.nativeRecordingActive = !1;
    if (d.startNativeRecording((p) => {
        o(p)
      }, () => {
        if (c) n.nativeRecordingActive = !1, r()
      })) return n.nativeRecordingActive = !0, w
  }
  return t("[voice] Windows native recording unavailable, no fallback"), S
}

function C(e, o, r, s) {
  let n = s?.silenceDetection !== !1,
    d = ["-q", "--buffer", "1024", "-t", "raw", "-r", String(k), "-e", "signed", "-b", "16", "-c", String(E), "-"];
  if (n) d.push("silence", "1", "0.1", b, "1", y, b);
  let a = h("rec", d, {
    stdio: ["pipe", "pipe", "pipe"],
    windowsHide: !0,
    ...au("helper")
  });
  return e.activeRecorder = a, a.stdout?.on("data", (c) => {
    o(c)
  }), a.stderr?.on("data", () => {}), a.on("close", () => {
    e.activeRecorder = null, r()
  }), a.on("error", (c) => {
    t(`[voice] SoX rec spawn failed: ${c instanceof Error?c.message:String(c)}`, {
      level: "error"
    }), e.activeRecorder = null, r()
  }), !0
}

function D(e) {
  let o = l.of(e);
  if (o.nativeRecordingActive && o.audioNapi) {
    o.audioNapi.stopNativeRecording(), o.nativeRecordingActive = !1;
    return
  }
  if (o.activeRecorder) o.activeRecorder.kill("SIGTERM"), o.activeRecorder = null
}
export {
  ue as checkRecordingAvailability, ce as checkVoiceDependencies, le as requestMicrophonePermission, P as startRecording, D as stopRecording
};
