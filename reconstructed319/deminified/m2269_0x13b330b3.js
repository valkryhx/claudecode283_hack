// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { S } from "B:/~BUN/root/chunk-bn4bjw9d.js";
import { rE } from "B:/~BUN/root/chunk-q8sf8fhe.js";
import { s, n, Ia, qN } from "B:/~BUN/root/chunk-qey16aan.js";
import { i } from "B:/~BUN/root/chunk-j6pt0v41.js";
import { zj } from "B:/~BUN/root/chunk-7g0t7h3t.js";
import { pt } from "B:/~BUN/root/chunk-v95bwhaa.js";
import { qn } from "B:/~BUN/root/chunk-7wn6n2hd.js";
import { wi } from "B:/~BUN/root/chunk-hfz1e87n.js";
import { WMt } from "B:/~BUN/root/chunk-apgsnbqk.js";
import { Fe, Br, fle, j5n, zPe } from "B:/~BUN/root/chunk-vxjrk7vf.js";
import { Nle, oF } from "B:/~BUN/root/chunk-gh4155re.js";
import { Ws } from "B:/~BUN/root/chunk-x2k0mb6b.js";
import { Re } from "B:/~BUN/root/chunk-qr2xxkqa.js";
import { G, ar } from "B:/~BUN/root/chunk-tmdrwqnv.js";
import { Ce } from "B:/~BUN/root/chunk-cync0e08.js";
import { Y } from "B:/~BUN/root/chunk-c1v460b9.js";
import { Tn } from "B:/~BUN/root/chunk-md70d2gd.js";
import { mK, Bvt, Bj } from "B:/~BUN/root/chunk-6651s0bp.js";
import { rEt, Tt } from "B:/~BUN/root/chunk-dw9hahea.js";
import { Umn, dHo } from "B:/~BUN/root/chunk-gappgpaq.js";
import { Ene } from "B:/~BUN/root/chunk-cyz63hzp.js";
import { Ul } from "B:/~BUN/root/chunk-dr6mv0j8.js";
import { fa } from "B:/~BUN/root/chunk-t99rgr48.js";
import { ne, e, r } from "B:/~BUN/root/chunk-t16eynda.js";
import { ve, O, A, y, j } from "B:/~BUN/root/chunk-czy5r8bc.js";
import { w } from "B:/~BUN/root/chunk-4qfwb3rf.js";
j();
function mo(So) {
  return So.settings.syntaxHighlightingDisabled;
}
function co(ge) {
  return {
    label: ge.name,
    origin: ge.source === "user" ? "custom" : `from ${ge.source.plugin}`,
    value: Nle(ge.slug)
  };
}
var value = "__new_custom_theme__",
  children_2 = "Choose the text style that looks best with your terminal";
