// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  z,
  xwt
} from "B:/~BUN/root/chunk-game8aqv.js";
import {
  SGe,
  ULt,
  f7e,
  BLt,
  jLt
} from "B:/~BUN/root/chunk-6v74v9ar.js";
import {
  g,
  c
} from "B:/~BUN/root/chunk-3z3yrbk4.js";
import {
  VW
} from "B:/~BUN/root/chunk-yhafkw66.js";
import {
  l9,
  Bdt,
  o5t,
  Pje,
  Bt,
  cq,
  Oy
} from "B:/~BUN/root/chunk-27h4st9h.js";
import {
  mhr,
  hhr
} from "B:/~BUN/root/chunk-jmt91fq8.js";
import {
  Umt
} from "B:/~BUN/root/chunk-3vrk9h6f.js";
import {
  XG
} from "B:/~BUN/root/chunk-dqprk713.js";
import {
  d8
} from "B:/~BUN/root/chunk-b3z6ptmm.js";
import {
  p6n
} from "B:/~BUN/root/chunk-dx5230jd.js";
import {
  sTr
} from "B:/~BUN/root/chunk-xbhv3nhf.js";
import {
  G7e
} from "B:/~BUN/root/chunk-36r971cb.js";

function f6n(e, o, m, a) {
  XG("conversation_reset"), VW("conversation_reset"), Oy(cq), BLt(), f7e(), SGe(), jLt(), ULt(), Umt();
  let r = z();
  for (let s of G7e(e.sessionHooksRegistry, r)) e.sessionHooksRegistry.remove(r, "Stop", s);
  m(), Bdt(), e.markConversationRemote?.(), sTr(e.readFileState), l9(e.memorySelector), xwt(), Pje(o);
  let t = hhr(o);
  if (t) c("teleport_resume_history", "summarized_rows_absent");
  else g("teleport_resume_history");
  let i = t ? [Bt(mhr, "warning")] : [];
  p6n(a, r, [...o, ...i].map((s) => s.uuid)), e.applyMessageOp({
    type: "replace-all",
    messages: [...o5t(o), ...i]
  }), d8(!0)
}
export {
  f6n
};
