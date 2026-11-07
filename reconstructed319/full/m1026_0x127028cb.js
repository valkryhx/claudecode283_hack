// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  f
} from "B:/~BUN/root/chunk-drx9cnw1.js";
import {
  d
} from "B:/~BUN/root/chunk-y2g9f85n.js";
import {
  zt
} from "B:/~BUN/root/chunk-r5zmhp23.js";
import {
  $c,
  i
} from "B:/~BUN/root/chunk-j6pt0v41.js";
import {
  z,
  MN,
  Lae,
  vG
} from "B:/~BUN/root/chunk-game8aqv.js";
import {
  GA,
  ie
} from "B:/~BUN/root/chunk-2pp12te6.js";
import {
  ef,
  sb,
  CN,
  mc,
  a
} from "B:/~BUN/root/chunk-xrwdh0g4.js";
import {
  Se
} from "B:/~BUN/root/chunk-x24hm796.js";
import {
  Eo
} from "B:/~BUN/root/chunk-b3jc87kv.js";
import {
  l
} from "B:/~BUN/root/chunk-mb9chr1y.js";
import {
  Fc
} from "B:/~BUN/root/chunk-trd3c21n.js";
import {
  Gt,
  qRe,
  Na
} from "B:/~BUN/root/chunk-1ks9vs37.js";
import {
  IA
} from "B:/~BUN/root/chunk-xqymp2nr.js";
import {
  x_o
} from "B:/~BUN/root/chunk-teehnwdh.js";
import {
  ME,
  l0
} from "B:/~BUN/root/chunk-gq1er5y2.js";
import {
  ks
} from "B:/~BUN/root/chunk-d10hhz4p.js";
import {
  JHe,
  Xte,
  kae
} from "B:/~BUN/root/chunk-t4qpmjt5.js";
import {
  vT
} from "B:/~BUN/root/chunk-3xdsa4p8.js";
import {
  C_t
} from "B:/~BUN/root/chunk-0s9zh2h6.js";
import {
  X3
} from "B:/~BUN/root/chunk-amar4116.js";
import {
  Ad
} from "B:/~BUN/root/chunk-x4zqd4cy.js";
import {
  JEe,
  P9,
  QEe,
  KIt,
  my,
  VPn,
  Pye
} from "B:/~BUN/root/chunk-4vcs773m.js";
import {
  Ny
} from "B:/~BUN/root/chunk-ke150ry1.js";
import {
  se,
  Wue
} from "B:/~BUN/root/chunk-9bs2y8fc.js";
import {
  bOt,
  D8e,
  SOt,
  Fd,
  Ma,
  lq,
  tR,
  tu,
  dq
} from "B:/~BUN/root/chunk-27h4st9h.js";
import {
  fU
} from "B:/~BUN/root/chunk-m749kjym.js";
import {
  am
} from "B:/~BUN/root/chunk-ht2sp6s6.js";
import {
  Rze
} from "B:/~BUN/root/chunk-3v5ng1y2.js";
import {
  RW,
  wF
} from "B:/~BUN/root/chunk-cxcakgnv.js";
import {
  Ni
} from "B:/~BUN/root/chunk-ghar8fn5.js";
import {
  Noe,
  zc,
  g1
} from "B:/~BUN/root/chunk-wt8tyqt4.js";
import {
  mVo,
  Roi,
  Hke
} from "B:/~BUN/root/chunk-d3pgwd75.js";
import {
  jY,
  AOe,
  fBe,
  TB,
  vit,
  Cle,
  Eit
} from "B:/~BUN/root/chunk-gghehvvc.js";
import {
  he
} from "B:/~BUN/root/chunk-fet34rqr.js";
import {
  spawn as x
} from "child_process";
import {
  randomUUID as H
} from "crypto";
import {
  existsSync as N,
  statSync as L
} from "fs";
import {
  realpath as B
} from "fs/promises";
import {
  homedir as W
} from "os";
import {
  basename as G,
  dirname as j,
  join as U
} from "path";
async function u4r() {
  let r = await $c("claude"),
    e = am()[0],
    [n, p] = await Promise.all([r ? B(r).catch(() => r) : null, e ? B(e).catch(() => e) : null]);
  if (r && (p === null || n !== p)) return g1({
    cmd: r,
    prefixArgs: [],
    target: r
  });
  return zc()
}

