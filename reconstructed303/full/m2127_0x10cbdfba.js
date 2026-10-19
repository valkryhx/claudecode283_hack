// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.303
import {
  w
} from "B:/~BUN/root/chunk-rysqv8v1.js";
import {
  s,
  n,
  F$
} from "B:/~BUN/root/chunk-damrp3r8.js";
import {
  rt
} from "B:/~BUN/root/chunk-pw5vpw1q.js";
import {
  Lr
} from "B:/~BUN/root/chunk-rxj6qxcq.js";
import {
  te
} from "B:/~BUN/root/chunk-9tx73f8x.js";
import {
  qr
} from "B:/~BUN/root/chunk-xc1c9t20.js";
import {
  q
} from "B:/~BUN/root/chunk-bf7csy4f.js";
import {
  Xe
} from "B:/~BUN/root/chunk-nbjke4gr.js";
import {
  Se
} from "B:/~BUN/root/chunk-7dpyfa5r.js";
import {
  be
} from "B:/~BUN/root/chunk-nyga36vf.js";
import {
  xCe
} from "B:/~BUN/root/chunk-wng69n5z.js";
import {
  myn
} from "B:/~BUN/root/chunk-kxp9j9f6.js";
import {
  ko
} from "B:/~BUN/root/chunk-r9cctkt4.js";
import {
  ls
} from "B:/~BUN/root/chunk-fzhngknh.js";
import {
  gt
} from "B:/~BUN/root/chunk-vs438w4e.js";
import {
  e,
  r
} from "B:/~BUN/root/chunk-x2hkxw5q.js";
import {
  Obe,
  Ibe
} from "B:/~BUN/root/chunk-2tf4j7v3.js";
import {
  P,
  Z,
  y,
  B
} from "B:/~BUN/root/chunk-5hr2ysa5.js";
import {
  S
} from "B:/~BUN/root/chunk-ef0msk7r.js";
B();

function He(l) {
  return l.replace(/[\r\n]/g, "")
}
var W = [{
  value: "yes-session",
  label: "Yes, for this session"
}, {
  value: "yes-remember",
  label: "Yes, and remember this directory"
}, {
  value: "no",
  label: "No"
}];

function O() {
  let R = w(1),
    i;
  if (R[0] === S) i = e(n, {
    dimColor: !0,
    children: "Claude Code will be able to read files in this directory and make edits when auto-accept edits is on."
  }), R[0] = i;
  else i = R[0];
  return i
}

function M(R) {
  let d = w(5),
    {
      path: i
    } = R,
    a;
  if (d[0] !== i) a = e(n, {
    color: "permission",
    children: i
  }), d[0] = i, d[1] = a;
  else a = d[1];
  let p;
  if (d[2] === S) p = e(O, {}), d[2] = p;
  else p = d[2];
  let t;
  if (d[3] !== a) t = r(s, {
    flexDirection: "column",
    gap: 1,
    children: [a, p]
  }), d[3] = a, d[4] = t;
  else t = d[4];
  return t
}

function Y(R) {
  let m = w(16),
    {
      value: i,
      onChange: d,
      cursorOffset: a,
      onChangeCursorOffset: p,
      onSubmit: t,
      error: C,
      suggestions: c,
      selectedSuggestion: k
    } = R,
    E;
  if (m[0] === S) E = e(n, {
    children: "Enter the path to the directory:"
  }), m[0] = E;
  else E = m[0];
  let f;
  if (m[1] !== a || m[2] !== d || m[3] !== p || m[4] !== t || m[5] !== i) f = e(s, {
    borderDimColor: !0,
    borderStyle: "round",
    marginTop: 1,
    paddingLeft: 1,
    children: e(Lr, {
      showCursor: !0,
      focus: !0,
      placeholder: `Directory path${te.ellipsis}`,
      value: i,
      onChange: d,
      onSubmit: t,
      columns: 80,
      cursorOffset: a,
      onChangeCursorOffset: p,
      inputFilter: He,
      disableCursorMovementForUpDownKeys: !0
    })
  }), m[1] = a, m[2] = d, m[3] = p, m[4] = t, m[5] = i, m[6] = f;
  else f = m[6];
  let v;
  if (m[7] !== k || m[8] !== c) v = c.length > 0 && e(s, {
    marginBottom: 1,
    children: e(xCe, {
      suggestions: c,
      selectedSuggestion: k,
      noPad: !0
    })
  }), m[7] = k, m[8] = c, m[9] = v;
  else v = m[9];
  let o;
  if (m[10] !== C) o = e(ls, {
    error: C
  }), m[10] = C, m[11] = o;
  else o = m[11];
  let F;
  if (m[12] !== f || m[13] !== v || m[14] !== o) F = r(s, {
    flexDirection: "column",
    children: [E, f, v, o]
  }), m[12] = f, m[13] = v, m[14] = o, m[15] = F;
  else F = m[15];
  return F
}

