// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  Jus
} from "B:/~BUN/root/chunk-4zhce32x.js";
import {
  F
} from "B:/~BUN/root/chunk-y2g9f85n.js";
import {
  rn
} from "B:/~BUN/root/chunk-1ks9vs37.js";
import {
  a
} from "B:/~BUN/root/chunk-xrwdh0g4.js";
import {
  Wqe,
  TN
} from "B:/~BUN/root/chunk-65j2302z.js";
import {
  FMt
} from "B:/~BUN/root/chunk-05q1awc0.js";

function x7n(e) {
  let o = e.trim();
  return o !== "" && !o.startsWith("/")
}
var a2o = () => !1;
var l2o = () => TN() && !Wqe() && rn("tengu_quiet_ember", a2o());
var P7n = {
  name: "cc-plugin-responsive-mode",
  description: "Responsive mode: Claude replies to you in a sentence before thinking or using tools, on every prompt",
  isAvailable: l2o,
  defaultEnabled: !1
};

function Iqr({
  text: e,
  pastedContents: o,
  isSentByPerson: t,
  wait: r
}) {
  if (!t || r || !x7n(e)) return !1;
  try {
    return Jus(e, o).length === 0 && FMt(P7n.name)
  } catch (i) {
    return a(F(i)), !1
  }
}
export {
  x7n,
  a2o,
  l2o,
  P7n,
  Iqr
};
