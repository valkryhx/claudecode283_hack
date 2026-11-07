// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { CM, Pf } from "B:/~BUN/root/chunk-n8cnxns2.js";
import { Kt } from "B:/~BUN/root/chunk-6n5g80b8.js";
import { Nr, Zr, N_, Vwt } from "B:/~BUN/root/chunk-eev762xg.js";
import { ur } from "B:/~BUN/root/chunk-y5gyn2hc.js";
import { Nie, be, Cr, mh } from "B:/~BUN/root/chunk-7wn6n2hd.js";
import { fd, g_, J_, $m, Eee } from "B:/~BUN/root/chunk-79dw4seg.js";
import { gEs } from "B:/~BUN/root/chunk-9t9ygsbp.js";
import { zue, kD } from "B:/~BUN/root/chunk-fzefftbw.js";
import { dMt, Yio, CI, dJt, wOn } from "B:/~BUN/root/chunk-cxcakgnv.js";
import { SGt, Smn, Hot } from "B:/~BUN/root/chunk-bb0cdzyh.js";
import { Qb } from "B:/~BUN/root/chunk-ynpwd78y.js";
function wWr(t) {
  if (t.type !== "http" || t.headers === void 0) return t;
  return {
    ...t,
    headers: Object.fromEntries(Object.keys(t.headers).map(item => [item, ""]))
  };
}
function v(t) {
  let o = 0,
    n = be(t)?.hooks ?? {};
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
  return CI(t);
}
function w(t) {
  if (t.source === "sessionHook") return (!Eee() || gEs(t.config)) && (!Qb() || Yio(t.config));
  if (ur("hooks")) return !1;
  if (t.source === "builtinHook") return !0;
  if ($m()) return !1;
  if (t.source === "policySettings") return !0;
  let o = g_() || Qb();
  if (t.source === "pluginHook") {
    let n = t.pluginName ?? "",
      s = Qb() ? dMt(n) : kD()?.has(n) === !0;
    return !Zr() && (!o || s);
  }
  return !o && !fd("hooks") && !Nie(t.source);
}
function S(t) {
  let config = t.config,
    n = t.source === "userSettings" || t.source === "projectSettings" || t.source === "localSettings",
    config_2 = wWr(config);
  return {
    event: t.event,
    matcher: Pf(t.matcher ?? ""),
    source: t.source,
    sourceLabel: t.source === "flagSettings" ? "Startup settings (--settings option)" : t.source === "policySettings" ? "Managed settings (set by your organization)" : wOn(t.source),
    ...(t.pluginName !== void 0 && {
      pluginName: Pf(t.pluginName)
    }),
    type: config.type,
    displayText: dJt(config),
    commandText: CM(E(config)),
    contentLabel: R(config),
    ...("if" in config && config.if !== void 0 && {
      condition: Pf(config.if)
    }),
    ...("timeout" in config && typeof config.timeout === "number" && {
      timeout: config.timeout
    }),
    ...("statusMessage" in config && config.statusMessage !== void 0 && config.statusMessage !== "" && {
      statusMessage: Pf(config.statusMessage)
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
    let c = be(source)?.hooks?.[event];
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
function T8s(t) {
  let o = be("policySettings"),
    managedOnly = o?.allowManagedHooksOnly === !0,
    pluginOnly = fd("hooks"),
    disabledByPolicy = o?.disableAllHooks === !0,
    allDisabled = Cr()?.disableAllHooks === !0,
    r = SGt([]),
    m = Smn(t, []),
    b = e => e.source === "sessionHook" || e.source === "pluginHook" || e.source === "builtinHook" || Kt(e.source),
    p = !managedOnly && !pluginOnly,
    events = [],
    hooks = [];
  for (let name of Object.keys(r)) {
    let M = Hot(m, name),
      a = [],
      y = new Set();
    for (let i of M) if (y.add(i), a.push(...(m[name]?.[i] ?? []).filter(b).map(S)), p) a.push(...h(name, i));
    if (p) {
      let i = new Set();
      for (let l of ["flagSettings", "policySettings"]) {
        let k = be(l)?.hooks?.[name];
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
  let errors = mh().errors.filter(item => item.severity !== "warning").map(item => ({
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
      ...(J_() && {
        policyUnreadable: !0
      })
    },
    ...(Zr() && {
      safeMode: {
        managedHooksStillApply: zue(),
        exitHint: N_()
      }
    }),
    ...(Nr() && ur("hooks") && {
      bareMode: {
        exitHint: Vwt()
      }
    }),
    ...(errors.length > 0 && {
      errors: errors
    })
  };
}
export { wWr, T8s };