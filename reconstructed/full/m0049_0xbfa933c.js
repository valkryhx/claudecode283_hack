// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.283
import {
  Ho,
  s1t,
  Ro,
  eBe
} from "B:/~BUN/root/chunk-y72v2pst.js";

function p_e(r) {
  return r.replace(/:\d+$/, "")
}
var n = "gitlab.com",
  e = "bitbucket.org",
  h$o = {
    github: Ho,
    gitlab: n,
    bitbucket: e
  },
  o = {
    "ssh.github.com": "github",
    "altssh.gitlab.com": "gitlab",
    "altssh.bitbucket.org": "bitbucket"
  };

function kC(r) {
  if (r = p_e(r), Ro(r)) return "github";
  let t = s1t(r),
    i = o[t];
  if (i) return i;
  if (t === n) return "gitlab";
  if (t === e) return "bitbucket";
  return "other"
}

function j8e(r) {
  let t = r.trim();
  if (eBe(t)) return null;
  if (t.includes("://")) try {
    return new URL(t).hostname || null
  } catch {
    return null
  }
  return /^(?:[^@:/]+@)?([^:/]+):/.exec(t)?.[1] ?? null
}

function Ggn(r) {
  let t = /^([^@:/[\]]+)@([^@:/[\]]+):(.*)$/s.exec(r);
  return t ? {
    user: t[1],
    host: t[2],
    path: t[3]
  } : null
}
export {
  p_e,
  h$o,
  kC,
  j8e,
  Ggn
};
