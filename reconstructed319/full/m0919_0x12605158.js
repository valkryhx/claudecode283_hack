// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  R
} from "B:/~BUN/root/chunk-y2g9f85n.js";
import {
  or,
  th,
  jb
} from "B:/~BUN/root/chunk-h4acfc9y.js";
import {
  Og,
  ZS
} from "B:/~BUN/root/chunk-2pp12te6.js";
import {
  wwt
} from "B:/~BUN/root/chunk-jdtvghyw.js";
import {
  Zye
} from "B:/~BUN/root/chunk-dew5sv9w.js";
import {
  Qan,
  zBt
} from "B:/~BUN/root/chunk-3xdsa4p8.js";
var She = "claude-cli";

function h(e, {
  allowNewlineAndTab: t = !1
} = {}) {
  for (let n = 0; n < e.length; n++) {
    let r = e.charCodeAt(n);
    if (r <= 31 || r >= 127 && r <= 159) {
      if (t && (r === 10 || r === 9)) continue;
      return !0
    }
  }
  return !1
}
var u = /^[\w.-]+\/[\w.-]+$/,
  p = 5000,
  c = 4096,
  w = /^[A-Za-z0-9][A-Za-z0-9._-]{0,99}$/,
  f = /^(?:https:\/\/\w[\w.-]*(?::\d{1,5})?(?:\/[\w.~:/+-]*)?|\w[\w-]{0,63}@\w[\w.-]*:[\w.~:/+-]+)$/,
  g = /^\w[\w./-]{0,127}$/,
  d = 256,
  E = Zye.repo;

function MBo(e, t = ZS) {
  if (or(e) || jb(e)) throw Error(`Invalid cwd in deep link: UNC / network paths are not supported, got "${e}"`);
  if (th(e)) throw new R(`Invalid cwd in deep link: parent-directory segments are not supported, got "${e}"`, "Invalid cwd in deep link: parent-directory segments are not supported");
  if (!e.startsWith("/") && !/^[a-zA-Z]:[/\\]/.test(e)) throw Error(`Invalid cwd in deep link: must be an absolute path, got "${e}"`);
  if (h(e)) throw Error("Deep link cwd contains disallowed control characters");
  if (/(?![\u200C\u200D\uFE00-\uFE0F\u{E0100}-\u{E01EF}])[\p{Default_Ignorable_Code_Point}\u2028\u2029\u2800\uFFF9-\uFFFB\u{1D173}-\u{1D17A}]/u.test(e)) throw Error("Deep link cwd contains invisible or bidirectional control characters");
  if (e.length > c) throw Error(`Deep link cwd exceeds ${c} characters (got ${e.length})`);
  if (Og(t, e, {
      surfaceNetworkRaw: !0,
      unreadableAncestry: "unverified"
    }) !== void 0) throw new R(`Invalid cwd in deep link: the path resolves through a network link, got "${e}"`, "Invalid cwd in deep link: the path resolves through a network link")
}

function DBo(e) {
  let t = wwt(e).replace(/\r\n?/g, `
`);
  if (h(t, {
      allowNewlineAndTab: !0
    })) throw Error("Deep link query contains disallowed control characters");
  if (t.length > p) throw Error(`Deep link query exceeds ${p} characters (got ${t.length})`);
  return t
}

function LBo(e) {
  if (!w.test(e)) throw Error('Invalid plugin in deep link: expected a plugin name of ASCII letters, digits, ".", "_" and "-" (at most 100 characters)')
}

function X2t(e) {
  if (e.length > d) throw new R(`Deep link marketplace exceeds ${d} characters (got ${e.length})`, "Deep link marketplace exceeds the length limit");
  let t = e.indexOf("#"),
    n = t === -1 ? e : e.slice(0, t),
    r = t === -1 ? void 0 : e.slice(t + 1),
    i = n.indexOf("@");
  if (r === void 0 && i !== -1 && !n.includes(":")) r = n.slice(i + 1), n = n.slice(0, i);
  if (n.includes("%")) throw Error("Invalid marketplace in deep link: percent-encoded characters are not allowed in the source");
  if (!Qan.test(n) && !f.test(n)) throw Error('Invalid marketplace in deep link: expected a GitHub "owner/repo", an https:// URL, or a git SSH URL like git@host:owner/repo.git');
  if (/(?:^|[/:])\.\.?(?=[/:]|$)/.test(n) || n.replace(/^https:\/\//, "").includes("//")) throw Error('Invalid marketplace in deep link: ".", ".." and empty path segments are not allowed');
  if (r !== void 0 && !g.test(r)) throw Error('Invalid marketplace in deep link: the git ref after "#" or "@" may only contain letters, digits, ".", "_", "-" and "/"');
  if (r !== void 0 && zBt(n)) throw Error("Invalid marketplace in deep link: an Anthropic marketplace can't be pinned to a git ref")
}

function c7s(e) {
  let t = e.startsWith(`${She}://`) ? e : e.startsWith(`${She}:`) ? e.replace(`${She}:`, `${She}://`) : null;
  if (!t) throw Error(`Invalid deep link: expected ${She}:// scheme, got "${e}"`);
  let n;
  try {
    n = new URL(t)
  } catch {
    throw Error(`Invalid deep link URL: "${e}"`)
  }
  if (n.hostname === "install-plugin") {
    if (n.hash) throw Error('Invalid deep link: install-plugin has a raw "#"; encode a marketplace ref as %23 (marketplace=owner/repo%23v1)');
    let a = n.searchParams.get("plugin");
    if (!a) throw Error("Invalid deep link: install-plugin requires a plugin parameter");
    LBo(a);
    let s = n.searchParams.get("marketplace") ?? E;
    return X2t(s), {
      action: "install-plugin",
      plugin: a,
      marketplace: s
    }
  }
  if (n.hostname !== "open") throw Error(`Unknown deep link action: "${n.hostname}"`);
  let r = n.searchParams.get("cwd") ?? void 0,
    i = n.searchParams.get("repo") ?? void 0,
    o = n.searchParams.get("q");
  if (r) MBo(r);
  if (i && !u.test(i)) throw Error(`Invalid repo in deep link: expected "owner/repo", got "${i}"`);
  let l;
  if (o && o.trim().length > 0) l = DBo(o.trim());
  return {
    action: "open",
    query: l,
    cwd: r,
    repo: i
  }
}
export {
  She,
  MBo,
  DBo,
  LBo,
  X2t,
  c7s
};
