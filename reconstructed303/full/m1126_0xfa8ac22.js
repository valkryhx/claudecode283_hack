// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.303
import {
  d
} from "B:/~BUN/root/chunk-3aez4b53.js";
import {
  _,
  J,
  t
} from "B:/~BUN/root/chunk-6za2ez23.js";
import {
  An
} from "B:/~BUN/root/chunk-rvc0n7zm.js";
import {
  O_,
  ad
} from "B:/~BUN/root/chunk-2ypz4cxh.js";
import {
  f
} from "B:/~BUN/root/chunk-frrkt2bs.js";
import {
  Ia
} from "B:/~BUN/root/chunk-9xr0x7gd.js";
import {
  o,
  v,
  u,
  C
} from "B:/~BUN/root/chunk-g3snhg6n.js";
import {
  st
} from "B:/~BUN/root/chunk-7aw74be3.js";
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
  unlink as m
} from "fs/promises";
import {
  homedir as b
} from "os";
import {
  dirname as P,
  join as p
} from "path";
var x = /^([1-9][0-9]{0,9})\.([0-9a-f]{64})$/,
  c = 4096,
  z = f(() => u({
    version: C(1),
    pid: v().int().positive(),
    procStart: o().min(1),
    nonceSha256: o()
  }));

function l() {
  return p(b(), ".claude", "state", "unattended-serving-runs")
}

function a(n) {
  return p(l(), `${n}.json`)
}
async function dri() {
  try {
    let n = await O_();
    if (n === void 0) return;
    let e = g(32).toString("hex"),
      r = a(process.pid);
    return await S(P(r), {
      recursive: !0,
      mode: 448
    }), await An(r, `${_({version:1,pid:process.pid,procStart:n,nonceSha256:st(e)})}
`, 384), await B(), process.once("exit", () => {
      try {
        h(r)
      } catch {}
    }), {
      token: `${process.pid}.${e}`,
      remove: async () => {
        try {
          await m(r)
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
async function Y7r(n) {
  try {
    let e = n === void 0 ? null : x.exec(n);
    if (!e) return !1;
    let r = Number(e[1]),
      i = await T(a(r));
    if (i === void 0 || i.pid !== r || !j(i.nonceSha256, st(e[2])) || !Ia(r)) return !1;
    return await ad(r, {
      skipCache: !0
    }) === i.procStart
  } catch {
    return !1
  }
}
async function T(n) {
  let e;
  try {
    e = await w(n, "r");
    let r = Buffer.alloc(c + 1),
      {
        bytesRead: i
      } = await e.read(r, 0, r.length, 0);
    if (i > c) return;
    let s = z().safeParse(J(r.subarray(0, i).toString("utf8")));
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
      if (Number.isInteger(e) && !Ia(e)) await m(a(e)).catch(() => {})
    }
  } catch {}
}
export {
  dri,
  Y7r
};
