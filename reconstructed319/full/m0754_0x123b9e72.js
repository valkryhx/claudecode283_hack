// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  Xl,
  $pe
} from "B:/~BUN/root/chunk-44q965xg.js";
import {
  dt,
  Yt
} from "B:/~BUN/root/chunk-9kvvd0hy.js";
import {
  Qt,
  Yf
} from "B:/~BUN/root/chunk-3v92y8yw.js";
import {
  se
} from "B:/~BUN/root/chunk-9bs2y8fc.js";
import {
  n_e,
  vSr
} from "B:/~BUN/root/chunk-n7ta2s3w.js";
import {
  h3
} from "B:/~BUN/root/chunk-9t9ygsbp.js";
import {
  B$,
  upt
} from "B:/~BUN/root/chunk-8zx74r55.js";
import {
  XT
} from "B:/~BUN/root/chunk-xagk1yaq.js";
import {
  Li
} from "B:/~BUN/root/chunk-zeshc0ep.js";
import {
  vm
} from "B:/~BUN/root/chunk-78gy49b7.js";
var a = [Qt, Yf].flatMap((o) => [o, ...$pe(o)]);

function c(o, t) {
  let r = [...Object.entries(o.options.toolAliases ?? {}), ...Object.entries(se(o).toolAliases ?? {})],
    e = r.flatMap(([n, i]) => [...t.includes(i) ? [n] : [], ...t.includes(n) ? [i] : []]),
    s = r.flatMap(([n, i]) => e.includes(i) ? [n] : []);
  return [...t, ...e, ...s]
}

function u(o) {
  return o.hooks.some((t) => !upt({
    hook: t
  }))
}

function f(o, t, r = !0) {
  if (!o || o === "*") return !0;
  if (/^[a-zA-Z0-9_|, -]+$/.test(o)) return o.split(/[|,]/).map((e) => e.trim()).some((e) => t.includes(e) || t.includes(Xl(e)));
  try {
    let e = vSr(o);
    return t.some((s) => e.test(s))
  } catch (e) {
    return r || e instanceof n_e
  }
}

function l(o, t, r = () => !1) {
  let e = XT("tool.call").filter((n) => !r(n)),
    s = XT("tool.check");
  return Li("classic.PreToolUse", void 0, XT("classic.PreToolUse")) || o.some((n) => Li("tool.call", {
    tool: n
  }, e) || Li("tool.check", t ? {
    tool: n
  } : B$({
    name: n
  }), s))
}

function l5o(o, t) {
  try {
    let r = t.flatMap((s) => [s, ...$pe(s)]),
      e = c(o, r);
    return l(e, e.length > r.length, vm)
  } catch {
    return !0
  }
}

function d5o(o, t) {
  try {
    let r = t === void 0 ? a : [...a, t, ...$pe(t)],
      e = c(o, r);
    if (l(e, e.length > r.length)) return !0;
    if (o.sessionHooksRegistry.has(o.agentId ?? o.session.id, "PreToolUse")) return !0;
    return h3("PreToolUse").some((s) => f(s.matcher, e) && u(s))
  } catch {
    return !0
  }
}
var d = [dt, Yt].flatMap((o) => [o, ...$pe(o)]);

function c5o() {
  return l(d, !1, vm) || h3("PreToolUse").some((o) => f(o.matcher, d, !1) && u(o))
}
export {
  l5o,
  d5o,
  c5o
};
