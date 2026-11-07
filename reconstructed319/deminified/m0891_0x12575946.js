// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { ye } from "B:/~BUN/root/chunk-game8aqv.js";
import { we } from "B:/~BUN/root/chunk-r5zmhp23.js";
import { be } from "B:/~BUN/root/chunk-7wn6n2hd.js";
import { Uo } from "B:/~BUN/root/chunk-4vxp7kvb.js";
import { Fl } from "B:/~BUN/root/chunk-1ks9vs37.js";
import { GBo, xne, R9n, Agn, w7s, qBo, YBo, jYe, A9n as beforeExit, R2r, xgn, Pgn, iVt, x9n, XBo } from "B:/~BUN/root/chunk-mfj52jen.js";
async function p(e, print) {
  let {
    exitRefusingManagedConfig: exitRefusingManagedConfig
  } = await import("B:/~BUN/root/chunk-6d9rhesx.js");
  return exitRefusingManagedConfig({
    message: e.message ?? "Claude Code couldn't load your organization's settings, which it requires before a session can start.",
    reason: R9n(e.decision),
    print: print,
    beforeExit: beforeExit
  });
}
function d(e, t) {
  return {
    surface: e ? "startup" : "noninteractive",
    authRecoveryCommand: !1,
    ...(t.afterSignIn === !0 && {
      afterSignIn: !0
    }),
    ...(t.fetchFlag !== void 0 && {
      fetchFlag: t.fetchFlag
    }),
    ...(t.isFlagFetchHeld !== void 0 && {
      isFlagFetchHeld: t.isFlagFetchHeld
    }),
    ...(t.isFlagCacheEmpty !== void 0 && {
      isFlagCacheEmpty: t.isFlagCacheEmpty
    })
  };
}
async function OBo(e = {}) {
  let t = e.interactive ?? !ye(),
    r = d(t, e),
    a = e.peek ?? Agn,
    n = a(r);
  if (Uo("org_config_gate_phase_one"), n.decision.verdict !== "refused") return;
  if (n.flagSource === "disk" || n.flagSource === "fallback") {
    let i = e.isFlagFetchHeld ?? iVt;
    if (i()) return;
    if (xgn(n.flagSource, i, e.isFlagCacheEmpty)) {
      if (await x9n(n.flag.budgetMs, e.fetchFlag), n = a(r), n.decision.verdict !== "refused") return;
    }
  }
  return await jYe(n, n.outcomes), l(n, r, t, e);
}
async function FEt(e = {}) {
  let t = e.interactive ?? !ye(),
    r = d(t, e),
    a = await (e.evaluate ?? w7s)(r);
  if (Uo("org_config_gate_phase_two"), !xne(a.decision)) return;
  return l(a, r, t, e);
}
async function IBo(e, t = {}) {
  let r = d(!1, t),
    {
      armed: armed
    } = await C(r, t);
  if (Uo("org_config_gate_headless"), !armed) return;
  let n = t.readPolicySlot ?? (() => be("policySettings")),
    i = n(),
    o = await e();
  if (!o.valid) return o;
  return await FEt({
    ...t,
    interactive: !1
  }), (t.settingsInHand ?? (() => GBo().reason === "ok"))() && n() === i ? o : void 0;
}
async function Uha(e = {}) {
  let t = d(!0, e),
    r = await C(t, e);
  if (Uo("org_config_gate_launch_lane"), !r.armed) return;
  if (!xne(r.decision)) {
    jYe(r, r.outcomes);
    return;
  }
  if (!(e.attended ?? !Fl()) || e.showBlockedScreen === void 0) return await (e.retryFetches ?? R2r)(), FEt({
    ...e,
    interactive: !0
  });
  return await jYe(r, r.outcomes), l(r, t, !0, {
    ...e,
    retryFirst: !0
  });
}
async function C(e, t) {
  let r = t.peek ?? Agn,
    a = r(e);
  if (Pgn(a, t.isFlagFetchHeld, t.isFlagCacheEmpty)) await XBo(t.fetchFlag), a = r(e);
  return qBo(a, () => r(e), t.primeSettingsCacheAge);
}
async function l(e, t, r, a) {
  let n = a.exit ?? (s => p(s, a.printMessage)),
    i = a.reportFinal ?? jYe;
  if (!r || !(a.attended ?? !Fl())) {
    let s = e;
    if (!r) {
      let f = await h(e, t, a);
      if (f !== void 0) {
        if (!xne(f.decision)) {
          await i(f, void 0, {
            outcome: "passed",
            recoveredAfterMs: f.decision.blockedMs
          });
          return;
        }
        s = f;
      }
    }
    return await i(s, void 0, {
      outcome: "exit"
    }), n(s);
  }
  let o = await a.showBlockedScreen?.();
  if (o === void 0) return await i(e, void 0, {
    outcome: "exit"
  }), n(e);
  let g = a.now ?? (() => performance.now()),
    u = g() - e.decision.blockedMs,
    c = e,
    O = 0,
    outcome = await o(e, async () => (await (a.retryFetches ?? R2r)(), O += 1, c = (a.reevaluate ?? YBo)(t, Math.max(0, Math.round(g() - u)), O), c), {
      retryNow: a.retryFirst === !0
    });
  if (outcome === "passed") {
    await i(c, void 0, {
      outcome: "passed",
      recoveredAfterMs: Math.max(0, Math.round(g() - u))
    });
    return;
  }
  return await i(c, void 0, {
    outcome: outcome
  }), n(c);
}
async function h(e, t, r) {
  let {
    decision: decision,
    flag: flag
  } = e;
  if (decision.verdict !== "blocked" || decision.reason !== "unavailable_credential_refresh") return;
  let i = flag.budgetMs - decision.blockedMs;
  if (i <= 0) return;
  let o = r.now ?? (() => performance.now()),
    g = o();
  await we((r.retryFetches ?? R2r)().catch(() => {}), i);
  let u = Math.max(0, Math.round(o() - g));
  return (r.reevaluate ?? YBo)(t, decision.blockedMs + u, 1);
}
export { OBo, FEt, IBo, Uha };