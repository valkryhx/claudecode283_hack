// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { s, n } from "B:/~BUN/root/chunk-qey16aan.js";
import { S } from "B:/~BUN/root/chunk-bn4bjw9d.js";
import { i } from "B:/~BUN/root/chunk-j6pt0v41.js";
import { uC, IRe } from "B:/~BUN/root/chunk-1ks9vs37.js";
import { Ws } from "B:/~BUN/root/chunk-x2k0mb6b.js";
import { Y } from "B:/~BUN/root/chunk-c1v460b9.js";
import { Ce } from "B:/~BUN/root/chunk-cync0e08.js";
import { ke } from "B:/~BUN/root/chunk-bvcekd4j.js";
import { H0 } from "B:/~BUN/root/chunk-t85n63bg.js";
import { Ze } from "B:/~BUN/root/chunk-cpzw87wr.js";
import { Tt } from "B:/~BUN/root/chunk-dw9hahea.js";
import { Oa } from "B:/~BUN/root/chunk-rzvkfy4m.js";
import { gt } from "B:/~BUN/root/chunk-sx03ea6s.js";
import { ne, e, r } from "B:/~BUN/root/chunk-t16eynda.js";
import { Jt, ue, ve, O, Z, y, j } from "B:/~BUN/root/chunk-czy5r8bc.js";
import { $t } from "B:/~BUN/root/chunk-zpne314q.js";
import { w } from "B:/~BUN/root/chunk-4qfwb3rf.js";
j();
j();
function yn(uo) {
  return uo + 1;
}
function Pn(mo) {
  return mo.slice(0, -1);
}
function vn(fo) {
  return fo - 1;
}
var he = Jt(null);
function Bot(f) {
  let d = S(37),
    {
      steps: steps,
      stepProps: stepProps,
      initialData: initialData,
      onComplete: onComplete,
      onCancel: onCancel,
      children: children,
      title: title,
      exitOnCtrlCD: exitOnCtrlCD
    } = f,
    T;
  if (d[0] !== initialData) T = initialData === void 0 ? {} : initialData, d[0] = initialData, d[1] = T;else T = d[1];
  let R = T,
    I = exitOnCtrlCD === void 0 ? !1 : exitOnCtrlCD,
    [currentStepIndex, E] = y(0),
    [wizardData, g] = y(R),
    [C, p] = y(!1),
    P;
  if (d[2] === w) P = [], d[2] = P;else P = d[2];
  let [z, _] = y(P),
    J,
    Kt;
  if (d[3] !== C || d[4] !== onComplete || d[5] !== wizardData) J = () => {
    if (C) _([]), onComplete(wizardData);
  }, Kt = [C, wizardData, onComplete], d[3] = C, d[4] = onComplete, d[5] = wizardData, d[6] = J, d[7] = Kt;else J = d[6], Kt = d[7];
  O(J, Kt);
  let Qt;
  if (d[8] !== currentStepIndex || d[9] !== z || d[10] !== steps.length) Qt = () => {
    if (currentStepIndex < steps.length - 1) {
      if (z.length > 0) _(ao => [...ao, currentStepIndex]);
      E(yn);
    } else p(!0);
  }, d[8] = currentStepIndex, d[9] = z, d[10] = steps.length, d[11] = Qt;else Qt = d[11];
  let goNext = Qt,
    Xt;
  if (d[12] !== currentStepIndex || d[13] !== z || d[14] !== onCancel) Xt = () => {
    if (z.length > 0) {
      let Yt = z.at(-1);
      if (Yt !== void 0) _(Pn), E(Yt);
    } else if (currentStepIndex > 0) E(vn);else if (onCancel) onCancel();
  }, d[12] = currentStepIndex, d[13] = z, d[14] = onCancel, d[15] = Xt;else Xt = d[15];
  let goBack = Xt,
    Zt;
  if (d[16] !== currentStepIndex || d[17] !== steps.length) Zt = dt => {
    if (dt >= 0 && dt < steps.length) _(so => [...so, currentStepIndex]), E(dt);
  }, d[16] = currentStepIndex, d[17] = steps.length, d[18] = Zt;else Zt = d[18];
  let goToStep = Zt,
    en;
  if (d[19] !== onCancel) en = () => {
    if (_([]), onCancel) onCancel();
  }, d[19] = onCancel, d[20] = en;else en = d[20];
  let tn = Ws(I ? void 0 : en),
    pendingExitHint = tn.pending ? `Press ${tn.keyName} again to ${I ? "exit" : "cancel"}` : null,
    nn;
  if (d[21] === w) nn = lo => {
    g(po => ({
      ...po,
      ...lo
    }));
  }, d[21] = nn;else nn = d[21];
  let updateWizardData = nn,
    on;
  if (d[22] !== currentStepIndex || d[23] !== goBack || d[24] !== goNext || d[25] !== goToStep || d[26] !== pendingExitHint || d[27] !== title || d[28] !== wizardData) on = {
    currentStepIndex: currentStepIndex,
    wizardData: wizardData,
    updateWizardData: updateWizardData,
    goNext: goNext,
    goBack: goBack,
    goToStep: goToStep,
    title: title,
    pendingExitHint: pendingExitHint
  }, d[22] = currentStepIndex, d[23] = goBack, d[24] = goNext, d[25] = goToStep, d[26] = pendingExitHint, d[27] = title, d[28] = wizardData, d[29] = on;else on = d[29];
  let value = on,
    we = steps[currentStepIndex];
  if (!we || C) {
    return null;
  }
  let children_2;
  if (d[30] !== we || d[31] !== children || d[32] !== stepProps) children_2 = children || e(we, {
    ...stepProps
  }), d[30] = we, d[31] = children, d[32] = stepProps, d[33] = children_2;else children_2 = d[33];
  let rn;
  if (d[34] !== value || d[35] !== children_2) rn = e(he.Provider, {
    value: value,
    children: children_2
  }), d[34] = value, d[35] = children_2, d[36] = rn;else rn = d[36];
  return rn;
}
function ym() {
  let f = ve(he);
  if (!f) throw Error("useWizard must be used within a WizardProvider");
  return f;
}
function Lf(f) {
  let R = S(15),
    {
      color: color,
      children: children_3,
      subtitle: subtitle,
      footerText: footerText
    } = f,
    color_2 = color === void 0 ? "suggestion" : color,
    {
      currentStepIndex: currentStepIndex_2,
      title: title_2,
      goBack: a,
      pendingExitHint: pendingExitHint_2
    } = ym(),
    title_3 = title_2 || "Wizard",
    I;
  if (R[0] !== children_3 || R[1] !== color_2 || R[2] !== a || R[3] !== subtitle || R[4] !== title_3) I = e(ke, {
    title: title_3,
    subtitle: subtitle,
    onCancel: a,
    color: color_2,
    hideInputGuide: !0,
    isCancelActive: !1,
    children: children_3
  }), R[0] = children_3, R[1] = color_2, R[2] = a, R[3] = subtitle, R[4] = title_3, R[5] = I;else I = R[5];
  let children_4;
  if (R[6] !== currentStepIndex_2 || R[7] !== footerText || R[8] !== pendingExitHint_2) children_4 = pendingExitHint_2 ?? footerText ?? r(Ce, {
    children: [e(Y, {
      chord: ["up", "down"],
      action: "navigate"
    }), e(Y, {
      chord: "enter",
      action: "select"
    }), e(gt, {
      action: "confirm:no",
      context: "Confirmation",
      fallback: "Esc",
      description: currentStepIndex_2 > 0 ? "go back" : "cancel"
    })]
  }), R[6] = currentStepIndex_2, R[7] = footerText, R[8] = pendingExitHint_2, R[9] = children_4;else children_4 = R[9];
  let E;
  if (R[10] !== children_4) E = e(s, {
    marginLeft: 2,
    marginTop: 1,
    children: e(n, {
      dimColor: !0,
      children: children_4
    })
  }), R[10] = children_4, R[11] = E;else E = R[11];
  let N;
  if (R[12] !== I || R[13] !== E) N = r(ne, {
    children: [I, E]
  }), R[12] = I, R[13] = E, R[14] = N;else N = R[14];
  return N;
}
var $j = ["sonnet", "opus", "haiku", "fable"];
function Fe() {
  return {
    sonnet: i.ANTHROPIC_DEFAULT_SONNET_MODEL,
    opus: i.ANTHROPIC_DEFAULT_OPUS_MODEL,
    haiku: i.ANTHROPIC_DEFAULT_HAIKU_MODEL,
    fable: i.ANTHROPIC_DEFAULT_FABLE_MODEL
  };
}
j();
function EGt({
  provider: provider,
  onPins: onPins
}) {
  let {
      goBack: u,
      goNext: goNext_2,
      wizardData: wizardData_2
    } = ym(),
    t = Z(() => provider.resolveTierDefaults(wizardData_2), []),
    m = Z(() => Fe(), []),
    [l, a] = y(() => Object.fromEntries($j.map(item => [item, m[item] ?? t[item].auto ?? t[item].fallback]))),
    [d, T] = y({
      sonnet: "pending",
      opus: "pending",
      haiku: "pending",
      fable: "pending"
    }),
    [R, I] = y("summary"),
    b = $j.map(item => e(ot, {
      candidate: l[item],
      probe: P => provider.probe(wizardData_2, P),
      onState: P => T(z => ({
        ...z,
        [item]: P
      }))
    }, item));
  if (R !== "summary") {
    let p = R.picking;
    return r(ne, {
      children: [b, e(Gt, {
        tier: p,
        provider: provider,
        wizardData: wizardData_2,
        fallback: t[p].fallback,
        current: l[p],
        existingPin: m[p],
        onPick: P => {
          a(J => ({
            ...J,
            [p]: P
          }));
          let z = $j.indexOf(p),
            picking = $j[z + 1];
          I(picking ? {
            picking: picking
          } : "summary");
        },
        onCancel: () => I("summary")
      }, p)]
    });
  }
  let N = $j.every(item => d[item] !== "pending") && $j.some(item => d[item] !== "pending" && d[item].ok),
    g = N && $j.some(item => {
      let P = d[item];
      return P !== "pending" && P.ok && Ie(l[item]);
    }),
    onChange = p => {
      if (p === "manual") {
        I({
          picking: "sonnet"
        });
        return;
      }
      if (p === "pin" || p === "pin1m") {
        let P = z => {
          let _ = d[z];
          if (_ === "pending" || !_.ok) return;
          let J = l[z];
          return p === "pin1m" && Ie(J) ? Vt(J) : J;
        };
        onPins({
          pinSonnet: P("sonnet"),
          pinOpus: P("opus"),
          pinHaiku: P("haiku"),
          pinFable: P("fable")
        });
      } else onPins({
        pinSonnet: void 0,
        pinOpus: void 0,
        pinHaiku: void 0,
        pinFable: void 0
      });
      goNext_2();
    };
  return r(ne, {
    children: [b, e(Lf, {
      subtitle: "Pin model versions",
      children: r(s, {
        flexDirection: "column",
        gap: 1,
        children: [e(n, {
          children: provider.intro
        }), r(s, {
          flexDirection: "column",
          children: [e(n, {
            dimColor: !0,
            children: "Each candidate is tested with a one-token request:"
          }), $j.map(item => e(it, {
            label: H0[item],
            modelId: l[item],
            state: d[item],
            reasonLabel: provider.reasonLabel
          }, item))]
        }), e(Ze, {
          options: [...(N ? [{
            label: "Pin the working models",
            value: "pin"
          }] : []), ...(g ? [{
            label: "Pin the working models with 1M context",
            value: "pin1m"
          }] : []), {
            label: "Choose different models\u2026",
            value: "manual"
          }, {
            label: "Skip \u2014 use Claude Code defaults (auto-updates)",
            value: "skip"
          }],
          onChange: onChange,
          onCancel: u
        })]
      })
    })]
  });
}
function Ie(f) {
  return IRe(f) && !uC(f, {
    byItsOwnName: !0
  });
}
function Vt(f) {
  return /\[1m\]$/i.test(f) ? f : `${f}[1m]`;
}
function ot(f) {
  let x = S(6),
    {
      candidate: candidate,
      probe: probe,
      onState: onState
    } = f,
    t;
  if (x[0] !== candidate || x[1] !== onState || x[2] !== probe) t = () => {
    let m = !1;
    return onState("pending"), probe(candidate).then(l => {
      if (!m) onState(l);
    }), () => {
      m = !0;
    };
  }, x[0] = candidate, x[1] = onState, x[2] = probe, x[3] = t;else t = x[3];
  let a;
  if (x[4] !== candidate) a = [candidate], x[4] = candidate, x[5] = a;else a = x[5];
  return O(t, a), null;
}
function Gt({
  tier: tier,
  provider: provider_2,
  wizardData: wizardData_3,
  fallback: fallback,
  current: current,
  existingPin: existingPin,
  onPick: m,
  onCancel: onCancel_2
}) {
  let a = Z(() => {
      let g = provider_2.listTierCandidates(tier, wizardData_3);
      for (let C of [fallback, current, existingPin]) if (C && !g.includes(C)) g.push(C);
      return g;
    }, [tier, fallback, current, existingPin]),
    [d, T] = y(() => Object.fromEntries(a.map(item => [item, "pending"])));
  O(() => {
    let g = !1;
    for (let C of a) provider_2.probe(wizardData_3, C).then(p => {
      if (!g) T(P => ({
        ...P,
        [C]: p
      }));
    });
    return () => {
      g = !0;
    };
  }, []);
  let R = a.every(item => d[item] !== "pending"),
    I = g => {
      let C = d[g];
      return C !== void 0 && C !== "pending" && C.ok;
    },
    b = Z(() => {
      if (!R) return a;
      return [...a].sort((itemA, itemB) => (I(itemA) ? 0 : 1) - (I(itemB) ? 0 : 1));
    }, [a, d, R]),
    options = b.map(g => ({
      value: g,
      label: e(rt, {
        id: g,
        state: d[g] ?? "pending",
        reasonLabel: provider_2.reasonLabel,
        suffix: g === existingPin ? "(currently pinned)" : g === fallback ? "(built-in default)" : g === current ? "(selected)" : void 0
      })
    })),
    N = () => {
      for (let g of provider_2.preferOnSettle ?? []) {
        let C = g === "current" ? current : fallback;
        if (I(C)) return C;
      }
      return b.find(I);
    };
  return e(Lf, {
    subtitle: `Pin ${H0[tier]} model`,
    children: r(s, {
      flexDirection: "column",
      gap: 1,
      children: [e(n, {
        dimColor: !0,
        children: provider_2.pickerSubtitle(tier, wizardData_3)
      }), e(Ze, {
        options: options,
        defaultValue: R ? N() : current,
        onChange: m,
        onCancel: onCancel_2
      }, R ? "settled" : "pending")]
    })
  });
}
function rt(f) {
  let t = S(19),
    {
      id: id,
      state: state,
      suffix: suffix,
      reasonLabel: reasonLabel
    } = f;
  if (state === "pending") {
    let m;
    if (t[0] === w) m = e(Tt, {
      status: "pending",
      withSpace: !0
    }), t[0] = m;else m = t[0];
    let l;
    if (t[1] !== suffix) l = suffix && r(n, {
      dimColor: !0,
      children: [" ", suffix]
    }), t[1] = suffix, t[2] = l;else l = t[2];
    let a;
    if (t[3] !== id || t[4] !== l) a = r(n, {
      children: [m, id, l]
    }), t[3] = id, t[4] = l, t[5] = a;else a = t[5];
    return a;
  }
  if (state.ok) {
    let m;
    if (t[6] === w) m = e(Tt, {
      status: "success",
      withSpace: !0
    }), t[6] = m;else m = t[6];
    let l;
    if (t[7] !== suffix) l = suffix && r(n, {
      dimColor: !0,
      children: [" ", suffix]
    }), t[7] = suffix, t[8] = l;else l = t[8];
    let a;
    if (t[9] !== id || t[10] !== l) a = r(n, {
      children: [m, id, l]
    }), t[9] = id, t[10] = l, t[11] = a;else a = t[11];
    return a;
  }
  let m;
  if (t[12] === w) m = e(Tt, {
    status: "error",
    withSpace: !0
  }), t[12] = m;else m = t[12];
  const l = suffix && ` ${suffix}`,
    a = reasonLabel[state.reason];
  let d;
  if (t[13] !== a) d = r(n, {
    color: "error",
    children: ["(", a, ")"]
  }), t[13] = a, t[14] = d;else d = t[14];
  let T;
  if (t[15] !== id || t[16] !== l || t[17] !== d) T = r(n, {
    dimColor: !0,
    children: [m, id, l, " ", d]
  }), t[15] = id, t[16] = l, t[17] = d, t[18] = T;else T = t[18];
  return T;
}
function it(f) {
  let t = S(26),
    {
      label: label,
      modelId: u,
      state: state_2,
      reasonLabel: reasonLabel_2
    } = f;
  if (state_2 === "pending") {
    let m, l;
    if (t[0] === w) m = e(n, {
      children: "  "
    }), l = e(Oa, {}), t[0] = m, t[1] = l;else m = t[0], l = t[1];
    let a;
    if (t[2] !== label) a = label.padEnd(7), t[2] = label, t[3] = a;else a = t[3];
    let d;
    if (t[4] !== u || t[5] !== a) d = r(s, {
      children: [m, l, r(n, {
        children: [" ", a, "\u2192 ", u]
      })]
    }), t[4] = u, t[5] = a, t[6] = d;else d = t[6];
    return d;
  }
  if (state_2.ok) {
    let m;
    if (t[7] === w) m = e(Tt, {
      status: "success",
      withSpace: !0
    }), t[7] = m;else m = t[7];
    let l;
    if (t[8] !== label) l = label.padEnd(7), t[8] = label, t[9] = l;else l = t[9];
    let a;
    if (t[10] !== u) a = e(n, {
      color: "success",
      children: u
    }), t[10] = u, t[11] = a;else a = t[11];
    let d;
    if (t[12] !== l || t[13] !== a) d = r(n, {
      children: ["  ", m, l, "\u2192 ", a]
    }), t[12] = l, t[13] = a, t[14] = d;else d = t[14];
    return d;
  }
  let m;
  if (t[15] === w) m = e(Tt, {
    status: "error",
    withSpace: !0
  }), t[15] = m;else m = t[15];
  let l;
  if (t[16] !== label) l = label.padEnd(7), t[16] = label, t[17] = l;else l = t[17];
  let a;
  if (t[18] !== u) a = e(n, {
    dimColor: !0,
    children: u
  }), t[18] = u, t[19] = a;else a = t[19];
  const d = reasonLabel_2[state_2.reason];
  let T;
  if (t[20] !== d) T = r(n, {
    color: "error",
    children: ["(", d, ")"]
  }), t[20] = d, t[21] = T;else T = t[21];
  let R;
  if (t[22] !== l || t[23] !== a || t[24] !== T) R = r(n, {
    children: ["  ", m, l, "\u2192 ", a, " ", T]
  }), t[22] = l, t[23] = a, t[24] = T, t[25] = R;else R = t[25];
  return R;
}
async function B3n(f, o, u) {
  let c;
  try {
    c = await f();
  } catch (error) {
    return {
      ok: !1,
      reason: u(error)
    };
  }
  try {
    return await c.messages.create({
      model: $t(o),
      max_tokens: 1,
      messages: [{
        role: "user",
        content: "."
      }]
    }), {
      ok: !0
    };
  } catch (error) {
    let t = error?.status;
    if (t === 401) return {
      ok: !1,
      reason: "auth"
    };
    if (t === 403) return {
      ok: !1,
      reason: "permission"
    };
    if (t === 400 || t === 404) return {
      ok: !1,
      reason: "model"
    };
    if (t === 429) return {
      ok: !0
    };
    if (t === void 0) return {
      ok: !1,
      reason: "network"
    };
    return {
      ok: !1,
      reason: "other"
    };
  }
}
export { Bot, ym, Lf, $j, EGt, B3n };