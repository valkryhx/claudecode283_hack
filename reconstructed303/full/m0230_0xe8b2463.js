// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.303
import {
  Hp
} from "B:/~BUN/root/chunk-yt0knyw7.js";
import {
  d1o
} from "B:/~BUN/root/chunk-07c8fw5z.js";

function $Eo(n, e) {
  let o = Hp() ? d1o(n) : void 0;
  if (!o) return;
  let {
    tls: s,
    ...t
  } = e ?? {}, d = e?.proxy === void 0 && e?.unix === void 0 ? t : e;
  return (r) => o.fetch(r, d)
}

function qzn(n, e, o) {
  let s = e.proxy === void 0 && o?.() ? $Eo("ccr", e) : void 0;
  return s ? s(n) : fetch(n, e)
}
export {
  $Eo,
  qzn
};
