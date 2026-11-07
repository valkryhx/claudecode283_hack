// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import "B:/~BUN/root/chunk-vz9zea4j.js";
import "B:/~BUN/root/chunk-q78ga0zw.js";
import "B:/~BUN/root/chunk-db8vh085.js";
import "B:/~BUN/root/chunk-game8aqv.js";
import "B:/~BUN/root/chunk-wt4dg253.js";
import "B:/~BUN/root/chunk-drx9cnw1.js";
import "B:/~BUN/root/chunk-y2g9f85n.js";
import "B:/~BUN/root/chunk-r5zmhp23.js";
import "B:/~BUN/root/chunk-h4acfc9y.js";
import "B:/~BUN/root/chunk-ppmmt0c3.js";
import "B:/~BUN/root/chunk-ja520myc.js";
import "B:/~BUN/root/chunk-5az22yft.js";
import "B:/~BUN/root/chunk-fjzk7kwf.js";
import "B:/~BUN/root/chunk-09sn55yf.js";
import "B:/~BUN/root/chunk-n8cnxns2.js";
import {
  wo
} from "B:/~BUN/root/chunk-1tbewxs3.js";
import {
  p
} from "B:/~BUN/root/chunk-z6138ats.js";
import {
  o,
  C,
  u
} from "B:/~BUN/root/chunk-4bfd0jkf.js";
import "B:/~BUN/root/chunk-9wbhv9z5.js";
var t = p(() => C(u({
  name: o(),
  authTool: o()
})));

function c(r) {
  let e = t().safeParse(r.servers);
  return e.success ? e.data : []
}

function i(r) {
  return r.map((e) => `MCP server ${wo(e.name)} needs authentication before its tools answer; its ${e.authTool} tool is callable from a script.`).join(`
`)
}
export {
  i as renderReplMcpNeedsAuthNotice, c as replMcpNeedsAuthServersOf
};
