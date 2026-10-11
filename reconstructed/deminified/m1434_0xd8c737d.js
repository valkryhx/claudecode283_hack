// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { w } from "B:/~BUN/root/chunk-x9hkq9y1.js";
import { F } from "B:/~BUN/root/chunk-acd2tycn.js";
import { xo } from "B:/~BUN/root/chunk-8hs4bwwk.js";
import { s, n } from "B:/~BUN/root/chunk-1gn8pz4b.js";
import { ve } from "B:/~BUN/root/chunk-cxqcvpm0.js";
import { Le } from "B:/~BUN/root/chunk-dk0c0nrh.js";
import { uT } from "B:/~BUN/root/chunk-qzz7wd45.js";
import { Ed, eje } from "B:/~BUN/root/chunk-qg1rz74p.js";
import { Lj } from "B:/~BUN/root/chunk-q7jerdh3.js";
import { sAt } from "B:/~BUN/root/chunk-3jyp964r.js";
import { IQ } from "B:/~BUN/root/chunk-v59c2dpf.js";
import { V, e, r } from "B:/~BUN/root/chunk-qkvevvte.js";
import { U } from "B:/~BUN/root/chunk-z1enakv9.js";
import { S, hn } from "B:/~BUN/root/chunk-yv67t8hr.js";
var J = 40,
  N = "(another command ran in this repository at the same time; a change made by either may show under either result)",
  A = null;
