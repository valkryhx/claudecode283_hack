// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  dt,
  Yt,
  Me
} from "B:/~BUN/root/chunk-9kvvd0hy.js";
import {
  t
} from "B:/~BUN/root/chunk-2pp12te6.js";
import {
  Q
} from "B:/~BUN/root/chunk-n8cnxns2.js";
import {
  ht
} from "B:/~BUN/root/chunk-y1b1g4ac.js";
import {
  gi,
  Qr,
  _r
} from "B:/~BUN/root/chunk-1ks9vs37.js";
import {
  pe
} from "B:/~BUN/root/chunk-thn0wk2x.js";
import {
  Xd
} from "B:/~BUN/root/chunk-q8eknvfd.js";
import {
  to
} from "B:/~BUN/root/chunk-sy1h8mf0.js";
import {
  qf,
  Bv,
  xFe,
  Hl,
  Pb
} from "B:/~BUN/root/chunk-1s0yt4vj.js";
import {
  kr
} from "B:/~BUN/root/chunk-dm4rzkqc.js";
import {
  Qt
} from "B:/~BUN/root/chunk-3v92y8yw.js";
import {
  co
} from "B:/~BUN/root/chunk-tjfmeakx.js";
import {
  ft
} from "B:/~BUN/root/chunk-2x2z0t2k.js";
import {
  cs
} from "B:/~BUN/root/chunk-kfm993xq.js";
import {
  hi
} from "B:/~BUN/root/chunk-7pxn9dsp.js";
import {
  Roe
} from "B:/~BUN/root/chunk-8x466dw5.js";
import {
  ya
} from "B:/~BUN/root/chunk-6cgv9p77.js";
import {
  cl
} from "B:/~BUN/root/chunk-78494p3w.js";
import {
  uf,
  FF
} from "B:/~BUN/root/chunk-v29ccgfa.js";
import {
  qu
} from "B:/~BUN/root/chunk-8rnfdnh3.js";
import {
  hA
} from "B:/~BUN/root/chunk-45td50dx.js";
import {
  Ru
} from "B:/~BUN/root/chunk-mjgazsjk.js";
import {
  cR
} from "B:/~BUN/root/chunk-400x0tcq.js";
import {
  P2
} from "B:/~BUN/root/chunk-stfp5qgr.js";
import {
  wDt
} from "B:/~BUN/root/chunk-ye4pqyyp.js";
import {
  KP
} from "B:/~BUN/root/chunk-48hpv12e.js";
import {
  f_,
  vb,
  Aq
} from "B:/~BUN/root/chunk-az6xed3t.js";
import {
  $$
} from "B:/~BUN/root/chunk-w179eqqe.js";
import {
  Uf
} from "B:/~BUN/root/chunk-zy4xrndc.js";
import {
  KXe,
  iDn,
  mSr
} from "B:/~BUN/root/chunk-f25379tv.js";
import {
  OJe
} from "B:/~BUN/root/chunk-ekh9f9kv.js";
import {
  TL
} from "B:/~BUN/root/chunk-p3n5gp58.js";
import {
  nk
} from "B:/~BUN/root/chunk-j7y9vsxb.js";
import {
  Nji
} from "B:/~BUN/root/chunk-m1zmpfya.js";
import {
  HF
} from "B:/~BUN/root/chunk-b9f6eh39.js";
import {
  Vn
} from "B:/~BUN/root/chunk-tacrdmts.js";
import {
  as
} from "B:/~BUN/root/chunk-w4y83tgx.js";
import {
  $S
} from "B:/~BUN/root/chunk-bmcb2qbs.js";
import {
  ec
} from "B:/~BUN/root/chunk-jjs9d8eg.js";
import {
  Fs
} from "B:/~BUN/root/chunk-fkcdzerj.js";
import {
  $r
} from "B:/~BUN/root/chunk-xbnyqyft.js";
import {
  ze
} from "B:/~BUN/root/chunk-xwzn0yxv.js";
import {
  An
} from "B:/~BUN/root/chunk-7yd8y16n.js";
import {
  U
} from "B:/~BUN/root/chunk-5ha2avah.js";
var S0e = "ShowOnboardingRolePicker",
  d0i = "Render a clickable role-picker chip row during Cowork onboarding so the user can pick their role and get a matching plugin installed.",
  c0i = `Render a clickable role-picker chip row during Cowork onboarding. Call this when asking the user what kind of work they do so they can pick their role and get a matching plugin installed. The role list is hardcoded in the frontend \u2014 call with no args.

The call blocks until the user responds. Three resolution paths all land in the tool result: chip click or free-form typed answer \u2192 {"role": "Legal"} or {"role": "paralegal"}; X button \u2192 {"dismissed": true}. An empty object {} means the user approved without picking a role \u2014 treat it like a dismissal. Free-form roles may not match the chip list \u2014 search the marketplace with whatever string you get.

Do NOT call this in normal conversation. Only call this when explicitly helping the user set up Cowork for their role/job function.`;
var MZ = "TaskGet";
var b0e = "OfferChromeSetup",
  e0i = "Offer the user Claude in Chrome setup after a Claude in Chrome tool reports the extension is not connected and the task needs their own signed-in browser",
  t0i = "Offer the user the one-time setup of Claude in Chrome, so this task can use their own signed-in browser.",
  n0i = `Offer the user the one-time setup of Claude in Chrome so this task can use their own signed-in browser: their accounts, cookies and open tabs. The call shows the user a setup card and blocks until they respond.

Call it only when ALL of these hold: a Claude in Chrome tool call in this task has just reported that the browser extension is not connected; the task genuinely needs a page the user is signed in to, or their existing tabs (for public pages use the built-in browser or web fetch instead); and you have not offered before in this task. Pass a short \`reason\` naming what the task needs their browser for.

The result is one of: connected (Claude in Chrome is now connected: continue the task with the mcp__claude-in-chrome__* tools), or not_now (the user chose not to set it up now, or nobody could answer: carry on with the built-in browser or without a browser, and do not offer again in this task unless the user asks). Treat a rejected call the same way as not_now.`,
  r0i = "Claude in Chrome is now connected. Continue the task with the mcp__claude-in-chrome__* tools.",
  o0i = "Claude in Chrome was not set up now. Carry on with the built-in browser or without a browser, and do not offer Chrome setup again in this task unless the user asks.",
  s0i = "The user is on the Claude mobile app, where Claude in Chrome cannot be set up, so no offer was shown. Carry on with the built-in browser or without a browser; you may tell the user that Claude in Chrome can only be set up on a computer. Do not offer Chrome setup again in this task unless the user asks or says they are at a computer.",
  i0i = "Try a Claude in Chrome tool first (for example mcp__claude-in-chrome__tabs_context_mcp); offer setup only if it reports that the browser extension is not connected.";
