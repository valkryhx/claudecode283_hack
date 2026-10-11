// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { ve } from "B:/~BUN/root/chunk-cxqcvpm0.js";
import { I } from "B:/~BUN/root/chunk-y04k89s2.js";
import { w } from "B:/~BUN/root/chunk-x9hkq9y1.js";
import { ot } from "B:/~BUN/root/chunk-bpp59nyd.js";
import { s, n, Vs } from "B:/~BUN/root/chunk-1gn8pz4b.js";
import { W } from "B:/~BUN/root/chunk-h23911wn.js";
import { Rs } from "B:/~BUN/root/chunk-8sb89kt9.js";
import { ibe, Jgt, c1e } from "B:/~BUN/root/chunk-3w1jmaht.js";
import { e, r } from "B:/~BUN/root/chunk-qkvevvte.js";
import { Z } from "B:/~BUN/root/chunk-08bth2fj.js";
import { g, N } from "B:/~BUN/root/chunk-rnj6pcz5.js";
import { S } from "B:/~BUN/root/chunk-yv67t8hr.js";
N();
function V(u) {
  return u.remoteBootstrap;
}
function X() {
  return Date.now();
}
function G_n() {
  let i = w(22),
    c = W(V),
    {
      columns: columns
    } = ve(),
    [now, T] = g(X),
    x;
  if (i[0] === S) x = () => T(Date.now()), i[0] = x;else x = i[0];
  if (Vs(x, 1000), c === null) {
    return null;
  }
  let queuedCount = c.queuedCount,
    o;
  if (i[1] !== c.sessionMode) o = Jgt(c.sessionMode), i[1] = c.sessionMode, i[2] = o;else o = i[2];
  let a;
  if (i[3] !== o) a = r(n, {
    bold: !0,
    children: [o, "\u2026"]
  }), i[3] = o, i[4] = a;else a = i[4];
  let f;
  if (i[5] !== columns || i[6] !== now || i[7] !== c.sessionMode || i[8] !== c.steps) {
    let l;
    if (i[10] !== columns || i[11] !== now || i[12] !== c.sessionMode) l = step => step.status === "skipped" ? null : e(Y, {
      step: step,
      sessionMode: c.sessionMode,
      now: now,
      columns: columns
    }, step.id), i[10] = columns, i[11] = now, i[12] = c.sessionMode, i[13] = l;else l = i[13];
    f = c.steps.map(l);
    i[5] = columns, i[6] = now, i[7] = c.sessionMode, i[8] = c.steps, i[9] = f;
  } else f = i[9];
  let children;
  if (i[14] !== queuedCount) children = queuedCount > 0 ? `${queuedCount} ${I(queuedCount, "message")} queued \xB7 sends once the session is ready` : "You can start typing \u2014 messages send once the session is ready", i[14] = queuedCount, i[15] = children;else children = i[15];
  let m;
  if (i[16] !== children) m = e(s, {
    marginTop: 1,
    children: e(n, {
      dimColor: !0,
      children: children
    })
  }), i[16] = children, i[17] = m;else m = i[17];
  let p;
  if (i[18] !== a || i[19] !== f || i[20] !== m) p = r(s, {
    flexDirection: "column",
    marginTop: 1,
    children: [a, f, m]
  }), i[18] = a, i[19] = f, i[20] = m, i[21] = p;else p = i[21];
  return p;
}
function Y(c) {
  let x = w(23),
    {
      step: step_2,
      sessionMode: sessionMode,
      now: now_2,
      columns: columns_2
    } = c,
    y;
  if (x[0] !== sessionMode || x[1] !== step_2) y = ibe(step_2, sessionMode), x[0] = sessionMode, x[1] = step_2, x[2] = y;else y = x[2];
  let label = y;
  switch (step_2.status) {
    case "completed":
      {
        let annotation;
        if (x[3] !== now_2 || x[4] !== step_2) annotation = c1e(step_2, now_2), x[3] = now_2, x[4] = step_2, x[5] = annotation;else annotation = x[5];
        let f;
        if (x[6] !== label || x[7] !== annotation) f = e(a5, {
          status: "completed",
          label: label,
          annotation: annotation
        }), x[6] = label, x[7] = annotation, x[8] = f;else f = x[8];
        return f;
      }
    case "running":
      {
        let annotation_2;
        if (x[9] !== now_2 || x[10] !== step_2) annotation_2 = c1e(step_2, now_2), x[9] = now_2, x[10] = step_2, x[11] = annotation_2;else annotation_2 = x[11];
        let f;
        if (x[12] !== columns_2 || x[13] !== label || x[14] !== step_2.detail || x[15] !== annotation_2) f = e(a5, {
          status: "running",
          label: label,
          annotation: annotation_2,
          detail: step_2.detail,
          columns: columns_2
        }), x[12] = columns_2, x[13] = label, x[14] = step_2.detail, x[15] = annotation_2, x[16] = f;else f = x[16];
        return f;
      }
    case "failed":
      {
        let a;
        if (x[17] !== columns_2 || x[18] !== label || x[19] !== step_2.error) a = e(a5, {
          status: "failed",
          label: label,
          detail: step_2.error,
          columns: columns_2
        }), x[17] = columns_2, x[18] = label, x[19] = step_2.error, x[20] = a;else a = x[20];
        return a;
      }
    case "pending":
      {
        let a;
        if (x[21] !== label) a = e(a5, {
          status: "pending",
          label: label
        }), x[21] = label, x[22] = a;else a = x[22];
        return a;
      }
    case "skipped":
      {
        return null;
      }
  }
}
function a5(c) {
  let l = w(31),
    {
      status: status,
      label: d,
      annotation: annotation_3,
      detail: detail,
      columns: columns_3,
      detailOverflow: detailOverflow
    } = c,
    children_2 = annotation_3 === void 0 ? "" : annotation_3,
    a = columns_3 === void 0 ? 80 : columns_3,
    f = detailOverflow === void 0 ? "truncate" : detailOverflow,
    D;
  if (l[0] !== a || l[1] !== detail || l[2] !== f) D = detail === void 0 || f === "wrap" ? detail : ot(detail, Math.max(20, a - 8)), l[0] = a, l[1] = detail, l[2] = f, l[3] = D;else D = l[3];
  let children_3 = D;
  switch (status) {
    case "completed":
      {
        let p;
        if (l[4] === S) p = e(n, {
          color: "success",
          children: `  ${Z.tick} `
        }), l[4] = p;else p = l[4];
        let u;
        if (l[5] !== children_2) u = e(n, {
          dimColor: !0,
          children: children_2
        }), l[5] = children_2, l[6] = u;else u = l[6];
        let b;
        if (l[7] !== d || l[8] !== u) b = r(s, {
          children: [p, r(n, {
            children: [d, u]
          })]
        }), l[7] = d, l[8] = u, l[9] = b;else b = l[9];
        return b;
      }
    case "running":
      {
        let p;
        if (l[10] === S) p = e(s, {
          width: 4,
          paddingLeft: 2,
          children: e(Rs, {})
        }), l[10] = p;else p = l[10];
        let u;
        if (l[11] !== children_2) u = e(n, {
          dimColor: !0,
          children: children_2
        }), l[11] = children_2, l[12] = u;else u = l[12];
        let b;
        if (l[13] !== d || l[14] !== u) b = r(s, {
          children: [p, r(n, {
            children: [d, "\u2026", u]
          })]
        }), l[13] = d, l[14] = u, l[15] = b;else b = l[15];
        let M;
        if (l[16] !== children_3) M = children_3 !== void 0 && children_3 !== "" && e(s, {
          paddingLeft: 6,
          children: e(n, {
            dimColor: !0,
            children: children_3
          })
        }), l[16] = children_3, l[17] = M;else M = l[17];
        let E;
        if (l[18] !== b || l[19] !== M) E = r(s, {
          flexDirection: "column",
          children: [b, M]
        }), l[18] = b, l[19] = M, l[20] = E;else E = l[20];
        return E;
      }
    case "failed":
      {
        let p;
        if (l[21] === S) p = e(n, {
          color: "error",
          children: `  ${Z.cross} `
        }), l[21] = p;else p = l[21];
        let u;
        if (l[22] !== d) u = r(s, {
          children: [p, e(n, {
            children: d
          })]
        }), l[22] = d, l[23] = u;else u = l[23];
        let b;
        if (l[24] !== children_3) b = children_3 !== void 0 && children_3 !== "" && e(s, {
          paddingLeft: 6,
          children: e(n, {
            color: "error",
            children: children_3
          })
        }), l[24] = children_3, l[25] = b;else b = l[25];
        let M;
        if (l[26] !== u || l[27] !== b) M = r(s, {
          flexDirection: "column",
          children: [u, b]
        }), l[26] = u, l[27] = b, l[28] = M;else M = l[28];
        return M;
      }
    case "pending":
      {
        const children_4 = `  ${Z.circle} ${d}`;
        let u;
        if (l[29] !== children_4) u = e(s, {
          children: e(n, {
            dimColor: !0,
            children: children_4
          })
        }), l[29] = children_4, l[30] = u;else u = l[30];
        return u;
      }
  }
}
export { G_n, a5 };