// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { s, n } from "B:/~BUN/root/chunk-damrp3r8.js";
import { a } from "B:/~BUN/root/chunk-yt0knyw7.js";
import { w } from "B:/~BUN/root/chunk-rysqv8v1.js";
import { Ete } from "B:/~BUN/root/chunk-hb6x4e3n.js";
import { qo } from "B:/~BUN/root/chunk-327wfkv3.js";
import { q } from "B:/~BUN/root/chunk-bf7csy4f.js";
import { Se } from "B:/~BUN/root/chunk-7dpyfa5r.js";
import { be } from "B:/~BUN/root/chunk-nyga36vf.js";
import { MP } from "B:/~BUN/root/chunk-v1edtzvj.js";
import { Xe } from "B:/~BUN/root/chunk-nbjke4gr.js";
import { ft } from "B:/~BUN/root/chunk-jh7dpafw.js";
import { Ii } from "B:/~BUN/root/chunk-3cgpbmp2.js";
import { gt } from "B:/~BUN/root/chunk-vs438w4e.js";
import { Q, e, r } from "B:/~BUN/root/chunk-x2hkxw5q.js";
import { qt, ae, Ee, P, Z, y, B } from "B:/~BUN/root/chunk-5hr2ysa5.js";
import { Pt } from "B:/~BUN/root/chunk-j0ghr71r.js";
import { S } from "B:/~BUN/root/chunk-ef0msk7r.js";
B();
B();
function Sn(Co) {
  return Co + 1;
}
function Dn(ho) {
  return ho.slice(0, -1);
}
function Tn(yo) {
  return yo - 1;
}
var ve = qt(null);
function fVe(x) {
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
    } = x,
    I;
  if (h[0] !== initialData) I = initialData === void 0 ? {} : initialData, h[0] = initialData, h[1] = I;else I = h[1];
  let F = I,
    showStepCounter_2 = showStepCounter === void 0 ? !0 : showStepCounter,
    le = exitOnCtrlCD === void 0 ? !1 : exitOnCtrlCD,
    [currentStepIndex, c] = y(0),
    [wizardData, setWizardData] = y(F),
    [k, V] = y(!1),
    J;
  if (h[2] === S) J = [], h[2] = J;else J = h[2];
  let [M, Ce] = y(J),
    en,
    tn;
  if (h[3] !== k || h[4] !== onComplete || h[5] !== wizardData) en = () => {
    if (k) Ce([]), onComplete(wizardData);
  }, tn = [k, wizardData, onComplete], h[3] = k, h[4] = onComplete, h[5] = wizardData, h[6] = en, h[7] = tn;else en = h[6], tn = h[7];
  P(en, tn);
  let nn;
  if (h[8] !== currentStepIndex || h[9] !== M || h[10] !== steps.length) nn = () => {
    if (currentStepIndex < steps.length - 1) {
      if (M.length > 0) Ce(mo => [...mo, currentStepIndex]);
      c(Sn);
    } else V(!0);
  }, h[8] = currentStepIndex, h[9] = M, h[10] = steps.length, h[11] = nn;else nn = h[11];
  let goNext = nn,
    on;
  if (h[12] !== currentStepIndex || h[13] !== M || h[14] !== onCancel) on = () => {
    if (M.length > 0) {
      let rn = M.at(-1);
      if (rn !== void 0) Ce(Dn), c(rn);
    } else if (currentStepIndex > 0) c(Tn);else if (onCancel) onCancel();
  }, h[12] = currentStepIndex, h[13] = M, h[14] = onCancel, h[15] = on;else on = h[15];
  let goBack = on,
    an;
  if (h[16] !== currentStepIndex || h[17] !== steps.length) an = pt => {
    if (pt >= 0 && pt < steps.length) Ce(go => [...go, currentStepIndex]), c(pt);
  }, h[16] = currentStepIndex, h[17] = steps.length, h[18] = an;else an = h[18];
  let goToStep = an,
    sn;
  if (h[19] !== onCancel) sn = () => {
    if (Ce([]), onCancel) onCancel();
  }, h[19] = onCancel, h[20] = sn;else sn = h[20];
  let cancel = sn,
    ln = qo(le ? void 0 : cancel),
    pendingExitHint = ln.pending ? `Press ${ln.keyName} again to ${le ? "exit" : "cancel"}` : null,
    dn;
  if (h[21] === S) dn = xo => {
    setWizardData(bo => ({
      ...bo,
      ...xo
    }));
  }, h[21] = dn;else dn = h[21];
  let updateWizardData = dn,
    pn;
  if (h[22] !== cancel || h[23] !== currentStepIndex || h[24] !== goBack || h[25] !== goNext || h[26] !== goToStep || h[27] !== pendingExitHint || h[28] !== showStepCounter_2 || h[29] !== steps.length || h[30] !== title || h[31] !== wizardData) pn = {
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
  }, h[22] = cancel, h[23] = currentStepIndex, h[24] = goBack, h[25] = goNext, h[26] = goToStep, h[27] = pendingExitHint, h[28] = showStepCounter_2, h[29] = steps.length, h[30] = title, h[31] = wizardData, h[32] = pn;else pn = h[32];
  let value = pn,
    Ie = steps[currentStepIndex];
  if (!Ie || k) {
    return null;
  }
  let children_2;
  if (h[33] !== Ie || h[34] !== children || h[35] !== stepProps) children_2 = children || e(Ie, {
    ...stepProps
  }), h[33] = Ie, h[34] = children, h[35] = stepProps, h[36] = children_2;else children_2 = h[36];
  let cn;
  if (h[37] !== value || h[38] !== children_2) cn = e(ve.Provider, {
    value: value,
    children: children_2
  }), h[37] = value, h[38] = children_2, h[39] = cn;else cn = h[39];
  return cn;
}
function dp() {
  let x = Ee(ve);
  if (!x) throw Error("useWizard must be used within a WizardProvider");
  return x;
}
function Ac(x) {
  let c = w(15),
    {
      title: title_2,
      color: color,
      children: children_3,
      subtitle: subtitle,
      footerText: footerText
    } = x,
    color_2 = color === void 0 ? "suggestion" : color,
    {
      currentStepIndex: currentStepIndex_2,
      totalSteps: totalSteps,
      title: title_3,
      showStepCounter: showStepCounter_3,
      goBack: I,
      pendingExitHint: pendingExitHint_2
    } = dp(),
    A = title_2 || title_3 || "Wizard",
    le = showStepCounter_3 !== !1 ? ` (${currentStepIndex_2 + 1}/${totalSteps})` : "";
  const title_4 = `${A}${le}`;
  let f;
  if (c[0] !== children_3 || c[1] !== color_2 || c[2] !== I || c[3] !== subtitle || c[4] !== title_4) f = e(be, {
    title: title_4,
    subtitle: subtitle,
    onCancel: I,
    color: color_2,
    hideInputGuide: !0,
    isCancelActive: !1,
    children: children_3
  }), c[0] = children_3, c[1] = color_2, c[2] = I, c[3] = subtitle, c[4] = title_4, c[5] = f;else f = c[5];
  let children_4;
  if (c[6] !== currentStepIndex_2 || c[7] !== footerText || c[8] !== pendingExitHint_2) children_4 = pendingExitHint_2 ?? footerText ?? r(Se, {
    children: [e(q, {
      chord: ["up", "down"],
      action: "navigate"
    }), e(q, {
      chord: "enter",
      action: "select"
    }), e(gt, {
      action: "confirm:no",
      context: "Confirmation",
      fallback: "Esc",
      description: currentStepIndex_2 > 0 ? "go back" : "cancel"
    })]
  }), c[6] = currentStepIndex_2, c[7] = footerText, c[8] = pendingExitHint_2, c[9] = children_4;else children_4 = c[9];
  let k;
  if (c[10] !== children_4) k = e(s, {
    marginLeft: 2,
    marginTop: 1,
    children: e(n, {
      dimColor: !0,
      children: children_4
    })
  }), c[10] = children_4, c[11] = k;else k = c[11];
  let V;
  if (c[12] !== f || c[13] !== k) V = r(Q, {
    children: [f, k]
  }), c[12] = f, c[13] = k, c[14] = V;else V = c[14];
  return V;
}
var PF = ["sonnet", "opus", "haiku", "fable"];
function Oe() {
  return {
    sonnet: a.ANTHROPIC_DEFAULT_SONNET_MODEL,
    opus: a.ANTHROPIC_DEFAULT_OPUS_MODEL,
    haiku: a.ANTHROPIC_DEFAULT_HAIKU_MODEL,
    fable: a.ANTHROPIC_DEFAULT_FABLE_MODEL
  };
}
B();
function svt({
  provider: provider,
  onPins: onPins
}) {
  let {
      goBack: m,
      goNext: goNext_2,
      wizardData: wizardData_2
    } = dp(),
    t = Z(() => provider.resolveTierDefaults(wizardData_2), []),
    u = Z(() => Oe(), []),
    [l, d] = y(() => Object.fromEntries(PF.map(item => [item, u[item] ?? t[item].auto ?? t[item].fallback]))),
    [g, h] = y({
      sonnet: "pending",
      opus: "pending",
      haiku: "pending",
      fable: "pending"
    }),
    [I, F] = y("summary"),
    A = PF.map(item => e(it, {
      candidate: l[item],
      probe: k => provider.probe(wizardData_2, k),
      onState: k => h(V => ({
        ...V,
        [item]: k
      }))
    }, item));
  if (I !== "summary") {
    let i = I.picking;
    return r(Q, {
      children: [A, e(Zt, {
        tier: i,
        provider: provider,
        wizardData: wizardData_2,
        fallback: t[i].fallback,
        current: l[i],
        existingPin: u[i],
        onPick: k => {
          d(M => ({
            ...M,
            [i]: k
          }));
          let V = PF.indexOf(i),
            picking = PF[V + 1];
          F(picking ? {
            picking: picking
          } : "summary");
        },
        onCancel: () => F("summary")
      }, i)]
    });
  }
  let v = PF.every(item => g[item] !== "pending") && PF.some(item => g[item] !== "pending" && g[item].ok),
    c = v && PF.some(item => {
      let k = g[item];
      return k !== "pending" && k.ok && Ete(l[item]);
    }),
    onChange = i => {
      if (i === "manual") {
        F({
          picking: "sonnet"
        });
        return;
      }
      if (i === "pin" || i === "pin1m") {
        let k = V => {
          let J = g[V];
          if (J === "pending" || !J.ok) return;
          let M = l[V];
          return i === "pin1m" && Ete(M) ? Kt(M) : M;
        };
        onPins({
          pinSonnet: k("sonnet"),
          pinOpus: k("opus"),
          pinHaiku: k("haiku"),
          pinFable: k("fable")
        });
      } else onPins({
        pinSonnet: void 0,
        pinOpus: void 0,
        pinHaiku: void 0,
        pinFable: void 0
      });
      goNext_2();
    };
  return r(Q, {
    children: [A, e(Ac, {
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
          }), PF.map(item => e(st, {
            label: MP[item],
            modelId: l[item],
            state: g[item],
            reasonLabel: provider.reasonLabel
          }, item))]
        }), e(Xe, {
          options: [...(v ? [{
            label: "Pin the working models",
            value: "pin"
          }] : []), ...(c ? [{
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
          onCancel: m
        })]
      })
    })]
  });
}
function Kt(x) {
  return /\[1m\]$/i.test(x) ? x : `${x}[1m]`;
}
function it(x) {
  let b = w(6),
    {
      candidate: candidate,
      probe: probe,
      onState: onState
    } = x,
    t;
  if (b[0] !== candidate || b[1] !== onState || b[2] !== probe) t = () => {
    let u = !1;
    return onState("pending"), probe(candidate).then(l => {
      if (!u) onState(l);
    }), () => {
      u = !0;
    };
  }, b[0] = candidate, b[1] = onState, b[2] = probe, b[3] = t;else t = b[3];
  let d;
  if (b[4] !== candidate) d = [candidate], b[4] = candidate, b[5] = d;else d = b[5];
  return P(t, d), null;
}
function Zt({
  tier: tier,
  provider: provider_2,
  wizardData: wizardData_3,
  fallback: fallback,
  current: current,
  existingPin: existingPin,
  onPick: u,
  onCancel: onCancel_2
}) {
  let d = Z(() => {
      let c = provider_2.listTierCandidates(tier, wizardData_3);
      for (let f of [fallback, current, existingPin]) if (f && !c.includes(f)) c.push(f);
      return c;
    }, [tier, fallback, current, existingPin]),
    [g, h] = y(() => Object.fromEntries(d.map(item => [item, "pending"])));
  P(() => {
    let c = !1;
    for (let f of d) provider_2.probe(wizardData_3, f).then(i => {
      if (!c) h(k => ({
        ...k,
        [f]: i
      }));
    });
    return () => {
      c = !0;
    };
  }, []);
  let I = d.every(item => g[item] !== "pending"),
    F = c => {
      let f = g[c];
      return f !== void 0 && f !== "pending" && f.ok;
    },
    A = Z(() => {
      if (!I) return d;
      return [...d].sort((itemA, itemB) => (F(itemA) ? 0 : 1) - (F(itemB) ? 0 : 1));
    }, [d, g, I]),
    options = A.map(c => ({
      value: c,
      label: e(at, {
        id: c,
        state: g[c] ?? "pending",
        reasonLabel: provider_2.reasonLabel,
        suffix: c === existingPin ? "(currently pinned)" : c === fallback ? "(built-in default)" : c === current ? "(selected)" : void 0
      })
    })),
    v = () => {
      for (let c of provider_2.preferOnSettle ?? []) {
        let f = c === "current" ? current : fallback;
        if (F(f)) return f;
      }
      return A.find(F);
    };
  return e(Ac, {
    subtitle: `Pin ${MP[tier]} model`,
    children: r(s, {
      flexDirection: "column",
      gap: 1,
      children: [e(n, {
        dimColor: !0,
        children: provider_2.pickerSubtitle(tier, wizardData_3)
      }), e(Xe, {
        options: options,
        defaultValue: I ? v() : current,
        onChange: u,
        onCancel: onCancel_2
      }, I ? "settled" : "pending")]
    })
  });
}
function at(x) {
  let t = w(19),
    {
      id: id,
      state: state,
      suffix: suffix,
      reasonLabel: reasonLabel
    } = x;
  if (state === "pending") {
    let u;
    if (t[0] === S) u = e(ft, {
      status: "pending",
      withSpace: !0
    }), t[0] = u;else u = t[0];
    let l;
    if (t[1] !== suffix) l = suffix && r(n, {
      dimColor: !0,
      children: [" ", suffix]
    }), t[1] = suffix, t[2] = l;else l = t[2];
    let d;
    if (t[3] !== id || t[4] !== l) d = r(n, {
      children: [u, id, l]
    }), t[3] = id, t[4] = l, t[5] = d;else d = t[5];
    return d;
  }
  if (state.ok) {
    let u;
    if (t[6] === S) u = e(ft, {
      status: "success",
      withSpace: !0
    }), t[6] = u;else u = t[6];
    let l;
    if (t[7] !== suffix) l = suffix && r(n, {
      dimColor: !0,
      children: [" ", suffix]
    }), t[7] = suffix, t[8] = l;else l = t[8];
    let d;
    if (t[9] !== id || t[10] !== l) d = r(n, {
      children: [u, id, l]
    }), t[9] = id, t[10] = l, t[11] = d;else d = t[11];
    return d;
  }
  let u;
  if (t[12] === S) u = e(ft, {
    status: "error",
    withSpace: !0
  }), t[12] = u;else u = t[12];
  const l = suffix && ` ${suffix}`,
    d = reasonLabel[state.reason];
  let g;
  if (t[13] !== d) g = r(n, {
    color: "error",
    children: ["(", d, ")"]
  }), t[13] = d, t[14] = g;else g = t[14];
  let h;
  if (t[15] !== id || t[16] !== l || t[17] !== g) h = r(n, {
    dimColor: !0,
    children: [u, id, l, " ", g]
  }), t[15] = id, t[16] = l, t[17] = g, t[18] = h;else h = t[18];
  return h;
}
function st(x) {
  let t = w(26),
    {
      label: label,
      modelId: m,
      state: state_2,
      reasonLabel: reasonLabel_2
    } = x;
  if (state_2 === "pending") {
    let u, l;
    if (t[0] === S) u = e(n, {
      children: "  "
    }), l = e(Ii, {}), t[0] = u, t[1] = l;else u = t[0], l = t[1];
    let d;
    if (t[2] !== label) d = label.padEnd(7), t[2] = label, t[3] = d;else d = t[3];
    let g;
    if (t[4] !== m || t[5] !== d) g = r(s, {
      children: [u, l, r(n, {
        children: [" ", d, "\u2192 ", m]
      })]
    }), t[4] = m, t[5] = d, t[6] = g;else g = t[6];
    return g;
  }
  if (state_2.ok) {
    let u;
    if (t[7] === S) u = e(ft, {
      status: "success",
      withSpace: !0
    }), t[7] = u;else u = t[7];
    let l;
    if (t[8] !== label) l = label.padEnd(7), t[8] = label, t[9] = l;else l = t[9];
    let d;
    if (t[10] !== m) d = e(n, {
      color: "success",
      children: m
    }), t[10] = m, t[11] = d;else d = t[11];
    let g;
    if (t[12] !== l || t[13] !== d) g = r(n, {
      children: ["  ", u, l, "\u2192 ", d]
    }), t[12] = l, t[13] = d, t[14] = g;else g = t[14];
    return g;
  }
  let u;
  if (t[15] === S) u = e(ft, {
    status: "error",
    withSpace: !0
  }), t[15] = u;else u = t[15];
  let l;
  if (t[16] !== label) l = label.padEnd(7), t[16] = label, t[17] = l;else l = t[17];
  let d;
  if (t[18] !== m) d = e(n, {
    dimColor: !0,
    children: m
  }), t[18] = m, t[19] = d;else d = t[19];
  const g = reasonLabel_2[state_2.reason];
  let h;
  if (t[20] !== g) h = r(n, {
    color: "error",
    children: ["(", g, ")"]
  }), t[20] = g, t[21] = h;else h = t[21];
  let I;
  if (t[22] !== l || t[23] !== d || t[24] !== h) I = r(n, {
    children: ["  ", u, l, "\u2192 ", d, " ", h]
  }), t[22] = l, t[23] = d, t[24] = h, t[25] = I;else I = t[25];
  return I;
}
async function ySn(x, o, m) {
  let p;
  try {
    p = await x();
  } catch (error) {
    return {
      ok: !1,
      reason: m(error)
    };
  }
  try {
    return await p.messages.create({
      model: Pt(o),
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
export { fVe, dp, Ac, PF, svt, ySn };