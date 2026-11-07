// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { jOo, _$e, XGs } from "B:/~BUN/root/chunk-game8aqv.js";
import { f } from "B:/~BUN/root/chunk-drx9cnw1.js";
import { v, rMs } from "B:/~BUN/root/chunk-1ks9vs37.js";
import { _ } from "B:/~BUN/root/chunk-2pp12te6.js";
import { l } from "B:/~BUN/root/chunk-mb9chr1y.js";
import { p } from "B:/~BUN/root/chunk-z6138ats.js";
import { Wr } from "B:/~BUN/root/chunk-3xdsa4p8.js";
import { dn } from "B:/~BUN/root/chunk-y1b1g4ac.js";
import { Svs, TWi, p3, bD } from "B:/~BUN/root/chunk-78494p3w.js";
import { cs as name, k$i, kZt, Y_s, Ekr, E$i, T$i, X_s, C$i, R$i, A$i, x$i } from "B:/~BUN/root/chunk-kfm993xq.js";
import { d6, hQr } from "B:/~BUN/root/chunk-27h4st9h.js";
import { nee } from "B:/~BUN/root/chunk-j5zjtxy5.js";
import { hU, tHt } from "B:/~BUN/root/chunk-4jfmvmew.js";
import { mT } from "B:/~BUN/root/chunk-bxk17zm0.js";
import { kn } from "B:/~BUN/root/chunk-t7d2hp9h.js";
import { o, E, I, C, u, He, me, B, gl } from "B:/~BUN/root/chunk-4bfd0jkf.js";
import { U } from "B:/~BUN/root/chunk-5ha2avah.js";
function sYt(e) {
  return e.map(item => item.includes(", ") || item.includes('"') ? _(item) : item).join(", ");
}
function W(e) {
  let t = [],
    n = e;
  for (;;) {
    if (n.startsWith('"')) {
      let s = -1,
        i = !1;
      for (let a = 1; a < n.length; a++) {
        let h = n[a];
        if (i) {
          i = !1;
          continue;
        }
        if (h === "\\") {
          i = !0;
          continue;
        }
        if (h === '"') {
          s = a;
          break;
        }
      }
      if (s === -1) return null;
      try {
        let a = JSON.parse(n.slice(0, s + 1));
        if (typeof a !== "string") return null;
        t.push(a);
      } catch {
        return null;
      }
      n = n.slice(s + 1);
    } else {
      let s = n.indexOf(", "),
        i = s === -1 ? n : n.slice(0, s);
      if (i.includes('"')) return null;
      t.push(i), n = s === -1 ? "" : n.slice(s);
    }
    if (n === "") break;
    if (!n.startsWith(", ")) return null;
    if (n = n.slice(2), n === "") return null;
  }
  return t;
}
var L = 32768,
  oe = 8192,
  se = 32768,
  ie = 2000,
  re = mT - ie,
  ae = 2000,
  M = ["skipped", "replied_in_chat", "dismissed"],
  ue = new Set(["answers", "annotations", "response", "followUp"]),
  ce = "afkTimeoutMs";
