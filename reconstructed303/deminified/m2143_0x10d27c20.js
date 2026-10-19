// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { Te } from "B:/~BUN/root/chunk-smy4yvhm.js";
import { Ve } from "B:/~BUN/root/chunk-3aez4b53.js";
import { w } from "B:/~BUN/root/chunk-rysqv8v1.js";
import { l } from "B:/~BUN/root/chunk-c09hf5e4.js";
import { ps, t } from "B:/~BUN/root/chunk-6za2ez23.js";
import { ne, Sr } from "B:/~BUN/root/chunk-nggrknsv.js";
import { Ae } from "B:/~BUN/root/chunk-jjcfcfrs.js";
import { a } from "B:/~BUN/root/chunk-yt0knyw7.js";
import { Tl, E } from "B:/~BUN/root/chunk-hb6x4e3n.js";
import { Oe } from "B:/~BUN/root/chunk-g5gf7tps.js";
import { m } from "B:/~BUN/root/chunk-kzgf20y6.js";
import { Rr, Tt } from "B:/~BUN/root/chunk-nxwmyxnk.js";
import { t0, oBr } from "B:/~BUN/root/chunk-2zk4vqr8.js";
import { _i, ZZ, kUn } from "B:/~BUN/root/chunk-8w42v0dp.js";
import { mr } from "B:/~BUN/root/chunk-jkv8n5r0.js";
import { s, n } from "B:/~BUN/root/chunk-damrp3r8.js";
import { rt } from "B:/~BUN/root/chunk-pw5vpw1q.js";
import { pZ, ZL } from "B:/~BUN/root/chunk-9grc6xh0.js";
import { tPe } from "B:/~BUN/root/chunk-nq10jsxs.js";
import { xye, zet, $7n } from "B:/~BUN/root/chunk-89b325qp.js";
import { gs } from "B:/~BUN/root/chunk-xc1c9t20.js";
import { V } from "B:/~BUN/root/chunk-tgzmva3g.js";
import { q } from "B:/~BUN/root/chunk-bf7csy4f.js";
import { Xe } from "B:/~BUN/root/chunk-nbjke4gr.js";
import { ft } from "B:/~BUN/root/chunk-jh7dpafw.js";
import { Se } from "B:/~BUN/root/chunk-7dpyfa5r.js";
import { Lr } from "B:/~BUN/root/chunk-rxj6qxcq.js";
import { be } from "B:/~BUN/root/chunk-nyga36vf.js";
import { Xwt } from "B:/~BUN/root/chunk-padt8dj4.js";
import { KKo, YKo } from "B:/~BUN/root/chunk-kxp9j9f6.js";
import { ko } from "B:/~BUN/root/chunk-r9cctkt4.js";
import { ls } from "B:/~BUN/root/chunk-fzhngknh.js";
import { gt } from "B:/~BUN/root/chunk-vs438w4e.js";
import { Q, e, r } from "B:/~BUN/root/chunk-x2hkxw5q.js";
import { VV } from "B:/~BUN/root/chunk-hm421xh4.js";
import { Xr, $r, ae, y, B } from "B:/~BUN/root/chunk-5hr2ysa5.js";
import { _s } from "B:/~BUN/root/chunk-b4xxgr0r.js";
import { Hs } from "B:/~BUN/root/chunk-ac9kwvf4.js";
import { S } from "B:/~BUN/root/chunk-ef0msk7r.js";
B();
B();
B();
var Fo = 7250,
  _o = 200,
  _e = {
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
  Re = {
    transcript_missing: "This session has no transcript on disk, so the bundle has the report only.",
    transcript_incomplete: "The session transcript couldn't be read in full, so the bundle is missing some or all of it.",
    transcript_over_zip_limit: "The session transcript is too large for one archive, so the bundle has only the start of it."
  },
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
function De(c) {
  let o = _s({
      status: "none"
    }),
    {
      subscribe: subscribe,
      getSnapshot: getSnapshot
    } = o;
  if (c === "share") return {
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
    fail(reason) {
      o.setState(b => b.status === "delivered" || b.status === "saved" ? b : {
        status: "failed",
        reason: reason
      });
    },
    abandon() {
      o.setState(h => h.status === "sending" ? {
        status: "none"
      } : h);
    }
  };
}
async function Rt(c, o) {
  try {
    await c();
  } finally {
    o.abandon();
  }
}
function It({
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
    } = Oe(),
    host = gs(),
    [Ce, j] = y("userInput"),
    [cursorOffset, onChangeCursorOffset] = y(0),
    [te, xt] = y(initialDescription ?? ""),
    [Bt, Ie] = y(null),
    [Lt, Nt] = y(null),
    [Ht, jt] = y(null),
    [Wt, ie] = y(null),
    [x] = y(() => send ?? De(mode)),
    zt = Ae(x),
    [Gt, at] = y(!1),
    [Vt, qt] = y(null),
    I = Vt ?? zt,
    X = mode !== "share" && !Gt && I.status !== "none",
    Xt = X && I.status !== "failed",
    Jt = I.status === "sending" ? "submitting" : "done",
    v = Xt ? Jt : Ce,
    Kt = X && I.status === "failed" ? I.reason : null,
    error = Wt ?? Kt,
    children_2 = X && (I.status === "delivered" || I.status === "saved") ? I.referenceId : Bt,
    children = X && I.status === "saved" ? I.bundlePath : Lt,
    ve = X && I.status === "saved" ? I.transcriptProblem ?? null : Ht,
    me = Tt(),
    it = me ? Rr()?.sessionId ?? null : null,
    [gitStatePromise] = y(() => me ? Promise.resolve(null) : t0().then(f => f ? oBr() : null).catch(() => null)),
    [lt, Zt] = y(null),
    [fe, Qt] = y("session"),
    transcripts = V(f => f.transcripts),
    columns = Te().columns - 4,
    To = tPe(),
    we = E("tengu_amber_lynx", !1),
    ct = ae(async () => {
      j("submitting"), ie(null), Ie(null), x.start();
      let f = oe => {
        ie(oe), j("userInput"), x.fail(oe);
      };
      if (mode === "bundle") {
        let oe = ZZ(command);
        if (oe !== null) {
          m("feedback_bundle", "disabled_at_save"), f(oe);
          return;
        }
        let J = await $7n({
          messages: messages,
          description: te,
          surface: "cli",
          scope: fe,
          backgroundTasks: backgroundTasks,
          transcripts: transcripts,
          signal: abortController.signal,
          surveyFeedbackSource: surveyFeedbackSource,
          wholeTranscript: wholeTranscript,
          storageV5: storageV5,
          host: host
        });
        if (abortController.signal.aborted) return;
        if (J.success) Ie(J.bundleId), Nt(J.zipPath), jt(J.transcriptProblem ?? null), j("done"), x.save(J.bundleId, J.zipPath, J.transcriptProblem);else f(`Couldn't save the feedback bundle to disk: ${J.error}`);
        return;
      }
      let [R, so] = await Promise.all([zet({
        messages: messages,
        description: te,
        surface: "cli",
        scope: fe,
        backgroundTasks: backgroundTasks,
        transcripts: transcripts,
        signal: abortController.signal,
        surveyFeedbackSource: surveyFeedbackSource,
        storageV5: storageV5,
        host: host,
        credentials: credentials
      }), we ? Promise.resolve(null) : Dt(te, abortController.signal, credentials)]);
      if (abortController.signal.aborted) return;
      if (Zt(so), R.success) Ie(R.feedbackId), j("done"), x.deliver(R.feedbackId);else if (R.isZdrOrg) f("Feedback collection is not available for organizations with custom data retention policies.");else if (R.failureReason === "auth_error") f("Couldn't send feedback: not signed in. Run /login, then retry.");else if (R.failureReason === "policy_blocked") f(ZZ(command) ?? "Feedback is disabled by your organization's policy.");else {
        let oe = R.statusCode ? ` (server returned ${R.statusCode})` : R.failureReason === "timeout" ? " (request timed out)" : R.failureReason === "network_error" ? " (couldn't reach the service)" : "";
        f(`Couldn't send feedback${oe}. If it keeps failing, you can file at ${kUn()} instead.`);
      }
    }, [te, messages, we, backgroundTasks, transcripts, abortController, mode, fe, storageV5, credentials, command, wholeTranscript, x, host]),
    to = ae(() => Rt(ct, x), [ct, x]),
    onCancel = ae(() => {
      if (X) {
        let f = x.getSnapshot();
        qt(R => R ?? f);
      }
      abortController.abort(), onDone("Feedback / bug report cancelled", {
        display: "system"
      });
    }, [onDone, abortController, x, X]),
    $o = ae(() => {
      j("done");
    }, []),
    Oo = ae(f => {
      ie(f), j("userInput");
    }, []);
  rt("confirm:no", onCancel, {
    context: "Settings",
    isActive: v === "userInput"
  });
  let oo = v === "done" || error && v !== "userInput";
  function onKeyDown(f) {
    if (f.ctrl || f.meta) return;
    if (v === "done") {
      if (f.preventDefault(), mode === "share") return;
      if (!we && f.key === "return" && lt) {
        let R = At(children_2 ?? "", lt, te);
        Hs(R);
      }
      if (error) onDone("Error submitting feedback / bug report", {
        display: "system"
      });else if (mode === "bundle" && children) onDone(ve === null ? `Feedback bundle saved to \`${children}\`` : `Feedback bundle saved to \`${children}\`. ${Re[ve]}`, {
        display: "system"
      });else onDone("Feedback / bug report submitted", {
        display: "system"
      });
      return;
    }
    if (error && v !== "userInput") {
      f.preventDefault(), onDone("Error submitting feedback / bug report", {
        display: "system"
      });
      return;
    }
    if (v === "consent") {
      if (f.key === "left") {
        f.preventDefault(), j(mode === "share" || me ? "userInput" : "scope");
        return;
      }
      if (f.key === "return" || f.key === " ") f.preventDefault(), to();
    }
  }
  return e(ko, {
    onKeyDown: onKeyDown,
    children: r(be, {
      title: "Submit feedback / bug report",
      onCancel: onCancel,
      isCancelActive: v !== "userInput" && !oo,
      hideInputGuide: v === "done",
      inputGuide: v === "userInput" ? r(Se, {
        children: [e(q, {
          chord: "enter",
          action: "continue"
        }), e(gt, {
          action: "confirm:no",
          context: "Confirmation",
          fallback: "Esc",
          description: "cancel"
        })]
      }) : v === "scope" ? r(Se, {
        children: [e(q, {
          chord: "enter",
          action: "choose"
        }), e(gt, {
          action: "confirm:no",
          context: "Confirmation",
          fallback: "Esc",
          description: "cancel"
        })]
      }) : v === "consent" ? r(Se, {
        children: [e(q, {
          chord: "enter",
          action: Z[mode].consentAction
        }), e(q, {
          chord: "left",
          action: "change"
        }), e(gt, {
          action: "confirm:no",
          context: "Confirmation",
          fallback: "Esc",
          description: "cancel"
        })]
      }) : null,
      children: [v === "userInput" && r(s, {
        flexDirection: "column",
        gap: 1,
        children: [e(n, {
          children: "Describe the issue below:"
        }), e(Lr, {
          value: te,
          onChange: f => {
            if (xt(f), at(!0), error) ie(null);
          },
          columns: columns,
          onSubmit: f => {
            if (at(!0), mode !== "share" && f.trim() === "") {
              ie("Please describe the issue before submitting.");
              return;
            }
            ie(null), j(mode === "share" || me ? "consent" : "scope");
          },
          onExitMessage: f => {
            if (f) abortController.abort(), onDone("Feedback cancelled", {
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
          children: [e(ls, {
            error: error
          }), e(n, {
            dimColor: !0,
            children: "Edit and press Enter to retry, or Esc to cancel"
          })]
        })]
      }), v === "scope" && r(s, {
        flexDirection: "column",
        gap: 1,
        children: [e(n, {
          children: "How much session history should we include?"
        }), e(Xe, {
          options: options,
          defaultFocusValue: fe,
          onChange: f => {
            Qt(f), j("consent");
          },
          onCancel: onCancel
        })]
      }), v === "consent" && r(s, {
        flexDirection: "column",
        children: [e(n, {
          children: Z[mode].consentIntro
        }), r(s, {
          marginLeft: 2,
          flexDirection: "column",
          children: [r(n, {
            children: ["- Your feedback / bug description:", " ", e(n, {
              dimColor: !0,
              children: te
            })]
          }), r(n, {
            children: ["- Environment info:", " ", r(n, {
              dimColor: !0,
              children: [a.platform, ", ", a.terminal, ", v", {
                ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
                PACKAGE_URL: "@anthropic-ai/claude-code",
                README_URL: "https://code.claude.com/docs/en/overview",
                VERSION: "2.1.303",
                FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
                BUILD_TIME: "2026-10-18T20:20:57Z",
                GIT_SHA: "07df2aedd2d01d2f60907b8404acbda187b04072",
                HOOKS_WORKER_URL: "B:/~BUN/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js",
                DD_SOURCEMAP_GROUP: "win32"
              }.VERSION, ""]
            })]
          }), mode !== "share" && me && r(n, {
            children: ["- Remote workspace:", " ", r(n, {
              dimColor: !0,
              children: [it ? `session ${it}; ` : "", "git metadata is not collected from this machine"]
            })]
          }), mode !== "share" && e(Xr, {
            fallback: null,
            children: e(ot, {
              gitStatePromise: gitStatePromise
            })
          }), r(n, {
            children: ["- Session transcript:", " ", e(n, {
              dimColor: !0,
              children: mode === "share" ? _e.session : _e[fe]
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
            children: Z[mode].consentFooter
          })
        })]
      }), v === "submitting" && mode !== "share" && e(s, {
        flexDirection: "row",
        gap: 1,
        children: e(n, {
          children: Z[mode].submitting
        })
      }), v === "done" && mode === "bundle" && r(s, {
        flexDirection: "column",
        children: [r(n, {
          color: "success",
          children: [e(ft, {
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
          }), ve && e(s, {
            marginTop: 1,
            children: e(n, {
              wrap: "wrap",
              children: Re[ve]
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
      }), v === "done" && mode === "post" && (we || X ? r(s, {
        flexDirection: "column",
        children: [error ? e(ls, {
          error: error
        }) : r(n, {
          color: "success",
          children: [e(ft, {
            status: "success",
            withSpace: !0
          }), "Feedback sent"]
        }), children_2 && r(Q, {
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
        children: [error ? e(ls, {
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
            children: r(Se, {
              children: [e(q, {
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
function At(c, o, i) {
  let u = ne(ps(o), _o),
    h = ps(i),
    b = tPe(),
    p = `${kUn()}/new?title=${encodeURIComponent(u)}&labels=user-reported,bug&body=`,
    A = encodeURIComponent(`**Bug Description**
`),
    k = encodeURIComponent(`

**Environment Info**
- Platform: ${a.platform}
- Terminal: ${a.terminal}
- Version: ${{
      ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
      PACKAGE_URL: "@anthropic-ai/claude-code",
      README_URL: "https://code.claude.com/docs/en/overview",
      VERSION: "2.1.303",
      FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
      BUILD_TIME: "2026-10-18T20:20:57Z",
      GIT_SHA: "07df2aedd2d01d2f60907b8404acbda187b04072",
      HOOKS_WORKER_URL: "B:/~BUN/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js",
      DD_SOURCEMAP_GROUP: "win32"
    }.VERSION || "unknown"}
- Feedback ID: ${c}
`),
    F = encodeURIComponent(h),
    H = Fo - p.length - A.length - k.length;
  if (F.length > H) {
    let ye = encodeURIComponent(`\u2026

**Note:** The description was shortened to fit GitHub's link length limit. The full description was sent to Anthropic with the feedback report; its Feedback ID is below.`),
      ke = 50,
      de = H - ye.length - 50;
    F = "";
    for (let ue of h) {
      let Ce = encodeURIComponent(ue);
      if (F.length + Ce.length > de) break;
      F += Ce;
    }
    F += ye;
  }
  return p + A + F + k;
}
async function Dt(userPrompt, signal, credentials_2) {
  try {
    let u = await ZL({
        systemPrompt: _i(["Generate a concise, technical issue title (max 80 chars) for a public GitHub issue based on this bug report for Claude Code.", "Claude Code is an agentic coding CLI based on the Anthropic API.", "The title should:", "- Include the type of issue [Bug] or [Feature Request] as the first thing in the title", "- Be concise, specific and descriptive of the actual problem", "- Use technical terminology appropriate for a software issue", '- For error messages, extract the key error (e.g., "Missing Tool Result Block" rather than the full message)', "- Be direct and clear for developers to understand the problem", '- If you cannot determine a clear issue, use "Bug Report: [brief description]"', "- Any LLM API errors are from the Anthropic API, not from any other model provider", "Your response will be directly used as the title of the Github issue, and as such should not contain any other commentary or explaination", 'Examples of good titles include: "[Bug] Auto-Compact triggers to soon", "[Bug] Anthropic API Error: Missing Tool Result Block", "[Bug] Error: Invalid Model Name for Opus"']),
        userPrompt: userPrompt,
        signal: signal,
        options: {
          hasAppendSystemPrompt: !1,
          toolChoice: void 0,
          isNonInteractiveSession: !1,
          agents: [],
          querySource: "feedback",
          mcpTools: [],
          agentContext: Tl(),
          credentials: credentials_2
        }
      }),
      h = u.message.content[0]?.type === "text" ? u.message.content[0].text : "Bug Report";
    if (u.isApiErrorMessage || pZ(h)) return tt(userPrompt);
    if (Ao(h)) return tt(userPrompt);
    return h;
  } catch (error) {
    if (Ve(error)) t("Feedback title generation via Haiku aborted, using fallback", {
      level: "debug"
    });else l(error);
    return tt(userPrompt);
  }
}
var Ro = /^(i can['\u2019]t|i cannot|i['\u2019]m unable|i am unable|i['\u2019]m sorry|i am sorry|i apologize|sorry,)/i;
function Ao(c) {
  let o = c.trim();
  return o === "" || Ro.test(o);
}
function tt(c) {
  let o = Sr(c);
  if (o.length <= 60 && o.length > 5) return o;
  let i = o.slice(0, 60);
  if (o.length > 60) {
    let u = i.lastIndexOf(" ");
    if (u > 30) i = i.slice(0, u);
    i += "...";
  }
  return i.length < 10 ? "Bug Report" : i;
}
function ot(c) {
  let h = w(8),
    {
      gitStatePromise: gitStatePromise_2
    } = c,
    i = $r(gitStatePromise_2);
  if (!i) {
    return null;
  }
  const branchName = i.branchName;
  let b;
  if (h[0] !== i.commitHash) b = i.commitHash ? `, ${i.commitHash.slice(0, 7)}` : "", h[0] = i.commitHash, h[1] = b;else b = h[1];
  const p = i.remoteUrl ? ` @ ${i.remoteUrl}` : "",
    A = !i.isHeadOnRemote && ", not synced",
    k = !i.isClean && ", has local changes";
  let F;
  if (h[2] !== i.branchName || h[3] !== b || h[4] !== p || h[5] !== A || h[6] !== k) F = r(n, {
    children: ["- Git repo metadata:", " ", r(n, {
      dimColor: !0,
      children: [branchName, b, p, A, k]
    })]
  }), h[2] = i.branchName, h[3] = b, h[4] = p, h[5] = A, h[6] = k, h[7] = F;else F = h[7];
  return F;
}
function m5s(onDone_2, abortController_2, messages_2, applyMessageOp_2, initialDescription_2 = "", backgroundTasks_2 = {}, readFileState_2, command_2 = "/feedback") {
  let k = xye(command_2);
  if (k.kind === "disabled") return onDone_2(k.reason), null;
  let surveyFeedbackSource_2 = YKo() ?? void 0,
    send_2 = De(k.kind);
  return e(It, {
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
    wholeTranscript: k.kind === "bundle" && (k.cause === "share_switch" || command_2 === "/share" && a.CLAUDE_CODE_ENABLE_SHARE_BUNDLE),
    send: send_2
  });
}
function st(c, o, i, u) {
  return m5s(c, mr(), o.messages, o.applyMessageOp, i, {
    ...o.taskRegistry.all()
  }, o.readFileState, u);
}
async function etr(c, o, i, u = "/feedback") {
  let h = i?.trim() === "public" ? "" : i || "";
  return st(c, o, h, u);
}
function Ut(c) {
  let b = w(10),
    {
      onDone: onDone_3,
      caller: caller,
      manualDialog: manualDialog
    } = c,
    h = Ae(manualDialog),
    p;
  if (b[0] !== caller.messages) p = () => [...caller.messages], b[0] = caller.messages, b[1] = p;else p = b[1];
  let [messages_3] = y(p);
  if (h !== void 0) {
    return h;
  }
  let onWriteNew;
  if (b[2] !== caller || b[3] !== manualDialog || b[4] !== onDone_3) onWriteNew = () => {
    if (manualDialog.getState() !== void 0) {
      return;
    }
    let F = st(onDone_3, caller, "", "/feedback");
    manualDialog.setState(() => F);
  }, b[2] = caller, b[3] = manualDialog, b[4] = onDone_3, b[5] = onWriteNew;else onWriteNew = b[5];
  let H;
  if (b[6] !== messages_3 || b[7] !== onDone_3 || b[8] !== onWriteNew) H = e(Xwt, {
    messages: messages_3,
    onDone: onDone_3,
    onWriteNew: onWriteNew
  }), b[6] = messages_3, b[7] = onDone_3, b[8] = onWriteNew, b[9] = H;else H = b[9];
  return H;
}
async function Uei(onDone_4, caller_2, i) {
  if (VV() && !i?.trim() && !KKo()) return e(Ut, {
    onDone: onDone_4,
    caller: caller_2,
    manualDialog: _s(void 0)
  });
  return etr(onDone_4, caller_2, i);
}
export { m5s, etr, Uei };