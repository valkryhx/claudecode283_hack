// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { ff } from "B:/~BUN/root/chunk-7qeqkjr8.js";
import { Hp } from "B:/~BUN/root/chunk-yt0knyw7.js";
import { Hin, M3 } from "B:/~BUN/root/chunk-asrchj7k.js";
import { _h } from "B:/~BUN/root/chunk-kad4nq7y.js";
import { ve } from "B:/~BUN/root/chunk-ef0msk7r.js";
var o = ve(_h(), 1);
import { readdir as c, stat as p } from "fs/promises";
import { join as a, sep as f } from "path";
function U9() {
  if (!Hp()) return !1;
  let r = Hin() + f;
  return process.execPath.startsWith(r);
}
function Bc(r = {}) {
  return B6(mUe(r));
}
function mUe(r = {}) {
  if (!r.pinToCurrentBinary && U9()) {
    let t = $3e();
    return {
      cmd: t,
      prefixArgs: [],
      target: t
    };
  }
  if (Hp()) return {
    cmd: process.execPath,
    prefixArgs: [],
    target: process.execPath
  };
  let target = process.argv[1];
  if (!target) return {
    cmd: process.execPath,
    prefixArgs: [],
    target: process.execPath
  };
  return {
    cmd: process.execPath,
    prefixArgs: [target],
    target: target
  };
}
function $3e() {
  return a(M3(), "claude.exe");
}
function B6(r) {
  let e = ff();
  if (e.length === 0 || r.cmd === e[0]) return r;
  return {
    cmd: e[0],
    prefixArgs: [...e.slice(1), r.cmd, ...r.prefixArgs],
    target: r.target
  };
}
async function sMt() {
  let r = Hin(),
    e;
  try {
    e = await c(r);
  } catch {
    return null;
  }
  let t = e.filter(item => !/\.tmp\.\d+\.\d+(\.\d+)?$/.test(item) && o.valid(item)).sort(o.rcompare);
  for (let n of t) {
    let i = a(r, n);
    try {
      let s = await p(i);
      if (s.isFile() && s.size > 0) return i;
    } catch {}
  }
  return null;
}
export { U9, Bc, mUe, $3e, B6, sMt };