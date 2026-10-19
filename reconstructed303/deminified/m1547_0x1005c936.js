// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { w } from "B:/~BUN/root/chunk-rysqv8v1.js";
import { F } from "B:/~BUN/root/chunk-rpez7z7a.js";
import { q } from "B:/~BUN/root/chunk-bf7csy4f.js";
import { ts } from "B:/~BUN/root/chunk-xrp58hm9.js";
import { s, n } from "B:/~BUN/root/chunk-damrp3r8.js";
import { Te } from "B:/~BUN/root/chunk-smy4yvhm.js";
import { ze } from "B:/~BUN/root/chunk-yqm8ptb8.js";
import { vP } from "B:/~BUN/root/chunk-z7dx70bj.js";
import { vXt, wmo } from "B:/~BUN/root/chunk-9grc6xh0.js";
import { Gu } from "B:/~BUN/root/chunk-653rvs3k.js";
import { dY } from "B:/~BUN/root/chunk-satnn8a8.js";
import { tce } from "B:/~BUN/root/chunk-dp4s51j4.js";
import { Htt } from "B:/~BUN/root/chunk-75n4yg0p.js";
import { Q, e, r } from "B:/~BUN/root/chunk-x2hkxw5q.js";
import { Z, B } from "B:/~BUN/root/chunk-5hr2ysa5.js";
import { S, yn } from "B:/~BUN/root/chunk-ef0msk7r.js";
B();
var te = 40,
  U = "(another command ran in this repository at the same time; a change made by either may show under either result)",
  ne = "(a git step in this command can move the working tree, so these may be its changes, not edits)",
  X = null;
