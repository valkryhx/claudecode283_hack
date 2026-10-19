// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { Te } from "B:/~BUN/root/chunk-smy4yvhm.js";
import { O } from "B:/~BUN/root/chunk-nggrknsv.js";
import { w } from "B:/~BUN/root/chunk-rysqv8v1.js";
import { mt } from "B:/~BUN/root/chunk-pjgzz98k.js";
import { s, n, sa } from "B:/~BUN/root/chunk-damrp3r8.js";
import { V } from "B:/~BUN/root/chunk-tgzmva3g.js";
import { te } from "B:/~BUN/root/chunk-9tx73f8x.js";
import { Ii } from "B:/~BUN/root/chunk-3cgpbmp2.js";
import { ZDe, hzt, Yet } from "B:/~BUN/root/chunk-r4vy2wed.js";
import { e, r } from "B:/~BUN/root/chunk-x2hkxw5q.js";
import { y, B } from "B:/~BUN/root/chunk-5hr2ysa5.js";
import { S } from "B:/~BUN/root/chunk-ef0msk7r.js";
B();
function ee(ne) {
  return ne.remoteBootstrap;
}
function oe() {
  return Date.now();
}
function se(ae) {
  return ae.status === "failed";
}
function C7n() {
  let i = w(36),
    d = V(ee),
    {
      columns: columns
    } = Te(),
    [now, T] = y(oe),
    g;
  if (i[0] === S) g = () => T(Date.now()), i[0] = g;else g = i[0];
  if (sa(g, 1000), d === null) {
    return null;
  }
  let queuedCount = d.queuedCount,
    o,
    a,
    f,
    bold,
    v,
    flexDirection,
    marginTop;
  if (i[1] !== d.sessionMode || i[2] !== d.steps) f = d.steps.some(se), a = s, flexDirection = "column", marginTop = 1, o = n, bold = !0, v = hzt(d.sessionMode, f), i[1] = d.sessionMode, i[2] = d.steps, i[3] = o, i[4] = a, i[5] = f, i[6] = bold, i[7] = v, i[8] = flexDirection, i[9] = marginTop;else o = i[3], a = i[4], f = i[5], bold = i[6], v = i[7], flexDirection = i[8], marginTop = i[9];
  const l = f ? "" : "\u2026";
  let m;
  if (i[10] !== o || i[11] !== bold || i[12] !== v || i[13] !== l) m = r(o, {
    bold: bold,
    children: [v, l]
  }), i[10] = o, i[11] = bold, i[12] = v, i[13] = l, i[14] = m;else m = i[14];
  let x;
  if (i[15] !== columns || i[16] !== now || i[17] !== d.sessionMode || i[18] !== d.steps) {
    let R;
    if (i[20] !== columns || i[21] !== now || i[22] !== d.sessionMode) R = step => step.status === "skipped" ? null : e(E, {
      step: step,
      sessionMode: d.sessionMode,
      now: now,
      columns: columns
    }, step.id), i[20] = columns, i[21] = now, i[22] = d.sessionMode, i[23] = R;else R = i[23];
    x = d.steps.map(R);
    i[15] = columns, i[16] = now, i[17] = d.sessionMode, i[18] = d.steps, i[19] = x;
  } else x = i[19];
  let children;
  if (i[24] !== f || i[25] !== queuedCount) children = f ? "Send a message to try again." : queuedCount > 0 ? `${queuedCount} ${O(queuedCount, "message")} queued \xB7 sends once the session is ready` : "You can start typing \u2014 messages send once the session is ready", i[24] = f, i[25] = queuedCount, i[26] = children;else children = i[26];
  let C;
  if (i[27] !== children) C = e(s, {
    marginTop: 1,
    children: e(n, {
      dimColor: !0,
      children: children
    })
  }), i[27] = children, i[28] = C;else C = i[28];
  let J;
  if (i[29] !== a || i[30] !== flexDirection || i[31] !== marginTop || i[32] !== m || i[33] !== x || i[34] !== C) J = r(a, {
    flexDirection: flexDirection,
    marginTop: marginTop,
    children: [m, x, C]
  }), i[29] = a, i[30] = flexDirection, i[31] = marginTop, i[32] = m, i[33] = x, i[34] = C, i[35] = J;else J = i[35];
  return J;
}
function E(d) {
  let g = w(23),
    {
      step: step_2,
      sessionMode: sessionMode,
      now: now_2,
      columns: columns_2
    } = d,
    M;
  if (g[0] !== sessionMode || g[1] !== step_2) M = ZDe(step_2, sessionMode), g[0] = sessionMode, g[1] = step_2, g[2] = M;else M = g[2];
  let label = M;
  switch (step_2.status) {
    case "completed":
      {
        let annotation;
        if (g[3] !== now_2 || g[4] !== step_2) annotation = Yet(step_2, now_2), g[3] = now_2, g[4] = step_2, g[5] = annotation;else annotation = g[5];
        let f;
        if (g[6] !== label || g[7] !== annotation) f = e(Tre, {
          status: "completed",
          label: label,
          annotation: annotation
        }), g[6] = label, g[7] = annotation, g[8] = f;else f = g[8];
        return f;
      }
    case "running":
      {
        let annotation_2;
        if (g[9] !== now_2 || g[10] !== step_2) annotation_2 = Yet(step_2, now_2), g[9] = now_2, g[10] = step_2, g[11] = annotation_2;else annotation_2 = g[11];
        let f;
        if (g[12] !== columns_2 || g[13] !== label || g[14] !== step_2.detail || g[15] !== annotation_2) f = e(Tre, {
          status: "running",
          label: label,
          annotation: annotation_2,
          detail: step_2.detail,
          columns: columns_2
        }), g[12] = columns_2, g[13] = label, g[14] = step_2.detail, g[15] = annotation_2, g[16] = f;else f = g[16];
        return f;
      }
    case "failed":
      {
        let a;
        if (g[17] !== columns_2 || g[18] !== label || g[19] !== step_2.error) a = e(Tre, {
          status: "failed",
          label: label,
          detail: step_2.error,
          columns: columns_2
        }), g[17] = columns_2, g[18] = label, g[19] = step_2.error, g[20] = a;else a = g[20];
        return a;
      }
    case "pending":
      {
        let a;
        if (g[21] !== label) a = e(Tre, {
          status: "pending",
          label: label
        }), g[21] = label, g[22] = a;else a = g[22];
        return a;
      }
    case "skipped":
      {
        return null;
      }
  }
}
function Tre(d) {
  let c = w(31),
    {
      status: status,
      label: u,
      annotation: annotation_3,
      detail: detail,
      columns: columns_3,
      detailOverflow: detailOverflow
    } = d,
    children_2 = annotation_3 === void 0 ? "" : annotation_3,
    a = columns_3 === void 0 ? 80 : columns_3,
    f = detailOverflow === void 0 ? "truncate" : detailOverflow,
    v;
  if (c[0] !== a || c[1] !== detail || c[2] !== f) v = detail === void 0 || f === "wrap" ? detail : mt(detail, Math.max(20, a - 8)), c[0] = a, c[1] = detail, c[2] = f, c[3] = v;else v = c[3];
  let children_3 = v;
  switch (status) {
    case "completed":
      {
        let p;
        if (c[4] === S) p = e(n, {
          color: "success",
          children: `  ${te.tick} `
        }), c[4] = p;else p = c[4];
        let l;
        if (c[5] !== children_2) l = e(n, {
          dimColor: !0,
          children: children_2
        }), c[5] = children_2, c[6] = l;else l = c[6];
        let m;
        if (c[7] !== u || c[8] !== l) m = r(s, {
          children: [p, r(n, {
            children: [u, l]
          })]
        }), c[7] = u, c[8] = l, c[9] = m;else m = c[9];
        return m;
      }
    case "running":
      {
        let p;
        if (c[10] === S) p = e(s, {
          width: 4,
          paddingLeft: 2,
          children: e(Ii, {})
        }), c[10] = p;else p = c[10];
        let l;
        if (c[11] !== children_2) l = e(n, {
          dimColor: !0,
          children: children_2
        }), c[11] = children_2, c[12] = l;else l = c[12];
        let m;
        if (c[13] !== u || c[14] !== l) m = r(s, {
          children: [p, r(n, {
            children: [u, "\u2026", l]
          })]
        }), c[13] = u, c[14] = l, c[15] = m;else m = c[15];
        let x;
        if (c[16] !== children_3) x = children_3 !== void 0 && children_3 !== "" && e(s, {
          paddingLeft: 6,
          children: e(n, {
            dimColor: !0,
            children: children_3
          })
        }), c[16] = children_3, c[17] = x;else x = c[17];
        let R;
        if (c[18] !== m || c[19] !== x) R = r(s, {
          flexDirection: "column",
          children: [m, x]
        }), c[18] = m, c[19] = x, c[20] = R;else R = c[20];
        return R;
      }
    case "failed":
      {
        let p;
        if (c[21] === S) p = e(n, {
          color: "error",
          children: `  ${te.cross} `
        }), c[21] = p;else p = c[21];
        let l;
        if (c[22] !== u) l = r(s, {
          children: [p, e(n, {
            children: u
          })]
        }), c[22] = u, c[23] = l;else l = c[23];
        let m;
        if (c[24] !== children_3) m = children_3 !== void 0 && children_3 !== "" && e(s, {
          paddingLeft: 6,
          children: e(n, {
            color: "error",
            children: children_3
          })
        }), c[24] = children_3, c[25] = m;else m = c[25];
        let x;
        if (c[26] !== l || c[27] !== m) x = r(s, {
          flexDirection: "column",
          children: [l, m]
        }), c[26] = l, c[27] = m, c[28] = x;else x = c[28];
        return x;
      }
    case "pending":
      {
        const children_4 = `  ${te.circle} ${u}`;
        let l;
        if (c[29] !== children_4) l = e(s, {
          children: e(n, {
            dimColor: !0,
            children: children_4
          })
        }), c[29] = children_4, c[30] = l;else l = c[30];
        return l;
      }
  }
}
export { C7n, Tre };