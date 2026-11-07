// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  vur,
  bns
} from "B:/~BUN/root/chunk-27h4st9h.js";
import {
  randomUUID as n
} from "crypto";

function Jqt(t) {
  let e = bns(t, vur(t, t));
  return e === null ? t : [...t, r(e)]
}
var v6o = (t) => r(bns(t, vur(t, t)) ?? {
    type: "session_cron_carry",
    tasks: []
  }),
  r = (t) => ({
    attachment: t,
    type: "attachment",
    uuid: n(),
    timestamp: new Date().toISOString()
  });
export {
  Jqt,
  v6o
};
