// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { Ee, WWs, xn } from "B:/~BUN/root/chunk-game8aqv.js";
import { wa, Yr, UVn } from "B:/~BUN/root/chunk-n8cnxns2.js";
import { Gv } from "B:/~BUN/root/chunk-3xdsa4p8.js";
import { Re } from "B:/~BUN/root/chunk-qr2xxkqa.js";
import { i } from "B:/~BUN/root/chunk-j6pt0v41.js";
import { Rt, evo, rn } from "B:/~BUN/root/chunk-1ks9vs37.js";
import { S } from "B:/~BUN/root/chunk-bn4bjw9d.js";
import { hC, Te } from "B:/~BUN/root/chunk-8f4z6bdn.js";
import { pe } from "B:/~BUN/root/chunk-thn0wk2x.js";
import { ks } from "B:/~BUN/root/chunk-d10hhz4p.js";
import { zs } from "B:/~BUN/root/chunk-5xx1vfdh.js";
import { Tu, ct, AH, lG, Os } from "B:/~BUN/root/chunk-bkfncj77.js";
import { yt } from "B:/~BUN/root/chunk-7wn6n2hd.js";
import { ot, s, n, sn, BC } from "B:/~BUN/root/chunk-qey16aan.js";
import { mv } from "B:/~BUN/root/chunk-h37egt7q.js";
import { G } from "B:/~BUN/root/chunk-tmdrwqnv.js";
import { FG, dke, RUe, BPe, Czr } from "B:/~BUN/root/chunk-npkbazqf.js";
import { $_ } from "B:/~BUN/root/chunk-zmwb0jn3.js";
import { bs } from "B:/~BUN/root/chunk-s4zq7e5r.js";
import { ne, e, r } from "B:/~BUN/root/chunk-t16eynda.js";
import { re } from "B:/~BUN/root/chunk-xkw95p5n.js";
import { Jt, My, Z, y, j } from "B:/~BUN/root/chunk-czy5r8bc.js";
import { jgs } from "B:/~BUN/root/chunk-tnfsxzpz.js";
import { UX } from "B:/~BUN/root/chunk-7mppcgdr.js";
import { go } from "B:/~BUN/root/chunk-eyrj3wyr.js";
import { Sa } from "B:/~BUN/root/chunk-63176a0t.js";
import { ce } from "B:/~BUN/root/chunk-w7vsj9wa.js";
import { w, Pn } from "B:/~BUN/root/chunk-4qfwb3rf.js";
import { he } from "B:/~BUN/root/chunk-fet34rqr.js";
j();
function Hj(o) {
  let a = S(10),
    active,
    l,
    children;
  if (a[0] !== o) ({
    active: active,
    children: children,
    ...l
  } = o), a[0] = o, a[1] = active, a[2] = l, a[3] = children;else active = a[1], l = a[2], children = a[3];
  let m;
  if (a[4] !== active) m = {
    line: 0,
    column: 0,
    active: active
  }, a[4] = active, a[5] = m;else m = a[5];
  let ref = BC(m),
    d;
  if (a[6] !== l || a[7] !== children || a[8] !== ref) d = e(s, {
    ...l,
    ref: ref,
    children: children
  }), a[6] = l, a[7] = children, a[8] = ref, a[9] = d;else d = a[9];
  return d;
}
var ht = /\s+/g;
function Ovt(o) {
  let arrowedSuggestionId = o.arrowedSuggestionId;
  return arrowedSuggestionId != null && o.suggestions[o.selectedSuggestion]?.id === arrowedSuggestionId ? arrowedSuggestionId : null;
}
function yo(o, a, start_2, l) {
  let c = d => o[d] ?? 1,
    m = start => {
      let end = start + 1,
        usedRows = c(start);
      while (end < o.length && usedRows + c(end) <= a) usedRows += c(end), end++;
      return {
        start: start,
        end: end,
        usedRows: usedRows
      };
    },
    p = m(Math.max(0, Math.min(l, o.length - 1)));
  if (start_2 >= p.end) p = m(start_2);else if (start_2 < p.start) p = {
    start: start_2,
    end: start_2 + 1,
    usedRows: c(start_2)
  };
  while (p.start > 0 && p.usedRows + c(p.start - 1) <= a) p.start--, p.usedRows += c(p.start);
  return m(p.start);
}
var xo = 5;
function ue(o) {
  if (o.startsWith("file-")) return "+";
  if (o.startsWith("mcp-resource-")) return Gv;
  if (o.startsWith("mcp-template")) return Gv;
  if (o.startsWith("agent-")) return "*";
  return "+";
}
function me(o, a, t = !1) {
  let l = o.toLowerCase();
  if (l.length !== o.length) return [];
  let c = l.indexOf(a);
  if (c !== -1) return Ge(o, [[c, c + a.length]]);
  if (t) return [];
  let m = [],
    p = 0;
  for (let d of a) {
    let f = l.indexOf(d, p);
    if (f === -1) return [];
    let h = f + d.length,
      u = m.at(-1);
    if (u && u[1] === f) u[1] = h;else m.push([f, h]);
    p = h;
  }
  return Ge(o, m);
}
function rt(o) {
  let d = S(13),
    {
      text: a,
      query: query,
      color: color,
      isSelected: isSelected,
      bold: bold,
      contiguousOnly: contiguousOnly
    } = o,
    f,
    h;
  if (d[0] !== bold || d[1] !== color || d[2] !== contiguousOnly || d[3] !== isSelected || d[4] !== query || d[5] !== a) {
    h = Pn;
    g: {
      let u = query ? me(a, query, contiguousOnly) : [];
      if (u.length === 0) {
        const dimColor = !isSelected;
        let C;
        if (d[8] !== bold || d[9] !== color || d[10] !== dimColor || d[11] !== a) C = e(n, {
          color: color,
          dimColor: dimColor,
          bold: bold,
          children: a
        }), d[8] = bold, d[9] = color, d[10] = dimColor, d[11] = a, d[12] = C;else C = d[12];
        h = C;
        break g;
      }
      let children_2 = [];
      let M = (B, Y, H) => {
        if (B >= Y) {
          return;
        }
        children_2.push(e(n, {
          color: color,
          dimColor: !H && !isSelected,
          bold: bold || H,
          children: a.slice(B, Y)
        }, B));
      };
      let I = 0;
      for (const [O, L] of u) M(I, O, !1), M(O, L, !0), I = L;
      M(I, a.length, !1);
      f = e(ne, {
        children: children_2
      });
    }
    d[0] = bold, d[1] = color, d[2] = contiguousOnly, d[3] = isSelected, d[4] = query, d[5] = a, d[6] = f, d[7] = h;
  } else f = d[6], h = d[7];
  if (h !== Pn) return h;
  return f;
}
function Qt(o) {
  return o.startsWith("file-") || o.startsWith("mcp-resource-") || o.startsWith("mcp-template") || o.startsWith("agent-");
}
var ze = My(function (a) {
  let u = S(101),
    {
      item: item,
      maxColumnWidth: maxColumnWidth,
      isSelected: isSelected_2,
      allowWrap: allowWrap
    } = a,
    p = allowWrap === void 0 ? !0 : allowWrap,
    columns = Re().columns,
    f = ot(),
    h = Qt(item.id),
    b;
  if (u[0] !== item.id) b = item.id.startsWith("emoji:"), u[0] = item.id, u[1] = b;else b = u[1];
  let C = b,
    children_4 = f && !C ? "" : isSelected_2 ? `${re.pointer} ` : "  ",
    W = ce(children_4);
  if (h) {
    let B;
    if (u[2] !== item.id) B = ue(item.id), u[2] = item.id, u[3] = B;else B = u[3];
    let Y = B;
    let color_2 = isSelected_2 ? "suggestion" : void 0;
    let dimColor_2 = !isSelected_2;
    let I = item.id.startsWith("file-");
    let O = item.id.startsWith("mcp-resource-");
    let L;
    if (u[4] !== item.id) L = item.id.startsWith("mcp-template-value::"), u[4] = item.id, u[5] = L;else L = u[5];
    let q = L;
    let A = item.id.startsWith("mcp-template::");
    let K = item.description ? 3 : 0;
    let k;
    if (I || A || q) {
      let R;
      if (u[6] !== item.description) R = item.description ? Math.min(20, ce(item.description)) : 0, u[6] = item.description, u[7] = R;else R = u[7];
      let v = R;
      let F = columns - W - 2 - 4 - K - v;
      let J;
      if (u[8] !== q || u[9] !== item.displayText || u[10] !== F) J = q ? AH(item.displayText, F) : Tu(item.displayText, F), u[8] = q, u[9] = item.displayText, u[10] = F, u[11] = J;else J = u[11];
      k = J;
    } else if (O) {
      let R;
      if (u[12] !== item.displayText) R = ct(item.displayText, 30), u[12] = item.displayText, u[13] = R;else R = u[13];
      k = R;
    } else k = item.displayText;
    let le = columns - W - 2 - ce(k) - K - 4;
    let children_3;
    if (item.description) {
      let wt = Math.max(0, le);
      let R;
      if (u[14] !== item.description || u[15] !== wt) R = ct(item.description.replace(ht, " "), wt), u[14] = item.description, u[15] = wt, u[16] = R;else R = u[16];
      let ae = R;
      children_3 = `${children_4}${Y} ${k} \u2013 ${ae}`;
    } else children_3 = `${children_4}${Y} ${k}`;
    let R;
    if (u[17] !== dimColor_2 || u[18] !== children_3 || u[19] !== color_2) R = e(n, {
      color: color_2,
      dimColor: dimColor_2,
      wrap: "truncate",
      children: children_3
    }), u[17] = dimColor_2, u[18] = children_3, u[19] = color_2, u[20] = R;else R = u[20];
    return R;
  }
  let T = item.description || item.tag || item.kind !== void 0 || item.sourceTag,
    U = maxColumnWidth ?? ce(item.displayText) + 5,
    B;
  if (u[21] !== U || u[22] !== columns || u[23] !== T || u[24] !== f || u[25] !== item) B = T ? Zt(item, columns, U, f) : Math.min(U, columns - 4), u[21] = U, u[22] = columns, u[23] = T, u[24] = f, u[25] = item, u[26] = B;else B = u[26];
  let V = B,
    color_3 = item.color || (isSelected_2 ? "suggestion" : void 0),
    dimColor_3 = !isSelected_2,
    bold_2 = C && isSelected_2,
    Ct = V - 2 - (T && !C ? W : 0),
    P = item.displayText;
  if (ce(P) > Ct) {
    let L;
    if (u[27] !== P || u[28] !== Ct) L = P.includes("/") || P.includes("\\") ? AH(P, Ct) : ct(P, Ct), u[27] = P, u[28] = Ct, u[29] = L;else L = u[29];
    P = L;
  }
  let L;
  if (u[30] !== V || u[31] !== P || u[32] !== W) L = " ".repeat(Math.max(0, V - ce(P) - W)), u[30] = V, u[31] = P, u[32] = W, u[33] = L;else L = u[33];
  let children_5 = L,
    children_7 = item.tag ? `[${item.tag}] ` : "",
    Ot = ce(children_7),
    color_4,
    children_6,
    children_8,
    R,
    J;
  if (u[34] !== item) {
    let {
      kindLaneText: kindLaneText,
      kindLabel: kindLabel,
      sourceText: sourceText
    } = Et(item);
    children_6 = kindLaneText;
    children_8 = sourceText;
    color_4 = kindLabel === "skill" ? "skill" : kindLabel === "agent" ? "background" : void 0;
    R = ce(children_6);
    J = ce(children_8);
    u[34] = item, u[35] = color_4, u[36] = children_6, u[37] = children_8, u[38] = R, u[39] = J;
  } else color_4 = u[35], children_6 = u[36], children_8 = u[37], R = u[38], J = u[39];
  let Bt = R + J,
    Ft = Math.max(0, columns - V - Ot - Bt - 4),
    color_5,
    Wt,
    Mt,
    vt,
    St;
  if (u[40] !== p || u[41] !== bold_2 || u[42] !== columns || u[43] !== Ft || u[44] !== V || u[45] !== P || u[46] !== isSelected_2 || u[47] !== item.description || u[48] !== item.query || u[49] !== color_4 || u[50] !== children_6 || u[51] !== Bt || u[52] !== children_5 || u[53] !== children_4 || u[54] !== dimColor_3 || u[55] !== children_8 || u[56] !== children_7 || u[57] !== Ot || u[58] !== color_3) {
    St = Pn;
    Ln: {
      let lo = item.description ? item.description.replace(ht, " ").trim() : "";
      let [text, ao] = p ? Ue(lo, Ft) : [ct(lo, Ft), ""];
      color_5 = isSelected_2 ? "suggestion" : void 0;
      let at;
      if (u[64] !== bold_2 || u[65] !== children_4 || u[66] !== dimColor_3 || u[67] !== color_3) at = children_4 ? e(n, {
        color: color_3,
        dimColor: dimColor_3,
        bold: bold_2,
        children: children_4
      }) : null, u[64] = bold_2, u[65] = children_4, u[66] = dimColor_3, u[67] = color_3, u[68] = at;else at = u[68];
      let dt;
      if (u[69] !== bold_2 || u[70] !== P || u[71] !== isSelected_2 || u[72] !== item.query || u[73] !== color_3) dt = e(rt, {
        text: P,
        query: item.query,
        color: color_3,
        isSelected: isSelected_2,
        bold: bold_2
      }), u[69] = bold_2, u[70] = P, u[71] = isSelected_2, u[72] = item.query, u[73] = color_3, u[74] = dt;else dt = u[74];
      let pt;
      if (u[75] !== bold_2 || u[76] !== children_5 || u[77] !== dimColor_3 || u[78] !== color_3) pt = e(n, {
        color: color_3,
        dimColor: dimColor_3,
        bold: bold_2,
        children: children_5
      }), u[75] = bold_2, u[76] = children_5, u[77] = dimColor_3, u[78] = color_3, u[79] = pt;else pt = u[79];
      let Lt;
      if (u[80] !== color_4 || u[81] !== children_6) Lt = children_6 ? e(n, {
        color: color_4,
        dimColor: color_4 === void 0,
        children: children_6
      }) : null, u[80] = color_4, u[81] = children_6, u[82] = Lt;else Lt = u[82];
      let co;
      if (u[83] !== children_7) co = children_7 ? e(n, {
        dimColor: !0,
        children: children_7
      }) : null, u[83] = children_7, u[84] = co;else co = u[84];
      let po;
      if (u[85] !== children_8) po = children_8 ? e(n, {
        dimColor: !0,
        children: children_8
      }) : null, u[85] = children_8, u[86] = po;else po = u[86];
      Wt = r(n, {
        wrap: "truncate",
        children: [at, dt, pt, Lt, co, po, e(rt, {
          text: text,
          query: item.query,
          color: color_5,
          isSelected: isSelected_2,
          bold: bold_2,
          contiguousOnly: !0
        })]
      });
      if (!ao) {
        St = Wt;
        break Ln;
      }
      Mt = V + Ot + Bt;
      vt = ct(ao, Math.max(0, columns - Mt - 4));
    }
    u[40] = p, u[41] = bold_2, u[42] = columns, u[43] = Ft, u[44] = V, u[45] = P, u[46] = isSelected_2, u[47] = item.description, u[48] = item.query, u[49] = color_4, u[50] = children_6, u[51] = Bt, u[52] = children_5, u[53] = children_4, u[54] = dimColor_3, u[55] = children_8, u[56] = children_7, u[57] = Ot, u[58] = color_3, u[59] = color_5, u[60] = Wt, u[61] = Mt, u[62] = vt, u[63] = St;
  } else color_5 = u[59], Wt = u[60], Mt = u[61], vt = u[62], St = u[63];
  if (St !== Pn) return St;
  let text_2 = vt,
    at;
  if (u[87] !== Mt) at = " ".repeat(Mt), u[87] = Mt, u[88] = at;else at = u[88];
  let dt;
  if (u[89] !== bold_2 || u[90] !== color_5 || u[91] !== text_2 || u[92] !== isSelected_2 || u[93] !== item.query) dt = e(rt, {
    text: text_2,
    query: item.query,
    color: color_5,
    isSelected: isSelected_2,
    bold: bold_2,
    contiguousOnly: !0
  }), u[89] = bold_2, u[90] = color_5, u[91] = text_2, u[92] = isSelected_2, u[93] = item.query, u[94] = dt;else dt = u[94];
  let pt;
  if (u[95] !== dt || u[96] !== at) pt = r(n, {
    wrap: "truncate",
    children: [at, dt]
  }), u[95] = dt, u[96] = at, u[97] = pt;else pt = u[97];
  let Lt;
  if (u[98] !== Wt || u[99] !== pt) Lt = r(s, {
    flexDirection: "column",
    children: [Wt, pt]
  }), u[98] = Wt, u[99] = pt, u[100] = Lt;else Lt = u[100];
  return Lt;
});
function pUe({
  suggestions: suggestions,
  selectedSuggestion: selectedSuggestion,
  maxColumnWidth: maxColumnWidth_2,
  emptyMessage: l,
  overlay: overlay,
  noPad: noPad,
  onSelect: onSelect,
  hoveredId: hoveredId,
  onHoverChange: onHoverChange,
  cursorRowId: cursorRowId,
  keepWindow = !1
}) {
  let {
      rows: rows,
      columns: columns_2
    } = Re(),
    g = ot(),
    W = mv(),
    maxColumnWidth_3 = Z(() => maxColumnWidth_2 ?? suggestions.reduce((acc, item) => Math.max(acc, ce(UVn(item.displayText))), 0) + 5, [suggestions, maxColumnWidth_2]),
    [Y, H] = y(null),
    M = overlay ? xo : Math.max(1, Math.min(Math.max(6, Math.floor(rows / 2)), rows - 3));
  if (suggestions.length === 0) {
    if (!l) return null;
    let length = noPad ? 0 : Math.max(0, M - 1);
    return r(s, {
      flexDirection: "column",
      justifyContent: overlay ? void 0 : "flex-end",
      children: [e(bs, {
        children: l
      }), Array.from({
        length: length
      }, (U, V) => e(n, {
        children: " "
      }, `pad-${V}`))]
    });
  }
  let I = Math.max(0, Math.min(selectedSuggestion, suggestions.length - 1)),
    O = Math.max(0, I - M),
    L = suggestions.slice(O, I + M + 1).map(Oo),
    allowWrap_2 = M >= 2,
    A = L.map(item => allowWrap_2 ? Ao(item, columns_2, maxColumnWidth_3, g) : 1),
    K = I - O,
    k = K,
    R = K + 1,
    v = A[K] ?? 1,
    F = 0,
    J = Math.floor(M / 2);
  while (k > 0 && v < M && F + (A[k - 1] ?? 1) <= J) k--, F += A[k] ?? 1;
  v += F;
  while (R < L.length && v + (A[R] ?? 1) <= M) v += A[R] ?? 1, R++;
  while (k > 0 && v + (A[k - 1] ?? 1) <= M) k--, v += A[k] ?? 1;
  if (keepWindow) {
    let T = yo(A, M, K, (Y ?? O + k) - O);
    if (k = T.start, R = T.end, v = T.usedRows, O + k !== Y) H(O + k);
  }
  let le = L.slice(k, R),
    length_2 = noPad ? 0 : Math.max(0, M - v),
    wt = suggestions[selectedSuggestion]?.id,
    ae = hoveredId != null && suggestions.some(item => item.id === hoveredId) ? hoveredId : void 0;
  return r(s, {
    flexDirection: "column",
    justifyContent: overlay ? void 0 : "flex-end",
    onMouseLeave: onSelect ? () => onHoverChange?.(null) : void 0,
    children: [le.map((item_2, index) => {
      let V = O + k + index,
        children_9 = e(ze, {
          item: item_2,
          maxColumnWidth: maxColumnWidth_3,
          isSelected: item_2.id === (ae ?? wt),
          allowWrap: allowWrap_2
        }, item_2.id);
      if (cursorRowId != null && item_2.id === cursorRowId) return e(Hj, {
        active: !0,
        children: children_9
      }, item_2.id);
      if (!onSelect) return children_9;
      return e(s, {
        onMouseEnter: () => onHoverChange?.(item_2.id),
        onClick: X => {
          if (W(X)) return;
          onSelect(V, item_2.id);
        },
        children: children_9
      }, item_2.id);
    }), Array.from({
      length: length_2
    }, (T, U) => e(n, {
      children: " "
    }, `pad-${U}`))]
  });
}
var UFo = My(pUe);
function Et(o) {
  let kindLabel_2 = o.kind === void 0 || o.kind === "action" ? "" : o.kind === "info" ? "config" : o.kind,
    kindLaneText_2 = o.kind === void 0 ? "" : kindLabel_2 + wa(" ", 7 - ce(kindLabel_2)),
    sourceText_2 = o.sourceTag ? `[${o.sourceTag}] ` : "";
  return {
    kindLaneText: kindLaneText_2,
    kindLabel: kindLabel_2,
    sourceText: sourceText_2
  };
}
function Zt(o, a, t, l) {
  let c = Math.floor(a * 0.4);
  return t > c ? c + Io(o, a, l) : t;
}
function Io(o, a, t) {
  if (t || o.id.startsWith("emoji:")) return 0;
  let l = o.tag ? ce(`[${o.tag}] `) : 0,
    {
      kindLaneText: kindLaneText_3,
      sourceText: sourceText_3
    } = Et(o),
    p = a - Math.floor(a * 0.4) - l - ce(kindLaneText_3) - ce(sourceText_3) - 4 - (o.description ? 1 : 0),
    d = ce(`${re.pointer} `);
  return p < 0 ? d : Math.min(d, p);
}
function Ao(o, a, t, l) {
  if (Qt(o.id) || !o.description) return 1;
  let c = Zt(o, a, t, l),
    m = o.tag ? ce(`[${o.tag}] `) : 0,
    {
      kindLaneText: kindLaneText_4,
      sourceText: sourceText_4
    } = Et(o),
    f = Math.max(0, a - c - m - ce(kindLaneText_4) - ce(sourceText_4) - 4);
  if (f <= 0) return 1;
  let h = o.description.replace(ht, " ").trim();
  return ce(h) > f ? 2 : 1;
}
function Oo(o) {
  let displayText = UVn(o.displayText),
    description = o.description && Yr(o.description),
    tag = o.tag && Yr(o.tag),
    sourceTag = o.sourceTag && Yr(o.sourceTag);
  if (displayText === o.displayText && description === o.description && tag === o.tag && sourceTag === o.sourceTag) return o;
  return {
    ...o,
    displayText: displayText,
    description: description,
    tag: tag,
    sourceTag: sourceTag
  };
}
function Ue(o, a) {
  if (a <= 0 || ce(o) <= a) return [o, ""];
  let t = lG(o, a),
    l = o.slice(t.length);
  if (l.startsWith(" ")) return [t, l.trimStart()];
  let c = t.lastIndexOf(" ");
  if (c > 0) return [t.slice(0, c), o.slice(c + 1)];
  return [t, l];
}
var vo = /[^\u0020-\u02ff]/;
function Ge(o, a) {
  if (a.length === 0 || !vo.test(o)) return a;
  let t = new Set();
  for (let {
    index: index_2
  } of Sa().segment(o)) t.add(index_2);
  let l = [];
  for (let [c, m] of a) {
    let p = c;
    while (p > 0 && !t.has(p)) p--;
    let d = m;
    while (d < o.length && !t.has(d)) d++;
    let f = l.at(-1);
    if (f && p <= f[1]) f[1] = Math.max(f[1], d);else l.push([p, d]);
  }
  return l;
}
var Ivt = he(go(), o => o.set(void 0));
var nhe = () => Ivt.get() ?? {
  kept: void 0,
  takenAfter: 0,
  runs: 0
};
var rhe = () => Ivt.set({
  ...nhe(),
  kept: void 0
});
var jo = {
    default: {
      eyes: "open",
      arms: "down",
      feet: "both"
    },
    "arms-up": {
      eyes: "open",
      arms: "up",
      feet: "both"
    },
    "look-left": {
      eyes: "left",
      arms: "down",
      feet: "both"
    },
    "look-right": {
      eyes: "right",
      arms: "down",
      feet: "both"
    }
  },
  Ye = {
    down: {
      r1L: " \u2590",
      r1R: "",
      r2L: "\u259D\u259C",
      r2R: "\u2588\u2580"
    },
    up: {
      r1L: "\u2597\u259F",
      r1R: "\u2584",
      r2L: " \u259C",
      r2R: "\u2588\u2598"
    },
    "one-up": {
      r1L: " \u2590",
      r1R: "\u2584",
      r2L: "\u259D\u259C",
      r2R: "\u2588\u2598"
    }
  },
  Xe = {
    open: [{
      glyphs: "\u259B\u2588\u2588\u2588\u259B\u2588"
    }],
    left: [{
      glyphs: "\u259F\u2588\u2588\u2588\u259F\u2588"
    }],
    right: [{
      glyphs: "\u2588\u259F\u2588\u2588\u2588\u259F"
    }],
    closed: [{
      glyphs: "\u2582",
      lid: !0
    }, {
      glyphs: "\u2588\u2588\u2588"
    }, {
      glyphs: "\u2582",
      lid: !0
    }, {
      glyphs: "\u2588"
    }],
    wink: [{
      glyphs: "\u259B\u2588\u2588\u2588"
    }, {
      glyphs: "\u2582",
      lid: !0
    }, {
      glyphs: "\u2588"
    }]
  },
  Je = {
    both: " \u259D\u259D   \u259D\u259D ",
    left: " \u259D\u259D      ",
    right: "      \u259D\u259D "
  },
  Qe = {
    open: " \u2597   \u2596 ",
    left: " \u2598   \u2598 ",
    right: " \u259D   \u259D ",
    closed: " \u2582   \u2582 ",
    wink: " \u2597   \u2582 "
  },
  Ze = {
    "right-12": [{
      glyphs: " \u2590\u2588\u259C\u2588\u2588\u259B\u2588 ",
      from: 2,
      to: 8
    }, {
      glyphs: "\u259D\u259C\u2588\u2588\u2588\u2588\u2588\u2588\u2580",
      from: 2,
      to: 7
    }, {
      glyphs: " \u259D\u259D   \u259D\u259D ",
      from: 0,
      to: 0
    }],
    "right-30": [{
      glyphs: "  \u2588\u259B\u2588\u2588\u259B\u258C ",
      from: 2,
      to: 7
    }, {
      glyphs: " \u259D\u2588\u2588\u2588\u2588\u2588\u259B ",
      from: 2,
      to: 7
    }, {
      glyphs: "  \u2598\u2598  \u2598\u2598 ",
      from: 0,
      to: 0
    }],
    "right-55": [{
      glyphs: "  \u2590\u2588\u259B\u2588\u259C  ",
      from: 3,
      to: 7
    }, {
      glyphs: "  \u2590\u2588\u2588\u2588\u2588  ",
      from: 3,
      to: 7
    }, {
      glyphs: "  \u259D\u259D \u259D\u259D  ",
      from: 0,
      to: 0
    }],
    "right-75": [{
      glyphs: "   \u2588\u2588\u259B\u258C  ",
      from: 3,
      to: 6
    }, {
      glyphs: "   \u2588\u2588\u2588\u258C  ",
      from: 3,
      to: 6
    }, {
      glyphs: "   \u2598  \u2598  ",
      from: 0,
      to: 0
    }],
    edge: [{
      glyphs: "   \u2590\u2588\u2588   ",
      from: 4,
      to: 6
    }, {
      glyphs: "   \u2590\u2588\u2588   ",
      from: 4,
      to: 6
    }, {
      glyphs: "   \u259D \u259D   ",
      from: 0,
      to: 0
    }],
    "back-105": [{
      glyphs: "   \u2588\u2588\u2588\u258C  ",
      from: 3,
      to: 6
    }, {
      glyphs: "   \u2588\u2588\u2588\u258C  ",
      from: 3,
      to: 6
    }, {
      glyphs: "   \u2598  \u2598  ",
      from: 0,
      to: 0
    }],
    "back-125": [{
      glyphs: "  \u2590\u2588\u2588\u2588\u2588  ",
      from: 3,
      to: 7
    }, {
      glyphs: "  \u2590\u2588\u2588\u2588\u2588  ",
      from: 3,
      to: 7
    }, {
      glyphs: "  \u259D\u259D \u259D\u259D  ",
      from: 0,
      to: 0
    }],
    "back-150": [{
      glyphs: "  \u2588\u2588\u2588\u2588\u2588\u258C ",
      from: 2,
      to: 7
    }, {
      glyphs: " \u259D\u2588\u2588\u2588\u2588\u2588\u259B ",
      from: 2,
      to: 7
    }, {
      glyphs: "  \u2598\u2598  \u2598\u2598 ",
      from: 0,
      to: 0
    }],
    back: [{
      glyphs: " \u2590\u2588\u2588\u2588\u2588\u2588\u2588 ",
      from: 2,
      to: 8
    }, {
      glyphs: "\u259D\u259C\u2588\u2588\u2588\u2588\u2588\u2588\u2580",
      from: 2,
      to: 7
    }, {
      glyphs: " \u259D\u259D   \u259D\u259D ",
      from: 0,
      to: 0
    }],
    "left-75": [{
      glyphs: "   \u259B\u2588\u2588\u258C  ",
      from: 3,
      to: 6
    }, {
      glyphs: "   \u2588\u2588\u2588\u258C  ",
      from: 3,
      to: 6
    }, {
      glyphs: "   \u2598  \u2598  ",
      from: 0,
      to: 0
    }],
    "left-55": [{
      glyphs: "  \u2590\u259C\u259B\u2588\u2588  ",
      from: 3,
      to: 7
    }, {
      glyphs: "  \u2590\u2588\u2588\u2588\u2588  ",
      from: 3,
      to: 7
    }, {
      glyphs: "  \u259D\u259D \u259D\u259D  ",
      from: 0,
      to: 0
    }],
    "left-30": [{
      glyphs: "  \u259B\u2588\u2588\u259B\u2588\u258C ",
      from: 2,
      to: 7
    }, {
      glyphs: " \u259D\u2588\u2588\u2588\u2588\u2588\u259B ",
      from: 2,
      to: 7
    }, {
      glyphs: "  \u2598\u2598  \u2598\u2598 ",
      from: 0,
      to: 0
    }],
    "left-12": [{
      glyphs: " \u2590\u259B\u2588\u2588\u2588\u259C\u2588 ",
      from: 2,
      to: 8
    }, {
      glyphs: "\u259D\u259C\u2588\u2588\u2588\u2588\u2588\u2588\u2580",
      from: 2,
      to: 7
    }, {
      glyphs: " \u259D\u259D   \u259D\u259D ",
      from: 0,
      to: 0
    }]
  };
