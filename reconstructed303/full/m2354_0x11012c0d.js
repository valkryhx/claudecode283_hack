// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.303
import {
  Ji,
  ao,
  Pr
} from "B:/~BUN/root/chunk-hb6x4e3n.js";
import {
  dt,
  Kt,
  We,
  xt
} from "B:/~BUN/root/chunk-kad4nq7y.js";
import {
  my
} from "B:/~BUN/root/chunk-k2ekj8re.js";
import {
  YMr,
  Mf,
  jUs
} from "B:/~BUN/root/chunk-bp7zxkzq.js";
import {
  ht
} from "B:/~BUN/root/chunk-2fccb5hn.js";
import {
  GRo,
  Xu,
  pd,
  vt,
  OS,
  TM
} from "B:/~BUN/root/chunk-hkc0g0wr.js";
import {
  mDs
} from "B:/~BUN/root/chunk-e3hz52nd.js";
import {
  dmr,
  sse,
  QI,
  ZI,
  BDn,
  rpe,
  Kbr,
  Ybr
} from "B:/~BUN/root/chunk-9grc6xh0.js";
import {
  nD
} from "B:/~BUN/root/chunk-n0e205s6.js";
import {
  Qre
} from "B:/~BUN/root/chunk-tmfad5yp.js";
import {
  NF
} from "B:/~BUN/root/chunk-3yw4brjw.js";
import {
  Ur
} from "B:/~BUN/root/chunk-hdc8p5sh.js";
import {
  Qe
} from "B:/~BUN/root/chunk-5k20pvvh.js";
var wre = () => Qre({
  promptSuggestionEnabled: !1
});
var c = new Set([We, Qe, dt, Kt, Pr, ao, Ji, xt]),
  VDe = new Set([my]),
  qDe = dmr;

function Tet(e) {
  return `[serve-mode] Stripped client-supplied privilege field(s): ${e.join(", ")}`
}

function E(e, i) {
  if (e.properties === void 0 || i.length === 0) return e;
  let s = {
    ...e.properties
  };
  for (let n of i) delete s[n];
  let t = Array.isArray(e.required) ? e.required.filter((n) => !i.includes(n)) : e.required;
  return {
    ...e,
    properties: s,
    required: t
  }
}

function TWt(e, {
  skipSearchToolRestore: i = !1
} = {}) {
  let s = NF(pd(), {
    skipReplFilter: !0,
    skipSimpleModeFilter: e
  }).filter((o) => !TM(o));
  if (!e) return s;
  let t = s.filter((o) => c.has(o.name));
  if (i) return t;
  let n = sse(),
    p = [QI, ZI].filter((o) => n.has(o.name) && c.has(o.name) && !t.includes(o) && o.isEnabled());
  return [...t, ...p]
}
async function mKo(e, i = {}, s) {
  let t = e === "http",
    n = pd(),
    p = TWt(t, i),
    o = i.agentDefinitions ?? {
      activeAgents: [],
      allAgents: []
    },
    d = t ? [] : await rpe(BDn(o.activeAgents, []), o.allowedAgentTypes, n),
    T = d.length > 0 ? `Available agent types:
${d.map((r)=>Kbr(r,!1)).join(`
`)}` : "",
    m = () => Promise.all(p.map(async (r) => {
      let f = nD(r.inputSchema),
        {
          remoteExecution: _,
          outputSchemaAcrossProcesses: S,
          ...u
        } = r,
        l = await r.prompt({
          getToolPermissionContext: async () => n,
          tools: p,
          agents: o.activeAgents,
          ...s !== void 0 && {
            model: s.model,
            leanPrompt: s.leanPrompt,
            bashFirstTrimmed: !1
          }
        });
      return {
        ...u,
        description: vt(r, Xu) ? mDs(l) : vt(r, ht) ? l.replace(l.includes(Ybr) ? Ybr : GRo, () => T) : l,
        inputSchema: E(f, [...t ? qDe : [], ...OS(r).supported ? [Ur] : []]),
        outputSchema: void 0
      }
    }));
  if (!t) return m();
  let a = Mf();
  if (a.backgroundTasksDisabled && a.unsandboxedCommandsDisabled && !a.backgroundShellsKeptElsewhere) return m();
  for (let r of p) r.inputSchema;
  return jUs(NWr(), m)
}

function NWr(e = new YMr) {
  return e.disableBackgroundTasks(), e.disableUnsandboxedCommands(), e
}
export {
  wre,
  VDe,
  qDe,
  Tet,
  TWt,
  mKo,
  NWr
};
