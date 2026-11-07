// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  Hae
} from "B:/~BUN/root/chunk-game8aqv.js";
import {
  R,
  k,
  tr
} from "B:/~BUN/root/chunk-y2g9f85n.js";
import {
  m
} from "B:/~BUN/root/chunk-3z3yrbk4.js";
import {
  V
} from "B:/~BUN/root/chunk-f9dwrymq.js";
import {
  ro,
  u0
} from "B:/~BUN/root/chunk-nsneqfcc.js";
import {
  randomUUID as D
} from "crypto";
import {
  constants as p
} from "fs";
import {
  lstat as H,
  mkdir as u,
  open as c,
  readlink as I,
  realpath as L,
  rename as b,
  rmdir as y,
  stat as O
} from "fs/promises";
import {
  basename as w,
  dirname as g,
  join as h
} from "path";
var f = u0 | p.O_DIRECTORY | p.O_NOFOLLOW | ro;

function s(n) {
  return `/proc/self/fd/${n.fd}`
}
async function E(n) {
  return (await n.stat()).uid === process.getuid?.()
}
async function R8(n, r) {
  return "not_linux"
}
async function gci(n, r) {
  throw Error("a directory can be held only on Linux")
}
async function e3e(n) {
  let r = h(n.at, `.probe-${D()}`),
    o = `${r}-moved`,
    e;
  try {
    await u(r, {
      mode: 448
    }), e = await c(r, f), await b(r, o);
    let t = await I(s(e)).catch(() => ""),
      a = await O(s(e)).catch(() => {
        return
      });
    return w(t) === w(o) && a?.ino === (await e.stat()).ino || "holds_do_not_follow"
  } catch (t) {
    return tr(t) ?? "unknown"
  } finally {
    await e?.close(), await Promise.allSettled([y(r), y(o)])
  }
}
async function dIe(n) {
  let r = Hae();
  if (r === null || g(n) !== r) return await u(n, {
    recursive: !0,
    mode: 448
  }), {
    at: n,
    release: async () => {}
  };
  let o = await R8(n, 2);
  if (typeof o === "string") throw V("warn", "attachments_in_user_data", {
    state: "write_refused",
    reason: o
  }), m("bridge_attachment_user_data_root", o), new R(`nothing was saved: the attachments folder cannot be used (${o})`, "nothing was saved: the attachments folder cannot be used");
  return o
}
export {
  R8,
  gci,
  e3e,
  dIe
};
