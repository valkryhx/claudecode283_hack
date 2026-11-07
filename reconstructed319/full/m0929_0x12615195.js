// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  t
} from "B:/~BUN/root/chunk-2pp12te6.js";
import {
  _l
} from "B:/~BUN/root/chunk-n8cnxns2.js";
import {
  Gt
} from "B:/~BUN/root/chunk-1ks9vs37.js";
import {
  sRt
} from "B:/~BUN/root/chunk-rhxhxyfh.js";

function v7s() {
  return !Gt()
}

function zEt(o) {
  return o.filter((r) => !r.mcpErrorMetadata && !r.statusOnly && !r.startupFatal)
}

function GEt(o) {
  let r = [],
    i = [];
  for (let n of o)(n.statusOnly ? r : i).push(n);
  return {
    statusNotices: r,
    invalidEntries: i
  }
}

function VEt(o) {
  for (let r of o) t(`Invalid setting skipped without dialog (automated session): ${_l(sRt(r.file))}: ${r.path}: ${r.message}`, {
    level: "error"
  })
}
export {
  v7s,
  zEt,
  GEt,
  VEt
};
