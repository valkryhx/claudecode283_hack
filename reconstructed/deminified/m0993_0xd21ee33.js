// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { xae, uOt, AV, ZA, UT, ZBn, L3, y4e } from "B:/~BUN/root/chunk-1mdeqc2r.js";
import { lstat as o } from "fs/promises";
import { join as s } from "path";
var jwt = 1e5,
  _Oe = 104857600;
function TU(e) {
  return xae(e) && !e.includes("\\") && !(AV() && ZA(e)) && !ZBn(e) && !uOt(e);
}
async function rto(e, path) {
  try {
    let i = await o(s(e, path), {
      bigint: !0
    });
    return {
      path: path,
      identity: i.ino === 0n ? null : `${i.dev}:${i.ino}`
    };
  } catch {
    return {
      path: path,
      identity: null
    };
  }
}
function oto(e) {
  let t = e.flatMap(({
      path: path_2,
      identity: identity
    }) => identity === null ? [] : [{
      path: path_2,
      key: `${UT(path_2)}\x00${identity}`
    }]),
    i = t.reduce((acc, {
      key: key
    }) => acc.set(key, (acc.get(key) ?? 0) + 1), new Map());
  return new Set(t.filter(({
    key: key_2
  }) => (i.get(key_2) ?? 0) > 1).map(({
    path: path_3
  }) => path_3));
}
function sto(e) {
  return e.split("\x00").filter(item => item.length > 2 && item[1] === " ").map(item => ({
    tag: item[0] ?? "",
    path: item.slice(2)
  }));
}
async function j5(e, t, i, n = null) {
  let r = await L3(e, t, i, n);
  return r.kind === "read" ? {
    ...y4e(r.content),
    content: r.content,
    mode: r.mode
  } : null;
}
export { jwt, _Oe, TU, rto, oto, sto, j5 };