// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  qu
} from "B:/~BUN/root/chunk-8rnfdnh3.js";
import {
  im
} from "B:/~BUN/root/chunk-22y97556.js";
import {
  GGo
} from "B:/~BUN/root/chunk-azpw3s41.js";
import {
  Nl
} from "B:/~BUN/root/chunk-3vrk9h6f.js";
import {
  z$
} from "B:/~BUN/root/chunk-hskja58z.js";

function _qr() {
  return [{
    type: "text",
    text: GGo()
  }]
}

function Sga() {
  Nl({
    name: z$,
    description: `Reference for writing a ${qu} tool script (script API and gotchas, resume, quality patterns, worked examples). Load before authoring a script for a workflow the user already opted into; it does not itself authorize running one.`,
    menuDescription: "Load the reference for writing Workflow tool scripts",
    userInvocable: !0,
    isEnabled: () => im(),
    async getPromptForCommand() {
      return _qr()
    }
  })
}
export {
  _qr,
  Sga
};
