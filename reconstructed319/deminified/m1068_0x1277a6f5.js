// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { Oi, Q, Dae, vme } from "B:/~BUN/root/chunk-n8cnxns2.js";
import { S } from "B:/~BUN/root/chunk-bn4bjw9d.js";
import { Wu } from "B:/~BUN/root/chunk-emd6eb45.js";
import { xs } from "B:/~BUN/root/chunk-tmdrwqnv.js";
import { Za } from "B:/~BUN/root/chunk-n8t98fhm.js";
import { K7, Kj } from "B:/~BUN/root/chunk-31b4g6te.js";
import { ot, s, n, sn, qs, BC, oE, xUe, Qi, Vr } from "B:/~BUN/root/chunk-qey16aan.js";
import { wS } from "B:/~BUN/root/chunk-crjx6seq.js";
import { x } from "B:/~BUN/root/chunk-mwfggkjt.js";
import { at } from "B:/~BUN/root/chunk-1ks9vs37.js";
import { Br } from "B:/~BUN/root/chunk-vxjrk7vf.js";
import { Jfe, Se } from "B:/~BUN/root/chunk-x24hm796.js";
import { ct } from "B:/~BUN/root/chunk-bkfncj77.js";
import { cUt } from "B:/~BUN/root/chunk-amar4116.js";
import { TS } from "B:/~BUN/root/chunk-y781qzhe.js";
import { rI } from "B:/~BUN/root/chunk-cacx0j4x.js";
import { vd } from "B:/~BUN/root/chunk-7g0t7h3t.js";
import { pt, Sn } from "B:/~BUN/root/chunk-v95bwhaa.js";
import { oI, ra, nE } from "B:/~BUN/root/chunk-tzwf3sbj.js";
import { As } from "B:/~BUN/root/chunk-q8sf8fhe.js";
import { Re } from "B:/~BUN/root/chunk-qr2xxkqa.js";
import { Y } from "B:/~BUN/root/chunk-c1v460b9.js";
import { U_ } from "B:/~BUN/root/chunk-xt7xbt1n.js";
import { Tt } from "B:/~BUN/root/chunk-dw9hahea.js";
import { Ce } from "B:/~BUN/root/chunk-cync0e08.js";
import { A5n, dhn, Ir } from "B:/~BUN/root/chunk-39zyvd3e.js";
import { b2 } from "B:/~BUN/root/chunk-2fedt3ag.js";
import { re } from "B:/~BUN/root/chunk-xkw95p5n.js";
import { q8s } from "B:/~BUN/root/chunk-dgbjmrqs.js";
import { mv, e2t } from "B:/~BUN/root/chunk-h37egt7q.js";
import { gt } from "B:/~BUN/root/chunk-sx03ea6s.js";
import { ne, e, r } from "B:/~BUN/root/chunk-t16eynda.js";
import { lr } from "B:/~BUN/root/chunk-75wha2r5.js";
import { Qke } from "B:/~BUN/root/chunk-yjbw4jd5.js";
import { z_, pu, Jt, hy, ue, ve, O, qo, Zt, Z, A, y, j } from "B:/~BUN/root/chunk-czy5r8bc.js";
import { Al } from "B:/~BUN/root/chunk-md18120p.js";
import { dc, ma } from "B:/~BUN/root/chunk-4jfmvmew.js";
import { ce } from "B:/~BUN/root/chunk-w7vsj9wa.js";
import { U } from "B:/~BUN/root/chunk-5ha2avah.js";
import { w } from "B:/~BUN/root/chunk-4qfwb3rf.js";
j();
j();
function si(t = oI) {
  let o = Qi(),
    i = Qc();
  return ue(() => ra(o, i(), t), [o, i, t]);
}
function Qc() {
  let [t] = y(Date.now),
    o = nE(t);
  return ue(() => o(t), [o, t]);
}
function cu(t, o = oI) {
  let settled = Vr(o, t);
  return {
    remountKey: settled ? "settled" : "held",
    settled: settled
  };
}
function shn() {
  let [epoch, o] = y(0),
    noteAttempt = ue(() => o(u => u + 1), []);
  return {
    epoch: epoch,
    noteAttempt: noteAttempt
  };
}
function so() {
  let t = Qi(),
    o = A(null),
    {
      epoch: epoch_2,
      noteAttempt: noteAttempt_2
    } = shn(),
    refusedWithin = ue((l = oI) => o.current !== null && ra(t, o.current, l), [t]),
    noteRefused = ue(() => {
      o.current = Date.now(), noteAttempt_2();
    }, [noteAttempt_2]);
  return {
    refusedWithin: refusedWithin,
    noteRefused: noteRefused,
    epoch: epoch_2
  };
}
function Iu(Kt) {
  return String(Kt.value);
}
function yu() {
  return null;
}
function Su() {
  return "";
}
function wu() {
  return null;
}
function Ou() {
  return "";
}
function Cu() {
  return "";
}
function Tu() {
  return null;
}
function Du() {
  return "";
}
function Vu() {
  return "";
}
function Ru() {
  return null;
}
function Fu() {
  return "";
}
function ku() {
  return null;
}
function Eu() {
  return null;
}
function Mu() {
  return "";
}
function Pu(Jn) {
  return Jn.type !== "input";
}
function Au() {
  return "";
}
function Bu() {
  return null;
}
function Nu(Xa) {
  return String(Xa.value);
}
function Lu() {
  return null;
}
function Uu() {
  return null;
}
function Ku() {
  return "";
}
function $u() {
  return null;
}
function Hu() {
  return "";
}
function ju() {
  return "";
}
function zu() {
  return null;
}
function _u() {
  return null;
}
function Gu() {
  return null;
}
function qu() {
  return "";
}
function Yu() {
  return "";
}
function Ju() {
  return "";
}
function Xu() {
  return "";
}
function Qu() {
  return null;
}
function Zu() {
  return null;
}
function ed() {
  return null;
}
function td(Qa) {
  return Qa.type !== "input";
}
function nd() {
  return "";
}
function od(el, ai) {
  return el - ai;
}
function id(fs) {
  return String(fs + 1);
}
function sd() {
  return null;
}
function rd() {
  return "";
}
function ad() {
  return null;
}
function ld() {
  return null;
}
function ud() {
  return "";
}
function dd() {
  return "";
}
function cd(He) {
  return He.slice(0, -1);
}
function nt(t) {
  let d = S(3),
    [o, i] = y(t),
    u = A(t),
    p;
  if (d[0] === w) p = l => {
    u.current = l(u.current), i(u.current);
  }, d[0] = p;else p = d[0];
  let m = p,
    I;
  if (d[1] !== o) I = [o, u, m], d[1] = o, d[2] = I;else I = d[2];
  return I;
}
function on() {
  return nt("");
}
function Oo(t) {
  if (t.length <= 1) return t[0] ?? "";
  if (t.length === 2) return `${t[0]} or ${t[1]}`;
  return `${t.slice(0, -1).join(", ")}, or ${t.at(-1)}`;
}
var ci = 300;
function gl(t) {
  return ` \u2026 +${t} more characters`;
}
function Is(t) {
  if (t.length <= ci) return t;
  let o = Oi(t, ci);
  if (o === t) return t;
  let i = [...t].length - ci;
  return o + gl(i);
}
function Mi(t, o) {
  let p = S(18),
    i = o === void 0 ? oI : o,
    u = Qi(),
    d = si(i),
    l;
  if (p[0] !== t || p[1] !== u || p[2] !== d || p[3] !== i) l = t === void 0 ? d : () => ra(u, t(), i), p[0] = t, p[1] = u, p[2] = d, p[3] = i, p[4] = l;else l = p[4];
  let m = l,
    {
      refusedWithin: refusedWithin_2,
      noteRefused: noteRefused_2
    } = so(),
    h;
  if (p[5] !== m || p[6] !== noteRefused_2 || p[7] !== refusedWithin_2 || p[8] !== i) h = () => {
    if (m() || refusedWithin_2(i)) {
      return noteRefused_2(), !0;
    }
    return !1;
  }, p[5] = m, p[6] = noteRefused_2, p[7] = refusedWithin_2, p[8] = i, p[9] = h;else h = p[9];
  let refuse = h,
    _;
  if (p[10] !== m || p[11] !== noteRefused_2 || p[12] !== refusedWithin_2 || p[13] !== i) _ = () => {
    if (!m() && !refusedWithin_2(i)) {
      return !1;
    }
    return noteRefused_2(), !0;
  }, p[10] = m, p[11] = noteRefused_2, p[12] = refusedWithin_2, p[13] = i, p[14] = _;else _ = p[14];
  let refuseCharacter = _,
    V;
  if (p[15] !== refuse || p[16] !== refuseCharacter) V = {
    refuse: refuse,
    refuseCharacter: refuseCharacter
  }, p[15] = refuse, p[16] = refuseCharacter, p[17] = V;else V = p[17];
  return V;
}
function ule(t) {
  let g = S(84),
    {
      options: options,
      onChange: onChange,
      onFocus: onFocus,
      onCancel: onCancel,
      isDisabled: isDisabled,
      disableSelection: disableSelection,
      defaultValue: defaultValue,
      refuseInput: refuseInput,
      headings: headings,
      drawLabels: drawLabels,
      hidePromptWhileDisabled: hidePromptWhileDisabled,
      onOpenEditor: onOpenEditor
    } = t,
    T = isDisabled === void 0 ? !1 : isDisabled,
    V = disableSelection === void 0 ? !1 : disableSelection,
    drawLabel = drawLabels === void 0 ? !1 : drawLabels,
    D = hidePromptWhileDisabled === void 0 ? !1 : hidePromptWhileDisabled,
    [f, b, C] = on(),
    [children, H] = y(null),
    W;
  if (g[0] === w) W = cUt(), g[0] = W;else W = g[0];
  let M = W,
    [F, k, R] = nt(null),
    de;
  if (g[1] !== options) de = options.map(Iu).join("\x00"), g[1] = options, g[2] = de;else de = g[2];
  let P = de,
    [N, Ye] = y(P);
  if (N !== P) Ye(P), R(yu), C(Su);
  let [he, ie, L] = nt(null);
  if (N !== P && he !== null) L(wu), C(Ou);
  let G = he && options[he.index - 1]?.type === "input" ? options[he.index - 1] : null,
    ref_2 = A(null);
  wS(ref_2, !T), Za("select", !!onCancel && !T);
  let ee;
  if (g[3] !== V || g[4] !== G || g[5] !== onChange || g[6] !== onFocus || g[7] !== options || g[8] !== C || g[9] !== R || g[10] !== L) ee = J => {
    if (V) {
      return;
    }
    if (G) {
      if (J === "" && !G.screenReaderEmptySubmit) {
        H("Enter some text, or Escape for the list.");
        return;
      }
      if (onChange?.(G.value) === !1) {
        return;
      }
      C(Cu), L(Tu);
      return;
    }
    let index = Number.parseInt(J, 10);
    if (!Number.isFinite(index) || index < 1 || index > options.length) {
      H(options.length === 0 ? `Invalid selection "${J}". Nothing to select.` : `Invalid selection "${J}". Enter a number between 1 and ${options.length}.`), C(Du);
      return;
    }
    let X = options[index - 1];
    if (X.disabled) {
      H(`Option ${index} is disabled.`), C(Vu);
      return;
    }
    if (X.type === "input") {
      L(() => ({
        index: index
      })), R(Ru);
      let He = X.initialValue ?? "";
      C(() => He), X.onChange(He), onFocus?.(X.value);
      return;
    }
    if (onChange?.(X.value) === !1) {
      return;
    }
    C(Fu), R(ku);
  }, g[3] = V, g[4] = G, g[5] = onChange, g[6] = onFocus, g[7] = options, g[8] = C, g[9] = R, g[10] = L, g[11] = ee;else ee = g[11];
  let be = ee,
    ge,
    B;
  if (g[12] !== ie) ge = () => () => {
    ie.current = null;
  }, B = [ie], g[12] = ie, g[13] = ge, g[14] = B;else ge = g[13], B = g[14];
  O(ge, B);
  let Me;
  if (g[15] !== b || g[16] !== G || g[17] !== ie || g[18] !== onOpenEditor || g[19] !== C) Me = () => {
    let current = ie.current;
    if (current === null || !G || !onOpenEditor) {
      return;
    }
    onOpenEditor(b.current, dt => {
      if (ie.current !== current) {
        return;
      }
      if (G.onChange(dt) === !1) {
        return;
      }
      C(() => dt);
    });
  }, g[15] = b, g[16] = G, g[17] = ie, g[18] = onOpenEditor, g[19] = C, g[20] = Me;else Me = g[20];
  const isActive = !T && !V && !!onOpenEditor && G !== null;
  let Dt;
  if (g[21] !== isActive) Dt = {
    context: "Chat",
    isActive: isActive
  }, g[21] = isActive, g[22] = Dt;else Dt = g[22];
  pt("chat:externalEditor", Me, Dt);
  let je;
  if (g[23] !== b || g[24] !== V || g[25] !== k || g[26] !== G || g[27] !== ie || g[28] !== T || g[29] !== onCancel || g[30] !== onFocus || g[31] !== options || g[32] !== refuseInput || g[33] !== C || g[34] !== R || g[35] !== L || g[36] !== be) je = pe => {
    if (T) {
      return;
    }
    if (pe.key === "escape" && pe.name === "escape") {
      if (pe.preventDefault(), G) {
        if (G.onChange(G.initialValue ?? "") === !1) {
          return;
        }
        L(Eu), C(Mu);
        let _t = options.find(Pu) ?? options[0];
        if (_t) onFocus?.(_t.value);
        return;
      }
      onCancel?.();
      return;
    }
    if (V) {
      return;
    }
    if (pe.key === "return" && pe.name === "return") {
      if (pe.preventDefault(), refuseInput?.()) {
        return;
      }
      if (G || b.current.length > 0) {
        be(b.current);
        return;
      }
      if (M && k.current !== null) be(String(k.current + 1));
      return;
    }
    if (pe.key === "backspace" || pe.key === "delete") {
      pe.preventDefault();
      let current_2 = b.current;
      let ze = Q(current_2, current_2.length - 1);
      if (G && G.onChange(ze) === !1) {
        return;
      }
      C(() => ze);
      return;
    }
    if (M && !G && ie.current === null && (pe.name === "up" || pe.name === "down")) {
      if (pe.preventDefault(), refuseInput?.()) {
        return;
      }
      H(null), C(Au);
      let ft = options.length;
      if (ft === 0) {
        return;
      }
      let current_3 = k.current;
      let We = current_3 === null ? pe.name === "down" ? 0 : ft - 1 : (current_3 + (pe.name === "down" ? 1 : -1) + ft) % ft;
      R(() => We);
      let Ut = options[We];
      if (Ut) onFocus?.(Ut.value);
      return;
    }
    if (G) {
      if (pe.key.length === 1 && !pe.ctrl && !pe.meta) {
        pe.preventDefault();
        let Je = b.current + pe.key;
        if (G.onChange(Je) === !1) {
          return;
        }
        C(() => Je);
      }
      return;
    }
    let Vt = Dae(pe.key);
    if (/^[0-9]$/.test(Vt)) {
      if (pe.preventDefault(), refuseInput?.()) {
        return;
      }
      H(null), C(mt => mt + Vt), R(Bu);
    }
  }, g[23] = b, g[24] = V, g[25] = k, g[26] = G, g[27] = ie, g[28] = T, g[29] = onCancel, g[30] = onFocus, g[31] = options, g[32] = refuseInput, g[33] = C, g[34] = R, g[35] = L, g[36] = be, g[37] = je;else je = g[37];
  let onKeyDown = je,
    Rt;
  if (g[38] !== f || g[39] !== G || g[40] !== he?.index || g[41] !== onCancel || g[42] !== options.length) Rt = G ? `Enter text for option ${he?.index} (${rI(G.label)}), or Escape for the list: ${ma(dc(f))}` : options.length === 0 ? `Nothing to select${onCancel ? ". Escape to cancel" : ""}: ${f}` : `Select with numbers [1-${options.length}]${M ? " or up / down arrow keys" : ""}. Then ${Oo(["Enter to submit", ...(onCancel ? ["Escape to cancel"] : [])])}: ${f}`, g[38] = f, g[39] = G, g[40] = he?.index, g[41] = onCancel, g[42] = options.length, g[43] = Rt;else Rt = g[43];
  let children_2 = Rt,
    column;
  if (g[44] !== children_2) column = ce(children_2), g[44] = children_2, g[45] = column;else column = g[45];
  const active = !T && !V && F === null;
  let Ft;
  if (g[46] !== column || g[47] !== active) Ft = {
    line: 0,
    column: column,
    active: active,
    visible: !0
  }, g[46] = column, g[47] = active, g[48] = Ft;else Ft = g[48];
  let ref = BC(Ft),
    kt;
  if (g[49] !== onKeyDown || g[50] !== T) kt = T ? {} : {
    tabIndex: 0,
    onKeyDown: onKeyDown
  }, g[49] = onKeyDown, g[50] = T, g[51] = kt;else kt = g[51];
  let Qe;
  if (g[52] !== defaultValue || g[53] !== V || g[54] !== drawLabel || g[55] !== F || g[56] !== headings || g[57] !== T || g[58] !== options) {
    let te;
    if (g[60] !== defaultValue || g[61] !== V || g[62] !== drawLabel || g[63] !== F || g[64] !== headings || g[65] !== T) te = (option, vt) => r(pu, {
      children: [headings?.get(vt), e(Kn, {
        index: vt + 1,
        option: option,
        selected: defaultValue !== void 0 && option.value === defaultValue,
        focused: F === vt && !T && !V,
        drawLabel: drawLabel
      })]
    }, String(option.value)), g[60] = defaultValue, g[61] = V, g[62] = drawLabel, g[63] = F, g[64] = headings, g[65] = T, g[66] = te;else te = g[66];
    Qe = options.map(te);
    g[52] = defaultValue, g[53] = V, g[54] = drawLabel, g[55] = F, g[56] = headings, g[57] = T, g[58] = options, g[59] = Qe;
  } else Qe = g[59];
  let te;
  if (g[67] !== headings || g[68] !== options.length) te = headings?.get(options.length), g[67] = headings, g[68] = options.length, g[69] = te;else te = g[69];
  let et;
  if (g[70] !== children) et = children && e(n, {
    children: children
  }), g[70] = children, g[71] = et;else et = g[71];
  let Et;
  if (g[72] !== ref || g[73] !== V || g[74] !== D || g[75] !== T || g[76] !== children_2) Et = !V && !(T && D) && e(s, {
    ref: ref,
    children: e(n, {
      children: children_2
    })
  }), g[72] = ref, g[73] = V, g[74] = D, g[75] = T, g[76] = children_2, g[77] = Et;else Et = g[77];
  let Mt;
  if (g[78] !== kt || g[79] !== Qe || g[80] !== te || g[81] !== et || g[82] !== Et) Mt = r(s, {
    ref: ref_2,
    flexDirection: "column",
    ...kt,
    children: [Qe, te, et, Et]
  }), g[78] = kt, g[79] = Qe, g[80] = te, g[81] = et, g[82] = Et, g[83] = Mt;else Mt = g[83];
  return Mt;
}
function azr(t) {
  let v = S(102),
    {
      options: options_2,
      defaultValue: defaultValue_2,
      onChange: onChange_2,
      onSubmit: onSubmit,
      onFocus: onFocus_2,
      onCancel: onCancel_2,
      isDisabled: isDisabled_2,
      submitButtonText: submitButtonText,
      refuseInput: refuseInput_2,
      onOpenEditor: onOpenEditor_2
    } = t,
    _;
  if (v[0] !== defaultValue_2) _ = defaultValue_2 === void 0 ? [] : defaultValue_2, v[0] = defaultValue_2, v[1] = _;else _ = v[1];
  let T = _,
    V = isDisabled_2 === void 0 ? !1 : isDisabled_2,
    [q, D, f] = on(),
    [children_3, C] = y(null),
    K;
  if (v[2] === w) K = cUt(), v[2] = K;else K = v[2];
  let H = K,
    [g, W, M] = nt(null),
    [F, k, R] = nt(null),
    de;
  if (v[3] !== options_2) de = options_2.map(Nu).join("\x00"), v[3] = options_2, v[4] = de;else de = v[4];
  let P = de,
    [N, Ye] = y(P);
  if (N !== P) Ye(P), M(Lu), R(Uu), f(Ku);
  let he;
  if (v[5] !== T || v[6] !== options_2) he = () => new Set(options_2.flatMap((item, index) => !item.disabled && T.includes(item.value) ? [index] : [])), v[5] = T, v[6] = options_2, v[7] = he;else he = v[7];
  let G = he,
    [z, ee] = y(null),
    J = A(!1),
    xe = A(!1),
    X;
  if (v[8] !== onSubmit || v[9] !== z) X = () => {
    if (z !== null) {
      let He = [...z];
      ee(null), J.current = !1, onSubmit?.(He);
    }
  }, v[8] = onSubmit, v[9] = z, v[10] = X;else X = v[10];
  let be;
  if (v[11] !== z) be = [z], v[11] = z, v[12] = be;else be = v[12];
  O(X, be);
  let [ge, B, Me] = nt(null);
  if (N !== P && ge !== null) Me($u), f(Hu);
  let se = ge && options_2[ge.index - 1]?.type === "input" ? options_2[ge.index - 1] : null,
    ref_4 = A(null);
  wS(ref_4, !V), Za("multi-select", !!onCancel_2 && !V);
  let oe;
  if (v[13] !== onChange_2 || v[14] !== f || v[15] !== M || v[16] !== Me || v[17] !== R) oe = Dt => {
    if (J.current = !0, onChange_2?.([...Dt]) === !1) {
      J.current = !1;
      return;
    }
    ee(Dt), f(ju), Me(zu), M(_u), R(Gu);
  }, v[13] = onChange_2, v[14] = f, v[15] = M, v[16] = Me, v[17] = R, v[18] = oe;else oe = v[18];
  let je = oe,
    pe;
  if (v[19] !== T || v[20] !== je || v[21] !== se || v[22] !== ge || v[23] !== onFocus_2 || v[24] !== options_2 || v[25] !== f || v[26] !== M || v[27] !== Me || v[28] !== R) pe = _t => {
    if (se && ge) {
      if (_t === "") {
        C("Enter some text, or Escape for the list.");
        return;
      }
      je([...ge.stashed, se.value]);
      return;
    }
    let raw = _t.trim();
    if (raw === "") {
      je(T);
      return;
    }
    let ze = raw.split(/[\s,]+/).filter(Boolean);
    if (ze.length === 0) {
      je(T);
      return;
    }
    let ft = new Set();
    let stashed = [];
    let We = null;
    for (const Ut of ze) {
      if (!/^\d+$/.test(Ut)) {
        C(`Invalid selection "${Ut}". Enter numbers between 1 and ${options_2.length}, comma- or space-separated.`), f(qu);
        return;
      }
      let index_2 = Number.parseInt(Ut, 10);
      if (ft.has(index_2)) {
        continue;
      }
      if (ft.add(index_2), index_2 < 1 || index_2 > options_2.length) {
        C(`Invalid selection "${Ut}". Enter numbers between 1 and ${options_2.length}, comma- or space-separated.`), f(Yu);
        return;
      }
      let opt = options_2[index_2 - 1];
      if (opt.disabled) {
        C(`Option ${index_2} is disabled.`), f(Ju);
        return;
      }
      if (opt.type === "input") {
        if (We) {
          C("Only one free-text option can be included per selection."), f(Xu);
          return;
        }
        We = {
          index: index_2,
          opt: opt
        };
        continue;
      }
      stashed.push(opt.value);
    }
    if (We?.opt) {
      Me(() => ({
        index: We.index,
        stashed: stashed,
        raw: raw
      })), M(Qu), R(Zu);
      let mt = We.opt.initialValue ?? "";
      f(() => mt), We.opt.onChange(mt), onFocus_2?.(We.opt.value);
      return;
    }
    je(stashed);
  }, v[19] = T, v[20] = je, v[21] = se, v[22] = ge, v[23] = onFocus_2, v[24] = options_2, v[25] = f, v[26] = M, v[27] = Me, v[28] = R, v[29] = pe;else pe = v[29];
  let Xe = pe,
    Rt,
    a;
  if (v[30] !== B) Rt = () => () => {
    B.current = null;
  }, a = [B], v[30] = B, v[31] = Rt, v[32] = a;else Rt = v[31], a = v[32];
  O(Rt, a);
  let wt;
  if (v[33] !== D || v[34] !== se || v[35] !== B || v[36] !== onOpenEditor_2 || v[37] !== f) wt = () => {
    let current_4 = B.current;
    if (current_4 === null || !se || !onOpenEditor_2) {
      return;
    }
    onOpenEditor_2(D.current, Ft => {
      if (B.current !== current_4) {
        return;
      }
      if (se.onChange(Ft) === !1) {
        return;
      }
      f(() => Ft);
    });
  }, v[33] = D, v[34] = se, v[35] = B, v[36] = onOpenEditor_2, v[37] = f, v[38] = wt;else wt = v[38];
  const isActive_2 = !V && !!onOpenEditor_2 && se !== null;
  let kt;
  if (v[39] !== isActive_2) kt = {
    context: "Chat",
    isActive: isActive_2
  }, v[39] = isActive_2, v[40] = kt;else kt = v[40];
  pt("chat:externalEditor", wt, kt);
  let Qe;
  if (v[41] !== D || v[42] !== G || v[43] !== je || v[44] !== W || v[45] !== se || v[46] !== ge || v[47] !== B || v[48] !== V || v[49] !== onCancel_2 || v[50] !== onFocus_2 || v[51] !== options_2 || v[52] !== refuseInput_2 || v[53] !== f || v[54] !== M || v[55] !== Me || v[56] !== R || v[57] !== Xe || v[58] !== k) Qe = te => {
    if (V) {
      return;
    }
    if (te.key === "escape" && te.name === "escape") {
      if (te.preventDefault(), ge) {
        let {
          raw: raw_2
        } = ge;
        Me(ed), f(() => raw_2);
        let vt = options_2.find(td) ?? options_2[0];
        if (vt) onFocus_2?.(vt.value);
        return;
      }
      onCancel_2?.();
      return;
    }
    if (te.key === "return" && te.name === "return") {
      if (te.preventDefault(), xe.current) {
        refuseInput_2?.(), xe.current = !1, f(nd), C("Part of that entry arrived before the list was ready \u2014 enter your selection again.");
        return;
      }
      if (refuseInput_2?.()) {
        return;
      }
      if (J.current) {
        return;
      }
      if (H && !se && D.current.length === 0 && k.current !== null) {
        let et = [...k.current].sort(od);
        if (et.length === 0) je([]);else Xe(et.map(id).join(" "));
        return;
      }
      Xe(D.current);
      return;
    }
    if (te.key === "backspace" || te.key === "delete") {
      te.preventDefault();
      let current_5 = D.current;
      let Mt = Q(current_5, current_5.length - 1);
      if (se && se.onChange(Mt) === !1) {
        return;
      }
      if (f(() => Mt), !se && current_5 !== Mt) R(sd);
      return;
    }
    if (H && !se && B.current === null && (te.name === "up" || te.name === "down")) {
      if (te.preventDefault(), refuseInput_2?.()) {
        return;
      }
      C(null), f(rd), xe.current = !1;
      let Kt = options_2.length;
      if (Kt === 0) {
        return;
      }
      let current_6 = W.current;
      let Tn = current_6 === null ? te.name === "down" ? 0 : Kt - 1 : (current_6 + (te.name === "down" ? 1 : -1) + Kt) % Kt;
      M(() => Tn);
      let Xn = options_2[Tn];
      if (Xn) onFocus_2?.(Xn.value);
      return;
    }
    if (H && !se && B.current === null && W.current !== null && vme(te.key) === " ") {
      if (te.preventDefault(), refuseInput_2?.()) {
        return;
      }
      let current_7 = W.current;
      let qt = options_2[current_7];
      if (!qt) {
        return;
      }
      if (qt.disabled) {
        C(`Option ${current_7 + 1} is disabled.`);
        return;
      }
      C(null), R(ei => {
        let bt = new Set(ei ?? G());
        if (bt.has(current_7)) bt.delete(current_7);else bt.add(current_7);
        return bt;
      });
      return;
    }
    if (se) {
      if (te.key.length === 1 && !te.ctrl && !te.meta) {
        te.preventDefault();
        let Yt = D.current + te.key;
        if (se.onChange(Yt) === !1) {
          return;
        }
        f(() => Yt);
      }
      return;
    }
    let xt = vme(Dae(te.key)).replace("\uFF0C", ",").replace("\u3001", ",");
    if (/^[0-9, ]$/.test(xt)) {
      if (te.preventDefault(), xe.current) {
        refuseInput_2?.();
        return;
      }
      if (refuseInput_2?.()) {
        xe.current = !0;
        return;
      }
      C(null), f(rt => rt + xt), M(ad), R(ld);
    }
  }, v[41] = D, v[42] = G, v[43] = je, v[44] = W, v[45] = se, v[46] = ge, v[47] = B, v[48] = V, v[49] = onCancel_2, v[50] = onFocus_2, v[51] = options_2, v[52] = refuseInput_2, v[53] = f, v[54] = M, v[55] = Me, v[56] = R, v[57] = Xe, v[58] = k, v[59] = Qe;else Qe = v[59];
  let onKeyDown_2 = Qe,
    Ae;
  if (v[60] !== q || v[61] !== T || v[62] !== se || v[63] !== ge?.index || v[64] !== onCancel_2 || v[65] !== options_2.length || v[66] !== submitButtonText || v[67] !== F) Ae = se ? `Enter text for option ${ge?.index} (${rI(se.label)}), or Escape for the list: ${ma(dc(q))}` : `Select with numbers [1-${options_2.length}] (comma- or space-separated for several)${H ? " or up / down arrow keys" : ""}. Then ${Oo([...(H ? ["Space to toggle"] : []), `Enter to ${submitButtonText ?? "submit"}`, ...(T.length > 0 && F === null ? ["bare Enter for defaults"] : []), ...(onCancel_2 ? ["Escape to cancel"] : [])])}: ${q}`, v[60] = q, v[61] = T, v[62] = se, v[63] = ge?.index, v[64] = onCancel_2, v[65] = options_2.length, v[66] = submitButtonText, v[67] = F, v[68] = Ae;else Ae = v[68];
  let children_4 = Ae,
    column_2;
  if (v[69] !== children_4) column_2 = ce(children_4), v[69] = children_4, v[70] = column_2;else column_2 = v[70];
  const active_2 = !V && g === null;
  let ni;
  if (v[71] !== column_2 || v[72] !== active_2) ni = {
    line: 0,
    column: column_2,
    active: active_2,
    visible: !0
  }, v[71] = column_2, v[72] = active_2, v[73] = ni;else ni = v[73];
  let ref_3 = BC(ni),
    oi;
  if (v[74] !== T) oi = new Set(T), v[74] = T, v[75] = oi;else oi = v[75];
  let cn = oi,
    Dn;
  if (v[76] !== onKeyDown_2 || v[77] !== V) Dn = V ? {} : {
    tabIndex: 0,
    onKeyDown: onKeyDown_2
  }, v[76] = onKeyDown_2, v[77] = V, v[78] = Dn;else Dn = v[78];
  let Zn;
  if (v[79] !== cn || v[80] !== g || v[81] !== V || v[82] !== options_2 || v[83] !== F) {
    let At;
    if (v[85] !== cn || v[86] !== g || v[87] !== V || v[88] !== F) At = (option_2, ii) => e(Kn, {
      index: ii + 1,
      option: option_2,
      selected: F ? F.has(ii) : cn.has(option_2.value),
      focused: g === ii && !V
    }, String(option_2.value)), v[85] = cn, v[86] = g, v[87] = V, v[88] = F, v[89] = At;else At = v[89];
    Zn = options_2.map(At);
    v[79] = cn, v[80] = g, v[81] = V, v[82] = options_2, v[83] = F, v[84] = Zn;
  } else Zn = v[84];
  let At;
  if (v[90] !== children_3) At = children_3 && e(n, {
    children: children_3
  }), v[90] = children_3, v[91] = At;else At = v[91];
  let children_5;
  if (v[92] !== children_4) children_5 = e(n, {
    children: children_4
  }), v[92] = children_4, v[93] = children_5;else children_5 = v[93];
  let to;
  if (v[94] !== ref_3 || v[95] !== children_5) to = e(s, {
    ref: ref_3,
    children: children_5
  }), v[94] = ref_3, v[95] = children_5, v[96] = to;else to = v[96];
  let ri;
  if (v[97] !== Dn || v[98] !== Zn || v[99] !== At || v[100] !== to) ri = r(s, {
    ref: ref_4,
    flexDirection: "column",
    ...Dn,
    children: [Zn, At, to]
  }), v[97] = Dn, v[98] = Zn, v[99] = At, v[100] = to, v[101] = ri;else ri = v[101];
  return ri;
}
function Kn(t) {
  let m = S(26),
    {
      index: index_3,
      option: option_3,
      selected: selected,
      focused: d,
      drawLabel: drawLabel_2
    } = t,
    l = drawLabel_2 === void 0 ? !1 : drawLabel_2,
    I;
  if (m[0] !== d) I = {
    line: 0,
    column: 0,
    active: d,
    visible: !0
  }, m[0] = d, m[1] = I;else I = m[1];
  let ref_5 = BC(I),
    h;
  if (m[2] !== option_3.label) h = rI(option_3.label), m[2] = option_3.label, m[3] = h;else h = m[3];
  let v = h,
    _ = option_3.description ? ` \u2014 ${option_3.description}` : "";
  const T = `${v}${_}`;
  let V;
  if (m[4] !== T) V = Is(T), m[4] = T, m[5] = V;else V = m[5];
  let q = V;
  const D = option_3.disabled ? "(disabled)" : null,
    f = selected ? "(selected)" : null;
  let b;
  if (m[6] !== D || m[7] !== f) b = [D, f].filter(Boolean), m[6] = D, m[7] = f, m[8] = b;else b = m[8];
  let C = b.join(" ");
  if (l) {
    const K = C ? ` ${C}` : "";
    let H;
    if (m[9] !== index_3 || m[10] !== K) H = r(n, {
      children: [index_3, ".", K]
    }), m[9] = index_3, m[10] = K, m[11] = H;else H = m[11];
    let g;
    if (m[12] !== option_3.description) g = option_3.description && r(n, {
      children: ["\u2014 ", option_3.description]
    }), m[12] = option_3.description, m[13] = g;else g = m[13];
    let W;
    if (m[14] !== ref_5 || m[15] !== option_3.label || m[16] !== H || m[17] !== g) W = r(s, {
      ref: ref_5,
      children: [H, option_3.label, g]
    }), m[14] = ref_5, m[15] = option_3.label, m[16] = H, m[17] = g, m[18] = W;else W = m[18];
    return W;
  }
  const K = C ? `${C} ` : "";
  let children_6;
  if (m[19] !== q || m[20] !== index_3 || m[21] !== K) children_6 = r(n, {
    children: [index_3, ". ", K, q]
  }), m[19] = q, m[20] = index_3, m[21] = K, m[22] = children_6;else children_6 = m[22];
  let g;
  if (m[23] !== ref_5 || m[24] !== children_6) g = e(s, {
    ref: ref_5,
    children: children_6
  }), m[23] = ref_5, m[24] = children_6, m[25] = g;else g = m[25];
  return g;
}
function lzr(t) {
  let D = S(43),
    {
      confirmLabel: confirmLabel,
      cancelLabel: cancelLabel,
      onConfirm: onConfirm,
      onCancel: onCancel_3,
      refuseInput: refuseInput_3,
      openedAt: openedAt,
      windowMs: windowMs
    } = t,
    [I, c, h] = on(),
    [children_7, _] = y(null),
    ref_7 = A(null);
  wS(ref_7, !0), Za("select", !0);
  let {
      refuse: refuse_2,
      refuseCharacter: refuseCharacter_2
    } = Mi(openedAt, windowMs),
    f;
  if (D[0] !== refuseInput_3 || D[1] !== refuse_2) f = function b() {
    return (refuseInput_3?.() ?? !1) || refuse_2();
  }, D[0] = refuseInput_3, D[1] = refuse_2, D[2] = f;else f = D[2];
  let b = f,
    C;
  if (D[3] !== refuseInput_3 || D[4] !== refuseCharacter_2) C = function K() {
    return (refuseInput_3?.() ?? !1) || refuseCharacter_2();
  }, D[3] = refuseInput_3, D[4] = refuseCharacter_2, D[5] = C;else C = D[5];
  let K = C,
    H;
  if (D[6] !== onCancel_3 || D[7] !== onConfirm || D[8] !== b || D[9] !== h) H = g => {
    let W = g.trim().toLowerCase();
    if ((W === "y" || W === "yes" || W === "n" || W === "no") && b()) {
      h(ud);
      return;
    }
    if (W === "y" || W === "yes") {
      return onConfirm();
    }
    if (W === "n" || W === "no") {
      return onCancel_3();
    }
    _("Please answer y or n."), h(dd);
  }, D[6] = onCancel_3, D[7] = onConfirm, D[8] = b, D[9] = h, D[10] = H;else H = D[10];
  let M = H,
    F;
  if (D[11] !== c || D[12] !== onCancel_3 || D[13] !== b || D[14] !== K || D[15] !== h || D[16] !== M) F = k => {
    if (k.key === "escape" && k.name === "escape") {
      if (k.preventDefault(), b()) {
        return;
      }
      return onCancel_3();
    }
    if (k.key === "return" && k.name === "return") {
      return k.preventDefault(), M(c.current);
    }
    if (k.key === "backspace" || k.key === "delete") {
      k.preventDefault(), h(cd);
      return;
    }
    if (k.key.length === 1 && !k.ctrl && !k.meta) {
      if (k.preventDefault(), K()) {
        return;
      }
      _(null), h(R => R + k.key);
    }
  }, D[11] = c, D[12] = onCancel_3, D[13] = b, D[14] = K, D[15] = h, D[16] = M, D[17] = F;else F = D[17];
  let onKeyDown_3 = F,
    children_8 = `Enter y/n: ${I}`,
    column_3;
  if (D[18] !== children_8) column_3 = ce(children_8), D[18] = children_8, D[19] = column_3;else column_3 = D[19];
  let Ye;
  if (D[20] !== column_3) Ye = {
    line: 0,
    column: column_3,
    active: !0,
    visible: !0
  }, D[20] = column_3, D[21] = Ye;else Ye = D[21];
  let ref_6 = BC(Ye),
    ie;
  if (D[22] !== confirmLabel) ie = rI(confirmLabel), D[22] = confirmLabel, D[23] = ie;else ie = D[23];
  let L;
  if (D[24] !== ie) L = r(n, {
    children: ["y. ", ie]
  }), D[24] = ie, D[25] = L;else L = D[25];
  let G;
  if (D[26] !== cancelLabel) G = rI(cancelLabel), D[26] = cancelLabel, D[27] = G;else G = D[27];
  let z;
  if (D[28] !== G) z = r(n, {
    children: ["n. ", G]
  }), D[28] = G, D[29] = z;else z = D[29];
  let ee;
  if (D[30] !== children_7) ee = children_7 && e(n, {
    children: children_7
  }), D[30] = children_7, D[31] = ee;else ee = D[31];
  let children_9;
  if (D[32] !== children_8) children_9 = e(n, {
    children: children_8
  }), D[32] = children_8, D[33] = children_9;else children_9 = D[33];
  let xe;
  if (D[34] !== ref_6 || D[35] !== children_9) xe = e(s, {
    ref: ref_6,
    children: children_9
  }), D[34] = ref_6, D[35] = children_9, D[36] = xe;else xe = D[36];
  let X;
  if (D[37] !== onKeyDown_3 || D[38] !== z || D[39] !== ee || D[40] !== xe || D[41] !== L) X = r(s, {
    ref: ref_7,
    flexDirection: "column",
    tabIndex: 0,
    onKeyDown: onKeyDown_3,
    children: [L, z, ee, xe]
  }), D[37] = onKeyDown_3, D[38] = z, D[39] = ee, D[40] = xe, D[41] = L, D[42] = X;else X = D[42];
  return X;
}
j();
j();
function kd(_) {
  return hy(_) ? _.key : "";
}
var JR = "userMessageBackground";
function EUe(t = "tint") {
  return Se.level === 0 ? "inverse" : t;
}
var To = Jt("");
function TUe(t) {
  let o = S(14),
    i,
    windowStart;
  if (o[0] !== t) ({
    windowStart: windowStart,
    ...i
  } = t), o[0] = t, o[1] = i, o[2] = windowStart;else i = o[1], windowStart = o[2];
  let d = windowStart === void 0 ? 0 : windowStart,
    p,
    l,
    m;
  if (o[3] !== i.children || o[4] !== d) {
    let I = z_.toArray(i.children).map(kd);
    p = To.Provider;
    l = d;
    m = I.join();
    o[3] = i.children, o[4] = d, o[5] = p, o[6] = l, o[7] = m;
  } else p = o[5], l = o[6], m = o[7];
  const value = `${l} ${m}`;
  let children_10;
  if (o[8] !== i) children_10 = e(s, {
    flexDirection: "column",
    ...i
  }), o[8] = i, o[9] = children_10;else children_10 = o[9];
  let v;
  if (o[10] !== p || o[11] !== value || o[12] !== children_10) v = e(p, {
    value: value,
    children: children_10
  }), o[10] = p, o[11] = value, o[12] = children_10, o[13] = v;else v = o[13];
  return v;
}
function est(t) {
  let p = S(5),
    o = ve(To),
    [i, u] = y(null),
    d = t && i === o;
  if (i !== null && !d) u(null);
  let l;
  if (p[0] !== o) l = m => u(m ? o : null), p[0] = o, p[1] = l;else l = p[1];
  let I;
  if (p[2] !== d || p[3] !== l) I = [d, l], p[2] = d, p[3] = l, p[4] = I;else I = p[4];
  return I;
}
function nI(t) {
  let F = S(47),
    {
      isFocused: isFocused,
      isSelected: isSelected,
      children: children_11,
      description: d,
      showScrollDown: showScrollDown,
      showScrollUp: showScrollUp,
      styled: styled,
      disabled: disabled,
      idle: idle,
      declareCursor: declareCursor,
      onClick: onClick,
      hoverStyle: hoverStyle,
      onHoverChange: onHoverChange
    } = t,
    V = isSelected === void 0 ? !1 : isSelected,
    q = styled === void 0 ? !0 : styled,
    D = disabled === void 0 ? !1 : disabled,
    idle_2 = idle === void 0 ? !1 : idle,
    b = hoverStyle === void 0 ? "tint" : hoverStyle,
    C = !D && onClick !== void 0,
    K = !D && (onClick !== void 0 || onHoverChange !== void 0),
    [H, g] = est(K),
    W = H && C,
    M = EUe(b),
    k;
  if (F[0] !== onHoverChange || F[1] !== g) k = R => {
    g(R), onHoverChange?.(R);
  }, F[0] = onHoverChange, F[1] = g, F[2] = k;else k = F[2];
  let de = k,
    P;
  if (F[3] !== D || F[4] !== idle_2 || F[5] !== isFocused || F[6] !== V || F[7] !== q) P = function N() {
    if (D) {
      return "inactive";
    }
    if (!q) {
      return;
    }
    if (V) {
      return "success";
    }
    if (isFocused && !idle_2) {
      return "suggestion";
    }
  }, F[3] = D, F[4] = idle_2, F[5] = isFocused, F[6] = V, F[7] = q, F[8] = P;else P = F[8];
  let N = P,
    color = N();
  const active_3 = isFocused && !D && declareCursor !== !1;
  let ie;
  if (F[9] !== active_3) ie = {
    line: 0,
    column: 0,
    active: active_3
  }, F[9] = active_3, F[10] = ie;else ie = F[10];
  let ref_8 = BC(ie);
  const backgroundColor = W && M === "tint" ? JR : void 0,
    onClick_2 = C ? onClick : void 0;
  let onMouseEnter;
  if (F[11] !== K || F[12] !== de) onMouseEnter = K ? () => de(!0) : void 0, F[11] = K, F[12] = de, F[13] = onMouseEnter;else onMouseEnter = F[13];
  let onMouseLeave;
  if (F[14] !== K || F[15] !== de) onMouseLeave = K ? () => de(!1) : void 0, F[14] = K, F[15] = de, F[16] = onMouseLeave;else onMouseLeave = F[16];
  const hovered = W && M === "pointer",
    inverse = W && M === "inverse";
  let He;
  if (F[17] !== D || F[18] !== idle_2 || F[19] !== isFocused || F[20] !== showScrollDown || F[21] !== showScrollUp || F[22] !== hovered || F[23] !== inverse) He = e(s, {
    flexShrink: 0,
    children: e(Li, {
      disabled: D,
      isFocused: isFocused,
      idle: idle_2,
      showScrollUp: showScrollUp,
      showScrollDown: showScrollDown,
      hovered: hovered,
      inverse: inverse
    })
  }), F[17] = D, F[18] = idle_2, F[19] = isFocused, F[20] = showScrollDown, F[21] = showScrollUp, F[22] = hovered, F[23] = inverse, F[24] = He;else He = F[24];
  let be;
  if (F[25] !== children_11 || F[26] !== D || F[27] !== q || F[28] !== color) be = q ? e(n, {
    color: color,
    dimColor: D,
    wrap: "truncate-end",
    children: children_11
  }) : children_11, F[25] = children_11, F[26] = D, F[27] = q, F[28] = color, F[29] = be;else be = F[29];
  let ge;
  if (F[30] !== D || F[31] !== V) ge = V && !D && e(s, {
    flexShrink: 0,
    children: e(n, {
      "aria-label": "(selected)",
      color: "success",
      children: re.tick
    })
  }), F[30] = D, F[31] = V, F[32] = ge;else ge = F[32];
  let B;
  if (F[33] !== He || F[34] !== be || F[35] !== ge) B = r(s, {
    flexDirection: "row",
    gap: 1,
    children: [He, be, ge]
  }), F[33] = He, F[34] = be, F[35] = ge, F[36] = B;else B = F[36];
  let Me;
  if (F[37] !== d) Me = d && e(s, {
    paddingLeft: 2,
    children: e(n, {
      dimColor: !0,
      wrap: "truncate-end",
      children: d
    })
  }), F[37] = d, F[38] = Me;else Me = F[38];
  let se;
  if (F[39] !== ref_8 || F[40] !== backgroundColor || F[41] !== onClick_2 || F[42] !== onMouseEnter || F[43] !== onMouseLeave || F[44] !== B || F[45] !== Me) se = r(s, {
    ref: ref_8,
    flexDirection: "column",
    backgroundColor: backgroundColor,
    onClick: onClick_2,
    onMouseEnter: onMouseEnter,
    onMouseLeave: onMouseLeave,
    children: [B, Me]
  }), F[39] = ref_8, F[40] = backgroundColor, F[41] = onClick_2, F[42] = onMouseEnter, F[43] = onMouseLeave, F[44] = B, F[45] = Me, F[46] = se;else se = F[46];
  return se;
}
function Li(t) {
  let I = S(12),
    {
      disabled: disabled_2,
      isFocused: isFocused_2,
      idle: u,
      showScrollUp: showScrollUp_2,
      showScrollDown: showScrollDown_2,
      hovered: hovered_2,
      inverse: inverse_2
    } = t;
  if (disabled_2) {
    let c;
    if (I[0] === w) c = e(n, {
      "aria-hidden": !0,
      children: " "
    }), I[0] = c;else c = I[0];
    return c;
  }
  if (isFocused_2) {
    const color_2 = u ? void 0 : "suggestion";
    let h;
    if (I[1] !== u || I[2] !== inverse_2 || I[3] !== color_2) h = e(n, {
      "aria-hidden": !0,
      color: color_2,
      dimColor: u,
      inverse: inverse_2,
      children: re.pointer
    }), I[1] = u, I[2] = inverse_2, I[3] = color_2, I[4] = h;else h = I[4];
    return h;
  }
  if (showScrollDown_2) {
    let c;
    if (I[5] !== inverse_2) c = e(n, {
      "aria-label": "(more below)",
      dimColor: !0,
      inverse: inverse_2,
      children: re.arrowDown
    }), I[5] = inverse_2, I[6] = c;else c = I[6];
    return c;
  }
  if (showScrollUp_2) {
    let c;
    if (I[7] !== inverse_2) c = e(n, {
      "aria-label": "(more above)",
      dimColor: !0,
      inverse: inverse_2,
      children: re.arrowUp
    }), I[7] = inverse_2, I[8] = c;else c = I[8];
    return c;
  }
  if (hovered_2) {
    let c;
    if (I[9] === w) c = e(n, {
      "aria-hidden": !0,
      dimColor: !0,
      children: re.pointer
    }), I[9] = c;else c = I[9];
    return c;
  }
  let c;
  if (I[10] !== inverse_2) c = e(n, {
    "aria-hidden": !0,
    inverse: inverse_2,
    children: " "
  }), I[10] = inverse_2, I[11] = c;else c = I[11];
  return c;
}
j();
function Vo(t) {
  let m = S(13),
    {
      imageId: imageId,
      isSelected: isSelected_2
    } = t,
    u = isSelected_2 === void 0 ? !1 : isSelected_2,
    p = xs(d => d.storedImagePaths.get(imageId) ?? null) ?? null,
    children_12 = `[Image #${imageId}]`,
    I;
  if (m[0] !== p) I = p && TS() ? b2(p) : null, m[0] = p, m[1] = I;else I = m[1];
  let url = I;
  if (url) {
    let fallback, children_13;
    if (m[2] !== children_12 || m[3] !== u) fallback = e(n, {
      inverse: u,
      children: children_12
    }), children_13 = e(n, {
      inverse: u,
      bold: u,
      children: children_12
    }), m[2] = children_12, m[3] = u, m[4] = fallback, m[5] = children_13;else fallback = m[4], children_13 = m[5];
    let _;
    if (m[6] !== url || m[7] !== fallback || m[8] !== children_13) _ = e(sn, {
      url: url,
      fallback: fallback,
      children: children_13
    }), m[6] = url, m[7] = fallback, m[8] = children_13, m[9] = _;else _ = m[9];
    return _;
  }
  let h;
  if (m[10] !== children_12 || m[11] !== u) h = e(n, {
    inverse: u,
    children: children_12
  }), m[10] = children_12, m[11] = u, m[12] = h;else h = m[12];
  return h;
}
j();
function YGt(t) {
  let [o] = Br(),
    i = Wu(),
    u = Z(Kj, []),
    preserveTrailingWhitespace = ot();
  A5n({
    isTerminalFocused: i,
    canPasteImages: !!t.onImagePaste
  });
  let inputState = q8s({
      value: t.value,
      onChange: t.onChange,
      onSubmit: t.onSubmit,
      onExit: t.onExit,
      onExitMessage: t.onExitMessage,
      onLeftArrowOnEmpty: t.onLeftArrowOnEmpty,
      leftArrowConfirmHint: t.leftArrowConfirmHint,
      onHistoryReset: t.onHistoryReset,
      onHistoryUp: t.onHistoryUp,
      onHistoryDown: t.onHistoryDown,
      focus: t.focus,
      mask: t.mask,
      maskWhole: t.maskWhole,
      multiline: t.multiline,
      disableBackslashReturn: t.disableBackslashReturn,
      clearOnSubmit: t.clearOnSubmit,
      disableCtrlCClear: t.disableCtrlCClear,
      cursorChar: t.showCursor && !u ? " " : "",
      preserveTrailingWhitespace: preserveTrailingWhitespace,
      invert: i ? Jfe : K => K,
      themeText: lr("text", o),
      columns: t.columns,
      leadingPill: t.leadingPill,
      maxVisibleLines: t.maxVisibleLines,
      onImagePaste: t.onImagePaste,
      disableCursorMovementForUpDownKeys: t.disableCursorMovementForUpDownKeys,
      disableEscapeDoublePress: t.disableEscapeDoublePress,
      externalOffset: t.cursorOffset,
      onOffsetChange: t.onChangeCursorOffset,
      inputFilter: t.inputFilter,
      editRelay: t.editRelay,
      commitEdit: t.commitEdit,
      virtualTexts: preserveTrailingWhitespace ? void 0 : t.virtualTexts,
      getPastedContents: t.getPastedContents,
      getInputMode: t.getInputMode,
      onModeChange: t.onModeChange,
      onUndo: t.onUndo,
      onOpenHistorySearch: t.onOpenHistorySearch,
      onToggleHelp: t.onToggleHelp
    }),
    {
      mode: mode,
      setMode: setMode,
      cancelPendingRemap: cancelPendingRemap,
      forgetColumn: forgetColumn,
      isCommandPending: isCommandPending
    } = inputState,
    v = A(!1),
    _ = qo(setMode);
  O(() => {
    let K = !v.current;
    v.current = !0;
    let H = K && (t.initialMode === "VISUAL" || t.initialMode === "VISUAL LINE") ? "NORMAL" : t.initialMode;
    if (H && H !== mode) _(H);
  }, [t.initialMode, mode]);
  let {
      recordInsertRef: recordInsertRef
    } = t,
    {
      recordInsert: recordInsert
    } = inputState;
  O(() => {
    if (!recordInsertRef) return;
    return recordInsertRef.current = recordInsert, () => {
      recordInsertRef.current = null;
    };
  }, [recordInsertRef, recordInsert]);
  let {
    cancelRemapRef: cancelRemapRef
  } = t;
  O(() => {
    if (!cancelRemapRef) return;
    return cancelRemapRef.current = cancelPendingRemap, () => {
      cancelRemapRef.current = null;
    };
  }, [cancelRemapRef, cancelPendingRemap]);
  let {
    forgetColumnRef: forgetColumnRef
  } = t;
  O(() => {
    if (!forgetColumnRef) return;
    return forgetColumnRef.current = forgetColumn, () => {
      forgetColumnRef.current = null;
    };
  }, [forgetColumnRef, forgetColumn]);
  let {
      onEditingStateChange: onEditingStateChange
    } = t,
    b = t.focus !== !1,
    takesEscape = mode !== "NORMAL" || isCommandPending;
  return Zt(() => {
    if (!onEditingStateChange || !b) return;
    return onEditingStateChange({
      mode: mode,
      takesEscape: takesEscape
    }), () => onEditingStateChange(null);
  }, [onEditingStateChange, b, mode, takesEscape]), e(s, {
    flexDirection: "column",
    children: e(dhn, {
      inputState: inputState,
      terminalFocus: i,
      highlights: t.highlights,
      ...t
    })
  });
}
function lhe(t) {
  let c = S(9),
    {
      isFocused: isFocused_3,
      isSelected: isSelected_3,
      children: children_14,
      shouldShowDownArrow: d,
      shouldShowUpArrow: p,
      declareCursor: declareCursor_2,
      onClick: onClick_3,
      hoverStyle: hoverStyle_2
    } = t,
    h;
  if (c[0] !== children_14 || c[1] !== declareCursor_2 || c[2] !== hoverStyle_2 || c[3] !== isFocused_3 || c[4] !== isSelected_3 || c[5] !== onClick_3 || c[6] !== d || c[7] !== p) h = e(nI, {
    isFocused: isFocused_3,
    isSelected: isSelected_3,
    showScrollDown: d,
    showScrollUp: p,
    styled: !1,
    declareCursor: declareCursor_2,
    onClick: onClick_3,
    hoverStyle: hoverStyle_2,
    children: children_14
  }), c[0] = children_14, c[1] = declareCursor_2, c[2] = hoverStyle_2, c[3] = isFocused_3, c[4] = isSelected_3, c[5] = onClick_3, c[6] = d, c[7] = p, c[8] = h;else h = c[8];
  return h;
}
function Ro(t) {
  return t?.name === "escape" && !t.ctrl && !t.meta;
}
function oc(ni) {
  return ni.type === "image";
}
function Gr(t, o, i, u) {
  let d = 2 + o + 2;
  return Math.max(1, t - d - i - u);
}
function CUe(t) {
  let L = S(107),
    {
      option: option_4,
      isFocused: isFocused_4,
      isSelected: isSelected_4,
      shouldShowDownArrow: shouldShowDownArrow,
      shouldShowUpArrow: shouldShowUpArrow,
      maxIndexWidth: maxIndexWidth,
      index: index_4,
      hideIndex: hideIndex,
      inputValue: c,
      onInputChange: onInputChange,
      onSubmit: onSubmit_2,
      onExit: onExit,
      layout: layout,
      children: children_15,
      showLabel: showLabel,
      onOpenEditor: onOpenEditor_3,
      resetCursorOnUpdate: resetCursorOnUpdate,
      canPasteImage: canPasteImage,
      onImagePaste: onImagePaste,
      pastedContents: pastedContents,
      onRemoveImage: onRemoveImage,
      imagesSelected: imagesSelected,
      selectedImageIndex: selectedImageIndex,
      onImagesSelectedChange: onImagesSelectedChange,
      onSelectedImageIndexChange: onSelectedImageIndexChange,
      extraChromeWidth: extraChromeWidth,
      onClick: onClick_4,
      hoverStyle: hoverStyle_3
    } = t,
    P = hideIndex === void 0 ? !1 : hideIndex,
    N = showLabel === void 0 ? !1 : showLabel,
    Ye = resetCursorOnUpdate === void 0 ? !1 : resetCursorOnUpdate,
    he = selectedImageIndex === void 0 ? 0 : selectedImageIndex,
    ie = extraChromeWidth === void 0 ? 0 : extraChromeWidth,
    G;
  if (L[0] !== pastedContents) G = pastedContents ? Object.values(pastedContents).filter(oc) : [], L[0] = pastedContents, L[1] = G;else G = L[1];
  let z = G,
    ee = N || option_4.showLabelWithValue === !0,
    [cursorOffset, onChangeCursorOffset] = y(c.length),
    X = A(!1),
    He;
  if (L[2] !== c.length || L[3] !== isFocused_4 || L[4] !== Ye) He = () => {
    if (Ye && isFocused_4) {
      if (X.current) X.current = !1;else onChangeCursorOffset(c.length);
    }
  }, L[2] = c.length, L[3] = isFocused_4, L[4] = Ye, L[5] = He;else He = L[5];
  let be;
  if (L[6] !== c || L[7] !== isFocused_4 || L[8] !== Ye) be = [Ye, isFocused_4, c], L[6] = c, L[7] = isFocused_4, L[8] = Ye, L[9] = be;else be = L[9];
  O(He, be);
  let ge;
  if (L[10] !== c || L[11] !== onInputChange || L[12] !== onOpenEditor_3) ge = () => {
    onOpenEditor_3?.(c, onInputChange);
  }, L[10] = c, L[11] = onInputChange, L[12] = onOpenEditor_3, L[13] = ge;else ge = L[13];
  const isActive_3 = isFocused_4 && !!onOpenEditor_3;
  let Me;
  if (L[14] !== isActive_3) Me = {
    context: "Chat",
    isActive: isActive_3
  }, L[14] = isActive_3, L[15] = Me;else Me = L[15];
  pt("chat:externalEditor", ge, Me);
  let se;
  if (L[16] !== canPasteImage || L[17] !== onImagePaste) se = () => {
    if (!onImagePaste) {
      return;
    }
    if (canPasteImage?.() === !1) {
      return;
    }
    Qke(Al(at())).then(dt => {
      if (dt) onImagePaste(dt.base64, {
        mediaType: dt.mediaType,
        dimensions: dt.dimensions
      });
    });
  }, L[16] = canPasteImage, L[17] = onImagePaste, L[18] = se;else se = L[18];
  const isActive_4 = isFocused_4 && !!onImagePaste;
  let Dt;
  if (L[19] !== isActive_4) Dt = {
    context: "Chat",
    isActive: isActive_4
  }, L[19] = isActive_4, L[20] = Dt;else Dt = L[20];
  pt("chat:imagePaste", se, Dt);
  let je;
  if (L[21] !== z || L[22] !== onRemoveImage) je = () => {
    if (z.length > 0 && onRemoveImage) onRemoveImage(z.at(-1).id);
  }, L[21] = z, L[22] = onRemoveImage, L[23] = je;else je = L[23];
  const isActive_5 = isFocused_4 && !imagesSelected && c === "" && z.length > 0 && !!onRemoveImage;
  let _t;
  if (L[24] !== isActive_5) _t = {
    context: "Attachments",
    isActive: isActive_5
  }, L[24] = isActive_5, L[25] = _t;else _t = L[25];
  pt("attachments:remove", je, _t);
  let St, ze;
  if (L[26] !== z.length || L[27] !== onSelectedImageIndexChange || L[28] !== he) St = () => {
    if (z.length > 1) onSelectedImageIndexChange?.((he + 1) % z.length);
  }, ze = () => {
    if (z.length > 1) onSelectedImageIndexChange?.((he - 1 + z.length) % z.length);
  }, L[26] = z.length, L[27] = onSelectedImageIndexChange, L[28] = he, L[29] = St, L[30] = ze;else St = L[29], ze = L[30];
  let ft;
  if (L[31] !== z || L[32] !== onImagesSelectedChange || L[33] !== onRemoveImage || L[34] !== onSelectedImageIndexChange || L[35] !== he) ft = () => {
    let Gt = z[he];
    if (Gt && onRemoveImage) {
      if (onRemoveImage(Gt.id) === !1) {
        return;
      }
      if (z.length <= 1) onImagesSelectedChange?.(!1);else onSelectedImageIndexChange?.(Math.min(he, z.length - 2));
    }
  }, L[31] = z, L[32] = onImagesSelectedChange, L[33] = onRemoveImage, L[34] = onSelectedImageIndexChange, L[35] = he, L[36] = ft;else ft = L[36];
  let We;
  if (L[37] !== onImagesSelectedChange) We = () => {
    onImagesSelectedChange?.(!1);
  }, L[37] = onImagesSelectedChange, L[38] = We;else We = L[38];
  let Ut;
  if (L[39] !== St || L[40] !== ze || L[41] !== ft || L[42] !== We) Ut = {
    "attachments:next": St,
    "attachments:previous": ze,
    "attachments:remove": ft,
    "attachments:exit": We
  }, L[39] = St, L[40] = ze, L[41] = ft, L[42] = We, L[43] = Ut;else Ut = L[43];
  const isActive_6 = isFocused_4 && !!imagesSelected;
  let Vt;
  if (L[44] !== isActive_6) Vt = {
    context: "Attachments",
    isActive: isActive_6
  }, L[44] = isActive_6, L[45] = Vt;else Vt = L[45];
  Sn(Ut, Vt);
  let {
      vimEditing: vimEditing
    } = option_4,
    Xe = vimEditing ? YGt : Ir,
    cancelRemapRef_2 = A(null),
    a,
    wt;
  if (L[46] !== imagesSelected || L[47] !== isFocused_4 || L[48] !== onImagesSelectedChange) a = () => {
    if (!isFocused_4 && imagesSelected) onImagesSelectedChange?.(!1);
  }, wt = [isFocused_4, imagesSelected, onImagesSelectedChange], L[46] = imagesSelected, L[47] = isFocused_4, L[48] = onImagesSelectedChange, L[49] = a, L[50] = wt;else a = L[49], wt = L[50];
  O(a, wt);
  let paddingLeft = layout === "expanded" ? maxIndexWidth + 3 : maxIndexWidth + 4,
    {
      columns: columns
    } = As(Re()),
    ht = ee && typeof option_4.label === "string" ? ce(option_4.label) + ce(option_4.labelValueSeparator ?? ", ") : 0,
    kt;
  if (L[51] !== columns || L[52] !== ie || L[53] !== ht || L[54] !== maxIndexWidth) kt = Gr(columns, maxIndexWidth, ht, ie), L[51] = columns, L[52] = ie, L[53] = ht, L[54] = maxIndexWidth, L[55] = kt;else kt = L[55];
  let columns_2 = kt;
  const onKeyDown_4 = vimEditing?.takesEscape ? fa : void 0,
    flexShrink = layout === "compact" ? 0 : void 0;
  let vt;
  if (L[56] !== P || L[57] !== index_4 || L[58] !== maxIndexWidth) vt = !P && e(s, {
    flexShrink: 0,
    children: e(n, {
      dimColor: !0,
      children: `${index_4}.`.padEnd(maxIndexWidth + 2)
    })
  }), L[56] = P, L[57] = index_4, L[58] = maxIndexWidth, L[59] = vt;else vt = L[59];
  let et;
  if (L[60] !== Xe || L[61] !== cursorOffset || L[62] !== imagesSelected || L[63] !== c || L[64] !== isFocused_4 || L[65] !== onExit || L[66] !== onImagePaste || L[67] !== onInputChange || L[68] !== onSubmit_2 || L[69] !== option_4 || L[70] !== ee || L[71] !== columns_2 || L[72] !== vimEditing?.onStateChange) et = ee ? isFocused_4 ? r(ne, {
    children: [r(n, {
      color: "suggestion",
      children: [option_4.label, option_4.labelValueSeparator ?? ", "]
    }), e(Xe, {
      value: c,
      onChange: Et => {
        if (option_4.onChange(Et) === !1) {
          return;
        }
        X.current = !0, onInputChange(Et);
      },
      onSubmit: onSubmit_2,
      onExit: onExit,
      placeholder: option_4.placeholder,
      focus: !imagesSelected,
      showCursor: !0,
      multiline: !0,
      cursorOffset: cursorOffset,
      onChangeCursorOffset: onChangeCursorOffset,
      columns: columns_2,
      onEditingStateChange: vimEditing?.onStateChange,
      cancelRemapRef: cancelRemapRef_2,
      onImagePaste: onImagePaste,
      onPaste: Mt => {
        if (!Mt) {
          return;
        }
        cancelRemapRef_2.current?.();
        let Kt = c.slice(0, cursorOffset);
        let Jn = c.slice(cursorOffset);
        let Tn = Kt + Mt + Jn;
        if (option_4.onChange(Tn) === !1) {
          return;
        }
        X.current = !0, onInputChange(Tn), onChangeCursorOffset(Kt.length + Mt.length);
      }
    })]
  }) : r(n, {
    children: [option_4.label, c ? option_4.labelValueSeparator ?? ", " : null, c || null]
  }) : isFocused_4 ? e(Xe, {
    value: c,
    onChange: Xn => {
      if (option_4.onChange(Xn) === !1) {
        return;
      }
      X.current = !0, onInputChange(Xn);
    },
    onSubmit: onSubmit_2,
    onExit: onExit,
    placeholder: option_4.placeholder || (typeof option_4.label === "string" ? option_4.label : void 0),
    focus: !imagesSelected,
    showCursor: !0,
    multiline: !0,
    cursorOffset: cursorOffset,
    onChangeCursorOffset: onChangeCursorOffset,
    columns: columns_2,
    onEditingStateChange: vimEditing?.onStateChange,
    cancelRemapRef: cancelRemapRef_2,
    onImagePaste: onImagePaste,
    onPaste: Pt => {
      if (!Pt) {
        return;
      }
      cancelRemapRef_2.current?.();
      let qt = c.slice(0, cursorOffset);
      let ei = c.slice(cursorOffset);
      let bt = qt + Pt + ei;
      if (option_4.onChange(bt) === !1) {
        return;
      }
      X.current = !0, onInputChange(bt), onChangeCursorOffset(qt.length + Pt.length);
    }
  }) : e(n, {
    color: c ? void 0 : "inactive",
    children: c || option_4.placeholder || option_4.label
  }), L[60] = Xe, L[61] = cursorOffset, L[62] = imagesSelected, L[63] = c, L[64] = isFocused_4, L[65] = onExit, L[66] = onImagePaste, L[67] = onInputChange, L[68] = onSubmit_2, L[69] = option_4, L[70] = ee, L[71] = columns_2, L[72] = vimEditing?.onStateChange, L[73] = et;else et = L[73];
  let children_16;
  if (L[74] !== children_15 || L[75] !== flexShrink || L[76] !== vt || L[77] !== et) children_16 = r(s, {
    flexDirection: "row",
    flexShrink: flexShrink,
    children: [vt, children_15, et]
  }), L[74] = children_15, L[75] = flexShrink, L[76] = vt, L[77] = et, L[78] = children_16;else children_16 = L[78];
  let xt;
  if (L[79] !== hoverStyle_3 || L[80] !== isFocused_4 || L[81] !== isSelected_4 || L[82] !== onClick_4 || L[83] !== shouldShowDownArrow || L[84] !== shouldShowUpArrow || L[85] !== children_16) xt = e(lhe, {
    isFocused: isFocused_4,
    isSelected: isSelected_4,
    shouldShowDownArrow: shouldShowDownArrow,
    shouldShowUpArrow: shouldShowUpArrow,
    declareCursor: !1,
    onClick: onClick_4,
    hoverStyle: hoverStyle_3,
    children: children_16
  }), L[79] = hoverStyle_3, L[80] = isFocused_4, L[81] = isSelected_4, L[82] = onClick_4, L[83] = shouldShowDownArrow, L[84] = shouldShowUpArrow, L[85] = children_16, L[86] = xt;else xt = L[86];
  let rt;
  if (L[87] !== paddingLeft || L[88] !== isFocused_4 || L[89] !== isSelected_4 || L[90] !== option_4.description || L[91] !== option_4.dimDescription) rt = option_4.description && e(s, {
    paddingLeft: paddingLeft,
    children: e(n, {
      dimColor: option_4.dimDescription !== !1,
      color: isSelected_4 ? "success" : isFocused_4 ? "suggestion" : void 0,
      children: option_4.description
    })
  }), L[87] = paddingLeft, L[88] = isFocused_4, L[89] = isSelected_4, L[90] = option_4.description, L[91] = option_4.dimDescription, L[92] = rt;else rt = L[92];
  let It;
  if (L[93] !== paddingLeft || L[94] !== z || L[95] !== imagesSelected || L[96] !== isFocused_4 || L[97] !== he) It = z.length > 0 && r(s, {
    flexDirection: "row",
    gap: 1,
    paddingLeft: paddingLeft,
    children: [z.map((item, index) => e(Vo, {
      imageId: item.id,
      isSelected: !!imagesSelected && index === he
    }, item.id)), e(s, {
      flexGrow: 1,
      justifyContent: "flex-start",
      flexDirection: "row",
      children: e(n, {
        dimColor: !0,
        children: imagesSelected ? r(Ce, {
          children: [z.length > 1 && r(ne, {
            children: [e(gt, {
              action: "attachments:next",
              context: "Attachments",
              fallback: "\u2192",
              description: "next"
            }), e(gt, {
              action: "attachments:previous",
              context: "Attachments",
              fallback: "\u2190",
              description: "prev"
            })]
          }), e(gt, {
            action: "attachments:remove",
            context: "Attachments",
            fallback: "backspace",
            description: "remove"
          }), e(gt, {
            action: "attachments:exit",
            context: "Attachments",
            fallback: "esc",
            description: "cancel"
          })]
        }) : isFocused_4 ? e(Y, {
          chord: "down",
          action: "select",
          parens: !0
        }) : null
      })
    })]
  }), L[93] = paddingLeft, L[94] = z, L[95] = imagesSelected, L[96] = isFocused_4, L[97] = he, L[98] = It;else It = L[98];
  let ke;
  if (L[99] !== layout) ke = layout === "expanded" && e(n, {
    children: " "
  }), L[99] = layout, L[100] = ke;else ke = L[100];
  let me;
  if (L[101] !== onKeyDown_4 || L[102] !== xt || L[103] !== rt || L[104] !== It || L[105] !== ke) me = r(s, {
    flexDirection: "column",
    flexShrink: 0,
    onKeyDown: onKeyDown_4,
    children: [xt, rt, It, ke]
  }), L[101] = onKeyDown_4, L[102] = xt, L[103] = rt, L[104] = It, L[105] = ke, L[106] = me;else me = L[106];
  return me;
}
function fa(t) {
  if (Ro(t)) t.stopImmediatePropagation();
}
j();
function dzr(t) {
  let {
      dispatchPasteEvent: dispatchPasteEvent
    } = oE(),
    [i, u] = y([]);
  return O(() => {
    if (i.length === 0) return;
    if (u([]), t) for (let d of i) dispatchPasteEvent(d);
  }, [i, t, dispatchPasteEvent]), d => {
    u(p => [...p, d]);
  };
}
function czr(t, o) {
  if (t.defaultPrevented) return !1;
  let i = t.rawEndedWithFocusTail ? t.text.replace(/\[[IO]$/, "") : t.text,
    u = x(),
    d = t.rawEmpty && (u === "macos" || u === "wsl");
  return (i !== "" || d) && o?.() !== !1;
}
function ihn({
  options: options_3,
  focusedValue: focusedValue,
  focusOption: focusOption,
  canPaste: canPaste
}) {
  let d = options_3.find(item => item.type === "input" && item.takesPasteFromOtherRows === !0 && item.disabled !== !0),
    p = dzr(d !== void 0 && focusedValue === d.value);
  if (!d) return;
  return l => {
    if (focusedValue === d.value || !czr(l, canPaste)) return;
    l.preventDefault(), p(l), focusOption(d.value);
  };
}
j();
var zi = ({
  isDisabled: isDisabled_3 = !1,
  disableSelection: disableSelection_2 = !1,
  state: state,
  options: options_4,
  onUpFromFirstItem: onUpFromFirstItem,
  onDownFromLastItem: onDownFromLastItem,
  onInputModeToggle: onInputModeToggle,
  inputValues: inputValues,
  imagesSelected: imagesSelected_2 = !1,
  onEnterImageSelection: onEnterImageSelection,
  onExitImageSelection: onExitImageSelection,
  hasInkFocus = !0
}) => {
  let {
      focusDirection: focusDirection
    } = xUe(),
    T = vd();
  Za("select", !!state.onCancel);
  let V = Z(() => options_4.find(item => item.value === state.focusedValue)?.type === "input", [options_4, state.focusedValue]),
    q = Z(() => {
      let f = {};
      if (!V) f["select:next"] = () => {
        let b = options_4.at(-1);
        if (b && state.getFocusedValue() === b.value) {
          if (onDownFromLastItem) {
            onDownFromLastItem();
            return;
          }
          if (focusDirection("down")) return;
        }
        state.focusNextOption();
      }, f["select:previous"] = () => {
        let b = options_4[0];
        if (b && state.getFocusedValue() === b.value) {
          if (onUpFromFirstItem) {
            onUpFromFirstItem();
            return;
          }
          if (focusDirection("up")) return;
        }
        state.focusPreviousOption();
      }, f["select:first"] = () => {
        state.focusOption(options_4[0]?.value);
      }, f["select:last"] = () => {
        state.focusOption(options_4.at(-1)?.value);
      }, f["select:accept"] = () => {
        if (disableSelection_2 === !0) return;
        let b = state.getFocusedValue();
        if (b === void 0) return;
        let C = options_4.find(item => item.value === b);
        if (C?.disabled === !0) return;
        if (C?.type === "input") return;
        state.selectFocusedOption?.(), state.onChange?.(b);
      };
      if (state.onCancel) f["select:cancel"] = () => {
        let b = state.getFocusedValue(),
          C = options_4.find(item => item.value === b);
        if (C?.type === "input" && C.vimEditing?.takesEscape && Ro(T?.singleKeyEvent() ?? null)) return !1;
        state.onCancel();
      };
      return f;
    }, [options_4, state, onDownFromLastItem, onUpFromFirstItem, V, disableSelection_2, focusDirection, T]);
  return Sn(q, {
    context: "Select",
    isActive: !isDisabled_3 && hasInkFocus
  }), {
    handleKeyDown: f => {
      if (isDisabled_3) return;
      let b = Dae(f.key),
        C = state.getFocusedValue(),
        H = options_4.find(item => item.value === C)?.type === "input";
      if (f.key === "tab") {
        if (f.preventDefault(), onInputModeToggle && C !== void 0) onInputModeToggle(C);
        return;
      }
      if (H) {
        if (imagesSelected_2) {
          if (f.key === "up") f.preventDefault(), onExitImageSelection?.();
          return;
        }
        if (f.key === "down" && onEnterImageSelection?.()) {
          f.stopImmediatePropagation();
          return;
        }
        if (f.key === "down" || f.ctrl && f.key === "n") {
          if (onDownFromLastItem) {
            let g = options_4.at(-1);
            if (g && C === g.value) {
              onDownFromLastItem(), f.stopImmediatePropagation();
              return;
            }
          }
          state.focusNextOption(), f.stopImmediatePropagation();
          return;
        }
        if (f.key === "up" || f.ctrl && f.key === "p") {
          if (onUpFromFirstItem) {
            let g = options_4[0];
            if (g && C === g.value) {
              onUpFromFirstItem(), f.stopImmediatePropagation();
              return;
            }
          }
          state.focusPreviousOption(), f.stopImmediatePropagation();
          return;
        }
        return;
      }
      if (V) {
        if (f.key === "down" || f.ctrl && f.key === "n") {
          if (onDownFromLastItem) {
            let g = options_4.at(-1);
            if (g && C === g.value) {
              onDownFromLastItem(), f.stopImmediatePropagation();
              return;
            }
          }
          state.focusNextOption(), f.stopImmediatePropagation();
          return;
        }
        if (f.key === "up" || f.ctrl && f.key === "p") {
          if (onUpFromFirstItem) {
            let g = options_4[0];
            if (g && C === g.value) {
              onUpFromFirstItem(), f.stopImmediatePropagation();
              return;
            }
          }
          state.focusPreviousOption(), f.stopImmediatePropagation();
          return;
        }
      }
      if (f.key === "pagedown") {
        f.preventDefault(), state.focusNextPage();
        return;
      }
      if (f.key === "pageup") {
        f.preventDefault(), state.focusPreviousPage();
        return;
      }
      if (disableSelection_2 !== !0) {
        if (disableSelection_2 !== "numeric" && /^[0-9]$/.test(b)) {
          f.preventDefault();
          let g = parseInt(b) - 1;
          if (g >= 0 && g < state.options.length) {
            let W = state.options[g];
            if (W.disabled === !0) return;
            if (W.type === "input") {
              if ((inputValues?.get(W.value) ?? "").trim()) {
                state.onChange?.(W.value);
                return;
              }
              if (W.allowEmptySubmitToCancel) {
                state.onChange?.(W.value);
                return;
              }
              state.focusOption(W.value);
              return;
            }
            state.onChange?.(W.value);
          }
        }
      }
    }
  };
};
j();
j();
import { isDeepStrictEqual as rc } from "util";
j();
function Zf(t) {
  let [o] = y(() => ({
      value: ic(t) ? t() : t
    })),
    [i, u] = y(o.value),
    d = ue(l => {
      let m = sc(l) ? l(o.value) : l;
      if (Object.is(m, o.value)) return;
      o.value = m, u(() => m);
    }, [o]),
    p = ue(() => o.value, [o]);
  return [i, d, p];
}
function ic(t) {
  return typeof t === "function";
}
function sc(t) {
  return typeof t === "function";
}
class Ao extends Map {
  first;
  last;
  constructor(t) {
    let o = [],
      i,
      u,
      previous,
      index_5 = 0;
    for (let l of t) {
      let m = {
        value: l.value,
        previous: previous,
        next: void 0,
        index: index_5
      };
      if (previous) previous.next = m;
      i ||= m, u = m, o.push([l.value, m]), index_5++, previous = m;
    }
    super(o);
    this.first = i, this.last = u;
  }
}
var ac = (t, o) => {
    switch (o.type) {
      case "focus-next-option":
        {
          if (t.focusedValue === void 0) return t;
          let i = t.optionMap.get(t.focusedValue);
          if (!i) return t;
          let u = i.next || t.optionMap.first;
          if (!u) return t;
          if (!i.next && u === t.optionMap.first) return {
            ...t,
            focusedValue: u.value,
            visibleFromIndex: 0,
            visibleToIndex: t.visibleOptionCount
          };
          if (!(u.index >= t.visibleToIndex)) return {
            ...t,
            focusedValue: u.value
          };
          let visibleToIndex = Math.min(t.optionMap.size, t.visibleToIndex + 1),
            visibleFromIndex = visibleToIndex - t.visibleOptionCount;
          return {
            ...t,
            focusedValue: u.value,
            visibleFromIndex: visibleFromIndex,
            visibleToIndex: visibleToIndex
          };
        }
      case "focus-previous-option":
        {
          if (t.focusedValue === void 0) return t;
          let i = t.optionMap.get(t.focusedValue);
          if (!i) return t;
          let u = i.previous || t.optionMap.last;
          if (!u) return t;
          if (!i.previous && u === t.optionMap.last) {
            let visibleToIndex_2 = t.optionMap.size,
              visibleFromIndex_2 = Math.max(0, visibleToIndex_2 - t.visibleOptionCount);
            return {
              ...t,
              focusedValue: u.value,
              visibleFromIndex: visibleFromIndex_2,
              visibleToIndex: visibleToIndex_2
            };
          }
          if (!(u.index <= t.visibleFromIndex)) return {
            ...t,
            focusedValue: u.value
          };
          let visibleFromIndex_3 = Math.max(0, t.visibleFromIndex - 1),
            visibleToIndex_3 = visibleFromIndex_3 + t.visibleOptionCount;
          return {
            ...t,
            focusedValue: u.value,
            visibleFromIndex: visibleFromIndex_3,
            visibleToIndex: visibleToIndex_3
          };
        }
      case "focus-next-page":
        {
          if (t.focusedValue === void 0) return t;
          let i = t.optionMap.get(t.focusedValue);
          if (!i) return t;
          let u = Math.min(t.optionMap.size - 1, i.index + t.visibleOptionCount),
            first = t.optionMap.first;
          while (first && first.index < u) if (first.next) first = first.next;else break;
          if (!first) return t;
          let visibleToIndex_4 = Math.min(t.optionMap.size, first.index + 1),
            visibleFromIndex_4 = Math.max(0, visibleToIndex_4 - t.visibleOptionCount);
          return {
            ...t,
            focusedValue: first.value,
            visibleFromIndex: visibleFromIndex_4,
            visibleToIndex: visibleToIndex_4
          };
        }
      case "focus-previous-page":
        {
          if (t.focusedValue === void 0) return t;
          let i = t.optionMap.get(t.focusedValue);
          if (!i) return t;
          let u = Math.max(0, i.index - t.visibleOptionCount),
            first_2 = t.optionMap.first;
          while (first_2 && first_2.index < u) if (first_2.next) first_2 = first_2.next;else break;
          if (!first_2) return t;
          let visibleFromIndex_5 = Math.max(0, first_2.index),
            visibleToIndex_5 = Math.min(t.optionMap.size, visibleFromIndex_5 + t.visibleOptionCount);
          return {
            ...t,
            focusedValue: first_2.value,
            visibleFromIndex: visibleFromIndex_5,
            visibleToIndex: visibleToIndex_5
          };
        }
      case "reset":
        return o.state;
      case "scroll-viewport":
        {
          let visibleFromIndex_6 = Math.min(Math.max(0, t.optionMap.size - t.visibleOptionCount), Math.max(0, t.visibleFromIndex + o.delta));
          if (visibleFromIndex_6 === t.visibleFromIndex) return t;
          let visibleToIndex_6 = Math.min(t.optionMap.size, visibleFromIndex_6 + t.visibleOptionCount),
            d = t.focusedValue === void 0 ? void 0 : t.optionMap.get(t.focusedValue);
          while (d?.next && d.index < visibleFromIndex_6) d = d.next;
          while (d?.previous && d.index >= visibleToIndex_6) d = d.previous;
          return {
            ...t,
            focusedValue: d?.value,
            visibleFromIndex: visibleFromIndex_6,
            visibleToIndex: visibleToIndex_6
          };
        }
      case "set-focus":
        {
          if (t.focusedValue === o.value) return t;
          let i = t.optionMap.get(o.value);
          if (!i) return t;
          if (i.index >= t.visibleFromIndex && i.index < t.visibleToIndex) return {
            ...t,
            focusedValue: o.value
          };
          let visibleFromIndex_7, visibleToIndex_7;
          if (i.index < t.visibleFromIndex) visibleFromIndex_7 = i.index, visibleToIndex_7 = Math.min(t.optionMap.size, visibleFromIndex_7 + t.visibleOptionCount);else visibleToIndex_7 = Math.min(t.optionMap.size, i.index + 1), visibleFromIndex_7 = Math.max(0, visibleToIndex_7 - t.visibleOptionCount);
          return {
            ...t,
            focusedValue: o.value,
            visibleFromIndex: visibleFromIndex_7,
            visibleToIndex: visibleToIndex_7
          };
        }
    }
  },
  va = ({
    visibleOptionCount: visibleOptionCount,
    options: options_5,
    initialFocusValue: initialFocusValue,
    currentViewport: currentViewport,
    focusAtTop = !1
  }) => {
    let visibleOptionCount_2 = typeof visibleOptionCount === "number" ? Math.min(visibleOptionCount, options_5.length) : options_5.length,
      optionMap = new Ao(options_5),
      m = initialFocusValue !== void 0 && optionMap.get(initialFocusValue),
      focusedValue_2 = m ? initialFocusValue : optionMap.first?.value,
      visibleFromIndex_8 = 0,
      visibleToIndex_8 = visibleOptionCount_2;
    if (m) {
      let index_6 = m.index;
      if (focusAtTop) visibleFromIndex_8 = Math.max(0, Math.min(index_6, optionMap.size - visibleOptionCount_2)), visibleToIndex_8 = Math.min(optionMap.size, visibleFromIndex_8 + visibleOptionCount_2);else if (currentViewport) {
        if (index_6 >= currentViewport.visibleFromIndex && index_6 < currentViewport.visibleToIndex) {
          if (visibleFromIndex_8 = currentViewport.visibleFromIndex, visibleToIndex_8 = Math.min(optionMap.size, visibleFromIndex_8 + visibleOptionCount_2), index_6 >= visibleToIndex_8) visibleToIndex_8 = Math.min(optionMap.size, index_6 + 1), visibleFromIndex_8 = Math.max(0, visibleToIndex_8 - visibleOptionCount_2);
          if (visibleToIndex_8 - visibleFromIndex_8 < visibleOptionCount_2) visibleFromIndex_8 = Math.max(0, visibleToIndex_8 - visibleOptionCount_2);
        } else if (index_6 < currentViewport.visibleFromIndex) {
          if (visibleFromIndex_8 = index_6, visibleToIndex_8 = Math.min(optionMap.size, visibleFromIndex_8 + visibleOptionCount_2), visibleToIndex_8 - visibleFromIndex_8 < visibleOptionCount_2) visibleFromIndex_8 = Math.max(0, visibleToIndex_8 - visibleOptionCount_2);
        } else visibleToIndex_8 = Math.min(optionMap.size, index_6 + 1), visibleFromIndex_8 = Math.max(0, visibleToIndex_8 - visibleOptionCount_2);
      } else if (index_6 >= visibleOptionCount_2) visibleToIndex_8 = Math.min(optionMap.size, index_6 + 1), visibleFromIndex_8 = Math.max(0, visibleToIndex_8 - visibleOptionCount_2);
      visibleFromIndex_8 = Math.max(0, Math.min(visibleFromIndex_8, optionMap.size - 1)), visibleToIndex_8 = Math.min(optionMap.size, Math.max(visibleOptionCount_2, visibleToIndex_8));
    }
    return {
      optionMap: optionMap,
      visibleOptionCount: visibleOptionCount_2,
      focusedValue: focusedValue_2,
      visibleFromIndex: visibleFromIndex_8,
      visibleToIndex: visibleToIndex_8
    };
  };
function uzr({
  visibleOptionCount: visibleOptionCount_3 = 5,
  options: options_6,
  onFocus: onFocus_3,
  focusValue: u,
  scrollFocusToTopOnOptionsChange = !1
}) {
  let [p, l, m] = Zf(() => va({
      visibleOptionCount: visibleOptionCount_3,
      options: options_6,
      initialFocusValue: u
    })),
    I = ue(R => {
      l(de => ac(de, R));
    }, [l]),
    c = qo(R => onFocus_3?.(R)),
    h = A(void 0),
    [v, _] = y(options_6),
    [T, V] = y(visibleOptionCount_3),
    q = options_6 !== v && !rc(options_6, v),
    D = visibleOptionCount_3 !== T;
  if (q || D) {
    let R = m();
    if (I({
      type: "reset",
      state: va({
        visibleOptionCount: visibleOptionCount_3,
        options: options_6,
        initialFocusValue: q ? u ?? R.focusedValue : R.focusedValue ?? u,
        currentViewport: {
          visibleFromIndex: R.visibleFromIndex,
          visibleToIndex: R.visibleToIndex
        },
        focusAtTop: q && scrollFocusToTopOnOptionsChange
      })
    }), q) _(options_6);
    if (D) V(visibleOptionCount_3);
  }
  let f = ue(R => {
      I(R);
      let de = _i(m().focusedValue, options_6);
      if (de !== void 0 && de !== h.current) h.current = de, onFocus_3?.(de);
    }, [I, m, options_6, onFocus_3]),
    focusNextOption = ue(() => {
      f({
        type: "focus-next-option"
      });
    }, [f]),
    focusPreviousOption = ue(() => {
      f({
        type: "focus-previous-option"
      });
    }, [f]),
    focusNextPage = ue(() => {
      f({
        type: "focus-next-page"
      });
    }, [f]),
    focusPreviousPage = ue(() => {
      f({
        type: "focus-previous-page"
      });
    }, [f]),
    scrollViewport = ue(delta => {
      let visibleFromIndex_9 = m().visibleFromIndex;
      return f({
        type: "scroll-viewport",
        delta: delta
      }), m().visibleFromIndex !== visibleFromIndex_9;
    }, [f, m]),
    focusOption_2 = ue(value_2 => {
      if (value_2 !== void 0) f({
        type: "set-focus",
        value: value_2
      });
    }, [f]),
    visibleOptions = Z(() => options_6.map((item, index_7) => ({
      ...item,
      index: index_7
    })).slice(p.visibleFromIndex, p.visibleToIndex), [options_6, p.visibleFromIndex, p.visibleToIndex]),
    focusedValue_3 = Z(() => _i(p.focusedValue, options_6), [p.focusedValue, options_6]),
    getFocusedValue = ue(() => _i(m().focusedValue, options_6), [m, options_6]);
  return O(() => {
    if (focusedValue_3 === void 0) {
      h.current = void 0;
      return;
    }
    if (focusedValue_3 !== h.current) h.current = focusedValue_3, c(focusedValue_3);
  }, [focusedValue_3]), O(() => {
    if (u !== void 0) I({
      type: "set-focus",
      value: u
    });
  }, [u, I]), {
    focusedValue: focusedValue_3,
    getFocusedValue: getFocusedValue,
    visibleFromIndex: p.visibleFromIndex,
    visibleToIndex: p.visibleToIndex,
    visibleOptions: visibleOptions,
    focusNextOption: focusNextOption,
    focusPreviousOption: focusPreviousOption,
    focusNextPage: focusNextPage,
    focusPreviousPage: focusPreviousPage,
    focusOption: focusOption_2,
    scrollViewport: scrollViewport,
    options: options_6
  };
}
function _i(t, o) {
  if (t === void 0) return;
  if (o.some(item => item.value === t)) return t;
  return o[0]?.value;
}
function Gi({
  visibleOptionCount: visibleOptionCount_4 = 5,
  options: options_7,
  defaultValue: defaultValue_3,
  selectedValue: selectedValue,
  onChange: onChange_3,
  onCancel: onCancel_4,
  onFocus: onFocus_4,
  focusValue: focusValue,
  scrollFocusToTopOnOptionsChange: scrollFocusToTopOnOptionsChange_2
}) {
  let [c, h] = y(defaultValue_3),
    v = uzr({
      visibleOptionCount: visibleOptionCount_4,
      options: options_7,
      onFocus: onFocus_4,
      focusValue: focusValue,
      scrollFocusToTopOnOptionsChange: scrollFocusToTopOnOptionsChange_2
    }),
    {
      getFocusedValue: getFocusedValue_2
    } = v,
    selectFocusedOption = ue(() => {
      h(getFocusedValue_2());
    }, [getFocusedValue_2]);
  return {
    ...v,
    value: selectedValue !== void 0 ? selectedValue : c,
    selectFocusedOption: selectFocusedOption,
    onChange: onChange_3,
    onCancel: onCancel_4
  };
}
j();
function ahn({
  isDisabled: isDisabled_4,
  visibleFromIndex: visibleFromIndex_10,
  visibleToIndex: visibleToIndex_9,
  optionCount: optionCount,
  scrollViewport: scrollViewport_2,
  shouldDropWheel: shouldDropWheel
}) {
  let ref_9 = A(null);
  if (isDisabled_4 || visibleToIndex_9 - visibleFromIndex_10 >= optionCount) return {
    ref: ref_9,
    onWheel: void 0
  };
  return {
    ref: ref_9,
    onWheel: I => {
      if (I.deltaY === 0 || shouldDropWheel()) return;
      let current_8 = ref_9.current;
      if (current_8 !== null && I.col !== void 0 && I.row !== void 0 && K7(current_8, I.col, I.row) === null) return;
      if (scrollViewport_2(I.deltaY > 0 ? 1 : -1)) I.stopImmediatePropagation();
    }
  };
}
function $p(kf) {
  return kf.type === "input";
}
function Hp(Ef) {
  return Ef.description;
}
function jp(Mf) {
  return Mf.type === "image";
}
function zp(Pf) {
  return Pf.type === "image";
}
function _p(Af) {
  return Af.type === "image";
}
function Gp(Wf) {
  return Wf.type === "image";
}
function qp(Bf) {
  return Bf.type === "image";
}
var ti = Symbol("NO_COMMITTED_ROW");
function Ze(t) {
  let u = S(13);
  if (ot()) {
    const defaultValue_4 = t.selectedValue === ti ? t.defaultValue : t.selectedValue ?? t.defaultValue;
    let d;
    if (u[0] !== t.disableSelection || u[1] !== t.hidePromptWhileDisabled || u[2] !== t.isDisabled || u[3] !== t.onCancel || u[4] !== t.onChange || u[5] !== t.onFocus || u[6] !== t.onOpenEditor || u[7] !== t.options || u[8] !== t.refuseInput || u[9] !== defaultValue_4) d = e(ule, {
      options: t.options,
      onChange: t.onChange,
      onFocus: t.onFocus,
      onCancel: t.onCancel,
      onOpenEditor: t.onOpenEditor,
      isDisabled: t.isDisabled,
      disableSelection: t.disableSelection,
      refuseInput: t.refuseInput,
      hidePromptWhileDisabled: t.hidePromptWhileDisabled,
      defaultValue: defaultValue_4
    }), u[0] = t.disableSelection, u[1] = t.hidePromptWhileDisabled, u[2] = t.isDisabled, u[3] = t.onCancel, u[4] = t.onChange, u[5] = t.onFocus, u[6] = t.onOpenEditor, u[7] = t.options, u[8] = t.refuseInput, u[9] = defaultValue_4, u[10] = d;else d = u[10];
    return d;
  }
  let i;
  if (u[11] !== t) i = e(cs, {
    ...t
  }), u[11] = t, u[12] = i;else i = u[12];
  return i;
}
function cs(t) {
  let B = S(240),
    {
      isDisabled: isDisabled_5,
      hideIndexes: hideIndexes,
      disablePrintableKeybindings: disablePrintableKeybindings,
      visibleOptionCount: visibleOptionCount_5,
      hiddenBelowUnit: p,
      options: options_8,
      columnSizingOptions: columnSizingOptions,
      defaultValue: defaultValue_5,
      selectedValue: selectedValue_2,
      onCancel: h,
      onChange: onChange_4,
      onFocus: onFocus_5,
      defaultFocusValue: T,
      scrollFocusToTopOnOptionsChange: scrollFocusToTopOnOptionsChange_3,
      layout: layout_2,
      disableSelection: disableSelection_3,
      inlineDescriptions: inlineDescriptions,
      hoverStyle: hoverStyle_4,
      inputChromeWidth: inputChromeWidth,
      onUpFromFirstItem: onUpFromFirstItem_2,
      onDownFromLastItem: onDownFromLastItem_2,
      onInputModeToggle: onInputModeToggle_2,
      onOpenEditor: onOpenEditor_4,
      canPasteImage: M,
      onImagePaste: onImagePaste_2,
      pastedContents: pastedContents_2,
      onRemoveImage: onRemoveImage_2,
      pointerWhileDisabled: pointerWhileDisabled
    } = t,
    isDisabled_6 = isDisabled_5 === void 0 ? !1 : isDisabled_5,
    hideIndex_2 = hideIndexes === void 0 ? !1 : hideIndexes,
    Ye = disablePrintableKeybindings === void 0 ? !1 : disablePrintableKeybindings,
    he = visibleOptionCount_5 === void 0 ? 5 : visibleOptionCount_5,
    ie = columnSizingOptions === void 0 ? options_8 : columnSizingOptions,
    scrollFocusToTopOnOptionsChange_4 = scrollFocusToTopOnOptionsChange_3 === void 0 ? !1 : scrollFocusToTopOnOptionsChange_3,
    G = layout_2 === void 0 ? "compact" : layout_2,
    z = disableSelection_3 === void 0 ? !1 : disableSelection_3,
    showLabel_2 = inlineDescriptions === void 0 ? !1 : inlineDescriptions,
    extraChromeWidth_2 = inputChromeWidth === void 0 ? 0 : inputChromeWidth,
    xe = pointerWhileDisabled === void 0 ? !1 : pointerWhileDisabled,
    [imagesSelected_3, onImagesSelectedChange_2] = y(!1),
    [selectedImageIndex_2, onSelectedImageIndexChange_2] = y(0),
    Me;
  if (B[0] !== options_8) Me = () => {
    let se = new Map();
    return options_8.forEach(item => {
      if (item.type === "input" && item.initialValue) se.set(item.value, item.initialValue);
    }), se;
  }, B[0] = options_8, B[1] = Me;else Me = B[1];
  let [inputValues_2, Dt] = y(Me),
    je;
  if (B[2] === w) je = new Map(), B[2] = je;else je = B[2];
  let pe = A(je),
    _t,
    St;
  if (B[3] !== inputValues_2 || B[4] !== options_8) _t = () => {
    for (const ze of options_8) {
      if (ze.type === "input" && ze.initialValue !== void 0) {
        let ft = pe.current.get(ze.value) ?? "";
        let Gt = inputValues_2.get(ze.value) ?? "";
        let initialValue = ze.initialValue;
        if (initialValue !== ft && Gt === ft) Dt(Ut => {
          let Je = new Map(Ut);
          return Je.set(ze.value, initialValue), Je;
        });
        pe.current.set(ze.value, initialValue);
      }
    }
  }, St = [options_8, inputValues_2], B[3] = inputValues_2, B[4] = options_8, B[5] = _t, B[6] = St;else _t = B[5], St = B[6];
  O(_t, St);
  let Vt = G === "compact" && !showLabel_2 && !ie.some($p) && ie.some(Hp),
    {
      columns: columns_3
    } = As(Re());
  const visibleOptionCount_6 = vYe(he, Vt ? "compact-vertical" : G);
  let Rt;
  if (B[7] !== T || B[8] !== defaultValue_5 || B[9] !== h || B[10] !== onChange_4 || B[11] !== onFocus_5 || B[12] !== options_8 || B[13] !== scrollFocusToTopOnOptionsChange_4 || B[14] !== selectedValue_2 || B[15] !== visibleOptionCount_6) Rt = {
    visibleOptionCount: visibleOptionCount_6,
    options: options_8,
    defaultValue: defaultValue_5,
    selectedValue: selectedValue_2,
    onChange: onChange_4,
    onCancel: h,
    onFocus: onFocus_5,
    focusValue: T,
    scrollFocusToTopOnOptionsChange: scrollFocusToTopOnOptionsChange_4
  }, B[7] = T, B[8] = defaultValue_5, B[9] = h, B[10] = onChange_4, B[11] = onFocus_5, B[12] = options_8, B[13] = scrollFocusToTopOnOptionsChange_4, B[14] = selectedValue_2, B[15] = visibleOptionCount_6, B[16] = Rt;else Rt = B[16];
  let state_2 = Gi(Rt),
    [hasInkFocus_2, st] = y(!0),
    Ft = mv(),
    shouldDropWheel_2 = e2t(),
    kt;
  if (B[17] !== z || B[18] !== isDisabled_6 || B[19] !== xe || B[20] !== Ft || B[21] !== state_2) kt = Qe => isDisabled_6 && !xe || z === !0 || Qe.disabled === !0 ? void 0 : te => {
    if (Ft(te)) {
      return;
    }
    if (Qe.type === "input") state_2.focusOption(Qe.value);else state_2.onChange?.(Qe.value);
  }, B[17] = z, B[18] = isDisabled_6, B[19] = xe, B[20] = Ft, B[21] = state_2, B[22] = kt;else kt = B[22];
  let fe = kt;
  const disableSelection_4 = z || (hideIndex_2 ? "numeric" : !1);
  let onEnterImageSelection_2;
  if (B[23] !== pastedContents_2) onEnterImageSelection_2 = () => {
    if (pastedContents_2 && Object.values(pastedContents_2).some(jp)) {
      let Et = U(Object.values(pastedContents_2), zp);
      return onImagesSelectedChange_2(!0), onSelectedImageIndexChange_2(Et - 1), !0;
    }
    return !1;
  }, B[23] = pastedContents_2, B[24] = onEnterImageSelection_2;else onEnterImageSelection_2 = B[24];
  let onExitImageSelection_2;
  if (B[25] === w) onExitImageSelection_2 = () => {
    onImagesSelectedChange_2(!1);
  }, B[25] = onExitImageSelection_2;else onExitImageSelection_2 = B[25];
  let Kt;
  if (B[26] !== hasInkFocus_2 || B[27] !== imagesSelected_3 || B[28] !== inputValues_2 || B[29] !== isDisabled_6 || B[30] !== onDownFromLastItem_2 || B[31] !== onInputModeToggle_2 || B[32] !== onUpFromFirstItem_2 || B[33] !== options_8 || B[34] !== state_2 || B[35] !== disableSelection_4 || B[36] !== onEnterImageSelection_2) Kt = {
    isDisabled: isDisabled_6,
    hasInkFocus: hasInkFocus_2,
    disableSelection: disableSelection_4,
    state: state_2,
    options: options_8,
    onUpFromFirstItem: onUpFromFirstItem_2,
    onDownFromLastItem: onDownFromLastItem_2,
    onInputModeToggle: onInputModeToggle_2,
    inputValues: inputValues_2,
    imagesSelected: imagesSelected_3,
    onEnterImageSelection: onEnterImageSelection_2,
    onExitImageSelection: onExitImageSelection_2
  }, B[26] = hasInkFocus_2, B[27] = imagesSelected_3, B[28] = inputValues_2, B[29] = isDisabled_6, B[30] = onDownFromLastItem_2, B[31] = onInputModeToggle_2, B[32] = onUpFromFirstItem_2, B[33] = options_8, B[34] = state_2, B[35] = disableSelection_4, B[36] = onEnterImageSelection_2, B[37] = Kt;else Kt = B[37];
  let {
      handleKeyDown: Jn
    } = zi(Kt),
    Tn;
  if (B[38] !== M || B[39] !== options_8 || B[40] !== state_2.focusOption || B[41] !== state_2.focusedValue) Tn = {
    options: options_8,
    focusedValue: state_2.focusedValue,
    focusOption: state_2.focusOption,
    canPaste: M
  }, B[38] = M, B[39] = options_8, B[40] = state_2.focusOption, B[41] = state_2.focusedValue, B[42] = Tn;else Tn = B[42];
  let onPaste = ihn(Tn),
    ref_10 = A(null);
  wS(ref_10, !isDisabled_6);
  let qt = {
      container: () => ({
        flexDirection: "column",
        ref: ref_10,
        ...(isDisabled_6 ? {} : {
          tabIndex: 0,
          textEntry: Ye ? !0 : void 0,
          onKeyDown: Jn,
          onPaste: onPaste,
          onFocus: () => st(!0),
          onBlur: () => st(!1)
        })
      })
    },
    ei;
  if (B[43] !== p || B[44] !== options_8.length || B[45] !== state_2.visibleFromIndex || B[46] !== state_2.visibleToIndex) ei = p !== void 0 && state_2.visibleToIndex - state_2.visibleFromIndex < options_8.length ? e(s, {
    paddingLeft: 3,
    height: 1,
    children: e(U_, {
      count: options_8.length - state_2.visibleToIndex,
      unit: p
    })
  }) : null, B[43] = p, B[44] = options_8.length, B[45] = state_2.visibleFromIndex, B[46] = state_2.visibleToIndex, B[47] = ei;else ei = B[47];
  let hiddenBelow = ei,
    Yt;
  if (B[48] !== isDisabled_6 || B[49] !== options_8.length || B[50] !== shouldDropWheel_2 || B[51] !== state_2.scrollViewport || B[52] !== state_2.visibleFromIndex || B[53] !== state_2.visibleToIndex) Yt = {
    isDisabled: isDisabled_6,
    visibleFromIndex: state_2.visibleFromIndex,
    visibleToIndex: state_2.visibleToIndex,
    optionCount: options_8.length,
    scrollViewport: state_2.scrollViewport,
    shouldDropWheel: shouldDropWheel_2
  }, B[48] = isDisabled_6, B[49] = options_8.length, B[50] = shouldDropWheel_2, B[51] = state_2.scrollViewport, B[52] = state_2.visibleFromIndex, B[53] = state_2.visibleToIndex, B[54] = Yt;else Yt = B[54];
  let rows = ahn(Yt);
  if (G === "expanded") {
    let rt;
    if (B[55] !== hideIndex_2 || B[56] !== state_2.options) rt = hideIndex_2 ? 0 : state_2.options.length.toString().length, B[55] = hideIndex_2, B[56] = state_2.options, B[57] = rt;else rt = B[57];
    let maxIndexWidth_2 = rt;
    const container = qt.container();
    let children_17;
    if (B[58] !== M || B[59] !== fe || B[60] !== hideIndex_2 || B[61] !== hoverStyle_4 || B[62] !== imagesSelected_3 || B[63] !== showLabel_2 || B[64] !== extraChromeWidth_2 || B[65] !== inputValues_2 || B[66] !== isDisabled_6 || B[67] !== maxIndexWidth_2 || B[68] !== h || B[69] !== onChange_4 || B[70] !== onImagePaste_2 || B[71] !== onOpenEditor_4 || B[72] !== onRemoveImage_2 || B[73] !== options_8.length || B[74] !== pastedContents_2 || B[75] !== selectedImageIndex_2 || B[76] !== state_2.focusedValue || B[77] !== state_2.value || B[78] !== state_2.visibleFromIndex || B[79] !== state_2.visibleOptions || B[80] !== state_2.visibleToIndex) {
      let ke;
      if (B[82] !== M || B[83] !== fe || B[84] !== hideIndex_2 || B[85] !== hoverStyle_4 || B[86] !== imagesSelected_3 || B[87] !== showLabel_2 || B[88] !== extraChromeWidth_2 || B[89] !== inputValues_2 || B[90] !== isDisabled_6 || B[91] !== maxIndexWidth_2 || B[92] !== h || B[93] !== onChange_4 || B[94] !== onImagePaste_2 || B[95] !== onOpenEditor_4 || B[96] !== onRemoveImage_2 || B[97] !== options_8.length || B[98] !== pastedContents_2 || B[99] !== selectedImageIndex_2 || B[100] !== state_2.focusedValue || B[101] !== state_2.value || B[102] !== state_2.visibleFromIndex || B[103] !== state_2.visibleToIndex) ke = (option_5, ni) => {
        let Qn = option_5.index === state_2.visibleFromIndex;
        let oi = option_5.index === state_2.visibleToIndex - 1;
        let cn = state_2.visibleToIndex < options_8.length;
        let Dn = state_2.visibleFromIndex > 0;
        let index_8 = state_2.visibleFromIndex + ni + 1;
        let isFocused_5 = !isDisabled_6 && state_2.focusedValue === option_5.value;
        let isSelected_5 = state_2.value === option_5.value;
        if (option_5.type === "input") {
          let inputValue = inputValues_2.has(option_5.value) ? inputValues_2.get(option_5.value) : option_5.initialValue || "";
          return e(CUe, {
            option: option_5,
            onClick: fe(option_5),
            hoverStyle: hoverStyle_4,
            isFocused: isFocused_5,
            isSelected: isSelected_5,
            shouldShowDownArrow: cn && oi,
            shouldShowUpArrow: Dn && Qn,
            maxIndexWidth: maxIndexWidth_2,
            index: index_8,
            hideIndex: hideIndex_2,
            extraChromeWidth: extraChromeWidth_2,
            inputValue: inputValue,
            onInputChange: eo => {
              Dt(to => {
                let ri = new Map(to);
                return ri.set(option_5.value, eo), ri;
              });
            },
            onSubmit: Xa => {
              let Qa = pastedContents_2 && Object.values(pastedContents_2).some(_p);
              if (Xa.trim() || Qa || option_5.allowEmptySubmitToCancel) onChange_4?.(option_5.value);else if (!option_5.ignoreEmptySubmit) h?.();
            },
            onExit: h,
            layout: "expanded",
            showLabel: showLabel_2,
            onOpenEditor: onOpenEditor_4,
            resetCursorOnUpdate: option_5.resetCursorOnUpdate,
            canPasteImage: M,
            onImagePaste: onImagePaste_2,
            pastedContents: pastedContents_2,
            onRemoveImage: onRemoveImage_2,
            imagesSelected: imagesSelected_3,
            selectedImageIndex: selectedImageIndex_2,
            onImagesSelectedChange: onImagesSelectedChange_2,
            onSelectedImageIndexChange: onSelectedImageIndexChange_2
          }, String(option_5.value));
        }
        let el = option_5.label;
        let dimColor = option_5.disabled === !0;
        let color_3 = dimColor ? void 0 : isSelected_5 ? "success" : isFocused_5 ? "suggestion" : void 0;
        return r(s, {
          flexDirection: "column",
          flexShrink: 0,
          children: [e(lhe, {
            isFocused: isFocused_5,
            isSelected: isSelected_5,
            shouldShowDownArrow: cn && oi,
            shouldShowUpArrow: Dn && Qn,
            onClick: fe(option_5),
            hoverStyle: hoverStyle_4,
            children: e(n, {
              dimColor: dimColor,
              color: color_3,
              children: el
            })
          }), option_5.description && e(s, {
            paddingLeft: 2,
            children: e(n, {
              dimColor: dimColor || option_5.dimDescription !== !1,
              color: color_3,
              children: e(qs, {
                children: option_5.description
              })
            })
          }), e(n, {
            children: " "
          })]
        }, String(option_5.value));
      }, B[82] = M, B[83] = fe, B[84] = hideIndex_2, B[85] = hoverStyle_4, B[86] = imagesSelected_3, B[87] = showLabel_2, B[88] = extraChromeWidth_2, B[89] = inputValues_2, B[90] = isDisabled_6, B[91] = maxIndexWidth_2, B[92] = h, B[93] = onChange_4, B[94] = onImagePaste_2, B[95] = onOpenEditor_4, B[96] = onRemoveImage_2, B[97] = options_8.length, B[98] = pastedContents_2, B[99] = selectedImageIndex_2, B[100] = state_2.focusedValue, B[101] = state_2.value, B[102] = state_2.visibleFromIndex, B[103] = state_2.visibleToIndex, B[104] = ke;else ke = B[104];
      children_17 = state_2.visibleOptions.map(ke);
      B[58] = M, B[59] = fe, B[60] = hideIndex_2, B[61] = hoverStyle_4, B[62] = imagesSelected_3, B[63] = showLabel_2, B[64] = extraChromeWidth_2, B[65] = inputValues_2, B[66] = isDisabled_6, B[67] = maxIndexWidth_2, B[68] = h, B[69] = onChange_4, B[70] = onImagePaste_2, B[71] = onOpenEditor_4, B[72] = onRemoveImage_2, B[73] = options_8.length, B[74] = pastedContents_2, B[75] = selectedImageIndex_2, B[76] = state_2.focusedValue, B[77] = state_2.value, B[78] = state_2.visibleFromIndex, B[79] = state_2.visibleOptions, B[80] = state_2.visibleToIndex, B[81] = children_17;
    } else children_17 = B[81];
    return e(Lt, {
      container: container,
      rows: rows,
      hiddenBelow: hiddenBelow,
      children: children_17
    });
  }
  if (G === "compact-vertical") {
    let rt;
    if (B[105] !== hideIndex_2 || B[106] !== state_2.options) rt = hideIndex_2 ? 0 : state_2.options.length.toString().length, B[105] = hideIndex_2, B[106] = state_2.options, B[107] = rt;else rt = B[107];
    let maxIndexWidth_3 = rt;
    const container_2 = qt.container();
    let children_18;
    if (B[108] !== M || B[109] !== fe || B[110] !== hideIndex_2 || B[111] !== hoverStyle_4 || B[112] !== imagesSelected_3 || B[113] !== showLabel_2 || B[114] !== extraChromeWidth_2 || B[115] !== inputValues_2 || B[116] !== isDisabled_6 || B[117] !== maxIndexWidth_3 || B[118] !== h || B[119] !== onChange_4 || B[120] !== onImagePaste_2 || B[121] !== onOpenEditor_4 || B[122] !== onRemoveImage_2 || B[123] !== options_8.length || B[124] !== pastedContents_2 || B[125] !== selectedImageIndex_2 || B[126] !== state_2.focusedValue || B[127] !== state_2.value || B[128] !== state_2.visibleFromIndex || B[129] !== state_2.visibleOptions || B[130] !== state_2.visibleToIndex) {
      let ke;
      if (B[132] !== M || B[133] !== fe || B[134] !== hideIndex_2 || B[135] !== hoverStyle_4 || B[136] !== imagesSelected_3 || B[137] !== showLabel_2 || B[138] !== extraChromeWidth_2 || B[139] !== inputValues_2 || B[140] !== isDisabled_6 || B[141] !== maxIndexWidth_3 || B[142] !== h || B[143] !== onChange_4 || B[144] !== onImagePaste_2 || B[145] !== onOpenEditor_4 || B[146] !== onRemoveImage_2 || B[147] !== options_8.length || B[148] !== pastedContents_2 || B[149] !== selectedImageIndex_2 || B[150] !== state_2.focusedValue || B[151] !== state_2.value || B[152] !== state_2.visibleFromIndex || B[153] !== state_2.visibleToIndex) ke = (option_6, Yp) => {
        let tl = option_6.index === state_2.visibleFromIndex;
        let nl = option_6.index === state_2.visibleToIndex - 1;
        let ol = state_2.visibleToIndex < options_8.length;
        let il = state_2.visibleFromIndex > 0;
        let index_9 = state_2.visibleFromIndex + Yp + 1;
        let isFocused_6 = !isDisabled_6 && state_2.focusedValue === option_6.value;
        let isSelected_6 = state_2.value === option_6.value;
        if (option_6.type === "input") {
          let inputValue_2 = inputValues_2.has(option_6.value) ? inputValues_2.get(option_6.value) : option_6.initialValue || "";
          return e(CUe, {
            option: option_6,
            onClick: fe(option_6),
            hoverStyle: hoverStyle_4,
            isFocused: isFocused_6,
            isSelected: isSelected_6,
            shouldShowDownArrow: ol && nl,
            shouldShowUpArrow: il && tl,
            maxIndexWidth: maxIndexWidth_3,
            index: index_9,
            hideIndex: hideIndex_2,
            extraChromeWidth: extraChromeWidth_2,
            inputValue: inputValue_2,
            onInputChange: Xp => {
              Dt(Qp => {
                let rl = new Map(Qp);
                return rl.set(option_6.value, Xp), rl;
              });
            },
            onSubmit: Zp => {
              let ef = pastedContents_2 && Object.values(pastedContents_2).some(Gp);
              if (Zp.trim() || ef || option_6.allowEmptySubmitToCancel) onChange_4?.(option_6.value);else if (!option_6.ignoreEmptySubmit) h?.();
            },
            onExit: h,
            layout: "compact",
            showLabel: showLabel_2,
            onOpenEditor: onOpenEditor_4,
            resetCursorOnUpdate: option_6.resetCursorOnUpdate,
            canPasteImage: M,
            onImagePaste: onImagePaste_2,
            pastedContents: pastedContents_2,
            onRemoveImage: onRemoveImage_2,
            imagesSelected: imagesSelected_3,
            selectedImageIndex: selectedImageIndex_2,
            onImagesSelectedChange: onImagesSelectedChange_2,
            onSelectedImageIndexChange: onSelectedImageIndexChange_2
          }, String(option_6.value));
        }
        let tf = option_6.label;
        let dimColor_2 = option_6.disabled === !0;
        return r(s, {
          flexDirection: "column",
          flexShrink: 0,
          children: [e(lhe, {
            isFocused: isFocused_6,
            isSelected: isSelected_6,
            shouldShowDownArrow: ol && nl,
            shouldShowUpArrow: il && tl,
            onClick: fe(option_6),
            hoverStyle: hoverStyle_4,
            children: r(ne, {
              children: [!hideIndex_2 && e(n, {
                dimColor: !0,
                children: `${index_9}.`.padEnd(maxIndexWidth_3 + 1)
              }), e(n, {
                dimColor: dimColor_2,
                color: dimColor_2 ? void 0 : isSelected_6 ? "success" : isFocused_6 ? "suggestion" : void 0,
                children: tf
              })]
            })
          }), option_6.description && e(s, {
            paddingLeft: hideIndex_2 ? 4 : maxIndexWidth_3 + 4,
            children: e(n, {
              dimColor: dimColor_2 || option_6.dimDescription !== !1,
              color: dimColor_2 ? void 0 : isSelected_6 ? "success" : isFocused_6 ? "suggestion" : void 0,
              children: e(qs, {
                children: option_6.description
              })
            })
          })]
        }, String(option_6.value));
      }, B[132] = M, B[133] = fe, B[134] = hideIndex_2, B[135] = hoverStyle_4, B[136] = imagesSelected_3, B[137] = showLabel_2, B[138] = extraChromeWidth_2, B[139] = inputValues_2, B[140] = isDisabled_6, B[141] = maxIndexWidth_3, B[142] = h, B[143] = onChange_4, B[144] = onImagePaste_2, B[145] = onOpenEditor_4, B[146] = onRemoveImage_2, B[147] = options_8.length, B[148] = pastedContents_2, B[149] = selectedImageIndex_2, B[150] = state_2.focusedValue, B[151] = state_2.value, B[152] = state_2.visibleFromIndex, B[153] = state_2.visibleToIndex, B[154] = ke;else ke = B[154];
      children_18 = state_2.visibleOptions.map(ke);
      B[108] = M, B[109] = fe, B[110] = hideIndex_2, B[111] = hoverStyle_4, B[112] = imagesSelected_3, B[113] = showLabel_2, B[114] = extraChromeWidth_2, B[115] = inputValues_2, B[116] = isDisabled_6, B[117] = maxIndexWidth_3, B[118] = h, B[119] = onChange_4, B[120] = onImagePaste_2, B[121] = onOpenEditor_4, B[122] = onRemoveImage_2, B[123] = options_8.length, B[124] = pastedContents_2, B[125] = selectedImageIndex_2, B[126] = state_2.focusedValue, B[127] = state_2.value, B[128] = state_2.visibleFromIndex, B[129] = state_2.visibleOptions, B[130] = state_2.visibleToIndex, B[131] = children_18;
    } else children_18 = B[131];
    return e(Lt, {
      container: container_2,
      rows: rows,
      hiddenBelow: hiddenBelow,
      children: children_18
    });
  }
  let rt;
  if (B[155] !== ie || B[156] !== hideIndex_2) rt = hideIndex_2 ? 0 : ie.length.toString().length, B[155] = ie, B[156] = hideIndex_2, B[157] = rt;else rt = B[157];
  let maxIndexWidth_4 = rt;
  if (Vt) {
    let Wt, fn;
    if (B[158] !== columns_3 || B[159] !== ie || B[160] !== hideIndex_2 || B[161] !== maxIndexWidth_4 || B[162] !== state_2.value) {
      Wt = hideIndex_2 ? 0 : maxIndexWidth_4 + 2;
      let Ae;
      if (B[165] !== ie || B[166] !== Wt || B[167] !== state_2.value) {
        let Fe;
        if (B[169] !== Wt || B[170] !== state_2.value) Fe = ms => {
          if (ms.type === "input") {
            return 0;
          }
          let nf = state_2.value === ms.value ? 2 : 0;
          return 2 + Wt + ce(rI(ms.label)) + nf;
        }, B[169] = Wt, B[170] = state_2.value, B[171] = Fe;else Fe = B[171];
        Ae = Math.max(...ie.map(Fe));
        B[165] = ie, B[166] = Wt, B[167] = state_2.value, B[168] = Ae;
      } else Ae = B[168];
      fn = Math.min(Ae, Math.floor(columns_3 * fzr));
      B[158] = columns_3, B[159] = ie, B[160] = hideIndex_2, B[161] = maxIndexWidth_4, B[162] = state_2.value, B[163] = Wt, B[164] = fn;
    } else Wt = B[163], fn = B[164];
    let Ae;
    if (B[172] !== Wt || B[173] !== isDisabled_6 || B[174] !== fn || B[175] !== options_8.length || B[176] !== state_2.focusedValue || B[177] !== state_2.value || B[178] !== state_2.visibleFromIndex || B[179] !== state_2.visibleToIndex) Ae = (option_7, of) => {
      let sf = option_7.index === state_2.visibleFromIndex;
      let rf = option_7.index === state_2.visibleToIndex - 1;
      let af = state_2.visibleToIndex < options_8.length;
      let lf = state_2.visibleFromIndex > 0;
      let index_10 = state_2.visibleFromIndex + of + 1;
      let isFocused_7 = !isDisabled_6 && state_2.focusedValue === option_7.value;
      let isSelected_7 = state_2.value === option_7.value;
      let isOptionDisabled = option_7.disabled === !0;
      let ll = isSelected_7 ? 2 : 0;
      let no = rI(option_7.label);
      let label = option_7.label;
      let dl = fn - 2 - Wt - ll;
      if (ce(no) > dl) no = ct(no, dl), label = no;
      return {
        option: option_7,
        index: index_10,
        label: label,
        labelWidth: 2 + Wt + ce(no) + ll,
        isFocused: isFocused_7,
        isSelected: isSelected_7,
        isOptionDisabled: isOptionDisabled,
        shouldShowDownArrow: af && rf,
        shouldShowUpArrow: lf && sf
      };
    }, B[172] = Wt, B[173] = isDisabled_6, B[174] = fn, B[175] = options_8.length, B[176] = state_2.focusedValue, B[177] = state_2.value, B[178] = state_2.visibleFromIndex, B[179] = state_2.visibleToIndex, B[180] = Ae;else Ae = B[180];
    let pf = state_2.visibleOptions.map(Ae);
    const container_3 = qt.container();
    let ke;
    if (B[181] !== fe || B[182] !== hideIndex_2 || B[183] !== hoverStyle_4 || B[184] !== maxIndexWidth_4 || B[185] !== fn) ke = De => {
      if (De.option.type === "input") {
        return null;
      }
      let cl = fn - De.labelWidth;
      return r(ps, {
        isFocused: De.isFocused,
        shouldShowDownArrow: De.shouldShowDownArrow,
        shouldShowUpArrow: De.shouldShowUpArrow,
        onClick: fe(De.option),
        hoverStyle: hoverStyle_4,
        children: [r(s, {
          flexDirection: "row",
          flexShrink: 0,
          children: [e(n, {
            children: " "
          }), r(n, {
            dimColor: De.isOptionDisabled,
            color: De.isOptionDisabled ? void 0 : De.isSelected ? "success" : De.isFocused ? "suggestion" : void 0,
            children: [!hideIndex_2 && e(n, {
              dimColor: !0,
              children: `${De.index}.`.padEnd(maxIndexWidth_4 + 2)
            }), De.label]
          }), De.isSelected && r(n, {
            children: [" ", e(Tt, {
              status: "success"
            })]
          }), cl > 0 && e(n, {
            children: " ".repeat(cl)
          })]
        }), e(s, {
          flexGrow: 1,
          marginLeft: 2,
          children: e(n, {
            wrap: "wrap",
            dimColor: De.option.descriptionColor === void 0 && (De.isOptionDisabled || De.option.dimDescription !== !1),
            color: De.isOptionDisabled ? De.option.descriptionColor : De.isSelected ? "success" : De.isFocused ? "suggestion" : De.option.descriptionColor,
            children: e(qs, {
              children: De.option.description || " "
            })
          })
        })]
      }, String(De.option.value));
    }, B[181] = fe, B[182] = hideIndex_2, B[183] = hoverStyle_4, B[184] = maxIndexWidth_4, B[185] = fn, B[186] = ke;else ke = B[186];
    return e(Lt, {
      container: container_3,
      rows: rows,
      hiddenBelow: hiddenBelow,
      children: pf.map(ke)
    });
  }
  const hs = Lt,
    container_4 = qt.container();
  let children_19;
  if (B[187] !== M || B[188] !== fe || B[189] !== hideIndex_2 || B[190] !== hoverStyle_4 || B[191] !== imagesSelected_3 || B[192] !== showLabel_2 || B[193] !== extraChromeWidth_2 || B[194] !== inputValues_2 || B[195] !== isDisabled_6 || B[196] !== maxIndexWidth_4 || B[197] !== h || B[198] !== onChange_4 || B[199] !== onImagePaste_2 || B[200] !== onOpenEditor_4 || B[201] !== onRemoveImage_2 || B[202] !== options_8.length || B[203] !== pastedContents_2 || B[204] !== selectedImageIndex_2 || B[205] !== state_2.focusedValue || B[206] !== state_2.value || B[207] !== state_2.visibleFromIndex || B[208] !== state_2.visibleOptions || B[209] !== state_2.visibleToIndex) {
    let ke;
    if (B[211] !== M || B[212] !== fe || B[213] !== hideIndex_2 || B[214] !== hoverStyle_4 || B[215] !== imagesSelected_3 || B[216] !== showLabel_2 || B[217] !== extraChromeWidth_2 || B[218] !== inputValues_2 || B[219] !== isDisabled_6 || B[220] !== maxIndexWidth_4 || B[221] !== h || B[222] !== onChange_4 || B[223] !== onImagePaste_2 || B[224] !== onOpenEditor_4 || B[225] !== onRemoveImage_2 || B[226] !== options_8.length || B[227] !== pastedContents_2 || B[228] !== selectedImageIndex_2 || B[229] !== state_2.focusedValue || B[230] !== state_2.value || B[231] !== state_2.visibleFromIndex || B[232] !== state_2.visibleToIndex) ke = (option_8, pl) => {
      if (option_8.type === "input") {
        let inputValue_3 = inputValues_2.has(option_8.value) ? inputValues_2.get(option_8.value) : option_8.initialValue || "";
        let mf = option_8.index === state_2.visibleFromIndex;
        let hf = option_8.index === state_2.visibleToIndex - 1;
        let vf = state_2.visibleToIndex < options_8.length;
        let bf = state_2.visibleFromIndex > 0;
        let index_11 = state_2.visibleFromIndex + pl + 1;
        let isFocused_8 = !isDisabled_6 && state_2.focusedValue === option_8.value;
        let isSelected_8 = state_2.value === option_8.value;
        return e(CUe, {
          option: option_8,
          onClick: fe(option_8),
          hoverStyle: hoverStyle_4,
          isFocused: isFocused_8,
          isSelected: isSelected_8,
          shouldShowDownArrow: vf && hf,
          shouldShowUpArrow: bf && mf,
          maxIndexWidth: maxIndexWidth_4,
          index: index_11,
          hideIndex: hideIndex_2,
          extraChromeWidth: extraChromeWidth_2,
          inputValue: inputValue_3,
          onInputChange: yf => {
            Dt(Sf => {
              let fl = new Map(Sf);
              return fl.set(option_8.value, yf), fl;
            });
          },
          onSubmit: wf => {
            let Of = pastedContents_2 && Object.values(pastedContents_2).some(qp);
            if (wf.trim() || Of || option_8.allowEmptySubmitToCancel) onChange_4?.(option_8.value);else if (!option_8.ignoreEmptySubmit) h?.();
          },
          onExit: h,
          layout: "compact",
          showLabel: showLabel_2,
          onOpenEditor: onOpenEditor_4,
          resetCursorOnUpdate: option_8.resetCursorOnUpdate,
          canPasteImage: M,
          onImagePaste: onImagePaste_2,
          pastedContents: pastedContents_2,
          onRemoveImage: onRemoveImage_2,
          imagesSelected: imagesSelected_3,
          selectedImageIndex: selectedImageIndex_2,
          onImagesSelectedChange: onImagesSelectedChange_2,
          onSelectedImageIndexChange: onSelectedImageIndexChange_2
        }, String(option_8.value));
      }
      let label_2 = option_8.label;
      let Tf = option_8.index === state_2.visibleFromIndex;
      let Df = option_8.index === state_2.visibleToIndex - 1;
      let Vf = state_2.visibleToIndex < options_8.length;
      let Rf = state_2.visibleFromIndex > 0;
      let Ff = state_2.visibleFromIndex + pl + 1;
      let isFocused_9 = !isDisabled_6 && state_2.focusedValue === option_8.value;
      let isSelected_9 = state_2.value === option_8.value;
      let dimColor_3 = option_8.disabled === !0;
      return r(lhe, {
        isFocused: isFocused_9,
        isSelected: isSelected_9,
        shouldShowDownArrow: Vf && Df,
        shouldShowUpArrow: Rf && Tf,
        onClick: fe(option_8),
        hoverStyle: hoverStyle_4,
        children: [r(s, {
          flexDirection: "row",
          flexShrink: 0,
          children: [!hideIndex_2 && e(n, {
            dimColor: !0,
            children: `${Ff}.`.padEnd(maxIndexWidth_4 + 2)
          }), r(n, {
            dimColor: dimColor_3,
            color: dimColor_3 ? void 0 : isSelected_9 ? "success" : isFocused_9 ? "suggestion" : void 0,
            children: [label_2, showLabel_2 && option_8.description && r(n, {
              dimColor: dimColor_3 || option_8.dimDescription !== !1,
              children: [" ", option_8.description]
            })]
          })]
        }), !showLabel_2 && option_8.description && e(s, {
          flexShrink: 99,
          marginLeft: 2,
          children: e(n, {
            wrap: "wrap-trim",
            dimColor: dimColor_3 || option_8.dimDescription !== !1,
            color: dimColor_3 ? void 0 : isSelected_9 ? "success" : isFocused_9 ? "suggestion" : void 0,
            children: e(qs, {
              children: option_8.description
            })
          })
        })]
      }, String(option_8.value));
    }, B[211] = M, B[212] = fe, B[213] = hideIndex_2, B[214] = hoverStyle_4, B[215] = imagesSelected_3, B[216] = showLabel_2, B[217] = extraChromeWidth_2, B[218] = inputValues_2, B[219] = isDisabled_6, B[220] = maxIndexWidth_4, B[221] = h, B[222] = onChange_4, B[223] = onImagePaste_2, B[224] = onOpenEditor_4, B[225] = onRemoveImage_2, B[226] = options_8.length, B[227] = pastedContents_2, B[228] = selectedImageIndex_2, B[229] = state_2.focusedValue, B[230] = state_2.value, B[231] = state_2.visibleFromIndex, B[232] = state_2.visibleToIndex, B[233] = ke;else ke = B[233];
    children_19 = state_2.visibleOptions.map(ke);
    B[187] = M, B[188] = fe, B[189] = hideIndex_2, B[190] = hoverStyle_4, B[191] = imagesSelected_3, B[192] = showLabel_2, B[193] = extraChromeWidth_2, B[194] = inputValues_2, B[195] = isDisabled_6, B[196] = maxIndexWidth_4, B[197] = h, B[198] = onChange_4, B[199] = onImagePaste_2, B[200] = onOpenEditor_4, B[201] = onRemoveImage_2, B[202] = options_8.length, B[203] = pastedContents_2, B[204] = selectedImageIndex_2, B[205] = state_2.focusedValue, B[206] = state_2.value, B[207] = state_2.visibleFromIndex, B[208] = state_2.visibleOptions, B[209] = state_2.visibleToIndex, B[210] = children_19;
  } else children_19 = B[210];
  let ke;
  if (B[234] !== hs || B[235] !== hiddenBelow || B[236] !== rows || B[237] !== container_4 || B[238] !== children_19) ke = e(hs, {
    container: container_4,
    rows: rows,
    hiddenBelow: hiddenBelow,
    children: children_19
  }), B[234] = hs, B[235] = hiddenBelow, B[236] = rows, B[237] = container_4, B[238] = children_19, B[239] = ke;else ke = B[239];
  return ke;
}
var _a = 8,
  fzr = 0.6;
function vYe(t, o) {
  let i = o === void 0 ? "compact" : o,
    {
      rows: rows_2
    } = As(Re()),
    d = i === "expanded" ? 3 : i === "compact" ? 1 : 2,
    p = Math.max(1, Math.floor((rows_2 - _a) / d));
  return Math.min(t, p);
}
function Lt(t) {
  let p = S(7),
    {
      container: container_5,
      rows: rows_3,
      hiddenBelow: hiddenBelow_2,
      children: children_20
    } = t,
    l;
  if (p[0] !== children_20 || p[1] !== rows_3) l = e(TUe, {
    ...rows_3,
    children: children_20
  }), p[0] = children_20, p[1] = rows_3, p[2] = l;else l = p[2];
  let m;
  if (p[3] !== container_5 || p[4] !== hiddenBelow_2 || p[5] !== l) m = r(s, {
    ...container_5,
    children: [l, hiddenBelow_2]
  }), p[3] = container_5, p[4] = hiddenBelow_2, p[5] = l, p[6] = m;else m = p[6];
  return m;
}
function ps(t) {
  let _ = S(24),
    {
      isFocused: o,
      shouldShowDownArrow: shouldShowDownArrow_2,
      shouldShowUpArrow: shouldShowUpArrow_2,
      onClick: onClick_5,
      hoverStyle: hoverStyle_5,
      children: children_21
    } = t,
    m = onClick_5 !== void 0,
    [I, c] = est(m),
    h = EUe(hoverStyle_5),
    inverse_3 = m && I && h === "inverse",
    T;
  if (_[0] !== o) T = {
    line: 0,
    column: 0,
    active: o
  }, _[0] = o, _[1] = T;else T = _[1];
  let ref_11 = BC(T);
  const backgroundColor_2 = m && I && h === "tint" ? JR : void 0;
  let onMouseEnter_2;
  if (_[2] !== m || _[3] !== c) onMouseEnter_2 = m ? () => c(!0) : void 0, _[2] = m, _[3] = c, _[4] = onMouseEnter_2;else onMouseEnter_2 = _[4];
  let onMouseLeave_2;
  if (_[5] !== m || _[6] !== c) onMouseLeave_2 = m ? () => c(!1) : void 0, _[5] = m, _[6] = c, _[7] = onMouseLeave_2;else onMouseLeave_2 = _[7];
  let b;
  if (_[8] !== m || _[9] !== h || _[10] !== I || _[11] !== inverse_3 || _[12] !== o || _[13] !== shouldShowDownArrow_2 || _[14] !== shouldShowUpArrow_2) b = e(s, {
    flexShrink: 0,
    children: o ? e(n, {
      color: "suggestion",
      inverse: inverse_3,
      children: re.pointer
    }) : shouldShowDownArrow_2 ? e(n, {
      dimColor: !0,
      inverse: inverse_3,
      children: re.arrowDown
    }) : shouldShowUpArrow_2 ? e(n, {
      dimColor: !0,
      inverse: inverse_3,
      children: re.arrowUp
    }) : m && I && h === "pointer" ? e(n, {
      dimColor: !0,
      children: re.pointer
    }) : e(n, {
      inverse: inverse_3,
      children: " "
    })
  }), _[8] = m, _[9] = h, _[10] = I, _[11] = inverse_3, _[12] = o, _[13] = shouldShowDownArrow_2, _[14] = shouldShowUpArrow_2, _[15] = b;else b = _[15];
  let C;
  if (_[16] !== children_21 || _[17] !== ref_11 || _[18] !== onClick_5 || _[19] !== backgroundColor_2 || _[20] !== onMouseEnter_2 || _[21] !== onMouseLeave_2 || _[22] !== b) C = r(s, {
    ref: ref_11,
    flexDirection: "row",
    flexShrink: 0,
    backgroundColor: backgroundColor_2,
    onClick: onClick_5,
    onMouseEnter: onMouseEnter_2,
    onMouseLeave: onMouseLeave_2,
    children: [b, children_21]
  }), _[16] = children_21, _[17] = ref_11, _[18] = onClick_5, _[19] = backgroundColor_2, _[20] = onMouseEnter_2, _[21] = onMouseLeave_2, _[22] = b, _[23] = C;else C = _[23];
  return C;
}
export { JR, EUe, TUe, est, nI, si, Qc, cu, shn, so, ule, azr, lzr, YGt, lhe, CUe, dzr, czr, ihn, Zf, uzr, ahn, ti, Ze, fzr, vYe };