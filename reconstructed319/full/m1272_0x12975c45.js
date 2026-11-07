// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  i
} from "B:/~BUN/root/chunk-j6pt0v41.js";
import {
  $A
} from "B:/~BUN/root/chunk-wthaftk0.js";
import {
  nH,
  v
} from "B:/~BUN/root/chunk-1ks9vs37.js";
import {
  oLt
} from "B:/~BUN/root/chunk-frv0tk8w.js";
import {
  isDeepStrictEqual as c
} from "util";

function W8o() {
  return i.CLAUDE_CODE_CCR_OWN_CONNECTION_POOL || v("tengu_reactive_quilt", !1)
}
async function zRt(t, e = {}) {
  if (e.proxy !== void 0 || nH() !== "hosted_worker" || !W8o()) return fetch(String(t), e);
  let r = $A(void 0).tls;
  if (c(e.tls, r)) return oLt(String(t), e, () => !0);
  let o = new Set([r?.ca ?? []].flat()),
    n = [e.tls?.ca ?? []].flat().filter((s) => o.has(s));
  if (n.length === 0) throw Error("MCP request not sent: its list of trusted CA certificates has nothing in common with the one Claude Code uses now, most likely because Claude Code's TLS settings changed after the server connected. Reconnect the server to use the new settings.");
  return fetch(String(t), {
    ...e,
    tls: {
      ...r,
      ca: n
    }
  })
}
export {
  W8o,
  zRt
};
