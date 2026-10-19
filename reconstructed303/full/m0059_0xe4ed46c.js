// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.303
import {
  e1
} from "B:/~BUN/root/chunk-6za2ez23.js";
import {
  N4,
  ur,
  wZe,
  ro
} from "B:/~BUN/root/chunk-fsp20me0.js";
import {
  A5
} from "B:/~BUN/root/chunk-wegca9zh.js";

function z0e(r) {
  return r.replace(/:\d+$/, "")
}
var e = "gitlab.com",
  o = "bitbucket.org",
  g4s = {
    github: ur,
    gitlab: e,
    bitbucket: o
  },
  n = {
    "ssh.github.com": "github",
    "altssh.gitlab.com": "gitlab",
    "altssh.bitbucket.org": "bitbucket"
  };

function iI(r) {
  if (r = z0e(r), ro(r)) return "github";
  let t = wZe(r),
    i = n[t];
  if (i) return i;
  if (t === e) return "gitlab";
  if (t === o) return "bitbucket";
  return "other"
}

function abt(r) {
  let t = r.trim();
  if (N4(t) || e1(t) || A5(t)) return null;
  if (t.includes("://")) try {
    return new URL(t).hostname || null
  } catch {
    return null
  }
  return /^(?:[^@:/]+@)?([^:/]+):/.exec(t)?.[1] ?? null
}

function Cfn(r) {
  let t = /^([^@:/[\]]+)@([^@:/[\]]+):(.*)$/s.exec(r);
  return t && !e1(r) ? {
    user: t[1],
    host: t[2],
    path: t[3]
  } : null
}
export {
  z0e,
  g4s,
  iI,
  abt,
  Cfn
};
