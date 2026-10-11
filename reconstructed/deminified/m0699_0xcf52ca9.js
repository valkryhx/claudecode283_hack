// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { Me } from "B:/~BUN/root/chunk-ekrhn4q1.js";
import { Yn } from "B:/~BUN/root/chunk-4rk7cwxz.js";
import { H } from "B:/~BUN/root/chunk-dkxhwhft.js";
import { l, v, gg, Pf } from "B:/~BUN/root/chunk-bgthmgyc.js";
import { d } from "B:/~BUN/root/chunk-zs3ycjed.js";
import { t } from "B:/~BUN/root/chunk-qe2zga5e.js";
import { xe } from "B:/~BUN/root/chunk-mgxre38x.js";
import { W } from "B:/~BUN/root/chunk-h23911wn.js";
import { B0 } from "B:/~BUN/root/chunk-6spmd6p4.js";
import { KEo, YEo, kR, BT, KM, XEo, rx } from "B:/~BUN/root/chunk-m1qtc24s.js";
import { M8 } from "B:/~BUN/root/chunk-3jyp964r.js";
import { Vt, se, Pe, R, N } from "B:/~BUN/root/chunk-rnj6pcz5.js";
import { rt } from "B:/~BUN/root/chunk-mmkravm0.js";
N();
import { watch as b } from "fs";
var g = 5000,
  T = 50,
  f = 5000;
