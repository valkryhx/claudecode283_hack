// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { S } from "B:/~BUN/root/chunk-bn4bjw9d.js";
import { Y } from "B:/~BUN/root/chunk-c1v460b9.js";
import { zs } from "B:/~BUN/root/chunk-5xx1vfdh.js";
import { s, n } from "B:/~BUN/root/chunk-qey16aan.js";
import { Re } from "B:/~BUN/root/chunk-qr2xxkqa.js";
import { Ye } from "B:/~BUN/root/chunk-4swxab5a.js";
import { I0 } from "B:/~BUN/root/chunk-r2775wd7.js";
import { fRn, nas } from "B:/~BUN/root/chunk-27h4st9h.js";
import { Ap } from "B:/~BUN/root/chunk-xt7xbt1n.js";
import { B7 } from "B:/~BUN/root/chunk-cyz63hzp.js";
import { tke } from "B:/~BUN/root/chunk-dkh18dq0.js";
import { Cvt } from "B:/~BUN/root/chunk-fvkh3y4a.js";
import { ne, e, r } from "B:/~BUN/root/chunk-t16eynda.js";
import { Z, j } from "B:/~BUN/root/chunk-czy5r8bc.js";
import { U } from "B:/~BUN/root/chunk-5ha2avah.js";
import { w, Pn } from "B:/~BUN/root/chunk-4qfwb3rf.js";
j();
var te = 40,
  z = "(another command ran in this repository at the same time; a change made by either may show under either result)",
  oe = "(a git step in this command can move the working tree, so these may be its changes, not edits)",
  X = null;
