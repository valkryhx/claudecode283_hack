// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { t1, eu } from "B:/~BUN/root/chunk-nggrknsv.js";
import { wr, vr, Ch, TSt } from "B:/~BUN/root/chunk-fbyz9h0p.js";
import { xr } from "B:/~BUN/root/chunk-vttg4n7q.js";
import { nn } from "B:/~BUN/root/chunk-6a9s3k2y.js";
import { me, nr, Bm } from "B:/~BUN/root/chunk-1gpjpba6.js";
import { xd, Nh, nv, fh, kae } from "B:/~BUN/root/chunk-0n2201tc.js";
import { Vee, kM } from "B:/~BUN/root/chunk-efcxwmhb.js";
import { MEr, DEr, tO, iD, $en } from "B:/~BUN/root/chunk-dn8rakwm.js";
import { nvt, QGt, uVe } from "B:/~BUN/root/chunk-hcr6vzx1.js";
import { SO } from "B:/~BUN/root/chunk-stjjr4k8.js";
function utr(t) {
  if (t.type !== "http" || t.headers === void 0) return t;
  return {
    ...t,
    headers: Object.fromEntries(Object.keys(t.headers).map(item => [item, ""]))
  };
}
function v(t) {
  let o = 0,
    n = me(t)?.hooks ?? {};
  for (let s of Object.values(n)) {
    if (!Array.isArray(s)) continue;
    for (let c of s) o += c.hooks?.length ?? 0;
  }
  return o;
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
      return "Definition";
  }
}
function E(t) {
  if (t.type === "script") return t.file ?? t.script ?? "";
  return tO(t);
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
    return !vr() && (!o || s);
  }
  return !o && !xd("hooks");
}
function S(t) {
  let config = t.config,
    n = t.source === "userSettings" || t.source === "projectSettings" || t.source === "localSettings",
    config_2 = utr(config);
  return {
    event: t.event,
    matcher: eu(t.matcher ?? ""),
    source: t.source,
    sourceLabel: t.source === "flagSettings" ? "Startup settings (--settings option)" : t.source === "policySettings" ? "Managed settings (set by your organization)" : $en(t.source),
    ...(t.pluginName !== void 0 && {
      pluginName: eu(t.pluginName)
    }),
    type: config.type,
    displayText: iD(config),
    commandText: t1(E(config)),
    contentLabel: R(config),
    ...("if" in config && config.if !== void 0 && {
      condition: eu(config.if)
    }),
    ...("timeout" in config && typeof config.timeout === "number" && {
      timeout: config.timeout
    }),
    ...("statusMessage" in config && config.statusMessage !== void 0 && config.statusMessage !== "" && {
      statusMessage: eu(config.statusMessage)
    }),
    ...("once" in config && config.once === !0 && {
      runsOnce: !0
    }),
    ...(config.type === "command" && (config.async === !0 || config.asyncRewake === !0) && {
      runsInBackground: !0
    }),
    ...(!w(t) && {
      disabled: !0
    }),
    ...(n && {
      editable: {
        matcher: t.matcher ?? "",
        config: config_2,
        ...(config_2 !== config && {
          headersRedacted: !0
        })
      }
    })
  };
}
function h(event, matcher) {
  let n = [];
  for (let source of ["flagSettings", "policySettings"]) {
    let c = me(source)?.hooks?.[event];
    if (!Array.isArray(c)) continue;
    for (let u of c) {
      if ((u.matcher ?? "") !== matcher) continue;
      for (let config_3 of u.hooks) n.push(S({
        event: event,
        config: config_3,
        matcher: matcher,
        source: source
      }));
    }
  }
  return n;
}
function r5o(t) {
  let o = me("policySettings"),
    managedOnly = o?.allowManagedHooksOnly === !0,
    pluginOnly = xd("hooks"),
    disabledByPolicy = o?.disableAllHooks === !0,
    allDisabled = nr()?.disableAllHooks === !0,
    r = nvt([]),
    g = QGt(t, []),
    b = e => e.source === "sessionHook" || e.source === "pluginHook" || e.source === "builtinHook" || nn(e.source),
    m = !managedOnly && !pluginOnly,
    events = [],
    hooks = [];
  for (let name of Object.keys(r)) {
    let M = uVe(g, name),
      a = [],
      y = new Set();
    for (let i of M) if (y.add(i), a.push(...(g[name]?.[i] ?? []).filter(b).map(S)), m) a.push(...h(name, i));
    if (m) {
      let i = new Set();
      for (let l of ["flagSettings", "policySettings"]) {
        let k = me(l)?.hooks?.[name];
        if (!Array.isArray(k)) continue;
        for (let C of k) {
          let H = C.matcher ?? "";
          if (!y.has(H)) i.add(H);
        }
      }
      for (let l of [...i].sort()) a.push(...h(name, l));
    }
    if (a.length > 0) events.push({
      name: name,
      summary: r[name].summary,
      supportsMatcher: r[name].matcherMetadata !== void 0 || a.some(item => item.matcher !== ""),
      hookCount: a.length
    }), hooks.push(...a);
  }
  let errors = Bm().errors.filter(item => item.severity !== "warning").map(item => ({
    file: item.file,
    path: item.path,
    message: item.message
  }));
  return {
    events: events,
    hooks: hooks,
    eventCatalog: Object.keys(r).map(e => ({
      name: e,
      summary: r[e].summary,
      supportsMatcher: r[e].matcherMetadata !== void 0 || e === "FileChanged"
    })),
    policy: {
      disabledByPolicy: disabledByPolicy,
      managedOnly: managedOnly,
      pluginOnly: pluginOnly,
      allDisabled: allDisabled,
      policyHookCount: v("policySettings"),
      ...(nv() && {
        policyUnreadable: !0
      })
    },
    ...(vr() && {
      safeMode: {
        managedHooksStillApply: Vee(),
        exitHint: Ch()
      }
    }),
    ...(wr() && xr("hooks") && {
      bareMode: {
        exitHint: TSt()
      }
    }),
    ...(errors.length > 0 && {
      errors: errors
    })
  };
}
export { utr, r5o };