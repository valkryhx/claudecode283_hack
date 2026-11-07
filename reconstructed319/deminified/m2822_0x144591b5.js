// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import "B:/~BUN/root/chunk-z6138ats.js";
import { fDs } from "B:/~BUN/root/chunk-1s0yt4vj.js";
import "B:/~BUN/root/chunk-r8p1hzqw.js";
import "B:/~BUN/root/chunk-acjt1b7f.js";
import { evt as byId } from "B:/~BUN/root/chunk-2s5nnyq9.js";
import { createHash as n } from "crypto";
function f(d = {
  byId: byId
}) {
  let t = new Map();
  return {
    accept({
      template: template,
      digest: digest,
      contentBase64: contentBase64
    }) {
      let template_2 = d.byId(template);
      if (template_2 === void 0) return {
        ok: !1,
        kind: "refused",
        error: "template_refused: unknown_template"
      };
      if (!template_2.digests.some(item => item.sha256 === digest)) return {
        ok: !1,
        kind: "refused",
        error: "template_refused: version_mismatch"
      };
      if (!fDs.test(contentBase64) || contentBase64.length % 4 === 1) return {
        ok: !1,
        kind: "invalid",
        error: "invalid_upload: bad_base64"
      };
      let a = Buffer.from(contentBase64, "base64");
      if (a.length > template_2.maxBytes) return {
        ok: !1,
        kind: "refused",
        error: "template_refused: too_large"
      };
      if (n("sha256").update(a).digest("hex") !== digest) return {
        ok: !1,
        kind: "refused",
        error: "template_refused: digest_mismatch"
      };
      if (t.has(digest)) return {
        ok: !0,
        status: "already_stored",
        template: template_2,
        bytes: a.length
      };
      return t.set(digest, a), {
        ok: !0,
        status: "stored",
        template: template_2,
        bytes: a.length
      };
    },
    bytesFor: r => {
      let e = t.get(r);
      return e === void 0 ? void 0 : Buffer.from(e);
    },
    template: r => d.byId(r),
    size: () => t.size,
    clear: () => t.clear()
  };
}
export { f as createDeviceHookTemplateStore };