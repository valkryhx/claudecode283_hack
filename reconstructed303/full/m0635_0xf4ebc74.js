// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.303
import {
  F,
  ojr,
  GTe,
  m2o
} from "B:/~BUN/root/chunk-rpez7z7a.js";
import {
  c
} from "B:/~BUN/root/chunk-jthpk6wv.js";
import {
  E,
  GDo
} from "B:/~BUN/root/chunk-hb6x4e3n.js";
import {
  _
} from "B:/~BUN/root/chunk-6za2ez23.js";
import {
  i
} from "B:/~BUN/root/chunk-1kfn24jp.js";
import {
  f
} from "B:/~BUN/root/chunk-frrkt2bs.js";
import {
  no
} from "B:/~BUN/root/chunk-8ye9n4fk.js";
import {
  UD
} from "B:/~BUN/root/chunk-qp0344nb.js";
import {
  WRo,
  lLs,
  Qt
} from "B:/~BUN/root/chunk-hkc0g0wr.js";
import {
  Hj,
  bO
} from "B:/~BUN/root/chunk-z8fd2x5s.js";
import {
  Xo,
  SMs,
  VDt,
  jEo,
  Xzn,
  vMs,
  kMs,
  WEo,
  EMs,
  TMs,
  CMs
} from "B:/~BUN/root/chunk-9tkh434c.js";
import {
  QY,
  hHe,
  Agr
} from "B:/~BUN/root/chunk-9grc6xh0.js";
import {
  WN,
  rgt
} from "B:/~BUN/root/chunk-mbz8rhex.js";
import {
  an
} from "B:/~BUN/root/chunk-31x8pa20.js";
import {
  o,
  v,
  M,
  T,
  u,
  De,
  fe,
  U,
  wa
} from "B:/~BUN/root/chunk-g3snhg6n.js";

function EEt(e) {
  return e.map((t) => t.includes(", ") || t.includes('"') ? _(t) : t).join(", ")
}

