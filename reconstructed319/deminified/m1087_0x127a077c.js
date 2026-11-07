// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { S } from "B:/~BUN/root/chunk-bn4bjw9d.js";
import { Bl, As } from "B:/~BUN/root/chunk-q8sf8fhe.js";
import { a } from "B:/~BUN/root/chunk-xrwdh0g4.js";
import { s, n } from "B:/~BUN/root/chunk-qey16aan.js";
import { yK } from "B:/~BUN/root/chunk-h6416p81.js";
import { nh } from "B:/~BUN/root/chunk-dwg8my6z.js";
import { Ce } from "B:/~BUN/root/chunk-cync0e08.js";
import { ke, IWr } from "B:/~BUN/root/chunk-bvcekd4j.js";
import { Y } from "B:/~BUN/root/chunk-c1v460b9.js";
import { fv, TP } from "B:/~BUN/root/chunk-w2rkhp43.js";
import { ne, e, r } from "B:/~BUN/root/chunk-t16eynda.js";
import { z_, Jt, ve, O, qo, y, At, j } from "B:/~BUN/root/chunk-czy5r8bc.js";
import { grn, s4 } from "B:/~BUN/root/chunk-4jfmvmew.js";
import { ce } from "B:/~BUN/root/chunk-w7vsj9wa.js";
import { w } from "B:/~BUN/root/chunk-4qfwb3rf.js";
j();
j();
var uUe = Jt(null);
function e8s() {
  let l = ve(uUe),
    t = ve(yK);
  return () => {
    if (l === null || !t) return;
    try {
      t.getState().open.find(item => item.id === l)?.onClaimed?.();
    } catch (error) {
      a(error);
    }
  };
}
function P3n() {
  let l = ve(uUe),
    t = ve(yK),
    i = l === null || !t ? void 0 : t.getState().open.find(item => item.id === l)?.countedAsk,
    u = i === void 0 ? void 0 : t?.askTally;
  return At(u?.subscribe ?? Ie, () => i === void 0 || !u ? null : u.positionLabel(i));
}
function H7(l, t, {
  perReveal = !1
} = {}) {
  let u = ve(uUe),
    f = ve(yK),
    A = qo(t),
    [d] = y(() => perReveal && u !== null && f ? f.getState().open.find(item => item.id === u)?.revealSeq ?? 0 : 0);
  O(() => {
    if (u !== null && f) {
      if (!f.firstReveal(u, perReveal ? `${l}@${d}` : l)) return;
    }
    A();
  }, [u, f, l, perReveal, d]);
}
function Ie() {
  return () => {};
}
function ee(l) {
  let t = s4(l);
  return t === null ? void 0 : String(t);
}
function I(l) {
  switch (l?.type) {
    case "workflow-agent":
      {
        let t = ee(l.workflowName);
        return t !== void 0 ? `from the "${t}" workflow` : "from a workflow";
      }
    case "subagent":
      {
        let t = ee(l.agentName);
        return t !== void 0 ? `from the ${t} agent` : "from a subagent";
      }
    case "remote-agent":
      return "from a remote cloud agent";
    case "plugin":
      {
        let t = ee(l.pluginName);
        return t === void 0 ? "from a plugin" : `from the ${t} plugin`;
      }
  }
  return;
}
function nWr(l, t, i) {
  let u = I(t);
  return ce(l) + (u === void 0 ? 0 : 1 + ce(`\xB7 ${u}`)) <= i;
}
function sle(l) {
  let R = S(25),
    {
      title: t,
      subtitle: i,
      color: color,
      requestSource: requestSource,
      srPrefix: srPrefix,
      aside: aside
    } = l,
    color_2 = color === void 0 ? "permission" : color,
    z;
  if (R[0] !== requestSource) z = I(requestSource), R[0] = requestSource, R[1] = z;else z = R[1];
  let h = z;
  const q = srPrefix !== void 0 ? `${srPrefix} ${t}` : void 0;
  let o;
  if (R[2] !== color_2 || R[3] !== q || R[4] !== t) o = e(n, {
    "aria-label": q,
    bold: !0,
    color: color_2,
    children: t
  }), R[2] = color_2, R[3] = q, R[4] = t, R[5] = o;else o = R[5];
  let g;
  if (R[6] !== h) g = h !== void 0 && r(n, {
    children: [e(n, {
      dimColor: !0,
      children: "\xB7 "
    }), h]
  }), R[6] = h, R[7] = g;else g = R[7];
  let b;
  if (R[8] !== o || R[9] !== g) b = r(s, {
    flexDirection: "row",
    gap: 1,
    children: [o, g]
  }), R[8] = o, R[9] = g, R[10] = b;else b = R[10];
  let m = b,
    P;
  if (R[11] !== aside || R[12] !== requestSource || R[13] !== t) P = aside !== void 0 && nWr(t, requestSource, aside.rowColumns - 1 - ce(aside.text)), R[11] = aside, R[12] = requestSource, R[13] = t, R[14] = P;else P = R[14];
  let C = P;
  const flexGrow = C ? 1 : void 0;
  let N;
  if (R[15] !== aside || R[16] !== C || R[17] !== m) N = C ? r(s, {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 1,
    children: [m, e(n, {
      dimColor: !0,
      children: aside.text
    })]
  }) : m, R[15] = aside, R[16] = C, R[17] = m, R[18] = N;else N = R[18];
  let x;
  if (R[19] !== i) x = i != null && (typeof i === "string" ? e(n, {
    dimColor: !0,
    wrap: "truncate-start",
    children: i
  }) : i), R[19] = i, R[20] = x;else x = R[20];
  let c;
  if (R[21] !== x || R[22] !== flexGrow || R[23] !== N) c = r(s, {
    flexDirection: "column",
    flexGrow: flexGrow,
    children: [N, x]
  }), R[21] = x, R[22] = flexGrow, R[23] = N, R[24] = c;else c = R[24];
  return c;
}
function We() {
  return !1;
}
var format = {
    keyCase: "lower"
  },
  be = "Permission Required:";