function O({
  diff: diff,
  verbose: verbose,
  style: style,
  treeMoved: treeMoved
}) {
  let {
    columns: columns
  } = Re();
  if (diff.skipped || (diff.unavailable || diff.shared) && diff.files.length === 0) return e(Ye, {
    children: e(n, {
      dimColor: !0,
      children: diff.skipped ? "(file diff skipped for this git command)" : diff.unavailable ? diff.moreFiles > 0 ? diff.shared ? `(file diff unavailable for this command; ${B(diff.moreFiles)} changed in this repository while it ran, by it or by other commands)` : `(file diff unavailable for this command; ${B(diff.moreFiles)} changed)` : "(file diff unavailable for this command)" : z
    })
  });
  X ??= diff;
  let children_2 = verbose || X === diff ? "(files that changed while this command ran, by the command or by another process; a convenience view, not a review or audit of the command)" : null,
    children = diff.shared ? z : null,
    y = (style === "condensed" || treeMoved) && !verbose;
  return r(s, {
    flexDirection: "column",
    children: [diff.files.map(item => {
      let b = item.hunks.flatMap(item => item.lines),
        v = item.created ? "Created" : item.deleted ? "Deleted" : "Updated",
        {
          hunks: hunks,
          hiddenLines: hiddenLines
        } = verbose ? {
          hunks: item.hunks,
          hiddenLines: 0
        } : re(item.hunks, te);
      return e(Ye, {
        children: r(s, {
          flexDirection: "column",
          children: [r(n, {
            children: [v, " ", e(n, {
              bold: !0,
              children: verbose ? item.filePath : zs(item.filePath)
            }), " ", r(n, {
              dimColor: !0,
              children: ["(+", U(b, a => a.startsWith("+")), " -", U(b, a => a.startsWith("-")), ")"]
            })]
          }), y ? null : e(B7, {
            hunks: hunks,
            dim: !1,
            width: columns - 12,
            filePath: item.filePath,
            firstLine: null
          }), hiddenLines > 0 && !y ? r(n, {
            dimColor: !0,
            children: ["\u2026 ", hiddenLines, " more lines ", e(Ap, {})]
          }) : null]
        })
      }, item.filePath);
    }), diff.moreFiles > 0 ? e(Ye, {
      children: r(n, {
        dimColor: !0,
        children: [diff.files.length > 0 ? `\u2026 ${diff.moreFiles} more ${diff.moreFiles === 1 ? "file" : "files"} changed` : `${B(diff.moreFiles)} changed (binary, mode only or too large to show)`, diff.unavailable ? " (part of the diff is unavailable)" : ""]
      })
    }) : null, treeMoved ? e(Ye, {
      children: r(n, {
        dimColor: !0,
        children: [oe, verbose ? null : r(ne, {
          children: [" ", e(Ap, {})]
        })]
      })
    }) : null, children ? e(Ye, {
      children: e(n, {
        dimColor: !0,
        children: children
      })
    }) : null, children_2 ? e(Ye, {
      children: e(n, {
        dimColor: !0,
        children: children_2
      })
    }) : null]
  });
}
function B(t) {
  return `${t} ${t === 1 ? "file" : "files"}`;
}
function re(t, l) {
  let hunks_2 = [],
    c = 0,
    hiddenLines_2 = 0;
  for (let i of t) {
    let u = l - c;
    if (u <= 0) hiddenLines_2 += i.lines.length;else if (i.lines.length <= u) hunks_2.push(i), c += i.lines.length;else hunks_2.push({
      ...i,
      lines: i.lines.slice(0, u)
    }), hiddenLines_2 += i.lines.length - u, c = l;
  }
  return {
    hunks: hunks_2,
    hiddenLines: hiddenLines_2
  };
}
function q(cleanedStderr) {
  if (!cleanedStderr.match(/<sandbox_violations>([\s\S]*?)<\/sandbox_violations>/)) return {
    cleanedStderr: cleanedStderr
  };
  return {
    cleanedStderr: Cvt(cleanedStderr).trim()
  };
}
function G(cleanedStderr_2) {
  let l = cleanedStderr_2.match(fRn);
  if (!l) return {
    cleanedStderr: cleanedStderr_2,
    cwdResetWarning: null
  };
  let cwdResetWarning = l[1] ?? null;
  return {
    cleanedStderr: cleanedStderr_2.replace(fRn, "").trim(),
    cwdResetWarning: cwdResetWarning
  };
}
function Tvt(t) {
  let p = S(44),
    {
      content: content,
      verbose: verbose_2,
      timeoutMs: timeoutMs,
      style: style_2,
      command: command
    } = t,
    {
      stdout: stdout,
      stderr: stderr,
      isImage: isImage,
      returnCodeInterpretation: returnCodeInterpretation,
      noOutputExpected: noOutputExpected,
      backgroundTaskId: backgroundTaskId,
      bashEditDiff: m
    } = content,
    content_2 = stdout === void 0 ? "" : stdout,
    H = stderr === void 0 ? "" : stderr,
    Q;
  if (p[0] !== m || p[1] !== command) Q = m !== void 0 && command !== void 0 && nas(command), p[0] = m, p[1] = command, p[2] = Q;else Q = p[2];
  let treeMoved_2 = Q,
    x,
    f,
    k,
    flexDirection,
    T,
    D,
    A;
  if (p[3] !== isImage || p[4] !== H || p[5] !== content_2 || p[6] !== verbose_2) {
    A = Pn;
    Le: {
      let {
        cleanedStderr: cleanedStderr_3
      } = q(H);
      ({
        cleanedStderr: k,
        cwdResetWarning: f
      } = G(cleanedStderr_3));
      if (isImage) {
        let g;
        if (p[14] === w) g = e(Ye, {
          height: 1,
          children: e(n, {
            dimColor: !0,
            children: "[Image data detected and sent to Claude]"
          })
        }), p[14] = g;else g = p[14];
        A = g;
        break Le;
      }
      x = s;
      flexDirection = "column";
      if (p[15] !== content_2 || p[16] !== verbose_2) T = content_2 !== "" ? e(I0, {
        content: content_2,
        verbose: verbose_2
      }) : null, p[15] = content_2, p[16] = verbose_2, p[17] = T;else T = p[17];
      D = k.trim() !== "" ? e(I0, {
        content: k,
        verbose: verbose_2,
        isError: !0
      }) : null;
    }
    p[3] = isImage, p[4] = H, p[5] = content_2, p[6] = verbose_2, p[7] = x, p[8] = f, p[9] = k, p[10] = flexDirection, p[11] = T, p[12] = D, p[13] = A;
  } else x = p[7], f = p[8], k = p[9], flexDirection = p[10], T = p[11], D = p[12], A = p[13];
  if (A !== Pn) return A;
  let g;
  if (p[18] !== f) g = f ? e(Ye, {
    children: e(n, {
      dimColor: !0,
      children: f
    })
  }) : null, p[18] = f, p[19] = g;else g = p[19];
  let C;
  if (p[20] !== m || p[21] !== style_2 || p[22] !== treeMoved_2 || p[23] !== verbose_2) C = m ? e(O, {
    diff: m,
    verbose: verbose_2,
    style: style_2,
    treeMoved: treeMoved_2
  }) : null, p[20] = m, p[21] = style_2, p[22] = treeMoved_2, p[23] = verbose_2, p[24] = C;else C = p[24];
  let P;
  if (p[25] !== backgroundTaskId || p[26] !== m || p[27] !== f || p[28] !== noOutputExpected || p[29] !== returnCodeInterpretation || p[30] !== k || p[31] !== content_2) P = backgroundTaskId || content_2 === "" && k.trim() === "" && !f && !m ? e(Ye, {
    height: 1,
    children: e(n, {
      dimColor: !0,
      children: backgroundTaskId ? r(ne, {
        children: ["Running in the background", " ", e(Y, {
          chord: "down",
          action: "manage",
          parens: !0
        })]
      }) : returnCodeInterpretation || (noOutputExpected ? "Done" : "(No output)")
    })
  }) : null, p[25] = backgroundTaskId, p[26] = m, p[27] = f, p[28] = noOutputExpected, p[29] = returnCodeInterpretation, p[30] = k, p[31] = content_2, p[32] = P;else P = p[32];
  let W;
  if (p[33] !== timeoutMs) W = timeoutMs && e(Ye, {
    children: e(tke, {
      timeoutMs: timeoutMs
    })
  }), p[33] = timeoutMs, p[34] = W;else W = p[34];
  let ee;
  if (p[35] !== x || p[36] !== C || p[37] !== P || p[38] !== W || p[39] !== flexDirection || p[40] !== T || p[41] !== D || p[42] !== g) ee = r(x, {
    flexDirection: flexDirection,
    children: [T, D, g, C, P, W]
  }), p[35] = x, p[36] = C, p[37] = P, p[38] = W, p[39] = flexDirection, p[40] = T, p[41] = D, p[42] = g, p[43] = ee;else ee = p[43];
  return ee;
}
export { Tvt };