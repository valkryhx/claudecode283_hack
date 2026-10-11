// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { H } from "B:/~BUN/root/chunk-dkxhwhft.js";
import { dZt, Hwr, Pgo, kh } from "B:/~BUN/root/chunk-3jyp964r.js";
import { dcn, Hs } from "B:/~BUN/root/chunk-aky7m4ay.js";
function VBe(e) {
  return H() && e !== void 0 ? Pgo(adopt => Hwr({
    recordOperation: o => {
      dZt(o, e);
    },
    adopt: adopt
  })) : kh();
}
function rWt(e, t, o) {
  let r = Hs(t, o);
  return e.engineStore.adopt(dcn(r)), r;
}
export { VBe, rWt };