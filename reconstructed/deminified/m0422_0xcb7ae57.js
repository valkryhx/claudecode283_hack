// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { jn } from "B:/~BUN/root/chunk-5w2ecytn.js";
import { P } from "B:/~BUN/root/chunk-bgthmgyc.js";
import { H } from "B:/~BUN/root/chunk-dkxhwhft.js";
import { Pr } from "B:/~BUN/root/chunk-9sy3w2pa.js";
import { gf, rt } from "B:/~BUN/root/chunk-mmkravm0.js";
import { mkdir as i } from "fs/promises";
import { join as a } from "path";
async function Mqt(jobId, r) {
  if (H() && r !== void 0 && jn(jobId)) {
    await n(r, {
      namespace: "job",
      jobId: jobId
    });
    return;
  }
  await i(Pr(jobId), {
    recursive: !0
  });
}
async function DIe(e, r) {
  if (H() && r !== void 0 && jn(e)) {
    await n(r, c(e));
    return;
  }
  await i(a(Pr(e), "tmp"), {
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
    let code = gf(o.error);
    throw Object.assign(new P(`job folder not made (${rt(o.error)})`, "job folder not made"), code !== void 0 ? {
      code: code
    } : {});
  }
}
export { Mqt, DIe };