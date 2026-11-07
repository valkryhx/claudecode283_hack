// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { Z5n } from "B:/~BUN/root/chunk-dwg8my6z.js";
import { S } from "B:/~BUN/root/chunk-bn4bjw9d.js";
import { oE, $G } from "B:/~BUN/root/chunk-qey16aan.js";
import { ne, e } from "B:/~BUN/root/chunk-t16eynda.js";
import { Jt, Zt, j } from "B:/~BUN/root/chunk-czy5r8bc.js";
import { Zn } from "B:/~BUN/root/chunk-12nc74pv.js";
j();
import { PassThrough as u } from "stream";
function value() {}
var xGt = Jt(!1);
function zN(r) {
  let i = S(5),
    {
      children: children
    } = r,
    {
      exit: exit
    } = oE(),
    a,
    o;
  if (i[0] !== exit) a = () => {
    let d = setTimeout(exit, 0);
    return () => clearTimeout(d);
  }, o = [exit], i[0] = exit, i[1] = a, i[2] = o;else a = i[1], o = i[2];
  Zt(a, o);
  let c;
  if (i[3] !== children) c = e(ne, {
    children: children
  }), i[3] = children, i[4] = c;else c = i[4];
  return c;
}
async function GN(r, children_2) {
  r.render(e(zN, {
    children: children_2
  })), await r.waitUntilExit();
}
async function Kot(children_3, {
  columns: columns,
  storageV5: storageV5
}) {
  let i = "",
    a = !1,
    stdout = new u();
  if (columns !== void 0) stdout.columns = columns;
  return stdout.on("data", c => {
    if (a) return;
    a = !0, i = c.toString();
  }), await (await $G(e(zN, {
    children: e(xGt.Provider, {
      value: !0,
      children: e(Z5n, {
        value: value,
        children: children_3
      })
    })
  }), {
    stdout: stdout,
    patchConsole: !1
  }, {
    storageV5: storageV5
  })).waitUntilExit(), i;
}
async function o5n(r, t) {
  let n = await Kot(r, t);
  return Zn(n);
}
export { xGt, zN, GN, Kot, o5n };