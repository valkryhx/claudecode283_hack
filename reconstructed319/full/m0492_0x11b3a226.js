// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
var s1 = 300000,
  pA = 3600000;

function MMt(e) {
  if ((e?.cache_creation?.ephemeral_5m_input_tokens ?? 0) > 0) return "5m";
  return (e?.cache_creation?.ephemeral_1h_input_tokens ?? 0) > 0 ? "1h" : void 0
}
export {
  s1,
  pA,
  MMt
};
