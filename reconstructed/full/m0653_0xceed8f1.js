// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.283
import {
  we
} from "B:/~BUN/root/chunk-4rk7cwxz.js";
import {
  xn
} from "B:/~BUN/root/chunk-54p0h65d.js";
import {
  Ee,
  le
} from "B:/~BUN/root/chunk-gf53qpk6.js";
import {
  t
} from "B:/~BUN/root/chunk-qe2zga5e.js";
import {
  Od
} from "B:/~BUN/root/chunk-8hs4bwwk.js";
import {
  HUe,
  Fn
} from "B:/~BUN/root/chunk-339q6g5w.js";
import {
  PUe,
  OUe
} from "B:/~BUN/root/chunk-fct6vke8.js";
import {
  realpath as u
} from "fs/promises";
async function a4r(e) {
  try {
    let o = await PUe();
    if (!o) {
      t("Not in a GitHub repository, skipping path mapping update");
      return
    }
    let r = we(),
      s = Fn(r) ?? r,
      i;
    try {
      i = xn(await u(s))
    } catch {
      i = s
    }
    let n = o.toLowerCase(),
      p = le().githubRepoPaths?.[n] ?? [];
    if (p[0] === i) {
      t(`Path ${i} already tracked for repo ${n}`);
      return
    }
    let f = p.filter((c) => c !== i),
      h = [i, ...f];
    await Ee((c) => ({
      ...c,
      githubRepoPaths: {
        ...c.githubRepoPaths,
        [n]: h
      }
    }), e), t(`Added ${i} to tracked paths for repo ${n}`)
  } catch (o) {
    t(`Error updating repo path mapping: ${o}`)
  }
}

function oWt(e) {
  let o = le(),
    r = e.toLowerCase();
  return o.githubRepoPaths?.[r] ?? []
}
async function sWt(e) {
  let o = await Promise.all(e.map(Od));
  return e.filter((r, a) => o[a])
}
async function V9n(e, o) {
  try {
    let r = await HUe(e);
    if (!r) return !1;
    let a = OUe(r);
    if (!a) return !1;
    return a.toLowerCase() === o.toLowerCase()
  } catch {
    return !1
  }
}

function q9n(e, o, r) {
  let a = le(),
    s = e.toLowerCase(),
    i = a.githubRepoPaths?.[s] ?? [],
    n = i.filter((p) => p !== o);
  if (n.length === i.length) return;
  let g = {
    ...a.githubRepoPaths
  };
  if (n.length === 0) delete g[s];
  else g[s] = n;
  Ee((p) => ({
    ...p,
    githubRepoPaths: g
  }), r), t(`Removed ${o} from tracked paths for repo ${s}`)
}
export {
  a4r,
  oWt,
  sWt,
  V9n,
  q9n
};
