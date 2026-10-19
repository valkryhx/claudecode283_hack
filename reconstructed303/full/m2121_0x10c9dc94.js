// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.303
import {
  s5,
  Zi
} from "B:/~BUN/root/chunk-hb6x4e3n.js";
import {
  yr
} from "B:/~BUN/root/chunk-2zk4vqr8.js";
import {
  Pe,
  Ch
} from "B:/~BUN/root/chunk-fbyz9h0p.js";
import {
  ji
} from "B:/~BUN/root/chunk-nggrknsv.js";
import {
  ts
} from "B:/~BUN/root/chunk-xrp58hm9.js";
import {
  mv
} from "B:/~BUN/root/chunk-pjgzz98k.js";
import {
  n1e,
  TCo,
  Wb,
  Ixr
} from "B:/~BUN/root/chunk-c44qc88s.js";
import {
  xBn,
  Pen
} from "B:/~BUN/root/chunk-dn8rakwm.js";
import {
  lat
} from "B:/~BUN/root/chunk-9grc6xh0.js";
import {
  join as m
} from "path";

function c(t) {
  return yr(t) !== null
}

function Sbn(t, o, n = "  ") {
  let r = m(Pe(), "CLAUDE.md"),
    s = m(o, "CLAUDE.md"),
    i = m(o, ".claude", "CLAUDE.md"),
    p = m(o, "CLAUDE.local.md"),
    f = t.some((e) => e.path === r),
    g = t.some((e) => e.path === s),
    y = [...t.filter((e) => e.type !== "AutoMem" && !lat(e.path)).map((e) => ({
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
    let d = ts(e.path),
      a = e.parent ? (u.get(e.parent) ?? 0) + 1 : 0;
    u.set(e.path, a);
    let b = a > 0 ? ji(n, a - 1) : "",
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
  return t
}

function vbn(t, o = (n) => n) {
  let n = [];
  for (let r of t)
    if (r.memory) n.push({
      kind: "agent",
      path: Ixr(r.agentType, r.memory),
      label: `Open ${o(r.agentType)} agent memory`,
      description: `${r.memory} scope`
    });
  return n
}

function k6o() {
  let t = Pen();
  if (t === "open" || t === "pending") return t;
  if (t === "account_off" || t === "local_memory_off") {
    let o = xBn();
    return o === "denied" ? "closed" : o
  }
  return "closed"
}

function U2e() {
  return n1e()
}

function E6o() {
  return !1
}
var kbn = "can't be turned on here; use a session started outside Claude Code";

function Ebn({
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
    detail: `${Ch()} to re-enable`,
    dim: !0,
    toggleable: !1
  };
  if (!t && !r) return {
    status: "off",
    detail: kbn,
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

function Tbn({
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
    detail: kbn,
    dim: !0,
    toggleable: !1
  };
  let p = n ? "running" : r === null ? "" : r === 0 ? "never" : `last ran ${mv(new Date(r))}`;
  return {
    status: o ? "on" : "off",
    detail: p,
    dim: !1,
    toggleable: !0
  }
}
export {
  Sbn,
  wbn,
  vbn,
  k6o,
  U2e,
  E6o,
  kbn,
  Ebn,
  Tbn
};
