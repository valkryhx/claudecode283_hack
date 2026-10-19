// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.303
import {
  bQs,
  SQs,
  sMo
} from "B:/~BUN/root/chunk-hkh6hras.js";
import {
  hf
} from "B:/~BUN/root/chunk-hb6x4e3n.js";
import {
  He
} from "B:/~BUN/root/chunk-8znbjmp4.js";
var e = He(hf(), (o) => o.set(null));

function fQs(o) {
  let t = o !== void 0 && o !== null;
  e.set(t ? bQs(o) : null)
}

function mQs(o) {
  return sMo(o) !== void 0 ? e.get() ?? void 0 : void 0
}

function gQs(o, t) {
  if (sMo(o) !== void 0) e.set(t ?? null)
}

function RIe(o) {
  let t = sMo(o),
    m = e.get() ?? SQs;
  return t === void 0 ? void 0 : {
    table: m,
    paths: t
  }
}
export {
  fQs,
  mQs,
  gQs,
  RIe
};
