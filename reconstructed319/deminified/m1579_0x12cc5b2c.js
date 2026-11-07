// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { H, Po } from "B:/~BUN/root/chunk-game8aqv.js";
import { qe } from "B:/~BUN/root/chunk-y2g9f85n.js";
import { W } from "B:/~BUN/root/chunk-ppmmt0c3.js";
import { ea, cet, wFe, pn, v, rn, uet, Vy } from "B:/~BUN/root/chunk-1ks9vs37.js";
import { i } from "B:/~BUN/root/chunk-j6pt0v41.js";
import { t } from "B:/~BUN/root/chunk-2pp12te6.js";
import { a } from "B:/~BUN/root/chunk-xrwdh0g4.js";
import { kr } from "B:/~BUN/root/chunk-dm4rzkqc.js";
import { Y2 } from "B:/~BUN/root/chunk-78494p3w.js";
import { cD, Q9 } from "B:/~BUN/root/chunk-mf9c9p38.js";
import { jze, K$ } from "B:/~BUN/root/chunk-7wcc5pbk.js";
import { Qze, lLe } from "B:/~BUN/root/chunk-63tek2rx.js";
import { it } from "B:/~BUN/root/chunk-09e9xfa4.js";
import { Je } from "B:/~BUN/root/chunk-9wbhv9z5.js";
import { L } from "B:/~BUN/root/chunk-5ha2avah.js";
import { he } from "B:/~BUN/root/chunk-fet34rqr.js";
var F = "x-mcp-file",
  ne = "Give the path of a file on this computer. The file itself is sent, not the path.";
