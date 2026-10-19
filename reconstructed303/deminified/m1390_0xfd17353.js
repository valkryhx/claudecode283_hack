// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { Vy, DM, rge, q3, Gi, TJe, _Me, $m, En, YN } from "B:/~BUN/root/chunk-hb6x4e3n.js";
import { Ve, yP, d } from "B:/~BUN/root/chunk-3aez4b53.js";
import { Y } from "B:/~BUN/root/chunk-89mss1tj.js";
import { t } from "B:/~BUN/root/chunk-6za2ez23.js";
import { gjt, l } from "B:/~BUN/root/chunk-c09hf5e4.js";
import { f } from "B:/~BUN/root/chunk-frrkt2bs.js";
import { JNt } from "B:/~BUN/root/chunk-8y0chnnr.js";
import { rxr, kTo, oxr, sxr, ixr } from "B:/~BUN/root/chunk-1g2t7gtx.js";
import { fGn, QMs, ZMs, Xpt } from "B:/~BUN/root/chunk-d128kf6v.js";
import { o, u } from "B:/~BUN/root/chunk-g3snhg6n.js";
var g = [ZMs, fGn];
function ont(e) {
  if (e === null) return {
    tagsRead: !1,
    rcChild: !1,
    projectThreadChild: !1,
    attended: !1
  };
  let projectThreadChild = !1;
  projectThreadChild = e.includes("hearth-rc-child");
  let rcChild = e.includes(QMs);
  return {
    tagsRead: !0,
    rcChild: rcChild,
    projectThreadChild: projectThreadChild,
    attended: e.some(item => g.includes(item)) && !rcChild && !e.includes(Xpt)
  };
}
function YSn(e) {
  if (rxr() || oxr()) return !0;
  return ixr() || e === "spawn" && sxr();
}
function XSn(e) {
  let autoDefault = e.roles.rcChild && !e.modePinned && rxr(),
    autoOverSettings = autoDefault && kTo() && JNt(e.settings()),
    attended = e.roles.attended,
    machineSettings = !1,
    autoCompact = !1;
  attended = attended || e.roles.projectThreadChild, machineSettings = e.roles.projectThreadChild && sxr(), autoCompact = e.roles.projectThreadChild && ixr();
  let artifact = attended && oxr();
  return {
    autoDefault: autoDefault,
    autoOverSettings: autoOverSettings,
    artifact: artifact,
    machineSettings: machineSettings,
    autoCompact: autoCompact
  };
}
var minVersion = "2.1.270",
  _ = f(() => u({
    minVersion: o().refine(e => e === "" || q3(e)).optional()
  }));
function h() {
  let {
    value: value,
    source: source
  } = En("tengu_bridge_min_version", {
    minVersion: minVersion
  });
  if (source === "disabled") return null;
  if (source === "fallback" && !Gi()) return {
    minVersion: minVersion,
    unknown: "unanswered"
  };
  let i = _().safeParse(value);
  if (!i.success) return {
    minVersion: minVersion,
    unknown: "malformed"
  };
  let minVersion_2 = i.data.minVersion;
  return {
    minVersion: minVersion_2 && Vy(minVersion_2, minVersion) ? minVersion_2 : minVersion,
    unknown: null
  };
}
function Yei(e = {
  ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
  PACKAGE_URL: "@anthropic-ai/claude-code",
  README_URL: "https://code.claude.com/docs/en/overview",
  VERSION: "2.1.303",
  FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
  BUILD_TIME: "2026-10-18T20:20:57Z",
  GIT_SHA: "07df2aedd2d01d2f60907b8404acbda187b04072",
  HOOKS_WORKER_URL: "B:/~BUN/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js",
  DD_SOURCEMAP_GROUP: "win32"
}.VERSION) {
  let r = h();
  if (r === null) return null;
  if (DM(rge(e), r.minVersion)) return `Your version of Claude Code (${e}) is too old for Remote Control.
Version ${r.minVersion} or higher is required. Run \`claude update\` to update.`;
  return null;
}
function Zye(e = {
  ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
  PACKAGE_URL: "@anthropic-ai/claude-code",
  README_URL: "https://code.claude.com/docs/en/overview",
  VERSION: "2.1.303",
  FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
  BUILD_TIME: "2026-10-18T20:20:57Z",
  GIT_SHA: "07df2aedd2d01d2f60907b8404acbda187b04072",
  HOOKS_WORKER_URL: "B:/~BUN/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js",
  DD_SOURCEMAP_GROUP: "win32"
}.VERSION) {
  let r = h();
  if (r === null) return gjt() === "no-telemetry" ? {
    reason: "floor_unreachable",
    message: `This computer's Claude Code (${e}) cannot take a session started remotely on it: the version such sessions require cannot be received while feature-flag evaluation is off (DISABLE_TELEMETRY or DO_NOT_TRACK is set).`
  } : null;
  switch (r.unknown) {
    case "unanswered":
      return {
        reason: "floor_unanswered",
        message: `This computer's Claude Code (${e}) cannot take a session started remotely on it: the version such sessions require has not been received from the server.`
      };
    case "malformed":
      return {
        reason: "floor_malformed",
        message: `This computer's Claude Code (${e}) cannot take a session started remotely on it: the version such sessions require could not be read.`
      };
    case null:
      if (DM(rge(e), r.minVersion)) return {
        reason: "below_floor",
        message: `This computer's Claude Code (${e}) is below the version a session started remotely on it requires (${r.minVersion}). Run \`claude update\` to update.`
      };
      return null;
  }
}
var p = 1e4,
  C = 500;
async function sKr(e, r, i, s = {
  ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
  PACKAGE_URL: "@anthropic-ai/claude-code",
  README_URL: "https://code.claude.com/docs/en/overview",
  VERSION: "2.1.303",
  FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
  BUILD_TIME: "2026-10-18T20:20:57Z",
  GIT_SHA: "07df2aedd2d01d2f60907b8404acbda187b04072",
  HOOKS_WORKER_URL: "B:/~BUN/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js",
  DD_SOURCEMAP_GROUP: "win32"
}.VERSION) {
  try {
    if (!$m() || !_Me()) return e;
    i.inFlight ??= YN().catch(n => t(`[bridge:floor] Flag refresh failed: ${d(n)}`, {
      level: "error"
    })).finally(() => {
      i.inFlight = void 0;
    });
    for (let n = 0; n < p && !r.aborted; n += C) {
      await Y(C, r);
      let a = h();
      if (r.aborted || a === null) break;
      if (a.unknown !== "unanswered") return Zye(s);
      if (i.inFlight === void 0 && !TJe()) break;
    }
  } catch (error) {
    if (Ve(error) || error instanceof yP) t(`[bridge:floor] Hold ended without an answer: ${d(error)}`, {
      level: "error"
    });else l(error);
  }
  return e;
}
function bvt(e, r) {
  if (e === null) return r.reason !== "floor_unreachable";
  return ont(e).projectThreadChild;
}
export { ont, YSn, XSn, Yei, Zye, sKr, bvt };