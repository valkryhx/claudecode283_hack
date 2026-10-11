// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { Xr, Tr, qm, BBo } from "B:/~BUN/root/chunk-4p6z9qq1.js";
import { rQ, zm } from "B:/~BUN/root/chunk-y04k89s2.js";
import { ar } from "B:/~BUN/root/chunk-290k5gh5.js";
import { he, Vn, yb } from "B:/~BUN/root/chunk-3rzkfay5.js";
import { bd, Mh, bte, Bb, khe } from "B:/~BUN/root/chunk-mrt797ke.js";
import { Br } from "B:/~BUN/root/chunk-3daz140w.js";
import { v3, rb } from "B:/~BUN/root/chunk-spgj5paf.js";
import { zM, QA, XIt } from "B:/~BUN/root/chunk-1mdeqc2r.js";
import { iQe, D_t, L_t } from "B:/~BUN/root/chunk-n1n1ksmf.js";
function akn(t) {
  if (t.type !== "http" || t.headers === void 0) return t;
  return {
    ...t,
    headers: Object.fromEntries(Object.keys(t.headers).map(item => [item, ""]))
  };
}
function v(t) {
  let e = 0,
    n = he(t)?.hooks ?? {};
  for (let s of Object.values(n)) {
    if (!Array.isArray(s)) continue;
    for (let c of s) e += c.hooks?.length ?? 0;
  }
  return e;
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
  return zM(t);
}
function w(t) {
  if (t.source === "sessionHook") return !khe();
  if (Br("hooks")) return !1;
  if (t.source === "builtinHook") return !0;
  if (Bb()) return !1;
  if (t.source === "policySettings") return !0;
  let e = Mh();
  if (t.source === "pluginHook") return !Tr() && (!e || rb()?.has(t.pluginName ?? "") === !0);
  return !e && !bd("hooks");
}
function S(t) {
  let config = t.config,
    n = t.source === "userSettings" || t.source === "projectSettings" || t.source === "localSettings",
    config_2 = akn(config);
  return {
    event: t.event,
    matcher: zm(t.matcher ?? ""),
    source: t.source,
    sourceLabel: t.source === "flagSettings" ? "Startup settings (--settings option)" : t.source === "policySettings" ? "Managed settings (set by your organization)" : XIt(t.source),
    ...(t.pluginName !== void 0 && {
      pluginName: zm(t.pluginName)
    }),
    type: config.type,
    displayText: QA(config),
    commandText: rQ(E(config)),
    contentLabel: R(config),
    ...("if" in config && config.if !== void 0 && {
      condition: zm(config.if)
    }),
    ...("timeout" in config && typeof config.timeout === "number" && {
      timeout: config.timeout
    }),
    ...("statusMessage" in config && config.statusMessage !== void 0 && config.statusMessage !== "" && {
      statusMessage: zm(config.statusMessage)
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
    let c = he(source)?.hooks?.[event];
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
function y9r(t) {
  let e = he("policySettings"),
    managedOnly = e?.allowManagedHooksOnly === !0,
    pluginOnly = bd("hooks"),
    disabledByPolicy = e?.disableAllHooks === !0,
    allDisabled = Vn()?.disableAllHooks === !0,
    r = iQe([]),
    g = D_t(t, []),
    b = o => o.source === "sessionHook" || o.source === "pluginHook" || o.source === "builtinHook" || ar(o.source),
    m = !managedOnly && !pluginOnly,
    events = [],
    hooks = [];
  for (let name of Object.keys(r)) {
    let M = L_t(g, name),
      a = [],
      y = new Set();
    for (let i of M) if (y.add(i), a.push(...(g[name]?.[i] ?? []).filter(b).map(S)), m) a.push(...h(name, i));
    if (m) {
      let i = new Set();
      for (let l of ["flagSettings", "policySettings"]) {
        let k = he(l)?.hooks?.[name];
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
  let errors = yb().errors.filter(item => item.severity !== "warning").map(item => ({
    file: item.file,
    path: item.path,
    message: item.message
  }));
  return {
    events: events,
    hooks: hooks,
    eventCatalog: Object.keys(r).map(o => ({
      name: o,
      summary: r[o].summary,
      supportsMatcher: r[o].matcherMetadata !== void 0 || o === "FileChanged"
    })),
    policy: {
      disabledByPolicy: disabledByPolicy,
      managedOnly: managedOnly,
      pluginOnly: pluginOnly,
      allDisabled: allDisabled,
      policyHookCount: v("policySettings"),
      ...(bte() && {
        policyUnreadable: !0
      })
    },
    ...(Tr() && {
      safeMode: {
        managedHooksStillApply: v3(),
        exitHint: qm()
      }
    }),
    ...(Xr() && Br("hooks") && {
      bareMode: {
        exitHint: BBo()
      }
    }),
    ...(errors.length > 0 && {
      errors: errors
    })
  };
}
export { akn, y9r };