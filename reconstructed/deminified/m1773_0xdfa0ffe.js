// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { Ymt } from "B:/~BUN/root/chunk-4rk7cwxz.js";
import { c } from "B:/~BUN/root/chunk-kks4mj3w.js";
import { bu, l } from "B:/~BUN/root/chunk-bgthmgyc.js";
import { i } from "B:/~BUN/root/chunk-728mwbhs.js";
import { Or } from "B:/~BUN/root/chunk-51n463p1.js";
import { t } from "B:/~BUN/root/chunk-qe2zga5e.js";
import { DHr } from "B:/~BUN/root/chunk-gf53qpk6.js";
import { ot, iK } from "B:/~BUN/root/chunk-bpp59nyd.js";
import { li } from "B:/~BUN/root/chunk-bt3h0syz.js";
import { PUe } from "B:/~BUN/root/chunk-fct6vke8.js";
import { uke } from "B:/~BUN/root/chunk-3jyp964r.js";
import { w } from "B:/~BUN/root/chunk-x9hkq9y1.js";
import { s, n } from "B:/~BUN/root/chunk-1gn8pz4b.js";
import { ze } from "B:/~BUN/root/chunk-r2yrqvry.js";
import { F } from "B:/~BUN/root/chunk-acd2tycn.js";
import { ve } from "B:/~BUN/root/chunk-cxqcvpm0.js";
import { As } from "B:/~BUN/root/chunk-syke822n.js";
import { os } from "B:/~BUN/root/chunk-0d8a76zs.js";
import { Fe } from "B:/~BUN/root/chunk-bt71g93n.js";
import { ye } from "B:/~BUN/root/chunk-41008fhm.js";
import { Rs } from "B:/~BUN/root/chunk-8sb89kt9.js";
import { n2t } from "B:/~BUN/root/chunk-891etx74.js";
import { ur } from "B:/~BUN/root/chunk-ehewxxqw.js";
import { Xe } from "B:/~BUN/root/chunk-parcaazx.js";
import { nw } from "B:/~BUN/root/chunk-cdch6ag4.js";
import { V, e, r } from "B:/~BUN/root/chunk-qkvevvte.js";
import { se, R, g, N } from "B:/~BUN/root/chunk-rnj6pcz5.js";
import { _e } from "B:/~BUN/root/chunk-batgyebn.js";
import { S } from "B:/~BUN/root/chunk-yv67t8hr.js";
N();
N();
function z(E) {
  let x = w(8),
    [isResuming, D] = g(!1),
    [error_2, L] = g(null),
    [selectedSession, A] = g(null),
    H;
  if (x[0] !== E) H = async d => {
    D(!0), L(null), A(d), i("tengu_teleport_resume_session", {
      source: c(E),
      session_id: _e(d.id)
    });
    ;
    try {
      let m = await Or("teleport_resume", () => uke(d.id));
      return Ymt({
        sessionId: d.id
      }), D(!1), m;
    } catch (error) {
      let T = error;
      let W = {
        message: T instanceof bu ? T.message : l(T),
        formattedMessage: T instanceof bu ? T.formattedMessage : void 0,
        isOperationError: T instanceof bu
      };
      return L(W), D(!1), null;
    }
  }, x[0] = E, x[1] = H;else H = x[1];
  let resumeSession = H,
    C;
  if (x[2] === S) C = () => {
    L(null);
  }, x[2] = C;else C = x[2];
  let clearError = C,
    M;
  if (x[3] !== error_2 || x[4] !== isResuming || x[5] !== resumeSession || x[6] !== selectedSession) M = {
    resumeSession: resumeSession,
    isResuming: isResuming,
    error: error_2,
    selectedSession: selectedSession,
    clearError: clearError
  }, x[3] = error_2, x[4] = isResuming, x[5] = resumeSession, x[6] = selectedSession, x[7] = M;else M = x[7];
  return M;
}
N();
var pe = "Updated",
  fe = "Origin",
  ge = "Remote Control",
  le = Math.max(fe.length, ge.length),
  K = "  ";
