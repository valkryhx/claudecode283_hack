// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { p } from "B:/~BUN/root/chunk-z6138ats.js";
import { Wo } from "B:/~BUN/root/chunk-wm671vgg.js";
import { o, I, u, Dr, T } from "B:/~BUN/root/chunk-4bfd0jkf.js";
function Szt(e, t) {
  return t ? `Create the project \u201C${e}\u201D and send this message?` : `Send this message to ${e}?`;
}
var wzt = "Choose Send again to confirm.",
  payload = p(() => u({
    projectName: o(),
    creates: I(),
    message: o()
  })),
  result = p(() => Dr("choice", [u({
    choice: T("send")
  }), u({
    choice: T("cancel")
  })])),
  kma = Wo({
    kind: "continue_in_projects_message",
    payload: payload,
    result: result,
    default: {
      choice: "cancel"
    },
    hideWhile: []
  });
export { Szt, wzt, kma };