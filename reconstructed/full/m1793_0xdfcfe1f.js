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
  lO
} from "B:/~BUN/root/chunk-7nc4t0q7.js";
import {
  ze
} from "B:/~BUN/root/chunk-r2yrqvry.js";
import {
  ln
} from "B:/~BUN/root/chunk-3rzkfay5.js";
import {
  os
} from "B:/~BUN/root/chunk-0d8a76zs.js";
import {
  Zn,
  ooe,
  gVt,
  soe
} from "B:/~BUN/root/chunk-1x7a47hz.js";
import {
  ke
} from "B:/~BUN/root/chunk-kss0wzj5.js";
import {
  b7,
  rR
} from "B:/~BUN/root/chunk-tq1hs216.js";
import {
  Wr
} from "B:/~BUN/root/chunk-5r1x61tc.js";
import {
  ve
} from "B:/~BUN/root/chunk-cxqcvpm0.js";
import {
  W,
  dn
} from "B:/~BUN/root/chunk-h23911wn.js";
import {
  Kn
} from "B:/~BUN/root/chunk-3jyp964r.js";
import {
  Fe
} from "B:/~BUN/root/chunk-bt71g93n.js";
import {
  F
} from "B:/~BUN/root/chunk-acd2tycn.js";
import {
  ye
} from "B:/~BUN/root/chunk-41008fhm.js";
import {
  Vyt,
  mer
} from "B:/~BUN/root/chunk-93kq3f21.js";
import {
  X2
} from "B:/~BUN/root/chunk-q7jerdh3.js";
import {
  sS
} from "B:/~BUN/root/chunk-3erthd76.js";
import {
  V,
  e,
  r
} from "B:/~BUN/root/chunk-qkvevvte.js";
import {
  R,
  g,
  N
} from "B:/~BUN/root/chunk-rnj6pcz5.js";
import {
  S
} from "B:/~BUN/root/chunk-yv67t8hr.js";
N();

function Lt(Et) {
  return Et.settings.syntaxHighlightingDisabled
}

function $t(b) {
  return {
    label: b.source === "user" ? `${b.name} (custom)` : `${b.name} (from ${b.source.plugin})`,
    value: b7(b.slug)
  }
}
var d = "__new_custom_theme__";

