// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.283
import {
  M8n,
  Nde,
  EVr
} from "B:/~BUN/root/chunk-4rk7cwxz.js";
import {
  c
} from "B:/~BUN/root/chunk-kks4mj3w.js";
import {
  x,
  gFr
} from "B:/~BUN/root/chunk-gf53qpk6.js";
import {
  f
} from "B:/~BUN/root/chunk-zv3zxqya.js";
import {
  b
} from "B:/~BUN/root/chunk-qe2zga5e.js";
import {
  i
} from "B:/~BUN/root/chunk-728mwbhs.js";
import {
  M1
} from "B:/~BUN/root/chunk-yehxgs7w.js";
import {
  Ft
} from "B:/~BUN/root/chunk-msy8grqx.js";
import {
  yI,
  P6e
} from "B:/~BUN/root/chunk-3hjtxzqy.js";
import {
  wv
} from "B:/~BUN/root/chunk-6bn0bbdx.js";
import {
  js,
  GTo,
  Oat,
  lPr,
  din,
  qTo,
  KTo,
  cPr,
  YTo,
  XTo
} from "B:/~BUN/root/chunk-5nfpvvfh.js";
import {
  nRt,
  x8
} from "B:/~BUN/root/chunk-3jyp964r.js";
import {
  pn
} from "B:/~BUN/root/chunk-8j4yaj30.js";
import {
  o,
  E,
  M,
  C,
  u,
  Qe,
  fe,
  z,
  Bi
} from "B:/~BUN/root/chunk-n8qdr73v.js";
import {
  U
} from "B:/~BUN/root/chunk-z1enakv9.js";

function Eet(e) {
  return e.map((t) => t.includes(", ") || t.includes('"') ? b(t) : t).join(", ")
}

function H(e) {
  let t = [],
    n = e;
  for (;;) {
    if (n.startsWith('"')) {
      let r = -1,
        s = !1;
      for (let a = 1; a < n.length; a++) {
        let p = n[a];
        if (s) {
          s = !1;
          continue
        }
        if (p === "\\") {
          s = !0;
          continue
        }
        if (p === '"') {
          r = a;
          break
        }
      }
      if (r === -1) return null;
      try {
        let a = JSON.parse(n.slice(0, r + 1));
        if (typeof a !== "string") return null;
        t.push(a)
      } catch {
        return null
      }
      n = n.slice(r + 1)
    } else {
      let r = n.indexOf(", "),
        s = r === -1 ? n : n.slice(0, r);
      if (s.includes('"')) return null;
      t.push(s), n = r === -1 ? "" : n.slice(r)
    }
    if (n === "") break;
    if (!n.startsWith(", ")) return null;
    if (n = n.slice(2), n === "") return null
  }
  return t
}
var D = 8192,
  ee = 8192,
  te = 32768,
  ne = 2000,
  oe = M1 - ne,
  se = 2000,
  ie = new Set(["answers", "annotations", "response", "followUp"]),
  re = "afkTimeoutMs";

function V(e, t) {
  try {
    return ae(e, t)
  } catch {
    return k("threw")
  }
}

