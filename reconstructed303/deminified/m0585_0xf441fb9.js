// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { gd, Cne } from "B:/~BUN/root/chunk-a0k8qg0d.js";
import { dt, Kt } from "B:/~BUN/root/chunk-kad4nq7y.js";
import { cn, mg } from "B:/~BUN/root/chunk-qp0344nb.js";
import { le } from "B:/~BUN/root/chunk-e7tskyjv.js";
import { Bfe, _zn, NBe, Rpt } from "B:/~BUN/root/chunk-m3ka5wpr.js";
import { MU } from "B:/~BUN/root/chunk-0k9rq8e2.js";
import { tl } from "B:/~BUN/root/chunk-k8727s7d.js";
import { Ej } from "B:/~BUN/root/chunk-f3f5k3wx.js";
import { Fv } from "B:/~BUN/root/chunk-2j35ee92.js";
var a = [cn, mg].flatMap(item => [item, ...Cne(item)]);
function c(o, t) {
  let r = [...Object.entries(o.options.toolAliases ?? {}), ...Object.entries(le(o).toolAliases ?? {})],
    e = r.flatMap(([n, i]) => [...(t.includes(i) ? [n] : []), ...(t.includes(n) ? [i] : [])]),
    s = r.flatMap(([n, i]) => e.includes(i) ? [n] : []);
  return [...t, ...e, ...s];
}
function u(o) {
  return o.hooks.some(t => !Rpt({
    hook: t
  }));
}
function f(o, t, r = !0) {
  if (!o || o === "*") return !0;
  if (/^[a-zA-Z0-9_|, -]+$/.test(o)) return o.split(/[|,]/).map(item => item.trim()).some(item => t.includes(item) || t.includes(gd(item)));
  try {
    let e = _zn(o);
    return t.some(item => e.test(item));
  } catch (error) {
    return r || error instanceof Bfe;
  }
}
function l(o, t, r = () => !1) {
  let e = MU("tool.call").filter(item => !r(item)),
    s = MU("tool.check");
  return tl("classic.PreToolUse", void 0, MU("classic.PreToolUse")) || o.some(n => tl("tool.call", {
    tool: n
  }, e) || tl("tool.check", t ? {
    tool: n
  } : NBe({
    name: n
  }), s));
}
function ano(o, t) {
  try {
    let r = t.flatMap(item => [item, ...Cne(item)]),
      e = c(o, r);
    return l(e, e.length > r.length, Fv);
  } catch {
    return !0;
  }
}
function lno(o, t) {
  try {
    let r = t === void 0 ? a : [...a, t, ...Cne(t)],
      e = c(o, r);
    if (l(e, e.length > r.length)) return !0;
    if (o.sessionHooksRegistry.has(o.agentId ?? o.session.id, "PreToolUse")) return !0;
    return Ej("PreToolUse").some(item => f(item.matcher, e) && u(item));
  } catch {
    return !0;
  }
}
var d = [dt, Kt].flatMap(item => [item, ...Cne(item)]);
function dno() {
  return l(d, !1, Fv) || Ej("PreToolUse").some(item => f(item.matcher, d, !1) && u(item));
}
export { ano, lno, dno };