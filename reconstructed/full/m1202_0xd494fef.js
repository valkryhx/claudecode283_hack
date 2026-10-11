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
  Vt,
  Pe,
  N
} from "B:/~BUN/root/chunk-rnj6pcz5.js";
N();
var qw = Vt(null);

function ol() {
  return Pe(qw) !== null
}

function As(o) {
  let c = w(3),
    l = Pe(qw),
    n;
  if (c[0] !== l || c[1] !== o) n = l ? {
    rows: l.rows,
    columns: l.columns
  } : o, c[0] = l, c[1] = o, c[2] = n;
  else n = c[2];
  return n
}

function toe() {
  return Pe(qw)?.scrollViewport ?? null
}

function hje() {
  return Pe(qw)?.claimScrollBox ?? null
}
export {
  qw,
  ol,
  As,
  toe,
  hje
};
