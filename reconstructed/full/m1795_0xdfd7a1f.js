// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.283
import {
  c
} from "B:/~BUN/root/chunk-kks4mj3w.js";
import {
  i
} from "B:/~BUN/root/chunk-728mwbhs.js";
import {
  I
} from "B:/~BUN/root/chunk-y04k89s2.js";
import {
  Bu
} from "B:/~BUN/root/chunk-gf53qpk6.js";
import {
  w
} from "B:/~BUN/root/chunk-x9hkq9y1.js";
import {
  ke
} from "B:/~BUN/root/chunk-kss0wzj5.js";
import {
  s,
  n,
  bt
} from "B:/~BUN/root/chunk-1gn8pz4b.js";
import {
  Gi,
  yh,
  gc,
  rs
} from "B:/~BUN/root/chunk-bt71g93n.js";
import {
  qn
} from "B:/~BUN/root/chunk-pet3tnhj.js";
import {
  ge
} from "B:/~BUN/root/chunk-51erc9xb.js";
import {
  wue
} from "B:/~BUN/root/chunk-fz8v14jb.js";
import {
  V,
  e,
  r
} from "B:/~BUN/root/chunk-qkvevvte.js";
import {
  R,
  T,
  N
} from "B:/~BUN/root/chunk-rnj6pcz5.js";
import {
  Rn
} from "B:/~BUN/root/chunk-d36ctpgs.js";
import {
  S
} from "B:/~BUN/root/chunk-yv67t8hr.js";
N();

function me() {
  i("tengu_claude_md_includes_dialog_shown", {})
}

function we(De, Ee) {
  return r(n, {
    dimColor: !0,
    wrap: "truncate-middle",
    children: ["  ", Rn(De.path)]
  }, Ee)
}

function sGt(g, h, o) {
  Bu((a) => ({
    ...a,
    hasClaudeMdExternalIncludesApproved: g,
    hasClaudeMdExternalIncludesWarningShown: !0
  }), o), i(g ? "tengu_claude_md_external_includes_dialog_accepted" : "tengu_claude_md_external_includes_dialog_declined", {
    source: c(h)
  })
}

function ywn(g) {
  let t = w(37),
    {
      onDone: h,
      isStandaloneDialog: o,
      externalIncludes: a
    } = g,
    {
      storageV5: k
    } = ke(),
    z;
  if (t[0] === S) z = [], t[0] = z;
  else z = t[0];
  R(me, z);
  let d = Gi(),
    {
      refusedWithin: u,
      noteRefused: p,
      epoch: Ie
    } = rs(),
    H;
  if (t[1] !== d || t[2] !== p || t[3] !== u) H = function y() {
    if (d() || u()) {
      return p(), !0
    }
    return !1
  }, t[1] = d, t[2] = p, t[3] = u, t[4] = H;
  else H = t[4];
  let y = H,
    L = yh(),
    j = gc(Ie),
    J;
  if (t[5] !== a) J = a ?? [], t[5] = a, t[6] = J;
  else J = t[6];
  let f = J,
    Q;
  if (t[7] !== f) Q = f.length <= wue ? f : f.slice(0, wue - 2), t[7] = f, t[8] = Q;
  else Q = t[8];
  let X = Q,
    O = f.slice(X.length),
    Z = T(!1),
    ee;
  if (t[9] !== d || t[10] !== p || t[11] !== h || t[12] !== u || t[13] !== k) ee = (ye) => {
    if (d() || u()) {
      p();
      return
    }
    if (Z.current) {
      return
    }
    Z.current = !0, sGt(ye === "yes", "dialog", k), h()
  }, t[9] = d, t[10] = p, t[11] = h, t[12] = u, t[13] = k, t[14] = ee;
  else ee = t[14];
  let l = ee,
    te;
  if (t[15] !== l) te = () => {
    l("no")
  }, t[15] = l, t[16] = te;
  else te = t[16];
  let W = te;
  const M = ge,
    xe = "Allow external CLAUDE.md file imports?",
    Ce = "warning",
    B = !o,
    P = !o;
  let x;
  if (t[17] === S) x = e(n, {
    children: "This project's CLAUDE.md imports files outside the current working directory. Never allow this for third-party repositories."
  }), t[17] = x;
  else x = t[17];
  const U = a && a.length > 0 && r(s, {
    flexDirection: "column",
    children: [e(n, {
      dimColor: !0,
      children: "External imports:"
    }), X.map(we), O.length > 0 ? r(V, {
      children: [r(n, {
        dimColor: !0,
        wrap: "truncate",
        children: ["  ", "\u2026 +", O.length, " ", I(O.length, "import"), " not shown."]
      }), r(n, {
        dimColor: !0,
        wrap: "truncate",
        children: ["  ", "Yes covers those too, plus any this project adds later."]
      })]
    }) : null]
  });
  let oe;
  if (t[18] === S) oe = r(n, {
    dimColor: !0,
    children: ["Important: Only use Claude Code with files you trust. Accessing untrusted files may pose security risks", " ", e(bt, {
      url: "https://code.claude.com/docs/en/security"
    }), " "]
  }), t[18] = oe;
  else oe = t[18];
  let C, D;
  if (t[19] !== l) C = () => l("yes"), D = () => l("no"), t[19] = l, t[20] = C, t[21] = D;
  else C = t[20], D = t[21];
  let E;
  if (t[22] !== j.remountKey || t[23] !== y || t[24] !== L || t[25] !== C || t[26] !== D) E = e(qn, {
    refuseInput: y,
    openedAt: L,
    hideIndexes: !0,
    confirmLabel: "Yes, allow external imports",
    cancelLabel: "No, disable external imports",
    cancelFirst: !0,
    focus: "cancel",
    onConfirm: C,
    onCancel: D
  }, j.remountKey), t[22] = j.remountKey, t[23] = y, t[24] = L, t[25] = C, t[26] = D, t[27] = E;
  else E = t[27];
  let ne;
  if (t[28] !== M || t[29] !== W || t[30] !== o || t[31] !== P || t[32] !== x || t[33] !== U || t[34] !== E || t[35] !== B) ne = r(M, {
    title: xe,
    color: Ce,
    onCancel: W,
    exitOnCtrlCD: o,
    hideBorder: B,
    hideInputGuide: P,
    children: [x, U, oe, E]
  }), t[28] = M, t[29] = W, t[30] = o, t[31] = P, t[32] = x, t[33] = U, t[34] = E, t[35] = B, t[36] = ne;
  else ne = t[36];
  return ne
}
export {
  sGt,
  ywn
};
