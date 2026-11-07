// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  LNe,
  dV,
  Rxs
} from "B:/~BUN/root/chunk-zstr1969.js";
import {
  tt
} from "B:/~BUN/root/chunk-n8cnxns2.js";
import {
  mKt
} from "B:/~BUN/root/chunk-4ef9gqk9.js";
import {
  $ce
} from "B:/~BUN/root/chunk-xagk1yaq.js";
import {
  L
} from "B:/~BUN/root/chunk-5ha2avah.js";
var d2o = Object.freeze(["attachment", "hook-context", "compaction"]);

function c2o(r) {
  return r !== void 0 && r.length > 0 && r.every((t) => d2o.includes(t)) ? r.map((t) => `session.append{door=${t}}`) : []
}
var u2o = Object.freeze(["prompt.section", "prompt.context", "prompt.attachment", "prompt.compose", "skill.prompt", "attribution.text", "session.compact", "settings.read"]);

function f2o(r) {
  return r.filter((n) => {
    let t = LNe.filter((e) => dV(n, e));
    return t.length > 0 && t.every((e) => e.startsWith("classic.") || u2o.includes(e))
  })
}
var p2o = (r, n) => r.slice(0, Math.max(r.findIndex($ce), 0)).flatMap((t) => {
  let e = mKt(t.standingFor("session.append").filter((o) => t.args.scan.toUserOn?.includes(o.pattern)).map((o) => o.matcher)),
    p = n.filter((o) => !o.includes("{") || e === void 0 || e.some((s) => o === `session.append{door=${s}}`)).flatMap((o) => {
      let s = LNe.filter((i) => dV(tt(o, "{"), i)),
        a = s.filter((i) => Rxs(t.args.scan, i));
      return a.length === s.length ? [o] : a
    });
  return p.length > 0 ? [{
    plugin: t.name,
    patterns: p
  }] : []
});

function Mqr(r) {
  return (r.some($ce) ? r.filter((e) => e.tier === "user") : []).flatMap((e) => {
    let p = e.registrationsFor("session.append"),
      o = L([...f2o(e.patterns), ...p.flatMap((i) => c2o(mKt(e.matcherFor("session.append", p.filter((d) => d !== i)))))]),
      s = o.length > 0,
      a = s ? p2o(r, o) : [];
    return s ? [{
      type: "hooks-passed-over",
      source: e.args.pluginStorageId,
      patterns: o,
      ...a.length > 0 && {
        reopened: a
      }
    }] : []
  })
}
export {
  d2o,
  c2o,
  u2o,
  f2o,
  p2o,
  Mqr
};
