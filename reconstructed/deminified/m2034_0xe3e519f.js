// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import "B:/~BUN/root/chunk-bvn0mpsk.js";
import "B:/~BUN/root/chunk-ekrhn4q1.js";
import "B:/~BUN/root/chunk-4rk7cwxz.js";
import "B:/~BUN/root/chunk-dkxhwhft.js";
import "B:/~BUN/root/chunk-kks4mj3w.js";
import "B:/~BUN/root/chunk-bgthmgyc.js";
import "B:/~BUN/root/chunk-17wqwt36.js";
import "B:/~BUN/root/chunk-54p0h65d.js";
import "B:/~BUN/root/chunk-zs3ycjed.js";
import "B:/~BUN/root/chunk-4p6z9qq1.js";
import "B:/~BUN/root/chunk-zksmb712.js";
import "B:/~BUN/root/chunk-qe2zga5e.js";
import "B:/~BUN/root/chunk-0fnha6bz.js";
import "B:/~BUN/root/chunk-y04k89s2.js";
import "B:/~BUN/root/chunk-zv3zxqya.js";
import "B:/~BUN/root/chunk-6j6ra85q.js";
import "B:/~BUN/root/chunk-nkmmqnq7.js";
import "B:/~BUN/root/chunk-4h4gje25.js";
import "B:/~BUN/root/chunk-5kqdkjak.js";
import { gi } from "B:/~BUN/root/chunk-yehxgs7w.js";
import "B:/~BUN/root/chunk-rwwxddqq.js";
import "B:/~BUN/root/chunk-9xz983aj.js";
import "B:/~BUN/root/chunk-erkcnv3k.js";
import { Yr } from "B:/~BUN/root/chunk-n0832wgz.js";
function c(t, o, a, d) {
  let e = (i, r) => typeof i === "string" && typeof r === "string" && i === a(r),
    s = e(t.saved_pages_dir, o) ? `[A quickstart in this conversation saved reference pages of this type on disk in ${Yr([t.saved_pages_dir])}; its result lists them, so those are not attached here.]` : "";
  if (t.not_listed === !0) return s === "" ? "" : `

${s}`;
  let n = s === "" ? "" : ` ${s}`;
  if (typeof t.saved_system === "string" && e(t.saved_system_dir, t.saved_system)) return `

[A quickstart in this conversation already listed the design systems and saved the files of ${gi(t.saved_system, "(unrecognized address)")} on disk \u2014 skip the instructions' step that lists them and reads that README; its result lists the saved files.]${n}`;
  return s === "" ? null : `${d}${n}`;
}
export { c as afterQuickstartSavedLine };