// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { w } from "B:/~BUN/root/chunk-x9hkq9y1.js";
import { e } from "B:/~BUN/root/chunk-qkvevvte.js";
import { Vt, Pe, X, N } from "B:/~BUN/root/chunk-rnj6pcz5.js";
N();
var a = Object.freeze({}),
  r = Vt(a);
function JJe(u) {
  let d = w(6),
    {
      storageV5: storageV5,
      credentials: credentials,
      children: children
    } = u,
    l;
  if (d[0] !== credentials || d[1] !== storageV5) l = storageV5 === void 0 && credentials === void 0 ? a : {
    storageV5: storageV5,
    credentials: credentials
  }, d[0] = credentials, d[1] = storageV5, d[2] = l;else l = d[2];
  let value = l,
    S;
  if (d[3] !== children || d[4] !== value) S = e(r.Provider, {
    value: value,
    children: children
  }), d[3] = children, d[4] = value, d[5] = S;else S = d[5];
  return S;
}
function ke() {
  return Pe(r);
}
export { JJe, ke };