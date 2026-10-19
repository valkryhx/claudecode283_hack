// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { pn } from "B:/~BUN/root/chunk-6za2ez23.js";
import { dvn } from "B:/~BUN/root/chunk-3md9ngvz.js";
import { w } from "B:/~BUN/root/chunk-rysqv8v1.js";
import { TR, AV } from "B:/~BUN/root/chunk-damrp3r8.js";
import { Q, e } from "B:/~BUN/root/chunk-x2hkxw5q.js";
import { qt, Jt, B } from "B:/~BUN/root/chunk-5hr2ysa5.js";
B();
import { PassThrough as u } from "stream";
function value() {}
var lvt = qt(!1);
function CI(r) {
  let i = w(5),
    {
      children: children
    } = r,
    {
      exit: exit
    } = TR(),
    a,
    o;
  if (i[0] !== exit) a = () => {
    let d = setTimeout(exit, 0);
    return () => clearTimeout(d);
  }, o = [exit], i[0] = exit, i[1] = a, i[2] = o;else a = i[1], o = i[2];
  Jt(a, o);
  let c;
  if (i[3] !== children) c = e(Q, {
    children: children
  }), i[3] = children, i[4] = c;else c = i[4];
  return c;
}
async function RI(r, children_2) {
  r.render(e(CI, {
    children: children_2
  })), await r.waitUntilExit();
}
async function _Ve(children_3, {
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
  }), await (await AV(e(CI, {
    children: e(lvt.Provider, {
      value: !0,
      children: e(dvn, {
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
async function PSn(r, t) {
  let n = await _Ve(r, t);
  return pn(n);
}
export { lvt, CI, RI, _Ve, PSn };