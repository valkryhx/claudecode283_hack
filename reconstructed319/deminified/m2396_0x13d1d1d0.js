// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { Kcn } from "B:/~BUN/root/chunk-game8aqv.js";
import { f } from "B:/~BUN/root/chunk-drx9cnw1.js";
import { mm, d } from "B:/~BUN/root/chunk-y2g9f85n.js";
import { l } from "B:/~BUN/root/chunk-mb9chr1y.js";
import { ao } from "B:/~BUN/root/chunk-3z3yrbk4.js";
import { t } from "B:/~BUN/root/chunk-2pp12te6.js";
import { gIs } from "B:/~BUN/root/chunk-1ks9vs37.js";
import { ct, tY } from "B:/~BUN/root/chunk-bkfncj77.js";
import { _e } from "B:/~BUN/root/chunk-4vxp7kvb.js";
import { ta } from "B:/~BUN/root/chunk-1s0yt4vj.js";
import { t2n } from "B:/~BUN/root/chunk-1x03q1j7.js";
import { c8e } from "B:/~BUN/root/chunk-27h4st9h.js";
import { S } from "B:/~BUN/root/chunk-bn4bjw9d.js";
import { s, n } from "B:/~BUN/root/chunk-qey16aan.js";
import { pt } from "B:/~BUN/root/chunk-v95bwhaa.js";
import { Y } from "B:/~BUN/root/chunk-c1v460b9.js";
import { Re } from "B:/~BUN/root/chunk-qr2xxkqa.js";
import { As } from "B:/~BUN/root/chunk-q8sf8fhe.js";
import { wi } from "B:/~BUN/root/chunk-hfz1e87n.js";
import { Ze } from "B:/~BUN/root/chunk-cpzw87wr.js";
import { Ce } from "B:/~BUN/root/chunk-cync0e08.js";
import { Oa } from "B:/~BUN/root/chunk-rzvkfy4m.js";
import { So } from "B:/~BUN/root/chunk-r9p4g17h.js";
import { m6n } from "B:/~BUN/root/chunk-hr0t9ny0.js";
import { sx } from "B:/~BUN/root/chunk-w3jccevj.js";
import { gt } from "B:/~BUN/root/chunk-sx03ea6s.js";
import { ne, e, r } from "B:/~BUN/root/chunk-t16eynda.js";
import { ue, O, y, j } from "B:/~BUN/root/chunk-czy5r8bc.js";
import { w } from "B:/~BUN/root/chunk-4qfwb3rf.js";
j();
j();
function J(x) {
  let _ = S(7),
    [isResuming, R] = y(!1),
    [error_2, I] = y(null),
    [selectedSession, p] = y(null),
    T;
  if (_[0] !== x) T = async k => {
    R(!0), I(null), p(k), l("tengu_teleport_resume_session", {
      source: f(x),
      session_id: _e(k.id)
    });
    ;
    try {
      let b = await ao("teleport_resume", () => c8e(k.id));
      return Kcn({
        sessionId: k.id
      }), R(!1), b;
    } catch (error) {
      let a = error;
      let L = {
        message: a instanceof mm ? a.message : d(a),
        formattedMessage: a instanceof mm ? a.formattedMessage : void 0,
        isOperationError: a instanceof mm
      };
      return I(L), R(!1), null;
    }
  }, _[0] = x, _[1] = T;else T = _[1];
  let resumeSession = T,
    c;
  if (_[2] !== error_2 || _[3] !== isResuming || _[4] !== resumeSession || _[5] !== selectedSession) c = {
    resumeSession: resumeSession,
    isResuming: isResuming,
    error: error_2,
    selectedSession: selectedSession
  }, _[2] = error_2, _[3] = isResuming, _[4] = resumeSession, _[5] = selectedSession, _[6] = c;else c = _[6];
  return c;
}
j();
var ge = "Updated",
  xe = "Origin",
  Te = "Remote Control",
  ie = Math.max(xe.length, Te.length),
  N = "  ";
