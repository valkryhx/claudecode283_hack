// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { we, P2r, Yn } from "B:/~BUN/root/chunk-4rk7cwxz.js";
import { Ys } from "B:/~BUN/root/chunk-y04k89s2.js";
import { Ry } from "B:/~BUN/root/chunk-ah3egpyh.js";
import { ve } from "B:/~BUN/root/chunk-cxqcvpm0.js";
import { a } from "B:/~BUN/root/chunk-nkmmqnq7.js";
import { pt, hKn, qs } from "B:/~BUN/root/chunk-gf53qpk6.js";
import { w } from "B:/~BUN/root/chunk-x9hkq9y1.js";
import { oe } from "B:/~BUN/root/chunk-shgdrs47.js";
import { xa } from "B:/~BUN/root/chunk-qqgpf856.js";
import { xo } from "B:/~BUN/root/chunk-8hs4bwwk.js";
import { ie, Va, ot, rA, YN, fo } from "B:/~BUN/root/chunk-bpp59nyd.js";
import { Je } from "B:/~BUN/root/chunk-3rzkfay5.js";
import { Fx, Ie } from "B:/~BUN/root/chunk-sd4cj2qx.js";
import { s, n, bt } from "B:/~BUN/root/chunk-1gn8pz4b.js";
import { Yg } from "B:/~BUN/root/chunk-vabpvk99.js";
import { W } from "B:/~BUN/root/chunk-h23911wn.js";
import { LQ, xue } from "B:/~BUN/root/chunk-cpg4rjtx.js";
import { Cr } from "B:/~BUN/root/chunk-xpw4e8kb.js";
import { V, e, r } from "B:/~BUN/root/chunk-qkvevvte.js";
import { Z } from "B:/~BUN/root/chunk-08bth2fj.js";
import { Gp, N } from "B:/~BUN/root/chunk-rnj6pcz5.js";
import { fN } from "B:/~BUN/root/chunk-45e6pkwp.js";
import { ya } from "B:/~BUN/root/chunk-nfc48pcb.js";
import { hn } from "B:/~BUN/root/chunk-yv67t8hr.js";
N();
var st = /\s+/g,
  We = 5;
