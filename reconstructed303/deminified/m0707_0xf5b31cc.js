// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { L, ii } from "B:/~BUN/root/chunk-rpez7z7a.js";
import { Ll } from "B:/~BUN/root/chunk-nxwmyxnk.js";
import { X1o, JUr } from "B:/~BUN/root/chunk-2zk4vqr8.js";
import { l } from "B:/~BUN/root/chunk-c09hf5e4.js";
import { uGs } from "B:/~BUN/root/chunk-kad4nq7y.js";
async function LIr(r) {
  let e = L([ii(), Ll()]).filter(item => item !== null);
  for (let t of e) try {
    let o = await X1o(r, t);
    if (o !== void 0) {
      let i = await uGs(t, o.gitRoot, r);
      if (typeof i === "string") JUr(i, o.gitRoot, o.canonicalRoot);
    }
  } catch (error) {
    l(error);
  }
}
export { LIr };