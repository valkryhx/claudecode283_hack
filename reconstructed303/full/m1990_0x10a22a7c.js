// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.303
import {
  Qjt
} from "B:/~BUN/root/chunk-rpez7z7a.js";
import {
  c
} from "B:/~BUN/root/chunk-jthpk6wv.js";
import {
  ap,
  d
} from "B:/~BUN/root/chunk-3aez4b53.js";
import {
  i
} from "B:/~BUN/root/chunk-1kfn24jp.js";
import {
  po
} from "B:/~BUN/root/chunk-kzgf20y6.js";
import {
  t
} from "B:/~BUN/root/chunk-6za2ez23.js";
import {
  cDo
} from "B:/~BUN/root/chunk-hb6x4e3n.js";
import {
  mt,
  FW
} from "B:/~BUN/root/chunk-pjgzz98k.js";
import {
  Ti
} from "B:/~BUN/root/chunk-kad4nq7y.js";
import {
  W7e
} from "B:/~BUN/root/chunk-m94tqsvv.js";
import {
  WHe
} from "B:/~BUN/root/chunk-9grc6xh0.js";
import {
  w
} from "B:/~BUN/root/chunk-rysqv8v1.js";
import {
  s,
  n
} from "B:/~BUN/root/chunk-damrp3r8.js";
import {
  rt
} from "B:/~BUN/root/chunk-pw5vpw1q.js";
import {
  q
} from "B:/~BUN/root/chunk-bf7csy4f.js";
import {
  Te
} from "B:/~BUN/root/chunk-smy4yvhm.js";
import {
  us
} from "B:/~BUN/root/chunk-b900np4s.js";
import {
  Cs
} from "B:/~BUN/root/chunk-cbtzavb5.js";
import {
  Xe
} from "B:/~BUN/root/chunk-nbjke4gr.js";
import {
  Se
} from "B:/~BUN/root/chunk-7dpyfa5r.js";
import {
  Ii
} from "B:/~BUN/root/chunk-3cgpbmp2.js";
import {
  Wr
} from "B:/~BUN/root/chunk-1rb7fvzn.js";
import {
  obn
} from "B:/~BUN/root/chunk-51071p3t.js";
import {
  mT
} from "B:/~BUN/root/chunk-91at02k2.js";
import {
  gt
} from "B:/~BUN/root/chunk-vs438w4e.js";
import {
  Q,
  e,
  r
} from "B:/~BUN/root/chunk-x2hkxw5q.js";
import {
  ae,
  P,
  y,
  B
} from "B:/~BUN/root/chunk-5hr2ysa5.js";
import {
  ye
} from "B:/~BUN/root/chunk-shj1mfyk.js";
import {
  S
} from "B:/~BUN/root/chunk-ef0msk7r.js";
B();
B();

function J(h) {
  let C = w(8),
    [l, R] = y(!1),
    [p, _] = y(null),
    [u, O] = y(null),
    G;
  if (C[0] !== h) G = async (a) => {
    R(!0), _(null), O(a), i("tengu_teleport_resume_session", {
      source: c(h),
      session_id: ye(a.id)
    });;
    try {
      let m = await po("teleport_resume", () => WHe(a.id));
      return Qjt({
        sessionId: a.id
      }), R(!1), m
    } catch (T) {
      let x = T;
      let H = {
        message: x instanceof ap ? x.message : d(x),
        formattedMessage: x instanceof ap ? x.formattedMessage : void 0,
        isOperationError: x instanceof ap
      };
      return _(H), R(!1), null
    }
  }, C[0] = h, C[1] = G;
  else G = C[1];
  let k = G,
    T;
  if (C[2] === S) T = () => {
    _(null)
  }, C[2] = T;
  else T = C[2];
  let X = T,
    L;
  if (C[3] !== p || C[4] !== l || C[5] !== k || C[6] !== u) L = {
    resumeSession: k,
    isResuming: l,
    error: p,
    selectedSession: u,
    clearError: X
  }, C[3] = p, C[4] = l, C[5] = k, C[6] = u, C[7] = L;
  else L = C[7];
  return L
}
B();
var fe = "Updated",
  ge = "Origin",
  xe = "Remote Control",
  le = Math.max(ge.length, xe.length),
  N = "  ";

