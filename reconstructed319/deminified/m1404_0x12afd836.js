// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { p } from "B:/~BUN/root/chunk-z6138ats.js";
import { oc } from "B:/~BUN/root/chunk-n8cnxns2.js";
import { _, ee } from "B:/~BUN/root/chunk-2pp12te6.js";
import { o, C, u } from "B:/~BUN/root/chunk-4bfd0jkf.js";
class nW {
  cachedSessionId = null;
  initialized = !1;
  initializeInFlight = null;
  discoverInFlight = null;
  servedCatalogHashes = new Map();
  approvedPlans = new Map();
  verifiedProjectGrants = new Set();
  recardAllProjects = !1;
  recardProjects = new Set();
  grantIneligibleProjects = new Set();
  planStore = new Map();
  consentCache = null;
  consentFetch = null;
  consentCacheGeneration = 0;
  grantsFetch = null;
}
import { randomBytes as j } from "crypto";
var v = p(() => u({
    projectId: o(),
    writes: C(o()),
    deletes: C(o()),
    localDir: o().optional()
  })),
  R = /^plan_[a-z0-9]{1,16}_[a-f0-9]{12}$/;
function b(e) {
  let t = e.toLowerCase().replace(/[^a-z0-9]/g, "").slice(0, 16) || "anon",
    n = j(6).toString("hex");
  return `plan_${t}_${n}`;
}
function vQ(e) {
  return e.replace(/\\/g, "/").split("/").filter(item => item !== "" && item !== ".").join("/");
}
var k = [[/[\u2018\u2019\u201A\u201B\u2039\u203A]/g, "'"], [/[\u201C\u201D\u201E\u201F\u00AB\u00BB]/g, '"'], [/[\u2013\u2014]/g, "-"], [/\u2026/g, "..."], [/[\u00A0\u2000-\u200A\u202F\u205F\u3000]/g, " "], [/[\u200B-\u200F\u2028\u2029\u00AD\uFEFF#?]/g, ""]];
function xIe(e) {
  let t = vQ(oc(e)).split("/"),
    n = k.reduce((acc, [r, i]) => acc.replace(r, i), t.pop() ?? "");
  return n === "" || n === "." || n === ".." ? "" : [...t, n].join("/");
}
function wsr(e) {
  return h(vQ(e)) || h(xIe(e));
}
function h(e) {
  let t = e.toLowerCase();
  return t === "claude.md" || t.startsWith("claude.md/") || t === ".claude" || t.startsWith(".claude/");
}
function R3e(e) {
  return /[*?]/.test(e);
}
function Zui(e) {
  let t = new Map();
  for (let n of e.map(vQ)) {
    let stored = xIe(n),
      r = t.get(stored);
    if (r !== void 0 && r !== n) return {
      stored: stored,
      typed: [r, n]
    };
    t.set(stored, n);
  }
  return;
}
function tAt(e) {
  let t = vQ(e);
  return R3e(t) ? t : xIe(t);
}
var m = 3,
  slt = 256;
function y(e) {
  let t = "",
    n = 0,
    s = 0,
    r = () => {
      if (++s > m) throw Error(`glob "${e}" exceeds ${m} '*'/'**' wildcards`);
    };
  while (n < e.length) {
    let i = e.charAt(n);
    if (i === "*" && e.charAt(n + 1) === "*") {
      if (r(), e.charAt(n + 2) === "/") t += "(?:.*/)?", n += 3;else t += ".*", n += 2;
    } else if (i === "*") r(), t += "[^/]*", n += 1;else if (i === "?") t += "[^/]", n += 1;else if (/[.+^$|()[\]{}\\]/.test(i)) t += "\\" + i, n += 1;else t += i, n += 1;
  }
  return new RegExp(`^${t}$`);
}
function ksr(e, t) {
  let n = xIe(e);
  if (!n) return !1;
  if (n.length > slt) return !1;
  if (n.split("/").includes("..") || n.includes("\x00")) return !1;
  for (let s of t) {
    let r = tAt(s);
    if (R3e(r)) try {
      if (y(r).test(n)) return !0;
    } catch {} else if (r === n) return !0;
  }
  return !1;
}
function efi(e, t) {
  let n = {
      projectId: t.projectId,
      writes: t.writes.map(tAt),
      deletes: t.deletes.map(tAt),
      ...(t.localDir !== void 0 && {
        localDir: t.localDir
      })
    },
    s = v().safeParse(n);
  if (!s.success) throw Error("registerPlan: plan failed shape validation");
  for (let i of [...s.data.writes, ...s.data.deletes]) if (R3e(i)) y(i);
  let r = b(t.projectId);
  return e.planStore.set(r, s.data), r;
}
function vsr(e, t) {
  if (!R.test(t)) return null;
  return e.planStore.get(t) ?? null;
}
function a(e) {
  return e.toLowerCase().replace(/^urn:uuid:/, "").replace(/[{}-]/g, "");
}
function tfi(e) {
  e.planStore.clear();
}
function nAt(e, t) {
  let n = a(t);
  for (let [s, r] of e.planStore) if (a(r.projectId) === n) e.planStore.delete(s);
}
var P = 900000,
  f = 20,
  avn = 80,
  S = 2000,
  x = 256,
  F = /[\x00-\x1f\x7f-\x9f#?,:[\]\u00AD\u061C\u200B-\u200F\u2026\u2028\u2029\u202A-\u202E\u2066-\u2069\uFEFF\uFF0C\uFF1A\uFF3B\uFF3D]/;
function d(e) {
  return F.test(e);
}
function E(e, t) {
  if (e.length > f || t.length > f) return !1;
  for (let r of [...e, ...t]) if (r.length > avn || d(r)) return !1;
  let n = r => r.length === 0 ? 0 : 32 + r.reduce((acc, item) => acc + item.length, 0) + 2 * Math.max(0, r.length - 1);
  return 240 + n(e) + n(t) <= S;
}
function a9o(e) {
  if (e === void 0 || e.length === 0 || e.length > f) return !1;
  for (let r of e) if ((_(r)?.length ?? 1 / 0) > avn || d(r)) return !1;
  let t = Math.max(0, Math.min(200, Math.floor(1800 / e.length) - 95)),
    n = 44 + (t > 0 ? t + 3 : 0);
  return 272 + e.reduce((acc, item) => acc + item.length + n, 0) + 2 * Math.max(0, e.length - 1) <= S;
}
function I(e) {
  return e.length > 0 && _(e).length <= avn && !d(e);
}
var A3e = new Set(["update_sharing", "add_member", "update_member_role"]);
function x3e(e, t) {
  let n = a(t);
  for (let [s, r] of e.approvedPlans) if (a(r.projectId) === n) e.approvedPlans.delete(s);
}
function nfi(e) {
  e.approvedPlans.clear();
}
function P3e(e, t) {
  if (typeof t !== "string" || t.length === 0) return;
  e.verifiedProjectGrants.add(t);
}
function Esr(e, t) {
  return e.verifiedProjectGrants.has(t);
}
function ilt(e, t) {
  let n = a(t);
  for (let s of e.verifiedProjectGrants) if (a(s) === n) e.verifiedProjectGrants.delete(s);
}
function PIe(e, t) {
  return e.recardAllProjects || e.recardProjects.has(a(t));
}
function rAt(e, t) {
  if (typeof t !== "string" || t.length === 0) return;
  e.recardProjects.add(a(t));
}
function rfi(e) {
  e.verifiedProjectGrants.clear(), e.recardAllProjects = !0;
}
function ofi(e, t) {
  if (typeof t !== "string" || t.length === 0) return;
  e.grantIneligibleProjects.add(a(t));
}
function sfi(e, t) {
  return e.grantIneligibleProjects.has(a(t));
}
function ifi(e, t, n, s = Date.now()) {
  if (typeof t !== "string" || t.length === 0) return !1;
  if (x3e(e, n.projectId), !I(n.projectId) || !E(n.writes, n.deletes)) return !1;
  let serverExpiresAtMs = n.serverExpiresAtMs;
  if (typeof serverExpiresAtMs === "number" && !Number.isFinite(serverExpiresAtMs)) return !1;
  if (typeof serverExpiresAtMs === "number" && Number.isFinite(serverExpiresAtMs) && serverExpiresAtMs <= s) return !1;
  return e.approvedPlans.set(t, {
    projectId: n.projectId,
    writes: new Set(n.writes.map(vQ)),
    deletes: new Set(n.deletes.map(vQ)),
    expiresAt: typeof serverExpiresAtMs === "number" && Number.isFinite(serverExpiresAtMs) ? Math.min(serverExpiresAtMs, s + P) : s + P
  }), !0;
}
var D = {
  write_files: e => {
    let files = e.files;
    if (!Array.isArray(files)) return null;
    let targets = [];
    for (let s of files) {
      let r = s?.path;
      if (typeof r !== "string") return null;
      targets.push(r);
    }
    return {
      targets: targets,
      set: "writes"
    };
  },
  delete_files: e => {
    if (e.paths !== void 0 && e.files !== void 0) return null;
    let targets_2 = [];
    if (Array.isArray(e.paths)) {
      for (let n of e.paths) {
        if (typeof n !== "string") return null;
        targets_2.push(n);
      }
      return {
        targets: targets_2,
        set: "deletes"
      };
    }
    if (Array.isArray(e.files)) {
      for (let n of e.files) {
        let s = n?.path;
        if (typeof s !== "string") return null;
        targets_2.push(s);
      }
      return {
        targets: targets_2,
        set: "deletes"
      };
    }
    return null;
  },
  create_support_js: e => {
    let t = e.path;
    if (t === void 0 || t === "") return {
      targets: ["support.js"],
      set: "writes"
    };
    if (typeof t !== "string") return null;
    return {
      targets: [t],
      set: "writes"
    };
  }
};
function A(e) {
  return Object.hasOwn(D, e);
}
function T(e) {
  if (d(e)) return `rejected character in path: ${e}`;
  if (wsr(e)) return `reserved path: ${e}`;
  if (vQ(e).toLowerCase().split("/").some(item => {
    let s = item.replace(/[\s.]+$/, "").replace(/^\s+/, "");
    return s === "claude.md" || s === ".claude" || /~\d/.test(s);
  })) return `reserved segment: ${e}`;
  let t = vQ(e);
  if (!t || t.split("/").some(item => /^\s*\.\.[\s.]*$/.test(item)) || t.includes("\x00")) return `path does not normalize: ${e}`;
  return null;
}
function lvn(e, t) {
  let n = A(e) ? D[e] : void 0;
  if (!n || !t) return {
    outcome: "ask",
    reason: "not a plan-gated operation"
  };
  let s = n(t);
  if (!s) return {
    outcome: "ask",
    reason: "target paths unenumerable"
  };
  let {
    targets: targets_3,
    set: i
  } = s;
  if (targets_3.length === 0) return {
    outcome: "ask",
    reason: "no target paths",
    targets: targets_3
  };
  if (targets_3.length > x) return {
    outcome: "ask",
    reason: `more than ${x} target paths`,
    targets: targets_3
  };
  for (let l of targets_3) {
    let reason = T(l);
    if (reason !== null) return {
      outcome: "ask",
      reason: reason,
      targets: targets_3
    };
  }
  return {
    outcome: "pass",
    targets: targets_3,
    set: i
  };
}
function afi(e, t, n, s = Date.now()) {
  if (!A(t) || !n) return {
    outcome: "ask",
    reason: "not a plan-gated operation"
  };
  let {
    plan_token: plan_token,
    project_id: project_id
  } = n;
  if (typeof plan_token !== "string" || typeof project_id !== "string") return {
    outcome: "ask",
    reason: "missing plan_token or project_id"
  };
  let l = e.approvedPlans.get(plan_token);
  if (!l) return {
    outcome: "ask",
    reason: "plan_token not approved in this process"
  };
  if (s >= l.expiresAt) return e.approvedPlans.delete(plan_token), {
    outcome: "ask",
    reason: "approved plan expired"
  };
  if (l.projectId !== project_id) return {
    outcome: "ask",
    reason: "plan_token is for a different project"
  };
  let c = lvn(t, n);
  if (c.outcome !== "pass") return {
    outcome: "ask",
    reason: c.reason
  };
  let w = c.set === "writes" ? l.writes : l.deletes;
  for (let g of c.targets) if (!w.has(vQ(g))) return {
    outcome: "ask",
    reason: `path not in approved plan: ${g}`
  };
  return {
    outcome: "allow"
  };
}
function lfi(e) {
  for (let t of e) if (t?.type === "text" && typeof t.text === "string") try {
    let n = ee(t.text),
      s = n.plan_token;
    if (typeof s !== "string" || s.length === 0) return null;
    let expires_at = n.expires_at,
      expiresAtMs = typeof expires_at === "number" && Number.isFinite(expires_at * 1000) ? expires_at * 1000 : null;
    return {
      token: s,
      expiresAtMs: expiresAtMs
    };
  } catch {
    return null;
  }
  return null;
}
export { nW, vQ, xIe, wsr, R3e, Zui, tAt, slt, ksr, efi, vsr, tfi, nAt, avn, a9o, A3e, x3e, nfi, P3e, Esr, ilt, PIe, rAt, rfi, ofi, sfi, ifi, lvn, afi, lfi };