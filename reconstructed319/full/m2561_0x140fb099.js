// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  Re
} from "B:/~BUN/root/chunk-qr2xxkqa.js";
import {
  We
} from "B:/~BUN/root/chunk-y2g9f85n.js";
import {
  S
} from "B:/~BUN/root/chunk-bn4bjw9d.js";
import {
  a
} from "B:/~BUN/root/chunk-xrwdh0g4.js";
import {
  t
} from "B:/~BUN/root/chunk-2pp12te6.js";
import {
  Q,
  Wn
} from "B:/~BUN/root/chunk-n8cnxns2.js";
import {
  _s
} from "B:/~BUN/root/chunk-jdtvghyw.js";
import {
  Ne
} from "B:/~BUN/root/chunk-qdyt0gq6.js";
import {
  i
} from "B:/~BUN/root/chunk-j6pt0v41.js";
import {
  cc,
  v
} from "B:/~BUN/root/chunk-1ks9vs37.js";
import {
  Fe
} from "B:/~BUN/root/chunk-vxjrk7vf.js";
import {
  m
} from "B:/~BUN/root/chunk-3z3yrbk4.js";
import {
  E_
} from "B:/~BUN/root/chunk-3xdsa4p8.js";
import {
  qJ
} from "B:/~BUN/root/chunk-begxsvab.js";
import {
  rr,
  Ct
} from "B:/~BUN/root/chunk-thn0wk2x.js";
import {
  RH,
  Wxo
} from "B:/~BUN/root/chunk-1g25msn4.js";
import {
  lue,
  jkr,
  HZt
} from "B:/~BUN/root/chunk-yhafkw66.js";
import {
  Xn
} from "B:/~BUN/root/chunk-vmcmhkh2.js";
import {
  s,
  n
} from "B:/~BUN/root/chunk-qey16aan.js";
import {
  pt
} from "B:/~BUN/root/chunk-v95bwhaa.js";
import {
  Sde,
  fW
} from "B:/~BUN/root/chunk-27h4st9h.js";
import {
  Xa
} from "B:/~BUN/root/chunk-m8dg5txf.js";
import {
  Tfn,
  Cfn,
  rzt,
  uPe,
  W$e,
  PBr
} from "B:/~BUN/root/chunk-qg8vk00h.js";
import {
  ei
} from "B:/~BUN/root/chunk-03yjyf4y.js";
import {
  G
} from "B:/~BUN/root/chunk-tmdrwqnv.js";
import {
  Y
} from "B:/~BUN/root/chunk-c1v460b9.js";
import {
  Ze
} from "B:/~BUN/root/chunk-cpzw87wr.js";
import {
  Tt
} from "B:/~BUN/root/chunk-dw9hahea.js";
import {
  Ce
} from "B:/~BUN/root/chunk-cync0e08.js";
import {
  Ir
} from "B:/~BUN/root/chunk-39zyvd3e.js";
import {
  ke
} from "B:/~BUN/root/chunk-bvcekd4j.js";
import {
  gGt
} from "B:/~BUN/root/chunk-mbrp1y9w.js";
import {
  B4s,
  j4s
} from "B:/~BUN/root/chunk-cbbfqbjt.js";
import {
  is
} from "B:/~BUN/root/chunk-09epe94m.js";
import {
  Ys
} from "B:/~BUN/root/chunk-28bb8488.js";
import {
  gt
} from "B:/~BUN/root/chunk-sx03ea6s.js";
import {
  ne,
  e,
  r
} from "B:/~BUN/root/chunk-t16eynda.js";
import {
  v8
} from "B:/~BUN/root/chunk-nm56k8cy.js";
import {
  Ho,
  ko,
  ue,
  y,
  j
} from "B:/~BUN/root/chunk-czy5r8bc.js";
import {
  Zi
} from "B:/~BUN/root/chunk-r2kdqtaa.js";
import {
  m2e
} from "B:/~BUN/root/chunk-xr3thd43.js";
import {
  Hs
} from "B:/~BUN/root/chunk-3xtmwvra.js";
import {
  w
} from "B:/~BUN/root/chunk-4qfwb3rf.js";
j();
j();
j();
var $o = 7250,
  Mt = ["enter", "escape"],
  Eo = 200,
  Oe = {
    session: "this session only",
    day: "this session + this project\u2019s other sessions from the last 24 hours",
    week: "this session + this project\u2019s other sessions from the last 7 days"
  },
  Ut = [{
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
      subscribe: l,
      getSnapshot: f
    } = o;
  if (p === "share") return {
    subscribe: l,
    getSnapshot: f,
    start() {},
    deliver() {},
    save() {},
    fail() {},
    abandon() {}
  };
  return {
    subscribe: l,
    getSnapshot: f,
    start() {
      o.setState(() => ({
        status: "sending"
      }))
    },
    deliver(h) {
      o.setState(() => ({
        status: "delivered",
        referenceId: h
      }))
    },
    save(h, C, c) {
      o.setState(() => ({
        status: "saved",
        referenceId: h,
        bundlePath: C,
        ...c !== void 0 && {
          transcriptProblem: c
        }
      }))
    },
    fail(h, C) {
      o.setState((c) => c.status === "delivered" || c.status === "saved" ? c : {
        status: "failed",
        reason: h,
        ...C === !0 && {
          final: C
        }
      })
    },
    abandon() {
      o.setState((h) => h.status === "sending" ? {
        status: "none"
      } : h)
    }
  }
}
async function $t(p, o) {
  try {
    await p()
  } finally {
    o.abandon()
  }
}

