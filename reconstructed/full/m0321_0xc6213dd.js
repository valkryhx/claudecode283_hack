// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.283
import {
  Q
} from "B:/~BUN/root/chunk-17wqwt36.js";
import {
  Ni
} from "B:/~BUN/root/chunk-aqngsaqg.js";
import {
  BNe
} from "B:/~BUN/root/chunk-hbma7z88.js";
import {
  hi,
  xc
} from "B:/~BUN/root/chunk-w5bkq1td.js";

function Rjn(o, e) {
  if (o.type !== "pending") return !1;
  let n = hi(o.name);
  return !e.some((t) => xc(t, o.name, n))
}
async function Ajn(o, e, n) {
  let {
    maxWaitMs: t,
    until: s,
    pollMs: l = 50
  } = n, i = (r) => r.clients.some((c) => e(c, r));
  if (!i(o())) return;
  let p = Date.now() + t;
  while (Date.now() < p) {
    await Q(l);
    let r = o();
    if (s?.(r) || !i(r)) return
  }
}

function e6o(o) {
  return o.some(vin)
}

function vin(o) {
  return "role" in o.config && o.config.role === "comms"
}

function Lat(o) {
  return o.mcpInfo?.role === "comms"
}

function Y9(o) {
  if (Ni()) return o.filter((e) => !Lat(e));
  return o
}
async function ANe(o) {
  if (!Ni()) return;
  await Ajn(o, (e, n) => Rjn(e, n.tools) && !vin(e), {
    maxWaitMs: BNe
  })
}
export {
  Rjn,
  Ajn,
  e6o,
  vin,
  Lat,
  Y9,
  ANe
};
