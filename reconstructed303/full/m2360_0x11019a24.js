// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.303
import {
  ke
} from "B:/~BUN/root/chunk-rpez7z7a.js";
import {
  f
} from "B:/~BUN/root/chunk-frrkt2bs.js";
import {
  Vde,
  qde
} from "B:/~BUN/root/chunk-m3m0fcyj.js";
import {
  Gde
} from "B:/~BUN/root/chunk-0bwx376j.js";
import {
  M,
  u,
  De,
  C
} from "B:/~BUN/root/chunk-g3snhg6n.js";
var i = "anthropic/renderUnderSessionRules";

function jZs() {
  return {
    experimental: {
      [i]: {
        v: 1
      }
    }
  }
}
var x = f(() => u({
  experimental: u({
    [i]: u({
      v: C(1)
    })
  })
}));
var l = f(() => De({
  v: C(1),
  permissionContext: Vde(),
  offersHandOff: M(),
  classifiesEveryCall: M(),
  grantsApply: M()
}));

function YWr(r, n) {
  let e = qde(r) ? void 0 : l().safeParse(r).data;
  if (e === void 0 || n === void 0) return;
  let {
    mode: s,
    ...o
  } = e.permissionContext;
  if (!(s === "default" || s === "dontAsk" || s === "acceptEdits" || s === "auto" && e.offersHandOff) || Object.values(o.alwaysAllowRules).some((t) => t.length > 0) || o.strippedDangerousRules !== void 0 || o.additionalWorkingDirectories.$map.length > 0 || o.trustedNetworkDirectories !== void 0) return;
  return {
    offersHandOff: e.offersHandOff,
    classifiesEveryCall: e.classifiesEveryCall,
    toolPermissionContext: {
      ...Gde(e.permissionContext, n, ke()),
      ...!e.grantsApply && {
        pollEventDeliveryGuard: !0
      }
    }
  }
}
export {
  jZs,
  YWr
};