function ce({
  onSelect: onSelect,
  onCancel: onCancel,
  isEmbedded = !1
}) {
  let {
      rows: rows,
      columns: columns
    } = As(ve()),
    [u, A] = g([]),
    [x, H] = g(null),
    [d, C] = g(!0),
    [m, T] = g(null),
    [W, I] = g(!1),
    [U, M] = g(!1),
    [Y, J] = g(1),
    children = os("confirm:no", "Confirmation", "Esc"),
    O = se(async () => {
      try {
        C(!0), T(null);
        let o = await PUe();
        H(o), t(`Current repository: ${o || "not detected"}`);
        let f = await DHr(),
          b = f;
        if (o) b = f.filter(item => {
          if (!item.repo) return !1;
          return `${item.repo.owner.login}/${item.repo.name}` === o;
        }), t(`Filtered ${b.length} sessions for repo ${o} from ${f.length} total`);
        let re = [...b].sort((itemA, itemB) => {
          let date = new Date(itemA.updated_at);
          return new Date(itemB.updated_at).getTime() - date.getTime();
        });
        A(re);
      } catch (error) {
        let f = error instanceof Error ? error.message : String(error);
        t(`Error loading code sessions: ${f}`), T(Ne(f));
      } finally {
        C(!1), I(!1);
      }
    }, []),
    Q = () => {
      I(!0), O();
    };
  ze("confirm:no", onCancel, {
    context: "Confirmation"
  });
  function onKeyDown(o) {
    if (o.ctrl && o.key === "c") {
      o.preventDefault(), onCancel();
      return;
    }
    if (o.ctrl && o.key === "r" && m) {
      o.preventDefault(), Q();
      return;
    }
    if (m !== null && o.key === "return") {
      o.preventDefault(), onCancel();
      return;
    }
  }
  let onComplete = se(() => {
    M(!0), O();
  }, [M, O]);
  if (!U) return e(n2t, {
    onComplete: onComplete,
    onCancel: isEmbedded ? onCancel : void 0
  });
  if (d) return e(s, {
    flexDirection: "column",
    padding: 1,
    tabIndex: 0,
    autoFocus: !0,
    onKeyDown: onKeyDown,
    children: e(ur, {
      message: "Loading Claude Code sessions\u2026",
      bold: !0,
      subtitle: W ? "Retrying\u2026" : "Fetching your Claude Code sessions\u2026"
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
    }), Oe(m), r(n, {
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
      children: ["No Claude Code sessions found", x && r(n, {
        children: [" for ", x]
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
  let h = u.map(item => ({
      ...item,
      timeString: iK(new Date(item.updated_at))
    })),
    y = Math.max(pe.length, ...h.map(item => item.timeString.length)),
    G = u.some(item => item.environment_kind === "bridge"),
    Z = G ? le + K.length : 0,
    me = String(u.length).length + 2,
    Te = columns - 4 - me - y - K.length - Z,
    options = h.map(({
      timeString: timeString,
      title: title,
      id: b,
      environment_kind: environment_kind
    }) => {
      let _ = timeString.padEnd(y, " ");
      return {
        label: r(V, {
          children: [_, K, G && r(V, {
            children: [e(n, {
              dimColor: !0,
              children: (environment_kind === "bridge" ? ge : "").padEnd(le, " ")
            }), K]
          }), ot(li(title).replace(/\s+/g, " ").trim(), Te)]
        }),
        value: b
      };
    }),
    ee = 7,
    visibleOptionCount = Math.max(1, isEmbedded ? Math.min(u.length, 5, rows - 6 - ee) : Math.min(u.length, rows - 1 - ee)),
    height = visibleOptionCount + ee,
    Se = u.length > visibleOptionCount;
  return r(s, {
    flexDirection: "column",
    padding: 1,
    height: height,
    tabIndex: 0,
    autoFocus: !0,
    onKeyDown: onKeyDown,
    children: [r(n, {
      bold: !0,
      children: ["Select a session to resume", Se && r(n, {
        dimColor: !0,
        children: [" ", "(", Y, " of ", u.length, ")"]
      }), x && r(n, {
        dimColor: !0,
        children: [" (", x, ")"]
      }), ":"]
    }), r(s, {
      flexDirection: "column",
      marginTop: 1,
      flexGrow: 1,
      children: [e(s, {
        marginLeft: 2 + me,
        children: r(n, {
          bold: !0,
          children: [pe.padEnd(y, " "), K, G && fe.padEnd(le, " ") + K, "Session Title"]
        })
      }), e(Fe, {
        visibleOptionCount: visibleOptionCount,
        options: options,
        onChange: o => {
          let f = u.find(item => item.id === o);
          if (f) onSelect(f);
        },
        onFocus: o => {
          let f = options.findIndex(item => item.value === o);
          if (f >= 0) J(f + 1);
        }
      })]
    }), e(s, {
      flexDirection: "row",
      children: e(n, {
        dimColor: !0,
        children: r(ye, {
          children: [e(F, {
            chord: ["up", "down"],
            action: "select"
          }), e(F, {
            chord: "enter",
            action: "confirm"
          }), e(Xe, {
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
function Ne(E) {
  let a = E.toLowerCase();
  if (a.includes("fetch") || a.includes("network") || a.includes("timeout")) return "network";
  if (a.includes("auth") || a.includes("token") || a.includes("permission") || a.includes("oauth") || a.includes("not authenticated") || a.includes("/login") || a.includes("console account") || a.includes("403")) return "auth";
  if (a.includes("api") || a.includes("rate limit") || a.includes("500") || a.includes("529")) return "api";
  return "other";
}
function Oe(E) {
  switch (E) {
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
function b1e(E) {
  let m = w(30),
    {
      onComplete: onComplete_2,
      onCancel: onCancel_2,
      onError: onError,
      isEmbedded: isEmbedded_2,
      source: source
    } = E,
    isEmbedded_3 = isEmbedded_2 === void 0 ? !1 : isEmbedded_2,
    {
      resumeSession: resumeSession_2,
      isResuming: isResuming_2,
      error: error_3,
      selectedSession: selectedSession_2
    } = z(source),
    T,
    W;
  if (m[0] !== source) T = () => {
    i("tengu_teleport_started", {
      source: c(source)
    });
  }, W = [source], m[0] = source, m[1] = T, m[2] = W;else T = m[1], W = m[2];
  R(T, W);
  let I;
  if (m[3] !== error_3 || m[4] !== onComplete_2 || m[5] !== onError || m[6] !== resumeSession_2) I = async U => {
    let M = await resumeSession_2(U);
    if (M) onComplete_2(M);else if (error_3) {
      if (onError) onError(error_3.message, error_3.formattedMessage);
    }
  }, m[3] = error_3, m[4] = onComplete_2, m[5] = onError, m[6] = resumeSession_2, m[7] = I;else I = m[7];
  let onSelect_2 = I,
    J;
  if (m[8] !== onCancel_2) J = () => {
    i("tengu_teleport_cancelled", {}), onCancel_2();
  }, m[8] = onCancel_2, m[9] = J;else J = m[9];
  let onCancel_3 = J;
  const isActive = !!error_3 && !onError;
  let Q;
  if (m[10] !== isActive) Q = {
    context: "Global",
    isActive: isActive
  }, m[10] = isActive, m[11] = Q;else Q = m[11];
  ze("app:interrupt", onCancel_3, Q);
  let isActive_2;
  if (m[12] !== error_3 || m[13] !== onError) isActive_2 = !!error_3 && !onError && nw(), m[12] = error_3, m[13] = onError, m[14] = isActive_2;else isActive_2 = m[14];
  let X;
  if (m[15] !== isActive_2) X = {
    context: "Confirmation",
    isActive: isActive_2
  }, m[15] = isActive_2, m[16] = X;else X = m[16];
  if (ze("confirm:no", onCancel_3, X), isResuming_2 && selectedSession_2) {
    let h;
    if (m[17] === S) h = r(s, {
      flexDirection: "row",
      children: [e(Rs, {}), e(n, {
        bold: !0,
        children: "Resuming session\u2026"
      })]
    }), m[17] = h;else h = m[17];
    let y;
    if (m[18] !== selectedSession_2.title) y = r(s, {
      flexDirection: "column",
      padding: 1,
      children: [h, r(n, {
        dimColor: !0,
        children: ['Loading "', selectedSession_2.title, '"\u2026']
      })]
    }), m[18] = selectedSession_2.title, m[19] = y;else y = m[19];
    return y;
  }
  if (error_3 && !onError) {
    let h;
    if (m[20] === S) h = e(n, {
      bold: !0,
      color: "error",
      children: "Failed to resume session"
    }), m[20] = h;else h = m[20];
    let y;
    if (m[21] !== error_3.message) y = e(n, {
      dimColor: !0,
      children: error_3.message
    }), m[21] = error_3.message, m[22] = y;else y = m[22];
    let G;
    if (m[23] === S) G = e(s, {
      marginTop: 1,
      children: e(n, {
        dimColor: !0,
        italic: !0,
        children: e(F, {
          chord: "escape",
          action: "cancel"
        })
      })
    }), m[23] = G;else G = m[23];
    let Z;
    if (m[24] !== y) Z = r(s, {
      flexDirection: "column",
      padding: 1,
      children: [h, y, G]
    }), m[24] = y, m[25] = Z;else Z = m[25];
    return Z;
  }
  let h;
  if (m[26] !== onCancel_3 || m[27] !== onSelect_2 || m[28] !== isEmbedded_3) h = e(ce, {
    onSelect: onSelect_2,
    onCancel: onCancel_3,
    isEmbedded: isEmbedded_3
  }), m[26] = onCancel_3, m[27] = onSelect_2, m[28] = isEmbedded_3, m[29] = h;else h = m[29];
  return h;
}
export { b1e };