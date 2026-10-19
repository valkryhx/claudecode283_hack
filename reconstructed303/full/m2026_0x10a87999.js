// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.303
import {
  lR,
  l$
} from "B:/~BUN/root/chunk-8ye9n4fk.js";
import {
  Qk
} from "B:/~BUN/root/chunk-1gpjpba6.js";
import {
  KVn
} from "B:/~BUN/root/chunk-0n2201tc.js";
import {
  Uee,
  Bee
} from "B:/~BUN/root/chunk-c44qc88s.js";
import {
  krr,
  ckt,
  ukt,
  Trr,
  Crr,
  Rrr,
  Arr,
  xrr
} from "B:/~BUN/root/chunk-brjk7yc1.js";
import {
  join as i,
  resolve as f
} from "path";

function Q4r(o, {
  backstop: t = !1
} = {}) {
  return o.allowRules.sources.length > 0 || o.additionalDirectories.sources.length > 0 || !t && (o.hookSources.length > 0 || o.commandHelperSources.length > 0)
}

function Z4r() {
  return {
    allowRules: ckt(),
    additionalDirectories: ukt(),
    hookSources: [],
    commandHelperSources: []
  }
}

function Svn(o) {
  let t = f(o),
    m = l$(t, Qk),
    r = lR(i(t, ".claude", "settings.json")).settings,
    c = i(m, ".claude", "settings.local.json"),
    a = i(t, ".claude", "settings.local.json"),
    s = [lR(c).settings, ...a === c ? [] : [lR(a).settings]].filter((e) => e !== null),
    S = s.length === 0 ? null : {
      permissions: {
        additionalDirectories: s.flatMap((e) => e.permissions?.additionalDirectories ?? [])
      }
    },
    u = {
      projectSettings: r,
      localSettings: S
    },
    p = {
      sources: [
        ["projectSettings", ".claude/settings.json"],
        ["localSettings", ".claude/settings.local.json"]
      ],
      read: (e) => u[e] ?? null,
      rules: (e) => e === "localSettings" ? s.flatMap((h) => Uee(h, e)) : Uee(u[e] ?? null, e)
    },
    d = (e) => Crr(e) || Rrr(e) || Arr(e) || Trr(e) || xrr(e),
    l = [],
    n = [];
  if (krr(r)) l.push(".claude/settings.json");
  if (s.some(krr)) l.push(".claude/settings.local.json");
  let g = KVn(t);
  if (g !== null) l.push(Bee(g));
  if (d(r)) n.push(".claude/settings.json");
  if (s.some(d)) n.push(".claude/settings.local.json");
  return {
    allowRules: ckt(p),
    additionalDirectories: ukt(p),
    hookSources: l,
    commandHelperSources: n
  }
}
export {
  Q4r,
  Z4r,
  Svn
};
