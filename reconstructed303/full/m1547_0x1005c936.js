// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.303
import {
  w
} from "B:/~BUN/root/chunk-rysqv8v1.js";
import {
  F
} from "B:/~BUN/root/chunk-rpez7z7a.js";
import {
  q
} from "B:/~BUN/root/chunk-bf7csy4f.js";
import {
  ts
} from "B:/~BUN/root/chunk-xrp58hm9.js";
import {
  s,
  n
} from "B:/~BUN/root/chunk-damrp3r8.js";
import {
  Te
} from "B:/~BUN/root/chunk-smy4yvhm.js";
import {
  ze
} from "B:/~BUN/root/chunk-yqm8ptb8.js";
import {
  vP
} from "B:/~BUN/root/chunk-z7dx70bj.js";
import {
  vXt,
  wmo
} from "B:/~BUN/root/chunk-9grc6xh0.js";
import {
  Gu
} from "B:/~BUN/root/chunk-653rvs3k.js";
import {
  dY
} from "B:/~BUN/root/chunk-satnn8a8.js";
import {
  tce
} from "B:/~BUN/root/chunk-dp4s51j4.js";
import {
  Htt
} from "B:/~BUN/root/chunk-75n4yg0p.js";
import {
  Q,
  e,
  r
} from "B:/~BUN/root/chunk-x2hkxw5q.js";
import {
  Z,
  B
} from "B:/~BUN/root/chunk-5hr2ysa5.js";
import {
  S,
  yn
} from "B:/~BUN/root/chunk-ef0msk7r.js";
B();
var te = 40,
  U = "(another command ran in this repository at the same time; a change made by either may show under either result)",
  ne = "(a git step in this command can move the working tree, so these may be its changes, not edits)",
  X = null;

function O({
  diff: t,
  verbose: l,
  style: o,
  treeMoved: c
}) {
  let {
    columns: h
  } = Te();
  if (t.skipped || (t.unavailable || t.shared) && t.files.length === 0) return e(ze, {
    children: e(n, {
      dimColor: !0,
      children: t.skipped ? "(file diff skipped for this git command)" : t.unavailable ? t.moreFiles > 0 ? `(file diff unavailable for this command; ${j(t.moreFiles)} changed)` : "(file diff unavailable for this command)" : U
    })
  });
  X ??= t;
  let i = l || X === t ? "(files that changed while this command ran, by the command or by another process; a convenience view, not a review or audit of the command)" : null,
    u = t.shared ? U : null,
    k = (o === "condensed" || c) && !l;
  return r(s, {
    flexDirection: "column",
    children: [t.files.map((d) => {
      let b = d.hunks.flatMap((a) => a.lines),
        v = d.created ? "Created" : d.deleted ? "Deleted" : "Updated",
        {
          hunks: x,
          hiddenLines: m
        } = l ? {
          hunks: d.hunks,
          hiddenLines: 0
        } : oe(d.hunks, te);
      return e(ze, {
        children: r(s, {
          flexDirection: "column",
          children: [r(n, {
            children: [v, " ", e(n, {
              bold: !0,
              children: l ? d.filePath : ts(d.filePath)
            }), " ", r(n, {
              dimColor: !0,
              children: ["(+", F(b, (a) => a.startsWith("+")), " -", F(b, (a) => a.startsWith("-")), ")"]
            })]
          }), k ? null : e(dY, {
            hunks: x,
            dim: !1,
            width: h - 12,
            filePath: d.filePath,
            firstLine: null
          }), m > 0 && !k ? r(n, {
            dimColor: !0,
            children: ["\u2026 ", m, " more lines ", e(Gu, {})]
          }) : null]
        })
      }, d.filePath)
    }), t.moreFiles > 0 ? e(ze, {
      children: r(n, {
        dimColor: !0,
        children: [t.files.length > 0 ? `\u2026 ${t.moreFiles} more ${t.moreFiles===1?"file":"files"} changed` : `${j(t.moreFiles)} changed (binary, mode only or too large to show)`, t.unavailable ? " (part of the diff is unavailable)" : ""]
      })
    }) : null, c ? e(ze, {
      children: r(n, {
        dimColor: !0,
        children: [ne, l ? null : r(Q, {
          children: [" ", e(Gu, {})]
        })]
      })
    }) : null, u ? e(ze, {
      children: e(n, {
        dimColor: !0,
        children: u
      })
    }) : null, i ? e(ze, {
      children: e(n, {
        dimColor: !0,
        children: i
      })
    }) : null]
  })
}

function j(t) {
  return `${t} ${t===1?"file":"files"}`
}