function Pbe(At) {
  let t = w(96),
    {
      onThemeSelect: se,
      showIntroText: Be,
      helpText: Ue,
      showHelpTextBelow: Ge,
      hideEscToCancel: Me,
      skipExitHandling: Ne,
      onCancel: ae,
      onCustomTheme: i
    } = At,
    k = Be === void 0 ? !1 : Be,
    l = Ue === void 0 ? "" : Ue,
    f = Ge === void 0 ? !1 : Ge,
    re = Me === void 0 ? !1 : Me,
    m = Ne === void 0 ? !1 : Ne,
    {
      storageV5: me
    } = ke(),
    [ce] = Zn(),
    C = ooe(),
    {
      columns: It
    } = ve(),
    Xe;
  if (t[0] === S) Xe = Vyt(), t[0] = Xe;
  else Xe = t[0];
  let he = Xe,
    Oe;
  if (t[1] !== ce) Oe = he === null ? mer(ce) : null, t[1] = ce, t[2] = Oe;
  else Oe = t[2];
  let H = Oe,
    {
      setPreviewTheme: ge,
      savePreview: p,
      cancelPreview: o
    } = gVt(),
    Ye, je;
  if (t[3] !== o) Ye = () => () => o(), je = [o], t[3] = o, t[4] = Ye, t[5] = je;
  else Ye = t[4], je = t[5];
  R(Ye, je);
  let D = W(Lt) ?? !1,
    de = dn();
  lO("ThemePicker");
  let ue = os("theme:toggleSyntaxHighlighting", "ThemePicker", "ctrl+t"),
    qe;
  if (t[6] !== de || t[7] !== me || t[8] !== D) qe = () => {
    if (he === null) {
      let Je = !D;
      ln("userSettings", {
        syntaxHighlightingDisabled: Je
      }, void 0, me), de((Qe) => ({
        ...Qe,
        settings: {
          ...Qe.settings,
          syntaxHighlightingDisabled: Je
        }
      }))
    }
  }, t[6] = de, t[7] = me, t[8] = D, t[9] = qe;
  else qe = t[9];
  let We;
  if (t[10] === S) We = {
    context: "ThemePicker"
  }, t[10] = We;
  else We = t[10];
  ze("theme:toggleSyntaxHighlighting", qe, We);
  let Ze;
  if (t[11] !== o || t[12] !== ae) Ze = () => {
    o(), ae?.()
  }, t[11] = o, t[12] = ae, t[13] = Ze;
  else Ze = t[13];
  let L = Ze,
    A = Wr(m ? L : void 0),
    {
      customThemes: x
    } = soe(),
    [fe, Rt] = g(C),
    Ke;
  if (t[14] !== fe) Ke = rR(fe), t[14] = fe, t[15] = Ke;
  else Ke = t[15];
  let I = Ke,
    et;
  if (t[16] !== x || t[17] !== I) et = I ? x.find((_t) => _t.slug === I) : void 0, t[16] = x, t[17] = I, t[18] = et;
  else et = t[18];
  let c = et,
    pe = os("theme:editCustom", "ThemePicker", "ctrl+e"),
    tt;
  if (t[19] !== c || t[20] !== i || t[21] !== p) tt = () => {
    if (c && i) p(), i(c)
  }, t[19] = c, t[20] = i, t[21] = p, t[22] = tt;
  else tt = t[22];
  let ot;
  if (t[23] === S) ot = {
    context: "ThemePicker"
  }, t[23] = ot;
  else ot = t[23];
  ze("theme:editCustom", tt, ot);
  let nt, it, lt, st, at, rt, mt;
  if (t[24] === S) nt = {
    label: "Auto (match terminal)",
    value: "auto"
  }, it = {
    label: "Dark mode",
    value: "dark"
  }, lt = {
    label: "Light mode",
    value: "light"
  }, st = {
    label: "Dark mode (colorblind-friendly)",
    value: "dark-daltonized"
  }, at = {
    label: "Light mode (colorblind-friendly)",
    value: "light-daltonized"
  }, rt = {
    label: "Dark mode (ANSI colors only)",
    value: "dark-ansi"
  }, mt = {
    label: "Light mode (ANSI colors only)",
    value: "light-ansi"
  }, t[24] = nt, t[25] = it, t[26] = lt, t[27] = st, t[28] = at, t[29] = rt, t[30] = mt;
  else nt = t[24], it = t[25], lt = t[26], st = t[27], at = t[28], rt = t[29], mt = t[30];
  let ct;
  if (t[31] !== x || t[32] !== i) {
    let h;
    if (t[34] !== i) h = i ? [{
      label: "New custom theme\u2026",
      value: d
    }] : [], t[34] = i, t[35] = h;
    else h = t[35];
    ct = [nt, it, lt, st, at, rt, mt, ...x.map($t), ...h];
    t[31] = x, t[32] = i, t[33] = ct
  } else ct = t[33];
  let _ = ct,
    h;
  if (t[36] !== k) h = k ? e(n, {
    children: "Let's get started."
  }) : e(n, {
    bold: !0,
    color: "permission",
    children: "Theme"
  }), t[36] = k, t[37] = h;
  else h = t[37];
  let ht;
  if (t[38] === S) ht = e(n, {
    bold: !0,
    children: "Choose the text style that looks best with your terminal"
  }), t[38] = ht;
  else ht = t[38];
  let E;
  if (t[39] !== l || t[40] !== f) E = l && !f && e(n, {
    dimColor: !0,
    children: l
  }), t[39] = l, t[40] = f, t[41] = E;
  else E = t[41];
  let B;
  if (t[42] !== E) B = r(s, {
    flexDirection: "column",
    children: [ht, E]
  }), t[42] = E, t[43] = B;
  else B = t[43];
  let U;
  if (t[44] !== o || t[45] !== ge) U = (xe) => {
    if (Rt(xe), xe === d) o();
    else ge(xe)
  }, t[44] = o, t[45] = ge, t[46] = U;
  else U = t[46];
  let G;
  if (t[47] !== o || t[48] !== i || t[49] !== se || t[50] !== p) G = (gt) => {
    if (gt === d) {
      o(), i?.(void 0);
      return
    }
    p(), se(gt)
  }, t[47] = o, t[48] = i, t[49] = se, t[50] = p, t[51] = G;
  else G = t[51];
  let M;
  if (t[52] !== L || t[53] !== o || t[54] !== m) M = m ? L : async () => {
    o(), await Kn(0)
  }, t[52] = L, t[53] = o, t[54] = m, t[55] = M;
  else M = t[55];
  const Te = Math.min(_.length, 12);
  let X;
  if (t[56] !== U || t[57] !== G || t[58] !== M || t[59] !== Te || t[60] !== _ || t[61] !== C) X = e(Fe, {
    options: _,
    onFocus: U,
    onChange: G,
    onCancel: M,
    visibleOptionCount: Te,
    defaultValue: C,
    defaultFocusValue: C
  }), t[56] = U, t[57] = G, t[58] = M, t[59] = Te, t[60] = _, t[61] = C, t[62] = X;
  else X = t[62];
  let z;
  if (t[63] !== h || t[64] !== B || t[65] !== X) z = r(s, {
    flexDirection: "column",
    gap: 1,
    children: [h, B, X]
  }), t[63] = h, t[64] = B, t[65] = X, t[66] = z;
  else z = t[66];
  let dt;
  if (t[67] === S) dt = {
    oldStart: 1,
    newStart: 1,
    oldLines: 3,
    newLines: 3,
    lines: [" function greet() {", '-  console.log("Hello, World!");', '+  console.log("Hello, Claude!");', " }"]
  }, t[67] = dt;
  else dt = t[67];
  const we = It - 6;
  let O;
  if (t[68] !== we) O = e(sS, {
    paddingX: 0,
    children: e(X2, {
      patch: dt,
      dim: !1,
      filePath: "demo.js",
      firstLine: null,
      width: we
    })
  }), t[68] = we, t[69] = O;
  else O = t[69];
  const Se = he === "env" ? `Syntax highlighting disabled (via CLAUDE_CODE_SYNTAX_HIGHLIGHT=${a.CLAUDE_CODE_SYNTAX_HIGHLIGHT})` : D ? `Syntax highlighting disabled (${ue} to enable)` : H ? `Syntax theme: ${H.theme}${H.source?` (from ${H.source})`:""} (${ue} to disable)` : `Syntax highlighting enabled (${ue} to disable)`;
  let Y;
  if (t[70] !== Se) Y = r(n, {
    dimColor: !0,
    children: [" ", Se]
  }), t[70] = Se, t[71] = Y;
  else Y = t[71];
  let j;
  if (t[72] !== O || t[73] !== Y) j = r(s, {
    flexDirection: "column",
    width: "100%",
    children: [O, Y]
  }), t[72] = O, t[73] = Y, t[74] = j;
  else j = t[74];
  let ut;
  if (t[75] !== z || t[76] !== j) ut = r(s, {
    flexDirection: "column",
    gap: 1,
    children: [z, j]
  }), t[75] = z, t[76] = j, t[77] = ut;
  else ut = t[77];
  let q = ut;
  if (!k) {
    let J;
    if (t[78] !== q) J = e(s, {
      flexDirection: "column",
      children: q
    }), t[78] = q, t[79] = J;
    else J = t[79];
    let Q;
    if (t[80] !== l || t[81] !== f) Q = f && l && e(s, {
      marginLeft: 3,
      children: e(n, {
        dimColor: !0,
        children: l
      })
    }), t[80] = l, t[81] = f, t[82] = Q;
    else Q = t[82];
    let Z;
    if (t[83] !== pe || t[84] !== A || t[85] !== c || t[86] !== re || t[87] !== i || t[88] !== m) Z = !re && e(s, {
      children: e(n, {
        dimColor: !0,
        italic: !0,
        children: A.pending ? r(V, {
          children: ["Press ", A.keyName, " again to", " ", m ? "cancel" : "exit"]
        }) : r(ye, {
          children: [e(F, {
            chord: "enter",
            action: "select"
          }), c && i && e(F, {
            chord: pe,
            action: "edit"
          }), e(F, {
            chord: "escape",
            action: "cancel"
          })]
        })
      })
    }), t[83] = pe, t[84] = A, t[85] = c, t[86] = re, t[87] = i, t[88] = m, t[89] = Z;
    else Z = t[89];
    let K;
    if (t[90] !== Q || t[91] !== Z) K = r(s, {
      marginTop: 1,
      children: [Q, Z]
    }), t[90] = Q, t[91] = Z, t[92] = K;
    else K = t[92];
    let ft;
    if (t[93] !== J || t[94] !== K) ft = r(V, {
      children: [J, K]
    }), t[93] = J, t[94] = K, t[95] = ft;
    else ft = t[95];
    return ft
  }
  return q
}
export {
  Pbe
};
