// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { w } from "B:/~BUN/root/chunk-x9hkq9y1.js";
import { s, n } from "B:/~BUN/root/chunk-1gn8pz4b.js";
import { wte } from "B:/~BUN/root/chunk-3hjtxzqy.js";
import { e, r } from "B:/~BUN/root/chunk-qkvevvte.js";
function d(S) {
  let u = wte(S);
  return u === null ? void 0 : String(u);
}
function $K(S) {
  let l = w(20),
    {
      title: u,
      subtitle: a,
      color: color,
      requestSource: requestSource,
      srPrefix: srPrefix
    } = S,
    color_2 = color === void 0 ? "permission" : color,
    i;
  x: switch (requestSource?.type) {
    case "workflow-agent":
      {
        let t;
        if (l[0] !== requestSource.workflowName) t = d(requestSource.workflowName), l[0] = requestSource.workflowName, l[1] = t;else t = l[1];
        let R = t;
        i = R !== void 0 ? `from the "${R}" workflow` : "from a workflow";
        break x;
      }
    case "subagent":
      {
        let t;
        if (l[2] !== requestSource.agentName) t = d(requestSource.agentName), l[2] = requestSource.agentName, l[3] = t;else t = l[3];
        let p = t;
        i = p !== void 0 ? `from the ${p} agent` : "from a subagent";
        break x;
      }
    case "remote-agent":
      {
        i = "from a remote cloud agent";
        break x;
      }
    case "plugin":
      {
        let t;
        if (l[4] !== requestSource.pluginName) t = d(requestSource.pluginName), l[4] = requestSource.pluginName, l[5] = t;else t = l[5];
        let b = t;
        i = b === void 0 ? "from a plugin" : `from the ${b} plugin`;
      }
  }
  const t = srPrefix !== void 0 ? `${srPrefix} ${u}` : void 0;
  let c;
  if (l[6] !== color_2 || l[7] !== t || l[8] !== u) c = e(n, {
    "aria-label": t,
    bold: !0,
    color: color_2,
    children: u
  }), l[6] = color_2, l[7] = t, l[8] = u, l[9] = c;else c = l[9];
  let g;
  if (l[10] !== i) g = i !== void 0 && r(n, {
    children: [e(n, {
      dimColor: !0,
      children: "\xB7 "
    }), i]
  }), l[10] = i, l[11] = g;else g = l[11];
  let k;
  if (l[12] !== c || l[13] !== g) k = r(s, {
    flexDirection: "row",
    gap: 1,
    children: [c, g]
  }), l[12] = c, l[13] = g, l[14] = k;else k = l[14];
  let L;
  if (l[15] !== a) L = a != null && (typeof a === "string" ? e(n, {
    dimColor: !0,
    wrap: "truncate-start",
    children: a
  }) : a), l[15] = a, l[16] = L;else L = l[16];
  let j;
  if (l[17] !== k || l[18] !== L) j = r(s, {
    flexDirection: "column",
    children: [k, L]
  }), l[17] = k, l[18] = L, l[19] = j;else j = l[19];
  return j;
}
function xi(S) {
  let x = w(15),
    {
      title: title,
      subtitle: subtitle,
      color: color_3,
      titleColor: o,
      innerPaddingX: innerPaddingX,
      requestSource: requestSource_2,
      titleRight: titleRight,
      children: children
    } = S,
    borderColor = color_3 === void 0 ? "permission" : color_3,
    paddingX = innerPaddingX === void 0 ? 1 : innerPaddingX,
    p;
  if (x[0] !== requestSource_2 || x[1] !== subtitle || x[2] !== title || x[3] !== o) p = e($K, {
    title: title,
    subtitle: subtitle,
    color: o,
    requestSource: requestSource_2,
    srPrefix: "Permission Required:"
  }), x[0] = requestSource_2, x[1] = subtitle, x[2] = title, x[3] = o, x[4] = p;else p = x[4];
  let b;
  if (x[5] !== p || x[6] !== titleRight) b = e(s, {
    paddingX: 1,
    flexDirection: "column",
    children: r(s, {
      justifyContent: "space-between",
      children: [p, titleRight]
    })
  }), x[5] = p, x[6] = titleRight, x[7] = b;else b = x[7];
  let c;
  if (x[8] !== children || x[9] !== paddingX) c = e(s, {
    flexDirection: "column",
    paddingX: paddingX,
    children: children
  }), x[8] = children, x[9] = paddingX, x[10] = c;else c = x[10];
  let g;
  if (x[11] !== borderColor || x[12] !== b || x[13] !== c) g = r(s, {
    flexDirection: "column",
    borderStyle: "round",
    borderColor: borderColor,
    borderLeft: !1,
    borderRight: !1,
    borderBottom: !1,
    marginTop: 1,
    children: [b, c]
  }), x[11] = borderColor, x[12] = b, x[13] = c, x[14] = g;else g = x[14];
  return g;
}
export { $K, xi };