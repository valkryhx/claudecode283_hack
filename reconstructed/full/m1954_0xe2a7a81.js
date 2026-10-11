// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.283
import {
  w
} from "B:/~BUN/root/chunk-x9hkq9y1.js";
import {
  s,
  n,
  pU
} from "B:/~BUN/root/chunk-1gn8pz4b.js";
import {
  ze
} from "B:/~BUN/root/chunk-r2yrqvry.js";
import {
  Qn
} from "B:/~BUN/root/chunk-jcnv9sfw.js";
import {
  ir
} from "B:/~BUN/root/chunk-4r6zcwth.js";
import {
  F
} from "B:/~BUN/root/chunk-acd2tycn.js";
import {
  Fe
} from "B:/~BUN/root/chunk-bt71g93n.js";
import {
  ye
} from "B:/~BUN/root/chunk-41008fhm.js";
import {
  ge
} from "B:/~BUN/root/chunk-51erc9xb.js";
import {
  Eue
} from "B:/~BUN/root/chunk-z5tnpw18.js";
import {
  vWt
} from "B:/~BUN/root/chunk-bm2wsr80.js";
import {
  jr
} from "B:/~BUN/root/chunk-1xe8mz4a.js";
import {
  ko
} from "B:/~BUN/root/chunk-v1xd9kf3.js";
import {
  Xe
} from "B:/~BUN/root/chunk-parcaazx.js";
import {
  e,
  r
} from "B:/~BUN/root/chunk-qkvevvte.js";
import {
  ose,
  sse
} from "B:/~BUN/root/chunk-v8xy4z2n.js";
import {
  Z
} from "B:/~BUN/root/chunk-08bth2fj.js";
import {
  R,
  X,
  g,
  N
} from "B:/~BUN/root/chunk-rnj6pcz5.js";
import {
  S
} from "B:/~BUN/root/chunk-yv67t8hr.js";
N();
var G = [{
  value: "yes-session",
  label: "Yes, for this session"
}, {
  value: "yes-remember",
  label: "Yes, and remember this directory"
}, {
  value: "no",
  label: "No"
}];

function x() {
  let I = w(1),
    i;
  if (I[0] === S) i = e(n, {
    dimColor: !0,
    children: "Claude Code will be able to read files in this directory and make edits when auto-accept edits is on."
  }), I[0] = i;
  else i = I[0];
  return i
}

function q(I) {
  let d = w(5),
    {
      path: i
    } = I,
    c;
  if (d[0] !== i) c = e(n, {
    color: "permission",
    children: i
  }), d[0] = i, d[1] = c;
  else c = d[1];
  let p;
  if (d[2] === S) p = e(x, {}), d[2] = p;
  else p = d[2];
  let t;
  if (d[3] !== c) t = r(s, {
    flexDirection: "column",
    gap: 1,
    children: [c, p]
  }), d[3] = c, d[4] = t;
  else t = d[4];
  return t
}

function z(I) {
  let f = w(16),
    {
      value: i,
      onChange: d,
      cursorOffset: c,
      onChangeCursorOffset: p,
      onSubmit: t,
      error: C,
      suggestions: a,
      selectedSuggestion: P
    } = I,
    K;
  if (f[0] === S) K = e(n, {
    children: "Enter the path to the directory:"
  }), f[0] = K;
  else K = f[0];
  let h;
  if (f[1] !== c || f[2] !== d || f[3] !== p || f[4] !== t || f[5] !== i) h = e(s, {
    borderDimColor: !0,
    borderStyle: "round",
    marginTop: 1,
    paddingLeft: 1,
    children: e(Qn, {
      showCursor: !0,
      focus: !0,
      placeholder: `Directory path${Z.ellipsis}`,
      value: i,
      onChange: d,
      onSubmit: t,
      columns: 80,
      cursorOffset: c,
      onChangeCursorOffset: p,
      disableCursorMovementForUpDownKeys: !0
    })
  }), f[1] = c, f[2] = d, f[3] = p, f[4] = t, f[5] = i, f[6] = h;
  else h = f[6];
  let v;
  if (f[7] !== P || f[8] !== a) v = a.length > 0 && e(s, {
    marginBottom: 1,
    children: e(Eue, {
      suggestions: a,
      selectedSuggestion: P,
      noPad: !0
    })
  }), f[7] = P, f[8] = a, f[9] = v;
  else v = f[9];
  let o;
  if (f[10] !== C) o = e(ko, {
    error: C
  }), f[10] = C, f[11] = o;
  else o = f[11];
  let T;
  if (f[12] !== h || f[13] !== v || f[14] !== o) T = r(s, {
    flexDirection: "column",
    children: [K, h, v, o]
  }), f[12] = h, f[13] = v, f[14] = o, f[15] = T;
  else T = f[15];
  return T
}

