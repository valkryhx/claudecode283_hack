// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.283
import {
  ve
} from "B:/~BUN/root/chunk-cxqcvpm0.js";
import {
  Ke
} from "B:/~BUN/root/chunk-bgthmgyc.js";
import {
  a
} from "B:/~BUN/root/chunk-nkmmqnq7.js";
import {
  b,
  qo,
  t
} from "B:/~BUN/root/chunk-qe2zga5e.js";
import {
  xr
} from "B:/~BUN/root/chunk-y04k89s2.js";
import {
  d
} from "B:/~BUN/root/chunk-zs3ycjed.js";
import {
  Tc,
  x
} from "B:/~BUN/root/chunk-gf53qpk6.js";
import {
  w
} from "B:/~BUN/root/chunk-x9hkq9y1.js";
import {
  ke
} from "B:/~BUN/root/chunk-kss0wzj5.js";
import {
  lr,
  Lt,
  nA,
  t5n
} from "B:/~BUN/root/chunk-339q6g5w.js";
import {
  s,
  n
} from "B:/~BUN/root/chunk-1gn8pz4b.js";
import {
  ze
} from "B:/~BUN/root/chunk-r2yrqvry.js";
import {
  B4,
  $P
} from "B:/~BUN/root/chunk-3jyp964r.js";
import {
  ei,
  dee
} from "B:/~BUN/root/chunk-1mdeqc2r.js";
import {
  Hn
} from "B:/~BUN/root/chunk-hqrtayw5.js";
import {
  r1e,
  J_n,
  o1e,
  rJn
} from "B:/~BUN/root/chunk-0zh1abnx.js";
import {
  W
} from "B:/~BUN/root/chunk-h23911wn.js";
import {
  F
} from "B:/~BUN/root/chunk-acd2tycn.js";
import {
  Fe
} from "B:/~BUN/root/chunk-bt71g93n.js";
import {
  et
} from "B:/~BUN/root/chunk-zg8y1401.js";
import {
  ye
} from "B:/~BUN/root/chunk-41008fhm.js";
import {
  Qn
} from "B:/~BUN/root/chunk-jcnv9sfw.js";
import {
  ge
} from "B:/~BUN/root/chunk-51erc9xb.js";
import {
  AJe
} from "B:/~BUN/root/chunk-m2jw798e.js";
import {
  t3r,
  n3r
} from "B:/~BUN/root/chunk-bm2wsr80.js";
import {
  jr
} from "B:/~BUN/root/chunk-1xe8mz4a.js";
import {
  ko
} from "B:/~BUN/root/chunk-v1xd9kf3.js";
import {
  Xe
} from "B:/~BUN/root/chunk-parcaazx.js";
import {
  V,
  e,
  r
} from "B:/~BUN/root/chunk-qkvevvte.js";
import {
  Hue
} from "B:/~BUN/root/chunk-hkm1a44r.js";
import {
  AU
} from "B:/~BUN/root/chunk-ys127bbc.js";
import {
  Ko
} from "B:/~BUN/root/chunk-v8s05yj9.js";
import {
  Sr,
  mr,
  se,
  T,
  g,
  N
} from "B:/~BUN/root/chunk-rnj6pcz5.js";
import {
  S
} from "B:/~BUN/root/chunk-yv67t8hr.js";
N();
N();
N();
var at = 7250,
  We = "https://github.com/anthropics/claude-code/issues",
  fe = {
    session: "this session only",
    day: "this session + this project\u2019s other sessions from the last 24 hours",
    week: "this session + this project\u2019s other sessions from the last 7 days"
  },
  it = [{
    label: "This session only",
    value: "session"
  }, {
    label: "This session + the last 24 hours",
    value: "day"
  }, {
    label: "This session + the last 7 days",
    value: "week"
  }],
  Z = {
    post: {
      consentAction: "submit",
      consentIntro: "This report will include:",
      consentFooter: "We may use these to debug related issues and improve Claude Code.",
      submitting: "Submitting report\u2026"
    },
    bundle: {
      consentAction: "save",
      consentIntro: "An archive will be saved to disk containing:",
      consentFooter: "Nothing leaves this machine until you send the bundle file. Secrets (API keys, tokens, credentials) are redacted before writing.",
      submitting: "Saving bundle\u2026"
    },
    share: {
      consentAction: "share",
      consentIntro: "This shared conversation will include:",
      consentFooter: "A shareable link will be created so you can post the conversation for debugging and support.",
      submitting: "Uploading share\u2026"
    }
  };

