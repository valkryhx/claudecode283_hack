// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { t } from "B:/~BUN/root/chunk-qe2zga5e.js";
import { df, yi } from "B:/~BUN/root/chunk-2ppgegpr.js";
import { O$e } from "B:/~BUN/root/chunk-ceg1zct0.js";
import { readFile as i } from "fs/promises";
async function use(url) {
  if (!df()) {
    let r = O$e();
    if (r.HTTPS_PROXY && URL.parse(url)?.protocol === "https:") {
      let ca;
      if (r.SSL_CERT_FILE) try {
        ca = await i(r.SSL_CERT_FILE, "utf8");
      } catch (error) {
        t(`MCP agent-proxy fallback: failed to read CA bundle: ${error instanceof Error ? error.message : String(error)}`, {
          level: "warn"
        });
      }
      return yi({
        url: url,
        fallbackProxy: {
          url: r.HTTPS_PROXY,
          noProxy: r.NO_PROXY,
          ca: ca
        }
      });
    }
  }
  return yi({
    url: url
  });
}
export { use };