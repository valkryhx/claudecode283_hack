// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  nn
} from "B:/~BUN/root/chunk-y1kkrqy9.js";
import {
  Y0i
} from "B:/~BUN/root/chunk-ysxmr1nk.js";

function s3o(r) {
  return nn().CLAUDE_AI_ORIGIN + "/code/project/" + encodeURIComponent(r)
}
var i = "https://preview.claude.ai";

function snr(r) {
  let e = /^(chan_[A-Za-z0-9_-]+)(?:\/(cmsg_[A-Za-z0-9_-]+))?$/.exec(r.trim());
  if (e !== null) return {
    projectId: e[1] ?? "",
    threadId: e[2] ?? null
  };
  let t;
  try {
    t = new URL(r.trim())
  } catch {
    return null
  }
  let o = /^\/code\/project\/(chan_[A-Za-z0-9_-]+)\/?$/.exec(t.pathname),
    n = t.searchParams.get("thread"),
    c = nn().CLAUDE_AI_ORIGIN;
  if (t.origin !== c && !(c === Y0i && t.origin === i) || o === null || n !== null && !/^cmsg_[A-Za-z0-9_-]+$/.test(n)) return null;
  return {
    projectId: o[1] ?? "",
    threadId: n
  }
}
export {
  s3o,
  snr
};
