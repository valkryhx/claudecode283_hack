// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { we } from "B:/~BUN/root/chunk-r5zmhp23.js";
import { eh, ye, Pc, DC } from "B:/~BUN/root/chunk-game8aqv.js";
import { f } from "B:/~BUN/root/chunk-drx9cnw1.js";
import { d } from "B:/~BUN/root/chunk-y2g9f85n.js";
import { t } from "B:/~BUN/root/chunk-2pp12te6.js";
import { Se } from "B:/~BUN/root/chunk-x24hm796.js";
import { Tpe } from "B:/~BUN/root/chunk-3xdsa4p8.js";
import { Ygt, p4, D3, vRe, b_, L3, t$t, r$t, oVe, at, qk, rt, Vt, v } from "B:/~BUN/root/chunk-1ks9vs37.js";
import { l } from "B:/~BUN/root/chunk-mb9chr1y.js";
import { rr, Tl } from "B:/~BUN/root/chunk-thn0wk2x.js";
import { ir } from "B:/~BUN/root/chunk-6n5g80b8.js";
import { qn } from "B:/~BUN/root/chunk-7wn6n2hd.js";
import { R_ } from "B:/~BUN/root/chunk-1fg2bpc3.js";
import { Ei } from "B:/~BUN/root/chunk-sgy380eg.js";
import { Fi } from "B:/~BUN/root/chunk-j05gjqgd.js";
import { mht } from "B:/~BUN/root/chunk-78494p3w.js";
import { NRn, Bre, aE, lw, dw, $5t, U5t } from "B:/~BUN/root/chunk-27h4st9h.js";
import { P$ } from "B:/~BUN/root/chunk-2fedt3ag.js";
import { G6e } from "B:/~BUN/root/chunk-m3yj5bkm.js";
import { btr } from "B:/~BUN/root/chunk-dry50drj.js";
import { eat } from "B:/~BUN/root/chunk-qed5a8pe.js";
import { lr } from "B:/~BUN/root/chunk-75wha2r5.js";
import { cx, xp, LK } from "B:/~BUN/root/chunk-4wqfxtzb.js";
function KOe(n = !0, e = !1) {
  if (!n) return Tpe;
  let o = eat(Ei("theme", "dark").value);
  if (e) return Se.dim(lr("promptBorder", o)(Tpe));
  return lr("fastMode", o)(Tpe);
}
var zYo = 8000,
  refusal = "Fast mode unchanged (cancelled)";
