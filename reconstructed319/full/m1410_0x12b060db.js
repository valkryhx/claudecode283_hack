// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  d
} from "B:/~BUN/root/chunk-y2g9f85n.js";
import {
  t,
  _,
  ee
} from "B:/~BUN/root/chunk-2pp12te6.js";
import {
  zn
} from "B:/~BUN/root/chunk-nsneqfcc.js";
import {
  Rw,
  tc
} from "B:/~BUN/root/chunk-xqymp2nr.js";
import {
  p
} from "B:/~BUN/root/chunk-z6138ats.js";
import {
  El
} from "B:/~BUN/root/chunk-pzs4x0zd.js";
import {
  o,
  E,
  u,
  T
} from "B:/~BUN/root/chunk-4bfd0jkf.js";
import {
  nt
} from "B:/~BUN/root/chunk-tq5dzbq9.js";
import {
  randomBytes as g,
  timingSafeEqual as y
} from "crypto";
import {
  unlinkSync as h
} from "fs";
import {
  mkdir as S,
  open as w,
  readdir as R,
  unlink as f
} from "fs/promises";
import {
  homedir as b
} from "os";
import {
  dirname as P,
  join as m
} from "path";
var v = /^([1-9][0-9]{0,9})\.([0-9a-f]{64})$/,
  c = 4096,
  x = p(() => u({
    version: T(1),
    pid: E().int().positive(),
    procStart: o().min(1),
    nonceSha256: o()
  }));

function l() {
  return m(b(), ".claude", "state", "unattended-serving-runs")
}

function a(n) {
  return m(l(), `${n}.json`)
}
async function Yya() {
  try {
    let n = await Rw();
    if (n === void 0) return;
    let e = g(32).toString("hex"),
      r = a(process.pid);
    return await S(P(r), {
      recursive: !0,
      mode: 448
    }), await zn(r, `${_({version:1,pid:process.pid,procStart:n,nonceSha256:nt(e)})}
`, 384), await B(), process.once("exit", () => {
      try {
        h(r)
      } catch {}
    }), {
      token: `${process.pid}.${e}`,
      remove: async () => {
        try {
          await f(r)
        } catch {}
      }
    }
  } catch (n) {
    t(`unattended run grant: not recorded (${d(n)})`, {
      level: "warn"
    });
    return
  }
}
async function RYo(n) {
  try {
    let e = n === void 0 ? null : v.exec(n);
    if (!e) return !1;
    let r = Number(e[1]),
      i = await z(a(r));
    if (i === void 0 || i.pid !== r || !j(i.nonceSha256, nt(e[2])) || !El(r)) return !1;
    return await tc(r, {
      skipCache: !0
    }) === i.procStart
  } catch {
    return !1
  }
}
async function z(n) {
  let e;
  try {
    e = await w(n, "r");
    let r = Buffer.alloc(c + 1),
      {
        bytesRead: i
      } = await e.read(r, 0, r.length, 0);
    if (i > c) return;
    let s = x().safeParse(ee(r.subarray(0, i).toString("utf8")));
    return s.success ? s.data : void 0
  } catch {
    return
  } finally {
    await e?.close().catch(() => {})
  }
}

function j(n, e) {
  let r = Buffer.from(n),
    i = Buffer.from(e);
  return r.length === i.length && y(r, i)
}
async function B() {
  try {
    for (let n of await R(l())) {
      let e = Number(/^([1-9][0-9]{0,9})\.json$/.exec(n)?.[1]);
      if (Number.isInteger(e) && !El(e)) await f(a(e)).catch(() => {})
    }
  } catch {}
}
export {
  Yya,
  RYo
};
