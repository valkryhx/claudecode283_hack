// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { je } from "B:/~BUN/root/chunk-89mss1tj.js";
import { Bp, we, Gf, uP } from "B:/~BUN/root/chunk-rpez7z7a.js";
import { c } from "B:/~BUN/root/chunk-jthpk6wv.js";
import { d } from "B:/~BUN/root/chunk-3aez4b53.js";
import { t } from "B:/~BUN/root/chunk-6za2ez23.js";
import { he } from "B:/~BUN/root/chunk-4qqgabd5.js";
import { gne } from "B:/~BUN/root/chunk-8ye9n4fk.js";
import { zXe, rW, XG, nge, Gg, JG, qgt, Ygt, WIe, tt, Yb, qe, It } from "B:/~BUN/root/chunk-hb6x4e3n.js";
import { i } from "B:/~BUN/root/chunk-1kfn24jp.js";
import { Rr, kl } from "B:/~BUN/root/chunk-nxwmyxnk.js";
import { dr } from "B:/~BUN/root/chunk-6a9s3k2y.js";
import { In } from "B:/~BUN/root/chunk-1gpjpba6.js";
import { bs } from "B:/~BUN/root/chunk-gy660jgx.js";
import { Ca } from "B:/~BUN/root/chunk-c44qc88s.js";
import { SJt, f9, iw, Lb, f_, IPt, MPt } from "B:/~BUN/root/chunk-9grc6xh0.js";
import { X0 } from "B:/~BUN/root/chunk-k382hx6g.js";
import { rFe } from "B:/~BUN/root/chunk-8y3fbsrq.js";
import { jxn } from "B:/~BUN/root/chunk-s69xt8gc.js";
import { OKe } from "B:/~BUN/root/chunk-cy4hjzy6.js";
import { Kn } from "B:/~BUN/root/chunk-dsby0gnt.js";
import { yT, bu, R1 } from "B:/~BUN/root/chunk-1bymmb2s.js";
import { Fx } from "B:/~BUN/root/chunk-c6mbjdcy.js";
function pbe(o = !0, e = !1) {
  if (!o) return gne;
  let n = OKe(bs("theme", "dark").value);
  if (e) return he.dim(Kn("promptBorder", n)(gne));
  return Kn("fastMode", n)(gne);
}
var Q7r = 8000,
  refusal = "Fast mode unchanged (cancelled)";
