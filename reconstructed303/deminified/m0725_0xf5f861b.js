// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { F } from "B:/~BUN/root/chunk-rpez7z7a.js";
import { J } from "B:/~BUN/root/chunk-6za2ez23.js";
import { ee } from "B:/~BUN/root/chunk-t63e78w2.js";
import { NFe, I5t, M5t } from "B:/~BUN/root/chunk-nqfs3a2f.js";
import { N } from "B:/~BUN/root/chunk-nkxgam12.js";
var regExp = new RegExp(`^${NFe}$`),
  E = 1,
  epr = 16,
  I = 16,
  tpr = 16,
  w = 16,
  x = 16,
  npr = 64;
var O = 65536,
  vno = 16;
function g(e) {
  return typeof e === "string" && regExp.test(e);
}
function R(e) {
  if (!N(e)) return "schema document must be an object";
  let s = Object.keys(e).sort(),
    i = ["fields", "format", "invariants", "island", "key", "maxEntries", "name"],
    o = i.filter(item => item !== "invariants");
  for (let n of s) if (!i.includes(n)) return `unknown schema key: ${n}`;
  for (let n of o) if (!(n in e)) return `missing schema key: ${n}`;
  if (e.format !== E) return "unsupported format version";
  if (!g(e.name)) return "name must be a token";
  if (!g(e.island)) return "island must be a token";
  let maxEntries = e.maxEntries;
  if (typeof maxEntries !== "number" || !Number.isInteger(maxEntries) || maxEntries < 1 || maxEntries > npr) return `maxEntries must be an integer in 1..${npr}`;
  if (!N(e.fields)) return "fields must be an object";
  let u = Object.keys(e.fields);
  if (u.length === 0 || u.length > epr) return `fields must declare 1..${epr} fields`;
  let fields = e.fields;
  for (let n of u) {
    if (!g(n)) return `field name must be a token: ${n}`;
    let c = fields[n];
    if (!N(c)) return `field ${n} must be an object`;
    let nullable = c.nullable;
    if (nullable !== void 0 && typeof nullable !== "boolean") return `field ${n}: nullable must be boolean`;
    let m = Object.keys(c).filter(item => item !== "kind" && item !== "nullable");
    switch (c.kind) {
      case "token":
        if (m.length > 0) return `field ${n}: unknown keys ${m.join(",")}`;
        break;
      case "enum":
        {
          if (m.some(item => item !== "values")) return `field ${n}: unknown keys`;
          let t = c.values;
          if (!Array.isArray(t) || t.length < 1 || t.length > I || t.some(item => !g(item)) || new Set(t).size !== t.length) return `field ${n}: enum values must be 1..${I} unique tokens`;
          break;
        }
      case "tokenArray":
        {
          if (m.some(item => item !== "minItems" && item !== "maxItems" && item !== "unique")) return `field ${n}: unknown keys`;
          let {
            minItems: minItems,
            maxItems: maxItems,
            unique: unique
          } = c;
          if (unique !== !0) return `field ${n}: tokenArray requires unique: true`;
          if (typeof minItems !== "number" || typeof maxItems !== "number" || !Number.isInteger(minItems) || !Number.isInteger(maxItems) || minItems < 0 || maxItems < minItems || maxItems > tpr) return `field ${n}: need 0 <= minItems <= maxItems <= ${tpr}`;
          break;
        }
      case "ref":
        {
          if (m.some(item => item !== "into")) return `field ${n}: unknown keys`;
          let into = c.into;
          if (typeof into !== "string" || into === n) return `field ${n}: ref.into must name another field`;
          let y = fields[into];
          if (!N(y) || y.kind !== "tokenArray") return `field ${n}: ref.into must name a declared tokenArray field`;
          break;
        }
      case "text":
        if (m.length > 0) return `field ${n}: unknown keys ${m.join(",")}`;
        break;
      default:
        return `field ${n}: unknown kind`;
    }
  }
  let l = e.key;
  if (typeof l !== "string" || !u.includes(l)) return "key must name a declared field";
  let f = fields[l];
  if (f.kind !== "token" || f.nullable === !0) return "key field must be kind token and non-nullable";
  let invariants = e.invariants;
  if (invariants !== void 0) {
    if (!Array.isArray(invariants) || invariants.length > w) return `invariants must be an array of at most ${w}`;
    for (let [n, c] of invariants.entries()) {
      let d = v(c, fields, u, l);
      if (d !== null) return `invariant ${n}: ${d}`;
    }
  }
  return null;
}
function v(e, s, i, o) {
  if (!N(e)) return "must be an object";
  let r = Object.keys(e).sort(),
    u = (l, f) => {
      if (!Array.isArray(l) || l.length === 0 || l.length > x || new Set(l).size !== l.length) return `${f} must be 1..${x} unique field names`;
      for (let a of l) {
        if (typeof a !== "string" || !i.includes(a)) return `${f} names undeclared field: ${String(a)}`;
        if (s[a].nullable !== !0) return `${f} names non-nullable field: ${a}`;
      }
      return null;
    },
    k = l => {
      if (!N(l)) return "when must be an object";
      let f = Object.keys(l);
      if (f.length !== 1) return "when must compare exactly one field";
      let a = f[0],
        n = l[a];
      if (!i.includes(a)) return `when names undeclared field: ${a}`;
      if (!g(n)) return "when must compare against a token";
      let c = s[a];
      if (c.kind === "enum") {
        if (!c.values.includes(n)) return `when compares ${a} against a value outside its enum \u2014 dead rule`;
      } else if (c.kind !== "token") return `when field ${a} must be kind token or enum`;
      return null;
    };
  if (r.length === 2 && r[0] === "null" && r[1] === "when") return k(e.when) ?? u(e.null, "null");
  if (r.length === 2 && r[0] === "exactlyOneOf" && r[1] === "when") return k(e.when) ?? u(e.exactlyOneOf, "exactlyOneOf");
  if (r.length === 2 && r[0] === "forKey" && r[1] === "null") {
    if (!g(e.forKey)) return "forKey must be a token";
    return u(e.null, "null");
  }
  return "unknown invariant shape";
}
function Ils(e, s) {
  if (Buffer.byteLength(e, "utf-8") > O) return null;
  let i;
  try {
    i = J(e);
  } catch {
    return null;
  }
  if (!N(i)) return null;
  let o = Object.keys(i);
  if (o.length !== 1 || o[0] !== "items") return null;
  let items = i.items;
  if (!Array.isArray(items) || items.length > s.maxEntries) return null;
  let u = Object.keys(s.fields).sort(),
    k = [],
    l = new Set();
  for (let f of items) {
    if (!N(f)) return null;
    let a = Object.keys(f).sort();
    if (a.length !== u.length || a.some((item, index) => item !== u[index])) return null;
    let n = Object.create(null);
    for (let d of u) {
      let m = s.fields[d],
        t = f[d];
      if (t === null) {
        if (m.nullable !== !0) return null;
        n[d] = null;
        continue;
      }
      switch (m.kind) {
        case "token":
          if (!g(t)) return null;
          n[d] = t;
          break;
        case "enum":
          if (typeof t !== "string" || !m.values.includes(t)) return null;
          n[d] = t;
          break;
        case "tokenArray":
          {
            if (!Array.isArray(t) || t.length < m.minItems || t.length > m.maxItems || t.some(item => !g(item)) || new Set(t).size !== t.length) return null;
            n[d] = t.slice();
            break;
          }
        case "ref":
          {
            if (typeof t !== "string") return null;
            let y = f[m.into];
            if (!Array.isArray(y) || !y.includes(t)) return null;
            n[d] = t;
            break;
          }
        case "text":
          if (typeof t !== "string" || I5t(t) === null) return null;
          n[d] = t;
          break;
      }
    }
    let c = n[s.key];
    if (typeof c !== "string" || l.has(c)) return null;
    l.add(c), k.push(n);
  }
  for (let f of s.invariants ?? []) for (let a of k) if (!_(f, a, s.key)) return null;
  return k;
}
function _(e, s, i) {
  if ("forKey" in e) {
    if (s[i] !== e.forKey) return !0;
    return e.null.every(item => s[item] === null);
  }
  let o = Object.keys(e.when)[0];
  if (s[o] !== e.when[o]) return !0;
  if ("null" in e) return e.null.every(item => s[item] === null);
  return F(e.exactlyOneOf, r => s[r] !== null) === 1;
}
function rpr(e) {
  if (Array.isArray(e)) return `[${e.map(item => rpr(item) ?? "null").join(",")}]`;
  if (e !== null && typeof e === "object") return `{${Object.keys(e).sort().flatMap(item => {
    let o = rpr(e[item]);
    return o === void 0 ? [] : [`${JSON.stringify(item)}:${o}`];
  }).join(",")}}`;
  return JSON.stringify(e);
}
function b() {
  let e = ee();
  if (e.interactionSchemas === void 0) e.interactionSchemas = {
    byName: new Map(),
    islandOwners: new Map(),
    metaVerdicts: new Map()
  }, j({
    doc: doc,
    enabled: () => S.isOpen(),
    derive: derive
  });
  return e.interactionSchemas;
}
function j(e) {
  let {
      name: name,
      island: island
    } = e.doc,
    {
      byName: byName,
      islandOwners: islandOwners
    } = b();
  if (byName.has(name)) throw Error("interaction schema name already registered");
  if (islandOwners.has(island)) throw Error("interaction schema island id already owned \u2014 one island id, one grammar");
  byName.set(name, e), islandOwners.set(island, name);
}
function V3t(e) {
  let {
      byName: byName_2,
      metaVerdicts: metaVerdicts
    } = b(),
    reg = byName_2.get(e);
  if (reg === void 0) return {
    ok: !1,
    reason: "unknown"
  };
  let r = metaVerdicts.get(e);
  if (r === void 0) r = R(reg.doc), metaVerdicts.set(e, r);
  if (r !== null) return {
    ok: !1,
    reason: "invalid"
  };
  return {
    ok: !0,
    reg: reg
  };
}
function Mls() {
  return [...b().byName.entries()].filter(([, e]) => e.enabled()).map(([e]) => e);
}
function Dls() {
  return [...b().byName.keys()];
}
function Lls(e, s) {
  if (e.derive === void 0) return {
    ok: !0
  };
  let i;
  try {
    i = e.derive(s);
  } catch {
    return {
      ok: !1
    };
  }
  if (!N(i)) return {
    ok: !1
  };
  let o = Object.keys(i);
  if (o.length > vno) return {
    ok: !1
  };
  let derived = {};
  for (let u of o) {
    let k = i[u];
    if (!g(u) || !g(k)) return {
      ok: !1
    };
    derived[u] = k;
  }
  return {
    ok: !0,
    derived: derived
  };
}
var doc = {
  format: 1,
  name: "workshop-decisions",
  island: "ws-decisions",
  key: "id",
  maxEntries: 20,
  fields: {
    id: {
      kind: "token"
    },
    opts: {
      kind: "tokenArray",
      minItems: 2,
      maxItems: 5,
      unique: !0
    },
    state: {
      kind: "enum",
      values: ["open", "resolved"]
    },
    choice: {
      kind: "ref",
      into: "opts",
      nullable: !0
    },
    custom: {
      kind: "text",
      nullable: !0
    }
  },
  invariants: [{
    when: {
      state: "open"
    },
    null: ["choice", "custom"]
  }, {
    when: {
      state: "resolved"
    },
    exactlyOneOf: ["choice", "custom"]
  }, {
    forKey: "get-started",
    null: ["custom"]
  }]
};
function derive(e) {
  let s = e.map(item => ({
    id: item.id,
    opts: item.opts.slice(),
    state: item.state,
    choice: item.choice,
    custom: item.custom
  }));
  return {
    state: M5t(s)
  };
}
class A {
  gate = () => !1;
  register(e) {
    this.gate = e;
  }
  isOpen() {
    return this.gate();
  }
}
var S = new A();
function Nls(e) {
  S.register(e);
}
export { regExp as G7, epr, tpr, npr, vno, Ils, rpr, V3t, Mls, Dls, Lls, doc as kno, Nls };