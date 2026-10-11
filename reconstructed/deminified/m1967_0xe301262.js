// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { ve } from "B:/~BUN/root/chunk-cxqcvpm0.js";
import { Ke } from "B:/~BUN/root/chunk-bgthmgyc.js";
import { a } from "B:/~BUN/root/chunk-nkmmqnq7.js";
import { b, qo, t } from "B:/~BUN/root/chunk-qe2zga5e.js";
import { xr } from "B:/~BUN/root/chunk-y04k89s2.js";
import { d } from "B:/~BUN/root/chunk-zs3ycjed.js";
import { Tc, x } from "B:/~BUN/root/chunk-gf53qpk6.js";
import { w } from "B:/~BUN/root/chunk-x9hkq9y1.js";
import { ke } from "B:/~BUN/root/chunk-kss0wzj5.js";
import { lr, Lt, nA, t5n } from "B:/~BUN/root/chunk-339q6g5w.js";
import { s, n } from "B:/~BUN/root/chunk-1gn8pz4b.js";
import { ze } from "B:/~BUN/root/chunk-r2yrqvry.js";
import { B4, $P } from "B:/~BUN/root/chunk-3jyp964r.js";
import { ei, dee } from "B:/~BUN/root/chunk-1mdeqc2r.js";
import { Hn } from "B:/~BUN/root/chunk-hqrtayw5.js";
import { r1e, J_n, o1e, rJn } from "B:/~BUN/root/chunk-0zh1abnx.js";
import { W } from "B:/~BUN/root/chunk-h23911wn.js";
import { F } from "B:/~BUN/root/chunk-acd2tycn.js";
import { Fe } from "B:/~BUN/root/chunk-bt71g93n.js";
import { et } from "B:/~BUN/root/chunk-zg8y1401.js";
import { ye } from "B:/~BUN/root/chunk-41008fhm.js";
import { Qn } from "B:/~BUN/root/chunk-jcnv9sfw.js";
import { ge } from "B:/~BUN/root/chunk-51erc9xb.js";
import { AJe } from "B:/~BUN/root/chunk-m2jw798e.js";
import { t3r, n3r } from "B:/~BUN/root/chunk-bm2wsr80.js";
import { jr } from "B:/~BUN/root/chunk-1xe8mz4a.js";
import { ko } from "B:/~BUN/root/chunk-v1xd9kf3.js";
import { Xe } from "B:/~BUN/root/chunk-parcaazx.js";
import { V, e, r } from "B:/~BUN/root/chunk-qkvevvte.js";
import { Hue } from "B:/~BUN/root/chunk-hkm1a44r.js";
import { AU } from "B:/~BUN/root/chunk-ys127bbc.js";
import { Ko } from "B:/~BUN/root/chunk-v8s05yj9.js";
import { Sr, mr, se, T, g, N } from "B:/~BUN/root/chunk-rnj6pcz5.js";
import { S } from "B:/~BUN/root/chunk-yv67t8hr.js";
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
  options = [{
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
  abortController: abortController,
  messages: messages,
  initialDescription: initialDescription,
  onDone: onDone,
  applyMessageOp: applyMessageOp,
  backgroundTasks = {},
  mode = "post",
  readFileState: readFileState,
  surveyFeedbackSource: surveyFeedbackSource,
  command = "/feedback"
}) {
  let {
      storageV5: storageV5,
      credentials: credentials
    } = ke(),
    [h, R] = g("userInput"),
    [cursorOffset, onChangeCursorOffset] = g(0),
    [M, ce] = g(initialDescription ?? ""),
    [children_2, H] = g(null),
    [children, de] = g(null),
    [error, A] = g(null),
    ee = Lt(),
    E = ee ? lr()?.sessionId ?? null : null,
    [gitStatePromise] = g(() => ee ? Promise.resolve(null) : nA().then(l => l ? t5n() : null).catch(() => null)),
    [Ve, ht] = g(null),
    [le, yt] = g("session"),
    transcripts = W(l => l.transcripts),
    columns = ve().columns - 4,
    Wt = Hue(),
    pe = x("tengu_amber_lynx", !1),
    kt = se(async () => {
      if (R("submitting"), A(null), H(null), mode === "bundle") {
        let re = await rJn({
          messages: messages,
          description: M,
          surface: "cli",
          scope: le,
          backgroundTasks: backgroundTasks,
          transcripts: transcripts,
          signal: abortController.signal,
          surveyFeedbackSource: surveyFeedbackSource,
          storageV5: storageV5
        });
        if (abortController.signal.aborted) return;
        if (re.success) H(re.bundleId), de(re.zipPath), R("done");else A(`Couldn't save the feedback bundle to disk: ${re.error}`), R("userInput");
        return;
      }
      let [l, Se] = await Promise.all([o1e({
        messages: messages,
        description: M,
        surface: "cli",
        scope: le,
        backgroundTasks: backgroundTasks,
        transcripts: transcripts,
        signal: abortController.signal,
        surveyFeedbackSource: surveyFeedbackSource,
        storageV5: storageV5,
        credentials: credentials
      }), pe ? Promise.resolve(null) : ct(M, abortController.signal, credentials)]);
      if (abortController.signal.aborted) return;
      if (ht(Se), l.success) H(l.feedbackId), R("done");else {
        if (l.isZdrOrg) A("Feedback collection is not available for organizations with custom data retention policies.");else if (l.failureReason === "auth_error") A("Couldn't send feedback: not signed in. Run /login, then retry.");else if (l.failureReason === "policy_blocked") A(dee(command) ?? "Feedback is disabled by your organization's policy.");else {
          let re = l.statusCode ? ` (server returned ${l.statusCode})` : l.failureReason === "timeout" ? " (request timed out)" : l.failureReason === "network_error" ? " (couldn't reach the service)" : "";
          A(`Couldn't send feedback${re}. If it keeps failing, you can file at ${We} instead.`);
        }
        R("userInput");
      }
    }, [M, messages, pe, backgroundTasks, transcripts, abortController, mode, le, storageV5, credentials]),
    onCancel = se(() => {
      abortController.abort(), onDone("Feedback / bug report cancelled", {
        display: "system"
      });
    }, [onDone, abortController]),
    Ht = se(() => {
      R("done");
    }, []),
    zt = se(l => {
      A(l), R("userInput");
    }, []);
  ze("confirm:no", onCancel, {
    context: "Settings",
    isActive: h === "userInput"
  });
  let St = h === "done" || error && h !== "userInput";
  function onKeyDown(l) {
    if (l.ctrl || l.meta) return;
    if (h === "done") {
      if (l.preventDefault(), mode === "share") return;
      if (!pe && l.key === "return" && Ve) {
        let Se = lt(children_2 ?? "", Ve, M, J_n());
        Ko(Se);
      }
      if (error) onDone("Error submitting feedback / bug report", {
        display: "system"
      });else if (mode === "bundle" && children) onDone(`Feedback bundle saved to \`${children}\``, {
        display: "system"
      });else onDone("Feedback / bug report submitted", {
        display: "system"
      });
      return;
    }
    if (error && h !== "userInput") {
      l.preventDefault(), onDone("Error submitting feedback / bug report", {
        display: "system"
      });
      return;
    }
    if (h === "consent") {
      if (l.key === "left") {
        l.preventDefault(), R(mode === "share" || ee ? "userInput" : "scope");
        return;
      }
      if (l.key === "return" || l.key === " ") l.preventDefault(), kt();
    }
  }
  return e(jr, {
    onKeyDown: onKeyDown,
    children: r(ge, {
      title: "Submit feedback / bug report",
      onCancel: onCancel,
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
          action: Z[mode].consentAction
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
          onChange: l => {
            if (ce(l), error) A(null);
          },
          columns: columns,
          onSubmit: l => {
            if (mode !== "share" && l.trim() === "") {
              A("Please describe the issue before submitting.");
              return;
            }
            A(null), R(mode === "share" || ee ? "consent" : "scope");
          },
          onExitMessage: l => {
            if (l) abortController.abort(), onDone("Feedback cancelled", {
              display: "system"
            });
          },
          cursorOffset: cursorOffset,
          onChangeCursorOffset: onChangeCursorOffset,
          showCursor: !0,
          focus: !0
        }), error && r(s, {
          flexDirection: "column",
          gap: 1,
          children: [e(ko, {
            error: error
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
          options: options,
          defaultFocusValue: le,
          onChange: l => {
            yt(l), R("consent");
          },
          onCancel: onCancel
        })]
      }), h === "consent" && r(s, {
        flexDirection: "column",
        children: [e(n, {
          children: Z[mode].consentIntro
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
          }), mode !== "share" && ee && r(n, {
            children: ["- Remote workspace:", " ", r(n, {
              dimColor: !0,
              children: [E ? `session ${E}; ` : "", "git metadata is not collected from this machine"]
            })]
          }), mode !== "share" && e(Sr, {
            fallback: null,
            children: e(He, {
              gitStatePromise: gitStatePromise
            })
          }), r(n, {
            children: ["- Session transcript:", " ", e(n, {
              dimColor: !0,
              children: mode === "share" ? fe.session : fe[le]
            })]
          })]
        }), e(s, {
          marginTop: 1,
          children: e(n, {
            wrap: "wrap",
            dimColor: !0,
            children: Z[mode].consentFooter
          })
        })]
      }), h === "submitting" && e(s, {
        flexDirection: "row",
        gap: 1,
        children: e(n, {
          children: Z[mode].submitting
        })
      }), h === "done" && mode === "bundle" && r(s, {
        flexDirection: "column",
        children: [r(n, {
          color: "success",
          children: [e(et, {
            status: "success",
            withSpace: !0
          }), "Feedback bundle saved"]
        }), children && r(s, {
          marginTop: 1,
          flexDirection: "column",
          children: [r(n, {
            children: ["Bundle: ", e(n, {
              dimColor: !0,
              children: children
            })]
          }), r(n, {
            children: ["Reference ID: ", e(n, {
              dimColor: !0,
              children: children_2
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
      }), h === "done" && mode === "post" && (pe ? r(s, {
        flexDirection: "column",
        children: [error ? e(ko, {
          error: error
        }) : r(n, {
          color: "success",
          children: [e(et, {
            status: "success",
            withSpace: !0
          }), "Feedback sent"]
        }), children_2 && r(V, {
          children: [e(s, {
            marginTop: 1,
            children: r(n, {
              children: ["Reference ID: ", e(n, {
                dimColor: !0,
                children: children_2
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
        children: [error ? e(ko, {
          error: error
        }) : e(n, {
          color: "success",
          children: "Thank you for your report!"
        }), children_2 && r(n, {
          dimColor: !0,
          children: ["Feedback ID: ", children_2]
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
  });
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
- Version: ${{
      ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
      PACKAGE_URL: "@anthropic-ai/claude-code",
      README_URL: "https://code.claude.com/docs/en/overview",
      VERSION: "2.1.283",
      FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
      BUILD_TIME: "2026-09-25T00:44:42Z",
      GIT_SHA: "4631ccd7cfe41e69bc72d3b5b9dc7282536e4985",
      HOOKS_WORKER_URL: "B:/~BUN/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js",
      DD_SOURCEMAP_GROUP: "win32"
    }.VERSION || "unknown"}
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
      if (ue >= E.length - 2) E = E.slice(0, ue);
    }
    return j + E + de + ne;
  }
  if (ie.length <= M) return j + h + ie + R;
  let ce = encodeURIComponent("\u2026"),
    X = 50,
    H = ie.slice(0, M - ce.length - X),
    Q = H.lastIndexOf("%");
  if (Q >= H.length - 2) H = H.slice(0, Q);
  return j + h + H + ce + R + ne;
}
async function ct(userPrompt, signal, credentials_2) {
  try {
    let m = await $P({
        systemPrompt: ei(["Generate a concise, technical issue title (max 80 chars) for a public GitHub issue based on this bug report for Claude Code.", "Claude Code is an agentic coding CLI based on the Anthropic API.", "The title should:", "- Include the type of issue [Bug] or [Feature Request] as the first thing in the title", "- Be concise, specific and descriptive of the actual problem", "- Use technical terminology appropriate for a software issue", '- For error messages, extract the key error (e.g., "Missing Tool Result Block" rather than the full message)', "- Be direct and clear for developers to understand the problem", '- If you cannot determine a clear issue, use "Bug Report: [brief description]"', "- Any LLM API errors are from the Anthropic API, not from any other model provider", "Your response will be directly used as the title of the Github issue, and as such should not contain any other commentary or explaination", 'Examples of good titles include: "[Bug] Auto-Compact triggers to soon", "[Bug] Anthropic API Error: Missing Tool Result Block", "[Bug] Error: Invalid Model Name for Opus"']),
        userPrompt: userPrompt,
        signal: signal,
        options: {
          hasAppendSystemPrompt: !1,
          toolChoice: void 0,
          isNonInteractiveSession: !1,
          agents: [],
          querySource: "feedback",
          mcpTools: [],
          agentContext: Tc(),
          credentials: credentials_2
        }
      }),
      v = m.message.content[0]?.type === "text" ? m.message.content[0].text : "Bug Report";
    if (B4(v)) return je(userPrompt);
    if (Et(v)) return je(userPrompt);
    return v;
  } catch (error) {
    if (Ke(error)) t("Feedback title generation via Haiku aborted, using fallback", {
      level: "debug"
    });else d(error);
    return je(userPrompt);
  }
}
var Tt = /^(i can['\u2019]t|i cannot|i['\u2019]m unable|i am unable|i['\u2019]m sorry|i am sorry|i apologize|sorry,)/i;
function Et(c) {
  let i = c.trim();
  return i === "" || Tt.test(i);
}
function je(c) {
  let i = xr(c);
  if (i.length <= 60 && i.length > 5) return i;
  let o = i.slice(0, 60);
  if (i.length > 60) {
    let m = o.lastIndexOf(" ");
    if (m > 30) o = o.slice(0, m);
    o += "...";
  }
  return o.length < 10 ? "Bug Report" : o;
}
function He(c) {
  let v = w(8),
    {
      gitStatePromise: gitStatePromise_2
    } = c,
    o = mr(gitStatePromise_2);
  if (!o) {
    return null;
  }
  const branchName = o.branchName;
  let C;
  if (v[0] !== o.commitHash) C = o.commitHash ? `, ${o.commitHash.slice(0, 7)}` : "", v[0] = o.commitHash, v[1] = C;else C = v[1];
  const f = o.remoteUrl ? ` @ ${o.remoteUrl}` : "",
    I = !o.isHeadOnRemote && ", not synced",
    U = !o.isClean && ", has local changes";
  let D;
  if (v[2] !== o.branchName || v[3] !== C || v[4] !== f || v[5] !== I || v[6] !== U) D = r(n, {
    children: ["- Git repo metadata:", " ", r(n, {
      dimColor: !0,
      children: [branchName, C, f, I, U]
    })]
  }), v[2] = o.branchName, v[3] = C, v[4] = f, v[5] = I, v[6] = U, v[7] = D;else D = v[7];
  return D;
}
function U1o(onDone_2, abortController_2, messages_2, applyMessageOp_2, initialDescription_2 = "", backgroundTasks_2 = {}, readFileState_2, command_2 = "/feedback") {
  let U = r1e(command_2);
  if (U.kind === "disabled") return onDone_2(U.reason), null;
  let surveyFeedbackSource_2 = n3r() ?? void 0;
  return e(dt, {
    abortController: abortController_2,
    messages: messages_2,
    initialDescription: initialDescription_2,
    onDone: onDone_2,
    applyMessageOp: applyMessageOp_2,
    backgroundTasks: backgroundTasks_2,
    mode: U.kind,
    readFileState: readFileState_2,
    surveyFeedbackSource: surveyFeedbackSource_2,
    command: command_2
  });
}
function Ge(c, i, o, m) {
  return U1o(c, Hn(), i.messages, i.applyMessageOp, o, {
    ...i.taskRegistry.all()
  }, i.readFileState, m);
}
async function Rwn(c, i, o, m = "/feedback") {
  let v = o?.trim() === "public" ? "" : o || "";
  return Ge(c, i, v, m);
}
function gt(c) {
  let C = w(9),
    {
      onDone: onDone_3,
      caller: caller
    } = c,
    [m, v] = g(),
    f;
  if (C[0] !== caller.messages) f = () => [...caller.messages], C[0] = caller.messages, C[1] = f;else f = C[1];
  let [messages_3] = g(f),
    U = T(!1);
  if (m !== void 0) {
    return m;
  }
  let onWriteNew;
  if (C[2] !== caller || C[3] !== onDone_3) onWriteNew = () => {
    if (U.current) {
      return;
    }
    let j = Ge(onDone_3, caller, "", "/feedback");
    U.current = !0, v(j);
  }, C[2] = caller, C[3] = onDone_3, C[4] = onWriteNew;else onWriteNew = C[4];
  let oe;
  if (C[5] !== messages_3 || C[6] !== onDone_3 || C[7] !== onWriteNew) oe = e(AJe, {
    messages: messages_3,
    onDone: onDone_3,
    onWriteNew: onWriteNew
  }), C[5] = messages_3, C[6] = onDone_3, C[7] = onWriteNew, C[8] = oe;else oe = C[8];
  return oe;
}
async function Cqo(onDone_4, caller_2, o) {
  if (AU() && !o?.trim() && !t3r()) return e(gt, {
    onDone: onDone_4,
    caller: caller_2
  });
  return Rwn(onDone_4, caller_2, o);
}
export { U1o, Rwn, Cqo };