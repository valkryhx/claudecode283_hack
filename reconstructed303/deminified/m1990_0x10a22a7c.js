// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { Qjt } from "B:/~BUN/root/chunk-rpez7z7a.js";
import { c } from "B:/~BUN/root/chunk-jthpk6wv.js";
import { ap, d } from "B:/~BUN/root/chunk-3aez4b53.js";
import { i } from "B:/~BUN/root/chunk-1kfn24jp.js";
import { po } from "B:/~BUN/root/chunk-kzgf20y6.js";
import { t } from "B:/~BUN/root/chunk-6za2ez23.js";
import { cDo } from "B:/~BUN/root/chunk-hb6x4e3n.js";
import { mt, FW } from "B:/~BUN/root/chunk-pjgzz98k.js";
import { Ti } from "B:/~BUN/root/chunk-kad4nq7y.js";
import { W7e } from "B:/~BUN/root/chunk-m94tqsvv.js";
import { WHe } from "B:/~BUN/root/chunk-9grc6xh0.js";
import { w } from "B:/~BUN/root/chunk-rysqv8v1.js";
import { s, n } from "B:/~BUN/root/chunk-damrp3r8.js";
import { rt } from "B:/~BUN/root/chunk-pw5vpw1q.js";
import { q } from "B:/~BUN/root/chunk-bf7csy4f.js";
import { Te } from "B:/~BUN/root/chunk-smy4yvhm.js";
import { us } from "B:/~BUN/root/chunk-b900np4s.js";
import { Cs } from "B:/~BUN/root/chunk-cbtzavb5.js";
import { Xe } from "B:/~BUN/root/chunk-nbjke4gr.js";
import { Se } from "B:/~BUN/root/chunk-7dpyfa5r.js";
import { Ii } from "B:/~BUN/root/chunk-3cgpbmp2.js";
import { Wr } from "B:/~BUN/root/chunk-1rb7fvzn.js";
import { obn } from "B:/~BUN/root/chunk-51071p3t.js";
import { mT } from "B:/~BUN/root/chunk-91at02k2.js";
import { gt } from "B:/~BUN/root/chunk-vs438w4e.js";
import { Q, e, r } from "B:/~BUN/root/chunk-x2hkxw5q.js";
import { ae, P, y, B } from "B:/~BUN/root/chunk-5hr2ysa5.js";
import { ye } from "B:/~BUN/root/chunk-shj1mfyk.js";
import { S } from "B:/~BUN/root/chunk-ef0msk7r.js";
B();
B();
function J(h) {
  let C = w(8),
    [isResuming, R] = y(!1),
    [error_2, _] = y(null),
    [selectedSession, O] = y(null),
    G;
  if (C[0] !== h) G = async a => {
    R(!0), _(null), O(a), i("tengu_teleport_resume_session", {
      source: c(h),
      session_id: ye(a.id)
    });
    ;
    try {
      let m = await po("teleport_resume", () => WHe(a.id));
      return Qjt({
        sessionId: a.id
      }), R(!1), m;
    } catch (error) {
      let x = error;
      let H = {
        message: x instanceof ap ? x.message : d(x),
        formattedMessage: x instanceof ap ? x.formattedMessage : void 0,
        isOperationError: x instanceof ap
      };
      return _(H), R(!1), null;
    }
  }, C[0] = h, C[1] = G;else G = C[1];
  let resumeSession = G,
    T;
  if (C[2] === S) T = () => {
    _(null);
  }, C[2] = T;else T = C[2];
  let clearError = T,
    L;
  if (C[3] !== error_2 || C[4] !== isResuming || C[5] !== resumeSession || C[6] !== selectedSession) L = {
    resumeSession: resumeSession,
    isResuming: isResuming,
    error: error_2,
    selectedSession: selectedSession,
    clearError: clearError
  }, C[3] = error_2, C[4] = isResuming, C[5] = resumeSession, C[6] = selectedSession, C[7] = L;else L = C[7];
  return L;
}
B();
var fe = "Updated",
  ge = "Origin",
  xe = "Remote Control",
  le = Math.max(ge.length, xe.length),
  N = "  ";