function le({
  onSelect: onSelect,
  onCancel: onCancel,
  isEmbedded = !1,
  onSettingsReload: onSettingsReload
}) {
  let {
      rows: rows,
      columns: columns
    } = As(Re()),
    [p, _] = y([]),
    [T, k] = y(null),
    [c, b] = y(!0),
    [a, L] = y(null),
    [M, Q] = y(null),
    [de, G] = y(!1),
    [q, H] = y(!1),
    [P, W] = y(1),
    children = wi("confirm:no", "Confirmation", "Esc"),
    D = ue(async () => {
      try {
        b(!0), L(null);
        let o = await t2n();
        k(o), t(`Current repository: ${o || "not detected"}`);
        let m = await gIs(),
          h = m;
        if (o) h = m.filter(item => {
          if (!item.repo) return !1;
          return `${item.repo.owner.login}/${item.repo.name}` === o;
        }), t(`Filtered ${h.length} sessions for repo ${o} from ${m.length} total`);
        let re = [...h].sort((itemA, itemB) => {
          let date = new Date(itemA.updated_at);
          return new Date(itemB.updated_at).getTime() - date.getTime();
        });
        _(re);
      } catch (error) {
        let m = error instanceof Error ? error.message : String(error);
        if (t(`Error loading code sessions: ${m}`), error instanceof Error && error.name === "CloudSessionAccessError") Q(error.message), L("refused");else L(Ne(m));
      } finally {
        b(!1), G(!1);
      }
    }, []),
    X = () => {
      G(!0), D();
    };
  pt("confirm:no", onCancel, {
    context: "Confirmation"
  });
  function onKeyDown(o) {
    if (o.ctrl && o.key === "c") {
      o.preventDefault(), onCancel();
      return;
    }
    if (o.ctrl && o.key === "r" && a) {
      o.preventDefault(), X();
      return;
    }
    if (a !== null && o.key === "return") o.preventDefault(), onCancel();
  }
  let onComplete = ue(() => {
    H(!0), D();
  }, [H, D]);
  if (!q) return e(m6n, {
    onComplete: onComplete,
    onCancel: isEmbedded ? onCancel : void 0,
    onSettingsReload: onSettingsReload
  });
  if (c) return e(s, {
    flexDirection: "column",
    padding: 1,
    tabIndex: 0,
    autoFocus: !0,
    onKeyDown: onKeyDown,
    children: e(So, {
      message: "Loading Claude Code sessions\u2026",
      bold: !0,
      subtitle: de ? "Retrying\u2026" : "Fetching your Claude Code sessions\u2026"
    })
  });
  if (a) return r(s, {
    flexDirection: "column",
    padding: 1,
    tabIndex: 0,
    autoFocus: !0,
    onKeyDown: onKeyDown,
    children: [e(n, {
      bold: !0,
      color: "error",
      children: "Error loading Claude Code sessions"
    }), Oe(a, M), r(n, {
      dimColor: !0,
      children: ["Press ", e(n, {
        bold: !0,
        children: "Ctrl+R"
      }), " to retry \xB7 Press", " ", e(n, {
        bold: !0,
        children: children
      }), " to cancel"]
    })]
  });
  if (p.length === 0) return r(s, {
    flexDirection: "column",
    padding: 1,
    tabIndex: 0,
    autoFocus: !0,
    onKeyDown: onKeyDown,
    children: [r(n, {
      bold: !0,
      children: ["No Claude Code sessions found", T && r(n, {
        children: [" for ", T]
      })]
    }), e(s, {
      marginTop: 1,
      children: r(n, {
        dimColor: !0,
        children: ["Press ", e(n, {
          bold: !0,
          children: children
        }), " to cancel"]
      })
    })]
  });
  let U = p.map(item => ({
      ...item,
      timeString: tY(new Date(item.updated_at))
    })),
    A = Math.max(ge.length, ...U.map(item => item.timeString.length)),
    Z = p.some(item => item.environment_kind === "bridge"),
    ye = Z ? ie + N.length : 0,
    me = String(p.length).length + 2,
    Ee = columns - 4 - me - A - N.length - ye,
    options = U.map(({
      timeString: timeString,
      title: title,
      id: h,
      environment_kind: environment_kind
    }) => {
      let v = timeString.padEnd(A, " ");
      return {
        label: r(ne, {
          children: [v, N, Z && r(ne, {
            children: [e(n, {
              dimColor: !0,
              children: (environment_kind === "bridge" ? Te : "").padEnd(ie, " ")
            }), N]
          }), ct(ta(title).replace(/\s+/g, " ").trim(), Ee)]
        }),
        value: h
      };
    }),
    ee = 7,
    visibleOptionCount = Math.max(1, isEmbedded ? Math.min(p.length, 5, rows - 6 - ee) : Math.min(p.length, rows - 1 - ee)),
    height = visibleOptionCount + ee,
    we = p.length > visibleOptionCount;
  return r(s, {
    flexDirection: "column",
    padding: 1,
    height: height,
    tabIndex: 0,
    autoFocus: !0,
    onKeyDown: onKeyDown,
    children: [r(n, {
      bold: !0,
      children: ["Select a session to resume", we && r(n, {
        dimColor: !0,
        children: [" ", "(", P, " of ", p.length, ")"]
      }), T && r(n, {
        dimColor: !0,
        children: [" (", T, ")"]
      }), ":"]
    }), r(s, {
      flexDirection: "column",
      marginTop: 1,
      flexGrow: 1,
      children: [e(s, {
        marginLeft: 2 + me,
        children: r(n, {
          bold: !0,
          children: [ge.padEnd(A, " "), N, Z && xe.padEnd(ie, " ") + N, "Session Title"]
        })
      }), e(Ze, {
        visibleOptionCount: visibleOptionCount,
        options: options,
        onChange: o => {
          let m = p.find(item => item.id === o);
          if (m) onSelect(m);
        },
        onFocus: o => {
          let m = options.findIndex(item => item.value === o);
          if (m >= 0) W(m + 1);
        }
      })]
    }), e(s, {
      flexDirection: "row",
      children: e(n, {
        dimColor: !0,
        children: r(Ce, {
          children: [e(Y, {
            chord: ["up", "down"],
            action: "select"
          }), e(Y, {
            chord: "enter",
            action: "confirm"
          }), e(gt, {
            action: "confirm:no",
            context: "Confirmation",
            fallback: "Esc",
            description: "cancel"
          })]
        })
      })
    })]
  });
}
function Ne(x) {
  let i = x.toLowerCase();
  if (i.includes("fetch") || i.includes("network") || i.includes("timeout")) return "network";
  if (i.includes("auth") || i.includes("token") || i.includes("permission") || i.includes("oauth") || i.includes("not authenticated") || i.includes("/login") || i.includes("console account") || i.includes("403")) return "auth";
  if (i.includes("api") || i.includes("rate limit") || i.includes("500") || i.includes("529")) return "api";
  return "other";
}
function Oe(x, children_2) {
  switch (x) {
    case "refused":
      return e(s, {
        marginY: 1,
        flexDirection: "column",
        children: e(n, {
          dimColor: !0,
          children: children_2
        })
      });
    case "network":
      return e(s, {
        marginY: 1,
        flexDirection: "column",
        children: e(n, {
          dimColor: !0,
          children: "Check your internet connection"
        })
      });
    case "auth":
      return r(s, {
        marginY: 1,
        flexDirection: "column",
        children: [e(n, {
          dimColor: !0,
          children: "Teleport requires a Claude account"
        }), r(n, {
          dimColor: !0,
          children: ["Run ", e(n, {
            bold: !0,
            children: "/login"
          }), ' and select "Claude account with subscription"']
        })]
      });
    case "api":
      return e(s, {
        marginY: 1,
        flexDirection: "column",
        children: e(n, {
          dimColor: !0,
          children: "Sorry, Claude encountered an error"
        })
      });
    case "other":
      return e(s, {
        marginY: 1,
        flexDirection: "row",
        children: e(n, {
          dimColor: !0,
          children: "Sorry, Claude Code encountered an error"
        })
      });
  }
}
function xzt(x) {
  let a = S(31),
    {
      onComplete: onComplete_2,
      onCancel: onCancel_2,
      onError: onError,
      isEmbedded: isEmbedded_2,
      source: source,
      onSettingsReload: onSettingsReload_2
    } = x,
    isEmbedded_3 = isEmbedded_2 === void 0 ? !1 : isEmbedded_2,
    {
      resumeSession: resumeSession_2,
      isResuming: isResuming_2,
      error: error_3,
      selectedSession: selectedSession_2
    } = J(source),
    L,
    M;
  if (a[0] !== source) L = () => {
    l("tengu_teleport_started", {
      source: f(source)
    });
  }, M = [source], a[0] = source, a[1] = L, a[2] = M;else L = a[1], M = a[2];
  O(L, M);
  let Q;
  if (a[3] !== error_3 || a[4] !== onComplete_2 || a[5] !== onError || a[6] !== resumeSession_2) Q = async de => {
    let G = await resumeSession_2(de);
    if (G) onComplete_2(G);else if (error_3) {
      if (onError) onError(error_3.message, error_3.formattedMessage);
    }
  }, a[3] = error_3, a[4] = onComplete_2, a[5] = onError, a[6] = resumeSession_2, a[7] = Q;else Q = a[7];
  let onSelect_2 = Q,
    H;
  if (a[8] !== onCancel_2) H = () => {
    l("tengu_teleport_cancelled", {}), onCancel_2();
  }, a[8] = onCancel_2, a[9] = H;else H = a[9];
  let onCancel_3 = H;
  const isActive = !!error_3 && !onError;
  let z;
  if (a[10] !== isActive) z = {
    context: "Global",
    isActive: isActive
  }, a[10] = isActive, a[11] = z;else z = a[11];
  pt("app:interrupt", onCancel_3, z);
  let isActive_2;
  if (a[12] !== error_3 || a[13] !== onError) isActive_2 = !!error_3 && !onError && sx(), a[12] = error_3, a[13] = onError, a[14] = isActive_2;else isActive_2 = a[14];
  let X;
  if (a[15] !== isActive_2) X = {
    context: "Confirmation",
    isActive: isActive_2
  }, a[15] = isActive_2, a[16] = X;else X = a[16];
  if (pt("confirm:no", onCancel_3, X), isResuming_2 && selectedSession_2) {
    let g;
    if (a[17] === w) g = r(s, {
      flexDirection: "row",
      children: [e(Oa, {}), e(n, {
        bold: !0,
        children: "Resuming session\u2026"
      })]
    }), a[17] = g;else g = a[17];
    let E;
    if (a[18] !== selectedSession_2.title) E = r(s, {
      flexDirection: "column",
      padding: 1,
      children: [g, r(n, {
        dimColor: !0,
        children: ['Loading "', selectedSession_2.title, '"\u2026']
      })]
    }), a[18] = selectedSession_2.title, a[19] = E;else E = a[19];
    return E;
  }
  if (error_3 && !onError) {
    let g;
    if (a[20] === w) g = e(n, {
      bold: !0,
      color: "error",
      children: "Failed to resume session"
    }), a[20] = g;else g = a[20];
    let E;
    if (a[21] !== error_3.message) E = e(n, {
      dimColor: !0,
      children: error_3.message
    }), a[21] = error_3.message, a[22] = E;else E = a[22];
    let U;
    if (a[23] === w) U = e(s, {
      marginTop: 1,
      children: e(n, {
        dimColor: !0,
        italic: !0,
        children: e(Y, {
          chord: "escape",
          action: "cancel"
        })
      })
    }), a[23] = U;else U = a[23];
    let A;
    if (a[24] !== E) A = r(s, {
      flexDirection: "column",
      padding: 1,
      children: [g, E, U]
    }), a[24] = E, a[25] = A;else A = a[25];
    return A;
  }
  let g;
  if (a[26] !== onCancel_3 || a[27] !== onSelect_2 || a[28] !== isEmbedded_3 || a[29] !== onSettingsReload_2) g = e(le, {
    onSelect: onSelect_2,
    onCancel: onCancel_3,
    isEmbedded: isEmbedded_3,
    onSettingsReload: onSettingsReload_2
  }), a[26] = onCancel_3, a[27] = onSelect_2, a[28] = isEmbedded_3, a[29] = onSettingsReload_2, a[30] = g;else g = a[30];
  return g;
}
export { xzt };