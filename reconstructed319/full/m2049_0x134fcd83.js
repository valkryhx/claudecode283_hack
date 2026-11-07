// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  S
} from "B:/~BUN/root/chunk-bn4bjw9d.js";
import {
  Y
} from "B:/~BUN/root/chunk-c1v460b9.js";
import {
  zs
} from "B:/~BUN/root/chunk-5xx1vfdh.js";
import {
  s,
  n
} from "B:/~BUN/root/chunk-qey16aan.js";
import {
  Re
} from "B:/~BUN/root/chunk-qr2xxkqa.js";
import {
  Ye
} from "B:/~BUN/root/chunk-4swxab5a.js";
import {
  I0
} from "B:/~BUN/root/chunk-r2775wd7.js";
import {
  fRn,
  nas
} from "B:/~BUN/root/chunk-27h4st9h.js";
import {
  Ap
} from "B:/~BUN/root/chunk-xt7xbt1n.js";
import {
  B7
} from "B:/~BUN/root/chunk-cyz63hzp.js";
import {
  tke
} from "B:/~BUN/root/chunk-dkh18dq0.js";
import {
  Cvt
} from "B:/~BUN/root/chunk-fvkh3y4a.js";
import {
  ne,
  e,
  r
} from "B:/~BUN/root/chunk-t16eynda.js";
import {
  Z,
  j
} from "B:/~BUN/root/chunk-czy5r8bc.js";
import {
  U
} from "B:/~BUN/root/chunk-5ha2avah.js";
import {
  w,
  Pn
} from "B:/~BUN/root/chunk-4qfwb3rf.js";
j();
var te = 40,
  z = "(another command ran in this repository at the same time; a change made by either may show under either result)",
  oe = "(a git step in this command can move the working tree, so these may be its changes, not edits)",
  X = null;

function O({
  diff: t,
  verbose: l,
  style: o,
  treeMoved: c
}) {
  let {
    columns: h
  } = Re();
  if (t.skipped || (t.unavailable || t.shared) && t.files.length === 0) return e(Ye, {
    children: e(n, {
      dimColor: !0,
      children: t.skipped ? "(file diff skipped for this git command)" : t.unavailable ? t.moreFiles > 0 ? t.shared ? `(file diff unavailable for this command; ${B(t.moreFiles)} changed in this repository while it ran, by it or by other commands)` : `(file diff unavailable for this command; ${B(t.moreFiles)} changed)` : "(file diff unavailable for this command)" : z
    })
  });
  X ??= t;
  let i = l || X === t ? "(files that changed while this command ran, by the command or by another process; a convenience view, not a review or audit of the command)" : null,
    u = t.shared ? z : null,
    y = (o === "condensed" || c) && !l;
  return r(s, {
    flexDirection: "column",
    children: [t.files.map((d) => {
      let b = d.hunks.flatMap((a) => a.lines),
        v = d.created ? "Created" : d.deleted ? "Deleted" : "Updated",
        {
          hunks: E,
          hiddenLines: m
        } = l ? {
          hunks: d.hunks,
          hiddenLines: 0
        } : re(d.hunks, te);
      return e(Ye, {
        children: r(s, {
          flexDirection: "column",
          children: [r(n, {
            children: [v, " ", e(n, {
              bold: !0,
              children: l ? d.filePath : zs(d.filePath)
            }), " ", r(n, {
              dimColor: !0,
              children: ["(+", U(b, (a) => a.startsWith("+")), " -", U(b, (a) => a.startsWith("-")), ")"]
            })]
          }), y ? null : e(B7, {
            hunks: E,
            dim: !1,
            width: h - 12,
            filePath: d.filePath,
            firstLine: null
          }), m > 0 && !y ? r(n, {
            dimColor: !0,
            children: ["\u2026 ", m, " more lines ", e(Ap, {})]
          }) : null]
        })
      }, d.filePath)
    }), t.moreFiles > 0 ? e(Ye, {
      children: r(n, {
        dimColor: !0,
        children: [t.files.length > 0 ? `\u2026 ${t.moreFiles} more ${t.moreFiles===1?"file":"files"} changed` : `${B(t.moreFiles)} changed (binary, mode only or too large to show)`, t.unavailable ? " (part of the diff is unavailable)" : ""]
      })
    }) : null, c ? e(Ye, {
      children: r(n, {
        dimColor: !0,
        children: [oe, l ? null : r(ne, {
          children: [" ", e(Ap, {})]
        })]
      })
    }) : null, u ? e(Ye, {
      children: e(n, {
        dimColor: !0,
        children: u
      })
    }) : null, i ? e(Ye, {
      children: e(n, {
        dimColor: !0,
        children: i
      })
    }) : null]
  })
}

