// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { P } from "B:/~BUN/root/chunk-n8cnxns2.js";
import { S } from "B:/~BUN/root/chunk-bn4bjw9d.js";
import { ct } from "B:/~BUN/root/chunk-bkfncj77.js";
import { uH, qS } from "B:/~BUN/root/chunk-xqymp2nr.js";
import { RO } from "B:/~BUN/root/chunk-trd3c21n.js";
import { oa, ot, s, n, sl } from "B:/~BUN/root/chunk-qey16aan.js";
import { eI } from "B:/~BUN/root/chunk-7hqn9qvm.js";
import { Zo } from "B:/~BUN/root/chunk-t4pbv0np.js";
import { Re } from "B:/~BUN/root/chunk-qr2xxkqa.js";
import { G } from "B:/~BUN/root/chunk-tmdrwqnv.js";
import { re } from "B:/~BUN/root/chunk-xkw95p5n.js";
import { Oa } from "B:/~BUN/root/chunk-rzvkfy4m.js";
import { $4e, K$e, pzt, V0o, Pkt } from "B:/~BUN/root/chunk-3afzybdd.js";
import { ne, e, r } from "B:/~BUN/root/chunk-t16eynda.js";
import { y, j } from "B:/~BUN/root/chunk-czy5r8bc.js";
import { w } from "B:/~BUN/root/chunk-4qfwb3rf.js";
function V() {
  if (!Zo()) return;
  let c = RO();
  if (!c) return;
  if (qS.includes(c)) return uH[c];
  return;
}
function D(c) {
  let f = S(6),
    {
      isLoading: o,
      isScreenReader: isScreenReader,
      themeColor: themeColor
    } = c,
    color = themeColor ?? void 0,
    children;
  if (f[0] !== isScreenReader) children = isScreenReader ? e(ne, {
    children: "$\xA0"
  }) : r(ne, {
    children: [re.pointer, "\xA0"]
  }), f[0] = isScreenReader, f[1] = children;else children = f[1];
  let l;
  if (f[2] !== color || f[3] !== o || f[4] !== children) l = e(n, {
    color: color,
    dimColor: o,
    children: children
  }), f[2] = color, f[3] = o, f[4] = children, f[5] = l;else l = f[5];
  return l;
}
function ykt(c) {
  let f = S(10),
    {
      mode: mode,
      isLoading: t,
      viewingAgentName: viewingAgentName,
      viewingAgentColor: viewingAgentColor
    } = c,
    isScreenReader_2 = ot();
  eI();
  let a;
  if (f[0] === w) a = V(), f[0] = a;else a = f[0];
  let l = a,
    themeColor_2 = viewingAgentColor ? uH[viewingAgentColor] : void 0;
  const h = !isScreenReader_2 || !viewingAgentName && mode === "bash";
  let children_2;
  if (f[1] !== t || f[2] !== isScreenReader_2 || f[3] !== mode || f[4] !== themeColor_2 || f[5] !== viewingAgentName) children_2 = viewingAgentName ? e(D, {
    isLoading: t,
    isScreenReader: isScreenReader_2,
    themeColor: themeColor_2
  }) : mode === "bash" ? e(n, {
    color: "bashBorder",
    dimColor: t,
    children: "!\xA0"
  }) : e(D, {
    isLoading: t,
    isScreenReader: isScreenReader_2,
    themeColor: Zo() ? l : void 0
  }), f[1] = t, f[2] = isScreenReader_2, f[3] = mode, f[4] = themeColor_2, f[5] = viewingAgentName, f[6] = children_2;else children_2 = f[6];
  let L;
  if (f[7] !== h || f[8] !== children_2) L = e(s, {
    "aria-hidden": h,
    alignItems: "flex-start",
    alignSelf: "flex-start",
    flexWrap: "nowrap",
    justifyContent: "flex-start",
    children: children_2
  }), f[7] = h, f[8] = children_2, f[9] = L;else L = f[9];
  return L;
}
var _kt = 1e4;
j();
function ve(N) {
  return N.remoteBootstrap;
}
function Se() {
  return Date.now();
}
function Oe(A) {
  return A.status === "failed";
}
function yBr() {
  let p = S(22),
    c = G(ve),
    {
      columns: columns
    } = Re(),
    [now, g] = y(Se),
    i;
  if (p[0] === w) i = () => g(Date.now()), p[0] = i;else i = p[0];
  if (sl(i, 1000), c === null) {
    return null;
  }
  let queuedCount = c.queuedCount,
    a,
    l,
    flexDirection,
    marginTop,
    h,
    d;
  if (p[1] !== columns || p[2] !== now || p[3] !== c) {
    l = c.steps.some(Oe);
    let L = $4e(c);
    a = s;
    flexDirection = "column";
    marginTop = 1;
    h = r(n, {
      bold: !0,
      children: [pzt(L, l), l || L === "restored" ? "" : "\u2026"]
    });
    d = c.steps.map(b => b.status === "skipped" ? null : e(Q, {
      step: b,
      label: K$e(b, L),
      hint: b.id === "setup_script" ? V0o(c, b, L) : "",
      now: now,
      columns: columns
    }, b.id));
    p[1] = columns, p[2] = now, p[3] = c, p[4] = a, p[5] = l, p[6] = flexDirection, p[7] = marginTop, p[8] = h, p[9] = d;
  } else a = p[4], l = p[5], flexDirection = p[6], marginTop = p[7], h = p[8], d = p[9];
  let children_3;
  if (p[10] !== l || p[11] !== queuedCount) children_3 = l ? "Send a message to try again." : queuedCount > 0 ? `${queuedCount} ${P(queuedCount, "message")} queued \xB7 sends once the session is ready` : "You can start typing \u2014 messages send once the session is ready", p[10] = l, p[11] = queuedCount, p[12] = children_3;else children_3 = p[12];
  let u;
  if (p[13] !== children_3) u = e(s, {
    marginTop: 1,
    children: e(n, {
      dimColor: !0,
      children: children_3
    })
  }), p[13] = children_3, p[14] = u;else u = p[14];
  let x;
  if (p[15] !== a || p[16] !== flexDirection || p[17] !== marginTop || p[18] !== h || p[19] !== d || p[20] !== u) x = r(a, {
    flexDirection: flexDirection,
    marginTop: marginTop,
    children: [h, d, u]
  }), p[15] = a, p[16] = flexDirection, p[17] = marginTop, p[18] = h, p[19] = d, p[20] = u, p[21] = x;else x = p[21];
  return x;
}
function Q(c) {
  let l = S(18),
    {
      step: step,
      label: label,
      hint: g,
      now: now_2,
      columns: columns_2
    } = c,
    output = oa() ? step.output : step.output?.slice(-1);
  switch (step.status) {
    case "completed":
      {
        const annotation = Pkt(step, now_2) + g;
        let m;
        if (l[0] !== label || l[1] !== annotation) m = e(jme, {
          status: "completed",
          label: label,
          annotation: annotation
        }), l[0] = label, l[1] = annotation, l[2] = m;else m = l[2];
        return m;
      }
    case "running":
      {
        const annotation_2 = Pkt(step, now_2) + g;
        const detail = output === void 0 ? step.detail : void 0;
        let T;
        if (l[3] !== columns_2 || l[4] !== label || l[5] !== output || l[6] !== annotation_2 || l[7] !== detail) T = e(jme, {
          status: "running",
          label: label,
          annotation: annotation_2,
          detail: detail,
          output: output,
          columns: columns_2
        }), l[3] = columns_2, l[4] = label, l[5] = output, l[6] = annotation_2, l[7] = detail, l[8] = T;else T = l[8];
        return T;
      }
    case "failed":
      {
        const annotation_3 = step.exitCode === void 0 ? "" : ` \xB7 exit code ${step.exitCode}`;
        const detail_2 = step.error === label || (step.exitCode ?? 0) > 0 && (step.output?.length ?? 0) > 0 ? void 0 : step.error;
        let T;
        if (l[9] !== columns_2 || l[10] !== label || l[11] !== step.output || l[12] !== annotation_3 || l[13] !== detail_2) T = e(jme, {
          status: "failed",
          label: label,
          annotation: annotation_3,
          detail: detail_2,
          output: step.output,
          columns: columns_2
        }), l[9] = columns_2, l[10] = label, l[11] = step.output, l[12] = annotation_3, l[13] = detail_2, l[14] = T;else T = l[14];
        return T;
      }
    case "pending":
      {
        let a;
        if (l[15] !== g || l[16] !== label) a = e(jme, {
          status: "pending",
          label: label,
          annotation: g
        }), l[15] = g, l[16] = label, l[17] = a;else a = l[17];
        return a;
      }
    case "skipped":
      {
        return null;
      }
  }
}
function jme(c) {
  let d = S(42),
    {
      status: status,
      label: label_2,
      annotation: annotation_4,
      detail: detail_3,
      output: output_2,
      columns: columns_3,
      detailOverflow: detailOverflow
    } = c,
    children_4 = annotation_4 === void 0 ? "" : annotation_4,
    m = columns_3 === void 0 ? 80 : columns_3,
    T = detailOverflow === void 0 ? "truncate" : detailOverflow,
    width = Math.max(20, m - 8),
    L;
  if (d[0] !== detail_3 || d[1] !== T || d[2] !== width) L = detail_3 === void 0 || T === "wrap" ? detail_3 : ct(detail_3, width), d[0] = detail_3, d[1] = T, d[2] = width, d[3] = L;else L = d[3];
  let children_5 = L;
  switch (status) {
    case "completed":
      {
        let C;
        if (d[4] === w) C = e(n, {
          color: "success",
          children: `  ${re.tick} `
        }), d[4] = C;else C = d[4];
        let u;
        if (d[5] !== children_4) u = e(n, {
          dimColor: !0,
          children: children_4
        }), d[5] = children_4, d[6] = u;else u = d[6];
        let x;
        if (d[7] !== label_2 || d[8] !== u) x = r(s, {
          children: [C, r(n, {
            children: [label_2, u]
          })]
        }), d[7] = label_2, d[8] = u, d[9] = x;else x = d[9];
        return x;
      }
    case "running":
      {
        let C;
        if (d[10] === w) C = e(s, {
          width: 4,
          paddingLeft: 2,
          children: e(Oa, {})
        }), d[10] = C;else C = d[10];
        let u;
        if (d[11] !== children_4) u = e(n, {
          dimColor: !0,
          children: children_4
        }), d[11] = children_4, d[12] = u;else u = d[12];
        let x;
        if (d[13] !== label_2 || d[14] !== u) x = r(s, {
          children: [C, r(n, {
            children: [label_2, "\u2026", u]
          })]
        }), d[13] = label_2, d[14] = u, d[15] = x;else x = d[15];
        let N;
        if (d[16] !== children_5) N = children_5 !== void 0 && children_5 !== "" && e(s, {
          paddingLeft: 6,
          children: e(n, {
            dimColor: !0,
            children: children_5
          })
        }), d[16] = children_5, d[17] = N;else N = d[17];
        let A;
        if (d[18] !== width || d[19] !== output_2) A = e(q, {
          output: output_2,
          width: width
        }), d[18] = width, d[19] = output_2, d[20] = A;else A = d[20];
        let E;
        if (d[21] !== x || d[22] !== N || d[23] !== A) E = r(s, {
          flexDirection: "column",
          children: [x, N, A]
        }), d[21] = x, d[22] = N, d[23] = A, d[24] = E;else E = d[24];
        return E;
      }
    case "failed":
      {
        let C;
        if (d[25] === w) C = e(n, {
          color: "error",
          children: `  ${re.cross} `
        }), d[25] = C;else C = d[25];
        let u;
        if (d[26] !== children_4) u = e(n, {
          dimColor: !0,
          children: children_4
        }), d[26] = children_4, d[27] = u;else u = d[27];
        let x;
        if (d[28] !== label_2 || d[29] !== u) x = r(s, {
          children: [C, r(n, {
            children: [label_2, u]
          })]
        }), d[28] = label_2, d[29] = u, d[30] = x;else x = d[30];
        let N;
        if (d[31] !== children_5) N = children_5 !== void 0 && children_5 !== "" && e(s, {
          paddingLeft: 6,
          children: e(n, {
            color: "error",
            children: children_5
          })
        }), d[31] = children_5, d[32] = N;else N = d[32];
        let A;
        if (d[33] !== width || d[34] !== output_2) A = e(q, {
          output: output_2,
          width: width
        }), d[33] = width, d[34] = output_2, d[35] = A;else A = d[35];
        let E;
        if (d[36] !== x || d[37] !== N || d[38] !== A) E = r(s, {
          flexDirection: "column",
          children: [x, N, A]
        }), d[36] = x, d[37] = N, d[38] = A, d[39] = E;else E = d[39];
        return E;
      }
    case "pending":
      {
        const children_6 = `  ${re.circle} ${label_2}${children_4}`;
        let u;
        if (d[40] !== children_6) u = e(s, {
          children: e(n, {
            dimColor: !0,
            children: children_6
          })
        }), d[40] = children_6, d[41] = u;else u = d[41];
        return u;
      }
  }
}
function q(c) {
  let g = S(7),
    {
      output: output_3,
      width: width_2
    } = c;
  if (output_3 === void 0 || output_3.length === 0) {
    return null;
  }
  let children_7;
  if (g[0] !== output_3 || g[1] !== width_2) {
    let i;
    if (g[3] !== width_2) i = (f, a) => e(n, {
      dimColor: !0,
      children: ct(f, width_2)
    }, a), g[3] = width_2, g[4] = i;else i = g[4];
    children_7 = output_3.map(i);
    g[0] = output_3, g[1] = width_2, g[2] = children_7;
  } else children_7 = g[2];
  let i;
  if (g[5] !== children_7) i = e(s, {
    flexDirection: "column",
    paddingLeft: 6,
    children: children_7
  }), g[5] = children_7, g[6] = i;else i = g[6];
  return i;
}
export { ykt, _kt, yBr, jme };