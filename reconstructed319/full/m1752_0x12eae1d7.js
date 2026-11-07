// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  J
} from "B:/~BUN/root/chunk-r5zmhp23.js";
import {
  _
} from "B:/~BUN/root/chunk-2pp12te6.js";
import {
  Ey
} from "B:/~BUN/root/chunk-n8cnxns2.js";
import {
  Ljt,
  _s,
  ew
} from "B:/~BUN/root/chunk-jdtvghyw.js";
import {
  p
} from "B:/~BUN/root/chunk-z6138ats.js";
import {
  T_,
  IHe,
  Et
} from "B:/~BUN/root/chunk-2f1svh63.js";
import {
  ys
} from "B:/~BUN/root/chunk-88zb3509.js";
import {
  lt
} from "B:/~BUN/root/chunk-3mm90xb6.js";
import {
  zn
} from "B:/~BUN/root/chunk-nsneqfcc.js";
import {
  et
} from "B:/~BUN/root/chunk-fkr27nhj.js";
import {
  HCn
} from "B:/~BUN/root/chunk-27h4st9h.js";
import {
  HWe
} from "B:/~BUN/root/chunk-cxcakgnv.js";
import {
  zc
} from "B:/~BUN/root/chunk-wt8tyqt4.js";
import {
  o,
  E,
  C,
  u
} from "B:/~BUN/root/chunk-4bfd0jkf.js";
import {
  Zn
} from "B:/~BUN/root/chunk-12nc74pv.js";
import {
  readFile as q
} from "fs/promises";
var S = 1e5,
  P = /[^\s'"`<>]+/g,
  W = new RegExp(`(?![\\n\\t\\u200c\\u200d\\ufe0f])[\\p{Cc}\\p{Cf}${Ljt}]`, "gu"),
  iqs = 1,
  M = p(() => {
    let t = o().transform(F).optional().catch(void 0),
      e = E().optional().catch(void 0);
    return C(u({
      file_path: t,
      start_line: e,
      end_line: e,
      severity: t,
      pr_comment: t,
      reasoning: t
    }))
  });

function rkt(t, e) {
  let i = t.slice(0, S);
  return Et(Lqn(t.length <= S ? t : i.slice(0, Math.max(i.lastIndexOf(" "), i.lastIndexOf(`
`)) + 1)), e)
}

function Lqn(t) {
  return y(T_(y(t)))
}

function T(t) {
  return M().safeParse(et(t, !1)).data ?? null
}

function iMo(t, e) {
  return zn(t, `${_(e,null,2)}
`, 384)
}

function F(t) {
  return IHe(Ey(t)).replace(/\r\n?|[\x85\u2028\u2029]/g, `
`).replace(W, "")
}

function y(t) {
  return _s(ew(t).replace(P, z)).replaceAll("://[REDACTED]@", "://")
}

function z(t) {
  let e = t.replace(/^\/\//, ""),
    i = /^\\|(?:^|\W)[A-Za-z]:\\/.test(e) ? e.indexOf("\\") : e.indexOf("/"),
    r = i === -1 ? e : e.slice(0, i),
    a = Math.max(r.lastIndexOf("@"), [...r.matchAll(/%(?:25)*40/g)].at(-1)?.index ?? -1),
    c = [...r.slice(0, Math.max(a, 0)).matchAll(/:|%(?:25)*3a/gi)].at(-1)?.index ?? -1;
  return c === -1 || r[c + 1] === "@" || /\bmailto$/i.test(r.slice(0, c)) || r.startsWith("@sha256:", a) ? t : `\u2026${e.slice(a)}`
}
var H = 10,
  V = 67108864,
  b = 500,
  k = 2000,
  aMo = "This command stopped waiting.",
  lMo = "Ultrareview could not launch:",
  dMo = "The local process for this review ended without saying why. If the review had already launched, it will be billed.";
async function aqs(t, e, i, r, a) {
  let {
    cmd: c,
    prefixArgs: L
  } = zc({
    pinToCurrentBinary: !0
  }), x = HWe(), N = Date.now(), A = lt(c, [...L, "ultrareview", e, "--trust-workspace", "--json", "--timeout", String(x)], {
    cwd: t,
    env: {
      ...ys(void 0, {
        userLocale: !0
      }),
      CLAUDE_CODE_ULTRAREVIEW_LAUNCH_RECORD: i
    },
    abortSignal: r,
    timeout: (x + H) * 60 * 1000,
    preserveOutputOnError: !0,
    maxBuffer: V,
    stdin: "ignore",
    toolCgroupClass: "agent",
    waitForExitAfterKill: !0
  }), h = new AbortController;
  A.finally(() => h.abort());
  let n = null,
    v = !1;
  while (n === null && !v)
    if (v = h.signal.aborted, n = rkt(await q(i, "utf8").catch(() => "")) || null, n === null && !v) await J(k, h.signal);
  if (n !== null) a(n);
  let {
    stdout: R,
    stderr: D,
    exitCode: f,
    timedOut: U
  } = await A, I = T(R);
  if (I !== null) return {
    session_id: n,
    minutes: Math.round((Date.now() - N) / 60000),
    findings: I,
    outcome: "reviewed",
    outcome_detail: ""
  };
  let d = n === null ? " If the review had already launched, it will be billed." : ` The review may still be running in the cloud, and it is billed. Its session id, for tracing it or its bill, is ${n}.`,
    s = {
      session_id: n,
      minutes: null,
      findings: []
    };
  if (r.aborted) return {
    ...s,
    outcome: "pending",
    outcome_detail: `The run was stopped.${d}`
  };
  if (U) return {
    ...s,
    outcome: "timed_out",
    outcome_detail: `No result came in time.${d}`
  };
  let O = Zn(D).trimEnd().split(`
`),
    g = O.slice(O.findLastIndex((l) => l.startsWith("Ultrareview ")));
  if (g.some((l) => l.startsWith(aMo))) return {
    ...s,
    outcome: "timed_out",
    outcome_detail: `${rkt(g[0]??"",b).replace(/\.$/,"")}.${d}`
  };
  let w = HCn(R)?.error,
    m = rkt(w ?? g.join(" "), b);
  if (n !== null || w !== void 0) {
    let l = m !== "" && (w !== void 0 || f !== void 0 && f <= 128);
    return {
      ...s,
      outcome: l || n === null ? "failed" : "timed_out",
      outcome_detail: l ? m : `The local process for this review ended without saying why.${d}`
    }
  }
  return f !== void 0 && g[0]?.startsWith(lMo) ? {
    ...s,
    outcome: "not_started",
    outcome_detail: m
  } : {
    ...s,
    outcome: "failed",
    outcome_detail: f !== void 0 && m !== "" ? `${m.replace(/\.$/,"")}.${d}` : dMo
  }
}
export {
  iqs,
  rkt,
  Lqn,
  iMo,
  aMo,
  lMo,
  dMo,
  aqs
};
