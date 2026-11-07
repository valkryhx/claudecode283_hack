// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { su } from "B:/~BUN/root/chunk-1ks9vs37.js";
import { i } from "B:/~BUN/root/chunk-j6pt0v41.js";
import { a } from "B:/~BUN/root/chunk-xrwdh0g4.js";
import { p } from "B:/~BUN/root/chunk-z6138ats.js";
import { Hwr, Xa, $wr } from "B:/~BUN/root/chunk-m8dg5txf.js";
import { Nue } from "B:/~BUN/root/chunk-78494p3w.js";
import { ZFi } from "B:/~BUN/root/chunk-7wcc5pbk.js";
import { D } from "B:/~BUN/root/chunk-8mqsat26.js";
import { kn } from "B:/~BUN/root/chunk-t7d2hp9h.js";
import { o, I, oe, C, u, me, B, Ep } from "B:/~BUN/root/chunk-4bfd0jkf.js";
var y = ["announced", "inline"];
function n0n() {
  return su();
}
var S = p(() => u({
  systemPrompt: C(o()),
  tools: C(u({
    name: o(),
    description: o(),
    schema: me(o(), oe()).optional(),
    server: o().optional()
  })).optional(),
  cliPrefix: o().optional(),
  reminderFold: I().optional().catch(void 0),
  systemTurns: I().optional().catch(void 0),
  toolChangeHeader: I().optional().catch(void 0),
  inlineTools: I().optional().catch(void 0),
  keptReminders: I().optional().catch(void 0),
  toolResultSafeguards: I().optional().catch(void 0),
  systemTurnsAnsweredBy: o().optional().catch(void 0),
  echoWireToolInputs: I().optional().catch(void 0),
  contextRendering: B(y).optional().catch(void 0)
}));
function r0n(e) {
  return {
    ...(e?.systemTurns !== void 0 && {
      systemTurns: e.systemTurns
    }),
    ...(e?.toolChangeHeader !== void 0 && {
      toolChangeHeader: e.toolChangeHeader
    }),
    ...(e?.inlineTools !== void 0 && {
      inlineTools: e.inlineTools
    }),
    ...(e?.keptReminders !== void 0 && {
      keptReminders: e.keptReminders
    }),
    ...(e?.toolResultSafeguards !== void 0 && {
      toolResultSafeguards: e.toolResultSafeguards
    }),
    ...(e?.systemTurnsAnsweredBy !== void 0 && {
      systemTurnsAnsweredBy: e.systemTurnsAnsweredBy
    })
  };
}
function kys(e) {
  return e?.systemTurnsAnsweredBy === void 0 ? e : {
    ...e,
    systemTurnsAnsweredBy: void 0
  };
}
var P = new Set(["prompt_snapshot", "prompt_render_point", "deferred_tools_record"]);
function GFi(e) {
  return e.filter(item => item.type !== "attachment" || !P.has(item.attachment.type));
}
function f(e) {
  return e.type === "attachment" && e.attachment.type === "prompt_snapshot";
}
function R(e) {
  return e.type === "attachment" && e.attachment.type === "prompt_render_point";
}
var weakMap = new WeakMap();
function cD(e) {
  let record = e.findLast(f)?.attachment;
  if (record === void 0) return;
  let s = weakMap.get(record);
  if (s) return s;
  let n = S().safeParse(record).data;
  if (!n) return;
  let d = n.tools ?? [],
    systemPrompt = Xa(n.systemPrompt),
    m = {
      record: record,
      systemPrompt: systemPrompt,
      systemPromptHash: Mwr(systemPrompt),
      toolDescriptions: new Map(d.map(item => [item.name, item.description])),
      toolEntries: new Map(d.flatMap(item => item.schema !== void 0 && ZFi(item.schema) ? [[item.name, item.schema]] : [])),
      toolServers: new Map(d.flatMap(item => item.server === void 0 ? [] : [[item.name, item.server]])),
      cliPrefix: n.cliPrefix !== void 0 && $wr(n.cliPrefix) ? n.cliPrefix : void 0,
      reminderFold: n.reminderFold,
      wireShape: r0n(n),
      echoWireToolInputs: n.echoWireToolInputs,
      contextRendering: n.contextRendering
    };
  return weakMap.set(record, m), m;
}
function YTe(e, t) {
  return SJe(t) && !Iwr(e) ? cD(e) : void 0;
}
function g_e(e, t) {
  return SJe(t) ? cD(e) : void 0;
}
function Owr(e, t) {
  return [...e.toolDescriptions].flatMap(([name, description]) => {
    if (t?.has(name)) return [];
    let schema = e.toolEntries.get(name),
      server = e.toolServers.get(name);
    return [{
      name: name,
      description: description,
      ...(schema && {
        schema: schema
      }),
      ...(server !== void 0 && {
        server: server
      })
    }];
  });
}
function VFi(e, t, s) {
  let n = g_e(e, s);
  if (n === void 0 || ![...t].some(item => n.toolDescriptions.has(item))) return;
  return {
    type: "prompt_snapshot",
    systemPrompt: [...n.systemPrompt],
    tools: Owr(n, t),
    ...(n.cliPrefix !== void 0 && {
      cliPrefix: n.cliPrefix
    }),
    ...(n.reminderFold !== void 0 && {
      reminderFold: n.reminderFold
    }),
    ...r0n(kys(n.wireShape)),
    ...(n.echoWireToolInputs !== void 0 && {
      echoWireToolInputs: n.echoWireToolInputs
    }),
    ...(n.contextRendering !== void 0 && {
      contextRendering: n.contextRendering
    })
  };
}
function vys() {
  return {
    type: "prompt_render_point",
    cause: "set_model_system_prompt"
  };
}
function KFi(e) {
  return Iwr(e) ? vys() : void 0;
}
function Iwr(e) {
  return e.findLastIndex(R) > e.findLastIndex(f);
}
function qFi(e, t) {
  try {
    let s = cD(e),
      n = typeof t === "string" ? Hwr(t) : t;
    if (s === void 0 || n === void 0 || n.length === 0) return !1;
    return n.every(item => s.systemPrompt.includes(item));
  } catch (error) {
    return a(error), !1;
  }
}
function Eys(e) {
  return e.filter(f).map(item => item.uuid);
}
function h(e, t) {
  let s = `</${t}>`,
    n = [`<${t}>`, `<${t} `].map(item => e?.indexOf(item) ?? -1).filter(item => item !== -1),
    d = n.length === 0 ? -1 : Math.min(...n),
    c = e?.lastIndexOf(s) ?? -1;
  return d === -1 || c < d ? void 0 : e?.slice(d, c + s.length);
}
function YFi(e, t, s) {
  try {
    let n = cD(e);
    if (n === void 0 || Iwr(e)) return;
    let d = n.systemPrompt.at(-1);
    for (let c of s) {
      let m = h(t, c),
        r = h(d, c);
      if (m !== r) return r === void 0 ? "appeared" : m === void 0 ? "vanished" : "changed";
    }
    return;
  } catch (error) {
    a(error);
    return;
  }
}
function SJe(e) {
  if (e.systemPromptSnapshot === !1) return !1;
  return e.systemPromptSnapshot === !0 || i.CLAUDE_CODE_SESSION_KIND === "bg" || i.CLAUDE_CODE_REMOTE || !Nue();
}
function Mwr(e) {
  return kn(e.join("\x00"));
}
var x = p(() => u({
    entries: Ep(e => Array.isArray(e)),
    nameOnlyAnnouncements: C(o()).optional(),
    strippedReferences: C(o()).optional(),
    toolInputCopies: C(oe()).optional().catch(void 0)
  })),
  T = p(() => u({
    id: o(),
    copy: B(["wire", "displayed"])
  }));