function ce({
  onSelect: h,
  onCancel: l,
  isEmbedded: R = !1
}) {
  let {
    rows: p,
    columns: _
  } = us(Te()), [u, O] = y([]), [C, G] = y(null), [a, T] = y(!0), [m, x] = y(null), [H, k] = y(null), [X, L] = y(!1), [W, Y] = y(!1), [M, j] = y(1), z = Cs("confirm:no", "Confirmation", "Esc"), D = ae(async () => {
    try {
      T(!0), x(null);
      let o = await W7e();
      G(o), t(`Current repository: ${o||"not detected"}`);
      let f = await cDo(),
        E = f;
      if (o) E = f.filter((v) => {
        if (!v.repo) return !1;
        return `${v.repo.owner.login}/${v.repo.name}` === o
      }), t(`Filtered ${E.length} sessions for repo ${o} from ${f.length} total`);
      let te = [...E].sort((v, ne) => {
        let we = new Date(v.updated_at);
        return new Date(ne.updated_at).getTime() - we.getTime()
      });
      O(te)
    } catch (o) {
      let f = o instanceof Error ? o.message : String(o);
      if (t(`Error loading code sessions: ${f}`), o instanceof Error && o.name === "CloudSessionAccessError") k(o.message), x("refused");
      else x(Oe(f))
    } finally {
      T(!1), L(!1)
    }
  }, []), Z = () => {
    L(!0), D()
  };
  rt("confirm:no", l, {
    context: "Confirmation"
  });

  function g(o) {
    if (o.ctrl && o.key === "c") {
      o.preventDefault(), l();
      return
    }
    if (o.ctrl && o.key === "r" && m) {
      o.preventDefault(), Z();
      return
    }
    if (m !== null && o.key === "return") {
      o.preventDefault(), l();
      return
    }
  }
  let b = ae(() => {
    Y(!0), D()
  }, [Y, D]);
  if (!W) return e(obn, {
    onComplete: b,
    onCancel: R ? l : void 0
  });
  if (a) return e(s, {
    flexDirection: "column",
    padding: 1,
    tabIndex: 0,
    autoFocus: !0,
    onKeyDown: g,
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
    onKeyDown: g,
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
        children: z
      }), " to cancel"]
    })]
  });
  if (u.length === 0) return r(s, {
    flexDirection: "column",
    padding: 1,
    tabIndex: 0,
    autoFocus: !0,
    onKeyDown: g,
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
          children: z
        }), " to cancel"]
      })
    })]
  });
  let U = u.map((o) => ({
      ...o,
      timeString: FW(new Date(o.updated_at))
    })),
    A = Math.max(fe.length, ...U.map((o) => o.timeString.length)),
    ee = u.some((o) => o.environment_kind === "bridge"),
    Ee = ee ? le + N.length : 0,
    ue = String(u.length).length + 2,
    Re = _ - 4 - ue - A - N.length - Ee,
    pe = U.map(({
      timeString: o,
      title: f,
      id: E,
      environment_kind: te
    }) => {
      let v = o.padEnd(A, " ");
      return {
        label: r(Q, {
          children: [v, N, ee && r(Q, {
            children: [e(n, {
              dimColor: !0,
              children: (te === "bridge" ? xe : "").padEnd(le, " ")
            }), N]
          }), mt(Ti(f).replace(/\s+/g, " ").trim(), Re)]
        }),
        value: E
      }
    }),
    oe = 7,
    re = Math.max(1, R ? Math.min(u.length, 5, p - 6 - oe) : Math.min(u.length, p - 1 - oe)),
    be = re + oe,
    De = u.length > re;
  return r(s, {
    flexDirection: "column",
    padding: 1,
    height: be,
    tabIndex: 0,
    autoFocus: !0,
    onKeyDown: g,
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
        visibleOptionCount: re,
        options: pe,
        onChange: (o) => {
          let f = u.find((E) => E.id === o);
          if (f) h(f)
        },
        onFocus: (o) => {
          let f = pe.findIndex((E) => E.value === o);
          if (f >= 0) j(f + 1)
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
  })
}

