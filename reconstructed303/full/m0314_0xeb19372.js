// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.303
import {
  de,
  fP,
  i1,
  DQ
} from "B:/~BUN/root/chunk-rpez7z7a.js";
import {
  vr
} from "B:/~BUN/root/chunk-fbyz9h0p.js";
import {
  xr
} from "B:/~BUN/root/chunk-vttg4n7q.js";
import {
  Nh,
  ROr,
  nv,
  XVn,
  fh,
  jj
} from "B:/~BUN/root/chunk-0n2201tc.js";
import {
  kM,
  lke
} from "B:/~BUN/root/chunk-efcxwmhb.js";
class tEo extends Error {}
var d = ["projectSettings", "flagSettings", "policySettings"];

function HBe(o) {
  let e = i1();
  if (e === void 0) return;
  let n = "settingsSource" in o ? d.find((t) => t === o.settingsSource) : void 0;
  if (n !== void 0) return {
    settingsSource: n
  };
  return "pluginId" in o && typeof o.pluginId === "string" && e.holds(o.pluginId) ? {
    pluginId: o.pluginId
  } : void 0
}

function wzn(o) {
  let e = i1();
  if (e === void 0 || fh()) return [];
  let n = XVn();
  return d.flatMap((t) => n && t !== "policySettings" ? [] : e.settingsHooks(t, o))
}
var LDt = "a cloud session does not run command, script, HTTP or MCP tool hooks from the shared server it runs on",
  g = new Set(["prompt", "agent", "callback", "function"]);

function p(o) {
  return g.has(o.type)
}

function vzn(o) {
  if (!de()) return o;
  return o.flatMap((e) => {
    let n = HBe(e) !== void 0,
      t = e.hooks.filter((r) => p(r) || n && r.type === "command");
    return t.length > 0 ? [{
      ...e,
      hooks: t
    }] : []
  })
}
var c = {
  command: "command",
  script: "script",
  http: "HTTP",
  mcp_tool: "MCP tool"
};

function EAr(o) {
  return {
    permissionRequestResult: {
      behavior: "deny",
      message: `The PermissionRequest ${c[o.type]??o.type} hook can't run in this cloud session, so this permission request is denied.`
    },
    outcome: "blocking",
    hook: o
  }
}

function Ej(o) {
  return vzn(k(o))
}

function k(o) {
  if (xr("hooks")) return [];
  let e = fP()?.[o] ?? [];
  if (fh()) return e.filter((s) => !("pluginRoot" in s) && !("deviceOwner" in s));
  let n = i(),
    {
      managedOnly: t,
      managedPluginIds: r
    } = n,
    u = XVn(),
    a = i1();
  return [...jj()?.[o] ?? [], ...wzn(o), ...t ? [] : DQ()?.[o] ?? [], ...e.filter((s) => H(s) && a?.holds(s.pluginId) === !0 ? !(ROr() && !r?.has(s.pluginId)) : (!("pluginRoot" in s) || l(s.pluginId, n)) && !(u && ("deviceOwner" in s)))]
}

function H(o) {
  return "pluginRoot" in o && o.hooks.every((e) => e.type === "command")
}

function nEo(o) {
  return lke(o)
}

function i(o = Nh()) {
  return {
    managedOnly: o,
    managedPluginIds: o && !vr() ? kM() : null
  }
}

function l(o, {
  managedOnly: e,
  managedPluginIds: n
}) {
  return !e || n?.has(o) === !0
}

function IIs(o) {
  return l(o, i(!0))
}

function kzn(o) {
  return jfe() && !nv() && l(o, i())
}

function jfe() {
  return !xr("hooks") && !fh() && !vr()
}
export {
  tEo,
  HBe,
  wzn,
  LDt,
  vzn,
  EAr,
  Ej,
  nEo,
  IIs,
  kzn,
  jfe
};
