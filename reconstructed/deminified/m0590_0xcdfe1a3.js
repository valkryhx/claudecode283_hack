// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { hm } from "B:/~BUN/root/chunk-4rk7cwxz.js";
import { pg } from "B:/~BUN/root/chunk-shgdrs47.js";
import { qWr, XYn } from "B:/~BUN/root/chunk-339q6g5w.js";
import { d } from "B:/~BUN/root/chunk-zs3ycjed.js";
import { dLo } from "B:/~BUN/root/chunk-bt3h0syz.js";
import { L } from "B:/~BUN/root/chunk-z1enakv9.js";
async function iGn(r) {
  let e = L([hm(), pg()]).filter(item => item !== null);
  for (let t of e) try {
    let o = await qWr(r, t);
    if (o !== void 0) {
      let i = await dLo(t, o.gitRoot, r);
      if (typeof i === "string") XYn(i, o.gitRoot, o.canonicalRoot);
    }
  } catch (error) {
    d(error);
  }
}
export { iGn };