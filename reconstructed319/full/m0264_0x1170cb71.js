// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  x2s,
  q,
  LC,
  Ig,
  wY
} from "B:/~BUN/root/chunk-game8aqv.js";
import {
  Zr
} from "B:/~BUN/root/chunk-eev762xg.js";
import {
  _
} from "B:/~BUN/root/chunk-2pp12te6.js";
import {
  ur
} from "B:/~BUN/root/chunk-y5gyn2hc.js";
import {
  yr
} from "B:/~BUN/root/chunk-44q965xg.js";
import {
  eHn,
  g_,
  qNt,
  REs,
  J_,
  CCr,
  $m,
  O1
} from "B:/~BUN/root/chunk-79dw4seg.js";
import {
  kD,
  oNe
} from "B:/~BUN/root/chunk-fzefftbw.js";
var uGi = Symbol("plainOutputIsContext");
class pEs extends Error {
  name = "NoAnswerInTimeError"
}
var g = ["projectSettings", "flagSettings", "policySettings"];

function vse(o) {
  let e = Ig();
  if (e === void 0) return;
  let t = "settingsSource" in o ? g.find((n) => n === o.settingsSource) : void 0;
  if (t !== void 0) return {
    settingsSource: t
  };
  return "pluginId" in o && typeof o.pluginId === "string" && e.holds(o.pluginId) ? {
    pluginId: o.pluginId
  } : void 0
}

function l(o) {
  return o.type === "command" || o.type === "prompt"
}

function mEs(o) {
  return o.if === void 0 || yr(o.if).ruleContent === void 0
}

function hEs(o, e) {
  return o.settingsSource === "projectSettings" || !mEs(e)
}

function vht(o, e) {
  return l(e) || (e.type === "http" || e.type === "prompt" || e.type === "agent" || e.type === "mcp_tool") && o.settingsSource === "projectSettings" || e.type === "agent" && o.pluginId !== void 0 || e.type === "http" && o.pluginId !== void 0
}

function Eht(o) {
  let e = Ig();
  if (e === void 0 || $m()) return [];
  let t = CCr();
  return g.flatMap((n) => (n === "projectSettings" ? REs() : t && n !== "policySettings") ? [] : e.settingsHooks(n, o))
}

function cCr(o) {
  return _([o.server, o.tool, o.input ?? {}])
}
var enn = "a cloud session does not run command, script, HTTP or MCP tool hooks from the shared server it runs on",
  H = new Set(["prompt", "agent", "callback", "function"]);

function m(o) {
  return H.has(o.type)
}

function uCr(o) {
  if (!q()) return o;
  return o.flatMap((e) => {
    let t = vse(e),
      n = e.hooks.filter((r) => m(r) || t !== void 0 && vht(t, r));
    return n.length > 0 ? [{
      ...e,
      hooks: n
    }] : []
  })
}
var f = {
  command: "command",
  script: "script",
  http: "HTTP",
  mcp_tool: "MCP tool"
};

function Fgo(o) {
  return {
    permissionRequestResult: {
      behavior: "deny",
      message: `The PermissionRequest ${f[o.type]??o.type} hook can't run in this cloud session, so this permission request is denied.`
    },
    outcome: "blocking",
    hook: o
  }
}

function h3(o, e) {
  return uCr(y(o, e?.withoutCheckoutHooks === !0))
}

function y(o, e) {
  if (ur("hooks")) return [];
  let t = (LC()?.[o] ?? []).filter((i) => !(o === "SessionEnd" && ("pluginRoot" in i) && x2s(i.pluginRoot)));
  if ($m()) return t.filter((i) => !("pluginRoot" in i) && !("deviceOwner" in i));
  let n = u(),
    {
      managedOnly: r,
      managedPluginIds: s
    } = n,
    k = CCr(),
    c = Ig(),
    a = O1()?.[o] ?? [];
  return [...e ? eHn(a, o) : a, ...Eht(o), ...r ? [] : wY()?.[o] ?? [], ...t.filter((i) => S(i) && c?.holds(i.pluginId) === !0 ? !(qNt() && !s?.has(i.pluginId)) : (!("pluginRoot" in i) || p(i.pluginId, n)) && !(k && ("deviceOwner" in i)))]
}
var d = new WeakMap;

function fGi(o, e) {
  d.set(o, e)
}

function gEs(o) {
  return d.get(o)?.() === !0
}

function pGi(o) {
  return d.has(o)
}

function mGi(o, e) {
  let t = Ig();
  return uCr(o.flatMap((n) => {
    if (n.skillRoot === void 0 || t?.holds(n.skillRoot) !== !0) {
      if (!e) return [n];
      let r = n.hooks.filter((s) => s.type === "prompt" && gEs(s));
      return r.length > 0 ? [{
        ...n,
        hooks: r
      }] : []
    }
    return n.hooks.every(l) && !t.standsDown(n.skillRoot) && !$m() && !qNt() ? [{
      ...n,
      pluginId: n.skillRoot
    }] : []
  }))
}

function S(o) {
  return "pluginRoot" in o && o.hooks.every((e) => vht(o, e))
}

function yEs(o) {
  return oNe(o)
}

function u(o = g_()) {
  return {
    managedOnly: o,
    managedPluginIds: o && !Zr() ? kD() : null
  }
}

function p(o, {
  managedOnly: e,
  managedPluginIds: t
}) {
  return !e || t?.has(o) === !0
}

function fCr(o) {
  return p(o, u(!0))
}

function pCr(o) {
  return Bue() && !J_() && p(o, u())
}

function Bue() {
  return !ur("hooks") && !$m() && !Zr()
}
export {
  uGi,
  pEs,
  vse,
  mEs,
  hEs,
  vht,
  Eht,
  cCr,
  enn,
  uCr,
  Fgo,
  h3,
  fGi,
  gEs,
  pGi,
  mGi,
  yEs,
  fCr,
  pCr,
  Bue
};
