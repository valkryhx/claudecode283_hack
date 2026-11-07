// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  Rf,
  w0s,
  k0s,
  yJi
} from "B:/~BUN/root/chunk-q8eknvfd.js";
import {
  A_t,
  DUt
} from "B:/~BUN/root/chunk-grwykqvw.js";
import {
  Nb
} from "B:/~BUN/root/chunk-rr294jrm.js";
import {
  t
} from "B:/~BUN/root/chunk-2pp12te6.js";
import {
  c8n
} from "B:/~BUN/root/chunk-je8n28sa.js";
var cma = "hearth_binding_changed";

function rDo(e, n) {
  if (e === null || typeof e !== "object" || !("hearth" in e)) return {
    binding: null,
    reason: "not_joined"
  };
  let s = e.hearth;
  if (s === null || typeof s !== "object") return {
    binding: null,
    reason: "not_joined"
  };
  let i = s,
    l = typeof i.channel_id === "string" ? i.channel_id : "",
    u = typeof i.thread_id === "string" ? i.thread_id : "";
  if (!w0s.test(l) || !w0s.test(u)) return t("[bridge:projects] binding ids are malformed \u2014 no mount", {
    level: "warn"
  }), {
    binding: null,
    reason: "bad_ids"
  };
  let a = i.mcp_server;
  if (a === null || typeof a !== "object") return {
    binding: null,
    reason: "bad_server_name"
  };
  let o = a;
  if (o.name !== Rf) return t("[bridge:projects] binding names an unexpected MCP server \u2014 no mount", {
    level: "warn"
  }), {
    binding: null,
    reason: "bad_server_name"
  };
  if (o.type !== "http" || typeof o.url !== "string") return {
    binding: null,
    reason: "not_http"
  };
  let d = DUt(n.apiBaseUrl);
  if (d === null) return t("[bridge:projects] api base is not an approved ingress origin \u2014 no mount", {
    level: "warn"
  }), {
    binding: null,
    reason: "untrusted_origin"
  };
  let c = `${d}${k0s(n.sessionId)}`,
    r;
  try {
    r = new URL(o.url)
  } catch {
    return {
      binding: null,
      reason: "url_mismatch"
    }
  }
  if (A_t(r) !== d || r.pathname !== k0s(n.sessionId) || r.search !== "" || r.hash !== "" || r.username !== "" || r.password !== "") return t("[bridge:projects] binding url is not this session\u2019s hearthbot mount on our own api base \u2014 no mount", {
    level: "warn"
  }), {
    binding: null,
    reason: "url_mismatch"
  };
  let g = c8n(o, Rf);
  if (!g) return {
    binding: null,
    reason: "bad_tools"
  };
  let h = g.filter((_) => yJi.has(_));
  return {
    binding: {
      channelId: l,
      threadId: u,
      mountUrl: c,
      autoAllowTools: h
    }
  }
}
var p = /^(.*)\/v1\/code\/sessions\/([^/?#]+)$/;

function uma(e) {
  if (!e) return null;
  let n = p.exec(e);
  if (!n?.[1] || !n[2]) return null;
  try {
    Nb(n[2], "sessionId")
  } catch {
    return null
  }
  return {
    apiBaseUrl: n[1],
    sessionId: n[2]
  }
}
export {
  cma,
  rDo,
  uma
};