function ce({
  onSelect: onSelect,
  onCancel: onCancel,
  isEmbedded = !1
}) {
  let {
      rows: rows,
      columns: columns
    } = us(Te()),
    [u, O] = y([]),
    [C, G] = y(null),
    [a, T] = y(!0),
    [m, x] = y(null),
    [H, k] = y(null),
    [X, L] = y(!1),
    [W, Y] = y(!1),
    [M, j] = y(1),
    children = Cs("confirm:no", "Confirmation", "Esc"),
    D = ae(async () => {
      try {
        T(!0), x(null);
        let o = await W7e();
        G(o), t(`Current repository: ${o || "not detected"}`);
        let f = await cDo(),
          E = f;
        if (o) E = f.filter(item => {
          if (!item.repo) return !1;
          return `${item.repo.owner.login}/${item.repo.name}` === o;
        }), t(`Filtered ${E.length} sessions for repo ${o} from ${f.length} total`);
        let te = [...E].sort((itemA, itemB) => {
          let date = new Date(itemA.updated_at);
          return new Date(itemB.updated_at).getTime() - date.getTime();
        });
        O(te);
      } catch (error) {
        let f = error instanceof Error ? error.message : String(error);
        if (t(`Error loading code sessions: ${f}`), error instanceof Error && error.name === "CloudSessionAccessError") k(error.message), x("refused");else x(Oe(f));
      } finally {
        T(!1), L(!1);
      }
    }, []),
    Z = () => {
      L(!0), D();
    };
  rt("confirm:no", onCancel, {
    context: "Confirmation"
  });
  function onKeyDown(o) {
    if (o.ctrl && o.key === "c") {
      o.preventDefault(), onCancel();
      return;
    }
    if (o.ctrl && o.key === "r" && m) {
      o.preventDefault(), Z();
      return;
    }
    if (m !== null && o.key === "return") {
      o.preventDefault(), onCancel();
      return;
    }
  }
  let onComplete = ae(() => {
    Y(!0), D();
  }, [Y, D]);
  if (!W) return e(obn, {
    onComplete: onComplete,
    onCancel: isEmbedded ? onCancel : void 0
  });
  if (a) return e(s, {
    flexDirection: "column",
    padding: 1,
    tabIndex: 0,
    autoFocus: !0,
    onKeyDown: onKeyDown,
    children: e(Wr, {
      message: "Loading Claude Code sessions\u2026",
      bold: !0,
      subtitle: X ? "Retrying\u2026" : "Fetching your Claude Code sessions\u2026"
    })
  });
  if (m) return r(s, {
    flexDirection: "column",
    padding: 1,
    tabIndex: 0,
    autoFocus: !0,
    onKeyDown: onKeyDown,
    children: [e(n, {
      bold: !0,
      color: "error",
      children: "Error loading Claude Code sessions"
    }), Pe(m, H), r(n, {
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
  if (u.length === 0) return r(s, {
    flexDirection: "column",
    padding: 1,
    tabIndex: 0,
    autoFocus: !0,
    onKeyDown: onKeyDown,
    children: [r(n, {
      bold: !0,
      children: ["No Claude Code sessions found", C && r(n, {
        children: [" for ", C]
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
  let U = u.map(item => ({
      ...item,
      timeString: FW(new Date(item.updated_at))
    })),
    A = Math.max(fe.length, ...U.map(item => item.timeString.length)),
    ee = u.some(item => item.environment_kind === "bridge"),
    Ee = ee ? le + N.length : 0,
    ue = String(u.length).length + 2,
    Re = columns - 4 - ue - A - N.length - Ee,
    options = U.map(({
      timeString: timeString,
      title: title,
      id: E,
      environment_kind: environment_kind
    }) => {
      let v = timeString.padEnd(A, " ");
      return {
        label: r(Q, {
          children: [v, N, ee && r(Q, {
            children: [e(n, {
              dimColor: !0,
              children: (environment_kind === "bridge" ? xe : "").padEnd(le, " ")
            }), N]
          }), mt(Ti(title).replace(/\s+/g, " ").trim(), Re)]
        }),
        value: E
      };
    }),
    oe = 7,
    visibleOptionCount = Math.max(1, isEmbedded ? Math.min(u.length, 5, rows - 6 - oe) : Math.min(u.length, rows - 1 - oe)),
    height = visibleOptionCount + oe,
    De = u.length > visibleOptionCount;
  return r(s, {
    flexDirection: "column",
    padding: 1,
    height: height,
    tabIndex: 0,
    autoFocus: !0,
    onKeyDown: onKeyDown,
    children: [r(n, {
      bold: !0,
      children: ["Select a session to resume", De && r(n, {
        dimColor: !0,
        children: [" ", "(", M, " of ", u.length, ")"]
      }), C && r(n, {
        dimColor: !0,
        children: [" (", C, ")"]
      }), ":"]
    }), r(s, {
      flexDirection: "column",
      marginTop: 1,
      flexGrow: 1,
      children: [e(s, {
        marginLeft: 2 + ue,
        children: r(n, {
          bold: !0,
          children: [fe.padEnd(A, " "), N, ee && ge.padEnd(le, " ") + N, "Session Title"]
        })
      }), e(Xe, {
        visibleOptionCount: visibleOptionCount,
        options: options,
        onChange: o => {
          let f = u.find(item => item.id === o);
          if (f) onSelect(f);
        },
        onFocus: o => {
          let f = options.findIndex(item => item.value === o);
          if (f >= 0) j(f + 1);
        }
      })]
    }), e(s, {
      flexDirection: "row",
      children: e(n, {
        dimColor: !0,
        children: r(Se, {
          children: [e(q, {
            chord: ["up", "down"],
            action: "select"
          }), e(q, {
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
function Oe(h) {
  let l = h.toLowerCase();
  if (l.includes("fetch") || l.includes("network") || l.includes("timeout")) return "network";
  if (l.includes("auth") || l.includes("token") || l.includes("permission") || l.includes("oauth") || l.includes("not authenticated") || l.includes("/login") || l.includes("console account") || l.includes("403")) return "auth";
  if (l.includes("api") || l.includes("rate limit") || l.includes("500") || l.includes("529")) return "api";
  return "other";
}
function Pe(h, children_2) {
  switch (h) {
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
function stt(h) {
  let m = w(30),
    {
      onComplete: onComplete_2,
      onCancel: onCancel_2,
      onError: onError,
      isEmbedded: isEmbedded_2,
      source: source
    } = h,
    isEmbedded_3 = isEmbedded_2 === void 0 ? !1 : isEmbedded_2,
    {
      resumeSession: resumeSession_2,
      isResuming: isResuming_2,
      error: error_3,
      selectedSession: selectedSession_2
    } = J(source),
    x,
    H;
  if (m[0] !== source) x = () => {
    i("tengu_teleport_started", {
      source: c(source)
    });
  }, H = [source], m[0] = source, m[1] = x, m[2] = H;else x = m[1], H = m[2];
  P(x, H);
  let k;
  if (m[3] !== error_3 || m[4] !== onComplete_2 || m[5] !== onError || m[6] !== resumeSession_2) k = async X => {
    let L = await resumeSession_2(X);
    if (L) onComplete_2(L);else if (error_3) {
      if (onError) onError(error_3.message, error_3.formattedMessage);
    }
  }, m[3] = error_3, m[4] = onComplete_2, m[5] = onError, m[6] = resumeSession_2, m[7] = k;else k = m[7];
  let onSelect_2 = k,
    Y;
  if (m[8] !== onCancel_2) Y = () => {
    i("tengu_teleport_cancelled", {}), onCancel_2();
  }, m[8] = onCancel_2, m[9] = Y;else Y = m[9];
  let onCancel_3 = Y;
  const isActive = !!error_3 && !onError;
  let z;
  if (m[10] !== isActive) z = {
    context: "Global",
    isActive: isActive
  }, m[10] = isActive, m[11] = z;else z = m[11];
  rt("app:interrupt", onCancel_3, z);
  let isActive_2;
  if (m[12] !== error_3 || m[13] !== onError) isActive_2 = !!error_3 && !onError && mT(), m[12] = error_3, m[13] = onError, m[14] = isActive_2;else isActive_2 = m[14];
  let Z;
  if (m[15] !== isActive_2) Z = {
    context: "Confirmation",
    isActive: isActive_2
  }, m[15] = isActive_2, m[16] = Z;else Z = m[16];
  if (rt("confirm:no", onCancel_3, Z), isResuming_2 && selectedSession_2) {
    let g;
    if (m[17] === S) g = r(s, {
      flexDirection: "row",
      children: [e(Ii, {}), e(n, {
        bold: !0,
        children: "Resuming session\u2026"
      })]
    }), m[17] = g;else g = m[17];
    let b;
    if (m[18] !== selectedSession_2.title) b = r(s, {
      flexDirection: "column",
      padding: 1,
      children: [g, r(n, {
        dimColor: !0,
        children: ['Loading "', selectedSession_2.title, '"\u2026']
      })]
    }), m[18] = selectedSession_2.title, m[19] = b;else b = m[19];
    return b;
  }
  if (error_3 && !onError) {
    let g;
    if (m[20] === S) g = e(n, {
      bold: !0,
      color: "error",
      children: "Failed to resume session"
    }), m[20] = g;else g = m[20];
    let b;
    if (m[21] !== error_3.message) b = e(n, {
      dimColor: !0,
      children: error_3.message
    }), m[21] = error_3.message, m[22] = b;else b = m[22];
    let U;
    if (m[23] === S) U = e(s, {
      marginTop: 1,
      children: e(n, {
        dimColor: !0,
        italic: !0,
        children: e(q, {
          chord: "escape",
          action: "cancel"
        })
      })
    }), m[23] = U;else U = m[23];
    let A;
    if (m[24] !== b) A = r(s, {
      flexDirection: "column",
      padding: 1,
      children: [g, b, U]
    }), m[24] = b, m[25] = A;else A = m[25];
    return A;
  }
  let g;
  if (m[26] !== onCancel_3 || m[27] !== onSelect_2 || m[28] !== isEmbedded_3) g = e(ce, {
    onSelect: onSelect_2,
    onCancel: onCancel_3,
    isEmbedded: isEmbedded_3
  }), m[26] = onCancel_3, m[27] = onSelect_2, m[28] = isEmbedded_3, m[29] = g;else g = m[29];
  return g;
}
export { stt };