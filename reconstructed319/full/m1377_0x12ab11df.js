// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  we
} from "B:/~BUN/root/chunk-r5zmhp23.js";
import {
  eh,
  ye,
  Pc,
  DC
} from "B:/~BUN/root/chunk-game8aqv.js";
import {
  f
} from "B:/~BUN/root/chunk-drx9cnw1.js";
import {
  d
} from "B:/~BUN/root/chunk-y2g9f85n.js";
import {
  t
} from "B:/~BUN/root/chunk-2pp12te6.js";
import {
  Se
} from "B:/~BUN/root/chunk-x24hm796.js";
import {
  Tpe
} from "B:/~BUN/root/chunk-3xdsa4p8.js";
import {
  Ygt,
  p4,
  D3,
  vRe,
  b_,
  L3,
  t$t,
  r$t,
  oVe,
  at,
  qk,
  rt,
  Vt,
  v
} from "B:/~BUN/root/chunk-1ks9vs37.js";
import {
  l
} from "B:/~BUN/root/chunk-mb9chr1y.js";
import {
  rr,
  Tl
} from "B:/~BUN/root/chunk-thn0wk2x.js";
import {
  ir
} from "B:/~BUN/root/chunk-6n5g80b8.js";
import {
  qn
} from "B:/~BUN/root/chunk-7wn6n2hd.js";
import {
  R_
} from "B:/~BUN/root/chunk-1fg2bpc3.js";
import {
  Ei
} from "B:/~BUN/root/chunk-sgy380eg.js";
import {
  Fi
} from "B:/~BUN/root/chunk-j05gjqgd.js";
import {
  mht
} from "B:/~BUN/root/chunk-78494p3w.js";
import {
  NRn,
  Bre,
  aE,
  lw,
  dw,
  $5t,
  U5t
} from "B:/~BUN/root/chunk-27h4st9h.js";
import {
  P$
} from "B:/~BUN/root/chunk-2fedt3ag.js";
import {
  G6e
} from "B:/~BUN/root/chunk-m3yj5bkm.js";
import {
  btr
} from "B:/~BUN/root/chunk-dry50drj.js";
import {
  eat
} from "B:/~BUN/root/chunk-qed5a8pe.js";
import {
  lr
} from "B:/~BUN/root/chunk-75wha2r5.js";
import {
  cx,
  xp,
  LK
} from "B:/~BUN/root/chunk-4wqfxtzb.js";

function KOe(n = !0, e = !1) {
  if (!n) return Tpe;
  let o = eat(Ei("theme", "dark").value);
  if (e) return Se.dim(lr("promptBorder", o)(Tpe));
  return lr("fastMode", o)(Tpe)
}
var zYo = 8000,
  z6e = "Fast mode unchanged (cancelled)";

function qOe(n) {
  if (b_(NRn({
      ...n,
      toolPermissionContext: {
        mode: "default"
      }
    }))) return;
  let e = vRe();
  return Vt(e) === Vt(qk()) ? null : e
}
async function k3r(n, e, o) {
  let i = qOe(e());
  if (i === void 0 || Tl() || !Bre(n)) return {
    vetted: KSn,
    messages: []
  };
  let s = await cx(n, e, i, "command", {
    signal: o
  });
  if (s.decision === "proceed") return {
    vetted: {
      target: i
    },
    messages: s.messages
  };
  return {
    refusal: LK(i, s.decision === "ask" ? `${s.reason??"confirmation required"} (use /model to switch, then /fast)` : s.reason, s.messages)
  }
}
var KSn = {
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
      return `Fast mode was not ${o} on the workspace: ${n.reason}`
  }
}

