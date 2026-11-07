// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { b } from "B:/~BUN/root/chunk-drx9cnw1.js";
import { t, _ } from "B:/~BUN/root/chunk-2pp12te6.js";
import { l } from "B:/~BUN/root/chunk-mb9chr1y.js";
import { Ago, Xzi } from "B:/~BUN/root/chunk-x6frvp1m.js";
import { D } from "B:/~BUN/root/chunk-8mqsat26.js";
var y = 32,
  f = new Set(["array", "boolean", "integer", "null", "number", "object", "string"]),
  v = /^[A-Za-z_][-A-Za-z0-9._]*$/u,
  g = /^[^#]*#?$/u;
function c(a, n = 0) {
  if (typeof a === "boolean") return !0;
  if (!D(a) || n > y) return !1;
  for (let i in a) {
    let e = a[i];
    switch (i) {
      case "type":
        if (f.has(e)) break;
        if (!Array.isArray(e) || e.length === 0 || new Set(e).size !== e.length) return !1;
        for (let r of e) if (!f.has(r)) return !1;
        break;
      case "title":
      case "description":
      case "format":
      case "pattern":
      case "$comment":
      case "$schema":
      case "$ref":
      case "$dynamicRef":
      case "$recursiveRef":
      case "contentEncoding":
      case "contentMediaType":
        if (typeof e !== "string") return !1;
        break;
      case "$id":
        if (typeof e !== "string" || !g.test(e)) return !1;
        break;
      case "$anchor":
      case "$dynamicAnchor":
      case "$recursiveAnchor":
        if (typeof e !== "string" || !v.test(e)) return !1;
        break;
      case "properties":
      case "patternProperties":
      case "dependentSchemas":
      case "$defs":
      case "definitions":
        if (!D(e)) return !1;
        for (let r in e) if (!c(e[r], n + 1)) return !1;
        break;
      case "items":
      case "contains":
      case "additionalProperties":
      case "propertyNames":
      case "if":
      case "then":
      case "else":
      case "not":
      case "unevaluatedItems":
      case "unevaluatedProperties":
      case "contentSchema":
        if (!c(e, n + 1)) return !1;
        break;
      case "prefixItems":
      case "allOf":
      case "anyOf":
      case "oneOf":
        if (!Array.isArray(e) || e.length === 0) return !1;
        for (let r of e) if (!c(r, n + 1)) return !1;
        break;
      case "required":
        if (!Array.isArray(e) || new Set(e).size !== e.length) return !1;
        for (let r of e) if (typeof r !== "string") return !1;
        break;
      case "enum":
      case "examples":
        if (!Array.isArray(e)) return !1;
        break;
      case "minimum":
      case "maximum":
      case "exclusiveMinimum":
      case "exclusiveMaximum":
        if (!Number.isFinite(e)) return !1;
        break;
      case "maxLength":
      case "minLength":
      case "maxItems":
      case "minItems":
      case "maxContains":
      case "minContains":
      case "maxProperties":
      case "minProperties":
        if (!Number.isInteger(e) || Number(e) < 0) return !1;
        break;
      case "uniqueItems":
      case "deprecated":
      case "readOnly":
      case "writeOnly":
        if (typeof e !== "boolean") return !1;
        break;
      case "const":
      case "default":
        break;
      case "multipleOf":
        if (!Number.isFinite(e) || Number(e) <= 0) return !1;
        break;
      case "dependentRequired":
      case "dependencies":
      case "$vocabulary":
        return !1;
      default:
        break;
    }
  }
  return !0;
}
var m = "https://json-schema.org/draft/2020-12/schema",
  u;
function A() {
  if (u === void 0) {
    try {
      let a = import.meta.require("B:/~BUN/root/chunk-sc59msns.js");
      u = typeof a.default === "function" ? a.default : null;
    } catch {
      u = null;
    }
    if (u === null) t("MCP: draft 2020-12 meta-validator unavailable \u2014 tool schema checks fail open", {
      level: "warn"
    }), l("tengu_mcp_degraded", {
      reason: b("schema_validator_unavailable")
    });
  }
  return u;
}
function S(a) {
  if (!D(a) || !D(a.properties)) return null;
  for (let n of Object.keys(a.properties)) if (!Ago.test(n)) return n;
  return null;
}
function p(a) {
  return k(A, a, !1);
}
function k(a, n, i) {
  let e = S(n);
  if (e !== null) return {
    valid: !1,
    check: "propertyKey",
    detail: `property key ${_(e.slice(0, 80))} does not match ${Ago}`
  };
  let r = n;
  if (D(n)) {
    let o = Object.entries(n);
    if (o.some(([, d]) => d === null)) o = o.filter(([, d]) => d !== null), r = Object.fromEntries(o);
    let $schema = r.$schema;
    if ($schema !== void 0) if (i) {
      let {
        $schema: $schema_2,
        ...h
      } = r;
      r = h;
    } else if (typeof $schema === "string" && ($schema === m || $schema === `${m}#`)) ;else return {
      valid: !0
    };
  }
  try {
    if (c(r)) return {
      valid: !0
    };
    let o = a();
    if (o === null) return {
      valid: !0
    };
    if (o(r)) return {
      valid: !0
    };
    let s = o.errors?.[0];
    return {
      valid: !1,
      check: "meta",
      detail: s ? `schema${s.instancePath} ${s.message ?? "is invalid"}` : "schema is invalid"
    };
  } catch (error) {
    return {
      valid: !1,
      check: "meta",
      detail: `validation threw: ${error instanceof Error ? error.message : String(error)}`
    };
  }
}
function Rkn(a, n) {
  let i = Xzi(a);
  if (i.outcome === "drop") return {
    verdict: "drop",
    cause: "schema_unsupported",
    reason: i.reason
  };
  if (i.outcome === "normalized" && !n.normalizeEnabled) return {
    verdict: "drop",
    cause: "normalize_gated",
    reason: `its input schema uses top-level ${i.combinators.join("/")}, which the Anthropic API does not accept`
  };
  let normalized = i.outcome === "normalized" ? {
      schema: i.schema,
      note: i.note,
      combinators: i.combinators
    } : void 0,
    r = p(normalized?.schema ?? a);
  if (r.valid) return {
    verdict: "send",
    normalized: normalized,
    apiWouldReject: void 0
  };
  if (!n.apiValidateEnabled) return {
    verdict: "send",
    normalized: normalized,
    apiWouldReject: r
  };
  return {
    verdict: "drop",
    cause: "api_invalid",
    normalized: normalized,
    rejection: r
  };
}
export { Rkn };