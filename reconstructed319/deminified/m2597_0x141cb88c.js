// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { wa, P } from "B:/~BUN/root/chunk-n8cnxns2.js";
import { S } from "B:/~BUN/root/chunk-bn4bjw9d.js";
import { ai } from "B:/~BUN/root/chunk-1g25msn4.js";
import { Hc, ct, jHe, XU } from "B:/~BUN/root/chunk-bkfncj77.js";
import { s, n } from "B:/~BUN/root/chunk-qey16aan.js";
import { Ce } from "B:/~BUN/root/chunk-cync0e08.js";
import { Y, pb } from "B:/~BUN/root/chunk-c1v460b9.js";
import { U_ } from "B:/~BUN/root/chunk-xt7xbt1n.js";
import { Ini, o7n, s7n } from "B:/~BUN/root/chunk-et08qf3a.js";
import { rI } from "B:/~BUN/root/chunk-cacx0j4x.js";
import { ne, e, r } from "B:/~BUN/root/chunk-t16eynda.js";
import { Z, j } from "B:/~BUN/root/chunk-czy5r8bc.js";
import { ce } from "B:/~BUN/root/chunk-w7vsj9wa.js";
import { w } from "B:/~BUN/root/chunk-4qfwb3rf.js";
j();
var pe = {
    claude: "briefLabelClaude",
    you: "briefLabelYou"
  },
  children = "\u2502 ";
