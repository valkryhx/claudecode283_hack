// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  _ie,
  vl
} from "B:/~BUN/root/chunk-1ks9vs37.js";
import {
  fr
} from "B:/~BUN/root/chunk-1g25msn4.js";
import {
  Ue,
  N_
} from "B:/~BUN/root/chunk-eev762xg.js";
import {
  wa
} from "B:/~BUN/root/chunk-n8cnxns2.js";
import {
  zs
} from "B:/~BUN/root/chunk-5xx1vfdh.js";
import {
  x_
} from "B:/~BUN/root/chunk-bkfncj77.js";
import {
  h7e,
  Eks,
  Wk,
  pho
} from "B:/~BUN/root/chunk-j05gjqgd.js";
import {
  Xhr,
  lOn
} from "B:/~BUN/root/chunk-cxcakgnv.js";
import {
  NOt
} from "B:/~BUN/root/chunk-27h4st9h.js";
import {
  join as m
} from "path";

function c(t) {
  return fr(t) !== null
}

function N6n(t, o, n = "  ") {
  let r = m(Ue(), "CLAUDE.md"),
    s = m(o, "CLAUDE.md"),
    i = m(o, ".claude", "CLAUDE.md"),
    p = m(o, "CLAUDE.local.md"),
    f = t.some((e) => e.path === r),
    g = t.some((e) => e.path === s),
    y = [...t.filter((e) => e.type !== "AutoMem" && !NOt(e.path)).map((e) => ({
      ...e,
      exists: !0
    })), ...f ? [] : [{
      path: r,
      type: "User",
      content: "",
      exists: !1
    }], ...g ? [] : [{
      path: s,
      type: "Project",
      content: "",
      exists: !1
    }]],
    h = c(o),
    u = new Map;
  return y.map((e) => {
    let d = zs(e.path),
      a = e.parent ? (u.get(e.parent) ?? 0) + 1 : 0;
    u.set(e.path, a);
    let b = a > 0 ? wa(n, a - 1) : "",
      l = e.type === "User" && e.path === r ? "user" : e.type === "Project" && e.path === s ? "project" : a === 0 && e.type === "Project" && e.path === i ? "project-alt" : a === 0 && e.type === "Local" && e.path === p ? "local" : "other",
      M = l === "user" ? "User instructions" : l === "project" ? "Project instructions" : a > 0 ? `${b}L ${d}` : d,
      R = e.type === "User" ? "Saved in ~/.claude/CLAUDE.md" : l === "project" ? `${h?"Checked in at":"Saved in"} ./CLAUDE.md` : e.parent ? "@-imported" : "";
    return {
      kind: l,
      path: e.path,
      label: M,
      description: R,
      exists: e.exists
    }
  })
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
  return t
}

function H6n(t, o = (n) => n) {
  let n = [];
  for (let r of t)
    if (r.memory) n.push({
      kind: "agent",
      path: pho(r.agentType, r.memory),
      label: `Open ${o(r.agentType)} agent memory`,
      description: `${r.memory} scope`
    });
  return n
}

function T3s() {
  let t = lOn();
  if (t === "open" || t === "pending") return t;
  if (t === "account_off" || t === "local_memory_off") {
    let o = Xhr();
    return o === "denied" ? "closed" : o
  }
  return "closed"
}

function iot() {
  return h7e()
}

function C3s() {
  return !1
}
var $6n = "can't be turned on here; use a session started outside Claude Code";

function U6n({
  enabled: t,
  modelDisabled: o,
  safeMode: n,
  raiseAllowed: r
}) {
  if (o && !t) return {
    status: "unavailable for current model",
    detail: "",
    dim: !0,
    toggleable: !1
  };
  if (n) return {
    status: "off in safe mode",
    detail: `${N_()} to re-enable`,
    dim: !0,
    toggleable: !1
  };
  if (!t && !r) return {
    status: "off",
    detail: $6n,
    dim: !0,
    toggleable: !1
  };
  return {
    status: t ? "on" : "off",
    detail: "",
    dim: !1,
    toggleable: !o
  }
}

function B6n({
  autoMemoryOn: t,
  enabled: o,
  running: n,
  lastDreamAt: r,
  raiseAllowed: s,
  heldDetail: i
}) {
  if (!t) return {
    status: "off while auto-memory is off",
    detail: "",
    dim: !0,
    toggleable: !1
  };
  if (i !== void 0) return {
    status: o ? "on" : "off",
    detail: i,
    dim: !0,
    toggleable: !1
  };
  if (!o && !s) return {
    status: "off",
    detail: $6n,
    dim: !0,
    toggleable: !1
  };
  let p = n ? "running" : r === null ? "" : r === 0 ? "never" : `last ran ${x_(new Date(r))}`;
  return {
    status: o ? "on" : "off",
    detail: p,
    dim: !1,
    toggleable: !0
  }
}
export {
  N6n,
  F6n,
  H6n,
  T3s,
  iot,
  C3s,
  $6n,
  U6n,
  B6n
};
