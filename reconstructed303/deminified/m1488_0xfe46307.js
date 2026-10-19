// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { w } from "B:/~BUN/root/chunk-rysqv8v1.js";
import { us } from "B:/~BUN/root/chunk-b900np4s.js";
import { l } from "B:/~BUN/root/chunk-c09hf5e4.js";
import { s, n } from "B:/~BUN/root/chunk-damrp3r8.js";
import { fY } from "B:/~BUN/root/chunk-f66jfn8z.js";
import { Og } from "B:/~BUN/root/chunk-3md9ngvz.js";
import { e, r } from "B:/~BUN/root/chunk-x2hkxw5q.js";
import { qt, Ee, P, Mo, y, Dt, B } from "B:/~BUN/root/chunk-5hr2ysa5.js";
import { Ume } from "B:/~BUN/root/chunk-mbz8rhex.js";
import { ie } from "B:/~BUN/root/chunk-t7350kw8.js";
B();
B();
var Btt = qt(null);
function X3o() {
  let a = Ee(Btt),
    i = Ee(fY);
  return () => {
    if (a === null || !i) return;
    try {
      i.getState().open.find(item => item.id === a)?.onClaimed?.();
    } catch (error) {
      l(error);
    }
  };
}
function j() {
  let a = Ee(Btt),
    i = Ee(fY),
    t = a === null || !i ? void 0 : i.getState().open.find(item => item.id === a)?.countedAsk,
    d = t === void 0 ? void 0 : i?.askTally;
  return Dt(d?.subscribe ?? U, () => t === void 0 || !d ? null : d.positionLabel(t));
}
function lY(a, i, {
  perReveal = !1
} = {}) {
  let d = Ee(Btt),
    o = Ee(fY),
    k = Mo(i),
    [c] = y(() => perReveal && d !== null && o ? o.getState().open.find(item => item.id === d)?.revealSeq ?? 0 : 0);
  P(() => {
    if (d !== null && o) {
      if (!o.firstReveal(d, perReveal ? `${a}@${c}` : a)) return;
    }
    k();
  }, [d, o, a, perReveal, c]);
}
function U() {
  return () => {};
}
function h(a) {
  let i = Ume(a);
  return i === null ? void 0 : String(i);
}
function YQ(a) {
  let m = w(25),
    {
      title: i,
      subtitle: t,
      color: color,
      requestSource: requestSource,
      srPrefix: srPrefix,
      aside: aside
    } = a,
    color_2 = color === void 0 ? "permission" : color,
    f;
  se: switch (requestSource?.type) {
    case "workflow-agent":
      {
        let u;
        if (m[0] !== requestSource.workflowName) u = h(requestSource.workflowName), m[0] = requestSource.workflowName, m[1] = u;else u = m[1];
        let T = u;
        f = T !== void 0 ? `from the "${T}" workflow` : "from a workflow";
        break se;
      }
    case "subagent":
      {
        let u;
        if (m[2] !== requestSource.agentName) u = h(requestSource.agentName), m[2] = requestSource.agentName, m[3] = u;else u = m[3];
        let C = u;
        f = C !== void 0 ? `from the ${C} agent` : "from a subagent";
        break se;
      }
    case "remote-agent":
      {
        f = "from a remote cloud agent";
        break se;
      }
    case "plugin":
      {
        let u;
        if (m[4] !== requestSource.pluginName) u = h(requestSource.pluginName), m[4] = requestSource.pluginName, m[5] = u;else u = m[5];
        let N = u;
        f = N === void 0 ? "from a plugin" : `from the ${N} plugin`;
      }
  }
  const u = srPrefix !== void 0 ? `${srPrefix} ${i}` : void 0;
  let R;
  if (m[6] !== color_2 || m[7] !== u || m[8] !== i) R = e(n, {
    "aria-label": u,
    bold: !0,
    color: color_2,
    children: i
  }), m[6] = color_2, m[7] = u, m[8] = i, m[9] = R;else R = m[9];
  let g;
  if (m[10] !== f) g = f !== void 0 && r(n, {
    children: [e(n, {
      dimColor: !0,
      children: "\xB7 "
    }), f]
  }), m[10] = f, m[11] = g;else g = m[11];
  let L;
  if (m[12] !== R || m[13] !== g) L = r(s, {
    flexDirection: "row",
    gap: 1,
    children: [R, g]
  }), m[12] = R, m[13] = g, m[14] = L;else L = m[14];
  let S = L,
    x = aside !== void 0 && ie(i) + (f === void 0 ? 0 : 1 + ie(`\xB7 ${f}`)) + 1 + ie(aside.text) <= aside.rowColumns;
  const flexGrow = x ? 1 : void 0;
  let D;
  if (m[15] !== aside || m[16] !== x || m[17] !== S) D = x ? r(s, {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 1,
    children: [S, e(n, {
      dimColor: !0,
      children: aside.text
    })]
  }) : S, m[15] = aside, m[16] = x, m[17] = S, m[18] = D;else D = m[18];
  let X;
  if (m[19] !== t) X = t != null && (typeof t === "string" ? e(n, {
    dimColor: !0,
    wrap: "truncate-start",
    children: t
  }) : t), m[19] = t, m[20] = X;else X = m[20];
  let Q;
  if (m[21] !== flexGrow || m[22] !== D || m[23] !== X) Q = r(s, {
    flexDirection: "column",
    flexGrow: flexGrow,
    children: [D, X]
  }), m[21] = flexGrow, m[22] = D, m[23] = X, m[24] = Q;else Q = m[24];
  return Q;
}
function Ea(a) {
  let g = w(21),
    {
      title: title,
      subtitle: subtitle,
      color: color_3,
      titleColor: o,
      innerPaddingX: innerPaddingX,
      requestSource: requestSource_2,
      titleRight: titleRight,
      srPrefix: srPrefix_2,
      children: children
    } = a,
    borderColor = color_3 === void 0 ? "permission" : color_3,
    paddingX = innerPaddingX === void 0 ? 1 : innerPaddingX,
    se = srPrefix_2 === void 0 ? "Permission Required:" : srPrefix_2,
    text = j(),
    {
      columns: columns
    } = us(Ee(Og) ?? {
      rows: 0,
      columns: 0
    });
  const srPrefix_3 = se ?? void 0;
  let aside_2;
  if (g[0] !== text || g[1] !== columns || g[2] !== titleRight) aside_2 = titleRight === void 0 && text !== null ? {
    text: text,
    rowColumns: columns - 2
  } : void 0, g[0] = text, g[1] = columns, g[2] = titleRight, g[3] = aside_2;else aside_2 = g[3];
  let S;
  if (g[4] !== requestSource_2 || g[5] !== subtitle || g[6] !== srPrefix_3 || g[7] !== aside_2 || g[8] !== title || g[9] !== o) S = e(YQ, {
    title: title,
    subtitle: subtitle,
    color: o,
    requestSource: requestSource_2,
    srPrefix: srPrefix_3,
    aside: aside_2
  }), g[4] = requestSource_2, g[5] = subtitle, g[6] = srPrefix_3, g[7] = aside_2, g[8] = title, g[9] = o, g[10] = S;else S = g[10];
  let x;
  if (g[11] !== S || g[12] !== titleRight) x = e(s, {
    paddingX: 1,
    flexDirection: "column",
    children: r(s, {
      justifyContent: "space-between",
      children: [S, titleRight]
    })
  }), g[11] = S, g[12] = titleRight, g[13] = x;else x = g[13];
  let q;
  if (g[14] !== children || g[15] !== paddingX) q = e(s, {
    flexDirection: "column",
    paddingX: paddingX,
    children: children
  }), g[14] = children, g[15] = paddingX, g[16] = q;else q = g[16];
  let D;
  if (g[17] !== borderColor || g[18] !== x || g[19] !== q) D = r(s, {
    flexDirection: "column",
    borderStyle: "round",
    borderColor: borderColor,
    borderLeft: !1,
    borderRight: !1,
    borderBottom: !1,
    marginTop: 1,
    children: [x, q]
  }), g[17] = borderColor, g[18] = x, g[19] = q, g[20] = D;else D = g[20];
  return D;
}
export { Btt, X3o, lY, YQ, Ea };