// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import "B:/~BUN/root/chunk-wt4dg253.js";
import "B:/~BUN/root/chunk-drx9cnw1.js";
import "B:/~BUN/root/chunk-y2g9f85n.js";
import "B:/~BUN/root/chunk-r5zmhp23.js";
import {
  Sl
} from "B:/~BUN/root/chunk-h4acfc9y.js";
import {
  p
} from "B:/~BUN/root/chunk-z6138ats.js";
import "B:/~BUN/root/chunk-vz9zea4j.js";
import "B:/~BUN/root/chunk-q78ga0zw.js";
import "B:/~BUN/root/chunk-db8vh085.js";
import "B:/~BUN/root/chunk-game8aqv.js";
import "B:/~BUN/root/chunk-ppmmt0c3.js";
import {
  _
} from "B:/~BUN/root/chunk-2pp12te6.js";
import "B:/~BUN/root/chunk-dayhhbfr.js";
import "B:/~BUN/root/chunk-eev762xg.js";
import "B:/~BUN/root/chunk-15vbkr6z.js";
import "B:/~BUN/root/chunk-n8cnxns2.js";
import "B:/~BUN/root/chunk-09sn55yf.js";
import "B:/~BUN/root/chunk-jdtvghyw.js";
import "B:/~BUN/root/chunk-xrwdh0g4.js";
import "B:/~BUN/root/chunk-mwfggkjt.js";
import "B:/~BUN/root/chunk-1g25msn4.js";
import "B:/~BUN/root/chunk-1w2vha2y.js";
import "B:/~BUN/root/chunk-thn0wk2x.js";
import "B:/~BUN/root/chunk-kjwczfsg.js";
import "B:/~BUN/root/chunk-j6pt0v41.js";
import "B:/~BUN/root/chunk-y1kkrqy9.js";
import "B:/~BUN/root/chunk-4jt3t3ds.js";
import "B:/~BUN/root/chunk-83p1z1q5.js";
import "B:/~BUN/root/chunk-d10hhz4p.js";
import "B:/~BUN/root/chunk-0w2htvr6.js";
import "B:/~BUN/root/chunk-t4qpmjt5.js";
import "B:/~BUN/root/chunk-nsneqfcc.js";
import "B:/~BUN/root/chunk-x1xft50h.js";
import "B:/~BUN/root/chunk-mb9chr1y.js";
import "B:/~BUN/root/chunk-3z3yrbk4.js";
import "B:/~BUN/root/chunk-5xx1vfdh.js";
import "B:/~BUN/root/chunk-gq1er5y2.js";
import "B:/~BUN/root/chunk-88zb3509.js";
import "B:/~BUN/root/chunk-3mm90xb6.js";
import "B:/~BUN/root/chunk-bkfncj77.js";
import "B:/~BUN/root/chunk-f9dwrymq.js";
import "B:/~BUN/root/chunk-65j2302z.js";
import "B:/~BUN/root/chunk-9jpwd6f1.js";
import "B:/~BUN/root/chunk-myfamxtp.js";
import "B:/~BUN/root/chunk-rr294jrm.js";
import "B:/~BUN/root/chunk-46ahshhq.js";
import {
  RPn,
  Zde
} from "B:/~BUN/root/chunk-rbfkfjk4.js";
import {
  o,
  C,
  He
} from "B:/~BUN/root/chunk-4bfd0jkf.js";
import "B:/~BUN/root/chunk-x3gsqe09.js";
import "B:/~BUN/root/chunk-4hj5k2m3.js";
import "B:/~BUN/root/chunk-12nc74pv.js";
import "B:/~BUN/root/chunk-9wbhv9z5.js";
import {
  isAbsolute as m,
  normalize as k
} from "path";
var c = () => o().min(1).max(4096).refine((t) => !t.includes("\x00") && m(t) && !Sl(t), "must be an absolute local path, not a network or automount path (such as \\\\server\\share, //server/share or /net/host), with no NUL character"),
  g = p(() => He({
    repoRoot: c(),
    worktreePaths: C(c()).min(1).max(4)
  }));
async function D(t) {
  let e = g().safeParse(t);
  if (!e.success) {
    let r = e.error.issues[0];
    return {
      ok: !1,
      error: r ? `Not a worktree registration request (${r.path.map(String).join(".")||"request"}: ${r.message}).` : "Not a worktree registration request."
    }
  }
  let {
    worktreePaths: n
  } = e.data, s = k(e.data.repoRoot), a = await RPn(s);
  if (a === null) {
    let r = `the repository at ${s} could not be vetted`;
    return {
      ok: !0,
      outcomes: n.map(() => ({
        outcome: "kept",
        reason: r
      }))
    }
  }
  let u = [];
  for (let r of n) {
    let i = await Zde(a, {
      worktreePath: r,
      repoSpelled: s
    }, {
      locked: "keep"
    });
    u.push(i.outcome === "kept" ? {
      outcome: "kept",
      reason: i.reason
    } : {
      outcome: i.outcome
    })
  }
  return {
    ok: !0,
    outcomes: u
  }
}

function y(t) {
  return _({
    ok: !0,
    outcomes: t
  })
}
export {
  y as registrationDropsLine, D as runWorktreeRegistrationDrops
};
