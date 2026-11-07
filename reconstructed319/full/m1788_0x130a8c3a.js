// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  S
} from "B:/~BUN/root/chunk-bn4bjw9d.js";
import {
  G
} from "B:/~BUN/root/chunk-tmdrwqnv.js";
import {
  xl
} from "B:/~BUN/root/chunk-6j3fjnhn.js";
import {
  e
} from "B:/~BUN/root/chunk-t16eynda.js";
import {
  Jt,
  ve,
  j
} from "B:/~BUN/root/chunk-czy5r8bc.js";

function ig() {
  return G((o) => xl(o))
}
j();
j();
var t = Jt(void 0);

function Nvt() {
  return ve(t)
}

function Fvt(o) {
  let s = S(6),
    {
      selectionHighlight: n,
      noticeSystemLines: i,
      children: u
    } = o,
    f;
  if (s[0] !== i || s[1] !== n) f = {
    isQueued: !0,
    selectionHighlight: n,
    noticeSystemLines: i
  }, s[0] = i, s[1] = n, s[2] = f;
  else f = s[2];
  let r = f,
    a;
  if (s[3] !== u || s[4] !== r) a = e(t.Provider, {
    value: r,
    children: u
  }), s[3] = u, s[4] = r, s[5] = a;
  else a = s[5];
  return a
}
export {
  ig,
  Nvt,
  Fvt
};
