// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.303
import {
  d,
  k,
  fm
} from "B:/~BUN/root/chunk-3aez4b53.js";
import {
  ce
} from "B:/~BUN/root/chunk-nxwmyxnk.js";
import {
  t
} from "B:/~BUN/root/chunk-6za2ez23.js";
import {
  l
} from "B:/~BUN/root/chunk-c09hf5e4.js";
import {
  rS
} from "B:/~BUN/root/chunk-2zk4vqr8.js";
import {
  wp
} from "B:/~BUN/root/chunk-xrp58hm9.js";
import {
  o$n,
  Zwr,
  C7t,
  Rdt,
  A7t
} from "B:/~BUN/root/chunk-k382hx6g.js";
import {
  Je
} from "B:/~BUN/root/chunk-r0jnxjth.js";
import {
  fr
} from "B:/~BUN/root/chunk-c6mbjdcy.js";
import {
  lstat as y,
  opendir as R
} from "fs/promises";
import {
  join as g,
  sep as D
} from "path";
async function YGt() {
  let o = await A7t();
  if (o !== null) return {
    root: o,
    nested: !1,
    followsShell: !1
  };
  let r = await b();
  return r === null ? null : {
    ...r,
    nested: !0
  }
}
var S = 256;
async function b() {
  try {
    if (!fr() || Je.isSandboxingEnabled()) return null;
    let o = Rdt();
    if (rS(o) !== null) return null;
    let r = ce(),
      i = o$n();
    if (i.size > 1) {
      let n = Zwr(r),
        e = n === void 0 ? void 0 : i.get(n),
        p = e !== void 0 && await f(e) === "directory" ? await u(e) : null;
      return p === null ? null : {
        root: p,
        followsShell: !0
      }
    }
    let [a] = i.values();
    if (a !== void 0) {
      let n = await f(a);
      if (n === "directory") {
        let e = await u(a);
        return e === null ? null : {
          root: e,
          followsShell: !1
        }
      }
      if (n === "other") return null
    }
    let s = [],
      w = 0;
    for await (let n of await R(o)) {
      if (++w > S) return null;
      if (!n.isDirectory() || n.name.startsWith(".")) continue;
      let e = g(o, n.name);
      if (await f(e) !== "absent") s.push(e)
    }
    let c = wp(r),
      m = s.find((n) => {
        let e = wp(n);
        return c === e || c.startsWith(e + D)
      }) ?? (s.length === 1 ? s[0] : void 0),
      h = m === void 0 ? null : await u(m);
    return h === null ? null : {
      root: h,
      followsShell: s.length > 1
    }
  } catch (o) {
    if (fm(o)) t(`workspace diff: nested repository scan failed: ${d(o)}`, {
      level: "warn"
    });
    else l(o);
    return null
  }
}
async function f(o) {
  try {
    return (await y(g(o, ".git"))).isDirectory() ? "directory" : "other"
  } catch (r) {
    let i = k(r);
    if (i === "ENOENT" || i === "ENOTDIR") return "absent";
    throw r
  }
}
async function u(o) {
  return C7t(o) === null ? null : A7t(void 0, o)
}
export {
  YGt
};
