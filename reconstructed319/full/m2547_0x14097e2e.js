// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  S
} from "B:/~BUN/root/chunk-bn4bjw9d.js";
import {
  s,
  n,
  HG
} from "B:/~BUN/root/chunk-qey16aan.js";
import {
  pt
} from "B:/~BUN/root/chunk-v95bwhaa.js";
import {
  Ir
} from "B:/~BUN/root/chunk-39zyvd3e.js";
import {
  re
} from "B:/~BUN/root/chunk-xkw95p5n.js";
import {
  Io
} from "B:/~BUN/root/chunk-03yjyf4y.js";
import {
  Y
} from "B:/~BUN/root/chunk-c1v460b9.js";
import {
  Ze
} from "B:/~BUN/root/chunk-cpzw87wr.js";
import {
  Ce
} from "B:/~BUN/root/chunk-cync0e08.js";
import {
  ke
} from "B:/~BUN/root/chunk-bvcekd4j.js";
import {
  pUe
} from "B:/~BUN/root/chunk-014t6da7.js";
import {
  p4n
} from "B:/~BUN/root/chunk-cbbfqbjt.js";
import {
  is
} from "B:/~BUN/root/chunk-09epe94m.js";
import {
  Ys
} from "B:/~BUN/root/chunk-28bb8488.js";
import {
  gt
} from "B:/~BUN/root/chunk-sx03ea6s.js";
import {
  e,
  r
} from "B:/~BUN/root/chunk-t16eynda.js";
import {
  sIe,
  iIe
} from "B:/~BUN/root/chunk-6dpcedmk.js";
import {
  O,
  Z,
  y,
  j
} from "B:/~BUN/root/chunk-czy5r8bc.js";
import {
  w
} from "B:/~BUN/root/chunk-4qfwb3rf.js";
j();

function He(l) {
  return l.replace(/[\r\n]/g, "")
}
var V = [{
  value: "yes-session",
  label: "Yes, for this session"
}, {
  value: "yes-remember",
  label: "Yes, and remember this directory"
}, {
  value: "no",
  label: "No"
}];

function P() {
  let R = S(1),
    i;
  if (R[0] === w) i = e(n, {
    dimColor: !0,
    children: "Claude Code will be able to read files in this directory and make edits when auto-accept edits is on."
  }), R[0] = i;
  else i = R[0];
  return i
}

