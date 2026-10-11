// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { v } from "B:/~BUN/root/chunk-bgthmgyc.js";
import { d } from "B:/~BUN/root/chunk-zs3ycjed.js";
import { gde, W8e } from "B:/~BUN/root/chunk-339q6g5w.js";
import { rn, vR, wF } from "B:/~BUN/root/chunk-1mdeqc2r.js";
import { EU, Sn, ppe } from "B:/~BUN/root/chunk-r6beatp9.js";
import { lstat as p, realpath as u, rm as m } from "fs/promises";
import { basename as _, dirname as P, isAbsolute as y, join as a } from "path";
var l = /^[A-Za-z0-9][A-Za-z0-9_-]{0,127}$/,
  R = /^[a-z][a-z0-9-]{0,31}(?:\/[a-z0-9][a-z0-9_-]{0,63})?$/;
function Y4t(t) {
  return a(t, gde, W8e);
}
function pl(t, r) {
  let e = `${vR}${t}/${r}`;
  return l.test(t) && R.test(r) && wF(e) ? e : null;
}
var f = "receiving";
function qir(t, r) {
  let e = `${vR}${f}/${t}/${String(r)}`;
  return l.test(t) && Number.isSafeInteger(r) && r >= 0 && wF(e) ? e : null;
}
async function dpe(t, r) {
  if (!l.test(r)) return null;
  return c(t, `${vR}${r}/`);
}
async function c(t, r) {
  let e = await Sn(t, ["for-each-ref", "--format=%(objectname) %(refname)", r]);
  if (e.exitCode !== 0) return null;
  let o = e.stdout.split(`
`).filter(item => item !== "").map(item => {
    let [id = "", name = ""] = item.split(" ");
    return {
      name: name,
      id: id
    };
  }).filter(item => item.name.startsWith(r) && wF(item.name));
  return o.every(item => rn.test(item.id)) ? o : null;
}
async function Kir(t, r) {
  let e = await dpe(t, r),
    o = e === null ? null : await c(t, `${vR}${f}/${r}/`);
  if (e === null || o === null || !(await ppe(t, [...e, ...o].map(item => item.name)))) return !1;
  let i = a(t.gitDir, ...vR.split("/"), r);
  try {
    let [n, s] = await Promise.all([u(i), u(t.gitDir)]);
    if (n !== a(s, ...vR.split("/"), r)) return !1;
    return await m(n, {
      recursive: !0,
      force: !0
    }), !0;
  } catch (error) {
    return v(error) === "ENOENT";
  }
}
async function Twt(gitDir, sessionRoot, e, timeoutMs = EU) {
  await Kir({
    gitDir: gitDir,
    sessionRoot: sessionRoot,
    timeoutMs: timeoutMs
  }, e).catch(d);
}
export { Y4t, pl, qir, dpe, Kir, Twt };