// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  Eu
} from "B:/~BUN/root/chunk-44q965xg.js";
var e = "self_hosted_runner_";

function $yn(n) {
  return n.startsWith(e)
}

function xJn(n) {
  return Eu([...n]).some($yn)
}

function Bzo(n) {
  return Eu([n]).filter((t) => !$yn(t)).join(",")
}

function jzo(n) {
  if (n === void 0) return !1;
  let t = typeof n === "string" ? n : String(n);
  return Eu([t]).some($yn)
}

function Oti(n) {
  let t = n.tools;
  if (t === void 0) return n;
  let o = typeof t === "string" ? t : String(t);
  if (!jzo(o)) return typeof t === "string" ? n : {
    ...n,
    tools: o
  };
  return {
    ...n,
    tools: Bzo(o)
  }
}
export {
  $yn,
  xJn,
  Bzo,
  jzo,
  Oti
};
