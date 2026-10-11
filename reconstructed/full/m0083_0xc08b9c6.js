// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.283
import {
  PUt,
  nUe,
  GS,
  Jq,
  l8e,
  Ine,
  qR
} from "B:/~BUN/root/chunk-ah3egpyh.js";
var VCe = ["anthropic-skills"],
  Cdt = "anthropic-skills";

function Rdt(e) {
  return e.startsWith("anthropic-skills:") ? e : `anthropic-skills:${e}`
}

function xdn(e) {
  return VCe.some((n) => e.startsWith(`${n}:`))
}

function tqn(e) {
  return /^[A-Za-z0-9._-]+$/.test(e)
}

function qF(e) {
  return e.startsWith("anthropic-skills:") ? e.slice(17) : e
}

function c(e) {
  return e.userFacingName?.() ?? e.name
}

function fOo(e) {
  if (e.loadedFrom !== "plugin") return [];
  let n = d(e.name) ?? d(c(e));
  if (n === void 0) return [];
  let t = e.name.slice(e.name.indexOf(":") + 1);
  return [nqn(`${n}:${n}`), n, ...(e.aliases ?? []).filter((r) => r !== n).map((r) => `anthropic-skills:${r}`), ...t !== n && !t.includes(":") ? [`anthropic-skills:${t}`, t] : []]
}

function d(e) {
  let n = e.indexOf(":");
  if (n <= 0) return;
  let t = e.slice(0, n),
    r = e.slice(n + 1);
  return r === t && !VCe.includes(t) ? r : void 0
}

function nqn(e) {
  let n = d(e);
  if (n !== void 0) return `anthropic-skills:${n}`;
  if (!e.startsWith("anthropic-skills:")) return;
  let t = e.slice(17);
  return t && !t.includes(":") ? `${t}:${t}` : void 0
}

function mOo(e) {
  if (e.loadedFrom !== "syncedSkills" && e.loadedFrom !== "plugin" || !e.name.startsWith("anthropic-skills:")) return [];
  let n = e.name.slice(17),
    t = c(e),
    r = t.startsWith("anthropic-skills:") ? t.slice(17) : void 0;
  if (!n || n.includes(":")) return [];
  return [nqn(e.name), ...r !== void 0 && r !== n && !r.includes(":") ? [`${r}:${r}`, `${r}:${n}`, r] : []]
}

function u(e) {
  return g(e) || e === "synced"
}

function g(e) {
  return e === "inline"
}
var Wd = "inline",
  zd = "skills-dir",
  Gd = "synced",
  Ad = "builtin";

function op(e) {
  return e === Wd || e === zd || e === Gd
}

function aD(e) {
  let n = e.lastIndexOf("@");
  if (n <= 0) return e;
  return `${e.slice(0,n)}@${XLr(e.slice(n+1))}`
}

function XLr(e) {
  let n = e.toLowerCase();
  return Jq(n) ? n : e
}

function YX(e) {
  return HS(e) !== void 0
}

function HS(e) {
  let n = xd(e);
  if (op(n)) return n;
  if (e.includes("@")) return;
  if (e.startsWith(`${Wd}[`)) return Wd;
  if (e.startsWith(`${Gd}[`)) return Gd;
  return
}

function JLr(e, n) {
  return Y6e(e, p(n))
}

function p(e) {
  return e.map((n) => n === void 0 ? void 0 : LNt(n))
}

function LNt(e, {
  managed: n = !1
} = {}) {
  let t = new Map;
  for (let [r, i] of Object.entries(e)) {
    if (i === void 0) continue;
    let o = gs(r),
      a = f(r, i),
      s = t.get(o);
    if (s === void 0 || s.enabled) t.set(o, {
      key: r,
      enabled: a && (s?.enabled ?? !0)
    })
  }
  return {
    record: e,
    byFold: t,
    managed: n
  }
}

function f(e, n) {
  if (n === void 0) return !1;
  let t = xd(aD(e));
  return t === Wd || t === zd ? n !== !1 : n === !0
}

function Adt(e) {
  let n = xd(aD(e));
  return n === Wd || n === Gd
}

function Y6e(e, n) {
  if (!Adt(e)) {
    for (let [o, a] of n.entries()) {
      let s = a?.record[e];
      if (s !== void 0) return {
        index: o,
        enabled: f(e, s),
        key: e
      }
    }
    return
  }
  let t = gs(e),
    r = aD(e),
    i = xd(r) === Gd ? gs(`${r.slice(0,r.lastIndexOf("@"))}@${Wd}`) : void 0;
  for (let [o, a] of n.entries()) {
    if (a === void 0) continue;
    let s = a.byFold.get(t);
    if (s !== void 0) return {
      index: o,
      enabled: s.enabled,
      key: s.key
    };
    if (i !== void 0) {
      let l = a.byFold.get(i);
      if (l !== void 0 && !l.enabled) return {
        index: o,
        enabled: !1,
        key: l.key
      }
    }
  }
  return
}

function gOo(e, n) {
  return JLr(e, n)?.enabled
}

