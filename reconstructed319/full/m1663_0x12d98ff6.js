// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  WS,
  eM,
  zNe,
  Xee,
  qi,
  wFe,
  PVe,
  Oh,
  pn,
  lH
} from "B:/~BUN/root/chunk-1ks9vs37.js";
import {
  We,
  A0,
  d
} from "B:/~BUN/root/chunk-y2g9f85n.js";
import {
  J
} from "B:/~BUN/root/chunk-r5zmhp23.js";
import {
  t
} from "B:/~BUN/root/chunk-2pp12te6.js";
import {
  mcn,
  a
} from "B:/~BUN/root/chunk-xrwdh0g4.js";
import {
  p
} from "B:/~BUN/root/chunk-z6138ats.js";
import {
  Tnn
} from "B:/~BUN/root/chunk-6j3fjnhn.js";
import {
  Mpo,
  ESs,
  Dpo,
  Lpo,
  Npo,
  Fpo,
  ZZt
} from "B:/~BUN/root/chunk-jmka9ye7.js";
import {
  wkr,
  _$i,
  b$i,
  Kpt
} from "B:/~BUN/root/chunk-7knn76yc.js";
import {
  o,
  u
} from "B:/~BUN/root/chunk-4bfd0jkf.js";
var R = [b$i, wkr];

function bEt(e) {
  if (e === null) return {
    tagsRead: !1,
    rcChild: !1,
    projectThreadChild: !1,
    attended: !1,
    mayBeAttended: !0
  };
  let r = !1;
  r = e.includes("hearth-rc-child");
  let n = e.includes(_$i);
  return {
    tagsRead: !0,
    rcChild: n,
    projectThreadChild: r,
    attended: e.some((l) => R.includes(l)) && !n && !e.includes(Kpt),
    mayBeAttended: !n && !r && !e.includes(Kpt)
  }
}

function y8n(e) {
  if (Mpo() || Dpo() || e === "spawn" && ZZt()) return !0;
  return Npo() || Fpo() || e === "spawn" && Lpo()
}

function _8n(e) {
  let r = e.roles.rcChild && !e.modePinned && Mpo(),
    n = r && ESs() && Tnn(e.settings()),
    l = e.roles.attended,
    i = !1,
    s = !1,
    h = !1;
  l = l || e.roles.projectThreadChild, i = e.roles.projectThreadChild && Lpo(), s = e.roles.projectThreadChild && Npo(), h = e.roles.projectThreadChild && Fpo();
  let E = l && Dpo();
  return {
    autoDefault: r,
    autoOverSettings: n,
    artifact: E,
    machineSettings: i,
    autoCompact: s,
    projectsEntrypoint: h,
    cliEntrypoint: e.roles.mayBeAttended && ZZt()
  }
}
var c = "2.1.270",
  g = p(() => u({
    minVersion: o().refine((e) => e === "" || Xee(e)).optional()
  }));

function f() {
  let {
    value: e,
    source: r
  } = pn("tengu_bridge_min_version", {
    minVersion: c
  });
  if (r === "disabled") return null;
  if (r === "fallback" && !qi()) return {
    minVersion: c,
    unknown: "unanswered"
  };
  let n = g().safeParse(e);
  if (!n.success) return {
    minVersion: c,
    unknown: "malformed"
  };
  let l = n.data.minVersion;
  return {
    minVersion: l && WS(l, c) ? l : c,
    unknown: null
  }
}

function gha(e = {
  ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
  PACKAGE_URL: "@anthropic-ai/claude-code",
  README_URL: "https://code.claude.com/docs/en/overview",
  VERSION: "2.1.319",
  FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
  BUILD_TIME: "2026-11-05T18:14:18Z",
  GIT_SHA: "fbdd7e02e8530e4c2ade8cc67d30104e53d2c8f2",
  HOOKS_WORKER_URL: "B:/~BUN/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js",
  DD_SOURCEMAP_GROUP: "win32"
}.VERSION) {
  let r = f();
  if (r === null) return null;
  if (eM(zNe(e), r.minVersion)) return `Your version of Claude Code (${e}) is too old for Remote Control.
Version ${r.minVersion} or higher is required. Run \`claude update\` to update.`;
  return null
}

function XPe(e = {
  ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
  PACKAGE_URL: "@anthropic-ai/claude-code",
  README_URL: "https://code.claude.com/docs/en/overview",
  VERSION: "2.1.319",
  FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
  BUILD_TIME: "2026-11-05T18:14:18Z",
  GIT_SHA: "fbdd7e02e8530e4c2ade8cc67d30104e53d2c8f2",
  HOOKS_WORKER_URL: "B:/~BUN/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js",
  DD_SOURCEMAP_GROUP: "win32"
}.VERSION) {
  let r = f();
  if (r === null) return mcn() === "no-telemetry" ? {
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
      if (eM(zNe(e), r.minVersion)) return {
        reason: "below_floor",
        message: `This computer's Claude Code (${e}) is below the version a session started remotely on it requires (${r.minVersion}). Run \`claude update\` to update.`
      };
      return null
  }
}
var _ = 1e4,
  C = 500;
async function eUo(e, r, n, l = {
  ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
  PACKAGE_URL: "@anthropic-ai/claude-code",
  README_URL: "https://code.claude.com/docs/en/overview",
  VERSION: "2.1.319",
  FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
  BUILD_TIME: "2026-11-05T18:14:18Z",
  GIT_SHA: "fbdd7e02e8530e4c2ade8cc67d30104e53d2c8f2",
  HOOKS_WORKER_URL: "B:/~BUN/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js",
  DD_SOURCEMAP_GROUP: "win32"
}.VERSION) {
  try {
    if (!Oh() || !PVe()) return e;
    n.inFlight ??= lH().catch((i) => t(`[bridge:floor] Flag refresh failed: ${d(i)}`, {
      level: "error"
    })).finally(() => {
      n.inFlight = void 0
    });
    for (let i = 0; i < _ && !r.aborted; i += C) {
      await J(C, r);
      let s = f();
      if (r.aborted || s === null) break;
      if (s.unknown !== "unanswered") return XPe(l);
      if (n.inFlight === void 0 && !wFe()) break
    }
  } catch (i) {
    if (We(i) || i instanceof A0) t(`[bridge:floor] Hold ended without an answer: ${d(i)}`, {
      level: "error"
    });
    else a(i)
  }
  return e
}

function _2t(e, r) {
  if (e === null) return r.reason !== "floor_unreachable";
  return bEt(e).projectThreadChild
}
export {
  bEt,
  y8n,
  _8n,
  gha,
  XPe,
  eUo,
  _2t
};