function At(o) {
  if (o.startsWith("file-")) return "+";
  if (o.startsWith("mcp-resource-")) return Ry;
  if (o.startsWith("mcp-template")) return Ry;
  if (o.startsWith("agent-")) return "*";
  return "+";
}
function Bt(o, l, t = !1) {
  let c = o.toLowerCase();
  if (c.length !== o.length) return [];
  let i = c.indexOf(l);
  if (i !== -1) return he(o, [[i, i + l.length]]);
  if (t) return [];
  let m = [],
    f = 0;
  for (let d of l) {
    let h = c.indexOf(d, f);
    if (h === -1) return [];
    let u = h + d.length,
      x = m.at(-1);
    if (x && x[1] === h) x[1] = u;else m.push([h, u]);
    f = u;
  }
  return he(o, m);
}
function K(o) {
  let d = w(13),
    {
      text: l,
      query: query,
      color: color,
      isSelected: isSelected,
      bold: bold,
      contiguousOnly: contiguousOnly
    } = o,
    h,
    u;
  if (d[0] !== bold || d[1] !== color || d[2] !== contiguousOnly || d[3] !== isSelected || d[4] !== query || d[5] !== l) {
    u = hn;
    k: {
      let x = query ? Bt(l, query, contiguousOnly) : [];
      if (x.length === 0) {
        const dimColor = !isSelected;
        let T;
        if (d[8] !== bold || d[9] !== color || d[10] !== dimColor || d[11] !== l) T = e(n, {
          color: color,
          dimColor: dimColor,
          bold: bold,
          children: l
        }), d[8] = bold, d[9] = color, d[10] = dimColor, d[11] = l, d[12] = T;else T = d[12];
        u = T;
        break k;
      }
      let children = [];
      let A = (D, M, b) => {
        if (D >= M) {
          return;
        }
        children.push(e(n, {
          color: color,
          dimColor: !b && !isSelected,
          bold: bold || b,
          children: l.slice(D, M)
        }, D));
      };
      let L = 0;
      for (const [E, y] of x) A(L, E, !1), A(E, y, !0), L = y;
      A(L, l.length, !1);
      h = e(V, {
        children: children
      });
    }
    d[0] = bold, d[1] = color, d[2] = contiguousOnly, d[3] = isSelected, d[4] = query, d[5] = l, d[6] = h, d[7] = u;
  } else h = d[6], u = d[7];
  if (u !== hn) return u;
  return h;
}
function Dt(o) {
  return o.startsWith("file-") || o.startsWith("mcp-resource-") || o.startsWith("mcp-template") || o.startsWith("agent-");
}
var ge = Gp(function (l) {
  let u = w(95),
    {
      item: item,
      maxColumnWidth: maxColumnWidth,
      isSelected: isSelected_2,
      allowWrap: allowWrap
    } = l,
    f = allowWrap === void 0 ? !0 : allowWrap,
    columns = ve().columns;
  if (Dt(item.id)) {
    let x;
    if (u[0] !== item.id) x = At(item.id), u[0] = item.id, u[1] = x;else x = u[1];
    let _ = x;
    let color_2 = isSelected_2 ? "suggestion" : void 0;
    let dimColor_2 = !isSelected_2;
    let R = item.id.startsWith("file-");
    let D = item.id.startsWith("mcp-resource-");
    let M;
    if (u[2] !== item.id) M = item.id.startsWith("mcp-template-value::"), u[2] = item.id, u[3] = M;else M = u[3];
    let b = M;
    let A = item.id.startsWith("mcp-template::");
    let L = item.description ? 3 : 0;
    let E;
    if (R || A || b) {
      let y;
      if (u[4] !== item.description) y = item.description ? Math.min(20, ie(item.description)) : 0, u[4] = item.description, u[5] = y;else y = u[5];
      let Et = y;
      let it = columns - 2 - 4 - L - Et;
      let z;
      if (u[6] !== b || u[7] !== item.displayText || u[8] !== it) z = b ? rA(item.displayText, it) : Va(item.displayText, it), u[6] = b, u[7] = item.displayText, u[8] = it, u[9] = z;else z = u[9];
      E = z;
    } else if (D) {
      let y;
      if (u[10] !== item.displayText) y = ot(item.displayText, 30), u[10] = item.displayText, u[11] = y;else y = u[11];
      E = y;
    } else E = item.displayText;
    let Pt = columns - 2 - ie(E) - L - 4;
    let children_2;
    if (item.description) {
      let j = Math.max(0, Pt);
      let y;
      if (u[12] !== item.description || u[13] !== j) y = ot(item.description.replace(st, " "), j), u[12] = item.description, u[13] = j, u[14] = y;else y = u[14];
      let lt = y;
      children_2 = `${_} ${E} \u2013 ${lt}`;
    } else children_2 = `${_} ${E}`;
    let y;
    if (u[15] !== dimColor_2 || u[16] !== children_2 || u[17] !== color_2) y = e(n, {
      color: color_2,
      dimColor: dimColor_2,
      wrap: "truncate",
      children: children_2
    }), u[15] = dimColor_2, u[16] = children_2, u[17] = color_2, u[18] = y;else y = u[18];
    return y;
  }
  let _t = item.description || item.tag || item.kind !== void 0 || item.sourceTag ? Math.floor(columns * 0.4) : columns - 4,
    P = Math.min(maxColumnWidth ?? ie(item.displayText) + 5, _t),
    color_3 = item.color || (isSelected_2 ? "suggestion" : void 0),
    dimColor_3 = !isSelected_2,
    x;
  if (u[19] !== item.id) x = item.id.startsWith("emoji:"), u[19] = item.id, u[20] = x;else x = u[20];
  let xe = x,
    children_3 = xe ? isSelected_2 ? `${Z.pointer} ` : "  " : "",
    vt = ie(children_3),
    bold_2 = xe && isSelected_2,
    C = item.displayText;
  if (ie(C) > P - 2) {
    let M;
    if (u[21] !== P || u[22] !== C) M = C.includes("/") || C.includes("\\") ? rA(C, P - 2) : ot(C, P - 2), u[21] = P, u[22] = C, u[23] = M;else M = u[23];
    C = M;
  }
  let M;
  if (u[24] !== P || u[25] !== C || u[26] !== vt) M = " ".repeat(Math.max(0, P - ie(C) - vt)), u[24] = P, u[25] = C, u[26] = vt, u[27] = M;else M = u[27];
  let children_4 = M,
    children_6 = item.tag ? `[${item.tag}] ` : "",
    gt = ie(children_6),
    color_4,
    children_5,
    children_7,
    y,
    z;
  if (u[28] !== item) {
    let {
      kindLaneText: kindLaneText,
      kindLabel: kindLabel,
      sourceText: sourceText
    } = Nt(item);
    children_5 = kindLaneText;
    children_7 = sourceText;
    color_4 = kindLabel === "skill" ? "skill" : kindLabel === "agent" ? "background" : void 0;
    y = ie(children_5);
    z = ie(children_7);
    u[28] = item, u[29] = color_4, u[30] = children_5, u[31] = children_7, u[32] = y, u[33] = z;
  } else color_4 = u[29], children_5 = u[30], children_7 = u[31], y = u[32], z = u[33];
  let yt = y + z,
    Tt = Math.max(0, columns - P - gt - yt - 4),
    color_5,
    ut,
    mt,
    xt,
    ct;
  if (u[34] !== f || u[35] !== bold_2 || u[36] !== columns || u[37] !== Tt || u[38] !== P || u[39] !== C || u[40] !== isSelected_2 || u[41] !== item.description || u[42] !== item.query || u[43] !== color_4 || u[44] !== children_5 || u[45] !== yt || u[46] !== children_4 || u[47] !== children_3 || u[48] !== dimColor_3 || u[49] !== children_7 || u[50] !== children_6 || u[51] !== gt || u[52] !== color_3) {
    ct = hn;
    Vn: {
      let Te = item.description ? item.description.replace(st, " ").trim() : "";
      let [text, be] = f ? fe(Te, Tt) : [ot(Te, Tt), ""];
      color_5 = isSelected_2 ? "suggestion" : void 0;
      let X;
      if (u[58] !== bold_2 || u[59] !== children_3 || u[60] !== dimColor_3 || u[61] !== color_3) X = children_3 ? e(n, {
        color: color_3,
        dimColor: dimColor_3,
        bold: bold_2,
        children: children_3
      }) : null, u[58] = bold_2, u[59] = children_3, u[60] = dimColor_3, u[61] = color_3, u[62] = X;else X = u[62];
      let J;
      if (u[63] !== bold_2 || u[64] !== C || u[65] !== isSelected_2 || u[66] !== item.query || u[67] !== color_3) J = e(K, {
        text: C,
        query: item.query,
        color: color_3,
        isSelected: isSelected_2,
        bold: bold_2
      }), u[63] = bold_2, u[64] = C, u[65] = isSelected_2, u[66] = item.query, u[67] = color_3, u[68] = J;else J = u[68];
      let Q;
      if (u[69] !== bold_2 || u[70] !== children_4 || u[71] !== dimColor_3 || u[72] !== color_3) Q = e(n, {
        color: color_3,
        dimColor: dimColor_3,
        bold: bold_2,
        children: children_4
      }), u[69] = bold_2, u[70] = children_4, u[71] = dimColor_3, u[72] = color_3, u[73] = Q;else Q = u[73];
      let ft;
      if (u[74] !== color_4 || u[75] !== children_5) ft = children_5 ? e(n, {
        color: color_4,
        dimColor: color_4 === void 0,
        children: children_5
      }) : null, u[74] = color_4, u[75] = children_5, u[76] = ft;else ft = u[76];
      let Ce;
      if (u[77] !== children_6) Ce = children_6 ? e(n, {
        dimColor: !0,
        children: children_6
      }) : null, u[77] = children_6, u[78] = Ce;else Ce = u[78];
      let Se;
      if (u[79] !== children_7) Se = children_7 ? e(n, {
        dimColor: !0,
        children: children_7
      }) : null, u[79] = children_7, u[80] = Se;else Se = u[80];
      ut = r(n, {
        wrap: "truncate",
        children: [X, J, Q, ft, Ce, Se, e(K, {
          text: text,
          query: item.query,
          color: color_5,
          isSelected: isSelected_2,
          bold: bold_2,
          contiguousOnly: !0
        })]
      });
      if (!be) {
        ct = ut;
        break Vn;
      }
      mt = P + gt + yt;
      xt = ot(be, Math.max(0, columns - mt - 4));
    }
    u[34] = f, u[35] = bold_2, u[36] = columns, u[37] = Tt, u[38] = P, u[39] = C, u[40] = isSelected_2, u[41] = item.description, u[42] = item.query, u[43] = color_4, u[44] = children_5, u[45] = yt, u[46] = children_4, u[47] = children_3, u[48] = dimColor_3, u[49] = children_7, u[50] = children_6, u[51] = gt, u[52] = color_3, u[53] = color_5, u[54] = ut, u[55] = mt, u[56] = xt, u[57] = ct;
  } else color_5 = u[53], ut = u[54], mt = u[55], xt = u[56], ct = u[57];
  if (ct !== hn) return ct;
  let text_2 = xt,
    X;
  if (u[81] !== mt) X = " ".repeat(mt), u[81] = mt, u[82] = X;else X = u[82];
  let J;
  if (u[83] !== bold_2 || u[84] !== color_5 || u[85] !== text_2 || u[86] !== isSelected_2 || u[87] !== item.query) J = e(K, {
    text: text_2,
    query: item.query,
    color: color_5,
    isSelected: isSelected_2,
    bold: bold_2,
    contiguousOnly: !0
  }), u[83] = bold_2, u[84] = color_5, u[85] = text_2, u[86] = isSelected_2, u[87] = item.query, u[88] = J;else J = u[88];
  let Q;
  if (u[89] !== X || u[90] !== J) Q = r(n, {
    wrap: "truncate",
    children: [X, J]
  }), u[89] = X, u[90] = J, u[91] = Q;else Q = u[91];
  let ft;
  if (u[92] !== ut || u[93] !== Q) ft = r(s, {
    flexDirection: "column",
    children: [ut, Q]
  }), u[92] = ut, u[93] = Q, u[94] = ft;else ft = u[94];
  return ft;
});
function Eue({
  suggestions: suggestions,
  selectedSuggestion: selectedSuggestion,
  maxColumnWidth: maxColumnWidth_2,
  emptyMessage: c,
  overlay: overlay,
  noPad: noPad,
  onSelect: onSelect,
  hoveredId: hoveredId,
  onHoverChange: onHoverChange
}) {
  let {
      rows: rows,
      columns: columns_2
    } = ve(),
    _ = Yg(),
    T = overlay ? We : Math.max(1, Math.min(Math.max(6, Math.floor(rows / 2)), rows - 3));
  if (suggestions.length === 0) {
    if (!c) return null;
    let length = noPad ? 0 : Math.max(0, T - 1);
    return r(s, {
      flexDirection: "column",
      justifyContent: overlay ? void 0 : "flex-end",
      children: [e(Cr, {
        children: c
      }), Array.from({
        length: length
      }, (j, lt) => e(n, {
        children: " "
      }, `pad-${lt}`))]
    });
  }
  let maxColumnWidth_3 = maxColumnWidth_2 ?? Math.max(...suggestions.map(item => ie(item.displayText))) + 5,
    allowWrap_2 = T >= 2,
    D = suggestions.map(item => allowWrap_2 ? ze(item, columns_2, maxColumnWidth_3) : 1),
    M = Math.max(0, Math.min(selectedSuggestion, suggestions.length - 1)),
    b = M,
    A = M + 1,
    L = D[M] ?? 1,
    E = 0,
    y = Math.floor(T / 2);
  while (b > 0 && L < T && E + (D[b - 1] ?? 1) <= y) b--, E += D[b] ?? 1;
  L += E;
  while (A < suggestions.length && L + (D[A] ?? 1) <= T) L += D[A] ?? 1, A++;
  while (b > 0 && L + (D[b - 1] ?? 1) <= T) b--, L += D[b] ?? 1;
  let Et = suggestions.slice(b, A),
    length_2 = noPad ? 0 : Math.max(0, T - L),
    z = suggestions[selectedSuggestion]?.id,
    Pt = hoveredId != null && suggestions.some(item => item.id === hoveredId) ? hoveredId : void 0;
  return r(s, {
    flexDirection: "column",
    justifyContent: overlay ? void 0 : "flex-end",
    onMouseLeave: onSelect ? () => onHoverChange?.(null) : void 0,
    children: [Et.map((item_2, index) => {
      let lt = b + index,
        children_8 = e(ge, {
          item: item_2,
          maxColumnWidth: maxColumnWidth_3,
          isSelected: item_2.id === (Pt ?? z),
          allowWrap: allowWrap_2
        }, item_2.id);
      if (!onSelect) return children_8;
      return e(s, {
        onMouseEnter: () => onHoverChange?.(item_2.id),
        onClick: _t => {
          if (_(_t)) return;
          onSelect(lt, item_2.id);
        },
        children: children_8
      }, item_2.id);
    }), Array.from({
      length: length_2
    }, (g, j) => e(n, {
      children: " "
    }, `pad-${j}`))]
  });
}
var ser = Gp(Eue);
function Nt(o) {
  let kindLabel_2 = o.kind === void 0 || o.kind === "action" ? "" : o.kind === "info" ? "config" : o.kind,
    kindLaneText_2 = o.kind === void 0 ? "" : kindLabel_2 + Ys(" ", 7 - ie(kindLabel_2)),
    sourceText_2 = o.sourceTag ? `[${o.sourceTag}] ` : "";
  return {
    kindLaneText: kindLaneText_2,
    kindLabel: kindLabel_2,
    sourceText: sourceText_2
  };
}
function ze(o, l, t) {
  if (Dt(o.id) || !o.description) return 1;
  let c = Math.min(t, Math.floor(l * 0.4)),
    i = o.tag ? ie(`[${o.tag}] `) : 0,
    {
      kindLaneText: kindLaneText_3,
      sourceText: sourceText_3
    } = Nt(o),
    d = Math.max(0, l - c - i - ie(kindLaneText_3) - ie(sourceText_3) - 4);
  if (d <= 0) return 1;
  let h = o.description.replace(st, " ").trim();
  return ie(h) > d ? 2 : 1;
}
function fe(o, l) {
  if (l <= 0 || ie(o) <= l) return [o, ""];
  let t = YN(o, l),
    c = o.slice(t.length);
  if (c.startsWith(" ")) return [t, c.trimStart()];
  let i = t.lastIndexOf(" ");
  if (i > 0) return [t.slice(0, i), o.slice(i + 1)];
  return [t, c];
}
var Ge = /[^\u0020-\u02ff]/;
function he(o, l) {
  if (l.length === 0 || !Ge.test(o)) return l;
  let t = new Set();
  for (let {
    index: index_2
  } of ya().segment(o)) t.add(index_2);
  let c = [];
  for (let [i, m] of l) {
    let f = i;
    while (f > 0 && !t.has(f)) f--;
    let d = m;
    while (d < o.length && !t.has(d)) d++;
    let h = c.at(-1);
    if (h && f <= h[1]) h[1] = Math.max(h[1], d);else c.push([f, d]);
  }
  return c;
}
function $yt({
  segments: segments
}) {
  return segments.map((item, index) => {
    let children_9 = e(n, {
      color: item.color,
      dimColor: item.dim,
      bold: item.bold,
      children: item.text
    }, index);
    return item.url === void 0 ? children_9 : e(bt, {
      url: item.url,
      children: children_9
    }, index);
  });
}
function Xe(m) {
  return m.notifications.current;
}
function Yre() {
  let t = w(12),
    o = W(Xe),
    l = W(LQ);
  if (!o || !xue(o, l)) {
    return null;
  }
  if ("jsx" in o) {
    let c;
    if (t[0] !== o.jsx || t[1] !== o.key) c = e(n, {
      wrap: "truncate",
      children: o.jsx
    }, o.key), t[0] = o.jsx, t[1] = o.key, t[2] = c;else c = t[2];
    return c;
  }
  if ("segments" in o) {
    let children_10;
    if (t[3] !== o.segments) children_10 = e($yt, {
      segments: o.segments
    }), t[3] = o.segments, t[4] = children_10;else children_10 = t[4];
    let i;
    if (t[5] !== o.key || t[6] !== children_10) i = e(n, {
      wrap: "truncate",
      children: children_10
    }, o.key), t[5] = o.key, t[6] = children_10, t[7] = i;else i = t[7];
    return i;
  }
  const dimColor_4 = !o.color;
  let i;
  if (t[8] !== o.color || t[9] !== o.text || t[10] !== dimColor_4) i = e(n, {
    color: o.color,
    dimColor: dimColor_4,
    wrap: "truncate",
    children: o.text
  }), t[8] = o.color, t[9] = o.text, t[10] = dimColor_4, t[11] = i;else i = t[11];
  return i;
}
function ier(o) {
  if (o >= 70) return "horizontal";
  return "compact";
}
function Mbe(o, l) {
  if (ie(o) <= l) return o;
  let t = "/",
    c = "\u2026",
    i = 1,
    m = 1,
    f = o.split(t),
    d = f[0] || "",
    h = f.at(-1) || "",
    u = ie(d),
    x = ie(h);
  if (f.length === 1) return ot(o, l);
  if (d === "" && i + m + x >= l) return `${t}${ot(h, Math.max(1, l - m))}`;
  if (d !== "" && i * 2 + m + x >= l) return `${c}${t}${ot(h, Math.max(1, l - i - m))}`;
  if (f.length === 2) {
    let k = l - i - m - x;
    return `${YN(d, k)}${c}${t}${h}`;
  }
  let _ = l - u - x - i - 2 * m;
  if (_ <= 0) {
    let k = Math.max(0, l - x - i - 2 * m);
    return `${YN(d, k)}${t}${c}${t}${h}`;
  }
  let T = [];
  for (let k = f.length - 2; k > 0; k--) {
    let R = f[k];
    if (R && ie(R) + m <= _) T.unshift(R), _ -= ie(R) + m;else break;
  }
  if (T.length === 0) return `${d}${t}${c}${t}${h}`;
  return `${d}${t}${c}${t}${T.join(t)}${t}${h}`;
}
function HJe() {
  let version = a.DEMO_VERSION ?? `${{
      ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
      PACKAGE_URL: "@anthropic-ai/claude-code",
      README_URL: "https://code.claude.com/docs/en/overview",
      VERSION: "2.1.283",
      FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
      BUILD_TIME: "2026-09-25T00:44:42Z",
      GIT_SHA: "4631ccd7cfe41e69bc72d3b5b9dc7282536e4985",
      HOOKS_WORKER_URL: "B:/~BUN/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js",
      DD_SOURCEMAP_GROUP: "win32"
    }.VERSION}${fN()}`,
    l = P2r(),
    t = a.DEMO_VERSION ? "/code/claude" : Yn() && qs("tengu_violin_wood", !1) ? xa(we()) : xo(oe()),
    cwd = a.CLAUDE_CODE_HIDE_CWD ? "" : l ? `${t} in ${l.replace(/^https?:\/\//, "")}` : t,
    i = Ie(),
    billingType = i !== "firstParty" ? Fx[i] : pt() ? hKn() : "API Usage Billing",
    f = Je().agent;
  return {
    version: version,
    cwd: cwd,
    billingType: billingType,
    agentName: f
  };
}
function aer(o, truncatedBilling, t) {
  if (ie(o) + 3 + ie(truncatedBilling) > t) return {
    shouldSplit: !0,
    truncatedModel: fo(o, t),
    truncatedBilling: fo(truncatedBilling, t)
  };
  return {
    shouldSplit: !1,
    truncatedModel: fo(o, Math.max(t - ie(truncatedBilling) - 3, 10)),
    truncatedBilling: truncatedBilling
  };
}
export { Eue, ser, ier, Mbe, HJe, aer, $yt, Yre };