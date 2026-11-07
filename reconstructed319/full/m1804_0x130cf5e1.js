// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  mm
} from "B:/~BUN/root/chunk-y2g9f85n.js";
import {
  H
} from "B:/~BUN/root/chunk-game8aqv.js";
import {
  t
} from "B:/~BUN/root/chunk-2pp12te6.js";
import {
  rd
} from "B:/~BUN/root/chunk-1s0yt4vj.js";
import {
  OSt
} from "B:/~BUN/root/chunk-1g25msn4.js";
import {
  jOn
} from "B:/~BUN/root/chunk-cxcakgnv.js";
import {
  iRn,
  Tts,
  aa
} from "B:/~BUN/root/chunk-27h4st9h.js";
import {
  re
} from "B:/~BUN/root/chunk-xkw95p5n.js";
import {
  S
} from "B:/~BUN/root/chunk-bn4bjw9d.js";
import {
  Bl
} from "B:/~BUN/root/chunk-q8sf8fhe.js";
import {
  Fe
} from "B:/~BUN/root/chunk-vxjrk7vf.js";
import {
  s,
  n,
  Vr
} from "B:/~BUN/root/chunk-qey16aan.js";
import {
  pt
} from "B:/~BUN/root/chunk-v95bwhaa.js";
import {
  FEt
} from "B:/~BUN/root/chunk-96cvq31w.js";
import {
  Rvt
} from "B:/~BUN/root/chunk-wb281zpj.js";
import {
  OGt
} from "B:/~BUN/root/chunk-x2k0mb6b.js";
import {
  n_,
  ke
} from "B:/~BUN/root/chunk-bvcekd4j.js";
import {
  Y
} from "B:/~BUN/root/chunk-c1v460b9.js";
import {
  Jn
} from "B:/~BUN/root/chunk-yd5nr5hc.js";
import {
  Oa
} from "B:/~BUN/root/chunk-rzvkfy4m.js";
import {
  $ot,
  bUe
} from "B:/~BUN/root/chunk-9capcwwy.js";
import {
  sUe
} from "B:/~BUN/root/chunk-h1gvz23d.js";
import {
  Pzt
} from "B:/~BUN/root/chunk-nrpn88d7.js";
import {
  bs
} from "B:/~BUN/root/chunk-s4zq7e5r.js";
import {
  fv,
  TP
} from "B:/~BUN/root/chunk-w2rkhp43.js";
import {
  ne,
  e,
  r
} from "B:/~BUN/root/chunk-t16eynda.js";
import {
  ue,
  O,
  y,
  j
} from "B:/~BUN/root/chunk-czy5r8bc.js";
import {
  w
} from "B:/~BUN/root/chunk-4qfwb3rf.js";
j();
j();