function admitCardAnswer(e, t) {
  try {
    return le(e, t);
  } catch {
    return A("threw");
  }
}
function le(e, t) {
  if (!N(t)) return A("not_an_object");
  for (let d of Object.keys(t)) {
    if (d === ce) return A("host_field");
    if (ue.has(d)) {
      if (Object.hasOwn(e, d)) return A("changed_shown_field");
      continue;
    }
    if (!Object.hasOwn(e, d)) return A("unknown_field");
    if (!d6(t[d], e[d]) && !(d === "questions" && !Object.hasOwn(e, "title") && pe(t[d], e[d]))) return A("changed_shown_field");
  }
  let {
      questions: questions,
      extended: extended
    } = de(q(e, "questions")),
    i = 0,
    a = 0,
    h = new Set(),
    input = {
      ...e
    },
    m = Object.create(null),
    r = q(t, "answers");
  if (r !== void 0) {
    if (!N(r)) return A("answers");
    for (let d of Object.keys(r)) {
      let x = questions.get(d);
      if (x === void 0) return A("answers");
      h.add(d);
      let O = r[d];
      if (typeof O === "string") {
        if (O.length > L) return A("answers");
        i += O.length, m[d] = O;
        continue;
      }
      if (!x.multiSelect || !Array.isArray(O) || O.length > x.optionCount + 1) return A("answers");
      let b = [];
      for (let k = 0; k < O.length; k++) {
        let g = O[k];
        if (typeof g !== "string" || g.length > L) return A("answers");
        b.push(g);
      }
      let y = sYt(b);
      i += y.length, m[d] = y;
    }
  }
  if (!Object.hasOwn(e, "answers")) input.answers = m;
  let w = q(t, "annotations");
  if (w !== void 0) {
    if (!N(w)) return A("annotations");
    let d = Object.create(null);
    for (let x of Object.keys(w)) {
      let O = questions.get(x),
        b = w[x];
      if (O === void 0 || !N(b)) return A("annotations");
      h.add(x);
      let y = {};
      for (let k of Object.keys(b)) {
        let g = b[k];
        switch (k) {
          case "preview":
            if (typeof g !== "string" || !he(O, g)) return A("annotations");
            a += g.length, y.preview = g;
            break;
          case "notes":
            if (typeof g !== "string" || g.length > oe) return A("annotations");
            i += g.length, y.notes = g;
            break;
          case "unanswered":
            {
              let T = M.find(item => item === g);
              if (T === void 0) return A("annotations");
              y.unanswered = T;
              break;
            }
          default:
            return A("annotations");
        }
      }
      d[x] = y;
    }
    input.annotations = d;
  }
  let S = q(t, "response");
  if (S !== void 0) {
    if (typeof S !== "string" || S.length > L) return A("response");
    i += S.length, input.response = S;
  }
  let R = q(t, "followUp");
  if (R !== void 0) {
    if (typeof R !== "boolean" || !extended) return A("follow_up");
    input.followUp = R;
  }
  for (let d of h) a += d.length;
  if (i > se || i + a > re) return A("too_large");
  return {
    kind: "admitted",
    input: input
  };
}
function de(e) {
  let questions_2 = new Map();
  if (!Array.isArray(e)) return {
    questions: questions_2,
    extended: !1
  };
  let extended_2 = e.length > 0;
  for (let s of e) {
    if (!N(s)) {
      extended_2 = !1;
      continue;
    }
    if (typeof q(s, "kind") !== "string") extended_2 = !1;
    let i = q(s, "question");
    if (typeof i !== "string") continue;
    let a = q(s, "options"),
      h = Array.isArray(a) ? a : [],
      previews = new Set();
    for (let m of h) {
      let r = N(m) ? q(m, "preview") : void 0;
      if (typeof r === "string") previews.add(r);
    }
    questions_2.set(i, {
      multiSelect: q(s, "multiSelect") === !0,
      optionCount: h.length,
      previews: previews
    });
  }
  return {
    questions: questions_2,
    extended: extended_2
  };
}
function pe(e, t) {
  if (!Array.isArray(e) || !Array.isArray(t) || e.length !== t.length) return !1;
  let n = t.map((item, index) => {
    let a = e[index];
    if (!N(item) || !N(a)) return item;
    let h = {
      ...item
    };
    if (q(item, "kind") === "choice" && !Object.hasOwn(a, "kind")) delete h.kind;
    if (q(item, "multiSelect") === !1 && !Object.hasOwn(a, "multiSelect")) delete h.multiSelect;
    let c = q(item, "options"),
      m = q(a, "options");
    if (Array.isArray(c) && Array.isArray(m)) h.options = c.map((item, index) => {
      let S = m[index];
      if (!N(item) || !N(S) || Object.hasOwn(S, "preview")) return item;
      let {
        preview: preview,
        ...d
      } = item;
      return d;
    });
    return h;
  });
  return d6(e, n);
}
function he(e, t) {
  if (e.previews.has(t)) return !0;
  for (let n of e.previews) if (n.length <= ae && tHt(n) === t && !hU(n)) return !0;
  return !1;
}
function N(e) {
  if (typeof e !== "object" || e === null || Array.isArray(e)) return !1;
  let t = Object.getPrototypeOf(e);
  return t === Object.prototype || t === null;
}
function q(e, t) {
  return Object.hasOwn(e, t) ? e[t] : void 0;
}
function A(rule) {
  return {
    kind: "refused",
    rule: rule
  };
}
var X = p(() => u({
    label: o().describe("The display text for this option that the user will see and select. Should be concise (1-5 words) and clearly describe the choice."),
    description: o().describe("Explanation of what this option means or what will happen if chosen. Useful for providing context about trade-offs or implications."),
    preview: o().optional().describe("Optional preview content rendered when this option is focused. Use for mockups, code snippets, or visual comparisons that help users compare options. See the tool description for the expected content format.")
  })),
  Y = p(() => X().extend({
    description: o().optional().describe("Optional: add only when the label alone would be ambiguous. One short line on what choosing it leads to.")
  }));
