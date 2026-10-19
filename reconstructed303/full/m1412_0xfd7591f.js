// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.303
import {
  pn
} from "B:/~BUN/root/chunk-6za2ez23.js";
import {
  dvn
} from "B:/~BUN/root/chunk-3md9ngvz.js";
import {
  w
} from "B:/~BUN/root/chunk-rysqv8v1.js";
import {
  TR,
  AV
} from "B:/~BUN/root/chunk-damrp3r8.js";
import {
  Q,
  e
} from "B:/~BUN/root/chunk-x2hkxw5q.js";
import {
  qt,
  Jt,
  B
} from "B:/~BUN/root/chunk-5hr2ysa5.js";
B();
import {
  PassThrough as u
} from "stream";

function m() {}
var lvt = qt(!1);

function CI(r) {
  let i = w(5),
    {
      children: t
    } = r,
    {
      exit: n
    } = TR(),
    a, o;
  if (i[0] !== n) a = () => {
    let d = setTimeout(n, 0);
    return () => clearTimeout(d)
  }, o = [n], i[0] = n, i[1] = a, i[2] = o;
  else a = i[1], o = i[2];
  Jt(a, o);
  let c;
  if (i[3] !== t) c = e(Q, {
    children: t
  }), i[3] = t, i[4] = c;
  else c = i[4];
  return c
}
async function RI(r, t) {
  r.render(e(CI, {
    children: t
  })), await r.waitUntilExit()
}
async function _Ve(r, {
  columns: t,
  storageV5: n
}) {
  let i = "",
    a = !1,
    o = new u;
  if (t !== void 0) o.columns = t;
  return o.on("data", (c) => {
    if (a) return;
    a = !0, i = c.toString()
  }), await (await AV(e(CI, {
    children: e(lvt.Provider, {
      value: !0,
      children: e(dvn, {
        value: m,
        children: r
      })
    })
  }), {
    stdout: o,
    patchConsole: !1
  }, {
    storageV5: n
  })).waitUntilExit(), i
}
async function PSn(r, t) {
  let n = await _Ve(r, t);
  return pn(n)
}
export {
  lvt,
  CI,
  RI,
  _Ve,
  PSn
};
