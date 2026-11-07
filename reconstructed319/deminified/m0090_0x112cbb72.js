// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { nK } from "B:/~BUN/root/chunk-jdtvghyw.js";
import { r7, jr as github, jSt, fo } from "B:/~BUN/root/chunk-46ahshhq.js";
import { Bte } from "B:/~BUN/root/chunk-x1xft50h.js";
function kqe(r) {
  return r.replace(/:\d+$/, "");
}
var gitlab = "gitlab.com",
  bitbucket = "bitbucket.org",
  sta = {
    github: github,
    gitlab: gitlab,
    bitbucket: bitbucket
  },
  n = {
    "ssh.github.com": "github",
    "altssh.gitlab.com": "gitlab",
    "altssh.bitbucket.org": "bitbucket"
  };
function gN(r) {
  if (r = kqe(r), fo(r)) return "github";
  let t = jSt(r),
    i = n[t];
  if (i) return i;
  if (t === gitlab) return "gitlab";
  if (t === bitbucket) return "bitbucket";
  return "other";
}
function U1t(r) {
  let t = r.trim();
  if (r7(t) || nK(t) || Bte(t)) return null;
  if (t.includes("://")) try {
    return new URL(t).hostname || null;
  } catch {
    return null;
  }
  return /^(?:[^@:/]+@)?([^:/]+):/.exec(t)?.[1] ?? null;
}
function o2n(r) {
  let t = /^([^@:/[\]]+)@([^@:/[\]]+):(.*)$/s.exec(r);
  return t && !nK(r) ? {
    user: t[1],
    host: t[2],
    path: t[3]
  } : null;
}
export { kqe, sta, gN, U1t, o2n };