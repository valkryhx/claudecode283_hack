// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { LNe, dV, Rxs } from "B:/~BUN/root/chunk-zstr1969.js";
import { tt } from "B:/~BUN/root/chunk-n8cnxns2.js";
import { mKt } from "B:/~BUN/root/chunk-4ef9gqk9.js";
import { $ce } from "B:/~BUN/root/chunk-xagk1yaq.js";
import { L } from "B:/~BUN/root/chunk-5ha2avah.js";
var d2o = Object.freeze(["attachment", "hook-context", "compaction"]);
function c2o(r) {
  return r !== void 0 && r.length > 0 && r.every(item => d2o.includes(item)) ? r.map(item => `session.append{door=${item}}`) : [];
}
var u2o = Object.freeze(["prompt.section", "prompt.context", "prompt.attachment", "prompt.compose", "skill.prompt", "attribution.text", "session.compact", "settings.read"]);
function f2o(r) {
  return r.filter(item => {
    let t = LNe.filter(e => dV(item, e));
    return t.length > 0 && t.every(item => item.startsWith("classic.") || u2o.includes(item));
  });
}
var p2o = (r, n) => r.slice(0, Math.max(r.findIndex($ce), 0)).flatMap(item => {
  let e = mKt(item.standingFor("session.append").filter(o => item.args.scan.toUserOn?.includes(o.pattern)).map(item => item.matcher)),
    patterns = n.filter(item => !item.includes("{") || e === void 0 || e.some(s => item === `session.append{door=${s}}`)).flatMap(o => {
      let s = LNe.filter(item => dV(tt(o, "{"), item)),
        a = s.filter(i => Rxs(item.args.scan, i));
      return a.length === s.length ? [o] : a;
    });
  return patterns.length > 0 ? [{
    plugin: item.name,
    patterns: patterns
  }] : [];
});
function Mqr(r) {
  return (r.some($ce) ? r.filter(item => item.tier === "user") : []).flatMap(item => {
    let p = item.registrationsFor("session.append"),
      patterns_2 = L([...f2o(item.patterns), ...p.flatMap(i => c2o(mKt(item.matcherFor("session.append", p.filter(item => item !== i)))))]),
      s = patterns_2.length > 0,
      reopened = s ? p2o(r, patterns_2) : [];
    return s ? [{
      type: "hooks-passed-over",
      source: item.args.pluginStorageId,
      patterns: patterns_2,
      ...(reopened.length > 0 && {
        reopened: reopened
      })
    }] : [];
  });
}
export { d2o, c2o, u2o, f2o, p2o, Mqr };