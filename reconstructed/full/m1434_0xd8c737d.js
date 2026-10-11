// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.283
import {
  w
} from "B:/~BUN/root/chunk-x9hkq9y1.js";
import {
  F
} from "B:/~BUN/root/chunk-acd2tycn.js";
import {
  xo
} from "B:/~BUN/root/chunk-8hs4bwwk.js";
import {
  s,
  n
} from "B:/~BUN/root/chunk-1gn8pz4b.js";
import {
  ve
} from "B:/~BUN/root/chunk-cxqcvpm0.js";
import {
  Le
} from "B:/~BUN/root/chunk-dk0c0nrh.js";
import {
  uT
} from "B:/~BUN/root/chunk-qzz7wd45.js";
import {
  Ed,
  eje
} from "B:/~BUN/root/chunk-qg1rz74p.js";
import {
  Lj
} from "B:/~BUN/root/chunk-q7jerdh3.js";
import {
  sAt
} from "B:/~BUN/root/chunk-3jyp964r.js";
import {
  IQ
} from "B:/~BUN/root/chunk-v59c2dpf.js";
import {
  V,
  e,
  r
} from "B:/~BUN/root/chunk-qkvevvte.js";
import {
  U
} from "B:/~BUN/root/chunk-z1enakv9.js";
import {
  S,
  hn
} from "B:/~BUN/root/chunk-yv67t8hr.js";
var J = 40,
  N = "(another command ran in this repository at the same time; a change made by either may show under either result)",
  A = null;

function C({
  diff: t,
  verbose: a,
  style: o
}) {
  let {
    columns: u
  } = ve();
  if (t.skipped || (t.unavailable || t.shared) && t.files.length === 0) return e(Le, {
    children: e(n, {
      dimColor: !0,
      children: t.skipped ? "(file diff skipped for this git command)" : t.unavailable ? t.moreFiles > 0 ? `(file diff unavailable for this command; ${z(t.moreFiles)} changed)` : "(file diff unavailable for this command)" : N
    })
  });
  A ??= t;
  let c = A === t ? "(what this command changed; a convenience view, not a review or audit of the command)" : null,
    l = t.shared ? N : null;
  return r(s, {
    flexDirection: "column",
    children: [t.files.map((i) => {
      let g = i.hunks.flatMap((d) => d.lines),
        R = i.created ? "Created" : i.deleted ? "Deleted" : "Updated",
        {
          hunks: k,
          hiddenLines: b
        } = a ? {
          hunks: i.hunks,
          hiddenLines: 0
        } : K(i.hunks, J);
      return e(Le, {
        children: r(s, {
          flexDirection: "column",
          children: [r(n, {
            children: [R, " ", e(n, {
              bold: !0,
              children: a ? i.filePath : xo(i.filePath)
            }), " ", r(n, {
              dimColor: !0,
              children: ["(+", U(g, (d) => d.startsWith("+")), " -", U(g, (d) => d.startsWith("-")), ")"]
            })]
          }), o === "condensed" && !a ? null : e(Lj, {
            hunks: k,
            dim: !1,
            width: u - 12,
            filePath: i.filePath,
            firstLine: null
          }), b > 0 && !(o === "condensed" && !a) ? r(n, {
            dimColor: !0,
            children: ["\u2026 ", b, " more lines ", e(Ed, {})]
          }) : null]
        })
      }, i.filePath)
    }), t.moreFiles > 0 ? e(Le, {
      children: r(n, {
        dimColor: !0,
        children: [t.files.length > 0 ? `\u2026 ${t.moreFiles} more ${t.moreFiles===1?"file":"files"} changed` : `${z(t.moreFiles)} changed (binary, mode only or too large to show)`, t.unavailable ? " (part of the diff is unavailable)" : ""]
      })
    }) : null, l ? e(Le, {
      children: e(n, {
        dimColor: !0,
        children: l
      })
    }) : null, c ? e(Le, {
      children: e(n, {
        dimColor: !0,
        children: c
      })
    }) : null]
  })
}

function z(t) {
  return `${t} ${t===1?"file":"files"}`
}

function K(t, a) {
  let o = [],
    u = 0,
    c = 0;
  for (let l of t) {
    let i = a - u;
    if (i <= 0) c += l.lines.length;
    else if (l.lines.length <= i) o.push(l), u += l.lines.length;
    else o.push({
      ...l,
      lines: l.lines.slice(0, i)
    }), c += l.lines.length - i, u = a
  }
  return {
    hunks: o,
    hiddenLines: c
  }
}

