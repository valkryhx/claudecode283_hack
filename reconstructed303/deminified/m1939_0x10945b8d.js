// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { f } from "B:/~BUN/root/chunk-frrkt2bs.js";
import "B:/~BUN/root/chunk-rwkgcmm8.js";
import "B:/~BUN/root/chunk-jthpk6wv.js";
import "B:/~BUN/root/chunk-3aez4b53.js";
import "B:/~BUN/root/chunk-89mss1tj.js";
import "B:/~BUN/root/chunk-4bx17ygx.js";
import "B:/~BUN/root/chunk-fbyz9h0p.js";
import "B:/~BUN/root/chunk-psh1mp8h.js";
import "B:/~BUN/root/chunk-yt0knyw7.js";
import "B:/~BUN/root/chunk-9ka04m0y.js";
import "B:/~BUN/root/chunk-rpez7z7a.js";
import "B:/~BUN/root/chunk-hg8ngszx.js";
import "B:/~BUN/root/chunk-jpdys232.js";
import "B:/~BUN/root/chunk-6za2ez23.js";
import "B:/~BUN/root/chunk-xf0m410v.js";
import "B:/~BUN/root/chunk-nggrknsv.js";
import "B:/~BUN/root/chunk-c09hf5e4.js";
import "B:/~BUN/root/chunk-je1b1drr.js";
import "B:/~BUN/root/chunk-d8fk23v1.js";
import { ol } from "B:/~BUN/root/chunk-pp32733x.js";
import { Ai } from "B:/~BUN/root/chunk-0r89607w.js";
import { o, oe, T, u } from "B:/~BUN/root/chunk-g3snhg6n.js";
var i = f(() => u({
    skills: T(oe()),
    nextCursor: o().nullish()
  })),
  s = f(() => u({
    skill: oe()
  }));
function a(t, cursor) {
  return Ai(t.client).request({
    method: "skills/list",
    params: cursor === void 0 ? {} : {
      cursor: cursor
    }
  }, i(), {
    timeout: ol()
  });
}
function c(t, uri, l) {
  return Ai(t.client).request({
    method: "skills/get",
    params: {
      uri: uri
    }
  }, s(), {
    timeout: ol(),
    signal: l?.signal
  });
}
export { c as getMcpSkill, a as listMcpSkillPage };