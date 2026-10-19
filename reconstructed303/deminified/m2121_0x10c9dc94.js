// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { s5, Zi } from "B:/~BUN/root/chunk-hb6x4e3n.js";
import { yr } from "B:/~BUN/root/chunk-2zk4vqr8.js";
import { Pe, Ch } from "B:/~BUN/root/chunk-fbyz9h0p.js";
import { ji } from "B:/~BUN/root/chunk-nggrknsv.js";
import { ts } from "B:/~BUN/root/chunk-xrp58hm9.js";
import { mv } from "B:/~BUN/root/chunk-pjgzz98k.js";
import { n1e, TCo, Wb, Ixr } from "B:/~BUN/root/chunk-c44qc88s.js";
import { xBn, Pen } from "B:/~BUN/root/chunk-dn8rakwm.js";
import { lat } from "B:/~BUN/root/chunk-9grc6xh0.js";
import { join as m } from "path";
function c(t) {
  return yr(t) !== null;
}
function Sbn(t, o, n = "  ") {
  let path = m(Pe(), "CLAUDE.md"),
    path_2 = m(o, "CLAUDE.md"),
    i = m(o, ".claude", "CLAUDE.md"),
    p = m(o, "CLAUDE.local.md"),
    f = t.some(item => item.path === path),
    g = t.some(item => item.path === path_2),
    y = [...t.filter(item => item.type !== "AutoMem" && !lat(item.path)).map(item => ({
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
    let d = ts(item.path),
      a = item.parent ? (u.get(item.parent) ?? 0) + 1 : 0;
    u.set(item.path, a);
    let b = a > 0 ? ji(n, a - 1) : "",
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
function wbn() {
  let t = [{
    kind: "auto",
    path: Zi(),
    label: "Open auto-memory folder",
    description: ""
  }];
  if (s5() && TCo()) t.push({
    kind: "team",
    path: Wb(),
    label: "Open team memory folder",
    description: ""
  });
  return t;
}
function vbn(t, o = n => n) {
  let n = [];
  for (let r of t) if (r.memory) n.push({
    kind: "agent",
    path: Ixr(r.agentType, r.memory),
    label: `Open ${o(r.agentType)} agent memory`,
    description: `${r.memory} scope`
  });
  return n;
}
function k6o() {
  let t = Pen();
  if (t === "open" || t === "pending") return t;
  if (t === "account_off" || t === "local_memory_off") {
    let o = xBn();
    return o === "denied" ? "closed" : o;
  }
  return "closed";
}
function U2e() {
  return n1e();
}
function E6o() {
  return !1;
}
var detail = "can't be turned on here; use a session started outside Claude Code";
function Ebn({
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
    detail: `${Ch()} to re-enable`,
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
function Tbn({
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
  let detail_2 = running ? "running" : lastDreamAt === null ? "" : lastDreamAt === 0 ? "never" : `last ran ${mv(new Date(lastDreamAt))}`;
  return {
    status: enabled_2 ? "on" : "off",
    detail: detail_2,
    dim: !1,
    toggleable: !0
  };
}
export { Sbn, wbn, vbn, k6o, U2e, E6o, detail as kbn, Ebn, Tbn };