function B(t) {
  return `${t} ${t===1?"file":"files"}`
}

function re(t, l) {
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

function q(t) {
  if (!t.match(/<sandbox_violations>([\s\S]*?)<\/sandbox_violations>/)) return {
    cleanedStderr: t
  };
  return {
    cleanedStderr: Cvt(t).trim()
  }
}

function G(t) {
  let l = t.match(fRn);
  if (!l) return {
    cleanedStderr: t,
    cwdResetWarning: null
  };
  let o = l[1] ?? null;
  return {
    cleanedStderr: t.replace(fRn, "").trim(),
    cwdResetWarning: o
  }
}

function Tvt(t) {
  let p = S(44),
    {
      content: l,
      verbose: o,
      timeoutMs: c,
      style: h,
      command: i
    } = t,
    {
      stdout: u,
      stderr: y,
      isImage: d,
      returnCodeInterpretation: b,
      noOutputExpected: v,
      backgroundTaskId: E,
      bashEditDiff: m
    } = l,
    a = u === void 0 ? "" : u,
    H = y === void 0 ? "" : y,
    Q;
  if (p[0] !== m || p[1] !== i) Q = m !== void 0 && i !== void 0 && nas(i), p[0] = m, p[1] = i, p[2] = Q;
  else Q = p[2];
  let V = Q,
    x, f, k, M, T, D, A;
  if (p[3] !== d || p[4] !== H || p[5] !== a || p[6] !== o) {
    A = Pn;
    Le: {
      let {
        cleanedStderr: ue
      } = q(H);
      ({
        cleanedStderr: k,
        cwdResetWarning: f
      } = G(ue));
      if (d) {
        let g;
        if (p[14] === w) g = e(Ye, {
          height: 1,
          children: e(n, {
            dimColor: !0,
            children: "[Image data detected and sent to Claude]"
          })
        }), p[14] = g;
        else g = p[14];
        A = g;
        break Le
      }
      x = s;M = "column";
      if (p[15] !== a || p[16] !== o) T = a !== "" ? e(I0, {
        content: a,
        verbose: o
      }) : null,
      p[15] = a,
      p[16] = o,
      p[17] = T;
      else T = p[17];D = k.trim() !== "" ? e(I0, {
        content: k,
        verbose: o,
        isError: !0
      }) : null
    }
    p[3] = d, p[4] = H, p[5] = a, p[6] = o, p[7] = x, p[8] = f, p[9] = k, p[10] = M, p[11] = T, p[12] = D, p[13] = A
  } else x = p[7], f = p[8], k = p[9], M = p[10], T = p[11], D = p[12], A = p[13];
  if (A !== Pn) return A;
  let g;
  if (p[18] !== f) g = f ? e(Ye, {
    children: e(n, {
      dimColor: !0,
      children: f
    })
  }) : null, p[18] = f, p[19] = g;
  else g = p[19];
  let C;
  if (p[20] !== m || p[21] !== h || p[22] !== V || p[23] !== o) C = m ? e(O, {
    diff: m,
    verbose: o,
    style: h,
    treeMoved: V
  }) : null, p[20] = m, p[21] = h, p[22] = V, p[23] = o, p[24] = C;
  else C = p[24];
  let P;
  if (p[25] !== E || p[26] !== m || p[27] !== f || p[28] !== v || p[29] !== b || p[30] !== k || p[31] !== a) P = E || a === "" && k.trim() === "" && !f && !m ? e(Ye, {
    height: 1,
    children: e(n, {
      dimColor: !0,
      children: E ? r(ne, {
        children: ["Running in the background", " ", e(Y, {
          chord: "down",
          action: "manage",
          parens: !0
        })]
      }) : b || (v ? "Done" : "(No output)")
    })
  }) : null, p[25] = E, p[26] = m, p[27] = f, p[28] = v, p[29] = b, p[30] = k, p[31] = a, p[32] = P;
  else P = p[32];
  let W;
  if (p[33] !== c) W = c && e(Ye, {
    children: e(tke, {
      timeoutMs: c
    })
  }), p[33] = c, p[34] = W;
  else W = p[34];
  let ee;
  if (p[35] !== x || p[36] !== C || p[37] !== P || p[38] !== W || p[39] !== M || p[40] !== T || p[41] !== D || p[42] !== g) ee = r(x, {
    flexDirection: M,
    children: [T, D, g, C, P, W]
  }), p[35] = x, p[36] = C, p[37] = P, p[38] = W, p[39] = M, p[40] = T, p[41] = D, p[42] = g, p[43] = ee;
  else ee = p[43];
  return ee
}
export {
  Tvt
};
