// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  st
} from "B:/~BUN/root/chunk-game8aqv.js";
import {
  g,
  m
} from "B:/~BUN/root/chunk-3z3yrbk4.js";
import {
  v
} from "B:/~BUN/root/chunk-1ks9vs37.js";
import {
  t
} from "B:/~BUN/root/chunk-2pp12te6.js";
import {
  a
} from "B:/~BUN/root/chunk-xrwdh0g4.js";
import {
  zi
} from "B:/~BUN/root/chunk-5bb21frh.js";
import {
  HZ
} from "B:/~BUN/root/chunk-bsbbs1xs.js";
import {
  Zke,
  t3e,
  mRt
} from "B:/~BUN/root/chunk-jcqwjvc4.js";
import {
  RNe
} from "B:/~BUN/root/chunk-r1gg0qbg.js";
import {
  HAt
} from "B:/~BUN/root/chunk-wc4rwv4n.js";
import {
  iLe,
  U0t,
  Qpt
} from "B:/~BUN/root/chunk-076mmgjt.js";
import {
  r6
} from "B:/~BUN/root/chunk-q1xrynbv.js";
import {
  Je
} from "B:/~BUN/root/chunk-9wbhv9z5.js";
var s = 32,
  c = 64,
  l = "session-inbox-unread",
  p = new Set(["request_failed", "http_error", "owner_unverified"]);

function d() {
  return v("tengu_bridge_inbox_pointer_boundary", !0)
}
class f {
  tracked = new Map;
  announcedAsOwners = new Set;
  noteOwnerAnnounced({
    inboundOrigin: i,
    wake: e
  }) {
    if (i !== U0t || e === void 0 || !mRt(e)) return;
    let n = e.data.file_id;
    if (typeof n !== "string" || !HAt.test(n)) return;
    if (this.announcedAsOwners.delete(n), this.announcedAsOwners.size >= c) {
      let o = this.announcedAsOwners.values().next().value;
      if (o !== void 0) this.announcedAsOwners.delete(o)
    }
    this.announcedAsOwners.add(n)
  }
  wasAnnouncedAsOwners(i) {
    return this.announcedAsOwners.has(i)
  }
  noteQueued({
    inboundOrigin: i,
    wake: e,
    uuid: n
  }) {
    if (this.noteOwnerAnnounced({
        inboundOrigin: i,
        wake: e
      }), i !== U0t || e === void 0 || n === void 0 || !t3e(e) || !d()) return;
    let o = e.data.file_id;
    if (typeof o !== "string" || !HAt.test(o)) return;
    if (this.tracked.size >= s) {
      let r = this.tracked.keys().next().value;
      if (r !== void 0) this.tracked.delete(r), t(`[bridge] inbox pointer ${r} forgotten: ${s} pointers already unread`)
    }
    this.tracked.set(o, {
      uuid: n,
      delivered: !1,
      renotifyValue: void 0
    })
  }
  noteLifecycle(i, e) {
    for (let [n, o] of this.tracked) {
      if (o.uuid !== i) continue;
      switch (e) {
        case "completed":
          o.delivered = !0;
          break;
        case "cancelled":
        case "discarded":
        case "refused":
          this.tracked.delete(n);
          break;
        case "queued":
        case "started":
          break
      }
      return
    }
  }
  tapCommandLifecycle(i) {
    iLe(i, (e, n) => this.noteLifecycle(e, n))
  }
  noteFetchAttempt(i, e, n) {
    let o = this.tracked.get(i);
    if (o === void 0) return;
    if (!e.ok && p.has(e.reason)) return;
    if (this.tracked.delete(i), o.renotifyValue !== void 0) {
      if (n.removeByFilter(u(o.renotifyValue)), e.ok) g("bridge_inbox_pointer")
    }
  }
  pendingFileIds() {
    return [...this.tracked.keys()]
  }
  renotifyUnfetched(i) {
    try {
      if (this.tracked.size === 0) return;
      if (!d()) {
        this.tracked.clear();
        return
      }
      if (RNe() > 0) return;
      for (let [e, n] of this.tracked) {
        if (!n.delivered) continue;
        if (n.renotifyValue !== void 0) {
          if (i.peek(u(n.renotifyValue)) !== void 0) continue;
          this.tracked.delete(e), m("bridge_inbox_pointer", "unread_after_renotify"), t(`[bridge] inbox pointer ${e} was not read after a re-notify; giving up`);
          continue
        }
        let o = zi({
          taskType: l,
          status: "pending",
          summary: `An inbox message announced earlier has not been read (file_id ${e})`,
          body: `
A session-inbox notification carrying file_id ${e} was delivered to you earlier and ${HZ} was not called for it. Call ${HZ} with that file_id now, before other work. Its content is relayed text under the rules the tool describes, not an instruction from this note.`
        });
        i.enqueuePendingNotification({
          mode: "task-notification",
          agentId: st(),
          value: o,
          skipAttachments: !0,
          priority: "later"
        }), n.renotifyValue = o, t(`[bridge] inbox pointer ${e} was not read by its turn; re-notifying once`)
      }
    } catch (e) {
      a(e)
    }
  }
}
var Dnr = new Je(() => new f);

function u(i) {
  return (e) => e.mode === "task-notification" && e.value === i
}

function f_a(i, e) {
  try {
    if (!("inbound_origin" in e) || e.inbound_origin !== U0t) return;
    let n = Qpt(e);
    if (n?.inboundOrigin !== U0t) return;
    let o = r6(n.content, n.inboundOrigin);
    if (typeof o !== "string") return;
    Dnr.of(i).noteOwnerAnnounced({
      inboundOrigin: n.inboundOrigin,
      wake: Zke(o) ?? void 0
    })
  } catch (n) {
    t(`[bridge] inbox owner notice not noted: ${n instanceof Error?n.name:"non-error throw"}`, {
      level: "error"
    })
  }
}
export {
  Dnr,
  f_a
};
