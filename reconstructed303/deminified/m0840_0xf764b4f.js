// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { ke, _zo, Bn } from "B:/~BUN/root/chunk-rpez7z7a.js";
import { ji } from "B:/~BUN/root/chunk-nggrknsv.js";
import { WS } from "B:/~BUN/root/chunk-8ye9n4fk.js";
import { Te } from "B:/~BUN/root/chunk-smy4yvhm.js";
import { a } from "B:/~BUN/root/chunk-yt0knyw7.js";
import { Et, OLr, ir } from "B:/~BUN/root/chunk-hb6x4e3n.js";
import { w } from "B:/~BUN/root/chunk-rysqv8v1.js";
import { ok, xe } from "B:/~BUN/root/chunk-8pmnanyd.js";
import { ce } from "B:/~BUN/root/chunk-nxwmyxnk.js";
import { Es } from "B:/~BUN/root/chunk-ek28wssa.js";
import { ts } from "B:/~BUN/root/chunk-xrp58hm9.js";
import { Fd, mt, n0, LW, es } from "B:/~BUN/root/chunk-pjgzz98k.js";
import { ut } from "B:/~BUN/root/chunk-1gpjpba6.js";
import { mi, s, n, zt, ot, Ek } from "B:/~BUN/root/chunk-damrp3r8.js";
import { hS } from "B:/~BUN/root/chunk-a8k6kvgb.js";
import { V } from "B:/~BUN/root/chunk-tgzmva3g.js";
import { Bnr, L$, uce, jCe, c_e, Wnr } from "B:/~BUN/root/chunk-exdm7pa7.js";
import { Sk } from "B:/~BUN/root/chunk-dyx9ks30.js";
import { Eo } from "B:/~BUN/root/chunk-3hxvnq94.js";
import { hE } from "B:/~BUN/root/chunk-88ayp7r7.js";
import { Q, e, r } from "B:/~BUN/root/chunk-x2hkxw5q.js";
import { te } from "B:/~BUN/root/chunk-9tx73f8x.js";
import { S_o } from "B:/~BUN/root/chunk-dn8rakwm.js";
import { qt, ng, Z, y, B } from "B:/~BUN/root/chunk-5hr2ysa5.js";
import { eW } from "B:/~BUN/root/chunk-fck2jn8z.js";
import { Co } from "B:/~BUN/root/chunk-d544j3ga.js";
import { ua } from "B:/~BUN/root/chunk-pp80ffk4.js";
import { ie } from "B:/~BUN/root/chunk-t7350kw8.js";
import { He } from "B:/~BUN/root/chunk-8znbjmp4.js";
import { S, yn } from "B:/~BUN/root/chunk-ef0msk7r.js";
B();
function xF(o) {
  let i = w(10),
    active,
    l,
    children;
  if (i[0] !== o) ({
    active: active,
    children: children,
    ...l
  } = o), i[0] = o, i[1] = active, i[2] = l, i[3] = children;else active = i[1], l = i[2], children = i[3];
  let m;
  if (i[4] !== active) m = {
    line: 0,
    column: 0,
    active: active
  }, i[4] = active, i[5] = m;else m = i[5];
  let ref = Ek(m),
    d;
  if (i[6] !== l || i[7] !== children || i[8] !== ref) d = e(s, {
    ...l,
    ref: ref,
    children: children
  }), i[6] = l, i[7] = children, i[8] = ref, i[9] = d;else d = i[9];
  return d;
}
var xt = /\s+/g;
function Gtt(o) {
  let arrowedSuggestionId = o.arrowedSuggestionId;
  return arrowedSuggestionId != null && o.suggestions[o.selectedSuggestion]?.id === arrowedSuggestionId ? arrowedSuggestionId : null;
}
function yo(o, i, start_2, l) {
  let c = d => o[d] ?? 1,
    m = start => {
      let end = start + 1,
        usedRows = c(start);
      while (end < o.length && usedRows + c(end) <= i) usedRows += c(end), end++;
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
  while (p.start > 0 && p.usedRows + c(p.start - 1) <= i) p.start--, p.usedRows += c(p.start);
  return m(p.start);
}
var xo = 5;
function me(o) {
  if (o.startsWith("file-")) return "+";
  if (o.startsWith("mcp-resource-")) return WS;
  if (o.startsWith("mcp-template")) return WS;
  if (o.startsWith("agent-")) return "*";
  return "+";
}
function fe(o, i, t = !1) {
  let l = o.toLowerCase();
  if (l.length !== o.length) return [];
  let c = l.indexOf(i);
  if (c !== -1) return ze(o, [[c, c + i.length]]);
  if (t) return [];
  let m = [],
    p = 0;
  for (let d of i) {
    let f = l.indexOf(d, p);
    if (f === -1) return [];
    let h = f + d.length,
      u = m.at(-1);
    if (u && u[1] === f) u[1] = h;else m.push([f, h]);
    p = h;
  }
  return ze(o, m);
}
function nt(o) {
  let d = w(13),
    {
      text: i,
      query: query,
      color: color,
      isSelected: isSelected,
      bold: bold,
      contiguousOnly: contiguousOnly
    } = o,
    f,
    h;
  if (d[0] !== bold || d[1] !== color || d[2] !== contiguousOnly || d[3] !== isSelected || d[4] !== query || d[5] !== i) {
    h = yn;
    g: {
      let u = query ? fe(i, query, contiguousOnly) : [];
      if (u.length === 0) {
        const dimColor = !isSelected;
        let C;
        if (d[8] !== bold || d[9] !== color || d[10] !== dimColor || d[11] !== i) C = e(n, {
          color: color,
          dimColor: dimColor,
          bold: bold,
          children: i
        }), d[8] = bold, d[9] = color, d[10] = dimColor, d[11] = i, d[12] = C;else C = d[12];
        h = C;
        break g;
      }
      let children_2 = [];
      let M = (F, Y, q) => {
        if (F >= Y) {
          return;
        }
        children_2.push(e(n, {
          color: color,
          dimColor: !q && !isSelected,
          bold: bold || q,
          children: i.slice(F, Y)
        }, F));
      };
      let I = 0;
      for (const [v, P] of u) M(I, v, !1), M(v, P, !0), I = P;
      M(I, i.length, !1);
      f = e(Q, {
        children: children_2
      });
    }
    d[0] = bold, d[1] = color, d[2] = contiguousOnly, d[3] = isSelected, d[4] = query, d[5] = i, d[6] = f, d[7] = h;
  } else f = d[6], h = d[7];
  if (h !== yn) return h;
  return f;
}
function ee(o) {
  return o.startsWith("file-") || o.startsWith("mcp-resource-") || o.startsWith("mcp-template") || o.startsWith("agent-");
}
var Ye = ng(function (i) {
  let u = w(101),
    {
      item: item,
      maxColumnWidth: maxColumnWidth,
      isSelected: isSelected_2,
      allowWrap: allowWrap
    } = i,
    p = allowWrap === void 0 ? !0 : allowWrap,
    columns = Te().columns,
    f = ot(),
    h = ee(item.id),
    b;
  if (u[0] !== item.id) b = item.id.startsWith("emoji:"), u[0] = item.id, u[1] = b;else b = u[1];
  let C = b,
    children_4 = f && !C ? "" : isSelected_2 ? `${te.pointer} ` : "  ",
    W = ie(children_4);
  if (h) {
    let F;
    if (u[2] !== item.id) F = me(item.id), u[2] = item.id, u[3] = F;else F = u[3];
    let Y = F;
    let color_2 = isSelected_2 ? "suggestion" : void 0;
    let dimColor_2 = !isSelected_2;
    let I = item.id.startsWith("file-");
    let v = item.id.startsWith("mcp-resource-");
    let P;
    if (u[4] !== item.id) P = item.id.startsWith("mcp-template-value::"), u[4] = item.id, u[5] = P;else P = u[5];
    let K = P;
    let A = item.id.startsWith("mcp-template::");
    let G = item.description ? 3 : 0;
    let R;
    if (I || A || K) {
      let T;
      if (u[6] !== item.description) T = item.description ? Math.min(20, ie(item.description)) : 0, u[6] = item.description, u[7] = T;else T = u[7];
      let O = T;
      let H = columns - W - 2 - 4 - G - O;
      let J;
      if (u[8] !== K || u[9] !== item.displayText || u[10] !== H) J = K ? n0(item.displayText, H) : Fd(item.displayText, H), u[8] = K, u[9] = item.displayText, u[10] = H, u[11] = J;else J = u[11];
      R = J;
    } else if (v) {
      let T;
      if (u[12] !== item.displayText) T = mt(item.displayText, 30), u[12] = item.displayText, u[13] = T;else T = u[13];
      R = T;
    } else R = item.displayText;
    let de = columns - W - 2 - ie(R) - G - 4;
    let children_3;
    if (item.description) {
      let Ct = Math.max(0, de);
      let T;
      if (u[14] !== item.description || u[15] !== Ct) T = mt(item.description.replace(xt, " "), Ct), u[14] = item.description, u[15] = Ct, u[16] = T;else T = u[16];
      let pe = T;
      children_3 = `${children_4}${Y} ${R} \u2013 ${pe}`;
    } else children_3 = `${children_4}${Y} ${R}`;
    let T;
    if (u[17] !== dimColor_2 || u[18] !== children_3 || u[19] !== color_2) T = e(n, {
      color: color_2,
      dimColor: dimColor_2,
      wrap: "truncate",
      children: children_3
    }), u[17] = dimColor_2, u[18] = children_3, u[19] = color_2, u[20] = T;else T = u[20];
    return T;
  }
  let k = item.description || item.tag || item.kind !== void 0 || item.sourceTag,
    U = maxColumnWidth ?? ie(item.displayText) + 5,
    F;
  if (u[21] !== U || u[22] !== columns || u[23] !== k || u[24] !== f || u[25] !== item) F = k ? oe(item, columns, U, f) : Math.min(U, columns - 4), u[21] = U, u[22] = columns, u[23] = k, u[24] = f, u[25] = item, u[26] = F;else F = u[26];
  let j = F,
    color_3 = item.color || (isSelected_2 ? "suggestion" : void 0),
    dimColor_3 = !isSelected_2,
    bold_2 = C && isSelected_2,
    kt = j - 2 - (k && !C ? W : 0),
    L = item.displayText;
  if (ie(L) > kt) {
    let P;
    if (u[27] !== L || u[28] !== kt) P = L.includes("/") || L.includes("\\") ? n0(L, kt) : mt(L, kt), u[27] = L, u[28] = kt, u[29] = P;else P = u[29];
    L = P;
  }
  let P;
  if (u[30] !== j || u[31] !== L || u[32] !== W) P = " ".repeat(Math.max(0, j - ie(L) - W)), u[30] = j, u[31] = L, u[32] = W, u[33] = P;else P = u[33];
  let children_5 = P,
    children_7 = item.tag ? `[${item.tag}] ` : "",
    Ot = ie(children_7),
    color_4,
    children_6,
    children_8,
    T,
    J;
  if (u[34] !== item) {
    let {
      kindLaneText: kindLaneText,
      kindLabel: kindLabel,
      sourceText: sourceText
    } = Nt(item);
    children_6 = kindLaneText;
    children_8 = sourceText;
    color_4 = kindLabel === "skill" ? "skill" : kindLabel === "agent" ? "background" : void 0;
    T = ie(children_6);
    J = ie(children_8);
    u[34] = item, u[35] = color_4, u[36] = children_6, u[37] = children_8, u[38] = T, u[39] = J;
  } else color_4 = u[35], children_6 = u[36], children_8 = u[37], T = u[38], J = u[39];
  let Ft = T + J,
    Vt = Math.max(0, columns - j - Ot - Ft - 4),
    color_5,
    Wt,
    Mt,
    Bt,
    St;
  if (u[40] !== p || u[41] !== bold_2 || u[42] !== columns || u[43] !== Vt || u[44] !== j || u[45] !== L || u[46] !== isSelected_2 || u[47] !== item.description || u[48] !== item.query || u[49] !== color_4 || u[50] !== children_6 || u[51] !== Ft || u[52] !== children_5 || u[53] !== children_4 || u[54] !== dimColor_3 || u[55] !== children_8 || u[56] !== children_7 || u[57] !== Ot || u[58] !== color_3) {
    St = yn;
    Nn: {
      let ao = item.description ? item.description.replace(xt, " ").trim() : "";
      let [text, co] = p ? Ue(ao, Vt) : [mt(ao, Vt), ""];
      color_5 = isSelected_2 ? "suggestion" : void 0;
      let ct;
      if (u[64] !== bold_2 || u[65] !== children_4 || u[66] !== dimColor_3 || u[67] !== color_3) ct = children_4 ? e(n, {
        color: color_3,
        dimColor: dimColor_3,
        bold: bold_2,
        children: children_4
      }) : null, u[64] = bold_2, u[65] = children_4, u[66] = dimColor_3, u[67] = color_3, u[68] = ct;else ct = u[68];
      let dt;
      if (u[69] !== bold_2 || u[70] !== L || u[71] !== isSelected_2 || u[72] !== item.query || u[73] !== color_3) dt = e(nt, {
        text: L,
        query: item.query,
        color: color_3,
        isSelected: isSelected_2,
        bold: bold_2
      }), u[69] = bold_2, u[70] = L, u[71] = isSelected_2, u[72] = item.query, u[73] = color_3, u[74] = dt;else dt = u[74];
      let pt;
      if (u[75] !== bold_2 || u[76] !== children_5 || u[77] !== dimColor_3 || u[78] !== color_3) pt = e(n, {
        color: color_3,
        dimColor: dimColor_3,
        bold: bold_2,
        children: children_5
      }), u[75] = bold_2, u[76] = children_5, u[77] = dimColor_3, u[78] = color_3, u[79] = pt;else pt = u[79];
      let Pt;
      if (u[80] !== color_4 || u[81] !== children_6) Pt = children_6 ? e(n, {
        color: color_4,
        dimColor: color_4 === void 0,
        children: children_6
      }) : null, u[80] = color_4, u[81] = children_6, u[82] = Pt;else Pt = u[82];
      let po;
      if (u[83] !== children_7) po = children_7 ? e(n, {
        dimColor: !0,
        children: children_7
      }) : null, u[83] = children_7, u[84] = po;else po = u[84];
      let uo;
      if (u[85] !== children_8) uo = children_8 ? e(n, {
        dimColor: !0,
        children: children_8
      }) : null, u[85] = children_8, u[86] = uo;else uo = u[86];
      Wt = r(n, {
        wrap: "truncate",
        children: [ct, dt, pt, Pt, po, uo, e(nt, {
          text: text,
          query: item.query,
          color: color_5,
          isSelected: isSelected_2,
          bold: bold_2,
          contiguousOnly: !0
        })]
      });
      if (!co) {
        St = Wt;
        break Nn;
      }
      Mt = j + Ot + Ft;
      Bt = mt(co, Math.max(0, columns - Mt - 4));
    }
    u[40] = p, u[41] = bold_2, u[42] = columns, u[43] = Vt, u[44] = j, u[45] = L, u[46] = isSelected_2, u[47] = item.description, u[48] = item.query, u[49] = color_4, u[50] = children_6, u[51] = Ft, u[52] = children_5, u[53] = children_4, u[54] = dimColor_3, u[55] = children_8, u[56] = children_7, u[57] = Ot, u[58] = color_3, u[59] = color_5, u[60] = Wt, u[61] = Mt, u[62] = Bt, u[63] = St;
  } else color_5 = u[59], Wt = u[60], Mt = u[61], Bt = u[62], St = u[63];
  if (St !== yn) return St;
  let text_2 = Bt,
    ct;
  if (u[87] !== Mt) ct = " ".repeat(Mt), u[87] = Mt, u[88] = ct;else ct = u[88];
  let dt;
  if (u[89] !== bold_2 || u[90] !== color_5 || u[91] !== text_2 || u[92] !== isSelected_2 || u[93] !== item.query) dt = e(nt, {
    text: text_2,
    query: item.query,
    color: color_5,
    isSelected: isSelected_2,
    bold: bold_2,
    contiguousOnly: !0
  }), u[89] = bold_2, u[90] = color_5, u[91] = text_2, u[92] = isSelected_2, u[93] = item.query, u[94] = dt;else dt = u[94];
  let pt;
  if (u[95] !== dt || u[96] !== ct) pt = r(n, {
    wrap: "truncate",
    children: [ct, dt]
  }), u[95] = dt, u[96] = ct, u[97] = pt;else pt = u[97];
  let Pt;
  if (u[98] !== Wt || u[99] !== pt) Pt = r(s, {
    flexDirection: "column",
    children: [Wt, pt]
  }), u[98] = Wt, u[99] = pt, u[100] = Pt;else Pt = u[100];
  return Pt;
});
function xCe({
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
    } = Te(),
    g = ot(),
    W = hS(),
    maxColumnWidth_3 = Z(() => maxColumnWidth_2 ?? suggestions.reduce((acc, item) => Math.max(acc, ie(item.displayText)), 0) + 5, [suggestions, maxColumnWidth_2]),
    [Y, q] = y(null),
    M = overlay ? xo : Math.max(1, Math.min(Math.max(6, Math.floor(rows / 2)), rows - 3));
  if (suggestions.length === 0) {
    if (!l) return null;
    let length = noPad ? 0 : Math.max(0, M - 1);
    return r(s, {
      flexDirection: "column",
      justifyContent: overlay ? void 0 : "flex-end",
      children: [e(Eo, {
        children: l
      }), Array.from({
        length: length
      }, (U, j) => e(n, {
        children: " "
      }, `pad-${j}`))]
    });
  }
  let I = Math.max(0, Math.min(selectedSuggestion, suggestions.length - 1)),
    v = Math.max(0, I - M),
    P = suggestions.slice(v, I + M + 1),
    allowWrap_2 = M >= 2,
    A = P.map(item => allowWrap_2 ? Oo(item, columns_2, maxColumnWidth_3, g) : 1),
    G = I - v,
    R = G,
    T = G + 1,
    O = A[G] ?? 1,
    H = 0,
    J = Math.floor(M / 2);
  while (R > 0 && O < M && H + (A[R - 1] ?? 1) <= J) R--, H += A[R] ?? 1;
  O += H;
  while (T < P.length && O + (A[T] ?? 1) <= M) O += A[T] ?? 1, T++;
  while (R > 0 && O + (A[R - 1] ?? 1) <= M) R--, O += A[R] ?? 1;
  if (keepWindow) {
    let k = yo(A, M, G, (Y ?? v + R) - v);
    if (R = k.start, T = k.end, O = k.usedRows, v + R !== Y) q(v + R);
  }
  let de = P.slice(R, T),
    length_2 = noPad ? 0 : Math.max(0, M - O),
    Ct = suggestions[selectedSuggestion]?.id,
    pe = hoveredId != null && suggestions.some(item => item.id === hoveredId) ? hoveredId : void 0;
  return r(s, {
    flexDirection: "column",
    justifyContent: overlay ? void 0 : "flex-end",
    onMouseLeave: onSelect ? () => onHoverChange?.(null) : void 0,
    children: [de.map((item_2, index) => {
      let j = v + R + index,
        children_9 = e(Ye, {
          item: item_2,
          maxColumnWidth: maxColumnWidth_3,
          isSelected: item_2.id === (pe ?? Ct),
          allowWrap: allowWrap_2
        }, item_2.id);
      if (cursorRowId != null && item_2.id === cursorRowId) return e(xF, {
        active: !0,
        children: children_9
      }, item_2.id);
      if (!onSelect) return children_9;
      return e(s, {
        onMouseEnter: () => onHoverChange?.(item_2.id),
        onClick: X => {
          if (W(X)) return;
          onSelect(j, item_2.id);
        },
        children: children_9
      }, item_2.id);
    }), Array.from({
      length: length_2
    }, (k, U) => e(n, {
      children: " "
    }, `pad-${U}`))]
  });
}
var uqr = ng(xCe);
function Nt(o) {
  let kindLabel_2 = o.kind === void 0 || o.kind === "action" ? "" : o.kind === "info" ? "config" : o.kind,
    kindLaneText_2 = o.kind === void 0 ? "" : kindLabel_2 + ji(" ", 7 - ie(kindLabel_2)),
    sourceText_2 = o.sourceTag ? `[${o.sourceTag}] ` : "";
  return {
    kindLaneText: kindLaneText_2,
    kindLabel: kindLabel_2,
    sourceText: sourceText_2
  };
}
function oe(o, i, t, l) {
  let c = Math.floor(i * 0.4);
  return t > c ? c + vo(o, i, l) : t;
}
function vo(o, i, t) {
  if (t || o.id.startsWith("emoji:")) return 0;
  let l = o.tag ? ie(`[${o.tag}] `) : 0,
    {
      kindLaneText: kindLaneText_3,
      sourceText: sourceText_3
    } = Nt(o),
    p = i - Math.floor(i * 0.4) - l - ie(kindLaneText_3) - ie(sourceText_3) - 4 - (o.description ? 1 : 0),
    d = ie(`${te.pointer} `);
  return p < 0 ? d : Math.min(d, p);
}
function Oo(o, i, t, l) {
  if (ee(o.id) || !o.description) return 1;
  let c = oe(o, i, t, l),
    m = o.tag ? ie(`[${o.tag}] `) : 0,
    {
      kindLaneText: kindLaneText_4,
      sourceText: sourceText_4
    } = Nt(o),
    f = Math.max(0, i - c - m - ie(kindLaneText_4) - ie(sourceText_4) - 4);
  if (f <= 0) return 1;
  let h = o.description.replace(xt, " ").trim();
  return ie(h) > f ? 2 : 1;
}
function Ue(o, i) {
  if (i <= 0 || ie(o) <= i) return [o, ""];
  let t = LW(o, i),
    l = o.slice(t.length);
  if (l.startsWith(" ")) return [t, l.trimStart()];
  let c = t.lastIndexOf(" ");
  if (c > 0) return [t.slice(0, c), o.slice(c + 1)];
  return [t, l];
}
var Bo = /[^\u0020-\u02ff]/;
function ze(o, i) {
  if (i.length === 0 || !Bo.test(o)) return i;
  let t = new Set();
  for (let {
    index: index_2
  } of ua().segment(o)) t.add(index_2);
  let l = [];
  for (let [c, m] of i) {
    let p = c;
    while (p > 0 && !t.has(p)) p--;
    let d = m;
    while (d < o.length && !t.has(d)) d++;
    let f = l.at(-1);
    if (f && p <= f[1]) f[1] = Math.max(f[1], d);else l.push([p, d]);
  }
  return l;
}
var Vtt = He(Co(), o => o.set(void 0));
var Fre = () => Vtt.get() ?? {
  kept: void 0,
  takenAfter: 0,
  runs: 0
};
var Hre = () => Vtt.set({
  ...Fre(),
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
  Xe = {
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
  Je = {
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
  Qe = {
    both: " \u259D\u259D   \u259D\u259D ",
    left: " \u259D\u259D      ",
    right: "      \u259D\u259D "
  },
  Ze = {
    open: " \u2597   \u2596 ",
    left: " \u2598   \u2598 ",
    right: " \u259D   \u259D ",
    closed: " \u2582   \u2582 ",
    wink: " \u2597   \u2582 "
  },
  to = {
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
function ltr(o) {
  return typeof o === "string" ? jo[o] : o;
}
function gSn(o) {
  return typeof o !== "string" && "facing" in o;
}
function PCe() {
  return a.terminal !== "Apple_Terminal";
}
function OCe(o) {
  let i = w(47),
    t;
  if (i[0] !== o) t = o === void 0 ? {} : o, i[0] = o, i[1] = t;else t = i[1];
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
  if (gSn(p)) {
    let h;
    if (i[2] !== color_7 || i[3] !== p) h = PCe() ? e(ae, {
      facing: p.facing,
      color: color_7
    }) : e(wt, {
      eyes: "open",
      color: color_7
    }), i[2] = color_7, i[3] = p, i[4] = h;else h = i[4];
    return h;
  }
  let h;
  if (i[5] !== p) h = ltr(p), i[5] = p, i[6] = h;else h = i[6];
  let u = h;
  if (!PCe()) {
    let b;
    if (i[7] !== color_7 || i[8] !== u.eyes) b = e(wt, {
      eyes: u.eyes,
      color: color_7
    }), i[7] = color_7, i[8] = u.eyes, i[9] = b;else b = i[9];
    return b;
  }
  let C = Xe[u.arms],
    b;
  if (i[10] !== color_7 || i[11] !== paint) b = paint ?? (() => color_7), i[10] = color_7, i[11] = paint, i[12] = b;else b = i[12];
  let paint_2 = b,
    W;
  if (i[13] !== u.eyes) {
    W = [];
    for (const span of Je[u.eyes]) {
      let Y = W.at(-1);
      W.push({
        span: span,
        column: Y ? Y.column + Y.span.glyphs.length : 2
      });
    }
    i[13] = u.eyes, i[14] = W;
  } else W = i[14];
  let q;
  if (i[15] !== C.r1L || i[16] !== paint_2) q = e(N, {
    glyphs: C.r1L,
    column: 0,
    row: 0,
    paint: paint_2
  }), i[15] = C.r1L, i[16] = paint_2, i[17] = q;else q = i[17];
  let M;
  if (i[18] !== paint_2 || i[19] !== W) M = W.map(item => {
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
  }), i[18] = paint_2, i[19] = W, i[20] = M;else M = i[20];
  let I;
  if (i[21] !== C.r1R || i[22] !== paint_2) I = e(N, {
    glyphs: C.r1R,
    column: 8,
    row: 0,
    paint: paint_2
  }), i[21] = C.r1R, i[22] = paint_2, i[23] = I;else I = i[23];
  let K;
  if (i[24] !== q || i[25] !== M || i[26] !== I) K = r(n, {
    children: [q, M, I]
  }), i[24] = q, i[25] = M, i[26] = I, i[27] = K;else K = i[27];
  let A;
  if (i[28] !== C.r2L || i[29] !== paint_2) A = e(N, {
    glyphs: C.r2L,
    column: 0,
    row: 1,
    paint: paint_2
  }), i[28] = C.r2L, i[29] = paint_2, i[30] = A;else A = i[30];
  let G;
  if (i[31] !== paint_2) G = e(N, {
    glyphs: "\u2588\u2588\u2588\u2588\u2588",
    column: 2,
    row: 1,
    paint: paint_2,
    on: "eyes"
  }), i[31] = paint_2, i[32] = G;else G = i[32];
  let R;
  if (i[33] !== C.r2R || i[34] !== paint_2) R = e(N, {
    glyphs: C.r2R,
    column: 7,
    row: 1,
    paint: paint_2
  }), i[33] = C.r2R, i[34] = paint_2, i[35] = R;else R = i[35];
  let T;
  if (i[36] !== A || i[37] !== G || i[38] !== R) T = r(n, {
    children: [A, G, R]
  }), i[36] = A, i[37] = G, i[38] = R, i[39] = T;else T = i[39];
  const glyphs = Qe[u.feet];
  let H;
  if (i[40] !== paint_2 || i[41] !== glyphs) H = e(n, {
    children: e(N, {
      glyphs: glyphs,
      column: 0,
      row: 2,
      paint: paint_2
    })
  }), i[40] = paint_2, i[41] = glyphs, i[42] = H;else H = i[42];
  let J;
  if (i[43] !== T || i[44] !== H || i[45] !== K) J = r(s, {
    flexDirection: "column",
    flexShrink: 0,
    children: [K, T, H]
  }), i[43] = T, i[44] = H, i[45] = K, i[46] = J;else J = i[46];
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
function ae(o) {
  let c = w(7),
    {
      facing: facing,
      color: color_9
    } = o;
  const l = to[facing];
  let children_10;
  if (c[0] !== color_9 || c[1] !== l) {
    let p;
    if (c[3] !== color_9) p = (d, f) => {
      let {
        glyphs: glyphs_4,
        from: u,
        to: to_2
      } = d;
      return r(n, {
        color: color_9,
        children: [glyphs_4.slice(0, u), e(n, {
          backgroundColor: "clawd_background",
          children: glyphs_4.slice(u, to_2)
        }), glyphs_4.slice(to_2)]
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
function wt(o) {
  let l = w(19),
    {
      eyes: eyes,
      color: t
    } = o,
    c;
  if (l[0] !== t) c = e(n, {
    color: t,
    children: "\u2597"
  }), l[0] = t, l[1] = c;else c = l[1];
  const children_11 = Ze[eyes];
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
  if (l[11] === S) children_12 = " ".repeat(7), l[11] = children_12;else children_12 = l[11];
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
function fqr(o) {
  if (o >= 70) return "horizontal";
  return "compact";
}
function SLe(o, i) {
  if (ie(o) <= i) return o;
  let t = "/",
    l = "\u2026",
    c = 1,
    m = 1,
    p = o.split(t),
    d = p[0] || "",
    f = p.at(-1) || "",
    h = ie(d),
    u = ie(f);
  if (p.length === 1) return mt(o, i);
  if (d === "" && c + m + u >= i) return `${t}${mt(f, Math.max(1, i - m))}`;
  if (d !== "" && c * 2 + m + u >= i) return `${l}${t}${mt(f, Math.max(1, i - c - m))}`;
  if (p.length === 2) {
    let g = i - c - m - u;
    return `${LW(d, g)}${l}${t}${f}`;
  }
  let b = i - h - u - c - 2 * m;
  if (b <= 0) {
    let g = Math.max(0, i - u - c - 2 * m);
    return `${LW(d, g)}${t}${l}${t}${f}`;
  }
  let C = [];
  for (let g = p.length - 2; g > 0; g--) {
    let W = p[g];
    if (W && ie(W) + m <= b) C.unshift(W), b -= ie(W) + m;else break;
  }
  if (C.length === 0) return `${d}${t}${l}${t}${f}`;
  return `${d}${t}${l}${t}${C.join(t)}${t}${f}`;
}
function dVe() {
  let version = a.DEMO_VERSION ?? `${{
      ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
      PACKAGE_URL: "@anthropic-ai/claude-code",
      README_URL: "https://code.claude.com/docs/en/overview",
      VERSION: "2.1.303",
      FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
      BUILD_TIME: "2026-10-18T20:20:57Z",
      GIT_SHA: "07df2aedd2d01d2f60907b8404acbda187b04072",
      HOOKS_WORKER_URL: "B:/~BUN/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js",
      DD_SOURCEMAP_GROUP: "win32"
    }.VERSION}${eW()}`,
    i = _zo(),
    t = a.DEMO_VERSION ? "/code/claude" : Bn() && (ir("tengu_violin_wood", !1) || ir(S_o, !1)) ? Es(ke()) : ts(ce()),
    cwd = a.CLAUDE_CODE_HIDE_CWD ? "" : i ? `${t} in ${i.replace(/^https?:\/\//, "")}` : t,
    c = xe(),
    billingType = c !== "firstParty" ? ok[c] : Et() ? OLr() : "API Usage Billing",
    p = ut().agent;
  return {
    version: version,
    cwd: cwd,
    billingType: billingType,
    agentName: p
  };
}
function mqr(o, truncatedBilling, t) {
  if (ie(o) + 3 + ie(truncatedBilling) > t) return {
    shouldSplit: !0,
    truncatedModel: es(o, t),
    truncatedBilling: es(truncatedBilling, t)
  };
  return {
    shouldSplit: !1,
    truncatedModel: es(o, Math.max(t - ie(truncatedBilling) - 3, 10)),
    truncatedBilling: truncatedBilling
  };
}
function vt(o) {
  let t = w(2),
    {
      text: i
    } = o,
    l;
  if (t[0] !== i) l = e(n, {
    dimColor: !0,
    italic: !0,
    wrap: "truncate-end",
    children: i
  }), t[0] = i, t[1] = l;else l = t[1];
  return l;
}
function Y_() {
  let o = ot(),
    i = mi();
  return Sk(Bnr) && i && !o;
}
function Zwt() {
  let o = ot(),
    i = mi();
  return Sk(hE) && i && !o;
}
function ICe({
  segments: segments
}) {
  return segments.map((item, index) => {
    let children_13 = e(n, {
      color: item.color,
      dimColor: item.dim,
      bold: item.bold,
      children: item.text
    }, index);
    return item.url === void 0 ? children_13 : e(zt, {
      url: item.url,
      children: children_13
    }, index);
  });
}
function or(C) {
  return C.notifications.current;
}
function qye(o) {
  let d = w(18),
    {
      drawnOnRow1: drawnOnRow1
    } = o,
    t = drawnOnRow1 === void 0 ? !1 : drawnOnRow1,
    l = V(or),
    c = V(L$),
    m = Y_(),
    p = c_e();
  if (!l || !uce(l, c) || m && jCe(l, p)) {
    return null;
  }
  if (t) {
    return null;
  }
  let f;
  if (d[0] !== l || d[1] !== m) f = m ? Wnr(l) : void 0, d[0] = l, d[1] = m, d[2] = f;else f = d[2];
  let h = f;
  if (h?.surface === "toast") {
    let u;
    if (d[3] !== l.key || d[4] !== h.text) u = e(vt, {
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
    if (d[9] !== l.segments) children_14 = e(ICe, {
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
B();
var pqr = 2,
  qGt = 15,
  KGt = qt(null);
export { xF, Gtt, xCe, uqr, pqr, qGt, KGt, Vtt, Fre, Hre, fqr, SLe, dVe, mqr, Y_, Zwt, ltr, gSn, PCe, OCe, ICe, qye };