// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { et } from "B:/~BUN/root/chunk-fkr27nhj.js";
import { KA, Oi } from "B:/~BUN/root/chunk-n8cnxns2.js";
import { e5 } from "B:/~BUN/root/chunk-3v92y8yw.js";
import { cbt } from "B:/~BUN/root/chunk-3xdsa4p8.js";
import { D } from "B:/~BUN/root/chunk-8mqsat26.js";
var u = ["note", "lang"],
  resultNote = `Note: \`label\` was longer than ${e5} characters and was cut to that length; only its start was kept. A label is a few words naming the version, not a description of the changes.`;
function CJn(t) {
  if (!D(t)) return null;
  let r = u.filter(item => item in t),
    o;
  if (typeof t.label === "string" && KA(t.label) > e5) {
    let e = t.label.replaceAll(`\r
`, `
`).trim(),
      cut = KA(e) > e5;
    o = {
      value: cut ? Oi(e, e5).trimEnd() : e,
      cut: cut
    };
  }
  let s, a;
  if (t.action === "call_endpoint" && typeof t.body === "string") {
    let stripped = cbt(et(t.body, !1)).stripped;
    if (Array.isArray(stripped)) s = "array";else if (stripped !== null && typeof stripped === "object") s = "object";
    a = stripped;
  }
  let l;
  if (t.action === "write_db" && typeof t.data === "string") {
    let stripped_2 = cbt(et(t.data, !1)).stripped;
    if (D(stripped_2)) l = stripped_2;
  }
  let d = (t.action === void 0 || t.action === "publish") && Array.isArray(t.files) && t.files.some(item => typeof item === "string") ? t.files.map(e => typeof e === "string" ? {
      path: e
    } : e) : void 0,
    f = (t.action === void 0 || t.action === "publish") && Array.isArray(t.edits) && t.edits.length === 0;
  if (r.length === 0 && s === void 0 && l === void 0 && d === void 0 && !f && o === void 0) return null;
  let input = {
      ...t
    },
    i = [];
  for (let e of r) delete input[e], i.push(`legacy_${e}`);
  if (s !== void 0) input.body = a, i.push(`body_json_string_to_${s}`);
  if (l !== void 0) input.data = l, i.push("data_json_string_to_object");
  if (d !== void 0) input.files = d, i.push("files_string_list");
  if (f) delete input.edits, i.push("edits_empty");
  if (o !== void 0) input.label = o.value, i.push(o.cut ? "label_clamped" : "label_trimmed");
  return {
    input: input,
    shapeClass: i.join("+"),
    ...(o?.cut && {
      resultNote: resultNote
    })
  };
}
export { CJn };