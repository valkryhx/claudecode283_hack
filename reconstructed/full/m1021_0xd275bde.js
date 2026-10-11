// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.283
import {
  rn,
  uge
} from "B:/~BUN/root/chunk-1mdeqc2r.js";
import {
  rze
} from "B:/~BUN/root/chunk-fj96ftrb.js";
import {
  Sn
} from "B:/~BUN/root/chunk-r6beatp9.js";
var vwt = {
    name: "Claude Code directory sync",
    email: "noreply@anthropic.com"
  },
  f = [vwt, {
    name: uge.GIT_AUTHOR_NAME,
    email: uge.GIT_AUTHOR_EMAIL
  }, rze];

function r(o, e) {
  return f.some((t) => t.name === o && t.email === e)
}
async function s(o, e) {
  let t = await Sn(o, ["rev-list", "--format=%H%x00%an%x00%ae%x00%cn%x00%ce", ...e]);
  if (t.exitCode !== 0) return;
  let i = t.stdout.split(`
`).filter((n) => n.includes("\x00")).map((n) => n.split("\x00"));
  if (!i.every((n) => n.length === 5 && rn.test(n[0]))) return;
  return i.filter(([, n = "", u = "", a = "", d = ""]) => r(n, u) || r(a, d)).map(([n = ""]) => n)
}
async function W4t(o, e, t) {
  if (![e, t].every((n) => rn.test(n))) return;
  let i = await s(o, ["--end-of-options", t, `^${e}`]);
  return i === void 0 ? void 0 : i[0] ?? null
}
async function heo(o, e) {
  if (e.length === 0) return 0;
  if (!e.every((i) => rn.test(i))) return;
  return (await s(o, ["--no-walk", "--end-of-options", ...e]))?.length
}
export {
  vwt,
  W4t,
  heo
};
