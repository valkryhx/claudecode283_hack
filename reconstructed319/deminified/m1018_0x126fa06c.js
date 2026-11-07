// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { De } from "B:/~BUN/root/chunk-vz9zea4j.js";
import { xn } from "B:/~BUN/root/chunk-game8aqv.js";
import { d, k, H_, Nh } from "B:/~BUN/root/chunk-y2g9f85n.js";
import { a } from "B:/~BUN/root/chunk-xrwdh0g4.js";
import { t } from "B:/~BUN/root/chunk-2pp12te6.js";
import { Ne } from "B:/~BUN/root/chunk-qdyt0gq6.js";
import { G } from "B:/~BUN/root/chunk-tmdrwqnv.js";
import { zz } from "B:/~BUN/root/chunk-trd3c21n.js";
import { ELi, TLi, YT, SL, lD, CLi, II } from "B:/~BUN/root/chunk-k5xd4a86.js";
import { Mge } from "B:/~BUN/root/chunk-27h4st9h.js";
import { Jt, ve, O, j } from "B:/~BUN/root/chunk-czy5r8bc.js";
import { Ht } from "B:/~BUN/root/chunk-cbjnh04j.js";
import { X } from "B:/~BUN/root/chunk-g9pw24zp.js";
j();
import { watch as b } from "fs";
var g = 5000,
  T = 50,
  f = 5000;
class szr {
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
  #y = De();
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
    this.#r = X() && s !== void 0 ? s : void 0, this.#s = i, this.#E = e;
  }
  #w(s) {
    let i = this.#d;
    if (this.#d = s, s && !i) this.#E();
  }
  getSnapshot = () => this.#d ? void 0 : this.#c;
  subscribe = s => {
    let i = this.#y.subscribe(s);
    if (this.#g++, !this.#a) this.#a = !0, this.#b = ELi(this.#h), this.#k();
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
    let i = lD(s);
    if (i === this.#f && this.#n !== null) return;
    this.#n?.close(), this.#n = null, this.#f = i;
    try {
      let e = b(i, this.#h);
      e.on("error", r => {
        if (t(`Task list watcher error: ${d(r)}`, {
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
          if (subscription.unsubscribe(), onRetry) this.#v(listId);else this.#T(s, listId, !0);
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
          this.#v(listId);
          return;
        }
        this.#e = {
          phase: "idle"
        }, this.#i = !0, this.#u();
      },
      l;
    try {
      l = s.subscribe({
        target: "scope",
        scope: {
          namespace: "task",
          listId: SL(listId)
        }
      }, o => this.#x(o, generation));
    } catch (error) {
      h(null, d(error));
      return;
    }
    l.then(o => o.ok ? h(o.value) : h(null, Ht(o.error)), o => h(null, d(o)));
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
    if (t(`Task list subscription ended: ${Ht(s.error)}`, {
      level: "warn"
    }), e.onRetry || !this.#r) {
      e.subscription.unsubscribe(), this.#v(e.listId);
      return;
    }
    this.#T(this.#r, e.listId, !0);
  }
  #v(listId_2) {
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
    this.#l = this.#s.setTimeout(() => void this.#k(), T), this.#l.unref();
  };
  refetch = () => this.#k();
  #k = async () => {
    let s = ++this.#R,
      i = YT();
    this.#F(i);
    let e;
    try {
      e = await CLi(i, this.#r);
    } catch (error) {
      t(`Task list read failed: ${d(error)}`, {
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
    let i = YT();
    if (i !== s) return;
    this.#p = !0, II(i, this.#r).then(async e => {
      if (e.length > 0 && e.every(item => item.status === "completed") && (await TLi(i, this.#r))) this.#c = [], this.#w(!0);
      this.#V();
    }).catch(e => {
      if (this.#r) this.#u();
      if (k(e) === "ELOCKED") {
        t("Task list lock is busy (another session or process sharing this task list, or an in-flight task write, holds it); completed tasks stay visible and the reset is retried on the next refresh");
        return;
      }
      if (Nh(e) || H_(e)) {
        t(`Task list reset failed on the tasks directory and will be retried on the next refresh: ${d(e)}`, {
          level: "warn"
        });
        return;
      }
      a(e);
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
var izr = Jt(null),
  v = () => {};
function u() {
  let s = ve(izr),
    i = G(r => r.teamContext);
  if (!(Mge() && !xn() && (!i || zz(i)))) return null;
  if (!s) throw ReferenceError("useTasksV2 cannot be called outside of a TasksV2StoreContext provider (mounted by <AppStateProvider />)");
  return s;
}
function oke() {
  return Ne(u());
}
function WHo() {
  let s = u();
  O(() => {
    if (!s) return;
    return s.subscribe(v);
  }, [s]);
}
function V8s() {
  return Ne(u(), S) ?? !1;
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
export { szr, izr, oke, WHo, V8s };