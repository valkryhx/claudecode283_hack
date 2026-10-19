// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.303
import {
  ke
} from "B:/~BUN/root/chunk-rpez7z7a.js";
import {
  _ye
} from "B:/~BUN/root/chunk-4bx17ygx.js";
import {
  a
} from "B:/~BUN/root/chunk-yt0knyw7.js";
import {
  I
} from "B:/~BUN/root/chunk-je1b1drr.js";
import {
  ad
} from "B:/~BUN/root/chunk-2ypz4cxh.js";
import {
  homedir as o
} from "os";
var _Xr = "CLAUDE_CODE_RELAUNCH_HOME_TRUST";
async function Dts() {
  let r = await ad(process.pid);
  if (r === void 0) return {};
  return {
    [_Xr]: `${process.pid}:${r}`
  }
}
async function Lts() {
  let r = /^(\d{1,10}):(.{1,64})$/.exec(a.CLAUDE_CODE_RELAUNCH_HOME_TRUST ?? "");
  if (!r) return !1;
  let e = I() === "windows" ? process.ppid : process.pid;
  if (Number(r[1]) !== e) return !1;
  if (!_ye(ke(), o())) return !1;
  let t = await ad(e, {
    skipCache: !0
  });
  return t !== void 0 && t === r[2]
}
export {
  _Xr,
  Dts,
  Lts
};
