// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import o from "path";
var ze = "Read",
  kie = "allow_large",
  c_t = new Set(["png", "jpg", "jpeg", "gif", "webp"]);

function HVe(t) {
  let e = o.extname(t).toLowerCase().slice(1);
  return c_t.has(e) || e === "pdf"
}
export {
  ze,
  kie,
  c_t,
  HVe
};
