// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { y } from "B:/~BUN/root/chunk-kks4mj3w.js";
import { b, t } from "B:/~BUN/root/chunk-qe2zga5e.js";
import { i } from "B:/~BUN/root/chunk-728mwbhs.js";
import { G } from "B:/~BUN/root/chunk-ah3egpyh.js";
import { fBn, Gwo } from "B:/~BUN/root/chunk-1mdeqc2r.js";
var s = "https://json-schema.org/draft/2020-12/schema",
  c;
function f() {
  if (c === void 0) {
    try {
      let e = import.meta.require("B:/~BUN/root/chunk-003qt66n.js");
      c = typeof e.default === "function" ? e.default : null;
    } catch {
      c = null;
    }
    if (c === null) t("MCP: draft 2020-12 meta-validator unavailable \u2014 tool schema checks fail open", {
      level: "warn"
    }), i("tengu_mcp_degraded", {
      reason: y("schema_validator_unavailable")
    });
  }
  return c;
}
function h() {
  return !1;
}
function v(e) {
  if (!G(e) || !G(e.properties)) return null;
  for (let r of Object.keys(e.properties)) if (!fBn.test(r)) return r;
  return null;
}
function m(e) {
  return _(f(), e, h());
}
function _(e, r, n) {
  let l = v(r);
  if (l !== null) return {
    valid: !1,
    check: "propertyKey",
    detail: `property key ${b(l.slice(0, 80))} does not match ${fBn}`
  };
  if (e === null) return {
    valid: !0
  };
  let a = r;
  if (G(r)) {
    let o = Object.entries(r);
    if (o.some(([, u]) => u === null)) o = o.filter(([, u]) => u !== null), a = Object.fromEntries(o);
    let $schema = a.$schema;
    if ($schema !== void 0) if (n) {
      let {
        $schema: $schema_2,
        ...p
      } = a;
      a = p;
    } else if (typeof $schema === "string" && ($schema === s || $schema === `${s}#`)) ;else return {
      valid: !0
    };
  }
  try {
    if (e(a)) return {
      valid: !0
    };
    let o = e.errors?.[0];
    return {
      valid: !1,
      check: "meta",
      detail: o ? `schema${o.instancePath} ${o.message ?? "is invalid"}` : "schema is invalid"
    };
  } catch (error) {
    return {
      valid: !1,
      check: "meta",
      detail: `validation threw: ${error instanceof Error ? error.message : String(error)}`
    };
  }
}
function kEt(e, r) {
  let n = Gwo(e);
  if (n.outcome === "drop") return {
    verdict: "drop",
    cause: "schema_unsupported",
    reason: n.reason
  };
  if (n.outcome === "normalized" && !r.normalizeEnabled) return {
    verdict: "drop",
    cause: "normalize_gated",
    reason: `its input schema uses top-level ${n.combinators.join("/")}, which the Anthropic API does not accept`
  };
  let normalized = n.outcome === "normalized" ? {
      schema: n.schema,
      note: n.note,
      combinators: n.combinators
    } : void 0,
    a = m(normalized?.schema ?? e);
  if (a.valid) return {
    verdict: "send",
    normalized: normalized,
    apiWouldReject: void 0
  };
  if (!r.apiValidateEnabled) return {
    verdict: "send",
    normalized: normalized,
    apiWouldReject: a
  };
  return {
    verdict: "drop",
    cause: "api_invalid",
    normalized: normalized,
    rejection: a
  };
}
export { kEt };