function ztt(R) {
  let o = w(38),
    {
      onAddDirectory: i,
      onAlreadyAccessible: d,
      onCancel: a,
      permissionContext: p,
      directoryPath: t
    } = R,
    C = qr(),
    [c, k] = y(""),
    [m, E] = y(0),
    [f, v] = y(null),
    F;
  if (o[0] === S) F = [], o[0] = F;
  else F = o[0];
  let [l, ge] = y(F), [D, K] = y(0), de;
  if (o[1] !== C) de = async (pe) => {
    if (!pe) {
      ge([]), K(0);
      return
    }
    let _e = await myn(C, pe);
    ge(_e), K(0)
  }, o[1] = C, o[2] = de;
  else de = o[2];
  let T = F$(de, 100),
    me, fe;
  if (o[3] !== T || o[4] !== c) me = () => {
    T(c)
  }, fe = [c, T], o[3] = T, o[4] = c, o[5] = me, o[6] = fe;
  else me = o[5], fe = o[6];
  P(me, fe);
  let he;
  if (o[7] === S) he = (et) => {
    let ye = et.id + "/";
    k(ye), E(ye.length), v(null)
  }, o[7] = he;
  else he = o[7];
  let tt = he,
    Ce;
  if (o[8] !== i || o[9] !== d || o[10] !== p) Ce = async (ot) => {
    let x = await Obe(ot, p);
    if (x.resultType === "success") {
      i(x.absolutePath, !1);
      return
    }
    if (x.resultType === "alreadyInWorkingDirectory" && !x.isExactMatch && d?.(x)) {
      return
    }
    v(Ibe(x))
  }, o[8] = i, o[9] = d, o[10] = p, o[11] = Ce;
  else Ce = o[11];
  let z = Ce,
    ve;
  if (o[12] === S) ve = {
    context: "Settings"
  }, o[12] = ve;
  else ve = o[12];
  rt("confirm:no", a, ve);
  let we;
  if (o[13] !== D || o[14] !== l) we = (g) => {
    if (l.length > 0) {
      if (g.name === "tab") {
        g.preventDefault();
        let De = l[D];
        if (De) tt(De);
        return
      }
      if (g.name === "up" || g.ctrl && g.name === "p") {
        g.preventDefault(), K((xe) => xe <= 0 ? l.length - 1 : xe - 1);
        return
      }
      if (g.name === "down" || g.ctrl && g.name === "n") {
        g.preventDefault(), K((Ae) => Ae >= l.length - 1 ? 0 : Ae + 1);
        return
      }
    }
  }, o[13] = D, o[14] = l, o[15] = we;
  else we = o[15];
  let Q = we,
    Oe;
  if (o[16] !== t || o[17] !== i || o[18] !== a) Oe = (nt) => {
    if (!t) {
      return
    }
    kt: switch (nt) {
      case "yes-session": {
        i(t, !1);
        break kt
      }
      case "yes-remember": {
        i(t, !0);
        break kt
      }
      case "no": {
        a()
      }
    }
  }, o[16] = t, o[17] = i, o[18] = a, o[19] = Oe;
  else Oe = o[19];
  let N = Oe,
    L;
  if (o[20] !== t) L = t ? void 0 : r(Se, {
    children: [e(q, {
      chord: "tab",
      action: "complete"
    }), e(q, {
      chord: "enter",
      action: "add"
    }), e(gt, {
      action: "confirm:no",
      context: "Settings",
      fallback: "Esc",
      description: "cancel"
    })]
  }), o[20] = t, o[21] = L;
  else L = o[21];
  let U;
  if (o[22] !== m || o[23] !== c || o[24] !== t || o[25] !== f || o[26] !== N || o[27] !== z || o[28] !== D || o[29] !== l) U = t ? r(s, {
    flexDirection: "column",
    gap: 1,
    children: [e(M, {
      path: t
    }), e(Xe, {
      options: W,
      onChange: N,
      onCancel: () => N("no")
    })]
  }) : r(s, {
    flexDirection: "column",
    gap: 1,
    children: [e(O, {}), e(Y, {
      value: c,
      onChange: k,
      cursorOffset: m,
      onChangeCursorOffset: E,
      onSubmit: z,
      error: f,
      suggestions: l,
      selectedSuggestion: D
    })]
  }), o[22] = m, o[23] = c, o[24] = t, o[25] = f, o[26] = N, o[27] = z, o[28] = D, o[29] = l, o[30] = U;
  else U = o[30];
  let V;
  if (o[31] !== a || o[32] !== L || o[33] !== U) V = e(be, {
    title: "Add directory to workspace",
    onCancel: a,
    color: "permission",
    isCancelActive: !1,
    inputGuide: L,
    children: U
  }), o[31] = a, o[32] = L, o[33] = U, o[34] = V;
  else V = o[34];
  let Pe;
  if (o[35] !== Q || o[36] !== V) Pe = e(ko, {
    onKeyDown: Q,
    children: V
  }), o[35] = Q, o[36] = V, o[37] = Pe;
  else Pe = o[37];
  return Pe
}
export {
  ztt
};
