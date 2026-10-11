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
import { lO } from "B:/~BUN/root/chunk-7nc4t0q7.js";
import { ze } from "B:/~BUN/root/chunk-r2yrqvry.js";
import { ln } from "B:/~BUN/root/chunk-3rzkfay5.js";
import { os } from "B:/~BUN/root/chunk-0d8a76zs.js";
import { Zn, ooe, gVt, soe } from "B:/~BUN/root/chunk-1x7a47hz.js";
import { ke } from "B:/~BUN/root/chunk-kss0wzj5.js";
import { b7, rR } from "B:/~BUN/root/chunk-tq1hs216.js";
import { Wr } from "B:/~BUN/root/chunk-5r1x61tc.js";
import { ve } from "B:/~BUN/root/chunk-cxqcvpm0.js";
import { W, dn } from "B:/~BUN/root/chunk-h23911wn.js";
import { Kn } from "B:/~BUN/root/chunk-3jyp964r.js";
import { Fe } from "B:/~BUN/root/chunk-bt71g93n.js";
import { F } from "B:/~BUN/root/chunk-acd2tycn.js";
import { ye } from "B:/~BUN/root/chunk-41008fhm.js";
import { Vyt, mer } from "B:/~BUN/root/chunk-93kq3f21.js";
import { X2 } from "B:/~BUN/root/chunk-q7jerdh3.js";
import { sS } from "B:/~BUN/root/chunk-3erthd76.js";
import { V, e, r } from "B:/~BUN/root/chunk-qkvevvte.js";
import { R, g, N } from "B:/~BUN/root/chunk-rnj6pcz5.js";
import { S } from "B:/~BUN/root/chunk-yv67t8hr.js";
N();
function Lt(Et) {
  return Et.settings.syntaxHighlightingDisabled;
}
function $t(b) {
  return {
    label: b.source === "user" ? `${b.name} (custom)` : `${b.name} (from ${b.source.plugin})`,
    value: b7(b.slug)
  };
}
var value = "__new_custom_theme__";
function Pbe(At) {
  let t = w(96),
    {
      onThemeSelect: onThemeSelect,
      showIntroText: showIntroText,
      helpText: helpText,
      showHelpTextBelow: showHelpTextBelow,
      hideEscToCancel: hideEscToCancel,
      skipExitHandling: skipExitHandling,
      onCancel: onCancel,
      onCustomTheme: onCustomTheme
    } = At,
    k = showIntroText === void 0 ? !1 : showIntroText,
    children = helpText === void 0 ? "" : helpText,
    f = showHelpTextBelow === void 0 ? !1 : showHelpTextBelow,
    re = hideEscToCancel === void 0 ? !1 : hideEscToCancel,
    m = skipExitHandling === void 0 ? !1 : skipExitHandling,
    {
      storageV5: storageV5
    } = ke(),
    [ce] = Zn(),
    C = ooe(),
    {
      columns: columns
    } = ve(),
    Xe;
  if (t[0] === S) Xe = Vyt(), t[0] = Xe;else Xe = t[0];
  let he = Xe,
    Oe;
  if (t[1] !== ce) Oe = he === null ? mer(ce) : null, t[1] = ce, t[2] = Oe;else Oe = t[2];
  let H = Oe,
    {
      setPreviewTheme: setPreviewTheme,
      savePreview: savePreview,
      cancelPreview: cancelPreview
    } = gVt(),
    Ye,
    je;
  if (t[3] !== cancelPreview) Ye = () => () => cancelPreview(), je = [cancelPreview], t[3] = cancelPreview, t[4] = Ye, t[5] = je;else Ye = t[4], je = t[5];
  R(Ye, je);
  let D = W(Lt) ?? !1,
    de = dn();
  lO("ThemePicker");
  let ue = os("theme:toggleSyntaxHighlighting", "ThemePicker", "ctrl+t"),
    qe;
  if (t[6] !== de || t[7] !== storageV5 || t[8] !== D) qe = () => {
    if (he === null) {
      let syntaxHighlightingDisabled = !D;
      ln("userSettings", {
        syntaxHighlightingDisabled: syntaxHighlightingDisabled
      }, void 0, storageV5), de(Qe => ({
        ...Qe,
        settings: {
          ...Qe.settings,
          syntaxHighlightingDisabled: syntaxHighlightingDisabled
        }
      }));
    }
  }, t[6] = de, t[7] = storageV5, t[8] = D, t[9] = qe;else qe = t[9];
  let We;
  if (t[10] === S) We = {
    context: "ThemePicker"
  }, t[10] = We;else We = t[10];
  ze("theme:toggleSyntaxHighlighting", qe, We);
  let Ze;
  if (t[11] !== cancelPreview || t[12] !== onCancel) Ze = () => {
    cancelPreview(), onCancel?.();
  }, t[11] = cancelPreview, t[12] = onCancel, t[13] = Ze;else Ze = t[13];
  let L = Ze,
    A = Wr(m ? L : void 0),
    {
      customThemes: customThemes
    } = soe(),
    [fe, Rt] = g(C),
    Ke;
  if (t[14] !== fe) Ke = rR(fe), t[14] = fe, t[15] = Ke;else Ke = t[15];
  let I = Ke,
    et;
  if (t[16] !== customThemes || t[17] !== I) et = I ? customThemes.find(item => item.slug === I) : void 0, t[16] = customThemes, t[17] = I, t[18] = et;else et = t[18];
  let c = et,
    chord = os("theme:editCustom", "ThemePicker", "ctrl+e"),
    tt;
  if (t[19] !== c || t[20] !== onCustomTheme || t[21] !== savePreview) tt = () => {
    if (c && onCustomTheme) savePreview(), onCustomTheme(c);
  }, t[19] = c, t[20] = onCustomTheme, t[21] = savePreview, t[22] = tt;else tt = t[22];
  let ot;
  if (t[23] === S) ot = {
    context: "ThemePicker"
  }, t[23] = ot;else ot = t[23];
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
  }, t[24] = nt, t[25] = it, t[26] = lt, t[27] = st, t[28] = at, t[29] = rt, t[30] = mt;else nt = t[24], it = t[25], lt = t[26], st = t[27], at = t[28], rt = t[29], mt = t[30];
  let ct;
  if (t[31] !== customThemes || t[32] !== onCustomTheme) {
    let h;
    if (t[34] !== onCustomTheme) h = onCustomTheme ? [{
      label: "New custom theme\u2026",
      value: value
    }] : [], t[34] = onCustomTheme, t[35] = h;else h = t[35];
    ct = [nt, it, lt, st, at, rt, mt, ...customThemes.map($t), ...h];
    t[31] = customThemes, t[32] = onCustomTheme, t[33] = ct;
  } else ct = t[33];
  let options = ct,
    h;
  if (t[36] !== k) h = k ? e(n, {
    children: "Let's get started."
  }) : e(n, {
    bold: !0,
    color: "permission",
    children: "Theme"
  }), t[36] = k, t[37] = h;else h = t[37];
  let ht;
  if (t[38] === S) ht = e(n, {
    bold: !0,
    children: "Choose the text style that looks best with your terminal"
  }), t[38] = ht;else ht = t[38];
  let E;
  if (t[39] !== children || t[40] !== f) E = children && !f && e(n, {
    dimColor: !0,
    children: children
  }), t[39] = children, t[40] = f, t[41] = E;else E = t[41];
  let B;
  if (t[42] !== E) B = r(s, {
    flexDirection: "column",
    children: [ht, E]
  }), t[42] = E, t[43] = B;else B = t[43];
  let onFocus;
  if (t[44] !== cancelPreview || t[45] !== setPreviewTheme) onFocus = xe => {
    if (Rt(xe), xe === value) cancelPreview();else setPreviewTheme(xe);
  }, t[44] = cancelPreview, t[45] = setPreviewTheme, t[46] = onFocus;else onFocus = t[46];
  let onChange;
  if (t[47] !== cancelPreview || t[48] !== onCustomTheme || t[49] !== onThemeSelect || t[50] !== savePreview) onChange = gt => {
    if (gt === value) {
      cancelPreview(), onCustomTheme?.(void 0);
      return;
    }
    savePreview(), onThemeSelect(gt);
  }, t[47] = cancelPreview, t[48] = onCustomTheme, t[49] = onThemeSelect, t[50] = savePreview, t[51] = onChange;else onChange = t[51];
  let onCancel_2;
  if (t[52] !== L || t[53] !== cancelPreview || t[54] !== m) onCancel_2 = m ? L : async () => {
    cancelPreview(), await Kn(0);
  }, t[52] = L, t[53] = cancelPreview, t[54] = m, t[55] = onCancel_2;else onCancel_2 = t[55];
  const visibleOptionCount = Math.min(options.length, 12);
  let X;
  if (t[56] !== onFocus || t[57] !== onChange || t[58] !== onCancel_2 || t[59] !== visibleOptionCount || t[60] !== options || t[61] !== C) X = e(Fe, {
    options: options,
    onFocus: onFocus,
    onChange: onChange,
    onCancel: onCancel_2,
    visibleOptionCount: visibleOptionCount,
    defaultValue: C,
    defaultFocusValue: C
  }), t[56] = onFocus, t[57] = onChange, t[58] = onCancel_2, t[59] = visibleOptionCount, t[60] = options, t[61] = C, t[62] = X;else X = t[62];
  let z;
  if (t[63] !== h || t[64] !== B || t[65] !== X) z = r(s, {
    flexDirection: "column",
    gap: 1,
    children: [h, B, X]
  }), t[63] = h, t[64] = B, t[65] = X, t[66] = z;else z = t[66];
  let patch;
  if (t[67] === S) patch = {
    oldStart: 1,
    newStart: 1,
    oldLines: 3,
    newLines: 3,
    lines: [" function greet() {", '-  console.log("Hello, World!");', '+  console.log("Hello, Claude!");', " }"]
  }, t[67] = patch;else patch = t[67];
  const width = columns - 6;
  let O;
  if (t[68] !== width) O = e(sS, {
    paddingX: 0,
    children: e(X2, {
      patch: patch,
      dim: !1,
      filePath: "demo.js",
      firstLine: null,
      width: width
    })
  }), t[68] = width, t[69] = O;else O = t[69];
  const Se = he === "env" ? `Syntax highlighting disabled (via CLAUDE_CODE_SYNTAX_HIGHLIGHT=${a.CLAUDE_CODE_SYNTAX_HIGHLIGHT})` : D ? `Syntax highlighting disabled (${ue} to enable)` : H ? `Syntax theme: ${H.theme}${H.source ? ` (from ${H.source})` : ""} (${ue} to disable)` : `Syntax highlighting enabled (${ue} to disable)`;
  let Y;
  if (t[70] !== Se) Y = r(n, {
    dimColor: !0,
    children: [" ", Se]
  }), t[70] = Se, t[71] = Y;else Y = t[71];
  let j;
  if (t[72] !== O || t[73] !== Y) j = r(s, {
    flexDirection: "column",
    width: "100%",
    children: [O, Y]
  }), t[72] = O, t[73] = Y, t[74] = j;else j = t[74];
  let ut;
  if (t[75] !== z || t[76] !== j) ut = r(s, {
    flexDirection: "column",
    gap: 1,
    children: [z, j]
  }), t[75] = z, t[76] = j, t[77] = ut;else ut = t[77];
  let children_2 = ut;
  if (!k) {
    let J;
    if (t[78] !== children_2) J = e(s, {
      flexDirection: "column",
      children: children_2
    }), t[78] = children_2, t[79] = J;else J = t[79];
    let Q;
    if (t[80] !== children || t[81] !== f) Q = f && children && e(s, {
      marginLeft: 3,
      children: e(n, {
        dimColor: !0,
        children: children
      })
    }), t[80] = children, t[81] = f, t[82] = Q;else Q = t[82];
    let Z;
    if (t[83] !== chord || t[84] !== A || t[85] !== c || t[86] !== re || t[87] !== onCustomTheme || t[88] !== m) Z = !re && e(s, {
      children: e(n, {
        dimColor: !0,
        italic: !0,
        children: A.pending ? r(V, {
          children: ["Press ", A.keyName, " again to", " ", m ? "cancel" : "exit"]
        }) : r(ye, {
          children: [e(F, {
            chord: "enter",
            action: "select"
          }), c && onCustomTheme && e(F, {
            chord: chord,
            action: "edit"
          }), e(F, {
            chord: "escape",
            action: "cancel"
          })]
        })
      })
    }), t[83] = chord, t[84] = A, t[85] = c, t[86] = re, t[87] = onCustomTheme, t[88] = m, t[89] = Z;else Z = t[89];
    let K;
    if (t[90] !== Q || t[91] !== Z) K = r(s, {
      marginTop: 1,
      children: [Q, Z]
    }), t[90] = Q, t[91] = Z, t[92] = K;else K = t[92];
    let ft;
    if (t[93] !== J || t[94] !== K) ft = r(V, {
      children: [J, K]
    }), t[93] = J, t[94] = K, t[95] = ft;else ft = t[95];
    return ft;
  }
  return children_2;
}
export { Pbe };