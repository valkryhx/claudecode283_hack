// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.283
import {
  Y
} from "B:/~BUN/root/chunk-4rk7cwxz.js";
import {
  Qge,
  H3e,
  zTe,
  F3e,
  $3e
} from "B:/~BUN/root/chunk-65tbbnf1.js";
import {
  GO
} from "B:/~BUN/root/chunk-1mdeqc2r.js";
import {
  ZU,
  LMe,
  Mfe,
  Q8,
  fS,
  uot
} from "B:/~BUN/root/chunk-3jyp964r.js";
import {
  Fln
} from "B:/~BUN/root/chunk-rtyz5f1n.js";
import {
  dHe
} from "B:/~BUN/root/chunk-2pww2v3x.js";
import {
  _M
} from "B:/~BUN/root/chunk-cj9k3aj6.js";
import {
  S1e
} from "B:/~BUN/root/chunk-78k9fybg.js";
import {
  Lre
} from "B:/~BUN/root/chunk-h2ezagpq.js";
import {
  mCe
} from "B:/~BUN/root/chunk-tqj9zsrn.js";

function vht(e, o, t, i) {
  _M("conversation_reset"), GO("conversation_reset"), fS(Q8), F3e(), zTe(), Qge(), $3e(), H3e(), dHe();
  let r = Y();
  for (let s of mCe(e.sessionHooksRegistry, r)) e.sessionHooksRegistry.remove(r, "Stop", s);
  t(), LMe(), e.markConversationRemote?.(), Fln(e.readFileState, e.loadedNestedMemoryPaths), ZU(e.memorySelector), Mfe(o), S1e.of(i).emit(r, o.map((s) => s.uuid)), e.applyMessageOp({
    type: "replace-all",
    messages: uot(o)
  }), Lre(!0)
}
export {
  vht
};
