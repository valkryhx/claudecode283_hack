// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { t } from "B:/~BUN/root/chunk-qe2zga5e.js";
import { DAe } from "B:/~BUN/root/chunk-ah3egpyh.js";
import { pF } from "B:/~BUN/root/chunk-zfb6h1v8.js";
import { vo } from "B:/~BUN/root/chunk-yv67t8hr.js";
var Csr = {};
vo(Csr, {
  builtinToolSchemasOf: () => ZKt,
  default: () => Csr
});
function Tsr(e) {
  try {
    return DAe(e, {
      unrepresentable: "any"
    });
  } catch (error) {
    t(`plugin-types: an output schema did not convert: ${error}`);
    return;
  }
}
var ZKt = e => e.filter(item => item.isMcp !== !0).map(item => ({
  name: item.name,
  inputSchema: item.inputJSONSchema ?? pF(item.inputSchema),
  ...(item.outputSchema !== void 0 && {
    outputSchema: Tsr(item.outputSchema)
  })
}));
export { Tsr, ZKt, Csr };