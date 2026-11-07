// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  Z5n
} from "B:/~BUN/root/chunk-dwg8my6z.js";
import {
  S
} from "B:/~BUN/root/chunk-bn4bjw9d.js";
import {
  oE,
  $G
} from "B:/~BUN/root/chunk-qey16aan.js";
import {
  ne,
  e
} from "B:/~BUN/root/chunk-t16eynda.js";
import {
  Jt,
  Zt,
  j
} from "B:/~BUN/root/chunk-czy5r8bc.js";
import {
  Zn
} from "B:/~BUN/root/chunk-12nc74pv.js";
j();
import {
  PassThrough as u
} from "stream";

function m() {}
var xGt = Jt(!1);

function zN(r) {
  let i = S(5),
    {
      children: t
    } = r,
    {
      exit: n
    } = oE(),
    a, o;
  if (i[0] !== n) a = () => {
    let d = setTimeout(n, 0);
    return () => clearTimeout(d)
  }, o = [n], i[0] = n, i[1] = a, i[2] = o;
  else a = i[1], o = i[2];
  Zt(a, o);
  let c;
  if (i[3] !== t) c = e(ne, {
    children: t
  }), i[3] = t, i[4] = c;
  else c = i[4];
  return c
}
async function GN(r, t) {
  r.render(e(zN, {
    children: t
  })), await r.waitUntilExit()
}
async function Kot(r, {
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
  }), await (await $G(e(zN, {
    children: e(xGt.Provider, {
      value: !0,
      children: e(Z5n, {
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
async function o5n(r, t) {
  let n = await Kot(r, t);
  return Zn(n)
}
export {
  xGt,
  zN,
  GN,
  Kot,
  o5n
};
