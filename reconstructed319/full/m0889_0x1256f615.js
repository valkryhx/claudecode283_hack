// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  t
} from "B:/~BUN/root/chunk-2pp12te6.js";
import {
  Svo,
  BIs,
  Mz,
  pn
} from "B:/~BUN/root/chunk-1ks9vs37.js";
import {
  tAe
} from "B:/~BUN/root/chunk-h4ga5e8b.js";
import {
  createHash as g
} from "crypto";

function Tst() {
  let {
    value: e,
    source: r
  } = pn(tAe, null);
  return {
    flag: n(e),
    source: r
  }
}

function n(e) {
  let {
    flag: r,
    problem: o
  } = Svo(e);
  if (o !== void 0) t(`org-config gate: ${tAe} is malformed (${o}); treating as off`, {
    level: "warn"
  });
  return r
}
async function QBo(e, r, o) {
  let a = await BIs(tAe, null, e, r, o);
  return a.served ? {
    flag: n(a.value),
    source: "payload"
  } : void 0
}

function Bha(e = Tst, r = Mz) {
  let {
    flag: o,
    source: a
  } = e();
  return o.enabled || a === "fallback" && r()
}

function ZBo(e) {
  let r = g("sha256").update(`org_config_gate:${e}`).digest("hex");
  return parseInt(r.slice(0, 8), 16) % 100
}

function e1o(e, r) {
  return e.enabled && r < e.percent
}
export {
  Tst,
  QBo,
  Bha,
  ZBo,
  e1o
};
