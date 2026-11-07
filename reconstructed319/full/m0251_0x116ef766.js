// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  p
} from "B:/~BUN/root/chunk-z6138ats.js";
import {
  ze,
  kie
} from "B:/~BUN/root/chunk-xwzn0yxv.js";
import {
  vo
} from "B:/~BUN/root/chunk-h7w5pt14.js";
import {
  Xc,
  He
} from "B:/~BUN/root/chunk-4bfd0jkf.js";

function Lgo(e, n) {
  return e !== void 0 && Number.isInteger(e) && e >= 6 && e <= n ? e : 6
}
var LNt = {
    first: 5,
    permissionRequestRenames: 6,
    readAllowLarge: 7,
    editOriginalFile: 8,
    containerSearchTools: 9,
    managedHookCall: 10,
    keptBackgroundCommands: 11,
    readCallsByToolUseId: 12,
    repoRulesReadHere: 13,
    repoRulesOnRenders: 14,
    repoRulesOnUploads: 15,
    whichCopyAsk: 16,
    runAnswersKept: 17,
    repoHooksListing: 18,
    readOutputDropsFileUnchanged: 19,
    shellDirectoryHeld: 20,
    pluginHttpHookCall: 21,
    hookConditionCall: 22,
    attachedComputerPermissionRequest: 23,
    httpHookFlagLists: 24,
    pluginHttpHookFlagLists: 25
  },
  u = LNt.attachedComputerPermissionRequest,
  i = Math.max(...Object.values(LNt)),
  a = {
    [ze]: {
      [kie]: LNt.readAllowLarge
    }
  };

function lGi(e, n, s) {
  let o = a[e] ?? {},
    r = Object.keys(o).filter((t) => s < (o[t] ?? 0) && (t in n));
  return r.length === 0 ? n : vo(n, r)
}
var VFn = {
    version: i,
    min_version: Lgo(void 0, i)
  },
  kee = {
    version: VFn.version,
    min_version: 1
  },
  Jtn = p(() => He({
    version: Xc().min(1),
    min_version: Xc().min(1)
  }).refine(({
    version: e,
    min_version: n
  }) => n <= e));

function NNt(e) {
  return Jtn().safeParse(e).data
}

function GGe(e, n) {
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
  Lgo,
  LNt,
  lGi,
  VFn,
  kee,
  Jtn,
  NNt,
  GGe
};