function qOe(n) {
  if (b_(NRn({
    ...n,
    toolPermissionContext: {
      mode: "default"
    }
  }))) return;
  let e = vRe();
  return Vt(e) === Vt(qk()) ? null : e;
}
async function k3r(n, e, signal) {
  let target = qOe(e());
  if (target === void 0 || Tl() || !Bre(n)) return {
    vetted: vetted,
    messages: []
  };
  let s = await cx(n, e, target, "command", {
    signal: signal
  });
  if (s.decision === "proceed") return {
    vetted: {
      target: target
    },
    messages: s.messages
  };
  return {
    refusal: LK(target, s.decision === "ask" ? `${s.reason ?? "confirmation required"} (use /model to switch, then /fast)` : s.reason, s.messages)
  };
}
var vetted = {
  unvetted: !0
};
function $qt(n, e) {
  let o = e ? "enabled" : "disabled";
  switch (n.kind) {
    case "timeout":
      return `No response from the workspace \u2014 fast mode may still have been ${o} there`;
    case "stale":
      return `Fast mode was not ${o}: the model changed while PreModelSwitch hooks ran; try again`;
    case "refused":
      return `Fast mode was not ${o} on the workspace: ${n.reason}`;
  }
}
function qSn(n, fastMode, o, i = !0, s, a = vetted) {
  if (L3(), fastMode) t$t();
  let k = () => {
      if (i && !ye()) return;
      DC({
        ...(Pc() ?? {}),
        fastMode: fastMode
      });
    },
    M = () => {
      if (G6e({
        fastMode: fastMode
      }, o), fastMode) {
        let r = !1,
          m = null;
        if (o(u => {
          let mainLoopModel = qOe(u);
          if (mainLoopModel === void 0) return u;
          if (!("unvetted" in a) && a.target !== mainLoopModel) return u;
          return aE(n, u, mainLoopModel, "command"), r = !0, m = mainLoopModel, {
            ...u,
            mainLoopModel: mainLoopModel,
            mainLoopModelForSession: null
          };
        }), r && Ygt()) eh(m);
      }
      if (!i) if (!R_() && Ygt()) Fi.notifyChange("flagSettings");else ir();
    };
  if (Tl()) {
    k();
    let r = rr()?.sendControlRequest({
      subtype: "apply_flag_settings",
      settings: {
        fastMode: fastMode ? !0 : null,
        ...(fastMode && {
          model: vRe()
        })
      }
    });
    if (!r) return M(), Promise.resolve(void 0);
    return r.then(() => {
      M();
      return;
    }, m => (t(`fast mode: workspace did not accept apply_flag_settings: ${d(m)}`, {
      level: "error"
    }), m instanceof P$ ? {
      kind: "timeout"
    } : {
      kind: "refused",
      reason: xp(d(m))
    }));
  }
  if (fastMode && !("unvetted" in a)) {
    let r = !1;
    if (o(m => {
      let u = qOe(m);
      return r = u !== void 0 && u !== a.target, m;
    }), r) return Promise.resolve({
      kind: "stale"
    });
  }
  if (k(), btr(fastMode, s), i) qn("userSettings", {
    fastMode: fastMode ? !0 : void 0
  }, void 0, s);
  return M(), Promise.resolve(void 0);
}
function v3r(n) {
  if (!mht(n)) return null;
  let e = v("tengu_sunset_penguin_opus48", "2026-11-30"),
    o = Date.parse(e);
  if (Number.isNaN(o) || Date.now() >= o) return null;
  return {
    key: "opus48-fast-mode-deprecation",
    text: `Opus 4.8 fast mode is deprecated and will be removed on ${new Date(o).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      timeZone: "UTC"
    })}`,
    priority: "immediate",
    requeueOnPreempt: !0,
    color: "warning"
  };
}
async function YSn(n, enabled, o, i, s, a = !0, k, M, r, m, u, g) {
  let _ = () => lw(n, async () => {
      if (M) await we(M(), zYo);
      if (r?.aborted) return {
        kind: "refused",
        refusal: refusal
      };
      let F = p4(void 0, {
        sessionOptIn: !a && !R_() && Ygt(),
        sessionOnly: !a || ye()
      });
      if (F && enabled) return {
        kind: "refused",
        refusal: `Fast mode unavailable: ${F}`
      };
      let y = vetted,
        hookMessages = [];
      if (enabled) {
        let p = await k3r(n, o, r);
        if (r?.aborted) return {
          kind: "refused",
          refusal: refusal
        };
        if (p.refusal !== void 0) return {
          kind: "refused",
          refusal: p.refusal
        };
        y = p.vetted, hookMessages = p.messages;
      }
      let willPromote = enabled && qOe(o()) !== void 0;
      return m?.(), {
        kind: "applied",
        remote: await qSn(n, enabled, i, a, k, y),
        willPromote: willPromote,
        hookMessages: hookMessages
      };
    }),
    S = {},
    P = a && u !== void 0 && !Tl() ? await u(enabled, async () => {
      if (S.outcome = await _(), S.outcome.kind === "refused") return S.outcome.refusal;
      return S.outcome.remote === void 0 ? void 0 : $qt(S.outcome.remote, enabled);
    }) : void 0,
    c = S.outcome ?? (P === void 0 ? await _() : void 0);
  if (c === void 0) return r?.aborted ? refusal : P ?? "Fast mode was not changed";
  if (c.kind === "refused") return c.refusal;
  if (c.remote !== void 0) return $qt(c.remote, enabled);
  if (l("tengu_fast_mode_toggled", {
    enabled: enabled,
    source: f(s),
    remote: Tl()
  }), enabled) {
    let F = KOe(!0),
      y = c.willPromote ? `${U5t}${dw(D3())}` : "",
      h = at(),
      w = rt(b_(h) ? h : Vt(vRe())),
      O = oVe(r$t(w)),
      notification = v3r(w);
    if (notification) g?.({
      type: "notification",
      notification: notification
    });
    let E = a ? "" : " (this session only)",
      T = c.hookMessages.length > 0 ? `
${c.hookMessages.map(xp).join(`
`)}` : "";
    return `${F} ${$5t}${y} \xB7 ${O}${E}${T}`;
  } else return `Fast mode OFF${a ? "" : " (this session only)"}`;
}
export { KOe, zYo, refusal as z6e, qOe, k3r, vetted as KSn, $qt, qSn, v3r, YSn };