class pvn {
  #c = void 0;
  #d = !1;
  #n = null;
  #f = null;
  #i = !1;
  #o = null;
  #p = !1;
  #l = null;
  #t = null;
  #b = null;
  #y = Me();
  #g = 0;
  #a = !1;
  #r;
  #s;
  #e = {
    phase: "idle"
  };
  #R = 0;
  #S = 0;
  #m = 0;
  #E;
  constructor(s, i = globalThis, e = () => {}) {
    this.#r = H() && s !== void 0 ? s : void 0, this.#s = i, this.#E = e;
  }
  #w(s) {
    let i = this.#d;
    if (this.#d = s, s && !i) this.#E();
  }
  getSnapshot = () => this.#d ? void 0 : this.#c;
  subscribe = s => {
    let i = this.#y.subscribe(s);
    if (this.#g++, !this.#a) this.#a = !0, this.#b = KEo(this.#h), this.#v();
    let e = !1;
    return () => {
      if (e) return;
      if (e = !0, i(), this.#g--, this.#g === 0) this.#L();
    };
  };
  #V() {
    this.#y.emit();
  }
  #F(s) {
    if (this.#r) {
      this.#T(this.#r, s, !1);
      return;
    }
    let i = KM(s);
    if (i === this.#f && this.#n !== null) return;
    this.#n?.close(), this.#n = null, this.#f = i;
    try {
      let e = b(i, this.#h);
      e.on("error", r => {
        if (t(`Task list watcher error: ${l(r)}`, {
          level: "warn"
        }), this.#n === e) {
          if (this.#f = null, this.#i = !0, this.#t === null) this.#t = this.#s.setTimeout(this.#h, f), this.#t.unref();
        }
      }), e.unref(), this.#n = e, this.#i = !1;
    } catch {}
  }
  #T(s, listId, onRetry) {
    let r = this.#e;
    if (r.phase !== "idle" && r.listId === listId && !onRetry) return;
    if (r.phase === "live") r.subscription.unsubscribe();
    let generation = ++this.#m;
    this.#e = {
      phase: "subscribing",
      listId: listId,
      generation: generation,
      endedEarly: !1
    }, this.#i = !0, this.#u();
    let h = (subscription, p) => {
        if (generation !== this.#m) {
          subscription?.unsubscribe();
          return;
        }
        let c = this.#e;
        if (subscription && c.phase === "subscribing" && c.endedEarly) {
          if (subscription.unsubscribe(), onRetry) this.#k(listId);else this.#T(s, listId, !0);
          return;
        }
        if (subscription) {
          this.#e = {
            phase: "live",
            listId: listId,
            generation: generation,
            subscription: subscription,
            onRetry: onRetry
          }, this.#i = !1, this.#h();
          return;
        }
        if (t(`Task list subscription unavailable: ${p}`, {
          level: "warn"
        }), onRetry) {
          this.#k(listId);
          return;
        }
        this.#e = {
          phase: "idle"
        }, this.#i = !0, this.#u();
      },
      a;
    try {
      a = s.subscribe({
        target: "scope",
        scope: {
          namespace: "task",
          listId: BT(listId)
        }
      }, o => this.#x(o, generation));
    } catch (error) {
      h(null, l(error));
      return;
    }
    a.then(o => o.ok ? h(o.value) : h(null, rt(o.error)), o => h(null, l(o)));
  }
  #x(s, i) {
    let e = this.#e;
    if (e.phase === "subscribing" && e.generation === i && !s.ok) {
      e.endedEarly = !0;
      return;
    }
    if (!this.#a || e.phase !== "live" || e.generation !== i) return;
    if (s.ok) {
      e.onRetry = !1, this.#h();
      return;
    }
    if (t(`Task list subscription ended: ${rt(s.error)}`, {
      level: "warn"
    }), e.onRetry || !this.#r) {
      e.subscription.unsubscribe(), this.#k(e.listId);
      return;
    }
    this.#T(this.#r, e.listId, !0);
  }
  #k(listId_2) {
    this.#m++, this.#e = {
      phase: "givenUp",
      listId: listId_2
    }, this.#i = !0, this.#h();
  }
  #u() {
    if (!this.#a) return;
    if (this.#t) this.#s.clearTimeout(this.#t);
    this.#t = this.#s.setTimeout(this.#h, f), this.#t.unref();
  }
  #h = () => {
    if (this.#l) this.#s.clearTimeout(this.#l);
    this.#l = this.#s.setTimeout(() => void this.#v(), T), this.#l.unref();
  };
  refetch = () => this.#v();
  #v = async () => {
    let s = ++this.#R,
      i = kR();
    this.#F(i);
    let e;
    try {
      e = await XEo(i, this.#r);
    } catch (error) {
      t(`Task list read failed: ${l(error)}`, {
        level: "warn"
      }), e = null;
    }
    if (this.#r && s < this.#S) return;
    if (this.#S = s, e === null) {
      if (this.#a) this.#i = !0, this.#u();
      return;
    }
    if (this.#e.phase === "live") this.#i = !1;
    let r = e.filter(item => !item.metadata?._internal);
    if (!this.#a) return;
    let n = r.some(item => item.status !== "completed"),
      h = !y(this.#c, r);
    if (h) this.#c = r;
    if (n || r.length === 0) this.#w(r.length === 0), this.#C();else if (this.#o === null && !this.#d) if (this.#p) t("Task list reset still in flight; not arming another hide until it settles", {
      level: "verbose"
    });else this.#o = this.#s.setTimeout(this.#B.bind(this, i), g), this.#o.unref();
    if (h) this.#V();
    if (this.#t) this.#s.clearTimeout(this.#t), this.#t = null;
    if (n || this.#i) {
      if (this.#e.phase === "live") return;
      this.#u();
    }
  };
  #B(s) {
    this.#o = null;
    let i = kR();
    if (i !== s) return;
    this.#p = !0, rx(i, this.#r).then(async e => {
      if (e.length > 0 && e.every(item => item.status === "completed") && (await YEo(i, this.#r))) this.#c = [], this.#w(!0);
      this.#V();
    }).catch(e => {
      if (this.#r) this.#u();
      if (v(e) === "ELOCKED") {
        t("Task list lock is busy (another session or process sharing this task list, or an in-flight task write, holds it); completed tasks stay visible and the reset is retried on the next refresh");
        return;
      }
      if (Pf(e) || gg(e)) {
        t(`Task list reset failed on the tasks directory and will be retried on the next refresh: ${l(e)}`, {
          level: "warn"
        });
        return;
      }
      d(e);
    }).finally(() => {
      this.#p = !1;
    });
  }
  #C() {
    if (this.#o) this.#s.clearTimeout(this.#o), this.#o = null;
  }
  #L() {
    if (this.#n?.close(), this.#n = null, this.#e.phase === "live") this.#e.subscription.unsubscribe();
    if (this.#e = {
      phase: "idle"
    }, this.#m++, this.#f = null, this.#b?.(), this.#b = null, this.#C(), this.#l) this.#s.clearTimeout(this.#l);
    if (this.#t) this.#s.clearTimeout(this.#t);
    this.#l = null, this.#t = null, this.#i = !1, this.#a = !1;
  }
}
var fvn = Vt(null),
  k = () => {};
function u() {
  let s = Pe(fvn),
    i = W(r => r.teamContext);
  if (!(M8() && !Yn() && (!i || B0(i)))) return null;
  if (!s) throw ReferenceError("useTasksV2 cannot be called outside of a TasksV2StoreContext provider (mounted by <AppStateProvider />)");
  return s;
}
function Nbe() {
  return xe(u());
}
function ber() {
  let s = u();
  return se(() => s?.getSnapshot(), [s]);
}
function Ser() {
  let s = u();
  R(() => {
    if (!s) return;
    return s.subscribe(k);
  }, [s]);
}
function I8r() {
  return xe(u(), S) ?? !1;
}
function y(s, i) {
  if (s === void 0 || s.length !== i.length) return !1;
  for (let e = 0; e < i.length; e++) {
    let r = s[e],
      n = i[e];
    if (r.id !== n.id || r.status !== n.status || r.subject !== n.subject || r.activeForm !== n.activeForm || r.owner !== n.owner || r.description !== n.description || !m(r.blockedBy, n.blockedBy) || !m(r.blocks, n.blocks)) return !1;
  }
  return !0;
}
function m(s, i) {
  if (s.length !== i.length) return !1;
  for (let e = 0; e < s.length; e++) if (s[e] !== i[e]) return !1;
  return !0;
}
function S(s) {
  return s !== void 0 && s.length > 0;
}
export { pvn, fvn, Nbe, ber, Ser, I8r };