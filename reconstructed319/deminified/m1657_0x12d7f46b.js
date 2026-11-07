// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { S } from "B:/~BUN/root/chunk-bn4bjw9d.js";
import { s, n } from "B:/~BUN/root/chunk-qey16aan.js";
import { pt, Sn } from "B:/~BUN/root/chunk-v95bwhaa.js";
import { Ir } from "B:/~BUN/root/chunk-39zyvd3e.js";
import { re } from "B:/~BUN/root/chunk-xkw95p5n.js";
import { Ce } from "B:/~BUN/root/chunk-cync0e08.js";
import { ke } from "B:/~BUN/root/chunk-bvcekd4j.js";
import { Y } from "B:/~BUN/root/chunk-c1v460b9.js";
import { Lvt } from "B:/~BUN/root/chunk-h0jtmv4t.js";
import { Ys } from "B:/~BUN/root/chunk-28bb8488.js";
import { e, r } from "B:/~BUN/root/chunk-t16eynda.js";
import { Z, y, j } from "B:/~BUN/root/chunk-czy5r8bc.js";
import { ce } from "B:/~BUN/root/chunk-w7vsj9wa.js";
import { w } from "B:/~BUN/root/chunk-4qfwb3rf.js";
j();
function Oo(_o) {
  return ce(_o.label);
}
function Go(jo) {
  return jo !== null;
}
function MY(Ye) {
  let o = S(107),
    {
      title: title,
      subtitle: subtitle,
      fields: fields,
      values: values,
      onChange: onChange,
      onSubmit: onSubmit,
      onCancel: onCancel,
      submitLabel: submitLabel
    } = Ye,
    children = submitLabel === void 0 ? "Save" : submitLabel,
    f = fields.length + 1,
    [d, h] = y(0),
    X;
  if (o[0] !== fields[0] || o[1] !== values) X = () => {
    let ne = fields[0];
    return ne?.type === "text" ? (values[ne.key] ?? "").length : 0;
  }, o[0] = fields[0], o[1] = values, o[2] = X;else X = o[2];
  let [cursor, setCursor] = y(X),
    u = d < fields.length ? fields[d] : null,
    Te = u?.type === "text",
    M;
  if (o[3] !== fields) M = Math.max(...fields.map(Oo)), o[3] = fields, o[4] = M;else M = o[4];
  let labelWidth = M,
    I;
  if (o[5] !== values) I = function F(U) {
    if (U.type !== "text") {
      return null;
    }
    let P = values[U.key] ?? "";
    if (U.required && P.trim() === "") {
      return `${U.label} is required`;
    }
    return U.validate ? U.validate(P, values) : null;
  }, o[5] = values, o[6] = I;else I = o[6];
  let F = I,
    Re;
  if (o[7] !== F || o[8] !== fields) Re = fields.map(F).find(Go), o[7] = F, o[8] = fields, o[9] = Re;else Re = o[9];
  let b = Re,
    E;
  if (o[10] !== fields || o[11] !== d || o[12] !== f || o[13] !== values) E = function m(Se) {
    let Me = Math.max(0, Math.min(f - 1, Se));
    if (Me === d) {
      return;
    }
    h(Me);
    let Ze = fields[Me];
    if (Ze?.type === "text") setCursor((values[Ze.key] ?? "").length);
  }, o[10] = fields, o[11] = d, o[12] = f, o[13] = values, o[14] = E;else E = o[14];
  let m = E,
    _e;
  if (o[15] !== b || o[16] !== onSubmit) _e = function D() {
    if (b) {
      return;
    }
    onSubmit();
  }, o[15] = b, o[16] = onSubmit, o[17] = _e;else _e = o[17];
  let D = _e,
    je;
  if (o[18] !== u || o[19] !== onChange || o[20] !== values) je = function ee($o) {
    if (u?.type !== "select") {
      return;
    }
    let options = u.options;
    let zo = values[u.key] ?? options[0]?.value ?? "";
    let Qo = options.findIndex(item => item.value === zo);
    let Ke = options[(Qo + $o + options.length) % options.length];
    if (Ke) onChange(u.key, Ke.value);
  }, o[18] = u, o[19] = onChange, o[20] = values, o[21] = je;else je = o[21];
  let ee = je,
    se,
    de;
  if (o[22] !== d || o[23] !== m) de = () => m(d - 1), se = () => m(d + 1), o[22] = d, o[23] = m, o[24] = se, o[25] = de;else se = o[24], de = o[25];
  let ue;
  if (o[26] !== d || o[27] !== m || o[28] !== f || o[29] !== D) ue = () => {
    if (d === f - 1) D();else m(d + 1);
  }, o[26] = d, o[27] = m, o[28] = f, o[29] = D, o[30] = ue;else ue = o[30];
  let eo;
  if (o[31] !== onCancel || o[32] !== se || o[33] !== ue || o[34] !== de) eo = {
    "select:previous": de,
    "select:next": se,
    "select:accept": ue,
    "select:cancel": onCancel
  }, o[31] = onCancel, o[32] = se, o[33] = ue, o[34] = de, o[35] = eo;else eo = o[35];
  const isActive = !Te;
  let oo;
  if (o[36] !== isActive) oo = {
    context: "Select",
    isActive: isActive
  }, o[36] = isActive, o[37] = oo;else oo = o[37];
  Sn(eo, oo);
  let to;
  if (o[38] === w) to = {
    context: "Settings"
  }, o[38] = to;else to = o[38];
  pt("confirm:no", onCancel, to), Lvt();
  let lo;
  if (o[39] !== ee) lo = {
    "tabs:previous": () => ee(-1),
    "tabs:next": () => ee(1)
  }, o[39] = ee, o[40] = lo;else lo = o[40];
  const isActive_2 = u?.type === "select";
  let io;
  if (o[41] !== isActive_2) io = {
    context: "Tabs",
    isActive: isActive_2
  }, o[41] = isActive_2, o[42] = io;else io = o[42];
  Sn(lo, io);
  let N = u ? values[u.key] ?? "" : "",
    no;
  if (o[43] !== u || o[44] !== N || o[45] !== values) no = u?.type === "text" && u.validate ? u.validate(N, values) : null, o[43] = u, o[44] = N, o[45] = values, o[46] = no;else no = o[46];
  let error = no,
    ro;
  if (o[47] !== error || o[48] !== u || o[49] !== N || o[50] !== values) ro = !error && u?.hint ? u.hint(N, values) : void 0, o[47] = error, o[48] = u, o[49] = N, o[50] = values, o[51] = ro;else ro = o[51];
  let children_2 = ro,
    fe;
  if (o[52] !== cursor || o[53] !== fields || o[54] !== d || o[55] !== labelWidth || o[56] !== m || o[57] !== onCancel || o[58] !== onChange || o[59] !== D || o[60] !== values) {
    let O;
    if (o[62] !== cursor || o[63] !== fields.length || o[64] !== d || o[65] !== labelWidth || o[66] !== m || o[67] !== onCancel || o[68] !== onChange || o[69] !== D || o[70] !== values) O = (field, oe) => {
      let isFocused = oe === d;
      let value = values[field.key] ?? "";
      return e(De, {
        field: field,
        value: value,
        isFocused: isFocused,
        labelWidth: labelWidth,
        cursor: cursor,
        setCursor: setCursor,
        onChange: Zo => onChange(field.key, Zo),
        onCancel: onCancel,
        onUp: () => m(oe - 1),
        onDown: () => m(oe + 1),
        onEnter: () => {
          if (oe === fields.length - 1) D();else m(oe + 1);
        }
      }, field.key);
    }, o[62] = cursor, o[63] = fields.length, o[64] = d, o[65] = labelWidth, o[66] = m, o[67] = onCancel, o[68] = onChange, o[69] = D, o[70] = values, o[71] = O;else O = o[71];
    fe = fields.map(O);
    o[52] = cursor, o[53] = fields, o[54] = d, o[55] = labelWidth, o[56] = m, o[57] = onCancel, o[58] = onChange, o[59] = D, o[60] = values, o[61] = fe;
  } else fe = o[61];
  const color = d === f - 1 ? "suggestion" : void 0,
    Pe = d === f - 1 ? re.pointer : " ";
  let pe;
  if (o[72] !== color || o[73] !== Pe) pe = r(n, {
    color: color,
    children: [Pe, " "]
  }), o[72] = color, o[73] = Pe, o[74] = pe;else pe = o[74];
  const bold = d === f - 1,
    dimColor = !!b;
  let ve;
  if (o[75] !== children || o[76] !== bold || o[77] !== dimColor) ve = e(n, {
    bold: bold,
    dimColor: dimColor,
    children: children
  }), o[75] = children, o[76] = bold, o[77] = dimColor, o[78] = ve;else ve = o[78];
  let ge;
  if (o[79] !== b || o[80] !== d || o[81] !== f) ge = b && d === f - 1 && r(n, {
    color: "error",
    children: [" \xB7 ", b]
  }), o[79] = b, o[80] = d, o[81] = f, o[82] = ge;else ge = o[82];
  let be;
  if (o[83] !== pe || o[84] !== ve || o[85] !== ge) be = r(s, {
    marginTop: 1,
    children: [pe, ve, ge]
  }), o[83] = pe, o[84] = ve, o[85] = ge, o[86] = be;else be = o[86];
  let he;
  if (o[87] !== error || o[88] !== children_2) he = e(s, {
    marginTop: 1,
    minHeight: 1,
    children: error ? e(Ys, {
      error: error
    }) : children_2 ? e(n, {
      dimColor: !0,
      children: children_2
    }) : e(n, {
      children: " "
    })
  }), o[87] = error, o[88] = children_2, o[89] = he;else he = o[89];
  let so;
  if (o[90] === w) so = e(Y, {
    chord: ["up", "down"],
    action: "move"
  }), o[90] = so;else so = o[90];
  let Fe;
  if (o[91] !== u?.type) Fe = u?.type === "select" && e(Y, {
    chord: ["left", "right"],
    action: "change"
  }), o[91] = u?.type, o[92] = Fe;else Fe = o[92];
  let uo, co;
  if (o[93] === w) uo = e(Y, {
    chord: "enter",
    action: "continue"
  }), co = e(Y, {
    chord: "escape",
    action: "cancel"
  }), o[93] = uo, o[94] = co;else uo = o[93], co = o[94];
  let ye;
  if (o[95] !== Fe) ye = e(s, {
    marginTop: 1,
    children: e(n, {
      dimColor: !0,
      children: r(Ce, {
        children: [so, Fe, uo, co]
      })
    })
  }), o[95] = Fe, o[96] = ye;else ye = o[96];
  let children_3;
  if (o[97] !== fe || o[98] !== be || o[99] !== he || o[100] !== ye) children_3 = r(s, {
    flexDirection: "column",
    children: [fe, be, he, ye]
  }), o[97] = fe, o[98] = be, o[99] = he, o[100] = ye, o[101] = children_3;else children_3 = o[101];
  let ao;
  if (o[102] !== onCancel || o[103] !== subtitle || o[104] !== children_3 || o[105] !== title) ao = e(ke, {
    title: title,
    subtitle: subtitle,
    onCancel: onCancel,
    hideInputGuide: !0,
    isCancelActive: !1,
    children: children_3
  }), o[102] = onCancel, o[103] = subtitle, o[104] = children_3, o[105] = title, o[106] = ao;else ao = o[106];
  return ao;
}
function De(Ye) {
  let h = S(44),
    {
      field: field_2,
      value: value_2,
      isFocused: isFocused_2,
      labelWidth: labelWidth_2,
      cursor: C,
      setCursor: V,
      onChange: onChange_2,
      onCancel: Q,
      onUp: B,
      onDown: f,
      onEnter: onEnter
    } = Ye,
    o;
  if (h[0] !== field_2.label || h[1] !== labelWidth_2) o = " ".repeat(Math.max(0, labelWidth_2 - ce(field_2.label))), h[0] = field_2.label, h[1] = labelWidth_2, h[2] = o;else o = h[2];
  let X = o,
    ne;
  if (h[3] !== field_2.required || h[4] !== field_2.type || h[5] !== value_2) ne = field_2.type === "text" && field_2.required && value_2.trim() === "", h[3] = field_2.required, h[4] = field_2.type, h[5] = value_2, h[6] = ne;else ne = h[6];
  let R = ne;
  const color_2 = isFocused_2 ? "suggestion" : void 0,
    u = isFocused_2 ? re.pointer : " ";
  let Te;
  if (h[7] !== color_2 || h[8] !== u) Te = r(n, {
    color: color_2,
    children: [u, " "]
  }), h[7] = color_2, h[8] = u, h[9] = Te;else Te = h[9];
  let M = Te;
  const dimColor_2 = !isFocused_2;
  let I;
  if (h[10] !== R) I = R ? e(n, {
    color: "error",
    children: "*"
  }) : " ", h[10] = R, h[11] = I;else I = h[11];
  let U;
  if (h[12] !== field_2.label || h[13] !== X || h[14] !== dimColor_2 || h[15] !== I) U = r(n, {
    dimColor: dimColor_2,
    children: [field_2.label, I, X, " "]
  }), h[12] = field_2.label, h[13] = X, h[14] = dimColor_2, h[15] = I, h[16] = U;else U = h[16];
  let P = U;
  if (field_2.type === "select") {
    let F;
    if (h[17] !== field_2.options || h[18] !== value_2) F = field_2.options.find(item => item.value === value_2) ?? field_2.options[0], h[17] = field_2.options, h[18] = value_2, h[19] = F;else F = h[19];
    let b = F;
    let E;
    if (h[20] !== isFocused_2 || h[21] !== b?.label || h[22] !== value_2) E = isFocused_2 ? r(n, {
      children: [r(n, {
        dimColor: !0,
        children: [re.triangleLeft, " "]
      }), b?.label ?? value_2, r(n, {
        dimColor: !0,
        children: [" ", re.triangleRight]
      })]
    }) : e(n, {
      children: b?.label ?? value_2
    }), h[20] = isFocused_2, h[21] = b?.label, h[22] = value_2, h[23] = E;else E = h[23];
    let Se;
    if (h[24] !== P || h[25] !== M || h[26] !== E) Se = r(s, {
      children: [M, P, E]
    }), h[24] = P, h[25] = M, h[26] = E, h[27] = Se;else Se = h[27];
    return Se;
  }
  let F;
  if (h[28] !== C || h[29] !== field_2.mask || h[30] !== field_2.placeholder || h[31] !== isFocused_2 || h[32] !== Q || h[33] !== onChange_2 || h[34] !== f || h[35] !== onEnter || h[36] !== B || h[37] !== V || h[38] !== value_2) F = isFocused_2 ? e(Ir, {
    value: value_2,
    onChange: onChange_2,
    onSubmit: () => onEnter(),
    onExit: Q,
    onHistoryUp: B,
    onHistoryDown: f,
    placeholder: field_2.placeholder,
    mask: field_2.mask,
    columns: 60,
    cursorOffset: C,
    onChangeCursorOffset: V,
    disableCursorMovementForUpDownKeys: !0,
    disableEscapeDoublePress: !0,
    focus: !0,
    showCursor: !0
  }) : value_2 ? e(n, {
    children: field_2.mask ? field_2.mask.repeat(Math.min(ce(value_2), 60)) : value_2
  }) : e(n, {
    dimColor: !0,
    children: field_2.placeholder ?? ""
  }), h[28] = C, h[29] = field_2.mask, h[30] = field_2.placeholder, h[31] = isFocused_2, h[32] = Q, h[33] = onChange_2, h[34] = f, h[35] = onEnter, h[36] = B, h[37] = V, h[38] = value_2, h[39] = F;else F = h[39];
  let E;
  if (h[40] !== P || h[41] !== M || h[42] !== F) E = r(s, {
    children: [M, P, F]
  }), h[40] = P, h[41] = M, h[42] = F, h[43] = E;else E = h[43];
  return E;
}
export { MY };