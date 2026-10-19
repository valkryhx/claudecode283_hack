// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { LLo } from "B:/~BUN/root/chunk-kad4nq7y.js";
import "B:/~BUN/root/chunk-8z3a373v.js";
import "B:/~BUN/root/chunk-frrkt2bs.js";
import "B:/~BUN/root/chunk-x50ytcx8.js";
import { utt as byId } from "B:/~BUN/root/chunk-r5j4gtpc.js";
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
      if (!LLo.test(contentBase64) || contentBase64.length % 4 === 1) return {
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