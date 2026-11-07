// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { x2s, q, LC, Ig, wY } from "B:/~BUN/root/chunk-game8aqv.js";
import { Zr } from "B:/~BUN/root/chunk-eev762xg.js";
import { _ } from "B:/~BUN/root/chunk-2pp12te6.js";
import { ur } from "B:/~BUN/root/chunk-y5gyn2hc.js";
import { yr } from "B:/~BUN/root/chunk-44q965xg.js";
import { eHn, g_, qNt, REs, J_, CCr, $m, O1 } from "B:/~BUN/root/chunk-79dw4seg.js";
import { kD, oNe } from "B:/~BUN/root/chunk-fzefftbw.js";
var uGi = Symbol("plainOutputIsContext");
class pEs extends Error {
  name = "NoAnswerInTimeError";
}
var g = ["projectSettings", "flagSettings", "policySettings"];
function vse(o) {
  let e = Ig();
  if (e === void 0) return;
  let settingsSource = "settingsSource" in o ? g.find(item => item === o.settingsSource) : void 0;
  if (settingsSource !== void 0) return {
    settingsSource: settingsSource
  };
  return "pluginId" in o && typeof o.pluginId === "string" && e.holds(o.pluginId) ? {
    pluginId: o.pluginId
  } : void 0;
}
function l(o) {
  return o.type === "command" || o.type === "prompt";
}
function mEs(o) {
  return o.if === void 0 || yr(o.if).ruleContent === void 0;
}
function hEs(o, e) {
  return o.settingsSource === "projectSettings" || !mEs(e);
}
function vht(o, e) {
  return l(e) || (e.type === "http" || e.type === "prompt" || e.type === "agent" || e.type === "mcp_tool") && o.settingsSource === "projectSettings" || e.type === "agent" && o.pluginId !== void 0 || e.type === "http" && o.pluginId !== void 0;
}
function Eht(o) {
  let e = Ig();
  if (e === void 0 || $m()) return [];
  let t = CCr();
  return g.flatMap(item => (item === "projectSettings" ? REs() : t && item !== "policySettings") ? [] : e.settingsHooks(item, o));
}
function cCr(o) {
  return _([o.server, o.tool, o.input ?? {}]);
}
var enn = "a cloud session does not run command, script, HTTP or MCP tool hooks from the shared server it runs on",
  H = new Set(["prompt", "agent", "callback", "function"]);
function m(o) {
  return H.has(o.type);
}
function uCr(o) {
  if (!q()) return o;
  return o.flatMap(item => {
    let t = vse(item),
      hooks = item.hooks.filter(item => m(item) || t !== void 0 && vht(t, item));
    return hooks.length > 0 ? [{
      ...item,
      hooks: hooks
    }] : [];
  });
}
var f = {
  command: "command",
  script: "script",
  http: "HTTP",
  mcp_tool: "MCP tool"
};
function Fgo(hook) {
  return {
    permissionRequestResult: {
      behavior: "deny",
      message: `The PermissionRequest ${f[hook.type] ?? hook.type} hook can't run in this cloud session, so this permission request is denied.`
    },
    outcome: "blocking",
    hook: hook
  };
}
function h3(o, e) {
  return uCr(y(o, e?.withoutCheckoutHooks === !0));
}
function y(o, e) {
  if (ur("hooks")) return [];
  let t = (LC()?.[o] ?? []).filter(item => !(o === "SessionEnd" && "pluginRoot" in item && x2s(item.pluginRoot)));
  if ($m()) return t.filter(item => !("pluginRoot" in item) && !("deviceOwner" in item));
  let n = u(),
    {
      managedOnly: managedOnly,
      managedPluginIds: managedPluginIds
    } = n,
    k = CCr(),
    c = Ig(),
    a = O1()?.[o] ?? [];
  return [...(e ? eHn(a, o) : a), ...Eht(o), ...(managedOnly ? [] : wY()?.[o] ?? []), ...t.filter(item => S(item) && c?.holds(item.pluginId) === !0 ? !(qNt() && !managedPluginIds?.has(item.pluginId)) : (!("pluginRoot" in item) || p(item.pluginId, n)) && !(k && "deviceOwner" in item))];
}
var weakMap = new WeakMap();
function fGi(o, e) {
  weakMap.set(o, e);
}
function gEs(o) {
  return weakMap.get(o)?.() === !0;
}
function pGi(o) {
  return weakMap.has(o);
}
function mGi(o, e) {
  let t = Ig();
  return uCr(o.flatMap(item => {
    if (item.skillRoot === void 0 || t?.holds(item.skillRoot) !== !0) {
      if (!e) return [item];
      let hooks_2 = item.hooks.filter(item => item.type === "prompt" && gEs(item));
      return hooks_2.length > 0 ? [{
        ...item,
        hooks: hooks_2
      }] : [];
    }
    return item.hooks.every(l) && !t.standsDown(item.skillRoot) && !$m() && !qNt() ? [{
      ...item,
      pluginId: item.skillRoot
    }] : [];
  }));
}
function S(o) {
  return "pluginRoot" in o && o.hooks.every(item => vht(o, item));
}
function yEs(o) {
  return oNe(o);
}
function u(managedOnly_2 = g_()) {
  return {
    managedOnly: managedOnly_2,
    managedPluginIds: managedOnly_2 && !Zr() ? kD() : null
  };
}
function p(o, {
  managedOnly: managedOnly_3,
  managedPluginIds: managedPluginIds_2
}) {
  return !managedOnly_3 || managedPluginIds_2?.has(o) === !0;
}
function fCr(o) {
  return p(o, u(!0));
}
function pCr(o) {
  return Bue() && !J_() && p(o, u());
}
function Bue() {
  return !ur("hooks") && !$m() && !Zr();
}
export { uGi, pEs, vse, mEs, hEs, vht, Eht, cCr, enn, uCr, Fgo, h3, fGi, gEs, pGi, mGi, yEs, fCr, pCr, Bue };