function G(e) {
  return u({
    question: o().describe('The complete question to ask the user. Should be clear, specific, and end with a question mark. Example: "Which library should we use for date formatting?" If multiSelect is true, phrase it accordingly, e.g. "Which features do you want to enable?"'),
    header: o().describe(`Very short label displayed as a chip/tag (max ${k$i} chars). Examples: "Auth method", "Library", "Approach".`),
    options: C(e).min(2).max(4).describe(rMs() ? "The available choices for this question. Must have 2-4 options (this cap applies to multiSelect too \u2014 group or split if you have more). Each option should be a distinct choice; mutually exclusive unless multiSelect is enabled. There should be no 'Other' option, that will be provided automatically." : "The available choices for this question. Must have 2-4 options. Each option should be a distinct, mutually exclusive choice (unless multiSelect is enabled). There should be no 'Other' option, that will be provided automatically."),
    multiSelect: I().default(!1).describe("Set to true to allow the user to select multiple options instead of just one. Use when choices are not mutually exclusive.")
  });
}
var j = p(() => G(X())),
  fe = p(() => G(Y())),
  we = ["choice", "text", "number"],
  J = p(() => u({
    question: j().shape.question,
    header: j().shape.header,
    kind: B(we).optional().describe('How the user answers. "choice" (the default when omitted): picks from options. "text": a free-text box, no options \u2014 for open-ended input. "number": a slider/stepper between min and max \u2014 for quantities.'),
    description: o().optional().describe("Optional single helper line shown under the question."),
    options: C(Y()).max(4).default(() => []).describe(`Choices for a "choice" question: 2-4 distinct options; with multiSelect false they must be mutually exclusive. Omit for "text" and "number" questions. There should be no 'Other' or 'Skip' option; the form lets the user type their own answer or leave a question unanswered.`),
    multiSelect: j().shape.multiSelect,
    placeholder: o().optional().describe('"text" questions only: placeholder for the empty text box.'),
    min: E().optional().describe('"number" questions only (required there): lowest value.'),
    max: E().optional().describe('"number" questions only (required there): highest value.'),
    step: E().positive().optional().describe('"number" questions only: increment between values.'),
    defaultValue: E().optional().describe('"number" questions only: the value the control starts at (within min..max).'),
    unit: o().optional().describe('"number" questions only: short unit shown next to the value, e.g. "px", "slides", "%".')
  })),
  ye = p(() => J().superRefine((e, t) => {
    let n = e.kind ?? "choice";
    for (let [h, c] of [["placeholder", "text"], ["min", "number"], ["max", "number"], ["step", "number"], ["defaultValue", "number"], ["unit", "number"]]) if (n !== c && e[h] !== void 0) t.addIssue({
      code: "custom",
      path: [h],
      message: `${h} applies only to "${c}" questions.`
    });
    if (n === "choice") {
      if (e.options.length < 2) t.addIssue({
        code: "custom",
        path: ["options"],
        message: 'A choice question needs 2-4 options; use kind "text" for an open-ended question.'
      });
      return;
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
      min: min,
      max: max
    } = e;
    if (min === void 0 || max === void 0 || !(min < max)) {
      t.addIssue({
        code: "custom",
        path: ["min"],
        message: "A number question needs numeric min and max with min < max."
      });
      return;
    }
    let {
      defaultValue: defaultValue
    } = e;
    if (defaultValue !== void 0 && (defaultValue < min || defaultValue > max)) t.addIssue({
      code: "custom",
      path: ["defaultValue"],
      message: "defaultValue must lie within min..max."
    });
  })),
  Z = p(() => u({
    preview: o().optional().describe("The preview content of the selected option, if the question used previews."),
    notes: o().optional().describe("Free-text notes the user added to their selection.")
  })),
  ee = "Optional per-question annotations from the user (e.g., notes on preview selections). Keyed by question text.",
  ge = p(() => me(o(), Z()).optional().describe(ee)),
  be = p(() => me(o(), Z().extend({
    unanswered: B(M).optional().catch(void 0).describe("How the question went unanswered: 'skipped' (the user skipped it), 'replied_in_chat' (the user sent a chat message instead), or 'dismissed' (the user closed the card). The model does not see this field; put the text it should read in `answers`. Absent when the question was answered, and also when the answering client did not report it (in a session that does not advertise ask_user_question_unanswered_v1, from an older client, or in an older transcript): then only the text in `answers` says how it ended. Treat any other value as absent.")
  })).optional().describe(ee)),
  P = {
    check: e => {
      let t = e.questions.map(item => item.question);
      if (t.length !== new Set(t).size) return !1;
      for (let n of e.questions) {
        let s = n.options.map(item => item.label);
        if (s.length !== new Set(s).size) return !1;
      }
      return !0;
    },
    message: "Question texts must be unique, option labels must be unique within each question"
  },
  F = 4294967295,
  D = 256,
  Se = p(() => gl(e => {
    if (!Array.isArray(e)) return e;
    let t = e.length;
    if (!Number.isInteger(t) || t < 0 || t > F) return e;
    let n = "";
    for (let s = 0; s < t; s++) {
      let i = e[s];
      if (typeof i !== "string") return e;
      n = s === 0 ? i : n + ", " + i;
    }
    return n;
  }, o())),
  te = p(() => ({
    answers: me(o(), Se()).optional().describe("User answers collected by the permission component"),
    annotations: ge(),
    metadata: u({
      source: o().optional().describe('Optional identifier for the source of this question (e.g., "remember" for /remember command). Used for analytics tracking.')
    }).optional().describe("Optional metadata for tracking and analytics purposes. Not displayed to user.")
  }));
