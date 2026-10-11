// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.283
import {
  w
} from "B:/~BUN/root/chunk-x9hkq9y1.js";
import {
  e
} from "B:/~BUN/root/chunk-qkvevvte.js";
import {
  Vt,
  Pe,
  X,
  N
} from "B:/~BUN/root/chunk-rnj6pcz5.js";
N();
var a = Object.freeze({}),
  r = Vt(a);

function JJe(u) {
  let d = w(6),
    {
      storageV5: t,
      credentials: s,
      children: i
    } = u,
    l;
  if (d[0] !== s || d[1] !== t) l = t === void 0 && s === void 0 ? a : {
    storageV5: t,
    credentials: s
  }, d[0] = s, d[1] = t, d[2] = l;
  else l = d[2];
  let c = l,
    S;
  if (d[3] !== i || d[4] !== c) S = e(r.Provider, {
    value: c,
    children: i
  }), d[3] = i, d[4] = c, d[5] = S;
  else S = d[5];
  return S
}

function ke() {
  return Pe(r)
}
export {
  JJe,
  ke
};