function Oe(h) {
  let l = h.toLowerCase();
  if (l.includes("fetch") || l.includes("network") || l.includes("timeout")) return "network";
  if (l.includes("auth") || l.includes("token") || l.includes("permission") || l.includes("oauth") || l.includes("not authenticated") || l.includes("/login") || l.includes("console account") || l.includes("403")) return "auth";
  if (l.includes("api") || l.includes("rate limit") || l.includes("500") || l.includes("529")) return "api";
  return "other"
}

function Pe(h, l) {
  switch (h) {
    case "refused":
      return e(s, {
        marginY: 1,
        flexDirection: "column",
        children: e(n, {
          dimColor: !0,
          children: l
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
      })
  }
}

function stt(h) {
  let m = w(30),
    {
      onComplete: l,
      onCancel: R,
      onError: p,
      isEmbedded: _,
      source: u
    } = h,
    O = _ === void 0 ? !1 : _,
    {
      resumeSession: C,
      isResuming: G,
      error: a,
      selectedSession: T
    } = J(u),
    x, H;
  if (m[0] !== u) x = () => {
    i("tengu_teleport_started", {
      source: c(u)
    })
  }, H = [u], m[0] = u, m[1] = x, m[2] = H;
  else x = m[1], H = m[2];
  P(x, H);
  let k;
  if (m[3] !== a || m[4] !== l || m[5] !== p || m[6] !== C) k = async (X) => {
    let L = await C(X);
    if (L) l(L);
    else if (a) {
      if (p) p(a.message, a.formattedMessage)
    }
  }, m[3] = a, m[4] = l, m[5] = p, m[6] = C, m[7] = k;
  else k = m[7];
  let W = k,
    Y;
  if (m[8] !== R) Y = () => {
    i("tengu_teleport_cancelled", {}), R()
  }, m[8] = R, m[9] = Y;
  else Y = m[9];
  let M = Y;
  const j = !!a && !p;
  let z;
  if (m[10] !== j) z = {
    context: "Global",
    isActive: j
  }, m[10] = j, m[11] = z;
  else z = m[11];
  rt("app:interrupt", M, z);
  let D;
  if (m[12] !== a || m[13] !== p) D = !!a && !p && mT(), m[12] = a, m[13] = p, m[14] = D;
  else D = m[14];
  let Z;
  if (m[15] !== D) Z = {
    context: "Confirmation",
    isActive: D
  }, m[15] = D, m[16] = Z;
  else Z = m[16];
  if (rt("confirm:no", M, Z), G && T) {
    let g;
    if (m[17] === S) g = r(s, {
      flexDirection: "row",
      children: [e(Ii, {}), e(n, {
        bold: !0,
        children: "Resuming session\u2026"
      })]
    }), m[17] = g;
    else g = m[17];
    let b;
    if (m[18] !== T.title) b = r(s, {
      flexDirection: "column",
      padding: 1,
      children: [g, r(n, {
        dimColor: !0,
        children: ['Loading "', T.title, '"\u2026']
      })]
    }), m[18] = T.title, m[19] = b;
    else b = m[19];
    return b
  }
  if (a && !p) {
    let g;
    if (m[20] === S) g = e(n, {
      bold: !0,
      color: "error",
      children: "Failed to resume session"
    }), m[20] = g;
    else g = m[20];
    let b;
    if (m[21] !== a.message) b = e(n, {
      dimColor: !0,
      children: a.message
    }), m[21] = a.message, m[22] = b;
    else b = m[22];
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
    }), m[23] = U;
    else U = m[23];
    let A;
    if (m[24] !== b) A = r(s, {
      flexDirection: "column",
      padding: 1,
      children: [g, b, U]
    }), m[24] = b, m[25] = A;
    else A = m[25];
    return A
  }
  let g;
  if (m[26] !== M || m[27] !== W || m[28] !== O) g = e(ce, {
    onSelect: W,
    onCancel: M,
    isEmbedded: O
  }), m[26] = M, m[27] = W, m[28] = O, m[29] = g;
  else g = m[29];
  return g
}
export {
  stt
};