function ua(l) {
  let k = S(38),
    {
      title: title,
      subtitle: subtitle,
      color: color_3,
      titleColor: f,
      innerPaddingX: innerPaddingX,
      requestSource: requestSource_2,
      titleRight: titleRight,
      srPrefix: srPrefix_2,
      marginTop: marginTop,
      frame: frame,
      children: children
    } = l,
    o = color_3 === void 0 ? "permission" : color_3,
    g = innerPaddingX === void 0 ? 1 : innerPaddingX,
    srPrefix_3 = srPrefix_2 === void 0 ? be : srPrefix_2,
    marginTop_2 = marginTop === void 0 ? 1 : marginTop,
    P = P3n(),
    C = ve(nh),
    N;
  if (k[0] !== C) N = C ?? {
    rows: 0,
    columns: 0
  }, k[0] = C, k[1] = N;else N = k[1];
  let {
      columns: columns
    } = As(N),
    insideModal = Bl(),
    [_] = y(We);
  if (frame !== void 0 || _) {
    let T;
    if (k[2] !== P || k[3] !== children || k[4] !== o || k[5] !== columns || k[6] !== frame || k[7] !== g || k[8] !== insideModal || k[9] !== marginTop_2 || k[10] !== requestSource_2 || k[11] !== srPrefix_3 || k[12] !== subtitle || k[13] !== title || k[14] !== titleRight) T = e(ue, {
      title: title,
      subtitle: subtitle,
      color: o,
      requestSource: requestSource_2,
      titleRight: titleRight,
      askPosition: P,
      columns: columns,
      insideModal: insideModal,
      srPrefix: srPrefix_3,
      innerPaddingX: g,
      marginTop: marginTop_2,
      frame: frame,
      children: children
    }), k[2] = P, k[3] = children, k[4] = o, k[5] = columns, k[6] = frame, k[7] = g, k[8] = insideModal, k[9] = marginTop_2, k[10] = requestSource_2, k[11] = srPrefix_3, k[12] = subtitle, k[13] = title, k[14] = titleRight, k[15] = T;else T = k[15];
    return T;
  }
  const srPrefix_4 = srPrefix_3 ?? void 0;
  let aside_2;
  if (k[16] !== P || k[17] !== columns || k[18] !== titleRight) aside_2 = titleRight === void 0 && P !== null ? {
    text: P,
    rowColumns: columns - 2
  } : void 0, k[16] = P, k[17] = columns, k[18] = titleRight, k[19] = aside_2;else aside_2 = k[19];
  let B;
  if (k[20] !== requestSource_2 || k[21] !== subtitle || k[22] !== srPrefix_4 || k[23] !== aside_2 || k[24] !== title || k[25] !== f) B = e(sle, {
    title: title,
    subtitle: subtitle,
    color: f,
    requestSource: requestSource_2,
    srPrefix: srPrefix_4,
    aside: aside_2
  }), k[20] = requestSource_2, k[21] = subtitle, k[22] = srPrefix_4, k[23] = aside_2, k[24] = title, k[25] = f, k[26] = B;else B = k[26];
  let D;
  if (k[27] !== B || k[28] !== titleRight) D = e(s, {
    paddingX: 1,
    flexDirection: "column",
    children: r(s, {
      justifyContent: "space-between",
      children: [B, titleRight]
    })
  }), k[27] = B, k[28] = titleRight, k[29] = D;else D = k[29];
  let X;
  if (k[30] !== children || k[31] !== g) X = e(s, {
    flexDirection: "column",
    paddingX: g,
    children: children
  }), k[30] = children, k[31] = g, k[32] = X;else X = k[32];
  let L;
  if (k[33] !== o || k[34] !== marginTop_2 || k[35] !== X || k[36] !== D) L = r(s, {
    flexDirection: "column",
    borderStyle: "round",
    borderColor: o,
    borderLeft: !1,
    borderRight: !1,
    borderBottom: !1,
    marginTop: marginTop_2,
    children: [D, X]
  }), k[33] = o, k[34] = marginTop_2, k[35] = X, k[36] = D, k[37] = L;else L = k[37];
  return L;
}
function ue(l) {
  let c = S(45),
    {
      title: t,
      subtitle: i,
      color: color_4,
      requestSource: requestSource_3,
      titleRight: titleRight_2,
      askPosition: askPosition,
      columns: columns_2,
      insideModal: insideModal_2,
      srPrefix: srPrefix_5,
      innerPaddingX: h,
      marginTop: marginTop_3,
      frame: frame_2,
      children: children_2
    } = l,
    b = frame_2?.titleSuffix === void 0 ? "" : grn(frame_2.titleSuffix.replace(/\s+/g, " ").trim()),
    m = I(requestSource_3),
    P = ve(nh),
    columns_3 = Math.max(1, frame_2 === void 0 ? columns_2 - 2 : columns_2 - 2 * (insideModal_2 ? TP : fv)),
    k = ce(t) + (b === "" ? 0 : 3 + ce(b)) + (m === void 0 ? 0 : 3 + ce(m)),
    titleEnd = titleRight_2 ?? (askPosition !== null && k + 2 + ce(askPosition) <= columns_3 ? askPosition : void 0);
  const x = srPrefix_5 === null ? void 0 : `${srPrefix_5} ${t}`;
  let title_2;
  if (c[0] !== x || c[1] !== t) title_2 = e(n, {
    "aria-label": x,
    children: t
  }), c[0] = x, c[1] = t, c[2] = title_2;else title_2 = c[2];
  let titleSuffix;
  if (c[3] !== m || c[4] !== b) titleSuffix = b === "" && m === void 0 ? void 0 : r(ne, {
    children: [b !== "" && r(n, {
      dimColor: !0,
      children: [" \xB7 ", b]
    }), m !== void 0 && r(n, {
      dimColor: !0,
      children: [" \xB7 ", m]
    })]
  }), c[3] = m, c[4] = b, c[5] = titleSuffix;else titleSuffix = c[5];
  let subtitle_2;
  if (c[6] !== i) subtitle_2 = typeof i === "string" ? e(n, {
    dimColor: !0,
    wrap: "truncate-start",
    children: i
  }) : i ?? void 0, c[6] = i, c[7] = subtitle_2;else subtitle_2 = c[7];
  let B;
  if (c[8] !== color_4 || c[9] !== title_2 || c[10] !== titleSuffix || c[11] !== subtitle_2 || c[12] !== titleEnd) B = {
    title: title_2,
    titleSuffix: titleSuffix,
    subtitle: subtitle_2,
    isSubtitleDimmed: !1,
    titleEnd: titleEnd,
    color: color_4
  }, c[8] = color_4, c[9] = title_2, c[10] = titleSuffix, c[11] = subtitle_2, c[12] = titleEnd, c[13] = B;else B = c[13];
  let D = B;
  if (frame_2 === void 0) {
    const marginTop_4 = marginTop_3 === 0 && !insideModal_2 ? -1 : 0;
    let children_3;
    if (c[14] !== children_2 || c[15] !== h) children_3 = e(s, {
      flexDirection: "column",
      marginTop: -1,
      marginX: -1,
      paddingX: h,
      children: children_2
    }), c[14] = children_2, c[15] = h, c[16] = children_3;else children_3 = c[16];
    let children_4;
    if (c[17] !== children_3 || c[18] !== D) children_4 = e(IWr, {
      ...D,
      insetX: 1,
      children: children_3
    }), c[17] = children_3, c[18] = D, c[19] = children_4;else children_4 = c[19];
    let F;
    if (c[20] !== marginTop_4 || c[21] !== children_4) F = e(s, {
      flexDirection: "column",
      marginTop: marginTop_4,
      children: children_4
    }), c[20] = marginTop_4, c[21] = children_4, c[22] = F;else F = c[22];
    return F;
  }
  const onCancel = frame_2.onCancel,
    hideInputGuide = frame_2.showHintLine === !1;
  let M;
  if (c[23] === w) M = e(Y, {
    chord: "escape",
    action: "cancel",
    terse: !0,
    format: format
  }, "cancel"), c[23] = M;else M = c[23];
  let F;
  if (c[24] !== frame_2.showPermissionsHint) F = frame_2.showPermissionsHint !== !1 && e(n, {
    children: "/permissions"
  }, "permissions"), c[24] = frame_2.showPermissionsHint, c[25] = F;else F = c[25];
  let K;
  if (c[26] !== frame_2.hints) K = z_.toArray(frame_2.hints), c[26] = frame_2.hints, c[27] = K;else K = c[27];
  let inputGuide;
  if (c[28] !== K || c[29] !== F) inputGuide = r(Ce, {
    children: [M, F, K]
  }), c[28] = K, c[29] = F, c[30] = inputGuide;else inputGuide = c[30];
  let value;
  if (c[31] !== columns_3 || c[32] !== P) value = P === null ? null : {
    rows: P.rows,
    columns: columns_3
  }, c[31] = columns_3, c[32] = P, c[33] = value;else value = c[33];
  let children_5;
  if (c[34] !== children_2) children_5 = e(s, {
    flexDirection: "column",
    children: children_2
  }), c[34] = children_2, c[35] = children_5;else children_5 = c[35];
  let children_6;
  if (c[36] !== value || c[37] !== children_5) children_6 = e(nh.Provider, {
    value: value,
    children: children_5
  }), c[36] = value, c[37] = children_5, c[38] = children_6;else children_6 = c[38];
  let Fe;
  if (c[39] !== frame_2.onCancel || c[40] !== inputGuide || c[41] !== children_6 || c[42] !== hideInputGuide || c[43] !== D) Fe = e(ke, {
    ...D,
    onCancel: onCancel,
    isCancelActive: !1,
    truncateInputGuide: !0,
    hideInputGuide: hideInputGuide,
    inputGuide: inputGuide,
    children: children_6
  }), c[39] = frame_2.onCancel, c[40] = inputGuide, c[41] = children_6, c[42] = hideInputGuide, c[43] = D, c[44] = Fe;else Fe = c[44];
  return Fe;
}
export { uUe, e8s, P3n, H7, nWr, sle, ua };