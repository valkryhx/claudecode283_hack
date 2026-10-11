// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.283
import {
  ag,
  kN,
  iJ,
  Lg,
  ia
} from "B:/~BUN/root/chunk-gf53qpk6.js";
import {
  f
} from "B:/~BUN/root/chunk-zv3zxqya.js";
import {
  Ze
} from "B:/~BUN/root/chunk-y04k89s2.js";
import {
  gmt
} from "B:/~BUN/root/chunk-zs3ycjed.js";
import {
  BHe
} from "B:/~BUN/root/chunk-t1afcev5.js";
import {
  Bjn,
  jPr,
  jjn,
  Wjn,
  zjn
} from "B:/~BUN/root/chunk-x8507144.js";
import {
  Pnn,
  tSo,
  nSo,
  bKe
} from "B:/~BUN/root/chunk-z2ca09yj.js";
import {
  o,
  u
} from "B:/~BUN/root/chunk-n8qdr73v.js";
var h = [nSo, Pnn];

function mWe(e) {
  if (e === null) return {
    tagsRead: !1,
    rcChild: !1,
    projectThreadChild: !1,
    attended: !1
  };
  let r = !1;
  r = e.includes("hearth-rc-child");
  let t = e.includes(tSo);
  return {
    tagsRead: !0,
    rcChild: t,
    projectThreadChild: r,
    attended: e.some((n) => h.includes(n)) && !t && !e.includes(bKe)
  }
}

function rKt(e) {
  if (Bjn() || jjn()) return !0;
  return zjn() || e === "spawn" && Wjn()
}

function oKt(e) {
  let r = e.roles.rcChild && !e.modePinned && Bjn(),
    t = r && jPr() && BHe(e.settings()),
    n = e.roles.attended,
    a = !1,
    i = !1;
  n = n || e.roles.projectThreadChild, a = e.roles.projectThreadChild && Wjn(), i = e.roles.projectThreadChild && zjn();
  let m = n && jjn();
  return {
    autoDefault: r,
    autoOverSettings: t,
    artifact: m,
    machineSettings: a,
    autoCompact: i
  }
}
var s = "2.1.270";

function d(e) {
  return Ze(e, "-")
}
var C = f(() => u({
  minVersion: o().refine((e) => e === "" || iJ(e)).optional()
}));

function c() {
  let {
    value: e,
    source: r
  } = ia("tengu_bridge_min_version", {
    minVersion: s
  });
  if (r === "disabled") return null;
  if (r === "fallback" && !Lg()) return {
    minVersion: s,
    unknown: "unanswered"
  };
  let t = C().safeParse(e);
  if (!t.success) return {
    minVersion: s,
    unknown: "malformed"
  };
  let n = t.data.minVersion;
  return {
    minVersion: n && ag(n, s) ? n : s,
    unknown: null
  }
}

function Yqo(e = {
  ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
  PACKAGE_URL: "@anthropic-ai/claude-code",
  README_URL: "https://code.claude.com/docs/en/overview",
  VERSION: "2.1.283",
  FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
  BUILD_TIME: "2026-09-25T00:44:42Z",
  GIT_SHA: "4631ccd7cfe41e69bc72d3b5b9dc7282536e4985",
  HOOKS_WORKER_URL: "B:/~BUN/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js",
  DD_SOURCEMAP_GROUP: "win32"
}.VERSION) {
  let r = c();
  if (r === null) return null;
  if (kN(d(e), r.minVersion)) return `Your version of Claude Code (${e}) is too old for Remote Control.
Version ${r.minVersion} or higher is required. Run \`claude update\` to update.`;
  return null
}

function Xue(e = {
  ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
  PACKAGE_URL: "@anthropic-ai/claude-code",
  README_URL: "https://code.claude.com/docs/en/overview",
  VERSION: "2.1.283",
  FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
  BUILD_TIME: "2026-09-25T00:44:42Z",
  GIT_SHA: "4631ccd7cfe41e69bc72d3b5b9dc7282536e4985",
  HOOKS_WORKER_URL: "B:/~BUN/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js",
  DD_SOURCEMAP_GROUP: "win32"
}.VERSION) {
  let r = c();
  if (r === null) return gmt() === "no-telemetry" ? {
    reason: "floor_unreachable",
    message: `This computer's Claude Code (${e}) cannot take a session started remotely on it: the version such sessions require cannot be received while feature-flag evaluation is off (DISABLE_TELEMETRY or DO_NOT_TRACK is set).`
  } : null;
  switch (r.unknown) {
    case "unanswered":
      return {
        reason: "floor_unanswered", message: `This computer's Claude Code (${e}) cannot take a session started remotely on it: the version such sessions require has not been received from the server.`
      };
    case "malformed":
      return {
        reason: "floor_malformed", message: `This computer's Claude Code (${e}) cannot take a session started remotely on it: the version such sessions require could not be read.`
      };
    case null:
      if (kN(d(e), r.minVersion)) return {
        reason: "below_floor",
        message: `This computer's Claude Code (${e}) is below the version a session started remotely on it requires (${r.minVersion}). Run \`claude update\` to update.`
      };
      return null
  }
}

function rSt(e, r) {
  if (e === null) return r.reason !== "floor_unreachable";
  return mWe(e).projectThreadChild
}
export {
  mWe,
  rKt,
  oKt,
  Yqo,
  Xue,
  rSt
};
