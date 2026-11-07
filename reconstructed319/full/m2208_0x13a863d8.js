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
  u,
  Dr,
  T
} from "B:/~BUN/root/chunk-4bfd0jkf.js";
var tqr = "Remote Control is off, so this session can\u2019t be sent",
  nqr = "/send-to-project needs Remote Control so a Claude Project can read this session.",
  rqr = "Turn on Remote Control and send",
  o = p(() => u({})),
  e = p(() => Dr("choice", [u({
    choice: T("turn_on")
  }), u({
    choice: T("no")
  })])),
  PGo = Wo({
    kind: "continue_in_projects_remote_control",
    payload: o,
    result: e,
    default: {
      choice: "no"
    },
    hideWhile: ["panel", "draft"]
  });
export {
  tqr,
  nqr,
  rqr,
  PGo
};