function Y(r) {
  switch (r.kind) {
    case "newer":
      return `Successfully updated from ${{ISSUES_EXPLAINER:"report the issue at https://github.com/anthropics/claude-code/issues",PACKAGE_URL:"@anthropic-ai/claude-code",README_URL:"https://code.claude.com/docs/en/overview",VERSION:"2.1.319",FEEDBACK_CHANNEL:"https://github.com/anthropics/claude-code/issues",BUILD_TIME:"2026-11-05T18:14:18Z",GIT_SHA:"fbdd7e02e8530e4c2ade8cc67d30104e53d2c8f2",HOOKS_WORKER_URL:"B:/~BUN/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js",DD_SOURCEMAP_GROUP:"win32"}.VERSION} to version ${r.version}`;
    case "older":
      return `Successfully downgraded from ${{ISSUES_EXPLAINER:"report the issue at https://github.com/anthropics/claude-code/issues",PACKAGE_URL:"@anthropic-ai/claude-code",README_URL:"https://code.claude.com/docs/en/overview",VERSION:"2.1.319",FEEDBACK_CHANNEL:"https://github.com/anthropics/claude-code/issues",BUILD_TIME:"2026-11-05T18:14:18Z",GIT_SHA:"fbdd7e02e8530e4c2ade8cc67d30104e53d2c8f2",HOOKS_WORKER_URL:"B:/~BUN/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js",DD_SOURCEMAP_GROUP:"win32"}.VERSION} to version ${r.version}`;
    case "same":
    case "unknown":
      return "Session resumed"
  }
}
var J = Symbol("staff, over Remote Control");

function q(r) {
  if (wF(r)) return "not_owner";
  let e = r.submittedFromComposer;
  return RW(e) ? e : "not_typed"
}

function K(r, ...e) {
  if (r !== J && !RW(r)) throw Error("Can't restart automatically. Type /restart at the prompt.");
  return fBe(...e)
}
var M = (r) => ({
    type: "system",
    subtype: "local_command",
    content: r,
    level: "info",
    timestamp: new Date().toISOString(),
    uuid: H(),
    isMeta: !1
  }),
  P = he(new Map, (r) => r.clear());

