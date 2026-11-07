// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  x_
} from "B:/~BUN/root/chunk-bkfncj77.js";
import {
  p
} from "B:/~BUN/root/chunk-z6138ats.js";
import {
  Wo
} from "B:/~BUN/root/chunk-wm671vgg.js";
import {
  o,
  E,
  I,
  C,
  u,
  Dr,
  B,
  T
} from "B:/~BUN/root/chunk-4bfd0jkf.js";
var aKt = 200;

function lKt(e, t) {
  return e === null ? "no messages yet" : `active ${x_(new Date(e),{now:t})}`
}
var n = p(() => u({
    sends: B(["message", "brief"]),
    newProjectName: o(),
    projects: C(u({
      id: o(),
      name: o(),
      lastMessageAtMs: E().nullable()
    })).max(aKt),
    truncated: I(),
    listError: o().optional()
  })),
  r = p(() => Dr("choice", [u({
    choice: T("new")
  }), u({
    choice: T("existing"),
    projectId: o()
  }), u({
    choice: T("cancel")
  })])),
  UGo = Wo({
    kind: "continue_in_projects_target",
    payload: n,
    result: r,
    default: {
      choice: "cancel"
    },
    hideWhile: []
  });
export {
  aKt,
  lKt,
  UGo
};