function hWr(o) {
  return typeof o === "string" ? jo[o] : o;
}
function N3n(o) {
  return typeof o !== "string" && "facing" in o;
}
function mUe() {
  return i.terminal !== "Apple_Terminal";
}
function hUe(o) {
  let a = S(47),
    t;
  if (a[0] !== o) t = o === void 0 ? {} : o, a[0] = o, a[1] = t;else t = a[1];
  let {
      pose: pose,
      color: color_6,
      paint: paint
    } = t,
    p = pose === void 0 ? "default" : pose,
    color_7 = color_6 === void 0 ? "clawd_body" : color_6;
  if (ot()) {
    return null;
  }
  if (N3n(p)) {
    let h;
    if (a[2] !== color_7 || a[3] !== p) h = mUe() ? e(ie, {
      facing: p.facing,
      color: color_7
    }) : e(bt, {
      eyes: "open",
      color: color_7
    }), a[2] = color_7, a[3] = p, a[4] = h;else h = a[4];
    return h;
  }
  let h;
  if (a[5] !== p) h = hWr(p), a[5] = p, a[6] = h;else h = a[6];
  let u = h;
  if (!mUe()) {
    let b;
    if (a[7] !== color_7 || a[8] !== u.eyes) b = e(bt, {
      eyes: u.eyes,
      color: color_7
    }), a[7] = color_7, a[8] = u.eyes, a[9] = b;else b = a[9];
    return b;
  }
  let C = Ye[u.arms],
    b;
  if (a[10] !== color_7 || a[11] !== paint) b = paint ?? (() => color_7), a[10] = color_7, a[11] = paint, a[12] = b;else b = a[12];
  let paint_2 = b,
    W;
  if (a[13] !== u.eyes) {
    W = [];
    for (const span of Xe[u.eyes]) {
      let Y = W.at(-1);
      W.push({
        span: span,
        column: Y ? Y.column + Y.span.glyphs.length : 2
      });
    }
    a[13] = u.eyes, a[14] = W;
  } else W = a[14];
  let H;
  if (a[15] !== C.r1L || a[16] !== paint_2) H = e(N, {
    glyphs: C.r1L,
    column: 0,
    row: 0,
    paint: paint_2
  }), a[15] = C.r1L, a[16] = paint_2, a[17] = H;else H = a[17];
  let M;
  if (a[18] !== paint_2 || a[19] !== W) M = W.map(item => {
    let {
      span: span_2,
      column: column
    } = item;
    return e(N, {
      glyphs: span_2.glyphs,
      column: column,
      row: 0,
      paint: paint_2,
      on: span_2.lid ? "lid" : "eyes"
    }, column);
  }), a[18] = paint_2, a[19] = W, a[20] = M;else M = a[20];
  let I;
  if (a[21] !== C.r1R || a[22] !== paint_2) I = e(N, {
    glyphs: C.r1R,
    column: 8,
    row: 0,
    paint: paint_2
  }), a[21] = C.r1R, a[22] = paint_2, a[23] = I;else I = a[23];
  let q;
  if (a[24] !== H || a[25] !== M || a[26] !== I) q = r(n, {
    children: [H, M, I]
  }), a[24] = H, a[25] = M, a[26] = I, a[27] = q;else q = a[27];
  let A;
  if (a[28] !== C.r2L || a[29] !== paint_2) A = e(N, {
    glyphs: C.r2L,
    column: 0,
    row: 1,
    paint: paint_2
  }), a[28] = C.r2L, a[29] = paint_2, a[30] = A;else A = a[30];
  let K;
  if (a[31] !== paint_2) K = e(N, {
    glyphs: "\u2588\u2588\u2588\u2588\u2588",
    column: 2,
    row: 1,
    paint: paint_2,
    on: "eyes"
  }), a[31] = paint_2, a[32] = K;else K = a[32];
  let k;
  if (a[33] !== C.r2R || a[34] !== paint_2) k = e(N, {
    glyphs: C.r2R,
    column: 7,
    row: 1,
    paint: paint_2
  }), a[33] = C.r2R, a[34] = paint_2, a[35] = k;else k = a[35];
  let R;
  if (a[36] !== A || a[37] !== K || a[38] !== k) R = r(n, {
    children: [A, K, k]
  }), a[36] = A, a[37] = K, a[38] = k, a[39] = R;else R = a[39];
  const glyphs = Je[u.feet];
  let F;
  if (a[40] !== paint_2 || a[41] !== glyphs) F = e(n, {
    children: e(N, {
      glyphs: glyphs,
      column: 0,
      row: 2,
      paint: paint_2
    })
  }), a[40] = paint_2, a[41] = glyphs, a[42] = F;else F = a[42];
  let J;
  if (a[43] !== R || a[44] !== F || a[45] !== q) J = r(s, {
    flexDirection: "column",
    flexShrink: 0,
    children: [q, R, F]
  }), a[43] = R, a[44] = F, a[45] = q, a[46] = J;else J = a[46];
  return J;
}
function N({
  glyphs: glyphs_2,
  column: column_2,
  row: row,
  paint: paint_3,
  on: on
}) {
  let m = [];
  for (let [p, glyphs_3] of Array.from(glyphs_2).entries()) {
    let f = m.at(-1),
      color_8 = glyphs_3 === " " && f ? f.color : paint_3(column_2 + p, row);
    if (f?.color === color_8) f.glyphs += glyphs_3;else m.push({
      glyphs: glyphs_3,
      color: color_8
    });
  }
  return m.map((item, index) => e(n, {
    color: on === "lid" ? "clawd_background" : item.color,
    backgroundColor: on === "lid" ? item.color : on && "clawd_background",
    children: item.glyphs
  }, index));
}
function ie(o) {
  let c = S(7),
    {
      facing: facing,
      color: color_9
    } = o;
  const l = Ze[facing];
  let children_10;
  if (c[0] !== color_9 || c[1] !== l) {
    let p;
    if (c[3] !== color_9) p = (d, f) => {
      let {
        glyphs: glyphs_4,
        from: u,
        to: to
      } = d;
      return r(n, {
        color: color_9,
        children: [glyphs_4.slice(0, u), e(n, {
          backgroundColor: "clawd_background",
          children: glyphs_4.slice(u, to)
        }), glyphs_4.slice(to)]
      }, f);
    }, c[3] = color_9, c[4] = p;else p = c[4];
    children_10 = l.map(p);
    c[0] = color_9, c[1] = l, c[2] = children_10;
  } else children_10 = c[2];
  let p;
  if (c[5] !== children_10) p = e(s, {
    flexDirection: "column",
    flexShrink: 0,
    children: children_10
  }), c[5] = children_10, c[6] = p;else p = c[6];
  return p;
}
function bt(o) {
  let l = S(19),
    {
      eyes: eyes,
      color: t
    } = o,
    c;
  if (l[0] !== t) c = e(n, {
    color: t,
    children: "\u2597"
  }), l[0] = t, l[1] = c;else c = l[1];
  const children_11 = Qe[eyes];
  let p;
  if (l[2] !== t || l[3] !== children_11) p = e(n, {
    color: "clawd_background",
    backgroundColor: t,
    children: children_11
  }), l[2] = t, l[3] = children_11, l[4] = p;else p = l[4];
  let d;
  if (l[5] !== t) d = e(n, {
    color: t,
    children: "\u2596"
  }), l[5] = t, l[6] = d;else d = l[6];
  let f;
  if (l[7] !== c || l[8] !== p || l[9] !== d) f = r(n, {
    children: [c, p, d]
  }), l[7] = c, l[8] = p, l[9] = d, l[10] = f;else f = l[10];
  let children_12;
  if (l[11] === w) children_12 = " ".repeat(7), l[11] = children_12;else children_12 = l[11];
  let u, b;
  if (l[12] !== t) u = e(n, {
    backgroundColor: t,
    children: children_12
  }), b = e(n, {
    color: t,
    children: "\u2598\u2598   \u259D\u259D"
  }), l[12] = t, l[13] = u, l[14] = b;else u = l[13], b = l[14];
  let C;
  if (l[15] !== f || l[16] !== u || l[17] !== b) C = r(s, {
    flexDirection: "column",
    alignItems: "center",
    children: [f, u, b]
  }), l[15] = f, l[16] = u, l[17] = b, l[18] = C;else C = l[18];
  return C;
}
function jFo(o) {
  if (o >= 70) return "horizontal";
  return "compact";
}
function mYe(o, a) {
  if (ce(o) <= a) return o;
  let t = "/",
    l = "\u2026",
    c = 1,
    m = 1,
    p = o.split(t),
    d = p[0] || "",
    f = p.at(-1) || "",
    h = ce(d),
    u = ce(f);
  if (p.length === 1) return ct(o, a);
  if (d === "" && c + m + u >= a) return `${t}${ct(f, Math.max(1, a - m))}`;
  if (d !== "" && c * 2 + m + u >= a) return `${l}${t}${ct(f, Math.max(1, a - c - m))}`;
  if (p.length === 2) {
    let g = a - c - m - u;
    return `${lG(d, g)}${l}${t}${f}`;
  }
  let b = a - h - u - c - 2 * m;
  if (b <= 0) {
    let g = Math.max(0, a - u - c - 2 * m);
    return `${lG(d, g)}${t}${l}${t}${f}`;
  }
  let C = [];
  for (let g = p.length - 2; g > 0; g--) {
    let W = p[g];
    if (W && ce(W) + m <= b) C.unshift(W), b -= ce(W) + m;else break;
  }
  if (C.length === 0) return `${d}${t}${l}${t}${f}`;
  return `${d}${t}${l}${t}${C.join(t)}${t}${f}`;
}
function Lot() {
  let version = i.DEMO_VERSION ?? `${{
      ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
      PACKAGE_URL: "@anthropic-ai/claude-code",
      README_URL: "https://code.claude.com/docs/en/overview",
      VERSION: "2.1.319",
      FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
      BUILD_TIME: "2026-11-05T18:14:18Z",
      GIT_SHA: "fbdd7e02e8530e4c2ade8cc67d30104e53d2c8f2",
      HOOKS_WORKER_URL: "B:/~BUN/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js",
      DD_SOURCEMAP_GROUP: "win32"
    }.VERSION}${UX()}`,
    a = WWs(),
    t = i.DEMO_VERSION ? "/code/claude" : xn() && (rn("tengu_violin_wood", !1) || rn(jgs, !1)) ? ks(Ee()) : zs(pe()),
    cwd = i.CLAUDE_CODE_HIDE_CWD ? "" : a ? `${t} in ${a.replace(/^https?:\/\//, "")}` : t,
    c = Te(),
    billingType = c !== "firstParty" ? hC[c] : Rt() ? evo() : "API Usage Billing",
    p = yt().agent;
  return {
    version: version,
    cwd: cwd,
    billingType: billingType,
    agentName: p
  };
}
function WFo(o, truncatedBilling, t, l) {
  if (ce(l) + 3 + ce(truncatedBilling) > t) return {
    shouldSplit: !0,
    truncatedModel: Os(o, t),
    truncatedBilling: Os(truncatedBilling, t)
  };
  return {
    shouldSplit: !1,
    truncatedModel: Os(o, Math.max(t - ce(truncatedBilling) - 3, 10)),
    truncatedBilling: truncatedBilling
  };
}
function At(o) {
  let t = S(2),
    {
      text: a
    } = o,
    l;
  if (t[0] !== a) l = e(n, {
    dimColor: !0,
    italic: !0,
    wrap: "truncate-end",
    children: a
  }), t[0] = a, t[1] = l;else l = t[1];
  return l;
}
function gUe({
  segments: segments
}) {
  return segments.map((item, index) => {
    let children_13 = e(n, {
      color: item.color,
      dimColor: item.dim,
      bold: item.bold,
      children: item.text
    }, index);
    return item.url === void 0 ? children_13 : e(sn, {
      url: item.url,
      children: children_13
    }, index);
  });
}
function er(C) {
  return C.notifications.current;
}
function IPe(o) {
  let d = S(18),
    {
      drawnOnRow1: drawnOnRow1
    } = o,
    t = drawnOnRow1 === void 0 ? !1 : drawnOnRow1,
    l = G(er),
    c = G(FG),
    m = $_(),
    p = BPe();
  if (!l || !dke(l, c) || m && RUe(l, p)) {
    return null;
  }
  if (t) {
    return null;
  }
  let f;
  if (d[0] !== l || d[1] !== m) f = m ? Czr(l) : void 0, d[0] = l, d[1] = m, d[2] = f;else f = d[2];
  let h = f;
  if (h?.surface === "toast") {
    let u;
    if (d[3] !== l.key || d[4] !== h.text) u = e(At, {
      text: h.text
    }, l.key), d[3] = l.key, d[4] = h.text, d[5] = u;else u = d[5];
    return u;
  }
  if ("jsx" in l) {
    let u;
    if (d[6] !== l.jsx || d[7] !== l.key) u = e(n, {
      wrap: "truncate",
      children: l.jsx
    }, l.key), d[6] = l.jsx, d[7] = l.key, d[8] = u;else u = d[8];
    return u;
  }
  if ("segments" in l) {
    let children_14;
    if (d[9] !== l.segments) children_14 = e(gUe, {
      segments: l.segments
    }), d[9] = l.segments, d[10] = children_14;else children_14 = d[10];
    let b;
    if (d[11] !== l.key || d[12] !== children_14) b = e(n, {
      wrap: "truncate",
      children: children_14
    }, l.key), d[11] = l.key, d[12] = children_14, d[13] = b;else b = d[13];
    return b;
  }
  const dimColor_4 = !l.color;
  let b;
  if (d[14] !== l.color || d[15] !== l.text || d[16] !== dimColor_4) b = e(n, {
    color: l.color,
    dimColor: dimColor_4,
    wrap: "truncate",
    children: l.text
  }), d[14] = l.color, d[15] = l.text, d[16] = dimColor_4, d[17] = b;else b = d[17];
  return b;
}
j();
var BFo = 2,
  hmn = 15,
  gmn = Jt(null);
export { Hj, Ovt, pUe, UFo, BFo, hmn, gmn, Ivt, nhe, rhe, jFo, mYe, Lot, WFo, hWr, N3n, mUe, hUe, gUe, IPe };