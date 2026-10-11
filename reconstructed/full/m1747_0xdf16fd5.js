// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.283
import {
  t
} from "B:/~BUN/root/chunk-qe2zga5e.js";
import {
  f
} from "B:/~BUN/root/chunk-zv3zxqya.js";
import {
  x
} from "B:/~BUN/root/chunk-gf53qpk6.js";
import {
  or,
  Rp,
  SFe
} from "B:/~BUN/root/chunk-gsxez0fk.js";
import {
  t_e
} from "B:/~BUN/root/chunk-w5bkq1td.js";
import {
  o,
  ae,
  u,
  fe
} from "B:/~BUN/root/chunk-n8qdr73v.js";
var l = f(() => u({
    server_instructions: o().optional(),
    server_instructions_by_server: fe(o(), o()).optional(),
    tools: fe(o(), o()).optional(),
    search_hints: fe(o(), o()).optional(),
    param_descriptions: fe(o(), fe(o(), o())).optional(),
    prompts: fe(o(), o()).optional(),
    skills: fe(o(), o()).optional()
  })),
  g = f(() => fe(o(), ae()));

function vse(e) {
  if (!e.pluginSource) return;
  let {
    name: r,
    marketplace: n
  } = or(e.pluginSource);
  if (!Rp(n) && !SFe(r, n)) return;
  let p = x("tengu_official_plugin_prompt_overrides", {}),
    i = g().safeParse(p);
  if (!i.success) {
    t("tengu_official_plugin_prompt_overrides: GB payload is not an object; ignoring", {
      level: "error"
    });
    return
  }
  let a = i.data[r];
  if (a === void 0) return;
  let c = l().safeParse(a);
  if (!c.success) {
    t(`tengu_official_plugin_prompt_overrides: entry for '${r}' failed schema (${c.error.issues[0]?.message}); using baked-in text`, {
      level: "error"
    });
    return
  }
  let s = c.data;
  if (Object.keys(s).length === 0) return;
  return {
    ...s,
    server_instructions_by_server: d(s.server_instructions_by_server),
    tools: d(s.tools),
    search_hints: d(s.search_hints),
    param_descriptions: d(s.param_descriptions),
    prompts: d(s.prompts),
    skills: d(s.skills)
  }
}

function d(e) {
  if (e === void 0) return;
  let r = Object.create(null);
  return Object.assign(r, e)
}

function A9t(e, r) {
  if (!e) return;
  let n = e.server_instructions_by_server;
  if (n) {
    let p = t_e(r),
      i = p && n[p.serverName];
    if (i !== void 0) return i
  }
  return e.server_instructions
}

function x9t(e, r) {
  if (!r || !e.properties) return e;
  let n = {
      ...e.properties
    },
    p = !1;
  for (let [i, a] of Object.entries(r)) {
    let c = n[i];
    if (c !== null && typeof c === "object") n[i] = {
      ...c,
      description: a
    }, p = !0
  }
  if (!p) return e;
  return {
    ...e,
    properties: n
  }
}
export {
  vse,
  A9t,
  x9t
};
