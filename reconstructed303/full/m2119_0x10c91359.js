// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.303
import {
  g0
} from "B:/~BUN/root/chunk-rpez7z7a.js";
import {
  z
} from "B:/~BUN/root/chunk-4bx17ygx.js";
import {
  Dp
} from "B:/~BUN/root/chunk-hb6x4e3n.js";
import {
  r3r,
  o3r
} from "B:/~BUN/root/chunk-4g26vbab.js";
import {
  hl
} from "B:/~BUN/root/chunk-nq10jsxs.js";
class i {
  activePark = null
}
var s = new z(() => new i);
async function ptt(r, e, n, a) {
  if (!Dp()) return !1;
  let o = s.of(r),
    t = await r3r(e, n, a);
  switch (t.kind) {
    case "refused":
      return !1;
    case "already":
      if (o.activePark?.needs !== e) d(o, e, {
        tempo: "idle",
        needs: void 0,
        detail: ""
      }, a);
      return !0;
    case "wrote":
      return d(o, e, t.prior, a), !0
  }
}

function d(r, e, n, a) {
  r.activePark?.unsubscribe();
  let o = g0(() => {
    if (Dp()) return;
    let t = r.activePark;
    if (!t || t.needs !== e) return;
    r.activePark = null, t.unsubscribe(), o3r(e, t.prior, t.storageV5).catch(hl)
  });
  r.activePark = {
    needs: e,
    prior: n,
    storageV5: a,
    unsubscribe: o
  }
}
export {
  ptt
};
