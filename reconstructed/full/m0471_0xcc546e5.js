// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.283
import {
  q$,
  Ujt
} from "B:/~BUN/root/chunk-54p0h65d.js";
import {
  lstat as c,
  open as f,
  readlink as u,
  realpath as p,
  stat as S
} from "fs/promises";

function Bur(n, r = "win32") {
  return Ujt(n) || q$(n, r)
}
async function e0e(n, r, o) {
  let i = r + 1,
    e = Buffer.alloc(o === void 0 ? i : Math.min(Math.max(Number(o) + 1, 1), i)),
    t = 0;
  while (t < i) {
    if (t === e.length) {
      let s = Buffer.alloc(i);
      e.copy(s), e = s
    }
    let {
      bytesRead: a
    } = await n.read(e, t, e.length - t, t);
    if (a === 0) break;
    t += a
  }
  return {
    bytes: e.subarray(0, Math.min(t, r)),
    overLimit: t > r
  }
}
var h = {
  realpath: p,
  lstat: c,
  readlink: u
};
async function Ukt(n, r, o, i = h) {
  let e;
  try {
    e = await i.lstat(o, {
      bigint: !0
    })
  } catch {
    return
  }
  if (e.dev !== r.dev || e.ino !== r.ino) return;
  try {
    if (await i.realpath(o) !== o) return
  } catch {
    return
  }
  return o
}
async function jur(n) {
  return f(n, "r")
}
export {
  Bur,
  e0e,
  Ukt,
  jur
};
