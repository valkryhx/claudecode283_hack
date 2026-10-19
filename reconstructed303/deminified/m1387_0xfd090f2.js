// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { hzt, Yet } from "B:/~BUN/root/chunk-r4vy2wed.js";
import { Zt } from "B:/~BUN/root/chunk-ekswf6ps.js";
function RKo(startedAt) {
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
function AKo(e, a, startedAt_2) {
  switch (a.kind) {
    case "checking":
      return a.folder === !0 && !e.folder ? {
        ...e,
        folder: !0
      } : e;
    case "bundling":
      {
        if (e.fallback !== null || e.steps.some(item => item.id === "bundle") || !e.steps.some(item => item.id === "create" && item.status === "pending")) return e;
        let t = s(e, "check", "completed", startedAt_2);
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
        let t = s(e, "bundle", "completed", startedAt_2);
        return t === e ? e : {
          ...d(t, "upload", startedAt_2),
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
        let n = t === void 0 ? e : s(e, t.id, "failed", startedAt_2);
        return {
          ...n,
          steps: n.steps.filter(item => !(item.id === "upload" && item.status === "pending")),
          fallback: a.fallback
        };
      }
    case "creating":
      return d(s(s(e, "check", "completed", startedAt_2), "upload", "completed", startedAt_2), "create", startedAt_2);
    case "request_sent":
      return e.requestSent ? e : {
        ...e,
        requestSent: !0
      };
    case "session_exists":
      return e;
    case "created":
      return s(e, "create", "completed", startedAt_2);
  }
}
function s(e, a, status, completedAt) {
  return e.steps.some(item => item.id === a && item.status === "running") ? {
    ...e,
    steps: e.steps.map(item => item.id === a && item.status === "running" ? {
      ...item,
      status: status,
      completedAt: completedAt
    } : item)
  } : e;
}
function d(e, a, startedAt_3) {
  return e.steps.some(item => item.id === a && item.status === "pending") ? {
    ...e,
    steps: e.steps.map(item => item.id === a && item.status === "pending" ? {
      ...item,
      status: "running",
      startedAt: startedAt_3
    } : item)
  } : e;
}
function Aet(e) {
  let a = e.steps.findLast(r => r.status !== "pending");
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
var u = {
  all: "with history",
  current_branch: "current branch only",
  head: "current history only",
  squashed: "snapshot without history"
};
function ZWr(e, a, r) {
  return {
    label: o(e, a),
    annotation: `${c(e, a)}${Yet(e, r)}`,
    detail: i(e, a)
  };
}
function i(e, a) {
  return;
}
function o(e, {
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
function c(e, {
  bundle: bundle,
  folder: folder_2
}) {
  if (bundle === null || e.status !== "running" && e.status !== "completed") return "";
  let t = Zt(bundle.sizeBytes);
  switch (e.id) {
    case "bundle":
      return e.status === "completed" ? folder_2 ? ` \xB7 ${t}` : ` \xB7 ${t}, ${u[bundle.scope]}` : "";
    case "upload":
      return e.status === "completed" ? ` \xB7 ${t}` : ` ${t}`;
    case "check":
    case "create":
      return "";
  }
}
function ezr(e) {
  let a = hzt("new");
  return Aet(e) === "created" ? a.replace(/^Setting up/, "Set up") : `${a}\u2026`;
}
function xKo(e) {
  return e !== null && e.requestSent ? "Cancelled after the create request was sent, so a cloud session may still have been created" : "Cancelled before a cloud session was created";
}
export { RKo, AKo, Aet, ZWr, ezr, xKo };