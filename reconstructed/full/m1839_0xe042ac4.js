// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.283
import "B:/~BUN/root/chunk-kks4mj3w.js";
import {
  v
} from "B:/~BUN/root/chunk-bgthmgyc.js";
import "B:/~BUN/root/chunk-bvn0mpsk.js";
import "B:/~BUN/root/chunk-ekrhn4q1.js";
import "B:/~BUN/root/chunk-4rk7cwxz.js";
import "B:/~BUN/root/chunk-dkxhwhft.js";
import "B:/~BUN/root/chunk-17wqwt36.js";
import "B:/~BUN/root/chunk-54p0h65d.js";
import {
  hxe
} from "B:/~BUN/root/chunk-qe2zga5e.js";
import "B:/~BUN/root/chunk-4p6z9qq1.js";
import "B:/~BUN/root/chunk-0fnha6bz.js";
import "B:/~BUN/root/chunk-y04k89s2.js";
import "B:/~BUN/root/chunk-zv3zxqya.js";
import "B:/~BUN/root/chunk-6j6ra85q.js";
import "B:/~BUN/root/chunk-nkmmqnq7.js";
import "B:/~BUN/root/chunk-zksmb712.js";
import "B:/~BUN/root/chunk-zs3ycjed.js";
import "B:/~BUN/root/chunk-shgdrs47.js";
import "B:/~BUN/root/chunk-zk6g628v.js";
import "B:/~BUN/root/chunk-e7p62566.js";
import {
  Ye,
  y$
} from "B:/~BUN/root/chunk-qqgpf856.js";
import "B:/~BUN/root/chunk-zv4xh2j0.js";
import {
  Tin
} from "B:/~BUN/root/chunk-kk0ky5aa.js";
import {
  nD,
  y0,
  OS
} from "B:/~BUN/root/chunk-rtyz5f1n.js";
import {
  Fne,
  h2,
  ude
} from "B:/~BUN/root/chunk-t1t358ee.js";
import "B:/~BUN/root/chunk-81280fc2.js";
import "B:/~BUN/root/chunk-tndjj29v.js";
import {
  open as c
} from "fs/promises";
var m = 10485760;
async function E(o, s) {
  try {
    let t = Ye(s);
    if (Tin(t) || y$(t)) return "not_recordable";
    await using r = await c(t, hxe());
    let n = Math.floor((await r.stat()).mtimeMs),
      e = o.get(t);
    if (e !== void 0 && !(e.contentFromTranscript && e.limit === void 0 && nD(e) && e.timestamp < n)) return "kept_existing";
    let i = await ude(r, t, m);
    if (i.content.slice(0, 4096).includes("\x00")) return "not_recordable";
    let a = OS(i.content);
    if (e !== void 0 && !y0(e, a.trim())) return "kept_existing";
    let d = o.get(t);
    if (d !== void 0 && d !== e) return "kept_existing";
    return o.set(t, {
      content: a,
      timestamp: n,
      offset: void 0,
      limit: void 0,
      contentNotInModelContext: !0
    }), "recorded"
  } catch (t) {
    let r = v(t);
    return r === "ENOENT" || r === "EISDIR" || Fne(t) || h2(t) ? "not_recordable" : "read_failed"
  }
}
export {
  E as recordStagedOutputAsRead
};
