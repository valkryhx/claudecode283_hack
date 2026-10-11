// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { Jq } from "B:/~BUN/root/chunk-ah3egpyh.js";
import { fs } from "B:/~BUN/root/chunk-290k5gh5.js";
import { he, rmn } from "B:/~BUN/root/chunk-3rzkfay5.js";
import { nr } from "B:/~BUN/root/chunk-gf53qpk6.js";
import { PMr } from "B:/~BUN/root/chunk-8xaxa0y1.js";
import { DNt } from "B:/~BUN/root/chunk-5dk9zqaz.js";
import { dt } from "B:/~BUN/root/chunk-hhgrczac.js";
import { Ad, or, gs } from "B:/~BUN/root/chunk-gsxez0fk.js";
var Wst = "sec-default",
  rnn = Wst + "@" + Ad;
function v3() {
  let e = he("policySettings");
  return e !== null && Object.keys(e).length > 0;
}
function cbo(e) {
  let n = !PMr(),
    t = e !== void 0,
    s = e?.indexOf(rnn) ?? -1,
    o = s !== -1,
    i = v3() || rmn(),
    r = n || t || i ? void 0 : nr(),
    d = r === "team" || r === "enterprise",
    u = !n && (t ? o : i || d),
    l = n ? "not seated: installed plugins' hooks modules are off in this process" : t ? o ? `seated by managed prependPlugins at position ${s + 1}` : "not seated: managed prependPlugins does not list it" : i ? "seated outermost: this machine has managed settings" : d ? `seated outermost: the organization is ${r}` : `not seated: no managed settings and not a Team or Enterprise organization (${r ?? "none"})`;
  return {
    outermost: u ? [rnn] : [],
    seat: `${rnn} ${l}`
  };
}
function Zg() {
  let e = fKe();
  return e ? new Set(e.map(item => item.name)) : null;
}
function rb() {
  let e = DNt();
  if (e) return new Set(e.managedIds);
  let n = he("policySettings")?.enabledPlugins;
  if (!n) return null;
  let t = new Set();
  for (let [s, o] of Object.entries(n)) if (o === !0 && s.includes("@")) t.add(s);
  return t.size > 0 ? t : null;
}
function fKe() {
  let e = he("policySettings")?.enabledPlugins;
  if (!e) return null;
  let n = [];
  for (let [t, enabled] of Object.entries(e)) {
    if (typeof enabled !== "boolean" || !t.includes("@")) continue;
    let {
      name: name,
      marketplace: marketplace
    } = or(t);
    if (name) {
      let a = `${name}@${marketplace ?? ""}` === t;
      n.push({
        name: name,
        marketplace: a ? marketplace ?? "" : "",
        enabled: enabled
      });
    }
  }
  return n.length > 0 ? n : null;
}
function Hme(e, n, t) {
  if (!e) return {
    outcome: "unmatched"
  };
  let s = gs(n),
    o = e.filter(item => gs(item.name) === s),
    entry_2 = o[0];
  if (entry_2 === void 0) return {
    outcome: "unmatched"
  };
  let entry = o.find(item => !item.enabled);
  if (entry) return {
    outcome: "locked",
    entry: entry
  };
  if (t !== void 0 && o.some(item => !Jq(gs(item.marketplace)) && gs(item.marketplace) === gs(t))) return {
    outcome: "admitted"
  };
  return {
    outcome: "locked",
    entry: entry_2
  };
}
function mF() {
  let e = DNt();
  if (e) return e.order;
  let n = v3() || rmn(),
    t = fs().includes("userSettings") ? he("userSettings") : null,
    s = n ? he("policySettings") : t,
    o = ["prependPlugins", "appendPlugins"],
    [i, a] = o.map(item => {
      let ids = s?.[item]?.map(gs);
      return {
        ids: ids,
        from: ids === void 0 ? "none" : n ? "policy" : "user",
        shadowed: n && t?.[item] !== void 0
      };
    }),
    r = cbo(n ? i.ids : void 0);
  return {
    prepend: i.ids ?? [],
    append: a.ids ?? [],
    from: {
      prepend: i.from,
      append: a.from
    },
    shadowed: o.filter((item, index) => [i, a][index].shadowed),
    ...r
  };
}
var yLe = e => e.link !== void 0;
var zst = () => dt().loadedModules.filter(item => !(item.name === Wst && yLe(item)));
export { v3, Wst, rnn, cbo, Zg, rb, fKe, Hme, mF, yLe, zst };