function dt({
  abortController: c,
  messages: i,
  initialDescription: o,
  onDone: m,
  applyMessageOp: v,
  backgroundTasks: C = {},
  mode: f = "post",
  readFileState: I,
  surveyFeedbackSource: U,
  command: D = "/feedback"
}) {
  let {
    storageV5: j,
    credentials: oe
  } = ke(), [h, R] = g("userInput"), [ne, ie] = g(0), [M, ce] = g(o ?? ""), [X, H] = g(null), [Q, de] = g(null), [P, A] = g(null), ee = Lt(), E = ee ? lr()?.sessionId ?? null : null, [ue] = g(() => ee ? Promise.resolve(null) : nA().then((l) => l ? t5n() : null).catch(() => null)), [Ve, ht] = g(null), [le, yt] = g("session"), he = W((l) => l.transcripts), bt = ve().columns - 4, Wt = Hue(), pe = x("tengu_amber_lynx", !1), kt = se(async () => {
    if (R("submitting"), A(null), H(null), f === "bundle") {
      let re = await rJn({
        messages: i,
        description: M,
        surface: "cli",
        scope: le,
        backgroundTasks: C,
        transcripts: he,
        signal: c.signal,
        surveyFeedbackSource: U,
        storageV5: j
      });
      if (c.signal.aborted) return;
      if (re.success) H(re.bundleId), de(re.zipPath), R("done");
      else A(`Couldn't save the feedback bundle to disk: ${re.error}`), R("userInput");
      return
    }
    let [l, Se] = await Promise.all([o1e({
      messages: i,
      description: M,
      surface: "cli",
      scope: le,
      backgroundTasks: C,
      transcripts: he,
      signal: c.signal,
      surveyFeedbackSource: U,
      storageV5: j,
      credentials: oe
    }), pe ? Promise.resolve(null) : ct(M, c.signal, oe)]);
    if (c.signal.aborted) return;
    if (ht(Se), l.success) H(l.feedbackId), R("done");
    else {
      if (l.isZdrOrg) A("Feedback collection is not available for organizations with custom data retention policies.");
      else if (l.failureReason === "auth_error") A("Couldn't send feedback: not signed in. Run /login, then retry.");
      else if (l.failureReason === "policy_blocked") A(dee(D) ?? "Feedback is disabled by your organization's policy.");
      else {
        let re = l.statusCode ? ` (server returned ${l.statusCode})` : l.failureReason === "timeout" ? " (request timed out)" : l.failureReason === "network_error" ? " (couldn't reach the service)" : "";
        A(`Couldn't send feedback${re}. If it keeps failing, you can file at ${We} instead.`)
      }
      R("userInput")
    }
  }, [M, i, pe, C, he, c, f, le, j, oe]), be = se(() => {
    c.abort(), m("Feedback / bug report cancelled", {
      display: "system"
    })
  }, [m, c]), Ht = se(() => {
    R("done")
  }, []), zt = se((l) => {
    A(l), R("userInput")
  }, []);
  ze("confirm:no", be, {
    context: "Settings",
    isActive: h === "userInput"
  });
  let St = h === "done" || P && h !== "userInput";

  function Ct(l) {
    if (l.ctrl || l.meta) return;
    if (h === "done") {
      if (l.preventDefault(), f === "share") return;
      if (!pe && l.key === "return" && Ve) {
        let Se = lt(X ?? "", Ve, M, J_n());
        Ko(Se)
      }
      if (P) m("Error submitting feedback / bug report", {
        display: "system"
      });
      else if (f === "bundle" && Q) m(`Feedback bundle saved to \`${Q}\``, {
        display: "system"
      });
      else m("Feedback / bug report submitted", {
        display: "system"
      });
      return
    }
    if (P && h !== "userInput") {
      l.preventDefault(), m("Error submitting feedback / bug report", {
        display: "system"
      });
      return
    }
    if (h === "consent") {
      if (l.key === "left") {
        l.preventDefault(), R(f === "share" || ee ? "userInput" : "scope");
        return
      }
      if (l.key === "return" || l.key === " ") l.preventDefault(), kt()
    }
  }
  return e(jr, {
    onKeyDown: Ct,
    children: r(ge, {
      title: "Submit feedback / bug report",
      onCancel: be,
      isCancelActive: h !== "userInput" && !St,
      hideInputGuide: h === "done",
      inputGuide: h === "userInput" ? r(ye, {
        children: [e(F, {
          chord: "enter",
          action: "continue"
        }), e(Xe, {
          action: "confirm:no",
          context: "Confirmation",
          fallback: "Esc",
          description: "cancel"
        })]
      }) : h === "scope" ? r(ye, {
        children: [e(F, {
          chord: "enter",
          action: "choose"
        }), e(Xe, {
          action: "confirm:no",
          context: "Confirmation",
          fallback: "Esc",
          description: "cancel"
        })]
      }) : h === "consent" ? r(ye, {
        children: [e(F, {
          chord: "enter",
          action: Z[f].consentAction
        }), e(F, {
          chord: "left",
          action: "change"
        }), e(Xe, {
          action: "confirm:no",
          context: "Confirmation",
          fallback: "Esc",
          description: "cancel"
        })]
      }) : null,
      children: [h === "userInput" && r(s, {
        flexDirection: "column",
        gap: 1,
        children: [e(n, {
          children: "Describe the issue below:"
        }), e(Qn, {
          value: M,
          onChange: (l) => {
            if (ce(l), P) A(null)
          },
          columns: bt,
          onSubmit: (l) => {
            if (f !== "share" && l.trim() === "") {
              A("Please describe the issue before submitting.");
              return
            }
            A(null), R(f === "share" || ee ? "consent" : "scope")
          },
          onExitMessage: (l) => {
            if (l) c.abort(), m("Feedback cancelled", {
              display: "system"
            })
          },
          cursorOffset: ne,
          onChangeCursorOffset: ie,
          showCursor: !0,
          focus: !0
        }), P && r(s, {
          flexDirection: "column",
          gap: 1,
          children: [e(ko, {
            error: P
          }), e(n, {
            dimColor: !0,
            children: "Edit and press Enter to retry, or Esc to cancel"
          })]
        })]
      }), h === "scope" && r(s, {
        flexDirection: "column",
        gap: 1,
        children: [e(n, {
          children: "How much session history should we include?"
        }), e(Fe, {
          options: it,
          defaultFocusValue: le,
          onChange: (l) => {
            yt(l), R("consent")
          },
          onCancel: be
        })]
      }), h === "consent" && r(s, {
        flexDirection: "column",
        children: [e(n, {
          children: Z[f].consentIntro
        }), r(s, {
          marginLeft: 2,
          flexDirection: "column",
          children: [r(n, {
            children: ["- Your feedback / bug description:", " ", e(n, {
              dimColor: !0,
              children: M
            })]
          }), r(n, {
            children: ["- Environment info:", " ", r(n, {
              dimColor: !0,
              children: [a.platform, ", ", a.terminal, ", v", {
                ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
                PACKAGE_URL: "@anthropic-ai/claude-code",
                README_URL: "https://code.claude.com/docs/en/overview",
                VERSION: "2.1.283",
                FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
                BUILD_TIME: "2026-09-25T00:44:42Z",
                GIT_SHA: "4631ccd7cfe41e69bc72d3b5b9dc7282536e4985",
                HOOKS_WORKER_URL: "B:/~BUN/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js",
                DD_SOURCEMAP_GROUP: "win32"
              }.VERSION, ""]
            })]
          }), f !== "share" && ee && r(n, {
            children: ["- Remote workspace:", " ", r(n, {
              dimColor: !0,
              children: [E ? `session ${E}; ` : "", "git metadata is not collected from this machine"]
            })]
          }), f !== "share" && e(Sr, {
            fallback: null,
            children: e(He, {
              gitStatePromise: ue
            })
          }), r(n, {
            children: ["- Session transcript:", " ", e(n, {
              dimColor: !0,
              children: f === "share" ? fe.session : fe[le]
            })]
          })]
        }), e(s, {
          marginTop: 1,
          children: e(n, {
            wrap: "wrap",
            dimColor: !0,
            children: Z[f].consentFooter
          })
        })]
      }), h === "submitting" && e(s, {
        flexDirection: "row",
        gap: 1,
        children: e(n, {
          children: Z[f].submitting
        })
      }), h === "done" && f === "bundle" && r(s, {
        flexDirection: "column",
        children: [r(n, {
          color: "success",
          children: [e(et, {
            status: "success",
            withSpace: !0
          }), "Feedback bundle saved"]
        }), Q && r(s, {
          marginTop: 1,
          flexDirection: "column",
          children: [r(n, {
            children: ["Bundle: ", e(n, {
              dimColor: !0,
              children: Q
            })]
          }), r(n, {
            children: ["Reference ID: ", e(n, {
              dimColor: !0,
              children: X
            })]
          }), e(s, {
            marginTop: 1,
            children: e(n, {
              wrap: "wrap",
              children: "Send this file to your Anthropic account representative or attach it to your support request."
            })
          })]
        }), e(s, {
          marginTop: 1,
          children: e(n, {
            dimColor: !0,
            children: "Press any key to close"
          })
        })]
      }), h === "done" && f === "post" && (pe ? r(s, {
        flexDirection: "column",
        children: [P ? e(ko, {
          error: P
        }) : r(n, {
          color: "success",
          children: [e(et, {
            status: "success",
            withSpace: !0
          }), "Feedback sent"]
        }), X && r(V, {
          children: [e(s, {
            marginTop: 1,
            children: r(n, {
              children: ["Reference ID: ", e(n, {
                dimColor: !0,
                children: X
              })]
            })
          }), e(s, {
            marginTop: 1,
            children: e(n, {
              wrap: "wrap",
              children: "If you're working with Anthropic support, please include the ID above."
            })
          })]
        }), e(s, {
          marginTop: 1,
          children: e(n, {
            dimColor: !0,
            italic: !0,
            children: "Any key to close"
          })
        })]
      }) : r(s, {
        flexDirection: "column",
        children: [P ? e(ko, {
          error: P
        }) : e(n, {
          color: "success",
          children: "Thank you for your report!"
        }), X && r(n, {
          dimColor: !0,
          children: ["Feedback ID: ", X]
        }), e(s, {
          marginTop: 1,
          children: e(n, {
            dimColor: !0,
            italic: !0,
            children: r(ye, {
              children: [e(F, {
                chord: "enter",
                action: "open GitHub issue"
              }), e(n, {
                children: "any key to close"
              })]
            })
          })
        })]
      })), null]
    })
  })
}

