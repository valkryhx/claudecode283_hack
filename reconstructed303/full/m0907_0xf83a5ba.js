// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.303
import {
  de,
  wSt,
  gVo
} from "B:/~BUN/root/chunk-rpez7z7a.js";
import {
  c,
  pe
} from "B:/~BUN/root/chunk-jthpk6wv.js";
import {
  i
} from "B:/~BUN/root/chunk-1kfn24jp.js";
import {
  a
} from "B:/~BUN/root/chunk-yt0knyw7.js";
import {
  vq
} from "B:/~BUN/root/chunk-9grc6xh0.js";
import {
  rjt
} from "B:/~BUN/root/chunk-9kme2ye7.js";

function t() {
  let e = gVo(),
    o = e === void 0 ? rjt() : void 0,
    [r, s] = e !== void 0 ? [Math.max(0, Date.now() - e), "session_switch"] : o !== void 0 ? [Math.max(0, Date.now() - o), "spawn_stamp"] : [de() ? void 0 : Math.round(process.uptime() * 1000), "process_start"];
  return {
    msSinceSessionStart: r,
    startAnchor: c(s),
    isRemoteSession: Boolean(a.CLAUDE_CODE_REMOTE_SESSION_ID)
  }
}

function n(e) {
  let o = wSt();
  if (o.has(e)) return !1;
  return o.add(e), !0
}

function xCn(e, o) {
  if (e === 0 || !n("tools_added")) return;
  i("tengu_chrome_tools_added", {
    ...t(),
    toolCount: e,
    discoverySource: c(o)
  })
}

function PCn(e) {
  if (!n("tool_attempted")) return;
  i("tengu_chrome_tool_attempted", {
    ...t(),
    ...e && {
      messageClientPlatform: vq(e)
    }
  })
}

function Jes(e) {
  if (!n("bridge_connected")) return;
  i("tengu_chrome_bridge_connected", {
    ...t(),
    bridgeStatus: pe(e)
  })
}

function Qes() {
  if (!n("extension_connected")) return;
  i("tengu_chrome_extension_connected", t())
}

function Zes(e) {
  i("tengu_chrome_tool_call_disconnected", {
    ...t(),
    tokenAccountMismatch: e
  })
}
export {
  xCn,
  PCn,
  Jes,
  Qes,
  Zes
};
