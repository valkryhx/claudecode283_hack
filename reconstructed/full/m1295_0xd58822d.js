// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.283
import {
  bu
} from "B:/~BUN/root/chunk-bgthmgyc.js";
import {
  j
} from "B:/~BUN/root/chunk-4rk7cwxz.js";
import {
  t
} from "B:/~BUN/root/chunk-qe2zga5e.js";
import {
  jBt
} from "B:/~BUN/root/chunk-339q6g5w.js";
import {
  yo,
  ZZt,
  Cxt,
  rvr
} from "B:/~BUN/root/chunk-3jyp964r.js";
import {
  La
} from "B:/~BUN/root/chunk-nrrn2axm.js";
import {
  w
} from "B:/~BUN/root/chunk-x9hkq9y1.js";
import {
  ol
} from "B:/~BUN/root/chunk-syke822n.js";
import {
  ke
} from "B:/~BUN/root/chunk-kss0wzj5.js";
import {
  s,
  n
} from "B:/~BUN/root/chunk-1gn8pz4b.js";
import {
  ze
} from "B:/~BUN/root/chunk-r2yrqvry.js";
import {
  tje
} from "B:/~BUN/root/chunk-eyqyx5gc.js";
import {
  YJe
} from "B:/~BUN/root/chunk-5r1x61tc.js";
import {
  ge
} from "B:/~BUN/root/chunk-51erc9xb.js";
import {
  F
} from "B:/~BUN/root/chunk-acd2tycn.js";
import {
  GC
} from "B:/~BUN/root/chunk-txdt16r9.js";
import {
  qn
} from "B:/~BUN/root/chunk-pet3tnhj.js";
import {
  Rs
} from "B:/~BUN/root/chunk-8sb89kt9.js";
import {
  fue
} from "B:/~BUN/root/chunk-g12nftwt.js";
import {
  Cr
} from "B:/~BUN/root/chunk-xpw4e8kb.js";
import {
  VC,
  cU
} from "B:/~BUN/root/chunk-b36qwjxy.js";
import {
  V,
  e,
  r
} from "B:/~BUN/root/chunk-qkvevvte.js";
import {
  Z
} from "B:/~BUN/root/chunk-08bth2fj.js";
import {
  se,
  R,
  g,
  N
} from "B:/~BUN/root/chunk-rnj6pcz5.js";
import {
  S
} from "B:/~BUN/root/chunk-yv67t8hr.js";
N();
N();

function q({
  onStashAndContinue: y,
  onCancel: p,
  cancelQuits: l
}) {
  let [T, A] = g(null), u = T !== null ? [...T.tracked, ...T.untracked] : [], [K, x] = g(!0), [L, c] = g(!1), [I, v] = g(null);
  R(() => {
    (async () => {
      try {
        let {
          cwd: o
        } = Cxt(), C = await jBt(o, La(o));
        A(C)
      } catch (o) {
        let C = o instanceof Error ? o.message : String(o);
        t(`Error getting changed files: ${C}`, {
          level: "error"
        }), v(o instanceof bu ? o.message : "Failed to get changed files")
      } finally {
        x(!1)
      }
    })()
  }, []);
  let b = async () => {
    c(!0);
    try {
      if (t("Stashing changes before teleport..."), !await rvr("Teleport auto-stash", Cxt())) {
        v("Failed to stash changes"), c(!1);
        return
      }
      t("Successfully stashed changes")
    } catch (a) {
      let o = a instanceof Error ? a.message : String(a);
      t(`Error stashing changes: ${o}`, {
        level: "error"
      }), v(a instanceof bu ? a.message : "Failed to stash changes"), c(!1);
      return
    }
    try {
      await y()
    } finally {
      c(!1)
    }
  };
  if (K) return e(s, {
    flexDirection: "column",
    padding: 1,
    children: r(s, {
      marginBottom: 1,
      children: [e(Rs, {}), r(n, {
        children: [" Checking git status", Z.ellipsis]
      })]
    })
  });
  if (I) return r(s, {
    flexDirection: "column",
    padding: 1,
    children: [r(n, {
      bold: !0,
      color: "error",
      children: ["Error: ", I]
    }), e(s, {
      marginTop: 1,
      children: e(n, {
        dimColor: !0,
        children: e(F, {
          chord: "escape",
          action: "cancel",
          bold: !0
        })
      })
    })]
  });
  let i = u.length > 8,
    h = L && !l;
  return r(ge, {
    title: "Working directory has changes",
    onCancel: h ? Te : p,
    exitOnCtrlCD: l || h,
    inputGuide: h ? "Teleport continues when the stash finishes\u2026" : void 0,
    children: [e(n, {
      children: "Teleport will switch git branches. The following changes were found:"
    }), e(s, {
      flexDirection: "column",
      paddingLeft: 2,
      children: u.length > 0 ? i ? r(n, {
        children: [u.length, " files changed"]
      }) : u.map((a, o) => e(n, {
        children: a
      }, o)) : e(Cr, {
        children: "No changes detected"
      })
    }), e(n, {
      children: "Would you like to stash these changes and continue with teleport?"
    }), L ? r(s, {
      children: [e(Rs, {}), e(n, {
        children: " Stashing changes..."
      })]
    }) : e(qn, {
      confirmLabel: "Stash changes and continue",
      cancelLabel: l ? "Exit" : "Cancel",
      onConfirm: () => void b(),
      onCancel: p
    })]
  }, h ? "stashing" : "asking")
}

