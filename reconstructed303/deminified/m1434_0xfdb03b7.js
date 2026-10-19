// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { ap } from "B:/~BUN/root/chunk-3aez4b53.js";
import { j } from "B:/~BUN/root/chunk-rpez7z7a.js";
import { t } from "B:/~BUN/root/chunk-6za2ez23.js";
import { Jfn } from "B:/~BUN/root/chunk-2zk4vqr8.js";
import { KDn, yXt, ido, Ns } from "B:/~BUN/root/chunk-9grc6xh0.js";
import { te } from "B:/~BUN/root/chunk-9tx73f8x.js";
import { Cd } from "B:/~BUN/root/chunk-2vhqkymb.js";
import { w } from "B:/~BUN/root/chunk-rysqv8v1.js";
import { bl } from "B:/~BUN/root/chunk-b900np4s.js";
import { Oe } from "B:/~BUN/root/chunk-g5gf7tps.js";
import { s, n } from "B:/~BUN/root/chunk-damrp3r8.js";
import { rt } from "B:/~BUN/root/chunk-pw5vpw1q.js";
import { $tt } from "B:/~BUN/root/chunk-35d1zgdy.js";
import { Ovt } from "B:/~BUN/root/chunk-327wfkv3.js";
import { be } from "B:/~BUN/root/chunk-nyga36vf.js";
import { q } from "B:/~BUN/root/chunk-bf7csy4f.js";
import { fE } from "B:/~BUN/root/chunk-mhftza1y.js";
import { lr } from "B:/~BUN/root/chunk-v8w1g8ga.js";
import { Ii } from "B:/~BUN/root/chunk-3cgpbmp2.js";
import { MCe } from "B:/~BUN/root/chunk-frqasvg5.js";
import { Eo } from "B:/~BUN/root/chunk-3hxvnq94.js";
import { vk, xI } from "B:/~BUN/root/chunk-xa5s55y7.js";
import { Q, e, r } from "B:/~BUN/root/chunk-x2hkxw5q.js";
import { ae, P, y, B } from "B:/~BUN/root/chunk-5hr2ysa5.js";
import { S } from "B:/~BUN/root/chunk-ef0msk7r.js";
B();
B();
function N({
  onStashAndContinue: onStashAndContinue,
  onCancel: onCancel,
  cancelQuits: cancelQuits
}) {
  let [f, R] = y(null),
    m = f !== null ? [...f.tracked, ...f.untracked] : [],
    [K, E] = y(!0),
    [x, c] = y(!1),
    [L, I] = y(null);
  P(() => {
    (async () => {
      try {
        let {
            cwd: cwd
          } = yXt(),
          h = await Jfn(cwd, Cd(cwd));
        R(h);
      } catch (error) {
        let h = error instanceof Error ? error.message : String(error);
        t(`Error getting changed files: ${h}`, {
          level: "error"
        }), I(error instanceof ap ? error.message : "Failed to get changed files");
      } finally {
        E(!1);
      }
    })();
  }, []);
  let v = async () => {
    c(!0);
    try {
      if (t("Stashing changes before teleport..."), !(await ido("Teleport auto-stash", yXt()))) {
        I("Failed to stash changes"), c(!1);
        return;
      }
      t("Successfully stashed changes");
    } catch (error) {
      let o = error instanceof Error ? error.message : String(error);
      t(`Error stashing changes: ${o}`, {
        level: "error"
      }), I(error instanceof ap ? error.message : "Failed to stash changes"), c(!1);
      return;
    }
    try {
      await onStashAndContinue();
    } finally {
      c(!1);
    }
  };
  if (K) return e(s, {
    flexDirection: "column",
    padding: 1,
    children: r(s, {
      marginBottom: 1,
      children: [e(Ii, {}), r(n, {
        children: [" Checking git status", te.ellipsis]
      })]
    })
  });
  if (L) return r(s, {
    flexDirection: "column",
    padding: 1,
    children: [r(n, {
      bold: !0,
      color: "error",
      children: ["Error: ", L]
    }), e(s, {
      marginTop: 1,
      children: e(n, {
        dimColor: !0,
        children: e(q, {
          chord: "escape",
          action: "cancel",
          bold: !0
        })
      })
    })]
  });
  let a = m.length > 8,
    u = x && !cancelQuits;
  return r(be, {
    title: "Working directory has changes",
    onCancel: u ? he : onCancel,
    exitOnCtrlCD: cancelQuits || u,
    inputGuide: u ? "Teleport continues when the stash finishes\u2026" : void 0,
    children: [e(n, {
      children: "Teleport will switch git branches. The following changes were found:"
    }), e(s, {
      flexDirection: "column",
      paddingLeft: 2,
      children: m.length > 0 ? a ? r(n, {
        children: [m.length, " files changed"]
      }) : m.map((i, index) => e(n, {
        children: i
      }, index)) : e(Eo, {
        children: "No changes detected"
      })
    }), e(n, {
      children: "Would you like to stash these changes and continue with teleport?"
    }), x ? r(s, {
      children: [e(Ii, {}), e(n, {
        children: " Stashing changes..."
      })]
    }) : e(lr, {
      confirmLabel: "Stash changes and continue",
      cancelLabel: cancelQuits ? "Exit" : "Cancel",
      onConfirm: () => void v(),
      onCancel: onCancel
    })]
  }, u ? "stashing" : "asking");
}
function he() {}
function xe() {
  return Ns(0);
}
var X = new Set();
function obn(T) {
  let a = w(32),
    {
      onComplete: onComplete,
      onCancel: onCancel_2,
      errorsToIgnore: errorsToIgnore,
      isStandalone: isStandalone
    } = T,
    m = errorsToIgnore === void 0 ? X : errorsToIgnore,
    K = isStandalone === void 0 ? !1 : isStandalone,
    [E, x] = y(null),
    [c, L] = y(!1),
    I = bl(),
    {
      credentials: credentials
    } = Oe(),
    u;
  if (a[0] !== credentials || a[1] !== m || a[2] !== onComplete) u = async () => {
    let i = await KDn(credentials, m);
    if (i.size === 0) {
      onComplete();
      return;
    }
    if (i.has("needsLogin")) x("needsLogin");else if (i.has("needsGitStash")) x("needsGitStash");
  }, a[0] = credentials, a[1] = m, a[2] = onComplete, a[3] = u;else u = a[3];
  let o = u,
    h,
    le;
  if (a[4] !== o) h = () => {
    o();
  }, le = [o], a[4] = o, a[5] = h, a[6] = le;else h = a[5], le = a[6];
  P(h, le);
  let g = onCancel_2 === void 0,
    onCancel_3 = onCancel_2 ?? xe,
    ce;
  if (a[7] !== o) ce = () => {
    L(!1), o();
  }, a[7] = o, a[8] = ce;else ce = a[8];
  let onDone = ce,
    ge;
  if (a[9] === S) ge = () => {
    L(!0);
  }, a[9] = ge;else ge = a[9];
  let onConfirm = ge,
    de;
  if (a[10] !== o) de = () => o(), a[10] = o, a[11] = de;else de = a[11];
  let onStashAndContinue_2 = de,
    {
      entries: Y,
      exitState: exitState
    } = Ovt(onCancel_2, void 0, onCancel_2 !== void 0 && c);
  const isActive = K && E === "needsGitStash";
  let pe;
  if (a[12] !== isActive) pe = {
    context: "Confirmation",
    isActive: isActive
  }, a[12] = isActive, a[13] = pe;else pe = a[13];
  if (rt("confirm:no", onCancel_3, pe), !E) {
    return null;
  }
  switch (E) {
    case "needsGitStash":
      {
        let C;
        if (a[14] !== g || a[15] !== onStashAndContinue_2 || a[16] !== onCancel_3) C = e(N, {
          onStashAndContinue: onStashAndContinue_2,
          onCancel: onCancel_3,
          cancelQuits: g
        }), a[14] = g, a[15] = onStashAndContinue_2, a[16] = onCancel_3, a[17] = C;else C = a[17];
        return C;
      }
    case "needsLogin":
      {
        const urlOutdent = I ? xI : vk;
        let ue;
        if (a[18] !== onDone || a[19] !== urlOutdent) ue = e(MCe, {
          onDone: onDone,
          mode: "login",
          forceLoginMethod: "claudeai",
          urlOutdent: urlOutdent
        }), a[18] = onDone, a[19] = urlOutdent, a[20] = ue;else ue = a[20];
        let children = ue;
        const onCancel_4 = c ? onDone : onCancel_3;
        const inputGuide = exitState.pending ? `Press ${exitState.keyName} again to cancel` : void 0;
        let children_2;
        if (a[21] !== g || a[22] !== c || a[23] !== Y || a[24] !== onCancel_3 || a[25] !== children) children_2 = c ? g ? children : e(fE, {
          claimFocus: !0,
          flexDirection: "column",
          bindings: Y,
          children: children
        }) : r(Q, {
          children: [r(s, {
            flexDirection: "column",
            children: [e(n, {
              dimColor: !0,
              children: "Teleport requires a Claude.ai account."
            }), e(n, {
              dimColor: !0,
              children: "Your Claude Pro/Max subscription will be used by Claude Code."
            })]
          }), e(lr, {
            confirmLabel: "Login with Claude account",
            cancelLabel: g ? "Exit" : "Cancel",
            onConfirm: onConfirm,
            onCancel: onCancel_3
          })]
        }), a[21] = g, a[22] = c, a[23] = Y, a[24] = onCancel_3, a[25] = children, a[26] = children_2;else children_2 = a[26];
        let fe;
        if (a[27] !== g || a[28] !== onCancel_4 || a[29] !== inputGuide || a[30] !== children_2) fe = e(be, {
          title: "Log in to Claude",
          onCancel: onCancel_4,
          exitOnCtrlCD: g,
          inputGuide: inputGuide,
          children: children_2
        }), a[27] = g, a[28] = onCancel_4, a[29] = inputGuide, a[30] = children_2, a[31] = fe;else fe = a[31];
        return fe;
      }
  }
}
function bei(T, errorsToIgnore_2) {
  return $tt(T, [l => e(obn, {
    errorsToIgnore: errorsToIgnore_2,
    onComplete: () => l(),
    isStandalone: !0
  })], {
    session: j()
  });
}
export { obn, bei };