// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.303
import {
  d
} from "B:/~BUN/root/chunk-3aez4b53.js";
import {
  t
} from "B:/~BUN/root/chunk-6za2ez23.js";
import {
  $l,
  Zr,
  Ta,
  Iv
} from "B:/~BUN/root/chunk-nq10jsxs.js";
import {
  EOe
} from "B:/~BUN/root/chunk-6bmmxtvh.js";
async function jCn(r, o) {
  if (!EOe()) return;
  try {
    let e = await Zr(r, o);
    if (!e || !Ta(e) || e.state === "stopped" || Iv(e)) return;
    await $l(r, {
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
  jCn
};
