// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { Cr } from "B:/~BUN/root/chunk-d9rmnpx3.js";
import { x } from "B:/~BUN/root/chunk-3aez4b53.js";
import { W } from "B:/~BUN/root/chunk-hg8ngszx.js";
import { io } from "B:/~BUN/root/chunk-nq10jsxs.js";
import { um, yt } from "B:/~BUN/root/chunk-hz8x9zsh.js";
import { mkdir as i } from "fs/promises";
import { join as a } from "path";
async function J9o(jobId, r) {
  if (W() && r !== void 0 && Cr(jobId)) {
    await n(r, {
      namespace: "job",
      jobId: jobId
    });
    return;
  }
  await i(io(jobId), {
    recursive: !0
  });
}
async function $Le(e, r) {
  if (W() && r !== void 0 && Cr(e)) {
    await n(r, c(e));
    return;
  }
  await i(a(io(e), "tmp"), {
    recursive: !0
  });
}
function c(jobId_2) {
  return {
    namespace: "job",
    jobId: jobId_2,
    relPath: ["tmp"]
  };
}
async function n(e, r) {
  let o = await e.ensureScope(r);
  if (!o.ok) {
    let code = um(o.error);
    throw Object.assign(new x(`job folder not made (${yt(o.error)})`, "job folder not made"), code !== void 0 ? {
      code: code
    } : {});
  }
}
export { J9o, $Le };