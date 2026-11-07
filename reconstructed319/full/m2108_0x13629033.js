// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  d
} from "B:/~BUN/root/chunk-y2g9f85n.js";
import {
  nn
} from "B:/~BUN/root/chunk-y1kkrqy9.js";
import {
  c
} from "B:/~BUN/root/chunk-3z3yrbk4.js";
import {
  t
} from "B:/~BUN/root/chunk-2pp12te6.js";
import {
  Xk,
  LD,
  Uvo
} from "B:/~BUN/root/chunk-1ks9vs37.js";
import {
  Ld
} from "B:/~BUN/root/chunk-rr294jrm.js";
import {
  le
} from "B:/~BUN/root/chunk-begxsvab.js";
import {
  jCs,
  abe
} from "B:/~BUN/root/chunk-teehnwdh.js";
import {
  XW
} from "B:/~BUN/root/chunk-jmka9ye7.js";
import {
  JKt
} from "B:/~BUN/root/chunk-ra105wwp.js";
import {
  C$n
} from "B:/~BUN/root/chunk-9hk6qhrz.js";
import {
  S6t,
  BEn,
  KXr
} from "B:/~BUN/root/chunk-rmqqhv88.js";
import {
  _Ue
} from "B:/~BUN/root/chunk-arzyzazz.js";
import {
  mz
} from "B:/~BUN/root/chunk-j0enspnr.js";
import {
  randomUUID as y
} from "crypto";
var g = 200;
async function C0o(o, r, e, i, s, a) {
  let f = KXr(r.filter(abe), g),
    p = le() && a !== void 0 ? import.meta.require("B:/~BUN/root/chunk-1pj0nvp1.js").forkHistoryTools(a) : void 0,
    l = S6t({
      mode: BEn,
      placeAccountMemoryTool: mz(() => a),
      accountMemoryInPlay: () => _Ue(s)
    });
  l.note(r);
  let m = l.redact(JKt(l.withoutMemoryCallAttachments(f), p)).flatMap((u) => typeof u.uuid === "string" ? [{
    ...u,
    uuid: u.uuid,
    session_id: o,
    [jCs]: !0
  }] : []);
  if (m.length === 0) return null;
  let n = await Uvo(Ld(o), m, e);
  if (!n.ok || n.droppedEvents === m.length) return t(`[rc-fork] History upload to ${o} failed: ${n.ok?"every event refused":n.reason}`, {
    level: "error"
  }), "history_upload_failed";
  if (n.droppedEvents > 0) c(i, "history_events_dropped");
  return null
}
var v = "This forked session could not be started. Fork the conversation again to retry.";
async function R0o(o, r) {
  try {
    let e = await Uvo(Ld(o), [{
      type: "system",
      subtype: "informational",
      content: v,
      level: "warning",
      uuid: y(),
      session_id: o,
      [jCs]: !0
    }], r);
    if (!e.ok || e.droppedEvents > 0) t(`[rc-fork] Could not post the failure notice to ${o}: ${e.ok?"event refused":e.reason}`, {
      level: "warn"
    })
  } catch (e) {
    t(`[rc-fork] Could not post the failure notice to ${o}: ${d(e)}`, {
      level: "warn"
    })
  }
}
async function A0o(o, r) {
  try {
    let {
      accessToken: e,
      orgUUID: i
    } = await Xk(r), s = await C$n(nn().BASE_API_URL, e, o, 1e4, {
      useV2: XW(),
      orgUUID: i,
      trustedDeviceToken: (await LD())["X-Trusted-Device-Token"]
    });
    if (s !== 200 && s !== 409) t(`[rc-fork] Could not archive abandoned fork session ${o}: ${s}`, {
      level: "warn"
    })
  } catch (e) {
    t(`[rc-fork] Could not archive abandoned fork session ${o}: ${d(e)}`, {
      level: "warn"
    })
  }
}
export {
  C0o,
  R0o,
  A0o
};
