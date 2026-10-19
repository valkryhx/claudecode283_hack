// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { b } from "B:/~BUN/root/chunk-jthpk6wv.js";
import { t } from "B:/~BUN/root/chunk-6za2ez23.js";
import { i } from "B:/~BUN/root/chunk-1kfn24jp.js";
import { dn } from "B:/~BUN/root/chunk-damrp3r8.js";
import { VVe } from "B:/~BUN/root/chunk-1jz9m9yh.js";
import { ae, y, B } from "B:/~BUN/root/chunk-5hr2ysa5.js";
B();
function l(o, n, r) {
  return o.isWindowActivation || c(n, r);
}
function hS() {
  let o = dn(),
    [n] = y(() => o.now());
  return ae(r => {
    let e = o.now();
    if (!l(r, n, e)) return !1;
    let reason = r.isWindowActivation ? b("window_activation") : b("mount_settle");
    return t(`Select: dropped stray click (${r.isWindowActivation ? "window-activation click" : `${e - n}ms after mount`})`), i("tengu_select_stray_click_dropped", {
      reason: reason
    }), r.dropAsStray(), !0;
  }, [o, n]);
}
function Gvt() {
  let o = dn(),
    [n] = y(() => o.now());
  return ae(() => c(n, o.now()), [o, n]);
}
function c(o, n) {
  return n - o < VVe;
}
export { hS, Gvt };