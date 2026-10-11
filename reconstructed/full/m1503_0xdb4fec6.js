// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.283
import {
  Fd
} from "B:/~BUN/root/chunk-y2pt1fm0.js";
import {
  Anr
} from "B:/~BUN/root/chunk-fktnm340.js";
import {
  Qp
} from "B:/~BUN/root/chunk-xyqb4s7p.js";
import {
  ds
} from "B:/~BUN/root/chunk-2pww2v3x.js";
import {
  cI
} from "B:/~BUN/root/chunk-zav2qxje.js";

function fkn() {
  return [{
    type: "text",
    text: Anr()
  }]
}

function $qo() {
  ds({
    name: cI,
    description: `Reference for writing a ${Fd} tool script (script API and gotchas, resume, quality patterns, worked examples). Load before authoring a script for a workflow the user already opted into; it does not itself authorize running one.`,
    menuDescription: "Load the reference for writing Workflow tool scripts",
    userInvocable: !0,
    isEnabled: () => Qp(),
    async getPromptForCommand() {
      return fkn()
    }
  })
}
export {
  fkn,
  $qo
};