function X(t) {
  if (!t.match(/<sandbox_violations>([\s\S]*?)<\/sandbox_violations>/)) return {
    cleanedStderr: t
  };
  return {
    cleanedStderr: eje(t).trim()
  }
}

function j(t) {
  let a = t.match(sAt);
  if (!a) return {
    cleanedStderr: t,
    cwdResetWarning: null
  };
  let o = a[1] ?? null;
  return {
    cleanedStderr: t.replace(sAt, "").trim(),
    cwdResetWarning: o
  }
}

function Z1e(t) {
  let h = w(40),
    {
      content: a,
      verbose: o,
      timeoutMs: u,
      style: c
    } = t,
    {
      stdout: l,
      stderr: i,
      isImage: g,
      returnCodeInterpretation: R,
      noOutputExpected: k,
      backgroundTaskId: b,
      bashEditDiff: d
    } = a,
    m = l === void 0 ? "" : l,
    O = i === void 0 ? "" : i,
    v, p, E, T, x, D, H;
  if (h[0] !== g || h[1] !== O || h[2] !== m || h[3] !== o) {
    H = hn;
    Me: {
      let {
        cleanedStderr: re
      } = X(O);
      ({
        cleanedStderr: E,
        cwdResetWarning: p
      } = j(re));
      if (g) {
        let f;
        if (h[11] === S) f = e(Le, {
          height: 1,
          children: e(n, {
            dimColor: !0,
            children: "[Image data detected and sent to Claude]"
          })
        }), h[11] = f;
        else f = h[11];
        H = f;
        break Me
      }
      v = s;T = "column";
      if (h[12] !== m || h[13] !== o) x = m !== "" ? e(uT, {
        content: m,
        verbose: o
      }) : null,
      h[12] = m,
      h[13] = o,
      h[14] = x;
      else x = h[14];D = E.trim() !== "" ? e(uT, {
        content: E,
        verbose: o,
        isError: !0
      }) : null
    }
    h[0] = g, h[1] = O, h[2] = m, h[3] = o, h[4] = v, h[5] = p, h[6] = E, h[7] = T, h[8] = x, h[9] = D, h[10] = H
  } else v = h[4], p = h[5], E = h[6], T = h[7], x = h[8], D = h[9], H = h[10];
  if (H !== hn) return H;
  let f;
  if (h[15] !== p) f = p ? e(Le, {
    children: e(n, {
      dimColor: !0,
      children: p
    })
  }) : null, h[15] = p, h[16] = f;
  else f = h[16];
  let y;
  if (h[17] !== d || h[18] !== c || h[19] !== o) y = d ? e(C, {
    diff: d,
    verbose: o,
    style: c
  }) : null, h[17] = d, h[18] = c, h[19] = o, h[20] = y;
  else y = h[20];
  let M;
  if (h[21] !== b || h[22] !== d || h[23] !== p || h[24] !== k || h[25] !== R || h[26] !== E || h[27] !== m) M = m === "" && E.trim() === "" && !p && !d ? e(Le, {
    height: 1,
    children: e(n, {
      dimColor: !0,
      children: b ? r(V, {
        children: ["Running in the background", " ", e(F, {
          chord: "down",
          action: "manage",
          parens: !0
        })]
      }) : R || (k ? "Done" : "(No output)")
    })
  }) : null, h[21] = b, h[22] = d, h[23] = p, h[24] = k, h[25] = R, h[26] = E, h[27] = m, h[28] = M;
  else M = h[28];
  let P;
  if (h[29] !== u) P = u && e(Le, {
    children: e(IQ, {
      timeoutMs: u
    })
  }), h[29] = u, h[30] = P;
  else P = h[30];
  let G;
  if (h[31] !== v || h[32] !== M || h[33] !== P || h[34] !== T || h[35] !== x || h[36] !== D || h[37] !== f || h[38] !== y) G = r(v, {
    flexDirection: T,
    children: [x, D, f, y, M, P]
  }), h[31] = v, h[32] = M, h[33] = P, h[34] = T, h[35] = x, h[36] = D, h[37] = f, h[38] = y, h[39] = G;
  else G = h[39];
  return G
}
export {
  Z1e
};
