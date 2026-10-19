// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.303
import {
  t1,
  eu
} from "B:/~BUN/root/chunk-nggrknsv.js";
import {
  wr,
  vr,
  Ch,
  TSt
} from "B:/~BUN/root/chunk-fbyz9h0p.js";
import {
  xr
} from "B:/~BUN/root/chunk-vttg4n7q.js";
import {
  nn
} from "B:/~BUN/root/chunk-6a9s3k2y.js";
import {
  me,
  nr,
  Bm
} from "B:/~BUN/root/chunk-1gpjpba6.js";
import {
  xd,
  Nh,
  nv,
  fh,
  kae
} from "B:/~BUN/root/chunk-0n2201tc.js";
import {
  Vee,
  kM
} from "B:/~BUN/root/chunk-efcxwmhb.js";
import {
  MEr,
  DEr,
  tO,
  iD,
  $en
} from "B:/~BUN/root/chunk-dn8rakwm.js";
import {
  nvt,
  QGt,
  uVe
} from "B:/~BUN/root/chunk-hcr6vzx1.js";
import {
  SO
} from "B:/~BUN/root/chunk-stjjr4k8.js";

function utr(t) {
  if (t.type !== "http" || t.headers === void 0) return t;
  return {
    ...t,
    headers: Object.fromEntries(Object.keys(t.headers).map((o) => [o, ""]))
  }
}

function v(t) {
  let o = 0,
    n = me(t)?.hooks ?? {};
  for (let s of Object.values(n)) {
    if (!Array.isArray(s)) continue;
    for (let c of s) o += c.hooks?.length ?? 0
  }
  return o
}

function R(t) {
  switch (t.type) {
    case "command":
      return "Command";
    case "prompt":
    case "agent":
      return "Prompt";
    case "http":
      return "URL";
    case "mcp_tool":
      return "MCP tool";
    case "script":
      return t.file !== void 0 ? "Script file" : "Script";
    default:
      return "Definition"
  }
}

function E(t) {
  if (t.type === "script") return t.file ?? t.script ?? "";
  return tO(t)
}

function w(t) {
  if (t.source === "sessionHook") return !kae() && (!SO() || DEr(t.config));
  if (xr("hooks")) return !1;
  if (t.source === "builtinHook") return !0;
  if (fh()) return !1;
  if (t.source === "policySettings") return !0;
  let o = Nh() || SO();
  if (t.source === "pluginHook") {
    let n = t.pluginName ?? "",
      s = SO() ? MEr(n) : kM()?.has(n) === !0;
    return !vr() && (!o || s)
  }
  return !o && !xd("hooks")
}

function S(t) {
  let o = t.config,
    n = t.source === "userSettings" || t.source === "projectSettings" || t.source === "localSettings",
    s = utr(o);
  return {
    event: t.event,
    matcher: eu(t.matcher ?? ""),
    source: t.source,
    sourceLabel: t.source === "flagSettings" ? "Startup settings (--settings option)" : t.source === "policySettings" ? "Managed settings (set by your organization)" : $en(t.source),
    ...t.pluginName !== void 0 && {
      pluginName: eu(t.pluginName)
    },
    type: o.type,
    displayText: iD(o),
    commandText: t1(E(o)),
    contentLabel: R(o),
    ..."if" in o && o.if !== void 0 && {
      condition: eu(o.if)
    },
    ..."timeout" in o && typeof o.timeout === "number" && {
      timeout: o.timeout
    },
    ..."statusMessage" in o && o.statusMessage !== void 0 && o.statusMessage !== "" && {
      statusMessage: eu(o.statusMessage)
    },
    ..."once" in o && o.once === !0 && {
      runsOnce: !0
    },
    ...o.type === "command" && (o.async === !0 || o.asyncRewake === !0) && {
      runsInBackground: !0
    },
    ...!w(t) && {
      disabled: !0
    },
    ...n && {
      editable: {
        matcher: t.matcher ?? "",
        config: s,
        ...s !== o && {
          headersRedacted: !0
        }
      }
    }
  }
}

function h(t, o) {
  let n = [];
  for (let s of ["flagSettings", "policySettings"]) {
    let c = me(s)?.hooks?.[t];
    if (!Array.isArray(c)) continue;
    for (let u of c) {
      if ((u.matcher ?? "") !== o) continue;
      for (let r of u.hooks) n.push(S({
        event: t,
        config: r,
        matcher: o,
        source: s
      }))
    }
  }
  return n
}

function r5o(t) {
  let o = me("policySettings"),
    n = o?.allowManagedHooksOnly === !0,
    s = xd("hooks"),
    c = o?.disableAllHooks === !0,
    u = nr()?.disableAllHooks === !0,
    r = nvt([]),
    g = QGt(t, []),
    b = (e) => e.source === "sessionHook" || e.source === "pluginHook" || e.source === "builtinHook" || nn(e.source),
    m = !n && !s,
    p = [],
    d = [];
  for (let e of Object.keys(r)) {
    let M = uVe(g, e),
      a = [],
      y = new Set;
    for (let i of M)
      if (y.add(i), a.push(...(g[e]?.[i] ?? []).filter(b).map(S)), m) a.push(...h(e, i));
    if (m) {
      let i = new Set;
      for (let l of ["flagSettings", "policySettings"]) {
        let k = me(l)?.hooks?.[e];
        if (!Array.isArray(k)) continue;
        for (let C of k) {
          let H = C.matcher ?? "";
          if (!y.has(H)) i.add(H)
        }
      }
      for (let l of [...i].sort()) a.push(...h(e, l))
    }
    if (a.length > 0) p.push({
      name: e,
      summary: r[e].summary,
      supportsMatcher: r[e].matcherMetadata !== void 0 || a.some((i) => i.matcher !== ""),
      hookCount: a.length
    }), d.push(...a)
  }
  let f = Bm().errors.filter((e) => e.severity !== "warning").map((e) => ({
    file: e.file,
    path: e.path,
    message: e.message
  }));
  return {
    events: p,
    hooks: d,
    eventCatalog: Object.keys(r).map((e) => ({
      name: e,
      summary: r[e].summary,
      supportsMatcher: r[e].matcherMetadata !== void 0 || e === "FileChanged"
    })),
    policy: {
      disabledByPolicy: c,
      managedOnly: n,
      pluginOnly: s,
      allDisabled: u,
      policyHookCount: v("policySettings"),
      ...nv() && {
        policyUnreadable: !0
      }
    },
    ...vr() && {
      safeMode: {
        managedHooksStillApply: Vee(),
        exitHint: Ch()
      }
    },
    ...wr() && xr("hooks") && {
      bareMode: {
        exitHint: TSt()
      }
    },
    ...f.length > 0 && {
      errors: f
    }
  }
}
export {
  utr,
  r5o
};
