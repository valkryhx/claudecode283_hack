// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  Hr
} from "B:/~BUN/root/chunk-myfamxtp.js";
import {
  R
} from "B:/~BUN/root/chunk-y2g9f85n.js";
import {
  No
} from "B:/~BUN/root/chunk-4vcs773m.js";
import {
  Qm,
  Ht
} from "B:/~BUN/root/chunk-cbjnh04j.js";
import {
  X
} from "B:/~BUN/root/chunk-g9pw24zp.js";
import {
  mkdir as i
} from "fs/promises";
import {
  join as a
} from "path";
async function PJs(e, r) {
  if (X() && r !== void 0 && Hr(e)) {
    await n(r, {
      namespace: "job",
      jobId: e
    });
    return
  }
  await i(No(e), {
    recursive: !0
  })
}
async function NYe(e, r) {
  if (X() && r !== void 0 && Hr(e)) {
    await n(r, c(e));
    return
  }
  await i(a(No(e), "tmp"), {
    recursive: !0
  })
}

function c(e) {
  return {
    namespace: "job",
    jobId: e,
    relPath: ["tmp"]
  }
}
async function n(e, r) {
  let o = await e.ensureScope(r);
  if (!o.ok) {
    let t = Qm(o.error);
    throw Object.assign(new R(`job folder not made (${Ht(o.error)})`, "job folder not made"), t !== void 0 ? {
      code: t
    } : {})
  }
}
export {
  PJs,
  NYe
};