function ne(e) {
  return He({
    questions: C(e).min(1).max(4).describe(rMs() ? "Questions to ask the user (1-4 questions). The 1-4 questions and 2-4 options bounds are hard schema constraints; do not exceed them even if the user requests more \u2014 split into multiple calls instead." : "Questions to ask the user (1-4 questions)"),
    ...te()
  }).refine(P.check, {
    message: P.message
  });
}
var Ae = p(() => ne(j())),
  ke = p(() => ne(fe())),
  Oe = p(() => He({
    title: o().optional().describe('Optional single-line heading shown above the questions, e.g. "Before I build your deck".'),
    questions: C(ye()).min(1).max(4).describe("Questions to ask the user (1-4, most important first). The 1-4 questions and 2-4 options bounds are hard schema constraints; do not exceed them even if the user requests more \u2014 split into multiple calls instead."),
    ...te()
  }).refine(P.check, {
    message: P.message
  })),
  _e = p(() => u({
    questions: C(j()).describe("The questions that were asked"),
    answers: me(o(), o()).describe("The answers provided by the user (question text -> answer string; multi-select answers are comma-separated)"),
    response: o().optional().describe("Freeform text the user typed instead of selecting a structured option"),
    annotations: be(),
    afkTimeoutMs: E().int().positive().optional().describe("Set when the dialog auto-resolved after this many milliseconds of idle (user away from keyboard). Absent on every human-resolved path.")
  })),
  Te = p(() => _e().extend({
    questions: C(J()).describe("The questions that were asked"),
    followUp: I().optional().describe("Set when the user asked for another round of questions instead of (or after partially) answering.")
  }));
