// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { Ee, lne } from "B:/~BUN/root/chunk-game8aqv.js";
import { R, H_, Nh } from "B:/~BUN/root/chunk-y2g9f85n.js";
import { hWt } from "B:/~BUN/root/chunk-h4acfc9y.js";
import { u$e } from "B:/~BUN/root/chunk-2pp12te6.js";
import { on } from "B:/~BUN/root/chunk-09sn55yf.js";
import { mt } from "B:/~BUN/root/chunk-d10hhz4p.js";
import { Gc } from "B:/~BUN/root/chunk-j05gjqgd.js";
import { n1, cL } from "B:/~BUN/root/chunk-cxcakgnv.js";
import { realpath as l, stat as p } from "fs/promises";
import { isAbsolute as u } from "path";
var eDo = {
  is_cwd: "sad",
  already_registered: "sad",
  outside_scope: "bad_reported",
  not_directory: "bad",
  too_many: "bad",
  expansion_failed: "bad",
  resolve_failed: "bad",
  stat_failed: "bad",
  screened_nt_namespace: "bad_reported",
  screened_untrusted_unc: "bad_reported",
  screened_untrusted_automount: "bad_reported",
  screened_suspicious_windows_spelling: "bad_reported",
  screened_unvettable_chain: "bad_reported",
  screened_link_text_climbs: "bad_reported"
};
function c(e) {
  return `screened_${e}`;
}
function _(e) {
  return Object.hasOwn(eDo, e);
}
function ukt(e) {
  try {
    return e instanceof R && e.telemetryMessage.startsWith("register_repo_root:") && e.errorClass !== void 0 && _(e.errorClass) ? e.errorClass : void 0;
  } catch {
    return;
  }
}
function Fun(e, o, i, a) {
  let t = {
      caseFold: !1,
      skipPrivateAlias: !0,
      uncShapeParity: !0
    },
    r = u(o) && Gc(e, o, t);
  if (r && Gc(o, e, t)) return {
    allowed: !1,
    code: "is_cwd",
    reason: "is the session's working directory, which is already registered; pass the cloned repo's own directory instead"
  };
  if (a.includes(e)) return {
    allowed: !1,
    code: "already_registered",
    reason: "is already a registered working directory"
  };
  let s = i.some(item => e !== item && Gc(e, item, t));
  if (!r && !s) return {
    allowed: !1,
    code: "outside_scope",
    reason: "is not a subdirectory of the session's working directory or of a launch-time --add-dir root"
  };
  return {
    allowed: !0
  };
}
async function g(e) {
  return Promise.all([...e.values()].map(async item => {
    if (await u$e(item.path, lne())) return {
      source: item.source,
      resolved: item.path
    };
    let i = await l(item.path).catch(() => item.path);
    return {
      source: item.source,
      resolved: hWt(item.path, i, lne()) ? item.path : i
    };
  }));
}
async function f(e) {
  return (await p(e)).isDirectory() ? {
    allowed: !0
  } : {
    allowed: !1,
    code: "not_directory",
    reason: "is not a directory"
  };
}
var h = {
  nt_namespace: "register_repo_root: NT-namespace path rejected before filesystem access",
  untrusted_unc: "register_repo_root: UNC path rejected before filesystem access",
  untrusted_automount: "register_repo_root: automount path rejected before filesystem access",
  suspicious_windows_spelling: "register_repo_root: suspicious Windows path spelling rejected",
  unvettable_chain: "register_repo_root: unvettable path ancestry rejected before filesystem access",
  link_text_climbs: 'register_repo_root: path through a symlink whose target has ".." past its leading "../" segments rejected'
};
async function tDo(e, o, i) {
  let a, t;
  try {
    a = mt(e, i);
  } catch {
    throw new R("register_repo_root: target path could not be resolved", "register_repo_root: path expansion failed", "expansion_failed");
  }
  let r = n1(e, a, o().trustedNetworkDirectories, {
    allowLinkTextClimbs: !0
  });
  if (!r.ok) throw new R("register_repo_root: target is a network path, an obfuscated spelling, or a path whose directories and symbolic links could not all be examined, which cannot be registered", h[r.reason], c(r.reason));
  try {
    t = await l(a);
  } catch (error) {
    throw new R("register_repo_root: target path could not be resolved", "register_repo_root: path resolution failed", Nh(error) || H_(error) ? "resolve_failed" : void 0);
  }
  let s = cL(t, o().trustedNetworkDirectories);
  if (s !== void 0) throw new R("register_repo_root: target is a network path, an obfuscated spelling, or a path whose directories and symbolic links could not all be examined, which cannot be registered", "register_repo_root: resolved path rejected by the spelling screen", c(s));
  let n;
  try {
    n = await f(t);
  } catch (error) {
    throw new R("register_repo_root: target path could not be resolved", "register_repo_root: target stat failed", Nh(error) || H_(error) ? "stat_failed" : void 0);
  }
  if (!n.allowed) throw new R(`register_repo_root: ${on(e)} ${n.reason}`, "register_repo_root: target is not a directory", n.code);
  return t;
}
async function t4n(e, o, i) {
  let a = await tDo(e, o, i),
    t = await g(o().additionalWorkingDirectories),
    r = Fun(a, Ee(), t.filter(item => item.source === "cliArg").map(item => item.resolved), t.map(item => item.resolved));
  if (!r.allowed) throw new R(`register_repo_root: ${on(e)} ${r.reason}`, "register_repo_root: directory is outside the allowed registration scope", r.code);
  return a;
}
export { eDo, ukt, Fun, tDo, t4n };