function n5e(e) {
  if (typeof e !== "object" || e === null) return B(e);
  let n = weakMap.get(e);
  if (n !== void 0) return n;
  let o = B(e);
  return weakMap.set(e, o), o;
}
var weakMap = new WeakMap();
function B(e) {
  let n = typeof e === "object" && e !== null ? [{
      node: e,
      level: 1
    }] : [],
    o = n.length,
    r = !1;
  for (let u = n.pop(); u !== void 0; u = n.pop()) {
    let {
      node: node,
      level: level
    } = u;
    if (level > ye) return {
      marked: [],
      unfilled: [],
      everyCall: !1
    };
    if (!Array.isArray(node)) r ||= Object.keys(node).some(J);
    for (let node_2 of Array.isArray(node) ? node : Object.values(node)) if (r ||= typeof node_2 === "string" && J(node_2), typeof node_2 === "object" && node_2 !== null) {
      if (o++, o > we) return {
        marked: [],
        unfilled: [],
        everyCall: !1
      };
      n.push({
        node: node_2,
        level: level + 1
      });
    }
  }
  let s = it(e) ? e : {},
    d = [];
  if (it(e)) {
    let {
      properties: properties,
      $defs: $defs,
      definitions: definitions,
      ...value
    } = e;
    d.push({
      value: value
    });
    for (let [b, value_2] of [["properties", properties], ["$defs", $defs], ["definitions", definitions]]) {
      if (!it(value_2)) {
        d.push({
          value: value_2
        });
        continue;
      }
      for (let [argument, value_3] of Object.entries(value_2)) d.push(b === "properties" ? {
        argument: argument,
        value: value_3
      } : {
        definition: `${b}/${argument}`,
        value: value_3
      });
    }
  } else d.push({
    value: e
  });
  let f = [],
    h = new Set(),
    p = r || !it(e) || Object.hasOwn(e, "type") && e.type !== "object" || !E(e, _.input);
  for (let u of p ? [] : d) {
    let l = u.value;
    if (u.argument === void 0 || !it(l)) continue;
    let c = l,
      branch,
      anyOf = l.anyOf;
    if (typeof l.$ref !== "string" && Array.isArray(anyOf) && anyOf.length === 2 && S(l) === void 0) {
      let O = anyOf.map(re);
      if (O[0] !== O[1]) branch = O[0] ? 1 : 0, c = anyOf[branch];
    }
    let k = Y(c, s),
      list = !1;
    if (k === "unmarked" && it(c) && typeof c.$ref !== "string" && !Object.hasOwn(c, "anyOf") && c.type === "array") {
      if (k = Y(c.items, s), list = !0, typeof k === "object" && !E(c, _.list)) k = "untaken";
    }
    if (branch !== void 0 && typeof k === "object" && !E(l, _.optional)) k = "untaken";
    if (k === "untaken") {
      p = !0;
      break;
    }
    if (k === "unmarked") continue;
    if (f.push({
      argument: u.argument,
      list: list,
      ...(branch !== void 0 && {
        optional: !0
      }),
      ...(k.maxSize !== void 0 && {
        maxSize: k.maxSize
      })
    }), u.taken = branch !== void 0 ? {
      branch: branch,
      list: list
    } : list ? "list" : "single", k.definition !== void 0) h.add(k.definition);
  }
  if (!p && f.length > 0) {
    let u = [];
    for (let c of d) u.push({
      value: c.value,
      taken: c.definition !== void 0 && h.has(c.definition) ? "single" : c.taken
    });
    let l = Q(u);
    if (!l.mark && !l.unfollowed && !l.references.some(item => {
      let m = item.indexOf("/", item.indexOf("/") + 1);
      return /[~%]/.test(item) || h.has(m === -1 ? item : item.slice(0, m));
    })) return {
      marked: f.sort((itemA, itemB) => ee(itemA.argument, itemB.argument)),
      unfilled: [],
      everyCall: !1
    };
  }
  let w = new Map(),
    g = [],
    y = !1;
  for (let u of d) {
    let l = Q([{
      value: u.value
    }]);
    y ||= l.mark, u.reaches = l.mark || l.unfollowed;
    for (let c of l.references) {
      let [m = "", b = ""] = c.split("/", 2),
        k;
      try {
        k = [b, decodeURI(b), decodeURIComponent(b), decodeURIComponent(c).split("/", 2)[1] ?? ""];
      } catch {
        u.reaches = !0;
        continue;
      }
      for (let A of new Set(k)) {
        let O = `${m}/${A.replaceAll("~1", "/").replaceAll("~0", "~")}`,
          z = w.get(O);
        if (z === void 0) w.set(O, [u]);else z.push(u);
      }
    }
    if (u.reaches) g.push(u);
  }
  if (!y) return {
    marked: [],
    unfilled: [],
    everyCall: !1
  };
  for (let u = g.pop(); u !== void 0; u = g.pop()) {
    if (u.definition === void 0) continue;
    for (let l of w.get(u.definition) ?? []) if (!l.reaches) l.reaches = !0, g.push(l);
  }
  return {
    marked: [],
    unfilled: d.flatMap(item => item.reaches && item.argument !== void 0 ? [item.argument] : []).sort(ee),
    everyCall: d.some(item => item.reaches === !0 && item.argument === void 0 && item.definition === void 0)
  };
}
function c7o(e, n) {
  return n.find(item => {
    let r = Object.hasOwn(e, item) ? e[item] : void 0;
    return r !== void 0 && r !== null && !(Array.isArray(r) && r.length === 0);
  });
}
var weakMap_2 = new WeakMap();
function Zpi(e, n) {
  weakMap_2.set(e, n);
}
function emi(e) {
  return weakMap_2.get(e);
}
function Zir(e, n) {
  let {
    marked: marked,
    unfilled: unfilled
  } = n5e(e);
  return c7o(n, [...marked.map(item => item.argument), ...unfilled]) !== void 0;
}
function tmi(e, n) {
  if (n.length === 0 || !it(e) || !it(e.properties)) return e;
  let properties_2 = {
    ...e.properties
  };
  for (let {
    argument: argument_2,
    list: list_2,
    optional: optional
  } of n) {
    let h = properties_2[argument_2],
      description = `${it(h) && typeof h.description === "string" ? `${h.description} ` : ""}${ne}`,
      g = it(h) ? h.anyOf : void 0,
      y = optional && Array.isArray(g) ? g.find(item => !re(item)) : h,
      u = it(y) ? y : {},
      l = list_2 ? {
        ...(typeof u.minItems === "number" && {
          minItems: u.minItems
        }),
        ...(typeof u.maxItems === "number" && {
          maxItems: u.maxItems
        }),
        ...(typeof u.uniqueItems === "boolean" && {
          uniqueItems: u.uniqueItems
        }),
        type: "array",
        items: {
          type: "string"
        }
      } : {
        type: "string"
      };
    properties_2[argument_2] = optional ? {
      anyOf: [l, {
        type: "null"
      }],
      description: description
    } : {
      ...l,
      description: description
    };
  }
  let r = {
    ...e,
    properties: properties_2
  };
  for (let s of ["$defs", "definitions"]) {
    let d = e[s];
    if (it(d)) {
      let f = [];
      for (let [h, p] of Object.entries(d)) if (!it(p) || S(p) === void 0) f.push([h, p]);
      r[s] = Object.fromEntries(f);
    }
  }
  return r;
}
function C(e) {
  let n = it(e) ? e.properties : void 0;
  if (!it(n)) return [];
  return Object.keys(n).filter(item => {
    let r = n[item];
    return it(r) && typeof r.description === "string" && r.description.endsWith(ne) && (Z(r) || Array.isArray(r.anyOf) && r.anyOf.some(Z));
  });
}
function ear(e, n) {
  let o = [];
  for (let {
    argument: r,
    list: list_3,
    optional: optional_2,
    maxSize: maxSize
  } of n) {
    if (!Object.hasOwn(e, r) || e[r] === void 0 || optional_2 && e[r] === null) continue;
    let h = e[r],
      p = list_3 ? h : [h];
    if (!Array.isArray(p)) return {
      notAPath: r
    };
    for (let [index, path] of p.entries()) {
      if (typeof path !== "string" || path === "" || /^data:/i.test(path)) return {
        notAPath: r
      };
      o.push({
        argument: r,
        ...(list_3 && {
          index: index
        }),
        path: path,
        ...(maxSize !== void 0 && {
          maxSize: maxSize
        })
      });
    }
  }
  return o;
}
var we = 50000,
  ye = 1000,
  q = ["id", "mimeType", "size", "digest"],
  ke = ["id", "name", "mimeType", "size", "digest"];
