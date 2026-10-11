// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.283
import {
  EVt
} from "B:/~BUN/root/chunk-e1thvnpv.js";
import {
  wt
} from "B:/~BUN/root/chunk-rwwxddqq.js";
import {
  w
} from "B:/~BUN/root/chunk-x9hkq9y1.js";
import {
  ek,
  fU
} from "B:/~BUN/root/chunk-1gn8pz4b.js";
import {
  V,
  e
} from "B:/~BUN/root/chunk-qkvevvte.js";
import {
  Vt,
  sn,
  N
} from "B:/~BUN/root/chunk-rnj6pcz5.js";
N();
import {
  PassThrough as u
} from "stream";

function m() {}
var UJe = Vt(!1);

function WC(r) {
  let i = w(5),
    {
      children: t
    } = r,
    {
      exit: n
    } = ek(),
    a, o;
  if (i[0] !== n) a = () => {
    let d = setTimeout(n, 0);
    return () => clearTimeout(d)
  }, o = [n], i[0] = n, i[1] = a, i[2] = o;
  else a = i[1], o = i[2];
  sn(a, o);
  let c;
  if (i[3] !== t) c = e(V, {
    children: t
  }), i[3] = t, i[4] = c;
  else c = i[4];
  return c
}
async function lM(r, t) {
  r.render(e(WC, {
    children: t
  })), await r.waitUntilExit()
}
async function oIe(r, {
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
  }), await (await fU(e(WC, {
    children: e(UJe.Provider, {
      value: !0,
      children: e(EVt, {
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
async function $Gt(r, t) {
  let n = await oIe(r, t);
  return wt(n)
}
export {
  UJe,
  WC,
  lM,
  oIe,
  $Gt
};
