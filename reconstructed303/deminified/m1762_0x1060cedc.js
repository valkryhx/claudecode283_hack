// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { t } from "B:/~BUN/root/chunk-6za2ez23.js";
import { Ff, ra } from "B:/~BUN/root/chunk-07c8fw5z.js";
import { yQe } from "B:/~BUN/root/chunk-5g9fghtv.js";
import { readFile as i } from "fs/promises";
async function D_e(url) {
  if (!Ff()) {
    let r = yQe();
    if (r.HTTPS_PROXY && URL.parse(url)?.protocol === "https:") {
      let ca;
      if (r.SSL_CERT_FILE) try {
        ca = await i(r.SSL_CERT_FILE, "utf8");
      } catch (error) {
        t(`MCP agent-proxy fallback: failed to read CA bundle: ${error instanceof Error ? error.message : String(error)}`, {
          level: "warn"
        });
      }
      return ra({
        url: url,
        fallbackProxy: {
          url: r.HTTPS_PROXY,
          noProxy: r.NO_PROXY,
          ca: ca
        }
      });
    }
  }
  return ra({
    url: url
  });
}
export { D_e };