function M(R) {
  let d = S(5),
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
  if (d[2] === w) p = e(P, {}), d[2] = p;
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

function q(R) {
  let m = S(16),
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
  if (m[0] === w) E = e(n, {
    children: "Enter the path to the directory:"
  }), m[0] = E;
  else E = m[0];
  let f;
  if (m[1] !== a || m[2] !== d || m[3] !== p || m[4] !== t || m[5] !== i) f = e(s, {
    borderDimColor: !0,
    borderStyle: "round",
    marginTop: 1,
    paddingLeft: 1,
    children: e(Ir, {
      showCursor: !0,
      focus: !0,
      placeholder: `Directory path${re.ellipsis}`,
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
    children: e(pUe, {
      suggestions: c,
      selectedSuggestion: k,
      noPad: !0
    })
  }), m[7] = k, m[8] = c, m[9] = v;
  else v = m[9];
  let o;
  if (m[10] !== C) o = e(Ys, {
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

function Pvt(R) {
  let o = S(38),
    {
      onAddDirectory: i,
      onAlreadyAccessible: d,
      onCancel: a,
      permissionContext: p,
      directoryPath: t
    } = R,
    C = Io(),
    [c, k] = y(""),
    [m, E] = y(0),
    [f, v] = y(null),
    F;
  if (o[0] === w) F = [], o[0] = F;
  else F = o[0];
  let [l, ge] = y(F), [D, K] = y(0), de;
  if (o[1] !== C) de = async (pe) => {
    if (!pe) {
      ge([]), K(0);
      return
    }
    let _e = await p4n(C, pe);
    ge(_e), K(0)
  }, o[1] = C, o[2] = de;
  else de = o[2];
  let T = HG(de, 100),
    me, fe;
  if (o[3] !== T || o[4] !== c) me = () => {
    T(c)
  }, fe = [c, T], o[3] = T, o[4] = c, o[5] = me, o[6] = fe;
  else me = o[5], fe = o[6];
  O(me, fe);
  let he;
  if (o[7] === w) he = (et) => {
    let ye = et.id + "/";
    k(ye), E(ye.length), v(null)
  }, o[7] = he;
  else he = o[7];
  let tt = he,
    be;
  if (o[8] !== i || o[9] !== d || o[10] !== p) be = async (ot) => {
    let x = await sIe(ot, p);
    if (x.resultType === "success") {
      i(x.absolutePath, !1);
      return
    }
    if (x.resultType === "alreadyInWorkingDirectory" && !x.isExactMatch && d?.(x)) {
      return
    }
    v(iIe(x))
  }, o[8] = i, o[9] = d, o[10] = p, o[11] = be;
  else be = o[11];
  let z = be,
    Se;
  if (o[12] === w) Se = {
    context: "Settings"
  }, o[12] = Se;
  else Se = o[12];
  pt("confirm:no", a, Se);
  let ve;
  if (o[13] !== D || o[14] !== l) ve = (g) => {
    if (l.length > 0) {
      if (g.name === "tab") {
        g.preventDefault();
        let we = l[D];
        if (we) tt(we);
        return
      }
      if (g.name === "up" || g.ctrl && g.name === "p") {
        g.preventDefault(), K((De) => De <= 0 ? l.length - 1 : De - 1);
        return
      }
      if (g.name === "down" || g.ctrl && g.name === "n") {
        g.preventDefault(), K((xe) => xe >= l.length - 1 ? 0 : xe + 1);
        return
      }
    }
  }, o[13] = D, o[14] = l, o[15] = ve;
  else ve = o[15];
  let Q = ve,
    Ae;
  if (o[16] !== t || o[17] !== i || o[18] !== a) Ae = (rt) => {
    if (!t) {
      return
    }
    kt: switch (rt) {
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
  }, o[16] = t, o[17] = i, o[18] = a, o[19] = Ae;
  else Ae = o[19];
  let N = Ae,
    B;
  if (o[20] !== t) B = t ? void 0 : r(Ce, {
    children: [e(Y, {
      chord: "tab",
      action: "complete"
    }), e(Y, {
      chord: "enter",
      action: "add"
    }), e(gt, {
      action: "confirm:no",
      context: "Settings",
      fallback: "Esc",
      description: "cancel"
    })]
  }), o[20] = t, o[21] = B;
  else B = o[21];
  let L;
  if (o[22] !== m || o[23] !== c || o[24] !== t || o[25] !== f || o[26] !== N || o[27] !== z || o[28] !== D || o[29] !== l) L = t ? r(s, {
    flexDirection: "column",
    gap: 1,
    children: [e(M, {
      path: t
    }), e(Ze, {
      options: V,
      onChange: N,
      onCancel: () => N("no")
    })]
  }) : r(s, {
    flexDirection: "column",
    gap: 1,
    children: [e(P, {}), e(q, {
      value: c,
      onChange: k,
      cursorOffset: m,
      onChangeCursorOffset: E,
      onSubmit: z,
      error: f,
      suggestions: l,
      selectedSuggestion: D
    })]
  }), o[22] = m, o[23] = c, o[24] = t, o[25] = f, o[26] = N, o[27] = z, o[28] = D, o[29] = l, o[30] = L;
  else L = o[30];
  let U;
  if (o[31] !== a || o[32] !== B || o[33] !== L) U = e(ke, {
    title: "Add directory to workspace",
    onCancel: a,
    color: "permission",
    isCancelActive: !1,
    inputGuide: B,
    children: L
  }), o[31] = a, o[32] = B, o[33] = L, o[34] = U;
  else U = o[34];
  let Oe;
  if (o[35] !== Q || o[36] !== U) Oe = e(is, {
    onKeyDown: Q,
    children: U
  }), o[35] = Q, o[36] = U, o[37] = Oe;
  else Oe = o[37];
  return Oe
}
export {
  Pvt
};
