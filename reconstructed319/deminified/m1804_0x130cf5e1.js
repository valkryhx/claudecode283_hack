// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { mm } from "B:/~BUN/root/chunk-y2g9f85n.js";
import { H } from "B:/~BUN/root/chunk-game8aqv.js";
import { t } from "B:/~BUN/root/chunk-2pp12te6.js";
import { rd } from "B:/~BUN/root/chunk-1s0yt4vj.js";
import { OSt } from "B:/~BUN/root/chunk-1g25msn4.js";
import { jOn } from "B:/~BUN/root/chunk-cxcakgnv.js";
import { iRn, Tts, aa } from "B:/~BUN/root/chunk-27h4st9h.js";
import { re } from "B:/~BUN/root/chunk-xkw95p5n.js";
import { S } from "B:/~BUN/root/chunk-bn4bjw9d.js";
import { Bl } from "B:/~BUN/root/chunk-q8sf8fhe.js";
import { Fe } from "B:/~BUN/root/chunk-vxjrk7vf.js";
import { s, n, Vr } from "B:/~BUN/root/chunk-qey16aan.js";
import { pt } from "B:/~BUN/root/chunk-v95bwhaa.js";
import { FEt } from "B:/~BUN/root/chunk-96cvq31w.js";
import { Rvt } from "B:/~BUN/root/chunk-wb281zpj.js";
import { OGt } from "B:/~BUN/root/chunk-x2k0mb6b.js";
import { n_, ke } from "B:/~BUN/root/chunk-bvcekd4j.js";
import { Y } from "B:/~BUN/root/chunk-c1v460b9.js";
import { Jn } from "B:/~BUN/root/chunk-yd5nr5hc.js";
import { Oa } from "B:/~BUN/root/chunk-rzvkfy4m.js";
import { $ot, bUe } from "B:/~BUN/root/chunk-9capcwwy.js";
import { sUe } from "B:/~BUN/root/chunk-h1gvz23d.js";
import { Pzt } from "B:/~BUN/root/chunk-nrpn88d7.js";
import { bs } from "B:/~BUN/root/chunk-s4zq7e5r.js";
import { fv, TP } from "B:/~BUN/root/chunk-w2rkhp43.js";
import { ne, e, r } from "B:/~BUN/root/chunk-t16eynda.js";
import { ue, O, y, j } from "B:/~BUN/root/chunk-czy5r8bc.js";
import { w } from "B:/~BUN/root/chunk-4qfwb3rf.js";
j();
j();
function M({
  onStashAndContinue: onStashAndContinue,
  onCancel: onCancel,
  cancelQuits: cancelQuits
}) {
  let [d, f] = y(null),
    u = d !== null ? [...d.tracked, ...d.untracked] : [],
    [E, D] = y(!0),
    [h, x] = y(!1),
    [C, L] = y(null);
  O(() => {
    (async () => {
      try {
        let {
            cwd: cwd
          } = iRn(),
          v = await OSt(cwd, rd(cwd, void 0, {
            userLocale: !0
          }));
        f(v);
      } catch (error) {
        let v = error instanceof Error ? error.message : String(error);
        t(`Error getting changed files: ${v}`, {
          level: "error"
        }), L(error instanceof mm ? error.message : "Failed to get changed files");
      } finally {
        D(!1);
      }
    })();
  }, []);
  let K = async () => {
    x(!0);
    try {
      if (t("Stashing changes before teleport..."), !(await Tts("Teleport auto-stash", iRn()))) {
        L("Failed to stash changes"), x(!1);
        return;
      }
      t("Successfully stashed changes");
    } catch (error) {
      let l = error instanceof Error ? error.message : String(error);
      t(`Error stashing changes: ${l}`, {
        level: "error"
      }), L(error instanceof mm ? error.message : "Failed to stash changes"), x(!1);
      return;
    }
    try {
      await onStashAndContinue();
    } finally {
      x(!1);
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
    g = h && !cancelQuits;
  return r(ke, {
    title: "Working directory has changes",
    onCancel: g ? we : onCancel,
    exitOnCtrlCD: cancelQuits || g,
    inputGuide: g ? "Teleport continues when the stash finishes\u2026" : void 0,
    children: [e(n, {
      children: "Teleport will switch git branches. The following changes were found:"
    }), e(s, {
      flexDirection: "column",
      paddingLeft: 2,
      children: u.length > 0 ? b ? r(n, {
        children: [u.length, " files changed"]
      }) : u.map((o, index) => e(n, {
        children: o
      }, index)) : e(bs, {
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
      cancelLabel: cancelQuits ? "Exit" : "Cancel",
      onConfirm: () => void K(),
      onCancel: onCancel
    })]
  }, g ? "stashing" : "asking");
}
function we() {}
function He() {
  return aa(0);
}
var ee = new Set();
function m6n(p) {
  let o = S(38),
    {
      onComplete: onComplete,
      onCancel: onCancel_2,
      errorsToIgnore: errorsToIgnore,
      isStandalone: isStandalone,
      onSettingsReload: onSettingsReload
    } = p,
    E = errorsToIgnore === void 0 ? ee : errorsToIgnore,
    D = isStandalone === void 0 ? !1 : isStandalone,
    [h, x] = y(null),
    [C, L] = y(!1),
    K = Bl(),
    {
      storageV5: storageV5,
      credentials: credentials
    } = Fe(),
    l;
  if (o[0] !== credentials || o[1] !== E || o[2] !== onComplete) l = async () => {
    let v = await jOn(credentials, E);
    if (v.size === 0) {
      onComplete();
      return;
    }
    if (v.has("needsLogin")) x("needsLogin");else if (v.has("needsGitStash")) x("needsGitStash");
  }, o[0] = credentials, o[1] = E, o[2] = onComplete, o[3] = l;else l = o[3];
  let m = l,
    fe,
    he;
  if (o[4] !== m) fe = () => {
    m();
  }, he = [m], o[4] = m, o[5] = fe, o[6] = he;else fe = o[5], he = o[6];
  O(fe, he);
  let c = onCancel_2 === void 0,
    onCancel_3 = onCancel_2 ?? He,
    Ce;
  if (o[7] !== m) Ce = () => {
    L(!1), m();
  }, o[7] = m, o[8] = Ce;else Ce = o[8];
  let onDone = Ce,
    Se;
  if (o[9] !== c || o[10] !== credentials || o[11] !== onSettingsReload || o[12] !== storageV5) Se = () => {
    let Me = $ot({
      showSecurityDialog: c ? void 0 : sUe,
      storageV5: storageV5,
      credentials: credentials
    });
    onSettingsReload?.(Me);
  }, o[9] = c, o[10] = credentials, o[11] = onSettingsReload, o[12] = storageV5, o[13] = Se;else Se = o[13];
  let onOrgDocumentsReload = Se,
    Te;
  if (o[14] === w) Te = () => {
    L(!0);
  }, o[14] = Te;else Te = o[14];
  let onConfirm = Te,
    ye;
  if (o[15] !== m) ye = () => m(), o[15] = m, o[16] = ye;else ye = o[16];
  let onStashAndContinue_2 = ye,
    {
      entries: J,
      exitState: exitState
    } = OGt(onCancel_2, void 0, onCancel_2 !== void 0 && C);
  const isActive = D && h === "needsGitStash";
  let xe;
  if (o[17] !== isActive) xe = {
    context: "Confirmation",
    isActive: isActive
  }, o[17] = isActive, o[18] = xe;else xe = o[18];
  if (pt("confirm:no", onCancel_3, xe), !h) {
    return null;
  }
  switch (h) {
    case "needsGitStash":
      {
        let I;
        if (o[19] !== c || o[20] !== onStashAndContinue_2 || o[21] !== onCancel_3) I = e(M, {
          onStashAndContinue: onStashAndContinue_2,
          onCancel: onCancel_3,
          cancelQuits: c
        }), o[19] = c, o[20] = onStashAndContinue_2, o[21] = onCancel_3, o[22] = I;else I = o[22];
        return I;
      }
    case "needsLogin":
      {
        const urlOutdent = K ? TP : fv;
        let ve;
        if (o[23] !== onDone || o[24] !== onOrgDocumentsReload || o[25] !== urlOutdent) ve = e(bUe, {
          onDone: onDone,
          onOrgDocumentsReload: onOrgDocumentsReload,
          mode: "login",
          forceLoginMethod: "claudeai",
          urlOutdent: urlOutdent
        }), o[23] = onDone, o[24] = onOrgDocumentsReload, o[25] = urlOutdent, o[26] = ve;else ve = o[26];
        let children = ve;
        const onCancel_4 = C ? onDone : onCancel_3;
        const inputGuide = exitState.pending ? `Press ${exitState.keyName} again to cancel` : void 0;
        let children_2;
        if (o[27] !== c || o[28] !== C || o[29] !== J || o[30] !== onCancel_3 || o[31] !== children) children_2 = C ? c ? children : e(n_, {
          claimFocus: !0,
          flexDirection: "column",
          bindings: J,
          children: children
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
            onConfirm: onConfirm,
            onCancel: onCancel_3
          })]
        }), o[27] = c, o[28] = C, o[29] = J, o[30] = onCancel_3, o[31] = children, o[32] = children_2;else children_2 = o[32];
        let Le;
        if (o[33] !== c || o[34] !== onCancel_4 || o[35] !== inputGuide || o[36] !== children_2) Le = e(ke, {
          title: "Log in to Claude",
          onCancel: onCancel_4,
          exitOnCtrlCD: c,
          inputGuide: inputGuide,
          children: children_2
        }), o[33] = c, o[34] = onCancel_4, o[35] = inputGuide, o[36] = children_2, o[37] = Le;else Le = o[37];
        return Le;
      }
  }
}
var de = 5000;
function n3s(p) {
  let d = S(5),
    {
      reload: reload,
      onDone: onDone_2
    } = p;
  Vr(onDone_2, de);
  let f, u;
  if (d[0] !== onDone_2 || d[1] !== reload) f = () => {
    let E = !0;
    let D = () => {
      if (E) onDone_2();
    };
    return reload.then(D, D), () => {
      E = !1;
    };
  }, u = [reload, onDone_2], d[0] = onDone_2, d[1] = reload, d[2] = f, d[3] = u;else f = d[2], u = d[3];
  O(f, u);
  let h;
  if (d[4] === w) h = e(s, {
    paddingX: 1,
    children: e(n, {
      dimColor: !0,
      children: "Loading your organization's managed settings\u2026"
    })
  }), d[4] = h;else h = d[4];
  return h;
}
function csa(p) {
  return FEt({
    interactive: !0,
    afterSignIn: !0,
    showBlockedScreen: () => import("B:/~BUN/root/chunk-wtw7wza8.js").then(a => a.showOrgConfigBlockedScreen, () => {
      return;
    }),
    printMessage: async a => {
      let {
        endInkWithError: endInkWithError
      } = await import("B:/~BUN/root/chunk-bcz5xc5y.js");
      await endInkWithError(p, a);
    }
  });
}
async function Cma(p, errorsToIgnore_2) {
  let reload_2;
  if (await Rvt(p, [d => e(Pzt, {
    children: e(m6n, {
      errorsToIgnore: errorsToIgnore_2,
      onComplete: () => d(),
      onSettingsReload: f => {
        reload_2 = f;
      },
      isStandalone: !0
    })
  }), d => reload_2 === void 0 ? null : e(Pzt, {
    children: e(n3s, {
      reload: reload_2,
      onDone: () => d()
    })
  })], {
    session: H()
  }), reload_2 !== void 0) await csa(p);
}
export { m6n, n3s, csa, Cma };