function fbe(o) {
  if (Gg(SJt({
    ...o,
    toolPermissionContext: {
      mode: "default"
    }
  }))) return;
  let e = nge();
  return It(e) === It(Yb()) ? null : e;
}
async function ocr(o, e, signal) {
  let target = fbe(e());
  if (target === void 0 || kl() || !f9(o)) return {
    vetted: vetted,
    messages: []
  };
  let s = await yT(o, e, target, "command", {
    signal: signal
  });
  if (s.decision === "proceed") return {
    vetted: {
      target: target
    },
    messages: s.messages
  };
  return {
    refusal: R1(target, s.decision === "ask" ? `${s.reason ?? "confirmation required"} (use /model to switch, then /fast)` : s.reason, s.messages)
  };
}
var vetted = {
  unvetted: !0
};
function uCt(o, e) {
  let n = e ? "enabled" : "disabled";
  switch (o.kind) {
    case "timeout":
      return `No response from the workspace \u2014 fast mode may still have been ${n} there`;
    case "stale":
      return `Fast mode was not ${n}: the model changed while PreModelSwitch hooks ran; try again`;
    case "refused":
      return `Fast mode was not ${n} on the workspace: ${o.reason}`;
  }
}
function b6t(o, fastMode, n, f = !0, s, a = vetted) {
  if (JG(), fastMode) qgt();
  let k = () => {
      if (f && !we()) return;
      uP({
        ...(Gf() ?? {}),
        fastMode: fastMode
      });
    },
    M = () => {
      if (rFe({
        fastMode: fastMode
      }, n), fastMode) {
        let r = !1,
          m = null;
        if (n(u => {
          let mainLoopModel = fbe(u);
          if (mainLoopModel === void 0) return u;
          if (!("unvetted" in a) && a.target !== mainLoopModel) return u;
          return iw(o, u, mainLoopModel, "command"), r = !0, m = mainLoopModel, {
            ...u,
            mainLoopModel: mainLoopModel,
            mainLoopModelForSession: null
          };
        }), r && zXe()) Bp(m);
      }
      if (!f) if (!Fx() && zXe()) Ca.notifyChange("flagSettings");else dr();
    };
  if (kl()) {
    k();
    let r = Rr()?.sendControlRequest({
      subtype: "apply_flag_settings",
      settings: {
        fastMode: fastMode ? !0 : null,
        ...(fastMode && {
          model: nge()
        })
      }
    });
    if (!r) return M(), Promise.resolve(void 0);
    return r.then(() => {
      M();
      return;
    }, m => (t(`fast mode: workspace did not accept apply_flag_settings: ${d(m)}`, {
      level: "error"
    }), m instanceof X0 ? {
      kind: "timeout"
    } : {
      kind: "refused",
      reason: bu(d(m))
    }));
  }
  if (fastMode && !("unvetted" in a)) {
    let r = !1;
    if (n(m => {
      let u = fbe(m);
      return r = u !== void 0 && u !== a.target, m;
    }), r) return Promise.resolve({
      kind: "stale"
    });
  }
  if (k(), jxn(fastMode, s), f) In("userSettings", {
    fastMode: fastMode ? !0 : void 0
  }, void 0, s);
  return M(), Promise.resolve(void 0);
}
async function S6t(o, enabled, n, f, s, a = !0, k, M, r, m, u) {
  let l = () => Lb(o, async () => {
      if (M) await je(M(), Q7r);
      if (r?.aborted) return {
        kind: "refused",
        refusal: refusal
      };
      let F = rW(void 0, {
        sessionOptIn: !a && !Fx() && zXe(),
        sessionOnly: !a || we()
      });
      if (F && enabled) return {
        kind: "refused",
        refusal: `Fast mode unavailable: ${F}`
      };
      let w = vetted,
        hookMessages = [];
      if (enabled) {
        let S = await ocr(o, n, r);
        if (r?.aborted) return {
          kind: "refused",
          refusal: refusal
        };
        if (S.refusal !== void 0) return {
          kind: "refused",
          refusal: S.refusal
        };
        w = S.vetted, hookMessages = S.messages;
      }
      let willPromote = enabled && fbe(n()) !== void 0;
      return m?.(), {
        kind: "applied",
        remote: await b6t(o, enabled, f, a, k, w),
        willPromote: willPromote,
        hookMessages: hookMessages
      };
    }),
    p = {},
    y = a && u !== void 0 && !kl() ? await u(enabled, async () => {
      if (p.outcome = await l(), p.outcome.kind === "refused") return p.outcome.refusal;
      return p.outcome.remote === void 0 ? void 0 : uCt(p.outcome.remote, enabled);
    }) : void 0,
    g = p.outcome ?? (y === void 0 ? await l() : void 0);
  if (g === void 0) return r?.aborted ? refusal : y ?? "Fast mode was not changed";
  if (g.kind === "refused") return g.refusal;
  if (g.remote !== void 0) return uCt(g.remote, enabled);
  if (i("tengu_fast_mode_toggled", {
    enabled: enabled,
    source: c(s),
    remote: kl()
  }), enabled) {
    let F = pbe(!0),
      w = g.willPromote ? `${MPt}${f_(XG())}` : "",
      h = tt(),
      P = qe(Gg(h) ? h : It(nge())),
      _ = WIe(Ygt(P)),
      S = a ? "" : " (this session only)",
      O = g.hookMessages.length > 0 ? `
${g.hookMessages.map(bu).join(`
`)}` : "";
    return `${F} ${IPt}${w} \xB7 ${_}${S}${O}`;
  } else return `Fast mode OFF${a ? "" : " (this session only)"}`;
}
export { pbe, Q7r, refusal as nFe, fbe, ocr, vetted as _6t, uCt, b6t, S6t };