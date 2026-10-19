// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { au } from "B:/~BUN/root/chunk-tkkhtfwq.js";
import { C8r } from "B:/~BUN/root/chunk-f05d6ff4.js";
import { Wg } from "B:/~BUN/root/chunk-pmw6knpp.js";
import { ri } from "B:/~BUN/root/chunk-8zz6429p.js";
import { ED as name } from "B:/~BUN/root/chunk-72f62gjz.js";
function rir() {
  return [{
    type: "text",
    text: C8r()
  }];
}
function Dti() {
  ri({
    name: name,
    description: `Reference for writing a ${au} tool script (script API and gotchas, resume, quality patterns, worked examples). Load before authoring a script for a workflow the user already opted into; it does not itself authorize running one.`,
    menuDescription: "Load the reference for writing Workflow tool scripts",
    userInvocable: !0,
    isEnabled: () => Wg(),
    async getPromptForCommand() {
      return rir();
    }
  });
}
export { rir, Dti };