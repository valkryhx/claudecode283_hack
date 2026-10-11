// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.283
import {
  zst
} from "B:/~BUN/root/chunk-spgj5paf.js";
import {
  jc,
  R8e
} from "B:/~BUN/root/chunk-1f9marcm.js";
import {
  yn,
  Jf
} from "B:/~BUN/root/chunk-yehxgs7w.js";
import {
  me
} from "B:/~BUN/root/chunk-fk6j5yf3.js";
import {
  Vp
} from "B:/~BUN/root/chunk-a2kvnefe.js";
import {
  Gke
} from "B:/~BUN/root/chunk-w4zcf9ar.js";
var n = [yn, Jf].flatMap((o) => [o, ...R8e(o)]);

function l(o) {
  let e = [...Object.entries(o.options.toolAliases ?? {}), ...Object.entries(me(o).toolAliases ?? {})],
    s = e.flatMap(([t, i]) => [...n.includes(i) ? [t] : [], ...n.includes(t) ? [i] : []]),
    r = e.flatMap(([t, i]) => s.includes(i) ? [t] : []);
  return [...n, ...s, ...r]
}

function a(o, e) {
  if (!o || o === "*") return !0;
  if (/^[a-zA-Z0-9_|, -]+$/.test(o)) return o.split(/[|,]/).map((s) => s.trim()).some((s) => e.includes(s) || e.includes(jc(s)));
  try {
    let s = new RegExp(o);
    return e.some((r) => s.test(r))
  } catch {
    return !0
  }
}

function p(o) {
  return Vp("classic.PreToolUse", void 0, zst()) || o.some((e) => Vp("tool.call", {
    tool: e
  }) || Vp("tool.check", {
    tool: e
  }))
}

function i7e(o) {
  try {
    let e = l(o);
    if (p(e)) return !0;
    if (o.sessionHooksRegistry.has(o.agentId ?? o.session.id, "PreToolUse")) return !0;
    return Gke("PreToolUse").some((s) => a(s.matcher, e) && s.hooks.some((r) => !(r.type === "callback" && r.internal === !0)))
  } catch {
    return !0
  }
}
export {
  i7e
};
