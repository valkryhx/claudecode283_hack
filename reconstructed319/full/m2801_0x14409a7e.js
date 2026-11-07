// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  Ee
} from "B:/~BUN/root/chunk-game8aqv.js";
import {
  p
} from "B:/~BUN/root/chunk-z6138ats.js";
import {
  J5,
  xY
} from "B:/~BUN/root/chunk-wr6kgh84.js";
import {
  TY
} from "B:/~BUN/root/chunk-y1bqc7ky.js";
import {
  I4e
} from "B:/~BUN/root/chunk-5n9rt7jw.js";
import {
  I,
  u,
  He,
  T
} from "B:/~BUN/root/chunk-4bfd0jkf.js";
var i = "anthropic/renderUnderSessionRules";

function ima() {
  return {
    experimental: {
      [i]: {
        v: 1
      }
    }
  }
}
var z = p(() => u({
  experimental: u({
    [i]: u({
      v: T(1)
    })
  })
}));
var a = p(() => He({
  v: T(1),
  permissionContext: J5(),
  offersHandOff: I(),
  classifiesEveryCall: I(),
  grantsApply: I()
}));

function VMo(r, n, t) {
  let e = xY(r) ? void 0 : a().safeParse(r).data;
  if (e === void 0 || n === void 0) return;
  let {
    mode: s,
    ...o
  } = e.permissionContext;
  if (!(s === "default" || s === "dontAsk" || s === "acceptEdits" || s === "auto" && e.offersHandOff) || Object.values(o.alwaysAllowRules).some((l) => l.length > 0) || o.strippedDangerousRules !== void 0 || o.additionalWorkingDirectories.$map.length > 0 || o.trustedNetworkDirectories !== void 0) return;
  return {
    offersHandOff: e.offersHandOff,
    classifiesEveryCall: e.classifiesEveryCall,
    toolPermissionContext: {
      ...I4e(TY(e.permissionContext, n, Ee(), t)),
      ...!e.grantsApply && {
        pollEventDeliveryGuard: !0
      }
    }
  }
}
export {
  ima,
  VMo
};
