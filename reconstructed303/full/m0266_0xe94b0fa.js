// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.303
import {
  f
} from "B:/~BUN/root/chunk-frrkt2bs.js";
import {
  Qe,
  Rge
} from "B:/~BUN/root/chunk-5k20pvvh.js";
import {
  Bu,
  De
} from "B:/~BUN/root/chunk-g3snhg6n.js";

function wOr(e, n) {
  return e !== void 0 && Number.isInteger(e) && e >= 6 && e <= n ? e : 6
}
var BNt = {
    first: 5,
    permissionRequestRenames: 6,
    readAllowLarge: 7,
    editOriginalFile: 8,
    containerSearchTools: 9,
    managedHookCall: 10,
    keptBackgroundCommands: 11,
    readCallsByToolUseId: 12
  },
  r = Math.max(...Object.values(BNt)),
  c = {
    [Qe]: {
      [Rge]: BNt.readAllowLarge
    }
  };
var Asn = {
    version: r,
    min_version: wOr(void 0, r)
  },
  xsn = {
    version: Asn.version,
    min_version: 1
  },
  jNt = f(() => De({
    version: Bu().min(1),
    min_version: Bu().min(1)
  }).refine(({
    version: e,
    min_version: n
  }) => n <= e));

function jVn(e) {
  return jNt().safeParse(e).data
}

function WVn(e, n) {
  if (n.version < e.min_version) return {
    kind: "peer_too_old"
  };
  return e.version < n.min_version ? {
    kind: "self_too_old"
  } : {
    kind: "agreed",
    version: Math.min(e.version, n.version)
  }
}
export {
  wOr,
  BNt,
  Asn,
  xsn,
  jNt,
  jVn,
  WVn
};
