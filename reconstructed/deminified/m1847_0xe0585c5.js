// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { $s } from "B:/~BUN/root/chunk-gf53qpk6.js";
import { Fn } from "B:/~BUN/root/chunk-339q6g5w.js";
import { Se, qm } from "B:/~BUN/root/chunk-4p6z9qq1.js";
import { Ys } from "B:/~BUN/root/chunk-y04k89s2.js";
import { nE } from "B:/~BUN/root/chunk-bpp59nyd.js";
import { xo } from "B:/~BUN/root/chunk-8hs4bwwk.js";
import { ux, Ah, Azn } from "B:/~BUN/root/chunk-d36ctpgs.js";
import { FGe } from "B:/~BUN/root/chunk-3jyp964r.js";
import { join as m } from "path";
function c(e) {
  return Fn(e) !== null;
}
function m2t(e, r, n = "  ") {
  let path = m(Se(), "CLAUDE.md"),
    path_2 = m(r, "CLAUDE.md"),
    d = m(r, ".claude", "CLAUDE.md"),
    u = m(r, "CLAUDE.local.md"),
    y = e.some(item => item.path === path),
    g = e.some(item => item.path === path_2),
    f = [...e.filter(item => item.type !== "AutoMem" && item.type !== "AutoMemPinned" && !FGe(item.path)).map(item => ({
      ...item,
      exists: !0
    })), ...(y ? [] : [{
      path: path,
      type: "User",
      content: "",
      exists: !1
    }]), ...(g ? [] : [{
      path: path_2,
      type: "Project",
      content: "",
      exists: !1
    }])],
    h = c(r),
    l = new Map();
  return f.map(item => {
    let p = xo(item.path),
      a = item.parent ? (l.get(item.parent) ?? 0) + 1 : 0;
    l.set(item.path, a);
    let b = a > 0 ? Ys(n, a - 1) : "",
      kind = item.type === "User" && item.path === path ? "user" : item.type === "Project" && item.path === path_2 ? "project" : a === 0 && item.type === "Project" && item.path === d ? "project-alt" : a === 0 && item.type === "Local" && item.path === u ? "local" : "other",
      label = kind === "user" ? "User instructions" : kind === "project" ? "Project instructions" : a > 0 ? `${b}L ${p}` : p,
      description = item.type === "User" ? "Saved in ~/.claude/CLAUDE.md" : kind === "project" ? `${h ? "Checked in at" : "Saved in"} ./CLAUDE.md` : item.parent ? "@-imported" : "";
    return {
      kind: kind,
      path: item.path,
      label: label,
      description: description,
      exists: item.exists
    };
  });
}
function g2t() {
  let e = [{
    kind: "auto",
    path: $s(),
    label: "Open auto-memory folder",
    description: ""
  }];
  if (ux()) e.push({
    kind: "team",
    path: Ah(),
    label: "Open team memory folder",
    description: ""
  });
  return e;
}
function h2t(e, r = n => n) {
  let n = [];
  for (let o of e) if (o.memory) n.push({
    kind: "agent",
    path: Azn(o.agentType, o.memory),
    label: `Open ${r(o.agentType)} agent memory`,
    description: `${o.memory} scope`
  });
  return n;
}
function y2t({
  enabled: enabled,
  modelDisabled: modelDisabled,
  safeMode: safeMode
}) {
  if (modelDisabled && !enabled) return {
    status: "unavailable for current model",
    detail: "",
    dim: !0,
    toggleable: !1
  };
  if (safeMode) return {
    status: "off in safe mode",
    detail: `${qm()} to re-enable`,
    dim: !0,
    toggleable: !1
  };
  return {
    status: enabled ? "on" : "off",
    detail: "",
    dim: !1,
    toggleable: !modelDisabled
  };
}
function _2t({
  autoMemoryOn: autoMemoryOn,
  enabled: enabled_2,
  running: running,
  lastDreamAt: lastDreamAt
}) {
  if (!autoMemoryOn) return {
    status: "off while auto-memory is off",
    detail: "",
    dim: !0,
    toggleable: !1
  };
  let detail = running ? "running" : lastDreamAt === null ? "" : lastDreamAt === 0 ? "never" : `last ran ${nE(new Date(lastDreamAt))}`;
  return {
    status: enabled_2 ? "on" : "off",
    detail: detail,
    dim: !1,
    toggleable: !0
  };
}
export { m2t, g2t, h2t, y2t, _2t };