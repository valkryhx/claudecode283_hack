// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  dV
} from "B:/~BUN/root/chunk-zstr1969.js";
import {
  a
} from "B:/~BUN/root/chunk-xrwdh0g4.js";
import {
  Np,
  E_
} from "B:/~BUN/root/chunk-3xdsa4p8.js";
import {
  Ae
} from "B:/~BUN/root/chunk-eds8xkh8.js";
import {
  PX
} from "B:/~BUN/root/chunk-cvaa202c.js";
import {
  jaa
} from "B:/~BUN/root/chunk-27h4st9h.js";
import {
  bq
} from "B:/~BUN/root/chunk-3qkmk2e4.js";
import {
  B$
} from "B:/~BUN/root/chunk-8zx74r55.js";
import {
  Li
} from "B:/~BUN/root/chunk-zeshc0ep.js";
import {
  vm
} from "B:/~BUN/root/chunk-78gy49b7.js";
var r = ["tool.call", "tool.check", "classic.PreToolUse", "classic.PermissionRequest", "classic.PermissionDenied", "classic.PostToolUse", "classic.PostToolUseFailure", "agent.offer", "agent.spawn", "session.send", "classic.TaskCreated", "classic.TaskCompleted", "classic.Elicitation", "classic.ElicitationResult", "classic.WorktreeCreate"],
  c = new Set(["tool.call", "classic.PreToolUse", "classic.PostToolUse", "classic.PostToolUseFailure"]);
async function Vjo(e) {
  for (let o of e) {
    if (o.modulePath === void 0 || bq(o.source)) continue;
    try {
      let {
        hooks: i
      } = await jaa(o.modulePath, o.path, o.name);
      if (i.some((t) => r.some((l) => dV(t, l)))) return !0
    } catch {
      return !0
    }
  }
  return !1
}
async function cei(e, o) {
  let i = o.options.settingsHooksOff === !0 ? r.filter((t) => !c.has(t)) : r;
  try {
    let t = Ae(),
      l = new Set;
    for (;;) {
      let s = [...t.hooksRespawns].filter((n) => !l.has(n));
      if (s.length === 0) break;
      for (let n of s) l.add(n);
      await Promise.allSettled(s)
    }
    return t.loadedModules.filter((s) => !vm(s) && i.some((n) => Li(n, n === "tool.call" ? {
      tool: e.name
    } : n === "tool.check" ? B$(e) : void 0, [s]))).map((s) => s.name)
  } catch (t) {
    return a(t), "unknown"
  }
}

function uei(e) {
  let o = `or exit and start a new session with ${Np} off (${PX(0)}). This conversation can only be continued in ${Np}.`;
  if (e === "unknown") return `This call was not made. Claude Code could not find out whether an installed plugin is a mod (a plugin with JavaScript hooks) that checks tool calls, and ${E_} does not yet support that for a tool call that your code makes. Do not look for another way to do the same thing. Tell the user that they can try again, ${o}`;
  let [i, t] = e.length === 1 ? [`The plugin ${e[0]} is a mod (it has JavaScript hooks)`, "that plugin"] : [`The plugins ${e.join(", ")} are mods (they have JavaScript hooks)`, "those plugins"];
  return `This call was not made. ${i} that may check tool calls, and ${E_} does not yet support that for a tool call that your code makes. Do not look for another way to do the same thing. Tell the user that they can disable ${t} with /plugin and go on here, ${o}`
}
export {
  Vjo,
  cei,
  uei
};
