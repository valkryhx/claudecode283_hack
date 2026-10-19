// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.303
import "B:/~BUN/root/chunk-jthpk6wv.js";
import "B:/~BUN/root/chunk-3aez4b53.js";
import "B:/~BUN/root/chunk-89mss1tj.js";
import {
  Ja
} from "B:/~BUN/root/chunk-4bx17ygx.js";
import {
  f
} from "B:/~BUN/root/chunk-frrkt2bs.js";
import "B:/~BUN/root/chunk-9ka04m0y.js";
import "B:/~BUN/root/chunk-rwkgcmm8.js";
import "B:/~BUN/root/chunk-rpez7z7a.js";
import "B:/~BUN/root/chunk-hg8ngszx.js";
import {
  _
} from "B:/~BUN/root/chunk-6za2ez23.js";
import "B:/~BUN/root/chunk-fbyz9h0p.js";
import "B:/~BUN/root/chunk-xf0m410v.js";
import "B:/~BUN/root/chunk-nggrknsv.js";
import "B:/~BUN/root/chunk-c09hf5e4.js";
import "B:/~BUN/root/chunk-je1b1drr.js";
import "B:/~BUN/root/chunk-2zk4vqr8.js";
import "B:/~BUN/root/chunk-nvgn0qsr.js";
import "B:/~BUN/root/chunk-nxwmyxnk.js";
import "B:/~BUN/root/chunk-psh1mp8h.js";
import "B:/~BUN/root/chunk-yt0knyw7.js";
import "B:/~BUN/root/chunk-jpdys232.js";
import "B:/~BUN/root/chunk-d8fk23v1.js";
import "B:/~BUN/root/chunk-j704adqd.js";
import "B:/~BUN/root/chunk-ek28wssa.js";
import "B:/~BUN/root/chunk-4bgg5sdy.js";
import "B:/~BUN/root/chunk-rvc0n7zm.js";
import "B:/~BUN/root/chunk-wegca9zh.js";
import "B:/~BUN/root/chunk-1kfn24jp.js";
import "B:/~BUN/root/chunk-kzgf20y6.js";
import "B:/~BUN/root/chunk-xrp58hm9.js";
import "B:/~BUN/root/chunk-j8w5f307.js";
import "B:/~BUN/root/chunk-yw21pggd.js";
import "B:/~BUN/root/chunk-6ft8yhc8.js";
import "B:/~BUN/root/chunk-pjgzz98k.js";
import "B:/~BUN/root/chunk-yrjpmz6e.js";
import "B:/~BUN/root/chunk-d9rmnpx3.js";
import {
  M7t,
  FZ
} from "B:/~BUN/root/chunk-fvn1tqbf.js";
import "B:/~BUN/root/chunk-k9zm82w3.js";
import "B:/~BUN/root/chunk-fsp20me0.js";
import "B:/~BUN/root/chunk-0p1hpv0s.js";
import {
  o,
  T,
  De
} from "B:/~BUN/root/chunk-g3snhg6n.js";
import "B:/~BUN/root/chunk-3rzwkd15.js";
import "B:/~BUN/root/chunk-bp5d1azq.js";
import "B:/~BUN/root/chunk-eya7pdzx.js";
import {
  isAbsolute as m,
  normalize as p
} from "path";
var c = () => o().min(1).max(4096).refine((t) => !t.includes("\x00") && m(t) && !Ja(t), "must be an absolute local path, not a network or automount path (such as \\\\server\\share, //server/share or /net/host), with no NUL character"),
  k = f(() => De({
    repoRoot: c(),
    worktreePaths: T(c()).min(1).max(4)
  }));
async function D(t) {
  let e = k().safeParse(t);
  if (!e.success) {
    let r = e.error.issues[0];
    return {
      ok: !1,
      error: r ? `Not a worktree registration request (${r.path.map(String).join(".")||"request"}: ${r.message}).` : "Not a worktree registration request."
    }
  }
  let {
    worktreePaths: n
  } = e.data, s = p(e.data.repoRoot), a = await M7t(s);
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
    let i = await FZ(a, {
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
