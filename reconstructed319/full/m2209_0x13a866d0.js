// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  p
} from "B:/~BUN/root/chunk-z6138ats.js";
import {
  Wo
} from "B:/~BUN/root/chunk-wm671vgg.js";
import {
  o,
  I,
  u,
  Dr,
  T
} from "B:/~BUN/root/chunk-4bfd0jkf.js";
var ZKr = "What should the message say?";

function eqr(e) {
  return e.creates ? `Sent as you to a new Claude Project, \u201C${e.projectName}\u201D, after you confirm it.` : `Sent as you to ${e.projectName}, after you confirm it.`
}
var t = p(() => u({
    projectName: o(),
    creates: I()
  })),
  c = p(() => Dr("choice", [u({
    choice: T("send"),
    message: o()
  }), u({
    choice: T("cancel")
  })])),
  xGo = Wo({
    kind: "continue_in_projects_compose",
    payload: t,
    result: c,
    default: {
      choice: "cancel"
    },
    hideWhile: []
  });
export {
  ZKr,
  eqr,
  xGo
};
