// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.283
import {
  s,
  n
} from "B:/~BUN/root/chunk-1gn8pz4b.js";
import {
  a
} from "B:/~BUN/root/chunk-nkmmqnq7.js";
import {
  w
} from "B:/~BUN/root/chunk-x9hkq9y1.js";
import {
  U6
} from "B:/~BUN/root/chunk-gf53qpk6.js";
import {
  Wr
} from "B:/~BUN/root/chunk-5r1x61tc.js";
import {
  F
} from "B:/~BUN/root/chunk-acd2tycn.js";
import {
  ye
} from "B:/~BUN/root/chunk-41008fhm.js";
import {
  ge
} from "B:/~BUN/root/chunk-51erc9xb.js";
import {
  yT
} from "B:/~BUN/root/chunk-acsg9bv8.js";
import {
  Fe
} from "B:/~BUN/root/chunk-bt71g93n.js";
import {
  et
} from "B:/~BUN/root/chunk-zg8y1401.js";
import {
  Rs
} from "B:/~BUN/root/chunk-8sb89kt9.js";
import {
  Xe
} from "B:/~BUN/root/chunk-parcaazx.js";
import {
  V,
  e,
  r
} from "B:/~BUN/root/chunk-qkvevvte.js";
import {
  Vt,
  se,
  Pe,
  R,
  X,
  g,
  N
} from "B:/~BUN/root/chunk-rnj6pcz5.js";
import {
  S
} from "B:/~BUN/root/chunk-yv67t8hr.js";
N();

function Pn(Co) {
  return Co + 1
}

function Sn(ko) {
  return ko.slice(0, -1)
}

function Dn(ho) {
  return ho - 1
}
var Se = Vt(null);

function xPe(k) {
  let h = w(40),
    {
      steps: t,
      stepProps: x,
      initialData: c,
      onComplete: v,
      onCancel: i,
      children: u,
      title: d,
      showStepCounter: l,
      exitOnCtrlCD: m
    } = k,
    z;
  if (h[0] !== c) z = c === void 0 ? {} : c, h[0] = c, h[1] = z;
  else z = h[1];
  let O = z,
    j = l === void 0 ? !0 : l,
    de = m === void 0 ? !1 : m,
    [y, p] = g(0),
    [f, o] = g(O),
    [b, U] = g(!1),
    K;
  if (h[2] === S) K = [], h[2] = K;
  else K = h[2];
  let [H, ke] = g(K), Zt, en;
  if (h[3] !== b || h[4] !== v || h[5] !== f) Zt = () => {
    if (b) ke([]), v(f)
  }, en = [b, f, v], h[3] = b, h[4] = v, h[5] = f, h[6] = Zt, h[7] = en;
  else Zt = h[6], en = h[7];
  R(Zt, en);
  let tn;
  if (h[8] !== y || h[9] !== H || h[10] !== t.length) tn = () => {
    if (y < t.length - 1) {
      if (H.length > 0) ke((fo) => [...fo, y]);
      p(Pn)
    } else U(!0)
  }, h[8] = y, h[9] = H, h[10] = t.length, h[11] = tn;
  else tn = h[11];
  let pt = tn,
    nn;
  if (h[12] !== y || h[13] !== H || h[14] !== i) nn = () => {
    if (H.length > 0) {
      let on = H.at(-1);
      if (on !== void 0) ke(Sn), p(on)
    } else if (y > 0) p(Dn);
    else if (i) i()
  }, h[12] = y, h[13] = H, h[14] = i, h[15] = nn;
  else nn = h[15];
  let ct = nn,
    rn;
  if (h[16] !== y || h[17] !== t.length) rn = (ut) => {
    if (ut >= 0 && ut < t.length) ke((mo) => [...mo, y]), p(ut)
  }, h[16] = y, h[17] = t.length, h[18] = rn;
  else rn = h[18];
  let ft = rn,
    an;
  if (h[19] !== i) an = () => {
    if (ke([]), i) i()
  }, h[19] = i, h[20] = an;
  else an = h[20];
  let ze = an,
    sn = Wr(de ? void 0 : ze),
    mt = sn.pending ? `Press ${sn.keyName} again to ${de?"exit":"cancel"}` : null,
    dn;
  if (h[21] === S) dn = (go) => {
    o((xo) => ({
      ...xo,
      ...go
    }))
  }, h[21] = dn;
  else dn = h[21];
  let bo = dn,
    ln;
  if (h[22] !== ze || h[23] !== y || h[24] !== ct || h[25] !== pt || h[26] !== ft || h[27] !== mt || h[28] !== j || h[29] !== t.length || h[30] !== d || h[31] !== f) ln = {
    currentStepIndex: y,
    totalSteps: t.length,
    wizardData: f,
    setWizardData: o,
    updateWizardData: bo,
    goNext: pt,
    goBack: ct,
    goToStep: ft,
    cancel: ze,
    title: d,
    showStepCounter: j,
    pendingExitHint: mt
  }, h[22] = ze, h[23] = y, h[24] = ct, h[25] = pt, h[26] = ft, h[27] = mt, h[28] = j, h[29] = t.length, h[30] = d, h[31] = f, h[32] = ln;
  else ln = h[32];
  let gt = ln,
    Ie = t[y];
  if (!Ie || b) {
    return null
  }
  let Ne;
  if (h[33] !== Ie || h[34] !== u || h[35] !== x) Ne = u || e(Ie, {
    ...x
  }), h[33] = Ie, h[34] = u, h[35] = x, h[36] = Ne;
  else Ne = h[36];
  let pn;
  if (h[37] !== gt || h[38] !== Ne) pn = e(Se.Provider, {
    value: gt,
    children: Ne
  }), h[37] = gt, h[38] = Ne, h[39] = pn;
  else pn = h[39];
  return pn
}
N();

