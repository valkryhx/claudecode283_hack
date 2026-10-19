// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { Ec, RFo, AFo, tVs } from "B:/~BUN/root/chunk-we0fhavr.js";
import { Hyt } from "B:/~BUN/root/chunk-ejm0pmyj.js";
import { jh } from "B:/~BUN/root/chunk-k9zm82w3.js";
import { t } from "B:/~BUN/root/chunk-6za2ez23.js";
import { HSn } from "B:/~BUN/root/chunk-mk7anfka.js";
var KZs = "hearth_binding_changed";
function lzr(e, n) {
  if (e === null || typeof e !== "object" || !("hearth" in e)) return {
    binding: null,
    reason: "not_joined"
  };
  let hearth = e.hearth;
  if (hearth === null || typeof hearth !== "object") return {
    binding: null,
    reason: "not_joined"
  };
  let i = hearth,
    channelId = typeof i.channel_id === "string" ? i.channel_id : "",
    threadId = typeof i.thread_id === "string" ? i.thread_id : "";
  if (!RFo.test(channelId) || !RFo.test(threadId)) return t("[bridge:projects] binding ids are malformed \u2014 no mount", {
    level: "warn"
  }), {
    binding: null,
    reason: "bad_ids"
  };
  let mcp_server = i.mcp_server;
  if (mcp_server === null || typeof mcp_server !== "object") return {
    binding: null,
    reason: "bad_server_name"
  };
  let o = mcp_server;
  if (o.name !== Ec) return t("[bridge:projects] binding names an unexpected MCP server \u2014 no mount", {
    level: "warn"
  }), {
    binding: null,
    reason: "bad_server_name"
  };
  if (o.type !== "http" || typeof o.url !== "string") return {
    binding: null,
    reason: "not_http"
  };
  let d = Hyt(n.apiBaseUrl);
  if (d === null) return t("[bridge:projects] api base is not an approved ingress origin \u2014 no mount", {
    level: "warn"
  }), {
    binding: null,
    reason: "untrusted_origin"
  };
  let mountUrl = `${d}${AFo(n.sessionId)}`,
    r;
  try {
    r = new URL(o.url);
  } catch {
    return {
      binding: null,
      reason: "url_mismatch"
    };
  }
  if (r.origin !== d || r.pathname !== AFo(n.sessionId) || r.search !== "" || r.hash !== "" || r.username !== "" || r.password !== "") return t("[bridge:projects] binding url is not this session\u2019s hearthbot mount on our own api base \u2014 no mount", {
    level: "warn"
  }), {
    binding: null,
    reason: "url_mismatch"
  };
  let g = HSn(o, Ec);
  if (!g) return {
    binding: null,
    reason: "bad_tools"
  };
  let autoAllowTools = g.filter(item => tVs.has(item));
  return {
    binding: {
      channelId: channelId,
      threadId: threadId,
      mountUrl: mountUrl,
      autoAllowTools: autoAllowTools
    }
  };
}
var p = /^(.*)\/v1\/code\/sessions\/([^/?#]+)$/;
function YZs(e) {
  if (!e) return null;
  let n = p.exec(e);
  if (!n?.[1] || !n[2]) return null;
  try {
    jh(n[2], "sessionId");
  } catch {
    return null;
  }
  return {
    apiBaseUrl: n[1],
    sessionId: n[2]
  };
}
export { KZs, lzr, YZs };