function M({
  onStashAndContinue: p,
  onCancel: a,
  cancelQuits: i
}) {
  let [d, f] = y(null), u = d !== null ? [...d.tracked, ...d.untracked] : [], [E, D] = y(!0), [h, x] = y(!1), [C, L] = y(null);
  O(() => {
    (async () => {
      try {
        let {
          cwd: l
        } = iRn(), v = await OSt(l, rd(l, void 0, {
          userLocale: !0
        }));
        f(v)
      } catch (l) {
        let v = l instanceof Error ? l.message : String(l);
        t(`Error getting changed files: ${v}`, {
          level: "error"
        }), L(l instanceof mm ? l.message : "Failed to get changed files")
      } finally {
        D(!1)
      }
    })()
  }, []);
  let K = async () => {
    x(!0);
    try {
      if (t("Stashing changes before teleport..."), !await Tts("Teleport auto-stash", iRn())) {
        L("Failed to stash changes"), x(!1);
        return
      }
      t("Successfully stashed changes")
    } catch (o) {
      let l = o instanceof Error ? o.message : String(o);
      t(`Error stashing changes: ${l}`, {
        level: "error"
      }), L(o instanceof mm ? o.message : "Failed to stash changes"), x(!1);
      return
    }
    try {
      await p()
    } finally {
      x(!1)
    }
  };
  if (E) return e(s, {
    flexDirection: "column",
    padding: 1,
    children: r(s, {
      marginBottom: 1,
      children: [e(Oa, {}), r(n, {
        children: [" Checking git status", re.ellipsis]
      })]
    })
  });
  if (C) return r(s, {
    flexDirection: "column",
    padding: 1,
    children: [r(n, {
      bold: !0,
      color: "error",
      children: ["Error: ", C]
    }), e(s, {
      marginTop: 1,
      children: e(n, {
        dimColor: !0,
        children: e(Y, {
          chord: "escape",
          action: "cancel",
          bold: !0
        })
      })
    })]
  });
  let b = u.length > 8,
    g = h && !i;
  return r(ke, {
    title: "Working directory has changes",
    onCancel: g ? we : a,
    exitOnCtrlCD: i || g,
    inputGuide: g ? "Teleport continues when the stash finishes\u2026" : void 0,
    children: [e(n, {
      children: "Teleport will switch git branches. The following changes were found:"
    }), e(s, {
      flexDirection: "column",
      paddingLeft: 2,
      children: u.length > 0 ? b ? r(n, {
        children: [u.length, " files changed"]
      }) : u.map((o, l) => e(n, {
        children: o
      }, l)) : e(bs, {
        children: "No changes detected"
      })
    }), e(n, {
      children: "Would you like to stash these changes and continue with teleport?"
    }), h ? r(s, {
      children: [e(Oa, {}), e(n, {
        children: " Stashing changes..."
      })]
    }) : e(Jn, {
      confirmLabel: "Stash changes and continue",
      cancelLabel: i ? "Exit" : "Cancel",
      onConfirm: () => void K(),
      onCancel: a
    })]
  }, g ? "stashing" : "asking")
}

function we() {}

function He() {
  return aa(0)
}
var ee = new Set;

function m6n(p) {
  let o = S(38),
    {
      onComplete: a,
      onCancel: i,
      errorsToIgnore: d,
      isStandalone: f,
      onSettingsReload: u
    } = p,
    E = d === void 0 ? ee : d,
    D = f === void 0 ? !1 : f,
    [h, x] = y(null),
    [C, L] = y(!1),
    K = Bl(),
    {
      storageV5: b,
      credentials: g
    } = Fe(),
    l;
  if (o[0] !== g || o[1] !== E || o[2] !== a) l = async () => {
    let v = await jOn(g, E);
    if (v.size === 0) {
      a();
      return
    }
    if (v.has("needsLogin")) x("needsLogin");
    else if (v.has("needsGitStash")) x("needsGitStash")
  }, o[0] = g, o[1] = E, o[2] = a, o[3] = l;
  else l = o[3];
  let m = l,
    fe, he;
  if (o[4] !== m) fe = () => {
    m()
  }, he = [m], o[4] = m, o[5] = fe, o[6] = he;
  else fe = o[5], he = o[6];
  O(fe, he);
  let c = i === void 0,
    T = i ?? He,
    Ce;
  if (o[7] !== m) Ce = () => {
    L(!1), m()
  }, o[7] = m, o[8] = Ce;
  else Ce = o[8];
  let G = Ce,
    Se;
  if (o[9] !== c || o[10] !== g || o[11] !== u || o[12] !== b) Se = () => {
    let Me = $ot({
      showSecurityDialog: c ? void 0 : sUe,
      storageV5: b,
      credentials: g
    });
    u?.(Me)
  }, o[9] = c, o[10] = g, o[11] = u, o[12] = b, o[13] = Se;
  else Se = o[13];
  let V = Se,
    Te;
  if (o[14] === w) Te = () => {
    L(!0)
  }, o[14] = Te;
  else Te = o[14];
  let Qe = Te,
    ye;
  if (o[15] !== m) ye = () => m(), o[15] = m, o[16] = ye;
  else ye = o[16];
  let X = ye,
    {
      entries: J,
      exitState: Ee
    } = OGt(i, void 0, i !== void 0 && C);
  const U = D && h === "needsGitStash";
  let xe;
  if (o[17] !== U) xe = {
    context: "Confirmation",
    isActive: U
  }, o[17] = U, o[18] = xe;
  else xe = o[18];
  if (pt("confirm:no", T, xe), !h) {
    return null
  }
  switch (h) {
    case "needsGitStash": {
      let I;
      if (o[19] !== c || o[20] !== X || o[21] !== T) I = e(M, {
        onStashAndContinue: X,
        onCancel: T,
        cancelQuits: c
      }), o[19] = c, o[20] = X, o[21] = T, o[22] = I;
      else I = o[22];
      return I
    }
    case "needsLogin": {
      const I = K ? TP : fv;
      let ve;
      if (o[23] !== G || o[24] !== V || o[25] !== I) ve = e(bUe, {
        onDone: G,
        onOrgDocumentsReload: V,
        mode: "login",
        forceLoginMethod: "claudeai",
        urlOutdent: I
      }), o[23] = G, o[24] = V, o[25] = I, o[26] = ve;
      else ve = o[26];
      let B = ve;
      const Z = C ? G : T;
      const _ = Ee.pending ? `Press ${Ee.keyName} again to cancel` : void 0;
      let A;
      if (o[27] !== c || o[28] !== C || o[29] !== J || o[30] !== T || o[31] !== B) A = C ? c ? B : e(n_, {
        claimFocus: !0,
        flexDirection: "column",
        bindings: J,
        children: B
      }) : r(ne, {
        children: [r(s, {
          flexDirection: "column",
          children: [e(n, {
            dimColor: !0,
            children: "Teleport requires a Claude.ai account."
          }), e(n, {
            dimColor: !0,
            children: "Your Claude subscription will be used by Claude Code."
          })]
        }), e(Jn, {
          confirmLabel: "Login with Claude account",
          cancelLabel: c ? "Exit" : "Cancel",
          onConfirm: Qe,
          onCancel: T
        })]
      }), o[27] = c, o[28] = C, o[29] = J, o[30] = T, o[31] = B, o[32] = A;
      else A = o[32];
      let Le;
      if (o[33] !== c || o[34] !== Z || o[35] !== _ || o[36] !== A) Le = e(ke, {
        title: "Log in to Claude",
        onCancel: Z,
        exitOnCtrlCD: c,
        inputGuide: _,
        children: A
      }), o[33] = c, o[34] = Z, o[35] = _, o[36] = A, o[37] = Le;
      else Le = o[37];
      return Le
    }
  }
}
var de = 5000;

