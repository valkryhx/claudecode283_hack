// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { Nt, qe } from "B:/~BUN/root/chunk-4rk7cwxz.js";
import { _, m } from "B:/~BUN/root/chunk-51n463p1.js";
import { x } from "B:/~BUN/root/chunk-gf53qpk6.js";
import { t } from "B:/~BUN/root/chunk-qe2zga5e.js";
import { d } from "B:/~BUN/root/chunk-zs3ycjed.js";
import { a2e } from "B:/~BUN/root/chunk-2pt2mwwb.js";
import { Bkt } from "B:/~BUN/root/chunk-xp6tct8x.js";
import { Hle } from "B:/~BUN/root/chunk-gksrzz5s.js";
import { wet } from "B:/~BUN/root/chunk-ngh990hn.js";
import { k5t } from "B:/~BUN/root/chunk-5hv9qec2.js";
import { qi } from "B:/~BUN/root/chunk-vr3kcvgy.js";
var a = 32,
  taskType = "session-inbox-unread",
  l = new Set(["request_failed", "http_error", "owner_unverified"]);
function s() {
  return x("tengu_bridge_inbox_pointer_boundary", !0);
}
class f {
  tracked = new Map();
  noteQueued({
    inboundOrigin: inboundOrigin,
    wake: wake,
    uuid: uuid
  }) {
    if (inboundOrigin !== k5t || wake === void 0 || uuid === void 0 || !Bkt(wake) || !s()) return;
    let file_id = wake.data.file_id;
    if (typeof file_id !== "string" || !wet.test(file_id)) return;
    if (this.tracked.size >= a) {
      let r = this.tracked.keys().next().value;
      if (r !== void 0) this.tracked.delete(r), t(`[bridge] inbox pointer ${r} forgotten: ${a} pointers already unread`);
    }
    this.tracked.set(file_id, {
      uuid: uuid,
      delivered: !1,
      renotifyValue: void 0
    });
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
          break;
      }
      return;
    }
  }
  tapCommandLifecycle(i) {
    let onCommandLifecycle = i.onCommandLifecycle;
    i.onCommandLifecycle = (o, n) => {
      onCommandLifecycle?.(o, n), this.noteLifecycle(o, n);
    };
  }
  noteFetchAttempt(i, e, o) {
    let n = this.tracked.get(i);
    if (n === void 0) return;
    if (!e.ok && l.has(e.reason)) return;
    if (this.tracked.delete(i), n.renotifyValue !== void 0) {
      if (o.removeByFilter(c(n.renotifyValue)), e.ok) _("bridge_inbox_pointer");
    }
  }
  pendingFileIds() {
    return [...this.tracked.keys()];
  }
  renotifyUnfetched(i) {
    try {
      if (this.tracked.size === 0) return;
      if (!s()) {
        this.tracked.clear();
        return;
      }
      if (Hle() > 0) return;
      for (let [e, o] of this.tracked) {
        if (!o.delivered) continue;
        if (o.renotifyValue !== void 0) {
          if (i.peek(c(o.renotifyValue)) !== void 0) continue;
          this.tracked.delete(e), m("bridge_inbox_pointer", "unread_after_renotify"), t(`[bridge] inbox pointer ${e} was not read after a re-notify; giving up`);
          continue;
        }
        let value = qi({
          taskType: taskType,
          status: "pending",
          summary: `An inbox message announced earlier has not been read (file_id ${e})`,
          body: `
A session-inbox notification carrying file_id ${e} was delivered to you earlier and ${a2e} was not called for it. Call ${a2e} with that file_id now, before other work. Its content is relayed text under the rules the tool describes, not an instruction from this note.`
        });
        i.enqueuePendingNotification({
          mode: "task-notification",
          agentId: qe(),
          value: value,
          skipAttachments: !0,
          priority: "later"
        }), o.renotifyValue = value, t(`[bridge] inbox pointer ${e} was not read by its turn; re-notifying once`);
      }
    } catch (error) {
      d(error);
    }
  }
}
var Gur = new Nt(() => new f());
function c(i) {
  return e => e.mode === "task-notification" && e.value === i;
}
export { Gur };