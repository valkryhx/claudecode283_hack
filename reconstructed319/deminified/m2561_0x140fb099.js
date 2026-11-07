// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { Re } from "B:/~BUN/root/chunk-qr2xxkqa.js";
import { We } from "B:/~BUN/root/chunk-y2g9f85n.js";
import { S } from "B:/~BUN/root/chunk-bn4bjw9d.js";
import { a } from "B:/~BUN/root/chunk-xrwdh0g4.js";
import { t } from "B:/~BUN/root/chunk-2pp12te6.js";
import { Q, Wn } from "B:/~BUN/root/chunk-n8cnxns2.js";
import { _s } from "B:/~BUN/root/chunk-jdtvghyw.js";
import { Ne } from "B:/~BUN/root/chunk-qdyt0gq6.js";
import { i } from "B:/~BUN/root/chunk-j6pt0v41.js";
import { cc, v } from "B:/~BUN/root/chunk-1ks9vs37.js";
import { Fe } from "B:/~BUN/root/chunk-vxjrk7vf.js";
import { m } from "B:/~BUN/root/chunk-3z3yrbk4.js";
import { E_ } from "B:/~BUN/root/chunk-3xdsa4p8.js";
import { qJ } from "B:/~BUN/root/chunk-begxsvab.js";
import { rr, Ct } from "B:/~BUN/root/chunk-thn0wk2x.js";
import { RH, Wxo } from "B:/~BUN/root/chunk-1g25msn4.js";
import { lue, jkr, HZt } from "B:/~BUN/root/chunk-yhafkw66.js";
import { Xn } from "B:/~BUN/root/chunk-vmcmhkh2.js";
import { s, n } from "B:/~BUN/root/chunk-qey16aan.js";
import { pt } from "B:/~BUN/root/chunk-v95bwhaa.js";
import { Sde, fW } from "B:/~BUN/root/chunk-27h4st9h.js";
import { Xa } from "B:/~BUN/root/chunk-m8dg5txf.js";
import { Tfn, Cfn, rzt, uPe, W$e, PBr } from "B:/~BUN/root/chunk-qg8vk00h.js";
import { ei } from "B:/~BUN/root/chunk-03yjyf4y.js";
import { G } from "B:/~BUN/root/chunk-tmdrwqnv.js";
import { Y } from "B:/~BUN/root/chunk-c1v460b9.js";
import { Ze } from "B:/~BUN/root/chunk-cpzw87wr.js";
import { Tt } from "B:/~BUN/root/chunk-dw9hahea.js";
import { Ce } from "B:/~BUN/root/chunk-cync0e08.js";
import { Ir } from "B:/~BUN/root/chunk-39zyvd3e.js";
import { ke } from "B:/~BUN/root/chunk-bvcekd4j.js";
import { gGt } from "B:/~BUN/root/chunk-mbrp1y9w.js";
import { B4s, j4s } from "B:/~BUN/root/chunk-cbbfqbjt.js";
import { is } from "B:/~BUN/root/chunk-09epe94m.js";
import { Ys } from "B:/~BUN/root/chunk-28bb8488.js";
import { gt } from "B:/~BUN/root/chunk-sx03ea6s.js";
import { ne, e, r } from "B:/~BUN/root/chunk-t16eynda.js";
import { v8 } from "B:/~BUN/root/chunk-nm56k8cy.js";
import { Ho, ko, ue, y, j } from "B:/~BUN/root/chunk-czy5r8bc.js";
import { Zi } from "B:/~BUN/root/chunk-r2kdqtaa.js";
import { m2e } from "B:/~BUN/root/chunk-xr3thd43.js";
import { Hs } from "B:/~BUN/root/chunk-3xtmwvra.js";
import { w } from "B:/~BUN/root/chunk-4qfwb3rf.js";
j();
j();
j();
var $o = 7250,
  chord = ["enter", "escape"],
  Eo = 200,
  Oe = {
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
  Me = {
    transcript_missing: "This session has no transcript on disk, so the bundle has the report only.",
    transcript_incomplete: "The session transcript couldn't be read in full, so the bundle is missing some or all of it.",
    transcript_over_zip_limit: "The session transcript is too large for one archive, so the bundle has only the start of it."
  },
  te = {
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
function Ue(p) {
  let o = Hs({
      status: "none"
    }),
    {
      subscribe: subscribe,
      getSnapshot: getSnapshot
    } = o;
  if (p === "share") return {
    subscribe: subscribe,
    getSnapshot: getSnapshot,
    start() {},
    deliver() {},
    save() {},
    fail() {},
    abandon() {}
  };
  return {
    subscribe: subscribe,
    getSnapshot: getSnapshot,
    start() {
      o.setState(() => ({
        status: "sending"
      }));
    },
    deliver(referenceId) {
      o.setState(() => ({
        status: "delivered",
        referenceId: referenceId
      }));
    },
    save(referenceId_2, bundlePath, transcriptProblem) {
      o.setState(() => ({
        status: "saved",
        referenceId: referenceId_2,
        bundlePath: bundlePath,
        ...(transcriptProblem !== void 0 && {
          transcriptProblem: transcriptProblem
        })
      }));
    },
    fail(reason, final) {
      o.setState(c => c.status === "delivered" || c.status === "saved" ? c : {
        status: "failed",
        reason: reason,
        ...(final === !0 && {
          final: final
        })
      });
    },
    abandon() {
      o.setState(h => h.status === "sending" ? {
        status: "none"
      } : h);
    }
  };
}
async function $t(p, o) {
  try {
    await p();
  } finally {
    o.abandon();
  }
}
function Lt({
  abortController: abortController,
  messages: messages,
  initialDescription: initialDescription,
  onDone: onDone,
  applyMessageOp: applyMessageOp,
  backgroundTasks = {},
  mode = "post",
  readFileState: readFileState,
  surveyFeedbackSource: surveyFeedbackSource,
  command = "/feedback",
  wholeTranscript: wholeTranscript,
  send: send
}) {
  let {
      storageV5: storageV5,
      credentials: credentials
    } = Fe(),
    host = ei(),
    [we, z] = y("userInput"),
    [cursorOffset, onChangeCursorOffset] = y(0),
    [se, Gt] = y(initialDescription ?? ""),
    [Vt, $e] = y(null),
    [Kt, qt] = y(null),
    [Xt, Jt] = y(null),
    [Ee, re] = y(null),
    [Yt, De] = y(!1),
    [N] = y(() => send ?? Ue(mode)),
    Qt = Ne(N),
    [Zt, mt] = y(!1),
    [eo, to] = y(null),
    _ = eo ?? Qt,
    V = mode !== "share" && !Zt && _.status !== "none",
    oo = V && _.status !== "failed",
    no = _.status === "sending" ? "submitting" : "done",
    b = oo ? no : we,
    so = V && _.status === "failed" ? _.reason : null,
    error = Ee ?? so,
    fe = Ee !== null ? Yt : V && _.status === "failed" && _.final === !0,
    children_2 = V && (_.status === "delivered" || _.status === "saved") ? _.referenceId : Vt,
    children = V && _.status === "saved" ? _.bundlePath : Kt,
    Te = V && _.status === "saved" ? _.transcriptProblem ?? null : Xt,
    he = Ct(),
    ft = he ? rr()?.sessionId ?? null : null,
    [gitStatePromise] = y(() => he ? Promise.resolve(null) : RH().then(g => g ? Wxo() : null).catch(() => null)),
    [ht, ao] = y(null),
    [be, io] = y("session"),
    transcripts = G(g => g.transcripts),
    columns = Re().columns - 4,
    jo = m2e(),
    _e = v("tengu_amber_lynx", !1),
    bt = ue(async () => {
      z("submitting"), re(null), $e(null), N.start();
      let g = (X, A = !1) => {
        re(X), De(A), z("userInput"), N.fail(X, A);
      };
      if (mode === "bundle") {
        let X = lue(command);
        if (X !== null && !HZt()) {
          m("feedback_bundle", "disabled_at_save"), g(X);
          return;
        }
        let A = await PBr({
          messages: messages,
          description: se,
          surface: "cli",
          scope: be,
          backgroundTasks: backgroundTasks,
          transcripts: transcripts,
          signal: abortController.signal,
          surveyFeedbackSource: surveyFeedbackSource,
          wholeTranscript: wholeTranscript,
          storageV5: storageV5,
          host: host
        });
        if (abortController.signal.aborted) return;
        if (A.success) $e(A.bundleId), qt(A.zipPath), Jt(A.transcriptProblem ?? null), z("done"), N.save(A.bundleId, A.zipPath, A.transcriptProblem);else g(`Couldn't save the feedback bundle to disk: ${A.error}`);
        return;
      }
      let [T, mo] = await Promise.all([W$e({
        messages: messages,
        description: se,
        surface: "cli",
        scope: be,
        backgroundTasks: backgroundTasks,
        transcripts: transcripts,
        signal: abortController.signal,
        surveyFeedbackSource: surveyFeedbackSource,
        storageV5: storageV5,
        host: host,
        credentials: credentials
      }), _e ? Promise.resolve(null) : xt(se, abortController.signal, credentials)]);
      if (abortController.signal.aborted) return;
      if (ao(mo), T.success) $e(T.feedbackId), z("done"), N.deliver(T.feedbackId);else {
        let X = Tfn(T),
          A = X ?? Cfn(T);
        if (A !== void 0) g(A, X !== void 0 && T.refusal?.reportContent !== !0);else if (T.failureReason === "auth_error") g("Couldn't send feedback: not signed in. Run /login, then retry.");else if (T.failureReason === "policy_blocked") g(lue(command) ?? "Feedback is disabled by your organization's policy.");else {
          let fo = rzt(T) ?? (T.failureReason === "timeout" ? " (request timed out)" : T.failureReason === "network_error" ? " (couldn't reach the service)" : "");
          g(`Couldn't send feedback${fo}. If it keeps failing, you can file at ${jkr()} instead.`);
        }
      }
    }, [se, messages, _e, backgroundTasks, transcripts, abortController, mode, be, storageV5, credentials, command, wholeTranscript, N, host]),
    co = ue(() => $t(bt, N), [bt, N]),
    onCancel = ue(() => {
      if (b === "done") {
        onDone(void 0, {
          display: "skip"
        });
        return;
      }
      if (V) {
        let g = N.getSnapshot();
        to(T => T ?? g);
      }
      abortController.abort(), onDone("Feedback / bug report cancelled", {
        display: "system"
      });
    }, [onDone, abortController, N, V, b]),
    zo = ue(() => {
      z("done");
    }, []),
    Go = ue(g => {
      re(g), De(!1), z("userInput");
    }, []);
  pt("confirm:no", onCancel, {
    context: "Settings",
    isActive: b === "userInput"
  });
  let uo = b === "done" && mode !== "share" || error && b !== "userInput";
  function onKeyDown(g) {
    if (g.ctrl || g.meta) return;
    if (b === "done") {
      if (mode === "share") return;
      if (g.preventDefault(), !_e && g.key === "return" && ht) {
        let T = Et(children_2 ?? "", ht, se);
        Zi(T);
      }
      if (error) onDone("Error submitting feedback / bug report", {
        display: "system"
      });else if (mode === "bundle" && children) onDone(Te === null ? `Feedback bundle saved to \`${children}\`` : `Feedback bundle saved to \`${children}\`. ${Me[Te]}`, {
        display: "system"
      });else onDone("Feedback / bug report submitted", {
        display: "system"
      });
      return;
    }
    if (error && b !== "userInput") {
      g.preventDefault(), onDone("Error submitting feedback / bug report", {
        display: "system"
      });
      return;
    }
    if (b === "consent") {
      if (g.key === "left") {
        g.preventDefault(), z(mode === "share" || he ? "userInput" : "scope");
        return;
      }
      if (g.key === "return" || g.key === " ") g.preventDefault(), co();
    }
  }
  return e(is, {
    onKeyDown: onKeyDown,
    children: r(ke, {
      title: "Submit feedback / bug report",
      onCancel: onCancel,
      isCancelActive: b !== "userInput" && !uo,
      hideInputGuide: b === "done" && mode !== "share",
      inputGuide: b === "userInput" ? r(Ce, {
        children: [!fe && e(Y, {
          chord: "enter",
          action: "continue"
        }), e(gt, {
          action: "confirm:no",
          context: "Confirmation",
          fallback: "Esc",
          description: "cancel"
        })]
      }) : b === "scope" ? r(Ce, {
        children: [e(Y, {
          chord: "enter",
          action: "choose"
        }), e(gt, {
          action: "confirm:no",
          context: "Confirmation",
          fallback: "Esc",
          description: "cancel"
        })]
      }) : b === "consent" ? r(Ce, {
        children: [e(Y, {
          chord: "enter",
          action: te[mode].consentAction
        }), e(Y, {
          chord: "left",
          action: "change"
        }), e(gt, {
          action: "confirm:no",
          context: "Confirmation",
          fallback: "Esc",
          description: "cancel"
        })]
      }) : b === "submitting" ? e(gt, {
        action: "confirm:no",
        context: "Confirmation",
        fallback: "Esc",
        description: "cancel"
      }) : b === "done" ? r(Ce, {
        children: [e(Y, {
          chord: "c",
          action: "copy"
        }), e(Y, {
          chord: chord,
          action: "close"
        })]
      }) : null,
      children: [b === "userInput" && r(s, {
        flexDirection: "column",
        gap: 1,
        children: [e(n, {
          children: "Describe the issue below:"
        }), e(Ir, {
          value: se,
          onChange: g => {
            if (Gt(g), fe && Ee === null && error !== null) re(error), De(!0);
            if (mt(!0), error && !fe) re(null);
          },
          columns: columns,
          clearOnSubmit: !1,
          onSubmit: g => {
            if (fe) return;
            if (mt(!0), mode !== "share" && g.trim() === "") {
              re("Please describe the issue before submitting."), De(!1);
              return;
            }
            re(null), z(mode === "share" || he ? "consent" : "scope");
          },
          onExitMessage: g => {
            if (g) abortController.abort(), onDone("Feedback cancelled", {
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
          children: [e(Ys, {
            error: error
          }), !fe && e(n, {
            dimColor: !0,
            children: "Edit and press Enter to retry, or Esc to cancel"
          })]
        })]
      }), b === "scope" && r(s, {
        flexDirection: "column",
        gap: 1,
        children: [e(n, {
          children: "How much session history should we include?"
        }), e(Ze, {
          options: options,
          defaultFocusValue: be,
          onChange: g => {
            io(g), z("consent");
          },
          onCancel: onCancel
        })]
      }), b === "consent" && r(s, {
        flexDirection: "column",
        children: [e(n, {
          children: te[mode].consentIntro
        }), r(s, {
          marginLeft: 2,
          flexDirection: "column",
          children: [r(n, {
            children: ["- Your feedback / bug description:", " ", e(n, {
              dimColor: !0,
              children: se
            })]
          }), r(n, {
            children: ["- Environment info:", " ", r(n, {
              dimColor: !0,
              children: [i.platform, ", ", i.terminal, ", v", {
                ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
                PACKAGE_URL: "@anthropic-ai/claude-code",
                README_URL: "https://code.claude.com/docs/en/overview",
                VERSION: "2.1.319",
                FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
                BUILD_TIME: "2026-11-05T18:14:18Z",
                GIT_SHA: "fbdd7e02e8530e4c2ade8cc67d30104e53d2c8f2",
                HOOKS_WORKER_URL: "B:/~BUN/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js",
                DD_SOURCEMAP_GROUP: "win32"
              }.VERSION, ""]
            })]
          }), mode !== "share" && he && r(n, {
            children: ["- Remote workspace:", " ", r(n, {
              dimColor: !0,
              children: [ft ? `session ${ft}; ` : "", "git metadata is not collected from this machine"]
            })]
          }), mode !== "share" && e(Ho, {
            fallback: null,
            children: e(ct, {
              gitStatePromise: gitStatePromise
            })
          }), r(n, {
            children: ["- Session transcript:", " ", e(n, {
              dimColor: !0,
              children: mode === "share" ? Oe.session : Oe[be]
            })]
          }), mode !== "share" && r(n, {
            children: ["- Recent error messages:", " ", e(n, {
              dimColor: !0,
              children: "up to the last 100 since you launched Claude Code (may include file paths)"
            })]
          })]
        }), e(s, {
          marginTop: 1,
          children: e(n, {
            wrap: "wrap",
            dimColor: !0,
            children: te[mode].consentFooter
          })
        })]
      }), b === "submitting" && mode !== "share" && e(s, {
        flexDirection: "row",
        gap: 1,
        children: e(n, {
          children: te[mode].submitting
        })
      }), b === "done" && mode === "bundle" && r(s, {
        flexDirection: "column",
        children: [r(n, {
          color: "success",
          children: [e(Tt, {
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
          }), Te && e(s, {
            marginTop: 1,
            children: e(n, {
              wrap: "wrap",
              children: Me[Te]
            })
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
      }), b === "done" && mode === "post" && (_e || V ? r(s, {
        flexDirection: "column",
        children: [error ? e(Ys, {
          error: error
        }) : r(n, {
          color: "success",
          children: [e(Tt, {
            status: "success",
            withSpace: !0
          }), "Feedback sent"]
        }), children_2 && r(ne, {
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
        children: [error ? e(Ys, {
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
            children: r(Ce, {
              children: [e(Y, {
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
function Et(p, o, l) {
  let f = Q(_s(o), Eo),
    h = _s(l),
    C = m2e(),
    c = `${jkr()}/new?title=${encodeURIComponent(f)}&labels=user-reported,bug&body=`,
    P = encodeURIComponent(`**Bug Description**
`),
    k = encodeURIComponent(`

**Environment Info**
- Platform: ${i.platform}
- Terminal: ${i.terminal}
- Version: ${{
      ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
      PACKAGE_URL: "@anthropic-ai/claude-code",
      README_URL: "https://code.claude.com/docs/en/overview",
      VERSION: "2.1.319",
      FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
      BUILD_TIME: "2026-11-05T18:14:18Z",
      GIT_SHA: "fbdd7e02e8530e4c2ade8cc67d30104e53d2c8f2",
      HOOKS_WORKER_URL: "B:/~BUN/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js",
      DD_SOURCEMAP_GROUP: "win32"
    }.VERSION || "unknown"}
` + (qJ() ? `- ${E_}: on
` : "") + `- Feedback ID: ${p}
`),
    D = encodeURIComponent(h),
    H = $o - c.length - P.length - k.length;
  if (D.length > H) {
    let Se = encodeURIComponent(`\u2026

**Note:** The description was shortened to fit GitHub's link length limit. The full description was sent to Anthropic with the feedback report; its Feedback ID is below.`),
      ve = 50,
      pe = H - Se.length - 50;
    D = "";
    for (let me of h) {
      let we = encodeURIComponent(me);
      if (D.length + we.length > pe) break;
      D += we;
    }
    D += Se;
  }
  return c + P + D + k;
}
async function xt(userPrompt, signal, credentials_2) {
  try {
    let f = await fW({
        systemPrompt: Xa(["Generate a concise, technical issue title (max 80 chars) for a public GitHub issue based on this bug report for Claude Code.", "Claude Code is an agentic coding CLI based on the Anthropic API.", "The title should:", "- Include the type of issue [Bug] or [Feature Request] as the first thing in the title", "- Be concise, specific and descriptive of the actual problem", "- Use technical terminology appropriate for a software issue", '- For error messages, extract the key error (e.g., "Missing Tool Result Block" rather than the full message)', "- Be direct and clear for developers to understand the problem", '- If you cannot determine a clear issue, use "Bug Report: [brief description]"', "- Any LLM API errors are from the Anthropic API, not from any other model provider", "Your response will be directly used as the title of the Github issue, and as such should not contain any other commentary or explaination", 'Examples of good titles include: "[Bug] Auto-Compact triggers to soon", "[Bug] Anthropic API Error: Missing Tool Result Block", "[Bug] Error: Invalid Model Name for Opus"']),
        userPrompt: userPrompt,
        signal: signal,
        options: {
          hasAppendSystemPrompt: !1,
          toolChoice: void 0,
          isNonInteractiveSession: !1,
          agents: [],
          querySource: "feedback",
          mcpTools: [],
          agentContext: cc(),
          credentials: credentials_2
        }
      }),
      h = f.message.content[0]?.type === "text" ? f.message.content[0].text : "Bug Report";
    if (f.isApiErrorMessage || Sde(h)) return lt(userPrompt);
    if (Lo(h)) return lt(userPrompt);
    return h;
  } catch (error) {
    if (We(error)) t("Feedback title generation via Haiku aborted, using fallback", {
      level: "debug"
    });else a(error);
    return lt(userPrompt);
  }
}
var xo = /^(i can['\u2019]t|i cannot|i['\u2019]m unable|i am unable|i['\u2019]m sorry|i am sorry|i apologize|sorry,)/i;
function Lo(p) {
  let o = p.trim();
  return o === "" || xo.test(o);
}
function lt(p) {
  let o = Wn(p);
  if (o.length <= 60 && o.length > 5) return o;
  let l = o.slice(0, 60);
  if (o.length > 60) {
    let f = l.lastIndexOf(" ");
    if (f > 30) l = l.slice(0, f);
    l += "...";
  }
  return l.length < 10 ? "Bug Report" : l;
}
function ct(p) {
  let h = S(8),
    {
      gitStatePromise: gitStatePromise_2
    } = p,
    l = ko(gitStatePromise_2);
  if (!l) {
    return null;
  }
  const branchName = l.branchName;
  let C;
  if (h[0] !== l.commitHash) C = l.commitHash ? `, ${l.commitHash.slice(0, 7)}` : "", h[0] = l.commitHash, h[1] = C;else C = h[1];
  const c = l.remoteUrl ? ` @ ${l.remoteUrl}` : "",
    P = !l.isHeadOnRemote && ", not synced",
    k = !l.isClean && ", has local changes";
  let D;
  if (h[2] !== l.branchName || h[3] !== C || h[4] !== c || h[5] !== P || h[6] !== k) D = r(n, {
    children: ["- Git repo metadata:", " ", r(n, {
      dimColor: !0,
      children: [branchName, C, c, P, k]
    })]
  }), h[2] = l.branchName, h[3] = C, h[4] = c, h[5] = P, h[6] = k, h[7] = D;else D = h[7];
  return D;
}
function xsa(onDone_2, abortController_2, messages_2, applyMessageOp_2, initialDescription_2 = "", backgroundTasks_2 = {}, readFileState_2, command_2 = "/feedback") {
  let k = uPe(command_2);
  if (k.kind === "disabled") return onDone_2(k.reason), null;
  let surveyFeedbackSource_2 = j4s() ?? void 0,
    send_2 = Ue(k.kind);
  return e(Lt, {
    abortController: abortController_2,
    messages: messages_2,
    initialDescription: initialDescription_2,
    onDone: onDone_2,
    applyMessageOp: applyMessageOp_2,
    backgroundTasks: backgroundTasks_2,
    mode: k.kind,
    readFileState: readFileState_2,
    surveyFeedbackSource: surveyFeedbackSource_2,
    command: command_2,
    wholeTranscript: k.kind === "bundle" && (k.cause === "share_switch" || command_2 === "/share" && i.CLAUDE_CODE_ENABLE_SHARE_BUNDLE),
    send: send_2
  });
}
function ut(p, o, l, f) {
  return xsa(p, Xn(), o.messages, o.applyMessageOp, l, {
    ...o.taskRegistry.all()
  }, o.readFileState, f);
}
async function tWr(p, o, l, f = "/feedback") {
  let h = l?.trim() === "public" ? "" : l || "";
  return ut(p, o, h, f);
}
function jt(p) {
  let C = S(10),
    {
      onDone: onDone_3,
      caller: caller,
      manualDialog: manualDialog
    } = p,
    h = Ne(manualDialog),
    c;
  if (C[0] !== caller.messages) c = () => [...caller.messages], C[0] = caller.messages, C[1] = c;else c = C[1];
  let [messages_3] = y(c);
  if (h !== void 0) {
    return h;
  }
  let onWriteNew;
  if (C[2] !== caller || C[3] !== manualDialog || C[4] !== onDone_3) onWriteNew = () => {
    if (manualDialog.getState() !== void 0) {
      return;
    }
    let D = ut(onDone_3, caller, "", "/feedback");
    manualDialog.setState(() => D);
  }, C[2] = caller, C[3] = manualDialog, C[4] = onDone_3, C[5] = onWriteNew;else onWriteNew = C[5];
  let H;
  if (C[6] !== messages_3 || C[7] !== onDone_3 || C[8] !== onWriteNew) H = e(gGt, {
    messages: messages_3,
    onDone: onDone_3,
    onWriteNew: onWriteNew
  }), C[6] = messages_3, C[7] = onDone_3, C[8] = onWriteNew, C[9] = H;else H = C[9];
  return H;
}
async function rha(onDone_4, caller_2, l) {
  if (v8() && !l?.trim() && !B4s()) return e(jt, {
    onDone: onDone_4,
    caller: caller_2,
    manualDialog: Hs(void 0)
  });
  return tWr(onDone_4, caller_2, l);
}
export { xsa, tWr, rha };