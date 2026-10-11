// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.283
import {
  Nt,
  qe
} from "B:/~BUN/root/chunk-4rk7cwxz.js";
import {
  _,
  m
} from "B:/~BUN/root/chunk-51n463p1.js";
import {
  x
} from "B:/~BUN/root/chunk-gf53qpk6.js";
import {
  t
} from "B:/~BUN/root/chunk-qe2zga5e.js";
import {
  d
} from "B:/~BUN/root/chunk-zs3ycjed.js";
import {
  a2e
} from "B:/~BUN/root/chunk-2pt2mwwb.js";
import {
  Bkt
} from "B:/~BUN/root/chunk-xp6tct8x.js";
import {
  Hle
} from "B:/~BUN/root/chunk-gksrzz5s.js";
import {
  wet
} from "B:/~BUN/root/chunk-ngh990hn.js";
import {
  k5t
} from "B:/~BUN/root/chunk-5hv9qec2.js";
import {
  qi
} from "B:/~BUN/root/chunk-vr3kcvgy.js";
var a = 32,
  u = "session-inbox-unread",
  l = new Set(["request_failed", "http_error", "owner_unverified"]);

function s() {
  return x("tengu_bridge_inbox_pointer_boundary", !0)
}
class f {
  tracked = new Map;
  noteQueued({
    inboundOrigin: i,
    wake: e,
    uuid: o
  }) {
    if (i !== k5t || e === void 0 || o === void 0 || !Bkt(e) || !s()) return;
    let n = e.data.file_id;
    if (typeof n !== "string" || !wet.test(n)) return;
    if (this.tracked.size >= a) {
      let r = this.tracked.keys().next().value;
      if (r !== void 0) this.tracked.delete(r), t(`[bridge] inbox pointer ${r} forgotten: ${a} pointers already unread`)
    }
    this.tracked.set(n, {
      uuid: o,
      delivered: !1,
      renotifyValue: void 0
    })
  }
  noteLifecycle(i, e) {
    for (let [o, n] of this.tracked) {
      if (n.uuid !== i) continue;
      switch (e) {
        case "completed":
          n.delivered = !0;
          break;
        case "cancelled":
        case "discarded":
        case "refused":
          this.tracked.delete(o);
          break;
        case "queued":
        case "started":
          break
      }
      return
    }
  }
  tapCommandLifecycle(i) {
    let e = i.onCommandLifecycle;
    i.onCommandLifecycle = (o, n) => {
      e?.(o, n), this.noteLifecycle(o, n)
    }
  }
  noteFetchAttempt(i, e, o) {
    let n = this.tracked.get(i);
    if (n === void 0) return;
    if (!e.ok && l.has(e.reason)) return;
    if (this.tracked.delete(i), n.renotifyValue !== void 0) {
      if (o.removeByFilter(c(n.renotifyValue)), e.ok) _("bridge_inbox_pointer")
    }
  }
  pendingFileIds() {
    return [...this.tracked.keys()]
  }
  renotifyUnfetched(i) {
    try {
      if (this.tracked.size === 0) return;
      if (!s()) {
        this.tracked.clear();
        return
      }
      if (Hle() > 0) return;
      for (let [e, o] of this.tracked) {
        if (!o.delivered) continue;
        if (o.renotifyValue !== void 0) {
          if (i.peek(c(o.renotifyValue)) !== void 0) continue;
          this.tracked.delete(e), m("bridge_inbox_pointer", "unread_after_renotify"), t(`[bridge] inbox pointer ${e} was not read after a re-notify; giving up`);
          continue
        }
        let n = qi({
          taskType: u,
          status: "pending",
          summary: `An inbox message announced earlier has not been read (file_id ${e})`,
          body: `
A session-inbox notification carrying file_id ${e} was delivered to you earlier and ${a2e} was not called for it. Call ${a2e} with that file_id now, before other work. Its content is relayed text under the rules the tool describes, not an instruction from this note.`
        });
        i.enqueuePendingNotification({
          mode: "task-notification",
          agentId: qe(),
          value: n,
          skipAttachments: !0,
          priority: "later"
        }), o.renotifyValue = n, t(`[bridge] inbox pointer ${e} was not read by its turn; re-notifying once`)
      }
    } catch (e) {
      d(e)
    }
  }
}
var Gur = new Nt(() => new f);

function c(i) {
  return (e) => e.mode === "task-notification" && e.value === i
}
export {
  Gur
};
