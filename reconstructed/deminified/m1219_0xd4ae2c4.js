// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { w } from "B:/~BUN/root/chunk-x9hkq9y1.js";
import { ie } from "B:/~BUN/root/chunk-bpp59nyd.js";
import { s, n } from "B:/~BUN/root/chunk-1gn8pz4b.js";
import { ze, Wt } from "B:/~BUN/root/chunk-r2yrqvry.js";
import { Qn } from "B:/~BUN/root/chunk-jcnv9sfw.js";
import { ye } from "B:/~BUN/root/chunk-41008fhm.js";
import { ge } from "B:/~BUN/root/chunk-51erc9xb.js";
import { F } from "B:/~BUN/root/chunk-acd2tycn.js";
import { ko } from "B:/~BUN/root/chunk-v1xd9kf3.js";
import { e, r } from "B:/~BUN/root/chunk-qkvevvte.js";
import { Z } from "B:/~BUN/root/chunk-08bth2fj.js";
import { X, g, N } from "B:/~BUN/root/chunk-rnj6pcz5.js";
import { S } from "B:/~BUN/root/chunk-yv67t8hr.js";
N();
function $o(Ko) {
  return ie(Ko.label);
}
function zo(et) {
  return et !== null;
}
function CH(Ze) {
  let o = w(107),
    {
      title: title,
      subtitle: subtitle,
      fields: fields,
      values: values,
      onChange: onChange,
      onSubmit: onSubmit,
      onCancel: onCancel,
      submitLabel: submitLabel
    } = Ze,
    children = submitLabel === void 0 ? "Save" : submitLabel,
    f = fields.length + 1,
    [d, y] = g(0),
    j;
  if (o[0] !== fields[0] || o[1] !== values) j = () => {
    let se = fields[0];
    return se?.type === "text" ? (values[se.key] ?? "").length : 0;
  }, o[0] = fields[0], o[1] = values, o[2] = j;else j = o[2];
  let [cursor, setCursor] = g(j),
    u = d < fields.length ? fields[d] : null,
    Te = u?.type === "text",
    A;
  if (o[3] !== fields) A = Math.max(...fields.map($o)), o[3] = fields, o[4] = A;else A = o[4];
  let labelWidth = A,
    O;
  if (o[5] !== values) O = function x(P) {
    if (P.type !== "text") {
      return null;
    }
    let q = values[P.key] ?? "";
    if (P.required && q.trim() === "") {
      return `${P.label} is required`;
    }
    return P.validate ? P.validate(q, values) : null;
  }, o[5] = values, o[6] = O;else O = o[6];
  let x = O,
    Re;
  if (o[7] !== x || o[8] !== fields) Re = fields.map(x).find(zo), o[7] = x, o[8] = fields, o[9] = Re;else Re = o[9];
  let C = Re,
    D;
  if (o[10] !== fields || o[11] !== d || o[12] !== f || o[13] !== values) D = function m(Se) {
    let Me = Math.max(0, Math.min(f - 1, Se));
    if (Me === d) {
      return;
    }
    y(Me);
    let _e = fields[Me];
    if (_e?.type === "text") setCursor((values[_e.key] ?? "").length);
  }, o[10] = fields, o[11] = d, o[12] = f, o[13] = values, o[14] = D;else D = o[14];
  let m = D,
    je;
  if (o[15] !== C || o[16] !== onSubmit) je = function T() {
    if (C) {
      return;
    }
    onSubmit();
  }, o[15] = C, o[16] = onSubmit, o[17] = je;else je = o[17];
  let T = je,
    Ke;
  if (o[18] !== u || o[19] !== onChange || o[20] !== values) Ke = function oe(Jo) {
    if (u?.type !== "select") {
      return;
    }
    let options = u.options;
    let Qo = values[u.key] ?? options[0]?.value ?? "";
    let Yo = options.findIndex(item => item.value === Qo);
    let eo = options[(Yo + Jo + options.length) % options.length];
    if (eo) onChange(u.key, eo.value);
  }, o[18] = u, o[19] = onChange, o[20] = values, o[21] = Ke;else Ke = o[21];
  let oe = Ke,
    de,
    ue;
  if (o[22] !== d || o[23] !== m) ue = () => m(d - 1), de = () => m(d + 1), o[22] = d, o[23] = m, o[24] = de, o[25] = ue;else de = o[24], ue = o[25];
  let ce;
  if (o[26] !== d || o[27] !== m || o[28] !== f || o[29] !== T) ce = () => {
    if (d === f - 1) T();else m(d + 1);
  }, o[26] = d, o[27] = m, o[28] = f, o[29] = T, o[30] = ce;else ce = o[30];
  let oo;
  if (o[31] !== onCancel || o[32] !== de || o[33] !== ce || o[34] !== ue) oo = {
    "select:previous": ue,
    "select:next": de,
    "select:accept": ce,
    "select:cancel": onCancel
  }, o[31] = onCancel, o[32] = de, o[33] = ce, o[34] = ue, o[35] = oo;else oo = o[35];
  const isActive = !Te;
  let to;
  if (o[36] !== isActive) to = {
    context: "Select",
    isActive: isActive
  }, o[36] = isActive, o[37] = to;else to = o[37];
  Wt(oo, to);
  let lo;
  if (o[38] === S) lo = {
    context: "Settings"
  }, o[38] = lo;else lo = o[38];
  ze("confirm:no", onCancel, lo);
  let io;
  if (o[39] !== oe) io = {
    "tabs:previous": () => oe(-1),
    "tabs:next": () => oe(1)
  }, o[39] = oe, o[40] = io;else io = o[40];
  const isActive_2 = u?.type === "select";
  let no;
  if (o[41] !== isActive_2) no = {
    context: "Tabs",
    isActive: isActive_2
  }, o[41] = isActive_2, o[42] = no;else no = o[42];
  Wt(io, no);
  let G = u ? values[u.key] ?? "" : "",
    ro;
  if (o[43] !== u || o[44] !== G || o[45] !== values) ro = u?.type === "text" && u.validate ? u.validate(G, values) : null, o[43] = u, o[44] = G, o[45] = values, o[46] = ro;else ro = o[46];
  let error = ro,
    so;
  if (o[47] !== error || o[48] !== u || o[49] !== G || o[50] !== values) so = !error && u?.hint ? u.hint(G, values) : void 0, o[47] = error, o[48] = u, o[49] = G, o[50] = values, o[51] = so;else so = o[51];
  let children_2 = so,
    fe;
  if (o[52] !== cursor || o[53] !== fields || o[54] !== d || o[55] !== labelWidth || o[56] !== m || o[57] !== onCancel || o[58] !== onChange || o[59] !== T || o[60] !== values) {
    let z;
    if (o[62] !== cursor || o[63] !== fields.length || o[64] !== d || o[65] !== labelWidth || o[66] !== m || o[67] !== onCancel || o[68] !== onChange || o[69] !== T || o[70] !== values) z = (field, te) => {
      let isFocused = te === d;
      let value = values[field.key] ?? "";
      return e(De, {
        field: field,
        value: value,
        isFocused: isFocused,
        labelWidth: labelWidth,
        cursor: cursor,
        setCursor: setCursor,
        onChange: jo => onChange(field.key, jo),
        onCancel: onCancel,
        onUp: () => m(te - 1),
        onDown: () => m(te + 1),
        onEnter: () => {
          if (te === fields.length - 1) T();else m(te + 1);
        }
      }, field.key);
    }, o[62] = cursor, o[63] = fields.length, o[64] = d, o[65] = labelWidth, o[66] = m, o[67] = onCancel, o[68] = onChange, o[69] = T, o[70] = values, o[71] = z;else z = o[71];
    fe = fields.map(z);
    o[52] = cursor, o[53] = fields, o[54] = d, o[55] = labelWidth, o[56] = m, o[57] = onCancel, o[58] = onChange, o[59] = T, o[60] = values, o[61] = fe;
  } else fe = o[61];
  const color = d === f - 1 ? "suggestion" : void 0,
    Pe = d === f - 1 ? Z.pointer : " ";
  let pe;
  if (o[72] !== color || o[73] !== Pe) pe = r(n, {
    color: color,
    children: [Pe, " "]
  }), o[72] = color, o[73] = Pe, o[74] = pe;else pe = o[74];
  const bold = d === f - 1,
    dimColor = !!C;
  let ve;
  if (o[75] !== children || o[76] !== bold || o[77] !== dimColor) ve = e(n, {
    bold: bold,
    dimColor: dimColor,
    children: children
  }), o[75] = children, o[76] = bold, o[77] = dimColor, o[78] = ve;else ve = o[78];
  let be;
  if (o[79] !== C || o[80] !== d || o[81] !== f) be = C && d === f - 1 && r(n, {
    color: "error",
    children: [" \xB7 ", C]
  }), o[79] = C, o[80] = d, o[81] = f, o[82] = be;else be = o[82];
  let Ce;
  if (o[83] !== pe || o[84] !== ve || o[85] !== be) Ce = r(s, {
    marginTop: 1,
    children: [pe, ve, be]
  }), o[83] = pe, o[84] = ve, o[85] = be, o[86] = Ce;else Ce = o[86];
  let he;
  if (o[87] !== error || o[88] !== children_2) he = e(s, {
    marginTop: 1,
    minHeight: 1,
    children: error ? e(ko, {
      error: error
    }) : children_2 ? e(n, {
      dimColor: !0,
      children: children_2
    }) : e(n, {
      children: " "
    })
  }), o[87] = error, o[88] = children_2, o[89] = he;else he = o[89];
  let uo;
  if (o[90] === S) uo = e(F, {
    chord: ["up", "down"],
    action: "move"
  }), o[90] = uo;else uo = o[90];
  let Fe;
  if (o[91] !== u?.type) Fe = u?.type === "select" && e(F, {
    chord: ["left", "right"],
    action: "change"
  }), o[91] = u?.type, o[92] = Fe;else Fe = o[92];
  let co, ao;
  if (o[93] === S) co = e(F, {
    chord: "enter",
    action: "continue"
  }), ao = e(F, {
    chord: "escape",
    action: "cancel"
  }), o[93] = co, o[94] = ao;else co = o[93], ao = o[94];
  let xe;
  if (o[95] !== Fe) xe = e(s, {
    marginTop: 1,
    children: e(n, {
      dimColor: !0,
      children: r(ye, {
        children: [uo, Fe, co, ao]
      })
    })
  }), o[95] = Fe, o[96] = xe;else xe = o[96];
  let children_3;
  if (o[97] !== fe || o[98] !== Ce || o[99] !== he || o[100] !== xe) children_3 = r(s, {
    flexDirection: "column",
    children: [fe, Ce, he, xe]
  }), o[97] = fe, o[98] = Ce, o[99] = he, o[100] = xe, o[101] = children_3;else children_3 = o[101];
  let fo;
  if (o[102] !== onCancel || o[103] !== subtitle || o[104] !== children_3 || o[105] !== title) fo = e(ge, {
    title: title,
    subtitle: subtitle,
    onCancel: onCancel,
    hideInputGuide: !0,
    isCancelActive: !1,
    children: children_3
  }), o[102] = onCancel, o[103] = subtitle, o[104] = children_3, o[105] = title, o[106] = fo;else fo = o[106];
  return fo;
}
function De(Ze) {
  let y = w(44),
    {
      field: field_2,
      value: value_2,
      isFocused: isFocused_2,
      labelWidth: labelWidth_2,
      cursor: h,
      setCursor: B,
      onChange: onChange_2,
      onCancel: _,
      onUp: I,
      onDown: f,
      onEnter: onEnter
    } = Ze,
    o;
  if (y[0] !== field_2.label || y[1] !== labelWidth_2) o = " ".repeat(Math.max(0, labelWidth_2 - ie(field_2.label))), y[0] = field_2.label, y[1] = labelWidth_2, y[2] = o;else o = y[2];
  let j = o,
    se;
  if (y[3] !== field_2.required || y[4] !== field_2.type || y[5] !== value_2) se = field_2.type === "text" && field_2.required && value_2.trim() === "", y[3] = field_2.required, y[4] = field_2.type, y[5] = value_2, y[6] = se;else se = y[6];
  let M = se;
  const color_2 = isFocused_2 ? "suggestion" : void 0,
    u = isFocused_2 ? Z.pointer : " ";
  let Te;
  if (y[7] !== color_2 || y[8] !== u) Te = r(n, {
    color: color_2,
    children: [u, " "]
  }), y[7] = color_2, y[8] = u, y[9] = Te;else Te = y[9];
  let A = Te;
  const dimColor_2 = !isFocused_2;
  let O;
  if (y[10] !== M) O = M ? e(n, {
    color: "error",
    children: "*"
  }) : " ", y[10] = M, y[11] = O;else O = y[11];
  let P;
  if (y[12] !== field_2.label || y[13] !== j || y[14] !== dimColor_2 || y[15] !== O) P = r(n, {
    dimColor: dimColor_2,
    children: [field_2.label, O, j, " "]
  }), y[12] = field_2.label, y[13] = j, y[14] = dimColor_2, y[15] = O, y[16] = P;else P = y[16];
  let q = P;
  if (field_2.type === "select") {
    let x;
    if (y[17] !== field_2.options || y[18] !== value_2) x = field_2.options.find(item => item.value === value_2) ?? field_2.options[0], y[17] = field_2.options, y[18] = value_2, y[19] = x;else x = y[19];
    let C = x;
    let D;
    if (y[20] !== isFocused_2 || y[21] !== C?.label || y[22] !== value_2) D = isFocused_2 ? r(n, {
      children: [r(n, {
        dimColor: !0,
        children: [Z.triangleLeft, " "]
      }), C?.label ?? value_2, r(n, {
        dimColor: !0,
        children: [" ", Z.triangleRight]
      })]
    }) : e(n, {
      children: C?.label ?? value_2
    }), y[20] = isFocused_2, y[21] = C?.label, y[22] = value_2, y[23] = D;else D = y[23];
    let Se;
    if (y[24] !== q || y[25] !== A || y[26] !== D) Se = r(s, {
      children: [A, q, D]
    }), y[24] = q, y[25] = A, y[26] = D, y[27] = Se;else Se = y[27];
    return Se;
  }
  let x;
  if (y[28] !== h || y[29] !== field_2.mask || y[30] !== field_2.placeholder || y[31] !== isFocused_2 || y[32] !== _ || y[33] !== onChange_2 || y[34] !== f || y[35] !== onEnter || y[36] !== I || y[37] !== B || y[38] !== value_2) x = isFocused_2 ? e(Qn, {
    value: value_2,
    onChange: onChange_2,
    onSubmit: () => onEnter(),
    onExit: _,
    onHistoryUp: I,
    onHistoryDown: f,
    placeholder: field_2.placeholder,
    mask: field_2.mask,
    columns: 60,
    cursorOffset: h,
    onChangeCursorOffset: B,
    disableCursorMovementForUpDownKeys: !0,
    disableEscapeDoublePress: !0,
    focus: !0,
    showCursor: !0
  }) : value_2 ? e(n, {
    children: field_2.mask ? field_2.mask.repeat(Math.min(ie(value_2), 60)) : value_2
  }) : e(n, {
    dimColor: !0,
    children: field_2.placeholder ?? ""
  }), y[28] = h, y[29] = field_2.mask, y[30] = field_2.placeholder, y[31] = isFocused_2, y[32] = _, y[33] = onChange_2, y[34] = f, y[35] = onEnter, y[36] = I, y[37] = B, y[38] = value_2, y[39] = x;else x = y[39];
  let D;
  if (y[40] !== q || y[41] !== A || y[42] !== x) D = r(s, {
    children: [A, q, x]
  }), y[40] = q, y[41] = A, y[42] = x, y[43] = D;else D = y[43];
  return D;
}
export { CH };