function KF(e, n) {
  return n === "required" && xd(aD(e)) === Gd
}

function xdt(e, n, t, r) {
  let i = Y6e(e, n);
  if (i !== void 0 && !i.enabled && n[i.index]?.managed) return !1;
  return KF(e, r) || (i?.enabled ?? t !== !1)
}

function Pdn(e) {
  return op(e) || e === Ad
}

function Yz(e) {
  return e.scope === "project" && e.source.endsWith(`@${zd}`)
}
var rqn = {
  policySettings: "managed",
  userSettings: "user",
  projectSettings: "project",
  localSettings: "local",
  flagSettings: "flag"
};

function or(e) {
  if (Ine(e)) return {
    name: e.slice(0, e.lastIndexOf("@")),
    marketplace: GS
  };
  if (e.startsWith("@") && l8e(e)) return {
    name: e
  };
  if (e.includes("@")) {
    let n = e.split("@");
    return {
      name: n[0] || "",
      marketplace: n[1]
    }
  }
  return {
    name: e
  }
}

function Xz(e) {
  let n = e.lastIndexOf("@");
  if (n < 0) return {
    name: e
  };
  return {
    name: e.slice(0, n),
    marketplace: e.slice(n + 1)
  }
}

function M6(e) {
  let n = aD(e),
    t = qCe(n);
  if (t !== null) return {
    name: t.packageName,
    marketplace: GS
  };
  let r = Xz(n);
  return op(r.marketplace) ? r : or(n)
}

function qCe(e) {
  let n = aD(e),
    t = `@${GS}`;
  if (!n.endsWith(t) || n.length <= t.length) return null;
  let r = n.slice(0, -t.length),
    i = r.startsWith("@") ? r.indexOf("@", 1) : r.indexOf("@"),
    o = i < 0 ? r : r.slice(0, i),
    a = i < 0 ? void 0 : r.slice(i + 1);
  if (!l8e(o) || a === "") return null;
  return {
    packageName: o,
    ...a !== void 0 && {
      versionSpec: a
    },
    pluginId: `${o}${t}`
  }
}

function Idn(e, n) {
  return n ? `${e}@${n}` : e
}

function xd(e) {
  let n = e.lastIndexOf("@");
  if (n < 0) return;
  let t = e.slice(n + 1);
  return t === "" ? void 0 : t
}

function cu(e) {
  let {
    name: n,
    marketplace: t
  } = Xz(e);
  if ((X6e(t) || t === Ad || !1) && !qR().safeParse(e).success) return {
    name: n
  };
  return {
    name: n,
    marketplace: t
  }
}

function Zp(e, n) {
  return e === n || e.toLowerCase() === n.toLowerCase()
}

function gs(e) {
  return e.normalize("NFC").toLowerCase()
}

function LR(e, n) {
  return e.find((t) => t === n) ?? e.find((t) => Zp(t, n))
}

function QLr(e, n) {
  return e.filter((t) => Zp(or(t).name, n))
}

function Rp(e) {
  return e !== void 0 && nUe.has(e.toLowerCase())
}

function X6e(e) {
  return Rp(e) || e !== void 0 && PUt.has(e.toLowerCase())
}
var S = new Set([Cdt, "core", "cowork-plugin-management", "data", "design", "engineering", "enterprise-search", "figma", "finance", "human-resources", "internal-apps", "legal", "marketing", "operations", "product-management", "productivity", "sales", "small-business", "ai-governance-legal", "cocounsel-legal", "commercial-legal", "corporate-legal", "employment-legal", "ip-legal", "law-student", "legal-builder-hub", "legal-clinic", "litigation-legal", "privacy-legal", "product-legal", "regulatory-legal", "healthcare", "fhir-developer", "npi-registry", "icd10-codes", "pubmed", "prior-auth-review", "cms-coverage", "clinical-trial-protocol", "documents", "asana", "bigquery", "claude-tag-data-viz", "claude-tag-oncall", "claude-tag-troubleshoot", "confluence", "datadog", "google-drive", "grafana", "hubspot", "jira", "linear", "notion", "pagerduty", "redshift", "salesforce", "sentry", "snowflake"]);

function SFe(e, n) {
  return u(n) && S.has(e)
}
var E = {
  user: "userSettings",
  project: "projectSettings",
  local: "localSettings"
};

function T0(e) {
  if (e === "managed") throw Error("Cannot install plugins to managed scope");
  return E[e]
}

function oqn(e) {
  return rqn[e]
}
export {
  VCe,
  Cdt,
  Rdt,
  xdn,
  tqn,
  qF,
  fOo,
  nqn,
  mOo,
  Wd,
  zd,
  Gd,
  Ad,
  op,
  aD,
  XLr,
  YX,
  HS,
  JLr,
  LNt,
  Adt,
  Y6e,
  gOo,
  KF,
  xdt,
  Pdn,
  Yz,
  rqn,
  or,
  Xz,
  M6,
  qCe,
  Idn,
  xd,
  cu,
  Zp,
  gs,
  LR,
  QLr,
  Rp,
  X6e,
  SFe,
  T0,
  oqn
};
