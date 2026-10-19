// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.303
import {
  K,
  WTe
} from "B:/~BUN/root/chunk-rpez7z7a.js";
import {
  pIe,
  Umt,
  rje,
  Bmt,
  jmt
} from "B:/~BUN/root/chunk-t63e78w2.js";
import {
  dH
} from "B:/~BUN/root/chunk-8w42v0dp.js";
import {
  yq,
  IYe,
  Nxt,
  pxe,
  sG,
  Fb
} from "B:/~BUN/root/chunk-9grc6xh0.js";
import {
  y2n
} from "B:/~BUN/root/chunk-h1tq8zce.js";
import {
  G8e
} from "B:/~BUN/root/chunk-8zz6429p.js";
import {
  Y$
} from "B:/~BUN/root/chunk-qc6mvzn1.js";
import {
  sbn
} from "B:/~BUN/root/chunk-sh77snck.js";
import {
  b_e
} from "B:/~BUN/root/chunk-k9rj2ccn.js";
import {
  j1e
} from "B:/~BUN/root/chunk-stjjr4k8.js";

function Izt(e, o, t, i) {
  Y$("conversation_reset"), dH("conversation_reset"), Fb(sG), Bmt(), rje(), pIe(), jmt(), Umt(), G8e();
  let r = K();
  for (let s of j1e(e.sessionHooksRegistry, r)) e.sessionHooksRegistry.remove(r, "Stop", s);
  t(), IYe(), e.markConversationRemote?.(), y2n(e.readFileState), yq(e.memorySelector), WTe(), pxe(o), sbn(i, r, o.map((s) => s.uuid)), e.applyMessageOp({
    type: "replace-all",
    messages: Nxt(o)
  }), b_e(!0)
}
export {
  Izt
};
