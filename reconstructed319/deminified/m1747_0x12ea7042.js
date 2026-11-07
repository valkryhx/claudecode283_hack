// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { Ee, bP, y0, h$e, RKn, NN, nrt } from "B:/~BUN/root/chunk-game8aqv.js";
import { f } from "B:/~BUN/root/chunk-drx9cnw1.js";
import { k, qt } from "B:/~BUN/root/chunk-y2g9f85n.js";
import { En } from "B:/~BUN/root/chunk-h4acfc9y.js";
import { i } from "B:/~BUN/root/chunk-j6pt0v41.js";
import { t, ps, Mh } from "B:/~BUN/root/chunk-2pp12te6.js";
import { tf } from "B:/~BUN/root/chunk-jdtvghyw.js";
import { a } from "B:/~BUN/root/chunk-xrwdh0g4.js";
import { PR, Ga } from "B:/~BUN/root/chunk-7wn6n2hd.js";
import { xSt, ZJ, wdn } from "B:/~BUN/root/chunk-1g25msn4.js";
import { l } from "B:/~BUN/root/chunk-mb9chr1y.js";
import { pe } from "B:/~BUN/root/chunk-thn0wk2x.js";
import { mt } from "B:/~BUN/root/chunk-d10hhz4p.js";
import { Cp } from "B:/~BUN/root/chunk-5xx1vfdh.js";
import { mn } from "B:/~BUN/root/chunk-44q965xg.js";
import { EU, Xh, YL, iMs, het } from "B:/~BUN/root/chunk-1ks9vs37.js";
import { e2n } from "B:/~BUN/root/chunk-1x03q1j7.js";
import { Ad } from "B:/~BUN/root/chunk-x4zqd4cy.js";
import { JPn } from "B:/~BUN/root/chunk-4vcs773m.js";
import { ogr, n1, cL } from "B:/~BUN/root/chunk-cxcakgnv.js";
import { Fi, gE, rp, w7e, IGe, BLe } from "B:/~BUN/root/chunk-j05gjqgd.js";
import { Xq } from "B:/~BUN/root/chunk-79dw4seg.js";
import { Itn } from "B:/~BUN/root/chunk-tdekz3md.js";
import { ode, hre, s8e, $h, uRn, Fvi, j8t, W8t, Sv, PAn, $vi, Wvi, hro, G8e, bI, Vfr, qvi, YOt, Wi, Jct } from "B:/~BUN/root/chunk-27h4st9h.js";
import { TFn } from "B:/~BUN/root/chunk-jh04j3yr.js";
import { _D, Wl } from "B:/~BUN/root/chunk-detjgwj4.js";
import { Ge } from "B:/~BUN/root/chunk-z7bs0q82.js";
import { Zhe } from "B:/~BUN/root/chunk-er9gv3xw.js";
import { AMn } from "B:/~BUN/root/chunk-gg9ygjtf.js";
import { L } from "B:/~BUN/root/chunk-5ha2avah.js";
import { homedir as N } from "os";
import { realpath as x, stat as E } from "fs/promises";
import { dirname as T, parse as O } from "path";
var b = "Cd";
function D(e, r) {
  let s = L([...ps(e.requestedPath), e.canonicalPath]),
    n = L([e.canonicalPath, BLe(e.canonicalPath)]),
    c = (o, u, h) => h.some(item => B(o, u, item));
  for (let rule of Wl(r)) {
    if (rule.ruleValue.toolName !== b) continue;
    let ruleContent = rule.ruleValue.ruleContent;
    if (ruleContent === void 0 || c(ruleContent, rule.source, s)) return {
      result: "blockedByRule",
      rule: rule
    };
  }
  let d = _D(r).filter(item => item.ruleValue.toolName === b);
  if (d.length === 0) return {
    result: "allowed"
  };
  for (let o of d) {
    let ruleContent_2 = o.ruleValue.ruleContent;
    if (ruleContent_2 === void 0 || c(ruleContent_2, o.source, n)) return {
      result: "allowed"
    };
  }
  return {
    result: "outsideAllowedPatterns",
    allowedPatterns: d.map(item => item.ruleValue.ruleContent).filter(item => item !== void 0)
  };
}
function B(e, r, s) {
  let {
      relativePattern: relativePattern,
      root: root
    } = IGe(e, r),
    d = w7e(root ?? pe(), s);
  if (d === ".." || d.startsWith("../")) return !1;
  let o = relativePattern.replace(/\/{2,}/g, "/").replace(/^\//, "").replace(/\/$/, "");
  return F(o).test(d);
}
function F(e) {
  let r = "^";
  for (let s = 0; s < e.length; s++) {
    let n = e[s];
    if (s === 0 && n === "*" && e[1] === "*" && e[2] === "/") r += "(?:.*/)?", s += 2;else if (n === "/" && e[s + 1] === "*" && e[s + 2] === "*") r += "(/.*)?", s += 2;else if (n === "*") {
      if (e[s + 1] === "*") r += ".*", s++;else r += "[^/]+";
    } else if ("\\^$.|?+()[]{}".includes(n)) r += `\\${n}`;else r += n;
  }
  return new RegExp(`${r}$`, "i");
}
async function aOe(e, r) {
  if (await G(e)) return NN(!0), nrt(!0), !1;
  return iMs(e, r);
}
async function G(e) {
  let r = async s => {
    let n = s;
    try {
      n = await x(s);
    } catch {}
    return Cp(En(n));
  };
  return (await r(e)) === (await r(N()));
}
async function UGr(e, r) {
  let s = mt(e);
  try {
    if (!(await E(s)).isDirectory()) return {
      result: "not_a_directory",
      path: s,
      parent: T(s)
    };
  } catch (error) {
    if (!qt(error)) a(Object.assign(Error("cd: unexpected stat errno"), {
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
  let c = En(n);
  if (c === pe() && c === Ee()) return {
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
function BGr(e, r, s = c => c, n) {
  let c = n?.terminalAffordances !== !1,
    d = n?.display ?? (o => o);
  if (e = d(e), r.result === "blockedByRule") {
    let o = d(mn(r.rule.ruleValue)),
      u = s8e(r.rule.source);
    if (r.rule.ruleValue.ruleContent === void 0) return c ? `Can't move to ${s(e)} \u2014 /cd is turned off by the ${s(o)} rule in ${u}. Update the rule in /permissions to move between directories again.` : `Can't move to ${s(e)} \u2014 directory changes are turned off by the ${s(o)} permission rule in ${u}.`;
    return c ? `Can't move to ${s(e)} \u2014 it's excluded by the ${s(o)} rule in ${u}. Pick a directory outside that rule, or update it in /permissions.` : `Can't move to ${s(e)} \u2014 it's excluded by the ${s(o)} permission rule in ${u}. Pick a directory outside that rule.`;
  }
  return c ? `Can't move to ${s(e)} \u2014 /cd is limited to directories matching ${r.allowedPatterns.map(item => s(d(item))).join(", ")}. Pick a matching directory, or add a Cd rule in /permissions.` : `Can't move to ${s(e)} \u2014 directory changes are limited to ${r.allowedPatterns.map(item => s(d(item))).join(", ")}. Pick a matching directory.`;
}
async function H(e, r, s) {
  if (i.CLAUDE_CODE_DISABLE_CLAUDE_MDS) return "";
  let n = new Set();
  for (let y of await Sv(e, !1, s)) n.add(Cp(y.path));
  let c = [],
    d = r;
  while (d !== O(d).root) c.push(d), d = T(d);
  let o = j8t(r),
    {
      held: held,
      keep: keep
    } = Fvi(e),
    g = [];
  for (let y of c.reverse()) g.push(...(await hro(y, r, n, {
    skipProject: W8t(y, o),
    held: y === r ? held?.within : held?.above(y)
  })));
  return keep(), Wvi(g);
}
async function $2t(e, r, s, {
  storageV5: storageV5,
  credentials: credentials,
  freshSession = !1,
  confirmFresh: confirmFresh,
  requestBuilt: requestBuilt
} = {}) {
  let h = pe(),
    prevCwd = Ee(),
    y = L([prevCwd, h]),
    departedAdditionalDirectories = L([...(Ga("projectSettings")?.permissions?.additionalDirectories ?? []), ...(Ga("localSettings")?.permissions?.additionalDirectories ?? [])].flatMap(item => {
      try {
        return y.map(P => mt(item, P));
      } catch {
        return [];
      }
    }));
  uRn(r), y0(pe());
  let transcriptRelocated = !0;
  try {
    await YOt(storageV5);
  } catch (error) {
    transcriptRelocated = !1;
    let P = !1;
    try {
      Mh(h), P = !0;
    } catch {
      t(`directory move: transcript move failed and rollback chdir failed; completing the move with the transcript left in its previous home: ${error}`, {
        level: "error"
      });
    }
    if (P) throw $h(h), y0(prevCwd), error;
  }
  if (transcriptRelocated) try {
    await JPn(pe(), storageV5);
  } catch (error) {
    t(`directory move: bg session state rehome failed (continuing): ${error}`, {
      level: "error"
    });
  }
  het();
  try {
    await Fi.rehome();
  } catch (error) {
    t(`directory move: re-targeting the settings watcher failed (continuing with the previous watch): ${error}`, {
      level: "error"
    });
  }
  try {
    Xq(), Fi.notifyChange("projectSettings", {
      prevCwd: prevCwd,
      countsAsStart: freshSession && confirmFresh?.() === !0
    });
  } catch (error) {
    t(`directory move: re-resolving settings and hooks for the new directory failed (continuing): ${error}`, {
      level: "error"
    });
  }
  try {
    await Zhe.rehome();
  } catch (error) {
    t(`directory move: re-targeting the skill watcher failed (continuing with the previous watch): ${error}`, {
      level: "error"
    });
  }
  let fresh_session = freshSession && (confirmFresh === void 0 || confirmFresh());
  if (fresh_session) h$e(pe());else try {
    await Jct(await ode("skills", pe()));
  } catch (error) {
    t(`directory move: registering the new directory's skills failed (continuing without them): ${error}`, {
      level: "error"
    });
  }
  if (ZJ(), wdn(e), Ad()?.refreshGitBranch?.(), Ge.refreshConfig(), ogr(), l("tengu_cd_command", {
    source: f(s),
    fresh_session: fresh_session
  }), fresh_session) {
    try {
      hre(), PAn(e, "session_start"), $vi(e), qvi(e), TFn.of(e).clear(), Vfr(e), RKn(null), e2n(), xSt(), rp.cache.clear?.(), gE(storageV5), EU().reset(), G8e(e), bI(e, storageV5, credentials);
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
  let S = tf(r),
    j = s === "cd_command" ? "via /cd" : "by the user",
    A = requestBuilt === void 0 || requestBuilt() ? "The environment block at the start of this conversation still names the " + "previous directory \u2014 that information is stale. " : "",
    M = Wi(`The session's working directory has changed to ${S} (${j}). ` + A + `All tool calls and relative paths now resolve from ${S}. Project settings (permission rules, hooks), project MCP servers, and project skills now come from ${S}; its CLAUDE.md, if any, follows below. Environment variables set by the previous directory's ` + "settings stay in effect for this process \u2014 they cannot be unset \u2014 and " + "the new directory's settings env is applied on top of them."),
    projectGrantsGated = !1;
  try {
    projectGrantsGated = !i.CLAUDE_CODE_SANDBOXED && !bP() && !Xh() && Itn();
  } catch (error) {
    t(`directory move: probing the gated project grants failed (continuing): ${error}`, {
      level: "error"
    });
  }
  let gatedNotice = projectGrantsGated ? Wi(`Note: ${S} declares project permission rules and/or additional directories in its settings, but they are NOT applied \u2014 the workspace is trusted only through a parent directory's grant, and project-scoped grants require trusting this directory explicitly. Tool calls those rules would have pre-approved will ask for permission.`) : "";
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
function jGr() {
  het(), Xq(), Fi.notifyChange("projectSettings", {
    trustFlip: !0
  });
}
function WGr(e) {
  if (e.gatedNotice === "") return e.modelMessage;
  return e.modelMessage.replace(e.gatedNotice, Wi("The user trusted this directory explicitly: its project permission rules and additional directories are now applied."));
}
function Vsa(e, r) {
  return AMn.test(e) ? r : e;
}
async function Hha(e, r) {
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
    n = n1(e.path, mt(e.path), r.toolPermissionContext.trustedNetworkDirectories, {
      allowLinkTextClimbs: !0
    }).ok;
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
  let c = await UGr(e.path.trim(), r.toolPermissionContext),
    d = "directory" in c ? c.directory : c.path;
  if (AMn.test(d)) return {
    kind: "response",
    response: {
      status: "rejected",
      reason: "unsafe_path",
      message: "The target path contains invisible or non-printing characters (control, formatting, zero-width, or non-standard space characters such as the narrow no-break space macOS puts in screenshot folder names), so it cannot safely cross the trust boundary. The path is deliberately not echoed back."
    }
  };
  if ("directory" in c && cL(c.directory, r.toolPermissionContext.trustedNetworkDirectories) !== void 0) return {
    kind: "response",
    response: {
      status: "rejected",
      reason: "unsafe_path",
      message: "The target resolved to a network path or an obfuscated spelling, which cannot be set as the working directory from a remote host. The path is deliberately not echoed back."
    }
  };
  if (c.result === "not_found") return {
    kind: "response",
    response: {
      status: "rejected",
      reason: "not_found",
      message: `Couldn't find a directory at ${c.path}.`
    }
  };
  if (c.result === "not_a_directory") return {
    kind: "response",
    response: {
      status: "rejected",
      reason: "not_a_directory",
      message: `${c.path} is not a directory.`
    }
  };
  if (c.result === "blocked_by_rule") return {
    kind: "response",
    response: {
      status: "rejected",
      reason: "blocked_by_rule",
      message: Vsa(BGr(c.directory, c.check, void 0, {
        terminalAffordances: !1
      }), "A Cd permission rule blocks this directory. The rule text contains control or invisible characters, so it is not echoed here \u2014 check the Cd(...) entries in your settings.")
    }
  };
  if (c.result === "same") return {
    kind: "response",
    response: {
      status: "ok",
      cwd: c.directory,
      changed: !1,
      transcript_relocated: !0
    }
  };
  let directory = c.directory;
  if (!YL(directory)) {
    let p = PR(directory),
      trust_root = p != null && p !== directory && !AMn.test(p) ? p : void 0;
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
    await aOe(directory, r.storageV5);
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
    } = await $2t(r.session, directory, "set_cwd", {
      storageV5: r.storageV5,
      credentials: r.credentials,
      freshSession: freshSession_3,
      confirmFresh: () => !r.isBusy() && r.isFreshSession(),
      requestBuilt: r.requestBuilt
    });
  try {
    if (freshSession_2) r.settlePlanAutoMode();
  } catch (error) {
    t(`set_cwd: settling the plan setting for the new directory failed (continuing): ${error}`, {
      level: "error"
    });
  }
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
  let w = pe();
  return {
    kind: "response",
    response: {
      status: "ok",
      cwd: AMn.test(w) ? directory : w,
      changed: !0,
      transcript_relocated: g
    },
    freshSession: freshSession_2
  };
}
export { aOe, UGr, BGr, $2t, jGr, WGr, Vsa, Hha };