function ae(e, t) {
  if (!j(t)) return k("not_an_object");
  for (let m of Object.keys(t)) {
    if (m === re) return k("host_field");
    if (ie.has(m)) {
      if (Object.hasOwn(e, m)) return k("changed_shown_field");
      continue
    }
    if (!Object.hasOwn(e, m)) return k("unknown_field");
    if (!nRt(t[m], e[m])) return k("changed_shown_field")
  }
  let {
    questions: n,
    extended: r
  } = ue(R(e, "questions")), s = 0, a = 0, p = new Set, d = {
    ...e
  }, h = Object.create(null), l = R(t, "answers");
  if (l !== void 0) {
    if (!j(l)) return k("answers");
    for (let m of Object.keys(l)) {
      let T = n.get(m);
      if (T === void 0) return k("answers");
      p.add(m);
      let q = l[m];
      if (typeof q === "string") {
        if (q.length > D) return k("answers");
        s += q.length, h[m] = q;
        continue
      }
      if (!T.multiSelect || !Array.isArray(q) || q.length > T.optionCount + 1) return k("answers");
      let g = [];
      for (let A = 0; A < q.length; A++) {
        let S = q[A];
        if (typeof S !== "string" || S.length > D) return k("answers");
        g.push(S)
      }
      let y = Eet(g);
      s += y.length, h[m] = y
    }
  }
  if (!Object.hasOwn(e, "answers")) d.answers = h;
  let w = R(t, "annotations");
  if (w !== void 0) {
    if (!j(w)) return k("annotations");
    let m = Object.create(null);
    for (let T of Object.keys(w)) {
      let q = n.get(T),
        g = w[T];
      if (q === void 0 || !j(g)) return k("annotations");
      p.add(T);
      let y = {};
      for (let A of Object.keys(g)) {
        let S = g[A];
        switch (A) {
          case "preview":
            if (typeof S !== "string" || !le(q, S)) return k("annotations");
            a += S.length, y.preview = S;
            break;
          case "notes":
            if (typeof S !== "string" || S.length > ee) return k("annotations");
            s += S.length, y.notes = S;
            break;
          default:
            return k("annotations")
        }
      }
      m[T] = y
    }
    d.annotations = m
  }
  let O = R(t, "response");
  if (O !== void 0) {
    if (typeof O !== "string" || O.length > D) return k("response");
    s += O.length, d.response = O
  }
  let v = R(t, "followUp");
  if (v !== void 0) {
    if (typeof v !== "boolean" || !r) return k("follow_up");
    d.followUp = v
  }
  for (let m of p) a += m.length;
  if (s > te || s + a > oe) return k("too_large");
  return {
    kind: "admitted",
    input: d
  }
}

function ue(e) {
  let t = new Map;
  if (!Array.isArray(e)) return {
    questions: t,
    extended: !1
  };
  let n = e.length > 0;
  for (let r of e) {
    if (!j(r)) {
      n = !1;
      continue
    }
    if (typeof R(r, "kind") !== "string") n = !1;
    let s = R(r, "question");
    if (typeof s !== "string") continue;
    let a = R(r, "options"),
      p = Array.isArray(a) ? a : [],
      d = new Set;
    for (let h of p) {
      let l = j(h) ? R(h, "preview") : void 0;
      if (typeof l === "string") d.add(l)
    }
    t.set(s, {
      multiSelect: R(r, "multiSelect") === !0,
      optionCount: p.length,
      previews: d
    })
  }
  return {
    questions: t,
    extended: n
  }
}

function le(e, t) {
  if (e.previews.has(t)) return !0;
  for (let n of e.previews)
    if (n.length <= se && P6e(n) === t && !yI(n)) return !0;
  return !1
}

function j(e) {
  if (typeof e !== "object" || e === null || Array.isArray(e)) return !1;
  let t = Object.getPrototypeOf(e);
  return t === Object.prototype || t === null
}

function R(e, t) {
  return Object.hasOwn(e, t) ? e[t] : void 0
}

function k(e) {
  return {
    kind: "refused",
    rule: e
  }
}
var X = f(() => u({
    label: o().describe("The display text for this option that the user will see and select. Should be concise (1-5 words) and clearly describe the choice."),
    description: o().describe("Explanation of what this option means or what will happen if chosen. Useful for providing context about trade-offs or implications."),
    preview: o().optional().describe("Optional preview content rendered when this option is focused. Use for mockups, code snippets, or visual comparisons that help users compare options. See the tool description for the expected content format.")
  })),
  Y = f(() => X().extend({
    description: o().optional().describe("Optional: add only when the label alone would be ambiguous. One short line on what choosing it leads to.")
  }));

