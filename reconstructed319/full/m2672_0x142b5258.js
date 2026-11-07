// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import "B:/~BUN/root/chunk-drx9cnw1.js";
import {
  k
} from "B:/~BUN/root/chunk-y2g9f85n.js";
import "B:/~BUN/root/chunk-vz9zea4j.js";
import "B:/~BUN/root/chunk-q78ga0zw.js";
import "B:/~BUN/root/chunk-db8vh085.js";
import "B:/~BUN/root/chunk-game8aqv.js";
import "B:/~BUN/root/chunk-wt4dg253.js";
import "B:/~BUN/root/chunk-r5zmhp23.js";
import "B:/~BUN/root/chunk-h4acfc9y.js";
import "B:/~BUN/root/chunk-ppmmt0c3.js";
import {
  xae
} from "B:/~BUN/root/chunk-2pp12te6.js";
import "B:/~BUN/root/chunk-dayhhbfr.js";
import "B:/~BUN/root/chunk-eev762xg.js";
import "B:/~BUN/root/chunk-15vbkr6z.js";
import "B:/~BUN/root/chunk-n8cnxns2.js";
import "B:/~BUN/root/chunk-09sn55yf.js";
import "B:/~BUN/root/chunk-jdtvghyw.js";
import "B:/~BUN/root/chunk-kjwczfsg.js";
import "B:/~BUN/root/chunk-j6pt0v41.js";
import "B:/~BUN/root/chunk-y1kkrqy9.js";
import "B:/~BUN/root/chunk-xrwdh0g4.js";
import "B:/~BUN/root/chunk-mwfggkjt.js";
import "B:/~BUN/root/chunk-9kvvd0hy.js";
import "B:/~BUN/root/chunk-thn0wk2x.js";
import "B:/~BUN/root/chunk-4jt3t3ds.js";
import "B:/~BUN/root/chunk-83p1z1q5.js";
import {
  mt,
  wM
} from "B:/~BUN/root/chunk-d10hhz4p.js";
import "B:/~BUN/root/chunk-0w2htvr6.js";
import "B:/~BUN/root/chunk-t4qpmjt5.js";
import {
  kze
} from "B:/~BUN/root/chunk-zz0hj0zg.js";
import {
  Ja
} from "B:/~BUN/root/chunk-v91d7hbv.js";
import {
  PL,
  f3,
  ak
} from "B:/~BUN/root/chunk-xbhv3nhf.js";
import {
  lme,
  cG,
  t$e
} from "B:/~BUN/root/chunk-x3gsqe09.js";
import "B:/~BUN/root/chunk-4hj5k2m3.js";
import "B:/~BUN/root/chunk-12nc74pv.js";
import "B:/~BUN/root/chunk-9wbhv9z5.js";
import {
  he
} from "B:/~BUN/root/chunk-fet34rqr.js";
import {
  open as s
} from "fs/promises";
var m = 10485760,
  u = 4;
async function O(r, o) {
  try {
    let t = mt(o);
    if (kze(t) || wM(t)) return "not_recordable";
    return await f.readAndRecord(r, t)
  } catch (t) {
    let n = k(t);
    return n === "ENOENT" || n === "EISDIR" || lme(t) || cG(t) ? "not_recordable" : "read_failed"
  }
}

function c() {
  return Ja(u, p)
}
var f = he({
  readAndRecord: c()
}, (r) => {
  r.readAndRecord = c()
});
async function p(r, o) {
  await using t = await s(o, xae());
  let n = Math.floor((await t.stat()).mtimeMs),
    e = r.get(o);
  if (e !== void 0 && !(e.contentFromTranscript && e.limit === void 0 && PL(e) && e.timestamp < n)) return "kept_existing";
  let i = await t$e(t, o, m);
  if (i.content.slice(0, 4096).includes("\x00")) return "not_recordable";
  let a = ak(i.content);
  if (e !== void 0 && !f3(e, a.trim())) return "kept_existing";
  let d = r.get(o);
  if (d !== void 0 && d !== e) return "kept_existing";
  return r.set(o, {
    content: a,
    timestamp: n,
    offset: void 0,
    limit: void 0,
    contentNotInModelContext: !0
  }), "recorded"
}
export {
  O as recordStagedOutputAsRead
};
