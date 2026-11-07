// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { Qbt, Ott, oqe, GAo, VAo } from "B:/~BUN/root/chunk-r8p1hzqw.js";
import { Jlr } from "B:/~BUN/root/chunk-27h4st9h.js";
function Mor(e, _) {
  return e === _ || e.behavior === "ask" && e.forcedByCaller === !0;
}
function Dor(e) {
  return e === Qbt || e === Ott || e === oqe || e === GAo || e === VAo || Jlr(e);
}
function Uui(e) {
  return e === oqe;
}
export { Mor, Dor, Uui };