// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { qe, F } from "B:/~BUN/root/chunk-y2g9f85n.js";
import { g, c } from "B:/~BUN/root/chunk-3z3yrbk4.js";
import { _r, v, rn } from "B:/~BUN/root/chunk-1ks9vs37.js";
import { tt, gY } from "B:/~BUN/root/chunk-n8cnxns2.js";
import { a } from "B:/~BUN/root/chunk-xrwdh0g4.js";
import { Me } from "B:/~BUN/root/chunk-9kvvd0hy.js";
import { Ku } from "B:/~BUN/root/chunk-rrf8gvt4.js";
import { sc, gb, yI, y9, C$, eso } from "B:/~BUN/root/chunk-27h4st9h.js";
import { ru } from "B:/~BUN/root/chunk-9bs2y8fc.js";
import { ht } from "B:/~BUN/root/chunk-y1b1g4ac.js";
import { pO as toolName } from "B:/~BUN/root/chunk-7pxn9dsp.js";
import { Wl, Vc, X_ } from "B:/~BUN/root/chunk-detjgwj4.js";
import { jP } from "B:/~BUN/root/chunk-gknte1ng.js";
import { yKt, zqr } from "B:/~BUN/root/chunk-vz5vt69h.js";
import { XT } from "B:/~BUN/root/chunk-xagk1yaq.js";
import { Li } from "B:/~BUN/root/chunk-zeshc0ep.js";
import { ze } from "B:/~BUN/root/chunk-xwzn0yxv.js";
var k = "tengu_breezy_pelican",
  y = 0.16666666666666666,
  T = 200000;
function Aei(o) {
  let e = s => o.some(item => ht(item, s));
  if (!e(ze) || !e(Me)) return;
  if (v(k, null)?.copy_hint !== !0) return;
  let n = e(_r) ? _r : "`grep`";
  return `local_file is for reading only: read the parts you need with ${ze}'s offset and limit, or search it with ${n}. Edits to it never reach the project, and project_write rejects it as local_path. To change the document or make a file from it, run \`cat /path/of/local_file > new-name\` in the working directory, where new-name is a name that no file there has, and work on that file. To save a change, call project_write with the document's path and that file as local_path. If the document is an upload such as a PDF, that saves a new text document and leaves the upload as it is.`;
}
function xei({
  model: model,
  configuredWindow: configuredWindow,
  messages: messages,
  room: room
}) {
  let s = v(k, null);
  if (s?.mode !== "always" && s?.mode !== "after_compaction") return;
  let r = sc(model),
    i = yI(r, configuredWindow);
  if (!(i > 0)) return;
  if (i > T) {
    let step_share = s.step_share;
    if (room === void 0 || !(typeof step_share === "number" && step_share > 0 && step_share <= 1)) return;
    let f = r.longContextWindowWithoutOptIn > 0 ? i : Math.min(i, room.threshold);
    return {
      maxTokens: Math.max(0, Math.floor(f * step_share) - room.claimed()),
      bytesPerToken: r.bytesPerToken,
      claim: room.claim,
      splitLongLines: s.long_lines === !0
    };
  }
  if (s.mode === "after_compaction" && !eso(messages)) return;
  let {
    fraction: fraction
  } = s;
  return {
    maxTokens: Math.round(i * (typeof fraction === "number" && fraction > 0 && fraction <= 1 ? fraction : y)),
    bytesPerToken: r.bytesPerToken,
    splitLongLines: s.long_lines === !0
  };
}
var P = "tengu_imperative_whistle",
  d = 200;
function h(o, e) {
  return `

[Only the first ${o} of ${e} bytes of this text are shown. To see the rest, call \`project_info\`: it can give a file that holds all of this text. \`project_search\` does not search it. Read or search only the parts of that file that the task needs.]`;
}
function PWo(o, e, t) {
  let n = sc(e),
    s = yI(n, t);
  if (!(s > 0) || s > T || !Ku()) return;
  let r = Math.round(s * y) * n.bytesPerToken,
    i = o.description ?? "",
    u = o.prompt_template ?? "",
    l = Buffer.byteLength(u, "utf8");
  if (Buffer.byteLength(o.name, "utf8") + Buffer.byteLength(i, "utf8") + l <= r) return;
  if (!rn(P, !1)) {
    c("projects_texts_cut", "sent_whole");
    return;
  }
  let name = Buffer.byteLength(o.name, "utf8") <= d ? o.name : `${gY(o.name, d - 3)}\u2026`,
    m = r - Buffer.byteLength(name, "utf8"),
    description = _(i, Math.max(Math.floor(m / 4), m - l));
  return g("projects_texts_cut"), {
    name: name,
    description: description,
    prompt_template: _(u, m - Buffer.byteLength(description, "utf8"))
  };
}
function Pei(o, e) {
  try {
    let t = o.attachedProject === void 0 ? void 0 : yKt.peek(e.session)?.get(o.attachedProject),
      {
        mainLoopModel: mainLoopModel
      } = e.options;
    if (t === void 0 || mainLoopModel === void 0) return o;
    let [s, ...r] = t,
      i = PWo(s, ru({
        options: {
          mainLoopModel: mainLoopModel
        },
        permissionLayers: e.permissionLayers
      }), e.options.autoCompactWindow);
    return i === void 0 ? o : {
      ...o,
      attachedProject: zqr({
        ...s,
        ...i
      }, ...r)
    };
  } catch (error) {
    return a(qe(F(error), "project texts could not be cut")), o;
  }
}
function _(o, e) {
  let t = Buffer.byteLength(o, "utf8");
  if (t <= e) return o;
  let n = gY(o, e - Buffer.byteLength(h(e, t), "utf8"));
  return n + h(Buffer.byteLength(n, "utf8"), t);
}
function L(o) {
  return [o.toolAliases, o.permissions().toolAliases];
}
function kyn(o) {
  let e = L(o).flatMap(item => Object.entries(item ?? {})),
    t = e.flatMap(([n, s]) => [...(s === toolName ? [n] : []), ...(n === toolName ? [s] : [])]);
  return [toolName, ...t, ...e.flatMap(([n, s]) => t.includes(s) ? [n] : [])];
}
function w(o) {
  let e = o.permissions(),
    t = kyn(o);
  return [...Wl(e), ...Vc(e)].some(item => tt(item.ruleValue.ruleContent ?? "", ":").trim() === "path" && t.some(s => X_(e, {
    name: s
  }, item)));
}
function C(hookEvent, toolInput, t) {
  return L(t).some(n => y9({
    hookEvent: hookEvent,
    toolName: toolName,
    toolInput: toolInput,
    tools: t.tools,
    toolAliases: n,
    sessionHooks: t.sessionHooksRegistry,
    sessionId: gb(t, hookEvent, t.session.id)
  }));
}
function OWo(o, e) {
  if (kyn(e).some(n => Li("tool.call", {
    tool: n
  }) || Li("tool.check", {
    tool: n
  }, XT("tool.check"))) || jP("PostToolBatch") || C$("PostToolBatch", e.sessionHooksRegistry, gb(e, "PostToolBatch", e.session.id)) || C("PostToolUse", o, e)) return "hook";
  let t = w(e);
  if (C("PreToolUse", o, e)) return t || kyn(e).length > 1 ? "hook" : "pre_tool_use_hook";
  return t ? "path_rule" : void 0;
}
function Oei(o, e) {
  let t = OWo(o, e);
  return t === "pre_tool_use_hook" ? "hook" : t;
}
export { Aei, xei, PWo, Pei, kyn, OWo, Oei };