// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.283
import {
  q,
  bj
} from "B:/~BUN/root/chunk-4rk7cwxz.js";
import {
  xp
} from "B:/~BUN/root/chunk-gf53qpk6.js";
import {
  Unr,
  Bnr
} from "B:/~BUN/root/chunk-y8vtb9kn.js";
import {
  ml
} from "B:/~BUN/root/chunk-9sy3w2pa.js";
class i {
  activePark = null
}
var s = new q(() => new i);
async function R1e(r, e, n, a) {
  if (!xp()) return !1;
  let o = s.of(r),
    t = await Unr(e, n, a);
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
  let o = bj(() => {
    if (xp()) return;
    let t = r.activePark;
    if (!t || t.needs !== e) return;
    r.activePark = null, t.unsubscribe(), Bnr(e, t.prior, t.storageV5).catch(ml)
  });
  r.activePark = {
    needs: e,
    prior: n,
    storageV5: a,
    unsubscribe: o
  }
}
export {
  R1e
};