var Ikn = "(notes only)";
function V(e) {
  return `No response after ${Math.round(e / 1000)}s \u2014 the user may be away from keyboard. Proceed using your best judgment based on the context so far; you can re-ask this question later if it's still relevant.`;
}
function shownCardInput(e) {
  return {
    ...("title" in e && e.title && {
      title: e.title
    }),
    questions: _$e() ? e.questions.map(item => ({
      ...item,
      kind: "kind" in item && item.kind ? item.kind : "choice"
    })) : e.questions,
    ...(e.metadata && {
      metadata: e.metadata
    })
  };
}
var L8 = dn({
  name: name,
  searchHint: "prompt the user with a multiple-choice question",
  backgrounding: "never",
  maxResultSizeChars: 1e5,
  async description() {
    return E$i;
  },
  async prompt({
    model: model,
    leanPrompt: leanPrompt,
    tools: tools,
    leanRewrite: leanRewrite
  }) {
    let i = bD({
        model: model,
        leanPrompt: leanPrompt
      }),
      a = hQr(tools),
      h = i && p3({
        model: model,
        leanRewrite: leanRewrite
      }) ? a ? Svs : TWi : a ? X_s : C$i,
      c = "";
    if (i) {
      let x = v("tengu_cinder_plover", "").trim();
      c = x ? `
${x}
` : A$i;
    }
    let m = v("tengu_cinder_wren", ""),
      r = typeof m === "string" ? m.trim() : "",
      w = r ? `
${r}
` : "",
      S = _$e() ? R$i : "",
      R = h + c + x$i + w + S,
      d = jOo();
    if (d === void 0) return R;
    return R + T$i[d];
  },
  get inputSchema() {
    if (_$e()) return Oe();
    return XGs() ? ke() : Ae();
  },
  get outputSchema() {
    return Te();
  },
  userFacingName() {
    return "";
  },
  validationErrorSteer(e) {
    if (typeof e !== "object" || e === null || Array.isArray(e)) return null;
    let questions_3 = e.questions;
    if (!Array.isArray(questions_3)) return null;
    let n = !1,
      s = questions_3.length;
    if (!Number.isInteger(s) || s < 0 || s > F) return null;
    for (let i = 0; i < s && i < D; i++) {
      let a = questions_3[i];
      if (typeof a !== "object" || a === null || Array.isArray(a)) continue;
      if (_$e()) {
        let kind = a.kind;
        if (kind === "text" || kind === "number") continue;
      }
      let options = a.options;
      if (Array.isArray(options) && options.length < 2) {
        n = !0;
        break;
      }
    }
    if (!n) return null;
    if (_$e()) return 'This call included a choice question with fewer than 2 options, so it was rejected and the person never saw it. If that question is open-ended, re-ask it with "kind": "text" and no options; if there is really only one path, state it as the approach you are taking and continue with the task. Do not invent a filler second option.';
    return "This call included a question with fewer than 2 options, so it was rejected and the person never saw it. A question with a single option has no decision in it. Do not retry this call and do not invent a filler second option. Instead, state the one path you were going to offer as the approach you are taking, then continue with the task. If this call also contained questions with 2 to 4 options (each with distinct labels), you may re-ask those questions alone in a new call. Ask a question only when the person has at least two genuinely distinct choices.";
  },
  isEnabled() {
    return nee();
  },
  isConcurrencySafe() {
    return !0;
  },
  isReadOnly() {
    return !0;
  },
  toAutoClassifierInput(e) {
    let t = Y_s,
      n = _$e();
    try {
      let s = typeof e === "object" && e !== null ? e.questions : void 0;
      if (!Array.isArray(s)) return "[malformed AskUserQuestion input]";
      let i = [],
        a = s.length;
      if (!Number.isInteger(a) || a < 0 || a > F) return "[malformed AskUserQuestion input]";
      for (let c = 0; c < a; c++) {
        if (i.length >= D) {
          i.push(`[\u2026 further question entries elided: reported length ${a}]`);
          break;
        }
        let m = s[c];
        if (typeof m !== "object" || m === null) {
          let b = t(m);
          i.push(b ? `[malformed question entry] ${b}` : "[malformed question entry]");
          continue;
        }
        let options_2 = m.options,
          w = [];
        if (Array.isArray(options_2)) {
          let b = options_2.length;
          for (let y = 0; y < b; y++) {
            if (w.length >= D) {
              w.push("[\u2026 further option entries elided]");
              break;
            }
            let k = options_2[y];
            if (typeof k !== "object" || k === null) {
              w.push(`(${y + 1}) "${t(k)}"`);
              continue;
            }
            let g = k,
              T = [`(${y + 1}) "${t(g.label)}"`],
              z = t(g.description);
            if (z) T.push(`\u2014 ${z}`);
            let Q = t(g.preview);
            if (Q) T.push(`[preview: ${Q}]`);
            w.push(T.join(" "));
          }
        }
        let S = w.join(" "),
          R = m.multiSelect === !0 ? " [multiSelect]" : "",
          d = t(m.header),
          x = d ? ` [header: ${d}]` : "",
          O = "";
        if (n) {
          let b = m;
          for (let [y, k] of [["kind", t(b.kind)], ["description", t(b.description)], ["placeholder", t(b.placeholder)], ["min", Ekr(b.min)], ["max", Ekr(b.max)], ["step", Ekr(b.step)], ["default", Ekr(b.defaultValue)], ["unit", t(b.unit)]]) if (k) O += ` [${y}: ${k}]`;
        }
        i.push(`"${t(m.question)}"${x}${O}${R} options: ${S}`);
      }
      if (i.length === 0) return "[malformed AskUserQuestion input]";
      let h = n ? t(e.title) : "";
      return (h ? `[title: ${h}] ` : "") + i.join(" | ");
    } catch {
      return "[malformed AskUserQuestion input]";
    }
  },
  admitCardAnswer: admitCardAnswer,
  shownCardInput: shownCardInput,
  requiresUserInteraction() {
    return !0;
  },
  renderToolUseMessage() {
    return null;
  },
  create() {
    return {
      async validateInput({
        questions: questions_4
      }) {
        if (jOo() !== "html") return {
          result: !0
        };
        for (let t of questions_4) for (let n of t.options) {
          let s = xe(n.preview);
          if (s) return {
            result: !1,
            message: `Option "${n.label}" in question "${t.question}": ${s}`,
            errorCode: 1
          };
        }
        return {
          result: !0
        };
      },
      async checkPermissions(e) {
        return {
          behavior: "ask",
          message: "Answer questions?",
          updatedInput: shownCardInput(e)
        };
      },
      async call(e) {
        let {
            answers = {},
            annotations: annotations
          } = e,
          questions_5 = e.questions.map(item => Array.isArray(item.options) ? item : {
            ...item,
            options: []
          }),
          {
            response: response,
            afkTimeoutMs: afkTimeoutMs,
            followUp: followUp
          } = e,
          answerCount = U(questions_5, ({
            question: question
          }) => {
            let w = answers[question];
            return Array.isArray(w) ? w.length > 0 : typeof w === "string" && w !== "" && w !== Ikn;
          });
        return l("tengu_ask_user_question_completed", {
          extended: _$e(),
          questionCount: questions_5.length,
          choiceCount: U(questions_5, r => (r.kind ?? "choice") === "choice" && !r.multiSelect),
          multiSelectCount: U(questions_5, r => (r.kind ?? "choice") === "choice" && r.multiSelect),
          textCount: U(questions_5, r => r.kind === "text"),
          numberCount: U(questions_5, r => r.kind === "number"),
          answerCount: answerCount,
          followUp: followUp === !0,
          outcome: f(afkTimeoutMs ? "afk_timeout" : followUp ? "follow_up" : response?.trim() ? "responded" : answerCount > 0 ? "answered" : "unanswered"),
          ...(e.metadata?.source && {
            source_hash: kn(e.metadata.source)
          })
        }), {
          data: {
            questions: questions_5,
            answers: answers,
            ...(response?.trim() && {
              response: response
            }),
            ...(annotations && {
              annotations: annotations
            }),
            ...(afkTimeoutMs && {
              afkTimeoutMs: afkTimeoutMs
            }),
            ...(followUp === !0 && {
              followUp: !0
            })
          }
        };
      }
    };
  },
  mapToolResultToToolResultBlockParam({
    questions: questions_6,
    answers: answers_2,
    response: response_2,
    annotations: annotations_2,
    afkTimeoutMs: afkTimeoutMs_2,
    followUp: followUp_2
  }, tool_use_id) {
    let c = questions_6.map(({
        question: question_2
      }) => {
        let w = Wr(answers_2, question_2),
          S = annotations_2 && Wr(annotations_2, question_2),
          R = w && w !== Ikn;
        if (!R && !S?.notes) return null;
        let d = [R ? `"${question_2}"="${w}"` : `"${question_2}"=(no option selected)`];
        if (S?.preview) d.push(`selected preview:
${S.preview}`);
        if (S?.notes) d.push(`notes: ${S.notes}`);
        return d.join(" ");
      }).filter(item => item !== null).join(", "),
      content;
    if (afkTimeoutMs_2) content = c ? `${V(afkTimeoutMs_2)}

Before going idle the user had selected: ${c}.` : V(afkTimeoutMs_2);else if (followUp_2) {
      let r = response_2?.trim() ? ` They also wrote: "${response_2}".` : "";
      content = c ? `${kZt} before you proceed. So far they answered: ${c}.${r} Call ${name} again with follow-up questions that build on these answers (do not repeat these); do not start the task yet.` : `${kZt} before answering.${r} Call ${name} again now with further questions about this decision (do not repeat these); do not proceed with the task yet.`;
    } else if (response_2?.trim()) content = `The user responded: ${response_2}`;else if (c) content = questions_6.every(({
      question: question_3,
      options: options_3,
      multiSelect: multiSelect,
      kind: kind_2,
      min: min_2,
      max: max_2
    }) => {
      if ((annotations_2 && Wr(annotations_2, question_3))?.notes) return !1;
      if (kind_2 === "text" || kind_2 === "number") {
        let T = Wr(answers_2, question_3);
        if (T === void 0 || T === "") return !0;
        if (kind_2 === "text" || typeof T !== "string") return !1;
        let z = T.trim(),
          Q = Number(z);
        return /^-?\d+(\.\d+)?$/.test(z) && Number.isFinite(Q) && (min_2 === void 0 || Q >= min_2) && (max_2 === void 0 || Q <= max_2);
      }
      let y = Wr(answers_2, question_3),
        k = new Set(options_3.map(item => item.label));
      if (Array.isArray(y)) return multiSelect && y.length > 0 && y.every(item => k.has(item));
      if (!y || y === Ikn) return !0;
      if (k.has(y)) return !0;
      if (!multiSelect) return !1;
      let g = W(y);
      return g !== null && g.length >= 1 && sYt(g) === y && g.every(item => k.has(item));
    }) ? `Your questions have been answered: ${c}. You can now continue with these answers in mind.` : `The user answered: ${c}. Read the answers carefully \u2014 they may request clarification, changes, or that you not proceed \u2014 and follow what they actually say.`;else content = "The user did not answer the questions.";
    return {
      type: "tool_result",
      content: content,
      tool_use_id: tool_use_id
    };
  }
});
function xe(e) {
  if (e === void 0) return null;
  if (/<\s*(html|body|!doctype)\b/i.test(e)) return "preview must be an HTML fragment, not a full document (no <html>, <body>, or <!DOCTYPE>)";
  if (/<\s*(script|style)\b/i.test(e)) return "preview must not contain <script> or <style> tags. Use inline styles via the style attribute if needed.";
  if (!/<[a-z][^>]*>/i.test(e)) return 'preview must contain HTML (previewFormat is set to "html"). Wrap content in a tag like <div> or <pre>.';
  return null;
}
export { sYt, Ikn, L8 };