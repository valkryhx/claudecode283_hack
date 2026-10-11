// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { ct } from "B:/~BUN/root/chunk-tsjnk8ma.js";
import { x1t, qr } from "B:/~BUN/root/chunk-y04k89s2.js";
import { p$ } from "B:/~BUN/root/chunk-yehxgs7w.js";
import { G } from "B:/~BUN/root/chunk-ah3egpyh.js";
var u = ["note", "lang"],
  resultNote = `Note: \`label\` was longer than ${p$} characters and was cut to that length; only its start was kept. A label is a few words naming the version, not a description of the changes.`;
function mqt(n) {
  if (!G(n)) return null;
  let d = u.filter(item => item in n),
    t;
  if (typeof n.label === "string" && x1t(n.label) > p$) {
    let e = n.label.replaceAll(`\r
`, `
`).trim(),
      cut = x1t(e) > p$;
    t = {
      value: cut ? qr(e, p$).trimEnd() : e,
      cut: cut
    };
  }
  let s, r;
  if (n.action === "call_endpoint" && typeof n.body === "string") {
    let e = ct(n.body, !1);
    if (Array.isArray(e)) s = "array";else if (e !== null && typeof e === "object") s = "object";
    r = e;
  }
  let l;
  if (n.action === "write_db" && typeof n.data === "string") {
    let e = ct(n.data, !1);
    if (G(e)) l = e;
  }
  let a = (n.action === void 0 || n.action === "publish") && Array.isArray(n.files) && n.files.some(item => typeof item === "string") ? n.files.map(e => typeof e === "string" ? {
    path: e
  } : e) : void 0;
  if (d.length === 0 && s === void 0 && l === void 0 && a === void 0 && t === void 0) return null;
  let input = {
      ...n
    },
    i = [];
  for (let e of d) delete input[e], i.push(`legacy_${e}`);
  if (s !== void 0) input.body = r, i.push(`body_json_string_to_${s}`);
  if (l !== void 0) input.data = l, i.push("data_json_string_to_object");
  if (a !== void 0) input.files = a, i.push("files_string_list");
  if (t !== void 0) input.label = t.value, i.push(t.cut ? "label_clamped" : "label_trimmed");
  return {
    input: input,
    shapeClass: i.join("+"),
    ...(t?.cut && {
      resultNote: resultNote
    })
  };
}
export { mqt };