import {
  resolve as v
} from "path";
var D = 60000,
  G = new Set(["command", "description", "timeout"]),
  E = `${Me} in the coordinator runs only a command it can verify as read-only and that stays in the working directory (no cd, pushd or popd), with no input besides command, description and timeout (no run_in_background, no sandbox bypass, no other machine) \u2014 run anything else from a worker via the ${ft} tool.`,
  j = "A refused compound command does not mean the shell is unavailable: retry the read as a single plain command.",
  W = "This refusal does not mean the shell is unavailable: a plain read-only command still runs.",
  H = 80,
  B = 300,
  F = `${Me} in the coordinator does not read a worker's transcript or a task's output file. A worker's result reaches you in its task notification; ask the worker with ${An} for more \u2014 not with the shell.`,
  K = `${Me} in the coordinator does not run a command with an argument built from \`$(\u2026)\`, a variable, a \`~name\` form, or a \`..\` after a directory name: it cannot be checked against this session's worker transcript and task output folders. Name the path literally.`,
  M = `${Me} in the coordinator does not run a glob wide enough to reach this session's worker transcript and task output folders. Narrow the glob, or name the directory you mean.`,
  b = new Set(["cd", "pushd", "popd", "chdir"]);

function fMn() {
  return !1
}

function _0i() {}

function SDt(e, o) {
  return ht(e, Me) && o.remoteCall === void 0 && o.agentId === void 0 && fMn()
}

