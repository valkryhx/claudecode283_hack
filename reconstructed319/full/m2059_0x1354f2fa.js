// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  Ew,
  eM,
  J2e,
  uo,
  oM,
  fe
} from "B:/~BUN/root/chunk-1ks9vs37.js";
import {
  p
} from "B:/~BUN/root/chunk-z6138ats.js";
import {
  B5s,
  j5s
} from "B:/~BUN/root/chunk-z2h80746.js";
import {
  UT
} from "B:/~BUN/root/chunk-5y6c5r5g.js";
import {
  ge,
  Mn,
  ws,
  vr,
  Ft
} from "B:/~BUN/root/chunk-b3kw6jpx.js";
var f = p(() => vr(Ft({
    id: ge(),
    title: ge().optional(),
    text: ge(),
    textIfUnusedLimitReset: ge().optional().catch(void 0),
    footer: ge().optional(),
    priority: Mn().default(0),
    maxImpressions: Mn().default(3),
    accentBar: ws().default(!0),
    requiresModel: ge().optional(),
    fromVersion: ge().optional().catch(""),
    beforeVersion: ge().optional().catch("")
  })).default([])),
  o = [];

function i() {
  let e = oM("tengu_startup_announcements", o),
    t = f().safeParse(e);
  return t.success ? t.data : o
}

function s(e) {
  if (e.requiresModel !== void 0 && !uo(e.requiresModel)) return !1;
  try {
    return (e.fromVersion === void 0 || J2e(e.fromVersion) && Ew({
      ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
      PACKAGE_URL: "@anthropic-ai/claude-code",
      README_URL: "https://code.claude.com/docs/en/overview",
      VERSION: "2.1.319",
      FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
      BUILD_TIME: "2026-11-05T18:14:18Z",
      GIT_SHA: "fbdd7e02e8530e4c2ade8cc67d30104e53d2c8f2",
      HOOKS_WORKER_URL: "B:/~BUN/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js",
      DD_SOURCEMAP_GROUP: "win32"
    }.VERSION, e.fromVersion)) && (e.beforeVersion === void 0 || J2e(e.beforeVersion) && eM({
      ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
      PACKAGE_URL: "@anthropic-ai/claude-code",
      README_URL: "https://code.claude.com/docs/en/overview",
      VERSION: "2.1.319",
      FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
      BUILD_TIME: "2026-11-05T18:14:18Z",
      GIT_SHA: "fbdd7e02e8530e4c2ade8cc67d30104e53d2c8f2",
      HOOKS_WORKER_URL: "B:/~BUN/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js",
      DD_SOURCEMAP_GROUP: "win32"
    }.VERSION, e.beforeVersion))
  } catch {
    return !1
  }
}

function u() {
  let e = fe().announcementImpressions ?? {};
  return i().filter((t) => (e[t.id] ?? 0) < t.maxImpressions && s(t))
}

function lUe(e) {
  let t = UT();
  if (t.startupAnnouncementPick !== void 0) return t.startupAnnouncementPick;
  let n = u().sort((a, c) => c.priority - a.priority)[0],
    r = n?.textIfUnusedLimitReset && B5s() ? {
      ...n,
      text: n.textIfUnusedLimitReset
    } : n;
  if (e && r !== void 0) t.startupAnnouncementPick = r;
  return r
}

function q3s(e, t) {
  if (u().some((n) => n.textIfUnusedLimitReset)) j5s(e, t)
}

function Y3s() {
  let e = i().filter(s).sort((t, n) => n.priority - t.priority)[0];
  if (e === void 0) return !1;
  return JSON.stringify({
    id: e.id,
    title: e.title,
    text: e.text,
    footer: e.footer
  })
}
export {
  lUe,
  q3s,
  Y3s
};