function qSn(n, e, o, i = !0, s, a = KSn) {
  if (L3(), e) t$t();
  let k = () => {
      if (i && !ye()) return;
      DC({
        ...Pc() ?? {},
        fastMode: e
      })
    },
    M = () => {
      if (G6e({
          fastMode: e
        }, o), e) {
        let r = !1,
          m = null;
        if (o((u) => {
            let g = qOe(u);
            if (g === void 0) return u;
            if (!("unvetted" in a) && a.target !== g) return u;
            return aE(n, u, g, "command"), r = !0, m = g, {
              ...u,
              mainLoopModel: g,
              mainLoopModelForSession: null
            }
          }), r && Ygt()) eh(m)
      }
      if (!i)
        if (!R_() && Ygt()) Fi.notifyChange("flagSettings");
        else ir()
    };
  if (Tl()) {
    k();
    let r = rr()?.sendControlRequest({
      subtype: "apply_flag_settings",
      settings: {
        fastMode: e ? !0 : null,
        ...e && {
          model: vRe()
        }
      }
    });
    if (!r) return M(), Promise.resolve(void 0);
    return r.then(() => {
      M();
      return
    }, (m) => (t(`fast mode: workspace did not accept apply_flag_settings: ${d(m)}`, {
      level: "error"
    }), m instanceof P$ ? {
      kind: "timeout"
    } : {
      kind: "refused",
      reason: xp(d(m))
    }))
  }
  if (e && !("unvetted" in a)) {
    let r = !1;
    if (o((m) => {
        let u = qOe(m);
        return r = u !== void 0 && u !== a.target, m
      }), r) return Promise.resolve({
      kind: "stale"
    })
  }
  if (k(), btr(e, s), i) qn("userSettings", {
    fastMode: e ? !0 : void 0
  }, void 0, s);
  return M(), Promise.resolve(void 0)
}

function v3r(n) {
  if (!mht(n)) return null;
  let e = v("tengu_sunset_penguin_opus48", "2026-11-30"),
    o = Date.parse(e);
  if (Number.isNaN(o) || Date.now() >= o) return null;
  return {
    key: "opus48-fast-mode-deprecation",
    text: `Opus 4.8 fast mode is deprecated and will be removed on ${new Date(o).toLocaleDateString("en-US",{month:"short",day:"numeric",timeZone:"UTC"})}`,
    priority: "immediate",
    requeueOnPreempt: !0,
    color: "warning"
  }
}
async function YSn(n, e, o, i, s, a = !0, k, M, r, m, u, g) {
  let _ = () => lw(n, async () => {
      if (M) await we(M(), zYo);
      if (r?.aborted) return {
        kind: "refused",
        refusal: z6e
      };
      let F = p4(void 0, {
        sessionOptIn: !a && !R_() && Ygt(),
        sessionOnly: !a || ye()
      });
      if (F && e) return {
        kind: "refused",
        refusal: `Fast mode unavailable: ${F}`
      };
      let y = KSn,
        h = [];
      if (e) {
        let p = await k3r(n, o, r);
        if (r?.aborted) return {
          kind: "refused",
          refusal: z6e
        };
        if (p.refusal !== void 0) return {
          kind: "refused",
          refusal: p.refusal
        };
        y = p.vetted, h = p.messages
      }
      let w = e && qOe(o()) !== void 0;
      return m?.(), {
        kind: "applied",
        remote: await qSn(n, e, i, a, k, y),
        willPromote: w,
        hookMessages: h
      }
    }),
    S = {},
    P = a && u !== void 0 && !Tl() ? await u(e, async () => {
      if (S.outcome = await _(), S.outcome.kind === "refused") return S.outcome.refusal;
      return S.outcome.remote === void 0 ? void 0 : $qt(S.outcome.remote, e)
    }) : void 0,
    c = S.outcome ?? (P === void 0 ? await _() : void 0);
  if (c === void 0) return r?.aborted ? z6e : P ?? "Fast mode was not changed";
  if (c.kind === "refused") return c.refusal;
  if (c.remote !== void 0) return $qt(c.remote, e);
  if (l("tengu_fast_mode_toggled", {
      enabled: e,
      source: f(s),
      remote: Tl()
    }), e) {
    let F = KOe(!0),
      y = c.willPromote ? `${U5t}${dw(D3())}` : "",
      h = at(),
      w = rt(b_(h) ? h : Vt(vRe())),
      O = oVe(r$t(w)),
      p = v3r(w);
    if (p) g?.({
      type: "notification",
      notification: p
    });
    let E = a ? "" : " (this session only)",
      T = c.hookMessages.length > 0 ? `
${c.hookMessages.map(xp).join(`
`)}` : "";
    return `${F} ${$5t}${y} \xB7 ${O}${E}${T}`
  } else return `Fast mode OFF${a?"":" (this session only)"}`
}
export {
  KOe,
  zYo,
  z6e,
  qOe,
  k3r,
  KSn,
  $qt,
  qSn,
  v3r,
  YSn
};
