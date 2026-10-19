// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.303
import {
  ke,
  J5
} from "B:/~BUN/root/chunk-rpez7z7a.js";
import {
  x,
  o_,
  fm
} from "B:/~BUN/root/chunk-3aez4b53.js";
import {
  PSt
} from "B:/~BUN/root/chunk-4bx17ygx.js";
import {
  LTe
} from "B:/~BUN/root/chunk-6za2ez23.js";
import {
  it
} from "B:/~BUN/root/chunk-ek28wssa.js";
import {
  Xt
} from "B:/~BUN/root/chunk-8ye9n4fk.js";
import {
  Du
} from "B:/~BUN/root/chunk-c44qc88s.js";
import {
  hN,
  yN
} from "B:/~BUN/root/chunk-dn8rakwm.js";
import {
  realpath as c,
  stat as l
} from "fs/promises";
import {
  isAbsolute as p
} from "path";
var ozr = {
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
  screened_unvettable_chain: "bad_reported"
};

function d(e) {
  return `screened_${e}`
}

function R(e) {
  return Object.hasOwn(ozr, e)
}

function Iet(e) {
  try {
    return e instanceof x && e.telemetryMessage.startsWith("register_repo_root:") && e.errorClass !== void 0 && R(e.errorClass) ? e.errorClass : void 0
  } catch {
    return
  }
}

function szr(e, o, t, i) {
  let r = {
      caseFold: !1,
      skipPrivateAlias: !0,
      uncShapeParity: !0
    },
    s = p(o) && Du(e, o, r);
  if (s && Du(o, e, r)) return {
    allowed: !1,
    code: "is_cwd",
    reason: "is the session's working directory, which is already registered; pass the cloned repo's own directory instead"
  };
  if (i.includes(e)) return {
    allowed: !1,
    code: "already_registered",
    reason: "is already a registered working directory"
  };
  let n = t.some((a) => e !== a && Du(e, a, r));
  if (!s && !n) return {
    allowed: !1,
    code: "outside_scope",
    reason: "is not a subdirectory of the session's working directory or of a launch-time --add-dir root"
  };
  return {
    allowed: !0
  }
}
async function u(e) {
  return Promise.all([...e.values()].map(async (o) => {
    if (await LTe(o.path, J5())) return {
      source: o.source,
      resolved: o.path
    };
    let t = await c(o.path).catch(() => o.path);
    return {
      source: o.source,
      resolved: PSt(o.path, t, J5()) ? o.path : t
    }
  }))
}
async function _(e) {
  return (await l(e)).isDirectory() ? {
    allowed: !0
  } : {
    allowed: !1,
    code: "not_directory",
    reason: "is not a directory"
  }
}
var f = {
  nt_namespace: "register_repo_root: NT-namespace path rejected before filesystem access",
  untrusted_unc: "register_repo_root: UNC path rejected before filesystem access",
  untrusted_automount: "register_repo_root: automount path rejected before filesystem access",
  suspicious_windows_spelling: "register_repo_root: suspicious Windows path spelling rejected",
  unvettable_chain: "register_repo_root: unvettable path ancestry rejected before filesystem access"
};
async function izr(e, o) {
  let t, i;
  try {
    t = it(e)
  } catch {
    throw new x("register_repo_root: target path could not be resolved", "register_repo_root: path expansion failed", "expansion_failed")
  }
  let r = hN(e, t, o().trustedNetworkDirectories);
  if (!r.ok) throw new x("register_repo_root: target is a network path, an obfuscated spelling, or a path whose directories and symbolic links could not all be examined, which cannot be registered", f[r.reason], d(r.reason));
  try {
    i = await c(t)
  } catch (a) {
    throw new x("register_repo_root: target path could not be resolved", "register_repo_root: path resolution failed", fm(a) || o_(a) ? "resolve_failed" : void 0)
  }
  let s = yN(i, o().trustedNetworkDirectories);
  if (s !== void 0) throw new x("register_repo_root: target is a network path, an obfuscated spelling, or a path whose directories and symbolic links could not all be examined, which cannot be registered", "register_repo_root: resolved path rejected by the spelling screen", d(s));
  let n;
  try {
    n = await _(i)
  } catch (a) {
    throw new x("register_repo_root: target path could not be resolved", "register_repo_root: target stat failed", fm(a) || o_(a) ? "stat_failed" : void 0)
  }
  if (!n.allowed) throw new x(`register_repo_root: ${Xt(e)} ${n.reason}`, "register_repo_root: target is not a directory", n.code);
  return i
}
async function eyn(e, o) {
  let t = await izr(e, o),
    i = await u(o().additionalWorkingDirectories),
    r = szr(t, ke(), i.filter((s) => s.source === "cliArg").map((s) => s.resolved), i.map((s) => s.resolved));
  if (!r.allowed) throw new x(`register_repo_root: ${Xt(e)} ${r.reason}`, "register_repo_root: directory is outside the allowed registration scope", r.code);
  return t
}
export {
  ozr,
  Iet,
  szr,
  izr,
  eyn
};
