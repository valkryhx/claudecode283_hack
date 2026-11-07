// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  am
} from "B:/~BUN/root/chunk-ht2sp6s6.js";
import {
  _Ne,
  Mee
} from "B:/~BUN/root/chunk-xdzcgcjh.js";
import {
  nb
} from "B:/~BUN/root/chunk-1s0yt4vj.js";
import {
  Of
} from "B:/~BUN/root/chunk-bvb659eh.js";
import {
  Oe
} from "B:/~BUN/root/chunk-4qfwb3rf.js";
var o = Oe(nb(), 1);
import {
  readdir as c,
  stat as p
} from "fs/promises";
import {
  join as a,
  sep as f
} from "path";

function Noe() {
  if (!Of()) return !1;
  let r = _Ne() + f;
  return process.execPath.startsWith(r)
}

function zc(r = {}) {
  return g1(r_e(r))
}

function r_e(r = {}) {
  if (!r.pinToCurrentBinary && Noe()) {
    let t = I0e();
    return {
      cmd: t,
      prefixArgs: [],
      target: t
    }
  }
  if (Of()) return {
    cmd: process.execPath,
    prefixArgs: [],
    target: process.execPath
  };
  let e = process.argv[1];
  if (!e) return {
    cmd: process.execPath,
    prefixArgs: [],
    target: process.execPath
  };
  return {
    cmd: process.execPath,
    prefixArgs: [e],
    target: e
  }
}

function I0e() {
  return a(Mee(), "claude.exe")
}

function g1(r) {
  let e = am();
  if (e.length === 0 || r.cmd === e[0]) return r;
  return {
    cmd: e[0],
    prefixArgs: [...e.slice(1), r.cmd, ...r.prefixArgs],
    target: r.target
  }
}
async function _Qt() {
  let r = _Ne(),
    e;
  try {
    e = await c(r)
  } catch {
    return null
  }
  let t = e.filter((n) => !/\.tmp\.\d+\.\d+(\.\d+)?$/.test(n) && o.valid(n)).sort(o.rcompare);
  for (let n of t) {
    let i = a(r, n);
    try {
      let s = await p(i);
      if (s.isFile() && s.size > 0) return i
    } catch {}
  }
  return null
}
export {
  Noe,
  zc,
  r_e,
  I0e,
  g1,
  _Qt
};
