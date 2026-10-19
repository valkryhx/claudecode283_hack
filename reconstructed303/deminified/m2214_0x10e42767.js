// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import "B:/~BUN/root/chunk-9ka04m0y.js";
import "B:/~BUN/root/chunk-rwkgcmm8.js";
import "B:/~BUN/root/chunk-rpez7z7a.js";
import "B:/~BUN/root/chunk-hg8ngszx.js";
import "B:/~BUN/root/chunk-jthpk6wv.js";
import "B:/~BUN/root/chunk-3aez4b53.js";
import "B:/~BUN/root/chunk-89mss1tj.js";
import "B:/~BUN/root/chunk-4bx17ygx.js";
import "B:/~BUN/root/chunk-c09hf5e4.js";
import "B:/~BUN/root/chunk-fbyz9h0p.js";
import "B:/~BUN/root/chunk-jpdys232.js";
import "B:/~BUN/root/chunk-6za2ez23.js";
import "B:/~BUN/root/chunk-xf0m410v.js";
import "B:/~BUN/root/chunk-nggrknsv.js";
import "B:/~BUN/root/chunk-psh1mp8h.js";
import "B:/~BUN/root/chunk-yt0knyw7.js";
import "B:/~BUN/root/chunk-je1b1drr.js";
import "B:/~BUN/root/chunk-h9p45fg5.js";
import "B:/~BUN/root/chunk-d8fk23v1.js";
import "B:/~BUN/root/chunk-gyr2a6wz.js";
import "B:/~BUN/root/chunk-hvvs3ef6.js";
import { Ci } from "B:/~BUN/root/chunk-qp0344nb.js";
import "B:/~BUN/root/chunk-cx57tr4b.js";
import "B:/~BUN/root/chunk-dq3y90rd.js";
import { ho } from "B:/~BUN/root/chunk-fqc7tjgr.js";
function c(t, o, a, d) {
  let e = (i, r) => typeof i === "string" && typeof r === "string" && i === a(r),
    s = e(t.saved_pages_dir, o) ? `[A quickstart in this conversation saved reference pages of this type on disk in ${ho([t.saved_pages_dir])}; its result lists them, so those are not attached here.]` : "";
  if (t.not_listed === !0) return s === "" ? "" : `

${s}`;
  let n = s === "" ? "" : ` ${s}`;
  if (typeof t.saved_system === "string" && e(t.saved_system_dir, t.saved_system)) return `

[A quickstart in this conversation already listed the design systems and saved the files of ${Ci(t.saved_system, "(unrecognized address)")} on disk \u2014 skip the instructions' step that lists them and reads that README; its result lists the saved files.]${n}`;
  return s === "" ? null : `${d}${n}`;
}
export { c as afterQuickstartSavedLine };