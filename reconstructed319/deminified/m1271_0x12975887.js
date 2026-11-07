// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { _Qr } from "B:/~BUN/root/chunk-27h4st9h.js";
import { t } from "B:/~BUN/root/chunk-2pp12te6.js";
import { cm, ba } from "B:/~BUN/root/chunk-wthaftk0.js";
import { BFe } from "B:/~BUN/root/chunk-0s9zh2h6.js";
import { readFile as p } from "fs/promises";
async function Kle(url) {
  if (_Qr()?.serves?.(url)) return {
    ...ba({
      url: url
    }),
    proxy: !1,
    redirect: "error"
  };
  if (!cm()) {
    let e = BFe();
    if (e.HTTPS_PROXY && URL.parse(url)?.protocol === "https:") {
      let fallbackProxy = {
          url: e.HTTPS_PROXY,
          noProxy: e.NO_PROXY
        },
        i = ba({
          url: url,
          fallbackProxy: fallbackProxy
        });
      if (i.proxy === void 0 || !e.SSL_CERT_FILE) return i;
      let ca;
      try {
        ca = await p(e.SSL_CERT_FILE, "utf8");
      } catch (error) {
        t(`MCP agent-proxy fallback: failed to read CA bundle: ${error instanceof Error ? error.message : String(error)}`, {
          level: "warn"
        });
      }
      return ba({
        url: url,
        fallbackProxy: {
          ...fallbackProxy,
          ca: ca
        }
      });
    }
  }
  return ba({
    url: url
  });
}
export { Kle };