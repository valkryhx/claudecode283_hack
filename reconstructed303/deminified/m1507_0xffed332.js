// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { b, c } from "B:/~BUN/root/chunk-jthpk6wv.js";
import { H } from "B:/~BUN/root/chunk-3aez4b53.js";
import { F } from "B:/~BUN/root/chunk-rpez7z7a.js";
import { g, m } from "B:/~BUN/root/chunk-kzgf20y6.js";
import { HM } from "B:/~BUN/root/chunk-hb6x4e3n.js";
import { l } from "B:/~BUN/root/chunk-c09hf5e4.js";
import { yi, dr } from "B:/~BUN/root/chunk-6a9s3k2y.js";
import { Run, s_t, dne, kHo, V5n, EHo, THo, CHo } from "B:/~BUN/root/chunk-1gpjpba6.js";
import { Bj } from "B:/~BUN/root/chunk-0n2201tc.js";
import { Ca } from "B:/~BUN/root/chunk-c44qc88s.js";
import { uCr, PAs, Gs } from "B:/~BUN/root/chunk-dn8rakwm.js";
import { e_e } from "B:/~BUN/root/chunk-tynpy1t1.js";
import { O9 } from "B:/~BUN/root/chunk-qdaqzk6w.js";
import { ya } from "B:/~BUN/root/chunk-6k93vgm0.js";
var z = "tengu_synchronous_bunny";
function R() {
  return ya(z, {
    safe: !0
  });
}
var B = "served-settings-changed",
  N = "served-settings-changed-between",
  I = "served-settings-taken-as-found",
  x = "served-settings-record-unavailable",
  D = {
    project: "projectSettings",
    local: "localSettings",
    legacy: "localSettings"
  };
function k(p) {
  try {
    dr(), Bj({
      userLayer: "retain"
    });
  } catch (error) {
    l(H(error));
  }
  try {
    HM().reset();
  } catch (error) {
    l(H(error));
  }
  for (let n of p) try {
    Ca.notifyChange(n);
  } catch (error) {
    l(H(error));
  }
}
var W = 2000,
  weakSet = new WeakSet();
function K(p, n, i) {
  let s = i,
    t = n,
    f = performance.now(),
    S = () => {
      queueMicrotask(() => k(["projectSettings", "localSettings"]));
      return;
    };
  return () => {
    let h = EHo() !== t;
    if (!h && performance.now() - f < W) return s;
    f = performance.now();
    try {
      let a = s_t(),
        d = uCr(p, a, dne, "look", Run);
      if (d.heldBack.filter(item => !d.firstSeen.some(y => y.slot === item)).length === 0) return S();
      t = a.key, s = V5n(d.seeds);
    } catch (error) {
      if (l(H(error)), h) return S();
    }
    return s;
  };
}
function ZSn(p, n = e_e()) {
  if (!R()) return;
  let i = e => {
      try {
        g("remote_served_settings_freeze", e);
      } catch (error) {
        l(H(error));
      }
    },
    s = (e, r) => {
      try {
        p?.(e, r);
      } catch (error) {
        l(H(error));
      }
    },
    t,
    f,
    S,
    h = !1,
    a,
    prior_serving = !0;
  try {
    prior_serving = PAs();
  } catch (error) {
    l(H(error));
  }
  try {
    let e = s_t();
    a = e.key, t = uCr(n, e, dne, "engage", Run);
    let matching = t.matching;
    S = V5n(t.seeds), f = kHo({
      files: t.seeds,
      onOwnWrite: (o, u) => {
        if (!matching.has(o)) return;
        try {
          n.recordFile(o, O9(u), "own_write"), h = !0;
        } catch (error) {
          throw matching.delete(o), m("remote_served_settings_freeze", "own_write_not_recorded"), error;
        }
      }
    });
  } catch (error) {
    throw m("remote_served_settings_freeze", "engage_failed"), s(x, Gs["served_settings.record_unavailable"]), error;
  }
  if (i({
    op: b("engaged")
  }), t.firstSeen.length > 0) {
    let widening_keys = t.firstSeen.some(item => item.widening);
    if (i({
      op: b("baseline"),
      files_present: F(t.firstSeen, r => r.present),
      prior_serving: prior_serving,
      widening_keys: widening_keys
    }), prior_serving && widening_keys) s(I, Gs["served_settings.taken_as_found"]);
  }
  if (t.heldBack.length > 0) i({
    op: b("held_back"),
    files: t.heldBack.length,
    unreadable: t.unreadable,
    hook_waiting: t.hookWaiting
  }), s(N, Gs["served_settings.held_back"]);
  let T = yi(),
    _ = weakSet.has(T);
  if (f.began && (t.heldBack.length > 0 || _)) k(_ ? ["projectSettings", "localSettings"] : new Set(t.heldBack.map(item => D[item])));
  weakSet.add(T);
  let y = e => {
      i({
        op: b("held_change"),
        when: c(e)
      }), s(B, Gs["served_settings.changed_while_attached"]);
    },
    E = !1,
    v = e => {
      if (E) return;
      try {
        if (CHo() === "changed") E = !0, y(e);
      } catch (error) {
        l(H(error)), E = !0, y(e);
      }
    },
    O = yi().onInvalidate(() => v("during_attach")),
    w = !1;
  return {
    hookWaiting: t.hookWaiting,
    end: () => {
      if (w) return;
      w = !0, O(), v("at_end");
      let e;
      try {
        let o = s_t(),
          u = uCr(n, o, dne, "look", Run);
        e = u.heldBack.length > 0 ? V5n(u.seeds) : void 0, n.noteServed(o.key, [...u.matching]);
      } catch (error) {
        l(H(error)), e = S;
      }
      let r;
      try {
        r = f.release().last;
      } catch (error) {
        l(H(error)), r = !0;
      }
      if (!r) return;
      try {
        if (e !== void 0) THo(e, K(n, a, e));else if (E || h || t.heldBack.length > 0) k(["projectSettings", "localSettings"]);
      } catch (error) {
        l(H(error));
      }
    }
  };
}
export { ZSn };