function Q(r, e) {
  let n = (o, u) => (l("tengu_update_refused", {
      foreground: f(o)
    }), u),
    p = "To use the installed version, exit and start Claude Code again";
  if (vit(r) !== void 0) {
    let u = Ma(),
      c = Fd();
    if (u || c === null) return n(u ? "saving_off" : "not_written", "Can't restart this session. It isn't saved to disk, so a restart would lose it. Nothing was changed. To use the installed version, exit and start Claude Code again. You may not be able to resume this session.");
    if (lq() !== 0) return n("write_failed", "Couldn't save this session to disk, so nothing was restarted. If you exit now, you may not be able to resume all of it.");
    if (e === void 0) {
      let m = P.get(c);
      if (m === void 0) try {
        m = L(c).size > 0 ? void 0 : "empty"
      } catch {
        m = "missing"
      }
      if (m !== void 0) return P.set(c, m), n("gone", m === "empty" ? "Can't restart this session. It isn't saved to disk, so a restart would lose it. Nothing was changed. To use the installed version, exit and start Claude Code again. You may not be able to resume this session." : "Can't restart this session. Its saved file can't be found and may have been moved or deleted. You can keep working here, or run /export to save a copy of the conversation before you exit.")
    }
  }
  let v = Eit();
  if (!N(v)) return n("no_folder", `Can't restart this session here. Its folder, ${IA(ks(v))}, can't be found. Nothing was changed. To use the installed version, exit and start Claude Code in the folder you want to work in, then run /resume and press Ctrl+A to show all projects.`);
  let w = vG().map((o) => o.trim()),
    S = w.find((o, u) => {
      let c = w[u - 1];
      if (c !== "--settings" && c !== "--mcp-config" || o === "" || o.startsWith("{")) return !1;
      try {
        let m = c === "--settings" && !vT(o) ? GA(ie(), o).resolvedPath : o;
        return !L(m).isFile()
      } catch {
        return !0
      }
    });
  if (S !== void 0) return l("tengu_update_refused_launch_file", {}), n("launch_file", `Can't restart this session. It was started with ${IA(ks(S))}, which can't be read now. Nothing was changed. To use the installed version, exit and start Claude Code again, then run /resume.`);
  if (Ad()?.bridgeSessionId) return n("remote_control", "Can't restart while Remote Control is connected. To use the installed version, exit and start Claude Code again, then run /resume.");
  if (!N(zc().target)) return n("no_launcher", "Can't restart. The installed version wasn't found. To check your installs, run /doctor.");
  let C = SOt(bOt);
  if (C !== void 0) return n("above_max_version", `Can't restart on the installed version. Version ${C} is on hold, so this session is staying on ${{ISSUES_EXPLAINER:"report the issue at https://github.com/anthropics/claude-code/issues",PACKAGE_URL:"@anthropic-ai/claude-code",README_URL:"https://code.claude.com/docs/en/overview",VERSION:"2.1.319",FEEDBACK_CHANNEL:"https://github.com/anthropics/claude-code/issues",BUILD_TIME:"2026-11-05T18:14:18Z",GIT_SHA:"fbdd7e02e8530e4c2ade8cc67d30104e53d2c8f2",HOOKS_WORKER_URL:"B:/~BUN/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js",DD_SOURCEMAP_GROUP:"win32"}.VERSION}. Nothing was changed.`);
  return
}
var oya = async (r, e) => {
  if (ME()) return {
    type: "text",
    value: "/restart isn't available in this environment."
  };
  let n = q(e);
  if (n === "not_owner") return l("tengu_update_refused", {
    not_owner: !0
  }), l("tengu_update_refused_not_owner", {}), {
    type: "text",
    value: "/restart isn't available over Remote Control."
  };
  let p = Gt() ? i.CLAUDE_JOB_DIR : void 0;
  if (Gt() && (!qRe() || !p)) {
    l("tengu_update_refused", {
      bg_session: !0
    });
    let t = qRe() ? null : my();
    return {
      type: "text",
      value: t ? `This is a background session \u2014 press \u2190 to detach, then run \`claude respawn ${t}\` to restart it on the latest build.` : "This is a background session \u2014 press \u2190 to detach, then run `claude respawn <id>` to restart it on the latest build (the id is in the agents view)."
    }
  }
  if (!p) {
    let t = Fd(),
      b = U(Ny(Eit()), `${z()}.jsonl`);
    if (t && t !== b) {
      l("tengu_update_refused", {
        transcript_path_drift: !0
      });
      let y = IA(ks(Eit())),
        A = j(t),
        g = await kae(t),
        s = g && (JHe(g.tail, "relocated", "relocatedCwd") ?? Xte(g.head, "cwd"));
      return {
        type: "text",
        value: `Cannot /update \u2014 ${s&&Ny(s)===A?`this session belongs to ${IA(ks(s))} but is running in ${y}`:`this session is running in ${y} but its transcript is in ${IA(ks(A))}`}. Restart manually with --resume to continue on the latest version.`
      }
    }
  }
  let v = (t) => {
      if (!Hke(e.taskRegistry.all())) return;
      return l("tengu_update_refused", {
        active_tasks: !0,
        ...t && {
          deferred: t
        }
      }), "Can't restart while work is running in the background \u2014 wait for it to finish (or stop it via /tasks), then try again."
    },
    w = (t) => {
      let b = P9(se(e), MN());
      if (b.length === 0) return v(t);
      l("tengu_update_refused", {
        uncarriable: !0
      });
      let y = Ma() ? "" : " (add --continue to return to this conversation)";
      return `Can't switch to the new version from inside this session \u2014 it has restrictions a restart can't carry over (${b.join("; ")}). Nothing was changed; exit and start claude again for the new version${y}.`
    },
    S = p ? v() : w();
  if (S !== void 0) return {
    type: "text",
    value: S
  };
  if (p) {
    let t = G(p);
    if (await TB(e.messages, e.storageV5), !await zt(tu(), 30000, "session flush").then(() => !0, () => !1)) return l("tengu_update_refused", {
      bg_flush_failed: !0
    }), {
      type: "text",
      value: "Couldn't save the session to disk, so nothing was restarted \u2014 try /restart again in a moment."
    };
    let y = await u4r(),
      A = v(!0);
    if (A !== void 0) return {
      type: "text",
      value: A
    };
    let g = fU(Rze({
      ...process.env
    }));
    for (let s of C_t) delete g[s];
    delete g.CLAUDE_JOB_DIR;
    for (let s of Object.keys(g))
      if (s.startsWith("CLAUDE_BG_")) delete g[s];
    l("tengu_update_bg_respawn", {
      carried_comment_monitor: mVo() && Roi(e.taskRegistry.all())
    });
    try {
      let s = x(y.cmd, [...y.prefixArgs, "respawn", t], {
        detached: !0,
        stdio: "ignore",
        windowsHide: !0,
        env: g,
        cwd: W()
      });
      l0(s.pid), s.on("error", (I) => {
        a(I)
      }), s.unref()
    } catch (s) {
      return a(s), l("tengu_update_refused", {
        bg_spawn_failed: !0
      }), {
        type: "text",
        value: `Couldn't restart automatically \u2014 press \u2190 to detach, then run \`claude respawn ${t}\` to restart it on the latest build.`
      }
    }
    return {
      type: "text",
      value: `Restarting this session on the latest version\u2026 If it doesn't come back within a minute, run \`claude respawn ${t}\` from a terminal.`
    }
  }
  if (n === "not_typed") return l("tengu_update_refused", {
    foreground: f(n)
  }), l("tengu_update_refused_not_typed", {}), {
    type: "text",
    value: "Can't restart automatically. Type /restart at the prompt."
  };
  let C = Q(e.messages, e.storageV5);
  if (C !== void 0) return {
    type: "text",
    value: C
  };
  await TB(e.messages, e.storageV5);
  let o = w(!0);
  if (o !== void 0) return {
    type: "text",
    value: o
  };
  let u = se(e),
    c = [...JEe(u, Wue(e)), ...QEe(u, Lae())],
    m = Fc() ? void 0 : e.getAppState().teamContext?.teamName;
  await Cle();
  let O = w(!0);
  if (O !== void 0) return {
    type: "text",
    value: O
  };
  let h = Ad(),
    k = h?.bridgeSessionId,
    D = h?.getLastSequenceNum(),
    F = h?.outboundOnly,
    V = h?.sessionGroupingId;
  if (k) e.setAppState((t) => t.replBridgeSkipNextArchive ? t : {
    ...t,
    replBridgeSkipNextArchive: !0
  }), h.writeSdkMessages([x_o("Switching to latest Claude Code\u2026 reconnecting", z())]), await zt(h.flush(), 2000, "bridge flush").catch(() => {}), await h.teardown({
    skipArchive: !0
  });
  let _ = {};
  if (m) {
    _.CLAUDE_INTERNAL_ASSISTANT_TEAM_NAME = m;
    let {
      sessionListId: t
    } = Ni().taskList;
    if (t) _.CLAUDE_INTERNAL_SESSION_TASK_LIST_ID = t
  }
  Object.assign(_, X3()), Object.assign(_, KIt(u.additionalWorkingDirectories)), Object.assign(_, Pye(k, D, F, V, VPn(h, dq())) ?? {});
  let E = zc(),
    T = await jY(e.messages, "relaunch", {}, e.storageV5),
    R = vit(e.messages) !== void 0;
  if (R && !T) {
    try {
      await tR([...e.messages, M(`<${ef}>/restart</${ef}>
<${sb}>restart</${sb}>
<${CN}></${CN}>`), M(`<${mc}>${Y(D8e(E.target))}</${mc}>`)], void 0, void 0, void 0, e.storageV5)
    } catch (t) {
      a(t)
    }
    await TB(e.messages, e.storageV5)
  }
  l(R ? "tengu_update_relaunch" : "tengu_update_relaunch_fresh", {
    from_version: Na({
      ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
      PACKAGE_URL: "@anthropic-ai/claude-code",
      README_URL: "https://code.claude.com/docs/en/overview",
      VERSION: "2.1.319",
      FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
      BUILD_TIME: "2026-11-05T18:14:18Z",
      GIT_SHA: "fbdd7e02e8530e4c2ade8cc67d30104e53d2c8f2",
      HOOKS_WORKER_URL: "B:/~BUN/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js",
      DD_SOURCEMAP_GROUP: "win32"
    }.VERSION),
    target_version: Na(bOt(E.target)),
    native_install: Noe()
  });
  try {
    return await K(n, T, {
      launcher: E,
      freshIfNoTranscript: !R,
      extraArgs: c,
      proactivity: {
        proactivityLevel: e.getProactivityLevel(),
        toolPermissionContext: u
      },
      env: Object.keys(_).length > 0 ? _ : void 0,
      preSpawn: () => {
        process.stdout.write(R && lq() !== 0 ? Se.dim(`
Claude's last response couldn't be saved, so it may be missing.

`) : `
`)
      }
    }, e.storageV5)
  } catch (t) {
    if (!T) throw t;
    return a(t), {
      type: "text",
      value: Eo(e.session) ? AOe("Couldn't restart Claude Code (detail withheld on this connection).", d(t)) : `Couldn't restart Claude Code \u2014 ${d(t)}.`
    }
  }
};
export {
  u4r,
  oya
};