function gd() {
  let k = Pe(Se);
  if (!k) throw Error("useWizard must be used within a WizardProvider");
  return k
}

function Jl(k) {
  let p = w(15),
    {
      title: t,
      color: x,
      children: c,
      subtitle: v,
      footerText: i
    } = k,
    u = x === void 0 ? "suggestion" : x,
    {
      currentStepIndex: d,
      totalSteps: l,
      title: m,
      showStepCounter: h,
      goBack: z,
      pendingExitHint: O
    } = gd(),
    j = t || m || "Wizard",
    de = h !== !1 ? ` (${d+1}/${l})` : "";
  const y = `${j}${de}`;
  let f;
  if (p[0] !== c || p[1] !== u || p[2] !== z || p[3] !== v || p[4] !== y) f = e(ge, {
    title: y,
    subtitle: v,
    onCancel: z,
    color: u,
    hideInputGuide: !0,
    isCancelActive: !1,
    children: c
  }), p[0] = c, p[1] = u, p[2] = z, p[3] = v, p[4] = y, p[5] = f;
  else f = p[5];
  let o;
  if (p[6] !== d || p[7] !== i || p[8] !== O) o = O ?? i ?? r(ye, {
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
      description: d > 0 ? "go back" : "cancel"
    })]
  }), p[6] = d, p[7] = i, p[8] = O, p[9] = o;
  else o = p[9];
  let b;
  if (p[10] !== o) b = e(s, {
    marginLeft: 2,
    marginTop: 1,
    children: e(n, {
      dimColor: !0,
      children: o
    })
  }), p[10] = o, p[11] = b;
  else b = p[11];
  let U;
  if (p[12] !== f || p[13] !== b) U = r(V, {
    children: [f, b]
  }), p[12] = f, p[13] = b, p[14] = U;
  else U = p[14];
  return U
}
var tO = ["sonnet", "opus", "haiku", "fable"];

function We() {
  return {
    sonnet: a.ANTHROPIC_DEFAULT_SONNET_MODEL,
    opus: a.ANTHROPIC_DEFAULT_OPUS_MODEL,
    haiku: a.ANTHROPIC_DEFAULT_HAIKU_MODEL,
    fable: a.ANTHROPIC_DEFAULT_FABLE_MODEL
  }
}
N();