function Lt({
  abortController: p,
  messages: o,
  initialDescription: l,
  onDone: f,
  applyMessageOp: h,
  backgroundTasks: C = {},
  mode: c = "post",
  readFileState: P,
  surveyFeedbackSource: k,
  command: D = "/feedback",
  wholeTranscript: H,
  send: Se
}) {
  let {
    storageV5: ve,
    credentials: pe
  } = Fe(), me = ei(), [we, z] = y("userInput"), [Ht, zt] = y(0), [se, Gt] = y(l ?? ""), [Vt, $e] = y(null), [Kt, qt] = y(null), [Xt, Jt] = y(null), [Ee, re] = y(null), [Yt, De] = y(!1), [N] = y(() => Se ?? Ue(c)), Qt = Ne(N), [Zt, mt] = y(!1), [eo, to] = y(null), _ = eo ?? Qt, V = c !== "share" && !Zt && _.status !== "none", oo = V && _.status !== "failed", no = _.status === "sending" ? "submitting" : "done", b = oo ? no : we, so = V && _.status === "failed" ? _.reason : null, M = Ee ?? so, fe = Ee !== null ? Yt : V && _.status === "failed" && _.final === !0, le = V && (_.status === "delivered" || _.status === "saved") ? _.referenceId : Vt, ge = V && _.status === "saved" ? _.bundlePath : Kt, Te = V && _.status === "saved" ? _.transcriptProblem ?? null : Xt, he = Ct(), ft = he ? rr()?.sessionId ?? null : null, [ro] = y(() => he ? Promise.resolve(null) : RH().then((g) => g ? Wxo() : null).catch(() => null)), [ht, ao] = y(null), [be, io] = y("session"), xe = G((g) => g.transcripts), lo = Re().columns - 4, jo = m2e(), _e = v("tengu_amber_lynx", !1), bt = ue(async () => {
    z("submitting"), re(null), $e(null), N.start();
    let g = (X, A = !1) => {
      re(X), De(A), z("userInput"), N.fail(X, A)
    };
    if (c === "bundle") {
      let X = lue(D);
      if (X !== null && !HZt()) {
        m("feedback_bundle", "disabled_at_save"), g(X);
        return
      }
      let A = await PBr({
        messages: o,
        description: se,
        surface: "cli",
        scope: be,
        backgroundTasks: C,
        transcripts: xe,
        signal: p.signal,
        surveyFeedbackSource: k,
        wholeTranscript: H,
        storageV5: ve,
        host: me
      });
      if (p.signal.aborted) return;
      if (A.success) $e(A.bundleId), qt(A.zipPath), Jt(A.transcriptProblem ?? null), z("done"), N.save(A.bundleId, A.zipPath, A.transcriptProblem);
      else g(`Couldn't save the feedback bundle to disk: ${A.error}`);
      return
    }
    let [T, mo] = await Promise.all([W$e({
      messages: o,
      description: se,
      surface: "cli",
      scope: be,
      backgroundTasks: C,
      transcripts: xe,
      signal: p.signal,
      surveyFeedbackSource: k,
      storageV5: ve,
      host: me,
      credentials: pe
    }), _e ? Promise.resolve(null) : xt(se, p.signal, pe)]);
    if (p.signal.aborted) return;
    if (ao(mo), T.success) $e(T.feedbackId), z("done"), N.deliver(T.feedbackId);
    else {
      let X = Tfn(T),
        A = X ?? Cfn(T);
      if (A !== void 0) g(A, X !== void 0 && T.refusal?.reportContent !== !0);
      else if (T.failureReason === "auth_error") g("Couldn't send feedback: not signed in. Run /login, then retry.");
      else if (T.failureReason === "policy_blocked") g(lue(D) ?? "Feedback is disabled by your organization's policy.");
      else {
        let fo = rzt(T) ?? (T.failureReason === "timeout" ? " (request timed out)" : T.failureReason === "network_error" ? " (couldn't reach the service)" : "");
        g(`Couldn't send feedback${fo}. If it keeps failing, you can file at ${jkr()} instead.`)
      }
    }
  }, [se, o, _e, C, xe, p, c, be, ve, pe, D, H, N, me]), co = ue(() => $t(bt, N), [bt, N]), Le = ue(() => {
    if (b === "done") {
      f(void 0, {
        display: "skip"
      });
      return
    }
    if (V) {
      let g = N.getSnapshot();
      to((T) => T ?? g)
    }
    p.abort(), f("Feedback / bug report cancelled", {
      display: "system"
    })
  }, [f, p, N, V, b]), zo = ue(() => {
    z("done")
  }, []), Go = ue((g) => {
    re(g), De(!1), z("userInput")
  }, []);
  pt("confirm:no", Le, {
    context: "Settings",
    isActive: b === "userInput"
  });
  let uo = b === "done" && c !== "share" || M && b !== "userInput";

  function po(g) {
    if (g.ctrl || g.meta) return;
    if (b === "done") {
      if (c === "share") return;
      if (g.preventDefault(), !_e && g.key === "return" && ht) {
        let T = Et(le ?? "", ht, se);
        Zi(T)
      }
      if (M) f("Error submitting feedback / bug report", {
        display: "system"
      });
      else if (c === "bundle" && ge) f(Te === null ? `Feedback bundle saved to \`${ge}\`` : `Feedback bundle saved to \`${ge}\`. ${Me[Te]}`, {
        display: "system"
      });
      else f("Feedback / bug report submitted", {
        display: "system"
      });
      return
    }
    if (M && b !== "userInput") {
      g.preventDefault(), f("Error submitting feedback / bug report", {
        display: "system"
      });
      return
    }
    if (b === "consent") {
      if (g.key === "left") {
        g.preventDefault(), z(c === "share" || he ? "userInput" : "scope");
        return
      }
      if (g.key === "return" || g.key === " ") g.preventDefault(), co()
    }
  }
  return e(is, {
    onKeyDown: po,
    children: r(ke, {
      title: "Submit feedback / bug report",
      onCancel: Le,
      isCancelActive: b !== "userInput" && !uo,
      hideInputGuide: b === "done" && c !== "share",
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
          action: te[c].consentAction
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
          chord: Mt,
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
          onChange: (g) => {
            if (Gt(g), fe && Ee === null && M !== null) re(M), De(!0);
            if (mt(!0), M && !fe) re(null)
          },
          columns: lo,
          clearOnSubmit: !1,
          onSubmit: (g) => {
            if (fe) return;
            if (mt(!0), c !== "share" && g.trim() === "") {
              re("Please describe the issue before submitting."), De(!1);
              return
            }
            re(null), z(c === "share" || he ? "consent" : "scope")
          },
          onExitMessage: (g) => {
            if (g) p.abort(), f("Feedback cancelled", {
              display: "system"
            })
          },
          cursorOffset: Ht,
          onChangeCursorOffset: zt,
          showCursor: !0,
          focus: !0
        }), M && r(s, {
          flexDirection: "column",
          gap: 1,
          children: [e(Ys, {
            error: M
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
          options: Ut,
          defaultFocusValue: be,
          onChange: (g) => {
            io(g), z("consent")
          },
          onCancel: Le
        })]
      }), b === "consent" && r(s, {
        flexDirection: "column",
        children: [e(n, {
          children: te[c].consentIntro
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
          }), c !== "share" && he && r(n, {
            children: ["- Remote workspace:", " ", r(n, {
              dimColor: !0,
              children: [ft ? `session ${ft}; ` : "", "git metadata is not collected from this machine"]
            })]
          }), c !== "share" && e(Ho, {
            fallback: null,
            children: e(ct, {
              gitStatePromise: ro
            })
          }), r(n, {
            children: ["- Session transcript:", " ", e(n, {
              dimColor: !0,
              children: c === "share" ? Oe.session : Oe[be]
            })]
          }), c !== "share" && r(n, {
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
            children: te[c].consentFooter
          })
        })]
      }), b === "submitting" && c !== "share" && e(s, {
        flexDirection: "row",
        gap: 1,
        children: e(n, {
          children: te[c].submitting
        })
      }), b === "done" && c === "bundle" && r(s, {
        flexDirection: "column",
        children: [r(n, {
          color: "success",
          children: [e(Tt, {
            status: "success",
            withSpace: !0
          }), "Feedback bundle saved"]
        }), ge && r(s, {
          marginTop: 1,
          flexDirection: "column",
          children: [r(n, {
            children: ["Bundle: ", e(n, {
              dimColor: !0,
              children: ge
            })]
          }), r(n, {
            children: ["Reference ID: ", e(n, {
              dimColor: !0,
              children: le
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
      }), b === "done" && c === "post" && (_e || V ? r(s, {
        flexDirection: "column",
        children: [M ? e(Ys, {
          error: M
        }) : r(n, {
          color: "success",
          children: [e(Tt, {
            status: "success",
            withSpace: !0
          }), "Feedback sent"]
        }), le && r(ne, {
          children: [e(s, {
            marginTop: 1,
            children: r(n, {
              children: ["Reference ID: ", e(n, {
                dimColor: !0,
                children: le
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
        children: [M ? e(Ys, {
          error: M
        }) : e(n, {
          color: "success",
          children: "Thank you for your report!"
        }), le && r(n, {
          dimColor: !0,
          children: ["Feedback ID: ", le]
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
  })
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
- Version: ${{ISSUES_EXPLAINER:"report the issue at https://github.com/anthropics/claude-code/issues",PACKAGE_URL:"@anthropic-ai/claude-code",README_URL:"https://code.claude.com/docs/en/overview",VERSION:"2.1.319",FEEDBACK_CHANNEL:"https://github.com/anthropics/claude-code/issues",BUILD_TIME:"2026-11-05T18:14:18Z",GIT_SHA:"fbdd7e02e8530e4c2ade8cc67d30104e53d2c8f2",HOOKS_WORKER_URL:"B:/~BUN/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js",DD_SOURCEMAP_GROUP:"win32"}.VERSION||"unknown"}
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
      D += we
    }
    D += Se
  }
  return c + P + D + k
}
async function xt(p, o, l) {
  try {
    let f = await fW({
        systemPrompt: Xa(["Generate a concise, technical issue title (max 80 chars) for a public GitHub issue based on this bug report for Claude Code.", "Claude Code is an agentic coding CLI based on the Anthropic API.", "The title should:", "- Include the type of issue [Bug] or [Feature Request] as the first thing in the title", "- Be concise, specific and descriptive of the actual problem", "- Use technical terminology appropriate for a software issue", '- For error messages, extract the key error (e.g., "Missing Tool Result Block" rather than the full message)', "- Be direct and clear for developers to understand the problem", '- If you cannot determine a clear issue, use "Bug Report: [brief description]"', "- Any LLM API errors are from the Anthropic API, not from any other model provider", "Your response will be directly used as the title of the Github issue, and as such should not contain any other commentary or explaination", 'Examples of good titles include: "[Bug] Auto-Compact triggers to soon", "[Bug] Anthropic API Error: Missing Tool Result Block", "[Bug] Error: Invalid Model Name for Opus"']),
        userPrompt: p,
        signal: o,
        options: {
          hasAppendSystemPrompt: !1,
          toolChoice: void 0,
          isNonInteractiveSession: !1,
          agents: [],
          querySource: "feedback",
          mcpTools: [],
          agentContext: cc(),
          credentials: l
        }
      }),
      h = f.message.content[0]?.type === "text" ? f.message.content[0].text : "Bug Report";
    if (f.isApiErrorMessage || Sde(h)) return lt(p);
    if (Lo(h)) return lt(p);
    return h
  } catch (f) {
    if (We(f)) t("Feedback title generation via Haiku aborted, using fallback", {
      level: "debug"
    });
    else a(f);
    return lt(p)
  }
}
var xo = /^(i can['\u2019]t|i cannot|i['\u2019]m unable|i am unable|i['\u2019]m sorry|i am sorry|i apologize|sorry,)/i;

function Lo(p) {
  let o = p.trim();
  return o === "" || xo.test(o)
}

function lt(p) {
  let o = Wn(p);
  if (o.length <= 60 && o.length > 5) return o;
  let l = o.slice(0, 60);
  if (o.length > 60) {
    let f = l.lastIndexOf(" ");
    if (f > 30) l = l.slice(0, f);
    l += "..."
  }
  return l.length < 10 ? "Bug Report" : l
}

function ct(p) {
  let h = S(8),
    {
      gitStatePromise: o
    } = p,
    l = ko(o);
  if (!l) {
    return null
  }
  const f = l.branchName;
  let C;
  if (h[0] !== l.commitHash) C = l.commitHash ? `, ${l.commitHash.slice(0,7)}` : "", h[0] = l.commitHash, h[1] = C;
  else C = h[1];
  const c = l.remoteUrl ? ` @ ${l.remoteUrl}` : "",
    P = !l.isHeadOnRemote && ", not synced",
    k = !l.isClean && ", has local changes";
  let D;
  if (h[2] !== l.branchName || h[3] !== C || h[4] !== c || h[5] !== P || h[6] !== k) D = r(n, {
    children: ["- Git repo metadata:", " ", r(n, {
      dimColor: !0,
      children: [f, C, c, P, k]
    })]
  }), h[2] = l.branchName, h[3] = C, h[4] = c, h[5] = P, h[6] = k, h[7] = D;
  else D = h[7];
  return D
}

function xsa(p, o, l, f, h = "", C = {}, c, P = "/feedback") {
  let k = uPe(P);
  if (k.kind === "disabled") return p(k.reason), null;
  let D = j4s() ?? void 0,
    H = Ue(k.kind);
  return e(Lt, {
    abortController: o,
    messages: l,
    initialDescription: h,
    onDone: p,
    applyMessageOp: f,
    backgroundTasks: C,
    mode: k.kind,
    readFileState: c,
    surveyFeedbackSource: D,
    command: P,
    wholeTranscript: k.kind === "bundle" && (k.cause === "share_switch" || P === "/share" && i.CLAUDE_CODE_ENABLE_SHARE_BUNDLE),
    send: H
  })
}

function ut(p, o, l, f) {
  return xsa(p, Xn(), o.messages, o.applyMessageOp, l, {
    ...o.taskRegistry.all()
  }, o.readFileState, f)
}
async function tWr(p, o, l, f = "/feedback") {
  let h = l?.trim() === "public" ? "" : l || "";
  return ut(p, o, h, f)
}

function jt(p) {
  let C = S(10),
    {
      onDone: o,
      caller: l,
      manualDialog: f
    } = p,
    h = Ne(f),
    c;
  if (C[0] !== l.messages) c = () => [...l.messages], C[0] = l.messages, C[1] = c;
  else c = C[1];
  let [P] = y(c);
  if (h !== void 0) {
    return h
  }
  let k;
  if (C[2] !== l || C[3] !== f || C[4] !== o) k = () => {
    if (f.getState() !== void 0) {
      return
    }
    let D = ut(o, l, "", "/feedback");
    f.setState(() => D)
  }, C[2] = l, C[3] = f, C[4] = o, C[5] = k;
  else k = C[5];
  let H;
  if (C[6] !== P || C[7] !== o || C[8] !== k) H = e(gGt, {
    messages: P,
    onDone: o,
    onWriteNew: k
  }), C[6] = P, C[7] = o, C[8] = k, C[9] = H;
  else H = C[9];
  return H
}
async function rha(p, o, l) {
  if (v8() && !l?.trim() && !B4s()) return e(jt, {
    onDone: p,
    caller: o,
    manualDialog: Hs(void 0)
  });
  return tWr(p, o, l)
}
export {
  xsa,
  tWr,
  rha
};
