// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { De } from "B:/~BUN/root/chunk-vz9zea4j.js";
import { hp, ri, Ppe } from "B:/~BUN/root/chunk-3xdsa4p8.js";
import { LNe, dV, Gf } from "B:/~BUN/root/chunk-zstr1969.js";
import { KWe, sR } from "B:/~BUN/root/chunk-vxbt81wk.js";
import { Rr } from "B:/~BUN/root/chunk-4qfwb3rf.js";
var dIn = {};
Rr(dIn, {
  FALLBACK_RENDER_SITE: () => d,
  activeModNames: () => BJt,
  changed: () => n,
  copyInterface: () => i,
  copyPlugin: () => p,
  default: () => dIn,
  devtoolsEvents: () => R,
  devtoolsHooks: () => a,
  devtoolsInterfaces: () => S,
  devtoolsRenderSites: () => k,
  failed: () => l,
  hooksOn: () => jJt,
  latest: () => cft,
  loadedArgsOf: () => sR,
  loadedModuleNamed: () => KWe,
  publishHookFailure: () => uft,
  publishInterfaces: () => pIi,
  publishRegistry: () => mIi,
  publishRenderSites: () => hIi,
  snapshots: () => u,
  subscribeHookFailures: () => subscribe,
  subscribeRegistry: () => subscribe_2
});
var BJt = e => e.filter(item => !Gf(item.args.pluginStorageId)).map(item => item.name);
var n = De();
var l = De();
var d = {
  event: "ui.render",
  component: "AskUserQuestion",
  drawnBy: "AskUserQuestionPermissionDialog"
};
function u() {
  let e = [],
    o = [d],
    t = [];
  return {
    plugins: () => e,
    setPlugins: s => {
      e = s;
    },
    renderSites: () => o,
    setRenderSites: s => {
      o = s;
    },
    interfaces: () => t,
    setInterfaces: s => {
      t = s;
    }
  };
}
var cft = u();
var uft = l.emit;
function i(e) {
  return e.owner === void 0 ? {
    name: e.name,
    methods: [...e.methods],
    suppressedBy: e.suppressedBy
  } : {
    name: e.name,
    methods: [...e.methods],
    owner: e.owner
  };
}
var p = e => ({
  name: e.name,
  events: [...e.events],
  calls: [...e.calls],
  tier: e.tier,
  generation: e.generation
});
var jJt = e => cft.plugins().flatMap(item => {
  let hook = item.events.find(item => dV(item, e));
  if (hook === void 0) return [];
  return [{
    plugin: item.name,
    tier: item.tier,
    hook: hook,
    generation: item.generation
  }];
});
function R() {
  let e = {};
  for (let o of LNe) e[o] = jJt(o);
  return e;
}
var a = () => cft.plugins().map(p);
var S = () => cft.interfaces().map(i);
var k = () => cft.renderSites().map(item => ({
  ...item
}));
var pIi = e => cft.setInterfaces(e.map(i));
function mIi(e) {
  cft.setPlugins(e.map(p)), n.emit(a());
}
var hIi = e => cft.setRenderSites(e.map(item => ({
  ...item
})));
var subscribe = l.subscribe;
var subscribe_2 = n.subscribe;
var E = [ri, hp];
function FMt(name) {
  return Ppe({
    name: name,
    source: `${name}@${ri}`
  }).some(item => {
    let t = KWe(item);
    return t !== void 0 && t.status().kind === "live" && E.some(s => t.args.pluginStorageId === `${item}@${s}`);
  });
}
export { BJt, cft, uft, jJt, pIi, mIi, hIi, subscribe as gIi, subscribe_2 as zWe, dIn, FMt };