function nmi(e) {
  if (!it(e)) return !1;
  let {
    id: id,
    name: name,
    mimeType: mimeType,
    size: size,
    digest: digest,
    data: data
  } = e;
  return typeof id === "string" && typeof mimeType === "string" && typeof size === "number" && (name === void 0 || typeof name === "string") && (data === void 0 || typeof data === "string") && it(digest) && typeof digest.algorithm === "string" && typeof digest.value === "string";
}
var be = ["title", "description", "$comment", "examples", "default", "deprecated", "readOnly", "writeOnly"],
  _ = {
    file: x("type", "required", "properties", "additionalProperties", F),
    reference: x("$ref", "allOf", F),
    list: x("type", "items", "minItems", "maxItems", "uniqueItems"),
    optional: x("anyOf"),
    input: x("type", "properties", "required", "additionalProperties", "minProperties", "maxProperties", "dependentRequired", "$defs", "definitions", "$schema", "$id")
  };
function x(...e) {
  return new Set([...e, ...be]);
}
var oe = ["$ref", "$dynamicRef", "$recursiveRef"];
function S(e) {
  let n = Object.hasOwn(e, F) ? e[F] : void 0;
  return n === null || n === !1 ? void 0 : n;
}
function re(e) {
  return it(e) && e.type === "null" && Object.keys(e).length === 1;
}
var weakMap_3 = new WeakMap();
function G(e) {
  let n = weakMap_3.get(e);
  if (n !== void 0) return n;
  let {
      required: required
    } = e,
    r = e.type === "object" && Array.isArray(required) && q.every(item => required.includes(item)) && required.every(item => item === "name" || q.includes(item)) && !oe.some(item => typeof e[item] === "string") && !Object.hasOwn(e, "anyOf") && E(e, _.file) && !Ae(e);
  return weakMap_3.set(e, r), r;
}
function E(e, n) {
  return Object.keys(e).every(item => n.has(item) || item === F && S(e) === void 0);
}
function Ae(e) {
  let n = Object.hasOwn(e, "additionalProperties"),
    additionalProperties = e.additionalProperties;
  if (!Object.hasOwn(e, "properties")) return n && additionalProperties !== !0;
  let {
    properties: properties_3
  } = e;
  if (!it(properties_3) || n && additionalProperties !== !0 && additionalProperties !== !1) return !0;
  return ke.some(item => Object.hasOwn(properties_3, item) ? properties_3[item] === !1 : n && additionalProperties === !1);
}
function ie(e) {
  let allOf = e.allOf,
    o = Array.isArray(allOf) && allOf.length === 1 ? allOf[0] : void 0;
  return it(o) && Object.keys(o).length === 1 && typeof o.$ref === "string" ? o : void 0;
}
function Y(e, n) {
  if (!it(e)) return "unmarked";
  let o = S(e),
    $ref = (ie(e) ?? e).$ref;
  if (typeof $ref !== "string") {
    if (o === void 0) return "unmarked";
    return it(o) && G(e) ? X([o]) : "untaken";
  }
  let s = $ref.startsWith("#/$defs/") ? "$defs" : $ref.startsWith("#/definitions/") ? "definitions" : void 0,
    d = s === void 0 ? "" : $ref.slice(s.length + 3),
    f = s === void 0 ? void 0 : n[s],
    h = d !== "" && !/[/~%]/.test(d) && it(f) && Object.hasOwn(f, d) ? f[d] : void 0,
    p = it(h) ? S(h) : void 0;
  if (o === void 0 && p === void 0) return "unmarked";
  if (!it(h) || !E(e, _.reference) || Object.hasOwn(e, "$ref") && Object.hasOwn(e, "allOf") || !G(h) || o !== void 0 && !it(o) || p !== void 0 && !it(p)) return "untaken";
  return {
    ...X([o, p]),
    ...(p !== void 0 && {
      definition: $ref.slice(2)
    })
  };
}
function X(e) {
  let n = e.flatMap(item => {
    let r = it(item) ? item.maxSize : void 0;
    return typeof r === "number" && Number.isInteger(r) && r >= 0 && r <= 9007199254740992 ? [r] : [];
  });
  return n.length === 0 ? {} : {
    maxSize: Math.min(...n)
  };
}
function Q(e) {
  let n = {
    mark: !1,
    unfollowed: !1,
    references: []
  };
  for (let o = e.pop(); o !== void 0; o = e.pop()) {
    let {
      value: value_4,
      taken: taken
    } = o;
    if (Array.isArray(value_4)) {
      for (let value_5 of value_4) e.push({
        value: value_5
      });
      continue;
    }
    if (!it(value_4)) continue;
    if (taken !== "single" && S(value_4) !== void 0) n.mark = !0;
    for (let [d, value_7] of Object.entries(value_4)) {
      if (typeof value_7 === "string" && oe.includes(d)) {
        if (!value_7.startsWith("#/$defs/") && !value_7.startsWith("#/definitions/")) n.unfollowed = !0;else if (!(taken === "single" && d === "$ref")) n.references.push(value_7.slice(2));
      }
      if (taken === "single" && d === "allOf" && ie(value_4) !== void 0) continue;
      if (typeof taken === "object" && d === "anyOf" && Array.isArray(value_7)) {
        for (let [h, value_6] of value_7.entries()) e.push({
          value: value_6,
          taken: h !== taken.branch ? void 0 : taken.list ? "list" : "single"
        });
        continue;
      }
      e.push({
        value: value_7,
        taken: taken === "list" && d === "items" ? "single" : void 0
      });
    }
  }
  return n;
}
function J(e) {
  for (let n = 0; n < e.length; n++) {
    let o = e.charCodeAt(n);
    if (o >= 55296 && o <= 56319) {
      let r = e.charCodeAt(n + 1);
      if (!(r >= 56320 && r <= 57343)) return !0;
      n++;
    } else if (o >= 56320 && o <= 57343) return !0;
  }
  return !1;
}
function Z(e) {
  return it(e) && (e.type === "string" || e.type === "array" && it(e.items) && e.items.type === "string");
}
var Oe = 1e4;
function IEn(e, n, {
  intoObjects = !1
} = {}) {
  let r = [e],
    s = Oe;
  while (r.length > 0) {
    let d = r.pop();
    if (typeof d === "string") {
      if (n(d)) return !0;
    } else if (Array.isArray(d)) for (let f of d) {
      if (s-- <= 0) return !0;
      r.push(f);
    } else if (intoObjects && it(d)) for (let [f, h] of Object.entries(d)) {
      if (n(f) || s-- <= 0) return !0;
      r.push(h);
    }
  }
  return !1;
}
function ee(e, n) {
  let o = 0;
  while (o < e.length && o < n.length) {
    let r = e.codePointAt(o) ?? 0,
      s = n.codePointAt(o) ?? 0;
    if (r !== s) return r - s;
    o += r > 65535 ? 2 : 1;
  }
  return e.length - n.length;
}
class se {
  #e = new Map();
  #n = new Map();
  note(e, n, o = []) {
    let r = this.#e.get(e) ?? new Set();
    for (let s of n) r.add(s);
    if (r.size > 0) this.#e.set(e, r);
    if (n.length > 0) {
      let s = this.#n.get(e) ?? new Set();
      for (let d of o) s.add(d);
      this.#n.set(e, s);
    }
  }
  listed(e) {
    return [...(this.#n.get(e) ?? [])];
  }
  shown(e) {
    return [...(this.#e.get(e) ?? [])];
  }
  tools() {
    return [...this.#e.keys()];
  }
  get any() {
    return this.#e.size > 0;
  }
}
var I = new Je(() => new se());
var R = "tengu_steady_quail";
function r5e() {
  return i.CLAUDE_CODE_REMOTE === !0 || (i.CLAUDE_CODE_ENVIRONMENT_KIND ?? "") !== "";
}
function tar() {
  return P(!0).forSession;
}
function u7o(e) {
  return f7o(e) !== void 0;
}
function f7o(e) {
  let {
    forSession: forSession,
    cache: cache
  } = P(e ?? !1);
  return forSession === !0 || cache === !0 ? "on" : forSession === "unreadable" || cache === "unreadable" ? "unreadable" : void 0;
}
function nar() {
  let {
    forSession: forSession_2,
    cache: cache_2
  } = P(!1);
  if (cache_2 !== !1) return cache_2 === !0 ? void 0 : "unknown";
  try {
    if (T()) return "off";
    return forSession_2 !== !0 || !Se() ? "unknown" : void 0;
  } catch (error) {
    return a(qe(error, "MCP connector file upload: reading whether a kept on stands in for the upload flag failed")), "unknown";
  }
}
function Se() {
  let connectorUploadFlagKeptFor = kr().connectorUploadFlagKeptFor,
    n = cet();
  return connectorUploadFlagKeptFor?.accountUuid !== void 0 && n.accountUuid === connectorUploadFlagKeptFor.accountUuid && n.organizationUuid === connectorUploadFlagKeptFor.organizationUuid && wFe();
}
function ae() {
  kr().connectorUploadFlagKeptFor = cet();
}
function P(e) {
  let n,
    o = !0;
  try {
    n = uet(R);
  } catch {
    o = !1;
  }
  let cache_3 = "unreadable",
    s;
  try {
    if (cache_3 = v(R, !1) === !0, n === void 0 && o && (typeof e === "function" ? e() : e)) if (T()) s = rn(R, !1) === !0, ae();else ve();
  } catch (error) {
    a(qe(error, "MCP connector file upload: reading the upload flag, or keeping its value, failed"));
  }
  if (n !== void 0) return {
    forSession: n === !0,
    cache: cache_3
  };
  return {
    forSession: s ?? cache_3,
    cache: cache_3
  };
}
function T() {
  return Vy(pn(R, !1).source);
}
function ve() {
  let e = kr();
  if (e.connectorUploadFlagWait !== void 0) return;
  let n = ea(() => {
    try {
      if (kr().connectorUploadFlagWait === n && uet(R) === void 0) {
        if (!T()) return;
        rn(R, !1), ae();
      }
    } catch (error) {
      a(qe(error, "MCP connector file upload: keeping the upload flag's value at a flag refresh failed"));
    }
    if (e.connectorUploadFlagWait === n) e.connectorUploadFlagWait = void 0;
    n();
  });
  e.connectorUploadFlagWait = n;
}
var ce = new W(() => ({
    value: !1
  })),
  pe = new W(() => ({
    value: !1
  }));
function rmi(e, n, o) {
  let r;
  try {
    r = H();
  } catch {
    return t("[connector upload] no session in reach, so no path form is shown for this tool"), !1;
  }
  if (n.length > 0) Po(ce).value = !0, p7o();
  return I.of(r).note(e, n, Re(o)), !0;
}
function p7o() {
  Po(pe).value = !0;
}
function m7o() {
  return Po(pe).value;
}
function omi(e) {
  let n = M();
  return n === void 0 || n === j ? [] : n.listed(e);
}
function HXr(e) {
  let n = M();
  return L([...(n === void 0 || n === j ? [] : n.tools()), ...(e === void 0 ? [] : U(e).tools.keys())]);
}
var ue = he({
    said: !1
  }, e => {
    e.said = !1;
  }),
  weakMap_4 = new WeakMap(),
  weakSet = new WeakSet(),
  weakMap_5 = new WeakMap();
function g6t(e, n, o, r, s) {
  let d = M();
  if (d === j) return {
    asked: "out_of_reach"
  };
  let f = U(r),
    unreadable = f.unreadable,
    p = unreadable ? Object.keys(n) : e === void 0 ? [] : L([...(d?.shown(e) ?? []), ...(f.tools.get(e) ?? [])]);
  if (p.length === 0) return unreadable ? {
    asked: "unknown",
    text: [],
    inObjects: []
  } : {
    asked: "nothing"
  };
  let w = o(),
    g = l => Object.hasOwn(n, l) ? n[l] : void 0,
    text = p.filter(item => !w.includes(item) && (!unreadable || le(s, item)) && IEn(g(item), () => !0, {
      intoObjects: !0
    })),
    u = Object.keys(n).some(item => !le(s, item));
  return {
    asked: unreadable ? "unknown" : "named",
    text: text,
    inObjects: text.filter(item => !IEn(g(item), () => !0)),
    ...(u && {
      unlisted: !0
    })
  };
}
function le(e, n) {
  try {
    let o = it(e) ? e.properties : void 0;
    return it(o) && Object.hasOwn(o, n);
  } catch {
    return !1;
  }
}
function Re(e) {
  try {
    let n = it(e) ? e.properties : void 0;
    return it(n) ? Object.getOwnPropertyNames(n) : [];
  } catch {
    return [];
  }
}
function smi(e) {
  return {
    error: `No file was sent and ${e} was not called. The program that runs Claude Code made this call outside this session, so Claude Code could not reach the session's note of the connector arguments it asked you to fill with file paths. That note may be the only record of them, so rather than risk sending a file's path to a connector as plain text, Claude Code refuses every connector call made this way, whatever its arguments. The connector is not at fault, and neither is this call: changing it makes no difference. Calling again may or may not work; that depends on the program. Tell the user that the fault is in that program.`,
    code: "path_note_out_of_reach"
  };
}
function imi(e, n) {
  return {
    error: Array.isArray(n) ? `No file was sent and ${e} was not called. Claude Code could not read the tool definitions saved in this conversation, so it cannot tell which connector arguments it asked you to fill with file paths. While that is so, it refuses connector calls that have text in an argument, even inside a list or object, and calls that have an argument ${e} does not list. The one exception is a local file's path in an argument for which Claude Code, or the app that runs it, sends the file. The connector is not at fault. Tell the user that starting a new conversation avoids this.` : `No file was sent and ${e} was not called. Claude Code was given this call without the conversation's messages, so it could not read the tool definitions saved in this conversation and cannot tell which connector arguments it asked you to fill with file paths. While that is so, it refuses connector calls that have text in an argument, even inside a list or object, and calls that have an argument ${e} does not list. The one exception is a local file's path in an argument for which Claude Code, or the app that runs it, sends the file. The connector is not at fault, and a new conversation will not help. Tell the user that the fault is in Claude Code or in the program that runs Claude Code.`,
    code: "path_record_unreadable"
  };
}
function h7o(e) {
  let n = M();
  if (n === j) return !0;
  let o = U(e);
  return (n?.any ?? !1) || o.unreadable || o.tools.size > 0;
}
var j = Symbol("the note of path forms is out of reach");
function M() {
  try {
    return I.peek(H());
  } catch (error) {
    if (Po(ce).value) return t(`[connector upload] this session's note of path forms is out of reach: ${error instanceof Error ? error.name : "a value that is no Error"}`, {
      level: "warn"
    }), j;
    return;
  }
}
function U(e) {
  let tools = new Map();
  if (!Array.isArray(e)) {
    let unreadable_2 = fe();
    if (!ue.said) ue.said = !0, t(unreadable_2 ? "[connector upload] a tool call had no messages list, so the tool definitions this conversation saved could not be read for it; while uploads are on, a call with no list is refused if it holds text outside the arguments the upload fills" : "[connector upload] a tool call had no messages list; uploads are off in this session, so no call is refused for that: it was checked only against the path forms this session showed");
    return {
      tools: tools,
      unreadable: unreadable_2
    };
  }
  let o = me(tools, e);
  if (o.length === 0) return {
    tools: tools,
    unreadable: !1
  };
  let unreadable_3 = fe();
  if (!weakSet.has(e)) weakSet.add(e), t(unreadable_3 ? "[connector upload] reading the tool definitions saved in this conversation threw, so in this conversation connector calls with text outside the arguments the upload fills are refused; a new conversation avoids this" : "[connector upload] reading the tool definitions saved in this conversation threw; uploads are off in this session, so no call is refused for that: a call that is checked is judged by the definitions that could be read and the path forms this session showed"), a(o[0]);
  return {
    tools: tools,
    unreadable: unreadable_3
  };
}
function me(e, n) {
  let o = [],
    r = !1;
  try {
    let d = weakMap_4.get(n),
      rows = d !== void 0 && d.length === n.length && d.last === n.at(-1) ? d.rows : new WeakMap();
    for (let p of n) {
      let w;
      try {
        if (!D(p)) continue;
        let {
            attachment: attachment
          } = p,
          y = rows.get(p);
        if (y !== void 0 && y.attachment === attachment) {
          if (w = y.asks, y.damage !== void 0) o.push(y.damage);
        } else {
          let u = [],
            l = Ee(p, u);
          if (l.length === 0 && u.length === 0) continue;
          let asks = new Map();
          w = asks;
          for (let [m, b] of l) {
            let k = C(it(b) ? b.input_schema : void 0);
            if (k.length === 0) continue;
            let A = asks.get(m) ?? new Set();
            for (let O of k) A.add(O);
            asks.set(m, A);
          }
          rows.set(p, {
            attachment: attachment,
            asks: asks,
            ...(u.length > 0 && {
              damage: u[0]
            })
          }), o.push(...u);
        }
      } catch (error) {
        r = !0, o.push(error);
      }
      if (w === void 0) continue;
      for (let [g, y] of w) {
        let u = e.get(g) ?? new Set();
        for (let l of y) u.add(l);
        e.set(g, u);
      }
    }
    if (!r) weakMap_4.set(n, {
      length: n.length,
      last: n.at(-1),
      rows: rows
    });
    let h = [];
    for (let p of n) try {
      if (D(p)) {
        let {
            attachment: attachment_2,
            uuid: l
          } = p,
          c = attachment_2.type === "deferred_tools_delta" ? attachment_2.surfacedNames : void 0,
          m = Array.isArray(c) ? c : [];
        for (let toolName of m) if (typeof toolName === "string") h.push({
          toolUseId: l,
          toolName: toolName
        });
        continue;
      }
      let w = it(p) && p.type === "user" ? p.message : void 0,
        g = typeof w === "object" && w !== null && "content" in w ? w.content : void 0,
        y = Array.isArray(g) ? g : [];
      for (let u of y) if (lLe(u) && typeof u.tool_use_id === "string") {
        for (let l of u.content) if (Qze(l)) h.push({
          toolUseId: u.tool_use_id,
          toolName: l.tool_name
        });
      }
    } catch (error) {
      o.push(error);
    }
    for (let p of h) {
      let w = K$().get(p),
        g = w?.kind === "sent" ? w.entry.schema : void 0;
      if (!it(g) || typeof g.name !== "string") continue;
      let y = e.get(g.name) ?? new Set();
      for (let u of C(g.input_schema)) y.add(u);
      if (y.size > 0) e.set(g.name, y);
    }
  } catch (error) {
    o.push(error);
  }
  let s = weakMap_5.get(n);
  if (s !== void 0) {
    for (let [d, f] of s.asks) {
      let h = e.get(d) ?? new Set();
      for (let p of f) h.add(p);
      e.set(d, h);
    }
    o.push(...s.thrown);
  }
  return o;
}
function xe(e) {
  let asks_2 = new Map(),
    o = me(asks_2, e);
  return asks_2.size === 0 && o.length === 0 ? void 0 : {
    asks: asks_2,
    thrown: o.slice(0, 1)
  };
}
function ami(e) {
  let n = xe(e);
  if (n === void 0) return;
  let o = Object.freeze([]);
  return weakMap_5.set(o, n), weakSet.add(o), o;
}
function fe() {
  let e = Y2() ? !0 : !1;
  return !r5e() && !e && _e(tar());
}
function _e(e) {
  return e === "unreadable" ? m7o() : e;
}
function Ee(e, n) {
  if (!D(e)) return [];
  switch (e.attachment.type) {
    case "prompt_snapshot":
      {
        let o = cD([e]);
        if (o === void 0) throw Error("a saved prompt_snapshot row does not read as one");
        return [...o.toolEntries];
      }
    case "deferred_tools_record":
      {
        let {
            entries: entries
          } = Q9([e]),
          r = e.attachment.entries;
        if (!Array.isArray(r) || r.some(item => !it(item) || typeof item.name !== "string" || !entries.has(item.name))) n.push(Error("a saved deferred_tools_record row does not read as one"));
        return [...entries];
      }
    case "deferred_tools_delta":
      return [...jze([e]).values()].flatMap(item => [...item].map(([r, {
        definition: definition
      }]) => [r, definition]));
    default:
      return [];
  }
}
function D(e) {
  return it(e) && e.type === "attachment" && it(e.attachment);
}
export { n5e, c7o, Zpi, emi, Zir, tmi, ear, nmi, IEn, r5e, tar, u7o, f7o, nar, rmi, p7o, m7o, omi, HXr, g6t, smi, imi, h7o, ami };