function pYe(ho) {
  let t = S(98),
    {
      onThemeSelect: onThemeSelect,
      showIntroText: showIntroText,
      helpText: helpText,
      hideEscToCancel: hideEscToCancel,
      isTitledByHost: isTitledByHost,
      onCancel: onCancel,
      onCustomTheme: onCustomTheme
    } = ho,
    u = showIntroText === void 0 ? !1 : showIntroText,
    children = helpText === void 0 ? "" : helpText,
    X = hideEscToCancel === void 0 ? !1 : hideEscToCancel,
    c = isTitledByHost === void 0 ? !1 : isTitledByHost,
    {
      storageV5: storageV5
    } = Fe(),
    [He] = Br(),
    v = fle(),
    {
      columns: columns
    } = Re(),
    dt;
  if (t[0] === w) dt = Umn(), t[0] = dt;else dt = t[0];
  let Oe = dt,
    ht;
  if (t[1] !== He) ht = Oe === null ? dHo(He) : null, t[1] = He, t[2] = ht;else ht = t[2];
  let z = ht,
    {
      setPreviewTheme: setPreviewTheme,
      cancelPreview: cancelPreview
    } = j5n(),
    d = A(void 0),
    ut;
  if (t[3] !== cancelPreview) ut = go => {
    let gt = Symbol("commit");
    d.current = gt;
    let ft = () => {
      if (d.current === gt) d.current = void 0, cancelPreview();
    };
    Promise.resolve(go).then(ft, ft);
  }, t[3] = cancelPreview, t[4] = ut;else ut = t[4];
  let x = ut,
    vt,
    xt;
  if (t[5] !== cancelPreview) vt = () => () => {
    if (d.current === void 0) cancelPreview();
  }, xt = [cancelPreview], t[5] = cancelPreview, t[6] = vt, t[7] = xt;else vt = t[6], xt = t[7];
  O(vt, xt);
  let W = G(mo) ?? !1,
    Ie = ar();
  zj("ThemePicker");
  let Me = wi("theme:toggleSyntaxHighlighting", "ThemePicker", "ctrl+t"),
    Ct;
  if (t[8] !== Ie || t[9] !== storageV5 || t[10] !== W) Ct = () => {
    if (Oe === null) {
      let syntaxHighlightingDisabled = !W;
      qn("userSettings", {
        syntaxHighlightingDisabled: syntaxHighlightingDisabled
      }, void 0, storageV5), Ie(bt => ({
        ...bt,
        settings: {
          ...bt.settings,
          syntaxHighlightingDisabled: syntaxHighlightingDisabled
        }
      }));
    }
  }, t[8] = Ie, t[9] = storageV5, t[10] = W, t[11] = Ct;else Ct = t[11];
  let St;
  if (t[12] === w) St = {
    context: "ThemePicker"
  }, t[12] = St;else St = t[12];
  pt("theme:toggleSyntaxHighlighting", Ct, St);
  let yt;
  if (t[13] !== cancelPreview || t[14] !== onCancel) yt = () => {
    d.current = void 0, cancelPreview(), onCancel?.();
  }, t[13] = cancelPreview, t[14] = onCancel, t[15] = yt;else yt = t[15];
  let Pt = yt,
    kt;
  if (t[16] === w) kt = {
    context: "Select"
  }, t[16] = kt;else kt = t[16];
  pt("select:cancel", Pt, kt);
  let q = Ws(Pt),
    {
      customThemes: customThemes
    } = zPe(),
    Ht,
    Ot,
    Dt,
    It,
    Mt,
    Bt,
    Lt;
  if (t[17] === w) Ht = {
    label: "Auto (match terminal)",
    value: "auto"
  }, Ot = {
    label: "Dark mode",
    value: "dark"
  }, Dt = {
    label: "Light mode",
    value: "light"
  }, It = {
    label: "Dark mode (colorblind-friendly)",
    value: "dark-daltonized"
  }, Mt = {
    label: "Light mode (colorblind-friendly)",
    value: "light-daltonized"
  }, Bt = {
    label: "Dark mode (ANSI colors only)",
    value: "dark-ansi"
  }, Lt = {
    label: "Light mode (ANSI colors only)",
    value: "light-ansi"
  }, t[17] = Ht, t[18] = Ot, t[19] = Dt, t[20] = It, t[21] = Mt, t[22] = Bt, t[23] = Lt;else Ht = t[17], Ot = t[18], Dt = t[19], It = t[20], Mt = t[21], Bt = t[22], Lt = t[23];
  let _t;
  if (t[24] !== customThemes || t[25] !== onCustomTheme) {
    const J = customThemes.map(co);
    let D;
    if (t[27] !== onCustomTheme) D = onCustomTheme ? [{
      label: "New custom theme\u2026",
      value: value
    }] : [], t[27] = onCustomTheme, t[28] = D;else D = t[28];
    _t = [Ht, Ot, Dt, It, Mt, Bt, Lt, ...J, ...D];
    t[24] = customThemes, t[25] = onCustomTheme, t[26] = _t;
  } else _t = t[26];
  let a = _t,
    Q = a.findIndex(item => item.value === v),
    [C, At] = y(a[Math.max(0, Q)]?.value ?? v),
    [fo, vo] = y(!1),
    [Et, xo] = y(Q !== -1);
  if (!Et && !fo && Q !== -1) xo(!0), At(v);
  let J;
  if (t[29] !== C) J = oF(C), t[29] = C, t[30] = J;else J = t[30];
  let Z = J,
    D;
  if (t[31] !== customThemes || t[32] !== Z) D = Z ? customThemes.find(item => item.slug === Z) : void 0, t[31] = customThemes, t[32] = Z, t[33] = D;else D = t[33];
  let g = D,
    chord = wi("theme:editCustom", "ThemePicker", "ctrl+e"),
    Rt;
  if (t[34] !== g || t[35] !== x || t[36] !== onCustomTheme) Rt = () => {
    if (g && onCustomTheme && d.current === void 0) x(onCustomTheme(g));
  }, t[34] = g, t[35] = x, t[36] = onCustomTheme, t[37] = Rt;else Rt = t[37];
  let Nt;
  if (t[38] === w) Nt = {
    context: "ThemePicker"
  }, t[38] = Nt;else Nt = t[38];
  pt("theme:editCustom", Rt, Nt);
  let h = Bj(),
    I = ve(rE),
    ref = A(null),
    Ut;
  if (t[39] !== h) Ut = () => {
    let current = ref.current;
    if (current === null) {
      return 0;
    }
    let K = h?.box.current ?? current;
    while (h === null && K.parentNode !== void 0) K = K.parentNode;
    return Math.max(0, qN(current, K));
  }, t[39] = h, t[40] = Ut;else Ut = t[40];
  let Co = Ia(Ut),
    ee = u ? 0 : Co + (X ? 1 : 0),
    te;
  if (t[41] !== children || t[42] !== c || t[43] !== u) te = c ? children && e(n, {
    dimColor: !0,
    children: children
  }) : r(ne, {
    children: [u ? e(n, {
      children: "Let's get started."
    }) : e(n, {
      bold: !0,
      color: "permission",
      children: "Theme"
    }), r(s, {
      flexDirection: "column",
      children: [e(n, {
        bold: !0,
        children: children_2
      }), children && e(n, {
        dimColor: !0,
        children: children
      })]
    })]
  }), t[41] = children, t[42] = c, t[43] = u, t[44] = te;else te = t[44];
  const _e = Et ? "on-saved-theme" : "on-first-theme",
    defaultFocusIndex = Math.max(0, Q);
  let onFocus;
  if (t[45] !== cancelPreview || t[46] !== C || t[47] !== setPreviewTheme || t[48] !== a) onFocus = wo => {
    let M = a[wo]?.value;
    if (M === void 0 || M === C || d.current !== void 0) {
      return;
    }
    if (At(M), vo(!0), WMt(M)) setPreviewTheme(M);else cancelPreview();
  }, t[45] = cancelPreview, t[46] = C, t[47] = setPreviewTheme, t[48] = a, t[49] = onFocus;else onFocus = t[49];
  let onSelect;
  if (t[50] !== cancelPreview || t[51] !== x || t[52] !== onCustomTheme || t[53] !== onThemeSelect || t[54] !== a) onSelect = bo => {
    let Ee = a[bo]?.value;
    if (Ee === void 0 || d.current !== void 0) {
      return;
    }
    if (!WMt(Ee)) {
      cancelPreview(), onCustomTheme?.(void 0);
      return;
    }
    x(onThemeSelect(Ee));
  }, t[50] = cancelPreview, t[51] = x, t[52] = onCustomTheme, t[53] = onThemeSelect, t[54] = a, t[55] = onSelect;else onSelect = t[55];
  let children_3;
  if (t[56] !== a || t[57] !== v) children_3 = a.map(item => e(Tn.Item, {
    label: item.label,
    icon: item.value === v ? e(Tt, {
      status: "success",
      "aria-label": "current:"
    }) : e(n, {
      "aria-hidden": !0,
      children: " ".repeat(rEt())
    }),
    meta: item.origin === void 0 ? void 0 : [item.origin]
  }, item.value)), t[56] = a, t[57] = v, t[58] = children_3;else children_3 = t[58];
  let le;
  if (t[59] !== _e || t[60] !== defaultFocusIndex || t[61] !== onFocus || t[62] !== onSelect || t[63] !== children_3) le = e(Tn, {
    defaultFocusIndex: defaultFocusIndex,
    onFocus: onFocus,
    onSelect: onSelect,
    children: children_3
  }, _e), t[59] = _e, t[60] = defaultFocusIndex, t[61] = onFocus, t[62] = onSelect, t[63] = children_3, t[64] = le;else le = t[64];
  let re;
  if (t[65] !== te || t[66] !== le) re = r(s, {
    flexDirection: "column",
    gap: 1,
    children: [te, le]
  }), t[65] = te, t[66] = le, t[67] = re;else re = t[67];
  let patch;
  if (t[68] === w) patch = {
    oldStart: 1,
    newStart: 1,
    oldLines: 3,
    newLines: 3,
    lines: [" function greet() {", '-  console.log("Hello, World!");', '+  console.log("Hello, Claude!");', " }"]
  }, t[68] = patch;else patch = t[68];
  const width = columns - 6;
  let ae;
  if (t[69] !== width) ae = e(Ul, {
    paddingX: 0,
    children: e(Ene, {
      patch: patch,
      dim: !1,
      filePath: "demo.js",
      firstLine: null,
      width: width
    })
  }), t[69] = width, t[70] = ae;else ae = t[70];
  const $e = Oe === "env" ? `Syntax highlighting disabled (via CLAUDE_CODE_SYNTAX_HIGHLIGHT=${i.CLAUDE_CODE_SYNTAX_HIGHLIGHT})` : W ? `Syntax highlighting disabled (${Me} to enable)` : z ? `Syntax theme: ${z.theme}${z.source ? ` (from ${z.source})` : ""} (${Me} to disable)` : `Syntax highlighting enabled (${Me} to disable)`;
  let me;
  if (t[71] !== $e) me = r(n, {
    dimColor: !0,
    children: [" ", $e]
  }), t[71] = $e, t[72] = me;else me = t[72];
  let ce;
  if (t[73] !== ae || t[74] !== me) ce = r(s, {
    flexDirection: "column",
    width: "100%",
    children: [ae, me]
  }), t[73] = ae, t[74] = me, t[75] = ce;else ce = t[75];
  let Vt;
  if (t[76] !== re || t[77] !== ce) Vt = r(s, {
    ref: ref,
    flexDirection: "column",
    gap: 1,
    children: [re, ce]
  }), t[76] = re, t[77] = ce, t[78] = Vt;else Vt = t[78];
  let Ue = Vt,
    value_2;
  if (t[79] !== h?.rows || t[80] !== ee || t[81] !== I) value_2 = I && {
    ...I,
    rows: Math.max(0, (h?.rows ?? I.rows) - ee)
  }, t[79] = h?.rows, t[80] = ee, t[81] = I, t[82] = value_2;else value_2 = t[82];
  const reserve = (h?.reserve ?? mK) + ee;
  let he;
  if (t[83] !== chord || t[84] !== q || t[85] !== g || t[86] !== X || t[87] !== c || t[88] !== onCustomTheme || t[89] !== u) he = !u && e(s, {
    marginTop: 1,
    children: !X && e(s, {
      children: e(n, {
        dimColor: !0,
        italic: !0,
        children: q.pending ? r(ne, {
          children: ["Press ", q.keyName, " again to cancel"]
        }) : r(Ce, {
          children: [e(Y, {
            chord: "enter",
            action: "select",
            ...fa(c)
          }), g && onCustomTheme && e(Y, {
            chord: chord,
            action: "edit",
            ...fa(c)
          }), e(Y, {
            chord: "escape",
            action: "cancel",
            ...fa(c)
          })]
        })
      })
    })
  }), t[83] = chord, t[84] = q, t[85] = g, t[86] = X, t[87] = c, t[88] = onCustomTheme, t[89] = u, t[90] = he;else he = t[90];
  let children_4;
  if (t[91] !== Ue || t[92] !== reserve || t[93] !== he) children_4 = r(Bvt, {
    reserve: reserve,
    children: [Ue, he]
  }), t[91] = Ue, t[92] = reserve, t[93] = he, t[94] = children_4;else children_4 = t[94];
  let Gt;
  if (t[95] !== value_2 || t[96] !== children_4) Gt = e(rE, {
    value: value_2,
    children: children_4
  }), t[95] = value_2, t[96] = children_4, t[97] = Gt;else Gt = t[97];
  return Gt;
}
export { pYe };