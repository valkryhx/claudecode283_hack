// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
var zEn = 3000;
function d(t) {
  t.cancel().catch(() => {});
}
async function n6(t, {
  maxBytes = 65536,
  timeoutMs: timeoutMs
} = {}) {
  let e;
  try {
    let n = t.body?.getReader();
    if (!n) return;
    if (timeoutMs !== void 0) e = setTimeout(d, timeoutMs, n), e.unref?.();
    let r = maxBytes;
    for (;;) {
      let {
        done: done,
        value: value
      } = await n.read();
      if (done) return;
      if (r -= value.byteLength, r < 0) {
        await n.cancel();
        return;
      }
    }
  } catch {} finally {
    if (e !== void 0) clearTimeout(e);
  }
}
export { zEn, n6 };