function n3s(p) {
  let d = S(5),
    {
      reload: a,
      onDone: i
    } = p;
  Vr(i, de);
  let f, u;
  if (d[0] !== i || d[1] !== a) f = () => {
    let E = !0;
    let D = () => {
      if (E) i()
    };
    return a.then(D, D), () => {
      E = !1
    }
  }, u = [a, i], d[0] = i, d[1] = a, d[2] = f, d[3] = u;
  else f = d[2], u = d[3];
  O(f, u);
  let h;
  if (d[4] === w) h = e(s, {
    paddingX: 1,
    children: e(n, {
      dimColor: !0,
      children: "Loading your organization's managed settings\u2026"
    })
  }), d[4] = h;
  else h = d[4];
  return h
}

function csa(p) {
  return FEt({
    interactive: !0,
    afterSignIn: !0,
    showBlockedScreen: () => import("B:/~BUN/root/chunk-wtw7wza8.js").then((a) => a.showOrgConfigBlockedScreen, () => {
      return
    }),
    printMessage: async (a) => {
      let {
        endInkWithError: i
      } = await import("B:/~BUN/root/chunk-bcz5xc5y.js");
      await i(p, a)
    }
  })
}
async function Cma(p, a) {
  let i;
  if (await Rvt(p, [(d) => e(Pzt, {
      children: e(m6n, {
        errorsToIgnore: a,
        onComplete: () => d(),
        onSettingsReload: (f) => {
          i = f
        },
        isStandalone: !0
      })
    }), (d) => i === void 0 ? null : e(Pzt, {
      children: e(n3s, {
        reload: i,
        onDone: () => d()
      })
    })], {
      session: H()
    }), i !== void 0) await csa(p)
}
export {
  m6n,
  n3s,
  csa,
  Cma
};