function K(e) {
  return u({
    question: o().describe('The complete question to ask the user. Should be clear, specific, and end with a question mark. Example: "Which library should we use for date formatting?" If multiSelect is true, phrase it accordingly, e.g. "Which features do you want to enable?"'),
    header: o().describe(`Very short label displayed as a chip/tag (max ${GTo} chars). Examples: "Auth method", "Library", "Approach".`),
    options: C(e).min(2).max(4).describe(gFr() ? "The available choices for this question. Must have 2-4 options (this cap applies to multiSelect too \u2014 group or split if you have more). Each option should be a distinct choice; mutually exclusive unless multiSelect is enabled. There should be no 'Other' option, that will be provided automatically." : "The available choices for this question. Must have 2-4 options. Each option should be a distinct, mutually exclusive choice (unless multiSelect is enabled). There should be no 'Other' option, that will be provided automatically."),
    multiSelect: M().default(!1).describe("Set to true to allow the user to select multiple options instead of just one. Use when choices are not mutually exclusive.")
  })
}
var N = f(() => K(X())),
  ce = f(() => K(Y())),
  de = ["choice", "text", "number"],
  B = f(() => u({
    question: N().shape.question,
    header: N().shape.header,
    kind: z(de).optional().describe('How the user answers. "choice" (the default when omitted): picks from options. "text": a free-text box, no options \u2014 for open-ended input. "number": a slider/stepper between min and max \u2014 for quantities.'),
    description: o().optional().describe("Optional single helper line shown under the question."),
    options: C(Y()).max(4).default(() => []).describe(`Choices for a "choice" question: 2-4 distinct options; with multiSelect false they must be mutually exclusive. Omit for "text" and "number" questions. There should be no 'Other' or 'Skip' option; the form lets the user type their own answer or leave a question unanswered.`),
    multiSelect: N().shape.multiSelect,
    placeholder: o().optional().describe('"text" questions only: placeholder for the empty text box.'),
    min: E().optional().describe('"number" questions only (required there): lowest value.'),
    max: E().optional().describe('"number" questions only (required there): highest value.'),
    step: E().positive().optional().describe('"number" questions only: increment between values.'),
    defaultValue: E().optional().describe('"number" questions only: the value the control starts at (within min..max).'),
    unit: o().optional().describe('"number" questions only: short unit shown next to the value, e.g. "px", "slides", "%".')
  })),
  pe = f(() => B().superRefine((e, t) => {
    let n = e.kind ?? "choice";
    for (let [p, d] of [
        ["placeholder", "text"],
        ["min", "number"],
        ["max", "number"],
        ["step", "number"],
        ["defaultValue", "number"],
        ["unit", "number"]
      ])
      if (n !== d && e[p] !== void 0) t.addIssue({
        code: "custom",
        path: [p],
        message: `${p} applies only to "${d}" questions.`
      });
    if (n === "choice") {
      if (e.options.length < 2) t.addIssue({
        code: "custom",
        path: ["options"],
        message: 'A choice question needs 2-4 options; use kind "text" for an open-ended question.'
      });
      return
    }
    if (e.options.length > 0) t.addIssue({
      code: "custom",
      path: ["options"],
      message: `A "${n}" question takes no options; remove them or omit kind to ask a choice question.`
    });
    if (e.multiSelect) t.addIssue({
      code: "custom",
      path: ["multiSelect"],
      message: `multiSelect applies only to choice questions, not "${n}".`
    });
    if (n !== "number") return;
    let {
      min: r,
      max: s
    } = e;
    if (r === void 0 || s === void 0 || !(r < s)) {
      t.addIssue({
        code: "custom",
        path: ["min"],
        message: "A number question needs numeric min and max with min < max."
      });
      return
    }
    let {
      defaultValue: a
    } = e;
    if (a !== void 0 && (a < r || a > s)) t.addIssue({
      code: "custom",
      path: ["defaultValue"],
      message: "defaultValue must lie within min..max."
    })
  })),
  G = f(() => {
    let e = u({
      preview: o().optional().describe("The preview content of the selected option, if the question used previews."),
      notes: o().optional().describe("Free-text notes the user added to their selection.")
    });
    return fe(o(), e).optional().describe("Optional per-question annotations from the user (e.g., notes on preview selections). Keyed by question text.")
  }),
  P = {
    check: (e) => {
      let t = e.questions.map((n) => n.question);
      if (t.length !== new Set(t).size) return !1;
      for (let n of e.questions) {
        let r = n.options.map((s) => s.label);
        if (r.length !== new Set(r).size) return !1
      }
      return !0
    },
    message: "Question texts must be unique, option labels must be unique within each question"
  },
  F = 4294967295,
  L = 256,
  he = f(() => Bi((e) => {
    if (!Array.isArray(e)) return e;
    let t = e.length;
    if (!Number.isInteger(t) || t < 0 || t > F) return e;
    let n = "";
    for (let r = 0; r < t; r++) {
      let s = e[r];
      if (typeof s !== "string") return e;
      n = r === 0 ? s : n + ", " + s
    }
    return n
  }, o())),
  J = f(() => ({
    answers: fe(o(), he()).optional().describe("User answers collected by the permission component"),
    annotations: G(),
    metadata: u({
      source: o().optional().describe('Optional identifier for the source of this question (e.g., "remember" for /remember command). Used for analytics tracking.')
    }).optional().describe("Optional metadata for tracking and analytics purposes. Not displayed to user.")
  }));