function C({
  diff: diff,
  verbose: verbose,
  style: style
}) {
  let {
    columns: columns
  } = ve();
  if (diff.skipped || (diff.unavailable || diff.shared) && diff.files.length === 0) return e(Le, {
    children: e(n, {
      dimColor: !0,
      children: diff.skipped ? "(file diff skipped for this git command)" : diff.unavailable ? diff.moreFiles > 0 ? `(file diff unavailable for this command; ${z(diff.moreFiles)} changed)` : "(file diff unavailable for this command)" : N
    })
  });
  A ??= diff;
  let children_2 = A === diff ? "(what this command changed; a convenience view, not a review or audit of the command)" : null,
    children = diff.shared ? N : null;
  return r(s, {
    flexDirection: "column",
    children: [diff.files.map(item => {
      let g = item.hunks.flatMap(item => item.lines),
        R = item.created ? "Created" : item.deleted ? "Deleted" : "Updated",
        {
          hunks: hunks,
          hiddenLines: hiddenLines
        } = verbose ? {
          hunks: item.hunks,
          hiddenLines: 0
        } : K(item.hunks, J);
      return e(Le, {
        children: r(s, {
          flexDirection: "column",
          children: [r(n, {
            children: [R, " ", e(n, {
              bold: !0,
              children: verbose ? item.filePath : xo(item.filePath)
            }), " ", r(n, {
              dimColor: !0,
              children: ["(+", U(g, d => d.startsWith("+")), " -", U(g, d => d.startsWith("-")), ")"]
            })]
          }), style === "condensed" && !verbose ? null : e(Lj, {
            hunks: hunks,
            dim: !1,
            width: columns - 12,
            filePath: item.filePath,
            firstLine: null
          }), hiddenLines > 0 && !(style === "condensed" && !verbose) ? r(n, {
            dimColor: !0,
            children: ["\u2026 ", hiddenLines, " more lines ", e(Ed, {})]
          }) : null]
        })
      }, item.filePath);
    }), diff.moreFiles > 0 ? e(Le, {
      children: r(n, {
        dimColor: !0,
        children: [diff.files.length > 0 ? `\u2026 ${diff.moreFiles} more ${diff.moreFiles === 1 ? "file" : "files"} changed` : `${z(diff.moreFiles)} changed (binary, mode only or too large to show)`, diff.unavailable ? " (part of the diff is unavailable)" : ""]
      })
    }) : null, children ? e(Le, {
      children: e(n, {
        dimColor: !0,
        children: children
      })
    }) : null, children_2 ? e(Le, {
      children: e(n, {
        dimColor: !0,
        children: children_2
      })
    }) : null]
  });
}
function z(t) {
  return `${t} ${t === 1 ? "file" : "files"}`;
}
function K(t, a) {
  let hunks_2 = [],
    u = 0,
    hiddenLines_2 = 0;
  for (let l of t) {
    let i = a - u;
    if (i <= 0) hiddenLines_2 += l.lines.length;else if (l.lines.length <= i) hunks_2.push(l), u += l.lines.length;else hunks_2.push({
      ...l,
      lines: l.lines.slice(0, i)
    }), hiddenLines_2 += l.lines.length - i, u = a;
  }
  return {
    hunks: hunks_2,
    hiddenLines: hiddenLines_2
  };
}
function X(cleanedStderr) {
  if (!cleanedStderr.match(/<sandbox_violations>([\s\S]*?)<\/sandbox_violations>/)) return {
    cleanedStderr: cleanedStderr
  };
  return {
    cleanedStderr: eje(cleanedStderr).trim()
  };
}
function j(cleanedStderr_2) {
  let a = cleanedStderr_2.match(sAt);
  if (!a) return {
    cleanedStderr: cleanedStderr_2,
    cwdResetWarning: null
  };
  let cwdResetWarning = a[1] ?? null;
  return {
    cleanedStderr: cleanedStderr_2.replace(sAt, "").trim(),
    cwdResetWarning: cwdResetWarning
  };
}
function Z1e(t) {
  let h = w(40),
    {
      content: content,
      verbose: verbose_2,
      timeoutMs: timeoutMs,
      style: style_2
    } = t,
    {
      stdout: stdout,
      stderr: stderr,
      isImage: isImage,
      returnCodeInterpretation: returnCodeInterpretation,
      noOutputExpected: noOutputExpected,
      backgroundTaskId: backgroundTaskId,
      bashEditDiff: d
    } = content,
    content_2 = stdout === void 0 ? "" : stdout,
    O = stderr === void 0 ? "" : stderr,
    v,
    p,
    E,
    flexDirection,
    x,
    D,
    H;
  if (h[0] !== isImage || h[1] !== O || h[2] !== content_2 || h[3] !== verbose_2) {
    H = hn;
    Me: {
      let {
        cleanedStderr: cleanedStderr_3
      } = X(O);
      ({
        cleanedStderr: E,
        cwdResetWarning: p
      } = j(cleanedStderr_3));
      if (isImage) {
        let f;
        if (h[11] === S) f = e(Le, {
          height: 1,
          children: e(n, {
            dimColor: !0,
            children: "[Image data detected and sent to Claude]"
          })
        }), h[11] = f;else f = h[11];
        H = f;
        break Me;
      }
      v = s;
      flexDirection = "column";
      if (h[12] !== content_2 || h[13] !== verbose_2) x = content_2 !== "" ? e(uT, {
        content: content_2,
        verbose: verbose_2
      }) : null, h[12] = content_2, h[13] = verbose_2, h[14] = x;else x = h[14];
      D = E.trim() !== "" ? e(uT, {
        content: E,
        verbose: verbose_2,
        isError: !0
      }) : null;
    }
    h[0] = isImage, h[1] = O, h[2] = content_2, h[3] = verbose_2, h[4] = v, h[5] = p, h[6] = E, h[7] = flexDirection, h[8] = x, h[9] = D, h[10] = H;
  } else v = h[4], p = h[5], E = h[6], flexDirection = h[7], x = h[8], D = h[9], H = h[10];
  if (H !== hn) return H;
  let f;
  if (h[15] !== p) f = p ? e(Le, {
    children: e(n, {
      dimColor: !0,
      children: p
    })
  }) : null, h[15] = p, h[16] = f;else f = h[16];
  let y;
  if (h[17] !== d || h[18] !== style_2 || h[19] !== verbose_2) y = d ? e(C, {
    diff: d,
    verbose: verbose_2,
    style: style_2
  }) : null, h[17] = d, h[18] = style_2, h[19] = verbose_2, h[20] = y;else y = h[20];
  let M;
  if (h[21] !== backgroundTaskId || h[22] !== d || h[23] !== p || h[24] !== noOutputExpected || h[25] !== returnCodeInterpretation || h[26] !== E || h[27] !== content_2) M = content_2 === "" && E.trim() === "" && !p && !d ? e(Le, {
    height: 1,
    children: e(n, {
      dimColor: !0,
      children: backgroundTaskId ? r(V, {
        children: ["Running in the background", " ", e(F, {
          chord: "down",
          action: "manage",
          parens: !0
        })]
      }) : returnCodeInterpretation || (noOutputExpected ? "Done" : "(No output)")
    })
  }) : null, h[21] = backgroundTaskId, h[22] = d, h[23] = p, h[24] = noOutputExpected, h[25] = returnCodeInterpretation, h[26] = E, h[27] = content_2, h[28] = M;else M = h[28];
  let P;
  if (h[29] !== timeoutMs) P = timeoutMs && e(Le, {
    children: e(IQ, {
      timeoutMs: timeoutMs
    })
  }), h[29] = timeoutMs, h[30] = P;else P = h[30];
  let G;
  if (h[31] !== v || h[32] !== M || h[33] !== P || h[34] !== flexDirection || h[35] !== x || h[36] !== D || h[37] !== f || h[38] !== y) G = r(v, {
    flexDirection: flexDirection,
    children: [x, D, f, y, M, P]
  }), h[31] = v, h[32] = M, h[33] = P, h[34] = flexDirection, h[35] = x, h[36] = D, h[37] = f, h[38] = y, h[39] = G;else G = h[39];
  return G;
}
export { Z1e };