function Te() {}

function be() {
  return yo(0)
}
var _ = new Set;

function n2t(y) {
  let i = w(32),
    {
      onComplete: p,
      onCancel: l,
      errorsToIgnore: T,
      isStandalone: A
    } = y,
    u = T === void 0 ? _ : T,
    K = A === void 0 ? !1 : A,
    [x, L] = g(null),
    [c, I] = g(!1),
    v = ol(),
    {
      credentials: b
    } = ke(),
    h;
  if (i[0] !== b || i[1] !== u || i[2] !== p) h = async () => {
    let a = await ZZt(b);
    let C = new Set(Array.from(a).filter((o) => !u.has(o)));
    if (C.size === 0) {
      p();
      return
    }
    if (C.has("needsLogin")) L("needsLogin");
    else if (C.has("needsGitStash")) L("needsGitStash")
  }, i[0] = b, i[1] = u, i[2] = p, i[3] = h;
  else h = i[3];
  let d = h,
    ce, de;
  if (i[4] !== d) ce = () => {
    d()
  }, de = [d], i[4] = d, i[5] = ce, i[6] = de;
  else ce = i[5], de = i[6];
  R(ce, de);
  let m = l === void 0,
    f = l ?? be,
    me;
  if (i[7] !== d) me = () => {
    I(!1), d()
  }, i[7] = d, i[8] = me;
  else me = i[8];
  let B = me,
    pe;
  if (i[9] === S) pe = () => {
    I(!0)
  }, i[9] = pe;
  else pe = i[9];
  let Fe = pe,
    ue;
  if (i[10] !== d) ue = () => d(), i[10] = d, i[11] = ue;
  else ue = i[11];
  let z = ue,
    {
      entries: Y,
      exitState: fe
    } = YJe(l, void 0, l !== void 0 && c);
  const J = K && x === "needsGitStash";
  let he;
  if (i[12] !== J) he = {
    context: "Confirmation",
    isActive: J
  }, i[12] = J, i[13] = he;
  else he = i[13];
  if (ze("confirm:no", f, he), !x) {
    return null
  }
  switch (x) {
    case "needsGitStash": {
      let E;
      if (i[14] !== m || i[15] !== z || i[16] !== f) E = e(q, {
        onStashAndContinue: z,
        onCancel: f,
        cancelQuits: m
      }), i[14] = m, i[15] = z, i[16] = f, i[17] = E;
      else E = i[17];
      return E
    }
    case "needsLogin": {
      const E = v ? cU : VC;
      let Ce;
      if (i[18] !== B || i[19] !== E) Ce = e(fue, {
        onDone: B,
        mode: "login",
        forceLoginMethod: "claudeai",
        urlOutdent: E
      }), i[18] = B, i[19] = E, i[20] = Ce;
      else Ce = i[20];
      let M = Ce;
      const U = c ? B : f;
      const X = fe.pending ? `Press ${fe.keyName} again to cancel` : void 0;
      let Q;
      if (i[21] !== m || i[22] !== c || i[23] !== Y || i[24] !== f || i[25] !== M) Q = c ? m ? M : e(GC, {
        claimFocus: !0,
        flexDirection: "column",
        bindings: Y,
        children: M
      }) : r(V, {
        children: [r(s, {
          flexDirection: "column",
          children: [e(n, {
            dimColor: !0,
            children: "Teleport requires a Claude.ai account."
          }), e(n, {
            dimColor: !0,
            children: "Your Claude Pro/Max subscription will be used by Claude Code."
          })]
        }), e(qn, {
          confirmLabel: "Login with Claude account",
          cancelLabel: m ? "Exit" : "Cancel",
          onConfirm: Fe,
          onCancel: f
        })]
      }), i[21] = m, i[22] = c, i[23] = Y, i[24] = f, i[25] = M, i[26] = Q;
      else Q = i[26];
      let Se;
      if (i[27] !== m || i[28] !== U || i[29] !== X || i[30] !== Q) Se = e(ge, {
        title: "Log in to Claude",
        onCancel: U,
        exitOnCtrlCD: m,
        inputGuide: X,
        children: Q
      }), i[27] = m, i[28] = U, i[29] = X, i[30] = Q, i[31] = Se;
      else Se = i[31];
      return Se
    }
  }
}

function sqo(y, p) {
  return tje(y, [(l) => e(n2t, {
    errorsToIgnore: p,
    onComplete: () => l(),
    isStandalone: !0
  })], {
    session: j()
  })
}
export {
  n2t,
  sqo
};
