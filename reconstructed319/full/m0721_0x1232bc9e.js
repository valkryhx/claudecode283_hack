// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  d
} from "B:/~BUN/root/chunk-y2g9f85n.js";
import {
  t
} from "B:/~BUN/root/chunk-2pp12te6.js";
import {
  ic,
  Fo,
  ml,
  GE
} from "B:/~BUN/root/chunk-4vcs773m.js";
import {
  zoe
} from "B:/~BUN/root/chunk-kt29vc17.js";
async function iQn(r, o) {
  if (!zoe()) return;
  try {
    let e = await Fo(r, o);
    if (!e || !ml(e) || e.state === "stopped" || GE(e)) return;
    await ic(r, {
      ...e,
      state: "stopped",
      updatedAt: new Date().toISOString()
    }, o)
  } catch (e) {
    t(`stop not recorded on the job's row: ${d(e)}`, {
      level: "error"
    })
  }
}
export {
  iQn
};