function oJe({
  provider: k,
  onPins: t
}) {
  let {
    goBack: x,
    goNext: c,
    wizardData: v
  } = gd(), i = X(() => k.resolveTierDefaults(v), []), u = X(() => We(), []), [d, l] = g(() => Object.fromEntries(tO.map((o) => [o, u[o] ?? i[o].auto ?? i[o].fallback]))), [m, h] = g({
    sonnet: "pending",
    opus: "pending",
    haiku: "pending",
    fable: "pending"
  }), [z, O] = g("summary"), j = tO.map((o) => e(st, {
    candidate: d[o],
    probe: (b) => k.probe(v, b),
    onState: (b) => h((U) => ({
      ...U,
      [o]: b
    }))
  }, o));
  if (z !== "summary") {
    let o = z.picking;
    return r(V, {
      children: [j, e(Yt, {
        tier: o,
        provider: k,
        wizardData: v,
        fallback: i[o].fallback,
        current: d[o],
        existingPin: u[o],
        onPick: (b) => {
          l((H) => ({
            ...H,
            [o]: b
          }));
          let U = tO.indexOf(o),
            K = tO[U + 1];
          O(K ? {
            picking: K
          } : "summary")
        },
        onCancel: () => O("summary")
      }, o)]
    })
  }
  let y = tO.every((o) => m[o] !== "pending") && tO.some((o) => m[o] !== "pending" && m[o].ok),
    p = y && tO.some((o) => {
      let b = m[o];
      return b !== "pending" && b.ok && U6(d[o])
    }),
    f = (o) => {
      if (o === "manual") {
        O({
          picking: "sonnet"
        });
        return
      }
      if (o === "pin" || o === "pin1m") {
        let b = (U) => {
          let K = m[U];
          if (K === "pending" || !K.ok) return;
          let H = d[U];
          return o === "pin1m" && U6(H) ? Jt(H) : H
        };
        t({
          pinSonnet: b("sonnet"),
          pinOpus: b("opus"),
          pinHaiku: b("haiku"),
          pinFable: b("fable")
        })
      } else t({
        pinSonnet: void 0,
        pinOpus: void 0,
        pinHaiku: void 0,
        pinFable: void 0
      });
      c()
    };
  return r(V, {
    children: [j, e(Jl, {
      subtitle: "Pin model versions",
      children: r(s, {
        flexDirection: "column",
        gap: 1,
        children: [e(n, {
          children: k.intro
        }), r(s, {
          flexDirection: "column",
          children: [e(n, {
            dimColor: !0,
            children: "Each candidate is tested with a one-token request:"
          }), tO.map((o) => e(lt, {
            label: yT[o],
            modelId: d[o],
            state: m[o],
            reasonLabel: k.reasonLabel
          }, o))]
        }), e(Fe, {
          options: [...y ? [{
            label: "Pin the working models",
            value: "pin"
          }] : [], ...p ? [{
            label: "Pin the working models with 1M context",
            value: "pin1m"
          }] : [], {
            label: "Choose different models\u2026",
            value: "manual"
          }, {
            label: "Skip \u2014 use Claude Code defaults (auto-updates)",
            value: "skip"
          }],
          onChange: f,
          onCancel: x
        })]
      })
    })]
  })
}

function Jt(k) {
  return /\[1m\]$/i.test(k) ? k : `${k}[1m]`
}

function st(k) {
  let v = w(6),
    {
      candidate: t,
      probe: x,
      onState: c
    } = k,
    i;
  if (v[0] !== t || v[1] !== c || v[2] !== x) i = () => {
    let u = !1;
    return c("pending"), x(t).then((d) => {
      if (!u) c(d)
    }), () => {
      u = !0
    }
  }, v[0] = t, v[1] = c, v[2] = x, v[3] = i;
  else i = v[3];
  let l;
  if (v[4] !== t) l = [t], v[4] = t, v[5] = l;
  else l = v[5];
  return R(i, l), null
}

function Yt({
  tier: k,
  provider: t,
  wizardData: x,
  fallback: c,
  current: v,
  existingPin: i,
  onPick: u,
  onCancel: d
}) {
  let l = X(() => {
      let p = t.listTierCandidates(k, x);
      for (let f of [c, v, i])
        if (f && !p.includes(f)) p.push(f);
      return p
    }, [k, c, v, i]),
    [m, h] = g(() => Object.fromEntries(l.map((p) => [p, "pending"])));
  R(() => {
    let p = !1;
    for (let f of l) t.probe(x, f).then((o) => {
      if (!p) h((b) => ({
        ...b,
        [f]: o
      }))
    });
    return () => {
      p = !0
    }
  }, []);
  let z = l.every((p) => m[p] !== "pending"),
    O = (p) => {
      let f = m[p];
      return f !== void 0 && f !== "pending" && f.ok
    },
    j = X(() => {
      if (!z) return l;
      return [...l].sort((p, f) => (O(p) ? 0 : 1) - (O(f) ? 0 : 1))
    }, [l, m, z]),
    de = j.map((p) => ({
      value: p,
      label: e(dt, {
        id: p,
        state: m[p] ?? "pending",
        reasonLabel: t.reasonLabel,
        suffix: p === i ? "(currently pinned)" : p === c ? "(built-in default)" : p === v ? "(selected)" : void 0
      })
    })),
    y = () => {
      for (let p of t.preferOnSettle ?? []) {
        let f = p === "current" ? v : c;
        if (O(f)) return f
      }
      return j.find(O)
    };
  return e(Jl, {
    subtitle: `Pin ${yT[k]} model`,
    children: r(s, {
      flexDirection: "column",
      gap: 1,
      children: [e(n, {
        dimColor: !0,
        children: t.pickerSubtitle(k, x)
      }), e(Fe, {
        options: de,
        defaultValue: z ? y() : v,
        onChange: u,
        onCancel: d
      }, z ? "settled" : "pending")]
    })
  })
}