function lt(c, i, o, m) {
  let v = qo(i),
    C = qo(o),
    f = Hue(),
    I = `**Bug Description**
${C}

**Environment Info**
- Platform: ${a.platform}
- Terminal: ${a.terminal}
- Version: ${{ISSUES_EXPLAINER:"report the issue at https://github.com/anthropics/claude-code/issues",PACKAGE_URL:"@anthropic-ai/claude-code",README_URL:"https://code.claude.com/docs/en/overview",VERSION:"2.1.283",FEEDBACK_CHANNEL:"https://github.com/anthropics/claude-code/issues",BUILD_TIME:"2026-09-25T00:44:42Z",GIT_SHA:"4631ccd7cfe41e69bc72d3b5b9dc7282536e4985",HOOKS_WORKER_URL:"B:/~BUN/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js",DD_SOURCEMAP_GROUP:"win32"}.VERSION||"unknown"}
- Feedback ID: ${c}

**Errors**
\`\`\`json
`,
    U = "\n```\n",
    D = b(m),
    j = `${We}/new?title=${encodeURIComponent(v)}&labels=user-reported,bug&body=`,
    oe = `
**Note:** Content was truncated.
`,
    h = encodeURIComponent(I),
    R = encodeURIComponent("\n```\n"),
    ne = encodeURIComponent(`
**Note:** Content was truncated.
`),
    ie = encodeURIComponent(D),
    M = at - j.length - h.length - R.length - ne.length;
  if (M <= 0) {
    let de = encodeURIComponent("\u2026"),
      P = 50,
      A = at - j.length - de.length - ne.length - 50,
      ee = I + D + "\n```\n",
      E = encodeURIComponent(ee);
    if (E.length > A) {
      E = E.slice(0, A);
      let ue = E.lastIndexOf("%");
      if (ue >= E.length - 2) E = E.slice(0, ue)
    }
    return j + E + de + ne
  }
  if (ie.length <= M) return j + h + ie + R;
  let ce = encodeURIComponent("\u2026"),
    X = 50,
    H = ie.slice(0, M - ce.length - X),
    Q = H.lastIndexOf("%");
  if (Q >= H.length - 2) H = H.slice(0, Q);
  return j + h + H + ce + R + ne
}
async function ct(c, i, o) {
  try {
    let m = await $P({
        systemPrompt: ei(["Generate a concise, technical issue title (max 80 chars) for a public GitHub issue based on this bug report for Claude Code.", "Claude Code is an agentic coding CLI based on the Anthropic API.", "The title should:", "- Include the type of issue [Bug] or [Feature Request] as the first thing in the title", "- Be concise, specific and descriptive of the actual problem", "- Use technical terminology appropriate for a software issue", '- For error messages, extract the key error (e.g., "Missing Tool Result Block" rather than the full message)', "- Be direct and clear for developers to understand the problem", '- If you cannot determine a clear issue, use "Bug Report: [brief description]"', "- Any LLM API errors are from the Anthropic API, not from any other model provider", "Your response will be directly used as the title of the Github issue, and as such should not contain any other commentary or explaination", 'Examples of good titles include: "[Bug] Auto-Compact triggers to soon", "[Bug] Anthropic API Error: Missing Tool Result Block", "[Bug] Error: Invalid Model Name for Opus"']),
        userPrompt: c,
        signal: i,
        options: {
          hasAppendSystemPrompt: !1,
          toolChoice: void 0,
          isNonInteractiveSession: !1,
          agents: [],
          querySource: "feedback",
          mcpTools: [],
          agentContext: Tc(),
          credentials: o
        }
      }),
      v = m.message.content[0]?.type === "text" ? m.message.content[0].text : "Bug Report";
    if (B4(v)) return je(c);
    if (Et(v)) return je(c);
    return v
  } catch (m) {
    if (Ke(m)) t("Feedback title generation via Haiku aborted, using fallback", {
      level: "debug"
    });
    else d(m);
    return je(c)
  }
}
var Tt = /^(i can['\u2019]t|i cannot|i['\u2019]m unable|i am unable|i['\u2019]m sorry|i am sorry|i apologize|sorry,)/i;

function Et(c) {
  let i = c.trim();
  return i === "" || Tt.test(i)
}

function je(c) {
  let i = xr(c);
  if (i.length <= 60 && i.length > 5) return i;
  let o = i.slice(0, 60);
  if (i.length > 60) {
    let m = o.lastIndexOf(" ");
    if (m > 30) o = o.slice(0, m);
    o += "..."
  }
  return o.length < 10 ? "Bug Report" : o
}

function He(c) {
  let v = w(8),
    {
      gitStatePromise: i
    } = c,
    o = mr(i);
  if (!o) {
    return null
  }
  const m = o.branchName;
  let C;
  if (v[0] !== o.commitHash) C = o.commitHash ? `, ${o.commitHash.slice(0,7)}` : "", v[0] = o.commitHash, v[1] = C;
  else C = v[1];
  const f = o.remoteUrl ? ` @ ${o.remoteUrl}` : "",
    I = !o.isHeadOnRemote && ", not synced",
    U = !o.isClean && ", has local changes";
  let D;
  if (v[2] !== o.branchName || v[3] !== C || v[4] !== f || v[5] !== I || v[6] !== U) D = r(n, {
    children: ["- Git repo metadata:", " ", r(n, {
      dimColor: !0,
      children: [m, C, f, I, U]
    })]
  }), v[2] = o.branchName, v[3] = C, v[4] = f, v[5] = I, v[6] = U, v[7] = D;
  else D = v[7];
  return D
}

function U1o(c, i, o, m, v = "", C = {}, f, I = "/feedback") {
  let U = r1e(I);
  if (U.kind === "disabled") return c(U.reason), null;
  let D = n3r() ?? void 0;
  return e(dt, {
    abortController: i,
    messages: o,
    initialDescription: v,
    onDone: c,
    applyMessageOp: m,
    backgroundTasks: C,
    mode: U.kind,
    readFileState: f,
    surveyFeedbackSource: D,
    command: I
  })
}

function Ge(c, i, o, m) {
  return U1o(c, Hn(), i.messages, i.applyMessageOp, o, {
    ...i.taskRegistry.all()
  }, i.readFileState, m)
}
async function Rwn(c, i, o, m = "/feedback") {
  let v = o?.trim() === "public" ? "" : o || "";
  return Ge(c, i, v, m)
}

function gt(c) {
  let C = w(9),
    {
      onDone: i,
      caller: o
    } = c,
    [m, v] = g(),
    f;
  if (C[0] !== o.messages) f = () => [...o.messages], C[0] = o.messages, C[1] = f;
  else f = C[1];
  let [I] = g(f), U = T(!1);
  if (m !== void 0) {
    return m
  }
  let D;
  if (C[2] !== o || C[3] !== i) D = () => {
    if (U.current) {
      return
    }
    let j = Ge(i, o, "", "/feedback");
    U.current = !0, v(j)
  }, C[2] = o, C[3] = i, C[4] = D;
  else D = C[4];
  let oe;
  if (C[5] !== I || C[6] !== i || C[7] !== D) oe = e(AJe, {
    messages: I,
    onDone: i,
    onWriteNew: D
  }), C[5] = I, C[6] = i, C[7] = D, C[8] = oe;
  else oe = C[8];
  return oe
}
async function Cqo(c, i, o) {
  if (AU() && !o?.trim() && !t3r()) return e(gt, {
    onDone: c,
    caller: i
  });
  return Rwn(c, i, o)
}
export {
  U1o,
  Rwn,
  Cqo
};
