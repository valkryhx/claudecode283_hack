// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  Ee
} from "B:/~BUN/root/chunk-game8aqv.js";
import {
  ePe
} from "B:/~BUN/root/chunk-h4acfc9y.js";
import {
  i
} from "B:/~BUN/root/chunk-j6pt0v41.js";
import {
  x
} from "B:/~BUN/root/chunk-mwfggkjt.js";
import {
  tc
} from "B:/~BUN/root/chunk-xqymp2nr.js";
import {
  homedir as o
} from "os";
var yVo = "CLAUDE_CODE_RELAUNCH_HOME_TRUST";
async function xoi() {
  let r = await tc(process.pid);
  if (r === void 0) return {};
  return {
    [yVo]: `${process.pid}:${r}`
  }
}
async function Poi() {
  let r = /^(\d{1,10}):(.{1,64})$/.exec(i.CLAUDE_CODE_RELAUNCH_HOME_TRUST ?? "");
  if (!r) return !1;
  let e = x() === "windows" ? process.ppid : process.pid;
  if (Number(r[1]) !== e) return !1;
  if (!ePe(Ee(), o())) return !1;
  let t = await tc(e, {
    skipCache: !0
  });
  return t !== void 0 && t === r[2]
}
export {
  yVo,
  xoi,
  Poi
};
