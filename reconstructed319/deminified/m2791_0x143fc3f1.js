// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { gi, Qr, _r } from "B:/~BUN/root/chunk-1ks9vs37.js";
import { dt, Yt, Me } from "B:/~BUN/root/chunk-9kvvd0hy.js";
import { bu } from "B:/~BUN/root/chunk-5h4fwkjy.js";
import { N_o, kg, KKi } from "B:/~BUN/root/chunk-2392ztjf.js";
import { $d, ht, Gk, cO } from "B:/~BUN/root/chunk-y1b1g4ac.js";
import { AJr, sde, uF, fF, Xdr, oEe, Jno, Qno } from "B:/~BUN/root/chunk-27h4st9h.js";
import { ft } from "B:/~BUN/root/chunk-2x2z0t2k.js";
import { wvs } from "B:/~BUN/root/chunk-78494p3w.js";
import { cr } from "B:/~BUN/root/chunk-wxhfn3za.js";
import { uf, nWi } from "B:/~BUN/root/chunk-v29ccgfa.js";
import { o1 } from "B:/~BUN/root/chunk-cxcakgnv.js";
import { yhe } from "B:/~BUN/root/chunk-dzqzc2ax.js";
import { n$ } from "B:/~BUN/root/chunk-zk8rd694.js";
import { ze } from "B:/~BUN/root/chunk-xwzn0yxv.js";
import { kt } from "B:/~BUN/root/chunk-86hj8bna.js";
import { vo } from "B:/~BUN/root/chunk-h7w5pt14.js";
var Fme = () => yhe({
  promptSuggestionEnabled: !1
});
var onlyNames = new Set([Me, ze, dt, Yt, _r, Qr, gi, kt]),
  P4e = new Set([bu]),
  Hme = AJr;
function WMo(e, o) {
  return e.coerceInput?.(vo(o, Hme))?.input;
}
function zMo(e, o) {
  return WMo(e, o) ?? vo(o, Hme);
}
function skt(e, o) {
  return e.inputSchema.safeParse(zMo(e, o));
}
function ikt(e) {
  return `[serve-mode] Stripped client-supplied privilege field(s): ${e.join(", ")}`;
}
function E(e, o) {
  if (e.properties === void 0 || o.length === 0) return e;
  let properties = {
    ...e.properties
  };
  for (let i of o) delete properties[i];
  let required = Array.isArray(e.required) ? e.required.filter(item => !o.includes(item)) : e.required;
  return {
    ...e,
    properties: properties,
    required: required
  };
}
function O4e(skipSimpleModeFilter, {
  skipSearchToolRestore = !1
} = {}) {
  let s = n$($d(), {
    skipReplFilter: !0,
    skipSimpleModeFilter: skipSimpleModeFilter,
    ...(skipSimpleModeFilter && {
      onlyNames: onlyNames
    })
  }).filter(item => !cO(item));
  if (!skipSimpleModeFilter) return s;
  let r = s.filter(item => onlyNames.has(item.name));
  if (skipSearchToolRestore) return r;
  let i = sde(),
    p = [uF, fF].filter(item => i.has(item.name) && onlyNames.has(item.name) && !r.includes(item) && item.isEnabled());
  return [...r, ...p];
}
async function o4s(e, o = {}, s) {
  let r = e === "http",
    i = $d(),
    tools = O4e(r, o),
    t = o.agentDefinitions ?? {
      activeAgents: [],
      allAgents: []
    },
    d = r ? [] : await oEe(Xdr(t.activeAgents, []), t.allowedAgentTypes, i),
    u = d.length > 0 ? `Available agent types:
${d.map(item => Jno(item, !1)).join(`
`)}` : "",
    m = () => Promise.all(tools.map(async item => {
      let T = o1(item.inputSchema),
        {
          remoteExecution: remoteExecution,
          outputSchemaAcrossProcesses: outputSchemaAcrossProcesses,
          ...f
        } = item,
        l = await item.prompt({
          getToolPermissionContext: async () => i,
          tools: tools,
          agents: t.activeAgents,
          ...(s !== void 0 && {
            model: s.model,
            leanPrompt: s.leanPrompt,
            bashFirstTrimmed: !1
          })
        });
      return {
        ...f,
        description: ht(item, uf) ? nWi(l) : ht(item, ft) ? l.replace(l.includes(Qno) ? Qno : wvs, () => u) : l,
        inputSchema: E(T, [...(r ? Hme : []), ...(Gk(item).supported ? [cr] : [])]),
        outputSchema: void 0
      };
    }));
  if (!r) return m();
  let a = kg();
  if (a.backgroundTasksDisabled && a.unsandboxedCommandsDisabled && !a.backgroundShellsKeptElsewhere) return m();
  for (let n of tools) n.inputSchema;
  return KKi(GMo(), m);
}
function GMo(e = new N_o()) {
  return e.disableBackgroundTasks(), e.disableUnsandboxedCommands(), e;
}
export { Fme, P4e, Hme, WMo, zMo, skt, ikt, O4e, o4s, GMo };