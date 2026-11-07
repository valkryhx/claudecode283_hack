// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  Ee
} from "B:/~BUN/root/chunk-game8aqv.js";
import {
  En
} from "B:/~BUN/root/chunk-h4acfc9y.js";
import {
  Le,
  fe
} from "B:/~BUN/root/chunk-1ks9vs37.js";
import {
  t
} from "B:/~BUN/root/chunk-2pp12te6.js";
import {
  gf
} from "B:/~BUN/root/chunk-5xx1vfdh.js";
import {
  Jpe,
  fr
} from "B:/~BUN/root/chunk-1g25msn4.js";
import {
  t2n,
  FHe
} from "B:/~BUN/root/chunk-1x03q1j7.js";
import {
  realpath as u
} from "fs/promises";
async function c3s(r) {
  try {
    let o = await t2n();
    if (!o) {
      t("Not in a GitHub repository, skipping path mapping update");
      return
    }
    let e = Ee(),
      s = fr(e) ?? e,
      i;
    try {
      i = En(await u(s))
    } catch {
      i = s
    }
    let a = o.toLowerCase(),
      p = fe().githubRepoPaths?.[a] ?? [];
    if (p[0] === i) {
      t(`Path ${i} already tracked for repo ${a}`);
      return
    }
    let f = p.filter((c) => c !== i),
      h = [i, ...f];
    await Le((c) => ({
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

function y6n(r) {
  let o = fe(),
    e = r.toLowerCase();
  return o.githubRepoPaths?.[e] ?? []
}
async function _6n(r) {
  let o = await Promise.all(r.map(gf));
  return r.filter((e, n) => o[n])
}
async function HLo(r, o) {
  try {
    let e = await Jpe(r);
    if (!e) return !1;
    let n = FHe(e);
    if (!n) return !1;
    return n.toLowerCase() === o.toLowerCase()
  } catch {
    return !1
  }
}

function $Lo(r, o, e) {
  let n = fe(),
    s = r.toLowerCase(),
    i = n.githubRepoPaths?.[s] ?? [],
    a = i.filter((p) => p !== o);
  if (a.length === i.length) return;
  let g = {
    ...n.githubRepoPaths
  };
  if (a.length === 0) delete g[s];
  else g[s] = a;
  Le((p) => ({
    ...p,
    githubRepoPaths: g
  }), e), t(`Removed ${o} from tracked paths for repo ${s}`)
}
export {
  c3s,
  y6n,
  _6n,
  HLo,
  $Lo
};
