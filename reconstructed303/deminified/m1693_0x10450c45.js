// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { pt } from "B:/~BUN/root/chunk-cqkcn3bx.js";
import { Ade, qs } from "B:/~BUN/root/chunk-nggrknsv.js";
import { y2 } from "B:/~BUN/root/chunk-qp0344nb.js";
import { QQe } from "B:/~BUN/root/chunk-8ye9n4fk.js";
import { N } from "B:/~BUN/root/chunk-nkxgam12.js";
var u = ["note", "lang"],
  resultNote = `Note: \`label\` was longer than ${y2} characters and was cut to that length; only its start was kept. A label is a few words naming the version, not a description of the changes.`;
function lEn(t) {
  if (!N(t)) return null;
  let r = u.filter(item => item in t),
    o;
  if (typeof t.label === "string" && Ade(t.label) > y2) {
    let e = t.label.replaceAll(`\r
`, `
`).trim(),
      cut = Ade(e) > y2;
    o = {
      value: cut ? qs(e, y2).trimEnd() : e,
      cut: cut
    };
  }
  let s, a;
  if (t.action === "call_endpoint" && typeof t.body === "string") {
    let stripped = QQe(pt(t.body, !1)).stripped;
    if (Array.isArray(stripped)) s = "array";else if (stripped !== null && typeof stripped === "object") s = "object";
    a = stripped;
  }
  let l;
  if (t.action === "write_db" && typeof t.data === "string") {
    let stripped_2 = QQe(pt(t.data, !1)).stripped;
    if (N(stripped_2)) l = stripped_2;
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
export { lEn };