function pMn(e, o, r) {
  if (e.isMcp === !0 || typeof o.command !== "string" || Object.entries(o).some(([n, s]) => !G.has(n) && s !== void 0 && s !== !1)) return E;
  try {
    let n = e.isReadOnly(o, r),
      {
        parseForSecurityFromAst: s
      } = import.meta.require("B:/~BUN/root/chunk-kak2kxkm.js"),
      {
        getParserModule: l
      } = import.meta.require("B:/~BUN/root/chunk-2v3fj2nm.js"),
      {
        SPLIT_MAX_LEN: A
      } = import.meta.require("B:/~BUN/root/chunk-p5ak2x5x.js"),
      f = o.command.length > A ? void 0 : l()?.parse(o.command),
      T = f ? s(o.command, f) : void 0,
      u = T?.kind === "simple" ? T.commands : [],
      _ = u.flatMap((i) => i.argv).filter((i) => b.has(i));
    if (n && u.length > 0 && _.length === 0) return q(u);
    let p, d = u.length > 1 ? j : u.length === 0 ? W : void 0;
    if (_.length > 0) p = Y(_, u);
    else if (!n) {
      let i = e.notReadOnlyReason?.(o, r);
      if (i?.part !== void 0) p = `The part it could not verify is \`${y(i.part)}\`: the command itself, or a flag, argument, variable prefix or redirect on it, is not on the read-only list.`;
      else if (i !== void 0) p = `Reason: ${y(i.message.replace(/\.$/,""),B)}.`;
      if (i?.everyInput === !0) d = void 0
    }
    return [E, p, d].filter((i) => i !== void 0).join(" ")
  } catch (n) {
    return t(`coordinator Bash read-only check threw ${n instanceof Error?n.name:typeof n}; refusing`, {
      level: "error"
    }), E
  }
}

function ubr(e, o, r) {
  if (r.where === "refused" || !SDt(e, o)) return r;
  if (r.where !== "here") return {
    where: "refused",
    message: E
  };
  let n = e.inputSchema.safeParse(e.coerceInput?.(r.input)?.input ?? r.input),
    s = n.success ? pMn(e, n.data, o) : null;
  return s === null ? r : {
    where: "refused",
    message: s
  }
}

function fbr(e) {
  let o = e.timeout;
  return {
    ...e,
    timeout: Math.min(typeof o === "number" && o > 0 ? o : P2(), D)
  }
}