function dje(I) {
  let o = w(38),
    {
      onAddDirectory: i,
      onAlreadyAccessible: d,
      onCancel: c,
      permissionContext: p,
      directoryPath: t
    } = I,
    C = ir(),
    [a, P] = g(""),
    [f, K] = g(0),
    [h, v] = g(null),
    T;
  if (o[0] === S) T = [], o[0] = T;
  else T = o[0];
  let [m, de] = g(T), [D, E] = g(0), me;
  if (o[1] !== C) me = async (pe) => {
    if (!pe) {
      de([]), E(0);
      return
    }
    let _e = await vWt(C, pe);
    de(_e), E(0)
  }, o[1] = C, o[2] = me;
  else me = o[2];
  let B = pU(me, 100),
    fe, he;
  if (o[3] !== B || o[4] !== a) fe = () => {
    B(a)
  }, he = [a, B], o[3] = B, o[4] = a, o[5] = fe, o[6] = he;
  else fe = o[5], he = o[6];
  R(fe, he);
  let be;
  if (o[7] === S) be = (et) => {
    let Se = et.id + "/";
    P(Se), K(Se.length), v(null)
  }, o[7] = be;
  else be = o[7];
  let tt = be,
    Ce;
  if (o[8] !== i || o[9] !== d || o[10] !== p) Ce = async (ot) => {
    let A = await ose(ot, p);
    if (A.resultType === "success") {
      i(A.absolutePath, !1);
      return
    }
    if (A.resultType === "alreadyInWorkingDirectory" && !A.isExactMatch && d?.(A)) {
      return
    }
    v(sse(A))
  }, o[8] = i, o[9] = d, o[10] = p, o[11] = Ce;
  else Ce = o[11];
  let J = Ce,
    ve;
  if (o[12] === S) ve = {
    context: "Settings"
  }, o[12] = ve;
  else ve = o[12];
  ze("confirm:no", c, ve);
  let we;
  if (o[13] !== D || o[14] !== m) we = (l) => {
    if (m.length > 0) {
      if (l.key === "tab") {
        l.preventDefault();
        let De = m[D];
        if (De) tt(De);
        return
      }
      if (l.key === "up" || l.ctrl && l.key === "p") {
        l.preventDefault(), E((Ae) => Ae <= 0 ? m.length - 1 : Ae - 1);
        return
      }
      if (l.key === "down" || l.ctrl && l.key === "n") {
        l.preventDefault(), E((ke) => ke >= m.length - 1 ? 0 : ke + 1);
        return
      }
    }
  }, o[13] = D, o[14] = m, o[15] = we;
  else we = o[15];
  let Q = we,
    xe;
  if (o[16] !== t || o[17] !== i || o[18] !== c) xe = (rt) => {
    if (!t) {
      return
    }
    xt: switch (rt) {
      case "yes-session": {
        i(t, !1);
        break xt
      }
      case "yes-remember": {
        i(t, !0);
        break xt
      }
      case "no": {
        c()
      }
    }
  }, o[16] = t, o[17] = i, o[18] = c, o[19] = xe;
  else xe = o[19];
  let U = xe,
    V;
  if (o[20] !== t) V = t ? void 0 : r(ye, {
    children: [e(F, {
      chord: "tab",
      action: "complete"
    }), e(F, {
      chord: "enter",
      action: "add"
    }), e(Xe, {
      action: "confirm:no",
      context: "Settings",
      fallback: "Esc",
      description: "cancel"
    })]
  }), o[20] = t, o[21] = V;
  else V = o[21];
  let W;
  if (o[22] !== f || o[23] !== a || o[24] !== t || o[25] !== h || o[26] !== U || o[27] !== J || o[28] !== D || o[29] !== m) W = t ? r(s, {
    flexDirection: "column",
    gap: 1,
    children: [e(q, {
      path: t
    }), e(Fe, {
      options: G,
      onChange: U,
      onCancel: () => U("no")
    })]
  }) : r(s, {
    flexDirection: "column",
    gap: 1,
    children: [e(x, {}), e(z, {
      value: a,
      onChange: P,
      cursorOffset: f,
      onChangeCursorOffset: K,
      onSubmit: J,
      error: h,
      suggestions: m,
      selectedSuggestion: D
    })]
  }), o[22] = f, o[23] = a, o[24] = t, o[25] = h, o[26] = U, o[27] = J, o[28] = D, o[29] = m, o[30] = W;
  else W = o[30];
  let j;
  if (o[31] !== c || o[32] !== V || o[33] !== W) j = e(ge, {
    title: "Add directory to workspace",
    onCancel: c,
    color: "permission",
    isCancelActive: !1,
    inputGuide: V,
    children: W
  }), o[31] = c, o[32] = V, o[33] = W, o[34] = j;
  else j = o[34];
  let Pe;
  if (o[35] !== Q || o[36] !== j) Pe = e(jr, {
    onKeyDown: Q,
    children: j
  }), o[35] = Q, o[36] = j, o[37] = Pe;
  else Pe = o[37];
  return Pe
}
export {
  dje
};
