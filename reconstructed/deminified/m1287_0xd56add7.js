// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { s, n } from "B:/~BUN/root/chunk-1gn8pz4b.js";
import { a } from "B:/~BUN/root/chunk-nkmmqnq7.js";
import { w } from "B:/~BUN/root/chunk-x9hkq9y1.js";
import { U6 } from "B:/~BUN/root/chunk-gf53qpk6.js";
import { Wr } from "B:/~BUN/root/chunk-5r1x61tc.js";
import { F } from "B:/~BUN/root/chunk-acd2tycn.js";
import { ye } from "B:/~BUN/root/chunk-41008fhm.js";
import { ge } from "B:/~BUN/root/chunk-51erc9xb.js";
import { yT } from "B:/~BUN/root/chunk-acsg9bv8.js";
import { Fe } from "B:/~BUN/root/chunk-bt71g93n.js";
import { et } from "B:/~BUN/root/chunk-zg8y1401.js";
import { Rs } from "B:/~BUN/root/chunk-8sb89kt9.js";
import { Xe } from "B:/~BUN/root/chunk-parcaazx.js";
import { V, e, r } from "B:/~BUN/root/chunk-qkvevvte.js";
import { Vt, se, Pe, R, X, g, N } from "B:/~BUN/root/chunk-rnj6pcz5.js";
import { S } from "B:/~BUN/root/chunk-yv67t8hr.js";
N();
function Pn(Co) {
  return Co + 1;
}
function Sn(ko) {
  return ko.slice(0, -1);
}
function Dn(ho) {
  return ho - 1;
}
var Se = Vt(null);
function xPe(k) {
  let h = w(40),
    {
      steps: steps,
      stepProps: stepProps,
      initialData: initialData,
      onComplete: onComplete,
      onCancel: onCancel,
      children: children,
      title: title,
      showStepCounter: showStepCounter,
      exitOnCtrlCD: exitOnCtrlCD
    } = k,
    z;
  if (h[0] !== initialData) z = initialData === void 0 ? {} : initialData, h[0] = initialData, h[1] = z;else z = h[1];
  let O = z,
    showStepCounter_2 = showStepCounter === void 0 ? !0 : showStepCounter,
    de = exitOnCtrlCD === void 0 ? !1 : exitOnCtrlCD,
    [currentStepIndex, p] = g(0),
    [wizardData, setWizardData] = g(O),
    [b, U] = g(!1),
    K;
  if (h[2] === S) K = [], h[2] = K;else K = h[2];
  let [H, ke] = g(K),
    Zt,
    en;
  if (h[3] !== b || h[4] !== onComplete || h[5] !== wizardData) Zt = () => {
    if (b) ke([]), onComplete(wizardData);
  }, en = [b, wizardData, onComplete], h[3] = b, h[4] = onComplete, h[5] = wizardData, h[6] = Zt, h[7] = en;else Zt = h[6], en = h[7];
  R(Zt, en);
  let tn;
  if (h[8] !== currentStepIndex || h[9] !== H || h[10] !== steps.length) tn = () => {
    if (currentStepIndex < steps.length - 1) {
      if (H.length > 0) ke(fo => [...fo, currentStepIndex]);
      p(Pn);
    } else U(!0);
  }, h[8] = currentStepIndex, h[9] = H, h[10] = steps.length, h[11] = tn;else tn = h[11];
  let goNext = tn,
    nn;
  if (h[12] !== currentStepIndex || h[13] !== H || h[14] !== onCancel) nn = () => {
    if (H.length > 0) {
      let on = H.at(-1);
      if (on !== void 0) ke(Sn), p(on);
    } else if (currentStepIndex > 0) p(Dn);else if (onCancel) onCancel();
  }, h[12] = currentStepIndex, h[13] = H, h[14] = onCancel, h[15] = nn;else nn = h[15];
  let goBack = nn,
    rn;
  if (h[16] !== currentStepIndex || h[17] !== steps.length) rn = ut => {
    if (ut >= 0 && ut < steps.length) ke(mo => [...mo, currentStepIndex]), p(ut);
  }, h[16] = currentStepIndex, h[17] = steps.length, h[18] = rn;else rn = h[18];
  let goToStep = rn,
    an;
  if (h[19] !== onCancel) an = () => {
    if (ke([]), onCancel) onCancel();
  }, h[19] = onCancel, h[20] = an;else an = h[20];
  let cancel = an,
    sn = Wr(de ? void 0 : cancel),
    pendingExitHint = sn.pending ? `Press ${sn.keyName} again to ${de ? "exit" : "cancel"}` : null,
    dn;
  if (h[21] === S) dn = go => {
    setWizardData(xo => ({
      ...xo,
      ...go
    }));
  }, h[21] = dn;else dn = h[21];
  let updateWizardData = dn,
    ln;
  if (h[22] !== cancel || h[23] !== currentStepIndex || h[24] !== goBack || h[25] !== goNext || h[26] !== goToStep || h[27] !== pendingExitHint || h[28] !== showStepCounter_2 || h[29] !== steps.length || h[30] !== title || h[31] !== wizardData) ln = {
    currentStepIndex: currentStepIndex,
    totalSteps: steps.length,
    wizardData: wizardData,
    setWizardData: setWizardData,
    updateWizardData: updateWizardData,
    goNext: goNext,
    goBack: goBack,
    goToStep: goToStep,
    cancel: cancel,
    title: title,
    showStepCounter: showStepCounter_2,
    pendingExitHint: pendingExitHint
  }, h[22] = cancel, h[23] = currentStepIndex, h[24] = goBack, h[25] = goNext, h[26] = goToStep, h[27] = pendingExitHint, h[28] = showStepCounter_2, h[29] = steps.length, h[30] = title, h[31] = wizardData, h[32] = ln;else ln = h[32];
  let value = ln,
    Ie = steps[currentStepIndex];
  if (!Ie || b) {
    return null;
  }
  let children_2;
  if (h[33] !== Ie || h[34] !== children || h[35] !== stepProps) children_2 = children || e(Ie, {
    ...stepProps
  }), h[33] = Ie, h[34] = children, h[35] = stepProps, h[36] = children_2;else children_2 = h[36];
  let pn;
  if (h[37] !== value || h[38] !== children_2) pn = e(Se.Provider, {
    value: value,
    children: children_2
  }), h[37] = value, h[38] = children_2, h[39] = pn;else pn = h[39];
  return pn;
}
N();
function gd() {
  let k = Pe(Se);
  if (!k) throw Error("useWizard must be used within a WizardProvider");
  return k;
}
function Jl(k) {
  let p = w(15),
    {
      title: title_2,
      color: color,
      children: children_3,
      subtitle: subtitle,
      footerText: footerText
    } = k,
    color_2 = color === void 0 ? "suggestion" : color,
    {
      currentStepIndex: currentStepIndex_2,
      totalSteps: totalSteps,
      title: title_3,
      showStepCounter: showStepCounter_3,
      goBack: z,
      pendingExitHint: pendingExitHint_2
    } = gd(),
    j = title_2 || title_3 || "Wizard",
    de = showStepCounter_3 !== !1 ? ` (${currentStepIndex_2 + 1}/${totalSteps})` : "";
  const title_4 = `${j}${de}`;
  let f;
  if (p[0] !== children_3 || p[1] !== color_2 || p[2] !== z || p[3] !== subtitle || p[4] !== title_4) f = e(ge, {
    title: title_4,
    subtitle: subtitle,
    onCancel: z,
    color: color_2,
    hideInputGuide: !0,
    isCancelActive: !1,
    children: children_3
  }), p[0] = children_3, p[1] = color_2, p[2] = z, p[3] = subtitle, p[4] = title_4, p[5] = f;else f = p[5];
  let children_4;
  if (p[6] !== currentStepIndex_2 || p[7] !== footerText || p[8] !== pendingExitHint_2) children_4 = pendingExitHint_2 ?? footerText ?? r(ye, {
    children: [e(F, {
      chord: ["up", "down"],
      action: "navigate"
    }), e(F, {
      chord: "enter",
      action: "select"
    }), e(Xe, {
      action: "confirm:no",
      context: "Confirmation",
      fallback: "Esc",
      description: currentStepIndex_2 > 0 ? "go back" : "cancel"
    })]
  }), p[6] = currentStepIndex_2, p[7] = footerText, p[8] = pendingExitHint_2, p[9] = children_4;else children_4 = p[9];
  let b;
  if (p[10] !== children_4) b = e(s, {
    marginLeft: 2,
    marginTop: 1,
    children: e(n, {
      dimColor: !0,
      children: children_4
    })
  }), p[10] = children_4, p[11] = b;else b = p[11];
  let U;
  if (p[12] !== f || p[13] !== b) U = r(V, {
    children: [f, b]
  }), p[12] = f, p[13] = b, p[14] = U;else U = p[14];
  return U;
}
var tO = ["sonnet", "opus", "haiku", "fable"];
function We() {
  return {
    sonnet: a.ANTHROPIC_DEFAULT_SONNET_MODEL,
    opus: a.ANTHROPIC_DEFAULT_OPUS_MODEL,
    haiku: a.ANTHROPIC_DEFAULT_HAIKU_MODEL,
    fable: a.ANTHROPIC_DEFAULT_FABLE_MODEL
  };
}
N();
function oJe({
  provider: provider,
  onPins: onPins
}) {
  let {
      goBack: x,
      goNext: goNext_2,
      wizardData: wizardData_2
    } = gd(),
    i = X(() => provider.resolveTierDefaults(wizardData_2), []),
    u = X(() => We(), []),
    [d, l] = g(() => Object.fromEntries(tO.map(item => [item, u[item] ?? i[item].auto ?? i[item].fallback]))),
    [m, h] = g({
      sonnet: "pending",
      opus: "pending",
      haiku: "pending",
      fable: "pending"
    }),
    [z, O] = g("summary"),
    j = tO.map(item => e(st, {
      candidate: d[item],
      probe: b => provider.probe(wizardData_2, b),
      onState: b => h(U => ({
        ...U,
        [item]: b
      }))
    }, item));
  if (z !== "summary") {
    let o = z.picking;
    return r(V, {
      children: [j, e(Yt, {
        tier: o,
        provider: provider,
        wizardData: wizardData_2,
        fallback: i[o].fallback,
        current: d[o],
        existingPin: u[o],
        onPick: b => {
          l(H => ({
            ...H,
            [o]: b
          }));
          let U = tO.indexOf(o),
            picking = tO[U + 1];
          O(picking ? {
            picking: picking
          } : "summary");
        },
        onCancel: () => O("summary")
      }, o)]
    });
  }
  let y = tO.every(item => m[item] !== "pending") && tO.some(item => m[item] !== "pending" && m[item].ok),
    p = y && tO.some(item => {
      let b = m[item];
      return b !== "pending" && b.ok && U6(d[item]);
    }),
    onChange = o => {
      if (o === "manual") {
        O({
          picking: "sonnet"
        });
        return;
      }
      if (o === "pin" || o === "pin1m") {
        let b = U => {
          let K = m[U];
          if (K === "pending" || !K.ok) return;
          let H = d[U];
          return o === "pin1m" && U6(H) ? Jt(H) : H;
        };
        onPins({
          pinSonnet: b("sonnet"),
          pinOpus: b("opus"),
          pinHaiku: b("haiku"),
          pinFable: b("fable")
        });
      } else onPins({
        pinSonnet: void 0,
        pinOpus: void 0,
        pinHaiku: void 0,
        pinFable: void 0
      });
      goNext_2();
    };
  return r(V, {
    children: [j, e(Jl, {
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
          }), tO.map(item => e(lt, {
            label: yT[item],
            modelId: d[item],
            state: m[item],
            reasonLabel: provider.reasonLabel
          }, item))]
        }), e(Fe, {
          options: [...(y ? [{
            label: "Pin the working models",
            value: "pin"
          }] : []), ...(p ? [{
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
          onCancel: x
        })]
      })
    })]
  });
}
function Jt(k) {
  return /\[1m\]$/i.test(k) ? k : `${k}[1m]`;
}
function st(k) {
  let v = w(6),
    {
      candidate: candidate,
      probe: probe,
      onState: onState
    } = k,
    i;
  if (v[0] !== candidate || v[1] !== onState || v[2] !== probe) i = () => {
    let u = !1;
    return onState("pending"), probe(candidate).then(d => {
      if (!u) onState(d);
    }), () => {
      u = !0;
    };
  }, v[0] = candidate, v[1] = onState, v[2] = probe, v[3] = i;else i = v[3];
  let l;
  if (v[4] !== candidate) l = [candidate], v[4] = candidate, v[5] = l;else l = v[5];
  return R(i, l), null;
}
function Yt({
  tier: tier,
  provider: provider_2,
  wizardData: wizardData_3,
  fallback: fallback,
  current: current,
  existingPin: existingPin,
  onPick: u,
  onCancel: onCancel_2
}) {
  let l = X(() => {
      let p = provider_2.listTierCandidates(tier, wizardData_3);
      for (let f of [fallback, current, existingPin]) if (f && !p.includes(f)) p.push(f);
      return p;
    }, [tier, fallback, current, existingPin]),
    [m, h] = g(() => Object.fromEntries(l.map(item => [item, "pending"])));
  R(() => {
    let p = !1;
    for (let f of l) provider_2.probe(wizardData_3, f).then(o => {
      if (!p) h(b => ({
        ...b,
        [f]: o
      }));
    });
    return () => {
      p = !0;
    };
  }, []);
  let z = l.every(item => m[item] !== "pending"),
    O = p => {
      let f = m[p];
      return f !== void 0 && f !== "pending" && f.ok;
    },
    j = X(() => {
      if (!z) return l;
      return [...l].sort((itemA, itemB) => (O(itemA) ? 0 : 1) - (O(itemB) ? 0 : 1));
    }, [l, m, z]),
    options = j.map(p => ({
      value: p,
      label: e(dt, {
        id: p,
        state: m[p] ?? "pending",
        reasonLabel: provider_2.reasonLabel,
        suffix: p === existingPin ? "(currently pinned)" : p === fallback ? "(built-in default)" : p === current ? "(selected)" : void 0
      })
    })),
    y = () => {
      for (let p of provider_2.preferOnSettle ?? []) {
        let f = p === "current" ? current : fallback;
        if (O(f)) return f;
      }
      return j.find(O);
    };
  return e(Jl, {
    subtitle: `Pin ${yT[tier]} model`,
    children: r(s, {
      flexDirection: "column",
      gap: 1,
      children: [e(n, {
        dimColor: !0,
        children: provider_2.pickerSubtitle(tier, wizardData_3)
      }), e(Fe, {
        options: options,
        defaultValue: z ? y() : current,
        onChange: u,
        onCancel: onCancel_2
      }, z ? "settled" : "pending")]
    })
  });
}
function dt(k) {
  let i = w(19),
    {
      id: id,
      state: state,
      suffix: suffix,
      reasonLabel: reasonLabel
    } = k;
  if (state === "pending") {
    let u;
    if (i[0] === S) u = e(et, {
      status: "pending",
      withSpace: !0
    }), i[0] = u;else u = i[0];
    let d;
    if (i[1] !== suffix) d = suffix && r(n, {
      dimColor: !0,
      children: [" ", suffix]
    }), i[1] = suffix, i[2] = d;else d = i[2];
    let l;
    if (i[3] !== id || i[4] !== d) l = r(n, {
      children: [u, id, d]
    }), i[3] = id, i[4] = d, i[5] = l;else l = i[5];
    return l;
  }
  if (state.ok) {
    let u;
    if (i[6] === S) u = e(et, {
      status: "success",
      withSpace: !0
    }), i[6] = u;else u = i[6];
    let d;
    if (i[7] !== suffix) d = suffix && r(n, {
      dimColor: !0,
      children: [" ", suffix]
    }), i[7] = suffix, i[8] = d;else d = i[8];
    let l;
    if (i[9] !== id || i[10] !== d) l = r(n, {
      children: [u, id, d]
    }), i[9] = id, i[10] = d, i[11] = l;else l = i[11];
    return l;
  }
  let u;
  if (i[12] === S) u = e(et, {
    status: "error",
    withSpace: !0
  }), i[12] = u;else u = i[12];
  const d = suffix && ` ${suffix}`,
    l = reasonLabel[state.reason];
  let m;
  if (i[13] !== l) m = r(n, {
    color: "error",
    children: ["(", l, ")"]
  }), i[13] = l, i[14] = m;else m = i[14];
  let h;
  if (i[15] !== id || i[16] !== d || i[17] !== m) h = r(n, {
    dimColor: !0,
    children: [u, id, d, " ", m]
  }), i[15] = id, i[16] = d, i[17] = m, i[18] = h;else h = i[18];
  return h;
}
function lt(k) {
  let i = w(26),
    {
      label: label,
      modelId: x,
      state: state_2,
      reasonLabel: reasonLabel_2
    } = k;
  if (state_2 === "pending") {
    let u, d;
    if (i[0] === S) u = e(n, {
      children: "  "
    }), d = e(Rs, {}), i[0] = u, i[1] = d;else u = i[0], d = i[1];
    let l;
    if (i[2] !== label) l = label.padEnd(7), i[2] = label, i[3] = l;else l = i[3];
    let m;
    if (i[4] !== x || i[5] !== l) m = r(s, {
      children: [u, d, r(n, {
        children: [" ", l, "\u2192 ", x]
      })]
    }), i[4] = x, i[5] = l, i[6] = m;else m = i[6];
    return m;
  }
  if (state_2.ok) {
    let u;
    if (i[7] === S) u = e(et, {
      status: "success",
      withSpace: !0
    }), i[7] = u;else u = i[7];
    let d;
    if (i[8] !== label) d = label.padEnd(7), i[8] = label, i[9] = d;else d = i[9];
    let l;
    if (i[10] !== x) l = e(n, {
      color: "success",
      children: x
    }), i[10] = x, i[11] = l;else l = i[11];
    let m;
    if (i[12] !== d || i[13] !== l) m = r(n, {
      children: ["  ", u, d, "\u2192 ", l]
    }), i[12] = d, i[13] = l, i[14] = m;else m = i[14];
    return m;
  }
  let u;
  if (i[15] === S) u = e(et, {
    status: "error",
    withSpace: !0
  }), i[15] = u;else u = i[15];
  let d;
  if (i[16] !== label) d = label.padEnd(7), i[16] = label, i[17] = d;else d = i[17];
  let l;
  if (i[18] !== x) l = e(n, {
    dimColor: !0,
    children: x
  }), i[18] = x, i[19] = l;else l = i[19];
  const m = reasonLabel_2[state_2.reason];
  let h;
  if (i[20] !== m) h = r(n, {
    color: "error",
    children: ["(", m, ")"]
  }), i[20] = m, i[21] = h;else h = i[21];
  let z;
  if (i[22] !== d || i[23] !== l || i[24] !== h) z = r(n, {
    children: ["  ", u, d, "\u2192 ", l, " ", h]
  }), i[22] = d, i[23] = l, i[24] = h, i[25] = z;else z = i[25];
  return z;
}
export { xPe, gd, Jl, tO, oJe };