function Z(e) {
  return Qe({
    questions: C(e).min(1).max(4).describe(gFr() ? "Questions to ask the user (1-4 questions). The 1-4 questions and 2-4 options bounds are hard schema constraints; do not exceed them even if the user requests more \u2014 split into multiple calls instead." : "Questions to ask the user (1-4 questions)"),
    ...J()
  }).refine(P.check, {
    message: P.message
  })
}
var me = f(() => Z(N())),
  we = f(() => Z(ce())),
  ye = f(() => Qe({
    title: o().optional().describe('Optional single-line heading shown above the questions, e.g. "Before I build your deck".'),
    questions: C(pe()).min(1).max(4).describe("Questions to ask the user (1-4, most important first). The 1-4 questions and 2-4 options bounds are hard schema constraints; do not exceed them even if the user requests more \u2014 split into multiple calls instead."),
    ...J()
  }).refine(P.check, {
    message: P.message
  })),
  ge = f(() => u({
    questions: C(N()).describe("The questions that were asked"),
    answers: fe(o(), o()).describe("The answers provided by the user (question text -> answer string; multi-select answers are comma-separated)"),
    response: o().optional().describe("Freeform text the user typed instead of selecting a structured option"),
    annotations: G(),
    afkTimeoutMs: E().int().positive().optional().describe("Set when the dialog auto-resolved after this many milliseconds of idle (user away from keyboard). Absent on every human-resolved path.")
  })),
  be = f(() => ge().extend({
    questions: C(B()).describe("The questions that were asked"),
    followUp: M().optional().describe("Set when the user asked for another round of questions instead of (or after partially) answering.")
  }));
var Xkt = "(notes only)";

