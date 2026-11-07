// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { p } from "B:/~BUN/root/chunk-z6138ats.js";
import { Wo } from "B:/~BUN/root/chunk-wm671vgg.js";
import { o, I, Ih, u } from "B:/~BUN/root/chunk-4bfd0jkf.js";
var ag = Wo({
    kind: "local_jsx",
    payload: p(() => u({
      nodeId: o(),
      commandName: o(),
      immediate: I(),
      hidesPrompt: I(),
      holdsQueue: I().optional()
    })),
    result: p(() => Ih()),
    default: null,
    userInvoked: !0,
    hideWhile: []
  }),
  t = p(() => u({
    holdsQueue: I().optional()
  }));
function Xqt(a) {
  return a.open.some(item => item.kind === ag.kind && t().safeParse(item.payload).data?.holdsQueue !== !1);
}
var w6o = new Set(["rate-limit-options", "pro-trial-expired"]);
export { ag, Xqt, w6o };