// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { Xd } from "B:/~BUN/root/chunk-y04k89s2.js";
import { Jgt, c1e } from "B:/~BUN/root/chunk-3w1jmaht.js";
import { oho, nvr } from "B:/~BUN/root/chunk-3jyp964r.js";
import { Ut } from "B:/~BUN/root/chunk-qbrwdgwc.js";
function r4r(startedAt) {
  return {
    steps: [{
      id: "check",
      status: "running",
      startedAt: startedAt
    }, {
      id: "create",
      status: "pending"
    }],
    rerouted: !1,
    folder: !1,
    bundle: null,
    fallback: null,
    requestSent: !1
  };
}
function o4r(e, a, startedAt_2) {
  switch (a.kind) {
    case "checking":
      return a.folder === !0 && !e.folder ? {
        ...e,
        folder: !0
      } : e;
    case "bundling":
      {
        if (e.fallback !== null || e.steps.some(item => item.id === "bundle") || !e.steps.some(item => item.id === "create" && item.status === "pending")) return e;
        let t = d(e, "check", "completed", startedAt_2);
        return {
          ...t,
          steps: t.steps.flatMap(item => item.id === "create" ? [{
            id: "bundle",
            status: "running",
            startedAt: startedAt_2
          }, ...(a.uploadedBySync === !0 ? [] : [{
            id: "upload",
            status: "pending"
          }]), item] : [item]),
          rerouted: a.rerouted,
          folder: a.folder === !0
        };
      }
    case "bundled":
      {
        let t = d(e, "bundle", "completed", startedAt_2);
        return t === e ? e : {
          ...u(t, "upload", startedAt_2),
          bundle: {
            sizeBytes: a.sizeBytes,
            scope: a.scope
          }
        };
      }
    case "bundle_failed":
      {
        let t = e.steps.find(item => item.status === "running" && (item.id === "bundle" || item.id === "upload"));
        if (t === void 0 && e.fallback !== null) return e;
        let r = t === void 0 ? e : d(e, t.id, "failed", startedAt_2);
        return {
          ...r,
          steps: r.steps.filter(item => !(item.id === "upload" && item.status === "pending")),
          fallback: a.fallback
        };
      }
    case "creating":
      return u(d(d(e, "check", "completed", startedAt_2), "upload", "completed", startedAt_2), "create", startedAt_2);
    case "request_sent":
      return e.requestSent ? e : {
        ...e,
        requestSent: !0
      };
    case "created":
      return d(e, "create", "completed", startedAt_2);
  }
}
function d(e, a, status, completedAt) {
  return e.steps.some(item => item.id === a && item.status === "running") ? {
    ...e,
    steps: e.steps.map(item => item.id === a && item.status === "running" ? {
      ...item,
      status: status,
      completedAt: completedAt
    } : item)
  } : e;
}
function u(e, a, startedAt_3) {
  return e.steps.some(item => item.id === a && item.status === "pending") ? {
    ...e,
    steps: e.steps.map(item => item.id === a && item.status === "pending" ? {
      ...item,
      status: "running",
      startedAt: startedAt_3
    } : item)
  } : e;
}
function qBe(e) {
  let a = e.steps.findLast(n => n.status !== "pending");
  switch (a?.id) {
    case void 0:
    case "check":
      return "checking";
    case "bundle":
      return "bundling";
    case "upload":
      return "uploading";
    case "create":
      return a.status === "completed" ? "created" : "creating";
  }
}
var o = {
  all: "with history",
  current_branch: "current branch only",
  head: "current history only",
  squashed: "snapshot without history"
};
function W9n(e, a, n) {
  return {
    label: s(e, a),
    annotation: `${i(e, a)}${c1e(e, n)}`,
    detail: e.status === "failed" && a.fallback !== null ? [`${Xd(oho(a.fallback))}; starting from the tip of the branch on its remote rather than your checkout's commit, and file sync is off for this session`, nvr(a.fallback)].filter(item => item !== void 0).join(". ") : void 0
  };
}
function s(e, {
  rerouted: rerouted,
  folder: folder
}) {
  let t = e.status === "completed";
  switch (e.id) {
    case "check":
      if (folder) return t ? "Checked this folder" : "Checking this folder";
      return t ? "Checked this checkout" : "Checking this checkout";
    case "bundle":
      if (folder) return t ? "Packaged this folder" : "Packaging this folder";
      if (rerouted) return t ? "Packaged local changes" : "Packaging local changes";
      return t ? "Packaged this repository" : "Packaging this repository";
    case "upload":
      if (rerouted) return t ? "Uploaded your working tree" : "Uploading your working tree";
      return t ? "Uploaded this repository" : "Uploading this repository";
    case "create":
      return t ? "Created cloud session" : "Creating cloud session";
  }
}
function i(e, {
  bundle: bundle,
  folder: folder_2
}) {
  if (bundle === null || e.status !== "running" && e.status !== "completed") return "";
  let t = Ut(bundle.sizeBytes);
  switch (e.id) {
    case "bundle":
      return e.status === "completed" ? folder_2 ? ` \xB7 ${t}` : ` \xB7 ${t}, ${o[bundle.scope]}` : "";
    case "upload":
      return e.status === "completed" ? ` \xB7 ${t}` : ` ${t}`;
    case "check":
    case "create":
      return "";
  }
}
function z9n(e) {
  let a = Jgt("new");
  return qBe(e) === "created" ? a.replace(/^Setting up/, "Set up") : `${a}\u2026`;
}
function s4r(e) {
  return e !== null && e.requestSent ? "Cancelled after the create request was sent, so a cloud session may still have been created" : "Cancelled before a cloud session was created";
}
export { r4r, o4r, qBe, W9n, z9n, s4r };