function M(e) {
  return e.type === "attachment" && e.attachment.type === "deferred_tools_record";
}
function Q9(e) {
  let entries = new Map(),
    nameOnlyAnnouncements = new Set(),
    strippedReferences = new Set(),
    toolInputCopies = new Map();
  try {
    for (let c of e) {
      if (!M(c)) continue;
      let m = x().safeParse(c.attachment).data;
      for (let r of m?.entries ?? []) if (D(r)) {
        let l = r.name;
        if (typeof l === "string") entries.set(l, r);
      }
      for (let r of m?.nameOnlyAnnouncements ?? []) nameOnlyAnnouncements.add(r);
      for (let r of m?.strippedReferences ?? []) strippedReferences.add(r);
      for (let r of m?.toolInputCopies ?? []) {
        let l = T().safeParse(r).data;
        if (l !== void 0) toolInputCopies.set(l.id, l.copy);
      }
    }
  } catch (error) {
    a(error), entries.clear(), nameOnlyAnnouncements.clear(), strippedReferences.clear(), toolInputCopies.clear();
  }
  return {
    entries: entries,
    nameOnlyAnnouncements: nameOnlyAnnouncements,
    strippedReferences: strippedReferences,
    toolInputCopies: toolInputCopies
  };
}
export { n0n, r0n, kys, GFi, cD, YTe, g_e, Owr, VFi, vys, KFi, Iwr, qFi, Eys, YFi, SJe, Mwr, Q9 };