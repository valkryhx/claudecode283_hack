// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { c } from "B:/~BUN/root/chunk-kks4mj3w.js";
import { l } from "B:/~BUN/root/chunk-bgthmgyc.js";
import { nt } from "B:/~BUN/root/chunk-17wqwt36.js";
import { fp, Te, aT, jD } from "B:/~BUN/root/chunk-4rk7cwxz.js";
import { t } from "B:/~BUN/root/chunk-qe2zga5e.js";
import { pe } from "B:/~BUN/root/chunk-nf4z9ga7.js";
import { Ene } from "B:/~BUN/root/chunk-ah3egpyh.js";
import { vFe, N6, XF, Mte, Yy, JF, nYe, Vhe, it, _y, Be, Tt } from "B:/~BUN/root/chunk-gf53qpk6.js";
import { i } from "B:/~BUN/root/chunk-728mwbhs.js";
import { R1 } from "B:/~BUN/root/chunk-bt3h0syz.js";
import { lr, va } from "B:/~BUN/root/chunk-339q6g5w.js";
import { Ss } from "B:/~BUN/root/chunk-290k5gh5.js";
import { ln } from "B:/~BUN/root/chunk-3rzkfay5.js";
import { Mo } from "B:/~BUN/root/chunk-4py062qg.js";
import { Hi } from "B:/~BUN/root/chunk-d36ctpgs.js";
import { jRt, GG, $y, Q_, Z_, srt, irt } from "B:/~BUN/root/chunk-3jyp964r.js";
import { hR } from "B:/~BUN/root/chunk-y39emrp9.js";
import { Vze } from "B:/~BUN/root/chunk-83daw9bd.js";
import { Pn } from "B:/~BUN/root/chunk-106hagsg.js";
import { $Oe } from "B:/~BUN/root/chunk-qq6w89ha.js";
import { sk, Td, xU } from "B:/~BUN/root/chunk-qacpyzq5.js";
function Yoe(n = !0, e = !1) {
  if (!n) return Ene;
  let r = $Oe(Mo("theme", "dark").value);
  if (e) return pe.dim(Pn("promptBorder", r)(Ene));
  return Pn("fastMode", r)(Ene);
}
var pdr = 8000,
  refusal = "Fast mode unchanged (cancelled)";
function Xoe(n) {
  if (Yy(jRt({
    ...n,
    toolPermissionContext: {
      mode: "default"
    }
  }))) return;
  let e = Mte();
  return Tt(e) === Tt(_y()) ? null : e;
}
async function TAn(n, e, signal) {
  let target = Xoe(e());
  if (target === void 0 || va() || !GG(n)) return {
    vetted: vetted,
    messages: []
  };
  let u = await sk(n, e, target, "command", {
    signal: signal
  });
  if (u.decision === "proceed") return {
    vetted: {
      target: target
    },
    messages: u.messages
  };
  return {
    refusal: xU(target, u.decision === "ask" ? `${u.reason ?? "confirmation required"} (use /model to switch, then /fast)` : u.reason, u.messages)
  };
}
var vetted = {
  unvetted: !0
};
function Qvt(n, e) {
  let r = e ? "enabled" : "disabled";
  switch (n.kind) {
    case "timeout":
      return `No response from the workspace \u2014 fast mode may still have been ${r} there`;
    case "stale":
      return `Fast mode was not ${r}: the model changed while PreModelSwitch hooks ran; try again`;
    case "refused":
      return `Fast mode was not ${r} on the workspace: ${n.reason}`;
  }
}
function Zvt(n, fastMode, r, m = !0, u, f = vetted) {
  JF();
  let S = () => {
      if (m && !Te()) return;
      jD({
        ...(aT() ?? {}),
        fastMode: fastMode
      });
    },
    g = () => {
      if (Vze({
        fastMode: fastMode
      }, r), fastMode) {
        let s = !1,
          a = null;
        if (r(o => {
          let mainLoopModel = Xoe(o);
          if (mainLoopModel === void 0) return o;
          if (!("unvetted" in f) && f.target !== mainLoopModel) return o;
          return $y(n, o, mainLoopModel, "command"), s = !0, a = mainLoopModel, {
            ...o,
            mainLoopModel: mainLoopModel,
            mainLoopModelForSession: null
          };
        }), s && vFe()) fp(a);
      }
      if (!m) if (!R1() && vFe()) Hi.notifyChange("flagSettings");else Ss();
    };
  if (va()) {
    S();
    let s = lr()?.sendControlRequest({
      subtype: "apply_flag_settings",
      settings: {
        fastMode: fastMode ? !0 : null,
        ...(fastMode && {
          model: Mte()
        })
      }
    });
    if (!s) return g(), Promise.resolve(void 0);
    return s.then(() => {
      g();
      return;
    }, a => (t(`fast mode: workspace did not accept apply_flag_settings: ${l(a)}`, {
      level: "error"
    }), a instanceof hR ? {
      kind: "timeout"
    } : {
      kind: "refused",
      reason: Td(l(a))
    }));
  }
  if (fastMode && !("unvetted" in f)) {
    let s = !1;
    if (r(a => {
      let o = Xoe(a);
      return s = o !== void 0 && o !== f.target, a;
    }), s) return Promise.resolve({
      kind: "stale"
    });
  }
  if (S(), m) ln("userSettings", {
    fastMode: fastMode ? !0 : void 0
  }, void 0, u);
  return g(), Promise.resolve(void 0);
}
async function ekt(n, enabled, r, m, u, f = !0, S, g, s, a) {
  let o = await Q_(n, async () => {
    if (g) await nt(g(), pdr);
    if (s?.aborted) return {
      kind: "refused",
      refusal: refusal
    };
    let d = N6(void 0, {
      sessionOptIn: !f && !R1() && vFe(),
      sessionOnly: !f || Te()
    });
    if (d && enabled) return {
      kind: "refused",
      refusal: `Fast mode unavailable: ${d}`
    };
    let F = vetted,
      hookMessages = [];
    if (enabled) {
      let M = await TAn(n, r, s);
      if (s?.aborted) return {
        kind: "refused",
        refusal: refusal
      };
      if (M.refusal !== void 0) return {
        kind: "refused",
        refusal: M.refusal
      };
      F = M.vetted, hookMessages = M.messages;
    }
    let willPromote = enabled && Xoe(r()) !== void 0;
    return a?.(), {
      kind: "applied",
      remote: await Zvt(n, enabled, m, f, S, F),
      willPromote: willPromote,
      hookMessages: hookMessages
    };
  });
  if (o.kind === "refused") return o.refusal;
  if (o.remote !== void 0) return Qvt(o.remote, enabled);
  if (i("tengu_fast_mode_toggled", {
    enabled: enabled,
    source: c(u),
    remote: va()
  }), enabled) {
    let d = Yoe(!0),
      F = o.willPromote ? `${irt}${Z_(XF())}` : "",
      p = it(),
      h = Be(Yy(p) ? p : Tt(Mte())),
      k = Vhe(nYe(h)),
      M = f ? "" : " (this session only)",
      P = o.hookMessages.length > 0 ? `
${o.hookMessages.map(Td).join(`
`)}` : "";
    return `${d} ${srt}${F} \xB7 ${k}${M}${P}`;
  } else return `Fast mode OFF${f ? "" : " (this session only)"}`;
}
export { Yoe, pdr, refusal as FOe, Xoe, TAn, vetted as Jvt, Qvt, Zvt, ekt };