function W(e) {
  return `No response after ${Math.round(e/1000)}s \u2014 the user may be away from keyboard. Proceed using your best judgment based on the context so far; you can re-ask this question later if it's still relevant.`
}
var E4 = Ft({
  name: js,
  searchHint: "prompt the user with a multiple-choice question",
  backgrounding: "never",
  maxResultSizeChars: 1e5,
  async description() {
    return qTo
  },
  async prompt({
    model: e,
    leanPrompt: t
  }) {
    let n = "";
    if (wv({
        model: e,
        leanPrompt: t
      })) {
      let h = x("tengu_cinder_plover", "").trim();
      n = h ? `
${h}
` : XTo
    }
    let r = x("tengu_cinder_wren", ""),
      s = typeof r === "string" ? r.trim() : "",
      a = s ? `
${s}
` : "",
      p = Nde() ? YTo : "",
      d = M8n();
    if (d === void 0) return cPr + n + a + p;
    return cPr + n + a + p + KTo[d]
  },
  get inputSchema() {
    if (Nde()) return ye();
    return EVr() ? we() : me()
  },
  get outputSchema() {
    return be()
  },
  userFacingName() {
    return ""
  },
  validationErrorSteer(e) {
    if (typeof e !== "object" || e === null || Array.isArray(e)) return null;
    let t = e.questions;
    if (!Array.isArray(t)) return null;
    let n = !1,
      r = t.length;
    if (!Number.isInteger(r) || r < 0 || r > F) return null;
    for (let s = 0; s < r && s < L; s++) {
      let a = t[s];
      if (typeof a !== "object" || a === null || Array.isArray(a)) continue;
      if (Nde()) {
        let d = a.kind;
        if (d === "text" || d === "number") continue
      }
      let p = a.options;
      if (Array.isArray(p) && p.length < 2) {
        n = !0;
        break
      }
    }
    if (!n) return null;
    if (Nde()) return 'This call included a choice question with fewer than 2 options, so it was rejected and the person never saw it. If that question is open-ended, re-ask it with "kind": "text" and no options; if there is really only one path, state it as the approach you are taking and continue with the task. Do not invent a filler second option.';
    return "This call included a question with fewer than 2 options, so it was rejected and the person never saw it. A question with a single option has no decision in it. Do not retry this call and do not invent a filler second option. Instead, state the one path you were going to offer as the approach you are taking, then continue with the task. If this call also contained questions with 2 to 4 options (each with distinct labels), you may re-ask those questions alone in a new call. Ask a question only when the person has at least two genuinely distinct choices."
  },
  isEnabled() {
    return x8()
  },
  isConcurrencySafe() {
    return !0
  },
  isReadOnly() {
    return !0
  },
  toAutoClassifierInput(e) {
    let t = lPr,
      n = Nde();
    try {
      let r = typeof e === "object" && e !== null ? e.questions : void 0;
      if (!Array.isArray(r)) return "[malformed AskUserQuestion input]";
      let s = [],
        a = r.length;
      if (!Number.isInteger(a) || a < 0 || a > F) return "[malformed AskUserQuestion input]";
      for (let d = 0; d < a; d++) {
        if (s.length >= L) {
          s.push(`[\u2026 further question entries elided: reported length ${a}]`);
          break
        }
        let h = r[d];
        if (typeof h !== "object" || h === null) {
          let g = t(h);
          s.push(g ? `[malformed question entry] ${g}` : "[malformed question entry]");
          continue
        }
        let l = h.options,
          w = [];
        if (Array.isArray(l)) {
          let g = l.length;
          for (let y = 0; y < g; y++) {
            if (w.length >= L) {
              w.push("[\u2026 further option entries elided]");
              break
            }
            let A = l[y];
            if (typeof A !== "object" || A === null) {
              w.push(`(${y+1}) "${t(A)}"`);
              continue
            }
            let S = A,
              _ = [`(${y+1}) "${t(S.label)}"`],
              Q = t(S.description);
            if (Q) _.push(`\u2014 ${Q}`);
            let I = t(S.preview);
            if (I) _.push(`[preview: ${I}]`);
            w.push(_.join(" "))
          }
        }
        let O = w.join(" "),
          v = h.multiSelect === !0 ? " [multiSelect]" : "",
          m = t(h.header),
          T = m ? ` [header: ${m}]` : "",
          q = "";
        if (n) {
          let g = h;
          for (let [y, A] of [
              ["kind", t(g.kind)],
              ["description", t(g.description)],
              ["placeholder", t(g.placeholder)],
              ["min", din(g.min)],
              ["max", din(g.max)],
              ["step", din(g.step)],
              ["default", din(g.defaultValue)],
              ["unit", t(g.unit)]
            ])
            if (A) q += ` [${y}: ${A}]`
        }
        s.push(`"${t(h.question)}"${T}${q}${v} options: ${O}`)
      }
      if (s.length === 0) return "[malformed AskUserQuestion input]";
      let p = n ? t(e.title) : "";
      return (p ? `[title: ${p}] ` : "") + s.join(" | ")
    } catch {
      return "[malformed AskUserQuestion input]"
    }
  },
  admitCardAnswer: V,
  requiresUserInteraction() {
    return !0
  },
  renderToolUseMessage() {
    return null
  },
  create() {
    return {
      async validateInput({
        questions: e
      }) {
        if (M8n() !== "html") return {
          result: !0
        };
        for (let t of e)
          for (let n of t.options) {
            let r = Se(n.preview);
            if (r) return {
              result: !1,
              message: `Option "${n.label}" in question "${t.question}": ${r}`,
              errorCode: 1
            }
          }
        return {
          result: !0
        }
      },
      async checkPermissions(e) {
        return {
          behavior: "ask",
          message: "Answer questions?",
          updatedInput: {
            ..."title" in e && e.title && {
              title: e.title
            },
            questions: Nde() ? e.questions.map((t) => ({
              ...t,
              kind: "kind" in t && t.kind ? t.kind : "choice"
            })) : e.questions,
            ...e.metadata && {
              metadata: e.metadata
            }
          }
        }
      },
      async call(e) {
        let {
          answers: t = {},
          annotations: n
        } = e, s = e.questions.map((l) => Array.isArray(l.options) ? l : {
          ...l,
          options: []
        }), {
          response: a,
          afkTimeoutMs: p,
          followUp: d
        } = e, h = U(s, ({
          question: l
        }) => {
          let w = t[l];
          return Array.isArray(w) ? w.length > 0 : typeof w === "string" && w !== "" && w !== Xkt
        });
        return i("tengu_ask_user_question_completed", {
          extended: Nde(),
          questionCount: s.length,
          choiceCount: U(s, (l) => (l.kind ?? "choice") === "choice" && !l.multiSelect),
          multiSelectCount: U(s, (l) => (l.kind ?? "choice") === "choice" && l.multiSelect),
          textCount: U(s, (l) => l.kind === "text"),
          numberCount: U(s, (l) => l.kind === "number"),
          answerCount: h,
          followUp: d === !0,
          outcome: c(p ? "afk_timeout" : d ? "follow_up" : a?.trim() ? "responded" : h > 0 ? "answered" : "unanswered"),
          ...e.metadata?.source && {
            source_hash: pn(e.metadata.source)
          }
        }), {
          data: {
            questions: s,
            answers: t,
            ...a?.trim() && {
              response: a
            },
            ...n && {
              annotations: n
            },
            ...p && {
              afkTimeoutMs: p
            },
            ...d === !0 && {
              followUp: !0
            }
          }
        }
      }
    }
  },
  mapToolResultToToolResultBlockParam({
    questions: e,
    answers: t,
    response: n,
    annotations: r,
    afkTimeoutMs: s,
    followUp: a
  }, p) {
    let d = e.map(({
        question: l
      }) => {
        let w = t[l],
          O = r?.[l],
          v = w && w !== Xkt;
        if (!v && !O?.notes) return null;
        let m = [v ? `"${l}"="${w}"` : `"${l}"=(no option selected)`];
        if (O?.preview) m.push(`selected preview:
${O.preview}`);
        if (O?.notes) m.push(`notes: ${O.notes}`);
        return m.join(" ")
      }).filter((l) => l !== null).join(", "),
      h;
    if (s) h = d ? `${W(s)}

Before going idle the user had selected: ${d}.` : W(s);
    else if (a) {
      let l = n?.trim() ? ` They also wrote: "${n}".` : "";
      h = d ? `${Oat} before you proceed. So far they answered: ${d}.${l} Call ${js} again with follow-up questions that build on these answers (do not repeat these); do not start the task yet.` : `${Oat} before answering.${l} Call ${js} again now with further questions about this decision (do not repeat these); do not proceed with the task yet.`
    } else if (n?.trim()) h = `The user responded: ${n}`;
    else if (d) h = e.every(({
      question: w,
      options: O,
      multiSelect: v,
      kind: m,
      min: T,
      max: q
    }) => {
      if (r?.[w]?.notes) return !1;
      if (m === "text" || m === "number") {
        let _ = t[w];
        if (_ === void 0 || _ === "") return !0;
        if (m === "text" || typeof _ !== "string") return !1;
        let Q = _.trim(),
          I = Number(Q);
        return /^-?\d+(\.\d+)?$/.test(Q) && Number.isFinite(I) && (T === void 0 || I >= T) && (q === void 0 || I <= q)
      }
      let y = t[w],
        A = new Set(O.map((_) => _.label));
      if (Array.isArray(y)) return v && y.length > 0 && y.every((_) => A.has(_));
      if (!y || y === Xkt) return !0;
      if (A.has(y)) return !0;
      if (!v) return !1;
      let S = H(y);
      return S !== null && S.length >= 1 && Eet(S) === y && S.every((_) => A.has(_))
    }) ? `Your questions have been answered: ${d}. You can now continue with these answers in mind.` : `The user answered: ${d}. Read the answers carefully \u2014 they may request clarification, changes, or that you not proceed \u2014 and follow what they actually say.`;
    else h = "The user did not answer the questions.";
    return {
      type: "tool_result",
      content: h,
      tool_use_id: p
    }
  }
});

function Se(e) {
  if (e === void 0) return null;
  if (/<\s*(html|body|!doctype)\b/i.test(e)) return "preview must be an HTML fragment, not a full document (no <html>, <body>, or <!DOCTYPE>)";
  if (/<\s*(script|style)\b/i.test(e)) return "preview must not contain <script> or <style> tags. Use inline styles via the style attribute if needed.";
  if (!/<[a-z][^>]*>/i.test(e)) return 'preview must contain HTML (previewFormat is set to "html"). Wrap content in a tag like <div> or <pre>.';
  return null
}
export {
  Eet,
  Xkt,
  E4
};