function b(t) {
  return ai(t);
}
function ox(t, o, c = !1) {
  let i = Math.max(1, o),
    l = [];
  for (let d of t.split(`
`)) {
    if (d === "") {
      l.push("");
      continue;
    }
    for (let p of Hc(d, i, {
      hard: !0,
      trim: !c
    }).split(`
`)) l.push(...(ce(p) <= i ? [p] : jHe(p, i)));
  }
  return l;
}
function ue(t, o) {
  let c = ce(t);
  return c >= o ? t : t + wa(" ", o - c);
}
function fe(t) {
  return `${o7n[t.who]} \u2192 ${s7n[t.produces]}`;
}
function F(t, o, c, dimColor) {
  return ox(b(t), o - children.length, !0).map((item, index) => r(n, {
    children: [e(n, {
      dimColor: !0,
      children: children
    }), e(n, {
      dimColor: dimColor,
      children: item === "" ? " " : item
    })]
  }, `${c}${index}`));
}
function Fkt(t, o) {
  return F(t.trim(), o, "msg", !1);
}
function H(t, children_2, c, i, l) {
  return r(n, {
    wrap: "truncate-end",
    children: [e(n, {
      bold: !0,
      children: children_2
    }), c !== null ? r(n, {
      dimColor: !0,
      children: [" (", c, ")"]
    }) : null, i !== null ? r(n, {
      dimColor: !0,
      children: ["  ", ct(i, Math.max(1, l - ce(children_2) - 8))]
    }) : null]
  }, t);
}
function ge(t) {
  return e(n, {
    children: " "
  }, t);
}
function xe(t, o, c, i) {
  let children_3 = `${o + 1}. `,
    d = " ".repeat(children_3.length),
    p = i,
    m = [r(n, {
      wrap: "truncate-end",
      children: [e(n, {
        dimColor: !0,
        children: children_3
      }), e(n, {
        bold: !0,
        children: ue(ct(b(t.title), p), p)
      }), "  ", e(n, {
        color: pe[t.who],
        children: o7n[t.who]
      }), r(n, {
        dimColor: !0,
        children: [" \u2192 ", s7n[t.produces]]
      })]
    }, `t${o}`)];
  return ox(b(t.description), c - children_3.length).forEach((item, index) => m.push(r(n, {
    children: [d, item]
  }, `d${o}.${index}`))), ox(`from ${b(t.basis)}`, c - children_3.length).forEach((item, index) => m.push(r(n, {
    dimColor: !0,
    children: [d, index === 0 ? r(ne, {
      children: [e(n, {
        italic: !0,
        children: "from"
      }), item.slice(4)]
    }) : item]
  }, `b${o}.${index}`))), m;
}
function oe(t, o, c) {
  let i = [],
    l = m => {
      if (i.length > 0) i.push(ge(`gap${i.length}`));
      i.push(m);
    };
  if (t.name !== void 0 || t.icon !== void 0 || t.color !== void 0) {
    let color = t.color !== void 0 ? Ini[t.color] : void 0,
      u = [...(t.icon !== void 0 ? [["icon", t.icon]] : []), ...(t.color !== void 0 ? [["color", t.color]] : [])],
      a = u.reduce((acc, [C, f]) => acc + 3 + C.length + 1 + ce(f), 0),
      h = Math.max(6, o - 22 - 7 - a);
    i.push(r(n, {
      wrap: "truncate-end",
      children: [e(n, {
        bold: !0,
        children: "Name, icon and color"
      }), "  ", t.name !== void 0 ? r(ne, {
        children: [e(n, {
          dimColor: !0,
          children: "name "
        }), "\u201C", ct(b(t.name), h), "\u201D"]
      }) : null, u.map(([k, children_4], index) => r(n, {
        children: [index > 0 || t.name !== void 0 ? e(n, {
          dimColor: !0,
          children: " \xB7 "
        }) : null, r(n, {
          dimColor: !0,
          children: [k, " "]
        }), e(n, {
          color: color,
          children: children_4
        })]
      }, k))]
    }, "card"));
  }
  if (t.summary !== void 0 && t.summary.trim() !== "") i.push(...F(t.summary.trim(), o, "sum", !0));
  let d = t.sessions ?? [];
  if (d.length > 0) {
    l(H("threads", "Threads", d.length, null, o));
    let m = Math.max(1, Math.min(Math.max(...d.map(item => ce(b(item.title)))), o - 3 - Math.max(...d.map(item => ce(fe(item)))) - 2));
    d.forEach((item, index) => i.push(...xe(item, index, o, m)));
  }
  let p = t.routines ?? [];
  if (p.length > 0) {
    l(H("routines", "Routines", p.length, "off until you turn one on", o));
    let m = a => `${b(a.cron_expression)} UTC`,
      u = Math.max(1, Math.min(Math.max(...p.map(item => ce(b(item.name)))), o - 2 - Math.max(...p.map(item => ce(m(item)))) - 2));
    p.forEach((item, index) => {
      let children_5 = m(item);
      if (i.push(r(n, {
        wrap: "truncate-end",
        children: [e(n, {
          dimColor: !0,
          children: "\xB7 "
        }), e(n, {
          bold: !0,
          children: ue(ct(b(item.name), u), u)
        }), "  ", e(n, {
          color: "permission",
          children: children_5
        })]
      }, `r${index}`)), item.description !== void 0 && item.description !== "") ox(b(item.description), o - 2).forEach((item, f) => i.push(r(n, {
        children: ["  ", item]
      }, `rd${index}.${f}`)));
    });
  }
  if (t.instructions !== void 0 && t.instructions.trim() !== "") l(H("instructions", "Project instructions", null, c.existingProject ? "replace the project\u2019s current ones when applied" : "set on the project on Yes", o)), i.push(...F(t.instructions.trim(), o, "ins", !1));
  if (d.length + p.length > 0) l(H("prompts", p.length === 0 ? "Thread instructions" : d.length === 0 ? "Routine instructions" : "Thread and routine instructions", null, p.length === 0 ? "what each thread starts with" : d.length === 0 ? "what each routine starts with" : "what each thread and routine starts with", o)), d.forEach((item, index) => {
    i.push(r(n, {
      dimColor: !0,
      wrap: "truncate-end",
      children: [index + 1, ". ", b(item.title)]
    }, `pt${index}`)), F(item.prompt.trim(), o - 3, `pp${index}.`, !0).forEach(item => i.push(r(n, {
      children: ["   ", item]
    }, `i${String(item.key)}`)));
  }), p.forEach((item, index) => {
    i.push(r(n, {
      dimColor: !0,
      wrap: "truncate-end",
      children: ["\xB7 ", b(item.name)]
    }, `rt${index}`)), F(item.prompt.trim(), o - 3, `rp${index}.`, !0).forEach(item => i.push(r(n, {
      children: ["   ", item]
    }, `i${String(item.key)}`)));
  });
  if (t.evidence?.sessions_matched !== void 0) l(r(n, {
    dimColor: !0,
    wrap: "truncate-end",
    children: ["The draft counts ", t.evidence.sessions_matched, " of this folder\u2019s", " ", P(t.evidence.sessions_matched, "session"), " as this stream of work."]
  }, "evidence"));
  return i;
}
var y1r = "Drafted by Claude from this session";
function U(t, o, c) {
  let i = t.sessions?.length ?? 0,
    l = t.routines?.length ?? 0,
    d = t.instructions !== void 0 && t.instructions.trim() !== "";
  return [`Brief  ${[i > 0 ? `${i} ${P(i, "thread")}` : null, l > 0 ? `${l} ${P(l, "routine")}` : null, d ? "instructions" : null, i + l === 0 && !d ? "summary only" : null, `${(o / 1024).toFixed(1)} KB`].filter(item => item !== null).join(" \xB7 ")}`, c === null ? "" : le(c, "show as text")].filter(item => item !== "").join("  ");
}
function Q(t, o) {
  return [XU(t), le(o, "expand")].filter(item => item !== "").join(" ");
}
function le(chord, action) {
  return pb({
    chord: chord,
    action: action,
    parens: !0,
    format: {
      keyCase: "lower"
    }
  });
}
function U6s(t, o, c, i) {
  return Math.max(ox(U(t, o, c), i, !0).length, ox(U(t, o, null), i, !0).length + ox(Q(Math.max(1, o), c), i, !0).length);
}
function Hkt(t, o, c) {
  if (c === null) return Math.min(t.length, o);
  let i = 0,
    l = 0;
  for (let d of t) {
    if (i += ox(rI(d), c, !0).length, i > o) break;
    l++;
  }
  return l;
}
function bzt(t) {
  let h = S(61),
    {
      proposal: proposal,
      proposalBytes: proposalBytes,
      existingProject: existingProject,
      width: width,
      maxRows: maxRows,
      marginTop: marginTop,
      transcriptChord: m,
      screenReaderColumns: screenReaderColumns,
      messageFrom: messageFrom
    } = t,
    k;
  if (h[0] !== existingProject || h[1] !== messageFrom || h[2] !== proposal || h[3] !== width) k = messageFrom !== null ? Fkt(proposal.summary ?? "", width) : oe(proposal, width, {
    existingProject: existingProject
  }), h[0] = existingProject, h[1] = messageFrom, h[2] = proposal, h[3] = width, h[4] = k;else k = h[4];
  let C = k,
    f;
  if (h[5] !== maxRows || h[6] !== C || h[7] !== screenReaderColumns) {
    f = C.slice(0, Hkt(C, maxRows, screenReaderColumns));
    while (f.length < C.length && f.length > 1 && String(f.at(-1)?.key).startsWith("gap")) f.pop();
    h[5] = maxRows, h[6] = C, h[7] = screenReaderColumns, h[8] = f;
  } else f = h[8];
  let count = C.length - f.length;
  if (messageFrom !== null) {
    const marginTop_2 = screenReaderColumns !== null ? 0 : marginTop;
    const paddingLeft = screenReaderColumns !== null ? 0 : 1;
    let x;
    if (h[9] !== count) x = count > 0 ? r(n, {
      color: "warning",
      wrap: "truncate-end",
      children: [XU(count), ". Make this terminal taller to read and send it."]
    }) : null, h[9] = count, h[10] = x;else x = h[10];
    let y;
    if (h[11] !== messageFrom || h[12] !== screenReaderColumns) y = messageFrom === "drafted" ? r(n, {
      dimColor: !0,
      children: [screenReaderColumns !== null ? "" : "  ", y1r]
    }) : null, h[11] = messageFrom, h[12] = screenReaderColumns, h[13] = y;else y = h[13];
    let M;
    if (h[14] !== f || h[15] !== marginTop_2 || h[16] !== paddingLeft || h[17] !== x || h[18] !== y) M = r(s, {
      flexDirection: "column",
      marginTop: marginTop_2,
      paddingLeft: paddingLeft,
      children: [f, x, y]
    }), h[14] = f, h[15] = marginTop_2, h[16] = paddingLeft, h[17] = x, h[18] = y, h[19] = M;else M = h[19];
    return M;
  }
  if (screenReaderColumns !== null) {
    const R = count === 0 ? m : null;
    let children_6;
    if (h[20] !== proposal || h[21] !== proposalBytes || h[22] !== R) children_6 = U(proposal, proposalBytes, R), h[20] = proposal, h[21] = proposalBytes, h[22] = R, h[23] = children_6;else children_6 = h[23];
    let x;
    if (h[24] !== children_6) x = e(n, {
      children: children_6
    }), h[24] = children_6, h[25] = x;else x = h[25];
    let y;
    if (h[26] !== count || h[27] !== m) y = count > 0 ? e(n, {
      children: Q(count, m)
    }) : null, h[26] = count, h[27] = m, h[28] = y;else y = h[28];
    let M;
    if (h[29] !== f || h[30] !== x || h[31] !== y) M = r(s, {
      flexDirection: "column",
      children: [x, f, y]
    }), h[29] = f, h[30] = x, h[31] = y, h[32] = M;else M = h[32];
    return M;
  }
  let O = proposal.sessions?.length ?? 0,
    _ = proposal.routines?.length ?? 0,
    me = proposal.instructions !== void 0 && proposal.instructions.trim() !== "",
    R;
  if (h[33] === w) R = e(n, {
    bold: !0,
    children: "Brief"
  }), h[33] = R;else R = h[33];
  let T;
  if (h[34] !== O) T = O > 0 ? `${O} ${P(O, "thread")}` : null, h[34] = O, h[35] = T;else T = h[35];
  let x;
  if (h[36] !== _) x = _ > 0 ? `${_} ${P(_, "routine")}` : null, h[36] = _, h[37] = x;else x = h[37];
  const y = me ? "instructions" : null,
    M = O + _ === 0 && !me ? "summary only" : null,
    V = proposalBytes / 1024;
  let de;
  if (h[38] !== V) de = V.toFixed(1), h[38] = V, h[39] = de;else de = h[39];
  const ee = `${de} KB`;
  let K;
  if (h[40] !== T || h[41] !== x || h[42] !== y || h[43] !== M || h[44] !== ee) K = r(Ce, {
    children: [T, x, y, M, ee]
  }), h[40] = T, h[41] = x, h[42] = y, h[43] = M, h[44] = ee, h[45] = K;else K = h[45];
  let N;
  if (h[46] !== count || h[47] !== m) N = count === 0 ? r(ne, {
    children: ["  ", e(Y, {
      chord: m,
      action: "show as text",
      parens: !0,
      format: {
        keyCase: "lower"
      }
    })]
  }) : null, h[46] = count, h[47] = m, h[48] = N;else N = h[48];
  let G;
  if (h[49] !== K || h[50] !== N) G = r(n, {
    wrap: "truncate-end",
    children: [R, r(n, {
      dimColor: !0,
      children: ["  ", K, N]
    })]
  }), h[49] = K, h[50] = N, h[51] = G;else G = h[51];
  let X;
  if (h[52] !== count) X = e(n, {
    wrap: "truncate-end",
    children: e(U_, {
      count: count,
      expandable: !0
    })
  }), h[52] = count, h[53] = X;else X = h[53];
  let q;
  if (h[54] !== f || h[55] !== X) q = r(s, {
    flexDirection: "column",
    paddingLeft: 1,
    children: [f, X]
  }), h[54] = f, h[55] = X, h[56] = q;else q = h[56];
  let he;
  if (h[57] !== marginTop || h[58] !== G || h[59] !== q) he = r(s, {
    flexDirection: "column",
    marginTop: marginTop,
    children: [G, q]
  }), h[57] = marginTop, h[58] = G, h[59] = q, h[60] = he;else he = h[60];
  return he;
}
export { ox, Fkt, y1r, U6s, Hkt, bzt };