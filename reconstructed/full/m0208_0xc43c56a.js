// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.283
import {
  Yd
} from "B:/~BUN/root/chunk-nkmmqnq7.js";
import {
  au
} from "B:/~BUN/root/chunk-y00rw36h.js";
import {
  OLt,
  Fz
} from "B:/~BUN/root/chunk-dqm1wqrw.js";
import {
  ih
} from "B:/~BUN/root/chunk-bt3h0syz.js";
import {
  be
} from "B:/~BUN/root/chunk-yv67t8hr.js";
var o = be(ih(), 1);
import {
  readdir as c,
  stat as p
} from "fs/promises";
import {
  join as a,
  sep as f
} from "path";

function Jat() {
  if (!Yd()) return !1;
  let r = OLt() + f;
  return process.execPath.startsWith(r)
}

function Hu(r = {}) {
  return yz(TTe(r))
}

function TTe(r = {}) {
  if (!r.pinToCurrentBinary && Jat()) {
    let t = jNe();
    return {
      cmd: t,
      prefixArgs: [],
      target: t
    }
  }
  if (Yd()) return {
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

function jNe() {
  return a(Fz(), "claude.exe")
}

function yz(r) {
  let e = au();
  if (e.length === 0 || r.cmd === e[0]) return r;
  return {
    cmd: e[0],
    prefixArgs: [...e.slice(1), r.cmd, ...r.prefixArgs],
    target: r.target
  }
}
async function Qat() {
  let r = OLt(),
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
  Jat,
  Hu,
  TTe,
  jNe,
  yz,
  Qat
};
