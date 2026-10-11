// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.283
import {
  $s
} from "B:/~BUN/root/chunk-gf53qpk6.js";
import {
  Fn
} from "B:/~BUN/root/chunk-339q6g5w.js";
import {
  Se,
  qm
} from "B:/~BUN/root/chunk-4p6z9qq1.js";
import {
  Ys
} from "B:/~BUN/root/chunk-y04k89s2.js";
import {
  nE
} from "B:/~BUN/root/chunk-bpp59nyd.js";
import {
  xo
} from "B:/~BUN/root/chunk-8hs4bwwk.js";
import {
  ux,
  Ah,
  Azn
} from "B:/~BUN/root/chunk-d36ctpgs.js";
import {
  FGe
} from "B:/~BUN/root/chunk-3jyp964r.js";
import {
  join as m
} from "path";

function c(e) {
  return Fn(e) !== null
}

function m2t(e, r, n = "  ") {
  let o = m(Se(), "CLAUDE.md"),
    s = m(r, "CLAUDE.md"),
    d = m(r, ".claude", "CLAUDE.md"),
    u = m(r, "CLAUDE.local.md"),
    y = e.some((t) => t.path === o),
    g = e.some((t) => t.path === s),
    f = [...e.filter((t) => t.type !== "AutoMem" && t.type !== "AutoMemPinned" && !FGe(t.path)).map((t) => ({
      ...t,
      exists: !0
    })), ...y ? [] : [{
      path: o,
      type: "User",
      content: "",
      exists: !1
    }], ...g ? [] : [{
      path: s,
      type: "Project",
      content: "",
      exists: !1
    }]],
    h = c(r),
    l = new Map;
  return f.map((t) => {
    let p = xo(t.path),
      a = t.parent ? (l.get(t.parent) ?? 0) + 1 : 0;
    l.set(t.path, a);
    let b = a > 0 ? Ys(n, a - 1) : "",
      i = t.type === "User" && t.path === o ? "user" : t.type === "Project" && t.path === s ? "project" : a === 0 && t.type === "Project" && t.path === d ? "project-alt" : a === 0 && t.type === "Local" && t.path === u ? "local" : "other",
      M = i === "user" ? "User instructions" : i === "project" ? "Project instructions" : a > 0 ? `${b}L ${p}` : p,
      P = t.type === "User" ? "Saved in ~/.claude/CLAUDE.md" : i === "project" ? `${h?"Checked in at":"Saved in"} ./CLAUDE.md` : t.parent ? "@-imported" : "";
    return {
      kind: i,
      path: t.path,
      label: M,
      description: P,
      exists: t.exists
    }
  })
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
  return e
}

function h2t(e, r = (n) => n) {
  let n = [];
  for (let o of e)
    if (o.memory) n.push({
      kind: "agent",
      path: Azn(o.agentType, o.memory),
      label: `Open ${r(o.agentType)} agent memory`,
      description: `${o.memory} scope`
    });
  return n
}

function y2t({
  enabled: e,
  modelDisabled: r,
  safeMode: n
}) {
  if (r && !e) return {
    status: "unavailable for current model",
    detail: "",
    dim: !0,
    toggleable: !1
  };
  if (n) return {
    status: "off in safe mode",
    detail: `${qm()} to re-enable`,
    dim: !0,
    toggleable: !1
  };
  return {
    status: e ? "on" : "off",
    detail: "",
    dim: !1,
    toggleable: !r
  }
}

function _2t({
  autoMemoryOn: e,
  enabled: r,
  running: n,
  lastDreamAt: o
}) {
  if (!e) return {
    status: "off while auto-memory is off",
    detail: "",
    dim: !0,
    toggleable: !1
  };
  let s = n ? "running" : o === null ? "" : o === 0 ? "never" : `last ran ${nE(new Date(o))}`;
  return {
    status: r ? "on" : "off",
    detail: s,
    dim: !1,
    toggleable: !0
  }
}
export {
  m2t,
  g2t,
  h2t,
  y2t,
  _2t
};
