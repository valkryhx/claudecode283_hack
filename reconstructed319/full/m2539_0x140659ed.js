// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  XA
} from "B:/~BUN/root/chunk-game8aqv.js";
import {
  W
} from "B:/~BUN/root/chunk-ppmmt0c3.js";
import {
  Kf
} from "B:/~BUN/root/chunk-1ks9vs37.js";
import {
  Z1o,
  ejo
} from "B:/~BUN/root/chunk-v0m2mae8.js";
import {
  Td
} from "B:/~BUN/root/chunk-4vcs773m.js";
class i {
  activePark = null
}
var s = new W(() => new i);
async function Jkt(r, e, n, a) {
  if (!Kf()) return !1;
  let o = s.of(r),
    t = await Z1o(e, n, a);
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
  let o = XA(() => {
    if (Kf()) return;
    let t = r.activePark;
    if (!t || t.needs !== e) return;
    r.activePark = null, t.unsubscribe(), ejo(e, t.prior, t.storageV5).catch(Td)
  });
  r.activePark = {
    needs: e,
    prior: n,
    storageV5: a,
    unsubscribe: o
  }
}
export {
  Jkt
};