function oe(t, l) {
  let o = [],
    c = 0,
    h = 0;
  for (let i of t) {
    let u = l - c;
    if (u <= 0) h += i.lines.length;
    else if (i.lines.length <= u) o.push(i), c += i.lines.length;
    else o.push({
      ...i,
      lines: i.lines.slice(0, u)
    }), h += i.lines.length - u, c = l
  }
  return {
    hunks: o,
    hiddenLines: h
  }
}

function G(t) {
  if (!t.match(/<sandbox_violations>([\s\S]*?)<\/sandbox_violations>/)) return {
    cleanedStderr: t
  };
  return {
    cleanedStderr: Htt(t).trim()
  }
}

function J(t) {
  let l = t.match(vXt);
  if (!l) return {
    cleanedStderr: t,
    cwdResetWarning: null
  };
  let o = l[1] ?? null;
  return {
    cleanedStderr: t.replace(vXt, "").trim(),
    cwdResetWarning: o
  }
}

function Ftt(t) {
  let p = w(44),
    {
      content: l,
      verbose: o,
      timeoutMs: c,
      style: h,
      command: i
    } = t,
    {
      stdout: u,
      stderr: k,
      isImage: d,
      returnCodeInterpretation: b,
      noOutputExpected: v,
      backgroundTaskId: x,
      bashEditDiff: m
    } = l,
    a = u === void 0 ? "" : u,
    V = k === void 0 ? "" : k,
    Y;
  if (p[0] !== m || p[1] !== i) Y = m !== void 0 && i !== void 0 && wmo(i), p[0] = m, p[1] = i, p[2] = Y;
  else Y = p[2];
  let A = Y,
    y, f, E, M, T, D, z;
  if (p[3] !== d || p[4] !== V || p[5] !== a || p[6] !== o) {
    z = yn;
    Fe: {
      let {
        cleanedStderr: ue
      } = G(V);
      ({
        cleanedStderr: E,
        cwdResetWarning: f
      } = J(ue));
      if (d) {
        let g;
        if (p[14] === S) g = e(ze, {
          height: 1,
          children: e(n, {
            dimColor: !0,
            children: "[Image data detected and sent to Claude]"
          })
        }), p[14] = g;
        else g = p[14];
        z = g;
        break Fe
      }
      y = s;M = "column";
      if (p[15] !== a || p[16] !== o) T = a !== "" ? e(vP, {
        content: a,
        verbose: o
      }) : null,
      p[15] = a,
      p[16] = o,
      p[17] = T;
      else T = p[17];D = E.trim() !== "" ? e(vP, {
        content: E,
        verbose: o,
        isError: !0
      }) : null
    }
    p[3] = d, p[4] = V, p[5] = a, p[6] = o, p[7] = y, p[8] = f, p[9] = E, p[10] = M, p[11] = T, p[12] = D, p[13] = z
  } else y = p[7], f = p[8], E = p[9], M = p[10], T = p[11], D = p[12], z = p[13];
  if (z !== yn) return z;
  let g;
  if (p[18] !== f) g = f ? e(ze, {
    children: e(n, {
      dimColor: !0,
      children: f
    })
  }) : null, p[18] = f, p[19] = g;
  else g = p[19];
  let C;
  if (p[20] !== m || p[21] !== h || p[22] !== A || p[23] !== o) C = m ? e(O, {
    diff: m,
    verbose: o,
    style: h,
    treeMoved: A
  }) : null, p[20] = m, p[21] = h, p[22] = A, p[23] = o, p[24] = C;
  else C = p[24];
  let P;
  if (p[25] !== x || p[26] !== m || p[27] !== f || p[28] !== v || p[29] !== b || p[30] !== E || p[31] !== a) P = a === "" && E.trim() === "" && !f && !m ? e(ze, {
    height: 1,
    children: e(n, {
      dimColor: !0,
      children: x ? r(Q, {
        children: ["Running in the background", " ", e(q, {
          chord: "down",
          action: "manage",
          parens: !0
        })]
      }) : b || (v ? "Done" : "(No output)")
    })
  }) : null, p[25] = x, p[26] = m, p[27] = f, p[28] = v, p[29] = b, p[30] = E, p[31] = a, p[32] = P;
  else P = p[32];
  let W;
  if (p[33] !== c) W = c && e(ze, {
    children: e(tce, {
      timeoutMs: c
    })
  }), p[33] = c, p[34] = W;
  else W = p[34];
  let ee;
  if (p[35] !== y || p[36] !== C || p[37] !== P || p[38] !== W || p[39] !== M || p[40] !== T || p[41] !== D || p[42] !== g) ee = r(y, {
    flexDirection: M,
    children: [T, D, g, C, P, W]
  }), p[35] = y, p[36] = C, p[37] = P, p[38] = W, p[39] = M, p[40] = T, p[41] = D, p[42] = g, p[43] = ee;
  else ee = p[43];
  return ee
}
export {
  Ftt
};
