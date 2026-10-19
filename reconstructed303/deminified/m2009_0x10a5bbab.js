// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { w } from "B:/~BUN/root/chunk-rysqv8v1.js";
import { ZS } from "B:/~BUN/root/chunk-b900np4s.js";
import { s, n, Fl, _8 } from "B:/~BUN/root/chunk-damrp3r8.js";
import { a } from "B:/~BUN/root/chunk-yt0knyw7.js";
import { DF } from "B:/~BUN/root/chunk-ps74es0g.js";
import { rt } from "B:/~BUN/root/chunk-pw5vpw1q.js";
import { In } from "B:/~BUN/root/chunk-1gpjpba6.js";
import { Cs } from "B:/~BUN/root/chunk-cbtzavb5.js";
import { Mct } from "B:/~BUN/root/chunk-d69870x4.js";
import { Oe, br, r7, Qwn, f_e } from "B:/~BUN/root/chunk-g5gf7tps.js";
import { P7, BI } from "B:/~BUN/root/chunk-gyjdf492.js";
import { qo } from "B:/~BUN/root/chunk-327wfkv3.js";
import { Te } from "B:/~BUN/root/chunk-smy4yvhm.js";
import { V, Un } from "B:/~BUN/root/chunk-tgzmva3g.js";
import { Yn } from "B:/~BUN/root/chunk-9grc6xh0.js";
import { Se } from "B:/~BUN/root/chunk-7dpyfa5r.js";
import { q } from "B:/~BUN/root/chunk-bf7csy4f.js";
import { vV, ent, kV, tn } from "B:/~BUN/root/chunk-2fh8t7m0.js";
import { Int, ft } from "B:/~BUN/root/chunk-jh7dpafw.js";
import { o2t, Cqr } from "B:/~BUN/root/chunk-mq92kyt9.js";
import { c8 } from "B:/~BUN/root/chunk-satnn8a8.js";
import { Ol } from "B:/~BUN/root/chunk-n5g6ryax.js";
import { Q, e, r } from "B:/~BUN/root/chunk-x2hkxw5q.js";
import { Ee, P, A, y, B } from "B:/~BUN/root/chunk-5hr2ysa5.js";
import { S } from "B:/~BUN/root/chunk-ef0msk7r.js";
B();
function fo(Do) {
  return Do.settings.syntaxHighlightingDisabled;
}
function xo(fe) {
  return {
    label: fe.name,
    origin: fe.source === "user" ? "custom" : `from ${fe.source.plugin}`,
    value: P7(fe.slug)
  };
}
var value = "__new_custom_theme__";
function _Le(vo) {
  let t = w(109),
    {
      onThemeSelect: onThemeSelect,
      showIntroText: showIntroText,
      helpText: helpText,
      showHelpTextBelow: showHelpTextBelow,
      hideEscToCancel: hideEscToCancel,
      skipExitHandling: skipExitHandling,
      onCancel: onCancel,
      onCustomTheme: onCustomTheme
    } = vo,
    g = showIntroText === void 0 ? !1 : showIntroText,
    children = helpText === void 0 ? "" : helpText,
    x = showHelpTextBelow === void 0 ? !1 : showHelpTextBelow,
    z = hideEscToCancel === void 0 ? !1 : hideEscToCancel,
    p = skipExitHandling === void 0 ? !1 : skipExitHandling,
    {
      storageV5: storageV5
    } = Oe(),
    [Me] = br(),
    v = r7(),
    {
      columns: columns
    } = Te(),
    xt;
  if (t[0] === S) xt = o2t(), t[0] = xt;else xt = t[0];
  let Le = xt,
    vt;
  if (t[1] !== Me) vt = Le === null ? Cqr(Me) : null, t[1] = Me, t[2] = vt;else vt = t[2];
  let W = vt,
    {
      setPreviewTheme: setPreviewTheme,
      cancelPreview: cancelPreview
    } = Qwn(),
    d = A(void 0),
    Tt;
  if (t[3] !== cancelPreview) Tt = wo => {
    let wt = Symbol("commit");
    d.current = wt;
    let Ct = () => {
      if (d.current === wt) d.current = void 0, cancelPreview();
    };
    Promise.resolve(wo).then(Ct, Ct);
  }, t[3] = cancelPreview, t[4] = Tt;else Tt = t[4];
  let T = Tt,
    bt,
    St;
  if (t[5] !== cancelPreview) St = () => () => {
    if (d.current === void 0) cancelPreview();
  }, bt = [cancelPreview], t[5] = cancelPreview, t[6] = bt, t[7] = St;else bt = t[6], St = t[7];
  P(St, bt);
  let Y = V(fo) ?? !1,
    Ae = Un();
  DF("ThemePicker");
  let Re = Cs("theme:toggleSyntaxHighlighting", "ThemePicker", "ctrl+t"),
    yt;
  if (t[8] !== Ae || t[9] !== storageV5 || t[10] !== Y) yt = () => {
    if (Le === null) {
      let syntaxHighlightingDisabled = !Y;
      In("userSettings", {
        syntaxHighlightingDisabled: syntaxHighlightingDisabled
      }, void 0, storageV5), Ae(kt => ({
        ...kt,
        settings: {
          ...kt.settings,
          syntaxHighlightingDisabled: syntaxHighlightingDisabled
        }
      }));
    }
  }, t[8] = Ae, t[9] = storageV5, t[10] = Y, t[11] = yt;else yt = t[11];
  let Ht;
  if (t[12] === S) Ht = {
    context: "ThemePicker"
  }, t[12] = Ht;else Ht = t[12];
  rt("theme:toggleSyntaxHighlighting", yt, Ht);
  let Ot;
  if (t[13] !== cancelPreview || t[14] !== onCancel) Ot = () => {
    d.current = void 0, cancelPreview(), onCancel?.();
  }, t[13] = cancelPreview, t[14] = onCancel, t[15] = Ot;else Ot = t[15];
  let j = Ot,
    Dt;
  if (t[16] !== j || t[17] !== cancelPreview || t[18] !== p) Dt = p ? j : async () => {
    cancelPreview(), await Yn(0);
  }, t[16] = j, t[17] = cancelPreview, t[18] = p, t[19] = Dt;else Dt = t[19];
  let It;
  if (t[20] === S) It = {
    context: "Select"
  }, t[20] = It;else It = t[20];
  rt("select:cancel", Dt, It);
  let J = qo(p ? j : void 0),
    {
      customThemes: customThemes
    } = f_e(),
    Et,
    Mt,
    Lt,
    _t,
    At,
    Rt,
    Bt;
  if (t[21] === S) Et = {
    label: "Auto (match terminal)",
    value: "auto"
  }, Mt = {
    label: "Dark mode",
    value: "dark"
  }, Lt = {
    label: "Light mode",
    value: "light"
  }, _t = {
    label: "Dark mode (colorblind-friendly)",
    value: "dark-daltonized"
  }, At = {
    label: "Light mode (colorblind-friendly)",
    value: "light-daltonized"
  }, Rt = {
    label: "Dark mode (ANSI colors only)",
    value: "dark-ansi"
  }, Bt = {
    label: "Light mode (ANSI colors only)",
    value: "light-ansi"
  }, t[21] = Et, t[22] = Mt, t[23] = Lt, t[24] = _t, t[25] = At, t[26] = Rt, t[27] = Bt;else Et = t[21], Mt = t[22], Lt = t[23], _t = t[24], At = t[25], Rt = t[26], Bt = t[27];
  let Nt;
  if (t[28] !== customThemes || t[29] !== onCustomTheme) {
    let I;
    if (t[31] !== onCustomTheme) I = onCustomTheme ? [{
      label: "New custom theme\u2026",
      value: value
    }] : [], t[31] = onCustomTheme, t[32] = I;else I = t[32];
    Nt = [Et, Mt, Lt, _t, At, Rt, Bt, ...customThemes.map(xo), ...I];
    t[28] = customThemes, t[29] = onCustomTheme, t[30] = Nt;
  } else Nt = t[30];
  let l = Nt,
    Z = l.findIndex(item => item.value === v),
    [b, $t] = y(l[Math.max(0, Z)]?.value ?? v),
    [bo, So] = y(!1),
    [Ut, yo] = y(Z !== -1);
  if (!Ut && !bo && Z !== -1) yo(!0), $t(v);
  let I;
  if (t[33] !== b) I = BI(b), t[33] = b, t[34] = I;else I = t[34];
  let K = I,
    Ft;
  if (t[35] !== customThemes || t[36] !== K) Ft = K ? customThemes.find(item => item.slug === K) : void 0, t[35] = customThemes, t[36] = K, t[37] = Ft;else Ft = t[37];
  let f = Ft,
    chord = Cs("theme:editCustom", "ThemePicker", "ctrl+e"),
    Vt;
  if (t[38] !== f || t[39] !== T || t[40] !== onCustomTheme) Vt = () => {
    if (f && onCustomTheme && d.current === void 0) T(onCustomTheme(f));
  }, t[38] = f, t[39] = T, t[40] = onCustomTheme, t[41] = Vt;else Vt = t[41];
  let Gt;
  if (t[42] === S) Gt = {
    context: "ThemePicker"
  }, t[42] = Gt;else Gt = t[42];
  rt("theme:editCustom", Vt, Gt);
  let h = kV(),
    E = Ee(ZS),
    ref = A(null),
    zt;
  if (t[43] !== h) zt = () => {
    let current = ref.current;
    if (current === null) {
      return 0;
    }
    let ee = h?.box.current ?? current;
    while (h === null && ee.parentNode !== void 0) ee = ee.parentNode;
    return Math.max(0, _8(current, ee));
  }, t[43] = h, t[44] = zt;else zt = t[44];
  let ko = Fl(zt),
    te = g ? 0 : ko + (z ? 1 : 0),
    oe;
  if (t[45] !== g) oe = g ? e(n, {
    children: "Let's get started."
  }) : e(n, {
    bold: !0,
    color: "permission",
    children: "Theme"
  }), t[45] = g, t[46] = oe;else oe = t[46];
  let Wt;
  if (t[47] === S) Wt = e(n, {
    bold: !0,
    children: "Choose the text style that looks best with your terminal"
  }), t[47] = Wt;else Wt = t[47];
  let ne;
  if (t[48] !== children || t[49] !== x) ne = children && !x && e(n, {
    dimColor: !0,
    children: children
  }), t[48] = children, t[49] = x, t[50] = ne;else ne = t[50];
  let ie;
  if (t[51] !== ne) ie = r(s, {
    flexDirection: "column",
    children: [Wt, ne]
  }), t[51] = ne, t[52] = ie;else ie = t[52];
  const $e = Ut ? "on-saved-theme" : "on-first-theme",
    defaultFocusIndex = Math.max(0, Z);
  let onFocus;
  if (t[53] !== cancelPreview || t[54] !== b || t[55] !== setPreviewTheme || t[56] !== l) onFocus = Ho => {
    let M = l[Ho]?.value;
    if (M === void 0 || M === b || d.current !== void 0) {
      return;
    }
    if ($t(M), So(!0), Mct(M)) setPreviewTheme(M);else cancelPreview();
  }, t[53] = cancelPreview, t[54] = b, t[55] = setPreviewTheme, t[56] = l, t[57] = onFocus;else onFocus = t[57];
  let onSelect;
  if (t[58] !== cancelPreview || t[59] !== T || t[60] !== onCustomTheme || t[61] !== onThemeSelect || t[62] !== l) onSelect = Oo => {
    let Fe = l[Oo]?.value;
    if (Fe === void 0 || d.current !== void 0) {
      return;
    }
    if (!Mct(Fe)) {
      cancelPreview(), onCustomTheme?.(void 0);
      return;
    }
    T(onThemeSelect(Fe));
  }, t[58] = cancelPreview, t[59] = T, t[60] = onCustomTheme, t[61] = onThemeSelect, t[62] = l, t[63] = onSelect;else onSelect = t[63];
  let children_2;
  if (t[64] !== l || t[65] !== v) children_2 = l.map(item => e(tn.Item, {
    label: item.label,
    icon: item.value === v ? e(ft, {
      status: "success",
      "aria-label": "current:"
    }) : e(n, {
      "aria-hidden": !0,
      children: " ".repeat(Int())
    }),
    meta: item.origin === void 0 ? void 0 : [item.origin]
  }, item.value)), t[64] = l, t[65] = v, t[66] = children_2;else children_2 = t[66];
  let re;
  if (t[67] !== $e || t[68] !== defaultFocusIndex || t[69] !== onFocus || t[70] !== onSelect || t[71] !== children_2) re = e(tn, {
    defaultFocusIndex: defaultFocusIndex,
    onFocus: onFocus,
    onSelect: onSelect,
    children: children_2
  }, $e), t[67] = $e, t[68] = defaultFocusIndex, t[69] = onFocus, t[70] = onSelect, t[71] = children_2, t[72] = re;else re = t[72];
  let me;
  if (t[73] !== oe || t[74] !== ie || t[75] !== re) me = r(s, {
    flexDirection: "column",
    gap: 1,
    children: [oe, ie, re]
  }), t[73] = oe, t[74] = ie, t[75] = re, t[76] = me;else me = t[76];
  let patch;
  if (t[77] === S) patch = {
    oldStart: 1,
    newStart: 1,
    oldLines: 3,
    newLines: 3,
    lines: [" function greet() {", '-  console.log("Hello, World!");', '+  console.log("Hello, Claude!");', " }"]
  }, t[77] = patch;else patch = t[77];
  const width = columns - 6;
  let ce;
  if (t[78] !== width) ce = e(Ol, {
    paddingX: 0,
    children: e(c8, {
      patch: patch,
      dim: !1,
      filePath: "demo.js",
      firstLine: null,
      width: width
    })
  }), t[78] = width, t[79] = ce;else ce = t[79];
  const Ge = Le === "env" ? `Syntax highlighting disabled (via CLAUDE_CODE_SYNTAX_HIGHLIGHT=${a.CLAUDE_CODE_SYNTAX_HIGHLIGHT})` : Y ? `Syntax highlighting disabled (${Re} to enable)` : W ? `Syntax theme: ${W.theme}${W.source ? ` (from ${W.source})` : ""} (${Re} to disable)` : `Syntax highlighting enabled (${Re} to disable)`;
  let de;
  if (t[80] !== Ge) de = r(n, {
    dimColor: !0,
    children: [" ", Ge]
  }), t[80] = Ge, t[81] = de;else de = t[81];
  let he;
  if (t[82] !== ce || t[83] !== de) he = r(s, {
    flexDirection: "column",
    width: "100%",
    children: [ce, de]
  }), t[82] = ce, t[83] = de, t[84] = he;else he = t[84];
  let jt;
  if (t[85] !== me || t[86] !== he) jt = r(s, {
    ref: ref,
    flexDirection: "column",
    gap: 1,
    children: [me, he]
  }), t[85] = me, t[86] = he, t[87] = jt;else jt = t[87];
  let Xe = jt,
    value_2;
  if (t[88] !== h?.rows || t[89] !== te || t[90] !== E) value_2 = E && {
    ...E,
    rows: Math.max(0, (h?.rows ?? E.rows) - te)
  }, t[88] = h?.rows, t[89] = te, t[90] = E, t[91] = value_2;else value_2 = t[91];
  const reserve = (h?.reserve ?? vV) + te;
  let ge;
  if (t[92] !== chord || t[93] !== J || t[94] !== f || t[95] !== children || t[96] !== z || t[97] !== onCustomTheme || t[98] !== x || t[99] !== g || t[100] !== p) ge = !g && r(s, {
    marginTop: 1,
    children: [x && children && e(s, {
      marginLeft: 3,
      children: e(n, {
        dimColor: !0,
        children: children
      })
    }), !z && e(s, {
      children: e(n, {
        dimColor: !0,
        italic: !0,
        children: J.pending ? r(Q, {
          children: ["Press ", J.keyName, " again to", " ", p ? "cancel" : "exit"]
        }) : r(Se, {
          children: [e(q, {
            chord: "enter",
            action: "select"
          }), f && onCustomTheme && e(q, {
            chord: chord,
            action: "edit"
          }), e(q, {
            chord: "escape",
            action: "cancel"
          })]
        })
      })
    })]
  }), t[92] = chord, t[93] = J, t[94] = f, t[95] = children, t[96] = z, t[97] = onCustomTheme, t[98] = x, t[99] = g, t[100] = p, t[101] = ge;else ge = t[101];
  let children_3;
  if (t[102] !== Xe || t[103] !== reserve || t[104] !== ge) children_3 = r(ent, {
    reserve: reserve,
    children: [Xe, ge]
  }), t[102] = Xe, t[103] = reserve, t[104] = ge, t[105] = children_3;else children_3 = t[105];
  let qt;
  if (t[106] !== value_2 || t[107] !== children_3) qt = e(ZS, {
    value: value_2,
    children: children_3
  }), t[106] = value_2, t[107] = children_3, t[108] = qt;else qt = t[108];
  return qt;
}
export { _Le };