function dt(k) {
  let i = w(19),
    {
      id: t,
      state: x,
      suffix: c,
      reasonLabel: v
    } = k;
  if (x === "pending") {
    let u;
    if (i[0] === S) u = e(et, {
      status: "pending",
      withSpace: !0
    }), i[0] = u;
    else u = i[0];
    let d;
    if (i[1] !== c) d = c && r(n, {
      dimColor: !0,
      children: [" ", c]
    }), i[1] = c, i[2] = d;
    else d = i[2];
    let l;
    if (i[3] !== t || i[4] !== d) l = r(n, {
      children: [u, t, d]
    }), i[3] = t, i[4] = d, i[5] = l;
    else l = i[5];
    return l
  }
  if (x.ok) {
    let u;
    if (i[6] === S) u = e(et, {
      status: "success",
      withSpace: !0
    }), i[6] = u;
    else u = i[6];
    let d;
    if (i[7] !== c) d = c && r(n, {
      dimColor: !0,
      children: [" ", c]
    }), i[7] = c, i[8] = d;
    else d = i[8];
    let l;
    if (i[9] !== t || i[10] !== d) l = r(n, {
      children: [u, t, d]
    }), i[9] = t, i[10] = d, i[11] = l;
    else l = i[11];
    return l
  }
  let u;
  if (i[12] === S) u = e(et, {
    status: "error",
    withSpace: !0
  }), i[12] = u;
  else u = i[12];
  const d = c && ` ${c}`,
    l = v[x.reason];
  let m;
  if (i[13] !== l) m = r(n, {
    color: "error",
    children: ["(", l, ")"]
  }), i[13] = l, i[14] = m;
  else m = i[14];
  let h;
  if (i[15] !== t || i[16] !== d || i[17] !== m) h = r(n, {
    dimColor: !0,
    children: [u, t, d, " ", m]
  }), i[15] = t, i[16] = d, i[17] = m, i[18] = h;
  else h = i[18];
  return h
}

function lt(k) {
  let i = w(26),
    {
      label: t,
      modelId: x,
      state: c,
      reasonLabel: v
    } = k;
  if (c === "pending") {
    let u, d;
    if (i[0] === S) u = e(n, {
      children: "  "
    }), d = e(Rs, {}), i[0] = u, i[1] = d;
    else u = i[0], d = i[1];
    let l;
    if (i[2] !== t) l = t.padEnd(7), i[2] = t, i[3] = l;
    else l = i[3];
    let m;
    if (i[4] !== x || i[5] !== l) m = r(s, {
      children: [u, d, r(n, {
        children: [" ", l, "\u2192 ", x]
      })]
    }), i[4] = x, i[5] = l, i[6] = m;
    else m = i[6];
    return m
  }
  if (c.ok) {
    let u;
    if (i[7] === S) u = e(et, {
      status: "success",
      withSpace: !0
    }), i[7] = u;
    else u = i[7];
    let d;
    if (i[8] !== t) d = t.padEnd(7), i[8] = t, i[9] = d;
    else d = i[9];
    let l;
    if (i[10] !== x) l = e(n, {
      color: "success",
      children: x
    }), i[10] = x, i[11] = l;
    else l = i[11];
    let m;
    if (i[12] !== d || i[13] !== l) m = r(n, {
      children: ["  ", u, d, "\u2192 ", l]
    }), i[12] = d, i[13] = l, i[14] = m;
    else m = i[14];
    return m
  }
  let u;
  if (i[15] === S) u = e(et, {
    status: "error",
    withSpace: !0
  }), i[15] = u;
  else u = i[15];
  let d;
  if (i[16] !== t) d = t.padEnd(7), i[16] = t, i[17] = d;
  else d = i[17];
  let l;
  if (i[18] !== x) l = e(n, {
    dimColor: !0,
    children: x
  }), i[18] = x, i[19] = l;
  else l = i[19];
  const m = v[c.reason];
  let h;
  if (i[20] !== m) h = r(n, {
    color: "error",
    children: ["(", m, ")"]
  }), i[20] = m, i[21] = h;
  else h = i[21];
  let z;
  if (i[22] !== d || i[23] !== l || i[24] !== h) z = r(n, {
    children: ["  ", u, d, "\u2192 ", l, " ", h]
  }), i[22] = d, i[23] = l, i[24] = h, i[25] = z;
  else z = i[25];
  return z
}
export {
  xPe,
  gd,
  Jl,
  tO,
  oJe
};
