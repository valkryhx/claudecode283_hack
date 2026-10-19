// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { L, ke, iP, aP, jTe, Lgn, bF, qGe } from "B:/~BUN/root/chunk-rpez7z7a.js";
import { c } from "B:/~BUN/root/chunk-jthpk6wv.js";
import { k, Wt } from "B:/~BUN/root/chunk-3aez4b53.js";
import { $n } from "B:/~BUN/root/chunk-4bx17ygx.js";
import { a } from "B:/~BUN/root/chunk-yt0knyw7.js";
import { xo, vg, Ru, t } from "B:/~BUN/root/chunk-6za2ez23.js";
import { l } from "B:/~BUN/root/chunk-c09hf5e4.js";
import { Qk, me } from "B:/~BUN/root/chunk-1gpjpba6.js";
import { Ufn, D4, H1t } from "B:/~BUN/root/chunk-2zk4vqr8.js";
import { i } from "B:/~BUN/root/chunk-1kfn24jp.js";
import { ce } from "B:/~BUN/root/chunk-nxwmyxnk.js";
import { it } from "B:/~BUN/root/chunk-ek28wssa.js";
import { wp } from "B:/~BUN/root/chunk-xrp58hm9.js";
import { Sn } from "B:/~BUN/root/chunk-a0k8qg0d.js";
import { HM, vm, XN, KDo, OWe } from "B:/~BUN/root/chunk-hb6x4e3n.js";
import { kfn } from "B:/~BUN/root/chunk-m94tqsvv.js";
import { Rd } from "B:/~BUN/root/chunk-aqd86p9a.js";
import { tZt } from "B:/~BUN/root/chunk-nq10jsxs.js";
import { hN, yN, x1n } from "B:/~BUN/root/chunk-dn8rakwm.js";
import { Ca, lon, d1e, NOe, kon } from "B:/~BUN/root/chunk-c44qc88s.js";
import { Bj } from "B:/~BUN/root/chunk-0n2201tc.js";
import { tZ, K8, pfs, ixt, axt, wS, b9t, mfs, _fs, ygr, _He, DR, oDn, kfs, UHe, Rp, Ylt, od, o7t } from "B:/~BUN/root/chunk-9grc6xh0.js";
import { yw, Jd } from "B:/~BUN/root/chunk-9w4ppz44.js";
import { msn } from "B:/~BUN/root/chunk-3d7bmmrg.js";
import { IN, dc } from "B:/~BUN/root/chunk-ses0c36n.js";
import { Je } from "B:/~BUN/root/chunk-r0jnxjth.js";
import { E7t } from "B:/~BUN/root/chunk-k382hx6g.js";
import { Uoe } from "B:/~BUN/root/chunk-56qrk24m.js";
import { homedir as N } from "os";
import { realpath as x, stat as E } from "fs/promises";
import { dirname as j, parse as O } from "path";
var b = "Cd";
function D(e, r) {
  let s = L([...xo(e.requestedPath), e.canonicalPath]),
    n = L([e.canonicalPath, kon(e.canonicalPath)]),
    d = (o, m, f) => f.some(item => F(o, m, item));
  for (let rule of dc(r)) {
    if (rule.ruleValue.toolName !== b) continue;
    let ruleContent = rule.ruleValue.ruleContent;
    if (ruleContent === void 0 || d(ruleContent, rule.source, s)) return {
      result: "blockedByRule",
      rule: rule
    };
  }
  let u = IN(r).filter(item => item.ruleValue.toolName === b);
  if (u.length === 0) return {
    result: "allowed"
  };
  for (let o of u) {
    let ruleContent_2 = o.ruleValue.ruleContent;
    if (ruleContent_2 === void 0 || d(ruleContent_2, o.source, n)) return {
      result: "allowed"
    };
  }
  return {
    result: "outsideAllowedPatterns",
    allowedPatterns: u.map(item => item.ruleValue.ruleContent).filter(item => item !== void 0)
  };
}
function F(e, r, s) {
  let {
      relativePattern: relativePattern,
      root: root
    } = NOe(e, r),
    u = d1e(root ?? ce(), s);
  if (u === ".." || u.startsWith("../")) return !1;
  let o = relativePattern.replace(/\/{2,}/g, "/").replace(/^\//, "").replace(/\/$/, "");
  return B(o).test(u);
}
function B(e) {
  let r = "^";
  for (let s = 0; s < e.length; s++) {
    let n = e[s];
    if (s === 0 && n === "*" && e[1] === "*" && e[2] === "/") r += "(?:.*/)?", s += 2;else if (n === "/" && e[s + 1] === "*" && e[s + 2] === "*") r += "(/.*)?", s += 2;else if (n === "*") {
      if (e[s + 1] === "*") r += ".*", s++;else r += "[^/]+";
    } else if ("\\^$.|?+()[]{}".includes(n)) r += `\\${n}`;else r += n;
  }
  return new RegExp(`${r}$`, "i");
}
async function y_e(e, r) {
  if (await G(e)) return bF(!0), qGe(!0), !1;
  return KDo(e, r);
}
async function G(e) {
  let r = async s => {
    let n = s;
    try {
      n = await x(s);
    } catch {}
    return wp($n(n));
  };
  return (await r(e)) === (await r(N()));
}
async function brr(e, r) {
  let s = it(e);
  try {
    if (!(await E(s)).isDirectory()) return {
      result: "not_a_directory",
      path: s,
      parent: j(s)
    };
  } catch (error) {
    if (!Wt(error)) l(Object.assign(Error("cd: unexpected stat errno"), {
      code: k(error)
    }));
    return {
      result: "not_found",
      path: s
    };
  }
  let n = s;
  try {
    n = await x(s);
  } catch {
    n = s;
  }
  let d = $n(n);
  if (d === ce() && d === ke()) return {
    result: "same",
    directory: n
  };
  let check = D({
    requestedPath: s,
    canonicalPath: n
  }, r);
  if (check.result !== "allowed") return {
    result: "blocked_by_rule",
    directory: n,
    check: check
  };
  return {
    result: "ok",
    directory: n
  };
}
function Srr(e, r, s = d => d, n) {
  let d = n?.terminalAffordances !== !1,
    u = n?.display ?? (o => o);
  if (e = u(e), r.result === "blockedByRule") {
    let o = u(Sn(r.rule.ruleValue)),
      m = UHe(r.rule.source);
    if (r.rule.ruleValue.ruleContent === void 0) return d ? `Can't move to ${s(e)} \u2014 /cd is turned off by the ${s(o)} rule in ${m}. Update the rule in /permissions to move between directories again.` : `Can't move to ${s(e)} \u2014 directory changes are turned off by the ${s(o)} permission rule in ${m}.`;
    return d ? `Can't move to ${s(e)} \u2014 it's excluded by the ${s(o)} rule in ${m}. Pick a directory outside that rule, or update it in /permissions.` : `Can't move to ${s(e)} \u2014 it's excluded by the ${s(o)} permission rule in ${m}. Pick a directory outside that rule.`;
  }
  return d ? `Can't move to ${s(e)} \u2014 /cd is limited to directories matching ${r.allowedPatterns.map(item => s(u(item))).join(", ")}. Pick a matching directory, or add a Cd rule in /permissions.` : `Can't move to ${s(e)} \u2014 directory changes are limited to ${r.allowedPatterns.map(item => s(u(item))).join(", ")}. Pick a matching directory.`;
}
async function H(e, r, s) {
  if (a.CLAUDE_CODE_DISABLE_CLAUDE_MDS) return "";
  let n = new Set();
  for (let y of await wS(e, !1, s)) n.add(wp(y.path));
  let d = [],
    u = r;
  while (u !== O(u).root) d.push(u), u = j(u);
  let o = ixt(r),
    {
      held: held,
      keep: keep
    } = pfs(e),
    g = [];
  for (let y of d.reverse()) g.push(...(await ygr(y, r, n, {
    skipProject: axt(y, o),
    held: y === r ? held?.within : held?.above(y)
  })));
  return keep(), _fs(g);
}
async function dkt(e, r, s, {
  storageV5: storageV5,
  credentials: credentials,
  freshSession = !1,
  confirmFresh: confirmFresh,
  requestBuilt: requestBuilt
} = {}) {
  let f = ce(),
    prevCwd = ke(),
    y = L([prevCwd, f]),
    departedAdditionalDirectories = L([...(me("projectSettings")?.permissions?.additionalDirectories ?? []), ...(me("localSettings")?.permissions?.additionalDirectories ?? [])].flatMap(item => {
      try {
        return y.map(P => it(item, P));
      } catch {
        return [];
      }
    }));
  vg(r), Rp(r), aP(ce());
  let transcriptRelocated = !0;
  try {
    await Ylt(storageV5);
  } catch (error) {
    transcriptRelocated = !1;
    let P = !1;
    try {
      vg(f), P = !0;
    } catch {
      t(`directory move: transcript move failed and rollback chdir failed; completing the move with the transcript left in its previous home: ${error}`, {
        level: "error"
      });
    }
    if (P) throw Rp(f), aP(prevCwd), error;
  }
  if (transcriptRelocated) try {
    await tZt(ce(), storageV5);
  } catch (error) {
    t(`directory move: bg session state rehome failed (continuing): ${error}`, {
      level: "error"
    });
  }
  OWe();
  try {
    await Ca.rehome();
  } catch (error) {
    t(`directory move: re-targeting the settings watcher failed (continuing with the previous watch): ${error}`, {
      level: "error"
    });
  }
  try {
    Bj(), Ca.notifyChange("projectSettings", {
      prevCwd: prevCwd
    });
  } catch (error) {
    t(`directory move: re-resolving settings and hooks for the new directory failed (continuing): ${error}`, {
      level: "error"
    });
  }
  try {
    await Uoe.rehome();
  } catch (error) {
    t(`directory move: re-targeting the skill watcher failed (continuing with the previous watch): ${error}`, {
      level: "error"
    });
  }
  let fresh_session = freshSession && (confirmFresh === void 0 || confirmFresh());
  if (fresh_session) jTe(ce());else try {
    await o7t(await tZ("skills", ce()));
  } catch (error) {
    t(`directory move: registering the new directory's skills failed (continuing without them): ${error}`, {
      level: "error"
    });
  }
  if (D4(), H1t(e), Rd()?.refreshGitBranch?.(), Je.refreshConfig(), x1n(), i("tengu_cd_command", {
    source: c(s),
    fresh_session: fresh_session
  }), fresh_session) {
    try {
      K8(), b9t(e, "session_start"), mfs(e), kfs(e), msn.of(e).clear(), oDn(e), Lgn(null), kfn(), Ufn(), Jd.cache.clear?.(), yw(storageV5), HM().reset(), _He(e), DR(e, storageV5, credentials);
    } catch (error) {
      t(`directory move: re-deriving start-of-session state for the new directory failed (continuing): ${error}`, {
        level: "error"
      });
    }
    return {
      modelMessage: "",
      transcriptRelocated: transcriptRelocated,
      projectGrantsGated: !1,
      gatedNotice: "",
      departedAdditionalDirectories: departedAdditionalDirectories,
      freshSession: !0
    };
  }
  let C = "";
  try {
    C = await H(e, r, storageV5);
  } catch (error) {
    t(`directory move: loading the new directory's memory context failed (continuing without it): ${error}`, {
      level: "error"
    });
  }
  let S = Ru(r),
    T = s === "cd_command" ? "via /cd" : "by the user",
    A = requestBuilt === void 0 || requestBuilt() ? "The environment block at the start of this conversation still names the " + "previous directory \u2014 that information is stale. " : "",
    M = od(`The session's working directory has changed to ${S} (${T}). ` + A + `All tool calls and relative paths now resolve from ${S}. Project settings (permission rules, hooks), project MCP servers, and project skills now come from ${S}; its CLAUDE.md, if any, follows below. Environment variables set by the previous directory's ` + "settings stay in effect for this process \u2014 they cannot be unset \u2014 and " + "the new directory's settings env is applied on top of them."),
    projectGrantsGated = !1;
  try {
    projectGrantsGated = !a.CLAUDE_CODE_SANDBOXED && !iP() && !vm() && lon();
  } catch (error) {
    t(`directory move: probing the gated project grants failed (continuing): ${error}`, {
      level: "error"
    });
  }
  let gatedNotice = projectGrantsGated ? od(`Note: ${S} declares project permission rules and/or additional directories in its settings, but they are NOT applied \u2014 the workspace is trusted only through a parent directory's grant, and project-scoped grants require trusting this directory explicitly. Tool calls those rules would have pre-approved will ask for permission.`) : "";
  return {
    modelMessage: [M, gatedNotice, C].filter(Boolean).join(`

`),
    transcriptRelocated: transcriptRelocated,
    projectGrantsGated: projectGrantsGated,
    gatedNotice: gatedNotice,
    departedAdditionalDirectories: departedAdditionalDirectories,
    freshSession: !1
  };
}
function wrr() {
  OWe(), Bj(), Ca.notifyChange("projectSettings", {
    trustFlip: !0
  });
}
function vrr(e) {
  if (e.gatedNotice === "") return e.modelMessage;
  return e.modelMessage.replace(e.gatedNotice, od("The user trusted this directory explicitly: its project permission rules and additional directories are now applied."));
}
function P5s(e, r) {
  return E7t.test(e) ? r : e;
}
async function yti(e, r) {
  if (r.isBusy()) return {
    kind: "response",
    response: {
      status: "rejected",
      reason: "busy",
      message: "A turn is in progress \u2014 the working directory can only change while the session is idle. Wait for the turn to finish (or interrupt it), then retry."
    }
  };
  if (typeof e.path !== "string" || e.path.trim() === "") return {
    kind: "invalid",
    message: "set_cwd: invalid request \u2014 path must be a non-empty string"
  };
  let s = e.trust_accepted === !0;
  if (s && typeof e.trusted_directory !== "string") return {
    kind: "invalid",
    message: "set_cwd: invalid request \u2014 trust_accepted requires trusted_directory (echo the directory from the needs_trust response)"
  };
  let n = !1;
  try {
    n = hN(e.path, it(e.path), r.toolPermissionContext.trustedNetworkDirectories).ok;
  } catch {
    n = !1;
  }
  if (!n) return {
    kind: "response",
    response: {
      status: "rejected",
      reason: "unsafe_path",
      message: "The target is a network path or an obfuscated spelling, which cannot be set as the working directory from a remote host. The path is deliberately not echoed back."
    }
  };
  let d = await brr(e.path.trim(), r.toolPermissionContext),
    u = "directory" in d ? d.directory : d.path;
  if (E7t.test(u)) return {
    kind: "response",
    response: {
      status: "rejected",
      reason: "unsafe_path",
      message: "The target path contains invisible or non-printing characters (control, formatting, zero-width, or non-standard space characters such as the narrow no-break space macOS puts in screenshot folder names), so it cannot safely cross the trust boundary. The path is deliberately not echoed back."
    }
  };
  if ("directory" in d && yN(d.directory, r.toolPermissionContext.trustedNetworkDirectories) !== void 0) return {
    kind: "response",
    response: {
      status: "rejected",
      reason: "unsafe_path",
      message: "The target resolved to a network path or an obfuscated spelling, which cannot be set as the working directory from a remote host. The path is deliberately not echoed back."
    }
  };
  if (d.result === "not_found") return {
    kind: "response",
    response: {
      status: "rejected",
      reason: "not_found",
      message: `Couldn't find a directory at ${d.path}.`
    }
  };
  if (d.result === "not_a_directory") return {
    kind: "response",
    response: {
      status: "rejected",
      reason: "not_a_directory",
      message: `${d.path} is not a directory.`
    }
  };
  if (d.result === "blocked_by_rule") return {
    kind: "response",
    response: {
      status: "rejected",
      reason: "blocked_by_rule",
      message: P5s(Srr(d.directory, d.check, void 0, {
        terminalAffordances: !1
      }), "A Cd permission rule blocks this directory. The rule text contains control or invisible characters, so it is not echoed here \u2014 check the Cd(...) entries in your settings.")
    }
  };
  if (d.result === "same") return {
    kind: "response",
    response: {
      status: "ok",
      cwd: d.directory,
      changed: !1,
      transcript_relocated: !0
    }
  };
  let directory = d.directory;
  if (!XN(directory)) {
    let h = Qk(directory),
      trust_root = h != null && h !== directory && !E7t.test(h) ? h : void 0;
    if (!s) return {
      kind: "response",
      response: trust_root != null ? {
        status: "needs_trust",
        directory: directory,
        trust_root: trust_root
      } : {
        status: "needs_trust",
        directory: directory
      }
    };
    if (e.trusted_directory !== directory) return {
      kind: "response",
      response: trust_root != null ? {
        status: "needs_trust",
        directory: directory,
        trust_root: trust_root
      } : {
        status: "needs_trust",
        directory: directory
      }
    };
    await y_e(directory, r.storageV5);
  }
  if (r.isBusy()) return {
    kind: "response",
    response: {
      status: "rejected",
      reason: "busy",
      message: "A turn started while the request was being validated. Retry when the session is idle."
    }
  };
  let freshSession_3 = r.isFreshSession(),
    {
      modelMessage: modelMessage,
      transcriptRelocated: g,
      departedAdditionalDirectories: departedAdditionalDirectories_2,
      freshSession: freshSession_2
    } = await dkt(r.session, directory, "set_cwd", {
      storageV5: r.storageV5,
      credentials: r.credentials,
      freshSession: freshSession_3,
      confirmFresh: () => !r.isBusy() && r.isFreshSession(),
      requestBuilt: r.requestBuilt
    });
  try {
    r.retireDepartedAdditionalDirectories?.(departedAdditionalDirectories_2);
  } catch (error) {
    t(`set_cwd: retiring the previous project's additional directories failed (continuing): ${error}`, {
      level: "error"
    });
  }
  try {
    if (modelMessage) r.enqueueMoveNotice(modelMessage);
  } catch (error) {
    t(`set_cwd: enqueueing the move notice failed (continuing): ${error}`, {
      level: "error"
    });
  }
  let w = ce();
  return {
    kind: "response",
    response: {
      status: "ok",
      cwd: E7t.test(w) ? directory : w,
      changed: !0,
      transcript_relocated: g
    },
    freshSession: freshSession_2
  };
}
export { y_e, brr, Srr, dkt, wrr, vrr, P5s, yti };