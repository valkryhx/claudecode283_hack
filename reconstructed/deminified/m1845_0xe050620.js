// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { we, sT, iT, Dde, djt, gH, Kmt } from "B:/~BUN/root/chunk-4rk7cwxz.js";
import { c } from "B:/~BUN/root/chunk-kks4mj3w.js";
import { v, Et } from "B:/~BUN/root/chunk-bgthmgyc.js";
import { xn } from "B:/~BUN/root/chunk-54p0h65d.js";
import { a } from "B:/~BUN/root/chunk-nkmmqnq7.js";
import { To, mf, t } from "B:/~BUN/root/chunk-qe2zga5e.js";
import { d } from "B:/~BUN/root/chunk-zs3ycjed.js";
import { V0, he } from "B:/~BUN/root/chunk-3rzkfay5.js";
import { DBt, RY, Gft } from "B:/~BUN/root/chunk-339q6g5w.js";
import { i } from "B:/~BUN/root/chunk-728mwbhs.js";
import { oe } from "B:/~BUN/root/chunk-shgdrs47.js";
import { Mn } from "B:/~BUN/root/chunk-1f9marcm.js";
import { Ye } from "B:/~BUN/root/chunk-qqgpf856.js";
import { Rf } from "B:/~BUN/root/chunk-8hs4bwwk.js";
import { N0, Yf, AI, _Fr, IRe } from "B:/~BUN/root/chunk-gf53qpk6.js";
import { wBt } from "B:/~BUN/root/chunk-fct6vke8.js";
import { Vl } from "B:/~BUN/root/chunk-n2rcpjj1.js";
import { wkr } from "B:/~BUN/root/chunk-9sy3w2pa.js";
import { Hi, mDt, nN, Bd, ZTe, t6e, DDt } from "B:/~BUN/root/chunk-d36ctpgs.js";
import { $z } from "B:/~BUN/root/chunk-mrt797ke.js";
import { Use, HG, _nt, bnt, pS, VCt, zdo, Gdo, kMn, hve, pk, XJt, Xdo, Ove, jp, SAt, jVe, Qa, vxt } from "B:/~BUN/root/chunk-3jyp964r.js";
import { Ky, xl } from "B:/~BUN/root/chunk-ewv6w8xv.js";
import { Ge } from "B:/~BUN/root/chunk-d8zzdckb.js";
import { N0t } from "B:/~BUN/root/chunk-70qv5h0a.js";
import { uG } from "B:/~BUN/root/chunk-p5693x4a.js";
import { sU, iU } from "B:/~BUN/root/chunk-mkb49049.js";
import { wc } from "B:/~BUN/root/chunk-z9xwt6re.js";
import { L } from "B:/~BUN/root/chunk-z1enakv9.js";
import { homedir as E } from "os";
import { realpath as j, stat as O } from "fs/promises";
import { dirname as T, parse as G } from "path";
var D = "Cd";
function x(e, r) {
  let s = L([...To(e.requestedPath), e.canonicalPath]),
    n = L([e.canonicalPath, DDt(e.canonicalPath)]),
    l = (o, m, h) => h.some(item => B(o, m, item));
  for (let rule of Bd(r)) {
    if (rule.ruleValue.toolName !== D) continue;
    let ruleContent = rule.ruleValue.ruleContent;
    if (ruleContent === void 0 || l(ruleContent, rule.source, s)) return {
      result: "blockedByRule",
      rule: rule
    };
  }
  let u = nN(r).filter(item => item.ruleValue.toolName === D);
  if (u.length === 0) return {
    result: "allowed"
  };
  for (let o of u) {
    let ruleContent_2 = o.ruleValue.ruleContent;
    if (ruleContent_2 === void 0 || l(ruleContent_2, o.source, n)) return {
      result: "allowed"
    };
  }
  return {
    result: "outsideAllowedPatterns",
    allowedPatterns: u.map(item => item.ruleValue.ruleContent).filter(item => item !== void 0)
  };
}
function B(e, r, s) {
  let {
      relativePattern: relativePattern,
      root: root
    } = t6e(e, r),
    u = ZTe(root ?? oe(), s);
  if (u === ".." || u.startsWith("../")) return !1;
  let o = relativePattern.replace(/\/{2,}/g, "/").replace(/^\//, "").replace(/\/$/, "");
  return N(o).test(u);
}
function N(e) {
  let r = "^";
  for (let s = 0; s < e.length; s++) {
    let n = e[s];
    if (s === 0 && n === "*" && e[1] === "*" && e[2] === "/") r += "(?:.*/)?", s += 2;else if (n === "/" && e[s + 1] === "*" && e[s + 2] === "*") r += "(/.*)?", s += 2;else if (n === "*") {
      if (e[s + 1] === "*") r += ".*", s++;else r += "[^/]+";
    } else if ("\\^$.|?+()[]{}".includes(n)) r += `\\${n}`;else r += n;
  }
  return new RegExp(`${r}$`, "i");
}
async function XPe(e, r) {
  if (await H(e)) return gH(!0), Kmt(!0), !1;
  return _Fr(e, r);
}
async function H(e) {
  let r = async s => {
    let n = s;
    try {
      n = await j(s);
    } catch {}
    return Rf(xn(n));
  };
  return (await r(e)) === (await r(E()));
}
async function Awn(e, r) {
  let s = Ye(e);
  try {
    if (!(await O(s)).isDirectory()) return {
      result: "not_a_directory",
      path: s,
      parent: T(s)
    };
  } catch (error) {
    if (!Et(error)) d(Object.assign(Error("cd: unexpected stat errno"), {
      code: v(error)
    }));
    return {
      result: "not_found",
      path: s
    };
  }
  let n = s;
  try {
    n = await j(s);
  } catch {
    n = s;
  }
  let l = xn(n);
  if (l === oe() && l === we()) return {
    result: "same",
    directory: n
  };
  let check = x({
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
function xwn(e, r, s = l => l, n) {
  let l = n?.terminalAffordances !== !1,
    u = n?.display ?? (o => o);
  if (e = u(e), r.result === "blockedByRule") {
    let o = u(Mn(r.rule.ruleValue)),
      m = Ove(r.rule.source);
    if (r.rule.ruleValue.ruleContent === void 0) return l ? `Can't move to ${s(e)} \u2014 /cd is turned off by the ${s(o)} rule in ${m}. Update the rule in /permissions to move between directories again.` : `Can't move to ${s(e)} \u2014 directory changes are turned off by the ${s(o)} permission rule in ${m}.`;
    return l ? `Can't move to ${s(e)} \u2014 it's excluded by the ${s(o)} rule in ${m}. Pick a directory outside that rule, or update it in /permissions.` : `Can't move to ${s(e)} \u2014 it's excluded by the ${s(o)} permission rule in ${m}. Pick a directory outside that rule.`;
  }
  return l ? `Can't move to ${s(e)} \u2014 /cd is limited to directories matching ${r.allowedPatterns.map(item => s(u(item))).join(", ")}. Pick a matching directory, or add a Cd rule in /permissions.` : `Can't move to ${s(e)} \u2014 directory changes are limited to ${r.allowedPatterns.map(item => s(u(item))).join(", ")}. Pick a matching directory.`;
}
async function U(e, r, s) {
  if (a.CLAUDE_CODE_DISABLE_CLAUDE_MDS) return "";
  let n = new Set();
  for (let h of await pS(e, !1, s)) n.add(Rf(h.path));
  let l = [],
    u = r;
  while (u !== G(u).root) l.push(u), u = T(u);
  let o = _nt(r),
    m = [];
  for (let h of l.reverse()) m.push(...(await kMn(h, r, n, {
    skipProject: bnt(h, o)
  })));
  return Gdo(m);
}
async function xJe(e, r, s, {
  storageV5: storageV5,
  credentials: credentials,
  freshSession = !1,
  confirmFresh: confirmFresh,
  requestBuilt: requestBuilt
} = {}) {
  let h = oe(),
    prevCwd = we(),
    _ = L([prevCwd, h]),
    departedAdditionalDirectories = L([...(he("projectSettings")?.permissions?.additionalDirectories ?? []), ...(he("localSettings")?.permissions?.additionalDirectories ?? [])].flatMap(item => {
      try {
        return _.map(P => Ye(item, P));
      } catch {
        return [];
      }
    }));
  mf(r), jp(r), iT(oe());
  let transcriptRelocated = !0;
  try {
    await jVe(storageV5);
  } catch (error) {
    transcriptRelocated = !1;
    let P = !1;
    try {
      mf(h), P = !0;
    } catch {
      t(`directory move: transcript move failed and rollback chdir failed; completing the move with the transcript left in its previous home: ${error}`, {
        level: "error"
      });
    }
    if (P) throw jp(h), iT(prevCwd), error;
  }
  if (transcriptRelocated) try {
    await wkr(oe(), storageV5);
  } catch (error) {
    t(`directory move: bg session state rehome failed (continuing): ${error}`, {
      level: "error"
    });
  }
  IRe();
  try {
    await Hi.rehome();
  } catch (error) {
    t(`directory move: re-targeting the settings watcher failed (continuing with the previous watch): ${error}`, {
      level: "error"
    });
  }
  try {
    $z(), Hi.notifyChange("projectSettings", {
      prevCwd: prevCwd
    });
  } catch (error) {
    t(`directory move: re-resolving settings and hooks for the new directory failed (continuing): ${error}`, {
      level: "error"
    });
  }
  try {
    await uG.rehome();
  } catch (error) {
    t(`directory move: re-targeting the skill watcher failed (continuing with the previous watch): ${error}`, {
      level: "error"
    });
  }
  let fresh_session = freshSession && (confirmFresh === void 0 || confirmFresh());
  if (fresh_session) Dde(oe());else try {
    await vxt(await Use("skills", oe()));
  } catch (error) {
    t(`directory move: registering the new directory's skills failed (continuing without them): ${error}`, {
      level: "error"
    });
  }
  if (RY(), Gft(e), Vl()?.refreshGitBranch?.(), Ge.refreshConfig(), SAt(), i("tengu_cd_command", {
    source: c(s),
    fresh_session: fresh_session
  }), fresh_session) {
    try {
      HG(), VCt(e, "session_start"), zdo(e), Xdo(e), N0t.of(e).clear(), XJt(e), djt(null), wBt(), DBt(), xl.cache.clear?.(), Ky(storageV5), N0().reset(), hve(e), pk(e, storageV5, credentials);
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
  let w = "";
  try {
    w = await U(e, r, storageV5);
  } catch (error) {
    t(`directory move: loading the new directory's memory context failed (continuing without it): ${error}`, {
      level: "error"
    });
  }
  let S = wc(r),
    A = s === "cd_command" ? "via /cd" : "by the user",
    M = requestBuilt === void 0 || requestBuilt() ? "The environment block at the start of this conversation still names the " + "previous directory \u2014 that information is stale. " : "",
    F = Qa(`The session's working directory has changed to ${S} (${A}). ` + M + `All tool calls and relative paths now resolve from ${S}. Project settings (permission rules, hooks), project MCP servers, and project skills now come from ${S}; its CLAUDE.md, if any, follows below. Environment variables set by the previous directory's ` + "settings stay in effect for this process \u2014 they cannot be unset \u2014 and " + "the new directory's settings env is applied on top of them."),
    projectGrantsGated = !1;
  try {
    projectGrantsGated = !a.CLAUDE_CODE_SANDBOXED && !sT() && !Yf() && mDt();
  } catch (error) {
    t(`directory move: probing the gated project grants failed (continuing): ${error}`, {
      level: "error"
    });
  }
  let gatedNotice = projectGrantsGated ? Qa(`Note: ${S} declares project permission rules and/or additional directories in its settings, but they are NOT applied \u2014 the workspace is trusted only through a parent directory's grant, and project-scoped grants require trusting this directory explicitly. Tool calls those rules would have pre-approved will ask for permission.`) : "";
  return {
    modelMessage: [F, gatedNotice, w].filter(Boolean).join(`

`),
    transcriptRelocated: transcriptRelocated,
    projectGrantsGated: projectGrantsGated,
    gatedNotice: gatedNotice,
    departedAdditionalDirectories: departedAdditionalDirectories,
    freshSession: !1
  };
}
function Pwn() {
  IRe(), $z(), Hi.notifyChange("projectSettings", {
    trustFlip: !0
  });
}
function Iwn(e) {
  if (e.gatedNotice === "") return e.modelMessage;
  return e.modelMessage.replace(e.gatedNotice, Qa("The user trusted this directory explicitly: its project permission rules and additional directories are now applied."));
}
var C = /[\p{Cc}\p{Cf}\p{Zl}\p{Zp}\p{Default_Ignorable_Code_Point}\u2800]|(?!\u0020)\p{Zs}/u;
function TZn(e) {
  return C.test(e);
}
function B1o(e, r) {
  return C.test(e) ? r : e;
}
async function Rqo(e, r) {
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
    n = sU(e.path, Ye(e.path), r.toolPermissionContext.trustedNetworkDirectories).ok;
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
  let l = await Awn(e.path.trim(), r.toolPermissionContext),
    u = "directory" in l ? l.directory : l.path;
  if (C.test(u)) return {
    kind: "response",
    response: {
      status: "rejected",
      reason: "unsafe_path",
      message: "The target path contains invisible or non-printing characters (control, formatting, zero-width, or non-standard space characters such as the narrow no-break space macOS puts in screenshot folder names), so it cannot safely cross the trust boundary. The path is deliberately not echoed back."
    }
  };
  if ("directory" in l && iU(l.directory, r.toolPermissionContext.trustedNetworkDirectories) !== void 0) return {
    kind: "response",
    response: {
      status: "rejected",
      reason: "unsafe_path",
      message: "The target resolved to a network path or an obfuscated spelling, which cannot be set as the working directory from a remote host. The path is deliberately not echoed back."
    }
  };
  if (l.result === "not_found") return {
    kind: "response",
    response: {
      status: "rejected",
      reason: "not_found",
      message: `Couldn't find a directory at ${l.path}.`
    }
  };
  if (l.result === "not_a_directory") return {
    kind: "response",
    response: {
      status: "rejected",
      reason: "not_a_directory",
      message: `${l.path} is not a directory.`
    }
  };
  if (l.result === "blocked_by_rule") return {
    kind: "response",
    response: {
      status: "rejected",
      reason: "blocked_by_rule",
      message: B1o(xwn(l.directory, l.check, void 0, {
        terminalAffordances: !1
      }), "A Cd permission rule blocks this directory. The rule text contains control or invisible characters, so it is not echoed here \u2014 check the Cd(...) entries in your settings.")
    }
  };
  if (l.result === "same") return {
    kind: "response",
    response: {
      status: "ok",
      cwd: l.directory,
      changed: !1,
      transcript_relocated: !0
    }
  };
  let directory = l.directory;
  if (!AI(directory)) {
    let f = V0(directory),
      trust_root = f != null && f !== directory && !C.test(f) ? f : void 0;
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
    await XPe(directory, r.storageV5);
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
    } = await xJe(r.session, directory, "set_cwd", {
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
  let y = oe();
  return {
    kind: "response",
    response: {
      status: "ok",
      cwd: C.test(y) ? directory : y,
      changed: !0,
      transcript_relocated: g
    },
    freshSession: freshSession_2
  };
}
export { XPe, Awn, xwn, xJe, Pwn, Iwn, TZn, B1o, Rqo };