function O({
  diff: diff,
  verbose: verbose,
  style: style,
  treeMoved: treeMoved
}) {
  let {
    columns: columns
  } = Te();
  if (diff.skipped || (diff.unavailable || diff.shared) && diff.files.length === 0) return e(ze, {
    children: e(n, {
      dimColor: !0,
      children: diff.skipped ? "(file diff skipped for this git command)" : diff.unavailable ? diff.moreFiles > 0 ? `(file diff unavailable for this command; ${j(diff.moreFiles)} changed)` : "(file diff unavailable for this command)" : U
    })
  });
  X ??= diff;
  let children_2 = verbose || X === diff ? "(files that changed while this command ran, by the command or by another process; a convenience view, not a review or audit of the command)" : null,
    children = diff.shared ? U : null,
    k = (style === "condensed" || treeMoved) && !verbose;
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
        } : oe(item.hunks, te);
      return e(ze, {
        children: r(s, {
          flexDirection: "column",
          children: [r(n, {
            children: [v, " ", e(n, {
              bold: !0,
              children: verbose ? item.filePath : ts(item.filePath)
            }), " ", r(n, {
              dimColor: !0,
              children: ["(+", F(b, a => a.startsWith("+")), " -", F(b, a => a.startsWith("-")), ")"]
            })]
          }), k ? null : e(dY, {
            hunks: hunks,
            dim: !1,
            width: columns - 12,
            filePath: item.filePath,
            firstLine: null
          }), hiddenLines > 0 && !k ? r(n, {
            dimColor: !0,
            children: ["\u2026 ", hiddenLines, " more lines ", e(Gu, {})]
          }) : null]
        })
      }, item.filePath);
    }), diff.moreFiles > 0 ? e(ze, {
      children: r(n, {
        dimColor: !0,
        children: [diff.files.length > 0 ? `\u2026 ${diff.moreFiles} more ${diff.moreFiles === 1 ? "file" : "files"} changed` : `${j(diff.moreFiles)} changed (binary, mode only or too large to show)`, diff.unavailable ? " (part of the diff is unavailable)" : ""]
      })
    }) : null, treeMoved ? e(ze, {
      children: r(n, {
        dimColor: !0,
        children: [ne, verbose ? null : r(Q, {
          children: [" ", e(Gu, {})]
        })]
      })
    }) : null, children ? e(ze, {
      children: e(n, {
        dimColor: !0,
        children: children
      })
    }) : null, children_2 ? e(ze, {
      children: e(n, {
        dimColor: !0,
        children: children_2
      })
    }) : null]
  });
}
function j(t) {
  return `${t} ${t === 1 ? "file" : "files"}`;
}
function oe(t, l) {
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
function G(cleanedStderr) {
  if (!cleanedStderr.match(/<sandbox_violations>([\s\S]*?)<\/sandbox_violations>/)) return {
    cleanedStderr: cleanedStderr
  };
  return {
    cleanedStderr: Htt(cleanedStderr).trim()
  };
}
function J(cleanedStderr_2) {
  let l = cleanedStderr_2.match(vXt);
  if (!l) return {
    cleanedStderr: cleanedStderr_2,
    cwdResetWarning: null
  };
  let cwdResetWarning = l[1] ?? null;
  return {
    cleanedStderr: cleanedStderr_2.replace(vXt, "").trim(),
    cwdResetWarning: cwdResetWarning
  };
}
function Ftt(t) {
  let p = w(44),
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
    V = stderr === void 0 ? "" : stderr,
    Y;
  if (p[0] !== m || p[1] !== command) Y = m !== void 0 && command !== void 0 && wmo(command), p[0] = m, p[1] = command, p[2] = Y;else Y = p[2];
  let treeMoved_2 = Y,
    y,
    f,
    E,
    flexDirection,
    T,
    D,
    z;
  if (p[3] !== isImage || p[4] !== V || p[5] !== content_2 || p[6] !== verbose_2) {
    z = yn;
    Fe: {
      let {
        cleanedStderr: cleanedStderr_3
      } = G(V);
      ({
        cleanedStderr: E,
        cwdResetWarning: f
      } = J(cleanedStderr_3));
      if (isImage) {
        let g;
        if (p[14] === S) g = e(ze, {
          height: 1,
          children: e(n, {
            dimColor: !0,
            children: "[Image data detected and sent to Claude]"
          })
        }), p[14] = g;else g = p[14];
        z = g;
        break Fe;
      }
      y = s;
      flexDirection = "column";
      if (p[15] !== content_2 || p[16] !== verbose_2) T = content_2 !== "" ? e(vP, {
        content: content_2,
        verbose: verbose_2
      }) : null, p[15] = content_2, p[16] = verbose_2, p[17] = T;else T = p[17];
      D = E.trim() !== "" ? e(vP, {
        content: E,
        verbose: verbose_2,
        isError: !0
      }) : null;
    }
    p[3] = isImage, p[4] = V, p[5] = content_2, p[6] = verbose_2, p[7] = y, p[8] = f, p[9] = E, p[10] = flexDirection, p[11] = T, p[12] = D, p[13] = z;
  } else y = p[7], f = p[8], E = p[9], flexDirection = p[10], T = p[11], D = p[12], z = p[13];
  if (z !== yn) return z;
  let g;
  if (p[18] !== f) g = f ? e(ze, {
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
  if (p[25] !== backgroundTaskId || p[26] !== m || p[27] !== f || p[28] !== noOutputExpected || p[29] !== returnCodeInterpretation || p[30] !== E || p[31] !== content_2) P = content_2 === "" && E.trim() === "" && !f && !m ? e(ze, {
    height: 1,
    children: e(n, {
      dimColor: !0,
      children: backgroundTaskId ? r(Q, {
        children: ["Running in the background", " ", e(q, {
          chord: "down",
          action: "manage",
          parens: !0
        })]
      }) : returnCodeInterpretation || (noOutputExpected ? "Done" : "(No output)")
    })
  }) : null, p[25] = backgroundTaskId, p[26] = m, p[27] = f, p[28] = noOutputExpected, p[29] = returnCodeInterpretation, p[30] = E, p[31] = content_2, p[32] = P;else P = p[32];
  let W;
  if (p[33] !== timeoutMs) W = timeoutMs && e(ze, {
    children: e(tce, {
      timeoutMs: timeoutMs
    })
  }), p[33] = timeoutMs, p[34] = W;else W = p[34];
  let ee;
  if (p[35] !== y || p[36] !== C || p[37] !== P || p[38] !== W || p[39] !== flexDirection || p[40] !== T || p[41] !== D || p[42] !== g) ee = r(y, {
    flexDirection: flexDirection,
    children: [T, D, g, C, P, W]
  }), p[35] = y, p[36] = C, p[37] = P, p[38] = W, p[39] = flexDirection, p[40] = T, p[41] = D, p[42] = g, p[43] = ee;else ee = p[43];
  return ee;
}
export { Ftt };