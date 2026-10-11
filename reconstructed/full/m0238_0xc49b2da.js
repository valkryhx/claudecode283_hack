// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.283
import {
  Jq
} from "B:/~BUN/root/chunk-ah3egpyh.js";
import {
  fs
} from "B:/~BUN/root/chunk-290k5gh5.js";
import {
  he,
  rmn
} from "B:/~BUN/root/chunk-3rzkfay5.js";
import {
  nr
} from "B:/~BUN/root/chunk-gf53qpk6.js";
import {
  PMr
} from "B:/~BUN/root/chunk-8xaxa0y1.js";
import {
  DNt
} from "B:/~BUN/root/chunk-5dk9zqaz.js";
import {
  dt
} from "B:/~BUN/root/chunk-hhgrczac.js";
import {
  Ad,
  or,
  gs
} from "B:/~BUN/root/chunk-gsxez0fk.js";
var Wst = "sec-default",
  rnn = Wst + "@" + Ad;

function v3() {
  let e = he("policySettings");
  return e !== null && Object.keys(e).length > 0
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
    l = n ? "not seated: installed plugins' hooks modules are off in this process" : t ? o ? `seated by managed prependPlugins at position ${s+1}` : "not seated: managed prependPlugins does not list it" : i ? "seated outermost: this machine has managed settings" : d ? `seated outermost: the organization is ${r}` : `not seated: no managed settings and not a Team or Enterprise organization (${r??"none"})`;
  return {
    outermost: u ? [rnn] : [],
    seat: `${rnn} ${l}`
  }
}

function Zg() {
  let e = fKe();
  return e ? new Set(e.map((n) => n.name)) : null
}

function rb() {
  let e = DNt();
  if (e) return new Set(e.managedIds);
  let n = he("policySettings")?.enabledPlugins;
  if (!n) return null;
  let t = new Set;
  for (let [s, o] of Object.entries(n))
    if (o === !0 && s.includes("@")) t.add(s);
  return t.size > 0 ? t : null
}

function fKe() {
  let e = he("policySettings")?.enabledPlugins;
  if (!e) return null;
  let n = [];
  for (let [t, s] of Object.entries(e)) {
    if (typeof s !== "boolean" || !t.includes("@")) continue;
    let {
      name: o,
      marketplace: i
    } = or(t);
    if (o) {
      let a = `${o}@${i??""}` === t;
      n.push({
        name: o,
        marketplace: a ? i ?? "" : "",
        enabled: s
      })
    }
  }
  return n.length > 0 ? n : null
}

function Hme(e, n, t) {
  if (!e) return {
    outcome: "unmatched"
  };
  let s = gs(n),
    o = e.filter((r) => gs(r.name) === s),
    i = o[0];
  if (i === void 0) return {
    outcome: "unmatched"
  };
  let a = o.find((r) => !r.enabled);
  if (a) return {
    outcome: "locked",
    entry: a
  };
  if (t !== void 0 && o.some((r) => !Jq(gs(r.marketplace)) && gs(r.marketplace) === gs(t))) return {
    outcome: "admitted"
  };
  return {
    outcome: "locked",
    entry: i
  }
}

function mF() {
  let e = DNt();
  if (e) return e.order;
  let n = v3() || rmn(),
    t = fs().includes("userSettings") ? he("userSettings") : null,
    s = n ? he("policySettings") : t,
    o = ["prependPlugins", "appendPlugins"],
    [i, a] = o.map((d) => {
      let u = s?.[d]?.map(gs);
      return {
        ids: u,
        from: u === void 0 ? "none" : n ? "policy" : "user",
        shadowed: n && t?.[d] !== void 0
      }
    }),
    r = cbo(n ? i.ids : void 0);
  return {
    prepend: i.ids ?? [],
    append: a.ids ?? [],
    from: {
      prepend: i.from,
      append: a.from
    },
    shadowed: o.filter((d, u) => [i, a][u].shadowed),
    ...r
  }
}
var yLe = (e) => e.link !== void 0;
var zst = () => dt().loadedModules.filter((e) => !(e.name === Wst && yLe(e)));
export {
  v3,
  Wst,
  rnn,
  cbo,
  Zg,
  rb,
  fKe,
  Hme,
  mF,
  yLe,
  zst
};
