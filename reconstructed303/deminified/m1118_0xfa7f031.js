// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { f } from "B:/~BUN/root/chunk-frrkt2bs.js";
import { _, J } from "B:/~BUN/root/chunk-6za2ez23.js";
import { o, T, u } from "B:/~BUN/root/chunk-g3snhg6n.js";
class $F {
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
import { randomBytes as A } from "crypto";
var j = f(() => u({
    projectId: o(),
    writes: T(o()),
    deletes: T(o()),
    localDir: o().optional()
  })),
  v = /^plan_[a-z0-9]{1,16}_[a-f0-9]{12}$/;
function R(e) {
  let t = e.toLowerCase().replace(/[^a-z0-9]/g, "").slice(0, 16) || "anon",
    n = A(6).toString("hex");
  return `plan_${t}_${n}`;
}
function O0(e) {
  return e.replace(/\\/g, "/").split("/").filter(item => item !== "" && item !== ".").join("/");
}
function GRn(e) {
  let t = O0(e).toLowerCase();
  return t === "claude.md" || t.startsWith("claude.md/") || t === ".claude" || t.startsWith(".claude/");
}
function ATt(e) {
  return /[*?]/.test(e);
}
var h = 3,
  xTt = 256;
function m(e) {
  let t = "",
    n = 0,
    s = 0,
    r = () => {
      if (++s > h) throw Error(`glob "${e}" exceeds ${h} '*'/'**' wildcards`);
    };
  while (n < e.length) {
    let i = e.charAt(n);
    if (i === "*" && e.charAt(n + 1) === "*") {
      if (r(), e.charAt(n + 2) === "/") t += "(?:.*/)?", n += 3;else t += ".*", n += 2;
    } else if (i === "*") r(), t += "[^/]*", n += 1;else if (i === "?") t += "[^/]", n += 1;else if (/[.+^$|()[\]{}\\]/.test(i)) t += "\\" + i, n += 1;else t += i, n += 1;
  }
  return new RegExp(`^${t}$`);
}
function VRn(e, t) {
  let n = O0(e);
  if (!n) return !1;
  if (n.length > xTt) return !1;
  if (n.split("/").includes("..") || n.includes("\x00")) return !1;
  for (let s of t) {
    let r = O0(s);
    if (ATt(r)) try {
      if (m(r).test(n)) return !0;
    } catch {} else if (r === n) return !0;
  }
  return !1;
}
function Hns(e, t) {
  let n = {
      projectId: t.projectId,
      writes: t.writes.map(O0),
      deletes: t.deletes.map(O0),
      ...(t.localDir !== void 0 && {
        localDir: t.localDir
      })
    },
    s = j().safeParse(n);
  if (!s.success) throw Error("registerPlan: plan failed shape validation");
  for (let i of [...s.data.writes, ...s.data.deletes]) if (ATt(i)) m(i);
  let r = R(t.projectId);
  return e.planStore.set(r, s.data), r;
}
function qRn(e, t) {
  if (!v.test(t)) return null;
  return e.planStore.get(t) ?? null;
}
function a(e) {
  return e.toLowerCase().replace(/^urn:uuid:/, "").replace(/[{}-]/g, "");
}
function $ns(e) {
  e.planStore.clear();
}
function Aot(e, t) {
  let n = a(t);
  for (let [s, r] of e.planStore) if (a(r.projectId) === n) e.planStore.delete(s);
}
var y = 900000,
  d = 20,
  sYt = 80,
  x = 2000,
  P = 256,
  b = /[\x00-\x1f\x7f-\x9f#?,:[\]\u00AD\u061C\u200B-\u200F\u2026\u2028\u2029\u202A-\u202E\u2066-\u2069\uFEFF\uFF0C\uFF1A\uFF3B\uFF3D]/;
function p(e) {
  return b.test(e);
}
function k(e, t) {
  if (e.length > d || t.length > d) return !1;
  for (let r of [...e, ...t]) if (r.length > sYt || p(r)) return !1;
  let n = r => r.length === 0 ? 0 : 32 + r.reduce((acc, item) => acc + item.length, 0) + 2 * Math.max(0, r.length - 1);
  return 240 + n(e) + n(t) <= x;
}
function PJr(e) {
  if (e === void 0 || e.length === 0 || e.length > d) return !1;
  for (let r of e) if ((_(r)?.length ?? 1 / 0) > sYt || p(r)) return !1;
  let t = Math.max(0, Math.min(200, Math.floor(1800 / e.length) - 95)),
    n = 44 + (t > 0 ? t + 3 : 0);
  return 272 + e.reduce((acc, item) => acc + item.length + n, 0) + 2 * Math.max(0, e.length - 1) <= x;
}
function F(e) {
  return e.length > 0 && _(e).length <= sYt && !p(e);
}
var MNe = new Set(["update_sharing", "add_member", "update_member_role"]);
function DNe(e, t) {
  let n = a(t);
  for (let [s, r] of e.approvedPlans) if (a(r.projectId) === n) e.approvedPlans.delete(s);
}
function Uns(e) {
  e.approvedPlans.clear();
}
function LNe(e, t) {
  if (typeof t !== "string" || t.length === 0) return;
  e.verifiedProjectGrants.add(t);
}
function KRn(e, t) {
  return e.verifiedProjectGrants.has(t);
}
function aKe(e, t) {
  let n = a(t);
  for (let s of e.verifiedProjectGrants) if (a(s) === n) e.verifiedProjectGrants.delete(s);
}
function X_e(e, t) {
  return e.recardAllProjects || e.recardProjects.has(a(t));
}
function xot(e, t) {
  if (typeof t !== "string" || t.length === 0) return;
  e.recardProjects.add(a(t));
}
function Bns(e) {
  e.verifiedProjectGrants.clear(), e.recardAllProjects = !0;
}
function jns(e, t) {
  if (typeof t !== "string" || t.length === 0) return;
  e.grantIneligibleProjects.add(a(t));
}
function Wns(e, t) {
  return e.grantIneligibleProjects.has(a(t));
}
function zns(e, t, n, s = Date.now()) {
  if (typeof t !== "string" || t.length === 0) return !1;
  if (DNe(e, n.projectId), !F(n.projectId) || !k(n.writes, n.deletes)) return !1;
  let serverExpiresAtMs = n.serverExpiresAtMs;
  if (typeof serverExpiresAtMs === "number" && !Number.isFinite(serverExpiresAtMs)) return !1;
  if (typeof serverExpiresAtMs === "number" && Number.isFinite(serverExpiresAtMs) && serverExpiresAtMs <= s) return !1;
  return e.approvedPlans.set(t, {
    projectId: n.projectId,
    writes: new Set(n.writes.map(O0)),
    deletes: new Set(n.deletes.map(O0)),
    expiresAt: typeof serverExpiresAtMs === "number" && Number.isFinite(serverExpiresAtMs) ? Math.min(serverExpiresAtMs, s + y) : s + y
  }), !0;
}
var S = {
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
function D(e) {
  return Object.hasOwn(S, e);
}
function C(e) {
  if (p(e)) return `rejected character in path: ${e}`;
  if (GRn(e)) return `reserved path: ${e}`;
  if (O0(e).toLowerCase().split("/").some(item => {
    let s = item.replace(/[\s.]+$/, "").replace(/^\s+/, "");
    return s === "claude.md" || s === ".claude" || /~\d/.test(s);
  })) return `reserved segment: ${e}`;
  let t = O0(e);
  if (!t || t.split("/").some(item => /^\s*\.\.[\s.]*$/.test(item)) || t.includes("\x00")) return `path does not normalize: ${e}`;
  return null;
}
function iYt(e, t) {
  let n = D(e) ? S[e] : void 0;
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
  if (targets_3.length > P) return {
    outcome: "ask",
    reason: `more than ${P} target paths`,
    targets: targets_3
  };
  for (let l of targets_3) {
    let reason = C(l);
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
function Gns(e, t, n, s = Date.now()) {
  if (!D(t) || !n) return {
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
  let c = iYt(t, n);
  if (c.outcome !== "pass") return {
    outcome: "ask",
    reason: c.reason
  };
  let w = c.set === "writes" ? l.writes : l.deletes;
  for (let g of c.targets) if (!w.has(O0(g))) return {
    outcome: "ask",
    reason: `path not in approved plan: ${g}`
  };
  return {
    outcome: "allow"
  };
}
function Vns(e) {
  for (let t of e) if (t?.type === "text" && typeof t.text === "string") try {
    let n = J(t.text),
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
export { $F, O0, GRn, ATt, xTt, VRn, Hns, qRn, $ns, Aot, sYt, PJr, MNe, DNe, Uns, LNe, KRn, aKe, X_e, xot, Bns, jns, Wns, zns, iYt, Gns, Vns };