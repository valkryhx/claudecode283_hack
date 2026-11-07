// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { b, f } from "B:/~BUN/root/chunk-drx9cnw1.js";
import { F } from "B:/~BUN/root/chunk-y2g9f85n.js";
import { g, m } from "B:/~BUN/root/chunk-3z3yrbk4.js";
import { EU, sM, Wfe } from "B:/~BUN/root/chunk-1ks9vs37.js";
import { kj, i } from "B:/~BUN/root/chunk-j6pt0v41.js";
import { a } from "B:/~BUN/root/chunk-xrwdh0g4.js";
import { WSt } from "B:/~BUN/root/chunk-gq1er5y2.js";
import { wN } from "B:/~BUN/root/chunk-83p1z1q5.js";
import { Xo, ir } from "B:/~BUN/root/chunk-6n5g80b8.js";
import { Nan, TKe, $ie, JWn, x0r, ONs, INs, MNs } from "B:/~BUN/root/chunk-7wn6n2hd.js";
import { Am } from "B:/~BUN/root/chunk-xgg9zsk6.js";
import { Xq } from "B:/~BUN/root/chunk-79dw4seg.js";
import { Fi } from "B:/~BUN/root/chunk-j05gjqgd.js";
import { la, iyr, mOi } from "B:/~BUN/root/chunk-cxcakgnv.js";
import { ZPe } from "B:/~BUN/root/chunk-1ps3p0s2.js";
import { I6 } from "B:/~BUN/root/chunk-w0kge9aq.js";
import { _t } from "B:/~BUN/root/chunk-3a409jmn.js";
import { U } from "B:/~BUN/root/chunk-5ha2avah.js";
import { homedir as N } from "os";
var z = "tengu_synchronous_bunny";
function C() {
  return _t(z, {
    safe: !0
  });
}
var B = "served-settings-changed",
  W = "served-settings-changed-between",
  D = "served-settings-taken-as-found",
  L = "served-settings-record-unavailable",
  timeout = 5000;
function H() {
  try {
    Wfe();
    let s = kj("git", i.PATH ?? "");
    if (s === null || wN("git") === null) return !1;
    let r = WSt(s, ["--version"], {
      reject: !1,
      timeout: timeout,
      cwd: N(),
      stdin: "ignore"
    });
    if (r.exitCode !== 0 || !String(r.stdout).startsWith("git version")) return !1;
    return !sM({
      onIndeterminate: "untracked"
    });
  } catch (error) {
    return a(F(error)), !1;
  }
}
var j = {
  project: "projectSettings",
  local: "localSettings",
  legacy: "localSettings"
};
function w(s) {
  try {
    ir(), Xq({
      userLayer: "retain"
    });
  } catch (error) {
    a(F(error));
  }
  try {
    EU().reset();
  } catch (error) {
    a(F(error));
  }
  for (let r of s) try {
    Fi.notifyChange(r);
  } catch (error) {
    a(F(error));
  }
}
var K = 2000,
  weakSet = new WeakSet();
function P(s, r, c) {
  let d = c,
    t = r,
    l = performance.now(),
    u = () => {
      queueMicrotask(() => w(["projectSettings", "localSettings"]));
      return;
    };
  return () => {
    let h = ONs() !== t;
    if (!h && performance.now() - l < K) return d;
    l = performance.now();
    try {
      let p = TKe(),
        S = iyr(s, p, $ie, "look", Nan);
      if (S.heldBack.filter(item => !S.firstSeen.some(E => E.slot === item)).length === 0) return u();
      t = p.key, d = x0r(S.seeds);
    } catch (error) {
      if (a(F(error)), h) return u();
    }
    return d;
  };
}
function P8n(s, r = ZPe()) {
  if (!C()) return;
  let c = e => {
      try {
        g("remote_served_settings_freeze", e);
      } catch (error) {
        a(F(error));
      }
    },
    d = (e, o) => {
      try {
        s?.(e, o);
      } catch (error) {
        a(F(error));
      }
    },
    t,
    l,
    u,
    h = !1,
    p,
    prior_serving = !0;
  try {
    prior_serving = mOi();
  } catch (error) {
    a(F(error));
  }
  try {
    let e = TKe();
    p = e.key, t = iyr(r, e, $ie, "engage", Nan, Am(H));
    let matching = t.matching;
    u = x0r(t.sandboxTurnedOn ? iyr(r, e, $ie, "look", Nan).seeds : t.seeds), l = JWn({
      files: t.seeds,
      onOwnWrite: (n, _) => {
        if (!matching.has(n)) return;
        try {
          r.recordFile(n, I6(_), "own_write"), h = !0;
        } catch (error) {
          throw matching.delete(n), m("remote_served_settings_freeze", "own_write_not_recorded"), error;
        }
      }
    });
  } catch (error) {
    throw m("remote_served_settings_freeze", "engage_failed"), d(L, la["served_settings.record_unavailable"]), error;
  }
  if (c({
    op: b("engaged")
  }), t.firstSeen.length > 0) {
    let widening_keys = t.firstSeen.some(item => item.widening);
    if (c({
      op: b("baseline"),
      files_present: U(t.firstSeen, o => o.present),
      prior_serving: prior_serving,
      widening_keys: widening_keys
    }), prior_serving && widening_keys) d(D, la["served_settings.taken_as_found"]);
  }
  if (t.heldBack.length > 0) c({
    op: b("held_back"),
    files: t.heldBack.length,
    unreadable: t.unreadable,
    hook_waiting: t.hookWaiting
  }), d(W, la["served_settings.held_back"]);
  let y = Xo(),
    T = weakSet.has(y);
  if (l.began && (t.heldBack.length > 0 || T)) w(T ? ["projectSettings", "localSettings"] : new Set(t.heldBack.map(item => j[item])));
  weakSet.add(y);
  let E = e => {
      c({
        op: b("held_change"),
        when: f(e)
      }), d(B, la["served_settings.changed_while_attached"]);
    },
    k = !1,
    R = e => {
      if (k) return;
      try {
        if (MNs() === "changed") k = !0, E(e);
      } catch (error) {
        a(F(error)), k = !0, E(e);
      }
    },
    A = Xo().onInvalidate(() => R("during_attach")),
    O = !1,
    sandboxTurnedOn = t.sandboxTurnedOn || !l.began && y.repoTierFreeze.tier("localSettings")?.settings?.sandbox?.enabled === !0;
  return {
    hookWaiting: t.hookWaiting,
    sandboxTurnedOn: sandboxTurnedOn,
    end: () => {
      if (O) return;
      O = !0, A(), R("at_end");
      let e;
      try {
        let n = TKe(),
          _ = iyr(r, n, $ie, "look", Nan);
        e = _.heldBack.length > 0 ? x0r(_.seeds) : void 0;
        try {
          r.noteServed(n.key, [..._.matching]);
        } catch (error) {
          a(F(error));
        }
      } catch (error) {
        a(F(error)), e = u;
      }
      let o;
      try {
        o = l.release().last;
      } catch (error) {
        a(F(error)), o = !0;
      }
      if (!o) return;
      try {
        if (e !== void 0) INs(e, P(r, p, e));else if (k || h || t.heldBack.length > 0) w(["projectSettings", "localSettings"]);
      } catch (error) {
        a(F(error));
      }
    }
  };
}
export { P8n };