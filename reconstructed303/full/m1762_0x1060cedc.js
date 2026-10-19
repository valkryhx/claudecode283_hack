// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.303
import {
  t
} from "B:/~BUN/root/chunk-6za2ez23.js";
import {
  Ff,
  ra
} from "B:/~BUN/root/chunk-07c8fw5z.js";
import {
  yQe
} from "B:/~BUN/root/chunk-5g9fghtv.js";
import {
  readFile as i
} from "fs/promises";
async function D_e(e) {
  if (!Ff()) {
    let r = yQe();
    if (r.HTTPS_PROXY && URL.parse(e)?.protocol === "https:") {
      let n;
      if (r.SSL_CERT_FILE) try {
        n = await i(r.SSL_CERT_FILE, "utf8")
      } catch (o) {
        t(`MCP agent-proxy fallback: failed to read CA bundle: ${o instanceof Error?o.message:String(o)}`, {
          level: "warn"
        })
      }
      return ra({
        url: e,
        fallbackProxy: {
          url: r.HTTPS_PROXY,
          noProxy: r.NO_PROXY,
          ca: n
        }
      })
    }
  }
  return ra({
    url: e
  })
}
export {
  D_e
};
