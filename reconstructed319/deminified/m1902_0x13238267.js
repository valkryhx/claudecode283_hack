// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { p } from "B:/~BUN/root/chunk-z6138ats.js";
import { $le } from "B:/~BUN/root/chunk-mja4vhvw.js";
import { xJe, PJe, dkr, yZt, qoe, _Zt, KZ, Xze, ckr, D_s, bZt, L_s, Gpt } from "B:/~BUN/root/chunk-e8znf4zw.js";
import { Lhe } from "B:/~BUN/root/chunk-ex6b1s3x.js";
import { Wo } from "B:/~BUN/root/chunk-wm671vgg.js";
import { o, E, u, B, Ep } from "B:/~BUN/root/chunk-4bfd0jkf.js";
var $st = Wo({
  kind: "ide_onboarding",
  payload: p(() => u({
    installationStatus: Ep(e => typeof e === "object" && e !== null).nullable()
  })),
  result: p(() => B(["dismissed", "cancelled"])),
  default: "cancelled"
});
var iTt = Wo({
  kind: "left_arrow_confirm",
  payload: p(() => u({
    summary: o(),
    carryOverCount: E(),
    monitorParkCount: E(),
    workflowAgents: u({
      running: E(),
      finished: E(),
      rerun: E()
    })
  })),
  result: p(() => B(["confirm", "stay", "cancelled"])),
  default: "cancelled",
  hideWhile: []
});
var Ust = Wo({
    kind: "lsp_recommendation",
    payload: p(() => u({
      pluginName: o(),
      pluginDescription: o().optional(),
      marketplaceName: o(),
      fileExtension: o()
    })),
    result: p(() => B(["yes", "no", "timeout", "never", "disable", "cancelled"])),
    default: "cancelled",
    hideWhile: ["panel", "draft"]
  }),
  Bst = Wo({
    kind: "plugin_hint",
    payload: p(() => u({
      pluginName: o(),
      pluginDescription: o().optional(),
      marketplaceName: o(),
      sourceCommand: o()
    })),
    result: p(() => B(["yes", "no", "disable", "cancelled"])),
    default: "cancelled",
    hideWhile: ["panel", "draft"]
  });
var jst = new Set([Ust.kind, Bst.kind, iTt.kind, $le.kind, Lhe.kind, dkr, yZt, qoe, _Zt, KZ, Xze, $st.kind, ckr, ...(D_s === null ? [] : [D_s]), ...(bZt === null ? [] : [bZt]), ...(L_s === null ? [] : [L_s]), xJe, PJe, ...(Gpt === null ? [] : [Gpt])]);
function F0(e) {
  return e.open.findLast(n => n.userInvoked !== !0 && !jst.has(n.kind)) ?? null;
}
function dei(e) {
  return e.open.findLast(n => n.userInvoked !== !0 && n.askOrder !== void 0)?.askOrder;
}
export { $st, iTt, Ust, Bst, jst, F0, dei };