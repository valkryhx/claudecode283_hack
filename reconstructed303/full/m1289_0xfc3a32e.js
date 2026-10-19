// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.303
import {
  at,
  Ze
} from "B:/~BUN/root/chunk-rpez7z7a.js";
import {
  g,
  m
} from "B:/~BUN/root/chunk-kzgf20y6.js";
import {
  E
} from "B:/~BUN/root/chunk-hb6x4e3n.js";
import {
  t
} from "B:/~BUN/root/chunk-6za2ez23.js";
import {
  l
} from "B:/~BUN/root/chunk-c09hf5e4.js";
import {
  li
} from "B:/~BUN/root/chunk-mtfk0qfd.js";
import {
  nit
} from "B:/~BUN/root/chunk-hpx3b0p0.js";
import {
  LFe,
  zRt,
  rit
} from "B:/~BUN/root/chunk-c8kg7ar7.js";
import {
  Dke
} from "B:/~BUN/root/chunk-8pqw0dhk.js";
import {
  yit
} from "B:/~BUN/root/chunk-90qdynnd.js";
import {
  vit,
  Y4e
} from "B:/~BUN/root/chunk-ewvp948s.js";
import {
  B8
} from "B:/~BUN/root/chunk-zg0dbxts.js";
var s = 32,
  c = 64,
  f = "session-inbox-unread",
  p = new Set(["request_failed", "http_error", "owner_unverified"]);

function a() {
  return E("tengu_bridge_inbox_pointer_boundary", !0)
}
class u {
  tracked = new Map;
  announcedAsOwners = new Set;
  noteOwnerAnnounced({
    inboundOrigin: o,
    wake: e
  }) {
    if (o !== vit || e === void 0 || !rit(e)) return;
    let n = e.data.file_id;
    if (typeof n !== "string" || !yit.test(n)) return;
    if (this.announcedAsOwners.delete(n), this.announcedAsOwners.size >= c) {
      let i = this.announcedAsOwners.values().next().value;
      if (i !== void 0) this.announcedAsOwners.delete(i)
    }
    this.announcedAsOwners.add(n)
  }
  wasAnnouncedAsOwners(o) {
    return this.announcedAsOwners.has(o)
  }
  noteQueued({
    inboundOrigin: o,
    wake: e,
    uuid: n
  }) {
    if (this.noteOwnerAnnounced({
        inboundOrigin: o,
        wake: e
      }), o !== vit || e === void 0 || n === void 0 || !zRt(e) || !a()) return;
    let i = e.data.file_id;
    if (typeof i !== "string" || !yit.test(i)) return;
    if (this.tracked.size >= s) {
      let r = this.tracked.keys().next().value;
      if (r !== void 0) this.tracked.delete(r), t(`[bridge] inbox pointer ${r} forgotten: ${s} pointers already unread`)
    }
    this.tracked.set(i, {
      uuid: n,
      delivered: !1,
      renotifyValue: void 0
    })
  }
  noteLifecycle(o, e) {
    for (let [n, i] of this.tracked) {
      if (i.uuid !== o) continue;
      switch (e) {
        case "completed":
          i.delivered = !0;
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
  tapCommandLifecycle(o) {
    let e = o.onCommandLifecycle;
    o.onCommandLifecycle = (n, i) => {
      e?.(n, i), this.noteLifecycle(n, i)
    }
  }
  noteFetchAttempt(o, e, n) {
    let i = this.tracked.get(o);
    if (i === void 0) return;
    if (!e.ok && p.has(e.reason)) return;
    if (this.tracked.delete(o), i.renotifyValue !== void 0) {
      if (n.removeByFilter(d(i.renotifyValue)), e.ok) g("bridge_inbox_pointer")
    }
  }
  pendingFileIds() {
    return [...this.tracked.keys()]
  }
  renotifyUnfetched(o) {
    try {
      if (this.tracked.size === 0) return;
      if (!a()) {
        this.tracked.clear();
        return
      }
      if (Dke() > 0) return;
      for (let [e, n] of this.tracked) {
        if (!n.delivered) continue;
        if (n.renotifyValue !== void 0) {
          if (o.peek(d(n.renotifyValue)) !== void 0) continue;
          this.tracked.delete(e), m("bridge_inbox_pointer", "unread_after_renotify"), t(`[bridge] inbox pointer ${e} was not read after a re-notify; giving up`);
          continue
        }
        let i = li({
          taskType: f,
          status: "pending",
          summary: `An inbox message announced earlier has not been read (file_id ${e})`,
          body: `
A session-inbox notification carrying file_id ${e} was delivered to you earlier and ${nit} was not called for it. Call ${nit} with that file_id now, before other work. Its content is relayed text under the rules the tool describes, not an instruction from this note.`
        });
        o.enqueuePendingNotification({
          mode: "task-notification",
          agentId: Ze(),
          value: i,
          skipAttachments: !0,
          priority: "later"
        }), n.renotifyValue = i, t(`[bridge] inbox pointer ${e} was not read by its turn; re-notifying once`)
      }
    } catch (e) {
      l(e)
    }
  }
}
var KIn = new at(() => new u);

function d(o) {
  return (e) => e.mode === "task-notification" && e.value === o
}

function Lri(o, e) {
  try {
    if (!("inbound_origin" in e) || e.inbound_origin !== vit) return;
    let n = Y4e(e);
    if (n?.inboundOrigin !== vit) return;
    let i = B8(n.content, n.inboundOrigin);
    if (typeof i !== "string") return;
    KIn.of(o).noteOwnerAnnounced({
      inboundOrigin: n.inboundOrigin,
      wake: LFe(i) ?? void 0
    })
  } catch (n) {
    t(`[bridge] inbox owner notice not noted: ${n instanceof Error?n.name:"non-error throw"}`, {
      level: "error"
    })
  }
}
export {
  KIn,
  Lri
};
