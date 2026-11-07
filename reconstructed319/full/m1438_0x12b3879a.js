// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  ZHr,
  Wjt,
  zjt,
  e$r,
  t$r,
  Vjt,
  n$r,
  hVs,
  HN,
  ns
} from "B:/~BUN/root/chunk-game8aqv.js";
import {
  U3
} from "B:/~BUN/root/chunk-1ks9vs37.js";
import {
  a
} from "B:/~BUN/root/chunk-xrwdh0g4.js";
import {
  xSt,
  wdn
} from "B:/~BUN/root/chunk-1g25msn4.js";
import {
  le
} from "B:/~BUN/root/chunk-begxsvab.js";
import {
  e2n
} from "B:/~BUN/root/chunk-1x03q1j7.js";
import {
  Ghi,
  pMe,
  e_i,
  K_i,
  Sur,
  qB,
  ROt,
  XMe,
  PAn,
  Vfr,
  fmr,
  OTi
} from "B:/~BUN/root/chunk-27h4st9h.js";
import {
  TFn
} from "B:/~BUN/root/chunk-jh04j3yr.js";
import {
  vas
} from "B:/~BUN/root/chunk-pmr34yc8.js";
import {
  d0n
} from "B:/~BUN/root/chunk-7wcc5pbk.js";
import {
  eIe,
  b6o
} from "B:/~BUN/root/chunk-d0f9meh1.js";
import {
  Pdi
} from "B:/~BUN/root/chunk-h29xff1x.js";
import {
  aat
} from "B:/~BUN/root/chunk-t94jahzz.js";
import {
  tIe
} from "B:/~BUN/root/chunk-cj22vbs9.js";
import {
  Qqt
} from "B:/~BUN/root/chunk-e3n3tbj9.js";
import {
  ydi
} from "B:/~BUN/root/chunk-m3x50w3h.js";
import {
  X6e
} from "B:/~BUN/root/chunk-7h0cye7w.js";

function _6o(t, r = new Set, l, o, n, c = !1) {
  let i = r.size > 0;
  if (Vfr(t), wdn(t), TFn.of(t).clear(), b6o(eIe), qB(), K_i(r), !i) d0n.peek(t)?.clear();
  let m = ROt();
  if (m?.getTeleportCacheState().status === "active") m.revertTeleportCache("transcript_cleared", "main");
  if (XMe(t, void 0, l, void 0, void 0, n), HN("clear"), ZHr(ns()), zjt(ns()), e$r(ns()), Wjt(ns()), t$r(ns()), Vjt(ns()), n$r(ns()), !c) U3(), Sur(t.host);
  if (PAn(t, "session_start"), pMe.of(t).reset(), vas.of(t).clear(), aat.of(t).reset(), l?.((e) => {
      if (e.storedImagePaths.size === 0 && e.imageDescriptions.size === 0 && Object.keys(e.displayedMessageContent).length === 0) return e;
      return {
        ...e,
        storedImagePaths: new Map,
        imageDescriptions: new Map,
        displayedMessageContent: {}
      }
    }), Ghi(), !i) ydi();
  if (e2n(), !i) Pdi();
  if (hVs(r), xSt(), OTi(), fmr().catch(() => {}), e_i(t), o) {
    if (o.get(Qqt).clear(), o.get(X6e).clear(), o.get(tIe).clear(), le()) import("B:/~BUN/root/chunk-2jsxp7y2.js").then(({
      getProcessQueue: e
    }) => {
      let {
        endMainThreadConversation: p
      } = import.meta.require("B:/~BUN/root/chunk-vcpe2sp4.js");
      p(o, e(), "the conversation was cleared")
    }).catch(a);
    import("B:/~BUN/root/chunk-5wccwz4e.js").then(({
      WebFetchCache: e
    }) => o.get(e).clear()), import("B:/~BUN/root/chunk-rmrhyt2z.js").then(({
      WebFetchHistory: e
    }) => o.get(e).clear()), import("B:/~BUN/root/chunk-w6vqh7bt.js").then(({
      BashRepeatMeter: e
    }) => o.get(e).clear()), import("B:/~BUN/root/chunk-qq1hf99a.js").then(({
      ToolSearchDescriptionCache: e
    }) => o.get(e).clear())
  }
  import("B:/~BUN/root/chunk-3mffqx45.js").then(({
    clearAgentDefinitionsCache: e
  }) => e())
}
export {
  _6o
};