function q(e) {
  let {
    containsAnyPlaceholder: o
  } = import.meta.require("B:/~BUN/root/chunk-kak2kxkm.js"), {
    getPathsForPermissionCheck: r
  } = import.meta.require("B:/~BUN/root/chunk-3aafm4xh.js"), {
    expandPath: n
  } = import.meta.require("B:/~BUN/root/chunk-m1xk0nte.js"), {
    normalizeCaseForComparison: s,
    pathInWorkingPath: l,
    relativePath: A
  } = import.meta.require("B:/~BUN/root/chunk-kgqbr35b.js"), {
    getGlobBaseDirectory: f,
    hasInteriorDotDot: T
  } = import.meta.require("B:/~BUN/root/chunk-er37970w.js"), {
    getSessionSubagentsDir: u
  } = import.meta.require("B:/~BUN/root/chunk-49v223pk.js"), {
    peekTaskOutputDir: _
  } = import.meta.require("B:/~BUN/root/chunk-6d6k38cz.js"), p = [u(), _()], d = kr();
  if (d.coordinatorWorkerOutputTrees?.from !== p.join("\x00")) d.coordinatorWorkerOutputTrees = {
    from: p.join("\x00"),
    spellings: p.flatMap(r)
  };
  let i = d.coordinatorWorkerOutputTrees.spellings;
  for (let O of e) {
    let P = O.argvUnquotedGlob?.length === O.argv.length ? O.argvUnquotedGlob : [],
      N = O.redirects.map((a) => [a.target, !0]);
    for (let [a, h] of O.argv.entries())
      if (a > 0 && !(h.startsWith("-") && !h.includes("="))) {
        let m = P[a] ?? !0;
        if (N.push([h, m]), h.includes("=")) N.push([h.slice(h.indexOf("=") + 1), m])
      } for (let [a, h] of N) {
      if (o(a) || /^~[^/]/.test(a) || T(a)) return K;
      let m = h ? f(a) : a,
        k = /\*\*|\{/.test(a) ? 1 / 0 : S(a) - S(m),
        x = r(n(m)),
        R = !1,
        w = !1;
      for (let g of i)
        for (let L of x) {
          if (l(L, g)) return F;
          if (m !== a && l(g, L)) {
            R = !0;
            let C = A(s(L), s(g));
            if (!C.startsWith("..")) {
              if (w = !0, k >= S(C)) return M
            }
          }
        }
      if (R && !w) return M
    }
  }
  return null
}

function Y(e, o) {
  let r = pe(),
    n = e.length === 1 ? o.find((l) => l.argv.length === 2 && l.argv[0] === "cd")?.argv[1] : void 0;
  if (n !== void 0 && v(r, n) === r) return `The \`cd ${y(n)}\` is unnecessary: ${r} is already the working directory. Run the rest without it.`;
  let s = o.map((l) => l.argv[0]).find((l) => l !== void 0 && b.has(l));
  return s !== void 0 ? `It contains \`${s}\`, and the working directory stays ${r} for the whole session: run the command with absolute paths instead of cd.` : `It contains the word \`${e[0]}\`, which is refused wherever it sits in a command, as an argument too: the working directory stays ${r} for the whole session.`
}

function y(e, o = H) {
  let r = Q(e, o);
  return r === e ? e : `${r}\u2026`
}

function S(e) {
  return U(e.split(/[\\/]/), (o) => o !== "" && o !== ".")
}
var Coe = "ExitWorktree";
var M7t = "WrapUp",
  a0i = "Offer the user a next step when a turn ends",
  l0i = `Call this before you write your closing message: it fills the next-step box that the app draws under that message, with a two-or-three-sentence recap and, when this turn leaves the user a decision to make or a step to take, one question and buttons that answer it. Without the call the app has nothing to draw.

Call it once in EVERY turn in which you changed files, ran commands or completed multi-step work, and in every turn that you are about to end with a question, a choice or a go-ahead that you need from the user, even one in which you stopped to ask before doing any work: when this turn's work is done, and before you tell the user the outcome. Otherwise skip it: short answers, pure conversation, a brief read-and-explain turn. A turn that ends in another tool's question to the user, such as a plan's approval, needs no call.

The box opens only for a question that comes with answers, so send actions with ask. A turn with nothing pending sends the recap alone, and the app then draws no box. Write recap, ask and labels in the language the user writes in.

Your closing message is ordinary text right after this call, the last thing you say this turn: your answer to the user in full, which the recap never replaces. Write none of it before this call, where it can reach the user cut to a short summary.`;

function V(e) {
  return new Set([ec, $S, ...Nji, cs, OJe, b0e, Aq, M7t, $$, FF, ...e !== "ant" ? [qu] : [], Hl, Pb, wDt, Roe, import.meta.require("B:/~BUN/root/chunk-6rkhp81q.js").CONTINUE_IN_PROJECTS_TOOL_NAME, import.meta.require("B:/~BUN/root/chunk-6rkhp81q.js").CONTINUE_IN_PROJECTS_CONTEXT_TOOL_NAME, cR, import.meta.require("B:/~BUN/root/chunk-mh92bc27.js").APPIFACT_REPL_TOOL_NAME])
}
var _Dt = V("external"),
  u0i = new Set([..._Dt]);

function X(e) {
  return new Set([ze, uf, nk, _r, Vn, Qr, ...Uf, dt, Yt, gi, $r, cl, as, hA, Coe, co, hi, HF, Fs, ya, An, ...e === "ant" ? [qu] : [], Qt, ...mSr])
}
var f0i = new Set([KXe, iDn, TL, S0e]),
  p0i = new Set([]),
  I = null;

function m0i(e, o) {
  return I !== null && e && o === I
}
var bDt = X("external"),
  h0i = new Set([f_, MZ, KP, vb, An, qf, Bv, xFe]),
  cbr = new Set([ft, ya, An, cl, $r, Pb, Ru, qu]);
var J = "subscribe_pr_activity",
  z = [J, "unsubscribe_pr_activity"],
  Kps = [Xd, "github"];

function g0i(e) {
  return z.some((o) => e.endsWith(o))
}

function y0i() {
  let [e, ...o] = Kps.map((r) => `\`${to(r)}\``);
  return `When your tool list has both a ${e} copy and a ${o.join(" or ")} copy, call the ${e} one.`
}
export {
  MZ,
  b0e,
  e0i,
  t0i,
  n0i,
  r0i,
  o0i,
  s0i,
  i0i,
  Coe,
  M7t,
  a0i,
  l0i,
  S0e,
  d0i,
  c0i,
  _Dt,
  u0i,
  f0i,
  p0i,
  m0i,
  bDt,
  h0i,
  cbr,
  Kps,
  g0i,
  y0i,
  fMn,
  _0i,
  SDt,
  pMn,
  ubr,
  fbr
};
