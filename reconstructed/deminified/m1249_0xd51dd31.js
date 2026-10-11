// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { ap } from "B:/~BUN/root/chunk-dv435n4g.js";
import { Me } from "B:/~BUN/root/chunk-ekrhn4q1.js";
import { Di } from "B:/~BUN/root/chunk-1mdeqc2r.js";
var R = "confirm_repository_trust",
  zkn = "request_computer_folder",
  $tr = "list_computer_folders";
function a(e, t) {
  return e === `mcp__${ap}__${t}`;
}
function jje(e) {
  return a(e, R);
}
function rqt(e) {
  return a(e, zkn);
}
function zXr(e) {
  return a(e, $tr);
}
function oqt(e) {
  return {
    subtype: e.subtype,
    tool_name: e.tool_name,
    input: e.input,
    tool_use_id: e.tool_use_id,
    ...(e.mcp_server !== void 0 && {
      mcp_server: e.mcp_server
    }),
    ...(e.title !== void 0 && {
      title: e.title
    }),
    ...(e.display_name !== void 0 && {
      display_name: e.display_name
    }),
    ...(e.description !== void 0 && {
      description: e.description
    }),
    ...(e.agent_id !== void 0 && {
      agent_id: e.agent_id
    }),
    suppress_always_allow_rule: !0,
    default_to_no: !0,
    requires_user_interaction: !0
  };
}
var T = "config:repo-trusted",
  c = "config:no-git-repo",
  y = "config:repo-trust-declined";
function S(e) {
  let t = new Set(Array.isArray(e) ? e.filter(item => typeof item === "string") : []);
  if (t.has(T)) return "trusted";
  if (t.has(c)) return "no_repository";
  return t.has(y) ? "declined" : "not_marked";
}
function Utr(e) {
  return S(e.tags);
}
function GXr(e) {
  return e === "not_marked" || e === "declined";
}
function sqt(e, t) {
  return e === "not_marked" && !t ? void 0 : e;
}
function VXr(e) {
  return Di[`repository_trust.state.${e}`];
}
var regExp = new RegExp(`^(?:<tool_use_error>)?\\s*${zkn}: \\[repository_trust_(required|declined|unavailable)\\]`);
function E(e) {
  return e === "required" || e === "declined" || e === "unavailable";
}
function qXr(e, t) {
  if (!rqt(e)) return;
  let r = Array.isArray(t) ? t[0] : t,
    o = typeof r === "string" ? r : typeof r === "object" && r !== null && "text" in r && typeof r.text === "string" ? r.text : "",
    n = regExp.exec(o)?.[1];
  return E(n) ? n : void 0;
}
var obt = "served-calls-unattested",
  KXr = "served-calls-unattested-untrusted-repo",
  g = 30000;
function YXr({
  read: read,
  initial: initial,
  now = Date.now
}) {
  let o,
    n,
    s,
    u,
    p = Me(),
    _ = i => {
      let d = i.then(l => {
        if (n = now(), l !== o) o = l, p.emit();
      }, () => {
        n = now();
      }).catch(() => {}).then(() => {
        if (s === d) s = void 0;
        return o;
      });
      return s = d, d;
    },
    f = () => _(Promise.resolve().then(read));
  if (initial !== void 0) _(initial);
  return {
    current: () => o,
    refresh: i => {
      if (s !== void 0) {
        if (i?.force !== !0) return s;
        return u ??= s.then(() => (u = void 0, f())), u;
      }
      if (i?.force !== !0 && n !== void 0 && now() - n < g) return Promise.resolve(o);
      return f();
    },
    onChanged: i => p.subscribe(i)
  };
}
export { zkn, $tr, jje, rqt, zXr, oqt, Utr, GXr, sqt, VXr, qXr, obt, KXr, YXr };