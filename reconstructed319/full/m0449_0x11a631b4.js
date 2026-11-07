// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
var tEr = /^[A-Za-z0-9_.:-]{1,128}$/;

function nU(n) {
  return typeof n === "string" && tEr.test(n) ? n : void 0
}
export {
  tEr,
  nU
};
