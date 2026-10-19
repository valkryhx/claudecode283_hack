// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import "B:/~BUN/root/chunk-jthpk6wv.js";
import { k } from "B:/~BUN/root/chunk-3aez4b53.js";
import "B:/~BUN/root/chunk-rwkgcmm8.js";
import "B:/~BUN/root/chunk-9ka04m0y.js";
import "B:/~BUN/root/chunk-rpez7z7a.js";
import "B:/~BUN/root/chunk-hg8ngszx.js";
import "B:/~BUN/root/chunk-89mss1tj.js";
import "B:/~BUN/root/chunk-4bx17ygx.js";
import { Vhe } from "B:/~BUN/root/chunk-6za2ez23.js";
import "B:/~BUN/root/chunk-fbyz9h0p.js";
import "B:/~BUN/root/chunk-xf0m410v.js";
import "B:/~BUN/root/chunk-nggrknsv.js";
import "B:/~BUN/root/chunk-psh1mp8h.js";
import "B:/~BUN/root/chunk-yt0knyw7.js";
import "B:/~BUN/root/chunk-jpdys232.js";
import "B:/~BUN/root/chunk-c09hf5e4.js";
import "B:/~BUN/root/chunk-je1b1drr.js";
import "B:/~BUN/root/chunk-nxwmyxnk.js";
import "B:/~BUN/root/chunk-d8fk23v1.js";
import "B:/~BUN/root/chunk-j704adqd.js";
import { it, AA } from "B:/~BUN/root/chunk-ek28wssa.js";
import "B:/~BUN/root/chunk-4bgg5sdy.js";
import { AOe } from "B:/~BUN/root/chunk-gk5jpppj.js";
import { ha } from "B:/~BUN/root/chunk-rsysgs10.js";
import { nA, $U, zb } from "B:/~BUN/root/chunk-h1tq8zce.js";
import "B:/~BUN/root/chunk-hgpj62j5.js";
import { hQ, WW, RTe } from "B:/~BUN/root/chunk-3rzwkd15.js";
import "B:/~BUN/root/chunk-bp5d1azq.js";
import "B:/~BUN/root/chunk-eya7pdzx.js";
import { He } from "B:/~BUN/root/chunk-8znbjmp4.js";
import { open as s } from "fs/promises";
var m = 10485760,
  u = 4;
async function O(r, o) {
  try {
    let t = it(o);
    if (AOe(t) || AA(t)) return "not_recordable";
    return await f.readAndRecord(r, t);
  } catch (error) {
    let n = k(error);
    return n === "ENOENT" || n === "EISDIR" || hQ(error) || WW(error) ? "not_recordable" : "read_failed";
  }
}
function c() {
  return ha(u, p);
}
var f = He({
  readAndRecord: c()
}, r => {
  r.readAndRecord = c();
});
async function p(r, o) {
  await using t = await s(o, Vhe());
  let timestamp = Math.floor((await t.stat()).mtimeMs),
    e = r.get(o);
  if (e !== void 0 && !(e.contentFromTranscript && e.limit === void 0 && nA(e) && e.timestamp < timestamp)) return "kept_existing";
  let i = await RTe(t, o, m);
  if (i.content.slice(0, 4096).includes("\x00")) return "not_recordable";
  let content = zb(i.content);
  if (e !== void 0 && !$U(e, content.trim())) return "kept_existing";
  let d = r.get(o);
  if (d !== void 0 && d !== e) return "kept_existing";
  return r.set(o, {
    content: content,
    timestamp: timestamp,
    offset: void 0,
    limit: void 0,
    contentNotInModelContext: !0
  }), "recorded";
}
export { O as recordStagedOutputAsRead };