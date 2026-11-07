// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { _ie, vl } from "B:/~BUN/root/chunk-1ks9vs37.js";
import { fr } from "B:/~BUN/root/chunk-1g25msn4.js";
import { Ue, N_ } from "B:/~BUN/root/chunk-eev762xg.js";
import { wa } from "B:/~BUN/root/chunk-n8cnxns2.js";
import { zs } from "B:/~BUN/root/chunk-5xx1vfdh.js";
import { x_ } from "B:/~BUN/root/chunk-bkfncj77.js";
import { h7e, Eks, Wk, pho } from "B:/~BUN/root/chunk-j05gjqgd.js";
import { Xhr, lOn } from "B:/~BUN/root/chunk-cxcakgnv.js";
import { NOt } from "B:/~BUN/root/chunk-27h4st9h.js";
import { join as m } from "path";
function c(t) {
  return fr(t) !== null;
}
function N6n(t, o, n = "  ") {
  let path = m(Ue(), "CLAUDE.md"),
    path_2 = m(o, "CLAUDE.md"),
    i = m(o, ".claude", "CLAUDE.md"),
    p = m(o, "CLAUDE.local.md"),
    f = t.some(item => item.path === path),
    g = t.some(item => item.path === path_2),
    y = [...t.filter(item => item.type !== "AutoMem" && !NOt(item.path)).map(item => ({
      ...item,
      exists: !0
    })), ...(f ? [] : [{
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
    h = c(o),
    u = new Map();
  return y.map(item => {
    let d = zs(item.path),
      a = item.parent ? (u.get(item.parent) ?? 0) + 1 : 0;
    u.set(item.path, a);
    let b = a > 0 ? wa(n, a - 1) : "",
      kind = item.type === "User" && item.path === path ? "user" : item.type === "Project" && item.path === path_2 ? "project" : a === 0 && item.type === "Project" && item.path === i ? "project-alt" : a === 0 && item.type === "Local" && item.path === p ? "local" : "other",
      label = kind === "user" ? "User instructions" : kind === "project" ? "Project instructions" : a > 0 ? `${b}L ${d}` : d,
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
function F6n() {
  let t = [{
    kind: "auto",
    path: vl(),
    label: "Open auto-memory folder",
    description: ""
  }];
  if (_ie() && Eks()) t.push({
    kind: "team",
    path: Wk(),
    label: "Open team memory folder",
    description: ""
  });
  return t;
}
function H6n(t, o = n => n) {
  let n = [];
  for (let r of t) if (r.memory) n.push({
    kind: "agent",
    path: pho(r.agentType, r.memory),
    label: `Open ${o(r.agentType)} agent memory`,
    description: `${r.memory} scope`
  });
  return n;
}
function T3s() {
  let t = lOn();
  if (t === "open" || t === "pending") return t;
  if (t === "account_off" || t === "local_memory_off") {
    let o = Xhr();
    return o === "denied" ? "closed" : o;
  }
  return "closed";
}
function iot() {
  return h7e();
}
function C3s() {
  return !1;
}
var detail = "can't be turned on here; use a session started outside Claude Code";
function U6n({
  enabled: enabled,
  modelDisabled: modelDisabled,
  safeMode: safeMode,
  raiseAllowed: raiseAllowed
}) {
  if (modelDisabled && !enabled) return {
    status: "unavailable for current model",
    detail: "",
    dim: !0,
    toggleable: !1
  };
  if (safeMode) return {
    status: "off in safe mode",
    detail: `${N_()} to re-enable`,
    dim: !0,
    toggleable: !1
  };
  if (!enabled && !raiseAllowed) return {
    status: "off",
    detail: detail,
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
function B6n({
  autoMemoryOn: autoMemoryOn,
  enabled: enabled_2,
  running: running,
  lastDreamAt: lastDreamAt,
  raiseAllowed: raiseAllowed_2,
  heldDetail: i
}) {
  if (!autoMemoryOn) return {
    status: "off while auto-memory is off",
    detail: "",
    dim: !0,
    toggleable: !1
  };
  if (i !== void 0) return {
    status: enabled_2 ? "on" : "off",
    detail: i,
    dim: !0,
    toggleable: !1
  };
  if (!enabled_2 && !raiseAllowed_2) return {
    status: "off",
    detail: detail,
    dim: !0,
    toggleable: !1
  };
  let detail_2 = running ? "running" : lastDreamAt === null ? "" : lastDreamAt === 0 ? "never" : `last ran ${x_(new Date(lastDreamAt))}`;
  return {
    status: enabled_2 ? "on" : "off",
    detail: detail_2,
    dim: !1,
    toggleable: !0
  };
}
export { N6n, F6n, H6n, T3s, iot, C3s, detail as $6n, U6n, B6n };