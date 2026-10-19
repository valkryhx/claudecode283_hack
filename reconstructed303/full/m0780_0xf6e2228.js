// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.303
import {
  ke
} from "B:/~BUN/root/chunk-rpez7z7a.js";
import {
  $n
} from "B:/~BUN/root/chunk-4bx17ygx.js";
import {
  Ce,
  ue
} from "B:/~BUN/root/chunk-hb6x4e3n.js";
import {
  t
} from "B:/~BUN/root/chunk-6za2ez23.js";
import {
  Zc
} from "B:/~BUN/root/chunk-xrp58hm9.js";
import {
  bTe,
  yr
} from "B:/~BUN/root/chunk-2zk4vqr8.js";
import {
  W7e,
  G7e
} from "B:/~BUN/root/chunk-m94tqsvv.js";
import {
  realpath as u
} from "fs/promises";
async function OKo(r) {
  try {
    let o = await W7e();
    if (!o) {
      t("Not in a GitHub repository, skipping path mapping update");
      return
    }
    let e = ke(),
      s = yr(e) ?? e,
      i;
    try {
      i = $n(await u(s))
    } catch {
      i = s
    }
    let a = o.toLowerCase(),
      p = ue().githubRepoPaths?.[a] ?? [];
    if (p[0] === i) {
      t(`Path ${i} already tracked for repo ${a}`);
      return
    }
    let f = p.filter((c) => c !== i),
      h = [i, ...f];
    await Ce((c) => ({
      ...c,
      githubRepoPaths: {
        ...c.githubRepoPaths,
        [a]: h
      }
    }), r), t(`Added ${i} to tracked paths for repo ${a}`)
  } catch (o) {
    t(`Error updating repo path mapping: ${o}`)
  }
}

function Xhn(r) {
  let o = ue(),
    e = r.toLowerCase();
  return o.githubRepoPaths?.[e] ?? []
}
async function Jhn(r) {
  let o = await Promise.all(r.map(Zc));
  return r.filter((e, n) => o[n])
}
async function nzr(r, o) {
  try {
    let e = await bTe(r);
    if (!e) return !1;
    let n = G7e(e);
    if (!n) return !1;
    return n.toLowerCase() === o.toLowerCase()
  } catch {
    return !1
  }
}

function rzr(r, o, e) {
  let n = ue(),
    s = r.toLowerCase(),
    i = n.githubRepoPaths?.[s] ?? [],
    a = i.filter((p) => p !== o);
  if (a.length === i.length) return;
  let g = {
    ...n.githubRepoPaths
  };
  if (a.length === 0) delete g[s];
  else g[s] = a;
  Ce((p) => ({
    ...p,
    githubRepoPaths: g
  }), e), t(`Removed ${o} from tracked paths for repo ${s}`)
}
export {
  OKo,
  Xhn,
  Jhn,
  nzr,
  rzr
};