function H(e) {
  let t = [],
    n = e;
  for (;;) {
    if (n.startsWith('"')) {
      let r = -1,
        s = !1;
      for (let a = 1; a < n.length; a++) {
        let h = n[a];
        if (s) {
          s = !1;
          continue
        }
        if (h === "\\") {
          s = !0;
          continue
        }
        if (h === '"') {
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
var P = 32768,
  te = 8192,
  ne = 32768,
  oe = 2000,
  se = UD - oe,
  ie = 2000,
  re = new Set(["answers", "annotations", "response", "followUp"]),
  ae = "afkTimeoutMs";

function W(e, t) {
  try {
    return ue(e, t)
  } catch {
    return S("threw")
  }
}

function ue(e, t) {
  if (!z(t)) return S("not_an_object");
  for (let p of Object.keys(t)) {
    if (p === ae) return S("host_field");
    if (re.has(p)) {
      if (Object.hasOwn(e, p)) return S("changed_shown_field");
      continue
    }
    if (!Object.hasOwn(e, p)) return S("unknown_field");
    if (!hHe(t[p], e[p]) && !(p === "questions" && !Object.hasOwn(e, "title") && ce(t[p], e[p]))) return S("changed_shown_field")
  }
  let {
    questions: n,
    extended: r
  } = le(I(e, "questions")), s = 0, a = 0, h = new Set, d = {
    ...e
  }, m = Object.create(null), l = I(t, "answers");
  if (l !== void 0) {
    if (!z(l)) return S("answers");
    for (let p of Object.keys(l)) {
      let R = n.get(p);
      if (R === void 0) return S("answers");
      h.add(p);
      let O = l[p];
      if (typeof O === "string") {
        if (O.length > P) return S("answers");
        s += O.length, m[p] = O;
        continue
      }
      if (!R.multiSelect || !Array.isArray(O) || O.length > R.optionCount + 1) return S("answers");
      let g = [];
      for (let A = 0; A < O.length; A++) {
        let b = O[A];
        if (typeof b !== "string" || b.length > P) return S("answers");
        g.push(b)
      }
      let y = EEt(g);
      s += y.length, m[p] = y
    }
  }
  if (!Object.hasOwn(e, "answers")) d.answers = m;
  let w = I(t, "annotations");
  if (w !== void 0) {
    if (!z(w)) return S("annotations");
    let p = Object.create(null);
    for (let R of Object.keys(w)) {
      let O = n.get(R),
        g = w[R];
      if (O === void 0 || !z(g)) return S("annotations");
      h.add(R);
      let y = {};
      for (let A of Object.keys(g)) {
        let b = g[A];
        switch (A) {
          case "preview":
            if (typeof b !== "string" || !de(O, b)) return S("annotations");
            a += b.length, y.preview = b;
            break;
          case "notes":
            if (typeof b !== "string" || b.length > te) return S("annotations");
            s += b.length, y.notes = b;
            break;
          default:
            return S("annotations")
        }
      }
      p[R] = y
    }
    d.annotations = p
  }
  let k = I(t, "response");
  if (k !== void 0) {
    if (typeof k !== "string" || k.length > P) return S("response");
    s += k.length, d.response = k
  }
  let x = I(t, "followUp");
  if (x !== void 0) {
    if (typeof x !== "boolean" || !r) return S("follow_up");
    d.followUp = x
  }
  for (let p of h) a += p.length;
  if (s > ne || s + a > se) return S("too_large");
  return {
    kind: "admitted",
    input: d
  }
}

function le(e) {
  let t = new Map;
  if (!Array.isArray(e)) return {
    questions: t,
    extended: !1
  };
  let n = e.length > 0;
  for (let r of e) {
    if (!z(r)) {
      n = !1;
      continue
    }
    if (typeof I(r, "kind") !== "string") n = !1;
    let s = I(r, "question");
    if (typeof s !== "string") continue;
    let a = I(r, "options"),
      h = Array.isArray(a) ? a : [],
      d = new Set;
    for (let m of h) {
      let l = z(m) ? I(m, "preview") : void 0;
      if (typeof l === "string") d.add(l)
    }
    t.set(s, {
      multiSelect: I(r, "multiSelect") === !0,
      optionCount: h.length,
      previews: d
    })
  }
  return {
    questions: t,
    extended: n
  }
}

function ce(e, t) {
  if (!Array.isArray(e) || !Array.isArray(t) || e.length !== t.length) return !1;
  let n = t.map((r, s) => {
    let a = e[s];
    if (!z(r) || I(r, "kind") !== "choice" || !z(a) || Object.hasOwn(a, "kind")) return r;
    let {
      kind: h,
      ...d
    } = r;
    return d
  });
  return hHe(e, n)
}

function de(e, t) {
  if (e.previews.has(t)) return !0;
  for (let n of e.previews)
    if (n.length <= ie && rgt(n) === t && !WN(n)) return !0;
  return !1
}

function z(e) {
  if (typeof e !== "object" || e === null || Array.isArray(e)) return !1;
  let t = Object.getPrototypeOf(e);
  return t === Object.prototype || t === null
}

function I(e, t) {
  return Object.hasOwn(e, t) ? e[t] : void 0
}

function S(e) {
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

function B(e) {
  return u({
    question: o().describe('The complete question to ask the user. Should be clear, specific, and end with a question mark. Example: "Which library should we use for date formatting?" If multiSelect is true, phrase it accordingly, e.g. "Which features do you want to enable?"'),
    header: o().describe(`Very short label displayed as a chip/tag (max ${SMs} chars). Examples: "Auth method", "Library", "Approach".`),
    options: T(e).min(2).max(4).describe(GDo() ? "The available choices for this question. Must have 2-4 options (this cap applies to multiSelect too \u2014 group or split if you have more). Each option should be a distinct choice; mutually exclusive unless multiSelect is enabled. There should be no 'Other' option, that will be provided automatically." : "The available choices for this question. Must have 2-4 options. Each option should be a distinct, mutually exclusive choice (unless multiSelect is enabled). There should be no 'Other' option, that will be provided automatically."),
    multiSelect: M().default(!1).describe("Set to true to allow the user to select multiple options instead of just one. Use when choices are not mutually exclusive.")
  })
}
var j = f(() => B(X())),
  pe = f(() => B(Y())),
  he = ["choice", "text", "number"],
  G = f(() => u({
    question: j().shape.question,
    header: j().shape.header,
    kind: U(he).optional().describe('How the user answers. "choice" (the default when omitted): picks from options. "text": a free-text box, no options \u2014 for open-ended input. "number": a slider/stepper between min and max \u2014 for quantities.'),
    description: o().optional().describe("Optional single helper line shown under the question."),
    options: T(Y()).max(4).default(() => []).describe(`Choices for a "choice" question: 2-4 distinct options; with multiSelect false they must be mutually exclusive. Omit for "text" and "number" questions. There should be no 'Other' or 'Skip' option; the form lets the user type their own answer or leave a question unanswered.`),
    multiSelect: j().shape.multiSelect,
    placeholder: o().optional().describe('"text" questions only: placeholder for the empty text box.'),
    min: v().optional().describe('"number" questions only (required there): lowest value.'),
    max: v().optional().describe('"number" questions only (required there): highest value.'),
    step: v().positive().optional().describe('"number" questions only: increment between values.'),
    defaultValue: v().optional().describe('"number" questions only: the value the control starts at (within min..max).'),
    unit: o().optional().describe('"number" questions only: short unit shown next to the value, e.g. "px", "slides", "%".')
  })),
  me = f(() => G().superRefine((e, t) => {
    let n = e.kind ?? "choice";
    for (let [h, d] of [
        ["placeholder", "text"],
        ["min", "number"],
        ["max", "number"],
        ["step", "number"],
        ["defaultValue", "number"],
        ["unit", "number"]
      ])
      if (n !== d && e[h] !== void 0) t.addIssue({
        code: "custom",
        path: [h],
        message: `${h} applies only to "${d}" questions.`
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
  J = f(() => {
    let e = u({
      preview: o().optional().describe("The preview content of the selected option, if the question used previews."),
      notes: o().optional().describe("Free-text notes the user added to their selection.")
    });
    return fe(o(), e).optional().describe("Optional per-question annotations from the user (e.g., notes on preview selections). Keyed by question text.")
  }),
  C = {
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
  D = 4294967295,
  L = 256,
  we = f(() => wa((e) => {
    if (!Array.isArray(e)) return e;
    let t = e.length;
    if (!Number.isInteger(t) || t < 0 || t > D) return e;
    let n = "";
    for (let r = 0; r < t; r++) {
      let s = e[r];
      if (typeof s !== "string") return e;
      n = r === 0 ? s : n + ", " + s
    }
    return n
  }, o())),
  Z = f(() => ({
    answers: fe(o(), we()).optional().describe("User answers collected by the permission component"),
    annotations: J(),
    metadata: u({
      source: o().optional().describe('Optional identifier for the source of this question (e.g., "remember" for /remember command). Used for analytics tracking.')
    }).optional().describe("Optional metadata for tracking and analytics purposes. Not displayed to user.")
  }));

function ee(e) {
  return De({
    questions: T(e).min(1).max(4).describe(GDo() ? "Questions to ask the user (1-4 questions). The 1-4 questions and 2-4 options bounds are hard schema constraints; do not exceed them even if the user requests more \u2014 split into multiple calls instead." : "Questions to ask the user (1-4 questions)"),
    ...Z()
  }).refine(C.check, {
    message: C.message
  })
}
var ye = f(() => ee(j())),
  ge = f(() => ee(pe())),
  be = f(() => De({
    title: o().optional().describe('Optional single-line heading shown above the questions, e.g. "Before I build your deck".'),
    questions: T(me()).min(1).max(4).describe("Questions to ask the user (1-4, most important first). The 1-4 questions and 2-4 options bounds are hard schema constraints; do not exceed them even if the user requests more \u2014 split into multiple calls instead."),
    ...Z()
  }).refine(C.check, {
    message: C.message
  })),
  Se = f(() => u({
    questions: T(j()).describe("The questions that were asked"),
    answers: fe(o(), o()).describe("The answers provided by the user (question text -> answer string; multi-select answers are comma-separated)"),
    response: o().optional().describe("Freeform text the user typed instead of selecting a structured option"),
    annotations: J(),
    afkTimeoutMs: v().int().positive().optional().describe("Set when the dialog auto-resolved after this many milliseconds of idle (user away from keyboard). Absent on every human-resolved path.")
  })),
  ke = f(() => Se().extend({
    questions: T(G()).describe("The questions that were asked"),
    followUp: M().optional().describe("Set when the user asked for another round of questions instead of (or after partially) answering.")
  }));
var PKt = "(notes only)";

function V(e) {
  return `No response after ${Math.round(e/1000)}s \u2014 the user may be away from keyboard. Proceed using your best judgment based on the context so far; you can re-ask this question later if it's still relevant.`
}

function K(e) {
  return {
    ..."title" in e && e.title && {
      title: e.title
    },
    questions: GTe() ? e.questions.map((t) => ({
      ...t,
      kind: "kind" in t && t.kind ? t.kind : "choice"
    })) : e.questions,
    ...e.metadata && {
      metadata: e.metadata
    }
  }
}
var u7 = Qt({
  name: Xo,
  searchHint: "prompt the user with a multiple-choice question",
  backgrounding: "never",
  maxResultSizeChars: 1e5,
  async description() {
    return vMs
  },
  async prompt({
    model: e,
    leanPrompt: t,
    tools: n,
    leanRewrite: r
  }) {
    let s = bO({
        model: e,
        leanPrompt: t
      }),
      a = Agr(n),
      h = s && Hj({
        model: e,
        leanRewrite: r
      }) ? a ? WRo : lLs : a ? WEo : EMs,
      d = "";
    if (s) {
      let p = E("tengu_cinder_plover", "").trim();
      d = p ? `
${p}
` : CMs
    }
    let m = E("tengu_cinder_wren", ""),
      l = typeof m === "string" ? m.trim() : "",
      w = l ? `
${l}
` : "",
      k = GTe() ? TMs : "",
      x = ojr();
    if (x === void 0) return h + d + w + k;
    return h + d + w + k + kMs[x]
  },
  get inputSchema() {
    if (GTe()) return be();
    return m2o() ? ge() : ye()
  },
  get outputSchema() {
    return ke()
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
    if (!Number.isInteger(r) || r < 0 || r > D) return null;
    for (let s = 0; s < r && s < L; s++) {
      let a = t[s];
      if (typeof a !== "object" || a === null || Array.isArray(a)) continue;
      if (GTe()) {
        let d = a.kind;
        if (d === "text" || d === "number") continue
      }
      let h = a.options;
      if (Array.isArray(h) && h.length < 2) {
        n = !0;
        break
      }
    }
    if (!n) return null;
    if (GTe()) return 'This call included a choice question with fewer than 2 options, so it was rejected and the person never saw it. If that question is open-ended, re-ask it with "kind": "text" and no options; if there is really only one path, state it as the approach you are taking and continue with the task. Do not invent a filler second option.';
    return "This call included a question with fewer than 2 options, so it was rejected and the person never saw it. A question with a single option has no decision in it. Do not retry this call and do not invent a filler second option. Instead, state the one path you were going to offer as the approach you are taking, then continue with the task. If this call also contained questions with 2 to 4 options (each with distinct labels), you may re-ask those questions alone in a new call. Ask a question only when the person has at least two genuinely distinct choices."
  },
  isEnabled() {
    return QY()
  },
  isConcurrencySafe() {
    return !0
  },
  isReadOnly() {
    return !0
  },
  toAutoClassifierInput(e) {
    let t = jEo,
      n = GTe();
    try {
      let r = typeof e === "object" && e !== null ? e.questions : void 0;
      if (!Array.isArray(r)) return "[malformed AskUserQuestion input]";
      let s = [],
        a = r.length;
      if (!Number.isInteger(a) || a < 0 || a > D) return "[malformed AskUserQuestion input]";
      for (let d = 0; d < a; d++) {
        if (s.length >= L) {
          s.push(`[\u2026 further question entries elided: reported length ${a}]`);
          break
        }
        let m = r[d];
        if (typeof m !== "object" || m === null) {
          let g = t(m);
          s.push(g ? `[malformed question entry] ${g}` : "[malformed question entry]");
          continue
        }
        let l = m.options,
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
            let b = A,
              q = [`(${y+1}) "${t(b.label)}"`],
              Q = t(b.description);
            if (Q) q.push(`\u2014 ${Q}`);
            let N = t(b.preview);
            if (N) q.push(`[preview: ${N}]`);
            w.push(q.join(" "))
          }
        }
        let k = w.join(" "),
          x = m.multiSelect === !0 ? " [multiSelect]" : "",
          p = t(m.header),
          R = p ? ` [header: ${p}]` : "",
          O = "";
        if (n) {
          let g = m;
          for (let [y, A] of [
              ["kind", t(g.kind)],
              ["description", t(g.description)],
              ["placeholder", t(g.placeholder)],
              ["min", Xzn(g.min)],
              ["max", Xzn(g.max)],
              ["step", Xzn(g.step)],
              ["default", Xzn(g.defaultValue)],
              ["unit", t(g.unit)]
            ])
            if (A) O += ` [${y}: ${A}]`
        }
        s.push(`"${t(m.question)}"${R}${O}${x} options: ${k}`)
      }
      if (s.length === 0) return "[malformed AskUserQuestion input]";
      let h = n ? t(e.title) : "";
      return (h ? `[title: ${h}] ` : "") + s.join(" | ")
    } catch {
      return "[malformed AskUserQuestion input]"
    }
  },
  admitCardAnswer: W,
  shownCardInput: K,
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
        if (ojr() !== "html") return {
          result: !0
        };
        for (let t of e)
          for (let n of t.options) {
            let r = Ae(n.preview);
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
          updatedInput: K(e)
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
          afkTimeoutMs: h,
          followUp: d
        } = e, m = F(s, ({
          question: l
        }) => {
          let w = t[l];
          return Array.isArray(w) ? w.length > 0 : typeof w === "string" && w !== "" && w !== PKt
        });
        return i("tengu_ask_user_question_completed", {
          extended: GTe(),
          questionCount: s.length,
          choiceCount: F(s, (l) => (l.kind ?? "choice") === "choice" && !l.multiSelect),
          multiSelectCount: F(s, (l) => (l.kind ?? "choice") === "choice" && l.multiSelect),
          textCount: F(s, (l) => l.kind === "text"),
          numberCount: F(s, (l) => l.kind === "number"),
          answerCount: m,
          followUp: d === !0,
          outcome: c(h ? "afk_timeout" : d ? "follow_up" : a?.trim() ? "responded" : m > 0 ? "answered" : "unanswered"),
          ...e.metadata?.source && {
            source_hash: an(e.metadata.source)
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
            ...h && {
              afkTimeoutMs: h
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
  }, h) {
    let d = e.map(({
        question: l
      }) => {
        let w = no(t, l),
          k = r && no(r, l),
          x = w && w !== PKt;
        if (!x && !k?.notes) return null;
        let p = [x ? `"${l}"="${w}"` : `"${l}"=(no option selected)`];
        if (k?.preview) p.push(`selected preview:
${k.preview}`);
        if (k?.notes) p.push(`notes: ${k.notes}`);
        return p.join(" ")
      }).filter((l) => l !== null).join(", "),
      m;
    if (s) m = d ? `${V(s)}

Before going idle the user had selected: ${d}.` : V(s);
    else if (a) {
      let l = n?.trim() ? ` They also wrote: "${n}".` : "";
      m = d ? `${VDt} before you proceed. So far they answered: ${d}.${l} Call ${Xo} again with follow-up questions that build on these answers (do not repeat these); do not start the task yet.` : `${VDt} before answering.${l} Call ${Xo} again now with further questions about this decision (do not repeat these); do not proceed with the task yet.`
    } else if (n?.trim()) m = `The user responded: ${n}`;
    else if (d) m = e.every(({
      question: w,
      options: k,
      multiSelect: x,
      kind: p,
      min: R,
      max: O
    }) => {
      if ((r && no(r, w))?.notes) return !1;
      if (p === "text" || p === "number") {
        let q = no(t, w);
        if (q === void 0 || q === "") return !0;
        if (p === "text" || typeof q !== "string") return !1;
        let Q = q.trim(),
          N = Number(Q);
        return /^-?\d+(\.\d+)?$/.test(Q) && Number.isFinite(N) && (R === void 0 || N >= R) && (O === void 0 || N <= O)
      }
      let y = no(t, w),
        A = new Set(k.map((q) => q.label));
      if (Array.isArray(y)) return x && y.length > 0 && y.every((q) => A.has(q));
      if (!y || y === PKt) return !0;
      if (A.has(y)) return !0;
      if (!x) return !1;
      let b = H(y);
      return b !== null && b.length >= 1 && EEt(b) === y && b.every((q) => A.has(q))
    }) ? `Your questions have been answered: ${d}. You can now continue with these answers in mind.` : `The user answered: ${d}. Read the answers carefully \u2014 they may request clarification, changes, or that you not proceed \u2014 and follow what they actually say.`;
    else m = "The user did not answer the questions.";
    return {
      type: "tool_result",
      content: m,
      tool_use_id: h
    }
  }
});

function Ae(e) {
  if (e === void 0) return null;
  if (/<\s*(html|body|!doctype)\b/i.test(e)) return "preview must be an HTML fragment, not a full document (no <html>, <body>, or <!DOCTYPE>)";
  if (/<\s*(script|style)\b/i.test(e)) return "preview must not contain <script> or <style> tags. Use inline styles via the style attribute if needed.";
  if (!/<[a-z][^>]*>/i.test(e)) return 'preview must contain HTML (previewFormat is set to "html"). Wrap content in a tag like <div> or <pre>.';
  return null
}
export {
  EEt,
  PKt,
  u7
};
